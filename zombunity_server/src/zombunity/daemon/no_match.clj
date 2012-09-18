(ns zombunity.daemon.no-match
  (:require [zombunity.db :as db]))

; will respond to anything unrecognized as long as the user isn't logging in
(def msg-filters [{:fn nil
                   :filter (fn [msg] (not (db/is-logging-in? (:conn-id msg))))}])

(defn process-msg
  [msg]
  (db/msg-client {:conn-id conn-id :message (str "Command " (:type msg) " not recognized.")})
  nil)
