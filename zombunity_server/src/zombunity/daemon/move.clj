(ns zombunity.daemon.move
  (:require [zombunity.db :as db]))

(def msg-types [:n :s :e :w :u :d ])

(def ^:dynamic *dispatch-fn* (atom nil))

(defn register-dispatch-fn
  "one-time registration of the dispatch function;
   I couldn't refer back to dispatch (circular reference) so
   I'll have dispatch call this ns and load a dispatch fn."
  [dispatch-fn]
  (reset! *dispatch-fn* dispatch-fn))


(defn process-msg
  [{:keys [conn-id]}]
  ; ERROR: (apply str nil) returns empty string
  (@*dispatch-fn* {:type :client :conn-id conn-id :message "No movement commands as of yet."})
  nil)
