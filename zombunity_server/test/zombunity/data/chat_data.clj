(ns zombunity.data.chat-data)

(def data (atom nil))

(defmethod zombunity.data/insert ::chat
  [x]
  (reset! data x))
