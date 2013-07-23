(ns zombunity.daemon.chat
  (:require [zombunity.data :as data]))

(def msg-filters [{:type :chat :filter (fn [m] (:user-id m))}])

(defn process-msg
  [{:keys [args]}]
  (apply println "chat daemon: " args)
  (let [text (interpose " " args)]
    (if (not (empty? text))
      (do
        (data/insert [["chat_msg" {:msg (apply str text)}]])
        (data/msg-server {:type :all-clients :message {:type :chat :text (apply str text)}}))))
  nil)
