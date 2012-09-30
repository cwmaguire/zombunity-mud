(ns zombunity.db.db-test
  (:use clojure.test)
  (:require [zombunity.data :as data]
            [zombunity.db :as db]))

(defn rand-str
  [n]
  (let [chars (vec (map char (concat (range 48 58) (range 65 91) (range 97 123))))]
    (apply str (take n (repeatedly #(get chars (int (* (rand) (count chars)))))))))

(deftest test-insert-select-msg-to-server
  (data/set-target :zombunity.db/hsqldb)
  (let [msg-to-server (rand-str 100)]

    (data/msg-server msg-to-server)

    (let [result (data/select ["select * from msg_to_server"])]
      (is (= (count result) 1) "Expected one message in the database")
      (is (= (count (first result)) 2) "Expected two fields from the server message table")
      (is (= (:json (first result)) (str "\"" msg-to-server "\"")) "Get back expected JSON")))

  (data/delete "msg_to_server" ["1 = 1"]))

(deftest test-insert-select-msg-to-client
  (data/set-target :zombunity.db/hsqldb)
  (let [msg-to-client (rand-str 100)]
    (data/msg-client msg-to-client)
    (let [result (data/select ["select * from msg_to_client"])]
      (is (= (count result) 1) "Expected one message in the database")
      (is (= (count (first result)) 2) "Expected two fields from the client message table")
      (is (= (:json (first result)) (str "\"" msg-to-client "\"")) "Get back expected JSON")))


  (data/delete "msg_to_client" ["1 = 1"]))

(deftest test-login-state
  (data/set-target :zombunity.db/hsqldb)
  (let [login-1 (rand-str 100)
        login-2 (rand-str 100)
        conn-id 1
        num_logins 1
        num_passwords 1
        insert-vals {:conn_id conn-id ; use keys with dashes to ensure they're converted
                     :login login-1
                     :num_logins 1
                     :num_passwords 1}]

    (data/insert [["login_state" insert-vals]])

    (let [result (data/select ["select * from login_state"])]
      (is (= (count result) 1) "Expected one login_state in the database")
      (is (= (count (first result)) 4) "Expected four fields from the login_state table")
      (is (= (first result) insert-vals) "Get back expected login_state record"))

    (is (not (empty? (data/is-logging-in? conn-id))) "conn-id should be considered logging in")
    (is (empty? (data/is-logging-in? (inc conn-id))) "fake conn-id should NOT be considered logging in")

    (data/update "login_state" ["conn_id = ?" conn-id] {:login login-2})

    (let [result (data/select ["select * from login_state"])]
      (is (= (count result) 1) "Expected one login_state in the database")
      (is (= (count (first result)) 4) "Expected four fields from the login_state table")
      (is (= (first result) (assoc insert-vals :login login-2)) "Get back expected login_state record"))

    (data/delete "login_state" ["1 = 1"])

    (is (empty? (data/is-logging-in? conn-id)) "conn-id should no longer be considered logging in")

    (let [result (data/select ["select * from login_state"])]
      (is (= (count result) 0) "Expected one login_state in the database"))))

(deftest test-get-messages
  (data/set-target :zombunity.db/hsqldb)
  (let [val (rand-str 100)
        msg-to-server (str "{\"a\":\"" val "\"}")]

    (data/insert [["msg_to_server" {:json msg-to-server}]])

    (let [result (data/get-messages)
          left-over-messages (data/select ["select * from msg_to_server"])]
      (is (= (count left-over-messages) 0) "Expected no messages in the database after get-messages (they should be deleted automatically)")
      (is (= (count result) 1) "Expected one server msg in the database")
      (is (= (count (first result)) 1) "Expected one field from the message_to_server table; i.e. the JSON as a map")
      (is (= (first result) {:a val}) "Get back expected map from JSON field"))))
