(ns zombunity.chat-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as disp]
            [zombunity.data :as data]
            [zombunity.data.simple-data :as simple-data]))

(def multi-word-data [["chat_msg" {:msg "1 2 3"}] ["msg_to_server" {:type :all-clients :message ":type :chat :text \"1 2 3\""}]])
(def single-word-data [["chat_msg" {:msg "1"}] ["msg_to_server" {:type :all-clients :message ":type :chat :text \"1\""}]])

(deftest test-chat
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.chat$")))

  (data/set-target :zombunity.data.simple-data/simple)

  (disp/dispatch {:type :chat :user-id 0 :args [1 2 3]})

  (is (= multi-word-data @simple-data/insert) "Multi-word chat")

  (reset! simple-data/insert nil)

  (disp/dispatch {:type :chat :user-id 0 :args [1]})

  (is (= single-word-data @simple-data/insert) "Single-word chat")

  (reset! simple-data/insert nil)

  (disp/dispatch {:type :chat :user-id 0 :args ""})

  (is (nil? @simple-data/insert) "Empty chat")

  (disp/dispatch {:type :chat :user-id 0})

  (is (nil? @simple-data/insert) "Nil chat"))
