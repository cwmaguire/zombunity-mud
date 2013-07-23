(ns zombunity.daemon.menu
  (:require [zombunity.data :as data]))

(def msg-filters [:menu])

(def menu-msgs {:type :menu :title "Menu" :items ["Login" "Register"]})

(defn process-msg
  [msg]
  (data/msg-client {:conn-id (:conn-id msg) :message menu-msgs})
  nil)
