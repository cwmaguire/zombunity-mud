(ns zombunity.data)

(def target (atom :zombunity.db/hsqldb))

(defn set-target [k] (reset! target k))

(defn dispatch [& _] (deref target))

(defmulti select dispatch)
(defmulti insert dispatch)
(defmulti update dispatch)
(defmulti delete dispatch)
(defmulti get-messages dispatch)
(defmulti msg-client dispatch)
(defmulti is-logging-in? dispatch)
