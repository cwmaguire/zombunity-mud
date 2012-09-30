(ns zombunity.daemon.connect
  (:require [zombunity.data :as data]))

(def msg-filters [:connect])

(defn process-msg
  [m]
  (data/msg-server (assoc m :type :banner))
  (data/msg-server (assoc m :type :menu))
  nil)
