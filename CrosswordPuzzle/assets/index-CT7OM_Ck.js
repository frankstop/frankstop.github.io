(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))s(b);new MutationObserver(b=>{for(const v of b)if(v.type==="childList")for(const L of v.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&s(L)}).observe(document,{childList:!0,subtree:!0});function y(b){const v={};return b.integrity&&(v.integrity=b.integrity),b.referrerPolicy&&(v.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?v.credentials="include":b.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function s(b){if(b.ep)return;b.ep=!0;const v=y(b);fetch(b.href,v)}})();function EE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Eo={exports:{}},ee={};var wd;function mE(){if(wd)return ee;wd=1;var r=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),L=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),K=Symbol.iterator;function ne(A){return A===null||typeof A!="object"?null:(A=K&&A[K]||A["@@iterator"],typeof A=="function"?A:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},be=Object.assign,J={};function Z(A,C,Y){this.props=A,this.context=C,this.refs=J,this.updater=Y||le}Z.prototype.isReactComponent={},Z.prototype.setState=function(A,C){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,C,"setState")},Z.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function D(){}D.prototype=Z.prototype;function _(A,C,Y){this.props=A,this.context=C,this.refs=J,this.updater=Y||le}var he=_.prototype=new D;he.constructor=_,be(he,Z.prototype),he.isPureReactComponent=!0;var ie=Array.isArray;function Ue(){}var k={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function Re(A,C,Y){var I=Y.ref;return{$$typeof:r,type:A,key:C,ref:I!==void 0?I:null,props:Y}}function De(A,C){return Re(A.type,C,A.props)}function Oe(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function de(A){var C={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Y){return C[Y]})}var ye=/\/+/g;function Ne(A,C){return typeof A=="object"&&A!==null&&A.key!=null?de(""+A.key):C.toString(36)}function ge(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(Ue,Ue):(A.status="pending",A.then(function(C){A.status==="pending"&&(A.status="fulfilled",A.value=C)},function(C){A.status==="pending"&&(A.status="rejected",A.reason=C)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function f(A,C,Y,I,x){var X=typeof A;(X==="undefined"||X==="boolean")&&(A=null);var ue=!1;if(A===null)ue=!0;else switch(X){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(A.$$typeof){case r:case E:ue=!0;break;case B:return ue=A._init,f(ue(A._payload),C,Y,I,x)}}if(ue)return x=x(A),ue=I===""?"."+Ne(A,0):I,ie(x)?(Y="",ue!=null&&(Y=ue.replace(ye,"$&/")+"/"),f(x,C,Y,"",function(Dl){return Dl})):x!=null&&(Oe(x)&&(x=De(x,Y+(x.key==null||A&&A.key===x.key?"":(""+x.key).replace(ye,"$&/")+"/")+ue)),C.push(x)),1;ue=0;var Xe=I===""?".":I+":";if(ie(A))for(var Ye=0;Ye<A.length;Ye++)I=A[Ye],X=Xe+Ne(I,Ye),ue+=f(I,C,Y,X,x);else if(Ye=ne(A),typeof Ye=="function")for(A=Ye.call(A),Ye=0;!(I=A.next()).done;)I=I.value,X=Xe+Ne(I,Ye++),ue+=f(I,C,Y,X,x);else if(X==="object"){if(typeof A.then=="function")return f(ge(A),C,Y,I,x);throw C=String(A),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ue}function w(A,C,Y){if(A==null)return A;var I=[],x=0;return f(A,I,"","",function(X){return C.call(Y,X,x++)}),I}function H(A){if(A._status===-1){var C=A._result;C=C(),C.then(function(Y){(A._status===0||A._status===-1)&&(A._status=1,A._result=Y)},function(Y){(A._status===0||A._status===-1)&&(A._status=2,A._result=Y)}),A._status===-1&&(A._status=0,A._result=C)}if(A._status===1)return A._result.default;throw A._result}var V=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},$={map:w,forEach:function(A,C,Y){w(A,function(){C.apply(this,arguments)},Y)},count:function(A){var C=0;return w(A,function(){C++}),C},toArray:function(A){return w(A,function(C){return C})||[]},only:function(A){if(!Oe(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ee.Activity=G,ee.Children=$,ee.Component=Z,ee.Fragment=y,ee.Profiler=b,ee.PureComponent=_,ee.StrictMode=s,ee.Suspense=U,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ee.__COMPILER_RUNTIME={__proto__:null,c:function(A){return k.H.useMemoCache(A)}},ee.cache=function(A){return function(){return A.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(A,C,Y){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var I=be({},A.props),x=A.key;if(C!=null)for(X in C.key!==void 0&&(x=""+C.key),C)!fe.call(C,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&C.ref===void 0||(I[X]=C[X]);var X=arguments.length-2;if(X===1)I.children=Y;else if(1<X){for(var ue=Array(X),Xe=0;Xe<X;Xe++)ue[Xe]=arguments[Xe+2];I.children=ue}return Re(A.type,x,I)},ee.createContext=function(A){return A={$$typeof:L,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:v,_context:A},A},ee.createElement=function(A,C,Y){var I,x={},X=null;if(C!=null)for(I in C.key!==void 0&&(X=""+C.key),C)fe.call(C,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(x[I]=C[I]);var ue=arguments.length-2;if(ue===1)x.children=Y;else if(1<ue){for(var Xe=Array(ue),Ye=0;Ye<ue;Ye++)Xe[Ye]=arguments[Ye+2];x.children=Xe}if(A&&A.defaultProps)for(I in ue=A.defaultProps,ue)x[I]===void 0&&(x[I]=ue[I]);return Re(A,X,x)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(A){return{$$typeof:z,render:A}},ee.isValidElement=Oe,ee.lazy=function(A){return{$$typeof:B,_payload:{_status:-1,_result:A},_init:H}},ee.memo=function(A,C){return{$$typeof:R,type:A,compare:C===void 0?null:C}},ee.startTransition=function(A){var C=k.T,Y={};k.T=Y;try{var I=A(),x=k.S;x!==null&&x(Y,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(Ue,V)}catch(X){V(X)}finally{C!==null&&Y.types!==null&&(C.types=Y.types),k.T=C}},ee.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ee.use=function(A){return k.H.use(A)},ee.useActionState=function(A,C,Y){return k.H.useActionState(A,C,Y)},ee.useCallback=function(A,C){return k.H.useCallback(A,C)},ee.useContext=function(A){return k.H.useContext(A)},ee.useDebugValue=function(){},ee.useDeferredValue=function(A,C){return k.H.useDeferredValue(A,C)},ee.useEffect=function(A,C){return k.H.useEffect(A,C)},ee.useEffectEvent=function(A){return k.H.useEffectEvent(A)},ee.useId=function(){return k.H.useId()},ee.useImperativeHandle=function(A,C,Y){return k.H.useImperativeHandle(A,C,Y)},ee.useInsertionEffect=function(A,C){return k.H.useInsertionEffect(A,C)},ee.useLayoutEffect=function(A,C){return k.H.useLayoutEffect(A,C)},ee.useMemo=function(A,C){return k.H.useMemo(A,C)},ee.useOptimistic=function(A,C){return k.H.useOptimistic(A,C)},ee.useReducer=function(A,C,Y){return k.H.useReducer(A,C,Y)},ee.useRef=function(A){return k.H.useRef(A)},ee.useState=function(A){return k.H.useState(A)},ee.useSyncExternalStore=function(A,C,Y){return k.H.useSyncExternalStore(A,C,Y)},ee.useTransition=function(){return k.H.useTransition()},ee.version="19.2.4",ee}var Ud;function Oo(){return Ud||(Ud=1,Eo.exports=mE()),Eo.exports}var W=Oo();const o=EE(W);var mo={exports:{}},Nn={},go={exports:{}},To={};var Dd;function gE(){return Dd||(Dd=1,(function(r){function E(f,w){var H=f.length;f.push(w);e:for(;0<H;){var V=H-1>>>1,$=f[V];if(0<b($,w))f[V]=w,f[H]=$,H=V;else break e}}function y(f){return f.length===0?null:f[0]}function s(f){if(f.length===0)return null;var w=f[0],H=f.pop();if(H!==w){f[0]=H;e:for(var V=0,$=f.length,A=$>>>1;V<A;){var C=2*(V+1)-1,Y=f[C],I=C+1,x=f[I];if(0>b(Y,H))I<$&&0>b(x,Y)?(f[V]=x,f[I]=H,V=I):(f[V]=Y,f[C]=H,V=C);else if(I<$&&0>b(x,H))f[V]=x,f[I]=H,V=I;else break e}}return w}function b(f,w){var H=f.sortIndex-w.sortIndex;return H!==0?H:f.id-w.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;r.unstable_now=function(){return v.now()}}else{var L=Date,z=L.now();r.unstable_now=function(){return L.now()-z}}var U=[],R=[],B=1,G=null,K=3,ne=!1,le=!1,be=!1,J=!1,Z=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function he(f){for(var w=y(R);w!==null;){if(w.callback===null)s(R);else if(w.startTime<=f)s(R),w.sortIndex=w.expirationTime,E(U,w);else break;w=y(R)}}function ie(f){if(be=!1,he(f),!le)if(y(U)!==null)le=!0,Ue||(Ue=!0,de());else{var w=y(R);w!==null&&ge(ie,w.startTime-f)}}var Ue=!1,k=-1,fe=5,Re=-1;function De(){return J?!0:!(r.unstable_now()-Re<fe)}function Oe(){if(J=!1,Ue){var f=r.unstable_now();Re=f;var w=!0;try{e:{le=!1,be&&(be=!1,D(k),k=-1),ne=!0;var H=K;try{t:{for(he(f),G=y(U);G!==null&&!(G.expirationTime>f&&De());){var V=G.callback;if(typeof V=="function"){G.callback=null,K=G.priorityLevel;var $=V(G.expirationTime<=f);if(f=r.unstable_now(),typeof $=="function"){G.callback=$,he(f),w=!0;break t}G===y(U)&&s(U),he(f)}else s(U);G=y(U)}if(G!==null)w=!0;else{var A=y(R);A!==null&&ge(ie,A.startTime-f),w=!1}}break e}finally{G=null,K=H,ne=!1}w=void 0}}finally{w?de():Ue=!1}}}var de;if(typeof _=="function")de=function(){_(Oe)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Ne=ye.port2;ye.port1.onmessage=Oe,de=function(){Ne.postMessage(null)}}else de=function(){Z(Oe,0)};function ge(f,w){k=Z(function(){f(r.unstable_now())},w)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(f){f.callback=null},r.unstable_forceFrameRate=function(f){0>f||125<f?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<f?Math.floor(1e3/f):5},r.unstable_getCurrentPriorityLevel=function(){return K},r.unstable_next=function(f){switch(K){case 1:case 2:case 3:var w=3;break;default:w=K}var H=K;K=w;try{return f()}finally{K=H}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(f,w){switch(f){case 1:case 2:case 3:case 4:case 5:break;default:f=3}var H=K;K=f;try{return w()}finally{K=H}},r.unstable_scheduleCallback=function(f,w,H){var V=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?V+H:V):H=V,f){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=H+$,f={id:B++,callback:w,priorityLevel:f,startTime:H,expirationTime:$,sortIndex:-1},H>V?(f.sortIndex=H,E(R,f),y(U)===null&&f===y(R)&&(be?(D(k),k=-1):be=!0,ge(ie,H-V))):(f.sortIndex=$,E(U,f),le||ne||(le=!0,Ue||(Ue=!0,de()))),f},r.unstable_shouldYield=De,r.unstable_wrapCallback=function(f){var w=K;return function(){var H=K;K=w;try{return f.apply(this,arguments)}finally{K=H}}}})(To)),To}var Hd;function TE(){return Hd||(Hd=1,go.exports=gE()),go.exports}var So={exports:{}},et={};var Id;function SE(){if(Id)return et;Id=1;var r=Oo();function E(U){var R="https://react.dev/errors/"+U;if(1<arguments.length){R+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)R+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+U+"; visit "+R+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(){}var s={d:{f:y,r:function(){throw Error(E(522))},D:y,C:y,L:y,m:y,X:y,S:y,M:y},p:0,findDOMNode:null},b=Symbol.for("react.portal");function v(U,R,B){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:G==null?null:""+G,children:U,containerInfo:R,implementation:B}}var L=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(U,R){if(U==="font")return"";if(typeof R=="string")return R==="use-credentials"?R:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,et.createPortal=function(U,R){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R||R.nodeType!==1&&R.nodeType!==9&&R.nodeType!==11)throw Error(E(299));return v(U,R,null,B)},et.flushSync=function(U){var R=L.T,B=s.p;try{if(L.T=null,s.p=2,U)return U()}finally{L.T=R,s.p=B,s.d.f()}},et.preconnect=function(U,R){typeof U=="string"&&(R?(R=R.crossOrigin,R=typeof R=="string"?R==="use-credentials"?R:"":void 0):R=null,s.d.C(U,R))},et.prefetchDNS=function(U){typeof U=="string"&&s.d.D(U)},et.preinit=function(U,R){if(typeof U=="string"&&R&&typeof R.as=="string"){var B=R.as,G=z(B,R.crossOrigin),K=typeof R.integrity=="string"?R.integrity:void 0,ne=typeof R.fetchPriority=="string"?R.fetchPriority:void 0;B==="style"?s.d.S(U,typeof R.precedence=="string"?R.precedence:void 0,{crossOrigin:G,integrity:K,fetchPriority:ne}):B==="script"&&s.d.X(U,{crossOrigin:G,integrity:K,fetchPriority:ne,nonce:typeof R.nonce=="string"?R.nonce:void 0})}},et.preinitModule=function(U,R){if(typeof U=="string")if(typeof R=="object"&&R!==null){if(R.as==null||R.as==="script"){var B=z(R.as,R.crossOrigin);s.d.M(U,{crossOrigin:B,integrity:typeof R.integrity=="string"?R.integrity:void 0,nonce:typeof R.nonce=="string"?R.nonce:void 0})}}else R==null&&s.d.M(U)},et.preload=function(U,R){if(typeof U=="string"&&typeof R=="object"&&R!==null&&typeof R.as=="string"){var B=R.as,G=z(B,R.crossOrigin);s.d.L(U,B,{crossOrigin:G,integrity:typeof R.integrity=="string"?R.integrity:void 0,nonce:typeof R.nonce=="string"?R.nonce:void 0,type:typeof R.type=="string"?R.type:void 0,fetchPriority:typeof R.fetchPriority=="string"?R.fetchPriority:void 0,referrerPolicy:typeof R.referrerPolicy=="string"?R.referrerPolicy:void 0,imageSrcSet:typeof R.imageSrcSet=="string"?R.imageSrcSet:void 0,imageSizes:typeof R.imageSizes=="string"?R.imageSizes:void 0,media:typeof R.media=="string"?R.media:void 0})}},et.preloadModule=function(U,R){if(typeof U=="string")if(R){var B=z(R.as,R.crossOrigin);s.d.m(U,{as:typeof R.as=="string"&&R.as!=="script"?R.as:void 0,crossOrigin:B,integrity:typeof R.integrity=="string"?R.integrity:void 0})}else s.d.m(U)},et.requestFormReset=function(U){s.d.r(U)},et.unstable_batchedUpdates=function(U,R){return U(R)},et.useFormState=function(U,R,B){return L.H.useFormState(U,R,B)},et.useFormStatus=function(){return L.H.useHostTransitionStatus()},et.version="19.2.4",et}var Bd;function RE(){if(Bd)return So.exports;Bd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(E){console.error(E)}}return r(),So.exports=SE(),So.exports}var Gd;function yE(){if(Gd)return Nn;Gd=1;var r=TE(),E=Oo(),y=RE();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function L(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(v(e)!==e)throw Error(s(188))}function R(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return U(n),e;if(i===l)return U(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var G=Object.assign,K=Symbol.for("react.element"),ne=Symbol.for("react.transitional.element"),le=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),_=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),De=Symbol.for("react.memo_cache_sentinel"),Oe=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=Oe&&e[Oe]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case be:return"Fragment";case Z:return"Profiler";case J:return"StrictMode";case ie:return"Suspense";case Ue:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case le:return"Portal";case _:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return t=e.displayName||null,t!==null?t:Ne(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return Ne(e(t))}catch{}}return null}var ge=Array.isArray,f=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},V=[],$=-1;function A(e){return{current:e}}function C(e){0>$||(e.current=V[$],V[$]=null,$--)}function Y(e,t){$++,V[$]=e.current,e.current=t}var I=A(null),x=A(null),X=A(null),ue=A(null);function Xe(e,t){switch(Y(X,t),Y(x,e),Y(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$f(t),e=ed(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(I),Y(I,e)}function Ye(){C(I),C(x),C(X)}function Dl(e){e.memoizedState!==null&&Y(ue,e);var t=I.current,a=ed(t,e.type);t!==a&&(Y(x,e),Y(I,a))}function Un(e){x.current===e&&(C(I),C(x)),ue.current===e&&(C(ue),On._currentValue=H)}var Fi,Co;function Na(e){if(Fi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Fi=t&&t[1]||"",Co=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fi+e+Co}var Wi=!1;function Ji(e,t){if(!e||Wi)return"";Wi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(O){var S=O}Reflect.construct(e,[],M)}else{try{M.call()}catch(O){S=O}e.call(M.prototype)}}else{try{throw Error()}catch(O){S=O}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(O){if(O&&S&&typeof O.stack=="string")return[O.stack,S.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var d=u.split(`
`),T=c.split(`
`);for(n=l=0;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;for(;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;if(l===d.length||n===T.length)for(l=d.length-1,n=T.length-1;1<=l&&0<=n&&d[l]!==T[n];)n--;for(;1<=l&&0<=n;l--,n--)if(d[l]!==T[n]){if(l!==1||n!==1)do if(l--,n--,0>n||d[l]!==T[n]){var p=`
`+d[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=l&&0<=n);break}}}finally{Wi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Na(a):""}function jd(e,t){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return e.child!==t&&t!==null?Na("Suspense Fallback"):Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return Ji(e.type,!1);case 11:return Ji(e.type.render,!1);case 1:return Ji(e.type,!0);case 31:return Na("Activity");default:return""}}function Mo(e){try{var t="",a=null;do t+=jd(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $i=Object.prototype.hasOwnProperty,eu=r.unstable_scheduleCallback,tu=r.unstable_cancelCallback,Qd=r.unstable_shouldYield,Xd=r.unstable_requestPaint,rt=r.unstable_now,Zd=r.unstable_getCurrentPriorityLevel,wo=r.unstable_ImmediatePriority,Uo=r.unstable_UserBlockingPriority,Dn=r.unstable_NormalPriority,Fd=r.unstable_LowPriority,Do=r.unstable_IdlePriority,Wd=r.log,Jd=r.unstable_setDisableYieldValue,Hl=null,st=null;function ea(e){if(typeof Wd=="function"&&Jd(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(Hl,e)}catch{}}var ft=Math.clz32?Math.clz32:tA,$d=Math.log,eA=Math.LN2;function tA(e){return e>>>=0,e===0?32:31-($d(e)/eA|0)|0}var Hn=256,In=262144,Bn=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=La(l):(u&=c,u!==0?n=La(u):a||(a=c&~e,a!==0&&(n=La(a))))):(c=l&~i,c!==0?n=La(c):u!==0?n=La(u):a||(a=l&~e,a!==0&&(n=La(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Il(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function aA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ho(){var e=Bn;return Bn<<=1,(Bn&62914560)===0&&(Bn=4194304),e}function au(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Bl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lA(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,T=e.hiddenUpdates;for(a=u&~a;0<a;){var p=31-ft(a),M=1<<p;c[p]=0,d[p]=-1;var S=T[p];if(S!==null)for(T[p]=null,p=0;p<S.length;p++){var O=S[p];O!==null&&(O.lane&=-536870913)}a&=~M}l!==0&&Io(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Io(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Bo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ft(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Go(e,t){var a=t&-t;return a=(a&42)!==0?1:lu(a),(a&(e.suspendedLanes|t))!==0?0:a}function lu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zo(){var e=w.p;return e!==0?e:(e=window.event,e===void 0?32:pd(e.type))}function Yo(e,t){var a=w.p;try{return w.p=e,t()}finally{w.p=a}}var ta=Math.random().toString(36).slice(2),Ze="__reactFiber$"+ta,at="__reactProps$"+ta,Pa="__reactContainer$"+ta,iu="__reactEvents$"+ta,nA="__reactListeners$"+ta,iA="__reactHandles$"+ta,Ko="__reactResources$"+ta,Gl="__reactMarker$"+ta;function uu(e){delete e[Ze],delete e[at],delete e[iu],delete e[nA],delete e[iA]}function ja(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Pa]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cd(e);e!==null;){if(a=e[Ze])return a;e=cd(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Ze]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Xa(e){var t=e[Ko];return t||(t=e[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[Gl]=!0}var _o=new Set,ko={};function Ca(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(ko[e]=t,e=0;e<t.length;e++)_o.add(t[e])}var uA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vo={},qo={};function cA(e){return $i.call(qo,e)?!0:$i.call(Vo,e)?!1:uA.test(e)?qo[e]=!0:(Vo[e]=!0,!1)}function zn(e,t,a){if(cA(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Yn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oA(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cu(e){if(!e._valueTracker){var t=xo(e)?"checked":"value";e._valueTracker=oA(e,t,""+e[t])}}function Po(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=xo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rA=/[\n"\\]/g;function Rt(e){return e.replace(rA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ou(e,t,a,l,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?ru(e,u,St(t)):a!=null?ru(e,u,St(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+St(c):e.removeAttribute("name")}function jo(e,t,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){cu(e);return}a=a!=null?""+St(a):"",t=t!=null?""+St(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),cu(e)}function ru(e,t,a){t==="number"&&Kn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Fa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Qo(e,t,a){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+St(a):""}function Xo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(ge(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=St(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),cu(e)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var sA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||sA.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Fo(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Zo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Zo(e,i,t[i])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _n(e){return dA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zt(){}var fu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,$a=null;function Wo(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(ou(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[at]||null;if(!n)throw Error(s(90));ou(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Po(l)}break e;case"textarea":Qo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Fa(e,!!a.multiple,t,!1)}}}var Au=!1;function Jo(e,t,a){if(Au)return e(t,a);Au=!0;try{var l=e(t);return l}finally{if(Au=!1,(Ja!==null||$a!==null)&&(Li(),Ja&&(t=Ja,e=$a,$a=Ja=null,Wo(t),e)))for(t=0;t<e.length;t++)Wo(e[t])}}function Yl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[at]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Yt)try{var Kl={};Object.defineProperty(Kl,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Kl,Kl),window.removeEventListener("test",Kl,Kl)}catch{hu=!1}var aa=null,Eu=null,kn=null;function $o(){if(kn)return kn;var e,t=Eu,a=t.length,l,n="value"in aa?aa.value:aa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return kn=n.slice(e,1<l?1-l:void 0)}function Vn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function er(){return!1}function lt(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qn:er,this.isPropagationStopped=er,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=lt(Ma),_l=G({},Ma,{view:0,detail:0}),AA=lt(_l),mu,gu,kl,Pn=G({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kl&&(kl&&e.type==="mousemove"?(mu=e.screenX-kl.screenX,gu=e.screenY-kl.screenY):gu=mu=0,kl=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),tr=lt(Pn),hA=G({},Pn,{dataTransfer:0}),EA=lt(hA),mA=G({},_l,{relatedTarget:0}),Tu=lt(mA),gA=G({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),TA=lt(gA),SA=G({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),RA=lt(SA),yA=G({},Ma,{data:0}),ar=lt(yA),OA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vA[e])?!!t[e]:!1}function Su(){return bA}var NA=G({},_l,{key:function(e){if(e.key){var t=OA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),LA=lt(NA),CA=G({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lr=lt(CA),MA=G({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),wA=lt(MA),UA=G({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),DA=lt(UA),HA=G({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IA=lt(HA),BA=G({},Ma,{newState:0,oldState:0}),GA=lt(BA),zA=[9,13,27,32],Ru=Yt&&"CompositionEvent"in window,Vl=null;Yt&&"documentMode"in document&&(Vl=document.documentMode);var YA=Yt&&"TextEvent"in window&&!Vl,nr=Yt&&(!Ru||Vl&&8<Vl&&11>=Vl),ir=" ",ur=!1;function cr(e,t){switch(e){case"keyup":return zA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function or(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var el=!1;function KA(e,t){switch(e){case"compositionend":return or(t);case"keypress":return t.which!==32?null:(ur=!0,ir);case"textInput":return e=t.data,e===ir&&ur?null:e;default:return null}}function _A(e,t){if(el)return e==="compositionend"||!Ru&&cr(e,t)?(e=$o(),kn=Eu=aa=null,el=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nr&&t.locale!=="ko"?null:t.data;default:return null}}var kA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kA[e.type]:t==="textarea"}function sr(e,t,a,l){Ja?$a?$a.push(l):$a=[l]:Ja=l,t=Ii(t,"onChange"),0<t.length&&(a=new xn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,xl=null;function VA(e){Qf(e,0)}function jn(e){var t=zl(e);if(Po(t))return e}function fr(e,t){if(e==="change")return t}var dr=!1;if(Yt){var yu;if(Yt){var Ou="oninput"in document;if(!Ou){var Ar=document.createElement("div");Ar.setAttribute("oninput","return;"),Ou=typeof Ar.oninput=="function"}yu=Ou}else yu=!1;dr=yu&&(!document.documentMode||9<document.documentMode)}function hr(){ql&&(ql.detachEvent("onpropertychange",Er),xl=ql=null)}function Er(e){if(e.propertyName==="value"&&jn(xl)){var t=[];sr(t,xl,e,du(e)),Jo(VA,t)}}function qA(e,t,a){e==="focusin"?(hr(),ql=t,xl=a,ql.attachEvent("onpropertychange",Er)):e==="focusout"&&hr()}function xA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jn(xl)}function PA(e,t){if(e==="click")return jn(t)}function jA(e,t){if(e==="input"||e==="change")return jn(t)}function QA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:QA;function Pl(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!$i.call(t,n)||!dt(e[n],t[n]))return!1}return!0}function mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gr(e,t){var a=mr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mr(a)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kn(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var XA=Yt&&"documentMode"in document&&11>=document.documentMode,tl=null,vu=null,jl=null,bu=!1;function Rr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||tl==null||tl!==Kn(l)||(l=tl,"selectionStart"in l&&pu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jl&&Pl(jl,l)||(jl=l,l=Ii(vu,"onSelect"),0<l.length&&(t=new xn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=tl)))}function wa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var al={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},Nu={},yr={};Yt&&(yr=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Ua(e){if(Nu[e])return Nu[e];if(!al[e])return e;var t=al[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in yr)return Nu[e]=t[a];return e}var Or=Ua("animationend"),pr=Ua("animationiteration"),vr=Ua("animationstart"),ZA=Ua("transitionrun"),FA=Ua("transitionstart"),WA=Ua("transitioncancel"),br=Ua("transitionend"),Nr=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Mt(e,t){Nr.set(e,t),Ca(t,[e])}var Qn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],ll=0,Cu=0;function Xn(){for(var e=ll,t=Cu=ll=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Lr(a,n,i)}}function Zn(e,t,a,l){yt[ll++]=e,yt[ll++]=t,yt[ll++]=a,yt[ll++]=l,Cu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Mu(e,t,a,l){return Zn(e,t,a,l),Fn(e)}function Da(e,t){return Zn(e,null,null,t),Fn(e)}function Lr(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ft(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Fn(e){if(50<En)throw En=0,Yc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function JA(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,a,l){return new JA(e,t,a,l)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=At(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")wu(e)&&(u=1);else if(typeof e=="string")u=lE(e,a,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=At(31,a,t,n),e.elementType=Re,e.lanes=i,e;case be:return Ha(a.children,n,i,t);case J:u=8,n|=24;break;case Z:return e=At(12,a,t,n|2),e.elementType=Z,e.lanes=i,e;case ie:return e=At(13,a,t,n),e.elementType=ie,e.lanes=i,e;case Ue:return e=At(19,a,t,n),e.elementType=Ue,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:u=10;break e;case D:u=9;break e;case he:u=11;break e;case k:u=14;break e;case fe:u=16,l=null;break e}u=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=At(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ha(e,t,a,l){return e=At(7,e,l,t),e.lanes=a,e}function Uu(e,t,a){return e=At(6,e,null,t),e.lanes=a,e}function Mr(e){var t=At(18,null,null,0);return t.stateNode=e,t}function Du(e,t,a){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wr=new WeakMap;function Ot(e,t){if(typeof e=="object"&&e!==null){var a=wr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Mo(t)},wr.set(e,t),t)}return{value:e,source:t,stack:Mo(t)}}var il=[],ul=0,Jn=null,Ql=0,pt=[],vt=0,la=null,Dt=1,Ht="";function _t(e,t){il[ul++]=Ql,il[ul++]=Jn,Jn=e,Ql=t}function Ur(e,t,a){pt[vt++]=Dt,pt[vt++]=Ht,pt[vt++]=la,la=e;var l=Dt;e=Ht;var n=32-ft(l)-1;l&=~(1<<n),a+=1;var i=32-ft(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Dt=1<<32-ft(t)+n|a<<n|l,Ht=i+e}else Dt=1<<i|a<<n|l,Ht=e}function Hu(e){e.return!==null&&(_t(e,1),Ur(e,1,0))}function Iu(e){for(;e===Jn;)Jn=il[--ul],il[ul]=null,Ql=il[--ul],il[ul]=null;for(;e===la;)la=pt[--vt],pt[vt]=null,Ht=pt[--vt],pt[vt]=null,Dt=pt[--vt],pt[vt]=null}function Dr(e,t){pt[vt++]=Dt,pt[vt++]=Ht,pt[vt++]=la,Dt=t.id,Ht=t.overflow,la=e}var Fe=null,He=null,Ae=!1,na=null,bt=!1,Bu=Error(s(519));function ia(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(Ot(t,e)),Bu}function Hr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[at]=l,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<gn.length;a++)oe(gn[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),jo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),Xo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wf(t.textContent,a)?(l.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),l.onScroll!=null&&oe("scroll",t),l.onScrollEnd!=null&&oe("scrollend",t),l.onClick!=null&&(t.onclick=zt),t=!0):t=!1,t||ia(e,!0)}function Ir(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:Fe=Fe.return}}function cl(e){if(e!==Fe)return!1;if(!Ae)return Ir(e),Ae=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$c(e.type,e.memoizedProps)),a=!a),a&&He&&ia(e),Ir(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));He=ud(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));He=ud(e)}else t===27?(t=He,Sa(e.type)?(e=no,no=null,He=e):He=t):He=Fe?Lt(e.stateNode.nextSibling):null;return!0}function Ia(){He=Fe=null,Ae=!1}function Gu(){var e=na;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),na=null),e}function Xl(e){na===null?na=[e]:na.push(e)}var zu=A(null),Ba=null,kt=null;function ua(e,t,a){Y(zu,t._currentValue),t._currentValue=a}function Vt(e){e._currentValue=zu.current,C(zu)}function Yu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ku(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var d=0;d<t.length;d++)if(c.context===t[d]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Yu(i.return,a,e),l||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Yu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ol(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var c=n.type;dt(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===ue.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}n=n.return}e!==null&&Ku(t,e,a,l),t.flags|=262144}function $n(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ba=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Br(Ba,e)}function ei(e,t){return Ba===null&&Ga(e),Br(e,t)}function Br(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},kt===null){if(e===null)throw Error(s(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return a}var $A=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},eh=r.unstable_scheduleCallback,th=r.unstable_NormalPriority,ke={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new $A,data:new Map,refCount:0}}function Zl(e){e.refCount--,e.refCount===0&&eh(th,function(){e.controller.abort()})}var Fl=null,ku=0,rl=0,sl=null;function ah(e,t){if(Fl===null){var a=Fl=[];ku=0,rl=xc(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ku++,t.then(Gr,Gr),t}function Gr(){if(--ku===0&&Fl!==null){sl!==null&&(sl.status="fulfilled");var e=Fl;Fl=null,rl=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var zr=f.S;f.S=function(e,t){yf=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ah(e,t),zr!==null&&zr(e,t)};var za=A(null);function Vu(){var e=za.current;return e!==null?e:we.pooledCache}function ti(e,t){t===null?Y(za,za.current):Y(za,t.pool)}function Yr(){var e=Vu();return e===null?null:{parent:ke._currentValue,pool:e}}var fl=Error(s(460)),qu=Error(s(474)),ai=Error(s(542)),li={then:function(){}};function Kr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _r(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(zt,zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vr(e),e;default:if(typeof t.status=="string")t.then(zt,zt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vr(e),e}throw Ka=t,fl}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ka=a,fl):a}}var Ka=null;function kr(){if(Ka===null)throw Error(s(459));var e=Ka;return Ka=null,e}function Vr(e){if(e===fl||e===ai)throw Error(s(483))}var dl=null,Wl=0;function ni(e){var t=Wl;return Wl+=1,dl===null&&(dl=[]),_r(dl,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ii(e,t){throw t.$$typeof===K?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qr(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function a(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function l(m){for(var h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function n(m,h){return m=Kt(m,h),m.index=0,m.sibling=null,m}function i(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=67108866,h):g):(m.flags|=67108866,h)):(m.flags|=1048576,h)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,h,g,N){return h===null||h.tag!==6?(h=Uu(g,m.mode,N),h.return=m,h):(h=n(h,g),h.return=m,h)}function d(m,h,g,N){var Q=g.type;return Q===be?p(m,h,g.props.children,N,g.key):h!==null&&(h.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===fe&&Ya(Q)===h.type)?(h=n(h,g.props),Jl(h,g),h.return=m,h):(h=Wn(g.type,g.key,g.props,null,m.mode,N),Jl(h,g),h.return=m,h)}function T(m,h,g,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Du(g,m.mode,N),h.return=m,h):(h=n(h,g.children||[]),h.return=m,h)}function p(m,h,g,N,Q){return h===null||h.tag!==7?(h=Ha(g,m.mode,N,Q),h.return=m,h):(h=n(h,g),h.return=m,h)}function M(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Uu(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ne:return g=Wn(h.type,h.key,h.props,null,m.mode,g),Jl(g,h),g.return=m,g;case le:return h=Du(h,m.mode,g),h.return=m,h;case fe:return h=Ya(h),M(m,h,g)}if(ge(h)||de(h))return h=Ha(h,m.mode,g,null),h.return=m,h;if(typeof h.then=="function")return M(m,ni(h),g);if(h.$$typeof===_)return M(m,ei(m,h),g);ii(m,h)}return null}function S(m,h,g,N){var Q=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return Q!==null?null:c(m,h,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ne:return g.key===Q?d(m,h,g,N):null;case le:return g.key===Q?T(m,h,g,N):null;case fe:return g=Ya(g),S(m,h,g,N)}if(ge(g)||de(g))return Q!==null?null:p(m,h,g,N,null);if(typeof g.then=="function")return S(m,h,ni(g),N);if(g.$$typeof===_)return S(m,h,ei(m,g),N);ii(m,g)}return null}function O(m,h,g,N,Q){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return m=m.get(g)||null,c(h,m,""+N,Q);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ne:return m=m.get(N.key===null?g:N.key)||null,d(h,m,N,Q);case le:return m=m.get(N.key===null?g:N.key)||null,T(h,m,N,Q);case fe:return N=Ya(N),O(m,h,g,N,Q)}if(ge(N)||de(N))return m=m.get(g)||null,p(h,m,N,Q,null);if(typeof N.then=="function")return O(m,h,g,ni(N),Q);if(N.$$typeof===_)return O(m,h,g,ei(h,N),Q);ii(h,N)}return null}function q(m,h,g,N){for(var Q=null,Ee=null,P=h,ae=h=0,se=null;P!==null&&ae<g.length;ae++){P.index>ae?(se=P,P=null):se=P.sibling;var me=S(m,P,g[ae],N);if(me===null){P===null&&(P=se);break}e&&P&&me.alternate===null&&t(m,P),h=i(me,h,ae),Ee===null?Q=me:Ee.sibling=me,Ee=me,P=se}if(ae===g.length)return a(m,P),Ae&&_t(m,ae),Q;if(P===null){for(;ae<g.length;ae++)P=M(m,g[ae],N),P!==null&&(h=i(P,h,ae),Ee===null?Q=P:Ee.sibling=P,Ee=P);return Ae&&_t(m,ae),Q}for(P=l(P);ae<g.length;ae++)se=O(P,m,ae,g[ae],N),se!==null&&(e&&se.alternate!==null&&P.delete(se.key===null?ae:se.key),h=i(se,h,ae),Ee===null?Q=se:Ee.sibling=se,Ee=se);return e&&P.forEach(function(va){return t(m,va)}),Ae&&_t(m,ae),Q}function F(m,h,g,N){if(g==null)throw Error(s(151));for(var Q=null,Ee=null,P=h,ae=h=0,se=null,me=g.next();P!==null&&!me.done;ae++,me=g.next()){P.index>ae?(se=P,P=null):se=P.sibling;var va=S(m,P,me.value,N);if(va===null){P===null&&(P=se);break}e&&P&&va.alternate===null&&t(m,P),h=i(va,h,ae),Ee===null?Q=va:Ee.sibling=va,Ee=va,P=se}if(me.done)return a(m,P),Ae&&_t(m,ae),Q;if(P===null){for(;!me.done;ae++,me=g.next())me=M(m,me.value,N),me!==null&&(h=i(me,h,ae),Ee===null?Q=me:Ee.sibling=me,Ee=me);return Ae&&_t(m,ae),Q}for(P=l(P);!me.done;ae++,me=g.next())me=O(P,m,ae,me.value,N),me!==null&&(e&&me.alternate!==null&&P.delete(me.key===null?ae:me.key),h=i(me,h,ae),Ee===null?Q=me:Ee.sibling=me,Ee=me);return e&&P.forEach(function(hE){return t(m,hE)}),Ae&&_t(m,ae),Q}function Me(m,h,g,N){if(typeof g=="object"&&g!==null&&g.type===be&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ne:e:{for(var Q=g.key;h!==null;){if(h.key===Q){if(Q=g.type,Q===be){if(h.tag===7){a(m,h.sibling),N=n(h,g.props.children),N.return=m,m=N;break e}}else if(h.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===fe&&Ya(Q)===h.type){a(m,h.sibling),N=n(h,g.props),Jl(N,g),N.return=m,m=N;break e}a(m,h);break}else t(m,h);h=h.sibling}g.type===be?(N=Ha(g.props.children,m.mode,N,g.key),N.return=m,m=N):(N=Wn(g.type,g.key,g.props,null,m.mode,N),Jl(N,g),N.return=m,m=N)}return u(m);case le:e:{for(Q=g.key;h!==null;){if(h.key===Q)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){a(m,h.sibling),N=n(h,g.children||[]),N.return=m,m=N;break e}else{a(m,h);break}else t(m,h);h=h.sibling}N=Du(g,m.mode,N),N.return=m,m=N}return u(m);case fe:return g=Ya(g),Me(m,h,g,N)}if(ge(g))return q(m,h,g,N);if(de(g)){if(Q=de(g),typeof Q!="function")throw Error(s(150));return g=Q.call(g),F(m,h,g,N)}if(typeof g.then=="function")return Me(m,h,ni(g),N);if(g.$$typeof===_)return Me(m,h,ei(m,g),N);ii(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,h!==null&&h.tag===6?(a(m,h.sibling),N=n(h,g),N.return=m,m=N):(a(m,h),N=Uu(g,m.mode,N),N.return=m,m=N),u(m)):a(m,h)}return function(m,h,g,N){try{Wl=0;var Q=Me(m,h,g,N);return dl=null,Q}catch(P){if(P===fl||P===ai)throw P;var Ee=At(29,P,null,m.mode);return Ee.lanes=N,Ee.return=m,Ee}}}var _a=qr(!0),xr=qr(!1),ca=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Te&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Fn(e),Lr(e,null,a),t}return Zn(e,l,t,a),Fn(e)}function $l(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bo(e,a)}}function ju(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Qu=!1;function en(){if(Qu){var e=sl;if(e!==null)throw e}}function tn(e,t,a,l){Qu=!1;var n=e.updateQueue;ca=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var d=c,T=d.next;d.next=null,u===null?i=T:u.next=T,u=d;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==u&&(c===null?p.firstBaseUpdate=T:c.next=T,p.lastBaseUpdate=d))}if(i!==null){var M=n.baseState;u=0,p=T=d=null,c=i;do{var S=c.lane&-536870913,O=S!==c.lane;if(O?(re&S)===S:(l&S)===S){S!==0&&S===rl&&(Qu=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var q=e,F=c;S=t;var Me=a;switch(F.tag){case 1:if(q=F.payload,typeof q=="function"){M=q.call(Me,M,S);break e}M=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=F.payload,S=typeof q=="function"?q.call(Me,M,S):q,S==null)break e;M=G({},M,S);break e;case 2:ca=!0}}S=c.callback,S!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[S]:O.push(S))}else O={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(T=p=O,d=M):p=p.next=O,u|=S;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;O=c,c=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);p===null&&(d=M),n.baseState=d,n.firstBaseUpdate=T,n.lastBaseUpdate=p,i===null&&(n.shared.lanes=0),ha|=u,e.lanes=u,e.memoizedState=M}}function Pr(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function jr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pr(a[e],t)}var Al=A(null),ui=A(0);function Qr(e,t){e=Wt,Y(ui,e),Y(Al,t),Wt=e|t.baseLanes}function Xu(){Y(ui,Wt),Y(Al,Al.current)}function Zu(){Wt=ui.current,C(Al),C(ui)}var ht=A(null),Nt=null;function sa(e){var t=e.alternate;Y(Ke,Ke.current&1),Y(ht,e),Nt===null&&(t===null||Al.current!==null||t.memoizedState!==null)&&(Nt=e)}function Fu(e){Y(Ke,Ke.current),Y(ht,e),Nt===null&&(Nt=e)}function Xr(e){e.tag===22?(Y(Ke,Ke.current),Y(ht,e),Nt===null&&(Nt=e)):fa()}function fa(){Y(Ke,Ke.current),Y(ht,ht.current)}function Et(e){C(ht),Nt===e&&(Nt=null),C(Ke)}var Ke=A(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ao(a)||lo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,te=null,Le=null,Ve=null,oi=!1,hl=!1,ka=!1,ri=0,an=0,El=null,nh=0;function Ge(){throw Error(s(321))}function Wu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!dt(e[a],t[a]))return!1;return!0}function Ju(e,t,a,l,n,i){return qt=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,f.H=e===null||e.memoizedState===null?Us:Ac,ka=!1,i=a(l,n),ka=!1,hl&&(i=Fr(t,a,l,n)),Zr(e),i}function Zr(e){f.H=un;var t=Le!==null&&Le.next!==null;if(qt=0,Ve=Le=te=null,oi=!1,an=0,El=null,t)throw Error(s(300));e===null||qe||(e=e.dependencies,e!==null&&$n(e)&&(qe=!0))}function Fr(e,t,a,l){te=e;var n=0;do{if(hl&&(El=null),an=0,hl=!1,25<=n)throw Error(s(301));if(n+=1,Ve=Le=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}f.H=Ds,i=t(a,l)}while(hl);return i}function ih(){var e=f.H,t=e.useState()[0];return t=typeof t.then=="function"?ln(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(te.flags|=1024),t}function $u(){var e=ri!==0;return ri=0,e}function ec(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function tc(e){if(oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oi=!1}qt=0,Ve=Le=te=null,hl=!1,an=ri=0,El=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?te.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function _e(){if(Le===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ve===null?te.memoizedState:Ve.next;if(t!==null)Ve=t,Le=e;else{if(e===null)throw te.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?te.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function si(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ln(e){var t=an;return an+=1,El===null&&(El=[]),e=_r(El,e,t),t=te,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,f.H=t===null||t.memoizedState===null?Us:Ac),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ln(e);if(e.$$typeof===_)return We(e)}throw Error(s(438,String(e)))}function ac(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=si(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=De;return t.index++,a}function xt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=_e();return lc(t,Le,e)}function lc(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,d=null,T=t,p=!1;do{var M=T.lane&-536870913;if(M!==T.lane?(re&M)===M:(qt&M)===M){var S=T.revertLane;if(S===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),M===rl&&(p=!0);else if((qt&S)===S){T=T.next,S===rl&&(p=!0);continue}else M={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},d===null?(c=d=M,u=i):d=d.next=M,te.lanes|=S,ha|=S;M=T.action,ka&&a(i,M),i=T.hasEagerState?T.eagerState:a(i,M)}else S={lane:M,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},d===null?(c=d=S,u=i):d=d.next=S,te.lanes|=M,ha|=M;T=T.next}while(T!==null&&T!==t);if(d===null?u=i:d.next=c,!dt(i,e.memoizedState)&&(qe=!0,p&&(a=sl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=d,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function nc(e){var t=_e(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);dt(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Wr(e,t,a){var l=te,n=_e(),i=Ae;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var u=!dt((Le||n).memoizedState,a);if(u&&(n.memoizedState=a,qe=!0),n=n.queue,cc(es.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Ve!==null&&Ve.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},$r.bind(null,l,n,a,t),null),we===null)throw Error(s(349));i||(qt&127)!==0||Jr(l,t,a)}return a}function Jr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=si(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function $r(e,t,a,l){t.value=a,t.getSnapshot=l,ts(t)&&as(e)}function es(e,t,a){return a(function(){ts(t)&&as(e)})}function ts(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!dt(e,a)}catch{return!0}}function as(e){var t=Da(e,2);t!==null&&ot(t,e,2)}function ic(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),ka){ea(!0);try{a()}finally{ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:e},t}function ls(e,t,a,l){return e.baseState=a,lc(e,Le,typeof l=="function"?l:xt)}function uh(e,t,a,l,n){if(Ei(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};f.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,ns(t,i)):(i.next=a.next,t.pending=a.next=i)}}function ns(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=f.T,u={};f.T=u;try{var c=a(n,l),d=f.S;d!==null&&d(u,c),is(e,t,c)}catch(T){uc(e,t,T)}finally{i!==null&&u.types!==null&&(i.types=u.types),f.T=i}}else try{i=a(n,l),is(e,t,i)}catch(T){uc(e,t,T)}}function is(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){us(e,t,l)},function(l){return uc(e,t,l)}):us(e,t,a)}function us(e,t,a){t.status="fulfilled",t.value=a,cs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ns(e,a)))}function uc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,cs(t),t=t.next;while(t!==l)}e.action=null}function cs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function os(e,t){return t}function rs(e,t){if(Ae){var a=we.formState;if(a!==null){e:{var l=te;if(Ae){if(He){t:{for(var n=He,i=bt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Lt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){He=Lt(n.nextSibling),l=n.data==="F!";break e}}ia(l)}l=!1}l&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},a.queue=l,a=Cs.bind(null,te,l),l.dispatch=a,l=ic(!1),i=dc.bind(null,te,!1,l.queue),l=tt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=uh.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ss(e){var t=_e();return fs(t,Le,e)}function fs(e,t,a){if(t=lc(e,t,os)[0],e=di(xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ln(t)}catch(u){throw u===fl?ai:u}else l=t;t=_e();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,ml(9,{destroy:void 0},ch.bind(null,n,a),null)),[l,i,e]}function ch(e,t){e.action=t}function ds(e){var t=_e(),a=Le;if(a!==null)return fs(t,a,e);_e(),t=t.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=si(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function As(){return _e().memoizedState}function Ai(e,t,a,l){var n=tt();te.flags|=e,n.memoizedState=ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function hi(e,t,a,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;Le!==null&&l!==null&&Wu(l,Le.memoizedState.deps)?n.memoizedState=ml(t,i,a,l):(te.flags|=e,n.memoizedState=ml(1|t,i,a,l))}function hs(e,t){Ai(8390656,8,e,t)}function cc(e,t){hi(2048,8,e,t)}function oh(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=si(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Es(e){var t=_e().memoizedState;return oh({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return hi(4,2,e,t)}function gs(e,t){return hi(4,4,e,t)}function Ts(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ss(e,t,a){a=a!=null?a.concat([e]):null,hi(4,4,Ts.bind(null,t,e),a)}function oc(){}function Rs(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Wu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ys(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Wu(t,l[1]))return l[0];if(l=e(),ka){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l}function rc(e,t,a){return a===void 0||(qt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=pf(),te.lanes|=e,ha|=e,a)}function Os(e,t,a,l){return dt(a,t)?a:Al.current!==null?(e=rc(e,a,l),dt(e,t)||(qe=!0),e):(qt&42)===0||(qt&1073741824)!==0&&(re&261930)===0?(qe=!0,e.memoizedState=a):(e=pf(),te.lanes|=e,ha|=e,t)}function ps(e,t,a,l,n){var i=w.p;w.p=i!==0&&8>i?i:8;var u=f.T,c={};f.T=c,dc(e,!1,t,a);try{var d=n(),T=f.S;if(T!==null&&T(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=lh(d,l);nn(e,t,p,Tt(e))}else nn(e,t,l,Tt(e))}catch(M){nn(e,t,{then:function(){},status:"rejected",reason:M},Tt())}finally{w.p=i,u!==null&&c.types!==null&&(u.types=c.types),f.T=u}}function rh(){}function sc(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=vs(e).queue;ps(e,n,t,H,a===null?rh:function(){return bs(e),a(l)})}function vs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=vs(e);t.next===null&&(t=e.alternate.memoizedState),nn(e,t.next.queue,{},Tt())}function fc(){return We(On)}function Ns(){return _e().memoizedState}function Ls(){return _e().memoizedState}function sh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Tt();e=oa(a);var l=ra(t,e,a);l!==null&&(ot(l,t,a),$l(l,t,a)),t={cache:_u()},e.payload=t;return}t=t.return}}function fh(e,t,a){var l=Tt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)?Ms(t,a):(a=Mu(e,t,a,l),a!==null&&(ot(a,e,l),ws(a,t,l)))}function Cs(e,t,a){var l=Tt();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))Ms(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,dt(c,u))return Zn(e,t,n,0),we===null&&Xn(),!1}catch{}if(a=Mu(e,t,n,l),a!==null)return ot(a,e,l),ws(a,t,l),!0}return!1}function dc(e,t,a,l){if(l={lane:2,revertLane:xc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(s(479))}else t=Mu(e,a,l,2),t!==null&&ot(t,e,2)}function Ei(e){var t=e.alternate;return e===te||t!==null&&t===te}function Ms(e,t){hl=oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ws(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bo(e,a)}}var un={readContext:We,use:fi,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};un.useEffectEvent=Ge;var Us={readContext:We,use:fi,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:hs,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ai(4194308,4,Ts.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){Ai(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var l=e();if(ka){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=tt();if(a!==void 0){var n=a(t);if(ka){ea(!0);try{a(t)}finally{ea(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=fh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=ic(e);var t=e.queue,a=Cs.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:oc,useDeferredValue:function(e,t){var a=tt();return rc(a,e,t)},useTransition:function(){var e=ic(!1);return e=ps.bind(null,te,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=tt();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),we===null)throw Error(s(349));(re&127)!==0||Jr(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,hs(es.bind(null,l,i,e),[e]),l.flags|=2048,ml(9,{destroy:void 0},$r.bind(null,l,i,a,t),null),a},useId:function(){var e=tt(),t=we.identifierPrefix;if(Ae){var a=Ht,l=Dt;a=(l&~(1<<32-ft(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ri++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=nh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fc,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=dc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:ac,useCacheRefresh:function(){return tt().memoizedState=sh.bind(null,te)},useEffectEvent:function(e){var t=tt(),a={impl:e};return t.memoizedState=a,function(){if((Te&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ac={readContext:We,use:fi,useCallback:Rs,useContext:We,useEffect:cc,useImperativeHandle:Ss,useInsertionEffect:ms,useLayoutEffect:gs,useMemo:ys,useReducer:di,useRef:As,useState:function(){return di(xt)},useDebugValue:oc,useDeferredValue:function(e,t){var a=_e();return Os(a,Le.memoizedState,e,t)},useTransition:function(){var e=di(xt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:Wr,useId:Ns,useHostTransitionStatus:fc,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var a=_e();return ls(a,Le,e,t)},useMemoCache:ac,useCacheRefresh:Ls};Ac.useEffectEvent=Es;var Ds={readContext:We,use:fi,useCallback:Rs,useContext:We,useEffect:cc,useImperativeHandle:Ss,useInsertionEffect:ms,useLayoutEffect:gs,useMemo:ys,useReducer:nc,useRef:As,useState:function(){return nc(xt)},useDebugValue:oc,useDeferredValue:function(e,t){var a=_e();return Le===null?rc(a,e,t):Os(a,Le.memoizedState,e,t)},useTransition:function(){var e=nc(xt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:Wr,useId:Ns,useHostTransitionStatus:fc,useFormState:ds,useActionState:ds,useOptimistic:function(e,t){var a=_e();return Le!==null?ls(a,Le,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ac,useCacheRefresh:Ls};Ds.useEffectEvent=Es;function hc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:G({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ec={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Tt(),n=oa(l);n.payload=t,a!=null&&(n.callback=a),t=ra(e,n,l),t!==null&&(ot(t,e,l),$l(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Tt(),n=oa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ra(e,n,l),t!==null&&(ot(t,e,l),$l(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Tt(),l=oa(a);l.tag=2,t!=null&&(l.callback=t),t=ra(e,l,a),t!==null&&(ot(t,e,a),$l(t,e,a))}};function Hs(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(n,i):!0}function Is(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Va(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=G({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Bs(e){Qn(e)}function Gs(e){console.error(e)}function zs(e){Qn(e)}function mi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ys(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mc(e,t,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){mi(e,t)},a}function Ks(e){return e=oa(e),e.tag=3,e}function _s(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Ys(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ys(t,a,l),typeof n!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function dh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&ol(t,a,n,!0),a=ht.current,a!==null){switch(a.tag){case 31:case 13:return Nt===null?Ci():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===li?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),kc(e,l,n)),!1;case 22:return a.flags|=65536,l===li?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),kc(e,l,n)),!1}throw Error(s(435,a.tag))}return kc(e,l,n),Ci(),!1}if(Ae)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Bu&&(e=Error(s(422),{cause:l}),Xl(Ot(e,a)))):(l!==Bu&&(t=Error(s(423),{cause:l}),Xl(Ot(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ot(l,a),n=mc(e.stateNode,l,n),ju(e,n),ze!==4&&(ze=2)),!1;var i=Error(s(520),{cause:l});if(i=Ot(i,a),hn===null?hn=[i]:hn.push(i),ze!==4&&(ze=2),t===null)return!0;l=Ot(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=mc(a.stateNode,l,e),ju(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ea===null||!Ea.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ks(n),_s(n,e,a,l),ju(a,n),!1}a=a.return}while(a!==null);return!1}var gc=Error(s(461)),qe=!1;function Je(e,t,a,l){t.child=e===null?xr(t,null,a,l):_a(t,e.child,a,l)}function ks(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ga(t),l=Ju(e,t,a,u,i,n),c=$u(),e!==null&&!qe?(ec(e,t,n),Pt(e,t,n)):(Ae&&c&&Hu(t),t.flags|=1,Je(e,t,l,n),t.child)}function Vs(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!wu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,qs(e,t,i,l,n)):(e=Wn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!bc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(u,l)&&e.ref===t.ref)return Pt(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function qs(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Pl(i,l)&&e.ref===t.ref)if(qe=!1,t.pendingProps=l=i,bc(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Pt(e,t,n)}return Tc(e,t,a,l,n)}function xs(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Ps(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ti(t,i!==null?i.cachePool:null),i!==null?Qr(t,i):Xu(),Xr(t);else return l=t.lanes=536870912,Ps(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ti(t,i.cachePool),Qr(t,i),fa(),t.memoizedState=null):(e!==null&&ti(t,null),Xu(),fa());return Je(e,t,n,a),t.child}function cn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ps(e,t,a,l,n){var i=Vu();return i=i===null?null:{parent:ke._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ti(t,null),Xu(),Xr(t),e!==null&&ol(e,t,l,!0),t.childLanes=n,null}function gi(e,t){return t=Si({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function js(e,t,a){return _a(t,e.child,null,a),e=gi(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function Ah(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(l.mode==="hidden")return e=gi(t,l),t.lanes=536870912,cn(null,e);if(Fu(t),(e=He)?(e=id(e,bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:Dt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Mr(e),a.return=t,t.child=a,Fe=t,He=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return gi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Fu(t),n)if(t.flags&256)t.flags&=-257,t=js(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(qe||ol(e,t,a,!1),n=(a&e.childLanes)!==0,qe||n){if(l=we,l!==null&&(u=Go(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Da(e,u),ot(l,e,u),gc;Ci(),t=js(e,t,a)}else e=i.treeContext,He=Lt(u.nextSibling),Fe=t,Ae=!0,na=null,bt=!1,e!==null&&Dr(t,e),t=gi(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ti(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Tc(e,t,a,l,n){return Ga(t),a=Ju(e,t,a,l,void 0,n),l=$u(),e!==null&&!qe?(ec(e,t,n),Pt(e,t,n)):(Ae&&l&&Hu(t),t.flags|=1,Je(e,t,a,n),t.child)}function Qs(e,t,a,l,n,i){return Ga(t),t.updateQueue=null,a=Fr(t,l,a,n),Zr(e),l=$u(),e!==null&&!qe?(ec(e,t,i),Pt(e,t,i)):(Ae&&l&&Hu(t),t.flags|=1,Je(e,t,a,i),t.child)}function Xs(e,t,a,l,n){if(Ga(t),t.stateNode===null){var i=nl,u=a.contextType;typeof u=="object"&&u!==null&&(i=We(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ec,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},xu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?We(u):nl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(hc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Ec.enqueueReplaceState(i,i.state,null),tn(t,l,i,n),en(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,d=Va(a,c);i.props=d;var T=i.context,p=a.contextType;u=nl,typeof p=="object"&&p!==null&&(u=We(p));var M=a.getDerivedStateFromProps;p=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||T!==u)&&Is(t,i,l,u),ca=!1;var S=t.memoizedState;i.state=S,tn(t,l,i,n),en(),T=t.memoizedState,c||S!==T||ca?(typeof M=="function"&&(hc(t,a,M,l),T=t.memoizedState),(d=ca||Hs(t,a,d,l,S,T,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=u,l=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Pu(e,t),u=t.memoizedProps,p=Va(a,u),i.props=p,M=t.pendingProps,S=i.context,T=a.contextType,d=nl,typeof T=="object"&&T!==null&&(d=We(T)),c=a.getDerivedStateFromProps,(T=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==M||S!==d)&&Is(t,i,l,d),ca=!1,S=t.memoizedState,i.state=S,tn(t,l,i,n),en();var O=t.memoizedState;u!==M||S!==O||ca||e!==null&&e.dependencies!==null&&$n(e.dependencies)?(typeof c=="function"&&(hc(t,a,c,l),O=t.memoizedState),(p=ca||Hs(t,a,p,l,S,O,d)||e!==null&&e.dependencies!==null&&$n(e.dependencies))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),i.props=l,i.state=O,i.context=d,l=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ti(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=_a(t,e.child,null,n),t.child=_a(t,null,a,n)):Je(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Pt(e,t,n),e}function Zs(e,t,a,l){return Ia(),t.flags|=256,Je(e,t,a,l),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(e){return{baseLanes:e,cachePool:Yr()}}function yc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function Fs(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(n?sa(t):fa(),(e=He)?(e=id(e,bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:Dt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Mr(e),a.return=t,t.child=a,Fe=t,He=null)):e=null,e===null)throw ia(t);return lo(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(fa(),n=t.mode,c=Si({mode:"hidden",children:c},n),l=Ha(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=Rc(a),l.childLanes=yc(e,u,a),t.memoizedState=Sc,cn(null,l)):(sa(t),Oc(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(i)t.flags&256?(sa(t),t.flags&=-257,t=pc(e,t,a)):t.memoizedState!==null?(fa(),t.child=e.child,t.flags|=128,t=null):(fa(),c=l.fallback,n=t.mode,l=Si({mode:"visible",children:l.children},n),c=Ha(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,_a(t,e.child,null,a),l=t.child,l.memoizedState=Rc(a),l.childLanes=yc(e,u,a),t.memoizedState=Sc,t=cn(null,l));else if(sa(t),lo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var T=u.dgst;u=T,l=Error(s(419)),l.stack="",l.digest=u,Xl({value:l,source:null,stack:null}),t=pc(e,t,a)}else if(qe||ol(e,t,a,!1),u=(a&e.childLanes)!==0,qe||u){if(u=we,u!==null&&(l=Go(u,a),l!==0&&l!==d.retryLane))throw d.retryLane=l,Da(e,l),ot(u,e,l),gc;ao(c)||Ci(),t=pc(e,t,a)}else ao(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,He=Lt(c.nextSibling),Fe=t,Ae=!0,na=null,bt=!1,e!==null&&Dr(t,e),t=Oc(t,l.children),t.flags|=4096);return t}return n?(fa(),c=l.fallback,n=t.mode,d=e.child,T=d.sibling,l=Kt(d,{mode:"hidden",children:l.children}),l.subtreeFlags=d.subtreeFlags&65011712,T!==null?c=Kt(T,c):(c=Ha(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,cn(null,l),l=t.child,c=e.child.memoizedState,c===null?c=Rc(a):(n=c.cachePool,n!==null?(d=ke._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=Yr(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=yc(e,u,a),t.memoizedState=Sc,cn(e.child,l)):(sa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Oc(e,t){return t=Si({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Si(e,t){return e=At(22,e,null,t),e.lanes=0,e}function pc(e,t,a){return _a(t,e.child,null,a),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ws(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Yu(e.return,t,a)}function vc(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Js(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Ke.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,Y(Ke,u),Je(e,t,l,a),l=Ae?Ql:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ws(e,a,t);else if(e.tag===19)Ws(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ci(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),vc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ci(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}vc(t,!0,a,null,i,l);break;case"together":vc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ol(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$n(e)))}function hh(e,t,a){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),ua(t,ke,e.memoizedState.cache),Ia();break;case 27:case 5:Dl(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Fu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Fs(e,t,a):(sa(t),e=Pt(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(ol(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Js(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Ke,Ke.current),l)break;return null;case 22:return t.lanes=0,xs(e,t,a,t.pendingProps);case 24:ua(t,ke,e.memoizedState.cache)}return Pt(e,t,a)}function $s(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!bc(e,a)&&(t.flags&128)===0)return qe=!1,hh(e,t,a);qe=(e.flags&131072)!==0}else qe=!1,Ae&&(t.flags&1048576)!==0&&Ur(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e=="function")wu(e)?(l=Va(e,l),t.tag=1,t=Xs(null,t,e,l,a)):(t.tag=0,t=Tc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===he){t.tag=11,t=ks(null,t,e,l,a);break e}else if(n===k){t.tag=14,t=Vs(null,t,e,l,a);break e}}throw t=Ne(e)||e,Error(s(306,t,""))}}return t;case 0:return Tc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Va(l,t.pendingProps),Xs(e,t,l,n,a);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Pu(e,t),tn(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ua(t,ke,l),l!==i.cache&&Ku(t,[ke],a,!0),en(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Zs(e,t,l,a);break e}else if(l!==n){n=Ot(Error(s(424)),t),Xl(n),t=Zs(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=Lt(e.firstChild),Fe=t,Ae=!0,na=null,bt=!0,a=xr(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ia(),l===n){t=Pt(e,t,a);break e}Je(e,t,l,a)}t=t.child}return t;case 26:return Ti(e,t),e===null?(a=fd(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ae||(a=t.type,e=t.pendingProps,l=Bi(X.current).createElement(a),l[Ze]=t,l[at]=e,$e(l,a,e),je(l),t.stateNode=l):t.memoizedState=fd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dl(t),e===null&&Ae&&(l=t.stateNode=od(t.type,t.pendingProps,X.current),Fe=t,bt=!0,n=He,Sa(t.type)?(no=n,He=Lt(l.firstChild)):He=n),Je(e,t,t.pendingProps.children,a),Ti(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((n=l=He)&&(l=xh(l,t.type,t.pendingProps,bt),l!==null?(t.stateNode=l,Fe=t,He=Lt(l.firstChild),bt=!1,n=!0):n=!1),n||ia(t)),Dl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,$c(n,i)?l=null:u!==null&&$c(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Ju(e,t,ih,null,null,a),On._currentValue=n),Ti(e,t),Je(e,t,l,a),t.child;case 6:return e===null&&Ae&&((e=a=He)&&(a=Ph(a,t.pendingProps,bt),a!==null?(t.stateNode=a,Fe=t,He=null,e=!0):e=!1),e||ia(t)),null;case 13:return Fs(e,t,a);case 4:return Xe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=_a(t,null,l,a):Je(e,t,l,a),t.child;case 11:return ks(e,t,t.type,t.pendingProps,a);case 7:return Je(e,t,t.pendingProps,a),t.child;case 8:return Je(e,t,t.pendingProps.children,a),t.child;case 12:return Je(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ua(t,t.type,l.value),Je(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ga(t),n=We(n),l=l(n),t.flags|=1,Je(e,t,l,a),t.child;case 14:return Vs(e,t,t.type,t.pendingProps,a);case 15:return qs(e,t,t.type,t.pendingProps,a);case 19:return Js(e,t,a);case 31:return Ah(e,t,a);case 22:return xs(e,t,a,t.pendingProps);case 24:return Ga(t),l=We(ke),e===null?(n=Vu(),n===null&&(n=we,i=_u(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},xu(t),ua(t,ke,n)):((e.lanes&a)!==0&&(Pu(e,t),tn(t,null,null,a),en()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ua(t,ke,l)):(l=i.cache,ua(t,ke,l),l!==n.cache&&Ku(t,[ke],a,!0))),Je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function jt(e){e.flags|=4}function Nc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Lf())e.flags|=8192;else throw Ka=li,qu}else e.flags&=-16777217}function ef(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!md(t))if(Lf())e.flags|=8192;else throw Ka=li,qu}function Ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ho():536870912,e.lanes|=t,Rl|=t)}function on(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Eh(e,t,a){var l=t.pendingProps;switch(Iu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ie(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Vt(ke),Ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(cl(t)?jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gu())),Ie(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(jt(t),i!==null?(Ie(t),ef(t,i)):(Ie(t),Nc(t,n,null,l,a))):i?i!==e.memoizedState?(jt(t),Ie(t),ef(t,i)):(Ie(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&jt(t),Ie(t),Nc(t,n,e,l,a)),null;case 27:if(Un(t),a=X.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ie(t),null}e=I.current,cl(t)?Hr(t):(e=od(n,l,a),t.stateNode=e,jt(t))}return Ie(t),null;case 5:if(Un(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ie(t),null}if(i=I.current,cl(t))Hr(t);else{var u=Bi(X.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Ze]=t,i[at]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch($e(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&jt(t)}}return Ie(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=X.current,cl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wf(e.nodeValue,a)),e||ia(t,!0)}else e=Bi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return Ie(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=cl(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ze]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),e=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ie(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=cl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Ze]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),n=!1}else n=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ri(t,t.updateQueue),Ie(t),null);case 4:return Ye(),e===null&&Xc(t.stateNode.containerInfo),Ie(t),null;case 10:return Vt(t.type),Ie(t),null;case 19:if(C(Ke),l=t.memoizedState,l===null)return Ie(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)on(l,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ci(e),i!==null){for(t.flags|=128,on(l,!1),e=i.updateQueue,t.updateQueue=e,Ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Cr(a,e),a=a.sibling;return Y(Ke,Ke.current&1|2),Ae&&_t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&rt()>bi&&(t.flags|=128,n=!0,on(l,!1),t.lanes=4194304)}else{if(!n)if(e=ci(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ri(t,e),on(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Ae)return Ie(t),null}else 2*rt()-l.renderingStartTime>bi&&a!==536870912&&(t.flags|=128,n=!0,on(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=rt(),e.sibling=null,a=Ke.current,Y(Ke,n?a&1|2:a&1),Ae&&_t(t,l.treeForkCount),e):(Ie(t),null);case 22:case 23:return Et(t),Zu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),a=t.updateQueue,a!==null&&Ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&C(za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(ke),Ie(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function mh(e,t){switch(Iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(ke),Ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Un(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(s(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Ke),null;case 4:return Ye(),null;case 10:return Vt(t.type),null;case 22:case 23:return Et(t),Zu(),e!==null&&C(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(ke),null;case 25:return null;default:return null}}function tf(e,t){switch(Iu(t),t.tag){case 3:Vt(ke),Ye();break;case 26:case 27:case 5:Un(t);break;case 4:Ye();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:C(Ke);break;case 10:Vt(t.type);break;case 22:case 23:Et(t),Zu(),e!==null&&C(za);break;case 24:Vt(ke)}}function rn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){ve(t,t.return,c)}}function da(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var d=a,T=c;try{T()}catch(p){ve(n,d,p)}}}l=l.next}while(l!==i)}}catch(p){ve(t,t.return,p)}}function af(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{jr(t,a)}catch(l){ve(e,e.return,l)}}}function lf(e,t,a){a.props=Va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ve(e,t,l)}}function sn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ve(e,t,n)}}function It(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ve(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ve(e,t,n)}else a.current=null}function nf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ve(e,e.return,n)}}function Lc(e,t,a){try{var l=e.stateNode;Yh(l,e.type,a,t),l[at]=t}catch(n){ve(e,e.return,n)}}function uf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=zt));else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Mc(e,t,a),e=e.sibling;e!==null;)Mc(e,t,a),e=e.sibling}function yi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(yi(e,t,a),e=e.sibling;e!==null;)yi(e,t,a),e=e.sibling}function cf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$e(t,l,a),t[Ze]=e,t[at]=a}catch(i){ve(e,e.return,i)}}var Qt=!1,xe=!1,wc=!1,of=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function gh(e,t){if(e=e.containerInfo,Wc=Vi,e=Sr(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,c=-1,d=-1,T=0,p=0,M=e,S=null;t:for(;;){for(var O;M!==a||n!==0&&M.nodeType!==3||(c=u+n),M!==i||l!==0&&M.nodeType!==3||(d=u+l),M.nodeType===3&&(u+=M.nodeValue.length),(O=M.firstChild)!==null;)S=M,M=O;for(;;){if(M===e)break t;if(S===a&&++T===n&&(c=u),S===i&&++p===l&&(d=u),(O=M.nextSibling)!==null)break;M=S,S=M.parentNode}M=O}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:e,selectionRange:a},Vi=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var q=Va(a.type,n);e=l.getSnapshotBeforeUpdate(q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){ve(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)to(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":to(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function rf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(e,a),l&4&&rn(5,a);break;case 1:if(Zt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ve(a,a.return,u)}else{var n=Va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ve(a,a.return,u)}}l&64&&af(a),l&512&&sn(a,a.return);break;case 3:if(Zt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{jr(e,t)}catch(u){ve(a,a.return,u)}}break;case 27:t===null&&l&4&&cf(a);case 26:case 5:Zt(e,a),t===null&&l&4&&nf(a),l&512&&sn(a,a.return);break;case 12:Zt(e,a);break;case 31:Zt(e,a),l&4&&df(e,a);break;case 13:Zt(e,a),l&4&&Af(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Nh.bind(null,a),jh(e,a))));break;case 22:if(l=a.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||xe,n=Qt;var i=xe;Qt=l,(xe=t)&&!i?Ft(e,a,(a.subtreeFlags&8772)!==0):Zt(e,a),Qt=n,xe=i}break;case 30:break;default:Zt(e,a)}}function sf(e){var t=e.alternate;t!==null&&(e.alternate=null,sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,nt=!1;function Xt(e,t,a){for(a=a.child;a!==null;)ff(e,t,a),a=a.sibling}function ff(e,t,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Hl,a)}catch{}switch(a.tag){case 26:xe||It(a,t),Xt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xe||It(a,t);var l=Be,n=nt;Sa(a.type)&&(Be=a.stateNode,nt=!1),Xt(e,t,a),Sn(a.stateNode),Be=l,nt=n;break;case 5:xe||It(a,t);case 6:if(l=Be,n=nt,Be=null,Xt(e,t,a),Be=l,nt=n,Be!==null)if(nt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(i){ve(a,t,i)}else try{Be.removeChild(a.stateNode)}catch(i){ve(a,t,i)}break;case 18:Be!==null&&(nt?(e=Be,ld(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cl(e)):ld(Be,a.stateNode));break;case 4:l=Be,n=nt,Be=a.stateNode.containerInfo,nt=!0,Xt(e,t,a),Be=l,nt=n;break;case 0:case 11:case 14:case 15:da(2,a,t),xe||da(4,a,t),Xt(e,t,a);break;case 1:xe||(It(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&lf(a,t,l)),Xt(e,t,a);break;case 21:Xt(e,t,a);break;case 22:xe=(l=xe)||a.memoizedState!==null,Xt(e,t,a),xe=l;break;default:Xt(e,t,a)}}function df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(a){ve(t,t.return,a)}}}function Af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(a){ve(t,t.return,a)}}function Th(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new of),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new of),t;default:throw Error(s(435,e.tag))}}function Oi(e,t){var a=Th(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Lh.bind(null,e,l);l.then(n,n)}})}function it(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(Sa(c.type)){Be=c.stateNode,nt=!1;break e}break;case 5:Be=c.stateNode,nt=!1;break e;case 3:case 4:Be=c.stateNode.containerInfo,nt=!0;break e}c=c.return}if(Be===null)throw Error(s(160));ff(i,u,n),Be=null,nt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hf(t,e),t=t.sibling}var wt=null;function hf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),ut(e),l&4&&(da(3,e,e.return),rn(3,e),da(5,e,e.return));break;case 1:it(t,e),ut(e),l&512&&(xe||a===null||It(a,a.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=wt;if(it(t,e),ut(e),l&512&&(xe||a===null||It(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Gl]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),$e(i,l,a),i[Ze]=e,je(i),l=i;break e;case"link":var u=hd("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;case"meta":if(u=hd("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[Ze]=e,je(i),l=i}e.stateNode=l}else Ed(n,e.type,e.stateNode);else e.stateNode=Ad(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Ed(n,e.type,e.stateNode):Ad(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Lc(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),ut(e),l&512&&(xe||a===null||It(a,a.return)),a!==null&&l&4&&Lc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),ut(e),l&512&&(xe||a===null||It(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(q){ve(e,e.return,q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Lc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(wc=!0);break;case 6:if(it(t,e),ut(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(q){ve(e,e.return,q)}}break;case 3:if(Yi=null,n=wt,wt=Gi(t.containerInfo),it(t,e),wt=n,ut(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(q){ve(e,e.return,q)}wc&&(wc=!1,Ef(e));break;case 4:l=wt,wt=Gi(e.stateNode.containerInfo),it(t,e),ut(e),wt=l;break;case 12:it(t,e),ut(e);break;case 31:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 13:it(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vi=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 22:n=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,T=Qt,p=xe;if(Qt=T||n,xe=p||d,it(t,e),xe=p,Qt=T,ut(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||d||Qt||xe||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(i=d.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=d.stateNode;var M=d.memoizedProps.style,S=M!=null&&M.hasOwnProperty("display")?M.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(q){ve(d,d.return,q)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(q){ve(d,d.return,q)}}}else if(t.tag===18){if(a===null){d=t;try{var O=d.stateNode;n?nd(O,!0):nd(d.stateNode,!1)}catch(q){ve(d,d.return,q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Oi(e,a))));break;case 19:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 30:break;case 21:break;default:it(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(uf(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=Cc(e);yi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Wa(u,""),a.flags&=-33);var c=Cc(e);yi(e,c,u);break;case 3:case 4:var d=a.stateNode.containerInfo,T=Cc(e);Mc(e,T,d);break;default:throw Error(s(161))}}catch(p){ve(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rf(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),qa(t);break;case 1:It(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&lf(t,t.return,a),qa(t);break;case 27:Sn(t.stateNode);case 26:case 5:It(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function Ft(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ft(n,i,a),rn(4,i);break;case 1:if(Ft(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(T){ve(l,l.return,T)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)Pr(d[n],c)}catch(T){ve(l,l.return,T)}}a&&u&64&&af(i),sn(i,i.return);break;case 27:cf(i);case 26:case 5:Ft(n,i,a),a&&l===null&&u&4&&nf(i),sn(i,i.return);break;case 12:Ft(n,i,a);break;case 31:Ft(n,i,a),a&&u&4&&df(n,i);break;case 13:Ft(n,i,a),a&&u&4&&Af(n,i);break;case 22:i.memoizedState===null&&Ft(n,i,a),sn(i,i.return);break;case 30:break;default:Ft(n,i,a)}t=t.sibling}}function Uc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zl(a))}function Dc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e))}function Ut(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mf(e,t,a,l),t=t.sibling}function mf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,a,l),n&2048&&rn(9,t);break;case 1:Ut(e,t,a,l);break;case 3:Ut(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e)));break;case 12:if(n&2048){Ut(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){ve(t,t.return,d)}}else Ut(e,t,a,l);break;case 31:Ut(e,t,a,l);break;case 13:Ut(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Ut(e,t,a,l):fn(e,t):i._visibility&2?Ut(e,t,a,l):(i._visibility|=2,gl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Uc(u,t);break;case 24:Ut(e,t,a,l),n&2048&&Dc(t.alternate,t);break;default:Ut(e,t,a,l)}}function gl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=a,d=l,T=u.flags;switch(u.tag){case 0:case 11:case 15:gl(i,u,c,d,n),rn(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?gl(i,u,c,d,n):fn(i,u):(p._visibility|=2,gl(i,u,c,d,n)),n&&T&2048&&Uc(u.alternate,u);break;case 24:gl(i,u,c,d,n),n&&T&2048&&Dc(u.alternate,u);break;default:gl(i,u,c,d,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Uc(l.alternate,l);break;case 24:fn(a,l),n&2048&&Dc(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var dn=8192;function Tl(e,t,a){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)gf(e,t,a),e=e.sibling}function gf(e,t,a){switch(e.tag){case 26:Tl(e,t,a),e.flags&dn&&e.memoizedState!==null&&nE(a,wt,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,a);break;case 3:case 4:var l=wt;wt=Gi(e.stateNode.containerInfo),Tl(e,t,a),wt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=dn,dn=16777216,Tl(e,t,a),dn=l):Tl(e,t,a));break;default:Tl(e,t,a)}}function Tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function An(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Rf(l,e)}Tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 0:case 11:case 15:An(e),e.flags&2048&&da(9,e,e.return);break;case 3:An(e);break;case 12:An(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pi(e)):An(e);break;default:An(e)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Rf(l,e)}Tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),pi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,pi(t));break;default:pi(t)}e=e.sibling}}function Rf(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var n=l.sibling,i=l.return;if(sf(l),l===a){Qe=null;break e}if(n!==null){n.return=i,Qe=n;break e}Qe=i}}}var Sh={getCacheForType:function(e){var t=We(ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return We(ke).controller.signal}},Rh=typeof WeakMap=="function"?WeakMap:Map,Te=0,we=null,ce=null,re=0,pe=0,mt=null,Aa=!1,Sl=!1,Hc=!1,Wt=0,ze=0,ha=0,xa=0,Ic=0,gt=0,Rl=0,hn=null,ct=null,Bc=!1,vi=0,yf=0,bi=1/0,Ni=null,Ea=null,Pe=0,ma=null,yl=null,Jt=0,Gc=0,zc=null,Of=null,En=0,Yc=null;function Tt(){return(Te&2)!==0&&re!==0?re&-re:f.T!==null?xc():zo()}function pf(){if(gt===0)if((re&536870912)===0||Ae){var e=In;In<<=1,(In&3932160)===0&&(In=262144),gt=e}else gt=536870912;return e=ht.current,e!==null&&(e.flags|=32),gt}function ot(e,t,a){(e===we&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ol(e,0),ga(e,re,gt,!1)),Bl(e,a),((Te&2)===0||e!==we)&&(e===we&&((Te&2)===0&&(xa|=a),ze===4&&ga(e,re,gt,!1)),Bt(e))}function vf(e,t,a){if((Te&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Il(e,t),n=l?ph(e,t):_c(e,t,!0),i=l;do{if(n===0){Sl&&!l&&ga(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!yh(a)){n=_c(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=hn;var d=c.current.memoizedState.isDehydrated;if(d&&(Ol(c,u).flags|=256),u=_c(c,u,!1),u!==2){if(Hc&&!d){c.errorRecoveryDisabledLanes|=i,xa|=i,n=4;break e}i=ct,ct=n,i!==null&&(ct===null?ct=i:ct.push.apply(ct,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ol(e,0),ga(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ga(l,t,gt,!Aa);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=vi+300-rt(),10<n)){if(ga(l,t,gt,!Aa),Gn(l,0,!0)!==0)break e;Jt=t,l.timeoutHandle=td(bf.bind(null,l,a,ct,Ni,Bc,t,gt,xa,Rl,Aa,i,"Throttled",-0,0),n);break e}bf(l,a,ct,Ni,Bc,t,gt,xa,Rl,Aa,i,null,-0,0)}}break}while(!0);Bt(e)}function bf(e,t,a,l,n,i,u,c,d,T,p,M,S,O){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zt},gf(t,i,M);var q=(i&62914560)===i?vi-rt():(i&4194048)===i?yf-rt():0;if(q=iE(M,q),q!==null){Jt=i,e.cancelPendingCommit=q(Hf.bind(null,e,t,i,a,l,n,u,c,d,p,M,null,S,O)),ga(e,i,u,!T);return}}Hf(e,t,i,a,l,n,u,c,d)}function yh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!dt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,a,l){t&=~Ic,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ft(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Io(e,a,t)}function Li(){return(Te&6)===0?(mn(0),!1):!0}function Kc(){if(ce!==null){if(pe===0)var e=ce.return;else e=ce,kt=Ba=null,tc(e),dl=null,Wl=0,e=ce;for(;e!==null;)tf(e.alternate,e),e=e.return;ce=null}}function Ol(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Jt=0,Kc(),we=e,ce=a=Kt(e.current,null),re=t,pe=0,mt=null,Aa=!1,Sl=Il(e,t),Hc=!1,Rl=gt=Ic=xa=ha=ze=0,ct=hn=null,Bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ft(l),i=1<<n;t|=e[n],l&=~i}return Wt=t,Xn(),a}function Nf(e,t){te=null,f.H=un,t===fl||t===ai?(t=kr(),pe=3):t===qu?(t=kr(),pe=4):pe=t===gc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,ce===null&&(ze=1,mi(e,Ot(t,e.current)))}function Lf(){var e=ht.current;return e===null?!0:(re&4194048)===re?Nt===null:(re&62914560)===re||(re&536870912)!==0?e===Nt:!1}function Cf(){var e=f.H;return f.H=un,e===null?un:e}function Mf(){var e=f.A;return f.A=Sh,e}function Ci(){ze=4,Aa||(re&4194048)!==re&&ht.current!==null||(Sl=!0),(ha&134217727)===0&&(xa&134217727)===0||we===null||ga(we,re,gt,!1)}function _c(e,t,a){var l=Te;Te|=2;var n=Cf(),i=Mf();(we!==e||re!==t)&&(Ni=null,Ol(e,t)),t=!1;var u=ze;e:do try{if(pe!==0&&ce!==null){var c=ce,d=mt;switch(pe){case 8:Kc(),u=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var T=pe;if(pe=0,mt=null,pl(e,c,d,T),a&&Sl){u=0;break e}break;default:T=pe,pe=0,mt=null,pl(e,c,d,T)}}Oh(),u=ze;break}catch(p){Nf(e,p)}while(!0);return t&&e.shellSuspendCounter++,kt=Ba=null,Te=l,f.H=n,f.A=i,ce===null&&(we=null,re=0,Xn()),u}function Oh(){for(;ce!==null;)wf(ce)}function ph(e,t){var a=Te;Te|=2;var l=Cf(),n=Mf();we!==e||re!==t?(Ni=null,bi=rt()+500,Ol(e,t)):Sl=Il(e,t);e:do try{if(pe!==0&&ce!==null){t=ce;var i=mt;t:switch(pe){case 1:pe=0,mt=null,pl(e,t,i,1);break;case 2:case 9:if(Kr(i)){pe=0,mt=null,Uf(t);break}t=function(){pe!==2&&pe!==9||we!==e||(pe=7),Bt(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:Kr(i)?(pe=0,mt=null,Uf(t)):(pe=0,mt=null,pl(e,t,i,7));break;case 5:var u=null;switch(ce.tag){case 26:u=ce.memoizedState;case 5:case 27:var c=ce;if(u?md(u):c.stateNode.complete){pe=0,mt=null;var d=c.sibling;if(d!==null)ce=d;else{var T=c.return;T!==null?(ce=T,Mi(T)):ce=null}break t}}pe=0,mt=null,pl(e,t,i,5);break;case 6:pe=0,mt=null,pl(e,t,i,6);break;case 8:Kc(),ze=6;break e;default:throw Error(s(462))}}vh();break}catch(p){Nf(e,p)}while(!0);return kt=Ba=null,f.H=l,f.A=n,Te=a,ce!==null?0:(we=null,re=0,Xn(),ze)}function vh(){for(;ce!==null&&!Qd();)wf(ce)}function wf(e){var t=$s(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Mi(e):ce=t}function Uf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Qs(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=Qs(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:tc(t);default:tf(a,t),t=ce=Cr(t,Wt),t=$s(a,t,Wt)}e.memoizedProps=e.pendingProps,t===null?Mi(e):ce=t}function pl(e,t,a,l){kt=Ba=null,tc(t),dl=null,Wl=0;var n=t.return;try{if(dh(e,n,t,a,re)){ze=1,mi(e,Ot(a,e.current)),ce=null;return}}catch(i){if(n!==null)throw ce=n,i;ze=1,mi(e,Ot(a,e.current)),ce=null;return}t.flags&32768?(Ae||l===1?e=!0:Sl||(re&536870912)!==0?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),Df(t,e)):Mi(t)}function Mi(e){var t=e;do{if((t.flags&32768)!==0){Df(t,Aa);return}e=t.return;var a=Eh(t.alternate,t,Wt);if(a!==null){ce=a;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);ze===0&&(ze=5)}function Df(e,t){do{var a=mh(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);ze=6,ce=null}function Hf(e,t,a,l,n,i,u,c,d){e.cancelPendingCommit=null;do wi();while(Pe!==0);if((Te&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Cu,lA(e,a,i,u,c,d),e===we&&(ce=we=null,re=0),yl=t,ma=e,Jt=a,Gc=i,zc=n,Of=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ch(Dn,function(){return Yf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=f.T,f.T=null,n=w.p,w.p=2,u=Te,Te|=4;try{gh(e,t,a)}finally{Te=u,w.p=n,f.T=l}}Pe=1,If(),Bf(),Gf()}}function If(){if(Pe===1){Pe=0;var e=ma,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=f.T,f.T=null;var l=w.p;w.p=2;var n=Te;Te|=4;try{hf(t,e);var i=Jc,u=Sr(e.containerInfo),c=i.focusedElem,d=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Tr(c.ownerDocument.documentElement,c)){if(d!==null&&pu(c)){var T=d.start,p=d.end;if(p===void 0&&(p=T),"selectionStart"in c)c.selectionStart=T,c.selectionEnd=Math.min(p,c.value.length);else{var M=c.ownerDocument||document,S=M&&M.defaultView||window;if(S.getSelection){var O=S.getSelection(),q=c.textContent.length,F=Math.min(d.start,q),Me=d.end===void 0?F:Math.min(d.end,q);!O.extend&&F>Me&&(u=Me,Me=F,F=u);var m=gr(c,F),h=gr(c,Me);if(m&&h&&(O.rangeCount!==1||O.anchorNode!==m.node||O.anchorOffset!==m.offset||O.focusNode!==h.node||O.focusOffset!==h.offset)){var g=M.createRange();g.setStart(m.node,m.offset),O.removeAllRanges(),F>Me?(O.addRange(g),O.extend(h.node,h.offset)):(g.setEnd(h.node,h.offset),O.addRange(g))}}}}for(M=[],O=c;O=O.parentNode;)O.nodeType===1&&M.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var N=M[c];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Vi=!!Wc,Jc=Wc=null}finally{Te=n,w.p=l,f.T=a}}e.current=t,Pe=2}}function Bf(){if(Pe===2){Pe=0;var e=ma,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=f.T,f.T=null;var l=w.p;w.p=2;var n=Te;Te|=4;try{rf(e,t.alternate,t)}finally{Te=n,w.p=l,f.T=a}}Pe=3}}function Gf(){if(Pe===4||Pe===3){Pe=0,Xd();var e=ma,t=yl,a=Jt,l=Of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,yl=ma=null,zf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ea=null),nu(a),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=f.T,n=w.p,w.p=2,f.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{f.T=t,w.p=n}}(Jt&3)!==0&&wi(),Bt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Yc?En++:(En=0,Yc=e):En=0,mn(0)}}function zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zl(t)))}function wi(){return If(),Bf(),Gf(),Yf()}function Yf(){if(Pe!==5)return!1;var e=ma,t=Gc;Gc=0;var a=nu(Jt),l=f.T,n=w.p;try{w.p=32>a?32:a,f.T=null,a=zc,zc=null;var i=ma,u=Jt;if(Pe=0,yl=ma=null,Jt=0,(Te&6)!==0)throw Error(s(331));var c=Te;if(Te|=4,Sf(i.current),mf(i,i.current,u,a),Te=c,mn(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Hl,i)}catch{}return!0}finally{w.p=n,f.T=l,zf(e,t)}}function Kf(e,t,a){t=Ot(a,t),t=mc(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Bl(e,2),Bt(e))}function ve(e,t,a){if(e.tag===3)Kf(e,e,a);else for(;t!==null;){if(t.tag===3){Kf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ea===null||!Ea.has(l))){e=Ot(a,e),a=Ks(2),l=ra(t,a,2),l!==null&&(_s(a,l,t,e),Bl(l,2),Bt(l));break}}t=t.return}}function kc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Rh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Hc=!0,n.add(a),e=bh.bind(null,e,t,a),t.then(e,e))}function bh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(re&a)===a&&(ze===4||ze===3&&(re&62914560)===re&&300>rt()-vi?(Te&2)===0&&Ol(e,0):Ic|=a,Rl===re&&(Rl=0)),Bt(e)}function _f(e,t){t===0&&(t=Ho()),e=Da(e,t),e!==null&&(Bl(e,t),Bt(e))}function Nh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),_f(e,a)}function Lh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),_f(e,a)}function Ch(e,t){return eu(e,t)}var Ui=null,vl=null,Vc=!1,Di=!1,qc=!1,Ta=0;function Bt(e){e!==vl&&e.next===null&&(vl===null?Ui=vl=e:vl=vl.next=e),Di=!0,Vc||(Vc=!0,wh())}function mn(e,t){if(!qc&&Di){qc=!0;do for(var a=!1,l=Ui;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-ft(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,xf(l,i))}else i=re,i=Gn(l,l===we?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Il(l,i)||(a=!0,xf(l,i));l=l.next}while(a);qc=!1}}function Mh(){kf()}function kf(){Di=Vc=!1;var e=0;Ta!==0&&_h()&&(e=Ta);for(var t=rt(),a=null,l=Ui;l!==null;){var n=l.next,i=Vf(l,t);i===0?(l.next=null,a===null?Ui=n:a.next=n,n===null&&(vl=a)):(a=l,(e!==0||(i&3)!==0)&&(Di=!0)),l=n}Pe!==0&&Pe!==5||mn(e),Ta!==0&&(Ta=0)}function Vf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ft(i),c=1<<u,d=n[u];d===-1?((c&a)===0||(c&l)!==0)&&(n[u]=aA(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}if(t=we,a=re,a=Gn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&tu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Il(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&tu(l),nu(a)){case 2:case 8:a=Uo;break;case 32:a=Dn;break;case 268435456:a=Do;break;default:a=Dn}return l=qf.bind(null,e),a=eu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&tu(l),e.callbackPriority=2,e.callbackNode=null,2}function qf(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(wi()&&e.callbackNode!==a)return null;var l=re;return l=Gn(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(vf(e,l,t),Vf(e,rt()),e.callbackNode!=null&&e.callbackNode===a?qf.bind(null,e):null)}function xf(e,t){if(wi())return null;vf(e,t,!0)}function wh(){Vh(function(){(Te&6)!==0?eu(wo,Mh):kf()})}function xc(){if(Ta===0){var e=rl;e===0&&(e=Hn,Hn<<=1,(Hn&261888)===0&&(Hn=256)),Ta=e}return Ta}function Pf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_n(""+e)}function jf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Uh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Pf((n[at]||null).action),u=l.submitter;u&&(t=(t=u[at]||null)?Pf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new xn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ta!==0){var d=u?jf(n,u):new FormData(n);sc(a,{pending:!0,data:d,method:n.method,action:i},null,d)}}else typeof i=="function"&&(c.preventDefault(),d=u?jf(n,u):new FormData(n),sc(a,{pending:!0,data:d,method:n.method,action:i},i,d))},currentTarget:n}]})}}for(var Pc=0;Pc<Lu.length;Pc++){var jc=Lu[Pc],Dh=jc.toLowerCase(),Hh=jc[0].toUpperCase()+jc.slice(1);Mt(Dh,"on"+Hh)}Mt(Or,"onAnimationEnd"),Mt(pr,"onAnimationIteration"),Mt(vr,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(ZA,"onTransitionRun"),Mt(FA,"onTransitionStart"),Mt(WA,"onTransitionCancel"),Mt(br,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function Qf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],d=c.instance,T=c.currentTarget;if(c=c.listener,d!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=T;try{i(n)}catch(p){Qn(p)}n.currentTarget=null,i=d}else for(u=0;u<l.length;u++){if(c=l[u],d=c.instance,T=c.currentTarget,c=c.listener,d!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=T;try{i(n)}catch(p){Qn(p)}n.currentTarget=null,i=d}}}}function oe(e,t){var a=t[iu];a===void 0&&(a=t[iu]=new Set);var l=e+"__bubble";a.has(l)||(Xf(t,e,2,!1),a.add(l))}function Qc(e,t,a){var l=0;t&&(l|=4),Xf(a,e,l,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function Xc(e){if(!e[Hi]){e[Hi]=!0,_o.forEach(function(a){a!=="selectionchange"&&(Ih.has(a)||Qc(a,!1,e),Qc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Qc("selectionchange",!1,t))}}function Xf(e,t,a,l){switch(pd(t)){case 2:var n=oE;break;case 8:n=rE;break;default:n=ro}a=n.bind(null,t,a,e),n=void 0,!hu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Zc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=ja(c),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){l=i=u;continue e}c=c.parentNode}}l=l.return}Jo(function(){var T=i,p=du(a),M=[];e:{var S=Nr.get(e);if(S!==void 0){var O=xn,q=e;switch(e){case"keypress":if(Vn(a)===0)break e;case"keydown":case"keyup":O=LA;break;case"focusin":q="focus",O=Tu;break;case"focusout":q="blur",O=Tu;break;case"beforeblur":case"afterblur":O=Tu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=tr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=EA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=wA;break;case Or:case pr:case vr:O=TA;break;case br:O=DA;break;case"scroll":case"scrollend":O=AA;break;case"wheel":O=IA;break;case"copy":case"cut":case"paste":O=RA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=lr;break;case"toggle":case"beforetoggle":O=GA}var F=(t&4)!==0,Me=!F&&(e==="scroll"||e==="scrollend"),m=F?S!==null?S+"Capture":null:S;F=[];for(var h=T,g;h!==null;){var N=h;if(g=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||g===null||m===null||(N=Yl(h,m),N!=null&&F.push(Tn(h,N,g))),Me)break;h=h.return}0<F.length&&(S=new O(S,q,null,a,p),M.push({event:S,listeners:F}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",S&&a!==fu&&(q=a.relatedTarget||a.fromElement)&&(ja(q)||q[Pa]))break e;if((O||S)&&(S=p.window===p?p:(S=p.ownerDocument)?S.defaultView||S.parentWindow:window,O?(q=a.relatedTarget||a.toElement,O=T,q=q?ja(q):null,q!==null&&(Me=v(q),F=q.tag,q!==Me||F!==5&&F!==27&&F!==6)&&(q=null)):(O=null,q=T),O!==q)){if(F=tr,N="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(F=lr,N="onPointerLeave",m="onPointerEnter",h="pointer"),Me=O==null?S:zl(O),g=q==null?S:zl(q),S=new F(N,h+"leave",O,a,p),S.target=Me,S.relatedTarget=g,N=null,ja(p)===T&&(F=new F(m,h+"enter",q,a,p),F.target=g,F.relatedTarget=Me,N=F),Me=N,O&&q)t:{for(F=Bh,m=O,h=q,g=0,N=m;N;N=F(N))g++;N=0;for(var Q=h;Q;Q=F(Q))N++;for(;0<g-N;)m=F(m),g--;for(;0<N-g;)h=F(h),N--;for(;g--;){if(m===h||h!==null&&m===h.alternate){F=m;break t}m=F(m),h=F(h)}F=null}else F=null;O!==null&&Zf(M,S,O,F,!1),q!==null&&Me!==null&&Zf(M,Me,q,F,!0)}}e:{if(S=T?zl(T):window,O=S.nodeName&&S.nodeName.toLowerCase(),O==="select"||O==="input"&&S.type==="file")var Ee=fr;else if(rr(S))if(dr)Ee=jA;else{Ee=xA;var P=qA}else O=S.nodeName,!O||O.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?T&&su(T.elementType)&&(Ee=fr):Ee=PA;if(Ee&&(Ee=Ee(e,T))){sr(M,Ee,a,p);break e}P&&P(e,S,T),e==="focusout"&&T&&S.type==="number"&&T.memoizedProps.value!=null&&ru(S,"number",S.value)}switch(P=T?zl(T):window,e){case"focusin":(rr(P)||P.contentEditable==="true")&&(tl=P,vu=T,jl=null);break;case"focusout":jl=vu=tl=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Rr(M,a,p);break;case"selectionchange":if(XA)break;case"keydown":case"keyup":Rr(M,a,p)}var ae;if(Ru)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else el?cr(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(nr&&a.locale!=="ko"&&(el||se!=="onCompositionStart"?se==="onCompositionEnd"&&el&&(ae=$o()):(aa=p,Eu="value"in aa?aa.value:aa.textContent,el=!0)),P=Ii(T,se),0<P.length&&(se=new ar(se,e,null,a,p),M.push({event:se,listeners:P}),ae?se.data=ae:(ae=or(a),ae!==null&&(se.data=ae)))),(ae=YA?KA(e,a):_A(e,a))&&(se=Ii(T,"onBeforeInput"),0<se.length&&(P=new ar("onBeforeInput","beforeinput",null,a,p),M.push({event:P,listeners:se}),P.data=ae)),Uh(M,e,T,a,p)}Qf(M,t)})}function Tn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ii(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Yl(e,a),n!=null&&l.unshift(Tn(e,n,i)),n=Yl(e,t),n!=null&&l.push(Tn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Bh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var c=a,d=c.alternate,T=c.stateNode;if(c=c.tag,d!==null&&d===l)break;c!==5&&c!==26&&c!==27||T===null||(d=T,n?(T=Yl(a,i),T!=null&&u.unshift(Tn(a,T,d))):n||(T=Yl(a,i),T!=null&&u.push(Tn(a,T,d)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Gh=/\r\n?/g,zh=/\u0000|\uFFFD/g;function Ff(e){return(typeof e=="string"?e:""+e).replace(Gh,`
`).replace(zh,"")}function Wf(e,t){return t=Ff(t),Ff(e)===t}function Ce(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":Yn(e,"class",l);break;case"tabIndex":Yn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(e,a,l);break;case"style":Fo(e,l,i);break;case"data":if(t!=="object"){Yn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_n(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ce(e,t,"name",n.name,n,null),Ce(e,t,"formEncType",n.formEncType,n,null),Ce(e,t,"formMethod",n.formMethod,n,null),Ce(e,t,"formTarget",n.formTarget,n,null)):(Ce(e,t,"encType",n.encType,n,null),Ce(e,t,"method",n.method,n,null),Ce(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_n(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=zt);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=_n(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":oe("beforetoggle",e),oe("toggle",e),zn(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fA.get(a)||a,zn(e,a,l))}}function Fc(e,t,a,l,n,i){switch(a){case"style":Fo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[at]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):zn(e,a,l)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ce(e,t,i,u,a,null)}}n&&Ce(e,t,"srcSet",a.srcSet,a,null),l&&Ce(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var c=i=u=n=null,d=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var p=a[l];if(p!=null)switch(l){case"name":n=p;break;case"type":u=p;break;case"checked":d=p;break;case"defaultChecked":T=p;break;case"value":i=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(137,t));break;default:Ce(e,t,l,p,a,null)}}jo(e,i,c,d,T,u,n,!1);return;case"select":oe("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:Ce(e,t,n,c,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Fa(e,!!l,t,!1):a!=null&&Fa(e,!!l,a,!0);return;case"textarea":oe("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:Ce(e,t,u,c,a,null)}Xo(e,l,n,i);return;case"option":for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null)&&(d==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ce(e,t,d,l,a,null));return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)oe(gn[l],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ce(e,t,T,l,a,null)}return;default:if(su(t)){for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!==void 0&&Fc(e,t,p,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&Ce(e,t,c,l,a,null))}function Yh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,d=null,T=null,p=null;for(O in a){var M=a[O];if(a.hasOwnProperty(O)&&M!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":d=M;default:l.hasOwnProperty(O)||Ce(e,t,O,null,l,M)}}for(var S in l){var O=l[S];if(M=a[S],l.hasOwnProperty(S)&&(O!=null||M!=null))switch(S){case"type":i=O;break;case"name":n=O;break;case"checked":T=O;break;case"defaultChecked":p=O;break;case"value":u=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:O!==M&&Ce(e,t,S,O,l,M)}}ou(e,u,c,d,T,p,i,n);return;case"select":O=u=c=S=null;for(i in a)if(d=a[i],a.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":O=d;default:l.hasOwnProperty(i)||Ce(e,t,i,null,l,d)}for(n in l)if(i=l[n],d=a[n],l.hasOwnProperty(n)&&(i!=null||d!=null))switch(n){case"value":S=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==d&&Ce(e,t,n,i,l,d)}t=c,a=u,l=O,S!=null?Fa(e,!!a,S,!1):!!l!=!!a&&(t!=null?Fa(e,!!a,t,!0):Fa(e,!!a,a?[]:"",!1));return;case"textarea":O=S=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ce(e,t,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":S=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&Ce(e,t,u,n,l,i)}Qo(e,S,O);return;case"option":for(var q in a)S=a[q],a.hasOwnProperty(q)&&S!=null&&!l.hasOwnProperty(q)&&(q==="selected"?e.selected=!1:Ce(e,t,q,null,l,S));for(d in l)S=l[d],O=a[d],l.hasOwnProperty(d)&&S!==O&&(S!=null||O!=null)&&(d==="selected"?e.selected=S&&typeof S!="function"&&typeof S!="symbol":Ce(e,t,d,S,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)S=a[F],a.hasOwnProperty(F)&&S!=null&&!l.hasOwnProperty(F)&&Ce(e,t,F,null,l,S);for(T in l)if(S=l[T],O=a[T],l.hasOwnProperty(T)&&S!==O&&(S!=null||O!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(137,t));break;default:Ce(e,t,T,S,l,O)}return;default:if(su(t)){for(var Me in a)S=a[Me],a.hasOwnProperty(Me)&&S!==void 0&&!l.hasOwnProperty(Me)&&Fc(e,t,Me,void 0,l,S);for(p in l)S=l[p],O=a[p],!l.hasOwnProperty(p)||S===O||S===void 0&&O===void 0||Fc(e,t,p,S,l,O);return}}for(var m in a)S=a[m],a.hasOwnProperty(m)&&S!=null&&!l.hasOwnProperty(m)&&Ce(e,t,m,null,l,S);for(M in l)S=l[M],O=a[M],!l.hasOwnProperty(M)||S===O||S==null&&O==null||Ce(e,t,M,S,l,O)}function Jf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Jf(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var d=a[l],T=d.startTime;if(T>c)break;var p=d.transferSize,M=d.initiatorType;p&&Jf(M)&&(d=d.responseEnd,u+=p*(d<c?1:(c-T)/(d-T)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wc=null,Jc=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function $f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ed(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eo=null;function _h(){var e=window.event;return e&&e.type==="popstate"?e===eo?!1:(eo=e,!0):(eo=null,!1)}var td=typeof setTimeout=="function"?setTimeout:void 0,kh=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Vh=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(qh)}:td;function qh(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function ld(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Cl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Sn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Gl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Sn(e.ownerDocument.body);a=n}while(a);Cl(t)}function nd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function to(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":to(a),uu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function Ph(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Lt(e.nextSibling),e===null))return null;return e}function id(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function ao(e){return e.data==="$?"||e.data==="$~"}function lo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var no=null;function ud(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Lt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function od(e,t,a){switch(t=Bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Sn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uu(e)}var Ct=new Map,rd=new Set;function Gi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $t=w.d;w.d={f:Qh,r:Xh,D:Zh,C:Fh,L:Wh,m:Jh,X:eE,S:$h,M:tE};function Qh(){var e=$t.f(),t=Li();return e||t}function Xh(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?bs(t):$t.r(e)}var bl=typeof document>"u"?null:document;function sd(e,t,a){var l=bl;if(l&&typeof t=="string"&&t){var n=Rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),rd.has(n)||(rd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),$e(t,"link",e),je(t),l.head.appendChild(t)))}}function Zh(e){$t.D(e),sd("dns-prefetch",e,null)}function Fh(e,t){$t.C(e,t),sd("preconnect",e,t)}function Wh(e,t,a){$t.L(e,t,a);var l=bl;if(l&&e&&t){var n='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Rt(a.imageSizes)+'"]')):n+='[href="'+Rt(e)+'"]';var i=n;switch(t){case"style":i=Nl(e);break;case"script":i=Ll(e)}Ct.has(i)||(e=G({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Rn(i))||t==="script"&&l.querySelector(yn(i))||(t=l.createElement("link"),$e(t,"link",e),je(t),l.head.appendChild(t)))}}function Jh(e,t){$t.m(e,t);var a=bl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Rt(l)+'"][href="'+Rt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ll(e)}if(!Ct.has(i)&&(e=G({rel:"modulepreload",href:e},t),Ct.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yn(i)))return}l=a.createElement("link"),$e(l,"link",e),je(l),a.head.appendChild(l)}}}function $h(e,t,a){$t.S(e,t,a);var l=bl;if(l&&e){var n=Xa(l).hoistableStyles,i=Nl(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(Rn(i)))c.loading=5;else{e=G({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(i))&&io(e,a);var d=u=l.createElement("link");je(d),$e(d,"link",e),d._p=new Promise(function(T,p){d.onload=T,d.onerror=p}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,zi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function eE(e,t){$t.X(e,t);var a=bl;if(a&&e){var l=Xa(a).hoistableScripts,n=Ll(e),i=l.get(n);i||(i=a.querySelector(yn(n)),i||(e=G({src:e,async:!0},t),(t=Ct.get(n))&&uo(e,t),i=a.createElement("script"),je(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function tE(e,t){$t.M(e,t);var a=bl;if(a&&e){var l=Xa(a).hoistableScripts,n=Ll(e),i=l.get(n);i||(i=a.querySelector(yn(n)),i||(e=G({src:e,async:!0,type:"module"},t),(t=Ct.get(n))&&uo(e,t),i=a.createElement("script"),je(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function fd(e,t,a,l){var n=(n=X.current)?Gi(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Nl(a.href),a=Xa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Nl(a.href);var i=Xa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Rn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),i||aE(n,e,a,u.state))),t&&l===null)throw Error(s(528,""));return u}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ll(a),a=Xa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Nl(e){return'href="'+Rt(e)+'"'}function Rn(e){return'link[rel="stylesheet"]['+e+"]"}function dd(e){return G({},e,{"data-precedence":e.precedence,precedence:null})}function aE(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",a),je(t),e.head.appendChild(t))}function Ll(e){return'[src="'+Rt(e)+'"]'}function yn(e){return"script[async]"+e}function Ad(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(l)return t.instance=l,je(l),l;var n=G({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),je(l),$e(l,"style",n),zi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Nl(a.href);var i=e.querySelector(Rn(n));if(i)return t.state.loading|=4,t.instance=i,je(i),i;l=dd(a),(n=Ct.get(n))&&io(l,n),i=(e.ownerDocument||e).createElement("link"),je(i);var u=i;return u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),$e(i,"link",l),t.state.loading|=4,zi(i,a.precedence,e),t.instance=i;case"script":return i=Ll(a.src),(n=e.querySelector(yn(i)))?(t.instance=n,je(n),n):(l=a,(n=Ct.get(i))&&(l=G({},a),uo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),je(n),$e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,zi(l,a.precedence,e));return t.instance}function zi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yi=null;function hd(e,t,a){if(Yi===null){var l=new Map,n=Yi=new Map;n.set(a,l)}else n=Yi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Gl]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function Ed(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function lE(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function md(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nE(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Nl(l.href),i=t.querySelector(Rn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ki.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,je(i);return}i=t.ownerDocument||t,l=dd(l),(n=Ct.get(n))&&io(l,n),i=i.createElement("link"),je(i);var u=i;u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),$e(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ki.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var co=0;function iE(e,t){return e.stylesheets&&e.count===0&&ki(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&co===0&&(co=62500*Kh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>co?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ki(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _i=null;function ki(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_i=new Map,t.forEach(uE,e),_i=null,Ki.call(e))}function uE(e,t){if(!(t.state.loading&4)){var a=_i.get(e);if(a)var l=a.get(null);else{a=new Map,_i.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ki.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var On={$$typeof:_,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function cE(e,t,a,l,n,i,u,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function gd(e,t,a,l,n,i,u,c,d,T,p,M){return e=new cE(e,t,a,u,d,T,p,M,c),t=1,i===!0&&(t|=24),i=At(3,null,null,t),e.current=i,i.stateNode=e,t=_u(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},xu(i),e}function Td(e){return e?(e=nl,e):nl}function Sd(e,t,a,l,n,i){n=Td(n),l.context===null?l.context=n:l.pendingContext=n,l=oa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ra(e,l,t),a!==null&&(ot(a,e,t),$l(a,e,t))}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function oo(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function yd(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&ot(t,e,67108864),oo(e,67108864)}}function Od(e){if(e.tag===13||e.tag===31){var t=Tt();t=lu(t);var a=Da(e,t);a!==null&&ot(a,e,t),oo(e,t)}}var Vi=!0;function oE(e,t,a,l){var n=f.T;f.T=null;var i=w.p;try{w.p=2,ro(e,t,a,l)}finally{w.p=i,f.T=n}}function rE(e,t,a,l){var n=f.T;f.T=null;var i=w.p;try{w.p=8,ro(e,t,a,l)}finally{w.p=i,f.T=n}}function ro(e,t,a,l){if(Vi){var n=so(l);if(n===null)Zc(e,t,l,qi,a),vd(e,l);else if(fE(n,e,t,a,l))l.stopPropagation();else if(vd(e,l),t&4&&-1<sE.indexOf(e)){for(;n!==null;){var i=Qa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=La(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var d=1<<31-ft(u);c.entanglements[1]|=d,u&=~d}Bt(i),(Te&6)===0&&(bi=rt()+500,mn(0))}}break;case 31:case 13:c=Da(i,2),c!==null&&ot(c,i,2),Li(),oo(i,2)}if(i=so(l),i===null&&Zc(e,t,l,qi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Zc(e,t,l,null,a)}}function so(e){return e=du(e),fo(e)}var qi=null;function fo(e){if(qi=null,e=ja(e),e!==null){var t=v(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=L(t),e!==null)return e;e=null}else if(a===31){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qi=e,null}function pd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zd()){case wo:return 2;case Uo:return 8;case Dn:case Fd:return 32;case Do:return 268435456;default:return 32}default:return 32}}var Ao=!1,Ra=null,ya=null,Oa=null,pn=new Map,vn=new Map,pa=[],sE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vd(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function bn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Qa(t),t!==null&&yd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function fE(e,t,a,l,n){switch(t){case"focusin":return Ra=bn(Ra,e,t,a,l,n),!0;case"dragenter":return ya=bn(ya,e,t,a,l,n),!0;case"mouseover":return Oa=bn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return pn.set(i,bn(pn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,vn.set(i,bn(vn.get(i)||null,e,t,a,l,n)),!0}return!1}function bd(e){var t=ja(e.target);if(t!==null){var a=v(t);if(a!==null){if(t=a.tag,t===13){if(t=L(a),t!==null){e.blockedOn=t,Yo(e.priority,function(){Od(a)});return}}else if(t===31){if(t=z(a),t!==null){e.blockedOn=t,Yo(e.priority,function(){Od(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=so(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);fu=l,a.target.dispatchEvent(l),fu=null}else return t=Qa(a),t!==null&&yd(t),e.blockedOn=a,!1;t.shift()}return!0}function Nd(e,t,a){xi(e)&&a.delete(t)}function dE(){Ao=!1,Ra!==null&&xi(Ra)&&(Ra=null),ya!==null&&xi(ya)&&(ya=null),Oa!==null&&xi(Oa)&&(Oa=null),pn.forEach(Nd),vn.forEach(Nd)}function Pi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ao||(Ao=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dE)))}var ji=null;function Ld(e){ji!==e&&(ji=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ji===e&&(ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(fo(l||a)===null)continue;break}var i=Qa(a);i!==null&&(e.splice(t,3),t-=3,sc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Cl(e){function t(d){return Pi(d,e)}Ra!==null&&Pi(Ra,e),ya!==null&&Pi(ya,e),Oa!==null&&Pi(Oa,e),pn.forEach(t),vn.forEach(t);for(var a=0;a<pa.length;a++){var l=pa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<pa.length&&(a=pa[0],a.blockedOn===null);)bd(a),a.blockedOn===null&&pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[at]||null;if(typeof i=="function")u||Ld(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[at]||null)c=u.formAction;else if(fo(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Ld(a)}}}function Cd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ho(e){this._internalRoot=e}Qi.prototype.render=ho.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=Tt();Sd(a,l,e,t,null,null)},Qi.prototype.unmount=ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sd(e.current,2,null,e,null,null),Li(),t[Pa]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=zo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<pa.length&&t!==0&&t<pa[a].priority;a++);pa.splice(a,0,e),a===0&&bd(e)}};var Md=E.version;if(Md!=="19.2.4")throw Error(s(527,Md,"19.2.4"));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=R(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var AE={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:f,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Hl=Xi.inject(AE),st=Xi}catch{}}return Nn.createRoot=function(e,t){if(!b(e))throw Error(s(299));var a=!1,l="",n=Bs,i=Gs,u=zs;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=gd(e,1,!1,null,null,a,l,null,n,i,u,Cd),e[Pa]=t.current,Xc(e),new ho(t)},Nn.hydrateRoot=function(e,t,a){if(!b(e))throw Error(s(299));var l=!1,n="",i=Bs,u=Gs,c=zs,d=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=gd(e,1,!0,t,a??null,l,n,d,i,u,c,Cd),t.context=Td(null),a=t.current,l=Tt(),l=lu(l),n=oa(l),n.callback=null,ra(a,n,l),a=l,t.current.lanes=a,Bl(t,a),Bt(t),e[Pa]=t.current,Xc(e),new Qi(t)},Nn.version="19.2.4",Nn}var zd;function OE(){if(zd)return mo.exports;zd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(E){console.error(E)}}return r(),mo.exports=yE(),mo.exports}var pE=OE();const kd=[];function j(r,E,y){const s=E.trim().split(`
`).map(v=>{const[L,...z]=v.split("|");return{answer:L.trim().toUpperCase(),clue:z.join("|").trim()}}),b=y.trim().split(`
`).map(v=>{const[L,z]=v.split("|");return{title:L,focus:z.split(" ")}});kd.push({category:r,words:s,themes:b})}j("Winter",`
FROST|A delicate coat of ice on a window
SNOW|Flakes that can close a school
SLEET|Rain that freezes before it lands
ICICLE|A frozen drip hanging from a roof
MITTEN|A hand warmer with one space for four fingers
SCARF|A warm wrap around the neck
PARKA|A hooded coat for bitter weather
BOOTS|Footwear for a snowy walk
SLED|A downhill ride without wheels
SKATE|Glide on a frozen rink
SKI|A long runner strapped to a boot
SLOPE|The downhill part of a ski run
LODGE|A cozy base for a mountain holiday
COCOA|A chocolate drink for a cold evening
FIRE|A crackling source of hearth heat
EMBER|A glowing remnant in a fireplace
QUILT|A bedcover pieced together and stitched
THAW|A spell when frozen ground softens
BLIZZARD|A snowstorm with strong winds
FLURRY|A brief, light fall of snow
SHOVEL|A tool for clearing a snowy path
WOOL|A warm fiber from sheep
`,`
Snow day|SNOW SLED FLURRY SHOVEL BLIZZARD BOOTS
Wrapped up warm|MITTEN SCARF PARKA BOOTS WOOL QUILT
On thin ice|SKATE ICICLE FROST SLEET THAW SNOW
At the ski lodge|SKI SLOPE LODGE COCOA BOOTS PARKA
Fireside comforts|FIRE EMBER COCOA QUILT WOOL LODGE
The big freeze|BLIZZARD FROST ICICLE SNOW SLEET THAW
`);j("Space",`
ORBIT|A path around a planet or star
COMET|An icy visitor with a glowing tail
METEOR|A streak of light from burning space debris
ASTEROID|A rocky body smaller than a planet
MOON|Earth's natural satellite
CRATER|A bowl-shaped impact scar
LUNAR|Relating to Earth's natural satellite
ECLIPSE|When one heavenly body hides another
SOLAR|Relating to the Sun
FLARE|A sudden burst from the Sun's surface
CORONA|The Sun's outer atmosphere
STAR|A self-luminous ball of hot gas
NEBULA|An interstellar cloud of gas and dust
GALAXY|A vast system of stars
COSMOS|The universe as an ordered whole
ROCKET|A vehicle propelled by expelled gases
LAUNCH|The start of a spacecraft's journey
ROVER|A robotic explorer on another world
PROBE|An uncrewed craft sent to investigate space
SATURN|The planet famous for its rings
VENUS|The second planet from the Sun
MARS|The planet nicknamed the Red Planet
`,`
Moonstruck|MOON CRATER LUNAR ECLIPSE ORBIT ROVER
Our solar neighbors|SATURN VENUS MARS SOLAR MOON ORBIT
Rocket science|ROCKET LAUNCH PROBE ROVER ORBIT CRATER
Starlight, star bright|STAR NEBULA GALAXY COSMOS SOLAR CORONA
Visitors from space|COMET METEOR ASTEROID CRATER ORBIT COSMOS
Here comes the Sun|SOLAR FLARE CORONA STAR ECLIPSE ORBIT
`);j("Baking",`
FLOUR|The powdery foundation of most bread
YEAST|The organism that makes bread dough rise
DOUGH|A mixture ready for kneading
KNEAD|Work bread mixture with the hands
PROOF|Let yeast dough rise before baking
CRUST|The browned outer layer of a loaf
LOAF|A shaped unit of bread
SOURDOUGH|Bread made with a fermented starter
BUTTER|Cream churned into a baking staple
SUGAR|Sweet crystals measured into cake batter
WHISK|Beat ingredients with a wire tool
BATTER|A pourable mixture for cakes
OVEN|The hot heart of a bakery
TIMER|A device that tells a baker when to check
TRAY|A flat baking pan
PASTRY|A dough used for pies and tarts
TART|An open-topped pastry with a filling
GLAZE|A thin, glossy coating on a baked treat
SCONE|A crumbly baked companion to tea
MUFFIN|An individual quick bread in a paper cup
COOKIE|A small, flat baked sweet
SIEVE|A tool for sifting dry ingredients
`,`
The bread basket|FLOUR YEAST DOUGH KNEAD CRUST LOAF
Rise and shine|PROOF YEAST SOURDOUGH KNEAD DOUGH LOAF
Cake chemistry|BATTER WHISK BUTTER SUGAR OVEN SIEVE
A pastry affair|PASTRY TART GLAZE BUTTER FLOUR TRAY
The cookie jar|COOKIE SUGAR BUTTER DOUGH TRAY TIMER
Afternoon at the bakery|SCONE MUFFIN TART COOKIE GLAZE PASTRY
`);j("Music",`
TEMPO|The speed of a musical piece
BEAT|A steady musical pulse
RHYTHM|A pattern of sounds in time
METER|The grouping of beats in music
CHORD|Three or more notes played together
SCALE|A sequence of notes arranged by pitch
MELODY|The tune you might hum
HARMONY|Notes sounding together in agreement
PIANO|A keyboard instrument with hammers and strings
VIOLIN|A four-stringed instrument played with a bow
CELLO|A bowed instrument held between the knees
FLUTE|A woodwind often held sideways
BRASS|The orchestral family that includes trumpets
DRUM|A percussion instrument with a stretched head
BASS|The lowest part in many musical arrangements
JAZZ|A music tradition known for improvisation and swing
BLUES|A music tradition often using a twelve-bar form
SOLO|A passage for one performer
CHOIR|A group of singers
VERSE|A song section before a repeated refrain
CHORUS|A recurring section of a song
LYRIC|A word or line in a song
`,`
Keep the beat|TEMPO BEAT RHYTHM METER DRUM BASS
Keys to the melody|PIANO SCALE CHORD MELODY HARMONY SOLO
The string section|VIOLIN CELLO BASS CHORD HARMONY SCALE
A night of jazz|JAZZ BLUES SOLO BRASS PIANO BASS
Sing it back|CHOIR VERSE CHORUS LYRIC MELODY HARMONY
Wind instruments|FLUTE BRASS TEMPO SOLO MELODY SCALE
`);j("Ocean",`
TIDE|The sea's regular rise and fall
WAVE|A moving ridge on the water's surface
SURF|Waves breaking near the shore
CURRENT|A directed flow of ocean water
REEF|An underwater ridge that may be built by coral
CORAL|A tiny marine animal that can build a reef
ATOLL|A ring-shaped island surrounding a lagoon
LAGOON|A shallow body of water sheltered from the sea
KELP|Large brown seaweed forming underwater forests
ALGAE|Photosynthetic organisms common in water
PLANKTON|Tiny organisms drifting with the current
SEAL|A flippered marine mammal
WHALE|A large mammal that surfaces to breathe
DOLPHIN|A marine mammal known for clicks and whistles
SHARK|A fish with a skeleton made of cartilage
OCTOPUS|A marine animal with eight arms
SQUID|A tentacled swimmer that can squirt ink
SHELL|A mollusk's protective outer covering
SAND|Tiny grains under a beach towel
SHORE|Where the sea meets the land
ABYSS|A very deep region of the ocean
SALT|The mineral that seasons seawater
`,`
Life on the reef|REEF CORAL ATOLL LAGOON SHARK ALGAE
The deep blue|ABYSS SQUID OCTOPUS WHALE PLANKTON CURRENT
Beside the seaside|SAND SHORE SHELL SURF WAVE TIDE
Gentle giants|WHALE DOLPHIN SEAL PLANKTON CURRENT OCEAN
Underwater forests|KELP ALGAE PLANKTON CURRENT SEAL SHARK
Turn of the tide|TIDE CURRENT WAVE SURF SHORE SALT
`.replace("CURRENT OCEAN","CURRENT SALT"));j("Garden",`
SEED|A small beginning for a new plant
SPROUT|A plant's first little shoot
ROOT|The part that anchors a plant and absorbs water
STEM|The supporting stalk of a plant
LEAF|A plant's main photosynthetic organ
PETAL|One colorful segment of a flower
BLOOM|A flower, or the act of flowering
POLLEN|Fine grains carried between flowers
BULB|An underground storehouse that can become a tulip
TULIP|A cup-shaped spring flower grown from a bulb
ROSE|A thorny garden flower associated with romance
LILY|A flower often with six showy petal-like parts
IRIS|A garden flower named for a Greek rainbow goddess
DAISY|A flower with a sunny center and rays of petals
SOIL|The earthy medium in a flower bed
MULCH|A protective layer spread over garden soil
COMPOST|Decayed organic matter used to enrich soil
TROWEL|A small hand tool for planting
PRUNE|Trim a plant to encourage healthy growth
HEDGE|A living boundary of closely planted shrubs
TRELLIS|A lattice that supports climbing plants
WATER|What a thirsty seedling needs
`,`
From seed to sprout|SEED SPROUT ROOT STEM LEAF WATER
Spring bulbs|BULB TULIP IRIS LILY ROOT BLOOM
Say it with flowers|ROSE LILY DAISY IRIS PETAL BLOOM
Down to earth|SOIL MULCH COMPOST ROOT TROWEL WATER
The climbing garden|TRELLIS HEDGE PRUNE STEM LEAF ROSE
A pollinator's paradise|POLLEN PETAL BLOOM DAISY SEED ROSE
`);j("Cinema",`
ACTOR|A person who plays a character on screen
CAST|All the performers in a film
ROLE|The character assigned to a performer
SCENE|One continuous part of a film's action
SCRIPT|The written dialogue and directions for a film
DIRECTOR|The person guiding a film's performances and vision
CAMERA|The device recording a movie's images
LENS|The optical component that focuses an image
FRAME|A single still image in a movie
EDIT|Assemble and trim recorded footage
CUT|A transition from one shot to another
TAKE|One recorded attempt at a shot
STUNT|A daring action performed for a scene
PROP|An object used by a performer
SET|The constructed space where a scene is filmed
SCORE|Music written to accompany a film
SOUND|The audible part of a movie
SILENT|Describing films without synchronized spoken dialogue
COMEDY|A film genre intended to amuse
THRILLER|A film genre built around tension and suspense
CREDIT|An acknowledgment of a contributor at a film's end
SCREEN|The surface on which a movie is projected
`,`
Lights, camera, action|CAMERA DIRECTOR TAKE SCENE SET LENS
Behind the scenes|PROP STUNT SET SCRIPT DIRECTOR CAST
The cutting room|EDIT CUT FRAME SCENE TAKE SCREEN
Leading roles|ACTOR CAST ROLE SCRIPT SCENE CREDIT
Sound and silence|SCORE SOUND SILENT SCREEN SCENE EDIT
A double feature|COMEDY THRILLER SCREEN ACTOR SCORE CAST
`);j("Books",`
NOVEL|A long work of prose fiction
STORY|A narrative of connected events
PLOT|The sequence of events in a narrative
CHAPTER|A major division of a book
PAGE|One side of a leaf in a book
SPINE|The edge of a book visible on a shelf
COVER|A book's protective outer surface
TITLE|The name of a written work
AUTHOR|The person who writes a book
EDITOR|A person who prepares a manuscript for publication
DRAFT|An early version of a written work
PROSE|Ordinary writing without a verse structure
VERSE|Writing arranged in lines with poetic rhythm
POEM|A literary work that often uses imagery and rhythm
STANZA|A grouped set of lines in a poem
RHYME|Similarity of sounds at the ends of words
FABLE|A short tale that teaches a moral
MYTH|A traditional story involving gods or heroes
EPIC|A long poem about heroic deeds
MEMOIR|A personal account drawn from the writer's life
LIBRARY|A place to borrow books
SHELF|A horizontal support for a row of books
`,`
A novel idea|NOVEL PLOT CHAPTER AUTHOR PROSE STORY
Between the covers|COVER SPINE PAGE TITLE SHELF CHAPTER
The poet's corner|POEM STANZA RHYME VERSE EPIC AUTHOR
Once upon a time|FABLE MYTH STORY EPIC PLOT PROSE
The writing desk|AUTHOR EDITOR DRAFT TITLE PROSE PAGE
At the library|LIBRARY SHELF NOVEL MEMOIR COVER SPINE
`);j("Travel",`
MAP|A drawing that helps you find your way
ATLAS|A bound collection of maps
ROUTE|The way chosen to reach a destination
GUIDE|A person or book that shows a visitor around
PASSPORT|An official booklet for international travel
VISA|Official permission to enter a foreign country
TICKET|Proof of a paid journey or admission
FARE|The price of a trip on public transport
HOTEL|A place offering rooms to travelers
HOSTEL|Budget lodging often with shared rooms
INN|A small establishment offering food and lodging
SUITE|A connected set of hotel rooms
BAG|A traveler's container for belongings
TRUNK|A large, sturdy travel chest
PACK|Put belongings into luggage
TRIP|A journey away and back
TOUR|A journey with several planned stops
CRUISE|A holiday aboard a passenger ship
FLIGHT|A journey through the air
TRAIN|A line of railway cars pulled by an engine
BEACH|A sandy or pebbly holiday destination
RESORT|A place designed for holidays and recreation
`,`
Passport, please|PASSPORT VISA TICKET FLIGHT BAG FARE
Room for the night|HOTEL HOSTEL INN SUITE RESORT BAG
The road less traveled|MAP ROUTE GUIDE TRIP ATLAS TOUR
All aboard|TRAIN TICKET FARE ROUTE TRIP BAG
Island getaway|BEACH RESORT CRUISE TOUR HOTEL SUITE
Packing light|PACK BAG TRUNK PASSPORT TICKET MAP
`);j("Weather",`
RAIN|Water falling in drops from clouds
DRIZZLE|Very light rain in fine drops
SHOWER|A brief spell of rainfall
DOWNPOUR|A sudden heavy fall of rain
CLOUD|A visible mass of tiny water droplets in the air
CIRRUS|A high, wispy type of cloud
CUMULUS|A puffy cloud with a fairly flat base
STRATUS|A low cloud that forms a broad layer
WIND|Air moving relative to the ground
GUST|A short, strong burst of wind
BREEZE|A gentle wind
GALE|A very strong wind
THUNDER|The sound following a lightning flash
BOLT|A jagged flash of lightning
STORM|A disturbance bringing severe weather
HAIL|Balls of ice falling from a storm cloud
FOG|A cloud resting at ground level
MIST|Fine suspended droplets that reduce visibility
DEW|Water beads formed on a cool surface
HUMID|Describing air with a lot of moisture
DROUGHT|A prolonged shortage of rainfall
FORECAST|A prediction of coming weather
`,`
Rain check|RAIN DRIZZLE SHOWER DOWNPOUR CLOUD FORECAST
Cloud watching|CLOUD CIRRUS CUMULUS STRATUS MIST FOG
Against the wind|WIND GUST BREEZE GALE STORM FORECAST
Thunderstruck|THUNDER BOLT STORM HAIL CLOUD RAIN
Misty morning|FOG MIST DEW HUMID CLOUD BREEZE
Dry spell|DROUGHT HUMID FORECAST WIND CLOUD DEW
`);j("Birds",`
ROBIN|A songbird with a red or orange breast
WREN|A small songbird often seen with its tail cocked
FINCH|A small songbird with a seed-cracking beak
SPARROW|A small, commonly brownish seed-eating bird
THRUSH|A songbird family known for melodious calls
OWL|A bird of prey often active after dark
EAGLE|A large bird of prey with a hooked beak
HAWK|A sharp-eyed bird of prey
FALCON|A swift bird of prey with pointed wings
HERON|A long-legged bird that hunts in shallow water
CRANE|A tall, long-necked wading bird
DUCK|A broad-billed waterbird
SWAN|A large waterbird with a graceful neck
GOOSE|A waterbird known for honking
GULL|A coastal bird with a famously opportunistic appetite
NEST|A bird's nursery
EGG|A bird's offspring in a shell
BEAK|A bird's bill
WING|A feathered structure used for flight
FEATHER|One of the light structures covering a bird
FLOCK|A group of birds traveling together
MIGRATE|Move seasonally between habitats
`,`
The dawn chorus|ROBIN WREN FINCH SPARROW THRUSH BEAK
Birds of prey|OWL EAGLE HAWK FALCON WING FEATHER
By the duck pond|DUCK SWAN GOOSE HERON CRANE NEST
Flying south|MIGRATE FLOCK GOOSE CRANE WING GULL
A feathered nest|NEST EGG FEATHER BEAK WING ROBIN
Along the shore|GULL HERON CRANE DUCK SWAN BEAK
`);j("Pets",`
KITTEN|A young cat
PUPPY|A young dog
TABBY|A cat with stripes, spots, or swirls in its coat
CALICO|A cat with a coat usually of three colors
POODLE|A dog breed known for its curly coat
BEAGLE|A small hound with an excellent sense of smell
COLLIE|A herding dog associated with Lassie
CORGI|A short-legged Welsh herding dog
HAMSTER|A small pet rodent with cheek pouches
RABBIT|A long-eared mammal often kept as a pet
GERBIL|A small, long-tailed pet rodent
PARROT|A hooked-beaked bird that may mimic speech
CANARY|A small pet songbird often colored yellow
GOLDFISH|A familiar orange aquarium pet
GUPPY|A small tropical aquarium fish
LEASH|A lead used when walking a dog
COLLAR|A band worn around a pet's neck
TREAT|A small food reward for a pet
TOY|An object for a pet to play with
PURR|A contented cat's rumbling sound
BARK|A dog's familiar call
PAW|The foot of a cat or dog
PERCH|A bar where a pet bird can rest
CAGE|An enclosure for a small pet
FEATHER|A lightweight structure in a bird’s coat
AQUARIUM|A glass tank for keeping fish
FIN|A fish’s stabilizing or propelling appendage
GILL|A fish’s organ for drawing oxygen from water
`,`
The cat's whiskers|KITTEN TABBY CALICO PURR PAW TOY
Who's a good dog|PUPPY POODLE BEAGLE COLLIE CORGI BARK
Little companions|HAMSTER RABBIT GERBIL TREAT TOY PAW
Feathered friends|PARROT CANARY PERCH CAGE FEATHER TREAT
Life in a fishbowl|GOLDFISH GUPPY AQUARIUM FIN GILL TREAT
Walkies|LEASH COLLAR TREAT PUPPY PAW BARK
`);j("Coffee & tea",`
COFFEE|A drink brewed from roasted beans
BEAN|A small seed that becomes coffee after roasting
ROAST|Heat coffee beans to develop flavor
GRIND|Crush coffee beans into small particles
BREW|Prepare a drink by steeping or infusing
FILTER|A porous barrier that catches coffee grounds
ESPRESSO|Concentrated coffee brewed under pressure
LATTE|Espresso with plenty of steamed milk
MOCHA|A drink combining coffee and chocolate
CREMA|The golden foam on a well-made espresso
MILK|The dairy base for a latte's foam
FROTH|A layer of tiny bubbles atop a drink
TEA|A drink made by steeping leaves
OOLONG|A tea oxidized between green and black
MATCHA|Powdered green tea whisked into water
CHAI|A word for tea used for a spiced milk drink
STEEP|Let leaves infuse in hot water
KETTLE|A vessel used to boil water for tea
CUP|A small vessel for a hot drink
SAUCER|A shallow dish beneath a teacup
MUG|A sturdy drinking vessel with a handle
SIP|Drink a little at a time
`,`
But first, coffee|COFFEE BEAN ROAST GRIND BREW FILTER
The espresso bar|ESPRESSO LATTE MOCHA CREMA MILK FROTH
Tea for two|TEA KETTLE CUP SAUCER STEEP SIP
Leaves of flavor|OOLONG MATCHA CHAI TEA STEEP BREW
Milk and foam|MILK FROTH LATTE MOCHA ESPRESSO CREMA
The morning ritual|MUG SIP COFFEE BREW KETTLE TEA
`);j("Sports",`
BAT|A club used to hit a baseball
BALL|A round object central to many sports
BASE|One of four stations on a baseball diamond
PITCH|Throw a baseball toward the batter
CATCH|Secure a ball before it touches the ground
INNING|A division of a baseball game
GOAL|A scoring target in soccer or hockey
NET|Mesh that catches a scored ball or puck
PUCK|The flat disk used in ice hockey
RINK|The surface on which ice hockey is played
RACKET|A strung implement used in tennis
SERVE|The stroke that begins a tennis point
VOLLEY|Hit a tennis ball before it bounces
COURT|The playing area for tennis or basketball
HOOP|The ring a basketball must pass through
DRIBBLE|Move a ball with repeated small bounces or taps
SPRINT|A short race run at full speed
RELAY|A race in which teammates take turns
TRACK|An oval running course
LAP|One complete circuit of a course
MEDAL|An award worn on a ribbon
COACH|A person who trains a sports team
`,`
Play ball|BAT BALL BASE PITCH CATCH INNING
On the ice|PUCK RINK NET GOAL COACH MEDAL
Game, set, match|RACKET SERVE VOLLEY COURT NET BALL
Nothing but net|HOOP DRIBBLE COURT BALL COACH GOAL
Off to the races|SPRINT RELAY TRACK LAP MEDAL COACH
Team spirit|COACH RELAY GOAL MEDAL CATCH SERVE
`);j("Art",`
PAINT|Colored material applied to make a picture
BRUSH|A tool with bristles used by a painter
CANVAS|Fabric stretched as a surface for a painting
EASEL|A stand supporting a painter's work
PALETTE|A board on which a painter mixes colors
PIGMENT|A substance that gives paint its color
HUE|A particular color or shade
TINT|A color lightened by adding white
SHADE|A color darkened by adding black
TONE|The relative lightness or darkness of a color
SKETCH|A quick, rough drawing
PENCIL|A graphite drawing tool
CHARCOAL|Burned wood used for rich, dark drawing marks
INK|A liquid medium for drawing or writing
PASTEL|A drawing stick made of powdered pigment
CLAY|A moldable material used for sculpture
MARBLE|A stone used for classical sculpture
CHISEL|A tool used to carve stone
STATUE|A sculpture representing a person or animal
MURAL|A painting made directly on a wall
FRESCO|A wall painting made on wet plaster
GALLERY|A space where art is exhibited
`,`
The painter's studio|PAINT BRUSH CANVAS EASEL PALETTE PIGMENT
A study in color|HUE TINT SHADE TONE PALETTE PIGMENT
Drawing the line|SKETCH PENCIL CHARCOAL INK PASTEL TONE
Set in stone|MARBLE CHISEL STATUE CLAY SKETCH GALLERY
Off the wall|MURAL FRESCO PAINT PIGMENT BRUSH GALLERY
An afternoon of art|GALLERY STATUE CANVAS SKETCH MURAL PASTEL
`);j("Laboratory",`
BEAKER|A wide-mouthed laboratory container
FLASK|A laboratory vessel with a narrow neck
PIPETTE|A tool for transferring small volumes of liquid
VIAL|A small container for a sample
SLIDE|A glass plate for a microscope specimen
LENS|The focusing glass in a microscope
CELL|The basic structural unit of living things
TISSUE|A group of similar cells working together
GENE|A unit of hereditary information
HELIX|The spiral shape of a DNA strand
ATOM|The smallest unit retaining an element's identity
ION|An atom or molecule with an electrical charge
ACID|A substance with a pH below seven in water
BASE|A substance that can neutralize an acid
SAMPLE|A small portion taken for testing
TRIAL|One run of an experiment
CONTROL|An experimental comparison kept without the tested change
RESULT|The outcome recorded after an experiment
THEORY|A well-supported explanatory framework in science
DATA|Recorded observations used in research
SAFETY|The reason for goggles and a lab coat
GOGGLES|Protective eyewear worn at the lab bench
`,`
Glassware and goggles|BEAKER FLASK PIPETTE VIAL SAFETY GOGGLES
Under the microscope|SLIDE LENS CELL TISSUE SAMPLE DATA
Written in our genes|GENE HELIX CELL TISSUE THEORY DATA
Acids and bases|ACID BASE ION ATOM BEAKER SAMPLE
The scientific method|TRIAL CONTROL RESULT THEORY DATA SAMPLE
A tiny world|ATOM ION CELL GENE HELIX LENS
`);j("Mountains",`
PEAK|The pointed top of a mountain
SUMMIT|The highest point reached by a climber
RIDGE|A long, narrow high crest
SLOPE|A hillside's inclined surface
CLIFF|A steep, exposed rock face
LEDGE|A narrow shelf on a rock face
VALLEY|Low land between hills or mountains
GORGE|A narrow valley with steep sides
PASS|A route through a mountain range
TRAIL|A marked path for hikers
CAIRN|A pile of stones used as a waymarker
BOOT|A sturdy piece of hiking footwear
ROPE|A climber's essential safety line
HARNESS|A climber's secured arrangement of straps
AXE|The head of an ice climber's striking tool
CRAMPON|A spiked device fastened to a climbing boot
GLACIER|A slowly moving mass of ice
SNOW|The white cap of many high peaks
ALPINE|Relating to high mountains
ALTITUDE|Height above sea level
ASCENT|A climb upward
DESCENT|A journey down from a summit
`,`
Summit fever|SUMMIT PEAK ASCENT ALTITUDE RIDGE ALPINE
The valley below|VALLEY GORGE PASS DESCENT SLOPE TRAIL
Rock solid|CLIFF LEDGE ROPE HARNESS AXE BOOT
Ice and altitude|GLACIER CRAMPON SNOW AXE ALTITUDE ALPINE
Follow the cairns|CAIRN TRAIL BOOT PASS RIDGE ASCENT
The way back down|DESCENT SLOPE VALLEY LEDGE ROPE TRAIL
`);j("City life",`
STREET|An urban road lined with buildings
AVENUE|A broad city road, often lined with trees
ALLEY|A narrow passage behind or between buildings
BLOCK|A city area bounded by streets
PLAZA|An open public square in a city
PARK|A green public space among buildings
BENCH|A long seat in a public place
FOUNTAIN|A decorative feature with flowing water
SUBWAY|An underground urban railway
METRO|Another name for an urban rapid-transit system
TAXI|A car hired for a metered journey
BUS|A road vehicle carrying many passengers
CAFE|A small place to get coffee and light meals
BAKERY|A shop selling bread and baked goods
MARKET|A place where vendors sell their goods
KIOSK|A small open-fronted sales booth
TOWER|A tall, narrow building
SKYLINE|The outline of buildings against the sky
BRIDGE|A structure spanning a river or road
DOME|A rounded roof over a building
MUSEUM|A building displaying collections of art or history
LIBRARY|A public place to borrow reading material
`,`
Street level|STREET AVENUE ALLEY BLOCK PLAZA KIOSK
Urban oasis|PARK BENCH FOUNTAIN PLAZA BRIDGE LIBRARY
The daily commute|SUBWAY METRO TAXI BUS STREET BLOCK
A city of flavors|CAFE BAKERY MARKET KIOSK STREET PLAZA
Look up|TOWER SKYLINE BRIDGE DOME BLOCK AVENUE
Culture around the corner|MUSEUM LIBRARY PLAZA CAFE PARK DOME
`);j("Kitchen",`
KNIFE|A sharp-edged tool for preparing ingredients
PEELER|A tool that removes a vegetable's outer skin
GRATER|A tool that shreds cheese into small pieces
BOARD|A flat surface for chopping food
PAN|A shallow vessel for frying
POT|A deep vessel for cooking soup
SKILLET|A frying pan, often made of cast iron
WOK|A rounded pan used for stir-frying
LADLE|A deep-bowled spoon for serving soup
SPATULA|A flat tool for turning food in a pan
TONGS|A two-armed tool for gripping hot food
SPOON|A utensil for stirring or eating soup
BOIL|Cook in bubbling water
SIMMER|Cook gently just below boiling
SEAR|Brown a food's surface with intense heat
SAUTE|Cook quickly in a little fat
CHOP|Cut food into rough pieces
DICE|Cut food into small cubes
MINCE|Chop food into very tiny pieces
SLICE|Cut a thin, flat piece from food
SINK|The basin where dishes are washed
APRON|A protective garment worn over a cook's clothes
`,`
A cut above|KNIFE PEELER GRATER BOARD CHOP SLICE
Pots and pans|PAN POT SKILLET WOK BOIL SIMMER
Stir things up|LADLE SPATULA TONGS SPOON POT WOK
Turn up the heat|BOIL SIMMER SEAR SAUTE PAN SKILLET
Knife skills|CHOP DICE MINCE SLICE KNIFE BOARD
The home chef|APRON SINK KNIFE PAN SPOON BOARD
`);j("Woodland",`
FOREST|A large area covered chiefly with trees
CANOPY|The leafy roof above a woodland floor
GROVE|A small group of trees
GLADE|An open clearing among trees
OAK|The tree that grows acorns
ACORN|The nut that may become an oak
MAPLE|A tree famous for syrup and lobed leaves
BIRCH|A tree often recognized by pale, peeling bark
PINE|An evergreen tree with needle-like leaves
CEDAR|An aromatic evergreen used for wooden chests
FERN|A woodland plant with fronds instead of flowers
MOSS|A small, soft plant forming green carpets
LICHEN|A partnership between a fungus and an alga or cyanobacterium
FUNGI|The kingdom that includes mushrooms
DEER|A woodland mammal whose males often grow antlers
FOX|A bushy-tailed wild member of the dog family
BADGER|A burrowing mammal with a striped face
SQUIRREL|A tree-climbing rodent that caches nuts
OWL|A bird of prey with forward-facing eyes
TRAIL|A path worn through the woods
BARK|The protective outer layer of a tree trunk
ROOT|A tree's underground anchor
`,`
Into the woods|FOREST CANOPY GROVE GLADE TRAIL BARK
Under the old oak|OAK ACORN SQUIRREL ROOT BARK GROVE
The forest floor|FERN MOSS LICHEN FUNGI ROOT TRAIL
Evergreen afternoon|PINE CEDAR CANOPY FOREST BARK GROVE
Woodland neighbors|DEER FOX BADGER SQUIRREL OWL FOREST
Leaves are turning|MAPLE BIRCH OAK ACORN CANOPY TRAIL
`);j("Insects",`
BEE|A striped pollinator that makes honey
HONEY|A sweet substance stored by bees
HIVE|A home for a colony of bees
COMB|A wax structure with hexagonal cells
QUEEN|The egg-laying female in a bee colony
ANT|A social insect often seen carrying crumbs
COLONY|A community of insects living together
MOUND|A raised pile of earth made by some ants
BEETLE|An insect with hardened forewings
LADYBUG|A spotted beetle that eats aphids
APHID|A small insect that sucks sap from plants
WEEVIL|A beetle with an elongated snout
MOTH|A usually nocturnal relative of a butterfly
COCOON|A protective case spun by some insect larvae
LARVA|An immature insect stage before adulthood
PUPA|The transformation stage between larva and adult
WING|The flight surface of many adult insects
ANTENNA|One of an insect's paired sensory feelers
CRICKET|A chirping relative of the grasshopper
CICADA|An insect known for loud summer buzzing
FIREFLY|A beetle whose abdomen can glow
MANTIS|A predatory insect with folded front legs
`,`
Busy as a bee|BEE HONEY HIVE COMB QUEEN COLONY
An ant's world|ANT COLONY MOUND LARVA ANTENNA QUEEN
Little garden helpers|LADYBUG BEETLE APHID MANTIS BEE WING
A beautiful transformation|LARVA PUPA COCOON MOTH WING ANTENNA
Summer soundtrack|CRICKET CICADA WING ANTENNA FIREFLY MOTH
Beetle mania|BEETLE LADYBUG WEEVIL FIREFLY LARVA WING
`);j("Handmade",`
YARN|A continuous strand used for knitting
NEEDLE|A pointed tool used for stitching
STITCH|A single loop or pass in sewn work
KNIT|Make fabric by interlocking loops of yarn
PURL|A knitting stitch with a bump on the front
CROCHET|Make fabric with yarn and a single hook
HOOK|The tool used to make crochet stitches
LOOM|A frame for weaving fabric
WARP|The lengthwise threads on a loom
WEFT|The threads woven across the lengthwise ones
WEAVE|Interlace strands to make fabric
FELT|A fabric formed by matting fibers together
THREAD|A thin strand used for sewing
SEAM|The line where two pieces of fabric join
HEM|A folded and stitched fabric edge
THIMBLE|A small finger cap that pushes a sewing needle
PATCH|A piece of cloth covering a hole
QUILT|A stitched bedcover with a padded middle
BEAD|A small decorative object with a hole
CORD|A thick string used for knots or jewelry
KNOT|An interlaced fastening in string
MACRAME|A textile craft based on decorative knotting
`,`
Knit one, purl one|KNIT PURL YARN NEEDLE STITCH THREAD
Hooked on crochet|CROCHET HOOK YARN STITCH KNOT CORD
On the loom|LOOM WARP WEFT WEAVE THREAD YARN
A stitch in time|NEEDLE THREAD SEAM HEM THIMBLE PATCH
The quilting circle|QUILT PATCH STITCH SEAM HEM THREAD
Tied together|MACRAME KNOT CORD BEAD WEAVE HOOK
`);j("Technology",`
CODE|Instructions written for a computer
LOOP|Code that repeats a set of instructions
ARRAY|An ordered collection of indexed values
STRING|A sequence of characters in a program
BUG|An unintended defect in software
DEBUG|Find and fix software defects
STACK|A last-in, first-out data structure
QUEUE|A first-in, first-out data structure
CHIP|A small piece of silicon carrying electronic circuits
PIXEL|The smallest addressable element of a digital image
SCREEN|A display showing a computer's output
MOUSE|A pointing device named after a small mammal
ROUTER|A device that directs data between networks
PACKET|A small unit of data sent over a network
SERVER|A computer that provides resources to clients
CLIENT|Software that requests a service from another system
CACHE|A store of data kept for faster access
FILE|A named collection of stored data
FOLDER|A container used to organize digital documents
BINARY|A number system using only zero and one
LOGIC|The rules used to evaluate true and false conditions
INPUT|Data supplied to a program or device
`,`
Hello, world|CODE LOOP ARRAY STRING INPUT LOGIC
Bug hunt|BUG DEBUG CODE LOOP STACK LOGIC
Data structures|ARRAY STACK QUEUE STRING CACHE FILE
Across the network|ROUTER PACKET SERVER CLIENT CACHE BINARY
The desktop|SCREEN MOUSE PIXEL CHIP FILE FOLDER
Zeros and ones|BINARY LOGIC CHIP CODE INPUT PACKET
`);j("Transport",`
WHEEL|A circular component that turns on an axle
AXLE|A shaft around which wheels rotate
PEDAL|A foot-operated lever on a bicycle
SPOKE|One of the rods between a wheel's hub and rim
CHAIN|Linked metal loops transmitting power on a bike
BRAKE|A device used to slow a vehicle
ENGINE|The machine supplying a vehicle's power
PISTON|A moving cylinder component in many engines
GEAR|A toothed wheel that transmits motion
CLUTCH|A mechanism connecting an engine to its transmission
RAIL|One of the steel tracks carrying a train
TRAIN|A linked line of railway carriages
TRAM|A streetcar running on rails
DEPOT|A base where transport vehicles are housed
WING|An aircraft's main lifting surface
PILOT|The person controlling an aircraft
COCKPIT|The space from which a pilot controls a plane
RUNWAY|The strip where planes take off and land
HULL|The main body of a boat
SAIL|Fabric used to catch wind and propel a boat
OAR|A long lever used to row a boat
RUDDER|A surface used to steer a boat or aircraft
`,`
On two wheels|WHEEL AXLE PEDAL SPOKE CHAIN BRAKE
Under the hood|ENGINE PISTON GEAR CLUTCH AXLE BRAKE
On the rails|RAIL TRAIN TRAM DEPOT ENGINE WHEEL
Ready for takeoff|WING PILOT COCKPIT RUNWAY ENGINE RUDDER
Messing about in boats|HULL SAIL OAR RUDDER WHEEL GEAR
Moving parts|GEAR CHAIN AXLE WHEEL PISTON CLUTCH
`);j("Architecture",`
ARCH|A curved structure spanning an opening
COLUMN|An upright architectural support
PILLAR|A freestanding vertical support
BEAM|A horizontal structural member
DOME|A rounded vault forming a roof
VAULT|An arched ceiling or roof
SPIRE|A tapering point at the top of a tower
TOWER|A tall structure rising above its surroundings
BRICK|A rectangular block used in masonry
MORTAR|The binding material between bricks
STONE|A natural building material quarried from rock
TIMBER|Wood prepared for construction
DOOR|A hinged barrier at an entrance
WINDOW|A glazed opening that admits light
STAIR|A step in a flight between floors
FLOOR|A room's lower walking surface
FACADE|The front face of a building
PORTICO|A roofed entrance supported by columns
ATRIUM|An open central space inside a building
CORNICE|A projecting molding near the top of a wall
PLAN|A drawing showing a building from above
MODEL|A small three-dimensional version of a proposed building
`,`
Under the arch|ARCH COLUMN PILLAR BEAM VAULT PORTICO
Above the rooftops|DOME SPIRE TOWER VAULT CORNICE FACADE
Brick by brick|BRICK MORTAR STONE TIMBER BEAM PILLAR
A room of one's own|DOOR WINDOW STAIR FLOOR ATRIUM PLAN
First impressions|FACADE PORTICO DOOR COLUMN CORNICE WINDOW
The architect's table|PLAN MODEL BEAM ARCH FLOOR WINDOW
`);j("Ancient worlds",`
PYRAMID|A monumental tomb with sloping triangular sides
PHARAOH|A ruler of ancient Egypt
NILE|The river central to ancient Egyptian civilization
MUMMY|A body preserved by an ancient embalming process
SPHINX|A mythical creature with a lion's body and a human head
PAPYRUS|An ancient writing material made from a wetland plant
ROME|The city traditionally founded by Romulus
SENATE|A governing council in the Roman Republic
TOGA|A draped garment worn by ancient Roman citizens
FORUM|A public meeting place in an ancient Roman city
LEGION|A major unit of the ancient Roman army
AQUEDUCT|A structure carrying water to a city
ATHENS|The ancient Greek city associated with the Acropolis
AGORA|A public gathering place in an ancient Greek city
TEMPLE|A building dedicated to worship
SCROLL|A rolled document used before bound books
COIN|A stamped metal piece used as money
RELIC|An object surviving from an earlier time
RUIN|The remains of a once-complete building
DIG|An archaeological excavation
`,`
Along the Nile|NILE PHARAOH PYRAMID PAPYRUS MUMMY SPHINX
When in Rome|ROME SENATE TOGA FORUM LEGION AQUEDUCT
Ancient Athens|ATHENS AGORA TEMPLE SCROLL COIN RELIC
The archaeologist's brush|DIG RELIC RUIN COIN SCROLL TEMPLE
Messages from antiquity|PAPYRUS SCROLL RELIC COIN FORUM AGORA
Monuments to time|PYRAMID SPHINX AQUEDUCT TEMPLE RUIN FORUM
`);j("Mythology",`
ZEUS|The thunderbolt-wielding ruler of Greek gods
HERA|The Greek queen of the gods
ATHENA|The Greek goddess of wisdom
APOLLO|A Greek god associated with music and prophecy
HERMES|The messenger of the Greek gods
ARES|The Greek god of war
ODIN|The one-eyed chief god of Norse mythology
THOR|The Norse god with a mighty hammer
LOKI|The trickster figure of Norse mythology
RUNE|A character in an old Germanic alphabet
TROLL|A creature of Scandinavian folklore
GIANT|An enormous being in traditional tales
DRAGON|A legendary reptilian creature, often fire-breathing
GRIFFIN|A mythical creature part eagle and part lion
PHOENIX|A mythical bird reborn from its ashes
UNICORN|A legendary horse with a single horn
QUEST|A hero's search for a difficult goal
ORACLE|A source of divine prophecy in ancient tales
HERO|A central figure known for courageous deeds
FATE|The course of events believed to be predetermined
`,`
On Mount Olympus|ZEUS HERA ATHENA APOLLO HERMES ARES
Thunder from the north|ODIN THOR LOKI RUNE TROLL GIANT
Fantastic beasts|DRAGON GRIFFIN PHOENIX UNICORN GIANT TROLL
The hero's journey|QUEST HERO ORACLE FATE DRAGON GRIFFIN
Messengers and muses|HERMES APOLLO ATHENA ORACLE ZEUS HERA
Ashes to wings|PHOENIX GRIFFIN DRAGON UNICORN FATE QUEST
`);j("Theatre",`
STAGE|The area where a theatrical performance takes place
CURTAIN|The fabric that rises at the start of a play
WING|An offstage area at the side of a theatre
APRON|The part of a stage extending beyond its main arch
ACT|A major division of a play
SCENE|A smaller division within a theatrical act
CUE|A signal to speak, enter, or change a stage effect
LINE|A piece of dialogue assigned to a performer
CAST|The complete group of performers in a play
LEAD|The principal performer in a production
EXTRA|A performer with a small background role
CHORUS|A group singing together in a musical
MASK|A face covering used to portray a character
COSTUME|Clothing worn to portray a role
PROP|A portable object used by an actor
WIG|Artificial hair worn for a character
OPERA|A theatrical work told principally through singing
BALLET|A theatrical dance form often using pointe work
DRAMA|A serious play or the art of theatrical performance
FARCE|A comedy built on exaggerated, improbable situations
`,`
Curtain up|CURTAIN STAGE WING APRON CUE SCENE
Learn your lines|LINE CUE ACT SCENE LEAD CAST
In the dressing room|MASK COSTUME WIG PROP LEAD EXTRA
A musical evening|CHORUS OPERA BALLET STAGE CAST CUE
Comedy of errors|FARCE DRAMA ACT SCENE LINE PROP
The whole company|CAST LEAD EXTRA CHORUS COSTUME STAGE
`);j("Tabletop games",`
CHESS|A strategy game played by two armies of sixteen pieces
KING|The chess piece whose capture is threatened by check
QUEEN|The chess piece combining rook and bishop movement
ROOK|A chess piece that moves along ranks and files
BISHOP|A chess piece that moves diagonally
KNIGHT|A chess piece that moves in an L shape
PAWN|The most numerous piece on a chessboard
CHECK|A direct attack on a chess king
DICE|Small numbered cubes rolled in games
TOKEN|A small object representing a player on a board
TILE|A flat game piece used in dominoes or Scrabble
BOARD|The playing surface for many tabletop games
CARD|One rectangle in a shuffled deck
DECK|A complete pack of playing cards
SPADE|The playing-card suit shaped like a pointed leaf
HEART|The red card suit shaped like a symbol of love
CLUB|The card suit resembling a three-leaf clover
TRUMP|A card suit given special winning power
TURN|One player's opportunity to act
SCORE|A tally of points earned in a game
`,`
A royal game|CHESS KING QUEEN ROOK BISHOP KNIGHT
Opening moves|PAWN CHECK KNIGHT BOARD TURN CHESS
Roll with it|DICE TOKEN BOARD TURN SCORE TILE
In the cards|CARD DECK SPADE HEART CLUB TRUMP
Game night|DICE TILE TOKEN BOARD CARD SCORE
Your move|TURN SCORE PAWN CHECK TOKEN CARD
`);j("Workshop",`
HAMMER|A hand tool for driving nails
NAIL|A pointed metal fastener driven into wood
SAW|A toothed tool for cutting material
PLANE|A woodworking tool that shaves surfaces flat
CHISEL|A sharp-edged tool for cutting wood or stone
MALLET|A hammer with a large wooden or rubber head
DRILL|A rotating tool used to bore holes
BIT|A cutting attachment fitted to a drill
SCREW|A threaded fastener turned into place
DRIVER|The turning tool in a screw-fastening pair
WRENCH|A tool for gripping and turning nuts
PLIERS|A hinged gripping tool with two handles
CLAMP|A device that holds workpieces together
VISE|A bench-mounted tool that grips a workpiece
FILE|A rough-surfaced tool for smoothing material
SAND|Smooth a surface with abrasive paper
LEVEL|A tool used to check that a surface is horizontal
RULER|A straight strip marked for measuring length
SQUARE|A tool for checking right angles
TAPE|A flexible, retractable measuring strip
`,`
Woodworking weekend|SAW PLANE CHISEL MALLET CLAMP SAND
Nailed it|HAMMER NAIL DRILL SCREW DRIVER BIT
Measure twice|LEVEL RULER SQUARE TAPE PLANE SAW
A firm grip|WRENCH PLIERS CLAMP VISE HAMMER MALLET
Smooth operator|FILE SAND PLANE CHISEL SAW CLAMP
The tool bench|DRILL BIT DRIVER WRENCH LEVEL VISE
`);j("Fruit",`
APPLE|A crisp orchard fruit that can be pressed for cider
PEAR|A sweet orchard fruit with a narrow neck
PLUM|A smooth-skinned stone fruit that becomes a prune
PEACH|A fuzzy-skinned stone fruit
CHERRY|A small stone fruit often perched on a sundae
APRICOT|A small orange stone fruit
ORANGE|A round citrus fruit divided into juicy segments
LEMON|A tart yellow citrus fruit
LIME|A green citrus fruit used in key pies
GRAPE|A small fruit grown in bunches on vines
BERRY|A small, juicy fruit such as a blueberry
MELON|A large fruit with a thick rind and juicy flesh
BANANA|A curved yellow fruit sold in bunches
MANGO|A tropical stone fruit with golden flesh
PAPAYA|A tropical fruit with orange flesh and black seeds
GUAVA|A tropical fruit often used in pink juice
FIG|A soft fruit with many tiny seeds inside
DATE|A sweet fruit grown on a particular palm
RAISIN|A dried grape
PRUNE|A dried plum
`,`
In the orchard|APPLE PEAR PLUM PEACH CHERRY APRICOT
Citrus sunshine|ORANGE LEMON LIME GRAPE MANGO GUAVA
A tropical escape|BANANA MANGO PAPAYA GUAVA LIME MELON
The fruit bowl|APPLE PEAR GRAPE BANANA ORANGE MELON
A little stone fruit|PLUM PEACH CHERRY APRICOT MANGO PRUNE
Sweet and dried|FIG DATE RAISIN PRUNE GRAPE PLUM
`);j("Vegetables",`
CARROT|An orange root vegetable famously associated with rabbits
TURNIP|A round root vegetable often purple at the top
BEET|A root vegetable that can stain fingers deep red
RADISH|A small, peppery root vegetable
POTATO|A starchy tuber used for fries and mash
YAM|A starchy edible tuber with a rough skin
ONION|A layered bulb that can make a cook cry
LEEK|A mild allium with a long white stem
GARLIC|A strongly flavored bulb divided into cloves
SHALLOT|A small onion relative with a delicate flavor
PEA|A small round green seed from a pod
BEAN|An edible seed often found in a long pod
CORN|A cereal with kernels growing on a cob
SQUASH|A vegetable family that includes pumpkins
KALE|A leafy cabbage relative popular in salads
SPINACH|A leafy green famously eaten by Popeye
LETTUCE|A leafy base for many salads
CHARD|A leafy vegetable with colorful edible stalks
CELERY|A crisp vegetable sold in ribbed stalks
FENNEL|A vegetable with an anise-flavored bulb
`,`
Back to our roots|CARROT TURNIP BEET RADISH POTATO YAM
Layers of flavor|ONION LEEK GARLIC SHALLOT FENNEL CELERY
Peas in a pod|PEA BEAN CORN SQUASH POTATO CARROT
Leaf it to me|KALE SPINACH LETTUCE CHARD CELERY FENNEL
The salad bar|LETTUCE RADISH CARROT BEET CELERY SPINACH
Roast dinner sides|POTATO TURNIP CARROT SQUASH ONION GARLIC
`);j("Herbs & spices",`
BASIL|A fragrant herb central to pesto
THYME|A tiny-leaved herb used in a bouquet garni
SAGE|A gray-green herb often paired with browned butter
MINT|A cooling herb used in tea and juleps
DILL|A feathery herb often used with pickles
CHIVE|A slender onion-flavored herb
PARSLEY|A leafy herb often used as a garnish
OREGANO|An aromatic herb often scattered over pizza
ROSEMARY|An herb with woody stems and needle-like leaves
TARRAGON|A French cooking herb with an anise-like flavor
CUMIN|An earthy spice often used in chili
CLOVES|Dried flower buds with a warm, pungent flavor
NUTMEG|A warm spice grated from a seed
GINGER|A pungent rhizome used fresh or dried
PEPPER|A seasoning ground from dried peppercorns
PAPRIKA|A red spice made from dried peppers
SAFFRON|A costly spice made from crocus stigmas
ANISE|A seed spice with a licorice-like flavor
VANILLA|A flavoring from an orchid's cured seedpods
SESAME|Tiny seeds used to make tahini
`,`
The herb garden|BASIL THYME SAGE MINT DILL CHIVE
Italian seasoning|BASIL OREGANO ROSEMARY PARSLEY PEPPER GARLIC
Warm spice cupboard|CUMIN CLOVES NUTMEG GINGER ANISE PEPPER
Freshly garnished|PARSLEY CHIVE DILL BASIL MINT TARRAGON
A pinch of color|PAPRIKA SAFFRON PEPPER CUMIN SESAME GINGER
Sweet aromatics|VANILLA ANISE CLOVES NUTMEG GINGER MINT
`.replace("PEPPER GARLIC","PEPPER THYME"));j("Dessert",`
CAKE|A sweet baked centerpiece for a birthday
ICING|A sweet topping spread over a cake
FUDGE|A soft, dense confection made with sugar and fat
CARAMEL|Sugar heated until golden brown
TOFFEE|A hard confection made by cooking sugar with butter
TRUFFLE|A small chocolate confection often dusted with cocoa
MOUSSE|A light, airy dessert with a whipped texture
SORBET|A frozen dessert made with fruit and sweetened water
GELATO|An Italian frozen dessert typically churned slowly
SUNDAE|Ice cream served with toppings and sauce
CUSTARD|A dessert thickened with eggs and milk
FLAN|A baked custard often topped with caramel
TART|An open pastry filled with fruit or custard
PIE|A filled pastry baked in a dish
CRUMBLE|A baked fruit dessert with a loose, crumbly topping
STRUDEL|A layered pastry rolled around a filling
DONUT|A fried ring or filled round of sweet dough
WAFFLE|A batter cake cooked in a patterned iron
CREPE|A very thin pancake that can hold a sweet filling
SYRUP|A thick, sweet liquid poured over dessert
`,`
Let them eat cake|CAKE ICING CUSTARD CARAMEL FUDGE TRUFFLE
Frozen delights|SORBET GELATO SUNDAE SYRUP CARAMEL FUDGE
Chocolate box|TRUFFLE FUDGE MOUSSE TOFFEE CARAMEL ICING
Just desserts|CUSTARD FLAN MOUSSE TART PIE CRUMBLE
Fruit under pastry|PIE TART CRUMBLE STRUDEL CUSTARD SYRUP
Sweet street food|DONUT WAFFLE CREPE SYRUP GELATO CARAMEL
`);j("Waterways",`
RIVER|A large natural flow of water toward a sea or lake
STREAM|A small natural flow of water
CREEK|A small watercourse, often narrower than a river
BROOK|A small flowing watercourse in a pastoral setting
SOURCE|The place where a river begins
MOUTH|Where a river empties into another body of water
DELTA|A sediment-built landform at a river's mouth
ESTUARY|Where fresh river water mixes with seawater
BANK|The land along the edge of a river
BED|The channel bottom over which a river flows
BEND|A curve in a river's course
MEANDER|A winding curve in a river
RAPIDS|A turbulent, fast-flowing stretch of river
FALLS|Water dropping over a steep rock edge
CASCADE|A small waterfall or a series of descending falls
POOL|A still, deep part of a stream
CANAL|An artificial waterway
LOCK|A chamber that raises or lowers boats in a canal
DAM|A barrier built to hold back water
RESERVOIR|An artificial lake used to store water
`,`
Down by the river|RIVER BANK BED BEND STREAM BROOK
From source to sea|SOURCE MOUTH DELTA ESTUARY RIVER MEANDER
Whitewater|RAPIDS FALLS CASCADE POOL STREAM BED
Canal boats|CANAL LOCK BANK DAM RESERVOIR WATER
A winding way|MEANDER BEND CREEK BROOK SOURCE BANK
Water in reserve|DAM RESERVOIR LOCK CANAL SOURCE POOL
`.replace("RESERVOIR WATER","RESERVOIR RIVER"));j("Night sky",`
STAR|A shining ball of gas seen as a point in the night sky
MOON|The bright natural satellite in Earth's night sky
DUSK|The dim period just after sunset
TWILIGHT|The soft light while the Sun is below the horizon
DAWN|The first appearance of light before sunrise
NIGHT|The time between sunset and sunrise
NORTH|The direction indicated by Polaris
POLARIS|The star currently close to the north celestial pole
ORION|The constellation with a distinctive three-star belt
LYRA|The constellation representing a small harp
VEGA|The brightest star in Lyra
SIRIUS|The brightest star in the night sky
AURORA|A colorful glow in the polar night sky
GLOW|A steady light without a visible flame
HALO|A luminous ring around the Sun or Moon
METEOR|A shooting star's actual phenomenon
LUNAR|Relating to the Moon
CRESCENT|The shape of a slender young Moon
PHASE|One stage in the Moon's cycle of appearances
ECLIPSE|An event that temporarily darkens the Sun or Moon
`,`
After the sunset|DUSK TWILIGHT NIGHT STAR MOON GLOW
Written in the stars|ORION LYRA VEGA SIRIUS POLARIS NORTH
Northern lights|AURORA GLOW NORTH NIGHT STAR POLARIS
Phases of the Moon|MOON LUNAR CRESCENT PHASE ECLIPSE HALO
Make a wish|METEOR STAR NIGHT GLOW ORION VEGA
Until the dawn|DAWN DUSK TWILIGHT NIGHT MOON CRESCENT
`);j("Geology",`
ROCK|A solid aggregate of natural minerals
MINERAL|A naturally occurring inorganic solid with a crystal structure
QUARTZ|A common mineral made of silicon dioxide
MICA|A mineral that splits into thin, shiny sheets
GRANITE|A coarse-grained igneous rock used for countertops
BASALT|A dark volcanic rock common on the ocean floor
MARBLE|Limestone transformed by heat and pressure
SLATE|A fine-grained rock that splits into flat sheets
SHALE|A layered sedimentary rock formed from mud
CHALK|A soft white limestone made from tiny marine remains
LAVA|Molten rock after it reaches the surface
MAGMA|Molten rock beneath Earth's surface
CRATER|A bowl-shaped depression at a volcano's top
VENT|An opening through which volcanic material escapes
FAULT|A fracture along which rock has moved
FOLD|A bend in rock layers caused by pressure
FOSSIL|Preserved evidence of ancient life
STRATA|Layers of rock viewed collectively
EROSION|The wearing away and transport of rock or soil
SEDIMENT|Particles deposited by water, wind, or ice
`,`
Rock collection|ROCK MINERAL QUARTZ MICA GRANITE BASALT
Volcanic temper|LAVA MAGMA CRATER VENT BASALT ROCK
Under pressure|MARBLE SLATE FOLD FAULT GRANITE MINERAL
Layers of history|STRATA FOSSIL SEDIMENT SHALE CHALK ROCK
Worn away|EROSION SEDIMENT ROCK CHALK SHALE STRATA
Crystal clear|QUARTZ MICA MINERAL GRANITE MARBLE ROCK
`);j("Human body",`
BONE|The hard tissue forming most of the skeleton
SKULL|The bony case protecting the brain
RIB|One of the curved bones protecting the chest
SPINE|The column of vertebrae supporting the back
JOINT|The place where two bones meet
KNEE|The joint between the thigh and lower leg
ELBOW|The joint between upper arm and forearm
WRIST|The joint between the hand and forearm
MUSCLE|Tissue that contracts to produce movement
TENDON|A band attaching muscle to bone
HEART|The muscular organ that pumps blood
PULSE|The rhythmic beat felt in an artery
VEIN|A blood vessel carrying blood toward the heart
ARTERY|A blood vessel carrying blood away from the heart
LUNG|One of the paired organs used to breathe
BREATH|One inhalation and exhalation
BRAIN|The organ central to thought and nervous control
NERVE|A bundle carrying signals through the body
SKIN|The body's largest organ by surface area
TOUCH|The sense experienced through receptors in the skin
`,`
The bare bones|BONE SKULL RIB SPINE JOINT KNEE
Bend and stretch|JOINT KNEE ELBOW WRIST MUSCLE TENDON
Matters of the heart|HEART PULSE VEIN ARTERY MUSCLE BREATH
Take a breath|LUNG BREATH HEART RIB MUSCLE PULSE
A nervous connection|BRAIN NERVE TOUCH SKIN SPINE SKULL
Skin deep|SKIN TOUCH NERVE VEIN MUSCLE PULSE
`);j("Healthcare",`
NURSE|A healthcare professional providing hands-on patient care
DOCTOR|A medical practitioner who diagnoses and treats illness
CLINIC|A facility for outpatient healthcare
WARD|A hospital unit with beds for patients
GAUZE|A loosely woven material used to dress wounds
SPLINT|A rigid support used to immobilize an injured limb
CAST|A hard covering that supports a healing broken bone
SLING|A fabric support for an injured arm
PULSE|The rhythmic beat checked at the wrist
FEVER|A body temperature higher than normal
COUGH|A sudden expulsion of air from the lungs
SYMPTOM|A reported sign of a health condition
THERAPY|Treatment intended to restore or improve health
REST|A pause from activity that supports recovery
HYGIENE|Practices that help maintain cleanliness and health
SOAP|A cleaning substance used for handwashing
VACCINE|A preparation that helps train an immune response
IMMUNE|Relating to the body's defense against disease
DOSE|A measured amount of medicine
TABLET|A compressed solid form of medicine
`,`
At the clinic|CLINIC NURSE DOCTOR WARD PULSE SYMPTOM
First aid kit|GAUZE SPLINT CAST SLING SOAP REST
Signs and symptoms|FEVER COUGH SYMPTOM PULSE DOCTOR NURSE
On the mend|THERAPY REST CAST SLING SPLINT WARD
Clean hands|HYGIENE SOAP NURSE CLINIC IMMUNE VACCINE
The medicine cabinet|DOSE TABLET VACCINE IMMUNE DOCTOR CLINIC
`);j("Clothing",`
SHIRT|An upper-body garment often with buttons and a collar
BLOUSE|A loose-fitting upper-body garment
SWEATER|A knitted garment worn for warmth
VEST|A sleeveless upper-body garment
COAT|An outer garment worn over other clothes
JACKET|A shorter outer garment with sleeves
PARKA|A hooded coat made for cold conditions
CAPE|A sleeveless outer garment hanging from the shoulders
SKIRT|A garment hanging from the waist without separate legs
DRESS|A one-piece garment with an upper part and a skirt
SUIT|A matching jacket and trousers or skirt
TUXEDO|A formal evening suit often worn with a bow tie
SOCK|A fitted foot covering worn inside a shoe
BOOT|Footwear extending above the ankle
SANDAL|Open footwear held on by straps
SNEAKER|A rubber-soled shoe for casual wear or sport
SCARF|A long strip of fabric worn around the neck
GLOVE|A hand covering with separate fingers
BELT|A band worn around the waist
HAT|A shaped covering for the head
`,`
Layer by layer|SHIRT BLOUSE SWEATER VEST COAT JACKET
Out in the cold|COAT PARKA SCARF GLOVE BOOT HAT
All dressed up|DRESS SUIT TUXEDO SHIRT BELT SKIRT
Put your best foot forward|SOCK BOOT SANDAL SNEAKER BELT HAT
The finishing touch|SCARF GLOVE BELT HAT CAPE VEST
In the wardrobe|SKIRT DRESS BLOUSE JACKET SWEATER SUIT
`);j("Dance",`
BALLET|A classical dance form with codified positions
POINTE|A ballet technique dancing on the tips of the toes
BARRE|A support rail used during ballet practice
PLIE|A ballet movement bending the knees
TUTU|A short skirt worn by some ballet dancers
LEAP|A spring from the floor into the air
TANGO|A partnered dance with roots around the Rio de la Plata
WALTZ|A ballroom dance commonly in triple time
FOXTROT|A smooth ballroom dance with slow and quick steps
POLKA|A lively dance commonly in duple time
SALSA|A social dance sharing its name with a spicy sauce
MAMBO|A Cuban dance associated with syncopated rhythms
RUMBA|A dance name linked to Afro-Cuban music traditions
SAMBA|A Brazilian dance associated with Carnival
TAP|A dance style using shoes fitted with metal plates
SWING|A dance family associated with big-band jazz
STEP|A single movement of the feet in a dance
TURN|A rotation of the body in a dance
RHYTHM|A pattern of beats guiding dancers
PARTNER|The person dancing with you in a couple
`,`
At the ballet barre|BALLET POINTE BARRE PLIE TUTU LEAP
Ballroom evening|TANGO WALTZ FOXTROT POLKA PARTNER TURN
Latin rhythms|SALSA MAMBO RUMBA SAMBA RHYTHM STEP
Tap your feet|TAP SWING RHYTHM STEP TURN LEAP
Shall we dance|PARTNER WALTZ TANGO STEP TURN RHYTHM
Across the floor|LEAP TURN STEP POINTE SWING POLKA
`);j("Language",`
NOUN|A word that names a person, place, or thing
VERB|A word expressing an action or state
ADJECTIVE|A word that describes a noun
ADVERB|A word that can modify a verb
PRONOUN|A word that can stand in for a noun
CLAUSE|A group of words containing a subject and predicate
COMMA|A punctuation mark that separates list items
COLON|A punctuation mark often introducing a list
PERIOD|A punctuation mark ending a statement
DASH|A punctuation mark used for an interruption or break
QUOTE|Repeat someone else's exact words
PHRASE|A group of words forming a meaningful unit
IDIOM|An expression whose meaning is not simply literal
SIMILE|A comparison often using like or as
METAPHOR|A description of one thing as if it were another
PUN|A joke exploiting multiple meanings or similar sounds
VOWEL|A speech sound made without a major vocal-tract obstruction
SYLLABLE|A unit of pronunciation centered on a vowel sound
ACCENT|A distinctive way of pronouncing a language
DIALECT|A variety of language associated with a group or region
`,`
Parts of speech|NOUN VERB ADJECTIVE ADVERB PRONOUN CLAUSE
Pause for punctuation|COMMA COLON PERIOD DASH QUOTE PHRASE
Figuratively speaking|IDIOM SIMILE METAPHOR PUN PHRASE QUOTE
The sound of words|VOWEL SYLLABLE ACCENT DIALECT NOUN VERB
A play on words|PUN IDIOM METAPHOR SIMILE QUOTE PHRASE
Build a sentence|CLAUSE PHRASE NOUN VERB ADJECTIVE PRONOUN
`);j("Office",`
DESK|A work surface with room for a laptop and notes
CHAIR|A seat with a back for one person
DRAWER|A sliding storage compartment in a desk
LAMP|A source of light on a work surface
PEN|An ink-writing instrument
PENCIL|A writing tool with an erasable graphite core
PAPER|Thin sheets used for writing and printing
ERASER|A tool that removes pencil marks
STAPLE|A wire fastener driven through sheets of paper
CLIP|A bent-wire holder for loose papers
FOLDER|A folded cover holding documents together
FILE|A collection of related documents
MEMO|A brief written message within an organization
AGENDA|A list of items for a meeting
MINUTES|The written record of a meeting
REPORT|A structured account of findings or work
PRINTER|A device that produces physical copies of digital pages
SCANNER|A device that digitizes physical documents
COPIER|A machine that duplicates printed pages
STAPLER|A tool that fastens pages using bent wire
`,`
The desk drawer|DESK DRAWER PEN PENCIL ERASER CLIP
Paperwork|PAPER FILE FOLDER STAPLE CLIP REPORT
In the meeting|AGENDA MINUTES MEMO REPORT PEN PAPER
Office machines|PRINTER SCANNER COPIER STAPLER DESK LAMP
Write this down|PEN PENCIL PAPER ERASER MEMO REPORT
A place to work|DESK CHAIR DRAWER LAMP FOLDER PRINTER
`);j("School",`
CLASS|A group of students learning together
LESSON|A period of teaching on a particular subject
TEACHER|A person who guides learning in a classroom
PUPIL|A student, especially in school
CHALK|A soft stick used to write on a traditional board
BOARD|A classroom surface for displaying a lesson
DESK|A student's table for reading and writing
BOOK|A bound collection of pages used for study
PENCIL|A graphite tool used for writing answers
ERASER|A tool used to remove a pencil mistake
RULER|A marked straightedge used in a geometry lesson
ATLAS|A book of maps used in geography
QUIZ|A short test of knowledge
EXAM|A formal assessment of what a student has learned
GRADE|A mark representing a student's achievement
ESSAY|A short written piece developing an argument or idea
RECESS|A break for play during the school day
LUNCH|The midday meal between lessons
LIBRARY|A room or building for borrowing books
DIPLOMA|A document awarded after completing a course of study
`,`
Back to school|CLASS LESSON TEACHER PUPIL DESK BOOK
The pencil case|PENCIL ERASER RULER CHALK BOOK ATLAS
Test your knowledge|QUIZ EXAM GRADE ESSAY LESSON PUPIL
Beyond the classroom|RECESS LUNCH LIBRARY BOOK ATLAS PUPIL
At the chalkboard|CHALK BOARD TEACHER CLASS RULER LESSON
Graduation day|DIPLOMA GRADE EXAM ESSAY TEACHER CLASS
`);j("Farm",`
BARN|A farm building for livestock or harvested crops
SILO|A tall structure used to store grain or silage
FIELD|An area of land used to grow crops
FENCE|A barrier keeping livestock in a pasture
TRACTOR|A powerful farm vehicle used to pull equipment
PLOW|A tool used to turn soil before planting
SEED|A small beginning sown to grow a crop
HARVEST|The gathering of ripe crops
WHEAT|A cereal grain commonly milled into bread flour
BARLEY|A cereal grain used in malt and soups
OATS|A cereal grain often served as porridge
RYE|A cereal grain used in a dark, hearty bread
COW|A female bovine often kept for milk
CALF|A young bovine
SHEEP|A wool-bearing farm animal
LAMB|A young sheep
GOAT|A horned farm animal known for sure footing
PIG|A stout farm animal with a snout
HEN|A female chicken
ROOSTER|An adult male chicken
`,`
Down on the farm|BARN SILO FIELD FENCE TRACTOR PLOW
Sow and reap|SEED HARVEST FIELD PLOW WHEAT BARLEY
Amber waves|WHEAT BARLEY OATS RYE FIELD HARVEST
The dairy barn|COW CALF BARN FIELD FENCE GOAT
Counting sheep|SHEEP LAMB GOAT FIELD FENCE BARN
In the farmyard|HEN ROOSTER PIG COW BARN FENCE
`);j("Desert",`
DUNE|A mound of sand shaped by the wind
SAND|The granular material covering many desert dunes
OASIS|A fertile spot where desert water reaches the surface
MIRAGE|An optical illusion that may suggest distant water
CACTUS|A desert plant often covered in spines
AGAVE|A succulent whose varieties can be used for tequila
ALOE|A succulent known for gel inside its leaves
YUCCA|A dryland plant with stiff, pointed leaves
CAMEL|A desert-adapted mammal with one or two humps
FENNEC|A small desert fox with very large ears
GECKO|A small lizard often able to climb smooth surfaces
VIPER|A venomous snake with hinged fangs
SCORPION|An arachnid with pincers and a stinging tail
LIZARD|A usually four-legged, scaly reptile
ARID|Extremely dry, as a desert climate
HEAT|A defining condition of a hot desert afternoon
SHADE|Shelter from direct sunlight
NOMAD|A person whose life involves moving from place to place
CARAVAN|A group traveling together across a desert
WIND|Moving air that sculpts desert dunes
WADI|A dry channel that may fill after rain
`,`
Shifting sands|DUNE SAND WIND MIRAGE ARID HEAT
An oasis awaits|OASIS SHADE WADI CARAVAN NOMAD CAMEL
Spines and succulents|CACTUS AGAVE ALOE YUCCA ARID SAND
Desert dwellers|CAMEL FENNEC GECKO VIPER SCORPION LIZARD
The long caravan|CARAVAN NOMAD CAMEL OASIS DUNE SAND
Out of the heat|HEAT SHADE MIRAGE ARID OASIS WADI
`);j("Polar world",`
ARCTIC|The polar region surrounding the North Pole
TUNDRA|A treeless biome with permanently frozen subsoil
ICEBERG|A large floating mass broken from a glacier
FLOE|A floating sheet of sea ice
GLACIER|A slowly moving mass of land ice
ICECAP|An extensive covering of ice over land
SEAL|A streamlined marine mammal with flippers
WALRUS|A large marine mammal with long tusks
NARWHAL|An Arctic whale famous for a long spiral tusk
BELUGA|A pale Arctic whale nicknamed the sea canary
PENGUIN|A flightless Southern Hemisphere seabird
PUFFIN|A northern seabird with a colorful bill
TERN|A seabird whose Arctic species makes an immense migration
KRILL|Tiny crustaceans important in polar food webs
BLUBBER|A thick insulating fat layer in marine mammals
FUR|An insulating coat of animal hair
PARKA|A hooded outer coat associated with Arctic clothing
SLED|A runner-mounted vehicle used on snow and ice
IGLOO|A dome-shaped shelter built from snow blocks
AURORA|A luminous polar display caused by charged particles
`,`
North of the Arctic Circle|ARCTIC TUNDRA FLOE ICECAP AURORA PARKA
Ice, ice, everywhere|ICEBERG FLOE GLACIER ICECAP ARCTIC TUNDRA
Under polar seas|NARWHAL BELUGA WALRUS SEAL KRILL BLUBBER
Birds at the ends of Earth|PENGUIN PUFFIN TERN KRILL FLOE GLACIER
Keeping warm|BLUBBER FUR PARKA IGLOO SLED ARCTIC
Across the frozen north|SLED IGLOO AURORA TUNDRA PARKA FLOE
`);j("Rainforest",`
JUNGLE|A dense tropical forest
CANOPY|The interlocking upper layer of a forest
LIANA|A woody climbing vine of tropical forests
VINE|A plant with a long climbing or trailing stem
ORCHID|A flowering plant family with many tropical members
BROMELIAD|A tropical plant family that includes pineapples
FERN|A nonflowering plant with fronds
MOSS|A small green plant thriving on damp surfaces
JAGUAR|A large spotted cat native to the Americas
TAPIR|A hoofed mammal with a short, flexible snout
SLOTH|A slow-moving tree-dwelling mammal
TOUCAN|A tropical bird with a very large colorful bill
MACAW|A large, long-tailed tropical parrot
FROG|An amphibian associated with leaping and moist skin
BOA|A large snake that kills by constriction
GECKO|A small tropical lizard with adhesive toe pads
HUMID|Rich in atmospheric moisture
RAIN|The precipitation that gives a rainforest its name
RIVER|A major watercourse through a forest
ROOT|A plant structure that anchors it in the soil
`,`
Beneath the canopy|JUNGLE CANOPY LIANA VINE HUMID RAIN
Tropical blooms|ORCHID BROMELIAD FERN MOSS VINE ROOT
Hidden in the green|JAGUAR TAPIR SLOTH BOA GECKO JUNGLE
A flash of feathers|TOUCAN MACAW CANOPY VINE RIVER RAIN
After the tropical rain|RAIN HUMID FROG MOSS RIVER FERN
Life in the treetops|SLOTH CANOPY LIANA MACAW TOUCAN ORCHID
`.replace("L IANA","LIANA"));j("Camping",`
TENT|A portable shelter made of fabric
PEG|A stake securing a tent to the ground
POLE|A support holding a tent upright
FLY|A tent's outer waterproof sheet
CAMP|A temporary outdoor place to stay
SITE|The spot selected for a tent or camper
PACK|A bag carried on the back during a hike
MAT|A sleeping pad laid under a camping bag
FIRE|A crackling camp source of warmth and light
TINDER|Dry, easily ignited material used to start a fire
KINDLING|Small sticks used to build up a fire
EMBER|A glowing piece left after a fire burns down
COMPASS|A tool whose needle helps find north
MAP|A drawing showing paths and terrain
TRAIL|A marked route through the countryside
TORCH|A portable electric light, in British usage
LANTERN|A portable light with a protective enclosure
FLASK|A container that can keep a drink warm on a hike
ROPE|A useful length of twisted fibers in camp
KNOT|An interlaced fastening in a piece of cord
`,`
Pitch perfect|TENT PEG POLE FLY CAMP SITE
Around the campfire|FIRE TINDER KINDLING EMBER CAMP LANTERN
Off the beaten track|COMPASS MAP TRAIL PACK FLASK TORCH
Under canvas|TENT FLY MAT POLE PEG SITE
Light up the night|TORCH LANTERN FIRE EMBER CAMP TINDER
A knotty problem|ROPE KNOT PEG POLE FLY TENT
`);j("Sailing",`
SAIL|A sheet of material used to catch the wind
MAST|The upright spar carrying a vessel's sails
BOOM|A spar supporting the foot of a sail
RIGGING|The ropes and cables supporting a sailboat's spars
HULL|The main watertight body of a vessel
KEEL|The lengthwise structure along a vessel's bottom
BOW|The forward end of a ship
STERN|The rear end of a ship
PORT|The left side of a vessel when facing forward
STARBOARD|The right side of a vessel when facing forward
HELM|The steering position or apparatus of a ship
RUDDER|The moving surface used to steer a boat
ANCHOR|A heavy device used to hold a vessel in place
BUOY|A floating marker guiding or warning mariners
DOCK|A structure alongside which a boat can be secured
PIER|A raised walkway extending over water
KNOT|A nautical speed unit of one sea mile per hour
TACK|Change a sailboat's direction by turning its bow through wind
GYBE|Change a sailboat's direction with its stern passing through wind
CHART|A map used for navigation on water
`,`
Set sail|SAIL MAST BOOM RIGGING HULL KEEL
Fore and aft|BOW STERN PORT STARBOARD HULL KEEL
At the helm|HELM RUDDER TACK GYBE KNOT CHART
Safe harbor|ANCHOR BUOY DOCK PIER CHART PORT
Learning the ropes|RIGGING MAST BOOM SAIL TACK GYBE
Chart a course|CHART BUOY KNOT HELM PORT STARBOARD
`);j("Celebrations",`
CANDLE|A small flame-topped cylinder placed on a birthday cake
CAKE|A baked centerpiece for a birthday celebration
GIFT|A wrapped present for someone
WISH|A hopeful thought before blowing out birthday candles
HEART|A shape used to symbolize love
ROSE|A flower traditionally given on Valentine's Day
CARD|A folded greeting sent for a special occasion
LOVE|The feeling celebrated on Valentine's Day
PUMPKIN|An orange squash carved for Halloween
GHOST|A spooky figure often dressed in a white sheet
WITCH|A Halloween character with a pointed hat
COSTUME|An outfit worn to become a Halloween character
SANTA|The gift-bringing figure of a Christmas tradition
CAROL|A song traditionally sung at Christmas
HOLLY|A glossy-leaved plant with red holiday berries
TINSEL|Sparkly strands draped on a holiday tree
TOAST|A spoken tribute made with raised glasses
CHEER|A shout of celebration or encouragement
PARTY|A gathering to celebrate an occasion
CONFETTI|Small pieces of paper tossed at a celebration
`,`
Make a birthday wish|CANDLE CAKE GIFT WISH CARD PARTY
Love letters|HEART ROSE CARD LOVE GIFT WISH
A haunting evening|PUMPKIN GHOST WITCH COSTUME CANDLE PARTY
A Christmas story|SANTA CAROL HOLLY TINSEL GIFT CARD
Here's to a new year|TOAST CHEER PARTY CONFETTI WISH CARD
The art of giving|GIFT CARD LOVE WISH ROSE CHEER
`);j("Time",`
CLOCK|A device showing the time of day
WATCH|A small timepiece worn on the wrist
DIAL|The face of an analog timepiece
HAND|One of an analog clock's moving pointers
TICK|A short sound made by a running clock
CHIME|A musical sound marking the hour
SECOND|One sixtieth of a minute
MINUTE|One sixtieth of an hour
HOUR|A span of sixty minutes
DAY|One rotation of Earth relative to the Sun, approximately
WEEK|A period of seven days
MONTH|One of twelve divisions of a calendar year
YEAR|The time taken for Earth to travel around the Sun
LEAP|The kind of year that has February 29
DATE|A particular day identified in a calendar
CALENDAR|A system for organizing days and months
DECADE|A span of ten years
CENTURY|A span of one hundred years
ERA|A long period distinguished by a particular character
EPOCH|The start of a distinctive period or time standard
`,`
Watch this space|WATCH CLOCK DIAL HAND TICK CHIME
Every second counts|SECOND MINUTE HOUR TICK CLOCK HAND
A week at a time|DAY WEEK MONTH DATE CALENDAR YEAR
One extra day|LEAP YEAR DATE CALENDAR DAY MONTH
Through the ages|DECADE CENTURY ERA EPOCH YEAR CALENDAR
Strike the hour|CHIME HOUR CLOCK DIAL HAND TICK
`);j("Mathematics",`
SUM|The result of adding numbers
TOTAL|The complete amount after addition
PLUS|The sign or word indicating addition
MINUS|The sign or word indicating subtraction
FACTOR|A whole number that divides another exactly
PRIME|A whole number greater than one with exactly two positive divisors
DIGIT|One symbol used to write a number
ZERO|The number representing no quantity
ANGLE|The figure formed by two rays meeting at a point
ARC|A part of a circle's circumference
RADIUS|The distance from a circle's center to its edge
CHORD|A straight segment joining two points on a circle
SQUARE|A four-sided shape with equal sides and right angles
CUBE|A solid with six square faces
CONE|A solid tapering from a circular base to a point
SPHERE|A perfectly round three-dimensional surface
RATIO|A comparison between two quantities by division
MEAN|The arithmetic average of a set of numbers
MODE|The most frequent value in a data set
MEDIAN|The middle value in an ordered data set
`,`
It all adds up|SUM TOTAL PLUS MINUS DIGIT ZERO
Prime time|PRIME FACTOR DIGIT ZERO RATIO SUM
Around in circles|ARC RADIUS CHORD ANGLE SPHERE CONE
In good shape|SQUARE CUBE CONE SPHERE ANGLE ARC
The average day|MEAN MODE MEDIAN TOTAL SUM RATIO
A numbers game|RATIO FACTOR PLUS MINUS PRIME DIGIT
`);j("Physics",`
FORCE|A push or pull that can change motion
MASS|A measure of an object's inertia
SPEED|Distance traveled per unit time
MOTION|A change in position over time
INERTIA|An object's resistance to a change in its motion
GRAVITY|The attraction between objects with mass
ENERGY|The capacity to do work
WORK|Force acting through a displacement
POWER|The rate at which work is done
WATT|The SI unit of power
HEAT|Energy transferred because of a temperature difference
JOULE|The SI unit of energy
WAVE|A disturbance that transfers energy
CREST|The highest point of a wave
TROUGH|The lowest point of a wave
AMPLITUDE|The greatest displacement from a wave's rest position
CHARGE|The property of matter responsible for electric interaction
VOLT|The unit of electric potential difference
AMPERE|The SI unit of electric current
OHM|The unit of electrical resistance
`,`
A moving experience|MOTION SPEED FORCE MASS INERTIA GRAVITY
What goes up|GRAVITY MASS FORCE MOTION SPEED INERTIA
Full of energy|ENERGY WORK POWER WATT HEAT JOULE
Make some waves|WAVE CREST TROUGH AMPLITUDE ENERGY MOTION
An electric feeling|CHARGE VOLT AMPERE OHM POWER WATT
By the units|WATT JOULE VOLT AMPERE OHM MASS
`);j("Chemistry",`
ATOM|The smallest unit that retains an element's properties
PROTON|A positively charged particle in an atomic nucleus
NEUTRON|An electrically neutral particle in an atomic nucleus
ELECTRON|A negatively charged particle surrounding an atomic nucleus
ELEMENT|A substance made of only one kind of atom
ISOTOPE|A form of an element with a different neutron count
CARBON|The element central to organic chemistry
OXYGEN|The element with atomic number eight
IRON|The metal whose chemical symbol is Fe
GOLD|The precious metal whose chemical symbol is Au
SILVER|The metal whose chemical symbol is Ag
COPPER|The reddish metal whose chemical symbol is Cu
ACID|A proton donor in the Bronsted-Lowry definition
BASE|A proton acceptor in the Bronsted-Lowry definition
SALT|An ionic compound often formed by neutralization
ION|An atom or molecule with a net electric charge
BOND|An interaction holding atoms together
MOLE|The SI unit of amount of substance
SOLUTE|The substance dissolved in a solution
SOLVENT|The substance that dissolves another in a solution
`,`
Inside the atom|ATOM PROTON NEUTRON ELECTRON ELEMENT ISOTOPE
Heavy metal|IRON GOLD SILVER COPPER ELEMENT ATOM
Organic beginnings|CARBON OXYGEN BOND MOLE ELEMENT ATOM
A balanced reaction|ACID BASE SALT ION BOND MOLE
All mixed up|SOLUTE SOLVENT SALT ION MOLE ACID
The periodic table|ELEMENT CARBON OXYGEN IRON GOLD SILVER
`);j("Light & color",`
LIGHT|Electromagnetic radiation visible to the human eye
RAY|A narrow directed line of light
BEAM|A directed stream of light
PHOTON|A quantum of electromagnetic radiation
PRISM|An optical object that can split white light into colors
SPECTRUM|The range of colors produced by dispersing white light
RAINBOW|An arc of colors formed by sunlight and water droplets
REFRACT|Bend as light passes between media
MIRROR|A polished surface that reflects an image
REFLECT|Bounce light back from a surface
LENS|A shaped transparent object used to focus light
FOCUS|The point where converging rays meet
RED|The rainbow color with the longest visible wavelengths
ORANGE|The rainbow color between red and yellow
YELLOW|The bright rainbow color between orange and green
GREEN|The rainbow color between yellow and blue
BLUE|The color of a clear daytime sky
VIOLET|The visible spectrum color with the shortest wavelengths
SHADOW|A dark region where light has been blocked
SHADE|Partial darkness created by shelter from light
`,`
Over the rainbow|RAINBOW RED ORANGE YELLOW GREEN BLUE
Through a prism|PRISM SPECTRUM REFRACT LIGHT RAY VIOLET
Mirror, mirror|MIRROR REFLECT LENS FOCUS BEAM RAY
In the spotlight|LIGHT BEAM RAY PHOTON FOCUS SHADOW
Light and shade|SHADOW SHADE LIGHT REFLECT MIRROR BEAM
A sharper image|LENS FOCUS REFRACT RAY LIGHT PHOTON
`);j("Communication",`
LETTER|A written message sent to someone
STAMP|A small label showing postage has been paid
ENVELOPE|A folded paper cover for a letter
POST|Send a letter through the mail
PARCEL|A wrapped package sent or delivered
ADDRESS|The location written on a mailed item
PHONE|A device used to speak with someone at a distance
CALL|A conversation made over a telephone
DIAL|Enter a telephone number
RING|The sound announcing an incoming call
VOICE|The sound produced when a person speaks
MESSAGE|Information sent from one person to another
RADIO|A medium using transmitted electromagnetic signals
SIGNAL|An encoded transmission carrying information
MORSE|A code based on dots and dashes
CODE|A system of symbols representing information
EMAIL|A digital message sent over a network
INBOX|The place where received digital messages collect
REPLY|An answer to a message
SEND|Dispatch a message to its recipient
`,`
Sealed with a stamp|LETTER STAMP ENVELOPE POST PARCEL ADDRESS
On the line|PHONE CALL DIAL RING VOICE MESSAGE
A message in Morse|MORSE CODE SIGNAL RADIO MESSAGE SEND
You've got mail|EMAIL INBOX REPLY SEND MESSAGE ADDRESS
Return to sender|REPLY ADDRESS LETTER POST ENVELOPE STAMP
Loud and clear|VOICE SIGNAL RADIO CALL PHONE MESSAGE
`);j("Working lives",`
CHEF|A professional cook who may lead a kitchen
BAKER|A person who makes bread and pastries
BARISTA|A person who prepares and serves coffee
WAITER|A person who serves food at restaurant tables
PILOT|A person qualified to operate an aircraft
DRIVER|A person who operates a road vehicle
SAILOR|A person who works aboard a ship
PORTER|A worker who carries luggage or goods
MASON|A craftsperson who builds with brick or stone
PLUMBER|A tradesperson who installs and repairs water pipes
WELDER|A worker who joins metal using heat
JOINER|A craftsperson who makes wooden fittings and joints
ARTIST|A person who creates visual or other creative work
WRITER|A person who creates written work
EDITOR|A person who prepares written work for publication
ACTOR|A person who portrays characters for an audience
NURSE|A professional who cares for patients
TEACHER|A person who helps students learn
FARMER|A person who raises crops or livestock
TAILOR|A person who makes or alters fitted clothing
`,`
Service with a smile|CHEF BAKER BARISTA WAITER PORTER DRIVER
People who move us|PILOT DRIVER SAILOR PORTER WAITER FARMER
Built by hand|MASON PLUMBER WELDER JOINER TAILOR FARMER
Creative calling|ARTIST WRITER EDITOR ACTOR TAILOR CHEF
Everyday helpers|NURSE TEACHER FARMER TAILOR PLUMBER BAKER
Words at work|WRITER EDITOR TEACHER ACTOR ARTIST BARISTA
`);j("The senses",`
SIGHT|The sense that lets us perceive light and color
SOUND|Vibrations perceived through hearing
TOUCH|The sense that perceives pressure and texture
TASTE|The sense experienced by the tongue's receptors
SMELL|The sense that detects airborne chemicals
SENSE|A way the body perceives its surroundings
SWEET|The taste of sugar
SOUR|The taste associated with lemon juice
SALTY|The taste associated with table salt
BITTER|The taste associated with unsweetened cocoa
UMAMI|The savory basic taste associated with glutamate
AROMA|A distinctive, often pleasant smell
SOFT|Yielding easily to pressure
ROUGH|Having an uneven or coarse surface
SMOOTH|Having an even surface without roughness
SILKY|Smooth and lustrous to the touch
ECHO|A sound reflected back to its source
PITCH|How high or low a sound seems
HUSH|A sudden or deliberate silence
VIVID|Strikingly bright and clear, as a color
`,`
A feast for the senses|SIGHT SOUND TOUCH TASTE SMELL SENSE
Sweet, sour, savory|SWEET SOUR SALTY BITTER UMAMI TASTE
Follow your nose|SMELL AROMA SWEET BITTER SOUR SENSE
A touch of texture|SOFT ROUGH SMOOTH SILKY TOUCH SENSE
Can you hear it|SOUND ECHO PITCH HUSH SENSE VIVID
A colorful world|SIGHT VIVID SMOOTH SILKY SENSE TOUCH
`);j("World kitchen",`
PASTA|Italian noodles made from flour and water or eggs
RISOTTO|An Italian rice dish cooked by gradually adding broth
PESTO|A sauce traditionally blending basil, pine nuts, cheese, and oil
PIZZA|A baked dough base topped with sauce and other ingredients
SUSHI|A Japanese dish centered on seasoned rice
RAMEN|Japanese noodles typically served in broth
MISO|A Japanese fermented soybean paste
TOFU|A bean-curd food made from soy milk
TACO|A tortilla folded around a filling
SALSA|A sauce whose name is Spanish for sauce
MOLE|A family of complex Mexican sauces
QUESO|The Spanish word for cheese
CURRY|A broad term for seasoned dishes associated with South Asia
NAAN|A leavened flatbread often cooked in a tandoor
DAL|Split pulses, or a dish cooked from them
RAITA|A yogurt-based accompaniment in South Asian cooking
HUMMUS|A spread traditionally made from chickpeas and tahini
PITA|A round flatbread that can form a pocket
FALAFEL|Fried patties often made from chickpeas or fava beans
TAHINI|A paste made from ground sesame seeds
`,`
An Italian table|PASTA RISOTTO PESTO PIZZA SALSA QUESO
A taste of Japan|SUSHI RAMEN MISO TOFU PASTA DAL
Taco night|TACO SALSA MOLE QUESO PITA TOFU
The spice route|CURRY NAAN DAL RAITA RICE MISO
A Middle Eastern spread|HUMMUS PITA FALAFEL TAHINI NAAN TOFU
Meatless around the world|TOFU DAL HUMMUS FALAFEL PESTO MISO
`.replace("RAITA RICE","RAITA TOFU"));j("Mysteries",`
CLUE|A detail that helps solve a mystery
SLEUTH|An informal name for a detective
CASE|A mystery or investigation to be solved
PROOF|Evidence sufficient to establish a fact
ALIBI|A claim of being elsewhere when an event occurred
MOTIVE|The reason someone might commit an act
SUSPECT|A person thought possibly responsible for an offense
WITNESS|A person who saw an event occur
TRACE|A small sign left behind
PRINT|An impression that may identify a finger or shoe
TRAIL|A sequence of clues followed in an investigation
SCENE|The location where a particular event occurred
SECRET|Information deliberately kept hidden
CIPHER|A system for concealing a message by changing its symbols
RIDDLE|A puzzling question with an indirect answer
ENIGMA|Something difficult to understand or explain
KEY|The information needed to decode an encrypted message
CODE|A system of symbols used to conceal or convey meaning
TWIST|An unexpected turn in a mystery's plot
REVEAL|The moment when a mystery's answer becomes known
`,`
The plot thickens|CASE SUSPECT MOTIVE ALIBI WITNESS TWIST
Follow the clues|CLUE TRACE PRINT TRAIL SCENE SLEUTH
Crack the code|CIPHER CODE KEY SECRET PROOF REVEAL
Riddle me this|RIDDLE ENIGMA CLUE SECRET KEY REVEAL
The final reveal|REVEAL PROOF TWIST CASE SLEUTH MOTIVE
A well-kept secret|SECRET CIPHER ENIGMA ALIBI WITNESS CODE
`);function Vd(r){let E=2166136261;for(let y=0;y<r.length;y++)E=Math.imul(E^r.charCodeAt(y),16777619);return E>>>0}function po(r){let E=Vd(String(r));return()=>{E|=0,E=E+1831565813|0;let y=Math.imul(E^E>>>15,1|E);return y=y+Math.imul(y^y>>>7,61|y)^y,((y^y>>>14)>>>0)/4294967296}}function vo(r,E){const y=[...r];for(let s=y.length-1;s>0;s--){const b=Math.floor(E()*(s+1));[y[s],y[b]]=[y[b],y[s]]}return y}const vE="America/New_York",wl="2026-01-01";function Ln(r=new Date){const E=new Intl.DateTimeFormat("en-US",{timeZone:vE,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(r),y=s=>E.find(b=>b.type===s).value;return`${y("year")}-${y("month")}-${y("day")}`}function ba(r){if(!/^\d{4}-\d{2}-\d{2}$/.test(r))return null;const E=new Date(`${r}T12:00:00Z`);return!isNaN(E)&&E.toISOString().slice(0,10)===r?E:null}function Ul(r,E){const y=ba(r);if(!y)throw new Error("Invalid date");return y.setUTCDate(y.getUTCDate()+E),y.toISOString().slice(0,10)}function Zi(r,E={weekday:"long",month:"long",day:"numeric",year:"numeric"}){return new Intl.DateTimeFormat("en-US",{...E,timeZone:"UTC"}).format(ba(r))}function bE(r,E){return Array.from({length:new Date(Date.UTC(r,E,0)).getUTCDate()},(y,s)=>`${r}-${String(E).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)}const NE=kd.flatMap(r=>r.themes.map(E=>({...E,category:r.category,words:r.words,focus:[...new Set(E.focus)]}))),Ml=vo(NE,po("daily-cross-theme-calendar-v1")),bo=[];for(let r=0;r<12;r++)for(let E=1;E<=new Date(Date.UTC(2e3,r+1,0)).getUTCDate();E++)bo.push(`${String(r+1).padStart(2,"0")}-${String(E).padStart(2,"0")}`);const LE={"01-01":"Here's to a new year","02-14":"Love letters","02-29":"One extra day","03-20":"Spring bulbs","06-21":"Beside the seaside","10-15":"Into the woods","10-16":"Leaves are turning","10-31":"A haunting evening","12-25":"A Christmas story"};for(const[r,E]of Object.entries(LE)){const y=bo.indexOf(r),s=Ml.findIndex(b=>b.title===E);[Ml[y],Ml[s]]=[Ml[s],Ml[y]]}const yo=bo.map((r,E)=>({...Ml[E],key:r,id:`theme-${r}`})),CE=new Map(yo.map(r=>[r.key,r]));function Mn(r){if(!ba(r))throw new Error(`Invalid puzzle date: ${r}`);return CE.get(r.slice(5))}function ME(r){return r.title==="Into the woods"?"Follow the trail through today’s woodland wordplay.":r.title==="Leaves are turning"?"A little autumn color, one answer at a time.":`A fresh perspective on ${r.category.toLowerCase()}, one answer at a time.`}const qd=1;function Yd(r,E){let y=1;for(let s=1;s<=E;s++)y=y*(r-s+1)/s;return Math.round(y)}function wE(r,E,y){const s=Yd(r.length,E);y=(y%s+s)%s;const b=[];let v=0;for(let L=E;L>0;L--)for(let z=v;z<=r.length-L;z++){const U=Yd(r.length-z-1,L-1);if(y<U){b.push(r[z]),v=z+1;break}y-=U}return b}function UE(r){const E=Mn(r),y=new Set(E.focus),s=vo(E.words.filter(v=>!y.has(v.answer)),po(E.id)),b=wE(s,12-y.size,Number(r.slice(0,4))-2026);return[...E.words.filter(v=>y.has(v.answer)),...b].map(v=>({...v,themed:y.has(v.answer)}))}function DE(r,E,y){const s=Array.from({length:E},()=>Array(E).fill(null)),b=[];let v=E,L=E,z=0,U=0;const R=(k,fe)=>k>=0&&k<E&&fe>=0&&fe<E?s[k][fe]:null;function B(k,fe,Re,De){const Oe=De==="down"?1:0,de=1-Oe,ye=fe+Oe*(k.length-1),Ne=Re+de*(k.length-1);if(fe<0||Re<0||ye>=E||Ne>=E||R(fe-Oe,Re-de)||R(ye+Oe,Ne+de))return 0;let ge=0;for(let f=0;f<k.length;f++){const w=fe+Oe*f,H=Re+de*f,V=R(w,H);if(V){if(V.letter!==k[f]||V[De])return 0;ge++}else if(R(w-de,H-Oe)||R(w+de,H+Oe))return 0}return ge}function G(k,fe,Re,De){const Oe=b.length,de=De==="down"?1:0,ye=1-de;for(let Ne=0;Ne<k.answer.length;Ne++){const ge=fe+de*Ne,f=Re+ye*Ne;s[ge][f]||(s[ge][f]={letter:k.answer[Ne]}),s[ge][f][De]=Oe+1,v=Math.min(v,ge),z=Math.max(z,ge),L=Math.min(L,f),U=Math.max(U,f)}b.push({...k,row:fe,col:Re,direction:De})}const K=vo(r,y).map(k=>({w:k,weight:k.answer.length+y()*5})).sort((k,fe)=>fe.weight-k.weight).map(k=>k.w),[ne]=K.splice(Math.floor(y()*K.length),1),le=y()<.5?"across":"down";G(ne,Math.floor(le==="down"?(E-ne.answer.length)/2:E/2),Math.floor(le==="across"?(E-ne.answer.length)/2:E/2),le);let be=0;function J(k){if(!k.length)return!0;if(++be>1800)return!1;const fe=[];for(let Re=0;Re<k.length;Re++){const De=k[Re],Oe=[];for(let de=v;de<=z;de++)for(let ye=L;ye<=U;ye++){const Ne=s[de][ye];if(Ne){for(let ge=0;ge<De.answer.length;ge++)if(De.answer[ge]===Ne.letter)for(const f of["across","down"]){if(Ne[f])continue;const w=f==="down"?1:0,H=1-w,V=de-w*ge,$=ye-H*ge,A=B(De.answer,V,$,f);if(!A)continue;const C=Math.max(z,V+w*(De.answer.length-1))-Math.min(v,V)+1,Y=Math.max(U,$+H*(De.answer.length-1))-Math.min(L,$)+1,I=A*12-C*Y*.09-Math.abs(Y-C)*.5+y()*5;Oe.push({r:V,c:$,dir:f,score:I})}}}Oe.length&&fe.push({wi:Re,candidates:Oe.sort((de,ye)=>ye.score-de.score)})}if(!fe.length)return!1;fe.sort((Re,De)=>Re.candidates.length-De.candidates.length);for(const{wi:Re,candidates:De}of fe.slice(0,4)){const Oe=k[Re],de=k.filter((ye,Ne)=>Ne!==Re);for(const ye of De.slice(0,18)){const Ne=[v,L,z,U],ge=[];for(let f=0;f<Oe.answer.length;f++){const w=ye.r+(ye.dir==="down"?f:0),H=ye.c+(ye.dir==="across"?f:0);ge.push([w,H,s[w][H]?{...s[w][H]}:null])}if(G(Oe,ye.r,ye.c,ye.dir),J(de))return!0;b.pop();for(const[f,w,H]of ge)s[f][w]=H;if([v,L,z,U]=Ne,be>1800)return!1}}return!1}J(K);const Z=z-v+1,D=U-L+1,_=Math.max(13,Z,D),he=Math.floor((_-Z)/2),ie=Math.floor((_-D)/2);return{entries:b.map(k=>({...k,row:k.row-v+he,col:k.col-L+ie})),size:_,area:Z*D}}function HE(r,E){const{size:y}=r,s=r.entries.sort((B,G)=>B.row-G.row||B.col-G.col||B.direction.localeCompare(G.direction)),b=new Map;let v=0;for(const B of s){const G=`${B.row},${B.col}`;b.has(G)||b.set(G,++v),B.number=b.get(G),B.id=`${B.number}-${B.direction}`,B.cells=Array.from({length:B.answer.length},(K,ne)=>(B.row+(B.direction==="down"?ne:0))*y+B.col+(B.direction==="across"?ne:0))}const L=Array.from({length:y*y},(B,G)=>({index:G,letter:null,number:null,across:null,down:null}));for(const B of s)for(let G=0;G<B.cells.length;G++){const K=L[B.cells[G]];K.letter=B.answer[G],K[B.direction]=B.id,G===0&&(K.number=B.number)}const z=String(Vd(s.map(B=>`${B.answer}:${B.row}:${B.col}:${B.direction}`).join("|"))),U={date:E,version:qd,theme:Mn(E),size:y,entries:s,cells:L,signature:z},R=BE(U);if(R.length)throw new Error(R.join("; "));return U}function IE(r){const E=UE(r),y=po(`daily-cross-v${qd}/${r}`);let s=null;for(const b of[13,15,17,19,21])for(let v=0;v<6;v++){const L=DE(E,b,y);if((!s||L.entries.length>s.entries.length||L.entries.length===s.entries.length&&L.area<s.area)&&(s=L),L.entries.length===E.length)return HE(L,r)}throw new Error(`Unable to construct complete crossword for ${r}; ${s?.entries.length}/${E.length} placed`)}function BE(r){const E=[],y=new Set,s=new Map(r.entries.map(L=>[L.id,L]));r.entries.length!==12&&E.push("Expected 12 clued words");for(const L of r.entries){y.has(L.answer)&&E.push("Repeated answer"),y.add(L.answer),(!L.clue||L.answer.length<3||!/^[A-Z]+$/.test(L.answer))&&E.push("Invalid entry");for(let z=0;z<L.cells.length;z++)r.cells[L.cells[z]]?.letter!==L.answer[z]&&E.push("Crossing conflict");for(const z of L.cells)s.has(r.cells[z]?.[L.direction])||E.push("Missing cell ownership")}for(let L=0;L<r.size;L++)for(let z=0;z<r.size;z++){const U=L*r.size+z,R=r.cells[U];if(R.letter){!R.across&&!R.down&&E.push("Orphan letter");for(const[B,G,K]of[["across",1,z===0||!r.cells[U-1]?.letter],["down",r.size,L===0||!r.cells[U-r.size]?.letter]]){if(!K)continue;let ne="";for(let le=U;le<r.cells.length&&(B==="down"||Math.floor(le/r.size)===L)&&r.cells[le].letter;le+=G)ne+=r.cells[le].letter;ne.length>1&&!r.entries.some(le=>le.cells[0]===U&&le.direction===B&&le.answer===ne)&&E.push("Unclued letter run")}}}const b=new Set,v=[r.entries[0]?.id];for(;v.length;){const L=v.pop();if(!(!L||b.has(L))){if(b.add(L),!s.has(L)){E.push("Missing clue ownership");continue}for(const z of s.get(L).cells)v.push(r.cells[z].across,r.cells[z].down)}}return b.size!==r.entries.length&&E.push("Disconnected grid"),[...new Set(E)]}const No="daily-cross:v1:";function Lo(r,E){try{return JSON.parse(localStorage.getItem(No+r))??E}catch{return E}}function xd(r,E){try{return localStorage.setItem(No+r,JSON.stringify(E)),!0}catch{return!1}}function GE(r){const E=Lo(r.date,null);if(!E||E.signature!==r.signature)return{letters:{},pencil:{},revealed:[],seconds:0,started:!1,completed:!1,assisted:!1,completedAt:null,selected:r.entries[0].cells[0],direction:r.entries[0].direction};const y={};for(const[s,b]of Object.entries(E.letters??{}))r.cells[s]?.letter&&/^[A-Z]$/.test(b)&&(y[s]=b);return{...E,letters:y,seconds:Math.max(0,Number(E.seconds)||0),revealed:Array.isArray(E.revealed)?E.revealed:[],pencil:E.pencil??{}}}function zE(r,E){return xd(r.date,{...E,signature:r.signature})}function Pd(){const r=[];try{for(let E=0;E<localStorage.length;E++){const y=localStorage.key(E);if(/^daily-cross:v1:\d{4}-\d{2}-\d{2}$/.test(y)){const s=y.slice(No.length),b=Lo(s,null);b&&r.push({date:s,...b})}}}catch{}return r}function wn(r){const E=Math.max(0,Math.floor(r));return`${String(Math.floor(E/60)).padStart(2,"0")}:${String(E%60).padStart(2,"0")}`}function YE(r,E,y){const[s,b]=W.useState(()=>GE(r)),[v,L]=W.useState(!1),[z,U]=W.useState(!1),[R,B]=W.useState({}),G=W.useRef(null),K=W.useRef(s),ne=W.useRef(s.completed),le=W.useRef(!1);K.current=s;const be=W.useMemo(()=>new Map(r.entries.map(f=>[f.id,f])),[r]),J=r.cells[s.selected]??r.cells[r.entries[0].cells[0]],Z=be.get(J[s.direction])??be.get(J.across||J.down)??r.entries[0],D=W.useCallback(f=>requestAnimationFrame(()=>G.current?.querySelector(`[data-cell="${f}"]`)?.focus({preventScroll:!0})),[]),_=W.useCallback(f=>{!zE(r,f)&&!le.current&&(le.current=!0,E("Your browser could not save progress. Keep this tab open to finish."))},[r,E]);W.useEffect(()=>{_(s)},[s,_]),W.useEffect(()=>{if(v||!s.started||s.completed)return;let f=performance.now();const w=setInterval(()=>{const H=performance.now(),V=Math.floor((H-f)/1e3);V&&(f+=V*1e3,b($=>({...$,seconds:$.seconds+V})))},250);return()=>clearInterval(w)},[v,s.started,s.completed]),W.useEffect(()=>{const f=()=>{document.hidden&&(L(!0),_(K.current))},w=()=>_(K.current);return document.addEventListener("visibilitychange",f),window.addEventListener("pagehide",w),()=>{document.removeEventListener("visibilitychange",f),window.removeEventListener("pagehide",w),_(K.current)}},[_]),W.useEffect(()=>{ne.current||!r.cells.every(f=>!f.letter||s.letters[f.index]===f.letter)||(ne.current=!0,b(f=>({...f,completed:!0,completedAt:new Date().toISOString(),pencil:{}})),y())},[s.letters,r,y]);const he=W.useCallback(f=>{const w=K.current,H=f.cells.find(V=>!w.letters[V])??f.cells[0];b(V=>({...V,selected:H,direction:f.direction})),D(H)},[D]);function ie(f){const w=r.cells[f];if(!w?.letter||v)return;let H=s.direction;f===s.selected&&w.across&&w.down&&(H=H==="across"?"down":"across"),w[H]||(H=w.across?"across":"down"),b(V=>({...V,selected:f,direction:H})),D(f)}function Ue(f=1){const w=r.entries.findIndex(V=>V.id===Z.id),H=r.entries[(w+f+r.entries.length)%r.entries.length];he(H)}function k(f){if(v||s.completed)return;if(f==="Tab"||f==="Enter"){Ue(1);return}if(f===" "){const I=r.cells[s.selected];I.across&&I.down&&b(x=>({...x,direction:x.direction==="across"?"down":"across"}));return}if(f.startsWith("Arrow")){const I=f==="ArrowUp"||f==="ArrowDown"?"down":"across",x=f==="ArrowUp"?-r.size:f==="ArrowDown"?r.size:f==="ArrowLeft"?-1:1;if(I!==s.direction&&J[I]){b(ue=>({...ue,direction:I}));return}let X=s.selected+x;for(;X>=0&&X<r.cells.length&&(I==="down"||Math.floor(X/r.size)===Math.floor(s.selected/r.size));){if(r.cells[X].letter){const ue=r.cells[X];b(Xe=>({...Xe,selected:X,direction:ue[I]?I:ue.across?"across":"down"})),D(X);return}X+=x}return}if(f==="Home"||f==="End"){const I=f==="Home"?Z.cells[0]:Z.cells.at(-1);b(x=>({...x,selected:I})),D(I);return}if(f==="Backspace"||f==="Delete"){let I=s.selected;f==="Backspace"&&!s.letters[I]&&(I=Z.cells[Math.max(0,Z.cells.indexOf(I)-1)]),b(x=>{const X={...x.letters},ue={...x.pencil};return delete X[I],delete ue[I],{...x,letters:X,pencil:ue,selected:I}}),B(x=>{const X={...x};return delete X[I],X}),D(I);return}if(!/^[a-zA-Z]$/.test(f))return;const w=f.toUpperCase(),H=s.selected;B(I=>{const x={...I};return delete x[H],x});const V={...s.letters,[H]:w},$={...s.pencil};z?$[H]=!0:delete $[H];let A=H,C=Z.direction;const Y=Z.cells.slice(Z.cells.indexOf(H)+1);if(A=Y.find(I=>!V[I])??Y[0]??H,A===H){const I=r.entries.slice(r.entries.indexOf(Z)+1).concat(r.entries.slice(0,r.entries.indexOf(Z))).find(x=>x.cells.some(X=>!V[X]));I&&(A=I.cells.find(x=>!V[x]),C=I.direction)}b(I=>({...I,letters:V,pencil:$,selected:A,direction:C,started:!0})),D(A)}function fe(f){if(!(f.ctrlKey||f.metaKey||f.altKey)){if(f.key==="Tab"){f.preventDefault(),Ue(f.shiftKey?-1:1);return}f.key!=="Escape"&&(f.key===" "||f.key.startsWith("Arrow")||["Enter","Home","End","Backspace","Delete"].includes(f.key)||/^[a-zA-Z]$/.test(f.key))&&(f.preventDefault(),k(f.key))}}function Re(f){const w=f==="letter"?[s.selected]:f==="word"?Z.cells:r.cells.filter(A=>A.letter).map(A=>A.index);let H=0,V=0;const $={...R};for(const A of w)s.letters[A]&&(H++,s.letters[A]!==r.cells[A].letter?($[A]=!0,V++):delete $[A]);B($),H?(b(A=>({...A,assisted:!0})),E(V?`${V} ${V===1?"square needs":"squares need"} another look. Incorrect letters are marked.`:"Every checked letter looks good.")):E("Fill in a few letters first, then check them.")}function De(f){const w=f==="letter"?[s.selected]:f==="word"?Z.cells:r.cells.filter(H=>H.letter).map(H=>H.index);b(H=>{const V={...H.letters},$={...H.pencil};for(const A of w)V[A]=r.cells[A].letter,delete $[A];return{...H,letters:V,pencil:$,revealed:[...new Set([...H.revealed,...w])],assisted:!0,started:!0}}),B(H=>{const V={...H};return w.forEach($=>delete V[$]),V}),E(f==="puzzle"?"The solution is revealed.":`Revealed ${f==="word"?"the selected word":"one letter"}.`)}function Oe(){ne.current=!1,B({}),L(!1),b({letters:{},pencil:{},revealed:[],seconds:0,started:!1,completed:!1,completedAt:null,assisted:!1,selected:r.entries[0].cells[0],direction:r.entries[0].direction})}function de(){s.completed||(b(f=>({...f,started:!0})),L(f=>!f))}const ye=r.cells.filter(f=>f.letter&&s.letters[f.index]).length,Ne=r.cells.filter(f=>f.letter).length,ge=r.entries.filter(f=>f.cells.every(w=>s.letters[w])).length;return{game:s,paused:v,pencil:z,setPencil:U,errors:R,active:Z,gridRef:G,focusGrid:D,selectEntry:he,selectCell:ie,nextEntry:Ue,key:k,onKeyDown:fe,check:Re,reveal:De,restart:Oe,togglePause:de,filledCells:ye,totalCells:Ne,filledWords:ge}}const Kd={left:"m14 6-6 6 6 6",right:"m10 6 6 6-6 6",down:"m6 9 6 6 6-6",sun:"M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4",moon:"M20.5 13a8.5 8.5 0 0 1-9.5-9.5A8.5 8.5 0 1 0 20.5 13Z",pause:"M9 5v14m6-14v14",play:"m9 5 10 7-10 7Z",more:"M5 12h.01M12 12h.01M19 12h.01",close:"m6 6 12 12M6 18 18 6",check:"m5 12 4 4L19 6",keyboard:"M4 5h16v14H4zM7 9h.01M10 9h.01M13 9h.01M16 9h.01M7 12h.01M10 12h.01M13 12h.01M16 12h.01M8 16h8",backspace:"m9 5-7 7 7 7h12V5Zm3 4 6 6m-6 0 6-6",pencil:"m14 5 5 5M4 20l5-1L21 7l-5-5L4 14Z",calendar:"M5 4h14v17H5ZM8 2v4m8-4v4M5 9h14M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01",share:"M12 16V3m-5 5 5-5 5 5M5 13v8h14v-8",chart:"M5 20V10m7 10V4m7 16v-7",undo:"M8 5 3 10l5 5M3 10h11a6 6 0 0 1 0 12"};function Se({name:r,size:E=18,...y}){return o.createElement("svg",{width:E,height:E,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r==="pause"?3:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...y},r==="sun"&&o.createElement("circle",{cx:"12",cy:"12",r:"4"}),o.createElement("path",{d:Kd[r]??Kd.check}))}function KE({puzzle:r,game:E,active:y,errors:s,paused:b,onSelect:v,onKeyDown:L,gridRef:z}){const U=new Set(y.cells),R=new Set(E.revealed);return o.createElement("div",{className:"grid-container"},o.createElement("div",{ref:z,className:`crossword-grid ${b?"is-paused":""}`,style:{"--size":r.size},role:"grid","aria-label":`${r.size} by ${r.size} crossword. ${y.number} ${y.direction}: ${y.clue}.`,"aria-rowcount":r.size,"aria-colcount":r.size,onKeyDown:L},Array.from({length:r.size},(B,G)=>o.createElement("div",{className:"grid-row",role:"row",key:G},r.cells.slice(G*r.size,(G+1)*r.size).map(K=>K.letter?o.createElement("button",{key:K.index,role:"gridcell",tabIndex:E.selected===K.index&&!b?0:-1,"aria-rowindex":G+1,"aria-colindex":K.index%r.size+1,"aria-selected":E.selected===K.index,"aria-label":`Row ${G+1}, column ${K.index%r.size+1}${K.number?`, clue ${K.number}`:""}, ${E.letters[K.index]||"blank"}${s[K.index]?", incorrect":""}${R.has(K.index)?", revealed":""}`,"data-cell":K.index,className:`cell ${U.has(K.index)?"in-word":""} ${E.selected===K.index?"selected":""} ${s[K.index]?"incorrect":""} ${E.pencil[K.index]?"penciled":""} ${R.has(K.index)?"revealed":""}`,onClick:()=>v(K.index),disabled:b},K.number&&o.createElement("span",{className:"cell-number"},K.number),o.createElement("span",{className:"cell-letter"},b?"":E.letters[K.index]||""),s[K.index]&&o.createElement("span",{className:"error-mark","aria-hidden":"true"})):o.createElement("span",{key:K.index,className:"cell block",role:"gridcell","aria-label":"Block"}))))),b&&o.createElement("div",{className:"pause-veil","aria-hidden":"true"},o.createElement("span",null,"Your moment can wait."),o.createElement("small",null,"Resume when you’re ready.")))}const _E=W.memo(KE);function kE({puzzle:r,game:E,active:y,onSelect:s}){return o.createElement("section",{className:"clue-panel","aria-label":"Crossword clues"},o.createElement("div",{className:"clue-columns"},["across","down"].map(b=>o.createElement("section",{className:"clue-column",key:b,"aria-label":`${b} clues`},o.createElement("h3",null,b),o.createElement("ol",null,r.entries.filter(v=>v.direction===b).map(v=>{const L=v.cells.every(z=>E.letters[z]);return o.createElement("li",{key:v.id},o.createElement("button",{className:`clue ${y.id===v.id?"active":""} ${L?"filled":""}`,"aria-current":y.id===v.id?"true":void 0,onClick:()=>s(v),"data-clue":v.id},o.createElement("span",{className:"clue-number"},v.number),o.createElement("span",null,v.clue," ",o.createElement("span",{className:"answer-length"},"(",v.answer.length,")")),L&&o.createElement("span",{className:"filled-dot",title:"All squares filled"})))}))))),o.createElement("div",{className:"tomorrow"},o.createElement("span",{className:"small-rule"}),o.createElement("h3",null,"A new chapter tomorrow."),o.createElement("p",null,"Same time. A whole new world of words."),o.createElement("button",{className:"text-button",onClick:()=>window.dispatchEvent(new Event("open-themes"))},"Explore the theme calendar ",o.createElement(Se,{name:"right",size:15}))))}const VE=W.memo(kE);function qE({onKey:r,pencil:E,onPencil:y,onNext:s,onPrevious:b,disabled:v,show:L}){return o.createElement("section",{className:`virtual-keyboard ${L?"keyboard-shown":"keyboard-hidden"}`,"aria-label":"On-screen keyboard"},o.createElement("div",{className:"keyboard-options"},o.createElement("button",{onClick:b,"aria-label":"Previous clue",disabled:v},o.createElement(Se,{name:"left"})),o.createElement("button",{className:E?"pencil-active":"","aria-pressed":E,onClick:y,disabled:v},o.createElement(Se,{name:"pencil",size:15})," Pencil"),o.createElement("button",{onClick:s,"aria-label":"Next clue",disabled:v},o.createElement(Se,{name:"right"}))),["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"].map((z,U)=>o.createElement("div",{className:"key-row",key:z},U===2&&o.createElement("button",{className:"key key-direction",onClick:()=>r(" "),"aria-label":"Switch across or down",disabled:v},"↔"),[...z].map(R=>o.createElement("button",{className:"key",key:R,onClick:()=>r(R),"aria-label":`Type ${R}`,disabled:v},R)),U===2&&o.createElement("button",{className:"key key-backspace","aria-label":"Backspace",onClick:()=>r("Backspace"),disabled:v},o.createElement(Se,{name:"backspace"})))))}function Ro({name:r,icon:E,children:y,open:s,setOpen:b}){const v=W.useRef(null),L=s===r;return W.useEffect(()=>{if(!L)return;const z=R=>{v.current?.contains(R.target)||b(null)},U=R=>{R.key==="Escape"&&(b(null),v.current?.querySelector("button")?.focus())};return document.addEventListener("pointerdown",z),document.addEventListener("keydown",U),()=>{document.removeEventListener("pointerdown",z),document.removeEventListener("keydown",U)}},[L,b]),o.createElement("div",{ref:v,className:"toolbar-menu"},o.createElement("button",{className:"toolbar-button","aria-expanded":L,"aria-haspopup":"true",onClick:()=>b(L?null:r)},r,o.createElement(Se,{name:E||"down",size:14})),L&&o.createElement("div",{className:"dropdown",onClick:()=>b(null)},y))}function xE({player:r,onModal:E,onShare:y}){const[s,b]=W.useState(null),{game:v,paused:L,togglePause:z,check:U,reveal:R}=r;return o.createElement("div",{className:"toolbar"},o.createElement("button",{className:"timer-button","aria-label":v.completed?"Completed":L?"Resume puzzle":v.started?"Pause puzzle":"Start timer",onClick:z,disabled:v.completed},o.createElement(Se,{name:L||!v.started?"play":"pause",size:16}),o.createElement("span",{className:"timer"},wn(v.seconds))),o.createElement("div",{className:"toolbar-actions"},o.createElement(Ro,{name:"Check",open:s,setOpen:b},[["letter","Letter"],["word","Word"],["puzzle","Puzzle"]].map(([B,G])=>o.createElement("button",{key:B,disabled:L||v.completed,onClick:()=>U(B)},G,o.createElement("span",null,"Check ",B==="puzzle"?"all filled squares":`this ${B}`)))),o.createElement(Ro,{name:"Reveal",open:s,setOpen:b},[["letter","Letter"],["word","Word"],["puzzle","Puzzle"]].map(([B,G])=>o.createElement("button",{key:B,disabled:L||v.completed,onClick:()=>B==="puzzle"?E("reveal"):R(B)},G,o.createElement("span",null,B==="puzzle"?"Show the full solution":`Uncover this ${B}`)))),o.createElement(Ro,{name:"More",icon:"more",open:s,setOpen:b},o.createElement("button",{onClick:()=>{r.setPencil(B=>!B)}},"Pencil mode ",o.createElement("span",null,r.pencil?"On":"Off"," · tentative letters")),o.createElement("button",{onClick:()=>E("keyboard")},"On-screen keyboard"),o.createElement("button",{onClick:()=>E("stats")},"Your statistics"),o.createElement("button",{onClick:y},"Share this puzzle"),o.createElement("button",{onClick:()=>E("help")},"How to play"),o.createElement("button",{onClick:()=>window.print()},"Print puzzle"),o.createElement("button",{className:"danger-text",onClick:()=>E("restart")},"Start over"))))}function Cn({title:r,children:E,onClose:y,wide:s=!1}){const b=W.useRef(null);return W.useEffect(()=>{const v=b.current;return v.showModal(),()=>{v.close()}},[]),o.createElement("dialog",{ref:b,className:`modal ${s?"modal-wide":""}`,onCancel:y,onClick:v=>{if(v.target===v.currentTarget){const L=v.currentTarget.getBoundingClientRect();(v.clientX<L.left||v.clientX>L.right||v.clientY<L.top||v.clientY>L.bottom)&&y()}},"aria-labelledby":"modal-title"},o.createElement("header",{className:"modal-heading"},o.createElement("h2",{id:"modal-title"},r),o.createElement("button",{className:"icon-button",onClick:y,"aria-label":"Close dialog"},o.createElement(Se,{name:"close"}))),E)}const PE=["January","February","March","April","May","June","July","August","September","October","November","December"];function jE({date:r,today:E,onChoose:y,calendarOnly:s=!1}){const b=ba(r),[v,L]=W.useState(b.getUTCMonth()+1),[z,U]=W.useState(b.getUTCFullYear()),[R,B]=W.useState(s?"themes":"archive"),[G,K]=W.useState(""),ne=bE(z,v),le=ba(ne[0]).getUTCDay(),be=new Map(Pd().map(D=>[D.date,D])),J=Array.from({length:Number(E.slice(0,4))-2026+1},(D,_)=>2026+_);function Z(D){let _=v+D,he=z;_===0&&(_=12,he--),_===13&&(_=1,he++),L(_),U(he)}return o.createElement("div",{className:"archive"},o.createElement("div",{className:"segmented"},o.createElement("button",{className:R==="archive"?"active":"",onClick:()=>B("archive")},"Play the archive"),o.createElement("button",{className:R==="themes"?"active":"",onClick:()=>B("themes")},"366 themes")),o.createElement("p",{className:"muted"},R==="archive"?"There’s always another little world to explore. Pick a past puzzle.":"A theme for every date. The themes return each year; the puzzles are newly built."),R==="archive"?o.createElement(o.Fragment,null,o.createElement("div",{className:"calendar-heading"},o.createElement("button",{className:"icon-button","aria-label":"Previous month",disabled:ne[0]<=wl,onClick:()=>Z(-1)},o.createElement(Se,{name:"left"})),o.createElement("div",null,o.createElement("select",{"aria-label":"Archive month",value:v,onChange:D=>L(Number(D.target.value))},PE.map((D,_)=>o.createElement("option",{key:D,value:_+1,disabled:`${z}-${String(_+1).padStart(2,"0")}-01`>E},D))),o.createElement("select",{"aria-label":"Archive year",value:z,onChange:D=>{const _=Number(D.target.value);U(_),_===Number(E.slice(0,4))&&v>Number(E.slice(5,7))&&L(Number(E.slice(5,7)))}},J.map(D=>o.createElement("option",{key:D},D)))),o.createElement("button",{className:"icon-button","aria-label":"Next month",disabled:ne.at(-1)>=E,onClick:()=>Z(1)},o.createElement(Se,{name:"right"}))),o.createElement("div",{className:"calendar-grid"},o.createElement("div",{className:"weekdays"},["S","M","T","W","T","F","S"].map((D,_)=>o.createElement("span",{key:_},D))),o.createElement("div",{className:"calendar-days"},Array.from({length:le},(D,_)=>o.createElement("span",{key:`blank-${_}`})),ne.map(D=>{const _=be.get(D)?.completed,he=Object.keys(be.get(D)?.letters??{}).length>0;return o.createElement("button",{key:D,disabled:D>E||D<wl,className:`${D===r?"selected-day":""} ${_?"completed-day":""} ${D===E?"today-day":""}`,title:`${Mn(D).title}${_?" · completed":he?" · in progress":""}`,"aria-label":`${Zi(D)}: ${Mn(D).title}${_?", completed":he?", in progress":""}`,onClick:()=>y(D)},o.createElement("span",null,Number(D.slice(8))),_?o.createElement(Se,{name:"check",size:12}):he?o.createElement("span",{className:"calendar-dot"}):o.createElement("span",{className:"day-dot"}))}))),o.createElement("div",{className:"calendar-legend"},o.createElement("span",null,o.createElement("i",{className:"legend-circle"})," Today"),o.createElement("span",null,o.createElement(Se,{name:"check",size:13})," Completed"),o.createElement("span",null,o.createElement("i",{className:"calendar-dot"})," In progress")),o.createElement("button",{className:"primary-button full-width",onClick:()=>y(E)},"Play today’s crossword ",o.createElement(Se,{name:"right"}))):o.createElement(o.Fragment,null,o.createElement("label",{className:"search-label",htmlFor:"theme-search"},"Find a theme"),o.createElement("input",{id:"theme-search",placeholder:"Try woods, music, or space…",value:G,onChange:D=>K(D.target.value)}),o.createElement("div",{className:"theme-list"},yo.filter(D=>`${D.title} ${D.category}`.toLowerCase().includes(G.toLowerCase())).map(D=>{const _=`${E.slice(0,4)}-${D.key}`,he=ba(_),ie=he&&_<=E&&_>=wl;return o.createElement("button",{className:"theme-row",key:D.id,disabled:!ie,onClick:()=>y(_)},o.createElement("span",{className:"theme-date"},Zi(`2000-${D.key}`,{month:"short",day:"numeric"})),o.createElement("span",null,o.createElement("strong",null,D.title),o.createElement("small",null,D.category)),o.createElement("span",{className:"theme-status"},ie?o.createElement(Se,{name:"right",size:15}):D.key==="02-29"?"Leap day":"Coming up"))}),!yo.some(D=>`${D.title} ${D.category}`.toLowerCase().includes(G.toLowerCase()))&&o.createElement("p",{className:"empty-state"},"No matching themes. Try a broader subject.")),o.createElement("p",{className:"fine-print"},"Future themes are visible. Their puzzles unlock on the day, at midnight in New York.")))}function QE({today:r}){const E=Pd().filter(z=>z.completed),y=new Set(E.map(z=>z.date)),s=E.filter(z=>!z.assisted);let b=y.has(r)?r:Ul(r,-1),v=0;for(;y.has(b);)v++,b=Ul(b,-1);const L=s.length?Math.min(...s.map(z=>z.seconds)):null;return o.createElement(o.Fragment,null,o.createElement("p",{className:"muted"},"A little progress, one day at a time. Your results stay in this browser."),o.createElement("div",{className:"stats-grid"},o.createElement("div",null,o.createElement("strong",null,E.length),o.createElement("span",null,"Puzzles solved")),o.createElement("div",null,o.createElement("strong",null,v),o.createElement("span",null,"Puzzle-day streak")),o.createElement("div",null,o.createElement("strong",null,s.length),o.createElement("span",null,"Without help")),o.createElement("div",null,o.createElement("strong",null,L===null?"—":wn(L)),o.createElement("span",null,"Best without help"))),E.length===0?o.createElement("p",{className:"empty-state"},"Your first finished crossword is the start of something good."):o.createElement("div",{className:"results-list"},E.sort((z,U)=>U.date.localeCompare(z.date)).slice(0,7).map(z=>o.createElement("div",{key:z.date},o.createElement("span",null,z.date),o.createElement("span",null,z.assisted?"With help":"Without help"),o.createElement("strong",null,wn(z.seconds))))),o.createElement("p",{className:"fine-print"},"Checks and reveals count as help. A full solution revealed from the menu is recorded with help. Clearing browser data clears these statistics."))}function _d(r){const E=new URLSearchParams(window.location.search).get("date");return E&&ba(E)&&E>=wl&&E<=r?E:r}function XE(){return o.createElement("span",{className:"brand"},o.createElement("span",{className:"brand-mark","aria-hidden":"true"},Array.from({length:9},(r,E)=>o.createElement("i",{key:E,className:[1,2,3,7].includes(E)?"dark":""}))),o.createElement("span",null,o.createElement("strong",null,"The Daily Cross"),o.createElement("small",null,"by Frank Valdez")))}function ZE(){return o.createElement("div",{className:"help-content"},o.createElement("p",{className:"modal-intro"},"A little curiosity goes a long way."),o.createElement("p",null,"Fill the white squares using the Across and Down clues. Each answer connects to another, and crossing letters must agree. Spaces and punctuation are omitted."),o.createElement("div",{className:"help-colors"},o.createElement("span",null,o.createElement("i",{className:"demo-selected"}),"Your square"),o.createElement("span",null,o.createElement("i",{className:"demo-word"}),"Your word"),o.createElement("span",null,o.createElement("i",{className:"demo-revealed"}),"Revealed letter")),o.createElement("h3",null,"Make yourself at home"),o.createElement("dl",null,o.createElement("div",null,o.createElement("dt",null,"Choose a clue"),o.createElement("dd",null,"Tap a clue or any white square. Tap a crossing square again to change direction.")),o.createElement("div",null,o.createElement("dt",null,"Write an answer"),o.createElement("dd",null,"Use your keyboard or the on-screen keys. The selection moves forward as you type.")),o.createElement("div",null,o.createElement("dt",null,"A little help"),o.createElement("dd",null,"Check flags incorrect filled squares. Reveal uncovers a letter, word, or the solution. Both mark the result as solved with help.")),o.createElement("div",null,o.createElement("dt",null,"Pencil mode"),o.createElement("dd",null,"Make tentative entries in a lighter style. Toggle it in More or above the on-screen keyboard."))),o.createElement("h3",null,"At your own pace"),o.createElement("p",null,"Your progress saves in this browser. Pause whenever you like. The timer pauses when this tab is hidden."),o.createElement("h3",null,"Keyboard shortcuts"),o.createElement("div",{className:"shortcuts"},o.createElement("span",null,o.createElement("kbd",null,"↑"),o.createElement("kbd",null,"↓"),o.createElement("kbd",null,"←"),o.createElement("kbd",null,"→")," Move between squares"),o.createElement("span",null,o.createElement("kbd",null,"Space")," Switch Across / Down"),o.createElement("span",null,o.createElement("kbd",null,"Tab")," Next clue"),o.createElement("span",null,o.createElement("kbd",null,"Shift")," + ",o.createElement("kbd",null,"Tab")," Previous clue"),o.createElement("span",null,o.createElement("kbd",null,"⌫")," Erase, then move back"),o.createElement("span",null,o.createElement("kbd",null,"Home")," / ",o.createElement("kbd",null,"End")," First / last square")),o.createElement("h3",null,"New day. New discovery."),o.createElement("p",null,"A puzzle arrives at midnight in New York. Every date has its own theme, including February 29. Themes repeat annually; the year changes the selected answers and grid. These are connected themed crosswords with some unchecked letters, rather than fully checked newspaper grids."))}function FE({puzzle:r,today:E,onDate:y,notify:s,setGlobalModal:b}){const[v,L]=W.useState(null),[z,U]=W.useState(null),[R,B]=W.useState(""),[G,K]=W.useState(()=>window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches);W.useEffect(()=>{const ie=window.matchMedia("(max-width: 1023px), (pointer: coarse)"),Ue=()=>K(ie.matches);return ie.addEventListener("change",Ue),()=>ie.removeEventListener("change",Ue)},[]);const ne=z??G,le=()=>U(ie=>!(ie??G)),be=W.useCallback(()=>L("complete"),[]),J=YE(r,s,be),{game:Z,active:D}=J,_=()=>{L(null),J.focusGrid(Z.selected)},he=async()=>{const ie=new URL(window.location.href);ie.searchParams.set("date",r.date);const Ue=`The Daily Cross · ${Zi(r.date,{month:"short",day:"numeric",year:"numeric"})}
${r.theme.title}
${Z.completed?`Solved in ${wn(Z.seconds)} · ${Z.assisted?"with help":"without help"}
`:""}${ie.href}`;try{await navigator.clipboard.writeText(Ue),s("Puzzle link copied. No spoilers.")}catch{B(Ue),L("share")}};return o.createElement(o.Fragment,null,o.createElement("section",{className:"theme-heading","aria-labelledby":"theme-title"},o.createElement("div",{className:"date-nav"},o.createElement("button",{className:"icon-button circle",onClick:()=>y(Ul(r.date,-1)),disabled:r.date<=wl,"aria-label":"Previous day"},o.createElement(Se,{name:"left"})),o.createElement("button",{className:"date-button",onClick:()=>b("archive")},Zi(r.date)),o.createElement("button",{className:"icon-button circle",onClick:()=>y(Ul(r.date,1)),disabled:r.date>=E,"aria-label":"Next day"},o.createElement(Se,{name:"right"}))),o.createElement("div",{className:"theme-title-wrap"},o.createElement("h2",{id:"theme-title"},r.theme.title),o.createElement("img",{src:"./botanical.png",className:"botanical",alt:"",width:"190",height:"125",onError:ie=>ie.currentTarget.style.visibility="hidden"})),o.createElement("p",null,ME(r.theme)),o.createElement("span",{className:"puzzle-meta"},"Daily themed crossword ",o.createElement("i",null)," ",r.entries.length," words ",Z.completed&&o.createElement(o.Fragment,null,o.createElement("i",null),o.createElement("span",{className:"completed-label"},o.createElement(Se,{name:"check",size:12})," Completed")))),o.createElement("div",{className:"puzzle-layout"},o.createElement("section",{className:"play-panel","aria-label":"Daily crossword player"},o.createElement("div",{className:"active-clue","aria-live":"polite","aria-atomic":"true"},o.createElement("span",{className:"active-clue-text"},o.createElement("strong",null,D.number," ",o.createElement("span",null,D.direction)),o.createElement("span",null,D.clue," ",o.createElement("span",{className:"answer-length"},"(",D.answer.length,")"))),o.createElement("div",null,o.createElement("button",{"aria-label":"Previous clue",onClick:()=>J.nextEntry(-1)},o.createElement(Se,{name:"left",size:18})),o.createElement("button",{"aria-label":"Next clue",onClick:()=>J.nextEntry(1)},o.createElement(Se,{name:"right",size:18})))),o.createElement(xE,{player:J,onModal:ie=>ie==="keyboard"?le():ie==="help"||ie==="stats"?b(ie):L(ie),onShare:he}),o.createElement(_E,{puzzle:r,game:Z,active:D,errors:J.errors,paused:J.paused,onSelect:J.selectCell,onKeyDown:J.onKeyDown,gridRef:J.gridRef}),J.paused&&o.createElement("button",{className:"resume-button primary-button",onClick:J.togglePause},o.createElement(Se,{name:"play",size:15})," Resume puzzle"),o.createElement("div",{className:"progress-row"},o.createElement("span",null,J.filledWords," of ",r.entries.length," words"),o.createElement("div",{className:"progress-track",role:"progressbar","aria-label":"Squares filled","aria-valuenow":J.filledCells,"aria-valuemin":0,"aria-valuemax":J.totalCells},o.createElement("span",{style:{width:`${J.filledCells/J.totalCells*100}%`}})),o.createElement("button",{className:"keyboard-toggle",onClick:le,"aria-expanded":ne},o.createElement(Se,{name:"keyboard",size:18}),o.createElement("span",null,ne?"Hide keyboard":"Keyboard")),o.createElement("button",{className:"shortcut-link",onClick:()=>b("help")},o.createElement(Se,{name:"keyboard",size:18})," Keyboard shortcuts")),Z.completed&&o.createElement("button",{className:"completion-summary",onClick:()=>L("complete")},o.createElement(Se,{name:"check"})," Beautifully done. View your result ",o.createElement(Se,{name:"right",size:16})),o.createElement(qE,{onKey:J.key,pencil:J.pencil,onPencil:()=>J.setPencil(ie=>!ie),onPrevious:()=>J.nextEntry(-1),onNext:()=>J.nextEntry(1),disabled:J.paused||Z.completed,show:ne})),o.createElement(VE,{puzzle:r,game:Z,active:D,onSelect:J.selectEntry})),v==="complete"&&o.createElement(Cn,{title:"Beautifully done.",onClose:_},o.createElement("div",{className:"completion"},o.createElement("span",{className:"completion-seal"},o.createElement(Se,{name:"check",size:32})),o.createElement("p",{className:"modal-intro"},"You found your way through",o.createElement("br",null),o.createElement("em",null,r.theme.title,".")),o.createElement("div",{className:"result-time"},wn(Z.seconds)),o.createElement("p",{className:"muted"},"12 words. One little discovery."),o.createElement("span",{className:"result-assistance"},Z.assisted?"Solved with help":"Solved without help"),o.createElement("div",{className:"completion-actions"},o.createElement("button",{className:"primary-button",onClick:he},o.createElement(Se,{name:"share",size:16})," Share your result"),o.createElement("button",{className:"secondary-button",onClick:()=>{L(null),b("archive")}},"Find another puzzle ",o.createElement(Se,{name:"right",size:16}))),o.createElement("p",{className:"fine-print"},"Tomorrow brings a new theme at midnight, New York time."))),v==="restart"&&o.createElement(Cn,{title:"A fresh start?",onClose:_},o.createElement("p",null,"This clears your letters, timer, and result for this puzzle. Other days stay saved."),o.createElement("div",{className:"dialog-actions"},o.createElement("button",{className:"secondary-button",onClick:_},"Keep playing"),o.createElement("button",{className:"primary-button",onClick:()=>{J.restart(),L(null)}},"Start over"))),v==="reveal"&&o.createElement(Cn,{title:"Uncover the whole puzzle?",onClose:_},o.createElement("p",null,"This fills every answer and records this puzzle as completed with help."),o.createElement("div",{className:"dialog-actions"},o.createElement("button",{className:"secondary-button",onClick:_},"Keep the mystery"),o.createElement("button",{className:"primary-button",onClick:()=>{L(null),J.reveal("puzzle")}},"Reveal solution"))),v==="share"&&o.createElement(Cn,{title:"Share a little discovery",onClose:_},o.createElement("p",null,"Copy the text below to share this puzzle without giving away the answers."),o.createElement("textarea",{className:"share-text",readOnly:!0,value:R,onFocus:ie=>ie.target.select(),"aria-label":"Puzzle sharing text"})))}function WE(){const[r,E]=W.useState(()=>Ln()),[y,s]=W.useState(()=>_d(Ln())),[b,v]=W.useState(null),[L,z]=W.useState(null),[U,R]=W.useState(null),[B,G]=W.useState(""),[K,ne]=W.useState(()=>Lo("dark",!1)),le=W.useRef(null),be=W.useRef(null),J=W.useCallback(D=>{G(D),clearTimeout(le.current),le.current=setTimeout(()=>G(""),6500)},[]);W.useEffect(()=>{document.documentElement.dataset.theme=K?"dark":"light",xd("dark",K)},[K]),W.useEffect(()=>{const D=setInterval(()=>E(Ln()),15e3),_=()=>{document.hidden||E(Ln())};return document.addEventListener("visibilitychange",_),()=>{clearInterval(D),document.removeEventListener("visibilitychange",_),clearTimeout(le.current)}},[]),W.useEffect(()=>{let D=!1;v(null),z(null);const _=setTimeout(()=>{try{const he=IE(y);D||v(he)}catch(he){D||z(he.message)}},10);return()=>{D=!0,clearTimeout(_)}},[y]),W.useEffect(()=>{const D=()=>s(_d(Ln())),_=()=>R("themes");return window.addEventListener("popstate",D),window.addEventListener("open-themes",_),()=>{window.removeEventListener("popstate",D),window.removeEventListener("open-themes",_)}},[]);function Z(D){if(!ba(D)||D>r||D<wl)return;const _=new URL(window.location.href);D===r?_.searchParams.delete("date"):_.searchParams.set("date",D),window.history.pushState(null,"",_),s(D),R(null)}return W.useEffect(()=>{document.title=`${Mn(y).title} · The Daily Cross`},[y]),o.createElement("div",{className:"app-shell"},o.createElement("a",{href:"#puzzle",className:"skip-link"},"Skip to crossword"),o.createElement("header",{className:"site-header"},o.createElement("a",{href:"./",className:"brand-link","aria-label":"The Daily Cross, today",onClick:D=>{D.preventDefault(),Z(r)}},o.createElement(XE,null)),o.createElement("nav",{"aria-label":"Main navigation"},o.createElement("button",{className:y===r?"nav-active":"",onClick:()=>Z(r)},"Today"),o.createElement("button",{onClick:()=>R("archive")},"Archive"),o.createElement("button",{className:"how-to-nav",onClick:()=>R("help")},"How to play"),o.createElement("button",{className:"icon-button theme-toggle",onClick:()=>ne(D=>!D),"aria-label":K?"Use light theme":"Use dark theme"},o.createElement(Se,{name:K?"moon":"sun",size:22})))),o.createElement("main",{id:"puzzle",ref:be},o.createElement("section",{className:"intro"},o.createElement("div",null,o.createElement("h1",null,"A little mystery. Every day."),o.createElement("p",null,"A fresh crossword, a different theme, a moment for yourself.")),o.createElement("button",{className:"theme-calendar-link",onClick:()=>R("themes")},"366 themes. Endless discoveries.")),y<r&&o.createElement("div",{className:"archive-banner"},o.createElement("span",null,o.createElement(Se,{name:"calendar",size:15})," From the archive"),o.createElement("button",{onClick:()=>Z(r)},"Return to today ",o.createElement(Se,{name:"right",size:14}))),r!==y&&y===Ul(r,-1)&&o.createElement("div",{className:"new-day-note"},"Today’s new puzzle is ready whenever you are."),b?o.createElement(FE,{key:`${y}:${b.signature}`,puzzle:b,today:r,onDate:Z,notify:J,setGlobalModal:R}):L?o.createElement("div",{className:"loading error-state"},o.createElement("h2",null,"This puzzle needs another look."),o.createElement("p",null,"The generator could not verify a complete grid for this date."),o.createElement("button",{className:"primary-button",onClick:()=>Z(Ul(y,-1))},"Try the previous day"),o.createElement("details",null,o.createElement("summary",null,"Technical details"),L)):o.createElement("div",{className:"loading",role:"status"},o.createElement("span",{className:"loading-grid"},o.createElement("i",null),o.createElement("i",null),o.createElement("i",null),o.createElement("i",null)),o.createElement("p",null,"Setting the squares for a little discovery…"))),o.createElement("footer",{className:"site-footer"},o.createElement("span",null,"Made for curious minds. Built by ",o.createElement("a",{href:"https://frankiejvaldez.com/"},"Frank Valdez.")),o.createElement("button",{onClick:()=>R("about")},"A new puzzle at midnight, New York time.")),U&&o.createElement(Cn,{title:U==="help"?"A little guidance.":U==="stats"?"Your daily discoveries.":U==="about"?"One date. A new discovery.":"A year of curiosity.",onClose:()=>R(null),wide:U==="themes"},U==="help"?o.createElement(ZE,null):U==="stats"?o.createElement(QE,{today:r}):U==="about"?o.createElement(o.Fragment,null,o.createElement("p",null,"Every calendar date has an authored theme and a set of curated answers and original clues. A deterministic generator selects twelve words and builds a connected, validated crossword for the date and year."),o.createElement("p",null,"There are 366 themes across 61 subject collections. The theme returns annually, while the selected supporting words and grid change with the year. February 29 has its own theme."),o.createElement("p",null,"A new day starts at midnight in ",o.createElement("strong",null,"America/New_York"),", including daylight saving time. Everyone playing the same date gets the same puzzle."),o.createElement("p",{className:"fine-print"},"Progress and statistics are stored only in this browser. No account or paid API is needed. The puzzle is generated locally; this is a casual game, so its solution is available to the browser.")):o.createElement(jE,{date:y,today:r,onChoose:Z,calendarOnly:U==="themes"})),o.createElement("div",{className:`toast ${B?"visible":""}`,role:"status","aria-live":"polite"},B&&o.createElement(o.Fragment,null,o.createElement("span",null,B),o.createElement("button",{onClick:()=>G(""),"aria-label":"Dismiss message"},o.createElement(Se,{name:"close",size:16})))))}class JE extends o.Component{constructor(E){super(E),this.state={error:!1}}static getDerivedStateFromError(){return{error:!0}}render(){return this.state.error?o.createElement("main",{className:"fatal-error"},o.createElement("h1",null,"A brief intermission."),o.createElement("p",null,"The crossword hit an unexpected problem. Your saved progress is still in this browser."),o.createElement("button",{className:"primary-button",onClick:()=>window.location.reload()},"Reload the puzzle")):this.props.children}}pE.createRoot(document.getElementById("root")).render(o.createElement(JE,null,o.createElement(WE,null)));
