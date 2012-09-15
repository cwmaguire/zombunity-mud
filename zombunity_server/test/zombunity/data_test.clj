(ns zombunity.data-test
  (:use clojure.test)
  (:require [zombunity.data :as data]))


(defmethod zombunity.data/insert ::data-test [x] x)
(defmethod zombunity.data/select ::data-test [x] x)

(deftest test-data-dispatch

  (data/set-target ::data-test)

  (is (= {:a 1 :b 2} (zombunity.data/insert {:a 1 :b 2})) "insert")
  (is (= {:a 1 :b 2} (zombunity.data/select {:a 1 :b 2})) "select"))
