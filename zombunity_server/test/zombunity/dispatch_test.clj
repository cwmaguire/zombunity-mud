(ns zombunity.dispatch-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as d]))

;(deftest test-register-daemon
;  (let [f (fn [m] m)]
;    (is (= {:event-key [f]} (register-listener :event-key f))) "Registering listener"))

(defn test-dispatch-callback
  [x]
  1)

(deftest test-find-namespaces
  (is (= ["zombunity.ns-test"] (map str (d/find-namespaces #"zombunity\.ns-test"))) "Finding namespaces in classpath based on regex pattern"))

(deftest test-register-daemon
  (d/register-daemon test-dispatch-callback (first (d/find-namespaces #"zomb.*\.ns-test")))
  ;(d/register-daemon test-dispatch "ns-test")
  (is (= [1] (d/dispatch {:type :test})) "Dispatch on type keyword")
  (is (= [1] (d/dispatch {:type :test-with-filter :pass true})) "Dispatch on keyword with filter that passes")
  (is (= [] (d/dispatch {:type :test-with-filter :pass false})) "Dispatch on keyword with filter that fails")
  (is (= [] (d/dispatch {:type :test-with-filter})) "Dispatch on keyword with filter that fails"))
