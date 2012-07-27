(ns zombunity.core
  (:require [zombunity.dom-helper :as helper]
            [zombunity.dispatch :as dispatch]
            [zombunity.websocket :as websocket]
            [zombunity.gui :as gui]))

(defn register-listeners
  "get all the namespaces to register their listeners with dispatch"
  []
  (websocket/register-listeners)
  (gui/register-listeners))
