(ns zombunity.build
  (:require [cljs.closure :as cljsc]))

(defn build []
  (cljsc/build
  "d:/dev_zombunity/zombunity/zombunity_web/src/"
  {;:optimizations :advanced
   ;:optimizations :simple
   :output-dir "D:/dev_zombunity/zombunity/zombunity_http/resource/"
   :output-to "D:/dev_zombunity/zombunity/zombunity_http/resource/zombunity.js"}))