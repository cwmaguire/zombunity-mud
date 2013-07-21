(ns zombunity.build
  (:require [cljs.closure :as cljsc]
            [clojure.string :as s]))

(defn get-proj-path
  []
  ; This works if you run from lein at the root of the project
  (s/replace (. (java.io.File. ".") getCanonicalPath) #"\\" "/"))

(defn build []
  (let [proj-path (get-proj-path)
        web-paths (str proj-path "/zombunity_web/src/")
        ;web-paths [(str proj-path "/zombunity_web/src/") (str proj-path "/zombunity_web/test/")]
        http-path (str proj-path "/zombunity_http/resource/")
        js-file (str http-path "zombunity.js")]
    (print proj-path)
    (cljsc/build
    web-paths
    {;:optimizations :advanced
     ;:optimizations :simple
     :output-dir http-path
     :output-to js-file})))
