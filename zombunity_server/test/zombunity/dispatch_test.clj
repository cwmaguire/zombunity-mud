(ns zombunity.dispatch-test
  (:use clojure.test
        zombunity.dispatch d))

;(deftest test-register-daemon
;  (let [f (fn [m] m)]
;    (is (= {:event-key [f]} (register-listener :event-key f))) "Registering listener"))

(defn test-dispatch-callback
  [x]
  1)

(deftest test-register-daemon
  (d/register-daemon test-dispatch-callback "ns-test")
  ;(d/register-daemon test-dispatch "ns-test")
    (is (= [1] (d/dispatch {:conn-id 0 :type :test :user-id 0})) "Registering message types and dispatch callback"))
