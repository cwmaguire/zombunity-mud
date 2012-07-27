(ns zombunity.dispatch-test
  (:use clojure.test
        zombunity.dispatch))

;
; THIS WON'T WORK BECAUSE DISPATCH IS A .CLJS FILE, NOT .CLJ
;
; Write the tests within the namespace
;

(deftest test-register-listener
  (let [f (fn [m] m)]
  (is (= {:event-key [f]} (register-listener :event-key f))) "Registering listener"))