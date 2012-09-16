(ns zombunity.daemon.menu
  (:require [zombunity.db :as db]))

(def msg-filters [:menu])

(def menu-msgs ["Menu:" "login" "register"])

(defn process-msg
  [msg]
  (db/msg-client {:conn-id (:conn-id msg) :message menu-msgs})
  nil)
