(ns zombunity.build
  (:require [cljs.closure :as cljsc]))

(defn build []
  (cljsc/build
  "zombunity_web/src/" ; relative to top level of lein project
  {;:optimizations :advanced
   ;:optimizations :simple
   :output-dir "zombunity_server/src/public"
   :output-to "zombunity_server/src/public/zombunity.js"}))
