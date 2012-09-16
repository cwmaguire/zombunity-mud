(ns zombunity.daemon.banner
  (:require [zombunity.data :as data]))


(def msg-filters [:banner])

(def banner-msg "Welcome to Zombunity-MUD!")

(defn process-msg
  [{:keys [conn-id]}]
  (data/msg-client {:conn-id conn-id :message banner-msg})
  nil)
