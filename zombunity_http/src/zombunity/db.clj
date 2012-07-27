(ns zombunity.db
  (:refer-clojure :exclude [resultset-seq])
  (:require  [clojure.java.jdbc :as jdbc]
             [clojure.data.json :as json]))

(def db {:classname "org.hsqldb.jdbcDriver" ; must be in classpath
         :subprotocol "hsqldb"
         :subname "hsql://localhost/zombunity"
         ; Any additional keys are passed to the driver
         ; as driver-specific properties.
         :user "sa"
         :password ""})

; rs will be a sequence of maps,
; one for each record in the result set.
(defn get-messages
  []
  (jdbc/with-connection db
    (jdbc/transaction
      (jdbc/with-query-results rs ["select id, json from msg_to_client"]
        (let [rs (doall rs)
              ids (str (apply str "id in (" (interpose "," (map :id rs))) ")")]
          (if (seq rs)
            (jdbc/delete-rows "msg_to_client" [ids]))
          (->> (map :json rs) (map json/read-json)))))))

(defn msg-server
  [json-msg]
  (jdbc/with-connection db
    (jdbc/insert-records "msg_to_server" {:json json-msg})))



