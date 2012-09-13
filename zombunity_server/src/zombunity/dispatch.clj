(ns zombunity.dispatch
  (:import [java.util TimerTask Timer]
           [java.io File])
  (:require [zombunity.db :as db]
            [clojure.data.json :as json]
            [clojure.tools.namespace :as tools-ns]))

(declare dispatch)

(def conn-users (atom {}))

(defn register-user-conn
  [{:keys [conn-id user-id]}]
  (swap! conn-users assoc conn-id user-id))

(defn msg-all-clients
  [{:keys [message]}]
  (doall (map #(dispatch {:type :client :message message :conn-id %}) (keys @conn-users))))

(def timer (atom nil))
(def process-fn-name "process-msg")
(def reg-dispatch-fn-name "register-dispatch-fn")
(def msg-filters-var-name "msg-filters")

(def daemon-fns (atom {:client [{:fn db/msg-client}]
                       :all-clients [{:fn msg-all-clients}]
                       :user-logged-in [{:fn register-user-conn}]}))

(defn cmd-not-recognized
  [m]
  (db/msg-client (assoc m :message (str "Command not recognized: " (m :type)))))

(defn dispatch
  "dispatch events for logged in users with the user-id or dispatch to the login daemon-fns"
  [{:keys [conn-id type user-id] :as m}]
  (println "Got message: " m)
  (let [m (assoc m :user-id (@conn-users conn-id user-id))
        fn-filters (get @daemon-fns (keyword type) [{:fn cmd-not-recognized}])
        fns (map :fn (filter #(if-let [f (:filter %)] (f m) true) fn-filters))]
    (doall (map #(% m) fns))))

(defn process-messages
  "Grabs messages form the database and dispatches them to the appropriate daemon"
  []
  (doall (map dispatch (db/get-messages))))


(defn find-namespaces
  [pattern]
  (filter #(re-find pattern (str %)) (set (tools-ns/find-namespaces-on-classpath))))

(defn map-daemon-filters-to-fn
  "Register the filter function and process function against the message type; msg-filters can be a msg-type keyword
   (e.g. :chat) or a map of {:type msg-type :filter filter-fn}, e.g. {:type :chat :filter (fn [m] true)}. The filter
   function can be nil or a function that takes a single argument."
  [fn msg-filters]
  (let [{:keys [type filter]} (cond
                                    (keyword? msg-filters) {:type msg-filters}
                                    (map? msg-filters) msg-filters)
        regd-fns (or (get @daemon-fns type) #{})]
    (swap! daemon-fns assoc type (conj regd-fns {:fn fn :filter filter}))))

(defn get-ns-value
  "Get a value from a var in a namespace using the namespace and a string containing the name of the var"
  [ns var-name]
  (var-get (ns-resolve ns (symbol var-name))))

(defn register-daemon
  "registers the daemon in the daemon function map, registers
  dispatch function with daemon, requires daemon namespace"

  ([daemon-ns] (register-daemon dispatch daemon-ns))

  ([dispatch-fn daemon-ns]

    (println "Registering dameon: " daemon-ns)

    (require [daemon-ns] :reload)

    (if-let [msg-filters (get-ns-value daemon-ns msg-filters-var-name)]
      (doall (map (partial map-daemon-filters-to-fn (get-ns-value daemon-ns process-fn-name)) msg-filters))
      (println "Did not find msg-type list for " daemon-ns))

    (if-let [register-dispatch-fn (get-ns-value daemon-ns reg-dispatch-fn-name)]
      (register-dispatch-fn dispatch-fn)
      (println "Did not find register-dispatch-fn for " daemon-ns))
    nil))

(defn register-daemons
  []
  (doall (map register-daemon (find-namespaces #"zombunity\.daemon")))
  nil)


(defn start-processing-messages
  []
  (let [task (proxy [TimerTask] []
               (run [] (process-messages)))]
    (.schedule (reset! timer (new Timer true)) task (long 0) (long 2000))))

(defn main []
  (register-daemons)
  (start-processing-messages))
