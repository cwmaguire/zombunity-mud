(ns zombunity.daemon.no-match
  (:require [zombunity.data :as data]))

; will respond to anything unrecognized as long as the user isn't logging in
(def msg-filters [{:type nil
                   :filter (fn [msg] (not (data/is-logging-in? (:conn-id msg))))}])

(defn process-msg
  [msg]
  (data/msg-client {:conn-id (:conn-id msg) :message (str "Command " (:type msg) " not recognized.")})
  nil)
