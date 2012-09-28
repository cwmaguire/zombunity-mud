(ns zombunity.dispatch
  (:import [java.util TimerTask Timer]
           [java.io File])
  (:require [zombunity.data :as data]
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
(def msg-filters-var-name "msg-filters")

; these two daemons functions require access to the user connections
(def daemon-fns (atom {:all-clients [{:fn msg-all-clients}]
                       :user-logged-in [{:fn register-user-conn}]}))

(defn dispatch
  "dispatch events to daemon functions by type, filtered by filter functions"
  [{:keys [conn-id type user-id] :as msg}]
  (println "Got message: " msg)
  (let [msg (assoc msg :user-id (@conn-users conn-id user-id))
        fn-filters (get @daemon-fns (keyword type) (get @daemon-fns nil))
        fns (map :fn (filter #(if-let [f (:filter %)] (f msg) true) fn-filters))]
    (doall (map #(% msg) fns))))

(defn dispatch-new-messages
  []
  (doall (map dispatch (data/get-messages))))

(defn filter-classpath-namespaces
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
  "registers the daemon in the daemon function map, requires daemon namespace"
  ([daemon-ns]

    (println "Registering daemon: " daemon-ns)

    (require [daemon-ns])

    (if-let [msg-filters (get-ns-value daemon-ns msg-filters-var-name)]
      (doall (map (partial map-daemon-filters-to-fn (get-ns-value daemon-ns process-fn-name)) msg-filters))
      (println "Did not find msg-type list for " daemon-ns))
    nil))

(defn register-daemons
  []
  (doall (map register-daemon (filter-classpath-namespaces #"zombunity\.daemon")))
  nil)

(defn start-dispatch-scheduler
  []
  (let [task (proxy [TimerTask] []
               (run [] (dispatch-new-messages)))]
    (.schedule (reset! timer (new Timer true)) task (long 0) (long 2000))))

(defn main []
  (register-daemons)
  (start-dispatch-scheduler))
