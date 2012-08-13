goog.provide('zombunity.websocket');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('zombunity.dispatch');
goog.require('goog.net.WebSocket');
zombunity.websocket.websocket = cljs.core.atom.call(null,null);
zombunity.websocket.on_open = (function on_open(evt){
return zombunity.dispatch.dispatch.call(null,"\uFDD0'conn-open",evt);
});
zombunity.websocket.on_close = (function on_close(evt){
return zombunity.dispatch.dispatch.call(null,"\uFDD0'conn-close",evt);
});
zombunity.websocket.on_msg = (function on_msg(evt){
return zombunity.dispatch.dispatch.call(null,"\uFDD0'message",evt.message);
});
zombunity.websocket.send = (function send(message){
return cljs.core.deref.call(null,zombunity.websocket.websocket).send([cljs.core.str("{\"type\":\"text\", \"text\":\""),cljs.core.str(message),cljs.core.str("\"}")].join(''));
});
zombunity.websocket.connect = (function connect(_){
var websocket_temp__5814 = (new goog.net.WebSocket());
cljs.core.reset_BANG_.call(null,zombunity.websocket.websocket,websocket_temp__5814);
websocket_temp__5814.addEventListener(goog.net.WebSocket.EventType.MESSAGE,zombunity.websocket.on_msg);
websocket_temp__5814.addEventListener(goog.net.WebSocket.EventType.OPENED,zombunity.websocket.on_open);
websocket_temp__5814.addEventListener(goog.net.WebSocket.EventType.CLOSED,zombunity.websocket.on_close);
return websocket_temp__5814.open([cljs.core.str("ws://"),cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,/\/\/(.*)\//,goog.dom.getDocument().URL))),cljs.core.str("/websocket")].join(''));
});
zombunity.websocket.disconnect = (function disconnect(_){
cljs.core.deref.call(null,zombunity.websocket.websocket).close();
return cljs.core.reset_BANG_.call(null,zombunity.websocket.websocket,null);
});
/**
* Called by .core to register listeners for events we're interested in
*/
zombunity.websocket.register_listeners = (function register_listeners(){
zombunity.dispatch.register_listener.call(null,"\uFDD0'input",zombunity.websocket.send);
zombunity.dispatch.register_listener.call(null,"\uFDD0'connect",zombunity.websocket.connect);
return zombunity.dispatch.register_listener.call(null,"\uFDD0'disconnect",zombunity.websocket.disconnect);
});
