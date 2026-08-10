(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var gc={exports:{}},Us={},vc={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf;function Bv(){if(jf)return at;jf=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,T={};function x(w,j,R){this.props=w,this.context=j,this.refs=T,this.updater=R||y}x.prototype.isReactComponent={},x.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function C(){}C.prototype=x.prototype;function M(w,j,R){this.props=w,this.context=j,this.refs=T,this.updater=R||y}var S=M.prototype=new C;S.constructor=M,b(S,x.prototype),S.isPureReactComponent=!0;var V=Array.isArray,z=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function te(w,j,R){var A,H={},$=null,k=null;if(j!=null)for(A in j.ref!==void 0&&(k=j.ref),j.key!==void 0&&($=""+j.key),j)z.call(j,A)&&!O.hasOwnProperty(A)&&(H[A]=j[A]);var Q=arguments.length-2;if(Q===1)H.children=R;else if(1<Q){for(var ue=Array(Q),pe=0;pe<Q;pe++)ue[pe]=arguments[pe+2];H.children=ue}if(w&&w.defaultProps)for(A in Q=w.defaultProps,Q)H[A]===void 0&&(H[A]=Q[A]);return{$$typeof:a,type:w,key:$,ref:k,props:H,_owner:I.current}}function K(w,j){return{$$typeof:a,type:w.type,key:j,ref:w.ref,props:w.props,_owner:w._owner}}function Z(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function le(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(R){return j[R]})}var F=/\/+/g;function ae(w,j){return typeof w=="object"&&w!==null&&w.key!=null?le(""+w.key):j.toString(36)}function ne(w,j,R,A,H){var $=typeof w;($==="undefined"||$==="boolean")&&(w=null);var k=!1;if(w===null)k=!0;else switch($){case"string":case"number":k=!0;break;case"object":switch(w.$$typeof){case a:case e:k=!0}}if(k)return k=w,H=H(k),w=A===""?"."+ae(k,0):A,V(H)?(R="",w!=null&&(R=w.replace(F,"$&/")+"/"),ne(H,j,R,"",function(pe){return pe})):H!=null&&(Z(H)&&(H=K(H,R+(!H.key||k&&k.key===H.key?"":(""+H.key).replace(F,"$&/")+"/")+w)),j.push(H)),1;if(k=0,A=A===""?".":A+":",V(w))for(var Q=0;Q<w.length;Q++){$=w[Q];var ue=A+ae($,Q);k+=ne($,j,R,ue,H)}else if(ue=_(w),typeof ue=="function")for(w=ue.call(w),Q=0;!($=w.next()).done;)$=$.value,ue=A+ae($,Q++),k+=ne($,j,R,ue,H);else if($==="object")throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return k}function he(w,j,R){if(w==null)return w;var A=[],H=0;return ne(w,A,"","",function($){return j.call(R,$,H++)}),A}function Me(w){if(w._status===-1){var j=w._result;j=j(),j.then(function(R){(w._status===0||w._status===-1)&&(w._status=1,w._result=R)},function(R){(w._status===0||w._status===-1)&&(w._status=2,w._result=R)}),w._status===-1&&(w._status=0,w._result=j)}if(w._status===1)return w._result.default;throw w._result}var ie={current:null},B={transition:null},q={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function D(){throw Error("act(...) is not supported in production builds of React.")}return at.Children={map:he,forEach:function(w,j,R){he(w,function(){j.apply(this,arguments)},R)},count:function(w){var j=0;return he(w,function(){j++}),j},toArray:function(w){return he(w,function(j){return j})||[]},only:function(w){if(!Z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},at.Component=x,at.Fragment=n,at.Profiler=s,at.PureComponent=M,at.StrictMode=i,at.Suspense=p,at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,at.act=D,at.cloneElement=function(w,j,R){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var A=b({},w.props),H=w.key,$=w.ref,k=w._owner;if(j!=null){if(j.ref!==void 0&&($=j.ref,k=I.current),j.key!==void 0&&(H=""+j.key),w.type&&w.type.defaultProps)var Q=w.type.defaultProps;for(ue in j)z.call(j,ue)&&!O.hasOwnProperty(ue)&&(A[ue]=j[ue]===void 0&&Q!==void 0?Q[ue]:j[ue])}var ue=arguments.length-2;if(ue===1)A.children=R;else if(1<ue){Q=Array(ue);for(var pe=0;pe<ue;pe++)Q[pe]=arguments[pe+2];A.children=Q}return{$$typeof:a,type:w.type,key:H,ref:$,props:A,_owner:k}},at.createContext=function(w){return w={$$typeof:c,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},at.createElement=te,at.createFactory=function(w){var j=te.bind(null,w);return j.type=w,j},at.createRef=function(){return{current:null}},at.forwardRef=function(w){return{$$typeof:f,render:w}},at.isValidElement=Z,at.lazy=function(w){return{$$typeof:m,_payload:{_status:-1,_result:w},_init:Me}},at.memo=function(w,j){return{$$typeof:d,type:w,compare:j===void 0?null:j}},at.startTransition=function(w){var j=B.transition;B.transition={};try{w()}finally{B.transition=j}},at.unstable_act=D,at.useCallback=function(w,j){return ie.current.useCallback(w,j)},at.useContext=function(w){return ie.current.useContext(w)},at.useDebugValue=function(){},at.useDeferredValue=function(w){return ie.current.useDeferredValue(w)},at.useEffect=function(w,j){return ie.current.useEffect(w,j)},at.useId=function(){return ie.current.useId()},at.useImperativeHandle=function(w,j,R){return ie.current.useImperativeHandle(w,j,R)},at.useInsertionEffect=function(w,j){return ie.current.useInsertionEffect(w,j)},at.useLayoutEffect=function(w,j){return ie.current.useLayoutEffect(w,j)},at.useMemo=function(w,j){return ie.current.useMemo(w,j)},at.useReducer=function(w,j,R){return ie.current.useReducer(w,j,R)},at.useRef=function(w){return ie.current.useRef(w)},at.useState=function(w){return ie.current.useState(w)},at.useSyncExternalStore=function(w,j,R){return ie.current.useSyncExternalStore(w,j,R)},at.useTransition=function(){return ie.current.useTransition()},at.version="18.3.1",at}var Wf;function hd(){return Wf||(Wf=1,vc.exports=Bv()),vc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function Hv(){if(Xf)return Us;Xf=1;var a=hd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,d){var m,v={},_=null,y=null;d!==void 0&&(_=""+d),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(y=p.ref);for(m in p)i.call(p,m)&&!l.hasOwnProperty(m)&&(v[m]=p[m]);if(f&&f.defaultProps)for(m in p=f.defaultProps,p)v[m]===void 0&&(v[m]=p[m]);return{$$typeof:e,type:f,key:_,ref:y,props:v,_owner:s.current}}return Us.Fragment=n,Us.jsx=c,Us.jsxs=c,Us}var Yf;function Gv(){return Yf||(Yf=1,gc.exports=Hv()),gc.exports}var L=Gv(),me=hd(),qo={},_c={exports:{}},Sn={},xc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Vv(){return qf||(qf=1,(function(a){function e(B,q){var D=B.length;B.push(q);e:for(;0<D;){var w=D-1>>>1,j=B[w];if(0<s(j,q))B[w]=q,B[D]=j,D=w;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var q=B[0],D=B.pop();if(D!==q){B[0]=D;e:for(var w=0,j=B.length,R=j>>>1;w<R;){var A=2*(w+1)-1,H=B[A],$=A+1,k=B[$];if(0>s(H,D))$<j&&0>s(k,H)?(B[w]=k,B[$]=D,w=$):(B[w]=H,B[A]=D,w=A);else if($<j&&0>s(k,D))B[w]=k,B[$]=D,w=$;else break e}}return q}function s(B,q){var D=B.sortIndex-q.sortIndex;return D!==0?D:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();a.unstable_now=function(){return c.now()-f}}var p=[],d=[],m=1,v=null,_=3,y=!1,b=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var q=n(d);q!==null;){if(q.callback===null)i(d);else if(q.startTime<=B)i(d),q.sortIndex=q.expirationTime,e(p,q);else break;q=n(d)}}function V(B){if(T=!1,S(B),!b)if(n(p)!==null)b=!0,Me(z);else{var q=n(d);q!==null&&ie(V,q.startTime-B)}}function z(B,q){b=!1,T&&(T=!1,C(te),te=-1),y=!0;var D=_;try{for(S(q),v=n(p);v!==null&&(!(v.expirationTime>q)||B&&!le());){var w=v.callback;if(typeof w=="function"){v.callback=null,_=v.priorityLevel;var j=w(v.expirationTime<=q);q=a.unstable_now(),typeof j=="function"?v.callback=j:v===n(p)&&i(p),S(q)}else i(p);v=n(p)}if(v!==null)var R=!0;else{var A=n(d);A!==null&&ie(V,A.startTime-q),R=!1}return R}finally{v=null,_=D,y=!1}}var I=!1,O=null,te=-1,K=5,Z=-1;function le(){return!(a.unstable_now()-Z<K)}function F(){if(O!==null){var B=a.unstable_now();Z=B;var q=!0;try{q=O(!0,B)}finally{q?ae():(I=!1,O=null)}}else I=!1}var ae;if(typeof M=="function")ae=function(){M(F)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,he=ne.port2;ne.port1.onmessage=F,ae=function(){he.postMessage(null)}}else ae=function(){x(F,0)};function Me(B){O=B,I||(I=!0,ae())}function ie(B,q){te=x(function(){B(a.unstable_now())},q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_continueExecution=function(){b||y||(b=!0,Me(z))},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return n(p)},a.unstable_next=function(B){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var D=_;_=q;try{return B()}finally{_=D}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var D=_;_=B;try{return q()}finally{_=D}},a.unstable_scheduleCallback=function(B,q,D){var w=a.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?w+D:w):D=w,B){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=D+j,B={id:m++,callback:q,priorityLevel:B,startTime:D,expirationTime:j,sortIndex:-1},D>w?(B.sortIndex=D,e(d,B),n(p)===null&&B===n(d)&&(T?(C(te),te=-1):T=!0,ie(V,D-w))):(B.sortIndex=j,e(p,B),b||y||(b=!0,Me(z))),B},a.unstable_shouldYield=le,a.unstable_wrapCallback=function(B){var q=_;return function(){var D=_;_=q;try{return B.apply(this,arguments)}finally{_=D}}}})(yc)),yc}var Kf;function jv(){return Kf||(Kf=1,xc.exports=Vv()),xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function Wv(){if($f)return Sn;$f=1;var a=hd(),e=jv();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(t,r){c(t,r),c(t+"Capture",r)}function c(t,r){for(s[t]=r,t=0;t<r.length;t++)i.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(t){return p.call(v,t)?!0:p.call(m,t)?!1:d.test(t)?v[t]=!0:(m[t]=!0,!1)}function y(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,r,o,u){if(r===null||typeof r>"u"||y(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(t,r,o,u,h,g,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=g,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];x[r]=new T(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function M(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(C,M);x[r]=new T(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(C,M);x[r]=new T(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(C,M);x[r]=new T(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function S(t,r,o,u){var h=x.hasOwnProperty(r)?x[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(b(r,o,h,u)&&(o=null),u||h===null?_(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var V=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),le=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),B=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var D=Object.assign,w;function j(t){if(w===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);w=r&&r[1]||""}return`
`+w+t}var R=!1;function A(t,r){if(!t||R)return"";R=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(se){var u=se}Reflect.construct(t,[],r)}else{try{r.call()}catch(se){u=se}t.call(r.prototype)}else{try{throw Error()}catch(se){u=se}t()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var h=se.stack.split(`
`),g=u.stack.split(`
`),E=h.length-1,U=g.length-1;1<=E&&0<=U&&h[E]!==g[U];)U--;for(;1<=E&&0<=U;E--,U--)if(h[E]!==g[U]){if(E!==1||U!==1)do if(E--,U--,0>U||h[E]!==g[U]){var G=`
`+h[E].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=E&&0<=U);break}}}finally{R=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?j(t):""}function H(t){switch(t.tag){case 5:return j(t.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return t=A(t.type,!1),t;case 11:return t=A(t.type.render,!1),t;case 1:return t=A(t.type,!0),t;default:return""}}function $(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case I:return"Portal";case K:return"Profiler";case te:return"StrictMode";case ae:return"Suspense";case ne:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case le:return(t.displayName||"Context")+".Consumer";case Z:return(t._context.displayName||"Context")+".Provider";case F:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return r=t.displayName||null,r!==null?r:$(t.type)||"Memo";case Me:r=t._payload,t=t._init;try{return $(t(r))}catch{}}return null}function k(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(r);case 8:return r===te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Q(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ue(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pe(t){var r=ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ee(t){t._valueTracker||(t._valueTracker=pe(t))}function Re(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=ue(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function Pe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function P(t,r){var o=r.checked;return D({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Te(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Q(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function de(t,r){r=r.checked,r!=null&&S(t,"checked",r,!1)}function ce(t,r){de(t,r);var o=Q(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Le(t,r.type,o):r.hasOwnProperty("defaultValue")&&Le(t,r.type,Q(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Se(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Le(t,r,o){(r!=="number"||Pe(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var be=Array.isArray;function Fe(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Q(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function Xe(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return D({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ie(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(be(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Q(o)}}function ke(t,r){var o=Q(r.value),u=Q(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Ze(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Pt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Pt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qe,Je=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Qe=Qe||document.createElement("div"),Qe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Tn(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(t){W.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ut[r]=Ut[t]})});function Ne(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ut.hasOwnProperty(t)&&Ut[t]?(""+r).trim():r+"px"}function Ke(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=Ne(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var ct=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function re(t,r){if(r){if(ct[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Yt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function Ct(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,In=null,It=null;function rn(t){if(t=xs(t)){if(typeof kr!="function")throw Error(n(280));var r=t.stateNode;r&&(r=lo(r),kr(t.stateNode,t.type,r))}}function Sr(t){In?It?It.push(t):It=[t]:In=t}function On(){if(In){var t=In,r=It;if(It=In=null,rn(t),r)for(t=0;t<r.length;t++)rn(r[t])}}function Xn(t,r){return t(r)}function sr(){}var Yn=!1;function es(t,r,o){if(Yn)return t(r,o);Yn=!0;try{return Xn(t,r,o)}finally{Yn=!1,(In!==null||It!==null)&&(sr(),On())}}function zr(t,r){var o=t.stateNode;if(o===null)return null;var u=lo(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Br=!1;if(f)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Br=!1}function ta(t,r,o,u,h,g,E,U,G){var se=Array.prototype.slice.call(arguments,3);try{r.apply(o,se)}catch(xe){this.onError(xe)}}var Gr=!1,Mi=null,N=!1,oe=null,fe={onError:function(t){Gr=!0,Mi=t}};function _e(t,r,o,u,h,g,E,U,G){Gr=!1,Mi=null,ta.apply(fe,arguments)}function ge(t,r,o,u,h,g,E,U,G){if(_e.apply(this,arguments),Gr){if(Gr){var se=Mi;Gr=!1,Mi=null}else throw Error(n(198));N||(N=!0,oe=se)}}function Ae(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function je(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function We(t){if(Ae(t)!==t)throw Error(n(188))}function et(t){var r=t.alternate;if(!r){if(r=Ae(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return We(h),t;if(g===u)return We(h),r;g=g.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=g;else{for(var E=!1,U=h.child;U;){if(U===o){E=!0,o=h,u=g;break}if(U===u){E=!0,u=h,o=g;break}U=U.sibling}if(!E){for(U=g.child;U;){if(U===o){E=!0,o=g,u=h;break}if(U===u){E=!0,u=g,o=h;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function tt(t){return t=et(t),t!==null?rt(t):null}function rt(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=rt(t);if(r!==null)return r;t=t.sibling}return null}var it=e.unstable_scheduleCallback,vt=e.unstable_cancelCallback,Rn=e.unstable_shouldYield,qn=e.unstable_requestPaint,mt=e.unstable_now,xt=e.unstable_getCurrentPriorityLevel,wt=e.unstable_ImmediatePriority,an=e.unstable_UserBlockingPriority,Ot=e.unstable_NormalPriority,lt=e.unstable_LowPriority,ut=e.unstable_IdlePriority,or=null,hn=null;function Fl(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(or,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Bl,kl=Math.log,zl=Math.LN2;function Bl(t){return t>>>=0,t===0?32:31-(kl(t)/zl|0)|0}var na=64,ra=4194304;function Vr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wi(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,g=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~h;U!==0?u=Vr(U):(g&=E,g!==0&&(u=Vr(g)))}else E=o&~h,E!==0?u=Vr(E):g!==0&&(u=Vr(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-$t(r),h=1<<o,u|=t[o],r&=~h;return u}function Hl(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dt(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes;0<g;){var E=31-$t(g),U=1<<E,G=h[E];G===-1?((U&o)===0||(U&u)!==0)&&(h[E]=Hl(U,r)):G<=r&&(t.expiredLanes|=U),g&=~U}}function ts(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fn(){var t=na;return na<<=1,(na&4194240)===0&&(na=64),t}function Kn(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function jr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-$t(r),t[r]=o}function Ti(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-$t(o),g=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~g}}function Ri(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-$t(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var qe=0;function lr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ia,pn,mn,sn,aa,ns=!1,Ai=[],Wr=null,Xr=null,Yr=null,rs=new Map,is=new Map,qr=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rd(t,r){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":rs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":is.delete(r.pointerId)}}function as(t,r,o,u,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=xs(r),r!==null&&pn(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function ug(t,r,o,u,h){switch(r){case"focusin":return Wr=as(Wr,t,r,o,u,h),!0;case"dragenter":return Xr=as(Xr,t,r,o,u,h),!0;case"mouseover":return Yr=as(Yr,t,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return rs.set(g,as(rs.get(g)||null,t,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,is.set(g,as(is.get(g)||null,t,r,o,u,h)),!0}return!1}function Ad(t){var r=bi(t.target);if(r!==null){var o=Ae(r);if(o!==null){if(r=o.tag,r===13){if(r=je(o),r!==null){t.blockedOn=r,aa(t.priority,function(){mn(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Vl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);At=u,o.target.dispatchEvent(u),At=null}else return r=xs(o),r!==null&&pn(r),t.blockedOn=o,!1;r.shift()}return!0}function bd(t,r,o){qs(t)&&o.delete(r)}function cg(){ns=!1,Wr!==null&&qs(Wr)&&(Wr=null),Xr!==null&&qs(Xr)&&(Xr=null),Yr!==null&&qs(Yr)&&(Yr=null),rs.forEach(bd),is.forEach(bd)}function ss(t,r){t.blockedOn===r&&(t.blockedOn=null,ns||(ns=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cg)))}function os(t){function r(h){return ss(h,t)}if(0<Ai.length){ss(Ai[0],t);for(var o=1;o<Ai.length;o++){var u=Ai[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Wr!==null&&ss(Wr,t),Xr!==null&&ss(Xr,t),Yr!==null&&ss(Yr,t),rs.forEach(r),is.forEach(r),o=0;o<qr.length;o++)u=qr[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<qr.length&&(o=qr[0],o.blockedOn===null);)Ad(o),o.blockedOn===null&&qr.shift()}var sa=V.ReactCurrentBatchConfig,Ks=!0;function dg(t,r,o,u){var h=qe,g=sa.transition;sa.transition=null;try{qe=1,Gl(t,r,o,u)}finally{qe=h,sa.transition=g}}function hg(t,r,o,u){var h=qe,g=sa.transition;sa.transition=null;try{qe=4,Gl(t,r,o,u)}finally{qe=h,sa.transition=g}}function Gl(t,r,o,u){if(Ks){var h=Vl(t,r,o,u);if(h===null)su(t,r,u,$s,o),Rd(t,u);else if(ug(h,t,r,o,u))u.stopPropagation();else if(Rd(t,u),r&4&&-1<lg.indexOf(t)){for(;h!==null;){var g=xs(h);if(g!==null&&ia(g),g=Vl(t,r,o,u),g===null&&su(t,r,u,$s,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else su(t,r,u,null,o)}}var $s=null;function Vl(t,r,o,u){if($s=null,t=Ct(u),t=bi(t),t!==null)if(r=Ae(t),r===null)t=null;else if(o=r.tag,o===13){if(t=je(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return $s=t,null}function Cd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xt()){case wt:return 1;case an:return 4;case Ot:case lt:return 16;case ut:return 536870912;default:return 16}default:return 16}}var Kr=null,jl=null,Zs=null;function Ld(){if(Zs)return Zs;var t,r=jl,o=r.length,u,h="value"in Kr?Kr.value:Kr.textContent,g=h.length;for(t=0;t<o&&r[t]===h[t];t++);var E=o-t;for(u=1;u<=E&&r[o-u]===h[g-u];u++);return Zs=h.slice(t,1<u?1-u:void 0)}function Qs(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Js(){return!0}function Pd(){return!1}function An(t){function r(o,u,h,g,E){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Js:Pd,this.isPropagationStopped=Pd,this}return D(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),r}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=An(oa),ls=D({},oa,{view:0,detail:0}),fg=An(ls),Xl,Yl,us,eo=D({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Xl=t.screenX-us.screenX,Yl=t.screenY-us.screenY):Yl=Xl=0,us=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),Nd=An(eo),pg=D({},eo,{dataTransfer:0}),mg=An(pg),gg=D({},ls,{relatedTarget:0}),ql=An(gg),vg=D({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=An(vg),xg=D({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yg=An(xg),Sg=D({},oa,{data:0}),Dd=An(Sg),Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tg(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=wg[t])?!!r[t]:!1}function Kl(){return Tg}var Rg=D({},ls,{key:function(t){if(t.key){var r=Eg[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?Qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ag=An(Rg),bg=D({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=An(bg),Cg=D({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Lg=An(Cg),Pg=D({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=An(Pg),Dg=D({},eo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ug=An(Dg),Ig=[9,13,27,32],$l=f&&"CompositionEvent"in window,cs=null;f&&"documentMode"in document&&(cs=document.documentMode);var Og=f&&"TextEvent"in window&&!cs,Id=f&&(!$l||cs&&8<cs&&11>=cs),Od=" ",Fd=!1;function kd(t,r){switch(t){case"keyup":return Ig.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var la=!1;function Fg(t,r){switch(t){case"compositionend":return zd(r);case"keypress":return r.which!==32?null:(Fd=!0,Od);case"textInput":return t=r.data,t===Od&&Fd?null:t;default:return null}}function kg(t,r){if(la)return t==="compositionend"||!$l&&kd(t,r)?(t=Ld(),Zs=jl=Kr=null,la=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Id&&r.locale!=="ko"?null:r.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!zg[t.type]:r==="textarea"}function Hd(t,r,o,u){Sr(u),r=ao(r,"onChange"),0<r.length&&(o=new Wl("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var ds=null,hs=null;function Bg(t){ah(t,0)}function to(t){var r=fa(t);if(Re(r))return t}function Hg(t,r){if(t==="change")return r}var Gd=!1;if(f){var Zl;if(f){var Ql="oninput"in document;if(!Ql){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Ql=typeof Vd.oninput=="function"}Zl=Ql}else Zl=!1;Gd=Zl&&(!document.documentMode||9<document.documentMode)}function jd(){ds&&(ds.detachEvent("onpropertychange",Wd),hs=ds=null)}function Wd(t){if(t.propertyName==="value"&&to(hs)){var r=[];Hd(r,hs,t,Ct(t)),es(Bg,r)}}function Gg(t,r,o){t==="focusin"?(jd(),ds=r,hs=o,ds.attachEvent("onpropertychange",Wd)):t==="focusout"&&jd()}function Vg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return to(hs)}function jg(t,r){if(t==="click")return to(r)}function Wg(t,r){if(t==="input"||t==="change")return to(r)}function Xg(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var $n=typeof Object.is=="function"?Object.is:Xg;function fs(t,r){if($n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!p.call(r,h)||!$n(t[h],r[h]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yd(t,r){var o=Xd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xd(o)}}function qd(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?qd(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Kd(){for(var t=window,r=Pe();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Pe(t.document)}return r}function Jl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Yg(t){var r=Kd(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&qd(o.ownerDocument.documentElement,o)){if(u!==null&&Jl(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!t.extend&&g>u&&(h=u,u=g,g=h),h=Yd(o,g);var E=Yd(o,u);h&&E&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),g>u?(t.addRange(r),t.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qg=f&&"documentMode"in document&&11>=document.documentMode,ua=null,eu=null,ps=null,tu=!1;function $d(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tu||ua==null||ua!==Pe(u)||(u=ua,"selectionStart"in u&&Jl(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ps&&fs(ps,u)||(ps=u,u=ao(eu,"onSelect"),0<u.length&&(r=new Wl("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=ua)))}function no(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var ca={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},nu={},Zd={};f&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function ro(t){if(nu[t])return nu[t];if(!ca[t])return t;var r=ca[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Zd)return nu[t]=r[o];return t}var Qd=ro("animationend"),Jd=ro("animationiteration"),eh=ro("animationstart"),th=ro("transitionend"),nh=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,r){nh.set(t,r),l(r,[t])}for(var ru=0;ru<rh.length;ru++){var iu=rh[ru],Kg=iu.toLowerCase(),$g=iu[0].toUpperCase()+iu.slice(1);$r(Kg,"on"+$g)}$r(Qd,"onAnimationEnd"),$r(Jd,"onAnimationIteration"),$r(eh,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function ih(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,ge(u,r,void 0,t),t.currentTarget=null}function ah(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var E=u.length-1;0<=E;E--){var U=u[E],G=U.instance,se=U.currentTarget;if(U=U.listener,G!==g&&h.isPropagationStopped())break e;ih(h,U,se),g=G}else for(E=0;E<u.length;E++){if(U=u[E],G=U.instance,se=U.currentTarget,U=U.listener,G!==g&&h.isPropagationStopped())break e;ih(h,U,se),g=G}}}if(N)throw t=oe,N=!1,oe=null,t}function yt(t,r){var o=r[hu];o===void 0&&(o=r[hu]=new Set);var u=t+"__bubble";o.has(u)||(sh(r,t,2,!1),o.add(u))}function au(t,r,o){var u=0;r&&(u|=4),sh(o,t,u,r)}var io="_reactListening"+Math.random().toString(36).slice(2);function gs(t){if(!t[io]){t[io]=!0,i.forEach(function(o){o!=="selectionchange"&&(Zg.has(o)||au(o,!1,t),au(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[io]||(r[io]=!0,au("selectionchange",!1,r))}}function sh(t,r,o,u){switch(Cd(r)){case 1:var h=dg;break;case 4:h=hg;break;default:h=Gl}o=h.bind(null,r,o,t),h=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function su(t,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;E=E.return}for(;U!==null;){if(E=bi(U),E===null)return;if(G=E.tag,G===5||G===6){u=g=E;continue e}U=U.parentNode}}u=u.return}es(function(){var se=g,xe=Ct(o),ye=[];e:{var ve=nh.get(t);if(ve!==void 0){var De=Wl,Oe=t;switch(t){case"keypress":if(Qs(o)===0)break e;case"keydown":case"keyup":De=Ag;break;case"focusin":Oe="focus",De=ql;break;case"focusout":Oe="blur",De=ql;break;case"beforeblur":case"afterblur":De=ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Lg;break;case Qd:case Jd:case eh:De=_g;break;case th:De=Ng;break;case"scroll":De=fg;break;case"wheel":De=Ug;break;case"copy":case"cut":case"paste":De=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Ud}var ze=(r&4)!==0,Lt=!ze&&t==="scroll",J=ze?ve!==null?ve+"Capture":null:ve;ze=[];for(var Y=se,ee;Y!==null;){ee=Y;var we=ee.stateNode;if(ee.tag===5&&we!==null&&(ee=we,J!==null&&(we=zr(Y,J),we!=null&&ze.push(vs(Y,we,ee)))),Lt)break;Y=Y.return}0<ze.length&&(ve=new De(ve,Oe,null,o,xe),ye.push({event:ve,listeners:ze}))}}if((r&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ve&&o!==At&&(Oe=o.relatedTarget||o.fromElement)&&(bi(Oe)||Oe[Er]))break e;if((De||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,De?(Oe=o.relatedTarget||o.toElement,De=se,Oe=Oe?bi(Oe):null,Oe!==null&&(Lt=Ae(Oe),Oe!==Lt||Oe.tag!==5&&Oe.tag!==6)&&(Oe=null)):(De=null,Oe=se),De!==Oe)){if(ze=Nd,we="onMouseLeave",J="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ze=Ud,we="onPointerLeave",J="onPointerEnter",Y="pointer"),Lt=De==null?ve:fa(De),ee=Oe==null?ve:fa(Oe),ve=new ze(we,Y+"leave",De,o,xe),ve.target=Lt,ve.relatedTarget=ee,we=null,bi(xe)===se&&(ze=new ze(J,Y+"enter",Oe,o,xe),ze.target=ee,ze.relatedTarget=Lt,we=ze),Lt=we,De&&Oe)t:{for(ze=De,J=Oe,Y=0,ee=ze;ee;ee=da(ee))Y++;for(ee=0,we=J;we;we=da(we))ee++;for(;0<Y-ee;)ze=da(ze),Y--;for(;0<ee-Y;)J=da(J),ee--;for(;Y--;){if(ze===J||J!==null&&ze===J.alternate)break t;ze=da(ze),J=da(J)}ze=null}else ze=null;De!==null&&oh(ye,ve,De,ze,!1),Oe!==null&&Lt!==null&&oh(ye,Lt,Oe,ze,!0)}}e:{if(ve=se?fa(se):window,De=ve.nodeName&&ve.nodeName.toLowerCase(),De==="select"||De==="input"&&ve.type==="file")var Be=Hg;else if(Bd(ve))if(Gd)Be=Wg;else{Be=Vg;var Ge=Gg}else(De=ve.nodeName)&&De.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Be=jg);if(Be&&(Be=Be(t,se))){Hd(ye,Be,o,xe);break e}Ge&&Ge(t,ve,se),t==="focusout"&&(Ge=ve._wrapperState)&&Ge.controlled&&ve.type==="number"&&Le(ve,"number",ve.value)}switch(Ge=se?fa(se):window,t){case"focusin":(Bd(Ge)||Ge.contentEditable==="true")&&(ua=Ge,eu=se,ps=null);break;case"focusout":ps=eu=ua=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,$d(ye,o,xe);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":$d(ye,o,xe)}var Ve;if($l)e:{switch(t){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else la?kd(t,o)&&(Ye="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Ye="onCompositionStart");Ye&&(Id&&o.locale!=="ko"&&(la||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&la&&(Ve=Ld()):(Kr=xe,jl="value"in Kr?Kr.value:Kr.textContent,la=!0)),Ge=ao(se,Ye),0<Ge.length&&(Ye=new Dd(Ye,t,null,o,xe),ye.push({event:Ye,listeners:Ge}),Ve?Ye.data=Ve:(Ve=zd(o),Ve!==null&&(Ye.data=Ve)))),(Ve=Og?Fg(t,o):kg(t,o))&&(se=ao(se,"onBeforeInput"),0<se.length&&(xe=new Dd("onBeforeInput","beforeinput",null,o,xe),ye.push({event:xe,listeners:se}),xe.data=Ve))}ah(ye,r)})}function vs(t,r,o){return{instance:t,listener:r,currentTarget:o}}function ao(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=zr(t,o),g!=null&&u.unshift(vs(t,g,h)),g=zr(t,r),g!=null&&u.push(vs(t,g,h))),t=t.return}return u}function da(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oh(t,r,o,u,h){for(var g=r._reactName,E=[];o!==null&&o!==u;){var U=o,G=U.alternate,se=U.stateNode;if(G!==null&&G===u)break;U.tag===5&&se!==null&&(U=se,h?(G=zr(o,g),G!=null&&E.unshift(vs(o,G,U))):h||(G=zr(o,g),G!=null&&E.push(vs(o,G,U)))),o=o.return}E.length!==0&&t.push({event:r,listeners:E})}var Qg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function lh(t){return(typeof t=="string"?t:""+t).replace(Qg,`
`).replace(Jg,"")}function so(t,r,o){if(r=lh(r),lh(t)!==r&&o)throw Error(n(425))}function oo(){}var ou=null,lu=null;function uu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(t){return uh.resolve(null).then(t).catch(nv)}:cu;function nv(t){setTimeout(function(){throw t})}function du(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),os(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);os(r)}function Zr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ch(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var ha=Math.random().toString(36).slice(2),ur="__reactFiber$"+ha,_s="__reactProps$"+ha,Er="__reactContainer$"+ha,hu="__reactEvents$"+ha,rv="__reactListeners$"+ha,iv="__reactHandles$"+ha;function bi(t){var r=t[ur];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Er]||o[ur]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=ch(t);t!==null;){if(o=t[ur])return o;t=ch(t)}return r}t=o,o=t.parentNode}return null}function xs(t){return t=t[ur]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function lo(t){return t[_s]||null}var fu=[],pa=-1;function Qr(t){return{current:t}}function St(t){0>pa||(t.current=fu[pa],fu[pa]=null,pa--)}function _t(t,r){pa++,fu[pa]=t.current,t.current=r}var Jr={},Zt=Qr(Jr),gn=Qr(!1),Ci=Jr;function ma(t,r){var o=t.type.contextTypes;if(!o)return Jr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function vn(t){return t=t.childContextTypes,t!=null}function uo(){St(gn),St(Zt)}function dh(t,r,o){if(Zt.current!==Jr)throw Error(n(168));_t(Zt,r),_t(gn,o)}function hh(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,k(t)||"Unknown",h));return D({},o,u)}function co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Ci=Zt.current,_t(Zt,t),_t(gn,gn.current),!0}function fh(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=hh(t,r,Ci),u.__reactInternalMemoizedMergedChildContext=t,St(gn),St(Zt),_t(Zt,t)):St(gn),_t(gn,o)}var Mr=null,ho=!1,pu=!1;function ph(t){Mr===null?Mr=[t]:Mr.push(t)}function av(t){ho=!0,ph(t)}function ei(){if(!pu&&Mr!==null){pu=!0;var t=0,r=qe;try{var o=Mr;for(qe=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Mr=null,ho=!1}catch(h){throw Mr!==null&&(Mr=Mr.slice(t+1)),it(wt,ei),h}finally{qe=r,pu=!1}}return null}var ga=[],va=0,fo=null,po=0,Fn=[],kn=0,Li=null,wr=1,Tr="";function Pi(t,r){ga[va++]=po,ga[va++]=fo,fo=t,po=r}function mh(t,r,o){Fn[kn++]=wr,Fn[kn++]=Tr,Fn[kn++]=Li,Li=t;var u=wr;t=Tr;var h=32-$t(u)-1;u&=~(1<<h),o+=1;var g=32-$t(r)+h;if(30<g){var E=h-h%5;g=(u&(1<<E)-1).toString(32),u>>=E,h-=E,wr=1<<32-$t(r)+h|o<<h|u,Tr=g+t}else wr=1<<g|o<<h|u,Tr=t}function mu(t){t.return!==null&&(Pi(t,1),mh(t,1,0))}function gu(t){for(;t===fo;)fo=ga[--va],ga[va]=null,po=ga[--va],ga[va]=null;for(;t===Li;)Li=Fn[--kn],Fn[kn]=null,Tr=Fn[--kn],Fn[kn]=null,wr=Fn[--kn],Fn[kn]=null}var bn=null,Cn=null,Mt=!1,Zn=null;function gh(t,r){var o=Gn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function vh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,bn=t,Cn=Zr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,bn=t,Cn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Li!==null?{id:wr,overflow:Tr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Gn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,bn=t,Cn=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _u(t){if(Mt){var r=Cn;if(r){var o=r;if(!vh(t,r)){if(vu(t))throw Error(n(418));r=Zr(o.nextSibling);var u=bn;r&&vh(t,r)?gh(u,o):(t.flags=t.flags&-4097|2,Mt=!1,bn=t)}}else{if(vu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Mt=!1,bn=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function mo(t){if(t!==bn)return!1;if(!Mt)return _h(t),Mt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!uu(t.type,t.memoizedProps)),r&&(r=Cn)){if(vu(t))throw xh(),Error(n(418));for(;r;)gh(t,r),r=Zr(r.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Cn=Zr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Cn=null}}else Cn=bn?Zr(t.stateNode.nextSibling):null;return!0}function xh(){for(var t=Cn;t;)t=Zr(t.nextSibling)}function _a(){Cn=bn=null,Mt=!1}function xu(t){Zn===null?Zn=[t]:Zn.push(t)}var sv=V.ReactCurrentBatchConfig;function ys(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,g=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(E){var U=h.refs;E===null?delete U[g]:U[g]=E},r._stringRef=g,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function go(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function yh(t){var r=t._init;return r(t._payload)}function Sh(t){function r(J,Y){if(t){var ee=J.deletions;ee===null?(J.deletions=[Y],J.flags|=16):ee.push(Y)}}function o(J,Y){if(!t)return null;for(;Y!==null;)r(J,Y),Y=Y.sibling;return null}function u(J,Y){for(J=new Map;Y!==null;)Y.key!==null?J.set(Y.key,Y):J.set(Y.index,Y),Y=Y.sibling;return J}function h(J,Y){return J=li(J,Y),J.index=0,J.sibling=null,J}function g(J,Y,ee){return J.index=ee,t?(ee=J.alternate,ee!==null?(ee=ee.index,ee<Y?(J.flags|=2,Y):ee):(J.flags|=2,Y)):(J.flags|=1048576,Y)}function E(J){return t&&J.alternate===null&&(J.flags|=2),J}function U(J,Y,ee,we){return Y===null||Y.tag!==6?(Y=cc(ee,J.mode,we),Y.return=J,Y):(Y=h(Y,ee),Y.return=J,Y)}function G(J,Y,ee,we){var Be=ee.type;return Be===O?xe(J,Y,ee.props.children,we,ee.key):Y!==null&&(Y.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===Me&&yh(Be)===Y.type)?(we=h(Y,ee.props),we.ref=ys(J,Y,ee),we.return=J,we):(we=Bo(ee.type,ee.key,ee.props,null,J.mode,we),we.ref=ys(J,Y,ee),we.return=J,we)}function se(J,Y,ee,we){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ee.containerInfo||Y.stateNode.implementation!==ee.implementation?(Y=dc(ee,J.mode,we),Y.return=J,Y):(Y=h(Y,ee.children||[]),Y.return=J,Y)}function xe(J,Y,ee,we,Be){return Y===null||Y.tag!==7?(Y=zi(ee,J.mode,we,Be),Y.return=J,Y):(Y=h(Y,ee),Y.return=J,Y)}function ye(J,Y,ee){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=cc(""+Y,J.mode,ee),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case z:return ee=Bo(Y.type,Y.key,Y.props,null,J.mode,ee),ee.ref=ys(J,null,Y),ee.return=J,ee;case I:return Y=dc(Y,J.mode,ee),Y.return=J,Y;case Me:var we=Y._init;return ye(J,we(Y._payload),ee)}if(be(Y)||q(Y))return Y=zi(Y,J.mode,ee,null),Y.return=J,Y;go(J,Y)}return null}function ve(J,Y,ee,we){var Be=Y!==null?Y.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Be!==null?null:U(J,Y,""+ee,we);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case z:return ee.key===Be?G(J,Y,ee,we):null;case I:return ee.key===Be?se(J,Y,ee,we):null;case Me:return Be=ee._init,ve(J,Y,Be(ee._payload),we)}if(be(ee)||q(ee))return Be!==null?null:xe(J,Y,ee,we,null);go(J,ee)}return null}function De(J,Y,ee,we,Be){if(typeof we=="string"&&we!==""||typeof we=="number")return J=J.get(ee)||null,U(Y,J,""+we,Be);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case z:return J=J.get(we.key===null?ee:we.key)||null,G(Y,J,we,Be);case I:return J=J.get(we.key===null?ee:we.key)||null,se(Y,J,we,Be);case Me:var Ge=we._init;return De(J,Y,ee,Ge(we._payload),Be)}if(be(we)||q(we))return J=J.get(ee)||null,xe(Y,J,we,Be,null);go(Y,we)}return null}function Oe(J,Y,ee,we){for(var Be=null,Ge=null,Ve=Y,Ye=Y=0,Wt=null;Ve!==null&&Ye<ee.length;Ye++){Ve.index>Ye?(Wt=Ve,Ve=null):Wt=Ve.sibling;var ft=ve(J,Ve,ee[Ye],we);if(ft===null){Ve===null&&(Ve=Wt);break}t&&Ve&&ft.alternate===null&&r(J,Ve),Y=g(ft,Y,Ye),Ge===null?Be=ft:Ge.sibling=ft,Ge=ft,Ve=Wt}if(Ye===ee.length)return o(J,Ve),Mt&&Pi(J,Ye),Be;if(Ve===null){for(;Ye<ee.length;Ye++)Ve=ye(J,ee[Ye],we),Ve!==null&&(Y=g(Ve,Y,Ye),Ge===null?Be=Ve:Ge.sibling=Ve,Ge=Ve);return Mt&&Pi(J,Ye),Be}for(Ve=u(J,Ve);Ye<ee.length;Ye++)Wt=De(Ve,J,Ye,ee[Ye],we),Wt!==null&&(t&&Wt.alternate!==null&&Ve.delete(Wt.key===null?Ye:Wt.key),Y=g(Wt,Y,Ye),Ge===null?Be=Wt:Ge.sibling=Wt,Ge=Wt);return t&&Ve.forEach(function(ui){return r(J,ui)}),Mt&&Pi(J,Ye),Be}function ze(J,Y,ee,we){var Be=q(ee);if(typeof Be!="function")throw Error(n(150));if(ee=Be.call(ee),ee==null)throw Error(n(151));for(var Ge=Be=null,Ve=Y,Ye=Y=0,Wt=null,ft=ee.next();Ve!==null&&!ft.done;Ye++,ft=ee.next()){Ve.index>Ye?(Wt=Ve,Ve=null):Wt=Ve.sibling;var ui=ve(J,Ve,ft.value,we);if(ui===null){Ve===null&&(Ve=Wt);break}t&&Ve&&ui.alternate===null&&r(J,Ve),Y=g(ui,Y,Ye),Ge===null?Be=ui:Ge.sibling=ui,Ge=ui,Ve=Wt}if(ft.done)return o(J,Ve),Mt&&Pi(J,Ye),Be;if(Ve===null){for(;!ft.done;Ye++,ft=ee.next())ft=ye(J,ft.value,we),ft!==null&&(Y=g(ft,Y,Ye),Ge===null?Be=ft:Ge.sibling=ft,Ge=ft);return Mt&&Pi(J,Ye),Be}for(Ve=u(J,Ve);!ft.done;Ye++,ft=ee.next())ft=De(Ve,J,Ye,ft.value,we),ft!==null&&(t&&ft.alternate!==null&&Ve.delete(ft.key===null?Ye:ft.key),Y=g(ft,Y,Ye),Ge===null?Be=ft:Ge.sibling=ft,Ge=ft);return t&&Ve.forEach(function(zv){return r(J,zv)}),Mt&&Pi(J,Ye),Be}function Lt(J,Y,ee,we){if(typeof ee=="object"&&ee!==null&&ee.type===O&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case z:e:{for(var Be=ee.key,Ge=Y;Ge!==null;){if(Ge.key===Be){if(Be=ee.type,Be===O){if(Ge.tag===7){o(J,Ge.sibling),Y=h(Ge,ee.props.children),Y.return=J,J=Y;break e}}else if(Ge.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===Me&&yh(Be)===Ge.type){o(J,Ge.sibling),Y=h(Ge,ee.props),Y.ref=ys(J,Ge,ee),Y.return=J,J=Y;break e}o(J,Ge);break}else r(J,Ge);Ge=Ge.sibling}ee.type===O?(Y=zi(ee.props.children,J.mode,we,ee.key),Y.return=J,J=Y):(we=Bo(ee.type,ee.key,ee.props,null,J.mode,we),we.ref=ys(J,Y,ee),we.return=J,J=we)}return E(J);case I:e:{for(Ge=ee.key;Y!==null;){if(Y.key===Ge)if(Y.tag===4&&Y.stateNode.containerInfo===ee.containerInfo&&Y.stateNode.implementation===ee.implementation){o(J,Y.sibling),Y=h(Y,ee.children||[]),Y.return=J,J=Y;break e}else{o(J,Y);break}else r(J,Y);Y=Y.sibling}Y=dc(ee,J.mode,we),Y.return=J,J=Y}return E(J);case Me:return Ge=ee._init,Lt(J,Y,Ge(ee._payload),we)}if(be(ee))return Oe(J,Y,ee,we);if(q(ee))return ze(J,Y,ee,we);go(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,Y!==null&&Y.tag===6?(o(J,Y.sibling),Y=h(Y,ee),Y.return=J,J=Y):(o(J,Y),Y=cc(ee,J.mode,we),Y.return=J,J=Y),E(J)):o(J,Y)}return Lt}var xa=Sh(!0),Eh=Sh(!1),vo=Qr(null),_o=null,ya=null,yu=null;function Su(){yu=ya=_o=null}function Eu(t){var r=vo.current;St(vo),t._currentValue=r}function Mu(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Sa(t,r){_o=t,yu=ya=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(_n=!0),t.firstContext=null)}function zn(t){var r=t._currentValue;if(yu!==t)if(t={context:t,memoizedValue:r,next:null},ya===null){if(_o===null)throw Error(n(308));ya=t,_o.dependencies={lanes:0,firstContext:t}}else ya=ya.next=t;return r}var Ni=null;function wu(t){Ni===null?Ni=[t]:Ni.push(t)}function Mh(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,wu(r)):(o.next=h.next,h.next=o),r.interleaved=o,Rr(t,u)}function Rr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ti=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ni(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(ht&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,Rr(t,o)}return h=u.interleaved,h===null?(r.next=r,wu(u)):(r.next=h.next,h.next=r),u.interleaved=r,Rr(t,o)}function xo(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Ri(t,o)}}function Th(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function yo(t,r,o,u){var h=t.updateQueue;ti=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var G=U,se=G.next;G.next=null,E===null?g=se:E.next=se,E=G;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==E&&(U===null?xe.firstBaseUpdate=se:U.next=se,xe.lastBaseUpdate=G))}if(g!==null){var ye=h.baseState;E=0,xe=se=G=null,U=g;do{var ve=U.lane,De=U.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:De,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Oe=t,ze=U;switch(ve=r,De=o,ze.tag){case 1:if(Oe=ze.payload,typeof Oe=="function"){ye=Oe.call(De,ye,ve);break e}ye=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=ze.payload,ve=typeof Oe=="function"?Oe.call(De,ye,ve):Oe,ve==null)break e;ye=D({},ye,ve);break e;case 2:ti=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ve=h.effects,ve===null?h.effects=[U]:ve.push(U))}else De={eventTime:De,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(se=xe=De,G=ye):xe=xe.next=De,E|=ve;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(xe===null&&(G=ye),h.baseState=G,h.firstBaseUpdate=se,h.lastBaseUpdate=xe,r=h.shared.interleaved,r!==null){h=r;do E|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Ii|=E,t.lanes=E,t.memoizedState=ye}}function Rh(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var Ss={},cr=Qr(Ss),Es=Qr(Ss),Ms=Qr(Ss);function Di(t){if(t===Ss)throw Error(n(174));return t}function Ru(t,r){switch(_t(Ms,r),_t(Es,t),_t(cr,Ss),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=He(r,t)}St(cr),_t(cr,r)}function Ea(){St(cr),St(Es),St(Ms)}function Ah(t){Di(Ms.current);var r=Di(cr.current),o=He(r,t.type);r!==o&&(_t(Es,t),_t(cr,o))}function Au(t){Es.current===t&&(St(cr),St(Es))}var Tt=Qr(0);function So(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var bu=[];function Cu(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var Eo=V.ReactCurrentDispatcher,Lu=V.ReactCurrentBatchConfig,Ui=0,Rt=null,Ft=null,Vt=null,Mo=!1,ws=!1,Ts=0,ov=0;function Qt(){throw Error(n(321))}function Pu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!$n(t[o],r[o]))return!1;return!0}function Nu(t,r,o,u,h,g){if(Ui=g,Rt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Eo.current=t===null||t.memoizedState===null?dv:hv,t=o(u,h),ws){g=0;do{if(ws=!1,Ts=0,25<=g)throw Error(n(301));g+=1,Vt=Ft=null,r.updateQueue=null,Eo.current=fv,t=o(u,h)}while(ws)}if(Eo.current=Ro,r=Ft!==null&&Ft.next!==null,Ui=0,Vt=Ft=Rt=null,Mo=!1,r)throw Error(n(300));return t}function Du(){var t=Ts!==0;return Ts=0,t}function dr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Rt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Bn(){if(Ft===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var r=Vt===null?Rt.memoizedState:Vt.next;if(r!==null)Vt=r,Ft=t;else{if(t===null)throw Error(n(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?Rt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Rs(t,r){return typeof r=="function"?r(t):r}function Uu(t){var r=Bn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Ft,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=E=null,G=null,se=g;do{var xe=se.lane;if((Ui&xe)===xe)G!==null&&(G=G.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:t(u,se.action);else{var ye={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};G===null?(U=G=ye,E=u):G=G.next=ye,Rt.lanes|=xe,Ii|=xe}se=se.next}while(se!==null&&se!==g);G===null?E=u:G.next=U,$n(u,r.memoizedState)||(_n=!0),r.memoizedState=u,r.baseState=E,r.baseQueue=G,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do g=h.lane,Rt.lanes|=g,Ii|=g,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Iu(t){var r=Bn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do g=t(g,E.action),E=E.next;while(E!==h);$n(g,r.memoizedState)||(_n=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function bh(){}function Ch(t,r){var o=Rt,u=Bn(),h=r(),g=!$n(u.memoizedState,h);if(g&&(u.memoizedState=h,_n=!0),u=u.queue,Ou(Nh.bind(null,o,u,t),[t]),u.getSnapshot!==r||g||Vt!==null&&Vt.memoizedState.tag&1){if(o.flags|=2048,As(9,Ph.bind(null,o,u,h,r),void 0,null),jt===null)throw Error(n(349));(Ui&30)!==0||Lh(o,r,h)}return h}function Lh(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Rt.updateQueue,r===null?(r={lastEffect:null,stores:null},Rt.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Ph(t,r,o,u){r.value=o,r.getSnapshot=u,Dh(r)&&Uh(t)}function Nh(t,r,o){return o(function(){Dh(r)&&Uh(t)})}function Dh(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!$n(t,o)}catch{return!0}}function Uh(t){var r=Rr(t,1);r!==null&&tr(r,t,1,-1)}function Ih(t){var r=dr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:t},r.queue=t,t=t.dispatch=cv.bind(null,Rt,t),[r.memoizedState,t]}function As(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=Rt.updateQueue,r===null?(r={lastEffect:null,stores:null},Rt.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function Oh(){return Bn().memoizedState}function wo(t,r,o,u){var h=dr();Rt.flags|=t,h.memoizedState=As(1|r,o,void 0,u===void 0?null:u)}function To(t,r,o,u){var h=Bn();u=u===void 0?null:u;var g=void 0;if(Ft!==null){var E=Ft.memoizedState;if(g=E.destroy,u!==null&&Pu(u,E.deps)){h.memoizedState=As(r,o,g,u);return}}Rt.flags|=t,h.memoizedState=As(1|r,o,g,u)}function Fh(t,r){return wo(8390656,8,t,r)}function Ou(t,r){return To(2048,8,t,r)}function kh(t,r){return To(4,2,t,r)}function zh(t,r){return To(4,4,t,r)}function Bh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Hh(t,r,o){return o=o!=null?o.concat([t]):null,To(4,4,Bh.bind(null,r,t),o)}function Fu(){}function Gh(t,r){var o=Bn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Pu(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function Vh(t,r){var o=Bn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Pu(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function jh(t,r,o){return(Ui&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=o):($n(o,r)||(o=fn(),Rt.lanes|=o,Ii|=o,t.baseState=!0),r)}function lv(t,r){var o=qe;qe=o!==0&&4>o?o:4,t(!0);var u=Lu.transition;Lu.transition={};try{t(!1),r()}finally{qe=o,Lu.transition=u}}function Wh(){return Bn().memoizedState}function uv(t,r,o){var u=si(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Xh(t))Yh(r,o);else if(o=Mh(t,r,o,u),o!==null){var h=ln();tr(o,t,u,h),qh(o,r,u)}}function cv(t,r,o){var u=si(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xh(t))Yh(r,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,U=g(E,o);if(h.hasEagerState=!0,h.eagerState=U,$n(U,E)){var G=r.interleaved;G===null?(h.next=h,wu(r)):(h.next=G.next,G.next=h),r.interleaved=h;return}}catch{}finally{}o=Mh(t,r,h,u),o!==null&&(h=ln(),tr(o,t,u,h),qh(o,r,u))}}function Xh(t){var r=t.alternate;return t===Rt||r!==null&&r===Rt}function Yh(t,r){ws=Mo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function qh(t,r,o){if((o&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Ri(t,o)}}var Ro={readContext:zn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},dv={readContext:zn,useCallback:function(t,r){return dr().memoizedState=[t,r===void 0?null:r],t},useContext:zn,useEffect:Fh,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,wo(4194308,4,Bh.bind(null,r,t),o)},useLayoutEffect:function(t,r){return wo(4194308,4,t,r)},useInsertionEffect:function(t,r){return wo(4,2,t,r)},useMemo:function(t,r){var o=dr();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=dr();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=uv.bind(null,Rt,t),[u.memoizedState,t]},useRef:function(t){var r=dr();return t={current:t},r.memoizedState=t},useState:Ih,useDebugValue:Fu,useDeferredValue:function(t){return dr().memoizedState=t},useTransition:function(){var t=Ih(!1),r=t[0];return t=lv.bind(null,t[1]),dr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=Rt,h=dr();if(Mt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),jt===null)throw Error(n(349));(Ui&30)!==0||Lh(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,Fh(Nh.bind(null,u,g,t),[t]),u.flags|=2048,As(9,Ph.bind(null,u,g,o,r),void 0,null),o},useId:function(){var t=dr(),r=jt.identifierPrefix;if(Mt){var o=Tr,u=wr;o=(u&~(1<<32-$t(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ts++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=ov++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},hv={readContext:zn,useCallback:Gh,useContext:zn,useEffect:Ou,useImperativeHandle:Hh,useInsertionEffect:kh,useLayoutEffect:zh,useMemo:Vh,useReducer:Uu,useRef:Oh,useState:function(){return Uu(Rs)},useDebugValue:Fu,useDeferredValue:function(t){var r=Bn();return jh(r,Ft.memoizedState,t)},useTransition:function(){var t=Uu(Rs)[0],r=Bn().memoizedState;return[t,r]},useMutableSource:bh,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1},fv={readContext:zn,useCallback:Gh,useContext:zn,useEffect:Ou,useImperativeHandle:Hh,useInsertionEffect:kh,useLayoutEffect:zh,useMemo:Vh,useReducer:Iu,useRef:Oh,useState:function(){return Iu(Rs)},useDebugValue:Fu,useDeferredValue:function(t){var r=Bn();return Ft===null?r.memoizedState=t:jh(r,Ft.memoizedState,t)},useTransition:function(){var t=Iu(Rs)[0],r=Bn().memoizedState;return[t,r]},useMutableSource:bh,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1};function Qn(t,r){if(t&&t.defaultProps){r=D({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function ku(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:D({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ao={isMounted:function(t){return(t=t._reactInternals)?Ae(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=ln(),h=si(t),g=Ar(u,h);g.payload=r,o!=null&&(g.callback=o),r=ni(t,g,h),r!==null&&(tr(r,t,h,u),xo(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=ln(),h=si(t),g=Ar(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=ni(t,g,h),r!==null&&(tr(r,t,h,u),xo(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=ln(),u=si(t),h=Ar(o,u);h.tag=2,r!=null&&(h.callback=r),r=ni(t,h,u),r!==null&&(tr(r,t,u,o),xo(r,t,u))}};function Kh(t,r,o,u,h,g,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,g,E):r.prototype&&r.prototype.isPureReactComponent?!fs(o,u)||!fs(h,g):!0}function $h(t,r,o){var u=!1,h=Jr,g=r.contextType;return typeof g=="object"&&g!==null?g=zn(g):(h=vn(r)?Ci:Zt.current,u=r.contextTypes,g=(u=u!=null)?ma(t,h):Jr),r=new r(o,g),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ao,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=g),r}function Zh(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&Ao.enqueueReplaceState(r,r.state,null)}function zu(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},Tu(t);var g=r.contextType;typeof g=="object"&&g!==null?h.context=zn(g):(g=vn(r)?Ci:Zt.current,h.context=ma(t,g)),h.state=t.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(ku(t,r,g,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Ao.enqueueReplaceState(h,h.state,null),yo(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ma(t,r){try{var o="",u=r;do o+=H(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:r,stack:h,digest:null}}function Bu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Hu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var pv=typeof WeakMap=="function"?WeakMap:Map;function Qh(t,r,o){o=Ar(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Uo||(Uo=!0,nc=u),Hu(t,r)},o}function Jh(t,r,o){o=Ar(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Hu(t,r)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Hu(t,r),typeof u!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),o}function ef(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new pv;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=bv.bind(null,t,r,o),r.then(t,t))}function tf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function nf(t,r,o,u,h){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ar(-1,1),r.tag=2,ni(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var mv=V.ReactCurrentOwner,_n=!1;function on(t,r,o,u){r.child=t===null?Eh(r,null,o,u):xa(r,t.child,o,u)}function rf(t,r,o,u,h){o=o.render;var g=r.ref;return Sa(r,h),u=Nu(t,r,o,u,g,h),o=Du(),t!==null&&!_n?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,br(t,r,h)):(Mt&&o&&mu(r),r.flags|=1,on(t,r,u,h),r.child)}function af(t,r,o,u,h){if(t===null){var g=o.type;return typeof g=="function"&&!uc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,sf(t,r,g,u,h)):(t=Bo(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(g=t.child,(t.lanes&h)===0){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:fs,o(E,u)&&t.ref===r.ref)return br(t,r,h)}return r.flags|=1,t=li(g,u),t.ref=r.ref,t.return=r,r.child=t}function sf(t,r,o,u,h){if(t!==null){var g=t.memoizedProps;if(fs(g,u)&&t.ref===r.ref)if(_n=!1,r.pendingProps=u=g,(t.lanes&h)!==0)(t.flags&131072)!==0&&(_n=!0);else return r.lanes=t.lanes,br(t,r,h)}return Gu(t,r,o,u,h)}function of(t,r,o){var u=r.pendingProps,h=u.children,g=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Ta,Ln),Ln|=o;else{if((o&1073741824)===0)return t=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,_t(Ta,Ln),Ln|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,_t(Ta,Ln),Ln|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,_t(Ta,Ln),Ln|=u;return on(t,r,h,o),r.child}function lf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Gu(t,r,o,u,h){var g=vn(o)?Ci:Zt.current;return g=ma(r,g),Sa(r,h),o=Nu(t,r,o,u,g,h),u=Du(),t!==null&&!_n?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,br(t,r,h)):(Mt&&u&&mu(r),r.flags|=1,on(t,r,o,h),r.child)}function uf(t,r,o,u,h){if(vn(o)){var g=!0;co(r)}else g=!1;if(Sa(r,h),r.stateNode===null)Co(t,r),$h(r,o,u),zu(r,o,u,h),u=!0;else if(t===null){var E=r.stateNode,U=r.memoizedProps;E.props=U;var G=E.context,se=o.contextType;typeof se=="object"&&se!==null?se=zn(se):(se=vn(o)?Ci:Zt.current,se=ma(r,se));var xe=o.getDerivedStateFromProps,ye=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||G!==se)&&Zh(r,E,u,se),ti=!1;var ve=r.memoizedState;E.state=ve,yo(r,u,E,h),G=r.memoizedState,U!==u||ve!==G||gn.current||ti?(typeof xe=="function"&&(ku(r,o,xe,u),G=r.memoizedState),(U=ti||Kh(r,o,U,u,ve,G,se))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=G),E.props=u,E.state=G,E.context=se,u=U):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{E=r.stateNode,wh(t,r),U=r.memoizedProps,se=r.type===r.elementType?U:Qn(r.type,U),E.props=se,ye=r.pendingProps,ve=E.context,G=o.contextType,typeof G=="object"&&G!==null?G=zn(G):(G=vn(o)?Ci:Zt.current,G=ma(r,G));var De=o.getDerivedStateFromProps;(xe=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==ye||ve!==G)&&Zh(r,E,u,G),ti=!1,ve=r.memoizedState,E.state=ve,yo(r,u,E,h);var Oe=r.memoizedState;U!==ye||ve!==Oe||gn.current||ti?(typeof De=="function"&&(ku(r,o,De,u),Oe=r.memoizedState),(se=ti||Kh(r,o,se,u,ve,Oe,G)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Oe,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Oe,G)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Oe),E.props=u,E.state=Oe,E.context=G,u=se):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(r.flags|=1024),u=!1)}return Vu(t,r,o,u,g,h)}function Vu(t,r,o,u,h,g){lf(t,r);var E=(r.flags&128)!==0;if(!u&&!E)return h&&fh(r,o,!1),br(t,r,g);u=r.stateNode,mv.current=r;var U=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&E?(r.child=xa(r,t.child,null,g),r.child=xa(r,null,U,g)):on(t,r,U,g),r.memoizedState=u.state,h&&fh(r,o,!0),r.child}function cf(t){var r=t.stateNode;r.pendingContext?dh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&dh(t,r.context,!1),Ru(t,r.containerInfo)}function df(t,r,o,u,h){return _a(),xu(h),r.flags|=256,on(t,r,o,u),r.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function hf(t,r,o){var u=r.pendingProps,h=Tt.current,g=!1,E=(r.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(h&2)!==0),U?(g=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),_t(Tt,h&1),t===null)return _u(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=u.children,t=u.fallback,g?(u=r.mode,g=r.child,E={mode:"hidden",children:E},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Ho(E,u,0,null),t=zi(t,u,o,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=Wu(o),r.memoizedState=ju,t):Xu(r,E));if(h=t.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return gv(t,r,E,u,U,h,o);if(g){g=u.fallback,E=r.mode,h=t.child,U=h.sibling;var G={mode:"hidden",children:u.children};return(E&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=G,r.deletions=null):(u=li(h,G),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=li(U,g):(g=zi(g,E,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,E=t.child.memoizedState,E=E===null?Wu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=t.childLanes&~o,r.memoizedState=ju,u}return g=t.child,t=g.sibling,u=li(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function Xu(t,r){return r=Ho({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function bo(t,r,o,u){return u!==null&&xu(u),xa(r,t.child,null,o),t=Xu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function gv(t,r,o,u,h,g,E){if(o)return r.flags&256?(r.flags&=-257,u=Bu(Error(n(422))),bo(t,r,E,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=Ho({mode:"visible",children:u.children},h,0,null),g=zi(g,h,E,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&xa(r,t.child,null,E),r.child.memoizedState=Wu(E),r.memoizedState=ju,g);if((r.mode&1)===0)return bo(t,r,E,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(n(419)),u=Bu(g,u,void 0),bo(t,r,E,u)}if(U=(E&t.childLanes)!==0,_n||U){if(u=jt,u!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Rr(t,h),tr(u,t,h,-1))}return lc(),u=Bu(Error(n(421))),bo(t,r,E,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=Cv.bind(null,t),h._reactRetry=r,null):(t=g.treeContext,Cn=Zr(h.nextSibling),bn=r,Mt=!0,Zn=null,t!==null&&(Fn[kn++]=wr,Fn[kn++]=Tr,Fn[kn++]=Li,wr=t.id,Tr=t.overflow,Li=r),r=Xu(r,u.children),r.flags|=4096,r)}function ff(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),Mu(t.return,r,o)}function Yu(t,r,o,u,h){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function pf(t,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(on(t,r,u.children,o),u=Tt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ff(t,o,r);else if(t.tag===19)ff(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(_t(Tt,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&So(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Yu(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&So(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Yu(r,!0,o,null,g);break;case"together":Yu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Co(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function br(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Ii|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=li(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=li(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function vv(t,r,o){switch(r.tag){case 3:cf(r),_a();break;case 5:Ah(r);break;case 1:vn(r.type)&&co(r);break;case 4:Ru(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;_t(vo,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(_t(Tt,Tt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?hf(t,r,o):(_t(Tt,Tt.current&1),t=br(t,r,o),t!==null?t.sibling:null);_t(Tt,Tt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(t.flags&128)!==0){if(u)return pf(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),_t(Tt,Tt.current),u)break;return null;case 22:case 23:return r.lanes=0,of(t,r,o)}return br(t,r,o)}var mf,qu,gf,vf;mf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},qu=function(){},gf=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Di(cr.current);var g=null;switch(o){case"input":h=P(t,h),u=P(t,u),g=[];break;case"select":h=D({},h,{value:void 0}),u=D({},u,{value:void 0}),g=[];break;case"textarea":h=Xe(t,h),u=Xe(t,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=oo)}re(o,u);var E;o=null;for(se in h)if(!u.hasOwnProperty(se)&&h.hasOwnProperty(se)&&h[se]!=null)if(se==="style"){var U=h[se];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(s.hasOwnProperty(se)?g||(g=[]):(g=g||[]).push(se,null));for(se in u){var G=u[se];if(U=h!=null?h[se]:void 0,u.hasOwnProperty(se)&&G!==U&&(G!=null||U!=null))if(se==="style")if(U){for(E in U)!U.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in G)G.hasOwnProperty(E)&&U[E]!==G[E]&&(o||(o={}),o[E]=G[E])}else o||(g||(g=[]),g.push(se,o)),o=G;else se==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,U=U?U.__html:void 0,G!=null&&U!==G&&(g=g||[]).push(se,G)):se==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(se,""+G):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(s.hasOwnProperty(se)?(G!=null&&se==="onScroll"&&yt("scroll",t),g||U===G||(g=[])):(g=g||[]).push(se,G))}o&&(g=g||[]).push("style",o);var se=g;(r.updateQueue=se)&&(r.flags|=4)}},vf=function(t,r,o,u){o!==u&&(r.flags|=4)};function bs(t,r){if(!Mt)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Jt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function _v(t,r,o){var u=r.pendingProps;switch(gu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(r),null;case 1:return vn(r.type)&&uo(),Jt(r),null;case 3:return u=r.stateNode,Ea(),St(gn),St(Zt),Cu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(mo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Zn!==null&&(ac(Zn),Zn=null))),qu(t,r),Jt(r),null;case 5:Au(r);var h=Di(Ms.current);if(o=r.type,t!==null&&r.stateNode!=null)gf(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Jt(r),null}if(t=Di(cr.current),mo(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[ur]=r,u[_s]=g,t=(r.mode&1)!==0,o){case"dialog":yt("cancel",u),yt("close",u);break;case"iframe":case"object":case"embed":yt("load",u);break;case"video":case"audio":for(h=0;h<ms.length;h++)yt(ms[h],u);break;case"source":yt("error",u);break;case"img":case"image":case"link":yt("error",u),yt("load",u);break;case"details":yt("toggle",u);break;case"input":Te(u,g),yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},yt("invalid",u);break;case"textarea":Ie(u,g),yt("invalid",u)}re(o,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var U=g[E];E==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&so(u.textContent,U,t),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&so(u.textContent,U,t),h=["children",""+U]):s.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&yt("scroll",u)}switch(o){case"input":Ee(u),Se(u,g,!0);break;case"textarea":Ee(u),Ze(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=oo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pt(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(o,{is:u.is}):(t=E.createElement(o),o==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,o),t[ur]=r,t[_s]=u,mf(t,r,!1,!1),r.stateNode=t;e:{switch(E=Yt(o,u),o){case"dialog":yt("cancel",t),yt("close",t),h=u;break;case"iframe":case"object":case"embed":yt("load",t),h=u;break;case"video":case"audio":for(h=0;h<ms.length;h++)yt(ms[h],t);h=u;break;case"source":yt("error",t),h=u;break;case"img":case"image":case"link":yt("error",t),yt("load",t),h=u;break;case"details":yt("toggle",t),h=u;break;case"input":Te(t,u),h=P(t,u),yt("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=D({},u,{value:void 0}),yt("invalid",t);break;case"textarea":Ie(t,u),h=Xe(t,u),yt("invalid",t);break;default:h=u}re(o,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var G=U[g];g==="style"?Ke(t,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Je(t,G)):g==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&Tn(t,G):typeof G=="number"&&Tn(t,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?G!=null&&g==="onScroll"&&yt("scroll",t):G!=null&&S(t,g,G,E))}switch(o){case"input":Ee(t),Se(t,u,!1);break;case"textarea":Ee(t),Ze(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Q(u.value));break;case"select":t.multiple=!!u.multiple,g=u.value,g!=null?Fe(t,!!u.multiple,g,!1):u.defaultValue!=null&&Fe(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=oo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Jt(r),null;case 6:if(t&&r.stateNode!=null)vf(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Di(Ms.current),Di(cr.current),mo(r)){if(u=r.stateNode,o=r.memoizedProps,u[ur]=r,(g=u.nodeValue!==o)&&(t=bn,t!==null))switch(t.tag){case 3:so(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(u.nodeValue,o,(t.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[ur]=r,r.stateNode=u}return Jt(r),null;case 13:if(St(Tt),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Cn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xh(),_a(),r.flags|=98560,g=!1;else if(g=mo(r),u!==null&&u.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[ur]=r}else _a(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Jt(r),g=!1}else Zn!==null&&(ac(Zn),Zn=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Tt.current&1)!==0?kt===0&&(kt=3):lc())),r.updateQueue!==null&&(r.flags|=4),Jt(r),null);case 4:return Ea(),qu(t,r),t===null&&gs(r.stateNode.containerInfo),Jt(r),null;case 10:return Eu(r.type._context),Jt(r),null;case 17:return vn(r.type)&&uo(),Jt(r),null;case 19:if(St(Tt),g=r.memoizedState,g===null)return Jt(r),null;if(u=(r.flags&128)!==0,E=g.rendering,E===null)if(u)bs(g,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(E=So(t),E!==null){for(r.flags|=128,bs(g,!1),u=E.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,t=u,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,t=E.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return _t(Tt,Tt.current&1|2),r.child}t=t.sibling}g.tail!==null&&mt()>Ra&&(r.flags|=128,u=!0,bs(g,!1),r.lanes=4194304)}else{if(!u)if(t=So(E),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),bs(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Mt)return Jt(r),null}else 2*mt()-g.renderingStartTime>Ra&&o!==1073741824&&(r.flags|=128,u=!0,bs(g,!1),r.lanes=4194304);g.isBackwards?(E.sibling=r.child,r.child=E):(o=g.last,o!==null?o.sibling=E:r.child=E,g.last=E)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=mt(),r.sibling=null,o=Tt.current,_t(Tt,u?o&1|2:o&1),r):(Jt(r),null);case 22:case 23:return oc(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Ln&1073741824)!==0&&(Jt(r),r.subtreeFlags&6&&(r.flags|=8192)):Jt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function xv(t,r){switch(gu(r),r.tag){case 1:return vn(r.type)&&uo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ea(),St(gn),St(Zt),Cu(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Au(r),null;case 13:if(St(Tt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));_a()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return St(Tt),null;case 4:return Ea(),null;case 10:return Eu(r.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var Lo=!1,en=!1,yv=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function wa(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){bt(t,r,u)}else o.current=null}function Ku(t,r,o){try{o()}catch(u){bt(t,r,u)}}var _f=!1;function Sv(t,r){if(ou=Ks,t=Kd(),Jl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,U=-1,G=-1,se=0,xe=0,ye=t,ve=null;t:for(;;){for(var De;ye!==o||h!==0&&ye.nodeType!==3||(U=E+h),ye!==g||u!==0&&ye.nodeType!==3||(G=E+u),ye.nodeType===3&&(E+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ve=ye,ye=De;for(;;){if(ye===t)break t;if(ve===o&&++se===h&&(U=E),ve===g&&++xe===u&&(G=E),(De=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=De}o=U===-1||G===-1?null:{start:U,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(lu={focusedElem:t,selectionRange:o},Ks=!1,Ue=r;Ue!==null;)if(r=Ue,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Ue=t;else for(;Ue!==null;){r=Ue;try{var Oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Oe!==null){var ze=Oe.memoizedProps,Lt=Oe.memoizedState,J=r.stateNode,Y=J.getSnapshotBeforeUpdate(r.elementType===r.type?ze:Qn(r.type,ze),Lt);J.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){bt(r,r.return,we)}if(t=r.sibling,t!==null){t.return=r.return,Ue=t;break}Ue=r.return}return Oe=_f,_f=!1,Oe}function Cs(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var g=h.destroy;h.destroy=void 0,g!==void 0&&Ku(r,o,g)}h=h.next}while(h!==u)}}function Po(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function $u(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function xf(t){var r=t.alternate;r!==null&&(t.alternate=null,xf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ur],delete r[_s],delete r[hu],delete r[rv],delete r[iv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yf(t){return t.tag===5||t.tag===3||t.tag===4}function Sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=oo));else if(u!==4&&(t=t.child,t!==null))for(Zu(t,r,o),t=t.sibling;t!==null;)Zu(t,r,o),t=t.sibling}function Qu(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Qu(t,r,o),t=t.sibling;t!==null;)Qu(t,r,o),t=t.sibling}var qt=null,Jn=!1;function ri(t,r,o){for(o=o.child;o!==null;)Ef(t,r,o),o=o.sibling}function Ef(t,r,o){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(or,o)}catch{}switch(o.tag){case 5:en||wa(o,r);case 6:var u=qt,h=Jn;qt=null,ri(t,r,o),qt=u,Jn=h,qt!==null&&(Jn?(t=qt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):qt.removeChild(o.stateNode));break;case 18:qt!==null&&(Jn?(t=qt,o=o.stateNode,t.nodeType===8?du(t.parentNode,o):t.nodeType===1&&du(t,o),os(t)):du(qt,o.stateNode));break;case 4:u=qt,h=Jn,qt=o.stateNode.containerInfo,Jn=!0,ri(t,r,o),qt=u,Jn=h;break;case 0:case 11:case 14:case 15:if(!en&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Ku(o,r,E),h=h.next}while(h!==u)}ri(t,r,o);break;case 1:if(!en&&(wa(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){bt(o,r,U)}ri(t,r,o);break;case 21:ri(t,r,o);break;case 22:o.mode&1?(en=(u=en)||o.memoizedState!==null,ri(t,r,o),en=u):ri(t,r,o);break;default:ri(t,r,o)}}function Mf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new yv),r.forEach(function(u){var h=Lv.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function er(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=t,E=r,U=E;e:for(;U!==null;){switch(U.tag){case 5:qt=U.stateNode,Jn=!1;break e;case 3:qt=U.stateNode.containerInfo,Jn=!0;break e;case 4:qt=U.stateNode.containerInfo,Jn=!0;break e}U=U.return}if(qt===null)throw Error(n(160));Ef(g,E,h),qt=null,Jn=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(se){bt(h,r,se)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wf(r,t),r=r.sibling}function wf(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(r,t),hr(t),u&4){try{Cs(3,t,t.return),Po(3,t)}catch(ze){bt(t,t.return,ze)}try{Cs(5,t,t.return)}catch(ze){bt(t,t.return,ze)}}break;case 1:er(r,t),hr(t),u&512&&o!==null&&wa(o,o.return);break;case 5:if(er(r,t),hr(t),u&512&&o!==null&&wa(o,o.return),t.flags&32){var h=t.stateNode;try{Tn(h,"")}catch(ze){bt(t,t.return,ze)}}if(u&4&&(h=t.stateNode,h!=null)){var g=t.memoizedProps,E=o!==null?o.memoizedProps:g,U=t.type,G=t.updateQueue;if(t.updateQueue=null,G!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&de(h,g),Yt(U,E);var se=Yt(U,g);for(E=0;E<G.length;E+=2){var xe=G[E],ye=G[E+1];xe==="style"?Ke(h,ye):xe==="dangerouslySetInnerHTML"?Je(h,ye):xe==="children"?Tn(h,ye):S(h,xe,ye,se)}switch(U){case"input":ce(h,g);break;case"textarea":ke(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var De=g.value;De!=null?Fe(h,!!g.multiple,De,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Fe(h,!!g.multiple,g.defaultValue,!0):Fe(h,!!g.multiple,g.multiple?[]:"",!1))}h[_s]=g}catch(ze){bt(t,t.return,ze)}}break;case 6:if(er(r,t),hr(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,g=t.memoizedProps;try{h.nodeValue=g}catch(ze){bt(t,t.return,ze)}}break;case 3:if(er(r,t),hr(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{os(r.containerInfo)}catch(ze){bt(t,t.return,ze)}break;case 4:er(r,t),hr(t);break;case 13:er(r,t),hr(t),h=t.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(tc=mt())),u&4&&Mf(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(en=(se=en)||xe,er(r,t),en=se):er(r,t),hr(t),u&8192){if(se=t.memoizedState!==null,(t.stateNode.isHidden=se)&&!xe&&(t.mode&1)!==0)for(Ue=t,xe=t.child;xe!==null;){for(ye=Ue=xe;Ue!==null;){switch(ve=Ue,De=ve.child,ve.tag){case 0:case 11:case 14:case 15:Cs(4,ve,ve.return);break;case 1:wa(ve,ve.return);var Oe=ve.stateNode;if(typeof Oe.componentWillUnmount=="function"){u=ve,o=ve.return;try{r=u,Oe.props=r.memoizedProps,Oe.state=r.memoizedState,Oe.componentWillUnmount()}catch(ze){bt(u,o,ze)}}break;case 5:wa(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Af(ye);continue}}De!==null?(De.return=ve,Ue=De):Af(ye)}xe=xe.sibling}e:for(xe=null,ye=t;;){if(ye.tag===5){if(xe===null){xe=ye;try{h=ye.stateNode,se?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=ye.stateNode,G=ye.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,U.style.display=Ne("display",E))}catch(ze){bt(t,t.return,ze)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=se?"":ye.memoizedProps}catch(ze){bt(t,t.return,ze)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:er(r,t),hr(t),u&4&&Mf(t);break;case 21:break;default:er(r,t),hr(t)}}function hr(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(yf(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Tn(h,""),u.flags&=-33);var g=Sf(t);Qu(t,g,h);break;case 3:case 4:var E=u.stateNode.containerInfo,U=Sf(t);Zu(t,U,E);break;default:throw Error(n(161))}}catch(G){bt(t,t.return,G)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Ev(t,r,o){Ue=t,Tf(t)}function Tf(t,r,o){for(var u=(t.mode&1)!==0;Ue!==null;){var h=Ue,g=h.child;if(h.tag===22&&u){var E=h.memoizedState!==null||Lo;if(!E){var U=h.alternate,G=U!==null&&U.memoizedState!==null||en;U=Lo;var se=en;if(Lo=E,(en=G)&&!se)for(Ue=h;Ue!==null;)E=Ue,G=E.child,E.tag===22&&E.memoizedState!==null?bf(h):G!==null?(G.return=E,Ue=G):bf(h);for(;g!==null;)Ue=g,Tf(g),g=g.sibling;Ue=h,Lo=U,en=se}Rf(t)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ue=g):Rf(t)}}function Rf(t){for(;Ue!==null;){var r=Ue;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:en||Po(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!en)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Qn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Rh(r,g,u);break;case 3:var E=r.updateQueue;if(E!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Rh(r,E,o)}break;case 5:var U=r.stateNode;if(o===null&&r.flags&4){o=U;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var se=r.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&os(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}en||r.flags&512&&$u(r)}catch(ve){bt(r,r.return,ve)}}if(r===t){Ue=null;break}if(o=r.sibling,o!==null){o.return=r.return,Ue=o;break}Ue=r.return}}function Af(t){for(;Ue!==null;){var r=Ue;if(r===t){Ue=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Ue=o;break}Ue=r.return}}function bf(t){for(;Ue!==null;){var r=Ue;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Po(4,r)}catch(G){bt(r,o,G)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(G){bt(r,h,G)}}var g=r.return;try{$u(r)}catch(G){bt(r,g,G)}break;case 5:var E=r.return;try{$u(r)}catch(G){bt(r,E,G)}}}catch(G){bt(r,r.return,G)}if(r===t){Ue=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Ue=U;break}Ue=r.return}}var Mv=Math.ceil,No=V.ReactCurrentDispatcher,Ju=V.ReactCurrentOwner,Hn=V.ReactCurrentBatchConfig,ht=0,jt=null,Nt=null,Kt=0,Ln=0,Ta=Qr(0),kt=0,Ls=null,Ii=0,Do=0,ec=0,Ps=null,xn=null,tc=0,Ra=1/0,Cr=null,Uo=!1,nc=null,ii=null,Io=!1,ai=null,Oo=0,Ns=0,rc=null,Fo=-1,ko=0;function ln(){return(ht&6)!==0?mt():Fo!==-1?Fo:Fo=mt()}function si(t){return(t.mode&1)===0?1:(ht&2)!==0&&Kt!==0?Kt&-Kt:sv.transition!==null?(ko===0&&(ko=fn()),ko):(t=qe,t!==0||(t=window.event,t=t===void 0?16:Cd(t.type)),t)}function tr(t,r,o,u){if(50<Ns)throw Ns=0,rc=null,Error(n(185));jr(t,o,u),((ht&2)===0||t!==jt)&&(t===jt&&((ht&2)===0&&(Do|=o),kt===4&&oi(t,Kt)),yn(t,u),o===1&&ht===0&&(r.mode&1)===0&&(Ra=mt()+500,ho&&ei()))}function yn(t,r){var o=t.callbackNode;dt(t,r);var u=wi(t,t===jt?Kt:0);if(u===0)o!==null&&vt(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&vt(o),r===1)t.tag===0?av(Lf.bind(null,t)):ph(Lf.bind(null,t)),tv(function(){(ht&6)===0&&ei()}),o=null;else{switch(lr(u)){case 1:o=wt;break;case 4:o=an;break;case 16:o=Ot;break;case 536870912:o=ut;break;default:o=Ot}o=kf(o,Cf.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Cf(t,r){if(Fo=-1,ko=0,(ht&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Aa()&&t.callbackNode!==o)return null;var u=wi(t,t===jt?Kt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=zo(t,u);else{r=u;var h=ht;ht|=2;var g=Nf();(jt!==t||Kt!==r)&&(Cr=null,Ra=mt()+500,Fi(t,r));do try{Rv();break}catch(U){Pf(t,U)}while(!0);Su(),No.current=g,ht=h,Nt!==null?r=0:(jt=null,Kt=0,r=kt)}if(r!==0){if(r===2&&(h=ts(t),h!==0&&(u=h,r=ic(t,h))),r===1)throw o=Ls,Fi(t,0),oi(t,u),yn(t,mt()),o;if(r===6)oi(t,u);else{if(h=t.current.alternate,(u&30)===0&&!wv(h)&&(r=zo(t,u),r===2&&(g=ts(t),g!==0&&(u=g,r=ic(t,g))),r===1))throw o=Ls,Fi(t,0),oi(t,u),yn(t,mt()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:ki(t,xn,Cr);break;case 3:if(oi(t,u),(u&130023424)===u&&(r=tc+500-mt(),10<r)){if(wi(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){ln(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=cu(ki.bind(null,t,xn,Cr),r);break}ki(t,xn,Cr);break;case 4:if(oi(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var E=31-$t(u);g=1<<E,E=r[E],E>h&&(h=E),u&=~g}if(u=h,u=mt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Mv(u/1960))-u,10<u){t.timeoutHandle=cu(ki.bind(null,t,xn,Cr),u);break}ki(t,xn,Cr);break;case 5:ki(t,xn,Cr);break;default:throw Error(n(329))}}}return yn(t,mt()),t.callbackNode===o?Cf.bind(null,t):null}function ic(t,r){var o=Ps;return t.current.memoizedState.isDehydrated&&(Fi(t,r).flags|=256),t=zo(t,r),t!==2&&(r=xn,xn=o,r!==null&&ac(r)),t}function ac(t){xn===null?xn=t:xn.push.apply(xn,t)}function wv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!$n(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oi(t,r){for(r&=~ec,r&=~Do,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-$t(r),u=1<<o;t[o]=-1,r&=~u}}function Lf(t){if((ht&6)!==0)throw Error(n(327));Aa();var r=wi(t,0);if((r&1)===0)return yn(t,mt()),null;var o=zo(t,r);if(t.tag!==0&&o===2){var u=ts(t);u!==0&&(r=u,o=ic(t,u))}if(o===1)throw o=Ls,Fi(t,0),oi(t,r),yn(t,mt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,ki(t,xn,Cr),yn(t,mt()),null}function sc(t,r){var o=ht;ht|=1;try{return t(r)}finally{ht=o,ht===0&&(Ra=mt()+500,ho&&ei())}}function Oi(t){ai!==null&&ai.tag===0&&(ht&6)===0&&Aa();var r=ht;ht|=1;var o=Hn.transition,u=qe;try{if(Hn.transition=null,qe=1,t)return t()}finally{qe=u,Hn.transition=o,ht=r,(ht&6)===0&&ei()}}function oc(){Ln=Ta.current,St(Ta)}function Fi(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,ev(o)),Nt!==null)for(o=Nt.return;o!==null;){var u=o;switch(gu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&uo();break;case 3:Ea(),St(gn),St(Zt),Cu();break;case 5:Au(u);break;case 4:Ea();break;case 13:St(Tt);break;case 19:St(Tt);break;case 10:Eu(u.type._context);break;case 22:case 23:oc()}o=o.return}if(jt=t,Nt=t=li(t.current,null),Kt=Ln=r,kt=0,Ls=null,ec=Do=Ii=0,xn=Ps=null,Ni!==null){for(r=0;r<Ni.length;r++)if(o=Ni[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var E=g.next;g.next=h,u.next=E}o.pending=u}Ni=null}return t}function Pf(t,r){do{var o=Nt;try{if(Su(),Eo.current=Ro,Mo){for(var u=Rt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Mo=!1}if(Ui=0,Vt=Ft=Rt=null,ws=!1,Ts=0,Ju.current=null,o===null||o.return===null){kt=1,Ls=r,Nt=null;break}e:{var g=t,E=o.return,U=o,G=r;if(r=Kt,U.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var se=G,xe=U,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var De=tf(E);if(De!==null){De.flags&=-257,nf(De,E,U,g,r),De.mode&1&&ef(g,se,r),r=De,G=se;var Oe=r.updateQueue;if(Oe===null){var ze=new Set;ze.add(G),r.updateQueue=ze}else Oe.add(G);break e}else{if((r&1)===0){ef(g,se,r),lc();break e}G=Error(n(426))}}else if(Mt&&U.mode&1){var Lt=tf(E);if(Lt!==null){(Lt.flags&65536)===0&&(Lt.flags|=256),nf(Lt,E,U,g,r),xu(Ma(G,U));break e}}g=G=Ma(G,U),kt!==4&&(kt=2),Ps===null?Ps=[g]:Ps.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var J=Qh(g,G,r);Th(g,J);break e;case 1:U=G;var Y=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(ii===null||!ii.has(ee)))){g.flags|=65536,r&=-r,g.lanes|=r;var we=Jh(g,U,r);Th(g,we);break e}}g=g.return}while(g!==null)}Uf(o)}catch(Be){r=Be,Nt===o&&o!==null&&(Nt=o=o.return);continue}break}while(!0)}function Nf(){var t=No.current;return No.current=Ro,t===null?Ro:t}function lc(){(kt===0||kt===3||kt===2)&&(kt=4),jt===null||(Ii&268435455)===0&&(Do&268435455)===0||oi(jt,Kt)}function zo(t,r){var o=ht;ht|=2;var u=Nf();(jt!==t||Kt!==r)&&(Cr=null,Fi(t,r));do try{Tv();break}catch(h){Pf(t,h)}while(!0);if(Su(),ht=o,No.current=u,Nt!==null)throw Error(n(261));return jt=null,Kt=0,kt}function Tv(){for(;Nt!==null;)Df(Nt)}function Rv(){for(;Nt!==null&&!Rn();)Df(Nt)}function Df(t){var r=Ff(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,r===null?Uf(t):Nt=r,Ju.current=null}function Uf(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=_v(o,r,Ln),o!==null){Nt=o;return}}else{if(o=xv(o,r),o!==null){o.flags&=32767,Nt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Nt=null;return}}if(r=r.sibling,r!==null){Nt=r;return}Nt=r=t}while(r!==null);kt===0&&(kt=5)}function ki(t,r,o){var u=qe,h=Hn.transition;try{Hn.transition=null,qe=1,Av(t,r,o,u)}finally{Hn.transition=h,qe=u}return null}function Av(t,r,o,u){do Aa();while(ai!==null);if((ht&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=o.lanes|o.childLanes;if(Ti(t,g),t===jt&&(Nt=jt=null,Kt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Io||(Io=!0,kf(Ot,function(){return Aa(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Hn.transition,Hn.transition=null;var E=qe;qe=1;var U=ht;ht|=4,Ju.current=null,Sv(t,o),wf(o,t),Yg(lu),Ks=!!ou,lu=ou=null,t.current=o,Ev(o),qn(),ht=U,qe=E,Hn.transition=g}else t.current=o;if(Io&&(Io=!1,ai=t,Oo=h),g=t.pendingLanes,g===0&&(ii=null),Fl(o.stateNode),yn(t,mt()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Uo)throw Uo=!1,t=nc,nc=null,t;return(Oo&1)!==0&&t.tag!==0&&Aa(),g=t.pendingLanes,(g&1)!==0?t===rc?Ns++:(Ns=0,rc=t):Ns=0,ei(),null}function Aa(){if(ai!==null){var t=lr(Oo),r=Hn.transition,o=qe;try{if(Hn.transition=null,qe=16>t?16:t,ai===null)var u=!1;else{if(t=ai,ai=null,Oo=0,(ht&6)!==0)throw Error(n(331));var h=ht;for(ht|=4,Ue=t.current;Ue!==null;){var g=Ue,E=g.child;if((Ue.flags&16)!==0){var U=g.deletions;if(U!==null){for(var G=0;G<U.length;G++){var se=U[G];for(Ue=se;Ue!==null;){var xe=Ue;switch(xe.tag){case 0:case 11:case 15:Cs(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,Ue=ye;else for(;Ue!==null;){xe=Ue;var ve=xe.sibling,De=xe.return;if(xf(xe),xe===se){Ue=null;break}if(ve!==null){ve.return=De,Ue=ve;break}Ue=De}}}var Oe=g.alternate;if(Oe!==null){var ze=Oe.child;if(ze!==null){Oe.child=null;do{var Lt=ze.sibling;ze.sibling=null,ze=Lt}while(ze!==null)}}Ue=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Ue=E;else e:for(;Ue!==null;){if(g=Ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Cs(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,Ue=J;break e}Ue=g.return}}var Y=t.current;for(Ue=Y;Ue!==null;){E=Ue;var ee=E.child;if((E.subtreeFlags&2064)!==0&&ee!==null)ee.return=E,Ue=ee;else e:for(E=Y;Ue!==null;){if(U=Ue,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Po(9,U)}}catch(Be){bt(U,U.return,Be)}if(U===E){Ue=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Ue=we;break e}Ue=U.return}}if(ht=h,ei(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(or,t)}catch{}u=!0}return u}finally{qe=o,Hn.transition=r}}return!1}function If(t,r,o){r=Ma(o,r),r=Qh(t,r,1),t=ni(t,r,1),r=ln(),t!==null&&(jr(t,1,r),yn(t,r))}function bt(t,r,o){if(t.tag===3)If(t,t,o);else for(;r!==null;){if(r.tag===3){If(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ii===null||!ii.has(u))){t=Ma(o,t),t=Jh(r,t,1),r=ni(r,t,1),t=ln(),r!==null&&(jr(r,1,t),yn(r,t));break}}r=r.return}}function bv(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=ln(),t.pingedLanes|=t.suspendedLanes&o,jt===t&&(Kt&o)===o&&(kt===4||kt===3&&(Kt&130023424)===Kt&&500>mt()-tc?Fi(t,0):ec|=o),yn(t,r)}function Of(t,r){r===0&&((t.mode&1)===0?r=1:(r=ra,ra<<=1,(ra&130023424)===0&&(ra=4194304)));var o=ln();t=Rr(t,r),t!==null&&(jr(t,r,o),yn(t,o))}function Cv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Of(t,o)}function Lv(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),Of(t,o)}var Ff;Ff=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||gn.current)_n=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return _n=!1,vv(t,r,o);_n=(t.flags&131072)!==0}else _n=!1,Mt&&(r.flags&1048576)!==0&&mh(r,po,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Co(t,r),t=r.pendingProps;var h=ma(r,Zt.current);Sa(r,o),h=Nu(null,r,u,t,h,o);var g=Du();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,vn(u)?(g=!0,co(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Tu(r),h.updater=Ao,r.stateNode=h,h._reactInternals=r,zu(r,u,t,o),r=Vu(null,r,u,!0,g,o)):(r.tag=0,Mt&&g&&mu(r),on(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Co(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=Nv(u),t=Qn(u,t),h){case 0:r=Gu(null,r,u,t,o);break e;case 1:r=uf(null,r,u,t,o);break e;case 11:r=rf(null,r,u,t,o);break e;case 14:r=af(null,r,u,Qn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),Gu(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),uf(t,r,u,h,o);case 3:e:{if(cf(r),t===null)throw Error(n(387));u=r.pendingProps,g=r.memoizedState,h=g.element,wh(t,r),yo(r,u,null,o);var E=r.memoizedState;if(u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ma(Error(n(423)),r),r=df(t,r,u,o,h);break e}else if(u!==h){h=Ma(Error(n(424)),r),r=df(t,r,u,o,h);break e}else for(Cn=Zr(r.stateNode.containerInfo.firstChild),bn=r,Mt=!0,Zn=null,o=Eh(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_a(),u===h){r=br(t,r,o);break e}on(t,r,u,o)}r=r.child}return r;case 5:return Ah(r),t===null&&_u(r),u=r.type,h=r.pendingProps,g=t!==null?t.memoizedProps:null,E=h.children,uu(u,h)?E=null:g!==null&&uu(u,g)&&(r.flags|=32),lf(t,r),on(t,r,E,o),r.child;case 6:return t===null&&_u(r),null;case 13:return hf(t,r,o);case 4:return Ru(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=xa(r,null,u,o):on(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),rf(t,r,u,h,o);case 7:return on(t,r,r.pendingProps,o),r.child;case 8:return on(t,r,r.pendingProps.children,o),r.child;case 12:return on(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,E=h.value,_t(vo,u._currentValue),u._currentValue=E,g!==null)if($n(g.value,E)){if(g.children===h.children&&!gn.current){r=br(t,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var U=g.dependencies;if(U!==null){E=g.child;for(var G=U.firstContext;G!==null;){if(G.context===u){if(g.tag===1){G=Ar(-1,o&-o),G.tag=2;var se=g.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?G.next=G:(G.next=xe.next,xe.next=G),se.pending=G}}g.lanes|=o,G=g.alternate,G!==null&&(G.lanes|=o),Mu(g.return,o,r),U.lanes|=o;break}G=G.next}}else if(g.tag===10)E=g.type===r.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Mu(E,o,r),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===r){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}on(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Sa(r,o),h=zn(h),u=u(h),r.flags|=1,on(t,r,u,o),r.child;case 14:return u=r.type,h=Qn(u,r.pendingProps),h=Qn(u.type,h),af(t,r,u,h,o);case 15:return sf(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),Co(t,r),r.tag=1,vn(u)?(t=!0,co(r)):t=!1,Sa(r,o),$h(r,u,h),zu(r,u,h,o),Vu(null,r,u,!0,t,o);case 19:return pf(t,r,o);case 22:return of(t,r,o)}throw Error(n(156,r.tag))};function kf(t,r){return it(t,r)}function Pv(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,r,o,u){return new Pv(t,r,o,u)}function uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nv(t){if(typeof t=="function")return uc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===F)return 11;if(t===he)return 14}return 2}function li(t,r){var o=t.alternate;return o===null?(o=Gn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Bo(t,r,o,u,h,g){var E=2;if(u=t,typeof t=="function")uc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return zi(o.children,h,g,r);case te:E=8,h|=8;break;case K:return t=Gn(12,o,r,h|2),t.elementType=K,t.lanes=g,t;case ae:return t=Gn(13,o,r,h),t.elementType=ae,t.lanes=g,t;case ne:return t=Gn(19,o,r,h),t.elementType=ne,t.lanes=g,t;case ie:return Ho(o,h,g,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z:E=10;break e;case le:E=9;break e;case F:E=11;break e;case he:E=14;break e;case Me:E=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Gn(E,o,r,h),r.elementType=t,r.type=u,r.lanes=g,r}function zi(t,r,o,u){return t=Gn(7,t,u,r),t.lanes=o,t}function Ho(t,r,o,u){return t=Gn(22,t,u,r),t.elementType=ie,t.lanes=o,t.stateNode={isHidden:!1},t}function cc(t,r,o){return t=Gn(6,t,null,r),t.lanes=o,t}function dc(t,r,o){return r=Gn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Dv(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kn(0),this.expirationTimes=Kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function hc(t,r,o,u,h,g,E,U,G){return t=new Dv(t,r,o,U,G),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Gn(3,null,null,r),t.current=g,g.stateNode=t,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(g),t}function Uv(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function zf(t){if(!t)return Jr;t=t._reactInternals;e:{if(Ae(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(vn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(vn(o))return hh(t,o,r)}return r}function Bf(t,r,o,u,h,g,E,U,G){return t=hc(o,u,!0,t,h,g,E,U,G),t.context=zf(null),o=t.current,u=ln(),h=si(o),g=Ar(u,h),g.callback=r??null,ni(o,g,h),t.current.lanes=h,jr(t,h,u),yn(t,u),t}function Go(t,r,o,u){var h=r.current,g=ln(),E=si(h);return o=zf(o),r.context===null?r.context=o:r.pendingContext=o,r=Ar(g,E),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=ni(h,r,E),t!==null&&(tr(t,h,E,g),xo(t,h,E)),E}function Vo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function fc(t,r){Hf(t,r),(t=t.alternate)&&Hf(t,r)}function Iv(){return null}var Gf=typeof reportError=="function"?reportError:function(t){console.error(t)};function pc(t){this._internalRoot=t}jo.prototype.render=pc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Go(t,r,null,null)},jo.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Oi(function(){Go(null,t,null,null)}),r[Er]=null}};function jo(t){this._internalRoot=t}jo.prototype.unstable_scheduleHydration=function(t){if(t){var r=sn();t={blockedOn:null,target:t,priority:r};for(var o=0;o<qr.length&&r!==0&&r<qr[o].priority;o++);qr.splice(o,0,t),o===0&&Ad(t)}};function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function Ov(t,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var se=Vo(E);g.call(se)}}var E=Bf(r,u,t,0,null,!1,!1,"",Vf);return t._reactRootContainer=E,t[Er]=E.current,gs(t.nodeType===8?t.parentNode:t),Oi(),E}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var se=Vo(G);U.call(se)}}var G=hc(t,0,!1,null,null,!1,!1,"",Vf);return t._reactRootContainer=G,t[Er]=G.current,gs(t.nodeType===8?t.parentNode:t),Oi(function(){Go(r,G,o,u)}),G}function Xo(t,r,o,u,h){var g=o._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var U=h;h=function(){var G=Vo(E);U.call(G)}}Go(r,E,t,h)}else E=Ov(o,r,t,h,u);return Vo(E)}ia=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Vr(r.pendingLanes);o!==0&&(Ri(r,o|1),yn(r,mt()),(ht&6)===0&&(Ra=mt()+500,ei()))}break;case 13:Oi(function(){var u=Rr(t,1);if(u!==null){var h=ln();tr(u,t,1,h)}}),fc(t,1)}},pn=function(t){if(t.tag===13){var r=Rr(t,134217728);if(r!==null){var o=ln();tr(r,t,134217728,o)}fc(t,134217728)}},mn=function(t){if(t.tag===13){var r=si(t),o=Rr(t,r);if(o!==null){var u=ln();tr(o,t,r,u)}fc(t,r)}},sn=function(){return qe},aa=function(t,r){var o=qe;try{return qe=t,r()}finally{qe=o}},kr=function(t,r,o){switch(r){case"input":if(ce(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=lo(u);if(!h)throw Error(n(90));Re(u),ce(u,h)}}}break;case"textarea":ke(t,o);break;case"select":r=o.value,r!=null&&Fe(t,!!o.multiple,r,!1)}},Xn=sc,sr=Oi;var Fv={usingClientEntryPoint:!1,Events:[xs,fa,lo,Sr,On,sc]},Ds={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kv={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tt(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||Iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{or=Yo.inject(kv),hn=Yo}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv,Sn.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(r))throw Error(n(200));return Uv(t,r,null,o)},Sn.createRoot=function(t,r){if(!mc(t))throw Error(n(299));var o=!1,u="",h=Gf;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=hc(t,1,!1,null,null,o,!1,u,h),t[Er]=r.current,gs(t.nodeType===8?t.parentNode:t),new pc(r)},Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=tt(r),t=t===null?null:t.stateNode,t},Sn.flushSync=function(t){return Oi(t)},Sn.hydrate=function(t,r,o){if(!Wo(r))throw Error(n(200));return Xo(null,t,r,!0,o)},Sn.hydrateRoot=function(t,r,o){if(!mc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",E=Gf;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),r=Bf(r,null,t,1,o??null,h,!1,g,E),t[Er]=r.current,gs(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new jo(r)},Sn.render=function(t,r,o){if(!Wo(r))throw Error(n(200));return Xo(null,t,r,!1,o)},Sn.unmountComponentAtNode=function(t){if(!Wo(t))throw Error(n(40));return t._reactRootContainer?(Oi(function(){Xo(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1},Sn.unstable_batchedUpdates=sc,Sn.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Wo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xo(t,r,o,!1,u)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var Zf;function Xv(){if(Zf)return _c.exports;Zf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),_c.exports=Wv(),_c.exports}var Qf;function Yv(){if(Qf)return qo;Qf=1;var a=Xv();return qo.createRoot=a.createRoot,qo.hydrateRoot=a.hydrateRoot,qo}var qv=Yv();const fd="escape-room-beit-midrash",Kv="escape-complete",$v="escape-ready",Zv="escape-fullscreen-toggle";function pd(){if(typeof window>"u")return!1;if(new URLSearchParams(window.location.search).get("embed")==="1")return!0;try{return window.parent!==window}catch{return!0}}function md(){return!1}function Qv(){var e;if(typeof window>"u")return;const a={source:fd,type:Kv};try{window.parent.postMessage(a,"*")}catch{}try{(e=window.opener)==null||e.postMessage(a,"*")}catch{}}function Jv(){if(!(typeof window>"u"))try{window.parent.postMessage({source:fd,type:$v},"*")}catch{}}const e_="menavtim_want_fullscreen",Ml="immersive-fs";function t_(){if(typeof navigator>"u")return!1;const a=navigator.userAgent;return/iPad|iPhone|iPod/.test(a)?!0:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Em(){const a=document;return document.fullscreenElement??a.webkitFullscreenElement??null}function Sc(){return!!Em()||document.documentElement.classList.contains(Ml)}function Ko(a){try{localStorage.setItem(e_,a?"1":"0")}catch{}}function $o(a){var e;document.documentElement.classList.toggle(Ml,a),(e=document.body)==null||e.classList.toggle(Ml,a),a&&window.scrollTo(0,1)}async function n_(a){const e=a;try{if(typeof e.requestFullscreen=="function")return await e.requestFullscreen(),!0;if(typeof e.webkitRequestFullscreen=="function")return await e.webkitRequestFullscreen(),!0;if(typeof e.webkitRequestFullScreen=="function")return await e.webkitRequestFullScreen(),!0}catch{return!1}return!1}async function r_(){const a=document;try{if(document.fullscreenElement&&document.exitFullscreen){await document.exitFullscreen();return}a.webkitFullscreenElement&&a.webkitExitFullscreen&&await a.webkitExitFullscreen()}catch{}}function i_(){try{window.parent.postMessage({source:fd,type:Zv},"*")}catch{}}async function a_(){return pd()?(i_(),"delegated"):Em()?(await r_(),$o(!1),Ko(!1),"off"):document.documentElement.classList.contains(Ml)?($o(!1),Ko(!1),"off"):await n_(document.documentElement)?($o(!1),Ko(!0),"on"):($o(!0),Ko(!0),"immersive")}function s_(a){const e=()=>a();return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),window.addEventListener("resize",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),window.removeEventListener("resize",e)}}function ed({className:a="",compact:e=!0}){const[n,i]=me.useState(()=>Sc()),[s,l]=me.useState(null);me.useEffect(()=>s_(()=>i(Sc())),[]);const c=me.useCallback(async()=>{const p=await a_();i(Sc()||p==="on"||p==="immersive"||p==="delegated"),p==="immersive"||p==="delegated"&&t_()?(l("ב־iPhone מסך מלא מלא מוגבל — מצב מוגדל הופעל. אפשר גם «הוסף למסך הבית»."),window.setTimeout(()=>l(null),4500)):l(null)},[]),f=n?"יציאה ממסך מלא":"מסך מלא";return L.jsxs("div",{className:`fs-toggle-wrap ${a}`.trim(),children:[L.jsxs("button",{type:"button",className:`fs-toggle${e?" fs-toggle--compact":""}${n?" fs-toggle--on":""}`,onClick:c,"aria-pressed":n,"aria-label":f,title:f,children:[L.jsx("span",{className:"fs-toggle__icon","aria-hidden":"true",children:n?L.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[L.jsx("path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}),L.jsx("path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}),L.jsx("path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}),L.jsx("path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"})]}):L.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[L.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}),L.jsx("path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}),L.jsx("path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}),L.jsx("path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"})]})}),!e&&L.jsx("span",{className:"fs-toggle__text",children:f})]}),s&&L.jsx("p",{className:"fs-toggle__hint",role:"status",children:s})]})}function o_({onStart:a}){return L.jsxs("div",{className:"landing-screen",children:[L.jsx("div",{className:"landing-fs",children:L.jsx(ed,{})}),L.jsxs("div",{className:"landing-card",children:[L.jsx("div",{className:"landing-seal","aria-hidden":"true",children:"📜"}),L.jsx("h1",{children:"בית המדרש"}),L.jsx("p",{className:"landing-lead",children:"לפני שנכנסים — כך משחקים:"}),L.jsxs("ol",{className:"landing-steps",children:[L.jsx("li",{children:"חפשו חפצים בחדר לפי הרמז הקטן למטה."}),L.jsx("li",{children:"ענו על החידה, חשבו גימטרייה, והזינו ספרה במנעול."}),L.jsx("li",{children:"אחרי עשר ספרות — היכנסו לחדר הפנימי וכתבו את המכתב."})]}),L.jsx("p",{className:"landing-note",children:"סובבו את החוגה ואז לחצו «הזן» — בלי ללחוץ על הספרות עצמן."}),L.jsxs("div",{className:"landing-mobile-tips",children:[L.jsx("p",{className:"landing-mobile-tips__title",children:"טיפים לטלפון"}),L.jsxs("ul",{children:[L.jsx("li",{children:"גררו באצבע כדי להסתכל מסביב ב־360°."}),L.jsx("li",{children:"חפשו את החפץ הזוהר (בהתחלה: ארון) והקישו עליו."}),L.jsx("li",{children:"פתחו את לשוניות הצד: גימטרייה מצד אחד, מנעול מהצד השני."}),L.jsx("li",{children:"במנעול — סובבו את החוגה ואז לחצו «הזן»."})]})]}),L.jsxs("div",{className:"landing-desktop-tips","aria-hidden":"false",children:[L.jsx("p",{className:"landing-desktop-tips__title",children:"במחשב"}),L.jsxs("ul",{children:[L.jsx("li",{children:"גררו עם העכבר כדי להסתובב בחדר."}),L.jsx("li",{children:"העבירו עכבר / לחצו על חפצים זוהרים."})]})]}),L.jsx("button",{type:"button",className:"btn-primary btn-large",onClick:a,children:"כניסה לבית המדרש"})]})]})}function l_(a,e){return{yaw:a/100*360-180,pitch:(50-e)/100*180}}function Xa(a,e){const n=a*Math.PI/180,i=e*Math.PI/180,s=Math.cos(i);return[-s*Math.cos(n),Math.sin(i),-s*Math.sin(n)]}function fr(a,e,n){return{...l_(a,e),flatX:a,flatY:e,radiusPx:n}}const Xi=[{id:1,object:"ארון",aramaic:"יקיד ונהיר. מאי ניהו?",aramaicDisplay:"יָקִיד וְנָהִיר. מַאי נִיהוּ?",hebrew:"בוער ומאיר. מה זה?",hebrewDisplay:"בּוֹעֵר וּמֵאִיר. מַה זֶּה?",options:["שרגא","ספרא","יומא"],optionsDisplay:["שַׁרְגָא","סִפְרָא","יוֹמָא"],answer:"שרגא",letters:[["ש",300],["ר",200],["ג",3],["א",1]],total:504,dialDigit:4,hotspot:fr(30,34,56)},{id:2,object:"שרגא",aramaic:"לית ליה טעם. מאי ניהו?",aramaicDisplay:"לֵית לֵיהּ טַעְמָא. מַאי נִיהוּ?",hebrew:"אין לו טעם. מה זה?",hebrewDisplay:"אֵין לוֹ טַעַם. מַה זֶּה?",options:["מיא","חמרא","נהמא"],optionsDisplay:["מַיָּא","חַמְרָא","נַהֲמָא"],answer:"מיא",letters:[["מ",40],["י",10],["א",1]],total:51,dialDigit:1,hotspot:fr(7,26,48)},{id:3,object:"מיא",aramaic:"יתיב וגמיר כל יומא. מאן ניהו?",aramaicDisplay:"יָתֵיב וְגָמֵיר כָּל יוֹמָא. מַאן נִיהוּ?",hebrew:"יושב ולומד כל יום. מי זה?",hebrewDisplay:"יוֹשֵׁב וְלוֹמֵד כָּל יוֹם. מִי זֶה?",options:["תלמידא","רבי","גברא"],optionsDisplay:["תַּלְמִידָא","רַבִּי","גַּבְרָא"],answer:"תלמידא",letters:[["ת",400],["ל",30],["מ",40],["י",10],["ד",4],["א",1]],total:485,dialDigit:5,hotspot:fr(19,76,50)},{id:4,object:"תלמידא",aramaic:"ממליל, וכולהון שתקין. מאן ניהו?",aramaicDisplay:"מְמַלֵּל, וְכוּלְהוֹן שׁוּתְקִין. מַאן נִיהוּ?",hebrew:"מדבר, וכולם שותקים. מי זה?",hebrewDisplay:"מְדַבֵּר, וְכֻלָּם שׁוֹתְקִים. מִי זֶה?",options:["רבי","תלמידא","כלבא"],optionsDisplay:["רַבִּי","תַּלְמִידָא","כַּלְבָּא"],answer:"רבי",letters:[["ר",200],["ב",2],["י",10]],total:212,dialDigit:2,hotspot:fr(60,50,58)},{id:5,object:"רבי",aramaic:"פתח לנהורא. מאי ניהו?",aramaicDisplay:"פָּתַח לִנְהוֹרָא. מַאי נִיהוּ?",hebrew:"פותח לאור. מה זה?",hebrewDisplay:"פּוֹתֵחַ לָאוֹר. מַה זֶּה?",options:["חלון","תרעא","שרגא"],optionsDisplay:["חַלּוֹן","תַּרְעָא","שַׁרְגָא"],answer:"חלון",letters:[["ח",8],["ל",30],["ו",6],["נ",50]],total:94,dialDigit:4,hotspot:fr(51,42,56)},{id:6,object:"חלון",aramaic:"מלא מלין, ולא ממליל. מאי ניהו?",aramaicDisplay:"מְלֵי מִילִין, וְלָא מְמַלֵּל. מַאי נִיהוּ?",hebrew:"מלא מילים, ולא מדבר. מה זה?",hebrewDisplay:"מָלֵא מִילִים, וְלֹא מְדַבֵּר. מַה זֶּה?",options:["ספרא","גברא","תרעא"],optionsDisplay:["סִפְרָא","גַּבְרָא","תַּרְעָא"],answer:"ספרא",letters:[["ס",60],["פ",80],["ר",200],["א",1]],total:341,dialDigit:1,hotspot:fr(12,38,48)},{id:7,object:"ספרא",aramaic:"קרינן ביה וגמרין. מאי ניהו?",aramaicDisplay:"קָרֵינַן בֵּיהּ וְגָמְרִין. מַאי נִיהוּ?",hebrew:"קוראים בו ולומדים. מה זה?",hebrewDisplay:"קוֹרְאִים בּוֹ וְלוֹמְדִים. מַה זֶּה?",options:["ספרא","חלון","מיא"],optionsDisplay:["סִפְרָא","חַלּוֹן","מַיָּא"],answer:"ספרא",letters:[["ס",60],["פ",80],["ר",200],["א",1]],total:341,dialDigit:1,hotspot:fr(34,62,60)},{id:8,object:"ספסלא",aramaic:"יתיבין עלוי וגמרין. מאי ניהו?",aramaicDisplay:"יָתְבִין עֲלוֹהִי וְגָמְרִין. מַאי נִיהוּ?",hebrew:"יושבים עליו ולומדים. מה זה?",hebrewDisplay:"יוֹשְׁבִים עָלָיו וְלוֹמְדִים. מַה זֶּה?",options:["ספסלא","פתורא","ערסא"],optionsDisplay:["סַפְסְלָא","פָּתוֹרָא","עַרְסָא"],answer:"ספסלא",letters:[["ס",60],["פ",80],["ס",60],["ל",30],["א",1]],total:231,dialDigit:1,hotspot:fr(4,62,48)},{id:9,object:"תרעא",aramaic:"כולהון עיילין ביה. מאי ניהו?",aramaicDisplay:"כוּלְהוֹן עָיְלִין בֵּיהּ. מַאי נִיהוּ?",hebrew:"כולם נכנסים בו. מה זה?",hebrewDisplay:"כֻּלָּם נִכְנָסִים בּוֹ. מַה זֶּה?",options:["תרעא","ביתא","עמודא"],optionsDisplay:["תַּרְעָא","בֵּיתָא","עַמּוּדָא"],answer:"תרעא",letters:[["ת",400],["ר",200],["ע",70],["א",1]],total:671,dialDigit:1,hotspot:fr(96,45,56)},{id:10,object:"קולמוס",aramaic:"נפיק מפומא, ולא הדר. מאי ניהי?",aramaicDisplay:"נָפֵיק מִפּוּמָא, וְלָא הָדַר. מַאי נִיהוּ?",hebrew:"יוצא מהפה, ולא חוזר. מה זה?",hebrewDisplay:"יוֹצֵא מִן הַפֶּה, וְלֹא חוֹזֵר. מַה זֶּה?",options:["פתגמא","מילתא","ספרא"],optionsDisplay:["פִּתְגָמָא","מִילְתָא","סִפְרָא"],answer:"פתגמא",letters:[["פ",80],["ת",400],["ג",3],["מ",40],["א",1]],total:524,dialDigit:4,hotspot:fr(28,74,46)}];function u_(a){const e=[...a];for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function c_(a){return Math.abs(a)%10}function Mm(a,e){const n=a.options.indexOf(e);return n>=0&&a.optionsDisplay?a.optionsDisplay[n]:e}function d_(a){return a<0||a>=Xi.length?null:Xi[a].object}function h_(){return{currentRiddleIndex:0,solvedCount:0,dialDigits:Array(10).fill(null),lockUnlocked:!1}}function f_(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("debug")==="1"}function wm(a,e){const n="/menavtim/escape-room/",i=n.endsWith("/")?n:`${n}/`,s=a.replace(/^\//,"");return`${i}${s}?v=${e}`}const Tm=wm("beit-midrash-mishna-ceiling-lamps.png","marks1"),Rm=wm("inner-room-360.png","1"),pr={yaw:0,pitch:-18,radiusPx:110,flatX:50,flatY:62};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const td="160",ba={ROTATE:0,DOLLY:1,PAN:2},Ca={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Am=1,p_=2,Ir=3,xi=0,Mn=1,Wi=100,nd=204,rd=205,bm=0,m_=1,g_=2,_i=0,v_=1,__=2,x_=3,y_=4,S_=5,E_=6,Cm=300,qa=301,Ka=302,id=303,ad=304,Ll=306,sd=1e3,Or=1001,od=1002,cn=1003,Jf=1004,Ec=1005,ar=1006,M_=1007,wl=1008,Yi=1009,gd=1012,Lm=1013,gi=1014,vi=1015,Vs=1016,Pm=1017,Nm=1018,qi=1020,gr=1023,Ki=1026,$a=1027,Dm=1029,Um=1031,Im=1033,Mc=33776,wc=33777,Tc=33778,Rc=33779,ep=35840,tp=35841,np=35842,rp=35843,Om=36196,ip=37492,ap=37496,sp=37808,op=37809,lp=37810,up=37811,cp=37812,dp=37813,hp=37814,fp=37815,pp=37816,mp=37817,gp=37818,vp=37819,_p=37820,xp=37821,Ac=36492,yp=36494,Sp=36495,Ep=36284,Mp=36285,wp=36286,Fm=3e3,$i=3001,vr="",zt="srgb",Fr="srgb-linear",vd="display-p3",Pl="display-p3-linear",Tl="linear",Et="srgb",Rl="rec709",Al="p3",La=7680,Tp=35044,Rp="300 es",ld=1035,Za=2e3,bl=2001;class ea{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sl=Math.PI/180,ud=180/Math.PI;function Ws(){const a=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(tn[255&a]+tn[a>>8&255]+tn[a>>16&255]+tn[a>>24&255]+"-"+tn[255&e]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[63&n|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[255&i]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function dn(a,e,n){return Math.max(e,Math.min(n,a))}function w_(a,e){return(a%e+e)%e}function bc(a,e,n){return(1-n)*a+n*e}function Ap(a){return(a&a-1)==0&&a!==0}function cd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Is(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function En(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(4294967295*a);case Uint16Array:return Math.round(65535*a);case Uint8Array:return Math.round(255*a);case Int32Array:return Math.round(2147483647*a);case Int16Array:return Math.round(32767*a);case Int8Array:return Math.round(127*a);default:throw new Error("Invalid component type.")}}const T_={DEG2RAD:Sl};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*s+e.x,this.y=l*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,i,s,l,c,f,p,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,l,c,f,p,d)}set(e,n,i,s,l,c,f,p,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=n,m[4]=l,m[5]=p,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,l=this.elements,c=i[0],f=i[3],p=i[6],d=i[1],m=i[4],v=i[7],_=i[2],y=i[5],b=i[8],T=s[0],x=s[3],C=s[6],M=s[1],S=s[4],V=s[7],z=s[2],I=s[5],O=s[8];return l[0]=c*T+f*M+p*z,l[3]=c*x+f*S+p*I,l[6]=c*C+f*V+p*O,l[1]=d*T+m*M+v*z,l[4]=d*x+m*S+v*I,l[7]=d*C+m*V+v*O,l[2]=_*T+y*M+b*z,l[5]=_*x+y*S+b*I,l[8]=_*C+y*V+b*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8];return n*c*m-n*f*d-i*l*m+i*f*p+s*l*d-s*c*p}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8],v=m*c-f*d,_=f*p-m*l,y=d*l-c*p,b=n*v+i*_+s*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(s*d-m*i)*T,e[2]=(f*i-s*c)*T,e[3]=_*T,e[4]=(m*n-s*p)*T,e[5]=(s*l-f*n)*T,e[6]=y*T,e[7]=(i*p-d*n)*T,e[8]=(c*n-i*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(i*p,i*d,-i*(p*c+d*f)+c+e,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new st;function km(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function js(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function R_(){const a=js("canvas");return a.style.display="block",a}const bp={};function Hs(a){a in bp||(bp[a]=!0,console.warn(a))}const Cp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zo={[Fr]:{transfer:Tl,primaries:Rl,toReference:a=>a,fromReference:a=>a},[zt]:{transfer:Et,primaries:Rl,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Pl]:{transfer:Tl,primaries:Al,toReference:a=>a.applyMatrix3(Lp),fromReference:a=>a.applyMatrix3(Cp)},[vd]:{transfer:Et,primaries:Al,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Lp),fromReference:a=>a.applyMatrix3(Cp).convertLinearToSRGB()}},A_=new Set([Fr,Pl]),gt={enabled:!0,_workingColorSpace:Fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!A_.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,n){if(this.enabled===!1||e===n||!e||!n)return a;const i=Zo[e].toReference;return(0,Zo[n].fromReference)(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Zo[a].primaries},getTransfer:function(a){return a===vr?Tl:Zo[a].transfer}};function Ya(a){return a<.04045?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function Lc(a){return a<.0031308?12.92*a:1.055*Math.pow(a,.41666)-.055}let Pa;class zm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pa===void 0&&(Pa=js("canvas")),Pa.width=e.width,Pa.height=e.height;const i=Pa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pa}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=js("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=255*Ya(l[c]/255);return i.putImageData(s,0,0),n}if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(255*Ya(n[i]/255)):n[i]=Ya(n[i]);return{data:n,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b_=0;class Bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(Pc(s[c].image)):l.push(Pc(s[c]))}else l=Pc(s);i.url=l}return n||(e.images[this.uuid]=i),i}}function Pc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?zm.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C_=0;class wn extends ea{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=1001,s=1001,l=1006,c=1008,f=1023,p=1009,d=wn.DEFAULT_ANISOTROPY,m=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Ws(),this.name="",this.source=new Bm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===$i?zt:vr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sd:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case sd:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?$i:Fm}set encoding(e){Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?zt:vr}}wn.DEFAULT_IMAGE=null,wn.DEFAULT_MAPPING=Cm,wn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,i=0,s=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*i+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*i+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*i+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*i+c[11]*s+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,l;const p=e.elements,d=p[0],m=p[4],v=p[8],_=p[1],y=p[5],b=p[9],T=p[2],x=p[6],C=p[10];if(Math.abs(m-_)<.01&&Math.abs(v-T)<.01&&Math.abs(b-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+T)<.1&&Math.abs(b+x)<.1&&Math.abs(d+y+C-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,V=(y+1)/2,z=(C+1)/2,I=(m+_)/4,O=(v+T)/4,te=(b+x)/4;return S>V&&S>z?S<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(S),s=I/i,l=O/i):V>z?V<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(V),i=I/s,l=te/s):z<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(z),i=O/l,s=te/l),this.set(i,s,l,n),this}let M=Math.sqrt((x-b)*(x-b)+(v-T)*(v-T)+(_-m)*(_-m));return Math.abs(M)<.001&&(M=1),this.x=(x-b)/M,this.y=(v-T)/M,this.z=(_-m)/M,this.w=Math.acos((d+y+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L_ extends ea{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Hs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$i?zt:vr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ar,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){this.width===e&&this.height===n&&this.depth===i||(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends L_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Hm extends wn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class P_ extends wn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,l,c,f){let p=i[s+0],d=i[s+1],m=i[s+2],v=i[s+3];const _=l[c+0],y=l[c+1],b=l[c+2],T=l[c+3];if(f===0)return e[n+0]=p,e[n+1]=d,e[n+2]=m,void(e[n+3]=v);if(f===1)return e[n+0]=_,e[n+1]=y,e[n+2]=b,void(e[n+3]=T);if(v!==T||p!==_||d!==y||m!==b){let x=1-f;const C=p*_+d*y+m*b+v*T,M=C>=0?1:-1,S=1-C*C;if(S>Number.EPSILON){const z=Math.sqrt(S),I=Math.atan2(z,C*M);x=Math.sin(x*I)/z,f=Math.sin(f*I)/z}const V=f*M;if(p=p*x+_*V,d=d*x+y*V,m=m*x+b*V,v=v*x+T*V,x===1-f){const z=1/Math.sqrt(p*p+d*d+m*m+v*v);p*=z,d*=z,m*=z,v*=z}}e[n]=p,e[n+1]=d,e[n+2]=m,e[n+3]=v}static multiplyQuaternionsFlat(e,n,i,s,l,c){const f=i[s],p=i[s+1],d=i[s+2],m=i[s+3],v=l[c],_=l[c+1],y=l[c+2],b=l[c+3];return e[n]=f*b+m*v+p*y-d*_,e[n+1]=p*b+m*_+d*v-f*y,e[n+2]=d*b+m*y+f*_-p*v,e[n+3]=m*b-f*v-p*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,d=f(i/2),m=f(s/2),v=f(l/2),_=p(i/2),y=p(s/2),b=p(l/2);switch(c){case"XYZ":this._x=_*m*v+d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v-_*y*b;break;case"YXZ":this._x=_*m*v+d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v+_*y*b;break;case"ZXY":this._x=_*m*v-d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v-_*y*b;break;case"ZYX":this._x=_*m*v-d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v+_*y*b;break;case"YZX":this._x=_*m*v+d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v-_*y*b;break;case"XZY":this._x=_*m*v-d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v+_*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],m=n[6],v=n[10],_=i+f+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-p)*y,this._y=(l-d)*y,this._z=(c-s)*y}else if(i>f&&i>v){const y=2*Math.sqrt(1+i-f-v);this._w=(m-p)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+d)/y}else if(f>v){const y=2*Math.sqrt(1+f-i-v);this._w=(l-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(p+m)/y}else{const y=2*Math.sqrt(1+v-i-f);this._w=(c-s)/y,this._x=(l+d)/y,this._y=(p+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,l=e._z,c=e._w,f=n._x,p=n._y,d=n._z,m=n._w;return this._x=i*m+c*f+s*d-l*p,this._y=s*m+c*p+l*f-i*d,this._z=l*m+c*d+i*p-s*f,this._w=c*m-i*f-s*p-l*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,l=this._z,c=this._w;let f=c*e._w+i*e._x+s*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=i,this._y=s,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*i+n*this._x,this._y=y*s+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const d=Math.sqrt(p),m=Math.atan2(d,f),v=Math.sin((1-n)*m)/d,_=Math.sin(n*m)/d;return this._w=c*v+this._w*_,this._x=i*v+this._x*_,this._y=s*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(l),i*Math.cos(l),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[3]*i+l[6]*s,this.y=l[1]*n+l[4]*i+l[7]*s,this.z=l[2]*n+l[5]*i+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,l=e.elements,c=1/(l[3]*n+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*i+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*i+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*i+l[10]*s+l[14])*c,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,l=e.x,c=e.y,f=e.z,p=e.w,d=2*(c*s-f*i),m=2*(f*n-l*s),v=2*(l*i-c*n);return this.x=n+p*d+c*v-f*m,this.y=i+p*m+f*d-l*v,this.z=s+p*v+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s,this.y=l[1]*n+l[5]*i+l[9]*s,this.z=l[2]*n+l[6]*i+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,l=e.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-l*f,this.y=l*c-i*p,this.z=i*f-s*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,4*n)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,3*n)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new X,Pp=new Qi;class yi{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(nr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(nr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=nr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,nr):nr.fromBufferAttribute(l,c),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Jo.subVectors(this.max,Os),Na.subVectors(e.a,Os),Da.subVectors(e.b,Os),Ua.subVectors(e.c,Os),ci.subVectors(Da,Na),di.subVectors(Ua,Da),Bi.subVectors(Na,Ua);let n=[0,-ci.z,ci.y,0,-di.z,di.y,0,-Bi.z,Bi.y,ci.z,0,-ci.x,di.z,0,-di.x,Bi.z,0,-Bi.x,-ci.y,ci.x,0,-di.y,di.x,0,-Bi.y,Bi.x,0];return!!Dc(n,Na,Da,Ua,Jo)&&(n=[1,0,0,0,1,0,0,0,1],!!Dc(n,Na,Da,Ua,Jo)&&(el.crossVectors(ci,di),n=[el.x,el.y,el.z],Dc(n,Na,Da,Ua,Jo)))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(nr).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lr=[new X,new X,new X,new X,new X,new X,new X,new X],nr=new X,Qo=new yi,Na=new X,Da=new X,Ua=new X,ci=new X,di=new X,Bi=new X,Os=new X,Jo=new X,el=new X,Hi=new X;function Dc(a,e,n,i,s){for(let l=0,c=a.length-3;l<=c;l+=3){Hi.fromArray(a,l);const f=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),p=e.dot(Hi),d=n.dot(Hi),m=i.dot(Hi);if(Math.max(-Math.max(p,d,m),Math.min(p,d,m))>f)return!1}return!0}const N_=new yi,Fs=new X,Uc=new X;class Si{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):N_.setFromPoints(e).getCenter(i);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const n=Fs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=.5*(i-this.radius);this.center.addScaledVector(Fs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Uc)),this.expandByPoint(Fs.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pr=new X,Ic=new X,tl=new X,hi=new X,Oc=new X,nl=new X,Fc=new X;class Xs{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,n),Pr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ic.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),hi.copy(this.origin).sub(Ic);const l=.5*e.distanceTo(n),c=-this.direction.dot(tl),f=hi.dot(this.direction),p=-hi.dot(tl),d=hi.lengthSq(),m=Math.abs(1-c*c);let v,_,y,b;if(m>0)if(v=c*p-f,_=c*f-p,b=l*m,v>=0)if(_>=-b)if(_<=b){const T=1/m;v*=T,_*=T,y=v*(v+c*_+2*f)+_*(c*v+_+2*p)+d}else _=l,v=Math.max(0,-(c*_+f)),y=-v*v+_*(_+2*p)+d;else _=-l,v=Math.max(0,-(c*_+f)),y=-v*v+_*(_+2*p)+d;else _<=-b?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-p),l),y=-v*v+_*(_+2*p)+d):_<=b?(v=0,_=Math.min(Math.max(-l,-p),l),y=_*(_+2*p)+d):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-p),l),y=-v*v+_*(_+2*p)+d);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),y=-v*v+_*(_+2*p)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Ic).addScaledVector(tl,_),y}intersectSphere(e,n){Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),s=Pr.dot(Pr)-i*i,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=i-c,p=i+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0?!0:e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,l,c,f,p;const d=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||l>s?null:((l>i||isNaN(i))&&(i=l),(c<s||isNaN(s))&&(s=c),v>=0?(f=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),i>p||f>s?null:((f>i||i!=i)&&(i=f),(p<s||s!=s)&&(s=p),s<0?null:this.at(i>=0?i:s,n)))}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,n,i,s,l){Oc.subVectors(n,e),nl.subVectors(i,e),Fc.crossVectors(Oc,nl);let c,f=this.direction.dot(Fc);if(f>0){if(s)return null;c=1}else{if(!(f<0))return null;c=-1,f=-f}hi.subVectors(this.origin,e);const p=c*this.direction.dot(nl.crossVectors(hi,nl));if(p<0)return null;const d=c*this.direction.dot(Oc.cross(hi));if(d<0||p+d>f)return null;const m=-c*hi.dot(Fc);return m<0?null:this.at(m/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,s,l,c,f,p,d,m,v,_,y,b,T,x){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,l,c,f,p,d,m,v,_,y,b,T,x)}set(e,n,i,s,l,c,f,p,d,m,v,_,y,b,T,x){const C=this.elements;return C[0]=e,C[4]=n,C[8]=i,C[12]=s,C[1]=l,C[5]=c,C[9]=f,C[13]=p,C[2]=d,C[6]=m,C[10]=v,C[14]=_,C[3]=y,C[7]=b,C[11]=T,C[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Ia.setFromMatrixColumn(e,0).length(),l=1/Ia.setFromMatrixColumn(e,1).length(),c=1/Ia.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*l,n[5]=i[5]*l,n[6]=i[6]*l,n[7]=0,n[8]=i[8]*c,n[9]=i[9]*c,n[10]=i[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),p=Math.cos(s),d=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,y=c*v,b=f*m,T=f*v;n[0]=p*m,n[4]=-p*v,n[8]=d,n[1]=y+b*d,n[5]=_-T*d,n[9]=-f*p,n[2]=T-_*d,n[6]=b+y*d,n[10]=c*p}else if(e.order==="YXZ"){const _=p*m,y=p*v,b=d*m,T=d*v;n[0]=_+T*f,n[4]=b*f-y,n[8]=c*d,n[1]=c*v,n[5]=c*m,n[9]=-f,n[2]=y*f-b,n[6]=T+_*f,n[10]=c*p}else if(e.order==="ZXY"){const _=p*m,y=p*v,b=d*m,T=d*v;n[0]=_-T*f,n[4]=-c*v,n[8]=b+y*f,n[1]=y+b*f,n[5]=c*m,n[9]=T-_*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const _=c*m,y=c*v,b=f*m,T=f*v;n[0]=p*m,n[4]=b*d-y,n[8]=_*d+T,n[1]=p*v,n[5]=T*d+_,n[9]=y*d-b,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const _=c*p,y=c*d,b=f*p,T=f*d;n[0]=p*m,n[4]=T-_*v,n[8]=b*v+y,n[1]=v,n[5]=c*m,n[9]=-f*m,n[2]=-d*m,n[6]=y*v+b,n[10]=_-T*v}else if(e.order==="XZY"){const _=c*p,y=c*d,b=f*p,T=f*d;n[0]=p*m,n[4]=-v,n[8]=d*m,n[1]=_*v+T,n[5]=c*m,n[9]=y*v-b,n[2]=b*v-y,n[6]=f*m,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,U_)}lookAt(e,n,i){const s=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),fi.crossVectors(i,Pn),fi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),fi.crossVectors(i,Pn)),fi.normalize(),rl.crossVectors(Pn,fi),s[0]=fi.x,s[4]=rl.x,s[8]=Pn.x,s[1]=fi.y,s[5]=rl.y,s[9]=Pn.y,s[2]=fi.z,s[6]=rl.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,l=this.elements,c=i[0],f=i[4],p=i[8],d=i[12],m=i[1],v=i[5],_=i[9],y=i[13],b=i[2],T=i[6],x=i[10],C=i[14],M=i[3],S=i[7],V=i[11],z=i[15],I=s[0],O=s[4],te=s[8],K=s[12],Z=s[1],le=s[5],F=s[9],ae=s[13],ne=s[2],he=s[6],Me=s[10],ie=s[14],B=s[3],q=s[7],D=s[11],w=s[15];return l[0]=c*I+f*Z+p*ne+d*B,l[4]=c*O+f*le+p*he+d*q,l[8]=c*te+f*F+p*Me+d*D,l[12]=c*K+f*ae+p*ie+d*w,l[1]=m*I+v*Z+_*ne+y*B,l[5]=m*O+v*le+_*he+y*q,l[9]=m*te+v*F+_*Me+y*D,l[13]=m*K+v*ae+_*ie+y*w,l[2]=b*I+T*Z+x*ne+C*B,l[6]=b*O+T*le+x*he+C*q,l[10]=b*te+T*F+x*Me+C*D,l[14]=b*K+T*ae+x*ie+C*w,l[3]=M*I+S*Z+V*ne+z*B,l[7]=M*O+S*le+V*he+z*q,l[11]=M*te+S*F+V*Me+z*D,l[15]=M*K+S*ae+V*ie+z*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],l=e[12],c=e[1],f=e[5],p=e[9],d=e[13],m=e[2],v=e[6],_=e[10],y=e[14];return e[3]*(+l*p*v-s*d*v-l*f*_+i*d*_+s*f*y-i*p*y)+e[7]*(+n*p*y-n*d*_+l*c*_-s*c*y+s*d*m-l*p*m)+e[11]*(+n*d*v-n*f*y-l*c*v+i*c*y+l*f*m-i*d*m)+e[15]*(-s*f*m-n*p*v+n*f*_+s*c*v-i*c*_+i*p*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8],v=e[9],_=e[10],y=e[11],b=e[12],T=e[13],x=e[14],C=e[15],M=v*x*d-T*_*d+T*p*y-f*x*y-v*p*C+f*_*C,S=b*_*d-m*x*d-b*p*y+c*x*y+m*p*C-c*_*C,V=m*T*d-b*v*d+b*f*y-c*T*y-m*f*C+c*v*C,z=b*v*p-m*T*p-b*f*_+c*T*_+m*f*x-c*v*x,I=n*M+i*S+s*V+l*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=M*O,e[1]=(T*_*l-v*x*l-T*s*y+i*x*y+v*s*C-i*_*C)*O,e[2]=(f*x*l-T*p*l+T*s*d-i*x*d-f*s*C+i*p*C)*O,e[3]=(v*p*l-f*_*l-v*s*d+i*_*d+f*s*y-i*p*y)*O,e[4]=S*O,e[5]=(m*x*l-b*_*l+b*s*y-n*x*y-m*s*C+n*_*C)*O,e[6]=(b*p*l-c*x*l-b*s*d+n*x*d+c*s*C-n*p*C)*O,e[7]=(c*_*l-m*p*l+m*s*d-n*_*d-c*s*y+n*p*y)*O,e[8]=V*O,e[9]=(b*v*l-m*T*l-b*i*y+n*T*y+m*i*C-n*v*C)*O,e[10]=(c*T*l-b*f*l+b*i*d-n*T*d-c*i*C+n*f*C)*O,e[11]=(m*f*l-c*v*l-m*i*d+n*v*d+c*i*y-n*f*y)*O,e[12]=z*O,e[13]=(m*T*s-b*v*s+b*i*_-n*T*_-m*i*x+n*v*x)*O,e[14]=(b*f*s-c*T*s-b*i*p+n*T*p+c*i*x-n*f*x)*O,e[15]=(c*v*s-m*f*s+m*i*p-n*v*p-c*i*_+n*f*_)*O,this}scale(e){const n=this.elements,i=e.x,s=e.y,l=e.z;return n[0]*=i,n[4]*=s,n[8]*=l,n[1]*=i,n[5]*=s,n[9]*=l,n[2]*=i,n[6]*=s,n[10]*=l,n[3]*=i,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),l=1-i,c=e.x,f=e.y,p=e.z,d=l*c,m=l*f;return this.set(d*c+i,d*f-s*p,d*p+s*f,0,d*f+s*p,m*f+i,m*p-s*c,0,d*p-s*f,m*p+s*c,l*p*p+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,l,c){return this.set(1,i,l,0,e,1,c,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,m=c+c,v=f+f,_=l*d,y=l*m,b=l*v,T=c*m,x=c*v,C=f*v,M=p*d,S=p*m,V=p*v,z=i.x,I=i.y,O=i.z;return s[0]=(1-(T+C))*z,s[1]=(y+V)*z,s[2]=(b-S)*z,s[3]=0,s[4]=(y-V)*I,s[5]=(1-(_+C))*I,s[6]=(x+M)*I,s[7]=0,s[8]=(b+S)*O,s[9]=(x-M)*O,s[10]=(1-(_+T))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let l=Ia.set(s[0],s[1],s[2]).length();const c=Ia.set(s[4],s[5],s[6]).length(),f=Ia.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],rr.copy(this);const p=1/l,d=1/c,m=1/f;return rr.elements[0]*=p,rr.elements[1]*=p,rr.elements[2]*=p,rr.elements[4]*=d,rr.elements[5]*=d,rr.elements[6]*=d,rr.elements[8]*=m,rr.elements[9]*=m,rr.elements[10]*=m,n.setFromRotationMatrix(rr),i.x=l,i.y=c,i.z=f,this}makePerspective(e,n,i,s,l,c,f=2e3){const p=this.elements,d=2*l/(n-e),m=2*l/(i-s),v=(n+e)/(n-e),_=(i+s)/(i-s);let y,b;if(f===Za)y=-(c+l)/(c-l),b=-2*c*l/(c-l);else{if(f!==bl)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);y=-c/(c-l),b=-c*l/(c-l)}return p[0]=d,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=m,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,i,s,l,c,f=2e3){const p=this.elements,d=1/(n-e),m=1/(i-s),v=1/(c-l),_=(n+e)*d,y=(i+s)*m;let b,T;if(f===Za)b=(c+l)*v,T=-2*v;else{if(f!==bl)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);b=l*v,T=-1*v}return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*m,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ia=new X,rr=new ot,D_=new X(0,0,0),U_=new X(1,1,1),fi=new X,rl=new X,Pn=new X,Np=new ot,Dp=new Qi;class Nl{constructor(e=0,n=0,i=0,s=Nl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,l=s[0],c=s[4],f=s[8],p=s[1],d=s[5],m=s[9],v=s[2],_=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-dn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nl.DEFAULT_ORDER="XYZ";class Gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let I_=0;const Up=new X,Oa=new Qi,Nr=new ot,il=new X,ks=new X,O_=new X,F_=new Qi,Ip=new X(1,0,0),Op=new X(0,1,0),Fp=new X(0,0,1),k_={type:"added"},z_={type:"removed"};class Un extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new X,n=new Nl,i=new Qi,s=new X(1,1,1);n._onChange((function(){i.setFromEuler(n,!1)})),i._onChange((function(){n.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new st}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Oa.setFromAxisAngle(e,n),this.quaternion.multiply(Oa),this}rotateOnWorldAxis(e,n){return Oa.setFromAxisAngle(e,n),this.quaternion.premultiply(Oa),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?il.copy(e):il.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nr.lookAt(ks,il,this.up):Nr.lookAt(il,ks,this.up),this.quaternion.setFromRotationMatrix(Nr),s&&(Nr.extractRotation(s.matrixWorld),Oa.setFromRotationMatrix(Nr),this.quaternion.premultiply(Oa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(k_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(z_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,O_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const l=n[i];l.matrixWorldAutoUpdate!==!0&&e!==!0||l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++){const f=s[l];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map((f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()}))),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,m=p.length;d<m;d++){const v=p[d];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(e.materials,this.material[p]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),d=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),y=c(e.animations),b=c(e.nodes);f.length>0&&(i.geometries=f),p.length>0&&(i.materials=p),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),b.length>0&&(i.nodes=b)}return i.object=s,i;function c(f){const p=[];for(const d in f){const m=f[d];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Un.DEFAULT_UP=new X(0,1,0),Un.DEFAULT_MATRIX_AUTO_UPDATE=!0,Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new X,Dr=new X,kc=new X,Ur=new X,Fa=new X,ka=new X,kp=new X,zc=new X,Bc=new X,Hc=new X;let al=!1;class jn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ir.subVectors(e,n),s.cross(ir);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,n,i,s,l){ir.subVectors(s,n),Dr.subVectors(i,n),kc.subVectors(e,n);const c=ir.dot(ir),f=ir.dot(Dr),p=ir.dot(kc),d=Dr.dot(Dr),m=Dr.dot(kc),v=c*d-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,y=(d*p-f*m)*_,b=(c*m-f*p)*_;return l.set(1-y-b,b,y)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ur)!==null&&Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getUV(e,n,i,s,l,c,f,p){return al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),al=!0),this.getInterpolation(e,n,i,s,l,c,f,p)}static getInterpolation(e,n,i,s,l,c,f,p){return this.getBarycoord(e,n,i,s,Ur)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ur.x),p.addScaledVector(c,Ur.y),p.addScaledVector(f,Ur.z),p)}static isFrontFacing(e,n,i,s){return ir.subVectors(i,n),Dr.subVectors(e,n),ir.cross(Dr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),.5*ir.cross(Dr).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,l){return al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),al=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,s,l)}getInterpolation(e,n,i,s,l){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,s,l)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,l=this.c;let c,f;Fa.subVectors(s,i),ka.subVectors(l,i),zc.subVectors(e,i);const p=Fa.dot(zc),d=ka.dot(zc);if(p<=0&&d<=0)return n.copy(i);Bc.subVectors(e,s);const m=Fa.dot(Bc),v=ka.dot(Bc);if(m>=0&&v<=m)return n.copy(s);const _=p*v-m*d;if(_<=0&&p>=0&&m<=0)return c=p/(p-m),n.copy(i).addScaledVector(Fa,c);Hc.subVectors(e,l);const y=Fa.dot(Hc),b=ka.dot(Hc);if(b>=0&&y<=b)return n.copy(l);const T=y*d-p*b;if(T<=0&&d>=0&&b<=0)return f=d/(d-b),n.copy(i).addScaledVector(ka,f);const x=m*b-y*v;if(x<=0&&v-m>=0&&y-b>=0)return kp.subVectors(l,s),f=(v-m)/(v-m+(y-b)),n.copy(s).addScaledVector(kp,f);const C=1/(x+T+_);return c=T*C,f=_*C,n.copy(i).addScaledVector(Fa,c).addScaledVector(ka,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Gc(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+6*(e-a)*n:n<.5?e:n<2/3?a+6*(e-a)*(2/3-n):a}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=gt.workingColorSpace){if(e=w_(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+n):i+n-i*n,c=2*i-l;this.r=Gc(c,l,e+1/3),this.g=Gc(c,l,e),this.b=Gc(c,l,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,n=zt){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zt){const i=Vm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return gt.fromWorkingColorSpace(nn.copy(this),e),65536*Math.round(dn(255*nn.r,0,255))+256*Math.round(dn(255*nn.g,0,255))+Math.round(dn(255*nn.b,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,s=nn.g,l=nn.b,c=Math.max(i,s,l),f=Math.min(i,s,l);let p,d;const m=(f+c)/2;if(f===c)p=0,d=0;else{const v=c-f;switch(d=m<=.5?v/(c+f):v/(2-c-f),c){case i:p=(s-l)/v+(s<l?6:0);break;case s:p=(l-i)/v+2;break;case l:p=(i-s)/v+4}p/=6}return e.h=p,e.s=d,e.l=m,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=zt){gt.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b;return e!==zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*n)},${Math.round(255*i)},${Math.round(255*s)})`}offsetHSL(e,n,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+n,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pi),e.getHSL(sl);const i=bc(pi.h,sl.h,n),s=bc(pi.s,sl.s,n),l=bc(pi.l,sl.l,n);return this.setHSL(i,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,l=e.elements;return this.r=l[0]*n+l[3]*i+l[6]*s,this.g=l[1]*n+l[4]*i+l[7]*s,this.b=l[2]*n+l[5]*i+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new pt;pt.NAMES=Vm;let B_=0;class Dl extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=1,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=rd,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];s!==void 0?s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i:console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`)}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function s(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nd&&(i.blendSrc=this.blendSrc),this.blendDst!==rd&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(i.stencilFail=this.stencilFail),this.stencilZFail!==La&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),n){const l=s(e.textures),c=s(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=n[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ul extends Dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}H_();function H_(){const a=new ArrayBuffer(4),e=new Float32Array(a),n=new Uint32Array(a),i=new Uint32Array(512),s=new Uint32Array(512);for(let p=0;p<256;++p){const d=p-127;d<-27?(i[p]=0,i[256|p]=32768,s[p]=24,s[256|p]=24):d<-14?(i[p]=1024>>-d-14,i[256|p]=1024>>-d-14|32768,s[p]=-d-1,s[256|p]=-d-1):d<=15?(i[p]=d+15<<10,i[256|p]=d+15<<10|32768,s[p]=13,s[256|p]=13):d<128?(i[p]=31744,i[256|p]=64512,s[p]=24,s[256|p]=24):(i[p]=31744,i[256|p]=64512,s[p]=13,s[256|p]=13)}const l=new Uint32Array(2048),c=new Uint32Array(64),f=new Uint32Array(64);for(let p=1;p<1024;++p){let d=p<<13,m=0;for(;(8388608&d)==0;)d<<=1,m-=8388608;d&=-8388609,m+=947912704,l[p]=d|m}for(let p=1024;p<2048;++p)l[p]=939524096+(p-1024<<13);for(let p=1;p<31;++p)c[p]=p<<23;c[31]=1199570944,c[32]=2147483648;for(let p=33;p<63;++p)c[p]=2147483648+(p-32<<23);c[63]=3347054592;for(let p=1;p<64;++p)p!==32&&(f[p]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:s,mantissaTable:l,exponentTable:c,offsetTable:f}}const Dt=new X,ol=new $e;class _r{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,l){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array),l=En(l,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tp&&(e.usage=this.usage),e}}class jm extends _r{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Wm extends _r{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xr extends _r{constructor(e,n,i){super(new Float32Array(e),n,i)}}let G_=0;const Vn=new ot,Vc=new Un,za=new X,Nn=new yi,zs=new yi,Xt=new X;class Ei extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?Wm:jm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new st().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(za).negate(),this.translate(za.x,za.y,za.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const l=n[i];Nn.setFromBufferAttribute(l),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new X,1/0);if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];zs.setFromBufferAttribute(f),this.morphTargetsRelative?(Xt.addVectors(Nn.min,zs.min),Nn.expandByPoint(Xt),Xt.addVectors(Nn.max,zs.max),Nn.expandByPoint(Xt)):(Nn.expandByPoint(zs.min),Nn.expandByPoint(zs.max))}Nn.getCenter(i);let s=0;for(let l=0,c=e.count;l<c;l++)Xt.fromBufferAttribute(e,l),s=Math.max(s,i.distanceToSquared(Xt));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,m=f.count;d<m;d++)Xt.fromBufferAttribute(f,d),p&&(za.fromBufferAttribute(e,d),Xt.add(za)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const i=e.array,s=n.position.array,l=n.normal.array,c=n.uv.array,f=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _r(new Float32Array(4*f),4));const p=this.getAttribute("tangent").array,d=[],m=[];for(let Z=0;Z<f;Z++)d[Z]=new X,m[Z]=new X;const v=new X,_=new X,y=new X,b=new $e,T=new $e,x=new $e,C=new X,M=new X;function S(Z,le,F){v.fromArray(s,3*Z),_.fromArray(s,3*le),y.fromArray(s,3*F),b.fromArray(c,2*Z),T.fromArray(c,2*le),x.fromArray(c,2*F),_.sub(v),y.sub(v),T.sub(b),x.sub(b);const ae=1/(T.x*x.y-x.x*T.y);isFinite(ae)&&(C.copy(_).multiplyScalar(x.y).addScaledVector(y,-T.y).multiplyScalar(ae),M.copy(y).multiplyScalar(T.x).addScaledVector(_,-x.x).multiplyScalar(ae),d[Z].add(C),d[le].add(C),d[F].add(C),m[Z].add(M),m[le].add(M),m[F].add(M))}let V=this.groups;V.length===0&&(V=[{start:0,count:i.length}]);for(let Z=0,le=V.length;Z<le;++Z){const F=V[Z],ae=F.start;for(let ne=ae,he=ae+F.count;ne<he;ne+=3)S(i[ne+0],i[ne+1],i[ne+2])}const z=new X,I=new X,O=new X,te=new X;function K(Z){O.fromArray(l,3*Z),te.copy(O);const le=d[Z];z.copy(le),z.sub(O.multiplyScalar(O.dot(le))).normalize(),I.crossVectors(te,le);const F=I.dot(m[Z])<0?-1:1;p[4*Z]=z.x,p[4*Z+1]=z.y,p[4*Z+2]=z.z,p[4*Z+3]=F}for(let Z=0,le=V.length;Z<le;++Z){const F=V[Z],ae=F.start;for(let ne=ae,he=ae+F.count;ne<he;ne+=3)K(i[ne+0]),K(i[ne+1]),K(i[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _r(new Float32Array(3*n.count),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new X,l=new X,c=new X,f=new X,p=new X,d=new X,m=new X,v=new X;if(e)for(let _=0,y=e.count;_<y;_+=3){const b=e.getX(_+0),T=e.getX(_+1),x=e.getX(_+2);s.fromBufferAttribute(n,b),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,x),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(i,b),p.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),f.add(m),p.add(m),d.add(m),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(T,p.x,p.y,p.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)s.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(f,p){const d=f.array,m=f.itemSize,v=f.normalized,_=new d.constructor(p.length*m);let y=0,b=0;for(let T=0,x=p.length;T<x;T++){y=f.isInterleavedBufferAttribute?p[T]*f.data.stride+f.offset:p[T]*m;for(let C=0;C<m;C++)_[b++]=d[y++]}return new _r(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,i=this.index.array,s=this.attributes;for(const f in s){const p=e(s[f],i);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let m=0,v=d.length;m<v;m++){const _=e(d[m],i);p.push(_)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const p in i){const d=i[p];e.data.attributes[p]=d.toJSON(e.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],m=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];m.push(y.toJSON(e.data))}m.length>0&&(s[p]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(n))}const l=e.morphAttributes;for(const d in l){const m=[],v=l[d];for(let _=0,y=v.length;_<y;_++)m.push(v[_].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zp=new ot,Gi=new Xs,ll=new Si,Bp=new X,Ba=new X,Ha=new X,Ga=new X,jc=new X,ul=new X,cl=new $e,dl=new $e,hl=new $e,Hp=new X,Gp=new X,Vp=new X,fl=new X,pl=new X;class Wn extends Un{constructor(e=new Ei,n=new Ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){ul.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const m=f[p],v=l[p];m!==0&&(jc.fromBufferAttribute(v,e),c?ul.addScaledVector(jc,m):ul.addScaledVector(jc.sub(n),m))}n.add(ul)}return n}raycast(e,n){const i=this.geometry,s=this.material,l=this.matrixWorld;if(s!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(l),Gi.copy(e.ray).recast(e.near),ll.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ll,Bp)===null||Gi.origin.distanceToSquared(Bp)>(e.far-e.near)**2))return;zp.copy(l).invert(),Gi.copy(e.ray).applyMatrix4(zp),i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,n,Gi)}}_computeIntersections(e,n,i){let s;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,T=_.length;b<T;b++){const x=_[b],C=c[x.materialIndex];for(let M=Math.max(x.start,y.start),S=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));M<S;M+=3)s=ml(this,C,e,i,d,m,v,f.getX(M),f.getX(M+1),f.getX(M+2)),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,n.push(s))}else for(let b=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);b<T;b+=3)s=ml(this,c,e,i,d,m,v,f.getX(b),f.getX(b+1),f.getX(b+2)),s&&(s.faceIndex=Math.floor(b/3),n.push(s));else if(p!==void 0)if(Array.isArray(c))for(let b=0,T=_.length;b<T;b++){const x=_[b],C=c[x.materialIndex];for(let M=Math.max(x.start,y.start),S=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));M<S;M+=3)s=ml(this,C,e,i,d,m,v,M,M+1,M+2),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,n.push(s))}else for(let b=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);b<T;b+=3)s=ml(this,c,e,i,d,m,v,b,b+1,b+2),s&&(s.faceIndex=Math.floor(b/3),n.push(s))}}function ml(a,e,n,i,s,l,c,f,p,d){a.getVertexPosition(f,Ba),a.getVertexPosition(p,Ha),a.getVertexPosition(d,Ga);const m=(function(v,_,y,b,T,x,C,M){let S;if(S=_.side===Mn?b.intersectTriangle(C,x,T,!0,M):b.intersectTriangle(T,x,C,_.side===xi,M),S===null)return null;pl.copy(M),pl.applyMatrix4(v.matrixWorld);const V=y.ray.origin.distanceTo(pl);return V<y.near||V>y.far?null:{distance:V,point:pl.clone(),object:v}})(a,e,n,i,Ba,Ha,Ga,fl);if(m){s&&(cl.fromBufferAttribute(s,f),dl.fromBufferAttribute(s,p),hl.fromBufferAttribute(s,d),m.uv=jn.getInterpolation(fl,Ba,Ha,Ga,cl,dl,hl,new $e)),l&&(cl.fromBufferAttribute(l,f),dl.fromBufferAttribute(l,p),hl.fromBufferAttribute(l,d),m.uv1=jn.getInterpolation(fl,Ba,Ha,Ga,cl,dl,hl,new $e),m.uv2=m.uv1),c&&(Hp.fromBufferAttribute(c,f),Gp.fromBufferAttribute(c,p),Vp.fromBufferAttribute(c,d),m.normal=jn.getInterpolation(fl,Ba,Ha,Ga,Hp,Gp,Vp,new X),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new X,materialIndex:0};jn.getNormal(Ba,Ha,Ga,v.normal),m.face=v}return m}class Ys extends Ei{constructor(e=1,n=1,i=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],m=[],v=[];let _=0,y=0;function b(T,x,C,M,S,V,z,I,O,te,K){const Z=V/O,le=z/te,F=V/2,ae=z/2,ne=I/2,he=O+1,Me=te+1;let ie=0,B=0;const q=new X;for(let D=0;D<Me;D++){const w=D*le-ae;for(let j=0;j<he;j++){const R=j*Z-F;q[T]=R*M,q[x]=w*S,q[C]=ne,d.push(q.x,q.y,q.z),q[T]=0,q[x]=0,q[C]=I>0?1:-1,m.push(q.x,q.y,q.z),v.push(j/O),v.push(1-D/te),ie+=1}}for(let D=0;D<te;D++)for(let w=0;w<O;w++){const j=_+w+he*D,R=_+w+he*(D+1),A=_+(w+1)+he*(D+1),H=_+(w+1)+he*D;p.push(j,R,H),p.push(R,A,H),B+=6}f.addGroup(y,B,K),y+=B,_+=ie}b("z","y","x",-1,-1,i,n,e,c,l,0),b("z","y","x",1,-1,i,n,-e,c,l,1),b("x","z","y",1,1,e,i,n,s,c,2),b("x","z","y",1,-1,e,i,-n,s,c,3),b("x","y","z",1,-1,e,n,i,s,l,4),b("x","y","z",-1,-1,e,n,-i,s,l,5),this.setIndex(p),this.setAttribute("position",new xr(d,3)),this.setAttribute("normal",new xr(m,3)),this.setAttribute("uv",new xr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(a){const e={};for(const n in a){e[n]={};for(const i in a[n]){const s=a[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function un(a){const e={};for(let n=0;n<a.length;n++){const i=Qa(a[n]);for(const s in i)e[s]=i[s]}return e}function Xm(a){return a.getRenderTarget()===null?a.outputColorSpace:gt.workingColorSpace}const V_={clone:Qa,merge:un};class Ji extends Dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=(function(n){const i=[];for(let s=0;s<n.length;s++)i.push(n[s].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _d extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Za}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends _d{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=2*ud*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*Sl*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ud*Math.atan(Math.tan(.5*Sl*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(.5*Sl*this.fov)/this.zoom,i=2*n,s=this.aspect*i,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/p,n-=c.offsetY*i/d,s*=c.width/p,i*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Va=-90;class j_ extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Va,1,e,n);s.layers=this.layers,this.add(s);const l=new Dn(Va,1,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Va,1,e,n);c.layers=this.layers,this.add(c);const f=new Dn(Va,1,e,n);f.layers=this.layers,this.add(f);const p=new Dn(Va,1,e,n);p.layers=this.layers,this.add(p);const d=new Dn(Va,1,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,l,c,f,p]=n;for(const d of n)this.remove(d);if(e===Za)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else{if(e!==bl)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1)}for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,l),e.setRenderTarget(i,1,s),e.render(n,c),e.setRenderTarget(i,2,s),e.render(n,f),e.setRenderTarget(i,3,s),e.render(n,p),e.setRenderTarget(i,4,s),e.render(n,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(n,m),e.setRenderTarget(v,_,y),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class Ym extends wn{constructor(e,n,i,s,l,c,f,p,d,m){super(e=e!==void 0?e:[],n=n!==void 0?n:qa,i,s,l,c,f,p,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W_ extends Zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Hs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$i?zt:vr),this.texture=new Ym(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ar}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ys(5,5,5),l=new Ji({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:0});l.uniforms.tEquirect.value=n;const c=new Wn(s,l),f=n.minFilter;return n.minFilter===wl&&(n.minFilter=ar),new j_(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,i,s){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,i,s);e.setRenderTarget(l)}}const Wc=new X,X_=new X,Y_=new st;class mi{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Wc.subVectors(i,n).cross(X_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Y_.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Si,gl=new X;class xd{constructor(e=new mi,n=new mi,i=new mi,s=new mi,l=new mi,c=new mi){this.planes=[e,n,i,s,l,c]}set(e,n,i,s,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=2e3){const i=this.planes,s=e.elements,l=s[0],c=s[1],f=s[2],p=s[3],d=s[4],m=s[5],v=s[6],_=s[7],y=s[8],b=s[9],T=s[10],x=s[11],C=s[12],M=s[13],S=s[14],V=s[15];if(i[0].setComponents(p-l,_-d,x-y,V-C).normalize(),i[1].setComponents(p+l,_+d,x+y,V+C).normalize(),i[2].setComponents(p+c,_+m,x+b,V+M).normalize(),i[3].setComponents(p-c,_-m,x-b,V-M).normalize(),i[4].setComponents(p-f,_-v,x-T,V-S).normalize(),n===Za)i[5].setComponents(p+f,_+v,x+T,V+S).normalize();else{if(n!==bl)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);i[5].setComponents(f,v,T,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(gl.x=s.normal.x>0?e.max.x:e.min.x,gl.y=s.normal.y>0?e.max.y:e.min.y,gl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qm(){let a=null,e=!1,n=null,i=null;function s(l,c){n(l,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){a=l}}}function q_(a,e){const n=e.isWebGL2,i=new WeakMap;return{get:function(s){return s.isInterleavedBufferAttribute&&(s=s.data),i.get(s)},remove:function(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=i.get(s);l&&(a.deleteBuffer(l.buffer),i.delete(s))},update:function(s,l){if(s.isGLBufferAttribute){const f=i.get(s);return void((!f||f.version<s.version)&&i.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version}))}s.isInterleavedBufferAttribute&&(s=s.data);const c=i.get(s);if(c===void 0)i.set(s,(function(f,p){const d=f.array,m=f.usage,v=d.byteLength,_=a.createBuffer();let y;if(a.bindBuffer(p,_),a.bufferData(p,d,m),f.onUploadCallback(),d instanceof Float32Array)y=a.FLOAT;else if(d instanceof Uint16Array)if(f.isFloat16BufferAttribute){if(!n)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");y=a.HALF_FLOAT}else y=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=a.SHORT;else if(d instanceof Uint32Array)y=a.UNSIGNED_INT;else if(d instanceof Int32Array)y=a.INT;else if(d instanceof Int8Array)y=a.BYTE;else if(d instanceof Uint8Array)y=a.UNSIGNED_BYTE;else{if(!(d instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);y=a.UNSIGNED_BYTE}return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}})(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(f,p,d){const m=p.array,v=p._updateRange,_=p.updateRanges;if(a.bindBuffer(d,f),v.count===-1&&_.length===0&&a.bufferSubData(d,0,m),_.length!==0){for(let y=0,b=_.length;y<b;y++){const T=_[y];n?a.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count):a.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m.subarray(T.start,T.start+T.count))}p.clearUpdateRanges()}v.count!==-1&&(n?a.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):a.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),p.onUploadCallback()})(c.buffer,s,l),c.version=s.version}}}}class yd extends Ei{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const l=e/2,c=n/2,f=Math.floor(i),p=Math.floor(s),d=f+1,m=p+1,v=e/f,_=n/p,y=[],b=[],T=[],x=[];for(let C=0;C<m;C++){const M=C*_-c;for(let S=0;S<d;S++){const V=S*v-l;b.push(V,-M,0),T.push(0,0,1),x.push(S/f),x.push(1-C/p)}}for(let C=0;C<p;C++)for(let M=0;M<f;M++){const S=M+d*C,V=M+d*(C+1),z=M+1+d*(C+1),I=M+1+d*C;y.push(S,V,I),y.push(V,z,I)}this.setIndex(y),this.setAttribute("position",new xr(b,3)),this.setAttribute("normal",new xr(T,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yd(e.width,e.height,e.widthSegments,e.heightSegments)}}const nt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Ce={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mr={basic:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:un([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:un([Ce.lights,Ce.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};mr.physical={uniforms:un([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const vl={r:0,b:0,g:0};function K_(a,e,n,i,s,l,c){const f=new pt(0);let p,d,m=l===!0?0:1,v=null,_=0,y=null;function b(T,x){T.getRGB(vl,Xm(a)),i.buffers.color.setClear(vl.r,vl.g,vl.b,x,c)}return{getClearColor:function(){return f},setClearColor:function(T,x=1){f.set(T),m=x,b(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(T){m=T,b(f,m)},render:function(T,x){let C=!1,M=x.isScene===!0?x.background:null;M&&M.isTexture&&(M=(x.backgroundBlurriness>0?n:e).get(M)),M===null?b(f,m):M&&M.isColor&&(b(M,1),C=!0);const S=a.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,c):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||C)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ll)?(d===void 0&&(d=new Wn(new Ys(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Qa(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,z,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=gt.getTransfer(M.colorSpace)!==Et,v===M&&_===M.version&&y===a.toneMapping||(d.material.needsUpdate=!0,v=M,_=M.version,y=a.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(p===void 0&&(p=new Wn(new yd(2,2),new Ji({name:"BackgroundMaterial",uniforms:Qa(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=M,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=gt.getTransfer(M.colorSpace)!==Et,M.matrixAutoUpdate===!0&&M.updateMatrix(),p.material.uniforms.uvTransform.value.copy(M.matrix),v===M&&_===M.version&&y===a.toneMapping||(p.material.needsUpdate=!0,v=M,_=M.version,y=a.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null))}}}function $_(a,e,n,i){const s=a.getParameter(a.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||l!==null,f={},p=y(null);let d=p,m=!1;function v(z){return i.isWebGL2?a.bindVertexArray(z):l.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?a.deleteVertexArray(z):l.deleteVertexArrayOES(z)}function y(z){const I=[],O=[],te=[];for(let K=0;K<s;K++)I[K]=0,O[K]=0,te[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:te,object:z,attributes:{},index:null}}function b(){const z=d.newAttributes;for(let I=0,O=z.length;I<O;I++)z[I]=0}function T(z){x(z,0)}function x(z,I){const O=d.newAttributes,te=d.enabledAttributes,K=d.attributeDivisors;O[z]=1,te[z]===0&&(a.enableVertexAttribArray(z),te[z]=1),K[z]!==I&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,I),K[z]=I)}function C(){const z=d.newAttributes,I=d.enabledAttributes;for(let O=0,te=I.length;O<te;O++)I[O]!==z[O]&&(a.disableVertexAttribArray(O),I[O]=0)}function M(z,I,O,te,K,Z,le){le===!0?a.vertexAttribIPointer(z,I,O,K,Z):a.vertexAttribPointer(z,I,O,te,K,Z)}function S(){V(),m=!0,d!==p&&(d=p,v(d.object))}function V(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:function(z,I,O,te,K){let Z=!1;if(c){const le=(function(F,ae,ne){const he=ne.wireframe===!0;let Me=f[F.id];Me===void 0&&(Me={},f[F.id]=Me);let ie=Me[ae.id];ie===void 0&&(ie={},Me[ae.id]=ie);let B=ie[he];return B===void 0&&(B=y(i.isWebGL2?a.createVertexArray():l.createVertexArrayOES()),ie[he]=B),B})(te,O,I);d!==le&&(d=le,v(d.object)),Z=(function(F,ae,ne,he){const Me=d.attributes,ie=ae.attributes;let B=0;const q=ne.getAttributes();for(const D in q)if(q[D].location>=0){const w=Me[D];let j=ie[D];if(j===void 0&&(D==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),D==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),w===void 0||w.attribute!==j||j&&w.data!==j.data)return!0;B++}return d.attributesNum!==B||d.index!==he})(z,te,O,K),Z&&(function(F,ae,ne,he){const Me={},ie=ae.attributes;let B=0;const q=ne.getAttributes();for(const D in q)if(q[D].location>=0){let w=ie[D];w===void 0&&(D==="instanceMatrix"&&F.instanceMatrix&&(w=F.instanceMatrix),D==="instanceColor"&&F.instanceColor&&(w=F.instanceColor));const j={};j.attribute=w,w&&w.data&&(j.data=w.data),Me[D]=j,B++}d.attributes=Me,d.attributesNum=B,d.index=he})(z,te,O,K)}else{const le=I.wireframe===!0;d.geometry===te.id&&d.program===O.id&&d.wireframe===le||(d.geometry=te.id,d.program=O.id,d.wireframe=le,Z=!0)}K!==null&&n.update(K,a.ELEMENT_ARRAY_BUFFER),(Z||m)&&(m=!1,(function(le,F,ae,ne){if(i.isWebGL2===!1&&(le.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const he=ne.attributes,Me=ae.getAttributes(),ie=F.defaultAttributeValues;for(const B in Me){const q=Me[B];if(q.location>=0){let D=he[B];if(D===void 0&&(B==="instanceMatrix"&&le.instanceMatrix&&(D=le.instanceMatrix),B==="instanceColor"&&le.instanceColor&&(D=le.instanceColor)),D!==void 0){const w=D.normalized,j=D.itemSize,R=n.get(D);if(R===void 0)continue;const A=R.buffer,H=R.type,$=R.bytesPerElement,k=i.isWebGL2===!0&&(H===a.INT||H===a.UNSIGNED_INT||D.gpuType===Lm);if(D.isInterleavedBufferAttribute){const Q=D.data,ue=Q.stride,pe=D.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<q.locationSize;Ee++)x(q.location+Ee,Q.meshPerAttribute);le.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)T(q.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,A);for(let Ee=0;Ee<q.locationSize;Ee++)M(q.location+Ee,j/q.locationSize,H,w,ue*$,(pe+j/q.locationSize*Ee)*$,k)}else{if(D.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)x(q.location+Q,D.meshPerAttribute);le.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Q=0;Q<q.locationSize;Q++)T(q.location+Q);a.bindBuffer(a.ARRAY_BUFFER,A);for(let Q=0;Q<q.locationSize;Q++)M(q.location+Q,j/q.locationSize,H,w,j*$,j/q.locationSize*Q*$,k)}}else if(ie!==void 0){const w=ie[B];if(w!==void 0)switch(w.length){case 2:a.vertexAttrib2fv(q.location,w);break;case 3:a.vertexAttrib3fv(q.location,w);break;case 4:a.vertexAttrib4fv(q.location,w);break;default:a.vertexAttrib1fv(q.location,w)}}}}C()})(z,I,O,te),K!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,n.get(K).buffer))},reset:S,resetDefaultState:V,dispose:function(){S();for(const z in f){const I=f[z];for(const O in I){const te=I[O];for(const K in te)_(te[K].object),delete te[K];delete I[O]}delete f[z]}},releaseStatesOfGeometry:function(z){if(f[z.id]===void 0)return;const I=f[z.id];for(const O in I){const te=I[O];for(const K in te)_(te[K].object),delete te[K];delete I[O]}delete f[z.id]},releaseStatesOfProgram:function(z){for(const I in f){const O=f[I];if(O[z.id]===void 0)continue;const te=O[z.id];for(const K in te)_(te[K].object),delete te[K];delete O[z.id]}},initAttributes:b,enableAttribute:T,disableUnusedAttributes:C}}function Z_(a,e,n,i){const s=i.isWebGL2;let l;this.setMode=function(c){l=c},this.render=function(c,f){a.drawArrays(l,c,f),n.update(f,l,1)},this.renderInstances=function(c,f,p){if(p===0)return;let d,m;if(s)d=a,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[m](l,c,f,p),n.update(f,l,p)},this.renderMultiDraw=function(c,f,p){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<p;m++)this.render(c[m],f[m]);else{d.multiDrawArraysWEBGL(l,c,0,f,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v];n.update(m,l,1)}}}function Q_(a,e,n){let i;function s(V){if(V==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const f=s(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=l||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,m=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),b=a.getParameter(a.MAX_VERTEX_ATTRIBS),T=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),x=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),M=v>0,S=l||e.has("OES_texture_float");return{isWebGL2:l,drawBuffers:p,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,precision:c,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:C,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:M&&S,maxSamples:l?a.getParameter(a.MAX_SAMPLES):0}}function J_(a){const e=this;let n=null,i=0,s=!1,l=!1;const c=new mi,f=new st,p={value:null,needsUpdate:!1};function d(m,v,_,y){const b=m!==null?m.length:0;let T=null;if(b!==0){if(T=p.value,y!==!0||T===null){const x=_+4*b,C=v.matrixWorldInverse;f.getNormalMatrix(C),(T===null||T.length<x)&&(T=new Float32Array(x));for(let M=0,S=_;M!==b;++M,S+=4)c.copy(m[M]).applyMatrix4(C,f),c.normal.toArray(T,S),T[S+3]=c.constant}p.value=T,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,T}this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const _=m.length!==0||v||i!==0||s;return s=v,i=m.length,_},this.beginShadows=function(){l=!0,d(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,v){n=d(m,v,0)},this.setState=function(m,v,_){const y=m.clippingPlanes,b=m.clipIntersection,T=m.clipShadows,x=a.get(m);if(!s||y===null||y.length===0||l&&!T)l?d(null):(function(){p.value!==n&&(p.value=n,p.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{const C=l?0:i,M=4*C;let S=x.clippingState||null;p.value=S,S=d(y,v,M,_);for(let V=0;V!==M;++V)S[V]=n[V];x.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}}}function e0(a){let e=new WeakMap;function n(s,l){return l===id?s.mapping=qa:l===ad&&(s.mapping=Ka),s}function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(s){if(s&&s.isTexture){const l=s.mapping;if(l===id||l===ad){if(e.has(s))return n(e.get(s).texture,s.mapping);{const c=s.image;if(c&&c.height>0){const f=new W_(c.height/2);return f.fromEquirectangularTexture(a,s),e.set(s,f),s.addEventListener("dispose",i),n(f.texture,s.mapping)}return null}}}return s},dispose:function(){e=new WeakMap}}}class t0 extends _d{constructor(e=-1,n=1,i=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const jp=[.125,.215,.35,.446,.526,.582],Bs=20,Xc=new t0,Wp=new pt;let Yc=null,qc=0,Kc=0;const ji=(1+Math.sqrt(5))/2,ja=1/ji,Xp=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ji,ja),new X(0,ji,-ja),new X(ja,0,ji),new X(-ja,0,ji),new X(ji,ja,0),new X(-ji,ja,0)];class Yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,qc,Kc),e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qa||e.mapping===Ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ar,minFilter:ar,generateMipmaps:!1,type:Vs,format:gr,colorSpace:Fr,depthBuffer:!1},s=qp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(e,n,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(c){const f=[],p=[],d=[];let m=c;const v=c-4+1+jp.length;for(let _=0;_<v;_++){const y=Math.pow(2,m);p.push(y);let b=1/y;_>c-4?b=jp[_-c+4-1]:_===0&&(b=0),d.push(b);const T=1/(y-2),x=-T,C=1+T,M=[x,x,C,x,C,C,x,x,C,C,x,C],S=6,V=6,z=3,I=2,O=1,te=new Float32Array(z*V*S),K=new Float32Array(I*V*S),Z=new Float32Array(O*V*S);for(let F=0;F<S;F++){const ae=F%3*2/3-1,ne=F>2?0:-1,he=[ae,ne,0,ae+2/3,ne,0,ae+2/3,ne+1,0,ae,ne,0,ae+2/3,ne+1,0,ae,ne+1,0];te.set(he,z*V*F),K.set(M,I*V*F);const Me=[F,F,F,F,F,F];Z.set(Me,O*V*F)}const le=new Ei;le.setAttribute("position",new _r(te,z)),le.setAttribute("uv",new _r(K,I)),le.setAttribute("faceIndex",new _r(Z,O)),f.push(le),m>4&&m--}return{lodPlanes:f,sizeLods:p,sigmas:d}})(l)),this._blurMaterial=(function(c,f,p){const d=new Float32Array(Bs),m=new X(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/f,CUBEUV_TEXEL_HEIGHT:1/p,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:d},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:m}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(l,e,n)}return s}_compileMaterial(e){const n=new Wn(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,s){const l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(Wp),p.toneMapping=_i,p.autoClear=!1;const v=new Ul({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Wn(new Ys,v);let y=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,y=!0):(v.color.copy(Wp),y=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.lookAt(f[T],0,0)):x===1?(l.up.set(0,0,c[T]),l.lookAt(0,f[T],0)):(l.up.set(0,c[T],0),l.lookAt(0,0,f[T]));const C=this._cubeSize;_l(s,x*C,T>2?C:0,C,C),p.setRenderTarget(s),y&&p.render(_,l),p.render(e,l)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=m,p.autoClear=d,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===qa||e.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kp());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Wn(this._lodPlanes[0],l);l.uniforms.envMap.value=e;const f=this._cubeSize;_l(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(c,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Xp[(s-1)%Xp.length];this._blur(e,s-1,s,l,c)}n.autoClear=i}_blur(e,n,i,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,i,s,"latitudinal",l),this._halfBlur(c,e,i,i,s,"longitudinal",l)}_halfBlur(e,n,i,s,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=new Wn(this._lodPlanes[s],d),v=d.uniforms,_=this._sizeLods[i]-1,y=isFinite(l)?Math.PI/(2*_):2*Math.PI/39,b=l/y,T=isFinite(l)?1+Math.floor(3*b):Bs;T>Bs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${T} samples when the maximum is set to 20`);const x=[];let C=0;for(let V=0;V<Bs;++V){const z=V/b,I=Math.exp(-z*z/2);x.push(I),V===0?C+=I:V<T&&(C+=2*I)}for(let V=0;V<x.length;V++)x[V]=x[V]/C;v.envMap.value=e.texture,v.samples.value=T,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:M}=this;v.dTheta.value=y,v.mipInt.value=M-i;const S=this._sizeLods[s];_l(n,3*S*(s>M-4?s-M+4:0),4*(this._cubeSize-S),3*S,2*S),p.setRenderTarget(n),p.render(m,Xc)}}function qp(a,e,n){const i=new Zi(a,e,n);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(a,e,n,i,s){a.viewport.set(e,n,i,s),a.scissor.set(e,n,i,s)}function Kp(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $p(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n0(a){let e=new WeakMap,n=null;function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(s){if(s&&s.isTexture){const l=s.mapping,c=l===id||l===ad,f=l===qa||l===Ka;if(c||f){if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return n===null&&(n=new Yp(a)),p=c?n.fromEquirectangular(s,p):n.fromCubemap(s,p),e.set(s,p),p.texture}if(e.has(s))return e.get(s).texture;{const p=s.image;if(c&&p&&p.height>0||f&&p&&(function(d){let m=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&m++;return m===v})(p)){n===null&&(n=new Yp(a));const d=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",i),d.texture}return null}}}return s},dispose:function(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function r0(a){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function i0(a,e,n,i){const s={},l=new WeakMap;function c(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let y=0,b=_.length;y<b;y++)e.remove(_[y])}d.removeEventListener("dispose",c),delete s[d.id];const m=l.get(d);m&&(e.remove(m),l.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function f(p){const d=[],m=p.index,v=p.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let x=0,C=T.length;x<C;x+=3){const M=T[x+0],S=T[x+1],V=T[x+2];d.push(M,S,S,V,V,M)}}else{if(v===void 0)return;{const T=v.array;_=v.version;for(let x=0,C=T.length/3-1;x<C;x+=3){const M=x+0,S=x+1,V=x+2;d.push(M,S,S,V,V,M)}}}const y=new(km(d)?Wm:jm)(d,1);y.version=_;const b=l.get(p);b&&e.remove(b),l.set(p,y)}return{get:function(p,d){return s[d.id]===!0||(d.addEventListener("dispose",c),s[d.id]=!0,n.memory.geometries++),d},update:function(p){const d=p.attributes;for(const v in d)e.update(d[v],a.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const _=m[v];for(let y=0,b=_.length;y<b;y++)e.update(_[y],a.ARRAY_BUFFER)}},getWireframeAttribute:function(p){const d=l.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&f(p)}else f(p);return l.get(p)}}}function a0(a,e,n,i){const s=i.isWebGL2;let l,c,f;this.setMode=function(p){l=p},this.setIndex=function(p){c=p.type,f=p.bytesPerElement},this.render=function(p,d){a.drawElements(l,d,c,p*f),n.update(d,l,1)},this.renderInstances=function(p,d,m){if(m===0)return;let v,_;if(s)v=a,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");v[_](l,d,c,p*f,m),n.update(d,l,m)},this.renderMultiDraw=function(p,d,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<m;_++)this.render(p[_]/f,d[_]);else{v.multiDrawElementsWEBGL(l,d,0,c,p,0,m);let _=0;for(let y=0;y<m;y++)_+=d[y];n.update(_,l,1)}}}function s0(a){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,s){switch(e.calls++,i){case a.TRIANGLES:e.triangles+=s*(n/3);break;case a.LINES:e.lines+=s*(n/2);break;case a.LINE_STRIP:e.lines+=s*(n-1);break;case a.LINE_LOOP:e.lines+=s*n;break;case a.POINTS:e.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function o0(a,e){return a[0]-e[0]}function l0(a,e){return Math.abs(e[1])-Math.abs(a[1])}function u0(a,e,n){const i={},s=new Float32Array(8),l=new WeakMap,c=new Bt,f=[];for(let p=0;p<8;p++)f[p]=[p,0];return{update:function(p,d,m){const v=p.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=y!==void 0?y.length:0;let T=l.get(d);if(T===void 0||T.count!==b){let ne=function(){F.dispose(),l.delete(d),d.removeEventListener("dispose",ne)};var _=ne;T!==void 0&&T.texture.dispose();const M=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,V=d.morphAttributes.color!==void 0,z=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let te=0;M===!0&&(te=1),S===!0&&(te=2),V===!0&&(te=3);let K=d.attributes.position.count*te,Z=1;K>e.maxTextureSize&&(Z=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const le=new Float32Array(K*Z*4*b),F=new Hm(le,K,Z,b);F.type=vi,F.needsUpdate=!0;const ae=4*te;for(let he=0;he<b;he++){const Me=z[he],ie=I[he],B=O[he],q=K*Z*4*he;for(let D=0;D<Me.count;D++){const w=D*ae;M===!0&&(c.fromBufferAttribute(Me,D),le[q+w+0]=c.x,le[q+w+1]=c.y,le[q+w+2]=c.z,le[q+w+3]=0),S===!0&&(c.fromBufferAttribute(ie,D),le[q+w+4]=c.x,le[q+w+5]=c.y,le[q+w+6]=c.z,le[q+w+7]=0),V===!0&&(c.fromBufferAttribute(B,D),le[q+w+8]=c.x,le[q+w+9]=c.y,le[q+w+10]=c.z,le[q+w+11]=B.itemSize===4?c.w:1)}}T={count:b,texture:F,size:new $e(K,Z)},l.set(d,T),d.addEventListener("dispose",ne)}let x=0;for(let M=0;M<v.length;M++)x+=v[M];const C=d.morphTargetsRelative?1:1-x;m.getUniforms().setValue(a,"morphTargetBaseInfluence",C),m.getUniforms().setValue(a,"morphTargetInfluences",v),m.getUniforms().setValue(a,"morphTargetsTexture",T.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",T.size)}else{const y=v===void 0?0:v.length;let b=i[d.id];if(b===void 0||b.length!==y){b=[];for(let S=0;S<y;S++)b[S]=[S,0];i[d.id]=b}for(let S=0;S<y;S++){const V=b[S];V[0]=S,V[1]=v[S]}b.sort(l0);for(let S=0;S<8;S++)S<y&&b[S][1]?(f[S][0]=b[S][0],f[S][1]=b[S][1]):(f[S][0]=Number.MAX_SAFE_INTEGER,f[S][1]=0);f.sort(o0);const T=d.morphAttributes.position,x=d.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const V=f[S],z=V[0],I=V[1];z!==Number.MAX_SAFE_INTEGER&&I?(T&&d.getAttribute("morphTarget"+S)!==T[z]&&d.setAttribute("morphTarget"+S,T[z]),x&&d.getAttribute("morphNormal"+S)!==x[z]&&d.setAttribute("morphNormal"+S,x[z]),s[S]=I,C+=I):(T&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),x&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),s[S]=0)}const M=d.morphTargetsRelative?1:1-C;m.getUniforms().setValue(a,"morphTargetBaseInfluence",M),m.getUniforms().setValue(a,"morphTargetInfluences",s)}}}}function c0(a,e,n,i){let s=new WeakMap;function l(c){const f=c.target;f.removeEventListener("dispose",l),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:function(c){const f=i.render.frame,p=c.geometry,d=e.get(c,p);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d},dispose:function(){s=new WeakMap}}}class Km extends wn{constructor(e,n,i,s,l,c,f,p,d,m){if((m=m!==void 0?m:Ki)!==Ki&&m!==$a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Ki&&(i=gi),i===void 0&&m===$a&&(i=qi),super(null,s,l,c,f,p,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:cn,this.minFilter=p!==void 0?p:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $m=new wn,Zm=new Km(1,1);Zm.compareFunction=515;const Qm=new Hm,Jm=new P_,eg=new Ym,Zp=[],Qp=[],Jp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function Ja(a,e,n){const i=a[0];if(i<=0||i>0)return a;const s=e*n;let l=Zp[s];if(l===void 0&&(l=new Float32Array(s),Zp[s]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,a[c].toArray(l,f)}return l}function Ht(a,e){if(a.length!==e.length)return!1;for(let n=0,i=a.length;n<i;n++)if(a[n]!==e[n])return!1;return!0}function Gt(a,e){for(let n=0,i=e.length;n<i;n++)a[n]=e[n]}function Il(a,e){let n=Qp[e];n===void 0&&(n=new Int32Array(e),Qp[e]=n);for(let i=0;i!==e;++i)n[i]=a.allocateTextureUnit();return n}function d0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function h0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;a.uniform2fv(this.addr,e),Gt(n,e)}}function f0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;a.uniform3fv(this.addr,e),Gt(n,e)}}function p0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;a.uniform4fv(this.addr,e),Gt(n,e)}}function m0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;tm.set(i),a.uniformMatrix2fv(this.addr,!1,tm),Gt(n,i)}}function g0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;em.set(i),a.uniformMatrix3fv(this.addr,!1,em),Gt(n,i)}}function v0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Jp.set(i),a.uniformMatrix4fv(this.addr,!1,Jp),Gt(n,i)}}function _0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function x0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;a.uniform2iv(this.addr,e),Gt(n,e)}}function y0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;a.uniform3iv(this.addr,e),Gt(n,e)}}function S0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;a.uniform4iv(this.addr,e),Gt(n,e)}}function E0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function M0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;a.uniform2uiv(this.addr,e),Gt(n,e)}}function w0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;a.uniform3uiv(this.addr,e),Gt(n,e)}}function T0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;a.uniform4uiv(this.addr,e),Gt(n,e)}}function R0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);const l=this.type===a.SAMPLER_2D_SHADOW?Zm:$m;n.setTexture2D(e||l,s)}function A0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Jm,s)}function b0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||eg,s)}function C0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Qm,s)}function L0(a,e){a.uniform1fv(this.addr,e)}function P0(a,e){const n=Ja(e,this.size,2);a.uniform2fv(this.addr,n)}function N0(a,e){const n=Ja(e,this.size,3);a.uniform3fv(this.addr,n)}function D0(a,e){const n=Ja(e,this.size,4);a.uniform4fv(this.addr,n)}function U0(a,e){const n=Ja(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function I0(a,e){const n=Ja(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function O0(a,e){const n=Ja(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function F0(a,e){a.uniform1iv(this.addr,e)}function k0(a,e){a.uniform2iv(this.addr,e)}function z0(a,e){a.uniform3iv(this.addr,e)}function B0(a,e){a.uniform4iv(this.addr,e)}function H0(a,e){a.uniform1uiv(this.addr,e)}function G0(a,e){a.uniform2uiv(this.addr,e)}function V0(a,e){a.uniform3uiv(this.addr,e)}function j0(a,e){a.uniform4uiv(this.addr,e)}function W0(a,e,n){const i=this.cache,s=e.length,l=Il(n,s);Ht(i,l)||(a.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==s;++c)n.setTexture2D(e[c]||$m,l[c])}function X0(a,e,n){const i=this.cache,s=e.length,l=Il(n,s);Ht(i,l)||(a.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==s;++c)n.setTexture3D(e[c]||Jm,l[c])}function Y0(a,e,n){const i=this.cache,s=e.length,l=Il(n,s);Ht(i,l)||(a.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==s;++c)n.setTextureCube(e[c]||eg,l[c])}function q0(a,e,n){const i=this.cache,s=e.length,l=Il(n,s);Ht(i,l)||(a.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==s;++c)n.setTexture2DArray(e[c]||Qm,l[c])}class K0{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=(function(s){switch(s){case 5126:return d0;case 35664:return h0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return v0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return S0;case 5125:return E0;case 36294:return M0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return C0}})(n.type)}}class $0{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=(function(s){switch(s){case 5126:return L0;case 35664:return P0;case 35665:return N0;case 35666:return D0;case 35674:return U0;case 35675:return I0;case 35676:return O0;case 5124:case 35670:return F0;case 35667:case 35671:return k0;case 35668:case 35672:return z0;case 35669:case 35673:return B0;case 5125:return H0;case 36294:return G0;case 36295:return V0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return q0}})(n.type)}}class Z0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(e,n[f.id],i)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function nm(a,e){a.seq.push(e),a.map[e.id]=e}function Q0(a,e,n){const i=a.name,s=i.length;for($c.lastIndex=0;;){const l=$c.exec(i),c=$c.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f|=0),d===void 0||d==="["&&c+2===s){nm(n,d===void 0?new K0(f,a,e):new $0(f,a,e));break}{let m=n.map[f];m===void 0&&(m=new Z0(f),nm(n,m)),n=m}}}class El{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(n,s);Q0(l,e.getUniformLocation(n,l.name),this)}}setValue(e,n,i,s){const l=this.map[n];l!==void 0&&l.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=i[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in n&&i.push(c)}return i}}function rm(a,e,n){const i=a.createShader(e);return a.shaderSource(i,n),a.compileShader(i),i}const J0=37297;let ex=0;function im(a,e,n){const i=a.getShaderParameter(e,a.COMPILE_STATUS),s=a.getShaderInfoLog(e).trim();if(i&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+s+`

`+(function(f,p){const d=f.split(`
`),m=[],v=Math.max(p-6,0),_=Math.min(p+6,d.length);for(let y=v;y<_;y++){const b=y+1;m.push(`${b===p?">":" "} ${b}: ${d[y]}`)}return m.join(`
`)})(a.getShaderSource(e),c)}return s}function tx(a,e){const n=(function(i){const s=gt.getPrimaries(gt.workingColorSpace),l=gt.getPrimaries(i);let c;switch(s===l?c="":s===Al&&l===Rl?c="LinearDisplayP3ToLinearSRGB":s===Rl&&l===Al&&(c="LinearSRGBToLinearDisplayP3"),i){case Fr:case Pl:return[c,"LinearTransferOETF"];case zt:case vd:return[c,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[c,"LinearTransferOETF"]}})(e);return`vec4 ${a}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nx(a,e){let n;switch(e){case v_:n="Linear";break;case __:n="Reinhard";break;case x_:n="OptimizedCineon";break;case y_:n="ACESFilmic";break;case E_:n="AgX";break;case S_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Wa(a){return a!==""}function am(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(a){return a.replace(rx,ax)}const ix=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ax(a,e){let n=nt[e];if(n===void 0){const i=ix.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return dd(n)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(a){return a.replace(sx,ox)}function ox(a,e,n,i){let s="";for(let l=parseInt(e);l<parseInt(n);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function lm(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lx(a,e,n,i){const s=a.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=(function(F){let ae="SHADOWMAP_TYPE_BASIC";return F.shadowMapType===Am?ae="SHADOWMAP_TYPE_PCF":F.shadowMapType===p_?ae="SHADOWMAP_TYPE_PCF_SOFT":F.shadowMapType===Ir&&(ae="SHADOWMAP_TYPE_VSM"),ae})(n),d=(function(F){let ae="ENVMAP_TYPE_CUBE";if(F.envMap)switch(F.envMapMode){case qa:case Ka:ae="ENVMAP_TYPE_CUBE";break;case Ll:ae="ENVMAP_TYPE_CUBE_UV"}return ae})(n),m=(function(F){let ae="ENVMAP_MODE_REFLECTION";return F.envMap&&F.envMapMode===Ka&&(ae="ENVMAP_MODE_REFRACTION"),ae})(n),v=(function(F){let ae="ENVMAP_BLENDING_NONE";if(F.envMap)switch(F.combine){case bm:ae="ENVMAP_BLENDING_MULTIPLY";break;case m_:ae="ENVMAP_BLENDING_MIX";break;case g_:ae="ENVMAP_BLENDING_ADD"}return ae})(n),_=(function(F){const ae=F.envMapCubeUVHeight;if(ae===null)return null;const ne=Math.log2(ae)-2,he=1/ae;return{texelWidth:1/(3*Math.max(Math.pow(2,ne),112)),texelHeight:he,maxMip:ne}})(n),y=n.isWebGL2?"":(function(F){return[F.extensionDerivatives||F.envMapCubeUVHeight||F.bumpMap||F.normalMapTangentSpace||F.clearcoatNormalMap||F.flatShading||F.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(F.extensionFragDepth||F.logarithmicDepthBuffer)&&F.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",F.extensionDrawBuffers&&F.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(F.extensionShaderTextureLOD||F.envMap||F.transmission)&&F.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wa).join(`
`)})(n),b=(function(F){return[F.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wa).join(`
`)})(n),T=(function(F){const ae=[];for(const ne in F){const he=F[ne];he!==!1&&ae.push("#define "+ne+" "+he)}return ae.join(`
`)})(l),x=s.createProgram();let C,M,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(C=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Wa).join(`
`),C.length>0&&(C+=`
`),M=[y,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Wa).join(`
`),M.length>0&&(M+=`
`)):(C=[lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),M=[y,lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?nt.tonemapping_pars_fragment:"",n.toneMapping!==_i?nx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,tx("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),c=dd(c),c=am(c,n),c=sm(c,n),f=dd(f),f=am(f,n),f=sm(f,n),c=om(c),f=om(f),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,C=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,M=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const V=S+C+c,z=S+M+f,I=rm(s,s.VERTEX_SHADER,V),O=rm(s,s.FRAGMENT_SHADER,z);function te(F){if(a.debug.checkShaderErrors){const ae=s.getProgramInfoLog(x).trim(),ne=s.getShaderInfoLog(I).trim(),he=s.getShaderInfoLog(O).trim();let Me=!0,ie=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Me=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,x,I,O);else{const B=im(s,I,"vertex"),q=im(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+B+`
`+q)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):ne!==""&&he!==""||(ie=!1);ie&&(F.diagnostics={runnable:Me,programLog:ae,vertexShader:{log:ne,prefix:C},fragmentShader:{log:he,prefix:M}})}s.deleteShader(I),s.deleteShader(O),K=new El(s,x),Z=(function(ae,ne){const he={},Me=ae.getProgramParameter(ne,ae.ACTIVE_ATTRIBUTES);for(let ie=0;ie<Me;ie++){const B=ae.getActiveAttrib(ne,ie),q=B.name;let D=1;B.type===ae.FLOAT_MAT2&&(D=2),B.type===ae.FLOAT_MAT3&&(D=3),B.type===ae.FLOAT_MAT4&&(D=4),he[q]={type:B.type,location:ae.getAttribLocation(ne,q),locationSize:D}}return he})(s,x)}let K,Z;s.attachShader(x,I),s.attachShader(x,O),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x),this.getUniforms=function(){return K===void 0&&te(this),K},this.getAttributes=function(){return Z===void 0&&te(this),Z};let le=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return le===!1&&(le=s.getProgramParameter(x,J0)),le},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=O,this}let ux=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dx(e),n.set(e,i)),i}}class dx{constructor(e){this.id=ux++,this.code=e,this.usedTimes=0}}function hx(a,e,n,i,s,l,c){const f=new Gm,p=new cx,d=[],m=s.isWebGL2,v=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(x){return x===0?"uv":`uv${x}`}return{getParameters:function(x,C,M,S,V){const z=S.fog,I=V.geometry,O=x.isMeshStandardMaterial?S.environment:null,te=(x.isMeshStandardMaterial?n:e).get(x.envMap||O),K=te&&te.mapping===Ll?te.image.height:null,Z=b[x.type];x.precision!==null&&(y=s.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const le=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,F=le!==void 0?le.length:0;let ae,ne,he,Me,ie=0;if(I.morphAttributes.position!==void 0&&(ie=1),I.morphAttributes.normal!==void 0&&(ie=2),I.morphAttributes.color!==void 0&&(ie=3),Z){const Ct=mr[Z];ae=Ct.vertexShader,ne=Ct.fragmentShader}else ae=x.vertexShader,ne=x.fragmentShader,p.update(x),he=p.getVertexShaderID(x),Me=p.getFragmentShaderID(x);const B=a.getRenderTarget(),q=V.isInstancedMesh===!0,D=V.isBatchedMesh===!0,w=!!x.map,j=!!x.matcap,R=!!te,A=!!x.aoMap,H=!!x.lightMap,$=!!x.bumpMap,k=!!x.normalMap,Q=!!x.displacementMap,ue=!!x.emissiveMap,pe=!!x.metalnessMap,Ee=!!x.roughnessMap,Re=x.anisotropy>0,Pe=x.clearcoat>0,P=x.iridescence>0,Te=x.sheen>0,de=x.transmission>0,ce=Re&&!!x.anisotropyMap,Se=Pe&&!!x.clearcoatMap,Le=Pe&&!!x.clearcoatNormalMap,be=Pe&&!!x.clearcoatRoughnessMap,Fe=P&&!!x.iridescenceMap,Xe=P&&!!x.iridescenceThicknessMap,Ie=Te&&!!x.sheenColorMap,ke=Te&&!!x.sheenRoughnessMap,Ze=!!x.specularMap,Pt=!!x.specularColorMap,He=!!x.specularIntensityMap,Qe=de&&!!x.transmissionMap,Je=de&&!!x.thicknessMap,Tn=!!x.gradientMap,Ut=!!x.alphaMap,W=x.alphaTest>0,Ne=!!x.alphaHash,Ke=!!x.extensions,ct=!!I.attributes.uv1,re=!!I.attributes.uv2,Yt=!!I.attributes.uv3;let At=_i;return x.toneMapped&&(B!==null&&B.isXRRenderTarget!==!0||(At=a.toneMapping)),{isWebGL2:m,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:ne,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:D,instancing:q,instancingColor:q&&V.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:B===null?a.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Fr,map:w,matcap:j,envMap:R,envMapMode:R&&te.mapping,envMapCubeUVHeight:K,aoMap:A,lightMap:H,bumpMap:$,normalMap:k,displacementMap:_&&Q,emissiveMap:ue,normalMapObjectSpace:k&&x.normalMapType===1,normalMapTangentSpace:k&&x.normalMapType===0,metalnessMap:pe,roughnessMap:Ee,anisotropy:Re,anisotropyMap:ce,clearcoat:Pe,clearcoatMap:Se,clearcoatNormalMap:Le,clearcoatRoughnessMap:be,iridescence:P,iridescenceMap:Fe,iridescenceThicknessMap:Xe,sheen:Te,sheenColorMap:Ie,sheenRoughnessMap:ke,specularMap:Ze,specularColorMap:Pt,specularIntensityMap:He,transmission:de,transmissionMap:Qe,thicknessMap:Je,gradientMap:Tn,opaque:x.transparent===!1&&x.blending===1,alphaMap:Ut,alphaTest:W,alphaHash:Ne,combine:x.combine,mapUv:w&&T(x.map.channel),aoMapUv:A&&T(x.aoMap.channel),lightMapUv:H&&T(x.lightMap.channel),bumpMapUv:$&&T(x.bumpMap.channel),normalMapUv:k&&T(x.normalMap.channel),displacementMapUv:Q&&T(x.displacementMap.channel),emissiveMapUv:ue&&T(x.emissiveMap.channel),metalnessMapUv:pe&&T(x.metalnessMap.channel),roughnessMapUv:Ee&&T(x.roughnessMap.channel),anisotropyMapUv:ce&&T(x.anisotropyMap.channel),clearcoatMapUv:Se&&T(x.clearcoatMap.channel),clearcoatNormalMapUv:Le&&T(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&T(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(x.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&T(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&T(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(x.sheenRoughnessMap.channel),specularMapUv:Ze&&T(x.specularMap.channel),specularColorMapUv:Pt&&T(x.specularColorMap.channel),specularIntensityMapUv:He&&T(x.specularIntensityMap.channel),transmissionMapUv:Qe&&T(x.transmissionMap.channel),thicknessMapUv:Je&&T(x.thicknessMap.channel),alphaMapUv:Ut&&T(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(k||Re),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:ct,vertexUv2s:re,vertexUv3s:Yt,pointsUvs:V.isPoints===!0&&!!I.attributes.uv&&(w||Ut),fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:V.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&M.length>0,shadowMapType:a.shadowMap.type,toneMapping:At,useLegacyLights:a._useLegacyLights,decodeVideoTexture:w&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ke&&x.extensions.derivatives===!0,extensionFragDepth:Ke&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ke&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ke&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}},getProgramCacheKey:function(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const M in x.defines)C.push(M),C.push(x.defines[M]);return x.isRawShaderMaterial===!1&&((function(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)})(C,x),(function(M,S){f.disableAll(),S.isWebGL2&&f.enable(0),S.supportsVertexTextures&&f.enable(1),S.instancing&&f.enable(2),S.instancingColor&&f.enable(3),S.matcap&&f.enable(4),S.envMap&&f.enable(5),S.normalMapObjectSpace&&f.enable(6),S.normalMapTangentSpace&&f.enable(7),S.clearcoat&&f.enable(8),S.iridescence&&f.enable(9),S.alphaTest&&f.enable(10),S.vertexColors&&f.enable(11),S.vertexAlphas&&f.enable(12),S.vertexUv1s&&f.enable(13),S.vertexUv2s&&f.enable(14),S.vertexUv3s&&f.enable(15),S.vertexTangents&&f.enable(16),S.anisotropy&&f.enable(17),S.alphaHash&&f.enable(18),S.batching&&f.enable(19),M.push(f.mask),f.disableAll(),S.fog&&f.enable(0),S.useFog&&f.enable(1),S.flatShading&&f.enable(2),S.logarithmicDepthBuffer&&f.enable(3),S.skinning&&f.enable(4),S.morphTargets&&f.enable(5),S.morphNormals&&f.enable(6),S.morphColors&&f.enable(7),S.premultipliedAlpha&&f.enable(8),S.shadowMapEnabled&&f.enable(9),S.useLegacyLights&&f.enable(10),S.doubleSided&&f.enable(11),S.flipSided&&f.enable(12),S.useDepthPacking&&f.enable(13),S.dithering&&f.enable(14),S.transmission&&f.enable(15),S.sheen&&f.enable(16),S.opaque&&f.enable(17),S.pointsUvs&&f.enable(18),S.decodeVideoTexture&&f.enable(19),M.push(f.mask)})(C,x),C.push(a.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()},getUniforms:function(x){const C=b[x.type];let M;if(C){const S=mr[C];M=V_.clone(S.uniforms)}else M=x.uniforms;return M},acquireProgram:function(x,C){let M;for(let S=0,V=d.length;S<V;S++){const z=d[S];if(z.cacheKey===C){M=z,++M.usedTimes;break}}return M===void 0&&(M=new lx(a,C,x,l),d.push(M)),M},releaseProgram:function(x){if(--x.usedTimes==0){const C=d.indexOf(x);d[C]=d[d.length-1],d.pop(),x.destroy()}},releaseShaderCache:function(x){p.remove(x)},programs:d,dispose:function(){p.dispose()}}}function fx(){let a=new WeakMap;return{get:function(e){let n=a.get(e);return n===void 0&&(n={},a.set(e,n)),n},remove:function(e){a.delete(e)},update:function(e,n,i){a.get(e)[n]=i},dispose:function(){a=new WeakMap}}}function px(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function um(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function cm(){const a=[];let e=0;const n=[],i=[],s=[];function l(c,f,p,d,m,v){let _=a[e];return _===void 0?(_={id:c.id,object:c,geometry:f,material:p,groupOrder:d,renderOrder:c.renderOrder,z:m,group:v},a[e]=_):(_.id=c.id,_.object=c,_.geometry=f,_.material=p,_.groupOrder=d,_.renderOrder=c.renderOrder,_.z=m,_.group=v),e++,_}return{opaque:n,transmissive:i,transparent:s,init:function(){e=0,n.length=0,i.length=0,s.length=0},push:function(c,f,p,d,m,v){const _=l(c,f,p,d,m,v);p.transmission>0?i.push(_):p.transparent===!0?s.push(_):n.push(_)},unshift:function(c,f,p,d,m,v){const _=l(c,f,p,d,m,v);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):n.unshift(_)},finish:function(){for(let c=e,f=a.length;c<f;c++){const p=a[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}},sort:function(c,f){n.length>1&&n.sort(c||px),i.length>1&&i.sort(f||um),s.length>1&&s.sort(f||um)}}}function mx(){let a=new WeakMap;return{get:function(e,n){const i=a.get(e);let s;return i===void 0?(s=new cm,a.set(e,[s])):n>=i.length?(s=new cm,i.push(s)):s=i[n],s},dispose:function(){a=new WeakMap}}}function gx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new pt};break;case"SpotLight":n={position:new X,direction:new X,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new X,halfWidth:new X,halfHeight:new X}}return a[e.id]=n,n}}}let vx=0;function _x(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function xx(a,e){const n=new gx,i=(function(){const p={};return{get:function(d){if(p[d.id]!==void 0)return p[d.id];let m;switch(d.type){case"DirectionalLight":case"SpotLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3}}return p[d.id]=m,m}}})(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const l=new X,c=new ot,f=new ot;return{setup:function(p,d){let m=0,v=0,_=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let y=0,b=0,T=0,x=0,C=0,M=0,S=0,V=0,z=0,I=0,O=0;p.sort(_x);const te=d===!0?Math.PI:1;for(let Z=0,le=p.length;Z<le;Z++){const F=p[Z],ae=F.color,ne=F.intensity,he=F.distance,Me=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=ae.r*ne*te,v+=ae.g*ne*te,_+=ae.b*ne*te;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(F.sh.coefficients[ie],ne);O++}else if(F.isDirectionalLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*te),F.castShadow){const B=F.shadow,q=i.get(F);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=Me,s.directionalShadowMatrix[y]=F.shadow.matrix,M++}s.directional[y]=ie,y++}else if(F.isSpotLight){const ie=n.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(ae).multiplyScalar(ne*te),ie.distance=he,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,s.spot[T]=ie;const B=F.shadow;if(F.map&&(s.spotLightMap[z]=F.map,z++,B.updateMatrices(F),F.castShadow&&I++),s.spotLightMatrix[T]=B.matrix,F.castShadow){const q=i.get(F);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,s.spotShadow[T]=q,s.spotShadowMap[T]=Me,V++}T++}else if(F.isRectAreaLight){const ie=n.get(F);ie.color.copy(ae).multiplyScalar(ne),ie.halfWidth.set(.5*F.width,0,0),ie.halfHeight.set(0,.5*F.height,0),s.rectArea[x]=ie,x++}else if(F.isPointLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*te),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const B=F.shadow,q=i.get(F);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,s.pointShadow[b]=q,s.pointShadowMap[b]=Me,s.pointShadowMatrix[b]=F.shadow.matrix,S++}s.point[b]=ie,b++}else if(F.isHemisphereLight){const ie=n.get(F);ie.skyColor.copy(F.color).multiplyScalar(ne*te),ie.groundColor.copy(F.groundColor).multiplyScalar(ne*te),s.hemi[C]=ie,C++}}x>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=_;const K=s.hash;K.directionalLength===y&&K.pointLength===b&&K.spotLength===T&&K.rectAreaLength===x&&K.hemiLength===C&&K.numDirectionalShadows===M&&K.numPointShadows===S&&K.numSpotShadows===V&&K.numSpotMaps===z&&K.numLightProbes===O||(s.directional.length=y,s.spot.length=T,s.rectArea.length=x,s.point.length=b,s.hemi.length=C,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=V,s.spotShadowMap.length=V,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=V+z-I,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=O,K.directionalLength=y,K.pointLength=b,K.spotLength=T,K.rectAreaLength=x,K.hemiLength=C,K.numDirectionalShadows=M,K.numPointShadows=S,K.numSpotShadows=V,K.numSpotMaps=z,K.numLightProbes=O,s.version=vx++)},setupView:function(p,d){let m=0,v=0,_=0,y=0,b=0;const T=d.matrixWorldInverse;for(let x=0,C=p.length;x<C;x++){const M=p[x];if(M.isDirectionalLight){const S=s.directional[m];S.direction.setFromMatrixPosition(M.matrixWorld),l.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(T),m++}else if(M.isSpotLight){const S=s.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(T),S.direction.setFromMatrixPosition(M.matrixWorld),l.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(T),_++}else if(M.isRectAreaLight){const S=s.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(T),f.identity(),c.copy(M.matrixWorld),c.premultiply(T),f.extractRotation(c),S.halfWidth.set(.5*M.width,0,0),S.halfHeight.set(0,.5*M.height,0),S.halfWidth.applyMatrix4(f),S.halfHeight.applyMatrix4(f),y++}else if(M.isPointLight){const S=s.point[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(T),v++}else if(M.isHemisphereLight){const S=s.hemi[b];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(T),b++}}},state:s}}function dm(a,e){const n=new xx(a,e),i=[],s=[];return{init:function(){i.length=0,s.length=0},state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:function(l){n.setup(i,l)},setupLightsView:function(l){n.setupView(i,l)},pushLight:function(l){i.push(l)},pushShadow:function(l){s.push(l)}}}function yx(a,e){let n=new WeakMap;return{get:function(i,s=0){const l=n.get(i);let c;return l===void 0?(c=new dm(a,e),n.set(i,[c])):s>=l.length?(c=new dm(a,e),l.push(c)):c=l[s],c},dispose:function(){n=new WeakMap}}}class Sx extends Dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ex extends Dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Mx(a,e,n){let i=new xd;const s=new $e,l=new $e,c=new Bt,f=new Sx({depthPacking:3201}),p=new Ex,d={},m=n.maxTextureSize,v={[xi]:Mn,[Mn]:xi,2:2},_=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ei;b.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Wn(b,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let C=this.type;function M(I,O){const te=e.update(T);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zi(s.x,s.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(O,null,te,_,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(O,null,te,y,T,null)}function S(I,O,te,K){let Z=null;const le=te.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(le!==void 0)Z=le;else if(Z=te.isPointLight===!0?p:f,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const F=Z.uuid,ae=O.uuid;let ne=d[F];ne===void 0&&(ne={},d[F]=ne);let he=ne[ae];he===void 0&&(he=Z.clone(),ne[ae]=he,O.addEventListener("dispose",z)),Z=he}return Z.visible=O.visible,Z.wireframe=O.wireframe,Z.side=K===Ir?O.shadowSide!==null?O.shadowSide:O.side:O.shadowSide!==null?O.shadowSide:v[O.side],Z.alphaMap=O.alphaMap,Z.alphaTest=O.alphaTest,Z.map=O.map,Z.clipShadows=O.clipShadows,Z.clippingPlanes=O.clippingPlanes,Z.clipIntersection=O.clipIntersection,Z.displacementMap=O.displacementMap,Z.displacementScale=O.displacementScale,Z.displacementBias=O.displacementBias,Z.wireframeLinewidth=O.wireframeLinewidth,Z.linewidth=O.linewidth,te.isPointLight===!0&&Z.isMeshDistanceMaterial===!0&&(a.properties.get(Z).light=te),Z}function V(I,O,te,K,Z){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Z===Ir)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,I.matrixWorld);const F=e.update(I),ae=I.material;if(Array.isArray(ae)){const ne=F.groups;for(let he=0,Me=ne.length;he<Me;he++){const ie=ne[he],B=ae[ie.materialIndex];if(B&&B.visible){const q=S(I,B,K,Z);I.onBeforeShadow(a,I,O,te,F,q,ie),a.renderBufferDirect(te,null,F,q,I,ie),I.onAfterShadow(a,I,O,te,F,q,ie)}}}else if(ae.visible){const ne=S(I,ae,K,Z);I.onBeforeShadow(a,I,O,te,F,ne,null),a.renderBufferDirect(te,null,F,ne,I,null),I.onAfterShadow(a,I,O,te,F,ne,null)}}const le=I.children;for(let F=0,ae=le.length;F<ae;F++)V(le[F],O,te,K,Z)}function z(I){I.target.removeEventListener("dispose",z);for(const O in d){const te=d[O],K=I.target.uuid;K in te&&(te[K].dispose(),delete te[K])}}this.render=function(I,O,te){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const K=a.getRenderTarget(),Z=a.getActiveCubeFace(),le=a.getActiveMipmapLevel(),F=a.state;F.setBlending(0),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const ae=C!==Ir&&this.type===Ir,ne=C===Ir&&this.type!==Ir;for(let he=0,Me=I.length;he<Me;he++){const ie=I[he],B=ie.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const q=B.getFrameExtents();if(s.multiply(q),l.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/q.x),s.x=l.x*q.x,B.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/q.y),s.y=l.y*q.y,B.mapSize.y=l.y)),B.map===null||ae===!0||ne===!0){const w=this.type!==Ir?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new Zi(s.x,s.y,w),B.map.texture.name=ie.name+".shadowMap",B.camera.updateProjectionMatrix()}a.setRenderTarget(B.map),a.clear();const D=B.getViewportCount();for(let w=0;w<D;w++){const j=B.getViewport(w);c.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),F.viewport(c),B.updateMatrices(ie,w),i=B.getFrustum(),V(O,te,B.camera,ie,this.type)}B.isPointLightShadow!==!0&&this.type===Ir&&M(B,te),B.needsUpdate=!1}C=this.type,x.needsUpdate=!1,a.setRenderTarget(K,Z,le)}}function wx(a,e,n){const i=n.isWebGL2,s=new function(){let P=!1;const Te=new Bt;let de=null;const ce=new Bt(0,0,0,0);return{setMask:function(Se){de===Se||P||(a.colorMask(Se,Se,Se,Se),de=Se)},setLocked:function(Se){P=Se},setClear:function(Se,Le,be,Fe,Xe){Xe===!0&&(Se*=Fe,Le*=Fe,be*=Fe),Te.set(Se,Le,be,Fe),ce.equals(Te)===!1&&(a.clearColor(Se,Le,be,Fe),ce.copy(Te))},reset:function(){P=!1,de=null,ce.set(-1,0,0,0)}}},l=new function(){let P=!1,Te=null,de=null,ce=null;return{setTest:function(Se){Se?$(a.DEPTH_TEST):k(a.DEPTH_TEST)},setMask:function(Se){Te===Se||P||(a.depthMask(Se),Te=Se)},setFunc:function(Se){if(de!==Se){switch(Se){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:default:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL)}de=Se}},setLocked:function(Se){P=Se},setClear:function(Se){ce!==Se&&(a.clearDepth(Se),ce=Se)},reset:function(){P=!1,Te=null,de=null,ce=null}}},c=new function(){let P=!1,Te=null,de=null,ce=null,Se=null,Le=null,be=null,Fe=null,Xe=null;return{setTest:function(Ie){P||(Ie?$(a.STENCIL_TEST):k(a.STENCIL_TEST))},setMask:function(Ie){Te===Ie||P||(a.stencilMask(Ie),Te=Ie)},setFunc:function(Ie,ke,Ze){de===Ie&&ce===ke&&Se===Ze||(a.stencilFunc(Ie,ke,Ze),de=Ie,ce=ke,Se=Ze)},setOp:function(Ie,ke,Ze){Le===Ie&&be===ke&&Fe===Ze||(a.stencilOp(Ie,ke,Ze),Le=Ie,be=ke,Fe=Ze)},setLocked:function(Ie){P=Ie},setClear:function(Ie){Xe!==Ie&&(a.clearStencil(Ie),Xe=Ie)},reset:function(){P=!1,Te=null,de=null,ce=null,Se=null,Le=null,be=null,Fe=null,Xe=null}}},f=new WeakMap,p=new WeakMap;let d={},m={},v=new WeakMap,_=[],y=null,b=!1,T=null,x=null,C=null,M=null,S=null,V=null,z=null,I=new pt(0,0,0),O=0,te=!1,K=null,Z=null,le=null,F=null,ae=null;const ne=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,Me=0;const ie=a.getParameter(a.VERSION);ie.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(ie)[1]),he=Me>=1):ie.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),he=Me>=2);let B=null,q={};const D=a.getParameter(a.SCISSOR_BOX),w=a.getParameter(a.VIEWPORT),j=new Bt().fromArray(D),R=new Bt().fromArray(w);function A(P,Te,de,ce){const Se=new Uint8Array(4),Le=a.createTexture();a.bindTexture(P,Le),a.texParameteri(P,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(P,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let be=0;be<de;be++)!i||P!==a.TEXTURE_3D&&P!==a.TEXTURE_2D_ARRAY?a.texImage2D(Te+be,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Se):a.texImage3D(Te,0,a.RGBA,1,1,ce,0,a.RGBA,a.UNSIGNED_BYTE,Se);return Le}const H={};function $(P){d[P]!==!0&&(a.enable(P),d[P]=!0)}function k(P){d[P]!==!1&&(a.disable(P),d[P]=!1)}H[a.TEXTURE_2D]=A(a.TEXTURE_2D,a.TEXTURE_2D,1),H[a.TEXTURE_CUBE_MAP]=A(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(H[a.TEXTURE_2D_ARRAY]=A(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),H[a.TEXTURE_3D]=A(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(a.DEPTH_TEST),l.setFunc(3),Ee(!1),Re(1),$(a.CULL_FACE),pe(0);const Q={[Wi]:a.FUNC_ADD,101:a.FUNC_SUBTRACT,102:a.FUNC_REVERSE_SUBTRACT};if(i)Q[103]=a.MIN,Q[104]=a.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Q[103]=P.MIN_EXT,Q[104]=P.MAX_EXT)}const ue={200:a.ZERO,201:a.ONE,202:a.SRC_COLOR,[nd]:a.SRC_ALPHA,210:a.SRC_ALPHA_SATURATE,208:a.DST_COLOR,206:a.DST_ALPHA,203:a.ONE_MINUS_SRC_COLOR,[rd]:a.ONE_MINUS_SRC_ALPHA,209:a.ONE_MINUS_DST_COLOR,207:a.ONE_MINUS_DST_ALPHA,211:a.CONSTANT_COLOR,212:a.ONE_MINUS_CONSTANT_COLOR,213:a.CONSTANT_ALPHA,214:a.ONE_MINUS_CONSTANT_ALPHA};function pe(P,Te,de,ce,Se,Le,be,Fe,Xe,Ie){if(P!==0){if(b===!1&&($(a.BLEND),b=!0),P===5)Se=Se||Te,Le=Le||de,be=be||ce,Te===x&&Se===S||(a.blendEquationSeparate(Q[Te],Q[Se]),x=Te,S=Se),de===C&&ce===M&&Le===V&&be===z||(a.blendFuncSeparate(ue[de],ue[ce],ue[Le],ue[be]),C=de,M=ce,V=Le,z=be),Fe.equals(I)!==!1&&Xe===O||(a.blendColor(Fe.r,Fe.g,Fe.b,Xe),I.copy(Fe),O=Xe),T=P,te=!1;else if(P!==T||Ie!==te){if(x===Wi&&S===Wi||(a.blendEquation(a.FUNC_ADD),x=Wi,S=Wi),Ie)switch(P){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}else switch(P){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}C=null,M=null,V=null,z=null,I.set(0,0,0),O=0,T=P,te=Ie}}else b===!0&&(k(a.BLEND),b=!1)}function Ee(P){K!==P&&(P?a.frontFace(a.CW):a.frontFace(a.CCW),K=P)}function Re(P){P!==0?($(a.CULL_FACE),P!==Z&&(P===1?a.cullFace(a.BACK):P===2?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):k(a.CULL_FACE),Z=P}function Pe(P,Te,de){P?($(a.POLYGON_OFFSET_FILL),F===Te&&ae===de||(a.polygonOffset(Te,de),F=Te,ae=de)):k(a.POLYGON_OFFSET_FILL)}return{buffers:{color:s,depth:l,stencil:c},enable:$,disable:k,bindFramebuffer:function(P,Te){return m[P]!==Te&&(a.bindFramebuffer(P,Te),m[P]=Te,i&&(P===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Te),P===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Te)),!0)},drawBuffers:function(P,Te){let de=_,ce=!1;if(P)if(de=v.get(Te),de===void 0&&(de=[],v.set(Te,de)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(de.length!==Se.length||de[0]!==a.COLOR_ATTACHMENT0){for(let Le=0,be=Se.length;Le<be;Le++)de[Le]=a.COLOR_ATTACHMENT0+Le;de.length=Se.length,ce=!0}}else de[0]!==a.COLOR_ATTACHMENT0&&(de[0]=a.COLOR_ATTACHMENT0,ce=!0);else de[0]!==a.BACK&&(de[0]=a.BACK,ce=!0);ce&&(n.isWebGL2?a.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))},useProgram:function(P){return y!==P&&(a.useProgram(P),y=P,!0)},setBlending:pe,setMaterial:function(P,Te){P.side===2?k(a.CULL_FACE):$(a.CULL_FACE);let de=P.side===Mn;Te&&(de=!de),Ee(de),P.blending===1&&P.transparent===!1?pe(0):pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const ce=P.stencilWrite;c.setTest(ce),ce&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(a.SAMPLE_ALPHA_TO_COVERAGE):k(a.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:Ee,setCullFace:Re,setLineWidth:function(P){P!==le&&(he&&a.lineWidth(P),le=P)},setPolygonOffset:Pe,setScissorTest:function(P){P?$(a.SCISSOR_TEST):k(a.SCISSOR_TEST)},activeTexture:function(P){P===void 0&&(P=a.TEXTURE0+ne-1),B!==P&&(a.activeTexture(P),B=P)},bindTexture:function(P,Te,de){de===void 0&&(de=B===null?a.TEXTURE0+ne-1:B);let ce=q[de];ce===void 0&&(ce={type:void 0,texture:void 0},q[de]=ce),ce.type===P&&ce.texture===Te||(B!==de&&(a.activeTexture(de),B=de),a.bindTexture(P,Te||H[P]),ce.type=P,ce.texture=Te)},unbindTexture:function(){const P=q[B];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexImage3D:function(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},updateUBOMapping:function(P,Te){let de=p.get(Te);de===void 0&&(de=new WeakMap,p.set(Te,de));let ce=de.get(P);ce===void 0&&(ce=a.getUniformBlockIndex(Te,P.name),de.set(P,ce))},uniformBlockBinding:function(P,Te){const de=p.get(Te).get(P);f.get(Te)!==de&&(a.uniformBlockBinding(Te,de,P.__bindingPointIndex),f.set(Te,de))},texStorage2D:function(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texStorage3D:function(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage2D:function(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage3D:function(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage2D:function(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage3D:function(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},scissor:function(P){j.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),j.copy(P))},viewport:function(P){R.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),R.copy(P))},reset:function(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},B=null,q={},m={},v=new WeakMap,_=[],y=null,b=!1,T=null,x=null,C=null,M=null,S=null,V=null,z=null,I=new pt(0,0,0),O=0,te=!1,K=null,Z=null,le=null,F=null,ae=null,j.set(0,0,a.canvas.width,a.canvas.height),R.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}}}function Tx(a,e,n,i,s,l,c){const f=s.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,A){return y?new OffscreenCanvas(R,A):js("canvas")}function T(R,A,H,$){let k=1;if((R.width>$||R.height>$)&&(k=$/Math.max(R.width,R.height)),k<1||A===!0){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const Q=A?cd:Math.floor,ue=Q(k*R.width),pe=Q(k*R.height);v===void 0&&(v=b(ue,pe));const Ee=H?b(ue,pe):v;return Ee.width=ue,Ee.height=pe,Ee.getContext("2d").drawImage(R,0,0,ue,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ue+"x"+pe+")."),Ee}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R}return R}function x(R){return Ap(R.width)&&Ap(R.height)}function C(R,A){return R.generateMipmaps&&A&&R.minFilter!==cn&&R.minFilter!==ar}function M(R){a.generateMipmap(R)}function S(R,A,H,$,k=!1){if(f===!1)return A;if(R!==null){if(a[R]!==void 0)return a[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=A;if(A===a.RED&&(H===a.FLOAT&&(Q=a.R32F),H===a.HALF_FLOAT&&(Q=a.R16F),H===a.UNSIGNED_BYTE&&(Q=a.R8)),A===a.RED_INTEGER&&(H===a.UNSIGNED_BYTE&&(Q=a.R8UI),H===a.UNSIGNED_SHORT&&(Q=a.R16UI),H===a.UNSIGNED_INT&&(Q=a.R32UI),H===a.BYTE&&(Q=a.R8I),H===a.SHORT&&(Q=a.R16I),H===a.INT&&(Q=a.R32I)),A===a.RG&&(H===a.FLOAT&&(Q=a.RG32F),H===a.HALF_FLOAT&&(Q=a.RG16F),H===a.UNSIGNED_BYTE&&(Q=a.RG8)),A===a.RGBA){const ue=k?Tl:gt.getTransfer($);H===a.FLOAT&&(Q=a.RGBA32F),H===a.HALF_FLOAT&&(Q=a.RGBA16F),H===a.UNSIGNED_BYTE&&(Q=ue===Et?a.SRGB8_ALPHA8:a.RGBA8),H===a.UNSIGNED_SHORT_4_4_4_4&&(Q=a.RGBA4),H===a.UNSIGNED_SHORT_5_5_5_1&&(Q=a.RGB5_A1)}return Q!==a.R16F&&Q!==a.R32F&&Q!==a.RG16F&&Q!==a.RG32F&&Q!==a.RGBA16F&&Q!==a.RGBA32F||e.get("EXT_color_buffer_float"),Q}function V(R,A,H){return C(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==ar?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function z(R){return R===cn||R===Jf||R===Ec?a.NEAREST:a.LINEAR}function I(R){const A=R.target;A.removeEventListener("dispose",I),(function(H){const $=i.get(H);if($.__webglInit===void 0)return;const k=H.source,Q=_.get(k);if(Q){const ue=Q[$.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&te(H),Object.keys(Q).length===0&&_.delete(k)}i.remove(H)})(A),A.isVideoTexture&&m.delete(A)}function O(R){const A=R.target;A.removeEventListener("dispose",O),(function(H){const $=H.texture,k=i.get(H),Q=i.get($);if(Q.__webglTexture!==void 0&&(a.deleteTexture(Q.__webglTexture),c.memory.textures--),H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(k.__webglFramebuffer[ue]))for(let pe=0;pe<k.__webglFramebuffer[ue].length;pe++)a.deleteFramebuffer(k.__webglFramebuffer[ue][pe]);else a.deleteFramebuffer(k.__webglFramebuffer[ue]);k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer[ue])}else{if(Array.isArray(k.__webglFramebuffer))for(let ue=0;ue<k.__webglFramebuffer.length;ue++)a.deleteFramebuffer(k.__webglFramebuffer[ue]);else a.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&a.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ue=0;ue<k.__webglColorRenderbuffer.length;ue++)k.__webglColorRenderbuffer[ue]&&a.deleteRenderbuffer(k.__webglColorRenderbuffer[ue]);k.__webglDepthRenderbuffer&&a.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(H.isWebGLMultipleRenderTargets)for(let ue=0,pe=$.length;ue<pe;ue++){const Ee=i.get($[ue]);Ee.__webglTexture&&(a.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove($[ue])}i.remove($),i.remove(H)})(A)}function te(R){const A=i.get(R);a.deleteTexture(A.__webglTexture);const H=R.source;delete _.get(H)[A.__cacheKey],c.memory.textures--}let K=0;function Z(R,A){const H=i.get(R);if(R.isVideoTexture&&(function($){const k=c.render.frame;m.get($)!==k&&(m.set($,k),$.update())})(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if($.complete!==!1)return void Me(H,R,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.bindTexture(a.TEXTURE_2D,H.__webglTexture,a.TEXTURE0+A)}const le={[sd]:a.REPEAT,[Or]:a.CLAMP_TO_EDGE,[od]:a.MIRRORED_REPEAT},F={[cn]:a.NEAREST,[Jf]:a.NEAREST_MIPMAP_NEAREST,[Ec]:a.NEAREST_MIPMAP_LINEAR,[ar]:a.LINEAR,[M_]:a.LINEAR_MIPMAP_NEAREST,[wl]:a.LINEAR_MIPMAP_LINEAR},ae={512:a.NEVER,519:a.ALWAYS,513:a.LESS,515:a.LEQUAL,514:a.EQUAL,518:a.GEQUAL,516:a.GREATER,517:a.NOTEQUAL};function ne(R,A,H){if(H?(a.texParameteri(R,a.TEXTURE_WRAP_S,le[A.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,le[A.wrapT]),R!==a.TEXTURE_3D&&R!==a.TEXTURE_2D_ARRAY||a.texParameteri(R,a.TEXTURE_WRAP_R,le[A.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,F[A.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,F[A.minFilter])):(a.texParameteri(R,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(R,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),R!==a.TEXTURE_3D&&R!==a.TEXTURE_2D_ARRAY||a.texParameteri(R,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),A.wrapS===Or&&A.wrapT===Or||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(R,a.TEXTURE_MAG_FILTER,z(A.magFilter)),a.texParameteri(R,a.TEXTURE_MIN_FILTER,z(A.minFilter)),A.minFilter!==cn&&A.minFilter!==ar&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===cn||A.minFilter!==Ec&&A.minFilter!==wl||A.type===vi&&e.has("OES_texture_float_linear")===!1||f===!1&&A.type===Vs&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(a.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function he(R,A){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",I));const $=A.source;let k=_.get($);k===void 0&&(k={},_.set($,k));const Q=(function(ue){const pe=[];return pe.push(ue.wrapS),pe.push(ue.wrapT),pe.push(ue.wrapR||0),pe.push(ue.magFilter),pe.push(ue.minFilter),pe.push(ue.anisotropy),pe.push(ue.internalFormat),pe.push(ue.format),pe.push(ue.type),pe.push(ue.generateMipmaps),pe.push(ue.premultiplyAlpha),pe.push(ue.flipY),pe.push(ue.unpackAlignment),pe.push(ue.colorSpace),pe.join()})(A);if(Q!==R.__cacheKey){k[Q]===void 0&&(k[Q]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,H=!0),k[Q].usedTimes++;const ue=k[R.__cacheKey];ue!==void 0&&(k[R.__cacheKey].usedTimes--,ue.usedTimes===0&&te(A)),R.__cacheKey=Q,R.__webglTexture=k[Q].texture}return H}function Me(R,A,H){let $=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=a.TEXTURE_3D);const k=he(R,A),Q=A.source;n.bindTexture($,R.__webglTexture,a.TEXTURE0+H);const ue=i.get(Q);if(Q.version!==ue.__version||k===!0){n.activeTexture(a.TEXTURE0+H);const pe=gt.getPrimaries(gt.workingColorSpace),Ee=A.colorSpace===vr?null:gt.getPrimaries(A.colorSpace),Re=A.colorSpace===vr||pe===Ee?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Pe=(function(ke){return!f&&(ke.wrapS!==Or||ke.wrapT!==Or||ke.minFilter!==cn&&ke.minFilter!==ar)})(A)&&x(A.image)===!1;let P=T(A.image,Pe,!1,s.maxTextureSize);P=j(A,P);const Te=x(P)||f,de=l.convert(A.format,A.colorSpace);let ce,Se=l.convert(A.type),Le=S(A.internalFormat,de,Se,A.colorSpace,A.isVideoTexture);ne($,A,Te);const be=A.mipmaps,Fe=f&&A.isVideoTexture!==!0&&Le!==Om,Xe=ue.__version===void 0||k===!0,Ie=V(A,P,Te);if(A.isDepthTexture)Le=a.DEPTH_COMPONENT,f?Le=A.type===vi?a.DEPTH_COMPONENT32F:A.type===gi?a.DEPTH_COMPONENT24:A.type===qi?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT16:A.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ki&&Le===a.DEPTH_COMPONENT&&A.type!==gd&&A.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=gi,Se=l.convert(A.type)),A.format===$a&&Le===a.DEPTH_COMPONENT&&(Le=a.DEPTH_STENCIL,A.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=qi,Se=l.convert(A.type))),Xe&&(Fe?n.texStorage2D(a.TEXTURE_2D,1,Le,P.width,P.height):n.texImage2D(a.TEXTURE_2D,0,Le,P.width,P.height,0,de,Se,null));else if(A.isDataTexture)if(be.length>0&&Te){Fe&&Xe&&n.texStorage2D(a.TEXTURE_2D,Ie,Le,be[0].width,be[0].height);for(let ke=0,Ze=be.length;ke<Ze;ke++)ce=be[ke],Fe?n.texSubImage2D(a.TEXTURE_2D,ke,0,0,ce.width,ce.height,de,Se,ce.data):n.texImage2D(a.TEXTURE_2D,ke,Le,ce.width,ce.height,0,de,Se,ce.data);A.generateMipmaps=!1}else Fe?(Xe&&n.texStorage2D(a.TEXTURE_2D,Ie,Le,P.width,P.height),n.texSubImage2D(a.TEXTURE_2D,0,0,0,P.width,P.height,de,Se,P.data)):n.texImage2D(a.TEXTURE_2D,0,Le,P.width,P.height,0,de,Se,P.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Fe&&Xe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Le,be[0].width,be[0].height,P.depth);for(let ke=0,Ze=be.length;ke<Ze;ke++)ce=be[ke],A.format!==gr?de!==null?Fe?n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ke,0,0,0,ce.width,ce.height,P.depth,de,ce.data,0,0):n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ke,Le,ce.width,ce.height,P.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage3D(a.TEXTURE_2D_ARRAY,ke,0,0,0,ce.width,ce.height,P.depth,de,Se,ce.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ke,Le,ce.width,ce.height,P.depth,0,de,Se,ce.data)}else{Fe&&Xe&&n.texStorage2D(a.TEXTURE_2D,Ie,Le,be[0].width,be[0].height);for(let ke=0,Ze=be.length;ke<Ze;ke++)ce=be[ke],A.format!==gr?de!==null?Fe?n.compressedTexSubImage2D(a.TEXTURE_2D,ke,0,0,ce.width,ce.height,de,ce.data):n.compressedTexImage2D(a.TEXTURE_2D,ke,Le,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage2D(a.TEXTURE_2D,ke,0,0,ce.width,ce.height,de,Se,ce.data):n.texImage2D(a.TEXTURE_2D,ke,Le,ce.width,ce.height,0,de,Se,ce.data)}else if(A.isDataArrayTexture)Fe?(Xe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Le,P.width,P.height,P.depth),n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,de,Se,P.data)):n.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,P.width,P.height,P.depth,0,de,Se,P.data);else if(A.isData3DTexture)Fe?(Xe&&n.texStorage3D(a.TEXTURE_3D,Ie,Le,P.width,P.height,P.depth),n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,de,Se,P.data)):n.texImage3D(a.TEXTURE_3D,0,Le,P.width,P.height,P.depth,0,de,Se,P.data);else if(A.isFramebufferTexture){if(Xe)if(Fe)n.texStorage2D(a.TEXTURE_2D,Ie,Le,P.width,P.height);else{let ke=P.width,Ze=P.height;for(let Pt=0;Pt<Ie;Pt++)n.texImage2D(a.TEXTURE_2D,Pt,Le,ke,Ze,0,de,Se,null),ke>>=1,Ze>>=1}}else if(be.length>0&&Te){Fe&&Xe&&n.texStorage2D(a.TEXTURE_2D,Ie,Le,be[0].width,be[0].height);for(let ke=0,Ze=be.length;ke<Ze;ke++)ce=be[ke],Fe?n.texSubImage2D(a.TEXTURE_2D,ke,0,0,de,Se,ce):n.texImage2D(a.TEXTURE_2D,ke,Le,de,Se,ce);A.generateMipmaps=!1}else Fe?(Xe&&n.texStorage2D(a.TEXTURE_2D,Ie,Le,P.width,P.height),n.texSubImage2D(a.TEXTURE_2D,0,0,0,de,Se,P)):n.texImage2D(a.TEXTURE_2D,0,Le,de,Se,P);C(A,Te)&&M($),ue.__version=Q.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ie(R,A,H,$,k,Q){const ue=l.convert(H.format,H.colorSpace),pe=l.convert(H.type),Ee=S(H.internalFormat,ue,pe,H.colorSpace);if(!i.get(A).__hasExternalTextures){const Re=Math.max(1,A.width>>Q),Pe=Math.max(1,A.height>>Q);k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?n.texImage3D(k,Q,Ee,Re,Pe,A.depth,0,ue,pe,null):n.texImage2D(k,Q,Ee,Re,Pe,0,ue,pe,null)}n.bindFramebuffer(a.FRAMEBUFFER,R),w(A)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,k,i.get(H).__webglTexture,0,D(A)):(k===a.TEXTURE_2D||k>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,k,i.get(H).__webglTexture,Q),n.bindFramebuffer(a.FRAMEBUFFER,null)}function B(R,A,H){if(a.bindRenderbuffer(a.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let $=f===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(H||w(A)){const k=A.depthTexture;k&&k.isDepthTexture&&(k.type===vi?$=a.DEPTH_COMPONENT32F:k.type===gi&&($=a.DEPTH_COMPONENT24));const Q=D(A);w(A)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Q,$,A.width,A.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,Q,$,A.width,A.height)}else a.renderbufferStorage(a.RENDERBUFFER,$,A.width,A.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const $=D(A);H&&w(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,$,a.DEPTH24_STENCIL8,A.width,A.height):w(A)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,$,a.DEPTH24_STENCIL8,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,R)}else{const $=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let k=0;k<$.length;k++){const Q=$[k],ue=l.convert(Q.format,Q.colorSpace),pe=l.convert(Q.type),Ee=S(Q.internalFormat,ue,pe,Q.colorSpace),Re=D(A);H&&w(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Re,Ee,A.width,A.height):w(A)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Re,Ee,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,Ee,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function q(R){const A=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");(function($,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,$),!k.depthTexture||!k.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(k.depthTexture).__webglTexture&&k.depthTexture.image.width===k.width&&k.depthTexture.image.height===k.height||(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),Z(k.depthTexture,0);const Q=i.get(k.depthTexture).__webglTexture,ue=D(k);if(k.depthTexture.format===Ki)w(k)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Q,0,ue):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Q,0);else{if(k.depthTexture.format!==$a)throw new Error("Unknown depthTexture format");w(k)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Q,0,ue):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Q,0)}})(A.__webglFramebuffer,R)}else if(H){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]=a.createRenderbuffer(),B(A.__webglDepthbuffer[$],R,!1)}else n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),B(A.__webglDepthbuffer,R,!1);n.bindFramebuffer(a.FRAMEBUFFER,null)}function D(R){return Math.min(s.maxSamples,R.samples)}function w(R){const A=i.get(R);return f&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function j(R,A){const H=R.colorSpace,$=R.format,k=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ld||H!==Fr&&H!==vr&&(gt.getTransfer(H)===Et?f===!1?e.has("EXT_sRGB")===!0&&$===gr?(R.format=ld,R.minFilter=ar,R.generateMipmaps=!1):A=zm.sRGBToLinear(A):$===gr&&k===Yi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=function(){const R=K;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),K+=1,R},this.resetTextureUnits=function(){K=0},this.setTexture2D=Z,this.setTexture2DArray=function(R,A){const H=i.get(R);R.version>0&&H.__version!==R.version?Me(H,R,A):n.bindTexture(a.TEXTURE_2D_ARRAY,H.__webglTexture,a.TEXTURE0+A)},this.setTexture3D=function(R,A){const H=i.get(R);R.version>0&&H.__version!==R.version?Me(H,R,A):n.bindTexture(a.TEXTURE_3D,H.__webglTexture,a.TEXTURE0+A)},this.setTextureCube=function(R,A){const H=i.get(R);R.version>0&&H.__version!==R.version?(function($,k,Q){if(k.image.length!==6)return;const ue=he($,k),pe=k.source;n.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture,a.TEXTURE0+Q);const Ee=i.get(pe);if(pe.version!==Ee.__version||ue===!0){n.activeTexture(a.TEXTURE0+Q);const Re=gt.getPrimaries(gt.workingColorSpace),Pe=k.colorSpace===vr?null:gt.getPrimaries(k.colorSpace),P=k.colorSpace===vr||Re===Pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,k.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,k.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const Te=k.isCompressedTexture||k.image[0].isCompressedTexture,de=k.image[0]&&k.image[0].isDataTexture,ce=[];for(let He=0;He<6;He++)ce[He]=Te||de?de?k.image[He].image:k.image[He]:T(k.image[He],!1,!0,s.maxCubemapSize),ce[He]=j(k,ce[He]);const Se=ce[0],Le=x(Se)||f,be=l.convert(k.format,k.colorSpace),Fe=l.convert(k.type),Xe=S(k.internalFormat,be,Fe,k.colorSpace),Ie=f&&k.isVideoTexture!==!0,ke=Ee.__version===void 0||ue===!0;let Ze,Pt=V(k,Se,Le);if(ne(a.TEXTURE_CUBE_MAP,k,Le),Te){Ie&&ke&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Pt,Xe,Se.width,Se.height);for(let He=0;He<6;He++){Ze=ce[He].mipmaps;for(let Qe=0;Qe<Ze.length;Qe++){const Je=Ze[Qe];k.format!==gr?be!==null?Ie?n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe,0,0,Je.width,Je.height,be,Je.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe,Xe,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe,0,0,Je.width,Je.height,be,Fe,Je.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe,Xe,Je.width,Je.height,0,be,Fe,Je.data)}}}else{Ze=k.mipmaps,Ie&&ke&&(Ze.length>0&&Pt++,n.texStorage2D(a.TEXTURE_CUBE_MAP,Pt,Xe,ce[0].width,ce[0].height));for(let He=0;He<6;He++)if(de){Ie?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,ce[He].width,ce[He].height,be,Fe,ce[He].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Xe,ce[He].width,ce[He].height,0,be,Fe,ce[He].data);for(let Qe=0;Qe<Ze.length;Qe++){const Je=Ze[Qe].image[He].image;Ie?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe+1,0,0,Je.width,Je.height,be,Fe,Je.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe+1,Xe,Je.width,Je.height,0,be,Fe,Je.data)}}else{Ie?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,be,Fe,ce[He]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Xe,be,Fe,ce[He]);for(let Qe=0;Qe<Ze.length;Qe++){const Je=Ze[Qe];Ie?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe+1,0,0,be,Fe,Je.image[He]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe+1,Xe,be,Fe,Je.image[He])}}}C(k,Le)&&M(a.TEXTURE_CUBE_MAP),Ee.__version=pe.version,k.onUpdate&&k.onUpdate(k)}$.__version=k.version})(H,R,A):n.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture,a.TEXTURE0+A)},this.rebindTextures=function(R,A,H){const $=i.get(R);A!==void 0&&ie($.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),H!==void 0&&q(R)},this.setupRenderTarget=function(R){const A=R.texture,H=i.get(R),$=i.get(A);R.addEventListener("dispose",O),R.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=A.version,c.memory.textures++);const k=R.isWebGLCubeRenderTarget===!0,Q=R.isWebGLMultipleRenderTargets===!0,ue=x(R)||f;if(k){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(f&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)H.__webglFramebuffer[pe][Ee]=a.createFramebuffer()}else H.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(f&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)H.__webglFramebuffer[pe]=a.createFramebuffer()}else H.__webglFramebuffer=a.createFramebuffer();if(Q)if(s.drawBuffers){const pe=R.texture;for(let Ee=0,Re=pe.length;Ee<Re;Ee++){const Pe=i.get(pe[Ee]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=a.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&R.samples>0&&w(R)===!1){const pe=Q?A:[A];H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const Re=pe[Ee];H.__webglColorRenderbuffer[Ee]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,H.__webglColorRenderbuffer[Ee]);const Pe=l.convert(Re.format,Re.colorSpace),P=l.convert(Re.type),Te=S(Re.internalFormat,Pe,P,Re.colorSpace,R.isXRRenderTarget===!0),de=D(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,de,Te,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,H.__webglColorRenderbuffer[Ee])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),B(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(k){n.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),ne(a.TEXTURE_CUBE_MAP,A,ue);for(let pe=0;pe<6;pe++)if(f&&A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)ie(H.__webglFramebuffer[pe][Ee],R,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee);else ie(H.__webglFramebuffer[pe],R,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);C(A,ue)&&M(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){const pe=R.texture;for(let Ee=0,Re=pe.length;Ee<Re;Ee++){const Pe=pe[Ee],P=i.get(Pe);n.bindTexture(a.TEXTURE_2D,P.__webglTexture),ne(a.TEXTURE_2D,Pe,ue),ie(H.__webglFramebuffer,R,Pe,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,0),C(Pe,ue)&&M(a.TEXTURE_2D)}n.unbindTexture()}else{let pe=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(f?pe=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,$.__webglTexture),ne(pe,A,ue),f&&A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)ie(H.__webglFramebuffer[Ee],R,A,a.COLOR_ATTACHMENT0,pe,Ee);else ie(H.__webglFramebuffer,R,A,a.COLOR_ATTACHMENT0,pe,0);C(A,ue)&&M(pe),n.unbindTexture()}R.depthBuffer&&q(R)},this.updateRenderTargetMipmap=function(R){const A=x(R)||f,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let $=0,k=H.length;$<k;$++){const Q=H[$];if(C(Q,A)){const ue=R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,pe=i.get(Q).__webglTexture;n.bindTexture(ue,pe),M(ue),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(f&&R.samples>0&&w(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,$=R.height;let k=a.COLOR_BUFFER_BIT;const Q=[],ue=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pe=i.get(R),Ee=R.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Re=0;Re<A.length;Re++)n.bindFramebuffer(a.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){Q.push(a.COLOR_ATTACHMENT0+Re),R.depthBuffer&&Q.push(ue);const Pe=pe.__ignoreDepthValues!==void 0&&pe.__ignoreDepthValues;if(Pe===!1&&(R.depthBuffer&&(k|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&(k|=a.STENCIL_BUFFER_BIT)),Ee&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]),Pe===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[ue]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[ue])),Ee){const P=i.get(A[Re]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,P,0)}a.blitFramebuffer(0,0,H,$,0,0,H,$,k,a.NEAREST),d&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ee)for(let Re=0;Re<A.length;Re++){n.bindFramebuffer(a.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]);const Pe=i.get(A[Re]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,Pe,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=w}function Rx(a,e,n){const i=n.isWebGL2;return{convert:function(s,l=""){let c;const f=gt.getTransfer(l);if(s===Yi)return a.UNSIGNED_BYTE;if(s===Pm)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Nm)return a.UNSIGNED_SHORT_5_5_5_1;if(s===1010)return a.BYTE;if(s===1011)return a.SHORT;if(s===gd)return a.UNSIGNED_SHORT;if(s===Lm)return a.INT;if(s===gi)return a.UNSIGNED_INT;if(s===vi)return a.FLOAT;if(s===Vs)return i?a.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(s===1021)return a.ALPHA;if(s===gr)return a.RGBA;if(s===1024)return a.LUMINANCE;if(s===1025)return a.LUMINANCE_ALPHA;if(s===Ki)return a.DEPTH_COMPONENT;if(s===$a)return a.DEPTH_STENCIL;if(s===ld)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(s===1028)return a.RED;if(s===Dm)return a.RED_INTEGER;if(s===1030)return a.RG;if(s===Um)return a.RG_INTEGER;if(s===Im)return a.RGBA_INTEGER;if(s===Mc||s===wc||s===Tc||s===Rc)if(f===Et){if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c===null)return null;if(s===Mc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(c=e.get("WEBGL_compressed_texture_s3tc"),c===null)return null;if(s===Mc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(s===ep||s===tp||s===np||s===rp){if(c=e.get("WEBGL_compressed_texture_pvrtc"),c===null)return null;if(s===ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(s===Om)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ip||s===ap){if(c=e.get("WEBGL_compressed_texture_etc"),c===null)return null;if(s===ip)return f===Et?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ap)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}if(s===sp||s===op||s===lp||s===up||s===cp||s===dp||s===hp||s===fp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp){if(c=e.get("WEBGL_compressed_texture_astc"),c===null)return null;if(s===sp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===op)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===up)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_p)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}if(s===Ac||s===yp||s===Sp){if(c=e.get("EXT_texture_compression_bptc"),c===null)return null;if(s===Ac)return f===Et?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(s===36283||s===Ep||s===Mp||s===wp){if(c=e.get("EXT_texture_compression_rgtc"),c===null)return null;if(s===Ac)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return s===qi?i?a.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}}}class Ax extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xl extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bx={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,i),C=this._getHandJoint(d,T);x!==null&&(C.matrix.fromArray(x.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.matrixWorldNeedsUpdate=!0,C.jointRadius=x.radius),C.visible=x!==null}const m=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=m.position.distanceTo(v.position),y=.02,b=.005;d.inputState.pinching&&_>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Cx extends ea{constructor(e,n){super();const i=this;let s=null,l=1,c=null,f="local-floor",p=1,d=null,m=null,v=null,_=null,y=null,b=null;const T=n.getContextAttributes();let x=null,C=null;const M=[],S=[],V=new $e;let z=null;const I=new Dn;I.layers.enable(1),I.viewport=new Bt;const O=new Dn;O.layers.enable(2),O.viewport=new Bt;const te=[I,O],K=new Ax;K.layers.enable(1),K.layers.enable(2);let Z=null,le=null;function F(D){const w=S.indexOf(D.inputSource);if(w===-1)return;const j=M[w];j!==void 0&&(j.update(D.inputSource,D.frame,d||c),j.dispatchEvent({type:D.type,data:D.inputSource}))}function ae(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",ne);for(let D=0;D<M.length;D++){const w=S[D];w!==null&&(S[D]=null,M[D].disconnect(w))}Z=null,le=null,e.setRenderTarget(x),y=null,_=null,v=null,s=null,C=null,q.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}function ne(D){for(let w=0;w<D.removed.length;w++){const j=D.removed[w],R=S.indexOf(j);R>=0&&(S[R]=null,M[R].disconnect(j))}for(let w=0;w<D.added.length;w++){const j=D.added[w];let R=S.indexOf(j);if(R===-1){for(let H=0;H<M.length;H++){if(H>=S.length){S.push(j),R=H;break}if(S[H]===null){S[H]=j,R=H;break}}if(R===-1)break}const A=M[R];A&&A.connect(j)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let w=M[D];return w===void 0&&(w=new Zc,M[D]=w),w.getTargetRaySpace()},this.getControllerGrip=function(D){let w=M[D];return w===void 0&&(w=new Zc,M[D]=w),w.getGripSpace()},this.getHand=function(D){let w=M[D];return w===void 0&&(w=new Zc,M[D]=w),w.getHandSpace()},this.setFramebufferScaleFactor=function(D){l=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){f=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(D){d=D},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(V),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const w={antialias:s.renderState.layers!==void 0||T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,w),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Zi(y.framebufferWidth,y.framebufferHeight,{format:gr,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let w=null,j=null,R=null;T.depth&&(R=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,w=T.stencil?$a:Ki,j=T.stencil?qi:gi);const A={colorFormat:n.RGBA8,depthFormat:R,scaleFactor:l};v=new XRWebGLBinding(s,n),_=v.createProjectionLayer(A),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Zi(_.textureWidth,_.textureHeight,{format:gr,type:Yi,depthTexture:new Km(_.textureWidth,_.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,w),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0}),e.properties.get(C).__ignoreDepthValues=_.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),q.setContext(s),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};const he=new X,Me=new X;function ie(D,w){w===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(w.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;K.near=O.near=I.near=D.near,K.far=O.far=I.far=D.far,Z===K.near&&le===K.far||(s.updateRenderState({depthNear:K.near,depthFar:K.far}),Z=K.near,le=K.far);const w=D.parent,j=K.cameras;ie(K,w);for(let R=0;R<j.length;R++)ie(j[R],w);j.length===2?(function(R,A,H){he.setFromMatrixPosition(A.matrixWorld),Me.setFromMatrixPosition(H.matrixWorld);const $=he.distanceTo(Me),k=A.projectionMatrix.elements,Q=H.projectionMatrix.elements,ue=k[14]/(k[10]-1),pe=k[14]/(k[10]+1),Ee=(k[9]+1)/k[5],Re=(k[9]-1)/k[5],Pe=(k[8]-1)/k[0],P=(Q[8]+1)/Q[0],Te=ue*Pe,de=ue*P,ce=$/(-Pe+P),Se=ce*-Pe;A.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Se),R.translateZ(ce),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Le=ue+ce,be=pe+ce,Fe=Te-Se,Xe=de+($-Se),Ie=Ee*pe/be*Le,ke=Re*pe/be*Le;R.projectionMatrix.makePerspective(Fe,Xe,Ie,ke,Le,be),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()})(K,I,O):K.projectionMatrix.copy(I.projectionMatrix),(function(R,A,H){H===null?R.matrix.copy(A.matrixWorld):(R.matrix.copy(H.matrixWorld),R.matrix.invert(),R.matrix.multiply(A.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(A.projectionMatrix),R.projectionMatrixInverse.copy(A.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=2*ud*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)})(D,K,w)},this.getCamera=function(){return K},this.getFoveation=function(){if(_!==null||y!==null)return p},this.setFoveation=function(D){p=D,_!==null&&(_.fixedFoveation=D),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=D)};let B=null;const q=new qm;q.setAnimationLoop((function(D,w){if(m=w.getViewerPose(d||c),b=w,m!==null){const j=m.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let R=!1;j.length!==K.cameras.length&&(K.cameras.length=0,R=!0);for(let A=0;A<j.length;A++){const H=j[A];let $=null;if(y!==null)$=y.getViewport(H);else{const Q=v.getViewSubImage(_,H);$=Q.viewport,A===0&&(e.setRenderTargetTextures(C,Q.colorTexture,_.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(C))}let k=te[A];k===void 0&&(k=new Dn,k.layers.enable(A),k.viewport=new Bt,te[A]=k),k.matrix.fromArray(H.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(H.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set($.x,$.y,$.width,$.height),A===0&&(K.matrix.copy(k.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),R===!0&&K.cameras.push(k)}}for(let j=0;j<M.length;j++){const R=S[j],A=M[j];R!==null&&A!==void 0&&A.update(R,w,d||c)}B&&B(D,w),w.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:w}),b=null})),this.setAnimationLoop=function(D){B=D},this.dispose=function(){}}}function Lx(a,e){function n(s,l){s.matrixAutoUpdate===!0&&s.updateMatrix(),l.value.copy(s.matrix)}function i(s,l){s.opacity.value=l.opacity,l.color&&s.diffuse.value.copy(l.color),l.emissive&&s.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(s.map.value=l.map,n(l.map,s.mapTransform)),l.alphaMap&&(s.alphaMap.value=l.alphaMap,n(l.alphaMap,s.alphaMapTransform)),l.bumpMap&&(s.bumpMap.value=l.bumpMap,n(l.bumpMap,s.bumpMapTransform),s.bumpScale.value=l.bumpScale,l.side===Mn&&(s.bumpScale.value*=-1)),l.normalMap&&(s.normalMap.value=l.normalMap,n(l.normalMap,s.normalMapTransform),s.normalScale.value.copy(l.normalScale),l.side===Mn&&s.normalScale.value.negate()),l.displacementMap&&(s.displacementMap.value=l.displacementMap,n(l.displacementMap,s.displacementMapTransform),s.displacementScale.value=l.displacementScale,s.displacementBias.value=l.displacementBias),l.emissiveMap&&(s.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,s.emissiveMapTransform)),l.specularMap&&(s.specularMap.value=l.specularMap,n(l.specularMap,s.specularMapTransform)),l.alphaTest>0&&(s.alphaTest.value=l.alphaTest);const c=e.get(l).envMap;if(c&&(s.envMap.value=c,s.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,s.reflectivity.value=l.reflectivity,s.ior.value=l.ior,s.refractionRatio.value=l.refractionRatio),l.lightMap){s.lightMap.value=l.lightMap;const f=a._useLegacyLights===!0?Math.PI:1;s.lightMapIntensity.value=l.lightMapIntensity*f,n(l.lightMap,s.lightMapTransform)}l.aoMap&&(s.aoMap.value=l.aoMap,s.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(s,l){l.color.getRGB(s.fogColor.value,Xm(a)),l.isFog?(s.fogNear.value=l.near,s.fogFar.value=l.far):l.isFogExp2&&(s.fogDensity.value=l.density)},refreshMaterialUniforms:function(s,l,c,f,p){l.isMeshBasicMaterial||l.isMeshLambertMaterial?i(s,l):l.isMeshToonMaterial?(i(s,l),(function(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)})(s,l)):l.isMeshPhongMaterial?(i(s,l),(function(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)})(s,l)):l.isMeshStandardMaterial?(i(s,l),(function(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,d.roughnessMapTransform)),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)})(s,l),l.isMeshPhysicalMaterial&&(function(d,m,v){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,d.specularIntensityMapTransform))})(s,l,p)):l.isMeshMatcapMaterial?(i(s,l),(function(d,m){m.matcap&&(d.matcap.value=m.matcap)})(s,l)):l.isMeshDepthMaterial?i(s,l):l.isMeshDistanceMaterial?(i(s,l),(function(d,m){const v=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far})(s,l)):l.isMeshNormalMaterial?i(s,l):l.isLineBasicMaterial?((function(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform))})(s,l),l.isLineDashedMaterial&&(function(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale})(s,l)):l.isPointsMaterial?(function(d,m,v,_){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=.5*_,m.map&&(d.map.value=m.map,n(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)})(s,l,c,f):l.isSpriteMaterial?(function(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)})(s,l):l.isShadowMaterial?(s.color.value.copy(l.color),s.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}}}function Px(a,e,n,i){let s={},l={},c=[];const f=n.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(v,_,y,b){const T=v.value,x=_+"_"+y;if(b[x]===void 0)return b[x]=typeof T=="number"||typeof T=="boolean"?T:T.clone(),!0;{const C=b[x];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[x]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function d(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=c.indexOf(_.__bindingPointIndex);c.splice(y,1),a.deleteBuffer(s[_.id]),delete s[_.id],delete l[_.id]}return{bind:function(v,_){const y=_.program;i.uniformBlockBinding(v,y)},update:function(v,_){let y=s[v.id];y===void 0&&((function(x){const C=x.uniforms;let M=0;const S=16;for(let z=0,I=C.length;z<I;z++){const O=Array.isArray(C[z])?C[z]:[C[z]];for(let te=0,K=O.length;te<K;te++){const Z=O[te],le=Array.isArray(Z.value)?Z.value:[Z.value];for(let F=0,ae=le.length;F<ae;F++){const ne=d(le[F]),he=M%S;he!==0&&S-he<ne.boundary&&(M+=S-he),Z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=M,M+=ne.storage}}}const V=M%S;V>0&&(M+=S-V),x.__size=M,x.__cache={}})(v),y=(function(x){const C=(function(){for(let z=0;z<f;z++)if(c.indexOf(z)===-1)return c.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();x.__bindingPointIndex=C;const M=a.createBuffer(),S=x.__size,V=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,S,V),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,M),M})(v),s[v.id]=y,v.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(v,b);const T=e.render.frame;l[v.id]!==T&&((function(x){const C=s[x.id],M=x.uniforms,S=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let V=0,z=M.length;V<z;V++){const I=Array.isArray(M[V])?M[V]:[M[V]];for(let O=0,te=I.length;O<te;O++){const K=I[O];if(p(K,V,O,S)===!0){const Z=K.__offset,le=Array.isArray(K.value)?K.value:[K.value];let F=0;for(let ae=0;ae<le.length;ae++){const ne=le[ae],he=d(ne);typeof ne=="number"||typeof ne=="boolean"?(K.__data[0]=ne,a.bufferSubData(a.UNIFORM_BUFFER,Z+F,K.__data)):ne.isMatrix3?(K.__data[0]=ne.elements[0],K.__data[1]=ne.elements[1],K.__data[2]=ne.elements[2],K.__data[3]=0,K.__data[4]=ne.elements[3],K.__data[5]=ne.elements[4],K.__data[6]=ne.elements[5],K.__data[7]=0,K.__data[8]=ne.elements[6],K.__data[9]=ne.elements[7],K.__data[10]=ne.elements[8],K.__data[11]=0):(ne.toArray(K.__data,F),F+=he.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,Z,K.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)})(v),l[v.id]=T)},dispose:function(){for(const v in s)a.deleteBuffer(s[v]);c=[],s={},l={}}}}class Ed{constructor(e={}){const{canvas:n=R_(),context:i=null,depth:s=!0,stencil:l=!0,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1}=e;let _;this.isWebGLRenderer=!0,_=i!==null?i.getContextAttributes().alpha:c;const y=new Uint32Array(4),b=new Int32Array(4);let T=null,x=null;const C=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const S=this;let V=!1,z=0,I=0,O=null,te=-1,K=null;const Z=new Bt,le=new Bt;let F=null;const ae=new pt(0);let ne=0,he=n.width,Me=n.height,ie=1,B=null,q=null;const D=new Bt(0,0,he,Me),w=new Bt(0,0,he,Me);let j=!1;const R=new xd;let A=!1,H=!1,$=null;const k=new ot,Q=new $e,ue=new X,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return O===null?ie:1}let Re,Pe,P,Te,de,ce,Se,Le,be,Fe,Xe,Ie,ke,Ze,Pt,He,Qe,Je,Tn,Ut,W,Ne,Ke,ct,re=i;function Yt(N,oe){for(let fe=0;fe<N.length;fe++){const _e=N[fe],ge=n.getContext(_e,oe);if(ge!==null)return ge}return null}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${td}`),n.addEventListener("webglcontextlost",kr,!1),n.addEventListener("webglcontextrestored",In,!1),n.addEventListener("webglcontextcreationerror",It,!1),re===null){const oe=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&oe.shift(),re=Yt(oe,N),re===null)throw Yt(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&re instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),re.getShaderPrecisionFormat===void 0&&(re.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}function At(){Re=new r0(re),Pe=new Q_(re,Re,e),Re.init(Pe),Ne=new Rx(re,Re,Pe),P=new wx(re,Re,Pe),Te=new s0(re),de=new fx,ce=new Tx(re,Re,P,de,Pe,Ne,Te),Se=new e0(S),Le=new n0(S),be=new q_(re,Pe),Ke=new $_(re,Re,be,Pe),Fe=new i0(re,be,Te,Ke),Xe=new c0(re,Fe,be,Te),Tn=new u0(re,Pe,ce),He=new J_(de),Ie=new hx(S,Se,Le,Re,Pe,Ke,He),ke=new Lx(S,de),Ze=new mx,Pt=new yx(Re,Pe),Je=new K_(S,Se,Le,P,Xe,_,p),Qe=new Mx(S,Xe,Pe),ct=new Px(re,Te,Pe,P),Ut=new Z_(re,Re,Te,Pe),W=new a0(re,Re,Te,Pe),Te.programs=Ie.programs,S.capabilities=Pe,S.extensions=Re,S.properties=de,S.renderLists=Ze,S.shadowMap=Qe,S.state=P,S.info=Te}At();const Ct=new Cx(S,re);function kr(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function In(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const N=Te.autoReset,oe=Qe.enabled,fe=Qe.autoUpdate,_e=Qe.needsUpdate,ge=Qe.type;At(),Te.autoReset=N,Qe.enabled=oe,Qe.autoUpdate=fe,Qe.needsUpdate=_e,Qe.type=ge}function It(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function rn(N){const oe=N.target;oe.removeEventListener("dispose",rn),(function(fe){(function(_e){const ge=de.get(_e).programs;ge!==void 0&&(ge.forEach((function(Ae){Ie.releaseProgram(Ae)})),_e.isShaderMaterial&&Ie.releaseShaderCache(_e))})(fe),de.remove(fe)})(oe)}function Sr(N,oe,fe){N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=Mn,N.needsUpdate=!0,ta(N,oe,fe),N.side=xi,N.needsUpdate=!0,ta(N,oe,fe),N.side=2):ta(N,oe,fe)}this.xr=Ct,this.getContext=function(){return re},this.getContextAttributes=function(){return re.getContextAttributes()},this.forceContextLoss=function(){const N=Re.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Re.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(N){N!==void 0&&(ie=N,this.setSize(he,Me,!1))},this.getSize=function(N){return N.set(he,Me)},this.setSize=function(N,oe,fe=!0){Ct.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(he=N,Me=oe,n.width=Math.floor(N*ie),n.height=Math.floor(oe*ie),fe===!0&&(n.style.width=N+"px",n.style.height=oe+"px"),this.setViewport(0,0,N,oe))},this.getDrawingBufferSize=function(N){return N.set(he*ie,Me*ie).floor()},this.setDrawingBufferSize=function(N,oe,fe){he=N,Me=oe,ie=fe,n.width=Math.floor(N*fe),n.height=Math.floor(oe*fe),this.setViewport(0,0,N,oe)},this.getCurrentViewport=function(N){return N.copy(Z)},this.getViewport=function(N){return N.copy(D)},this.setViewport=function(N,oe,fe,_e){N.isVector4?D.set(N.x,N.y,N.z,N.w):D.set(N,oe,fe,_e),P.viewport(Z.copy(D).multiplyScalar(ie).floor())},this.getScissor=function(N){return N.copy(w)},this.setScissor=function(N,oe,fe,_e){N.isVector4?w.set(N.x,N.y,N.z,N.w):w.set(N,oe,fe,_e),P.scissor(le.copy(w).multiplyScalar(ie).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(N){P.setScissorTest(j=N)},this.setOpaqueSort=function(N){B=N},this.setTransparentSort=function(N){q=N},this.getClearColor=function(N){return N.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(N=!0,oe=!0,fe=!0){let _e=0;if(N){let ge=!1;if(O!==null){const Ae=O.texture.format;ge=Ae===Im||Ae===Um||Ae===Dm}if(ge){const Ae=O.texture.type,je=Ae===Yi||Ae===gi||Ae===gd||Ae===qi||Ae===Pm||Ae===Nm,We=Je.getClearColor(),et=Je.getClearAlpha(),tt=We.r,rt=We.g,it=We.b;je?(y[0]=tt,y[1]=rt,y[2]=it,y[3]=et,re.clearBufferuiv(re.COLOR,0,y)):(b[0]=tt,b[1]=rt,b[2]=it,b[3]=et,re.clearBufferiv(re.COLOR,0,b))}else _e|=re.COLOR_BUFFER_BIT}oe&&(_e|=re.DEPTH_BUFFER_BIT),fe&&(_e|=re.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re.clear(_e)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",kr,!1),n.removeEventListener("webglcontextrestored",In,!1),n.removeEventListener("webglcontextcreationerror",It,!1),Ze.dispose(),Pt.dispose(),de.dispose(),Se.dispose(),Le.dispose(),Xe.dispose(),Ke.dispose(),ct.dispose(),Ie.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Xn),Ct.removeEventListener("sessionend",sr),$&&($.dispose(),$=null),Yn.stop()},this.renderBufferDirect=function(N,oe,fe,_e,ge,Ae){oe===null&&(oe=pe);const je=ge.isMesh&&ge.matrixWorld.determinant()<0,We=(function(wt,an,Ot,lt,ut){an.isScene!==!0&&(an=pe),ce.resetTextureUnits();const or=an.fog,hn=lt.isMeshStandardMaterial?an.environment:null,Fl=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Fr,$t=(lt.isMeshStandardMaterial?Le:Se).get(lt.envMap||hn),kl=lt.vertexColors===!0&&!!Ot.attributes.color&&Ot.attributes.color.itemSize===4,zl=!!Ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Bl=!!Ot.morphAttributes.position,na=!!Ot.morphAttributes.normal,ra=!!Ot.morphAttributes.color;let Vr=_i;lt.toneMapped&&(O!==null&&O.isXRRenderTarget!==!0||(Vr=S.toneMapping));const wi=Ot.morphAttributes.position||Ot.morphAttributes.normal||Ot.morphAttributes.color,Hl=wi!==void 0?wi.length:0,dt=de.get(lt),ts=x.state.lights;if(A===!0&&(H===!0||wt!==K)){const sn=wt===K&&lt.id===te;He.setState(lt,wt,sn)}let fn=!1;lt.version===dt.__version?dt.needsLights&&dt.lightsStateVersion!==ts.state.version||dt.outputColorSpace!==Fl||ut.isBatchedMesh&&dt.batching===!1?fn=!0:ut.isBatchedMesh||dt.batching!==!0?ut.isInstancedMesh&&dt.instancing===!1?fn=!0:ut.isInstancedMesh||dt.instancing!==!0?ut.isSkinnedMesh&&dt.skinning===!1?fn=!0:ut.isSkinnedMesh||dt.skinning!==!0?ut.isInstancedMesh&&dt.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&dt.instancingColor===!1&&ut.instanceColor!==null||dt.envMap!==$t||lt.fog===!0&&dt.fog!==or?fn=!0:dt.numClippingPlanes===void 0||dt.numClippingPlanes===He.numPlanes&&dt.numIntersection===He.numIntersection?(dt.vertexAlphas!==kl||dt.vertexTangents!==zl||dt.morphTargets!==Bl||dt.morphNormals!==na||dt.morphColors!==ra||dt.toneMapping!==Vr||Pe.isWebGL2===!0&&dt.morphTargetsCount!==Hl)&&(fn=!0):fn=!0:fn=!0:fn=!0:fn=!0:(fn=!0,dt.__version=lt.version);let Kn=dt.currentProgram;fn===!0&&(Kn=ta(lt,an,ut));let jr=!1,Ti=!1,Ri=!1;const qe=Kn.getUniforms(),lr=dt.uniforms;if(P.useProgram(Kn.program)&&(jr=!0,Ti=!0,Ri=!0),lt.id!==te&&(te=lt.id,Ti=!0),jr||K!==wt){qe.setValue(re,"projectionMatrix",wt.projectionMatrix),qe.setValue(re,"viewMatrix",wt.matrixWorldInverse);const sn=qe.map.cameraPosition;sn!==void 0&&sn.setValue(re,ue.setFromMatrixPosition(wt.matrixWorld)),Pe.logarithmicDepthBuffer&&qe.setValue(re,"logDepthBufFC",2/(Math.log(wt.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&qe.setValue(re,"isOrthographic",wt.isOrthographicCamera===!0),K!==wt&&(K=wt,Ti=!0,Ri=!0)}if(ut.isSkinnedMesh){qe.setOptional(re,ut,"bindMatrix"),qe.setOptional(re,ut,"bindMatrixInverse");const sn=ut.skeleton;sn&&(Pe.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),qe.setValue(re,"boneTexture",sn.boneTexture,ce)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ut.isBatchedMesh&&(qe.setOptional(re,ut,"batchingTexture"),qe.setValue(re,"batchingTexture",ut._matricesTexture,ce));const ia=Ot.morphAttributes;(ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&Pe.isWebGL2===!0)&&Tn.update(ut,Ot,Kn),(Ti||dt.receiveShadow!==ut.receiveShadow)&&(dt.receiveShadow=ut.receiveShadow,qe.setValue(re,"receiveShadow",ut.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(lr.envMap.value=$t,lr.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),Ti&&(qe.setValue(re,"toneMappingExposure",S.toneMappingExposure),dt.needsLights&&(mn=Ri,(pn=lr).ambientLightColor.needsUpdate=mn,pn.lightProbe.needsUpdate=mn,pn.directionalLights.needsUpdate=mn,pn.directionalLightShadows.needsUpdate=mn,pn.pointLights.needsUpdate=mn,pn.pointLightShadows.needsUpdate=mn,pn.spotLights.needsUpdate=mn,pn.spotLightShadows.needsUpdate=mn,pn.rectAreaLights.needsUpdate=mn,pn.hemisphereLights.needsUpdate=mn),or&&lt.fog===!0&&ke.refreshFogUniforms(lr,or),ke.refreshMaterialUniforms(lr,lt,ie,Me,$),El.upload(re,Gr(dt),lr,ce));var pn,mn;if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(El.upload(re,Gr(dt),lr,ce),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&qe.setValue(re,"center",ut.center),qe.setValue(re,"modelViewMatrix",ut.modelViewMatrix),qe.setValue(re,"normalMatrix",ut.normalMatrix),qe.setValue(re,"modelMatrix",ut.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const sn=lt.uniformsGroups;for(let aa=0,ns=sn.length;aa<ns;aa++)if(Pe.isWebGL2){const Ai=sn[aa];ct.update(Ai,Kn),ct.bind(Ai,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn})(N,oe,fe,_e,ge);P.setMaterial(_e,je);let et=fe.index,tt=1;if(_e.wireframe===!0){if(et=Fe.getWireframeAttribute(fe),et===void 0)return;tt=2}const rt=fe.drawRange,it=fe.attributes.position;let vt=rt.start*tt,Rn=(rt.start+rt.count)*tt;Ae!==null&&(vt=Math.max(vt,Ae.start*tt),Rn=Math.min(Rn,(Ae.start+Ae.count)*tt)),et!==null?(vt=Math.max(vt,0),Rn=Math.min(Rn,et.count)):it!=null&&(vt=Math.max(vt,0),Rn=Math.min(Rn,it.count));const qn=Rn-vt;if(qn<0||qn===1/0)return;let mt;Ke.setup(ge,_e,We,fe,et);let xt=Ut;if(et!==null&&(mt=be.get(et),xt=W,xt.setIndex(mt)),ge.isMesh)_e.wireframe===!0?(P.setLineWidth(_e.wireframeLinewidth*Ee()),xt.setMode(re.LINES)):xt.setMode(re.TRIANGLES);else if(ge.isLine){let wt=_e.linewidth;wt===void 0&&(wt=1),P.setLineWidth(wt*Ee()),ge.isLineSegments?xt.setMode(re.LINES):ge.isLineLoop?xt.setMode(re.LINE_LOOP):xt.setMode(re.LINE_STRIP)}else ge.isPoints?xt.setMode(re.POINTS):ge.isSprite&&xt.setMode(re.TRIANGLES);if(ge.isBatchedMesh)xt.renderMultiDraw(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount);else if(ge.isInstancedMesh)xt.renderInstances(vt,qn,ge.count);else if(fe.isInstancedBufferGeometry){const wt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,an=Math.min(fe.instanceCount,wt);xt.renderInstances(vt,qn,an)}else xt.render(vt,qn)},this.compile=function(N,oe,fe=null){fe===null&&(fe=N),x=Pt.get(fe),x.init(),M.push(x),fe.traverseVisible((function(ge){ge.isLight&&ge.layers.test(oe.layers)&&(x.pushLight(ge),ge.castShadow&&x.pushShadow(ge))})),N!==fe&&N.traverseVisible((function(ge){ge.isLight&&ge.layers.test(oe.layers)&&(x.pushLight(ge),ge.castShadow&&x.pushShadow(ge))})),x.setupLights(S._useLegacyLights);const _e=new Set;return N.traverse((function(ge){const Ae=ge.material;if(Ae)if(Array.isArray(Ae))for(let je=0;je<Ae.length;je++){const We=Ae[je];Sr(We,fe,ge),_e.add(We)}else Sr(Ae,fe,ge),_e.add(Ae)})),M.pop(),x=null,_e},this.compileAsync=function(N,oe,fe=null){const _e=this.compile(N,oe,fe);return new Promise((ge=>{function Ae(){_e.forEach((function(je){de.get(je).currentProgram.isReady()&&_e.delete(je)})),_e.size!==0?setTimeout(Ae,10):ge(N)}Re.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)}))};let On=null;function Xn(){Yn.stop()}function sr(){Yn.start()}const Yn=new qm;function es(N,oe,fe,_e){if(N.visible===!1)return;if(N.layers.test(oe.layers)){if(N.isGroup)fe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(oe);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||R.intersectsSprite(N)){_e&&ue.setFromMatrixPosition(N.matrixWorld).applyMatrix4(k);const Ae=Xe.update(N),je=N.material;je.visible&&T.push(N,Ae,je,fe,ue.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||R.intersectsObject(N))){const Ae=Xe.update(N),je=N.material;if(_e&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ue.copy(N.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ue.copy(Ae.boundingSphere.center)),ue.applyMatrix4(N.matrixWorld).applyMatrix4(k)),Array.isArray(je)){const We=Ae.groups;for(let et=0,tt=We.length;et<tt;et++){const rt=We[et],it=je[rt.materialIndex];it&&it.visible&&T.push(N,Ae,it,fe,ue.z,rt)}}else je.visible&&T.push(N,Ae,je,fe,ue.z,null)}}const ge=N.children;for(let Ae=0,je=ge.length;Ae<je;Ae++)es(ge[Ae],oe,fe,_e)}function zr(N,oe,fe,_e){const ge=N.opaque,Ae=N.transmissive,je=N.transparent;x.setupLightsView(fe),A===!0&&He.setGlobalState(S.clippingPlanes,fe),Ae.length>0&&(function(We,et,tt,rt){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;const vt=Pe.isWebGL2;$===null&&($=new Zi(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Vs:Yi,minFilter:wl,samples:vt?4:0})),S.getDrawingBufferSize(Q),vt?$.setSize(Q.x,Q.y):$.setSize(cd(Q.x),cd(Q.y));const Rn=S.getRenderTarget();S.setRenderTarget($),S.getClearColor(ae),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear();const qn=S.toneMapping;S.toneMapping=_i,Br(We,tt,rt),ce.updateMultisampleRenderTarget($),ce.updateRenderTargetMipmap($);let mt=!1;for(let xt=0,wt=et.length;xt<wt;xt++){const an=et[xt],Ot=an.object,lt=an.geometry,ut=an.material,or=an.group;if(ut.side===2&&Ot.layers.test(rt.layers)){const hn=ut.side;ut.side=Mn,ut.needsUpdate=!0,Hr(Ot,tt,rt,lt,ut,or),ut.side=hn,ut.needsUpdate=!0,mt=!0}}mt===!0&&(ce.updateMultisampleRenderTarget($),ce.updateRenderTargetMipmap($)),S.setRenderTarget(Rn),S.setClearColor(ae,ne),S.toneMapping=qn})(ge,Ae,oe,fe),_e&&P.viewport(Z.copy(_e)),ge.length>0&&Br(ge,oe,fe),Ae.length>0&&Br(Ae,oe,fe),je.length>0&&Br(je,oe,fe),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Br(N,oe,fe){const _e=oe.isScene===!0?oe.overrideMaterial:null;for(let ge=0,Ae=N.length;ge<Ae;ge++){const je=N[ge],We=je.object,et=je.geometry,tt=_e===null?je.material:_e,rt=je.group;We.layers.test(fe.layers)&&Hr(We,oe,fe,et,tt,rt)}}function Hr(N,oe,fe,_e,ge,Ae){N.onBeforeRender(S,oe,fe,_e,ge,Ae),N.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ge.onBeforeRender(S,oe,fe,_e,N,Ae),ge.transparent===!0&&ge.side===2&&ge.forceSinglePass===!1?(ge.side=Mn,ge.needsUpdate=!0,S.renderBufferDirect(fe,oe,_e,ge,N,Ae),ge.side=xi,ge.needsUpdate=!0,S.renderBufferDirect(fe,oe,_e,ge,N,Ae),ge.side=2):S.renderBufferDirect(fe,oe,_e,ge,N,Ae),N.onAfterRender(S,oe,fe,_e,ge,Ae)}function ta(N,oe,fe){oe.isScene!==!0&&(oe=pe);const _e=de.get(N),ge=x.state.lights,Ae=x.state.shadowsArray,je=ge.state.version,We=Ie.getParameters(N,ge.state,Ae,oe,fe),et=Ie.getProgramCacheKey(We);let tt=_e.programs;_e.environment=N.isMeshStandardMaterial?oe.environment:null,_e.fog=oe.fog,_e.envMap=(N.isMeshStandardMaterial?Le:Se).get(N.envMap||_e.environment),tt===void 0&&(N.addEventListener("dispose",rn),tt=new Map,_e.programs=tt);let rt=tt.get(et);if(rt!==void 0){if(_e.currentProgram===rt&&_e.lightsStateVersion===je)return Mi(N,We),rt}else We.uniforms=Ie.getUniforms(N),N.onBuild(fe,We,S),N.onBeforeCompile(We,S),rt=Ie.acquireProgram(We,et),tt.set(et,rt),_e.uniforms=We.uniforms;const it=_e.uniforms;return(N.isShaderMaterial||N.isRawShaderMaterial)&&N.clipping!==!0||(it.clippingPlanes=He.uniform),Mi(N,We),_e.needsLights=(function(vt){return vt.isMeshLambertMaterial||vt.isMeshToonMaterial||vt.isMeshPhongMaterial||vt.isMeshStandardMaterial||vt.isShadowMaterial||vt.isShaderMaterial&&vt.lights===!0})(N),_e.lightsStateVersion=je,_e.needsLights&&(it.ambientLightColor.value=ge.state.ambient,it.lightProbe.value=ge.state.probe,it.directionalLights.value=ge.state.directional,it.directionalLightShadows.value=ge.state.directionalShadow,it.spotLights.value=ge.state.spot,it.spotLightShadows.value=ge.state.spotShadow,it.rectAreaLights.value=ge.state.rectArea,it.ltc_1.value=ge.state.rectAreaLTC1,it.ltc_2.value=ge.state.rectAreaLTC2,it.pointLights.value=ge.state.point,it.pointLightShadows.value=ge.state.pointShadow,it.hemisphereLights.value=ge.state.hemi,it.directionalShadowMap.value=ge.state.directionalShadowMap,it.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,it.spotShadowMap.value=ge.state.spotShadowMap,it.spotLightMatrix.value=ge.state.spotLightMatrix,it.spotLightMap.value=ge.state.spotLightMap,it.pointShadowMap.value=ge.state.pointShadowMap,it.pointShadowMatrix.value=ge.state.pointShadowMatrix),_e.currentProgram=rt,_e.uniformsList=null,rt}function Gr(N){if(N.uniformsList===null){const oe=N.currentProgram.getUniforms();N.uniformsList=El.seqWithValue(oe.seq,N.uniforms)}return N.uniformsList}function Mi(N,oe){const fe=de.get(N);fe.outputColorSpace=oe.outputColorSpace,fe.batching=oe.batching,fe.instancing=oe.instancing,fe.instancingColor=oe.instancingColor,fe.skinning=oe.skinning,fe.morphTargets=oe.morphTargets,fe.morphNormals=oe.morphNormals,fe.morphColors=oe.morphColors,fe.morphTargetsCount=oe.morphTargetsCount,fe.numClippingPlanes=oe.numClippingPlanes,fe.numIntersection=oe.numClipIntersection,fe.vertexAlphas=oe.vertexAlphas,fe.vertexTangents=oe.vertexTangents,fe.toneMapping=oe.toneMapping}Yn.setAnimationLoop((function(N){On&&On(N)})),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(N){On=N,Ct.setAnimationLoop(N),N===null?Yn.stop():Yn.start()},Ct.addEventListener("sessionstart",Xn),Ct.addEventListener("sessionend",sr),this.render=function(N,oe){if(oe!==void 0&&oe.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(V===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(oe),oe=Ct.getCamera()),N.isScene===!0&&N.onBeforeRender(S,N,oe,O),x=Pt.get(N,M.length),x.init(),M.push(x),k.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),R.setFromProjectionMatrix(k),H=this.localClippingEnabled,A=He.init(this.clippingPlanes,H),T=Ze.get(N,C.length),T.init(),C.push(T),es(N,oe,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(B,q),this.info.render.frame++,A===!0&&He.beginShadows();const fe=x.state.shadowsArray;if(Qe.render(fe,N,oe),A===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(T,N),x.setupLights(S._useLegacyLights),oe.isArrayCamera){const _e=oe.cameras;for(let ge=0,Ae=_e.length;ge<Ae;ge++){const je=_e[ge];zr(T,N,je,je.viewport)}}else zr(T,N,oe);O!==null&&(ce.updateMultisampleRenderTarget(O),ce.updateRenderTargetMipmap(O)),N.isScene===!0&&N.onAfterRender(S,N,oe),Ke.resetDefaultState(),te=-1,K=null,M.pop(),x=M.length>0?M[M.length-1]:null,C.pop(),T=C.length>0?C[C.length-1]:null},this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(N,oe,fe){de.get(N.texture).__webglTexture=oe,de.get(N.depthTexture).__webglTexture=fe;const _e=de.get(N);_e.__hasExternalTextures=!0,_e.__hasExternalTextures&&(_e.__autoAllocateDepthBuffer=fe===void 0,_e.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_e.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,oe){const fe=de.get(N);fe.__webglFramebuffer=oe,fe.__useDefaultFramebuffer=oe===void 0},this.setRenderTarget=function(N,oe=0,fe=0){O=N,z=oe,I=fe;let _e=!0,ge=null,Ae=!1,je=!1;if(N){const We=de.get(N);We.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(re.FRAMEBUFFER,null),_e=!1):We.__webglFramebuffer===void 0?ce.setupRenderTarget(N):We.__hasExternalTextures&&ce.rebindTextures(N,de.get(N.texture).__webglTexture,de.get(N.depthTexture).__webglTexture);const et=N.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(je=!0);const tt=de.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(ge=Array.isArray(tt[oe])?tt[oe][fe]:tt[oe],Ae=!0):ge=Pe.isWebGL2&&N.samples>0&&ce.useMultisampledRTT(N)===!1?de.get(N).__webglMultisampledFramebuffer:Array.isArray(tt)?tt[fe]:tt,Z.copy(N.viewport),le.copy(N.scissor),F=N.scissorTest}else Z.copy(D).multiplyScalar(ie).floor(),le.copy(w).multiplyScalar(ie).floor(),F=j;if(P.bindFramebuffer(re.FRAMEBUFFER,ge)&&Pe.drawBuffers&&_e&&P.drawBuffers(N,ge),P.viewport(Z),P.scissor(le),P.setScissorTest(F),Ae){const We=de.get(N.texture);re.framebufferTexture2D(re.FRAMEBUFFER,re.COLOR_ATTACHMENT0,re.TEXTURE_CUBE_MAP_POSITIVE_X+oe,We.__webglTexture,fe)}else if(je){const We=de.get(N.texture),et=oe||0;re.framebufferTextureLayer(re.FRAMEBUFFER,re.COLOR_ATTACHMENT0,We.__webglTexture,fe||0,et)}te=-1},this.readRenderTargetPixels=function(N,oe,fe,_e,ge,Ae,je){if(!N||!N.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=de.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(We=We[je]),We){P.bindFramebuffer(re.FRAMEBUFFER,We);try{const et=N.texture,tt=et.format,rt=et.type;if(tt!==gr&&Ne.convert(tt)!==re.getParameter(re.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const it=rt===Vs&&(Re.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Re.has("EXT_color_buffer_float"));if(!(rt===Yi||Ne.convert(rt)===re.getParameter(re.IMPLEMENTATION_COLOR_READ_TYPE)||rt===vi&&(Pe.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float"))||it))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");oe>=0&&oe<=N.width-_e&&fe>=0&&fe<=N.height-ge&&re.readPixels(oe,fe,_e,ge,Ne.convert(tt),Ne.convert(rt),Ae)}finally{const et=O!==null?de.get(O).__webglFramebuffer:null;P.bindFramebuffer(re.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(N,oe,fe=0){const _e=Math.pow(2,-fe),ge=Math.floor(oe.image.width*_e),Ae=Math.floor(oe.image.height*_e);ce.setTexture2D(oe,0),re.copyTexSubImage2D(re.TEXTURE_2D,fe,0,0,N.x,N.y,ge,Ae),P.unbindTexture()},this.copyTextureToTexture=function(N,oe,fe,_e=0){const ge=oe.image.width,Ae=oe.image.height,je=Ne.convert(fe.format),We=Ne.convert(fe.type);ce.setTexture2D(fe,0),re.pixelStorei(re.UNPACK_FLIP_Y_WEBGL,fe.flipY),re.pixelStorei(re.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),re.pixelStorei(re.UNPACK_ALIGNMENT,fe.unpackAlignment),oe.isDataTexture?re.texSubImage2D(re.TEXTURE_2D,_e,N.x,N.y,ge,Ae,je,We,oe.image.data):oe.isCompressedTexture?re.compressedTexSubImage2D(re.TEXTURE_2D,_e,N.x,N.y,oe.mipmaps[0].width,oe.mipmaps[0].height,je,oe.mipmaps[0].data):re.texSubImage2D(re.TEXTURE_2D,_e,N.x,N.y,je,We,oe.image),_e===0&&fe.generateMipmaps&&re.generateMipmap(re.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(N,oe,fe,_e,ge=0){if(S.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const Ae=N.max.x-N.min.x+1,je=N.max.y-N.min.y+1,We=N.max.z-N.min.z+1,et=Ne.convert(_e.format),tt=Ne.convert(_e.type);let rt;if(_e.isData3DTexture)ce.setTexture3D(_e,0),rt=re.TEXTURE_3D;else{if(!_e.isDataArrayTexture&&!_e.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");ce.setTexture2DArray(_e,0),rt=re.TEXTURE_2D_ARRAY}re.pixelStorei(re.UNPACK_FLIP_Y_WEBGL,_e.flipY),re.pixelStorei(re.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),re.pixelStorei(re.UNPACK_ALIGNMENT,_e.unpackAlignment);const it=re.getParameter(re.UNPACK_ROW_LENGTH),vt=re.getParameter(re.UNPACK_IMAGE_HEIGHT),Rn=re.getParameter(re.UNPACK_SKIP_PIXELS),qn=re.getParameter(re.UNPACK_SKIP_ROWS),mt=re.getParameter(re.UNPACK_SKIP_IMAGES),xt=fe.isCompressedTexture?fe.mipmaps[ge]:fe.image;re.pixelStorei(re.UNPACK_ROW_LENGTH,xt.width),re.pixelStorei(re.UNPACK_IMAGE_HEIGHT,xt.height),re.pixelStorei(re.UNPACK_SKIP_PIXELS,N.min.x),re.pixelStorei(re.UNPACK_SKIP_ROWS,N.min.y),re.pixelStorei(re.UNPACK_SKIP_IMAGES,N.min.z),fe.isDataTexture||fe.isData3DTexture?re.texSubImage3D(rt,ge,oe.x,oe.y,oe.z,Ae,je,We,et,tt,xt.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),re.compressedTexSubImage3D(rt,ge,oe.x,oe.y,oe.z,Ae,je,We,et,xt.data)):re.texSubImage3D(rt,ge,oe.x,oe.y,oe.z,Ae,je,We,et,tt,xt),re.pixelStorei(re.UNPACK_ROW_LENGTH,it),re.pixelStorei(re.UNPACK_IMAGE_HEIGHT,vt),re.pixelStorei(re.UNPACK_SKIP_PIXELS,Rn),re.pixelStorei(re.UNPACK_SKIP_ROWS,qn),re.pixelStorei(re.UNPACK_SKIP_IMAGES,mt),ge===0&&_e.generateMipmaps&&re.generateMipmap(rt),P.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?ce.setTextureCube(N,0):N.isData3DTexture?ce.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ce.setTexture2DArray(N,0):ce.setTexture2D(N,0),P.unbindTexture()},this.resetState=function(){z=0,I=0,O=null,P.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vd?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===Pl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?$i:Fm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?zt:Fr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Nx extends Ed{}Nx.prototype.isWebGL1Renderer=!0;class tg extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}new X;new X;new X;new X;new $e;new $e;new ot;new X;new X;new X;new $e;new $e;new $e;new X;new X;new X;new Bt;new Bt;new X;new ot;new X;new Si;new ot;new Xs;new ot;new ot;new ot;new ot;new yi;new ot;new Wn;new Si;new ot;new ot;new ot;new ot;new xd;new yi;new Si;new X;new Wn;new X;new X;new ot;new Xs;new Si;new X;new X;new ot;new Xs;new Si;new X;new X;new X;new X;new X;new jn;class Ol extends Ei{constructor(e=1,n=32,i=16,s=0,l=2*Math.PI,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:l,thetaStart:c,thetaLength:f},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const p=Math.min(c+f,Math.PI);let d=0;const m=[],v=new X,_=new X,y=[],b=[],T=[],x=[];for(let C=0;C<=i;C++){const M=[],S=C/i;let V=0;C===0&&c===0?V=.5/n:C===i&&p===Math.PI&&(V=-.5/n);for(let z=0;z<=n;z++){const I=z/n;v.x=-e*Math.cos(s+I*l)*Math.sin(c+S*f),v.y=e*Math.cos(c+S*f),v.z=e*Math.sin(s+I*l)*Math.sin(c+S*f),b.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),x.push(I+V,1-S),M.push(d++)}m.push(M)}for(let C=0;C<i;C++)for(let M=0;M<n;M++){const S=m[C][M+1],V=m[C][M],z=m[C+1][M],I=m[C+1][M+1];(C!==0||c>0)&&y.push(S,V,I),(C!==i-1||p<Math.PI)&&y.push(V,z,I)}this.setIndex(y),this.setAttribute("position",new xr(b,3)),this.setAttribute("normal",new xr(T,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const hm={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Dx{constructor(e,n,i){const s=this;let l,c=!1,f=0,p=0;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(m){p++,c===!1&&s.onStart!==void 0&&s.onStart(m,f,p),c=!0},this.itemEnd=function(m){f++,s.onProgress!==void 0&&s.onProgress(m,f,p),f===p&&(c=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return l?l(m):m},this.setURLModifier=function(m){return l=m,this},this.addHandler=function(m,v){return d.push(m,v),this},this.removeHandler=function(m){const v=d.indexOf(m);return v!==-1&&d.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=d.length;v<_;v+=2){const y=d[v],b=d[v+1];if(y.global&&(y.lastIndex=0),y.test(m))return b}return null}}}const Ux=new Dx;class Md{constructor(e){this.manager=e!==void 0?e:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise((function(s,l){i.load(e,s,n,l)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Md.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ix extends Md{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=hm.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout((function(){n&&n(c),l.manager.itemEnd(e)}),0),c;const f=js("img");function p(){m(),hm.add(e,this),n&&n(this),l.manager.itemEnd(e)}function d(v){m(),s&&s(v),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class ng extends Md{constructor(e){super(e)}load(e,n,i,s){const l=new wn,c=new Ix(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,(function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)}),i,s),l}}new ot;new X;new X;new ot;new X;new X;new ot;new ot;new ot;new X;new X;new X;new X;new X;new X;const rg="\\[\\]\\.:\\/",Qc="[^"+rg+"]",Ox="[^"+rg.replace("\\.","")+"]";new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Qc)+/(WCOD+)?/.source.replace("WCOD",Ox)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc)+"$");class fm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}new $e;new X;new X;new X;new X;new ot;new ot;new X;new pt;new pt;new X;new X;new X;new X;new _d;new yi;new X;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:td}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=td);const pm={type:"change"},Jc={type:"start"},mm={type:"end"},yl=new Xs,gm=new mi,Fx=Math.cos(70*T_.DEG2RAD);class ig extends ea{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ba.ROTATE,MIDDLE:ba.DOLLY,RIGHT:ba.PAN},this.touches={ONE:Ca.ROTATE,TWO:Ca.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(W){W.addEventListener("keydown",ke),this._domElementKeyEvents=W},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ke),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pm),i.update(),l=s.NONE},this.update=(function(){const W=new X,Ne=new Qi().setFromUnitVectors(e.up,new X(0,1,0)),Ke=Ne.clone().invert(),ct=new X,re=new Qi,Yt=new X,At=2*Math.PI;return function(kr=null){const In=i.object.position;W.copy(In).sub(i.target),W.applyQuaternion(Ne),f.setFromVector3(W),i.autoRotate&&l===s.NONE&&le(K(kr)),i.enableDamping?(f.theta+=p.theta*i.dampingFactor,f.phi+=p.phi*i.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let It=i.minAzimuthAngle,rn=i.maxAzimuthAngle;isFinite(It)&&isFinite(rn)&&(It<-Math.PI?It+=At:It>Math.PI&&(It-=At),rn<-Math.PI?rn+=At:rn>Math.PI&&(rn-=At),It<=rn?f.theta=Math.max(It,Math.min(rn,f.theta)):f.theta=f.theta>(It+rn)/2?Math.max(It,f.theta):Math.min(rn,f.theta)),f.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,f.phi)),f.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&I||i.object.isOrthographicCamera?f.radius=q(f.radius):f.radius=q(f.radius*d),W.setFromSpherical(f),W.applyQuaternion(Ke),In.copy(i.target).add(W),i.object.lookAt(i.target),i.enableDamping===!0?(p.theta*=1-i.dampingFactor,p.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(p.set(0,0,0),m.set(0,0,0));let Sr=!1;if(i.zoomToCursor&&I){let On=null;if(i.object.isPerspectiveCamera){const Xn=W.length();On=q(Xn*d);const sr=Xn-On;i.object.position.addScaledVector(V,sr),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Xn=new X(z.x,z.y,0);Xn.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Sr=!0;const sr=new X(z.x,z.y,0);sr.unproject(i.object),i.object.position.sub(sr).add(Xn),i.object.updateMatrixWorld(),On=W.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;On!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(On).add(i.object.position):(yl.origin.copy(i.object.position),yl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(yl.direction))<Fx?e.lookAt(i.target):(gm.setFromNormalAndCoplanarPoint(i.object.up,i.target),yl.intersectPlane(gm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Sr=!0);return d=1,I=!1,Sr||ct.distanceToSquared(i.object.position)>c||8*(1-re.dot(i.object.quaternion))>c||Yt.distanceToSquared(i.target)>0?(i.dispatchEvent(pm),ct.copy(i.object.position),re.copy(i.object.quaternion),Yt.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",He),i.domElement.removeEventListener("pointerdown",Se),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Ie),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ke),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=s.NONE;const c=1e-6,f=new fm,p=new fm;let d=1;const m=new X,v=new $e,_=new $e,y=new $e,b=new $e,T=new $e,x=new $e,C=new $e,M=new $e,S=new $e,V=new X,z=new $e;let I=!1;const O=[],te={};function K(W){return W!==null?2*Math.PI/60*i.autoRotateSpeed*W:2*Math.PI/60/60*i.autoRotateSpeed}function Z(W){const Ne=Math.abs(W)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*Ne)}function le(W){p.theta-=W}function F(W){p.phi-=W}const ae=(function(){const W=new X;return function(Ke,ct){W.setFromMatrixColumn(ct,0),W.multiplyScalar(-Ke),m.add(W)}})(),ne=(function(){const W=new X;return function(Ke,ct){i.screenSpacePanning===!0?W.setFromMatrixColumn(ct,1):(W.setFromMatrixColumn(ct,0),W.crossVectors(i.object.up,W)),W.multiplyScalar(Ke),m.add(W)}})(),he=(function(){const W=new X;return function(Ke,ct){const re=i.domElement;if(i.object.isPerspectiveCamera){const Yt=i.object.position;W.copy(Yt).sub(i.target);let At=W.length();At*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*Ke*At/re.clientHeight,i.object.matrix),ne(2*ct*At/re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(Ke*(i.object.right-i.object.left)/i.object.zoom/re.clientWidth,i.object.matrix),ne(ct*(i.object.top-i.object.bottom)/i.object.zoom/re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Me(W){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=W:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(W){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=W:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(W,Ne){if(!i.zoomToCursor)return;I=!0;const Ke=i.domElement.getBoundingClientRect(),ct=W-Ke.left,re=Ne-Ke.top,Yt=Ke.width,At=Ke.height;z.x=ct/Yt*2-1,z.y=-(re/At)*2+1,V.set(z.x,z.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(W){return Math.max(i.minDistance,Math.min(i.maxDistance,W))}function D(W){v.set(W.clientX,W.clientY)}function w(W){B(W.clientX,W.clientX),C.set(W.clientX,W.clientY)}function j(W){b.set(W.clientX,W.clientY)}function R(W){_.set(W.clientX,W.clientY),y.subVectors(_,v).multiplyScalar(i.rotateSpeed);const Ne=i.domElement;le(2*Math.PI*y.x/Ne.clientHeight),F(2*Math.PI*y.y/Ne.clientHeight),v.copy(_),i.update()}function A(W){M.set(W.clientX,W.clientY),S.subVectors(M,C),S.y>0?Me(Z(S.y)):S.y<0&&ie(Z(S.y)),C.copy(M),i.update()}function H(W){T.set(W.clientX,W.clientY),x.subVectors(T,b).multiplyScalar(i.panSpeed),he(x.x,x.y),b.copy(T),i.update()}function $(W){B(W.clientX,W.clientY),W.deltaY<0?ie(Z(W.deltaY)):W.deltaY>0&&Me(Z(W.deltaY)),i.update()}function k(W){let Ne=!1;switch(W.code){case i.keys.UP:W.ctrlKey||W.metaKey||W.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):he(0,i.keyPanSpeed),Ne=!0;break;case i.keys.BOTTOM:W.ctrlKey||W.metaKey||W.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):he(0,-i.keyPanSpeed),Ne=!0;break;case i.keys.LEFT:W.ctrlKey||W.metaKey||W.shiftKey?le(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):he(i.keyPanSpeed,0),Ne=!0;break;case i.keys.RIGHT:W.ctrlKey||W.metaKey||W.shiftKey?le(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):he(-i.keyPanSpeed,0),Ne=!0;break}Ne&&(W.preventDefault(),i.update())}function Q(W){if(O.length===1)v.set(W.pageX,W.pageY);else{const Ne=Ut(W),Ke=.5*(W.pageX+Ne.x),ct=.5*(W.pageY+Ne.y);v.set(Ke,ct)}}function ue(W){if(O.length===1)b.set(W.pageX,W.pageY);else{const Ne=Ut(W),Ke=.5*(W.pageX+Ne.x),ct=.5*(W.pageY+Ne.y);b.set(Ke,ct)}}function pe(W){const Ne=Ut(W),Ke=W.pageX-Ne.x,ct=W.pageY-Ne.y,re=Math.sqrt(Ke*Ke+ct*ct);C.set(0,re)}function Ee(W){i.enableZoom&&pe(W),i.enablePan&&ue(W)}function Re(W){i.enableZoom&&pe(W),i.enableRotate&&Q(W)}function Pe(W){if(O.length==1)_.set(W.pageX,W.pageY);else{const Ke=Ut(W),ct=.5*(W.pageX+Ke.x),re=.5*(W.pageY+Ke.y);_.set(ct,re)}y.subVectors(_,v).multiplyScalar(i.rotateSpeed);const Ne=i.domElement;le(2*Math.PI*y.x/Ne.clientHeight),F(2*Math.PI*y.y/Ne.clientHeight),v.copy(_)}function P(W){if(O.length===1)T.set(W.pageX,W.pageY);else{const Ne=Ut(W),Ke=.5*(W.pageX+Ne.x),ct=.5*(W.pageY+Ne.y);T.set(Ke,ct)}x.subVectors(T,b).multiplyScalar(i.panSpeed),he(x.x,x.y),b.copy(T)}function Te(W){const Ne=Ut(W),Ke=W.pageX-Ne.x,ct=W.pageY-Ne.y,re=Math.sqrt(Ke*Ke+ct*ct);M.set(0,re),S.set(0,Math.pow(M.y/C.y,i.zoomSpeed)),Me(S.y),C.copy(M);const Yt=(W.pageX+Ne.x)*.5,At=(W.pageY+Ne.y)*.5;B(Yt,At)}function de(W){i.enableZoom&&Te(W),i.enablePan&&P(W)}function ce(W){i.enableZoom&&Te(W),i.enableRotate&&Pe(W)}function Se(W){i.enabled!==!1&&(O.length===0&&(i.domElement.setPointerCapture(W.pointerId),i.domElement.addEventListener("pointermove",Le),i.domElement.addEventListener("pointerup",be)),Qe(W),W.pointerType==="touch"?Ze(W):Fe(W))}function Le(W){i.enabled!==!1&&(W.pointerType==="touch"?Pt(W):Xe(W))}function be(W){Je(W),O.length===0&&(i.domElement.releasePointerCapture(W.pointerId),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(mm),l=s.NONE}function Fe(W){let Ne;switch(W.button){case 0:Ne=i.mouseButtons.LEFT;break;case 1:Ne=i.mouseButtons.MIDDLE;break;case 2:Ne=i.mouseButtons.RIGHT;break;default:Ne=-1}switch(Ne){case ba.DOLLY:if(i.enableZoom===!1)return;w(W),l=s.DOLLY;break;case ba.ROTATE:if(W.ctrlKey||W.metaKey||W.shiftKey){if(i.enablePan===!1)return;j(W),l=s.PAN}else{if(i.enableRotate===!1)return;D(W),l=s.ROTATE}break;case ba.PAN:if(W.ctrlKey||W.metaKey||W.shiftKey){if(i.enableRotate===!1)return;D(W),l=s.ROTATE}else{if(i.enablePan===!1)return;j(W),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&i.dispatchEvent(Jc)}function Xe(W){switch(l){case s.ROTATE:if(i.enableRotate===!1)return;R(W);break;case s.DOLLY:if(i.enableZoom===!1)return;A(W);break;case s.PAN:if(i.enablePan===!1)return;H(W);break}}function Ie(W){i.enabled===!1||i.enableZoom===!1||l!==s.NONE||(W.preventDefault(),i.dispatchEvent(Jc),$(W),i.dispatchEvent(mm))}function ke(W){i.enabled===!1||i.enablePan===!1||k(W)}function Ze(W){switch(Tn(W),O.length){case 1:switch(i.touches.ONE){case Ca.ROTATE:if(i.enableRotate===!1)return;Q(W),l=s.TOUCH_ROTATE;break;case Ca.PAN:if(i.enablePan===!1)return;ue(W),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(i.touches.TWO){case Ca.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(W),l=s.TOUCH_DOLLY_PAN;break;case Ca.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Re(W),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&i.dispatchEvent(Jc)}function Pt(W){switch(Tn(W),l){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Pe(W),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;P(W),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;de(W),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ce(W),i.update();break;default:l=s.NONE}}function He(W){i.enabled!==!1&&W.preventDefault()}function Qe(W){O.push(W.pointerId)}function Je(W){delete te[W.pointerId];for(let Ne=0;Ne<O.length;Ne++)if(O[Ne]==W.pointerId){O.splice(Ne,1);return}}function Tn(W){let Ne=te[W.pointerId];Ne===void 0&&(Ne=new $e,te[W.pointerId]=Ne),Ne.set(W.pageX,W.pageY)}function Ut(W){const Ne=W.pointerId===O[0]?O[1]:O[0];return te[Ne]}i.domElement.addEventListener("contextmenu",He),i.domElement.addEventListener("pointerdown",Se),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Ie,{passive:!1}),this.update()}}const yr=.1,kx="(max-width: 768px), (pointer: coarse)";function wd(){if(typeof window>"u")return!1;try{return window.matchMedia(kx).matches}catch{return window.innerWidth<=768}}function zx(){return wd()?window.innerHeight>=window.innerWidth?100:92:75}function Bx(){return wd()?-.58:-.35}function Hx(){return wd()?.12:.08}function Cl(a,e){a.fov=zx(),a.updateProjectionMatrix(),e.rotateSpeed=Bx(),e.dampingFactor=Hx()}function Gx(){return new URLSearchParams(window.location.search).get("debug")==="1"}function Vx(a){const e=a.object;if(e.includes("שרגא")||e.includes("מיא")||e.includes("קולמוס")||e.includes("ספסלא"))return .55;if(e.includes("רבי")||e.includes("ספרא")||e.includes("תלמידא"))return .68;if(e.includes("ארון")||e.includes("חלון")||e.includes("תרעא"))return .64;const n=a.hotspot.radiusPx??70;return n<=58?.52:n>=85?.68:.6}function ag({riddle:a,onDiscover:e,onInteraction:n,onHoverChange:i,glowMode:s="none",debug:l}){const c=me.useRef(null),f=a.hotspot.radiusPx??70,d=Math.max(f,48)*2,m=Vx(a)*(s==="boosted"?1.35:1),v=Math.round(d*m),_=l===!0||l==null&&Gx(),[y,b]=me.useState(!1),[T,x]=me.useState(!1),C=me.useRef(!1),M=me.useCallback(()=>{b(!0),i==null||i(!0),n==null||n()},[i,n]),S=me.useCallback(()=>{b(!1),x(!1),i==null||i(!1)},[i]);me.useEffect(()=>{if(!y||C.current)return;const z=I=>{var O;(O=c.current)!=null&&O.contains(I.target)||S()};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[y,S]);const V=me.useCallback(()=>{e(),S()},[e,S]);return L.jsxs("div",{className:"hotspot-wrap",style:{width:d,height:d},children:[L.jsx("div",{className:["hotspot-glow",y?"hotspot-glow--on":"",!y&&s==="idle"?"hotspot-glow--idle":"",!y&&s==="boosted"?"hotspot-glow--boosted":""].filter(Boolean).join(" "),style:{width:v,height:Math.round(v*1.25)},"aria-hidden":"true"}),L.jsx("button",{ref:c,type:"button",className:["hotspot-hit",_?"hotspot-hit--debug":""].filter(Boolean).join(" "),style:{width:d,height:d},onPointerDown:z=>{z.stopPropagation(),z.pointerType==="touch"&&(C.current=!0)},onPointerEnter:()=>{C.current||M()},onPointerLeave:()=>{C.current||S()},onFocus:()=>M(),onBlur:()=>S(),onClick:z=>{if(z.stopPropagation(),C.current){if(!T){z.preventDefault(),x(!0),M();return}V();return}V()},"aria-label":`${a.object} — חפשו את החפץ כדי לפתוח חידה`})]})}function sg({show:a}){const[e,n]=me.useState(a);return me.useEffect(()=>{if(!a){n(!1);return}n(!0);const i=window.setTimeout(()=>n(!1),3500);return()=>window.clearTimeout(i)},[a]),e?L.jsx("div",{className:"search-hint-bubble",role:"status",children:"🔍 חפשו את הארון הזוהר — גררו להסתכל, הקישו על החפץ"}):null}function jx(){return new URLSearchParams(window.location.search).get("debug")==="1"}function Wx(a,e,n,i){const[s,l,c]=Xa(n,i);a.position.set(-s*yr,-l*yr,-c*yr),e.target.set(0,0,0),e.update()}function Xx({riddles:a,activeIndex:e,solvedCount:n,onHotspotClick:i,lockUnlocked:s,onEnterInner:l,onWebGLFail:c,activeGlowMode:f="idle"}){const p=me.useRef(null),d=me.useRef(null),m=me.useRef(null),v=me.useRef([]),_=me.useRef(null),y=me.useRef(null),b=me.useRef(null),T=me.useRef(e),x=me.useRef(s),[C,M]=me.useState(!1),[S,V]=me.useState(!1),z=jx();T.current=e,x.current=s;const I=e===0&&n===0&&!s,O=me.useCallback((Z,le)=>{const F=y.current,ae=b.current;!F||!ae||Wx(F,ae,Z,le)},[]);me.useEffect(()=>{if(z)return window.__lookAtRiddle=Z=>{const le=a[Z];le&&O(le.hotspot.yaw,le.hotspot.pitch)},()=>{delete window.__lookAtRiddle}},[z,O,a]);const te=me.useCallback(Z=>{V(Z);const le=b.current;le&&(le.enableRotate=!Z)},[]);me.useEffect(()=>{const Z=p.current,le=d.current;if(!Z||!le)return;let F;try{F=new Ed({canvas:le,antialias:!0,alpha:!1})}catch{c();return}const ae=new tg,ne=new Dn(75,1,.1,1100);y.current=ne;const he=new ig(ne,le);b.current=he,he.enableZoom=!1,he.enablePan=!1,he.enableDamping=!0,he.minDistance=yr,he.maxDistance=yr,he.target.set(0,0,0),Cl(ne,he);const Me=k=>{k.cancelable&&k.preventDefault()};le.addEventListener("touchmove",Me,{passive:!1});const ie=new Ol(500,64,48);ie.scale(-1,1,1);let B=null,q=!1;new ng().load(Tm,k=>{if(q){k.dispose();return}k.colorSpace=zt,B=new Wn(ie,new Ul({map:k})),ae.add(B),M(!0)},void 0,()=>{q||c()});const w=()=>{const k=Z.clientWidth,Q=Z.clientHeight;k<2||Q<2||(Cl(ne,he),ne.aspect=k/Q,ne.updateProjectionMatrix(),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.setSize(k,Q,!1))},j=new ResizeObserver(w);j.observe(Z),w();const R=new X,A=()=>{const k=Z.clientWidth,Q=Z.clientHeight;if(k<2||Q<2)return;const ue=T.current,pe=x.current,Ee=!pe&&ue<a.length?a[ue]:null,Re=m.current;if(Ee&&Re){const[P,Te,de]=Xa(Ee.hotspot.yaw,Ee.hotspot.pitch);R.set(P,Te,de).project(ne);const ce=R.z<1&&R.z>-1;Re.style.left=`${(R.x*.5+.5)*k}px`,Re.style.top=`${(-R.y*.5+.5)*Q}px`,Re.style.display=ce?"":"none"}else Re&&(Re.style.display="none");a.forEach((P,Te)=>{const de=v.current[Te];if(!de)return;const[ce,Se,Le]=Xa(P.hotspot.yaw,P.hotspot.pitch);R.set(ce,Se,Le).project(ne);const be=R.z<1&&R.z>-1;de.style.left=`${(R.x*.5+.5)*k}px`,de.style.top=`${(-R.y*.5+.5)*Q}px`,de.style.display=be?"":"none"});const Pe=_.current;if(Pe)if(pe){const[P,Te,de]=Xa(0,-25);R.set(P,Te,de).project(ne);const ce=R.z<1&&R.z>-1;Pe.style.left=`${(R.x*.5+.5)*k}px`,Pe.style.top=`${(-R.y*.5+.5)*Q}px`,Pe.style.display=ce?"":"none"}else Pe.style.display="none"};let H=0;const $=()=>{H=requestAnimationFrame($),he.update(),F.render(ae,ne),A()};return $(),()=>{var k;if(q=!0,cancelAnimationFrame(H),j.disconnect(),le.removeEventListener("touchmove",Me),he.dispose(),ie.dispose(),B){const Q=B.material;(k=Q.map)==null||k.dispose(),Q.dispose()}F.dispose(),y.current=null,b.current=null}},[c,a]),me.useEffect(()=>{if(!C||!I)return;const Z=a[0];if(!Z)return;const le=window.setTimeout(()=>{O(Z.hotspot.yaw,Z.hotspot.pitch)},300);return()=>window.clearTimeout(le)},[C,I,a,O]);const K=!s&&e<a.length?a[e]:null;return L.jsxs("div",{ref:p,className:"panorama-viewport panorama-viewport--360",children:[L.jsx("canvas",{ref:d,className:"panorama-canvas","aria-hidden":"true"}),!C&&L.jsx("div",{className:"panorama-loading",children:"טוען פנורמה…"}),!s&&e<a.length&&L.jsx("div",{className:"panorama-scene-dim","aria-hidden":"true"}),L.jsx(sg,{show:I&&C}),L.jsxs("div",{className:`panorama-hotspots-layer${S?" panorama-hotspots-layer--hover":""}`,children:[K&&L.jsx("div",{ref:Z=>{m.current=Z},className:"hotspot hotspot--active",children:L.jsx(ag,{riddle:K,onDiscover:()=>i(e),onHoverChange:te,glowMode:f})},K.id),z&&a.map((Z,le)=>L.jsx("div",{ref:F=>{v.current[le]=F},className:"hotspot-debug-mark","aria-hidden":"true",children:Z.id},`dbg-${Z.id}`)),L.jsxs("button",{type:"button",ref:_,className:"inner-door-open",style:{display:s?"":"none"},onClick:l,disabled:!l,"aria-label":"כניסה לחדר הפנימי",children:[L.jsx("span",{className:"inner-door-glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-door-label",children:"לחדר הפנימי"})]})]})]})}function Yx(a){return!!(a!=null&&a.closest(".hotspot-hit, .hotspot-wrap"))}function qx({riddles:a,activeIndex:e,solvedCount:n,onHotspotClick:i,lockUnlocked:s,onEnterInner:l,activeGlowMode:c="idle"}){const f=me.useRef(null),[p,d]=me.useState(!1),m=me.useRef({active:!1,startX:0,scrollLeft:0}),v=e===0&&n===0&&!s,_=me.useCallback(C=>{var O;const M=f.current;if(!M)return;const S=(O=a[C])==null?void 0:O.hotspot;if(!S)return;const V=M.querySelector(".panorama-inner");if(!V)return;const I=(S.flatX??(S.yaw+180)/360*100)/100*V.offsetWidth-M.clientWidth/2;M.scrollTo({left:Math.max(0,I),behavior:"smooth"})},[a]);me.useEffect(()=>{if(!v)return;const C=window.setTimeout(()=>_(0),300);return()=>window.clearTimeout(C)},[v,_]);const y=C=>{if(Yx(C.target))return;const M=f.current;M&&(m.current={active:!0,startX:C.clientX,scrollLeft:M.scrollLeft},M.setPointerCapture(C.pointerId))},b=C=>{if(!m.current.active||!f.current)return;const M=C.clientX-m.current.startX;f.current.scrollLeft=m.current.scrollLeft-M},T=C=>{var M;m.current.active=!1,(M=f.current)==null||M.releasePointerCapture(C.pointerId)},x=!s&&e<a.length?a[e]:null;return L.jsxs("div",{ref:f,className:"panorama-viewport panorama-viewport--flat",onPointerDown:y,onPointerMove:b,onPointerUp:T,onPointerCancel:T,"aria-label":"חדר בית המדרש — גררו לצדדים (מצב גיבוי)",children:[L.jsx(sg,{show:v}),L.jsxs("div",{className:"panorama-inner",children:[L.jsxs("div",{className:`panorama-bg ${p?"panorama-bg--fallback":""}`,children:[!p&&L.jsx("img",{src:Tm,alt:"",className:"panorama-img",onError:()=>d(!0),draggable:!1}),p&&L.jsx("div",{className:"panorama-fallback-art","aria-hidden":"true"})]}),!s&&e<a.length&&L.jsx("div",{className:"panorama-scene-dim","aria-hidden":"true"}),x&&(()=>{const C=x.hotspot.flatX??(x.hotspot.yaw+180)/360*100,M=x.hotspot.flatY??50-x.hotspot.pitch/90*50;return L.jsx("div",{className:"hotspot hotspot--active",style:{left:`${C}%`,top:`${M}%`},children:L.jsx(ag,{riddle:x,onDiscover:()=>i(e),glowMode:c})},x.id)})(),s&&L.jsxs("button",{type:"button",className:"inner-door-open",style:{left:"50%",top:"85%"},onClick:l,disabled:!l,"aria-label":"כניסה לחדר הפנימי",children:[L.jsx("span",{className:"inner-door-glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-door-label",children:"לחדר הפנימי"})]})]})]})}function Kx(a){const[e,n]=me.useState(!1);return L.jsxs("div",{className:"panorama-shell",children:[e?L.jsx(qx,{...a}):L.jsx(Xx,{...a,onWebGLFail:()=>n(!0)}),L.jsx("p",{className:"pan-hint",children:e?"גררו ימינה ושמאלה (מצב גיבוי — ללא WebGL)":"גררו בכל הכיוונים כדי להסתכל סביב החדר"})]})}function $x({riddle:a,onCorrect:e,onClose:n}){const[i,s]=me.useState(!1),[l,c]=me.useState(!1),f=me.useMemo(()=>u_([...a.options]),[a.id]);me.useEffect(()=>{s(!1),c(!1)},[a.id]);const p=d=>{d===a.answer?e():(c(!0),setTimeout(()=>c(!1),1400))};return L.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:n,children:L.jsxs("div",{className:"riddle-modal",role:"dialog","aria-modal":"true","aria-labelledby":"riddle-title",onClick:d=>d.stopPropagation(),children:[L.jsx("button",{type:"button",className:"modal-close",onClick:n,"aria-label":"סגירה",children:"×"}),L.jsx("p",{className:"riddle-object",children:a.object}),L.jsx("h2",{id:"riddle-title",className:"riddle-aramaic phrase-font",children:a.aramaicDisplay??a.aramaic}),L.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>s(d=>!d),"aria-expanded":i,children:i?"הסתר תרגום לעברית":"הצג תרגום לעברית"}),i&&L.jsx("p",{className:"riddle-hebrew",children:a.hebrewDisplay??a.hebrew}),L.jsx("div",{className:"riddle-options",role:"group","aria-label":"בחרו תשובה",children:f.map(d=>L.jsx("button",{type:"button",className:"riddle-option phrase-font",onClick:()=>p(d),children:Mm(a,d)},d))}),l&&L.jsx("p",{className:"riddle-wrong",role:"alert",children:"נסו שוב — התשובה לא נכונה"})]})})}const Zx=[{letter:"א",value:1},{letter:"ב",value:2},{letter:"ג",value:3},{letter:"ד",value:4},{letter:"ה",value:5},{letter:"ו",value:6},{letter:"ז",value:7},{letter:"ח",value:8},{letter:"ט",value:9},{letter:"י",value:10},{letter:"כ",value:20},{letter:"ך",value:20,note:"סופית"},{letter:"ל",value:30},{letter:"מ",value:40},{letter:"ם",value:40,note:"סופית"},{letter:"נ",value:50},{letter:"ן",value:50,note:"סופית"},{letter:"ס",value:60},{letter:"ע",value:70},{letter:"פ",value:80},{letter:"ף",value:80,note:"סופית"},{letter:"צ",value:90},{letter:"ץ",value:90,note:"סופית"},{letter:"ק",value:100},{letter:"ר",value:200},{letter:"ש",value:300},{letter:"ת",value:400}];function Qx({letters:a,total:e,dialDigit:n,onComplete:i,dismissOnly:s=!1}){const[l,c]=me.useState("letters"),[f,p]=me.useState(0);return me.useEffect(()=>{c("letters"),p(0);let d=0;const m=window.setInterval(()=>{d+=1,p(d),d>=a.length&&(window.clearInterval(m),window.setTimeout(()=>c("sum"),500))},450);return()=>window.clearInterval(m)},[a]),me.useEffect(()=>{if(l==="sum"){const d=window.setTimeout(()=>c("digit"),900);return()=>window.clearTimeout(d)}if(l==="digit"&&!s){const d=window.setTimeout(()=>{c("done"),i()},800);return()=>window.clearTimeout(d)}},[l,i,s]),L.jsx("div",{className:"gem-breakdown-overlay",role:"dialog","aria-label":"פירוק גימטריה",onClick:s?i:void 0,children:L.jsxs("div",{className:"gem-breakdown-card",onClick:s?d=>d.stopPropagation():void 0,children:[L.jsx("h3",{children:s?"רמז — פירוק גימטריה":"פירוק גימטריה"}),L.jsx("div",{className:"gem-letters",children:a.slice(0,f).map(([d,m],v)=>L.jsxs("div",{className:"gem-letter-row pop-in",children:[L.jsx("span",{className:"phrase-font gem-letter",children:d}),L.jsx("span",{className:"gem-eq",children:"="}),L.jsx("span",{className:"gem-value",children:m})]},`${d}-${v}`))}),(l==="sum"||l==="digit"||l==="done")&&L.jsxs("div",{className:"gem-sum pop-in",children:[L.jsx("span",{children:"סה״כ"}),L.jsx("strong",{children:e})]}),(l==="digit"||l==="done")&&L.jsxs("div",{className:"gem-digit pop-in",children:[L.jsx("span",{children:"ספרת המנעול"}),L.jsx("strong",{className:"gem-digit-num",children:n})]}),s&&(l==="digit"||l==="done")&&L.jsx("button",{type:"button",className:"btn-secondary gem-breakdown-close",onClick:i,children:"סגירה — חזרה לחישוב"})]})})}function Jx({riddle:a=null,lockIndex:e=null,lockWrongAttempts:n=0,preferOpen:i=!1}){const[s,l]=me.useState(!1),[c,f]=me.useState([]),[p,d]=me.useState(!1),m=a?Mm(a,a.answer):null,v=me.useMemo(()=>c.reduce((x,C)=>x+C.value,0),[c]),_=c.length>0?c_(v):null;me.useEffect(()=>{i&&l(!0)},[i,a==null?void 0:a.id]),me.useEffect(()=>{f([]),d(!1)},[a==null?void 0:a.id]);const y=me.useCallback((x,C)=>{f(M=>[...M,{letter:x,value:C}])},[]),b=me.useCallback(()=>{f(x=>x.slice(0,-1))},[]),T=me.useCallback(()=>{f([])},[]);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:`gem-calc-drawer${s?" gem-calc-drawer--open":""}`,"data-open":s?"true":"false",children:[L.jsxs("aside",{id:"gematria-calculator",className:"gem-calc-panel",role:"dialog","aria-label":"מחשבון גימטריה","aria-hidden":!s,children:[L.jsxs("header",{className:"gem-calc-header",children:[L.jsxs("div",{className:"gem-calc-header-row",children:[L.jsx("h3",{className:"gem-calc-title",children:"מחשבון גימטריה"}),L.jsx("button",{type:"button",className:"gem-calc-close",onClick:()=>l(!1),"aria-label":"סגור מחשבון",children:"✕"})]}),m&&L.jsx("p",{className:"gem-calc-word phrase-font","aria-label":"מילת התשובה",children:m})]}),L.jsxs("div",{className:"gem-calc-display","aria-live":"polite","aria-label":"תצוגת חישוב",children:[L.jsx("div",{className:"gem-calc-tape",dir:"rtl",children:c.length===0?L.jsx("span",{className:"gem-calc-tape-empty",children:"לחצו אותיות…"}):c.map((x,C)=>L.jsxs("span",{className:"gem-calc-tape-item",children:[C>0&&L.jsx("span",{className:"gem-calc-tape-plus",children:"+"}),L.jsx("span",{className:"gem-calc-tape-letter phrase-font",children:x.letter}),L.jsxs("span",{className:"gem-calc-tape-val",children:["(",x.value,")"]})]},`${x.letter}-${C}`))}),L.jsxs("div",{className:"gem-calc-total-row",children:[L.jsx("span",{className:"gem-calc-total-label",children:"סה״כ"}),L.jsx("span",{className:"gem-calc-total-value",children:c.length>0?v:"—"})]}),_!==null&&L.jsxs("p",{className:"gem-calc-last-digit",children:["ספרה אחרונה: ",L.jsx("strong",{children:_})]})]}),L.jsxs("div",{className:"gem-calc-toolbar",children:[L.jsx("button",{type:"button",className:"gem-calc-action-btn",onClick:b,"aria-label":"מחק אות אחרונה",children:"⌫"}),L.jsx("button",{type:"button",className:"gem-calc-action-btn gem-calc-action-btn--clear",onClick:T,children:"נקה"})]}),L.jsx("div",{className:"gem-calc-keypad",role:"group","aria-label":"אותיות גימטריה",children:Zx.map(({letter:x,value:C,note:M})=>L.jsxs("button",{type:"button",className:"gem-calc-key",onClick:()=>y(x,C),"aria-label":`${x} — ${C}${M?` (${M})`:""}`,children:[L.jsx("span",{className:"gem-calc-key-letter phrase-font",children:x}),L.jsx("span",{className:"gem-calc-key-val",children:C})]},x))}),e!==null&&L.jsxs("p",{className:"gem-calc-lock-hint",children:["הזינו את הספרה במנעול (גלגל ",e+1,")"]}),a&&n>=2&&!p&&L.jsx("button",{type:"button",className:"btn-secondary gem-calc-hint-btn",onClick:()=>d(!0),children:"רמז: פירוק גימטריה"})]}),L.jsx("button",{type:"button",className:"gem-calc-tab",onClick:()=>l(x=>!x),"aria-expanded":s,"aria-controls":"gematria-calculator",children:L.jsx("span",{className:"gem-calc-tab-label",children:"גימטריה"})})]}),p&&a&&L.jsx(Qx,{letters:a.letters,total:a.total,dialDigit:a.dialDigit,onComplete:()=>d(!1),dismissOnly:!0})]})}function vm(a){return-90+a*36}function _m(a,e){const n=e*Math.PI/180;return{x:Math.cos(n)*a,y:Math.sin(n)*a}}function xm(a,e,n){const i=n.left+n.width/2,s=n.top+n.height/2;return Math.atan2(e-s,a-i)*180/Math.PI}function ey(a){let e=a;for(;e>180;)e-=360;for(;e<-180;)e+=360;return e}function ty({digits:a,rollingIndex:e,rollingDigit:n,unlocked:i,interactiveIndex:s=null,onDigitPick:l,wrongFlash:c=!1}){const f=me.useId().replace(/:/g,""),[p,d]=me.useState(!1),[m,v]=me.useState(!1),[_,y]=me.useState(0),[b,T]=me.useState(0),[x,C]=me.useState(!1),M=me.useRef(0),S=me.useRef(0),V=me.useRef(null),z=me.useRef(null),I=s!==null&&!!l,O=I||e!==null,te=me.useCallback((D,w=0)=>{const j=M.current;let R=D-j;R>5&&(R-=10),R<-5&&(R+=10),R+=w*10,M.current=D,y(D),T(A=>{const H=A-R*36;return S.current=H,H})},[]),K=me.useCallback(D=>{S.current=D,T(D);const w=(Math.round(-D/36)%10+10)%10;M.current=w,y(w)},[]),Z=me.useCallback(D=>{te((M.current+D+10)%10)},[te]);me.useEffect(()=>{if(i){v(!0);const D=window.setTimeout(()=>v(!1),1200);return()=>window.clearTimeout(D)}},[i]),me.useEffect(()=>{e!==null&&n!==null&&te(n,n%2===0?1:-1)},[e,n,te]),me.useEffect(()=>{if(!I)return;const D=w=>{w.key==="ArrowLeft"||w.key==="ArrowUp"?(w.preventDefault(),Z(-1)):w.key==="ArrowRight"||w.key==="ArrowDown"?(w.preventDefault(),Z(1)):w.key==="Enter"&&(w.preventDefault(),l==null||l(M.current))};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[I,l,Z]),me.useEffect(()=>{if(!x)return;const D=j=>{const R=z.current,A=V.current;if(!(R!=null&&R.active)||!A)return;const H=xm(j.clientX,j.clientY,A.getBoundingClientRect()),$=ey(H-R.lastAngle);Math.abs($)>.4&&(R.moved=!0),R.lastAngle=H,K(S.current+$)},w=()=>{const j=z.current;if(z.current=null,C(!1),!j)return;const R=(Math.round(-S.current/36)%10+10)%10;te(R)};return window.addEventListener("pointermove",D),window.addEventListener("pointerup",w),window.addEventListener("pointercancel",w),()=>{window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w)}},[x,K,te]);const le=D=>{if(!I||D.target.closest(".round-dial-confirm"))return;D.preventDefault(),D.stopPropagation();const w=V.current;if(!w)return;const j=xm(D.clientX,D.clientY,w.getBoundingClientRect());z.current={active:!0,lastAngle:j,moved:!1},C(!0);try{w.setPointerCapture(D.pointerId)}catch{}},F=()=>{I&&(l==null||l(M.current))},ae=["combination-lock",i?"combination-lock--open":"",m?"combination-lock--flash":"",c?"combination-lock--wrong":"",I?"combination-lock--awaiting":""].filter(Boolean).join(" "),ne=`brass-${f}`,he=`hasp-${f}`,Me=`dark-${f}`,ie=`grain-${f}`,B=a.filter(D=>D!==null).length,q=55.65;return L.jsxs("div",{className:`lock-drawer${p?" lock-drawer--open":""}`,"data-open":p?"true":"false",children:[L.jsx("button",{type:"button",className:"lock-drawer-tab",onClick:()=>d(D=>!D),"aria-expanded":p,"aria-controls":"combination-lock-panel",children:L.jsx("span",{className:"lock-drawer-tab-label",children:"מנעול"})}),L.jsxs("aside",{id:"combination-lock-panel",className:`lock-drawer-panel ${ae}`,role:"dialog","aria-label":"מנעול קומבינציה עגול","aria-hidden":!p,children:[L.jsxs("header",{className:"lock-drawer-header",children:[L.jsx("h3",{className:"lock-drawer-title",children:"מנעול נחושת"}),L.jsx("button",{type:"button",className:"lock-drawer-close",onClick:()=>d(!1),"aria-label":"סגור מנעול",children:"✕"})]}),L.jsxs("div",{className:"lock-body",children:[L.jsxs("div",{className:"round-lock","aria-label":"מנעול קומבינציה — עשר ספרות",children:[L.jsxs("svg",{className:"round-lock-svg",viewBox:"0 0 220 248","aria-hidden":"true",children:[L.jsxs("defs",{children:[L.jsxs("linearGradient",{id:ne,x1:"20%",y1:"0%",x2:"80%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#f0dfa0"}),L.jsx("stop",{offset:"22%",stopColor:"#d4af37"}),L.jsx("stop",{offset:"48%",stopColor:"#b07a2e"}),L.jsx("stop",{offset:"75%",stopColor:"#6e451c"}),L.jsx("stop",{offset:"100%",stopColor:"#3a2412"})]}),L.jsxs("linearGradient",{id:Me,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#2a1810"}),L.jsx("stop",{offset:"100%",stopColor:"#0c0805"})]}),L.jsxs("linearGradient",{id:he,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#dcc896"}),L.jsx("stop",{offset:"45%",stopColor:"#8a7350"}),L.jsx("stop",{offset:"100%",stopColor:"#3e2a16"})]}),L.jsxs("filter",{id:ie,x:"-8%",y:"-8%",width:"116%",height:"116%",children:[L.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.7",numOctaves:"2",result:"n"}),L.jsx("feColorMatrix",{in:"n",type:"saturate",values:"0",result:"g"}),L.jsx("feComponentTransfer",{in:"g",result:"soft",children:L.jsx("feFuncA",{type:"linear",slope:"0.35"})}),L.jsx("feBlend",{in:"SourceGraphic",in2:"soft",mode:"overlay"})]})]}),L.jsx("path",{d:"M78 78 V48 C78 28 96 16 110 16 C124 16 142 28 142 48 V78",fill:"none",stroke:`url(#${he})`,strokeWidth:"14",strokeLinecap:"round",filter:`url(#${ie})`}),L.jsx("path",{d:"M78 78 V48 C78 28 96 16 110 16 C124 16 142 28 142 48 V78",fill:"none",stroke:"#2a1810",strokeWidth:"3",strokeLinecap:"round",opacity:"0.4"}),L.jsxs("g",{transform:"translate(0, 28)",children:[L.jsx("circle",{cx:"110",cy:"110",r:"106",fill:`url(#${ne})`,filter:`url(#${ie})`}),L.jsx("circle",{cx:"110",cy:"110",r:"102",fill:"none",stroke:"#f0dfa0",strokeWidth:"1.4",opacity:"0.55"}),L.jsx("circle",{cx:"110",cy:"110",r:"96",fill:"none",stroke:"#3e2718",strokeWidth:"1.2",opacity:"0.7"}),L.jsx("circle",{cx:"110",cy:"110",r:"70",fill:`url(#${Me})`}),L.jsx("circle",{cx:"110",cy:"110",r:"68",fill:"none",stroke:"#6b4a22",strokeWidth:"1.2",opacity:"0.8"}),Array.from({length:40},(D,w)=>{const j=(w*9-90)*Math.PI/180,R=w%4===0?86:90;return L.jsx("line",{x1:110+Math.cos(j)*R,y1:110+Math.sin(j)*R,x2:110+Math.cos(j)*94,y2:110+Math.sin(j)*94,stroke:"#3e2718",strokeWidth:w%4===0?1.6:.8,opacity:"0.55"},w)}),[45,135,225,315].map(D=>{const w=D*Math.PI/180,j=110+Math.cos(w)*100,R=110+Math.sin(w)*100;return L.jsxs("g",{children:[L.jsx("circle",{cx:j,cy:R,r:"3.2",fill:"#2a1810",opacity:"0.7"}),L.jsx("circle",{cx:j,cy:R,r:"2",fill:"#b8924a"})]},D)})]})]}),L.jsx("div",{className:"round-lock-slots",style:{top:`${q}%`},children:a.map((D,w)=>{const j=_m(40,vm(w)),R=e===w&&n!==null,A=s===w&&!!l,H=R?n:D;return L.jsxs("button",{type:"button",className:["round-slot",D!==null?"round-slot--set":"",A?"round-slot--interactive":"",R?"round-slot--rolling":""].filter(Boolean).join(" "),style:{left:`${50+j.x}%`,top:`${50+j.y}%`},disabled:!A,onClick:()=>{A&&F()},"aria-label":A?`גלגל ${w+1} — פעיל`:D!==null?`גלגל ${w+1}: ${D}`:`גלגל ${w+1}: ריק`,children:[L.jsx("span",{className:"round-slot-index",children:w+1}),L.jsx("span",{className:"round-slot-digit",children:H===null?"·":H})]},w)})}),L.jsxs("div",{ref:V,className:`round-dial-wrap${I?" round-dial-wrap--interactive":""}${x?" round-dial-wrap--dragging":""}`,style:{top:`${q}%`},onPointerDown:le,children:[L.jsx("div",{className:"round-dial-marker","aria-hidden":"true"}),L.jsx("div",{className:`round-dial${I?" round-dial--live":""}${e!==null||x?" round-dial--spinning":""}`,style:{transform:`rotate(${b}deg)`,transition:x?"none":void 0},"aria-hidden":!O,children:L.jsx("div",{className:"round-dial-face",children:Array.from({length:10},(D,w)=>{const j=_m(38,vm(w));return L.jsx("span",{className:`round-dial-tick${_===w?" round-dial-tick--active":""}`,style:{left:`${50+j.x}%`,top:`${50+j.y}%`,transform:`translate(-50%, -50%) rotate(${-b}deg)`},"aria-hidden":"true",children:w},w)})})}),L.jsxs("div",{className:"round-dial-hub",children:[L.jsx("span",{className:"round-dial-value","aria-live":"polite",children:_}),I&&L.jsx("button",{type:"button",className:"round-dial-confirm",onPointerDown:D=>{D.stopPropagation(),D.preventDefault()},onClick:D=>{D.stopPropagation(),F()},children:"הזן"})]})]})]}),I&&L.jsxs("div",{className:"round-dial-controls",children:[L.jsx("button",{type:"button",className:"round-nudge",onClick:()=>Z(-1),"aria-label":"סובבו אחורה",children:"−"}),L.jsxs("p",{className:"round-dial-hint","aria-hidden":"true",children:["סובבו · ",_]}),L.jsx("button",{type:"button",className:"round-nudge",onClick:()=>Z(1),"aria-label":"סובבו קדימה",children:"+"})]})]}),L.jsxs("p",{className:"lock-progress","aria-hidden":"true",children:[B,"/10"]}),I&&L.jsxs("p",{className:"lock-manual-prompt",role:"status",children:["גלגל ",s+1," — סובבו את החוגה ואז לחצו הזן"]}),c&&L.jsx("p",{className:"lock-wrong-msg",role:"alert",children:"לא נכון — בדקו במחשבון והזינו שוב"}),i&&L.jsx("p",{className:"lock-open-msg",role:"status",children:"המנעול נפתח!"})]})]})}function og(a){return a.replace(/[\u0591-\u05C7]/g,"")}function ny(a){return a.replace(/ך/g,"כ").replace(/ם/g,"מ").replace(/ן/g,"נ").replace(/ף/g,"פ").replace(/ץ/g,"צ")}function Td(a){const e=og(a).replace(/[\u200f\u200e\u200d]/g,"").replace(/['׳״"`]/g,"").trim();return ny(e)}function ry(a){return og(a).split(/[^\u0590-\u05FFa-zA-Z]+/u).map(i=>i.trim()).filter(Boolean)}const Gs=10,iy=["שלמא","דיו","נוצה","קלף","מגילתא","פתורא","ביתא","יומא","נהורא","אורייתא","חכימא","שמע","גמר","כתב","קרי","עייל","נפק","טבא","רבא","מאן","מאי","ליכא","אית","הכא","תמן","ברא","אבוה","אימא","מלכא","ארעא","שמיא","נורא","נהרא","טורא","שוקא","עמודא","ערסא","חמרא","נהמא","כלבא","גברא","פתגמא","מילתא","קולמוס","ספסלא","תרעא","שרגא","מיא","ספרא","רבי","תלמידא","ארון","חלון"];function ay(){const a=[];for(const e of Xi)a.push(e.answer,e.object,...e.options);return a}function sy(){const a=new Set;for(const e of[...ay(),...iy]){const n=Td(e);n.length>=2&&a.add(n)}return a}const oy=sy(),ly=["שרגא","מיא","ספרא","רבי","תלמידא","תרעא","קולמוס","ספסלא","שלמא","חלון","ארון","פתורא","דיו","נוצה","ביתא","יומא"],uy=[...ly,"קלף","מגילתא","נהורא","טבא","אורייתא","תלמידא","גמר","כתב","שמיא","ארעא","מילתא","פתגמא"].filter((a,e,n)=>n.indexOf(a)===e);function cy(a){const n=ry(a).map(Td).filter(c=>c.length>=2),i=[],s=new Set;for(const c of n)oy.has(c)&&(i.push(c),s.add(c));const l=i.length;return{matchedCount:l,uniqueMatched:[...s],tokens:n,goal:Gs,complete:l>=Gs}}function dy(){return new URLSearchParams(window.location.search).get("debug")==="1"}function ym(a,e,n,i){const[s,l,c]=Xa(n,i);a.position.set(-s*yr,-l*yr,-c*yr),e.target.set(0,0,0),e.update()}function hy({onScrollClick:a,writingOpen:e,debug:n}){const i=me.useRef(null),[s,l]=me.useState(!1),c=me.useRef({active:!1,startX:0,scrollLeft:0,moved:!1}),f=v=>{if(v.target.closest(".inner-scroll-hotspot"))return;const _=i.current;_&&(c.current={active:!0,startX:v.clientX,scrollLeft:_.scrollLeft,moved:!1},_.setPointerCapture(v.pointerId))},p=v=>{if(!c.current.active||!i.current)return;const _=v.clientX-c.current.startX;Math.abs(_)>6&&(c.current.moved=!0),i.current.scrollLeft=c.current.scrollLeft-_},d=v=>{var _;c.current.active=!1,(_=i.current)==null||_.releasePointerCapture(v.pointerId)},m=pr.radiusPx*2;return L.jsx("div",{ref:i,className:"panorama-viewport panorama-viewport--flat",onPointerDown:f,onPointerMove:p,onPointerUp:d,onPointerCancel:d,"aria-label":"החדר הפנימי — גררו לצדדים (מצב גיבוי)",children:L.jsxs("div",{className:"panorama-inner",children:[L.jsxs("div",{className:`panorama-bg ${s?"panorama-bg--fallback":""}`,children:[!s&&L.jsx("img",{src:Rm,alt:"",className:"panorama-img",onError:()=>l(!0),draggable:!1}),s&&L.jsx("div",{className:"panorama-fallback-art","aria-hidden":"true"})]}),!e&&L.jsxs("button",{type:"button",className:["inner-scroll-hotspot","inner-scroll-hotspot--flat",n?"inner-scroll-hotspot--debug":""].filter(Boolean).join(" "),style:{left:`${pr.flatX}%`,top:`${pr.flatY}%`,width:m,height:m},onPointerDown:v=>v.stopPropagation(),onClick:v=>{v.stopPropagation(),a()},"aria-label":"פתחו את הקלף לכתיבת מכתב",children:[L.jsx("span",{className:"inner-scroll-hotspot__glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-scroll-hotspot__label",children:"הקלף · לחצו לכתיבה"})]})]})})}function fy({onScrollClick:a,writingOpen:e,onWebGLFail:n,debug:i}){const s=me.useRef(null),l=me.useRef(null),c=me.useRef(null),f=me.useRef(null),p=me.useRef(null),d=me.useRef(a),m=me.useRef(e),[v,_]=me.useState(!1),[y,b]=me.useState(!1);d.current=a,m.current=e,me.useEffect(()=>{const x=s.current,C=l.current;if(!x||!C)return;let M;try{M=new Ed({canvas:C,antialias:!0,alpha:!1})}catch{n();return}const S=new tg,V=new Dn(75,1,.1,1100);f.current=V;const z=new ig(V,C);p.current=z,z.enableZoom=!1,z.enablePan=!1,z.enableDamping=!0,z.minDistance=yr,z.maxDistance=yr,z.target.set(0,0,0),Cl(V,z);const I=A=>{A.cancelable&&A.preventDefault()};C.addEventListener("touchmove",I,{passive:!1}),ym(V,z,pr.yaw,pr.pitch);const O=new Ol(500,64,48);O.scale(-1,1,1);let te=null,K=!1;new ng().load(Rm,A=>{if(K){A.dispose();return}A.colorSpace=zt,te=new Wn(O,new Ul({map:A})),S.add(te),ym(V,z,pr.yaw,pr.pitch),_(!0)},void 0,()=>{K||n()});const le=()=>{const A=x.clientWidth,H=x.clientHeight;A<2||H<2||(Cl(V,z),V.aspect=A/H,V.updateProjectionMatrix(),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setSize(A,H,!1))},F=new ResizeObserver(le);F.observe(x),le();const ae=new X,[ne,he,Me]=Xa(pr.yaw,pr.pitch),ie=()=>{const A=x.clientWidth,H=x.clientHeight;if(A<2||H<2)return;const $=c.current;if(!$)return;ae.set(ne,he,Me).project(V);const k=ae.z<1&&ae.z>-1;$.style.left=`${(ae.x*.5+.5)*A}px`,$.style.top=`${(-ae.y*.5+.5)*H}px`,$.style.visibility=k&&!m.current?"visible":"hidden",$.style.pointerEvents=k&&!m.current?"auto":"none"},B={x:0,y:0,down:!1,moved:!1},q=A=>{m.current||(B.down=!0,B.moved=!1,B.x=A.clientX,B.y=A.clientY)},D=A=>{B.down&&Math.hypot(A.clientX-B.x,A.clientY-B.y)>10&&(B.moved=!0)},w=A=>{if(!B.down||(B.down=!1,B.moved||m.current))return;const H=c.current;if(!H||H.style.visibility==="hidden")return;const $=H.getBoundingClientRect(),k=$.left+$.width/2,Q=$.top+$.height/2,ue=Math.max($.width,$.height)*.58;Math.hypot(A.clientX-k,A.clientY-Q)<=ue&&d.current()};C.addEventListener("pointerdown",q),C.addEventListener("pointermove",D),C.addEventListener("pointerup",w),C.addEventListener("pointercancel",w);let j=0;const R=()=>{j=requestAnimationFrame(R),z.update(),M.render(S,V),ie()};return R(),()=>{var A;if(K=!0,cancelAnimationFrame(j),F.disconnect(),C.removeEventListener("touchmove",I),C.removeEventListener("pointerdown",q),C.removeEventListener("pointermove",D),C.removeEventListener("pointerup",w),C.removeEventListener("pointercancel",w),z.dispose(),O.dispose(),te){const H=te.material;(A=H.map)==null||A.dispose(),H.dispose()}M.dispose(),f.current=null,p.current=null}},[n]),me.useEffect(()=>{const x=p.current;x&&(x.enableRotate=!e&&!y)},[e,y]);const T=pr.radiusPx*2;return L.jsxs("div",{ref:s,className:"panorama-viewport panorama-viewport--360",children:[L.jsx("canvas",{ref:l,className:"panorama-canvas","aria-hidden":"true"}),!v&&L.jsx("div",{className:"panorama-loading",children:"טוען פנורמה…"}),L.jsx("div",{className:`panorama-hotspots-layer panorama-hotspots-layer--inner${y?" panorama-hotspots-layer--hover":""}`,children:L.jsxs("button",{type:"button",ref:c,className:["inner-scroll-hotspot",i?"inner-scroll-hotspot--debug":""].filter(Boolean).join(" "),style:{width:T,height:T},onPointerDown:x=>{x.stopPropagation(),b(!0)},onClick:x=>{x.stopPropagation(),a()},onPointerEnter:()=>b(!0),onPointerLeave:()=>b(!1),"aria-label":"פתחו את הקלף לכתיבת מכתב",children:[L.jsx("span",{className:"inner-scroll-hotspot__glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-scroll-hotspot__label",children:"הקלף · לחצו לכתיבה"})]})})]})}function py({onScrollClick:a,writingOpen:e}){const[n,i]=me.useState(!1),s=me.useCallback(()=>i(!0),[]),l=dy();return L.jsxs("div",{className:`panorama-shell inner-room__panorama-shell${e?" inner-room__panorama-shell--writing":""}`,children:[n?L.jsx(hy,{onScrollClick:a,writingOpen:e,debug:l}):L.jsx(fy,{onScrollClick:a,writingOpen:e,onWebGLFail:s,debug:l}),!e&&L.jsx("p",{className:"pan-hint",children:n?"גררו ימינה ושמאלה · לחצו על הקלף לכתיבה":"גררו כדי להסתכל סביב · לחצו על הקלף שעל השולחן"})]})}const my=["שלמא עליכון תלמידיא חכימיא","מן בית מדרשא דאורייתא כתיבנא","בקלף דיו ונוצה — פתגמא טבא","שמעו וגמרו · כתבו וקראו","נהורא רבא בחדרא זוטא","ונפקנא משלמא · אמן"];function gy({onComplete:a}){const[e,n]=me.useState(""),[i,s]=me.useState(!1),[l,c]=me.useState(!1),[f,p]=me.useState(!1),[d,m]=me.useState(!1),v=me.useRef(null),_=me.useRef(!1),y=me.useMemo(()=>cy(e),[e]),b=Math.min(y.matchedCount,Gs),T=me.useMemo(()=>new Set(y.uniqueMatched),[y.uniqueMatched]);me.useEffect(()=>{const M=window.setTimeout(()=>c(!0),40);return()=>window.clearTimeout(M)},[]),me.useEffect(()=>{if(!f){m(!1);return}const M=window.requestAnimationFrame(()=>m(!0)),S=window.setTimeout(()=>{var z;return(z=v.current)==null?void 0:z.focus()},420),V=z=>{z.key==="Escape"&&!i&&p(!1)};return window.addEventListener("keydown",V),()=>{window.cancelAnimationFrame(M),window.clearTimeout(S),window.removeEventListener("keydown",V)}},[f,i]),me.useEffect(()=>{if(!y.complete||_.current)return;_.current=!0,s(!0),p(!0);const M=window.setTimeout(()=>a(),3200);return()=>window.clearTimeout(M)},[y.complete,a]);const x=me.useCallback(M=>{if(i)return;const S=v.current,V=(S==null?void 0:S.selectionStart)??e.length,z=(S==null?void 0:S.selectionEnd)??e.length,I=e.slice(0,V),O=e.slice(z),te=I.length>0&&!/\s$/.test(I),K=O.length>0&&!/^\s/.test(O),Z=`${te?" ":""}${M}${K?" ":""}`,le=I+Z+O;n(le),window.requestAnimationFrame(()=>{const F=v.current;if(!F)return;const ae=I.length+Z.length-(K?1:0);F.focus(),F.setSelectionRange(ae,ae)})},[i,e]),C=()=>{i||p(!1)};return L.jsxs("div",{className:["inner-room","inner-room--360",l?"inner-room--entered":"",f?"inner-room--writing":""].filter(Boolean).join(" "),children:[L.jsxs("header",{className:"inner-room__header",children:[L.jsx("p",{className:"inner-room__eyebrow",children:"החדר הפנימי"}),L.jsx("h1",{children:"חדר הלימוד הקטן"}),L.jsx("p",{className:"inner-room__lead",children:f?i?"הקלף מתמלא בכתב — המכתב נחתם":"כתבו מכתב בארמית — לחצו על מילה מאוצר המילים כדי להוסיף אותה לקלף":"הסתכלו סביב החדר · לחצו על הקלף הפתוח על השולחן כדי לכתוב מכתב בארמית"})]}),L.jsx(py,{writingOpen:f,onScrollClick:()=>p(!0)}),f&&L.jsxs("div",{className:`inner-room__write-stage${d?" inner-room__write-stage--ready":""}`,role:"dialog","aria-modal":"true","aria-labelledby":"inner-letter-title",children:[L.jsx("button",{type:"button",className:"inner-room__write-dim","aria-label":"הניחו את הקלף וחזרו לחדר",onClick:C,disabled:i}),L.jsxs("div",{className:"inner-room__write-layout",children:[L.jsxs("div",{className:"inner-room__sheet",children:[L.jsxs("div",{className:"inner-room__sheet-top",children:[L.jsx("h2",{id:"inner-letter-title",children:"הקלף"}),!i&&L.jsx("button",{type:"button",className:"btn-secondary inner-room__letter-close",onClick:C,children:"הניחו את הקלף"})]}),L.jsx("p",{className:"inner-room__sheet-lead",children:i?"המכתב נחתם בדיו על הקלף":"השתמשו במילים מאוצר המילים — כעשר מילים, והמכתב יישלח!"}),L.jsxs("div",{className:"inner-room__sheet-body",children:[L.jsx("label",{className:"visually-hidden",htmlFor:"inner-letter",children:"כתיבת מכתב על הקלף"}),L.jsxs("div",{className:"inner-room__parchment-wrap",children:[L.jsx("textarea",{id:"inner-letter",ref:v,className:`inner-room__parchment phrase-font${i?" inner-room__parchment--sealed":""}`,dir:"rtl",lang:"he",rows:7,value:e,onChange:M=>n(M.target.value),placeholder:"כתבו כאן מכתב בארמית…",spellCheck:!1,autoComplete:"off",disabled:i,"aria-hidden":i}),i&&L.jsx("div",{className:"inner-room__script-fill","aria-hidden":"true",children:my.map((M,S)=>L.jsx("p",{className:`inner-room__script-line${S>=4?" inner-room__script-line--dim":""}`,style:{animationDelay:`${.12+S*.18}s`},children:M},M))})]}),L.jsxs("div",{className:"inner-room__inkwell","aria-hidden":"true",children:[L.jsx("span",{className:"inner-room__ink-pot"}),L.jsx("span",{className:"inner-room__quill"}),L.jsx("span",{className:"inner-room__ink-label",children:"דיו ונוצה"})]})]}),L.jsx("div",{className:"inner-room__hud",role:"status","aria-live":"polite",children:L.jsxs("div",{className:"inner-room__progress",children:[L.jsx("div",{className:"inner-room__progress-bar","aria-hidden":"true",children:L.jsx("span",{style:{width:`${b/Gs*100}%`}})}),L.jsx("p",{className:"inner-room__progress-text",children:i?"הקלף מלא!":`${b}/${Gs} מילים מהאוצר`})]})})]}),!i&&L.jsxs("aside",{className:"inner-room__vocab","aria-label":"אוצר מילים",children:[L.jsx("h3",{className:"inner-room__vocab-title",children:"אוצר מילים"}),L.jsx("p",{className:"inner-room__vocab-lead",children:"לחצו על מילה כדי להוסיף אותה למכתב"}),L.jsx("div",{className:"inner-room__vocab-chips",children:uy.map(M=>{const S=T.has(Td(M));return L.jsx("button",{type:"button",className:`inner-room__vocab-chip phrase-font${S?" inner-room__vocab-chip--used":""}`,onClick:()=>x(M),children:M},M)})})]})]})]}),i&&L.jsx("div",{className:"inner-room__celebrate pop-in",role:"status",children:L.jsxs("div",{className:"inner-room__celebrate-card",children:[L.jsx("p",{children:"המכתב נשלח מבית המדרש!"}),L.jsx("p",{className:"inner-room__celebrate-sub",children:"שלמא — יצאתם מהחדר"})]})})]})}function vy({onRestart:a}){const e=pd();return L.jsx("div",{className:"victory-screen",children:L.jsxs("div",{className:"victory-card",children:[L.jsx("div",{className:"victory-confetti","aria-hidden":"true",children:Array.from({length:24}).map((n,i)=>L.jsx("span",{style:{"--i":i}},i))}),L.jsx("h1",{children:"יצאתם מבית המדרש!"}),L.jsx("p",{className:"victory-sub",children:e?"המכתב נשלח · המדליה מחכה לכם במפת המסע":"המכתב נשלח · שלמא לכולכון"}),!e&&L.jsx("button",{type:"button",className:"btn-primary",onClick:a,children:"שחקו שוב"}),e&&L.jsx("p",{className:"victory-sub",style:{marginTop:12,fontSize:15},children:"אפשר לסגור ולחזור למפה…"})]})})}function _y({objectName:a}){return a?L.jsxs("p",{className:"search-target-tip",role:"status",children:["חפשו עכשיו:"," ",L.jsx("span",{className:"search-target-tip__object",children:a})]}):null}function xy({room:a,onOuter:e,onInner:n}){return L.jsxs("nav",{className:"room-travel","aria-label":"מעבר בין חדרים (בדיקות)",children:[L.jsx("span",{className:"room-travel__label",children:"מעבר לבדיקה"}),L.jsxs("div",{className:"room-travel__btns",children:[L.jsx("button",{type:"button",className:`room-travel__btn${a==="outer"?" room-travel__btn--active":""}`,onClick:e,"aria-current":a==="outer"?"page":void 0,children:"חדר חיצוני"}),L.jsx("button",{type:"button",className:`room-travel__btn${a==="inner"?" room-travel__btn--active":""}`,onClick:n,"aria-current":a==="inner"?"page":void 0,children:"חדר פנימי"})]})]})}const yy={explore:a=>a?`סובבו את המבט · חפשו את החפץ הזוהר (${a}) · לחצו עליו`:"סובבו את המבט · חפשו את החפץ הזוהר · לחצו עליו",riddle:()=>"ענו על החידה — בחרו את המילה הנכונה",gematria:()=>"חשבו גימטרייה בלשונית · פתחו את המנעול · סובבו את החוגה ולחצו «הזן»","lock-opening":()=>"המנעול נפתח! עוד רגע נכנסים לחדר הפנימי…","inner-room":()=>"לחצו על הקלף על השולחן · כתבו מכתב מהאוצר מילים"};function Sm({phase:a,objectName:e}){const n=yy[a](e);return L.jsx("p",{className:"room-guidance",role:"status","aria-live":"polite",children:n})}function Sy({visible:a,onAccept:e,onDismiss:n}){return a?L.jsxs("div",{className:"illuminate-offer",role:"dialog","aria-label":"רמז להארת החפץ",children:[L.jsx("p",{className:"illuminate-offer__text",children:"לא מוצאים את החפץ? אפשר להאיר אותו בשבילכם"}),L.jsxs("div",{className:"illuminate-offer__actions",children:[L.jsx("button",{type:"button",className:"btn-primary illuminate-offer__accept",onClick:e,children:"האירו לי את החפץ"}),L.jsx("button",{type:"button",className:"btn-secondary illuminate-offer__dismiss",onClick:n,children:"עוד אחפש"})]})]}):null}const Ey=6e4;function My(){return md()?"inner-room":"explore"}function wy({onRestart:a}){const[e,n]=me.useState(h_),[i,s]=me.useState(My),[l,c]=me.useState(null),[f,p]=me.useState(null),[d,m]=me.useState(0),[v,_]=me.useState(!1),[y,b]=me.useState(!1),[T,x]=me.useState(!1),[C,M]=me.useState(!1),S=f_(),V=Xi[e.currentRiddleIndex],z=d_(e.currentRiddleIndex);me.useEffect(()=>{b(!1),x(!1),M(!1)},[e.currentRiddleIndex]),me.useEffect(()=>{if(i!=="explore"||e.lockUnlocked||y||C)return;const ie=window.setTimeout(()=>x(!0),Ey);return()=>window.clearTimeout(ie)},[i,e.currentRiddleIndex,e.lockUnlocked,y,C]);const I=y?"boosted":"idle",O=me.useCallback(()=>{s("inner-room")},[]),te=me.useCallback(()=>{s("explore")},[]),K=()=>{e.lockUnlocked||(x(!1),s("riddle"))},Z=()=>{m(0),_(!1),s("gematria")},le=me.useCallback(()=>{const ie=Xi[e.currentRiddleIndex],B=e.currentRiddleIndex;c(B),p(ie.dialDigit),m(0),_(!1),window.setTimeout(()=>{n(q=>{const D=[...q.dialDigits];D[B]=ie.dialDigit;const w=q.solvedCount+1,j=w>=10;return{currentRiddleIndex:j?q.currentRiddleIndex:q.currentRiddleIndex+1,solvedCount:w,dialDigits:D,lockUnlocked:j}}),c(null),p(null),B+1>=10?(s("lock-opening"),window.setTimeout(()=>s("inner-room"),1800)):s("explore")},800)},[e.currentRiddleIndex]),F=me.useCallback(ie=>{const B=Xi[e.currentRiddleIndex];return ie===B.dialDigit?(le(),!0):(m(q=>q+1),_(!0),window.setTimeout(()=>_(!1),1600),!1)},[e.currentRiddleIndex,le]),ae=me.useCallback(()=>{Qv(),s("victory")},[]);if(i==="victory")return L.jsx(vy,{onRestart:a});const ne=S?L.jsx(xy,{room:i==="inner-room"?"inner":"outer",onOuter:te,onInner:O}):null;if(i==="inner-room")return L.jsxs("div",{className:"escape-room escape-room--inner",children:[ne,L.jsx("div",{className:"room-fs-bar","aria-label":"פקדי תצוגה",children:L.jsx(ed,{})}),L.jsx(Sm,{phase:"inner-room"}),L.jsx(gy,{onComplete:ae})]});const he=i==="gematria",Me=i==="explore"||i==="riddle"||i==="gematria"||i==="lock-opening"?i:"explore";return L.jsxs("div",{className:`escape-room${he?" escape-room--gematria":""}`,children:[ne,L.jsx("header",{className:"room-header",children:L.jsxs("div",{className:"room-header__row",children:[L.jsxs("div",{className:"room-header__text",children:[L.jsx("h1",{children:"בית המדרש הפנימי"}),L.jsxs("p",{children:["חידה ",Math.min(e.currentRiddleIndex+1,10)," מתוך 10",e.solvedCount>0&&` · נפתרו ${e.solvedCount}`]})]}),L.jsx(ed,{})]})}),L.jsx(Sm,{phase:Me,objectName:i==="explore"?z:null}),L.jsx(Kx,{riddles:Xi,activeIndex:e.currentRiddleIndex,solvedCount:e.solvedCount,onHotspotClick:()=>K(),lockUnlocked:e.lockUnlocked,onEnterInner:e.lockUnlocked?O:void 0,activeGlowMode:!e.lockUnlocked&&i==="explore"?I:"none"}),L.jsx(_y,{objectName:!e.lockUnlocked&&i==="explore"?z:null}),L.jsx(Sy,{visible:T&&i==="explore"&&!y,onAccept:()=>{b(!0),x(!1)},onDismiss:()=>{x(!1),M(!0)}}),L.jsx(ty,{digits:e.dialDigits,rollingIndex:l,rollingDigit:f,unlocked:e.lockUnlocked&&i==="lock-opening",interactiveIndex:he?e.currentRiddleIndex:null,onDigitPick:he?F:void 0,wrongFlash:v}),L.jsx(Jx,{riddle:he?V:null,lockIndex:he?e.currentRiddleIndex:null,lockWrongAttempts:he?d:0,preferOpen:he}),i==="riddle"&&V&&L.jsx($x,{riddle:V,onCorrect:Z,onClose:()=>s("explore")})]})}function Ty(){return md()?"room":"landing"}function Ry(){const[a,e]=me.useState(Ty),[n,i]=me.useState(0);me.useEffect(()=>(Jv(),pd()&&(document.documentElement.classList.add("escape-embedded"),document.body.classList.add("escape-embedded")),()=>{document.documentElement.classList.remove("escape-embedded"),document.body.classList.remove("escape-embedded")}),[]),me.useEffect(()=>{const l=a==="room";return document.documentElement.classList.toggle("escape-room-live",l),document.body.classList.toggle("escape-room-live",l),()=>{document.documentElement.classList.remove("escape-room-live"),document.body.classList.remove("escape-room-live")}},[a]);const s=()=>{i(l=>l+1),e(md()?"room":"landing")};return a==="landing"?L.jsx(o_,{onStart:()=>e("room")}):L.jsx(wy,{onRestart:s},n)}qv.createRoot(document.getElementById("root")).render(L.jsx(me.StrictMode,{children:L.jsx(Ry,{})}));
