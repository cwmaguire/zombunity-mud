(ns zombunity.daemon.msg-client
  (:require [zombunity.data :as data]))

(def msg-filters [:client])

(defn process-msg
  [msg]
  (data/msg-client msg)
  nil)
