(ns zombunity.daemon.chat
  (:require [zombunity.db :as db]))

(def msg-filters [{:type :chat :filter (fn [m] (:user-id m))}])

(def ^:dynamic *dispatch-fn* (atom nil))

(defn register-dispatch-fn
  "one-time registration of the dispatch function;
   I couldn't refer back to dispatch (circular reference) so
   I'll have dispatch call this ns and load a dispatch fn."
  [dispatch-fn]
  (reset! *dispatch-fn* dispatch-fn))


(defn process-msg
  [{:keys [args]}]
  (apply println "Chat: " args)
  (if-let [text (first args)]
      (let [{:keys [id]} (db/insert "chat_msg" {:msg text})]
        (@*dispatch-fn* {:type :all-clients :message (str ":type :chat :id " id " :text " text)})))
  nil)
