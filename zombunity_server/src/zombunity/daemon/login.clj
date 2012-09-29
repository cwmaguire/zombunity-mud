(ns zombunity.daemon.login
  (:require [clojure.string :as str]
            [zombunity.data :as data]))

; respond to the :login message if the user hasn't logged in and isn't currently logging in;
; or respond to anything if the user is currently logging in
(def msg-filters [{:type :login
                   :filter (fn [msg] (and (nil? (:user-id msg)) (not (data/is-logging-in? (:conn-id msg)))))}
                  {:type nil
                   :filter (fn [msg] (and (nil? (:user-id msg)) (data/is-logging-in? (:conn-id msg))))}])
(def max-attempts 3)

(defn max-login-attempts
  [conn-id]
  (data/delete "login_state" [(str "conn_id = " conn-id)])
  (data/insert ["msg_to_server" {:type "login-max-attempts" :conn-id conn-id}]))

(defn prompt
  [conn-id prompt]
  (data/msg-client {:conn-id conn-id :message prompt}))

(defn first-login-prompt
  [conn-id]
  (data/insert ["login_state" {:conn-id conn-id :num-logins 1 :num-passwords 0}])
  (prompt conn-id "enter login:"))

(defn login-prompt
  [conn-id curr-logins]
  (data/update "login_state" ["conn_id = ?" conn-id] {:num-logins (inc curr-logins)})
  (prompt conn-id "enter login:"))

(defn password-prompt
  [conn-id curr-passwords]
  (data/update "login_state" ["conn_id = ?" conn-id] {:num-passwords (inc curr-passwords)})
  (prompt conn-id "enter password:"))

(defn store-login
  [conn-id login]
  (println "Updating login_state " (data/select ["from login_state"]) " with login: " login)
  (data/update "login_state" ["conn_id = ?" conn-id] {:login login}))

(defn login-succeeded
  [conn-id user-id]
  (prompt conn-id "login successful")
  (data/delete "login_state" [(str "conn_id = " conn-id)])
  (data/insert ["msg_to_server" {:type :user-logged-in :conn-id conn-id :user-id user-id}]))

(defn get-user-id
  [login password]
  (-> (data/select ["select id from user where login = ? and password = ?" login password])
    first
    (get :id)))

(defn check-login
  [conn-id login password num-logins]
  (if-let [user-id (get-user-id login password)]
    (login-succeeded conn-id user-id)
    (if (< num-logins max-attempts)
      (login-prompt conn-id num-logins)
      (max-login-attempts conn-id))))

(defn get-login-state
  [conn-id]
  (first (data/select ["select login, num_logins, num_passwords from login_state where conn_id = ?" conn-id])))

(defn process-msg
  [{:keys [conn-id type]}]
  (println "Processing login message for conn " conn-id " with text " type)
  (if-let [{:keys [login, num_logins, password, num_passwords]} (get-login-state conn-id)]
    (cond
      (< num_passwords num_logins)
        (do
          (println "num_passwords (" num_passwords ") < num_logins (" num_logins ")")
          (store-login conn-id type)
          (password-prompt conn-id num_passwords))
      :default
        (do
          (println "num_passwords (" num_passwords ") >= num_logins (" num_logins ")")
          (check-login conn-id login type num_logins)))
    (do
      (first-login-prompt conn-id))))

