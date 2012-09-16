(ns zombunity.data.banner-data)

(def data (atom nil))

(defmethod zombunity.data/msg-client ::banner
  [x]
  (reset! data x))
