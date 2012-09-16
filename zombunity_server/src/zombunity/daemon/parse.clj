(ns zombunity.daemon.parse
  (:require [clojure.string :as str]
            [zombunity.data :as data]))

(def msg-filters [:text])

(defn process-msg
  [{:keys [conn-id text]}]
  (if (not (str/blank? text))
    (let [words (str/split text #" ")]
      (data/insert "msg_to_server"  {:type (first words) :args (rest words) :conn-id conn-id}))))

