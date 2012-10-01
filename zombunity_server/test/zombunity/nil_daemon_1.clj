(ns zombunity.nil-daemon-1
  (:require [zombunity.data.nil-daemon-data :as data]))

(defn should-run?
  [m]
  (if @data/first-run?
    (do
      (reset! data/first-run? false)
      true)
    (true? @data/has-run?)))

(def msg-filters [{:type nil :filter should-run?}])

(defn process-msg
  [m]
  (reset! data/has-run? true)
  m)