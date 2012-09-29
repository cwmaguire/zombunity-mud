(ns zombunity.daemon.move
  (:require [zombunity.data :as data]))

(def msg-filters [:n :s :e :w :u :d :nw :ne :sw :se])

(defn process-msg
  [{:keys [conn-id]}]
  (data/msg-client {:conn-id conn-id :message "No movement commands as of yet."})
  nil)
