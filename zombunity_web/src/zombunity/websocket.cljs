(ns zombunity.websocket
  (:require [goog.net.WebSocket :as ws]
            [zombunity.dispatch :as dispatch]
            [clojure.string :as string]))

(def websocket (atom nil))

(defn on-open [evt]
  ;(js/alert (str "on-open called with evt" evt))
  (dispatch/dispatch :conn-open evt))

(defn on-close [evt]
  (dispatch/dispatch :conn-close evt))

; We'll need to change this to dispatch on the event type
; perhaps by peeling apart the JSON to get the event
(defn on-msg [evt]
  ;(js/alert (str "Received Message! " (.-message evt)))
  (dispatch/dispatch :message (.-message evt)))

(defn send [message]
  (.send @websocket (str "{\"type\":\"text\", \"text\":\"" message "\"}")))

(defn connect [_]
  ;(js/alert "websocket.connect called")
  (let [websocket-temp (goog.net.WebSocket.)]
    (reset! websocket websocket-temp)
    ;TODO switch these to goog.events.listen(websocket  ws/EventType.BLAH function)
    (.addEventListener websocket-temp ws/EventType.MESSAGE on-msg)
    (.addEventListener websocket-temp ws/EventType.OPENED on-open)
    (.addEventListener websocket-temp ws/EventType.CLOSED on-close)
    (.open websocket-temp "ws://127.0.0.1:8080/websocket")))

(defn disconnect [_]
  (.close @websocket)
  (reset! websocket nil))

(defn register-listeners
  "Called by .core to register listeners for events we're interested in"
  []
  (dispatch/register-listener :input send)
  (dispatch/register-listener :connect connect)
  (dispatch/register-listener :disconnect disconnect))