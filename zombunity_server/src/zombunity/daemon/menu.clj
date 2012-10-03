(ns zombunity.daemon.menu
  (:require [zombunity.data :as data]
            [clojure.data.json :as json]))

(def msg-filters [:menu])

(def menu-msgs {:type :menu :title "Menu" :items ["Login" "Register"]})

(defn process-msg
  [msg]
  (data/msg-client {:conn-id (:conn-id msg) :message (json/json-str menu-msgs)})
  nil)
