(ns zombunity.data.login-data)

(def data (atom nil))

(defmethod zombunity.data/select ::login
  [[sql & args]]
  (let [[_ table] (re-find (re-matcher #"from ([\w-]*)\b" sql))]
    (println "Getting data for table" table)
    (cond
      (= table "user") (filter (fn [m] (and (= (:login m) (first args)) (= (:password m) (second args)))) [(get @data table)])
      :default [(get @data table)])))

(defn column-keyword
  "Convert keywords with dashes to keywords with underscores"
  [k]
  (keyword (clojure.string/replace (apply str (rest (str k))) #"-" "_")))

(defn column-keywords
  "HSQLDB translates keywords with dashes to columns with underscores on the way in,
   but doesn't translate them back on the way out; this function mimics that for maps"
  [m]
  (apply hash-map (map (fn [x] (if (keyword? x) (column-keyword x) x)) (flatten (seq m)))))

(defmethod zombunity.data/insert ::login
  [table fields]
  (swap! data assoc table (column-keywords fields)))

(defmethod zombunity.data/msg-client ::login
  [msg]
  (swap! data assoc "msg" msg))

(defmethod zombunity.data/update ::login
  [table _ fields]
  (swap! data assoc "login_state" (merge (get @data "login_state") (column-keywords fields))))

(defmethod zombunity.data/delete ::login
  [table _]
  (swap! data dissoc table))

(defmethod zombunity.data/is-logging-in? ::login
  [_]
  (get @data :login-state))
