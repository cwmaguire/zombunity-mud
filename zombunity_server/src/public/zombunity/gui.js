goog.provide('zombunity.gui');
goog.require('cljs.core');
goog.require('zombunity.dispatch');
goog.require('zombunity.dom_helper');
zombunity.gui.connect = (function connect(){
return zombunity.dispatch.dispatch.call(null,"\uFDD0'connect",null);
});
zombunity.gui.disconnect = (function disconnect(){
return zombunity.dispatch.dispatch.call(null,"\uFDD0'disconnect",null);
});
/**
* Display any :text event text in the generic 'text' area
*/
zombunity.gui.display_text = (function display_text(text){
var elem__5816 = zombunity.dom_helper.get_element.call(null,"text");
return elem__5816.value = [cljs.core.str(text),cljs.core.str("\n"),cljs.core.str(elem__5816.value)].join('');
});
/**
* Send text to the server
*/
zombunity.gui.send = (function send(){
return zombunity.dispatch.dispatch.call(null,"\uFDD0'input",zombunity.dom_helper.get_value.call(null,"mud-input"));
});
/**
* Testing out a local event
*/
zombunity.gui.text = (function text(){
return zombunity.dispatch.dispatch.call(null,"\uFDD0'text",zombunity.dom_helper.get_value.call(null,"mud-input"));
});
/**
* Flips 'disconnected' to 'connected'
*/
zombunity.gui.show_connected = (function show_connected(_){
var elem__5819 = zombunity.dom_helper.get_element.call(null,"conn-disconn-flg");
elem__5819.innerHTML = "connected";
elem__5819.style.setProperty("color","green");
var elem__5820 = zombunity.dom_helper.get_element.call(null,"conn-disconn-btn");
elem__5820.innerText = "disconnect";
return elem__5820.onclick = zombunity.gui.disconnect;
});
/**
* Flips 'connected' to 'disconnected'
*/
zombunity.gui.show_disconnected = (function show_disconnected(_){
var elem__5823 = zombunity.dom_helper.get_element.call(null,"conn-disconn-flg");
elem__5823.innerHTML = "disconnected";
elem__5823.style.setProperty("color","red");
var elem__5824 = zombunity.dom_helper.get_element.call(null,"conn-disconn-btn");
elem__5824.innerText = "connect";
return elem__5824.onclick = zombunity.gui.connect;
});
/**
* Called by .core to register listeners for events we're interested in
*/
zombunity.gui.register_listeners = (function register_listeners(){
zombunity.dispatch.register_listener.call(null,"\uFDD0'message",zombunity.gui.display_text);
zombunity.dispatch.register_listener.call(null,"\uFDD0'text",zombunity.gui.display_text);
zombunity.dispatch.register_listener.call(null,"\uFDD0'conn-open",zombunity.gui.show_connected);
return zombunity.dispatch.register_listener.call(null,"\uFDD0'conn-close",zombunity.gui.show_disconnected);
});
