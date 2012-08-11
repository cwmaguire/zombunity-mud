(ns zombunity.data)


(def client-msgs (ref []))
(def msg-id (atom 0))
(def conn-users (ref {}))
(def users (ref {"a" "b" "c" "d"}))
(def login-state (ref {}))
(def chat (ref []))
(def chat-id (atom 0))
(defn next-chat-id [] (swap! chat-id inc))
