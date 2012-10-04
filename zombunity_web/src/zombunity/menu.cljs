(ns zombunity.menu
  (:require [goog.dom :as dom]))

(defn create-menu-item
  "Create a link that calls a function when it's clicked with the element text as the only argument"
  [text f]
  (let [item (dom/createElement "a")]
    (dom/appendChild item (dom/createTextNode text))
    (set! (.-marginLeft (.-style item)) "30px")
    (set! (.-href item) "http://localhost")
    (set! (.-onclick item) (fn [e] (.preventDefault e) (f text) false))
    item))

(defn add-menu-item
  "Add a menu item to a menu given the menu item text"
  [menu item f]
  (dom/appendChild menu (create-menu-item item f)))

(defn menu
  "Given a title and some options, create a header line and some links that will input the menu items"
  [title items f]
  (let [menu (dom/createElement "div")]
    (dom/appendChild menu (dom/createTextNode title))
    (doall (map (fn [item] (dom/appendChild menu (dom/createElement "br")) (add-menu-item menu item f)) items))
    menu))
