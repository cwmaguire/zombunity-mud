(ns zombunity.daemon.login
  (:require [zombunity.data :as data]
            [clojure.string :as str]))

(def msg-types [:login])
(def max-attempts 3)

(def ^:dynamic *dispatch-fn* (atom nil))

(defn register-dispatch-fn
  "one-time registration of the dispatch function;
   I couldn't refer back to dispatch (circular reference) so
   I'll have dispatch call this ns and load a dispatch fn."
  [dispatch-fn]
  (reset! *dispatch-fn* dispatch-fn))

(defn max-login-attempts
  ([conn-id] (max-login-attempts conn-id @*dispatch-fn*))
  ([conn-id f] (f {:type "login-max-attempts" :conn-id conn-id})))

(defn prompt
  ([conn-id text]
    (prompt conn-id text @*dispatch-fn*))
  ([conn-id text f]
    (f {:type "client" :conn-id conn-id :message text})))

(defn first-login-prompt
  ([conn-id]
    (first-login-prompt conn-id data/login-state))
  ([conn-id login-state]
    (dosync
      (alter login-state assoc conn-id {:num_logins 1 :num_passwords 0}))
    (prompt conn-id "enter login:")))

(defn login-prompt
  ([conn-id curr-logins]
    (login-prompt conn-id curr-logins data/login-state))

  ([conn-id curr-logins login-state]
    (dosync
      (alter login-state assoc-in [conn-id :num_logins] (inc (get-in @login-state [conn-id :num-logins] 0))))
    ;(@*dispatch-fn* {:type :login-state :conn-id conn-id :num_logins (inc curr-logins)})
    (prompt conn-id "enter login:")))

(defn password-prompt
  ([conn-id curr-passwords]
    (password-prompt conn-id curr-passwords data/login-state))

  ([conn-id curr-passwords login-state]
    (dosync
      (alter login-state assoc-in [conn-id :num_passwords] (inc (get-in @login-state [conn-id :num-passwords] 0))))
    (prompt conn-id "enter password:")))

(defn store-login
  ([conn-id login]
    (store-login conn-id login data/login-state))

  ([conn-id login login-state]
    (dosync
      (alter login-state assoc-in [conn-id :login] login))))

(defn login-succeeded
  ([conn-id user-id]
    (login-succeeded conn-id user-id @*dispatch-fn*))

  ([conn-id user-id f]
    (prompt conn-id "login successful")
    (f {:type :user-logged-in :conn-id conn-id :user-id user-id})))

(defn get-user-id
  ([log pass]
    (get-user-id log pass data/users))

  ([log pass users]
    (-> (filter (fn [{:keys [login password]}] (and (= log login) (= pass password))) @users)
    ;(-> (db/select ["select id from user where login = ? and password = ?" login password])
      first
      :id)))

(defn check-login
  [conn-id login password num-logins]
  (if-let [user-id (get-user-id login password)]
    (login-succeeded conn-id user-id)
    (if (< num-logins max-attempts)
      (login-prompt conn-id num-logins)
      (max-login-attempts conn-id))))

(defn process-msg
  ([{:keys [conn-id text]}]
    (process-msg conn-id text data/login-state))

  ([conn-id text login-state]
    (println "LOGIN: Processing login message for conn " conn-id " with text " text)
    (if-let [{:keys [login num_logins password num_passwords]} (get @login-state conn-id)]
      (cond
        (< num_passwords num_logins)
          (do
            (store-login conn-id text)
            (password-prompt conn-id num_passwords))
        :default
          (check-login conn-id login text num_logins))
      (first-login-prompt conn-id))))

