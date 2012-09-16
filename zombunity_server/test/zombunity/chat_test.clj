(ns zombunity.chat-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as disp]
            [zombunity.data :as data]
            [zombunity.data.chat-data :as chat-data]))

(def multi-word-data [["chat_msg" {:msg "1 2 3"}] ["msg_to_server" {:type :all-clients :message ":type :chat :text \"1 2 3\""}]])
(def single-word-data [["chat_msg" {:msg "1"}] ["msg_to_server" {:type :all-clients :message ":type :chat :text \"1\""}]])

(deftest test-chat
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.chat$")))

  (data/set-target :zombunity.data.chat-data/chat)

  (disp/dispatch {:type :chat :user-id 0 :args [1 2 3]})

  (is (= multi-word-data @chat-data/data) "Multi-word chat")

  (reset! chat-data/data nil)

  (disp/dispatch {:type :chat :user-id 0 :args [1]})

  (is (= single-word-data @chat-data/data) "Single-word chat")

  (reset! chat-data/data nil)

  (disp/dispatch {:type :chat :user-id 0 :args ""})

  (is (nil? @chat-data/data) "Empty chat")

  (disp/dispatch {:type :chat :user-id 0})

  (is (nil? @chat-data/data) "Nil chat"))
