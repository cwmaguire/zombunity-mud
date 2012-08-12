(ns zombunity.dispatch
  (:import [java.util TimerTask Timer]
           [java.io File])
  (:require [clojure.data.json :as json]
            [clojure.string :as str]
            [clojure.tools.namespace :as tools-ns]
            [zombunity.data :as data]))

(declare dispatch)

(def timer (atom nil))
(def process-fn-name "process-msg")
(def reg-dispatch-fn-name "register-dispatch-fn")
(def msg-type-var-name "msg-types")

(defn register-user-conn
  [{:keys [conn-id user-id]}]
  (dosync
    (alter data/conn-users assoc conn-id user-id)))

(defn msg-client
  "Stores a message map as a value in the client-msgs map ref with a unique key;
   if the client message map ref and msg-id ref are not supplied then
   data/client-msgs and data/msg-id are used. This allows for testing without
   relying on an existing ref."
  ([m]
    (println "DISPATCH: Messaging client " (:conn-id m) ", no ref, message = " (:message m))
    (msg-client m data/client-msgs data/msg-id))

  ([m client-msgs-ref msg-id-ref]
    (println "DISPATCH: Messaging client " (:conn-id m) " with ref.")
    (let [msg-id (swap! msg-id-ref inc)]
      ;(println "DISPATCH: altering client-msgs with assoc, " msg-id " and " m)
      (dosync
        (alter client-msgs-ref assoc msg-id m)))))

(defn msg-all-clients
  "Creates and stores a message map for each connected user
  in the client message ref using the next id from the msg-id ref;
  if the client-msgs, conn-users and msg-id refs are not supplied
  then data/client-msgs, data/conn-users and data/msg-id are used"
  ([m]
     (msg-all-clients m data/client-msgs data/conn-users data/msg-id))

  ([{:keys [message]} client-msgs-ref conn-users-ref msg-id-ref]
    (dosync
      (doall
        (map (partial alter client-msgs-ref assoc)
          (repeatedly #(swap! msg-id-ref inc))
          (map assoc
            (repeat {:message message})
            (repeat :conn-id)
            (keys conn-users-ref)))))))

(def daemon-fns (atom {:client #{msg-client}
                       :all-clients #{msg-all-clients}
                       :user-logged-in #{register-user-conn}}))

(defn cmd-not-recognized
  [m]
  (msg-client (assoc m :message (str "Command not recognized: " (m :type)))))

(defn dispatch
  "dispatch events for logged in users with the user-id or dispatch to the login daemon-fns"
  [{:keys [conn-id type user-id] :as m}]
  (println "DISPATCH: Rec'd message: " m)
  (let [regd-user-id (get @data/conn-users conn-id user-id)]
    (if (and
          (nil? regd-user-id)
          (not (#{:client :login-max-attempts :user-logged-in :all-clients} (keyword type))))
      (doall (map #(% m) (@daemon-fns :login)))
      (doall (map #(% (assoc m :user-id regd-user-id)) (get @daemon-fns (keyword type) [cmd-not-recognized]))))))

(defn find-daemons
  []
  (filter #(re-find #"zombunity\.daemon" (str %)) (tools-ns/find-namespaces-on-classpath)))

(defn register-daemon-msg-type-fn
  [fn msg-type]
  (let [fns (or (get @daemon-fns msg-type) #{})]
    (swap! daemon-fns assoc msg-type (conj fns fn))))

(defn get-ns-value
  "Get a value from a var in a namespace using the namespace and a string containing the name of the var"
  [ns var-name]
  (if-let [var_ (ns-resolve ns (symbol var-name))]
    (var-get var_)))

(defn register-daemon
  "registers the daemon in the daemon function map, registers
  dispatch function with daemon, requires daemon namespace"
  [daemon-ns]

  (println "Registering dameon: " daemon-ns)

  (require [daemon-ns] :reload)

  (if-let [msg-types (get-ns-value daemon-ns msg-type-var-name)]
    (doall (map (partial register-daemon-msg-type-fn (get-ns-value daemon-ns process-fn-name)) msg-types))
    (println "Did not find msg-type list for " daemon-ns))

  (if-let [register-dispatch-fn (get-ns-value daemon-ns reg-dispatch-fn-name)]
    (register-dispatch-fn dispatch)
    (println "Did not find register-dispatch-fn for " daemon-ns))
  nil)

(defn register-daemons
  []
  (doall (map register-daemon (find-daemons)))
  nil)
