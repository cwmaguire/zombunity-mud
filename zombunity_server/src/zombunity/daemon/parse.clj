(ns zombunity.daemon.parse
  (:require [clojure.string :as str]))

(def msg-filters [:text])

(def ^:dynamic *dispatch-fn* (atom nil))

(defn register-dispatch-fn
  "one-time registration of the dispatch function;
   I couldn't refer back to dispatch (circular reference) so
   I'll have dispatch call this ns and load a dispatch fn."
  [dispatch-fn]
  (reset! *dispatch-fn* dispatch-fn))


(defn process-msg
  [{:keys [conn-id text]}]
  (if (not (str/blank? text))
    (let [words (str/split text #" ")]
      (@*dispatch-fn* {:type (first words) :args (rest words) :conn-id conn-id}))))

