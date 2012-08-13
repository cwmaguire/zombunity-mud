goog.provide('zombunity.core');
goog.require('cljs.core');
goog.require('zombunity.gui');
goog.require('zombunity.websocket');
goog.require('zombunity.dispatch');
goog.require('zombunity.dom_helper');
/**
* get all the namespaces to register their listeners with dispatch
*/
zombunity.core.register_listeners = (function register_listeners(){
zombunity.websocket.register_listeners.call(null);
return zombunity.gui.register_listeners.call(null);
});
