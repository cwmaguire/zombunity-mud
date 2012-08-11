(ns zombunity.http
  (:import [org.webbitserver WebServer WebServers WebSocketHandler]
           [org.webbitserver.handler StaticFileHandler])
  (:require [zombunity.dispatch :as dispatch]
            [zombunity.data :as data]
            [clojure.data.json :as json])
)

(def webserver (atom nil))

; the last id we used to store a connection
(def last-conn-id (atom 0))
; map IDs to connections
(def id-conns (atom {}))
; map connections to IDs
(def conn-ids (atom {}))

(defn jsonify
  "Wrap the text from the client in a proper server message with type text"
  [text]
  (str "{\"type\" ""text"", ""text"" """ text """}"))

(defn dispatch [connection json-msg]
  (println "HTTP rec'd client message: " json-msg)
  (let [msg (-> (json/read-json json-msg)
                (assoc :conn-id (get @conn-ids connection)))]
    (dispatch/dispatch msg)
    (println "HTTP sent server message: " msg)))

(defn send-client-msg
  [{:keys [conn-id message]}]
  (println "HTTP sending [" message "] to client connection " conn-id)
  (if-let [conn (get @id-conns conn-id)]
    (.send conn message)))

(defn send-client-msgs
  [_ ref_ _ msgs]
  (dosync
    (apply alter ref_ dissoc (keys msgs)))
  (doall (map send-client-msg (vals msgs))))

(defn -main []
  ; tell dispatch how to send messages back
  (add-watch data/client-msgs nil send-client-msgs)
  (dispatch/register-daemons)

  (let [webbitServer (doto (WebServers/createWebServer 80)
                        (.add "/websocket"
                          (proxy [WebSocketHandler] []
                            (onOpen [c]
                              (println "opened" c)
                              (let [conn-id (swap! last-conn-id inc)]
                                  (swap! id-conns assoc conn-id c)
                                  (swap! conn-ids assoc c conn-id)
                                  (dispatch/dispatch {:type "login" :conn-id conn-id})))
                            (onClose [c]
                              (println "closed" c)
                              (let [conn-id (get @conn-ids c)]
                                (swap! conn-ids dissoc c)
                                (swap! id-conns dissoc conn-id)))
                            (onMessage [c j] (dispatch c j))))

                        (.add (StaticFileHandler. "d:/dev_zombunity/zombunity/zombunity_server/src/zombunity/public/"))
                        (.maxContentLength 520288)
                        (.maxChunkSize 65536)
                        (.maxHeaderSize 65536)
                        (.start)
                        (->> (.getUri) (println "Started webserver on ")))]
    ;(reset! webserver webbitServer)
    ))
