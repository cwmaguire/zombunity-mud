(ns zombunity.daemon.login
  (:require [clojure.string :as str]
            [zombunity.db :as db]))

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
  [conn-id]
  (@*dispatch-fn* {:type "login-max-attempts" :conn-id conn-id}))

(defn prompt
  [conn-id prompt]
  (@*dispatch-fn* {:type "client" :conn-id conn-id :message prompt}))

(defn first-login-prompt
  [conn-id]
  (db/insert "login_state" {:conn_id conn-id :num_logins 1 :num_passwords 0})
  (prompt conn-id "enter login:"))

(defn login-prompt
  [conn-id curr-logins]
  (db/update "login_state" ["conn_id = ?" conn-id] {:num_logins (inc curr-logins)})
  (prompt conn-id "enter login:"))

(defn password-prompt
  [conn-id curr-passwords]
  (db/update "login_state" ["conn_id = ?" conn-id] {:num_passwords (inc curr-passwords)})
  (prompt conn-id "enter password:"))

(defn store-login
  [conn-id login]
  (db/update "login_state" ["conn_id = ?" conn-id] {:login login}))

(defn login-succeeded
  [conn-id user-id]
  (prompt conn-id "login successful")
  (@*dispatch-fn* {:type :user-logged-in :conn-id conn-id :user-id user-id}))

(defn get-user-id
  [login password]
  (-> (db/select ["select id from users where login = ? and password = ?" login password])
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
  (first (db/select ["select login, num_logins, num_passwords from login_state where conn_id = ?" conn-id])))

(defn process-msg
  [{:keys [conn-id text]}]
  (println "Processing login message for conn " conn-id " with text " text)
  (if-let [{:keys [login, num_logins, password, num_passwords]} (get-login-state conn-id)]
    (cond
      (< num_passwords num_logins)
        (do
          (store-login conn-id text)
          (password-prompt conn-id num_passwords))
      :default
        (check-login conn-id login text num_logins))
    (first-login-prompt conn-id)))

