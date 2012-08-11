(ns zombunity.build
  (:require [cljs.closure :as cljsc]))

(defn build-home []
  (cljsc/build
  "d:/dev_zombunity/zombunity/zombunity_web/src/"
  {;:optimizations :advanced
   ;:optimizations :simple
   :output-dir "D:/dev_zombunity/zombunity/zombunity_server/src/zombunity/public"
   :output-to "D:/dev_zombunity/zombunity/zombunity_server/src/zombunity/public/zombunity.js"}))

(build-home)