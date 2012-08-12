(ns zombunity.daemon.chat
  (:require [zombunity.data :as data]))

(def msg-types [:chat])

(def ^:dynamic *dispatch-fn* (atom nil))

(defn register-dispatch-fn
  "one-time registration of the dispatch function;
   I couldn't refer back to dispatch (circular reference) so
   I'll have dispatch call this ns and load a dispatch fn."
  [dispatch-fn]
  (reset! *dispatch-fn* dispatch-fn))

(defn store-chat-msg
  ([msg]
    (store-chat-msg msg data/chat))

  ([msg chat-ref]
    (let [id (data/next-chat-id)]
      (dosync
        (alter chat-ref assoc id msg))
      id)))

(defn process-msg
  ([{:keys [args]}]
    (process-msg args @*dispatch-fn*))

  ([args dispatch]
    (apply println "Chat: " args)
    (if-let [text (first args)]
      (let [id (store-chat-msg text)]
        (dispatch {:type :all-clients :message (str ":type :chat :id " id " :text " text)})))
    nil))
