goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__5826 = (((x == null))?null:x);
if((p[goog.typeOf(x__5826)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__5827__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__5827 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5827__delegate.call(this, array, i, idxs);
};
G__5827.cljs$lang$maxFixedArity = 2;
G__5827.cljs$lang$applyTo = (function (arglist__5828){
var array = cljs.core.first(arglist__5828);
var i = cljs.core.first(cljs.core.next(arglist__5828));
var idxs = cljs.core.rest(cljs.core.next(arglist__5828));
return G__5827__delegate(array, i, idxs);
});
G__5827.cljs$lang$arity$variadic = G__5827__delegate;
return G__5827;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____5913 = this$;
if(and__3822__auto____5913)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____5913;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2023__auto____5914 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5915 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5914)]);
if(or__3824__auto____5915)
{return or__3824__auto____5915;
} else
{var or__3824__auto____5916 = (cljs.core._invoke["_"]);
if(or__3824__auto____5916)
{return or__3824__auto____5916;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____5917 = this$;
if(and__3822__auto____5917)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____5917;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2023__auto____5918 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5919 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5918)]);
if(or__3824__auto____5919)
{return or__3824__auto____5919;
} else
{var or__3824__auto____5920 = (cljs.core._invoke["_"]);
if(or__3824__auto____5920)
{return or__3824__auto____5920;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____5921 = this$;
if(and__3822__auto____5921)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____5921;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2023__auto____5922 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5923 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5922)]);
if(or__3824__auto____5923)
{return or__3824__auto____5923;
} else
{var or__3824__auto____5924 = (cljs.core._invoke["_"]);
if(or__3824__auto____5924)
{return or__3824__auto____5924;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____5925 = this$;
if(and__3822__auto____5925)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____5925;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2023__auto____5926 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5927 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5926)]);
if(or__3824__auto____5927)
{return or__3824__auto____5927;
} else
{var or__3824__auto____5928 = (cljs.core._invoke["_"]);
if(or__3824__auto____5928)
{return or__3824__auto____5928;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____5929 = this$;
if(and__3822__auto____5929)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____5929;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2023__auto____5930 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5931 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5930)]);
if(or__3824__auto____5931)
{return or__3824__auto____5931;
} else
{var or__3824__auto____5932 = (cljs.core._invoke["_"]);
if(or__3824__auto____5932)
{return or__3824__auto____5932;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____5933 = this$;
if(and__3822__auto____5933)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____5933;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2023__auto____5934 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5935 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5934)]);
if(or__3824__auto____5935)
{return or__3824__auto____5935;
} else
{var or__3824__auto____5936 = (cljs.core._invoke["_"]);
if(or__3824__auto____5936)
{return or__3824__auto____5936;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____5937 = this$;
if(and__3822__auto____5937)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____5937;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2023__auto____5938 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5939 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5938)]);
if(or__3824__auto____5939)
{return or__3824__auto____5939;
} else
{var or__3824__auto____5940 = (cljs.core._invoke["_"]);
if(or__3824__auto____5940)
{return or__3824__auto____5940;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____5941 = this$;
if(and__3822__auto____5941)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____5941;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2023__auto____5942 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5943 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5942)]);
if(or__3824__auto____5943)
{return or__3824__auto____5943;
} else
{var or__3824__auto____5944 = (cljs.core._invoke["_"]);
if(or__3824__auto____5944)
{return or__3824__auto____5944;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____5945 = this$;
if(and__3822__auto____5945)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____5945;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2023__auto____5946 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5947 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5946)]);
if(or__3824__auto____5947)
{return or__3824__auto____5947;
} else
{var or__3824__auto____5948 = (cljs.core._invoke["_"]);
if(or__3824__auto____5948)
{return or__3824__auto____5948;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____5949 = this$;
if(and__3822__auto____5949)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____5949;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2023__auto____5950 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5951 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5950)]);
if(or__3824__auto____5951)
{return or__3824__auto____5951;
} else
{var or__3824__auto____5952 = (cljs.core._invoke["_"]);
if(or__3824__auto____5952)
{return or__3824__auto____5952;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____5953 = this$;
if(and__3822__auto____5953)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____5953;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2023__auto____5954 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5955 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5954)]);
if(or__3824__auto____5955)
{return or__3824__auto____5955;
} else
{var or__3824__auto____5956 = (cljs.core._invoke["_"]);
if(or__3824__auto____5956)
{return or__3824__auto____5956;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____5957 = this$;
if(and__3822__auto____5957)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____5957;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2023__auto____5958 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5959 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5958)]);
if(or__3824__auto____5959)
{return or__3824__auto____5959;
} else
{var or__3824__auto____5960 = (cljs.core._invoke["_"]);
if(or__3824__auto____5960)
{return or__3824__auto____5960;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____5961 = this$;
if(and__3822__auto____5961)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____5961;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2023__auto____5962 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5963 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5962)]);
if(or__3824__auto____5963)
{return or__3824__auto____5963;
} else
{var or__3824__auto____5964 = (cljs.core._invoke["_"]);
if(or__3824__auto____5964)
{return or__3824__auto____5964;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____5965 = this$;
if(and__3822__auto____5965)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____5965;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2023__auto____5966 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5967 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5966)]);
if(or__3824__auto____5967)
{return or__3824__auto____5967;
} else
{var or__3824__auto____5968 = (cljs.core._invoke["_"]);
if(or__3824__auto____5968)
{return or__3824__auto____5968;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____5969 = this$;
if(and__3822__auto____5969)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____5969;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2023__auto____5970 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5971 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5970)]);
if(or__3824__auto____5971)
{return or__3824__auto____5971;
} else
{var or__3824__auto____5972 = (cljs.core._invoke["_"]);
if(or__3824__auto____5972)
{return or__3824__auto____5972;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____5973 = this$;
if(and__3822__auto____5973)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____5973;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2023__auto____5974 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5975 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5974)]);
if(or__3824__auto____5975)
{return or__3824__auto____5975;
} else
{var or__3824__auto____5976 = (cljs.core._invoke["_"]);
if(or__3824__auto____5976)
{return or__3824__auto____5976;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____5977 = this$;
if(and__3822__auto____5977)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____5977;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2023__auto____5978 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5979 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5978)]);
if(or__3824__auto____5979)
{return or__3824__auto____5979;
} else
{var or__3824__auto____5980 = (cljs.core._invoke["_"]);
if(or__3824__auto____5980)
{return or__3824__auto____5980;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____5981 = this$;
if(and__3822__auto____5981)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____5981;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2023__auto____5982 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5983 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5982)]);
if(or__3824__auto____5983)
{return or__3824__auto____5983;
} else
{var or__3824__auto____5984 = (cljs.core._invoke["_"]);
if(or__3824__auto____5984)
{return or__3824__auto____5984;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____5985 = this$;
if(and__3822__auto____5985)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____5985;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2023__auto____5986 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5987 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5986)]);
if(or__3824__auto____5987)
{return or__3824__auto____5987;
} else
{var or__3824__auto____5988 = (cljs.core._invoke["_"]);
if(or__3824__auto____5988)
{return or__3824__auto____5988;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____5989 = this$;
if(and__3822__auto____5989)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____5989;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2023__auto____5990 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5991 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5990)]);
if(or__3824__auto____5991)
{return or__3824__auto____5991;
} else
{var or__3824__auto____5992 = (cljs.core._invoke["_"]);
if(or__3824__auto____5992)
{return or__3824__auto____5992;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____5993 = this$;
if(and__3822__auto____5993)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____5993;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2023__auto____5994 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5995 = (cljs.core._invoke[goog.typeOf(x__2023__auto____5994)]);
if(or__3824__auto____5995)
{return or__3824__auto____5995;
} else
{var or__3824__auto____5996 = (cljs.core._invoke["_"]);
if(or__3824__auto____5996)
{return or__3824__auto____5996;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6001 = coll;
if(and__3822__auto____6001)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6001;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2023__auto____6002 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6003 = (cljs.core._count[goog.typeOf(x__2023__auto____6002)]);
if(or__3824__auto____6003)
{return or__3824__auto____6003;
} else
{var or__3824__auto____6004 = (cljs.core._count["_"]);
if(or__3824__auto____6004)
{return or__3824__auto____6004;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6009 = coll;
if(and__3822__auto____6009)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6009;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2023__auto____6010 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6011 = (cljs.core._empty[goog.typeOf(x__2023__auto____6010)]);
if(or__3824__auto____6011)
{return or__3824__auto____6011;
} else
{var or__3824__auto____6012 = (cljs.core._empty["_"]);
if(or__3824__auto____6012)
{return or__3824__auto____6012;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6017 = coll;
if(and__3822__auto____6017)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6017;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2023__auto____6018 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6019 = (cljs.core._conj[goog.typeOf(x__2023__auto____6018)]);
if(or__3824__auto____6019)
{return or__3824__auto____6019;
} else
{var or__3824__auto____6020 = (cljs.core._conj["_"]);
if(or__3824__auto____6020)
{return or__3824__auto____6020;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6029 = coll;
if(and__3822__auto____6029)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6029;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2023__auto____6030 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6031 = (cljs.core._nth[goog.typeOf(x__2023__auto____6030)]);
if(or__3824__auto____6031)
{return or__3824__auto____6031;
} else
{var or__3824__auto____6032 = (cljs.core._nth["_"]);
if(or__3824__auto____6032)
{return or__3824__auto____6032;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6033 = coll;
if(and__3822__auto____6033)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6033;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2023__auto____6034 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6035 = (cljs.core._nth[goog.typeOf(x__2023__auto____6034)]);
if(or__3824__auto____6035)
{return or__3824__auto____6035;
} else
{var or__3824__auto____6036 = (cljs.core._nth["_"]);
if(or__3824__auto____6036)
{return or__3824__auto____6036;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6041 = coll;
if(and__3822__auto____6041)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6041;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2023__auto____6042 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6043 = (cljs.core._first[goog.typeOf(x__2023__auto____6042)]);
if(or__3824__auto____6043)
{return or__3824__auto____6043;
} else
{var or__3824__auto____6044 = (cljs.core._first["_"]);
if(or__3824__auto____6044)
{return or__3824__auto____6044;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6049 = coll;
if(and__3822__auto____6049)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6049;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2023__auto____6050 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6051 = (cljs.core._rest[goog.typeOf(x__2023__auto____6050)]);
if(or__3824__auto____6051)
{return or__3824__auto____6051;
} else
{var or__3824__auto____6052 = (cljs.core._rest["_"]);
if(or__3824__auto____6052)
{return or__3824__auto____6052;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6057 = coll;
if(and__3822__auto____6057)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6057;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2023__auto____6058 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6059 = (cljs.core._next[goog.typeOf(x__2023__auto____6058)]);
if(or__3824__auto____6059)
{return or__3824__auto____6059;
} else
{var or__3824__auto____6060 = (cljs.core._next["_"]);
if(or__3824__auto____6060)
{return or__3824__auto____6060;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6069 = o;
if(and__3822__auto____6069)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6069;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2023__auto____6070 = (((o == null))?null:o);
return (function (){var or__3824__auto____6071 = (cljs.core._lookup[goog.typeOf(x__2023__auto____6070)]);
if(or__3824__auto____6071)
{return or__3824__auto____6071;
} else
{var or__3824__auto____6072 = (cljs.core._lookup["_"]);
if(or__3824__auto____6072)
{return or__3824__auto____6072;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6073 = o;
if(and__3822__auto____6073)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6073;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2023__auto____6074 = (((o == null))?null:o);
return (function (){var or__3824__auto____6075 = (cljs.core._lookup[goog.typeOf(x__2023__auto____6074)]);
if(or__3824__auto____6075)
{return or__3824__auto____6075;
} else
{var or__3824__auto____6076 = (cljs.core._lookup["_"]);
if(or__3824__auto____6076)
{return or__3824__auto____6076;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6081 = coll;
if(and__3822__auto____6081)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6081;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2023__auto____6082 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6083 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2023__auto____6082)]);
if(or__3824__auto____6083)
{return or__3824__auto____6083;
} else
{var or__3824__auto____6084 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6084)
{return or__3824__auto____6084;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6089 = coll;
if(and__3822__auto____6089)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6089;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2023__auto____6090 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6091 = (cljs.core._assoc[goog.typeOf(x__2023__auto____6090)]);
if(or__3824__auto____6091)
{return or__3824__auto____6091;
} else
{var or__3824__auto____6092 = (cljs.core._assoc["_"]);
if(or__3824__auto____6092)
{return or__3824__auto____6092;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6097 = coll;
if(and__3822__auto____6097)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6097;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2023__auto____6098 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6099 = (cljs.core._dissoc[goog.typeOf(x__2023__auto____6098)]);
if(or__3824__auto____6099)
{return or__3824__auto____6099;
} else
{var or__3824__auto____6100 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6100)
{return or__3824__auto____6100;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6105 = coll;
if(and__3822__auto____6105)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6105;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2023__auto____6106 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6107 = (cljs.core._key[goog.typeOf(x__2023__auto____6106)]);
if(or__3824__auto____6107)
{return or__3824__auto____6107;
} else
{var or__3824__auto____6108 = (cljs.core._key["_"]);
if(or__3824__auto____6108)
{return or__3824__auto____6108;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6113 = coll;
if(and__3822__auto____6113)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6113;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2023__auto____6114 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6115 = (cljs.core._val[goog.typeOf(x__2023__auto____6114)]);
if(or__3824__auto____6115)
{return or__3824__auto____6115;
} else
{var or__3824__auto____6116 = (cljs.core._val["_"]);
if(or__3824__auto____6116)
{return or__3824__auto____6116;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6121 = coll;
if(and__3822__auto____6121)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6121;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2023__auto____6122 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6123 = (cljs.core._disjoin[goog.typeOf(x__2023__auto____6122)]);
if(or__3824__auto____6123)
{return or__3824__auto____6123;
} else
{var or__3824__auto____6124 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6124)
{return or__3824__auto____6124;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6129 = coll;
if(and__3822__auto____6129)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6129;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2023__auto____6130 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6131 = (cljs.core._peek[goog.typeOf(x__2023__auto____6130)]);
if(or__3824__auto____6131)
{return or__3824__auto____6131;
} else
{var or__3824__auto____6132 = (cljs.core._peek["_"]);
if(or__3824__auto____6132)
{return or__3824__auto____6132;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6137 = coll;
if(and__3822__auto____6137)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6137;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2023__auto____6138 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6139 = (cljs.core._pop[goog.typeOf(x__2023__auto____6138)]);
if(or__3824__auto____6139)
{return or__3824__auto____6139;
} else
{var or__3824__auto____6140 = (cljs.core._pop["_"]);
if(or__3824__auto____6140)
{return or__3824__auto____6140;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6145 = coll;
if(and__3822__auto____6145)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6145;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2023__auto____6146 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6147 = (cljs.core._assoc_n[goog.typeOf(x__2023__auto____6146)]);
if(or__3824__auto____6147)
{return or__3824__auto____6147;
} else
{var or__3824__auto____6148 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6148)
{return or__3824__auto____6148;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6153 = o;
if(and__3822__auto____6153)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6153;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2023__auto____6154 = (((o == null))?null:o);
return (function (){var or__3824__auto____6155 = (cljs.core._deref[goog.typeOf(x__2023__auto____6154)]);
if(or__3824__auto____6155)
{return or__3824__auto____6155;
} else
{var or__3824__auto____6156 = (cljs.core._deref["_"]);
if(or__3824__auto____6156)
{return or__3824__auto____6156;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6161 = o;
if(and__3822__auto____6161)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6161;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2023__auto____6162 = (((o == null))?null:o);
return (function (){var or__3824__auto____6163 = (cljs.core._deref_with_timeout[goog.typeOf(x__2023__auto____6162)]);
if(or__3824__auto____6163)
{return or__3824__auto____6163;
} else
{var or__3824__auto____6164 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6164)
{return or__3824__auto____6164;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6169 = o;
if(and__3822__auto____6169)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6169;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2023__auto____6170 = (((o == null))?null:o);
return (function (){var or__3824__auto____6171 = (cljs.core._meta[goog.typeOf(x__2023__auto____6170)]);
if(or__3824__auto____6171)
{return or__3824__auto____6171;
} else
{var or__3824__auto____6172 = (cljs.core._meta["_"]);
if(or__3824__auto____6172)
{return or__3824__auto____6172;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6177 = o;
if(and__3822__auto____6177)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6177;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2023__auto____6178 = (((o == null))?null:o);
return (function (){var or__3824__auto____6179 = (cljs.core._with_meta[goog.typeOf(x__2023__auto____6178)]);
if(or__3824__auto____6179)
{return or__3824__auto____6179;
} else
{var or__3824__auto____6180 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6180)
{return or__3824__auto____6180;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6189 = coll;
if(and__3822__auto____6189)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6189;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2023__auto____6190 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6191 = (cljs.core._reduce[goog.typeOf(x__2023__auto____6190)]);
if(or__3824__auto____6191)
{return or__3824__auto____6191;
} else
{var or__3824__auto____6192 = (cljs.core._reduce["_"]);
if(or__3824__auto____6192)
{return or__3824__auto____6192;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6193 = coll;
if(and__3822__auto____6193)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6193;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2023__auto____6194 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6195 = (cljs.core._reduce[goog.typeOf(x__2023__auto____6194)]);
if(or__3824__auto____6195)
{return or__3824__auto____6195;
} else
{var or__3824__auto____6196 = (cljs.core._reduce["_"]);
if(or__3824__auto____6196)
{return or__3824__auto____6196;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6201 = coll;
if(and__3822__auto____6201)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6201;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2023__auto____6202 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6203 = (cljs.core._kv_reduce[goog.typeOf(x__2023__auto____6202)]);
if(or__3824__auto____6203)
{return or__3824__auto____6203;
} else
{var or__3824__auto____6204 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6204)
{return or__3824__auto____6204;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6209 = o;
if(and__3822__auto____6209)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6209;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2023__auto____6210 = (((o == null))?null:o);
return (function (){var or__3824__auto____6211 = (cljs.core._equiv[goog.typeOf(x__2023__auto____6210)]);
if(or__3824__auto____6211)
{return or__3824__auto____6211;
} else
{var or__3824__auto____6212 = (cljs.core._equiv["_"]);
if(or__3824__auto____6212)
{return or__3824__auto____6212;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6217 = o;
if(and__3822__auto____6217)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6217;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2023__auto____6218 = (((o == null))?null:o);
return (function (){var or__3824__auto____6219 = (cljs.core._hash[goog.typeOf(x__2023__auto____6218)]);
if(or__3824__auto____6219)
{return or__3824__auto____6219;
} else
{var or__3824__auto____6220 = (cljs.core._hash["_"]);
if(or__3824__auto____6220)
{return or__3824__auto____6220;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6225 = o;
if(and__3822__auto____6225)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6225;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2023__auto____6226 = (((o == null))?null:o);
return (function (){var or__3824__auto____6227 = (cljs.core._seq[goog.typeOf(x__2023__auto____6226)]);
if(or__3824__auto____6227)
{return or__3824__auto____6227;
} else
{var or__3824__auto____6228 = (cljs.core._seq["_"]);
if(or__3824__auto____6228)
{return or__3824__auto____6228;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6233 = coll;
if(and__3822__auto____6233)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6233;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2023__auto____6234 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6235 = (cljs.core._rseq[goog.typeOf(x__2023__auto____6234)]);
if(or__3824__auto____6235)
{return or__3824__auto____6235;
} else
{var or__3824__auto____6236 = (cljs.core._rseq["_"]);
if(or__3824__auto____6236)
{return or__3824__auto____6236;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6241 = coll;
if(and__3822__auto____6241)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6241;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2023__auto____6242 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6243 = (cljs.core._sorted_seq[goog.typeOf(x__2023__auto____6242)]);
if(or__3824__auto____6243)
{return or__3824__auto____6243;
} else
{var or__3824__auto____6244 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6244)
{return or__3824__auto____6244;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6249 = coll;
if(and__3822__auto____6249)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6249;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2023__auto____6250 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6251 = (cljs.core._sorted_seq_from[goog.typeOf(x__2023__auto____6250)]);
if(or__3824__auto____6251)
{return or__3824__auto____6251;
} else
{var or__3824__auto____6252 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6252)
{return or__3824__auto____6252;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6257 = coll;
if(and__3822__auto____6257)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6257;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2023__auto____6258 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6259 = (cljs.core._entry_key[goog.typeOf(x__2023__auto____6258)]);
if(or__3824__auto____6259)
{return or__3824__auto____6259;
} else
{var or__3824__auto____6260 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6260)
{return or__3824__auto____6260;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6265 = coll;
if(and__3822__auto____6265)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6265;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2023__auto____6266 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6267 = (cljs.core._comparator[goog.typeOf(x__2023__auto____6266)]);
if(or__3824__auto____6267)
{return or__3824__auto____6267;
} else
{var or__3824__auto____6268 = (cljs.core._comparator["_"]);
if(or__3824__auto____6268)
{return or__3824__auto____6268;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6273 = o;
if(and__3822__auto____6273)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6273;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2023__auto____6274 = (((o == null))?null:o);
return (function (){var or__3824__auto____6275 = (cljs.core._pr_seq[goog.typeOf(x__2023__auto____6274)]);
if(or__3824__auto____6275)
{return or__3824__auto____6275;
} else
{var or__3824__auto____6276 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6276)
{return or__3824__auto____6276;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6281 = d;
if(and__3822__auto____6281)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6281;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2023__auto____6282 = (((d == null))?null:d);
return (function (){var or__3824__auto____6283 = (cljs.core._realized_QMARK_[goog.typeOf(x__2023__auto____6282)]);
if(or__3824__auto____6283)
{return or__3824__auto____6283;
} else
{var or__3824__auto____6284 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6284)
{return or__3824__auto____6284;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6289 = this$;
if(and__3822__auto____6289)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6289;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2023__auto____6290 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6291 = (cljs.core._notify_watches[goog.typeOf(x__2023__auto____6290)]);
if(or__3824__auto____6291)
{return or__3824__auto____6291;
} else
{var or__3824__auto____6292 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6292)
{return or__3824__auto____6292;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6297 = this$;
if(and__3822__auto____6297)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6297;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2023__auto____6298 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6299 = (cljs.core._add_watch[goog.typeOf(x__2023__auto____6298)]);
if(or__3824__auto____6299)
{return or__3824__auto____6299;
} else
{var or__3824__auto____6300 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6300)
{return or__3824__auto____6300;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6305 = this$;
if(and__3822__auto____6305)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6305;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2023__auto____6306 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6307 = (cljs.core._remove_watch[goog.typeOf(x__2023__auto____6306)]);
if(or__3824__auto____6307)
{return or__3824__auto____6307;
} else
{var or__3824__auto____6308 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6308)
{return or__3824__auto____6308;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6313 = coll;
if(and__3822__auto____6313)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6313;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2023__auto____6314 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6315 = (cljs.core._as_transient[goog.typeOf(x__2023__auto____6314)]);
if(or__3824__auto____6315)
{return or__3824__auto____6315;
} else
{var or__3824__auto____6316 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6316)
{return or__3824__auto____6316;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6321 = tcoll;
if(and__3822__auto____6321)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6321;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2023__auto____6322 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6323 = (cljs.core._conj_BANG_[goog.typeOf(x__2023__auto____6322)]);
if(or__3824__auto____6323)
{return or__3824__auto____6323;
} else
{var or__3824__auto____6324 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6324)
{return or__3824__auto____6324;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6329 = tcoll;
if(and__3822__auto____6329)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6329;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2023__auto____6330 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6331 = (cljs.core._persistent_BANG_[goog.typeOf(x__2023__auto____6330)]);
if(or__3824__auto____6331)
{return or__3824__auto____6331;
} else
{var or__3824__auto____6332 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6332)
{return or__3824__auto____6332;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6337 = tcoll;
if(and__3822__auto____6337)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6337;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2023__auto____6338 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6339 = (cljs.core._assoc_BANG_[goog.typeOf(x__2023__auto____6338)]);
if(or__3824__auto____6339)
{return or__3824__auto____6339;
} else
{var or__3824__auto____6340 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6340)
{return or__3824__auto____6340;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6345 = tcoll;
if(and__3822__auto____6345)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6345;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2023__auto____6346 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6347 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2023__auto____6346)]);
if(or__3824__auto____6347)
{return or__3824__auto____6347;
} else
{var or__3824__auto____6348 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6348)
{return or__3824__auto____6348;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6353 = tcoll;
if(and__3822__auto____6353)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6353;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2023__auto____6354 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6355 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2023__auto____6354)]);
if(or__3824__auto____6355)
{return or__3824__auto____6355;
} else
{var or__3824__auto____6356 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6356)
{return or__3824__auto____6356;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6361 = tcoll;
if(and__3822__auto____6361)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6361;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2023__auto____6362 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6363 = (cljs.core._pop_BANG_[goog.typeOf(x__2023__auto____6362)]);
if(or__3824__auto____6363)
{return or__3824__auto____6363;
} else
{var or__3824__auto____6364 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6364)
{return or__3824__auto____6364;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6369 = tcoll;
if(and__3822__auto____6369)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6369;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2023__auto____6370 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6371 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2023__auto____6370)]);
if(or__3824__auto____6371)
{return or__3824__auto____6371;
} else
{var or__3824__auto____6372 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6372)
{return or__3824__auto____6372;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6377 = x;
if(and__3822__auto____6377)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6377;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2023__auto____6378 = (((x == null))?null:x);
return (function (){var or__3824__auto____6379 = (cljs.core._compare[goog.typeOf(x__2023__auto____6378)]);
if(or__3824__auto____6379)
{return or__3824__auto____6379;
} else
{var or__3824__auto____6380 = (cljs.core._compare["_"]);
if(or__3824__auto____6380)
{return or__3824__auto____6380;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6385 = coll;
if(and__3822__auto____6385)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6385;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2023__auto____6386 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6387 = (cljs.core._drop_first[goog.typeOf(x__2023__auto____6386)]);
if(or__3824__auto____6387)
{return or__3824__auto____6387;
} else
{var or__3824__auto____6388 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6388)
{return or__3824__auto____6388;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6393 = coll;
if(and__3822__auto____6393)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6393;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2023__auto____6394 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6395 = (cljs.core._chunked_first[goog.typeOf(x__2023__auto____6394)]);
if(or__3824__auto____6395)
{return or__3824__auto____6395;
} else
{var or__3824__auto____6396 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6396)
{return or__3824__auto____6396;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6401 = coll;
if(and__3822__auto____6401)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6401;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2023__auto____6402 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6403 = (cljs.core._chunked_rest[goog.typeOf(x__2023__auto____6402)]);
if(or__3824__auto____6403)
{return or__3824__auto____6403;
} else
{var or__3824__auto____6404 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6404)
{return or__3824__auto____6404;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6409 = coll;
if(and__3822__auto____6409)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6409;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2023__auto____6410 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6411 = (cljs.core._chunked_next[goog.typeOf(x__2023__auto____6410)]);
if(or__3824__auto____6411)
{return or__3824__auto____6411;
} else
{var or__3824__auto____6412 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6412)
{return or__3824__auto____6412;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6414 = (x === y);
if(or__3824__auto____6414)
{return or__3824__auto____6414;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6415__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6416 = y;
var G__6417 = cljs.core.first.call(null,more);
var G__6418 = cljs.core.next.call(null,more);
x = G__6416;
y = G__6417;
more = G__6418;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6415__delegate.call(this, x, y, more);
};
G__6415.cljs$lang$maxFixedArity = 2;
G__6415.cljs$lang$applyTo = (function (arglist__6419){
var x = cljs.core.first(arglist__6419);
var y = cljs.core.first(cljs.core.next(arglist__6419));
var more = cljs.core.rest(cljs.core.next(arglist__6419));
return G__6415__delegate(x, y, more);
});
G__6415.cljs$lang$arity$variadic = G__6415__delegate;
return G__6415;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6420 = null;
var G__6420__2 = (function (o,k){
return null;
});
var G__6420__3 = (function (o,k,not_found){
return not_found;
});
G__6420 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6420__2.call(this,o,k);
case 3:
return G__6420__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6420;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6421 = null;
var G__6421__2 = (function (_,f){
return f.call(null);
});
var G__6421__3 = (function (_,f,start){
return start;
});
G__6421 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6421__2.call(this,_,f);
case 3:
return G__6421__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6421;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6422 = null;
var G__6422__2 = (function (_,n){
return null;
});
var G__6422__3 = (function (_,n,not_found){
return not_found;
});
G__6422 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6422__2.call(this,_,n);
case 3:
return G__6422__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6422;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____6423 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____6423)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____6423;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6436 = cljs.core._count.call(null,cicoll);
if((cnt__6436 === 0))
{return f.call(null);
} else
{var val__6437 = cljs.core._nth.call(null,cicoll,0);
var n__6438 = 1;
while(true){
if((n__6438 < cnt__6436))
{var nval__6439 = f.call(null,val__6437,cljs.core._nth.call(null,cicoll,n__6438));
if(cljs.core.reduced_QMARK_.call(null,nval__6439))
{return cljs.core.deref.call(null,nval__6439);
} else
{{
var G__6448 = nval__6439;
var G__6449 = (n__6438 + 1);
val__6437 = G__6448;
n__6438 = G__6449;
continue;
}
}
} else
{return val__6437;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6440 = cljs.core._count.call(null,cicoll);
var val__6441 = val;
var n__6442 = 0;
while(true){
if((n__6442 < cnt__6440))
{var nval__6443 = f.call(null,val__6441,cljs.core._nth.call(null,cicoll,n__6442));
if(cljs.core.reduced_QMARK_.call(null,nval__6443))
{return cljs.core.deref.call(null,nval__6443);
} else
{{
var G__6450 = nval__6443;
var G__6451 = (n__6442 + 1);
val__6441 = G__6450;
n__6442 = G__6451;
continue;
}
}
} else
{return val__6441;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6444 = cljs.core._count.call(null,cicoll);
var val__6445 = val;
var n__6446 = idx;
while(true){
if((n__6446 < cnt__6444))
{var nval__6447 = f.call(null,val__6445,cljs.core._nth.call(null,cicoll,n__6446));
if(cljs.core.reduced_QMARK_.call(null,nval__6447))
{return cljs.core.deref.call(null,nval__6447);
} else
{{
var G__6452 = nval__6447;
var G__6453 = (n__6446 + 1);
val__6445 = G__6452;
n__6446 = G__6453;
continue;
}
}
} else
{return val__6445;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__6466 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6467 = (arr[0]);
var n__6468 = 1;
while(true){
if((n__6468 < cnt__6466))
{var nval__6469 = f.call(null,val__6467,(arr[n__6468]));
if(cljs.core.reduced_QMARK_.call(null,nval__6469))
{return cljs.core.deref.call(null,nval__6469);
} else
{{
var G__6478 = nval__6469;
var G__6479 = (n__6468 + 1);
val__6467 = G__6478;
n__6468 = G__6479;
continue;
}
}
} else
{return val__6467;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6470 = arr.length;
var val__6471 = val;
var n__6472 = 0;
while(true){
if((n__6472 < cnt__6470))
{var nval__6473 = f.call(null,val__6471,(arr[n__6472]));
if(cljs.core.reduced_QMARK_.call(null,nval__6473))
{return cljs.core.deref.call(null,nval__6473);
} else
{{
var G__6480 = nval__6473;
var G__6481 = (n__6472 + 1);
val__6471 = G__6480;
n__6472 = G__6481;
continue;
}
}
} else
{return val__6471;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6474 = arr.length;
var val__6475 = val;
var n__6476 = idx;
while(true){
if((n__6476 < cnt__6474))
{var nval__6477 = f.call(null,val__6475,(arr[n__6476]));
if(cljs.core.reduced_QMARK_.call(null,nval__6477))
{return cljs.core.deref.call(null,nval__6477);
} else
{{
var G__6482 = nval__6477;
var G__6483 = (n__6476 + 1);
val__6475 = G__6482;
n__6476 = G__6483;
continue;
}
}
} else
{return val__6475;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6484 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6485 = this;
if(((this__6485.i + 1) < this__6485.a.length))
{return (new cljs.core.IndexedSeq(this__6485.a,(this__6485.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6486 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6487 = this;
var c__6488 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6488 > 0))
{return (new cljs.core.RSeq(coll,(c__6488 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6489 = this;
var this__6490 = this;
return cljs.core.pr_str.call(null,this__6490);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6491 = this;
if(cljs.core.counted_QMARK_.call(null,this__6491.a))
{return cljs.core.ci_reduce.call(null,this__6491.a,f,(this__6491.a[this__6491.i]),(this__6491.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6491.a[this__6491.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6492 = this;
if(cljs.core.counted_QMARK_.call(null,this__6492.a))
{return cljs.core.ci_reduce.call(null,this__6492.a,f,start,this__6492.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6493 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6494 = this;
return (this__6494.a.length - this__6494.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6495 = this;
return (this__6495.a[this__6495.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6496 = this;
if(((this__6496.i + 1) < this__6496.a.length))
{return (new cljs.core.IndexedSeq(this__6496.a,(this__6496.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6497 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6498 = this;
var i__6499 = (n + this__6498.i);
if((i__6499 < this__6498.a.length))
{return (this__6498.a[i__6499]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6500 = this;
var i__6501 = (n + this__6500.i);
if((i__6501 < this__6500.a.length))
{return (this__6500.a[i__6501]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6502 = null;
var G__6502__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6502__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6502 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6502__2.call(this,array,f);
case 3:
return G__6502__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6502;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6503 = null;
var G__6503__2 = (function (array,k){
return (array[k]);
});
var G__6503__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6503 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6503__2.call(this,array,k);
case 3:
return G__6503__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6503;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6504 = null;
var G__6504__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6504__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6504 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6504__2.call(this,array,n);
case 3:
return G__6504__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6504;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6505 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6506 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6507 = this;
var this__6508 = this;
return cljs.core.pr_str.call(null,this__6508);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6509 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6510 = this;
return (this__6510.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6511 = this;
return cljs.core._nth.call(null,this__6511.ci,this__6511.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6512 = this;
if((this__6512.i > 0))
{return (new cljs.core.RSeq(this__6512.ci,(this__6512.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6513 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6514 = this;
return (new cljs.core.RSeq(this__6514.ci,this__6514.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6515 = this;
return this__6515.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6519__6520 = coll;
if(G__6519__6520)
{if((function (){var or__3824__auto____6521 = (G__6519__6520.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6521)
{return or__3824__auto____6521;
} else
{return G__6519__6520.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6519__6520.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6519__6520);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6519__6520);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6526__6527 = coll;
if(G__6526__6527)
{if((function (){var or__3824__auto____6528 = (G__6526__6527.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6528)
{return or__3824__auto____6528;
} else
{return G__6526__6527.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6526__6527.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6526__6527);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6526__6527);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6529 = cljs.core.seq.call(null,coll);
if((s__6529 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6529);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__6534__6535 = coll;
if(G__6534__6535)
{if((function (){var or__3824__auto____6536 = (G__6534__6535.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6536)
{return or__3824__auto____6536;
} else
{return G__6534__6535.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6534__6535.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6534__6535);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6534__6535);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6537 = cljs.core.seq.call(null,coll);
if(!((s__6537 == null)))
{return cljs.core._rest.call(null,s__6537);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6541__6542 = coll;
if(G__6541__6542)
{if((function (){var or__3824__auto____6543 = (G__6541__6542.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6543)
{return or__3824__auto____6543;
} else
{return G__6541__6542.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6541__6542.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6541__6542);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6541__6542);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6545 = cljs.core.next.call(null,s);
if(!((sn__6545 == null)))
{{
var G__6546 = sn__6545;
s = G__6546;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6547__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6548 = conj.call(null,coll,x);
var G__6549 = cljs.core.first.call(null,xs);
var G__6550 = cljs.core.next.call(null,xs);
coll = G__6548;
x = G__6549;
xs = G__6550;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6547 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6547__delegate.call(this, coll, x, xs);
};
G__6547.cljs$lang$maxFixedArity = 2;
G__6547.cljs$lang$applyTo = (function (arglist__6551){
var coll = cljs.core.first(arglist__6551);
var x = cljs.core.first(cljs.core.next(arglist__6551));
var xs = cljs.core.rest(cljs.core.next(arglist__6551));
return G__6547__delegate(coll, x, xs);
});
G__6547.cljs$lang$arity$variadic = G__6547__delegate;
return G__6547;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6554 = cljs.core.seq.call(null,coll);
var acc__6555 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6554))
{return (acc__6555 + cljs.core._count.call(null,s__6554));
} else
{{
var G__6556 = cljs.core.next.call(null,s__6554);
var G__6557 = (acc__6555 + 1);
s__6554 = G__6556;
acc__6555 = G__6557;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__6564__6565 = coll;
if(G__6564__6565)
{if((function (){var or__3824__auto____6566 = (G__6564__6565.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6566)
{return or__3824__auto____6566;
} else
{return G__6564__6565.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6564__6565.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6564__6565);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6564__6565);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6567__6568 = coll;
if(G__6567__6568)
{if((function (){var or__3824__auto____6569 = (G__6567__6568.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6569)
{return or__3824__auto____6569;
} else
{return G__6567__6568.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6567__6568.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6567__6568);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6567__6568);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6572__delegate = function (coll,k,v,kvs){
while(true){
var ret__6571 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6573 = ret__6571;
var G__6574 = cljs.core.first.call(null,kvs);
var G__6575 = cljs.core.second.call(null,kvs);
var G__6576 = cljs.core.nnext.call(null,kvs);
coll = G__6573;
k = G__6574;
v = G__6575;
kvs = G__6576;
continue;
}
} else
{return ret__6571;
}
break;
}
};
var G__6572 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6572__delegate.call(this, coll, k, v, kvs);
};
G__6572.cljs$lang$maxFixedArity = 3;
G__6572.cljs$lang$applyTo = (function (arglist__6577){
var coll = cljs.core.first(arglist__6577);
var k = cljs.core.first(cljs.core.next(arglist__6577));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6577)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6577)));
return G__6572__delegate(coll, k, v, kvs);
});
G__6572.cljs$lang$arity$variadic = G__6572__delegate;
return G__6572;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6580__delegate = function (coll,k,ks){
while(true){
var ret__6579 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6581 = ret__6579;
var G__6582 = cljs.core.first.call(null,ks);
var G__6583 = cljs.core.next.call(null,ks);
coll = G__6581;
k = G__6582;
ks = G__6583;
continue;
}
} else
{return ret__6579;
}
break;
}
};
var G__6580 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6580__delegate.call(this, coll, k, ks);
};
G__6580.cljs$lang$maxFixedArity = 2;
G__6580.cljs$lang$applyTo = (function (arglist__6584){
var coll = cljs.core.first(arglist__6584);
var k = cljs.core.first(cljs.core.next(arglist__6584));
var ks = cljs.core.rest(cljs.core.next(arglist__6584));
return G__6580__delegate(coll, k, ks);
});
G__6580.cljs$lang$arity$variadic = G__6580__delegate;
return G__6580;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6588__6589 = o;
if(G__6588__6589)
{if((function (){var or__3824__auto____6590 = (G__6588__6589.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6590)
{return or__3824__auto____6590;
} else
{return G__6588__6589.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6588__6589.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6588__6589);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6588__6589);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__6593__delegate = function (coll,k,ks){
while(true){
var ret__6592 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6594 = ret__6592;
var G__6595 = cljs.core.first.call(null,ks);
var G__6596 = cljs.core.next.call(null,ks);
coll = G__6594;
k = G__6595;
ks = G__6596;
continue;
}
} else
{return ret__6592;
}
break;
}
};
var G__6593 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6593__delegate.call(this, coll, k, ks);
};
G__6593.cljs$lang$maxFixedArity = 2;
G__6593.cljs$lang$applyTo = (function (arglist__6597){
var coll = cljs.core.first(arglist__6597);
var k = cljs.core.first(cljs.core.next(arglist__6597));
var ks = cljs.core.rest(cljs.core.next(arglist__6597));
return G__6593__delegate(coll, k, ks);
});
G__6593.cljs$lang$arity$variadic = G__6593__delegate;
return G__6593;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__6599 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6599);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6599;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6601 = (cljs.core.string_hash_cache[k]);
if(!((h__6601 == null)))
{return h__6601;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____6603 = goog.isString(o);
if(and__3822__auto____6603)
{return check_cache;
} else
{return and__3822__auto____6603;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6607__6608 = x;
if(G__6607__6608)
{if((function (){var or__3824__auto____6609 = (G__6607__6608.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6609)
{return or__3824__auto____6609;
} else
{return G__6607__6608.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6607__6608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6607__6608);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6607__6608);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6613__6614 = x;
if(G__6613__6614)
{if((function (){var or__3824__auto____6615 = (G__6613__6614.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6615)
{return or__3824__auto____6615;
} else
{return G__6613__6614.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6613__6614.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6613__6614);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6613__6614);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6619__6620 = x;
if(G__6619__6620)
{if((function (){var or__3824__auto____6621 = (G__6619__6620.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6621)
{return or__3824__auto____6621;
} else
{return G__6619__6620.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6619__6620.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6619__6620);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6619__6620);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6625__6626 = x;
if(G__6625__6626)
{if((function (){var or__3824__auto____6627 = (G__6625__6626.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6627)
{return or__3824__auto____6627;
} else
{return G__6625__6626.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6625__6626.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6625__6626);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6625__6626);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6631__6632 = x;
if(G__6631__6632)
{if((function (){var or__3824__auto____6633 = (G__6631__6632.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6633)
{return or__3824__auto____6633;
} else
{return G__6631__6632.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6631__6632.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6631__6632);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6631__6632);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6637__6638 = x;
if(G__6637__6638)
{if((function (){var or__3824__auto____6639 = (G__6637__6638.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6639)
{return or__3824__auto____6639;
} else
{return G__6637__6638.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6637__6638.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6637__6638);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6637__6638);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6643__6644 = x;
if(G__6643__6644)
{if((function (){var or__3824__auto____6645 = (G__6643__6644.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6645)
{return or__3824__auto____6645;
} else
{return G__6643__6644.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6643__6644.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6643__6644);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6643__6644);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6649__6650 = x;
if(G__6649__6650)
{if((function (){var or__3824__auto____6651 = (G__6649__6650.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6651)
{return or__3824__auto____6651;
} else
{return G__6649__6650.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6649__6650.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6649__6650);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6649__6650);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6655__6656 = x;
if(G__6655__6656)
{if((function (){var or__3824__auto____6657 = (G__6655__6656.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
} else
{return G__6655__6656.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6655__6656.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6655__6656);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6655__6656);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6661__6662 = x;
if(G__6661__6662)
{if(cljs.core.truth_((function (){var or__3824__auto____6663 = null;
if(cljs.core.truth_(or__3824__auto____6663))
{return or__3824__auto____6663;
} else
{return G__6661__6662.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6661__6662.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6661__6662);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6661__6662);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__6664__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6664 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6664__delegate.call(this, keyvals);
};
G__6664.cljs$lang$maxFixedArity = 0;
G__6664.cljs$lang$applyTo = (function (arglist__6665){
var keyvals = cljs.core.seq(arglist__6665);;
return G__6664__delegate(keyvals);
});
G__6664.cljs$lang$arity$variadic = G__6664__delegate;
return G__6664;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__6667 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6667.push(key);
}));
return keys__6667;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6671 = i;
var j__6672 = j;
var len__6673 = len;
while(true){
if((len__6673 === 0))
{return to;
} else
{(to[j__6672] = (from[i__6671]));
{
var G__6674 = (i__6671 + 1);
var G__6675 = (j__6672 + 1);
var G__6676 = (len__6673 - 1);
i__6671 = G__6674;
j__6672 = G__6675;
len__6673 = G__6676;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6680 = (i + (len - 1));
var j__6681 = (j + (len - 1));
var len__6682 = len;
while(true){
if((len__6682 === 0))
{return to;
} else
{(to[j__6681] = (from[i__6680]));
{
var G__6683 = (i__6680 - 1);
var G__6684 = (j__6681 - 1);
var G__6685 = (len__6682 - 1);
i__6680 = G__6683;
j__6681 = G__6684;
len__6682 = G__6685;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__6689__6690 = s;
if(G__6689__6690)
{if((function (){var or__3824__auto____6691 = (G__6689__6690.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6691)
{return or__3824__auto____6691;
} else
{return G__6689__6690.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6689__6690.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6689__6690);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6689__6690);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6695__6696 = s;
if(G__6695__6696)
{if((function (){var or__3824__auto____6697 = (G__6695__6696.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{return G__6695__6696.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6695__6696.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6695__6696);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6695__6696);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____6700 = goog.isString(x);
if(and__3822__auto____6700)
{return !((function (){var or__3824__auto____6701 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6701)
{return or__3824__auto____6701;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6700;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6703 = goog.isString(x);
if(and__3822__auto____6703)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6703;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6705 = goog.isString(x);
if(and__3822__auto____6705)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6705;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6710 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6710)
{return or__3824__auto____6710;
} else
{var G__6711__6712 = f;
if(G__6711__6712)
{if((function (){var or__3824__auto____6713 = (G__6711__6712.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{return G__6711__6712.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6711__6712.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6711__6712);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6711__6712);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6715 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6715)
{return (n == n.toFixed());
} else
{return and__3822__auto____6715;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____6718 = coll;
if(cljs.core.truth_(and__3822__auto____6718))
{var and__3822__auto____6719 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6719)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6719;
}
} else
{return and__3822__auto____6718;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__6728__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__6724 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__6725 = more;
while(true){
var x__6726 = cljs.core.first.call(null,xs__6725);
var etc__6727 = cljs.core.next.call(null,xs__6725);
if(cljs.core.truth_(xs__6725))
{if(cljs.core.contains_QMARK_.call(null,s__6724,x__6726))
{return false;
} else
{{
var G__6729 = cljs.core.conj.call(null,s__6724,x__6726);
var G__6730 = etc__6727;
s__6724 = G__6729;
xs__6725 = G__6730;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__6728 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6728__delegate.call(this, x, y, more);
};
G__6728.cljs$lang$maxFixedArity = 2;
G__6728.cljs$lang$applyTo = (function (arglist__6731){
var x = cljs.core.first(arglist__6731);
var y = cljs.core.first(cljs.core.next(arglist__6731));
var more = cljs.core.rest(cljs.core.next(arglist__6731));
return G__6728__delegate(x, y, more);
});
G__6728.cljs$lang$arity$variadic = G__6728__delegate;
return G__6728;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__6735__6736 = x;
if(G__6735__6736)
{if(cljs.core.truth_((function (){var or__3824__auto____6737 = null;
if(cljs.core.truth_(or__3824__auto____6737))
{return or__3824__auto____6737;
} else
{return G__6735__6736.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__6735__6736.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6735__6736);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6735__6736);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__6742 = cljs.core.count.call(null,xs);
var yl__6743 = cljs.core.count.call(null,ys);
if((xl__6742 < yl__6743))
{return -1;
} else
{if((xl__6742 > yl__6743))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__6742,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__6744 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____6745 = (d__6744 === 0);
if(and__3822__auto____6745)
{return ((n + 1) < len);
} else
{return and__3822__auto____6745;
}
})())
{{
var G__6746 = xs;
var G__6747 = ys;
var G__6748 = len;
var G__6749 = (n + 1);
xs = G__6746;
ys = G__6747;
len = G__6748;
n = G__6749;
continue;
}
} else
{return d__6744;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__6751 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__6751))
{return r__6751;
} else
{if(cljs.core.truth_(r__6751))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__6753 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__6753,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6753);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____6759 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____6759)
{var s__6760 = temp__3971__auto____6759;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6760),cljs.core.next.call(null,s__6760));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6761 = val;
var coll__6762 = cljs.core.seq.call(null,coll);
while(true){
if(coll__6762)
{var nval__6763 = f.call(null,val__6761,cljs.core.first.call(null,coll__6762));
if(cljs.core.reduced_QMARK_.call(null,nval__6763))
{return cljs.core.deref.call(null,nval__6763);
} else
{{
var G__6764 = nval__6763;
var G__6765 = cljs.core.next.call(null,coll__6762);
val__6761 = G__6764;
coll__6762 = G__6765;
continue;
}
}
} else
{return val__6761;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__6767 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__6767);
return cljs.core.vec.call(null,a__6767);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__6774__6775 = coll;
if(G__6774__6775)
{if((function (){var or__3824__auto____6776 = (G__6774__6775.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6776)
{return or__3824__auto____6776;
} else
{return G__6774__6775.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6774__6775.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6774__6775);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6774__6775);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6777__6778 = coll;
if(G__6777__6778)
{if((function (){var or__3824__auto____6779 = (G__6777__6778.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6779)
{return or__3824__auto____6779;
} else
{return G__6777__6778.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6777__6778.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6777__6778);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6777__6778);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6780 = this;
return this__6780.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__6781__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6781 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6781__delegate.call(this, x, y, more);
};
G__6781.cljs$lang$maxFixedArity = 2;
G__6781.cljs$lang$applyTo = (function (arglist__6782){
var x = cljs.core.first(arglist__6782);
var y = cljs.core.first(cljs.core.next(arglist__6782));
var more = cljs.core.rest(cljs.core.next(arglist__6782));
return G__6781__delegate(x, y, more);
});
G__6781.cljs$lang$arity$variadic = G__6781__delegate;
return G__6781;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__6783__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6783 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6783__delegate.call(this, x, y, more);
};
G__6783.cljs$lang$maxFixedArity = 2;
G__6783.cljs$lang$applyTo = (function (arglist__6784){
var x = cljs.core.first(arglist__6784);
var y = cljs.core.first(cljs.core.next(arglist__6784));
var more = cljs.core.rest(cljs.core.next(arglist__6784));
return G__6783__delegate(x, y, more);
});
G__6783.cljs$lang$arity$variadic = G__6783__delegate;
return G__6783;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__6785__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6785 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6785__delegate.call(this, x, y, more);
};
G__6785.cljs$lang$maxFixedArity = 2;
G__6785.cljs$lang$applyTo = (function (arglist__6786){
var x = cljs.core.first(arglist__6786);
var y = cljs.core.first(cljs.core.next(arglist__6786));
var more = cljs.core.rest(cljs.core.next(arglist__6786));
return G__6785__delegate(x, y, more);
});
G__6785.cljs$lang$arity$variadic = G__6785__delegate;
return G__6785;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__6787__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6787 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6787__delegate.call(this, x, y, more);
};
G__6787.cljs$lang$maxFixedArity = 2;
G__6787.cljs$lang$applyTo = (function (arglist__6788){
var x = cljs.core.first(arglist__6788);
var y = cljs.core.first(cljs.core.next(arglist__6788));
var more = cljs.core.rest(cljs.core.next(arglist__6788));
return G__6787__delegate(x, y, more);
});
G__6787.cljs$lang$arity$variadic = G__6787__delegate;
return G__6787;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__6789__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__6790 = y;
var G__6791 = cljs.core.first.call(null,more);
var G__6792 = cljs.core.next.call(null,more);
x = G__6790;
y = G__6791;
more = G__6792;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6789 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6789__delegate.call(this, x, y, more);
};
G__6789.cljs$lang$maxFixedArity = 2;
G__6789.cljs$lang$applyTo = (function (arglist__6793){
var x = cljs.core.first(arglist__6793);
var y = cljs.core.first(cljs.core.next(arglist__6793));
var more = cljs.core.rest(cljs.core.next(arglist__6793));
return G__6789__delegate(x, y, more);
});
G__6789.cljs$lang$arity$variadic = G__6789__delegate;
return G__6789;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__6794__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__6795 = y;
var G__6796 = cljs.core.first.call(null,more);
var G__6797 = cljs.core.next.call(null,more);
x = G__6795;
y = G__6796;
more = G__6797;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6794 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6794__delegate.call(this, x, y, more);
};
G__6794.cljs$lang$maxFixedArity = 2;
G__6794.cljs$lang$applyTo = (function (arglist__6798){
var x = cljs.core.first(arglist__6798);
var y = cljs.core.first(cljs.core.next(arglist__6798));
var more = cljs.core.rest(cljs.core.next(arglist__6798));
return G__6794__delegate(x, y, more);
});
G__6794.cljs$lang$arity$variadic = G__6794__delegate;
return G__6794;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__6799__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__6800 = y;
var G__6801 = cljs.core.first.call(null,more);
var G__6802 = cljs.core.next.call(null,more);
x = G__6800;
y = G__6801;
more = G__6802;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6799 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6799__delegate.call(this, x, y, more);
};
G__6799.cljs$lang$maxFixedArity = 2;
G__6799.cljs$lang$applyTo = (function (arglist__6803){
var x = cljs.core.first(arglist__6803);
var y = cljs.core.first(cljs.core.next(arglist__6803));
var more = cljs.core.rest(cljs.core.next(arglist__6803));
return G__6799__delegate(x, y, more);
});
G__6799.cljs$lang$arity$variadic = G__6799__delegate;
return G__6799;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__6804__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__6805 = y;
var G__6806 = cljs.core.first.call(null,more);
var G__6807 = cljs.core.next.call(null,more);
x = G__6805;
y = G__6806;
more = G__6807;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6804 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6804__delegate.call(this, x, y, more);
};
G__6804.cljs$lang$maxFixedArity = 2;
G__6804.cljs$lang$applyTo = (function (arglist__6808){
var x = cljs.core.first(arglist__6808);
var y = cljs.core.first(cljs.core.next(arglist__6808));
var more = cljs.core.rest(cljs.core.next(arglist__6808));
return G__6804__delegate(x, y, more);
});
G__6804.cljs$lang$arity$variadic = G__6804__delegate;
return G__6804;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__6809__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6809 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6809__delegate.call(this, x, y, more);
};
G__6809.cljs$lang$maxFixedArity = 2;
G__6809.cljs$lang$applyTo = (function (arglist__6810){
var x = cljs.core.first(arglist__6810);
var y = cljs.core.first(cljs.core.next(arglist__6810));
var more = cljs.core.rest(cljs.core.next(arglist__6810));
return G__6809__delegate(x, y, more);
});
G__6809.cljs$lang$arity$variadic = G__6809__delegate;
return G__6809;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__6811__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6811 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6811__delegate.call(this, x, y, more);
};
G__6811.cljs$lang$maxFixedArity = 2;
G__6811.cljs$lang$applyTo = (function (arglist__6812){
var x = cljs.core.first(arglist__6812);
var y = cljs.core.first(cljs.core.next(arglist__6812));
var more = cljs.core.rest(cljs.core.next(arglist__6812));
return G__6811__delegate(x, y, more);
});
G__6811.cljs$lang$arity$variadic = G__6811__delegate;
return G__6811;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__6814 = (n % d);
return cljs.core.fix.call(null,((n - rem__6814) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6816 = cljs.core.quot.call(null,n,d);
return (n - (d * q__6816));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__6819 = (v - ((v >> 1) & 1431655765));
var v__6820 = ((v__6819 & 858993459) + ((v__6819 >> 2) & 858993459));
return ((((v__6820 + (v__6820 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__6821__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6822 = y;
var G__6823 = cljs.core.first.call(null,more);
var G__6824 = cljs.core.next.call(null,more);
x = G__6822;
y = G__6823;
more = G__6824;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6821 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6821__delegate.call(this, x, y, more);
};
G__6821.cljs$lang$maxFixedArity = 2;
G__6821.cljs$lang$applyTo = (function (arglist__6825){
var x = cljs.core.first(arglist__6825);
var y = cljs.core.first(cljs.core.next(arglist__6825));
var more = cljs.core.rest(cljs.core.next(arglist__6825));
return G__6821__delegate(x, y, more);
});
G__6821.cljs$lang$arity$variadic = G__6821__delegate;
return G__6821;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__6829 = n;
var xs__6830 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6831 = xs__6830;
if(and__3822__auto____6831)
{return (n__6829 > 0);
} else
{return and__3822__auto____6831;
}
})()))
{{
var G__6832 = (n__6829 - 1);
var G__6833 = cljs.core.next.call(null,xs__6830);
n__6829 = G__6832;
xs__6830 = G__6833;
continue;
}
} else
{return xs__6830;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__6834__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6835 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6836 = cljs.core.next.call(null,more);
sb = G__6835;
more = G__6836;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6834 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6834__delegate.call(this, x, ys);
};
G__6834.cljs$lang$maxFixedArity = 1;
G__6834.cljs$lang$applyTo = (function (arglist__6837){
var x = cljs.core.first(arglist__6837);
var ys = cljs.core.rest(arglist__6837);
return G__6834__delegate(x, ys);
});
G__6834.cljs$lang$arity$variadic = G__6834__delegate;
return G__6834;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__6838__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6839 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__6840 = cljs.core.next.call(null,more);
sb = G__6839;
more = G__6840;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__6838 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6838__delegate.call(this, x, ys);
};
G__6838.cljs$lang$maxFixedArity = 1;
G__6838.cljs$lang$applyTo = (function (arglist__6841){
var x = cljs.core.first(arglist__6841);
var ys = cljs.core.rest(arglist__6841);
return G__6838__delegate(x, ys);
});
G__6838.cljs$lang$arity$variadic = G__6838__delegate;
return G__6838;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__6842){
var fmt = cljs.core.first(arglist__6842);
var args = cljs.core.rest(arglist__6842);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6845 = cljs.core.seq.call(null,x);
var ys__6846 = cljs.core.seq.call(null,y);
while(true){
if((xs__6845 == null))
{return (ys__6846 == null);
} else
{if((ys__6846 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6845),cljs.core.first.call(null,ys__6846)))
{{
var G__6847 = cljs.core.next.call(null,xs__6845);
var G__6848 = cljs.core.next.call(null,ys__6846);
xs__6845 = G__6847;
ys__6846 = G__6848;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__6849_SHARP_,p2__6850_SHARP_){
return cljs.core.hash_combine.call(null,p1__6849_SHARP_,cljs.core.hash.call(null,p2__6850_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__6854 = 0;
var s__6855 = cljs.core.seq.call(null,m);
while(true){
if(s__6855)
{var e__6856 = cljs.core.first.call(null,s__6855);
{
var G__6857 = ((h__6854 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__6856)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__6856)))) % 4503599627370496);
var G__6858 = cljs.core.next.call(null,s__6855);
h__6854 = G__6857;
s__6855 = G__6858;
continue;
}
} else
{return h__6854;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__6862 = 0;
var s__6863 = cljs.core.seq.call(null,s);
while(true){
if(s__6863)
{var e__6864 = cljs.core.first.call(null,s__6863);
{
var G__6865 = ((h__6862 + cljs.core.hash.call(null,e__6864)) % 4503599627370496);
var G__6866 = cljs.core.next.call(null,s__6863);
h__6862 = G__6865;
s__6863 = G__6866;
continue;
}
} else
{return h__6862;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__6887__6888 = cljs.core.seq.call(null,fn_map);
if(G__6887__6888)
{var G__6890__6892 = cljs.core.first.call(null,G__6887__6888);
var vec__6891__6893 = G__6890__6892;
var key_name__6894 = cljs.core.nth.call(null,vec__6891__6893,0,null);
var f__6895 = cljs.core.nth.call(null,vec__6891__6893,1,null);
var G__6887__6896 = G__6887__6888;
var G__6890__6897 = G__6890__6892;
var G__6887__6898 = G__6887__6896;
while(true){
var vec__6899__6900 = G__6890__6897;
var key_name__6901 = cljs.core.nth.call(null,vec__6899__6900,0,null);
var f__6902 = cljs.core.nth.call(null,vec__6899__6900,1,null);
var G__6887__6903 = G__6887__6898;
var str_name__6904 = cljs.core.name.call(null,key_name__6901);
(obj[str_name__6904] = f__6902);
var temp__3974__auto____6905 = cljs.core.next.call(null,G__6887__6903);
if(temp__3974__auto____6905)
{var G__6887__6906 = temp__3974__auto____6905;
{
var G__6907 = cljs.core.first.call(null,G__6887__6906);
var G__6908 = G__6887__6906;
G__6890__6897 = G__6907;
G__6887__6898 = G__6908;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6909 = this;
var h__1852__auto____6910 = this__6909.__hash;
if(!((h__1852__auto____6910 == null)))
{return h__1852__auto____6910;
} else
{var h__1852__auto____6911 = cljs.core.hash_coll.call(null,coll);
this__6909.__hash = h__1852__auto____6911;
return h__1852__auto____6911;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6912 = this;
if((this__6912.count === 1))
{return null;
} else
{return this__6912.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6913 = this;
return (new cljs.core.List(this__6913.meta,o,coll,(this__6913.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__6914 = this;
var this__6915 = this;
return cljs.core.pr_str.call(null,this__6915);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6916 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6917 = this;
return this__6917.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6918 = this;
return this__6918.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6919 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6920 = this;
return this__6920.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6921 = this;
if((this__6921.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__6921.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6922 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6923 = this;
return (new cljs.core.List(meta,this__6923.first,this__6923.rest,this__6923.count,this__6923.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6924 = this;
return this__6924.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6925 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6926 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6927 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6928 = this;
return (new cljs.core.List(this__6928.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__6929 = this;
var this__6930 = this;
return cljs.core.pr_str.call(null,this__6930);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6931 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6932 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6933 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6934 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6935 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6936 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6937 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6938 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6939 = this;
return this__6939.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6940 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__6944__6945 = coll;
if(G__6944__6945)
{if((function (){var or__3824__auto____6946 = (G__6944__6945.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____6946)
{return or__3824__auto____6946;
} else
{return G__6944__6945.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__6944__6945.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6944__6945);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6944__6945);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__6947__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__6947 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6947__delegate.call(this, x, y, z, items);
};
G__6947.cljs$lang$maxFixedArity = 3;
G__6947.cljs$lang$applyTo = (function (arglist__6948){
var x = cljs.core.first(arglist__6948);
var y = cljs.core.first(cljs.core.next(arglist__6948));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6948)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6948)));
return G__6947__delegate(x, y, z, items);
});
G__6947.cljs$lang$arity$variadic = G__6947__delegate;
return G__6947;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6949 = this;
var h__1852__auto____6950 = this__6949.__hash;
if(!((h__1852__auto____6950 == null)))
{return h__1852__auto____6950;
} else
{var h__1852__auto____6951 = cljs.core.hash_coll.call(null,coll);
this__6949.__hash = h__1852__auto____6951;
return h__1852__auto____6951;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6952 = this;
if((this__6952.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__6952.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6953 = this;
return (new cljs.core.Cons(null,o,coll,this__6953.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__6954 = this;
var this__6955 = this;
return cljs.core.pr_str.call(null,this__6955);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6956 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6957 = this;
return this__6957.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6958 = this;
if((this__6958.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__6958.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6959 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6960 = this;
return (new cljs.core.Cons(meta,this__6960.first,this__6960.rest,this__6960.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6961 = this;
return this__6961.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6962 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6962.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____6967 = (coll == null);
if(or__3824__auto____6967)
{return or__3824__auto____6967;
} else
{var G__6968__6969 = coll;
if(G__6968__6969)
{if((function (){var or__3824__auto____6970 = (G__6968__6969.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{return G__6968__6969.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6968__6969.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6968__6969);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6968__6969);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__6974__6975 = x;
if(G__6974__6975)
{if((function (){var or__3824__auto____6976 = (G__6974__6975.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____6976)
{return or__3824__auto____6976;
} else
{return G__6974__6975.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__6974__6975.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6974__6975);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6974__6975);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__6977 = null;
var G__6977__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__6977__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__6977 = function(string,f,start){
switch(arguments.length){
case 2:
return G__6977__2.call(this,string,f);
case 3:
return G__6977__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6977;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6978 = null;
var G__6978__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__6978__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__6978 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__6978__2.call(this,string,k);
case 3:
return G__6978__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6978;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6979 = null;
var G__6979__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__6979__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6979 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__6979__2.call(this,string,n);
case 3:
return G__6979__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6979;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__6991 = null;
var G__6991__2 = (function (this_sym6982,coll){
var this__6984 = this;
var this_sym6982__6985 = this;
var ___6986 = this_sym6982__6985;
if((coll == null))
{return null;
} else
{var strobj__6987 = coll.strobj;
if((strobj__6987 == null))
{return cljs.core._lookup.call(null,coll,this__6984.k,null);
} else
{return (strobj__6987[this__6984.k]);
}
}
});
var G__6991__3 = (function (this_sym6983,coll,not_found){
var this__6984 = this;
var this_sym6983__6988 = this;
var ___6989 = this_sym6983__6988;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__6984.k,not_found);
}
});
G__6991 = function(this_sym6983,coll,not_found){
switch(arguments.length){
case 2:
return G__6991__2.call(this,this_sym6983,coll);
case 3:
return G__6991__3.call(this,this_sym6983,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6991;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym6980,args6981){
var this__6990 = this;
return this_sym6980.call.apply(this_sym6980,[this_sym6980].concat(args6981.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7000 = null;
var G__7000__2 = (function (this_sym6994,coll){
var this_sym6994__6996 = this;
var this__6997 = this_sym6994__6996;
return cljs.core._lookup.call(null,coll,this__6997.toString(),null);
});
var G__7000__3 = (function (this_sym6995,coll,not_found){
var this_sym6995__6998 = this;
var this__6999 = this_sym6995__6998;
return cljs.core._lookup.call(null,coll,this__6999.toString(),not_found);
});
G__7000 = function(this_sym6995,coll,not_found){
switch(arguments.length){
case 2:
return G__7000__2.call(this,this_sym6995,coll);
case 3:
return G__7000__3.call(this,this_sym6995,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7000;
})()
;
String.prototype.apply = (function (this_sym6992,args6993){
return this_sym6992.call.apply(this_sym6992,[this_sym6992].concat(args6993.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7002 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7002;
} else
{lazy_seq.x = x__7002.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7003 = this;
var h__1852__auto____7004 = this__7003.__hash;
if(!((h__1852__auto____7004 == null)))
{return h__1852__auto____7004;
} else
{var h__1852__auto____7005 = cljs.core.hash_coll.call(null,coll);
this__7003.__hash = h__1852__auto____7005;
return h__1852__auto____7005;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7006 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7007 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7008 = this;
var this__7009 = this;
return cljs.core.pr_str.call(null,this__7009);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7010 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7011 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7012 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7013 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7014 = this;
return (new cljs.core.LazySeq(meta,this__7014.realized,this__7014.x,this__7014.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7015 = this;
return this__7015.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7016 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7016.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7017 = this;
return this__7017.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7018 = this;
var ___7019 = this;
(this__7018.buf[this__7018.end] = o);
return this__7018.end = (this__7018.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7020 = this;
var ___7021 = this;
var ret__7022 = (new cljs.core.ArrayChunk(this__7020.buf,0,this__7020.end));
this__7020.buf = null;
return ret__7022;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7023 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7023.arr[this__7023.off]),(this__7023.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7024 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7024.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7025 = this;
if((this__7025.off === this__7025.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7025.arr,(this__7025.off + 1),this__7025.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7026 = this;
return (this__7026.arr[(this__7026.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7027 = this;
if((function (){var and__3822__auto____7028 = (i >= 0);
if(and__3822__auto____7028)
{return (i < (this__7027.end - this__7027.off));
} else
{return and__3822__auto____7028;
}
})())
{return (this__7027.arr[(this__7027.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7029 = this;
return (this__7029.end - this__7029.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7030 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7031 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7032 = this;
return cljs.core._nth.call(null,this__7032.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7033 = this;
if((cljs.core._count.call(null,this__7033.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7033.chunk),this__7033.more,this__7033.meta));
} else
{if((this__7033.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7033.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7034 = this;
if((this__7034.more == null))
{return null;
} else
{return this__7034.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7035 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7036 = this;
return (new cljs.core.ChunkedCons(this__7036.chunk,this__7036.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7037 = this;
return this__7037.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7038 = this;
return this__7038.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7039 = this;
if((this__7039.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7039.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7043__7044 = s;
if(G__7043__7044)
{if(cljs.core.truth_((function (){var or__3824__auto____7045 = null;
if(cljs.core.truth_(or__3824__auto____7045))
{return or__3824__auto____7045;
} else
{return G__7043__7044.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7043__7044.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7043__7044);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7043__7044);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7048 = [];
var s__7049 = s;
while(true){
if(cljs.core.seq.call(null,s__7049))
{ary__7048.push(cljs.core.first.call(null,s__7049));
{
var G__7050 = cljs.core.next.call(null,s__7049);
s__7049 = G__7050;
continue;
}
} else
{return ary__7048;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7054 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7055 = 0;
var xs__7056 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7056)
{(ret__7054[i__7055] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7056)));
{
var G__7057 = (i__7055 + 1);
var G__7058 = cljs.core.next.call(null,xs__7056);
i__7055 = G__7057;
xs__7056 = G__7058;
continue;
}
} else
{}
break;
}
return ret__7054;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7066 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7067 = cljs.core.seq.call(null,init_val_or_seq);
var i__7068 = 0;
var s__7069 = s__7067;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7070 = s__7069;
if(and__3822__auto____7070)
{return (i__7068 < size);
} else
{return and__3822__auto____7070;
}
})()))
{(a__7066[i__7068] = cljs.core.first.call(null,s__7069));
{
var G__7073 = (i__7068 + 1);
var G__7074 = cljs.core.next.call(null,s__7069);
i__7068 = G__7073;
s__7069 = G__7074;
continue;
}
} else
{return a__7066;
}
break;
}
} else
{var n__2187__auto____7071 = size;
var i__7072 = 0;
while(true){
if((i__7072 < n__2187__auto____7071))
{(a__7066[i__7072] = init_val_or_seq);
{
var G__7075 = (i__7072 + 1);
i__7072 = G__7075;
continue;
}
} else
{}
break;
}
return a__7066;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7083 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7084 = cljs.core.seq.call(null,init_val_or_seq);
var i__7085 = 0;
var s__7086 = s__7084;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7087 = s__7086;
if(and__3822__auto____7087)
{return (i__7085 < size);
} else
{return and__3822__auto____7087;
}
})()))
{(a__7083[i__7085] = cljs.core.first.call(null,s__7086));
{
var G__7090 = (i__7085 + 1);
var G__7091 = cljs.core.next.call(null,s__7086);
i__7085 = G__7090;
s__7086 = G__7091;
continue;
}
} else
{return a__7083;
}
break;
}
} else
{var n__2187__auto____7088 = size;
var i__7089 = 0;
while(true){
if((i__7089 < n__2187__auto____7088))
{(a__7083[i__7089] = init_val_or_seq);
{
var G__7092 = (i__7089 + 1);
i__7089 = G__7092;
continue;
}
} else
{}
break;
}
return a__7083;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7100 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7101 = cljs.core.seq.call(null,init_val_or_seq);
var i__7102 = 0;
var s__7103 = s__7101;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7104 = s__7103;
if(and__3822__auto____7104)
{return (i__7102 < size);
} else
{return and__3822__auto____7104;
}
})()))
{(a__7100[i__7102] = cljs.core.first.call(null,s__7103));
{
var G__7107 = (i__7102 + 1);
var G__7108 = cljs.core.next.call(null,s__7103);
i__7102 = G__7107;
s__7103 = G__7108;
continue;
}
} else
{return a__7100;
}
break;
}
} else
{var n__2187__auto____7105 = size;
var i__7106 = 0;
while(true){
if((i__7106 < n__2187__auto____7105))
{(a__7100[i__7106] = init_val_or_seq);
{
var G__7109 = (i__7106 + 1);
i__7106 = G__7109;
continue;
}
} else
{}
break;
}
return a__7100;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7114 = s;
var i__7115 = n;
var sum__7116 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7117 = (i__7115 > 0);
if(and__3822__auto____7117)
{return cljs.core.seq.call(null,s__7114);
} else
{return and__3822__auto____7117;
}
})()))
{{
var G__7118 = cljs.core.next.call(null,s__7114);
var G__7119 = (i__7115 - 1);
var G__7120 = (sum__7116 + 1);
s__7114 = G__7118;
i__7115 = G__7119;
sum__7116 = G__7120;
continue;
}
} else
{return sum__7116;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7125 = cljs.core.seq.call(null,x);
if(s__7125)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7125))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7125),concat.call(null,cljs.core.chunk_rest.call(null,s__7125),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7125),concat.call(null,cljs.core.rest.call(null,s__7125),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7129__delegate = function (x,y,zs){
var cat__7128 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7127 = cljs.core.seq.call(null,xys);
if(xys__7127)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7127))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7127),cat.call(null,cljs.core.chunk_rest.call(null,xys__7127),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7127),cat.call(null,cljs.core.rest.call(null,xys__7127),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7128.call(null,concat.call(null,x,y),zs);
};
var G__7129 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7129__delegate.call(this, x, y, zs);
};
G__7129.cljs$lang$maxFixedArity = 2;
G__7129.cljs$lang$applyTo = (function (arglist__7130){
var x = cljs.core.first(arglist__7130);
var y = cljs.core.first(cljs.core.next(arglist__7130));
var zs = cljs.core.rest(cljs.core.next(arglist__7130));
return G__7129__delegate(x, y, zs);
});
G__7129.cljs$lang$arity$variadic = G__7129__delegate;
return G__7129;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7131__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7131 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7131__delegate.call(this, a, b, c, d, more);
};
G__7131.cljs$lang$maxFixedArity = 4;
G__7131.cljs$lang$applyTo = (function (arglist__7132){
var a = cljs.core.first(arglist__7132);
var b = cljs.core.first(cljs.core.next(arglist__7132));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7132)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7132))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7132))));
return G__7131__delegate(a, b, c, d, more);
});
G__7131.cljs$lang$arity$variadic = G__7131__delegate;
return G__7131;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7174 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7175 = cljs.core._first.call(null,args__7174);
var args__7176 = cljs.core._rest.call(null,args__7174);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7175);
} else
{return f.call(null,a__7175);
}
} else
{var b__7177 = cljs.core._first.call(null,args__7176);
var args__7178 = cljs.core._rest.call(null,args__7176);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7175,b__7177);
} else
{return f.call(null,a__7175,b__7177);
}
} else
{var c__7179 = cljs.core._first.call(null,args__7178);
var args__7180 = cljs.core._rest.call(null,args__7178);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7175,b__7177,c__7179);
} else
{return f.call(null,a__7175,b__7177,c__7179);
}
} else
{var d__7181 = cljs.core._first.call(null,args__7180);
var args__7182 = cljs.core._rest.call(null,args__7180);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7175,b__7177,c__7179,d__7181);
} else
{return f.call(null,a__7175,b__7177,c__7179,d__7181);
}
} else
{var e__7183 = cljs.core._first.call(null,args__7182);
var args__7184 = cljs.core._rest.call(null,args__7182);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7175,b__7177,c__7179,d__7181,e__7183);
} else
{return f.call(null,a__7175,b__7177,c__7179,d__7181,e__7183);
}
} else
{var f__7185 = cljs.core._first.call(null,args__7184);
var args__7186 = cljs.core._rest.call(null,args__7184);
if((argc === 6))
{if(f__7185.cljs$lang$arity$6)
{return f__7185.cljs$lang$arity$6(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185);
}
} else
{var g__7187 = cljs.core._first.call(null,args__7186);
var args__7188 = cljs.core._rest.call(null,args__7186);
if((argc === 7))
{if(f__7185.cljs$lang$arity$7)
{return f__7185.cljs$lang$arity$7(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187);
}
} else
{var h__7189 = cljs.core._first.call(null,args__7188);
var args__7190 = cljs.core._rest.call(null,args__7188);
if((argc === 8))
{if(f__7185.cljs$lang$arity$8)
{return f__7185.cljs$lang$arity$8(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189);
}
} else
{var i__7191 = cljs.core._first.call(null,args__7190);
var args__7192 = cljs.core._rest.call(null,args__7190);
if((argc === 9))
{if(f__7185.cljs$lang$arity$9)
{return f__7185.cljs$lang$arity$9(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191);
}
} else
{var j__7193 = cljs.core._first.call(null,args__7192);
var args__7194 = cljs.core._rest.call(null,args__7192);
if((argc === 10))
{if(f__7185.cljs$lang$arity$10)
{return f__7185.cljs$lang$arity$10(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193);
}
} else
{var k__7195 = cljs.core._first.call(null,args__7194);
var args__7196 = cljs.core._rest.call(null,args__7194);
if((argc === 11))
{if(f__7185.cljs$lang$arity$11)
{return f__7185.cljs$lang$arity$11(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195);
}
} else
{var l__7197 = cljs.core._first.call(null,args__7196);
var args__7198 = cljs.core._rest.call(null,args__7196);
if((argc === 12))
{if(f__7185.cljs$lang$arity$12)
{return f__7185.cljs$lang$arity$12(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197);
}
} else
{var m__7199 = cljs.core._first.call(null,args__7198);
var args__7200 = cljs.core._rest.call(null,args__7198);
if((argc === 13))
{if(f__7185.cljs$lang$arity$13)
{return f__7185.cljs$lang$arity$13(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199);
}
} else
{var n__7201 = cljs.core._first.call(null,args__7200);
var args__7202 = cljs.core._rest.call(null,args__7200);
if((argc === 14))
{if(f__7185.cljs$lang$arity$14)
{return f__7185.cljs$lang$arity$14(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201);
}
} else
{var o__7203 = cljs.core._first.call(null,args__7202);
var args__7204 = cljs.core._rest.call(null,args__7202);
if((argc === 15))
{if(f__7185.cljs$lang$arity$15)
{return f__7185.cljs$lang$arity$15(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203);
}
} else
{var p__7205 = cljs.core._first.call(null,args__7204);
var args__7206 = cljs.core._rest.call(null,args__7204);
if((argc === 16))
{if(f__7185.cljs$lang$arity$16)
{return f__7185.cljs$lang$arity$16(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205);
}
} else
{var q__7207 = cljs.core._first.call(null,args__7206);
var args__7208 = cljs.core._rest.call(null,args__7206);
if((argc === 17))
{if(f__7185.cljs$lang$arity$17)
{return f__7185.cljs$lang$arity$17(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205,q__7207);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205,q__7207);
}
} else
{var r__7209 = cljs.core._first.call(null,args__7208);
var args__7210 = cljs.core._rest.call(null,args__7208);
if((argc === 18))
{if(f__7185.cljs$lang$arity$18)
{return f__7185.cljs$lang$arity$18(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205,q__7207,r__7209);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205,q__7207,r__7209);
}
} else
{var s__7211 = cljs.core._first.call(null,args__7210);
var args__7212 = cljs.core._rest.call(null,args__7210);
if((argc === 19))
{if(f__7185.cljs$lang$arity$19)
{return f__7185.cljs$lang$arity$19(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205,q__7207,r__7209,s__7211);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205,q__7207,r__7209,s__7211);
}
} else
{var t__7213 = cljs.core._first.call(null,args__7212);
var args__7214 = cljs.core._rest.call(null,args__7212);
if((argc === 20))
{if(f__7185.cljs$lang$arity$20)
{return f__7185.cljs$lang$arity$20(a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205,q__7207,r__7209,s__7211,t__7213);
} else
{return f__7185.call(null,a__7175,b__7177,c__7179,d__7181,e__7183,f__7185,g__7187,h__7189,i__7191,j__7193,k__7195,l__7197,m__7199,n__7201,o__7203,p__7205,q__7207,r__7209,s__7211,t__7213);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7229 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7230 = cljs.core.bounded_count.call(null,args,(fixed_arity__7229 + 1));
if((bc__7230 <= fixed_arity__7229))
{return cljs.core.apply_to.call(null,f,bc__7230,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7231 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7232 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7233 = cljs.core.bounded_count.call(null,arglist__7231,(fixed_arity__7232 + 1));
if((bc__7233 <= fixed_arity__7232))
{return cljs.core.apply_to.call(null,f,bc__7233,arglist__7231);
} else
{return f.cljs$lang$applyTo(arglist__7231);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7231));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7234 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7235 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7236 = cljs.core.bounded_count.call(null,arglist__7234,(fixed_arity__7235 + 1));
if((bc__7236 <= fixed_arity__7235))
{return cljs.core.apply_to.call(null,f,bc__7236,arglist__7234);
} else
{return f.cljs$lang$applyTo(arglist__7234);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7234));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7237 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7238 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7239 = cljs.core.bounded_count.call(null,arglist__7237,(fixed_arity__7238 + 1));
if((bc__7239 <= fixed_arity__7238))
{return cljs.core.apply_to.call(null,f,bc__7239,arglist__7237);
} else
{return f.cljs$lang$applyTo(arglist__7237);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7237));
}
});
var apply__6 = (function() { 
var G__7243__delegate = function (f,a,b,c,d,args){
var arglist__7240 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7241 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7242 = cljs.core.bounded_count.call(null,arglist__7240,(fixed_arity__7241 + 1));
if((bc__7242 <= fixed_arity__7241))
{return cljs.core.apply_to.call(null,f,bc__7242,arglist__7240);
} else
{return f.cljs$lang$applyTo(arglist__7240);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7240));
}
};
var G__7243 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7243__delegate.call(this, f, a, b, c, d, args);
};
G__7243.cljs$lang$maxFixedArity = 5;
G__7243.cljs$lang$applyTo = (function (arglist__7244){
var f = cljs.core.first(arglist__7244);
var a = cljs.core.first(cljs.core.next(arglist__7244));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7244)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7244))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7244)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7244)))));
return G__7243__delegate(f, a, b, c, d, args);
});
G__7243.cljs$lang$arity$variadic = G__7243__delegate;
return G__7243;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7245){
var obj = cljs.core.first(arglist__7245);
var f = cljs.core.first(cljs.core.next(arglist__7245));
var args = cljs.core.rest(cljs.core.next(arglist__7245));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7246__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7246 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7246__delegate.call(this, x, y, more);
};
G__7246.cljs$lang$maxFixedArity = 2;
G__7246.cljs$lang$applyTo = (function (arglist__7247){
var x = cljs.core.first(arglist__7247);
var y = cljs.core.first(cljs.core.next(arglist__7247));
var more = cljs.core.rest(cljs.core.next(arglist__7247));
return G__7246__delegate(x, y, more);
});
G__7246.cljs$lang$arity$variadic = G__7246__delegate;
return G__7246;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7248 = pred;
var G__7249 = cljs.core.next.call(null,coll);
pred = G__7248;
coll = G__7249;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7251 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7251))
{return or__3824__auto____7251;
} else
{{
var G__7252 = pred;
var G__7253 = cljs.core.next.call(null,coll);
pred = G__7252;
coll = G__7253;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7254 = null;
var G__7254__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7254__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7254__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7254__3 = (function() { 
var G__7255__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7255 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7255__delegate.call(this, x, y, zs);
};
G__7255.cljs$lang$maxFixedArity = 2;
G__7255.cljs$lang$applyTo = (function (arglist__7256){
var x = cljs.core.first(arglist__7256);
var y = cljs.core.first(cljs.core.next(arglist__7256));
var zs = cljs.core.rest(cljs.core.next(arglist__7256));
return G__7255__delegate(x, y, zs);
});
G__7255.cljs$lang$arity$variadic = G__7255__delegate;
return G__7255;
})()
;
G__7254 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7254__0.call(this);
case 1:
return G__7254__1.call(this,x);
case 2:
return G__7254__2.call(this,x,y);
default:
return G__7254__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7254.cljs$lang$maxFixedArity = 2;
G__7254.cljs$lang$applyTo = G__7254__3.cljs$lang$applyTo;
return G__7254;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7257__delegate = function (args){
return x;
};
var G__7257 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7257__delegate.call(this, args);
};
G__7257.cljs$lang$maxFixedArity = 0;
G__7257.cljs$lang$applyTo = (function (arglist__7258){
var args = cljs.core.seq(arglist__7258);;
return G__7257__delegate(args);
});
G__7257.cljs$lang$arity$variadic = G__7257__delegate;
return G__7257;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7265 = null;
var G__7265__0 = (function (){
return f.call(null,g.call(null));
});
var G__7265__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7265__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7265__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7265__4 = (function() { 
var G__7266__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7266 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7266__delegate.call(this, x, y, z, args);
};
G__7266.cljs$lang$maxFixedArity = 3;
G__7266.cljs$lang$applyTo = (function (arglist__7267){
var x = cljs.core.first(arglist__7267);
var y = cljs.core.first(cljs.core.next(arglist__7267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7267)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7267)));
return G__7266__delegate(x, y, z, args);
});
G__7266.cljs$lang$arity$variadic = G__7266__delegate;
return G__7266;
})()
;
G__7265 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7265__0.call(this);
case 1:
return G__7265__1.call(this,x);
case 2:
return G__7265__2.call(this,x,y);
case 3:
return G__7265__3.call(this,x,y,z);
default:
return G__7265__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7265.cljs$lang$maxFixedArity = 3;
G__7265.cljs$lang$applyTo = G__7265__4.cljs$lang$applyTo;
return G__7265;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7268 = null;
var G__7268__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7268__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7268__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7268__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7268__4 = (function() { 
var G__7269__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7269 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7269__delegate.call(this, x, y, z, args);
};
G__7269.cljs$lang$maxFixedArity = 3;
G__7269.cljs$lang$applyTo = (function (arglist__7270){
var x = cljs.core.first(arglist__7270);
var y = cljs.core.first(cljs.core.next(arglist__7270));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7270)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7270)));
return G__7269__delegate(x, y, z, args);
});
G__7269.cljs$lang$arity$variadic = G__7269__delegate;
return G__7269;
})()
;
G__7268 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7268__0.call(this);
case 1:
return G__7268__1.call(this,x);
case 2:
return G__7268__2.call(this,x,y);
case 3:
return G__7268__3.call(this,x,y,z);
default:
return G__7268__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7268.cljs$lang$maxFixedArity = 3;
G__7268.cljs$lang$applyTo = G__7268__4.cljs$lang$applyTo;
return G__7268;
})()
});
var comp__4 = (function() { 
var G__7271__delegate = function (f1,f2,f3,fs){
var fs__7262 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7272__delegate = function (args){
var ret__7263 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7262),args);
var fs__7264 = cljs.core.next.call(null,fs__7262);
while(true){
if(fs__7264)
{{
var G__7273 = cljs.core.first.call(null,fs__7264).call(null,ret__7263);
var G__7274 = cljs.core.next.call(null,fs__7264);
ret__7263 = G__7273;
fs__7264 = G__7274;
continue;
}
} else
{return ret__7263;
}
break;
}
};
var G__7272 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7272__delegate.call(this, args);
};
G__7272.cljs$lang$maxFixedArity = 0;
G__7272.cljs$lang$applyTo = (function (arglist__7275){
var args = cljs.core.seq(arglist__7275);;
return G__7272__delegate(args);
});
G__7272.cljs$lang$arity$variadic = G__7272__delegate;
return G__7272;
})()
;
};
var G__7271 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7271__delegate.call(this, f1, f2, f3, fs);
};
G__7271.cljs$lang$maxFixedArity = 3;
G__7271.cljs$lang$applyTo = (function (arglist__7276){
var f1 = cljs.core.first(arglist__7276);
var f2 = cljs.core.first(cljs.core.next(arglist__7276));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7276)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7276)));
return G__7271__delegate(f1, f2, f3, fs);
});
G__7271.cljs$lang$arity$variadic = G__7271__delegate;
return G__7271;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7277__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7277 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7277__delegate.call(this, args);
};
G__7277.cljs$lang$maxFixedArity = 0;
G__7277.cljs$lang$applyTo = (function (arglist__7278){
var args = cljs.core.seq(arglist__7278);;
return G__7277__delegate(args);
});
G__7277.cljs$lang$arity$variadic = G__7277__delegate;
return G__7277;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7279__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7279 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7279__delegate.call(this, args);
};
G__7279.cljs$lang$maxFixedArity = 0;
G__7279.cljs$lang$applyTo = (function (arglist__7280){
var args = cljs.core.seq(arglist__7280);;
return G__7279__delegate(args);
});
G__7279.cljs$lang$arity$variadic = G__7279__delegate;
return G__7279;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7281__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7281 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7281__delegate.call(this, args);
};
G__7281.cljs$lang$maxFixedArity = 0;
G__7281.cljs$lang$applyTo = (function (arglist__7282){
var args = cljs.core.seq(arglist__7282);;
return G__7281__delegate(args);
});
G__7281.cljs$lang$arity$variadic = G__7281__delegate;
return G__7281;
})()
;
});
var partial__5 = (function() { 
var G__7283__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7284__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7284 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7284__delegate.call(this, args);
};
G__7284.cljs$lang$maxFixedArity = 0;
G__7284.cljs$lang$applyTo = (function (arglist__7285){
var args = cljs.core.seq(arglist__7285);;
return G__7284__delegate(args);
});
G__7284.cljs$lang$arity$variadic = G__7284__delegate;
return G__7284;
})()
;
};
var G__7283 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7283__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7283.cljs$lang$maxFixedArity = 4;
G__7283.cljs$lang$applyTo = (function (arglist__7286){
var f = cljs.core.first(arglist__7286);
var arg1 = cljs.core.first(cljs.core.next(arglist__7286));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7286)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7286))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7286))));
return G__7283__delegate(f, arg1, arg2, arg3, more);
});
G__7283.cljs$lang$arity$variadic = G__7283__delegate;
return G__7283;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7287 = null;
var G__7287__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7287__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7287__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7287__4 = (function() { 
var G__7288__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7288 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7288__delegate.call(this, a, b, c, ds);
};
G__7288.cljs$lang$maxFixedArity = 3;
G__7288.cljs$lang$applyTo = (function (arglist__7289){
var a = cljs.core.first(arglist__7289);
var b = cljs.core.first(cljs.core.next(arglist__7289));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7289)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7289)));
return G__7288__delegate(a, b, c, ds);
});
G__7288.cljs$lang$arity$variadic = G__7288__delegate;
return G__7288;
})()
;
G__7287 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7287__1.call(this,a);
case 2:
return G__7287__2.call(this,a,b);
case 3:
return G__7287__3.call(this,a,b,c);
default:
return G__7287__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7287.cljs$lang$maxFixedArity = 3;
G__7287.cljs$lang$applyTo = G__7287__4.cljs$lang$applyTo;
return G__7287;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7290 = null;
var G__7290__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7290__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7290__4 = (function() { 
var G__7291__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7291 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7291__delegate.call(this, a, b, c, ds);
};
G__7291.cljs$lang$maxFixedArity = 3;
G__7291.cljs$lang$applyTo = (function (arglist__7292){
var a = cljs.core.first(arglist__7292);
var b = cljs.core.first(cljs.core.next(arglist__7292));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7292)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7292)));
return G__7291__delegate(a, b, c, ds);
});
G__7291.cljs$lang$arity$variadic = G__7291__delegate;
return G__7291;
})()
;
G__7290 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7290__2.call(this,a,b);
case 3:
return G__7290__3.call(this,a,b,c);
default:
return G__7290__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7290.cljs$lang$maxFixedArity = 3;
G__7290.cljs$lang$applyTo = G__7290__4.cljs$lang$applyTo;
return G__7290;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7293 = null;
var G__7293__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7293__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7293__4 = (function() { 
var G__7294__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7294 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7294__delegate.call(this, a, b, c, ds);
};
G__7294.cljs$lang$maxFixedArity = 3;
G__7294.cljs$lang$applyTo = (function (arglist__7295){
var a = cljs.core.first(arglist__7295);
var b = cljs.core.first(cljs.core.next(arglist__7295));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7295)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7295)));
return G__7294__delegate(a, b, c, ds);
});
G__7294.cljs$lang$arity$variadic = G__7294__delegate;
return G__7294;
})()
;
G__7293 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7293__2.call(this,a,b);
case 3:
return G__7293__3.call(this,a,b,c);
default:
return G__7293__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7293.cljs$lang$maxFixedArity = 3;
G__7293.cljs$lang$applyTo = G__7293__4.cljs$lang$applyTo;
return G__7293;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7311 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7319 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7319)
{var s__7320 = temp__3974__auto____7319;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7320))
{var c__7321 = cljs.core.chunk_first.call(null,s__7320);
var size__7322 = cljs.core.count.call(null,c__7321);
var b__7323 = cljs.core.chunk_buffer.call(null,size__7322);
var n__2187__auto____7324 = size__7322;
var i__7325 = 0;
while(true){
if((i__7325 < n__2187__auto____7324))
{cljs.core.chunk_append.call(null,b__7323,f.call(null,(idx + i__7325),cljs.core._nth.call(null,c__7321,i__7325)));
{
var G__7326 = (i__7325 + 1);
i__7325 = G__7326;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7323),mapi.call(null,(idx + size__7322),cljs.core.chunk_rest.call(null,s__7320)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7320)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7320)));
}
} else
{return null;
}
}),null));
});
return mapi__7311.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7336 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7336)
{var s__7337 = temp__3974__auto____7336;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7337))
{var c__7338 = cljs.core.chunk_first.call(null,s__7337);
var size__7339 = cljs.core.count.call(null,c__7338);
var b__7340 = cljs.core.chunk_buffer.call(null,size__7339);
var n__2187__auto____7341 = size__7339;
var i__7342 = 0;
while(true){
if((i__7342 < n__2187__auto____7341))
{var x__7343 = f.call(null,cljs.core._nth.call(null,c__7338,i__7342));
if((x__7343 == null))
{} else
{cljs.core.chunk_append.call(null,b__7340,x__7343);
}
{
var G__7345 = (i__7342 + 1);
i__7342 = G__7345;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7340),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7337)));
} else
{var x__7344 = f.call(null,cljs.core.first.call(null,s__7337));
if((x__7344 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7337));
} else
{return cljs.core.cons.call(null,x__7344,keep.call(null,f,cljs.core.rest.call(null,s__7337)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7371 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7381 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7381)
{var s__7382 = temp__3974__auto____7381;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7382))
{var c__7383 = cljs.core.chunk_first.call(null,s__7382);
var size__7384 = cljs.core.count.call(null,c__7383);
var b__7385 = cljs.core.chunk_buffer.call(null,size__7384);
var n__2187__auto____7386 = size__7384;
var i__7387 = 0;
while(true){
if((i__7387 < n__2187__auto____7386))
{var x__7388 = f.call(null,(idx + i__7387),cljs.core._nth.call(null,c__7383,i__7387));
if((x__7388 == null))
{} else
{cljs.core.chunk_append.call(null,b__7385,x__7388);
}
{
var G__7390 = (i__7387 + 1);
i__7387 = G__7390;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7385),keepi.call(null,(idx + size__7384),cljs.core.chunk_rest.call(null,s__7382)));
} else
{var x__7389 = f.call(null,idx,cljs.core.first.call(null,s__7382));
if((x__7389 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7382));
} else
{return cljs.core.cons.call(null,x__7389,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7382)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7371.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7476 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7476))
{return p.call(null,y);
} else
{return and__3822__auto____7476;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7477 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7477))
{var and__3822__auto____7478 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7478))
{return p.call(null,z);
} else
{return and__3822__auto____7478;
}
} else
{return and__3822__auto____7477;
}
})());
});
var ep1__4 = (function() { 
var G__7547__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7479 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7479))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7479;
}
})());
};
var G__7547 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7547__delegate.call(this, x, y, z, args);
};
G__7547.cljs$lang$maxFixedArity = 3;
G__7547.cljs$lang$applyTo = (function (arglist__7548){
var x = cljs.core.first(arglist__7548);
var y = cljs.core.first(cljs.core.next(arglist__7548));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7548)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7548)));
return G__7547__delegate(x, y, z, args);
});
G__7547.cljs$lang$arity$variadic = G__7547__delegate;
return G__7547;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7491 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7491))
{return p2.call(null,x);
} else
{return and__3822__auto____7491;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7492 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7492))
{var and__3822__auto____7493 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7493))
{var and__3822__auto____7494 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7494))
{return p2.call(null,y);
} else
{return and__3822__auto____7494;
}
} else
{return and__3822__auto____7493;
}
} else
{return and__3822__auto____7492;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7495 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7495))
{var and__3822__auto____7496 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7496))
{var and__3822__auto____7497 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7497))
{var and__3822__auto____7498 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7498))
{var and__3822__auto____7499 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7499))
{return p2.call(null,z);
} else
{return and__3822__auto____7499;
}
} else
{return and__3822__auto____7498;
}
} else
{return and__3822__auto____7497;
}
} else
{return and__3822__auto____7496;
}
} else
{return and__3822__auto____7495;
}
})());
});
var ep2__4 = (function() { 
var G__7549__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7500 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7500))
{return cljs.core.every_QMARK_.call(null,(function (p1__7346_SHARP_){
var and__3822__auto____7501 = p1.call(null,p1__7346_SHARP_);
if(cljs.core.truth_(and__3822__auto____7501))
{return p2.call(null,p1__7346_SHARP_);
} else
{return and__3822__auto____7501;
}
}),args);
} else
{return and__3822__auto____7500;
}
})());
};
var G__7549 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7549__delegate.call(this, x, y, z, args);
};
G__7549.cljs$lang$maxFixedArity = 3;
G__7549.cljs$lang$applyTo = (function (arglist__7550){
var x = cljs.core.first(arglist__7550);
var y = cljs.core.first(cljs.core.next(arglist__7550));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7550)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7550)));
return G__7549__delegate(x, y, z, args);
});
G__7549.cljs$lang$arity$variadic = G__7549__delegate;
return G__7549;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7520 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7520))
{var and__3822__auto____7521 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7521))
{return p3.call(null,x);
} else
{return and__3822__auto____7521;
}
} else
{return and__3822__auto____7520;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7522 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7522))
{var and__3822__auto____7523 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7523))
{var and__3822__auto____7524 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7524))
{var and__3822__auto____7525 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7525))
{var and__3822__auto____7526 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7526))
{return p3.call(null,y);
} else
{return and__3822__auto____7526;
}
} else
{return and__3822__auto____7525;
}
} else
{return and__3822__auto____7524;
}
} else
{return and__3822__auto____7523;
}
} else
{return and__3822__auto____7522;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7527 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7527))
{var and__3822__auto____7528 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7528))
{var and__3822__auto____7529 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7529))
{var and__3822__auto____7530 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7530))
{var and__3822__auto____7531 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7531))
{var and__3822__auto____7532 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7532))
{var and__3822__auto____7533 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7533))
{var and__3822__auto____7534 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7534))
{return p3.call(null,z);
} else
{return and__3822__auto____7534;
}
} else
{return and__3822__auto____7533;
}
} else
{return and__3822__auto____7532;
}
} else
{return and__3822__auto____7531;
}
} else
{return and__3822__auto____7530;
}
} else
{return and__3822__auto____7529;
}
} else
{return and__3822__auto____7528;
}
} else
{return and__3822__auto____7527;
}
})());
});
var ep3__4 = (function() { 
var G__7551__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7535 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7535))
{return cljs.core.every_QMARK_.call(null,(function (p1__7347_SHARP_){
var and__3822__auto____7536 = p1.call(null,p1__7347_SHARP_);
if(cljs.core.truth_(and__3822__auto____7536))
{var and__3822__auto____7537 = p2.call(null,p1__7347_SHARP_);
if(cljs.core.truth_(and__3822__auto____7537))
{return p3.call(null,p1__7347_SHARP_);
} else
{return and__3822__auto____7537;
}
} else
{return and__3822__auto____7536;
}
}),args);
} else
{return and__3822__auto____7535;
}
})());
};
var G__7551 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7551__delegate.call(this, x, y, z, args);
};
G__7551.cljs$lang$maxFixedArity = 3;
G__7551.cljs$lang$applyTo = (function (arglist__7552){
var x = cljs.core.first(arglist__7552);
var y = cljs.core.first(cljs.core.next(arglist__7552));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7552)));
return G__7551__delegate(x, y, z, args);
});
G__7551.cljs$lang$arity$variadic = G__7551__delegate;
return G__7551;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7553__delegate = function (p1,p2,p3,ps){
var ps__7538 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7348_SHARP_){
return p1__7348_SHARP_.call(null,x);
}),ps__7538);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7349_SHARP_){
var and__3822__auto____7543 = p1__7349_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7543))
{return p1__7349_SHARP_.call(null,y);
} else
{return and__3822__auto____7543;
}
}),ps__7538);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7350_SHARP_){
var and__3822__auto____7544 = p1__7350_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7544))
{var and__3822__auto____7545 = p1__7350_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7545))
{return p1__7350_SHARP_.call(null,z);
} else
{return and__3822__auto____7545;
}
} else
{return and__3822__auto____7544;
}
}),ps__7538);
});
var epn__4 = (function() { 
var G__7554__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7546 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7546))
{return cljs.core.every_QMARK_.call(null,(function (p1__7351_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7351_SHARP_,args);
}),ps__7538);
} else
{return and__3822__auto____7546;
}
})());
};
var G__7554 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7554__delegate.call(this, x, y, z, args);
};
G__7554.cljs$lang$maxFixedArity = 3;
G__7554.cljs$lang$applyTo = (function (arglist__7555){
var x = cljs.core.first(arglist__7555);
var y = cljs.core.first(cljs.core.next(arglist__7555));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7555)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7555)));
return G__7554__delegate(x, y, z, args);
});
G__7554.cljs$lang$arity$variadic = G__7554__delegate;
return G__7554;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7553 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7553__delegate.call(this, p1, p2, p3, ps);
};
G__7553.cljs$lang$maxFixedArity = 3;
G__7553.cljs$lang$applyTo = (function (arglist__7556){
var p1 = cljs.core.first(arglist__7556);
var p2 = cljs.core.first(cljs.core.next(arglist__7556));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7556)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7556)));
return G__7553__delegate(p1, p2, p3, ps);
});
G__7553.cljs$lang$arity$variadic = G__7553__delegate;
return G__7553;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____7637 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7637))
{return or__3824__auto____7637;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7638 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7638))
{return or__3824__auto____7638;
} else
{var or__3824__auto____7639 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7639))
{return or__3824__auto____7639;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7708__delegate = function (x,y,z,args){
var or__3824__auto____7640 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7640))
{return or__3824__auto____7640;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7708__delegate.call(this, x, y, z, args);
};
G__7708.cljs$lang$maxFixedArity = 3;
G__7708.cljs$lang$applyTo = (function (arglist__7709){
var x = cljs.core.first(arglist__7709);
var y = cljs.core.first(cljs.core.next(arglist__7709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7709)));
return G__7708__delegate(x, y, z, args);
});
G__7708.cljs$lang$arity$variadic = G__7708__delegate;
return G__7708;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____7652 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7652))
{return or__3824__auto____7652;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7653 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7653))
{return or__3824__auto____7653;
} else
{var or__3824__auto____7654 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7654))
{return or__3824__auto____7654;
} else
{var or__3824__auto____7655 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7655))
{return or__3824__auto____7655;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7656 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7656))
{return or__3824__auto____7656;
} else
{var or__3824__auto____7657 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7657))
{return or__3824__auto____7657;
} else
{var or__3824__auto____7658 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7658))
{return or__3824__auto____7658;
} else
{var or__3824__auto____7659 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7659))
{return or__3824__auto____7659;
} else
{var or__3824__auto____7660 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7660))
{return or__3824__auto____7660;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7710__delegate = function (x,y,z,args){
var or__3824__auto____7661 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7661))
{return or__3824__auto____7661;
} else
{return cljs.core.some.call(null,(function (p1__7391_SHARP_){
var or__3824__auto____7662 = p1.call(null,p1__7391_SHARP_);
if(cljs.core.truth_(or__3824__auto____7662))
{return or__3824__auto____7662;
} else
{return p2.call(null,p1__7391_SHARP_);
}
}),args);
}
};
var G__7710 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7710__delegate.call(this, x, y, z, args);
};
G__7710.cljs$lang$maxFixedArity = 3;
G__7710.cljs$lang$applyTo = (function (arglist__7711){
var x = cljs.core.first(arglist__7711);
var y = cljs.core.first(cljs.core.next(arglist__7711));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7711)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7711)));
return G__7710__delegate(x, y, z, args);
});
G__7710.cljs$lang$arity$variadic = G__7710__delegate;
return G__7710;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____7681 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7681))
{return or__3824__auto____7681;
} else
{var or__3824__auto____7682 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7682))
{return or__3824__auto____7682;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7683 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7683))
{return or__3824__auto____7683;
} else
{var or__3824__auto____7684 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7684))
{return or__3824__auto____7684;
} else
{var or__3824__auto____7685 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7685))
{return or__3824__auto____7685;
} else
{var or__3824__auto____7686 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7686))
{return or__3824__auto____7686;
} else
{var or__3824__auto____7687 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7687))
{return or__3824__auto____7687;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7688 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7688))
{return or__3824__auto____7688;
} else
{var or__3824__auto____7689 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7689))
{return or__3824__auto____7689;
} else
{var or__3824__auto____7690 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7690))
{return or__3824__auto____7690;
} else
{var or__3824__auto____7691 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7691))
{return or__3824__auto____7691;
} else
{var or__3824__auto____7692 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7692))
{return or__3824__auto____7692;
} else
{var or__3824__auto____7693 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7693))
{return or__3824__auto____7693;
} else
{var or__3824__auto____7694 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7694))
{return or__3824__auto____7694;
} else
{var or__3824__auto____7695 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7695))
{return or__3824__auto____7695;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__7712__delegate = function (x,y,z,args){
var or__3824__auto____7696 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7696))
{return or__3824__auto____7696;
} else
{return cljs.core.some.call(null,(function (p1__7392_SHARP_){
var or__3824__auto____7697 = p1.call(null,p1__7392_SHARP_);
if(cljs.core.truth_(or__3824__auto____7697))
{return or__3824__auto____7697;
} else
{var or__3824__auto____7698 = p2.call(null,p1__7392_SHARP_);
if(cljs.core.truth_(or__3824__auto____7698))
{return or__3824__auto____7698;
} else
{return p3.call(null,p1__7392_SHARP_);
}
}
}),args);
}
};
var G__7712 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7712__delegate.call(this, x, y, z, args);
};
G__7712.cljs$lang$maxFixedArity = 3;
G__7712.cljs$lang$applyTo = (function (arglist__7713){
var x = cljs.core.first(arglist__7713);
var y = cljs.core.first(cljs.core.next(arglist__7713));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7713)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7713)));
return G__7712__delegate(x, y, z, args);
});
G__7712.cljs$lang$arity$variadic = G__7712__delegate;
return G__7712;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__7714__delegate = function (p1,p2,p3,ps){
var ps__7699 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7393_SHARP_){
return p1__7393_SHARP_.call(null,x);
}),ps__7699);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7394_SHARP_){
var or__3824__auto____7704 = p1__7394_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7704))
{return or__3824__auto____7704;
} else
{return p1__7394_SHARP_.call(null,y);
}
}),ps__7699);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7395_SHARP_){
var or__3824__auto____7705 = p1__7395_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7705))
{return or__3824__auto____7705;
} else
{var or__3824__auto____7706 = p1__7395_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7706))
{return or__3824__auto____7706;
} else
{return p1__7395_SHARP_.call(null,z);
}
}
}),ps__7699);
});
var spn__4 = (function() { 
var G__7715__delegate = function (x,y,z,args){
var or__3824__auto____7707 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7707))
{return or__3824__auto____7707;
} else
{return cljs.core.some.call(null,(function (p1__7396_SHARP_){
return cljs.core.some.call(null,p1__7396_SHARP_,args);
}),ps__7699);
}
};
var G__7715 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7715__delegate.call(this, x, y, z, args);
};
G__7715.cljs$lang$maxFixedArity = 3;
G__7715.cljs$lang$applyTo = (function (arglist__7716){
var x = cljs.core.first(arglist__7716);
var y = cljs.core.first(cljs.core.next(arglist__7716));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7716)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7716)));
return G__7715__delegate(x, y, z, args);
});
G__7715.cljs$lang$arity$variadic = G__7715__delegate;
return G__7715;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__7714 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7714__delegate.call(this, p1, p2, p3, ps);
};
G__7714.cljs$lang$maxFixedArity = 3;
G__7714.cljs$lang$applyTo = (function (arglist__7717){
var p1 = cljs.core.first(arglist__7717);
var p2 = cljs.core.first(cljs.core.next(arglist__7717));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7717)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7717)));
return G__7714__delegate(p1, p2, p3, ps);
});
G__7714.cljs$lang$arity$variadic = G__7714__delegate;
return G__7714;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7736 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7736)
{var s__7737 = temp__3974__auto____7736;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7737))
{var c__7738 = cljs.core.chunk_first.call(null,s__7737);
var size__7739 = cljs.core.count.call(null,c__7738);
var b__7740 = cljs.core.chunk_buffer.call(null,size__7739);
var n__2187__auto____7741 = size__7739;
var i__7742 = 0;
while(true){
if((i__7742 < n__2187__auto____7741))
{cljs.core.chunk_append.call(null,b__7740,f.call(null,cljs.core._nth.call(null,c__7738,i__7742)));
{
var G__7754 = (i__7742 + 1);
i__7742 = G__7754;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7740),map.call(null,f,cljs.core.chunk_rest.call(null,s__7737)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7737)),map.call(null,f,cljs.core.rest.call(null,s__7737)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7743 = cljs.core.seq.call(null,c1);
var s2__7744 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7745 = s1__7743;
if(and__3822__auto____7745)
{return s2__7744;
} else
{return and__3822__auto____7745;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7743),cljs.core.first.call(null,s2__7744)),map.call(null,f,cljs.core.rest.call(null,s1__7743),cljs.core.rest.call(null,s2__7744)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7746 = cljs.core.seq.call(null,c1);
var s2__7747 = cljs.core.seq.call(null,c2);
var s3__7748 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____7749 = s1__7746;
if(and__3822__auto____7749)
{var and__3822__auto____7750 = s2__7747;
if(and__3822__auto____7750)
{return s3__7748;
} else
{return and__3822__auto____7750;
}
} else
{return and__3822__auto____7749;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7746),cljs.core.first.call(null,s2__7747),cljs.core.first.call(null,s3__7748)),map.call(null,f,cljs.core.rest.call(null,s1__7746),cljs.core.rest.call(null,s2__7747),cljs.core.rest.call(null,s3__7748)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__7755__delegate = function (f,c1,c2,c3,colls){
var step__7753 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7752 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7752))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7752),step.call(null,map.call(null,cljs.core.rest,ss__7752)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7557_SHARP_){
return cljs.core.apply.call(null,f,p1__7557_SHARP_);
}),step__7753.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7755 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7755__delegate.call(this, f, c1, c2, c3, colls);
};
G__7755.cljs$lang$maxFixedArity = 4;
G__7755.cljs$lang$applyTo = (function (arglist__7756){
var f = cljs.core.first(arglist__7756);
var c1 = cljs.core.first(cljs.core.next(arglist__7756));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7756)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7756))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7756))));
return G__7755__delegate(f, c1, c2, c3, colls);
});
G__7755.cljs$lang$arity$variadic = G__7755__delegate;
return G__7755;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____7759 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7759)
{var s__7760 = temp__3974__auto____7759;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7760),take.call(null,(n - 1),cljs.core.rest.call(null,s__7760)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7766 = (function (n,coll){
while(true){
var s__7764 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7765 = (n > 0);
if(and__3822__auto____7765)
{return s__7764;
} else
{return and__3822__auto____7765;
}
})()))
{{
var G__7767 = (n - 1);
var G__7768 = cljs.core.rest.call(null,s__7764);
n = G__7767;
coll = G__7768;
continue;
}
} else
{return s__7764;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7766.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7771 = cljs.core.seq.call(null,coll);
var lead__7772 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__7772)
{{
var G__7773 = cljs.core.next.call(null,s__7771);
var G__7774 = cljs.core.next.call(null,lead__7772);
s__7771 = G__7773;
lead__7772 = G__7774;
continue;
}
} else
{return s__7771;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7780 = (function (pred,coll){
while(true){
var s__7778 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7779 = s__7778;
if(and__3822__auto____7779)
{return pred.call(null,cljs.core.first.call(null,s__7778));
} else
{return and__3822__auto____7779;
}
})()))
{{
var G__7781 = pred;
var G__7782 = cljs.core.rest.call(null,s__7778);
pred = G__7781;
coll = G__7782;
continue;
}
} else
{return s__7778;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7780.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7785 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7785)
{var s__7786 = temp__3974__auto____7785;
return cljs.core.concat.call(null,s__7786,cycle.call(null,s__7786));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7791 = cljs.core.seq.call(null,c1);
var s2__7792 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7793 = s1__7791;
if(and__3822__auto____7793)
{return s2__7792;
} else
{return and__3822__auto____7793;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7791),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7792),interleave.call(null,cljs.core.rest.call(null,s1__7791),cljs.core.rest.call(null,s2__7792))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__7795__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7794 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7794))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7794),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7794)));
} else
{return null;
}
}),null));
};
var G__7795 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7795__delegate.call(this, c1, c2, colls);
};
G__7795.cljs$lang$maxFixedArity = 2;
G__7795.cljs$lang$applyTo = (function (arglist__7796){
var c1 = cljs.core.first(arglist__7796);
var c2 = cljs.core.first(cljs.core.next(arglist__7796));
var colls = cljs.core.rest(cljs.core.next(arglist__7796));
return G__7795__delegate(c1, c2, colls);
});
G__7795.cljs$lang$arity$variadic = G__7795__delegate;
return G__7795;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7806 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7804 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7804)
{var coll__7805 = temp__3971__auto____7804;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7805),cat.call(null,cljs.core.rest.call(null,coll__7805),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__7806.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__7807__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7807 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7807__delegate.call(this, f, coll, colls);
};
G__7807.cljs$lang$maxFixedArity = 2;
G__7807.cljs$lang$applyTo = (function (arglist__7808){
var f = cljs.core.first(arglist__7808);
var coll = cljs.core.first(cljs.core.next(arglist__7808));
var colls = cljs.core.rest(cljs.core.next(arglist__7808));
return G__7807__delegate(f, coll, colls);
});
G__7807.cljs$lang$arity$variadic = G__7807__delegate;
return G__7807;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7818 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7818)
{var s__7819 = temp__3974__auto____7818;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7819))
{var c__7820 = cljs.core.chunk_first.call(null,s__7819);
var size__7821 = cljs.core.count.call(null,c__7820);
var b__7822 = cljs.core.chunk_buffer.call(null,size__7821);
var n__2187__auto____7823 = size__7821;
var i__7824 = 0;
while(true){
if((i__7824 < n__2187__auto____7823))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__7820,i__7824))))
{cljs.core.chunk_append.call(null,b__7822,cljs.core._nth.call(null,c__7820,i__7824));
} else
{}
{
var G__7827 = (i__7824 + 1);
i__7824 = G__7827;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7822),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__7819)));
} else
{var f__7825 = cljs.core.first.call(null,s__7819);
var r__7826 = cljs.core.rest.call(null,s__7819);
if(cljs.core.truth_(pred.call(null,f__7825)))
{return cljs.core.cons.call(null,f__7825,filter.call(null,pred,r__7826));
} else
{return filter.call(null,pred,r__7826);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7830 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__7830.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7828_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__7828_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7834__7835 = to;
if(G__7834__7835)
{if((function (){var or__3824__auto____7836 = (G__7834__7835.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____7836)
{return or__3824__auto____7836;
} else
{return G__7834__7835.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7834__7835.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7834__7835);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7834__7835);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__7837__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7837 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7837__delegate.call(this, f, c1, c2, c3, colls);
};
G__7837.cljs$lang$maxFixedArity = 4;
G__7837.cljs$lang$applyTo = (function (arglist__7838){
var f = cljs.core.first(arglist__7838);
var c1 = cljs.core.first(cljs.core.next(arglist__7838));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7838)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7838))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7838))));
return G__7837__delegate(f, c1, c2, c3, colls);
});
G__7837.cljs$lang$arity$variadic = G__7837__delegate;
return G__7837;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7845 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7845)
{var s__7846 = temp__3974__auto____7845;
var p__7847 = cljs.core.take.call(null,n,s__7846);
if((n === cljs.core.count.call(null,p__7847)))
{return cljs.core.cons.call(null,p__7847,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7846)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7848 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7848)
{var s__7849 = temp__3974__auto____7848;
var p__7850 = cljs.core.take.call(null,n,s__7849);
if((n === cljs.core.count.call(null,p__7850)))
{return cljs.core.cons.call(null,p__7850,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7849)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7850,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__7855 = cljs.core.lookup_sentinel;
var m__7856 = m;
var ks__7857 = cljs.core.seq.call(null,ks);
while(true){
if(ks__7857)
{var m__7858 = cljs.core._lookup.call(null,m__7856,cljs.core.first.call(null,ks__7857),sentinel__7855);
if((sentinel__7855 === m__7858))
{return not_found;
} else
{{
var G__7859 = sentinel__7855;
var G__7860 = m__7858;
var G__7861 = cljs.core.next.call(null,ks__7857);
sentinel__7855 = G__7859;
m__7856 = G__7860;
ks__7857 = G__7861;
continue;
}
}
} else
{return m__7856;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7862,v){
var vec__7867__7868 = p__7862;
var k__7869 = cljs.core.nth.call(null,vec__7867__7868,0,null);
var ks__7870 = cljs.core.nthnext.call(null,vec__7867__7868,1);
if(cljs.core.truth_(ks__7870))
{return cljs.core.assoc.call(null,m,k__7869,assoc_in.call(null,cljs.core._lookup.call(null,m,k__7869,null),ks__7870,v));
} else
{return cljs.core.assoc.call(null,m,k__7869,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7871,f,args){
var vec__7876__7877 = p__7871;
var k__7878 = cljs.core.nth.call(null,vec__7876__7877,0,null);
var ks__7879 = cljs.core.nthnext.call(null,vec__7876__7877,1);
if(cljs.core.truth_(ks__7879))
{return cljs.core.assoc.call(null,m,k__7878,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__7878,null),ks__7879,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7878,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__7878,null),args));
}
};
var update_in = function (m,p__7871,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7871, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7880){
var m = cljs.core.first(arglist__7880);
var p__7871 = cljs.core.first(cljs.core.next(arglist__7880));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7880)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7880)));
return update_in__delegate(m, p__7871, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7883 = this;
var h__1852__auto____7884 = this__7883.__hash;
if(!((h__1852__auto____7884 == null)))
{return h__1852__auto____7884;
} else
{var h__1852__auto____7885 = cljs.core.hash_coll.call(null,coll);
this__7883.__hash = h__1852__auto____7885;
return h__1852__auto____7885;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7886 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7887 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7888 = this;
var new_array__7889 = this__7888.array.slice();
(new_array__7889[k] = v);
return (new cljs.core.Vector(this__7888.meta,new_array__7889,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__7920 = null;
var G__7920__2 = (function (this_sym7890,k){
var this__7892 = this;
var this_sym7890__7893 = this;
var coll__7894 = this_sym7890__7893;
return coll__7894.cljs$core$ILookup$_lookup$arity$2(coll__7894,k);
});
var G__7920__3 = (function (this_sym7891,k,not_found){
var this__7892 = this;
var this_sym7891__7895 = this;
var coll__7896 = this_sym7891__7895;
return coll__7896.cljs$core$ILookup$_lookup$arity$3(coll__7896,k,not_found);
});
G__7920 = function(this_sym7891,k,not_found){
switch(arguments.length){
case 2:
return G__7920__2.call(this,this_sym7891,k);
case 3:
return G__7920__3.call(this,this_sym7891,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7920;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym7881,args7882){
var this__7897 = this;
return this_sym7881.call.apply(this_sym7881,[this_sym7881].concat(args7882.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7898 = this;
var new_array__7899 = this__7898.array.slice();
new_array__7899.push(o);
return (new cljs.core.Vector(this__7898.meta,new_array__7899,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__7900 = this;
var this__7901 = this;
return cljs.core.pr_str.call(null,this__7901);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7902 = this;
return cljs.core.ci_reduce.call(null,this__7902.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7903 = this;
return cljs.core.ci_reduce.call(null,this__7903.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7904 = this;
if((this__7904.array.length > 0))
{var vector_seq__7905 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__7904.array.length))
{return cljs.core.cons.call(null,(this__7904.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__7905.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7906 = this;
return this__7906.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7907 = this;
var count__7908 = this__7907.array.length;
if((count__7908 > 0))
{return (this__7907.array[(count__7908 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7909 = this;
if((this__7909.array.length > 0))
{var new_array__7910 = this__7909.array.slice();
new_array__7910.pop();
return (new cljs.core.Vector(this__7909.meta,new_array__7910,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7911 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7912 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7913 = this;
return (new cljs.core.Vector(meta,this__7913.array,this__7913.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7914 = this;
return this__7914.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7915 = this;
if((function (){var and__3822__auto____7916 = (0 <= n);
if(and__3822__auto____7916)
{return (n < this__7915.array.length);
} else
{return and__3822__auto____7916;
}
})())
{return (this__7915.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7917 = this;
if((function (){var and__3822__auto____7918 = (0 <= n);
if(and__3822__auto____7918)
{return (n < this__7917.array.length);
} else
{return and__3822__auto____7918;
}
})())
{return (this__7917.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7919 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7919.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__1970__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__7922 = pv.cnt;
if((cnt__7922 < 32))
{return 0;
} else
{return (((cnt__7922 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__7928 = level;
var ret__7929 = node;
while(true){
if((ll__7928 === 0))
{return ret__7929;
} else
{var embed__7930 = ret__7929;
var r__7931 = cljs.core.pv_fresh_node.call(null,edit);
var ___7932 = cljs.core.pv_aset.call(null,r__7931,0,embed__7930);
{
var G__7933 = (ll__7928 - 5);
var G__7934 = r__7931;
ll__7928 = G__7933;
ret__7929 = G__7934;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__7940 = cljs.core.pv_clone_node.call(null,parent);
var subidx__7941 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__7940,subidx__7941,tailnode);
return ret__7940;
} else
{var child__7942 = cljs.core.pv_aget.call(null,parent,subidx__7941);
if(!((child__7942 == null)))
{var node_to_insert__7943 = push_tail.call(null,pv,(level - 5),child__7942,tailnode);
cljs.core.pv_aset.call(null,ret__7940,subidx__7941,node_to_insert__7943);
return ret__7940;
} else
{var node_to_insert__7944 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__7940,subidx__7941,node_to_insert__7944);
return ret__7940;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____7948 = (0 <= i);
if(and__3822__auto____7948)
{return (i < pv.cnt);
} else
{return and__3822__auto____7948;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__7949 = pv.root;
var level__7950 = pv.shift;
while(true){
if((level__7950 > 0))
{{
var G__7951 = cljs.core.pv_aget.call(null,node__7949,((i >>> level__7950) & 31));
var G__7952 = (level__7950 - 5);
node__7949 = G__7951;
level__7950 = G__7952;
continue;
}
} else
{return node__7949.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__7955 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__7955,(i & 31),val);
return ret__7955;
} else
{var subidx__7956 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__7955,subidx__7956,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7956),i,val));
return ret__7955;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__7962 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7963 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7962));
if((function (){var and__3822__auto____7964 = (new_child__7963 == null);
if(and__3822__auto____7964)
{return (subidx__7962 === 0);
} else
{return and__3822__auto____7964;
}
})())
{return null;
} else
{var ret__7965 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7965,subidx__7962,new_child__7963);
return ret__7965;
}
} else
{if((subidx__7962 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__7966 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7966,subidx__7962,null);
return ret__7966;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7969 = this;
return (new cljs.core.TransientVector(this__7969.cnt,this__7969.shift,cljs.core.tv_editable_root.call(null,this__7969.root),cljs.core.tv_editable_tail.call(null,this__7969.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7970 = this;
var h__1852__auto____7971 = this__7970.__hash;
if(!((h__1852__auto____7971 == null)))
{return h__1852__auto____7971;
} else
{var h__1852__auto____7972 = cljs.core.hash_coll.call(null,coll);
this__7970.__hash = h__1852__auto____7972;
return h__1852__auto____7972;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7973 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7974 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7975 = this;
if((function (){var and__3822__auto____7976 = (0 <= k);
if(and__3822__auto____7976)
{return (k < this__7975.cnt);
} else
{return and__3822__auto____7976;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__7977 = this__7975.tail.slice();
(new_tail__7977[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__7975.meta,this__7975.cnt,this__7975.shift,this__7975.root,new_tail__7977,null));
} else
{return (new cljs.core.PersistentVector(this__7975.meta,this__7975.cnt,this__7975.shift,cljs.core.do_assoc.call(null,coll,this__7975.shift,this__7975.root,k,v),this__7975.tail,null));
}
} else
{if((k === this__7975.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__7975.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8025 = null;
var G__8025__2 = (function (this_sym7978,k){
var this__7980 = this;
var this_sym7978__7981 = this;
var coll__7982 = this_sym7978__7981;
return coll__7982.cljs$core$ILookup$_lookup$arity$2(coll__7982,k);
});
var G__8025__3 = (function (this_sym7979,k,not_found){
var this__7980 = this;
var this_sym7979__7983 = this;
var coll__7984 = this_sym7979__7983;
return coll__7984.cljs$core$ILookup$_lookup$arity$3(coll__7984,k,not_found);
});
G__8025 = function(this_sym7979,k,not_found){
switch(arguments.length){
case 2:
return G__8025__2.call(this,this_sym7979,k);
case 3:
return G__8025__3.call(this,this_sym7979,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8025;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym7967,args7968){
var this__7985 = this;
return this_sym7967.call.apply(this_sym7967,[this_sym7967].concat(args7968.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__7986 = this;
var step_init__7987 = [0,init];
var i__7988 = 0;
while(true){
if((i__7988 < this__7986.cnt))
{var arr__7989 = cljs.core.array_for.call(null,v,i__7988);
var len__7990 = arr__7989.length;
var init__7994 = (function (){var j__7991 = 0;
var init__7992 = (step_init__7987[1]);
while(true){
if((j__7991 < len__7990))
{var init__7993 = f.call(null,init__7992,(j__7991 + i__7988),(arr__7989[j__7991]));
if(cljs.core.reduced_QMARK_.call(null,init__7993))
{return init__7993;
} else
{{
var G__8026 = (j__7991 + 1);
var G__8027 = init__7993;
j__7991 = G__8026;
init__7992 = G__8027;
continue;
}
}
} else
{(step_init__7987[0] = len__7990);
(step_init__7987[1] = init__7992);
return init__7992;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__7994))
{return cljs.core.deref.call(null,init__7994);
} else
{{
var G__8028 = (i__7988 + (step_init__7987[0]));
i__7988 = G__8028;
continue;
}
}
} else
{return (step_init__7987[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7995 = this;
if(((this__7995.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__7996 = this__7995.tail.slice();
new_tail__7996.push(o);
return (new cljs.core.PersistentVector(this__7995.meta,(this__7995.cnt + 1),this__7995.shift,this__7995.root,new_tail__7996,null));
} else
{var root_overflow_QMARK___7997 = ((this__7995.cnt >>> 5) > (1 << this__7995.shift));
var new_shift__7998 = ((root_overflow_QMARK___7997)?(this__7995.shift + 5):this__7995.shift);
var new_root__8000 = ((root_overflow_QMARK___7997)?(function (){var n_r__7999 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__7999,0,this__7995.root);
cljs.core.pv_aset.call(null,n_r__7999,1,cljs.core.new_path.call(null,null,this__7995.shift,(new cljs.core.VectorNode(null,this__7995.tail))));
return n_r__7999;
})():cljs.core.push_tail.call(null,coll,this__7995.shift,this__7995.root,(new cljs.core.VectorNode(null,this__7995.tail))));
return (new cljs.core.PersistentVector(this__7995.meta,(this__7995.cnt + 1),new_shift__7998,new_root__8000,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8001 = this;
if((this__8001.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8001.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8002 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8003 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8004 = this;
var this__8005 = this;
return cljs.core.pr_str.call(null,this__8005);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8006 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8007 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8008 = this;
if((this__8008.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8009 = this;
return this__8009.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8010 = this;
if((this__8010.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8010.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8011 = this;
if((this__8011.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8011.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8011.meta);
} else
{if((1 < (this__8011.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8011.meta,(this__8011.cnt - 1),this__8011.shift,this__8011.root,this__8011.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8012 = cljs.core.array_for.call(null,coll,(this__8011.cnt - 2));
var nr__8013 = cljs.core.pop_tail.call(null,coll,this__8011.shift,this__8011.root);
var new_root__8014 = (((nr__8013 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8013);
var cnt_1__8015 = (this__8011.cnt - 1);
if((function (){var and__3822__auto____8016 = (5 < this__8011.shift);
if(and__3822__auto____8016)
{return (cljs.core.pv_aget.call(null,new_root__8014,1) == null);
} else
{return and__3822__auto____8016;
}
})())
{return (new cljs.core.PersistentVector(this__8011.meta,cnt_1__8015,(this__8011.shift - 5),cljs.core.pv_aget.call(null,new_root__8014,0),new_tail__8012,null));
} else
{return (new cljs.core.PersistentVector(this__8011.meta,cnt_1__8015,this__8011.shift,new_root__8014,new_tail__8012,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8017 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8018 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8019 = this;
return (new cljs.core.PersistentVector(meta,this__8019.cnt,this__8019.shift,this__8019.root,this__8019.tail,this__8019.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8020 = this;
return this__8020.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8021 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8022 = this;
if((function (){var and__3822__auto____8023 = (0 <= n);
if(and__3822__auto____8023)
{return (n < this__8022.cnt);
} else
{return and__3822__auto____8023;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8024 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8024.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8029 = xs.length;
var xs__8030 = (((no_clone === true))?xs:xs.slice());
if((l__8029 < 32))
{return (new cljs.core.PersistentVector(null,l__8029,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8030,null));
} else
{var node__8031 = xs__8030.slice(0,32);
var v__8032 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8031,null));
var i__8033 = 32;
var out__8034 = cljs.core._as_transient.call(null,v__8032);
while(true){
if((i__8033 < l__8029))
{{
var G__8035 = (i__8033 + 1);
var G__8036 = cljs.core.conj_BANG_.call(null,out__8034,(xs__8030[i__8033]));
i__8033 = G__8035;
out__8034 = G__8036;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8034);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8037){
var args = cljs.core.seq(arglist__8037);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8038 = this;
if(((this__8038.off + 1) < this__8038.node.length))
{var s__8039 = cljs.core.chunked_seq.call(null,this__8038.vec,this__8038.node,this__8038.i,(this__8038.off + 1));
if((s__8039 == null))
{return null;
} else
{return s__8039;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8040 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8041 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8042 = this;
return (this__8042.node[this__8042.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8043 = this;
if(((this__8043.off + 1) < this__8043.node.length))
{var s__8044 = cljs.core.chunked_seq.call(null,this__8043.vec,this__8043.node,this__8043.i,(this__8043.off + 1));
if((s__8044 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8044;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8045 = this;
var l__8046 = this__8045.node.length;
var s__8047 = ((((this__8045.i + l__8046) < cljs.core._count.call(null,this__8045.vec)))?cljs.core.chunked_seq.call(null,this__8045.vec,(this__8045.i + l__8046),0):null);
if((s__8047 == null))
{return null;
} else
{return s__8047;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8048 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8049 = this;
return cljs.core.chunked_seq.call(null,this__8049.vec,this__8049.node,this__8049.i,this__8049.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8050 = this;
return this__8050.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8051 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8051.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8052 = this;
return cljs.core.array_chunk.call(null,this__8052.node,this__8052.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8053 = this;
var l__8054 = this__8053.node.length;
var s__8055 = ((((this__8053.i + l__8054) < cljs.core._count.call(null,this__8053.vec)))?cljs.core.chunked_seq.call(null,this__8053.vec,(this__8053.i + l__8054),0):null);
if((s__8055 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8055;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8058 = this;
var h__1852__auto____8059 = this__8058.__hash;
if(!((h__1852__auto____8059 == null)))
{return h__1852__auto____8059;
} else
{var h__1852__auto____8060 = cljs.core.hash_coll.call(null,coll);
this__8058.__hash = h__1852__auto____8060;
return h__1852__auto____8060;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8061 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8062 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8063 = this;
var v_pos__8064 = (this__8063.start + key);
return (new cljs.core.Subvec(this__8063.meta,cljs.core._assoc.call(null,this__8063.v,v_pos__8064,val),this__8063.start,((this__8063.end > (v_pos__8064 + 1)) ? this__8063.end : (v_pos__8064 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8090 = null;
var G__8090__2 = (function (this_sym8065,k){
var this__8067 = this;
var this_sym8065__8068 = this;
var coll__8069 = this_sym8065__8068;
return coll__8069.cljs$core$ILookup$_lookup$arity$2(coll__8069,k);
});
var G__8090__3 = (function (this_sym8066,k,not_found){
var this__8067 = this;
var this_sym8066__8070 = this;
var coll__8071 = this_sym8066__8070;
return coll__8071.cljs$core$ILookup$_lookup$arity$3(coll__8071,k,not_found);
});
G__8090 = function(this_sym8066,k,not_found){
switch(arguments.length){
case 2:
return G__8090__2.call(this,this_sym8066,k);
case 3:
return G__8090__3.call(this,this_sym8066,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8090;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8056,args8057){
var this__8072 = this;
return this_sym8056.call.apply(this_sym8056,[this_sym8056].concat(args8057.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8073 = this;
return (new cljs.core.Subvec(this__8073.meta,cljs.core._assoc_n.call(null,this__8073.v,this__8073.end,o),this__8073.start,(this__8073.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8074 = this;
var this__8075 = this;
return cljs.core.pr_str.call(null,this__8075);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8076 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8077 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8078 = this;
var subvec_seq__8079 = (function subvec_seq(i){
if((i === this__8078.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8078.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8079.call(null,this__8078.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8080 = this;
return (this__8080.end - this__8080.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8081 = this;
return cljs.core._nth.call(null,this__8081.v,(this__8081.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8082 = this;
if((this__8082.start === this__8082.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8082.meta,this__8082.v,this__8082.start,(this__8082.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8083 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8084 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8085 = this;
return (new cljs.core.Subvec(meta,this__8085.v,this__8085.start,this__8085.end,this__8085.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8086 = this;
return this__8086.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8087 = this;
return cljs.core._nth.call(null,this__8087.v,(this__8087.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8088 = this;
return cljs.core._nth.call(null,this__8088.v,(this__8088.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8089 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8089.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8092 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8092,0,tl.length);
return ret__8092;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8096 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8097 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8096,subidx__8097,(((level === 5))?tail_node:(function (){var child__8098 = cljs.core.pv_aget.call(null,ret__8096,subidx__8097);
if(!((child__8098 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8098,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8096;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8103 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8104 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8105 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8103,subidx__8104));
if((function (){var and__3822__auto____8106 = (new_child__8105 == null);
if(and__3822__auto____8106)
{return (subidx__8104 === 0);
} else
{return and__3822__auto____8106;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8103,subidx__8104,new_child__8105);
return node__8103;
}
} else
{if((subidx__8104 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8103,subidx__8104,null);
return node__8103;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8111 = (0 <= i);
if(and__3822__auto____8111)
{return (i < tv.cnt);
} else
{return and__3822__auto____8111;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8112 = tv.root;
var node__8113 = root__8112;
var level__8114 = tv.shift;
while(true){
if((level__8114 > 0))
{{
var G__8115 = cljs.core.tv_ensure_editable.call(null,root__8112.edit,cljs.core.pv_aget.call(null,node__8113,((i >>> level__8114) & 31)));
var G__8116 = (level__8114 - 5);
node__8113 = G__8115;
level__8114 = G__8116;
continue;
}
} else
{return node__8113.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8156 = null;
var G__8156__2 = (function (this_sym8119,k){
var this__8121 = this;
var this_sym8119__8122 = this;
var coll__8123 = this_sym8119__8122;
return coll__8123.cljs$core$ILookup$_lookup$arity$2(coll__8123,k);
});
var G__8156__3 = (function (this_sym8120,k,not_found){
var this__8121 = this;
var this_sym8120__8124 = this;
var coll__8125 = this_sym8120__8124;
return coll__8125.cljs$core$ILookup$_lookup$arity$3(coll__8125,k,not_found);
});
G__8156 = function(this_sym8120,k,not_found){
switch(arguments.length){
case 2:
return G__8156__2.call(this,this_sym8120,k);
case 3:
return G__8156__3.call(this,this_sym8120,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8156;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8117,args8118){
var this__8126 = this;
return this_sym8117.call.apply(this_sym8117,[this_sym8117].concat(args8118.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8127 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8128 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8129 = this;
if(this__8129.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8130 = this;
if((function (){var and__3822__auto____8131 = (0 <= n);
if(and__3822__auto____8131)
{return (n < this__8130.cnt);
} else
{return and__3822__auto____8131;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8132 = this;
if(this__8132.root.edit)
{return this__8132.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8133 = this;
if(this__8133.root.edit)
{if((function (){var and__3822__auto____8134 = (0 <= n);
if(and__3822__auto____8134)
{return (n < this__8133.cnt);
} else
{return and__3822__auto____8134;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8133.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8139 = (function go(level,node){
var node__8137 = cljs.core.tv_ensure_editable.call(null,this__8133.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8137,(n & 31),val);
return node__8137;
} else
{var subidx__8138 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8137,subidx__8138,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8137,subidx__8138)));
return node__8137;
}
}).call(null,this__8133.shift,this__8133.root);
this__8133.root = new_root__8139;
return tcoll;
}
} else
{if((n === this__8133.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8133.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8140 = this;
if(this__8140.root.edit)
{if((this__8140.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8140.cnt))
{this__8140.cnt = 0;
return tcoll;
} else
{if((((this__8140.cnt - 1) & 31) > 0))
{this__8140.cnt = (this__8140.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8141 = cljs.core.editable_array_for.call(null,tcoll,(this__8140.cnt - 2));
var new_root__8143 = (function (){var nr__8142 = cljs.core.tv_pop_tail.call(null,tcoll,this__8140.shift,this__8140.root);
if(!((nr__8142 == null)))
{return nr__8142;
} else
{return (new cljs.core.VectorNode(this__8140.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8144 = (5 < this__8140.shift);
if(and__3822__auto____8144)
{return (cljs.core.pv_aget.call(null,new_root__8143,1) == null);
} else
{return and__3822__auto____8144;
}
})())
{var new_root__8145 = cljs.core.tv_ensure_editable.call(null,this__8140.root.edit,cljs.core.pv_aget.call(null,new_root__8143,0));
this__8140.root = new_root__8145;
this__8140.shift = (this__8140.shift - 5);
this__8140.cnt = (this__8140.cnt - 1);
this__8140.tail = new_tail__8141;
return tcoll;
} else
{this__8140.root = new_root__8143;
this__8140.cnt = (this__8140.cnt - 1);
this__8140.tail = new_tail__8141;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8146 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8147 = this;
if(this__8147.root.edit)
{if(((this__8147.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8147.tail[(this__8147.cnt & 31)] = o);
this__8147.cnt = (this__8147.cnt + 1);
return tcoll;
} else
{var tail_node__8148 = (new cljs.core.VectorNode(this__8147.root.edit,this__8147.tail));
var new_tail__8149 = cljs.core.make_array.call(null,32);
(new_tail__8149[0] = o);
this__8147.tail = new_tail__8149;
if(((this__8147.cnt >>> 5) > (1 << this__8147.shift)))
{var new_root_array__8150 = cljs.core.make_array.call(null,32);
var new_shift__8151 = (this__8147.shift + 5);
(new_root_array__8150[0] = this__8147.root);
(new_root_array__8150[1] = cljs.core.new_path.call(null,this__8147.root.edit,this__8147.shift,tail_node__8148));
this__8147.root = (new cljs.core.VectorNode(this__8147.root.edit,new_root_array__8150));
this__8147.shift = new_shift__8151;
this__8147.cnt = (this__8147.cnt + 1);
return tcoll;
} else
{var new_root__8152 = cljs.core.tv_push_tail.call(null,tcoll,this__8147.shift,this__8147.root,tail_node__8148);
this__8147.root = new_root__8152;
this__8147.cnt = (this__8147.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8153 = this;
if(this__8153.root.edit)
{this__8153.root.edit = null;
var len__8154 = (this__8153.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8155 = cljs.core.make_array.call(null,len__8154);
cljs.core.array_copy.call(null,this__8153.tail,0,trimmed_tail__8155,0,len__8154);
return (new cljs.core.PersistentVector(null,this__8153.cnt,this__8153.shift,this__8153.root,trimmed_tail__8155,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8157 = this;
var h__1852__auto____8158 = this__8157.__hash;
if(!((h__1852__auto____8158 == null)))
{return h__1852__auto____8158;
} else
{var h__1852__auto____8159 = cljs.core.hash_coll.call(null,coll);
this__8157.__hash = h__1852__auto____8159;
return h__1852__auto____8159;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8160 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8161 = this;
var this__8162 = this;
return cljs.core.pr_str.call(null,this__8162);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8163 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8164 = this;
return cljs.core._first.call(null,this__8164.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8165 = this;
var temp__3971__auto____8166 = cljs.core.next.call(null,this__8165.front);
if(temp__3971__auto____8166)
{var f1__8167 = temp__3971__auto____8166;
return (new cljs.core.PersistentQueueSeq(this__8165.meta,f1__8167,this__8165.rear,null));
} else
{if((this__8165.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8165.meta,this__8165.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8168 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8169 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8169.front,this__8169.rear,this__8169.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8170 = this;
return this__8170.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8171 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8171.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8172 = this;
var h__1852__auto____8173 = this__8172.__hash;
if(!((h__1852__auto____8173 == null)))
{return h__1852__auto____8173;
} else
{var h__1852__auto____8174 = cljs.core.hash_coll.call(null,coll);
this__8172.__hash = h__1852__auto____8174;
return h__1852__auto____8174;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8175 = this;
if(cljs.core.truth_(this__8175.front))
{return (new cljs.core.PersistentQueue(this__8175.meta,(this__8175.count + 1),this__8175.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8176 = this__8175.rear;
if(cljs.core.truth_(or__3824__auto____8176))
{return or__3824__auto____8176;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8175.meta,(this__8175.count + 1),cljs.core.conj.call(null,this__8175.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8177 = this;
var this__8178 = this;
return cljs.core.pr_str.call(null,this__8178);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8179 = this;
var rear__8180 = cljs.core.seq.call(null,this__8179.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8181 = this__8179.front;
if(cljs.core.truth_(or__3824__auto____8181))
{return or__3824__auto____8181;
} else
{return rear__8180;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8179.front,cljs.core.seq.call(null,rear__8180),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8182 = this;
return this__8182.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8183 = this;
return cljs.core._first.call(null,this__8183.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8184 = this;
if(cljs.core.truth_(this__8184.front))
{var temp__3971__auto____8185 = cljs.core.next.call(null,this__8184.front);
if(temp__3971__auto____8185)
{var f1__8186 = temp__3971__auto____8185;
return (new cljs.core.PersistentQueue(this__8184.meta,(this__8184.count - 1),f1__8186,this__8184.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8184.meta,(this__8184.count - 1),cljs.core.seq.call(null,this__8184.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8187 = this;
return cljs.core.first.call(null,this__8187.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8188 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8189 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8190 = this;
return (new cljs.core.PersistentQueue(meta,this__8190.count,this__8190.front,this__8190.rear,this__8190.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8191 = this;
return this__8191.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8192 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8193 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8196 = array.length;
var i__8197 = 0;
while(true){
if((i__8197 < len__8196))
{if((k === (array[i__8197])))
{return i__8197;
} else
{{
var G__8198 = (i__8197 + incr);
i__8197 = G__8198;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8201 = cljs.core.hash.call(null,a);
var b__8202 = cljs.core.hash.call(null,b);
if((a__8201 < b__8202))
{return -1;
} else
{if((a__8201 > b__8202))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8210 = m.keys;
var len__8211 = ks__8210.length;
var so__8212 = m.strobj;
var out__8213 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8214 = 0;
var out__8215 = cljs.core.transient$.call(null,out__8213);
while(true){
if((i__8214 < len__8211))
{var k__8216 = (ks__8210[i__8214]);
{
var G__8217 = (i__8214 + 1);
var G__8218 = cljs.core.assoc_BANG_.call(null,out__8215,k__8216,(so__8212[k__8216]));
i__8214 = G__8217;
out__8215 = G__8218;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8215,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8224 = {};
var l__8225 = ks.length;
var i__8226 = 0;
while(true){
if((i__8226 < l__8225))
{var k__8227 = (ks[i__8226]);
(new_obj__8224[k__8227] = (obj[k__8227]));
{
var G__8228 = (i__8226 + 1);
i__8226 = G__8228;
continue;
}
} else
{}
break;
}
return new_obj__8224;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8231 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8232 = this;
var h__1852__auto____8233 = this__8232.__hash;
if(!((h__1852__auto____8233 == null)))
{return h__1852__auto____8233;
} else
{var h__1852__auto____8234 = cljs.core.hash_imap.call(null,coll);
this__8232.__hash = h__1852__auto____8234;
return h__1852__auto____8234;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8235 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8236 = this;
if((function (){var and__3822__auto____8237 = goog.isString(k);
if(and__3822__auto____8237)
{return !((cljs.core.scan_array.call(null,1,k,this__8236.keys) == null));
} else
{return and__3822__auto____8237;
}
})())
{return (this__8236.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8238 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8239 = (this__8238.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8239)
{return or__3824__auto____8239;
} else
{return (this__8238.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8238.keys) == null)))
{var new_strobj__8240 = cljs.core.obj_clone.call(null,this__8238.strobj,this__8238.keys);
(new_strobj__8240[k] = v);
return (new cljs.core.ObjMap(this__8238.meta,this__8238.keys,new_strobj__8240,(this__8238.update_count + 1),null));
} else
{var new_strobj__8241 = cljs.core.obj_clone.call(null,this__8238.strobj,this__8238.keys);
var new_keys__8242 = this__8238.keys.slice();
(new_strobj__8241[k] = v);
new_keys__8242.push(k);
return (new cljs.core.ObjMap(this__8238.meta,new_keys__8242,new_strobj__8241,(this__8238.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8243 = this;
if((function (){var and__3822__auto____8244 = goog.isString(k);
if(and__3822__auto____8244)
{return !((cljs.core.scan_array.call(null,1,k,this__8243.keys) == null));
} else
{return and__3822__auto____8244;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8266 = null;
var G__8266__2 = (function (this_sym8245,k){
var this__8247 = this;
var this_sym8245__8248 = this;
var coll__8249 = this_sym8245__8248;
return coll__8249.cljs$core$ILookup$_lookup$arity$2(coll__8249,k);
});
var G__8266__3 = (function (this_sym8246,k,not_found){
var this__8247 = this;
var this_sym8246__8250 = this;
var coll__8251 = this_sym8246__8250;
return coll__8251.cljs$core$ILookup$_lookup$arity$3(coll__8251,k,not_found);
});
G__8266 = function(this_sym8246,k,not_found){
switch(arguments.length){
case 2:
return G__8266__2.call(this,this_sym8246,k);
case 3:
return G__8266__3.call(this,this_sym8246,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8266;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8229,args8230){
var this__8252 = this;
return this_sym8229.call.apply(this_sym8229,[this_sym8229].concat(args8230.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8253 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8254 = this;
var this__8255 = this;
return cljs.core.pr_str.call(null,this__8255);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8256 = this;
if((this__8256.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8219_SHARP_){
return cljs.core.vector.call(null,p1__8219_SHARP_,(this__8256.strobj[p1__8219_SHARP_]));
}),this__8256.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8257 = this;
return this__8257.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8258 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8259 = this;
return (new cljs.core.ObjMap(meta,this__8259.keys,this__8259.strobj,this__8259.update_count,this__8259.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8260 = this;
return this__8260.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8261 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8261.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8262 = this;
if((function (){var and__3822__auto____8263 = goog.isString(k);
if(and__3822__auto____8263)
{return !((cljs.core.scan_array.call(null,1,k,this__8262.keys) == null));
} else
{return and__3822__auto____8263;
}
})())
{var new_keys__8264 = this__8262.keys.slice();
var new_strobj__8265 = cljs.core.obj_clone.call(null,this__8262.strobj,this__8262.keys);
new_keys__8264.splice(cljs.core.scan_array.call(null,1,k,new_keys__8264),1);
cljs.core.js_delete.call(null,new_strobj__8265,k);
return (new cljs.core.ObjMap(this__8262.meta,new_keys__8264,new_strobj__8265,(this__8262.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8270 = this;
var h__1852__auto____8271 = this__8270.__hash;
if(!((h__1852__auto____8271 == null)))
{return h__1852__auto____8271;
} else
{var h__1852__auto____8272 = cljs.core.hash_imap.call(null,coll);
this__8270.__hash = h__1852__auto____8272;
return h__1852__auto____8272;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8273 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8274 = this;
var bucket__8275 = (this__8274.hashobj[cljs.core.hash.call(null,k)]);
var i__8276 = (cljs.core.truth_(bucket__8275)?cljs.core.scan_array.call(null,2,k,bucket__8275):null);
if(cljs.core.truth_(i__8276))
{return (bucket__8275[(i__8276 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8277 = this;
var h__8278 = cljs.core.hash.call(null,k);
var bucket__8279 = (this__8277.hashobj[h__8278]);
if(cljs.core.truth_(bucket__8279))
{var new_bucket__8280 = bucket__8279.slice();
var new_hashobj__8281 = goog.object.clone(this__8277.hashobj);
(new_hashobj__8281[h__8278] = new_bucket__8280);
var temp__3971__auto____8282 = cljs.core.scan_array.call(null,2,k,new_bucket__8280);
if(cljs.core.truth_(temp__3971__auto____8282))
{var i__8283 = temp__3971__auto____8282;
(new_bucket__8280[(i__8283 + 1)] = v);
return (new cljs.core.HashMap(this__8277.meta,this__8277.count,new_hashobj__8281,null));
} else
{new_bucket__8280.push(k,v);
return (new cljs.core.HashMap(this__8277.meta,(this__8277.count + 1),new_hashobj__8281,null));
}
} else
{var new_hashobj__8284 = goog.object.clone(this__8277.hashobj);
(new_hashobj__8284[h__8278] = [k,v]);
return (new cljs.core.HashMap(this__8277.meta,(this__8277.count + 1),new_hashobj__8284,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8285 = this;
var bucket__8286 = (this__8285.hashobj[cljs.core.hash.call(null,k)]);
var i__8287 = (cljs.core.truth_(bucket__8286)?cljs.core.scan_array.call(null,2,k,bucket__8286):null);
if(cljs.core.truth_(i__8287))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8312 = null;
var G__8312__2 = (function (this_sym8288,k){
var this__8290 = this;
var this_sym8288__8291 = this;
var coll__8292 = this_sym8288__8291;
return coll__8292.cljs$core$ILookup$_lookup$arity$2(coll__8292,k);
});
var G__8312__3 = (function (this_sym8289,k,not_found){
var this__8290 = this;
var this_sym8289__8293 = this;
var coll__8294 = this_sym8289__8293;
return coll__8294.cljs$core$ILookup$_lookup$arity$3(coll__8294,k,not_found);
});
G__8312 = function(this_sym8289,k,not_found){
switch(arguments.length){
case 2:
return G__8312__2.call(this,this_sym8289,k);
case 3:
return G__8312__3.call(this,this_sym8289,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8312;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8268,args8269){
var this__8295 = this;
return this_sym8268.call.apply(this_sym8268,[this_sym8268].concat(args8269.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8296 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8297 = this;
var this__8298 = this;
return cljs.core.pr_str.call(null,this__8298);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8299 = this;
if((this__8299.count > 0))
{var hashes__8300 = cljs.core.js_keys.call(null,this__8299.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8267_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8299.hashobj[p1__8267_SHARP_])));
}),hashes__8300);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8301 = this;
return this__8301.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8302 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8303 = this;
return (new cljs.core.HashMap(meta,this__8303.count,this__8303.hashobj,this__8303.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8304 = this;
return this__8304.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8305 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8305.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8306 = this;
var h__8307 = cljs.core.hash.call(null,k);
var bucket__8308 = (this__8306.hashobj[h__8307]);
var i__8309 = (cljs.core.truth_(bucket__8308)?cljs.core.scan_array.call(null,2,k,bucket__8308):null);
if(cljs.core.not.call(null,i__8309))
{return coll;
} else
{var new_hashobj__8310 = goog.object.clone(this__8306.hashobj);
if((3 > bucket__8308.length))
{cljs.core.js_delete.call(null,new_hashobj__8310,h__8307);
} else
{var new_bucket__8311 = bucket__8308.slice();
new_bucket__8311.splice(i__8309,2);
(new_hashobj__8310[h__8307] = new_bucket__8311);
}
return (new cljs.core.HashMap(this__8306.meta,(this__8306.count - 1),new_hashobj__8310,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8313 = ks.length;
var i__8314 = 0;
var out__8315 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8314 < len__8313))
{{
var G__8316 = (i__8314 + 1);
var G__8317 = cljs.core.assoc.call(null,out__8315,(ks[i__8314]),(vs[i__8314]));
i__8314 = G__8316;
out__8315 = G__8317;
continue;
}
} else
{return out__8315;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8321 = m.arr;
var len__8322 = arr__8321.length;
var i__8323 = 0;
while(true){
if((len__8322 <= i__8323))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8321[i__8323]),k))
{return i__8323;
} else
{if("\uFDD0'else")
{{
var G__8324 = (i__8323 + 2);
i__8323 = G__8324;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8327 = this;
return (new cljs.core.TransientArrayMap({},this__8327.arr.length,this__8327.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8328 = this;
var h__1852__auto____8329 = this__8328.__hash;
if(!((h__1852__auto____8329 == null)))
{return h__1852__auto____8329;
} else
{var h__1852__auto____8330 = cljs.core.hash_imap.call(null,coll);
this__8328.__hash = h__1852__auto____8330;
return h__1852__auto____8330;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8331 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8332 = this;
var idx__8333 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8333 === -1))
{return not_found;
} else
{return (this__8332.arr[(idx__8333 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8334 = this;
var idx__8335 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8335 === -1))
{if((this__8334.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8334.meta,(this__8334.cnt + 1),(function (){var G__8336__8337 = this__8334.arr.slice();
G__8336__8337.push(k);
G__8336__8337.push(v);
return G__8336__8337;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8334.arr[(idx__8335 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8334.meta,this__8334.cnt,(function (){var G__8338__8339 = this__8334.arr.slice();
(G__8338__8339[(idx__8335 + 1)] = v);
return G__8338__8339;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8340 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8372 = null;
var G__8372__2 = (function (this_sym8341,k){
var this__8343 = this;
var this_sym8341__8344 = this;
var coll__8345 = this_sym8341__8344;
return coll__8345.cljs$core$ILookup$_lookup$arity$2(coll__8345,k);
});
var G__8372__3 = (function (this_sym8342,k,not_found){
var this__8343 = this;
var this_sym8342__8346 = this;
var coll__8347 = this_sym8342__8346;
return coll__8347.cljs$core$ILookup$_lookup$arity$3(coll__8347,k,not_found);
});
G__8372 = function(this_sym8342,k,not_found){
switch(arguments.length){
case 2:
return G__8372__2.call(this,this_sym8342,k);
case 3:
return G__8372__3.call(this,this_sym8342,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8372;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8325,args8326){
var this__8348 = this;
return this_sym8325.call.apply(this_sym8325,[this_sym8325].concat(args8326.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8349 = this;
var len__8350 = this__8349.arr.length;
var i__8351 = 0;
var init__8352 = init;
while(true){
if((i__8351 < len__8350))
{var init__8353 = f.call(null,init__8352,(this__8349.arr[i__8351]),(this__8349.arr[(i__8351 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8353))
{return cljs.core.deref.call(null,init__8353);
} else
{{
var G__8373 = (i__8351 + 2);
var G__8374 = init__8353;
i__8351 = G__8373;
init__8352 = G__8374;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8354 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8355 = this;
var this__8356 = this;
return cljs.core.pr_str.call(null,this__8356);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8357 = this;
if((this__8357.cnt > 0))
{var len__8358 = this__8357.arr.length;
var array_map_seq__8359 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8358))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8357.arr[i]),(this__8357.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8359.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8360 = this;
return this__8360.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8361 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8362 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8362.cnt,this__8362.arr,this__8362.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8363 = this;
return this__8363.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8364 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8364.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8365 = this;
var idx__8366 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8366 >= 0))
{var len__8367 = this__8365.arr.length;
var new_len__8368 = (len__8367 - 2);
if((new_len__8368 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8369 = cljs.core.make_array.call(null,new_len__8368);
var s__8370 = 0;
var d__8371 = 0;
while(true){
if((s__8370 >= len__8367))
{return (new cljs.core.PersistentArrayMap(this__8365.meta,(this__8365.cnt - 1),new_arr__8369,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8365.arr[s__8370])))
{{
var G__8375 = (s__8370 + 2);
var G__8376 = d__8371;
s__8370 = G__8375;
d__8371 = G__8376;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8369[d__8371] = (this__8365.arr[s__8370]));
(new_arr__8369[(d__8371 + 1)] = (this__8365.arr[(s__8370 + 1)]));
{
var G__8377 = (s__8370 + 2);
var G__8378 = (d__8371 + 2);
s__8370 = G__8377;
d__8371 = G__8378;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8379 = cljs.core.count.call(null,ks);
var i__8380 = 0;
var out__8381 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8380 < len__8379))
{{
var G__8382 = (i__8380 + 1);
var G__8383 = cljs.core.assoc_BANG_.call(null,out__8381,(ks[i__8380]),(vs[i__8380]));
i__8380 = G__8382;
out__8381 = G__8383;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8381);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8384 = this;
if(cljs.core.truth_(this__8384.editable_QMARK_))
{var idx__8385 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8385 >= 0))
{(this__8384.arr[idx__8385] = (this__8384.arr[(this__8384.len - 2)]));
(this__8384.arr[(idx__8385 + 1)] = (this__8384.arr[(this__8384.len - 1)]));
var G__8386__8387 = this__8384.arr;
G__8386__8387.pop();
G__8386__8387.pop();
G__8386__8387;
this__8384.len = (this__8384.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8388 = this;
if(cljs.core.truth_(this__8388.editable_QMARK_))
{var idx__8389 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8389 === -1))
{if(((this__8388.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8388.len = (this__8388.len + 2);
this__8388.arr.push(key);
this__8388.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8388.len,this__8388.arr),key,val);
}
} else
{if((val === (this__8388.arr[(idx__8389 + 1)])))
{return tcoll;
} else
{(this__8388.arr[(idx__8389 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8390 = this;
if(cljs.core.truth_(this__8390.editable_QMARK_))
{if((function (){var G__8391__8392 = o;
if(G__8391__8392)
{if((function (){var or__3824__auto____8393 = (G__8391__8392.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8393)
{return or__3824__auto____8393;
} else
{return G__8391__8392.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8391__8392.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8391__8392);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8391__8392);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8394 = cljs.core.seq.call(null,o);
var tcoll__8395 = tcoll;
while(true){
var temp__3971__auto____8396 = cljs.core.first.call(null,es__8394);
if(cljs.core.truth_(temp__3971__auto____8396))
{var e__8397 = temp__3971__auto____8396;
{
var G__8403 = cljs.core.next.call(null,es__8394);
var G__8404 = tcoll__8395.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8395,cljs.core.key.call(null,e__8397),cljs.core.val.call(null,e__8397));
es__8394 = G__8403;
tcoll__8395 = G__8404;
continue;
}
} else
{return tcoll__8395;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8398 = this;
if(cljs.core.truth_(this__8398.editable_QMARK_))
{this__8398.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8398.len,2),this__8398.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8399 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8400 = this;
if(cljs.core.truth_(this__8400.editable_QMARK_))
{var idx__8401 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8401 === -1))
{return not_found;
} else
{return (this__8400.arr[(idx__8401 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8402 = this;
if(cljs.core.truth_(this__8402.editable_QMARK_))
{return cljs.core.quot.call(null,this__8402.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8407 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8408 = 0;
while(true){
if((i__8408 < len))
{{
var G__8409 = cljs.core.assoc_BANG_.call(null,out__8407,(arr[i__8408]),(arr[(i__8408 + 1)]));
var G__8410 = (i__8408 + 2);
out__8407 = G__8409;
i__8408 = G__8410;
continue;
}
} else
{return out__8407;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__1970__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8415__8416 = arr.slice();
(G__8415__8416[i] = a);
return G__8415__8416;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8417__8418 = arr.slice();
(G__8417__8418[i] = a);
(G__8417__8418[j] = b);
return G__8417__8418;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8420 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8420,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8420,(2 * i),(new_arr__8420.length - (2 * i)));
return new_arr__8420;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8423 = inode.ensure_editable(edit);
(editable__8423.arr[i] = a);
return editable__8423;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8424 = inode.ensure_editable(edit);
(editable__8424.arr[i] = a);
(editable__8424.arr[j] = b);
return editable__8424;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8431 = arr.length;
var i__8432 = 0;
var init__8433 = init;
while(true){
if((i__8432 < len__8431))
{var init__8436 = (function (){var k__8434 = (arr[i__8432]);
if(!((k__8434 == null)))
{return f.call(null,init__8433,k__8434,(arr[(i__8432 + 1)]));
} else
{var node__8435 = (arr[(i__8432 + 1)]);
if(!((node__8435 == null)))
{return node__8435.kv_reduce(f,init__8433);
} else
{return init__8433;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8436))
{return cljs.core.deref.call(null,init__8436);
} else
{{
var G__8437 = (i__8432 + 2);
var G__8438 = init__8436;
i__8432 = G__8437;
init__8433 = G__8438;
continue;
}
}
} else
{return init__8433;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8439 = this;
var inode__8440 = this;
if((this__8439.bitmap === bit))
{return null;
} else
{var editable__8441 = inode__8440.ensure_editable(e);
var earr__8442 = editable__8441.arr;
var len__8443 = earr__8442.length;
editable__8441.bitmap = (bit ^ editable__8441.bitmap);
cljs.core.array_copy.call(null,earr__8442,(2 * (i + 1)),earr__8442,(2 * i),(len__8443 - (2 * (i + 1))));
(earr__8442[(len__8443 - 2)] = null);
(earr__8442[(len__8443 - 1)] = null);
return editable__8441;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8444 = this;
var inode__8445 = this;
var bit__8446 = (1 << ((hash >>> shift) & 0x01f));
var idx__8447 = cljs.core.bitmap_indexed_node_index.call(null,this__8444.bitmap,bit__8446);
if(((this__8444.bitmap & bit__8446) === 0))
{var n__8448 = cljs.core.bit_count.call(null,this__8444.bitmap);
if(((2 * n__8448) < this__8444.arr.length))
{var editable__8449 = inode__8445.ensure_editable(edit);
var earr__8450 = editable__8449.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8450,(2 * idx__8447),earr__8450,(2 * (idx__8447 + 1)),(2 * (n__8448 - idx__8447)));
(earr__8450[(2 * idx__8447)] = key);
(earr__8450[((2 * idx__8447) + 1)] = val);
editable__8449.bitmap = (editable__8449.bitmap | bit__8446);
return editable__8449;
} else
{if((n__8448 >= 16))
{var nodes__8451 = cljs.core.make_array.call(null,32);
var jdx__8452 = ((hash >>> shift) & 0x01f);
(nodes__8451[jdx__8452] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8453 = 0;
var j__8454 = 0;
while(true){
if((i__8453 < 32))
{if((((this__8444.bitmap >>> i__8453) & 1) === 0))
{{
var G__8507 = (i__8453 + 1);
var G__8508 = j__8454;
i__8453 = G__8507;
j__8454 = G__8508;
continue;
}
} else
{(nodes__8451[i__8453] = ((!(((this__8444.arr[j__8454]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8444.arr[j__8454])),(this__8444.arr[j__8454]),(this__8444.arr[(j__8454 + 1)]),added_leaf_QMARK_):(this__8444.arr[(j__8454 + 1)])));
{
var G__8509 = (i__8453 + 1);
var G__8510 = (j__8454 + 2);
i__8453 = G__8509;
j__8454 = G__8510;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8448 + 1),nodes__8451));
} else
{if("\uFDD0'else")
{var new_arr__8455 = cljs.core.make_array.call(null,(2 * (n__8448 + 4)));
cljs.core.array_copy.call(null,this__8444.arr,0,new_arr__8455,0,(2 * idx__8447));
(new_arr__8455[(2 * idx__8447)] = key);
(new_arr__8455[((2 * idx__8447) + 1)] = val);
cljs.core.array_copy.call(null,this__8444.arr,(2 * idx__8447),new_arr__8455,(2 * (idx__8447 + 1)),(2 * (n__8448 - idx__8447)));
added_leaf_QMARK_.val = true;
var editable__8456 = inode__8445.ensure_editable(edit);
editable__8456.arr = new_arr__8455;
editable__8456.bitmap = (editable__8456.bitmap | bit__8446);
return editable__8456;
} else
{return null;
}
}
}
} else
{var key_or_nil__8457 = (this__8444.arr[(2 * idx__8447)]);
var val_or_node__8458 = (this__8444.arr[((2 * idx__8447) + 1)]);
if((key_or_nil__8457 == null))
{var n__8459 = val_or_node__8458.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8459 === val_or_node__8458))
{return inode__8445;
} else
{return cljs.core.edit_and_set.call(null,inode__8445,edit,((2 * idx__8447) + 1),n__8459);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8457))
{if((val === val_or_node__8458))
{return inode__8445;
} else
{return cljs.core.edit_and_set.call(null,inode__8445,edit,((2 * idx__8447) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8445,edit,(2 * idx__8447),null,((2 * idx__8447) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8457,val_or_node__8458,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8460 = this;
var inode__8461 = this;
return cljs.core.create_inode_seq.call(null,this__8460.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8462 = this;
var inode__8463 = this;
var bit__8464 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8462.bitmap & bit__8464) === 0))
{return inode__8463;
} else
{var idx__8465 = cljs.core.bitmap_indexed_node_index.call(null,this__8462.bitmap,bit__8464);
var key_or_nil__8466 = (this__8462.arr[(2 * idx__8465)]);
var val_or_node__8467 = (this__8462.arr[((2 * idx__8465) + 1)]);
if((key_or_nil__8466 == null))
{var n__8468 = val_or_node__8467.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8468 === val_or_node__8467))
{return inode__8463;
} else
{if(!((n__8468 == null)))
{return cljs.core.edit_and_set.call(null,inode__8463,edit,((2 * idx__8465) + 1),n__8468);
} else
{if((this__8462.bitmap === bit__8464))
{return null;
} else
{if("\uFDD0'else")
{return inode__8463.edit_and_remove_pair(edit,bit__8464,idx__8465);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8466))
{(removed_leaf_QMARK_[0] = true);
return inode__8463.edit_and_remove_pair(edit,bit__8464,idx__8465);
} else
{if("\uFDD0'else")
{return inode__8463;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8469 = this;
var inode__8470 = this;
if((e === this__8469.edit))
{return inode__8470;
} else
{var n__8471 = cljs.core.bit_count.call(null,this__8469.bitmap);
var new_arr__8472 = cljs.core.make_array.call(null,(((n__8471 < 0))?4:(2 * (n__8471 + 1))));
cljs.core.array_copy.call(null,this__8469.arr,0,new_arr__8472,0,(2 * n__8471));
return (new cljs.core.BitmapIndexedNode(e,this__8469.bitmap,new_arr__8472));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8473 = this;
var inode__8474 = this;
return cljs.core.inode_kv_reduce.call(null,this__8473.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8475 = this;
var inode__8476 = this;
var bit__8477 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8475.bitmap & bit__8477) === 0))
{return not_found;
} else
{var idx__8478 = cljs.core.bitmap_indexed_node_index.call(null,this__8475.bitmap,bit__8477);
var key_or_nil__8479 = (this__8475.arr[(2 * idx__8478)]);
var val_or_node__8480 = (this__8475.arr[((2 * idx__8478) + 1)]);
if((key_or_nil__8479 == null))
{return val_or_node__8480.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8479))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8479,val_or_node__8480], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8481 = this;
var inode__8482 = this;
var bit__8483 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8481.bitmap & bit__8483) === 0))
{return inode__8482;
} else
{var idx__8484 = cljs.core.bitmap_indexed_node_index.call(null,this__8481.bitmap,bit__8483);
var key_or_nil__8485 = (this__8481.arr[(2 * idx__8484)]);
var val_or_node__8486 = (this__8481.arr[((2 * idx__8484) + 1)]);
if((key_or_nil__8485 == null))
{var n__8487 = val_or_node__8486.inode_without((shift + 5),hash,key);
if((n__8487 === val_or_node__8486))
{return inode__8482;
} else
{if(!((n__8487 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8481.bitmap,cljs.core.clone_and_set.call(null,this__8481.arr,((2 * idx__8484) + 1),n__8487)));
} else
{if((this__8481.bitmap === bit__8483))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8481.bitmap ^ bit__8483),cljs.core.remove_pair.call(null,this__8481.arr,idx__8484)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8485))
{return (new cljs.core.BitmapIndexedNode(null,(this__8481.bitmap ^ bit__8483),cljs.core.remove_pair.call(null,this__8481.arr,idx__8484)));
} else
{if("\uFDD0'else")
{return inode__8482;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8488 = this;
var inode__8489 = this;
var bit__8490 = (1 << ((hash >>> shift) & 0x01f));
var idx__8491 = cljs.core.bitmap_indexed_node_index.call(null,this__8488.bitmap,bit__8490);
if(((this__8488.bitmap & bit__8490) === 0))
{var n__8492 = cljs.core.bit_count.call(null,this__8488.bitmap);
if((n__8492 >= 16))
{var nodes__8493 = cljs.core.make_array.call(null,32);
var jdx__8494 = ((hash >>> shift) & 0x01f);
(nodes__8493[jdx__8494] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8495 = 0;
var j__8496 = 0;
while(true){
if((i__8495 < 32))
{if((((this__8488.bitmap >>> i__8495) & 1) === 0))
{{
var G__8511 = (i__8495 + 1);
var G__8512 = j__8496;
i__8495 = G__8511;
j__8496 = G__8512;
continue;
}
} else
{(nodes__8493[i__8495] = ((!(((this__8488.arr[j__8496]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8488.arr[j__8496])),(this__8488.arr[j__8496]),(this__8488.arr[(j__8496 + 1)]),added_leaf_QMARK_):(this__8488.arr[(j__8496 + 1)])));
{
var G__8513 = (i__8495 + 1);
var G__8514 = (j__8496 + 2);
i__8495 = G__8513;
j__8496 = G__8514;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8492 + 1),nodes__8493));
} else
{var new_arr__8497 = cljs.core.make_array.call(null,(2 * (n__8492 + 1)));
cljs.core.array_copy.call(null,this__8488.arr,0,new_arr__8497,0,(2 * idx__8491));
(new_arr__8497[(2 * idx__8491)] = key);
(new_arr__8497[((2 * idx__8491) + 1)] = val);
cljs.core.array_copy.call(null,this__8488.arr,(2 * idx__8491),new_arr__8497,(2 * (idx__8491 + 1)),(2 * (n__8492 - idx__8491)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8488.bitmap | bit__8490),new_arr__8497));
}
} else
{var key_or_nil__8498 = (this__8488.arr[(2 * idx__8491)]);
var val_or_node__8499 = (this__8488.arr[((2 * idx__8491) + 1)]);
if((key_or_nil__8498 == null))
{var n__8500 = val_or_node__8499.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8500 === val_or_node__8499))
{return inode__8489;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8488.bitmap,cljs.core.clone_and_set.call(null,this__8488.arr,((2 * idx__8491) + 1),n__8500)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8498))
{if((val === val_or_node__8499))
{return inode__8489;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8488.bitmap,cljs.core.clone_and_set.call(null,this__8488.arr,((2 * idx__8491) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8488.bitmap,cljs.core.clone_and_set.call(null,this__8488.arr,(2 * idx__8491),null,((2 * idx__8491) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8498,val_or_node__8499,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8501 = this;
var inode__8502 = this;
var bit__8503 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8501.bitmap & bit__8503) === 0))
{return not_found;
} else
{var idx__8504 = cljs.core.bitmap_indexed_node_index.call(null,this__8501.bitmap,bit__8503);
var key_or_nil__8505 = (this__8501.arr[(2 * idx__8504)]);
var val_or_node__8506 = (this__8501.arr[((2 * idx__8504) + 1)]);
if((key_or_nil__8505 == null))
{return val_or_node__8506.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8505))
{return val_or_node__8506;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8522 = array_node.arr;
var len__8523 = (2 * (array_node.cnt - 1));
var new_arr__8524 = cljs.core.make_array.call(null,len__8523);
var i__8525 = 0;
var j__8526 = 1;
var bitmap__8527 = 0;
while(true){
if((i__8525 < len__8523))
{if((function (){var and__3822__auto____8528 = !((i__8525 === idx));
if(and__3822__auto____8528)
{return !(((arr__8522[i__8525]) == null));
} else
{return and__3822__auto____8528;
}
})())
{(new_arr__8524[j__8526] = (arr__8522[i__8525]));
{
var G__8529 = (i__8525 + 1);
var G__8530 = (j__8526 + 2);
var G__8531 = (bitmap__8527 | (1 << i__8525));
i__8525 = G__8529;
j__8526 = G__8530;
bitmap__8527 = G__8531;
continue;
}
} else
{{
var G__8532 = (i__8525 + 1);
var G__8533 = j__8526;
var G__8534 = bitmap__8527;
i__8525 = G__8532;
j__8526 = G__8533;
bitmap__8527 = G__8534;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8527,new_arr__8524));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8535 = this;
var inode__8536 = this;
var idx__8537 = ((hash >>> shift) & 0x01f);
var node__8538 = (this__8535.arr[idx__8537]);
if((node__8538 == null))
{var editable__8539 = cljs.core.edit_and_set.call(null,inode__8536,edit,idx__8537,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8539.cnt = (editable__8539.cnt + 1);
return editable__8539;
} else
{var n__8540 = node__8538.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8540 === node__8538))
{return inode__8536;
} else
{return cljs.core.edit_and_set.call(null,inode__8536,edit,idx__8537,n__8540);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8541 = this;
var inode__8542 = this;
return cljs.core.create_array_node_seq.call(null,this__8541.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8543 = this;
var inode__8544 = this;
var idx__8545 = ((hash >>> shift) & 0x01f);
var node__8546 = (this__8543.arr[idx__8545]);
if((node__8546 == null))
{return inode__8544;
} else
{var n__8547 = node__8546.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8547 === node__8546))
{return inode__8544;
} else
{if((n__8547 == null))
{if((this__8543.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8544,edit,idx__8545);
} else
{var editable__8548 = cljs.core.edit_and_set.call(null,inode__8544,edit,idx__8545,n__8547);
editable__8548.cnt = (editable__8548.cnt - 1);
return editable__8548;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8544,edit,idx__8545,n__8547);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8549 = this;
var inode__8550 = this;
if((e === this__8549.edit))
{return inode__8550;
} else
{return (new cljs.core.ArrayNode(e,this__8549.cnt,this__8549.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8551 = this;
var inode__8552 = this;
var len__8553 = this__8551.arr.length;
var i__8554 = 0;
var init__8555 = init;
while(true){
if((i__8554 < len__8553))
{var node__8556 = (this__8551.arr[i__8554]);
if(!((node__8556 == null)))
{var init__8557 = node__8556.kv_reduce(f,init__8555);
if(cljs.core.reduced_QMARK_.call(null,init__8557))
{return cljs.core.deref.call(null,init__8557);
} else
{{
var G__8576 = (i__8554 + 1);
var G__8577 = init__8557;
i__8554 = G__8576;
init__8555 = G__8577;
continue;
}
}
} else
{return null;
}
} else
{return init__8555;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8558 = this;
var inode__8559 = this;
var idx__8560 = ((hash >>> shift) & 0x01f);
var node__8561 = (this__8558.arr[idx__8560]);
if(!((node__8561 == null)))
{return node__8561.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8562 = this;
var inode__8563 = this;
var idx__8564 = ((hash >>> shift) & 0x01f);
var node__8565 = (this__8562.arr[idx__8564]);
if(!((node__8565 == null)))
{var n__8566 = node__8565.inode_without((shift + 5),hash,key);
if((n__8566 === node__8565))
{return inode__8563;
} else
{if((n__8566 == null))
{if((this__8562.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8563,null,idx__8564);
} else
{return (new cljs.core.ArrayNode(null,(this__8562.cnt - 1),cljs.core.clone_and_set.call(null,this__8562.arr,idx__8564,n__8566)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8562.cnt,cljs.core.clone_and_set.call(null,this__8562.arr,idx__8564,n__8566)));
} else
{return null;
}
}
}
} else
{return inode__8563;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8567 = this;
var inode__8568 = this;
var idx__8569 = ((hash >>> shift) & 0x01f);
var node__8570 = (this__8567.arr[idx__8569]);
if((node__8570 == null))
{return (new cljs.core.ArrayNode(null,(this__8567.cnt + 1),cljs.core.clone_and_set.call(null,this__8567.arr,idx__8569,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8571 = node__8570.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8571 === node__8570))
{return inode__8568;
} else
{return (new cljs.core.ArrayNode(null,this__8567.cnt,cljs.core.clone_and_set.call(null,this__8567.arr,idx__8569,n__8571)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8572 = this;
var inode__8573 = this;
var idx__8574 = ((hash >>> shift) & 0x01f);
var node__8575 = (this__8572.arr[idx__8574]);
if(!((node__8575 == null)))
{return node__8575.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8580 = (2 * cnt);
var i__8581 = 0;
while(true){
if((i__8581 < lim__8580))
{if(cljs.core.key_test.call(null,key,(arr[i__8581])))
{return i__8581;
} else
{{
var G__8582 = (i__8581 + 2);
i__8581 = G__8582;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8583 = this;
var inode__8584 = this;
if((hash === this__8583.collision_hash))
{var idx__8585 = cljs.core.hash_collision_node_find_index.call(null,this__8583.arr,this__8583.cnt,key);
if((idx__8585 === -1))
{if((this__8583.arr.length > (2 * this__8583.cnt)))
{var editable__8586 = cljs.core.edit_and_set.call(null,inode__8584,edit,(2 * this__8583.cnt),key,((2 * this__8583.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8586.cnt = (editable__8586.cnt + 1);
return editable__8586;
} else
{var len__8587 = this__8583.arr.length;
var new_arr__8588 = cljs.core.make_array.call(null,(len__8587 + 2));
cljs.core.array_copy.call(null,this__8583.arr,0,new_arr__8588,0,len__8587);
(new_arr__8588[len__8587] = key);
(new_arr__8588[(len__8587 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8584.ensure_editable_array(edit,(this__8583.cnt + 1),new_arr__8588);
}
} else
{if(((this__8583.arr[(idx__8585 + 1)]) === val))
{return inode__8584;
} else
{return cljs.core.edit_and_set.call(null,inode__8584,edit,(idx__8585 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8583.collision_hash >>> shift) & 0x01f)),[null,inode__8584,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8589 = this;
var inode__8590 = this;
return cljs.core.create_inode_seq.call(null,this__8589.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8591 = this;
var inode__8592 = this;
var idx__8593 = cljs.core.hash_collision_node_find_index.call(null,this__8591.arr,this__8591.cnt,key);
if((idx__8593 === -1))
{return inode__8592;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8591.cnt === 1))
{return null;
} else
{var editable__8594 = inode__8592.ensure_editable(edit);
var earr__8595 = editable__8594.arr;
(earr__8595[idx__8593] = (earr__8595[((2 * this__8591.cnt) - 2)]));
(earr__8595[(idx__8593 + 1)] = (earr__8595[((2 * this__8591.cnt) - 1)]));
(earr__8595[((2 * this__8591.cnt) - 1)] = null);
(earr__8595[((2 * this__8591.cnt) - 2)] = null);
editable__8594.cnt = (editable__8594.cnt - 1);
return editable__8594;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8596 = this;
var inode__8597 = this;
if((e === this__8596.edit))
{return inode__8597;
} else
{var new_arr__8598 = cljs.core.make_array.call(null,(2 * (this__8596.cnt + 1)));
cljs.core.array_copy.call(null,this__8596.arr,0,new_arr__8598,0,(2 * this__8596.cnt));
return (new cljs.core.HashCollisionNode(e,this__8596.collision_hash,this__8596.cnt,new_arr__8598));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8599 = this;
var inode__8600 = this;
return cljs.core.inode_kv_reduce.call(null,this__8599.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8601 = this;
var inode__8602 = this;
var idx__8603 = cljs.core.hash_collision_node_find_index.call(null,this__8601.arr,this__8601.cnt,key);
if((idx__8603 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8601.arr[idx__8603])))
{return cljs.core.PersistentVector.fromArray([(this__8601.arr[idx__8603]),(this__8601.arr[(idx__8603 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8604 = this;
var inode__8605 = this;
var idx__8606 = cljs.core.hash_collision_node_find_index.call(null,this__8604.arr,this__8604.cnt,key);
if((idx__8606 === -1))
{return inode__8605;
} else
{if((this__8604.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8604.collision_hash,(this__8604.cnt - 1),cljs.core.remove_pair.call(null,this__8604.arr,cljs.core.quot.call(null,idx__8606,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8607 = this;
var inode__8608 = this;
if((hash === this__8607.collision_hash))
{var idx__8609 = cljs.core.hash_collision_node_find_index.call(null,this__8607.arr,this__8607.cnt,key);
if((idx__8609 === -1))
{var len__8610 = this__8607.arr.length;
var new_arr__8611 = cljs.core.make_array.call(null,(len__8610 + 2));
cljs.core.array_copy.call(null,this__8607.arr,0,new_arr__8611,0,len__8610);
(new_arr__8611[len__8610] = key);
(new_arr__8611[(len__8610 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8607.collision_hash,(this__8607.cnt + 1),new_arr__8611));
} else
{if(cljs.core._EQ_.call(null,(this__8607.arr[idx__8609]),val))
{return inode__8608;
} else
{return (new cljs.core.HashCollisionNode(null,this__8607.collision_hash,this__8607.cnt,cljs.core.clone_and_set.call(null,this__8607.arr,(idx__8609 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8607.collision_hash >>> shift) & 0x01f)),[null,inode__8608])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8612 = this;
var inode__8613 = this;
var idx__8614 = cljs.core.hash_collision_node_find_index.call(null,this__8612.arr,this__8612.cnt,key);
if((idx__8614 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8612.arr[idx__8614])))
{return (this__8612.arr[(idx__8614 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__8615 = this;
var inode__8616 = this;
if((e === this__8615.edit))
{this__8615.arr = array;
this__8615.cnt = count;
return inode__8616;
} else
{return (new cljs.core.HashCollisionNode(this__8615.edit,this__8615.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8621 = cljs.core.hash.call(null,key1);
if((key1hash__8621 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8621,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8622 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8621,key1,val1,added_leaf_QMARK___8622).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8622);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8623 = cljs.core.hash.call(null,key1);
if((key1hash__8623 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8623,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8624 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8623,key1,val1,added_leaf_QMARK___8624).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8624);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8625 = this;
var h__1852__auto____8626 = this__8625.__hash;
if(!((h__1852__auto____8626 == null)))
{return h__1852__auto____8626;
} else
{var h__1852__auto____8627 = cljs.core.hash_coll.call(null,coll);
this__8625.__hash = h__1852__auto____8627;
return h__1852__auto____8627;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8628 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8629 = this;
var this__8630 = this;
return cljs.core.pr_str.call(null,this__8630);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8631 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8632 = this;
if((this__8632.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8632.nodes[this__8632.i]),(this__8632.nodes[(this__8632.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8632.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8633 = this;
if((this__8633.s == null))
{return cljs.core.create_inode_seq.call(null,this__8633.nodes,(this__8633.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8633.nodes,this__8633.i,cljs.core.next.call(null,this__8633.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8634 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8635 = this;
return (new cljs.core.NodeSeq(meta,this__8635.nodes,this__8635.i,this__8635.s,this__8635.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8636 = this;
return this__8636.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8637 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8637.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8644 = nodes.length;
var j__8645 = i;
while(true){
if((j__8645 < len__8644))
{if(!(((nodes[j__8645]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8645,null,null));
} else
{var temp__3971__auto____8646 = (nodes[(j__8645 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8646))
{var node__8647 = temp__3971__auto____8646;
var temp__3971__auto____8648 = node__8647.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8648))
{var node_seq__8649 = temp__3971__auto____8648;
return (new cljs.core.NodeSeq(null,nodes,(j__8645 + 2),node_seq__8649,null));
} else
{{
var G__8650 = (j__8645 + 2);
j__8645 = G__8650;
continue;
}
}
} else
{{
var G__8651 = (j__8645 + 2);
j__8645 = G__8651;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8652 = this;
var h__1852__auto____8653 = this__8652.__hash;
if(!((h__1852__auto____8653 == null)))
{return h__1852__auto____8653;
} else
{var h__1852__auto____8654 = cljs.core.hash_coll.call(null,coll);
this__8652.__hash = h__1852__auto____8654;
return h__1852__auto____8654;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8655 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8656 = this;
var this__8657 = this;
return cljs.core.pr_str.call(null,this__8657);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8658 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8659 = this;
return cljs.core.first.call(null,this__8659.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8660 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8660.nodes,this__8660.i,cljs.core.next.call(null,this__8660.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8661 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8662 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8662.nodes,this__8662.i,this__8662.s,this__8662.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8663 = this;
return this__8663.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8664 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8664.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8671 = nodes.length;
var j__8672 = i;
while(true){
if((j__8672 < len__8671))
{var temp__3971__auto____8673 = (nodes[j__8672]);
if(cljs.core.truth_(temp__3971__auto____8673))
{var nj__8674 = temp__3971__auto____8673;
var temp__3971__auto____8675 = nj__8674.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8675))
{var ns__8676 = temp__3971__auto____8675;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8672 + 1),ns__8676,null));
} else
{{
var G__8677 = (j__8672 + 1);
j__8672 = G__8677;
continue;
}
}
} else
{{
var G__8678 = (j__8672 + 1);
j__8672 = G__8678;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8681 = this;
return (new cljs.core.TransientHashMap({},this__8681.root,this__8681.cnt,this__8681.has_nil_QMARK_,this__8681.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8682 = this;
var h__1852__auto____8683 = this__8682.__hash;
if(!((h__1852__auto____8683 == null)))
{return h__1852__auto____8683;
} else
{var h__1852__auto____8684 = cljs.core.hash_imap.call(null,coll);
this__8682.__hash = h__1852__auto____8684;
return h__1852__auto____8684;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8685 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8686 = this;
if((k == null))
{if(this__8686.has_nil_QMARK_)
{return this__8686.nil_val;
} else
{return not_found;
}
} else
{if((this__8686.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8686.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8687 = this;
if((k == null))
{if((function (){var and__3822__auto____8688 = this__8687.has_nil_QMARK_;
if(and__3822__auto____8688)
{return (v === this__8687.nil_val);
} else
{return and__3822__auto____8688;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8687.meta,((this__8687.has_nil_QMARK_)?this__8687.cnt:(this__8687.cnt + 1)),this__8687.root,true,v,null));
}
} else
{var added_leaf_QMARK___8689 = (new cljs.core.Box(false));
var new_root__8690 = (((this__8687.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8687.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8689);
if((new_root__8690 === this__8687.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8687.meta,((added_leaf_QMARK___8689.val)?(this__8687.cnt + 1):this__8687.cnt),new_root__8690,this__8687.has_nil_QMARK_,this__8687.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8691 = this;
if((k == null))
{return this__8691.has_nil_QMARK_;
} else
{if((this__8691.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8691.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8714 = null;
var G__8714__2 = (function (this_sym8692,k){
var this__8694 = this;
var this_sym8692__8695 = this;
var coll__8696 = this_sym8692__8695;
return coll__8696.cljs$core$ILookup$_lookup$arity$2(coll__8696,k);
});
var G__8714__3 = (function (this_sym8693,k,not_found){
var this__8694 = this;
var this_sym8693__8697 = this;
var coll__8698 = this_sym8693__8697;
return coll__8698.cljs$core$ILookup$_lookup$arity$3(coll__8698,k,not_found);
});
G__8714 = function(this_sym8693,k,not_found){
switch(arguments.length){
case 2:
return G__8714__2.call(this,this_sym8693,k);
case 3:
return G__8714__3.call(this,this_sym8693,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8714;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8679,args8680){
var this__8699 = this;
return this_sym8679.call.apply(this_sym8679,[this_sym8679].concat(args8680.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8700 = this;
var init__8701 = ((this__8700.has_nil_QMARK_)?f.call(null,init,null,this__8700.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8701))
{return cljs.core.deref.call(null,init__8701);
} else
{if(!((this__8700.root == null)))
{return this__8700.root.kv_reduce(f,init__8701);
} else
{if("\uFDD0'else")
{return init__8701;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8702 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8703 = this;
var this__8704 = this;
return cljs.core.pr_str.call(null,this__8704);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8705 = this;
if((this__8705.cnt > 0))
{var s__8706 = ((!((this__8705.root == null)))?this__8705.root.inode_seq():null);
if(this__8705.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8705.nil_val], true),s__8706);
} else
{return s__8706;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8707 = this;
return this__8707.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8708 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8709 = this;
return (new cljs.core.PersistentHashMap(meta,this__8709.cnt,this__8709.root,this__8709.has_nil_QMARK_,this__8709.nil_val,this__8709.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8710 = this;
return this__8710.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8711 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8711.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8712 = this;
if((k == null))
{if(this__8712.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8712.meta,(this__8712.cnt - 1),this__8712.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8712.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8713 = this__8712.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8713 === this__8712.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8712.meta,(this__8712.cnt - 1),new_root__8713,this__8712.has_nil_QMARK_,this__8712.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__8715 = ks.length;
var i__8716 = 0;
var out__8717 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8716 < len__8715))
{{
var G__8718 = (i__8716 + 1);
var G__8719 = cljs.core.assoc_BANG_.call(null,out__8717,(ks[i__8716]),(vs[i__8716]));
i__8716 = G__8718;
out__8717 = G__8719;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8717);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8720 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8721 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8722 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8723 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8724 = this;
if((k == null))
{if(this__8724.has_nil_QMARK_)
{return this__8724.nil_val;
} else
{return null;
}
} else
{if((this__8724.root == null))
{return null;
} else
{return this__8724.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8725 = this;
if((k == null))
{if(this__8725.has_nil_QMARK_)
{return this__8725.nil_val;
} else
{return not_found;
}
} else
{if((this__8725.root == null))
{return not_found;
} else
{return this__8725.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8726 = this;
if(this__8726.edit)
{return this__8726.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8727 = this;
var tcoll__8728 = this;
if(this__8727.edit)
{if((function (){var G__8729__8730 = o;
if(G__8729__8730)
{if((function (){var or__3824__auto____8731 = (G__8729__8730.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8731)
{return or__3824__auto____8731;
} else
{return G__8729__8730.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8729__8730.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8729__8730);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8729__8730);
}
})())
{return tcoll__8728.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8732 = cljs.core.seq.call(null,o);
var tcoll__8733 = tcoll__8728;
while(true){
var temp__3971__auto____8734 = cljs.core.first.call(null,es__8732);
if(cljs.core.truth_(temp__3971__auto____8734))
{var e__8735 = temp__3971__auto____8734;
{
var G__8746 = cljs.core.next.call(null,es__8732);
var G__8747 = tcoll__8733.assoc_BANG_(cljs.core.key.call(null,e__8735),cljs.core.val.call(null,e__8735));
es__8732 = G__8746;
tcoll__8733 = G__8747;
continue;
}
} else
{return tcoll__8733;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8736 = this;
var tcoll__8737 = this;
if(this__8736.edit)
{if((k == null))
{if((this__8736.nil_val === v))
{} else
{this__8736.nil_val = v;
}
if(this__8736.has_nil_QMARK_)
{} else
{this__8736.count = (this__8736.count + 1);
this__8736.has_nil_QMARK_ = true;
}
return tcoll__8737;
} else
{var added_leaf_QMARK___8738 = (new cljs.core.Box(false));
var node__8739 = (((this__8736.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8736.root).inode_assoc_BANG_(this__8736.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8738);
if((node__8739 === this__8736.root))
{} else
{this__8736.root = node__8739;
}
if(added_leaf_QMARK___8738.val)
{this__8736.count = (this__8736.count + 1);
} else
{}
return tcoll__8737;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8740 = this;
var tcoll__8741 = this;
if(this__8740.edit)
{if((k == null))
{if(this__8740.has_nil_QMARK_)
{this__8740.has_nil_QMARK_ = false;
this__8740.nil_val = null;
this__8740.count = (this__8740.count - 1);
return tcoll__8741;
} else
{return tcoll__8741;
}
} else
{if((this__8740.root == null))
{return tcoll__8741;
} else
{var removed_leaf_QMARK___8742 = (new cljs.core.Box(false));
var node__8743 = this__8740.root.inode_without_BANG_(this__8740.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8742);
if((node__8743 === this__8740.root))
{} else
{this__8740.root = node__8743;
}
if(cljs.core.truth_((removed_leaf_QMARK___8742[0])))
{this__8740.count = (this__8740.count - 1);
} else
{}
return tcoll__8741;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8744 = this;
var tcoll__8745 = this;
if(this__8744.edit)
{this__8744.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8744.count,this__8744.root,this__8744.has_nil_QMARK_,this__8744.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8750 = node;
var stack__8751 = stack;
while(true){
if(!((t__8750 == null)))
{{
var G__8752 = ((ascending_QMARK_)?t__8750.left:t__8750.right);
var G__8753 = cljs.core.conj.call(null,stack__8751,t__8750);
t__8750 = G__8752;
stack__8751 = G__8753;
continue;
}
} else
{return stack__8751;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8754 = this;
var h__1852__auto____8755 = this__8754.__hash;
if(!((h__1852__auto____8755 == null)))
{return h__1852__auto____8755;
} else
{var h__1852__auto____8756 = cljs.core.hash_coll.call(null,coll);
this__8754.__hash = h__1852__auto____8756;
return h__1852__auto____8756;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8757 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8758 = this;
var this__8759 = this;
return cljs.core.pr_str.call(null,this__8759);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8760 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8761 = this;
if((this__8761.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8761.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8762 = this;
return cljs.core.peek.call(null,this__8762.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8763 = this;
var t__8764 = cljs.core.first.call(null,this__8763.stack);
var next_stack__8765 = cljs.core.tree_map_seq_push.call(null,((this__8763.ascending_QMARK_)?t__8764.right:t__8764.left),cljs.core.next.call(null,this__8763.stack),this__8763.ascending_QMARK_);
if(!((next_stack__8765 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8765,this__8763.ascending_QMARK_,(this__8763.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8766 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8767 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8767.stack,this__8767.ascending_QMARK_,this__8767.cnt,this__8767.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8768 = this;
return this__8768.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____8770 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____8770)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8770;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____8772 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____8772)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8772;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__8776 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8776))
{return cljs.core.deref.call(null,init__8776);
} else
{var init__8777 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__8776):init__8776);
if(cljs.core.reduced_QMARK_.call(null,init__8777))
{return cljs.core.deref.call(null,init__8777);
} else
{var init__8778 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__8777):init__8777);
if(cljs.core.reduced_QMARK_.call(null,init__8778))
{return cljs.core.deref.call(null,init__8778);
} else
{return init__8778;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8781 = this;
var h__1852__auto____8782 = this__8781.__hash;
if(!((h__1852__auto____8782 == null)))
{return h__1852__auto____8782;
} else
{var h__1852__auto____8783 = cljs.core.hash_coll.call(null,coll);
this__8781.__hash = h__1852__auto____8783;
return h__1852__auto____8783;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8784 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8785 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8786 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8786.key,this__8786.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__8834 = null;
var G__8834__2 = (function (this_sym8787,k){
var this__8789 = this;
var this_sym8787__8790 = this;
var node__8791 = this_sym8787__8790;
return node__8791.cljs$core$ILookup$_lookup$arity$2(node__8791,k);
});
var G__8834__3 = (function (this_sym8788,k,not_found){
var this__8789 = this;
var this_sym8788__8792 = this;
var node__8793 = this_sym8788__8792;
return node__8793.cljs$core$ILookup$_lookup$arity$3(node__8793,k,not_found);
});
G__8834 = function(this_sym8788,k,not_found){
switch(arguments.length){
case 2:
return G__8834__2.call(this,this_sym8788,k);
case 3:
return G__8834__3.call(this,this_sym8788,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8834;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym8779,args8780){
var this__8794 = this;
return this_sym8779.call.apply(this_sym8779,[this_sym8779].concat(args8780.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8795 = this;
return cljs.core.PersistentVector.fromArray([this__8795.key,this__8795.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8796 = this;
return this__8796.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8797 = this;
return this__8797.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8798 = this;
var node__8799 = this;
return ins.balance_right(node__8799);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8800 = this;
var node__8801 = this;
return (new cljs.core.RedNode(this__8800.key,this__8800.val,this__8800.left,this__8800.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8802 = this;
var node__8803 = this;
return cljs.core.balance_right_del.call(null,this__8802.key,this__8802.val,this__8802.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8804 = this;
var node__8805 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8806 = this;
var node__8807 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8807,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8808 = this;
var node__8809 = this;
return cljs.core.balance_left_del.call(null,this__8808.key,this__8808.val,del,this__8808.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8810 = this;
var node__8811 = this;
return ins.balance_left(node__8811);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8812 = this;
var node__8813 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8813,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8835 = null;
var G__8835__0 = (function (){
var this__8814 = this;
var this__8816 = this;
return cljs.core.pr_str.call(null,this__8816);
});
G__8835 = function(){
switch(arguments.length){
case 0:
return G__8835__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8835;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8817 = this;
var node__8818 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8818,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8819 = this;
var node__8820 = this;
return node__8820;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8821 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8822 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8823 = this;
return cljs.core.list.call(null,this__8823.key,this__8823.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8824 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8825 = this;
return this__8825.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8826 = this;
return cljs.core.PersistentVector.fromArray([this__8826.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8827 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8827.key,this__8827.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8828 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8829 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8829.key,this__8829.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8830 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8831 = this;
if((n === 0))
{return this__8831.key;
} else
{if((n === 1))
{return this__8831.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8832 = this;
if((n === 0))
{return this__8832.key;
} else
{if((n === 1))
{return this__8832.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8833 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8838 = this;
var h__1852__auto____8839 = this__8838.__hash;
if(!((h__1852__auto____8839 == null)))
{return h__1852__auto____8839;
} else
{var h__1852__auto____8840 = cljs.core.hash_coll.call(null,coll);
this__8838.__hash = h__1852__auto____8840;
return h__1852__auto____8840;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8841 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8842 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8843 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8843.key,this__8843.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__8891 = null;
var G__8891__2 = (function (this_sym8844,k){
var this__8846 = this;
var this_sym8844__8847 = this;
var node__8848 = this_sym8844__8847;
return node__8848.cljs$core$ILookup$_lookup$arity$2(node__8848,k);
});
var G__8891__3 = (function (this_sym8845,k,not_found){
var this__8846 = this;
var this_sym8845__8849 = this;
var node__8850 = this_sym8845__8849;
return node__8850.cljs$core$ILookup$_lookup$arity$3(node__8850,k,not_found);
});
G__8891 = function(this_sym8845,k,not_found){
switch(arguments.length){
case 2:
return G__8891__2.call(this,this_sym8845,k);
case 3:
return G__8891__3.call(this,this_sym8845,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8891;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym8836,args8837){
var this__8851 = this;
return this_sym8836.call.apply(this_sym8836,[this_sym8836].concat(args8837.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8852 = this;
return cljs.core.PersistentVector.fromArray([this__8852.key,this__8852.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8853 = this;
return this__8853.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8854 = this;
return this__8854.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8855 = this;
var node__8856 = this;
return (new cljs.core.RedNode(this__8855.key,this__8855.val,this__8855.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8857 = this;
var node__8858 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8859 = this;
var node__8860 = this;
return (new cljs.core.RedNode(this__8859.key,this__8859.val,this__8859.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8861 = this;
var node__8862 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8863 = this;
var node__8864 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8864,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8865 = this;
var node__8866 = this;
return (new cljs.core.RedNode(this__8865.key,this__8865.val,del,this__8865.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8867 = this;
var node__8868 = this;
return (new cljs.core.RedNode(this__8867.key,this__8867.val,ins,this__8867.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8869 = this;
var node__8870 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8869.left))
{return (new cljs.core.RedNode(this__8869.key,this__8869.val,this__8869.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8869.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8869.right))
{return (new cljs.core.RedNode(this__8869.right.key,this__8869.right.val,(new cljs.core.BlackNode(this__8869.key,this__8869.val,this__8869.left,this__8869.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8869.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8870,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__8892 = null;
var G__8892__0 = (function (){
var this__8871 = this;
var this__8873 = this;
return cljs.core.pr_str.call(null,this__8873);
});
G__8892 = function(){
switch(arguments.length){
case 0:
return G__8892__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8892;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8874 = this;
var node__8875 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8874.right))
{return (new cljs.core.RedNode(this__8874.key,this__8874.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8874.left,null)),this__8874.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8874.left))
{return (new cljs.core.RedNode(this__8874.left.key,this__8874.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8874.left.left,null)),(new cljs.core.BlackNode(this__8874.key,this__8874.val,this__8874.left.right,this__8874.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8875,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8876 = this;
var node__8877 = this;
return (new cljs.core.BlackNode(this__8876.key,this__8876.val,this__8876.left,this__8876.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8878 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8879 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8880 = this;
return cljs.core.list.call(null,this__8880.key,this__8880.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8881 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8882 = this;
return this__8882.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8883 = this;
return cljs.core.PersistentVector.fromArray([this__8883.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8884 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8884.key,this__8884.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8885 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8886 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8886.key,this__8886.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8887 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8888 = this;
if((n === 0))
{return this__8888.key;
} else
{if((n === 1))
{return this__8888.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8889 = this;
if((n === 0))
{return this__8889.key;
} else
{if((n === 1))
{return this__8889.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8890 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__8896 = comp.call(null,k,tree.key);
if((c__8896 === 0))
{(found[0] = tree);
return null;
} else
{if((c__8896 < 0))
{var ins__8897 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__8897 == null)))
{return tree.add_left(ins__8897);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__8898 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__8898 == null)))
{return tree.add_right(ins__8898);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__8901 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8901))
{return (new cljs.core.RedNode(app__8901.key,app__8901.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__8901.left,null)),(new cljs.core.RedNode(right.key,right.val,app__8901.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__8901,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__8902 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8902))
{return (new cljs.core.RedNode(app__8902.key,app__8902.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__8902.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__8902.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__8902,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__8908 = comp.call(null,k,tree.key);
if((c__8908 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__8908 < 0))
{var del__8909 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____8910 = !((del__8909 == null));
if(or__3824__auto____8910)
{return or__3824__auto____8910;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__8909,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__8909,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__8911 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____8912 = !((del__8911 == null));
if(or__3824__auto____8912)
{return or__3824__auto____8912;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__8911);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__8911,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__8915 = tree.key;
var c__8916 = comp.call(null,k,tk__8915);
if((c__8916 === 0))
{return tree.replace(tk__8915,v,tree.left,tree.right);
} else
{if((c__8916 < 0))
{return tree.replace(tk__8915,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__8915,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8919 = this;
var h__1852__auto____8920 = this__8919.__hash;
if(!((h__1852__auto____8920 == null)))
{return h__1852__auto____8920;
} else
{var h__1852__auto____8921 = cljs.core.hash_imap.call(null,coll);
this__8919.__hash = h__1852__auto____8921;
return h__1852__auto____8921;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8922 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8923 = this;
var n__8924 = coll.entry_at(k);
if(!((n__8924 == null)))
{return n__8924.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8925 = this;
var found__8926 = [null];
var t__8927 = cljs.core.tree_map_add.call(null,this__8925.comp,this__8925.tree,k,v,found__8926);
if((t__8927 == null))
{var found_node__8928 = cljs.core.nth.call(null,found__8926,0);
if(cljs.core._EQ_.call(null,v,found_node__8928.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8925.comp,cljs.core.tree_map_replace.call(null,this__8925.comp,this__8925.tree,k,v),this__8925.cnt,this__8925.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8925.comp,t__8927.blacken(),(this__8925.cnt + 1),this__8925.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8929 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8963 = null;
var G__8963__2 = (function (this_sym8930,k){
var this__8932 = this;
var this_sym8930__8933 = this;
var coll__8934 = this_sym8930__8933;
return coll__8934.cljs$core$ILookup$_lookup$arity$2(coll__8934,k);
});
var G__8963__3 = (function (this_sym8931,k,not_found){
var this__8932 = this;
var this_sym8931__8935 = this;
var coll__8936 = this_sym8931__8935;
return coll__8936.cljs$core$ILookup$_lookup$arity$3(coll__8936,k,not_found);
});
G__8963 = function(this_sym8931,k,not_found){
switch(arguments.length){
case 2:
return G__8963__2.call(this,this_sym8931,k);
case 3:
return G__8963__3.call(this,this_sym8931,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8963;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym8917,args8918){
var this__8937 = this;
return this_sym8917.call.apply(this_sym8917,[this_sym8917].concat(args8918.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8938 = this;
if(!((this__8938.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__8938.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8939 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8940 = this;
if((this__8940.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8940.tree,false,this__8940.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__8941 = this;
var this__8942 = this;
return cljs.core.pr_str.call(null,this__8942);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__8943 = this;
var coll__8944 = this;
var t__8945 = this__8943.tree;
while(true){
if(!((t__8945 == null)))
{var c__8946 = this__8943.comp.call(null,k,t__8945.key);
if((c__8946 === 0))
{return t__8945;
} else
{if((c__8946 < 0))
{{
var G__8964 = t__8945.left;
t__8945 = G__8964;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__8965 = t__8945.right;
t__8945 = G__8965;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8947 = this;
if((this__8947.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8947.tree,ascending_QMARK_,this__8947.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8948 = this;
if((this__8948.cnt > 0))
{var stack__8949 = null;
var t__8950 = this__8948.tree;
while(true){
if(!((t__8950 == null)))
{var c__8951 = this__8948.comp.call(null,k,t__8950.key);
if((c__8951 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__8949,t__8950),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__8951 < 0))
{{
var G__8966 = cljs.core.conj.call(null,stack__8949,t__8950);
var G__8967 = t__8950.left;
stack__8949 = G__8966;
t__8950 = G__8967;
continue;
}
} else
{{
var G__8968 = stack__8949;
var G__8969 = t__8950.right;
stack__8949 = G__8968;
t__8950 = G__8969;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__8951 > 0))
{{
var G__8970 = cljs.core.conj.call(null,stack__8949,t__8950);
var G__8971 = t__8950.right;
stack__8949 = G__8970;
t__8950 = G__8971;
continue;
}
} else
{{
var G__8972 = stack__8949;
var G__8973 = t__8950.left;
stack__8949 = G__8972;
t__8950 = G__8973;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__8949 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__8949,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8952 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8953 = this;
return this__8953.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8954 = this;
if((this__8954.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8954.tree,true,this__8954.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8955 = this;
return this__8955.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8956 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8957 = this;
return (new cljs.core.PersistentTreeMap(this__8957.comp,this__8957.tree,this__8957.cnt,meta,this__8957.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8958 = this;
return this__8958.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8959 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__8959.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8960 = this;
var found__8961 = [null];
var t__8962 = cljs.core.tree_map_remove.call(null,this__8960.comp,this__8960.tree,k,found__8961);
if((t__8962 == null))
{if((cljs.core.nth.call(null,found__8961,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8960.comp,null,0,this__8960.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8960.comp,t__8962.blacken(),(this__8960.cnt - 1),this__8960.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__8976 = cljs.core.seq.call(null,keyvals);
var out__8977 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__8976)
{{
var G__8978 = cljs.core.nnext.call(null,in__8976);
var G__8979 = cljs.core.assoc_BANG_.call(null,out__8977,cljs.core.first.call(null,in__8976),cljs.core.second.call(null,in__8976));
in__8976 = G__8978;
out__8977 = G__8979;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8977);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__8980){
var keyvals = cljs.core.seq(arglist__8980);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__8981){
var keyvals = cljs.core.seq(arglist__8981);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__8985 = [];
var obj__8986 = {};
var kvs__8987 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__8987)
{ks__8985.push(cljs.core.first.call(null,kvs__8987));
(obj__8986[cljs.core.first.call(null,kvs__8987)] = cljs.core.second.call(null,kvs__8987));
{
var G__8988 = cljs.core.nnext.call(null,kvs__8987);
kvs__8987 = G__8988;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__8985,obj__8986);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__8989){
var keyvals = cljs.core.seq(arglist__8989);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__8992 = cljs.core.seq.call(null,keyvals);
var out__8993 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__8992)
{{
var G__8994 = cljs.core.nnext.call(null,in__8992);
var G__8995 = cljs.core.assoc.call(null,out__8993,cljs.core.first.call(null,in__8992),cljs.core.second.call(null,in__8992));
in__8992 = G__8994;
out__8993 = G__8995;
continue;
}
} else
{return out__8993;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__8996){
var keyvals = cljs.core.seq(arglist__8996);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__8999 = cljs.core.seq.call(null,keyvals);
var out__9000 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__8999)
{{
var G__9001 = cljs.core.nnext.call(null,in__8999);
var G__9002 = cljs.core.assoc.call(null,out__9000,cljs.core.first.call(null,in__8999),cljs.core.second.call(null,in__8999));
in__8999 = G__9001;
out__9000 = G__9002;
continue;
}
} else
{return out__9000;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9003){
var comparator = cljs.core.first(arglist__9003);
var keyvals = cljs.core.rest(arglist__9003);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9004_SHARP_,p2__9005_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9007 = p1__9004_SHARP_;
if(cljs.core.truth_(or__3824__auto____9007))
{return or__3824__auto____9007;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9005_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9008){
var maps = cljs.core.seq(arglist__9008);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9016 = (function (m,e){
var k__9014 = cljs.core.first.call(null,e);
var v__9015 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9014))
{return cljs.core.assoc.call(null,m,k__9014,f.call(null,cljs.core._lookup.call(null,m,k__9014,null),v__9015));
} else
{return cljs.core.assoc.call(null,m,k__9014,v__9015);
}
});
var merge2__9018 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9016,(function (){var or__3824__auto____9017 = m1;
if(cljs.core.truth_(or__3824__auto____9017))
{return or__3824__auto____9017;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9018,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9019){
var f = cljs.core.first(arglist__9019);
var maps = cljs.core.rest(arglist__9019);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9024 = cljs.core.ObjMap.EMPTY;
var keys__9025 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9025)
{var key__9026 = cljs.core.first.call(null,keys__9025);
var entry__9027 = cljs.core._lookup.call(null,map,key__9026,"\uFDD0'cljs.core/not-found");
{
var G__9028 = ((cljs.core.not_EQ_.call(null,entry__9027,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9024,key__9026,entry__9027):ret__9024);
var G__9029 = cljs.core.next.call(null,keys__9025);
ret__9024 = G__9028;
keys__9025 = G__9029;
continue;
}
} else
{return ret__9024;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9033 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9033.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9034 = this;
var h__1852__auto____9035 = this__9034.__hash;
if(!((h__1852__auto____9035 == null)))
{return h__1852__auto____9035;
} else
{var h__1852__auto____9036 = cljs.core.hash_iset.call(null,coll);
this__9034.__hash = h__1852__auto____9036;
return h__1852__auto____9036;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9037 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9038 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9038.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9059 = null;
var G__9059__2 = (function (this_sym9039,k){
var this__9041 = this;
var this_sym9039__9042 = this;
var coll__9043 = this_sym9039__9042;
return coll__9043.cljs$core$ILookup$_lookup$arity$2(coll__9043,k);
});
var G__9059__3 = (function (this_sym9040,k,not_found){
var this__9041 = this;
var this_sym9040__9044 = this;
var coll__9045 = this_sym9040__9044;
return coll__9045.cljs$core$ILookup$_lookup$arity$3(coll__9045,k,not_found);
});
G__9059 = function(this_sym9040,k,not_found){
switch(arguments.length){
case 2:
return G__9059__2.call(this,this_sym9040,k);
case 3:
return G__9059__3.call(this,this_sym9040,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9059;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9031,args9032){
var this__9046 = this;
return this_sym9031.call.apply(this_sym9031,[this_sym9031].concat(args9032.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9047 = this;
return (new cljs.core.PersistentHashSet(this__9047.meta,cljs.core.assoc.call(null,this__9047.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9048 = this;
var this__9049 = this;
return cljs.core.pr_str.call(null,this__9049);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9050 = this;
return cljs.core.keys.call(null,this__9050.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9051 = this;
return (new cljs.core.PersistentHashSet(this__9051.meta,cljs.core.dissoc.call(null,this__9051.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9052 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9053 = this;
var and__3822__auto____9054 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9054)
{var and__3822__auto____9055 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9055)
{return cljs.core.every_QMARK_.call(null,(function (p1__9030_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9030_SHARP_);
}),other);
} else
{return and__3822__auto____9055;
}
} else
{return and__3822__auto____9054;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9056 = this;
return (new cljs.core.PersistentHashSet(meta,this__9056.hash_map,this__9056.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9057 = this;
return this__9057.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9058 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9058.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9060 = cljs.core.count.call(null,items);
var i__9061 = 0;
var out__9062 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9061 < len__9060))
{{
var G__9063 = (i__9061 + 1);
var G__9064 = cljs.core.conj_BANG_.call(null,out__9062,(items[i__9061]));
i__9061 = G__9063;
out__9062 = G__9064;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9062);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9082 = null;
var G__9082__2 = (function (this_sym9068,k){
var this__9070 = this;
var this_sym9068__9071 = this;
var tcoll__9072 = this_sym9068__9071;
if((cljs.core._lookup.call(null,this__9070.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9082__3 = (function (this_sym9069,k,not_found){
var this__9070 = this;
var this_sym9069__9073 = this;
var tcoll__9074 = this_sym9069__9073;
if((cljs.core._lookup.call(null,this__9070.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9082 = function(this_sym9069,k,not_found){
switch(arguments.length){
case 2:
return G__9082__2.call(this,this_sym9069,k);
case 3:
return G__9082__3.call(this,this_sym9069,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9082;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9066,args9067){
var this__9075 = this;
return this_sym9066.call.apply(this_sym9066,[this_sym9066].concat(args9067.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9076 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9077 = this;
if((cljs.core._lookup.call(null,this__9077.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9078 = this;
return cljs.core.count.call(null,this__9078.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9079 = this;
this__9079.transient_map = cljs.core.dissoc_BANG_.call(null,this__9079.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9080 = this;
this__9080.transient_map = cljs.core.assoc_BANG_.call(null,this__9080.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9081 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9081.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9085 = this;
var h__1852__auto____9086 = this__9085.__hash;
if(!((h__1852__auto____9086 == null)))
{return h__1852__auto____9086;
} else
{var h__1852__auto____9087 = cljs.core.hash_iset.call(null,coll);
this__9085.__hash = h__1852__auto____9087;
return h__1852__auto____9087;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9088 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9089 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9089.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9115 = null;
var G__9115__2 = (function (this_sym9090,k){
var this__9092 = this;
var this_sym9090__9093 = this;
var coll__9094 = this_sym9090__9093;
return coll__9094.cljs$core$ILookup$_lookup$arity$2(coll__9094,k);
});
var G__9115__3 = (function (this_sym9091,k,not_found){
var this__9092 = this;
var this_sym9091__9095 = this;
var coll__9096 = this_sym9091__9095;
return coll__9096.cljs$core$ILookup$_lookup$arity$3(coll__9096,k,not_found);
});
G__9115 = function(this_sym9091,k,not_found){
switch(arguments.length){
case 2:
return G__9115__2.call(this,this_sym9091,k);
case 3:
return G__9115__3.call(this,this_sym9091,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9115;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9083,args9084){
var this__9097 = this;
return this_sym9083.call.apply(this_sym9083,[this_sym9083].concat(args9084.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9098 = this;
return (new cljs.core.PersistentTreeSet(this__9098.meta,cljs.core.assoc.call(null,this__9098.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9099 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9099.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9100 = this;
var this__9101 = this;
return cljs.core.pr_str.call(null,this__9101);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9102 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9102.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9103 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9103.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9104 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9105 = this;
return cljs.core._comparator.call(null,this__9105.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9106 = this;
return cljs.core.keys.call(null,this__9106.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9107 = this;
return (new cljs.core.PersistentTreeSet(this__9107.meta,cljs.core.dissoc.call(null,this__9107.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9108 = this;
return cljs.core.count.call(null,this__9108.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9109 = this;
var and__3822__auto____9110 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9110)
{var and__3822__auto____9111 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9111)
{return cljs.core.every_QMARK_.call(null,(function (p1__9065_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9065_SHARP_);
}),other);
} else
{return and__3822__auto____9111;
}
} else
{return and__3822__auto____9110;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9112 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9112.tree_map,this__9112.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9113 = this;
return this__9113.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9114 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9114.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9120__delegate = function (keys){
var in__9118 = cljs.core.seq.call(null,keys);
var out__9119 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9118))
{{
var G__9121 = cljs.core.next.call(null,in__9118);
var G__9122 = cljs.core.conj_BANG_.call(null,out__9119,cljs.core.first.call(null,in__9118));
in__9118 = G__9121;
out__9119 = G__9122;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9119);
}
break;
}
};
var G__9120 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9120__delegate.call(this, keys);
};
G__9120.cljs$lang$maxFixedArity = 0;
G__9120.cljs$lang$applyTo = (function (arglist__9123){
var keys = cljs.core.seq(arglist__9123);;
return G__9120__delegate(keys);
});
G__9120.cljs$lang$arity$variadic = G__9120__delegate;
return G__9120;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9124){
var keys = cljs.core.seq(arglist__9124);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9126){
var comparator = cljs.core.first(arglist__9126);
var keys = cljs.core.rest(arglist__9126);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9132 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9133 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9133))
{var e__9134 = temp__3971__auto____9133;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9134));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9132,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9125_SHARP_){
var temp__3971__auto____9135 = cljs.core.find.call(null,smap,p1__9125_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9135))
{var e__9136 = temp__3971__auto____9135;
return cljs.core.second.call(null,e__9136);
} else
{return p1__9125_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9166 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9159,seen){
while(true){
var vec__9160__9161 = p__9159;
var f__9162 = cljs.core.nth.call(null,vec__9160__9161,0,null);
var xs__9163 = vec__9160__9161;
var temp__3974__auto____9164 = cljs.core.seq.call(null,xs__9163);
if(temp__3974__auto____9164)
{var s__9165 = temp__3974__auto____9164;
if(cljs.core.contains_QMARK_.call(null,seen,f__9162))
{{
var G__9167 = cljs.core.rest.call(null,s__9165);
var G__9168 = seen;
p__9159 = G__9167;
seen = G__9168;
continue;
}
} else
{return cljs.core.cons.call(null,f__9162,step.call(null,cljs.core.rest.call(null,s__9165),cljs.core.conj.call(null,seen,f__9162)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9166.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9171 = cljs.core.PersistentVector.EMPTY;
var s__9172 = s;
while(true){
if(cljs.core.next.call(null,s__9172))
{{
var G__9173 = cljs.core.conj.call(null,ret__9171,cljs.core.first.call(null,s__9172));
var G__9174 = cljs.core.next.call(null,s__9172);
ret__9171 = G__9173;
s__9172 = G__9174;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9171);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9177 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9177)
{return or__3824__auto____9177;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9178 = x.lastIndexOf("/");
if((i__9178 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9178 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9181 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9181)
{return or__3824__auto____9181;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9182 = x.lastIndexOf("/");
if((i__9182 > -1))
{return cljs.core.subs.call(null,x,2,i__9182);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9189 = cljs.core.ObjMap.EMPTY;
var ks__9190 = cljs.core.seq.call(null,keys);
var vs__9191 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9192 = ks__9190;
if(and__3822__auto____9192)
{return vs__9191;
} else
{return and__3822__auto____9192;
}
})())
{{
var G__9193 = cljs.core.assoc.call(null,map__9189,cljs.core.first.call(null,ks__9190),cljs.core.first.call(null,vs__9191));
var G__9194 = cljs.core.next.call(null,ks__9190);
var G__9195 = cljs.core.next.call(null,vs__9191);
map__9189 = G__9193;
ks__9190 = G__9194;
vs__9191 = G__9195;
continue;
}
} else
{return map__9189;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9198__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9183_SHARP_,p2__9184_SHARP_){
return max_key.call(null,k,p1__9183_SHARP_,p2__9184_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9198 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9198__delegate.call(this, k, x, y, more);
};
G__9198.cljs$lang$maxFixedArity = 3;
G__9198.cljs$lang$applyTo = (function (arglist__9199){
var k = cljs.core.first(arglist__9199);
var x = cljs.core.first(cljs.core.next(arglist__9199));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9199)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9199)));
return G__9198__delegate(k, x, y, more);
});
G__9198.cljs$lang$arity$variadic = G__9198__delegate;
return G__9198;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9200__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9196_SHARP_,p2__9197_SHARP_){
return min_key.call(null,k,p1__9196_SHARP_,p2__9197_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9200 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9200__delegate.call(this, k, x, y, more);
};
G__9200.cljs$lang$maxFixedArity = 3;
G__9200.cljs$lang$applyTo = (function (arglist__9201){
var k = cljs.core.first(arglist__9201);
var x = cljs.core.first(cljs.core.next(arglist__9201));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9201)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9201)));
return G__9200__delegate(k, x, y, more);
});
G__9200.cljs$lang$arity$variadic = G__9200__delegate;
return G__9200;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9204 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9204)
{var s__9205 = temp__3974__auto____9204;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9205),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9205)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9208 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9208)
{var s__9209 = temp__3974__auto____9208;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9209))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9209),take_while.call(null,pred,cljs.core.rest.call(null,s__9209)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9211 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9211.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9223 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9224 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9224))
{var vec__9225__9226 = temp__3974__auto____9224;
var e__9227 = cljs.core.nth.call(null,vec__9225__9226,0,null);
var s__9228 = vec__9225__9226;
if(cljs.core.truth_(include__9223.call(null,e__9227)))
{return s__9228;
} else
{return cljs.core.next.call(null,s__9228);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9223,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9229 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9229))
{var vec__9230__9231 = temp__3974__auto____9229;
var e__9232 = cljs.core.nth.call(null,vec__9230__9231,0,null);
var s__9233 = vec__9230__9231;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9232))?s__9233:cljs.core.next.call(null,s__9233)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9245 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9246 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9246))
{var vec__9247__9248 = temp__3974__auto____9246;
var e__9249 = cljs.core.nth.call(null,vec__9247__9248,0,null);
var s__9250 = vec__9247__9248;
if(cljs.core.truth_(include__9245.call(null,e__9249)))
{return s__9250;
} else
{return cljs.core.next.call(null,s__9250);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9245,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9251 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9251))
{var vec__9252__9253 = temp__3974__auto____9251;
var e__9254 = cljs.core.nth.call(null,vec__9252__9253,0,null);
var s__9255 = vec__9252__9253;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9254))?s__9255:cljs.core.next.call(null,s__9255)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9256 = this;
var h__1852__auto____9257 = this__9256.__hash;
if(!((h__1852__auto____9257 == null)))
{return h__1852__auto____9257;
} else
{var h__1852__auto____9258 = cljs.core.hash_coll.call(null,rng);
this__9256.__hash = h__1852__auto____9258;
return h__1852__auto____9258;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9259 = this;
if((this__9259.step > 0))
{if(((this__9259.start + this__9259.step) < this__9259.end))
{return (new cljs.core.Range(this__9259.meta,(this__9259.start + this__9259.step),this__9259.end,this__9259.step,null));
} else
{return null;
}
} else
{if(((this__9259.start + this__9259.step) > this__9259.end))
{return (new cljs.core.Range(this__9259.meta,(this__9259.start + this__9259.step),this__9259.end,this__9259.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9260 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9261 = this;
var this__9262 = this;
return cljs.core.pr_str.call(null,this__9262);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9263 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9264 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9265 = this;
if((this__9265.step > 0))
{if((this__9265.start < this__9265.end))
{return rng;
} else
{return null;
}
} else
{if((this__9265.start > this__9265.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9266 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9266.end - this__9266.start) / this__9266.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9267 = this;
return this__9267.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9268 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9268.meta,(this__9268.start + this__9268.step),this__9268.end,this__9268.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9269 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9270 = this;
return (new cljs.core.Range(meta,this__9270.start,this__9270.end,this__9270.step,this__9270.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9271 = this;
return this__9271.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9272 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9272.start + (n * this__9272.step));
} else
{if((function (){var and__3822__auto____9273 = (this__9272.start > this__9272.end);
if(and__3822__auto____9273)
{return (this__9272.step === 0);
} else
{return and__3822__auto____9273;
}
})())
{return this__9272.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9274 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9274.start + (n * this__9274.step));
} else
{if((function (){var and__3822__auto____9275 = (this__9274.start > this__9274.end);
if(and__3822__auto____9275)
{return (this__9274.step === 0);
} else
{return and__3822__auto____9275;
}
})())
{return this__9274.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9276 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9276.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9279 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9279)
{var s__9280 = temp__3974__auto____9279;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9280),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9280)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9287 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9287)
{var s__9288 = temp__3974__auto____9287;
var fst__9289 = cljs.core.first.call(null,s__9288);
var fv__9290 = f.call(null,fst__9289);
var run__9291 = cljs.core.cons.call(null,fst__9289,cljs.core.take_while.call(null,(function (p1__9281_SHARP_){
return cljs.core._EQ_.call(null,fv__9290,f.call(null,p1__9281_SHARP_));
}),cljs.core.next.call(null,s__9288)));
return cljs.core.cons.call(null,run__9291,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9291),s__9288))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9306 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9306)
{var s__9307 = temp__3971__auto____9306;
return reductions.call(null,f,cljs.core.first.call(null,s__9307),cljs.core.rest.call(null,s__9307));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9308 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9308)
{var s__9309 = temp__3974__auto____9308;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9309)),cljs.core.rest.call(null,s__9309));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9312 = null;
var G__9312__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9312__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9312__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9312__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9312__4 = (function() { 
var G__9313__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9313 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9313__delegate.call(this, x, y, z, args);
};
G__9313.cljs$lang$maxFixedArity = 3;
G__9313.cljs$lang$applyTo = (function (arglist__9314){
var x = cljs.core.first(arglist__9314);
var y = cljs.core.first(cljs.core.next(arglist__9314));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9314)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9314)));
return G__9313__delegate(x, y, z, args);
});
G__9313.cljs$lang$arity$variadic = G__9313__delegate;
return G__9313;
})()
;
G__9312 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9312__0.call(this);
case 1:
return G__9312__1.call(this,x);
case 2:
return G__9312__2.call(this,x,y);
case 3:
return G__9312__3.call(this,x,y,z);
default:
return G__9312__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9312.cljs$lang$maxFixedArity = 3;
G__9312.cljs$lang$applyTo = G__9312__4.cljs$lang$applyTo;
return G__9312;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9315 = null;
var G__9315__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9315__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9315__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9315__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9315__4 = (function() { 
var G__9316__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9316 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9316__delegate.call(this, x, y, z, args);
};
G__9316.cljs$lang$maxFixedArity = 3;
G__9316.cljs$lang$applyTo = (function (arglist__9317){
var x = cljs.core.first(arglist__9317);
var y = cljs.core.first(cljs.core.next(arglist__9317));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9317)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9317)));
return G__9316__delegate(x, y, z, args);
});
G__9316.cljs$lang$arity$variadic = G__9316__delegate;
return G__9316;
})()
;
G__9315 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9315__0.call(this);
case 1:
return G__9315__1.call(this,x);
case 2:
return G__9315__2.call(this,x,y);
case 3:
return G__9315__3.call(this,x,y,z);
default:
return G__9315__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9315.cljs$lang$maxFixedArity = 3;
G__9315.cljs$lang$applyTo = G__9315__4.cljs$lang$applyTo;
return G__9315;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9318 = null;
var G__9318__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9318__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9318__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9318__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9318__4 = (function() { 
var G__9319__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9319 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9319__delegate.call(this, x, y, z, args);
};
G__9319.cljs$lang$maxFixedArity = 3;
G__9319.cljs$lang$applyTo = (function (arglist__9320){
var x = cljs.core.first(arglist__9320);
var y = cljs.core.first(cljs.core.next(arglist__9320));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9320)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9320)));
return G__9319__delegate(x, y, z, args);
});
G__9319.cljs$lang$arity$variadic = G__9319__delegate;
return G__9319;
})()
;
G__9318 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9318__0.call(this);
case 1:
return G__9318__1.call(this,x);
case 2:
return G__9318__2.call(this,x,y);
case 3:
return G__9318__3.call(this,x,y,z);
default:
return G__9318__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9318.cljs$lang$maxFixedArity = 3;
G__9318.cljs$lang$applyTo = G__9318__4.cljs$lang$applyTo;
return G__9318;
})()
});
var juxt__4 = (function() { 
var G__9321__delegate = function (f,g,h,fs){
var fs__9311 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9322 = null;
var G__9322__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9292_SHARP_,p2__9293_SHARP_){
return cljs.core.conj.call(null,p1__9292_SHARP_,p2__9293_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9311);
});
var G__9322__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9294_SHARP_,p2__9295_SHARP_){
return cljs.core.conj.call(null,p1__9294_SHARP_,p2__9295_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9311);
});
var G__9322__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9296_SHARP_,p2__9297_SHARP_){
return cljs.core.conj.call(null,p1__9296_SHARP_,p2__9297_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9311);
});
var G__9322__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9298_SHARP_,p2__9299_SHARP_){
return cljs.core.conj.call(null,p1__9298_SHARP_,p2__9299_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9311);
});
var G__9322__4 = (function() { 
var G__9323__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9300_SHARP_,p2__9301_SHARP_){
return cljs.core.conj.call(null,p1__9300_SHARP_,cljs.core.apply.call(null,p2__9301_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9311);
};
var G__9323 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9323__delegate.call(this, x, y, z, args);
};
G__9323.cljs$lang$maxFixedArity = 3;
G__9323.cljs$lang$applyTo = (function (arglist__9324){
var x = cljs.core.first(arglist__9324);
var y = cljs.core.first(cljs.core.next(arglist__9324));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9324)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9324)));
return G__9323__delegate(x, y, z, args);
});
G__9323.cljs$lang$arity$variadic = G__9323__delegate;
return G__9323;
})()
;
G__9322 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9322__0.call(this);
case 1:
return G__9322__1.call(this,x);
case 2:
return G__9322__2.call(this,x,y);
case 3:
return G__9322__3.call(this,x,y,z);
default:
return G__9322__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9322.cljs$lang$maxFixedArity = 3;
G__9322.cljs$lang$applyTo = G__9322__4.cljs$lang$applyTo;
return G__9322;
})()
};
var G__9321 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9321__delegate.call(this, f, g, h, fs);
};
G__9321.cljs$lang$maxFixedArity = 3;
G__9321.cljs$lang$applyTo = (function (arglist__9325){
var f = cljs.core.first(arglist__9325);
var g = cljs.core.first(cljs.core.next(arglist__9325));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9325)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9325)));
return G__9321__delegate(f, g, h, fs);
});
G__9321.cljs$lang$arity$variadic = G__9321__delegate;
return G__9321;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9328 = cljs.core.next.call(null,coll);
coll = G__9328;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9327 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9327)
{return (n > 0);
} else
{return and__3822__auto____9327;
}
})()))
{{
var G__9329 = (n - 1);
var G__9330 = cljs.core.next.call(null,coll);
n = G__9329;
coll = G__9330;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9332 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9332),s))
{if((cljs.core.count.call(null,matches__9332) === 1))
{return cljs.core.first.call(null,matches__9332);
} else
{return cljs.core.vec.call(null,matches__9332);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9334 = re.exec(s);
if((matches__9334 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9334) === 1))
{return cljs.core.first.call(null,matches__9334);
} else
{return cljs.core.vec.call(null,matches__9334);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9339 = cljs.core.re_find.call(null,re,s);
var match_idx__9340 = s.search(re);
var match_str__9341 = ((cljs.core.coll_QMARK_.call(null,match_data__9339))?cljs.core.first.call(null,match_data__9339):match_data__9339);
var post_match__9342 = cljs.core.subs.call(null,s,(match_idx__9340 + cljs.core.count.call(null,match_str__9341)));
if(cljs.core.truth_(match_data__9339))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9339,re_seq.call(null,re,post_match__9342));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9349__9350 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9351 = cljs.core.nth.call(null,vec__9349__9350,0,null);
var flags__9352 = cljs.core.nth.call(null,vec__9349__9350,1,null);
var pattern__9353 = cljs.core.nth.call(null,vec__9349__9350,2,null);
return (new RegExp(pattern__9353,flags__9352));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9343_SHARP_){
return print_one.call(null,p1__9343_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9363 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9363))
{var and__3822__auto____9367 = (function (){var G__9364__9365 = obj;
if(G__9364__9365)
{if((function (){var or__3824__auto____9366 = (G__9364__9365.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9366)
{return or__3824__auto____9366;
} else
{return G__9364__9365.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9364__9365.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9364__9365);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9364__9365);
}
})();
if(cljs.core.truth_(and__3822__auto____9367))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9367;
}
} else
{return and__3822__auto____9363;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9368 = !((obj == null));
if(and__3822__auto____9368)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9368;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9369__9370 = obj;
if(G__9369__9370)
{if((function (){var or__3824__auto____9371 = (G__9369__9370.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9371)
{return or__3824__auto____9371;
} else
{return G__9369__9370.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9369__9370.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9369__9370);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9369__9370);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__9391 = (new goog.string.StringBuffer());
var G__9392__9393 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9392__9393)
{var string__9394 = cljs.core.first.call(null,G__9392__9393);
var G__9392__9395 = G__9392__9393;
while(true){
sb__9391.append(string__9394);
var temp__3974__auto____9396 = cljs.core.next.call(null,G__9392__9395);
if(temp__3974__auto____9396)
{var G__9392__9397 = temp__3974__auto____9396;
{
var G__9410 = cljs.core.first.call(null,G__9392__9397);
var G__9411 = G__9392__9397;
string__9394 = G__9410;
G__9392__9395 = G__9411;
continue;
}
} else
{}
break;
}
} else
{}
var G__9398__9399 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9398__9399)
{var obj__9400 = cljs.core.first.call(null,G__9398__9399);
var G__9398__9401 = G__9398__9399;
while(true){
sb__9391.append(" ");
var G__9402__9403 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9400,opts));
if(G__9402__9403)
{var string__9404 = cljs.core.first.call(null,G__9402__9403);
var G__9402__9405 = G__9402__9403;
while(true){
sb__9391.append(string__9404);
var temp__3974__auto____9406 = cljs.core.next.call(null,G__9402__9405);
if(temp__3974__auto____9406)
{var G__9402__9407 = temp__3974__auto____9406;
{
var G__9412 = cljs.core.first.call(null,G__9402__9407);
var G__9413 = G__9402__9407;
string__9404 = G__9412;
G__9402__9405 = G__9413;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9408 = cljs.core.next.call(null,G__9398__9401);
if(temp__3974__auto____9408)
{var G__9398__9409 = temp__3974__auto____9408;
{
var G__9414 = cljs.core.first.call(null,G__9398__9409);
var G__9415 = G__9398__9409;
obj__9400 = G__9414;
G__9398__9401 = G__9415;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9391;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9417 = cljs.core.pr_sb.call(null,objs,opts);
sb__9417.append("\n");
return [cljs.core.str(sb__9417)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__9436__9437 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9436__9437)
{var string__9438 = cljs.core.first.call(null,G__9436__9437);
var G__9436__9439 = G__9436__9437;
while(true){
cljs.core.string_print.call(null,string__9438);
var temp__3974__auto____9440 = cljs.core.next.call(null,G__9436__9439);
if(temp__3974__auto____9440)
{var G__9436__9441 = temp__3974__auto____9440;
{
var G__9454 = cljs.core.first.call(null,G__9436__9441);
var G__9455 = G__9436__9441;
string__9438 = G__9454;
G__9436__9439 = G__9455;
continue;
}
} else
{}
break;
}
} else
{}
var G__9442__9443 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9442__9443)
{var obj__9444 = cljs.core.first.call(null,G__9442__9443);
var G__9442__9445 = G__9442__9443;
while(true){
cljs.core.string_print.call(null," ");
var G__9446__9447 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9444,opts));
if(G__9446__9447)
{var string__9448 = cljs.core.first.call(null,G__9446__9447);
var G__9446__9449 = G__9446__9447;
while(true){
cljs.core.string_print.call(null,string__9448);
var temp__3974__auto____9450 = cljs.core.next.call(null,G__9446__9449);
if(temp__3974__auto____9450)
{var G__9446__9451 = temp__3974__auto____9450;
{
var G__9456 = cljs.core.first.call(null,G__9446__9451);
var G__9457 = G__9446__9451;
string__9448 = G__9456;
G__9446__9449 = G__9457;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9452 = cljs.core.next.call(null,G__9442__9445);
if(temp__3974__auto____9452)
{var G__9442__9453 = temp__3974__auto____9452;
{
var G__9458 = cljs.core.first.call(null,G__9442__9453);
var G__9459 = G__9442__9453;
obj__9444 = G__9458;
G__9442__9445 = G__9459;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9460){
var objs = cljs.core.seq(arglist__9460);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9461){
var objs = cljs.core.seq(arglist__9461);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9462){
var objs = cljs.core.seq(arglist__9462);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9463){
var objs = cljs.core.seq(arglist__9463);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9464){
var objs = cljs.core.seq(arglist__9464);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9465){
var objs = cljs.core.seq(arglist__9465);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9466){
var objs = cljs.core.seq(arglist__9466);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9467){
var objs = cljs.core.seq(arglist__9467);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__9468){
var fmt = cljs.core.first(arglist__9468);
var args = cljs.core.rest(arglist__9468);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9469 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9469,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9470 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9470,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9471 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9471,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9472 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9472))
{var nspc__9473 = temp__3974__auto____9472;
return [cljs.core.str(nspc__9473),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9474 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9474))
{var nspc__9475 = temp__3974__auto____9474;
return [cljs.core.str(nspc__9475),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9476 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9476,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9478 = (function (n,len){
var ns__9477 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9477) < len))
{{
var G__9480 = [cljs.core.str("0"),cljs.core.str(ns__9477)].join('');
ns__9477 = G__9480;
continue;
}
} else
{return ns__9477;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9478.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9478.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9478.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9478.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9478.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9478.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9479 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9479,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9481 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9482 = this;
var G__9483__9484 = cljs.core.seq.call(null,this__9482.watches);
if(G__9483__9484)
{var G__9486__9488 = cljs.core.first.call(null,G__9483__9484);
var vec__9487__9489 = G__9486__9488;
var key__9490 = cljs.core.nth.call(null,vec__9487__9489,0,null);
var f__9491 = cljs.core.nth.call(null,vec__9487__9489,1,null);
var G__9483__9492 = G__9483__9484;
var G__9486__9493 = G__9486__9488;
var G__9483__9494 = G__9483__9492;
while(true){
var vec__9495__9496 = G__9486__9493;
var key__9497 = cljs.core.nth.call(null,vec__9495__9496,0,null);
var f__9498 = cljs.core.nth.call(null,vec__9495__9496,1,null);
var G__9483__9499 = G__9483__9494;
f__9498.call(null,key__9497,this$,oldval,newval);
var temp__3974__auto____9500 = cljs.core.next.call(null,G__9483__9499);
if(temp__3974__auto____9500)
{var G__9483__9501 = temp__3974__auto____9500;
{
var G__9508 = cljs.core.first.call(null,G__9483__9501);
var G__9509 = G__9483__9501;
G__9486__9493 = G__9508;
G__9483__9494 = G__9509;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9502 = this;
return this$.watches = cljs.core.assoc.call(null,this__9502.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9503 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9503.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9504 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9504.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9505 = this;
return this__9505.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9506 = this;
return this__9506.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9507 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9521__delegate = function (x,p__9510){
var map__9516__9517 = p__9510;
var map__9516__9518 = ((cljs.core.seq_QMARK_.call(null,map__9516__9517))?cljs.core.apply.call(null,cljs.core.hash_map,map__9516__9517):map__9516__9517);
var validator__9519 = cljs.core._lookup.call(null,map__9516__9518,"\uFDD0'validator",null);
var meta__9520 = cljs.core._lookup.call(null,map__9516__9518,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9520,validator__9519,null));
};
var G__9521 = function (x,var_args){
var p__9510 = null;
if (goog.isDef(var_args)) {
  p__9510 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9521__delegate.call(this, x, p__9510);
};
G__9521.cljs$lang$maxFixedArity = 1;
G__9521.cljs$lang$applyTo = (function (arglist__9522){
var x = cljs.core.first(arglist__9522);
var p__9510 = cljs.core.rest(arglist__9522);
return G__9521__delegate(x, p__9510);
});
G__9521.cljs$lang$arity$variadic = G__9521__delegate;
return G__9521;
})()
;
atom = function(x,var_args){
var p__9510 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9526 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9526))
{var validate__9527 = temp__3974__auto____9526;
if(cljs.core.truth_(validate__9527.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__9528 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9528,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9529__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9529 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9529__delegate.call(this, a, f, x, y, z, more);
};
G__9529.cljs$lang$maxFixedArity = 5;
G__9529.cljs$lang$applyTo = (function (arglist__9530){
var a = cljs.core.first(arglist__9530);
var f = cljs.core.first(cljs.core.next(arglist__9530));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9530)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9530))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9530)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9530)))));
return G__9529__delegate(a, f, x, y, z, more);
});
G__9529.cljs$lang$arity$variadic = G__9529__delegate;
return G__9529;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9531){
var iref = cljs.core.first(arglist__9531);
var f = cljs.core.first(cljs.core.next(arglist__9531));
var args = cljs.core.rest(cljs.core.next(arglist__9531));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9532 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9532.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9533 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9533.state,(function (p__9534){
var map__9535__9536 = p__9534;
var map__9535__9537 = ((cljs.core.seq_QMARK_.call(null,map__9535__9536))?cljs.core.apply.call(null,cljs.core.hash_map,map__9535__9536):map__9535__9536);
var curr_state__9538 = map__9535__9537;
var done__9539 = cljs.core._lookup.call(null,map__9535__9537,"\uFDD0'done",null);
if(cljs.core.truth_(done__9539))
{return curr_state__9538;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9533.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9560__9561 = options;
var map__9560__9562 = ((cljs.core.seq_QMARK_.call(null,map__9560__9561))?cljs.core.apply.call(null,cljs.core.hash_map,map__9560__9561):map__9560__9561);
var keywordize_keys__9563 = cljs.core._lookup.call(null,map__9560__9562,"\uFDD0'keywordize-keys",null);
var keyfn__9564 = (cljs.core.truth_(keywordize_keys__9563)?cljs.core.keyword:cljs.core.str);
var f__9579 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2122__auto____9578 = (function iter__9572(s__9573){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9573__9576 = s__9573;
while(true){
if(cljs.core.seq.call(null,s__9573__9576))
{var k__9577 = cljs.core.first.call(null,s__9573__9576);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9564.call(null,k__9577),thisfn.call(null,(x[k__9577]))], true),iter__9572.call(null,cljs.core.rest.call(null,s__9573__9576)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2122__auto____9578.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__9579.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9580){
var x = cljs.core.first(arglist__9580);
var options = cljs.core.rest(arglist__9580);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9585 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9589__delegate = function (args){
var temp__3971__auto____9586 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9585),args,null);
if(cljs.core.truth_(temp__3971__auto____9586))
{var v__9587 = temp__3971__auto____9586;
return v__9587;
} else
{var ret__9588 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9585,cljs.core.assoc,args,ret__9588);
return ret__9588;
}
};
var G__9589 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9589__delegate.call(this, args);
};
G__9589.cljs$lang$maxFixedArity = 0;
G__9589.cljs$lang$applyTo = (function (arglist__9590){
var args = cljs.core.seq(arglist__9590);;
return G__9589__delegate(args);
});
G__9589.cljs$lang$arity$variadic = G__9589__delegate;
return G__9589;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__9592 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9592))
{{
var G__9593 = ret__9592;
f = G__9593;
continue;
}
} else
{return ret__9592;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9594__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9594 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9594__delegate.call(this, f, args);
};
G__9594.cljs$lang$maxFixedArity = 1;
G__9594.cljs$lang$applyTo = (function (arglist__9595){
var f = cljs.core.first(arglist__9595);
var args = cljs.core.rest(arglist__9595);
return G__9594__delegate(f, args);
});
G__9594.cljs$lang$arity$variadic = G__9594__delegate;
return G__9594;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9597 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9597,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9597,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____9606 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9606)
{return or__3824__auto____9606;
} else
{var or__3824__auto____9607 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9607)
{return or__3824__auto____9607;
} else
{var and__3822__auto____9608 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9608)
{var and__3822__auto____9609 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9609)
{var and__3822__auto____9610 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9610)
{var ret__9611 = true;
var i__9612 = 0;
while(true){
if((function (){var or__3824__auto____9613 = cljs.core.not.call(null,ret__9611);
if(or__3824__auto____9613)
{return or__3824__auto____9613;
} else
{return (i__9612 === cljs.core.count.call(null,parent));
}
})())
{return ret__9611;
} else
{{
var G__9614 = isa_QMARK_.call(null,h,child.call(null,i__9612),parent.call(null,i__9612));
var G__9615 = (i__9612 + 1);
ret__9611 = G__9614;
i__9612 = G__9615;
continue;
}
}
break;
}
} else
{return and__3822__auto____9610;
}
} else
{return and__3822__auto____9609;
}
} else
{return and__3822__auto____9608;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__9624 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9625 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9626 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9627 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9628 = ((cljs.core.contains_QMARK_.call(null,tp__9624.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9626.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9626.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9624,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__9627.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9625,parent,ta__9626),"\uFDD0'descendants":tf__9627.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9626,tag,td__9625)});
})());
if(cljs.core.truth_(or__3824__auto____9628))
{return or__3824__auto____9628;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9633 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9634 = (cljs.core.truth_(parentMap__9633.call(null,tag))?cljs.core.disj.call(null,parentMap__9633.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__9635 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9634))?cljs.core.assoc.call(null,parentMap__9633,tag,childsParents__9634):cljs.core.dissoc.call(null,parentMap__9633,tag));
var deriv_seq__9636 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9616_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9616_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9616_SHARP_),cljs.core.second.call(null,p1__9616_SHARP_)));
}),cljs.core.seq.call(null,newParents__9635)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9633.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9617_SHARP_,p2__9618_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9617_SHARP_,p2__9618_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9636));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9644 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9646 = (cljs.core.truth_((function (){var and__3822__auto____9645 = xprefs__9644;
if(cljs.core.truth_(and__3822__auto____9645))
{return xprefs__9644.call(null,y);
} else
{return and__3822__auto____9645;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9646))
{return or__3824__auto____9646;
} else
{var or__3824__auto____9648 = (function (){var ps__9647 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9647) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9647),prefer_table)))
{} else
{}
{
var G__9651 = cljs.core.rest.call(null,ps__9647);
ps__9647 = G__9651;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9648))
{return or__3824__auto____9648;
} else
{var or__3824__auto____9650 = (function (){var ps__9649 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9649) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9649),y,prefer_table)))
{} else
{}
{
var G__9652 = cljs.core.rest.call(null,ps__9649);
ps__9649 = G__9652;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9650))
{return or__3824__auto____9650;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9654 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9654))
{return or__3824__auto____9654;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9672 = cljs.core.reduce.call(null,(function (be,p__9664){
var vec__9665__9666 = p__9664;
var k__9667 = cljs.core.nth.call(null,vec__9665__9666,0,null);
var ___9668 = cljs.core.nth.call(null,vec__9665__9666,1,null);
var e__9669 = vec__9665__9666;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9667))
{var be2__9671 = (cljs.core.truth_((function (){var or__3824__auto____9670 = (be == null);
if(or__3824__auto____9670)
{return or__3824__auto____9670;
} else
{return cljs.core.dominates.call(null,k__9667,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9669:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9671),k__9667,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9667),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9671)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9671;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9672))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9672));
return cljs.core.second.call(null,best_entry__9672);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____9677 = mf;
if(and__3822__auto____9677)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9677;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2023__auto____9678 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9679 = (cljs.core._reset[goog.typeOf(x__2023__auto____9678)]);
if(or__3824__auto____9679)
{return or__3824__auto____9679;
} else
{var or__3824__auto____9680 = (cljs.core._reset["_"]);
if(or__3824__auto____9680)
{return or__3824__auto____9680;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9685 = mf;
if(and__3822__auto____9685)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9685;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2023__auto____9686 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9687 = (cljs.core._add_method[goog.typeOf(x__2023__auto____9686)]);
if(or__3824__auto____9687)
{return or__3824__auto____9687;
} else
{var or__3824__auto____9688 = (cljs.core._add_method["_"]);
if(or__3824__auto____9688)
{return or__3824__auto____9688;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9693 = mf;
if(and__3822__auto____9693)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9693;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2023__auto____9694 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9695 = (cljs.core._remove_method[goog.typeOf(x__2023__auto____9694)]);
if(or__3824__auto____9695)
{return or__3824__auto____9695;
} else
{var or__3824__auto____9696 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9696)
{return or__3824__auto____9696;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9701 = mf;
if(and__3822__auto____9701)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9701;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2023__auto____9702 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9703 = (cljs.core._prefer_method[goog.typeOf(x__2023__auto____9702)]);
if(or__3824__auto____9703)
{return or__3824__auto____9703;
} else
{var or__3824__auto____9704 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9704)
{return or__3824__auto____9704;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9709 = mf;
if(and__3822__auto____9709)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9709;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2023__auto____9710 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9711 = (cljs.core._get_method[goog.typeOf(x__2023__auto____9710)]);
if(or__3824__auto____9711)
{return or__3824__auto____9711;
} else
{var or__3824__auto____9712 = (cljs.core._get_method["_"]);
if(or__3824__auto____9712)
{return or__3824__auto____9712;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9717 = mf;
if(and__3822__auto____9717)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9717;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2023__auto____9718 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9719 = (cljs.core._methods[goog.typeOf(x__2023__auto____9718)]);
if(or__3824__auto____9719)
{return or__3824__auto____9719;
} else
{var or__3824__auto____9720 = (cljs.core._methods["_"]);
if(or__3824__auto____9720)
{return or__3824__auto____9720;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9725 = mf;
if(and__3822__auto____9725)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9725;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2023__auto____9726 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9727 = (cljs.core._prefers[goog.typeOf(x__2023__auto____9726)]);
if(or__3824__auto____9727)
{return or__3824__auto____9727;
} else
{var or__3824__auto____9728 = (cljs.core._prefers["_"]);
if(or__3824__auto____9728)
{return or__3824__auto____9728;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____9733 = mf;
if(and__3822__auto____9733)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____9733;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2023__auto____9734 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9735 = (cljs.core._dispatch[goog.typeOf(x__2023__auto____9734)]);
if(or__3824__auto____9735)
{return or__3824__auto____9735;
} else
{var or__3824__auto____9736 = (cljs.core._dispatch["_"]);
if(or__3824__auto____9736)
{return or__3824__auto____9736;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9739 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9740 = cljs.core._get_method.call(null,mf,dispatch_val__9739);
if(cljs.core.truth_(target_fn__9740))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9739)].join('')));
}
return cljs.core.apply.call(null,target_fn__9740,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9741 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9742 = this;
cljs.core.swap_BANG_.call(null,this__9742.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9742.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9742.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9742.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9743 = this;
cljs.core.swap_BANG_.call(null,this__9743.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9743.method_cache,this__9743.method_table,this__9743.cached_hierarchy,this__9743.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9744 = this;
cljs.core.swap_BANG_.call(null,this__9744.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9744.method_cache,this__9744.method_table,this__9744.cached_hierarchy,this__9744.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9745 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9745.cached_hierarchy),cljs.core.deref.call(null,this__9745.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9745.method_cache,this__9745.method_table,this__9745.cached_hierarchy,this__9745.hierarchy);
}
var temp__3971__auto____9746 = cljs.core.deref.call(null,this__9745.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____9746))
{var target_fn__9747 = temp__3971__auto____9746;
return target_fn__9747;
} else
{var temp__3971__auto____9748 = cljs.core.find_and_cache_best_method.call(null,this__9745.name,dispatch_val,this__9745.hierarchy,this__9745.method_table,this__9745.prefer_table,this__9745.method_cache,this__9745.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____9748))
{var target_fn__9749 = temp__3971__auto____9748;
return target_fn__9749;
} else
{return cljs.core.deref.call(null,this__9745.method_table).call(null,this__9745.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9750 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9750.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9750.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9750.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9750.method_cache,this__9750.method_table,this__9750.cached_hierarchy,this__9750.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9751 = this;
return cljs.core.deref.call(null,this__9751.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9752 = this;
return cljs.core.deref.call(null,this__9752.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9753 = this;
return cljs.core.do_dispatch.call(null,mf,this__9753.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9755__delegate = function (_,args){
var self__9754 = this;
return cljs.core._dispatch.call(null,self__9754,args);
};
var G__9755 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9755__delegate.call(this, _, args);
};
G__9755.cljs$lang$maxFixedArity = 1;
G__9755.cljs$lang$applyTo = (function (arglist__9756){
var _ = cljs.core.first(arglist__9756);
var args = cljs.core.rest(arglist__9756);
return G__9755__delegate(_, args);
});
G__9755.cljs$lang$arity$variadic = G__9755__delegate;
return G__9755;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__9757 = this;
return cljs.core._dispatch.call(null,self__9757,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__1969__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9758 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_9760,_){
var this__9759 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__9759.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__9761 = this;
var and__3822__auto____9762 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____9762)
{return (this__9761.uuid === other.uuid);
} else
{return and__3822__auto____9762;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__9763 = this;
var this__9764 = this;
return cljs.core.pr_str.call(null,this__9764);
});
cljs.core.UUID;
