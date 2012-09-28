(ns zombunity.no-message-test
  (:use clojure.test)
  (:require [zombunity.dispatch :as disp]
            [zombunity.data :as data]
            [zombunity.data.login-data :as login-data]))

(def logging-in {"login_state" {:conn_id 1 :num_logins 1 :num_passwords 0}})

(def not-logging-in {"msg" {:conn_id 1 :message "Command ABC not recognized."}})

(deftest user-logging-in
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.no.match$")))

  (data/set-target :zombunity.data.login-data/login)
  (reset! login-data/data {"login_state" {:conn_id 1 :num_logins 1 :num_passwords 0}})

  (disp/dispatch {:type nil :conn-id 1})

  (is (= logging-in @login-data/data) "\"No Match\" daemon doesn't handle message when user is logging in"))

(deftest user-not-logging-in
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.no.match$")))

  (data/set-target :zombunity.data.login-data/login)

  (disp/dispatch {:type nil :conn-id 1})

  (is (= logging-in @login-data/data) "\"No Match\" handles message when user not logged in and not logging in"))

(deftest user-logged-in
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.no.match$")))

  (data/set-target :zombunity.data.login-data/login)
  (reset! login-data/data {"login_state" {:conn_id 1 :num_logins 1 :num_passwords 0}})

  (disp/dispatch {:type nil :user-id 1 :conn-id 1})

  (is (= logging-in @login-data/data) "\"No Match\" handles message when user is logged in"))

(deftest user-relogging-in
  (disp/register-daemon  (first (disp/filter-classpath-namespaces #"\.no.match$")))

  (data/set-target :zombunity.data.login-data/login)
  (reset! login-data/data {"login_state" {:conn_id 1 :num_logins 1 :num_passwords 0}})

  (disp/dispatch {:type nil :user-id 1 :conn-id 1})

  (is (= logging-in @login-data/data) "\"No Match\" should not respond if the user is already logged in but is re-logging in"))