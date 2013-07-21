(ns zombunity.menu-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as disp]
            [zombunity.data :as data]
            [zombunity.data.simple-data :as simple-data]))

(def conn-id (rand 100))
(def menu-msg {:message {:type :menu :title "Menu" :items ["Login" "Register"]} :conn-id conn-id})

(deftest test-chat
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.menu$")))

  (data/set-target :zombunity.data.simple-data/simple)

  (disp/dispatch {:type :menu :conn-id conn-id})

  (is (= menu-msg @simple-data/msg-client) "Expected menu message"))


