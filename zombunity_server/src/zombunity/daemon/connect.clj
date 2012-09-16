(ns zombunity.daemon.connect
  (:require [zombunity.data :as data]))

(def msg-filters [:connect])

(defn process-msg
  [m]
  (data/insert [["msg_to_server" (assoc m :type :banner)]
                ["msg_to_server" (assoc m :type :menu)]])
  nil)
