(ns zombunity.daemon.no-match
  (:require [zombunity.db :as db]))

(def msg-filters [{:fn nil
                   :filter (fn [msg] (not (or (:user-id msg) (db/is-logging-in? (:conn-id msg)))))}])

(defn process-msg
  [msg]
  (db/msg-client {:conn-id conn-id :message (str "Command " (:type msg) " not recognized.")})
  nil)
