(ns zombunity.dispatch-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as d]))

(deftest test-find-namespaces
  (is (= ["zombunity.ns-test"] (map str (d/filter-classpath-namespaces #"zombunity\.ns-test"))) "Finding namespaces in classpath based on regex pattern"))

(deftest test-register-daemon
  (d/register-daemon (first (d/filter-classpath-namespaces #"zomb.*\.ns-test")))
  ;(d/register-daemon test-dispatch "ns-test")
  (is (= [{:type :test :user-id nil}] (d/dispatch {:type :test})) "Dispatch on type keyword")
  (is (= [{:type :test-with-filter :pass true :user-id nil}] (d/dispatch {:type :test-with-filter :pass true})) "Dispatch on keyword with filter that passes")
  (is (= [] (d/dispatch {:type :test-with-filter :pass false})) "Dispatch on keyword with filter that fails")
  (is (= [] (d/dispatch {:type :test-with-filter})) "Dispatch on keyword with filter that fails"))
