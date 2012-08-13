goog.provide('zombunity.dispatch');
goog.require('cljs.core');
zombunity.dispatch.listeners = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
/**
* Register function f against an event type key
*/
zombunity.dispatch.register_listener = (function register_listener(event_key,f){
return cljs.core.swap_BANG_.call(null,zombunity.dispatch.listeners,cljs.core.assoc,event_key,cljs.core.conj.call(null,(function (){var or__3824__auto____5812 = cljs.core._lookup.call(null,cljs.core.deref.call(null,zombunity.dispatch.listeners),event_key,null);
if(cljs.core.truth_(or__3824__auto____5812))
{return or__3824__auto____5812;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),f));
});
/**
* Given an event key, fire all functions registered for that event with the event data as a map
*/
zombunity.dispatch.dispatch = (function dispatch(event_key,m){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (f){
return f.call(null,m);
}),event_key.call(null,cljs.core.deref.call(null,zombunity.dispatch.listeners))));
});
