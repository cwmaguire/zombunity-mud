(ns zombunity.http
  (:import [org.webbitserver WebServer WebServers WebSocketHandler]
           [org.webbitserver.handler StaticFileHandler]
           [java.util TimerTask Timer])
  (:require [zombunity.db :as db]
            [clojure.data.json :as json])
)

(def curr-conn-id (atom 0))

; map IDs to connections
(def id-conns (atom {}))

; map connections to IDs
(def conn-ids (atom {}))

(defn jsonify
  "Wrap the text from the client in a proper server message with type text"
  [text]
  (str "{\"type\" ""text"", ""text"" """ text """}"))

(defn proc-msg-from-client [connection json-msg]
  (println "HTTP rec'd client message: " json-msg)
  (let [json-plus-client-id (->
                              (json/read-json json-msg)
                              (assoc :conn-id (get @conn-ids connection))
                              json/json-str )]
    (db/msg-server json-plus-client-id)
    (println "HTTP sent server message: " json-plus-client-id)))

(defn send-to-connection
  [id message]
  (println "HTTP sending [" message "] to client connection " id)
  (.send (get @id-conns id) message))

(defn proc-msgs-from-server
  []
  (let [msgs (db/get-messages)]
    (doall (map (fn [{:keys [conn-id message]}] (send-to-connection conn-id message)) msgs))))

(defn start-processing-messages
  []
  (let [task (proxy [TimerTask] []
    (run [] (proc-msgs-from-server)))]
    (.schedule (new Timer true) task (long 0) (long 100))))

(defn -main []
  (doto (WebServers/createWebServer 8080)
    (.add "/websocket"
      (proxy [WebSocketHandler] []
        (onOpen [c]
          (println "opened" c)
          (let [conn-id (swap! curr-conn-id inc)]
              (swap! id-conns assoc conn-id c)
              (swap! conn-ids assoc c conn-id)))
        (onClose [c]
          (println "closed" c)
          (let [conn-id (get @conn-ids c)]
            (swap! conn-ids dissoc c)
            (swap! id-conns dissoc conn-id)))
        (onMessage [c j] (proc-msg-from-client c j))))

    (.add (StaticFileHandler. "."))
    (.start))
  (start-processing-messages))

