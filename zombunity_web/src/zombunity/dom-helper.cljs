(ns zombunity.dom-helper
  (:require [goog.dom :as dom]))

(defn get-element
  "Retrieves an HTML element by id"
  [id]
  (dom/getElement id))

(defn get-value
  "Retrieves the value of an HTML element by id"
  [id]
  (.-value (dom/getElement id)))
