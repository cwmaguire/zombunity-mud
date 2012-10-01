(ns zombunity.msg-client-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as disp]
            [zombunity.data :as data]
            [zombunity.data.simple-data :as simple-data]))

(def conn-id (rand 100))
(def msg (str (rand 100)))
(def client-msg {:type :client :message msg :conn-id conn-id :user-id nil})

(deftest test-chat
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\..*client$")))

  (data/set-target :zombunity.data.simple-data/simple)

  (disp/dispatch {:type :client :conn-id conn-id :message msg})

  (is (= client-msg @simple-data/msg-client) "Expected client message"))
