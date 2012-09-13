(ns zombunity.ns-test)

; You can specify just a keyword for the type, or a map with the type and the filter function
(def msg-filters [:test
                  {:type :test-with-filter :filter (fn [m] (:pass m))}])

(def ^:dynamic *dispatch-fn* (atom nil))

(defn register-dispatch-fn
  "one-time registration of the dispatch function;
   I couldn't refer back to dispatch (circular reference) so
   I'll have dispatch call this ns and load a dispatch fn."
  [dispatch-fn]
  (reset! *dispatch-fn* dispatch-fn))

(defn process-msg
  [m]
  (println "ns-test: process-msg: " m)
  (@*dispatch-fn* m))
