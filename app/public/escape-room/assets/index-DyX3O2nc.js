(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var fc={exports:{}},Ns={},pc={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function Pv(){if(Of)return at;Of=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,T={};function x(R,V,M){this.props=R,this.context=V,this.refs=T,this.updater=M||y}x.prototype.isReactComponent={},x.prototype.setState=function(R,V){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,V,"setState")},x.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function C(){}C.prototype=x.prototype;function w(R,V,M){this.props=R,this.context=V,this.refs=T,this.updater=M||y}var S=w.prototype=new C;S.constructor=w,b(S,x.prototype),S.isPureReactComponent=!0;var G=Array.isArray,z=Object.prototype.hasOwnProperty,O={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function $(R,V,M){var A,B={},Z=null,k=null;if(V!=null)for(A in V.ref!==void 0&&(k=V.ref),V.key!==void 0&&(Z=""+V.key),V)z.call(V,A)&&!P.hasOwnProperty(A)&&(B[A]=V[A]);var ee=arguments.length-2;if(ee===1)B.children=M;else if(1<ee){for(var le=Array(ee),fe=0;fe<ee;fe++)le[fe]=arguments[fe+2];B.children=le}if(R&&R.defaultProps)for(A in ee=R.defaultProps,ee)B[A]===void 0&&(B[A]=ee[A]);return{$$typeof:s,type:R,key:Z,ref:k,props:B,_owner:O.current}}function q(R,V){return{$$typeof:s,type:R.type,key:V,ref:R.ref,props:R.props,_owner:R._owner}}function Q(R){return typeof R=="object"&&R!==null&&R.$$typeof===s}function ce(R){var V={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(M){return V[M]})}var F=/\/+/g;function se(R,V){return typeof R=="object"&&R!==null&&R.key!=null?ce(""+R.key):V.toString(36)}function ae(R,V,M,A,B){var Z=typeof R;(Z==="undefined"||Z==="boolean")&&(R=null);var k=!1;if(R===null)k=!0;else switch(Z){case"string":case"number":k=!0;break;case"object":switch(R.$$typeof){case s:case e:k=!0}}if(k)return k=R,B=B(k),R=A===""?"."+se(k,0):A,G(B)?(M="",R!=null&&(M=R.replace(F,"$&/")+"/"),ae(B,V,M,"",function(fe){return fe})):B!=null&&(Q(B)&&(B=q(B,M+(!B.key||k&&k.key===B.key?"":(""+B.key).replace(F,"$&/")+"/")+R)),V.push(B)),1;if(k=0,A=A===""?".":A+":",G(R))for(var ee=0;ee<R.length;ee++){Z=R[ee];var le=A+se(Z,ee);k+=ae(Z,V,M,le,B)}else if(le=_(R),typeof le=="function")for(R=le.call(R),ee=0;!(Z=R.next()).done;)Z=Z.value,le=A+se(Z,ee++),k+=ae(Z,V,M,le,B);else if(Z==="object")throw V=String(R),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return k}function me(R,V,M){if(R==null)return R;var A=[],B=0;return ae(R,A,"","",function(Z){return V.call(M,Z,B++)}),A}function Te(R){if(R._status===-1){var V=R._result;V=V(),V.then(function(M){(R._status===0||R._status===-1)&&(R._status=1,R._result=M)},function(M){(R._status===0||R._status===-1)&&(R._status=2,R._result=M)}),R._status===-1&&(R._status=0,R._result=V)}if(R._status===1)return R._result.default;throw R._result}var re={current:null},X={transition:null},K={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function U(){throw Error("act(...) is not supported in production builds of React.")}return at.Children={map:me,forEach:function(R,V,M){me(R,function(){V.apply(this,arguments)},M)},count:function(R){var V=0;return me(R,function(){V++}),V},toArray:function(R){return me(R,function(V){return V})||[]},only:function(R){if(!Q(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},at.Component=x,at.Fragment=n,at.Profiler=a,at.PureComponent=w,at.StrictMode=i,at.Suspense=p,at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,at.act=U,at.cloneElement=function(R,V,M){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var A=b({},R.props),B=R.key,Z=R.ref,k=R._owner;if(V!=null){if(V.ref!==void 0&&(Z=V.ref,k=O.current),V.key!==void 0&&(B=""+V.key),R.type&&R.type.defaultProps)var ee=R.type.defaultProps;for(le in V)z.call(V,le)&&!P.hasOwnProperty(le)&&(A[le]=V[le]===void 0&&ee!==void 0?ee[le]:V[le])}var le=arguments.length-2;if(le===1)A.children=M;else if(1<le){ee=Array(le);for(var fe=0;fe<le;fe++)ee[fe]=arguments[fe+2];A.children=ee}return{$$typeof:s,type:R.type,key:B,ref:Z,props:A,_owner:k}},at.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:l,_context:R},R.Consumer=R},at.createElement=$,at.createFactory=function(R){var V=$.bind(null,R);return V.type=R,V},at.createRef=function(){return{current:null}},at.forwardRef=function(R){return{$$typeof:f,render:R}},at.isValidElement=Q,at.lazy=function(R){return{$$typeof:m,_payload:{_status:-1,_result:R},_init:Te}},at.memo=function(R,V){return{$$typeof:d,type:R,compare:V===void 0?null:V}},at.startTransition=function(R){var V=X.transition;X.transition={};try{R()}finally{X.transition=V}},at.unstable_act=U,at.useCallback=function(R,V){return re.current.useCallback(R,V)},at.useContext=function(R){return re.current.useContext(R)},at.useDebugValue=function(){},at.useDeferredValue=function(R){return re.current.useDeferredValue(R)},at.useEffect=function(R,V){return re.current.useEffect(R,V)},at.useId=function(){return re.current.useId()},at.useImperativeHandle=function(R,V,M){return re.current.useImperativeHandle(R,V,M)},at.useInsertionEffect=function(R,V){return re.current.useInsertionEffect(R,V)},at.useLayoutEffect=function(R,V){return re.current.useLayoutEffect(R,V)},at.useMemo=function(R,V){return re.current.useMemo(R,V)},at.useReducer=function(R,V,M){return re.current.useReducer(R,V,M)},at.useRef=function(R){return re.current.useRef(R)},at.useState=function(R){return re.current.useState(R)},at.useSyncExternalStore=function(R,V,M){return re.current.useSyncExternalStore(R,V,M)},at.useTransition=function(){return re.current.useTransition()},at.version="18.3.1",at}var Ff;function od(){return Ff||(Ff=1,pc.exports=Pv()),pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function Nv(){if(kf)return Ns;kf=1;var s=od(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,d){var m,v={},_=null,y=null;d!==void 0&&(_=""+d),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(y=p.ref);for(m in p)i.call(p,m)&&!l.hasOwnProperty(m)&&(v[m]=p[m]);if(f&&f.defaultProps)for(m in p=f.defaultProps,p)v[m]===void 0&&(v[m]=p[m]);return{$$typeof:e,type:f,key:_,ref:y,props:v,_owner:a.current}}return Ns.Fragment=n,Ns.jsx=c,Ns.jsxs=c,Ns}var zf;function Dv(){return zf||(zf=1,fc.exports=Nv()),fc.exports}var D=Dv(),ge=od(),Ko={},mc={exports:{}},Sn={},gc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function Uv(){return Bf||(Bf=1,(function(s){function e(X,K){var U=X.length;X.push(K);e:for(;0<U;){var R=U-1>>>1,V=X[R];if(0<a(V,K))X[R]=K,X[U]=V,U=R;else break e}}function n(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var K=X[0],U=X.pop();if(U!==K){X[0]=U;e:for(var R=0,V=X.length,M=V>>>1;R<M;){var A=2*(R+1)-1,B=X[A],Z=A+1,k=X[Z];if(0>a(B,U))Z<V&&0>a(k,B)?(X[R]=k,X[Z]=U,R=Z):(X[R]=B,X[A]=U,R=A);else if(Z<V&&0>a(k,U))X[R]=k,X[Z]=U,R=Z;else break e}}return K}function a(X,K){var U=X.sortIndex-K.sortIndex;return U!==0?U:X.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var p=[],d=[],m=1,v=null,_=3,y=!1,b=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(X){for(var K=n(d);K!==null;){if(K.callback===null)i(d);else if(K.startTime<=X)i(d),K.sortIndex=K.expirationTime,e(p,K);else break;K=n(d)}}function G(X){if(T=!1,S(X),!b)if(n(p)!==null)b=!0,Te(z);else{var K=n(d);K!==null&&re(G,K.startTime-X)}}function z(X,K){b=!1,T&&(T=!1,C($),$=-1),y=!0;var U=_;try{for(S(K),v=n(p);v!==null&&(!(v.expirationTime>K)||X&&!ce());){var R=v.callback;if(typeof R=="function"){v.callback=null,_=v.priorityLevel;var V=R(v.expirationTime<=K);K=s.unstable_now(),typeof V=="function"?v.callback=V:v===n(p)&&i(p),S(K)}else i(p);v=n(p)}if(v!==null)var M=!0;else{var A=n(d);A!==null&&re(G,A.startTime-K),M=!1}return M}finally{v=null,_=U,y=!1}}var O=!1,P=null,$=-1,q=5,Q=-1;function ce(){return!(s.unstable_now()-Q<q)}function F(){if(P!==null){var X=s.unstable_now();Q=X;var K=!0;try{K=P(!0,X)}finally{K?se():(O=!1,P=null)}}else O=!1}var se;if(typeof w=="function")se=function(){w(F)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,me=ae.port2;ae.port1.onmessage=F,se=function(){me.postMessage(null)}}else se=function(){x(F,0)};function Te(X){P=X,O||(O=!0,se())}function re(X,K){$=x(function(){X(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){b||y||(b=!0,Te(z))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(X){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var U=_;_=K;try{return X()}finally{_=U}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,K){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var U=_;_=X;try{return K()}finally{_=U}},s.unstable_scheduleCallback=function(X,K,U){var R=s.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?R+U:R):U=R,X){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=U+V,X={id:m++,callback:K,priorityLevel:X,startTime:U,expirationTime:V,sortIndex:-1},U>R?(X.sortIndex=U,e(d,X),n(p)===null&&X===n(d)&&(T?(C($),$=-1):T=!0,re(G,U-R))):(X.sortIndex=V,e(p,X),b||y||(b=!0,Te(z))),X},s.unstable_shouldYield=ce,s.unstable_wrapCallback=function(X){var K=_;return function(){var U=_;_=K;try{return X.apply(this,arguments)}finally{_=U}}}})(vc)),vc}var Hf;function Iv(){return Hf||(Hf=1,gc.exports=Uv()),gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Ov(){if(Gf)return Sn;Gf=1;var s=od(),e=Iv();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function l(t,r){c(t,r),c(t+"Capture",r)}function c(t,r){for(a[t]=r,t=0;t<r.length;t++)i.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(t){return p.call(v,t)?!0:p.call(m,t)?!1:d.test(t)?v[t]=!0:(m[t]=!0,!1)}function y(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,r,o,u){if(r===null||typeof r>"u"||y(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(t,r,o,u,h,g,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=g,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];x[r]=new T(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function w(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(C,w);x[r]=new T(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(C,w);x[r]=new T(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(C,w);x[r]=new T(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function S(t,r,o,u){var h=x.hasOwnProperty(r)?x[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(b(r,o,h,u)&&(o=null),u||h===null?_(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var G=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),O=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),ce=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),X=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,R;function V(t){if(R===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);R=r&&r[1]||""}return`
`+R+t}var M=!1;function A(t,r){if(!t||M)return"";M=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ie){var u=ie}Reflect.construct(t,[],r)}else{try{r.call()}catch(ie){u=ie}t.call(r.prototype)}else{try{throw Error()}catch(ie){u=ie}t()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var h=ie.stack.split(`
`),g=u.stack.split(`
`),E=h.length-1,I=g.length-1;1<=E&&0<=I&&h[E]!==g[I];)I--;for(;1<=E&&0<=I;E--,I--)if(h[E]!==g[I]){if(E!==1||I!==1)do if(E--,I--,0>I||h[E]!==g[I]){var H=`
`+h[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=I);break}}}finally{M=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?V(t):""}function B(t){switch(t.tag){case 5:return V(t.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return t=A(t.type,!1),t;case 11:return t=A(t.type.render,!1),t;case 1:return t=A(t.type,!0),t;default:return""}}function Z(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case O:return"Portal";case q:return"Profiler";case $:return"StrictMode";case se:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ce:return(t.displayName||"Context")+".Consumer";case Q:return(t._context.displayName||"Context")+".Provider";case F:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return r=t.displayName||null,r!==null?r:Z(t.type)||"Memo";case Te:r=t._payload,t=t._init;try{return Z(t(r))}catch{}}return null}function k(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(r);case 8:return r===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ee(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function le(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function fe(t){var r=le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ee(t){t._valueTracker||(t._valueTracker=fe(t))}function Ce(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=le(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function Ne(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function L(t,r){var o=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function we(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=ee(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function de(t,r){r=r.checked,r!=null&&S(t,"checked",r,!1)}function ue(t,r){de(t,r);var o=ee(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Le(t,r.type,o):r.hasOwnProperty("defaultValue")&&Le(t,r.type,ee(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Se(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Le(t,r,o){(r!=="number"||Ne(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var be=Array.isArray;function Fe(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+ee(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function Xe(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ie(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(be(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:ee(o)}}function ke(t,r){var o=ee(r.value),u=ee(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Ze(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Pt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Pt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qe,Je=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Qe=Qe||document.createElement("div"),Qe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function wn(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(t){W.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ut[r]=Ut[t]})});function Pe(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ut.hasOwnProperty(t)&&Ut[t]?(""+r).trim():r+"px"}function Ke(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=Pe(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var ct=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ne(t,r){if(r){if(ct[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Yt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function Ct(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,In=null,It=null;function rn(t){if(t=vs(t)){if(typeof Fr!="function")throw Error(n(280));var r=t.stateNode;r&&(r=uo(r),Fr(t.stateNode,t.type,r))}}function yr(t){In?It?It.push(t):It=[t]:In=t}function On(){if(In){var t=In,r=It;if(It=In=null,rn(t),r)for(t=0;t<r.length;t++)rn(r[t])}}function Xn(t,r){return t(r)}function sr(){}var Yn=!1;function Qa(t,r,o){if(Yn)return t(r,o);Yn=!0;try{return Xn(t,r,o)}finally{Yn=!1,(In!==null||It!==null)&&(sr(),On())}}function kr(t,r){var o=t.stateNode;if(o===null)return null;var u=uo(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var zr=!1;if(f)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{zr=!1}function ea(t,r,o,u,h,g,E,I,H){var ie=Array.prototype.slice.call(arguments,3);try{r.apply(o,ie)}catch(xe){this.onError(xe)}}var Hr=!1,Ei=null,N=!1,oe=null,he={onError:function(t){Hr=!0,Ei=t}};function _e(t,r,o,u,h,g,E,I,H){Hr=!1,Ei=null,ea.apply(he,arguments)}function pe(t,r,o,u,h,g,E,I,H){if(_e.apply(this,arguments),Hr){if(Hr){var ie=Ei;Hr=!1,Ei=null}else throw Error(n(198));N||(N=!0,oe=ie)}}function Re(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function We(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function je(t){if(Re(t)!==t)throw Error(n(188))}function et(t){var r=t.alternate;if(!r){if(r=Re(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return je(h),t;if(g===u)return je(h),r;g=g.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=g;else{for(var E=!1,I=h.child;I;){if(I===o){E=!0,o=h,u=g;break}if(I===u){E=!0,u=h,o=g;break}I=I.sibling}if(!E){for(I=g.child;I;){if(I===o){E=!0,o=g,u=h;break}if(I===u){E=!0,u=g,o=h;break}I=I.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function tt(t){return t=et(t),t!==null?rt(t):null}function rt(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=rt(t);if(r!==null)return r;t=t.sibling}return null}var it=e.unstable_scheduleCallback,vt=e.unstable_cancelCallback,Rn=e.unstable_shouldYield,qn=e.unstable_requestPaint,mt=e.unstable_now,xt=e.unstable_getCurrentPriorityLevel,Tt=e.unstable_ImmediatePriority,an=e.unstable_UserBlockingPriority,Ot=e.unstable_NormalPriority,lt=e.unstable_LowPriority,ut=e.unstable_IdlePriority,or=null,hn=null;function Ul(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(or,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Fl,Il=Math.log,Ol=Math.LN2;function Fl(t){return t>>>=0,t===0?32:31-(Il(t)/Ol|0)|0}var ta=64,na=4194304;function Gr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mi(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,g=t.pingedLanes,E=o&268435455;if(E!==0){var I=E&~h;I!==0?u=Gr(I):(g&=E,g!==0&&(u=Gr(g)))}else E=o&~h,E!==0?u=Gr(E):g!==0&&(u=Gr(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-$t(r),h=1<<o,u|=t[o],r&=~h;return u}function kl(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dt(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes;0<g;){var E=31-$t(g),I=1<<E,H=h[E];H===-1?((I&o)===0||(I&u)!==0)&&(h[E]=kl(I,r)):H<=r&&(t.expiredLanes|=I),g&=~I}}function Ja(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fn(){var t=ta;return ta<<=1,(ta&4194240)===0&&(ta=64),t}function Kn(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Vr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-$t(r),t[r]=o}function Ti(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-$t(o),g=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~g}}function wi(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-$t(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var qe=0;function lr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ra,pn,mn,sn,ia,es=!1,Ri=[],Wr=null,jr=null,Xr=null,ts=new Map,ns=new Map,Yr=[],Jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(t,r){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":ts.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(r.pointerId)}}function rs(t,r,o,u,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=vs(r),r!==null&&pn(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function eg(t,r,o,u,h){switch(r){case"focusin":return Wr=rs(Wr,t,r,o,u,h),!0;case"dragenter":return jr=rs(jr,t,r,o,u,h),!0;case"mouseover":return Xr=rs(Xr,t,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return ts.set(g,rs(ts.get(g)||null,t,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,ns.set(g,rs(ns.get(g)||null,t,r,o,u,h)),!0}return!1}function xd(t){var r=Ai(t.target);if(r!==null){var o=Re(r);if(o!==null){if(r=o.tag,r===13){if(r=We(o),r!==null){t.blockedOn=r,ia(t.priority,function(){mn(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ks(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Bl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);At=u,o.target.dispatchEvent(u),At=null}else return r=vs(o),r!==null&&pn(r),t.blockedOn=o,!1;r.shift()}return!0}function yd(t,r,o){Ks(t)&&o.delete(r)}function tg(){es=!1,Wr!==null&&Ks(Wr)&&(Wr=null),jr!==null&&Ks(jr)&&(jr=null),Xr!==null&&Ks(Xr)&&(Xr=null),ts.forEach(yd),ns.forEach(yd)}function is(t,r){t.blockedOn===r&&(t.blockedOn=null,es||(es=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tg)))}function as(t){function r(h){return is(h,t)}if(0<Ri.length){is(Ri[0],t);for(var o=1;o<Ri.length;o++){var u=Ri[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Wr!==null&&is(Wr,t),jr!==null&&is(jr,t),Xr!==null&&is(Xr,t),ts.forEach(r),ns.forEach(r),o=0;o<Yr.length;o++)u=Yr[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Yr.length&&(o=Yr[0],o.blockedOn===null);)xd(o),o.blockedOn===null&&Yr.shift()}var aa=G.ReactCurrentBatchConfig,$s=!0;function ng(t,r,o,u){var h=qe,g=aa.transition;aa.transition=null;try{qe=1,zl(t,r,o,u)}finally{qe=h,aa.transition=g}}function rg(t,r,o,u){var h=qe,g=aa.transition;aa.transition=null;try{qe=4,zl(t,r,o,u)}finally{qe=h,aa.transition=g}}function zl(t,r,o,u){if($s){var h=Bl(t,r,o,u);if(h===null)ru(t,r,u,Zs,o),_d(t,u);else if(eg(h,t,r,o,u))u.stopPropagation();else if(_d(t,u),r&4&&-1<Jm.indexOf(t)){for(;h!==null;){var g=vs(h);if(g!==null&&ra(g),g=Bl(t,r,o,u),g===null&&ru(t,r,u,Zs,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else ru(t,r,u,null,o)}}var Zs=null;function Bl(t,r,o,u){if(Zs=null,t=Ct(u),t=Ai(t),t!==null)if(r=Re(t),r===null)t=null;else if(o=r.tag,o===13){if(t=We(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Zs=t,null}function Sd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xt()){case Tt:return 1;case an:return 4;case Ot:case lt:return 16;case ut:return 536870912;default:return 16}default:return 16}}var qr=null,Hl=null,Qs=null;function Ed(){if(Qs)return Qs;var t,r=Hl,o=r.length,u,h="value"in qr?qr.value:qr.textContent,g=h.length;for(t=0;t<o&&r[t]===h[t];t++);var E=o-t;for(u=1;u<=E&&r[o-u]===h[g-u];u++);return Qs=h.slice(t,1<u?1-u:void 0)}function Js(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function eo(){return!0}function Md(){return!1}function An(t){function r(o,u,h,g,E){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?eo:Md,this.isPropagationStopped=Md,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),r}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=An(sa),ss=U({},sa,{view:0,detail:0}),ig=An(ss),Vl,Wl,os,to=U({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==os&&(os&&t.type==="mousemove"?(Vl=t.screenX-os.screenX,Wl=t.screenY-os.screenY):Wl=Vl=0,os=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),Td=An(to),ag=U({},to,{dataTransfer:0}),sg=An(ag),og=U({},ss,{relatedTarget:0}),jl=An(og),lg=U({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=An(lg),cg=U({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dg=An(cg),hg=U({},sa,{data:0}),wd=An(hg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gg(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=mg[t])?!!r[t]:!1}function Xl(){return gg}var vg=U({},ss,{key:function(t){if(t.key){var r=fg[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Js(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(t){return t.type==="keypress"?Js(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Js(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_g=An(vg),xg=U({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=An(xg),yg=U({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),Sg=An(yg),Eg=U({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mg=An(Eg),Tg=U({},to,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wg=An(Tg),Rg=[9,13,27,32],Yl=f&&"CompositionEvent"in window,ls=null;f&&"documentMode"in document&&(ls=document.documentMode);var Ag=f&&"TextEvent"in window&&!ls,Ad=f&&(!Yl||ls&&8<ls&&11>=ls),bd=" ",Cd=!1;function Ld(t,r){switch(t){case"keyup":return Rg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oa=!1;function bg(t,r){switch(t){case"compositionend":return Pd(r);case"keypress":return r.which!==32?null:(Cd=!0,bd);case"textInput":return t=r.data,t===bd&&Cd?null:t;default:return null}}function Cg(t,r){if(oa)return t==="compositionend"||!Yl&&Ld(t,r)?(t=Ed(),Qs=Hl=qr=null,oa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ad&&r.locale!=="ko"?null:r.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Lg[t.type]:r==="textarea"}function Dd(t,r,o,u){yr(u),r=so(r,"onChange"),0<r.length&&(o=new Gl("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var us=null,cs=null;function Pg(t){Zd(t,0)}function no(t){var r=ha(t);if(Ce(r))return t}function Ng(t,r){if(t==="change")return r}var Ud=!1;if(f){var ql;if(f){var Kl="oninput"in document;if(!Kl){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Kl=typeof Id.oninput=="function"}ql=Kl}else ql=!1;Ud=ql&&(!document.documentMode||9<document.documentMode)}function Od(){us&&(us.detachEvent("onpropertychange",Fd),cs=us=null)}function Fd(t){if(t.propertyName==="value"&&no(cs)){var r=[];Dd(r,cs,t,Ct(t)),Qa(Pg,r)}}function Dg(t,r,o){t==="focusin"?(Od(),us=r,cs=o,us.attachEvent("onpropertychange",Fd)):t==="focusout"&&Od()}function Ug(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return no(cs)}function Ig(t,r){if(t==="click")return no(r)}function Og(t,r){if(t==="input"||t==="change")return no(r)}function Fg(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var $n=typeof Object.is=="function"?Object.is:Fg;function ds(t,r){if($n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!p.call(r,h)||!$n(t[h],r[h]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,r){var o=kd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=kd(o)}}function Bd(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Bd(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Hd(){for(var t=window,r=Ne();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ne(t.document)}return r}function $l(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function kg(t){var r=Hd(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Bd(o.ownerDocument.documentElement,o)){if(u!==null&&$l(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!t.extend&&g>u&&(h=u,u=g,g=h),h=zd(o,g);var E=zd(o,u);h&&E&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),g>u?(t.addRange(r),t.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zg=f&&"documentMode"in document&&11>=document.documentMode,la=null,Zl=null,hs=null,Ql=!1;function Gd(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||la==null||la!==Ne(u)||(u=la,"selectionStart"in u&&$l(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),hs&&ds(hs,u)||(hs=u,u=so(Zl,"onSelect"),0<u.length&&(r=new Gl("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=la)))}function ro(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var ua={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Jl={},Vd={};f&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function io(t){if(Jl[t])return Jl[t];if(!ua[t])return t;var r=ua[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Vd)return Jl[t]=r[o];return t}var Wd=io("animationend"),jd=io("animationiteration"),Xd=io("animationstart"),Yd=io("transitionend"),qd=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,r){qd.set(t,r),l(r,[t])}for(var eu=0;eu<Kd.length;eu++){var tu=Kd[eu],Bg=tu.toLowerCase(),Hg=tu[0].toUpperCase()+tu.slice(1);Kr(Bg,"on"+Hg)}Kr(Wd,"onAnimationEnd"),Kr(jd,"onAnimationIteration"),Kr(Xd,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(Yd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function $d(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,pe(u,r,void 0,t),t.currentTarget=null}function Zd(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var E=u.length-1;0<=E;E--){var I=u[E],H=I.instance,ie=I.currentTarget;if(I=I.listener,H!==g&&h.isPropagationStopped())break e;$d(h,I,ie),g=H}else for(E=0;E<u.length;E++){if(I=u[E],H=I.instance,ie=I.currentTarget,I=I.listener,H!==g&&h.isPropagationStopped())break e;$d(h,I,ie),g=H}}}if(N)throw t=oe,N=!1,oe=null,t}function yt(t,r){var o=r[uu];o===void 0&&(o=r[uu]=new Set);var u=t+"__bubble";o.has(u)||(Qd(r,t,2,!1),o.add(u))}function nu(t,r,o){var u=0;r&&(u|=4),Qd(o,t,u,r)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ps(t){if(!t[ao]){t[ao]=!0,i.forEach(function(o){o!=="selectionchange"&&(Gg.has(o)||nu(o,!1,t),nu(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ao]||(r[ao]=!0,nu("selectionchange",!1,r))}}function Qd(t,r,o,u){switch(Sd(r)){case 1:var h=ng;break;case 4:h=rg;break;default:h=zl}o=h.bind(null,r,o,t),h=void 0,!zr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function ru(t,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var I=u.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;E=E.return}for(;I!==null;){if(E=Ai(I),E===null)return;if(H=E.tag,H===5||H===6){u=g=E;continue e}I=I.parentNode}}u=u.return}Qa(function(){var ie=g,xe=Ct(o),ye=[];e:{var ve=qd.get(t);if(ve!==void 0){var De=Gl,Oe=t;switch(t){case"keypress":if(Js(o)===0)break e;case"keydown":case"keyup":De=_g;break;case"focusin":Oe="focus",De=jl;break;case"focusout":Oe="blur",De=jl;break;case"beforeblur":case"afterblur":De=jl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Sg;break;case Wd:case jd:case Xd:De=ug;break;case Yd:De=Mg;break;case"scroll":De=ig;break;case"wheel":De=wg;break;case"copy":case"cut":case"paste":De=dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Rd}var ze=(r&4)!==0,Lt=!ze&&t==="scroll",J=ze?ve!==null?ve+"Capture":null:ve;ze=[];for(var Y=ie,te;Y!==null;){te=Y;var Me=te.stateNode;if(te.tag===5&&Me!==null&&(te=Me,J!==null&&(Me=kr(Y,J),Me!=null&&ze.push(ms(Y,Me,te)))),Lt)break;Y=Y.return}0<ze.length&&(ve=new De(ve,Oe,null,o,xe),ye.push({event:ve,listeners:ze}))}}if((r&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ve&&o!==At&&(Oe=o.relatedTarget||o.fromElement)&&(Ai(Oe)||Oe[Sr]))break e;if((De||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,De?(Oe=o.relatedTarget||o.toElement,De=ie,Oe=Oe?Ai(Oe):null,Oe!==null&&(Lt=Re(Oe),Oe!==Lt||Oe.tag!==5&&Oe.tag!==6)&&(Oe=null)):(De=null,Oe=ie),De!==Oe)){if(ze=Td,Me="onMouseLeave",J="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ze=Rd,Me="onPointerLeave",J="onPointerEnter",Y="pointer"),Lt=De==null?ve:ha(De),te=Oe==null?ve:ha(Oe),ve=new ze(Me,Y+"leave",De,o,xe),ve.target=Lt,ve.relatedTarget=te,Me=null,Ai(xe)===ie&&(ze=new ze(J,Y+"enter",Oe,o,xe),ze.target=te,ze.relatedTarget=Lt,Me=ze),Lt=Me,De&&Oe)t:{for(ze=De,J=Oe,Y=0,te=ze;te;te=ca(te))Y++;for(te=0,Me=J;Me;Me=ca(Me))te++;for(;0<Y-te;)ze=ca(ze),Y--;for(;0<te-Y;)J=ca(J),te--;for(;Y--;){if(ze===J||J!==null&&ze===J.alternate)break t;ze=ca(ze),J=ca(J)}ze=null}else ze=null;De!==null&&Jd(ye,ve,De,ze,!1),Oe!==null&&Lt!==null&&Jd(ye,Lt,Oe,ze,!0)}}e:{if(ve=ie?ha(ie):window,De=ve.nodeName&&ve.nodeName.toLowerCase(),De==="select"||De==="input"&&ve.type==="file")var Be=Ng;else if(Nd(ve))if(Ud)Be=Og;else{Be=Ug;var Ge=Dg}else(De=ve.nodeName)&&De.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Be=Ig);if(Be&&(Be=Be(t,ie))){Dd(ye,Be,o,xe);break e}Ge&&Ge(t,ve,ie),t==="focusout"&&(Ge=ve._wrapperState)&&Ge.controlled&&ve.type==="number"&&Le(ve,"number",ve.value)}switch(Ge=ie?ha(ie):window,t){case"focusin":(Nd(Ge)||Ge.contentEditable==="true")&&(la=Ge,Zl=ie,hs=null);break;case"focusout":hs=Zl=la=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Gd(ye,o,xe);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":Gd(ye,o,xe)}var Ve;if(Yl)e:{switch(t){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else oa?Ld(t,o)&&(Ye="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Ye="onCompositionStart");Ye&&(Ad&&o.locale!=="ko"&&(oa||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&oa&&(Ve=Ed()):(qr=xe,Hl="value"in qr?qr.value:qr.textContent,oa=!0)),Ge=so(ie,Ye),0<Ge.length&&(Ye=new wd(Ye,t,null,o,xe),ye.push({event:Ye,listeners:Ge}),Ve?Ye.data=Ve:(Ve=Pd(o),Ve!==null&&(Ye.data=Ve)))),(Ve=Ag?bg(t,o):Cg(t,o))&&(ie=so(ie,"onBeforeInput"),0<ie.length&&(xe=new wd("onBeforeInput","beforeinput",null,o,xe),ye.push({event:xe,listeners:ie}),xe.data=Ve))}Zd(ye,r)})}function ms(t,r,o){return{instance:t,listener:r,currentTarget:o}}function so(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=kr(t,o),g!=null&&u.unshift(ms(t,g,h)),g=kr(t,r),g!=null&&u.push(ms(t,g,h))),t=t.return}return u}function ca(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jd(t,r,o,u,h){for(var g=r._reactName,E=[];o!==null&&o!==u;){var I=o,H=I.alternate,ie=I.stateNode;if(H!==null&&H===u)break;I.tag===5&&ie!==null&&(I=ie,h?(H=kr(o,g),H!=null&&E.unshift(ms(o,H,I))):h||(H=kr(o,g),H!=null&&E.push(ms(o,H,I)))),o=o.return}E.length!==0&&t.push({event:r,listeners:E})}var Vg=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(Vg,`
`).replace(Wg,"")}function oo(t,r,o){if(r=eh(r),eh(t)!==r&&o)throw Error(n(425))}function lo(){}var iu=null,au=null;function su(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,jg=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,Xg=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(Yg)}:ou;function Yg(t){setTimeout(function(){throw t})}function lu(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),as(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);as(r)}function $r(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),ur="__reactFiber$"+da,gs="__reactProps$"+da,Sr="__reactContainer$"+da,uu="__reactEvents$"+da,qg="__reactListeners$"+da,Kg="__reactHandles$"+da;function Ai(t){var r=t[ur];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Sr]||o[ur]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=nh(t);t!==null;){if(o=t[ur])return o;t=nh(t)}return r}t=o,o=t.parentNode}return null}function vs(t){return t=t[ur]||t[Sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ha(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function uo(t){return t[gs]||null}var cu=[],fa=-1;function Zr(t){return{current:t}}function St(t){0>fa||(t.current=cu[fa],cu[fa]=null,fa--)}function _t(t,r){fa++,cu[fa]=t.current,t.current=r}var Qr={},Zt=Zr(Qr),gn=Zr(!1),bi=Qr;function pa(t,r){var o=t.type.contextTypes;if(!o)return Qr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function vn(t){return t=t.childContextTypes,t!=null}function co(){St(gn),St(Zt)}function rh(t,r,o){if(Zt.current!==Qr)throw Error(n(168));_t(Zt,r),_t(gn,o)}function ih(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,k(t)||"Unknown",h));return U({},o,u)}function ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,bi=Zt.current,_t(Zt,t),_t(gn,gn.current),!0}function ah(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=ih(t,r,bi),u.__reactInternalMemoizedMergedChildContext=t,St(gn),St(Zt),_t(Zt,t)):St(gn),_t(gn,o)}var Er=null,fo=!1,du=!1;function sh(t){Er===null?Er=[t]:Er.push(t)}function $g(t){fo=!0,sh(t)}function Jr(){if(!du&&Er!==null){du=!0;var t=0,r=qe;try{var o=Er;for(qe=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Er=null,fo=!1}catch(h){throw Er!==null&&(Er=Er.slice(t+1)),it(Tt,Jr),h}finally{qe=r,du=!1}}return null}var ma=[],ga=0,po=null,mo=0,Fn=[],kn=0,Ci=null,Mr=1,Tr="";function Li(t,r){ma[ga++]=mo,ma[ga++]=po,po=t,mo=r}function oh(t,r,o){Fn[kn++]=Mr,Fn[kn++]=Tr,Fn[kn++]=Ci,Ci=t;var u=Mr;t=Tr;var h=32-$t(u)-1;u&=~(1<<h),o+=1;var g=32-$t(r)+h;if(30<g){var E=h-h%5;g=(u&(1<<E)-1).toString(32),u>>=E,h-=E,Mr=1<<32-$t(r)+h|o<<h|u,Tr=g+t}else Mr=1<<g|o<<h|u,Tr=t}function hu(t){t.return!==null&&(Li(t,1),oh(t,1,0))}function fu(t){for(;t===po;)po=ma[--ga],ma[ga]=null,mo=ma[--ga],ma[ga]=null;for(;t===Ci;)Ci=Fn[--kn],Fn[kn]=null,Tr=Fn[--kn],Fn[kn]=null,Mr=Fn[--kn],Fn[kn]=null}var bn=null,Cn=null,Mt=!1,Zn=null;function lh(t,r){var o=Gn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function uh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,bn=t,Cn=$r(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,bn=t,Cn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Ci!==null?{id:Mr,overflow:Tr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Gn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,bn=t,Cn=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(Mt){var r=Cn;if(r){var o=r;if(!uh(t,r)){if(pu(t))throw Error(n(418));r=$r(o.nextSibling);var u=bn;r&&uh(t,r)?lh(u,o):(t.flags=t.flags&-4097|2,Mt=!1,bn=t)}}else{if(pu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Mt=!1,bn=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function go(t){if(t!==bn)return!1;if(!Mt)return ch(t),Mt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!su(t.type,t.memoizedProps)),r&&(r=Cn)){if(pu(t))throw dh(),Error(n(418));for(;r;)lh(t,r),r=$r(r.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Cn=$r(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Cn=null}}else Cn=bn?$r(t.stateNode.nextSibling):null;return!0}function dh(){for(var t=Cn;t;)t=$r(t.nextSibling)}function va(){Cn=bn=null,Mt=!1}function gu(t){Zn===null?Zn=[t]:Zn.push(t)}var Zg=G.ReactCurrentBatchConfig;function _s(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,g=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(E){var I=h.refs;E===null?delete I[g]:I[g]=E},r._stringRef=g,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function vo(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function hh(t){var r=t._init;return r(t._payload)}function fh(t){function r(J,Y){if(t){var te=J.deletions;te===null?(J.deletions=[Y],J.flags|=16):te.push(Y)}}function o(J,Y){if(!t)return null;for(;Y!==null;)r(J,Y),Y=Y.sibling;return null}function u(J,Y){for(J=new Map;Y!==null;)Y.key!==null?J.set(Y.key,Y):J.set(Y.index,Y),Y=Y.sibling;return J}function h(J,Y){return J=oi(J,Y),J.index=0,J.sibling=null,J}function g(J,Y,te){return J.index=te,t?(te=J.alternate,te!==null?(te=te.index,te<Y?(J.flags|=2,Y):te):(J.flags|=2,Y)):(J.flags|=1048576,Y)}function E(J){return t&&J.alternate===null&&(J.flags|=2),J}function I(J,Y,te,Me){return Y===null||Y.tag!==6?(Y=oc(te,J.mode,Me),Y.return=J,Y):(Y=h(Y,te),Y.return=J,Y)}function H(J,Y,te,Me){var Be=te.type;return Be===P?xe(J,Y,te.props.children,Me,te.key):Y!==null&&(Y.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===Te&&hh(Be)===Y.type)?(Me=h(Y,te.props),Me.ref=_s(J,Y,te),Me.return=J,Me):(Me=Ho(te.type,te.key,te.props,null,J.mode,Me),Me.ref=_s(J,Y,te),Me.return=J,Me)}function ie(J,Y,te,Me){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==te.containerInfo||Y.stateNode.implementation!==te.implementation?(Y=lc(te,J.mode,Me),Y.return=J,Y):(Y=h(Y,te.children||[]),Y.return=J,Y)}function xe(J,Y,te,Me,Be){return Y===null||Y.tag!==7?(Y=ki(te,J.mode,Me,Be),Y.return=J,Y):(Y=h(Y,te),Y.return=J,Y)}function ye(J,Y,te){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=oc(""+Y,J.mode,te),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case z:return te=Ho(Y.type,Y.key,Y.props,null,J.mode,te),te.ref=_s(J,null,Y),te.return=J,te;case O:return Y=lc(Y,J.mode,te),Y.return=J,Y;case Te:var Me=Y._init;return ye(J,Me(Y._payload),te)}if(be(Y)||K(Y))return Y=ki(Y,J.mode,te,null),Y.return=J,Y;vo(J,Y)}return null}function ve(J,Y,te,Me){var Be=Y!==null?Y.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Be!==null?null:I(J,Y,""+te,Me);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case z:return te.key===Be?H(J,Y,te,Me):null;case O:return te.key===Be?ie(J,Y,te,Me):null;case Te:return Be=te._init,ve(J,Y,Be(te._payload),Me)}if(be(te)||K(te))return Be!==null?null:xe(J,Y,te,Me,null);vo(J,te)}return null}function De(J,Y,te,Me,Be){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return J=J.get(te)||null,I(Y,J,""+Me,Be);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case z:return J=J.get(Me.key===null?te:Me.key)||null,H(Y,J,Me,Be);case O:return J=J.get(Me.key===null?te:Me.key)||null,ie(Y,J,Me,Be);case Te:var Ge=Me._init;return De(J,Y,te,Ge(Me._payload),Be)}if(be(Me)||K(Me))return J=J.get(te)||null,xe(Y,J,Me,Be,null);vo(Y,Me)}return null}function Oe(J,Y,te,Me){for(var Be=null,Ge=null,Ve=Y,Ye=Y=0,jt=null;Ve!==null&&Ye<te.length;Ye++){Ve.index>Ye?(jt=Ve,Ve=null):jt=Ve.sibling;var ft=ve(J,Ve,te[Ye],Me);if(ft===null){Ve===null&&(Ve=jt);break}t&&Ve&&ft.alternate===null&&r(J,Ve),Y=g(ft,Y,Ye),Ge===null?Be=ft:Ge.sibling=ft,Ge=ft,Ve=jt}if(Ye===te.length)return o(J,Ve),Mt&&Li(J,Ye),Be;if(Ve===null){for(;Ye<te.length;Ye++)Ve=ye(J,te[Ye],Me),Ve!==null&&(Y=g(Ve,Y,Ye),Ge===null?Be=Ve:Ge.sibling=Ve,Ge=Ve);return Mt&&Li(J,Ye),Be}for(Ve=u(J,Ve);Ye<te.length;Ye++)jt=De(Ve,J,Ye,te[Ye],Me),jt!==null&&(t&&jt.alternate!==null&&Ve.delete(jt.key===null?Ye:jt.key),Y=g(jt,Y,Ye),Ge===null?Be=jt:Ge.sibling=jt,Ge=jt);return t&&Ve.forEach(function(li){return r(J,li)}),Mt&&Li(J,Ye),Be}function ze(J,Y,te,Me){var Be=K(te);if(typeof Be!="function")throw Error(n(150));if(te=Be.call(te),te==null)throw Error(n(151));for(var Ge=Be=null,Ve=Y,Ye=Y=0,jt=null,ft=te.next();Ve!==null&&!ft.done;Ye++,ft=te.next()){Ve.index>Ye?(jt=Ve,Ve=null):jt=Ve.sibling;var li=ve(J,Ve,ft.value,Me);if(li===null){Ve===null&&(Ve=jt);break}t&&Ve&&li.alternate===null&&r(J,Ve),Y=g(li,Y,Ye),Ge===null?Be=li:Ge.sibling=li,Ge=li,Ve=jt}if(ft.done)return o(J,Ve),Mt&&Li(J,Ye),Be;if(Ve===null){for(;!ft.done;Ye++,ft=te.next())ft=ye(J,ft.value,Me),ft!==null&&(Y=g(ft,Y,Ye),Ge===null?Be=ft:Ge.sibling=ft,Ge=ft);return Mt&&Li(J,Ye),Be}for(Ve=u(J,Ve);!ft.done;Ye++,ft=te.next())ft=De(Ve,J,Ye,ft.value,Me),ft!==null&&(t&&ft.alternate!==null&&Ve.delete(ft.key===null?Ye:ft.key),Y=g(ft,Y,Ye),Ge===null?Be=ft:Ge.sibling=ft,Ge=ft);return t&&Ve.forEach(function(Lv){return r(J,Lv)}),Mt&&Li(J,Ye),Be}function Lt(J,Y,te,Me){if(typeof te=="object"&&te!==null&&te.type===P&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case z:e:{for(var Be=te.key,Ge=Y;Ge!==null;){if(Ge.key===Be){if(Be=te.type,Be===P){if(Ge.tag===7){o(J,Ge.sibling),Y=h(Ge,te.props.children),Y.return=J,J=Y;break e}}else if(Ge.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===Te&&hh(Be)===Ge.type){o(J,Ge.sibling),Y=h(Ge,te.props),Y.ref=_s(J,Ge,te),Y.return=J,J=Y;break e}o(J,Ge);break}else r(J,Ge);Ge=Ge.sibling}te.type===P?(Y=ki(te.props.children,J.mode,Me,te.key),Y.return=J,J=Y):(Me=Ho(te.type,te.key,te.props,null,J.mode,Me),Me.ref=_s(J,Y,te),Me.return=J,J=Me)}return E(J);case O:e:{for(Ge=te.key;Y!==null;){if(Y.key===Ge)if(Y.tag===4&&Y.stateNode.containerInfo===te.containerInfo&&Y.stateNode.implementation===te.implementation){o(J,Y.sibling),Y=h(Y,te.children||[]),Y.return=J,J=Y;break e}else{o(J,Y);break}else r(J,Y);Y=Y.sibling}Y=lc(te,J.mode,Me),Y.return=J,J=Y}return E(J);case Te:return Ge=te._init,Lt(J,Y,Ge(te._payload),Me)}if(be(te))return Oe(J,Y,te,Me);if(K(te))return ze(J,Y,te,Me);vo(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,Y!==null&&Y.tag===6?(o(J,Y.sibling),Y=h(Y,te),Y.return=J,J=Y):(o(J,Y),Y=oc(te,J.mode,Me),Y.return=J,J=Y),E(J)):o(J,Y)}return Lt}var _a=fh(!0),ph=fh(!1),_o=Zr(null),xo=null,xa=null,vu=null;function _u(){vu=xa=xo=null}function xu(t){var r=_o.current;St(_o),t._currentValue=r}function yu(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function ya(t,r){xo=t,vu=xa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(_n=!0),t.firstContext=null)}function zn(t){var r=t._currentValue;if(vu!==t)if(t={context:t,memoizedValue:r,next:null},xa===null){if(xo===null)throw Error(n(308));xa=t,xo.dependencies={lanes:0,firstContext:t}}else xa=xa.next=t;return r}var Pi=null;function Su(t){Pi===null?Pi=[t]:Pi.push(t)}function mh(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,Su(r)):(o.next=h.next,h.next=o),r.interleaved=o,wr(t,u)}function wr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ei=!1;function Eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ti(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(ht&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,wr(t,o)}return h=u.interleaved,h===null?(r.next=r,Su(u)):(r.next=h.next,h.next=r),u.interleaved=r,wr(t,o)}function yo(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,wi(t,o)}}function vh(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function So(t,r,o,u){var h=t.updateQueue;ei=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var H=I,ie=H.next;H.next=null,E===null?g=ie:E.next=ie,E=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==E&&(I===null?xe.firstBaseUpdate=ie:I.next=ie,xe.lastBaseUpdate=H))}if(g!==null){var ye=h.baseState;E=0,xe=ie=H=null,I=g;do{var ve=I.lane,De=I.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:De,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Oe=t,ze=I;switch(ve=r,De=o,ze.tag){case 1:if(Oe=ze.payload,typeof Oe=="function"){ye=Oe.call(De,ye,ve);break e}ye=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=ze.payload,ve=typeof Oe=="function"?Oe.call(De,ye,ve):Oe,ve==null)break e;ye=U({},ye,ve);break e;case 2:ei=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ve=h.effects,ve===null?h.effects=[I]:ve.push(I))}else De={eventTime:De,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ie=xe=De,H=ye):xe=xe.next=De,E|=ve;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(xe===null&&(H=ye),h.baseState=H,h.firstBaseUpdate=ie,h.lastBaseUpdate=xe,r=h.shared.interleaved,r!==null){h=r;do E|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Ui|=E,t.lanes=E,t.memoizedState=ye}}function _h(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var xs={},cr=Zr(xs),ys=Zr(xs),Ss=Zr(xs);function Ni(t){if(t===xs)throw Error(n(174));return t}function Mu(t,r){switch(_t(Ss,r),_t(ys,t),_t(cr,xs),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=He(r,t)}St(cr),_t(cr,r)}function Sa(){St(cr),St(ys),St(Ss)}function xh(t){Ni(Ss.current);var r=Ni(cr.current),o=He(r,t.type);r!==o&&(_t(ys,t),_t(cr,o))}function Tu(t){ys.current===t&&(St(cr),St(ys))}var wt=Zr(0);function Eo(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var wu=[];function Ru(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var Mo=G.ReactCurrentDispatcher,Au=G.ReactCurrentBatchConfig,Di=0,Rt=null,Ft=null,Vt=null,To=!1,Es=!1,Ms=0,Qg=0;function Qt(){throw Error(n(321))}function bu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!$n(t[o],r[o]))return!1;return!0}function Cu(t,r,o,u,h,g){if(Di=g,Rt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Mo.current=t===null||t.memoizedState===null?nv:rv,t=o(u,h),Es){g=0;do{if(Es=!1,Ms=0,25<=g)throw Error(n(301));g+=1,Vt=Ft=null,r.updateQueue=null,Mo.current=iv,t=o(u,h)}while(Es)}if(Mo.current=Ao,r=Ft!==null&&Ft.next!==null,Di=0,Vt=Ft=Rt=null,To=!1,r)throw Error(n(300));return t}function Lu(){var t=Ms!==0;return Ms=0,t}function dr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Rt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Bn(){if(Ft===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var r=Vt===null?Rt.memoizedState:Vt.next;if(r!==null)Vt=r,Ft=t;else{if(t===null)throw Error(n(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?Rt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Ts(t,r){return typeof r=="function"?r(t):r}function Pu(t){var r=Bn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Ft,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var I=E=null,H=null,ie=g;do{var xe=ie.lane;if((Di&xe)===xe)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:t(u,ie.action);else{var ye={lane:xe,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(I=H=ye,E=u):H=H.next=ye,Rt.lanes|=xe,Ui|=xe}ie=ie.next}while(ie!==null&&ie!==g);H===null?E=u:H.next=I,$n(u,r.memoizedState)||(_n=!0),r.memoizedState=u,r.baseState=E,r.baseQueue=H,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do g=h.lane,Rt.lanes|=g,Ui|=g,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Nu(t){var r=Bn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do g=t(g,E.action),E=E.next;while(E!==h);$n(g,r.memoizedState)||(_n=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function yh(){}function Sh(t,r){var o=Rt,u=Bn(),h=r(),g=!$n(u.memoizedState,h);if(g&&(u.memoizedState=h,_n=!0),u=u.queue,Du(Th.bind(null,o,u,t),[t]),u.getSnapshot!==r||g||Vt!==null&&Vt.memoizedState.tag&1){if(o.flags|=2048,ws(9,Mh.bind(null,o,u,h,r),void 0,null),Wt===null)throw Error(n(349));(Di&30)!==0||Eh(o,r,h)}return h}function Eh(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Rt.updateQueue,r===null?(r={lastEffect:null,stores:null},Rt.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Mh(t,r,o,u){r.value=o,r.getSnapshot=u,wh(r)&&Rh(t)}function Th(t,r,o){return o(function(){wh(r)&&Rh(t)})}function wh(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!$n(t,o)}catch{return!0}}function Rh(t){var r=wr(t,1);r!==null&&tr(r,t,1,-1)}function Ah(t){var r=dr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},r.queue=t,t=t.dispatch=tv.bind(null,Rt,t),[r.memoizedState,t]}function ws(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=Rt.updateQueue,r===null?(r={lastEffect:null,stores:null},Rt.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function bh(){return Bn().memoizedState}function wo(t,r,o,u){var h=dr();Rt.flags|=t,h.memoizedState=ws(1|r,o,void 0,u===void 0?null:u)}function Ro(t,r,o,u){var h=Bn();u=u===void 0?null:u;var g=void 0;if(Ft!==null){var E=Ft.memoizedState;if(g=E.destroy,u!==null&&bu(u,E.deps)){h.memoizedState=ws(r,o,g,u);return}}Rt.flags|=t,h.memoizedState=ws(1|r,o,g,u)}function Ch(t,r){return wo(8390656,8,t,r)}function Du(t,r){return Ro(2048,8,t,r)}function Lh(t,r){return Ro(4,2,t,r)}function Ph(t,r){return Ro(4,4,t,r)}function Nh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Dh(t,r,o){return o=o!=null?o.concat([t]):null,Ro(4,4,Nh.bind(null,r,t),o)}function Uu(){}function Uh(t,r){var o=Bn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&bu(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function Ih(t,r){var o=Bn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&bu(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function Oh(t,r,o){return(Di&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=o):($n(o,r)||(o=fn(),Rt.lanes|=o,Ui|=o,t.baseState=!0),r)}function Jg(t,r){var o=qe;qe=o!==0&&4>o?o:4,t(!0);var u=Au.transition;Au.transition={};try{t(!1),r()}finally{qe=o,Au.transition=u}}function Fh(){return Bn().memoizedState}function ev(t,r,o){var u=ai(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},kh(t))zh(r,o);else if(o=mh(t,r,o,u),o!==null){var h=ln();tr(o,t,u,h),Bh(o,r,u)}}function tv(t,r,o){var u=ai(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(kh(t))zh(r,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,I=g(E,o);if(h.hasEagerState=!0,h.eagerState=I,$n(I,E)){var H=r.interleaved;H===null?(h.next=h,Su(r)):(h.next=H.next,H.next=h),r.interleaved=h;return}}catch{}finally{}o=mh(t,r,h,u),o!==null&&(h=ln(),tr(o,t,u,h),Bh(o,r,u))}}function kh(t){var r=t.alternate;return t===Rt||r!==null&&r===Rt}function zh(t,r){Es=To=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Bh(t,r,o){if((o&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,wi(t,o)}}var Ao={readContext:zn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},nv={readContext:zn,useCallback:function(t,r){return dr().memoizedState=[t,r===void 0?null:r],t},useContext:zn,useEffect:Ch,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,wo(4194308,4,Nh.bind(null,r,t),o)},useLayoutEffect:function(t,r){return wo(4194308,4,t,r)},useInsertionEffect:function(t,r){return wo(4,2,t,r)},useMemo:function(t,r){var o=dr();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=dr();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=ev.bind(null,Rt,t),[u.memoizedState,t]},useRef:function(t){var r=dr();return t={current:t},r.memoizedState=t},useState:Ah,useDebugValue:Uu,useDeferredValue:function(t){return dr().memoizedState=t},useTransition:function(){var t=Ah(!1),r=t[0];return t=Jg.bind(null,t[1]),dr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=Rt,h=dr();if(Mt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Wt===null)throw Error(n(349));(Di&30)!==0||Eh(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,Ch(Th.bind(null,u,g,t),[t]),u.flags|=2048,ws(9,Mh.bind(null,u,g,o,r),void 0,null),o},useId:function(){var t=dr(),r=Wt.identifierPrefix;if(Mt){var o=Tr,u=Mr;o=(u&~(1<<32-$t(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ms++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Qg++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},rv={readContext:zn,useCallback:Uh,useContext:zn,useEffect:Du,useImperativeHandle:Dh,useInsertionEffect:Lh,useLayoutEffect:Ph,useMemo:Ih,useReducer:Pu,useRef:bh,useState:function(){return Pu(Ts)},useDebugValue:Uu,useDeferredValue:function(t){var r=Bn();return Oh(r,Ft.memoizedState,t)},useTransition:function(){var t=Pu(Ts)[0],r=Bn().memoizedState;return[t,r]},useMutableSource:yh,useSyncExternalStore:Sh,useId:Fh,unstable_isNewReconciler:!1},iv={readContext:zn,useCallback:Uh,useContext:zn,useEffect:Du,useImperativeHandle:Dh,useInsertionEffect:Lh,useLayoutEffect:Ph,useMemo:Ih,useReducer:Nu,useRef:bh,useState:function(){return Nu(Ts)},useDebugValue:Uu,useDeferredValue:function(t){var r=Bn();return Ft===null?r.memoizedState=t:Oh(r,Ft.memoizedState,t)},useTransition:function(){var t=Nu(Ts)[0],r=Bn().memoizedState;return[t,r]},useMutableSource:yh,useSyncExternalStore:Sh,useId:Fh,unstable_isNewReconciler:!1};function Qn(t,r){if(t&&t.defaultProps){r=U({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Iu(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:U({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var bo={isMounted:function(t){return(t=t._reactInternals)?Re(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=ln(),h=ai(t),g=Rr(u,h);g.payload=r,o!=null&&(g.callback=o),r=ti(t,g,h),r!==null&&(tr(r,t,h,u),yo(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=ln(),h=ai(t),g=Rr(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=ti(t,g,h),r!==null&&(tr(r,t,h,u),yo(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=ln(),u=ai(t),h=Rr(o,u);h.tag=2,r!=null&&(h.callback=r),r=ti(t,h,u),r!==null&&(tr(r,t,u,o),yo(r,t,u))}};function Hh(t,r,o,u,h,g,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,g,E):r.prototype&&r.prototype.isPureReactComponent?!ds(o,u)||!ds(h,g):!0}function Gh(t,r,o){var u=!1,h=Qr,g=r.contextType;return typeof g=="object"&&g!==null?g=zn(g):(h=vn(r)?bi:Zt.current,u=r.contextTypes,g=(u=u!=null)?pa(t,h):Qr),r=new r(o,g),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bo,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=g),r}function Vh(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&bo.enqueueReplaceState(r,r.state,null)}function Ou(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},Eu(t);var g=r.contextType;typeof g=="object"&&g!==null?h.context=zn(g):(g=vn(r)?bi:Zt.current,h.context=pa(t,g)),h.state=t.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Iu(t,r,g,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&bo.enqueueReplaceState(h,h.state,null),So(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ea(t,r){try{var o="",u=r;do o+=B(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:r,stack:h,digest:null}}function Fu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function ku(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var av=typeof WeakMap=="function"?WeakMap:Map;function Wh(t,r,o){o=Rr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Io||(Io=!0,Ju=u),ku(t,r)},o}function jh(t,r,o){o=Rr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){ku(t,r)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){ku(t,r),typeof u!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),o}function Xh(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new av;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=xv.bind(null,t,r,o),r.then(t,t))}function Yh(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function qh(t,r,o,u,h){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Rr(-1,1),r.tag=2,ti(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var sv=G.ReactCurrentOwner,_n=!1;function on(t,r,o,u){r.child=t===null?ph(r,null,o,u):_a(r,t.child,o,u)}function Kh(t,r,o,u,h){o=o.render;var g=r.ref;return ya(r,h),u=Cu(t,r,o,u,g,h),o=Lu(),t!==null&&!_n?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,Ar(t,r,h)):(Mt&&o&&hu(r),r.flags|=1,on(t,r,u,h),r.child)}function $h(t,r,o,u,h){if(t===null){var g=o.type;return typeof g=="function"&&!sc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,Zh(t,r,g,u,h)):(t=Ho(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(g=t.child,(t.lanes&h)===0){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:ds,o(E,u)&&t.ref===r.ref)return Ar(t,r,h)}return r.flags|=1,t=oi(g,u),t.ref=r.ref,t.return=r,r.child=t}function Zh(t,r,o,u,h){if(t!==null){var g=t.memoizedProps;if(ds(g,u)&&t.ref===r.ref)if(_n=!1,r.pendingProps=u=g,(t.lanes&h)!==0)(t.flags&131072)!==0&&(_n=!0);else return r.lanes=t.lanes,Ar(t,r,h)}return zu(t,r,o,u,h)}function Qh(t,r,o){var u=r.pendingProps,h=u.children,g=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Ta,Ln),Ln|=o;else{if((o&1073741824)===0)return t=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,_t(Ta,Ln),Ln|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,_t(Ta,Ln),Ln|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,_t(Ta,Ln),Ln|=u;return on(t,r,h,o),r.child}function Jh(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function zu(t,r,o,u,h){var g=vn(o)?bi:Zt.current;return g=pa(r,g),ya(r,h),o=Cu(t,r,o,u,g,h),u=Lu(),t!==null&&!_n?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,Ar(t,r,h)):(Mt&&u&&hu(r),r.flags|=1,on(t,r,o,h),r.child)}function ef(t,r,o,u,h){if(vn(o)){var g=!0;ho(r)}else g=!1;if(ya(r,h),r.stateNode===null)Lo(t,r),Gh(r,o,u),Ou(r,o,u,h),u=!0;else if(t===null){var E=r.stateNode,I=r.memoizedProps;E.props=I;var H=E.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=zn(ie):(ie=vn(o)?bi:Zt.current,ie=pa(r,ie));var xe=o.getDerivedStateFromProps,ye=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==u||H!==ie)&&Vh(r,E,u,ie),ei=!1;var ve=r.memoizedState;E.state=ve,So(r,u,E,h),H=r.memoizedState,I!==u||ve!==H||gn.current||ei?(typeof xe=="function"&&(Iu(r,o,xe,u),H=r.memoizedState),(I=ei||Hh(r,o,I,u,ve,H,ie))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=H),E.props=u,E.state=H,E.context=ie,u=I):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{E=r.stateNode,gh(t,r),I=r.memoizedProps,ie=r.type===r.elementType?I:Qn(r.type,I),E.props=ie,ye=r.pendingProps,ve=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=zn(H):(H=vn(o)?bi:Zt.current,H=pa(r,H));var De=o.getDerivedStateFromProps;(xe=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ye||ve!==H)&&Vh(r,E,u,H),ei=!1,ve=r.memoizedState,E.state=ve,So(r,u,E,h);var Oe=r.memoizedState;I!==ye||ve!==Oe||gn.current||ei?(typeof De=="function"&&(Iu(r,o,De,u),Oe=r.memoizedState),(ie=ei||Hh(r,o,ie,u,ve,Oe,H)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Oe,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Oe,H)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Oe),E.props=u,E.state=Oe,E.context=H,u=ie):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(r.flags|=1024),u=!1)}return Bu(t,r,o,u,g,h)}function Bu(t,r,o,u,h,g){Jh(t,r);var E=(r.flags&128)!==0;if(!u&&!E)return h&&ah(r,o,!1),Ar(t,r,g);u=r.stateNode,sv.current=r;var I=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&E?(r.child=_a(r,t.child,null,g),r.child=_a(r,null,I,g)):on(t,r,I,g),r.memoizedState=u.state,h&&ah(r,o,!0),r.child}function tf(t){var r=t.stateNode;r.pendingContext?rh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&rh(t,r.context,!1),Mu(t,r.containerInfo)}function nf(t,r,o,u,h){return va(),gu(h),r.flags|=256,on(t,r,o,u),r.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function rf(t,r,o){var u=r.pendingProps,h=wt.current,g=!1,E=(r.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(h&2)!==0),I?(g=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),_t(wt,h&1),t===null)return mu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=u.children,t=u.fallback,g?(u=r.mode,g=r.child,E={mode:"hidden",children:E},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Go(E,u,0,null),t=ki(t,u,o,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=Gu(o),r.memoizedState=Hu,t):Vu(r,E));if(h=t.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return ov(t,r,E,u,I,h,o);if(g){g=u.fallback,E=r.mode,h=t.child,I=h.sibling;var H={mode:"hidden",children:u.children};return(E&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=H,r.deletions=null):(u=oi(h,H),u.subtreeFlags=h.subtreeFlags&14680064),I!==null?g=oi(I,g):(g=ki(g,E,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,E=t.child.memoizedState,E=E===null?Gu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=t.childLanes&~o,r.memoizedState=Hu,u}return g=t.child,t=g.sibling,u=oi(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function Vu(t,r){return r=Go({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Co(t,r,o,u){return u!==null&&gu(u),_a(r,t.child,null,o),t=Vu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function ov(t,r,o,u,h,g,E){if(o)return r.flags&256?(r.flags&=-257,u=Fu(Error(n(422))),Co(t,r,E,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=Go({mode:"visible",children:u.children},h,0,null),g=ki(g,h,E,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&_a(r,t.child,null,E),r.child.memoizedState=Gu(E),r.memoizedState=Hu,g);if((r.mode&1)===0)return Co(t,r,E,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var I=u.dgst;return u=I,g=Error(n(419)),u=Fu(g,u,void 0),Co(t,r,E,u)}if(I=(E&t.childLanes)!==0,_n||I){if(u=Wt,u!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,wr(t,h),tr(u,t,h,-1))}return ac(),u=Fu(Error(n(421))),Co(t,r,E,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=yv.bind(null,t),h._reactRetry=r,null):(t=g.treeContext,Cn=$r(h.nextSibling),bn=r,Mt=!0,Zn=null,t!==null&&(Fn[kn++]=Mr,Fn[kn++]=Tr,Fn[kn++]=Ci,Mr=t.id,Tr=t.overflow,Ci=r),r=Vu(r,u.children),r.flags|=4096,r)}function af(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),yu(t.return,r,o)}function Wu(t,r,o,u,h){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function sf(t,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(on(t,r,u.children,o),u=wt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&af(t,o,r);else if(t.tag===19)af(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(_t(wt,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&Eo(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Wu(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&Eo(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Wu(r,!0,o,null,g);break;case"together":Wu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Lo(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Ui|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=oi(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=oi(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function lv(t,r,o){switch(r.tag){case 3:tf(r),va();break;case 5:xh(r);break;case 1:vn(r.type)&&ho(r);break;case 4:Mu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;_t(_o,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(_t(wt,wt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?rf(t,r,o):(_t(wt,wt.current&1),t=Ar(t,r,o),t!==null?t.sibling:null);_t(wt,wt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(t.flags&128)!==0){if(u)return sf(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),_t(wt,wt.current),u)break;return null;case 22:case 23:return r.lanes=0,Qh(t,r,o)}return Ar(t,r,o)}var of,ju,lf,uf;of=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ju=function(){},lf=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Ni(cr.current);var g=null;switch(o){case"input":h=L(t,h),u=L(t,u),g=[];break;case"select":h=U({},h,{value:void 0}),u=U({},u,{value:void 0}),g=[];break;case"textarea":h=Xe(t,h),u=Xe(t,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=lo)}ne(o,u);var E;o=null;for(ie in h)if(!u.hasOwnProperty(ie)&&h.hasOwnProperty(ie)&&h[ie]!=null)if(ie==="style"){var I=h[ie];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in u){var H=u[ie];if(I=h!=null?h[ie]:void 0,u.hasOwnProperty(ie)&&H!==I&&(H!=null||I!=null))if(ie==="style")if(I){for(E in I)!I.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&I[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(g||(g=[]),g.push(ie,o)),o=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(g=g||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&yt("scroll",t),g||I===H||(g=[])):(g=g||[]).push(ie,H))}o&&(g=g||[]).push("style",o);var ie=g;(r.updateQueue=ie)&&(r.flags|=4)}},uf=function(t,r,o,u){o!==u&&(r.flags|=4)};function Rs(t,r){if(!Mt)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Jt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function uv(t,r,o){var u=r.pendingProps;switch(fu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(r),null;case 1:return vn(r.type)&&co(),Jt(r),null;case 3:return u=r.stateNode,Sa(),St(gn),St(Zt),Ru(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(go(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Zn!==null&&(nc(Zn),Zn=null))),ju(t,r),Jt(r),null;case 5:Tu(r);var h=Ni(Ss.current);if(o=r.type,t!==null&&r.stateNode!=null)lf(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Jt(r),null}if(t=Ni(cr.current),go(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[ur]=r,u[gs]=g,t=(r.mode&1)!==0,o){case"dialog":yt("cancel",u),yt("close",u);break;case"iframe":case"object":case"embed":yt("load",u);break;case"video":case"audio":for(h=0;h<fs.length;h++)yt(fs[h],u);break;case"source":yt("error",u);break;case"img":case"image":case"link":yt("error",u),yt("load",u);break;case"details":yt("toggle",u);break;case"input":we(u,g),yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},yt("invalid",u);break;case"textarea":Ie(u,g),yt("invalid",u)}ne(o,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var I=g[E];E==="children"?typeof I=="string"?u.textContent!==I&&(g.suppressHydrationWarning!==!0&&oo(u.textContent,I,t),h=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&oo(u.textContent,I,t),h=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&yt("scroll",u)}switch(o){case"input":Ee(u),Se(u,g,!0);break;case"textarea":Ee(u),Ze(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=lo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pt(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(o,{is:u.is}):(t=E.createElement(o),o==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,o),t[ur]=r,t[gs]=u,of(t,r,!1,!1),r.stateNode=t;e:{switch(E=Yt(o,u),o){case"dialog":yt("cancel",t),yt("close",t),h=u;break;case"iframe":case"object":case"embed":yt("load",t),h=u;break;case"video":case"audio":for(h=0;h<fs.length;h++)yt(fs[h],t);h=u;break;case"source":yt("error",t),h=u;break;case"img":case"image":case"link":yt("error",t),yt("load",t),h=u;break;case"details":yt("toggle",t),h=u;break;case"input":we(t,u),h=L(t,u),yt("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=U({},u,{value:void 0}),yt("invalid",t);break;case"textarea":Ie(t,u),h=Xe(t,u),yt("invalid",t);break;default:h=u}ne(o,h),I=h;for(g in I)if(I.hasOwnProperty(g)){var H=I[g];g==="style"?Ke(t,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Je(t,H)):g==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&wn(t,H):typeof H=="number"&&wn(t,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?H!=null&&g==="onScroll"&&yt("scroll",t):H!=null&&S(t,g,H,E))}switch(o){case"input":Ee(t),Se(t,u,!1);break;case"textarea":Ee(t),Ze(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ee(u.value));break;case"select":t.multiple=!!u.multiple,g=u.value,g!=null?Fe(t,!!u.multiple,g,!1):u.defaultValue!=null&&Fe(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=lo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Jt(r),null;case 6:if(t&&r.stateNode!=null)uf(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Ni(Ss.current),Ni(cr.current),go(r)){if(u=r.stateNode,o=r.memoizedProps,u[ur]=r,(g=u.nodeValue!==o)&&(t=bn,t!==null))switch(t.tag){case 3:oo(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(u.nodeValue,o,(t.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[ur]=r,r.stateNode=u}return Jt(r),null;case 13:if(St(wt),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Cn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)dh(),va(),r.flags|=98560,g=!1;else if(g=go(r),u!==null&&u.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[ur]=r}else va(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Jt(r),g=!1}else Zn!==null&&(nc(Zn),Zn=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(wt.current&1)!==0?kt===0&&(kt=3):ac())),r.updateQueue!==null&&(r.flags|=4),Jt(r),null);case 4:return Sa(),ju(t,r),t===null&&ps(r.stateNode.containerInfo),Jt(r),null;case 10:return xu(r.type._context),Jt(r),null;case 17:return vn(r.type)&&co(),Jt(r),null;case 19:if(St(wt),g=r.memoizedState,g===null)return Jt(r),null;if(u=(r.flags&128)!==0,E=g.rendering,E===null)if(u)Rs(g,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(E=Eo(t),E!==null){for(r.flags|=128,Rs(g,!1),u=E.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,t=u,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,t=E.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return _t(wt,wt.current&1|2),r.child}t=t.sibling}g.tail!==null&&mt()>wa&&(r.flags|=128,u=!0,Rs(g,!1),r.lanes=4194304)}else{if(!u)if(t=Eo(E),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Rs(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Mt)return Jt(r),null}else 2*mt()-g.renderingStartTime>wa&&o!==1073741824&&(r.flags|=128,u=!0,Rs(g,!1),r.lanes=4194304);g.isBackwards?(E.sibling=r.child,r.child=E):(o=g.last,o!==null?o.sibling=E:r.child=E,g.last=E)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=mt(),r.sibling=null,o=wt.current,_t(wt,u?o&1|2:o&1),r):(Jt(r),null);case 22:case 23:return ic(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Ln&1073741824)!==0&&(Jt(r),r.subtreeFlags&6&&(r.flags|=8192)):Jt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function cv(t,r){switch(fu(r),r.tag){case 1:return vn(r.type)&&co(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Sa(),St(gn),St(Zt),Ru(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Tu(r),null;case 13:if(St(wt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));va()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return St(wt),null;case 4:return Sa(),null;case 10:return xu(r.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Po=!1,en=!1,dv=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Ma(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){bt(t,r,u)}else o.current=null}function Xu(t,r,o){try{o()}catch(u){bt(t,r,u)}}var cf=!1;function hv(t,r){if(iu=$s,t=Hd(),$l(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,I=-1,H=-1,ie=0,xe=0,ye=t,ve=null;t:for(;;){for(var De;ye!==o||h!==0&&ye.nodeType!==3||(I=E+h),ye!==g||u!==0&&ye.nodeType!==3||(H=E+u),ye.nodeType===3&&(E+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ve=ye,ye=De;for(;;){if(ye===t)break t;if(ve===o&&++ie===h&&(I=E),ve===g&&++xe===u&&(H=E),(De=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=De}o=I===-1||H===-1?null:{start:I,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(au={focusedElem:t,selectionRange:o},$s=!1,Ue=r;Ue!==null;)if(r=Ue,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Ue=t;else for(;Ue!==null;){r=Ue;try{var Oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Oe!==null){var ze=Oe.memoizedProps,Lt=Oe.memoizedState,J=r.stateNode,Y=J.getSnapshotBeforeUpdate(r.elementType===r.type?ze:Qn(r.type,ze),Lt);J.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){bt(r,r.return,Me)}if(t=r.sibling,t!==null){t.return=r.return,Ue=t;break}Ue=r.return}return Oe=cf,cf=!1,Oe}function As(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var g=h.destroy;h.destroy=void 0,g!==void 0&&Xu(r,o,g)}h=h.next}while(h!==u)}}function No(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Yu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function df(t){var r=t.alternate;r!==null&&(t.alternate=null,df(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ur],delete r[gs],delete r[uu],delete r[qg],delete r[Kg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hf(t){return t.tag===5||t.tag===3||t.tag===4}function ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=lo));else if(u!==4&&(t=t.child,t!==null))for(qu(t,r,o),t=t.sibling;t!==null;)qu(t,r,o),t=t.sibling}function Ku(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Ku(t,r,o),t=t.sibling;t!==null;)Ku(t,r,o),t=t.sibling}var qt=null,Jn=!1;function ni(t,r,o){for(o=o.child;o!==null;)pf(t,r,o),o=o.sibling}function pf(t,r,o){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(or,o)}catch{}switch(o.tag){case 5:en||Ma(o,r);case 6:var u=qt,h=Jn;qt=null,ni(t,r,o),qt=u,Jn=h,qt!==null&&(Jn?(t=qt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):qt.removeChild(o.stateNode));break;case 18:qt!==null&&(Jn?(t=qt,o=o.stateNode,t.nodeType===8?lu(t.parentNode,o):t.nodeType===1&&lu(t,o),as(t)):lu(qt,o.stateNode));break;case 4:u=qt,h=Jn,qt=o.stateNode.containerInfo,Jn=!0,ni(t,r,o),qt=u,Jn=h;break;case 0:case 11:case 14:case 15:if(!en&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Xu(o,r,E),h=h.next}while(h!==u)}ni(t,r,o);break;case 1:if(!en&&(Ma(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){bt(o,r,I)}ni(t,r,o);break;case 21:ni(t,r,o);break;case 22:o.mode&1?(en=(u=en)||o.memoizedState!==null,ni(t,r,o),en=u):ni(t,r,o);break;default:ni(t,r,o)}}function mf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new dv),r.forEach(function(u){var h=Sv.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function er(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=t,E=r,I=E;e:for(;I!==null;){switch(I.tag){case 5:qt=I.stateNode,Jn=!1;break e;case 3:qt=I.stateNode.containerInfo,Jn=!0;break e;case 4:qt=I.stateNode.containerInfo,Jn=!0;break e}I=I.return}if(qt===null)throw Error(n(160));pf(g,E,h),qt=null,Jn=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(ie){bt(h,r,ie)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)gf(r,t),r=r.sibling}function gf(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(r,t),hr(t),u&4){try{As(3,t,t.return),No(3,t)}catch(ze){bt(t,t.return,ze)}try{As(5,t,t.return)}catch(ze){bt(t,t.return,ze)}}break;case 1:er(r,t),hr(t),u&512&&o!==null&&Ma(o,o.return);break;case 5:if(er(r,t),hr(t),u&512&&o!==null&&Ma(o,o.return),t.flags&32){var h=t.stateNode;try{wn(h,"")}catch(ze){bt(t,t.return,ze)}}if(u&4&&(h=t.stateNode,h!=null)){var g=t.memoizedProps,E=o!==null?o.memoizedProps:g,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&de(h,g),Yt(I,E);var ie=Yt(I,g);for(E=0;E<H.length;E+=2){var xe=H[E],ye=H[E+1];xe==="style"?Ke(h,ye):xe==="dangerouslySetInnerHTML"?Je(h,ye):xe==="children"?wn(h,ye):S(h,xe,ye,ie)}switch(I){case"input":ue(h,g);break;case"textarea":ke(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var De=g.value;De!=null?Fe(h,!!g.multiple,De,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Fe(h,!!g.multiple,g.defaultValue,!0):Fe(h,!!g.multiple,g.multiple?[]:"",!1))}h[gs]=g}catch(ze){bt(t,t.return,ze)}}break;case 6:if(er(r,t),hr(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,g=t.memoizedProps;try{h.nodeValue=g}catch(ze){bt(t,t.return,ze)}}break;case 3:if(er(r,t),hr(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{as(r.containerInfo)}catch(ze){bt(t,t.return,ze)}break;case 4:er(r,t),hr(t);break;case 13:er(r,t),hr(t),h=t.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Qu=mt())),u&4&&mf(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(en=(ie=en)||xe,er(r,t),en=ie):er(r,t),hr(t),u&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!xe&&(t.mode&1)!==0)for(Ue=t,xe=t.child;xe!==null;){for(ye=Ue=xe;Ue!==null;){switch(ve=Ue,De=ve.child,ve.tag){case 0:case 11:case 14:case 15:As(4,ve,ve.return);break;case 1:Ma(ve,ve.return);var Oe=ve.stateNode;if(typeof Oe.componentWillUnmount=="function"){u=ve,o=ve.return;try{r=u,Oe.props=r.memoizedProps,Oe.state=r.memoizedState,Oe.componentWillUnmount()}catch(ze){bt(u,o,ze)}}break;case 5:Ma(ve,ve.return);break;case 22:if(ve.memoizedState!==null){xf(ye);continue}}De!==null?(De.return=ve,Ue=De):xf(ye)}xe=xe.sibling}e:for(xe=null,ye=t;;){if(ye.tag===5){if(xe===null){xe=ye;try{h=ye.stateNode,ie?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=ye.stateNode,H=ye.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=Pe("display",E))}catch(ze){bt(t,t.return,ze)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=ie?"":ye.memoizedProps}catch(ze){bt(t,t.return,ze)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:er(r,t),hr(t),u&4&&mf(t);break;case 21:break;default:er(r,t),hr(t)}}function hr(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(hf(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(wn(h,""),u.flags&=-33);var g=ff(t);Ku(t,g,h);break;case 3:case 4:var E=u.stateNode.containerInfo,I=ff(t);qu(t,I,E);break;default:throw Error(n(161))}}catch(H){bt(t,t.return,H)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function fv(t,r,o){Ue=t,vf(t)}function vf(t,r,o){for(var u=(t.mode&1)!==0;Ue!==null;){var h=Ue,g=h.child;if(h.tag===22&&u){var E=h.memoizedState!==null||Po;if(!E){var I=h.alternate,H=I!==null&&I.memoizedState!==null||en;I=Po;var ie=en;if(Po=E,(en=H)&&!ie)for(Ue=h;Ue!==null;)E=Ue,H=E.child,E.tag===22&&E.memoizedState!==null?yf(h):H!==null?(H.return=E,Ue=H):yf(h);for(;g!==null;)Ue=g,vf(g),g=g.sibling;Ue=h,Po=I,en=ie}_f(t)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ue=g):_f(t)}}function _f(t){for(;Ue!==null;){var r=Ue;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:en||No(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!en)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Qn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&_h(r,g,u);break;case 3:var E=r.updateQueue;if(E!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}_h(r,E,o)}break;case 5:var I=r.stateNode;if(o===null&&r.flags&4){o=I;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ie=r.alternate;if(ie!==null){var xe=ie.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&as(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}en||r.flags&512&&Yu(r)}catch(ve){bt(r,r.return,ve)}}if(r===t){Ue=null;break}if(o=r.sibling,o!==null){o.return=r.return,Ue=o;break}Ue=r.return}}function xf(t){for(;Ue!==null;){var r=Ue;if(r===t){Ue=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Ue=o;break}Ue=r.return}}function yf(t){for(;Ue!==null;){var r=Ue;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{No(4,r)}catch(H){bt(r,o,H)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(H){bt(r,h,H)}}var g=r.return;try{Yu(r)}catch(H){bt(r,g,H)}break;case 5:var E=r.return;try{Yu(r)}catch(H){bt(r,E,H)}}}catch(H){bt(r,r.return,H)}if(r===t){Ue=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Ue=I;break}Ue=r.return}}var pv=Math.ceil,Do=G.ReactCurrentDispatcher,$u=G.ReactCurrentOwner,Hn=G.ReactCurrentBatchConfig,ht=0,Wt=null,Nt=null,Kt=0,Ln=0,Ta=Zr(0),kt=0,bs=null,Ui=0,Uo=0,Zu=0,Cs=null,xn=null,Qu=0,wa=1/0,br=null,Io=!1,Ju=null,ri=null,Oo=!1,ii=null,Fo=0,Ls=0,ec=null,ko=-1,zo=0;function ln(){return(ht&6)!==0?mt():ko!==-1?ko:ko=mt()}function ai(t){return(t.mode&1)===0?1:(ht&2)!==0&&Kt!==0?Kt&-Kt:Zg.transition!==null?(zo===0&&(zo=fn()),zo):(t=qe,t!==0||(t=window.event,t=t===void 0?16:Sd(t.type)),t)}function tr(t,r,o,u){if(50<Ls)throw Ls=0,ec=null,Error(n(185));Vr(t,o,u),((ht&2)===0||t!==Wt)&&(t===Wt&&((ht&2)===0&&(Uo|=o),kt===4&&si(t,Kt)),yn(t,u),o===1&&ht===0&&(r.mode&1)===0&&(wa=mt()+500,fo&&Jr()))}function yn(t,r){var o=t.callbackNode;dt(t,r);var u=Mi(t,t===Wt?Kt:0);if(u===0)o!==null&&vt(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&vt(o),r===1)t.tag===0?$g(Ef.bind(null,t)):sh(Ef.bind(null,t)),Xg(function(){(ht&6)===0&&Jr()}),o=null;else{switch(lr(u)){case 1:o=Tt;break;case 4:o=an;break;case 16:o=Ot;break;case 536870912:o=ut;break;default:o=Ot}o=Lf(o,Sf.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Sf(t,r){if(ko=-1,zo=0,(ht&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ra()&&t.callbackNode!==o)return null;var u=Mi(t,t===Wt?Kt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=Bo(t,u);else{r=u;var h=ht;ht|=2;var g=Tf();(Wt!==t||Kt!==r)&&(br=null,wa=mt()+500,Oi(t,r));do try{vv();break}catch(I){Mf(t,I)}while(!0);_u(),Do.current=g,ht=h,Nt!==null?r=0:(Wt=null,Kt=0,r=kt)}if(r!==0){if(r===2&&(h=Ja(t),h!==0&&(u=h,r=tc(t,h))),r===1)throw o=bs,Oi(t,0),si(t,u),yn(t,mt()),o;if(r===6)si(t,u);else{if(h=t.current.alternate,(u&30)===0&&!mv(h)&&(r=Bo(t,u),r===2&&(g=Ja(t),g!==0&&(u=g,r=tc(t,g))),r===1))throw o=bs,Oi(t,0),si(t,u),yn(t,mt()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Fi(t,xn,br);break;case 3:if(si(t,u),(u&130023424)===u&&(r=Qu+500-mt(),10<r)){if(Mi(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){ln(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=ou(Fi.bind(null,t,xn,br),r);break}Fi(t,xn,br);break;case 4:if(si(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var E=31-$t(u);g=1<<E,E=r[E],E>h&&(h=E),u&=~g}if(u=h,u=mt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*pv(u/1960))-u,10<u){t.timeoutHandle=ou(Fi.bind(null,t,xn,br),u);break}Fi(t,xn,br);break;case 5:Fi(t,xn,br);break;default:throw Error(n(329))}}}return yn(t,mt()),t.callbackNode===o?Sf.bind(null,t):null}function tc(t,r){var o=Cs;return t.current.memoizedState.isDehydrated&&(Oi(t,r).flags|=256),t=Bo(t,r),t!==2&&(r=xn,xn=o,r!==null&&nc(r)),t}function nc(t){xn===null?xn=t:xn.push.apply(xn,t)}function mv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!$n(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function si(t,r){for(r&=~Zu,r&=~Uo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-$t(r),u=1<<o;t[o]=-1,r&=~u}}function Ef(t){if((ht&6)!==0)throw Error(n(327));Ra();var r=Mi(t,0);if((r&1)===0)return yn(t,mt()),null;var o=Bo(t,r);if(t.tag!==0&&o===2){var u=Ja(t);u!==0&&(r=u,o=tc(t,u))}if(o===1)throw o=bs,Oi(t,0),si(t,r),yn(t,mt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Fi(t,xn,br),yn(t,mt()),null}function rc(t,r){var o=ht;ht|=1;try{return t(r)}finally{ht=o,ht===0&&(wa=mt()+500,fo&&Jr())}}function Ii(t){ii!==null&&ii.tag===0&&(ht&6)===0&&Ra();var r=ht;ht|=1;var o=Hn.transition,u=qe;try{if(Hn.transition=null,qe=1,t)return t()}finally{qe=u,Hn.transition=o,ht=r,(ht&6)===0&&Jr()}}function ic(){Ln=Ta.current,St(Ta)}function Oi(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,jg(o)),Nt!==null)for(o=Nt.return;o!==null;){var u=o;switch(fu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&co();break;case 3:Sa(),St(gn),St(Zt),Ru();break;case 5:Tu(u);break;case 4:Sa();break;case 13:St(wt);break;case 19:St(wt);break;case 10:xu(u.type._context);break;case 22:case 23:ic()}o=o.return}if(Wt=t,Nt=t=oi(t.current,null),Kt=Ln=r,kt=0,bs=null,Zu=Uo=Ui=0,xn=Cs=null,Pi!==null){for(r=0;r<Pi.length;r++)if(o=Pi[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var E=g.next;g.next=h,u.next=E}o.pending=u}Pi=null}return t}function Mf(t,r){do{var o=Nt;try{if(_u(),Mo.current=Ao,To){for(var u=Rt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}To=!1}if(Di=0,Vt=Ft=Rt=null,Es=!1,Ms=0,$u.current=null,o===null||o.return===null){kt=1,bs=r,Nt=null;break}e:{var g=t,E=o.return,I=o,H=r;if(r=Kt,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,xe=I,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var De=Yh(E);if(De!==null){De.flags&=-257,qh(De,E,I,g,r),De.mode&1&&Xh(g,ie,r),r=De,H=ie;var Oe=r.updateQueue;if(Oe===null){var ze=new Set;ze.add(H),r.updateQueue=ze}else Oe.add(H);break e}else{if((r&1)===0){Xh(g,ie,r),ac();break e}H=Error(n(426))}}else if(Mt&&I.mode&1){var Lt=Yh(E);if(Lt!==null){(Lt.flags&65536)===0&&(Lt.flags|=256),qh(Lt,E,I,g,r),gu(Ea(H,I));break e}}g=H=Ea(H,I),kt!==4&&(kt=2),Cs===null?Cs=[g]:Cs.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var J=Wh(g,H,r);vh(g,J);break e;case 1:I=H;var Y=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(ri===null||!ri.has(te)))){g.flags|=65536,r&=-r,g.lanes|=r;var Me=jh(g,I,r);vh(g,Me);break e}}g=g.return}while(g!==null)}Rf(o)}catch(Be){r=Be,Nt===o&&o!==null&&(Nt=o=o.return);continue}break}while(!0)}function Tf(){var t=Do.current;return Do.current=Ao,t===null?Ao:t}function ac(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||(Ui&268435455)===0&&(Uo&268435455)===0||si(Wt,Kt)}function Bo(t,r){var o=ht;ht|=2;var u=Tf();(Wt!==t||Kt!==r)&&(br=null,Oi(t,r));do try{gv();break}catch(h){Mf(t,h)}while(!0);if(_u(),ht=o,Do.current=u,Nt!==null)throw Error(n(261));return Wt=null,Kt=0,kt}function gv(){for(;Nt!==null;)wf(Nt)}function vv(){for(;Nt!==null&&!Rn();)wf(Nt)}function wf(t){var r=Cf(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,r===null?Rf(t):Nt=r,$u.current=null}function Rf(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=uv(o,r,Ln),o!==null){Nt=o;return}}else{if(o=cv(o,r),o!==null){o.flags&=32767,Nt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Nt=null;return}}if(r=r.sibling,r!==null){Nt=r;return}Nt=r=t}while(r!==null);kt===0&&(kt=5)}function Fi(t,r,o){var u=qe,h=Hn.transition;try{Hn.transition=null,qe=1,_v(t,r,o,u)}finally{Hn.transition=h,qe=u}return null}function _v(t,r,o,u){do Ra();while(ii!==null);if((ht&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=o.lanes|o.childLanes;if(Ti(t,g),t===Wt&&(Nt=Wt=null,Kt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Oo||(Oo=!0,Lf(Ot,function(){return Ra(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Hn.transition,Hn.transition=null;var E=qe;qe=1;var I=ht;ht|=4,$u.current=null,hv(t,o),gf(o,t),kg(au),$s=!!iu,au=iu=null,t.current=o,fv(o),qn(),ht=I,qe=E,Hn.transition=g}else t.current=o;if(Oo&&(Oo=!1,ii=t,Fo=h),g=t.pendingLanes,g===0&&(ri=null),Ul(o.stateNode),yn(t,mt()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Io)throw Io=!1,t=Ju,Ju=null,t;return(Fo&1)!==0&&t.tag!==0&&Ra(),g=t.pendingLanes,(g&1)!==0?t===ec?Ls++:(Ls=0,ec=t):Ls=0,Jr(),null}function Ra(){if(ii!==null){var t=lr(Fo),r=Hn.transition,o=qe;try{if(Hn.transition=null,qe=16>t?16:t,ii===null)var u=!1;else{if(t=ii,ii=null,Fo=0,(ht&6)!==0)throw Error(n(331));var h=ht;for(ht|=4,Ue=t.current;Ue!==null;){var g=Ue,E=g.child;if((Ue.flags&16)!==0){var I=g.deletions;if(I!==null){for(var H=0;H<I.length;H++){var ie=I[H];for(Ue=ie;Ue!==null;){var xe=Ue;switch(xe.tag){case 0:case 11:case 15:As(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,Ue=ye;else for(;Ue!==null;){xe=Ue;var ve=xe.sibling,De=xe.return;if(df(xe),xe===ie){Ue=null;break}if(ve!==null){ve.return=De,Ue=ve;break}Ue=De}}}var Oe=g.alternate;if(Oe!==null){var ze=Oe.child;if(ze!==null){Oe.child=null;do{var Lt=ze.sibling;ze.sibling=null,ze=Lt}while(ze!==null)}}Ue=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Ue=E;else e:for(;Ue!==null;){if(g=Ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:As(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,Ue=J;break e}Ue=g.return}}var Y=t.current;for(Ue=Y;Ue!==null;){E=Ue;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,Ue=te;else e:for(E=Y;Ue!==null;){if(I=Ue,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:No(9,I)}}catch(Be){bt(I,I.return,Be)}if(I===E){Ue=null;break e}var Me=I.sibling;if(Me!==null){Me.return=I.return,Ue=Me;break e}Ue=I.return}}if(ht=h,Jr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(or,t)}catch{}u=!0}return u}finally{qe=o,Hn.transition=r}}return!1}function Af(t,r,o){r=Ea(o,r),r=Wh(t,r,1),t=ti(t,r,1),r=ln(),t!==null&&(Vr(t,1,r),yn(t,r))}function bt(t,r,o){if(t.tag===3)Af(t,t,o);else for(;r!==null;){if(r.tag===3){Af(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ri===null||!ri.has(u))){t=Ea(o,t),t=jh(r,t,1),r=ti(r,t,1),t=ln(),r!==null&&(Vr(r,1,t),yn(r,t));break}}r=r.return}}function xv(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=ln(),t.pingedLanes|=t.suspendedLanes&o,Wt===t&&(Kt&o)===o&&(kt===4||kt===3&&(Kt&130023424)===Kt&&500>mt()-Qu?Oi(t,0):Zu|=o),yn(t,r)}function bf(t,r){r===0&&((t.mode&1)===0?r=1:(r=na,na<<=1,(na&130023424)===0&&(na=4194304)));var o=ln();t=wr(t,r),t!==null&&(Vr(t,r,o),yn(t,o))}function yv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),bf(t,o)}function Sv(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),bf(t,o)}var Cf;Cf=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||gn.current)_n=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return _n=!1,lv(t,r,o);_n=(t.flags&131072)!==0}else _n=!1,Mt&&(r.flags&1048576)!==0&&oh(r,mo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Lo(t,r),t=r.pendingProps;var h=pa(r,Zt.current);ya(r,o),h=Cu(null,r,u,t,h,o);var g=Lu();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,vn(u)?(g=!0,ho(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Eu(r),h.updater=bo,r.stateNode=h,h._reactInternals=r,Ou(r,u,t,o),r=Bu(null,r,u,!0,g,o)):(r.tag=0,Mt&&g&&hu(r),on(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Lo(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=Mv(u),t=Qn(u,t),h){case 0:r=zu(null,r,u,t,o);break e;case 1:r=ef(null,r,u,t,o);break e;case 11:r=Kh(null,r,u,t,o);break e;case 14:r=$h(null,r,u,Qn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),zu(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),ef(t,r,u,h,o);case 3:e:{if(tf(r),t===null)throw Error(n(387));u=r.pendingProps,g=r.memoizedState,h=g.element,gh(t,r),So(r,u,null,o);var E=r.memoizedState;if(u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ea(Error(n(423)),r),r=nf(t,r,u,o,h);break e}else if(u!==h){h=Ea(Error(n(424)),r),r=nf(t,r,u,o,h);break e}else for(Cn=$r(r.stateNode.containerInfo.firstChild),bn=r,Mt=!0,Zn=null,o=ph(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(va(),u===h){r=Ar(t,r,o);break e}on(t,r,u,o)}r=r.child}return r;case 5:return xh(r),t===null&&mu(r),u=r.type,h=r.pendingProps,g=t!==null?t.memoizedProps:null,E=h.children,su(u,h)?E=null:g!==null&&su(u,g)&&(r.flags|=32),Jh(t,r),on(t,r,E,o),r.child;case 6:return t===null&&mu(r),null;case 13:return rf(t,r,o);case 4:return Mu(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=_a(r,null,u,o):on(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),Kh(t,r,u,h,o);case 7:return on(t,r,r.pendingProps,o),r.child;case 8:return on(t,r,r.pendingProps.children,o),r.child;case 12:return on(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,E=h.value,_t(_o,u._currentValue),u._currentValue=E,g!==null)if($n(g.value,E)){if(g.children===h.children&&!gn.current){r=Ar(t,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var I=g.dependencies;if(I!==null){E=g.child;for(var H=I.firstContext;H!==null;){if(H.context===u){if(g.tag===1){H=Rr(-1,o&-o),H.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var xe=ie.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),ie.pending=H}}g.lanes|=o,H=g.alternate,H!==null&&(H.lanes|=o),yu(g.return,o,r),I.lanes|=o;break}H=H.next}}else if(g.tag===10)E=g.type===r.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(n(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),yu(E,o,r),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===r){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}on(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,ya(r,o),h=zn(h),u=u(h),r.flags|=1,on(t,r,u,o),r.child;case 14:return u=r.type,h=Qn(u,r.pendingProps),h=Qn(u.type,h),$h(t,r,u,h,o);case 15:return Zh(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),Lo(t,r),r.tag=1,vn(u)?(t=!0,ho(r)):t=!1,ya(r,o),Gh(r,u,h),Ou(r,u,h,o),Bu(null,r,u,!0,t,o);case 19:return sf(t,r,o);case 22:return Qh(t,r,o)}throw Error(n(156,r.tag))};function Lf(t,r){return it(t,r)}function Ev(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,r,o,u){return new Ev(t,r,o,u)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mv(t){if(typeof t=="function")return sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===F)return 11;if(t===me)return 14}return 2}function oi(t,r){var o=t.alternate;return o===null?(o=Gn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ho(t,r,o,u,h,g){var E=2;if(u=t,typeof t=="function")sc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case P:return ki(o.children,h,g,r);case $:E=8,h|=8;break;case q:return t=Gn(12,o,r,h|2),t.elementType=q,t.lanes=g,t;case se:return t=Gn(13,o,r,h),t.elementType=se,t.lanes=g,t;case ae:return t=Gn(19,o,r,h),t.elementType=ae,t.lanes=g,t;case re:return Go(o,h,g,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q:E=10;break e;case ce:E=9;break e;case F:E=11;break e;case me:E=14;break e;case Te:E=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Gn(E,o,r,h),r.elementType=t,r.type=u,r.lanes=g,r}function ki(t,r,o,u){return t=Gn(7,t,u,r),t.lanes=o,t}function Go(t,r,o,u){return t=Gn(22,t,u,r),t.elementType=re,t.lanes=o,t.stateNode={isHidden:!1},t}function oc(t,r,o){return t=Gn(6,t,null,r),t.lanes=o,t}function lc(t,r,o){return r=Gn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Tv(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kn(0),this.expirationTimes=Kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function uc(t,r,o,u,h,g,E,I,H){return t=new Tv(t,r,o,I,H),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Gn(3,null,null,r),t.current=g,g.stateNode=t,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(g),t}function wv(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function Pf(t){if(!t)return Qr;t=t._reactInternals;e:{if(Re(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(vn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(vn(o))return ih(t,o,r)}return r}function Nf(t,r,o,u,h,g,E,I,H){return t=uc(o,u,!0,t,h,g,E,I,H),t.context=Pf(null),o=t.current,u=ln(),h=ai(o),g=Rr(u,h),g.callback=r??null,ti(o,g,h),t.current.lanes=h,Vr(t,h,u),yn(t,u),t}function Vo(t,r,o,u){var h=r.current,g=ln(),E=ai(h);return o=Pf(o),r.context===null?r.context=o:r.pendingContext=o,r=Rr(g,E),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=ti(h,r,E),t!==null&&(tr(t,h,E,g),yo(t,h,E)),E}function Wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Df(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function cc(t,r){Df(t,r),(t=t.alternate)&&Df(t,r)}function Rv(){return null}var Uf=typeof reportError=="function"?reportError:function(t){console.error(t)};function dc(t){this._internalRoot=t}jo.prototype.render=dc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Vo(t,r,null,null)},jo.prototype.unmount=dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ii(function(){Vo(null,t,null,null)}),r[Sr]=null}};function jo(t){this._internalRoot=t}jo.prototype.unstable_scheduleHydration=function(t){if(t){var r=sn();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Yr.length&&r!==0&&r<Yr[o].priority;o++);Yr.splice(o,0,t),o===0&&xd(t)}};function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function If(){}function Av(t,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var ie=Wo(E);g.call(ie)}}var E=Nf(r,u,t,0,null,!1,!1,"",If);return t._reactRootContainer=E,t[Sr]=E.current,ps(t.nodeType===8?t.parentNode:t),Ii(),E}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var I=u;u=function(){var ie=Wo(H);I.call(ie)}}var H=uc(t,0,!1,null,null,!1,!1,"",If);return t._reactRootContainer=H,t[Sr]=H.current,ps(t.nodeType===8?t.parentNode:t),Ii(function(){Vo(r,H,o,u)}),H}function Yo(t,r,o,u,h){var g=o._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var I=h;h=function(){var H=Wo(E);I.call(H)}}Vo(r,E,t,h)}else E=Av(o,r,t,h,u);return Wo(E)}ra=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Gr(r.pendingLanes);o!==0&&(wi(r,o|1),yn(r,mt()),(ht&6)===0&&(wa=mt()+500,Jr()))}break;case 13:Ii(function(){var u=wr(t,1);if(u!==null){var h=ln();tr(u,t,1,h)}}),cc(t,1)}},pn=function(t){if(t.tag===13){var r=wr(t,134217728);if(r!==null){var o=ln();tr(r,t,134217728,o)}cc(t,134217728)}},mn=function(t){if(t.tag===13){var r=ai(t),o=wr(t,r);if(o!==null){var u=ln();tr(o,t,r,u)}cc(t,r)}},sn=function(){return qe},ia=function(t,r){var o=qe;try{return qe=t,r()}finally{qe=o}},Fr=function(t,r,o){switch(r){case"input":if(ue(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=uo(u);if(!h)throw Error(n(90));Ce(u),ue(u,h)}}}break;case"textarea":ke(t,o);break;case"select":r=o.value,r!=null&&Fe(t,!!o.multiple,r,!1)}},Xn=rc,sr=Ii;var bv={usingClientEntryPoint:!1,Events:[vs,ha,uo,yr,On,rc]},Ps={findFiberByHostInstance:Ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cv={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tt(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||Rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{or=qo.inject(Cv),hn=qo}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bv,Sn.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(r))throw Error(n(200));return wv(t,r,null,o)},Sn.createRoot=function(t,r){if(!hc(t))throw Error(n(299));var o=!1,u="",h=Uf;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=uc(t,1,!1,null,null,o,!1,u,h),t[Sr]=r.current,ps(t.nodeType===8?t.parentNode:t),new dc(r)},Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=tt(r),t=t===null?null:t.stateNode,t},Sn.flushSync=function(t){return Ii(t)},Sn.hydrate=function(t,r,o){if(!Xo(r))throw Error(n(200));return Yo(null,t,r,!0,o)},Sn.hydrateRoot=function(t,r,o){if(!hc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",E=Uf;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),r=Nf(r,null,t,1,o??null,h,!1,g,E),t[Sr]=r.current,ps(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new jo(r)},Sn.render=function(t,r,o){if(!Xo(r))throw Error(n(200));return Yo(null,t,r,!1,o)},Sn.unmountComponentAtNode=function(t){if(!Xo(t))throw Error(n(40));return t._reactRootContainer?(Ii(function(){Yo(null,null,t,!1,function(){t._reactRootContainer=null,t[Sr]=null})}),!0):!1},Sn.unstable_batchedUpdates=rc,Sn.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Xo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Yo(t,r,o,!1,u)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var Vf;function Fv(){if(Vf)return mc.exports;Vf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mc.exports=Ov(),mc.exports}var Wf;function kv(){if(Wf)return Ko;Wf=1;var s=Fv();return Ko.createRoot=s.createRoot,Ko.hydrateRoot=s.hydrateRoot,Ko}var zv=kv();function Bv({onStart:s}){return D.jsx("div",{className:"landing-screen",children:D.jsxs("div",{className:"landing-card",children:[D.jsx("div",{className:"landing-seal","aria-hidden":"true",children:"📜"}),D.jsx("h1",{children:"בית המדרש"}),D.jsx("p",{className:"landing-lead",children:"לפני שנכנסים — כך משחקים:"}),D.jsxs("ol",{className:"landing-steps",children:[D.jsx("li",{children:"חפשו חפצים בחדר לפי הרמז הקטן למטה."}),D.jsx("li",{children:"ענו על החידה, חשבו גימטרייה, והזינו ספרה במנעול."}),D.jsx("li",{children:"אחרי עשר ספרות — היכנסו לחדר הפנימי וכתבו את המכתב."})]}),D.jsx("p",{className:"landing-note",children:"סובבו את החוגה ואז לחצו «הזן» — בלי ללחוץ על הספרות עצמן."}),D.jsx("button",{type:"button",className:"btn-primary btn-large",onClick:s,children:"כניסה לבית המדרש"})]})})}function Hv(s,e){return{yaw:s/100*360-180,pitch:(50-e)/100*180}}function Vs(s,e){const n=s*Math.PI/180,i=e*Math.PI/180,a=Math.cos(i);return[-a*Math.cos(n),Math.sin(i),-a*Math.sin(n)]}function fr(s,e,n){return{...Hv(s,e),flatX:s,flatY:e,radiusPx:n}}const ji=[{id:1,object:"ארון",aramaic:"יקיד ונהיר. מאי ניהו?",aramaicDisplay:"יָקִיד וְנָהִיר. מַאי נִיהוּ?",hebrew:"בוער ומאיר. מה זה?",hebrewDisplay:"בּוֹעֵר וּמֵאִיר. מַה זֶּה?",options:["שרגא","ספרא","יומא"],optionsDisplay:["שַׁרְגָא","סִפְרָא","יוֹמָא"],answer:"שרגא",letters:[["ש",300],["ר",200],["ג",3],["א",1]],total:504,dialDigit:4,hotspot:fr(30,34,56)},{id:2,object:"שרגא",aramaic:"לית ליה טעם. מאי ניהו?",aramaicDisplay:"לֵית לֵיהּ טַעְמָא. מַאי נִיהוּ?",hebrew:"אין לו טעם. מה זה?",hebrewDisplay:"אֵין לוֹ טַעַם. מַה זֶּה?",options:["מיא","חמרא","נהמא"],optionsDisplay:["מַיָּא","חַמְרָא","נַהֲמָא"],answer:"מיא",letters:[["מ",40],["י",10],["א",1]],total:51,dialDigit:1,hotspot:fr(7,26,48)},{id:3,object:"מיא",aramaic:"יתיב וגמיר כל יומא. מאן ניהו?",aramaicDisplay:"יָתֵיב וְגָמֵיר כָּל יוֹמָא. מַאן נִיהוּ?",hebrew:"יושב ולומד כל יום. מי זה?",hebrewDisplay:"יוֹשֵׁב וְלוֹמֵד כָּל יוֹם. מִי זֶה?",options:["תלמידא","רבי","גברא"],optionsDisplay:["תַּלְמִידָא","רַבִּי","גַּבְרָא"],answer:"תלמידא",letters:[["ת",400],["ל",30],["מ",40],["י",10],["ד",4],["א",1]],total:485,dialDigit:5,hotspot:fr(19,76,50)},{id:4,object:"תלמידא",aramaic:"ממליל, וכולהון שתקין. מאן ניהו?",aramaicDisplay:"מְמַלֵּל, וְכוּלְהוֹן שׁוּתְקִין. מַאן נִיהוּ?",hebrew:"מדבר, וכולם שותקים. מי זה?",hebrewDisplay:"מְדַבֵּר, וְכֻלָּם שׁוֹתְקִים. מִי זֶה?",options:["רבי","תלמידא","כלבא"],optionsDisplay:["רַבִּי","תַּלְמִידָא","כַּלְבָּא"],answer:"רבי",letters:[["ר",200],["ב",2],["י",10]],total:212,dialDigit:2,hotspot:fr(60,50,58)},{id:5,object:"רבי",aramaic:"פתח לנהורא. מאי ניהו?",aramaicDisplay:"פָּתַח לִנְהוֹרָא. מַאי נִיהוּ?",hebrew:"פותח לאור. מה זה?",hebrewDisplay:"פּוֹתֵחַ לָאוֹר. מַה זֶּה?",options:["חלון","תרעא","שרגא"],optionsDisplay:["חַלּוֹן","תַּרְעָא","שַׁרְגָא"],answer:"חלון",letters:[["ח",8],["ל",30],["ו",6],["נ",50]],total:94,dialDigit:4,hotspot:fr(51,42,56)},{id:6,object:"חלון",aramaic:"מלא מלין, ולא ממליל. מאי ניהו?",aramaicDisplay:"מְלֵי מִילִין, וְלָא מְמַלֵּל. מַאי נִיהוּ?",hebrew:"מלא מילים, ולא מדבר. מה זה?",hebrewDisplay:"מָלֵא מִילִים, וְלֹא מְדַבֵּר. מַה זֶּה?",options:["ספרא","גברא","תרעא"],optionsDisplay:["סִפְרָא","גַּבְרָא","תַּרְעָא"],answer:"ספרא",letters:[["ס",60],["פ",80],["ר",200],["א",1]],total:341,dialDigit:1,hotspot:fr(12,38,48)},{id:7,object:"ספרא",aramaic:"קרינן ביה וגמרין. מאי ניהו?",aramaicDisplay:"קָרֵינַן בֵּיהּ וְגָמְרִין. מַאי נִיהוּ?",hebrew:"קוראים בו ולומדים. מה זה?",hebrewDisplay:"קוֹרְאִים בּוֹ וְלוֹמְדִים. מַה זֶּה?",options:["ספרא","חלון","מיא"],optionsDisplay:["סִפְרָא","חַלּוֹן","מַיָּא"],answer:"ספרא",letters:[["ס",60],["פ",80],["ר",200],["א",1]],total:341,dialDigit:1,hotspot:fr(34,62,60)},{id:8,object:"ספסלא",aramaic:"יתיבין עלוי וגמרין. מאי ניהו?",aramaicDisplay:"יָתְבִין עֲלוֹהִי וְגָמְרִין. מַאי נִיהוּ?",hebrew:"יושבים עליו ולומדים. מה זה?",hebrewDisplay:"יוֹשְׁבִים עָלָיו וְלוֹמְדִים. מַה זֶּה?",options:["ספסלא","פתורא","ערסא"],optionsDisplay:["סַפְסְלָא","פָּתוֹרָא","עַרְסָא"],answer:"ספסלא",letters:[["ס",60],["פ",80],["ס",60],["ל",30],["א",1]],total:231,dialDigit:1,hotspot:fr(4,62,48)},{id:9,object:"תרעא",aramaic:"כולהון עיילין ביה. מאי ניהו?",aramaicDisplay:"כוּלְהוֹן עָיְלִין בֵּיהּ. מַאי נִיהוּ?",hebrew:"כולם נכנסים בו. מה זה?",hebrewDisplay:"כֻּלָּם נִכְנָסִים בּוֹ. מַה זֶּה?",options:["תרעא","ביתא","עמודא"],optionsDisplay:["תַּרְעָא","בֵּיתָא","עַמּוּדָא"],answer:"תרעא",letters:[["ת",400],["ר",200],["ע",70],["א",1]],total:671,dialDigit:1,hotspot:fr(96,45,56)},{id:10,object:"קולמוס",aramaic:"נפיק מפומא, ולא הדר. מאי ניהי?",aramaicDisplay:"נָפֵיק מִפּוּמָא, וְלָא הָדַר. מַאי נִיהוּ?",hebrew:"יוצא מהפה, ולא חוזר. מה זה?",hebrewDisplay:"יוֹצֵא מִן הַפֶּה, וְלֹא חוֹזֵר. מַה זֶּה?",options:["פתגמא","מילתא","ספרא"],optionsDisplay:["פִּתְגָמָא","מִילְתָא","סִפְרָא"],answer:"פתגמא",letters:[["פ",80],["ת",400],["ג",3],["מ",40],["א",1]],total:524,dialDigit:4,hotspot:fr(28,74,46)}];function Gv(s){const e=[...s];for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function Vv(s){return Math.abs(s)%10}function fm(s,e){const n=s.options.indexOf(e);return n>=0&&s.optionsDisplay?s.optionsDisplay[n]:e}function Wv(s){return s<0||s>=ji.length?null:ji[s].object}function jv(){return{currentRiddleIndex:0,solvedCount:0,dialDigits:Array(10).fill(null),lockUnlocked:!1}}function Xv(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("debug")==="1"}const pm="escape-room-beit-midrash",Yv="escape-complete",qv="escape-ready";function Kv(){if(typeof window>"u")return!1;if(new URLSearchParams(window.location.search).get("embed")==="1")return!0;try{return window.parent!==window}catch{return!0}}function ld(){return!1}function $v(){var e;if(typeof window>"u")return;const s={source:pm,type:Yv};try{window.parent.postMessage(s,"*")}catch{}try{(e=window.opener)==null||e.postMessage(s,"*")}catch{}}function Zv(){if(!(typeof window>"u"))try{window.parent.postMessage({source:pm,type:qv},"*")}catch{}}function mm(s,e){const n="/menavtim/escape-room/",i=n.endsWith("/")?n:`${n}/`,a=s.replace(/^\//,"");return`${i}${a}?v=${e}`}const gm=mm("beit-midrash-mishna-ceiling-lamps.png","marks1"),vm=mm("inner-room-360.png","1"),pr={yaw:0,pitch:-18,radiusPx:110,flatX:50,flatY:62};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="160",Aa={ROTATE:0,DOLLY:1,PAN:2},ba={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_m=1,Qv=2,Ur=3,_i=0,Mn=1,Wi=100,Zc=204,Qc=205,xm=0,Jv=1,e_=2,vi=0,t_=1,n_=2,r_=3,i_=4,a_=5,s_=6,ym=300,Xa=301,Ya=302,Jc=303,ed=304,Al=306,td=1e3,Ir=1001,nd=1002,cn=1003,jf=1004,_c=1005,ar=1006,o_=1007,El=1008,Xi=1009,ud=1012,Sm=1013,mi=1014,gi=1015,Ws=1016,Em=1017,Mm=1018,Yi=1020,gr=1023,qi=1026,qa=1027,Tm=1029,wm=1031,Rm=1033,xc=33776,yc=33777,Sc=33778,Ec=33779,Xf=35840,Yf=35841,qf=35842,Kf=35843,Am=36196,$f=37492,Zf=37496,Qf=37808,Jf=37809,ep=37810,tp=37811,np=37812,rp=37813,ip=37814,ap=37815,sp=37816,op=37817,lp=37818,up=37819,cp=37820,dp=37821,Mc=36492,hp=36494,fp=36495,pp=36284,mp=36285,gp=36286,bm=3e3,Ki=3001,vr="",zt="srgb",Or="srgb-linear",cd="display-p3",bl="display-p3-linear",Ml="linear",Et="srgb",Tl="rec709",wl="p3",Ca=7680,vp=35044,_p="300 es",rd=1035,Ka=2e3,Rl=2001;class Ji{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,l=i.length;a<l;a++)i[a].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=Math.PI/180,id=180/Math.PI;function Xs(){const s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(tn[255&s]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[255&e]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[63&n|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[255&i]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function dn(s,e,n){return Math.max(e,Math.min(n,s))}function l_(s,e){return(s%e+e)%e}function Tc(s,e,n){return(1-n)*s+n*e}function xp(s){return(s&s-1)==0&&s!==0}function ad(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ds(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}const u_={DEG2RAD:yl};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*a+e.x,this.y=l*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,i,a,l,c,f,p,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,l,c,f,p,d)}set(e,n,i,a,l,c,f,p,d){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=n,m[4]=l,m[5]=p,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,l=this.elements,c=i[0],f=i[3],p=i[6],d=i[1],m=i[4],v=i[7],_=i[2],y=i[5],b=i[8],T=a[0],x=a[3],C=a[6],w=a[1],S=a[4],G=a[7],z=a[2],O=a[5],P=a[8];return l[0]=c*T+f*w+p*z,l[3]=c*x+f*S+p*O,l[6]=c*C+f*G+p*P,l[1]=d*T+m*w+v*z,l[4]=d*x+m*S+v*O,l[7]=d*C+m*G+v*P,l[2]=_*T+y*w+b*z,l[5]=_*x+y*S+b*O,l[8]=_*C+y*G+b*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8];return n*c*m-n*f*d-i*l*m+i*f*p+a*l*d-a*c*p}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8],v=m*c-f*d,_=f*p-m*l,y=d*l-c*p,b=n*v+i*_+a*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(a*d-m*i)*T,e[2]=(f*i-a*c)*T,e[3]=_*T,e[4]=(m*n-a*p)*T,e[5]=(a*l-f*n)*T,e[6]=y*T,e[7]=(i*p-d*n)*T,e[8]=(c*n-i*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(i*p,i*d,-i*(p*c+d*f)+c+e,-a*d,a*p,-a*(-d*c+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new st;function Cm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function c_(){const s=js("canvas");return s.style.display="block",s}const yp={};function zs(s){s in yp||(yp[s]=!0,console.warn(s))}const Sp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ep=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$o={[Or]:{transfer:Ml,primaries:Tl,toReference:s=>s,fromReference:s=>s},[zt]:{transfer:Et,primaries:Tl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[bl]:{transfer:Ml,primaries:wl,toReference:s=>s.applyMatrix3(Ep),fromReference:s=>s.applyMatrix3(Sp)},[cd]:{transfer:Et,primaries:wl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ep),fromReference:s=>s.applyMatrix3(Sp).convertLinearToSRGB()}},d_=new Set([Or,bl]),gt={enabled:!0,_workingColorSpace:Or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!d_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const i=$o[e].toReference;return(0,$o[n].fromReference)(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return $o[s].primaries},getTransfer:function(s){return s===vr?Ml:$o[s].transfer}};function ja(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Rc(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}let La;class Lm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{La===void 0&&(La=js("canvas")),La.width=e.width,La.height=e.height;const i=La.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=La}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=js("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=255*ja(l[c]/255);return i.putImageData(a,0,0),n}if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(255*ja(n[i]/255)):n[i]=ja(n[i]);return{data:n,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h_=0;class Pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Xs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Ac(a[c].image)):l.push(Ac(a[c]))}else l=Ac(a);i.url=l}return n||(e.images[this.uuid]=i),i}}function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f_=0;class Tn extends Ji{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=1001,a=1001,l=1006,c=1008,f=1023,p=1009,d=Tn.DEFAULT_ANISOTROPY,m=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Xs(),this.name="",this.source=new Pm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Ki?zt:vr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?Ki:bm}set encoding(e){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?zt:vr}}Tn.DEFAULT_IMAGE=null,Tn.DEFAULT_MAPPING=ym,Tn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,i=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*i+c[11]*a+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,l;const p=e.elements,d=p[0],m=p[4],v=p[8],_=p[1],y=p[5],b=p[9],T=p[2],x=p[6],C=p[10];if(Math.abs(m-_)<.01&&Math.abs(v-T)<.01&&Math.abs(b-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+T)<.1&&Math.abs(b+x)<.1&&Math.abs(d+y+C-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,G=(y+1)/2,z=(C+1)/2,O=(m+_)/4,P=(v+T)/4,$=(b+x)/4;return S>G&&S>z?S<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(S),a=O/i,l=P/i):G>z?G<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(G),i=O/a,l=$/a):z<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),i=P/l,a=$/l),this.set(i,a,l,n),this}let w=Math.sqrt((x-b)*(x-b)+(v-T)*(v-T)+(_-m)*(_-m));return Math.abs(w)<.001&&(w=1),this.x=(x-b)/w,this.y=(v-T)/w,this.z=(_-m)/w,this.w=Math.acos((d+y+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p_ extends Ji{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const a={width:e,height:n,depth:1};i.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ki?zt:vr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ar,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){this.width===e&&this.height===n&&this.depth===i||(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Pm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends p_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Nm extends Tn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class m_ extends Tn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,l,c,f){let p=i[a+0],d=i[a+1],m=i[a+2],v=i[a+3];const _=l[c+0],y=l[c+1],b=l[c+2],T=l[c+3];if(f===0)return e[n+0]=p,e[n+1]=d,e[n+2]=m,void(e[n+3]=v);if(f===1)return e[n+0]=_,e[n+1]=y,e[n+2]=b,void(e[n+3]=T);if(v!==T||p!==_||d!==y||m!==b){let x=1-f;const C=p*_+d*y+m*b+v*T,w=C>=0?1:-1,S=1-C*C;if(S>Number.EPSILON){const z=Math.sqrt(S),O=Math.atan2(z,C*w);x=Math.sin(x*O)/z,f=Math.sin(f*O)/z}const G=f*w;if(p=p*x+_*G,d=d*x+y*G,m=m*x+b*G,v=v*x+T*G,x===1-f){const z=1/Math.sqrt(p*p+d*d+m*m+v*v);p*=z,d*=z,m*=z,v*=z}}e[n]=p,e[n+1]=d,e[n+2]=m,e[n+3]=v}static multiplyQuaternionsFlat(e,n,i,a,l,c){const f=i[a],p=i[a+1],d=i[a+2],m=i[a+3],v=l[c],_=l[c+1],y=l[c+2],b=l[c+3];return e[n]=f*b+m*v+p*y-d*_,e[n+1]=p*b+m*_+d*v-f*y,e[n+2]=d*b+m*y+f*_-p*v,e[n+3]=m*b-f*v-p*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,d=f(i/2),m=f(a/2),v=f(l/2),_=p(i/2),y=p(a/2),b=p(l/2);switch(c){case"XYZ":this._x=_*m*v+d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v-_*y*b;break;case"YXZ":this._x=_*m*v+d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v+_*y*b;break;case"ZXY":this._x=_*m*v-d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v-_*y*b;break;case"ZYX":this._x=_*m*v-d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v+_*y*b;break;case"YZX":this._x=_*m*v+d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v-_*y*b;break;case"XZY":this._x=_*m*v-d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v+_*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],m=n[6],v=n[10],_=i+f+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-p)*y,this._y=(l-d)*y,this._z=(c-a)*y}else if(i>f&&i>v){const y=2*Math.sqrt(1+i-f-v);this._w=(m-p)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+d)/y}else if(f>v){const y=2*Math.sqrt(1+f-i-v);this._w=(l-d)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(p+m)/y}else{const y=2*Math.sqrt(1+v-i-f);this._w=(c-a)/y,this._x=(l+d)/y,this._y=(p+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,l=e._z,c=e._w,f=n._x,p=n._y,d=n._z,m=n._w;return this._x=i*m+c*f+a*d-l*p,this._y=a*m+c*p+l*f-i*d,this._z=l*m+c*d+i*p-a*f,this._w=c*m-i*f-a*p-l*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+i*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=i,this._y=a,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*i+n*this._x,this._y=y*a+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const d=Math.sqrt(p),m=Math.atan2(d,f),v=Math.sin((1-n)*m)/d,_=Math.sin(n*m)/d;return this._w=c*v+this._w*_,this._x=i*v+this._x*_,this._y=a*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(a),i*Math.sin(l),i*Math.cos(l),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*i+l[6]*a,this.y=l[1]*n+l[4]*i+l[7]*a,this.z=l[2]*n+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,l=e.x,c=e.y,f=e.z,p=e.w,d=2*(c*a-f*i),m=2*(f*n-l*a),v=2*(l*i-c*n);return this.x=n+p*d+c*v-f*m,this.y=i+p*m+f*d-l*v,this.z=a+p*v+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*a,this.y=l[1]*n+l[5]*i+l[9]*a,this.z=l[2]*n+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,l=e.z,c=n.x,f=n.y,p=n.z;return this.x=a*p-l*f,this.y=l*c-i*p,this.z=i*f-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,4*n)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,3*n)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bc=new j,Mp=new Zi;class xi{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(nr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(nr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=nr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,nr):nr.fromBufferAttribute(l,c),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Qo.subVectors(this.max,Us),Pa.subVectors(e.a,Us),Na.subVectors(e.b,Us),Da.subVectors(e.c,Us),ui.subVectors(Na,Pa),ci.subVectors(Da,Na),zi.subVectors(Pa,Da);let n=[0,-ui.z,ui.y,0,-ci.z,ci.y,0,-zi.z,zi.y,ui.z,0,-ui.x,ci.z,0,-ci.x,zi.z,0,-zi.x,-ui.y,ui.x,0,-ci.y,ci.x,0,-zi.y,zi.x,0];return!!Cc(n,Pa,Na,Da,Qo)&&(n=[1,0,0,0,1,0,0,0,1],!!Cc(n,Pa,Na,Da,Qo)&&(Jo.crossVectors(ui,ci),n=[Jo.x,Jo.y,Jo.z],Cc(n,Pa,Na,Da,Qo)))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(nr).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cr=[new j,new j,new j,new j,new j,new j,new j,new j],nr=new j,Zo=new xi,Pa=new j,Na=new j,Da=new j,ui=new j,ci=new j,zi=new j,Us=new j,Qo=new j,Jo=new j,Bi=new j;function Cc(s,e,n,i,a){for(let l=0,c=s.length-3;l<=c;l+=3){Bi.fromArray(s,l);const f=a.x*Math.abs(Bi.x)+a.y*Math.abs(Bi.y)+a.z*Math.abs(Bi.z),p=e.dot(Bi),d=n.dot(Bi),m=i.dot(Bi);if(Math.max(-Math.max(p,d,m),Math.min(p,d,m))>f)return!1}return!0}const g_=new xi,Is=new j,Lc=new j;class yi{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):g_.setFromPoints(e).getCenter(i);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=.5*(i-this.radius);this.center.addScaledVector(Is,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Lc)),this.expandByPoint(Is.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new j,Pc=new j,el=new j,di=new j,Nc=new j,tl=new j,Dc=new j;class Ys{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Lr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,n),Lr.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Pc.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),di.copy(this.origin).sub(Pc);const l=.5*e.distanceTo(n),c=-this.direction.dot(el),f=di.dot(this.direction),p=-di.dot(el),d=di.lengthSq(),m=Math.abs(1-c*c);let v,_,y,b;if(m>0)if(v=c*p-f,_=c*f-p,b=l*m,v>=0)if(_>=-b)if(_<=b){const T=1/m;v*=T,_*=T,y=v*(v+c*_+2*f)+_*(c*v+_+2*p)+d}else _=l,v=Math.max(0,-(c*_+f)),y=-v*v+_*(_+2*p)+d;else _=-l,v=Math.max(0,-(c*_+f)),y=-v*v+_*(_+2*p)+d;else _<=-b?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-p),l),y=-v*v+_*(_+2*p)+d):_<=b?(v=0,_=Math.min(Math.max(-l,-p),l),y=_*(_+2*p)+d):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-p),l),y=-v*v+_*(_+2*p)+d);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),y=-v*v+_*(_+2*p)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Pc).addScaledVector(el,_),y}intersectSphere(e,n){Lr.subVectors(e.center,this.origin);const i=Lr.dot(this.direction),a=Lr.dot(Lr)-i*i,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,p=i+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0?!0:e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,l,c,f,p;const d=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,a=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,a=(e.min.x-_.x)*d),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||l>a?null:((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),i>p||f>a?null:((f>i||i!=i)&&(i=f),(p<a||a!=a)&&(a=p),a<0?null:this.at(i>=0?i:a,n)))}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,n,i,a,l){Nc.subVectors(n,e),tl.subVectors(i,e),Dc.crossVectors(Nc,tl);let c,f=this.direction.dot(Dc);if(f>0){if(a)return null;c=1}else{if(!(f<0))return null;c=-1,f=-f}di.subVectors(this.origin,e);const p=c*this.direction.dot(tl.crossVectors(di,tl));if(p<0)return null;const d=c*this.direction.dot(Nc.cross(di));if(d<0||p+d>f)return null;const m=-c*di.dot(Dc);return m<0?null:this.at(m/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,a,l,c,f,p,d,m,v,_,y,b,T,x){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,l,c,f,p,d,m,v,_,y,b,T,x)}set(e,n,i,a,l,c,f,p,d,m,v,_,y,b,T,x){const C=this.elements;return C[0]=e,C[4]=n,C[8]=i,C[12]=a,C[1]=l,C[5]=c,C[9]=f,C[13]=p,C[2]=d,C[6]=m,C[10]=v,C[14]=_,C[3]=y,C[7]=b,C[11]=T,C[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/Ua.setFromMatrixColumn(e,0).length(),l=1/Ua.setFromMatrixColumn(e,1).length(),c=1/Ua.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*l,n[5]=i[5]*l,n[6]=i[6]*l,n[7]=0,n[8]=i[8]*c,n[9]=i[9]*c,n[10]=i[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),p=Math.cos(a),d=Math.sin(a),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,y=c*v,b=f*m,T=f*v;n[0]=p*m,n[4]=-p*v,n[8]=d,n[1]=y+b*d,n[5]=_-T*d,n[9]=-f*p,n[2]=T-_*d,n[6]=b+y*d,n[10]=c*p}else if(e.order==="YXZ"){const _=p*m,y=p*v,b=d*m,T=d*v;n[0]=_+T*f,n[4]=b*f-y,n[8]=c*d,n[1]=c*v,n[5]=c*m,n[9]=-f,n[2]=y*f-b,n[6]=T+_*f,n[10]=c*p}else if(e.order==="ZXY"){const _=p*m,y=p*v,b=d*m,T=d*v;n[0]=_-T*f,n[4]=-c*v,n[8]=b+y*f,n[1]=y+b*f,n[5]=c*m,n[9]=T-_*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const _=c*m,y=c*v,b=f*m,T=f*v;n[0]=p*m,n[4]=b*d-y,n[8]=_*d+T,n[1]=p*v,n[5]=T*d+_,n[9]=y*d-b,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const _=c*p,y=c*d,b=f*p,T=f*d;n[0]=p*m,n[4]=T-_*v,n[8]=b*v+y,n[1]=v,n[5]=c*m,n[9]=-f*m,n[2]=-d*m,n[6]=y*v+b,n[10]=_-T*v}else if(e.order==="XZY"){const _=c*p,y=c*d,b=f*p,T=f*d;n[0]=p*m,n[4]=-v,n[8]=d*m,n[1]=_*v+T,n[5]=c*m,n[9]=y*v-b,n[2]=b*v-y,n[6]=f*m,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v_,e,__)}lookAt(e,n,i){const a=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),hi.crossVectors(i,Pn),hi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),hi.crossVectors(i,Pn)),hi.normalize(),nl.crossVectors(Pn,hi),a[0]=hi.x,a[4]=nl.x,a[8]=Pn.x,a[1]=hi.y,a[5]=nl.y,a[9]=Pn.y,a[2]=hi.z,a[6]=nl.z,a[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,l=this.elements,c=i[0],f=i[4],p=i[8],d=i[12],m=i[1],v=i[5],_=i[9],y=i[13],b=i[2],T=i[6],x=i[10],C=i[14],w=i[3],S=i[7],G=i[11],z=i[15],O=a[0],P=a[4],$=a[8],q=a[12],Q=a[1],ce=a[5],F=a[9],se=a[13],ae=a[2],me=a[6],Te=a[10],re=a[14],X=a[3],K=a[7],U=a[11],R=a[15];return l[0]=c*O+f*Q+p*ae+d*X,l[4]=c*P+f*ce+p*me+d*K,l[8]=c*$+f*F+p*Te+d*U,l[12]=c*q+f*se+p*re+d*R,l[1]=m*O+v*Q+_*ae+y*X,l[5]=m*P+v*ce+_*me+y*K,l[9]=m*$+v*F+_*Te+y*U,l[13]=m*q+v*se+_*re+y*R,l[2]=b*O+T*Q+x*ae+C*X,l[6]=b*P+T*ce+x*me+C*K,l[10]=b*$+T*F+x*Te+C*U,l[14]=b*q+T*se+x*re+C*R,l[3]=w*O+S*Q+G*ae+z*X,l[7]=w*P+S*ce+G*me+z*K,l[11]=w*$+S*F+G*Te+z*U,l[15]=w*q+S*se+G*re+z*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],l=e[12],c=e[1],f=e[5],p=e[9],d=e[13],m=e[2],v=e[6],_=e[10],y=e[14];return e[3]*(+l*p*v-a*d*v-l*f*_+i*d*_+a*f*y-i*p*y)+e[7]*(+n*p*y-n*d*_+l*c*_-a*c*y+a*d*m-l*p*m)+e[11]*(+n*d*v-n*f*y-l*c*v+i*c*y+l*f*m-i*d*m)+e[15]*(-a*f*m-n*p*v+n*f*_+a*c*v-i*c*_+i*p*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],m=e[8],v=e[9],_=e[10],y=e[11],b=e[12],T=e[13],x=e[14],C=e[15],w=v*x*d-T*_*d+T*p*y-f*x*y-v*p*C+f*_*C,S=b*_*d-m*x*d-b*p*y+c*x*y+m*p*C-c*_*C,G=m*T*d-b*v*d+b*f*y-c*T*y-m*f*C+c*v*C,z=b*v*p-m*T*p-b*f*_+c*T*_+m*f*x-c*v*x,O=n*w+i*S+a*G+l*z;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/O;return e[0]=w*P,e[1]=(T*_*l-v*x*l-T*a*y+i*x*y+v*a*C-i*_*C)*P,e[2]=(f*x*l-T*p*l+T*a*d-i*x*d-f*a*C+i*p*C)*P,e[3]=(v*p*l-f*_*l-v*a*d+i*_*d+f*a*y-i*p*y)*P,e[4]=S*P,e[5]=(m*x*l-b*_*l+b*a*y-n*x*y-m*a*C+n*_*C)*P,e[6]=(b*p*l-c*x*l-b*a*d+n*x*d+c*a*C-n*p*C)*P,e[7]=(c*_*l-m*p*l+m*a*d-n*_*d-c*a*y+n*p*y)*P,e[8]=G*P,e[9]=(b*v*l-m*T*l-b*i*y+n*T*y+m*i*C-n*v*C)*P,e[10]=(c*T*l-b*f*l+b*i*d-n*T*d-c*i*C+n*f*C)*P,e[11]=(m*f*l-c*v*l-m*i*d+n*v*d+c*i*y-n*f*y)*P,e[12]=z*P,e[13]=(m*T*a-b*v*a+b*i*_-n*T*_-m*i*x+n*v*x)*P,e[14]=(b*f*a-c*T*a-b*i*p+n*T*p+c*i*x-n*f*x)*P,e[15]=(c*v*a-m*f*a+m*i*p-n*v*p-c*i*_+n*f*_)*P,this}scale(e){const n=this.elements,i=e.x,a=e.y,l=e.z;return n[0]*=i,n[4]*=a,n[8]*=l,n[1]*=i,n[5]*=a,n[9]*=l,n[2]*=i,n[6]*=a,n[10]*=l,n[3]*=i,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),l=1-i,c=e.x,f=e.y,p=e.z,d=l*c,m=l*f;return this.set(d*c+i,d*f-a*p,d*p+a*f,0,d*f+a*p,m*f+i,m*p-a*c,0,d*p-a*f,m*p+a*c,l*p*p+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,l,c){return this.set(1,i,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,m=c+c,v=f+f,_=l*d,y=l*m,b=l*v,T=c*m,x=c*v,C=f*v,w=p*d,S=p*m,G=p*v,z=i.x,O=i.y,P=i.z;return a[0]=(1-(T+C))*z,a[1]=(y+G)*z,a[2]=(b-S)*z,a[3]=0,a[4]=(y-G)*O,a[5]=(1-(_+C))*O,a[6]=(x+w)*O,a[7]=0,a[8]=(b+S)*P,a[9]=(x-w)*P,a[10]=(1-(_+T))*P,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let l=Ua.set(a[0],a[1],a[2]).length();const c=Ua.set(a[4],a[5],a[6]).length(),f=Ua.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],rr.copy(this);const p=1/l,d=1/c,m=1/f;return rr.elements[0]*=p,rr.elements[1]*=p,rr.elements[2]*=p,rr.elements[4]*=d,rr.elements[5]*=d,rr.elements[6]*=d,rr.elements[8]*=m,rr.elements[9]*=m,rr.elements[10]*=m,n.setFromRotationMatrix(rr),i.x=l,i.y=c,i.z=f,this}makePerspective(e,n,i,a,l,c,f=2e3){const p=this.elements,d=2*l/(n-e),m=2*l/(i-a),v=(n+e)/(n-e),_=(i+a)/(i-a);let y,b;if(f===Ka)y=-(c+l)/(c-l),b=-2*c*l/(c-l);else{if(f!==Rl)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);y=-c/(c-l),b=-c*l/(c-l)}return p[0]=d,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=m,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,i,a,l,c,f=2e3){const p=this.elements,d=1/(n-e),m=1/(i-a),v=1/(c-l),_=(n+e)*d,y=(i+a)*m;let b,T;if(f===Ka)b=(c+l)*v,T=-2*v;else{if(f!==Rl)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);b=l*v,T=-1*v}return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*m,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ua=new j,rr=new ot,v_=new j(0,0,0),__=new j(1,1,1),hi=new j,nl=new j,Pn=new j,Tp=new ot,wp=new Zi;class Cl{constructor(e=0,n=0,i=0,a=Cl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],p=a[1],d=a[5],m=a[9],v=a[2],_=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-dn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cl.DEFAULT_ORDER="XYZ";class Dm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let x_=0;const Rp=new j,Ia=new Zi,Pr=new ot,rl=new j,Os=new j,y_=new j,S_=new Zi,Ap=new j(1,0,0),bp=new j(0,1,0),Cp=new j(0,0,1),E_={type:"added"},M_={type:"removed"};class Un extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new j,n=new Cl,i=new Zi,a=new j(1,1,1);n._onChange((function(){i.setFromEuler(n,!1)})),i._onChange((function(){n.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ot},normalMatrix:{value:new st}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ia.setFromAxisAngle(e,n),this.quaternion.multiply(Ia),this}rotateOnWorldAxis(e,n){return Ia.setFromAxisAngle(e,n),this.quaternion.premultiply(Ia),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,n){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rl.copy(e):rl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(Os,rl,this.up):Pr.lookAt(rl,Os,this.up),this.quaternion.setFromRotationMatrix(Pr),a&&(Pr.extractRotation(a.matrixWorld),Ia.setFromRotationMatrix(Pr),this.quaternion.premultiply(Ia.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(E_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(M_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,S_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++){const l=n[i];l.matrixWorldAutoUpdate!==!0&&e!==!0||l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++){const f=a[l];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map((f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()}))),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,m=p.length;d<m;d++){const v=p[d];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),d=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),y=c(e.animations),b=c(e.nodes);f.length>0&&(i.geometries=f),p.length>0&&(i.materials=p),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),b.length>0&&(i.nodes=b)}return i.object=a,i;function c(f){const p=[];for(const d in f){const m=f[d];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Un.DEFAULT_UP=new j(0,1,0),Un.DEFAULT_MATRIX_AUTO_UPDATE=!0,Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new j,Nr=new j,Uc=new j,Dr=new j,Oa=new j,Fa=new j,Lp=new j,Ic=new j,Oc=new j,Fc=new j;let il=!1;class Wn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ir.subVectors(e,n),a.cross(ir);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,i,a,l){ir.subVectors(a,n),Nr.subVectors(i,n),Uc.subVectors(e,n);const c=ir.dot(ir),f=ir.dot(Nr),p=ir.dot(Uc),d=Nr.dot(Nr),m=Nr.dot(Uc),v=c*d-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,y=(d*p-f*m)*_,b=(c*m-f*p)*_;return l.set(1-y-b,b,y)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Dr)!==null&&Dr.x>=0&&Dr.y>=0&&Dr.x+Dr.y<=1}static getUV(e,n,i,a,l,c,f,p){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),this.getInterpolation(e,n,i,a,l,c,f,p)}static getInterpolation(e,n,i,a,l,c,f,p){return this.getBarycoord(e,n,i,a,Dr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Dr.x),p.addScaledVector(c,Dr.y),p.addScaledVector(f,Dr.z),p)}static isFrontFacing(e,n,i,a){return ir.subVectors(i,n),Nr.subVectors(e,n),ir.cross(Nr).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),.5*ir.cross(Nr).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,a,l){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,a,l)}getInterpolation(e,n,i,a,l){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,a,l)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,l=this.c;let c,f;Oa.subVectors(a,i),Fa.subVectors(l,i),Ic.subVectors(e,i);const p=Oa.dot(Ic),d=Fa.dot(Ic);if(p<=0&&d<=0)return n.copy(i);Oc.subVectors(e,a);const m=Oa.dot(Oc),v=Fa.dot(Oc);if(m>=0&&v<=m)return n.copy(a);const _=p*v-m*d;if(_<=0&&p>=0&&m<=0)return c=p/(p-m),n.copy(i).addScaledVector(Oa,c);Fc.subVectors(e,l);const y=Oa.dot(Fc),b=Fa.dot(Fc);if(b>=0&&y<=b)return n.copy(l);const T=y*d-p*b;if(T<=0&&d>=0&&b<=0)return f=d/(d-b),n.copy(i).addScaledVector(Fa,f);const x=m*b-y*v;if(x<=0&&v-m>=0&&y-b>=0)return Lp.subVectors(l,a),f=(v-m)/(v-m+(y-b)),n.copy(a).addScaledVector(Lp,f);const C=1/(x+T+_);return c=T*C,f=_*C,n.copy(i).addScaledVector(Oa,c).addScaledVector(Fa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},al={h:0,s:0,l:0};function kc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+6*(e-s)*n:n<.5?e:n<2/3?s+6*(e-s)*(2/3-n):s}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,a=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,a),this}setHSL(e,n,i,a=gt.workingColorSpace){if(e=l_(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+n):i+n-i*n,c=2*i-l;this.r=kc(c,l,e+1/3),this.g=kc(c,l,e),this.b=kc(c,l,e-1/3)}return gt.toWorkingColorSpace(this,a),this}setStyle(e,n=zt){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zt){const i=Um[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=Rc(e.r),this.g=Rc(e.g),this.b=Rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return gt.fromWorkingColorSpace(nn.copy(this),e),65536*Math.round(dn(255*nn.r,0,255))+256*Math.round(dn(255*nn.g,0,255))+Math.round(dn(255*nn.b,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,a=nn.g,l=nn.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let p,d;const m=(f+c)/2;if(f===c)p=0,d=0;else{const v=c-f;switch(d=m<=.5?v/(c+f):v/(2-c-f),c){case i:p=(a-l)/v+(a<l?6:0);break;case a:p=(l-i)/v+2;break;case l:p=(i-a)/v+4}p/=6}return e.h=p,e.s=d,e.l=m,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=zt){gt.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,a=nn.b;return e!==zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(255*n)},${Math.round(255*i)},${Math.round(255*a)})`}offsetHSL(e,n,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+n,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fi),e.getHSL(al);const i=Tc(fi.h,al.h,n),a=Tc(fi.s,al.s,n),l=Tc(fi.l,al.l,n);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*i+l[6]*a,this.g=l[1]*n+l[4]*i+l[7]*a,this.b=l[2]*n+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new pt;pt.NAMES=Um;let T_=0;class Ll extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=1,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Qc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];a!==void 0?a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i:console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`)}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function a(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ca&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ca&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ca&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),n){const l=a(e.textures),c=a(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=n[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pl extends Ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}w_();function w_(){const s=new ArrayBuffer(4),e=new Float32Array(s),n=new Uint32Array(s),i=new Uint32Array(512),a=new Uint32Array(512);for(let p=0;p<256;++p){const d=p-127;d<-27?(i[p]=0,i[256|p]=32768,a[p]=24,a[256|p]=24):d<-14?(i[p]=1024>>-d-14,i[256|p]=1024>>-d-14|32768,a[p]=-d-1,a[256|p]=-d-1):d<=15?(i[p]=d+15<<10,i[256|p]=d+15<<10|32768,a[p]=13,a[256|p]=13):d<128?(i[p]=31744,i[256|p]=64512,a[p]=24,a[256|p]=24):(i[p]=31744,i[256|p]=64512,a[p]=13,a[256|p]=13)}const l=new Uint32Array(2048),c=new Uint32Array(64),f=new Uint32Array(64);for(let p=1;p<1024;++p){let d=p<<13,m=0;for(;(8388608&d)==0;)d<<=1,m-=8388608;d&=-8388609,m+=947912704,l[p]=d|m}for(let p=1024;p<2048;++p)l[p]=939524096+(p-1024<<13);for(let p=1;p<31;++p)c[p]=p<<23;c[31]=1199570944,c[32]=2147483648;for(let p=33;p<63;++p)c[p]=2147483648+(p-32<<23);c[63]=3347054592;for(let p=1;p<64;++p)p!==32&&(f[p]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:a,mantissaTable:l,exponentTable:c,offsetTable:f}}const Dt=new j,sl=new $e;class _r{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),a=En(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,l){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),a=En(a,this.array),l=En(l,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),e}}class Im extends _r{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Om extends _r{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xr extends _r{constructor(e,n,i){super(new Float32Array(e),n,i)}}let R_=0;const Vn=new ot,zc=new Un,ka=new j,Nn=new xi,Fs=new xi,Xt=new j;class Si extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cm(e)?Om:Im)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new st().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ka).negate(),this.translate(ka.x,ka.y,ka.z),this}setFromPoints(e){const n=[];for(let i=0,a=e.length;i<a;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const l=n[i];Nn.setFromBufferAttribute(l),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new j,1/0);if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Fs.setFromBufferAttribute(f),this.morphTargetsRelative?(Xt.addVectors(Nn.min,Fs.min),Nn.expandByPoint(Xt),Xt.addVectors(Nn.max,Fs.max),Nn.expandByPoint(Xt)):(Nn.expandByPoint(Fs.min),Nn.expandByPoint(Fs.max))}Nn.getCenter(i);let a=0;for(let l=0,c=e.count;l<c;l++)Xt.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(Xt));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,m=f.count;d<m;d++)Xt.fromBufferAttribute(f,d),p&&(ka.fromBufferAttribute(e,d),Xt.add(ka)),a=Math.max(a,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const i=e.array,a=n.position.array,l=n.normal.array,c=n.uv.array,f=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _r(new Float32Array(4*f),4));const p=this.getAttribute("tangent").array,d=[],m=[];for(let Q=0;Q<f;Q++)d[Q]=new j,m[Q]=new j;const v=new j,_=new j,y=new j,b=new $e,T=new $e,x=new $e,C=new j,w=new j;function S(Q,ce,F){v.fromArray(a,3*Q),_.fromArray(a,3*ce),y.fromArray(a,3*F),b.fromArray(c,2*Q),T.fromArray(c,2*ce),x.fromArray(c,2*F),_.sub(v),y.sub(v),T.sub(b),x.sub(b);const se=1/(T.x*x.y-x.x*T.y);isFinite(se)&&(C.copy(_).multiplyScalar(x.y).addScaledVector(y,-T.y).multiplyScalar(se),w.copy(y).multiplyScalar(T.x).addScaledVector(_,-x.x).multiplyScalar(se),d[Q].add(C),d[ce].add(C),d[F].add(C),m[Q].add(w),m[ce].add(w),m[F].add(w))}let G=this.groups;G.length===0&&(G=[{start:0,count:i.length}]);for(let Q=0,ce=G.length;Q<ce;++Q){const F=G[Q],se=F.start;for(let ae=se,me=se+F.count;ae<me;ae+=3)S(i[ae+0],i[ae+1],i[ae+2])}const z=new j,O=new j,P=new j,$=new j;function q(Q){P.fromArray(l,3*Q),$.copy(P);const ce=d[Q];z.copy(ce),z.sub(P.multiplyScalar(P.dot(ce))).normalize(),O.crossVectors($,ce);const F=O.dot(m[Q])<0?-1:1;p[4*Q]=z.x,p[4*Q+1]=z.y,p[4*Q+2]=z.z,p[4*Q+3]=F}for(let Q=0,ce=G.length;Q<ce;++Q){const F=G[Q],se=F.start;for(let ae=se,me=se+F.count;ae<me;ae+=3)q(i[ae+0]),q(i[ae+1]),q(i[ae+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _r(new Float32Array(3*n.count),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const a=new j,l=new j,c=new j,f=new j,p=new j,d=new j,m=new j,v=new j;if(e)for(let _=0,y=e.count;_<y;_+=3){const b=e.getX(_+0),T=e.getX(_+1),x=e.getX(_+2);a.fromBufferAttribute(n,b),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,x),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),f.fromBufferAttribute(i,b),p.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),f.add(m),p.add(m),d.add(m),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(T,p.x,p.y,p.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)a.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),m.subVectors(c,l),v.subVectors(a,l),m.cross(v),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(f,p){const d=f.array,m=f.itemSize,v=f.normalized,_=new d.constructor(p.length*m);let y=0,b=0;for(let T=0,x=p.length;T<x;T++){y=f.isInterleavedBufferAttribute?p[T]*f.data.stride+f.offset:p[T]*m;for(let C=0;C<m;C++)_[b++]=d[y++]}return new _r(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,i=this.index.array,a=this.attributes;for(const f in a){const p=e(a[f],i);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let m=0,v=d.length;m<v;m++){const _=e(d[m],i);p.push(_)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const p in i){const d=i[p];e.data.attributes[p]=d.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],m=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];m.push(y.toJSON(e.data))}m.length>0&&(a[p]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const a=e.attributes;for(const d in a){const m=a[d];this.setAttribute(d,m.clone(n))}const l=e.morphAttributes;for(const d in l){const m=[],v=l[d];for(let _=0,y=v.length;_<y;_++)m.push(v[_].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new ot,Hi=new Ys,ol=new yi,Np=new j,za=new j,Ba=new j,Ha=new j,Bc=new j,ll=new j,ul=new $e,cl=new $e,dl=new $e,Dp=new j,Up=new j,Ip=new j,hl=new j,fl=new j;class jn extends Un{constructor(e=new Si,n=new Pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=i.length;a<l;a++){const c=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){ll.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const m=f[p],v=l[p];m!==0&&(Bc.fromBufferAttribute(v,e),c?ll.addScaledVector(Bc,m):ll.addScaledVector(Bc.sub(n),m))}n.add(ll)}return n}raycast(e,n){const i=this.geometry,a=this.material,l=this.matrixWorld;if(a!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(l),Hi.copy(e.ray).recast(e.near),ol.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ol,Np)===null||Hi.origin.distanceToSquared(Np)>(e.far-e.near)**2))return;Pp.copy(l).invert(),Hi.copy(e.ray).applyMatrix4(Pp),i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,n,Hi)}}_computeIntersections(e,n,i){let a;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,T=_.length;b<T;b++){const x=_[b],C=c[x.materialIndex];for(let w=Math.max(x.start,y.start),S=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));w<S;w+=3)a=pl(this,C,e,i,d,m,v,f.getX(w),f.getX(w+1),f.getX(w+2)),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=x.materialIndex,n.push(a))}else for(let b=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);b<T;b+=3)a=pl(this,c,e,i,d,m,v,f.getX(b),f.getX(b+1),f.getX(b+2)),a&&(a.faceIndex=Math.floor(b/3),n.push(a));else if(p!==void 0)if(Array.isArray(c))for(let b=0,T=_.length;b<T;b++){const x=_[b],C=c[x.materialIndex];for(let w=Math.max(x.start,y.start),S=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));w<S;w+=3)a=pl(this,C,e,i,d,m,v,w,w+1,w+2),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=x.materialIndex,n.push(a))}else for(let b=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);b<T;b+=3)a=pl(this,c,e,i,d,m,v,b,b+1,b+2),a&&(a.faceIndex=Math.floor(b/3),n.push(a))}}function pl(s,e,n,i,a,l,c,f,p,d){s.getVertexPosition(f,za),s.getVertexPosition(p,Ba),s.getVertexPosition(d,Ha);const m=(function(v,_,y,b,T,x,C,w){let S;if(S=_.side===Mn?b.intersectTriangle(C,x,T,!0,w):b.intersectTriangle(T,x,C,_.side===_i,w),S===null)return null;fl.copy(w),fl.applyMatrix4(v.matrixWorld);const G=y.ray.origin.distanceTo(fl);return G<y.near||G>y.far?null:{distance:G,point:fl.clone(),object:v}})(s,e,n,i,za,Ba,Ha,hl);if(m){a&&(ul.fromBufferAttribute(a,f),cl.fromBufferAttribute(a,p),dl.fromBufferAttribute(a,d),m.uv=Wn.getInterpolation(hl,za,Ba,Ha,ul,cl,dl,new $e)),l&&(ul.fromBufferAttribute(l,f),cl.fromBufferAttribute(l,p),dl.fromBufferAttribute(l,d),m.uv1=Wn.getInterpolation(hl,za,Ba,Ha,ul,cl,dl,new $e),m.uv2=m.uv1),c&&(Dp.fromBufferAttribute(c,f),Up.fromBufferAttribute(c,p),Ip.fromBufferAttribute(c,d),m.normal=Wn.getInterpolation(hl,za,Ba,Ha,Dp,Up,Ip,new j),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new j,materialIndex:0};Wn.getNormal(za,Ba,Ha,v.normal),m.face=v}return m}class qs extends Si{constructor(e=1,n=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],m=[],v=[];let _=0,y=0;function b(T,x,C,w,S,G,z,O,P,$,q){const Q=G/P,ce=z/$,F=G/2,se=z/2,ae=O/2,me=P+1,Te=$+1;let re=0,X=0;const K=new j;for(let U=0;U<Te;U++){const R=U*ce-se;for(let V=0;V<me;V++){const M=V*Q-F;K[T]=M*w,K[x]=R*S,K[C]=ae,d.push(K.x,K.y,K.z),K[T]=0,K[x]=0,K[C]=O>0?1:-1,m.push(K.x,K.y,K.z),v.push(V/P),v.push(1-U/$),re+=1}}for(let U=0;U<$;U++)for(let R=0;R<P;R++){const V=_+R+me*U,M=_+R+me*(U+1),A=_+(R+1)+me*(U+1),B=_+(R+1)+me*U;p.push(V,M,B),p.push(M,A,B),X+=6}f.addGroup(y,X,q),y+=X,_+=re}b("z","y","x",-1,-1,i,n,e,c,l,0),b("z","y","x",1,-1,i,n,-e,c,l,1),b("x","z","y",1,1,e,i,n,a,c,2),b("x","z","y",1,-1,e,i,-n,a,c,3),b("x","y","z",1,-1,e,n,i,a,l,4),b("x","y","z",-1,-1,e,n,-i,a,l,5),this.setIndex(p),this.setAttribute("position",new xr(d,3)),this.setAttribute("normal",new xr(m,3)),this.setAttribute("uv",new xr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $a(s){const e={};for(const n in s){e[n]={};for(const i in s[n]){const a=s[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function un(s){const e={};for(let n=0;n<s.length;n++){const i=$a(s[n]);for(const a in i)e[a]=i[a]}return e}function Fm(s){return s.getRenderTarget()===null?s.outputColorSpace:gt.workingColorSpace}const A_={clone:$a,merge:un};class Qi extends Ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=(function(n){const i=[];for(let a=0;a<n.length;a++)i.push(n[a].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const l=this.uniforms[a].value;l&&l.isTexture?n.uniforms[a]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[a]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[a]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[a]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[a]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[a]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[a]={type:"m4",value:l.toArray()}:n.uniforms[a]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dd extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Ka}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends dd{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=2*id*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*yl*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*id*Math.atan(Math.tan(.5*yl*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(.5*yl*this.fov)/this.zoom,i=2*n,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*a/p,n-=c.offsetY*i/d,a*=c.width/p,i*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ga=-90;class b_ extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Dn(Ga,1,e,n);a.layers=this.layers,this.add(a);const l=new Dn(Ga,1,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Ga,1,e,n);c.layers=this.layers,this.add(c);const f=new Dn(Ga,1,e,n);f.layers=this.layers,this.add(f);const p=new Dn(Ga,1,e,n);p.layers=this.layers,this.add(p);const d=new Dn(Ga,1,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,l,c,f,p]=n;for(const d of n)this.remove(d);if(e===Ka)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else{if(e!==Rl)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1)}for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,l),e.setRenderTarget(i,1,a),e.render(n,c),e.setRenderTarget(i,2,a),e.render(n,f),e.setRenderTarget(i,3,a),e.render(n,p),e.setRenderTarget(i,4,a),e.render(n,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,a),e.render(n,m),e.setRenderTarget(v,_,y),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class km extends Tn{constructor(e,n,i,a,l,c,f,p,d,m){super(e=e!==void 0?e:[],n=n!==void 0?n:Xa,i,a,l,c,f,p,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C_ extends $i{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];n.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?zt:vr),this.texture=new km(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ar}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new qs(5,5,5),l=new Qi({name:"CubemapFromEquirect",uniforms:$a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:0});l.uniforms.tEquirect.value=n;const c=new jn(a,l),f=n.minFilter;return n.minFilter===El&&(n.minFilter=ar),new b_(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,i,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,i,a);e.setRenderTarget(l)}}const Hc=new j,L_=new j,P_=new st;class pi{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Hc.subVectors(i,n).cross(L_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||P_.getNormalMatrix(e),a=this.coplanarPoint(Hc).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new yi,ml=new j;class hd{constructor(e=new pi,n=new pi,i=new pi,a=new pi,l=new pi,c=new pi){this.planes=[e,n,i,a,l,c]}set(e,n,i,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=2e3){const i=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],p=a[3],d=a[4],m=a[5],v=a[6],_=a[7],y=a[8],b=a[9],T=a[10],x=a[11],C=a[12],w=a[13],S=a[14],G=a[15];if(i[0].setComponents(p-l,_-d,x-y,G-C).normalize(),i[1].setComponents(p+l,_+d,x+y,G+C).normalize(),i[2].setComponents(p+c,_+m,x+b,G+w).normalize(),i[3].setComponents(p-c,_-m,x-b,G-w).normalize(),i[4].setComponents(p-f,_-v,x-T,G-S).normalize(),n===Ka)i[5].setComponents(p+f,_+v,x+T,G+S).normalize();else{if(n!==Rl)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);i[5].setComponents(f,v,T,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(ml.x=a.normal.x>0?e.max.x:e.min.x,ml.y=a.normal.y>0?e.max.y:e.min.y,ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zm(){let s=null,e=!1,n=null,i=null;function a(l,c){n(l,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function N_(s,e){const n=e.isWebGL2,i=new WeakMap;return{get:function(a){return a.isInterleavedBufferAttribute&&(a=a.data),i.get(a)},remove:function(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=i.get(a);l&&(s.deleteBuffer(l.buffer),i.delete(a))},update:function(a,l){if(a.isGLBufferAttribute){const f=i.get(a);return void((!f||f.version<a.version)&&i.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version}))}a.isInterleavedBufferAttribute&&(a=a.data);const c=i.get(a);if(c===void 0)i.set(a,(function(f,p){const d=f.array,m=f.usage,v=d.byteLength,_=s.createBuffer();let y;if(s.bindBuffer(p,_),s.bufferData(p,d,m),f.onUploadCallback(),d instanceof Float32Array)y=s.FLOAT;else if(d instanceof Uint16Array)if(f.isFloat16BufferAttribute){if(!n)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");y=s.HALF_FLOAT}else y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else{if(!(d instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);y=s.UNSIGNED_BYTE}return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}})(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(f,p,d){const m=p.array,v=p._updateRange,_=p.updateRanges;if(s.bindBuffer(d,f),v.count===-1&&_.length===0&&s.bufferSubData(d,0,m),_.length!==0){for(let y=0,b=_.length;y<b;y++){const T=_[y];n?s.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count):s.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m.subarray(T.start,T.start+T.count))}p.clearUpdateRanges()}v.count!==-1&&(n?s.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):s.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),p.onUploadCallback()})(c.buffer,a,l),c.version=a.version}}}}class fd extends Si{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const l=e/2,c=n/2,f=Math.floor(i),p=Math.floor(a),d=f+1,m=p+1,v=e/f,_=n/p,y=[],b=[],T=[],x=[];for(let C=0;C<m;C++){const w=C*_-c;for(let S=0;S<d;S++){const G=S*v-l;b.push(G,-w,0),T.push(0,0,1),x.push(S/f),x.push(1-C/p)}}for(let C=0;C<p;C++)for(let w=0;w<f;w++){const S=w+d*C,G=w+d*(C+1),z=w+1+d*(C+1),O=w+1+d*C;y.push(S,G,O),y.push(G,z,O)}this.setIndex(y),this.setAttribute("position",new xr(b,3)),this.setAttribute("normal",new xr(T,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fd(e.width,e.height,e.widthSegments,e.heightSegments)}}const nt={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Ae={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mr={basic:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([Ae.points,Ae.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([Ae.common,Ae.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([Ae.sprite,Ae.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:un([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:un([Ae.lights,Ae.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};mr.physical={uniforms:un([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const gl={r:0,b:0,g:0};function D_(s,e,n,i,a,l,c){const f=new pt(0);let p,d,m=l===!0?0:1,v=null,_=0,y=null;function b(T,x){T.getRGB(gl,Fm(s)),i.buffers.color.setClear(gl.r,gl.g,gl.b,x,c)}return{getClearColor:function(){return f},setClearColor:function(T,x=1){f.set(T),m=x,b(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(T){m=T,b(f,m)},render:function(T,x){let C=!1,w=x.isScene===!0?x.background:null;w&&w.isTexture&&(w=(x.backgroundBlurriness>0?n:e).get(w)),w===null?b(f,m):w&&w.isColor&&(b(w,1),C=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,c):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||C)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Al)?(d===void 0&&(d=new jn(new qs(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:$a(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,z,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=gt.getTransfer(w.colorSpace)!==Et,v===w&&_===w.version&&y===s.toneMapping||(d.material.needsUpdate=!0,v=w,_=w.version,y=s.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new jn(new fd(2,2),new Qi({name:"BackgroundMaterial",uniforms:$a(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=gt.getTransfer(w.colorSpace)!==Et,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),v===w&&_===w.version&&y===s.toneMapping||(p.material.needsUpdate=!0,v=w,_=w.version,y=s.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null))}}}function U_(s,e,n,i){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||l!==null,f={},p=y(null);let d=p,m=!1;function v(z){return i.isWebGL2?s.bindVertexArray(z):l.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?s.deleteVertexArray(z):l.deleteVertexArrayOES(z)}function y(z){const O=[],P=[],$=[];for(let q=0;q<a;q++)O[q]=0,P[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:P,attributeDivisors:$,object:z,attributes:{},index:null}}function b(){const z=d.newAttributes;for(let O=0,P=z.length;O<P;O++)z[O]=0}function T(z){x(z,0)}function x(z,O){const P=d.newAttributes,$=d.enabledAttributes,q=d.attributeDivisors;P[z]=1,$[z]===0&&(s.enableVertexAttribArray(z),$[z]=1),q[z]!==O&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,O),q[z]=O)}function C(){const z=d.newAttributes,O=d.enabledAttributes;for(let P=0,$=O.length;P<$;P++)O[P]!==z[P]&&(s.disableVertexAttribArray(P),O[P]=0)}function w(z,O,P,$,q,Q,ce){ce===!0?s.vertexAttribIPointer(z,O,P,q,Q):s.vertexAttribPointer(z,O,P,$,q,Q)}function S(){G(),m=!0,d!==p&&(d=p,v(d.object))}function G(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:function(z,O,P,$,q){let Q=!1;if(c){const ce=(function(F,se,ae){const me=ae.wireframe===!0;let Te=f[F.id];Te===void 0&&(Te={},f[F.id]=Te);let re=Te[se.id];re===void 0&&(re={},Te[se.id]=re);let X=re[me];return X===void 0&&(X=y(i.isWebGL2?s.createVertexArray():l.createVertexArrayOES()),re[me]=X),X})($,P,O);d!==ce&&(d=ce,v(d.object)),Q=(function(F,se,ae,me){const Te=d.attributes,re=se.attributes;let X=0;const K=ae.getAttributes();for(const U in K)if(K[U].location>=0){const R=Te[U];let V=re[U];if(V===void 0&&(U==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),U==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),R===void 0||R.attribute!==V||V&&R.data!==V.data)return!0;X++}return d.attributesNum!==X||d.index!==me})(z,$,P,q),Q&&(function(F,se,ae,me){const Te={},re=se.attributes;let X=0;const K=ae.getAttributes();for(const U in K)if(K[U].location>=0){let R=re[U];R===void 0&&(U==="instanceMatrix"&&F.instanceMatrix&&(R=F.instanceMatrix),U==="instanceColor"&&F.instanceColor&&(R=F.instanceColor));const V={};V.attribute=R,R&&R.data&&(V.data=R.data),Te[U]=V,X++}d.attributes=Te,d.attributesNum=X,d.index=me})(z,$,P,q)}else{const ce=O.wireframe===!0;d.geometry===$.id&&d.program===P.id&&d.wireframe===ce||(d.geometry=$.id,d.program=P.id,d.wireframe=ce,Q=!0)}q!==null&&n.update(q,s.ELEMENT_ARRAY_BUFFER),(Q||m)&&(m=!1,(function(ce,F,se,ae){if(i.isWebGL2===!1&&(ce.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const me=ae.attributes,Te=se.getAttributes(),re=F.defaultAttributeValues;for(const X in Te){const K=Te[X];if(K.location>=0){let U=me[X];if(U===void 0&&(X==="instanceMatrix"&&ce.instanceMatrix&&(U=ce.instanceMatrix),X==="instanceColor"&&ce.instanceColor&&(U=ce.instanceColor)),U!==void 0){const R=U.normalized,V=U.itemSize,M=n.get(U);if(M===void 0)continue;const A=M.buffer,B=M.type,Z=M.bytesPerElement,k=i.isWebGL2===!0&&(B===s.INT||B===s.UNSIGNED_INT||U.gpuType===Sm);if(U.isInterleavedBufferAttribute){const ee=U.data,le=ee.stride,fe=U.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<K.locationSize;Ee++)x(K.location+Ee,ee.meshPerAttribute);ce.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)T(K.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,A);for(let Ee=0;Ee<K.locationSize;Ee++)w(K.location+Ee,V/K.locationSize,B,R,le*Z,(fe+V/K.locationSize*Ee)*Z,k)}else{if(U.isInstancedBufferAttribute){for(let ee=0;ee<K.locationSize;ee++)x(K.location+ee,U.meshPerAttribute);ce.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ee=0;ee<K.locationSize;ee++)T(K.location+ee);s.bindBuffer(s.ARRAY_BUFFER,A);for(let ee=0;ee<K.locationSize;ee++)w(K.location+ee,V/K.locationSize,B,R,V*Z,V/K.locationSize*ee*Z,k)}}else if(re!==void 0){const R=re[X];if(R!==void 0)switch(R.length){case 2:s.vertexAttrib2fv(K.location,R);break;case 3:s.vertexAttrib3fv(K.location,R);break;case 4:s.vertexAttrib4fv(K.location,R);break;default:s.vertexAttrib1fv(K.location,R)}}}}C()})(z,O,P,$),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))},reset:S,resetDefaultState:G,dispose:function(){S();for(const z in f){const O=f[z];for(const P in O){const $=O[P];for(const q in $)_($[q].object),delete $[q];delete O[P]}delete f[z]}},releaseStatesOfGeometry:function(z){if(f[z.id]===void 0)return;const O=f[z.id];for(const P in O){const $=O[P];for(const q in $)_($[q].object),delete $[q];delete O[P]}delete f[z.id]},releaseStatesOfProgram:function(z){for(const O in f){const P=f[O];if(P[z.id]===void 0)continue;const $=P[z.id];for(const q in $)_($[q].object),delete $[q];delete P[z.id]}},initAttributes:b,enableAttribute:T,disableUnusedAttributes:C}}function I_(s,e,n,i){const a=i.isWebGL2;let l;this.setMode=function(c){l=c},this.render=function(c,f){s.drawArrays(l,c,f),n.update(f,l,1)},this.renderInstances=function(c,f,p){if(p===0)return;let d,m;if(a)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[m](l,c,f,p),n.update(f,l,p)},this.renderMultiDraw=function(c,f,p){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<p;m++)this.render(c[m],f[m]);else{d.multiDrawArraysWEBGL(l,c,0,f,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v];n.update(m,l,1)}}}function O_(s,e,n){let i;function a(G){if(G==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=l||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,S=l||e.has("OES_texture_float");return{isWebGL2:l,drawBuffers:p,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:a,precision:c,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:C,vertexTextures:w,floatFragmentTextures:S,floatVertexTextures:w&&S,maxSamples:l?s.getParameter(s.MAX_SAMPLES):0}}function F_(s){const e=this;let n=null,i=0,a=!1,l=!1;const c=new pi,f=new st,p={value:null,needsUpdate:!1};function d(m,v,_,y){const b=m!==null?m.length:0;let T=null;if(b!==0){if(T=p.value,y!==!0||T===null){const x=_+4*b,C=v.matrixWorldInverse;f.getNormalMatrix(C),(T===null||T.length<x)&&(T=new Float32Array(x));for(let w=0,S=_;w!==b;++w,S+=4)c.copy(m[w]).applyMatrix4(C,f),c.normal.toArray(T,S),T[S+3]=c.constant}p.value=T,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,T}this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const _=m.length!==0||v||i!==0||a;return a=v,i=m.length,_},this.beginShadows=function(){l=!0,d(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,v){n=d(m,v,0)},this.setState=function(m,v,_){const y=m.clippingPlanes,b=m.clipIntersection,T=m.clipShadows,x=s.get(m);if(!a||y===null||y.length===0||l&&!T)l?d(null):(function(){p.value!==n&&(p.value=n,p.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{const C=l?0:i,w=4*C;let S=x.clippingState||null;p.value=S,S=d(y,v,w,_);for(let G=0;G!==w;++G)S[G]=n[G];x.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}}}function k_(s){let e=new WeakMap;function n(a,l){return l===Jc?a.mapping=Xa:l===ed&&(a.mapping=Ya),a}function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(a){if(a&&a.isTexture){const l=a.mapping;if(l===Jc||l===ed){if(e.has(a))return n(e.get(a).texture,a.mapping);{const c=a.image;if(c&&c.height>0){const f=new C_(c.height/2);return f.fromEquirectangularTexture(s,a),e.set(a,f),a.addEventListener("dispose",i),n(f.texture,a.mapping)}return null}}}return a},dispose:function(){e=new WeakMap}}}class z_ extends dd{constructor(e=-1,n=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Op=[.125,.215,.35,.446,.526,.582],ks=20,Gc=new z_,Fp=new pt;let Vc=null,Wc=0,jc=0;const Vi=(1+Math.sqrt(5))/2,Va=1/Vi,kp=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Vi,Va),new j(0,Vi,-Va),new j(Va,0,Vi),new j(-Va,0,Vi),new j(Vi,Va,0),new j(-Vi,Va,0)];class zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,a=100){Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Wc,jc),e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xa||e.mapping===Ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ar,minFilter:ar,generateMipmaps:!1,type:Ws,format:gr,colorSpace:Or,depthBuffer:!1},a=Bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,n,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(c){const f=[],p=[],d=[];let m=c;const v=c-4+1+Op.length;for(let _=0;_<v;_++){const y=Math.pow(2,m);p.push(y);let b=1/y;_>c-4?b=Op[_-c+4-1]:_===0&&(b=0),d.push(b);const T=1/(y-2),x=-T,C=1+T,w=[x,x,C,x,C,C,x,x,C,C,x,C],S=6,G=6,z=3,O=2,P=1,$=new Float32Array(z*G*S),q=new Float32Array(O*G*S),Q=new Float32Array(P*G*S);for(let F=0;F<S;F++){const se=F%3*2/3-1,ae=F>2?0:-1,me=[se,ae,0,se+2/3,ae,0,se+2/3,ae+1,0,se,ae,0,se+2/3,ae+1,0,se,ae+1,0];$.set(me,z*G*F),q.set(w,O*G*F);const Te=[F,F,F,F,F,F];Q.set(Te,P*G*F)}const ce=new Si;ce.setAttribute("position",new _r($,z)),ce.setAttribute("uv",new _r(q,O)),ce.setAttribute("faceIndex",new _r(Q,P)),f.push(ce),m>4&&m--}return{lodPlanes:f,sizeLods:p,sigmas:d}})(l)),this._blurMaterial=(function(c,f,p){const d=new Float32Array(ks),m=new j(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/f,CUBEUV_TEXEL_HEIGHT:1/p,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:d},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:m}},vertexShader:pd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(l,e,n)}return a}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,Gc)}_sceneToCubeUV(e,n,i,a){const l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(Fp),p.toneMapping=vi,p.autoClear=!1;const v=new Pl({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new jn(new qs,v);let y=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,y=!0):(v.color.copy(Fp),y=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.lookAt(f[T],0,0)):x===1?(l.up.set(0,0,c[T]),l.lookAt(0,f[T],0)):(l.up.set(0,c[T],0),l.lookAt(0,0,f[T]));const C=this._cubeSize;vl(a,x*C,T>2?C:0,C,C),p.setRenderTarget(a),y&&p.render(_,l),p.render(e,l)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=m,p.autoClear=d,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Xa||e.mapping===Ya;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new jn(this._lodPlanes[0],l);l.uniforms.envMap.value=e;const f=this._cubeSize;vl(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(c,Gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=kp[(a-1)%kp.length];this._blur(e,a-1,a,l,c)}n.autoClear=i}_blur(e,n,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,i,a,"latitudinal",l),this._halfBlur(c,e,i,i,a,"longitudinal",l)}_halfBlur(e,n,i,a,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=new jn(this._lodPlanes[a],d),v=d.uniforms,_=this._sizeLods[i]-1,y=isFinite(l)?Math.PI/(2*_):2*Math.PI/39,b=l/y,T=isFinite(l)?1+Math.floor(3*b):ks;T>ks&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${T} samples when the maximum is set to 20`);const x=[];let C=0;for(let G=0;G<ks;++G){const z=G/b,O=Math.exp(-z*z/2);x.push(O),G===0?C+=O:G<T&&(C+=2*O)}for(let G=0;G<x.length;G++)x[G]=x[G]/C;v.envMap.value=e.texture,v.samples.value=T,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=y,v.mipInt.value=w-i;const S=this._sizeLods[a];vl(n,3*S*(a>w-4?a-w+4:0),4*(this._cubeSize-S),3*S,2*S),p.setRenderTarget(n),p.render(m,Gc)}}function Bp(s,e,n){const i=new $i(s,e,n);return i.texture.mapping=Al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vl(s,e,n,i,a){s.viewport.set(e,n,i,a),s.scissor.set(e,n,i,a)}function Hp(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gp(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pd(){return`

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
	`}function B_(s){let e=new WeakMap,n=null;function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jc||l===ed,f=l===Xa||l===Ya;if(c||f){if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new zp(s)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||f&&p&&(function(d){let m=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&m++;return m===v})(p)){n===null&&(n=new zp(s));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",i),d.texture}return null}}}return a},dispose:function(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function H_(s){const e={};function n(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const a=n(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function G_(s,e,n,i){const a={},l=new WeakMap;function c(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let y=0,b=_.length;y<b;y++)e.remove(_[y])}d.removeEventListener("dispose",c),delete a[d.id];const m=l.get(d);m&&(e.remove(m),l.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function f(p){const d=[],m=p.index,v=p.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let x=0,C=T.length;x<C;x+=3){const w=T[x+0],S=T[x+1],G=T[x+2];d.push(w,S,S,G,G,w)}}else{if(v===void 0)return;{const T=v.array;_=v.version;for(let x=0,C=T.length/3-1;x<C;x+=3){const w=x+0,S=x+1,G=x+2;d.push(w,S,S,G,G,w)}}}const y=new(Cm(d)?Om:Im)(d,1);y.version=_;const b=l.get(p);b&&e.remove(b),l.set(p,y)}return{get:function(p,d){return a[d.id]===!0||(d.addEventListener("dispose",c),a[d.id]=!0,n.memory.geometries++),d},update:function(p){const d=p.attributes;for(const v in d)e.update(d[v],s.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const _=m[v];for(let y=0,b=_.length;y<b;y++)e.update(_[y],s.ARRAY_BUFFER)}},getWireframeAttribute:function(p){const d=l.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&f(p)}else f(p);return l.get(p)}}}function V_(s,e,n,i){const a=i.isWebGL2;let l,c,f;this.setMode=function(p){l=p},this.setIndex=function(p){c=p.type,f=p.bytesPerElement},this.render=function(p,d){s.drawElements(l,d,c,p*f),n.update(d,l,1)},this.renderInstances=function(p,d,m){if(m===0)return;let v,_;if(a)v=s,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");v[_](l,d,c,p*f,m),n.update(d,l,m)},this.renderMultiDraw=function(p,d,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<m;_++)this.render(p[_]/f,d[_]);else{v.multiDrawElementsWEBGL(l,d,0,c,p,0,m);let _=0;for(let y=0;y<m;y++)_+=d[y];n.update(_,l,1)}}}function W_(s){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,a){switch(e.calls++,i){case s.TRIANGLES:e.triangles+=a*(n/3);break;case s.LINES:e.lines+=a*(n/2);break;case s.LINE_STRIP:e.lines+=a*(n-1);break;case s.LINE_LOOP:e.lines+=a*n;break;case s.POINTS:e.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function j_(s,e){return s[0]-e[0]}function X_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Y_(s,e,n){const i={},a=new Float32Array(8),l=new WeakMap,c=new Bt,f=[];for(let p=0;p<8;p++)f[p]=[p,0];return{update:function(p,d,m){const v=p.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=y!==void 0?y.length:0;let T=l.get(d);if(T===void 0||T.count!==b){let ae=function(){F.dispose(),l.delete(d),d.removeEventListener("dispose",ae)};var _=ae;T!==void 0&&T.texture.dispose();const w=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,G=d.morphAttributes.color!==void 0,z=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let $=0;w===!0&&($=1),S===!0&&($=2),G===!0&&($=3);let q=d.attributes.position.count*$,Q=1;q>e.maxTextureSize&&(Q=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const ce=new Float32Array(q*Q*4*b),F=new Nm(ce,q,Q,b);F.type=gi,F.needsUpdate=!0;const se=4*$;for(let me=0;me<b;me++){const Te=z[me],re=O[me],X=P[me],K=q*Q*4*me;for(let U=0;U<Te.count;U++){const R=U*se;w===!0&&(c.fromBufferAttribute(Te,U),ce[K+R+0]=c.x,ce[K+R+1]=c.y,ce[K+R+2]=c.z,ce[K+R+3]=0),S===!0&&(c.fromBufferAttribute(re,U),ce[K+R+4]=c.x,ce[K+R+5]=c.y,ce[K+R+6]=c.z,ce[K+R+7]=0),G===!0&&(c.fromBufferAttribute(X,U),ce[K+R+8]=c.x,ce[K+R+9]=c.y,ce[K+R+10]=c.z,ce[K+R+11]=X.itemSize===4?c.w:1)}}T={count:b,texture:F,size:new $e(q,Q)},l.set(d,T),d.addEventListener("dispose",ae)}let x=0;for(let w=0;w<v.length;w++)x+=v[w];const C=d.morphTargetsRelative?1:1-x;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",v),m.getUniforms().setValue(s,"morphTargetsTexture",T.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",T.size)}else{const y=v===void 0?0:v.length;let b=i[d.id];if(b===void 0||b.length!==y){b=[];for(let S=0;S<y;S++)b[S]=[S,0];i[d.id]=b}for(let S=0;S<y;S++){const G=b[S];G[0]=S,G[1]=v[S]}b.sort(X_);for(let S=0;S<8;S++)S<y&&b[S][1]?(f[S][0]=b[S][0],f[S][1]=b[S][1]):(f[S][0]=Number.MAX_SAFE_INTEGER,f[S][1]=0);f.sort(j_);const T=d.morphAttributes.position,x=d.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const G=f[S],z=G[0],O=G[1];z!==Number.MAX_SAFE_INTEGER&&O?(T&&d.getAttribute("morphTarget"+S)!==T[z]&&d.setAttribute("morphTarget"+S,T[z]),x&&d.getAttribute("morphNormal"+S)!==x[z]&&d.setAttribute("morphNormal"+S,x[z]),a[S]=O,C+=O):(T&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),x&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),a[S]=0)}const w=d.morphTargetsRelative?1:1-C;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",a)}}}}function q_(s,e,n,i){let a=new WeakMap;function l(c){const f=c.target;f.removeEventListener("dispose",l),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:function(c){const f=i.render.frame,p=c.geometry,d=e.get(c,p);if(a.get(d)!==f&&(e.update(d),a.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==f&&(m.update(),a.set(m,f))}return d},dispose:function(){a=new WeakMap}}}class Bm extends Tn{constructor(e,n,i,a,l,c,f,p,d,m){if((m=m!==void 0?m:qi)!==qi&&m!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===qi&&(i=mi),i===void 0&&m===qa&&(i=Yi),super(null,a,l,c,f,p,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:cn,this.minFilter=p!==void 0?p:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Hm=new Tn,Gm=new Bm(1,1);Gm.compareFunction=515;const Vm=new Nm,Wm=new m_,jm=new km,Vp=[],Wp=[],jp=new Float32Array(16),Xp=new Float32Array(9),Yp=new Float32Array(4);function Za(s,e,n){const i=s[0];if(i<=0||i>0)return s;const a=e*n;let l=Vp[a];if(l===void 0&&(l=new Float32Array(a),Vp[a]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,s[c].toArray(l,f)}return l}function Ht(s,e){if(s.length!==e.length)return!1;for(let n=0,i=s.length;n<i;n++)if(s[n]!==e[n])return!1;return!0}function Gt(s,e){for(let n=0,i=e.length;n<i;n++)s[n]=e[n]}function Nl(s,e){let n=Wp[e];n===void 0&&(n=new Int32Array(e),Wp[e]=n);for(let i=0;i!==e;++i)n[i]=s.allocateTextureUnit();return n}function K_(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function $_(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;s.uniform2fv(this.addr,e),Gt(n,e)}}function Z_(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;s.uniform3fv(this.addr,e),Gt(n,e)}}function Q_(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;s.uniform4fv(this.addr,e),Gt(n,e)}}function J_(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Yp.set(i),s.uniformMatrix2fv(this.addr,!1,Yp),Gt(n,i)}}function e0(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Xp.set(i),s.uniformMatrix3fv(this.addr,!1,Xp),Gt(n,i)}}function t0(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;jp.set(i),s.uniformMatrix4fv(this.addr,!1,jp),Gt(n,i)}}function n0(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function r0(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;s.uniform2iv(this.addr,e),Gt(n,e)}}function i0(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;s.uniform3iv(this.addr,e),Gt(n,e)}}function a0(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;s.uniform4iv(this.addr,e),Gt(n,e)}}function s0(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function o0(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;s.uniform2uiv(this.addr,e),Gt(n,e)}}function l0(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;s.uniform3uiv(this.addr,e),Gt(n,e)}}function u0(s,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;s.uniform4uiv(this.addr,e),Gt(n,e)}}function c0(s,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Gm:Hm;n.setTexture2D(e||l,a)}function d0(s,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||Wm,a)}function h0(s,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||jm,a)}function f0(s,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||Vm,a)}function p0(s,e){s.uniform1fv(this.addr,e)}function m0(s,e){const n=Za(e,this.size,2);s.uniform2fv(this.addr,n)}function g0(s,e){const n=Za(e,this.size,3);s.uniform3fv(this.addr,n)}function v0(s,e){const n=Za(e,this.size,4);s.uniform4fv(this.addr,n)}function _0(s,e){const n=Za(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function x0(s,e){const n=Za(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function y0(s,e){const n=Za(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function S0(s,e){s.uniform1iv(this.addr,e)}function E0(s,e){s.uniform2iv(this.addr,e)}function M0(s,e){s.uniform3iv(this.addr,e)}function T0(s,e){s.uniform4iv(this.addr,e)}function w0(s,e){s.uniform1uiv(this.addr,e)}function R0(s,e){s.uniform2uiv(this.addr,e)}function A0(s,e){s.uniform3uiv(this.addr,e)}function b0(s,e){s.uniform4uiv(this.addr,e)}function C0(s,e,n){const i=this.cache,a=e.length,l=Nl(n,a);Ht(i,l)||(s.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Hm,l[c])}function L0(s,e,n){const i=this.cache,a=e.length,l=Nl(n,a);Ht(i,l)||(s.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Wm,l[c])}function P0(s,e,n){const i=this.cache,a=e.length,l=Nl(n,a);Ht(i,l)||(s.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||jm,l[c])}function N0(s,e,n){const i=this.cache,a=e.length,l=Nl(n,a);Ht(i,l)||(s.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Vm,l[c])}class D0{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=(function(a){switch(a){case 5126:return K_;case 35664:return $_;case 35665:return Z_;case 35666:return Q_;case 35674:return J_;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return r0;case 35668:case 35672:return i0;case 35669:case 35673:return a0;case 5125:return s0;case 36294:return o0;case 36295:return l0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return f0}})(n.type)}}class U0{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=(function(a){switch(a){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return v0;case 35674:return _0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return S0;case 35667:case 35671:return E0;case 35668:case 35672:return M0;case 35669:case 35673:return T0;case 5125:return w0;case 36294:return R0;case 36295:return A0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return N0}})(n.type)}}class I0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,n[f.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function qp(s,e){s.seq.push(e),s.map[e.id]=e}function O0(s,e,n){const i=s.name,a=i.length;for(Xc.lastIndex=0;;){const l=Xc.exec(i),c=Xc.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f|=0),d===void 0||d==="["&&c+2===a){qp(n,d===void 0?new D0(f,s,e):new U0(f,s,e));break}{let m=n.map[f];m===void 0&&(m=new I0(f),qp(n,m)),n=m}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a);O0(l,e.getUniformLocation(n,l.name),this)}}setValue(e,n,i,a){const l=this.map[n];l!==void 0&&l.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=i[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&i.push(c)}return i}}function Kp(s,e,n){const i=s.createShader(e);return s.shaderSource(i,n),s.compileShader(i),i}const F0=37297;let k0=0;function $p(s,e,n){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+(function(f,p){const d=f.split(`
`),m=[],v=Math.max(p-6,0),_=Math.min(p+6,d.length);for(let y=v;y<_;y++){const b=y+1;m.push(`${b===p?">":" "} ${b}: ${d[y]}`)}return m.join(`
`)})(s.getShaderSource(e),c)}return a}function z0(s,e){const n=(function(i){const a=gt.getPrimaries(gt.workingColorSpace),l=gt.getPrimaries(i);let c;switch(a===l?c="":a===wl&&l===Tl?c="LinearDisplayP3ToLinearSRGB":a===Tl&&l===wl&&(c="LinearSRGBToLinearDisplayP3"),i){case Or:case bl:return[c,"LinearTransferOETF"];case zt:case cd:return[c,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[c,"LinearTransferOETF"]}})(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function B0(s,e){let n;switch(e){case t_:n="Linear";break;case n_:n="Reinhard";break;case r_:n="OptimizedCineon";break;case i_:n="ACESFilmic";break;case s_:n="AgX";break;case a_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Wa(s){return s!==""}function Zp(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(s){return s.replace(H0,V0)}const G0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function V0(s,e){let n=nt[e];if(n===void 0){const i=G0.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return sd(n)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(s){return s.replace(W0,j0)}function j0(s,e,n,i){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function em(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X0(s,e,n,i){const a=s.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=(function(F){let se="SHADOWMAP_TYPE_BASIC";return F.shadowMapType===_m?se="SHADOWMAP_TYPE_PCF":F.shadowMapType===Qv?se="SHADOWMAP_TYPE_PCF_SOFT":F.shadowMapType===Ur&&(se="SHADOWMAP_TYPE_VSM"),se})(n),d=(function(F){let se="ENVMAP_TYPE_CUBE";if(F.envMap)switch(F.envMapMode){case Xa:case Ya:se="ENVMAP_TYPE_CUBE";break;case Al:se="ENVMAP_TYPE_CUBE_UV"}return se})(n),m=(function(F){let se="ENVMAP_MODE_REFLECTION";return F.envMap&&F.envMapMode===Ya&&(se="ENVMAP_MODE_REFRACTION"),se})(n),v=(function(F){let se="ENVMAP_BLENDING_NONE";if(F.envMap)switch(F.combine){case xm:se="ENVMAP_BLENDING_MULTIPLY";break;case Jv:se="ENVMAP_BLENDING_MIX";break;case e_:se="ENVMAP_BLENDING_ADD"}return se})(n),_=(function(F){const se=F.envMapCubeUVHeight;if(se===null)return null;const ae=Math.log2(se)-2,me=1/se;return{texelWidth:1/(3*Math.max(Math.pow(2,ae),112)),texelHeight:me,maxMip:ae}})(n),y=n.isWebGL2?"":(function(F){return[F.extensionDerivatives||F.envMapCubeUVHeight||F.bumpMap||F.normalMapTangentSpace||F.clearcoatNormalMap||F.flatShading||F.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(F.extensionFragDepth||F.logarithmicDepthBuffer)&&F.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",F.extensionDrawBuffers&&F.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(F.extensionShaderTextureLOD||F.envMap||F.transmission)&&F.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wa).join(`
`)})(n),b=(function(F){return[F.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wa).join(`
`)})(n),T=(function(F){const se=[];for(const ae in F){const me=F[ae];me!==!1&&se.push("#define "+ae+" "+me)}return se.join(`
`)})(l),x=a.createProgram();let C,w,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(C=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Wa).join(`
`),C.length>0&&(C+=`
`),w=[y,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Wa).join(`
`),w.length>0&&(w+=`
`)):(C=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),w=[y,em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?nt.tonemapping_pars_fragment:"",n.toneMapping!==vi?B0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,z0("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),c=sd(c),c=Zp(c,n),c=Qp(c,n),f=sd(f),f=Zp(f,n),f=Qp(f,n),c=Jp(c),f=Jp(f),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,C=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,w=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const G=S+C+c,z=S+w+f,O=Kp(a,a.VERTEX_SHADER,G),P=Kp(a,a.FRAGMENT_SHADER,z);function $(F){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(x).trim(),ae=a.getShaderInfoLog(O).trim(),me=a.getShaderInfoLog(P).trim();let Te=!0,re=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(Te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,x,O,P);else{const X=$p(a,O,"vertex"),K=$p(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+X+`
`+K)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):ae!==""&&me!==""||(re=!1);re&&(F.diagnostics={runnable:Te,programLog:se,vertexShader:{log:ae,prefix:C},fragmentShader:{log:me,prefix:w}})}a.deleteShader(O),a.deleteShader(P),q=new Sl(a,x),Q=(function(se,ae){const me={},Te=se.getProgramParameter(ae,se.ACTIVE_ATTRIBUTES);for(let re=0;re<Te;re++){const X=se.getActiveAttrib(ae,re),K=X.name;let U=1;X.type===se.FLOAT_MAT2&&(U=2),X.type===se.FLOAT_MAT3&&(U=3),X.type===se.FLOAT_MAT4&&(U=4),me[K]={type:X.type,location:se.getAttribLocation(ae,K),locationSize:U}}return me})(a,x)}let q,Q;a.attachShader(x,O),a.attachShader(x,P),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x),this.getUniforms=function(){return q===void 0&&$(this),q},this.getAttributes=function(){return Q===void 0&&$(this),Q};let ce=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=a.getProgramParameter(x,F0)),ce},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=k0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=P,this}let Y0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new K0(e),n.set(e,i)),i}}class K0{constructor(e){this.id=Y0++,this.code=e,this.usedTimes=0}}function $0(s,e,n,i,a,l,c){const f=new Dm,p=new q0,d=[],m=a.isWebGL2,v=a.logarithmicDepthBuffer,_=a.vertexTextures;let y=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(x){return x===0?"uv":`uv${x}`}return{getParameters:function(x,C,w,S,G){const z=S.fog,O=G.geometry,P=x.isMeshStandardMaterial?S.environment:null,$=(x.isMeshStandardMaterial?n:e).get(x.envMap||P),q=$&&$.mapping===Al?$.image.height:null,Q=b[x.type];x.precision!==null&&(y=a.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,F=ce!==void 0?ce.length:0;let se,ae,me,Te,re=0;if(O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3),Q){const Ct=mr[Q];se=Ct.vertexShader,ae=Ct.fragmentShader}else se=x.vertexShader,ae=x.fragmentShader,p.update(x),me=p.getVertexShaderID(x),Te=p.getFragmentShaderID(x);const X=s.getRenderTarget(),K=G.isInstancedMesh===!0,U=G.isBatchedMesh===!0,R=!!x.map,V=!!x.matcap,M=!!$,A=!!x.aoMap,B=!!x.lightMap,Z=!!x.bumpMap,k=!!x.normalMap,ee=!!x.displacementMap,le=!!x.emissiveMap,fe=!!x.metalnessMap,Ee=!!x.roughnessMap,Ce=x.anisotropy>0,Ne=x.clearcoat>0,L=x.iridescence>0,we=x.sheen>0,de=x.transmission>0,ue=Ce&&!!x.anisotropyMap,Se=Ne&&!!x.clearcoatMap,Le=Ne&&!!x.clearcoatNormalMap,be=Ne&&!!x.clearcoatRoughnessMap,Fe=L&&!!x.iridescenceMap,Xe=L&&!!x.iridescenceThicknessMap,Ie=we&&!!x.sheenColorMap,ke=we&&!!x.sheenRoughnessMap,Ze=!!x.specularMap,Pt=!!x.specularColorMap,He=!!x.specularIntensityMap,Qe=de&&!!x.transmissionMap,Je=de&&!!x.thicknessMap,wn=!!x.gradientMap,Ut=!!x.alphaMap,W=x.alphaTest>0,Pe=!!x.alphaHash,Ke=!!x.extensions,ct=!!O.attributes.uv1,ne=!!O.attributes.uv2,Yt=!!O.attributes.uv3;let At=vi;return x.toneMapped&&(X!==null&&X.isXRRenderTarget!==!0||(At=s.toneMapping)),{isWebGL2:m,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:ae,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:Te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:U,instancing:K,instancingColor:K&&G.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:X===null?s.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Or,map:R,matcap:V,envMap:M,envMapMode:M&&$.mapping,envMapCubeUVHeight:q,aoMap:A,lightMap:B,bumpMap:Z,normalMap:k,displacementMap:_&&ee,emissiveMap:le,normalMapObjectSpace:k&&x.normalMapType===1,normalMapTangentSpace:k&&x.normalMapType===0,metalnessMap:fe,roughnessMap:Ee,anisotropy:Ce,anisotropyMap:ue,clearcoat:Ne,clearcoatMap:Se,clearcoatNormalMap:Le,clearcoatRoughnessMap:be,iridescence:L,iridescenceMap:Fe,iridescenceThicknessMap:Xe,sheen:we,sheenColorMap:Ie,sheenRoughnessMap:ke,specularMap:Ze,specularColorMap:Pt,specularIntensityMap:He,transmission:de,transmissionMap:Qe,thicknessMap:Je,gradientMap:wn,opaque:x.transparent===!1&&x.blending===1,alphaMap:Ut,alphaTest:W,alphaHash:Pe,combine:x.combine,mapUv:R&&T(x.map.channel),aoMapUv:A&&T(x.aoMap.channel),lightMapUv:B&&T(x.lightMap.channel),bumpMapUv:Z&&T(x.bumpMap.channel),normalMapUv:k&&T(x.normalMap.channel),displacementMapUv:ee&&T(x.displacementMap.channel),emissiveMapUv:le&&T(x.emissiveMap.channel),metalnessMapUv:fe&&T(x.metalnessMap.channel),roughnessMapUv:Ee&&T(x.roughnessMap.channel),anisotropyMapUv:ue&&T(x.anisotropyMap.channel),clearcoatMapUv:Se&&T(x.clearcoatMap.channel),clearcoatNormalMapUv:Le&&T(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&T(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(x.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&T(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&T(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(x.sheenRoughnessMap.channel),specularMapUv:Ze&&T(x.specularMap.channel),specularColorMapUv:Pt&&T(x.specularColorMap.channel),specularIntensityMapUv:He&&T(x.specularIntensityMap.channel),transmissionMapUv:Qe&&T(x.transmissionMap.channel),thicknessMapUv:Je&&T(x.thicknessMap.channel),alphaMapUv:Ut&&T(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(k||Ce),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ct,vertexUv2s:ne,vertexUv3s:Yt,pointsUvs:G.isPoints===!0&&!!O.attributes.uv&&(R||Ut),fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:G.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,useLegacyLights:s._useLegacyLights,decodeVideoTexture:R&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ke&&x.extensions.derivatives===!0,extensionFragDepth:Ke&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ke&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ke&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}},getProgramCacheKey:function(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)C.push(w),C.push(x.defines[w]);return x.isRawShaderMaterial===!1&&((function(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)})(C,x),(function(w,S){f.disableAll(),S.isWebGL2&&f.enable(0),S.supportsVertexTextures&&f.enable(1),S.instancing&&f.enable(2),S.instancingColor&&f.enable(3),S.matcap&&f.enable(4),S.envMap&&f.enable(5),S.normalMapObjectSpace&&f.enable(6),S.normalMapTangentSpace&&f.enable(7),S.clearcoat&&f.enable(8),S.iridescence&&f.enable(9),S.alphaTest&&f.enable(10),S.vertexColors&&f.enable(11),S.vertexAlphas&&f.enable(12),S.vertexUv1s&&f.enable(13),S.vertexUv2s&&f.enable(14),S.vertexUv3s&&f.enable(15),S.vertexTangents&&f.enable(16),S.anisotropy&&f.enable(17),S.alphaHash&&f.enable(18),S.batching&&f.enable(19),w.push(f.mask),f.disableAll(),S.fog&&f.enable(0),S.useFog&&f.enable(1),S.flatShading&&f.enable(2),S.logarithmicDepthBuffer&&f.enable(3),S.skinning&&f.enable(4),S.morphTargets&&f.enable(5),S.morphNormals&&f.enable(6),S.morphColors&&f.enable(7),S.premultipliedAlpha&&f.enable(8),S.shadowMapEnabled&&f.enable(9),S.useLegacyLights&&f.enable(10),S.doubleSided&&f.enable(11),S.flipSided&&f.enable(12),S.useDepthPacking&&f.enable(13),S.dithering&&f.enable(14),S.transmission&&f.enable(15),S.sheen&&f.enable(16),S.opaque&&f.enable(17),S.pointsUvs&&f.enable(18),S.decodeVideoTexture&&f.enable(19),w.push(f.mask)})(C,x),C.push(s.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()},getUniforms:function(x){const C=b[x.type];let w;if(C){const S=mr[C];w=A_.clone(S.uniforms)}else w=x.uniforms;return w},acquireProgram:function(x,C){let w;for(let S=0,G=d.length;S<G;S++){const z=d[S];if(z.cacheKey===C){w=z,++w.usedTimes;break}}return w===void 0&&(w=new X0(s,C,x,l),d.push(w)),w},releaseProgram:function(x){if(--x.usedTimes==0){const C=d.indexOf(x);d[C]=d[d.length-1],d.pop(),x.destroy()}},releaseShaderCache:function(x){p.remove(x)},programs:d,dispose:function(){p.dispose()}}}function Z0(){let s=new WeakMap;return{get:function(e){let n=s.get(e);return n===void 0&&(n={},s.set(e,n)),n},remove:function(e){s.delete(e)},update:function(e,n,i){s.get(e)[n]=i},dispose:function(){s=new WeakMap}}}function Q0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function nm(){const s=[];let e=0;const n=[],i=[],a=[];function l(c,f,p,d,m,v){let _=s[e];return _===void 0?(_={id:c.id,object:c,geometry:f,material:p,groupOrder:d,renderOrder:c.renderOrder,z:m,group:v},s[e]=_):(_.id=c.id,_.object=c,_.geometry=f,_.material=p,_.groupOrder=d,_.renderOrder=c.renderOrder,_.z=m,_.group=v),e++,_}return{opaque:n,transmissive:i,transparent:a,init:function(){e=0,n.length=0,i.length=0,a.length=0},push:function(c,f,p,d,m,v){const _=l(c,f,p,d,m,v);p.transmission>0?i.push(_):p.transparent===!0?a.push(_):n.push(_)},unshift:function(c,f,p,d,m,v){const _=l(c,f,p,d,m,v);p.transmission>0?i.unshift(_):p.transparent===!0?a.unshift(_):n.unshift(_)},finish:function(){for(let c=e,f=s.length;c<f;c++){const p=s[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}},sort:function(c,f){n.length>1&&n.sort(c||Q0),i.length>1&&i.sort(f||tm),a.length>1&&a.sort(f||tm)}}}function J0(){let s=new WeakMap;return{get:function(e,n){const i=s.get(e);let a;return i===void 0?(a=new nm,s.set(e,[a])):n>=i.length?(a=new nm,i.push(a)):a=i[n],a},dispose:function(){s=new WeakMap}}}function ex(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new pt};break;case"SpotLight":n={position:new j,direction:new j,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new j,halfWidth:new j,halfHeight:new j}}return s[e.id]=n,n}}}let tx=0;function nx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rx(s,e){const n=new ex,i=(function(){const p={};return{get:function(d){if(p[d.id]!==void 0)return p[d.id];let m;switch(d.type){case"DirectionalLight":case"SpotLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3}}return p[d.id]=m,m}}})(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new j);const l=new j,c=new ot,f=new ot;return{setup:function(p,d){let m=0,v=0,_=0;for(let Q=0;Q<9;Q++)a.probe[Q].set(0,0,0);let y=0,b=0,T=0,x=0,C=0,w=0,S=0,G=0,z=0,O=0,P=0;p.sort(nx);const $=d===!0?Math.PI:1;for(let Q=0,ce=p.length;Q<ce;Q++){const F=p[Q],se=F.color,ae=F.intensity,me=F.distance,Te=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=se.r*ae*$,v+=se.g*ae*$,_+=se.b*ae*$;else if(F.isLightProbe){for(let re=0;re<9;re++)a.probe[re].addScaledVector(F.sh.coefficients[re],ae);P++}else if(F.isDirectionalLight){const re=n.get(F);if(re.color.copy(F.color).multiplyScalar(F.intensity*$),F.castShadow){const X=F.shadow,K=i.get(F);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,a.directionalShadow[y]=K,a.directionalShadowMap[y]=Te,a.directionalShadowMatrix[y]=F.shadow.matrix,w++}a.directional[y]=re,y++}else if(F.isSpotLight){const re=n.get(F);re.position.setFromMatrixPosition(F.matrixWorld),re.color.copy(se).multiplyScalar(ae*$),re.distance=me,re.coneCos=Math.cos(F.angle),re.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),re.decay=F.decay,a.spot[T]=re;const X=F.shadow;if(F.map&&(a.spotLightMap[z]=F.map,z++,X.updateMatrices(F),F.castShadow&&O++),a.spotLightMatrix[T]=X.matrix,F.castShadow){const K=i.get(F);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,a.spotShadow[T]=K,a.spotShadowMap[T]=Te,G++}T++}else if(F.isRectAreaLight){const re=n.get(F);re.color.copy(se).multiplyScalar(ae),re.halfWidth.set(.5*F.width,0,0),re.halfHeight.set(0,.5*F.height,0),a.rectArea[x]=re,x++}else if(F.isPointLight){const re=n.get(F);if(re.color.copy(F.color).multiplyScalar(F.intensity*$),re.distance=F.distance,re.decay=F.decay,F.castShadow){const X=F.shadow,K=i.get(F);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,a.pointShadow[b]=K,a.pointShadowMap[b]=Te,a.pointShadowMatrix[b]=F.shadow.matrix,S++}a.point[b]=re,b++}else if(F.isHemisphereLight){const re=n.get(F);re.skyColor.copy(F.color).multiplyScalar(ae*$),re.groundColor.copy(F.groundColor).multiplyScalar(ae*$),a.hemi[C]=re,C++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_FLOAT_1,a.rectAreaLTC2=Ae.LTC_FLOAT_2):(a.rectAreaLTC1=Ae.LTC_HALF_1,a.rectAreaLTC2=Ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_FLOAT_1,a.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_HALF_1,a.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=m,a.ambient[1]=v,a.ambient[2]=_;const q=a.hash;q.directionalLength===y&&q.pointLength===b&&q.spotLength===T&&q.rectAreaLength===x&&q.hemiLength===C&&q.numDirectionalShadows===w&&q.numPointShadows===S&&q.numSpotShadows===G&&q.numSpotMaps===z&&q.numLightProbes===P||(a.directional.length=y,a.spot.length=T,a.rectArea.length=x,a.point.length=b,a.hemi.length=C,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=S,a.pointShadowMap.length=S,a.spotShadow.length=G,a.spotShadowMap.length=G,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=S,a.spotLightMatrix.length=G+z-O,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=P,q.directionalLength=y,q.pointLength=b,q.spotLength=T,q.rectAreaLength=x,q.hemiLength=C,q.numDirectionalShadows=w,q.numPointShadows=S,q.numSpotShadows=G,q.numSpotMaps=z,q.numLightProbes=P,a.version=tx++)},setupView:function(p,d){let m=0,v=0,_=0,y=0,b=0;const T=d.matrixWorldInverse;for(let x=0,C=p.length;x<C;x++){const w=p[x];if(w.isDirectionalLight){const S=a.directional[m];S.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(T),m++}else if(w.isSpotLight){const S=a.spot[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(T),S.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(T),_++}else if(w.isRectAreaLight){const S=a.rectArea[y];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(T),f.identity(),c.copy(w.matrixWorld),c.premultiply(T),f.extractRotation(c),S.halfWidth.set(.5*w.width,0,0),S.halfHeight.set(0,.5*w.height,0),S.halfWidth.applyMatrix4(f),S.halfHeight.applyMatrix4(f),y++}else if(w.isPointLight){const S=a.point[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(T),v++}else if(w.isHemisphereLight){const S=a.hemi[b];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(T),b++}}},state:a}}function rm(s,e){const n=new rx(s,e),i=[],a=[];return{init:function(){i.length=0,a.length=0},state:{lightsArray:i,shadowsArray:a,lights:n},setupLights:function(l){n.setup(i,l)},setupLightsView:function(l){n.setupView(i,l)},pushLight:function(l){i.push(l)},pushShadow:function(l){a.push(l)}}}function ix(s,e){let n=new WeakMap;return{get:function(i,a=0){const l=n.get(i);let c;return l===void 0?(c=new rm(s,e),n.set(i,[c])):a>=l.length?(c=new rm(s,e),l.push(c)):c=l[a],c},dispose:function(){n=new WeakMap}}}class ax extends Ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sx extends Ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ox(s,e,n){let i=new hd;const a=new $e,l=new $e,c=new Bt,f=new ax({depthPacking:3201}),p=new sx,d={},m=n.maxTextureSize,v={[_i]:Mn,[Mn]:_i,2:2},_=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:`void main() {
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
}`}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new Si;b.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new jn(b,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_m;let C=this.type;function w(O,P){const $=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new $i(a.x,a.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(P,null,$,_,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(P,null,$,y,T,null)}function S(O,P,$,q){let Q=null;const ce=$.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(ce!==void 0)Q=ce;else if(Q=$.isPointLight===!0?p:f,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const F=Q.uuid,se=P.uuid;let ae=d[F];ae===void 0&&(ae={},d[F]=ae);let me=ae[se];me===void 0&&(me=Q.clone(),ae[se]=me,P.addEventListener("dispose",z)),Q=me}return Q.visible=P.visible,Q.wireframe=P.wireframe,Q.side=q===Ur?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:v[P.side],Q.alphaMap=P.alphaMap,Q.alphaTest=P.alphaTest,Q.map=P.map,Q.clipShadows=P.clipShadows,Q.clippingPlanes=P.clippingPlanes,Q.clipIntersection=P.clipIntersection,Q.displacementMap=P.displacementMap,Q.displacementScale=P.displacementScale,Q.displacementBias=P.displacementBias,Q.wireframeLinewidth=P.wireframeLinewidth,Q.linewidth=P.linewidth,$.isPointLight===!0&&Q.isMeshDistanceMaterial===!0&&(s.properties.get(Q).light=$),Q}function G(O,P,$,q,Q){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&Q===Ur)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,O.matrixWorld);const F=e.update(O),se=O.material;if(Array.isArray(se)){const ae=F.groups;for(let me=0,Te=ae.length;me<Te;me++){const re=ae[me],X=se[re.materialIndex];if(X&&X.visible){const K=S(O,X,q,Q);O.onBeforeShadow(s,O,P,$,F,K,re),s.renderBufferDirect($,null,F,K,O,re),O.onAfterShadow(s,O,P,$,F,K,re)}}}else if(se.visible){const ae=S(O,se,q,Q);O.onBeforeShadow(s,O,P,$,F,ae,null),s.renderBufferDirect($,null,F,ae,O,null),O.onAfterShadow(s,O,P,$,F,ae,null)}}const ce=O.children;for(let F=0,se=ce.length;F<se;F++)G(ce[F],P,$,q,Q)}function z(O){O.target.removeEventListener("dispose",z);for(const P in d){const $=d[P],q=O.target.uuid;q in $&&($[q].dispose(),delete $[q])}}this.render=function(O,P,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const q=s.getRenderTarget(),Q=s.getActiveCubeFace(),ce=s.getActiveMipmapLevel(),F=s.state;F.setBlending(0),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const se=C!==Ur&&this.type===Ur,ae=C===Ur&&this.type!==Ur;for(let me=0,Te=O.length;me<Te;me++){const re=O[me],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const K=X.getFrameExtents();if(a.multiply(K),l.copy(X.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/K.x),a.x=l.x*K.x,X.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/K.y),a.y=l.y*K.y,X.mapSize.y=l.y)),X.map===null||se===!0||ae===!0){const R=this.type!==Ur?{minFilter:cn,magFilter:cn}:{};X.map!==null&&X.map.dispose(),X.map=new $i(a.x,a.y,R),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const U=X.getViewportCount();for(let R=0;R<U;R++){const V=X.getViewport(R);c.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),F.viewport(c),X.updateMatrices(re,R),i=X.getFrustum(),G(P,$,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===Ur&&w(X,$),X.needsUpdate=!1}C=this.type,x.needsUpdate=!1,s.setRenderTarget(q,Q,ce)}}function lx(s,e,n){const i=n.isWebGL2,a=new function(){let L=!1;const we=new Bt;let de=null;const ue=new Bt(0,0,0,0);return{setMask:function(Se){de===Se||L||(s.colorMask(Se,Se,Se,Se),de=Se)},setLocked:function(Se){L=Se},setClear:function(Se,Le,be,Fe,Xe){Xe===!0&&(Se*=Fe,Le*=Fe,be*=Fe),we.set(Se,Le,be,Fe),ue.equals(we)===!1&&(s.clearColor(Se,Le,be,Fe),ue.copy(we))},reset:function(){L=!1,de=null,ue.set(-1,0,0,0)}}},l=new function(){let L=!1,we=null,de=null,ue=null;return{setTest:function(Se){Se?Z(s.DEPTH_TEST):k(s.DEPTH_TEST)},setMask:function(Se){we===Se||L||(s.depthMask(Se),we=Se)},setFunc:function(Se){if(de!==Se){switch(Se){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}de=Se}},setLocked:function(Se){L=Se},setClear:function(Se){ue!==Se&&(s.clearDepth(Se),ue=Se)},reset:function(){L=!1,we=null,de=null,ue=null}}},c=new function(){let L=!1,we=null,de=null,ue=null,Se=null,Le=null,be=null,Fe=null,Xe=null;return{setTest:function(Ie){L||(Ie?Z(s.STENCIL_TEST):k(s.STENCIL_TEST))},setMask:function(Ie){we===Ie||L||(s.stencilMask(Ie),we=Ie)},setFunc:function(Ie,ke,Ze){de===Ie&&ue===ke&&Se===Ze||(s.stencilFunc(Ie,ke,Ze),de=Ie,ue=ke,Se=Ze)},setOp:function(Ie,ke,Ze){Le===Ie&&be===ke&&Fe===Ze||(s.stencilOp(Ie,ke,Ze),Le=Ie,be=ke,Fe=Ze)},setLocked:function(Ie){L=Ie},setClear:function(Ie){Xe!==Ie&&(s.clearStencil(Ie),Xe=Ie)},reset:function(){L=!1,we=null,de=null,ue=null,Se=null,Le=null,be=null,Fe=null,Xe=null}}},f=new WeakMap,p=new WeakMap;let d={},m={},v=new WeakMap,_=[],y=null,b=!1,T=null,x=null,C=null,w=null,S=null,G=null,z=null,O=new pt(0,0,0),P=0,$=!1,q=null,Q=null,ce=null,F=null,se=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,Te=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(Te=parseFloat(/^WebGL (\d)/.exec(re)[1]),me=Te>=1):re.indexOf("OpenGL ES")!==-1&&(Te=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),me=Te>=2);let X=null,K={};const U=s.getParameter(s.SCISSOR_BOX),R=s.getParameter(s.VIEWPORT),V=new Bt().fromArray(U),M=new Bt().fromArray(R);function A(L,we,de,ue){const Se=new Uint8Array(4),Le=s.createTexture();s.bindTexture(L,Le),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<de;be++)!i||L!==s.TEXTURE_3D&&L!==s.TEXTURE_2D_ARRAY?s.texImage2D(we+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage3D(we,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,Se);return Le}const B={};function Z(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function k(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}B[s.TEXTURE_2D]=A(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=A(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(B[s.TEXTURE_2D_ARRAY]=A(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=A(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Z(s.DEPTH_TEST),l.setFunc(3),Ee(!1),Ce(1),Z(s.CULL_FACE),fe(0);const ee={[Wi]:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(i)ee[103]=s.MIN,ee[104]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ee[103]=L.MIN_EXT,ee[104]=L.MAX_EXT)}const le={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,[Qc]:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function fe(L,we,de,ue,Se,Le,be,Fe,Xe,Ie){if(L!==0){if(b===!1&&(Z(s.BLEND),b=!0),L===5)Se=Se||we,Le=Le||de,be=be||ue,we===x&&Se===S||(s.blendEquationSeparate(ee[we],ee[Se]),x=we,S=Se),de===C&&ue===w&&Le===G&&be===z||(s.blendFuncSeparate(le[de],le[ue],le[Le],le[be]),C=de,w=ue,G=Le,z=be),Fe.equals(O)!==!1&&Xe===P||(s.blendColor(Fe.r,Fe.g,Fe.b,Xe),O.copy(Fe),P=Xe),T=L,$=!1;else if(L!==T||Ie!==$){if(x===Wi&&S===Wi||(s.blendEquation(s.FUNC_ADD),x=Wi,S=Wi),Ie)switch(L){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L)}else switch(L){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L)}C=null,w=null,G=null,z=null,O.set(0,0,0),P=0,T=L,$=Ie}}else b===!0&&(k(s.BLEND),b=!1)}function Ee(L){q!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),q=L)}function Ce(L){L!==0?(Z(s.CULL_FACE),L!==Q&&(L===1?s.cullFace(s.BACK):L===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):k(s.CULL_FACE),Q=L}function Ne(L,we,de){L?(Z(s.POLYGON_OFFSET_FILL),F===we&&se===de||(s.polygonOffset(we,de),F=we,se=de)):k(s.POLYGON_OFFSET_FILL)}return{buffers:{color:a,depth:l,stencil:c},enable:Z,disable:k,bindFramebuffer:function(L,we){return m[L]!==we&&(s.bindFramebuffer(L,we),m[L]=we,i&&(L===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=we),L===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=we)),!0)},drawBuffers:function(L,we){let de=_,ue=!1;if(L)if(de=v.get(we),de===void 0&&(de=[],v.set(we,de)),L.isWebGLMultipleRenderTargets){const Se=L.texture;if(de.length!==Se.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,be=Se.length;Le<be;Le++)de[Le]=s.COLOR_ATTACHMENT0+Le;de.length=Se.length,ue=!0}}else de[0]!==s.COLOR_ATTACHMENT0&&(de[0]=s.COLOR_ATTACHMENT0,ue=!0);else de[0]!==s.BACK&&(de[0]=s.BACK,ue=!0);ue&&(n.isWebGL2?s.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))},useProgram:function(L){return y!==L&&(s.useProgram(L),y=L,!0)},setBlending:fe,setMaterial:function(L,we){L.side===2?k(s.CULL_FACE):Z(s.CULL_FACE);let de=L.side===Mn;we&&(de=!de),Ee(de),L.blending===1&&L.transparent===!1?fe(0):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ue=L.stencilWrite;c.setTest(ue),ue&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):k(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:Ee,setCullFace:Ce,setLineWidth:function(L){L!==ce&&(me&&s.lineWidth(L),ce=L)},setPolygonOffset:Ne,setScissorTest:function(L){L?Z(s.SCISSOR_TEST):k(s.SCISSOR_TEST)},activeTexture:function(L){L===void 0&&(L=s.TEXTURE0+ae-1),X!==L&&(s.activeTexture(L),X=L)},bindTexture:function(L,we,de){de===void 0&&(de=X===null?s.TEXTURE0+ae-1:X);let ue=K[de];ue===void 0&&(ue={type:void 0,texture:void 0},K[de]=ue),ue.type===L&&ue.texture===we||(X!==de&&(s.activeTexture(de),X=de),s.bindTexture(L,we||B[L]),ue.type=L,ue.texture=we)},unbindTexture:function(){const L=K[X];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},updateUBOMapping:function(L,we){let de=p.get(we);de===void 0&&(de=new WeakMap,p.set(we,de));let ue=de.get(L);ue===void 0&&(ue=s.getUniformBlockIndex(we,L.name),de.set(L,ue))},uniformBlockBinding:function(L,we){const de=p.get(we).get(L);f.get(we)!==de&&(s.uniformBlockBinding(we,de,L.__bindingPointIndex),f.set(we,de))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},scissor:function(L){V.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),V.copy(L))},viewport:function(L){M.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),M.copy(L))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},X=null,K={},m={},v=new WeakMap,_=[],y=null,b=!1,T=null,x=null,C=null,w=null,S=null,G=null,z=null,O=new pt(0,0,0),P=0,$=!1,q=null,Q=null,ce=null,F=null,se=null,V.set(0,0,s.canvas.width,s.canvas.height),M.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}}}function ux(s,e,n,i,a,l,c){const f=a.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,A){return y?new OffscreenCanvas(M,A):js("canvas")}function T(M,A,B,Z){let k=1;if((M.width>Z||M.height>Z)&&(k=Z/Math.max(M.width,M.height)),k<1||A===!0){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ee=A?ad:Math.floor,le=ee(k*M.width),fe=ee(k*M.height);v===void 0&&(v=b(le,fe));const Ee=B?b(le,fe):v;return Ee.width=le,Ee.height=fe,Ee.getContext("2d").drawImage(M,0,0,le,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+le+"x"+fe+")."),Ee}return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M}return M}function x(M){return xp(M.width)&&xp(M.height)}function C(M,A){return M.generateMipmaps&&A&&M.minFilter!==cn&&M.minFilter!==ar}function w(M){s.generateMipmap(M)}function S(M,A,B,Z,k=!1){if(f===!1)return A;if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ee=A;if(A===s.RED&&(B===s.FLOAT&&(ee=s.R32F),B===s.HALF_FLOAT&&(ee=s.R16F),B===s.UNSIGNED_BYTE&&(ee=s.R8)),A===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(ee=s.R8UI),B===s.UNSIGNED_SHORT&&(ee=s.R16UI),B===s.UNSIGNED_INT&&(ee=s.R32UI),B===s.BYTE&&(ee=s.R8I),B===s.SHORT&&(ee=s.R16I),B===s.INT&&(ee=s.R32I)),A===s.RG&&(B===s.FLOAT&&(ee=s.RG32F),B===s.HALF_FLOAT&&(ee=s.RG16F),B===s.UNSIGNED_BYTE&&(ee=s.RG8)),A===s.RGBA){const le=k?Ml:gt.getTransfer(Z);B===s.FLOAT&&(ee=s.RGBA32F),B===s.HALF_FLOAT&&(ee=s.RGBA16F),B===s.UNSIGNED_BYTE&&(ee=le===Et?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return ee!==s.R16F&&ee!==s.R32F&&ee!==s.RG16F&&ee!==s.RG32F&&ee!==s.RGBA16F&&ee!==s.RGBA32F||e.get("EXT_color_buffer_float"),ee}function G(M,A,B){return C(M,B)===!0||M.isFramebufferTexture&&M.minFilter!==cn&&M.minFilter!==ar?Math.log2(Math.max(A.width,A.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?A.mipmaps.length:1}function z(M){return M===cn||M===jf||M===_c?s.NEAREST:s.LINEAR}function O(M){const A=M.target;A.removeEventListener("dispose",O),(function(B){const Z=i.get(B);if(Z.__webglInit===void 0)return;const k=B.source,ee=_.get(k);if(ee){const le=ee[Z.__cacheKey];le.usedTimes--,le.usedTimes===0&&$(B),Object.keys(ee).length===0&&_.delete(k)}i.remove(B)})(A),A.isVideoTexture&&m.delete(A)}function P(M){const A=M.target;A.removeEventListener("dispose",P),(function(B){const Z=B.texture,k=i.get(B),ee=i.get(Z);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),c.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(k.__webglFramebuffer[le]))for(let fe=0;fe<k.__webglFramebuffer[le].length;fe++)s.deleteFramebuffer(k.__webglFramebuffer[le][fe]);else s.deleteFramebuffer(k.__webglFramebuffer[le]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[le])}else{if(Array.isArray(k.__webglFramebuffer))for(let le=0;le<k.__webglFramebuffer.length;le++)s.deleteFramebuffer(k.__webglFramebuffer[le]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let le=0;le<k.__webglColorRenderbuffer.length;le++)k.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[le]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let le=0,fe=Z.length;le<fe;le++){const Ee=i.get(Z[le]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove(Z[le])}i.remove(Z),i.remove(B)})(A)}function $(M){const A=i.get(M);s.deleteTexture(A.__webglTexture);const B=M.source;delete _.get(B)[A.__cacheKey],c.memory.textures--}let q=0;function Q(M,A){const B=i.get(M);if(M.isVideoTexture&&(function(Z){const k=c.render.frame;m.get(Z)!==k&&(m.set(Z,k),Z.update())})(M),M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Z.complete!==!1)return void Te(B,M,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+A)}const ce={[td]:s.REPEAT,[Ir]:s.CLAMP_TO_EDGE,[nd]:s.MIRRORED_REPEAT},F={[cn]:s.NEAREST,[jf]:s.NEAREST_MIPMAP_NEAREST,[_c]:s.NEAREST_MIPMAP_LINEAR,[ar]:s.LINEAR,[o_]:s.LINEAR_MIPMAP_NEAREST,[El]:s.LINEAR_MIPMAP_LINEAR},se={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function ae(M,A,B){if(B?(s.texParameteri(M,s.TEXTURE_WRAP_S,ce[A.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,ce[A.wrapT]),M!==s.TEXTURE_3D&&M!==s.TEXTURE_2D_ARRAY||s.texParameteri(M,s.TEXTURE_WRAP_R,ce[A.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,F[A.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,F[A.minFilter])):(s.texParameteri(M,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(M,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),M!==s.TEXTURE_3D&&M!==s.TEXTURE_2D_ARRAY||s.texParameteri(M,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),A.wrapS===Ir&&A.wrapT===Ir||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(M,s.TEXTURE_MAG_FILTER,z(A.magFilter)),s.texParameteri(M,s.TEXTURE_MIN_FILTER,z(A.minFilter)),A.minFilter!==cn&&A.minFilter!==ar&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===cn||A.minFilter!==_c&&A.minFilter!==El||A.type===gi&&e.has("OES_texture_float_linear")===!1||f===!1&&A.type===Ws&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(s.texParameterf(M,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function me(M,A){let B=!1;M.__webglInit===void 0&&(M.__webglInit=!0,A.addEventListener("dispose",O));const Z=A.source;let k=_.get(Z);k===void 0&&(k={},_.set(Z,k));const ee=(function(le){const fe=[];return fe.push(le.wrapS),fe.push(le.wrapT),fe.push(le.wrapR||0),fe.push(le.magFilter),fe.push(le.minFilter),fe.push(le.anisotropy),fe.push(le.internalFormat),fe.push(le.format),fe.push(le.type),fe.push(le.generateMipmaps),fe.push(le.premultiplyAlpha),fe.push(le.flipY),fe.push(le.unpackAlignment),fe.push(le.colorSpace),fe.join()})(A);if(ee!==M.__cacheKey){k[ee]===void 0&&(k[ee]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,B=!0),k[ee].usedTimes++;const le=k[M.__cacheKey];le!==void 0&&(k[M.__cacheKey].usedTimes--,le.usedTimes===0&&$(A)),M.__cacheKey=ee,M.__webglTexture=k[ee].texture}return B}function Te(M,A,B){let Z=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Z=s.TEXTURE_3D);const k=me(M,A),ee=A.source;n.bindTexture(Z,M.__webglTexture,s.TEXTURE0+B);const le=i.get(ee);if(ee.version!==le.__version||k===!0){n.activeTexture(s.TEXTURE0+B);const fe=gt.getPrimaries(gt.workingColorSpace),Ee=A.colorSpace===vr?null:gt.getPrimaries(A.colorSpace),Ce=A.colorSpace===vr||fe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ne=(function(ke){return!f&&(ke.wrapS!==Ir||ke.wrapT!==Ir||ke.minFilter!==cn&&ke.minFilter!==ar)})(A)&&x(A.image)===!1;let L=T(A.image,Ne,!1,a.maxTextureSize);L=V(A,L);const we=x(L)||f,de=l.convert(A.format,A.colorSpace);let ue,Se=l.convert(A.type),Le=S(A.internalFormat,de,Se,A.colorSpace,A.isVideoTexture);ae(Z,A,we);const be=A.mipmaps,Fe=f&&A.isVideoTexture!==!0&&Le!==Am,Xe=le.__version===void 0||k===!0,Ie=G(A,L,we);if(A.isDepthTexture)Le=s.DEPTH_COMPONENT,f?Le=A.type===gi?s.DEPTH_COMPONENT32F:A.type===mi?s.DEPTH_COMPONENT24:A.type===Yi?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT16:A.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===qi&&Le===s.DEPTH_COMPONENT&&A.type!==ud&&A.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=mi,Se=l.convert(A.type)),A.format===qa&&Le===s.DEPTH_COMPONENT&&(Le=s.DEPTH_STENCIL,A.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Yi,Se=l.convert(A.type))),Xe&&(Fe?n.texStorage2D(s.TEXTURE_2D,1,Le,L.width,L.height):n.texImage2D(s.TEXTURE_2D,0,Le,L.width,L.height,0,de,Se,null));else if(A.isDataTexture)if(be.length>0&&we){Fe&&Xe&&n.texStorage2D(s.TEXTURE_2D,Ie,Le,be[0].width,be[0].height);for(let ke=0,Ze=be.length;ke<Ze;ke++)ue=be[ke],Fe?n.texSubImage2D(s.TEXTURE_2D,ke,0,0,ue.width,ue.height,de,Se,ue.data):n.texImage2D(s.TEXTURE_2D,ke,Le,ue.width,ue.height,0,de,Se,ue.data);A.generateMipmaps=!1}else Fe?(Xe&&n.texStorage2D(s.TEXTURE_2D,Ie,Le,L.width,L.height),n.texSubImage2D(s.TEXTURE_2D,0,0,0,L.width,L.height,de,Se,L.data)):n.texImage2D(s.TEXTURE_2D,0,Le,L.width,L.height,0,de,Se,L.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Fe&&Xe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Le,be[0].width,be[0].height,L.depth);for(let ke=0,Ze=be.length;ke<Ze;ke++)ue=be[ke],A.format!==gr?de!==null?Fe?n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ke,0,0,0,ue.width,ue.height,L.depth,de,ue.data,0,0):n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ke,Le,ue.width,ue.height,L.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage3D(s.TEXTURE_2D_ARRAY,ke,0,0,0,ue.width,ue.height,L.depth,de,Se,ue.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ke,Le,ue.width,ue.height,L.depth,0,de,Se,ue.data)}else{Fe&&Xe&&n.texStorage2D(s.TEXTURE_2D,Ie,Le,be[0].width,be[0].height);for(let ke=0,Ze=be.length;ke<Ze;ke++)ue=be[ke],A.format!==gr?de!==null?Fe?n.compressedTexSubImage2D(s.TEXTURE_2D,ke,0,0,ue.width,ue.height,de,ue.data):n.compressedTexImage2D(s.TEXTURE_2D,ke,Le,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage2D(s.TEXTURE_2D,ke,0,0,ue.width,ue.height,de,Se,ue.data):n.texImage2D(s.TEXTURE_2D,ke,Le,ue.width,ue.height,0,de,Se,ue.data)}else if(A.isDataArrayTexture)Fe?(Xe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Le,L.width,L.height,L.depth),n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,de,Se,L.data)):n.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,L.width,L.height,L.depth,0,de,Se,L.data);else if(A.isData3DTexture)Fe?(Xe&&n.texStorage3D(s.TEXTURE_3D,Ie,Le,L.width,L.height,L.depth),n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,de,Se,L.data)):n.texImage3D(s.TEXTURE_3D,0,Le,L.width,L.height,L.depth,0,de,Se,L.data);else if(A.isFramebufferTexture){if(Xe)if(Fe)n.texStorage2D(s.TEXTURE_2D,Ie,Le,L.width,L.height);else{let ke=L.width,Ze=L.height;for(let Pt=0;Pt<Ie;Pt++)n.texImage2D(s.TEXTURE_2D,Pt,Le,ke,Ze,0,de,Se,null),ke>>=1,Ze>>=1}}else if(be.length>0&&we){Fe&&Xe&&n.texStorage2D(s.TEXTURE_2D,Ie,Le,be[0].width,be[0].height);for(let ke=0,Ze=be.length;ke<Ze;ke++)ue=be[ke],Fe?n.texSubImage2D(s.TEXTURE_2D,ke,0,0,de,Se,ue):n.texImage2D(s.TEXTURE_2D,ke,Le,de,Se,ue);A.generateMipmaps=!1}else Fe?(Xe&&n.texStorage2D(s.TEXTURE_2D,Ie,Le,L.width,L.height),n.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Se,L)):n.texImage2D(s.TEXTURE_2D,0,Le,de,Se,L);C(A,we)&&w(Z),le.__version=ee.version,A.onUpdate&&A.onUpdate(A)}M.__version=A.version}function re(M,A,B,Z,k,ee){const le=l.convert(B.format,B.colorSpace),fe=l.convert(B.type),Ee=S(B.internalFormat,le,fe,B.colorSpace);if(!i.get(A).__hasExternalTextures){const Ce=Math.max(1,A.width>>ee),Ne=Math.max(1,A.height>>ee);k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?n.texImage3D(k,ee,Ee,Ce,Ne,A.depth,0,le,fe,null):n.texImage2D(k,ee,Ee,Ce,Ne,0,le,fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,M),R(A)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,k,i.get(B).__webglTexture,0,U(A)):(k===s.TEXTURE_2D||k>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,k,i.get(B).__webglTexture,ee),n.bindFramebuffer(s.FRAMEBUFFER,null)}function X(M,A,B){if(s.bindRenderbuffer(s.RENDERBUFFER,M),A.depthBuffer&&!A.stencilBuffer){let Z=f===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||R(A)){const k=A.depthTexture;k&&k.isDepthTexture&&(k.type===gi?Z=s.DEPTH_COMPONENT32F:k.type===mi&&(Z=s.DEPTH_COMPONENT24));const ee=U(A);R(A)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Z,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Z,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,M)}else if(A.depthBuffer&&A.stencilBuffer){const Z=U(A);B&&R(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,A.width,A.height):R(A)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,M)}else{const Z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let k=0;k<Z.length;k++){const ee=Z[k],le=l.convert(ee.format,ee.colorSpace),fe=l.convert(ee.type),Ee=S(ee.internalFormat,le,fe,ee.colorSpace),Ce=U(A);B&&R(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,Ee,A.width,A.height):R(A)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,Ee,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function K(M){const A=i.get(M),B=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(Z,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,Z),!k.depthTexture||!k.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(k.depthTexture).__webglTexture&&k.depthTexture.image.width===k.width&&k.depthTexture.image.height===k.height||(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),Q(k.depthTexture,0);const ee=i.get(k.depthTexture).__webglTexture,le=U(k);if(k.depthTexture.format===qi)R(k)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else{if(k.depthTexture.format!==qa)throw new Error("Unknown depthTexture format");R(k)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0)}})(A.__webglFramebuffer,M)}else if(B){A.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Z]),A.__webglDepthbuffer[Z]=s.createRenderbuffer(),X(A.__webglDepthbuffer[Z],M,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),X(A.__webglDepthbuffer,M,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function U(M){return Math.min(a.maxSamples,M.samples)}function R(M){const A=i.get(M);return f&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function V(M,A){const B=M.colorSpace,Z=M.format,k=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===rd||B!==Or&&B!==vr&&(gt.getTransfer(B)===Et?f===!1?e.has("EXT_sRGB")===!0&&Z===gr?(M.format=rd,M.minFilter=ar,M.generateMipmaps=!1):A=Lm.sRGBToLinear(A):Z===gr&&k===Xi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}this.allocateTextureUnit=function(){const M=q;return M>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+a.maxTextures),q+=1,M},this.resetTextureUnits=function(){q=0},this.setTexture2D=Q,this.setTexture2DArray=function(M,A){const B=i.get(M);M.version>0&&B.__version!==M.version?Te(B,M,A):n.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+A)},this.setTexture3D=function(M,A){const B=i.get(M);M.version>0&&B.__version!==M.version?Te(B,M,A):n.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+A)},this.setTextureCube=function(M,A){const B=i.get(M);M.version>0&&B.__version!==M.version?(function(Z,k,ee){if(k.image.length!==6)return;const le=me(Z,k),fe=k.source;n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+ee);const Ee=i.get(fe);if(fe.version!==Ee.__version||le===!0){n.activeTexture(s.TEXTURE0+ee);const Ce=gt.getPrimaries(gt.workingColorSpace),Ne=k.colorSpace===vr?null:gt.getPrimaries(k.colorSpace),L=k.colorSpace===vr||Ce===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,k.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,k.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const we=k.isCompressedTexture||k.image[0].isCompressedTexture,de=k.image[0]&&k.image[0].isDataTexture,ue=[];for(let He=0;He<6;He++)ue[He]=we||de?de?k.image[He].image:k.image[He]:T(k.image[He],!1,!0,a.maxCubemapSize),ue[He]=V(k,ue[He]);const Se=ue[0],Le=x(Se)||f,be=l.convert(k.format,k.colorSpace),Fe=l.convert(k.type),Xe=S(k.internalFormat,be,Fe,k.colorSpace),Ie=f&&k.isVideoTexture!==!0,ke=Ee.__version===void 0||le===!0;let Ze,Pt=G(k,Se,Le);if(ae(s.TEXTURE_CUBE_MAP,k,Le),we){Ie&&ke&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Xe,Se.width,Se.height);for(let He=0;He<6;He++){Ze=ue[He].mipmaps;for(let Qe=0;Qe<Ze.length;Qe++){const Je=Ze[Qe];k.format!==gr?be!==null?Ie?n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe,0,0,Je.width,Je.height,be,Je.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe,Xe,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe,0,0,Je.width,Je.height,be,Fe,Je.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe,Xe,Je.width,Je.height,0,be,Fe,Je.data)}}}else{Ze=k.mipmaps,Ie&&ke&&(Ze.length>0&&Pt++,n.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Xe,ue[0].width,ue[0].height));for(let He=0;He<6;He++)if(de){Ie?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,ue[He].width,ue[He].height,be,Fe,ue[He].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Xe,ue[He].width,ue[He].height,0,be,Fe,ue[He].data);for(let Qe=0;Qe<Ze.length;Qe++){const Je=Ze[Qe].image[He].image;Ie?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe+1,0,0,Je.width,Je.height,be,Fe,Je.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe+1,Xe,Je.width,Je.height,0,be,Fe,Je.data)}}else{Ie?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,be,Fe,ue[He]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Xe,be,Fe,ue[He]);for(let Qe=0;Qe<Ze.length;Qe++){const Je=Ze[Qe];Ie?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe+1,0,0,be,Fe,Je.image[He]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Qe+1,Xe,be,Fe,Je.image[He])}}}C(k,Le)&&w(s.TEXTURE_CUBE_MAP),Ee.__version=fe.version,k.onUpdate&&k.onUpdate(k)}Z.__version=k.version})(B,M,A):n.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+A)},this.rebindTextures=function(M,A,B){const Z=i.get(M);A!==void 0&&re(Z.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&K(M)},this.setupRenderTarget=function(M){const A=M.texture,B=i.get(M),Z=i.get(A);M.addEventListener("dispose",P),M.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=A.version,c.memory.textures++);const k=M.isWebGLCubeRenderTarget===!0,ee=M.isWebGLMultipleRenderTargets===!0,le=x(M)||f;if(k){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(f&&A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)B.__webglFramebuffer[fe][Ee]=s.createFramebuffer()}else B.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(f&&A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)B.__webglFramebuffer[fe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ee)if(a.drawBuffers){const fe=M.texture;for(let Ee=0,Ce=fe.length;Ee<Ce;Ee++){const Ne=i.get(fe[Ee]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&M.samples>0&&R(M)===!1){const fe=ee?A:[A];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ee=0;Ee<fe.length;Ee++){const Ce=fe[Ee];B.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Ee]);const Ne=l.convert(Ce.format,Ce.colorSpace),L=l.convert(Ce.type),we=S(Ce.internalFormat,Ne,L,Ce.colorSpace,M.isXRRenderTarget===!0),de=U(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,we,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,B.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),X(B.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(k){n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(s.TEXTURE_CUBE_MAP,A,le);for(let fe=0;fe<6;fe++)if(f&&A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)re(B.__webglFramebuffer[fe][Ee],M,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else re(B.__webglFramebuffer[fe],M,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);C(A,le)&&w(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){const fe=M.texture;for(let Ee=0,Ce=fe.length;Ee<Ce;Ee++){const Ne=fe[Ee],L=i.get(Ne);n.bindTexture(s.TEXTURE_2D,L.__webglTexture),ae(s.TEXTURE_2D,Ne,le),re(B.__webglFramebuffer,M,Ne,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,0),C(Ne,le)&&w(s.TEXTURE_2D)}n.unbindTexture()}else{let fe=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(f?fe=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,Z.__webglTexture),ae(fe,A,le),f&&A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)re(B.__webglFramebuffer[Ee],M,A,s.COLOR_ATTACHMENT0,fe,Ee);else re(B.__webglFramebuffer,M,A,s.COLOR_ATTACHMENT0,fe,0);C(A,le)&&w(fe),n.unbindTexture()}M.depthBuffer&&K(M)},this.updateRenderTargetMipmap=function(M){const A=x(M)||f,B=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0,k=B.length;Z<k;Z++){const ee=B[Z];if(C(ee,A)){const le=M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=i.get(ee).__webglTexture;n.bindTexture(le,fe),w(le),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(f&&M.samples>0&&R(M)===!1){const A=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],B=M.width,Z=M.height;let k=s.COLOR_BUFFER_BIT;const ee=[],le=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=i.get(M),Ee=M.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Ce=0;Ce<A.length;Ce++)n.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){ee.push(s.COLOR_ATTACHMENT0+Ce),M.depthBuffer&&ee.push(le);const Ne=fe.__ignoreDepthValues!==void 0&&fe.__ignoreDepthValues;if(Ne===!1&&(M.depthBuffer&&(k|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&(k|=s.STENCIL_BUFFER_BIT)),Ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]),Ne===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[le]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[le])),Ee){const L=i.get(A[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,B,Z,0,0,B,Z,k,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let Ce=0;Ce<A.length;Ce++){n.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]);const Ne=i.get(A[Ce]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Ne,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=re,this.useMultisampledRTT=R}function cx(s,e,n){const i=n.isWebGL2;return{convert:function(a,l=""){let c;const f=gt.getTransfer(l);if(a===Xi)return s.UNSIGNED_BYTE;if(a===Em)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Mm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===1010)return s.BYTE;if(a===1011)return s.SHORT;if(a===ud)return s.UNSIGNED_SHORT;if(a===Sm)return s.INT;if(a===mi)return s.UNSIGNED_INT;if(a===gi)return s.FLOAT;if(a===Ws)return i?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===1021)return s.ALPHA;if(a===gr)return s.RGBA;if(a===1024)return s.LUMINANCE;if(a===1025)return s.LUMINANCE_ALPHA;if(a===qi)return s.DEPTH_COMPONENT;if(a===qa)return s.DEPTH_STENCIL;if(a===rd)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===1028)return s.RED;if(a===Tm)return s.RED_INTEGER;if(a===1030)return s.RG;if(a===wm)return s.RG_INTEGER;if(a===Rm)return s.RGBA_INTEGER;if(a===xc||a===yc||a===Sc||a===Ec)if(f===Et){if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c===null)return null;if(a===xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Sc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(c=e.get("WEBGL_compressed_texture_s3tc"),c===null)return null;if(a===xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Sc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ec)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(a===Xf||a===Yf||a===qf||a===Kf){if(c=e.get("WEBGL_compressed_texture_pvrtc"),c===null)return null;if(a===Xf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Yf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===qf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Kf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(a===Am)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===$f||a===Zf){if(c=e.get("WEBGL_compressed_texture_etc"),c===null)return null;if(a===$f)return f===Et?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Zf)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}if(a===Qf||a===Jf||a===ep||a===tp||a===np||a===rp||a===ip||a===ap||a===sp||a===op||a===lp||a===up||a===cp||a===dp){if(c=e.get("WEBGL_compressed_texture_astc"),c===null)return null;if(a===Qf)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Jf)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ep)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===tp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===np)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===rp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ip)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ap)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===sp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===op)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===lp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===up)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===cp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===dp)return f===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}if(a===Mc||a===hp||a===fp){if(c=e.get("EXT_texture_compression_bptc"),c===null)return null;if(a===Mc)return f===Et?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===fp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(a===36283||a===pp||a===mp||a===gp){if(c=e.get("EXT_texture_compression_rgtc"),c===null)return null;if(a===Mc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return a===Yi?i?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}}}class dx extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _l extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hx={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,i),C=this._getHandJoint(d,T);x!==null&&(C.matrix.fromArray(x.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.matrixWorldNeedsUpdate=!0,C.jointRadius=x.radius),C.visible=x!==null}const m=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=m.position.distanceTo(v.position),y=.02,b=.005;d.inputState.pinching&&_>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(hx)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _l;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class fx extends Ji{constructor(e,n){super();const i=this;let a=null,l=1,c=null,f="local-floor",p=1,d=null,m=null,v=null,_=null,y=null,b=null;const T=n.getContextAttributes();let x=null,C=null;const w=[],S=[],G=new $e;let z=null;const O=new Dn;O.layers.enable(1),O.viewport=new Bt;const P=new Dn;P.layers.enable(2),P.viewport=new Bt;const $=[O,P],q=new dx;q.layers.enable(1),q.layers.enable(2);let Q=null,ce=null;function F(U){const R=S.indexOf(U.inputSource);if(R===-1)return;const V=w[R];V!==void 0&&(V.update(U.inputSource,U.frame,d||c),V.dispatchEvent({type:U.type,data:U.inputSource}))}function se(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",ae);for(let U=0;U<w.length;U++){const R=S[U];R!==null&&(S[U]=null,w[U].disconnect(R))}Q=null,ce=null,e.setRenderTarget(x),y=null,_=null,v=null,a=null,C=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}function ae(U){for(let R=0;R<U.removed.length;R++){const V=U.removed[R],M=S.indexOf(V);M>=0&&(S[M]=null,w[M].disconnect(V))}for(let R=0;R<U.added.length;R++){const V=U.added[R];let M=S.indexOf(V);if(M===-1){for(let B=0;B<w.length;B++){if(B>=S.length){S.push(V),M=B;break}if(S[B]===null){S[B]=V,M=B;break}}if(M===-1)break}const A=w[M];A&&A.connect(V)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let R=w[U];return R===void 0&&(R=new Yc,w[U]=R),R.getTargetRaySpace()},this.getControllerGrip=function(U){let R=w[U];return R===void 0&&(R=new Yc,w[U]=R),R.getGripSpace()},this.getHand=function(U){let R=w[U];return R===void 0&&(R=new Yc,w[U]=R),R.getHandSpace()},this.setFramebufferScaleFactor=function(U){l=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){f=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(U){d=U},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function(U){if(a=U,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",se),a.addEventListener("inputsourceschange",ae),T.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(G),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const R={antialias:a.renderState.layers!==void 0||T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,n,R),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new $i(y.framebufferWidth,y.framebufferHeight,{format:gr,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let R=null,V=null,M=null;T.depth&&(M=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,R=T.stencil?qa:qi,V=T.stencil?Yi:mi);const A={colorFormat:n.RGBA8,depthFormat:M,scaleFactor:l};v=new XRWebGLBinding(a,n),_=v.createProjectionLayer(A),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new $i(_.textureWidth,_.textureHeight,{format:gr,type:Xi,depthTexture:new Bm(_.textureWidth,_.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0}),e.properties.get(C).__ignoreDepthValues=_.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await a.requestReferenceSpace(f),K.setContext(a),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};const me=new j,Te=new j;function re(U,R){R===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(R.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(a===null)return;q.near=P.near=O.near=U.near,q.far=P.far=O.far=U.far,Q===q.near&&ce===q.far||(a.updateRenderState({depthNear:q.near,depthFar:q.far}),Q=q.near,ce=q.far);const R=U.parent,V=q.cameras;re(q,R);for(let M=0;M<V.length;M++)re(V[M],R);V.length===2?(function(M,A,B){me.setFromMatrixPosition(A.matrixWorld),Te.setFromMatrixPosition(B.matrixWorld);const Z=me.distanceTo(Te),k=A.projectionMatrix.elements,ee=B.projectionMatrix.elements,le=k[14]/(k[10]-1),fe=k[14]/(k[10]+1),Ee=(k[9]+1)/k[5],Ce=(k[9]-1)/k[5],Ne=(k[8]-1)/k[0],L=(ee[8]+1)/ee[0],we=le*Ne,de=le*L,ue=Z/(-Ne+L),Se=ue*-Ne;A.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(Se),M.translateZ(ue),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert();const Le=le+ue,be=fe+ue,Fe=we-Se,Xe=de+(Z-Se),Ie=Ee*fe/be*Le,ke=Ce*fe/be*Le;M.projectionMatrix.makePerspective(Fe,Xe,Ie,ke,Le,be),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()})(q,O,P):q.projectionMatrix.copy(O.projectionMatrix),(function(M,A,B){B===null?M.matrix.copy(A.matrixWorld):(M.matrix.copy(B.matrixWorld),M.matrix.invert(),M.matrix.multiply(A.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(A.projectionMatrix),M.projectionMatrixInverse.copy(A.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*id*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(U,q,R)},this.getCamera=function(){return q},this.getFoveation=function(){if(_!==null||y!==null)return p},this.setFoveation=function(U){p=U,_!==null&&(_.fixedFoveation=U),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=U)};let X=null;const K=new zm;K.setAnimationLoop((function(U,R){if(m=R.getViewerPose(d||c),b=R,m!==null){const V=m.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let M=!1;V.length!==q.cameras.length&&(q.cameras.length=0,M=!0);for(let A=0;A<V.length;A++){const B=V[A];let Z=null;if(y!==null)Z=y.getViewport(B);else{const ee=v.getViewSubImage(_,B);Z=ee.viewport,A===0&&(e.setRenderTargetTextures(C,ee.colorTexture,_.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(C))}let k=$[A];k===void 0&&(k=new Dn,k.layers.enable(A),k.viewport=new Bt,$[A]=k),k.matrix.fromArray(B.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(B.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Z.x,Z.y,Z.width,Z.height),A===0&&(q.matrix.copy(k.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),M===!0&&q.cameras.push(k)}}for(let V=0;V<w.length;V++){const M=S[V],A=w[V];M!==null&&A!==void 0&&A.update(M,R,d||c)}X&&X(U,R),R.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:R}),b=null})),this.setAnimationLoop=function(U){X=U},this.dispose=function(){}}}function px(s,e){function n(a,l){a.matrixAutoUpdate===!0&&a.updateMatrix(),l.value.copy(a.matrix)}function i(a,l){a.opacity.value=l.opacity,l.color&&a.diffuse.value.copy(l.color),l.emissive&&a.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(a.map.value=l.map,n(l.map,a.mapTransform)),l.alphaMap&&(a.alphaMap.value=l.alphaMap,n(l.alphaMap,a.alphaMapTransform)),l.bumpMap&&(a.bumpMap.value=l.bumpMap,n(l.bumpMap,a.bumpMapTransform),a.bumpScale.value=l.bumpScale,l.side===Mn&&(a.bumpScale.value*=-1)),l.normalMap&&(a.normalMap.value=l.normalMap,n(l.normalMap,a.normalMapTransform),a.normalScale.value.copy(l.normalScale),l.side===Mn&&a.normalScale.value.negate()),l.displacementMap&&(a.displacementMap.value=l.displacementMap,n(l.displacementMap,a.displacementMapTransform),a.displacementScale.value=l.displacementScale,a.displacementBias.value=l.displacementBias),l.emissiveMap&&(a.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,a.emissiveMapTransform)),l.specularMap&&(a.specularMap.value=l.specularMap,n(l.specularMap,a.specularMapTransform)),l.alphaTest>0&&(a.alphaTest.value=l.alphaTest);const c=e.get(l).envMap;if(c&&(a.envMap.value=c,a.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,a.reflectivity.value=l.reflectivity,a.ior.value=l.ior,a.refractionRatio.value=l.refractionRatio),l.lightMap){a.lightMap.value=l.lightMap;const f=s._useLegacyLights===!0?Math.PI:1;a.lightMapIntensity.value=l.lightMapIntensity*f,n(l.lightMap,a.lightMapTransform)}l.aoMap&&(a.aoMap.value=l.aoMap,a.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,a.aoMapTransform))}return{refreshFogUniforms:function(a,l){l.color.getRGB(a.fogColor.value,Fm(s)),l.isFog?(a.fogNear.value=l.near,a.fogFar.value=l.far):l.isFogExp2&&(a.fogDensity.value=l.density)},refreshMaterialUniforms:function(a,l,c,f,p){l.isMeshBasicMaterial||l.isMeshLambertMaterial?i(a,l):l.isMeshToonMaterial?(i(a,l),(function(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)})(a,l)):l.isMeshPhongMaterial?(i(a,l),(function(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)})(a,l)):l.isMeshStandardMaterial?(i(a,l),(function(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,d.roughnessMapTransform)),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)})(a,l),l.isMeshPhysicalMaterial&&(function(d,m,v){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,d.specularIntensityMapTransform))})(a,l,p)):l.isMeshMatcapMaterial?(i(a,l),(function(d,m){m.matcap&&(d.matcap.value=m.matcap)})(a,l)):l.isMeshDepthMaterial?i(a,l):l.isMeshDistanceMaterial?(i(a,l),(function(d,m){const v=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far})(a,l)):l.isMeshNormalMaterial?i(a,l):l.isLineBasicMaterial?((function(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform))})(a,l),l.isLineDashedMaterial&&(function(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale})(a,l)):l.isPointsMaterial?(function(d,m,v,_){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=.5*_,m.map&&(d.map.value=m.map,n(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)})(a,l,c,f):l.isSpriteMaterial?(function(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)})(a,l):l.isShadowMaterial?(a.color.value.copy(l.color),a.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}}}function mx(s,e,n,i){let a={},l={},c=[];const f=n.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(v,_,y,b){const T=v.value,x=_+"_"+y;if(b[x]===void 0)return b[x]=typeof T=="number"||typeof T=="boolean"?T:T.clone(),!0;{const C=b[x];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[x]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function d(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=c.indexOf(_.__bindingPointIndex);c.splice(y,1),s.deleteBuffer(a[_.id]),delete a[_.id],delete l[_.id]}return{bind:function(v,_){const y=_.program;i.uniformBlockBinding(v,y)},update:function(v,_){let y=a[v.id];y===void 0&&((function(x){const C=x.uniforms;let w=0;const S=16;for(let z=0,O=C.length;z<O;z++){const P=Array.isArray(C[z])?C[z]:[C[z]];for(let $=0,q=P.length;$<q;$++){const Q=P[$],ce=Array.isArray(Q.value)?Q.value:[Q.value];for(let F=0,se=ce.length;F<se;F++){const ae=d(ce[F]),me=w%S;me!==0&&S-me<ae.boundary&&(w+=S-me),Q.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=ae.storage}}}const G=w%S;G>0&&(w+=S-G),x.__size=w,x.__cache={}})(v),y=(function(x){const C=(function(){for(let z=0;z<f;z++)if(c.indexOf(z)===-1)return c.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();x.__bindingPointIndex=C;const w=s.createBuffer(),S=x.__size,G=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,S,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,w),w})(v),a[v.id]=y,v.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(v,b);const T=e.render.frame;l[v.id]!==T&&((function(x){const C=a[x.id],w=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let G=0,z=w.length;G<z;G++){const O=Array.isArray(w[G])?w[G]:[w[G]];for(let P=0,$=O.length;P<$;P++){const q=O[P];if(p(q,G,P,S)===!0){const Q=q.__offset,ce=Array.isArray(q.value)?q.value:[q.value];let F=0;for(let se=0;se<ce.length;se++){const ae=ce[se],me=d(ae);typeof ae=="number"||typeof ae=="boolean"?(q.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,Q+F,q.__data)):ae.isMatrix3?(q.__data[0]=ae.elements[0],q.__data[1]=ae.elements[1],q.__data[2]=ae.elements[2],q.__data[3]=0,q.__data[4]=ae.elements[3],q.__data[5]=ae.elements[4],q.__data[6]=ae.elements[5],q.__data[7]=0,q.__data[8]=ae.elements[6],q.__data[9]=ae.elements[7],q.__data[10]=ae.elements[8],q.__data[11]=0):(ae.toArray(q.__data,F),F+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,q.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)})(v),l[v.id]=T)},dispose:function(){for(const v in a)s.deleteBuffer(a[v]);c=[],a={},l={}}}}class md{constructor(e={}){const{canvas:n=c_(),context:i=null,depth:a=!0,stencil:l=!0,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1}=e;let _;this.isWebGLRenderer=!0,_=i!==null?i.getContextAttributes().alpha:c;const y=new Uint32Array(4),b=new Int32Array(4);let T=null,x=null;const C=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;const S=this;let G=!1,z=0,O=0,P=null,$=-1,q=null;const Q=new Bt,ce=new Bt;let F=null;const se=new pt(0);let ae=0,me=n.width,Te=n.height,re=1,X=null,K=null;const U=new Bt(0,0,me,Te),R=new Bt(0,0,me,Te);let V=!1;const M=new hd;let A=!1,B=!1,Z=null;const k=new ot,ee=new $e,le=new j,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return P===null?re:1}let Ce,Ne,L,we,de,ue,Se,Le,be,Fe,Xe,Ie,ke,Ze,Pt,He,Qe,Je,wn,Ut,W,Pe,Ke,ct,ne=i;function Yt(N,oe){for(let he=0;he<N.length;he++){const _e=N[he],pe=n.getContext(_e,oe);if(pe!==null)return pe}return null}try{const N={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$c}`),n.addEventListener("webglcontextlost",Fr,!1),n.addEventListener("webglcontextrestored",In,!1),n.addEventListener("webglcontextcreationerror",It,!1),ne===null){const oe=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&oe.shift(),ne=Yt(oe,N),ne===null)throw Yt(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ne instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}function At(){Ce=new H_(ne),Ne=new O_(ne,Ce,e),Ce.init(Ne),Pe=new cx(ne,Ce,Ne),L=new lx(ne,Ce,Ne),we=new W_(ne),de=new Z0,ue=new ux(ne,Ce,L,de,Ne,Pe,we),Se=new k_(S),Le=new B_(S),be=new N_(ne,Ne),Ke=new U_(ne,Ce,be,Ne),Fe=new G_(ne,be,we,Ke),Xe=new q_(ne,Fe,be,we),wn=new Y_(ne,Ne,ue),He=new F_(de),Ie=new $0(S,Se,Le,Ce,Ne,Ke,He),ke=new px(S,de),Ze=new J0,Pt=new ix(Ce,Ne),Je=new D_(S,Se,Le,L,Xe,_,p),Qe=new ox(S,Xe,Ne),ct=new mx(ne,we,Ne,L),Ut=new I_(ne,Ce,we,Ne),W=new V_(ne,Ce,we,Ne),we.programs=Ie.programs,S.capabilities=Ne,S.extensions=Ce,S.properties=de,S.renderLists=Ze,S.shadowMap=Qe,S.state=L,S.info=we}At();const Ct=new fx(S,ne);function Fr(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function In(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const N=we.autoReset,oe=Qe.enabled,he=Qe.autoUpdate,_e=Qe.needsUpdate,pe=Qe.type;At(),we.autoReset=N,Qe.enabled=oe,Qe.autoUpdate=he,Qe.needsUpdate=_e,Qe.type=pe}function It(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function rn(N){const oe=N.target;oe.removeEventListener("dispose",rn),(function(he){(function(_e){const pe=de.get(_e).programs;pe!==void 0&&(pe.forEach((function(Re){Ie.releaseProgram(Re)})),_e.isShaderMaterial&&Ie.releaseShaderCache(_e))})(he),de.remove(he)})(oe)}function yr(N,oe,he){N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=Mn,N.needsUpdate=!0,ea(N,oe,he),N.side=_i,N.needsUpdate=!0,ea(N,oe,he),N.side=2):ea(N,oe,he)}this.xr=Ct,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const N=Ce.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ce.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(N){N!==void 0&&(re=N,this.setSize(me,Te,!1))},this.getSize=function(N){return N.set(me,Te)},this.setSize=function(N,oe,he=!0){Ct.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(me=N,Te=oe,n.width=Math.floor(N*re),n.height=Math.floor(oe*re),he===!0&&(n.style.width=N+"px",n.style.height=oe+"px"),this.setViewport(0,0,N,oe))},this.getDrawingBufferSize=function(N){return N.set(me*re,Te*re).floor()},this.setDrawingBufferSize=function(N,oe,he){me=N,Te=oe,re=he,n.width=Math.floor(N*he),n.height=Math.floor(oe*he),this.setViewport(0,0,N,oe)},this.getCurrentViewport=function(N){return N.copy(Q)},this.getViewport=function(N){return N.copy(U)},this.setViewport=function(N,oe,he,_e){N.isVector4?U.set(N.x,N.y,N.z,N.w):U.set(N,oe,he,_e),L.viewport(Q.copy(U).multiplyScalar(re).floor())},this.getScissor=function(N){return N.copy(R)},this.setScissor=function(N,oe,he,_e){N.isVector4?R.set(N.x,N.y,N.z,N.w):R.set(N,oe,he,_e),L.scissor(ce.copy(R).multiplyScalar(re).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(N){L.setScissorTest(V=N)},this.setOpaqueSort=function(N){X=N},this.setTransparentSort=function(N){K=N},this.getClearColor=function(N){return N.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(N=!0,oe=!0,he=!0){let _e=0;if(N){let pe=!1;if(P!==null){const Re=P.texture.format;pe=Re===Rm||Re===wm||Re===Tm}if(pe){const Re=P.texture.type,We=Re===Xi||Re===mi||Re===ud||Re===Yi||Re===Em||Re===Mm,je=Je.getClearColor(),et=Je.getClearAlpha(),tt=je.r,rt=je.g,it=je.b;We?(y[0]=tt,y[1]=rt,y[2]=it,y[3]=et,ne.clearBufferuiv(ne.COLOR,0,y)):(b[0]=tt,b[1]=rt,b[2]=it,b[3]=et,ne.clearBufferiv(ne.COLOR,0,b))}else _e|=ne.COLOR_BUFFER_BIT}oe&&(_e|=ne.DEPTH_BUFFER_BIT),he&&(_e|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne.clear(_e)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fr,!1),n.removeEventListener("webglcontextrestored",In,!1),n.removeEventListener("webglcontextcreationerror",It,!1),Ze.dispose(),Pt.dispose(),de.dispose(),Se.dispose(),Le.dispose(),Xe.dispose(),Ke.dispose(),ct.dispose(),Ie.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Xn),Ct.removeEventListener("sessionend",sr),Z&&(Z.dispose(),Z=null),Yn.stop()},this.renderBufferDirect=function(N,oe,he,_e,pe,Re){oe===null&&(oe=fe);const We=pe.isMesh&&pe.matrixWorld.determinant()<0,je=(function(Tt,an,Ot,lt,ut){an.isScene!==!0&&(an=fe),ue.resetTextureUnits();const or=an.fog,hn=lt.isMeshStandardMaterial?an.environment:null,Ul=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Or,$t=(lt.isMeshStandardMaterial?Le:Se).get(lt.envMap||hn),Il=lt.vertexColors===!0&&!!Ot.attributes.color&&Ot.attributes.color.itemSize===4,Ol=!!Ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Fl=!!Ot.morphAttributes.position,ta=!!Ot.morphAttributes.normal,na=!!Ot.morphAttributes.color;let Gr=vi;lt.toneMapped&&(P!==null&&P.isXRRenderTarget!==!0||(Gr=S.toneMapping));const Mi=Ot.morphAttributes.position||Ot.morphAttributes.normal||Ot.morphAttributes.color,kl=Mi!==void 0?Mi.length:0,dt=de.get(lt),Ja=x.state.lights;if(A===!0&&(B===!0||Tt!==q)){const sn=Tt===q&&lt.id===$;He.setState(lt,Tt,sn)}let fn=!1;lt.version===dt.__version?dt.needsLights&&dt.lightsStateVersion!==Ja.state.version||dt.outputColorSpace!==Ul||ut.isBatchedMesh&&dt.batching===!1?fn=!0:ut.isBatchedMesh||dt.batching!==!0?ut.isInstancedMesh&&dt.instancing===!1?fn=!0:ut.isInstancedMesh||dt.instancing!==!0?ut.isSkinnedMesh&&dt.skinning===!1?fn=!0:ut.isSkinnedMesh||dt.skinning!==!0?ut.isInstancedMesh&&dt.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&dt.instancingColor===!1&&ut.instanceColor!==null||dt.envMap!==$t||lt.fog===!0&&dt.fog!==or?fn=!0:dt.numClippingPlanes===void 0||dt.numClippingPlanes===He.numPlanes&&dt.numIntersection===He.numIntersection?(dt.vertexAlphas!==Il||dt.vertexTangents!==Ol||dt.morphTargets!==Fl||dt.morphNormals!==ta||dt.morphColors!==na||dt.toneMapping!==Gr||Ne.isWebGL2===!0&&dt.morphTargetsCount!==kl)&&(fn=!0):fn=!0:fn=!0:fn=!0:fn=!0:(fn=!0,dt.__version=lt.version);let Kn=dt.currentProgram;fn===!0&&(Kn=ea(lt,an,ut));let Vr=!1,Ti=!1,wi=!1;const qe=Kn.getUniforms(),lr=dt.uniforms;if(L.useProgram(Kn.program)&&(Vr=!0,Ti=!0,wi=!0),lt.id!==$&&($=lt.id,Ti=!0),Vr||q!==Tt){qe.setValue(ne,"projectionMatrix",Tt.projectionMatrix),qe.setValue(ne,"viewMatrix",Tt.matrixWorldInverse);const sn=qe.map.cameraPosition;sn!==void 0&&sn.setValue(ne,le.setFromMatrixPosition(Tt.matrixWorld)),Ne.logarithmicDepthBuffer&&qe.setValue(ne,"logDepthBufFC",2/(Math.log(Tt.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&qe.setValue(ne,"isOrthographic",Tt.isOrthographicCamera===!0),q!==Tt&&(q=Tt,Ti=!0,wi=!0)}if(ut.isSkinnedMesh){qe.setOptional(ne,ut,"bindMatrix"),qe.setOptional(ne,ut,"bindMatrixInverse");const sn=ut.skeleton;sn&&(Ne.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),qe.setValue(ne,"boneTexture",sn.boneTexture,ue)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ut.isBatchedMesh&&(qe.setOptional(ne,ut,"batchingTexture"),qe.setValue(ne,"batchingTexture",ut._matricesTexture,ue));const ra=Ot.morphAttributes;(ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&Ne.isWebGL2===!0)&&wn.update(ut,Ot,Kn),(Ti||dt.receiveShadow!==ut.receiveShadow)&&(dt.receiveShadow=ut.receiveShadow,qe.setValue(ne,"receiveShadow",ut.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(lr.envMap.value=$t,lr.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),Ti&&(qe.setValue(ne,"toneMappingExposure",S.toneMappingExposure),dt.needsLights&&(mn=wi,(pn=lr).ambientLightColor.needsUpdate=mn,pn.lightProbe.needsUpdate=mn,pn.directionalLights.needsUpdate=mn,pn.directionalLightShadows.needsUpdate=mn,pn.pointLights.needsUpdate=mn,pn.pointLightShadows.needsUpdate=mn,pn.spotLights.needsUpdate=mn,pn.spotLightShadows.needsUpdate=mn,pn.rectAreaLights.needsUpdate=mn,pn.hemisphereLights.needsUpdate=mn),or&&lt.fog===!0&&ke.refreshFogUniforms(lr,or),ke.refreshMaterialUniforms(lr,lt,re,Te,Z),Sl.upload(ne,Hr(dt),lr,ue));var pn,mn;if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Sl.upload(ne,Hr(dt),lr,ue),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&qe.setValue(ne,"center",ut.center),qe.setValue(ne,"modelViewMatrix",ut.modelViewMatrix),qe.setValue(ne,"normalMatrix",ut.normalMatrix),qe.setValue(ne,"modelMatrix",ut.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const sn=lt.uniformsGroups;for(let ia=0,es=sn.length;ia<es;ia++)if(Ne.isWebGL2){const Ri=sn[ia];ct.update(Ri,Kn),ct.bind(Ri,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn})(N,oe,he,_e,pe);L.setMaterial(_e,We);let et=he.index,tt=1;if(_e.wireframe===!0){if(et=Fe.getWireframeAttribute(he),et===void 0)return;tt=2}const rt=he.drawRange,it=he.attributes.position;let vt=rt.start*tt,Rn=(rt.start+rt.count)*tt;Re!==null&&(vt=Math.max(vt,Re.start*tt),Rn=Math.min(Rn,(Re.start+Re.count)*tt)),et!==null?(vt=Math.max(vt,0),Rn=Math.min(Rn,et.count)):it!=null&&(vt=Math.max(vt,0),Rn=Math.min(Rn,it.count));const qn=Rn-vt;if(qn<0||qn===1/0)return;let mt;Ke.setup(pe,_e,je,he,et);let xt=Ut;if(et!==null&&(mt=be.get(et),xt=W,xt.setIndex(mt)),pe.isMesh)_e.wireframe===!0?(L.setLineWidth(_e.wireframeLinewidth*Ee()),xt.setMode(ne.LINES)):xt.setMode(ne.TRIANGLES);else if(pe.isLine){let Tt=_e.linewidth;Tt===void 0&&(Tt=1),L.setLineWidth(Tt*Ee()),pe.isLineSegments?xt.setMode(ne.LINES):pe.isLineLoop?xt.setMode(ne.LINE_LOOP):xt.setMode(ne.LINE_STRIP)}else pe.isPoints?xt.setMode(ne.POINTS):pe.isSprite&&xt.setMode(ne.TRIANGLES);if(pe.isBatchedMesh)xt.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else if(pe.isInstancedMesh)xt.renderInstances(vt,qn,pe.count);else if(he.isInstancedBufferGeometry){const Tt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,an=Math.min(he.instanceCount,Tt);xt.renderInstances(vt,qn,an)}else xt.render(vt,qn)},this.compile=function(N,oe,he=null){he===null&&(he=N),x=Pt.get(he),x.init(),w.push(x),he.traverseVisible((function(pe){pe.isLight&&pe.layers.test(oe.layers)&&(x.pushLight(pe),pe.castShadow&&x.pushShadow(pe))})),N!==he&&N.traverseVisible((function(pe){pe.isLight&&pe.layers.test(oe.layers)&&(x.pushLight(pe),pe.castShadow&&x.pushShadow(pe))})),x.setupLights(S._useLegacyLights);const _e=new Set;return N.traverse((function(pe){const Re=pe.material;if(Re)if(Array.isArray(Re))for(let We=0;We<Re.length;We++){const je=Re[We];yr(je,he,pe),_e.add(je)}else yr(Re,he,pe),_e.add(Re)})),w.pop(),x=null,_e},this.compileAsync=function(N,oe,he=null){const _e=this.compile(N,oe,he);return new Promise((pe=>{function Re(){_e.forEach((function(We){de.get(We).currentProgram.isReady()&&_e.delete(We)})),_e.size!==0?setTimeout(Re,10):pe(N)}Ce.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)}))};let On=null;function Xn(){Yn.stop()}function sr(){Yn.start()}const Yn=new zm;function Qa(N,oe,he,_e){if(N.visible===!1)return;if(N.layers.test(oe.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(oe);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||M.intersectsSprite(N)){_e&&le.setFromMatrixPosition(N.matrixWorld).applyMatrix4(k);const Re=Xe.update(N),We=N.material;We.visible&&T.push(N,Re,We,he,le.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||M.intersectsObject(N))){const Re=Xe.update(N),We=N.material;if(_e&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),le.copy(N.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),le.copy(Re.boundingSphere.center)),le.applyMatrix4(N.matrixWorld).applyMatrix4(k)),Array.isArray(We)){const je=Re.groups;for(let et=0,tt=je.length;et<tt;et++){const rt=je[et],it=We[rt.materialIndex];it&&it.visible&&T.push(N,Re,it,he,le.z,rt)}}else We.visible&&T.push(N,Re,We,he,le.z,null)}}const pe=N.children;for(let Re=0,We=pe.length;Re<We;Re++)Qa(pe[Re],oe,he,_e)}function kr(N,oe,he,_e){const pe=N.opaque,Re=N.transmissive,We=N.transparent;x.setupLightsView(he),A===!0&&He.setGlobalState(S.clippingPlanes,he),Re.length>0&&(function(je,et,tt,rt){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;const vt=Ne.isWebGL2;Z===null&&(Z=new $i(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Ws:Xi,minFilter:El,samples:vt?4:0})),S.getDrawingBufferSize(ee),vt?Z.setSize(ee.x,ee.y):Z.setSize(ad(ee.x),ad(ee.y));const Rn=S.getRenderTarget();S.setRenderTarget(Z),S.getClearColor(se),ae=S.getClearAlpha(),ae<1&&S.setClearColor(16777215,.5),S.clear();const qn=S.toneMapping;S.toneMapping=vi,zr(je,tt,rt),ue.updateMultisampleRenderTarget(Z),ue.updateRenderTargetMipmap(Z);let mt=!1;for(let xt=0,Tt=et.length;xt<Tt;xt++){const an=et[xt],Ot=an.object,lt=an.geometry,ut=an.material,or=an.group;if(ut.side===2&&Ot.layers.test(rt.layers)){const hn=ut.side;ut.side=Mn,ut.needsUpdate=!0,Br(Ot,tt,rt,lt,ut,or),ut.side=hn,ut.needsUpdate=!0,mt=!0}}mt===!0&&(ue.updateMultisampleRenderTarget(Z),ue.updateRenderTargetMipmap(Z)),S.setRenderTarget(Rn),S.setClearColor(se,ae),S.toneMapping=qn})(pe,Re,oe,he),_e&&L.viewport(Q.copy(_e)),pe.length>0&&zr(pe,oe,he),Re.length>0&&zr(Re,oe,he),We.length>0&&zr(We,oe,he),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function zr(N,oe,he){const _e=oe.isScene===!0?oe.overrideMaterial:null;for(let pe=0,Re=N.length;pe<Re;pe++){const We=N[pe],je=We.object,et=We.geometry,tt=_e===null?We.material:_e,rt=We.group;je.layers.test(he.layers)&&Br(je,oe,he,et,tt,rt)}}function Br(N,oe,he,_e,pe,Re){N.onBeforeRender(S,oe,he,_e,pe,Re),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),pe.onBeforeRender(S,oe,he,_e,N,Re),pe.transparent===!0&&pe.side===2&&pe.forceSinglePass===!1?(pe.side=Mn,pe.needsUpdate=!0,S.renderBufferDirect(he,oe,_e,pe,N,Re),pe.side=_i,pe.needsUpdate=!0,S.renderBufferDirect(he,oe,_e,pe,N,Re),pe.side=2):S.renderBufferDirect(he,oe,_e,pe,N,Re),N.onAfterRender(S,oe,he,_e,pe,Re)}function ea(N,oe,he){oe.isScene!==!0&&(oe=fe);const _e=de.get(N),pe=x.state.lights,Re=x.state.shadowsArray,We=pe.state.version,je=Ie.getParameters(N,pe.state,Re,oe,he),et=Ie.getProgramCacheKey(je);let tt=_e.programs;_e.environment=N.isMeshStandardMaterial?oe.environment:null,_e.fog=oe.fog,_e.envMap=(N.isMeshStandardMaterial?Le:Se).get(N.envMap||_e.environment),tt===void 0&&(N.addEventListener("dispose",rn),tt=new Map,_e.programs=tt);let rt=tt.get(et);if(rt!==void 0){if(_e.currentProgram===rt&&_e.lightsStateVersion===We)return Ei(N,je),rt}else je.uniforms=Ie.getUniforms(N),N.onBuild(he,je,S),N.onBeforeCompile(je,S),rt=Ie.acquireProgram(je,et),tt.set(et,rt),_e.uniforms=je.uniforms;const it=_e.uniforms;return(N.isShaderMaterial||N.isRawShaderMaterial)&&N.clipping!==!0||(it.clippingPlanes=He.uniform),Ei(N,je),_e.needsLights=(function(vt){return vt.isMeshLambertMaterial||vt.isMeshToonMaterial||vt.isMeshPhongMaterial||vt.isMeshStandardMaterial||vt.isShadowMaterial||vt.isShaderMaterial&&vt.lights===!0})(N),_e.lightsStateVersion=We,_e.needsLights&&(it.ambientLightColor.value=pe.state.ambient,it.lightProbe.value=pe.state.probe,it.directionalLights.value=pe.state.directional,it.directionalLightShadows.value=pe.state.directionalShadow,it.spotLights.value=pe.state.spot,it.spotLightShadows.value=pe.state.spotShadow,it.rectAreaLights.value=pe.state.rectArea,it.ltc_1.value=pe.state.rectAreaLTC1,it.ltc_2.value=pe.state.rectAreaLTC2,it.pointLights.value=pe.state.point,it.pointLightShadows.value=pe.state.pointShadow,it.hemisphereLights.value=pe.state.hemi,it.directionalShadowMap.value=pe.state.directionalShadowMap,it.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,it.spotShadowMap.value=pe.state.spotShadowMap,it.spotLightMatrix.value=pe.state.spotLightMatrix,it.spotLightMap.value=pe.state.spotLightMap,it.pointShadowMap.value=pe.state.pointShadowMap,it.pointShadowMatrix.value=pe.state.pointShadowMatrix),_e.currentProgram=rt,_e.uniformsList=null,rt}function Hr(N){if(N.uniformsList===null){const oe=N.currentProgram.getUniforms();N.uniformsList=Sl.seqWithValue(oe.seq,N.uniforms)}return N.uniformsList}function Ei(N,oe){const he=de.get(N);he.outputColorSpace=oe.outputColorSpace,he.batching=oe.batching,he.instancing=oe.instancing,he.instancingColor=oe.instancingColor,he.skinning=oe.skinning,he.morphTargets=oe.morphTargets,he.morphNormals=oe.morphNormals,he.morphColors=oe.morphColors,he.morphTargetsCount=oe.morphTargetsCount,he.numClippingPlanes=oe.numClippingPlanes,he.numIntersection=oe.numClipIntersection,he.vertexAlphas=oe.vertexAlphas,he.vertexTangents=oe.vertexTangents,he.toneMapping=oe.toneMapping}Yn.setAnimationLoop((function(N){On&&On(N)})),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(N){On=N,Ct.setAnimationLoop(N),N===null?Yn.stop():Yn.start()},Ct.addEventListener("sessionstart",Xn),Ct.addEventListener("sessionend",sr),this.render=function(N,oe){if(oe!==void 0&&oe.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(G===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(oe),oe=Ct.getCamera()),N.isScene===!0&&N.onBeforeRender(S,N,oe,P),x=Pt.get(N,w.length),x.init(),w.push(x),k.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),M.setFromProjectionMatrix(k),B=this.localClippingEnabled,A=He.init(this.clippingPlanes,B),T=Ze.get(N,C.length),T.init(),C.push(T),Qa(N,oe,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(X,K),this.info.render.frame++,A===!0&&He.beginShadows();const he=x.state.shadowsArray;if(Qe.render(he,N,oe),A===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(T,N),x.setupLights(S._useLegacyLights),oe.isArrayCamera){const _e=oe.cameras;for(let pe=0,Re=_e.length;pe<Re;pe++){const We=_e[pe];kr(T,N,We,We.viewport)}}else kr(T,N,oe);P!==null&&(ue.updateMultisampleRenderTarget(P),ue.updateRenderTargetMipmap(P)),N.isScene===!0&&N.onAfterRender(S,N,oe),Ke.resetDefaultState(),$=-1,q=null,w.pop(),x=w.length>0?w[w.length-1]:null,C.pop(),T=C.length>0?C[C.length-1]:null},this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(N,oe,he){de.get(N.texture).__webglTexture=oe,de.get(N.depthTexture).__webglTexture=he;const _e=de.get(N);_e.__hasExternalTextures=!0,_e.__hasExternalTextures&&(_e.__autoAllocateDepthBuffer=he===void 0,_e.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_e.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,oe){const he=de.get(N);he.__webglFramebuffer=oe,he.__useDefaultFramebuffer=oe===void 0},this.setRenderTarget=function(N,oe=0,he=0){P=N,z=oe,O=he;let _e=!0,pe=null,Re=!1,We=!1;if(N){const je=de.get(N);je.__useDefaultFramebuffer!==void 0?(L.bindFramebuffer(ne.FRAMEBUFFER,null),_e=!1):je.__webglFramebuffer===void 0?ue.setupRenderTarget(N):je.__hasExternalTextures&&ue.rebindTextures(N,de.get(N.texture).__webglTexture,de.get(N.depthTexture).__webglTexture);const et=N.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(We=!0);const tt=de.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(pe=Array.isArray(tt[oe])?tt[oe][he]:tt[oe],Re=!0):pe=Ne.isWebGL2&&N.samples>0&&ue.useMultisampledRTT(N)===!1?de.get(N).__webglMultisampledFramebuffer:Array.isArray(tt)?tt[he]:tt,Q.copy(N.viewport),ce.copy(N.scissor),F=N.scissorTest}else Q.copy(U).multiplyScalar(re).floor(),ce.copy(R).multiplyScalar(re).floor(),F=V;if(L.bindFramebuffer(ne.FRAMEBUFFER,pe)&&Ne.drawBuffers&&_e&&L.drawBuffers(N,pe),L.viewport(Q),L.scissor(ce),L.setScissorTest(F),Re){const je=de.get(N.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+oe,je.__webglTexture,he)}else if(We){const je=de.get(N.texture),et=oe||0;ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,je.__webglTexture,he||0,et)}$=-1},this.readRenderTargetPixels=function(N,oe,he,_e,pe,Re,We){if(!N||!N.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=de.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){L.bindFramebuffer(ne.FRAMEBUFFER,je);try{const et=N.texture,tt=et.format,rt=et.type;if(tt!==gr&&Pe.convert(tt)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const it=rt===Ws&&(Ce.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(!(rt===Xi||Pe.convert(rt)===ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_TYPE)||rt===gi&&(Ne.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float"))||it))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");oe>=0&&oe<=N.width-_e&&he>=0&&he<=N.height-pe&&ne.readPixels(oe,he,_e,pe,Pe.convert(tt),Pe.convert(rt),Re)}finally{const et=P!==null?de.get(P).__webglFramebuffer:null;L.bindFramebuffer(ne.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(N,oe,he=0){const _e=Math.pow(2,-he),pe=Math.floor(oe.image.width*_e),Re=Math.floor(oe.image.height*_e);ue.setTexture2D(oe,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,he,0,0,N.x,N.y,pe,Re),L.unbindTexture()},this.copyTextureToTexture=function(N,oe,he,_e=0){const pe=oe.image.width,Re=oe.image.height,We=Pe.convert(he.format),je=Pe.convert(he.type);ue.setTexture2D(he,0),ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,he.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,he.unpackAlignment),oe.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,_e,N.x,N.y,pe,Re,We,je,oe.image.data):oe.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,_e,N.x,N.y,oe.mipmaps[0].width,oe.mipmaps[0].height,We,oe.mipmaps[0].data):ne.texSubImage2D(ne.TEXTURE_2D,_e,N.x,N.y,We,je,oe.image),_e===0&&he.generateMipmaps&&ne.generateMipmap(ne.TEXTURE_2D),L.unbindTexture()},this.copyTextureToTexture3D=function(N,oe,he,_e,pe=0){if(S.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const Re=N.max.x-N.min.x+1,We=N.max.y-N.min.y+1,je=N.max.z-N.min.z+1,et=Pe.convert(_e.format),tt=Pe.convert(_e.type);let rt;if(_e.isData3DTexture)ue.setTexture3D(_e,0),rt=ne.TEXTURE_3D;else{if(!_e.isDataArrayTexture&&!_e.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");ue.setTexture2DArray(_e,0),rt=ne.TEXTURE_2D_ARRAY}ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,_e.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,_e.unpackAlignment);const it=ne.getParameter(ne.UNPACK_ROW_LENGTH),vt=ne.getParameter(ne.UNPACK_IMAGE_HEIGHT),Rn=ne.getParameter(ne.UNPACK_SKIP_PIXELS),qn=ne.getParameter(ne.UNPACK_SKIP_ROWS),mt=ne.getParameter(ne.UNPACK_SKIP_IMAGES),xt=he.isCompressedTexture?he.mipmaps[pe]:he.image;ne.pixelStorei(ne.UNPACK_ROW_LENGTH,xt.width),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,xt.height),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,N.min.x),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,N.min.y),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,N.min.z),he.isDataTexture||he.isData3DTexture?ne.texSubImage3D(rt,pe,oe.x,oe.y,oe.z,Re,We,je,et,tt,xt.data):he.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(rt,pe,oe.x,oe.y,oe.z,Re,We,je,et,xt.data)):ne.texSubImage3D(rt,pe,oe.x,oe.y,oe.z,Re,We,je,et,tt,xt),ne.pixelStorei(ne.UNPACK_ROW_LENGTH,it),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,vt),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,Rn),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,qn),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,mt),pe===0&&_e.generateMipmaps&&ne.generateMipmap(rt),L.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?ue.setTextureCube(N,0):N.isData3DTexture?ue.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ue.setTexture2DArray(N,0):ue.setTexture2D(N,0),L.unbindTexture()},this.resetState=function(){z=0,O=0,P=null,L.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ka}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===cd?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?Ki:bm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?zt:Or}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gx extends md{}gx.prototype.isWebGL1Renderer=!0;class Xm extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}new j;new j;new j;new j;new $e;new $e;new ot;new j;new j;new j;new $e;new $e;new $e;new j;new j;new j;new Bt;new Bt;new j;new ot;new j;new yi;new ot;new Ys;new ot;new ot;new ot;new ot;new xi;new ot;new jn;new yi;new ot;new ot;new ot;new ot;new hd;new xi;new yi;new j;new jn;new j;new j;new ot;new Ys;new yi;new j;new j;new ot;new Ys;new yi;new j;new j;new j;new j;new j;new Wn;class Dl extends Si{constructor(e=1,n=32,i=16,a=0,l=2*Math.PI,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const p=Math.min(c+f,Math.PI);let d=0;const m=[],v=new j,_=new j,y=[],b=[],T=[],x=[];for(let C=0;C<=i;C++){const w=[],S=C/i;let G=0;C===0&&c===0?G=.5/n:C===i&&p===Math.PI&&(G=-.5/n);for(let z=0;z<=n;z++){const O=z/n;v.x=-e*Math.cos(a+O*l)*Math.sin(c+S*f),v.y=e*Math.cos(c+S*f),v.z=e*Math.sin(a+O*l)*Math.sin(c+S*f),b.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),x.push(O+G,1-S),w.push(d++)}m.push(w)}for(let C=0;C<i;C++)for(let w=0;w<n;w++){const S=m[C][w+1],G=m[C][w],z=m[C+1][w],O=m[C+1][w+1];(C!==0||c>0)&&y.push(S,G,O),(C!==i-1||p<Math.PI)&&y.push(G,z,O)}this.setIndex(y),this.setAttribute("position",new xr(b,3)),this.setAttribute("normal",new xr(T,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const im={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class vx{constructor(e,n,i){const a=this;let l,c=!1,f=0,p=0;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(m){p++,c===!1&&a.onStart!==void 0&&a.onStart(m,f,p),c=!0},this.itemEnd=function(m){f++,a.onProgress!==void 0&&a.onProgress(m,f,p),f===p&&(c=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return l?l(m):m},this.setURLModifier=function(m){return l=m,this},this.addHandler=function(m,v){return d.push(m,v),this},this.removeHandler=function(m){const v=d.indexOf(m);return v!==-1&&d.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=d.length;v<_;v+=2){const y=d[v],b=d[v+1];if(y.global&&(y.lastIndex=0),y.test(m))return b}return null}}}const _x=new vx;class gd{constructor(e){this.manager=e!==void 0?e:_x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise((function(a,l){i.load(e,a,n,l)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gd.DEFAULT_MATERIAL_NAME="__DEFAULT";class xx extends gd{constructor(e){super(e)}load(e,n,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=im.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout((function(){n&&n(c),l.manager.itemEnd(e)}),0),c;const f=js("img");function p(){m(),im.add(e,this),n&&n(this),l.manager.itemEnd(e)}function d(v){m(),a&&a(v),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class Ym extends gd{constructor(e){super(e)}load(e,n,i,a){const l=new Tn,c=new xx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,(function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)}),i,a),l}}new ot;new j;new j;new ot;new j;new j;new ot;new ot;new ot;new j;new j;new j;new j;new j;new j;const qm="\\[\\]\\.:\\/",qc="[^"+qm+"]",yx="[^"+qm.replace("\\.","")+"]";new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",qc)+/(WCOD+)?/.source.replace("WCOD",yx)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc)+"$");class am{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}new $e;new j;new j;new j;new j;new ot;new ot;new j;new pt;new pt;new j;new j;new j;new j;new dd;new xi;new j;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);const sm={type:"change"},Kc={type:"start"},om={type:"end"},xl=new Ys,lm=new pi,Sx=Math.cos(70*u_.DEG2RAD);class Km extends Ji{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Aa.ROTATE,MIDDLE:Aa.DOLLY,RIGHT:Aa.PAN},this.touches={ONE:ba.ROTATE,TWO:ba.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(W){W.addEventListener("keydown",ke),this._domElementKeyEvents=W},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ke),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(sm),i.update(),l=a.NONE},this.update=(function(){const W=new j,Pe=new Zi().setFromUnitVectors(e.up,new j(0,1,0)),Ke=Pe.clone().invert(),ct=new j,ne=new Zi,Yt=new j,At=2*Math.PI;return function(Fr=null){const In=i.object.position;W.copy(In).sub(i.target),W.applyQuaternion(Pe),f.setFromVector3(W),i.autoRotate&&l===a.NONE&&ce(q(Fr)),i.enableDamping?(f.theta+=p.theta*i.dampingFactor,f.phi+=p.phi*i.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let It=i.minAzimuthAngle,rn=i.maxAzimuthAngle;isFinite(It)&&isFinite(rn)&&(It<-Math.PI?It+=At:It>Math.PI&&(It-=At),rn<-Math.PI?rn+=At:rn>Math.PI&&(rn-=At),It<=rn?f.theta=Math.max(It,Math.min(rn,f.theta)):f.theta=f.theta>(It+rn)/2?Math.max(It,f.theta):Math.min(rn,f.theta)),f.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,f.phi)),f.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&O||i.object.isOrthographicCamera?f.radius=K(f.radius):f.radius=K(f.radius*d),W.setFromSpherical(f),W.applyQuaternion(Ke),In.copy(i.target).add(W),i.object.lookAt(i.target),i.enableDamping===!0?(p.theta*=1-i.dampingFactor,p.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(p.set(0,0,0),m.set(0,0,0));let yr=!1;if(i.zoomToCursor&&O){let On=null;if(i.object.isPerspectiveCamera){const Xn=W.length();On=K(Xn*d);const sr=Xn-On;i.object.position.addScaledVector(G,sr),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Xn=new j(z.x,z.y,0);Xn.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),yr=!0;const sr=new j(z.x,z.y,0);sr.unproject(i.object),i.object.position.sub(sr).add(Xn),i.object.updateMatrixWorld(),On=W.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;On!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(On).add(i.object.position):(xl.origin.copy(i.object.position),xl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xl.direction))<Sx?e.lookAt(i.target):(lm.setFromNormalAndCoplanarPoint(i.object.up,i.target),xl.intersectPlane(lm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),yr=!0);return d=1,O=!1,yr||ct.distanceToSquared(i.object.position)>c||8*(1-ne.dot(i.object.quaternion))>c||Yt.distanceToSquared(i.target)>0?(i.dispatchEvent(sm),ct.copy(i.object.position),ne.copy(i.object.quaternion),Yt.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",He),i.domElement.removeEventListener("pointerdown",Se),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Ie),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ke),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const c=1e-6,f=new am,p=new am;let d=1;const m=new j,v=new $e,_=new $e,y=new $e,b=new $e,T=new $e,x=new $e,C=new $e,w=new $e,S=new $e,G=new j,z=new $e;let O=!1;const P=[],$={};function q(W){return W!==null?2*Math.PI/60*i.autoRotateSpeed*W:2*Math.PI/60/60*i.autoRotateSpeed}function Q(W){const Pe=Math.abs(W)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*Pe)}function ce(W){p.theta-=W}function F(W){p.phi-=W}const se=(function(){const W=new j;return function(Ke,ct){W.setFromMatrixColumn(ct,0),W.multiplyScalar(-Ke),m.add(W)}})(),ae=(function(){const W=new j;return function(Ke,ct){i.screenSpacePanning===!0?W.setFromMatrixColumn(ct,1):(W.setFromMatrixColumn(ct,0),W.crossVectors(i.object.up,W)),W.multiplyScalar(Ke),m.add(W)}})(),me=(function(){const W=new j;return function(Ke,ct){const ne=i.domElement;if(i.object.isPerspectiveCamera){const Yt=i.object.position;W.copy(Yt).sub(i.target);let At=W.length();At*=Math.tan(i.object.fov/2*Math.PI/180),se(2*Ke*At/ne.clientHeight,i.object.matrix),ae(2*ct*At/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(se(Ke*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),ae(ct*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Te(W){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=W:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(W){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=W:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(W,Pe){if(!i.zoomToCursor)return;O=!0;const Ke=i.domElement.getBoundingClientRect(),ct=W-Ke.left,ne=Pe-Ke.top,Yt=Ke.width,At=Ke.height;z.x=ct/Yt*2-1,z.y=-(ne/At)*2+1,G.set(z.x,z.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(W){return Math.max(i.minDistance,Math.min(i.maxDistance,W))}function U(W){v.set(W.clientX,W.clientY)}function R(W){X(W.clientX,W.clientX),C.set(W.clientX,W.clientY)}function V(W){b.set(W.clientX,W.clientY)}function M(W){_.set(W.clientX,W.clientY),y.subVectors(_,v).multiplyScalar(i.rotateSpeed);const Pe=i.domElement;ce(2*Math.PI*y.x/Pe.clientHeight),F(2*Math.PI*y.y/Pe.clientHeight),v.copy(_),i.update()}function A(W){w.set(W.clientX,W.clientY),S.subVectors(w,C),S.y>0?Te(Q(S.y)):S.y<0&&re(Q(S.y)),C.copy(w),i.update()}function B(W){T.set(W.clientX,W.clientY),x.subVectors(T,b).multiplyScalar(i.panSpeed),me(x.x,x.y),b.copy(T),i.update()}function Z(W){X(W.clientX,W.clientY),W.deltaY<0?re(Q(W.deltaY)):W.deltaY>0&&Te(Q(W.deltaY)),i.update()}function k(W){let Pe=!1;switch(W.code){case i.keys.UP:W.ctrlKey||W.metaKey||W.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(0,i.keyPanSpeed),Pe=!0;break;case i.keys.BOTTOM:W.ctrlKey||W.metaKey||W.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(0,-i.keyPanSpeed),Pe=!0;break;case i.keys.LEFT:W.ctrlKey||W.metaKey||W.shiftKey?ce(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(i.keyPanSpeed,0),Pe=!0;break;case i.keys.RIGHT:W.ctrlKey||W.metaKey||W.shiftKey?ce(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(-i.keyPanSpeed,0),Pe=!0;break}Pe&&(W.preventDefault(),i.update())}function ee(W){if(P.length===1)v.set(W.pageX,W.pageY);else{const Pe=Ut(W),Ke=.5*(W.pageX+Pe.x),ct=.5*(W.pageY+Pe.y);v.set(Ke,ct)}}function le(W){if(P.length===1)b.set(W.pageX,W.pageY);else{const Pe=Ut(W),Ke=.5*(W.pageX+Pe.x),ct=.5*(W.pageY+Pe.y);b.set(Ke,ct)}}function fe(W){const Pe=Ut(W),Ke=W.pageX-Pe.x,ct=W.pageY-Pe.y,ne=Math.sqrt(Ke*Ke+ct*ct);C.set(0,ne)}function Ee(W){i.enableZoom&&fe(W),i.enablePan&&le(W)}function Ce(W){i.enableZoom&&fe(W),i.enableRotate&&ee(W)}function Ne(W){if(P.length==1)_.set(W.pageX,W.pageY);else{const Ke=Ut(W),ct=.5*(W.pageX+Ke.x),ne=.5*(W.pageY+Ke.y);_.set(ct,ne)}y.subVectors(_,v).multiplyScalar(i.rotateSpeed);const Pe=i.domElement;ce(2*Math.PI*y.x/Pe.clientHeight),F(2*Math.PI*y.y/Pe.clientHeight),v.copy(_)}function L(W){if(P.length===1)T.set(W.pageX,W.pageY);else{const Pe=Ut(W),Ke=.5*(W.pageX+Pe.x),ct=.5*(W.pageY+Pe.y);T.set(Ke,ct)}x.subVectors(T,b).multiplyScalar(i.panSpeed),me(x.x,x.y),b.copy(T)}function we(W){const Pe=Ut(W),Ke=W.pageX-Pe.x,ct=W.pageY-Pe.y,ne=Math.sqrt(Ke*Ke+ct*ct);w.set(0,ne),S.set(0,Math.pow(w.y/C.y,i.zoomSpeed)),Te(S.y),C.copy(w);const Yt=(W.pageX+Pe.x)*.5,At=(W.pageY+Pe.y)*.5;X(Yt,At)}function de(W){i.enableZoom&&we(W),i.enablePan&&L(W)}function ue(W){i.enableZoom&&we(W),i.enableRotate&&Ne(W)}function Se(W){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(W.pointerId),i.domElement.addEventListener("pointermove",Le),i.domElement.addEventListener("pointerup",be)),Qe(W),W.pointerType==="touch"?Ze(W):Fe(W))}function Le(W){i.enabled!==!1&&(W.pointerType==="touch"?Pt(W):Xe(W))}function be(W){Je(W),P.length===0&&(i.domElement.releasePointerCapture(W.pointerId),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(om),l=a.NONE}function Fe(W){let Pe;switch(W.button){case 0:Pe=i.mouseButtons.LEFT;break;case 1:Pe=i.mouseButtons.MIDDLE;break;case 2:Pe=i.mouseButtons.RIGHT;break;default:Pe=-1}switch(Pe){case Aa.DOLLY:if(i.enableZoom===!1)return;R(W),l=a.DOLLY;break;case Aa.ROTATE:if(W.ctrlKey||W.metaKey||W.shiftKey){if(i.enablePan===!1)return;V(W),l=a.PAN}else{if(i.enableRotate===!1)return;U(W),l=a.ROTATE}break;case Aa.PAN:if(W.ctrlKey||W.metaKey||W.shiftKey){if(i.enableRotate===!1)return;U(W),l=a.ROTATE}else{if(i.enablePan===!1)return;V(W),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(Kc)}function Xe(W){switch(l){case a.ROTATE:if(i.enableRotate===!1)return;M(W);break;case a.DOLLY:if(i.enableZoom===!1)return;A(W);break;case a.PAN:if(i.enablePan===!1)return;B(W);break}}function Ie(W){i.enabled===!1||i.enableZoom===!1||l!==a.NONE||(W.preventDefault(),i.dispatchEvent(Kc),Z(W),i.dispatchEvent(om))}function ke(W){i.enabled===!1||i.enablePan===!1||k(W)}function Ze(W){switch(wn(W),P.length){case 1:switch(i.touches.ONE){case ba.ROTATE:if(i.enableRotate===!1)return;ee(W),l=a.TOUCH_ROTATE;break;case ba.PAN:if(i.enablePan===!1)return;le(W),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case ba.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(W),l=a.TOUCH_DOLLY_PAN;break;case ba.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(W),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(Kc)}function Pt(W){switch(wn(W),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ne(W),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;L(W),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;de(W),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ue(W),i.update();break;default:l=a.NONE}}function He(W){i.enabled!==!1&&W.preventDefault()}function Qe(W){P.push(W.pointerId)}function Je(W){delete $[W.pointerId];for(let Pe=0;Pe<P.length;Pe++)if(P[Pe]==W.pointerId){P.splice(Pe,1);return}}function wn(W){let Pe=$[W.pointerId];Pe===void 0&&(Pe=new $e,$[W.pointerId]=Pe),Pe.set(W.pageX,W.pageY)}function Ut(W){const Pe=W.pointerId===P[0]?P[1]:P[0];return $[Pe]}i.domElement.addEventListener("contextmenu",He),i.domElement.addEventListener("pointerdown",Se),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Ie,{passive:!1}),this.update()}}function Ex(){return new URLSearchParams(window.location.search).get("debug")==="1"}function Mx(s){const e=s.object;if(e.includes("שרגא")||e.includes("מיא")||e.includes("קולמוס")||e.includes("ספסלא"))return .55;if(e.includes("רבי")||e.includes("ספרא")||e.includes("תלמידא"))return .68;if(e.includes("ארון")||e.includes("חלון")||e.includes("תרעא"))return .64;const n=s.hotspot.radiusPx??70;return n<=58?.52:n>=85?.68:.6}function $m({riddle:s,onDiscover:e,onInteraction:n,onHoverChange:i,showIntroGlow:a=!1,debug:l}){const c=ge.useRef(null),f=s.hotspot.radiusPx??70,d=Math.max(f,48)*2,m=Mx(s),v=Math.round(d*m),_=l===!0||l==null&&Ex(),[y,b]=ge.useState(!1),[T,x]=ge.useState(!1),[C,w]=ge.useState(!1),S=ge.useRef(!1),G=ge.useCallback(()=>{b(!0),i==null||i(!0),n==null||n()},[i,n]),z=ge.useCallback(()=>{b(!1),w(!1),i==null||i(!1)},[i]);ge.useEffect(()=>{if(!a)return;x(!0),G();const $=window.setTimeout(()=>{x(!1),z()},3500);return()=>window.clearTimeout($)},[a,G,z]),ge.useEffect(()=>{if(!y||S.current)return;const $=q=>{var Q;(Q=c.current)!=null&&Q.contains(q.target)||z()};return document.addEventListener("pointerdown",$),()=>document.removeEventListener("pointerdown",$)},[y,z]);const O=ge.useCallback(()=>{e(),z()},[e,z]),P=y||T;return D.jsxs("div",{className:"hotspot-wrap",style:{width:d,height:d},children:[D.jsx("div",{className:["hotspot-glow",P?"hotspot-glow--on":"",T?"hotspot-glow--intro":""].filter(Boolean).join(" "),style:{width:v,height:Math.round(v*1.25)},"aria-hidden":"true"}),D.jsx("button",{ref:c,type:"button",className:["hotspot-hit",_?"hotspot-hit--debug":""].filter(Boolean).join(" "),style:{width:d,height:d},onPointerDown:$=>{$.stopPropagation(),$.pointerType==="touch"&&(S.current=!0)},onPointerEnter:()=>{S.current||G()},onPointerLeave:()=>{S.current||z()},onFocus:()=>G(),onBlur:()=>z(),onClick:$=>{if($.stopPropagation(),S.current){if(!C){$.preventDefault(),w(!0),G();return}O();return}O()},"aria-label":`${s.object} — חפשו את החפץ כדי לפתוח חידה`})]})}function Zm({show:s}){const[e,n]=ge.useState(s);return ge.useEffect(()=>{if(!s){n(!1);return}n(!0);const i=window.setTimeout(()=>n(!1),3500);return()=>window.clearTimeout(i)},[s]),e?D.jsx("div",{className:"search-hint-bubble",role:"status",children:"🔍 העבירו את העכבר / הקישו על החפץ כדי לחפש"}):null}const Bs=.1;function Tx(){return new URLSearchParams(window.location.search).get("debug")==="1"}function wx(s,e,n,i){const[a,l,c]=Vs(n,i);s.position.set(-a*Bs,-l*Bs,-c*Bs),e.target.set(0,0,0),e.update()}function Rx({riddles:s,activeIndex:e,solvedCount:n,onHotspotClick:i,lockUnlocked:a,onEnterInner:l,onWebGLFail:c}){const f=ge.useRef(null),p=ge.useRef(null),d=ge.useRef([]),m=ge.useRef([]),v=ge.useRef(null),_=ge.useRef(null),y=ge.useRef(null),[b,T]=ge.useState(!1),[x,C]=ge.useState(!1),w=Tx(),S=e===0&&n===0&&!a,G=ge.useCallback((P,$)=>{const q=_.current,Q=y.current;!q||!Q||wx(q,Q,P,$)},[]);ge.useEffect(()=>{if(w)return window.__lookAtRiddle=P=>{const $=s[P];$&&G($.hotspot.yaw,$.hotspot.pitch)},()=>{delete window.__lookAtRiddle}},[w,G,s]);const z=ge.useCallback(P=>{C(P);const $=y.current;$&&($.enableRotate=!P)},[]);ge.useEffect(()=>{const P=f.current,$=p.current;if(!P||!$)return;let q;try{q=new md({canvas:$,antialias:!0,alpha:!1})}catch{c();return}const Q=new Xm,ce=new Dn(75,1,.1,1100);_.current=ce;const F=new Km(ce,$);y.current=F,F.enableZoom=!1,F.enablePan=!1,F.enableDamping=!0,F.dampingFactor=.08,F.rotateSpeed=-.35,F.minDistance=Bs,F.maxDistance=Bs,F.target.set(0,0,0);const se=new Dl(500,64,48);se.scale(-1,1,1);let ae=null,me=!1;new Ym().load(gm,M=>{if(me){M.dispose();return}M.colorSpace=zt,ae=new jn(se,new Pl({map:M})),Q.add(ae),T(!0)},void 0,()=>{me||c()});const re=()=>{const M=P.clientWidth,A=P.clientHeight;M<2||A<2||(ce.aspect=M/A,ce.updateProjectionMatrix(),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setSize(M,A,!1))},X=new ResizeObserver(re);X.observe(P),re();const K=new j,U=()=>{const M=P.clientWidth,A=P.clientHeight;if(M<2||A<2)return;s.forEach((Z,k)=>{const[ee,le,fe]=Vs(Z.hotspot.yaw,Z.hotspot.pitch);K.set(ee,le,fe).project(ce);const Ee=K.z<1&&K.z>-1,Ce=`${(K.x*.5+.5)*M}px`,Ne=`${(-K.y*.5+.5)*A}px`,L=d.current[k];L&&(L.style.left=Ce,L.style.top=Ne,L.style.display=Ee?"":"none");const we=m.current[k];we&&(we.style.left=Ce,we.style.top=Ne,we.style.display=Ee?"":"none")});const B=v.current;if(B)if(a){const[Z,k,ee]=Vs(0,-25);K.set(Z,k,ee).project(ce);const le=K.z<1&&K.z>-1;B.style.left=`${(K.x*.5+.5)*M}px`,B.style.top=`${(-K.y*.5+.5)*A}px`,B.style.display=le?"":"none"}else B.style.display="none"};let R=0;const V=()=>{R=requestAnimationFrame(V),F.update(),q.render(Q,ce),U()};return V(),()=>{var M;if(me=!0,cancelAnimationFrame(R),X.disconnect(),F.dispose(),se.dispose(),ae){const A=ae.material;(M=A.map)==null||M.dispose(),A.dispose()}q.dispose(),_.current=null,y.current=null}},[c,s,a]),ge.useEffect(()=>{if(!b||!S)return;const P=s[0];if(!P)return;const $=window.setTimeout(()=>{G(P.hotspot.yaw,P.hotspot.pitch)},300);return()=>window.clearTimeout($)},[b,S,s,G]);const O=!a&&e<s.length?s[e]:null;return D.jsxs("div",{ref:f,className:"panorama-viewport panorama-viewport--360",children:[D.jsx("canvas",{ref:p,className:"panorama-canvas","aria-hidden":"true"}),!b&&D.jsx("div",{className:"panorama-loading",children:"טוען פנורמה…"}),!a&&e<s.length&&D.jsx("div",{className:"panorama-scene-dim","aria-hidden":"true"}),D.jsx(Zm,{show:S&&b}),D.jsxs("div",{className:`panorama-hotspots-layer${x?" panorama-hotspots-layer--hover":""}`,children:[O&&D.jsx("div",{ref:P=>{d.current[e]=P},className:"hotspot hotspot--active",children:D.jsx($m,{riddle:O,onDiscover:()=>i(e),onHoverChange:z,showIntroGlow:S})},O.id),w&&s.map((P,$)=>D.jsx("div",{ref:q=>{m.current[$]=q},className:"hotspot-debug-mark","aria-hidden":"true",children:P.id},`dbg-${P.id}`)),D.jsxs("button",{type:"button",ref:v,className:"inner-door-open",style:{display:a?"":"none"},onClick:l,disabled:!l,"aria-label":"כניסה לחדר הפנימי",children:[D.jsx("span",{className:"inner-door-glow","aria-hidden":"true"}),D.jsx("span",{className:"inner-door-label",children:"לחדר הפנימי"})]})]})]})}function Ax(s){return!!(s!=null&&s.closest(".hotspot-hit, .hotspot-wrap"))}function bx({riddles:s,activeIndex:e,solvedCount:n,onHotspotClick:i,lockUnlocked:a,onEnterInner:l}){const c=ge.useRef(null),[f,p]=ge.useState(!1),d=ge.useRef({active:!1,startX:0,scrollLeft:0}),m=e===0&&n===0&&!a,v=ge.useCallback(x=>{var O;const C=c.current;if(!C)return;const w=(O=s[x])==null?void 0:O.hotspot;if(!w)return;const S=C.querySelector(".panorama-inner");if(!S)return;const z=(w.flatX??(w.yaw+180)/360*100)/100*S.offsetWidth-C.clientWidth/2;C.scrollTo({left:Math.max(0,z),behavior:"smooth"})},[s]);ge.useEffect(()=>{if(!m)return;const x=window.setTimeout(()=>v(0),300);return()=>window.clearTimeout(x)},[m,v]);const _=x=>{if(Ax(x.target))return;const C=c.current;C&&(d.current={active:!0,startX:x.clientX,scrollLeft:C.scrollLeft},C.setPointerCapture(x.pointerId))},y=x=>{if(!d.current.active||!c.current)return;const C=x.clientX-d.current.startX;c.current.scrollLeft=d.current.scrollLeft-C},b=x=>{var C;d.current.active=!1,(C=c.current)==null||C.releasePointerCapture(x.pointerId)},T=!a&&e<s.length?s[e]:null;return D.jsxs("div",{ref:c,className:"panorama-viewport panorama-viewport--flat",onPointerDown:_,onPointerMove:y,onPointerUp:b,onPointerCancel:b,"aria-label":"חדר בית המדרש — גררו לצדדים (מצב גיבוי)",children:[D.jsx(Zm,{show:m}),D.jsxs("div",{className:"panorama-inner",children:[D.jsxs("div",{className:`panorama-bg ${f?"panorama-bg--fallback":""}`,children:[!f&&D.jsx("img",{src:gm,alt:"",className:"panorama-img",onError:()=>p(!0),draggable:!1}),f&&D.jsx("div",{className:"panorama-fallback-art","aria-hidden":"true"})]}),!a&&e<s.length&&D.jsx("div",{className:"panorama-scene-dim","aria-hidden":"true"}),T&&(()=>{const x=T.hotspot.flatX??(T.hotspot.yaw+180)/360*100,C=T.hotspot.flatY??50-T.hotspot.pitch/90*50;return D.jsx("div",{className:"hotspot hotspot--active",style:{left:`${x}%`,top:`${C}%`},children:D.jsx($m,{riddle:T,onDiscover:()=>i(e),showIntroGlow:m})},T.id)})(),a&&D.jsxs("button",{type:"button",className:"inner-door-open",style:{left:"50%",top:"85%"},onClick:l,disabled:!l,"aria-label":"כניסה לחדר הפנימי",children:[D.jsx("span",{className:"inner-door-glow","aria-hidden":"true"}),D.jsx("span",{className:"inner-door-label",children:"לחדר הפנימי"})]})]})]})}function Cx(s){const[e,n]=ge.useState(!1);return D.jsxs("div",{className:"panorama-shell",children:[e?D.jsx(bx,{...s}):D.jsx(Rx,{...s,onWebGLFail:()=>n(!0)}),D.jsx("p",{className:"pan-hint",children:e?"גררו ימינה ושמאלה (מצב גיבוי — ללא WebGL)":"גררו בכל הכיוונים כדי להסתכל סביב החדר"})]})}function Lx({riddle:s,onCorrect:e,onClose:n}){const[i,a]=ge.useState(!1),[l,c]=ge.useState(!1),f=ge.useMemo(()=>Gv([...s.options]),[s.id]);ge.useEffect(()=>{a(!1),c(!1)},[s.id]);const p=d=>{d===s.answer?e():(c(!0),setTimeout(()=>c(!1),1400))};return D.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:n,children:D.jsxs("div",{className:"riddle-modal",role:"dialog","aria-modal":"true","aria-labelledby":"riddle-title",onClick:d=>d.stopPropagation(),children:[D.jsx("button",{type:"button",className:"modal-close",onClick:n,"aria-label":"סגירה",children:"×"}),D.jsx("p",{className:"riddle-object",children:s.object}),D.jsx("h2",{id:"riddle-title",className:"riddle-aramaic phrase-font",children:s.aramaicDisplay??s.aramaic}),D.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>a(d=>!d),"aria-expanded":i,children:i?"הסתר תרגום לעברית":"הצג תרגום לעברית"}),i&&D.jsx("p",{className:"riddle-hebrew",children:s.hebrewDisplay??s.hebrew}),D.jsx("div",{className:"riddle-options",role:"group","aria-label":"בחרו תשובה",children:f.map(d=>D.jsx("button",{type:"button",className:"riddle-option phrase-font",onClick:()=>p(d),children:fm(s,d)},d))}),l&&D.jsx("p",{className:"riddle-wrong",role:"alert",children:"נסו שוב — התשובה לא נכונה"})]})})}const Px=[{letter:"א",value:1},{letter:"ב",value:2},{letter:"ג",value:3},{letter:"ד",value:4},{letter:"ה",value:5},{letter:"ו",value:6},{letter:"ז",value:7},{letter:"ח",value:8},{letter:"ט",value:9},{letter:"י",value:10},{letter:"כ",value:20},{letter:"ך",value:20,note:"סופית"},{letter:"ל",value:30},{letter:"מ",value:40},{letter:"ם",value:40,note:"סופית"},{letter:"נ",value:50},{letter:"ן",value:50,note:"סופית"},{letter:"ס",value:60},{letter:"ע",value:70},{letter:"פ",value:80},{letter:"ף",value:80,note:"סופית"},{letter:"צ",value:90},{letter:"ץ",value:90,note:"סופית"},{letter:"ק",value:100},{letter:"ר",value:200},{letter:"ש",value:300},{letter:"ת",value:400}];function Nx({letters:s,total:e,dialDigit:n,onComplete:i,dismissOnly:a=!1}){const[l,c]=ge.useState("letters"),[f,p]=ge.useState(0);return ge.useEffect(()=>{c("letters"),p(0);let d=0;const m=window.setInterval(()=>{d+=1,p(d),d>=s.length&&(window.clearInterval(m),window.setTimeout(()=>c("sum"),500))},450);return()=>window.clearInterval(m)},[s]),ge.useEffect(()=>{if(l==="sum"){const d=window.setTimeout(()=>c("digit"),900);return()=>window.clearTimeout(d)}if(l==="digit"&&!a){const d=window.setTimeout(()=>{c("done"),i()},800);return()=>window.clearTimeout(d)}},[l,i,a]),D.jsx("div",{className:"gem-breakdown-overlay",role:"dialog","aria-label":"פירוק גימטריה",onClick:a?i:void 0,children:D.jsxs("div",{className:"gem-breakdown-card",onClick:a?d=>d.stopPropagation():void 0,children:[D.jsx("h3",{children:a?"רמז — פירוק גימטריה":"פירוק גימטריה"}),D.jsx("div",{className:"gem-letters",children:s.slice(0,f).map(([d,m],v)=>D.jsxs("div",{className:"gem-letter-row pop-in",children:[D.jsx("span",{className:"phrase-font gem-letter",children:d}),D.jsx("span",{className:"gem-eq",children:"="}),D.jsx("span",{className:"gem-value",children:m})]},`${d}-${v}`))}),(l==="sum"||l==="digit"||l==="done")&&D.jsxs("div",{className:"gem-sum pop-in",children:[D.jsx("span",{children:"סה״כ"}),D.jsx("strong",{children:e})]}),(l==="digit"||l==="done")&&D.jsxs("div",{className:"gem-digit pop-in",children:[D.jsx("span",{children:"ספרת המנעול"}),D.jsx("strong",{className:"gem-digit-num",children:n})]}),a&&(l==="digit"||l==="done")&&D.jsx("button",{type:"button",className:"btn-secondary gem-breakdown-close",onClick:i,children:"סגירה — חזרה לחישוב"})]})})}function Dx({riddle:s=null,lockIndex:e=null,lockWrongAttempts:n=0,preferOpen:i=!1}){const[a,l]=ge.useState(!1),[c,f]=ge.useState([]),[p,d]=ge.useState(!1),m=s?fm(s,s.answer):null,v=ge.useMemo(()=>c.reduce((x,C)=>x+C.value,0),[c]),_=c.length>0?Vv(v):null;ge.useEffect(()=>{i&&l(!0)},[i,s==null?void 0:s.id]),ge.useEffect(()=>{f([]),d(!1)},[s==null?void 0:s.id]);const y=ge.useCallback((x,C)=>{f(w=>[...w,{letter:x,value:C}])},[]),b=ge.useCallback(()=>{f(x=>x.slice(0,-1))},[]),T=ge.useCallback(()=>{f([])},[]);return D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:`gem-calc-drawer${a?" gem-calc-drawer--open":""}`,"data-open":a?"true":"false",children:[D.jsxs("aside",{id:"gematria-calculator",className:"gem-calc-panel",role:"dialog","aria-label":"מחשבון גימטריה","aria-hidden":!a,children:[D.jsxs("header",{className:"gem-calc-header",children:[D.jsxs("div",{className:"gem-calc-header-row",children:[D.jsx("h3",{className:"gem-calc-title",children:"מחשבון גימטריה"}),D.jsx("button",{type:"button",className:"gem-calc-close",onClick:()=>l(!1),"aria-label":"סגור מחשבון",children:"✕"})]}),m&&D.jsx("p",{className:"gem-calc-word phrase-font","aria-label":"מילת התשובה",children:m})]}),D.jsxs("div",{className:"gem-calc-display","aria-live":"polite","aria-label":"תצוגת חישוב",children:[D.jsx("div",{className:"gem-calc-tape",dir:"rtl",children:c.length===0?D.jsx("span",{className:"gem-calc-tape-empty",children:"לחצו אותיות…"}):c.map((x,C)=>D.jsxs("span",{className:"gem-calc-tape-item",children:[C>0&&D.jsx("span",{className:"gem-calc-tape-plus",children:"+"}),D.jsx("span",{className:"gem-calc-tape-letter phrase-font",children:x.letter}),D.jsxs("span",{className:"gem-calc-tape-val",children:["(",x.value,")"]})]},`${x.letter}-${C}`))}),D.jsxs("div",{className:"gem-calc-total-row",children:[D.jsx("span",{className:"gem-calc-total-label",children:"סה״כ"}),D.jsx("span",{className:"gem-calc-total-value",children:c.length>0?v:"—"})]}),_!==null&&D.jsxs("p",{className:"gem-calc-last-digit",children:["ספרה אחרונה: ",D.jsx("strong",{children:_})]})]}),D.jsxs("div",{className:"gem-calc-toolbar",children:[D.jsx("button",{type:"button",className:"gem-calc-action-btn",onClick:b,"aria-label":"מחק אות אחרונה",children:"⌫"}),D.jsx("button",{type:"button",className:"gem-calc-action-btn gem-calc-action-btn--clear",onClick:T,children:"נקה"})]}),D.jsx("div",{className:"gem-calc-keypad",role:"group","aria-label":"אותיות גימטריה",children:Px.map(({letter:x,value:C,note:w})=>D.jsxs("button",{type:"button",className:"gem-calc-key",onClick:()=>y(x,C),"aria-label":`${x} — ${C}${w?` (${w})`:""}`,children:[D.jsx("span",{className:"gem-calc-key-letter phrase-font",children:x}),D.jsx("span",{className:"gem-calc-key-val",children:C})]},x))}),e!==null&&D.jsxs("p",{className:"gem-calc-lock-hint",children:["הזינו את הספרה במנעול (גלגל ",e+1,")"]}),s&&n>=2&&!p&&D.jsx("button",{type:"button",className:"btn-secondary gem-calc-hint-btn",onClick:()=>d(!0),children:"רמז: פירוק גימטריה"})]}),D.jsx("button",{type:"button",className:"gem-calc-tab",onClick:()=>l(x=>!x),"aria-expanded":a,"aria-controls":"gematria-calculator",children:D.jsx("span",{className:"gem-calc-tab-label",children:"גימטריה"})})]}),p&&s&&D.jsx(Nx,{letters:s.letters,total:s.total,dialDigit:s.dialDigit,onComplete:()=>d(!1),dismissOnly:!0})]})}function um(s){return-90+s*36}function cm(s,e){const n=e*Math.PI/180;return{x:Math.cos(n)*s,y:Math.sin(n)*s}}function dm(s,e,n){const i=n.left+n.width/2,a=n.top+n.height/2;return Math.atan2(e-a,s-i)*180/Math.PI}function Ux(s){let e=s;for(;e>180;)e-=360;for(;e<-180;)e+=360;return e}function Ix({digits:s,rollingIndex:e,rollingDigit:n,unlocked:i,interactiveIndex:a=null,onDigitPick:l,wrongFlash:c=!1}){const f=ge.useId().replace(/:/g,""),[p,d]=ge.useState(!1),[m,v]=ge.useState(!1),[_,y]=ge.useState(0),[b,T]=ge.useState(0),[x,C]=ge.useState(!1),w=ge.useRef(0),S=ge.useRef(0),G=ge.useRef(null),z=ge.useRef(null),O=a!==null&&!!l,P=O||e!==null,$=ge.useCallback((U,R=0)=>{const V=w.current;let M=U-V;M>5&&(M-=10),M<-5&&(M+=10),M+=R*10,w.current=U,y(U),T(A=>{const B=A-M*36;return S.current=B,B})},[]),q=ge.useCallback(U=>{S.current=U,T(U);const R=(Math.round(-U/36)%10+10)%10;w.current=R,y(R)},[]),Q=ge.useCallback(U=>{$((w.current+U+10)%10)},[$]);ge.useEffect(()=>{if(i){v(!0);const U=window.setTimeout(()=>v(!1),1200);return()=>window.clearTimeout(U)}},[i]),ge.useEffect(()=>{e!==null&&n!==null&&$(n,n%2===0?1:-1)},[e,n,$]),ge.useEffect(()=>{if(!O)return;const U=R=>{R.key==="ArrowLeft"||R.key==="ArrowUp"?(R.preventDefault(),Q(-1)):R.key==="ArrowRight"||R.key==="ArrowDown"?(R.preventDefault(),Q(1)):R.key==="Enter"&&(R.preventDefault(),l==null||l(w.current))};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[O,l,Q]),ge.useEffect(()=>{if(!x)return;const U=V=>{const M=z.current,A=G.current;if(!(M!=null&&M.active)||!A)return;const B=dm(V.clientX,V.clientY,A.getBoundingClientRect()),Z=Ux(B-M.lastAngle);Math.abs(Z)>.4&&(M.moved=!0),M.lastAngle=B,q(S.current+Z)},R=()=>{const V=z.current;if(z.current=null,C(!1),!V)return;const M=(Math.round(-S.current/36)%10+10)%10;$(M)};return window.addEventListener("pointermove",U),window.addEventListener("pointerup",R),window.addEventListener("pointercancel",R),()=>{window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",R),window.removeEventListener("pointercancel",R)}},[x,q,$]);const ce=U=>{if(!O||U.target.closest(".round-dial-confirm"))return;U.preventDefault(),U.stopPropagation();const R=G.current;if(!R)return;const V=dm(U.clientX,U.clientY,R.getBoundingClientRect());z.current={active:!0,lastAngle:V,moved:!1},C(!0);try{R.setPointerCapture(U.pointerId)}catch{}},F=()=>{O&&(l==null||l(w.current))},se=["combination-lock",i?"combination-lock--open":"",m?"combination-lock--flash":"",c?"combination-lock--wrong":"",O?"combination-lock--awaiting":""].filter(Boolean).join(" "),ae=`brass-${f}`,me=`hasp-${f}`,Te=`dark-${f}`,re=`grain-${f}`,X=s.filter(U=>U!==null).length,K=55.65;return D.jsxs("div",{className:`lock-drawer${p?" lock-drawer--open":""}`,"data-open":p?"true":"false",children:[D.jsx("button",{type:"button",className:"lock-drawer-tab",onClick:()=>d(U=>!U),"aria-expanded":p,"aria-controls":"combination-lock-panel",children:D.jsx("span",{className:"lock-drawer-tab-label",children:"מנעול"})}),D.jsxs("aside",{id:"combination-lock-panel",className:`lock-drawer-panel ${se}`,role:"dialog","aria-label":"מנעול קומבינציה עגול","aria-hidden":!p,children:[D.jsxs("header",{className:"lock-drawer-header",children:[D.jsx("h3",{className:"lock-drawer-title",children:"מנעול נחושת"}),D.jsx("button",{type:"button",className:"lock-drawer-close",onClick:()=>d(!1),"aria-label":"סגור מנעול",children:"✕"})]}),D.jsxs("div",{className:"lock-body",children:[D.jsxs("div",{className:"round-lock","aria-label":"מנעול קומבינציה — עשר ספרות",children:[D.jsxs("svg",{className:"round-lock-svg",viewBox:"0 0 220 248","aria-hidden":"true",children:[D.jsxs("defs",{children:[D.jsxs("linearGradient",{id:ae,x1:"20%",y1:"0%",x2:"80%",y2:"100%",children:[D.jsx("stop",{offset:"0%",stopColor:"#f0dfa0"}),D.jsx("stop",{offset:"22%",stopColor:"#d4af37"}),D.jsx("stop",{offset:"48%",stopColor:"#b07a2e"}),D.jsx("stop",{offset:"75%",stopColor:"#6e451c"}),D.jsx("stop",{offset:"100%",stopColor:"#3a2412"})]}),D.jsxs("linearGradient",{id:Te,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[D.jsx("stop",{offset:"0%",stopColor:"#2a1810"}),D.jsx("stop",{offset:"100%",stopColor:"#0c0805"})]}),D.jsxs("linearGradient",{id:me,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[D.jsx("stop",{offset:"0%",stopColor:"#dcc896"}),D.jsx("stop",{offset:"45%",stopColor:"#8a7350"}),D.jsx("stop",{offset:"100%",stopColor:"#3e2a16"})]}),D.jsxs("filter",{id:re,x:"-8%",y:"-8%",width:"116%",height:"116%",children:[D.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.7",numOctaves:"2",result:"n"}),D.jsx("feColorMatrix",{in:"n",type:"saturate",values:"0",result:"g"}),D.jsx("feComponentTransfer",{in:"g",result:"soft",children:D.jsx("feFuncA",{type:"linear",slope:"0.35"})}),D.jsx("feBlend",{in:"SourceGraphic",in2:"soft",mode:"overlay"})]})]}),D.jsx("path",{d:"M78 78 V48 C78 28 96 16 110 16 C124 16 142 28 142 48 V78",fill:"none",stroke:`url(#${me})`,strokeWidth:"14",strokeLinecap:"round",filter:`url(#${re})`}),D.jsx("path",{d:"M78 78 V48 C78 28 96 16 110 16 C124 16 142 28 142 48 V78",fill:"none",stroke:"#2a1810",strokeWidth:"3",strokeLinecap:"round",opacity:"0.4"}),D.jsxs("g",{transform:"translate(0, 28)",children:[D.jsx("circle",{cx:"110",cy:"110",r:"106",fill:`url(#${ae})`,filter:`url(#${re})`}),D.jsx("circle",{cx:"110",cy:"110",r:"102",fill:"none",stroke:"#f0dfa0",strokeWidth:"1.4",opacity:"0.55"}),D.jsx("circle",{cx:"110",cy:"110",r:"96",fill:"none",stroke:"#3e2718",strokeWidth:"1.2",opacity:"0.7"}),D.jsx("circle",{cx:"110",cy:"110",r:"70",fill:`url(#${Te})`}),D.jsx("circle",{cx:"110",cy:"110",r:"68",fill:"none",stroke:"#6b4a22",strokeWidth:"1.2",opacity:"0.8"}),Array.from({length:40},(U,R)=>{const V=(R*9-90)*Math.PI/180,M=R%4===0?86:90;return D.jsx("line",{x1:110+Math.cos(V)*M,y1:110+Math.sin(V)*M,x2:110+Math.cos(V)*94,y2:110+Math.sin(V)*94,stroke:"#3e2718",strokeWidth:R%4===0?1.6:.8,opacity:"0.55"},R)}),[45,135,225,315].map(U=>{const R=U*Math.PI/180,V=110+Math.cos(R)*100,M=110+Math.sin(R)*100;return D.jsxs("g",{children:[D.jsx("circle",{cx:V,cy:M,r:"3.2",fill:"#2a1810",opacity:"0.7"}),D.jsx("circle",{cx:V,cy:M,r:"2",fill:"#b8924a"})]},U)})]})]}),D.jsx("div",{className:"round-lock-slots",style:{top:`${K}%`},children:s.map((U,R)=>{const V=cm(40,um(R)),M=e===R&&n!==null,A=a===R&&!!l,B=M?n:U;return D.jsxs("button",{type:"button",className:["round-slot",U!==null?"round-slot--set":"",A?"round-slot--interactive":"",M?"round-slot--rolling":""].filter(Boolean).join(" "),style:{left:`${50+V.x}%`,top:`${50+V.y}%`},disabled:!A,onClick:()=>{A&&F()},"aria-label":A?`גלגל ${R+1} — פעיל`:U!==null?`גלגל ${R+1}: ${U}`:`גלגל ${R+1}: ריק`,children:[D.jsx("span",{className:"round-slot-index",children:R+1}),D.jsx("span",{className:"round-slot-digit",children:B===null?"·":B})]},R)})}),D.jsxs("div",{ref:G,className:`round-dial-wrap${O?" round-dial-wrap--interactive":""}${x?" round-dial-wrap--dragging":""}`,style:{top:`${K}%`},onPointerDown:ce,children:[D.jsx("div",{className:"round-dial-marker","aria-hidden":"true"}),D.jsx("div",{className:`round-dial${O?" round-dial--live":""}${e!==null||x?" round-dial--spinning":""}`,style:{transform:`rotate(${b}deg)`,transition:x?"none":void 0},"aria-hidden":!P,children:D.jsx("div",{className:"round-dial-face",children:Array.from({length:10},(U,R)=>{const V=cm(38,um(R));return D.jsx("span",{className:`round-dial-tick${_===R?" round-dial-tick--active":""}`,style:{left:`${50+V.x}%`,top:`${50+V.y}%`,transform:`translate(-50%, -50%) rotate(${-b}deg)`},"aria-hidden":"true",children:R},R)})})}),D.jsxs("div",{className:"round-dial-hub",children:[D.jsx("span",{className:"round-dial-value","aria-live":"polite",children:_}),O&&D.jsx("button",{type:"button",className:"round-dial-confirm",onPointerDown:U=>{U.stopPropagation(),U.preventDefault()},onClick:U=>{U.stopPropagation(),F()},children:"הזן"})]})]})]}),O&&D.jsxs("div",{className:"round-dial-controls",children:[D.jsx("button",{type:"button",className:"round-nudge",onClick:()=>Q(-1),"aria-label":"סובבו אחורה",children:"−"}),D.jsxs("p",{className:"round-dial-hint","aria-hidden":"true",children:["סובבו · ",_]}),D.jsx("button",{type:"button",className:"round-nudge",onClick:()=>Q(1),"aria-label":"סובבו קדימה",children:"+"})]})]}),D.jsxs("p",{className:"lock-progress","aria-hidden":"true",children:[X,"/10"]}),O&&D.jsxs("p",{className:"lock-manual-prompt",role:"status",children:["גלגל ",a+1," — סובבו את החוגה ואז לחצו הזן"]}),c&&D.jsx("p",{className:"lock-wrong-msg",role:"alert",children:"לא נכון — בדקו במחשבון והזינו שוב"}),i&&D.jsx("p",{className:"lock-open-msg",role:"status",children:"המנעול נפתח!"})]})]})}function Qm(s){return s.replace(/[\u0591-\u05C7]/g,"")}function Ox(s){return s.replace(/ך/g,"כ").replace(/ם/g,"מ").replace(/ן/g,"נ").replace(/ף/g,"פ").replace(/ץ/g,"צ")}function vd(s){const e=Qm(s).replace(/[\u200f\u200e\u200d]/g,"").replace(/['׳״"`]/g,"").trim();return Ox(e)}function Fx(s){return Qm(s).split(/[^\u0590-\u05FFa-zA-Z]+/u).map(i=>i.trim()).filter(Boolean)}const Hs=10,kx=["שלמא","דיו","נוצה","קלף","מגילתא","פתורא","ביתא","יומא","נהורא","אורייתא","חכימא","שמע","גמר","כתב","קרי","עייל","נפק","טבא","רבא","מאן","מאי","ליכא","אית","הכא","תמן","ברא","אבוה","אימא","מלכא","ארעא","שמיא","נורא","נהרא","טורא","שוקא","עמודא","ערסא","חמרא","נהמא","כלבא","גברא","פתגמא","מילתא","קולמוס","ספסלא","תרעא","שרגא","מיא","ספרא","רבי","תלמידא","ארון","חלון"];function zx(){const s=[];for(const e of ji)s.push(e.answer,e.object,...e.options);return s}function Bx(){const s=new Set;for(const e of[...zx(),...kx]){const n=vd(e);n.length>=2&&s.add(n)}return s}const Hx=Bx(),Gx=["שרגא","מיא","ספרא","רבי","תלמידא","תרעא","קולמוס","ספסלא","שלמא","חלון","ארון","פתורא","דיו","נוצה","ביתא","יומא"],Vx=[...Gx,"קלף","מגילתא","נהורא","טבא","אורייתא","תלמידא","גמר","כתב","שמיא","ארעא","מילתא","פתגמא"].filter((s,e,n)=>n.indexOf(s)===e);function Wx(s){const n=Fx(s).map(vd).filter(c=>c.length>=2),i=[],a=new Set;for(const c of n)Hx.has(c)&&(i.push(c),a.add(c));const l=i.length;return{matchedCount:l,uniqueMatched:[...a],tokens:n,goal:Hs,complete:l>=Hs}}const Gs=.1;function jx(){return new URLSearchParams(window.location.search).get("debug")==="1"}function hm(s,e,n,i){const[a,l,c]=Vs(n,i);s.position.set(-a*Gs,-l*Gs,-c*Gs),e.target.set(0,0,0),e.update()}function Xx({onScrollClick:s,writingOpen:e,debug:n}){const i=ge.useRef(null),[a,l]=ge.useState(!1),c=ge.useRef({active:!1,startX:0,scrollLeft:0,moved:!1}),f=v=>{if(v.target.closest(".inner-scroll-hotspot"))return;const _=i.current;_&&(c.current={active:!0,startX:v.clientX,scrollLeft:_.scrollLeft,moved:!1},_.setPointerCapture(v.pointerId))},p=v=>{if(!c.current.active||!i.current)return;const _=v.clientX-c.current.startX;Math.abs(_)>6&&(c.current.moved=!0),i.current.scrollLeft=c.current.scrollLeft-_},d=v=>{var _;c.current.active=!1,(_=i.current)==null||_.releasePointerCapture(v.pointerId)},m=pr.radiusPx*2;return D.jsx("div",{ref:i,className:"panorama-viewport panorama-viewport--flat",onPointerDown:f,onPointerMove:p,onPointerUp:d,onPointerCancel:d,"aria-label":"החדר הפנימי — גררו לצדדים (מצב גיבוי)",children:D.jsxs("div",{className:"panorama-inner",children:[D.jsxs("div",{className:`panorama-bg ${a?"panorama-bg--fallback":""}`,children:[!a&&D.jsx("img",{src:vm,alt:"",className:"panorama-img",onError:()=>l(!0),draggable:!1}),a&&D.jsx("div",{className:"panorama-fallback-art","aria-hidden":"true"})]}),!e&&D.jsxs("button",{type:"button",className:["inner-scroll-hotspot","inner-scroll-hotspot--flat",n?"inner-scroll-hotspot--debug":""].filter(Boolean).join(" "),style:{left:`${pr.flatX}%`,top:`${pr.flatY}%`,width:m,height:m},onPointerDown:v=>v.stopPropagation(),onClick:v=>{v.stopPropagation(),s()},"aria-label":"פתחו את הקלף לכתיבת מכתב",children:[D.jsx("span",{className:"inner-scroll-hotspot__glow","aria-hidden":"true"}),D.jsx("span",{className:"inner-scroll-hotspot__label",children:"הקלף · לחצו לכתיבה"})]})]})})}function Yx({onScrollClick:s,writingOpen:e,onWebGLFail:n,debug:i}){const a=ge.useRef(null),l=ge.useRef(null),c=ge.useRef(null),f=ge.useRef(null),p=ge.useRef(null),d=ge.useRef(s),m=ge.useRef(e),[v,_]=ge.useState(!1),[y,b]=ge.useState(!1);d.current=s,m.current=e,ge.useEffect(()=>{const x=a.current,C=l.current;if(!x||!C)return;let w;try{w=new md({canvas:C,antialias:!0,alpha:!1})}catch{n();return}const S=new Xm,G=new Dn(75,1,.1,1100);f.current=G;const z=new Km(G,C);p.current=z,z.enableZoom=!1,z.enablePan=!1,z.enableDamping=!0,z.dampingFactor=.08,z.rotateSpeed=-.35,z.minDistance=Gs,z.maxDistance=Gs,z.target.set(0,0,0),hm(G,z,pr.yaw,pr.pitch);const O=new Dl(500,64,48);O.scale(-1,1,1);let P=null,$=!1;new Ym().load(vm,M=>{if($){M.dispose();return}M.colorSpace=zt,P=new jn(O,new Pl({map:M})),S.add(P),hm(G,z,pr.yaw,pr.pitch),_(!0)},void 0,()=>{$||n()});const Q=()=>{const M=x.clientWidth,A=x.clientHeight;M<2||A<2||(G.aspect=M/A,G.updateProjectionMatrix(),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(M,A,!1))},ce=new ResizeObserver(Q);ce.observe(x),Q();const F=new j,[se,ae,me]=Vs(pr.yaw,pr.pitch),Te=()=>{const M=x.clientWidth,A=x.clientHeight;if(M<2||A<2)return;const B=c.current;if(!B)return;F.set(se,ae,me).project(G);const Z=F.z<1&&F.z>-1;B.style.left=`${(F.x*.5+.5)*M}px`,B.style.top=`${(-F.y*.5+.5)*A}px`,B.style.visibility=Z&&!m.current?"visible":"hidden",B.style.pointerEvents=Z&&!m.current?"auto":"none"},re={x:0,y:0,down:!1,moved:!1},X=M=>{m.current||(re.down=!0,re.moved=!1,re.x=M.clientX,re.y=M.clientY)},K=M=>{re.down&&Math.hypot(M.clientX-re.x,M.clientY-re.y)>10&&(re.moved=!0)},U=M=>{if(!re.down||(re.down=!1,re.moved||m.current))return;const A=c.current;if(!A||A.style.visibility==="hidden")return;const B=A.getBoundingClientRect(),Z=B.left+B.width/2,k=B.top+B.height/2,ee=Math.max(B.width,B.height)*.58;Math.hypot(M.clientX-Z,M.clientY-k)<=ee&&d.current()};C.addEventListener("pointerdown",X),C.addEventListener("pointermove",K),C.addEventListener("pointerup",U),C.addEventListener("pointercancel",U);let R=0;const V=()=>{R=requestAnimationFrame(V),z.update(),w.render(S,G),Te()};return V(),()=>{var M;if($=!0,cancelAnimationFrame(R),ce.disconnect(),C.removeEventListener("pointerdown",X),C.removeEventListener("pointermove",K),C.removeEventListener("pointerup",U),C.removeEventListener("pointercancel",U),z.dispose(),O.dispose(),P){const A=P.material;(M=A.map)==null||M.dispose(),A.dispose()}w.dispose(),f.current=null,p.current=null}},[n]),ge.useEffect(()=>{const x=p.current;x&&(x.enableRotate=!e&&!y)},[e,y]);const T=pr.radiusPx*2;return D.jsxs("div",{ref:a,className:"panorama-viewport panorama-viewport--360",children:[D.jsx("canvas",{ref:l,className:"panorama-canvas","aria-hidden":"true"}),!v&&D.jsx("div",{className:"panorama-loading",children:"טוען פנורמה…"}),D.jsx("div",{className:`panorama-hotspots-layer panorama-hotspots-layer--inner${y?" panorama-hotspots-layer--hover":""}`,children:D.jsxs("button",{type:"button",ref:c,className:["inner-scroll-hotspot",i?"inner-scroll-hotspot--debug":""].filter(Boolean).join(" "),style:{width:T,height:T},onPointerDown:x=>{x.stopPropagation(),b(!0)},onClick:x=>{x.stopPropagation(),s()},onPointerEnter:()=>b(!0),onPointerLeave:()=>b(!1),"aria-label":"פתחו את הקלף לכתיבת מכתב",children:[D.jsx("span",{className:"inner-scroll-hotspot__glow","aria-hidden":"true"}),D.jsx("span",{className:"inner-scroll-hotspot__label",children:"הקלף · לחצו לכתיבה"})]})})]})}function qx({onScrollClick:s,writingOpen:e}){const[n,i]=ge.useState(!1),a=ge.useCallback(()=>i(!0),[]),l=jx();return D.jsxs("div",{className:`panorama-shell inner-room__panorama-shell${e?" inner-room__panorama-shell--writing":""}`,children:[n?D.jsx(Xx,{onScrollClick:s,writingOpen:e,debug:l}):D.jsx(Yx,{onScrollClick:s,writingOpen:e,onWebGLFail:a,debug:l}),!e&&D.jsx("p",{className:"pan-hint",children:n?"גררו ימינה ושמאלה · לחצו על הקלף לכתיבה":"גררו כדי להסתכל סביב · לחצו על הקלף שעל השולחן"})]})}const Kx=["שלמא עליכון תלמידיא חכימיא","מן בית מדרשא דאורייתא כתיבנא","בקלף דיו ונוצה — פתגמא טבא","שמעו וגמרו · כתבו וקראו","נהורא רבא בחדרא זוטא","ונפקנא משלמא · אמן"];function $x({onComplete:s}){const[e,n]=ge.useState(""),[i,a]=ge.useState(!1),[l,c]=ge.useState(!1),[f,p]=ge.useState(!1),[d,m]=ge.useState(!1),v=ge.useRef(null),_=ge.useRef(!1),y=ge.useMemo(()=>Wx(e),[e]),b=Math.min(y.matchedCount,Hs),T=ge.useMemo(()=>new Set(y.uniqueMatched),[y.uniqueMatched]);ge.useEffect(()=>{const w=window.setTimeout(()=>c(!0),40);return()=>window.clearTimeout(w)},[]),ge.useEffect(()=>{if(!f){m(!1);return}const w=window.requestAnimationFrame(()=>m(!0)),S=window.setTimeout(()=>{var z;return(z=v.current)==null?void 0:z.focus()},420),G=z=>{z.key==="Escape"&&!i&&p(!1)};return window.addEventListener("keydown",G),()=>{window.cancelAnimationFrame(w),window.clearTimeout(S),window.removeEventListener("keydown",G)}},[f,i]),ge.useEffect(()=>{if(!y.complete||_.current)return;_.current=!0,a(!0),p(!0);const w=window.setTimeout(()=>s(),3200);return()=>window.clearTimeout(w)},[y.complete,s]);const x=ge.useCallback(w=>{if(i)return;const S=v.current,G=(S==null?void 0:S.selectionStart)??e.length,z=(S==null?void 0:S.selectionEnd)??e.length,O=e.slice(0,G),P=e.slice(z),$=O.length>0&&!/\s$/.test(O),q=P.length>0&&!/^\s/.test(P),Q=`${$?" ":""}${w}${q?" ":""}`,ce=O+Q+P;n(ce),window.requestAnimationFrame(()=>{const F=v.current;if(!F)return;const se=O.length+Q.length-(q?1:0);F.focus(),F.setSelectionRange(se,se)})},[i,e]),C=()=>{i||p(!1)};return D.jsxs("div",{className:["inner-room","inner-room--360",l?"inner-room--entered":"",f?"inner-room--writing":""].filter(Boolean).join(" "),children:[D.jsxs("header",{className:"inner-room__header",children:[D.jsx("p",{className:"inner-room__eyebrow",children:"החדר הפנימי"}),D.jsx("h1",{children:"חדר הלימוד הקטן"}),D.jsx("p",{className:"inner-room__lead",children:f?i?"הקלף מתמלא בכתב — המכתב נחתם":"כתבו מכתב בארמית — לחצו על מילה מאוצר המילים כדי להוסיף אותה לקלף":"הסתכלו סביב החדר · לחצו על הקלף הפתוח על השולחן כדי לכתוב מכתב בארמית"})]}),D.jsx(qx,{writingOpen:f,onScrollClick:()=>p(!0)}),f&&D.jsxs("div",{className:`inner-room__write-stage${d?" inner-room__write-stage--ready":""}`,role:"dialog","aria-modal":"true","aria-labelledby":"inner-letter-title",children:[D.jsx("button",{type:"button",className:"inner-room__write-dim","aria-label":"הניחו את הקלף וחזרו לחדר",onClick:C,disabled:i}),D.jsxs("div",{className:"inner-room__write-layout",children:[D.jsxs("div",{className:"inner-room__sheet",children:[D.jsxs("div",{className:"inner-room__sheet-top",children:[D.jsx("h2",{id:"inner-letter-title",children:"הקלף"}),!i&&D.jsx("button",{type:"button",className:"btn-secondary inner-room__letter-close",onClick:C,children:"הניחו את הקלף"})]}),D.jsx("p",{className:"inner-room__sheet-lead",children:i?"המכתב נחתם בדיו על הקלף":"השתמשו במילים מאוצר המילים — כעשר מילים, והמכתב יישלח!"}),D.jsxs("div",{className:"inner-room__sheet-body",children:[D.jsx("label",{className:"visually-hidden",htmlFor:"inner-letter",children:"כתיבת מכתב על הקלף"}),D.jsxs("div",{className:"inner-room__parchment-wrap",children:[D.jsx("textarea",{id:"inner-letter",ref:v,className:`inner-room__parchment phrase-font${i?" inner-room__parchment--sealed":""}`,dir:"rtl",lang:"he",rows:7,value:e,onChange:w=>n(w.target.value),placeholder:"כתבו כאן מכתב בארמית…",spellCheck:!1,autoComplete:"off",disabled:i,"aria-hidden":i}),i&&D.jsx("div",{className:"inner-room__script-fill","aria-hidden":"true",children:Kx.map((w,S)=>D.jsx("p",{className:`inner-room__script-line${S>=4?" inner-room__script-line--dim":""}`,style:{animationDelay:`${.12+S*.18}s`},children:w},w))})]}),D.jsxs("div",{className:"inner-room__inkwell","aria-hidden":"true",children:[D.jsx("span",{className:"inner-room__ink-pot"}),D.jsx("span",{className:"inner-room__quill"}),D.jsx("span",{className:"inner-room__ink-label",children:"דיו ונוצה"})]})]}),D.jsx("div",{className:"inner-room__hud",role:"status","aria-live":"polite",children:D.jsxs("div",{className:"inner-room__progress",children:[D.jsx("div",{className:"inner-room__progress-bar","aria-hidden":"true",children:D.jsx("span",{style:{width:`${b/Hs*100}%`}})}),D.jsx("p",{className:"inner-room__progress-text",children:i?"הקלף מלא!":`${b}/${Hs} מילים מהאוצר`})]})})]}),!i&&D.jsxs("aside",{className:"inner-room__vocab","aria-label":"אוצר מילים",children:[D.jsx("h3",{className:"inner-room__vocab-title",children:"אוצר מילים"}),D.jsx("p",{className:"inner-room__vocab-lead",children:"לחצו על מילה כדי להוסיף אותה למכתב"}),D.jsx("div",{className:"inner-room__vocab-chips",children:Vx.map(w=>{const S=T.has(vd(w));return D.jsx("button",{type:"button",className:`inner-room__vocab-chip phrase-font${S?" inner-room__vocab-chip--used":""}`,onClick:()=>x(w),children:w},w)})})]})]})]}),i&&D.jsx("div",{className:"inner-room__celebrate pop-in",role:"status",children:D.jsxs("div",{className:"inner-room__celebrate-card",children:[D.jsx("p",{children:"המכתב נשלח מבית המדרש!"}),D.jsx("p",{className:"inner-room__celebrate-sub",children:"שלמא — יצאתם מהחדר"})]})})]})}function Zx({onRestart:s}){const e=Kv();return D.jsx("div",{className:"victory-screen",children:D.jsxs("div",{className:"victory-card",children:[D.jsx("div",{className:"victory-confetti","aria-hidden":"true",children:Array.from({length:24}).map((n,i)=>D.jsx("span",{style:{"--i":i}},i))}),D.jsx("h1",{children:"יצאתם מבית המדרש!"}),D.jsx("p",{className:"victory-sub",children:e?"המכתב נשלח · המדליה מחכה לכם במפת המסע":"המכתב נשלח · שלמא לכולכון"}),!e&&D.jsx("button",{type:"button",className:"btn-primary",onClick:s,children:"שחקו שוב"}),e&&D.jsx("p",{className:"victory-sub",style:{marginTop:12,fontSize:15},children:"אפשר לסגור ולחזור למפה…"})]})})}function Qx({objectName:s}){return s?D.jsxs("p",{className:"search-target-tip",role:"status",children:["חפשו עכשיו:"," ",D.jsx("span",{className:"search-target-tip__object",children:s})]}):null}function Jx({room:s,onOuter:e,onInner:n}){return D.jsxs("nav",{className:"room-travel","aria-label":"מעבר בין חדרים (בדיקות)",children:[D.jsx("span",{className:"room-travel__label",children:"מעבר לבדיקה"}),D.jsxs("div",{className:"room-travel__btns",children:[D.jsx("button",{type:"button",className:`room-travel__btn${s==="outer"?" room-travel__btn--active":""}`,onClick:e,"aria-current":s==="outer"?"page":void 0,children:"חדר חיצוני"}),D.jsx("button",{type:"button",className:`room-travel__btn${s==="inner"?" room-travel__btn--active":""}`,onClick:n,"aria-current":s==="inner"?"page":void 0,children:"חדר פנימי"})]})]})}function ey(){return ld()?"inner-room":"explore"}function ty({onRestart:s}){const[e,n]=ge.useState(jv),[i,a]=ge.useState(ey),[l,c]=ge.useState(null),[f,p]=ge.useState(null),[d,m]=ge.useState(0),[v,_]=ge.useState(!1),y=Xv(),b=ji[e.currentRiddleIndex],T=ge.useCallback(()=>{a("inner-room")},[]),x=ge.useCallback(()=>{a("explore")},[]),C=()=>{e.lockUnlocked||a("riddle")},w=()=>{m(0),_(!1),a("gematria")},S=ge.useCallback(()=>{const $=ji[e.currentRiddleIndex],q=e.currentRiddleIndex;c(q),p($.dialDigit),m(0),_(!1),window.setTimeout(()=>{n(Q=>{const ce=[...Q.dialDigits];ce[q]=$.dialDigit;const F=Q.solvedCount+1,se=F>=10;return{currentRiddleIndex:se?Q.currentRiddleIndex:Q.currentRiddleIndex+1,solvedCount:F,dialDigits:ce,lockUnlocked:se}}),c(null),p(null),q+1>=10?(a("lock-opening"),window.setTimeout(()=>a("inner-room"),1800)):a("explore")},800)},[e.currentRiddleIndex]),G=ge.useCallback($=>{const q=ji[e.currentRiddleIndex];return $===q.dialDigit?(S(),!0):(m(Q=>Q+1),_(!0),window.setTimeout(()=>_(!1),1600),!1)},[e.currentRiddleIndex,S]),z=ge.useCallback(()=>{$v(),a("victory")},[]);if(i==="victory")return D.jsx(Zx,{onRestart:s});const O=y?D.jsx(Jx,{room:i==="inner-room"?"inner":"outer",onOuter:x,onInner:T}):null;if(i==="inner-room")return D.jsxs("div",{className:"escape-room escape-room--inner",children:[O,D.jsx($x,{onComplete:z})]});const P=i==="gematria";return D.jsxs("div",{className:`escape-room${P?" escape-room--gematria":""}`,children:[O,D.jsxs("header",{className:"room-header",children:[D.jsx("h1",{children:"בית המדרש הפנימי"}),D.jsxs("p",{children:["חידה ",Math.min(e.currentRiddleIndex+1,10)," מתוך 10",e.solvedCount>0&&` · נפתרו ${e.solvedCount}`]})]}),D.jsx(Cx,{riddles:ji,activeIndex:e.currentRiddleIndex,solvedCount:e.solvedCount,onHotspotClick:()=>C(),lockUnlocked:e.lockUnlocked,onEnterInner:e.lockUnlocked?T:void 0}),D.jsx(Qx,{objectName:!e.lockUnlocked&&i==="explore"?Wv(e.currentRiddleIndex):null}),D.jsx(Ix,{digits:e.dialDigits,rollingIndex:l,rollingDigit:f,unlocked:e.lockUnlocked&&i==="lock-opening",interactiveIndex:P?e.currentRiddleIndex:null,onDigitPick:P?G:void 0,wrongFlash:v}),D.jsx(Dx,{riddle:P?b:null,lockIndex:P?e.currentRiddleIndex:null,lockWrongAttempts:P?d:0,preferOpen:P}),i==="riddle"&&b&&D.jsx(Lx,{riddle:b,onCorrect:w,onClose:()=>a("explore")})]})}function ny(){return ld()?"room":"landing"}function ry(){const[s,e]=ge.useState(ny),[n,i]=ge.useState(0);ge.useEffect(()=>{Zv()},[]);const a=()=>{i(l=>l+1),e(ld()?"room":"landing")};return s==="landing"?D.jsx(Bv,{onStart:()=>e("room")}):D.jsx(ty,{onRestart:a},n)}zv.createRoot(document.getElementById("root")).render(D.jsx(ge.StrictMode,{children:D.jsx(ry,{})}));
