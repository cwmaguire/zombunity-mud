(ns zombunity.data)

(def target (atom ::hsqldb))

(defn set-target [k] (reset! target k))

(defmulti select (fn [_] (deref target)))
(defmulti insert (fn [_] (deref target)))
