(ns zombunity.dispatch
  (:import [java.util TimerTask Timer])
  (:require [zombunity.db :as db]
            [clojure.data.json :as json]
            [zombunity.daemon.parse :as parse-d]))

(def timer (atom nil))

(def daemon-fn
  {:text parse-d/process-msg
   :client db/msg-client})

(defn dispatch
  "Dispatches messages either to a daemon or to the message-queue"
  [m]
  ((get daemon-fn (keyword (:type m))) m))

(defn register-dispatch-fn
  "Register the dispatch function with each namespace"
  []
  (parse-d/register-dispatch-fn dispatch))

(defn process-messages
  "Grabs messages form the database and dispatches them to the appropriate daemon"
  []
  (doall (map dispatch (db/get-messages))))

(defn start-processing-messages
  []
  (let [task (proxy [TimerTask] []
    (run [] (process-messages)))]
    (.schedule (reset! timer (new Timer true)) task (long 0) (long 100))))
