(ns zombunity.daemon.menu
  (:require [zombunity.data :as data]))

(def msg-filters [:menu])

(def menu-msgs ["Menu:" "login" "register"])

(defn process-msg
  [msg]
  (data/msg-client {:conn-id (:conn-id msg) :message menu-msgs})
  nil)
