(ns zombunity.banner-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as disp]
            [zombunity.data :as data]
            [zombunity.data.simple-data :as simple-data]))

(def conn-id (rand 100))
(def banner-msg {:message "Welcome to Zombunity-MUD!" :conn-id conn-id})

(deftest test-chat
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.banner$")))

  (data/set-target :zombunity.data.simple-data/simple)

  (disp/dispatch {:type :banner :conn-id conn-id})

  (is (= banner-msg @simple-data/msg-client) "Expected banner message"))
