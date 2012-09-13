(ns zombunity.daemon.maxlogins
  (:require [clojure.string :as str]))

(def msg-filters [:login-max-attempts])

(def ^:dynamic *dispatch-fn* (atom nil))

(defn register-dispatch-fn
  "one-time registration of the dispatch function;
   I couldn't refer back to dispatch (circular reference) so
   I'll have dispatch call this ns and load a dispatch fn."
  [dispatch-fn]
  (reset! *dispatch-fn* dispatch-fn))


(defn process-msg
  [{:keys [conn-id text]}]
  (@*dispatch-fn* {:type :client :conn-id conn-id :message "Max login attempts exceeded!"}))

