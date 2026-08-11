(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var yc={exports:{}},Us={},Sc={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Yv(){if(qf)return st;qf=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,T={};function x(w,F,b){this.props=w,this.context=F,this.refs=T,this.updater=b||y}x.prototype.isReactComponent={},x.prototype.setState=function(w,F){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,F,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function C(){}C.prototype=x.prototype;function M(w,F,b){this.props=w,this.context=F,this.refs=T,this.updater=b||y}var S=M.prototype=new C;S.constructor=M,R(S,x.prototype),S.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,U={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function ae(w,F,b){var A,O={},X=null,z=null;if(F!=null)for(A in F.ref!==void 0&&(z=F.ref),F.key!==void 0&&(X=""+F.key),F)k.call(F,A)&&!N.hasOwnProperty(A)&&(O[A]=F[A]);var Q=arguments.length-2;if(Q===1)O.children=b;else if(1<Q){for(var ce=Array(Q),oe=0;oe<Q;oe++)ce[oe]=arguments[oe+2];O.children=ce}if(w&&w.defaultProps)for(A in Q=w.defaultProps,Q)O[A]===void 0&&(O[A]=Q[A]);return{$$typeof:a,type:w,key:X,ref:z,props:O,_owner:U.current}}function K(w,F){return{$$typeof:a,type:w.type,key:F,ref:w.ref,props:w.props,_owner:w._owner}}function ne(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function pe(w){var F={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(b){return F[b]})}var B=/\/+/g;function ee(w,F){return typeof w=="object"&&w!==null&&w.key!=null?pe(""+w.key):F.toString(36)}function Z(w,F,b,A,O){var X=typeof w;(X==="undefined"||X==="boolean")&&(w=null);var z=!1;if(w===null)z=!0;else switch(X){case"string":case"number":z=!0;break;case"object":switch(w.$$typeof){case a:case e:z=!0}}if(z)return z=w,O=O(z),w=A===""?"."+ee(z,0):A,j(O)?(b="",w!=null&&(b=w.replace(B,"$&/")+"/"),Z(O,F,b,"",function(oe){return oe})):O!=null&&(ne(O)&&(O=K(O,b+(!O.key||z&&z.key===O.key?"":(""+O.key).replace(B,"$&/")+"/")+w)),F.push(O)),1;if(z=0,A=A===""?".":A+":",j(w))for(var Q=0;Q<w.length;Q++){X=w[Q];var ce=A+ee(X,Q);z+=Z(X,F,b,ce,O)}else if(ce=_(w),typeof ce=="function")for(w=ce.call(w),Q=0;!(X=w.next()).done;)X=X.value,ce=A+ee(X,Q++),z+=Z(X,F,b,ce,O);else if(X==="object")throw F=String(w),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return z}function me(w,F,b){if(w==null)return w;var A=[],O=0;return Z(w,A,"","",function(X){return F.call(b,X,O++)}),A}function Me(w){if(w._status===-1){var F=w._result;F=F(),F.then(function(b){(w._status===0||w._status===-1)&&(w._status=1,w._result=b)},function(b){(w._status===0||w._status===-1)&&(w._status=2,w._result=b)}),w._status===-1&&(w._status=0,w._result=F)}if(w._status===1)return w._result.default;throw w._result}var se={current:null},V={transition:null},$={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:V,ReactCurrentOwner:U};function H(){throw Error("act(...) is not supported in production builds of React.")}return st.Children={map:me,forEach:function(w,F,b){me(w,function(){F.apply(this,arguments)},b)},count:function(w){var F=0;return me(w,function(){F++}),F},toArray:function(w){return me(w,function(F){return F})||[]},only:function(w){if(!ne(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},st.Component=x,st.Fragment=n,st.Profiler=s,st.PureComponent=M,st.StrictMode=i,st.Suspense=f,st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,st.act=H,st.cloneElement=function(w,F,b){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var A=R({},w.props),O=w.key,X=w.ref,z=w._owner;if(F!=null){if(F.ref!==void 0&&(X=F.ref,z=U.current),F.key!==void 0&&(O=""+F.key),w.type&&w.type.defaultProps)var Q=w.type.defaultProps;for(ce in F)k.call(F,ce)&&!N.hasOwnProperty(ce)&&(A[ce]=F[ce]===void 0&&Q!==void 0?Q[ce]:F[ce])}var ce=arguments.length-2;if(ce===1)A.children=b;else if(1<ce){Q=Array(ce);for(var oe=0;oe<ce;oe++)Q[oe]=arguments[oe+2];A.children=Q}return{$$typeof:a,type:w.type,key:O,ref:X,props:A,_owner:z}},st.createContext=function(w){return w={$$typeof:c,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},st.createElement=ae,st.createFactory=function(w){var F=ae.bind(null,w);return F.type=w,F},st.createRef=function(){return{current:null}},st.forwardRef=function(w){return{$$typeof:p,render:w}},st.isValidElement=ne,st.lazy=function(w){return{$$typeof:m,_payload:{_status:-1,_result:w},_init:Me}},st.memo=function(w,F){return{$$typeof:d,type:w,compare:F===void 0?null:F}},st.startTransition=function(w){var F=V.transition;V.transition={};try{w()}finally{V.transition=F}},st.unstable_act=H,st.useCallback=function(w,F){return se.current.useCallback(w,F)},st.useContext=function(w){return se.current.useContext(w)},st.useDebugValue=function(){},st.useDeferredValue=function(w){return se.current.useDeferredValue(w)},st.useEffect=function(w,F){return se.current.useEffect(w,F)},st.useId=function(){return se.current.useId()},st.useImperativeHandle=function(w,F,b){return se.current.useImperativeHandle(w,F,b)},st.useInsertionEffect=function(w,F){return se.current.useInsertionEffect(w,F)},st.useLayoutEffect=function(w,F){return se.current.useLayoutEffect(w,F)},st.useMemo=function(w,F){return se.current.useMemo(w,F)},st.useReducer=function(w,F,b){return se.current.useReducer(w,F,b)},st.useRef=function(w){return se.current.useRef(w)},st.useState=function(w){return se.current.useState(w)},st.useSyncExternalStore=function(w,F,b){return se.current.useSyncExternalStore(w,F,b)},st.useTransition=function(){return se.current.useTransition()},st.version="18.3.1",st}var $f;function _d(){return $f||($f=1,Sc.exports=Yv()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function qv(){if(Kf)return Us;Kf=1;var a=_d(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(p,f,d){var m,v={},_=null,y=null;d!==void 0&&(_=""+d),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)i.call(f,m)&&!l.hasOwnProperty(m)&&(v[m]=f[m]);if(p&&p.defaultProps)for(m in f=p.defaultProps,f)v[m]===void 0&&(v[m]=f[m]);return{$$typeof:e,type:p,key:_,ref:y,props:v,_owner:s.current}}return Us.Fragment=n,Us.jsx=c,Us.jsxs=c,Us}var Zf;function $v(){return Zf||(Zf=1,yc.exports=qv()),yc.exports}var L=$v(),re=_d(),Ko={},Ec={exports:{}},En={},Mc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function Kv(){return Qf||(Qf=1,(function(a){function e(V,$){var H=V.length;V.push($);e:for(;0<H;){var w=H-1>>>1,F=V[w];if(0<s(F,$))V[w]=$,V[H]=F,H=w;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var $=V[0],H=V.pop();if(H!==$){V[0]=H;e:for(var w=0,F=V.length,b=F>>>1;w<b;){var A=2*(w+1)-1,O=V[A],X=A+1,z=V[X];if(0>s(O,H))X<F&&0>s(z,O)?(V[w]=z,V[X]=H,w=X):(V[w]=O,V[A]=H,w=A);else if(X<F&&0>s(z,H))V[w]=z,V[X]=H,w=X;else break e}}return $}function s(V,$){var H=V.sortIndex-$.sortIndex;return H!==0?H:V.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var c=Date,p=c.now();a.unstable_now=function(){return c.now()-p}}var f=[],d=[],m=1,v=null,_=3,y=!1,R=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var $=n(d);$!==null;){if($.callback===null)i(d);else if($.startTime<=V)i(d),$.sortIndex=$.expirationTime,e(f,$);else break;$=n(d)}}function j(V){if(T=!1,S(V),!R)if(n(f)!==null)R=!0,Me(k);else{var $=n(d);$!==null&&se(j,$.startTime-V)}}function k(V,$){R=!1,T&&(T=!1,C(ae),ae=-1),y=!0;var H=_;try{for(S($),v=n(f);v!==null&&(!(v.expirationTime>$)||V&&!pe());){var w=v.callback;if(typeof w=="function"){v.callback=null,_=v.priorityLevel;var F=w(v.expirationTime<=$);$=a.unstable_now(),typeof F=="function"?v.callback=F:v===n(f)&&i(f),S($)}else i(f);v=n(f)}if(v!==null)var b=!0;else{var A=n(d);A!==null&&se(j,A.startTime-$),b=!1}return b}finally{v=null,_=H,y=!1}}var U=!1,N=null,ae=-1,K=5,ne=-1;function pe(){return!(a.unstable_now()-ne<K)}function B(){if(N!==null){var V=a.unstable_now();ne=V;var $=!0;try{$=N(!0,V)}finally{$?ee():(U=!1,N=null)}}else U=!1}var ee;if(typeof M=="function")ee=function(){M(B)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,me=Z.port2;Z.port1.onmessage=B,ee=function(){me.postMessage(null)}}else ee=function(){x(B,0)};function Me(V){N=V,U||(U=!0,ee())}function se(V,$){ae=x(function(){V(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_continueExecution=function(){R||y||(R=!0,Me(k))},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return n(f)},a.unstable_next=function(V){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var H=_;_=$;try{return V()}finally{_=H}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(V,$){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var H=_;_=V;try{return $()}finally{_=H}},a.unstable_scheduleCallback=function(V,$,H){var w=a.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?w+H:w):H=w,V){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=H+F,V={id:m++,callback:$,priorityLevel:V,startTime:H,expirationTime:F,sortIndex:-1},H>w?(V.sortIndex=H,e(d,V),n(f)===null&&V===n(d)&&(T?(C(ae),ae=-1):T=!0,se(j,H-w))):(V.sortIndex=F,e(f,V),R||y||(R=!0,Me(k))),V},a.unstable_shouldYield=pe,a.unstable_wrapCallback=function(V){var $=_;return function(){var H=_;_=$;try{return V.apply(this,arguments)}finally{_=H}}}})(wc)),wc}var Jf;function Zv(){return Jf||(Jf=1,Mc.exports=Kv()),Mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function Qv(){if(ep)return En;ep=1;var a=_d(),e=Zv();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(t,r){c(t,r),c(t+"Capture",r)}function c(t,r){for(s[t]=r,t=0;t<r.length;t++)i.add(r[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function _(t){return f.call(v,t)?!0:f.call(m,t)?!1:d.test(t)?v[t]=!0:(m[t]=!0,!1)}function y(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,r,o,u){if(r===null||typeof r>"u"||y(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(t,r,o,u,h,g,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=g,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];x[r]=new T(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function M(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(C,M);x[r]=new T(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(C,M);x[r]=new T(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(C,M);x[r]=new T(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function S(t,r,o,u){var h=x.hasOwnProperty(r)?x[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(R(r,o,h,u)&&(o=null),u||h===null?_(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var j=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),U=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),pe=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),V=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,w;function F(t){if(w===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);w=r&&r[1]||""}return`
`+w+t}var b=!1;function A(t,r){if(!t||b)return"";b=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var u=le}Reflect.construct(t,[],r)}else{try{r.call()}catch(le){u=le}t.call(r.prototype)}else{try{throw Error()}catch(le){u=le}t()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var h=le.stack.split(`
`),g=u.stack.split(`
`),E=h.length-1,I=g.length-1;1<=E&&0<=I&&h[E]!==g[I];)I--;for(;1<=E&&0<=I;E--,I--)if(h[E]!==g[I]){if(E!==1||I!==1)do if(E--,I--,0>I||h[E]!==g[I]){var G=`
`+h[E].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=E&&0<=I);break}}}finally{b=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?F(t):""}function O(t){switch(t.tag){case 5:return F(t.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return t=A(t.type,!1),t;case 11:return t=A(t.type.render,!1),t;case 1:return t=A(t.type,!0),t;default:return""}}function X(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case U:return"Portal";case K:return"Profiler";case ae:return"StrictMode";case ee:return"Suspense";case Z:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pe:return(t.displayName||"Context")+".Consumer";case ne:return(t._context.displayName||"Context")+".Provider";case B:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return r=t.displayName||null,r!==null?r:X(t.type)||"Memo";case Me:r=t._payload,t=t._init;try{return X(t(r))}catch{}}return null}function z(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(r);case 8:return r===ae?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Q(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ce(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function oe(t){var r=ce(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function _e(t){t._valueTracker||(t._valueTracker=oe(t))}function Ce(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=ce(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function De(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function P(t,r){var o=r.checked;return H({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Te(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Q(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function he(t,r){r=r.checked,r!=null&&S(t,"checked",r,!1)}function de(t,r){he(t,r);var o=Q(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Re(t,r.type,o):r.hasOwnProperty("defaultValue")&&Re(t,r.type,Q(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function ye(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Re(t,r,o){(r!=="number"||De(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var be=Array.isArray;function Ie(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Q(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function Ge(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pe(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(be(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Q(o)}}function ke(t,r){var o=Q(r.value),u=Q(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Je(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function et(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ne(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?et(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xe,Ve=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Xe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Dt(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(t){W.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Tt[r]=Tt[t]})});function Ue(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Tt.hasOwnProperty(t)&&Tt[t]?(""+r).trim():r+"px"}function Ze(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=Ue(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var dt=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ie(t,r){if(r){if(dt[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function qt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function Pt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,In=null,Ot=null;function an(t){if(t=xs(t)){if(typeof Fr!="function")throw Error(n(280));var r=t.stateNode;r&&(r=co(r),Fr(t.stateNode,t.type,r))}}function Sr(t){In?Ot?Ot.push(t):Ot=[t]:In=t}function On(){if(In){var t=In,r=Ot;if(Ot=In=null,an(t),r)for(t=0;t<r.length;t++)an(r[t])}}function Xn(t,r){return t(r)}function sr(){}var Yn=!1;function es(t,r,o){if(Yn)return t(r,o);Yn=!0;try{return Xn(t,r,o)}finally{Yn=!1,(In!==null||Ot!==null)&&(sr(),On())}}function zr(t,r){var o=t.stateNode;if(o===null)return null;var u=co(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Br=!1;if(p)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Br=!1}function ta(t,r,o,u,h,g,E,I,G){var le=Array.prototype.slice.call(arguments,3);try{r.apply(o,le)}catch(Se){this.onError(Se)}}var Gr=!1,Mi=null,D=!1,ue=null,fe={onError:function(t){Gr=!0,Mi=t}};function xe(t,r,o,u,h,g,E,I,G){Gr=!1,Mi=null,ta.apply(fe,arguments)}function ge(t,r,o,u,h,g,E,I,G){if(xe.apply(this,arguments),Gr){if(Gr){var le=Mi;Gr=!1,Mi=null}else throw Error(n(198));D||(D=!0,ue=le)}}function Ae(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Ye(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function qe(t){if(Ae(t)!==t)throw Error(n(188))}function tt(t){var r=t.alternate;if(!r){if(r=Ae(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return qe(h),t;if(g===u)return qe(h),r;g=g.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=g;else{for(var E=!1,I=h.child;I;){if(I===o){E=!0,o=h,u=g;break}if(I===u){E=!0,u=h,o=g;break}I=I.sibling}if(!E){for(I=g.child;I;){if(I===o){E=!0,o=g,u=h;break}if(I===u){E=!0,u=g,o=h;break}I=I.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function nt(t){return t=tt(t),t!==null?it(t):null}function it(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=it(t);if(r!==null)return r;t=t.sibling}return null}var at=e.unstable_scheduleCallback,_t=e.unstable_cancelCallback,bn=e.unstable_shouldYield,qn=e.unstable_requestPaint,gt=e.unstable_now,yt=e.unstable_getCurrentPriorityLevel,bt=e.unstable_ImmediatePriority,sn=e.unstable_UserBlockingPriority,kt=e.unstable_NormalPriority,ut=e.unstable_LowPriority,ct=e.unstable_IdlePriority,or=null,fn=null;function Hl(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(or,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:jl,Gl=Math.log,Vl=Math.LN2;function jl(t){return t>>>=0,t===0?32:31-(Gl(t)/Vl|0)|0}var na=64,ra=4194304;function Vr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wi(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,g=t.pingedLanes,E=o&268435455;if(E!==0){var I=E&~h;I!==0?u=Vr(I):(g&=E,g!==0&&(u=Vr(g)))}else E=o&~h,E!==0?u=Vr(E):g!==0&&(u=Vr(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-Zt(r),h=1<<o,u|=t[o],r&=~h;return u}function Wl(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes;0<g;){var E=31-Zt(g),I=1<<E,G=h[E];G===-1?((I&o)===0||(I&u)!==0)&&(h[E]=Wl(I,r)):G<=r&&(t.expiredLanes|=I),g&=~I}}function ts(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pn(){var t=na;return na<<=1,(na&4194240)===0&&(na=64),t}function $n(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function jr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Zt(r),t[r]=o}function Ti(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-Zt(o),g=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~g}}function bi(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-Zt(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var Ke=0;function lr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ia,mn,gn,on,aa,ns=!1,Ri=[],Wr=null,Xr=null,Yr=null,rs=new Map,is=new Map,qr=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(t,r){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":rs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":is.delete(r.pointerId)}}function as(t,r,o,u,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=xs(r),r!==null&&mn(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function gg(t,r,o,u,h){switch(r){case"focusin":return Wr=as(Wr,t,r,o,u,h),!0;case"dragenter":return Xr=as(Xr,t,r,o,u,h),!0;case"mouseover":return Yr=as(Yr,t,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return rs.set(g,as(rs.get(g)||null,t,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,is.set(g,as(is.get(g)||null,t,r,o,u,h)),!0}return!1}function Pd(t){var r=Ai(t.target);if(r!==null){var o=Ae(r);if(o!==null){if(r=o.tag,r===13){if(r=Ye(o),r!==null){t.blockedOn=r,aa(t.priority,function(){gn(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ks(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Yl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Ct=u,o.target.dispatchEvent(u),Ct=null}else return r=xs(o),r!==null&&mn(r),t.blockedOn=o,!1;r.shift()}return!0}function Nd(t,r,o){Ks(t)&&o.delete(r)}function vg(){ns=!1,Wr!==null&&Ks(Wr)&&(Wr=null),Xr!==null&&Ks(Xr)&&(Xr=null),Yr!==null&&Ks(Yr)&&(Yr=null),rs.forEach(Nd),is.forEach(Nd)}function ss(t,r){t.blockedOn===r&&(t.blockedOn=null,ns||(ns=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vg)))}function os(t){function r(h){return ss(h,t)}if(0<Ri.length){ss(Ri[0],t);for(var o=1;o<Ri.length;o++){var u=Ri[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Wr!==null&&ss(Wr,t),Xr!==null&&ss(Xr,t),Yr!==null&&ss(Yr,t),rs.forEach(r),is.forEach(r),o=0;o<qr.length;o++)u=qr[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<qr.length&&(o=qr[0],o.blockedOn===null);)Pd(o),o.blockedOn===null&&qr.shift()}var sa=j.ReactCurrentBatchConfig,Zs=!0;function _g(t,r,o,u){var h=Ke,g=sa.transition;sa.transition=null;try{Ke=1,Xl(t,r,o,u)}finally{Ke=h,sa.transition=g}}function xg(t,r,o,u){var h=Ke,g=sa.transition;sa.transition=null;try{Ke=4,Xl(t,r,o,u)}finally{Ke=h,sa.transition=g}}function Xl(t,r,o,u){if(Zs){var h=Yl(t,r,o,u);if(h===null)cu(t,r,u,Qs,o),Ld(t,u);else if(gg(h,t,r,o,u))u.stopPropagation();else if(Ld(t,u),r&4&&-1<mg.indexOf(t)){for(;h!==null;){var g=xs(h);if(g!==null&&ia(g),g=Yl(t,r,o,u),g===null&&cu(t,r,u,Qs,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else cu(t,r,u,null,o)}}var Qs=null;function Yl(t,r,o,u){if(Qs=null,t=Pt(u),t=Ai(t),t!==null)if(r=Ae(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Ye(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Qs=t,null}function Dd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yt()){case bt:return 1;case sn:return 4;case kt:case ut:return 16;case ct:return 536870912;default:return 16}default:return 16}}var $r=null,ql=null,Js=null;function Ud(){if(Js)return Js;var t,r=ql,o=r.length,u,h="value"in $r?$r.value:$r.textContent,g=h.length;for(t=0;t<o&&r[t]===h[t];t++);var E=o-t;for(u=1;u<=E&&r[o-u]===h[g-u];u++);return Js=h.slice(t,1<u?1-u:void 0)}function eo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function Id(){return!1}function Rn(t){function r(o,u,h,g,E){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?to:Id,this.isPropagationStopped=Id,this}return H(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),r}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Rn(oa),ls=H({},oa,{view:0,detail:0}),yg=Rn(ls),Kl,Zl,us,no=H({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Kl=t.screenX-us.screenX,Zl=t.screenY-us.screenY):Zl=Kl=0,us=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),Od=Rn(no),Sg=H({},no,{dataTransfer:0}),Eg=Rn(Sg),Mg=H({},ls,{relatedTarget:0}),Ql=Rn(Mg),wg=H({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Tg=Rn(wg),bg=H({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rg=Rn(bg),Ag=H({},oa,{data:0}),kd=Rn(Ag),Cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Pg[t])?!!r[t]:!1}function Jl(){return Ng}var Dg=H({},ls,{key:function(t){if(t.key){var r=Cg[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ug=Rn(Dg),Ig=H({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=Rn(Ig),Og=H({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),kg=Rn(Og),Fg=H({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),zg=Rn(Fg),Bg=H({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hg=Rn(Bg),Gg=[9,13,27,32],eu=p&&"CompositionEvent"in window,cs=null;p&&"documentMode"in document&&(cs=document.documentMode);var Vg=p&&"TextEvent"in window&&!cs,zd=p&&(!eu||cs&&8<cs&&11>=cs),Bd=" ",Hd=!1;function Gd(t,r){switch(t){case"keyup":return Gg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var la=!1;function jg(t,r){switch(t){case"compositionend":return Vd(r);case"keypress":return r.which!==32?null:(Hd=!0,Bd);case"textInput":return t=r.data,t===Bd&&Hd?null:t;default:return null}}function Wg(t,r){if(la)return t==="compositionend"||!eu&&Gd(t,r)?(t=Ud(),Js=ql=$r=null,la=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zd&&r.locale!=="ko"?null:r.data;default:return null}}var Xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Xg[t.type]:r==="textarea"}function Wd(t,r,o,u){Sr(u),r=oo(r,"onChange"),0<r.length&&(o=new $l("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var ds=null,hs=null;function Yg(t){uh(t,0)}function ro(t){var r=fa(t);if(Ce(r))return t}function qg(t,r){if(t==="change")return r}var Xd=!1;if(p){var tu;if(p){var nu="oninput"in document;if(!nu){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),nu=typeof Yd.oninput=="function"}tu=nu}else tu=!1;Xd=tu&&(!document.documentMode||9<document.documentMode)}function qd(){ds&&(ds.detachEvent("onpropertychange",$d),hs=ds=null)}function $d(t){if(t.propertyName==="value"&&ro(hs)){var r=[];Wd(r,hs,t,Pt(t)),es(Yg,r)}}function $g(t,r,o){t==="focusin"?(qd(),ds=r,hs=o,ds.attachEvent("onpropertychange",$d)):t==="focusout"&&qd()}function Kg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(hs)}function Zg(t,r){if(t==="click")return ro(r)}function Qg(t,r){if(t==="input"||t==="change")return ro(r)}function Jg(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Kn=typeof Object.is=="function"?Object.is:Jg;function fs(t,r){if(Kn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!f.call(r,h)||!Kn(t[h],r[h]))return!1}return!0}function Kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zd(t,r){var o=Kd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kd(o)}}function Qd(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Qd(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Jd(){for(var t=window,r=De();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=De(t.document)}return r}function ru(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ev(t){var r=Jd(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Qd(o.ownerDocument.documentElement,o)){if(u!==null&&ru(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!t.extend&&g>u&&(h=u,u=g,g=h),h=Zd(o,g);var E=Zd(o,u);h&&E&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),g>u?(t.addRange(r),t.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tv=p&&"documentMode"in document&&11>=document.documentMode,ua=null,iu=null,ps=null,au=!1;function eh(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;au||ua==null||ua!==De(u)||(u=ua,"selectionStart"in u&&ru(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ps&&fs(ps,u)||(ps=u,u=oo(iu,"onSelect"),0<u.length&&(r=new $l("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=ua)))}function io(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var ca={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},su={},th={};p&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function ao(t){if(su[t])return su[t];if(!ca[t])return t;var r=ca[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in th)return su[t]=r[o];return t}var nh=ao("animationend"),rh=ao("animationiteration"),ih=ao("animationstart"),ah=ao("transitionend"),sh=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,r){sh.set(t,r),l(r,[t])}for(var ou=0;ou<oh.length;ou++){var lu=oh[ou],nv=lu.toLowerCase(),rv=lu[0].toUpperCase()+lu.slice(1);Kr(nv,"on"+rv)}Kr(nh,"onAnimationEnd"),Kr(rh,"onAnimationIteration"),Kr(ih,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function lh(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,ge(u,r,void 0,t),t.currentTarget=null}function uh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var E=u.length-1;0<=E;E--){var I=u[E],G=I.instance,le=I.currentTarget;if(I=I.listener,G!==g&&h.isPropagationStopped())break e;lh(h,I,le),g=G}else for(E=0;E<u.length;E++){if(I=u[E],G=I.instance,le=I.currentTarget,I=I.listener,G!==g&&h.isPropagationStopped())break e;lh(h,I,le),g=G}}}if(D)throw t=ue,D=!1,ue=null,t}function St(t,r){var o=r[gu];o===void 0&&(o=r[gu]=new Set);var u=t+"__bubble";o.has(u)||(ch(r,t,2,!1),o.add(u))}function uu(t,r,o){var u=0;r&&(u|=4),ch(o,t,u,r)}var so="_reactListening"+Math.random().toString(36).slice(2);function gs(t){if(!t[so]){t[so]=!0,i.forEach(function(o){o!=="selectionchange"&&(iv.has(o)||uu(o,!1,t),uu(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[so]||(r[so]=!0,uu("selectionchange",!1,r))}}function ch(t,r,o,u){switch(Dd(r)){case 1:var h=_g;break;case 4:h=xg;break;default:h=Xl}o=h.bind(null,r,o,t),h=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function cu(t,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var I=u.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;E=E.return}for(;I!==null;){if(E=Ai(I),E===null)return;if(G=E.tag,G===5||G===6){u=g=E;continue e}I=I.parentNode}}u=u.return}es(function(){var le=g,Se=Pt(o),Ee=[];e:{var ve=sh.get(t);if(ve!==void 0){var Oe=$l,ze=t;switch(t){case"keypress":if(eo(o)===0)break e;case"keydown":case"keyup":Oe=Ug;break;case"focusin":ze="focus",Oe=Ql;break;case"focusout":ze="blur",Oe=Ql;break;case"beforeblur":case"afterblur":Oe=Ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=kg;break;case nh:case rh:case ih:Oe=Tg;break;case ah:Oe=zg;break;case"scroll":Oe=yg;break;case"wheel":Oe=Hg;break;case"copy":case"cut":case"paste":Oe=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Fd}var Be=(r&4)!==0,Nt=!Be&&t==="scroll",J=Be?ve!==null?ve+"Capture":null:ve;Be=[];for(var q=le,te;q!==null;){te=q;var we=te.stateNode;if(te.tag===5&&we!==null&&(te=we,J!==null&&(we=zr(q,J),we!=null&&Be.push(vs(q,we,te)))),Nt)break;q=q.return}0<Be.length&&(ve=new Oe(ve,ze,null,o,Se),Ee.push({event:ve,listeners:Be}))}}if((r&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",ve&&o!==Ct&&(ze=o.relatedTarget||o.fromElement)&&(Ai(ze)||ze[Er]))break e;if((Oe||ve)&&(ve=Se.window===Se?Se:(ve=Se.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(ze=o.relatedTarget||o.toElement,Oe=le,ze=ze?Ai(ze):null,ze!==null&&(Nt=Ae(ze),ze!==Nt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Oe=null,ze=le),Oe!==ze)){if(Be=Od,we="onMouseLeave",J="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(Be=Fd,we="onPointerLeave",J="onPointerEnter",q="pointer"),Nt=Oe==null?ve:fa(Oe),te=ze==null?ve:fa(ze),ve=new Be(we,q+"leave",Oe,o,Se),ve.target=Nt,ve.relatedTarget=te,we=null,Ai(Se)===le&&(Be=new Be(J,q+"enter",ze,o,Se),Be.target=te,Be.relatedTarget=Nt,we=Be),Nt=we,Oe&&ze)t:{for(Be=Oe,J=ze,q=0,te=Be;te;te=da(te))q++;for(te=0,we=J;we;we=da(we))te++;for(;0<q-te;)Be=da(Be),q--;for(;0<te-q;)J=da(J),te--;for(;q--;){if(Be===J||J!==null&&Be===J.alternate)break t;Be=da(Be),J=da(J)}Be=null}else Be=null;Oe!==null&&dh(Ee,ve,Oe,Be,!1),ze!==null&&Nt!==null&&dh(Ee,Nt,ze,Be,!0)}}e:{if(ve=le?fa(le):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var He=qg;else if(jd(ve))if(Xd)He=Qg;else{He=Kg;var je=$g}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(He=Zg);if(He&&(He=He(t,le))){Wd(Ee,He,o,Se);break e}je&&je(t,ve,le),t==="focusout"&&(je=ve._wrapperState)&&je.controlled&&ve.type==="number"&&Re(ve,"number",ve.value)}switch(je=le?fa(le):window,t){case"focusin":(jd(je)||je.contentEditable==="true")&&(ua=je,iu=le,ps=null);break;case"focusout":ps=iu=ua=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,eh(Ee,o,Se);break;case"selectionchange":if(tv)break;case"keydown":case"keyup":eh(Ee,o,Se)}var We;if(eu)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else la?Gd(t,o)&&($e="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&($e="onCompositionStart");$e&&(zd&&o.locale!=="ko"&&(la||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&la&&(We=Ud()):($r=Se,ql="value"in $r?$r.value:$r.textContent,la=!0)),je=oo(le,$e),0<je.length&&($e=new kd($e,t,null,o,Se),Ee.push({event:$e,listeners:je}),We?$e.data=We:(We=Vd(o),We!==null&&($e.data=We)))),(We=Vg?jg(t,o):Wg(t,o))&&(le=oo(le,"onBeforeInput"),0<le.length&&(Se=new kd("onBeforeInput","beforeinput",null,o,Se),Ee.push({event:Se,listeners:le}),Se.data=We))}uh(Ee,r)})}function vs(t,r,o){return{instance:t,listener:r,currentTarget:o}}function oo(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=zr(t,o),g!=null&&u.unshift(vs(t,g,h)),g=zr(t,r),g!=null&&u.push(vs(t,g,h))),t=t.return}return u}function da(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dh(t,r,o,u,h){for(var g=r._reactName,E=[];o!==null&&o!==u;){var I=o,G=I.alternate,le=I.stateNode;if(G!==null&&G===u)break;I.tag===5&&le!==null&&(I=le,h?(G=zr(o,g),G!=null&&E.unshift(vs(o,G,I))):h||(G=zr(o,g),G!=null&&E.push(vs(o,G,I)))),o=o.return}E.length!==0&&t.push({event:r,listeners:E})}var av=/\r\n?/g,sv=/\u0000|\uFFFD/g;function hh(t){return(typeof t=="string"?t:""+t).replace(av,`
`).replace(sv,"")}function lo(t,r,o){if(r=hh(r),hh(t)!==r&&o)throw Error(n(425))}function uo(){}var du=null,hu=null;function fu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,lv=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(t){return fh.resolve(null).then(t).catch(uv)}:pu;function uv(t){setTimeout(function(){throw t})}function mu(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),os(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);os(r)}function Zr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ph(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var ha=Math.random().toString(36).slice(2),ur="__reactFiber$"+ha,_s="__reactProps$"+ha,Er="__reactContainer$"+ha,gu="__reactEvents$"+ha,cv="__reactListeners$"+ha,dv="__reactHandles$"+ha;function Ai(t){var r=t[ur];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Er]||o[ur]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=ph(t);t!==null;){if(o=t[ur])return o;t=ph(t)}return r}t=o,o=t.parentNode}return null}function xs(t){return t=t[ur]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function co(t){return t[_s]||null}var vu=[],pa=-1;function Qr(t){return{current:t}}function Et(t){0>pa||(t.current=vu[pa],vu[pa]=null,pa--)}function xt(t,r){pa++,vu[pa]=t.current,t.current=r}var Jr={},Qt=Qr(Jr),vn=Qr(!1),Ci=Jr;function ma(t,r){var o=t.type.contextTypes;if(!o)return Jr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function _n(t){return t=t.childContextTypes,t!=null}function ho(){Et(vn),Et(Qt)}function mh(t,r,o){if(Qt.current!==Jr)throw Error(n(168));xt(Qt,r),xt(vn,o)}function gh(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,z(t)||"Unknown",h));return H({},o,u)}function fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Ci=Qt.current,xt(Qt,t),xt(vn,vn.current),!0}function vh(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=gh(t,r,Ci),u.__reactInternalMemoizedMergedChildContext=t,Et(vn),Et(Qt),xt(Qt,t)):Et(vn),xt(vn,o)}var Mr=null,po=!1,_u=!1;function _h(t){Mr===null?Mr=[t]:Mr.push(t)}function hv(t){po=!0,_h(t)}function ei(){if(!_u&&Mr!==null){_u=!0;var t=0,r=Ke;try{var o=Mr;for(Ke=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Mr=null,po=!1}catch(h){throw Mr!==null&&(Mr=Mr.slice(t+1)),at(bt,ei),h}finally{Ke=r,_u=!1}}return null}var ga=[],va=0,mo=null,go=0,kn=[],Fn=0,Li=null,wr=1,Tr="";function Pi(t,r){ga[va++]=go,ga[va++]=mo,mo=t,go=r}function xh(t,r,o){kn[Fn++]=wr,kn[Fn++]=Tr,kn[Fn++]=Li,Li=t;var u=wr;t=Tr;var h=32-Zt(u)-1;u&=~(1<<h),o+=1;var g=32-Zt(r)+h;if(30<g){var E=h-h%5;g=(u&(1<<E)-1).toString(32),u>>=E,h-=E,wr=1<<32-Zt(r)+h|o<<h|u,Tr=g+t}else wr=1<<g|o<<h|u,Tr=t}function xu(t){t.return!==null&&(Pi(t,1),xh(t,1,0))}function yu(t){for(;t===mo;)mo=ga[--va],ga[va]=null,go=ga[--va],ga[va]=null;for(;t===Li;)Li=kn[--Fn],kn[Fn]=null,Tr=kn[--Fn],kn[Fn]=null,wr=kn[--Fn],kn[Fn]=null}var An=null,Cn=null,wt=!1,Zn=null;function yh(t,r){var o=Gn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Sh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,An=t,Cn=Zr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,An=t,Cn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Li!==null?{id:wr,overflow:Tr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Gn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,An=t,Cn=null,!0):!1;default:return!1}}function Su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(wt){var r=Cn;if(r){var o=r;if(!Sh(t,r)){if(Su(t))throw Error(n(418));r=Zr(o.nextSibling);var u=An;r&&Sh(t,r)?yh(u,o):(t.flags=t.flags&-4097|2,wt=!1,An=t)}}else{if(Su(t))throw Error(n(418));t.flags=t.flags&-4097|2,wt=!1,An=t}}}function Eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function vo(t){if(t!==An)return!1;if(!wt)return Eh(t),wt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!fu(t.type,t.memoizedProps)),r&&(r=Cn)){if(Su(t))throw Mh(),Error(n(418));for(;r;)yh(t,r),r=Zr(r.nextSibling)}if(Eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Cn=Zr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Cn=null}}else Cn=An?Zr(t.stateNode.nextSibling):null;return!0}function Mh(){for(var t=Cn;t;)t=Zr(t.nextSibling)}function _a(){Cn=An=null,wt=!1}function Mu(t){Zn===null?Zn=[t]:Zn.push(t)}var fv=j.ReactCurrentBatchConfig;function ys(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,g=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(E){var I=h.refs;E===null?delete I[g]:I[g]=E},r._stringRef=g,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _o(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function wh(t){var r=t._init;return r(t._payload)}function Th(t){function r(J,q){if(t){var te=J.deletions;te===null?(J.deletions=[q],J.flags|=16):te.push(q)}}function o(J,q){if(!t)return null;for(;q!==null;)r(J,q),q=q.sibling;return null}function u(J,q){for(J=new Map;q!==null;)q.key!==null?J.set(q.key,q):J.set(q.index,q),q=q.sibling;return J}function h(J,q){return J=li(J,q),J.index=0,J.sibling=null,J}function g(J,q,te){return J.index=te,t?(te=J.alternate,te!==null?(te=te.index,te<q?(J.flags|=2,q):te):(J.flags|=2,q)):(J.flags|=1048576,q)}function E(J){return t&&J.alternate===null&&(J.flags|=2),J}function I(J,q,te,we){return q===null||q.tag!==6?(q=pc(te,J.mode,we),q.return=J,q):(q=h(q,te),q.return=J,q)}function G(J,q,te,we){var He=te.type;return He===N?Se(J,q,te.props.children,we,te.key):q!==null&&(q.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Me&&wh(He)===q.type)?(we=h(q,te.props),we.ref=ys(J,q,te),we.return=J,we):(we=Go(te.type,te.key,te.props,null,J.mode,we),we.ref=ys(J,q,te),we.return=J,we)}function le(J,q,te,we){return q===null||q.tag!==4||q.stateNode.containerInfo!==te.containerInfo||q.stateNode.implementation!==te.implementation?(q=mc(te,J.mode,we),q.return=J,q):(q=h(q,te.children||[]),q.return=J,q)}function Se(J,q,te,we,He){return q===null||q.tag!==7?(q=zi(te,J.mode,we,He),q.return=J,q):(q=h(q,te),q.return=J,q)}function Ee(J,q,te){if(typeof q=="string"&&q!==""||typeof q=="number")return q=pc(""+q,J.mode,te),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case k:return te=Go(q.type,q.key,q.props,null,J.mode,te),te.ref=ys(J,null,q),te.return=J,te;case U:return q=mc(q,J.mode,te),q.return=J,q;case Me:var we=q._init;return Ee(J,we(q._payload),te)}if(be(q)||$(q))return q=zi(q,J.mode,te,null),q.return=J,q;_o(J,q)}return null}function ve(J,q,te,we){var He=q!==null?q.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return He!==null?null:I(J,q,""+te,we);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case k:return te.key===He?G(J,q,te,we):null;case U:return te.key===He?le(J,q,te,we):null;case Me:return He=te._init,ve(J,q,He(te._payload),we)}if(be(te)||$(te))return He!==null?null:Se(J,q,te,we,null);_o(J,te)}return null}function Oe(J,q,te,we,He){if(typeof we=="string"&&we!==""||typeof we=="number")return J=J.get(te)||null,I(q,J,""+we,He);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case k:return J=J.get(we.key===null?te:we.key)||null,G(q,J,we,He);case U:return J=J.get(we.key===null?te:we.key)||null,le(q,J,we,He);case Me:var je=we._init;return Oe(J,q,te,je(we._payload),He)}if(be(we)||$(we))return J=J.get(te)||null,Se(q,J,we,He,null);_o(q,we)}return null}function ze(J,q,te,we){for(var He=null,je=null,We=q,$e=q=0,Xt=null;We!==null&&$e<te.length;$e++){We.index>$e?(Xt=We,We=null):Xt=We.sibling;var pt=ve(J,We,te[$e],we);if(pt===null){We===null&&(We=Xt);break}t&&We&&pt.alternate===null&&r(J,We),q=g(pt,q,$e),je===null?He=pt:je.sibling=pt,je=pt,We=Xt}if($e===te.length)return o(J,We),wt&&Pi(J,$e),He;if(We===null){for(;$e<te.length;$e++)We=Ee(J,te[$e],we),We!==null&&(q=g(We,q,$e),je===null?He=We:je.sibling=We,je=We);return wt&&Pi(J,$e),He}for(We=u(J,We);$e<te.length;$e++)Xt=Oe(We,J,$e,te[$e],we),Xt!==null&&(t&&Xt.alternate!==null&&We.delete(Xt.key===null?$e:Xt.key),q=g(Xt,q,$e),je===null?He=Xt:je.sibling=Xt,je=Xt);return t&&We.forEach(function(ui){return r(J,ui)}),wt&&Pi(J,$e),He}function Be(J,q,te,we){var He=$(te);if(typeof He!="function")throw Error(n(150));if(te=He.call(te),te==null)throw Error(n(151));for(var je=He=null,We=q,$e=q=0,Xt=null,pt=te.next();We!==null&&!pt.done;$e++,pt=te.next()){We.index>$e?(Xt=We,We=null):Xt=We.sibling;var ui=ve(J,We,pt.value,we);if(ui===null){We===null&&(We=Xt);break}t&&We&&ui.alternate===null&&r(J,We),q=g(ui,q,$e),je===null?He=ui:je.sibling=ui,je=ui,We=Xt}if(pt.done)return o(J,We),wt&&Pi(J,$e),He;if(We===null){for(;!pt.done;$e++,pt=te.next())pt=Ee(J,pt.value,we),pt!==null&&(q=g(pt,q,$e),je===null?He=pt:je.sibling=pt,je=pt);return wt&&Pi(J,$e),He}for(We=u(J,We);!pt.done;$e++,pt=te.next())pt=Oe(We,J,$e,pt.value,we),pt!==null&&(t&&pt.alternate!==null&&We.delete(pt.key===null?$e:pt.key),q=g(pt,q,$e),je===null?He=pt:je.sibling=pt,je=pt);return t&&We.forEach(function(Xv){return r(J,Xv)}),wt&&Pi(J,$e),He}function Nt(J,q,te,we){if(typeof te=="object"&&te!==null&&te.type===N&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case k:e:{for(var He=te.key,je=q;je!==null;){if(je.key===He){if(He=te.type,He===N){if(je.tag===7){o(J,je.sibling),q=h(je,te.props.children),q.return=J,J=q;break e}}else if(je.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Me&&wh(He)===je.type){o(J,je.sibling),q=h(je,te.props),q.ref=ys(J,je,te),q.return=J,J=q;break e}o(J,je);break}else r(J,je);je=je.sibling}te.type===N?(q=zi(te.props.children,J.mode,we,te.key),q.return=J,J=q):(we=Go(te.type,te.key,te.props,null,J.mode,we),we.ref=ys(J,q,te),we.return=J,J=we)}return E(J);case U:e:{for(je=te.key;q!==null;){if(q.key===je)if(q.tag===4&&q.stateNode.containerInfo===te.containerInfo&&q.stateNode.implementation===te.implementation){o(J,q.sibling),q=h(q,te.children||[]),q.return=J,J=q;break e}else{o(J,q);break}else r(J,q);q=q.sibling}q=mc(te,J.mode,we),q.return=J,J=q}return E(J);case Me:return je=te._init,Nt(J,q,je(te._payload),we)}if(be(te))return ze(J,q,te,we);if($(te))return Be(J,q,te,we);_o(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,q!==null&&q.tag===6?(o(J,q.sibling),q=h(q,te),q.return=J,J=q):(o(J,q),q=pc(te,J.mode,we),q.return=J,J=q),E(J)):o(J,q)}return Nt}var xa=Th(!0),bh=Th(!1),xo=Qr(null),yo=null,ya=null,wu=null;function Tu(){wu=ya=yo=null}function bu(t){var r=xo.current;Et(xo),t._currentValue=r}function Ru(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Sa(t,r){yo=t,wu=ya=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(xn=!0),t.firstContext=null)}function zn(t){var r=t._currentValue;if(wu!==t)if(t={context:t,memoizedValue:r,next:null},ya===null){if(yo===null)throw Error(n(308));ya=t,yo.dependencies={lanes:0,firstContext:t}}else ya=ya.next=t;return r}var Ni=null;function Au(t){Ni===null?Ni=[t]:Ni.push(t)}function Rh(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,Au(r)):(o.next=h.next,h.next=o),r.interleaved=o,br(t,u)}function br(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ti=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ni(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(ft&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,br(t,o)}return h=u.interleaved,h===null?(r.next=r,Au(u)):(r.next=h.next,h.next=r),u.interleaved=r,br(t,o)}function So(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,bi(t,o)}}function Ch(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Eo(t,r,o,u){var h=t.updateQueue;ti=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var G=I,le=G.next;G.next=null,E===null?g=le:E.next=le,E=G;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,I=Se.lastBaseUpdate,I!==E&&(I===null?Se.firstBaseUpdate=le:I.next=le,Se.lastBaseUpdate=G))}if(g!==null){var Ee=h.baseState;E=0,Se=le=G=null,I=g;do{var ve=I.lane,Oe=I.eventTime;if((u&ve)===ve){Se!==null&&(Se=Se.next={eventTime:Oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=t,Be=I;switch(ve=r,Oe=o,Be.tag){case 1:if(ze=Be.payload,typeof ze=="function"){Ee=ze.call(Oe,Ee,ve);break e}Ee=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Be.payload,ve=typeof ze=="function"?ze.call(Oe,Ee,ve):ze,ve==null)break e;Ee=H({},Ee,ve);break e;case 2:ti=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ve=h.effects,ve===null?h.effects=[I]:ve.push(I))}else Oe={eventTime:Oe,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Se===null?(le=Se=Oe,G=Ee):Se=Se.next=Oe,E|=ve;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(Se===null&&(G=Ee),h.baseState=G,h.firstBaseUpdate=le,h.lastBaseUpdate=Se,r=h.shared.interleaved,r!==null){h=r;do E|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Ii|=E,t.lanes=E,t.memoizedState=Ee}}function Lh(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var Ss={},cr=Qr(Ss),Es=Qr(Ss),Ms=Qr(Ss);function Di(t){if(t===Ss)throw Error(n(174));return t}function Lu(t,r){switch(xt(Ms,r),xt(Es,t),xt(cr,Ss),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ne(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Ne(r,t)}Et(cr),xt(cr,r)}function Ea(){Et(cr),Et(Es),Et(Ms)}function Ph(t){Di(Ms.current);var r=Di(cr.current),o=Ne(r,t.type);r!==o&&(xt(Es,t),xt(cr,o))}function Pu(t){Es.current===t&&(Et(cr),Et(Es))}var Rt=Qr(0);function Mo(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Nu=[];function Du(){for(var t=0;t<Nu.length;t++)Nu[t]._workInProgressVersionPrimary=null;Nu.length=0}var wo=j.ReactCurrentDispatcher,Uu=j.ReactCurrentBatchConfig,Ui=0,At=null,Ft=null,jt=null,To=!1,ws=!1,Ts=0,pv=0;function Jt(){throw Error(n(321))}function Iu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Kn(t[o],r[o]))return!1;return!0}function Ou(t,r,o,u,h,g){if(Ui=g,At=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,wo.current=t===null||t.memoizedState===null?_v:xv,t=o(u,h),ws){g=0;do{if(ws=!1,Ts=0,25<=g)throw Error(n(301));g+=1,jt=Ft=null,r.updateQueue=null,wo.current=yv,t=o(u,h)}while(ws)}if(wo.current=Ao,r=Ft!==null&&Ft.next!==null,Ui=0,jt=Ft=At=null,To=!1,r)throw Error(n(300));return t}function ku(){var t=Ts!==0;return Ts=0,t}function dr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?At.memoizedState=jt=t:jt=jt.next=t,jt}function Bn(){if(Ft===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var r=jt===null?At.memoizedState:jt.next;if(r!==null)jt=r,Ft=t;else{if(t===null)throw Error(n(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},jt===null?At.memoizedState=jt=t:jt=jt.next=t}return jt}function bs(t,r){return typeof r=="function"?r(t):r}function Fu(t){var r=Bn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Ft,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var I=E=null,G=null,le=g;do{var Se=le.lane;if((Ui&Se)===Se)G!==null&&(G=G.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:t(u,le.action);else{var Ee={lane:Se,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};G===null?(I=G=Ee,E=u):G=G.next=Ee,At.lanes|=Se,Ii|=Se}le=le.next}while(le!==null&&le!==g);G===null?E=u:G.next=I,Kn(u,r.memoizedState)||(xn=!0),r.memoizedState=u,r.baseState=E,r.baseQueue=G,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do g=h.lane,At.lanes|=g,Ii|=g,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function zu(t){var r=Bn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do g=t(g,E.action),E=E.next;while(E!==h);Kn(g,r.memoizedState)||(xn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function Nh(){}function Dh(t,r){var o=At,u=Bn(),h=r(),g=!Kn(u.memoizedState,h);if(g&&(u.memoizedState=h,xn=!0),u=u.queue,Bu(Oh.bind(null,o,u,t),[t]),u.getSnapshot!==r||g||jt!==null&&jt.memoizedState.tag&1){if(o.flags|=2048,Rs(9,Ih.bind(null,o,u,h,r),void 0,null),Wt===null)throw Error(n(349));(Ui&30)!==0||Uh(o,r,h)}return h}function Uh(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=At.updateQueue,r===null?(r={lastEffect:null,stores:null},At.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Ih(t,r,o,u){r.value=o,r.getSnapshot=u,kh(r)&&Fh(t)}function Oh(t,r,o){return o(function(){kh(r)&&Fh(t)})}function kh(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Kn(t,o)}catch{return!0}}function Fh(t){var r=br(t,1);r!==null&&tr(r,t,1,-1)}function zh(t){var r=dr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},r.queue=t,t=t.dispatch=vv.bind(null,At,t),[r.memoizedState,t]}function Rs(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=At.updateQueue,r===null?(r={lastEffect:null,stores:null},At.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function Bh(){return Bn().memoizedState}function bo(t,r,o,u){var h=dr();At.flags|=t,h.memoizedState=Rs(1|r,o,void 0,u===void 0?null:u)}function Ro(t,r,o,u){var h=Bn();u=u===void 0?null:u;var g=void 0;if(Ft!==null){var E=Ft.memoizedState;if(g=E.destroy,u!==null&&Iu(u,E.deps)){h.memoizedState=Rs(r,o,g,u);return}}At.flags|=t,h.memoizedState=Rs(1|r,o,g,u)}function Hh(t,r){return bo(8390656,8,t,r)}function Bu(t,r){return Ro(2048,8,t,r)}function Gh(t,r){return Ro(4,2,t,r)}function Vh(t,r){return Ro(4,4,t,r)}function jh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Wh(t,r,o){return o=o!=null?o.concat([t]):null,Ro(4,4,jh.bind(null,r,t),o)}function Hu(){}function Xh(t,r){var o=Bn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Iu(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function Yh(t,r){var o=Bn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Iu(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function qh(t,r,o){return(Ui&21)===0?(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=o):(Kn(o,r)||(o=pn(),At.lanes|=o,Ii|=o,t.baseState=!0),r)}function mv(t,r){var o=Ke;Ke=o!==0&&4>o?o:4,t(!0);var u=Uu.transition;Uu.transition={};try{t(!1),r()}finally{Ke=o,Uu.transition=u}}function $h(){return Bn().memoizedState}function gv(t,r,o){var u=si(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Kh(t))Zh(r,o);else if(o=Rh(t,r,o,u),o!==null){var h=un();tr(o,t,u,h),Qh(o,r,u)}}function vv(t,r,o){var u=si(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kh(t))Zh(r,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,I=g(E,o);if(h.hasEagerState=!0,h.eagerState=I,Kn(I,E)){var G=r.interleaved;G===null?(h.next=h,Au(r)):(h.next=G.next,G.next=h),r.interleaved=h;return}}catch{}finally{}o=Rh(t,r,h,u),o!==null&&(h=un(),tr(o,t,u,h),Qh(o,r,u))}}function Kh(t){var r=t.alternate;return t===At||r!==null&&r===At}function Zh(t,r){ws=To=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Qh(t,r,o){if((o&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,bi(t,o)}}var Ao={readContext:zn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},_v={readContext:zn,useCallback:function(t,r){return dr().memoizedState=[t,r===void 0?null:r],t},useContext:zn,useEffect:Hh,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,bo(4194308,4,jh.bind(null,r,t),o)},useLayoutEffect:function(t,r){return bo(4194308,4,t,r)},useInsertionEffect:function(t,r){return bo(4,2,t,r)},useMemo:function(t,r){var o=dr();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=dr();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=gv.bind(null,At,t),[u.memoizedState,t]},useRef:function(t){var r=dr();return t={current:t},r.memoizedState=t},useState:zh,useDebugValue:Hu,useDeferredValue:function(t){return dr().memoizedState=t},useTransition:function(){var t=zh(!1),r=t[0];return t=mv.bind(null,t[1]),dr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=At,h=dr();if(wt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Wt===null)throw Error(n(349));(Ui&30)!==0||Uh(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,Hh(Oh.bind(null,u,g,t),[t]),u.flags|=2048,Rs(9,Ih.bind(null,u,g,o,r),void 0,null),o},useId:function(){var t=dr(),r=Wt.identifierPrefix;if(wt){var o=Tr,u=wr;o=(u&~(1<<32-Zt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ts++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=pv++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},xv={readContext:zn,useCallback:Xh,useContext:zn,useEffect:Bu,useImperativeHandle:Wh,useInsertionEffect:Gh,useLayoutEffect:Vh,useMemo:Yh,useReducer:Fu,useRef:Bh,useState:function(){return Fu(bs)},useDebugValue:Hu,useDeferredValue:function(t){var r=Bn();return qh(r,Ft.memoizedState,t)},useTransition:function(){var t=Fu(bs)[0],r=Bn().memoizedState;return[t,r]},useMutableSource:Nh,useSyncExternalStore:Dh,useId:$h,unstable_isNewReconciler:!1},yv={readContext:zn,useCallback:Xh,useContext:zn,useEffect:Bu,useImperativeHandle:Wh,useInsertionEffect:Gh,useLayoutEffect:Vh,useMemo:Yh,useReducer:zu,useRef:Bh,useState:function(){return zu(bs)},useDebugValue:Hu,useDeferredValue:function(t){var r=Bn();return Ft===null?r.memoizedState=t:qh(r,Ft.memoizedState,t)},useTransition:function(){var t=zu(bs)[0],r=Bn().memoizedState;return[t,r]},useMutableSource:Nh,useSyncExternalStore:Dh,useId:$h,unstable_isNewReconciler:!1};function Qn(t,r){if(t&&t.defaultProps){r=H({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Gu(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:H({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Co={isMounted:function(t){return(t=t._reactInternals)?Ae(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=un(),h=si(t),g=Rr(u,h);g.payload=r,o!=null&&(g.callback=o),r=ni(t,g,h),r!==null&&(tr(r,t,h,u),So(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=un(),h=si(t),g=Rr(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=ni(t,g,h),r!==null&&(tr(r,t,h,u),So(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=un(),u=si(t),h=Rr(o,u);h.tag=2,r!=null&&(h.callback=r),r=ni(t,h,u),r!==null&&(tr(r,t,u,o),So(r,t,u))}};function Jh(t,r,o,u,h,g,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,g,E):r.prototype&&r.prototype.isPureReactComponent?!fs(o,u)||!fs(h,g):!0}function ef(t,r,o){var u=!1,h=Jr,g=r.contextType;return typeof g=="object"&&g!==null?g=zn(g):(h=_n(r)?Ci:Qt.current,u=r.contextTypes,g=(u=u!=null)?ma(t,h):Jr),r=new r(o,g),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Co,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=g),r}function tf(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&Co.enqueueReplaceState(r,r.state,null)}function Vu(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},Cu(t);var g=r.contextType;typeof g=="object"&&g!==null?h.context=zn(g):(g=_n(r)?Ci:Qt.current,h.context=ma(t,g)),h.state=t.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Gu(t,r,g,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Co.enqueueReplaceState(h,h.state,null),Eo(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ma(t,r){try{var o="",u=r;do o+=O(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:r,stack:h,digest:null}}function ju(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Wu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Sv=typeof WeakMap=="function"?WeakMap:Map;function nf(t,r,o){o=Rr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Oo||(Oo=!0,sc=u),Wu(t,r)},o}function rf(t,r,o){o=Rr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Wu(t,r)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Wu(t,r),typeof u!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),o}function af(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Sv;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=Iv.bind(null,t,r,o),r.then(t,t))}function sf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function of(t,r,o,u,h){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Rr(-1,1),r.tag=2,ni(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var Ev=j.ReactCurrentOwner,xn=!1;function ln(t,r,o,u){r.child=t===null?bh(r,null,o,u):xa(r,t.child,o,u)}function lf(t,r,o,u,h){o=o.render;var g=r.ref;return Sa(r,h),u=Ou(t,r,o,u,g,h),o=ku(),t!==null&&!xn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,Ar(t,r,h)):(wt&&o&&xu(r),r.flags|=1,ln(t,r,u,h),r.child)}function uf(t,r,o,u,h){if(t===null){var g=o.type;return typeof g=="function"&&!fc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,cf(t,r,g,u,h)):(t=Go(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(g=t.child,(t.lanes&h)===0){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:fs,o(E,u)&&t.ref===r.ref)return Ar(t,r,h)}return r.flags|=1,t=li(g,u),t.ref=r.ref,t.return=r,r.child=t}function cf(t,r,o,u,h){if(t!==null){var g=t.memoizedProps;if(fs(g,u)&&t.ref===r.ref)if(xn=!1,r.pendingProps=u=g,(t.lanes&h)!==0)(t.flags&131072)!==0&&(xn=!0);else return r.lanes=t.lanes,Ar(t,r,h)}return Xu(t,r,o,u,h)}function df(t,r,o){var u=r.pendingProps,h=u.children,g=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Ta,Ln),Ln|=o;else{if((o&1073741824)===0)return t=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,xt(Ta,Ln),Ln|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,xt(Ta,Ln),Ln|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,xt(Ta,Ln),Ln|=u;return ln(t,r,h,o),r.child}function hf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Xu(t,r,o,u,h){var g=_n(o)?Ci:Qt.current;return g=ma(r,g),Sa(r,h),o=Ou(t,r,o,u,g,h),u=ku(),t!==null&&!xn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,Ar(t,r,h)):(wt&&u&&xu(r),r.flags|=1,ln(t,r,o,h),r.child)}function ff(t,r,o,u,h){if(_n(o)){var g=!0;fo(r)}else g=!1;if(Sa(r,h),r.stateNode===null)Po(t,r),ef(r,o,u),Vu(r,o,u,h),u=!0;else if(t===null){var E=r.stateNode,I=r.memoizedProps;E.props=I;var G=E.context,le=o.contextType;typeof le=="object"&&le!==null?le=zn(le):(le=_n(o)?Ci:Qt.current,le=ma(r,le));var Se=o.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==u||G!==le)&&tf(r,E,u,le),ti=!1;var ve=r.memoizedState;E.state=ve,Eo(r,u,E,h),G=r.memoizedState,I!==u||ve!==G||vn.current||ti?(typeof Se=="function"&&(Gu(r,o,Se,u),G=r.memoizedState),(I=ti||Jh(r,o,I,u,ve,G,le))?(Ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=G),E.props=u,E.state=G,E.context=le,u=I):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{E=r.stateNode,Ah(t,r),I=r.memoizedProps,le=r.type===r.elementType?I:Qn(r.type,I),E.props=le,Ee=r.pendingProps,ve=E.context,G=o.contextType,typeof G=="object"&&G!==null?G=zn(G):(G=_n(o)?Ci:Qt.current,G=ma(r,G));var Oe=o.getDerivedStateFromProps;(Se=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Ee||ve!==G)&&tf(r,E,u,G),ti=!1,ve=r.memoizedState,E.state=ve,Eo(r,u,E,h);var ze=r.memoizedState;I!==Ee||ve!==ze||vn.current||ti?(typeof Oe=="function"&&(Gu(r,o,Oe,u),ze=r.memoizedState),(le=ti||Jh(r,o,le,u,ve,ze,G)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,ze,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,ze,G)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ze),E.props=u,E.state=ze,E.context=G,u=le):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(r.flags|=1024),u=!1)}return Yu(t,r,o,u,g,h)}function Yu(t,r,o,u,h,g){hf(t,r);var E=(r.flags&128)!==0;if(!u&&!E)return h&&vh(r,o,!1),Ar(t,r,g);u=r.stateNode,Ev.current=r;var I=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&E?(r.child=xa(r,t.child,null,g),r.child=xa(r,null,I,g)):ln(t,r,I,g),r.memoizedState=u.state,h&&vh(r,o,!0),r.child}function pf(t){var r=t.stateNode;r.pendingContext?mh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&mh(t,r.context,!1),Lu(t,r.containerInfo)}function mf(t,r,o,u,h){return _a(),Mu(h),r.flags|=256,ln(t,r,o,u),r.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function $u(t){return{baseLanes:t,cachePool:null,transitions:null}}function gf(t,r,o){var u=r.pendingProps,h=Rt.current,g=!1,E=(r.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(h&2)!==0),I?(g=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),xt(Rt,h&1),t===null)return Eu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=u.children,t=u.fallback,g?(u=r.mode,g=r.child,E={mode:"hidden",children:E},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Vo(E,u,0,null),t=zi(t,u,o,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=$u(o),r.memoizedState=qu,t):Ku(r,E));if(h=t.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return Mv(t,r,E,u,I,h,o);if(g){g=u.fallback,E=r.mode,h=t.child,I=h.sibling;var G={mode:"hidden",children:u.children};return(E&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=G,r.deletions=null):(u=li(h,G),u.subtreeFlags=h.subtreeFlags&14680064),I!==null?g=li(I,g):(g=zi(g,E,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,E=t.child.memoizedState,E=E===null?$u(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=t.childLanes&~o,r.memoizedState=qu,u}return g=t.child,t=g.sibling,u=li(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function Ku(t,r){return r=Vo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Lo(t,r,o,u){return u!==null&&Mu(u),xa(r,t.child,null,o),t=Ku(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Mv(t,r,o,u,h,g,E){if(o)return r.flags&256?(r.flags&=-257,u=ju(Error(n(422))),Lo(t,r,E,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=Vo({mode:"visible",children:u.children},h,0,null),g=zi(g,h,E,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&xa(r,t.child,null,E),r.child.memoizedState=$u(E),r.memoizedState=qu,g);if((r.mode&1)===0)return Lo(t,r,E,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var I=u.dgst;return u=I,g=Error(n(419)),u=ju(g,u,void 0),Lo(t,r,E,u)}if(I=(E&t.childLanes)!==0,xn||I){if(u=Wt,u!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,br(t,h),tr(u,t,h,-1))}return hc(),u=ju(Error(n(421))),Lo(t,r,E,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=Ov.bind(null,t),h._reactRetry=r,null):(t=g.treeContext,Cn=Zr(h.nextSibling),An=r,wt=!0,Zn=null,t!==null&&(kn[Fn++]=wr,kn[Fn++]=Tr,kn[Fn++]=Li,wr=t.id,Tr=t.overflow,Li=r),r=Ku(r,u.children),r.flags|=4096,r)}function vf(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),Ru(t.return,r,o)}function Zu(t,r,o,u,h){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function _f(t,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(ln(t,r,u.children,o),u=Rt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vf(t,o,r);else if(t.tag===19)vf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(xt(Rt,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&Mo(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Zu(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&Mo(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Zu(r,!0,o,null,g);break;case"together":Zu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Po(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Ii|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=li(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=li(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function wv(t,r,o){switch(r.tag){case 3:pf(r),_a();break;case 5:Ph(r);break;case 1:_n(r.type)&&fo(r);break;case 4:Lu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;xt(xo,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(xt(Rt,Rt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?gf(t,r,o):(xt(Rt,Rt.current&1),t=Ar(t,r,o),t!==null?t.sibling:null);xt(Rt,Rt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(t.flags&128)!==0){if(u)return _f(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),xt(Rt,Rt.current),u)break;return null;case 22:case 23:return r.lanes=0,df(t,r,o)}return Ar(t,r,o)}var xf,Qu,yf,Sf;xf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Qu=function(){},yf=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Di(cr.current);var g=null;switch(o){case"input":h=P(t,h),u=P(t,u),g=[];break;case"select":h=H({},h,{value:void 0}),u=H({},u,{value:void 0}),g=[];break;case"textarea":h=Ge(t,h),u=Ge(t,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=uo)}ie(o,u);var E;o=null;for(le in h)if(!u.hasOwnProperty(le)&&h.hasOwnProperty(le)&&h[le]!=null)if(le==="style"){var I=h[le];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(s.hasOwnProperty(le)?g||(g=[]):(g=g||[]).push(le,null));for(le in u){var G=u[le];if(I=h!=null?h[le]:void 0,u.hasOwnProperty(le)&&G!==I&&(G!=null||I!=null))if(le==="style")if(I){for(E in I)!I.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in G)G.hasOwnProperty(E)&&I[E]!==G[E]&&(o||(o={}),o[E]=G[E])}else o||(g||(g=[]),g.push(le,o)),o=G;else le==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,I=I?I.__html:void 0,G!=null&&I!==G&&(g=g||[]).push(le,G)):le==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(le,""+G):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(s.hasOwnProperty(le)?(G!=null&&le==="onScroll"&&St("scroll",t),g||I===G||(g=[])):(g=g||[]).push(le,G))}o&&(g=g||[]).push("style",o);var le=g;(r.updateQueue=le)&&(r.flags|=4)}},Sf=function(t,r,o,u){o!==u&&(r.flags|=4)};function As(t,r){if(!wt)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function en(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function Tv(t,r,o){var u=r.pendingProps;switch(yu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(r),null;case 1:return _n(r.type)&&ho(),en(r),null;case 3:return u=r.stateNode,Ea(),Et(vn),Et(Qt),Du(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(vo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Zn!==null&&(uc(Zn),Zn=null))),Qu(t,r),en(r),null;case 5:Pu(r);var h=Di(Ms.current);if(o=r.type,t!==null&&r.stateNode!=null)yf(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return en(r),null}if(t=Di(cr.current),vo(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[ur]=r,u[_s]=g,t=(r.mode&1)!==0,o){case"dialog":St("cancel",u),St("close",u);break;case"iframe":case"object":case"embed":St("load",u);break;case"video":case"audio":for(h=0;h<ms.length;h++)St(ms[h],u);break;case"source":St("error",u);break;case"img":case"image":case"link":St("error",u),St("load",u);break;case"details":St("toggle",u);break;case"input":Te(u,g),St("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},St("invalid",u);break;case"textarea":Pe(u,g),St("invalid",u)}ie(o,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var I=g[E];E==="children"?typeof I=="string"?u.textContent!==I&&(g.suppressHydrationWarning!==!0&&lo(u.textContent,I,t),h=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&lo(u.textContent,I,t),h=["children",""+I]):s.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&St("scroll",u)}switch(o){case"input":_e(u),ye(u,g,!0);break;case"textarea":_e(u),Je(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=uo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=et(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(o,{is:u.is}):(t=E.createElement(o),o==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,o),t[ur]=r,t[_s]=u,xf(t,r,!1,!1),r.stateNode=t;e:{switch(E=qt(o,u),o){case"dialog":St("cancel",t),St("close",t),h=u;break;case"iframe":case"object":case"embed":St("load",t),h=u;break;case"video":case"audio":for(h=0;h<ms.length;h++)St(ms[h],t);h=u;break;case"source":St("error",t),h=u;break;case"img":case"image":case"link":St("error",t),St("load",t),h=u;break;case"details":St("toggle",t),h=u;break;case"input":Te(t,u),h=P(t,u),St("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=H({},u,{value:void 0}),St("invalid",t);break;case"textarea":Pe(t,u),h=Ge(t,u),St("invalid",t);break;default:h=u}ie(o,h),I=h;for(g in I)if(I.hasOwnProperty(g)){var G=I[g];g==="style"?Ze(t,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ve(t,G)):g==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&Dt(t,G):typeof G=="number"&&Dt(t,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?G!=null&&g==="onScroll"&&St("scroll",t):G!=null&&S(t,g,G,E))}switch(o){case"input":_e(t),ye(t,u,!1);break;case"textarea":_e(t),Je(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Q(u.value));break;case"select":t.multiple=!!u.multiple,g=u.value,g!=null?Ie(t,!!u.multiple,g,!1):u.defaultValue!=null&&Ie(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=uo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return en(r),null;case 6:if(t&&r.stateNode!=null)Sf(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Di(Ms.current),Di(cr.current),vo(r)){if(u=r.stateNode,o=r.memoizedProps,u[ur]=r,(g=u.nodeValue!==o)&&(t=An,t!==null))switch(t.tag){case 3:lo(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(u.nodeValue,o,(t.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[ur]=r,r.stateNode=u}return en(r),null;case 13:if(Et(Rt),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Cn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mh(),_a(),r.flags|=98560,g=!1;else if(g=vo(r),u!==null&&u.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[ur]=r}else _a(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;en(r),g=!1}else Zn!==null&&(uc(Zn),Zn=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Rt.current&1)!==0?zt===0&&(zt=3):hc())),r.updateQueue!==null&&(r.flags|=4),en(r),null);case 4:return Ea(),Qu(t,r),t===null&&gs(r.stateNode.containerInfo),en(r),null;case 10:return bu(r.type._context),en(r),null;case 17:return _n(r.type)&&ho(),en(r),null;case 19:if(Et(Rt),g=r.memoizedState,g===null)return en(r),null;if(u=(r.flags&128)!==0,E=g.rendering,E===null)if(u)As(g,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(E=Mo(t),E!==null){for(r.flags|=128,As(g,!1),u=E.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,t=u,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,t=E.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return xt(Rt,Rt.current&1|2),r.child}t=t.sibling}g.tail!==null&&gt()>ba&&(r.flags|=128,u=!0,As(g,!1),r.lanes=4194304)}else{if(!u)if(t=Mo(E),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),As(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!wt)return en(r),null}else 2*gt()-g.renderingStartTime>ba&&o!==1073741824&&(r.flags|=128,u=!0,As(g,!1),r.lanes=4194304);g.isBackwards?(E.sibling=r.child,r.child=E):(o=g.last,o!==null?o.sibling=E:r.child=E,g.last=E)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=gt(),r.sibling=null,o=Rt.current,xt(Rt,u?o&1|2:o&1),r):(en(r),null);case 22:case 23:return dc(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Ln&1073741824)!==0&&(en(r),r.subtreeFlags&6&&(r.flags|=8192)):en(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function bv(t,r){switch(yu(r),r.tag){case 1:return _n(r.type)&&ho(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ea(),Et(vn),Et(Qt),Du(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Pu(r),null;case 13:if(Et(Rt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));_a()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Et(Rt),null;case 4:return Ea(),null;case 10:return bu(r.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var No=!1,tn=!1,Rv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function wa(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Lt(t,r,u)}else o.current=null}function Ju(t,r,o){try{o()}catch(u){Lt(t,r,u)}}var Ef=!1;function Av(t,r){if(du=Zs,t=Jd(),ru(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,I=-1,G=-1,le=0,Se=0,Ee=t,ve=null;t:for(;;){for(var Oe;Ee!==o||h!==0&&Ee.nodeType!==3||(I=E+h),Ee!==g||u!==0&&Ee.nodeType!==3||(G=E+u),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(Oe=Ee.firstChild)!==null;)ve=Ee,Ee=Oe;for(;;){if(Ee===t)break t;if(ve===o&&++le===h&&(I=E),ve===g&&++Se===u&&(G=E),(Oe=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Oe}o=I===-1||G===-1?null:{start:I,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(hu={focusedElem:t,selectionRange:o},Zs=!1,Fe=r;Fe!==null;)if(r=Fe,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Fe=t;else for(;Fe!==null;){r=Fe;try{var ze=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Be=ze.memoizedProps,Nt=ze.memoizedState,J=r.stateNode,q=J.getSnapshotBeforeUpdate(r.elementType===r.type?Be:Qn(r.type,Be),Nt);J.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Lt(r,r.return,we)}if(t=r.sibling,t!==null){t.return=r.return,Fe=t;break}Fe=r.return}return ze=Ef,Ef=!1,ze}function Cs(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var g=h.destroy;h.destroy=void 0,g!==void 0&&Ju(r,o,g)}h=h.next}while(h!==u)}}function Do(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function ec(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Mf(t){var r=t.alternate;r!==null&&(t.alternate=null,Mf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ur],delete r[_s],delete r[gu],delete r[cv],delete r[dv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wf(t){return t.tag===5||t.tag===3||t.tag===4}function Tf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=uo));else if(u!==4&&(t=t.child,t!==null))for(tc(t,r,o),t=t.sibling;t!==null;)tc(t,r,o),t=t.sibling}function nc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(nc(t,r,o),t=t.sibling;t!==null;)nc(t,r,o),t=t.sibling}var $t=null,Jn=!1;function ri(t,r,o){for(o=o.child;o!==null;)bf(t,r,o),o=o.sibling}function bf(t,r,o){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(or,o)}catch{}switch(o.tag){case 5:tn||wa(o,r);case 6:var u=$t,h=Jn;$t=null,ri(t,r,o),$t=u,Jn=h,$t!==null&&(Jn?(t=$t,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):$t.removeChild(o.stateNode));break;case 18:$t!==null&&(Jn?(t=$t,o=o.stateNode,t.nodeType===8?mu(t.parentNode,o):t.nodeType===1&&mu(t,o),os(t)):mu($t,o.stateNode));break;case 4:u=$t,h=Jn,$t=o.stateNode.containerInfo,Jn=!0,ri(t,r,o),$t=u,Jn=h;break;case 0:case 11:case 14:case 15:if(!tn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Ju(o,r,E),h=h.next}while(h!==u)}ri(t,r,o);break;case 1:if(!tn&&(wa(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Lt(o,r,I)}ri(t,r,o);break;case 21:ri(t,r,o);break;case 22:o.mode&1?(tn=(u=tn)||o.memoizedState!==null,ri(t,r,o),tn=u):ri(t,r,o);break;default:ri(t,r,o)}}function Rf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Rv),r.forEach(function(u){var h=kv.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function er(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=t,E=r,I=E;e:for(;I!==null;){switch(I.tag){case 5:$t=I.stateNode,Jn=!1;break e;case 3:$t=I.stateNode.containerInfo,Jn=!0;break e;case 4:$t=I.stateNode.containerInfo,Jn=!0;break e}I=I.return}if($t===null)throw Error(n(160));bf(g,E,h),$t=null,Jn=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(le){Lt(h,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Af(r,t),r=r.sibling}function Af(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(r,t),hr(t),u&4){try{Cs(3,t,t.return),Do(3,t)}catch(Be){Lt(t,t.return,Be)}try{Cs(5,t,t.return)}catch(Be){Lt(t,t.return,Be)}}break;case 1:er(r,t),hr(t),u&512&&o!==null&&wa(o,o.return);break;case 5:if(er(r,t),hr(t),u&512&&o!==null&&wa(o,o.return),t.flags&32){var h=t.stateNode;try{Dt(h,"")}catch(Be){Lt(t,t.return,Be)}}if(u&4&&(h=t.stateNode,h!=null)){var g=t.memoizedProps,E=o!==null?o.memoizedProps:g,I=t.type,G=t.updateQueue;if(t.updateQueue=null,G!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&he(h,g),qt(I,E);var le=qt(I,g);for(E=0;E<G.length;E+=2){var Se=G[E],Ee=G[E+1];Se==="style"?Ze(h,Ee):Se==="dangerouslySetInnerHTML"?Ve(h,Ee):Se==="children"?Dt(h,Ee):S(h,Se,Ee,le)}switch(I){case"input":de(h,g);break;case"textarea":ke(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Oe=g.value;Oe!=null?Ie(h,!!g.multiple,Oe,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Ie(h,!!g.multiple,g.defaultValue,!0):Ie(h,!!g.multiple,g.multiple?[]:"",!1))}h[_s]=g}catch(Be){Lt(t,t.return,Be)}}break;case 6:if(er(r,t),hr(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,g=t.memoizedProps;try{h.nodeValue=g}catch(Be){Lt(t,t.return,Be)}}break;case 3:if(er(r,t),hr(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{os(r.containerInfo)}catch(Be){Lt(t,t.return,Be)}break;case 4:er(r,t),hr(t);break;case 13:er(r,t),hr(t),h=t.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(ac=gt())),u&4&&Rf(t);break;case 22:if(Se=o!==null&&o.memoizedState!==null,t.mode&1?(tn=(le=tn)||Se,er(r,t),tn=le):er(r,t),hr(t),u&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!Se&&(t.mode&1)!==0)for(Fe=t,Se=t.child;Se!==null;){for(Ee=Fe=Se;Fe!==null;){switch(ve=Fe,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Cs(4,ve,ve.return);break;case 1:wa(ve,ve.return);var ze=ve.stateNode;if(typeof ze.componentWillUnmount=="function"){u=ve,o=ve.return;try{r=u,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(Be){Lt(u,o,Be)}}break;case 5:wa(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Pf(Ee);continue}}Oe!==null?(Oe.return=ve,Fe=Oe):Pf(Ee)}Se=Se.sibling}e:for(Se=null,Ee=t;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{h=Ee.stateNode,le?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Ee.stateNode,G=Ee.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,I.style.display=Ue("display",E))}catch(Be){Lt(t,t.return,Be)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=le?"":Ee.memoizedProps}catch(Be){Lt(t,t.return,Be)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:er(r,t),hr(t),u&4&&Rf(t);break;case 21:break;default:er(r,t),hr(t)}}function hr(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(wf(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Dt(h,""),u.flags&=-33);var g=Tf(t);nc(t,g,h);break;case 3:case 4:var E=u.stateNode.containerInfo,I=Tf(t);tc(t,I,E);break;default:throw Error(n(161))}}catch(G){Lt(t,t.return,G)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Cv(t,r,o){Fe=t,Cf(t)}function Cf(t,r,o){for(var u=(t.mode&1)!==0;Fe!==null;){var h=Fe,g=h.child;if(h.tag===22&&u){var E=h.memoizedState!==null||No;if(!E){var I=h.alternate,G=I!==null&&I.memoizedState!==null||tn;I=No;var le=tn;if(No=E,(tn=G)&&!le)for(Fe=h;Fe!==null;)E=Fe,G=E.child,E.tag===22&&E.memoizedState!==null?Nf(h):G!==null?(G.return=E,Fe=G):Nf(h);for(;g!==null;)Fe=g,Cf(g),g=g.sibling;Fe=h,No=I,tn=le}Lf(t)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Fe=g):Lf(t)}}function Lf(t){for(;Fe!==null;){var r=Fe;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:tn||Do(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!tn)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Qn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Lh(r,g,u);break;case 3:var E=r.updateQueue;if(E!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Lh(r,E,o)}break;case 5:var I=r.stateNode;if(o===null&&r.flags&4){o=I;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var Se=le.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&os(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}tn||r.flags&512&&ec(r)}catch(ve){Lt(r,r.return,ve)}}if(r===t){Fe=null;break}if(o=r.sibling,o!==null){o.return=r.return,Fe=o;break}Fe=r.return}}function Pf(t){for(;Fe!==null;){var r=Fe;if(r===t){Fe=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Fe=o;break}Fe=r.return}}function Nf(t){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Do(4,r)}catch(G){Lt(r,o,G)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(G){Lt(r,h,G)}}var g=r.return;try{ec(r)}catch(G){Lt(r,g,G)}break;case 5:var E=r.return;try{ec(r)}catch(G){Lt(r,E,G)}}}catch(G){Lt(r,r.return,G)}if(r===t){Fe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Fe=I;break}Fe=r.return}}var Lv=Math.ceil,Uo=j.ReactCurrentDispatcher,rc=j.ReactCurrentOwner,Hn=j.ReactCurrentBatchConfig,ft=0,Wt=null,Ut=null,Kt=0,Ln=0,Ta=Qr(0),zt=0,Ls=null,Ii=0,Io=0,ic=0,Ps=null,yn=null,ac=0,ba=1/0,Cr=null,Oo=!1,sc=null,ii=null,ko=!1,ai=null,Fo=0,Ns=0,oc=null,zo=-1,Bo=0;function un(){return(ft&6)!==0?gt():zo!==-1?zo:zo=gt()}function si(t){return(t.mode&1)===0?1:(ft&2)!==0&&Kt!==0?Kt&-Kt:fv.transition!==null?(Bo===0&&(Bo=pn()),Bo):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Dd(t.type)),t)}function tr(t,r,o,u){if(50<Ns)throw Ns=0,oc=null,Error(n(185));jr(t,o,u),((ft&2)===0||t!==Wt)&&(t===Wt&&((ft&2)===0&&(Io|=o),zt===4&&oi(t,Kt)),Sn(t,u),o===1&&ft===0&&(r.mode&1)===0&&(ba=gt()+500,po&&ei()))}function Sn(t,r){var o=t.callbackNode;ht(t,r);var u=wi(t,t===Wt?Kt:0);if(u===0)o!==null&&_t(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&_t(o),r===1)t.tag===0?hv(Uf.bind(null,t)):_h(Uf.bind(null,t)),lv(function(){(ft&6)===0&&ei()}),o=null;else{switch(lr(u)){case 1:o=bt;break;case 4:o=sn;break;case 16:o=kt;break;case 536870912:o=ct;break;default:o=kt}o=Gf(o,Df.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Df(t,r){if(zo=-1,Bo=0,(ft&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ra()&&t.callbackNode!==o)return null;var u=wi(t,t===Wt?Kt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=Ho(t,u);else{r=u;var h=ft;ft|=2;var g=Of();(Wt!==t||Kt!==r)&&(Cr=null,ba=gt()+500,ki(t,r));do try{Dv();break}catch(I){If(t,I)}while(!0);Tu(),Uo.current=g,ft=h,Ut!==null?r=0:(Wt=null,Kt=0,r=zt)}if(r!==0){if(r===2&&(h=ts(t),h!==0&&(u=h,r=lc(t,h))),r===1)throw o=Ls,ki(t,0),oi(t,u),Sn(t,gt()),o;if(r===6)oi(t,u);else{if(h=t.current.alternate,(u&30)===0&&!Pv(h)&&(r=Ho(t,u),r===2&&(g=ts(t),g!==0&&(u=g,r=lc(t,g))),r===1))throw o=Ls,ki(t,0),oi(t,u),Sn(t,gt()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Fi(t,yn,Cr);break;case 3:if(oi(t,u),(u&130023424)===u&&(r=ac+500-gt(),10<r)){if(wi(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){un(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=pu(Fi.bind(null,t,yn,Cr),r);break}Fi(t,yn,Cr);break;case 4:if(oi(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var E=31-Zt(u);g=1<<E,E=r[E],E>h&&(h=E),u&=~g}if(u=h,u=gt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Lv(u/1960))-u,10<u){t.timeoutHandle=pu(Fi.bind(null,t,yn,Cr),u);break}Fi(t,yn,Cr);break;case 5:Fi(t,yn,Cr);break;default:throw Error(n(329))}}}return Sn(t,gt()),t.callbackNode===o?Df.bind(null,t):null}function lc(t,r){var o=Ps;return t.current.memoizedState.isDehydrated&&(ki(t,r).flags|=256),t=Ho(t,r),t!==2&&(r=yn,yn=o,r!==null&&uc(r)),t}function uc(t){yn===null?yn=t:yn.push.apply(yn,t)}function Pv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!Kn(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oi(t,r){for(r&=~ic,r&=~Io,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Zt(r),u=1<<o;t[o]=-1,r&=~u}}function Uf(t){if((ft&6)!==0)throw Error(n(327));Ra();var r=wi(t,0);if((r&1)===0)return Sn(t,gt()),null;var o=Ho(t,r);if(t.tag!==0&&o===2){var u=ts(t);u!==0&&(r=u,o=lc(t,u))}if(o===1)throw o=Ls,ki(t,0),oi(t,r),Sn(t,gt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Fi(t,yn,Cr),Sn(t,gt()),null}function cc(t,r){var o=ft;ft|=1;try{return t(r)}finally{ft=o,ft===0&&(ba=gt()+500,po&&ei())}}function Oi(t){ai!==null&&ai.tag===0&&(ft&6)===0&&Ra();var r=ft;ft|=1;var o=Hn.transition,u=Ke;try{if(Hn.transition=null,Ke=1,t)return t()}finally{Ke=u,Hn.transition=o,ft=r,(ft&6)===0&&ei()}}function dc(){Ln=Ta.current,Et(Ta)}function ki(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,ov(o)),Ut!==null)for(o=Ut.return;o!==null;){var u=o;switch(yu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ho();break;case 3:Ea(),Et(vn),Et(Qt),Du();break;case 5:Pu(u);break;case 4:Ea();break;case 13:Et(Rt);break;case 19:Et(Rt);break;case 10:bu(u.type._context);break;case 22:case 23:dc()}o=o.return}if(Wt=t,Ut=t=li(t.current,null),Kt=Ln=r,zt=0,Ls=null,ic=Io=Ii=0,yn=Ps=null,Ni!==null){for(r=0;r<Ni.length;r++)if(o=Ni[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var E=g.next;g.next=h,u.next=E}o.pending=u}Ni=null}return t}function If(t,r){do{var o=Ut;try{if(Tu(),wo.current=Ao,To){for(var u=At.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}To=!1}if(Ui=0,jt=Ft=At=null,ws=!1,Ts=0,rc.current=null,o===null||o.return===null){zt=1,Ls=r,Ut=null;break}e:{var g=t,E=o.return,I=o,G=r;if(r=Kt,I.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var le=G,Se=I,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=Se.alternate;ve?(Se.updateQueue=ve.updateQueue,Se.memoizedState=ve.memoizedState,Se.lanes=ve.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Oe=sf(E);if(Oe!==null){Oe.flags&=-257,of(Oe,E,I,g,r),Oe.mode&1&&af(g,le,r),r=Oe,G=le;var ze=r.updateQueue;if(ze===null){var Be=new Set;Be.add(G),r.updateQueue=Be}else ze.add(G);break e}else{if((r&1)===0){af(g,le,r),hc();break e}G=Error(n(426))}}else if(wt&&I.mode&1){var Nt=sf(E);if(Nt!==null){(Nt.flags&65536)===0&&(Nt.flags|=256),of(Nt,E,I,g,r),Mu(Ma(G,I));break e}}g=G=Ma(G,I),zt!==4&&(zt=2),Ps===null?Ps=[g]:Ps.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var J=nf(g,G,r);Ch(g,J);break e;case 1:I=G;var q=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(ii===null||!ii.has(te)))){g.flags|=65536,r&=-r,g.lanes|=r;var we=rf(g,I,r);Ch(g,we);break e}}g=g.return}while(g!==null)}Ff(o)}catch(He){r=He,Ut===o&&o!==null&&(Ut=o=o.return);continue}break}while(!0)}function Of(){var t=Uo.current;return Uo.current=Ao,t===null?Ao:t}function hc(){(zt===0||zt===3||zt===2)&&(zt=4),Wt===null||(Ii&268435455)===0&&(Io&268435455)===0||oi(Wt,Kt)}function Ho(t,r){var o=ft;ft|=2;var u=Of();(Wt!==t||Kt!==r)&&(Cr=null,ki(t,r));do try{Nv();break}catch(h){If(t,h)}while(!0);if(Tu(),ft=o,Uo.current=u,Ut!==null)throw Error(n(261));return Wt=null,Kt=0,zt}function Nv(){for(;Ut!==null;)kf(Ut)}function Dv(){for(;Ut!==null&&!bn();)kf(Ut)}function kf(t){var r=Hf(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,r===null?Ff(t):Ut=r,rc.current=null}function Ff(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Tv(o,r,Ln),o!==null){Ut=o;return}}else{if(o=bv(o,r),o!==null){o.flags&=32767,Ut=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ut=null;return}}if(r=r.sibling,r!==null){Ut=r;return}Ut=r=t}while(r!==null);zt===0&&(zt=5)}function Fi(t,r,o){var u=Ke,h=Hn.transition;try{Hn.transition=null,Ke=1,Uv(t,r,o,u)}finally{Hn.transition=h,Ke=u}return null}function Uv(t,r,o,u){do Ra();while(ai!==null);if((ft&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=o.lanes|o.childLanes;if(Ti(t,g),t===Wt&&(Ut=Wt=null,Kt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ko||(ko=!0,Gf(kt,function(){return Ra(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Hn.transition,Hn.transition=null;var E=Ke;Ke=1;var I=ft;ft|=4,rc.current=null,Av(t,o),Af(o,t),ev(hu),Zs=!!du,hu=du=null,t.current=o,Cv(o),qn(),ft=I,Ke=E,Hn.transition=g}else t.current=o;if(ko&&(ko=!1,ai=t,Fo=h),g=t.pendingLanes,g===0&&(ii=null),Hl(o.stateNode),Sn(t,gt()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Oo)throw Oo=!1,t=sc,sc=null,t;return(Fo&1)!==0&&t.tag!==0&&Ra(),g=t.pendingLanes,(g&1)!==0?t===oc?Ns++:(Ns=0,oc=t):Ns=0,ei(),null}function Ra(){if(ai!==null){var t=lr(Fo),r=Hn.transition,o=Ke;try{if(Hn.transition=null,Ke=16>t?16:t,ai===null)var u=!1;else{if(t=ai,ai=null,Fo=0,(ft&6)!==0)throw Error(n(331));var h=ft;for(ft|=4,Fe=t.current;Fe!==null;){var g=Fe,E=g.child;if((Fe.flags&16)!==0){var I=g.deletions;if(I!==null){for(var G=0;G<I.length;G++){var le=I[G];for(Fe=le;Fe!==null;){var Se=Fe;switch(Se.tag){case 0:case 11:case 15:Cs(8,Se,g)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,Fe=Ee;else for(;Fe!==null;){Se=Fe;var ve=Se.sibling,Oe=Se.return;if(Mf(Se),Se===le){Fe=null;break}if(ve!==null){ve.return=Oe,Fe=ve;break}Fe=Oe}}}var ze=g.alternate;if(ze!==null){var Be=ze.child;if(Be!==null){ze.child=null;do{var Nt=Be.sibling;Be.sibling=null,Be=Nt}while(Be!==null)}}Fe=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Fe=E;else e:for(;Fe!==null;){if(g=Fe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Cs(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,Fe=J;break e}Fe=g.return}}var q=t.current;for(Fe=q;Fe!==null;){E=Fe;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,Fe=te;else e:for(E=q;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Do(9,I)}}catch(He){Lt(I,I.return,He)}if(I===E){Fe=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Fe=we;break e}Fe=I.return}}if(ft=h,ei(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(or,t)}catch{}u=!0}return u}finally{Ke=o,Hn.transition=r}}return!1}function zf(t,r,o){r=Ma(o,r),r=nf(t,r,1),t=ni(t,r,1),r=un(),t!==null&&(jr(t,1,r),Sn(t,r))}function Lt(t,r,o){if(t.tag===3)zf(t,t,o);else for(;r!==null;){if(r.tag===3){zf(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ii===null||!ii.has(u))){t=Ma(o,t),t=rf(r,t,1),r=ni(r,t,1),t=un(),r!==null&&(jr(r,1,t),Sn(r,t));break}}r=r.return}}function Iv(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=un(),t.pingedLanes|=t.suspendedLanes&o,Wt===t&&(Kt&o)===o&&(zt===4||zt===3&&(Kt&130023424)===Kt&&500>gt()-ac?ki(t,0):ic|=o),Sn(t,r)}function Bf(t,r){r===0&&((t.mode&1)===0?r=1:(r=ra,ra<<=1,(ra&130023424)===0&&(ra=4194304)));var o=un();t=br(t,r),t!==null&&(jr(t,r,o),Sn(t,o))}function Ov(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Bf(t,o)}function kv(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),Bf(t,o)}var Hf;Hf=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||vn.current)xn=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return xn=!1,wv(t,r,o);xn=(t.flags&131072)!==0}else xn=!1,wt&&(r.flags&1048576)!==0&&xh(r,go,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Po(t,r),t=r.pendingProps;var h=ma(r,Qt.current);Sa(r,o),h=Ou(null,r,u,t,h,o);var g=ku();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,_n(u)?(g=!0,fo(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Cu(r),h.updater=Co,r.stateNode=h,h._reactInternals=r,Vu(r,u,t,o),r=Yu(null,r,u,!0,g,o)):(r.tag=0,wt&&g&&xu(r),ln(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Po(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=zv(u),t=Qn(u,t),h){case 0:r=Xu(null,r,u,t,o);break e;case 1:r=ff(null,r,u,t,o);break e;case 11:r=lf(null,r,u,t,o);break e;case 14:r=uf(null,r,u,Qn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),Xu(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),ff(t,r,u,h,o);case 3:e:{if(pf(r),t===null)throw Error(n(387));u=r.pendingProps,g=r.memoizedState,h=g.element,Ah(t,r),Eo(r,u,null,o);var E=r.memoizedState;if(u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ma(Error(n(423)),r),r=mf(t,r,u,o,h);break e}else if(u!==h){h=Ma(Error(n(424)),r),r=mf(t,r,u,o,h);break e}else for(Cn=Zr(r.stateNode.containerInfo.firstChild),An=r,wt=!0,Zn=null,o=bh(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_a(),u===h){r=Ar(t,r,o);break e}ln(t,r,u,o)}r=r.child}return r;case 5:return Ph(r),t===null&&Eu(r),u=r.type,h=r.pendingProps,g=t!==null?t.memoizedProps:null,E=h.children,fu(u,h)?E=null:g!==null&&fu(u,g)&&(r.flags|=32),hf(t,r),ln(t,r,E,o),r.child;case 6:return t===null&&Eu(r),null;case 13:return gf(t,r,o);case 4:return Lu(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=xa(r,null,u,o):ln(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),lf(t,r,u,h,o);case 7:return ln(t,r,r.pendingProps,o),r.child;case 8:return ln(t,r,r.pendingProps.children,o),r.child;case 12:return ln(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,E=h.value,xt(xo,u._currentValue),u._currentValue=E,g!==null)if(Kn(g.value,E)){if(g.children===h.children&&!vn.current){r=Ar(t,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var I=g.dependencies;if(I!==null){E=g.child;for(var G=I.firstContext;G!==null;){if(G.context===u){if(g.tag===1){G=Rr(-1,o&-o),G.tag=2;var le=g.updateQueue;if(le!==null){le=le.shared;var Se=le.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),le.pending=G}}g.lanes|=o,G=g.alternate,G!==null&&(G.lanes|=o),Ru(g.return,o,r),I.lanes|=o;break}G=G.next}}else if(g.tag===10)E=g.type===r.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(n(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Ru(E,o,r),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===r){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}ln(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Sa(r,o),h=zn(h),u=u(h),r.flags|=1,ln(t,r,u,o),r.child;case 14:return u=r.type,h=Qn(u,r.pendingProps),h=Qn(u.type,h),uf(t,r,u,h,o);case 15:return cf(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Qn(u,h),Po(t,r),r.tag=1,_n(u)?(t=!0,fo(r)):t=!1,Sa(r,o),ef(r,u,h),Vu(r,u,h,o),Yu(null,r,u,!0,t,o);case 19:return _f(t,r,o);case 22:return df(t,r,o)}throw Error(n(156,r.tag))};function Gf(t,r){return at(t,r)}function Fv(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,r,o,u){return new Fv(t,r,o,u)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zv(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===B)return 11;if(t===me)return 14}return 2}function li(t,r){var o=t.alternate;return o===null?(o=Gn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Go(t,r,o,u,h,g){var E=2;if(u=t,typeof t=="function")fc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case N:return zi(o.children,h,g,r);case ae:E=8,h|=8;break;case K:return t=Gn(12,o,r,h|2),t.elementType=K,t.lanes=g,t;case ee:return t=Gn(13,o,r,h),t.elementType=ee,t.lanes=g,t;case Z:return t=Gn(19,o,r,h),t.elementType=Z,t.lanes=g,t;case se:return Vo(o,h,g,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ne:E=10;break e;case pe:E=9;break e;case B:E=11;break e;case me:E=14;break e;case Me:E=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Gn(E,o,r,h),r.elementType=t,r.type=u,r.lanes=g,r}function zi(t,r,o,u){return t=Gn(7,t,u,r),t.lanes=o,t}function Vo(t,r,o,u){return t=Gn(22,t,u,r),t.elementType=se,t.lanes=o,t.stateNode={isHidden:!1},t}function pc(t,r,o){return t=Gn(6,t,null,r),t.lanes=o,t}function mc(t,r,o){return r=Gn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Bv(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$n(0),this.expirationTimes=$n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$n(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function gc(t,r,o,u,h,g,E,I,G){return t=new Bv(t,r,o,I,G),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Gn(3,null,null,r),t.current=g,g.stateNode=t,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(g),t}function Hv(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function Vf(t){if(!t)return Jr;t=t._reactInternals;e:{if(Ae(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(_n(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(_n(o))return gh(t,o,r)}return r}function jf(t,r,o,u,h,g,E,I,G){return t=gc(o,u,!0,t,h,g,E,I,G),t.context=Vf(null),o=t.current,u=un(),h=si(o),g=Rr(u,h),g.callback=r??null,ni(o,g,h),t.current.lanes=h,jr(t,h,u),Sn(t,u),t}function jo(t,r,o,u){var h=r.current,g=un(),E=si(h);return o=Vf(o),r.context===null?r.context=o:r.pendingContext=o,r=Rr(g,E),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=ni(h,r,E),t!==null&&(tr(t,h,E,g),So(t,h,E)),E}function Wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function vc(t,r){Wf(t,r),(t=t.alternate)&&Wf(t,r)}function Gv(){return null}var Xf=typeof reportError=="function"?reportError:function(t){console.error(t)};function _c(t){this._internalRoot=t}Xo.prototype.render=_c.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));jo(t,r,null,null)},Xo.prototype.unmount=_c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Oi(function(){jo(null,t,null,null)}),r[Er]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var r=on();t={blockedOn:null,target:t,priority:r};for(var o=0;o<qr.length&&r!==0&&r<qr[o].priority;o++);qr.splice(o,0,t),o===0&&Pd(t)}};function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yf(){}function Vv(t,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var le=Wo(E);g.call(le)}}var E=jf(r,u,t,0,null,!1,!1,"",Yf);return t._reactRootContainer=E,t[Er]=E.current,gs(t.nodeType===8?t.parentNode:t),Oi(),E}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var I=u;u=function(){var le=Wo(G);I.call(le)}}var G=gc(t,0,!1,null,null,!1,!1,"",Yf);return t._reactRootContainer=G,t[Er]=G.current,gs(t.nodeType===8?t.parentNode:t),Oi(function(){jo(r,G,o,u)}),G}function qo(t,r,o,u,h){var g=o._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var I=h;h=function(){var G=Wo(E);I.call(G)}}jo(r,E,t,h)}else E=Vv(o,r,t,h,u);return Wo(E)}ia=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Vr(r.pendingLanes);o!==0&&(bi(r,o|1),Sn(r,gt()),(ft&6)===0&&(ba=gt()+500,ei()))}break;case 13:Oi(function(){var u=br(t,1);if(u!==null){var h=un();tr(u,t,1,h)}}),vc(t,1)}},mn=function(t){if(t.tag===13){var r=br(t,134217728);if(r!==null){var o=un();tr(r,t,134217728,o)}vc(t,134217728)}},gn=function(t){if(t.tag===13){var r=si(t),o=br(t,r);if(o!==null){var u=un();tr(o,t,r,u)}vc(t,r)}},on=function(){return Ke},aa=function(t,r){var o=Ke;try{return Ke=t,r()}finally{Ke=o}},Fr=function(t,r,o){switch(r){case"input":if(de(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=co(u);if(!h)throw Error(n(90));Ce(u),de(u,h)}}}break;case"textarea":ke(t,o);break;case"select":r=o.value,r!=null&&Ie(t,!!o.multiple,r,!1)}},Xn=cc,sr=Oi;var jv={usingClientEntryPoint:!1,Events:[xs,fa,co,Sr,On,cc]},Ds={findFiberByHostInstance:Ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wv={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nt(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||Gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{or=$o.inject(Wv),fn=$o}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv,En.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(r))throw Error(n(200));return Hv(t,r,null,o)},En.createRoot=function(t,r){if(!xc(t))throw Error(n(299));var o=!1,u="",h=Xf;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=gc(t,1,!1,null,null,o,!1,u,h),t[Er]=r.current,gs(t.nodeType===8?t.parentNode:t),new _c(r)},En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=nt(r),t=t===null?null:t.stateNode,t},En.flushSync=function(t){return Oi(t)},En.hydrate=function(t,r,o){if(!Yo(r))throw Error(n(200));return qo(null,t,r,!0,o)},En.hydrateRoot=function(t,r,o){if(!xc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",E=Xf;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),r=jf(r,null,t,1,o??null,h,!1,g,E),t[Er]=r.current,gs(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Xo(r)},En.render=function(t,r,o){if(!Yo(r))throw Error(n(200));return qo(null,t,r,!1,o)},En.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(n(40));return t._reactRootContainer?(Oi(function(){qo(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1},En.unstable_batchedUpdates=cc,En.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Yo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qo(t,r,o,!1,u)},En.version="18.3.1-next-f1338f8080-20240426",En}var tp;function Jv(){if(tp)return Ec.exports;tp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ec.exports=Qv(),Ec.exports}var np;function e_(){if(np)return Ko;np=1;var a=Jv();return Ko.createRoot=a.createRoot,Ko.hydrateRoot=a.hydrateRoot,Ko}var t_=e_();const Nl="escape-room-beit-midrash",n_="escape-complete",r_="escape-ready",i_="escape-journey-stars",a_="escape-fullscreen-toggle",ad=3;function Xs(){if(typeof window>"u")return!1;if(new URLSearchParams(window.location.search).get("embed")==="1")return!0;try{return window.parent!==window}catch{return!0}}function xd(){return!1}function rp(a){if(a==null||a==="")return null;const e=Number(a);return!Number.isFinite(e)||e<0?null:Math.floor(e)}function s_(){if(typeof window>"u")return 0;const a=rp(new URLSearchParams(window.location.search).get("journeyStars"));if(a!=null)return a;try{const e=window.location.hash.replace(/^#/,"");if(e.includes("=")){const n=rp(new URLSearchParams(e).get("journeyStars"));if(n!=null)return n}}catch{}return 0}function o_(a){if(!a||typeof a!="object")return!1;const e=a;return e.source===Nl&&e.type===i_&&typeof e.journeyStars=="number"&&Number.isFinite(e.journeyStars)&&e.journeyStars>=0}function l_(a){var n;if(typeof window>"u")return;const e={source:Nl,type:n_,stars:a==null?void 0:a.stars};try{window.parent.postMessage(e,"*")}catch{}try{(n=window.opener)==null||n.postMessage(e,"*")}catch{}}function u_(){if(!(typeof window>"u"))try{window.parent.postMessage({source:Nl,type:r_},"*")}catch{}}const c_="menavtim_want_fullscreen",Tl="immersive-fs";function d_(){if(typeof navigator>"u")return!1;const a=navigator.userAgent;return/iPad|iPhone|iPod/.test(a)?!0:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Lm(){const a=document;return document.fullscreenElement??a.webkitFullscreenElement??null}function Tc(){return!!Lm()||document.documentElement.classList.contains(Tl)}function Zo(a){try{localStorage.setItem(c_,a?"1":"0")}catch{}}function Qo(a){var e;document.documentElement.classList.toggle(Tl,a),(e=document.body)==null||e.classList.toggle(Tl,a),a&&window.scrollTo(0,1)}async function h_(a){const e=a;try{if(typeof e.requestFullscreen=="function")return await e.requestFullscreen(),!0;if(typeof e.webkitRequestFullscreen=="function")return await e.webkitRequestFullscreen(),!0;if(typeof e.webkitRequestFullScreen=="function")return await e.webkitRequestFullScreen(),!0}catch{return!1}return!1}async function f_(){const a=document;try{if(document.fullscreenElement&&document.exitFullscreen){await document.exitFullscreen();return}a.webkitFullscreenElement&&a.webkitExitFullscreen&&await a.webkitExitFullscreen()}catch{}}function p_(){try{window.parent.postMessage({source:Nl,type:a_},"*")}catch{}}async function m_(){return Xs()?(p_(),"delegated"):Lm()?(await f_(),Qo(!1),Zo(!1),"off"):document.documentElement.classList.contains(Tl)?(Qo(!1),Zo(!1),"off"):await h_(document.documentElement)?(Qo(!1),Zo(!0),"on"):(Qo(!0),Zo(!0),"immersive")}function g_(a){const e=()=>a();return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),window.addEventListener("resize",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),window.removeEventListener("resize",e)}}function sd({className:a="",compact:e=!0}){const[n,i]=re.useState(()=>Tc()),[s,l]=re.useState(null);re.useEffect(()=>g_(()=>i(Tc())),[]);const c=re.useCallback(async()=>{const f=await m_();i(Tc()||f==="on"||f==="immersive"||f==="delegated"),f==="immersive"||f==="delegated"&&d_()?(l("ב־iPhone מסך מלא מלא מוגבל — מצב מוגדל הופעל. אפשר גם «הוסף למסך הבית»."),window.setTimeout(()=>l(null),4500)):l(null)},[]),p=n?"יציאה ממסך מלא":"מסך מלא";return L.jsxs("div",{className:`fs-toggle-wrap ${a}`.trim(),children:[L.jsxs("button",{type:"button",className:`fs-toggle${e?" fs-toggle--compact":""}${n?" fs-toggle--on":""}`,onClick:c,"aria-pressed":n,"aria-label":p,title:p,children:[L.jsx("span",{className:"fs-toggle__icon","aria-hidden":"true",children:n?L.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[L.jsx("path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}),L.jsx("path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}),L.jsx("path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}),L.jsx("path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"})]}):L.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[L.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}),L.jsx("path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}),L.jsx("path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}),L.jsx("path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"})]})}),!e&&L.jsx("span",{className:"fs-toggle__text",children:p})]}),s&&L.jsx("p",{className:"fs-toggle__hint",role:"status",children:s})]})}function v_({onStart:a}){const e=!Xs();return L.jsxs("div",{className:"landing-screen",children:[e&&L.jsx("div",{className:"landing-fs",children:L.jsx(sd,{})}),L.jsxs("div",{className:"landing-card",children:[L.jsx("div",{className:"landing-seal","aria-hidden":"true",children:"📜"}),L.jsx("h1",{children:"הצופן הארמי"}),L.jsx("p",{className:"landing-lead",children:"חדר סודי מחכה מאחורי המנעול — המשימה שלכם: לפענח את הצופן הארמי, ספרה אחר ספרה."}),L.jsx("p",{className:"landing-process-intro",children:"כך זה עובד — שלושה שלבים שחוזרים על עצמם:"}),L.jsxs("ol",{className:"landing-steps",children:[L.jsxs("li",{children:[L.jsx("span",{className:"landing-step-label",children:"חפץ"}),"מצאו את החפץ בחדר לפי ההוראה בראש המסך."]}),L.jsxs("li",{children:[L.jsx("span",{className:"landing-step-label",children:"מחשבון"}),"פתרו את החידה, ואז חשבו גימטרייה בלשונית המחשבון בצד. (מילה בארמית לא ברורה? הקישו עליה — תרגום לעברית יופיע מעליה.)"]}),L.jsxs("li",{children:[L.jsx("span",{className:"landing-step-label",children:"מנעול"}),"פתחו את לשונית המנעול בצד השני, סובבו את החוגה לספרה הנכונה ואז לחצו «הזן»."]})]}),L.jsx("p",{className:"landing-note",children:"אחרי עשר ספרות המנעול נפתח — והדרך לחדר הסודי מתגלה…"}),L.jsxs("div",{className:"landing-mobile-tips",children:[L.jsx("p",{className:"landing-mobile-tips__title",children:"טיפים לטלפון"}),L.jsxs("ul",{children:[L.jsx("li",{children:"גררו באצבע כדי להסתכל מסביב ב־360°."}),L.jsx("li",{children:"חפשו זוהר על חפצים — הארון זוהר בהתחלה."}),L.jsx("li",{children:"לשוניות הצד: מחשבון מצד אחד, מנעול מהצד השני."})]})]}),L.jsxs("div",{className:"landing-desktop-tips","aria-hidden":"false",children:[L.jsx("p",{className:"landing-desktop-tips__title",children:"במחשב"}),L.jsxs("ul",{children:[L.jsx("li",{children:"גררו עם העכבר כדי להסתובב בחדר."}),L.jsx("li",{children:"העבירו עכבר או לחצו על חפצים (רק הארון זוהר בהתחלה)."})]})]}),L.jsx("button",{type:"button",className:"btn-primary btn-large",onClick:a,children:"כניסה להצופן הארמי"})]})]})}function __(a,e){return{yaw:a/100*360-180,pitch:(50-e)/100*180}}function Xa(a,e){const n=a*Math.PI/180,i=e*Math.PI/180,s=Math.cos(i);return[-s*Math.cos(n),Math.sin(i),-s*Math.sin(n)]}function fr(a,e,n){return{...__(a,e),flatX:a,flatY:e,radiusPx:n}}const Xi=[{id:1,object:"ארון",aramaic:"יקיד ונהיר. מאי ניהו?",aramaicDisplay:"יָקִיד וְנָהִיר. מַאי נִיהוּ?",hebrew:"בוער ומאיר. מה זה?",hebrewDisplay:"בּוֹעֵר וּמֵאִיר. מַה זֶּה?",wordGlosses:[{aramaic:"יָקִיד",hebrew:"בּוֹעֵר"},{aramaic:"וְנָהִיר",hebrew:"וּמֵאִיר"},{aramaic:"מַאי",hebrew:"מָה"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["שרגא","נהורא","יומא"],optionsDisplay:["שַׁרְגָא","נְהוֹרָא","יוֹמָא"],answer:"שרגא",letters:[["ש",300],["ר",200],["ג",3],["א",1]],total:504,dialDigit:4,hotspot:fr(30,34,56)},{id:2,object:"שרגא",aramaic:"לית ליה טעם. מאי ניהו?",aramaicDisplay:"לֵית לֵיהּ טַעְמָא. מַאי נִיהוּ?",hebrew:"אין לו טעם. מה זה?",hebrewDisplay:"אֵין לוֹ טַעַם. מַה זֶּה?",wordGlosses:[{aramaic:"לֵית",hebrew:"אֵין"},{aramaic:"לֵיהּ",hebrew:"לוֹ"},{aramaic:"טַעְמָא",hebrew:"טַעַם"},{aramaic:"מַאי",hebrew:"מָה"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["מיא","חמרא","נהמא"],optionsDisplay:["מַיָּא","חַמְרָא","נַהֲמָא"],answer:"מיא",letters:[["מ",40],["י",10],["א",1]],total:51,dialDigit:1,hotspot:fr(7,26,48)},{id:3,object:"מיא",aramaic:"יתיב וגמיר כל יומא. מאן ניהו?",aramaicDisplay:"יָתֵיב וְגָמֵיר כָּל יוֹמָא. מַאן נִיהוּ?",hebrew:"יושב ולומד כל יום. מי זה?",hebrewDisplay:"יוֹשֵׁב וְלוֹמֵד כָּל יוֹם. מִי זֶה?",wordGlosses:[{aramaic:"יָתֵיב",hebrew:"יוֹשֵׁב"},{aramaic:"וְגָמֵיר",hebrew:"וְלוֹמֵד"},{aramaic:"כָּל",hebrew:"כָּל"},{aramaic:"יוֹמָא",hebrew:"יוֹם"},{aramaic:"מַאן",hebrew:"מִי"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["תלמידא","רבי","גברא"],optionsDisplay:["תַּלְמִידָא","רַבִּי","גַּבְרָא"],answer:"תלמידא",letters:[["ת",400],["ל",30],["מ",40],["י",10],["ד",4],["א",1]],total:485,dialDigit:5,hotspot:fr(19,76,50)},{id:4,object:"תלמידא",aramaic:"ממליל, וכולהון שתקין. מאן ניהו?",aramaicDisplay:"מְמַלֵּל, וְכוּלְהוֹן שׁוּתְקִין. מַאן נִיהוּ?",hebrew:"מדבר, וכולם שותקים. מי זה?",hebrewDisplay:"מְדַבֵּר, וְכֻלָּם שׁוֹתְקִים. מִי זֶה?",wordGlosses:[{aramaic:"מְמַלֵּל",hebrew:"מְדַבֵּר"},{aramaic:"וְכוּלְהוֹן",hebrew:"וְכֻלָּם"},{aramaic:"שׁוּתְקִין",hebrew:"שׁוֹתְקִים"},{aramaic:"מַאן",hebrew:"מִי"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["רבי","תלמידא","כלבא"],optionsDisplay:["רַבִּי","תַּלְמִידָא","כַּלְבָּא"],answer:"רבי",letters:[["ר",200],["ב",2],["י",10]],total:212,dialDigit:2,hotspot:fr(60,50,58)},{id:5,object:"רבי",aramaic:"פתח לנהורא. מאי ניהו?",aramaicDisplay:"פָּתַח לִנְהוֹרָא. מַאי נִיהוּ?",hebrew:"פותח לאור. מה זה?",hebrewDisplay:"פּוֹתֵחַ לָאוֹר. מַה זֶּה?",wordGlosses:[{aramaic:"פָּתַח",hebrew:"פּוֹתֵחַ"},{aramaic:"לִנְהוֹרָא",hebrew:"לָאוֹר"},{aramaic:"מַאי",hebrew:"מָה"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["חלון","תרעא","שרגא"],optionsDisplay:["חַלּוֹן","תַּרְעָא","שַׁרְגָא"],answer:"חלון",letters:[["ח",8],["ל",30],["ו",6],["נ",50]],total:94,dialDigit:4,hotspot:fr(51,42,56)},{id:6,object:"חלון",aramaic:"מלא מלין, ולא ממליל. מאי ניהו?",aramaicDisplay:"מְלֵי מִילִין, וְלָא מְמַלֵּל. מַאי נִיהוּ?",hebrew:"מלא מילים, ולא מדבר. מה זה?",hebrewDisplay:"מָלֵא מִילִים, וְלֹא מְדַבֵּר. מַה זֶּה?",wordGlosses:[{aramaic:"מְלֵי",hebrew:"מָלֵא"},{aramaic:"מִילִין",hebrew:"מִילִים"},{aramaic:"וְלָא",hebrew:"וְלֹא"},{aramaic:"מְמַלֵּל",hebrew:"מְדַבֵּר"},{aramaic:"מַאי",hebrew:"מָה"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["ספרא","גברא","תרעא"],optionsDisplay:["סִפְרָא","גַּבְרָא","תַּרְעָא"],answer:"ספרא",letters:[["ס",60],["פ",80],["ר",200],["א",1]],total:341,dialDigit:1,hotspot:fr(12,38,48)},{id:7,object:"ספרא",aramaic:"עליה יתבין תלמידיא וגמרין. מאי ניהו?",aramaicDisplay:"עֲלַהּ יָתְבִין תַּלְמִידַיָּא וְגָמְרִין. מַאי נִיהוּ?",hebrew:"עליה יושבים התלמידים ולומדים. מה זה?",hebrewDisplay:"עָלֶיהָ יוֹשְׁבִים הַתַּלְמִידִים וְלוֹמְדִים. מַה זֶּה?",wordGlosses:[{aramaic:"עֲלַהּ",hebrew:"עָלֶיהָ"},{aramaic:"יָתְבִין",hebrew:"יוֹשְׁבִים"},{aramaic:"תַּלְמִידַיָּא",hebrew:"הַתַּלְמִידִים"},{aramaic:"וְגָמְרִין",hebrew:"וְלוֹמְדִים"},{aramaic:"מַאי",hebrew:"מָה"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["ספסלא","פתורא","ערסא"],optionsDisplay:["סַפְסְלָא","פָּתוֹרָא","עַרְסָא"],answer:"ספסלא",letters:[["ס",60],["פ",80],["ס",60],["ל",30],["א",1]],total:231,dialDigit:1,hotspot:fr(34,62,60)},{id:8,object:"ספסלא",aramaic:"כולהון עיילין ביה. מאי ניהו?",aramaicDisplay:"כוּלְהוֹן עָיְלִין בֵּיהּ. מַאי נִיהוּ?",hebrew:"כולם נכנסים בו. מה זה?",hebrewDisplay:"כֻּלָּם נִכְנָסִים בּוֹ. מַה זֶּה?",wordGlosses:[{aramaic:"כוּלְהוֹן",hebrew:"כֻּלָּם"},{aramaic:"עָיְלִין",hebrew:"נִכְנָסִים"},{aramaic:"בֵּיהּ",hebrew:"בּוֹ"},{aramaic:"מַאי",hebrew:"מָה"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["תרעא","ביתא","עמודא"],optionsDisplay:["תַּרְעָא","בֵּיתָא","עַמּוּדָא"],answer:"תרעא",letters:[["ת",400],["ר",200],["ע",70],["א",1]],total:671,dialDigit:1,hotspot:fr(4,62,48)},{id:9,object:"תרעא",aramaic:"אחיד בידא וכתבין בה מלין. מאי ניהו?",aramaicDisplay:"אֲחִיד בִּידָא וְכָתְבִין בַּהּ מִילִין. מַאי נִיהוּ?",hebrew:"אוחזים ביד וכותבים בו מילים. מה זה?",hebrewDisplay:"אוֹחֲזִים בַּיָּד וְכוֹתְבִים בּוֹ מִילִים. מַה זֶּה?",wordGlosses:[{aramaic:"אֲחִיד",hebrew:"אוֹחֲזִים"},{aramaic:"בִּידָא",hebrew:"בַּיָּד"},{aramaic:"וְכָתְבִין",hebrew:"וְכוֹתְבִים"},{aramaic:"בַּהּ",hebrew:"בּוֹ"},{aramaic:"מִילִין",hebrew:"מִילִים"},{aramaic:"מַאי",hebrew:"מָה"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["קולמוס","סכין","שרגא"],optionsDisplay:["קוּלְמוֹס","סַכִּין","שַׁרְגָא"],answer:"קולמוס",letters:[["ק",100],["ו",6],["ל",30],["מ",40],["ו",6],["ס",60]],total:242,dialDigit:2,hotspot:fr(96,45,56)},{id:10,object:"קולמוס",aramaic:"נפיק מפומא, ולא הדר. מאי ניהי?",aramaicDisplay:"נָפֵיק מִפּוּמָא, וְלָא הָדַר. מַאי נִיהוּ?",hebrew:"יוצא מהפה, ולא חוזר. מה זה?",hebrewDisplay:"יוֹצֵא מִן הַפֶּה, וְלֹא חוֹזֵר. מַה זֶּה?",wordGlosses:[{aramaic:"נָפֵיק",hebrew:"יוֹצֵא"},{aramaic:"מִפּוּמָא",hebrew:"מֵהַפֶּה"},{aramaic:"וְלָא",hebrew:"וְלֹא"},{aramaic:"הָדַר",hebrew:"חוֹזֵר"},{aramaic:"מַאי",hebrew:"מָה"},{aramaic:"נִיהוּ",hebrew:"זֶה"}],options:["פתגמא","מילתא","נהורא"],optionsDisplay:["פִּתְגָמָא","מִילְתָא","נְהוֹרָא"],answer:"פתגמא",letters:[["פ",80],["ת",400],["ג",3],["מ",40],["א",1]],total:524,dialDigit:4,hotspot:fr(28,74,46)}];function x_(a){const e=[...a];for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function y_(a){return Math.abs(a)%10}function yd(a,e){const n=a.options.indexOf(e);return n>=0&&a.optionsDisplay?a.optionsDisplay[n]:e}function S_(a){return a<0||a>=Xi.length?null:Xi[a].object}function E_(){return{currentRiddleIndex:0,solvedCount:0,dialDigits:Array(10).fill(null),lockUnlocked:!1}}function M_(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("debug")==="1"}function Pm(a){return a.replace(/[\u0591-\u05C7]/g,"")}function w_(a){return a.replace(/ך/g,"כ").replace(/ם/g,"מ").replace(/ן/g,"נ").replace(/ף/g,"פ").replace(/ץ/g,"צ")}function Dl(a){const e=Pm(a).replace(/[\u200f\u200e\u200d]/g,"").replace(/['׳״"`]/g,"").trim();return w_(e)}function T_(a){return Pm(a).split(/[^\u0590-\u05FFa-zA-Z]+/u).map(i=>i.trim()).filter(Boolean)}const b_=2,ip={letterString:"",total:0,finalDigit:null,letterCount:0};function Nm(a){return a.letters.map(([e])=>e).join("")}function R_(a){return yd(a,a.answer)}function Hs(a){return Dl(a)}function A_(a,e){const n=Hs(a);if(!n)return!1;const i=Hs(Nm(e)),s=Hs(e.answer);return n===i||n===s}function bc(a,e){return a.finalDigit===null||a.finalDigit!==e.dialDigit?!1:A_(a.letterString,e)||a.total===e.total}function C_(a,e,n){if(n.emptyStuck&&a.letterCount===0)return"empty";const i=Hs(a.letterString),s=Hs(Nm(e));if(i.length>0){const l=i.length>s.length,c=i.length>=s.length&&i!==s,p=i.length>=2&&!s.startsWith(i);if(l||c||p)return"wrong-letters"}return n.wrongDigitStuck&&a.finalDigit!==null&&a.finalDigit!==e.dialDigit&&a.letterCount>=Math.max(2,s.length-1)?"wrong-digit":null}function ap(a){return!!(a.elevatedAlready||a.lockWrongAttempts>=2||a.calcMistakeHits>=2||a.msOnGematria>=75e3)}function L_(a){const e=a.answerWord,n=a.dialDigit;return a.mistake==="wrong-lock"?a.explicit?`הספרה לא מתאימה. חזרו למחשבון, בדקו את הספרה האחרונה של «${e}», ואז הזינו אותה במנעול.`:"לא נכון — בדקו שוב את הספרה האחרונה במחשבון הגימטריה.":a.mistake==="wrong-letters"?`נראה שהאותיות לא תואמות ל«${e}». מחקו והקישו את המילה בדיוק כפי שמופיעה.`:a.mistake==="wrong-digit"?`הספרה האחרונה לא נראית נכונה — בדקו את איות «${e}» במחשבון הגימטריה.`:a.mistake==="empty"?a.explicit?`פתחו את לשונית «גימטריה» והקישו אות־אות את «${e}». אחר כך הביטו בספרה האחרונה של הסכום.`:`הקישו את «${e}» במחשבון הגימטריה וקחו את הספרה האחרונה.`:a.step==="calc"?a.explicit?"פתחו את לשונית «גימטריה» והקישו את אותיות התשובה. הביטו בספרה האחרונה של הסכום — זו הספרה למנעול.":"הקישו את המילה במחשבון הגימטריה וקחו את הספרה האחרונה.":a.explicit?`מעולה! עכשיו פתחו את לשונית «מנעול», סובבו את החוגה לספרה ${n}, ולחצו «הזן».`:`פתחו את המנעול, סובבו לספרה ${n} ולחצו «הזן».`}function Dm(a,e){const n="/menavtim/escape-room/",i=n.endsWith("/")?n:`${n}/`,s=a.replace(/^\//,"");return`${i}${s}?v=${e}`}const Um=Dm("beit-midrash-mishna-ceiling-lamps.png","marks1"),Im=Dm("inner-room-360.png","1"),pr={yaw:0,pitch:-18,radiusPx:110,flatX:50,flatY:62};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="160",Aa={ROTATE:0,DOLLY:1,PAN:2},Ca={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Om=1,P_=2,Ir=3,xi=0,wn=1,Wi=100,ld=204,ud=205,km=0,N_=1,D_=2,_i=0,U_=1,I_=2,O_=3,k_=4,F_=5,z_=6,Fm=300,qa=301,$a=302,cd=303,dd=304,Ul=306,hd=1e3,Or=1001,fd=1002,dn=1003,sp=1004,Rc=1005,ar=1006,B_=1007,bl=1008,Yi=1009,Sd=1012,zm=1013,gi=1014,vi=1015,js=1016,Bm=1017,Hm=1018,qi=1020,gr=1023,$i=1026,Ka=1027,Gm=1029,Vm=1031,jm=1033,Ac=33776,Cc=33777,Lc=33778,Pc=33779,op=35840,lp=35841,up=35842,cp=35843,Wm=36196,dp=37492,hp=37496,fp=37808,pp=37809,mp=37810,gp=37811,vp=37812,_p=37813,xp=37814,yp=37815,Sp=37816,Ep=37817,Mp=37818,wp=37819,Tp=37820,bp=37821,Nc=36492,Rp=36494,Ap=36495,Cp=36284,Lp=36285,Pp=36286,Xm=3e3,Ki=3001,vr="",Bt="srgb",kr="srgb-linear",Ed="display-p3",Il="display-p3-linear",Rl="linear",Mt="srgb",Al="rec709",Cl="p3",La=7680,Np=35044,Dp="300 es",pd=1035,Za=2e3,Ll=2001;class ea{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ml=Math.PI/180,md=180/Math.PI;function Ys(){const a=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(nn[255&a]+nn[a>>8&255]+nn[a>>16&255]+nn[a>>24&255]+"-"+nn[255&e]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[63&n|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[255&i]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function hn(a,e,n){return Math.max(e,Math.min(n,a))}function H_(a,e){return(a%e+e)%e}function Dc(a,e,n){return(1-n)*a+n*e}function Up(a){return(a&a-1)==0&&a!==0}function gd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Is(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Mn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(4294967295*a);case Uint16Array:return Math.round(65535*a);case Uint8Array:return Math.round(255*a);case Int32Array:return Math.round(2147483647*a);case Int16Array:return Math.round(32767*a);case Int8Array:return Math.round(127*a);default:throw new Error("Invalid component type.")}}const G_={DEG2RAD:Ml};class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*s+e.x,this.y=l*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,i,s,l,c,p,f,d){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,l,c,p,f,d)}set(e,n,i,s,l,c,p,f,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=p,m[3]=n,m[4]=l,m[5]=f,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,l=this.elements,c=i[0],p=i[3],f=i[6],d=i[1],m=i[4],v=i[7],_=i[2],y=i[5],R=i[8],T=s[0],x=s[3],C=s[6],M=s[1],S=s[4],j=s[7],k=s[2],U=s[5],N=s[8];return l[0]=c*T+p*M+f*k,l[3]=c*x+p*S+f*U,l[6]=c*C+p*j+f*N,l[1]=d*T+m*M+v*k,l[4]=d*x+m*S+v*U,l[7]=d*C+m*j+v*N,l[2]=_*T+y*M+R*k,l[5]=_*x+y*S+R*U,l[8]=_*C+y*j+R*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],p=e[5],f=e[6],d=e[7],m=e[8];return n*c*m-n*p*d-i*l*m+i*p*f+s*l*d-s*c*f}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],p=e[5],f=e[6],d=e[7],m=e[8],v=m*c-p*d,_=p*f-m*l,y=d*l-c*f,R=n*v+i*_+s*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(s*d-m*i)*T,e[2]=(p*i-s*c)*T,e[3]=_*T,e[4]=(m*n-s*f)*T,e[5]=(s*l-p*n)*T,e[6]=y*T,e[7]=(i*f-d*n)*T,e[8]=(c*n-i*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,l,c,p){const f=Math.cos(l),d=Math.sin(l);return this.set(i*f,i*d,-i*(f*c+d*p)+c+e,-s*d,s*f,-s*(-d*c+f*p)+p+n,0,0,1),this}scale(e,n){return this.premultiply(Uc.makeScale(e,n)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new ot;function Ym(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ws(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function V_(){const a=Ws("canvas");return a.style.display="block",a}const Ip={};function Gs(a){a in Ip||(Ip[a]=!0,console.warn(a))}const Op=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kp=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jo={[kr]:{transfer:Rl,primaries:Al,toReference:a=>a,fromReference:a=>a},[Bt]:{transfer:Mt,primaries:Al,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Il]:{transfer:Rl,primaries:Cl,toReference:a=>a.applyMatrix3(kp),fromReference:a=>a.applyMatrix3(Op)},[Ed]:{transfer:Mt,primaries:Cl,toReference:a=>a.convertSRGBToLinear().applyMatrix3(kp),fromReference:a=>a.applyMatrix3(Op).convertLinearToSRGB()}},j_=new Set([kr,Il]),vt={enabled:!0,_workingColorSpace:kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!j_.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,n){if(this.enabled===!1||e===n||!e||!n)return a;const i=Jo[e].toReference;return(0,Jo[n].fromReference)(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Jo[a].primaries},getTransfer:function(a){return a===vr?Rl:Jo[a].transfer}};function Ya(a){return a<.04045?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function Ic(a){return a<.0031308?12.92*a:1.055*Math.pow(a,.41666)-.055}let Pa;class qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pa===void 0&&(Pa=Ws("canvas")),Pa.width=e.width,Pa.height=e.height;const i=Pa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pa}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ws("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=255*Ya(l[c]/255);return i.putImageData(s,0,0),n}if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(255*Ya(n[i]/255)):n[i]=Ya(n[i]);return{data:n,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W_=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ys(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,p=s.length;c<p;c++)s[c].isDataTexture?l.push(Oc(s[c].image)):l.push(Oc(s[c]))}else l=Oc(s);i.url=l}return n||(e.images[this.uuid]=i),i}}function Oc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?qm.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X_=0;class Tn extends ea{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=1001,s=1001,l=1006,c=1008,p=1023,f=1009,d=Tn.DEFAULT_ANISOTROPY,m=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ys(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=f,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Ki?Bt:vr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?Ki:Xm}set encoding(e){Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?Bt:vr}}Tn.DEFAULT_IMAGE=null,Tn.DEFAULT_MAPPING=Fm,Tn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,i=0,s=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*i+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*i+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*i+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*i+c[11]*s+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,l;const f=e.elements,d=f[0],m=f[4],v=f[8],_=f[1],y=f[5],R=f[9],T=f[2],x=f[6],C=f[10];if(Math.abs(m-_)<.01&&Math.abs(v-T)<.01&&Math.abs(R-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+T)<.1&&Math.abs(R+x)<.1&&Math.abs(d+y+C-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,j=(y+1)/2,k=(C+1)/2,U=(m+_)/4,N=(v+T)/4,ae=(R+x)/4;return S>j&&S>k?S<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(S),s=U/i,l=N/i):j>k?j<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(j),i=U/s,l=ae/s):k<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(k),i=N/l,s=ae/l),this.set(i,s,l,n),this}let M=Math.sqrt((x-R)*(x-R)+(v-T)*(v-T)+(_-m)*(_-m));return Math.abs(M)<.001&&(M=1),this.x=(x-R)/M,this.y=(v-T)/M,this.z=(_-m)/M,this.w=Math.acos((d+y+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y_ extends ea{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ki?Bt:vr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ar,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){this.width===e&&this.height===n&&this.depth===i||(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $m(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Y_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Km extends Tn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class q_ extends Tn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,l,c,p){let f=i[s+0],d=i[s+1],m=i[s+2],v=i[s+3];const _=l[c+0],y=l[c+1],R=l[c+2],T=l[c+3];if(p===0)return e[n+0]=f,e[n+1]=d,e[n+2]=m,void(e[n+3]=v);if(p===1)return e[n+0]=_,e[n+1]=y,e[n+2]=R,void(e[n+3]=T);if(v!==T||f!==_||d!==y||m!==R){let x=1-p;const C=f*_+d*y+m*R+v*T,M=C>=0?1:-1,S=1-C*C;if(S>Number.EPSILON){const k=Math.sqrt(S),U=Math.atan2(k,C*M);x=Math.sin(x*U)/k,p=Math.sin(p*U)/k}const j=p*M;if(f=f*x+_*j,d=d*x+y*j,m=m*x+R*j,v=v*x+T*j,x===1-p){const k=1/Math.sqrt(f*f+d*d+m*m+v*v);f*=k,d*=k,m*=k,v*=k}}e[n]=f,e[n+1]=d,e[n+2]=m,e[n+3]=v}static multiplyQuaternionsFlat(e,n,i,s,l,c){const p=i[s],f=i[s+1],d=i[s+2],m=i[s+3],v=l[c],_=l[c+1],y=l[c+2],R=l[c+3];return e[n]=p*R+m*v+f*y-d*_,e[n+1]=f*R+m*_+d*v-p*y,e[n+2]=d*R+m*y+p*_-f*v,e[n+3]=m*R-p*v-f*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,l=e._z,c=e._order,p=Math.cos,f=Math.sin,d=p(i/2),m=p(s/2),v=p(l/2),_=f(i/2),y=f(s/2),R=f(l/2);switch(c){case"XYZ":this._x=_*m*v+d*y*R,this._y=d*y*v-_*m*R,this._z=d*m*R+_*y*v,this._w=d*m*v-_*y*R;break;case"YXZ":this._x=_*m*v+d*y*R,this._y=d*y*v-_*m*R,this._z=d*m*R-_*y*v,this._w=d*m*v+_*y*R;break;case"ZXY":this._x=_*m*v-d*y*R,this._y=d*y*v+_*m*R,this._z=d*m*R+_*y*v,this._w=d*m*v-_*y*R;break;case"ZYX":this._x=_*m*v-d*y*R,this._y=d*y*v+_*m*R,this._z=d*m*R-_*y*v,this._w=d*m*v+_*y*R;break;case"YZX":this._x=_*m*v+d*y*R,this._y=d*y*v+_*m*R,this._z=d*m*R-_*y*v,this._w=d*m*v-_*y*R;break;case"XZY":this._x=_*m*v-d*y*R,this._y=d*y*v-_*m*R,this._z=d*m*R+_*y*v,this._w=d*m*v+_*y*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],l=n[8],c=n[1],p=n[5],f=n[9],d=n[2],m=n[6],v=n[10],_=i+p+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-f)*y,this._y=(l-d)*y,this._z=(c-s)*y}else if(i>p&&i>v){const y=2*Math.sqrt(1+i-p-v);this._w=(m-f)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+d)/y}else if(p>v){const y=2*Math.sqrt(1+p-i-v);this._w=(l-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+v-i-p);this._w=(c-s)/y,this._x=(l+d)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,l=e._z,c=e._w,p=n._x,f=n._y,d=n._z,m=n._w;return this._x=i*m+c*p+s*d-l*f,this._y=s*m+c*f+l*p-i*d,this._z=l*m+c*d+i*f-s*p,this._w=c*m-i*p-s*f-l*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,l=this._z,c=this._w;let p=c*e._w+i*e._x+s*e._y+l*e._z;if(p<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,p=-p):this.copy(e),p>=1)return this._w=c,this._x=i,this._y=s,this._z=l,this;const f=1-p*p;if(f<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*i+n*this._x,this._y=y*s+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,p),v=Math.sin((1-n)*m)/d,_=Math.sin(n*m)/d;return this._w=c*v+this._w*_,this._x=i*v+this._x*_,this._y=s*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(l),i*Math.cos(l),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[3]*i+l[6]*s,this.y=l[1]*n+l[4]*i+l[7]*s,this.z=l[2]*n+l[5]*i+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,l=e.elements,c=1/(l[3]*n+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*i+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*i+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*i+l[10]*s+l[14])*c,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,l=e.x,c=e.y,p=e.z,f=e.w,d=2*(c*s-p*i),m=2*(p*n-l*s),v=2*(l*i-c*n);return this.x=n+f*d+c*v-p*m,this.y=i+f*m+p*d-l*v,this.z=s+f*v+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s,this.y=l[1]*n+l[5]*i+l[9]*s,this.z=l[2]*n+l[6]*i+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,l=e.z,c=n.x,p=n.y,f=n.z;return this.x=s*f-l*p,this.y=l*c-i*f,this.z=i*p-s*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,4*n)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,3*n)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new Y,Fp=new Qi;class yi{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(nr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(nr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=nr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,p=l.count;c<p;c++)e.isMesh===!0?e.getVertexPosition(c,nr):nr.fromBufferAttribute(l,c),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),tl.subVectors(this.max,Os),Na.subVectors(e.a,Os),Da.subVectors(e.b,Os),Ua.subVectors(e.c,Os),ci.subVectors(Da,Na),di.subVectors(Ua,Da),Bi.subVectors(Na,Ua);let n=[0,-ci.z,ci.y,0,-di.z,di.y,0,-Bi.z,Bi.y,ci.z,0,-ci.x,di.z,0,-di.x,Bi.z,0,-Bi.x,-ci.y,ci.x,0,-di.y,di.x,0,-Bi.y,Bi.x,0];return!!Fc(n,Na,Da,Ua,tl)&&(n=[1,0,0,0,1,0,0,0,1],!!Fc(n,Na,Da,Ua,tl)&&(nl.crossVectors(ci,di),n=[nl.x,nl.y,nl.z],Fc(n,Na,Da,Ua,tl)))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(nr).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],nr=new Y,el=new yi,Na=new Y,Da=new Y,Ua=new Y,ci=new Y,di=new Y,Bi=new Y,Os=new Y,tl=new Y,nl=new Y,Hi=new Y;function Fc(a,e,n,i,s){for(let l=0,c=a.length-3;l<=c;l+=3){Hi.fromArray(a,l);const p=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),f=e.dot(Hi),d=n.dot(Hi),m=i.dot(Hi);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>p)return!1}return!0}const $_=new yi,ks=new Y,zc=new Y;class Si{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$_.setFromPoints(e).getCenter(i);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=.5*(i-this.radius);this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(zc)),this.expandByPoint(ks.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pr=new Y,Bc=new Y,rl=new Y,hi=new Y,Hc=new Y,il=new Y,Gc=new Y;class qs{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,n),Pr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Bc.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),hi.copy(this.origin).sub(Bc);const l=.5*e.distanceTo(n),c=-this.direction.dot(rl),p=hi.dot(this.direction),f=-hi.dot(rl),d=hi.lengthSq(),m=Math.abs(1-c*c);let v,_,y,R;if(m>0)if(v=c*f-p,_=c*p-f,R=l*m,v>=0)if(_>=-R)if(_<=R){const T=1/m;v*=T,_*=T,y=v*(v+c*_+2*p)+_*(c*v+_+2*f)+d}else _=l,v=Math.max(0,-(c*_+p)),y=-v*v+_*(_+2*f)+d;else _=-l,v=Math.max(0,-(c*_+p)),y=-v*v+_*(_+2*f)+d;else _<=-R?(v=Math.max(0,-(-c*l+p)),_=v>0?-l:Math.min(Math.max(-l,-f),l),y=-v*v+_*(_+2*f)+d):_<=R?(v=0,_=Math.min(Math.max(-l,-f),l),y=_*(_+2*f)+d):(v=Math.max(0,-(c*l+p)),_=v>0?l:Math.min(Math.max(-l,-f),l),y=-v*v+_*(_+2*f)+d);else _=c>0?-l:l,v=Math.max(0,-(c*_+p)),y=-v*v+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Bc).addScaledVector(rl,_),y}intersectSphere(e,n){Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),s=Pr.dot(Pr)-i*i,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),p=i-c,f=i+c;return f<0?null:p<0?this.at(f,n):this.at(p,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0?!0:e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,l,c,p,f;const d=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),m>=0?(l=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||l>s?null:((l>i||isNaN(i))&&(i=l),(c<s||isNaN(s))&&(s=c),v>=0?(p=(e.min.z-_.z)*v,f=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,f=(e.min.z-_.z)*v),i>f||p>s?null:((p>i||i!=i)&&(i=p),(f<s||s!=s)&&(s=f),s<0?null:this.at(i>=0?i:s,n)))}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,n,i,s,l){Hc.subVectors(n,e),il.subVectors(i,e),Gc.crossVectors(Hc,il);let c,p=this.direction.dot(Gc);if(p>0){if(s)return null;c=1}else{if(!(p<0))return null;c=-1,p=-p}hi.subVectors(this.origin,e);const f=c*this.direction.dot(il.crossVectors(hi,il));if(f<0)return null;const d=c*this.direction.dot(Hc.cross(hi));if(d<0||f+d>p)return null;const m=-c*hi.dot(Gc);return m<0?null:this.at(m/p,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,s,l,c,p,f,d,m,v,_,y,R,T,x){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,l,c,p,f,d,m,v,_,y,R,T,x)}set(e,n,i,s,l,c,p,f,d,m,v,_,y,R,T,x){const C=this.elements;return C[0]=e,C[4]=n,C[8]=i,C[12]=s,C[1]=l,C[5]=c,C[9]=p,C[13]=f,C[2]=d,C[6]=m,C[10]=v,C[14]=_,C[3]=y,C[7]=R,C[11]=T,C[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Ia.setFromMatrixColumn(e,0).length(),l=1/Ia.setFromMatrixColumn(e,1).length(),c=1/Ia.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*l,n[5]=i[5]*l,n[6]=i[6]*l,n[7]=0,n[8]=i[8]*c,n[9]=i[9]*c,n[10]=i[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,l=e.z,c=Math.cos(i),p=Math.sin(i),f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*m,y=c*v,R=p*m,T=p*v;n[0]=f*m,n[4]=-f*v,n[8]=d,n[1]=y+R*d,n[5]=_-T*d,n[9]=-p*f,n[2]=T-_*d,n[6]=R+y*d,n[10]=c*f}else if(e.order==="YXZ"){const _=f*m,y=f*v,R=d*m,T=d*v;n[0]=_+T*p,n[4]=R*p-y,n[8]=c*d,n[1]=c*v,n[5]=c*m,n[9]=-p,n[2]=y*p-R,n[6]=T+_*p,n[10]=c*f}else if(e.order==="ZXY"){const _=f*m,y=f*v,R=d*m,T=d*v;n[0]=_-T*p,n[4]=-c*v,n[8]=R+y*p,n[1]=y+R*p,n[5]=c*m,n[9]=T-_*p,n[2]=-c*d,n[6]=p,n[10]=c*f}else if(e.order==="ZYX"){const _=c*m,y=c*v,R=p*m,T=p*v;n[0]=f*m,n[4]=R*d-y,n[8]=_*d+T,n[1]=f*v,n[5]=T*d+_,n[9]=y*d-R,n[2]=-d,n[6]=p*f,n[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*d,R=p*f,T=p*d;n[0]=f*m,n[4]=T-_*v,n[8]=R*v+y,n[1]=v,n[5]=c*m,n[9]=-p*m,n[2]=-d*m,n[6]=y*v+R,n[10]=_-T*v}else if(e.order==="XZY"){const _=c*f,y=c*d,R=p*f,T=p*d;n[0]=f*m,n[4]=-v,n[8]=d*m,n[1]=_*v+T,n[5]=c*m,n[9]=y*v-R,n[2]=R*v-y,n[6]=p*m,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K_,e,Z_)}lookAt(e,n,i){const s=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),fi.crossVectors(i,Pn),fi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),fi.crossVectors(i,Pn)),fi.normalize(),al.crossVectors(Pn,fi),s[0]=fi.x,s[4]=al.x,s[8]=Pn.x,s[1]=fi.y,s[5]=al.y,s[9]=Pn.y,s[2]=fi.z,s[6]=al.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,l=this.elements,c=i[0],p=i[4],f=i[8],d=i[12],m=i[1],v=i[5],_=i[9],y=i[13],R=i[2],T=i[6],x=i[10],C=i[14],M=i[3],S=i[7],j=i[11],k=i[15],U=s[0],N=s[4],ae=s[8],K=s[12],ne=s[1],pe=s[5],B=s[9],ee=s[13],Z=s[2],me=s[6],Me=s[10],se=s[14],V=s[3],$=s[7],H=s[11],w=s[15];return l[0]=c*U+p*ne+f*Z+d*V,l[4]=c*N+p*pe+f*me+d*$,l[8]=c*ae+p*B+f*Me+d*H,l[12]=c*K+p*ee+f*se+d*w,l[1]=m*U+v*ne+_*Z+y*V,l[5]=m*N+v*pe+_*me+y*$,l[9]=m*ae+v*B+_*Me+y*H,l[13]=m*K+v*ee+_*se+y*w,l[2]=R*U+T*ne+x*Z+C*V,l[6]=R*N+T*pe+x*me+C*$,l[10]=R*ae+T*B+x*Me+C*H,l[14]=R*K+T*ee+x*se+C*w,l[3]=M*U+S*ne+j*Z+k*V,l[7]=M*N+S*pe+j*me+k*$,l[11]=M*ae+S*B+j*Me+k*H,l[15]=M*K+S*ee+j*se+k*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],l=e[12],c=e[1],p=e[5],f=e[9],d=e[13],m=e[2],v=e[6],_=e[10],y=e[14];return e[3]*(+l*f*v-s*d*v-l*p*_+i*d*_+s*p*y-i*f*y)+e[7]*(+n*f*y-n*d*_+l*c*_-s*c*y+s*d*m-l*f*m)+e[11]*(+n*d*v-n*p*y-l*c*v+i*c*y+l*p*m-i*d*m)+e[15]*(-s*p*m-n*f*v+n*p*_+s*c*v-i*c*_+i*f*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],l=e[3],c=e[4],p=e[5],f=e[6],d=e[7],m=e[8],v=e[9],_=e[10],y=e[11],R=e[12],T=e[13],x=e[14],C=e[15],M=v*x*d-T*_*d+T*f*y-p*x*y-v*f*C+p*_*C,S=R*_*d-m*x*d-R*f*y+c*x*y+m*f*C-c*_*C,j=m*T*d-R*v*d+R*p*y-c*T*y-m*p*C+c*v*C,k=R*v*f-m*T*f-R*p*_+c*T*_+m*p*x-c*v*x,U=n*M+i*S+s*j+l*k;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return e[0]=M*N,e[1]=(T*_*l-v*x*l-T*s*y+i*x*y+v*s*C-i*_*C)*N,e[2]=(p*x*l-T*f*l+T*s*d-i*x*d-p*s*C+i*f*C)*N,e[3]=(v*f*l-p*_*l-v*s*d+i*_*d+p*s*y-i*f*y)*N,e[4]=S*N,e[5]=(m*x*l-R*_*l+R*s*y-n*x*y-m*s*C+n*_*C)*N,e[6]=(R*f*l-c*x*l-R*s*d+n*x*d+c*s*C-n*f*C)*N,e[7]=(c*_*l-m*f*l+m*s*d-n*_*d-c*s*y+n*f*y)*N,e[8]=j*N,e[9]=(R*v*l-m*T*l-R*i*y+n*T*y+m*i*C-n*v*C)*N,e[10]=(c*T*l-R*p*l+R*i*d-n*T*d-c*i*C+n*p*C)*N,e[11]=(m*p*l-c*v*l-m*i*d+n*v*d+c*i*y-n*p*y)*N,e[12]=k*N,e[13]=(m*T*s-R*v*s+R*i*_-n*T*_-m*i*x+n*v*x)*N,e[14]=(R*p*s-c*T*s-R*i*f+n*T*f+c*i*x-n*p*x)*N,e[15]=(c*v*s-m*p*s+m*i*f-n*v*f-c*i*_+n*p*_)*N,this}scale(e){const n=this.elements,i=e.x,s=e.y,l=e.z;return n[0]*=i,n[4]*=s,n[8]*=l,n[1]*=i,n[5]*=s,n[9]*=l,n[2]*=i,n[6]*=s,n[10]*=l,n[3]*=i,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),l=1-i,c=e.x,p=e.y,f=e.z,d=l*c,m=l*p;return this.set(d*c+i,d*p-s*f,d*f+s*p,0,d*p+s*f,m*p+i,m*f-s*c,0,d*f-s*p,m*f+s*c,l*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,l,c){return this.set(1,i,l,0,e,1,c,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,l=n._x,c=n._y,p=n._z,f=n._w,d=l+l,m=c+c,v=p+p,_=l*d,y=l*m,R=l*v,T=c*m,x=c*v,C=p*v,M=f*d,S=f*m,j=f*v,k=i.x,U=i.y,N=i.z;return s[0]=(1-(T+C))*k,s[1]=(y+j)*k,s[2]=(R-S)*k,s[3]=0,s[4]=(y-j)*U,s[5]=(1-(_+C))*U,s[6]=(x+M)*U,s[7]=0,s[8]=(R+S)*N,s[9]=(x-M)*N,s[10]=(1-(_+T))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let l=Ia.set(s[0],s[1],s[2]).length();const c=Ia.set(s[4],s[5],s[6]).length(),p=Ia.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],rr.copy(this);const f=1/l,d=1/c,m=1/p;return rr.elements[0]*=f,rr.elements[1]*=f,rr.elements[2]*=f,rr.elements[4]*=d,rr.elements[5]*=d,rr.elements[6]*=d,rr.elements[8]*=m,rr.elements[9]*=m,rr.elements[10]*=m,n.setFromRotationMatrix(rr),i.x=l,i.y=c,i.z=p,this}makePerspective(e,n,i,s,l,c,p=2e3){const f=this.elements,d=2*l/(n-e),m=2*l/(i-s),v=(n+e)/(n-e),_=(i+s)/(i-s);let y,R;if(p===Za)y=-(c+l)/(c-l),R=-2*c*l/(c-l);else{if(p!==Ll)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);y=-c/(c-l),R=-c*l/(c-l)}return f[0]=d,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=R,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,s,l,c,p=2e3){const f=this.elements,d=1/(n-e),m=1/(i-s),v=1/(c-l),_=(n+e)*d,y=(i+s)*m;let R,T;if(p===Za)R=(c+l)*v,T=-2*v;else{if(p!==Ll)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);R=l*v,T=-1*v}return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=T,f[14]=-R,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ia=new Y,rr=new lt,K_=new Y(0,0,0),Z_=new Y(1,1,1),fi=new Y,al=new Y,Pn=new Y,zp=new lt,Bp=new Qi;class Ol{constructor(e=0,n=0,i=0,s=Ol.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,l=s[0],c=s[4],p=s[8],f=s[1],d=s[5],m=s[9],v=s[2],_=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(hn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(hn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-hn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ol.DEFAULT_ORDER="XYZ";class Zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Q_=0;const Hp=new Y,Oa=new Qi,Nr=new lt,sl=new Y,Fs=new Y,J_=new Y,e0=new Qi,Gp=new Y(1,0,0),Vp=new Y(0,1,0),jp=new Y(0,0,1),t0={type:"added"},n0={type:"removed"};class Un extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new Y,n=new Ol,i=new Qi,s=new Y(1,1,1);n._onChange((function(){i.setFromEuler(n,!1)})),i._onChange((function(){n.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new ot}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Oa.setFromAxisAngle(e,n),this.quaternion.multiply(Oa),this}rotateOnWorldAxis(e,n){return Oa.setFromAxisAngle(e,n),this.quaternion.premultiply(Oa),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sl.copy(e):sl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nr.lookAt(Fs,sl,this.up):Nr.lookAt(sl,Fs,this.up),this.quaternion.setFromRotationMatrix(Nr),s&&(Nr.extractRotation(s.matrixWorld),Oa.setFromRotationMatrix(Nr),this.quaternion.premultiply(Oa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(t0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(n0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,J_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const l=n[i];l.matrixWorldAutoUpdate!==!0&&e!==!0||l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++){const p=s[l];p.matrixWorldAutoUpdate===!0&&p.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};function l(p,f){return p[f.uuid]===void 0&&(p[f.uuid]=f.toJSON(e)),f.uuid}if(s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map((p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()}))),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const f=p.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const v=f[d];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let f=0,d=this.material.length;f<d;f++)p.push(l(e.materials,this.material[f]));s.material=p}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let p=0;p<this.children.length;p++)s.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let p=0;p<this.animations.length;p++){const f=this.animations[p];s.animations.push(l(e.animations,f))}}if(n){const p=c(e.geometries),f=c(e.materials),d=c(e.textures),m=c(e.images),v=c(e.shapes),_=c(e.skeletons),y=c(e.animations),R=c(e.nodes);p.length>0&&(i.geometries=p),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),R.length>0&&(i.nodes=R)}return i.object=s,i;function c(p){const f=[];for(const d in p){const m=p[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Un.DEFAULT_UP=new Y(0,1,0),Un.DEFAULT_MATRIX_AUTO_UPDATE=!0,Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new Y,Dr=new Y,Vc=new Y,Ur=new Y,ka=new Y,Fa=new Y,Wp=new Y,jc=new Y,Wc=new Y,Xc=new Y;let ol=!1;class jn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ir.subVectors(e,n),s.cross(ir);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,n,i,s,l){ir.subVectors(s,n),Dr.subVectors(i,n),Vc.subVectors(e,n);const c=ir.dot(ir),p=ir.dot(Dr),f=ir.dot(Vc),d=Dr.dot(Dr),m=Dr.dot(Vc),v=c*d-p*p;if(v===0)return l.set(0,0,0),null;const _=1/v,y=(d*f-p*m)*_,R=(c*m-p*f)*_;return l.set(1-y-R,R,y)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ur)!==null&&Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getUV(e,n,i,s,l,c,p,f){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),this.getInterpolation(e,n,i,s,l,c,p,f)}static getInterpolation(e,n,i,s,l,c,p,f){return this.getBarycoord(e,n,i,s,Ur)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Ur.x),f.addScaledVector(c,Ur.y),f.addScaledVector(p,Ur.z),f)}static isFrontFacing(e,n,i,s){return ir.subVectors(i,n),Dr.subVectors(e,n),ir.cross(Dr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),.5*ir.cross(Dr).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,l){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,s,l)}getInterpolation(e,n,i,s,l){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,s,l)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,l=this.c;let c,p;ka.subVectors(s,i),Fa.subVectors(l,i),jc.subVectors(e,i);const f=ka.dot(jc),d=Fa.dot(jc);if(f<=0&&d<=0)return n.copy(i);Wc.subVectors(e,s);const m=ka.dot(Wc),v=Fa.dot(Wc);if(m>=0&&v<=m)return n.copy(s);const _=f*v-m*d;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),n.copy(i).addScaledVector(ka,c);Xc.subVectors(e,l);const y=ka.dot(Xc),R=Fa.dot(Xc);if(R>=0&&y<=R)return n.copy(l);const T=y*d-f*R;if(T<=0&&d>=0&&R<=0)return p=d/(d-R),n.copy(i).addScaledVector(Fa,p);const x=m*R-y*v;if(x<=0&&v-m>=0&&y-R>=0)return Wp.subVectors(l,s),p=(v-m)/(v-m+(y-R)),n.copy(s).addScaledVector(Wp,p);const C=1/(x+T+_);return c=T*C,p=_*C,n.copy(i).addScaledVector(ka,c).addScaledVector(Fa,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Yc(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+6*(e-a)*n:n<.5?e:n<2/3?a+6*(e-a)*(2/3-n):a}class mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=vt.workingColorSpace){return this.r=e,this.g=n,this.b=i,vt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=vt.workingColorSpace){if(e=H_(e,1),n=hn(n,0,1),i=hn(i,0,1),n===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+n):i+n-i*n,c=2*i-l;this.r=Yc(c,l,e+1/3),this.g=Yc(c,l,e),this.b=Yc(c,l,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,n=Bt){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],p=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bt){const i=Qm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return vt.fromWorkingColorSpace(rn.copy(this),e),65536*Math.round(hn(255*rn.r,0,255))+256*Math.round(hn(255*rn.g,0,255))+Math.round(hn(255*rn.b,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,s=rn.g,l=rn.b,c=Math.max(i,s,l),p=Math.min(i,s,l);let f,d;const m=(p+c)/2;if(p===c)f=0,d=0;else{const v=c-p;switch(d=m<=.5?v/(c+p):v/(2-c-p),c){case i:f=(s-l)/v+(s<l?6:0);break;case s:f=(l-i)/v+2;break;case l:f=(i-s)/v+4}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Bt){vt.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,s=rn.b;return e!==Bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*n)},${Math.round(255*i)},${Math.round(255*s)})`}offsetHSL(e,n,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+n,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pi),e.getHSL(ll);const i=Dc(pi.h,ll.h,n),s=Dc(pi.s,ll.s,n),l=Dc(pi.l,ll.l,n);return this.setHSL(i,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,l=e.elements;return this.r=l[0]*n+l[3]*i+l[6]*s,this.g=l[1]*n+l[4]*i+l[7]*s,this.b=l[2]*n+l[5]*i+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new mt;mt.NAMES=Qm;let r0=0;class kl extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=1,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=ud,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];s!==void 0?s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i:console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`)}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function s(l){const c=[];for(const p in l){const f=l[p];delete f.metadata,c.push(f)}return c}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(i.stencilFail=this.stencilFail),this.stencilZFail!==La&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),n){const l=s(e.textures),c=s(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=n[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fl extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}i0();function i0(){const a=new ArrayBuffer(4),e=new Float32Array(a),n=new Uint32Array(a),i=new Uint32Array(512),s=new Uint32Array(512);for(let f=0;f<256;++f){const d=f-127;d<-27?(i[f]=0,i[256|f]=32768,s[f]=24,s[256|f]=24):d<-14?(i[f]=1024>>-d-14,i[256|f]=1024>>-d-14|32768,s[f]=-d-1,s[256|f]=-d-1):d<=15?(i[f]=d+15<<10,i[256|f]=d+15<<10|32768,s[f]=13,s[256|f]=13):d<128?(i[f]=31744,i[256|f]=64512,s[f]=24,s[256|f]=24):(i[f]=31744,i[256|f]=64512,s[f]=13,s[256|f]=13)}const l=new Uint32Array(2048),c=new Uint32Array(64),p=new Uint32Array(64);for(let f=1;f<1024;++f){let d=f<<13,m=0;for(;(8388608&d)==0;)d<<=1,m-=8388608;d&=-8388609,m+=947912704,l[f]=d|m}for(let f=1024;f<2048;++f)l[f]=939524096+(f-1024<<13);for(let f=1;f<31;++f)c[f]=f<<23;c[31]=1199570944,c[32]=2147483648;for(let f=33;f<63;++f)c[f]=2147483648+(f-32<<23);c[63]=3347054592;for(let f=1;f<64;++f)f!==32&&(p[f]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:s,mantissaTable:l,exponentTable:c,offsetTable:p}}const It=new Y,ul=new Qe;class _r{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Np,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),s=Mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,l){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),s=Mn(s,this.array),l=Mn(l,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class Jm extends _r{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class eg extends _r{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xr extends _r{constructor(e,n,i){super(new Float32Array(e),n,i)}}let a0=0;const Vn=new lt,qc=new Un,za=new Y,Nn=new yi,zs=new yi,Yt=new Y;class Ei extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?eg:Jm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ot().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(za).negate(),this.translate(za.x,za.y,za.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const l=n[i];Nn.setFromBufferAttribute(l),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new Y,1/0);if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const p=n[l];zs.setFromBufferAttribute(p),this.morphTargetsRelative?(Yt.addVectors(Nn.min,zs.min),Nn.expandByPoint(Yt),Yt.addVectors(Nn.max,zs.max),Nn.expandByPoint(Yt)):(Nn.expandByPoint(zs.min),Nn.expandByPoint(zs.max))}Nn.getCenter(i);let s=0;for(let l=0,c=e.count;l<c;l++)Yt.fromBufferAttribute(e,l),s=Math.max(s,i.distanceToSquared(Yt));if(n)for(let l=0,c=n.length;l<c;l++){const p=n[l],f=this.morphTargetsRelative;for(let d=0,m=p.count;d<m;d++)Yt.fromBufferAttribute(p,d),f&&(za.fromBufferAttribute(e,d),Yt.add(za)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const i=e.array,s=n.position.array,l=n.normal.array,c=n.uv.array,p=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _r(new Float32Array(4*p),4));const f=this.getAttribute("tangent").array,d=[],m=[];for(let ne=0;ne<p;ne++)d[ne]=new Y,m[ne]=new Y;const v=new Y,_=new Y,y=new Y,R=new Qe,T=new Qe,x=new Qe,C=new Y,M=new Y;function S(ne,pe,B){v.fromArray(s,3*ne),_.fromArray(s,3*pe),y.fromArray(s,3*B),R.fromArray(c,2*ne),T.fromArray(c,2*pe),x.fromArray(c,2*B),_.sub(v),y.sub(v),T.sub(R),x.sub(R);const ee=1/(T.x*x.y-x.x*T.y);isFinite(ee)&&(C.copy(_).multiplyScalar(x.y).addScaledVector(y,-T.y).multiplyScalar(ee),M.copy(y).multiplyScalar(T.x).addScaledVector(_,-x.x).multiplyScalar(ee),d[ne].add(C),d[pe].add(C),d[B].add(C),m[ne].add(M),m[pe].add(M),m[B].add(M))}let j=this.groups;j.length===0&&(j=[{start:0,count:i.length}]);for(let ne=0,pe=j.length;ne<pe;++ne){const B=j[ne],ee=B.start;for(let Z=ee,me=ee+B.count;Z<me;Z+=3)S(i[Z+0],i[Z+1],i[Z+2])}const k=new Y,U=new Y,N=new Y,ae=new Y;function K(ne){N.fromArray(l,3*ne),ae.copy(N);const pe=d[ne];k.copy(pe),k.sub(N.multiplyScalar(N.dot(pe))).normalize(),U.crossVectors(ae,pe);const B=U.dot(m[ne])<0?-1:1;f[4*ne]=k.x,f[4*ne+1]=k.y,f[4*ne+2]=k.z,f[4*ne+3]=B}for(let ne=0,pe=j.length;ne<pe;++ne){const B=j[ne],ee=B.start;for(let Z=ee,me=ee+B.count;Z<me;Z+=3)K(i[Z+0]),K(i[Z+1]),K(i[Z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _r(new Float32Array(3*n.count),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new Y,l=new Y,c=new Y,p=new Y,f=new Y,d=new Y,m=new Y,v=new Y;if(e)for(let _=0,y=e.count;_<y;_+=3){const R=e.getX(_+0),T=e.getX(_+1),x=e.getX(_+2);s.fromBufferAttribute(n,R),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,x),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),p.fromBufferAttribute(i,R),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),p.add(m),f.add(m),d.add(m),i.setXYZ(R,p.x,p.y,p.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)s.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(p,f){const d=p.array,m=p.itemSize,v=p.normalized,_=new d.constructor(f.length*m);let y=0,R=0;for(let T=0,x=f.length;T<x;T++){y=p.isInterleavedBufferAttribute?f[T]*p.data.stride+p.offset:f[T]*m;for(let C=0;C<m;C++)_[R++]=d[y++]}return new _r(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,i=this.index.array,s=this.attributes;for(const p in s){const f=e(s[p],i);n.setAttribute(p,f)}const l=this.morphAttributes;for(const p in l){const f=[],d=l[p];for(let m=0,v=d.length;m<v;m++){const _=e(d[m],i);f.push(_)}n.morphAttributes[p]=f}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let p=0,f=c.length;p<f;p++){const d=c[p];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let l=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];m.push(y.toJSON(e.data))}m.length>0&&(s[f]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(n))}const l=e.morphAttributes;for(const d in l){const m=[],v=l[d];for(let _=0,y=v.length;_<y;_++)m.push(v[_].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new lt,Gi=new qs,cl=new Si,Yp=new Y,Ba=new Y,Ha=new Y,Ga=new Y,$c=new Y,dl=new Y,hl=new Qe,fl=new Qe,pl=new Qe,qp=new Y,$p=new Y,Kp=new Y,ml=new Y,gl=new Y;class Wn extends Un{constructor(e=new Ei,n=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const p=this.morphTargetInfluences;if(l&&p){dl.set(0,0,0);for(let f=0,d=l.length;f<d;f++){const m=p[f],v=l[f];m!==0&&($c.fromBufferAttribute(v,e),c?dl.addScaledVector($c,m):dl.addScaledVector($c.sub(n),m))}n.add(dl)}return n}raycast(e,n){const i=this.geometry,s=this.material,l=this.matrixWorld;if(s!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(l),Gi.copy(e.ray).recast(e.near),cl.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(cl,Yp)===null||Gi.origin.distanceToSquared(Yp)>(e.far-e.near)**2))return;Xp.copy(l).invert(),Gi.copy(e.ray).applyMatrix4(Xp),i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,n,Gi)}}_computeIntersections(e,n,i){let s;const l=this.geometry,c=this.material,p=l.index,f=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,y=l.drawRange;if(p!==null)if(Array.isArray(c))for(let R=0,T=_.length;R<T;R++){const x=_[R],C=c[x.materialIndex];for(let M=Math.max(x.start,y.start),S=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));M<S;M+=3)s=vl(this,C,e,i,d,m,v,p.getX(M),p.getX(M+1),p.getX(M+2)),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,n.push(s))}else for(let R=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);R<T;R+=3)s=vl(this,c,e,i,d,m,v,p.getX(R),p.getX(R+1),p.getX(R+2)),s&&(s.faceIndex=Math.floor(R/3),n.push(s));else if(f!==void 0)if(Array.isArray(c))for(let R=0,T=_.length;R<T;R++){const x=_[R],C=c[x.materialIndex];for(let M=Math.max(x.start,y.start),S=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));M<S;M+=3)s=vl(this,C,e,i,d,m,v,M,M+1,M+2),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,n.push(s))}else for(let R=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);R<T;R+=3)s=vl(this,c,e,i,d,m,v,R,R+1,R+2),s&&(s.faceIndex=Math.floor(R/3),n.push(s))}}function vl(a,e,n,i,s,l,c,p,f,d){a.getVertexPosition(p,Ba),a.getVertexPosition(f,Ha),a.getVertexPosition(d,Ga);const m=(function(v,_,y,R,T,x,C,M){let S;if(S=_.side===wn?R.intersectTriangle(C,x,T,!0,M):R.intersectTriangle(T,x,C,_.side===xi,M),S===null)return null;gl.copy(M),gl.applyMatrix4(v.matrixWorld);const j=y.ray.origin.distanceTo(gl);return j<y.near||j>y.far?null:{distance:j,point:gl.clone(),object:v}})(a,e,n,i,Ba,Ha,Ga,ml);if(m){s&&(hl.fromBufferAttribute(s,p),fl.fromBufferAttribute(s,f),pl.fromBufferAttribute(s,d),m.uv=jn.getInterpolation(ml,Ba,Ha,Ga,hl,fl,pl,new Qe)),l&&(hl.fromBufferAttribute(l,p),fl.fromBufferAttribute(l,f),pl.fromBufferAttribute(l,d),m.uv1=jn.getInterpolation(ml,Ba,Ha,Ga,hl,fl,pl,new Qe),m.uv2=m.uv1),c&&(qp.fromBufferAttribute(c,p),$p.fromBufferAttribute(c,f),Kp.fromBufferAttribute(c,d),m.normal=jn.getInterpolation(ml,Ba,Ha,Ga,qp,$p,Kp,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:p,b:f,c:d,normal:new Y,materialIndex:0};jn.getNormal(Ba,Ha,Ga,v.normal),m.face=v}return m}class $s extends Ei{constructor(e=1,n=1,i=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:l,depthSegments:c};const p=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const f=[],d=[],m=[],v=[];let _=0,y=0;function R(T,x,C,M,S,j,k,U,N,ae,K){const ne=j/N,pe=k/ae,B=j/2,ee=k/2,Z=U/2,me=N+1,Me=ae+1;let se=0,V=0;const $=new Y;for(let H=0;H<Me;H++){const w=H*pe-ee;for(let F=0;F<me;F++){const b=F*ne-B;$[T]=b*M,$[x]=w*S,$[C]=Z,d.push($.x,$.y,$.z),$[T]=0,$[x]=0,$[C]=U>0?1:-1,m.push($.x,$.y,$.z),v.push(F/N),v.push(1-H/ae),se+=1}}for(let H=0;H<ae;H++)for(let w=0;w<N;w++){const F=_+w+me*H,b=_+w+me*(H+1),A=_+(w+1)+me*(H+1),O=_+(w+1)+me*H;f.push(F,b,O),f.push(b,A,O),V+=6}p.addGroup(y,V,K),y+=V,_+=se}R("z","y","x",-1,-1,i,n,e,c,l,0),R("z","y","x",1,-1,i,n,-e,c,l,1),R("x","z","y",1,1,e,i,n,s,c,2),R("x","z","y",1,-1,e,i,-n,s,c,3),R("x","y","z",1,-1,e,n,i,s,l,4),R("x","y","z",-1,-1,e,n,-i,s,l,5),this.setIndex(f),this.setAttribute("position",new xr(d,3)),this.setAttribute("normal",new xr(m,3)),this.setAttribute("uv",new xr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(a){const e={};for(const n in a){e[n]={};for(const i in a[n]){const s=a[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function cn(a){const e={};for(let n=0;n<a.length;n++){const i=Qa(a[n]);for(const s in i)e[s]=i[s]}return e}function tg(a){return a.getRenderTarget()===null?a.outputColorSpace:vt.workingColorSpace}const s0={clone:Qa,merge:cn};class Ji extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=(function(n){const i=[];for(let s=0;s<n.length;s++)i.push(n[s].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Md extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Za}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends Md{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=2*md*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*Ml*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*md*Math.atan(Math.tan(.5*Ml*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(.5*Ml*this.fov)/this.zoom,i=2*n,s=this.aspect*i,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/f,n-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}const p=this.filmOffset;p!==0&&(l+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Va=-90;class o0 extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Va,1,e,n);s.layers=this.layers,this.add(s);const l=new Dn(Va,1,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Va,1,e,n);c.layers=this.layers,this.add(c);const p=new Dn(Va,1,e,n);p.layers=this.layers,this.add(p);const f=new Dn(Va,1,e,n);f.layers=this.layers,this.add(f);const d=new Dn(Va,1,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,l,c,p,f]=n;for(const d of n)this.remove(d);if(e===Za)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else{if(e!==Ll)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1)}for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,p,f,d,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,l),e.setRenderTarget(i,1,s),e.render(n,c),e.setRenderTarget(i,2,s),e.render(n,p),e.setRenderTarget(i,3,s),e.render(n,f),e.setRenderTarget(i,4,s),e.render(n,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(n,m),e.setRenderTarget(v,_,y),e.xr.enabled=R,i.texture.needsPMREMUpdate=!0}}class ng extends Tn{constructor(e,n,i,s,l,c,p,f,d,m){super(e=e!==void 0?e:[],n=n!==void 0?n:qa,i,s,l,c,p,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends Zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?Bt:vr),this.texture=new ng(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ar}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $s(5,5,5),l=new Ji({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:0});l.uniforms.tEquirect.value=n;const c=new Wn(s,l),p=n.minFilter;return n.minFilter===bl&&(n.minFilter=ar),new o0(1,10,this).update(e,c),n.minFilter=p,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,i,s){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,i,s);e.setRenderTarget(l)}}const Kc=new Y,u0=new Y,c0=new ot;class mi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Kc.subVectors(i,n).cross(u0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Kc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||c0.getNormalMatrix(e),s=this.coplanarPoint(Kc).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Si,_l=new Y;class wd{constructor(e=new mi,n=new mi,i=new mi,s=new mi,l=new mi,c=new mi){this.planes=[e,n,i,s,l,c]}set(e,n,i,s,l,c){const p=this.planes;return p[0].copy(e),p[1].copy(n),p[2].copy(i),p[3].copy(s),p[4].copy(l),p[5].copy(c),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=2e3){const i=this.planes,s=e.elements,l=s[0],c=s[1],p=s[2],f=s[3],d=s[4],m=s[5],v=s[6],_=s[7],y=s[8],R=s[9],T=s[10],x=s[11],C=s[12],M=s[13],S=s[14],j=s[15];if(i[0].setComponents(f-l,_-d,x-y,j-C).normalize(),i[1].setComponents(f+l,_+d,x+y,j+C).normalize(),i[2].setComponents(f+c,_+m,x+R,j+M).normalize(),i[3].setComponents(f-c,_-m,x-R,j-M).normalize(),i[4].setComponents(f-p,_-v,x-T,j-S).normalize(),n===Za)i[5].setComponents(f+p,_+v,x+T,j+S).normalize();else{if(n!==Ll)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);i[5].setComponents(p,v,T,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(_l.x=s.normal.x>0?e.max.x:e.min.x,_l.y=s.normal.y>0?e.max.y:e.min.y,_l.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rg(){let a=null,e=!1,n=null,i=null;function s(l,c){n(l,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){a=l}}}function d0(a,e){const n=e.isWebGL2,i=new WeakMap;return{get:function(s){return s.isInterleavedBufferAttribute&&(s=s.data),i.get(s)},remove:function(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=i.get(s);l&&(a.deleteBuffer(l.buffer),i.delete(s))},update:function(s,l){if(s.isGLBufferAttribute){const p=i.get(s);return void((!p||p.version<s.version)&&i.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version}))}s.isInterleavedBufferAttribute&&(s=s.data);const c=i.get(s);if(c===void 0)i.set(s,(function(p,f){const d=p.array,m=p.usage,v=d.byteLength,_=a.createBuffer();let y;if(a.bindBuffer(f,_),a.bufferData(f,d,m),p.onUploadCallback(),d instanceof Float32Array)y=a.FLOAT;else if(d instanceof Uint16Array)if(p.isFloat16BufferAttribute){if(!n)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");y=a.HALF_FLOAT}else y=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=a.SHORT;else if(d instanceof Uint32Array)y=a.UNSIGNED_INT;else if(d instanceof Int32Array)y=a.INT;else if(d instanceof Int8Array)y=a.BYTE;else if(d instanceof Uint8Array)y=a.UNSIGNED_BYTE;else{if(!(d instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);y=a.UNSIGNED_BYTE}return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}})(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(p,f,d){const m=f.array,v=f._updateRange,_=f.updateRanges;if(a.bindBuffer(d,p),v.count===-1&&_.length===0&&a.bufferSubData(d,0,m),_.length!==0){for(let y=0,R=_.length;y<R;y++){const T=_[y];n?a.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count):a.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m.subarray(T.start,T.start+T.count))}f.clearUpdateRanges()}v.count!==-1&&(n?a.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):a.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()})(c.buffer,s,l),c.version=s.version}}}}class Td extends Ei{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const l=e/2,c=n/2,p=Math.floor(i),f=Math.floor(s),d=p+1,m=f+1,v=e/p,_=n/f,y=[],R=[],T=[],x=[];for(let C=0;C<m;C++){const M=C*_-c;for(let S=0;S<d;S++){const j=S*v-l;R.push(j,-M,0),T.push(0,0,1),x.push(S/p),x.push(1-C/f)}}for(let C=0;C<f;C++)for(let M=0;M<p;M++){const S=M+d*C,j=M+d*(C+1),k=M+1+d*(C+1),U=M+1+d*C;y.push(S,j,U),y.push(j,k,U)}this.setIndex(y),this.setAttribute("position",new xr(R,3)),this.setAttribute("normal",new xr(T,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.width,e.height,e.widthSegments,e.heightSegments)}}const rt={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Le={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},mr={basic:{uniforms:cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:cn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:cn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:cn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:cn([Le.points,Le.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:cn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:cn([Le.common,Le.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:cn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:cn([Le.sprite,Le.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:cn([Le.common,Le.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:cn([Le.lights,Le.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};mr.physical={uniforms:cn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const xl={r:0,b:0,g:0};function h0(a,e,n,i,s,l,c){const p=new mt(0);let f,d,m=l===!0?0:1,v=null,_=0,y=null;function R(T,x){T.getRGB(xl,tg(a)),i.buffers.color.setClear(xl.r,xl.g,xl.b,x,c)}return{getClearColor:function(){return p},setClearColor:function(T,x=1){p.set(T),m=x,R(p,m)},getClearAlpha:function(){return m},setClearAlpha:function(T){m=T,R(p,m)},render:function(T,x){let C=!1,M=x.isScene===!0?x.background:null;M&&M.isTexture&&(M=(x.backgroundBlurriness>0?n:e).get(M)),M===null?R(p,m):M&&M.isColor&&(R(M,1),C=!0);const S=a.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,c):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||C)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ul)?(d===void 0&&(d=new Wn(new $s(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Qa(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(j,k,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=vt.getTransfer(M.colorSpace)!==Mt,v===M&&_===M.version&&y===a.toneMapping||(d.material.needsUpdate=!0,v=M,_=M.version,y=a.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(f===void 0&&(f=new Wn(new Td(2,2),new Ji({name:"BackgroundMaterial",uniforms:Qa(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=M,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.toneMapped=vt.getTransfer(M.colorSpace)!==Mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),f.material.uniforms.uvTransform.value.copy(M.matrix),v===M&&_===M.version&&y===a.toneMapping||(f.material.needsUpdate=!0,v=M,_=M.version,y=a.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}}}function f0(a,e,n,i){const s=a.getParameter(a.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||l!==null,p={},f=y(null);let d=f,m=!1;function v(k){return i.isWebGL2?a.bindVertexArray(k):l.bindVertexArrayOES(k)}function _(k){return i.isWebGL2?a.deleteVertexArray(k):l.deleteVertexArrayOES(k)}function y(k){const U=[],N=[],ae=[];for(let K=0;K<s;K++)U[K]=0,N[K]=0,ae[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:ae,object:k,attributes:{},index:null}}function R(){const k=d.newAttributes;for(let U=0,N=k.length;U<N;U++)k[U]=0}function T(k){x(k,0)}function x(k,U){const N=d.newAttributes,ae=d.enabledAttributes,K=d.attributeDivisors;N[k]=1,ae[k]===0&&(a.enableVertexAttribArray(k),ae[k]=1),K[k]!==U&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,U),K[k]=U)}function C(){const k=d.newAttributes,U=d.enabledAttributes;for(let N=0,ae=U.length;N<ae;N++)U[N]!==k[N]&&(a.disableVertexAttribArray(N),U[N]=0)}function M(k,U,N,ae,K,ne,pe){pe===!0?a.vertexAttribIPointer(k,U,N,K,ne):a.vertexAttribPointer(k,U,N,ae,K,ne)}function S(){j(),m=!0,d!==f&&(d=f,v(d.object))}function j(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:function(k,U,N,ae,K){let ne=!1;if(c){const pe=(function(B,ee,Z){const me=Z.wireframe===!0;let Me=p[B.id];Me===void 0&&(Me={},p[B.id]=Me);let se=Me[ee.id];se===void 0&&(se={},Me[ee.id]=se);let V=se[me];return V===void 0&&(V=y(i.isWebGL2?a.createVertexArray():l.createVertexArrayOES()),se[me]=V),V})(ae,N,U);d!==pe&&(d=pe,v(d.object)),ne=(function(B,ee,Z,me){const Me=d.attributes,se=ee.attributes;let V=0;const $=Z.getAttributes();for(const H in $)if($[H].location>=0){const w=Me[H];let F=se[H];if(F===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(F=B.instanceColor)),w===void 0||w.attribute!==F||F&&w.data!==F.data)return!0;V++}return d.attributesNum!==V||d.index!==me})(k,ae,N,K),ne&&(function(B,ee,Z,me){const Me={},se=ee.attributes;let V=0;const $=Z.getAttributes();for(const H in $)if($[H].location>=0){let w=se[H];w===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(w=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(w=B.instanceColor));const F={};F.attribute=w,w&&w.data&&(F.data=w.data),Me[H]=F,V++}d.attributes=Me,d.attributesNum=V,d.index=me})(k,ae,N,K)}else{const pe=U.wireframe===!0;d.geometry===ae.id&&d.program===N.id&&d.wireframe===pe||(d.geometry=ae.id,d.program=N.id,d.wireframe=pe,ne=!0)}K!==null&&n.update(K,a.ELEMENT_ARRAY_BUFFER),(ne||m)&&(m=!1,(function(pe,B,ee,Z){if(i.isWebGL2===!1&&(pe.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const me=Z.attributes,Me=ee.getAttributes(),se=B.defaultAttributeValues;for(const V in Me){const $=Me[V];if($.location>=0){let H=me[V];if(H===void 0&&(V==="instanceMatrix"&&pe.instanceMatrix&&(H=pe.instanceMatrix),V==="instanceColor"&&pe.instanceColor&&(H=pe.instanceColor)),H!==void 0){const w=H.normalized,F=H.itemSize,b=n.get(H);if(b===void 0)continue;const A=b.buffer,O=b.type,X=b.bytesPerElement,z=i.isWebGL2===!0&&(O===a.INT||O===a.UNSIGNED_INT||H.gpuType===zm);if(H.isInterleavedBufferAttribute){const Q=H.data,ce=Q.stride,oe=H.offset;if(Q.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)x($.location+_e,Q.meshPerAttribute);pe.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<$.locationSize;_e++)T($.location+_e);a.bindBuffer(a.ARRAY_BUFFER,A);for(let _e=0;_e<$.locationSize;_e++)M($.location+_e,F/$.locationSize,O,w,ce*X,(oe+F/$.locationSize*_e)*X,z)}else{if(H.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)x($.location+Q,H.meshPerAttribute);pe.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Q=0;Q<$.locationSize;Q++)T($.location+Q);a.bindBuffer(a.ARRAY_BUFFER,A);for(let Q=0;Q<$.locationSize;Q++)M($.location+Q,F/$.locationSize,O,w,F*X,F/$.locationSize*Q*X,z)}}else if(se!==void 0){const w=se[V];if(w!==void 0)switch(w.length){case 2:a.vertexAttrib2fv($.location,w);break;case 3:a.vertexAttrib3fv($.location,w);break;case 4:a.vertexAttrib4fv($.location,w);break;default:a.vertexAttrib1fv($.location,w)}}}}C()})(k,U,N,ae),K!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,n.get(K).buffer))},reset:S,resetDefaultState:j,dispose:function(){S();for(const k in p){const U=p[k];for(const N in U){const ae=U[N];for(const K in ae)_(ae[K].object),delete ae[K];delete U[N]}delete p[k]}},releaseStatesOfGeometry:function(k){if(p[k.id]===void 0)return;const U=p[k.id];for(const N in U){const ae=U[N];for(const K in ae)_(ae[K].object),delete ae[K];delete U[N]}delete p[k.id]},releaseStatesOfProgram:function(k){for(const U in p){const N=p[U];if(N[k.id]===void 0)continue;const ae=N[k.id];for(const K in ae)_(ae[K].object),delete ae[K];delete N[k.id]}},initAttributes:R,enableAttribute:T,disableUnusedAttributes:C}}function p0(a,e,n,i){const s=i.isWebGL2;let l;this.setMode=function(c){l=c},this.render=function(c,p){a.drawArrays(l,c,p),n.update(p,l,1)},this.renderInstances=function(c,p,f){if(f===0)return;let d,m;if(s)d=a,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[m](l,c,p,f),n.update(p,l,f)},this.renderMultiDraw=function(c,p,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(c[m],p[m]);else{d.multiDrawArraysWEBGL(l,c,0,p,0,f);let m=0;for(let v=0;v<f;v++)m+=p[v];n.update(m,l,1)}}}function m0(a,e,n){let i;function s(j){if(j==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const p=s(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const f=l||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,m=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),R=a.getParameter(a.MAX_VERTEX_ATTRIBS),T=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),x=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),M=v>0,S=l||e.has("OES_texture_float");return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,precision:c,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:y,maxAttributes:R,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:C,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:M&&S,maxSamples:l?a.getParameter(a.MAX_SAMPLES):0}}function g0(a){const e=this;let n=null,i=0,s=!1,l=!1;const c=new mi,p=new ot,f={value:null,needsUpdate:!1};function d(m,v,_,y){const R=m!==null?m.length:0;let T=null;if(R!==0){if(T=f.value,y!==!0||T===null){const x=_+4*R,C=v.matrixWorldInverse;p.getNormalMatrix(C),(T===null||T.length<x)&&(T=new Float32Array(x));for(let M=0,S=_;M!==R;++M,S+=4)c.copy(m[M]).applyMatrix4(C,p),c.normal.toArray(T,S),T[S+3]=c.constant}f.value=T,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,T}this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const _=m.length!==0||v||i!==0||s;return s=v,i=m.length,_},this.beginShadows=function(){l=!0,d(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,v){n=d(m,v,0)},this.setState=function(m,v,_){const y=m.clippingPlanes,R=m.clipIntersection,T=m.clipShadows,x=a.get(m);if(!s||y===null||y.length===0||l&&!T)l?d(null):(function(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{const C=l?0:i,M=4*C;let S=x.clippingState||null;f.value=S,S=d(y,v,M,_);for(let j=0;j!==M;++j)S[j]=n[j];x.clippingState=S,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=C}}}function v0(a){let e=new WeakMap;function n(s,l){return l===cd?s.mapping=qa:l===dd&&(s.mapping=$a),s}function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(s){if(s&&s.isTexture){const l=s.mapping;if(l===cd||l===dd){if(e.has(s))return n(e.get(s).texture,s.mapping);{const c=s.image;if(c&&c.height>0){const p=new l0(c.height/2);return p.fromEquirectangularTexture(a,s),e.set(s,p),s.addEventListener("dispose",i),n(p.texture,s.mapping)}return null}}}return s},dispose:function(){e=new WeakMap}}}class _0 extends Md{constructor(e=-1,n=1,i=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-e,c=i+e,p=s+n,f=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,p-=m*this.view.offsetY,f=p-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,p,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zp=[.125,.215,.35,.446,.526,.582],Bs=20,Zc=new _0,Qp=new mt;let Qc=null,Jc=0,ed=0;const ji=(1+Math.sqrt(5))/2,ja=1/ji,Jp=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,ji,ja),new Y(0,ji,-ja),new Y(ja,0,ji),new Y(-ja,0,ji),new Y(ji,ja,0),new Y(-ji,ja,0)];class em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,ed),e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qa||e.mapping===$a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ar,minFilter:ar,generateMipmaps:!1,type:js,format:gr,colorSpace:kr,depthBuffer:!1},s=tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,n,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(c){const p=[],f=[],d=[];let m=c;const v=c-4+1+Zp.length;for(let _=0;_<v;_++){const y=Math.pow(2,m);f.push(y);let R=1/y;_>c-4?R=Zp[_-c+4-1]:_===0&&(R=0),d.push(R);const T=1/(y-2),x=-T,C=1+T,M=[x,x,C,x,C,C,x,x,C,C,x,C],S=6,j=6,k=3,U=2,N=1,ae=new Float32Array(k*j*S),K=new Float32Array(U*j*S),ne=new Float32Array(N*j*S);for(let B=0;B<S;B++){const ee=B%3*2/3-1,Z=B>2?0:-1,me=[ee,Z,0,ee+2/3,Z,0,ee+2/3,Z+1,0,ee,Z,0,ee+2/3,Z+1,0,ee,Z+1,0];ae.set(me,k*j*B),K.set(M,U*j*B);const Me=[B,B,B,B,B,B];ne.set(Me,N*j*B)}const pe=new Ei;pe.setAttribute("position",new _r(ae,k)),pe.setAttribute("uv",new _r(K,U)),pe.setAttribute("faceIndex",new _r(ne,N)),p.push(pe),m>4&&m--}return{lodPlanes:p,sizeLods:f,sigmas:d}})(l)),this._blurMaterial=(function(c,p,f){const d=new Float32Array(Bs),m=new Y(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/p,CUBEUV_TEXEL_HEIGHT:1/f,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:d},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:m}},vertexShader:bd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(l,e,n)}return s}_compileMaterial(e){const n=new Wn(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,i,s){const l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Qp),f.toneMapping=_i,f.autoClear=!1;const v=new Fl({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),_=new Wn(new $s,v);let y=!1;const R=e.background;R?R.isColor&&(v.color.copy(R),e.background=null,y=!0):(v.color.copy(Qp),y=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.lookAt(p[T],0,0)):x===1?(l.up.set(0,0,c[T]),l.lookAt(0,p[T],0)):(l.up.set(0,c[T],0),l.lookAt(0,0,p[T]));const C=this._cubeSize;yl(s,x*C,T>2?C:0,C,C),f.setRenderTarget(s),y&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=R}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===qa||e.mapping===$a;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Wn(this._lodPlanes[0],l);l.uniforms.envMap.value=e;const p=this._cubeSize;yl(n,0,0,3*p,2*p),i.setRenderTarget(n),i.render(c,Zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Jp[(s-1)%Jp.length];this._blur(e,s-1,s,l,c)}n.autoClear=i}_blur(e,n,i,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,i,s,"latitudinal",l),this._halfBlur(c,e,i,i,s,"longitudinal",l)}_halfBlur(e,n,i,s,l,c,p){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=new Wn(this._lodPlanes[s],d),v=d.uniforms,_=this._sizeLods[i]-1,y=isFinite(l)?Math.PI/(2*_):2*Math.PI/39,R=l/y,T=isFinite(l)?1+Math.floor(3*R):Bs;T>Bs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${T} samples when the maximum is set to 20`);const x=[];let C=0;for(let j=0;j<Bs;++j){const k=j/R,U=Math.exp(-k*k/2);x.push(U),j===0?C+=U:j<T&&(C+=2*U)}for(let j=0;j<x.length;j++)x[j]=x[j]/C;v.envMap.value=e.texture,v.samples.value=T,v.weights.value=x,v.latitudinal.value=c==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:M}=this;v.dTheta.value=y,v.mipInt.value=M-i;const S=this._sizeLods[s];yl(n,3*S*(s>M-4?s-M+4:0),4*(this._cubeSize-S),3*S,2*S),f.setRenderTarget(n),f.render(m,Zc)}}function tm(a,e,n){const i=new Zi(a,e,n);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yl(a,e,n,i,s){a.viewport.set(e,n,i,s),a.scissor.set(e,n,i,s)}function nm(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function rm(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bd(){return`

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
	`}function x0(a){let e=new WeakMap,n=null;function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(s){if(s&&s.isTexture){const l=s.mapping,c=l===cd||l===dd,p=l===qa||l===$a;if(c||p){if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new em(a)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||p&&f&&(function(d){let m=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&m++;return m===v})(f)){n===null&&(n=new em(a));const d=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",i),d.texture}return null}}}return s},dispose:function(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function y0(a){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function S0(a,e,n,i){const s={},l=new WeakMap;function c(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let y=0,R=_.length;y<R;y++)e.remove(_[y])}d.removeEventListener("dispose",c),delete s[d.id];const m=l.get(d);m&&(e.remove(m),l.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function p(f){const d=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let x=0,C=T.length;x<C;x+=3){const M=T[x+0],S=T[x+1],j=T[x+2];d.push(M,S,S,j,j,M)}}else{if(v===void 0)return;{const T=v.array;_=v.version;for(let x=0,C=T.length/3-1;x<C;x+=3){const M=x+0,S=x+1,j=x+2;d.push(M,S,S,j,j,M)}}}const y=new(Ym(d)?eg:Jm)(d,1);y.version=_;const R=l.get(f);R&&e.remove(R),l.set(f,y)}return{get:function(f,d){return s[d.id]===!0||(d.addEventListener("dispose",c),s[d.id]=!0,n.memory.geometries++),d},update:function(f){const d=f.attributes;for(const v in d)e.update(d[v],a.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let y=0,R=_.length;y<R;y++)e.update(_[y],a.ARRAY_BUFFER)}},getWireframeAttribute:function(f){const d=l.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&p(f)}else p(f);return l.get(f)}}}function E0(a,e,n,i){const s=i.isWebGL2;let l,c,p;this.setMode=function(f){l=f},this.setIndex=function(f){c=f.type,p=f.bytesPerElement},this.render=function(f,d){a.drawElements(l,d,c,f*p),n.update(d,l,1)},this.renderInstances=function(f,d,m){if(m===0)return;let v,_;if(s)v=a,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");v[_](l,d,c,f*p,m),n.update(d,l,m)},this.renderMultiDraw=function(f,d,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<m;_++)this.render(f[_]/p,d[_]);else{v.multiDrawElementsWEBGL(l,d,0,c,f,0,m);let _=0;for(let y=0;y<m;y++)_+=d[y];n.update(_,l,1)}}}function M0(a){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,s){switch(e.calls++,i){case a.TRIANGLES:e.triangles+=s*(n/3);break;case a.LINES:e.lines+=s*(n/2);break;case a.LINE_STRIP:e.lines+=s*(n-1);break;case a.LINE_LOOP:e.lines+=s*n;break;case a.POINTS:e.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function w0(a,e){return a[0]-e[0]}function T0(a,e){return Math.abs(e[1])-Math.abs(a[1])}function b0(a,e,n){const i={},s=new Float32Array(8),l=new WeakMap,c=new Ht,p=[];for(let f=0;f<8;f++)p[f]=[f,0];return{update:function(f,d,m){const v=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,R=y!==void 0?y.length:0;let T=l.get(d);if(T===void 0||T.count!==R){let Z=function(){B.dispose(),l.delete(d),d.removeEventListener("dispose",Z)};var _=Z;T!==void 0&&T.texture.dispose();const M=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,j=d.morphAttributes.color!==void 0,k=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let ae=0;M===!0&&(ae=1),S===!0&&(ae=2),j===!0&&(ae=3);let K=d.attributes.position.count*ae,ne=1;K>e.maxTextureSize&&(ne=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const pe=new Float32Array(K*ne*4*R),B=new Km(pe,K,ne,R);B.type=vi,B.needsUpdate=!0;const ee=4*ae;for(let me=0;me<R;me++){const Me=k[me],se=U[me],V=N[me],$=K*ne*4*me;for(let H=0;H<Me.count;H++){const w=H*ee;M===!0&&(c.fromBufferAttribute(Me,H),pe[$+w+0]=c.x,pe[$+w+1]=c.y,pe[$+w+2]=c.z,pe[$+w+3]=0),S===!0&&(c.fromBufferAttribute(se,H),pe[$+w+4]=c.x,pe[$+w+5]=c.y,pe[$+w+6]=c.z,pe[$+w+7]=0),j===!0&&(c.fromBufferAttribute(V,H),pe[$+w+8]=c.x,pe[$+w+9]=c.y,pe[$+w+10]=c.z,pe[$+w+11]=V.itemSize===4?c.w:1)}}T={count:R,texture:B,size:new Qe(K,ne)},l.set(d,T),d.addEventListener("dispose",Z)}let x=0;for(let M=0;M<v.length;M++)x+=v[M];const C=d.morphTargetsRelative?1:1-x;m.getUniforms().setValue(a,"morphTargetBaseInfluence",C),m.getUniforms().setValue(a,"morphTargetInfluences",v),m.getUniforms().setValue(a,"morphTargetsTexture",T.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",T.size)}else{const y=v===void 0?0:v.length;let R=i[d.id];if(R===void 0||R.length!==y){R=[];for(let S=0;S<y;S++)R[S]=[S,0];i[d.id]=R}for(let S=0;S<y;S++){const j=R[S];j[0]=S,j[1]=v[S]}R.sort(T0);for(let S=0;S<8;S++)S<y&&R[S][1]?(p[S][0]=R[S][0],p[S][1]=R[S][1]):(p[S][0]=Number.MAX_SAFE_INTEGER,p[S][1]=0);p.sort(w0);const T=d.morphAttributes.position,x=d.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const j=p[S],k=j[0],U=j[1];k!==Number.MAX_SAFE_INTEGER&&U?(T&&d.getAttribute("morphTarget"+S)!==T[k]&&d.setAttribute("morphTarget"+S,T[k]),x&&d.getAttribute("morphNormal"+S)!==x[k]&&d.setAttribute("morphNormal"+S,x[k]),s[S]=U,C+=U):(T&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),x&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),s[S]=0)}const M=d.morphTargetsRelative?1:1-C;m.getUniforms().setValue(a,"morphTargetBaseInfluence",M),m.getUniforms().setValue(a,"morphTargetInfluences",s)}}}}function R0(a,e,n,i){let s=new WeakMap;function l(c){const p=c.target;p.removeEventListener("dispose",l),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:function(c){const p=i.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==p&&(e.update(d),s.set(d,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return d},dispose:function(){s=new WeakMap}}}class ig extends Tn{constructor(e,n,i,s,l,c,p,f,d,m){if((m=m!==void 0?m:$i)!==$i&&m!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===$i&&(i=gi),i===void 0&&m===Ka&&(i=qi),super(null,s,l,c,p,f,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=p!==void 0?p:dn,this.minFilter=f!==void 0?f:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ag=new Tn,sg=new ig(1,1);sg.compareFunction=515;const og=new Km,lg=new q_,ug=new ng,im=[],am=[],sm=new Float32Array(16),om=new Float32Array(9),lm=new Float32Array(4);function Ja(a,e,n){const i=a[0];if(i<=0||i>0)return a;const s=e*n;let l=im[s];if(l===void 0&&(l=new Float32Array(s),im[s]=l),e!==0){i.toArray(l,0);for(let c=1,p=0;c!==e;++c)p+=n,a[c].toArray(l,p)}return l}function Gt(a,e){if(a.length!==e.length)return!1;for(let n=0,i=a.length;n<i;n++)if(a[n]!==e[n])return!1;return!0}function Vt(a,e){for(let n=0,i=e.length;n<i;n++)a[n]=e[n]}function zl(a,e){let n=am[e];n===void 0&&(n=new Int32Array(e),am[e]=n);for(let i=0;i!==e;++i)n[i]=a.allocateTextureUnit();return n}function A0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function C0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;a.uniform2fv(this.addr,e),Vt(n,e)}}function L0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;a.uniform3fv(this.addr,e),Vt(n,e)}}function P0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;a.uniform4fv(this.addr,e),Vt(n,e)}}function N0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Gt(n,i))return;lm.set(i),a.uniformMatrix2fv(this.addr,!1,lm),Vt(n,i)}}function D0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Gt(n,i))return;om.set(i),a.uniformMatrix3fv(this.addr,!1,om),Vt(n,i)}}function U0(a,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Gt(n,i))return;sm.set(i),a.uniformMatrix4fv(this.addr,!1,sm),Vt(n,i)}}function I0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function O0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;a.uniform2iv(this.addr,e),Vt(n,e)}}function k0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;a.uniform3iv(this.addr,e),Vt(n,e)}}function F0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;a.uniform4iv(this.addr,e),Vt(n,e)}}function z0(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function B0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;a.uniform2uiv(this.addr,e),Vt(n,e)}}function H0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;a.uniform3uiv(this.addr,e),Vt(n,e)}}function G0(a,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;a.uniform4uiv(this.addr,e),Vt(n,e)}}function V0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);const l=this.type===a.SAMPLER_2D_SHADOW?sg:ag;n.setTexture2D(e||l,s)}function j0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||lg,s)}function W0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||ug,s)}function X0(a,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||og,s)}function Y0(a,e){a.uniform1fv(this.addr,e)}function q0(a,e){const n=Ja(e,this.size,2);a.uniform2fv(this.addr,n)}function $0(a,e){const n=Ja(e,this.size,3);a.uniform3fv(this.addr,n)}function K0(a,e){const n=Ja(e,this.size,4);a.uniform4fv(this.addr,n)}function Z0(a,e){const n=Ja(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function Q0(a,e){const n=Ja(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function J0(a,e){const n=Ja(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function ex(a,e){a.uniform1iv(this.addr,e)}function tx(a,e){a.uniform2iv(this.addr,e)}function nx(a,e){a.uniform3iv(this.addr,e)}function rx(a,e){a.uniform4iv(this.addr,e)}function ix(a,e){a.uniform1uiv(this.addr,e)}function ax(a,e){a.uniform2uiv(this.addr,e)}function sx(a,e){a.uniform3uiv(this.addr,e)}function ox(a,e){a.uniform4uiv(this.addr,e)}function lx(a,e,n){const i=this.cache,s=e.length,l=zl(n,s);Gt(i,l)||(a.uniform1iv(this.addr,l),Vt(i,l));for(let c=0;c!==s;++c)n.setTexture2D(e[c]||ag,l[c])}function ux(a,e,n){const i=this.cache,s=e.length,l=zl(n,s);Gt(i,l)||(a.uniform1iv(this.addr,l),Vt(i,l));for(let c=0;c!==s;++c)n.setTexture3D(e[c]||lg,l[c])}function cx(a,e,n){const i=this.cache,s=e.length,l=zl(n,s);Gt(i,l)||(a.uniform1iv(this.addr,l),Vt(i,l));for(let c=0;c!==s;++c)n.setTextureCube(e[c]||ug,l[c])}function dx(a,e,n){const i=this.cache,s=e.length,l=zl(n,s);Gt(i,l)||(a.uniform1iv(this.addr,l),Vt(i,l));for(let c=0;c!==s;++c)n.setTexture2DArray(e[c]||og,l[c])}class hx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=(function(s){switch(s){case 5126:return A0;case 35664:return C0;case 35665:return L0;case 35666:return P0;case 35674:return N0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return I0;case 35667:case 35671:return O0;case 35668:case 35672:return k0;case 35669:case 35673:return F0;case 5125:return z0;case 36294:return B0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}})(n.type)}}class fx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=(function(s){switch(s){case 5126:return Y0;case 35664:return q0;case 35665:return $0;case 35666:return K0;case 35674:return Z0;case 35675:return Q0;case 35676:return J0;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return rx;case 5125:return ix;case 36294:return ax;case 36295:return sx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return dx}})(n.type)}}class px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const p=s[l];p.setValue(e,n[p.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function um(a,e){a.seq.push(e),a.map[e.id]=e}function mx(a,e,n){const i=a.name,s=i.length;for(td.lastIndex=0;;){const l=td.exec(i),c=td.lastIndex;let p=l[1];const f=l[2]==="]",d=l[3];if(f&&(p|=0),d===void 0||d==="["&&c+2===s){um(n,d===void 0?new hx(p,a,e):new fx(p,a,e));break}{let m=n.map[p];m===void 0&&(m=new px(p),um(n,m)),n=m}}}class wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(n,s);mx(l,e.getUniformLocation(n,l.name),this)}}setValue(e,n,i,s){const l=this.map[n];l!==void 0&&l.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let l=0,c=n.length;l!==c;++l){const p=n[l],f=i[p.id];f.needsUpdate!==!1&&p.setValue(e,f.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in n&&i.push(c)}return i}}function cm(a,e,n){const i=a.createShader(e);return a.shaderSource(i,n),a.compileShader(i),i}const gx=37297;let vx=0;function dm(a,e,n){const i=a.getShaderParameter(e,a.COMPILE_STATUS),s=a.getShaderInfoLog(e).trim();if(i&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+s+`

`+(function(p,f){const d=p.split(`
`),m=[],v=Math.max(f-6,0),_=Math.min(f+6,d.length);for(let y=v;y<_;y++){const R=y+1;m.push(`${R===f?">":" "} ${R}: ${d[y]}`)}return m.join(`
`)})(a.getShaderSource(e),c)}return s}function _x(a,e){const n=(function(i){const s=vt.getPrimaries(vt.workingColorSpace),l=vt.getPrimaries(i);let c;switch(s===l?c="":s===Cl&&l===Al?c="LinearDisplayP3ToLinearSRGB":s===Al&&l===Cl&&(c="LinearSRGBToLinearDisplayP3"),i){case kr:case Il:return[c,"LinearTransferOETF"];case Bt:case Ed:return[c,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[c,"LinearTransferOETF"]}})(e);return`vec4 ${a}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xx(a,e){let n;switch(e){case U_:n="Linear";break;case I_:n="Reinhard";break;case O_:n="OptimizedCineon";break;case k_:n="ACESFilmic";break;case z_:n="AgX";break;case F_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Wa(a){return a!==""}function hm(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(a){return a.replace(yx,Ex)}const Sx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ex(a,e){let n=rt[e];if(n===void 0){const i=Sx.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");n=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return vd(n)}const Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(a){return a.replace(Mx,wx)}function wx(a,e,n,i){let s="";for(let l=parseInt(e);l<parseInt(n);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function mm(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tx(a,e,n,i){const s=a.getContext(),l=n.defines;let c=n.vertexShader,p=n.fragmentShader;const f=(function(B){let ee="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Om?ee="SHADOWMAP_TYPE_PCF":B.shadowMapType===P_?ee="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===Ir&&(ee="SHADOWMAP_TYPE_VSM"),ee})(n),d=(function(B){let ee="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case qa:case $a:ee="ENVMAP_TYPE_CUBE";break;case Ul:ee="ENVMAP_TYPE_CUBE_UV"}return ee})(n),m=(function(B){let ee="ENVMAP_MODE_REFLECTION";return B.envMap&&B.envMapMode===$a&&(ee="ENVMAP_MODE_REFRACTION"),ee})(n),v=(function(B){let ee="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case km:ee="ENVMAP_BLENDING_MULTIPLY";break;case N_:ee="ENVMAP_BLENDING_MIX";break;case D_:ee="ENVMAP_BLENDING_ADD"}return ee})(n),_=(function(B){const ee=B.envMapCubeUVHeight;if(ee===null)return null;const Z=Math.log2(ee)-2,me=1/ee;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:me,maxMip:Z}})(n),y=n.isWebGL2?"":(function(B){return[B.extensionDerivatives||B.envMapCubeUVHeight||B.bumpMap||B.normalMapTangentSpace||B.clearcoatNormalMap||B.flatShading||B.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(B.extensionFragDepth||B.logarithmicDepthBuffer)&&B.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",B.extensionDrawBuffers&&B.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(B.extensionShaderTextureLOD||B.envMap||B.transmission)&&B.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wa).join(`
`)})(n),R=(function(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wa).join(`
`)})(n),T=(function(B){const ee=[];for(const Z in B){const me=B[Z];me!==!1&&ee.push("#define "+Z+" "+me)}return ee.join(`
`)})(l),x=s.createProgram();let C,M,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(C=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Wa).join(`
`),C.length>0&&(C+=`
`),M=[y,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Wa).join(`
`),M.length>0&&(M+=`
`)):(C=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),M=[y,mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?rt.tonemapping_pars_fragment:"",n.toneMapping!==_i?xx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,_x("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),c=vd(c),c=hm(c,n),c=fm(c,n),p=vd(p),p=hm(p,n),p=fm(p,n),c=pm(c),p=pm(p),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,C=[R,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,M=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const j=S+C+c,k=S+M+p,U=cm(s,s.VERTEX_SHADER,j),N=cm(s,s.FRAGMENT_SHADER,k);function ae(B){if(a.debug.checkShaderErrors){const ee=s.getProgramInfoLog(x).trim(),Z=s.getShaderInfoLog(U).trim(),me=s.getShaderInfoLog(N).trim();let Me=!0,se=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Me=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,x,U,N);else{const V=dm(s,U,"vertex"),$=dm(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+V+`
`+$)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):Z!==""&&me!==""||(se=!1);se&&(B.diagnostics={runnable:Me,programLog:ee,vertexShader:{log:Z,prefix:C},fragmentShader:{log:me,prefix:M}})}s.deleteShader(U),s.deleteShader(N),K=new wl(s,x),ne=(function(ee,Z){const me={},Me=ee.getProgramParameter(Z,ee.ACTIVE_ATTRIBUTES);for(let se=0;se<Me;se++){const V=ee.getActiveAttrib(Z,se),$=V.name;let H=1;V.type===ee.FLOAT_MAT2&&(H=2),V.type===ee.FLOAT_MAT3&&(H=3),V.type===ee.FLOAT_MAT4&&(H=4),me[$]={type:V.type,location:ee.getAttribLocation(Z,$),locationSize:H}}return me})(s,x)}let K,ne;s.attachShader(x,U),s.attachShader(x,N),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x),this.getUniforms=function(){return K===void 0&&ae(this),K},this.getAttributes=function(){return ne===void 0&&ae(this),ne};let pe=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pe===!1&&(pe=s.getProgramParameter(x,gx)),pe},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=N,this}let bx=0;class Rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ax(e),n.set(e,i)),i}}class Ax{constructor(e){this.id=bx++,this.code=e,this.usedTimes=0}}function Cx(a,e,n,i,s,l,c){const p=new Zm,f=new Rx,d=[],m=s.isWebGL2,v=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(x){return x===0?"uv":`uv${x}`}return{getParameters:function(x,C,M,S,j){const k=S.fog,U=j.geometry,N=x.isMeshStandardMaterial?S.environment:null,ae=(x.isMeshStandardMaterial?n:e).get(x.envMap||N),K=ae&&ae.mapping===Ul?ae.image.height:null,ne=R[x.type];x.precision!==null&&(y=s.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const pe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,B=pe!==void 0?pe.length:0;let ee,Z,me,Me,se=0;if(U.morphAttributes.position!==void 0&&(se=1),U.morphAttributes.normal!==void 0&&(se=2),U.morphAttributes.color!==void 0&&(se=3),ne){const Pt=mr[ne];ee=Pt.vertexShader,Z=Pt.fragmentShader}else ee=x.vertexShader,Z=x.fragmentShader,f.update(x),me=f.getVertexShaderID(x),Me=f.getFragmentShaderID(x);const V=a.getRenderTarget(),$=j.isInstancedMesh===!0,H=j.isBatchedMesh===!0,w=!!x.map,F=!!x.matcap,b=!!ae,A=!!x.aoMap,O=!!x.lightMap,X=!!x.bumpMap,z=!!x.normalMap,Q=!!x.displacementMap,ce=!!x.emissiveMap,oe=!!x.metalnessMap,_e=!!x.roughnessMap,Ce=x.anisotropy>0,De=x.clearcoat>0,P=x.iridescence>0,Te=x.sheen>0,he=x.transmission>0,de=Ce&&!!x.anisotropyMap,ye=De&&!!x.clearcoatMap,Re=De&&!!x.clearcoatNormalMap,be=De&&!!x.clearcoatRoughnessMap,Ie=P&&!!x.iridescenceMap,Ge=P&&!!x.iridescenceThicknessMap,Pe=Te&&!!x.sheenColorMap,ke=Te&&!!x.sheenRoughnessMap,Je=!!x.specularMap,et=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Xe=he&&!!x.transmissionMap,Ve=he&&!!x.thicknessMap,Dt=!!x.gradientMap,Tt=!!x.alphaMap,W=x.alphaTest>0,Ue=!!x.alphaHash,Ze=!!x.extensions,dt=!!U.attributes.uv1,ie=!!U.attributes.uv2,qt=!!U.attributes.uv3;let Ct=_i;return x.toneMapped&&(V!==null&&V.isXRRenderTarget!==!0||(Ct=a.toneMapping)),{isWebGL2:m,shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:Z,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:H,instancing:$,instancingColor:$&&j.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:V===null?a.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:kr,map:w,matcap:F,envMap:b,envMapMode:b&&ae.mapping,envMapCubeUVHeight:K,aoMap:A,lightMap:O,bumpMap:X,normalMap:z,displacementMap:_&&Q,emissiveMap:ce,normalMapObjectSpace:z&&x.normalMapType===1,normalMapTangentSpace:z&&x.normalMapType===0,metalnessMap:oe,roughnessMap:_e,anisotropy:Ce,anisotropyMap:de,clearcoat:De,clearcoatMap:ye,clearcoatNormalMap:Re,clearcoatRoughnessMap:be,iridescence:P,iridescenceMap:Ie,iridescenceThicknessMap:Ge,sheen:Te,sheenColorMap:Pe,sheenRoughnessMap:ke,specularMap:Je,specularColorMap:et,specularIntensityMap:Ne,transmission:he,transmissionMap:Xe,thicknessMap:Ve,gradientMap:Dt,opaque:x.transparent===!1&&x.blending===1,alphaMap:Tt,alphaTest:W,alphaHash:Ue,combine:x.combine,mapUv:w&&T(x.map.channel),aoMapUv:A&&T(x.aoMap.channel),lightMapUv:O&&T(x.lightMap.channel),bumpMapUv:X&&T(x.bumpMap.channel),normalMapUv:z&&T(x.normalMap.channel),displacementMapUv:Q&&T(x.displacementMap.channel),emissiveMapUv:ce&&T(x.emissiveMap.channel),metalnessMapUv:oe&&T(x.metalnessMap.channel),roughnessMapUv:_e&&T(x.roughnessMap.channel),anisotropyMapUv:de&&T(x.anisotropyMap.channel),clearcoatMapUv:ye&&T(x.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&T(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&T(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&T(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&T(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(x.sheenRoughnessMap.channel),specularMapUv:Je&&T(x.specularMap.channel),specularColorMapUv:et&&T(x.specularColorMap.channel),specularIntensityMapUv:Ne&&T(x.specularIntensityMap.channel),transmissionMapUv:Xe&&T(x.transmissionMap.channel),thicknessMapUv:Ve&&T(x.thicknessMap.channel),alphaMapUv:Tt&&T(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(z||Ce),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:dt,vertexUv2s:ie,vertexUv3s:qt,pointsUvs:j.isPoints===!0&&!!U.attributes.uv&&(w||Tt),fog:!!k,useFog:x.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:j.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&M.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ct,useLegacyLights:a._useLegacyLights,decodeVideoTexture:w&&x.map.isVideoTexture===!0&&vt.getTransfer(x.map.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ze&&x.extensions.derivatives===!0,extensionFragDepth:Ze&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ze&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ze&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ze&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}},getProgramCacheKey:function(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const M in x.defines)C.push(M),C.push(x.defines[M]);return x.isRawShaderMaterial===!1&&((function(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)})(C,x),(function(M,S){p.disableAll(),S.isWebGL2&&p.enable(0),S.supportsVertexTextures&&p.enable(1),S.instancing&&p.enable(2),S.instancingColor&&p.enable(3),S.matcap&&p.enable(4),S.envMap&&p.enable(5),S.normalMapObjectSpace&&p.enable(6),S.normalMapTangentSpace&&p.enable(7),S.clearcoat&&p.enable(8),S.iridescence&&p.enable(9),S.alphaTest&&p.enable(10),S.vertexColors&&p.enable(11),S.vertexAlphas&&p.enable(12),S.vertexUv1s&&p.enable(13),S.vertexUv2s&&p.enable(14),S.vertexUv3s&&p.enable(15),S.vertexTangents&&p.enable(16),S.anisotropy&&p.enable(17),S.alphaHash&&p.enable(18),S.batching&&p.enable(19),M.push(p.mask),p.disableAll(),S.fog&&p.enable(0),S.useFog&&p.enable(1),S.flatShading&&p.enable(2),S.logarithmicDepthBuffer&&p.enable(3),S.skinning&&p.enable(4),S.morphTargets&&p.enable(5),S.morphNormals&&p.enable(6),S.morphColors&&p.enable(7),S.premultipliedAlpha&&p.enable(8),S.shadowMapEnabled&&p.enable(9),S.useLegacyLights&&p.enable(10),S.doubleSided&&p.enable(11),S.flipSided&&p.enable(12),S.useDepthPacking&&p.enable(13),S.dithering&&p.enable(14),S.transmission&&p.enable(15),S.sheen&&p.enable(16),S.opaque&&p.enable(17),S.pointsUvs&&p.enable(18),S.decodeVideoTexture&&p.enable(19),M.push(p.mask)})(C,x),C.push(a.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()},getUniforms:function(x){const C=R[x.type];let M;if(C){const S=mr[C];M=s0.clone(S.uniforms)}else M=x.uniforms;return M},acquireProgram:function(x,C){let M;for(let S=0,j=d.length;S<j;S++){const k=d[S];if(k.cacheKey===C){M=k,++M.usedTimes;break}}return M===void 0&&(M=new Tx(a,C,x,l),d.push(M)),M},releaseProgram:function(x){if(--x.usedTimes==0){const C=d.indexOf(x);d[C]=d[d.length-1],d.pop(),x.destroy()}},releaseShaderCache:function(x){f.remove(x)},programs:d,dispose:function(){f.dispose()}}}function Lx(){let a=new WeakMap;return{get:function(e){let n=a.get(e);return n===void 0&&(n={},a.set(e,n)),n},remove:function(e){a.delete(e)},update:function(e,n,i){a.get(e)[n]=i},dispose:function(){a=new WeakMap}}}function Px(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function gm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function vm(){const a=[];let e=0;const n=[],i=[],s=[];function l(c,p,f,d,m,v){let _=a[e];return _===void 0?(_={id:c.id,object:c,geometry:p,material:f,groupOrder:d,renderOrder:c.renderOrder,z:m,group:v},a[e]=_):(_.id=c.id,_.object=c,_.geometry=p,_.material=f,_.groupOrder=d,_.renderOrder=c.renderOrder,_.z=m,_.group=v),e++,_}return{opaque:n,transmissive:i,transparent:s,init:function(){e=0,n.length=0,i.length=0,s.length=0},push:function(c,p,f,d,m,v){const _=l(c,p,f,d,m,v);f.transmission>0?i.push(_):f.transparent===!0?s.push(_):n.push(_)},unshift:function(c,p,f,d,m,v){const _=l(c,p,f,d,m,v);f.transmission>0?i.unshift(_):f.transparent===!0?s.unshift(_):n.unshift(_)},finish:function(){for(let c=e,p=a.length;c<p;c++){const f=a[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}},sort:function(c,p){n.length>1&&n.sort(c||Px),i.length>1&&i.sort(p||gm),s.length>1&&s.sort(p||gm)}}}function Nx(){let a=new WeakMap;return{get:function(e,n){const i=a.get(e);let s;return i===void 0?(s=new vm,a.set(e,[s])):n>=i.length?(s=new vm,i.push(s)):s=i[n],s},dispose:function(){a=new WeakMap}}}function Dx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new mt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new Y,halfWidth:new Y,halfHeight:new Y}}return a[e.id]=n,n}}}let Ux=0;function Ix(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Ox(a,e){const n=new Dx,i=(function(){const f={};return{get:function(d){if(f[d.id]!==void 0)return f[d.id];let m;switch(d.type){case"DirectionalLight":case"SpotLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3}}return f[d.id]=m,m}}})(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)s.probe.push(new Y);const l=new Y,c=new lt,p=new lt;return{setup:function(f,d){let m=0,v=0,_=0;for(let ne=0;ne<9;ne++)s.probe[ne].set(0,0,0);let y=0,R=0,T=0,x=0,C=0,M=0,S=0,j=0,k=0,U=0,N=0;f.sort(Ix);const ae=d===!0?Math.PI:1;for(let ne=0,pe=f.length;ne<pe;ne++){const B=f[ne],ee=B.color,Z=B.intensity,me=B.distance,Me=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=ee.r*Z*ae,v+=ee.g*Z*ae,_+=ee.b*Z*ae;else if(B.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(B.sh.coefficients[se],Z);N++}else if(B.isDirectionalLight){const se=n.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity*ae),B.castShadow){const V=B.shadow,$=i.get(B);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,s.directionalShadow[y]=$,s.directionalShadowMap[y]=Me,s.directionalShadowMatrix[y]=B.shadow.matrix,M++}s.directional[y]=se,y++}else if(B.isSpotLight){const se=n.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(ee).multiplyScalar(Z*ae),se.distance=me,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,s.spot[T]=se;const V=B.shadow;if(B.map&&(s.spotLightMap[k]=B.map,k++,V.updateMatrices(B),B.castShadow&&U++),s.spotLightMatrix[T]=V.matrix,B.castShadow){const $=i.get(B);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,s.spotShadow[T]=$,s.spotShadowMap[T]=Me,j++}T++}else if(B.isRectAreaLight){const se=n.get(B);se.color.copy(ee).multiplyScalar(Z),se.halfWidth.set(.5*B.width,0,0),se.halfHeight.set(0,.5*B.height,0),s.rectArea[x]=se,x++}else if(B.isPointLight){const se=n.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity*ae),se.distance=B.distance,se.decay=B.decay,B.castShadow){const V=B.shadow,$=i.get(B);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,s.pointShadow[R]=$,s.pointShadowMap[R]=Me,s.pointShadowMatrix[R]=B.shadow.matrix,S++}s.point[R]=se,R++}else if(B.isHemisphereLight){const se=n.get(B);se.skyColor.copy(B.color).multiplyScalar(Z*ae),se.groundColor.copy(B.groundColor).multiplyScalar(Z*ae),s.hemi[C]=se,C++}}x>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=_;const K=s.hash;K.directionalLength===y&&K.pointLength===R&&K.spotLength===T&&K.rectAreaLength===x&&K.hemiLength===C&&K.numDirectionalShadows===M&&K.numPointShadows===S&&K.numSpotShadows===j&&K.numSpotMaps===k&&K.numLightProbes===N||(s.directional.length=y,s.spot.length=T,s.rectArea.length=x,s.point.length=R,s.hemi.length=C,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=j,s.spotShadowMap.length=j,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=j+k-U,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=N,K.directionalLength=y,K.pointLength=R,K.spotLength=T,K.rectAreaLength=x,K.hemiLength=C,K.numDirectionalShadows=M,K.numPointShadows=S,K.numSpotShadows=j,K.numSpotMaps=k,K.numLightProbes=N,s.version=Ux++)},setupView:function(f,d){let m=0,v=0,_=0,y=0,R=0;const T=d.matrixWorldInverse;for(let x=0,C=f.length;x<C;x++){const M=f[x];if(M.isDirectionalLight){const S=s.directional[m];S.direction.setFromMatrixPosition(M.matrixWorld),l.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(T),m++}else if(M.isSpotLight){const S=s.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(T),S.direction.setFromMatrixPosition(M.matrixWorld),l.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(T),_++}else if(M.isRectAreaLight){const S=s.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(T),p.identity(),c.copy(M.matrixWorld),c.premultiply(T),p.extractRotation(c),S.halfWidth.set(.5*M.width,0,0),S.halfHeight.set(0,.5*M.height,0),S.halfWidth.applyMatrix4(p),S.halfHeight.applyMatrix4(p),y++}else if(M.isPointLight){const S=s.point[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(T),v++}else if(M.isHemisphereLight){const S=s.hemi[R];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(T),R++}}},state:s}}function _m(a,e){const n=new Ox(a,e),i=[],s=[];return{init:function(){i.length=0,s.length=0},state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:function(l){n.setup(i,l)},setupLightsView:function(l){n.setupView(i,l)},pushLight:function(l){i.push(l)},pushShadow:function(l){s.push(l)}}}function kx(a,e){let n=new WeakMap;return{get:function(i,s=0){const l=n.get(i);let c;return l===void 0?(c=new _m(a,e),n.set(i,[c])):s>=l.length?(c=new _m(a,e),l.push(c)):c=l[s],c},dispose:function(){n=new WeakMap}}}class Fx extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zx extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Bx(a,e,n){let i=new wd;const s=new Qe,l=new Qe,c=new Ht,p=new Fx({depthPacking:3201}),f=new zx,d={},m=n.maxTextureSize,v={[xi]:wn,[wn]:xi,2:2},_=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:`void main() {
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
}`}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const R=new Ei;R.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Wn(R,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Om;let C=this.type;function M(U,N){const ae=e.update(T);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Zi(s.x,s.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,a.setRenderTarget(U.mapPass),a.clear(),a.renderBufferDirect(N,null,ae,_,T,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,a.setRenderTarget(U.map),a.clear(),a.renderBufferDirect(N,null,ae,y,T,null)}function S(U,N,ae,K){let ne=null;const pe=ae.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(pe!==void 0)ne=pe;else if(ne=ae.isPointLight===!0?f:p,a.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const B=ne.uuid,ee=N.uuid;let Z=d[B];Z===void 0&&(Z={},d[B]=Z);let me=Z[ee];me===void 0&&(me=ne.clone(),Z[ee]=me,N.addEventListener("dispose",k)),ne=me}return ne.visible=N.visible,ne.wireframe=N.wireframe,ne.side=K===Ir?N.shadowSide!==null?N.shadowSide:N.side:N.shadowSide!==null?N.shadowSide:v[N.side],ne.alphaMap=N.alphaMap,ne.alphaTest=N.alphaTest,ne.map=N.map,ne.clipShadows=N.clipShadows,ne.clippingPlanes=N.clippingPlanes,ne.clipIntersection=N.clipIntersection,ne.displacementMap=N.displacementMap,ne.displacementScale=N.displacementScale,ne.displacementBias=N.displacementBias,ne.wireframeLinewidth=N.wireframeLinewidth,ne.linewidth=N.linewidth,ae.isPointLight===!0&&ne.isMeshDistanceMaterial===!0&&(a.properties.get(ne).light=ae),ne}function j(U,N,ae,K,ne){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&ne===Ir)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,U.matrixWorld);const B=e.update(U),ee=U.material;if(Array.isArray(ee)){const Z=B.groups;for(let me=0,Me=Z.length;me<Me;me++){const se=Z[me],V=ee[se.materialIndex];if(V&&V.visible){const $=S(U,V,K,ne);U.onBeforeShadow(a,U,N,ae,B,$,se),a.renderBufferDirect(ae,null,B,$,U,se),U.onAfterShadow(a,U,N,ae,B,$,se)}}}else if(ee.visible){const Z=S(U,ee,K,ne);U.onBeforeShadow(a,U,N,ae,B,Z,null),a.renderBufferDirect(ae,null,B,Z,U,null),U.onAfterShadow(a,U,N,ae,B,Z,null)}}const pe=U.children;for(let B=0,ee=pe.length;B<ee;B++)j(pe[B],N,ae,K,ne)}function k(U){U.target.removeEventListener("dispose",k);for(const N in d){const ae=d[N],K=U.target.uuid;K in ae&&(ae[K].dispose(),delete ae[K])}}this.render=function(U,N,ae){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const K=a.getRenderTarget(),ne=a.getActiveCubeFace(),pe=a.getActiveMipmapLevel(),B=a.state;B.setBlending(0),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const ee=C!==Ir&&this.type===Ir,Z=C===Ir&&this.type!==Ir;for(let me=0,Me=U.length;me<Me;me++){const se=U[me],V=se.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const $=V.getFrameExtents();if(s.multiply($),l.copy(V.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/$.x),s.x=l.x*$.x,V.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/$.y),s.y=l.y*$.y,V.mapSize.y=l.y)),V.map===null||ee===!0||Z===!0){const w=this.type!==Ir?{minFilter:dn,magFilter:dn}:{};V.map!==null&&V.map.dispose(),V.map=new Zi(s.x,s.y,w),V.map.texture.name=se.name+".shadowMap",V.camera.updateProjectionMatrix()}a.setRenderTarget(V.map),a.clear();const H=V.getViewportCount();for(let w=0;w<H;w++){const F=V.getViewport(w);c.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),B.viewport(c),V.updateMatrices(se,w),i=V.getFrustum(),j(N,ae,V.camera,se,this.type)}V.isPointLightShadow!==!0&&this.type===Ir&&M(V,ae),V.needsUpdate=!1}C=this.type,x.needsUpdate=!1,a.setRenderTarget(K,ne,pe)}}function Hx(a,e,n){const i=n.isWebGL2,s=new function(){let P=!1;const Te=new Ht;let he=null;const de=new Ht(0,0,0,0);return{setMask:function(ye){he===ye||P||(a.colorMask(ye,ye,ye,ye),he=ye)},setLocked:function(ye){P=ye},setClear:function(ye,Re,be,Ie,Ge){Ge===!0&&(ye*=Ie,Re*=Ie,be*=Ie),Te.set(ye,Re,be,Ie),de.equals(Te)===!1&&(a.clearColor(ye,Re,be,Ie),de.copy(Te))},reset:function(){P=!1,he=null,de.set(-1,0,0,0)}}},l=new function(){let P=!1,Te=null,he=null,de=null;return{setTest:function(ye){ye?X(a.DEPTH_TEST):z(a.DEPTH_TEST)},setMask:function(ye){Te===ye||P||(a.depthMask(ye),Te=ye)},setFunc:function(ye){if(he!==ye){switch(ye){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:default:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL)}he=ye}},setLocked:function(ye){P=ye},setClear:function(ye){de!==ye&&(a.clearDepth(ye),de=ye)},reset:function(){P=!1,Te=null,he=null,de=null}}},c=new function(){let P=!1,Te=null,he=null,de=null,ye=null,Re=null,be=null,Ie=null,Ge=null;return{setTest:function(Pe){P||(Pe?X(a.STENCIL_TEST):z(a.STENCIL_TEST))},setMask:function(Pe){Te===Pe||P||(a.stencilMask(Pe),Te=Pe)},setFunc:function(Pe,ke,Je){he===Pe&&de===ke&&ye===Je||(a.stencilFunc(Pe,ke,Je),he=Pe,de=ke,ye=Je)},setOp:function(Pe,ke,Je){Re===Pe&&be===ke&&Ie===Je||(a.stencilOp(Pe,ke,Je),Re=Pe,be=ke,Ie=Je)},setLocked:function(Pe){P=Pe},setClear:function(Pe){Ge!==Pe&&(a.clearStencil(Pe),Ge=Pe)},reset:function(){P=!1,Te=null,he=null,de=null,ye=null,Re=null,be=null,Ie=null,Ge=null}}},p=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,_=[],y=null,R=!1,T=null,x=null,C=null,M=null,S=null,j=null,k=null,U=new mt(0,0,0),N=0,ae=!1,K=null,ne=null,pe=null,B=null,ee=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,Me=0;const se=a.getParameter(a.VERSION);se.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(se)[1]),me=Me>=1):se.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),me=Me>=2);let V=null,$={};const H=a.getParameter(a.SCISSOR_BOX),w=a.getParameter(a.VIEWPORT),F=new Ht().fromArray(H),b=new Ht().fromArray(w);function A(P,Te,he,de){const ye=new Uint8Array(4),Re=a.createTexture();a.bindTexture(P,Re),a.texParameteri(P,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(P,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let be=0;be<he;be++)!i||P!==a.TEXTURE_3D&&P!==a.TEXTURE_2D_ARRAY?a.texImage2D(Te+be,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ye):a.texImage3D(Te,0,a.RGBA,1,1,de,0,a.RGBA,a.UNSIGNED_BYTE,ye);return Re}const O={};function X(P){d[P]!==!0&&(a.enable(P),d[P]=!0)}function z(P){d[P]!==!1&&(a.disable(P),d[P]=!1)}O[a.TEXTURE_2D]=A(a.TEXTURE_2D,a.TEXTURE_2D,1),O[a.TEXTURE_CUBE_MAP]=A(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(O[a.TEXTURE_2D_ARRAY]=A(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),O[a.TEXTURE_3D]=A(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),X(a.DEPTH_TEST),l.setFunc(3),_e(!1),Ce(1),X(a.CULL_FACE),oe(0);const Q={[Wi]:a.FUNC_ADD,101:a.FUNC_SUBTRACT,102:a.FUNC_REVERSE_SUBTRACT};if(i)Q[103]=a.MIN,Q[104]=a.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Q[103]=P.MIN_EXT,Q[104]=P.MAX_EXT)}const ce={200:a.ZERO,201:a.ONE,202:a.SRC_COLOR,[ld]:a.SRC_ALPHA,210:a.SRC_ALPHA_SATURATE,208:a.DST_COLOR,206:a.DST_ALPHA,203:a.ONE_MINUS_SRC_COLOR,[ud]:a.ONE_MINUS_SRC_ALPHA,209:a.ONE_MINUS_DST_COLOR,207:a.ONE_MINUS_DST_ALPHA,211:a.CONSTANT_COLOR,212:a.ONE_MINUS_CONSTANT_COLOR,213:a.CONSTANT_ALPHA,214:a.ONE_MINUS_CONSTANT_ALPHA};function oe(P,Te,he,de,ye,Re,be,Ie,Ge,Pe){if(P!==0){if(R===!1&&(X(a.BLEND),R=!0),P===5)ye=ye||Te,Re=Re||he,be=be||de,Te===x&&ye===S||(a.blendEquationSeparate(Q[Te],Q[ye]),x=Te,S=ye),he===C&&de===M&&Re===j&&be===k||(a.blendFuncSeparate(ce[he],ce[de],ce[Re],ce[be]),C=he,M=de,j=Re,k=be),Ie.equals(U)!==!1&&Ge===N||(a.blendColor(Ie.r,Ie.g,Ie.b,Ge),U.copy(Ie),N=Ge),T=P,ae=!1;else if(P!==T||Pe!==ae){if(x===Wi&&S===Wi||(a.blendEquation(a.FUNC_ADD),x=Wi,S=Wi),Pe)switch(P){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}else switch(P){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}C=null,M=null,j=null,k=null,U.set(0,0,0),N=0,T=P,ae=Pe}}else R===!0&&(z(a.BLEND),R=!1)}function _e(P){K!==P&&(P?a.frontFace(a.CW):a.frontFace(a.CCW),K=P)}function Ce(P){P!==0?(X(a.CULL_FACE),P!==ne&&(P===1?a.cullFace(a.BACK):P===2?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):z(a.CULL_FACE),ne=P}function De(P,Te,he){P?(X(a.POLYGON_OFFSET_FILL),B===Te&&ee===he||(a.polygonOffset(Te,he),B=Te,ee=he)):z(a.POLYGON_OFFSET_FILL)}return{buffers:{color:s,depth:l,stencil:c},enable:X,disable:z,bindFramebuffer:function(P,Te){return m[P]!==Te&&(a.bindFramebuffer(P,Te),m[P]=Te,i&&(P===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Te),P===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Te)),!0)},drawBuffers:function(P,Te){let he=_,de=!1;if(P)if(he=v.get(Te),he===void 0&&(he=[],v.set(Te,he)),P.isWebGLMultipleRenderTargets){const ye=P.texture;if(he.length!==ye.length||he[0]!==a.COLOR_ATTACHMENT0){for(let Re=0,be=ye.length;Re<be;Re++)he[Re]=a.COLOR_ATTACHMENT0+Re;he.length=ye.length,de=!0}}else he[0]!==a.COLOR_ATTACHMENT0&&(he[0]=a.COLOR_ATTACHMENT0,de=!0);else he[0]!==a.BACK&&(he[0]=a.BACK,de=!0);de&&(n.isWebGL2?a.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))},useProgram:function(P){return y!==P&&(a.useProgram(P),y=P,!0)},setBlending:oe,setMaterial:function(P,Te){P.side===2?z(a.CULL_FACE):X(a.CULL_FACE);let he=P.side===wn;Te&&(he=!he),_e(he),P.blending===1&&P.transparent===!1?oe(0):oe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const de=P.stencilWrite;c.setTest(de),de&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?X(a.SAMPLE_ALPHA_TO_COVERAGE):z(a.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:_e,setCullFace:Ce,setLineWidth:function(P){P!==pe&&(me&&a.lineWidth(P),pe=P)},setPolygonOffset:De,setScissorTest:function(P){P?X(a.SCISSOR_TEST):z(a.SCISSOR_TEST)},activeTexture:function(P){P===void 0&&(P=a.TEXTURE0+Z-1),V!==P&&(a.activeTexture(P),V=P)},bindTexture:function(P,Te,he){he===void 0&&(he=V===null?a.TEXTURE0+Z-1:V);let de=$[he];de===void 0&&(de={type:void 0,texture:void 0},$[he]=de),de.type===P&&de.texture===Te||(V!==he&&(a.activeTexture(he),V=he),a.bindTexture(P,Te||O[P]),de.type=P,de.texture=Te)},unbindTexture:function(){const P=$[V];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexImage3D:function(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},updateUBOMapping:function(P,Te){let he=f.get(Te);he===void 0&&(he=new WeakMap,f.set(Te,he));let de=he.get(P);de===void 0&&(de=a.getUniformBlockIndex(Te,P.name),he.set(P,de))},uniformBlockBinding:function(P,Te){const he=f.get(Te).get(P);p.get(Te)!==he&&(a.uniformBlockBinding(Te,he,P.__bindingPointIndex),p.set(Te,he))},texStorage2D:function(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texStorage3D:function(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage2D:function(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage3D:function(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage2D:function(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage3D:function(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},scissor:function(P){F.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),F.copy(P))},viewport:function(P){b.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),b.copy(P))},reset:function(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},V=null,$={},m={},v=new WeakMap,_=[],y=null,R=!1,T=null,x=null,C=null,M=null,S=null,j=null,k=null,U=new mt(0,0,0),N=0,ae=!1,K=null,ne=null,pe=null,B=null,ee=null,F.set(0,0,a.canvas.width,a.canvas.height),b.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}}}function Gx(a,e,n,i,s,l,c){const p=s.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(b,A){return y?new OffscreenCanvas(b,A):Ws("canvas")}function T(b,A,O,X){let z=1;if((b.width>X||b.height>X)&&(z=X/Math.max(b.width,b.height)),z<1||A===!0){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const Q=A?gd:Math.floor,ce=Q(z*b.width),oe=Q(z*b.height);v===void 0&&(v=R(ce,oe));const _e=O?R(ce,oe):v;return _e.width=ce,_e.height=oe,_e.getContext("2d").drawImage(b,0,0,ce,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ce+"x"+oe+")."),_e}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b}return b}function x(b){return Up(b.width)&&Up(b.height)}function C(b,A){return b.generateMipmaps&&A&&b.minFilter!==dn&&b.minFilter!==ar}function M(b){a.generateMipmap(b)}function S(b,A,O,X,z=!1){if(p===!1)return A;if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=A;if(A===a.RED&&(O===a.FLOAT&&(Q=a.R32F),O===a.HALF_FLOAT&&(Q=a.R16F),O===a.UNSIGNED_BYTE&&(Q=a.R8)),A===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(Q=a.R8UI),O===a.UNSIGNED_SHORT&&(Q=a.R16UI),O===a.UNSIGNED_INT&&(Q=a.R32UI),O===a.BYTE&&(Q=a.R8I),O===a.SHORT&&(Q=a.R16I),O===a.INT&&(Q=a.R32I)),A===a.RG&&(O===a.FLOAT&&(Q=a.RG32F),O===a.HALF_FLOAT&&(Q=a.RG16F),O===a.UNSIGNED_BYTE&&(Q=a.RG8)),A===a.RGBA){const ce=z?Rl:vt.getTransfer(X);O===a.FLOAT&&(Q=a.RGBA32F),O===a.HALF_FLOAT&&(Q=a.RGBA16F),O===a.UNSIGNED_BYTE&&(Q=ce===Mt?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(Q=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(Q=a.RGB5_A1)}return Q!==a.R16F&&Q!==a.R32F&&Q!==a.RG16F&&Q!==a.RG32F&&Q!==a.RGBA16F&&Q!==a.RGBA32F||e.get("EXT_color_buffer_float"),Q}function j(b,A,O){return C(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==dn&&b.minFilter!==ar?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function k(b){return b===dn||b===sp||b===Rc?a.NEAREST:a.LINEAR}function U(b){const A=b.target;A.removeEventListener("dispose",U),(function(O){const X=i.get(O);if(X.__webglInit===void 0)return;const z=O.source,Q=_.get(z);if(Q){const ce=Q[X.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&ae(O),Object.keys(Q).length===0&&_.delete(z)}i.remove(O)})(A),A.isVideoTexture&&m.delete(A)}function N(b){const A=b.target;A.removeEventListener("dispose",N),(function(O){const X=O.texture,z=i.get(O),Q=i.get(X);if(Q.__webglTexture!==void 0&&(a.deleteTexture(Q.__webglTexture),c.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(z.__webglFramebuffer[ce]))for(let oe=0;oe<z.__webglFramebuffer[ce].length;oe++)a.deleteFramebuffer(z.__webglFramebuffer[ce][oe]);else a.deleteFramebuffer(z.__webglFramebuffer[ce]);z.__webglDepthbuffer&&a.deleteRenderbuffer(z.__webglDepthbuffer[ce])}else{if(Array.isArray(z.__webglFramebuffer))for(let ce=0;ce<z.__webglFramebuffer.length;ce++)a.deleteFramebuffer(z.__webglFramebuffer[ce]);else a.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&a.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&a.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ce=0;ce<z.__webglColorRenderbuffer.length;ce++)z.__webglColorRenderbuffer[ce]&&a.deleteRenderbuffer(z.__webglColorRenderbuffer[ce]);z.__webglDepthRenderbuffer&&a.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let ce=0,oe=X.length;ce<oe;ce++){const _e=i.get(X[ce]);_e.__webglTexture&&(a.deleteTexture(_e.__webglTexture),c.memory.textures--),i.remove(X[ce])}i.remove(X),i.remove(O)})(A)}function ae(b){const A=i.get(b);a.deleteTexture(A.__webglTexture);const O=b.source;delete _.get(O)[A.__cacheKey],c.memory.textures--}let K=0;function ne(b,A){const O=i.get(b);if(b.isVideoTexture&&(function(X){const z=c.render.frame;m.get(X)!==z&&(m.set(X,z),X.update())})(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(X.complete!==!1)return void Me(O,b,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+A)}const pe={[hd]:a.REPEAT,[Or]:a.CLAMP_TO_EDGE,[fd]:a.MIRRORED_REPEAT},B={[dn]:a.NEAREST,[sp]:a.NEAREST_MIPMAP_NEAREST,[Rc]:a.NEAREST_MIPMAP_LINEAR,[ar]:a.LINEAR,[B_]:a.LINEAR_MIPMAP_NEAREST,[bl]:a.LINEAR_MIPMAP_LINEAR},ee={512:a.NEVER,519:a.ALWAYS,513:a.LESS,515:a.LEQUAL,514:a.EQUAL,518:a.GEQUAL,516:a.GREATER,517:a.NOTEQUAL};function Z(b,A,O){if(O?(a.texParameteri(b,a.TEXTURE_WRAP_S,pe[A.wrapS]),a.texParameteri(b,a.TEXTURE_WRAP_T,pe[A.wrapT]),b!==a.TEXTURE_3D&&b!==a.TEXTURE_2D_ARRAY||a.texParameteri(b,a.TEXTURE_WRAP_R,pe[A.wrapR]),a.texParameteri(b,a.TEXTURE_MAG_FILTER,B[A.magFilter]),a.texParameteri(b,a.TEXTURE_MIN_FILTER,B[A.minFilter])):(a.texParameteri(b,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(b,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),b!==a.TEXTURE_3D&&b!==a.TEXTURE_2D_ARRAY||a.texParameteri(b,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),A.wrapS===Or&&A.wrapT===Or||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(b,a.TEXTURE_MAG_FILTER,k(A.magFilter)),a.texParameteri(b,a.TEXTURE_MIN_FILTER,k(A.minFilter)),A.minFilter!==dn&&A.minFilter!==ar&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(a.texParameteri(b,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(b,a.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===dn||A.minFilter!==Rc&&A.minFilter!==bl||A.type===vi&&e.has("OES_texture_float_linear")===!1||p===!1&&A.type===js&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(a.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function me(b,A){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",U));const X=A.source;let z=_.get(X);z===void 0&&(z={},_.set(X,z));const Q=(function(ce){const oe=[];return oe.push(ce.wrapS),oe.push(ce.wrapT),oe.push(ce.wrapR||0),oe.push(ce.magFilter),oe.push(ce.minFilter),oe.push(ce.anisotropy),oe.push(ce.internalFormat),oe.push(ce.format),oe.push(ce.type),oe.push(ce.generateMipmaps),oe.push(ce.premultiplyAlpha),oe.push(ce.flipY),oe.push(ce.unpackAlignment),oe.push(ce.colorSpace),oe.join()})(A);if(Q!==b.__cacheKey){z[Q]===void 0&&(z[Q]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,O=!0),z[Q].usedTimes++;const ce=z[b.__cacheKey];ce!==void 0&&(z[b.__cacheKey].usedTimes--,ce.usedTimes===0&&ae(A)),b.__cacheKey=Q,b.__webglTexture=z[Q].texture}return O}function Me(b,A,O){let X=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(X=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(X=a.TEXTURE_3D);const z=me(b,A),Q=A.source;n.bindTexture(X,b.__webglTexture,a.TEXTURE0+O);const ce=i.get(Q);if(Q.version!==ce.__version||z===!0){n.activeTexture(a.TEXTURE0+O);const oe=vt.getPrimaries(vt.workingColorSpace),_e=A.colorSpace===vr?null:vt.getPrimaries(A.colorSpace),Ce=A.colorSpace===vr||oe===_e?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const De=(function(ke){return!p&&(ke.wrapS!==Or||ke.wrapT!==Or||ke.minFilter!==dn&&ke.minFilter!==ar)})(A)&&x(A.image)===!1;let P=T(A.image,De,!1,s.maxTextureSize);P=F(A,P);const Te=x(P)||p,he=l.convert(A.format,A.colorSpace);let de,ye=l.convert(A.type),Re=S(A.internalFormat,he,ye,A.colorSpace,A.isVideoTexture);Z(X,A,Te);const be=A.mipmaps,Ie=p&&A.isVideoTexture!==!0&&Re!==Wm,Ge=ce.__version===void 0||z===!0,Pe=j(A,P,Te);if(A.isDepthTexture)Re=a.DEPTH_COMPONENT,p?Re=A.type===vi?a.DEPTH_COMPONENT32F:A.type===gi?a.DEPTH_COMPONENT24:A.type===qi?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT16:A.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===$i&&Re===a.DEPTH_COMPONENT&&A.type!==Sd&&A.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=gi,ye=l.convert(A.type)),A.format===Ka&&Re===a.DEPTH_COMPONENT&&(Re=a.DEPTH_STENCIL,A.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=qi,ye=l.convert(A.type))),Ge&&(Ie?n.texStorage2D(a.TEXTURE_2D,1,Re,P.width,P.height):n.texImage2D(a.TEXTURE_2D,0,Re,P.width,P.height,0,he,ye,null));else if(A.isDataTexture)if(be.length>0&&Te){Ie&&Ge&&n.texStorage2D(a.TEXTURE_2D,Pe,Re,be[0].width,be[0].height);for(let ke=0,Je=be.length;ke<Je;ke++)de=be[ke],Ie?n.texSubImage2D(a.TEXTURE_2D,ke,0,0,de.width,de.height,he,ye,de.data):n.texImage2D(a.TEXTURE_2D,ke,Re,de.width,de.height,0,he,ye,de.data);A.generateMipmaps=!1}else Ie?(Ge&&n.texStorage2D(a.TEXTURE_2D,Pe,Re,P.width,P.height),n.texSubImage2D(a.TEXTURE_2D,0,0,0,P.width,P.height,he,ye,P.data)):n.texImage2D(a.TEXTURE_2D,0,Re,P.width,P.height,0,he,ye,P.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ie&&Ge&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Re,be[0].width,be[0].height,P.depth);for(let ke=0,Je=be.length;ke<Je;ke++)de=be[ke],A.format!==gr?he!==null?Ie?n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ke,0,0,0,de.width,de.height,P.depth,he,de.data,0,0):n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ke,Re,de.width,de.height,P.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage3D(a.TEXTURE_2D_ARRAY,ke,0,0,0,de.width,de.height,P.depth,he,ye,de.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ke,Re,de.width,de.height,P.depth,0,he,ye,de.data)}else{Ie&&Ge&&n.texStorage2D(a.TEXTURE_2D,Pe,Re,be[0].width,be[0].height);for(let ke=0,Je=be.length;ke<Je;ke++)de=be[ke],A.format!==gr?he!==null?Ie?n.compressedTexSubImage2D(a.TEXTURE_2D,ke,0,0,de.width,de.height,he,de.data):n.compressedTexImage2D(a.TEXTURE_2D,ke,Re,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage2D(a.TEXTURE_2D,ke,0,0,de.width,de.height,he,ye,de.data):n.texImage2D(a.TEXTURE_2D,ke,Re,de.width,de.height,0,he,ye,de.data)}else if(A.isDataArrayTexture)Ie?(Ge&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Re,P.width,P.height,P.depth),n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,he,ye,P.data)):n.texImage3D(a.TEXTURE_2D_ARRAY,0,Re,P.width,P.height,P.depth,0,he,ye,P.data);else if(A.isData3DTexture)Ie?(Ge&&n.texStorage3D(a.TEXTURE_3D,Pe,Re,P.width,P.height,P.depth),n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,he,ye,P.data)):n.texImage3D(a.TEXTURE_3D,0,Re,P.width,P.height,P.depth,0,he,ye,P.data);else if(A.isFramebufferTexture){if(Ge)if(Ie)n.texStorage2D(a.TEXTURE_2D,Pe,Re,P.width,P.height);else{let ke=P.width,Je=P.height;for(let et=0;et<Pe;et++)n.texImage2D(a.TEXTURE_2D,et,Re,ke,Je,0,he,ye,null),ke>>=1,Je>>=1}}else if(be.length>0&&Te){Ie&&Ge&&n.texStorage2D(a.TEXTURE_2D,Pe,Re,be[0].width,be[0].height);for(let ke=0,Je=be.length;ke<Je;ke++)de=be[ke],Ie?n.texSubImage2D(a.TEXTURE_2D,ke,0,0,he,ye,de):n.texImage2D(a.TEXTURE_2D,ke,Re,he,ye,de);A.generateMipmaps=!1}else Ie?(Ge&&n.texStorage2D(a.TEXTURE_2D,Pe,Re,P.width,P.height),n.texSubImage2D(a.TEXTURE_2D,0,0,0,he,ye,P)):n.texImage2D(a.TEXTURE_2D,0,Re,he,ye,P);C(A,Te)&&M(X),ce.__version=Q.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function se(b,A,O,X,z,Q){const ce=l.convert(O.format,O.colorSpace),oe=l.convert(O.type),_e=S(O.internalFormat,ce,oe,O.colorSpace);if(!i.get(A).__hasExternalTextures){const Ce=Math.max(1,A.width>>Q),De=Math.max(1,A.height>>Q);z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY?n.texImage3D(z,Q,_e,Ce,De,A.depth,0,ce,oe,null):n.texImage2D(z,Q,_e,Ce,De,0,ce,oe,null)}n.bindFramebuffer(a.FRAMEBUFFER,b),w(A)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,X,z,i.get(O).__webglTexture,0,H(A)):(z===a.TEXTURE_2D||z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,X,z,i.get(O).__webglTexture,Q),n.bindFramebuffer(a.FRAMEBUFFER,null)}function V(b,A,O){if(a.bindRenderbuffer(a.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let X=p===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(O||w(A)){const z=A.depthTexture;z&&z.isDepthTexture&&(z.type===vi?X=a.DEPTH_COMPONENT32F:z.type===gi&&(X=a.DEPTH_COMPONENT24));const Q=H(A);w(A)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Q,X,A.width,A.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,Q,X,A.width,A.height)}else a.renderbufferStorage(a.RENDERBUFFER,X,A.width,A.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const X=H(A);O&&w(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,X,a.DEPTH24_STENCIL8,A.width,A.height):w(A)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X,a.DEPTH24_STENCIL8,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)}else{const X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let z=0;z<X.length;z++){const Q=X[z],ce=l.convert(Q.format,Q.colorSpace),oe=l.convert(Q.type),_e=S(Q.internalFormat,ce,oe,Q.colorSpace),Ce=H(A);O&&w(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,_e,A.width,A.height):w(A)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,_e,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,_e,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function $(b){const A=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(X,z){if(z&&z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,X),!z.depthTexture||!z.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(z.depthTexture).__webglTexture&&z.depthTexture.image.width===z.width&&z.depthTexture.image.height===z.height||(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),ne(z.depthTexture,0);const Q=i.get(z.depthTexture).__webglTexture,ce=H(z);if(z.depthTexture.format===$i)w(z)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Q,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Q,0);else{if(z.depthTexture.format!==Ka)throw new Error("Unknown depthTexture format");w(z)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Q,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Q,0)}})(A.__webglFramebuffer,b)}else if(O){A.__webglDepthbuffer=[];for(let X=0;X<6;X++)n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[X]),A.__webglDepthbuffer[X]=a.createRenderbuffer(),V(A.__webglDepthbuffer[X],b,!1)}else n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),V(A.__webglDepthbuffer,b,!1);n.bindFramebuffer(a.FRAMEBUFFER,null)}function H(b){return Math.min(s.maxSamples,b.samples)}function w(b){const A=i.get(b);return p&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function F(b,A){const O=b.colorSpace,X=b.format,z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===pd||O!==kr&&O!==vr&&(vt.getTransfer(O)===Mt?p===!1?e.has("EXT_sRGB")===!0&&X===gr?(b.format=pd,b.minFilter=ar,b.generateMipmaps=!1):A=qm.sRGBToLinear(A):X===gr&&z===Yi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),A}this.allocateTextureUnit=function(){const b=K;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),K+=1,b},this.resetTextureUnits=function(){K=0},this.setTexture2D=ne,this.setTexture2DArray=function(b,A){const O=i.get(b);b.version>0&&O.__version!==b.version?Me(O,b,A):n.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+A)},this.setTexture3D=function(b,A){const O=i.get(b);b.version>0&&O.__version!==b.version?Me(O,b,A):n.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+A)},this.setTextureCube=function(b,A){const O=i.get(b);b.version>0&&O.__version!==b.version?(function(X,z,Q){if(z.image.length!==6)return;const ce=me(X,z),oe=z.source;n.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture,a.TEXTURE0+Q);const _e=i.get(oe);if(oe.version!==_e.__version||ce===!0){n.activeTexture(a.TEXTURE0+Q);const Ce=vt.getPrimaries(vt.workingColorSpace),De=z.colorSpace===vr?null:vt.getPrimaries(z.colorSpace),P=z.colorSpace===vr||Ce===De?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,z.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,z.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const Te=z.isCompressedTexture||z.image[0].isCompressedTexture,he=z.image[0]&&z.image[0].isDataTexture,de=[];for(let Ne=0;Ne<6;Ne++)de[Ne]=Te||he?he?z.image[Ne].image:z.image[Ne]:T(z.image[Ne],!1,!0,s.maxCubemapSize),de[Ne]=F(z,de[Ne]);const ye=de[0],Re=x(ye)||p,be=l.convert(z.format,z.colorSpace),Ie=l.convert(z.type),Ge=S(z.internalFormat,be,Ie,z.colorSpace),Pe=p&&z.isVideoTexture!==!0,ke=_e.__version===void 0||ce===!0;let Je,et=j(z,ye,Re);if(Z(a.TEXTURE_CUBE_MAP,z,Re),Te){Pe&&ke&&n.texStorage2D(a.TEXTURE_CUBE_MAP,et,Ge,ye.width,ye.height);for(let Ne=0;Ne<6;Ne++){Je=de[Ne].mipmaps;for(let Xe=0;Xe<Je.length;Xe++){const Ve=Je[Xe];z.format!==gr?be!==null?Pe?n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe,0,0,Ve.width,Ve.height,be,Ve.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe,Ge,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe,0,0,Ve.width,Ve.height,be,Ie,Ve.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe,Ge,Ve.width,Ve.height,0,be,Ie,Ve.data)}}}else{Je=z.mipmaps,Pe&&ke&&(Je.length>0&&et++,n.texStorage2D(a.TEXTURE_CUBE_MAP,et,Ge,de[0].width,de[0].height));for(let Ne=0;Ne<6;Ne++)if(he){Pe?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,de[Ne].width,de[Ne].height,be,Ie,de[Ne].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ge,de[Ne].width,de[Ne].height,0,be,Ie,de[Ne].data);for(let Xe=0;Xe<Je.length;Xe++){const Ve=Je[Xe].image[Ne].image;Pe?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe+1,0,0,Ve.width,Ve.height,be,Ie,Ve.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe+1,Ge,Ve.width,Ve.height,0,be,Ie,Ve.data)}}else{Pe?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,be,Ie,de[Ne]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ge,be,Ie,de[Ne]);for(let Xe=0;Xe<Je.length;Xe++){const Ve=Je[Xe];Pe?n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe+1,0,0,be,Ie,Ve.image[Ne]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe+1,Ge,be,Ie,Ve.image[Ne])}}}C(z,Re)&&M(a.TEXTURE_CUBE_MAP),_e.__version=oe.version,z.onUpdate&&z.onUpdate(z)}X.__version=z.version})(O,b,A):n.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+A)},this.rebindTextures=function(b,A,O){const X=i.get(b);A!==void 0&&se(X.__webglFramebuffer,b,b.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&$(b)},this.setupRenderTarget=function(b){const A=b.texture,O=i.get(b),X=i.get(A);b.addEventListener("dispose",N),b.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=a.createTexture()),X.__version=A.version,c.memory.textures++);const z=b.isWebGLCubeRenderTarget===!0,Q=b.isWebGLMultipleRenderTargets===!0,ce=x(b)||p;if(z){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(p&&A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let _e=0;_e<A.mipmaps.length;_e++)O.__webglFramebuffer[oe][_e]=a.createFramebuffer()}else O.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(p&&A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<A.mipmaps.length;oe++)O.__webglFramebuffer[oe]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(Q)if(s.drawBuffers){const oe=b.texture;for(let _e=0,Ce=oe.length;_e<Ce;_e++){const De=i.get(oe[_e]);De.__webglTexture===void 0&&(De.__webglTexture=a.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(p&&b.samples>0&&w(b)===!1){const oe=Q?A:[A];O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<oe.length;_e++){const Ce=oe[_e];O.__webglColorRenderbuffer[_e]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const De=l.convert(Ce.format,Ce.colorSpace),P=l.convert(Ce.type),Te=S(Ce.internalFormat,De,P,Ce.colorSpace,b.isXRRenderTarget===!0),he=H(b);a.renderbufferStorageMultisample(a.RENDERBUFFER,he,Te,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}a.bindRenderbuffer(a.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),V(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(z){n.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),Z(a.TEXTURE_CUBE_MAP,A,ce);for(let oe=0;oe<6;oe++)if(p&&A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)se(O.__webglFramebuffer[oe][_e],b,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e);else se(O.__webglFramebuffer[oe],b,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);C(A,ce)&&M(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){const oe=b.texture;for(let _e=0,Ce=oe.length;_e<Ce;_e++){const De=oe[_e],P=i.get(De);n.bindTexture(a.TEXTURE_2D,P.__webglTexture),Z(a.TEXTURE_2D,De,ce),se(O.__webglFramebuffer,b,De,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,0),C(De,ce)&&M(a.TEXTURE_2D)}n.unbindTexture()}else{let oe=a.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(p?oe=b.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,X.__webglTexture),Z(oe,A,ce),p&&A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)se(O.__webglFramebuffer[_e],b,A,a.COLOR_ATTACHMENT0,oe,_e);else se(O.__webglFramebuffer,b,A,a.COLOR_ATTACHMENT0,oe,0);C(A,ce)&&M(oe),n.unbindTexture()}b.depthBuffer&&$(b)},this.updateRenderTargetMipmap=function(b){const A=x(b)||p,O=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let X=0,z=O.length;X<z;X++){const Q=O[X];if(C(Q,A)){const ce=b.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,oe=i.get(Q).__webglTexture;n.bindTexture(ce,oe),M(ce),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(p&&b.samples>0&&w(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],O=b.width,X=b.height;let z=a.COLOR_BUFFER_BIT;const Q=[],ce=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,oe=i.get(b),_e=b.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ce=0;Ce<A.length;Ce++)n.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){Q.push(a.COLOR_ATTACHMENT0+Ce),b.depthBuffer&&Q.push(ce);const De=oe.__ignoreDepthValues!==void 0&&oe.__ignoreDepthValues;if(De===!1&&(b.depthBuffer&&(z|=a.DEPTH_BUFFER_BIT),b.stencilBuffer&&(z|=a.STENCIL_BUFFER_BIT)),_e&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,oe.__webglColorRenderbuffer[Ce]),De===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[ce]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[ce])),_e){const P=i.get(A[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,P,0)}a.blitFramebuffer(0,0,O,X,0,0,O,X,z,a.NEAREST),d&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<A.length;Ce++){n.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,oe.__webglColorRenderbuffer[Ce]);const De=i.get(A[Ce]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,De,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=se,this.useMultisampledRTT=w}function Vx(a,e,n){const i=n.isWebGL2;return{convert:function(s,l=""){let c;const p=vt.getTransfer(l);if(s===Yi)return a.UNSIGNED_BYTE;if(s===Bm)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Hm)return a.UNSIGNED_SHORT_5_5_5_1;if(s===1010)return a.BYTE;if(s===1011)return a.SHORT;if(s===Sd)return a.UNSIGNED_SHORT;if(s===zm)return a.INT;if(s===gi)return a.UNSIGNED_INT;if(s===vi)return a.FLOAT;if(s===js)return i?a.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(s===1021)return a.ALPHA;if(s===gr)return a.RGBA;if(s===1024)return a.LUMINANCE;if(s===1025)return a.LUMINANCE_ALPHA;if(s===$i)return a.DEPTH_COMPONENT;if(s===Ka)return a.DEPTH_STENCIL;if(s===pd)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(s===1028)return a.RED;if(s===Gm)return a.RED_INTEGER;if(s===1030)return a.RG;if(s===Vm)return a.RG_INTEGER;if(s===jm)return a.RGBA_INTEGER;if(s===Ac||s===Cc||s===Lc||s===Pc)if(p===Mt){if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c===null)return null;if(s===Ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(c=e.get("WEBGL_compressed_texture_s3tc"),c===null)return null;if(s===Ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(s===op||s===lp||s===up||s===cp){if(c=e.get("WEBGL_compressed_texture_pvrtc"),c===null)return null;if(s===op)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===up)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(s===Wm)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dp||s===hp){if(c=e.get("WEBGL_compressed_texture_etc"),c===null)return null;if(s===dp)return p===Mt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===hp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}if(s===fp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp||s===yp||s===Sp||s===Ep||s===Mp||s===wp||s===Tp||s===bp){if(c=e.get("WEBGL_compressed_texture_astc"),c===null)return null;if(s===fp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_p)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ep)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bp)return p===Mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}if(s===Nc||s===Rp||s===Ap){if(c=e.get("EXT_texture_compression_bptc"),c===null)return null;if(s===Nc)return p===Mt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ap)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(s===36283||s===Cp||s===Lp||s===Pp){if(c=e.get("EXT_texture_compression_rgtc"),c===null)return null;if(s===Nc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Cp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return s===qi?i?a.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}}}class jx extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sl extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wx={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,l=null,c=null;const p=this._targetRay,f=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,i),C=this._getHandJoint(d,T);x!==null&&(C.matrix.fromArray(x.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.matrixWorldNeedsUpdate=!0,C.jointRadius=x.radius),C.visible=x!==null}const m=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=m.position.distanceTo(v.position),y=.02,R=.005;d.inputState.pinching&&_>y+R?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-R&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));p!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(p.matrix.fromArray(s.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,s.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(s.linearVelocity)):p.hasLinearVelocity=!1,s.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(s.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return p!==null&&(p.visible=s!==null),f!==null&&(f.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Xx extends ea{constructor(e,n){super();const i=this;let s=null,l=1,c=null,p="local-floor",f=1,d=null,m=null,v=null,_=null,y=null,R=null;const T=n.getContextAttributes();let x=null,C=null;const M=[],S=[],j=new Qe;let k=null;const U=new Dn;U.layers.enable(1),U.viewport=new Ht;const N=new Dn;N.layers.enable(2),N.viewport=new Ht;const ae=[U,N],K=new jx;K.layers.enable(1),K.layers.enable(2);let ne=null,pe=null;function B(H){const w=S.indexOf(H.inputSource);if(w===-1)return;const F=M[w];F!==void 0&&(F.update(H.inputSource,H.frame,d||c),F.dispatchEvent({type:H.type,data:H.inputSource}))}function ee(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",Z);for(let H=0;H<M.length;H++){const w=S[H];w!==null&&(S[H]=null,M[H].disconnect(w))}ne=null,pe=null,e.setRenderTarget(x),y=null,_=null,v=null,s=null,C=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(j.width,j.height,!1),i.dispatchEvent({type:"sessionend"})}function Z(H){for(let w=0;w<H.removed.length;w++){const F=H.removed[w],b=S.indexOf(F);b>=0&&(S[b]=null,M[b].disconnect(F))}for(let w=0;w<H.added.length;w++){const F=H.added[w];let b=S.indexOf(F);if(b===-1){for(let O=0;O<M.length;O++){if(O>=S.length){S.push(F),b=O;break}if(S[O]===null){S[O]=F,b=O;break}}if(b===-1)break}const A=M[b];A&&A.connect(F)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let w=M[H];return w===void 0&&(w=new nd,M[H]=w),w.getTargetRaySpace()},this.getControllerGrip=function(H){let w=M[H];return w===void 0&&(w=new nd,M[H]=w),w.getGripSpace()},this.getHand=function(H){let w=M[H];return w===void 0&&(w=new nd,M[H]=w),w.getHandSpace()},this.setFramebufferScaleFactor=function(H){l=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){p=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(H){d=H},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return R},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(j),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const w={antialias:s.renderState.layers!==void 0||T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,w),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Zi(y.framebufferWidth,y.framebufferHeight,{format:gr,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let w=null,F=null,b=null;T.depth&&(b=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,w=T.stencil?Ka:$i,F=T.stencil?qi:gi);const A={colorFormat:n.RGBA8,depthFormat:b,scaleFactor:l};v=new XRWebGLBinding(s,n),_=v.createProjectionLayer(A),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Zi(_.textureWidth,_.textureHeight,{format:gr,type:Yi,depthTexture:new ig(_.textureWidth,_.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,w),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0}),e.properties.get(C).__ignoreDepthValues=_.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(p),$.setContext(s),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};const me=new Y,Me=new Y;function se(H,w){w===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(w.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;K.near=N.near=U.near=H.near,K.far=N.far=U.far=H.far,ne===K.near&&pe===K.far||(s.updateRenderState({depthNear:K.near,depthFar:K.far}),ne=K.near,pe=K.far);const w=H.parent,F=K.cameras;se(K,w);for(let b=0;b<F.length;b++)se(F[b],w);F.length===2?(function(b,A,O){me.setFromMatrixPosition(A.matrixWorld),Me.setFromMatrixPosition(O.matrixWorld);const X=me.distanceTo(Me),z=A.projectionMatrix.elements,Q=O.projectionMatrix.elements,ce=z[14]/(z[10]-1),oe=z[14]/(z[10]+1),_e=(z[9]+1)/z[5],Ce=(z[9]-1)/z[5],De=(z[8]-1)/z[0],P=(Q[8]+1)/Q[0],Te=ce*De,he=ce*P,de=X/(-De+P),ye=de*-De;A.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ye),b.translateZ(de),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Re=ce+de,be=oe+de,Ie=Te-ye,Ge=he+(X-ye),Pe=_e*oe/be*Re,ke=Ce*oe/be*Re;b.projectionMatrix.makePerspective(Ie,Ge,Pe,ke,Re,be),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()})(K,U,N):K.projectionMatrix.copy(U.projectionMatrix),(function(b,A,O){O===null?b.matrix.copy(A.matrixWorld):(b.matrix.copy(O.matrixWorld),b.matrix.invert(),b.matrix.multiply(A.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(A.projectionMatrix),b.projectionMatrixInverse.copy(A.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*md*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)})(H,K,w)},this.getCamera=function(){return K},this.getFoveation=function(){if(_!==null||y!==null)return f},this.setFoveation=function(H){f=H,_!==null&&(_.fixedFoveation=H),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=H)};let V=null;const $=new rg;$.setAnimationLoop((function(H,w){if(m=w.getViewerPose(d||c),R=w,m!==null){const F=m.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let b=!1;F.length!==K.cameras.length&&(K.cameras.length=0,b=!0);for(let A=0;A<F.length;A++){const O=F[A];let X=null;if(y!==null)X=y.getViewport(O);else{const Q=v.getViewSubImage(_,O);X=Q.viewport,A===0&&(e.setRenderTargetTextures(C,Q.colorTexture,_.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(C))}let z=ae[A];z===void 0&&(z=new Dn,z.layers.enable(A),z.viewport=new Ht,ae[A]=z),z.matrix.fromArray(O.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(O.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(X.x,X.y,X.width,X.height),A===0&&(K.matrix.copy(z.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),b===!0&&K.cameras.push(z)}}for(let F=0;F<M.length;F++){const b=S[F],A=M[F];b!==null&&A!==void 0&&A.update(b,w,d||c)}V&&V(H,w),w.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:w}),R=null})),this.setAnimationLoop=function(H){V=H},this.dispose=function(){}}}function Yx(a,e){function n(s,l){s.matrixAutoUpdate===!0&&s.updateMatrix(),l.value.copy(s.matrix)}function i(s,l){s.opacity.value=l.opacity,l.color&&s.diffuse.value.copy(l.color),l.emissive&&s.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(s.map.value=l.map,n(l.map,s.mapTransform)),l.alphaMap&&(s.alphaMap.value=l.alphaMap,n(l.alphaMap,s.alphaMapTransform)),l.bumpMap&&(s.bumpMap.value=l.bumpMap,n(l.bumpMap,s.bumpMapTransform),s.bumpScale.value=l.bumpScale,l.side===wn&&(s.bumpScale.value*=-1)),l.normalMap&&(s.normalMap.value=l.normalMap,n(l.normalMap,s.normalMapTransform),s.normalScale.value.copy(l.normalScale),l.side===wn&&s.normalScale.value.negate()),l.displacementMap&&(s.displacementMap.value=l.displacementMap,n(l.displacementMap,s.displacementMapTransform),s.displacementScale.value=l.displacementScale,s.displacementBias.value=l.displacementBias),l.emissiveMap&&(s.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,s.emissiveMapTransform)),l.specularMap&&(s.specularMap.value=l.specularMap,n(l.specularMap,s.specularMapTransform)),l.alphaTest>0&&(s.alphaTest.value=l.alphaTest);const c=e.get(l).envMap;if(c&&(s.envMap.value=c,s.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,s.reflectivity.value=l.reflectivity,s.ior.value=l.ior,s.refractionRatio.value=l.refractionRatio),l.lightMap){s.lightMap.value=l.lightMap;const p=a._useLegacyLights===!0?Math.PI:1;s.lightMapIntensity.value=l.lightMapIntensity*p,n(l.lightMap,s.lightMapTransform)}l.aoMap&&(s.aoMap.value=l.aoMap,s.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(s,l){l.color.getRGB(s.fogColor.value,tg(a)),l.isFog?(s.fogNear.value=l.near,s.fogFar.value=l.far):l.isFogExp2&&(s.fogDensity.value=l.density)},refreshMaterialUniforms:function(s,l,c,p,f){l.isMeshBasicMaterial||l.isMeshLambertMaterial?i(s,l):l.isMeshToonMaterial?(i(s,l),(function(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)})(s,l)):l.isMeshPhongMaterial?(i(s,l),(function(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)})(s,l)):l.isMeshStandardMaterial?(i(s,l),(function(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,d.roughnessMapTransform)),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)})(s,l),l.isMeshPhysicalMaterial&&(function(d,m,v){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,d.specularIntensityMapTransform))})(s,l,f)):l.isMeshMatcapMaterial?(i(s,l),(function(d,m){m.matcap&&(d.matcap.value=m.matcap)})(s,l)):l.isMeshDepthMaterial?i(s,l):l.isMeshDistanceMaterial?(i(s,l),(function(d,m){const v=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far})(s,l)):l.isMeshNormalMaterial?i(s,l):l.isLineBasicMaterial?((function(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform))})(s,l),l.isLineDashedMaterial&&(function(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale})(s,l)):l.isPointsMaterial?(function(d,m,v,_){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=.5*_,m.map&&(d.map.value=m.map,n(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)})(s,l,c,p):l.isSpriteMaterial?(function(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)})(s,l):l.isShadowMaterial?(s.color.value.copy(l.color),s.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}}}function qx(a,e,n,i){let s={},l={},c=[];const p=n.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(v,_,y,R){const T=v.value,x=_+"_"+y;if(R[x]===void 0)return R[x]=typeof T=="number"||typeof T=="boolean"?T:T.clone(),!0;{const C=R[x];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[x]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function d(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=c.indexOf(_.__bindingPointIndex);c.splice(y,1),a.deleteBuffer(s[_.id]),delete s[_.id],delete l[_.id]}return{bind:function(v,_){const y=_.program;i.uniformBlockBinding(v,y)},update:function(v,_){let y=s[v.id];y===void 0&&((function(x){const C=x.uniforms;let M=0;const S=16;for(let k=0,U=C.length;k<U;k++){const N=Array.isArray(C[k])?C[k]:[C[k]];for(let ae=0,K=N.length;ae<K;ae++){const ne=N[ae],pe=Array.isArray(ne.value)?ne.value:[ne.value];for(let B=0,ee=pe.length;B<ee;B++){const Z=d(pe[B]),me=M%S;me!==0&&S-me<Z.boundary&&(M+=S-me),ne.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=M,M+=Z.storage}}}const j=M%S;j>0&&(M+=S-j),x.__size=M,x.__cache={}})(v),y=(function(x){const C=(function(){for(let k=0;k<p;k++)if(c.indexOf(k)===-1)return c.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();x.__bindingPointIndex=C;const M=a.createBuffer(),S=x.__size,j=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,S,j),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,M),M})(v),s[v.id]=y,v.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(v,R);const T=e.render.frame;l[v.id]!==T&&((function(x){const C=s[x.id],M=x.uniforms,S=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let j=0,k=M.length;j<k;j++){const U=Array.isArray(M[j])?M[j]:[M[j]];for(let N=0,ae=U.length;N<ae;N++){const K=U[N];if(f(K,j,N,S)===!0){const ne=K.__offset,pe=Array.isArray(K.value)?K.value:[K.value];let B=0;for(let ee=0;ee<pe.length;ee++){const Z=pe[ee],me=d(Z);typeof Z=="number"||typeof Z=="boolean"?(K.__data[0]=Z,a.bufferSubData(a.UNIFORM_BUFFER,ne+B,K.__data)):Z.isMatrix3?(K.__data[0]=Z.elements[0],K.__data[1]=Z.elements[1],K.__data[2]=Z.elements[2],K.__data[3]=0,K.__data[4]=Z.elements[3],K.__data[5]=Z.elements[4],K.__data[6]=Z.elements[5],K.__data[7]=0,K.__data[8]=Z.elements[6],K.__data[9]=Z.elements[7],K.__data[10]=Z.elements[8],K.__data[11]=0):(Z.toArray(K.__data,B),B+=me.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ne,K.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)})(v),l[v.id]=T)},dispose:function(){for(const v in s)a.deleteBuffer(s[v]);c=[],s={},l={}}}}class Rd{constructor(e={}){const{canvas:n=V_(),context:i=null,depth:s=!0,stencil:l=!0,alpha:c=!1,antialias:p=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1}=e;let _;this.isWebGLRenderer=!0,_=i!==null?i.getContextAttributes().alpha:c;const y=new Uint32Array(4),R=new Int32Array(4);let T=null,x=null;const C=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const S=this;let j=!1,k=0,U=0,N=null,ae=-1,K=null;const ne=new Ht,pe=new Ht;let B=null;const ee=new mt(0);let Z=0,me=n.width,Me=n.height,se=1,V=null,$=null;const H=new Ht(0,0,me,Me),w=new Ht(0,0,me,Me);let F=!1;const b=new wd;let A=!1,O=!1,X=null;const z=new lt,Q=new Qe,ce=new Y,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return N===null?se:1}let Ce,De,P,Te,he,de,ye,Re,be,Ie,Ge,Pe,ke,Je,et,Ne,Xe,Ve,Dt,Tt,W,Ue,Ze,dt,ie=i;function qt(D,ue){for(let fe=0;fe<D.length;fe++){const xe=D[fe],ge=n.getContext(xe,ue);if(ge!==null)return ge}return null}try{const D={alpha:!0,depth:s,stencil:l,antialias:p,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${od}`),n.addEventListener("webglcontextlost",Fr,!1),n.addEventListener("webglcontextrestored",In,!1),n.addEventListener("webglcontextcreationerror",Ot,!1),ie===null){const ue=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&ue.shift(),ie=qt(ue,D),ie===null)throw qt(ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ie instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}function Ct(){Ce=new y0(ie),De=new m0(ie,Ce,e),Ce.init(De),Ue=new Vx(ie,Ce,De),P=new Hx(ie,Ce,De),Te=new M0(ie),he=new Lx,de=new Gx(ie,Ce,P,he,De,Ue,Te),ye=new v0(S),Re=new x0(S),be=new d0(ie,De),Ze=new f0(ie,Ce,be,De),Ie=new S0(ie,be,Te,Ze),Ge=new R0(ie,Ie,be,Te),Dt=new b0(ie,De,de),Ne=new g0(he),Pe=new Cx(S,ye,Re,Ce,De,Ze,Ne),ke=new Yx(S,he),Je=new Nx,et=new kx(Ce,De),Ve=new h0(S,ye,Re,P,Ge,_,f),Xe=new Bx(S,Ge,De),dt=new qx(ie,Te,De,P),Tt=new p0(ie,Ce,Te,De),W=new E0(ie,Ce,Te,De),Te.programs=Pe.programs,S.capabilities=De,S.extensions=Ce,S.properties=he,S.renderLists=Je,S.shadowMap=Xe,S.state=P,S.info=Te}Ct();const Pt=new Xx(S,ie);function Fr(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function In(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const D=Te.autoReset,ue=Xe.enabled,fe=Xe.autoUpdate,xe=Xe.needsUpdate,ge=Xe.type;Ct(),Te.autoReset=D,Xe.enabled=ue,Xe.autoUpdate=fe,Xe.needsUpdate=xe,Xe.type=ge}function Ot(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function an(D){const ue=D.target;ue.removeEventListener("dispose",an),(function(fe){(function(xe){const ge=he.get(xe).programs;ge!==void 0&&(ge.forEach((function(Ae){Pe.releaseProgram(Ae)})),xe.isShaderMaterial&&Pe.releaseShaderCache(xe))})(fe),he.remove(fe)})(ue)}function Sr(D,ue,fe){D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=wn,D.needsUpdate=!0,ta(D,ue,fe),D.side=xi,D.needsUpdate=!0,ta(D,ue,fe),D.side=2):ta(D,ue,fe)}this.xr=Pt,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){const D=Ce.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ce.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(D){D!==void 0&&(se=D,this.setSize(me,Me,!1))},this.getSize=function(D){return D.set(me,Me)},this.setSize=function(D,ue,fe=!0){Pt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(me=D,Me=ue,n.width=Math.floor(D*se),n.height=Math.floor(ue*se),fe===!0&&(n.style.width=D+"px",n.style.height=ue+"px"),this.setViewport(0,0,D,ue))},this.getDrawingBufferSize=function(D){return D.set(me*se,Me*se).floor()},this.setDrawingBufferSize=function(D,ue,fe){me=D,Me=ue,se=fe,n.width=Math.floor(D*fe),n.height=Math.floor(ue*fe),this.setViewport(0,0,D,ue)},this.getCurrentViewport=function(D){return D.copy(ne)},this.getViewport=function(D){return D.copy(H)},this.setViewport=function(D,ue,fe,xe){D.isVector4?H.set(D.x,D.y,D.z,D.w):H.set(D,ue,fe,xe),P.viewport(ne.copy(H).multiplyScalar(se).floor())},this.getScissor=function(D){return D.copy(w)},this.setScissor=function(D,ue,fe,xe){D.isVector4?w.set(D.x,D.y,D.z,D.w):w.set(D,ue,fe,xe),P.scissor(pe.copy(w).multiplyScalar(se).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(D){P.setScissorTest(F=D)},this.setOpaqueSort=function(D){V=D},this.setTransparentSort=function(D){$=D},this.getClearColor=function(D){return D.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(D=!0,ue=!0,fe=!0){let xe=0;if(D){let ge=!1;if(N!==null){const Ae=N.texture.format;ge=Ae===jm||Ae===Vm||Ae===Gm}if(ge){const Ae=N.texture.type,Ye=Ae===Yi||Ae===gi||Ae===Sd||Ae===qi||Ae===Bm||Ae===Hm,qe=Ve.getClearColor(),tt=Ve.getClearAlpha(),nt=qe.r,it=qe.g,at=qe.b;Ye?(y[0]=nt,y[1]=it,y[2]=at,y[3]=tt,ie.clearBufferuiv(ie.COLOR,0,y)):(R[0]=nt,R[1]=it,R[2]=at,R[3]=tt,ie.clearBufferiv(ie.COLOR,0,R))}else xe|=ie.COLOR_BUFFER_BIT}ue&&(xe|=ie.DEPTH_BUFFER_BIT),fe&&(xe|=ie.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie.clear(xe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fr,!1),n.removeEventListener("webglcontextrestored",In,!1),n.removeEventListener("webglcontextcreationerror",Ot,!1),Je.dispose(),et.dispose(),he.dispose(),ye.dispose(),Re.dispose(),Ge.dispose(),Ze.dispose(),dt.dispose(),Pe.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Xn),Pt.removeEventListener("sessionend",sr),X&&(X.dispose(),X=null),Yn.stop()},this.renderBufferDirect=function(D,ue,fe,xe,ge,Ae){ue===null&&(ue=oe);const Ye=ge.isMesh&&ge.matrixWorld.determinant()<0,qe=(function(bt,sn,kt,ut,ct){sn.isScene!==!0&&(sn=oe),de.resetTextureUnits();const or=sn.fog,fn=ut.isMeshStandardMaterial?sn.environment:null,Hl=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:kr,Zt=(ut.isMeshStandardMaterial?Re:ye).get(ut.envMap||fn),Gl=ut.vertexColors===!0&&!!kt.attributes.color&&kt.attributes.color.itemSize===4,Vl=!!kt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),jl=!!kt.morphAttributes.position,na=!!kt.morphAttributes.normal,ra=!!kt.morphAttributes.color;let Vr=_i;ut.toneMapped&&(N!==null&&N.isXRRenderTarget!==!0||(Vr=S.toneMapping));const wi=kt.morphAttributes.position||kt.morphAttributes.normal||kt.morphAttributes.color,Wl=wi!==void 0?wi.length:0,ht=he.get(ut),ts=x.state.lights;if(A===!0&&(O===!0||bt!==K)){const on=bt===K&&ut.id===ae;Ne.setState(ut,bt,on)}let pn=!1;ut.version===ht.__version?ht.needsLights&&ht.lightsStateVersion!==ts.state.version||ht.outputColorSpace!==Hl||ct.isBatchedMesh&&ht.batching===!1?pn=!0:ct.isBatchedMesh||ht.batching!==!0?ct.isInstancedMesh&&ht.instancing===!1?pn=!0:ct.isInstancedMesh||ht.instancing!==!0?ct.isSkinnedMesh&&ht.skinning===!1?pn=!0:ct.isSkinnedMesh||ht.skinning!==!0?ct.isInstancedMesh&&ht.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&ht.instancingColor===!1&&ct.instanceColor!==null||ht.envMap!==Zt||ut.fog===!0&&ht.fog!==or?pn=!0:ht.numClippingPlanes===void 0||ht.numClippingPlanes===Ne.numPlanes&&ht.numIntersection===Ne.numIntersection?(ht.vertexAlphas!==Gl||ht.vertexTangents!==Vl||ht.morphTargets!==jl||ht.morphNormals!==na||ht.morphColors!==ra||ht.toneMapping!==Vr||De.isWebGL2===!0&&ht.morphTargetsCount!==Wl)&&(pn=!0):pn=!0:pn=!0:pn=!0:pn=!0:(pn=!0,ht.__version=ut.version);let $n=ht.currentProgram;pn===!0&&($n=ta(ut,sn,ct));let jr=!1,Ti=!1,bi=!1;const Ke=$n.getUniforms(),lr=ht.uniforms;if(P.useProgram($n.program)&&(jr=!0,Ti=!0,bi=!0),ut.id!==ae&&(ae=ut.id,Ti=!0),jr||K!==bt){Ke.setValue(ie,"projectionMatrix",bt.projectionMatrix),Ke.setValue(ie,"viewMatrix",bt.matrixWorldInverse);const on=Ke.map.cameraPosition;on!==void 0&&on.setValue(ie,ce.setFromMatrixPosition(bt.matrixWorld)),De.logarithmicDepthBuffer&&Ke.setValue(ie,"logDepthBufFC",2/(Math.log(bt.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ke.setValue(ie,"isOrthographic",bt.isOrthographicCamera===!0),K!==bt&&(K=bt,Ti=!0,bi=!0)}if(ct.isSkinnedMesh){Ke.setOptional(ie,ct,"bindMatrix"),Ke.setOptional(ie,ct,"bindMatrixInverse");const on=ct.skeleton;on&&(De.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Ke.setValue(ie,"boneTexture",on.boneTexture,de)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ct.isBatchedMesh&&(Ke.setOptional(ie,ct,"batchingTexture"),Ke.setValue(ie,"batchingTexture",ct._matricesTexture,de));const ia=kt.morphAttributes;(ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&De.isWebGL2===!0)&&Dt.update(ct,kt,$n),(Ti||ht.receiveShadow!==ct.receiveShadow)&&(ht.receiveShadow=ct.receiveShadow,Ke.setValue(ie,"receiveShadow",ct.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(lr.envMap.value=Zt,lr.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),Ti&&(Ke.setValue(ie,"toneMappingExposure",S.toneMappingExposure),ht.needsLights&&(gn=bi,(mn=lr).ambientLightColor.needsUpdate=gn,mn.lightProbe.needsUpdate=gn,mn.directionalLights.needsUpdate=gn,mn.directionalLightShadows.needsUpdate=gn,mn.pointLights.needsUpdate=gn,mn.pointLightShadows.needsUpdate=gn,mn.spotLights.needsUpdate=gn,mn.spotLightShadows.needsUpdate=gn,mn.rectAreaLights.needsUpdate=gn,mn.hemisphereLights.needsUpdate=gn),or&&ut.fog===!0&&ke.refreshFogUniforms(lr,or),ke.refreshMaterialUniforms(lr,ut,se,Me,X),wl.upload(ie,Gr(ht),lr,de));var mn,gn;if(ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(wl.upload(ie,Gr(ht),lr,de),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ke.setValue(ie,"center",ct.center),Ke.setValue(ie,"modelViewMatrix",ct.modelViewMatrix),Ke.setValue(ie,"normalMatrix",ct.normalMatrix),Ke.setValue(ie,"modelMatrix",ct.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const on=ut.uniformsGroups;for(let aa=0,ns=on.length;aa<ns;aa++)if(De.isWebGL2){const Ri=on[aa];dt.update(Ri,$n),dt.bind(Ri,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n})(D,ue,fe,xe,ge);P.setMaterial(xe,Ye);let tt=fe.index,nt=1;if(xe.wireframe===!0){if(tt=Ie.getWireframeAttribute(fe),tt===void 0)return;nt=2}const it=fe.drawRange,at=fe.attributes.position;let _t=it.start*nt,bn=(it.start+it.count)*nt;Ae!==null&&(_t=Math.max(_t,Ae.start*nt),bn=Math.min(bn,(Ae.start+Ae.count)*nt)),tt!==null?(_t=Math.max(_t,0),bn=Math.min(bn,tt.count)):at!=null&&(_t=Math.max(_t,0),bn=Math.min(bn,at.count));const qn=bn-_t;if(qn<0||qn===1/0)return;let gt;Ze.setup(ge,xe,qe,fe,tt);let yt=Tt;if(tt!==null&&(gt=be.get(tt),yt=W,yt.setIndex(gt)),ge.isMesh)xe.wireframe===!0?(P.setLineWidth(xe.wireframeLinewidth*_e()),yt.setMode(ie.LINES)):yt.setMode(ie.TRIANGLES);else if(ge.isLine){let bt=xe.linewidth;bt===void 0&&(bt=1),P.setLineWidth(bt*_e()),ge.isLineSegments?yt.setMode(ie.LINES):ge.isLineLoop?yt.setMode(ie.LINE_LOOP):yt.setMode(ie.LINE_STRIP)}else ge.isPoints?yt.setMode(ie.POINTS):ge.isSprite&&yt.setMode(ie.TRIANGLES);if(ge.isBatchedMesh)yt.renderMultiDraw(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount);else if(ge.isInstancedMesh)yt.renderInstances(_t,qn,ge.count);else if(fe.isInstancedBufferGeometry){const bt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,sn=Math.min(fe.instanceCount,bt);yt.renderInstances(_t,qn,sn)}else yt.render(_t,qn)},this.compile=function(D,ue,fe=null){fe===null&&(fe=D),x=et.get(fe),x.init(),M.push(x),fe.traverseVisible((function(ge){ge.isLight&&ge.layers.test(ue.layers)&&(x.pushLight(ge),ge.castShadow&&x.pushShadow(ge))})),D!==fe&&D.traverseVisible((function(ge){ge.isLight&&ge.layers.test(ue.layers)&&(x.pushLight(ge),ge.castShadow&&x.pushShadow(ge))})),x.setupLights(S._useLegacyLights);const xe=new Set;return D.traverse((function(ge){const Ae=ge.material;if(Ae)if(Array.isArray(Ae))for(let Ye=0;Ye<Ae.length;Ye++){const qe=Ae[Ye];Sr(qe,fe,ge),xe.add(qe)}else Sr(Ae,fe,ge),xe.add(Ae)})),M.pop(),x=null,xe},this.compileAsync=function(D,ue,fe=null){const xe=this.compile(D,ue,fe);return new Promise((ge=>{function Ae(){xe.forEach((function(Ye){he.get(Ye).currentProgram.isReady()&&xe.delete(Ye)})),xe.size!==0?setTimeout(Ae,10):ge(D)}Ce.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)}))};let On=null;function Xn(){Yn.stop()}function sr(){Yn.start()}const Yn=new rg;function es(D,ue,fe,xe){if(D.visible===!1)return;if(D.layers.test(ue.layers)){if(D.isGroup)fe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ue);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||b.intersectsSprite(D)){xe&&ce.setFromMatrixPosition(D.matrixWorld).applyMatrix4(z);const Ae=Ge.update(D),Ye=D.material;Ye.visible&&T.push(D,Ae,Ye,fe,ce.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||b.intersectsObject(D))){const Ae=Ge.update(D),Ye=D.material;if(xe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ce.copy(D.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ce.copy(Ae.boundingSphere.center)),ce.applyMatrix4(D.matrixWorld).applyMatrix4(z)),Array.isArray(Ye)){const qe=Ae.groups;for(let tt=0,nt=qe.length;tt<nt;tt++){const it=qe[tt],at=Ye[it.materialIndex];at&&at.visible&&T.push(D,Ae,at,fe,ce.z,it)}}else Ye.visible&&T.push(D,Ae,Ye,fe,ce.z,null)}}const ge=D.children;for(let Ae=0,Ye=ge.length;Ae<Ye;Ae++)es(ge[Ae],ue,fe,xe)}function zr(D,ue,fe,xe){const ge=D.opaque,Ae=D.transmissive,Ye=D.transparent;x.setupLightsView(fe),A===!0&&Ne.setGlobalState(S.clippingPlanes,fe),Ae.length>0&&(function(qe,tt,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;const _t=De.isWebGL2;X===null&&(X=new Zi(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?js:Yi,minFilter:bl,samples:_t?4:0})),S.getDrawingBufferSize(Q),_t?X.setSize(Q.x,Q.y):X.setSize(gd(Q.x),gd(Q.y));const bn=S.getRenderTarget();S.setRenderTarget(X),S.getClearColor(ee),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear();const qn=S.toneMapping;S.toneMapping=_i,Br(qe,nt,it),de.updateMultisampleRenderTarget(X),de.updateRenderTargetMipmap(X);let gt=!1;for(let yt=0,bt=tt.length;yt<bt;yt++){const sn=tt[yt],kt=sn.object,ut=sn.geometry,ct=sn.material,or=sn.group;if(ct.side===2&&kt.layers.test(it.layers)){const fn=ct.side;ct.side=wn,ct.needsUpdate=!0,Hr(kt,nt,it,ut,ct,or),ct.side=fn,ct.needsUpdate=!0,gt=!0}}gt===!0&&(de.updateMultisampleRenderTarget(X),de.updateRenderTargetMipmap(X)),S.setRenderTarget(bn),S.setClearColor(ee,Z),S.toneMapping=qn})(ge,Ae,ue,fe),xe&&P.viewport(ne.copy(xe)),ge.length>0&&Br(ge,ue,fe),Ae.length>0&&Br(Ae,ue,fe),Ye.length>0&&Br(Ye,ue,fe),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Br(D,ue,fe){const xe=ue.isScene===!0?ue.overrideMaterial:null;for(let ge=0,Ae=D.length;ge<Ae;ge++){const Ye=D[ge],qe=Ye.object,tt=Ye.geometry,nt=xe===null?Ye.material:xe,it=Ye.group;qe.layers.test(fe.layers)&&Hr(qe,ue,fe,tt,nt,it)}}function Hr(D,ue,fe,xe,ge,Ae){D.onBeforeRender(S,ue,fe,xe,ge,Ae),D.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ge.onBeforeRender(S,ue,fe,xe,D,Ae),ge.transparent===!0&&ge.side===2&&ge.forceSinglePass===!1?(ge.side=wn,ge.needsUpdate=!0,S.renderBufferDirect(fe,ue,xe,ge,D,Ae),ge.side=xi,ge.needsUpdate=!0,S.renderBufferDirect(fe,ue,xe,ge,D,Ae),ge.side=2):S.renderBufferDirect(fe,ue,xe,ge,D,Ae),D.onAfterRender(S,ue,fe,xe,ge,Ae)}function ta(D,ue,fe){ue.isScene!==!0&&(ue=oe);const xe=he.get(D),ge=x.state.lights,Ae=x.state.shadowsArray,Ye=ge.state.version,qe=Pe.getParameters(D,ge.state,Ae,ue,fe),tt=Pe.getProgramCacheKey(qe);let nt=xe.programs;xe.environment=D.isMeshStandardMaterial?ue.environment:null,xe.fog=ue.fog,xe.envMap=(D.isMeshStandardMaterial?Re:ye).get(D.envMap||xe.environment),nt===void 0&&(D.addEventListener("dispose",an),nt=new Map,xe.programs=nt);let it=nt.get(tt);if(it!==void 0){if(xe.currentProgram===it&&xe.lightsStateVersion===Ye)return Mi(D,qe),it}else qe.uniforms=Pe.getUniforms(D),D.onBuild(fe,qe,S),D.onBeforeCompile(qe,S),it=Pe.acquireProgram(qe,tt),nt.set(tt,it),xe.uniforms=qe.uniforms;const at=xe.uniforms;return(D.isShaderMaterial||D.isRawShaderMaterial)&&D.clipping!==!0||(at.clippingPlanes=Ne.uniform),Mi(D,qe),xe.needsLights=(function(_t){return _t.isMeshLambertMaterial||_t.isMeshToonMaterial||_t.isMeshPhongMaterial||_t.isMeshStandardMaterial||_t.isShadowMaterial||_t.isShaderMaterial&&_t.lights===!0})(D),xe.lightsStateVersion=Ye,xe.needsLights&&(at.ambientLightColor.value=ge.state.ambient,at.lightProbe.value=ge.state.probe,at.directionalLights.value=ge.state.directional,at.directionalLightShadows.value=ge.state.directionalShadow,at.spotLights.value=ge.state.spot,at.spotLightShadows.value=ge.state.spotShadow,at.rectAreaLights.value=ge.state.rectArea,at.ltc_1.value=ge.state.rectAreaLTC1,at.ltc_2.value=ge.state.rectAreaLTC2,at.pointLights.value=ge.state.point,at.pointLightShadows.value=ge.state.pointShadow,at.hemisphereLights.value=ge.state.hemi,at.directionalShadowMap.value=ge.state.directionalShadowMap,at.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,at.spotShadowMap.value=ge.state.spotShadowMap,at.spotLightMatrix.value=ge.state.spotLightMatrix,at.spotLightMap.value=ge.state.spotLightMap,at.pointShadowMap.value=ge.state.pointShadowMap,at.pointShadowMatrix.value=ge.state.pointShadowMatrix),xe.currentProgram=it,xe.uniformsList=null,it}function Gr(D){if(D.uniformsList===null){const ue=D.currentProgram.getUniforms();D.uniformsList=wl.seqWithValue(ue.seq,D.uniforms)}return D.uniformsList}function Mi(D,ue){const fe=he.get(D);fe.outputColorSpace=ue.outputColorSpace,fe.batching=ue.batching,fe.instancing=ue.instancing,fe.instancingColor=ue.instancingColor,fe.skinning=ue.skinning,fe.morphTargets=ue.morphTargets,fe.morphNormals=ue.morphNormals,fe.morphColors=ue.morphColors,fe.morphTargetsCount=ue.morphTargetsCount,fe.numClippingPlanes=ue.numClippingPlanes,fe.numIntersection=ue.numClipIntersection,fe.vertexAlphas=ue.vertexAlphas,fe.vertexTangents=ue.vertexTangents,fe.toneMapping=ue.toneMapping}Yn.setAnimationLoop((function(D){On&&On(D)})),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(D){On=D,Pt.setAnimationLoop(D),D===null?Yn.stop():Yn.start()},Pt.addEventListener("sessionstart",Xn),Pt.addEventListener("sessionend",sr),this.render=function(D,ue){if(ue!==void 0&&ue.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(j===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.parent===null&&ue.matrixWorldAutoUpdate===!0&&ue.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(ue),ue=Pt.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,ue,N),x=et.get(D,M.length),x.init(),M.push(x),z.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),b.setFromProjectionMatrix(z),O=this.localClippingEnabled,A=Ne.init(this.clippingPlanes,O),T=Je.get(D,C.length),T.init(),C.push(T),es(D,ue,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(V,$),this.info.render.frame++,A===!0&&Ne.beginShadows();const fe=x.state.shadowsArray;if(Xe.render(fe,D,ue),A===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(T,D),x.setupLights(S._useLegacyLights),ue.isArrayCamera){const xe=ue.cameras;for(let ge=0,Ae=xe.length;ge<Ae;ge++){const Ye=xe[ge];zr(T,D,Ye,Ye.viewport)}}else zr(T,D,ue);N!==null&&(de.updateMultisampleRenderTarget(N),de.updateRenderTargetMipmap(N)),D.isScene===!0&&D.onAfterRender(S,D,ue),Ze.resetDefaultState(),ae=-1,K=null,M.pop(),x=M.length>0?M[M.length-1]:null,C.pop(),T=C.length>0?C[C.length-1]:null},this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(D,ue,fe){he.get(D.texture).__webglTexture=ue,he.get(D.depthTexture).__webglTexture=fe;const xe=he.get(D);xe.__hasExternalTextures=!0,xe.__hasExternalTextures&&(xe.__autoAllocateDepthBuffer=fe===void 0,xe.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),xe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,ue){const fe=he.get(D);fe.__webglFramebuffer=ue,fe.__useDefaultFramebuffer=ue===void 0},this.setRenderTarget=function(D,ue=0,fe=0){N=D,k=ue,U=fe;let xe=!0,ge=null,Ae=!1,Ye=!1;if(D){const qe=he.get(D);qe.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(ie.FRAMEBUFFER,null),xe=!1):qe.__webglFramebuffer===void 0?de.setupRenderTarget(D):qe.__hasExternalTextures&&de.rebindTextures(D,he.get(D.texture).__webglTexture,he.get(D.depthTexture).__webglTexture);const tt=D.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ye=!0);const nt=he.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ge=Array.isArray(nt[ue])?nt[ue][fe]:nt[ue],Ae=!0):ge=De.isWebGL2&&D.samples>0&&de.useMultisampledRTT(D)===!1?he.get(D).__webglMultisampledFramebuffer:Array.isArray(nt)?nt[fe]:nt,ne.copy(D.viewport),pe.copy(D.scissor),B=D.scissorTest}else ne.copy(H).multiplyScalar(se).floor(),pe.copy(w).multiplyScalar(se).floor(),B=F;if(P.bindFramebuffer(ie.FRAMEBUFFER,ge)&&De.drawBuffers&&xe&&P.drawBuffers(D,ge),P.viewport(ne),P.scissor(pe),P.setScissorTest(B),Ae){const qe=he.get(D.texture);ie.framebufferTexture2D(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,ie.TEXTURE_CUBE_MAP_POSITIVE_X+ue,qe.__webglTexture,fe)}else if(Ye){const qe=he.get(D.texture),tt=ue||0;ie.framebufferTextureLayer(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,qe.__webglTexture,fe||0,tt)}ae=-1},this.readRenderTargetPixels=function(D,ue,fe,xe,ge,Ae,Ye){if(!D||!D.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=he.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ye!==void 0&&(qe=qe[Ye]),qe){P.bindFramebuffer(ie.FRAMEBUFFER,qe);try{const tt=D.texture,nt=tt.format,it=tt.type;if(nt!==gr&&Ue.convert(nt)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const at=it===js&&(Ce.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(!(it===Yi||Ue.convert(it)===ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_TYPE)||it===vi&&(De.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float"))||at))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");ue>=0&&ue<=D.width-xe&&fe>=0&&fe<=D.height-ge&&ie.readPixels(ue,fe,xe,ge,Ue.convert(nt),Ue.convert(it),Ae)}finally{const tt=N!==null?he.get(N).__webglFramebuffer:null;P.bindFramebuffer(ie.FRAMEBUFFER,tt)}}},this.copyFramebufferToTexture=function(D,ue,fe=0){const xe=Math.pow(2,-fe),ge=Math.floor(ue.image.width*xe),Ae=Math.floor(ue.image.height*xe);de.setTexture2D(ue,0),ie.copyTexSubImage2D(ie.TEXTURE_2D,fe,0,0,D.x,D.y,ge,Ae),P.unbindTexture()},this.copyTextureToTexture=function(D,ue,fe,xe=0){const ge=ue.image.width,Ae=ue.image.height,Ye=Ue.convert(fe.format),qe=Ue.convert(fe.type);de.setTexture2D(fe,0),ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,fe.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,fe.unpackAlignment),ue.isDataTexture?ie.texSubImage2D(ie.TEXTURE_2D,xe,D.x,D.y,ge,Ae,Ye,qe,ue.image.data):ue.isCompressedTexture?ie.compressedTexSubImage2D(ie.TEXTURE_2D,xe,D.x,D.y,ue.mipmaps[0].width,ue.mipmaps[0].height,Ye,ue.mipmaps[0].data):ie.texSubImage2D(ie.TEXTURE_2D,xe,D.x,D.y,Ye,qe,ue.image),xe===0&&fe.generateMipmaps&&ie.generateMipmap(ie.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(D,ue,fe,xe,ge=0){if(S.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const Ae=D.max.x-D.min.x+1,Ye=D.max.y-D.min.y+1,qe=D.max.z-D.min.z+1,tt=Ue.convert(xe.format),nt=Ue.convert(xe.type);let it;if(xe.isData3DTexture)de.setTexture3D(xe,0),it=ie.TEXTURE_3D;else{if(!xe.isDataArrayTexture&&!xe.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");de.setTexture2DArray(xe,0),it=ie.TEXTURE_2D_ARRAY}ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,xe.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,xe.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,xe.unpackAlignment);const at=ie.getParameter(ie.UNPACK_ROW_LENGTH),_t=ie.getParameter(ie.UNPACK_IMAGE_HEIGHT),bn=ie.getParameter(ie.UNPACK_SKIP_PIXELS),qn=ie.getParameter(ie.UNPACK_SKIP_ROWS),gt=ie.getParameter(ie.UNPACK_SKIP_IMAGES),yt=fe.isCompressedTexture?fe.mipmaps[ge]:fe.image;ie.pixelStorei(ie.UNPACK_ROW_LENGTH,yt.width),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,yt.height),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,D.min.x),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,D.min.y),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,D.min.z),fe.isDataTexture||fe.isData3DTexture?ie.texSubImage3D(it,ge,ue.x,ue.y,ue.z,Ae,Ye,qe,tt,nt,yt.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ie.compressedTexSubImage3D(it,ge,ue.x,ue.y,ue.z,Ae,Ye,qe,tt,yt.data)):ie.texSubImage3D(it,ge,ue.x,ue.y,ue.z,Ae,Ye,qe,tt,nt,yt),ie.pixelStorei(ie.UNPACK_ROW_LENGTH,at),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,_t),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,bn),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,qn),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,gt),ge===0&&xe.generateMipmaps&&ie.generateMipmap(it),P.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?de.setTextureCube(D,0):D.isData3DTexture?de.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?de.setTexture2DArray(D,0):de.setTexture2D(D,0),P.unbindTexture()},this.resetState=function(){k=0,U=0,N=null,P.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ed?"display-p3":"srgb",n.unpackColorSpace=vt.workingColorSpace===Il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?Ki:Xm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?Bt:kr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $x extends Rd{}$x.prototype.isWebGL1Renderer=!0;class cg extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}new Y;new Y;new Y;new Y;new Qe;new Qe;new lt;new Y;new Y;new Y;new Qe;new Qe;new Qe;new Y;new Y;new Y;new Ht;new Ht;new Y;new lt;new Y;new Si;new lt;new qs;new lt;new lt;new lt;new lt;new yi;new lt;new Wn;new Si;new lt;new lt;new lt;new lt;new wd;new yi;new Si;new Y;new Wn;new Y;new Y;new lt;new qs;new Si;new Y;new Y;new lt;new qs;new Si;new Y;new Y;new Y;new Y;new Y;new jn;class Bl extends Ei{constructor(e=1,n=32,i=16,s=0,l=2*Math.PI,c=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:l,thetaStart:c,thetaLength:p},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const f=Math.min(c+p,Math.PI);let d=0;const m=[],v=new Y,_=new Y,y=[],R=[],T=[],x=[];for(let C=0;C<=i;C++){const M=[],S=C/i;let j=0;C===0&&c===0?j=.5/n:C===i&&f===Math.PI&&(j=-.5/n);for(let k=0;k<=n;k++){const U=k/n;v.x=-e*Math.cos(s+U*l)*Math.sin(c+S*p),v.y=e*Math.cos(c+S*p),v.z=e*Math.sin(s+U*l)*Math.sin(c+S*p),R.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),x.push(U+j,1-S),M.push(d++)}m.push(M)}for(let C=0;C<i;C++)for(let M=0;M<n;M++){const S=m[C][M+1],j=m[C][M],k=m[C+1][M],U=m[C+1][M+1];(C!==0||c>0)&&y.push(S,j,U),(C!==i-1||f<Math.PI)&&y.push(j,k,U)}this.setIndex(y),this.setAttribute("position",new xr(R,3)),this.setAttribute("normal",new xr(T,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const xm={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Kx{constructor(e,n,i){const s=this;let l,c=!1,p=0,f=0;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(m){f++,c===!1&&s.onStart!==void 0&&s.onStart(m,p,f),c=!0},this.itemEnd=function(m){p++,s.onProgress!==void 0&&s.onProgress(m,p,f),p===f&&(c=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return l?l(m):m},this.setURLModifier=function(m){return l=m,this},this.addHandler=function(m,v){return d.push(m,v),this},this.removeHandler=function(m){const v=d.indexOf(m);return v!==-1&&d.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=d.length;v<_;v+=2){const y=d[v],R=d[v+1];if(y.global&&(y.lastIndex=0),y.test(m))return R}return null}}}const Zx=new Kx;class Ad{constructor(e){this.manager=e!==void 0?e:Zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise((function(s,l){i.load(e,s,n,l)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ad.DEFAULT_MATERIAL_NAME="__DEFAULT";class Qx extends Ad{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=xm.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout((function(){n&&n(c),l.manager.itemEnd(e)}),0),c;const p=Ws("img");function f(){m(),xm.add(e,this),n&&n(this),l.manager.itemEnd(e)}function d(v){m(),s&&s(v),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){p.removeEventListener("load",f,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",f,!1),p.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),l.manager.itemStart(e),p.src=e,p}}class dg extends Ad{constructor(e){super(e)}load(e,n,i,s){const l=new Tn,c=new Qx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,(function(p){l.image=p,l.needsUpdate=!0,n!==void 0&&n(l)}),i,s),l}}new lt;new Y;new Y;new lt;new Y;new Y;new lt;new lt;new lt;new Y;new Y;new Y;new Y;new Y;new Y;const hg="\\[\\]\\.:\\/",rd="[^"+hg+"]",Jx="[^"+hg.replace("\\.","")+"]";new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",rd)+/(WCOD+)?/.source.replace("WCOD",Jx)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rd)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rd)+"$");class ym{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(hn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}new Qe;new Y;new Y;new Y;new Y;new lt;new lt;new Y;new mt;new mt;new Y;new Y;new Y;new Y;new Md;new yi;new Y;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);const Sm={type:"change"},id={type:"start"},Em={type:"end"},El=new qs,Mm=new mi,ey=Math.cos(70*G_.DEG2RAD);class fg extends ea{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Aa.ROTATE,MIDDLE:Aa.DOLLY,RIGHT:Aa.PAN},this.touches={ONE:Ca.ROTATE,TWO:Ca.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(W){W.addEventListener("keydown",ke),this._domElementKeyEvents=W},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ke),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Sm),i.update(),l=s.NONE},this.update=(function(){const W=new Y,Ue=new Qi().setFromUnitVectors(e.up,new Y(0,1,0)),Ze=Ue.clone().invert(),dt=new Y,ie=new Qi,qt=new Y,Ct=2*Math.PI;return function(Fr=null){const In=i.object.position;W.copy(In).sub(i.target),W.applyQuaternion(Ue),p.setFromVector3(W),i.autoRotate&&l===s.NONE&&pe(K(Fr)),i.enableDamping?(p.theta+=f.theta*i.dampingFactor,p.phi+=f.phi*i.dampingFactor):(p.theta+=f.theta,p.phi+=f.phi);let Ot=i.minAzimuthAngle,an=i.maxAzimuthAngle;isFinite(Ot)&&isFinite(an)&&(Ot<-Math.PI?Ot+=Ct:Ot>Math.PI&&(Ot-=Ct),an<-Math.PI?an+=Ct:an>Math.PI&&(an-=Ct),Ot<=an?p.theta=Math.max(Ot,Math.min(an,p.theta)):p.theta=p.theta>(Ot+an)/2?Math.max(Ot,p.theta):Math.min(an,p.theta)),p.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,p.phi)),p.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&U||i.object.isOrthographicCamera?p.radius=$(p.radius):p.radius=$(p.radius*d),W.setFromSpherical(p),W.applyQuaternion(Ze),In.copy(i.target).add(W),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),m.set(0,0,0));let Sr=!1;if(i.zoomToCursor&&U){let On=null;if(i.object.isPerspectiveCamera){const Xn=W.length();On=$(Xn*d);const sr=Xn-On;i.object.position.addScaledVector(j,sr),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Xn=new Y(k.x,k.y,0);Xn.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Sr=!0;const sr=new Y(k.x,k.y,0);sr.unproject(i.object),i.object.position.sub(sr).add(Xn),i.object.updateMatrixWorld(),On=W.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;On!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(On).add(i.object.position):(El.origin.copy(i.object.position),El.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(El.direction))<ey?e.lookAt(i.target):(Mm.setFromNormalAndCoplanarPoint(i.object.up,i.target),El.intersectPlane(Mm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Sr=!0);return d=1,U=!1,Sr||dt.distanceToSquared(i.object.position)>c||8*(1-ie.dot(i.object.quaternion))>c||qt.distanceToSquared(i.target)>0?(i.dispatchEvent(Sm),dt.copy(i.object.position),ie.copy(i.object.quaternion),qt.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ne),i.domElement.removeEventListener("pointerdown",ye),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Pe),i.domElement.removeEventListener("pointermove",Re),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ke),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=s.NONE;const c=1e-6,p=new ym,f=new ym;let d=1;const m=new Y,v=new Qe,_=new Qe,y=new Qe,R=new Qe,T=new Qe,x=new Qe,C=new Qe,M=new Qe,S=new Qe,j=new Y,k=new Qe;let U=!1;const N=[],ae={};function K(W){return W!==null?2*Math.PI/60*i.autoRotateSpeed*W:2*Math.PI/60/60*i.autoRotateSpeed}function ne(W){const Ue=Math.abs(W)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*Ue)}function pe(W){f.theta-=W}function B(W){f.phi-=W}const ee=(function(){const W=new Y;return function(Ze,dt){W.setFromMatrixColumn(dt,0),W.multiplyScalar(-Ze),m.add(W)}})(),Z=(function(){const W=new Y;return function(Ze,dt){i.screenSpacePanning===!0?W.setFromMatrixColumn(dt,1):(W.setFromMatrixColumn(dt,0),W.crossVectors(i.object.up,W)),W.multiplyScalar(Ze),m.add(W)}})(),me=(function(){const W=new Y;return function(Ze,dt){const ie=i.domElement;if(i.object.isPerspectiveCamera){const qt=i.object.position;W.copy(qt).sub(i.target);let Ct=W.length();Ct*=Math.tan(i.object.fov/2*Math.PI/180),ee(2*Ze*Ct/ie.clientHeight,i.object.matrix),Z(2*dt*Ct/ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ee(Ze*(i.object.right-i.object.left)/i.object.zoom/ie.clientWidth,i.object.matrix),Z(dt*(i.object.top-i.object.bottom)/i.object.zoom/ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Me(W){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=W:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(W){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=W:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(W,Ue){if(!i.zoomToCursor)return;U=!0;const Ze=i.domElement.getBoundingClientRect(),dt=W-Ze.left,ie=Ue-Ze.top,qt=Ze.width,Ct=Ze.height;k.x=dt/qt*2-1,k.y=-(ie/Ct)*2+1,j.set(k.x,k.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(W){return Math.max(i.minDistance,Math.min(i.maxDistance,W))}function H(W){v.set(W.clientX,W.clientY)}function w(W){V(W.clientX,W.clientX),C.set(W.clientX,W.clientY)}function F(W){R.set(W.clientX,W.clientY)}function b(W){_.set(W.clientX,W.clientY),y.subVectors(_,v).multiplyScalar(i.rotateSpeed);const Ue=i.domElement;pe(2*Math.PI*y.x/Ue.clientHeight),B(2*Math.PI*y.y/Ue.clientHeight),v.copy(_),i.update()}function A(W){M.set(W.clientX,W.clientY),S.subVectors(M,C),S.y>0?Me(ne(S.y)):S.y<0&&se(ne(S.y)),C.copy(M),i.update()}function O(W){T.set(W.clientX,W.clientY),x.subVectors(T,R).multiplyScalar(i.panSpeed),me(x.x,x.y),R.copy(T),i.update()}function X(W){V(W.clientX,W.clientY),W.deltaY<0?se(ne(W.deltaY)):W.deltaY>0&&Me(ne(W.deltaY)),i.update()}function z(W){let Ue=!1;switch(W.code){case i.keys.UP:W.ctrlKey||W.metaKey||W.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(0,i.keyPanSpeed),Ue=!0;break;case i.keys.BOTTOM:W.ctrlKey||W.metaKey||W.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(0,-i.keyPanSpeed),Ue=!0;break;case i.keys.LEFT:W.ctrlKey||W.metaKey||W.shiftKey?pe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(i.keyPanSpeed,0),Ue=!0;break;case i.keys.RIGHT:W.ctrlKey||W.metaKey||W.shiftKey?pe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(-i.keyPanSpeed,0),Ue=!0;break}Ue&&(W.preventDefault(),i.update())}function Q(W){if(N.length===1)v.set(W.pageX,W.pageY);else{const Ue=Tt(W),Ze=.5*(W.pageX+Ue.x),dt=.5*(W.pageY+Ue.y);v.set(Ze,dt)}}function ce(W){if(N.length===1)R.set(W.pageX,W.pageY);else{const Ue=Tt(W),Ze=.5*(W.pageX+Ue.x),dt=.5*(W.pageY+Ue.y);R.set(Ze,dt)}}function oe(W){const Ue=Tt(W),Ze=W.pageX-Ue.x,dt=W.pageY-Ue.y,ie=Math.sqrt(Ze*Ze+dt*dt);C.set(0,ie)}function _e(W){i.enableZoom&&oe(W),i.enablePan&&ce(W)}function Ce(W){i.enableZoom&&oe(W),i.enableRotate&&Q(W)}function De(W){if(N.length==1)_.set(W.pageX,W.pageY);else{const Ze=Tt(W),dt=.5*(W.pageX+Ze.x),ie=.5*(W.pageY+Ze.y);_.set(dt,ie)}y.subVectors(_,v).multiplyScalar(i.rotateSpeed);const Ue=i.domElement;pe(2*Math.PI*y.x/Ue.clientHeight),B(2*Math.PI*y.y/Ue.clientHeight),v.copy(_)}function P(W){if(N.length===1)T.set(W.pageX,W.pageY);else{const Ue=Tt(W),Ze=.5*(W.pageX+Ue.x),dt=.5*(W.pageY+Ue.y);T.set(Ze,dt)}x.subVectors(T,R).multiplyScalar(i.panSpeed),me(x.x,x.y),R.copy(T)}function Te(W){const Ue=Tt(W),Ze=W.pageX-Ue.x,dt=W.pageY-Ue.y,ie=Math.sqrt(Ze*Ze+dt*dt);M.set(0,ie),S.set(0,Math.pow(M.y/C.y,i.zoomSpeed)),Me(S.y),C.copy(M);const qt=(W.pageX+Ue.x)*.5,Ct=(W.pageY+Ue.y)*.5;V(qt,Ct)}function he(W){i.enableZoom&&Te(W),i.enablePan&&P(W)}function de(W){i.enableZoom&&Te(W),i.enableRotate&&De(W)}function ye(W){i.enabled!==!1&&(N.length===0&&(i.domElement.setPointerCapture(W.pointerId),i.domElement.addEventListener("pointermove",Re),i.domElement.addEventListener("pointerup",be)),Xe(W),W.pointerType==="touch"?Je(W):Ie(W))}function Re(W){i.enabled!==!1&&(W.pointerType==="touch"?et(W):Ge(W))}function be(W){Ve(W),N.length===0&&(i.domElement.releasePointerCapture(W.pointerId),i.domElement.removeEventListener("pointermove",Re),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(Em),l=s.NONE}function Ie(W){let Ue;switch(W.button){case 0:Ue=i.mouseButtons.LEFT;break;case 1:Ue=i.mouseButtons.MIDDLE;break;case 2:Ue=i.mouseButtons.RIGHT;break;default:Ue=-1}switch(Ue){case Aa.DOLLY:if(i.enableZoom===!1)return;w(W),l=s.DOLLY;break;case Aa.ROTATE:if(W.ctrlKey||W.metaKey||W.shiftKey){if(i.enablePan===!1)return;F(W),l=s.PAN}else{if(i.enableRotate===!1)return;H(W),l=s.ROTATE}break;case Aa.PAN:if(W.ctrlKey||W.metaKey||W.shiftKey){if(i.enableRotate===!1)return;H(W),l=s.ROTATE}else{if(i.enablePan===!1)return;F(W),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&i.dispatchEvent(id)}function Ge(W){switch(l){case s.ROTATE:if(i.enableRotate===!1)return;b(W);break;case s.DOLLY:if(i.enableZoom===!1)return;A(W);break;case s.PAN:if(i.enablePan===!1)return;O(W);break}}function Pe(W){i.enabled===!1||i.enableZoom===!1||l!==s.NONE||(W.preventDefault(),i.dispatchEvent(id),X(W),i.dispatchEvent(Em))}function ke(W){i.enabled===!1||i.enablePan===!1||z(W)}function Je(W){switch(Dt(W),N.length){case 1:switch(i.touches.ONE){case Ca.ROTATE:if(i.enableRotate===!1)return;Q(W),l=s.TOUCH_ROTATE;break;case Ca.PAN:if(i.enablePan===!1)return;ce(W),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(i.touches.TWO){case Ca.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(W),l=s.TOUCH_DOLLY_PAN;break;case Ca.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(W),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&i.dispatchEvent(id)}function et(W){switch(Dt(W),l){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;De(W),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;P(W),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(W),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;de(W),i.update();break;default:l=s.NONE}}function Ne(W){i.enabled!==!1&&W.preventDefault()}function Xe(W){N.push(W.pointerId)}function Ve(W){delete ae[W.pointerId];for(let Ue=0;Ue<N.length;Ue++)if(N[Ue]==W.pointerId){N.splice(Ue,1);return}}function Dt(W){let Ue=ae[W.pointerId];Ue===void 0&&(Ue=new Qe,ae[W.pointerId]=Ue),Ue.set(W.pageX,W.pageY)}function Tt(W){const Ue=W.pointerId===N[0]?N[1]:N[0];return ae[Ue]}i.domElement.addEventListener("contextmenu",Ne),i.domElement.addEventListener("pointerdown",ye),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Pe,{passive:!1}),this.update()}}const yr=.1,ty="(max-width: 768px), (pointer: coarse)";function Cd(){if(typeof window>"u")return!1;try{return window.matchMedia(ty).matches}catch{return window.innerWidth<=768}}function ny(){return Cd()?window.innerHeight>=window.innerWidth?100:92:75}function ry(){return Cd()?-.58:-.35}function iy(){return Cd()?.12:.08}function Pl(a,e){a.fov=ny(),a.updateProjectionMatrix(),e.rotateSpeed=ry(),e.dampingFactor=iy()}function ay(){return new URLSearchParams(window.location.search).get("debug")==="1"}function sy(a){const e=a.object;if(e.includes("שרגא")||e.includes("מיא")||e.includes("קולמוס")||e.includes("ספסלא"))return .55;if(e.includes("רבי")||e.includes("ספרא")||e.includes("תלמידא"))return .68;if(e.includes("ארון")||e.includes("חלון")||e.includes("תרעא"))return .64;const n=a.hotspot.radiusPx??70;return n<=58?.52:n>=85?.68:.6}function pg({riddle:a,onDiscover:e,onInteraction:n,onHoverChange:i,glowMode:s="none",debug:l}){const c=re.useRef(null),p=a.hotspot.radiusPx??70,d=Math.max(p,48)*2,m=sy(a)*(s==="boosted"?1.35:1),v=Math.round(d*m),_=l===!0||l==null&&ay(),[y,R]=re.useState(!1),[T,x]=re.useState(!1),C=re.useRef(!1),M=re.useCallback(()=>{R(!0),i==null||i(!0),n==null||n()},[i,n]),S=re.useCallback(()=>{R(!1),x(!1),i==null||i(!1)},[i]);re.useEffect(()=>{if(!y||C.current)return;const k=U=>{var N;(N=c.current)!=null&&N.contains(U.target)||S()};return document.addEventListener("pointerdown",k),()=>document.removeEventListener("pointerdown",k)},[y,S]);const j=re.useCallback(()=>{e(),S()},[e,S]);return L.jsxs("div",{className:"hotspot-wrap",style:{width:d,height:d},children:[L.jsx("div",{className:["hotspot-glow",y?"hotspot-glow--on":"",!y&&s==="idle"?"hotspot-glow--idle":"",!y&&s==="boosted"?"hotspot-glow--boosted":""].filter(Boolean).join(" "),style:{width:v,height:Math.round(v*1.25)},"aria-hidden":"true"}),L.jsx("button",{ref:c,type:"button",className:["hotspot-hit",_?"hotspot-hit--debug":""].filter(Boolean).join(" "),style:{width:d,height:d},onPointerDown:k=>{k.stopPropagation(),k.pointerType==="touch"&&(C.current=!0)},onPointerEnter:()=>{C.current||M()},onPointerLeave:()=>{C.current||S()},onFocus:()=>M(),onBlur:()=>S(),onClick:k=>{if(k.stopPropagation(),C.current){if(!T){k.preventDefault(),x(!0),M();return}j();return}j()},"aria-label":`${a.object} — חפשו את החפץ כדי לפתוח חידה`})]})}function oy(){return new URLSearchParams(window.location.search).get("debug")==="1"}function wm(a,e,n,i){const[s,l,c]=Xa(n,i);a.position.set(-s*yr,-l*yr,-c*yr),e.target.set(0,0,0),e.update()}function ly({riddles:a,activeIndex:e,solvedCount:n,onHotspotClick:i,lockUnlocked:s,onEnterInner:l,onWebGLFail:c,activeGlowMode:p="none"}){const f=re.useRef(null),d=re.useRef(null),m=re.useRef(null),v=re.useRef([]),_=re.useRef(null),y=re.useRef(null),R=re.useRef(null),T=re.useRef(e),x=re.useRef(s),C=re.useRef(a),M=re.useRef(c),S=re.useRef(!1),[j,k]=re.useState(!1),[U,N]=re.useState(!1),ae=oy();T.current=e,x.current=s,C.current=a,M.current=c;const K=e===0&&n===0&&!s,ne=re.useCallback((ee,Z)=>{const me=y.current,Me=R.current;!me||!Me||wm(me,Me,ee,Z)},[]);re.useEffect(()=>{if(ae)return window.__lookAtRiddle=ee=>{const Z=C.current[ee];Z&&ne(Z.hotspot.yaw,Z.hotspot.pitch)},()=>{delete window.__lookAtRiddle}},[ae,ne]);const pe=re.useCallback(ee=>{N(ee);const Z=R.current;Z&&(Z.enableRotate=!ee)},[]);re.useEffect(()=>{const ee=f.current,Z=d.current;if(!ee||!Z)return;let me;try{me=new Rd({canvas:Z,antialias:!0,alpha:!1})}catch{M.current();return}const Me=new cg,se=new Dn(75,1,.1,1100);y.current=se;const V=new fg(se,Z);R.current=V,V.enableZoom=!1,V.enablePan=!1,V.enableDamping=!0,V.minDistance=yr,V.maxDistance=yr,V.target.set(0,0,0),Pl(se,V),wm(se,V,0,0);const $=oe=>{oe.cancelable&&oe.preventDefault()};Z.addEventListener("touchmove",$,{passive:!1});const H=new Bl(500,64,48);H.scale(-1,1,1);let w=null,F=!1;new dg().load(Um,oe=>{if(F){oe.dispose();return}oe.colorSpace=Bt,w=new Wn(H,new Fl({map:oe})),Me.add(w),k(!0)},void 0,()=>{F||M.current()});const A=()=>{const oe=ee.clientWidth,_e=ee.clientHeight;oe<2||_e<2||(Pl(se,V),se.aspect=oe/_e,se.updateProjectionMatrix(),me.setPixelRatio(Math.min(window.devicePixelRatio,2)),me.setSize(oe,_e,!1))},O=new ResizeObserver(A);O.observe(ee),A();const X=new Y,z=()=>{const oe=ee.clientWidth,_e=ee.clientHeight;if(oe<2||_e<2)return;const Ce=C.current,De=T.current,P=x.current,Te=!P&&De<Ce.length?Ce[De]:null,he=m.current;if(Te&&he){const[ye,Re,be]=Xa(Te.hotspot.yaw,Te.hotspot.pitch);X.set(ye,Re,be).project(se);const Ie=X.z<1&&X.z>-1;he.style.left=`${(X.x*.5+.5)*oe}px`,he.style.top=`${(-X.y*.5+.5)*_e}px`,he.style.display=Ie?"":"none"}else he&&(he.style.display="none");Ce.forEach((ye,Re)=>{const be=v.current[Re];if(!be)return;const[Ie,Ge,Pe]=Xa(ye.hotspot.yaw,ye.hotspot.pitch);X.set(Ie,Ge,Pe).project(se);const ke=X.z<1&&X.z>-1;be.style.left=`${(X.x*.5+.5)*oe}px`,be.style.top=`${(-X.y*.5+.5)*_e}px`,be.style.display=ke?"":"none"});const de=_.current;if(de)if(P){const[ye,Re,be]=Xa(0,-25);X.set(ye,Re,be).project(se);const Ie=X.z<1&&X.z>-1;de.style.left=`${(X.x*.5+.5)*oe}px`,de.style.top=`${(-X.y*.5+.5)*_e}px`,de.style.display=Ie?"":"none"}else de.style.display="none"};let Q=0;const ce=()=>{Q=requestAnimationFrame(ce),V.update(),me.render(Me,se),z()};return ce(),()=>{var oe;if(F=!0,cancelAnimationFrame(Q),O.disconnect(),Z.removeEventListener("touchmove",$),V.dispose(),H.dispose(),w){const _e=w.material;(oe=_e.map)==null||oe.dispose(),_e.dispose()}me.dispose(),y.current=null,R.current=null}},[]),re.useEffect(()=>{if(!j||!K||S.current)return;const ee=C.current[0];if(!ee)return;const Z=window.setTimeout(()=>{S.current||(ne(ee.hotspot.yaw,ee.hotspot.pitch),S.current=!0)},300);return()=>window.clearTimeout(Z)},[j,K,ne]);const B=!s&&e<a.length?a[e]:null;return L.jsxs("div",{ref:f,className:"panorama-viewport panorama-viewport--360",children:[L.jsx("canvas",{ref:d,className:"panorama-canvas","aria-hidden":"true"}),!j&&L.jsx("div",{className:"panorama-loading",children:"טוען פנורמה…"}),!s&&e<a.length&&L.jsx("div",{className:"panorama-scene-dim","aria-hidden":"true"}),L.jsxs("div",{className:`panorama-hotspots-layer${U?" panorama-hotspots-layer--hover":""}`,children:[B&&L.jsx("div",{ref:ee=>{m.current=ee},className:"hotspot hotspot--active",children:L.jsx(pg,{riddle:B,onDiscover:()=>i(e),onHoverChange:pe,glowMode:p})},B.id),ae&&a.map((ee,Z)=>L.jsx("div",{ref:me=>{v.current[Z]=me},className:"hotspot-debug-mark","aria-hidden":"true",children:ee.id},`dbg-${ee.id}`)),L.jsxs("button",{type:"button",ref:_,className:"inner-door-open",style:{display:s?"":"none"},onClick:l,disabled:!l,"aria-label":"כניסה לחדר הסודי",children:[L.jsx("span",{className:"inner-door-glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-door-label",children:"לחדר הסודי"})]})]})]})}const uy=re.memo(ly);function cy(a){return!!(a!=null&&a.closest(".hotspot-hit, .hotspot-wrap"))}function dy({riddles:a,activeIndex:e,solvedCount:n,onHotspotClick:i,lockUnlocked:s,onEnterInner:l,activeGlowMode:c="none"}){const p=re.useRef(null),[f,d]=re.useState(!1),m=re.useRef({active:!1,startX:0,scrollLeft:0}),v=e===0&&n===0&&!s,_=re.useCallback(C=>{var N;const M=p.current;if(!M)return;const S=(N=a[C])==null?void 0:N.hotspot;if(!S)return;const j=M.querySelector(".panorama-inner");if(!j)return;const U=(S.flatX??(S.yaw+180)/360*100)/100*j.offsetWidth-M.clientWidth/2;M.scrollTo({left:Math.max(0,U),behavior:"smooth"})},[a]);re.useEffect(()=>{if(!v)return;const C=window.setTimeout(()=>_(0),300);return()=>window.clearTimeout(C)},[v,_]);const y=C=>{if(cy(C.target))return;const M=p.current;M&&(m.current={active:!0,startX:C.clientX,scrollLeft:M.scrollLeft},M.setPointerCapture(C.pointerId))},R=C=>{if(!m.current.active||!p.current)return;const M=C.clientX-m.current.startX;p.current.scrollLeft=m.current.scrollLeft-M},T=C=>{var M;m.current.active=!1,(M=p.current)==null||M.releasePointerCapture(C.pointerId)},x=!s&&e<a.length?a[e]:null;return L.jsx("div",{ref:p,className:"panorama-viewport panorama-viewport--flat",onPointerDown:y,onPointerMove:R,onPointerUp:T,onPointerCancel:T,"aria-label":"הצופן הארמי — גררו לצדדים (מצב גיבוי)",children:L.jsxs("div",{className:"panorama-inner",children:[L.jsxs("div",{className:`panorama-bg ${f?"panorama-bg--fallback":""}`,children:[!f&&L.jsx("img",{src:Um,alt:"",className:"panorama-img",onError:()=>d(!0),draggable:!1}),f&&L.jsx("div",{className:"panorama-fallback-art","aria-hidden":"true"})]}),!s&&e<a.length&&L.jsx("div",{className:"panorama-scene-dim","aria-hidden":"true"}),x&&(()=>{const C=x.hotspot.flatX??(x.hotspot.yaw+180)/360*100,M=x.hotspot.flatY??50-x.hotspot.pitch/90*50;return L.jsx("div",{className:"hotspot hotspot--active",style:{left:`${C}%`,top:`${M}%`},children:L.jsx(pg,{riddle:x,onDiscover:()=>i(e),glowMode:c})},x.id)})(),s&&L.jsxs("button",{type:"button",className:"inner-door-open",style:{left:"50%",top:"85%"},onClick:l,disabled:!l,"aria-label":"כניסה לחדר הסודי",children:[L.jsx("span",{className:"inner-door-glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-door-label",children:"לחדר הסודי"})]})]})})}function hy(a){const[e,n]=re.useState(!1),i=re.useCallback(()=>n(!0),[]);return L.jsx("div",{className:"panorama-shell",children:e?L.jsx(dy,{...a}):L.jsx(uy,{...a,onWebGLFail:i})})}const fy=re.memo(hy);function py({word:a,gloss:e,revealed:n,onClick:i}){return L.jsxs("button",{type:"button",className:`gloss-word phrase-font ${n?"gloss-word--revealed":""}`,onClick:i,"aria-label":`${a}${n?` — ${e}`:" — לחצו לתרגום"}`,"aria-pressed":n,children:[a,L.jsx("span",{className:"gloss-word__tooltip","aria-hidden":!n,children:e})]})}function my({riddle:a,onCorrect:e,onClose:n}){const[i,s]=re.useState(()=>new Set),[l,c]=re.useState(!1),p=re.useMemo(()=>x_([...a.options]),[a.id]);re.useEffect(()=>{s(new Set),c(!1)},[a.id]);const f=v=>{s(_=>{if(_.has(v))return _;const y=new Set(_);return y.add(v),y})},d=v=>{v===a.answer?e():(c(!0),setTimeout(()=>c(!1),1400))},m=a.wordGlosses;return L.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:n,children:L.jsxs("div",{className:"riddle-modal",role:"dialog","aria-modal":"true","aria-labelledby":"riddle-title",onClick:v=>v.stopPropagation(),children:[L.jsx("button",{type:"button",className:"modal-close",onClick:n,"aria-label":"סגירה",children:"×"}),L.jsx("p",{className:"riddle-object",children:"מצאתם את החפץ — ענו על החידה"}),L.jsxs("h2",{id:"riddle-title",className:"riddle-aramaic phrase-font",dir:"rtl",children:[m.map((v,_)=>{const y=v.aramaic.replace(/[\u0591-\u05C7]/g,""),R=y==="מאי"||y==="מאן";return L.jsxs("span",{className:"riddle-word-wrap",children:[_>0?" ":"",_>0&&R?L.jsxs("span",{className:"riddle-punct","aria-hidden":"true",children:["."," "]}):null,L.jsx(py,{word:v.aramaic,gloss:v.hebrew,revealed:i.has(_),onClick:()=>f(_)})]},`${v.aramaic}-${_}`)}),L.jsx("span",{className:"riddle-punct","aria-hidden":"true",children:"?"})]}),L.jsx("p",{className:"riddle-gloss-hint",children:"לא מבינים מילה? לחצו עליה — התרגום יופיע מעליה."}),L.jsx("div",{className:"riddle-options",role:"group","aria-label":"בחרו תשובה",children:p.map(v=>L.jsx("button",{type:"button",className:"riddle-option phrase-font",onClick:()=>d(v),children:yd(a,v)},v))}),l&&L.jsx("p",{className:"riddle-wrong",role:"alert",children:"נסו שוב — התשובה לא נכונה"})]})})}const gy=[{letter:"א",value:1},{letter:"ב",value:2},{letter:"ג",value:3},{letter:"ד",value:4},{letter:"ה",value:5},{letter:"ו",value:6},{letter:"ז",value:7},{letter:"ח",value:8},{letter:"ט",value:9},{letter:"י",value:10},{letter:"כ",value:20},{letter:"ך",value:20,note:"סופית"},{letter:"ל",value:30},{letter:"מ",value:40},{letter:"ם",value:40,note:"סופית"},{letter:"נ",value:50},{letter:"ן",value:50,note:"סופית"},{letter:"ס",value:60},{letter:"ע",value:70},{letter:"פ",value:80},{letter:"ף",value:80,note:"סופית"},{letter:"צ",value:90},{letter:"ץ",value:90,note:"סופית"},{letter:"ק",value:100},{letter:"ר",value:200},{letter:"ש",value:300},{letter:"ת",value:400}];function vy({letters:a,total:e,dialDigit:n,onComplete:i,dismissOnly:s=!1}){const[l,c]=re.useState("letters"),[p,f]=re.useState(0);return re.useEffect(()=>{c("letters"),f(0);let d=0;const m=window.setInterval(()=>{d+=1,f(d),d>=a.length&&(window.clearInterval(m),window.setTimeout(()=>c("sum"),500))},450);return()=>window.clearInterval(m)},[a]),re.useEffect(()=>{if(l==="sum"){const d=window.setTimeout(()=>c("digit"),900);return()=>window.clearTimeout(d)}if(l==="digit"&&!s){const d=window.setTimeout(()=>{c("done"),i()},800);return()=>window.clearTimeout(d)}},[l,i,s]),L.jsx("div",{className:"gem-breakdown-overlay",role:"dialog","aria-label":"פירוק גימטריה",onClick:s?i:void 0,children:L.jsxs("div",{className:"gem-breakdown-card",onClick:s?d=>d.stopPropagation():void 0,children:[L.jsx("h3",{children:s?"רמז — פירוק גימטריה":"פירוק גימטריה"}),L.jsx("div",{className:"gem-letters",children:a.slice(0,p).map(([d,m],v)=>L.jsxs("div",{className:"gem-letter-row pop-in",children:[L.jsx("span",{className:"phrase-font gem-letter",children:d}),L.jsx("span",{className:"gem-eq",children:"="}),L.jsx("span",{className:"gem-value",children:m})]},`${d}-${v}`))}),(l==="sum"||l==="digit"||l==="done")&&L.jsxs("div",{className:"gem-sum pop-in",children:[L.jsx("span",{children:"סה״כ"}),L.jsx("strong",{children:e})]}),(l==="digit"||l==="done")&&L.jsxs("div",{className:"gem-digit pop-in",children:[L.jsx("span",{children:"ספרת המנעול"}),L.jsx("strong",{className:"gem-digit-num",children:n})]}),s&&(l==="digit"||l==="done")&&L.jsx("button",{type:"button",className:"btn-secondary gem-breakdown-close",onClick:i,children:"סגירה — חזרה לחישוב"})]})})}function _y({riddle:a=null,lockIndex:e=null,lockWrongAttempts:n=0,preferOpen:i=!1,hintAfterWrongAttempts:s=2,onCalcChange:l,readyForLock:c=!1,lockDigitHint:p=null}){const[f,d]=re.useState(!1),[m,v]=re.useState([]),[_,y]=re.useState(!1),R=a?yd(a,a.answer):null,T=re.useMemo(()=>m.reduce((k,U)=>k+U.value,0),[m]),x=m.length>0?y_(T):null,C=re.useMemo(()=>m.map(k=>k.letter).join(""),[m]);re.useEffect(()=>{i&&d(!0)},[i,a==null?void 0:a.id]),re.useEffect(()=>{v([]),y(!1)},[a==null?void 0:a.id]),re.useEffect(()=>{l==null||l({letterString:C,total:T,finalDigit:x,letterCount:m.length})},[C,T,x,m.length,l]);const M=re.useCallback((k,U)=>{v(N=>[...N,{letter:k,value:U}])},[]),S=re.useCallback(()=>{v(k=>k.slice(0,-1))},[]),j=re.useCallback(()=>{v([])},[]);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:`gem-calc-drawer${f?" gem-calc-drawer--open":""}`,"data-open":f?"true":"false",children:[L.jsxs("aside",{id:"gematria-calculator",className:"gem-calc-panel",role:"dialog","aria-label":"מחשבון גימטריה","aria-hidden":!f,children:[L.jsxs("header",{className:"gem-calc-header",children:[L.jsxs("div",{className:"gem-calc-header-row",children:[L.jsx("h3",{className:"gem-calc-title",children:"מחשבון גימטריה"}),L.jsx("button",{type:"button",className:"gem-calc-close",onClick:()=>d(!1),"aria-label":"סגור מחשבון",children:"✕"})]}),R&&L.jsx("p",{className:"gem-calc-word phrase-font","aria-label":"מילת התשובה",children:R})]}),L.jsxs("div",{className:"gem-calc-display","aria-live":"polite","aria-label":"תצוגת חישוב",children:[L.jsx("div",{className:"gem-calc-tape",dir:"rtl",children:m.length===0?L.jsx("span",{className:"gem-calc-tape-empty",children:"לחצו אותיות…"}):m.map((k,U)=>L.jsxs("span",{className:"gem-calc-tape-item",children:[U>0&&L.jsx("span",{className:"gem-calc-tape-plus",children:"+"}),L.jsx("span",{className:"gem-calc-tape-letter phrase-font",children:k.letter}),L.jsxs("span",{className:"gem-calc-tape-val",children:["(",k.value,")"]})]},`${k.letter}-${U}`))}),L.jsxs("div",{className:"gem-calc-total-row",children:[L.jsx("span",{className:"gem-calc-total-label",children:"סה״כ"}),L.jsx("span",{className:"gem-calc-total-value",children:m.length>0?T:"—"})]}),x!==null&&L.jsxs("p",{className:"gem-calc-last-digit",children:["ספרה אחרונה: ",L.jsx("strong",{children:x})]})]}),L.jsxs("div",{className:"gem-calc-toolbar",children:[L.jsx("button",{type:"button",className:"gem-calc-action-btn",onClick:S,"aria-label":"מחק אות אחרונה",children:"⌫"}),L.jsx("button",{type:"button",className:"gem-calc-action-btn gem-calc-action-btn--clear",onClick:j,children:"נקה"})]}),L.jsx("div",{className:"gem-calc-keypad",role:"group","aria-label":"אותיות גימטריה",children:gy.map(({letter:k,value:U,note:N})=>L.jsxs("button",{type:"button",className:"gem-calc-key",onClick:()=>M(k,U),"aria-label":`${k} — ${U}${N?` (${N})`:""}`,children:[L.jsx("span",{className:"gem-calc-key-letter phrase-font",children:k}),L.jsx("span",{className:"gem-calc-key-val",children:U})]},k))}),e!==null&&c&&p!==null&&L.jsxs("p",{className:"gem-calc-lock-hint",role:"status",children:["הספרה למנעול: ",L.jsx("strong",{children:p})," — פתחו את לשונית «מנעול» (גלגל ",e+1,")"]}),a&&n>=s&&!_&&L.jsx("button",{type:"button",className:"btn-secondary gem-calc-hint-btn",onClick:()=>y(!0),children:"רמז: פירוק גימטריה"})]}),L.jsx("button",{type:"button",className:"gem-calc-tab",onClick:()=>d(k=>!k),"aria-expanded":f,"aria-controls":"gematria-calculator",children:L.jsx("span",{className:"gem-calc-tab-label",children:"גימטריה"})})]}),_&&a&&L.jsx(vy,{letters:a.letters,total:a.total,dialDigit:a.dialDigit,onComplete:()=>y(!1),dismissOnly:!0})]})}function Tm(a){return-90+a*36}function bm(a,e){const n=e*Math.PI/180;return{x:Math.cos(n)*a,y:Math.sin(n)*a}}function Rm(a,e,n){const i=n.left+n.width/2,s=n.top+n.height/2;return Math.atan2(e-s,a-i)*180/Math.PI}function xy(a){let e=a;for(;e>180;)e-=360;for(;e<-180;)e+=360;return e}function yy({digits:a,rollingIndex:e,rollingDigit:n,unlocked:i,interactiveIndex:s=null,onDigitPick:l,wrongFlash:c=!1,preferOpen:p=!1}){const f=re.useId().replace(/:/g,""),[d,m]=re.useState(!1),[v,_]=re.useState(!1),[y,R]=re.useState(0),[T,x]=re.useState(0),[C,M]=re.useState(!1),S=re.useRef(0),j=re.useRef(0),k=re.useRef(null),U=re.useRef(null),N=s!==null&&!!l,ae=N||e!==null,K=re.useCallback((w,F=0)=>{const b=S.current;let A=w-b;A>5&&(A-=10),A<-5&&(A+=10),A+=F*10,S.current=w,R(w),x(O=>{const X=O-A*36;return j.current=X,X})},[]),ne=re.useCallback(w=>{j.current=w,x(w);const F=(Math.round(-w/36)%10+10)%10;S.current=F,R(F)},[]),pe=re.useCallback(w=>{K((S.current+w+10)%10)},[K]);re.useEffect(()=>{p&&m(!0)},[p,s]),re.useEffect(()=>{if(i){_(!0);const w=window.setTimeout(()=>_(!1),1200);return()=>window.clearTimeout(w)}},[i]),re.useEffect(()=>{e!==null&&n!==null&&K(n,n%2===0?1:-1)},[e,n,K]),re.useEffect(()=>{if(!N)return;const w=F=>{F.key==="ArrowLeft"||F.key==="ArrowUp"?(F.preventDefault(),pe(-1)):F.key==="ArrowRight"||F.key==="ArrowDown"?(F.preventDefault(),pe(1)):F.key==="Enter"&&(F.preventDefault(),l==null||l(S.current))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[N,l,pe]),re.useEffect(()=>{if(!C)return;const w=b=>{const A=U.current,O=k.current;if(!(A!=null&&A.active)||!O)return;const X=Rm(b.clientX,b.clientY,O.getBoundingClientRect()),z=xy(X-A.lastAngle);Math.abs(z)>.4&&(A.moved=!0),A.lastAngle=X,ne(j.current+z)},F=()=>{const b=U.current;if(U.current=null,M(!1),!b)return;const A=(Math.round(-j.current/36)%10+10)%10;K(A)};return window.addEventListener("pointermove",w),window.addEventListener("pointerup",F),window.addEventListener("pointercancel",F),()=>{window.removeEventListener("pointermove",w),window.removeEventListener("pointerup",F),window.removeEventListener("pointercancel",F)}},[C,ne,K]);const B=w=>{if(!N||w.target.closest(".round-dial-confirm"))return;w.preventDefault(),w.stopPropagation();const F=k.current;if(!F)return;const b=Rm(w.clientX,w.clientY,F.getBoundingClientRect());U.current={active:!0,lastAngle:b,moved:!1},M(!0);try{F.setPointerCapture(w.pointerId)}catch{}},ee=()=>{N&&(l==null||l(S.current))},Z=["combination-lock",i?"combination-lock--open":"",v?"combination-lock--flash":"",c?"combination-lock--wrong":"",N?"combination-lock--awaiting":""].filter(Boolean).join(" "),me=`brass-${f}`,Me=`hasp-${f}`,se=`dark-${f}`,V=`grain-${f}`,$=a.filter(w=>w!==null).length,H=55.65;return L.jsxs("div",{className:`lock-drawer${d?" lock-drawer--open":""}`,"data-open":d?"true":"false",children:[L.jsx("button",{type:"button",className:"lock-drawer-tab",onClick:()=>m(w=>!w),"aria-expanded":d,"aria-controls":"combination-lock-panel",children:L.jsx("span",{className:"lock-drawer-tab-label",children:"מנעול"})}),L.jsxs("aside",{id:"combination-lock-panel",className:`lock-drawer-panel ${Z}`,role:"dialog","aria-label":"מנעול קומבינציה עגול","aria-hidden":!d,children:[L.jsxs("header",{className:"lock-drawer-header",children:[L.jsx("h3",{className:"lock-drawer-title",children:"מנעול נחושת"}),L.jsx("button",{type:"button",className:"lock-drawer-close",onClick:()=>m(!1),"aria-label":"סגור מנעול",children:"✕"})]}),L.jsxs("div",{className:"lock-body",children:[L.jsxs("div",{className:"round-lock","aria-label":"מנעול קומבינציה — עשר ספרות",children:[L.jsxs("svg",{className:"round-lock-svg",viewBox:"0 0 220 248","aria-hidden":"true",children:[L.jsxs("defs",{children:[L.jsxs("linearGradient",{id:me,x1:"20%",y1:"0%",x2:"80%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#f0dfa0"}),L.jsx("stop",{offset:"22%",stopColor:"#d4af37"}),L.jsx("stop",{offset:"48%",stopColor:"#b07a2e"}),L.jsx("stop",{offset:"75%",stopColor:"#6e451c"}),L.jsx("stop",{offset:"100%",stopColor:"#3a2412"})]}),L.jsxs("linearGradient",{id:se,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#2a1810"}),L.jsx("stop",{offset:"100%",stopColor:"#0c0805"})]}),L.jsxs("linearGradient",{id:Me,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[L.jsx("stop",{offset:"0%",stopColor:"#dcc896"}),L.jsx("stop",{offset:"45%",stopColor:"#8a7350"}),L.jsx("stop",{offset:"100%",stopColor:"#3e2a16"})]}),L.jsxs("filter",{id:V,x:"-8%",y:"-8%",width:"116%",height:"116%",children:[L.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.7",numOctaves:"2",result:"n"}),L.jsx("feColorMatrix",{in:"n",type:"saturate",values:"0",result:"g"}),L.jsx("feComponentTransfer",{in:"g",result:"soft",children:L.jsx("feFuncA",{type:"linear",slope:"0.35"})}),L.jsx("feBlend",{in:"SourceGraphic",in2:"soft",mode:"overlay"})]})]}),L.jsx("path",{d:"M78 78 V48 C78 28 96 16 110 16 C124 16 142 28 142 48 V78",fill:"none",stroke:`url(#${Me})`,strokeWidth:"14",strokeLinecap:"round",filter:`url(#${V})`}),L.jsx("path",{d:"M78 78 V48 C78 28 96 16 110 16 C124 16 142 28 142 48 V78",fill:"none",stroke:"#2a1810",strokeWidth:"3",strokeLinecap:"round",opacity:"0.4"}),L.jsxs("g",{transform:"translate(0, 28)",children:[L.jsx("circle",{cx:"110",cy:"110",r:"106",fill:`url(#${me})`,filter:`url(#${V})`}),L.jsx("circle",{cx:"110",cy:"110",r:"102",fill:"none",stroke:"#f0dfa0",strokeWidth:"1.4",opacity:"0.55"}),L.jsx("circle",{cx:"110",cy:"110",r:"96",fill:"none",stroke:"#3e2718",strokeWidth:"1.2",opacity:"0.7"}),L.jsx("circle",{cx:"110",cy:"110",r:"70",fill:`url(#${se})`}),L.jsx("circle",{cx:"110",cy:"110",r:"68",fill:"none",stroke:"#6b4a22",strokeWidth:"1.2",opacity:"0.8"}),Array.from({length:40},(w,F)=>{const b=(F*9-90)*Math.PI/180,A=F%4===0?86:90;return L.jsx("line",{x1:110+Math.cos(b)*A,y1:110+Math.sin(b)*A,x2:110+Math.cos(b)*94,y2:110+Math.sin(b)*94,stroke:"#3e2718",strokeWidth:F%4===0?1.6:.8,opacity:"0.55"},F)}),[45,135,225,315].map(w=>{const F=w*Math.PI/180,b=110+Math.cos(F)*100,A=110+Math.sin(F)*100;return L.jsxs("g",{children:[L.jsx("circle",{cx:b,cy:A,r:"3.2",fill:"#2a1810",opacity:"0.7"}),L.jsx("circle",{cx:b,cy:A,r:"2",fill:"#b8924a"})]},w)})]})]}),L.jsx("div",{className:"round-lock-slots",style:{top:`${H}%`},children:a.map((w,F)=>{const b=bm(40,Tm(F)),A=e===F&&n!==null,O=s===F&&!!l,X=A?n:w;return L.jsxs("button",{type:"button",className:["round-slot",w!==null?"round-slot--set":"",O?"round-slot--interactive":"",A?"round-slot--rolling":""].filter(Boolean).join(" "),style:{left:`${50+b.x}%`,top:`${50+b.y}%`},disabled:!O,onClick:()=>{O&&ee()},"aria-label":O?`גלגל ${F+1} — פעיל`:w!==null?`גלגל ${F+1}: ${w}`:`גלגל ${F+1}: ריק`,children:[L.jsx("span",{className:"round-slot-index",children:F+1}),L.jsx("span",{className:"round-slot-digit",children:X===null?"·":X})]},F)})}),L.jsxs("div",{ref:k,className:`round-dial-wrap${N?" round-dial-wrap--interactive":""}${C?" round-dial-wrap--dragging":""}`,style:{top:`${H}%`},onPointerDown:B,children:[L.jsx("div",{className:"round-dial-marker","aria-hidden":"true"}),L.jsx("div",{className:`round-dial${N?" round-dial--live":""}${e!==null||C?" round-dial--spinning":""}`,style:{transform:`rotate(${T}deg)`,transition:C?"none":void 0},"aria-hidden":!ae,children:L.jsx("div",{className:"round-dial-face",children:Array.from({length:10},(w,F)=>{const b=bm(38,Tm(F));return L.jsx("span",{className:`round-dial-tick${y===F?" round-dial-tick--active":""}`,style:{left:`${50+b.x}%`,top:`${50+b.y}%`,transform:`translate(-50%, -50%) rotate(${-T}deg)`},"aria-hidden":"true",children:F},F)})})}),L.jsxs("div",{className:"round-dial-hub",children:[L.jsx("span",{className:"round-dial-value","aria-live":"polite",children:y}),N&&L.jsx("button",{type:"button",className:"round-dial-confirm",onPointerDown:w=>{w.stopPropagation(),w.preventDefault()},onClick:w=>{w.stopPropagation(),ee()},children:"הזן"})]})]})]}),N&&L.jsxs("div",{className:"round-dial-controls",children:[L.jsx("button",{type:"button",className:"round-nudge",onClick:()=>pe(-1),"aria-label":"סובבו אחורה",children:"−"}),L.jsxs("p",{className:"round-dial-hint","aria-hidden":"true",children:["סובבו · ",y]}),L.jsx("button",{type:"button",className:"round-nudge",onClick:()=>pe(1),"aria-label":"סובבו קדימה",children:"+"})]})]}),L.jsxs("p",{className:"lock-progress","aria-hidden":"true",children:[$,"/10"]}),N&&L.jsxs("p",{className:"lock-manual-prompt",role:"status",children:["גלגל ",s+1," — סובבו את החוגה ואז לחצו הזן"]}),c&&L.jsx("p",{className:"lock-wrong-msg",role:"alert",children:"לא נכון — בדקו במחשבון והזינו שוב"}),i&&L.jsx("p",{className:"lock-open-msg",role:"status",children:"המנעול נפתח!"})]})]})}const Vs=10,Sy=["שלמא","דיו","נוצה","קלף","מגילתא","פתורא","ביתא","יומא","נהורא","אורייתא","חכימא","שמע","גמר","כתב","קרי","עייל","נפק","טבא","רבא","מאן","מאי","ליכא","אית","הכא","תמן","ברא","אבוה","אימא","מלכא","ארעא","שמיא","נורא","נהרא","טורא","שוקא","עמודא","ערסא","חמרא","נהמא","כלבא","גברא","פתגמא","מילתא","קולמוס","ספסלא","תרעא","שרגא","מיא","ספרא","רבי","תלמידא","ארון","חלון"];function Ey(){const a=[];for(const e of Xi)a.push(e.answer,e.object,...e.options);return a}function My(){const a=new Set;for(const e of[...Ey(),...Sy]){const n=Dl(e);n.length>=2&&a.add(n)}return a}const wy=My(),Ty=["שרגא","מיא","ספרא","רבי","תלמידא","תרעא","קולמוס","ספסלא","שלמא","חלון","ארון","פתורא","דיו","נוצה","ביתא","יומא"],by=[...Ty,"קלף","מגילתא","נהורא","טבא","אורייתא","תלמידא","גמר","כתב","שמיא","ארעא","מילתא","פתגמא"].filter((a,e,n)=>n.indexOf(a)===e);function Ry(a){const n=T_(a).map(Dl).filter(c=>c.length>=2),i=[],s=new Set;for(const c of n)wy.has(c)&&(i.push(c),s.add(c));const l=i.length;return{matchedCount:l,uniqueMatched:[...s],tokens:n,goal:Vs,complete:l>=Vs}}function Ay(){return new URLSearchParams(window.location.search).get("debug")==="1"}function Am(a,e,n,i){const[s,l,c]=Xa(n,i);a.position.set(-s*yr,-l*yr,-c*yr),e.target.set(0,0,0),e.update()}function Cy({onScrollClick:a,writingOpen:e,debug:n}){const i=re.useRef(null),[s,l]=re.useState(!1),c=re.useRef({active:!1,startX:0,scrollLeft:0,moved:!1}),p=v=>{if(v.target.closest(".inner-scroll-hotspot"))return;const _=i.current;_&&(c.current={active:!0,startX:v.clientX,scrollLeft:_.scrollLeft,moved:!1},_.setPointerCapture(v.pointerId))},f=v=>{if(!c.current.active||!i.current)return;const _=v.clientX-c.current.startX;Math.abs(_)>6&&(c.current.moved=!0),i.current.scrollLeft=c.current.scrollLeft-_},d=v=>{var _;c.current.active=!1,(_=i.current)==null||_.releasePointerCapture(v.pointerId)},m=pr.radiusPx*2;return L.jsx("div",{ref:i,className:"panorama-viewport panorama-viewport--flat",onPointerDown:p,onPointerMove:f,onPointerUp:d,onPointerCancel:d,"aria-label":"החדר הסודי — גררו לצדדים (מצב גיבוי)",children:L.jsxs("div",{className:"panorama-inner",children:[L.jsxs("div",{className:`panorama-bg ${s?"panorama-bg--fallback":""}`,children:[!s&&L.jsx("img",{src:Im,alt:"",className:"panorama-img",onError:()=>l(!0),draggable:!1}),s&&L.jsx("div",{className:"panorama-fallback-art","aria-hidden":"true"})]}),!e&&L.jsxs("button",{type:"button",className:["inner-scroll-hotspot","inner-scroll-hotspot--flat",n?"inner-scroll-hotspot--debug":""].filter(Boolean).join(" "),style:{left:`${pr.flatX}%`,top:`${pr.flatY}%`,width:m,height:m},onPointerDown:v=>v.stopPropagation(),onClick:v=>{v.stopPropagation(),a()},"aria-label":"פתחו את הקלף לכתיבת מכתב",children:[L.jsx("span",{className:"inner-scroll-hotspot__glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-scroll-hotspot__label",children:"הקלף · לחצו לכתיבה"})]})]})})}function Ly({onScrollClick:a,writingOpen:e,onWebGLFail:n,debug:i}){const s=re.useRef(null),l=re.useRef(null),c=re.useRef(null),p=re.useRef(null),f=re.useRef(null),d=re.useRef(a),m=re.useRef(e),v=re.useRef(n),[_,y]=re.useState(!1),[R,T]=re.useState(!1);d.current=a,m.current=e,v.current=n,re.useEffect(()=>{const C=s.current,M=l.current;if(!C||!M)return;let S;try{S=new Rd({canvas:M,antialias:!0,alpha:!1})}catch{v.current();return}const j=new cg,k=new Dn(75,1,.1,1100);p.current=k;const U=new fg(k,M);f.current=U,U.enableZoom=!1,U.enablePan=!1,U.enableDamping=!0,U.minDistance=yr,U.maxDistance=yr,U.target.set(0,0,0),Pl(k,U);const N=O=>{O.cancelable&&O.preventDefault()};M.addEventListener("touchmove",N,{passive:!1}),Am(k,U,pr.yaw,pr.pitch);const ae=new Bl(500,64,48);ae.scale(-1,1,1);let K=null,ne=!1;new dg().load(Im,O=>{if(ne){O.dispose();return}O.colorSpace=Bt,K=new Wn(ae,new Fl({map:O})),j.add(K),Am(k,U,pr.yaw,pr.pitch),y(!0)},void 0,()=>{ne||v.current()});const B=()=>{const O=C.clientWidth,X=C.clientHeight;O<2||X<2||(Pl(k,U),k.aspect=O/X,k.updateProjectionMatrix(),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.setSize(O,X,!1))},ee=new ResizeObserver(B);ee.observe(C),B();const Z=new Y,[me,Me,se]=Xa(pr.yaw,pr.pitch),V=()=>{const O=C.clientWidth,X=C.clientHeight;if(O<2||X<2)return;const z=c.current;if(!z)return;Z.set(me,Me,se).project(k);const Q=Z.z<1&&Z.z>-1;z.style.left=`${(Z.x*.5+.5)*O}px`,z.style.top=`${(-Z.y*.5+.5)*X}px`,z.style.visibility=Q&&!m.current?"visible":"hidden",z.style.pointerEvents=Q&&!m.current?"auto":"none"},$={x:0,y:0,down:!1,moved:!1},H=O=>{m.current||($.down=!0,$.moved=!1,$.x=O.clientX,$.y=O.clientY)},w=O=>{$.down&&Math.hypot(O.clientX-$.x,O.clientY-$.y)>10&&($.moved=!0)},F=O=>{if(!$.down||($.down=!1,$.moved||m.current))return;const X=c.current;if(!X||X.style.visibility==="hidden")return;const z=X.getBoundingClientRect(),Q=z.left+z.width/2,ce=z.top+z.height/2,oe=Math.max(z.width,z.height)*.58;Math.hypot(O.clientX-Q,O.clientY-ce)<=oe&&d.current()};M.addEventListener("pointerdown",H),M.addEventListener("pointermove",w),M.addEventListener("pointerup",F),M.addEventListener("pointercancel",F);let b=0;const A=()=>{b=requestAnimationFrame(A),U.update(),S.render(j,k),V()};return A(),()=>{var O;if(ne=!0,cancelAnimationFrame(b),ee.disconnect(),M.removeEventListener("touchmove",N),M.removeEventListener("pointerdown",H),M.removeEventListener("pointermove",w),M.removeEventListener("pointerup",F),M.removeEventListener("pointercancel",F),U.dispose(),ae.dispose(),K){const X=K.material;(O=X.map)==null||O.dispose(),X.dispose()}S.dispose(),p.current=null,f.current=null}},[]),re.useEffect(()=>{const C=f.current;C&&(C.enableRotate=!e&&!R)},[e,R]);const x=pr.radiusPx*2;return L.jsxs("div",{ref:s,className:"panorama-viewport panorama-viewport--360",children:[L.jsx("canvas",{ref:l,className:"panorama-canvas","aria-hidden":"true"}),!_&&L.jsx("div",{className:"panorama-loading",children:"טוען פנורמה…"}),L.jsx("div",{className:`panorama-hotspots-layer panorama-hotspots-layer--inner${R?" panorama-hotspots-layer--hover":""}`,children:L.jsxs("button",{type:"button",ref:c,className:["inner-scroll-hotspot",i?"inner-scroll-hotspot--debug":""].filter(Boolean).join(" "),style:{width:x,height:x},onPointerDown:C=>{C.stopPropagation(),T(!0)},onClick:C=>{C.stopPropagation(),a()},onPointerEnter:()=>T(!0),onPointerLeave:()=>T(!1),"aria-label":"פתחו את הקלף לכתיבת מכתב",children:[L.jsx("span",{className:"inner-scroll-hotspot__glow","aria-hidden":"true"}),L.jsx("span",{className:"inner-scroll-hotspot__label",children:"הקלף · לחצו לכתיבה"})]})})]})}function Py({onScrollClick:a,writingOpen:e}){const[n,i]=re.useState(!1),s=re.useCallback(()=>i(!0),[]),l=Ay();return L.jsx("div",{className:`panorama-shell inner-room__panorama-shell${e?" inner-room__panorama-shell--writing":""}`,children:n?L.jsx(Cy,{onScrollClick:a,writingOpen:e,debug:l}):L.jsx(Ly,{onScrollClick:a,writingOpen:e,onWebGLFail:s,debug:l})})}const Ny=re.memo(Py),Dy=["שלמא עליכון תלמידיא חכימיא","מן בית מדרשא דאורייתא כתיבנא","בקלף דיו ונוצה — פתגמא טבא","שמעו וגמרו · כתבו וקראו","נהורא רבא בחדרא זוטא","ונפקנא משלמא · אמן"];function Uy({onComplete:a}){const[e,n]=re.useState(""),[i,s]=re.useState(!1),[l,c]=re.useState(!1),[p,f]=re.useState(!1),[d,m]=re.useState(!1),v=re.useRef(null),_=re.useRef(!1),y=re.useMemo(()=>Ry(e),[e]),R=Math.min(y.matchedCount,Vs),T=re.useMemo(()=>new Set(y.uniqueMatched),[y.uniqueMatched]);re.useEffect(()=>{const M=window.setTimeout(()=>c(!0),40);return()=>window.clearTimeout(M)},[]),re.useEffect(()=>{if(!p){m(!1);return}const M=window.requestAnimationFrame(()=>m(!0)),S=window.setTimeout(()=>{var k;return(k=v.current)==null?void 0:k.focus()},420),j=k=>{k.key==="Escape"&&!i&&f(!1)};return window.addEventListener("keydown",j),()=>{window.cancelAnimationFrame(M),window.clearTimeout(S),window.removeEventListener("keydown",j)}},[p,i]),re.useEffect(()=>{if(!y.complete||_.current)return;_.current=!0,s(!0),f(!0);const M=window.setTimeout(()=>a(),3200);return()=>window.clearTimeout(M)},[y.complete,a]);const x=re.useCallback(M=>{if(i)return;const S=v.current,j=(S==null?void 0:S.selectionStart)??e.length,k=(S==null?void 0:S.selectionEnd)??e.length,U=e.slice(0,j),N=e.slice(k),ae=U.length>0&&!/\s$/.test(U),K=N.length>0&&!/^\s/.test(N),ne=`${ae?" ":""}${M}${K?" ":""}`,pe=U+ne+N;n(pe),window.requestAnimationFrame(()=>{const B=v.current;if(!B)return;const ee=U.length+ne.length-(K?1:0);B.focus(),B.setSelectionRange(ee,ee)})},[i,e]),C=()=>{i||f(!1)};return L.jsxs("div",{className:["inner-room","inner-room--360",l?"inner-room--entered":"",p?"inner-room--writing":""].filter(Boolean).join(" "),children:[L.jsxs("header",{className:"inner-room__header",children:[L.jsx("p",{className:"inner-room__eyebrow",children:"הצופן הארמי"}),L.jsx("h1",{children:"החדר הסודי"}),L.jsx("p",{className:"inner-room__lead",children:"חדר הכתיבה"})]}),L.jsx(Ny,{writingOpen:p,onScrollClick:()=>f(!0)}),p&&L.jsxs("div",{className:`inner-room__write-stage${d?" inner-room__write-stage--ready":""}`,role:"dialog","aria-modal":"true","aria-labelledby":"inner-letter-title",children:[L.jsx("button",{type:"button",className:"inner-room__write-dim","aria-label":"הניחו את הקלף וחזרו לחדר",onClick:C,disabled:i}),L.jsxs("div",{className:"inner-room__write-layout",children:[L.jsxs("div",{className:"inner-room__sheet",children:[L.jsxs("div",{className:"inner-room__sheet-top",children:[L.jsx("h2",{id:"inner-letter-title",children:"הקלף"}),!i&&L.jsx("button",{type:"button",className:"btn-secondary inner-room__letter-close",onClick:C,children:"הניחו את הקלף"})]}),L.jsx("p",{className:"inner-room__sheet-lead",children:i?"המכתב נחתם בדיו על הקלף":"השתמשו במילים מאוצר המילים — כעשר מילים, והמכתב יישלח!"}),L.jsxs("div",{className:"inner-room__sheet-body",children:[L.jsx("label",{className:"visually-hidden",htmlFor:"inner-letter",children:"כתיבת מכתב על הקלף"}),L.jsxs("div",{className:"inner-room__parchment-wrap",children:[L.jsx("textarea",{id:"inner-letter",ref:v,className:`inner-room__parchment phrase-font${i?" inner-room__parchment--sealed":""}`,dir:"rtl",lang:"he",rows:7,value:e,onChange:M=>n(M.target.value),placeholder:"כתבו כאן מכתב בארמית…",spellCheck:!1,autoComplete:"off",disabled:i,"aria-hidden":i}),i&&L.jsx("div",{className:"inner-room__script-fill","aria-hidden":"true",children:Dy.map((M,S)=>L.jsx("p",{className:`inner-room__script-line${S>=4?" inner-room__script-line--dim":""}`,style:{animationDelay:`${.12+S*.18}s`},children:M},M))})]}),L.jsxs("div",{className:"inner-room__inkwell","aria-hidden":"true",children:[L.jsx("span",{className:"inner-room__ink-pot"}),L.jsx("span",{className:"inner-room__quill"}),L.jsx("span",{className:"inner-room__ink-label",children:"דיו ונוצה"})]})]}),L.jsx("div",{className:"inner-room__hud",role:"status","aria-live":"polite",children:L.jsxs("div",{className:"inner-room__progress",children:[L.jsx("div",{className:"inner-room__progress-bar","aria-hidden":"true",children:L.jsx("span",{style:{width:`${R/Vs*100}%`}})}),L.jsx("p",{className:"inner-room__progress-text",children:i?"הקלף מלא!":`${R}/${Vs} מילים מהאוצר`})]})})]}),!i&&L.jsxs("aside",{className:"inner-room__vocab","aria-label":"אוצר מילים",children:[L.jsx("h3",{className:"inner-room__vocab-title",children:"אוצר מילים"}),L.jsx("p",{className:"inner-room__vocab-lead",children:"לחצו על מילה כדי להוסיף אותה למכתב"}),L.jsx("div",{className:"inner-room__vocab-chips",children:by.map(M=>{const S=T.has(Dl(M));return L.jsx("button",{type:"button",className:`inner-room__vocab-chip phrase-font${S?" inner-room__vocab-chip--used":""}`,onClick:()=>x(M),children:M},M)})})]})]})]}),i&&L.jsx("div",{className:"inner-room__celebrate pop-in",role:"status",children:L.jsxs("div",{className:"inner-room__celebrate-card",children:[L.jsx("p",{children:"המכתב נשלח מהחדר הסודי!"}),L.jsx("p",{className:"inner-room__celebrate-sub",children:"שלמא — פענחתם את הצופן הארמי"})]})})]})}const Iy=48,Oy=5;function ky({onRestart:a,stars:e=ad}){const n=Xs(),i=re.useRef(null),s=Math.max(0,Math.floor(e));return re.useEffect(()=>{const l=i.current;l&&(l.classList.remove("victory-confetti--play"),l.offsetWidth,l.classList.add("victory-confetti--play"))},[]),L.jsxs("div",{className:"victory-screen",children:[L.jsx("div",{className:"victory-confetti victory-confetti--play",ref:i,"aria-hidden":"true",children:Array.from({length:Iy}).map((l,c)=>L.jsx("span",{className:`victory-confetti__piece victory-confetti__piece--${c%5}`,style:{"--i":c,"--x":`${c*37%100}%`,"--delay":`${c%12*.07}s`,"--dur":`${2.2+c%5*.35}s`,"--spin":`${(c%2===0?1:-1)*(280+c%7*40)}deg`}},c))}),L.jsxs("div",{className:"victory-card victory-card--finale",children:[L.jsxs("div",{className:"victory-medal","aria-hidden":"true",children:[L.jsx("div",{className:"victory-medal__ribbon victory-medal__ribbon--l"}),L.jsx("div",{className:"victory-medal__ribbon victory-medal__ribbon--r"}),L.jsx("div",{className:"victory-medal__disc",children:L.jsx("span",{className:"victory-medal__glyph",children:"🏅"})})]}),L.jsx("h1",{className:"victory-title",children:"פענחתם את הצופן הארמי!"}),L.jsx("div",{className:"victory-stars",role:"img","aria-label":`${s} כוכבים`,children:Array.from({length:Oy}).map((l,c)=>L.jsx("span",{className:"victory-star victory-star--lit",style:{"--star-i":c+1},children:"⭐"},c))}),L.jsx("p",{className:"victory-stars-total",children:s}),L.jsx("p",{className:"victory-stars-label",children:n?"כוכבים במסע כולו":"כוכבים"}),L.jsx("p",{className:"victory-sub",children:n?"המכתב נשלח · המדליה שלכם מחכה במפת המסע":"המכתב נשלח · שלמא לכולכון"}),!n&&L.jsx("button",{type:"button",className:"btn-primary",onClick:a,children:"שחקו שוב"}),n&&L.jsx("p",{className:"victory-return-hint",children:"חוזרים למפה עם המדליה…"})]})]})}function Fy({room:a,onOuter:e,onInner:n}){return L.jsxs("nav",{className:"room-travel","aria-label":"מעבר בין חדרים (בדיקות)",children:[L.jsx("span",{className:"room-travel__label",children:"מעבר לבדיקה"}),L.jsxs("div",{className:"room-travel__btns",children:[L.jsx("button",{type:"button",className:`room-travel__btn${a==="outer"?" room-travel__btn--active":""}`,onClick:e,"aria-current":a==="outer"?"page":void 0,children:"החדר החיצוני"}),L.jsx("button",{type:"button",className:`room-travel__btn${a==="inner"?" room-travel__btn--active":""}`,onClick:n,"aria-current":a==="inner"?"page":void 0,children:"החדר הפנימי"})]})]})}const zy={explore:a=>a?a.includes("ארון")?"סובבו את המבט בחדר. חפשו את הארון הזוהר — כשתמצאו אותו, לחצו עליו כדי לפתוח את החידה.":`סובבו את המבט בחדר. עכשיו חפשו את «${a}» — כשתמצאו אותו, לחצו עליו כדי לפתוח את החידה.`:"סובבו את המבט בחדר. חפשו את החפץ הבא — כשתמצאו אותו, לחצו עליו כדי לפתוח את החידה.",riddle:()=>"מצאתם את החפץ! ענו על החידה — בחרו את המילה הנכונה. לא מבינים מילה? לחצו עליה לתרגום מעליה.","lock-opening":()=>"כל הספרות נכונות — המנעול נפתח! דלת לחדר סודי נפתחת… מה מחכה בפנים?","inner-room":()=>"אתם בחדר הסודי. לחצו על הקלף שעל השולחן, ואז כתבו מכתב קצר בעזרת אוצר המילים."};function Cm({phase:a,objectName:e,gematriaHelp:n=null}){const i=a==="gematria"&&n?L_(n):a==="gematria"?"יפה! חשבו את הגימטרייה בלשונית שבצד, פתחו את המנעול, סובבו את החוגה לספרה הנכונה ולחצו «הזן».":zy[a](e);return L.jsx("p",{className:`room-guidance${n!=null&&n.mistake?" room-guidance--hint":""}${n!=null&&n.elevated?" room-guidance--elevated":""}`,role:"status","aria-live":"polite",children:i})}function By({current:a,total:e=10}){const n=Math.min(Math.max(a,1),e);return L.jsxs("div",{className:"station-progress",role:"status","aria-live":"polite","aria-label":`תחנה ${n} מתוך ${e}`,children:[L.jsx("span",{className:"station-progress__label",children:"תחנה"}),L.jsxs("span",{className:"station-progress__count",children:[n,"/",e]})]})}function Hy({visible:a,onAccept:e,onDismiss:n}){return a?L.jsxs("div",{className:"illuminate-offer",role:"dialog","aria-label":"רמז להארת החפץ",children:[L.jsx("p",{className:"illuminate-offer__text",children:"לא מוצאים את החפץ? אפשר להאיר אותו בשבילכם"}),L.jsxs("div",{className:"illuminate-offer__actions",children:[L.jsx("button",{type:"button",className:"btn-primary illuminate-offer__accept",onClick:e,children:"האירו לי את החפץ"}),L.jsx("button",{type:"button",className:"btn-secondary illuminate-offer__dismiss",onClick:n,children:"עוד אחפש"})]})]}):null}const Gy=6e4,Vy=28e3,jy=22e3,Wy=12e3,Xy=1e4;function Yy(){return xd()?"inner-room":"explore"}function qy({onRestart:a}){const[e,n]=re.useState(E_),[i,s]=re.useState(Yy),[l,c]=re.useState(null),[p,f]=re.useState(null),[d,m]=re.useState(0),[v,_]=re.useState(!1),[y,R]=re.useState(!1),[T,x]=re.useState(!1),[C,M]=re.useState(!1),[S,j]=re.useState("calc"),[k,U]=re.useState(ip),[N,ae]=re.useState(!1),[K,ne]=re.useState(0),[pe,B]=re.useState(!1),[ee,Z]=re.useState(!1),[me,Me]=re.useState(()=>s_()),[se,V]=re.useState(ad),$=re.useRef(0),H=re.useRef(null),w=re.useRef(null),F=re.useRef(null),b=M_(),A=!Xs();re.useEffect(()=>{const et=Ne=>{o_(Ne.data)&&Me(Math.floor(Ne.data.journeyStars))};return window.addEventListener("message",et),()=>window.removeEventListener("message",et)},[]);const O=Xi[e.currentRiddleIndex],X=S_(e.currentRiddleIndex),z=Math.min(e.currentRiddleIndex+1,10),Q=N||e.currentRiddleIndex<b_;re.useEffect(()=>{R(!1),x(!1),M(!1),$.current=0},[e.currentRiddleIndex]),re.useEffect(()=>{i==="gematria"&&(j("calc"),U(ip),B(!1),Z(!1),m(0),_(!1),H.current=Date.now(),w.current=null,F.current=null)},[i,e.currentRiddleIndex]),re.useEffect(()=>{if(i!=="explore"||e.lockUnlocked||y||C)return;const et=Date.now(),Ne=$.current,Ve=Math.max(0,(N?Vy:Gy)-Ne),Dt=window.setTimeout(()=>x(!0),Ve);return()=>{$.current=Ne+(Date.now()-et),window.clearTimeout(Dt)}},[i,e.currentRiddleIndex,e.lockUnlocked,y,C,N]);const ce=re.useCallback(et=>{U(et)},[]);re.useEffect(()=>{i!=="gematria"||!O||(bc(k,O)?(j("lock"),B(!1),Z(!1),w.current=null):S==="lock"&&j("calc"))},[i,O,k,S]),re.useEffect(()=>{if(i!=="gematria"||!O)return;const et=()=>{const Xe=H.current??Date.now(),Ve=Date.now()-Xe,Dt=N?Wy:jy;k.letterCount===0&&Ve>=Dt?B(!0):k.letterCount>0&&B(!1),k.finalDigit!==null&&k.finalDigit!==O.dialDigit&&!bc(k,O)?w.current===null?w.current=Date.now():Date.now()-w.current>=Xy&&Z(!0):(w.current=null,Z(!1)),ap({lockWrongAttempts:d,calcMistakeHits:K,msOnGematria:Ve,elevatedAlready:N})&&ae(!0)};et();const Ne=window.setInterval(et,1e3);return()=>window.clearInterval(Ne)},[i,O,k,N,d,K]);const oe=re.useMemo(()=>i!=="gematria"||!O?null:v?"wrong-lock":C_(k,O,{emptyStuck:pe,wrongDigitStuck:ee}),[i,O,k,pe,ee,v]);re.useEffect(()=>{if(!oe||oe==="wrong-lock")return;const et=`${e.currentRiddleIndex}:${oe}:${k.letterString}`;F.current!==et&&(F.current=et,ne(Ne=>Ne+1))},[oe,k.letterString,e.currentRiddleIndex]);const _e=re.useMemo(()=>i!=="gematria"||!O?null:{step:S,stationIndex:e.currentRiddleIndex,explicit:Q,dialDigit:O.dialDigit,answerWord:R_(O),mistake:oe,elevated:N},[i,O,S,e.currentRiddleIndex,Q,oe,N]),Ce=e.currentRiddleIndex===0&&e.solvedCount===0&&!e.lockUnlocked,De=y?"boosted":Ce?"idle":"none",P=re.useCallback(()=>{s("inner-room")},[]),Te=re.useCallback(()=>{s("explore")},[]),he=re.useCallback(()=>{e.lockUnlocked||(x(!1),s("riddle"))},[e.lockUnlocked]),de=re.useCallback(()=>{he()},[he]),ye=()=>{m(0),_(!1),s("gematria")},Re=re.useCallback(()=>{const et=Xi[e.currentRiddleIndex],Ne=e.currentRiddleIndex;c(Ne),f(et.dialDigit),m(0),_(!1),window.setTimeout(()=>{n(Xe=>{const Ve=[...Xe.dialDigits];Ve[Ne]=et.dialDigit;const Dt=Xe.solvedCount+1,Tt=Dt>=10;return{currentRiddleIndex:Tt?Xe.currentRiddleIndex:Xe.currentRiddleIndex+1,solvedCount:Dt,dialDigits:Ve,lockUnlocked:Tt}}),c(null),f(null),Ne+1>=10?(s("lock-opening"),window.setTimeout(()=>s("inner-room"),1800)):s("explore")},800)},[e.currentRiddleIndex]),be=re.useCallback(et=>{const Ne=Xi[e.currentRiddleIndex];return et===Ne.dialDigit?(Re(),!0):(m(Xe=>{const Ve=Xe+1;return ap({lockWrongAttempts:Ve,calcMistakeHits:K,msOnGematria:0,elevatedAlready:N})&&ae(!0),Ve}),_(!0),window.setTimeout(()=>_(!1),1600),!1)},[e.currentRiddleIndex,Re,K,N]),Ie=re.useCallback(()=>{const et=ad,Ne=me+et;V(Ne),s("victory"),window.setTimeout(()=>l_({stars:et}),3800)},[me]);if(i==="victory")return L.jsx(ky,{onRestart:a,stars:se});const Ge=b?L.jsx(Fy,{room:i==="inner-room"?"inner":"outer",onOuter:Te,onInner:P}):null;if(i==="inner-room")return L.jsxs("div",{className:"escape-room escape-room--inner",children:[Ge,A&&L.jsx("div",{className:"room-fs-bar","aria-label":"פקדי תצוגה",children:L.jsx(sd,{})}),L.jsx(Cm,{phase:"inner-room"}),L.jsx(Uy,{onComplete:Ie})]});const Pe=i==="gematria",ke=Pe&&O?bc(k,O):!1,Je=i==="explore"||i==="riddle"||i==="gematria"||i==="lock-opening"?i:"explore";return L.jsxs("div",{className:`escape-room${Pe?" escape-room--gematria":""}`,children:[Ge,A&&L.jsx("div",{className:"room-fs-bar","aria-label":"פקדי תצוגה",children:L.jsx(sd,{})}),L.jsx(Cm,{phase:Je,objectName:i==="explore"?X:null,gematriaHelp:_e}),L.jsx(fy,{riddles:Xi,activeIndex:e.currentRiddleIndex,solvedCount:e.solvedCount,onHotspotClick:de,lockUnlocked:e.lockUnlocked,onEnterInner:e.lockUnlocked?P:void 0,activeGlowMode:!e.lockUnlocked&&i==="explore"?De:"none"}),!e.lockUnlocked&&L.jsx(By,{current:z,total:10}),L.jsx(Hy,{visible:T&&i==="explore"&&!y,onAccept:()=>{R(!0),x(!1)},onDismiss:()=>{x(!1),M(!0)}}),L.jsx(yy,{digits:e.dialDigits,rollingIndex:l,rollingDigit:p,unlocked:e.lockUnlocked&&i==="lock-opening",interactiveIndex:Pe?e.currentRiddleIndex:null,onDigitPick:Pe?be:void 0,wrongFlash:v,preferOpen:Pe&&S==="lock"}),L.jsx(_y,{riddle:Pe?O:null,lockIndex:Pe?e.currentRiddleIndex:null,lockWrongAttempts:Pe?d:0,preferOpen:Pe&&S==="calc",hintAfterWrongAttempts:N||Q?1:2,onCalcChange:Pe?ce:void 0,readyForLock:ke,lockDigitHint:ke&&O?O.dialDigit:null}),i==="riddle"&&O&&L.jsx(my,{riddle:O,onCorrect:ye,onClose:()=>s("explore")})]})}function $y(){return xd()?"room":"landing"}function Ky(){const[a,e]=re.useState($y),[n,i]=re.useState(0);re.useEffect(()=>(u_(),Xs()&&(document.documentElement.classList.add("escape-embedded"),document.body.classList.add("escape-embedded")),()=>{document.documentElement.classList.remove("escape-embedded"),document.body.classList.remove("escape-embedded")}),[]),re.useEffect(()=>{const l=a==="room";return document.documentElement.classList.toggle("escape-room-live",l),document.body.classList.toggle("escape-room-live",l),()=>{document.documentElement.classList.remove("escape-room-live"),document.body.classList.remove("escape-room-live")}},[a]);const s=()=>{i(l=>l+1),e(xd()?"room":"landing")};return a==="landing"?L.jsx(v_,{onStart:()=>e("room")}):L.jsx(qy,{onRestart:s},n)}t_.createRoot(document.getElementById("root")).render(L.jsx(re.StrictMode,{children:L.jsx(Ky,{})}));
