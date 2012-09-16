(ns zombunity.daemon.maxlogins
  (:require [clojure.string :as str]
            [zombunity.data :as data]))

(def msg-filters [:login-max-attempts])

(defn process-msg
  [{:keys [conn-id text]}]
  (data/msg-client {:conn-id conn-id :message "Max login attempts exceeded!"}))

