(ns zombunity.daemon.chat
  (:require [zombunity.data :as data]))

(def msg-filters [{:type :chat :filter (fn [m] (:user-id m))}])

(defn process-msg
  [{:keys [args]}]
  (apply println "Chat: " args)
  (let [text (interpose " " args)]
    (if (not (empty? text))
        (data/insert [["chat_msg" {:msg (apply str text)}]
                    ["msg_to_server" {:type :all-clients :message (str ":type :chat :text \"" (apply str text) "\"")}]])))
  nil)
