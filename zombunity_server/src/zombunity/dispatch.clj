(ns zombunity.dispatch
  (:import [java.util TimerTask Timer]
           [java.io File])
  (:require [zombunity.db :as db]
            [clojure.data.json :as json]
            [clojure.string :as str]
            [clojure.tools.namespace :as tools-ns]))

(def timer (atom nil))
(def daemon-fns (atom {:client #{db/msg-client}}))

(defn dispatch
  "Dispatches messages either to a daemon or to the message-queue"
  [m]
  (map #(% m) (get daemon-fns (keyword (:type m)) )))

(defn process-messages
  "Grabs messages form the database and dispatches them to the appropriate daemon"
  []
  (doall (map dispatch (db/get-messages))))

(defn find-daemons
  []
  (filter #(re-find #"zombunity\.daemon" (str %)) (tools-ns/find-namespaces-on-classpath)))

(defn register-daemon-event-fn
  [fn event]
  (let [fns (or (get @daemon-fns event) #{})]
    (swap! daemon-fns assoc event (conj fns fn))))

(defn register-daemon
  "registers the daemon in the daemon function map, registers
  dispatch function with daemon, requires daemon namespace"
  [daemon-ns]

  (println "Registering dameon: " daemon-ns)

  (require [daemon-ns])

  (if-let [events (var-get (ns-resolve daemon-ns (symbol "events")))]
    (doall (map (partial register-daemon-event-fn (var-get (ns-resolve daemon-ns (symbol "process-msg")))) events))
    (println "Did not find event list for " daemon-ns))

  (if-let [register-dispatch-fn (var-get (ns-resolve daemon-ns (symbol "register-dispatch-fn")))]
    (register-dispatch-fn dispatch)
    (println "Did not find register-dispatch-fn for " daemon-ns))
  nil)

(defn register-daemons
  []
  (doall (map register-daemon (find-daemons)))
  nil)


(defn start-processing-messages
  []
  (let [task (proxy [TimerTask] []
    (run [] (process-messages)))]
    (.schedule (reset! timer (new Timer true)) task (long 0) (long 100))))
