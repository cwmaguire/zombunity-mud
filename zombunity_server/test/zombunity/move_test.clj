(ns zombunity.move-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as disp]
            [zombunity.data :as data]
            [zombunity.data.simple-data :as simple-data]))

(def conn-id (rand 100))
(def no-movement-msg {:message "No movement commands as of yet." :conn-id conn-id})

(deftest test-chat
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.move$")))

  (data/set-target :zombunity.data.simple-data/simple)

  (for [cmd ["n" "s" "e" "w" "u" "d" "ne" "nw" "se" "sw"]]
    (do
      (disp/dispatch {:type cmd :conn-id conn-id})

      (is (= no-movement-msg @simple-data/msg-client) "Expected \"no movements yet\" message"))))
