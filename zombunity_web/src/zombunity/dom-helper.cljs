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

(defn set-value
  "Sets the value of an HTML element by id"
  [id val]
  (set! (.-value (dom/getElement id)) val))

(defn clear
  "Clears out the value of an HTML element by id"
  [id]
  (set-value id ""))

(defn insert-child
  "Insert a child into an element"
  [id child]
  (dom/insertChildAt (dom/getElement id) child 0))

(defn insert-text-node
  "Append a text node to an element"
  [id text]
  (dom/insertChildAt (dom/getElement id) (dom/createTextNode text)))
