(ns zombunity-http.core-test
  (:use clojure.test
        zombunity_http.core))

(deftest test-register-listener
  (let [f (fn [m] m)]
  (is (= {:event-key [f]} (register-listener :event-key f)) "Registering listener")))