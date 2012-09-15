(ns zombunity.ns-test)

; You can specify just a keyword for the type, or a map with the type and the filter function
(def msg-filters [:test
                  {:type :test-with-filter :filter (fn [m] (:pass m))}])


(defn process-msg
  [m]
  (println "ns-test: process-msg: " m)
  m)
