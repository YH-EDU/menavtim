(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var xc={exports:{}},Us={},yc={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Wv(){if(Yf)return at;Yf=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function x(M,z,A){this.props=M,this.context=z,this.refs=R,this.updater=A||y}x.prototype.isReactComponent={},x.prototype.setState=function(M,z){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,z,"setState")},x.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function C(){}C.prototype=x.prototype;function w(M,z,A){this.props=M,this.context=z,this.refs=R,this.updater=A||y}var S=w.prototype=new C;S.constructor=w,b(S,x.prototype),S.isPureReactComponent=!0;var G=Array.isArray,I=Object.prototype.hasOwnProperty,O={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function re(M,z,A){var T,B={},q=null,k=null;if(z!=null)for(T in z.ref!==void 0&&(k=z.ref),z.key!==void 0&&(q=""+z.key),z)I.call(z,T)&&!N.hasOwnProperty(T)&&(B[T]=z[T]);var Z=arguments.length-2;if(Z===1)B.children=A;else if(1<Z){for(var ce=Array(Z),fe=0;fe<Z;fe++)ce[fe]=arguments[fe+2];B.children=ce}if(M&&M.defaultProps)for(T in Z=M.defaultProps,Z)B[T]===void 0&&(B[T]=Z[T]);return{$$typeof:a,type:M,key:q,ref:k,props:B,_owner:O.current}}function K(M,z){return{$$typeof:a,type:M.type,key:z,ref:M.ref,props:M.props,_owner:M._owner}}function Q(M){return typeof M=="object"&&M!==null&&M.$$typeof===a}function le(M){var z={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(A){return z[A]})}var F=/\/+/g;function ie(M,z){return typeof M=="object"&&M!==null&&M.key!=null?le(""+M.key):z.toString(36)}function te(M,z,A,T,B){var q=typeof M;(q==="undefined"||q==="boolean")&&(M=null);var k=!1;if(M===null)k=!0;else switch(q){case"string":case"number":k=!0;break;case"object":switch(M.$$typeof){case a:case e:k=!0}}if(k)return k=M,B=B(k),M=T===""?"."+ie(k,0):T,G(B)?(A="",M!=null&&(A=M.replace(F,"$&/")+"/"),te(B,z,A,"",function(fe){return fe})):B!=null&&(Q(B)&&(B=K(B,A+(!B.key||k&&k.key===B.key?"":(""+B.key).replace(F,"$&/")+"/")+M)),z.push(B)),1;if(k=0,T=T===""?".":T+":",G(M))for(var Z=0;Z<M.length;Z++){q=M[Z];var ce=T+ie(q,Z);k+=te(q,z,A,ce,B)}else if(ce=_(M),typeof ce=="function")for(M=ce.call(M),Z=0;!(q=M.next()).done;)q=q.value,ce=T+ie(q,Z++),k+=te(q,z,A,ce,B);else if(q==="object")throw z=String(M),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return k}function me(M,z,A){if(M==null)return M;var T=[],B=0;return te(M,T,"","",function(q){return z.call(A,q,B++)}),T}function Me(M){if(M._status===-1){var z=M._result;z=z(),z.then(function(A){(M._status===0||M._status===-1)&&(M._status=1,M._result=A)},function(A){(M._status===0||M._status===-1)&&(M._status=2,M._result=A)}),M._status===-1&&(M._status=0,M._result=z)}if(M._status===1)return M._result.default;throw M._result}var ae={current:null},H={transition:null},$={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function W(){throw Error("act(...) is not supported in production builds of React.")}return at.Children={map:me,forEach:function(M,z,A){me(M,function(){z.apply(this,arguments)},A)},count:function(M){var z=0;return me(M,function(){z++}),z},toArray:function(M){return me(M,function(z){return z})||[]},only:function(M){if(!Q(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},at.Component=x,at.Fragment=n,at.Profiler=s,at.PureComponent=w,at.StrictMode=i,at.Suspense=f,at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,at.act=W,at.cloneElement=function(M,z,A){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var T=b({},M.props),B=M.key,q=M.ref,k=M._owner;if(z!=null){if(z.ref!==void 0&&(q=z.ref,k=O.current),z.key!==void 0&&(B=""+z.key),M.type&&M.type.defaultProps)var Z=M.type.defaultProps;for(ce in z)I.call(z,ce)&&!N.hasOwnProperty(ce)&&(T[ce]=z[ce]===void 0&&Z!==void 0?Z[ce]:z[ce])}var ce=arguments.length-2;if(ce===1)T.children=A;else if(1<ce){Z=Array(ce);for(var fe=0;fe<ce;fe++)Z[fe]=arguments[fe+2];T.children=Z}return{$$typeof:a,type:M.type,key:B,ref:q,props:T,_owner:k}},at.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},at.createElement=re,at.createFactory=function(M){var z=re.bind(null,M);return z.type=M,z},at.createRef=function(){return{current:null}},at.forwardRef=function(M){return{$$typeof:p,render:M}},at.isValidElement=Q,at.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:Me}},at.memo=function(M,z){return{$$typeof:d,type:M,compare:z===void 0?null:z}},at.startTransition=function(M){var z=H.transition;H.transition={};try{M()}finally{H.transition=z}},at.unstable_act=W,at.useCallback=function(M,z){return ae.current.useCallback(M,z)},at.useContext=function(M){return ae.current.useContext(M)},at.useDebugValue=function(){},at.useDeferredValue=function(M){return ae.current.useDeferredValue(M)},at.useEffect=function(M,z){return ae.current.useEffect(M,z)},at.useId=function(){return ae.current.useId()},at.useImperativeHandle=function(M,z,A){return ae.current.useImperativeHandle(M,z,A)},at.useInsertionEffect=function(M,z){return ae.current.useInsertionEffect(M,z)},at.useLayoutEffect=function(M,z){return ae.current.useLayoutEffect(M,z)},at.useMemo=function(M,z){return ae.current.useMemo(M,z)},at.useReducer=function(M,z,A){return ae.current.useReducer(M,z,A)},at.useRef=function(M){return ae.current.useRef(M)},at.useState=function(M){return ae.current.useState(M)},at.useSyncExternalStore=function(M,z,A){return ae.current.useSyncExternalStore(M,z,A)},at.useTransition=function(){return ae.current.useTransition()},at.version="18.3.1",at}var qf;function gd(){return qf||(qf=1,yc.exports=Wv()),yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function jv(){if(Kf)return Us;Kf=1;var a=gd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(p,f,d){var m,v={},_=null,y=null;d!==void 0&&(_=""+d),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)i.call(f,m)&&!l.hasOwnProperty(m)&&(v[m]=f[m]);if(p&&p.defaultProps)for(m in f=p.defaultProps,f)v[m]===void 0&&(v[m]=f[m]);return{$$typeof:e,type:p,key:_,ref:y,props:v,_owner:s.current}}return Us.Fragment=n,Us.jsx=c,Us.jsxs=c,Us}var $f;function Xv(){return $f||($f=1,xc.exports=jv()),xc.exports}var L=Xv(),de=gd(),$o={},Sc={exports:{}},Sn={},Ec={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function Yv(){return Zf||(Zf=1,(function(a){function e(H,$){var W=H.length;H.push($);e:for(;0<W;){var M=W-1>>>1,z=H[M];if(0<s(z,$))H[M]=$,H[W]=z,W=M;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var $=H[0],W=H.pop();if(W!==$){H[0]=W;e:for(var M=0,z=H.length,A=z>>>1;M<A;){var T=2*(M+1)-1,B=H[T],q=T+1,k=H[q];if(0>s(B,W))q<z&&0>s(k,B)?(H[M]=k,H[q]=W,M=q):(H[M]=B,H[T]=W,M=T);else if(q<z&&0>s(k,W))H[M]=k,H[q]=W,M=q;else break e}}return $}function s(H,$){var W=H.sortIndex-$.sortIndex;return W!==0?W:H.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var c=Date,p=c.now();a.unstable_now=function(){return c.now()-p}}var f=[],d=[],m=1,v=null,_=3,y=!1,b=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(H){for(var $=n(d);$!==null;){if($.callback===null)i(d);else if($.startTime<=H)i(d),$.sortIndex=$.expirationTime,e(f,$);else break;$=n(d)}}function G(H){if(R=!1,S(H),!b)if(n(f)!==null)b=!0,Me(I);else{var $=n(d);$!==null&&ae(G,$.startTime-H)}}function I(H,$){b=!1,R&&(R=!1,C(re),re=-1),y=!0;var W=_;try{for(S($),v=n(f);v!==null&&(!(v.expirationTime>$)||H&&!le());){var M=v.callback;if(typeof M=="function"){v.callback=null,_=v.priorityLevel;var z=M(v.expirationTime<=$);$=a.unstable_now(),typeof z=="function"?v.callback=z:v===n(f)&&i(f),S($)}else i(f);v=n(f)}if(v!==null)var A=!0;else{var T=n(d);T!==null&&ae(G,T.startTime-$),A=!1}return A}finally{v=null,_=W,y=!1}}var O=!1,N=null,re=-1,K=5,Q=-1;function le(){return!(a.unstable_now()-Q<K)}function F(){if(N!==null){var H=a.unstable_now();Q=H;var $=!0;try{$=N(!0,H)}finally{$?ie():(O=!1,N=null)}}else O=!1}var ie;if(typeof w=="function")ie=function(){w(F)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,me=te.port2;te.port1.onmessage=F,ie=function(){me.postMessage(null)}}else ie=function(){x(F,0)};function Me(H){N=H,O||(O=!0,ie())}function ae(H,$){re=x(function(){H(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_continueExecution=function(){b||y||(b=!0,Me(I))},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return n(f)},a.unstable_next=function(H){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var W=_;_=$;try{return H()}finally{_=W}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(H,$){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var W=_;_=H;try{return $()}finally{_=W}},a.unstable_scheduleCallback=function(H,$,W){var M=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?M+W:M):W=M,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=W+z,H={id:m++,callback:$,priorityLevel:H,startTime:W,expirationTime:z,sortIndex:-1},W>M?(H.sortIndex=W,e(d,H),n(f)===null&&H===n(d)&&(R?(C(re),re=-1):R=!0,ae(G,W-M))):(H.sortIndex=z,e(f,H),b||y||(b=!0,Me(I))),H},a.unstable_shouldYield=le,a.unstable_wrapCallback=function(H){var $=_;return function(){var W=_;_=$;try{return H.apply(this,arguments)}finally{_=W}}}})(Mc)),Mc}var Qf;function qv(){return Qf||(Qf=1,Ec.exports=Yv()),Ec.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function Kv(){if(Jf)return Sn;Jf=1;var a=gd(),e=qv();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(t,r){c(t,r),c(t+"Capture",r)}function c(t,r){for(s[t]=r,t=0;t<r.length;t++)i.add(r[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(t){return f.call(v,t)?!0:f.call(m,t)?!1:d.test(t)?v[t]=!0:(m[t]=!0,!1)}function y(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,r,o,u){if(r===null||typeof r>"u"||y(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function R(t,r,o,u,h,g,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=g,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];x[r]=new R(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function w(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(C,w);x[r]=new R(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(C,w);x[r]=new R(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(C,w);x[r]=new R(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function S(t,r,o,u){var h=x.hasOwnProperty(r)?x[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(b(r,o,h,u)&&(o=null),u||h===null?_(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var G=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),O=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),le=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,M;function z(t){if(M===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);M=r&&r[1]||""}return`
`+M+t}var A=!1;function T(t,r){if(!t||A)return"";A=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(se){var u=se}Reflect.construct(t,[],r)}else{try{r.call()}catch(se){u=se}t.call(r.prototype)}else{try{throw Error()}catch(se){u=se}t()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var h=se.stack.split(`
`),g=u.stack.split(`
`),E=h.length-1,U=g.length-1;1<=E&&0<=U&&h[E]!==g[U];)U--;for(;1<=E&&0<=U;E--,U--)if(h[E]!==g[U]){if(E!==1||U!==1)do if(E--,U--,0>U||h[E]!==g[U]){var V=`
`+h[E].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=E&&0<=U);break}}}finally{A=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?z(t):""}function B(t){switch(t.tag){case 5:return z(t.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return t=T(t.type,!1),t;case 11:return t=T(t.type.render,!1),t;case 1:return t=T(t.type,!0),t;default:return""}}function q(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case O:return"Portal";case K:return"Profiler";case re:return"StrictMode";case ie:return"Suspense";case te:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case le:return(t.displayName||"Context")+".Consumer";case Q:return(t._context.displayName||"Context")+".Provider";case F:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return r=t.displayName||null,r!==null?r:q(t.type)||"Memo";case Me:r=t._payload,t=t._init;try{return q(t(r))}catch{}}return null}function k(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(r);case 8:return r===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Z(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ce(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function fe(t){var r=ce(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ee(t){t._valueTracker||(t._valueTracker=fe(t))}function Re(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=ce(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function Ne(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function P(t,r){var o=r.checked;return W({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function we(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Z(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function he(t,r){r=r.checked,r!=null&&S(t,"checked",r,!1)}function ue(t,r){he(t,r);var o=Z(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ae(t,r.type,o):r.hasOwnProperty("defaultValue")&&Ae(t,r.type,Z(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function ve(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ae(t,r,o){(r!=="number"||Ne(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var be=Array.isArray;function Pe(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Z(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function Be(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return W({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function De(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(be(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Z(o)}}function Ue(t,r){var o=Z(r.value),u=Z(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Xe(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Mt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Mt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qe,Je=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Qe=Qe||document.createElement("div"),Qe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Tn(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(t){j.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ut[r]=Ut[t]})});function Ie(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ut.hasOwnProperty(t)&&Ut[t]?(""+r).trim():r+"px"}function $e(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=Ie(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var ct=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ne(t,r){if(r){if(ct[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Yt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function Lt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,In=null,It=null;function rn(t){if(t=xs(t)){if(typeof Fr!="function")throw Error(n(280));var r=t.stateNode;r&&(r=co(r),Fr(t.stateNode,t.type,r))}}function Sr(t){In?It?It.push(t):It=[t]:In=t}function On(){if(In){var t=In,r=It;if(It=In=null,rn(t),r)for(t=0;t<r.length;t++)rn(r[t])}}function Xn(t,r){return t(r)}function sr(){}var Yn=!1;function es(t,r,o){if(Yn)return t(r,o);Yn=!0;try{return Xn(t,r,o)}finally{Yn=!1,(In!==null||It!==null)&&(sr(),On())}}function zr(t,r){var o=t.stateNode;if(o===null)return null;var u=co(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Br=!1;if(p)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Br=!1}function ta(t,r,o,u,h,g,E,U,V){var se=Array.prototype.slice.call(arguments,3);try{r.apply(o,se)}catch(ye){this.onError(ye)}}var Gr=!1,Mi=null,D=!1,oe=null,pe={onError:function(t){Gr=!0,Mi=t}};function xe(t,r,o,u,h,g,E,U,V){Gr=!1,Mi=null,ta.apply(pe,arguments)}function ge(t,r,o,u,h,g,E,U,V){if(xe.apply(this,arguments),Gr){if(Gr){var se=Mi;Gr=!1,Mi=null}else throw Error(n(198));D||(D=!0,oe=se)}}function Ce(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function je(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Ye(t){if(Ce(t)!==t)throw Error(n(188))}function et(t){var r=t.alternate;if(!r){if(r=Ce(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return Ye(h),t;if(g===u)return Ye(h),r;g=g.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=g;else{for(var E=!1,U=h.child;U;){if(U===o){E=!0,o=h,u=g;break}if(U===u){E=!0,u=h,o=g;break}U=U.sibling}if(!E){for(U=g.child;U;){if(U===o){E=!0,o=g,u=h;break}if(U===u){E=!0,u=g,o=h;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function tt(t){return t=et(t),t!==null?rt(t):null}function rt(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=rt(t);if(r!==null)return r;t=t.sibling}return null}var it=e.unstable_scheduleCallback,vt=e.unstable_cancelCallback,Rn=e.unstable_shouldYield,qn=e.unstable_requestPaint,mt=e.unstable_now,xt=e.unstable_getCurrentPriorityLevel,Tt=e.unstable_ImmediatePriority,an=e.unstable_UserBlockingPriority,Ot=e.unstable_NormalPriority,lt=e.unstable_LowPriority,ut=e.unstable_IdlePriority,or=null,hn=null;function Bl(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(or,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Vl,Hl=Math.log,Gl=Math.LN2;function Vl(t){return t>>>=0,t===0?32:31-(Hl(t)/Gl|0)|0}var na=64,ra=4194304;function Vr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wi(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,g=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~h;U!==0?u=Vr(U):(g&=E,g!==0&&(u=Vr(g)))}else E=o&~h,E!==0?u=Vr(E):g!==0&&(u=Vr(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-$t(r),h=1<<o,u|=t[o],r&=~h;return u}function Wl(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dt(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes;0<g;){var E=31-$t(g),U=1<<E,V=h[E];V===-1?((U&o)===0||(U&u)!==0)&&(h[E]=Wl(U,r)):V<=r&&(t.expiredLanes|=U),g&=~U}}function ts(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fn(){var t=na;return na<<=1,(na&4194240)===0&&(na=64),t}function Kn(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Wr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-$t(r),t[r]=o}function Ti(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-$t(o),g=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~g}}function Ri(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-$t(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var Ke=0;function lr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ia,pn,mn,sn,aa,ns=!1,Ai=[],jr=null,Xr=null,Yr=null,rs=new Map,is=new Map,qr=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(t,r){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":rs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":is.delete(r.pointerId)}}function as(t,r,o,u,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=xs(r),r!==null&&pn(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function fg(t,r,o,u,h){switch(r){case"focusin":return jr=as(jr,t,r,o,u,h),!0;case"dragenter":return Xr=as(Xr,t,r,o,u,h),!0;case"mouseover":return Yr=as(Yr,t,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return rs.set(g,as(rs.get(g)||null,t,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,is.set(g,as(is.get(g)||null,t,r,o,u,h)),!0}return!1}function Ld(t){var r=bi(t.target);if(r!==null){var o=Ce(r);if(o!==null){if(r=o.tag,r===13){if(r=je(o),r!==null){t.blockedOn=r,aa(t.priority,function(){mn(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $s(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Xl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);bt=u,o.target.dispatchEvent(u),bt=null}else return r=xs(o),r!==null&&pn(r),t.blockedOn=o,!1;r.shift()}return!0}function Pd(t,r,o){$s(t)&&o.delete(r)}function pg(){ns=!1,jr!==null&&$s(jr)&&(jr=null),Xr!==null&&$s(Xr)&&(Xr=null),Yr!==null&&$s(Yr)&&(Yr=null),rs.forEach(Pd),is.forEach(Pd)}function ss(t,r){t.blockedOn===r&&(t.blockedOn=null,ns||(ns=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pg)))}function os(t){function r(h){return ss(h,t)}if(0<Ai.length){ss(Ai[0],t);for(var o=1;o<Ai.length;o++){var u=Ai[o];u.blockedOn===t&&(u.blockedOn=null)}}for(jr!==null&&ss(jr,t),Xr!==null&&ss(Xr,t),Yr!==null&&ss(Yr,t),rs.forEach(r),is.forEach(r),o=0;o<qr.length;o++)u=qr[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<qr.length&&(o=qr[0],o.blockedOn===null);)Ld(o),o.blockedOn===null&&qr.shift()}var sa=G.ReactCurrentBatchConfig,Zs=!0;function mg(t,r,o,u){var h=Ke,g=sa.transition;sa.transition=null;try{Ke=1,jl(t,r,o,u)}finally{Ke=h,sa.transition=g}}function gg(t,r,o,u){var h=Ke,g=sa.transition;sa.transition=null;try{Ke=4,jl(t,r,o,u)}finally{Ke=h,sa.transition=g}}function jl(t,r,o,u){if(Zs){var h=Xl(t,r,o,u);if(h===null)uu(t,r,u,Qs,o),Cd(t,u);else if(fg(h,t,r,o,u))u.stopPropagation();else if(Cd(t,u),r&4&&-1<hg.indexOf(t)){for(;h!==null;){var g=xs(h);if(g!==null&&ia(g),g=Xl(t,r,o,u),g===null&&uu(t,r,u,Qs,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else uu(t,r,u,null,o)}}var Qs=null;function Xl(t,r,o,u){if(Qs=null,t=Lt(u),t=bi(t),t!==null)if(r=Ce(t),r===null)t=null;else if(o=r.tag,o===13){if(t=je(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Qs=t,null}function Nd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xt()){case Tt:return 1;case an:return 4;case Ot:case lt:return 16;case ut:return 536870912;default:return 16}default:return 16}}var Kr=null,Yl=null,Js=null;function Dd(){if(Js)return Js;var t,r=Yl,o=r.length,u,h="value"in Kr?Kr.value:Kr.textContent,g=h.length;for(t=0;t<o&&r[t]===h[t];t++);var E=o-t;for(u=1;u<=E&&r[o-u]===h[g-u];u++);return Js=h.slice(t,1<u?1-u:void 0)}function eo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function Ud(){return!1}function An(t){function r(o,u,h,g,E){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?to:Ud,this.isPropagationStopped=Ud,this}return W(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),r}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=An(oa),ls=W({},oa,{view:0,detail:0}),vg=An(ls),Kl,$l,us,no=W({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Kl=t.screenX-us.screenX,$l=t.screenY-us.screenY):$l=Kl=0,us=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),Id=An(no),_g=W({},no,{dataTransfer:0}),xg=An(_g),yg=W({},ls,{relatedTarget:0}),Zl=An(yg),Sg=W({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=An(Sg),Mg=W({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wg=An(Mg),Tg=W({},oa,{data:0}),Od=An(Tg),Rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=bg[t])?!!r[t]:!1}function Ql(){return Cg}var Lg=W({},ls,{key:function(t){if(t.key){var r=Rg[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ag[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pg=An(Lg),Ng=W({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=An(Ng),Dg=W({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Ug=An(Dg),Ig=W({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=An(Ig),kg=W({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=An(kg),zg=[9,13,27,32],Jl=p&&"CompositionEvent"in window,cs=null;p&&"documentMode"in document&&(cs=document.documentMode);var Bg=p&&"TextEvent"in window&&!cs,Fd=p&&(!Jl||cs&&8<cs&&11>=cs),zd=" ",Bd=!1;function Hd(t,r){switch(t){case"keyup":return zg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var la=!1;function Hg(t,r){switch(t){case"compositionend":return Gd(r);case"keypress":return r.which!==32?null:(Bd=!0,zd);case"textInput":return t=r.data,t===zd&&Bd?null:t;default:return null}}function Gg(t,r){if(la)return t==="compositionend"||!Jl&&Hd(t,r)?(t=Dd(),Js=Yl=Kr=null,la=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fd&&r.locale!=="ko"?null:r.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Vg[t.type]:r==="textarea"}function Wd(t,r,o,u){Sr(u),r=oo(r,"onChange"),0<r.length&&(o=new ql("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var ds=null,hs=null;function Wg(t){lh(t,0)}function ro(t){var r=fa(t);if(Re(r))return t}function jg(t,r){if(t==="change")return r}var jd=!1;if(p){var eu;if(p){var tu="oninput"in document;if(!tu){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),tu=typeof Xd.oninput=="function"}eu=tu}else eu=!1;jd=eu&&(!document.documentMode||9<document.documentMode)}function Yd(){ds&&(ds.detachEvent("onpropertychange",qd),hs=ds=null)}function qd(t){if(t.propertyName==="value"&&ro(hs)){var r=[];Wd(r,hs,t,Lt(t)),es(Wg,r)}}function Xg(t,r,o){t==="focusin"?(Yd(),ds=r,hs=o,ds.attachEvent("onpropertychange",qd)):t==="focusout"&&Yd()}function Yg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(hs)}function qg(t,r){if(t==="click")return ro(r)}function Kg(t,r){if(t==="input"||t==="change")return ro(r)}function $g(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var $n=typeof Object.is=="function"?Object.is:$g;function fs(t,r){if($n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!f.call(r,h)||!$n(t[h],r[h]))return!1}return!0}function Kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $d(t,r){var o=Kd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kd(o)}}function Zd(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Zd(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Qd(){for(var t=window,r=Ne();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ne(t.document)}return r}function nu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Zg(t){var r=Qd(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Zd(o.ownerDocument.documentElement,o)){if(u!==null&&nu(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!t.extend&&g>u&&(h=u,u=g,g=h),h=$d(o,g);var E=$d(o,u);h&&E&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),g>u?(t.addRange(r),t.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qg=p&&"documentMode"in document&&11>=document.documentMode,ua=null,ru=null,ps=null,iu=!1;function Jd(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;iu||ua==null||ua!==Ne(u)||(u=ua,"selectionStart"in u&&nu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ps&&fs(ps,u)||(ps=u,u=oo(ru,"onSelect"),0<u.length&&(r=new ql("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=ua)))}function io(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var ca={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},au={},eh={};p&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function ao(t){if(au[t])return au[t];if(!ca[t])return t;var r=ca[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in eh)return au[t]=r[o];return t}var th=ao("animationend"),nh=ao("animationiteration"),rh=ao("animationstart"),ih=ao("transitionend"),ah=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,r){ah.set(t,r),l(r,[t])}for(var su=0;su<sh.length;su++){var ou=sh[su],Jg=ou.toLowerCase(),ev=ou[0].toUpperCase()+ou.slice(1);$r(Jg,"on"+ev)}$r(th,"onAnimationEnd"),$r(nh,"onAnimationIteration"),$r(rh,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(ih,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function oh(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,ge(u,r,void 0,t),t.currentTarget=null}function lh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var E=u.length-1;0<=E;E--){var U=u[E],V=U.instance,se=U.currentTarget;if(U=U.listener,V!==g&&h.isPropagationStopped())break e;oh(h,U,se),g=V}else for(E=0;E<u.length;E++){if(U=u[E],V=U.instance,se=U.currentTarget,U=U.listener,V!==g&&h.isPropagationStopped())break e;oh(h,U,se),g=V}}}if(D)throw t=oe,D=!1,oe=null,t}function yt(t,r){var o=r[mu];o===void 0&&(o=r[mu]=new Set);var u=t+"__bubble";o.has(u)||(uh(r,t,2,!1),o.add(u))}function lu(t,r,o){var u=0;r&&(u|=4),uh(o,t,u,r)}var so="_reactListening"+Math.random().toString(36).slice(2);function gs(t){if(!t[so]){t[so]=!0,i.forEach(function(o){o!=="selectionchange"&&(tv.has(o)||lu(o,!1,t),lu(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[so]||(r[so]=!0,lu("selectionchange",!1,r))}}function uh(t,r,o,u){switch(Nd(r)){case 1:var h=mg;break;case 4:h=gg;break;default:h=jl}o=h.bind(null,r,o,t),h=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function uu(t,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;E=E.return}for(;U!==null;){if(E=bi(U),E===null)return;if(V=E.tag,V===5||V===6){u=g=E;continue e}U=U.parentNode}}u=u.return}es(function(){var se=g,ye=Lt(o),Se=[];e:{var _e=ah.get(t);if(_e!==void 0){var Oe=ql,Fe=t;switch(t){case"keypress":if(eo(o)===0)break e;case"keydown":case"keyup":Oe=Pg;break;case"focusin":Fe="focus",Oe=Zl;break;case"focusout":Fe="blur",Oe=Zl;break;case"beforeblur":case"afterblur":Oe=Zl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Ug;break;case th:case nh:case rh:Oe=Eg;break;case ih:Oe=Og;break;case"scroll":Oe=vg;break;case"wheel":Oe=Fg;break;case"copy":case"cut":case"paste":Oe=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=kd}var ze=(r&4)!==0,Pt=!ze&&t==="scroll",J=ze?_e!==null?_e+"Capture":null:_e;ze=[];for(var Y=se,ee;Y!==null;){ee=Y;var Te=ee.stateNode;if(ee.tag===5&&Te!==null&&(ee=Te,J!==null&&(Te=zr(Y,J),Te!=null&&ze.push(vs(Y,Te,ee)))),Pt)break;Y=Y.return}0<ze.length&&(_e=new Oe(_e,Fe,null,o,ye),Se.push({event:_e,listeners:ze}))}}if((r&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",_e&&o!==bt&&(Fe=o.relatedTarget||o.fromElement)&&(bi(Fe)||Fe[Er]))break e;if((Oe||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Oe?(Fe=o.relatedTarget||o.toElement,Oe=se,Fe=Fe?bi(Fe):null,Fe!==null&&(Pt=Ce(Fe),Fe!==Pt||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(Oe=null,Fe=se),Oe!==Fe)){if(ze=Id,Te="onMouseLeave",J="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ze=kd,Te="onPointerLeave",J="onPointerEnter",Y="pointer"),Pt=Oe==null?_e:fa(Oe),ee=Fe==null?_e:fa(Fe),_e=new ze(Te,Y+"leave",Oe,o,ye),_e.target=Pt,_e.relatedTarget=ee,Te=null,bi(ye)===se&&(ze=new ze(J,Y+"enter",Fe,o,ye),ze.target=ee,ze.relatedTarget=Pt,Te=ze),Pt=Te,Oe&&Fe)t:{for(ze=Oe,J=Fe,Y=0,ee=ze;ee;ee=da(ee))Y++;for(ee=0,Te=J;Te;Te=da(Te))ee++;for(;0<Y-ee;)ze=da(ze),Y--;for(;0<ee-Y;)J=da(J),ee--;for(;Y--;){if(ze===J||J!==null&&ze===J.alternate)break t;ze=da(ze),J=da(J)}ze=null}else ze=null;Oe!==null&&ch(Se,_e,Oe,ze,!1),Fe!==null&&Pt!==null&&ch(Se,Pt,Fe,ze,!0)}}e:{if(_e=se?fa(se):window,Oe=_e.nodeName&&_e.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&_e.type==="file")var He=jg;else if(Vd(_e))if(jd)He=Kg;else{He=Yg;var Ve=Xg}else(Oe=_e.nodeName)&&Oe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(He=qg);if(He&&(He=He(t,se))){Wd(Se,He,o,ye);break e}Ve&&Ve(t,_e,se),t==="focusout"&&(Ve=_e._wrapperState)&&Ve.controlled&&_e.type==="number"&&Ae(_e,"number",_e.value)}switch(Ve=se?fa(se):window,t){case"focusin":(Vd(Ve)||Ve.contentEditable==="true")&&(ua=Ve,ru=se,ps=null);break;case"focusout":ps=ru=ua=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Jd(Se,o,ye);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":Jd(Se,o,ye)}var We;if(Jl)e:{switch(t){case"compositionstart":var qe="onCompositionStart";break e;case"compositionend":qe="onCompositionEnd";break e;case"compositionupdate":qe="onCompositionUpdate";break e}qe=void 0}else la?Hd(t,o)&&(qe="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(qe="onCompositionStart");qe&&(Fd&&o.locale!=="ko"&&(la||qe!=="onCompositionStart"?qe==="onCompositionEnd"&&la&&(We=Dd()):(Kr=ye,Yl="value"in Kr?Kr.value:Kr.textContent,la=!0)),Ve=oo(se,qe),0<Ve.length&&(qe=new Od(qe,t,null,o,ye),Se.push({event:qe,listeners:Ve}),We?qe.data=We:(We=Gd(o),We!==null&&(qe.data=We)))),(We=Bg?Hg(t,o):Gg(t,o))&&(se=oo(se,"onBeforeInput"),0<se.length&&(ye=new Od("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:se}),ye.data=We))}lh(Se,r)})}function vs(t,r,o){return{instance:t,listener:r,currentTarget:o}}function oo(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=zr(t,o),g!=null&&u.unshift(vs(t,g,h)),g=zr(t,r),g!=null&&u.push(vs(t,g,h))),t=t.return}return u}function da(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ch(t,r,o,u,h){for(var g=r._reactName,E=[];o!==null&&o!==u;){var U=o,V=U.alternate,se=U.stateNode;if(V!==null&&V===u)break;U.tag===5&&se!==null&&(U=se,h?(V=zr(o,g),V!=null&&E.unshift(vs(o,V,U))):h||(V=zr(o,g),V!=null&&E.push(vs(o,V,U)))),o=o.return}E.length!==0&&t.push({event:r,listeners:E})}var nv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function dh(t){return(typeof t=="string"?t:""+t).replace(nv,`
`).replace(rv,"")}function lo(t,r,o){if(r=dh(r),dh(t)!==r&&o)throw Error(n(425))}function uo(){}var cu=null,du=null;function hu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,iv=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,av=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(t){return hh.resolve(null).then(t).catch(sv)}:fu;function sv(t){setTimeout(function(){throw t})}function pu(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),os(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);os(r)}function Zr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function fh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var ha=Math.random().toString(36).slice(2),ur="__reactFiber$"+ha,_s="__reactProps$"+ha,Er="__reactContainer$"+ha,mu="__reactEvents$"+ha,ov="__reactListeners$"+ha,lv="__reactHandles$"+ha;function bi(t){var r=t[ur];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Er]||o[ur]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=fh(t);t!==null;){if(o=t[ur])return o;t=fh(t)}return r}t=o,o=t.parentNode}return null}function xs(t){return t=t[ur]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function co(t){return t[_s]||null}var gu=[],pa=-1;function Qr(t){return{current:t}}function St(t){0>pa||(t.current=gu[pa],gu[pa]=null,pa--)}function _t(t,r){pa++,gu[pa]=t.current,t.current=r}var Jr={},Zt=Qr(Jr),gn=Qr(!1),Ci=Jr;function ma(t,r){var o=t.type.contextTypes;if(!o)return Jr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function vn(t){return t=t.childContextTypes,t!=null}function ho(){St(gn),St(Zt)}function ph(t,r,o){if(Zt.current!==Jr)throw Error(n(168));_t(Zt,r),_t(gn,o)}function mh(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,k(t)||"Unknown",h));return W({},o,u)}function fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Ci=Zt.current,_t(Zt,t),_t(gn,gn.current),!0}function gh(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=mh(t,r,Ci),u.__reactInternalMemoizedMergedChildContext=t,St(gn),St(Zt),_t(Zt,t)):St(gn),_t(gn,o)}var Mr=null,po=!1,vu=!1;function vh(t){Mr===null?Mr=[t]:Mr.push(t)}function uv(t){po=!0,vh(t)}function ei(){if(!vu&&Mr!==null){vu=!0;var t=0,r=Ke;try{var o=Mr;for(Ke=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Mr=null,po=!1}catch(h){throw Mr!==null&&(Mr=Mr.slice(t+1)),it(Tt,ei),h}finally{Ke=r,vu=!1}}return null}var ga=[],va=0,mo=null,go=0,kn=[],Fn=0,Li=null,wr=1,Tr="";function Pi(t,r){ga[va++]=go,ga[va++]=mo,mo=t,go=r}function _h(t,r,o){kn[Fn++]=wr,kn[Fn++]=Tr,kn[Fn++]=Li,Li=t;var u=wr;t=Tr;var h=32-$t(u)-1;u&=~(1<<h),o+=1;var g=32-$t(r)+h;if(30<g){var E=h-h%5;g=(u&(1<<E)-1).toString(32),u>>=E,h-=E,wr=1<<32-$t(r)+h|o<<h|u,Tr=g+t}else wr=1<<g|o<<h|u,Tr=t}function _u(t){t.return!==null&&(Pi(t,1),_h(t,1,0))}function xu(t){for(;t===mo;)mo=ga[--va],ga[va]=null,go=ga[--va],ga[va]=null;for(;t===Li;)Li=kn[--Fn],kn[Fn]=null,Tr=kn[--Fn],kn[Fn]=null,wr=kn[--Fn],kn[Fn]=null}var bn=null,Cn=null,wt=!1,Zn=null;function xh(t,r){var o=Gn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function yh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,bn=t,Cn=Zr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,bn=t,Cn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Li!==null?{id:wr,overflow:Tr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Gn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,bn=t,Cn=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Su(t){if(wt){var r=Cn;if(r){var o=r;if(!yh(t,r)){if(yu(t))throw Error(n(418));r=Zr(o.nextSibling);var u=bn;r&&yh(t,r)?xh(u,o):(t.flags=t.flags&-4097|2,wt=!1,bn=t)}}else{if(yu(t))throw Error(n(418));t.flags=t.flags&-4097|2,wt=!1,bn=t}}}function Sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function vo(t){if(t!==bn)return!1;if(!wt)return Sh(t),wt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!hu(t.type,t.memoizedProps)),r&&(r=Cn)){if(yu(t))throw Eh(),Error(n(418));for(;r;)xh(t,r),r=Zr(r.nextSibling)}if(Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Cn=Zr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Cn=null}}else Cn=bn?Zr(t.stateNode.nextSibling):null;return!0}function Eh(){for(var t=Cn;t;)t=Zr(t.nextSibling)}function _a(){Cn=bn=null,wt=!1}function Eu(t){Zn===null?Zn=[t]:Zn.push(t)}var cv=G.ReactCurrentBatchConfig;function ys(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,g=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(E){var U=h.refs;E===null?delete U[g]:U[g]=E},r._stringRef=g,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _o(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Mh(t){var r=t._init;return r(t._payload)}function wh(t){function r(J,Y){if(t){var ee=J.deletions;ee===null?(J.deletions=[Y],J.flags|=16):ee.push(Y)}}function o(J,Y){if(!t)return null;for(;Y!==null;)r(J,Y),Y=Y.sibling;return null}function u(J,Y){for(J=new Map;Y!==null;)Y.key!==null?J.set(Y.key,Y):J.set(Y.index,Y),Y=Y.sibling;return J}function h(J,Y){return J=li(J,Y),J.index=0,J.sibling=null,J}function g(J,Y,ee){return J.index=ee,t?(ee=J.alternate,ee!==null?(ee=ee.index,ee<Y?(J.flags|=2,Y):ee):(J.flags|=2,Y)):(J.flags|=1048576,Y)}function E(J){return t&&J.alternate===null&&(J.flags|=2),J}function U(J,Y,ee,Te){return Y===null||Y.tag!==6?(Y=fc(ee,J.mode,Te),Y.return=J,Y):(Y=h(Y,ee),Y.return=J,Y)}function V(J,Y,ee,Te){var He=ee.type;return He===N?ye(J,Y,ee.props.children,Te,ee.key):Y!==null&&(Y.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Me&&Mh(He)===Y.type)?(Te=h(Y,ee.props),Te.ref=ys(J,Y,ee),Te.return=J,Te):(Te=Go(ee.type,ee.key,ee.props,null,J.mode,Te),Te.ref=ys(J,Y,ee),Te.return=J,Te)}function se(J,Y,ee,Te){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ee.containerInfo||Y.stateNode.implementation!==ee.implementation?(Y=pc(ee,J.mode,Te),Y.return=J,Y):(Y=h(Y,ee.children||[]),Y.return=J,Y)}function ye(J,Y,ee,Te,He){return Y===null||Y.tag!==7?(Y=zi(ee,J.mode,Te,He),Y.return=J,Y):(Y=h(Y,ee),Y.return=J,Y)}function Se(J,Y,ee){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=fc(""+Y,J.mode,ee),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case I:return ee=Go(Y.type,Y.key,Y.props,null,J.mode,ee),ee.ref=ys(J,null,Y),ee.return=J,ee;case O:return Y=pc(Y,J.mode,ee),Y.return=J,Y;case Me:var Te=Y._init;return Se(J,Te(Y._payload),ee)}if(be(Y)||$(Y))return Y=zi(Y,J.mode,ee,null),Y.return=J,Y;_o(J,Y)}return null}function _e(J,Y,ee,Te){var He=Y!==null?Y.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return He!==null?null:U(J,Y,""+ee,Te);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case I:return ee.key===He?V(J,Y,ee,Te):null;case O:return ee.key===He?se(J,Y,ee,Te):null;case Me:return He=ee._init,_e(J,Y,He(ee._payload),Te)}if(be(ee)||$(ee))return He!==null?null:ye(J,Y,ee,Te,null);_o(J,ee)}return null}function Oe(J,Y,ee,Te,He){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return J=J.get(ee)||null,U(Y,J,""+Te,He);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case I:return J=J.get(Te.key===null?ee:Te.key)||null,V(Y,J,Te,He);case O:return J=J.get(Te.key===null?ee:Te.key)||null,se(Y,J,Te,He);case Me:var Ve=Te._init;return Oe(J,Y,ee,Ve(Te._payload),He)}if(be(Te)||$(Te))return J=J.get(ee)||null,ye(Y,J,Te,He,null);_o(Y,Te)}return null}function Fe(J,Y,ee,Te){for(var He=null,Ve=null,We=Y,qe=Y=0,jt=null;We!==null&&qe<ee.length;qe++){We.index>qe?(jt=We,We=null):jt=We.sibling;var ft=_e(J,We,ee[qe],Te);if(ft===null){We===null&&(We=jt);break}t&&We&&ft.alternate===null&&r(J,We),Y=g(ft,Y,qe),Ve===null?He=ft:Ve.sibling=ft,Ve=ft,We=jt}if(qe===ee.length)return o(J,We),wt&&Pi(J,qe),He;if(We===null){for(;qe<ee.length;qe++)We=Se(J,ee[qe],Te),We!==null&&(Y=g(We,Y,qe),Ve===null?He=We:Ve.sibling=We,Ve=We);return wt&&Pi(J,qe),He}for(We=u(J,We);qe<ee.length;qe++)jt=Oe(We,J,qe,ee[qe],Te),jt!==null&&(t&&jt.alternate!==null&&We.delete(jt.key===null?qe:jt.key),Y=g(jt,Y,qe),Ve===null?He=jt:Ve.sibling=jt,Ve=jt);return t&&We.forEach(function(ui){return r(J,ui)}),wt&&Pi(J,qe),He}function ze(J,Y,ee,Te){var He=$(ee);if(typeof He!="function")throw Error(n(150));if(ee=He.call(ee),ee==null)throw Error(n(151));for(var Ve=He=null,We=Y,qe=Y=0,jt=null,ft=ee.next();We!==null&&!ft.done;qe++,ft=ee.next()){We.index>qe?(jt=We,We=null):jt=We.sibling;var ui=_e(J,We,ft.value,Te);if(ui===null){We===null&&(We=jt);break}t&&We&&ui.alternate===null&&r(J,We),Y=g(ui,Y,qe),Ve===null?He=ui:Ve.sibling=ui,Ve=ui,We=jt}if(ft.done)return o(J,We),wt&&Pi(J,qe),He;if(We===null){for(;!ft.done;qe++,ft=ee.next())ft=Se(J,ft.value,Te),ft!==null&&(Y=g(ft,Y,qe),Ve===null?He=ft:Ve.sibling=ft,Ve=ft);return wt&&Pi(J,qe),He}for(We=u(J,We);!ft.done;qe++,ft=ee.next())ft=Oe(We,J,qe,ft.value,Te),ft!==null&&(t&&ft.alternate!==null&&We.delete(ft.key===null?qe:ft.key),Y=g(ft,Y,qe),Ve===null?He=ft:Ve.sibling=ft,Ve=ft);return t&&We.forEach(function(Vv){return r(J,Vv)}),wt&&Pi(J,qe),He}function Pt(J,Y,ee,Te){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case I:e:{for(var He=ee.key,Ve=Y;Ve!==null;){if(Ve.key===He){if(He=ee.type,He===N){if(Ve.tag===7){o(J,Ve.sibling),Y=h(Ve,ee.props.children),Y.return=J,J=Y;break e}}else if(Ve.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Me&&Mh(He)===Ve.type){o(J,Ve.sibling),Y=h(Ve,ee.props),Y.ref=ys(J,Ve,ee),Y.return=J,J=Y;break e}o(J,Ve);break}else r(J,Ve);Ve=Ve.sibling}ee.type===N?(Y=zi(ee.props.children,J.mode,Te,ee.key),Y.return=J,J=Y):(Te=Go(ee.type,ee.key,ee.props,null,J.mode,Te),Te.ref=ys(J,Y,ee),Te.return=J,J=Te)}return E(J);case O:e:{for(Ve=ee.key;Y!==null;){if(Y.key===Ve)if(Y.tag===4&&Y.stateNode.containerInfo===ee.containerInfo&&Y.stateNode.implementation===ee.implementation){o(J,Y.sibling),Y=h(Y,ee.children||[]),Y.return=J,J=Y;break e}else{o(J,Y);break}else r(J,Y);Y=Y.sibling}Y=pc(ee,J.mode,Te),Y.return=J,J=Y}return E(J);case Me:return Ve=ee._init,Pt(J,Y,Ve(ee._payload),Te)}if(be(ee))return Fe(J,Y,ee,Te);if($(ee))return ze(J,Y,ee,Te);_o(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,Y!==null&&Y.tag===6?(o(J,Y.sibling),Y=h(Y,ee),Y.return=J,J=Y):(o(J,Y),Y=fc(ee,J.mode,Te),Y.return=J,J=Y),E(J)):o(J,Y)}return Pt}var xa=wh(!0),Th=wh(!1),xo=Qr(null),yo=null,ya=null,Mu=null;function wu(){Mu=ya=yo=null}function Tu(t){var r=xo.current;St(xo),t._currentValue=r}function Ru(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Sa(t,r){yo=t,Mu=ya=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(_n=!0),t.firstContext=null)}function zn(t){var r=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:r,next:null},ya===null){if(yo===null)throw Error(n(308));ya=t,yo.dependencies={lanes:0,firstContext:t}}else ya=ya.next=t;return r}var Ni=null;function Au(t){Ni===null?Ni=[t]:Ni.push(t)}function Rh(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,Au(r)):(o.next=h.next,h.next=o),r.interleaved=o,Rr(t,u)}function Rr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ti=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ni(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(ht&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,Rr(t,o)}return h=u.interleaved,h===null?(r.next=r,Au(u)):(r.next=h.next,h.next=r),u.interleaved=r,Rr(t,o)}function So(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Ri(t,o)}}function bh(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Eo(t,r,o,u){var h=t.updateQueue;ti=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var V=U,se=V.next;V.next=null,E===null?g=se:E.next=se,E=V;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==E&&(U===null?ye.firstBaseUpdate=se:U.next=se,ye.lastBaseUpdate=V))}if(g!==null){var Se=h.baseState;E=0,ye=se=V=null,U=g;do{var _e=U.lane,Oe=U.eventTime;if((u&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Fe=t,ze=U;switch(_e=r,Oe=o,ze.tag){case 1:if(Fe=ze.payload,typeof Fe=="function"){Se=Fe.call(Oe,Se,_e);break e}Se=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=ze.payload,_e=typeof Fe=="function"?Fe.call(Oe,Se,_e):Fe,_e==null)break e;Se=W({},Se,_e);break e;case 2:ti=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,_e=h.effects,_e===null?h.effects=[U]:_e.push(U))}else Oe={eventTime:Oe,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(se=ye=Oe,V=Se):ye=ye.next=Oe,E|=_e;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,h.lastBaseUpdate=_e,h.shared.pending=null}}while(!0);if(ye===null&&(V=Se),h.baseState=V,h.firstBaseUpdate=se,h.lastBaseUpdate=ye,r=h.shared.interleaved,r!==null){h=r;do E|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Ii|=E,t.lanes=E,t.memoizedState=Se}}function Ch(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var Ss={},cr=Qr(Ss),Es=Qr(Ss),Ms=Qr(Ss);function Di(t){if(t===Ss)throw Error(n(174));return t}function Cu(t,r){switch(_t(Ms,r),_t(Es,t),_t(cr,Ss),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ge(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Ge(r,t)}St(cr),_t(cr,r)}function Ea(){St(cr),St(Es),St(Ms)}function Lh(t){Di(Ms.current);var r=Di(cr.current),o=Ge(r,t.type);r!==o&&(_t(Es,t),_t(cr,o))}function Lu(t){Es.current===t&&(St(cr),St(Es))}var Rt=Qr(0);function Mo(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Pu=[];function Nu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var wo=G.ReactCurrentDispatcher,Du=G.ReactCurrentBatchConfig,Ui=0,At=null,kt=null,Vt=null,To=!1,ws=!1,Ts=0,dv=0;function Qt(){throw Error(n(321))}function Uu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!$n(t[o],r[o]))return!1;return!0}function Iu(t,r,o,u,h,g){if(Ui=g,At=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,wo.current=t===null||t.memoizedState===null?mv:gv,t=o(u,h),ws){g=0;do{if(ws=!1,Ts=0,25<=g)throw Error(n(301));g+=1,Vt=kt=null,r.updateQueue=null,wo.current=vv,t=o(u,h)}while(ws)}if(wo.current=bo,r=kt!==null&&kt.next!==null,Ui=0,Vt=kt=At=null,To=!1,r)throw Error(n(300));return t}function Ou(){var t=Ts!==0;return Ts=0,t}function dr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?At.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Bn(){if(kt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var r=Vt===null?At.memoizedState:Vt.next;if(r!==null)Vt=r,kt=t;else{if(t===null)throw Error(n(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Vt===null?At.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Rs(t,r){return typeof r=="function"?r(t):r}function ku(t){var r=Bn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=kt,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var U=E=null,V=null,se=g;do{var ye=se.lane;if((Ui&ye)===ye)V!==null&&(V=V.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:t(u,se.action);else{var Se={lane:ye,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};V===null?(U=V=Se,E=u):V=V.next=Se,At.lanes|=ye,Ii|=ye}se=se.next}while(se!==null&&se!==g);V===null?E=u:V.next=U,$n(u,r.memoizedState)||(_n=!0),r.memoizedState=u,r.baseState=E,r.baseQueue=V,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do g=h.lane,At.lanes|=g,Ii|=g,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Fu(t){var r=Bn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do g=t(g,E.action),E=E.next;while(E!==h);$n(g,r.memoizedState)||(_n=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function Ph(){}function Nh(t,r){var o=At,u=Bn(),h=r(),g=!$n(u.memoizedState,h);if(g&&(u.memoizedState=h,_n=!0),u=u.queue,zu(Ih.bind(null,o,u,t),[t]),u.getSnapshot!==r||g||Vt!==null&&Vt.memoizedState.tag&1){if(o.flags|=2048,As(9,Uh.bind(null,o,u,h,r),void 0,null),Wt===null)throw Error(n(349));(Ui&30)!==0||Dh(o,r,h)}return h}function Dh(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=At.updateQueue,r===null?(r={lastEffect:null,stores:null},At.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Uh(t,r,o,u){r.value=o,r.getSnapshot=u,Oh(r)&&kh(t)}function Ih(t,r,o){return o(function(){Oh(r)&&kh(t)})}function Oh(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!$n(t,o)}catch{return!0}}function kh(t){var r=Rr(t,1);r!==null&&tr(r,t,1,-1)}function Fh(t){var r=dr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:t},r.queue=t,t=t.dispatch=pv.bind(null,At,t),[r.memoizedState,t]}function As(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=At.updateQueue,r===null?(r={lastEffect:null,stores:null},At.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function zh(){return Bn().memoizedState}function Ro(t,r,o,u){var h=dr();At.flags|=t,h.memoizedState=As(1|r,o,void 0,u===void 0?null:u)}function Ao(t,r,o,u){var h=Bn();u=u===void 0?null:u;var g=void 0;if(kt!==null){var E=kt.memoizedState;if(g=E.destroy,u!==null&&Uu(u,E.deps)){h.memoizedState=As(r,o,g,u);return}}At.flags|=t,h.memoizedState=As(1|r,o,g,u)}function Bh(t,r){return Ro(8390656,8,t,r)}function zu(t,r){return Ao(2048,8,t,r)}function Hh(t,r){return Ao(4,2,t,r)}function Gh(t,r){return Ao(4,4,t,r)}function Vh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Wh(t,r,o){return o=o!=null?o.concat([t]):null,Ao(4,4,Vh.bind(null,r,t),o)}function Bu(){}function jh(t,r){var o=Bn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Uu(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function Xh(t,r){var o=Bn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Uu(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function Yh(t,r,o){return(Ui&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=o):($n(o,r)||(o=fn(),At.lanes|=o,Ii|=o,t.baseState=!0),r)}function hv(t,r){var o=Ke;Ke=o!==0&&4>o?o:4,t(!0);var u=Du.transition;Du.transition={};try{t(!1),r()}finally{Ke=o,Du.transition=u}}function qh(){return Bn().memoizedState}function fv(t,r,o){var u=si(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Kh(t))$h(r,o);else if(o=Rh(t,r,o,u),o!==null){var h=ln();tr(o,t,u,h),Zh(o,r,u)}}function pv(t,r,o){var u=si(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kh(t))$h(r,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,U=g(E,o);if(h.hasEagerState=!0,h.eagerState=U,$n(U,E)){var V=r.interleaved;V===null?(h.next=h,Au(r)):(h.next=V.next,V.next=h),r.interleaved=h;return}}catch{}finally{}o=Rh(t,r,h,u),o!==null&&(h=ln(),tr(o,t,u,h),Zh(o,r,u))}}function Kh(t){var r=t.alternate;return t===At||r!==null&&r===At}function $h(t,r){ws=To=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Zh(t,r,o){if((o&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Ri(t,o)}}var bo={readContext:zn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},mv={readContext:zn,useCallback:function(t,r){return dr().memoizedState=[t,r===void 0?null:r],t},useContext:zn,useEffect:Bh,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Ro(4194308,4,Vh.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Ro(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ro(4,2,t,r)},useMemo:function(t,r){var o=dr();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=dr();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=fv.bind(null,At,t),[u.memoizedState,t]},useRef:function(t){var r=dr();return t={current:t},r.memoizedState=t},useState:Fh,useDebugValue:Bu,useDeferredValue:function(t){return dr().memoizedState=t},useTransition:function(){var t=Fh(!1),r=t[0];return t=hv.bind(null,t[1]),dr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=At,h=dr();if(wt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Wt===null)throw Error(n(349));(Ui&30)!==0||Dh(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,Bh(Ih.bind(null,u,g,t),[t]),u.flags|=2048,As(9,Uh.bind(null,u,g,o,r),void 0,null),o},useId:function(){var t=dr(),r=Wt.identifierPrefix;if(wt){var o=Tr,u=wr;o=(u&~(1<<32-$t(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ts++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=dv++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},gv={readContext:zn,useCallback:jh,useContext:zn,useEffect:zu,useImperativeHandle:Wh,useInsertionEffect:Hh,useLayoutEffect:Gh,useMemo:Xh,useReducer:ku,useRef:zh,useState:function(){return ku(Rs)},useDebugValue:Bu,useDeferredValue:function(t){var r=Bn();return Yh(r,kt.memoizedState,t)},useTransition:function(){var t=ku(Rs)[0],r=Bn().memoizedState;return[t,r]},useMutableSource:Ph,useSyncExternalStore:Nh,useId:qh,unstable_isNewReconciler:!1},vv={readContext:zn,useCallback:jh,useContext:zn,useEffect:zu,useImperativeHandle:Wh,useInsertionEffect:Hh,useLayoutEffect:Gh,useMemo:Xh,useReducer:Fu,useRef:zh,useState:function(){return Fu(Rs)},useDebugValue:Bu,useDeferredValue:function(t){var r=Bn();return kt===null?r.memoizedState=t:Yh(r,kt.memoizedState,t)},useTransition:function(){var t=Fu(Rs)[0],r=Bn().memoizedState;return[t,r]},useMutableSource:Ph,useSyncExternalStore:Nh,useId:qh,unstable_isNewReconciler:!1};function Qn(t,r){if(t&&t.defaultProps){r=W({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Hu(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:W({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Co={isMounted:function(t){return(t=t._reactInternals)?Ce(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=ln(),h=si(t),g=Ar(u,h);g.payload=r,o!=null&&(g.callback=o),r=ni(t,g,h),r!==null&&(tr(r,t,h,u),So(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=ln(),h=si(t),g=Ar(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=ni(t,g,h),r!==null&&(tr(r,t,h,u),So(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=ln(),u=si(t),h=Ar(o,u);h.tag=2,r!=null&&(h.callback=r),r=ni(t,h,u),r!==null&&(tr(r,t,u,o),So(r,t,u))}};function Qh(t,r,o,u,h,g,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,g,E):r.prototype&&r.prototype.isPureReactComponent?!fs(o,u)||!fs(h,g):!0}function Jh(t,r,o){var u=!1,h=Jr,g=r.contextType;return typeof g=="object"&&g!==null?g=zn(g):(h=vn(r)?Ci:Zt.current,u=r.contextTypes,g=(u=u!=null)?ma(t,h):Jr),r=new r(o,g),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Co,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=g),r}function ef(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&Co.enqueueReplaceState(r,r.state,null)}function Gu(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},bu(t);var g=r.contextType;typeof g=="object"&&g!==null?h.context=zn(g):(g=vn(r)?Ci:Zt.current,h.context=ma(t,g)),h.state=t.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Hu(t,r,g,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Co.enqueueReplaceState(h,h.state,null),Eo(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ma(t,r){try{var o="",u=r;do o+=B(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:r,stack:h,digest:null}}function Vu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Wu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var _v=typeof WeakMap=="function"?WeakMap:Map;function tf(t,r,o){o=Ar(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Oo||(Oo=!0,ac=u),Wu(t,r)},o}function nf(t,r,o){o=Ar(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Wu(t,r)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Wu(t,r),typeof u!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),o}function rf(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new _v;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=Nv.bind(null,t,r,o),r.then(t,t))}function af(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function sf(t,r,o,u,h){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ar(-1,1),r.tag=2,ni(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var xv=G.ReactCurrentOwner,_n=!1;function on(t,r,o,u){r.child=t===null?Th(r,null,o,u):xa(r,t.child,o,u)}function of(t,r,o,u,h){o=o.render;var g=r.ref;return Sa(r,h),u=Iu(t,r,o,u,g,h),o=Ou(),t!==null&&!_n?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,br(t,r,h)):(wt&&o&&_u(r),r.flags|=1,on(t,r,u,h),r.child)}function lf(t,r,o,u,h){if(t===null){var g=o.type;return typeof g=="function"&&!hc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,uf(t,r,g,u,h)):(t=Go(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(g=t.child,(t.lanes&h)===0){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:fs,o(E,u)&&t.ref===r.ref)return br(t,r,h)}return r.flags|=1,t=li(g,u),t.ref=r.ref,t.return=r,r.child=t}function uf(t,r,o,u,h){if(t!==null){var g=t.memoizedProps;if(fs(g,u)&&t.ref===r.ref)if(_n=!1,r.pendingProps=u=g,(t.lanes&h)!==0)(t.flags&131072)!==0&&(_n=!0);else return r.lanes=t.lanes,br(t,r,h)}return ju(t,r,o,u,h)}function cf(t,r,o){var u=r.pendingProps,h=u.children,g=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Ta,Ln),Ln|=o;else{if((o&1073741824)===0)return t=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,_t(Ta,Ln),Ln|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,_t(Ta,Ln),Ln|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,_t(Ta,Ln),Ln|=u;return on(t,r,h,o),r.child}function df(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function ju(t,r,o,u,h){var g=vn(o)?Ci:Zt.current;return g=ma(r,g),Sa(r,h),o=Iu(t,r,o,u,g,h),u=Ou(),t!==null&&!_n?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,br(t,r,h)):(wt&&u&&_u(r),r.flags|=1,on(t,r,o,h),r.child)}function hf(t,r,o,u,h){if(vn(o)){var g=!0;fo(r)}else g=!1;if(Sa(r,h),r.stateNode===null)Po(t,r),Jh(r,o,u),Gu(r,o,u,h),u=!0;else if(t===null){var E=r.stateNode,U=r.memoizedProps;E.props=U;var V=E.context,se=o.contextType;typeof se=="object"&&se!==null?se=zn(se):(se=vn(o)?Ci:Zt.current,se=ma(r,se));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||V!==se)&&ef(r,E,u,se),ti=!1;var _e=r.memoizedState;E.state=_e,Eo(r,u,E,h),V=r.memoizedState,U!==u||_e!==V||gn.current||ti?(typeof ye=="function"&&(Hu(r,o,ye,u),V=r.memoizedState),(U=ti||Qh(r,o,U,u,_e,V,se))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=V),E.props=u,E.state=V,E.context=se,u=U):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{E=r.stateNode,Ah(t,r),U=r.memoizedProps,se=r.type===r.elementType?U:Qn(r.type,U),E.props=se,Se=r.pendingProps,_e=E.context,V=o.contextType,typeof V=="object"&&V!==null?V=zn(V):(V=vn(o)?Ci:Zt.current,V=ma(r,V));var Oe=o.getDerivedStateFromProps;(ye=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||_e!==V)&&ef(r,E,u,V),ti=!1,_e=r.memoizedState,E.state=_e,Eo(r,u,E,h);var Fe=r.memoizedState;U!==Se||_e!==Fe||gn.current||ti?(typeof Oe=="function"&&(Hu(r,o,Oe,u),Fe=r.memoizedState),(se=ti||Qh(r,o,se,u,_e,Fe,V)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Fe,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Fe,V)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&_e===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&_e===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Fe),E.props=u,E.state=Fe,E.context=V,u=se):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&_e===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&_e===t.memoizedState||(r.flags|=1024),u=!1)}return Xu(t,r,o,u,g,h)}function Xu(t,r,o,u,h,g){df(t,r);var E=(r.flags&128)!==0;if(!u&&!E)return h&&gh(r,o,!1),br(t,r,g);u=r.stateNode,xv.current=r;var U=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&E?(r.child=xa(r,t.child,null,g),r.child=xa(r,null,U,g)):on(t,r,U,g),r.memoizedState=u.state,h&&gh(r,o,!0),r.child}function ff(t){var r=t.stateNode;r.pendingContext?ph(t,r.pendingContext,r.pendingContext!==r.context):r.context&&ph(t,r.context,!1),Cu(t,r.containerInfo)}function pf(t,r,o,u,h){return _a(),Eu(h),r.flags|=256,on(t,r,o,u),r.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function mf(t,r,o){var u=r.pendingProps,h=Rt.current,g=!1,E=(r.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(h&2)!==0),U?(g=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),_t(Rt,h&1),t===null)return Su(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=u.children,t=u.fallback,g?(u=r.mode,g=r.child,E={mode:"hidden",children:E},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Vo(E,u,0,null),t=zi(t,u,o,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=qu(o),r.memoizedState=Yu,t):Ku(r,E));if(h=t.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return yv(t,r,E,u,U,h,o);if(g){g=u.fallback,E=r.mode,h=t.child,U=h.sibling;var V={mode:"hidden",children:u.children};return(E&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=V,r.deletions=null):(u=li(h,V),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=li(U,g):(g=zi(g,E,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,E=t.child.memoizedState,E=E===null?qu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=t.childLanes&~o,r.memoizedState=Yu,u}return g=t.child,t=g.sibling,u=li(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function Ku(t,r){return r=Vo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Lo(t,r,o,u){return u!==null&&Eu(u),xa(r,t.child,null,o),t=Ku(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function yv(t,r,o,u,h,g,E){if(o)return r.flags&256?(r.flags&=-257,u=Vu(Error(n(422))),Lo(t,r,E,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=Vo({mode:"visible",children:u.children},h,0,null),g=zi(g,h,E,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&xa(r,t.child,null,E),r.child.memoizedState=qu(E),r.memoizedState=Yu,g);if((r.mode&1)===0)return Lo(t,r,E,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(n(419)),u=Vu(g,u,void 0),Lo(t,r,E,u)}if(U=(E&t.childLanes)!==0,_n||U){if(u=Wt,u!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Rr(t,h),tr(u,t,h,-1))}return dc(),u=Vu(Error(n(421))),Lo(t,r,E,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=Dv.bind(null,t),h._reactRetry=r,null):(t=g.treeContext,Cn=Zr(h.nextSibling),bn=r,wt=!0,Zn=null,t!==null&&(kn[Fn++]=wr,kn[Fn++]=Tr,kn[Fn++]=Li,wr=t.id,Tr=t.overflow,Li=r),r=Ku(r,u.children),r.flags|=4096,r)}function gf(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),Ru(t.return,r,o)}function $u(t,r,o,u,h){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function vf(t,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(on(t,r,u.children,o),u=Rt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gf(t,o,r);else if(t.tag===19)gf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(_t(Rt,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&Mo(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),$u(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&Mo(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}$u(r,!0,o,null,g);break;case"together":$u(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Po(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function br(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Ii|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=li(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=li(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Sv(t,r,o){switch(r.tag){case 3:ff(r),_a();break;case 5:Lh(r);break;case 1:vn(r.type)&&fo(r);break;case 4:Cu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;_t(xo,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(_t(Rt,Rt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?mf(t,r,o):(_t(Rt,Rt.current&1),t=br(t,r,o),t!==null?t.sibling:null);_t(Rt,Rt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(t.flags&128)!==0){if(u)return vf(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),_t(Rt,Rt.current),u)break;return null;case 22:case 23:return r.lanes=0,cf(t,r,o)}return br(t,r,o)}var _f,Zu,xf,yf;_f=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Zu=function(){},xf=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Di(cr.current);var g=null;switch(o){case"input":h=P(t,h),u=P(t,u),g=[];break;case"select":h=W({},h,{value:void 0}),u=W({},u,{value:void 0}),g=[];break;case"textarea":h=Be(t,h),u=Be(t,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=uo)}ne(o,u);var E;o=null;for(se in h)if(!u.hasOwnProperty(se)&&h.hasOwnProperty(se)&&h[se]!=null)if(se==="style"){var U=h[se];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(s.hasOwnProperty(se)?g||(g=[]):(g=g||[]).push(se,null));for(se in u){var V=u[se];if(U=h!=null?h[se]:void 0,u.hasOwnProperty(se)&&V!==U&&(V!=null||U!=null))if(se==="style")if(U){for(E in U)!U.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in V)V.hasOwnProperty(E)&&U[E]!==V[E]&&(o||(o={}),o[E]=V[E])}else o||(g||(g=[]),g.push(se,o)),o=V;else se==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(g=g||[]).push(se,V)):se==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(se,""+V):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(s.hasOwnProperty(se)?(V!=null&&se==="onScroll"&&yt("scroll",t),g||U===V||(g=[])):(g=g||[]).push(se,V))}o&&(g=g||[]).push("style",o);var se=g;(r.updateQueue=se)&&(r.flags|=4)}},yf=function(t,r,o,u){o!==u&&(r.flags|=4)};function bs(t,r){if(!wt)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Jt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function Ev(t,r,o){var u=r.pendingProps;switch(xu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(r),null;case 1:return vn(r.type)&&ho(),Jt(r),null;case 3:return u=r.stateNode,Ea(),St(gn),St(Zt),Nu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(vo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Zn!==null&&(lc(Zn),Zn=null))),Zu(t,r),Jt(r),null;case 5:Lu(r);var h=Di(Ms.current);if(o=r.type,t!==null&&r.stateNode!=null)xf(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Jt(r),null}if(t=Di(cr.current),vo(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[ur]=r,u[_s]=g,t=(r.mode&1)!==0,o){case"dialog":yt("cancel",u),yt("close",u);break;case"iframe":case"object":case"embed":yt("load",u);break;case"video":case"audio":for(h=0;h<ms.length;h++)yt(ms[h],u);break;case"source":yt("error",u);break;case"img":case"image":case"link":yt("error",u),yt("load",u);break;case"details":yt("toggle",u);break;case"input":we(u,g),yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},yt("invalid",u);break;case"textarea":De(u,g),yt("invalid",u)}ne(o,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var U=g[E];E==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&lo(u.textContent,U,t),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&lo(u.textContent,U,t),h=["children",""+U]):s.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&yt("scroll",u)}switch(o){case"input":Ee(u),ve(u,g,!0);break;case"textarea":Ee(u),Xe(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=uo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mt(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(o,{is:u.is}):(t=E.createElement(o),o==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,o),t[ur]=r,t[_s]=u,_f(t,r,!1,!1),r.stateNode=t;e:{switch(E=Yt(o,u),o){case"dialog":yt("cancel",t),yt("close",t),h=u;break;case"iframe":case"object":case"embed":yt("load",t),h=u;break;case"video":case"audio":for(h=0;h<ms.length;h++)yt(ms[h],t);h=u;break;case"source":yt("error",t),h=u;break;case"img":case"image":case"link":yt("error",t),yt("load",t),h=u;break;case"details":yt("toggle",t),h=u;break;case"input":we(t,u),h=P(t,u),yt("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=W({},u,{value:void 0}),yt("invalid",t);break;case"textarea":De(t,u),h=Be(t,u),yt("invalid",t);break;default:h=u}ne(o,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var V=U[g];g==="style"?$e(t,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Je(t,V)):g==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&Tn(t,V):typeof V=="number"&&Tn(t,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?V!=null&&g==="onScroll"&&yt("scroll",t):V!=null&&S(t,g,V,E))}switch(o){case"input":Ee(t),ve(t,u,!1);break;case"textarea":Ee(t),Xe(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Z(u.value));break;case"select":t.multiple=!!u.multiple,g=u.value,g!=null?Pe(t,!!u.multiple,g,!1):u.defaultValue!=null&&Pe(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=uo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Jt(r),null;case 6:if(t&&r.stateNode!=null)yf(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Di(Ms.current),Di(cr.current),vo(r)){if(u=r.stateNode,o=r.memoizedProps,u[ur]=r,(g=u.nodeValue!==o)&&(t=bn,t!==null))switch(t.tag){case 3:lo(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(u.nodeValue,o,(t.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[ur]=r,r.stateNode=u}return Jt(r),null;case 13:if(St(Rt),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Cn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Eh(),_a(),r.flags|=98560,g=!1;else if(g=vo(r),u!==null&&u.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[ur]=r}else _a(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Jt(r),g=!1}else Zn!==null&&(lc(Zn),Zn=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Rt.current&1)!==0?Ft===0&&(Ft=3):dc())),r.updateQueue!==null&&(r.flags|=4),Jt(r),null);case 4:return Ea(),Zu(t,r),t===null&&gs(r.stateNode.containerInfo),Jt(r),null;case 10:return Tu(r.type._context),Jt(r),null;case 17:return vn(r.type)&&ho(),Jt(r),null;case 19:if(St(Rt),g=r.memoizedState,g===null)return Jt(r),null;if(u=(r.flags&128)!==0,E=g.rendering,E===null)if(u)bs(g,!1);else{if(Ft!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(E=Mo(t),E!==null){for(r.flags|=128,bs(g,!1),u=E.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,t=u,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,t=E.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return _t(Rt,Rt.current&1|2),r.child}t=t.sibling}g.tail!==null&&mt()>Ra&&(r.flags|=128,u=!0,bs(g,!1),r.lanes=4194304)}else{if(!u)if(t=Mo(E),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),bs(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!wt)return Jt(r),null}else 2*mt()-g.renderingStartTime>Ra&&o!==1073741824&&(r.flags|=128,u=!0,bs(g,!1),r.lanes=4194304);g.isBackwards?(E.sibling=r.child,r.child=E):(o=g.last,o!==null?o.sibling=E:r.child=E,g.last=E)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=mt(),r.sibling=null,o=Rt.current,_t(Rt,u?o&1|2:o&1),r):(Jt(r),null);case 22:case 23:return cc(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Ln&1073741824)!==0&&(Jt(r),r.subtreeFlags&6&&(r.flags|=8192)):Jt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Mv(t,r){switch(xu(r),r.tag){case 1:return vn(r.type)&&ho(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ea(),St(gn),St(Zt),Nu(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Lu(r),null;case 13:if(St(Rt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));_a()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return St(Rt),null;case 4:return Ea(),null;case 10:return Tu(r.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var No=!1,en=!1,wv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function wa(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Ct(t,r,u)}else o.current=null}function Qu(t,r,o){try{o()}catch(u){Ct(t,r,u)}}var Sf=!1;function Tv(t,r){if(cu=Zs,t=Qd(),nu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,U=-1,V=-1,se=0,ye=0,Se=t,_e=null;t:for(;;){for(var Oe;Se!==o||h!==0&&Se.nodeType!==3||(U=E+h),Se!==g||u!==0&&Se.nodeType!==3||(V=E+u),Se.nodeType===3&&(E+=Se.nodeValue.length),(Oe=Se.firstChild)!==null;)_e=Se,Se=Oe;for(;;){if(Se===t)break t;if(_e===o&&++se===h&&(U=E),_e===g&&++ye===u&&(V=E),(Oe=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Oe}o=U===-1||V===-1?null:{start:U,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(du={focusedElem:t,selectionRange:o},Zs=!1,ke=r;ke!==null;)if(r=ke,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ke=t;else for(;ke!==null;){r=ke;try{var Fe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var ze=Fe.memoizedProps,Pt=Fe.memoizedState,J=r.stateNode,Y=J.getSnapshotBeforeUpdate(r.elementType===r.type?ze:Qn(r.type,ze),Pt);J.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ct(r,r.return,Te)}if(t=r.sibling,t!==null){t.return=r.return,ke=t;break}ke=r.return}return Fe=Sf,Sf=!1,Fe}function Cs(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var g=h.destroy;h.destroy=void 0,g!==void 0&&Qu(r,o,g)}h=h.next}while(h!==u)}}function Do(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Ju(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Ef(t){var r=t.alternate;r!==null&&(t.alternate=null,Ef(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ur],delete r[_s],delete r[mu],delete r[ov],delete r[lv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mf(t){return t.tag===5||t.tag===3||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ec(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=uo));else if(u!==4&&(t=t.child,t!==null))for(ec(t,r,o),t=t.sibling;t!==null;)ec(t,r,o),t=t.sibling}function tc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(tc(t,r,o),t=t.sibling;t!==null;)tc(t,r,o),t=t.sibling}var qt=null,Jn=!1;function ri(t,r,o){for(o=o.child;o!==null;)Tf(t,r,o),o=o.sibling}function Tf(t,r,o){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(or,o)}catch{}switch(o.tag){case 5:en||wa(o,r);case 6:var u=qt,h=Jn;qt=null,ri(t,r,o),qt=u,Jn=h,qt!==null&&(Jn?(t=qt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):qt.removeChild(o.stateNode));break;case 18:qt!==null&&(Jn?(t=qt,o=o.stateNode,t.nodeType===8?pu(t.parentNode,o):t.nodeType===1&&pu(t,o),os(t)):pu(qt,o.stateNode));break;case 4:u=qt,h=Jn,qt=o.stateNode.containerInfo,Jn=!0,ri(t,r,o),qt=u,Jn=h;break;case 0:case 11:case 14:case 15:if(!en&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Qu(o,r,E),h=h.next}while(h!==u)}ri(t,r,o);break;case 1:if(!en&&(wa(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){Ct(o,r,U)}ri(t,r,o);break;case 21:ri(t,r,o);break;case 22:o.mode&1?(en=(u=en)||o.memoizedState!==null,ri(t,r,o),en=u):ri(t,r,o);break;default:ri(t,r,o)}}function Rf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new wv),r.forEach(function(u){var h=Uv.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function er(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=t,E=r,U=E;e:for(;U!==null;){switch(U.tag){case 5:qt=U.stateNode,Jn=!1;break e;case 3:qt=U.stateNode.containerInfo,Jn=!0;break e;case 4:qt=U.stateNode.containerInfo,Jn=!0;break e}U=U.return}if(qt===null)throw Error(n(160));Tf(g,E,h),qt=null,Jn=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(se){Ct(h,r,se)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Af(r,t),r=r.sibling}function Af(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(r,t),hr(t),u&4){try{Cs(3,t,t.return),Do(3,t)}catch(ze){Ct(t,t.return,ze)}try{Cs(5,t,t.return)}catch(ze){Ct(t,t.return,ze)}}break;case 1:er(r,t),hr(t),u&512&&o!==null&&wa(o,o.return);break;case 5:if(er(r,t),hr(t),u&512&&o!==null&&wa(o,o.return),t.flags&32){var h=t.stateNode;try{Tn(h,"")}catch(ze){Ct(t,t.return,ze)}}if(u&4&&(h=t.stateNode,h!=null)){var g=t.memoizedProps,E=o!==null?o.memoizedProps:g,U=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&he(h,g),Yt(U,E);var se=Yt(U,g);for(E=0;E<V.length;E+=2){var ye=V[E],Se=V[E+1];ye==="style"?$e(h,Se):ye==="dangerouslySetInnerHTML"?Je(h,Se):ye==="children"?Tn(h,Se):S(h,ye,Se,se)}switch(U){case"input":ue(h,g);break;case"textarea":Ue(h,g);break;case"select":var _e=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Oe=g.value;Oe!=null?Pe(h,!!g.multiple,Oe,!1):_e!==!!g.multiple&&(g.defaultValue!=null?Pe(h,!!g.multiple,g.defaultValue,!0):Pe(h,!!g.multiple,g.multiple?[]:"",!1))}h[_s]=g}catch(ze){Ct(t,t.return,ze)}}break;case 6:if(er(r,t),hr(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,g=t.memoizedProps;try{h.nodeValue=g}catch(ze){Ct(t,t.return,ze)}}break;case 3:if(er(r,t),hr(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{os(r.containerInfo)}catch(ze){Ct(t,t.return,ze)}break;case 4:er(r,t),hr(t);break;case 13:er(r,t),hr(t),h=t.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(ic=mt())),u&4&&Rf(t);break;case 22:if(ye=o!==null&&o.memoizedState!==null,t.mode&1?(en=(se=en)||ye,er(r,t),en=se):er(r,t),hr(t),u&8192){if(se=t.memoizedState!==null,(t.stateNode.isHidden=se)&&!ye&&(t.mode&1)!==0)for(ke=t,ye=t.child;ye!==null;){for(Se=ke=ye;ke!==null;){switch(_e=ke,Oe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Cs(4,_e,_e.return);break;case 1:wa(_e,_e.return);var Fe=_e.stateNode;if(typeof Fe.componentWillUnmount=="function"){u=_e,o=_e.return;try{r=u,Fe.props=r.memoizedProps,Fe.state=r.memoizedState,Fe.componentWillUnmount()}catch(ze){Ct(u,o,ze)}}break;case 5:wa(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Lf(Se);continue}}Oe!==null?(Oe.return=_e,ke=Oe):Lf(Se)}ye=ye.sibling}e:for(ye=null,Se=t;;){if(Se.tag===5){if(ye===null){ye=Se;try{h=Se.stateNode,se?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Se.stateNode,V=Se.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=Ie("display",E))}catch(ze){Ct(t,t.return,ze)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=se?"":Se.memoizedProps}catch(ze){Ct(t,t.return,ze)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:er(r,t),hr(t),u&4&&Rf(t);break;case 21:break;default:er(r,t),hr(t)}}function hr(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Mf(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Tn(h,""),u.flags&=-33);var g=wf(t);tc(t,g,h);break;case 3:case 4:var E=u.stateNode.containerInfo,U=wf(t);ec(t,U,E);break;default:throw Error(n(161))}}catch(V){Ct(t,t.return,V)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Rv(t,r,o){ke=t,bf(t)}function bf(t,r,o){for(var u=(t.mode&1)!==0;ke!==null;){var h=ke,g=h.child;if(h.tag===22&&u){var E=h.memoizedState!==null||No;if(!E){var U=h.alternate,V=U!==null&&U.memoizedState!==null||en;U=No;var se=en;if(No=E,(en=V)&&!se)for(ke=h;ke!==null;)E=ke,V=E.child,E.tag===22&&E.memoizedState!==null?Pf(h):V!==null?(V.return=E,ke=V):Pf(h);for(;g!==null;)ke=g,bf(g),g=g.sibling;ke=h,No=U,en=se}Cf(t)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,ke=g):Cf(t)}}function Cf(t){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:en||Do(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!en)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Qn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Ch(r,g,u);break;case 3:var E=r.updateQueue;if(E!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ch(r,E,o)}break;case 5:var U=r.stateNode;if(o===null&&r.flags&4){o=U;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var se=r.alternate;if(se!==null){var ye=se.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&os(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}en||r.flags&512&&Ju(r)}catch(_e){Ct(r,r.return,_e)}}if(r===t){ke=null;break}if(o=r.sibling,o!==null){o.return=r.return,ke=o;break}ke=r.return}}function Lf(t){for(;ke!==null;){var r=ke;if(r===t){ke=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ke=o;break}ke=r.return}}function Pf(t){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Do(4,r)}catch(V){Ct(r,o,V)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(V){Ct(r,h,V)}}var g=r.return;try{Ju(r)}catch(V){Ct(r,g,V)}break;case 5:var E=r.return;try{Ju(r)}catch(V){Ct(r,E,V)}}}catch(V){Ct(r,r.return,V)}if(r===t){ke=null;break}var U=r.sibling;if(U!==null){U.return=r.return,ke=U;break}ke=r.return}}var Av=Math.ceil,Uo=G.ReactCurrentDispatcher,nc=G.ReactCurrentOwner,Hn=G.ReactCurrentBatchConfig,ht=0,Wt=null,Nt=null,Kt=0,Ln=0,Ta=Qr(0),Ft=0,Ls=null,Ii=0,Io=0,rc=0,Ps=null,xn=null,ic=0,Ra=1/0,Cr=null,Oo=!1,ac=null,ii=null,ko=!1,ai=null,Fo=0,Ns=0,sc=null,zo=-1,Bo=0;function ln(){return(ht&6)!==0?mt():zo!==-1?zo:zo=mt()}function si(t){return(t.mode&1)===0?1:(ht&2)!==0&&Kt!==0?Kt&-Kt:cv.transition!==null?(Bo===0&&(Bo=fn()),Bo):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Nd(t.type)),t)}function tr(t,r,o,u){if(50<Ns)throw Ns=0,sc=null,Error(n(185));Wr(t,o,u),((ht&2)===0||t!==Wt)&&(t===Wt&&((ht&2)===0&&(Io|=o),Ft===4&&oi(t,Kt)),yn(t,u),o===1&&ht===0&&(r.mode&1)===0&&(Ra=mt()+500,po&&ei()))}function yn(t,r){var o=t.callbackNode;dt(t,r);var u=wi(t,t===Wt?Kt:0);if(u===0)o!==null&&vt(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&vt(o),r===1)t.tag===0?uv(Df.bind(null,t)):vh(Df.bind(null,t)),av(function(){(ht&6)===0&&ei()}),o=null;else{switch(lr(u)){case 1:o=Tt;break;case 4:o=an;break;case 16:o=Ot;break;case 536870912:o=ut;break;default:o=Ot}o=Hf(o,Nf.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Nf(t,r){if(zo=-1,Bo=0,(ht&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Aa()&&t.callbackNode!==o)return null;var u=wi(t,t===Wt?Kt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=Ho(t,u);else{r=u;var h=ht;ht|=2;var g=If();(Wt!==t||Kt!==r)&&(Cr=null,Ra=mt()+500,ki(t,r));do try{Lv();break}catch(U){Uf(t,U)}while(!0);wu(),Uo.current=g,ht=h,Nt!==null?r=0:(Wt=null,Kt=0,r=Ft)}if(r!==0){if(r===2&&(h=ts(t),h!==0&&(u=h,r=oc(t,h))),r===1)throw o=Ls,ki(t,0),oi(t,u),yn(t,mt()),o;if(r===6)oi(t,u);else{if(h=t.current.alternate,(u&30)===0&&!bv(h)&&(r=Ho(t,u),r===2&&(g=ts(t),g!==0&&(u=g,r=oc(t,g))),r===1))throw o=Ls,ki(t,0),oi(t,u),yn(t,mt()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Fi(t,xn,Cr);break;case 3:if(oi(t,u),(u&130023424)===u&&(r=ic+500-mt(),10<r)){if(wi(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){ln(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=fu(Fi.bind(null,t,xn,Cr),r);break}Fi(t,xn,Cr);break;case 4:if(oi(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var E=31-$t(u);g=1<<E,E=r[E],E>h&&(h=E),u&=~g}if(u=h,u=mt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Av(u/1960))-u,10<u){t.timeoutHandle=fu(Fi.bind(null,t,xn,Cr),u);break}Fi(t,xn,Cr);break;case 5:Fi(t,xn,Cr);break;default:throw Error(n(329))}}}return yn(t,mt()),t.callbackNode===o?Nf.bind(null,t):null}function oc(t,r){var o=Ps;return t.current.memoizedState.isDehydrated&&(ki(t,r).flags|=256),t=Ho(t,r),t!==2&&(r=xn,xn=o,r!==null&&lc(r)),t}function lc(t){xn===null?xn=t:xn.push.apply(xn,t)}function bv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!$n(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oi(t,r){for(r&=~rc,r&=~Io,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-$t(r),u=1<<o;t[o]=-1,r&=~u}}function Df(t){if((ht&6)!==0)throw Error(n(327));Aa();var r=wi(t,0);if((r&1)===0)return yn(t,mt()),null;var o=Ho(t,r);if(t.tag!==0&&o===2){var u=ts(t);u!==0&&(r=u,o=oc(t,u))}if(o===1)throw o=Ls,ki(t,0),oi(t,r),yn(t,mt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Fi(t,xn,Cr),yn(t,mt()),null}function uc(t,r){var o=ht;ht|=1;try{return t(r)}finally{ht=o,ht===0&&(Ra=mt()+500,po&&ei())}}function Oi(t){ai!==null&&ai.tag===0&&(ht&6)===0&&Aa();var r=ht;ht|=1;var o=Hn.transition,u=Ke;try{if(Hn.transition=null,Ke=1,t)return t()}finally{Ke=u,Hn.transition=o,ht=r,(ht&6)===0&&ei()}}function cc(){Ln=Ta.current,St(Ta)}function ki(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,iv(o)),Nt!==null)for(o=Nt.return;o!==null;){var u=o;switch(xu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ho();break;case 3:Ea(),St(gn),St(Zt),Nu();break;case 5:Lu(u);break;case 4:Ea();break;case 13:St(Rt);break;case 19:St(Rt);break;case 10:Tu(u.type._context);break;case 22:case 23:cc()}o=o.return}if(Wt=t,Nt=t=li(t.current,null),Kt=Ln=r,Ft=0,Ls=null,rc=Io=Ii=0,xn=Ps=null,Ni!==null){for(r=0;r<Ni.length;r++)if(o=Ni[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var E=g.next;g.next=h,u.next=E}o.pending=u}Ni=null}return t}function Uf(t,r){do{var o=Nt;try{if(wu(),wo.current=bo,To){for(var u=At.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}To=!1}if(Ui=0,Vt=kt=At=null,ws=!1,Ts=0,nc.current=null,o===null||o.return===null){Ft=1,Ls=r,Nt=null;break}e:{var g=t,E=o.return,U=o,V=r;if(r=Kt,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var se=V,ye=U,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Oe=af(E);if(Oe!==null){Oe.flags&=-257,sf(Oe,E,U,g,r),Oe.mode&1&&rf(g,se,r),r=Oe,V=se;var Fe=r.updateQueue;if(Fe===null){var ze=new Set;ze.add(V),r.updateQueue=ze}else Fe.add(V);break e}else{if((r&1)===0){rf(g,se,r),dc();break e}V=Error(n(426))}}else if(wt&&U.mode&1){var Pt=af(E);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),sf(Pt,E,U,g,r),Eu(Ma(V,U));break e}}g=V=Ma(V,U),Ft!==4&&(Ft=2),Ps===null?Ps=[g]:Ps.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var J=tf(g,V,r);bh(g,J);break e;case 1:U=V;var Y=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(ii===null||!ii.has(ee)))){g.flags|=65536,r&=-r,g.lanes|=r;var Te=nf(g,U,r);bh(g,Te);break e}}g=g.return}while(g!==null)}kf(o)}catch(He){r=He,Nt===o&&o!==null&&(Nt=o=o.return);continue}break}while(!0)}function If(){var t=Uo.current;return Uo.current=bo,t===null?bo:t}function dc(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Wt===null||(Ii&268435455)===0&&(Io&268435455)===0||oi(Wt,Kt)}function Ho(t,r){var o=ht;ht|=2;var u=If();(Wt!==t||Kt!==r)&&(Cr=null,ki(t,r));do try{Cv();break}catch(h){Uf(t,h)}while(!0);if(wu(),ht=o,Uo.current=u,Nt!==null)throw Error(n(261));return Wt=null,Kt=0,Ft}function Cv(){for(;Nt!==null;)Of(Nt)}function Lv(){for(;Nt!==null&&!Rn();)Of(Nt)}function Of(t){var r=Bf(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,r===null?kf(t):Nt=r,nc.current=null}function kf(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Ev(o,r,Ln),o!==null){Nt=o;return}}else{if(o=Mv(o,r),o!==null){o.flags&=32767,Nt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Nt=null;return}}if(r=r.sibling,r!==null){Nt=r;return}Nt=r=t}while(r!==null);Ft===0&&(Ft=5)}function Fi(t,r,o){var u=Ke,h=Hn.transition;try{Hn.transition=null,Ke=1,Pv(t,r,o,u)}finally{Hn.transition=h,Ke=u}return null}function Pv(t,r,o,u){do Aa();while(ai!==null);if((ht&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=o.lanes|o.childLanes;if(Ti(t,g),t===Wt&&(Nt=Wt=null,Kt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ko||(ko=!0,Hf(Ot,function(){return Aa(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Hn.transition,Hn.transition=null;var E=Ke;Ke=1;var U=ht;ht|=4,nc.current=null,Tv(t,o),Af(o,t),Zg(du),Zs=!!cu,du=cu=null,t.current=o,Rv(o),qn(),ht=U,Ke=E,Hn.transition=g}else t.current=o;if(ko&&(ko=!1,ai=t,Fo=h),g=t.pendingLanes,g===0&&(ii=null),Bl(o.stateNode),yn(t,mt()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Oo)throw Oo=!1,t=ac,ac=null,t;return(Fo&1)!==0&&t.tag!==0&&Aa(),g=t.pendingLanes,(g&1)!==0?t===sc?Ns++:(Ns=0,sc=t):Ns=0,ei(),null}function Aa(){if(ai!==null){var t=lr(Fo),r=Hn.transition,o=Ke;try{if(Hn.transition=null,Ke=16>t?16:t,ai===null)var u=!1;else{if(t=ai,ai=null,Fo=0,(ht&6)!==0)throw Error(n(331));var h=ht;for(ht|=4,ke=t.current;ke!==null;){var g=ke,E=g.child;if((ke.flags&16)!==0){var U=g.deletions;if(U!==null){for(var V=0;V<U.length;V++){var se=U[V];for(ke=se;ke!==null;){var ye=ke;switch(ye.tag){case 0:case 11:case 15:Cs(8,ye,g)}var Se=ye.child;if(Se!==null)Se.return=ye,ke=Se;else for(;ke!==null;){ye=ke;var _e=ye.sibling,Oe=ye.return;if(Ef(ye),ye===se){ke=null;break}if(_e!==null){_e.return=Oe,ke=_e;break}ke=Oe}}}var Fe=g.alternate;if(Fe!==null){var ze=Fe.child;if(ze!==null){Fe.child=null;do{var Pt=ze.sibling;ze.sibling=null,ze=Pt}while(ze!==null)}}ke=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ke=E;else e:for(;ke!==null;){if(g=ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Cs(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,ke=J;break e}ke=g.return}}var Y=t.current;for(ke=Y;ke!==null;){E=ke;var ee=E.child;if((E.subtreeFlags&2064)!==0&&ee!==null)ee.return=E,ke=ee;else e:for(E=Y;ke!==null;){if(U=ke,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Do(9,U)}}catch(He){Ct(U,U.return,He)}if(U===E){ke=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ke=Te;break e}ke=U.return}}if(ht=h,ei(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(or,t)}catch{}u=!0}return u}finally{Ke=o,Hn.transition=r}}return!1}function Ff(t,r,o){r=Ma(o,r),r=tf(t,r,1),t=ni(t,r,1),r=ln(),t!==null&&(Wr(t,1,r),yn(t,r))}function Ct(t,r,o){if(t.tag===3)Ff(t,t,o);else for(;r!==null;){if(r.tag===3){Ff(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ii===null||!ii.has(u))){t=Ma(o,t),t=nf(r,t,1),r=ni(r,t,1),t=ln(),r!==null&&(Wr(r,1,t),yn(r,t));break}}r=r.return}}function Nv(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=ln(),t.pingedLanes|=t.suspendedLanes&o,Wt===t&&(Kt&o)===o&&(Ft===4||Ft===3&&(Kt&130023424)===Kt&&500>mt()-ic?ki(t,0):rc|=o),yn(t,r)}function zf(t,r){r===0&&((t.mode&1)===0?r=1:(r=ra,ra<<=1,(ra&130023424)===0&&(ra=4194304)));var o=ln();t=Rr(t,r),t!==null&&(Wr(t,r,o),yn(t,o))}function Dv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),zf(t,o)}function Uv(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),zf(t,o)}var Bf;Bf=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||gn.current)_n=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return _n=!1,Sv(t,r,o);_n=(t.flags&131072)!==0}else _n=!1,wt&&(r.flags&1048576)!==0&&_h(r,go,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Po(t,r),t=r.pendingProps;var h=ma(r,Zt.current);Sa(r,o),h=Iu(null,r,u,t,h,o);var g=Ou();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,vn(u)?(g=!0,fo(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,bu(r),h.updater=Co,r.stateNode=h,h._reactInternals=r,Gu(r,u,t,o),r=Xu(null,r,u,!0,g,o)):(r.tag=0,wt&&g&&_u(r),on(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Po(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=Ov(u),t=Qn(u,t),h){case 0:r=ju(null,r,u,t,o);break e;case 1:r=hf(null,r,u,t,o);break e;case 11:r=of(null,r,u,t,o);break e;case 14:r=lf(null,r,u,Qn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),ju(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),hf(t,r,u,h,o);case 3:e:{if(ff(r),t===null)throw Error(n(387));u=r.pendingProps,g=r.memoizedState,h=g.element,Ah(t,r),Eo(r,u,null,o);var E=r.memoizedState;if(u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ma(Error(n(423)),r),r=pf(t,r,u,o,h);break e}else if(u!==h){h=Ma(Error(n(424)),r),r=pf(t,r,u,o,h);break e}else for(Cn=Zr(r.stateNode.containerInfo.firstChild),bn=r,wt=!0,Zn=null,o=Th(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_a(),u===h){r=br(t,r,o);break e}on(t,r,u,o)}r=r.child}return r;case 5:return Lh(r),t===null&&Su(r),u=r.type,h=r.pendingProps,g=t!==null?t.memoizedProps:null,E=h.children,hu(u,h)?E=null:g!==null&&hu(u,g)&&(r.flags|=32),df(t,r),on(t,r,E,o),r.child;case 6:return t===null&&Su(r),null;case 13:return mf(t,r,o);case 4:return Cu(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=xa(r,null,u,o):on(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),of(t,r,u,h,o);case 7:return on(t,r,r.pendingProps,o),r.child;case 8:return on(t,r,r.pendingProps.children,o),r.child;case 12:return on(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,E=h.value,_t(xo,u._currentValue),u._currentValue=E,g!==null)if($n(g.value,E)){if(g.children===h.children&&!gn.current){r=br(t,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var U=g.dependencies;if(U!==null){E=g.child;for(var V=U.firstContext;V!==null;){if(V.context===u){if(g.tag===1){V=Ar(-1,o&-o),V.tag=2;var se=g.updateQueue;if(se!==null){se=se.shared;var ye=se.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),se.pending=V}}g.lanes|=o,V=g.alternate,V!==null&&(V.lanes|=o),Ru(g.return,o,r),U.lanes|=o;break}V=V.next}}else if(g.tag===10)E=g.type===r.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Ru(E,o,r),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===r){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}on(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Sa(r,o),h=zn(h),u=u(h),r.flags|=1,on(t,r,u,o),r.child;case 14:return u=r.type,h=Qn(u,r.pendingProps),h=Qn(u.type,h),lf(t,r,u,h,o);case 15:return uf(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),Po(t,r),r.tag=1,vn(u)?(t=!0,fo(r)):t=!1,Sa(r,o),Jh(r,u,h),Gu(r,u,h,o),Xu(null,r,u,!0,t,o);case 19:return vf(t,r,o);case 22:return cf(t,r,o)}throw Error(n(156,r.tag))};function Hf(t,r){return it(t,r)}function Iv(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,r,o,u){return new Iv(t,r,o,u)}function hc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ov(t){if(typeof t=="function")return hc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===F)return 11;if(t===me)return 14}return 2}function li(t,r){var o=t.alternate;return o===null?(o=Gn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Go(t,r,o,u,h,g){var E=2;if(u=t,typeof t=="function")hc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case N:return zi(o.children,h,g,r);case re:E=8,h|=8;break;case K:return t=Gn(12,o,r,h|2),t.elementType=K,t.lanes=g,t;case ie:return t=Gn(13,o,r,h),t.elementType=ie,t.lanes=g,t;case te:return t=Gn(19,o,r,h),t.elementType=te,t.lanes=g,t;case ae:return Vo(o,h,g,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q:E=10;break e;case le:E=9;break e;case F:E=11;break e;case me:E=14;break e;case Me:E=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Gn(E,o,r,h),r.elementType=t,r.type=u,r.lanes=g,r}function zi(t,r,o,u){return t=Gn(7,t,u,r),t.lanes=o,t}function Vo(t,r,o,u){return t=Gn(22,t,u,r),t.elementType=ae,t.lanes=o,t.stateNode={isHidden:!1},t}function fc(t,r,o){return t=Gn(6,t,null,r),t.lanes=o,t}function pc(t,r,o){return r=Gn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function kv(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kn(0),this.expirationTimes=Kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function mc(t,r,o,u,h,g,E,U,V){return t=new kv(t,r,o,U,V),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Gn(3,null,null,r),t.current=g,g.stateNode=t,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(g),t}function Fv(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function Gf(t){if(!t)return Jr;t=t._reactInternals;e:{if(Ce(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(vn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(vn(o))return mh(t,o,r)}return r}function Vf(t,r,o,u,h,g,E,U,V){return t=mc(o,u,!0,t,h,g,E,U,V),t.context=Gf(null),o=t.current,u=ln(),h=si(o),g=Ar(u,h),g.callback=r??null,ni(o,g,h),t.current.lanes=h,Wr(t,h,u),yn(t,u),t}function Wo(t,r,o,u){var h=r.current,g=ln(),E=si(h);return o=Gf(o),r.context===null?r.context=o:r.pendingContext=o,r=Ar(g,E),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=ni(h,r,E),t!==null&&(tr(t,h,E,g),So(t,h,E)),E}function jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function gc(t,r){Wf(t,r),(t=t.alternate)&&Wf(t,r)}function zv(){return null}var jf=typeof reportError=="function"?reportError:function(t){console.error(t)};function vc(t){this._internalRoot=t}Xo.prototype.render=vc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Wo(t,r,null,null)},Xo.prototype.unmount=vc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Oi(function(){Wo(null,t,null,null)}),r[Er]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var r=sn();t={blockedOn:null,target:t,priority:r};for(var o=0;o<qr.length&&r!==0&&r<qr[o].priority;o++);qr.splice(o,0,t),o===0&&Ld(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xf(){}function Bv(t,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var se=jo(E);g.call(se)}}var E=Vf(r,u,t,0,null,!1,!1,"",Xf);return t._reactRootContainer=E,t[Er]=E.current,gs(t.nodeType===8?t.parentNode:t),Oi(),E}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var se=jo(V);U.call(se)}}var V=mc(t,0,!1,null,null,!1,!1,"",Xf);return t._reactRootContainer=V,t[Er]=V.current,gs(t.nodeType===8?t.parentNode:t),Oi(function(){Wo(r,V,o,u)}),V}function qo(t,r,o,u,h){var g=o._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var U=h;h=function(){var V=jo(E);U.call(V)}}Wo(r,E,t,h)}else E=Bv(o,r,t,h,u);return jo(E)}ia=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Vr(r.pendingLanes);o!==0&&(Ri(r,o|1),yn(r,mt()),(ht&6)===0&&(Ra=mt()+500,ei()))}break;case 13:Oi(function(){var u=Rr(t,1);if(u!==null){var h=ln();tr(u,t,1,h)}}),gc(t,1)}},pn=function(t){if(t.tag===13){var r=Rr(t,134217728);if(r!==null){var o=ln();tr(r,t,134217728,o)}gc(t,134217728)}},mn=function(t){if(t.tag===13){var r=si(t),o=Rr(t,r);if(o!==null){var u=ln();tr(o,t,r,u)}gc(t,r)}},sn=function(){return Ke},aa=function(t,r){var o=Ke;try{return Ke=t,r()}finally{Ke=o}},Fr=function(t,r,o){switch(r){case"input":if(ue(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=co(u);if(!h)throw Error(n(90));Re(u),ue(u,h)}}}break;case"textarea":Ue(t,o);break;case"select":r=o.value,r!=null&&Pe(t,!!o.multiple,r,!1)}},Xn=uc,sr=Oi;var Hv={usingClientEntryPoint:!1,Events:[xs,fa,co,Sr,On,uc]},Ds={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gv={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tt(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{or=Ko.inject(Gv),hn=Ko}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv,Sn.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(r))throw Error(n(200));return Fv(t,r,null,o)},Sn.createRoot=function(t,r){if(!_c(t))throw Error(n(299));var o=!1,u="",h=jf;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=mc(t,1,!1,null,null,o,!1,u,h),t[Er]=r.current,gs(t.nodeType===8?t.parentNode:t),new vc(r)},Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=tt(r),t=t===null?null:t.stateNode,t},Sn.flushSync=function(t){return Oi(t)},Sn.hydrate=function(t,r,o){if(!Yo(r))throw Error(n(200));return qo(null,t,r,!0,o)},Sn.hydrateRoot=function(t,r,o){if(!_c(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",E=jf;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),r=Vf(r,null,t,1,o??null,h,!1,g,E),t[Er]=r.current,gs(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Xo(r)},Sn.render=function(t,r,o){if(!Yo(r))throw Error(n(200));return qo(null,t,r,!1,o)},Sn.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(n(40));return t._reactRootContainer?(Oi(function(){qo(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1},Sn.unstable_batchedUpdates=uc,Sn.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Yo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qo(t,r,o,!1,u)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var ep;function $v(){if(ep)return Sc.exports;ep=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Sc.exports=Kv(),Sc.exports}var tp;function Zv(){if(tp)return $o;tp=1;var a=$v();return $o.createRoot=a.createRoot,$o.hydrateRoot=a.hydrateRoot,$o}var Qv=Zv();const vd="escape-room-beit-midrash",Jv="escape-complete",e_="escape-ready",t_="escape-fullscreen-toggle";function Xs(){if(typeof window>"u")return!1;if(new URLSearchParams(window.location.search).get("embed")==="1")return!0;try{return window.parent!==window}catch{return!0}}function _d(){return!1}function n_(){var e;if(typeof window>"u")return;const a={source:vd,type:Jv};try{window.parent.postMessage(a,"*")}catch{}try{(e=window.opener)==null||e.postMessage(a,"*")}catch{}}function r_(){if(!(typeof window>"u"))try{window.parent.postMessage({source:vd,type:e_},"*")}catch{}}const i_="menavtim_want_fullscreen",Tl="immersive-fs";function a_(){if(typeof navigator>"u")return!1;const a=navigator.userAgent;return/iPad|iPhone|iPod/.test(a)?!0:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Am(){const a=document;return document.fullscreenElement??a.webkitFullscreenElement??null}function wc(){return!!Am()||document.documentElement.classList.contains(Tl)}function Zo(a){try{localStorage.setItem(i_,a?"1":"0")}catch{}}function Qo(a){var e;document.documentElement.classList.toggle(Tl,a),(e=document.body)==null||e.classList.toggle(Tl,a),a&&window.scrollTo(0,1)}async function s_(a){const e=a;try{if(typeof e.requestFullscreen=="function")return await e.requestFullscreen(),!0;if(typeof e.webkitRequestFullscreen=="function")return await e.webkitRequestFullscreen(),!0;if(typeof e.webkitRequestFullScreen=="function")return await e.webkitRequestFullScreen(),!0}catch{return!1}return!1}async function o_(){const a=document;try{if(document.fullscreenElement&&document.exitFullscreen){await document.exitFullscreen();return}a.webkitFullscreenElement&&a.webkitExitFullscreen&&await a.webkitExitFullscreen()}catch{}}function l_(){try{window.parent.postMessage({source:vd,type:t_},"*")}catch{}}async function u_(){return Xs()?(l_(),"delegated"):Am()?(await o_(),Qo(!1),Zo(!1),"off"):document.documentElement.classList.contains(Tl)?(Qo(!1),Zo(!1),"off"):await s_(document.documentElement)?(Qo(!1),Zo(!0),"on"):(Qo(!0),Zo(!0),"immersive")}function c_(a){const e=()=>a();return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),window.addEventListener("resize",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),window.removeEventListener("resize",e)}}function id({className:a="",compact:e=!0}){const[n,i]=de.useState(()=>wc()),[s,l]=de.useState(null);de.useEffect(()=>c_(()=>i(wc())),[]);const c=de.useCallback(async()=>{const f=await u_();i(wc()||f==="on"||f==="immersive"||f==="delegated"),f==="immersive"||f==="delegated"&&a_()?(l("ב־iPhone מסך מלא מלא מוגבל — מצב מוגדל הופעל. אפשר גם «הוסף למסך הבית»."),window.setTimeout(()=>l(null),4500)):l(null)},[]),p=n?"יציאה ממסך מלא":"מסך מלא";return L.jsxs("div",{className:`fs-toggle-wrap ${a}`.trim(),children:[L.jsxs("button",{type:"button",className:`fs-toggle${e?" fs-toggle--compact":""}${n?" fs-toggle--on":""}`,onClick:c,"aria-pressed":n,"aria-label":p,title:p,children:[L.jsx("span",{className:"fs-toggle__icon","aria-hidden":"true",children:n?L.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[L.jsx("path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}),L.jsx("path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}),L.jsx("path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}),L.jsx("path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"})]}):L.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[L.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}),L.jsx("path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}),L.jsx("path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}),L.jsx("path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"})]})}),!e&&L.jsx("span",{className:"fs-toggle__text",children:p})]}),s&&L.jsx("p",{className:"fs-toggle__hint",role:"status",children:s})]})}function d_({onStart:a}){const e=!Xs();return L.jsxs("div",{className:"landing-screen",children:[e&&L.jsx("div",{className:"landing-fs",children:L.jsx(id,{})}),L.jsxs("div",{className:"landing-card",children:[L.jsx("div",{className:"landing-seal","aria-hidden":"true",children:"📜"}),L.jsx("h1",{children:"הצופן הארמי"}),L.jsx("p",{className:"landing-lead",children:"דלת לחדר סודי מחכה לכם — לפני שמתחילים:"}),L.jsxs("ol",{className:"landing-steps",children:[L.jsx("li",{children:"חפשו חפצים בחדר לפי ההוראות בראש המסך."}),L.jsx("li",{children:"ענו על החידה, חשבו גימטרייה, והזינו ספרה במנעול."}),L.jsx("li",{children:"אחרי עשר ספרות — המנעול נפתח… ומי יודע מה מסתתר מאחורי הדלת?"})]}),L.jsx("p",{className:"landing-note",children:"סובבו את החוגה ואז לחצו «הזן» — בלי ללחוץ על הספרות עצמן."}),L.jsxs("div",{className:"landing-mobile-tips",children:[L.jsx("p",{className:"landing-mobile-tips__title",children:"טיפים לטלפון"}),L.jsxs("ul",{children:[L.jsx("li",{children:"גררו באצבע כדי להסתכל מסביב ב־360°."}),L.jsx("li",{children:"חפשו את הארון הזוהר בהתחלה — אחר כך לפי ההוראות בראש המסך."}),L.jsx("li",{children:"פתחו את לשוניות הצד: גימטרייה מצד אחד, מנעול מהצד השני."}),L.jsx("li",{children:"במנעול — סובבו את החוגה ואז לחצו «הזן»."})]})]}),L.jsxs("div",{className:"landing-desktop-tips","aria-hidden":"false",children:[L.jsx("p",{className:"landing-desktop-tips__title",children:"במחשב"}),L.jsxs("ul",{children:[L.jsx("li",{children:"גררו עם העכבר כדי להסתובב בחדר."}),L.jsx("li",{children:"העבירו עכבר / לחצו על החפץ (רק הארון זוהר בהתחלה)."})]})]}),L.jsx("button",{type:"button",className:"btn-primary btn-large",onClick:a,children:"כניסה להצופן הארמי"})]})]})}function h_(a,e){return{yaw:a/100*360-180,pitch:(50-e)/100*180}}function Xa(a,e){const n=a*Math.PI/180,i=e*Math.PI/180,s=Math.cos(i);return[-s*Math.cos(n),Math.sin(i),-s*Math.sin(n)]}function fr(a,e,n){return{...h_(a,e),flatX:a,flatY:e,radiusPx:n}}const Xi=[{id:1,object:"ארון",aramaic:"יקיד ונהיר. מאי ניהו?",aramaicDisplay:"יָקִיד וְנָהִיר. מַאי נִיהוּ?",hebrew:"בוער ומאיר. מה זה?",hebrewDisplay:"בּוֹעֵר וּמֵאִיר. מַה זֶּה?",options:["שרגא","ספרא","יומא"],optionsDisplay:["שַׁרְגָא","סִפְרָא","יוֹמָא"],answer:"שרגא",letters:[["ש",300],["ר",200],["ג",3],["א",1]],total:504,dialDigit:4,hotspot:fr(30,34,56)},{id:2,object:"שרגא",aramaic:"לית ליה טעם. מאי ניהו?",aramaicDisplay:"לֵית לֵיהּ טַעְמָא. מַאי נִיהוּ?",hebrew:"אין לו טעם. מה זה?",hebrewDisplay:"אֵין לוֹ טַעַם. מַה זֶּה?",options:["מיא","חמרא","נהמא"],optionsDisplay:["מַיָּא","חַמְרָא","נַהֲמָא"],answer:"מיא",letters:[["מ",40],["י",10],["א",1]],total:51,dialDigit:1,hotspot:fr(7,26,48)},{id:3,object:"מיא",aramaic:"יתיב וגמיר כל יומא. מאן ניהו?",aramaicDisplay:"יָתֵיב וְגָמֵיר כָּל יוֹמָא. מַאן נִיהוּ?",hebrew:"יושב ולומד כל יום. מי זה?",hebrewDisplay:"יוֹשֵׁב וְלוֹמֵד כָּל יוֹם. מִי זֶה?",options:["תלמידא","רבי","גברא"],optionsDisplay:["תַּלְמִידָא","רַבִּי","גַּבְרָא"],answer:"תלמידא",letters:[["ת",400],["ל",30],["מ",40],["י",10],["ד",4],["א",1]],total:485,dialDigit:5,hotspot:fr(19,76,50)},{id:4,object:"תלמידא",aramaic:"ממליל, וכולהון שתקין. מאן ניהו?",aramaicDisplay:"מְמַלֵּל, וְכוּלְהוֹן שׁוּתְקִין. מַאן נִיהוּ?",hebrew:"מדבר, וכולם שותקים. מי זה?",hebrewDisplay:"מְדַבֵּר, וְכֻלָּם שׁוֹתְקִים. מִי זֶה?",options:["רבי","תלמידא","כלבא"],optionsDisplay:["רַבִּי","תַּלְמִידָא","כַּלְבָּא"],answer:"רבי",letters:[["ר",200],["ב",2],["י",10]],total:212,dialDigit:2,hotspot:fr(60,50,58)},{id:5,object:"רבי",aramaic:"פתח לנהורא. מאי ניהו?",aramaicDisplay:"פָּתַח לִנְהוֹרָא. מַאי נִיהוּ?",hebrew:"פותח לאור. מה זה?",hebrewDisplay:"פּוֹתֵחַ לָאוֹר. מַה זֶּה?",options:["חלון","תרעא","שרגא"],optionsDisplay:["חַלּוֹן","תַּרְעָא","שַׁרְגָא"],answer:"חלון",letters:[["ח",8],["ל",30],["ו",6],["נ",50]],total:94,dialDigit:4,hotspot:fr(51,42,56)},{id:6,object:"חלון",aramaic:"מלא מלין, ולא ממליל. מאי ניהו?",aramaicDisplay:"מְלֵי מִילִין, וְלָא מְמַלֵּל. מַאי נִיהוּ?",hebrew:"מלא מילים, ולא מדבר. מה זה?",hebrewDisplay:"מָלֵא מִילִים, וְלֹא מְדַבֵּר. מַה זֶּה?",options:["ספרא","גברא","תרעא"],optionsDisplay:["סִפְרָא","גַּבְרָא","תַּרְעָא"],answer:"ספרא",letters:[["ס",60],["פ",80],["ר",200],["א",1]],total:341,dialDigit:1,hotspot:fr(12,38,48)},{id:7,object:"ספרא",aramaic:"קרינן ביה וגמרין. מאי ניהו?",aramaicDisplay:"קָרֵינַן בֵּיהּ וְגָמְרִין. מַאי נִיהוּ?",hebrew:"קוראים בו ולומדים. מה זה?",hebrewDisplay:"קוֹרְאִים בּוֹ וְלוֹמְדִים. מַה זֶּה?",options:["ספרא","חלון","מיא"],optionsDisplay:["סִפְרָא","חַלּוֹן","מַיָּא"],answer:"ספרא",letters:[["ס",60],["פ",80],["ר",200],["א",1]],total:341,dialDigit:1,hotspot:fr(34,62,60)},{id:8,object:"ספסלא",aramaic:"יתיבין עלוי וגמרין. מאי ניהו?",aramaicDisplay:"יָתְבִין עֲלוֹהִי וְגָמְרִין. מַאי נִיהוּ?",hebrew:"יושבים עליו ולומדים. מה זה?",hebrewDisplay:"יוֹשְׁבִים עָלָיו וְלוֹמְדִים. מַה זֶּה?",options:["ספסלא","פתורא","ערסא"],optionsDisplay:["סַפְסְלָא","פָּתוֹרָא","עַרְסָא"],answer:"ספסלא",letters:[["ס",60],["פ",80],["ס",60],["ל",30],["א",1]],total:231,dialDigit:1,hotspot:fr(4,62,48)},{id:9,object:"תרעא",aramaic:"כולהון עיילין ביה. מאי ניהו?",aramaicDisplay:"כוּלְהוֹן עָיְלִין בֵּיהּ. מַאי נִיהוּ?",hebrew:"כולם נכנסים בו. מה זה?",hebrewDisplay:"כֻּלָּם נִכְנָסִים בּוֹ. מַה זֶּה?",options:["תרעא","ביתא","עמודא"],optionsDisplay:["תַּרְעָא","בֵּיתָא","עַמּוּדָא"],answer:"תרעא",letters:[["ת",400],["ר",200],["ע",70],["א",1]],total:671,dialDigit:1,hotspot:fr(96,45,56)},{id:10,object:"קולמוס",aramaic:"נפיק מפומא, ולא הדר. מאי ניהי?",aramaicDisplay:"נָפֵיק מִפּוּמָא, וְלָא הָדַר. מַאי נִיהוּ?",hebrew:"יוצא מהפה, ולא חוזר. מה זה?",hebrewDisplay:"יוֹצֵא מִן הַפֶּה, וְלֹא חוֹזֵר. מַה זֶּה?",options:["פתגמא","מילתא","ספרא"],optionsDisplay:["פִּתְגָמָא","מִילְתָא","סִפְרָא"],answer:"פתגמא",letters:[["פ",80],["ת",400],["ג",3],["מ",40],["א",1]],total:524,dialDigit:4,hotspot:fr(28,74,46)}];function f_(a){const e=[...a];for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function p_(a){return Math.abs(a)%10}function xd(a,e){const n=a.options.indexOf(e);return n>=0&&a.optionsDisplay?a.optionsDisplay[n]:e}function m_(a){return a<0||a>=Xi.length?null:Xi[a].object}function g_(){return{currentRiddleIndex:0,solvedCount:0,dialDigits:Array(10).fill(null),lockUnlocked:!1}}function v_(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("debug")==="1"}function bm(a){return a.replace(/[\u0591-\u05C7]/g,"")}function __(a){return a.replace(/ך/g,"כ").replace(/ם/g,"מ").replace(/ן/g,"נ").replace(/ף/g,"פ").replace(/ץ/g,"צ")}function Nl(a){const e=bm(a).replace(/[\u200f\u200e\u200d]/g,"").replace(/['׳״"`]/g,"").trim();return __(e)}function x_(a){return bm(a).split(/[^\u0590-\u05FFa-zA-Z]+/u).map(i=>i.trim()).filter(Boolean)}const y_=2,np={letterString:"",total:0,finalDigit:null,letterCount:0};function Cm(a){return a.letters.map(([e])=>e).join("")}function S_(a){return xd(a,a.answer)}function Hs(a){return Nl(a)}function E_(a,e){const n=Hs(a);if(!n)return!1;const i=Hs(Cm(e)),s=Hs(e.answer);return n===i||n===s}function Tc(a,e){return a.finalDigit===null||a.finalDigit!==e.dialDigit?!1:E_(a.letterString,e)||a.total===e.total}function M_(a,e,n){if(n.emptyStuck&&a.letterCount===0)return"empty";const i=Hs(a.letterString),s=Hs(Cm(e));if(i.length>0){const l=i.length>s.length,c=i.length>=s.length&&i!==s,p=i.length>=2&&!s.startsWith(i);if(l||c||p)return"wrong-letters"}return n.wrongDigitStuck&&a.finalDigit!==null&&a.finalDigit!==e.dialDigit&&a.letterCount>=Math.max(2,s.length-1)?"wrong-digit":null}function rp(a){return!!(a.elevatedAlready||a.lockWrongAttempts>=2||a.calcMistakeHits>=2||a.msOnGematria>=75e3)}function w_(a){const e=a.answerWord,n=a.dialDigit;return a.mistake==="wrong-lock"?a.explicit?`הספרה לא מתאימה. חזרו למחשבון, בדקו את הספרה האחרונה של «${e}», ואז הזינו אותה במנעול.`:"לא נכון — בדקו שוב את הספרה האחרונה במחשבון הגימטריה.":a.mistake==="wrong-letters"?`נראה שהאותיות לא תואמות ל«${e}». מחקו והקישו את המילה בדיוק כפי שמופיעה.`:a.mistake==="wrong-digit"?`הספרה האחרונה לא נראית נכונה — בדקו את איות «${e}» במחשבון הגימטריה.`:a.mistake==="empty"?a.explicit?`פתחו את לשונית «גימטריה» והקישו אות־אות את «${e}». אחר כך הביטו בספרה האחרונה של הסכום.`:`הקישו את «${e}» במחשבון הגימטריה וקחו את הספרה האחרונה.`:a.step==="calc"?a.explicit?"פתחו את לשונית «גימטריה» והקישו את אותיות התשובה. הביטו בספרה האחרונה של הסכום — זו הספרה למנעול.":"הקישו את המילה במחשבון הגימטריה וקחו את הספרה האחרונה.":a.explicit?`מעולה! עכשיו פתחו את לשונית «מנעול», סובבו את החוגה לספרה ${n}, ולחצו «הזן».`:`פתחו את המנעול, סובבו לספרה ${n} ולחצו «הזן».`}function Lm(a,e){const n="/menavtim/escape-room/",i=n.endsWith("/")?n:`${n}/`,s=a.replace(/^\//,"");return`${i}${s}?v=${e}`}const Pm=Lm("beit-midrash-mishna-ceiling-lamps.png","marks1"),Nm=Lm("inner-room-360.png","1"),pr={yaw:0,pitch:-18,radiusPx:110,flatX:50,flatY:62};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="160",ba={ROTATE:0,DOLLY:1,PAN:2},Ca={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dm=1,T_=2,Ir=3,xi=0,Mn=1,ji=100,sd=204,od=205,Um=0,R_=1,A_=2,_i=0,b_=1,C_=2,L_=3,P_=4,N_=5,D_=6,Im=300,qa=301,Ka=302,ld=303,ud=304,Dl=306,cd=1e3,Or=1001,dd=1002,cn=1003,ip=1004,Rc=1005,ar=1006,U_=1007,Rl=1008,Yi=1009,yd=1012,Om=1013,gi=1014,vi=1015,Ws=1016,km=1017,Fm=1018,qi=1020,gr=1023,Ki=1026,$a=1027,zm=1029,Bm=1031,Hm=1033,Ac=33776,bc=33777,Cc=33778,Lc=33779,ap=35840,sp=35841,op=35842,lp=35843,Gm=36196,up=37492,cp=37496,dp=37808,hp=37809,fp=37810,pp=37811,mp=37812,gp=37813,vp=37814,_p=37815,xp=37816,yp=37817,Sp=37818,Ep=37819,Mp=37820,wp=37821,Pc=36492,Tp=36494,Rp=36495,Ap=36284,bp=36285,Cp=36286,Vm=3e3,$i=3001,vr="",zt="srgb",kr="srgb-linear",Sd="display-p3",Ul="display-p3-linear",Al="linear",Et="srgb",bl="rec709",Cl="p3",La=7680,Lp=35044,Pp="300 es",hd=1035,Za=2e3,Ll=2001;class ea{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ml=Math.PI/180,fd=180/Math.PI;function Ys(){const a=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(tn[255&a]+tn[a>>8&255]+tn[a>>16&255]+tn[a>>24&255]+"-"+tn[255&e]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[63&n|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[255&i]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function dn(a,e,n){return Math.max(e,Math.min(n,a))}function I_(a,e){return(a%e+e)%e}function Nc(a,e,n){return(1-n)*a+n*e}function Np(a){return(a&a-1)==0&&a!==0}function pd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Is(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function En(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(4294967295*a);case Uint16Array:return Math.round(65535*a);case Uint8Array:return Math.round(255*a);case Int32Array:return Math.round(2147483647*a);case Int16Array:return Math.round(32767*a);case Int8Array:return Math.round(127*a);default:throw new Error("Invalid component type.")}}const O_={DEG2RAD:Ml};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*s+e.x,this.y=l*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,i,s,l,c,p,f,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,l,c,p,f,d)}set(e,n,i,s,l,c,p,f,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=p,m[3]=n,m[4]=l,m[5]=f,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,l=this.elements,c=i[0],p=i[3],f=i[6],d=i[1],m=i[4],v=i[7],_=i[2],y=i[5],b=i[8],R=s[0],x=s[3],C=s[6],w=s[1],S=s[4],G=s[7],I=s[2],O=s[5],N=s[8];return l[0]=c*R+p*w+f*I,l[3]=c*x+p*S+f*O,l[6]=c*C+p*G+f*N,l[1]=d*R+m*w+v*I,l[4]=d*x+m*S+v*O,l[7]=d*C+m*G+v*N,l[2]=_*R+y*w+b*I,l[5]=_*x+y*S+b*O,l[8]=_*C+y*G+b*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],p=e[5],f=e[6],d=e[7],m=e[8];return n*c*m-n*p*d-i*l*m+i*p*f+s*l*d-s*c*f}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],p=e[5],f=e[6],d=e[7],m=e[8],v=m*c-p*d,_=p*f-m*l,y=d*l-c*f,b=n*v+i*_+s*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(s*d-m*i)*R,e[2]=(p*i-s*c)*R,e[3]=_*R,e[4]=(m*n-s*f)*R,e[5]=(s*l-p*n)*R,e[6]=y*R,e[7]=(i*f-d*n)*R,e[8]=(c*n-i*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,l,c,p){const f=Math.cos(l),d=Math.sin(l);return this.set(i*f,i*d,-i*(f*c+d*p)+c+e,-s*d,s*f,-s*(-d*c+f*p)+p+n,0,0,1),this}scale(e,n){return this.premultiply(Dc.makeScale(e,n)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new st;function Wm(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function js(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function k_(){const a=js("canvas");return a.style.display="block",a}const Dp={};function Gs(a){a in Dp||(Dp[a]=!0,console.warn(a))}const Up=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ip=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jo={[kr]:{transfer:Al,primaries:bl,toReference:a=>a,fromReference:a=>a},[zt]:{transfer:Et,primaries:bl,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Ul]:{transfer:Al,primaries:Cl,toReference:a=>a.applyMatrix3(Ip),fromReference:a=>a.applyMatrix3(Up)},[Sd]:{transfer:Et,primaries:Cl,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Ip),fromReference:a=>a.applyMatrix3(Up).convertLinearToSRGB()}},F_=new Set([kr,Ul]),gt={enabled:!0,_workingColorSpace:kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!F_.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,n){if(this.enabled===!1||e===n||!e||!n)return a;const i=Jo[e].toReference;return(0,Jo[n].fromReference)(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Jo[a].primaries},getTransfer:function(a){return a===vr?Al:Jo[a].transfer}};function Ya(a){return a<.04045?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function Uc(a){return a<.0031308?12.92*a:1.055*Math.pow(a,.41666)-.055}let Pa;class jm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pa===void 0&&(Pa=js("canvas")),Pa.width=e.width,Pa.height=e.height;const i=Pa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pa}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=js("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=255*Ya(l[c]/255);return i.putImageData(s,0,0),n}if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(255*Ya(n[i]/255)):n[i]=Ya(n[i]);return{data:n,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Xm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ys(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,p=s.length;c<p;c++)s[c].isDataTexture?l.push(Ic(s[c].image)):l.push(Ic(s[c]))}else l=Ic(s);i.url=l}return n||(e.images[this.uuid]=i),i}}function Ic(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?jm.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B_=0;class wn extends ea{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=1001,s=1001,l=1006,c=1008,p=1023,f=1009,d=wn.DEFAULT_ANISOTROPY,m=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ys(),this.name="",this.source=new Xm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=f,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===$i?zt:vr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?$i:Vm}set encoding(e){Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?zt:vr}}wn.DEFAULT_IMAGE=null,wn.DEFAULT_MAPPING=Im,wn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,i=0,s=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*i+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*i+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*i+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*i+c[11]*s+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,l;const f=e.elements,d=f[0],m=f[4],v=f[8],_=f[1],y=f[5],b=f[9],R=f[2],x=f[6],C=f[10];if(Math.abs(m-_)<.01&&Math.abs(v-R)<.01&&Math.abs(b-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+R)<.1&&Math.abs(b+x)<.1&&Math.abs(d+y+C-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,G=(y+1)/2,I=(C+1)/2,O=(m+_)/4,N=(v+R)/4,re=(b+x)/4;return S>G&&S>I?S<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(S),s=O/i,l=N/i):G>I?G<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(G),i=O/s,l=re/s):I<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(I),i=N/l,s=re/l),this.set(i,s,l,n),this}let w=Math.sqrt((x-b)*(x-b)+(v-R)*(v-R)+(_-m)*(_-m));return Math.abs(w)<.001&&(w=1),this.x=(x-b)/w,this.y=(v-R)/w,this.z=(_-m)/w,this.w=Math.acos((d+y+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends ea{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$i?zt:vr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ar,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){this.width===e&&this.height===n&&this.depth===i||(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Xm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends H_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ym extends wn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class G_ extends wn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,l,c,p){let f=i[s+0],d=i[s+1],m=i[s+2],v=i[s+3];const _=l[c+0],y=l[c+1],b=l[c+2],R=l[c+3];if(p===0)return e[n+0]=f,e[n+1]=d,e[n+2]=m,void(e[n+3]=v);if(p===1)return e[n+0]=_,e[n+1]=y,e[n+2]=b,void(e[n+3]=R);if(v!==R||f!==_||d!==y||m!==b){let x=1-p;const C=f*_+d*y+m*b+v*R,w=C>=0?1:-1,S=1-C*C;if(S>Number.EPSILON){const I=Math.sqrt(S),O=Math.atan2(I,C*w);x=Math.sin(x*O)/I,p=Math.sin(p*O)/I}const G=p*w;if(f=f*x+_*G,d=d*x+y*G,m=m*x+b*G,v=v*x+R*G,x===1-p){const I=1/Math.sqrt(f*f+d*d+m*m+v*v);f*=I,d*=I,m*=I,v*=I}}e[n]=f,e[n+1]=d,e[n+2]=m,e[n+3]=v}static multiplyQuaternionsFlat(e,n,i,s,l,c){const p=i[s],f=i[s+1],d=i[s+2],m=i[s+3],v=l[c],_=l[c+1],y=l[c+2],b=l[c+3];return e[n]=p*b+m*v+f*y-d*_,e[n+1]=f*b+m*_+d*v-p*y,e[n+2]=d*b+m*y+p*_-f*v,e[n+3]=m*b-p*v-f*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,l=e._z,c=e._order,p=Math.cos,f=Math.sin,d=p(i/2),m=p(s/2),v=p(l/2),_=f(i/2),y=f(s/2),b=f(l/2);switch(c){case"XYZ":this._x=_*m*v+d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v-_*y*b;break;case"YXZ":this._x=_*m*v+d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v+_*y*b;break;case"ZXY":this._x=_*m*v-d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v-_*y*b;break;case"ZYX":this._x=_*m*v-d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v+_*y*b;break;case"YZX":this._x=_*m*v+d*y*b,this._y=d*y*v+_*m*b,this._z=d*m*b-_*y*v,this._w=d*m*v-_*y*b;break;case"XZY":this._x=_*m*v-d*y*b,this._y=d*y*v-_*m*b,this._z=d*m*b+_*y*v,this._w=d*m*v+_*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],l=n[8],c=n[1],p=n[5],f=n[9],d=n[2],m=n[6],v=n[10],_=i+p+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-f)*y,this._y=(l-d)*y,this._z=(c-s)*y}else if(i>p&&i>v){const y=2*Math.sqrt(1+i-p-v);this._w=(m-f)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+d)/y}else if(p>v){const y=2*Math.sqrt(1+p-i-v);this._w=(l-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+v-i-p);this._w=(c-s)/y,this._x=(l+d)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,l=e._z,c=e._w,p=n._x,f=n._y,d=n._z,m=n._w;return this._x=i*m+c*p+s*d-l*f,this._y=s*m+c*f+l*p-i*d,this._z=l*m+c*d+i*f-s*p,this._w=c*m-i*p-s*f-l*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,l=this._z,c=this._w;let p=c*e._w+i*e._x+s*e._y+l*e._z;if(p<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,p=-p):this.copy(e),p>=1)return this._w=c,this._x=i,this._y=s,this._z=l,this;const f=1-p*p;if(f<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*i+n*this._x,this._y=y*s+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,p),v=Math.sin((1-n)*m)/d,_=Math.sin(n*m)/d;return this._w=c*v+this._w*_,this._x=i*v+this._x*_,this._y=s*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(l),i*Math.cos(l),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[3]*i+l[6]*s,this.y=l[1]*n+l[4]*i+l[7]*s,this.z=l[2]*n+l[5]*i+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,l=e.elements,c=1/(l[3]*n+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*i+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*i+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*i+l[10]*s+l[14])*c,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,l=e.x,c=e.y,p=e.z,f=e.w,d=2*(c*s-p*i),m=2*(p*n-l*s),v=2*(l*i-c*n);return this.x=n+f*d+c*v-p*m,this.y=i+f*m+p*d-l*v,this.z=s+f*v+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s,this.y=l[1]*n+l[5]*i+l[9]*s,this.z=l[2]*n+l[6]*i+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,l=e.z,c=n.x,p=n.y,f=n.z;return this.x=s*f-l*p,this.y=l*c-i*f,this.z=i*p-s*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,4*n)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,3*n)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new X,Op=new Qi;class yi{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(nr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(nr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=nr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,p=l.count;c<p;c++)e.isMesh===!0?e.getVertexPosition(c,nr):nr.fromBufferAttribute(l,c),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),tl.subVectors(this.max,Os),Na.subVectors(e.a,Os),Da.subVectors(e.b,Os),Ua.subVectors(e.c,Os),ci.subVectors(Da,Na),di.subVectors(Ua,Da),Bi.subVectors(Na,Ua);let n=[0,-ci.z,ci.y,0,-di.z,di.y,0,-Bi.z,Bi.y,ci.z,0,-ci.x,di.z,0,-di.x,Bi.z,0,-Bi.x,-ci.y,ci.x,0,-di.y,di.x,0,-Bi.y,Bi.x,0];return!!kc(n,Na,Da,Ua,tl)&&(n=[1,0,0,0,1,0,0,0,1],!!kc(n,Na,Da,Ua,tl)&&(nl.crossVectors(ci,di),n=[nl.x,nl.y,nl.z],kc(n,Na,Da,Ua,tl)))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(nr).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lr=[new X,new X,new X,new X,new X,new X,new X,new X],nr=new X,el=new yi,Na=new X,Da=new X,Ua=new X,ci=new X,di=new X,Bi=new X,Os=new X,tl=new X,nl=new X,Hi=new X;function kc(a,e,n,i,s){for(let l=0,c=a.length-3;l<=c;l+=3){Hi.fromArray(a,l);const p=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),f=e.dot(Hi),d=n.dot(Hi),m=i.dot(Hi);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>p)return!1}return!0}const V_=new yi,ks=new X,Fc=new X;class Si{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):V_.setFromPoints(e).getCenter(i);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=.5*(i-this.radius);this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Fc)),this.expandByPoint(ks.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pr=new X,zc=new X,rl=new X,hi=new X,Bc=new X,il=new X,Hc=new X;class qs{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,n),Pr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){zc.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),hi.copy(this.origin).sub(zc);const l=.5*e.distanceTo(n),c=-this.direction.dot(rl),p=hi.dot(this.direction),f=-hi.dot(rl),d=hi.lengthSq(),m=Math.abs(1-c*c);let v,_,y,b;if(m>0)if(v=c*f-p,_=c*p-f,b=l*m,v>=0)if(_>=-b)if(_<=b){const R=1/m;v*=R,_*=R,y=v*(v+c*_+2*p)+_*(c*v+_+2*f)+d}else _=l,v=Math.max(0,-(c*_+p)),y=-v*v+_*(_+2*f)+d;else _=-l,v=Math.max(0,-(c*_+p)),y=-v*v+_*(_+2*f)+d;else _<=-b?(v=Math.max(0,-(-c*l+p)),_=v>0?-l:Math.min(Math.max(-l,-f),l),y=-v*v+_*(_+2*f)+d):_<=b?(v=0,_=Math.min(Math.max(-l,-f),l),y=_*(_+2*f)+d):(v=Math.max(0,-(c*l+p)),_=v>0?l:Math.min(Math.max(-l,-f),l),y=-v*v+_*(_+2*f)+d);else _=c>0?-l:l,v=Math.max(0,-(c*_+p)),y=-v*v+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(zc).addScaledVector(rl,_),y}intersectSphere(e,n){Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),s=Pr.dot(Pr)-i*i,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),p=i-c,f=i+c;return f<0?null:p<0?this.at(f,n):this.at(p,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0?!0:e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,l,c,p,f;const d=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||l>s?null:((l>i||isNaN(i))&&(i=l),(c<s||isNaN(s))&&(s=c),v>=0?(p=(e.min.z-_.z)*v,f=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,f=(e.min.z-_.z)*v),i>f||p>s?null:((p>i||i!=i)&&(i=p),(f<s||s!=s)&&(s=f),s<0?null:this.at(i>=0?i:s,n)))}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,n,i,s,l){Bc.subVectors(n,e),il.subVectors(i,e),Hc.crossVectors(Bc,il);let c,p=this.direction.dot(Hc);if(p>0){if(s)return null;c=1}else{if(!(p<0))return null;c=-1,p=-p}hi.subVectors(this.origin,e);const f=c*this.direction.dot(il.crossVectors(hi,il));if(f<0)return null;const d=c*this.direction.dot(Bc.cross(hi));if(d<0||f+d>p)return null;const m=-c*hi.dot(Hc);return m<0?null:this.at(m/p,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,s,l,c,p,f,d,m,v,_,y,b,R,x){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,l,c,p,f,d,m,v,_,y,b,R,x)}set(e,n,i,s,l,c,p,f,d,m,v,_,y,b,R,x){const C=this.elements;return C[0]=e,C[4]=n,C[8]=i,C[12]=s,C[1]=l,C[5]=c,C[9]=p,C[13]=f,C[2]=d,C[6]=m,C[10]=v,C[14]=_,C[3]=y,C[7]=b,C[11]=R,C[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Ia.setFromMatrixColumn(e,0).length(),l=1/Ia.setFromMatrixColumn(e,1).length(),c=1/Ia.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*l,n[5]=i[5]*l,n[6]=i[6]*l,n[7]=0,n[8]=i[8]*c,n[9]=i[9]*c,n[10]=i[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,l=e.z,c=Math.cos(i),p=Math.sin(i),f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,y=c*v,b=p*m,R=p*v;n[0]=f*m,n[4]=-f*v,n[8]=d,n[1]=y+b*d,n[5]=_-R*d,n[9]=-p*f,n[2]=R-_*d,n[6]=b+y*d,n[10]=c*f}else if(e.order==="YXZ"){const _=f*m,y=f*v,b=d*m,R=d*v;n[0]=_+R*p,n[4]=b*p-y,n[8]=c*d,n[1]=c*v,n[5]=c*m,n[9]=-p,n[2]=y*p-b,n[6]=R+_*p,n[10]=c*f}else if(e.order==="ZXY"){const _=f*m,y=f*v,b=d*m,R=d*v;n[0]=_-R*p,n[4]=-c*v,n[8]=b+y*p,n[1]=y+b*p,n[5]=c*m,n[9]=R-_*p,n[2]=-c*d,n[6]=p,n[10]=c*f}else if(e.order==="ZYX"){const _=c*m,y=c*v,b=p*m,R=p*v;n[0]=f*m,n[4]=b*d-y,n[8]=_*d+R,n[1]=f*v,n[5]=R*d+_,n[9]=y*d-b,n[2]=-d,n[6]=p*f,n[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*d,b=p*f,R=p*d;n[0]=f*m,n[4]=R-_*v,n[8]=b*v+y,n[1]=v,n[5]=c*m,n[9]=-p*m,n[2]=-d*m,n[6]=y*v+b,n[10]=_-R*v}else if(e.order==="XZY"){const _=c*f,y=c*d,b=p*f,R=p*d;n[0]=f*m,n[4]=-v,n[8]=d*m,n[1]=_*v+R,n[5]=c*m,n[9]=y*v-b,n[2]=b*v-y,n[6]=p*m,n[10]=R*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,j_)}lookAt(e,n,i){const s=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),fi.crossVectors(i,Pn),fi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),fi.crossVectors(i,Pn)),fi.normalize(),al.crossVectors(Pn,fi),s[0]=fi.x,s[4]=al.x,s[8]=Pn.x,s[1]=fi.y,s[5]=al.y,s[9]=Pn.y,s[2]=fi.z,s[6]=al.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,l=this.elements,c=i[0],p=i[4],f=i[8],d=i[12],m=i[1],v=i[5],_=i[9],y=i[13],b=i[2],R=i[6],x=i[10],C=i[14],w=i[3],S=i[7],G=i[11],I=i[15],O=s[0],N=s[4],re=s[8],K=s[12],Q=s[1],le=s[5],F=s[9],ie=s[13],te=s[2],me=s[6],Me=s[10],ae=s[14],H=s[3],$=s[7],W=s[11],M=s[15];return l[0]=c*O+p*Q+f*te+d*H,l[4]=c*N+p*le+f*me+d*$,l[8]=c*re+p*F+f*Me+d*W,l[12]=c*K+p*ie+f*ae+d*M,l[1]=m*O+v*Q+_*te+y*H,l[5]=m*N+v*le+_*me+y*$,l[9]=m*re+v*F+_*Me+y*W,l[13]=m*K+v*ie+_*ae+y*M,l[2]=b*O+R*Q+x*te+C*H,l[6]=b*N+R*le+x*me+C*$,l[10]=b*re+R*F+x*Me+C*W,l[14]=b*K+R*ie+x*ae+C*M,l[3]=w*O+S*Q+G*te+I*H,l[7]=w*N+S*le+G*me+I*$,l[11]=w*re+S*F+G*Me+I*W,l[15]=w*K+S*ie+G*ae+I*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],l=e[12],c=e[1],p=e[5],f=e[9],d=e[13],m=e[2],v=e[6],_=e[10],y=e[14];return e[3]*(+l*f*v-s*d*v-l*p*_+i*d*_+s*p*y-i*f*y)+e[7]*(+n*f*y-n*d*_+l*c*_-s*c*y+s*d*m-l*f*m)+e[11]*(+n*d*v-n*p*y-l*c*v+i*c*y+l*p*m-i*d*m)+e[15]*(-s*p*m-n*f*v+n*p*_+s*c*v-i*c*_+i*f*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],p=e[5],f=e[6],d=e[7],m=e[8],v=e[9],_=e[10],y=e[11],b=e[12],R=e[13],x=e[14],C=e[15],w=v*x*d-R*_*d+R*f*y-p*x*y-v*f*C+p*_*C,S=b*_*d-m*x*d-b*f*y+c*x*y+m*f*C-c*_*C,G=m*R*d-b*v*d+b*p*y-c*R*y-m*p*C+c*v*C,I=b*v*f-m*R*f-b*p*_+c*R*_+m*p*x-c*v*x,O=n*w+i*S+s*G+l*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return e[0]=w*N,e[1]=(R*_*l-v*x*l-R*s*y+i*x*y+v*s*C-i*_*C)*N,e[2]=(p*x*l-R*f*l+R*s*d-i*x*d-p*s*C+i*f*C)*N,e[3]=(v*f*l-p*_*l-v*s*d+i*_*d+p*s*y-i*f*y)*N,e[4]=S*N,e[5]=(m*x*l-b*_*l+b*s*y-n*x*y-m*s*C+n*_*C)*N,e[6]=(b*f*l-c*x*l-b*s*d+n*x*d+c*s*C-n*f*C)*N,e[7]=(c*_*l-m*f*l+m*s*d-n*_*d-c*s*y+n*f*y)*N,e[8]=G*N,e[9]=(b*v*l-m*R*l-b*i*y+n*R*y+m*i*C-n*v*C)*N,e[10]=(c*R*l-b*p*l+b*i*d-n*R*d-c*i*C+n*p*C)*N,e[11]=(m*p*l-c*v*l-m*i*d+n*v*d+c*i*y-n*p*y)*N,e[12]=I*N,e[13]=(m*R*s-b*v*s+b*i*_-n*R*_-m*i*x+n*v*x)*N,e[14]=(b*p*s-c*R*s-b*i*f+n*R*f+c*i*x-n*p*x)*N,e[15]=(c*v*s-m*p*s+m*i*f-n*v*f-c*i*_+n*p*_)*N,this}scale(e){const n=this.elements,i=e.x,s=e.y,l=e.z;return n[0]*=i,n[4]*=s,n[8]*=l,n[1]*=i,n[5]*=s,n[9]*=l,n[2]*=i,n[6]*=s,n[10]*=l,n[3]*=i,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),l=1-i,c=e.x,p=e.y,f=e.z,d=l*c,m=l*p;return this.set(d*c+i,d*p-s*f,d*f+s*p,0,d*p+s*f,m*p+i,m*f-s*c,0,d*f-s*p,m*f+s*c,l*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,l,c){return this.set(1,i,l,0,e,1,c,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,l=n._x,c=n._y,p=n._z,f=n._w,d=l+l,m=c+c,v=p+p,_=l*d,y=l*m,b=l*v,R=c*m,x=c*v,C=p*v,w=f*d,S=f*m,G=f*v,I=i.x,O=i.y,N=i.z;return s[0]=(1-(R+C))*I,s[1]=(y+G)*I,s[2]=(b-S)*I,s[3]=0,s[4]=(y-G)*O,s[5]=(1-(_+C))*O,s[6]=(x+w)*O,s[7]=0,s[8]=(b+S)*N,s[9]=(x-w)*N,s[10]=(1-(_+R))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let l=Ia.set(s[0],s[1],s[2]).length();const c=Ia.set(s[4],s[5],s[6]).length(),p=Ia.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],rr.copy(this);const f=1/l,d=1/c,m=1/p;return rr.elements[0]*=f,rr.elements[1]*=f,rr.elements[2]*=f,rr.elements[4]*=d,rr.elements[5]*=d,rr.elements[6]*=d,rr.elements[8]*=m,rr.elements[9]*=m,rr.elements[10]*=m,n.setFromRotationMatrix(rr),i.x=l,i.y=c,i.z=p,this}makePerspective(e,n,i,s,l,c,p=2e3){const f=this.elements,d=2*l/(n-e),m=2*l/(i-s),v=(n+e)/(n-e),_=(i+s)/(i-s);let y,b;if(p===Za)y=-(c+l)/(c-l),b=-2*c*l/(c-l);else{if(p!==Ll)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);y=-c/(c-l),b=-c*l/(c-l)}return f[0]=d,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,s,l,c,p=2e3){const f=this.elements,d=1/(n-e),m=1/(i-s),v=1/(c-l),_=(n+e)*d,y=(i+s)*m;let b,R;if(p===Za)b=(c+l)*v,R=-2*v;else{if(p!==Ll)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);b=l*v,R=-1*v}return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=R,f[14]=-b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ia=new X,rr=new ot,W_=new X(0,0,0),j_=new X(1,1,1),fi=new X,al=new X,Pn=new X,kp=new ot,Fp=new Qi;class Il{constructor(e=0,n=0,i=0,s=Il.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,l=s[0],c=s[4],p=s[8],f=s[1],d=s[5],m=s[9],v=s[2],_=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-dn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Il.DEFAULT_ORDER="XYZ";class qm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let X_=0;const zp=new X,Oa=new Qi,Nr=new ot,sl=new X,Fs=new X,Y_=new X,q_=new Qi,Bp=new X(1,0,0),Hp=new X(0,1,0),Gp=new X(0,0,1),K_={type:"added"},$_={type:"removed"};class Un extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new X,n=new Il,i=new Qi,s=new X(1,1,1);n._onChange((function(){i.setFromEuler(n,!1)})),i._onChange((function(){n.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new st}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Oa.setFromAxisAngle(e,n),this.quaternion.multiply(Oa),this}rotateOnWorldAxis(e,n){return Oa.setFromAxisAngle(e,n),this.quaternion.premultiply(Oa),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,n){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sl.copy(e):sl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nr.lookAt(Fs,sl,this.up):Nr.lookAt(sl,Fs,this.up),this.quaternion.setFromRotationMatrix(Nr),s&&(Nr.extractRotation(s.matrixWorld),Oa.setFromRotationMatrix(Nr),this.quaternion.premultiply(Oa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(K_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const l=n[i];l.matrixWorldAutoUpdate!==!0&&e!==!0||l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++){const p=s[l];p.matrixWorldAutoUpdate===!0&&p.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};function l(p,f){return p[f.uuid]===void 0&&(p[f.uuid]=f.toJSON(e)),f.uuid}if(s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map((p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()}))),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const f=p.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const v=f[d];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let f=0,d=this.material.length;f<d;f++)p.push(l(e.materials,this.material[f]));s.material=p}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let p=0;p<this.children.length;p++)s.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let p=0;p<this.animations.length;p++){const f=this.animations[p];s.animations.push(l(e.animations,f))}}if(n){const p=c(e.geometries),f=c(e.materials),d=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),y=c(e.animations),b=c(e.nodes);p.length>0&&(i.geometries=p),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),b.length>0&&(i.nodes=b)}return i.object=s,i;function c(p){const f=[];for(const d in p){const m=p[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Un.DEFAULT_UP=new X(0,1,0),Un.DEFAULT_MATRIX_AUTO_UPDATE=!0,Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new X,Dr=new X,Gc=new X,Ur=new X,ka=new X,Fa=new X,Vp=new X,Vc=new X,Wc=new X,jc=new X;let ol=!1;class Wn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ir.subVectors(e,n),s.cross(ir);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,n,i,s,l){ir.subVectors(s,n),Dr.subVectors(i,n),Gc.subVectors(e,n);const c=ir.dot(ir),p=ir.dot(Dr),f=ir.dot(Gc),d=Dr.dot(Dr),m=Dr.dot(Gc),v=c*d-p*p;if(v===0)return l.set(0,0,0),null;const _=1/v,y=(d*f-p*m)*_,b=(c*m-p*f)*_;return l.set(1-y-b,b,y)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ur)!==null&&Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getUV(e,n,i,s,l,c,p,f){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),this.getInterpolation(e,n,i,s,l,c,p,f)}static getInterpolation(e,n,i,s,l,c,p,f){return this.getBarycoord(e,n,i,s,Ur)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Ur.x),f.addScaledVector(c,Ur.y),f.addScaledVector(p,Ur.z),f)}static isFrontFacing(e,n,i,s){return ir.subVectors(i,n),Dr.subVectors(e,n),ir.cross(Dr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),.5*ir.cross(Dr).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,l){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,s,l)}getInterpolation(e,n,i,s,l){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,s,l)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,l=this.c;let c,p;ka.subVectors(s,i),Fa.subVectors(l,i),Vc.subVectors(e,i);const f=ka.dot(Vc),d=Fa.dot(Vc);if(f<=0&&d<=0)return n.copy(i);Wc.subVectors(e,s);const m=ka.dot(Wc),v=Fa.dot(Wc);if(m>=0&&v<=m)return n.copy(s);const _=f*v-m*d;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),n.copy(i).addScaledVector(ka,c);jc.subVectors(e,l);const y=ka.dot(jc),b=Fa.dot(jc);if(b>=0&&y<=b)return n.copy(l);const R=y*d-f*b;if(R<=0&&d>=0&&b<=0)return p=d/(d-b),n.copy(i).addScaledVector(Fa,p);const x=m*b-y*v;if(x<=0&&v-m>=0&&y-b>=0)return Vp.subVectors(l,s),p=(v-m)/(v-m+(y-b)),n.copy(s).addScaledVector(Vp,p);const C=1/(x+R+_);return c=R*C,p=_*C,n.copy(i).addScaledVector(ka,c).addScaledVector(Fa,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Xc(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+6*(e-a)*n:n<.5?e:n<2/3?a+6*(e-a)*(2/3-n):a}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=gt.workingColorSpace){if(e=I_(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+n):i+n-i*n,c=2*i-l;this.r=Xc(c,l,e+1/3),this.g=Xc(c,l,e),this.b=Xc(c,l,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,n=zt){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],p=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zt){const i=Km[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=Uc(e.r),this.g=Uc(e.g),this.b=Uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return gt.fromWorkingColorSpace(nn.copy(this),e),65536*Math.round(dn(255*nn.r,0,255))+256*Math.round(dn(255*nn.g,0,255))+Math.round(dn(255*nn.b,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,s=nn.g,l=nn.b,c=Math.max(i,s,l),p=Math.min(i,s,l);let f,d;const m=(p+c)/2;if(p===c)f=0,d=0;else{const v=c-p;switch(d=m<=.5?v/(c+p):v/(2-c-p),c){case i:f=(s-l)/v+(s<l?6:0);break;case s:f=(l-i)/v+2;break;case l:f=(i-s)/v+4}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=zt){gt.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b;return e!==zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*n)},${Math.round(255*i)},${Math.round(255*s)})`}offsetHSL(e,n,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+n,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pi),e.getHSL(ll);const i=Nc(pi.h,ll.h,n),s=Nc(pi.s,ll.s,n),l=Nc(pi.l,ll.l,n);return this.setHSL(i,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,l=e.elements;return this.r=l[0]*n+l[3]*i+l[6]*s,this.g=l[1]*n+l[4]*i+l[7]*s,this.b=l[2]*n+l[5]*i+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new pt;pt.NAMES=Km;let Z_=0;class Ol extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=1,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];s!==void 0?s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i:console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`)}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function s(l){const c=[];for(const p in l){const f=l[p];delete f.metadata,c.push(f)}return c}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==od&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(i.stencilFail=this.stencilFail),this.stencilZFail!==La&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),n){const l=s(e.textures),c=s(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=n[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kl extends Ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}Q_();function Q_(){const a=new ArrayBuffer(4),e=new Float32Array(a),n=new Uint32Array(a),i=new Uint32Array(512),s=new Uint32Array(512);for(let f=0;f<256;++f){const d=f-127;d<-27?(i[f]=0,i[256|f]=32768,s[f]=24,s[256|f]=24):d<-14?(i[f]=1024>>-d-14,i[256|f]=1024>>-d-14|32768,s[f]=-d-1,s[256|f]=-d-1):d<=15?(i[f]=d+15<<10,i[256|f]=d+15<<10|32768,s[f]=13,s[256|f]=13):d<128?(i[f]=31744,i[256|f]=64512,s[f]=24,s[256|f]=24):(i[f]=31744,i[256|f]=64512,s[f]=13,s[256|f]=13)}const l=new Uint32Array(2048),c=new Uint32Array(64),p=new Uint32Array(64);for(let f=1;f<1024;++f){let d=f<<13,m=0;for(;(8388608&d)==0;)d<<=1,m-=8388608;d&=-8388609,m+=947912704,l[f]=d|m}for(let f=1024;f<2048;++f)l[f]=939524096+(f-1024<<13);for(let f=1;f<31;++f)c[f]=f<<23;c[31]=1199570944,c[32]=2147483648;for(let f=33;f<63;++f)c[f]=2147483648+(f-32<<23);c[63]=3347054592;for(let f=1;f<64;++f)f!==32&&(p[f]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:s,mantissaTable:l,exponentTable:c,offsetTable:p}}const Dt=new X,ul=new Ze;class _r{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,l){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array),l=En(l,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lp&&(e.usage=this.usage),e}}class $m extends _r{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zm extends _r{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xr extends _r{constructor(e,n,i){super(new Float32Array(e),n,i)}}let J_=0;const Vn=new ot,Yc=new Un,za=new X,Nn=new yi,zs=new yi,Xt=new X;class Ei extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?Zm:$m)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new st().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(za).negate(),this.translate(za.x,za.y,za.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const l=n[i];Nn.setFromBufferAttribute(l),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new X,1/0);if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const p=n[l];zs.setFromBufferAttribute(p),this.morphTargetsRelative?(Xt.addVectors(Nn.min,zs.min),Nn.expandByPoint(Xt),Xt.addVectors(Nn.max,zs.max),Nn.expandByPoint(Xt)):(Nn.expandByPoint(zs.min),Nn.expandByPoint(zs.max))}Nn.getCenter(i);let s=0;for(let l=0,c=e.count;l<c;l++)Xt.fromBufferAttribute(e,l),s=Math.max(s,i.distanceToSquared(Xt));if(n)for(let l=0,c=n.length;l<c;l++){const p=n[l],f=this.morphTargetsRelative;for(let d=0,m=p.count;d<m;d++)Xt.fromBufferAttribute(p,d),f&&(za.fromBufferAttribute(e,d),Xt.add(za)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const i=e.array,s=n.position.array,l=n.normal.array,c=n.uv.array,p=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _r(new Float32Array(4*p),4));const f=this.getAttribute("tangent").array,d=[],m=[];for(let Q=0;Q<p;Q++)d[Q]=new X,m[Q]=new X;const v=new X,_=new X,y=new X,b=new Ze,R=new Ze,x=new Ze,C=new X,w=new X;function S(Q,le,F){v.fromArray(s,3*Q),_.fromArray(s,3*le),y.fromArray(s,3*F),b.fromArray(c,2*Q),R.fromArray(c,2*le),x.fromArray(c,2*F),_.sub(v),y.sub(v),R.sub(b),x.sub(b);const ie=1/(R.x*x.y-x.x*R.y);isFinite(ie)&&(C.copy(_).multiplyScalar(x.y).addScaledVector(y,-R.y).multiplyScalar(ie),w.copy(y).multiplyScalar(R.x).addScaledVector(_,-x.x).multiplyScalar(ie),d[Q].add(C),d[le].add(C),d[F].add(C),m[Q].add(w),m[le].add(w),m[F].add(w))}let G=this.groups;G.length===0&&(G=[{start:0,count:i.length}]);for(let Q=0,le=G.length;Q<le;++Q){const F=G[Q],ie=F.start;for(let te=ie,me=ie+F.count;te<me;te+=3)S(i[te+0],i[te+1],i[te+2])}const I=new X,O=new X,N=new X,re=new X;function K(Q){N.fromArray(l,3*Q),re.copy(N);const le=d[Q];I.copy(le),I.sub(N.multiplyScalar(N.dot(le))).normalize(),O.crossVectors(re,le);const F=O.dot(m[Q])<0?-1:1;f[4*Q]=I.x,f[4*Q+1]=I.y,f[4*Q+2]=I.z,f[4*Q+3]=F}for(let Q=0,le=G.length;Q<le;++Q){const F=G[Q],ie=F.start;for(let te=ie,me=ie+F.count;te<me;te+=3)K(i[te+0]),K(i[te+1]),K(i[te+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _r(new Float32Array(3*n.count),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new X,l=new X,c=new X,p=new X,f=new X,d=new X,m=new X,v=new X;if(e)for(let _=0,y=e.count;_<y;_+=3){const b=e.getX(_+0),R=e.getX(_+1),x=e.getX(_+2);s.fromBufferAttribute(n,b),l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,x),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),p.fromBufferAttribute(i,b),f.fromBufferAttribute(i,R),d.fromBufferAttribute(i,x),p.add(m),f.add(m),d.add(m),i.setXYZ(b,p.x,p.y,p.z),i.setXYZ(R,f.x,f.y,f.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)s.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(p,f){const d=p.array,m=p.itemSize,v=p.normalized,_=new d.constructor(f.length*m);let y=0,b=0;for(let R=0,x=f.length;R<x;R++){y=p.isInterleavedBufferAttribute?f[R]*p.data.stride+p.offset:f[R]*m;for(let C=0;C<m;C++)_[b++]=d[y++]}return new _r(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,i=this.index.array,s=this.attributes;for(const p in s){const f=e(s[p],i);n.setAttribute(p,f)}const l=this.morphAttributes;for(const p in l){const f=[],d=l[p];for(let m=0,v=d.length;m<v;m++){const _=e(d[m],i);f.push(_)}n.morphAttributes[p]=f}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let p=0,f=c.length;p<f;p++){const d=c[p];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let l=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];m.push(y.toJSON(e.data))}m.length>0&&(s[f]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(n))}const l=e.morphAttributes;for(const d in l){const m=[],v=l[d];for(let _=0,y=v.length;_<y;_++)m.push(v[_].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new ot,Gi=new qs,cl=new Si,jp=new X,Ba=new X,Ha=new X,Ga=new X,qc=new X,dl=new X,hl=new Ze,fl=new Ze,pl=new Ze,Xp=new X,Yp=new X,qp=new X,ml=new X,gl=new X;class jn extends Un{constructor(e=new Ei,n=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const p=this.morphTargetInfluences;if(l&&p){dl.set(0,0,0);for(let f=0,d=l.length;f<d;f++){const m=p[f],v=l[f];m!==0&&(qc.fromBufferAttribute(v,e),c?dl.addScaledVector(qc,m):dl.addScaledVector(qc.sub(n),m))}n.add(dl)}return n}raycast(e,n){const i=this.geometry,s=this.material,l=this.matrixWorld;if(s!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(l),Gi.copy(e.ray).recast(e.near),cl.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(cl,jp)===null||Gi.origin.distanceToSquared(jp)>(e.far-e.near)**2))return;Wp.copy(l).invert(),Gi.copy(e.ray).applyMatrix4(Wp),i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,n,Gi)}}_computeIntersections(e,n,i){let s;const l=this.geometry,c=this.material,p=l.index,f=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,y=l.drawRange;if(p!==null)if(Array.isArray(c))for(let b=0,R=_.length;b<R;b++){const x=_[b],C=c[x.materialIndex];for(let w=Math.max(x.start,y.start),S=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));w<S;w+=3)s=vl(this,C,e,i,d,m,v,p.getX(w),p.getX(w+1),p.getX(w+2)),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,n.push(s))}else for(let b=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);b<R;b+=3)s=vl(this,c,e,i,d,m,v,p.getX(b),p.getX(b+1),p.getX(b+2)),s&&(s.faceIndex=Math.floor(b/3),n.push(s));else if(f!==void 0)if(Array.isArray(c))for(let b=0,R=_.length;b<R;b++){const x=_[b],C=c[x.materialIndex];for(let w=Math.max(x.start,y.start),S=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));w<S;w+=3)s=vl(this,C,e,i,d,m,v,w,w+1,w+2),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,n.push(s))}else for(let b=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);b<R;b+=3)s=vl(this,c,e,i,d,m,v,b,b+1,b+2),s&&(s.faceIndex=Math.floor(b/3),n.push(s))}}function vl(a,e,n,i,s,l,c,p,f,d){a.getVertexPosition(p,Ba),a.getVertexPosition(f,Ha),a.getVertexPosition(d,Ga);const m=(function(v,_,y,b,R,x,C,w){let S;if(S=_.side===Mn?b.intersectTriangle(C,x,R,!0,w):b.intersectTriangle(R,x,C,_.side===xi,w),S===null)return null;gl.copy(w),gl.applyMatrix4(v.matrixWorld);const G=y.ray.origin.distanceTo(gl);return G<y.near||G>y.far?null:{distance:G,point:gl.clone(),object:v}})(a,e,n,i,Ba,Ha,Ga,ml);if(m){s&&(hl.fromBufferAttribute(s,p),fl.fromBufferAttribute(s,f),pl.fromBufferAttribute(s,d),m.uv=Wn.getInterpolation(ml,Ba,Ha,Ga,hl,fl,pl,new Ze)),l&&(hl.fromBufferAttribute(l,p),fl.fromBufferAttribute(l,f),pl.fromBufferAttribute(l,d),m.uv1=Wn.getInterpolation(ml,Ba,Ha,Ga,hl,fl,pl,new Ze),m.uv2=m.uv1),c&&(Xp.fromBufferAttribute(c,p),Yp.fromBufferAttribute(c,f),qp.fromBufferAttribute(c,d),m.normal=Wn.getInterpolation(ml,Ba,Ha,Ga,Xp,Yp,qp,new X),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:p,b:f,c:d,normal:new X,materialIndex:0};Wn.getNormal(Ba,Ha,Ga,v.normal),m.face=v}return m}class Ks extends Ei{constructor(e=1,n=1,i=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:l,depthSegments:c};const p=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const f=[],d=[],m=[],v=[];let _=0,y=0;function b(R,x,C,w,S,G,I,O,N,re,K){const Q=G/N,le=I/re,F=G/2,ie=I/2,te=O/2,me=N+1,Me=re+1;let ae=0,H=0;const $=new X;for(let W=0;W<Me;W++){const M=W*le-ie;for(let z=0;z<me;z++){const A=z*Q-F;$[R]=A*w,$[x]=M*S,$[C]=te,d.push($.x,$.y,$.z),$[R]=0,$[x]=0,$[C]=O>0?1:-1,m.push($.x,$.y,$.z),v.push(z/N),v.push(1-W/re),ae+=1}}for(let W=0;W<re;W++)for(let M=0;M<N;M++){const z=_+M+me*W,A=_+M+me*(W+1),T=_+(M+1)+me*(W+1),B=_+(M+1)+me*W;f.push(z,A,B),f.push(A,T,B),H+=6}p.addGroup(y,H,K),y+=H,_+=ae}b("z","y","x",-1,-1,i,n,e,c,l,0),b("z","y","x",1,-1,i,n,-e,c,l,1),b("x","z","y",1,1,e,i,n,s,c,2),b("x","z","y",1,-1,e,i,-n,s,c,3),b("x","y","z",1,-1,e,n,i,s,l,4),b("x","y","z",-1,-1,e,n,-i,s,l,5),this.setIndex(f),this.setAttribute("position",new xr(d,3)),this.setAttribute("normal",new xr(m,3)),this.setAttribute("uv",new xr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(a){const e={};for(const n in a){e[n]={};for(const i in a[n]){const s=a[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function un(a){const e={};for(let n=0;n<a.length;n++){const i=Qa(a[n]);for(const s in i)e[s]=i[s]}return e}function Qm(a){return a.getRenderTarget()===null?a.outputColorSpace:gt.workingColorSpace}const e0={clone:Qa,merge:un};class Ji extends Ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=(function(n){const i=[];for(let s=0;s<n.length;s++)i.push(n[s].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ed extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Za}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends Ed{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=2*fd*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*Ml*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*fd*Math.atan(Math.tan(.5*Ml*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(.5*Ml*this.fov)/this.zoom,i=2*n,s=this.aspect*i,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/f,n-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}const p=this.filmOffset;p!==0&&(l+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Va=-90;class t0 extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Va,1,e,n);s.layers=this.layers,this.add(s);const l=new Dn(Va,1,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Va,1,e,n);c.layers=this.layers,this.add(c);const p=new Dn(Va,1,e,n);p.layers=this.layers,this.add(p);const f=new Dn(Va,1,e,n);f.layers=this.layers,this.add(f);const d=new Dn(Va,1,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,l,c,p,f]=n;for(const d of n)this.remove(d);if(e===Za)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else{if(e!==Ll)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1)}for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,p,f,d,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,l),e.setRenderTarget(i,1,s),e.render(n,c),e.setRenderTarget(i,2,s),e.render(n,p),e.setRenderTarget(i,3,s),e.render(n,f),e.setRenderTarget(i,4,s),e.render(n,d),i.texture.generateMipmaps=R,e.setRenderTarget(i,5,s),e.render(n,m),e.setRenderTarget(v,_,y),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class Jm extends wn{constructor(e,n,i,s,l,c,p,f,d,m){super(e=e!==void 0?e:[],n=n!==void 0?n:qa,i,s,l,c,p,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n0 extends Zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$i?zt:vr),this.texture=new Jm(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ar}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ks(5,5,5),l=new Ji({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:0});l.uniforms.tEquirect.value=n;const c=new jn(s,l),p=n.minFilter;return n.minFilter===Rl&&(n.minFilter=ar),new t0(1,10,this).update(e,c),n.minFilter=p,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,i,s){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,i,s);e.setRenderTarget(l)}}const Kc=new X,r0=new X,i0=new st;class mi{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Kc.subVectors(i,n).cross(r0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Kc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||i0.getNormalMatrix(e),s=this.coplanarPoint(Kc).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Si,_l=new X;class Md{constructor(e=new mi,n=new mi,i=new mi,s=new mi,l=new mi,c=new mi){this.planes=[e,n,i,s,l,c]}set(e,n,i,s,l,c){const p=this.planes;return p[0].copy(e),p[1].copy(n),p[2].copy(i),p[3].copy(s),p[4].copy(l),p[5].copy(c),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=2e3){const i=this.planes,s=e.elements,l=s[0],c=s[1],p=s[2],f=s[3],d=s[4],m=s[5],v=s[6],_=s[7],y=s[8],b=s[9],R=s[10],x=s[11],C=s[12],w=s[13],S=s[14],G=s[15];if(i[0].setComponents(f-l,_-d,x-y,G-C).normalize(),i[1].setComponents(f+l,_+d,x+y,G+C).normalize(),i[2].setComponents(f+c,_+m,x+b,G+w).normalize(),i[3].setComponents(f-c,_-m,x-b,G-w).normalize(),i[4].setComponents(f-p,_-v,x-R,G-S).normalize(),n===Za)i[5].setComponents(f+p,_+v,x+R,G+S).normalize();else{if(n!==Ll)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);i[5].setComponents(p,v,R,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(_l.x=s.normal.x>0?e.max.x:e.min.x,_l.y=s.normal.y>0?e.max.y:e.min.y,_l.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let a=null,e=!1,n=null,i=null;function s(l,c){n(l,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){a=l}}}function a0(a,e){const n=e.isWebGL2,i=new WeakMap;return{get:function(s){return s.isInterleavedBufferAttribute&&(s=s.data),i.get(s)},remove:function(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=i.get(s);l&&(a.deleteBuffer(l.buffer),i.delete(s))},update:function(s,l){if(s.isGLBufferAttribute){const p=i.get(s);return void((!p||p.version<s.version)&&i.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version}))}s.isInterleavedBufferAttribute&&(s=s.data);const c=i.get(s);if(c===void 0)i.set(s,(function(p,f){const d=p.array,m=p.usage,v=d.byteLength,_=a.createBuffer();let y;if(a.bindBuffer(f,_),a.bufferData(f,d,m),p.onUploadCallback(),d instanceof Float32Array)y=a.FLOAT;else if(d instanceof Uint16Array)if(p.isFloat16BufferAttribute){if(!n)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");y=a.HALF_FLOAT}else y=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=a.SHORT;else if(d instanceof Uint32Array)y=a.UNSIGNED_INT;else if(d instanceof Int32Array)y=a.INT;else if(d instanceof Int8Array)y=a.BYTE;else if(d instanceof Uint8Array)y=a.UNSIGNED_BYTE;else{if(!(d instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);y=a.UNSIGNED_BYTE}return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}})(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(p,f,d){const m=f.array,v=f._updateRange,_=f.updateRanges;if(a.bindBuffer(d,p),v.count===-1&&_.length===0&&a.bufferSubData(d,0,m),_.length!==0){for(let y=0,b=_.length;y<b;y++){const R=_[y];n?a.bufferSubData(d,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count):a.bufferSubData(d,R.start*m.BYTES_PER_ELEMENT,m.subarray(R.start,R.start+R.count))}f.clearUpdateRanges()}v.count!==-1&&(n?a.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):a.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()})(c.buffer,s,l),c.version=s.version}}}}class wd extends Ei{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const l=e/2,c=n/2,p=Math.floor(i),f=Math.floor(s),d=p+1,m=f+1,v=e/p,_=n/f,y=[],b=[],R=[],x=[];for(let C=0;C<m;C++){const w=C*_-c;for(let S=0;S<d;S++){const G=S*v-l;b.push(G,-w,0),R.push(0,0,1),x.push(S/p),x.push(1-C/f)}}for(let C=0;C<f;C++)for(let w=0;w<p;w++){const S=w+d*C,G=w+d*(C+1),I=w+1+d*(C+1),O=w+1+d*C;y.push(S,G,O),y.push(G,I,O)}this.setIndex(y),this.setAttribute("position",new xr(b,3)),this.setAttribute("normal",new xr(R,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.width,e.height,e.widthSegments,e.heightSegments)}}const nt={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Le={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mr={basic:{uniforms:un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([Le.points,Le.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([Le.common,Le.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([Le.sprite,Le.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:un([Le.common,Le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:un([Le.lights,Le.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};mr.physical={uniforms:un([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const xl={r:0,b:0,g:0};function s0(a,e,n,i,s,l,c){const p=new pt(0);let f,d,m=l===!0?0:1,v=null,_=0,y=null;function b(R,x){R.getRGB(xl,Qm(a)),i.buffers.color.setClear(xl.r,xl.g,xl.b,x,c)}return{getClearColor:function(){return p},setClearColor:function(R,x=1){p.set(R),m=x,b(p,m)},getClearAlpha:function(){return m},setClearAlpha:function(R){m=R,b(p,m)},render:function(R,x){let C=!1,w=x.isScene===!0?x.background:null;w&&w.isTexture&&(w=(x.backgroundBlurriness>0?n:e).get(w)),w===null?b(p,m):w&&w.isColor&&(b(w,1),C=!0);const S=a.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,c):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||C)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Dl)?(d===void 0&&(d=new jn(new Ks(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Qa(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=gt.getTransfer(w.colorSpace)!==Et,v===w&&_===w.version&&y===a.toneMapping||(d.material.needsUpdate=!0,v=w,_=w.version,y=a.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new jn(new wd(2,2),new Ji({name:"BackgroundMaterial",uniforms:Qa(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.toneMapped=gt.getTransfer(w.colorSpace)!==Et,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),v===w&&_===w.version&&y===a.toneMapping||(f.material.needsUpdate=!0,v=w,_=w.version,y=a.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}}}function o0(a,e,n,i){const s=a.getParameter(a.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||l!==null,p={},f=y(null);let d=f,m=!1;function v(I){return i.isWebGL2?a.bindVertexArray(I):l.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?a.deleteVertexArray(I):l.deleteVertexArrayOES(I)}function y(I){const O=[],N=[],re=[];for(let K=0;K<s;K++)O[K]=0,N[K]=0,re[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:re,object:I,attributes:{},index:null}}function b(){const I=d.newAttributes;for(let O=0,N=I.length;O<N;O++)I[O]=0}function R(I){x(I,0)}function x(I,O){const N=d.newAttributes,re=d.enabledAttributes,K=d.attributeDivisors;N[I]=1,re[I]===0&&(a.enableVertexAttribArray(I),re[I]=1),K[I]!==O&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),K[I]=O)}function C(){const I=d.newAttributes,O=d.enabledAttributes;for(let N=0,re=O.length;N<re;N++)O[N]!==I[N]&&(a.disableVertexAttribArray(N),O[N]=0)}function w(I,O,N,re,K,Q,le){le===!0?a.vertexAttribIPointer(I,O,N,K,Q):a.vertexAttribPointer(I,O,N,re,K,Q)}function S(){G(),m=!0,d!==f&&(d=f,v(d.object))}function G(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:function(I,O,N,re,K){let Q=!1;if(c){const le=(function(F,ie,te){const me=te.wireframe===!0;let Me=p[F.id];Me===void 0&&(Me={},p[F.id]=Me);let ae=Me[ie.id];ae===void 0&&(ae={},Me[ie.id]=ae);let H=ae[me];return H===void 0&&(H=y(i.isWebGL2?a.createVertexArray():l.createVertexArrayOES()),ae[me]=H),H})(re,N,O);d!==le&&(d=le,v(d.object)),Q=(function(F,ie,te,me){const Me=d.attributes,ae=ie.attributes;let H=0;const $=te.getAttributes();for(const W in $)if($[W].location>=0){const M=Me[W];let z=ae[W];if(z===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),M===void 0||M.attribute!==z||z&&M.data!==z.data)return!0;H++}return d.attributesNum!==H||d.index!==me})(I,re,N,K),Q&&(function(F,ie,te,me){const Me={},ae=ie.attributes;let H=0;const $=te.getAttributes();for(const W in $)if($[W].location>=0){let M=ae[W];M===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(M=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(M=F.instanceColor));const z={};z.attribute=M,M&&M.data&&(z.data=M.data),Me[W]=z,H++}d.attributes=Me,d.attributesNum=H,d.index=me})(I,re,N,K)}else{const le=O.wireframe===!0;d.geometry===re.id&&d.program===N.id&&d.wireframe===le||(d.geometry=re.id,d.program=N.id,d.wireframe=le,Q=!0)}K!==null&&n.update(K,a.ELEMENT_ARRAY_BUFFER),(Q||m)&&(m=!1,(function(le,F,ie,te){if(i.isWebGL2===!1&&(le.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const me=te.attributes,Me=ie.getAttributes(),ae=F.defaultAttributeValues;for(const H in Me){const $=Me[H];if($.location>=0){let W=me[H];if(W===void 0&&(H==="instanceMatrix"&&le.instanceMatrix&&(W=le.instanceMatrix),H==="instanceColor"&&le.instanceColor&&(W=le.instanceColor)),W!==void 0){const M=W.normalized,z=W.itemSize,A=n.get(W);if(A===void 0)continue;const T=A.buffer,B=A.type,q=A.bytesPerElement,k=i.isWebGL2===!0&&(B===a.INT||B===a.UNSIGNED_INT||W.gpuType===Om);if(W.isInterleavedBufferAttribute){const Z=W.data,ce=Z.stride,fe=W.offset;if(Z.isInstancedInterleavedBuffer){for(let Ee=0;Ee<$.locationSize;Ee++)x($.location+Ee,Z.meshPerAttribute);le.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ee=0;Ee<$.locationSize;Ee++)R($.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,T);for(let Ee=0;Ee<$.locationSize;Ee++)w($.location+Ee,z/$.locationSize,B,M,ce*q,(fe+z/$.locationSize*Ee)*q,k)}else{if(W.isInstancedBufferAttribute){for(let Z=0;Z<$.locationSize;Z++)x($.location+Z,W.meshPerAttribute);le.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Z=0;Z<$.locationSize;Z++)R($.location+Z);a.bindBuffer(a.ARRAY_BUFFER,T);for(let Z=0;Z<$.locationSize;Z++)w($.location+Z,z/$.locationSize,B,M,z*q,z/$.locationSize*Z*q,k)}}else if(ae!==void 0){const M=ae[H];if(M!==void 0)switch(M.length){case 2:a.vertexAttrib2fv($.location,M);break;case 3:a.vertexAttrib3fv($.location,M);break;case 4:a.vertexAttrib4fv($.location,M);break;default:a.vertexAttrib1fv($.location,M)}}}}C()})(I,O,N,re),K!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,n.get(K).buffer))},reset:S,resetDefaultState:G,dispose:function(){S();for(const I in p){const O=p[I];for(const N in O){const re=O[N];for(const K in re)_(re[K].object),delete re[K];delete O[N]}delete p[I]}},releaseStatesOfGeometry:function(I){if(p[I.id]===void 0)return;const O=p[I.id];for(const N in O){const re=O[N];for(const K in re)_(re[K].object),delete re[K];delete O[N]}delete p[I.id]},releaseStatesOfProgram:function(I){for(const O in p){const N=p[O];if(N[I.id]===void 0)continue;const re=N[I.id];for(const K in re)_(re[K].object),delete re[K];delete N[I.id]}},initAttributes:b,enableAttribute:R,disableUnusedAttributes:C}}function l0(a,e,n,i){const s=i.isWebGL2;let l;this.setMode=function(c){l=c},this.render=function(c,p){a.drawArrays(l,c,p),n.update(p,l,1)},this.renderInstances=function(c,p,f){if(f===0)return;let d,m;if(s)d=a,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[m](l,c,p,f),n.update(p,l,f)},this.renderMultiDraw=function(c,p,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(c[m],p[m]);else{d.multiDrawArraysWEBGL(l,c,0,p,0,f);let m=0;for(let v=0;v<f;v++)m+=p[v];n.update(m,l,1)}}}function u0(a,e,n){let i;function s(G){if(G==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const p=s(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const f=l||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,m=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),b=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),x=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,S=l||e.has("OES_texture_float");return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,precision:c,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:R,maxVaryings:x,maxFragmentUniforms:C,vertexTextures:w,floatFragmentTextures:S,floatVertexTextures:w&&S,maxSamples:l?a.getParameter(a.MAX_SAMPLES):0}}function c0(a){const e=this;let n=null,i=0,s=!1,l=!1;const c=new mi,p=new st,f={value:null,needsUpdate:!1};function d(m,v,_,y){const b=m!==null?m.length:0;let R=null;if(b!==0){if(R=f.value,y!==!0||R===null){const x=_+4*b,C=v.matrixWorldInverse;p.getNormalMatrix(C),(R===null||R.length<x)&&(R=new Float32Array(x));for(let w=0,S=_;w!==b;++w,S+=4)c.copy(m[w]).applyMatrix4(C,p),c.normal.toArray(R,S),R[S+3]=c.constant}f.value=R,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,R}this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const _=m.length!==0||v||i!==0||s;return s=v,i=m.length,_},this.beginShadows=function(){l=!0,d(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,v){n=d(m,v,0)},this.setState=function(m,v,_){const y=m.clippingPlanes,b=m.clipIntersection,R=m.clipShadows,x=a.get(m);if(!s||y===null||y.length===0||l&&!R)l?d(null):(function(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{const C=l?0:i,w=4*C;let S=x.clippingState||null;f.value=S,S=d(y,v,w,_);for(let G=0;G!==w;++G)S[G]=n[G];x.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}}}function d0(a){let e=new WeakMap;function n(s,l){return l===ld?s.mapping=qa:l===ud&&(s.mapping=Ka),s}function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(s){if(s&&s.isTexture){const l=s.mapping;if(l===ld||l===ud){if(e.has(s))return n(e.get(s).texture,s.mapping);{const c=s.image;if(c&&c.height>0){const p=new n0(c.height/2);return p.fromEquirectangularTexture(a,s),e.set(s,p),s.addEventListener("dispose",i),n(p.texture,s.mapping)}return null}}}return s},dispose:function(){e=new WeakMap}}}class h0 extends Ed{constructor(e=-1,n=1,i=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-e,c=i+e,p=s+n,f=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,p-=m*this.view.offsetY,f=p-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,p,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Kp=[.125,.215,.35,.446,.526,.582],Bs=20,$c=new h0,$p=new pt;let Zc=null,Qc=0,Jc=0;const Wi=(1+Math.sqrt(5))/2,Wa=1/Wi,Zp=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Wi,Wa),new X(0,Wi,-Wa),new X(Wa,0,Wi),new X(-Wa,0,Wi),new X(Wi,Wa,0),new X(-Wi,Wa,0)];class Qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qa||e.mapping===Ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ar,minFilter:ar,generateMipmaps:!1,type:Ws,format:gr,colorSpace:kr,depthBuffer:!1},s=Jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,n,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(c){const p=[],f=[],d=[];let m=c;const v=c-4+1+Kp.length;for(let _=0;_<v;_++){const y=Math.pow(2,m);f.push(y);let b=1/y;_>c-4?b=Kp[_-c+4-1]:_===0&&(b=0),d.push(b);const R=1/(y-2),x=-R,C=1+R,w=[x,x,C,x,C,C,x,x,C,C,x,C],S=6,G=6,I=3,O=2,N=1,re=new Float32Array(I*G*S),K=new Float32Array(O*G*S),Q=new Float32Array(N*G*S);for(let F=0;F<S;F++){const ie=F%3*2/3-1,te=F>2?0:-1,me=[ie,te,0,ie+2/3,te,0,ie+2/3,te+1,0,ie,te,0,ie+2/3,te+1,0,ie,te+1,0];re.set(me,I*G*F),K.set(w,O*G*F);const Me=[F,F,F,F,F,F];Q.set(Me,N*G*F)}const le=new Ei;le.setAttribute("position",new _r(re,I)),le.setAttribute("uv",new _r(K,O)),le.setAttribute("faceIndex",new _r(Q,N)),p.push(le),m>4&&m--}return{lodPlanes:p,sizeLods:f,sigmas:d}})(l)),this._blurMaterial=(function(c,p,f){const d=new Float32Array(Bs),m=new X(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/p,CUBEUV_TEXEL_HEIGHT:1/f,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:d},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:m}},vertexShader:Td(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(l,e,n)}return s}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,i,s){const l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor($p),f.toneMapping=_i,f.autoClear=!1;const v=new kl({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new jn(new Ks,v);let y=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,y=!0):(v.color.copy($p),y=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(l.up.set(0,c[R],0),l.lookAt(p[R],0,0)):x===1?(l.up.set(0,0,c[R]),l.lookAt(0,p[R],0)):(l.up.set(0,c[R],0),l.lookAt(0,0,p[R]));const C=this._cubeSize;yl(s,x*C,R>2?C:0,C,C),f.setRenderTarget(s),y&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===qa||e.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new jn(this._lodPlanes[0],l);l.uniforms.envMap.value=e;const p=this._cubeSize;yl(n,0,0,3*p,2*p),i.setRenderTarget(n),i.render(c,$c)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Zp[(s-1)%Zp.length];this._blur(e,s-1,s,l,c)}n.autoClear=i}_blur(e,n,i,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,i,s,"latitudinal",l),this._halfBlur(c,e,i,i,s,"longitudinal",l)}_halfBlur(e,n,i,s,l,c,p){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=new jn(this._lodPlanes[s],d),v=d.uniforms,_=this._sizeLods[i]-1,y=isFinite(l)?Math.PI/(2*_):2*Math.PI/39,b=l/y,R=isFinite(l)?1+Math.floor(3*b):Bs;R>Bs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${R} samples when the maximum is set to 20`);const x=[];let C=0;for(let G=0;G<Bs;++G){const I=G/b,O=Math.exp(-I*I/2);x.push(O),G===0?C+=O:G<R&&(C+=2*O)}for(let G=0;G<x.length;G++)x[G]=x[G]/C;v.envMap.value=e.texture,v.samples.value=R,v.weights.value=x,v.latitudinal.value=c==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:w}=this;v.dTheta.value=y,v.mipInt.value=w-i;const S=this._sizeLods[s];yl(n,3*S*(s>w-4?s-w+4:0),4*(this._cubeSize-S),3*S,2*S),f.setRenderTarget(n),f.render(m,$c)}}function Jp(a,e,n){const i=new Zi(a,e,n);return i.texture.mapping=Dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yl(a,e,n,i,s){a.viewport.set(e,n,i,s),a.scissor.set(e,n,i,s)}function em(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function tm(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function f0(a){let e=new WeakMap,n=null;function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(s){if(s&&s.isTexture){const l=s.mapping,c=l===ld||l===ud,p=l===qa||l===Ka;if(c||p){if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new Qp(a)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||p&&f&&(function(d){let m=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&m++;return m===v})(f)){n===null&&(n=new Qp(a));const d=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",i),d.texture}return null}}}return s},dispose:function(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function p0(a){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function m0(a,e,n,i){const s={},l=new WeakMap;function c(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let y=0,b=_.length;y<b;y++)e.remove(_[y])}d.removeEventListener("dispose",c),delete s[d.id];const m=l.get(d);m&&(e.remove(m),l.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function p(f){const d=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const R=m.array;_=m.version;for(let x=0,C=R.length;x<C;x+=3){const w=R[x+0],S=R[x+1],G=R[x+2];d.push(w,S,S,G,G,w)}}else{if(v===void 0)return;{const R=v.array;_=v.version;for(let x=0,C=R.length/3-1;x<C;x+=3){const w=x+0,S=x+1,G=x+2;d.push(w,S,S,G,G,w)}}}const y=new(Wm(d)?Zm:$m)(d,1);y.version=_;const b=l.get(f);b&&e.remove(b),l.set(f,y)}return{get:function(f,d){return s[d.id]===!0||(d.addEventListener("dispose",c),s[d.id]=!0,n.memory.geometries++),d},update:function(f){const d=f.attributes;for(const v in d)e.update(d[v],a.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let y=0,b=_.length;y<b;y++)e.update(_[y],a.ARRAY_BUFFER)}},getWireframeAttribute:function(f){const d=l.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&p(f)}else p(f);return l.get(f)}}}function g0(a,e,n,i){const s=i.isWebGL2;let l,c,p;this.setMode=function(f){l=f},this.setIndex=function(f){c=f.type,p=f.bytesPerElement},this.render=function(f,d){a.drawElements(l,d,c,f*p),n.update(d,l,1)},this.renderInstances=function(f,d,m){if(m===0)return;let v,_;if(s)v=a,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");v[_](l,d,c,f*p,m),n.update(d,l,m)},this.renderMultiDraw=function(f,d,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<m;_++)this.render(f[_]/p,d[_]);else{v.multiDrawElementsWEBGL(l,d,0,c,f,0,m);let _=0;for(let y=0;y<m;y++)_+=d[y];n.update(_,l,1)}}}function v0(a){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,s){switch(e.calls++,i){case a.TRIANGLES:e.triangles+=s*(n/3);break;case a.LINES:e.lines+=s*(n/2);break;case a.LINE_STRIP:e.lines+=s*(n-1);break;case a.LINE_LOOP:e.lines+=s*n;break;case a.POINTS:e.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function _0(a,e){return a[0]-e[0]}function x0(a,e){return Math.abs(e[1])-Math.abs(a[1])}function y0(a,e,n){const i={},s=new Float32Array(8),l=new WeakMap,c=new Bt,p=[];for(let f=0;f<8;f++)p[f]=[f,0];return{update:function(f,d,m){const v=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=y!==void 0?y.length:0;let R=l.get(d);if(R===void 0||R.count!==b){let te=function(){F.dispose(),l.delete(d),d.removeEventListener("dispose",te)};var _=te;R!==void 0&&R.texture.dispose();const w=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,G=d.morphAttributes.color!==void 0,I=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let re=0;w===!0&&(re=1),S===!0&&(re=2),G===!0&&(re=3);let K=d.attributes.position.count*re,Q=1;K>e.maxTextureSize&&(Q=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const le=new Float32Array(K*Q*4*b),F=new Ym(le,K,Q,b);F.type=vi,F.needsUpdate=!0;const ie=4*re;for(let me=0;me<b;me++){const Me=I[me],ae=O[me],H=N[me],$=K*Q*4*me;for(let W=0;W<Me.count;W++){const M=W*ie;w===!0&&(c.fromBufferAttribute(Me,W),le[$+M+0]=c.x,le[$+M+1]=c.y,le[$+M+2]=c.z,le[$+M+3]=0),S===!0&&(c.fromBufferAttribute(ae,W),le[$+M+4]=c.x,le[$+M+5]=c.y,le[$+M+6]=c.z,le[$+M+7]=0),G===!0&&(c.fromBufferAttribute(H,W),le[$+M+8]=c.x,le[$+M+9]=c.y,le[$+M+10]=c.z,le[$+M+11]=H.itemSize===4?c.w:1)}}R={count:b,texture:F,size:new Ze(K,Q)},l.set(d,R),d.addEventListener("dispose",te)}let x=0;for(let w=0;w<v.length;w++)x+=v[w];const C=d.morphTargetsRelative?1:1-x;m.getUniforms().setValue(a,"morphTargetBaseInfluence",C),m.getUniforms().setValue(a,"morphTargetInfluences",v),m.getUniforms().setValue(a,"morphTargetsTexture",R.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",R.size)}else{const y=v===void 0?0:v.length;let b=i[d.id];if(b===void 0||b.length!==y){b=[];for(let S=0;S<y;S++)b[S]=[S,0];i[d.id]=b}for(let S=0;S<y;S++){const G=b[S];G[0]=S,G[1]=v[S]}b.sort(x0);for(let S=0;S<8;S++)S<y&&b[S][1]?(p[S][0]=b[S][0],p[S][1]=b[S][1]):(p[S][0]=Number.MAX_SAFE_INTEGER,p[S][1]=0);p.sort(_0);const R=d.morphAttributes.position,x=d.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const G=p[S],I=G[0],O=G[1];I!==Number.MAX_SAFE_INTEGER&&O?(R&&d.getAttribute("morphTarget"+S)!==R[I]&&d.setAttribute("morphTarget"+S,R[I]),x&&d.getAttribute("morphNormal"+S)!==x[I]&&d.setAttribute("morphNormal"+S,x[I]),s[S]=O,C+=O):(R&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),x&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),s[S]=0)}const w=d.morphTargetsRelative?1:1-C;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",s)}}}}function S0(a,e,n,i){let s=new WeakMap;function l(c){const p=c.target;p.removeEventListener("dispose",l),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:function(c){const p=i.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==p&&(e.update(d),s.set(d,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return d},dispose:function(){s=new WeakMap}}}class tg extends wn{constructor(e,n,i,s,l,c,p,f,d,m){if((m=m!==void 0?m:Ki)!==Ki&&m!==$a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Ki&&(i=gi),i===void 0&&m===$a&&(i=qi),super(null,s,l,c,p,f,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=p!==void 0?p:cn,this.minFilter=f!==void 0?f:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ng=new wn,rg=new tg(1,1);rg.compareFunction=515;const ig=new Ym,ag=new G_,sg=new Jm,nm=[],rm=[],im=new Float32Array(16),am=new Float32Array(9),sm=new Float32Array(4);function Ja(a,e,n){const i=a[0];if(i<=0||i>0)return a;const s=e*n;let l=nm[s];if(l===void 0&&(l=new Float32Array(s),nm[s]=l),e!==0){i.toArray(l,0);for(let c=1,p=0;c!==e;++c)p+=n,a[c].toArray(l,p)}return l}function Ht(a,e){if(a.length!==e.length)return!1;for(let n=0,i=a.length;n<i;n++)if(a[n]!==e[n])return!1;return!0}function Gt(a,e){for(let n=0,i=e.length;n<i;n++)a[n]=e[n]}function Fl(a,e){let n=rm[e];n===void 0&&(n=new Int32Array(e),rm[e]=n);for(let i=0;i!==e;++i)n[i]=a.allocateTextureUnit();return n}function E0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function M0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;a.uniform2fv(this.addr,e),Gt(n,e)}}function w0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;a.uniform3fv(this.addr,e),Gt(n,e)}}function T0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;a.uniform4fv(this.addr,e),Gt(n,e)}}function R0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;sm.set(i),a.uniformMatrix2fv(this.addr,!1,sm),Gt(n,i)}}function A0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;am.set(i),a.uniformMatrix3fv(this.addr,!1,am),Gt(n,i)}}function b0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;im.set(i),a.uniformMatrix4fv(this.addr,!1,im),Gt(n,i)}}function C0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function L0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;a.uniform2iv(this.addr,e),Gt(n,e)}}function P0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;a.uniform3iv(this.addr,e),Gt(n,e)}}function N0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;a.uniform4iv(this.addr,e),Gt(n,e)}}function D0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function U0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;a.uniform2uiv(this.addr,e),Gt(n,e)}}function I0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;a.uniform3uiv(this.addr,e),Gt(n,e)}}function O0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;a.uniform4uiv(this.addr,e),Gt(n,e)}}function k0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);const l=this.type===a.SAMPLER_2D_SHADOW?rg:ng;n.setTexture2D(e||l,s)}function F0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||ag,s)}function z0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||sg,s)}function B0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||ig,s)}function H0(a,e){a.uniform1fv(this.addr,e)}function G0(a,e){const n=Ja(e,this.size,2);a.uniform2fv(this.addr,n)}function V0(a,e){const n=Ja(e,this.size,3);a.uniform3fv(this.addr,n)}function W0(a,e){const n=Ja(e,this.size,4);a.uniform4fv(this.addr,n)}function j0(a,e){const n=Ja(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function X0(a,e){const n=Ja(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function Y0(a,e){const n=Ja(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function q0(a,e){a.uniform1iv(this.addr,e)}function K0(a,e){a.uniform2iv(this.addr,e)}function $0(a,e){a.uniform3iv(this.addr,e)}function Z0(a,e){a.uniform4iv(this.addr,e)}function Q0(a,e){a.uniform1uiv(this.addr,e)}function J0(a,e){a.uniform2uiv(this.addr,e)}function ex(a,e){a.uniform3uiv(this.addr,e)}function tx(a,e){a.uniform4uiv(this.addr,e)}function nx(a,e,n){const i=this.cache,s=e.length,l=Fl(n,s);Ht(i,l)||(a.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==s;++c)n.setTexture2D(e[c]||ng,l[c])}function rx(a,e,n){const i=this.cache,s=e.length,l=Fl(n,s);Ht(i,l)||(a.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==s;++c)n.setTexture3D(e[c]||ag,l[c])}function ix(a,e,n){const i=this.cache,s=e.length,l=Fl(n,s);Ht(i,l)||(a.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==s;++c)n.setTextureCube(e[c]||sg,l[c])}function ax(a,e,n){const i=this.cache,s=e.length,l=Fl(n,s);Ht(i,l)||(a.uniform1iv(this.addr,l),Gt(i,l));for(let c=0;c!==s;++c)n.setTexture2DArray(e[c]||ig,l[c])}class sx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=(function(s){switch(s){case 5126:return E0;case 35664:return M0;case 35665:return w0;case 35666:return T0;case 35674:return R0;case 35675:return A0;case 35676:return b0;case 5124:case 35670:return C0;case 35667:case 35671:return L0;case 35668:case 35672:return P0;case 35669:case 35673:return N0;case 5125:return D0;case 36294:return U0;case 36295:return I0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return B0}})(n.type)}}class ox{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=(function(s){switch(s){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return j0;case 35675:return X0;case 35676:return Y0;case 5124:case 35670:return q0;case 35667:case 35671:return K0;case 35668:case 35672:return $0;case 35669:case 35673:return Z0;case 5125:return Q0;case 36294:return J0;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return ax}})(n.type)}}class lx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const p=s[l];p.setValue(e,n[p.id],i)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function om(a,e){a.seq.push(e),a.map[e.id]=e}function ux(a,e,n){const i=a.name,s=i.length;for(ed.lastIndex=0;;){const l=ed.exec(i),c=ed.lastIndex;let p=l[1];const f=l[2]==="]",d=l[3];if(f&&(p|=0),d===void 0||d==="["&&c+2===s){om(n,d===void 0?new sx(p,a,e):new ox(p,a,e));break}{let m=n.map[p];m===void 0&&(m=new lx(p),om(n,m)),n=m}}}class wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(n,s);ux(l,e.getUniformLocation(n,l.name),this)}}setValue(e,n,i,s){const l=this.map[n];l!==void 0&&l.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let l=0,c=n.length;l!==c;++l){const p=n[l],f=i[p.id];f.needsUpdate!==!1&&p.setValue(e,f.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in n&&i.push(c)}return i}}function lm(a,e,n){const i=a.createShader(e);return a.shaderSource(i,n),a.compileShader(i),i}const cx=37297;let dx=0;function um(a,e,n){const i=a.getShaderParameter(e,a.COMPILE_STATUS),s=a.getShaderInfoLog(e).trim();if(i&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+s+`

`+(function(p,f){const d=p.split(`
`),m=[],v=Math.max(f-6,0),_=Math.min(f+6,d.length);for(let y=v;y<_;y++){const b=y+1;m.push(`${b===f?">":" "} ${b}: ${d[y]}`)}return m.join(`
`)})(a.getShaderSource(e),c)}return s}function hx(a,e){const n=(function(i){const s=gt.getPrimaries(gt.workingColorSpace),l=gt.getPrimaries(i);let c;switch(s===l?c="":s===Cl&&l===bl?c="LinearDisplayP3ToLinearSRGB":s===bl&&l===Cl&&(c="LinearSRGBToLinearDisplayP3"),i){case kr:case Ul:return[c,"LinearTransferOETF"];case zt:case Sd:return[c,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[c,"LinearTransferOETF"]}})(e);return`vec4 ${a}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fx(a,e){let n;switch(e){case b_:n="Linear";break;case C_:n="Reinhard";break;case L_:n="OptimizedCineon";break;case P_:n="ACESFilmic";break;case D_:n="AgX";break;case N_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ja(a){return a!==""}function cm(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const px=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(a){return a.replace(px,gx)}const mx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gx(a,e){let n=nt[e];if(n===void 0){const i=mx.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return md(n)}const vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(a){return a.replace(vx,_x)}function _x(a,e,n,i){let s="";for(let l=parseInt(e);l<parseInt(n);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function fm(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(a,e,n,i){const s=a.getContext(),l=n.defines;let c=n.vertexShader,p=n.fragmentShader;const f=(function(F){let ie="SHADOWMAP_TYPE_BASIC";return F.shadowMapType===Dm?ie="SHADOWMAP_TYPE_PCF":F.shadowMapType===T_?ie="SHADOWMAP_TYPE_PCF_SOFT":F.shadowMapType===Ir&&(ie="SHADOWMAP_TYPE_VSM"),ie})(n),d=(function(F){let ie="ENVMAP_TYPE_CUBE";if(F.envMap)switch(F.envMapMode){case qa:case Ka:ie="ENVMAP_TYPE_CUBE";break;case Dl:ie="ENVMAP_TYPE_CUBE_UV"}return ie})(n),m=(function(F){let ie="ENVMAP_MODE_REFLECTION";return F.envMap&&F.envMapMode===Ka&&(ie="ENVMAP_MODE_REFRACTION"),ie})(n),v=(function(F){let ie="ENVMAP_BLENDING_NONE";if(F.envMap)switch(F.combine){case Um:ie="ENVMAP_BLENDING_MULTIPLY";break;case R_:ie="ENVMAP_BLENDING_MIX";break;case A_:ie="ENVMAP_BLENDING_ADD"}return ie})(n),_=(function(F){const ie=F.envMapCubeUVHeight;if(ie===null)return null;const te=Math.log2(ie)-2,me=1/ie;return{texelWidth:1/(3*Math.max(Math.pow(2,te),112)),texelHeight:me,maxMip:te}})(n),y=n.isWebGL2?"":(function(F){return[F.extensionDerivatives||F.envMapCubeUVHeight||F.bumpMap||F.normalMapTangentSpace||F.clearcoatNormalMap||F.flatShading||F.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(F.extensionFragDepth||F.logarithmicDepthBuffer)&&F.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",F.extensionDrawBuffers&&F.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(F.extensionShaderTextureLOD||F.envMap||F.transmission)&&F.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ja).join(`
`)})(n),b=(function(F){return[F.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ja).join(`
`)})(n),R=(function(F){const ie=[];for(const te in F){const me=F[te];me!==!1&&ie.push("#define "+te+" "+me)}return ie.join(`
`)})(l),x=s.createProgram();let C,w,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(C=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(ja).join(`
`),C.length>0&&(C+=`
`),w=[y,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(ja).join(`
`),w.length>0&&(w+=`
`)):(C=[fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),w=[y,fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?nt.tonemapping_pars_fragment:"",n.toneMapping!==_i?fx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,hx("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),c=md(c),c=cm(c,n),c=dm(c,n),p=md(p),p=cm(p,n),p=dm(p,n),c=hm(c),p=hm(p),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,C=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,w=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const G=S+C+c,I=S+w+p,O=lm(s,s.VERTEX_SHADER,G),N=lm(s,s.FRAGMENT_SHADER,I);function re(F){if(a.debug.checkShaderErrors){const ie=s.getProgramInfoLog(x).trim(),te=s.getShaderInfoLog(O).trim(),me=s.getShaderInfoLog(N).trim();let Me=!0,ae=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Me=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,x,O,N);else{const H=um(s,O,"vertex"),$=um(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+H+`
`+$)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):te!==""&&me!==""||(ae=!1);ae&&(F.diagnostics={runnable:Me,programLog:ie,vertexShader:{log:te,prefix:C},fragmentShader:{log:me,prefix:w}})}s.deleteShader(O),s.deleteShader(N),K=new wl(s,x),Q=(function(ie,te){const me={},Me=ie.getProgramParameter(te,ie.ACTIVE_ATTRIBUTES);for(let ae=0;ae<Me;ae++){const H=ie.getActiveAttrib(te,ae),$=H.name;let W=1;H.type===ie.FLOAT_MAT2&&(W=2),H.type===ie.FLOAT_MAT3&&(W=3),H.type===ie.FLOAT_MAT4&&(W=4),me[$]={type:H.type,location:ie.getAttribLocation(te,$),locationSize:W}}return me})(s,x)}let K,Q;s.attachShader(x,O),s.attachShader(x,N),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x),this.getUniforms=function(){return K===void 0&&re(this),K},this.getAttributes=function(){return Q===void 0&&re(this),Q};let le=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return le===!1&&(le=s.getProgramParameter(x,cx)),le},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=N,this}let yx=0;class Sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ex(e),n.set(e,i)),i}}class Ex{constructor(e){this.id=yx++,this.code=e,this.usedTimes=0}}function Mx(a,e,n,i,s,l,c){const p=new qm,f=new Sx,d=[],m=s.isWebGL2,v=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(x){return x===0?"uv":`uv${x}`}return{getParameters:function(x,C,w,S,G){const I=S.fog,O=G.geometry,N=x.isMeshStandardMaterial?S.environment:null,re=(x.isMeshStandardMaterial?n:e).get(x.envMap||N),K=re&&re.mapping===Dl?re.image.height:null,Q=b[x.type];x.precision!==null&&(y=s.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const le=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,F=le!==void 0?le.length:0;let ie,te,me,Me,ae=0;if(O.morphAttributes.position!==void 0&&(ae=1),O.morphAttributes.normal!==void 0&&(ae=2),O.morphAttributes.color!==void 0&&(ae=3),Q){const Lt=mr[Q];ie=Lt.vertexShader,te=Lt.fragmentShader}else ie=x.vertexShader,te=x.fragmentShader,f.update(x),me=f.getVertexShaderID(x),Me=f.getFragmentShaderID(x);const H=a.getRenderTarget(),$=G.isInstancedMesh===!0,W=G.isBatchedMesh===!0,M=!!x.map,z=!!x.matcap,A=!!re,T=!!x.aoMap,B=!!x.lightMap,q=!!x.bumpMap,k=!!x.normalMap,Z=!!x.displacementMap,ce=!!x.emissiveMap,fe=!!x.metalnessMap,Ee=!!x.roughnessMap,Re=x.anisotropy>0,Ne=x.clearcoat>0,P=x.iridescence>0,we=x.sheen>0,he=x.transmission>0,ue=Re&&!!x.anisotropyMap,ve=Ne&&!!x.clearcoatMap,Ae=Ne&&!!x.clearcoatNormalMap,be=Ne&&!!x.clearcoatRoughnessMap,Pe=P&&!!x.iridescenceMap,Be=P&&!!x.iridescenceThicknessMap,De=we&&!!x.sheenColorMap,Ue=we&&!!x.sheenRoughnessMap,Xe=!!x.specularMap,Mt=!!x.specularColorMap,Ge=!!x.specularIntensityMap,Qe=he&&!!x.transmissionMap,Je=he&&!!x.thicknessMap,Tn=!!x.gradientMap,Ut=!!x.alphaMap,j=x.alphaTest>0,Ie=!!x.alphaHash,$e=!!x.extensions,ct=!!O.attributes.uv1,ne=!!O.attributes.uv2,Yt=!!O.attributes.uv3;let bt=_i;return x.toneMapped&&(H!==null&&H.isXRRenderTarget!==!0||(bt=a.toneMapping)),{isWebGL2:m,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:te,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:W,instancing:$,instancingColor:$&&G.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:H===null?a.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:kr,map:M,matcap:z,envMap:A,envMapMode:A&&re.mapping,envMapCubeUVHeight:K,aoMap:T,lightMap:B,bumpMap:q,normalMap:k,displacementMap:_&&Z,emissiveMap:ce,normalMapObjectSpace:k&&x.normalMapType===1,normalMapTangentSpace:k&&x.normalMapType===0,metalnessMap:fe,roughnessMap:Ee,anisotropy:Re,anisotropyMap:ue,clearcoat:Ne,clearcoatMap:ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:be,iridescence:P,iridescenceMap:Pe,iridescenceThicknessMap:Be,sheen:we,sheenColorMap:De,sheenRoughnessMap:Ue,specularMap:Xe,specularColorMap:Mt,specularIntensityMap:Ge,transmission:he,transmissionMap:Qe,thicknessMap:Je,gradientMap:Tn,opaque:x.transparent===!1&&x.blending===1,alphaMap:Ut,alphaTest:j,alphaHash:Ie,combine:x.combine,mapUv:M&&R(x.map.channel),aoMapUv:T&&R(x.aoMap.channel),lightMapUv:B&&R(x.lightMap.channel),bumpMapUv:q&&R(x.bumpMap.channel),normalMapUv:k&&R(x.normalMap.channel),displacementMapUv:Z&&R(x.displacementMap.channel),emissiveMapUv:ce&&R(x.emissiveMap.channel),metalnessMapUv:fe&&R(x.metalnessMap.channel),roughnessMapUv:Ee&&R(x.roughnessMap.channel),anisotropyMapUv:ue&&R(x.anisotropyMap.channel),clearcoatMapUv:ve&&R(x.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&R(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&R(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&R(x.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&R(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&R(x.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&R(x.sheenRoughnessMap.channel),specularMapUv:Xe&&R(x.specularMap.channel),specularColorMapUv:Mt&&R(x.specularColorMap.channel),specularIntensityMapUv:Ge&&R(x.specularIntensityMap.channel),transmissionMapUv:Qe&&R(x.transmissionMap.channel),thicknessMapUv:Je&&R(x.thicknessMap.channel),alphaMapUv:Ut&&R(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(k||Re),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ct,vertexUv2s:ne,vertexUv3s:Yt,pointsUvs:G.isPoints===!0&&!!O.attributes.uv&&(M||Ut),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:G.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&w.length>0,shadowMapType:a.shadowMap.type,toneMapping:bt,useLegacyLights:a._useLegacyLights,decodeVideoTexture:M&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:$e&&x.extensions.derivatives===!0,extensionFragDepth:$e&&x.extensions.fragDepth===!0,extensionDrawBuffers:$e&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:$e&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:$e&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}},getProgramCacheKey:function(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)C.push(w),C.push(x.defines[w]);return x.isRawShaderMaterial===!1&&((function(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)})(C,x),(function(w,S){p.disableAll(),S.isWebGL2&&p.enable(0),S.supportsVertexTextures&&p.enable(1),S.instancing&&p.enable(2),S.instancingColor&&p.enable(3),S.matcap&&p.enable(4),S.envMap&&p.enable(5),S.normalMapObjectSpace&&p.enable(6),S.normalMapTangentSpace&&p.enable(7),S.clearcoat&&p.enable(8),S.iridescence&&p.enable(9),S.alphaTest&&p.enable(10),S.vertexColors&&p.enable(11),S.vertexAlphas&&p.enable(12),S.vertexUv1s&&p.enable(13),S.vertexUv2s&&p.enable(14),S.vertexUv3s&&p.enable(15),S.vertexTangents&&p.enable(16),S.anisotropy&&p.enable(17),S.alphaHash&&p.enable(18),S.batching&&p.enable(19),w.push(p.mask),p.disableAll(),S.fog&&p.enable(0),S.useFog&&p.enable(1),S.flatShading&&p.enable(2),S.logarithmicDepthBuffer&&p.enable(3),S.skinning&&p.enable(4),S.morphTargets&&p.enable(5),S.morphNormals&&p.enable(6),S.morphColors&&p.enable(7),S.premultipliedAlpha&&p.enable(8),S.shadowMapEnabled&&p.enable(9),S.useLegacyLights&&p.enable(10),S.doubleSided&&p.enable(11),S.flipSided&&p.enable(12),S.useDepthPacking&&p.enable(13),S.dithering&&p.enable(14),S.transmission&&p.enable(15),S.sheen&&p.enable(16),S.opaque&&p.enable(17),S.pointsUvs&&p.enable(18),S.decodeVideoTexture&&p.enable(19),w.push(p.mask)})(C,x),C.push(a.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()},getUniforms:function(x){const C=b[x.type];let w;if(C){const S=mr[C];w=e0.clone(S.uniforms)}else w=x.uniforms;return w},acquireProgram:function(x,C){let w;for(let S=0,G=d.length;S<G;S++){const I=d[S];if(I.cacheKey===C){w=I,++w.usedTimes;break}}return w===void 0&&(w=new xx(a,C,x,l),d.push(w)),w},releaseProgram:function(x){if(--x.usedTimes==0){const C=d.indexOf(x);d[C]=d[d.length-1],d.pop(),x.destroy()}},releaseShaderCache:function(x){f.remove(x)},programs:d,dispose:function(){f.dispose()}}}function wx(){let a=new WeakMap;return{get:function(e){let n=a.get(e);return n===void 0&&(n={},a.set(e,n)),n},remove:function(e){a.delete(e)},update:function(e,n,i){a.get(e)[n]=i},dispose:function(){a=new WeakMap}}}function Tx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function pm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function mm(){const a=[];let e=0;const n=[],i=[],s=[];function l(c,p,f,d,m,v){let _=a[e];return _===void 0?(_={id:c.id,object:c,geometry:p,material:f,groupOrder:d,renderOrder:c.renderOrder,z:m,group:v},a[e]=_):(_.id=c.id,_.object=c,_.geometry=p,_.material=f,_.groupOrder=d,_.renderOrder=c.renderOrder,_.z=m,_.group=v),e++,_}return{opaque:n,transmissive:i,transparent:s,init:function(){e=0,n.length=0,i.length=0,s.length=0},push:function(c,p,f,d,m,v){const _=l(c,p,f,d,m,v);f.transmission>0?i.push(_):f.transparent===!0?s.push(_):n.push(_)},unshift:function(c,p,f,d,m,v){const _=l(c,p,f,d,m,v);f.transmission>0?i.unshift(_):f.transparent===!0?s.unshift(_):n.unshift(_)},finish:function(){for(let c=e,p=a.length;c<p;c++){const f=a[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}},sort:function(c,p){n.length>1&&n.sort(c||Tx),i.length>1&&i.sort(p||pm),s.length>1&&s.sort(p||pm)}}}function Rx(){let a=new WeakMap;return{get:function(e,n){const i=a.get(e);let s;return i===void 0?(s=new mm,a.set(e,[s])):n>=i.length?(s=new mm,i.push(s)):s=i[n],s},dispose:function(){a=new WeakMap}}}function Ax(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new pt};break;case"SpotLight":n={position:new X,direction:new X,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new X,halfWidth:new X,halfHeight:new X}}return a[e.id]=n,n}}}let bx=0;function Cx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Lx(a,e){const n=new Ax,i=(function(){const f={};return{get:function(d){if(f[d.id]!==void 0)return f[d.id];let m;switch(d.type){case"DirectionalLight":case"SpotLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3}}return f[d.id]=m,m}}})(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)s.probe.push(new X);const l=new X,c=new ot,p=new ot;return{setup:function(f,d){let m=0,v=0,_=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let y=0,b=0,R=0,x=0,C=0,w=0,S=0,G=0,I=0,O=0,N=0;f.sort(Cx);const re=d===!0?Math.PI:1;for(let Q=0,le=f.length;Q<le;Q++){const F=f[Q],ie=F.color,te=F.intensity,me=F.distance,Me=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=ie.r*te*re,v+=ie.g*te*re,_+=ie.b*te*re;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(F.sh.coefficients[ae],te);N++}else if(F.isDirectionalLight){const ae=n.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity*re),F.castShadow){const H=F.shadow,$=i.get(F);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.directionalShadow[y]=$,s.directionalShadowMap[y]=Me,s.directionalShadowMatrix[y]=F.shadow.matrix,w++}s.directional[y]=ae,y++}else if(F.isSpotLight){const ae=n.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(ie).multiplyScalar(te*re),ae.distance=me,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,s.spot[R]=ae;const H=F.shadow;if(F.map&&(s.spotLightMap[I]=F.map,I++,H.updateMatrices(F),F.castShadow&&O++),s.spotLightMatrix[R]=H.matrix,F.castShadow){const $=i.get(F);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.spotShadow[R]=$,s.spotShadowMap[R]=Me,G++}R++}else if(F.isRectAreaLight){const ae=n.get(F);ae.color.copy(ie).multiplyScalar(te),ae.halfWidth.set(.5*F.width,0,0),ae.halfHeight.set(0,.5*F.height,0),s.rectArea[x]=ae,x++}else if(F.isPointLight){const ae=n.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity*re),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const H=F.shadow,$=i.get(F);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,s.pointShadow[b]=$,s.pointShadowMap[b]=Me,s.pointShadowMatrix[b]=F.shadow.matrix,S++}s.point[b]=ae,b++}else if(F.isHemisphereLight){const ae=n.get(F);ae.skyColor.copy(F.color).multiplyScalar(te*re),ae.groundColor.copy(F.groundColor).multiplyScalar(te*re),s.hemi[C]=ae,C++}}x>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=_;const K=s.hash;K.directionalLength===y&&K.pointLength===b&&K.spotLength===R&&K.rectAreaLength===x&&K.hemiLength===C&&K.numDirectionalShadows===w&&K.numPointShadows===S&&K.numSpotShadows===G&&K.numSpotMaps===I&&K.numLightProbes===N||(s.directional.length=y,s.spot.length=R,s.rectArea.length=x,s.point.length=b,s.hemi.length=C,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=G,s.spotShadowMap.length=G,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=G+I-O,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=N,K.directionalLength=y,K.pointLength=b,K.spotLength=R,K.rectAreaLength=x,K.hemiLength=C,K.numDirectionalShadows=w,K.numPointShadows=S,K.numSpotShadows=G,K.numSpotMaps=I,K.numLightProbes=N,s.version=bx++)},setupView:function(f,d){let m=0,v=0,_=0,y=0,b=0;const R=d.matrixWorldInverse;for(let x=0,C=f.length;x<C;x++){const w=f[x];if(w.isDirectionalLight){const S=s.directional[m];S.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(R),m++}else if(w.isSpotLight){const S=s.spot[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(R),S.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(R),_++}else if(w.isRectAreaLight){const S=s.rectArea[y];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(R),p.identity(),c.copy(w.matrixWorld),c.premultiply(R),p.extractRotation(c),S.halfWidth.set(.5*w.width,0,0),S.halfHeight.set(0,.5*w.height,0),S.halfWidth.applyMatrix4(p),S.halfHeight.applyMatrix4(p),y++}else if(w.isPointLight){const S=s.point[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(R),v++}else if(w.isHemisphereLight){const S=s.hemi[b];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(R),b++}}},state:s}}function gm(a,e){const n=new Lx(a,e),i=[],s=[];return{init:function(){i.length=0,s.length=0},state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:function(l){n.setup(i,l)},setupLightsView:function(l){n.setupView(i,l)},pushLight:function(l){i.push(l)},pushShadow:function(l){s.push(l)}}}function Px(a,e){let n=new WeakMap;return{get:function(i,s=0){const l=n.get(i);let c;return l===void 0?(c=new gm(a,e),n.set(i,[c])):s>=l.length?(c=new gm(a,e),l.push(c)):c=l[s],c},dispose:function(){n=new WeakMap}}}class Nx extends Ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dx extends Ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ux(a,e,n){let i=new Md;const s=new Ze,l=new Ze,c=new Bt,p=new Nx({depthPacking:3201}),f=new Dx,d={},m=n.maxTextureSize,v={[xi]:Mn,[Mn]:xi,2:2},_=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:`void main() {
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
}`}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ei;b.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new jn(b,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dm;let C=this.type;function w(O,N){const re=e.update(R);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Zi(s.x,s.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,a.setRenderTarget(O.mapPass),a.clear(),a.renderBufferDirect(N,null,re,_,R,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,a.setRenderTarget(O.map),a.clear(),a.renderBufferDirect(N,null,re,y,R,null)}function S(O,N,re,K){let Q=null;const le=re.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(le!==void 0)Q=le;else if(Q=re.isPointLight===!0?f:p,a.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const F=Q.uuid,ie=N.uuid;let te=d[F];te===void 0&&(te={},d[F]=te);let me=te[ie];me===void 0&&(me=Q.clone(),te[ie]=me,N.addEventListener("dispose",I)),Q=me}return Q.visible=N.visible,Q.wireframe=N.wireframe,Q.side=K===Ir?N.shadowSide!==null?N.shadowSide:N.side:N.shadowSide!==null?N.shadowSide:v[N.side],Q.alphaMap=N.alphaMap,Q.alphaTest=N.alphaTest,Q.map=N.map,Q.clipShadows=N.clipShadows,Q.clippingPlanes=N.clippingPlanes,Q.clipIntersection=N.clipIntersection,Q.displacementMap=N.displacementMap,Q.displacementScale=N.displacementScale,Q.displacementBias=N.displacementBias,Q.wireframeLinewidth=N.wireframeLinewidth,Q.linewidth=N.linewidth,re.isPointLight===!0&&Q.isMeshDistanceMaterial===!0&&(a.properties.get(Q).light=re),Q}function G(O,N,re,K,Q){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&Q===Ir)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,O.matrixWorld);const F=e.update(O),ie=O.material;if(Array.isArray(ie)){const te=F.groups;for(let me=0,Me=te.length;me<Me;me++){const ae=te[me],H=ie[ae.materialIndex];if(H&&H.visible){const $=S(O,H,K,Q);O.onBeforeShadow(a,O,N,re,F,$,ae),a.renderBufferDirect(re,null,F,$,O,ae),O.onAfterShadow(a,O,N,re,F,$,ae)}}}else if(ie.visible){const te=S(O,ie,K,Q);O.onBeforeShadow(a,O,N,re,F,te,null),a.renderBufferDirect(re,null,F,te,O,null),O.onAfterShadow(a,O,N,re,F,te,null)}}const le=O.children;for(let F=0,ie=le.length;F<ie;F++)G(le[F],N,re,K,Q)}function I(O){O.target.removeEventListener("dispose",I);for(const N in d){const re=d[N],K=O.target.uuid;K in re&&(re[K].dispose(),delete re[K])}}this.render=function(O,N,re){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const K=a.getRenderTarget(),Q=a.getActiveCubeFace(),le=a.getActiveMipmapLevel(),F=a.state;F.setBlending(0),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const ie=C!==Ir&&this.type===Ir,te=C===Ir&&this.type!==Ir;for(let me=0,Me=O.length;me<Me;me++){const ae=O[me],H=ae.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const $=H.getFrameExtents();if(s.multiply($),l.copy(H.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/$.x),s.x=l.x*$.x,H.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/$.y),s.y=l.y*$.y,H.mapSize.y=l.y)),H.map===null||ie===!0||te===!0){const M=this.type!==Ir?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new Zi(s.x,s.y,M),H.map.texture.name=ae.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();const W=H.getViewportCount();for(let M=0;M<W;M++){const z=H.getViewport(M);c.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),F.viewport(c),H.updateMatrices(ae,M),i=H.getFrustum(),G(N,re,H.camera,ae,this.type)}H.isPointLightShadow!==!0&&this.type===Ir&&w(H,re),H.needsUpdate=!1}C=this.type,x.needsUpdate=!1,a.setRenderTarget(K,Q,le)}}function Ix(a,e,n){const i=n.isWebGL2,s=new function(){let P=!1;const we=new Bt;let he=null;const ue=new Bt(0,0,0,0);return{setMask:function(ve){he===ve||P||(a.colorMask(ve,ve,ve,ve),he=ve)},setLocked:function(ve){P=ve},setClear:function(ve,Ae,be,Pe,Be){Be===!0&&(ve*=Pe,Ae*=Pe,be*=Pe),we.set(ve,Ae,be,Pe),ue.equals(we)===!1&&(a.clearColor(ve,Ae,be,Pe),ue.copy(we))},reset:function(){P=!1,he=null,ue.set(-1,0,0,0)}}},l=new function(){let P=!1,we=null,he=null,ue=null;return{setTest:function(ve){ve?q(a.DEPTH_TEST):k(a.DEPTH_TEST)},setMask:function(ve){we===ve||P||(a.depthMask(ve),we=ve)},setFunc:function(ve){if(he!==ve){switch(ve){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:default:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL)}he=ve}},setLocked:function(ve){P=ve},setClear:function(ve){ue!==ve&&(a.clearDepth(ve),ue=ve)},reset:function(){P=!1,we=null,he=null,ue=null}}},c=new function(){let P=!1,we=null,he=null,ue=null,ve=null,Ae=null,be=null,Pe=null,Be=null;return{setTest:function(De){P||(De?q(a.STENCIL_TEST):k(a.STENCIL_TEST))},setMask:function(De){we===De||P||(a.stencilMask(De),we=De)},setFunc:function(De,Ue,Xe){he===De&&ue===Ue&&ve===Xe||(a.stencilFunc(De,Ue,Xe),he=De,ue=Ue,ve=Xe)},setOp:function(De,Ue,Xe){Ae===De&&be===Ue&&Pe===Xe||(a.stencilOp(De,Ue,Xe),Ae=De,be=Ue,Pe=Xe)},setLocked:function(De){P=De},setClear:function(De){Be!==De&&(a.clearStencil(De),Be=De)},reset:function(){P=!1,we=null,he=null,ue=null,ve=null,Ae=null,be=null,Pe=null,Be=null}}},p=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,_=[],y=null,b=!1,R=null,x=null,C=null,w=null,S=null,G=null,I=null,O=new pt(0,0,0),N=0,re=!1,K=null,Q=null,le=null,F=null,ie=null;const te=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,Me=0;const ae=a.getParameter(a.VERSION);ae.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(ae)[1]),me=Me>=1):ae.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),me=Me>=2);let H=null,$={};const W=a.getParameter(a.SCISSOR_BOX),M=a.getParameter(a.VIEWPORT),z=new Bt().fromArray(W),A=new Bt().fromArray(M);function T(P,we,he,ue){const ve=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(P,Ae),a.texParameteri(P,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(P,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let be=0;be<he;be++)!i||P!==a.TEXTURE_3D&&P!==a.TEXTURE_2D_ARRAY?a.texImage2D(we+be,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ve):a.texImage3D(we,0,a.RGBA,1,1,ue,0,a.RGBA,a.UNSIGNED_BYTE,ve);return Ae}const B={};function q(P){d[P]!==!0&&(a.enable(P),d[P]=!0)}function k(P){d[P]!==!1&&(a.disable(P),d[P]=!1)}B[a.TEXTURE_2D]=T(a.TEXTURE_2D,a.TEXTURE_2D,1),B[a.TEXTURE_CUBE_MAP]=T(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(B[a.TEXTURE_2D_ARRAY]=T(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),B[a.TEXTURE_3D]=T(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),q(a.DEPTH_TEST),l.setFunc(3),Ee(!1),Re(1),q(a.CULL_FACE),fe(0);const Z={[ji]:a.FUNC_ADD,101:a.FUNC_SUBTRACT,102:a.FUNC_REVERSE_SUBTRACT};if(i)Z[103]=a.MIN,Z[104]=a.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Z[103]=P.MIN_EXT,Z[104]=P.MAX_EXT)}const ce={200:a.ZERO,201:a.ONE,202:a.SRC_COLOR,[sd]:a.SRC_ALPHA,210:a.SRC_ALPHA_SATURATE,208:a.DST_COLOR,206:a.DST_ALPHA,203:a.ONE_MINUS_SRC_COLOR,[od]:a.ONE_MINUS_SRC_ALPHA,209:a.ONE_MINUS_DST_COLOR,207:a.ONE_MINUS_DST_ALPHA,211:a.CONSTANT_COLOR,212:a.ONE_MINUS_CONSTANT_COLOR,213:a.CONSTANT_ALPHA,214:a.ONE_MINUS_CONSTANT_ALPHA};function fe(P,we,he,ue,ve,Ae,be,Pe,Be,De){if(P!==0){if(b===!1&&(q(a.BLEND),b=!0),P===5)ve=ve||we,Ae=Ae||he,be=be||ue,we===x&&ve===S||(a.blendEquationSeparate(Z[we],Z[ve]),x=we,S=ve),he===C&&ue===w&&Ae===G&&be===I||(a.blendFuncSeparate(ce[he],ce[ue],ce[Ae],ce[be]),C=he,w=ue,G=Ae,I=be),Pe.equals(O)!==!1&&Be===N||(a.blendColor(Pe.r,Pe.g,Pe.b,Be),O.copy(Pe),N=Be),R=P,re=!1;else if(P!==R||De!==re){if(x===ji&&S===ji||(a.blendEquation(a.FUNC_ADD),x=ji,S=ji),De)switch(P){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}else switch(P){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}C=null,w=null,G=null,I=null,O.set(0,0,0),N=0,R=P,re=De}}else b===!0&&(k(a.BLEND),b=!1)}function Ee(P){K!==P&&(P?a.frontFace(a.CW):a.frontFace(a.CCW),K=P)}function Re(P){P!==0?(q(a.CULL_FACE),P!==Q&&(P===1?a.cullFace(a.BACK):P===2?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):k(a.CULL_FACE),Q=P}function Ne(P,we,he){P?(q(a.POLYGON_OFFSET_FILL),F===we&&ie===he||(a.polygonOffset(we,he),F=we,ie=he)):k(a.POLYGON_OFFSET_FILL)}return{buffers:{color:s,depth:l,stencil:c},enable:q,disable:k,bindFramebuffer:function(P,we){return m[P]!==we&&(a.bindFramebuffer(P,we),m[P]=we,i&&(P===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=we),P===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=we)),!0)},drawBuffers:function(P,we){let he=_,ue=!1;if(P)if(he=v.get(we),he===void 0&&(he=[],v.set(we,he)),P.isWebGLMultipleRenderTargets){const ve=P.texture;if(he.length!==ve.length||he[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,be=ve.length;Ae<be;Ae++)he[Ae]=a.COLOR_ATTACHMENT0+Ae;he.length=ve.length,ue=!0}}else he[0]!==a.COLOR_ATTACHMENT0&&(he[0]=a.COLOR_ATTACHMENT0,ue=!0);else he[0]!==a.BACK&&(he[0]=a.BACK,ue=!0);ue&&(n.isWebGL2?a.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))},useProgram:function(P){return y!==P&&(a.useProgram(P),y=P,!0)},setBlending:fe,setMaterial:function(P,we){P.side===2?k(a.CULL_FACE):q(a.CULL_FACE);let he=P.side===Mn;we&&(he=!he),Ee(he),P.blending===1&&P.transparent===!1?fe(0):fe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const ue=P.stencilWrite;c.setTest(ue),ue&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ne(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?q(a.SAMPLE_ALPHA_TO_COVERAGE):k(a.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:Ee,setCullFace:Re,setLineWidth:function(P){P!==le&&(me&&a.lineWidth(P),le=P)},setPolygonOffset:Ne,setScissorTest:function(P){P?q(a.SCISSOR_TEST):k(a.SCISSOR_TEST)},activeTexture:function(P){P===void 0&&(P=a.TEXTURE0+te-1),H!==P&&(a.activeTexture(P),H=P)},bindTexture:function(P,we,he){he===void 0&&(he=H===null?a.TEXTURE0+te-1:H);let ue=$[he];ue===void 0&&(ue={type:void 0,texture:void 0},$[he]=ue),ue.type===P&&ue.texture===we||(H!==he&&(a.activeTexture(he),H=he),a.bindTexture(P,we||B[P]),ue.type=P,ue.texture=we)},unbindTexture:function(){const P=$[H];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexImage3D:function(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},updateUBOMapping:function(P,we){let he=f.get(we);he===void 0&&(he=new WeakMap,f.set(we,he));let ue=he.get(P);ue===void 0&&(ue=a.getUniformBlockIndex(we,P.name),he.set(P,ue))},uniformBlockBinding:function(P,we){const he=f.get(we).get(P);p.get(we)!==he&&(a.uniformBlockBinding(we,he,P.__bindingPointIndex),p.set(we,he))},texStorage2D:function(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texStorage3D:function(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage2D:function(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage3D:function(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage2D:function(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage3D:function(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},scissor:function(P){z.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),z.copy(P))},viewport:function(P){A.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),A.copy(P))},reset:function(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},H=null,$={},m={},v=new WeakMap,_=[],y=null,b=!1,R=null,x=null,C=null,w=null,S=null,G=null,I=null,O=new pt(0,0,0),N=0,re=!1,K=null,Q=null,le=null,F=null,ie=null,z.set(0,0,a.canvas.width,a.canvas.height),A.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}}}function Ox(a,e,n,i,s,l,c){const p=s.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,T){return y?new OffscreenCanvas(A,T):js("canvas")}function R(A,T,B,q){let k=1;if((A.width>q||A.height>q)&&(k=q/Math.max(A.width,A.height)),k<1||T===!0){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Z=T?pd:Math.floor,ce=Z(k*A.width),fe=Z(k*A.height);v===void 0&&(v=b(ce,fe));const Ee=B?b(ce,fe):v;return Ee.width=ce,Ee.height=fe,Ee.getContext("2d").drawImage(A,0,0,ce,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ce+"x"+fe+")."),Ee}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function x(A){return Np(A.width)&&Np(A.height)}function C(A,T){return A.generateMipmaps&&T&&A.minFilter!==cn&&A.minFilter!==ar}function w(A){a.generateMipmap(A)}function S(A,T,B,q,k=!1){if(p===!1)return T;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=T;if(T===a.RED&&(B===a.FLOAT&&(Z=a.R32F),B===a.HALF_FLOAT&&(Z=a.R16F),B===a.UNSIGNED_BYTE&&(Z=a.R8)),T===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(Z=a.R8UI),B===a.UNSIGNED_SHORT&&(Z=a.R16UI),B===a.UNSIGNED_INT&&(Z=a.R32UI),B===a.BYTE&&(Z=a.R8I),B===a.SHORT&&(Z=a.R16I),B===a.INT&&(Z=a.R32I)),T===a.RG&&(B===a.FLOAT&&(Z=a.RG32F),B===a.HALF_FLOAT&&(Z=a.RG16F),B===a.UNSIGNED_BYTE&&(Z=a.RG8)),T===a.RGBA){const ce=k?Al:gt.getTransfer(q);B===a.FLOAT&&(Z=a.RGBA32F),B===a.HALF_FLOAT&&(Z=a.RGBA16F),B===a.UNSIGNED_BYTE&&(Z=ce===Et?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(Z=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(Z=a.RGB5_A1)}return Z!==a.R16F&&Z!==a.R32F&&Z!==a.RG16F&&Z!==a.RG32F&&Z!==a.RGBA16F&&Z!==a.RGBA32F||e.get("EXT_color_buffer_float"),Z}function G(A,T,B){return C(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==ar?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function I(A){return A===cn||A===ip||A===Rc?a.NEAREST:a.LINEAR}function O(A){const T=A.target;T.removeEventListener("dispose",O),(function(B){const q=i.get(B);if(q.__webglInit===void 0)return;const k=B.source,Z=_.get(k);if(Z){const ce=Z[q.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&re(B),Object.keys(Z).length===0&&_.delete(k)}i.remove(B)})(T),T.isVideoTexture&&m.delete(T)}function N(A){const T=A.target;T.removeEventListener("dispose",N),(function(B){const q=B.texture,k=i.get(B),Z=i.get(q);if(Z.__webglTexture!==void 0&&(a.deleteTexture(Z.__webglTexture),c.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(k.__webglFramebuffer[ce]))for(let fe=0;fe<k.__webglFramebuffer[ce].length;fe++)a.deleteFramebuffer(k.__webglFramebuffer[ce][fe]);else a.deleteFramebuffer(k.__webglFramebuffer[ce]);k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer[ce])}else{if(Array.isArray(k.__webglFramebuffer))for(let ce=0;ce<k.__webglFramebuffer.length;ce++)a.deleteFramebuffer(k.__webglFramebuffer[ce]);else a.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&a.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ce=0;ce<k.__webglColorRenderbuffer.length;ce++)k.__webglColorRenderbuffer[ce]&&a.deleteRenderbuffer(k.__webglColorRenderbuffer[ce]);k.__webglDepthRenderbuffer&&a.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let ce=0,fe=q.length;ce<fe;ce++){const Ee=i.get(q[ce]);Ee.__webglTexture&&(a.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove(q[ce])}i.remove(q),i.remove(B)})(T)}function re(A){const T=i.get(A);a.deleteTexture(T.__webglTexture);const B=A.source;delete _.get(B)[T.__cacheKey],c.memory.textures--}let K=0;function Q(A,T){const B=i.get(A);if(A.isVideoTexture&&(function(q){const k=c.render.frame;m.get(q)!==k&&(m.set(q,k),q.update())})(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(q.complete!==!1)return void Me(B,A,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+T)}const le={[cd]:a.REPEAT,[Or]:a.CLAMP_TO_EDGE,[dd]:a.MIRRORED_REPEAT},F={[cn]:a.NEAREST,[ip]:a.NEAREST_MIPMAP_NEAREST,[Rc]:a.NEAREST_MIPMAP_LINEAR,[ar]:a.LINEAR,[U_]:a.LINEAR_MIPMAP_NEAREST,[Rl]:a.LINEAR_MIPMAP_LINEAR},ie={512:a.NEVER,519:a.ALWAYS,513:a.LESS,515:a.LEQUAL,514:a.EQUAL,518:a.GEQUAL,516:a.GREATER,517:a.NOTEQUAL};function te(A,T,B){if(B?(a.texParameteri(A,a.TEXTURE_WRAP_S,le[T.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,le[T.wrapT]),A!==a.TEXTURE_3D&&A!==a.TEXTURE_2D_ARRAY||a.texParameteri(A,a.TEXTURE_WRAP_R,le[T.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,F[T.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,F[T.minFilter])):(a.texParameteri(A,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(A,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),A!==a.TEXTURE_3D&&A!==a.TEXTURE_2D_ARRAY||a.texParameteri(A,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),T.wrapS===Or&&T.wrapT===Or||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,a.TEXTURE_MAG_FILTER,I(T.magFilter)),a.texParameteri(A,a.TEXTURE_MIN_FILTER,I(T.minFilter)),T.minFilter!==cn&&T.minFilter!==ar&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===cn||T.minFilter!==Rc&&T.minFilter!==Rl||T.type===vi&&e.has("OES_texture_float_linear")===!1||p===!1&&T.type===Ws&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(a.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function me(A,T){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",O));const q=T.source;let k=_.get(q);k===void 0&&(k={},_.set(q,k));const Z=(function(ce){const fe=[];return fe.push(ce.wrapS),fe.push(ce.wrapT),fe.push(ce.wrapR||0),fe.push(ce.magFilter),fe.push(ce.minFilter),fe.push(ce.anisotropy),fe.push(ce.internalFormat),fe.push(ce.format),fe.push(ce.type),fe.push(ce.generateMipmaps),fe.push(ce.premultiplyAlpha),fe.push(ce.flipY),fe.push(ce.unpackAlignment),fe.push(ce.colorSpace),fe.join()})(T);if(Z!==A.__cacheKey){k[Z]===void 0&&(k[Z]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,B=!0),k[Z].usedTimes++;const ce=k[A.__cacheKey];ce!==void 0&&(k[A.__cacheKey].usedTimes--,ce.usedTimes===0&&re(T)),A.__cacheKey=Z,A.__webglTexture=k[Z].texture}return B}function Me(A,T,B){let q=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=a.TEXTURE_3D);const k=me(A,T),Z=T.source;n.bindTexture(q,A.__webglTexture,a.TEXTURE0+B);const ce=i.get(Z);if(Z.version!==ce.__version||k===!0){n.activeTexture(a.TEXTURE0+B);const fe=gt.getPrimaries(gt.workingColorSpace),Ee=T.colorSpace===vr?null:gt.getPrimaries(T.colorSpace),Re=T.colorSpace===vr||fe===Ee?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ne=(function(Ue){return!p&&(Ue.wrapS!==Or||Ue.wrapT!==Or||Ue.minFilter!==cn&&Ue.minFilter!==ar)})(T)&&x(T.image)===!1;let P=R(T.image,Ne,!1,s.maxTextureSize);P=z(T,P);const we=x(P)||p,he=l.convert(T.format,T.colorSpace);let ue,ve=l.convert(T.type),Ae=S(T.internalFormat,he,ve,T.colorSpace,T.isVideoTexture);te(q,T,we);const be=T.mipmaps,Pe=p&&T.isVideoTexture!==!0&&Ae!==Gm,Be=ce.__version===void 0||k===!0,De=G(T,P,we);if(T.isDepthTexture)Ae=a.DEPTH_COMPONENT,p?Ae=T.type===vi?a.DEPTH_COMPONENT32F:T.type===gi?a.DEPTH_COMPONENT24:T.type===qi?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT16:T.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ki&&Ae===a.DEPTH_COMPONENT&&T.type!==yd&&T.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=gi,ve=l.convert(T.type)),T.format===$a&&Ae===a.DEPTH_COMPONENT&&(Ae=a.DEPTH_STENCIL,T.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=qi,ve=l.convert(T.type))),Be&&(Pe?n.texStorage2D(a.TEXTURE_2D,1,Ae,P.width,P.height):n.texImage2D(a.TEXTURE_2D,0,Ae,P.width,P.height,0,he,ve,null));else if(T.isDataTexture)if(be.length>0&&we){Pe&&Be&&n.texStorage2D(a.TEXTURE_2D,De,Ae,be[0].width,be[0].height);for(let Ue=0,Xe=be.length;Ue<Xe;Ue++)ue=be[Ue],Pe?n.texSubImage2D(a.TEXTURE_2D,Ue,0,0,ue.width,ue.height,he,ve,ue.data):n.texImage2D(a.TEXTURE_2D,Ue,Ae,ue.width,ue.height,0,he,ve,ue.data);T.generateMipmaps=!1}else Pe?(Be&&n.texStorage2D(a.TEXTURE_2D,De,Ae,P.width,P.height),n.texSubImage2D(a.TEXTURE_2D,0,0,0,P.width,P.height,he,ve,P.data)):n.texImage2D(a.TEXTURE_2D,0,Ae,P.width,P.height,0,he,ve,P.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Pe&&Be&&n.texStorage3D(a.TEXTURE_2D_ARRAY,De,Ae,be[0].width,be[0].height,P.depth);for(let Ue=0,Xe=be.length;Ue<Xe;Ue++)ue=be[Ue],T.format!==gr?he!==null?Pe?n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ue,0,0,0,ue.width,ue.height,P.depth,he,ue.data,0,0):n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ue,Ae,ue.width,ue.height,P.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?n.texSubImage3D(a.TEXTURE_2D_ARRAY,Ue,0,0,0,ue.width,ue.height,P.depth,he,ve,ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Ue,Ae,ue.width,ue.height,P.depth,0,he,ve,ue.data)}else{Pe&&Be&&n.texStorage2D(a.TEXTURE_2D,De,Ae,be[0].width,be[0].height);for(let Ue=0,Xe=be.length;Ue<Xe;Ue++)ue=be[Ue],T.format!==gr?he!==null?Pe?n.compressedTexSubImage2D(a.TEXTURE_2D,Ue,0,0,ue.width,ue.height,he,ue.data):n.compressedTexImage2D(a.TEXTURE_2D,Ue,Ae,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?n.texSubImage2D(a.TEXTURE_2D,Ue,0,0,ue.width,ue.height,he,ve,ue.data):n.texImage2D(a.TEXTURE_2D,Ue,Ae,ue.width,ue.height,0,he,ve,ue.data)}else if(T.isDataArrayTexture)Pe?(Be&&n.texStorage3D(a.TEXTURE_2D_ARRAY,De,Ae,P.width,P.height,P.depth),n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,he,ve,P.data)):n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ae,P.width,P.height,P.depth,0,he,ve,P.data);else if(T.isData3DTexture)Pe?(Be&&n.texStorage3D(a.TEXTURE_3D,De,Ae,P.width,P.height,P.depth),n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,he,ve,P.data)):n.texImage3D(a.TEXTURE_3D,0,Ae,P.width,P.height,P.depth,0,he,ve,P.data);else if(T.isFramebufferTexture){if(Be)if(Pe)n.texStorage2D(a.TEXTURE_2D,De,Ae,P.width,P.height);else{let Ue=P.width,Xe=P.height;for(let Mt=0;Mt<De;Mt++)n.texImage2D(a.TEXTURE_2D,Mt,Ae,Ue,Xe,0,he,ve,null),Ue>>=1,Xe>>=1}}else if(be.length>0&&we){Pe&&Be&&n.texStorage2D(a.TEXTURE_2D,De,Ae,be[0].width,be[0].height);for(let Ue=0,Xe=be.length;Ue<Xe;Ue++)ue=be[Ue],Pe?n.texSubImage2D(a.TEXTURE_2D,Ue,0,0,he,ve,ue):n.texImage2D(a.TEXTURE_2D,Ue,Ae,he,ve,ue);T.generateMipmaps=!1}else Pe?(Be&&n.texStorage2D(a.TEXTURE_2D,De,Ae,P.width,P.height),n.texSubImage2D(a.TEXTURE_2D,0,0,0,he,ve,P)):n.texImage2D(a.TEXTURE_2D,0,Ae,he,ve,P);C(T,we)&&w(q),ce.__version=Z.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function ae(A,T,B,q,k,Z){const ce=l.convert(B.format,B.colorSpace),fe=l.convert(B.type),Ee=S(B.internalFormat,ce,fe,B.colorSpace);if(!i.get(T).__hasExternalTextures){const Re=Math.max(1,T.width>>Z),Ne=Math.max(1,T.height>>Z);k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?n.texImage3D(k,Z,Ee,Re,Ne,T.depth,0,ce,fe,null):n.texImage2D(k,Z,Ee,Re,Ne,0,ce,fe,null)}n.bindFramebuffer(a.FRAMEBUFFER,A),M(T)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,q,k,i.get(B).__webglTexture,0,W(T)):(k===a.TEXTURE_2D||k>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,q,k,i.get(B).__webglTexture,Z),n.bindFramebuffer(a.FRAMEBUFFER,null)}function H(A,T,B){if(a.bindRenderbuffer(a.RENDERBUFFER,A),T.depthBuffer&&!T.stencilBuffer){let q=p===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(B||M(T)){const k=T.depthTexture;k&&k.isDepthTexture&&(k.type===vi?q=a.DEPTH_COMPONENT32F:k.type===gi&&(q=a.DEPTH_COMPONENT24));const Z=W(T);M(T)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Z,q,T.width,T.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,Z,q,T.width,T.height)}else a.renderbufferStorage(a.RENDERBUFFER,q,T.width,T.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,A)}else if(T.depthBuffer&&T.stencilBuffer){const q=W(T);B&&M(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,q,a.DEPTH24_STENCIL8,T.width,T.height):M(T)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,q,a.DEPTH24_STENCIL8,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,A)}else{const q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let k=0;k<q.length;k++){const Z=q[k],ce=l.convert(Z.format,Z.colorSpace),fe=l.convert(Z.type),Ee=S(Z.internalFormat,ce,fe,Z.colorSpace),Re=W(T);B&&M(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Re,Ee,T.width,T.height):M(T)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Re,Ee,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Ee,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function $(A){const T=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(q,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,q),!k.depthTexture||!k.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(k.depthTexture).__webglTexture&&k.depthTexture.image.width===k.width&&k.depthTexture.image.height===k.height||(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),Q(k.depthTexture,0);const Z=i.get(k.depthTexture).__webglTexture,ce=W(k);if(k.depthTexture.format===Ki)M(k)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0);else{if(k.depthTexture.format!==$a)throw new Error("Unknown depthTexture format");M(k)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0)}})(T.__webglFramebuffer,A)}else if(B){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]=a.createRenderbuffer(),H(T.__webglDepthbuffer[q],A,!1)}else n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),H(T.__webglDepthbuffer,A,!1);n.bindFramebuffer(a.FRAMEBUFFER,null)}function W(A){return Math.min(s.maxSamples,A.samples)}function M(A){const T=i.get(A);return p&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function z(A,T){const B=A.colorSpace,q=A.format,k=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===hd||B!==kr&&B!==vr&&(gt.getTransfer(B)===Et?p===!1?e.has("EXT_sRGB")===!0&&q===gr?(A.format=hd,A.minFilter=ar,A.generateMipmaps=!1):T=jm.sRGBToLinear(T):q===gr&&k===Yi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}this.allocateTextureUnit=function(){const A=K;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),K+=1,A},this.resetTextureUnits=function(){K=0},this.setTexture2D=Q,this.setTexture2DArray=function(A,T){const B=i.get(A);A.version>0&&B.__version!==A.version?Me(B,A,T):n.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+T)},this.setTexture3D=function(A,T){const B=i.get(A);A.version>0&&B.__version!==A.version?Me(B,A,T):n.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+T)},this.setTextureCube=function(A,T){const B=i.get(A);A.version>0&&B.__version!==A.version?(function(q,k,Z){if(k.image.length!==6)return;const ce=me(q,k),fe=k.source;n.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture,a.TEXTURE0+Z);const Ee=i.get(fe);if(fe.version!==Ee.__version||ce===!0){n.activeTexture(a.TEXTURE0+Z);const Re=gt.getPrimaries(gt.workingColorSpace),Ne=k.colorSpace===vr?null:gt.getPrimaries(k.colorSpace),P=k.colorSpace===vr||Re===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,k.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,k.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const we=k.isCompressedTexture||k.image[0].isCompressedTexture,he=k.image[0]&&k.image[0].isDataTexture,ue=[];for(let Ge=0;Ge<6;Ge++)ue[Ge]=we||he?he?k.image[Ge].image:k.image[Ge]:R(k.image[Ge],!1,!0,s.maxCubemapSize),ue[Ge]=z(k,ue[Ge]);const ve=ue[0],Ae=x(ve)||p,be=l.convert(k.format,k.colorSpace),Pe=l.convert(k.type),Be=S(k.internalFormat,be,Pe,k.colorSpace),De=p&&k.isVideoTexture!==!0,Ue=Ee.__version===void 0||ce===!0;let Xe,Mt=G(k,ve,Ae);if(te(a.TEXTURE_CUBE_MAP,k,Ae),we){De&&Ue&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Mt,Be,ve.width,ve.height);for(let Ge=0;Ge<6;Ge++){Xe=ue[Ge].mipmaps;for(let Qe=0;Qe<Xe.length;Qe++){const Je=Xe[Qe];k.format!==gr?be!==null?De?n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Qe,0,0,Je.width,Je.height,be,Je.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Qe,Be,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Qe,0,0,Je.width,Je.height,be,Pe,Je.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Qe,Be,Je.width,Je.height,0,be,Pe,Je.data)}}}else{Xe=k.mipmaps,De&&Ue&&(Xe.length>0&&Mt++,n.texStorage2D(a.TEXTURE_CUBE_MAP,Mt,Be,ue[0].width,ue[0].height));for(let Ge=0;Ge<6;Ge++)if(he){De?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,ue[Ge].width,ue[Ge].height,be,Pe,ue[Ge].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Be,ue[Ge].width,ue[Ge].height,0,be,Pe,ue[Ge].data);for(let Qe=0;Qe<Xe.length;Qe++){const Je=Xe[Qe].image[Ge].image;De?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Qe+1,0,0,Je.width,Je.height,be,Pe,Je.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Qe+1,Be,Je.width,Je.height,0,be,Pe,Je.data)}}else{De?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,be,Pe,ue[Ge]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Be,be,Pe,ue[Ge]);for(let Qe=0;Qe<Xe.length;Qe++){const Je=Xe[Qe];De?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Qe+1,0,0,be,Pe,Je.image[Ge]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Qe+1,Be,be,Pe,Je.image[Ge])}}}C(k,Ae)&&w(a.TEXTURE_CUBE_MAP),Ee.__version=fe.version,k.onUpdate&&k.onUpdate(k)}q.__version=k.version})(B,A,T):n.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+T)},this.rebindTextures=function(A,T,B){const q=i.get(A);T!==void 0&&ae(q.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&$(A)},this.setupRenderTarget=function(A){const T=A.texture,B=i.get(A),q=i.get(T);A.addEventListener("dispose",N),A.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture()),q.__version=T.version,c.memory.textures++);const k=A.isWebGLCubeRenderTarget===!0,Z=A.isWebGLMultipleRenderTargets===!0,ce=x(A)||p;if(k){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(p&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)B.__webglFramebuffer[fe][Ee]=a.createFramebuffer()}else B.__webglFramebuffer[fe]=a.createFramebuffer()}else{if(p&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)B.__webglFramebuffer[fe]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(Z)if(s.drawBuffers){const fe=A.texture;for(let Ee=0,Re=fe.length;Ee<Re;Ee++){const Ne=i.get(fe[Ee]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=a.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(p&&A.samples>0&&M(A)===!1){const fe=Z?T:[T];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ee=0;Ee<fe.length;Ee++){const Re=fe[Ee];B.__webglColorRenderbuffer[Ee]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[Ee]);const Ne=l.convert(Re.format,Re.colorSpace),P=l.convert(Re.type),we=S(Re.internalFormat,Ne,P,Re.colorSpace,A.isXRRenderTarget===!0),he=W(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,he,we,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,B.__webglColorRenderbuffer[Ee])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),H(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(k){n.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture),te(a.TEXTURE_CUBE_MAP,T,ce);for(let fe=0;fe<6;fe++)if(p&&T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)ae(B.__webglFramebuffer[fe][Ee],A,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else ae(B.__webglFramebuffer[fe],A,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);C(T,ce)&&w(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Z){const fe=A.texture;for(let Ee=0,Re=fe.length;Ee<Re;Ee++){const Ne=fe[Ee],P=i.get(Ne);n.bindTexture(a.TEXTURE_2D,P.__webglTexture),te(a.TEXTURE_2D,Ne,ce),ae(B.__webglFramebuffer,A,Ne,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,0),C(Ne,ce)&&w(a.TEXTURE_2D)}n.unbindTexture()}else{let fe=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(p?fe=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,q.__webglTexture),te(fe,T,ce),p&&T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)ae(B.__webglFramebuffer[Ee],A,T,a.COLOR_ATTACHMENT0,fe,Ee);else ae(B.__webglFramebuffer,A,T,a.COLOR_ATTACHMENT0,fe,0);C(T,ce)&&w(fe),n.unbindTexture()}A.depthBuffer&&$(A)},this.updateRenderTargetMipmap=function(A){const T=x(A)||p,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let q=0,k=B.length;q<k;q++){const Z=B[q];if(C(Z,T)){const ce=A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,fe=i.get(Z).__webglTexture;n.bindTexture(ce,fe),w(ce),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(p&&A.samples>0&&M(A)===!1){const T=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,q=A.height;let k=a.COLOR_BUFFER_BIT;const Z=[],ce=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=i.get(A),Ee=A.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Re=0;Re<T.length;Re++)n.bindFramebuffer(a.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Re=0;Re<T.length;Re++){Z.push(a.COLOR_ATTACHMENT0+Re),A.depthBuffer&&Z.push(ce);const Ne=fe.__ignoreDepthValues!==void 0&&fe.__ignoreDepthValues;if(Ne===!1&&(A.depthBuffer&&(k|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&(k|=a.STENCIL_BUFFER_BIT)),Ee&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]),Ne===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[ce]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[ce])),Ee){const P=i.get(T[Re]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,P,0)}a.blitFramebuffer(0,0,B,q,0,0,B,q,k,a.NEAREST),d&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Z)}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ee)for(let Re=0;Re<T.length;Re++){n.bindFramebuffer(a.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]);const Ne=i.get(T[Re]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,Ne,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=M}function kx(a,e,n){const i=n.isWebGL2;return{convert:function(s,l=""){let c;const p=gt.getTransfer(l);if(s===Yi)return a.UNSIGNED_BYTE;if(s===km)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Fm)return a.UNSIGNED_SHORT_5_5_5_1;if(s===1010)return a.BYTE;if(s===1011)return a.SHORT;if(s===yd)return a.UNSIGNED_SHORT;if(s===Om)return a.INT;if(s===gi)return a.UNSIGNED_INT;if(s===vi)return a.FLOAT;if(s===Ws)return i?a.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(s===1021)return a.ALPHA;if(s===gr)return a.RGBA;if(s===1024)return a.LUMINANCE;if(s===1025)return a.LUMINANCE_ALPHA;if(s===Ki)return a.DEPTH_COMPONENT;if(s===$a)return a.DEPTH_STENCIL;if(s===hd)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(s===1028)return a.RED;if(s===zm)return a.RED_INTEGER;if(s===1030)return a.RG;if(s===Bm)return a.RG_INTEGER;if(s===Hm)return a.RGBA_INTEGER;if(s===Ac||s===bc||s===Cc||s===Lc)if(p===Et){if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c===null)return null;if(s===Ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(c=e.get("WEBGL_compressed_texture_s3tc"),c===null)return null;if(s===Ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(s===ap||s===sp||s===op||s===lp){if(c=e.get("WEBGL_compressed_texture_pvrtc"),c===null)return null;if(s===ap)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===op)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(s===Gm)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===up||s===cp){if(c=e.get("WEBGL_compressed_texture_etc"),c===null)return null;if(s===up)return p===Et?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===cp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}if(s===dp||s===hp||s===fp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp||s===yp||s===Sp||s===Ep||s===Mp||s===wp){if(c=e.get("WEBGL_compressed_texture_astc"),c===null)return null;if(s===dp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_p)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ep)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wp)return p===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}if(s===Pc||s===Tp||s===Rp){if(c=e.get("EXT_texture_compression_bptc"),c===null)return null;if(s===Pc)return p===Et?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(s===36283||s===Ap||s===bp||s===Cp){if(c=e.get("EXT_texture_compression_rgtc"),c===null)return null;if(s===Pc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return s===qi?i?a.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}}}class Fx extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sl extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zx={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,l=null,c=null;const p=this._targetRay,f=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const R of e.hand.values()){const x=n.getJointPose(R,i),C=this._getHandJoint(d,R);x!==null&&(C.matrix.fromArray(x.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.matrixWorldNeedsUpdate=!0,C.jointRadius=x.radius),C.visible=x!==null}const m=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=m.position.distanceTo(v.position),y=.02,b=.005;d.inputState.pinching&&_>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));p!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(p.matrix.fromArray(s.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,s.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(s.linearVelocity)):p.hasLinearVelocity=!1,s.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(s.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(zx)))}return p!==null&&(p.visible=s!==null),f!==null&&(f.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Bx extends ea{constructor(e,n){super();const i=this;let s=null,l=1,c=null,p="local-floor",f=1,d=null,m=null,v=null,_=null,y=null,b=null;const R=n.getContextAttributes();let x=null,C=null;const w=[],S=[],G=new Ze;let I=null;const O=new Dn;O.layers.enable(1),O.viewport=new Bt;const N=new Dn;N.layers.enable(2),N.viewport=new Bt;const re=[O,N],K=new Fx;K.layers.enable(1),K.layers.enable(2);let Q=null,le=null;function F(W){const M=S.indexOf(W.inputSource);if(M===-1)return;const z=w[M];z!==void 0&&(z.update(W.inputSource,W.frame,d||c),z.dispatchEvent({type:W.type,data:W.inputSource}))}function ie(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",te);for(let W=0;W<w.length;W++){const M=S[W];M!==null&&(S[W]=null,w[W].disconnect(M))}Q=null,le=null,e.setRenderTarget(x),y=null,_=null,v=null,s=null,C=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}function te(W){for(let M=0;M<W.removed.length;M++){const z=W.removed[M],A=S.indexOf(z);A>=0&&(S[A]=null,w[A].disconnect(z))}for(let M=0;M<W.added.length;M++){const z=W.added[M];let A=S.indexOf(z);if(A===-1){for(let B=0;B<w.length;B++){if(B>=S.length){S.push(z),A=B;break}if(S[B]===null){S[B]=z,A=B;break}}if(A===-1)break}const T=w[A];T&&T.connect(z)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let M=w[W];return M===void 0&&(M=new td,w[W]=M),M.getTargetRaySpace()},this.getControllerGrip=function(W){let M=w[W];return M===void 0&&(M=new td,w[W]=M),M.getGripSpace()},this.getHand=function(W){let M=w[W];return M===void 0&&(M=new td,w[W]=M),M.getHandSpace()},this.setFramebufferScaleFactor=function(W){l=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){p=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",te),R.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(G),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const M={antialias:s.renderState.layers!==void 0||R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,M),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Zi(y.framebufferWidth,y.framebufferHeight,{format:gr,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil})}else{let M=null,z=null,A=null;R.depth&&(A=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,M=R.stencil?$a:Ki,z=R.stencil?qi:gi);const T={colorFormat:n.RGBA8,depthFormat:A,scaleFactor:l};v=new XRWebGLBinding(s,n),_=v.createProjectionLayer(T),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Zi(_.textureWidth,_.textureHeight,{format:gr,type:Yi,depthTexture:new tg(_.textureWidth,_.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,M),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0}),e.properties.get(C).__ignoreDepthValues=_.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(p),$.setContext(s),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};const me=new X,Me=new X;function ae(W,M){M===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(M.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;K.near=N.near=O.near=W.near,K.far=N.far=O.far=W.far,Q===K.near&&le===K.far||(s.updateRenderState({depthNear:K.near,depthFar:K.far}),Q=K.near,le=K.far);const M=W.parent,z=K.cameras;ae(K,M);for(let A=0;A<z.length;A++)ae(z[A],M);z.length===2?(function(A,T,B){me.setFromMatrixPosition(T.matrixWorld),Me.setFromMatrixPosition(B.matrixWorld);const q=me.distanceTo(Me),k=T.projectionMatrix.elements,Z=B.projectionMatrix.elements,ce=k[14]/(k[10]-1),fe=k[14]/(k[10]+1),Ee=(k[9]+1)/k[5],Re=(k[9]-1)/k[5],Ne=(k[8]-1)/k[0],P=(Z[8]+1)/Z[0],we=ce*Ne,he=ce*P,ue=q/(-Ne+P),ve=ue*-Ne;T.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(ve),A.translateZ(ue),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Ae=ce+ue,be=fe+ue,Pe=we-ve,Be=he+(q-ve),De=Ee*fe/be*Ae,Ue=Re*fe/be*Ae;A.projectionMatrix.makePerspective(Pe,Be,De,Ue,Ae,be),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()})(K,O,N):K.projectionMatrix.copy(O.projectionMatrix),(function(A,T,B){B===null?A.matrix.copy(T.matrixWorld):(A.matrix.copy(B.matrixWorld),A.matrix.invert(),A.matrix.multiply(T.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(T.projectionMatrix),A.projectionMatrixInverse.copy(T.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*fd*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(W,K,M)},this.getCamera=function(){return K},this.getFoveation=function(){if(_!==null||y!==null)return f},this.setFoveation=function(W){f=W,_!==null&&(_.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)};let H=null;const $=new eg;$.setAnimationLoop((function(W,M){if(m=M.getViewerPose(d||c),b=M,m!==null){const z=m.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let A=!1;z.length!==K.cameras.length&&(K.cameras.length=0,A=!0);for(let T=0;T<z.length;T++){const B=z[T];let q=null;if(y!==null)q=y.getViewport(B);else{const Z=v.getViewSubImage(_,B);q=Z.viewport,T===0&&(e.setRenderTargetTextures(C,Z.colorTexture,_.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(C))}let k=re[T];k===void 0&&(k=new Dn,k.layers.enable(T),k.viewport=new Bt,re[T]=k),k.matrix.fromArray(B.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(B.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(q.x,q.y,q.width,q.height),T===0&&(K.matrix.copy(k.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),A===!0&&K.cameras.push(k)}}for(let z=0;z<w.length;z++){const A=S[z],T=w[z];A!==null&&T!==void 0&&T.update(A,M,d||c)}H&&H(W,M),M.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:M}),b=null})),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}}function Hx(a,e){function n(s,l){s.matrixAutoUpdate===!0&&s.updateMatrix(),l.value.copy(s.matrix)}function i(s,l){s.opacity.value=l.opacity,l.color&&s.diffuse.value.copy(l.color),l.emissive&&s.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(s.map.value=l.map,n(l.map,s.mapTransform)),l.alphaMap&&(s.alphaMap.value=l.alphaMap,n(l.alphaMap,s.alphaMapTransform)),l.bumpMap&&(s.bumpMap.value=l.bumpMap,n(l.bumpMap,s.bumpMapTransform),s.bumpScale.value=l.bumpScale,l.side===Mn&&(s.bumpScale.value*=-1)),l.normalMap&&(s.normalMap.value=l.normalMap,n(l.normalMap,s.normalMapTransform),s.normalScale.value.copy(l.normalScale),l.side===Mn&&s.normalScale.value.negate()),l.displacementMap&&(s.displacementMap.value=l.displacementMap,n(l.displacementMap,s.displacementMapTransform),s.displacementScale.value=l.displacementScale,s.displacementBias.value=l.displacementBias),l.emissiveMap&&(s.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,s.emissiveMapTransform)),l.specularMap&&(s.specularMap.value=l.specularMap,n(l.specularMap,s.specularMapTransform)),l.alphaTest>0&&(s.alphaTest.value=l.alphaTest);const c=e.get(l).envMap;if(c&&(s.envMap.value=c,s.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,s.reflectivity.value=l.reflectivity,s.ior.value=l.ior,s.refractionRatio.value=l.refractionRatio),l.lightMap){s.lightMap.value=l.lightMap;const p=a._useLegacyLights===!0?Math.PI:1;s.lightMapIntensity.value=l.lightMapIntensity*p,n(l.lightMap,s.lightMapTransform)}l.aoMap&&(s.aoMap.value=l.aoMap,s.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(s,l){l.color.getRGB(s.fogColor.value,Qm(a)),l.isFog?(s.fogNear.value=l.near,s.fogFar.value=l.far):l.isFogExp2&&(s.fogDensity.value=l.density)},refreshMaterialUniforms:function(s,l,c,p,f){l.isMeshBasicMaterial||l.isMeshLambertMaterial?i(s,l):l.isMeshToonMaterial?(i(s,l),(function(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)})(s,l)):l.isMeshPhongMaterial?(i(s,l),(function(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)})(s,l)):l.isMeshStandardMaterial?(i(s,l),(function(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,d.roughnessMapTransform)),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)})(s,l),l.isMeshPhysicalMaterial&&(function(d,m,v){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,d.specularIntensityMapTransform))})(s,l,f)):l.isMeshMatcapMaterial?(i(s,l),(function(d,m){m.matcap&&(d.matcap.value=m.matcap)})(s,l)):l.isMeshDepthMaterial?i(s,l):l.isMeshDistanceMaterial?(i(s,l),(function(d,m){const v=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far})(s,l)):l.isMeshNormalMaterial?i(s,l):l.isLineBasicMaterial?((function(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform))})(s,l),l.isLineDashedMaterial&&(function(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale})(s,l)):l.isPointsMaterial?(function(d,m,v,_){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=.5*_,m.map&&(d.map.value=m.map,n(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)})(s,l,c,p):l.isSpriteMaterial?(function(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)})(s,l):l.isShadowMaterial?(s.color.value.copy(l.color),s.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}}}function Gx(a,e,n,i){let s={},l={},c=[];const p=n.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(v,_,y,b){const R=v.value,x=_+"_"+y;if(b[x]===void 0)return b[x]=typeof R=="number"||typeof R=="boolean"?R:R.clone(),!0;{const C=b[x];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return b[x]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function d(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=c.indexOf(_.__bindingPointIndex);c.splice(y,1),a.deleteBuffer(s[_.id]),delete s[_.id],delete l[_.id]}return{bind:function(v,_){const y=_.program;i.uniformBlockBinding(v,y)},update:function(v,_){let y=s[v.id];y===void 0&&((function(x){const C=x.uniforms;let w=0;const S=16;for(let I=0,O=C.length;I<O;I++){const N=Array.isArray(C[I])?C[I]:[C[I]];for(let re=0,K=N.length;re<K;re++){const Q=N[re],le=Array.isArray(Q.value)?Q.value:[Q.value];for(let F=0,ie=le.length;F<ie;F++){const te=d(le[F]),me=w%S;me!==0&&S-me<te.boundary&&(w+=S-me),Q.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=te.storage}}}const G=w%S;G>0&&(w+=S-G),x.__size=w,x.__cache={}})(v),y=(function(x){const C=(function(){for(let I=0;I<p;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();x.__bindingPointIndex=C;const w=a.createBuffer(),S=x.__size,G=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,w),a.bufferData(a.UNIFORM_BUFFER,S,G),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,w),w})(v),s[v.id]=y,v.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(v,b);const R=e.render.frame;l[v.id]!==R&&((function(x){const C=s[x.id],w=x.uniforms,S=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let G=0,I=w.length;G<I;G++){const O=Array.isArray(w[G])?w[G]:[w[G]];for(let N=0,re=O.length;N<re;N++){const K=O[N];if(f(K,G,N,S)===!0){const Q=K.__offset,le=Array.isArray(K.value)?K.value:[K.value];let F=0;for(let ie=0;ie<le.length;ie++){const te=le[ie],me=d(te);typeof te=="number"||typeof te=="boolean"?(K.__data[0]=te,a.bufferSubData(a.UNIFORM_BUFFER,Q+F,K.__data)):te.isMatrix3?(K.__data[0]=te.elements[0],K.__data[1]=te.elements[1],K.__data[2]=te.elements[2],K.__data[3]=0,K.__data[4]=te.elements[3],K.__data[5]=te.elements[4],K.__data[6]=te.elements[5],K.__data[7]=0,K.__data[8]=te.elements[6],K.__data[9]=te.elements[7],K.__data[10]=te.elements[8],K.__data[11]=0):(te.toArray(K.__data,F),F+=me.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,Q,K.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)})(v),l[v.id]=R)},dispose:function(){for(const v in s)a.deleteBuffer(s[v]);c=[],s={},l={}}}}class Rd{constructor(e={}){const{canvas:n=k_(),context:i=null,depth:s=!0,stencil:l=!0,alpha:c=!1,antialias:p=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1}=e;let _;this.isWebGLRenderer=!0,_=i!==null?i.getContextAttributes().alpha:c;const y=new Uint32Array(4),b=new Int32Array(4);let R=null,x=null;const C=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const S=this;let G=!1,I=0,O=0,N=null,re=-1,K=null;const Q=new Bt,le=new Bt;let F=null;const ie=new pt(0);let te=0,me=n.width,Me=n.height,ae=1,H=null,$=null;const W=new Bt(0,0,me,Me),M=new Bt(0,0,me,Me);let z=!1;const A=new Md;let T=!1,B=!1,q=null;const k=new ot,Z=new Ze,ce=new X,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return N===null?ae:1}let Re,Ne,P,we,he,ue,ve,Ae,be,Pe,Be,De,Ue,Xe,Mt,Ge,Qe,Je,Tn,Ut,j,Ie,$e,ct,ne=i;function Yt(D,oe){for(let pe=0;pe<D.length;pe++){const xe=D[pe],ge=n.getContext(xe,oe);if(ge!==null)return ge}return null}try{const D={alpha:!0,depth:s,stencil:l,antialias:p,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ad}`),n.addEventListener("webglcontextlost",Fr,!1),n.addEventListener("webglcontextrestored",In,!1),n.addEventListener("webglcontextcreationerror",It,!1),ne===null){const oe=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&oe.shift(),ne=Yt(oe,D),ne===null)throw Yt(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ne instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}function bt(){Re=new p0(ne),Ne=new u0(ne,Re,e),Re.init(Ne),Ie=new kx(ne,Re,Ne),P=new Ix(ne,Re,Ne),we=new v0(ne),he=new wx,ue=new Ox(ne,Re,P,he,Ne,Ie,we),ve=new d0(S),Ae=new f0(S),be=new a0(ne,Ne),$e=new o0(ne,Re,be,Ne),Pe=new m0(ne,be,we,$e),Be=new S0(ne,Pe,be,we),Tn=new y0(ne,Ne,ue),Ge=new c0(he),De=new Mx(S,ve,Ae,Re,Ne,$e,Ge),Ue=new Hx(S,he),Xe=new Rx,Mt=new Px(Re,Ne),Je=new s0(S,ve,Ae,P,Be,_,f),Qe=new Ux(S,Be,Ne),ct=new Gx(ne,we,Ne,P),Ut=new l0(ne,Re,we,Ne),j=new g0(ne,Re,we,Ne),we.programs=De.programs,S.capabilities=Ne,S.extensions=Re,S.properties=he,S.renderLists=Xe,S.shadowMap=Qe,S.state=P,S.info=we}bt();const Lt=new Bx(S,ne);function Fr(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function In(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const D=we.autoReset,oe=Qe.enabled,pe=Qe.autoUpdate,xe=Qe.needsUpdate,ge=Qe.type;bt(),we.autoReset=D,Qe.enabled=oe,Qe.autoUpdate=pe,Qe.needsUpdate=xe,Qe.type=ge}function It(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function rn(D){const oe=D.target;oe.removeEventListener("dispose",rn),(function(pe){(function(xe){const ge=he.get(xe).programs;ge!==void 0&&(ge.forEach((function(Ce){De.releaseProgram(Ce)})),xe.isShaderMaterial&&De.releaseShaderCache(xe))})(pe),he.remove(pe)})(oe)}function Sr(D,oe,pe){D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=Mn,D.needsUpdate=!0,ta(D,oe,pe),D.side=xi,D.needsUpdate=!0,ta(D,oe,pe),D.side=2):ta(D,oe,pe)}this.xr=Lt,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const D=Re.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Re.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(D){D!==void 0&&(ae=D,this.setSize(me,Me,!1))},this.getSize=function(D){return D.set(me,Me)},this.setSize=function(D,oe,pe=!0){Lt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(me=D,Me=oe,n.width=Math.floor(D*ae),n.height=Math.floor(oe*ae),pe===!0&&(n.style.width=D+"px",n.style.height=oe+"px"),this.setViewport(0,0,D,oe))},this.getDrawingBufferSize=function(D){return D.set(me*ae,Me*ae).floor()},this.setDrawingBufferSize=function(D,oe,pe){me=D,Me=oe,ae=pe,n.width=Math.floor(D*pe),n.height=Math.floor(oe*pe),this.setViewport(0,0,D,oe)},this.getCurrentViewport=function(D){return D.copy(Q)},this.getViewport=function(D){return D.copy(W)},this.setViewport=function(D,oe,pe,xe){D.isVector4?W.set(D.x,D.y,D.z,D.w):W.set(D,oe,pe,xe),P.viewport(Q.copy(W).multiplyScalar(ae).floor())},this.getScissor=function(D){return D.copy(M)},this.setScissor=function(D,oe,pe,xe){D.isVector4?M.set(D.x,D.y,D.z,D.w):M.set(D,oe,pe,xe),P.scissor(le.copy(M).multiplyScalar(ae).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(D){P.setScissorTest(z=D)},this.setOpaqueSort=function(D){H=D},this.setTransparentSort=function(D){$=D},this.getClearColor=function(D){return D.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(D=!0,oe=!0,pe=!0){let xe=0;if(D){let ge=!1;if(N!==null){const Ce=N.texture.format;ge=Ce===Hm||Ce===Bm||Ce===zm}if(ge){const Ce=N.texture.type,je=Ce===Yi||Ce===gi||Ce===yd||Ce===qi||Ce===km||Ce===Fm,Ye=Je.getClearColor(),et=Je.getClearAlpha(),tt=Ye.r,rt=Ye.g,it=Ye.b;je?(y[0]=tt,y[1]=rt,y[2]=it,y[3]=et,ne.clearBufferuiv(ne.COLOR,0,y)):(b[0]=tt,b[1]=rt,b[2]=it,b[3]=et,ne.clearBufferiv(ne.COLOR,0,b))}else xe|=ne.COLOR_BUFFER_BIT}oe&&(xe|=ne.DEPTH_BUFFER_BIT),pe&&(xe|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne.clear(xe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fr,!1),n.removeEventListener("webglcontextrestored",In,!1),n.removeEventListener("webglcontextcreationerror",It,!1),Xe.dispose(),Mt.dispose(),he.dispose(),ve.dispose(),Ae.dispose(),Be.dispose(),$e.dispose(),ct.dispose(),De.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Xn),Lt.removeEventListener("sessionend",sr),q&&(q.dispose(),q=null),Yn.stop()},this.renderBufferDirect=function(D,oe,pe,xe,ge,Ce){oe===null&&(oe=fe);const je=ge.isMesh&&ge.matrixWorld.determinant()<0,Ye=(function(Tt,an,Ot,lt,ut){an.isScene!==!0&&(an=fe),ue.resetTextureUnits();const or=an.fog,hn=lt.isMeshStandardMaterial?an.environment:null,Bl=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:kr,$t=(lt.isMeshStandardMaterial?Ae:ve).get(lt.envMap||hn),Hl=lt.vertexColors===!0&&!!Ot.attributes.color&&Ot.attributes.color.itemSize===4,Gl=!!Ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Vl=!!Ot.morphAttributes.position,na=!!Ot.morphAttributes.normal,ra=!!Ot.morphAttributes.color;let Vr=_i;lt.toneMapped&&(N!==null&&N.isXRRenderTarget!==!0||(Vr=S.toneMapping));const wi=Ot.morphAttributes.position||Ot.morphAttributes.normal||Ot.morphAttributes.color,Wl=wi!==void 0?wi.length:0,dt=he.get(lt),ts=x.state.lights;if(T===!0&&(B===!0||Tt!==K)){const sn=Tt===K&&lt.id===re;Ge.setState(lt,Tt,sn)}let fn=!1;lt.version===dt.__version?dt.needsLights&&dt.lightsStateVersion!==ts.state.version||dt.outputColorSpace!==Bl||ut.isBatchedMesh&&dt.batching===!1?fn=!0:ut.isBatchedMesh||dt.batching!==!0?ut.isInstancedMesh&&dt.instancing===!1?fn=!0:ut.isInstancedMesh||dt.instancing!==!0?ut.isSkinnedMesh&&dt.skinning===!1?fn=!0:ut.isSkinnedMesh||dt.skinning!==!0?ut.isInstancedMesh&&dt.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&dt.instancingColor===!1&&ut.instanceColor!==null||dt.envMap!==$t||lt.fog===!0&&dt.fog!==or?fn=!0:dt.numClippingPlanes===void 0||dt.numClippingPlanes===Ge.numPlanes&&dt.numIntersection===Ge.numIntersection?(dt.vertexAlphas!==Hl||dt.vertexTangents!==Gl||dt.morphTargets!==Vl||dt.morphNormals!==na||dt.morphColors!==ra||dt.toneMapping!==Vr||Ne.isWebGL2===!0&&dt.morphTargetsCount!==Wl)&&(fn=!0):fn=!0:fn=!0:fn=!0:fn=!0:(fn=!0,dt.__version=lt.version);let Kn=dt.currentProgram;fn===!0&&(Kn=ta(lt,an,ut));let Wr=!1,Ti=!1,Ri=!1;const Ke=Kn.getUniforms(),lr=dt.uniforms;if(P.useProgram(Kn.program)&&(Wr=!0,Ti=!0,Ri=!0),lt.id!==re&&(re=lt.id,Ti=!0),Wr||K!==Tt){Ke.setValue(ne,"projectionMatrix",Tt.projectionMatrix),Ke.setValue(ne,"viewMatrix",Tt.matrixWorldInverse);const sn=Ke.map.cameraPosition;sn!==void 0&&sn.setValue(ne,ce.setFromMatrixPosition(Tt.matrixWorld)),Ne.logarithmicDepthBuffer&&Ke.setValue(ne,"logDepthBufFC",2/(Math.log(Tt.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ke.setValue(ne,"isOrthographic",Tt.isOrthographicCamera===!0),K!==Tt&&(K=Tt,Ti=!0,Ri=!0)}if(ut.isSkinnedMesh){Ke.setOptional(ne,ut,"bindMatrix"),Ke.setOptional(ne,ut,"bindMatrixInverse");const sn=ut.skeleton;sn&&(Ne.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Ke.setValue(ne,"boneTexture",sn.boneTexture,ue)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ut.isBatchedMesh&&(Ke.setOptional(ne,ut,"batchingTexture"),Ke.setValue(ne,"batchingTexture",ut._matricesTexture,ue));const ia=Ot.morphAttributes;(ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&Ne.isWebGL2===!0)&&Tn.update(ut,Ot,Kn),(Ti||dt.receiveShadow!==ut.receiveShadow)&&(dt.receiveShadow=ut.receiveShadow,Ke.setValue(ne,"receiveShadow",ut.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(lr.envMap.value=$t,lr.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),Ti&&(Ke.setValue(ne,"toneMappingExposure",S.toneMappingExposure),dt.needsLights&&(mn=Ri,(pn=lr).ambientLightColor.needsUpdate=mn,pn.lightProbe.needsUpdate=mn,pn.directionalLights.needsUpdate=mn,pn.directionalLightShadows.needsUpdate=mn,pn.pointLights.needsUpdate=mn,pn.pointLightShadows.needsUpdate=mn,pn.spotLights.needsUpdate=mn,pn.spotLightShadows.needsUpdate=mn,pn.rectAreaLights.needsUpdate=mn,pn.hemisphereLights.needsUpdate=mn),or&&lt.fog===!0&&Ue.refreshFogUniforms(lr,or),Ue.refreshMaterialUniforms(lr,lt,ae,Me,q),wl.upload(ne,Gr(dt),lr,ue));var pn,mn;if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(wl.upload(ne,Gr(dt),lr,ue),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ke.setValue(ne,"center",ut.center),Ke.setValue(ne,"modelViewMatrix",ut.modelViewMatrix),Ke.setValue(ne,"normalMatrix",ut.normalMatrix),Ke.setValue(ne,"modelMatrix",ut.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const sn=lt.uniformsGroups;for(let aa=0,ns=sn.length;aa<ns;aa++)if(Ne.isWebGL2){const Ai=sn[aa];ct.update(Ai,Kn),ct.bind(Ai,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn})(D,oe,pe,xe,ge);P.setMaterial(xe,je);let et=pe.index,tt=1;if(xe.wireframe===!0){if(et=Pe.getWireframeAttribute(pe),et===void 0)return;tt=2}const rt=pe.drawRange,it=pe.attributes.position;let vt=rt.start*tt,Rn=(rt.start+rt.count)*tt;Ce!==null&&(vt=Math.max(vt,Ce.start*tt),Rn=Math.min(Rn,(Ce.start+Ce.count)*tt)),et!==null?(vt=Math.max(vt,0),Rn=Math.min(Rn,et.count)):it!=null&&(vt=Math.max(vt,0),Rn=Math.min(Rn,it.count));const qn=Rn-vt;if(qn<0||qn===1/0)return;let mt;$e.setup(ge,xe,Ye,pe,et);let xt=Ut;if(et!==null&&(mt=be.get(et),xt=j,xt.setIndex(mt)),ge.isMesh)xe.wireframe===!0?(P.setLineWidth(xe.wireframeLinewidth*Ee()),xt.setMode(ne.LINES)):xt.setMode(ne.TRIANGLES);else if(ge.isLine){let Tt=xe.linewidth;Tt===void 0&&(Tt=1),P.setLineWidth(Tt*Ee()),ge.isLineSegments?xt.setMode(ne.LINES):ge.isLineLoop?xt.setMode(ne.LINE_LOOP):xt.setMode(ne.LINE_STRIP)}else ge.isPoints?xt.setMode(ne.POINTS):ge.isSprite&&xt.setMode(ne.TRIANGLES);if(ge.isBatchedMesh)xt.renderMultiDraw(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount);else if(ge.isInstancedMesh)xt.renderInstances(vt,qn,ge.count);else if(pe.isInstancedBufferGeometry){const Tt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,an=Math.min(pe.instanceCount,Tt);xt.renderInstances(vt,qn,an)}else xt.render(vt,qn)},this.compile=function(D,oe,pe=null){pe===null&&(pe=D),x=Mt.get(pe),x.init(),w.push(x),pe.traverseVisible((function(ge){ge.isLight&&ge.layers.test(oe.layers)&&(x.pushLight(ge),ge.castShadow&&x.pushShadow(ge))})),D!==pe&&D.traverseVisible((function(ge){ge.isLight&&ge.layers.test(oe.layers)&&(x.pushLight(ge),ge.castShadow&&x.pushShadow(ge))})),x.setupLights(S._useLegacyLights);const xe=new Set;return D.traverse((function(ge){const Ce=ge.material;if(Ce)if(Array.isArray(Ce))for(let je=0;je<Ce.length;je++){const Ye=Ce[je];Sr(Ye,pe,ge),xe.add(Ye)}else Sr(Ce,pe,ge),xe.add(Ce)})),w.pop(),x=null,xe},this.compileAsync=function(D,oe,pe=null){const xe=this.compile(D,oe,pe);return new Promise((ge=>{function Ce(){xe.forEach((function(je){he.get(je).currentProgram.isReady()&&xe.delete(je)})),xe.size!==0?setTimeout(Ce,10):ge(D)}Re.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)}))};let On=null;function Xn(){Yn.stop()}function sr(){Yn.start()}const Yn=new eg;function es(D,oe,pe,xe){if(D.visible===!1)return;if(D.layers.test(oe.layers)){if(D.isGroup)pe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(oe);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||A.intersectsSprite(D)){xe&&ce.setFromMatrixPosition(D.matrixWorld).applyMatrix4(k);const Ce=Be.update(D),je=D.material;je.visible&&R.push(D,Ce,je,pe,ce.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||A.intersectsObject(D))){const Ce=Be.update(D),je=D.material;if(xe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ce.copy(D.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ce.copy(Ce.boundingSphere.center)),ce.applyMatrix4(D.matrixWorld).applyMatrix4(k)),Array.isArray(je)){const Ye=Ce.groups;for(let et=0,tt=Ye.length;et<tt;et++){const rt=Ye[et],it=je[rt.materialIndex];it&&it.visible&&R.push(D,Ce,it,pe,ce.z,rt)}}else je.visible&&R.push(D,Ce,je,pe,ce.z,null)}}const ge=D.children;for(let Ce=0,je=ge.length;Ce<je;Ce++)es(ge[Ce],oe,pe,xe)}function zr(D,oe,pe,xe){const ge=D.opaque,Ce=D.transmissive,je=D.transparent;x.setupLightsView(pe),T===!0&&Ge.setGlobalState(S.clippingPlanes,pe),Ce.length>0&&(function(Ye,et,tt,rt){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;const vt=Ne.isWebGL2;q===null&&(q=new Zi(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Ws:Yi,minFilter:Rl,samples:vt?4:0})),S.getDrawingBufferSize(Z),vt?q.setSize(Z.x,Z.y):q.setSize(pd(Z.x),pd(Z.y));const Rn=S.getRenderTarget();S.setRenderTarget(q),S.getClearColor(ie),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear();const qn=S.toneMapping;S.toneMapping=_i,Br(Ye,tt,rt),ue.updateMultisampleRenderTarget(q),ue.updateRenderTargetMipmap(q);let mt=!1;for(let xt=0,Tt=et.length;xt<Tt;xt++){const an=et[xt],Ot=an.object,lt=an.geometry,ut=an.material,or=an.group;if(ut.side===2&&Ot.layers.test(rt.layers)){const hn=ut.side;ut.side=Mn,ut.needsUpdate=!0,Hr(Ot,tt,rt,lt,ut,or),ut.side=hn,ut.needsUpdate=!0,mt=!0}}mt===!0&&(ue.updateMultisampleRenderTarget(q),ue.updateRenderTargetMipmap(q)),S.setRenderTarget(Rn),S.setClearColor(ie,te),S.toneMapping=qn})(ge,Ce,oe,pe),xe&&P.viewport(Q.copy(xe)),ge.length>0&&Br(ge,oe,pe),Ce.length>0&&Br(Ce,oe,pe),je.length>0&&Br(je,oe,pe),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Br(D,oe,pe){const xe=oe.isScene===!0?oe.overrideMaterial:null;for(let ge=0,Ce=D.length;ge<Ce;ge++){const je=D[ge],Ye=je.object,et=je.geometry,tt=xe===null?je.material:xe,rt=je.group;Ye.layers.test(pe.layers)&&Hr(Ye,oe,pe,et,tt,rt)}}function Hr(D,oe,pe,xe,ge,Ce){D.onBeforeRender(S,oe,pe,xe,ge,Ce),D.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ge.onBeforeRender(S,oe,pe,xe,D,Ce),ge.transparent===!0&&ge.side===2&&ge.forceSinglePass===!1?(ge.side=Mn,ge.needsUpdate=!0,S.renderBufferDirect(pe,oe,xe,ge,D,Ce),ge.side=xi,ge.needsUpdate=!0,S.renderBufferDirect(pe,oe,xe,ge,D,Ce),ge.side=2):S.renderBufferDirect(pe,oe,xe,ge,D,Ce),D.onAfterRender(S,oe,pe,xe,ge,Ce)}function ta(D,oe,pe){oe.isScene!==!0&&(oe=fe);const xe=he.get(D),ge=x.state.lights,Ce=x.state.shadowsArray,je=ge.state.version,Ye=De.getParameters(D,ge.state,Ce,oe,pe),et=De.getProgramCacheKey(Ye);let tt=xe.programs;xe.environment=D.isMeshStandardMaterial?oe.environment:null,xe.fog=oe.fog,xe.envMap=(D.isMeshStandardMaterial?Ae:ve).get(D.envMap||xe.environment),tt===void 0&&(D.addEventListener("dispose",rn),tt=new Map,xe.programs=tt);let rt=tt.get(et);if(rt!==void 0){if(xe.currentProgram===rt&&xe.lightsStateVersion===je)return Mi(D,Ye),rt}else Ye.uniforms=De.getUniforms(D),D.onBuild(pe,Ye,S),D.onBeforeCompile(Ye,S),rt=De.acquireProgram(Ye,et),tt.set(et,rt),xe.uniforms=Ye.uniforms;const it=xe.uniforms;return(D.isShaderMaterial||D.isRawShaderMaterial)&&D.clipping!==!0||(it.clippingPlanes=Ge.uniform),Mi(D,Ye),xe.needsLights=(function(vt){return vt.isMeshLambertMaterial||vt.isMeshToonMaterial||vt.isMeshPhongMaterial||vt.isMeshStandardMaterial||vt.isShadowMaterial||vt.isShaderMaterial&&vt.lights===!0})(D),xe.lightsStateVersion=je,xe.needsLights&&(it.ambientLightColor.value=ge.state.ambient,it.lightProbe.value=ge.state.probe,it.directionalLights.value=ge.state.directional,it.directionalLightShadows.value=ge.state.directionalShadow,it.spotLights.value=ge.state.spot,it.spotLightShadows.value=ge.state.spotShadow,it.rectAreaLights.value=ge.state.rectArea,it.ltc_1.value=ge.state.rectAreaLTC1,it.ltc_2.value=ge.state.rectAreaLTC2,it.pointLights.value=ge.state.point,it.pointLightShadows.value=ge.state.pointShadow,it.hemisphereLights.value=ge.state.hemi,it.directionalShadowMap.value=ge.state.directionalShadowMap,it.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,it.spotShadowMap.value=ge.state.spotShadowMap,it.spotLightMatrix.value=ge.state.spotLightMatrix,it.spotLightMap.value=ge.state.spotLightMap,it.pointShadowMap.value=ge.state.pointShadowMap,it.pointShadowMatrix.value=ge.state.pointShadowMatrix),xe.currentProgram=rt,xe.uniformsList=null,rt}function Gr(D){if(D.uniformsList===null){const oe=D.currentProgram.getUniforms();D.uniformsList=wl.seqWithValue(oe.seq,D.uniforms)}return D.uniformsList}function Mi(D,oe){const pe=he.get(D);pe.outputColorSpace=oe.outputColorSpace,pe.batching=oe.batching,pe.instancing=oe.instancing,pe.instancingColor=oe.instancingColor,pe.skinning=oe.skinning,pe.morphTargets=oe.morphTargets,pe.morphNormals=oe.morphNormals,pe.morphColors=oe.morphColors,pe.morphTargetsCount=oe.morphTargetsCount,pe.numClippingPlanes=oe.numClippingPlanes,pe.numIntersection=oe.numClipIntersection,pe.vertexAlphas=oe.vertexAlphas,pe.vertexTangents=oe.vertexTangents,pe.toneMapping=oe.toneMapping}Yn.setAnimationLoop((function(D){On&&On(D)})),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(D){On=D,Lt.setAnimationLoop(D),D===null?Yn.stop():Yn.start()},Lt.addEventListener("sessionstart",Xn),Lt.addEventListener("sessionend",sr),this.render=function(D,oe){if(oe!==void 0&&oe.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(G===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(oe),oe=Lt.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,oe,N),x=Mt.get(D,w.length),x.init(),w.push(x),k.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),A.setFromProjectionMatrix(k),B=this.localClippingEnabled,T=Ge.init(this.clippingPlanes,B),R=Xe.get(D,C.length),R.init(),C.push(R),es(D,oe,0,S.sortObjects),R.finish(),S.sortObjects===!0&&R.sort(H,$),this.info.render.frame++,T===!0&&Ge.beginShadows();const pe=x.state.shadowsArray;if(Qe.render(pe,D,oe),T===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(R,D),x.setupLights(S._useLegacyLights),oe.isArrayCamera){const xe=oe.cameras;for(let ge=0,Ce=xe.length;ge<Ce;ge++){const je=xe[ge];zr(R,D,je,je.viewport)}}else zr(R,D,oe);N!==null&&(ue.updateMultisampleRenderTarget(N),ue.updateRenderTargetMipmap(N)),D.isScene===!0&&D.onAfterRender(S,D,oe),$e.resetDefaultState(),re=-1,K=null,w.pop(),x=w.length>0?w[w.length-1]:null,C.pop(),R=C.length>0?C[C.length-1]:null},this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(D,oe,pe){he.get(D.texture).__webglTexture=oe,he.get(D.depthTexture).__webglTexture=pe;const xe=he.get(D);xe.__hasExternalTextures=!0,xe.__hasExternalTextures&&(xe.__autoAllocateDepthBuffer=pe===void 0,xe.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),xe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,oe){const pe=he.get(D);pe.__webglFramebuffer=oe,pe.__useDefaultFramebuffer=oe===void 0},this.setRenderTarget=function(D,oe=0,pe=0){N=D,I=oe,O=pe;let xe=!0,ge=null,Ce=!1,je=!1;if(D){const Ye=he.get(D);Ye.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(ne.FRAMEBUFFER,null),xe=!1):Ye.__webglFramebuffer===void 0?ue.setupRenderTarget(D):Ye.__hasExternalTextures&&ue.rebindTextures(D,he.get(D.texture).__webglTexture,he.get(D.depthTexture).__webglTexture);const et=D.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(je=!0);const tt=he.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ge=Array.isArray(tt[oe])?tt[oe][pe]:tt[oe],Ce=!0):ge=Ne.isWebGL2&&D.samples>0&&ue.useMultisampledRTT(D)===!1?he.get(D).__webglMultisampledFramebuffer:Array.isArray(tt)?tt[pe]:tt,Q.copy(D.viewport),le.copy(D.scissor),F=D.scissorTest}else Q.copy(W).multiplyScalar(ae).floor(),le.copy(M).multiplyScalar(ae).floor(),F=z;if(P.bindFramebuffer(ne.FRAMEBUFFER,ge)&&Ne.drawBuffers&&xe&&P.drawBuffers(D,ge),P.viewport(Q),P.scissor(le),P.setScissorTest(F),Ce){const Ye=he.get(D.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ye.__webglTexture,pe)}else if(je){const Ye=he.get(D.texture),et=oe||0;ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Ye.__webglTexture,pe||0,et)}re=-1},this.readRenderTargetPixels=function(D,oe,pe,xe,ge,Ce,je){if(!D||!D.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=he.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&je!==void 0&&(Ye=Ye[je]),Ye){P.bindFramebuffer(ne.FRAMEBUFFER,Ye);try{const et=D.texture,tt=et.format,rt=et.type;if(tt!==gr&&Ie.convert(tt)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const it=rt===Ws&&(Re.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Re.has("EXT_color_buffer_float"));if(!(rt===Yi||Ie.convert(rt)===ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_TYPE)||rt===vi&&(Ne.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float"))||it))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");oe>=0&&oe<=D.width-xe&&pe>=0&&pe<=D.height-ge&&ne.readPixels(oe,pe,xe,ge,Ie.convert(tt),Ie.convert(rt),Ce)}finally{const et=N!==null?he.get(N).__webglFramebuffer:null;P.bindFramebuffer(ne.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(D,oe,pe=0){const xe=Math.pow(2,-pe),ge=Math.floor(oe.image.width*xe),Ce=Math.floor(oe.image.height*xe);ue.setTexture2D(oe,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,pe,0,0,D.x,D.y,ge,Ce),P.unbindTexture()},this.copyTextureToTexture=function(D,oe,pe,xe=0){const ge=oe.image.width,Ce=oe.image.height,je=Ie.convert(pe.format),Ye=Ie.convert(pe.type);ue.setTexture2D(pe,0),ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,pe.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,pe.unpackAlignment),oe.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,xe,D.x,D.y,ge,Ce,je,Ye,oe.image.data):oe.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,xe,D.x,D.y,oe.mipmaps[0].width,oe.mipmaps[0].height,je,oe.mipmaps[0].data):ne.texSubImage2D(ne.TEXTURE_2D,xe,D.x,D.y,je,Ye,oe.image),xe===0&&pe.generateMipmaps&&ne.generateMipmap(ne.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(D,oe,pe,xe,ge=0){if(S.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const Ce=D.max.x-D.min.x+1,je=D.max.y-D.min.y+1,Ye=D.max.z-D.min.z+1,et=Ie.convert(xe.format),tt=Ie.convert(xe.type);let rt;if(xe.isData3DTexture)ue.setTexture3D(xe,0),rt=ne.TEXTURE_3D;else{if(!xe.isDataArrayTexture&&!xe.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");ue.setTexture2DArray(xe,0),rt=ne.TEXTURE_2D_ARRAY}ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,xe.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,xe.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,xe.unpackAlignment);const it=ne.getParameter(ne.UNPACK_ROW_LENGTH),vt=ne.getParameter(ne.UNPACK_IMAGE_HEIGHT),Rn=ne.getParameter(ne.UNPACK_SKIP_PIXELS),qn=ne.getParameter(ne.UNPACK_SKIP_ROWS),mt=ne.getParameter(ne.UNPACK_SKIP_IMAGES),xt=pe.isCompressedTexture?pe.mipmaps[ge]:pe.image;ne.pixelStorei(ne.UNPACK_ROW_LENGTH,xt.width),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,xt.height),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,D.min.x),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,D.min.y),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,D.min.z),pe.isDataTexture||pe.isData3DTexture?ne.texSubImage3D(rt,ge,oe.x,oe.y,oe.z,Ce,je,Ye,et,tt,xt.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(rt,ge,oe.x,oe.y,oe.z,Ce,je,Ye,et,xt.data)):ne.texSubImage3D(rt,ge,oe.x,oe.y,oe.z,Ce,je,Ye,et,tt,xt),ne.pixelStorei(ne.UNPACK_ROW_LENGTH,it),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,vt),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,Rn),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,qn),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,mt),ge===0&&xe.generateMipmaps&&ne.generateMipmap(rt),P.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?ue.setTextureCube(D,0):D.isData3DTexture?ue.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ue.setTexture2DArray(D,0):ue.setTexture2D(D,0),P.unbindTexture()},this.resetState=function(){I=0,O=0,N=null,P.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Sd?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===Ul?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?$i:Vm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?zt:kr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vx extends Rd{}Vx.prototype.isWebGL1Renderer=!0;class og extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}new X;new X;new X;new X;new Ze;new Ze;new ot;new X;new X;new X;new Ze;new Ze;new Ze;new X;new X;new X;new Bt;new Bt;new X;new ot;new X;new Si;new ot;new qs;new ot;new ot;new ot;new ot;new yi;new ot;new jn;new Si;new ot;new ot;new ot;new ot;new Md;new yi;new Si;new X;new jn;new X;new X;new ot;new qs;new Si;new X;new X;new ot;new qs;new Si;new X;new X;new X;new X;new X;new Wn;class zl extends Ei{constructor(e=1,n=32,i=16,s=0,l=2*Math.PI,c=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:l,thetaStart:c,thetaLength:p},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const f=Math.min(c+p,Math.PI);let d=0;const m=[],v=new X,_=new X,y=[],b=[],R=[],x=[];for(let C=0;C<=i;C++){const w=[],S=C/i;let G=0;C===0&&c===0?G=.5/n:C===i&&f===Math.PI&&(G=-.5/n);for(let I=0;I<=n;I++){const O=I/n;v.x=-e*Math.cos(s+O*l)*Math.sin(c+S*p),v.y=e*Math.cos(c+S*p),v.z=e*Math.sin(s+O*l)*Math.sin(c+S*p),b.push(v.x,v.y,v.z),_.copy(v).normalize(),R.push(_.x,_.y,_.z),x.push(O+G,1-S),w.push(d++)}m.push(w)}for(let C=0;C<i;C++)for(let w=0;w<n;w++){const S=m[C][w+1],G=m[C][w],I=m[C+1][w],O=m[C+1][w+1];(C!==0||c>0)&&y.push(S,G,O),(C!==i-1||f<Math.PI)&&y.push(G,I,O)}this.setIndex(y),this.setAttribute("position",new xr(b,3)),this.setAttribute("normal",new xr(R,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const vm={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Wx{constructor(e,n,i){const s=this;let l,c=!1,p=0,f=0;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(m){f++,c===!1&&s.onStart!==void 0&&s.onStart(m,p,f),c=!0},this.itemEnd=function(m){p++,s.onProgress!==void 0&&s.onProgress(m,p,f),p===f&&(c=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return l?l(m):m},this.setURLModifier=function(m){return l=m,this},this.addHandler=function(m,v){return d.push(m,v),this},this.removeHandler=function(m){const v=d.indexOf(m);return v!==-1&&d.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=d.length;v<_;v+=2){const y=d[v],b=d[v+1];if(y.global&&(y.lastIndex=0),y.test(m))return b}return null}}}const jx=new Wx;class Ad{constructor(e){this.manager=e!==void 0?e:jx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise((function(s,l){i.load(e,s,n,l)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ad.DEFAULT_MATERIAL_NAME="__DEFAULT";class Xx extends Ad{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=vm.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout((function(){n&&n(c),l.manager.itemEnd(e)}),0),c;const p=js("img");function f(){m(),vm.add(e,this),n&&n(this),l.manager.itemEnd(e)}function d(v){m(),s&&s(v),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){p.removeEventListener("load",f,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",f,!1),p.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),l.manager.itemStart(e),p.src=e,p}}class lg extends Ad{constructor(e){super(e)}load(e,n,i,s){const l=new wn,c=new Xx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,(function(p){l.image=p,l.needsUpdate=!0,n!==void 0&&n(l)}),i,s),l}}new ot;new X;new X;new ot;new X;new X;new ot;new ot;new ot;new X;new X;new X;new X;new X;new X;const ug="\\[\\]\\.:\\/",nd="[^"+ug+"]",Yx="[^"+ug.replace("\\.","")+"]";new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",nd)+/(WCOD+)?/.source.replace("WCOD",Yx)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nd)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nd)+"$");class _m{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}new Ze;new X;new X;new X;new X;new ot;new ot;new X;new pt;new pt;new X;new X;new X;new X;new Ed;new yi;new X;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);const xm={type:"change"},rd={type:"start"},ym={type:"end"},El=new qs,Sm=new mi,qx=Math.cos(70*O_.DEG2RAD);class cg extends ea{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ba.ROTATE,MIDDLE:ba.DOLLY,RIGHT:ba.PAN},this.touches={ONE:Ca.ROTATE,TWO:Ca.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(j){j.addEventListener("keydown",Ue),this._domElementKeyEvents=j},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(xm),i.update(),l=s.NONE},this.update=(function(){const j=new X,Ie=new Qi().setFromUnitVectors(e.up,new X(0,1,0)),$e=Ie.clone().invert(),ct=new X,ne=new Qi,Yt=new X,bt=2*Math.PI;return function(Fr=null){const In=i.object.position;j.copy(In).sub(i.target),j.applyQuaternion(Ie),p.setFromVector3(j),i.autoRotate&&l===s.NONE&&le(K(Fr)),i.enableDamping?(p.theta+=f.theta*i.dampingFactor,p.phi+=f.phi*i.dampingFactor):(p.theta+=f.theta,p.phi+=f.phi);let It=i.minAzimuthAngle,rn=i.maxAzimuthAngle;isFinite(It)&&isFinite(rn)&&(It<-Math.PI?It+=bt:It>Math.PI&&(It-=bt),rn<-Math.PI?rn+=bt:rn>Math.PI&&(rn-=bt),It<=rn?p.theta=Math.max(It,Math.min(rn,p.theta)):p.theta=p.theta>(It+rn)/2?Math.max(It,p.theta):Math.min(rn,p.theta)),p.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,p.phi)),p.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&O||i.object.isOrthographicCamera?p.radius=$(p.radius):p.radius=$(p.radius*d),j.setFromSpherical(p),j.applyQuaternion($e),In.copy(i.target).add(j),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),m.set(0,0,0));let Sr=!1;if(i.zoomToCursor&&O){let On=null;if(i.object.isPerspectiveCamera){const Xn=j.length();On=$(Xn*d);const sr=Xn-On;i.object.position.addScaledVector(G,sr),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Xn=new X(I.x,I.y,0);Xn.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Sr=!0;const sr=new X(I.x,I.y,0);sr.unproject(i.object),i.object.position.sub(sr).add(Xn),i.object.updateMatrixWorld(),On=j.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;On!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(On).add(i.object.position):(El.origin.copy(i.object.position),El.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(El.direction))<qx?e.lookAt(i.target):(Sm.setFromNormalAndCoplanarPoint(i.object.up,i.target),El.intersectPlane(Sm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Sr=!0);return d=1,O=!1,Sr||ct.distanceToSquared(i.object.position)>c||8*(1-ne.dot(i.object.quaternion))>c||Yt.distanceToSquared(i.target)>0?(i.dispatchEvent(xm),ct.copy(i.object.position),ne.copy(i.object.quaternion),Yt.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ge),i.domElement.removeEventListener("pointerdown",ve),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",De),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ue),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=s.NONE;const c=1e-6,p=new _m,f=new _m;let d=1;const m=new X,v=new Ze,_=new Ze,y=new Ze,b=new Ze,R=new Ze,x=new Ze,C=new Ze,w=new Ze,S=new Ze,G=new X,I=new Ze;let O=!1;const N=[],re={};function K(j){return j!==null?2*Math.PI/60*i.autoRotateSpeed*j:2*Math.PI/60/60*i.autoRotateSpeed}function Q(j){const Ie=Math.abs(j)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*Ie)}function le(j){f.theta-=j}function F(j){f.phi-=j}const ie=(function(){const j=new X;return function($e,ct){j.setFromMatrixColumn(ct,0),j.multiplyScalar(-$e),m.add(j)}})(),te=(function(){const j=new X;return function($e,ct){i.screenSpacePanning===!0?j.setFromMatrixColumn(ct,1):(j.setFromMatrixColumn(ct,0),j.crossVectors(i.object.up,j)),j.multiplyScalar($e),m.add(j)}})(),me=(function(){const j=new X;return function($e,ct){const ne=i.domElement;if(i.object.isPerspectiveCamera){const Yt=i.object.position;j.copy(Yt).sub(i.target);let bt=j.length();bt*=Math.tan(i.object.fov/2*Math.PI/180),ie(2*$e*bt/ne.clientHeight,i.object.matrix),te(2*ct*bt/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ie($e*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),te(ct*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Me(j){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=j:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ae(j){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=j:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(j,Ie){if(!i.zoomToCursor)return;O=!0;const $e=i.domElement.getBoundingClientRect(),ct=j-$e.left,ne=Ie-$e.top,Yt=$e.width,bt=$e.height;I.x=ct/Yt*2-1,I.y=-(ne/bt)*2+1,G.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(j){return Math.max(i.minDistance,Math.min(i.maxDistance,j))}function W(j){v.set(j.clientX,j.clientY)}function M(j){H(j.clientX,j.clientX),C.set(j.clientX,j.clientY)}function z(j){b.set(j.clientX,j.clientY)}function A(j){_.set(j.clientX,j.clientY),y.subVectors(_,v).multiplyScalar(i.rotateSpeed);const Ie=i.domElement;le(2*Math.PI*y.x/Ie.clientHeight),F(2*Math.PI*y.y/Ie.clientHeight),v.copy(_),i.update()}function T(j){w.set(j.clientX,j.clientY),S.subVectors(w,C),S.y>0?Me(Q(S.y)):S.y<0&&ae(Q(S.y)),C.copy(w),i.update()}function B(j){R.set(j.clientX,j.clientY),x.subVectors(R,b).multiplyScalar(i.panSpeed),me(x.x,x.y),b.copy(R),i.update()}function q(j){H(j.clientX,j.clientY),j.deltaY<0?ae(Q(j.deltaY)):j.deltaY>0&&Me(Q(j.deltaY)),i.update()}function k(j){let Ie=!1;switch(j.code){case i.keys.UP:j.ctrlKey||j.metaKey||j.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(0,i.keyPanSpeed),Ie=!0;break;case i.keys.BOTTOM:j.ctrlKey||j.metaKey||j.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(0,-i.keyPanSpeed),Ie=!0;break;case i.keys.LEFT:j.ctrlKey||j.metaKey||j.shiftKey?le(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(i.keyPanSpeed,0),Ie=!0;break;case i.keys.RIGHT:j.ctrlKey||j.metaKey||j.shiftKey?le(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(-i.keyPanSpeed,0),Ie=!0;break}Ie&&(j.preventDefault(),i.update())}function Z(j){if(N.length===1)v.set(j.pageX,j.pageY);else{const Ie=Ut(j),$e=.5*(j.pageX+Ie.x),ct=.5*(j.pageY+Ie.y);v.set($e,ct)}}function ce(j){if(N.length===1)b.set(j.pageX,j.pageY);else{const Ie=Ut(j),$e=.5*(j.pageX+Ie.x),ct=.5*(j.pageY+Ie.y);b.set($e,ct)}}function fe(j){const Ie=Ut(j),$e=j.pageX-Ie.x,ct=j.pageY-Ie.y,ne=Math.sqrt($e*$e+ct*ct);C.set(0,ne)}function Ee(j){i.enableZoom&&fe(j),i.enablePan&&ce(j)}function Re(j){i.enableZoom&&fe(j),i.enableRotate&&Z(j)}function Ne(j){if(N.length==1)_.set(j.pageX,j.pageY);else{const $e=Ut(j),ct=.5*(j.pageX+$e.x),ne=.5*(j.pageY+$e.y);_.set(ct,ne)}y.subVectors(_,v).multiplyScalar(i.rotateSpeed);const Ie=i.domElement;le(2*Math.PI*y.x/Ie.clientHeight),F(2*Math.PI*y.y/Ie.clientHeight),v.copy(_)}function P(j){if(N.length===1)R.set(j.pageX,j.pageY);else{const Ie=Ut(j),$e=.5*(j.pageX+Ie.x),ct=.5*(j.pageY+Ie.y);R.set($e,ct)}x.subVectors(R,b).multiplyScalar(i.panSpeed),me(x.x,x.y),b.copy(R)}function we(j){const Ie=Ut(j),$e=j.pageX-Ie.x,ct=j.pageY-Ie.y,ne=Math.sqrt($e*$e+ct*ct);w.set(0,ne),S.set(0,Math.pow(w.y/C.y,i.zoomSpeed)),Me(S.y),C.copy(w);const Yt=(j.pageX+Ie.x)*.5,bt=(j.pageY+Ie.y)*.5;H(Yt,bt)}function he(j){i.enableZoom&&we(j),i.enablePan&&P(j)}function ue(j){i.enableZoom&&we(j),i.enableRotate&&Ne(j)}function ve(j){i.enabled!==!1&&(N.length===0&&(i.domElement.setPointerCapture(j.pointerId),i.domElement.addEventListener("pointermove",Ae),i.domElement.addEventListener("pointerup",be)),Qe(j),j.pointerType==="touch"?Xe(j):Pe(j))}function Ae(j){i.enabled!==!1&&(j.pointerType==="touch"?Mt(j):Be(j))}function be(j){Je(j),N.length===0&&(i.domElement.releasePointerCapture(j.pointerId),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(ym),l=s.NONE}function Pe(j){let Ie;switch(j.button){case 0:Ie=i.mouseButtons.LEFT;break;case 1:Ie=i.mouseButtons.MIDDLE;break;case 2:Ie=i.mouseButtons.RIGHT;break;default:Ie=-1}switch(Ie){case ba.DOLLY:if(i.enableZoom===!1)return;M(j),l=s.DOLLY;break;case ba.ROTATE:if(j.ctrlKey||j.metaKey||j.shiftKey){if(i.enablePan===!1)return;z(j),l=s.PAN}else{if(i.enableRotate===!1)return;W(j),l=s.ROTATE}break;case ba.PAN:if(j.ctrlKey||j.metaKey||j.shiftKey){if(i.enableRotate===!1)return;W(j),l=s.ROTATE}else{if(i.enablePan===!1)return;z(j),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&i.dispatchEvent(rd)}function Be(j){switch(l){case s.ROTATE:if(i.enableRotate===!1)return;A(j);break;case s.DOLLY:if(i.enableZoom===!1)return;T(j);break;case s.PAN:if(i.enablePan===!1)return;B(j);break}}function De(j){i.enabled===!1||i.enableZoom===!1||l!==s.NONE||(j.preventDefault(),i.dispatchEvent(rd),q(j),i.dispatchEvent(ym))}function Ue(j){i.enabled===!1||i.enablePan===!1||k(j)}function Xe(j){switch(Tn(j),N.length){case 1:switch(i.touches.ONE){case Ca.ROTATE:if(i.enableRotate===!1)return;Z(j),l=s.TOUCH_ROTATE;break;case Ca.PAN:if(i.enablePan===!1)return;ce(j),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(i.touches.TWO){case Ca.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(j),l=s.TOUCH_DOLLY_PAN;break;case Ca.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Re(j),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&i.dispatchEvent(rd)}function Mt(j){switch(Tn(j),l){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ne(j),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;P(j),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(j),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ue(j),i.update();break;default:l=s.NONE}}function Ge(j){i.enabled!==!1&&j.preventDefault()}function Qe(j){N.push(j.pointerId)}function Je(j){delete re[j.pointerId];for(let Ie=0;Ie<N.length;Ie++)if(N[Ie]==j.pointerId){N.splice(Ie,1);return}}function Tn(j){let Ie=re[j.pointerId];Ie===void 0&&(Ie=new Ze,re[j.pointerId]=Ie),Ie.set(j.pageX,j.pageY)}function Ut(j){const Ie=j.pointerId===N[0]?N[1]:N[0];return re[Ie]}i.domElement.addEventListener("contextmenu",Ge),i.domElement.addEventListener("pointerdown",ve),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",De,{passive:!1}),this.update()}}const yr=.1,Kx="(max-width: 768px), (pointer: coarse)";function bd(){if(typeof window>"u")return!1;try{return window.matchMedia(Kx).matches}catch{return window.innerWidth<=768}}function $x(){return bd()?window.innerHeight>=window.innerWidth?100:92:75}function Zx(){return bd()?-.58:-.35}function Qx(){return bd()?.12:.08}function Pl(a,e){a.fov=$x(),a.updateProjectionMatrix(),e.rotateSpeed=Zx(),e.dampingFactor=Qx()}function Jx(){return new URLSearchParams(window.location.search).get("debug")==="1"}function ey(a){const e=a.object;if(e.includes("שרגא")||e.includes("מיא")||e.includes("קולמוס")||e.includes("ספסלא"))return .55;if(e.includes("רבי")||e.includes("ספרא")||e.includes("תלמידא"))return .68;if(e.includes("ארון")||e.includes("חלון")||e.includes("תרעא"))return .64;const n=a.hotspot.radiusPx??70;return n<=58?.52:n>=85?.68:.6}function dg({riddle:a,onDiscover:e,onInteraction:n,onHoverChange:i,glowMode:s="none",debug:l}){const c=de.useRef(null),p=a.hotspot.radiusPx??70,d=Math.max(p,48)*2,m=ey(a)*(s==="boosted"?1.35:1),v=Math.round(d*m),_=l===!0||l==null&&Jx(),[y,b]=de.useState(!1),[R,x]=de.useState(!1),C=de.useRef(!1),w=de.useCallback(()=>{b(!0),i==null||i(!0),n==null||n()},[i,n]),S=de.useCallback(()=>{b(!1),x(!1),i==null||i(!1)},[i]);de.useEffect(()=>{if(!y||C.current)return;const I=O=>{var N;(N=c.current)!=null&&N.contains(O.target)||S()};return document.addEventListener("pointerdown",I),()=>document.removeEventListener("pointerdown",I)},[y,S]);const G=de.useCallback(()=>{e(),S()},[e,S]);return L.jsxs("div",{className:"hotspot-wrap",style:{width:d,height:d},children:[L.jsx("div",{className:["hotspot-glow",y?"hotspot-glow--on":"",!y&&s==="idle"?"hotspot-glow--idle":"",!y&&s==="boosted"?"hotspot-glow--boosted":""].filter(Boolean).join(" "),style:{width:v,height:Math.round(v*1.25)},"aria-hidden":"true"}),L.jsx("button",{ref:c,type:"button",className:["hotspot-hit",_?"hotspot-hit--debug":""].filter(Boolean).join(" "),style:{width:d,height:d},onPointerDown:I=>{I.stopPropagation(),I.pointerType==="touch"&&(C.current=!0)},onPointerEnter:()=>{C.current||w()},onPointerLeave:()=>{C.current||S()},onFocus:()=>w(),onBlur:()=>S(),onClick:I=>{if(I.stopPropagation(),C.current){if(!R){I.preventDefault(),x(!0),w();return}G();return}G()},"aria-label":`${a.object} — חפשו את החפץ כדי לפתוח חידה`})]})}function ty(){return new URLSearchParams(window.location.search).get("debug")==="1"}function ny(a,e,n,i){const[s,l,c]=Xa(n,i);a.position.set(-s*yr,-l*yr,-c*yr),e.target.set(0,0,0),e.update()}function ry({riddles:a,activeIndex:e,solvedCount:n,onHotspotClick:i,lockUnlocked:s,onEnterInner:l,onWebGLFail:c,activeGlowMode:p="none"}){const f=de.useRef(null),d=de.useRef(null),m=de.useRef(null),v=de.useRef([]),_=de.useRef(null),y=de.useRef(null),b=de.useRef(null),R=de.useRef(e),x=de.useRef(s),[C,w]=de.useState(!1),[S,G]=de.useState(!1),I=ty();R.current=e,x.current=s;const O=e===0&&n===0&&!s,N=de.useCallback((Q,le)=>{const F=y.current,ie=b.current;!F||!ie||ny(F,ie,Q,le)},[]);de.useEffect(()=>{if(I)return window.__lookAtRiddle=Q=>{const le=a[Q];le&&N(le.hotspot.yaw,le.hotspot.pitch)},()=>{delete window.__lookAtRiddle}},[I,N,a]);const re=de.useCallback(Q=>{G(Q);const le=b.current;le&&(le.enableRotate=!Q)},[]);de.useEffect(()=>{const Q=f.current,le=d.current;if(!Q||!le)return;let F;try{F=new Rd({canvas:le,antialias:!0,alpha:!1})}catch{c();return}const ie=new og,te=new Dn(75,1,.1,1100);y.current=te;const me=new cg(te,le);b.current=me,me.enableZoom=!1,me.enablePan=!1,me.enableDamping=!0,me.minDistance=yr,me.maxDistance=yr,me.target.set(0,0,0),Pl(te,me);const Me=k=>{k.cancelable&&k.preventDefault()};le.addEventListener("touchmove",Me,{passive:!1});const ae=new zl(500,64,48);ae.scale(-1,1,1);let H=null,$=!1;new lg().load(Pm,k=>{if($){k.dispose();return}k.colorSpace=zt,H=new jn(ae,new kl({map:k})),ie.add(H),w(!0)},void 0,()=>{$||c()});const M=()=>{const k=Q.clientWidth,Z=Q.clientHeight;k<2||Z<2||(Pl(te,me),te.aspect=k/Z,te.updateProjectionMatrix(),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.setSize(k,Z,!1))},z=new ResizeObserver(M);z.observe(Q),M();const A=new X,T=()=>{const k=Q.clientWidth,Z=Q.clientHeight;if(k<2||Z<2)return;const ce=R.current,fe=x.current,Ee=!fe&&ce<a.length?a[ce]:null,Re=m.current;if(Ee&&Re){const[P,we,he]=Xa(Ee.hotspot.yaw,Ee.hotspot.pitch);A.set(P,we,he).project(te);const ue=A.z<1&&A.z>-1;Re.style.left=`${(A.x*.5+.5)*k}px`,Re.style.top=`${(-A.y*.5+.5)*Z}px`,Re.style.display=ue?"":"none"}else Re&&(Re.style.display="none");a.forEach((P,we)=>{const he=v.current[we];if(!he)return;const[ue,ve,Ae]=Xa(P.hotspot.yaw,P.hotspot.pitch);A.set(ue,ve,Ae).project(te);const be=A.z<1&&A.z>-1;he.style.left=`${(A.x*.5+.5)*k}px`,he.style.top=`${(-A.y*.5+.5)*Z}px`,he.style.display=be?"":"none"});const Ne=_.current;if(Ne)if(fe){const[P,we,he]=Xa(0,-25);A.set(P,we,he).project(te);const ue=A.z<1&&A.z>-1;Ne.style.left=`${(A.x*.5+.5)*k}px`,Ne.style.top=`${(-A.y*.5+.5)*Z}px`,Ne.style.display=ue?"":"none"}else Ne.style.display="none"};let B=0;const q=()=>{B=requestAnimationFrame(q),me.update(),F.render(ie,te),T()};return q(),()=>{var k;if($=!0,cancelAnimationFrame(B),z.disconnect(),le.removeEventListener("touchmove",Me),me.dispose(),ae.dispose(),H){const Z=H.material;(k=Z.map)==null||k.dispose(),Z.dispose()}F.dispose(),y.current=null,b.current=null}},[c,a]),de.useEffect(()=>{if(!C||!O)return;const Q=a[0];if(!Q)return;const le=window.setTimeout(()=>{N(Q.hotspot.yaw,Q.hotspot.pitch)},300);return()=>window.clearTimeout(le)},[C,O,a,N]);const K=!s&&e<a.length?a[e]:null;return L.jsxs("div",{ref:f,className:"panorama-viewport panorama-viewport--360",children:[L.jsx("canvas",{ref:d,className:"panorama-canvas","aria-hidden":"true"}),!C&&L.jsx("div",{className:"panorama-loading",children:"טוען פנורמה…"}),!s&&e<a.length&&L.jsx("div",{className:"panorama-scene-dim","aria-hidden":"true"}),L.jsxs("div",{className:`panorama-hotspots-layer${S?" panorama-hotspots-layer--hover":""}`,children:[K&&L.jsx("div",{ref:Q=>{m.current=Q},className:"hotspot hotspot--active",children:L.jsx(dg,{riddle:K,onDiscover:()=>i(e),onHoverChange:re,glowMode:p})},K.id),I&&a.map((Q,le)=>L.jsx("div",{ref:F=>{v.current[le]=F},className:"hotspot-debug-mark","aria-hidden":"true",children:Q.id},`dbg-${Q.id}`)),L.jsxs("button",{type:"button",ref:_,className:"inner-door-open",style:{display:s?"":"none"},onClick:l,disabled:!l,"aria-label":"כניסה לחדר הסודי",children:[L.jsx("span",{className:"inner-door-glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-door-label",children:"לחדר הסודי"})]})]})]})}function iy(a){return!!(a!=null&&a.closest(".hotspot-hit, .hotspot-wrap"))}function ay({riddles:a,activeIndex:e,solvedCount:n,onHotspotClick:i,lockUnlocked:s,onEnterInner:l,activeGlowMode:c="none"}){const p=de.useRef(null),[f,d]=de.useState(!1),m=de.useRef({active:!1,startX:0,scrollLeft:0}),v=e===0&&n===0&&!s,_=de.useCallback(C=>{var N;const w=p.current;if(!w)return;const S=(N=a[C])==null?void 0:N.hotspot;if(!S)return;const G=w.querySelector(".panorama-inner");if(!G)return;const O=(S.flatX??(S.yaw+180)/360*100)/100*G.offsetWidth-w.clientWidth/2;w.scrollTo({left:Math.max(0,O),behavior:"smooth"})},[a]);de.useEffect(()=>{if(!v)return;const C=window.setTimeout(()=>_(0),300);return()=>window.clearTimeout(C)},[v,_]);const y=C=>{if(iy(C.target))return;const w=p.current;w&&(m.current={active:!0,startX:C.clientX,scrollLeft:w.scrollLeft},w.setPointerCapture(C.pointerId))},b=C=>{if(!m.current.active||!p.current)return;const w=C.clientX-m.current.startX;p.current.scrollLeft=m.current.scrollLeft-w},R=C=>{var w;m.current.active=!1,(w=p.current)==null||w.releasePointerCapture(C.pointerId)},x=!s&&e<a.length?a[e]:null;return L.jsx("div",{ref:p,className:"panorama-viewport panorama-viewport--flat",onPointerDown:y,onPointerMove:b,onPointerUp:R,onPointerCancel:R,"aria-label":"הצופן הארמי — גררו לצדדים (מצב גיבוי)",children:L.jsxs("div",{className:"panorama-inner",children:[L.jsxs("div",{className:`panorama-bg ${f?"panorama-bg--fallback":""}`,children:[!f&&L.jsx("img",{src:Pm,alt:"",className:"panorama-img",onError:()=>d(!0),draggable:!1}),f&&L.jsx("div",{className:"panorama-fallback-art","aria-hidden":"true"})]}),!s&&e<a.length&&L.jsx("div",{className:"panorama-scene-dim","aria-hidden":"true"}),x&&(()=>{const C=x.hotspot.flatX??(x.hotspot.yaw+180)/360*100,w=x.hotspot.flatY??50-x.hotspot.pitch/90*50;return L.jsx("div",{className:"hotspot hotspot--active",style:{left:`${C}%`,top:`${w}%`},children:L.jsx(dg,{riddle:x,onDiscover:()=>i(e),glowMode:c})},x.id)})(),s&&L.jsxs("button",{type:"button",className:"inner-door-open",style:{left:"50%",top:"85%"},onClick:l,disabled:!l,"aria-label":"כניסה לחדר הסודי",children:[L.jsx("span",{className:"inner-door-glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-door-label",children:"לחדר הסודי"})]})]})})}function sy(a){const[e,n]=de.useState(!1);return L.jsx("div",{className:"panorama-shell",children:e?L.jsx(ay,{...a}):L.jsx(ry,{...a,onWebGLFail:()=>n(!0)})})}function oy({riddle:a,onCorrect:e,onClose:n}){const[i,s]=de.useState(!1),[l,c]=de.useState(!1),p=de.useMemo(()=>f_([...a.options]),[a.id]);de.useEffect(()=>{s(!1),c(!1)},[a.id]);const f=d=>{d===a.answer?e():(c(!0),setTimeout(()=>c(!1),1400))};return L.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:n,children:L.jsxs("div",{className:"riddle-modal",role:"dialog","aria-modal":"true","aria-labelledby":"riddle-title",onClick:d=>d.stopPropagation(),children:[L.jsx("button",{type:"button",className:"modal-close",onClick:n,"aria-label":"סגירה",children:"×"}),L.jsx("p",{className:"riddle-object",children:a.object}),L.jsx("h2",{id:"riddle-title",className:"riddle-aramaic phrase-font",children:a.aramaicDisplay??a.aramaic}),L.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>s(d=>!d),"aria-expanded":i,children:i?"הסתר תרגום לעברית":"הצג תרגום לעברית"}),i&&L.jsx("p",{className:"riddle-hebrew",children:a.hebrewDisplay??a.hebrew}),L.jsx("div",{className:"riddle-options",role:"group","aria-label":"בחרו תשובה",children:p.map(d=>L.jsx("button",{type:"button",className:"riddle-option phrase-font",onClick:()=>f(d),children:xd(a,d)},d))}),l&&L.jsx("p",{className:"riddle-wrong",role:"alert",children:"נסו שוב — התשובה לא נכונה"})]})})}const ly=[{letter:"א",value:1},{letter:"ב",value:2},{letter:"ג",value:3},{letter:"ד",value:4},{letter:"ה",value:5},{letter:"ו",value:6},{letter:"ז",value:7},{letter:"ח",value:8},{letter:"ט",value:9},{letter:"י",value:10},{letter:"כ",value:20},{letter:"ך",value:20,note:"סופית"},{letter:"ל",value:30},{letter:"מ",value:40},{letter:"ם",value:40,note:"סופית"},{letter:"נ",value:50},{letter:"ן",value:50,note:"סופית"},{letter:"ס",value:60},{letter:"ע",value:70},{letter:"פ",value:80},{letter:"ף",value:80,note:"סופית"},{letter:"צ",value:90},{letter:"ץ",value:90,note:"סופית"},{letter:"ק",value:100},{letter:"ר",value:200},{letter:"ש",value:300},{letter:"ת",value:400}];function uy({letters:a,total:e,dialDigit:n,onComplete:i,dismissOnly:s=!1}){const[l,c]=de.useState("letters"),[p,f]=de.useState(0);return de.useEffect(()=>{c("letters"),f(0);let d=0;const m=window.setInterval(()=>{d+=1,f(d),d>=a.length&&(window.clearInterval(m),window.setTimeout(()=>c("sum"),500))},450);return()=>window.clearInterval(m)},[a]),de.useEffect(()=>{if(l==="sum"){const d=window.setTimeout(()=>c("digit"),900);return()=>window.clearTimeout(d)}if(l==="digit"&&!s){const d=window.setTimeout(()=>{c("done"),i()},800);return()=>window.clearTimeout(d)}},[l,i,s]),L.jsx("div",{className:"gem-breakdown-overlay",role:"dialog","aria-label":"פירוק גימטריה",onClick:s?i:void 0,children:L.jsxs("div",{className:"gem-breakdown-card",onClick:s?d=>d.stopPropagation():void 0,children:[L.jsx("h3",{children:s?"רמז — פירוק גימטריה":"פירוק גימטריה"}),L.jsx("div",{className:"gem-letters",children:a.slice(0,p).map(([d,m],v)=>L.jsxs("div",{className:"gem-letter-row pop-in",children:[L.jsx("span",{className:"phrase-font gem-letter",children:d}),L.jsx("span",{className:"gem-eq",children:"="}),L.jsx("span",{className:"gem-value",children:m})]},`${d}-${v}`))}),(l==="sum"||l==="digit"||l==="done")&&L.jsxs("div",{className:"gem-sum pop-in",children:[L.jsx("span",{children:"סה״כ"}),L.jsx("strong",{children:e})]}),(l==="digit"||l==="done")&&L.jsxs("div",{className:"gem-digit pop-in",children:[L.jsx("span",{children:"ספרת המנעול"}),L.jsx("strong",{className:"gem-digit-num",children:n})]}),s&&(l==="digit"||l==="done")&&L.jsx("button",{type:"button",className:"btn-secondary gem-breakdown-close",onClick:i,children:"סגירה — חזרה לחישוב"})]})})}function cy({riddle:a=null,lockIndex:e=null,lockWrongAttempts:n=0,preferOpen:i=!1,hintAfterWrongAttempts:s=2,onCalcChange:l,readyForLock:c=!1,lockDigitHint:p=null}){const[f,d]=de.useState(!1),[m,v]=de.useState([]),[_,y]=de.useState(!1),b=a?xd(a,a.answer):null,R=de.useMemo(()=>m.reduce((I,O)=>I+O.value,0),[m]),x=m.length>0?p_(R):null,C=de.useMemo(()=>m.map(I=>I.letter).join(""),[m]);de.useEffect(()=>{i&&d(!0)},[i,a==null?void 0:a.id]),de.useEffect(()=>{v([]),y(!1)},[a==null?void 0:a.id]),de.useEffect(()=>{l==null||l({letterString:C,total:R,finalDigit:x,letterCount:m.length})},[C,R,x,m.length,l]);const w=de.useCallback((I,O)=>{v(N=>[...N,{letter:I,value:O}])},[]),S=de.useCallback(()=>{v(I=>I.slice(0,-1))},[]),G=de.useCallback(()=>{v([])},[]);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:`gem-calc-drawer${f?" gem-calc-drawer--open":""}`,"data-open":f?"true":"false",children:[L.jsxs("aside",{id:"gematria-calculator",className:"gem-calc-panel",role:"dialog","aria-label":"מחשבון גימטריה","aria-hidden":!f,children:[L.jsxs("header",{className:"gem-calc-header",children:[L.jsxs("div",{className:"gem-calc-header-row",children:[L.jsx("h3",{className:"gem-calc-title",children:"מחשבון גימטריה"}),L.jsx("button",{type:"button",className:"gem-calc-close",onClick:()=>d(!1),"aria-label":"סגור מחשבון",children:"✕"})]}),b&&L.jsx("p",{className:"gem-calc-word phrase-font","aria-label":"מילת התשובה",children:b})]}),L.jsxs("div",{className:"gem-calc-display","aria-live":"polite","aria-label":"תצוגת חישוב",children:[L.jsx("div",{className:"gem-calc-tape",dir:"rtl",children:m.length===0?L.jsx("span",{className:"gem-calc-tape-empty",children:"לחצו אותיות…"}):m.map((I,O)=>L.jsxs("span",{className:"gem-calc-tape-item",children:[O>0&&L.jsx("span",{className:"gem-calc-tape-plus",children:"+"}),L.jsx("span",{className:"gem-calc-tape-letter phrase-font",children:I.letter}),L.jsxs("span",{className:"gem-calc-tape-val",children:["(",I.value,")"]})]},`${I.letter}-${O}`))}),L.jsxs("div",{className:"gem-calc-total-row",children:[L.jsx("span",{className:"gem-calc-total-label",children:"סה״כ"}),L.jsx("span",{className:"gem-calc-total-value",children:m.length>0?R:"—"})]}),x!==null&&L.jsxs("p",{className:"gem-calc-last-digit",children:["ספרה אחרונה: ",L.jsx("strong",{children:x})]})]}),L.jsxs("div",{className:"gem-calc-toolbar",children:[L.jsx("button",{type:"button",className:"gem-calc-action-btn",onClick:S,"aria-label":"מחק אות אחרונה",children:"⌫"}),L.jsx("button",{type:"button",className:"gem-calc-action-btn gem-calc-action-btn--clear",onClick:G,children:"נקה"})]}),L.jsx("div",{className:"gem-calc-keypad",role:"group","aria-label":"אותיות גימטריה",children:ly.map(({letter:I,value:O,note:N})=>L.jsxs("button",{type:"button",className:"gem-calc-key",onClick:()=>w(I,O),"aria-label":`${I} — ${O}${N?` (${N})`:""}`,children:[L.jsx("span",{className:"gem-calc-key-letter phrase-font",children:I}),L.jsx("span",{className:"gem-calc-key-val",children:O})]},I))}),e!==null&&c&&p!==null&&L.jsxs("p",{className:"gem-calc-lock-hint",role:"status",children:["הספרה למנעול: ",L.jsx("strong",{children:p})," — פתחו את לשונית «מנעול» (גלגל ",e+1,")"]}),a&&n>=s&&!_&&L.jsx("button",{type:"button",className:"btn-secondary gem-calc-hint-btn",onClick:()=>y(!0),children:"רמז: פירוק גימטריה"})]}),L.jsx("button",{type:"button",className:"gem-calc-tab",onClick:()=>d(I=>!I),"aria-expanded":f,"aria-controls":"gematria-calculator",children:L.jsx("span",{className:"gem-calc-tab-label",children:"גימטריה"})})]}),_&&a&&L.jsx(uy,{letters:a.letters,total:a.total,dialDigit:a.dialDigit,onComplete:()=>y(!1),dismissOnly:!0})]})}function Em(a){return-90+a*36}function Mm(a,e){const n=e*Math.PI/180;return{x:Math.cos(n)*a,y:Math.sin(n)*a}}function wm(a,e,n){const i=n.left+n.width/2,s=n.top+n.height/2;return Math.atan2(e-s,a-i)*180/Math.PI}function dy(a){let e=a;for(;e>180;)e-=360;for(;e<-180;)e+=360;return e}function hy({digits:a,rollingIndex:e,rollingDigit:n,unlocked:i,interactiveIndex:s=null,onDigitPick:l,wrongFlash:c=!1,preferOpen:p=!1}){const f=de.useId().replace(/:/g,""),[d,m]=de.useState(!1),[v,_]=de.useState(!1),[y,b]=de.useState(0),[R,x]=de.useState(0),[C,w]=de.useState(!1),S=de.useRef(0),G=de.useRef(0),I=de.useRef(null),O=de.useRef(null),N=s!==null&&!!l,re=N||e!==null,K=de.useCallback((M,z=0)=>{const A=S.current;let T=M-A;T>5&&(T-=10),T<-5&&(T+=10),T+=z*10,S.current=M,b(M),x(B=>{const q=B-T*36;return G.current=q,q})},[]),Q=de.useCallback(M=>{G.current=M,x(M);const z=(Math.round(-M/36)%10+10)%10;S.current=z,b(z)},[]),le=de.useCallback(M=>{K((S.current+M+10)%10)},[K]);de.useEffect(()=>{p&&m(!0)},[p,s]),de.useEffect(()=>{if(i){_(!0);const M=window.setTimeout(()=>_(!1),1200);return()=>window.clearTimeout(M)}},[i]),de.useEffect(()=>{e!==null&&n!==null&&K(n,n%2===0?1:-1)},[e,n,K]),de.useEffect(()=>{if(!N)return;const M=z=>{z.key==="ArrowLeft"||z.key==="ArrowUp"?(z.preventDefault(),le(-1)):z.key==="ArrowRight"||z.key==="ArrowDown"?(z.preventDefault(),le(1)):z.key==="Enter"&&(z.preventDefault(),l==null||l(S.current))};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[N,l,le]),de.useEffect(()=>{if(!C)return;const M=A=>{const T=O.current,B=I.current;if(!(T!=null&&T.active)||!B)return;const q=wm(A.clientX,A.clientY,B.getBoundingClientRect()),k=dy(q-T.lastAngle);Math.abs(k)>.4&&(T.moved=!0),T.lastAngle=q,Q(G.current+k)},z=()=>{const A=O.current;if(O.current=null,w(!1),!A)return;const T=(Math.round(-G.current/36)%10+10)%10;K(T)};return window.addEventListener("pointermove",M),window.addEventListener("pointerup",z),window.addEventListener("pointercancel",z),()=>{window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",z),window.removeEventListener("pointercancel",z)}},[C,Q,K]);const F=M=>{if(!N||M.target.closest(".round-dial-confirm"))return;M.preventDefault(),M.stopPropagation();const z=I.current;if(!z)return;const A=wm(M.clientX,M.clientY,z.getBoundingClientRect());O.current={active:!0,lastAngle:A,moved:!1},w(!0);try{z.setPointerCapture(M.pointerId)}catch{}},ie=()=>{N&&(l==null||l(S.current))},te=["combination-lock",i?"combination-lock--open":"",v?"combination-lock--flash":"",c?"combination-lock--wrong":"",N?"combination-lock--awaiting":""].filter(Boolean).join(" "),me=`brass-${f}`,Me=`hasp-${f}`,ae=`dark-${f}`,H=`grain-${f}`,$=a.filter(M=>M!==null).length,W=55.65;return L.jsxs("div",{className:`lock-drawer${d?" lock-drawer--open":""}`,"data-open":d?"true":"false",children:[L.jsx("button",{type:"button",className:"lock-drawer-tab",onClick:()=>m(M=>!M),"aria-expanded":d,"aria-controls":"combination-lock-panel",children:L.jsx("span",{className:"lock-drawer-tab-label",children:"מנעול"})}),L.jsxs("aside",{id:"combination-lock-panel",className:`lock-drawer-panel ${te}`,role:"dialog","aria-label":"מנעול קומבינציה עגול","aria-hidden":!d,children:[L.jsxs("header",{className:"lock-drawer-header",children:[L.jsx("h3",{className:"lock-drawer-title",children:"מנעול נחושת"}),L.jsx("button",{type:"button",className:"lock-drawer-close",onClick:()=>m(!1),"aria-label":"סגור מנעול",children:"✕"})]}),L.jsxs("div",{className:"lock-body",children:[L.jsxs("div",{className:"round-lock","aria-label":"מנעול קומבינציה — עשר ספרות",children:[L.jsxs("svg",{className:"round-lock-svg",viewBox:"0 0 220 248","aria-hidden":"true",children:[L.jsxs("defs",{children:[L.jsxs("linearGradient",{id:me,x1:"20%",y1:"0%",x2:"80%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#f0dfa0"}),L.jsx("stop",{offset:"22%",stopColor:"#d4af37"}),L.jsx("stop",{offset:"48%",stopColor:"#b07a2e"}),L.jsx("stop",{offset:"75%",stopColor:"#6e451c"}),L.jsx("stop",{offset:"100%",stopColor:"#3a2412"})]}),L.jsxs("linearGradient",{id:ae,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#2a1810"}),L.jsx("stop",{offset:"100%",stopColor:"#0c0805"})]}),L.jsxs("linearGradient",{id:Me,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#dcc896"}),L.jsx("stop",{offset:"45%",stopColor:"#8a7350"}),L.jsx("stop",{offset:"100%",stopColor:"#3e2a16"})]}),L.jsxs("filter",{id:H,x:"-8%",y:"-8%",width:"116%",height:"116%",children:[L.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.7",numOctaves:"2",result:"n"}),L.jsx("feColorMatrix",{in:"n",type:"saturate",values:"0",result:"g"}),L.jsx("feComponentTransfer",{in:"g",result:"soft",children:L.jsx("feFuncA",{type:"linear",slope:"0.35"})}),L.jsx("feBlend",{in:"SourceGraphic",in2:"soft",mode:"overlay"})]})]}),L.jsx("path",{d:"M78 78 V48 C78 28 96 16 110 16 C124 16 142 28 142 48 V78",fill:"none",stroke:`url(#${Me})`,strokeWidth:"14",strokeLinecap:"round",filter:`url(#${H})`}),L.jsx("path",{d:"M78 78 V48 C78 28 96 16 110 16 C124 16 142 28 142 48 V78",fill:"none",stroke:"#2a1810",strokeWidth:"3",strokeLinecap:"round",opacity:"0.4"}),L.jsxs("g",{transform:"translate(0, 28)",children:[L.jsx("circle",{cx:"110",cy:"110",r:"106",fill:`url(#${me})`,filter:`url(#${H})`}),L.jsx("circle",{cx:"110",cy:"110",r:"102",fill:"none",stroke:"#f0dfa0",strokeWidth:"1.4",opacity:"0.55"}),L.jsx("circle",{cx:"110",cy:"110",r:"96",fill:"none",stroke:"#3e2718",strokeWidth:"1.2",opacity:"0.7"}),L.jsx("circle",{cx:"110",cy:"110",r:"70",fill:`url(#${ae})`}),L.jsx("circle",{cx:"110",cy:"110",r:"68",fill:"none",stroke:"#6b4a22",strokeWidth:"1.2",opacity:"0.8"}),Array.from({length:40},(M,z)=>{const A=(z*9-90)*Math.PI/180,T=z%4===0?86:90;return L.jsx("line",{x1:110+Math.cos(A)*T,y1:110+Math.sin(A)*T,x2:110+Math.cos(A)*94,y2:110+Math.sin(A)*94,stroke:"#3e2718",strokeWidth:z%4===0?1.6:.8,opacity:"0.55"},z)}),[45,135,225,315].map(M=>{const z=M*Math.PI/180,A=110+Math.cos(z)*100,T=110+Math.sin(z)*100;return L.jsxs("g",{children:[L.jsx("circle",{cx:A,cy:T,r:"3.2",fill:"#2a1810",opacity:"0.7"}),L.jsx("circle",{cx:A,cy:T,r:"2",fill:"#b8924a"})]},M)})]})]}),L.jsx("div",{className:"round-lock-slots",style:{top:`${W}%`},children:a.map((M,z)=>{const A=Mm(40,Em(z)),T=e===z&&n!==null,B=s===z&&!!l,q=T?n:M;return L.jsxs("button",{type:"button",className:["round-slot",M!==null?"round-slot--set":"",B?"round-slot--interactive":"",T?"round-slot--rolling":""].filter(Boolean).join(" "),style:{left:`${50+A.x}%`,top:`${50+A.y}%`},disabled:!B,onClick:()=>{B&&ie()},"aria-label":B?`גלגל ${z+1} — פעיל`:M!==null?`גלגל ${z+1}: ${M}`:`גלגל ${z+1}: ריק`,children:[L.jsx("span",{className:"round-slot-index",children:z+1}),L.jsx("span",{className:"round-slot-digit",children:q===null?"·":q})]},z)})}),L.jsxs("div",{ref:I,className:`round-dial-wrap${N?" round-dial-wrap--interactive":""}${C?" round-dial-wrap--dragging":""}`,style:{top:`${W}%`},onPointerDown:F,children:[L.jsx("div",{className:"round-dial-marker","aria-hidden":"true"}),L.jsx("div",{className:`round-dial${N?" round-dial--live":""}${e!==null||C?" round-dial--spinning":""}`,style:{transform:`rotate(${R}deg)`,transition:C?"none":void 0},"aria-hidden":!re,children:L.jsx("div",{className:"round-dial-face",children:Array.from({length:10},(M,z)=>{const A=Mm(38,Em(z));return L.jsx("span",{className:`round-dial-tick${y===z?" round-dial-tick--active":""}`,style:{left:`${50+A.x}%`,top:`${50+A.y}%`,transform:`translate(-50%, -50%) rotate(${-R}deg)`},"aria-hidden":"true",children:z},z)})})}),L.jsxs("div",{className:"round-dial-hub",children:[L.jsx("span",{className:"round-dial-value","aria-live":"polite",children:y}),N&&L.jsx("button",{type:"button",className:"round-dial-confirm",onPointerDown:M=>{M.stopPropagation(),M.preventDefault()},onClick:M=>{M.stopPropagation(),ie()},children:"הזן"})]})]})]}),N&&L.jsxs("div",{className:"round-dial-controls",children:[L.jsx("button",{type:"button",className:"round-nudge",onClick:()=>le(-1),"aria-label":"סובבו אחורה",children:"−"}),L.jsxs("p",{className:"round-dial-hint","aria-hidden":"true",children:["סובבו · ",y]}),L.jsx("button",{type:"button",className:"round-nudge",onClick:()=>le(1),"aria-label":"סובבו קדימה",children:"+"})]})]}),L.jsxs("p",{className:"lock-progress","aria-hidden":"true",children:[$,"/10"]}),N&&L.jsxs("p",{className:"lock-manual-prompt",role:"status",children:["גלגל ",s+1," — סובבו את החוגה ואז לחצו הזן"]}),c&&L.jsx("p",{className:"lock-wrong-msg",role:"alert",children:"לא נכון — בדקו במחשבון והזינו שוב"}),i&&L.jsx("p",{className:"lock-open-msg",role:"status",children:"המנעול נפתח!"})]})]})}const Vs=10,fy=["שלמא","דיו","נוצה","קלף","מגילתא","פתורא","ביתא","יומא","נהורא","אורייתא","חכימא","שמע","גמר","כתב","קרי","עייל","נפק","טבא","רבא","מאן","מאי","ליכא","אית","הכא","תמן","ברא","אבוה","אימא","מלכא","ארעא","שמיא","נורא","נהרא","טורא","שוקא","עמודא","ערסא","חמרא","נהמא","כלבא","גברא","פתגמא","מילתא","קולמוס","ספסלא","תרעא","שרגא","מיא","ספרא","רבי","תלמידא","ארון","חלון"];function py(){const a=[];for(const e of Xi)a.push(e.answer,e.object,...e.options);return a}function my(){const a=new Set;for(const e of[...py(),...fy]){const n=Nl(e);n.length>=2&&a.add(n)}return a}const gy=my(),vy=["שרגא","מיא","ספרא","רבי","תלמידא","תרעא","קולמוס","ספסלא","שלמא","חלון","ארון","פתורא","דיו","נוצה","ביתא","יומא"],_y=[...vy,"קלף","מגילתא","נהורא","טבא","אורייתא","תלמידא","גמר","כתב","שמיא","ארעא","מילתא","פתגמא"].filter((a,e,n)=>n.indexOf(a)===e);function xy(a){const n=x_(a).map(Nl).filter(c=>c.length>=2),i=[],s=new Set;for(const c of n)gy.has(c)&&(i.push(c),s.add(c));const l=i.length;return{matchedCount:l,uniqueMatched:[...s],tokens:n,goal:Vs,complete:l>=Vs}}function yy(){return new URLSearchParams(window.location.search).get("debug")==="1"}function Tm(a,e,n,i){const[s,l,c]=Xa(n,i);a.position.set(-s*yr,-l*yr,-c*yr),e.target.set(0,0,0),e.update()}function Sy({onScrollClick:a,writingOpen:e,debug:n}){const i=de.useRef(null),[s,l]=de.useState(!1),c=de.useRef({active:!1,startX:0,scrollLeft:0,moved:!1}),p=v=>{if(v.target.closest(".inner-scroll-hotspot"))return;const _=i.current;_&&(c.current={active:!0,startX:v.clientX,scrollLeft:_.scrollLeft,moved:!1},_.setPointerCapture(v.pointerId))},f=v=>{if(!c.current.active||!i.current)return;const _=v.clientX-c.current.startX;Math.abs(_)>6&&(c.current.moved=!0),i.current.scrollLeft=c.current.scrollLeft-_},d=v=>{var _;c.current.active=!1,(_=i.current)==null||_.releasePointerCapture(v.pointerId)},m=pr.radiusPx*2;return L.jsx("div",{ref:i,className:"panorama-viewport panorama-viewport--flat",onPointerDown:p,onPointerMove:f,onPointerUp:d,onPointerCancel:d,"aria-label":"החדר הסודי — גררו לצדדים (מצב גיבוי)",children:L.jsxs("div",{className:"panorama-inner",children:[L.jsxs("div",{className:`panorama-bg ${s?"panorama-bg--fallback":""}`,children:[!s&&L.jsx("img",{src:Nm,alt:"",className:"panorama-img",onError:()=>l(!0),draggable:!1}),s&&L.jsx("div",{className:"panorama-fallback-art","aria-hidden":"true"})]}),!e&&L.jsxs("button",{type:"button",className:["inner-scroll-hotspot","inner-scroll-hotspot--flat",n?"inner-scroll-hotspot--debug":""].filter(Boolean).join(" "),style:{left:`${pr.flatX}%`,top:`${pr.flatY}%`,width:m,height:m},onPointerDown:v=>v.stopPropagation(),onClick:v=>{v.stopPropagation(),a()},"aria-label":"פתחו את הקלף לכתיבת מכתב",children:[L.jsx("span",{className:"inner-scroll-hotspot__glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-scroll-hotspot__label",children:"הקלף · לחצו לכתיבה"})]})]})})}function Ey({onScrollClick:a,writingOpen:e,onWebGLFail:n,debug:i}){const s=de.useRef(null),l=de.useRef(null),c=de.useRef(null),p=de.useRef(null),f=de.useRef(null),d=de.useRef(a),m=de.useRef(e),[v,_]=de.useState(!1),[y,b]=de.useState(!1);d.current=a,m.current=e,de.useEffect(()=>{const x=s.current,C=l.current;if(!x||!C)return;let w;try{w=new Rd({canvas:C,antialias:!0,alpha:!1})}catch{n();return}const S=new og,G=new Dn(75,1,.1,1100);p.current=G;const I=new cg(G,C);f.current=I,I.enableZoom=!1,I.enablePan=!1,I.enableDamping=!0,I.minDistance=yr,I.maxDistance=yr,I.target.set(0,0,0),Pl(G,I);const O=T=>{T.cancelable&&T.preventDefault()};C.addEventListener("touchmove",O,{passive:!1}),Tm(G,I,pr.yaw,pr.pitch);const N=new zl(500,64,48);N.scale(-1,1,1);let re=null,K=!1;new lg().load(Nm,T=>{if(K){T.dispose();return}T.colorSpace=zt,re=new jn(N,new kl({map:T})),S.add(re),Tm(G,I,pr.yaw,pr.pitch),_(!0)},void 0,()=>{K||n()});const le=()=>{const T=x.clientWidth,B=x.clientHeight;T<2||B<2||(Pl(G,I),G.aspect=T/B,G.updateProjectionMatrix(),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(T,B,!1))},F=new ResizeObserver(le);F.observe(x),le();const ie=new X,[te,me,Me]=Xa(pr.yaw,pr.pitch),ae=()=>{const T=x.clientWidth,B=x.clientHeight;if(T<2||B<2)return;const q=c.current;if(!q)return;ie.set(te,me,Me).project(G);const k=ie.z<1&&ie.z>-1;q.style.left=`${(ie.x*.5+.5)*T}px`,q.style.top=`${(-ie.y*.5+.5)*B}px`,q.style.visibility=k&&!m.current?"visible":"hidden",q.style.pointerEvents=k&&!m.current?"auto":"none"},H={x:0,y:0,down:!1,moved:!1},$=T=>{m.current||(H.down=!0,H.moved=!1,H.x=T.clientX,H.y=T.clientY)},W=T=>{H.down&&Math.hypot(T.clientX-H.x,T.clientY-H.y)>10&&(H.moved=!0)},M=T=>{if(!H.down||(H.down=!1,H.moved||m.current))return;const B=c.current;if(!B||B.style.visibility==="hidden")return;const q=B.getBoundingClientRect(),k=q.left+q.width/2,Z=q.top+q.height/2,ce=Math.max(q.width,q.height)*.58;Math.hypot(T.clientX-k,T.clientY-Z)<=ce&&d.current()};C.addEventListener("pointerdown",$),C.addEventListener("pointermove",W),C.addEventListener("pointerup",M),C.addEventListener("pointercancel",M);let z=0;const A=()=>{z=requestAnimationFrame(A),I.update(),w.render(S,G),ae()};return A(),()=>{var T;if(K=!0,cancelAnimationFrame(z),F.disconnect(),C.removeEventListener("touchmove",O),C.removeEventListener("pointerdown",$),C.removeEventListener("pointermove",W),C.removeEventListener("pointerup",M),C.removeEventListener("pointercancel",M),I.dispose(),N.dispose(),re){const B=re.material;(T=B.map)==null||T.dispose(),B.dispose()}w.dispose(),p.current=null,f.current=null}},[n]),de.useEffect(()=>{const x=f.current;x&&(x.enableRotate=!e&&!y)},[e,y]);const R=pr.radiusPx*2;return L.jsxs("div",{ref:s,className:"panorama-viewport panorama-viewport--360",children:[L.jsx("canvas",{ref:l,className:"panorama-canvas","aria-hidden":"true"}),!v&&L.jsx("div",{className:"panorama-loading",children:"טוען פנורמה…"}),L.jsx("div",{className:`panorama-hotspots-layer panorama-hotspots-layer--inner${y?" panorama-hotspots-layer--hover":""}`,children:L.jsxs("button",{type:"button",ref:c,className:["inner-scroll-hotspot",i?"inner-scroll-hotspot--debug":""].filter(Boolean).join(" "),style:{width:R,height:R},onPointerDown:x=>{x.stopPropagation(),b(!0)},onClick:x=>{x.stopPropagation(),a()},onPointerEnter:()=>b(!0),onPointerLeave:()=>b(!1),"aria-label":"פתחו את הקלף לכתיבת מכתב",children:[L.jsx("span",{className:"inner-scroll-hotspot__glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-scroll-hotspot__label",children:"הקלף · לחצו לכתיבה"})]})})]})}function My({onScrollClick:a,writingOpen:e}){const[n,i]=de.useState(!1),s=de.useCallback(()=>i(!0),[]),l=yy();return L.jsx("div",{className:`panorama-shell inner-room__panorama-shell${e?" inner-room__panorama-shell--writing":""}`,children:n?L.jsx(Sy,{onScrollClick:a,writingOpen:e,debug:l}):L.jsx(Ey,{onScrollClick:a,writingOpen:e,onWebGLFail:s,debug:l})})}const wy=["שלמא עליכון תלמידיא חכימיא","מן בית מדרשא דאורייתא כתיבנא","בקלף דיו ונוצה — פתגמא טבא","שמעו וגמרו · כתבו וקראו","נהורא רבא בחדרא זוטא","ונפקנא משלמא · אמן"];function Ty({onComplete:a}){const[e,n]=de.useState(""),[i,s]=de.useState(!1),[l,c]=de.useState(!1),[p,f]=de.useState(!1),[d,m]=de.useState(!1),v=de.useRef(null),_=de.useRef(!1),y=de.useMemo(()=>xy(e),[e]),b=Math.min(y.matchedCount,Vs),R=de.useMemo(()=>new Set(y.uniqueMatched),[y.uniqueMatched]);de.useEffect(()=>{const w=window.setTimeout(()=>c(!0),40);return()=>window.clearTimeout(w)},[]),de.useEffect(()=>{if(!p){m(!1);return}const w=window.requestAnimationFrame(()=>m(!0)),S=window.setTimeout(()=>{var I;return(I=v.current)==null?void 0:I.focus()},420),G=I=>{I.key==="Escape"&&!i&&f(!1)};return window.addEventListener("keydown",G),()=>{window.cancelAnimationFrame(w),window.clearTimeout(S),window.removeEventListener("keydown",G)}},[p,i]),de.useEffect(()=>{if(!y.complete||_.current)return;_.current=!0,s(!0),f(!0);const w=window.setTimeout(()=>a(),3200);return()=>window.clearTimeout(w)},[y.complete,a]);const x=de.useCallback(w=>{if(i)return;const S=v.current,G=(S==null?void 0:S.selectionStart)??e.length,I=(S==null?void 0:S.selectionEnd)??e.length,O=e.slice(0,G),N=e.slice(I),re=O.length>0&&!/\s$/.test(O),K=N.length>0&&!/^\s/.test(N),Q=`${re?" ":""}${w}${K?" ":""}`,le=O+Q+N;n(le),window.requestAnimationFrame(()=>{const F=v.current;if(!F)return;const ie=O.length+Q.length-(K?1:0);F.focus(),F.setSelectionRange(ie,ie)})},[i,e]),C=()=>{i||f(!1)};return L.jsxs("div",{className:["inner-room","inner-room--360",l?"inner-room--entered":"",p?"inner-room--writing":""].filter(Boolean).join(" "),children:[L.jsxs("header",{className:"inner-room__header",children:[L.jsx("p",{className:"inner-room__eyebrow",children:"הצופן הארמי"}),L.jsx("h1",{children:"החדר הסודי"}),L.jsx("p",{className:"inner-room__lead",children:"חדר הכתיבה"})]}),L.jsx(My,{writingOpen:p,onScrollClick:()=>f(!0)}),p&&L.jsxs("div",{className:`inner-room__write-stage${d?" inner-room__write-stage--ready":""}`,role:"dialog","aria-modal":"true","aria-labelledby":"inner-letter-title",children:[L.jsx("button",{type:"button",className:"inner-room__write-dim","aria-label":"הניחו את הקלף וחזרו לחדר",onClick:C,disabled:i}),L.jsxs("div",{className:"inner-room__write-layout",children:[L.jsxs("div",{className:"inner-room__sheet",children:[L.jsxs("div",{className:"inner-room__sheet-top",children:[L.jsx("h2",{id:"inner-letter-title",children:"הקלף"}),!i&&L.jsx("button",{type:"button",className:"btn-secondary inner-room__letter-close",onClick:C,children:"הניחו את הקלף"})]}),L.jsx("p",{className:"inner-room__sheet-lead",children:i?"המכתב נחתם בדיו על הקלף":"השתמשו במילים מאוצר המילים — כעשר מילים, והמכתב יישלח!"}),L.jsxs("div",{className:"inner-room__sheet-body",children:[L.jsx("label",{className:"visually-hidden",htmlFor:"inner-letter",children:"כתיבת מכתב על הקלף"}),L.jsxs("div",{className:"inner-room__parchment-wrap",children:[L.jsx("textarea",{id:"inner-letter",ref:v,className:`inner-room__parchment phrase-font${i?" inner-room__parchment--sealed":""}`,dir:"rtl",lang:"he",rows:7,value:e,onChange:w=>n(w.target.value),placeholder:"כתבו כאן מכתב בארמית…",spellCheck:!1,autoComplete:"off",disabled:i,"aria-hidden":i}),i&&L.jsx("div",{className:"inner-room__script-fill","aria-hidden":"true",children:wy.map((w,S)=>L.jsx("p",{className:`inner-room__script-line${S>=4?" inner-room__script-line--dim":""}`,style:{animationDelay:`${.12+S*.18}s`},children:w},w))})]}),L.jsxs("div",{className:"inner-room__inkwell","aria-hidden":"true",children:[L.jsx("span",{className:"inner-room__ink-pot"}),L.jsx("span",{className:"inner-room__quill"}),L.jsx("span",{className:"inner-room__ink-label",children:"דיו ונוצה"})]})]}),L.jsx("div",{className:"inner-room__hud",role:"status","aria-live":"polite",children:L.jsxs("div",{className:"inner-room__progress",children:[L.jsx("div",{className:"inner-room__progress-bar","aria-hidden":"true",children:L.jsx("span",{style:{width:`${b/Vs*100}%`}})}),L.jsx("p",{className:"inner-room__progress-text",children:i?"הקלף מלא!":`${b}/${Vs} מילים מהאוצר`})]})})]}),!i&&L.jsxs("aside",{className:"inner-room__vocab","aria-label":"אוצר מילים",children:[L.jsx("h3",{className:"inner-room__vocab-title",children:"אוצר מילים"}),L.jsx("p",{className:"inner-room__vocab-lead",children:"לחצו על מילה כדי להוסיף אותה למכתב"}),L.jsx("div",{className:"inner-room__vocab-chips",children:_y.map(w=>{const S=R.has(Nl(w));return L.jsx("button",{type:"button",className:`inner-room__vocab-chip phrase-font${S?" inner-room__vocab-chip--used":""}`,onClick:()=>x(w),children:w},w)})})]})]})]}),i&&L.jsx("div",{className:"inner-room__celebrate pop-in",role:"status",children:L.jsxs("div",{className:"inner-room__celebrate-card",children:[L.jsx("p",{children:"המכתב נשלח מהחדר הסודי!"}),L.jsx("p",{className:"inner-room__celebrate-sub",children:"שלמא — פענחתם את הצופן הארמי"})]})})]})}function Ry({onRestart:a}){const e=Xs();return L.jsx("div",{className:"victory-screen",children:L.jsxs("div",{className:"victory-card",children:[L.jsx("div",{className:"victory-confetti","aria-hidden":"true",children:Array.from({length:24}).map((n,i)=>L.jsx("span",{style:{"--i":i}},i))}),L.jsx("h1",{children:"פענחתם את הצופן הארמי!"}),L.jsx("p",{className:"victory-sub",children:e?"המכתב נשלח · המדליה מחכה לכם במפת המסע":"המכתב נשלח · שלמא לכולכון"}),!e&&L.jsx("button",{type:"button",className:"btn-primary",onClick:a,children:"שחקו שוב"}),e&&L.jsx("p",{className:"victory-sub",style:{marginTop:12,fontSize:15},children:"אפשר לסגור ולחזור למפה…"})]})})}function Ay({room:a,onOuter:e,onInner:n}){return L.jsxs("nav",{className:"room-travel","aria-label":"מעבר בין חדרים (בדיקות)",children:[L.jsx("span",{className:"room-travel__label",children:"מעבר לבדיקה"}),L.jsxs("div",{className:"room-travel__btns",children:[L.jsx("button",{type:"button",className:`room-travel__btn${a==="outer"?" room-travel__btn--active":""}`,onClick:e,"aria-current":a==="outer"?"page":void 0,children:"החדר החיצוני"}),L.jsx("button",{type:"button",className:`room-travel__btn${a==="inner"?" room-travel__btn--active":""}`,onClick:n,"aria-current":a==="inner"?"page":void 0,children:"החדר הפנימי"})]})]})}const by={explore:a=>a?a.includes("ארון")?"סובבו את המבט בחדר. חפשו את הארון הזוהר — כשתמצאו אותו, לחצו עליו כדי לפתוח את החידה.":`סובבו את המבט בחדר. עכשיו חפשו את «${a}» — כשתמצאו אותו, לחצו עליו כדי לפתוח את החידה.`:"סובבו את המבט בחדר. חפשו את החפץ הבא — כשתמצאו אותו, לחצו עליו כדי לפתוח את החידה.",riddle:()=>"מצאתם את החפץ! ענו על החידה — בחרו את המילה הנכונה מהאפשרויות.","lock-opening":()=>"כל הספרות נכונות — המנעול נפתח! דלת לחדר סודי נפתחת… מה מחכה בפנים?","inner-room":()=>"אתם בחדר הסודי. לחצו על הקלף שעל השולחן, ואז כתבו מכתב קצר בעזרת אוצר המילים."};function Rm({phase:a,objectName:e,gematriaHelp:n=null}){const i=a==="gematria"&&n?w_(n):a==="gematria"?"יפה! חשבו את הגימטרייה בלשונית שבצד, פתחו את המנעול, סובבו את החוגה לספרה הנכונה ולחצו «הזן».":by[a](e);return L.jsx("p",{className:`room-guidance${n!=null&&n.mistake?" room-guidance--hint":""}${n!=null&&n.elevated?" room-guidance--elevated":""}`,role:"status","aria-live":"polite",children:i})}function Cy({current:a,total:e=10}){const n=Math.min(Math.max(a,1),e);return L.jsxs("div",{className:"station-progress",role:"status","aria-live":"polite","aria-label":`תחנה ${n} מתוך ${e}`,children:[L.jsx("span",{className:"station-progress__label",children:"תחנה"}),L.jsxs("span",{className:"station-progress__count",children:[n,"/",e]})]})}function Ly({visible:a,onAccept:e,onDismiss:n}){return a?L.jsxs("div",{className:"illuminate-offer",role:"dialog","aria-label":"רמז להארת החפץ",children:[L.jsx("p",{className:"illuminate-offer__text",children:"לא מוצאים את החפץ? אפשר להאיר אותו בשבילכם"}),L.jsxs("div",{className:"illuminate-offer__actions",children:[L.jsx("button",{type:"button",className:"btn-primary illuminate-offer__accept",onClick:e,children:"האירו לי את החפץ"}),L.jsx("button",{type:"button",className:"btn-secondary illuminate-offer__dismiss",onClick:n,children:"עוד אחפש"})]})]}):null}const Py=6e4,Ny=28e3,Dy=22e3,Uy=12e3,Iy=1e4;function Oy(){return _d()?"inner-room":"explore"}function ky({onRestart:a}){const[e,n]=de.useState(g_),[i,s]=de.useState(Oy),[l,c]=de.useState(null),[p,f]=de.useState(null),[d,m]=de.useState(0),[v,_]=de.useState(!1),[y,b]=de.useState(!1),[R,x]=de.useState(!1),[C,w]=de.useState(!1),[S,G]=de.useState("calc"),[I,O]=de.useState(np),[N,re]=de.useState(!1),[K,Q]=de.useState(0),[le,F]=de.useState(!1),[ie,te]=de.useState(!1),me=de.useRef(0),Me=de.useRef(null),ae=de.useRef(null),H=de.useRef(null),$=v_(),W=!Xs(),M=Xi[e.currentRiddleIndex],z=m_(e.currentRiddleIndex),A=Math.min(e.currentRiddleIndex+1,10),T=N||e.currentRiddleIndex<y_;de.useEffect(()=>{b(!1),x(!1),w(!1),me.current=0},[e.currentRiddleIndex]),de.useEffect(()=>{i==="gematria"&&(G("calc"),O(np),F(!1),te(!1),m(0),_(!1),Me.current=Date.now(),ae.current=null,H.current=null)},[i,e.currentRiddleIndex]),de.useEffect(()=>{if(i!=="explore"||e.lockUnlocked||y||C)return;const Pe=Date.now(),Be=me.current,Ue=Math.max(0,(N?Ny:Py)-Be),Xe=window.setTimeout(()=>x(!0),Ue);return()=>{me.current=Be+(Date.now()-Pe),window.clearTimeout(Xe)}},[i,e.currentRiddleIndex,e.lockUnlocked,y,C,N]);const B=de.useCallback(Pe=>{O(Pe)},[]);de.useEffect(()=>{i!=="gematria"||!M||(Tc(I,M)?(G("lock"),F(!1),te(!1),ae.current=null):S==="lock"&&G("calc"))},[i,M,I,S]),de.useEffect(()=>{if(i!=="gematria"||!M)return;const Pe=()=>{const De=Me.current??Date.now(),Ue=Date.now()-De,Xe=N?Uy:Dy;I.letterCount===0&&Ue>=Xe?F(!0):I.letterCount>0&&F(!1),I.finalDigit!==null&&I.finalDigit!==M.dialDigit&&!Tc(I,M)?ae.current===null?ae.current=Date.now():Date.now()-ae.current>=Iy&&te(!0):(ae.current=null,te(!1)),rp({lockWrongAttempts:d,calcMistakeHits:K,msOnGematria:Ue,elevatedAlready:N})&&re(!0)};Pe();const Be=window.setInterval(Pe,1e3);return()=>window.clearInterval(Be)},[i,M,I,N,d,K]);const q=de.useMemo(()=>i!=="gematria"||!M?null:v?"wrong-lock":M_(I,M,{emptyStuck:le,wrongDigitStuck:ie}),[i,M,I,le,ie,v]);de.useEffect(()=>{if(!q||q==="wrong-lock")return;const Pe=`${e.currentRiddleIndex}:${q}:${I.letterString}`;H.current!==Pe&&(H.current=Pe,Q(Be=>Be+1))},[q,I.letterString,e.currentRiddleIndex]);const k=de.useMemo(()=>i!=="gematria"||!M?null:{step:S,stationIndex:e.currentRiddleIndex,explicit:T,dialDigit:M.dialDigit,answerWord:S_(M),mistake:q,elevated:N},[i,M,S,e.currentRiddleIndex,T,q,N]),Z=e.currentRiddleIndex===0&&e.solvedCount===0&&!e.lockUnlocked,ce=y?"boosted":Z?"idle":"none",fe=de.useCallback(()=>{s("inner-room")},[]),Ee=de.useCallback(()=>{s("explore")},[]),Re=()=>{e.lockUnlocked||(x(!1),s("riddle"))},Ne=()=>{m(0),_(!1),s("gematria")},P=de.useCallback(()=>{const Pe=Xi[e.currentRiddleIndex],Be=e.currentRiddleIndex;c(Be),f(Pe.dialDigit),m(0),_(!1),window.setTimeout(()=>{n(De=>{const Ue=[...De.dialDigits];Ue[Be]=Pe.dialDigit;const Xe=De.solvedCount+1,Mt=Xe>=10;return{currentRiddleIndex:Mt?De.currentRiddleIndex:De.currentRiddleIndex+1,solvedCount:Xe,dialDigits:Ue,lockUnlocked:Mt}}),c(null),f(null),Be+1>=10?(s("lock-opening"),window.setTimeout(()=>s("inner-room"),1800)):s("explore")},800)},[e.currentRiddleIndex]),we=de.useCallback(Pe=>{const Be=Xi[e.currentRiddleIndex];return Pe===Be.dialDigit?(P(),!0):(m(De=>{const Ue=De+1;return rp({lockWrongAttempts:Ue,calcMistakeHits:K,msOnGematria:0,elevatedAlready:N})&&re(!0),Ue}),_(!0),window.setTimeout(()=>_(!1),1600),!1)},[e.currentRiddleIndex,P,K,N]),he=de.useCallback(()=>{n_(),s("victory")},[]);if(i==="victory")return L.jsx(Ry,{onRestart:a});const ue=$?L.jsx(Ay,{room:i==="inner-room"?"inner":"outer",onOuter:Ee,onInner:fe}):null;if(i==="inner-room")return L.jsxs("div",{className:"escape-room escape-room--inner",children:[ue,W&&L.jsx("div",{className:"room-fs-bar","aria-label":"פקדי תצוגה",children:L.jsx(id,{})}),L.jsx(Rm,{phase:"inner-room"}),L.jsx(Ty,{onComplete:he})]});const ve=i==="gematria",Ae=ve&&M?Tc(I,M):!1,be=i==="explore"||i==="riddle"||i==="gematria"||i==="lock-opening"?i:"explore";return L.jsxs("div",{className:`escape-room${ve?" escape-room--gematria":""}`,children:[ue,W&&L.jsx("div",{className:"room-fs-bar","aria-label":"פקדי תצוגה",children:L.jsx(id,{})}),L.jsx(Rm,{phase:be,objectName:i==="explore"?z:null,gematriaHelp:k}),L.jsx(sy,{riddles:Xi,activeIndex:e.currentRiddleIndex,solvedCount:e.solvedCount,onHotspotClick:()=>Re(),lockUnlocked:e.lockUnlocked,onEnterInner:e.lockUnlocked?fe:void 0,activeGlowMode:!e.lockUnlocked&&i==="explore"?ce:"none"}),!e.lockUnlocked&&L.jsx(Cy,{current:A,total:10}),L.jsx(Ly,{visible:R&&i==="explore"&&!y,onAccept:()=>{b(!0),x(!1)},onDismiss:()=>{x(!1),w(!0)}}),L.jsx(hy,{digits:e.dialDigits,rollingIndex:l,rollingDigit:p,unlocked:e.lockUnlocked&&i==="lock-opening",interactiveIndex:ve?e.currentRiddleIndex:null,onDigitPick:ve?we:void 0,wrongFlash:v,preferOpen:ve&&S==="lock"}),L.jsx(cy,{riddle:ve?M:null,lockIndex:ve?e.currentRiddleIndex:null,lockWrongAttempts:ve?d:0,preferOpen:ve&&S==="calc",hintAfterWrongAttempts:N||T?1:2,onCalcChange:ve?B:void 0,readyForLock:Ae,lockDigitHint:Ae&&M?M.dialDigit:null}),i==="riddle"&&M&&L.jsx(oy,{riddle:M,onCorrect:Ne,onClose:()=>s("explore")})]})}function Fy(){return _d()?"room":"landing"}function zy(){const[a,e]=de.useState(Fy),[n,i]=de.useState(0);de.useEffect(()=>(r_(),Xs()&&(document.documentElement.classList.add("escape-embedded"),document.body.classList.add("escape-embedded")),()=>{document.documentElement.classList.remove("escape-embedded"),document.body.classList.remove("escape-embedded")}),[]),de.useEffect(()=>{const l=a==="room";return document.documentElement.classList.toggle("escape-room-live",l),document.body.classList.toggle("escape-room-live",l),()=>{document.documentElement.classList.remove("escape-room-live"),document.body.classList.remove("escape-room-live")}},[a]);const s=()=>{i(l=>l+1),e(_d()?"room":"landing")};return a==="landing"?L.jsx(d_,{onStart:()=>e("room")}):L.jsx(ky,{onRestart:s},n)}Qv.createRoot(document.getElementById("root")).render(L.jsx(de.StrictMode,{children:L.jsx(zy,{})}));
