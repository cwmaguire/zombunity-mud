(ns zombunity.data.simple-data)

(def msg-client (atom nil))
(def insert (atom nil))

(defmethod zombunity.data/msg-client ::simple
  [x]
  (reset! msg-client x))

(defmethod zombunity.data/insert ::simple
  [x]
  (reset! insert x))
