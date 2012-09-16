(ns zombunity.db
  (:refer-clojure :exclude [resultset-seq])
  (:require  [clojure.java.jdbc :as jdbc]
             [clojure.data.json :as json :refer [json-str]]))

(def db {:classname "org.hsqldb.jdbcDriver" ; must be in classpath
         :subprotocol "hsqldb"
         :subname "hsql://localhost/zombunity"
         ; Any additional keys are passed to the driver
         ; as driver-specific properties.
         :user "sa"
         :password ""})

; rs will be a sequence of maps,
; one for each record in the result set.
(defn zombunity.data/get-messages ::hsqldb
  "Remove queued server JSON messages and return them"
  []
  (jdbc/with-connection db
    (jdbc/transaction
      (jdbc/with-query-results rs ["select id, json from msg_to_server"]
        (let [rs (doall rs)
              ids (str (apply str "id in (" (interpose "," (map :id rs))) ")")]
          (if (seq rs)
            (jdbc/delete-rows "msg_to_server" [ids]))
          (->> (map :json rs) (map json/read-json)))))))

(defn zombunity.data/msg-client ::hsqldb
  "Put a JSON message in the client queue"
  [m]
  (println "sending message to client: " m)
  (jdbc/with-connection db
    (jdbc/insert-records "msg_to_client" {:json (json/json-str m)})))

(defn zombunity.data/select ::hsqldb
  "Run a select statment and return the results as a list of maps"
  [stmt-params]
  (jdbc/with-connection db
      (jdbc/with-query-results rs stmt-params (doall rs))))

(defn zombunity.data/insert
  "Run an insert statment with a table name and a map of column names (keywords or strings) to values"
  ([table column-vals] (insert [table column-vals])) ; call insert with the params in an array

  ([table-column-vals]
    (jdbc/with-connection db
      (map (fn [[t vs]] (jdbc/insert-record t vs)) table-column-vals))))

(defn zombunity.data/update ::hsqldb
  "Run an update statement"
  [table where-params column-values]
  (jdbc/with-connection db
    (jdbc/update-values table where-params column-values)))


