goog.provide('zombunity.dom_helper');
goog.require('cljs.core');
goog.require('goog.dom');
/**
* Retrieves an HTML element by id
*/
zombunity.dom_helper.get_element = (function get_element(id){
return goog.dom.getElement(id);
});
/**
* Retrieves the value of an HTML element by id
*/
zombunity.dom_helper.get_value = (function get_value(id){
return goog.dom.getElement(id).value;
});
