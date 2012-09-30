(ns zombunity.chat-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as disp]
            [zombunity.data :as data]
            [zombunity.data.simple-data :as simple-data]))

(def multi-word-data [["chat_msg" {:msg "1 2 3"}]])
(def multi-word-server-msg {:type :all-clients :message ":type :chat :text \"1 2 3\""})
(def single-word-data [["chat_msg" {:msg "1"}]])
(def single-word-server-msg {:type :all-clients :message ":type :chat :text \"1\""})

(deftest test-chat
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.chat$")))

  (data/set-target :zombunity.data.simple-data/simple)

  (disp/dispatch {:type :chat :user-id 0 :args [1 2 3]})

  (is (= multi-word-data @simple-data/insert) "Multi-word chat")
  (is (= multi-word-server-msg @simple-data/msg-server) "Multi-word chat")

  (reset! simple-data/insert nil)

  (disp/dispatch {:type :chat :user-id 0 :args [1]})

  (is (= single-word-data @simple-data/insert) "Single-word chat")
  (is (= single-word-server-msg @simple-data/msg-server) "Single-word chat")

  (reset! simple-data/insert nil)
  (reset! simple-data/msg-server nil)

  (disp/dispatch {:type :chat :user-id 0 :args ""})

  (is (nil? @simple-data/insert) "Empty chat")
  (is (nil? @simple-data/msg-server) "Empty chat")

  (disp/dispatch {:type :chat :user-id 0})

  (is (nil? @simple-data/insert) "Nil chat")
  (is (nil? @simple-data/msg-server) "Nil chat"))
