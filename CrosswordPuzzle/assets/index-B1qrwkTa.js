(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))s(L);new MutationObserver(L=>{for(const N of L)if(N.type==="childList")for(const M of N.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&s(M)}).observe(document,{childList:!0,subtree:!0});function O(L){const N={};return L.integrity&&(N.integrity=L.integrity),L.referrerPolicy&&(N.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?N.credentials="include":L.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function s(L){if(L.ep)return;L.ep=!0;const N=O(L);fetch(L.href,N)}})();function EE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Eo={exports:{}},te={};var wd;function mE(){if(wd)return te;wd=1;var r=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),M=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),K=Symbol.iterator;function ie(d){return d===null||typeof d!="object"?null:(d=K&&d[K]||d["@@iterator"],typeof d=="function"?d:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},be=Object.assign,$={};function ee(d,v,z){this.props=d,this.context=v,this.refs=$,this.updater=z||le}ee.prototype.isReactComponent={},ee.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},ee.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function D(){}D.prototype=ee.prototype;function Y(d,v,z){this.props=d,this.context=v,this.refs=$,this.updater=z||le}var ce=Y.prototype=new D;ce.constructor=Y,be(ce,ee.prototype),ce.isPureReactComponent=!0;var ue=Array.isArray;function Be(){}var V={H:null,A:null,T:null,S:null},se=Object.prototype.hasOwnProperty;function Re(d,v,z){var q=z.ref;return{$$typeof:r,type:d,key:v,ref:q!==void 0?q:null,props:z}}function Ue(d,v){return Re(d.type,v,d.props)}function Oe(d){return typeof d=="object"&&d!==null&&d.$$typeof===r}function Ae(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(z){return v[z]})}var ye=/\/+/g;function Ne(d,v){return typeof d=="object"&&d!==null&&d.key!=null?Ae(""+d.key):v.toString(36)}function ge(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Be,Be):(d.status="pending",d.then(function(v){d.status==="pending"&&(d.status="fulfilled",d.value=v)},function(v){d.status==="pending"&&(d.status="rejected",d.reason=v)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function R(d,v,z,q,_){var X=typeof d;(X==="undefined"||X==="boolean")&&(d=null);var J=!1;if(d===null)J=!0;else switch(X){case"bigint":case"string":case"number":J=!0;break;case"object":switch(d.$$typeof){case r:case h:J=!0;break;case I:return J=d._init,R(J(d._payload),v,z,q,_)}}if(J)return _=_(d),J=q===""?"."+Ne(d,0):q,ue(_)?(z="",J!=null&&(z=J.replace(ye,"$&/")+"/"),R(_,v,z,"",function(Dl){return Dl})):_!=null&&(Oe(_)&&(_=Ue(_,z+(_.key==null||d&&d.key===_.key?"":(""+_.key).replace(ye,"$&/")+"/")+J)),v.push(_)),1;J=0;var Ge=q===""?".":q+":";if(ue(d))for(var ze=0;ze<d.length;ze++)q=d[ze],X=Ge+Ne(q,ze),J+=R(q,v,z,X,_);else if(ze=ie(d),typeof ze=="function")for(d=ze.call(d),ze=0;!(q=d.next()).done;)q=q.value,X=Ge+Ne(q,ze++),J+=R(q,v,z,X,_);else if(X==="object"){if(typeof d.then=="function")return R(ge(d),v,z,q,_);throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return J}function m(d,v,z){if(d==null)return d;var q=[],_=0;return R(d,q,"","",function(X){return v.call(z,X,_++)}),q}function H(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(z){(d._status===0||d._status===-1)&&(d._status=1,d._result=z)},function(z){(d._status===0||d._status===-1)&&(d._status=2,d._result=z)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var k=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},Q={map:m,forEach:function(d,v,z){m(d,function(){v.apply(this,arguments)},z)},count:function(d){var v=0;return m(d,function(){v++}),v},toArray:function(d){return m(d,function(v){return v})||[]},only:function(d){if(!Oe(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return te.Activity=B,te.Children=Q,te.Component=ee,te.Fragment=O,te.Profiler=L,te.PureComponent=Y,te.StrictMode=s,te.Suspense=U,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,te.__COMPILER_RUNTIME={__proto__:null,c:function(d){return V.H.useMemoCache(d)}},te.cache=function(d){return function(){return d.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(d,v,z){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var q=be({},d.props),_=d.key;if(v!=null)for(X in v.key!==void 0&&(_=""+v.key),v)!se.call(v,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&v.ref===void 0||(q[X]=v[X]);var X=arguments.length-2;if(X===1)q.children=z;else if(1<X){for(var J=Array(X),Ge=0;Ge<X;Ge++)J[Ge]=arguments[Ge+2];q.children=J}return Re(d.type,_,q)},te.createContext=function(d){return d={$$typeof:M,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:N,_context:d},d},te.createElement=function(d,v,z){var q,_={},X=null;if(v!=null)for(q in v.key!==void 0&&(X=""+v.key),v)se.call(v,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(_[q]=v[q]);var J=arguments.length-2;if(J===1)_.children=z;else if(1<J){for(var Ge=Array(J),ze=0;ze<J;ze++)Ge[ze]=arguments[ze+2];_.children=Ge}if(d&&d.defaultProps)for(q in J=d.defaultProps,J)_[q]===void 0&&(_[q]=J[q]);return Re(d,X,_)},te.createRef=function(){return{current:null}},te.forwardRef=function(d){return{$$typeof:G,render:d}},te.isValidElement=Oe,te.lazy=function(d){return{$$typeof:I,_payload:{_status:-1,_result:d},_init:H}},te.memo=function(d,v){return{$$typeof:y,type:d,compare:v===void 0?null:v}},te.startTransition=function(d){var v=V.T,z={};V.T=z;try{var q=d(),_=V.S;_!==null&&_(z,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(Be,k)}catch(X){k(X)}finally{v!==null&&z.types!==null&&(v.types=z.types),V.T=v}},te.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},te.use=function(d){return V.H.use(d)},te.useActionState=function(d,v,z){return V.H.useActionState(d,v,z)},te.useCallback=function(d,v){return V.H.useCallback(d,v)},te.useContext=function(d){return V.H.useContext(d)},te.useDebugValue=function(){},te.useDeferredValue=function(d,v){return V.H.useDeferredValue(d,v)},te.useEffect=function(d,v){return V.H.useEffect(d,v)},te.useEffectEvent=function(d){return V.H.useEffectEvent(d)},te.useId=function(){return V.H.useId()},te.useImperativeHandle=function(d,v,z){return V.H.useImperativeHandle(d,v,z)},te.useInsertionEffect=function(d,v){return V.H.useInsertionEffect(d,v)},te.useLayoutEffect=function(d,v){return V.H.useLayoutEffect(d,v)},te.useMemo=function(d,v){return V.H.useMemo(d,v)},te.useOptimistic=function(d,v){return V.H.useOptimistic(d,v)},te.useReducer=function(d,v,z){return V.H.useReducer(d,v,z)},te.useRef=function(d){return V.H.useRef(d)},te.useState=function(d){return V.H.useState(d)},te.useSyncExternalStore=function(d,v,z){return V.H.useSyncExternalStore(d,v,z)},te.useTransition=function(){return V.H.useTransition()},te.version="19.2.4",te}var Ud;function Oo(){return Ud||(Ud=1,Eo.exports=mE()),Eo.exports}var W=Oo();const o=EE(W);var mo={exports:{}},Nn={},go={exports:{}},To={};var Dd;function gE(){return Dd||(Dd=1,(function(r){function h(R,m){var H=R.length;R.push(m);e:for(;0<H;){var k=H-1>>>1,Q=R[k];if(0<L(Q,m))R[k]=m,R[H]=Q,H=k;else break e}}function O(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var m=R[0],H=R.pop();if(H!==m){R[0]=H;e:for(var k=0,Q=R.length,d=Q>>>1;k<d;){var v=2*(k+1)-1,z=R[v],q=v+1,_=R[q];if(0>L(z,H))q<Q&&0>L(_,z)?(R[k]=_,R[q]=H,k=q):(R[k]=z,R[v]=H,k=v);else if(q<Q&&0>L(_,H))R[k]=_,R[q]=H,k=q;else break e}}return m}function L(R,m){var H=R.sortIndex-m.sortIndex;return H!==0?H:R.id-m.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;r.unstable_now=function(){return N.now()}}else{var M=Date,G=M.now();r.unstable_now=function(){return M.now()-G}}var U=[],y=[],I=1,B=null,K=3,ie=!1,le=!1,be=!1,$=!1,ee=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function ce(R){for(var m=O(y);m!==null;){if(m.callback===null)s(y);else if(m.startTime<=R)s(y),m.sortIndex=m.expirationTime,h(U,m);else break;m=O(y)}}function ue(R){if(be=!1,ce(R),!le)if(O(U)!==null)le=!0,Be||(Be=!0,Ae());else{var m=O(y);m!==null&&ge(ue,m.startTime-R)}}var Be=!1,V=-1,se=5,Re=-1;function Ue(){return $?!0:!(r.unstable_now()-Re<se)}function Oe(){if($=!1,Be){var R=r.unstable_now();Re=R;var m=!0;try{e:{le=!1,be&&(be=!1,D(V),V=-1),ie=!0;var H=K;try{t:{for(ce(R),B=O(U);B!==null&&!(B.expirationTime>R&&Ue());){var k=B.callback;if(typeof k=="function"){B.callback=null,K=B.priorityLevel;var Q=k(B.expirationTime<=R);if(R=r.unstable_now(),typeof Q=="function"){B.callback=Q,ce(R),m=!0;break t}B===O(U)&&s(U),ce(R)}else s(U);B=O(U)}if(B!==null)m=!0;else{var d=O(y);d!==null&&ge(ue,d.startTime-R),m=!1}}break e}finally{B=null,K=H,ie=!1}m=void 0}}finally{m?Ae():Be=!1}}}var Ae;if(typeof Y=="function")Ae=function(){Y(Oe)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Ne=ye.port2;ye.port1.onmessage=Oe,Ae=function(){Ne.postMessage(null)}}else Ae=function(){ee(Oe,0)};function ge(R,m){V=ee(function(){R(r.unstable_now())},m)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return K},r.unstable_next=function(R){switch(K){case 1:case 2:case 3:var m=3;break;default:m=K}var H=K;K=m;try{return R()}finally{K=H}},r.unstable_requestPaint=function(){$=!0},r.unstable_runWithPriority=function(R,m){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=K;K=R;try{return m()}finally{K=H}},r.unstable_scheduleCallback=function(R,m,H){var k=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?k+H:k):H=k,R){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=H+Q,R={id:I++,callback:m,priorityLevel:R,startTime:H,expirationTime:Q,sortIndex:-1},H>k?(R.sortIndex=H,h(y,R),O(U)===null&&R===O(y)&&(be?(D(V),V=-1):be=!0,ge(ue,H-k))):(R.sortIndex=Q,h(U,R),le||ie||(le=!0,Be||(Be=!0,Ae()))),R},r.unstable_shouldYield=Ue,r.unstable_wrapCallback=function(R){var m=K;return function(){var H=K;K=m;try{return R.apply(this,arguments)}finally{K=H}}}})(To)),To}var Hd;function TE(){return Hd||(Hd=1,go.exports=gE()),go.exports}var So={exports:{}},et={};var Id;function SE(){if(Id)return et;Id=1;var r=Oo();function h(U){var y="https://react.dev/errors/"+U;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)y+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+U+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(){}var s={d:{f:O,r:function(){throw Error(h(522))},D:O,C:O,L:O,m:O,X:O,S:O,M:O},p:0,findDOMNode:null},L=Symbol.for("react.portal");function N(U,y,I){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:B==null?null:""+B,children:U,containerInfo:y,implementation:I}}var M=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(U,y){if(U==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,et.createPortal=function(U,y){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(h(299));return N(U,y,null,I)},et.flushSync=function(U){var y=M.T,I=s.p;try{if(M.T=null,s.p=2,U)return U()}finally{M.T=y,s.p=I,s.d.f()}},et.preconnect=function(U,y){typeof U=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(U,y))},et.prefetchDNS=function(U){typeof U=="string"&&s.d.D(U)},et.preinit=function(U,y){if(typeof U=="string"&&y&&typeof y.as=="string"){var I=y.as,B=G(I,y.crossOrigin),K=typeof y.integrity=="string"?y.integrity:void 0,ie=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;I==="style"?s.d.S(U,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:B,integrity:K,fetchPriority:ie}):I==="script"&&s.d.X(U,{crossOrigin:B,integrity:K,fetchPriority:ie,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},et.preinitModule=function(U,y){if(typeof U=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var I=G(y.as,y.crossOrigin);s.d.M(U,{crossOrigin:I,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(U)},et.preload=function(U,y){if(typeof U=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var I=y.as,B=G(I,y.crossOrigin);s.d.L(U,I,{crossOrigin:B,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},et.preloadModule=function(U,y){if(typeof U=="string")if(y){var I=G(y.as,y.crossOrigin);s.d.m(U,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:I,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(U)},et.requestFormReset=function(U){s.d.r(U)},et.unstable_batchedUpdates=function(U,y){return U(y)},et.useFormState=function(U,y,I){return M.H.useFormState(U,y,I)},et.useFormStatus=function(){return M.H.useHostTransitionStatus()},et.version="19.2.4",et}var Bd;function RE(){if(Bd)return So.exports;Bd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(h){console.error(h)}}return r(),So.exports=SE(),So.exports}var Gd;function yE(){if(Gd)return Nn;Gd=1;var r=TE(),h=Oo(),O=RE();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function N(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function M(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(N(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=N(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return U(n),e;if(i===l)return U(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function I(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=I(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,K=Symbol.for("react.element"),ie=Symbol.for("react.transitional.element"),le=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Oe=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=Oe&&e[Oe]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case be:return"Fragment";case ee:return"Profiler";case $:return"StrictMode";case ue:return"Suspense";case Be:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case le:return"Portal";case Y:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:Ne(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return Ne(e(t))}catch{}}return null}var ge=Array.isArray,R=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,m=O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},k=[],Q=-1;function d(e){return{current:e}}function v(e){0>Q||(e.current=k[Q],k[Q]=null,Q--)}function z(e,t){Q++,k[Q]=e.current,e.current=t}var q=d(null),_=d(null),X=d(null),J=d(null);function Ge(e,t){switch(z(X,t),z(_,e),z(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$f(t),e=ed(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}v(q),z(q,e)}function ze(){v(q),v(_),v(X)}function Dl(e){e.memoizedState!==null&&z(J,e);var t=q.current,a=ed(t,e.type);t!==a&&(z(_,e),z(q,a))}function Un(e){_.current===e&&(v(q),v(_)),J.current===e&&(v(J),On._currentValue=H)}var Fi,Co;function Na(e){if(Fi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Fi=t&&t[1]||"",Co=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fi+e+Co}var Wi=!1;function Ji(e,t){if(!e||Wi)return"";Wi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(p){var S=p}Reflect.construct(e,[],w)}else{try{w.call()}catch(p){S=p}e.call(w.prototype)}}else{try{throw Error()}catch(p){S=p}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(p){if(p&&S&&typeof p.stack=="string")return[p.stack,S.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),T=c.split(`
`);for(n=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;if(l===f.length||n===T.length)for(l=f.length-1,n=T.length-1;1<=l&&0<=n&&f[l]!==T[n];)n--;for(;1<=l&&0<=n;l--,n--)if(f[l]!==T[n]){if(l!==1||n!==1)do if(l--,n--,0>n||f[l]!==T[n]){var b=`
`+f[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=n);break}}}finally{Wi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Na(a):""}function jd(e,t){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return e.child!==t&&t!==null?Na("Suspense Fallback"):Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return Ji(e.type,!1);case 11:return Ji(e.type.render,!1);case 1:return Ji(e.type,!0);case 31:return Na("Activity");default:return""}}function Mo(e){try{var t="",a=null;do t+=jd(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $i=Object.prototype.hasOwnProperty,eu=r.unstable_scheduleCallback,tu=r.unstable_cancelCallback,Qd=r.unstable_shouldYield,Xd=r.unstable_requestPaint,rt=r.unstable_now,Zd=r.unstable_getCurrentPriorityLevel,wo=r.unstable_ImmediatePriority,Uo=r.unstable_UserBlockingPriority,Dn=r.unstable_NormalPriority,Fd=r.unstable_LowPriority,Do=r.unstable_IdlePriority,Wd=r.log,Jd=r.unstable_setDisableYieldValue,Hl=null,st=null;function ea(e){if(typeof Wd=="function"&&Jd(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(Hl,e)}catch{}}var ft=Math.clz32?Math.clz32:tA,$d=Math.log,eA=Math.LN2;function tA(e){return e>>>=0,e===0?32:31-($d(e)/eA|0)|0}var Hn=256,In=262144,Bn=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=La(l):(u&=c,u!==0?n=La(u):a||(a=c&~e,a!==0&&(n=La(a))))):(c=l&~i,c!==0?n=La(c):u!==0?n=La(u):a||(a=l&~e,a!==0&&(n=La(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Il(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function aA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ho(){var e=Bn;return Bn<<=1,(Bn&62914560)===0&&(Bn=4194304),e}function au(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Bl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lA(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,T=e.hiddenUpdates;for(a=u&~a;0<a;){var b=31-ft(a),w=1<<b;c[b]=0,f[b]=-1;var S=T[b];if(S!==null)for(T[b]=null,b=0;b<S.length;b++){var p=S[b];p!==null&&(p.lane&=-536870913)}a&=~w}l!==0&&Io(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Io(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Bo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ft(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Go(e,t){var a=t&-t;return a=(a&42)!==0?1:lu(a),(a&(e.suspendedLanes|t))!==0?0:a}function lu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zo(){var e=m.p;return e!==0?e:(e=window.event,e===void 0?32:pd(e.type))}function Yo(e,t){var a=m.p;try{return m.p=e,t()}finally{m.p=a}}var ta=Math.random().toString(36).slice(2),Ze="__reactFiber$"+ta,at="__reactProps$"+ta,Pa="__reactContainer$"+ta,iu="__reactEvents$"+ta,nA="__reactListeners$"+ta,iA="__reactHandles$"+ta,Ko="__reactResources$"+ta,Gl="__reactMarker$"+ta;function uu(e){delete e[Ze],delete e[at],delete e[iu],delete e[nA],delete e[iA]}function ja(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Pa]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cd(e);e!==null;){if(a=e[Ze])return a;e=cd(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Ze]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Xa(e){var t=e[Ko];return t||(t=e[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Gl]=!0}var _o=new Set,ko={};function Ca(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(ko[e]=t,e=0;e<t.length;e++)_o.add(t[e])}var uA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vo={},qo={};function cA(e){return $i.call(qo,e)?!0:$i.call(Vo,e)?!1:uA.test(e)?qo[e]=!0:(Vo[e]=!0,!1)}function zn(e,t,a){if(cA(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Yn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oA(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cu(e){if(!e._valueTracker){var t=xo(e)?"checked":"value";e._valueTracker=oA(e,t,""+e[t])}}function Po(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=xo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rA=/[\n"\\]/g;function Rt(e){return e.replace(rA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ou(e,t,a,l,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?ru(e,u,St(t)):a!=null?ru(e,u,St(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+St(c):e.removeAttribute("name")}function jo(e,t,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){cu(e);return}a=a!=null?""+St(a):"",t=t!=null?""+St(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),cu(e)}function ru(e,t,a){t==="number"&&Kn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Fa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Qo(e,t,a){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+St(a):""}function Xo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(ge(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=St(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),cu(e)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var sA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||sA.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Fo(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Zo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Zo(e,i,t[i])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _n(e){return dA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zt(){}var fu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,$a=null;function Wo(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(ou(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[at]||null;if(!n)throw Error(s(90));ou(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Po(l)}break e;case"textarea":Qo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Fa(e,!!a.multiple,t,!1)}}}var Au=!1;function Jo(e,t,a){if(Au)return e(t,a);Au=!0;try{var l=e(t);return l}finally{if(Au=!1,(Ja!==null||$a!==null)&&(Li(),Ja&&(t=Ja,e=$a,$a=Ja=null,Wo(t),e)))for(t=0;t<e.length;t++)Wo(e[t])}}function Yl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[at]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Yt)try{var Kl={};Object.defineProperty(Kl,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Kl,Kl),window.removeEventListener("test",Kl,Kl)}catch{hu=!1}var aa=null,Eu=null,kn=null;function $o(){if(kn)return kn;var e,t=Eu,a=t.length,l,n="value"in aa?aa.value:aa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return kn=n.slice(e,1<l?1-l:void 0)}function Vn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function er(){return!1}function lt(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qn:er,this.isPropagationStopped=er,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=lt(Ma),_l=B({},Ma,{view:0,detail:0}),AA=lt(_l),mu,gu,kl,Pn=B({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kl&&(kl&&e.type==="mousemove"?(mu=e.screenX-kl.screenX,gu=e.screenY-kl.screenY):gu=mu=0,kl=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),tr=lt(Pn),hA=B({},Pn,{dataTransfer:0}),EA=lt(hA),mA=B({},_l,{relatedTarget:0}),Tu=lt(mA),gA=B({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),TA=lt(gA),SA=B({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),RA=lt(SA),yA=B({},Ma,{data:0}),ar=lt(yA),OA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vA[e])?!!t[e]:!1}function Su(){return bA}var NA=B({},_l,{key:function(e){if(e.key){var t=OA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),LA=lt(NA),CA=B({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lr=lt(CA),MA=B({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),wA=lt(MA),UA=B({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),DA=lt(UA),HA=B({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IA=lt(HA),BA=B({},Ma,{newState:0,oldState:0}),GA=lt(BA),zA=[9,13,27,32],Ru=Yt&&"CompositionEvent"in window,Vl=null;Yt&&"documentMode"in document&&(Vl=document.documentMode);var YA=Yt&&"TextEvent"in window&&!Vl,nr=Yt&&(!Ru||Vl&&8<Vl&&11>=Vl),ir=" ",ur=!1;function cr(e,t){switch(e){case"keyup":return zA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function or(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var el=!1;function KA(e,t){switch(e){case"compositionend":return or(t);case"keypress":return t.which!==32?null:(ur=!0,ir);case"textInput":return e=t.data,e===ir&&ur?null:e;default:return null}}function _A(e,t){if(el)return e==="compositionend"||!Ru&&cr(e,t)?(e=$o(),kn=Eu=aa=null,el=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nr&&t.locale!=="ko"?null:t.data;default:return null}}var kA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kA[e.type]:t==="textarea"}function sr(e,t,a,l){Ja?$a?$a.push(l):$a=[l]:Ja=l,t=Ii(t,"onChange"),0<t.length&&(a=new xn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,xl=null;function VA(e){Qf(e,0)}function jn(e){var t=zl(e);if(Po(t))return e}function fr(e,t){if(e==="change")return t}var dr=!1;if(Yt){var yu;if(Yt){var Ou="oninput"in document;if(!Ou){var Ar=document.createElement("div");Ar.setAttribute("oninput","return;"),Ou=typeof Ar.oninput=="function"}yu=Ou}else yu=!1;dr=yu&&(!document.documentMode||9<document.documentMode)}function hr(){ql&&(ql.detachEvent("onpropertychange",Er),xl=ql=null)}function Er(e){if(e.propertyName==="value"&&jn(xl)){var t=[];sr(t,xl,e,du(e)),Jo(VA,t)}}function qA(e,t,a){e==="focusin"?(hr(),ql=t,xl=a,ql.attachEvent("onpropertychange",Er)):e==="focusout"&&hr()}function xA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jn(xl)}function PA(e,t){if(e==="click")return jn(t)}function jA(e,t){if(e==="input"||e==="change")return jn(t)}function QA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:QA;function Pl(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!$i.call(t,n)||!dt(e[n],t[n]))return!1}return!0}function mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gr(e,t){var a=mr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mr(a)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kn(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var XA=Yt&&"documentMode"in document&&11>=document.documentMode,tl=null,vu=null,jl=null,bu=!1;function Rr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||tl==null||tl!==Kn(l)||(l=tl,"selectionStart"in l&&pu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jl&&Pl(jl,l)||(jl=l,l=Ii(vu,"onSelect"),0<l.length&&(t=new xn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=tl)))}function wa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var al={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},Nu={},yr={};Yt&&(yr=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Ua(e){if(Nu[e])return Nu[e];if(!al[e])return e;var t=al[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in yr)return Nu[e]=t[a];return e}var Or=Ua("animationend"),pr=Ua("animationiteration"),vr=Ua("animationstart"),ZA=Ua("transitionrun"),FA=Ua("transitionstart"),WA=Ua("transitioncancel"),br=Ua("transitionend"),Nr=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Mt(e,t){Nr.set(e,t),Ca(t,[e])}var Qn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],ll=0,Cu=0;function Xn(){for(var e=ll,t=Cu=ll=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Lr(a,n,i)}}function Zn(e,t,a,l){yt[ll++]=e,yt[ll++]=t,yt[ll++]=a,yt[ll++]=l,Cu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Mu(e,t,a,l){return Zn(e,t,a,l),Fn(e)}function Da(e,t){return Zn(e,null,null,t),Fn(e)}function Lr(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ft(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Fn(e){if(50<En)throw En=0,Yc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function JA(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,a,l){return new JA(e,t,a,l)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=At(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")wu(e)&&(u=1);else if(typeof e=="string")u=lE(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=At(31,a,t,n),e.elementType=Re,e.lanes=i,e;case be:return Ha(a.children,n,i,t);case $:u=8,n|=24;break;case ee:return e=At(12,a,t,n|2),e.elementType=ee,e.lanes=i,e;case ue:return e=At(13,a,t,n),e.elementType=ue,e.lanes=i,e;case Be:return e=At(19,a,t,n),e.elementType=Be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:u=10;break e;case D:u=9;break e;case ce:u=11;break e;case V:u=14;break e;case se:u=16,l=null;break e}u=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=At(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ha(e,t,a,l){return e=At(7,e,l,t),e.lanes=a,e}function Uu(e,t,a){return e=At(6,e,null,t),e.lanes=a,e}function Mr(e){var t=At(18,null,null,0);return t.stateNode=e,t}function Du(e,t,a){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wr=new WeakMap;function Ot(e,t){if(typeof e=="object"&&e!==null){var a=wr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Mo(t)},wr.set(e,t),t)}return{value:e,source:t,stack:Mo(t)}}var il=[],ul=0,Jn=null,Ql=0,pt=[],vt=0,la=null,Dt=1,Ht="";function _t(e,t){il[ul++]=Ql,il[ul++]=Jn,Jn=e,Ql=t}function Ur(e,t,a){pt[vt++]=Dt,pt[vt++]=Ht,pt[vt++]=la,la=e;var l=Dt;e=Ht;var n=32-ft(l)-1;l&=~(1<<n),a+=1;var i=32-ft(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Dt=1<<32-ft(t)+n|a<<n|l,Ht=i+e}else Dt=1<<i|a<<n|l,Ht=e}function Hu(e){e.return!==null&&(_t(e,1),Ur(e,1,0))}function Iu(e){for(;e===Jn;)Jn=il[--ul],il[ul]=null,Ql=il[--ul],il[ul]=null;for(;e===la;)la=pt[--vt],pt[vt]=null,Ht=pt[--vt],pt[vt]=null,Dt=pt[--vt],pt[vt]=null}function Dr(e,t){pt[vt++]=Dt,pt[vt++]=Ht,pt[vt++]=la,Dt=t.id,Ht=t.overflow,la=e}var Fe=null,De=null,he=!1,na=null,bt=!1,Bu=Error(s(519));function ia(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(Ot(t,e)),Bu}function Hr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[at]=l,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<gn.length;a++)re(gn[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),jo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Xo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wf(t.textContent,a)?(l.popover!=null&&(re("beforetoggle",t),re("toggle",t)),l.onScroll!=null&&re("scroll",t),l.onScrollEnd!=null&&re("scrollend",t),l.onClick!=null&&(t.onclick=zt),t=!0):t=!1,t||ia(e,!0)}function Ir(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:Fe=Fe.return}}function cl(e){if(e!==Fe)return!1;if(!he)return Ir(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$c(e.type,e.memoizedProps)),a=!a),a&&De&&ia(e),Ir(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));De=ud(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));De=ud(e)}else t===27?(t=De,Sa(e.type)?(e=no,no=null,De=e):De=t):De=Fe?Lt(e.stateNode.nextSibling):null;return!0}function Ia(){De=Fe=null,he=!1}function Gu(){var e=na;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),na=null),e}function Xl(e){na===null?na=[e]:na.push(e)}var zu=d(null),Ba=null,kt=null;function ua(e,t,a){z(zu,t._currentValue),t._currentValue=a}function Vt(e){e._currentValue=zu.current,v(zu)}function Yu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ku(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Yu(i.return,a,e),l||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Yu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ol(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var c=n.type;dt(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===J.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}n=n.return}e!==null&&Ku(t,e,a,l),t.flags|=262144}function $n(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ba=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Br(Ba,e)}function ei(e,t){return Ba===null&&Ga(e),Br(e,t)}function Br(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},kt===null){if(e===null)throw Error(s(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return a}var $A=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},eh=r.unstable_scheduleCallback,th=r.unstable_NormalPriority,Ve={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new $A,data:new Map,refCount:0}}function Zl(e){e.refCount--,e.refCount===0&&eh(th,function(){e.controller.abort()})}var Fl=null,ku=0,rl=0,sl=null;function ah(e,t){if(Fl===null){var a=Fl=[];ku=0,rl=xc(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ku++,t.then(Gr,Gr),t}function Gr(){if(--ku===0&&Fl!==null){sl!==null&&(sl.status="fulfilled");var e=Fl;Fl=null,rl=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var zr=R.S;R.S=function(e,t){yf=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ah(e,t),zr!==null&&zr(e,t)};var za=d(null);function Vu(){var e=za.current;return e!==null?e:we.pooledCache}function ti(e,t){t===null?z(za,za.current):z(za,t.pool)}function Yr(){var e=Vu();return e===null?null:{parent:Ve._currentValue,pool:e}}var fl=Error(s(460)),qu=Error(s(474)),ai=Error(s(542)),li={then:function(){}};function Kr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _r(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(zt,zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vr(e),e;default:if(typeof t.status=="string")t.then(zt,zt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vr(e),e}throw Ka=t,fl}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ka=a,fl):a}}var Ka=null;function kr(){if(Ka===null)throw Error(s(459));var e=Ka;return Ka=null,e}function Vr(e){if(e===fl||e===ai)throw Error(s(483))}var dl=null,Wl=0;function ni(e){var t=Wl;return Wl+=1,dl===null&&(dl=[]),_r(dl,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ii(e,t){throw t.$$typeof===K?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qr(e){function t(E,A){if(e){var g=E.deletions;g===null?(E.deletions=[A],E.flags|=16):g.push(A)}}function a(E,A){if(!e)return null;for(;A!==null;)t(E,A),A=A.sibling;return null}function l(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function n(E,A){return E=Kt(E,A),E.index=0,E.sibling=null,E}function i(E,A,g){return E.index=g,e?(g=E.alternate,g!==null?(g=g.index,g<A?(E.flags|=67108866,A):g):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function u(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function c(E,A,g,C){return A===null||A.tag!==6?(A=Uu(g,E.mode,C),A.return=E,A):(A=n(A,g),A.return=E,A)}function f(E,A,g,C){var Z=g.type;return Z===be?b(E,A,g.props.children,C,g.key):A!==null&&(A.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===se&&Ya(Z)===A.type)?(A=n(A,g.props),Jl(A,g),A.return=E,A):(A=Wn(g.type,g.key,g.props,null,E.mode,C),Jl(A,g),A.return=E,A)}function T(E,A,g,C){return A===null||A.tag!==4||A.stateNode.containerInfo!==g.containerInfo||A.stateNode.implementation!==g.implementation?(A=Du(g,E.mode,C),A.return=E,A):(A=n(A,g.children||[]),A.return=E,A)}function b(E,A,g,C,Z){return A===null||A.tag!==7?(A=Ha(g,E.mode,C,Z),A.return=E,A):(A=n(A,g),A.return=E,A)}function w(E,A,g){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Uu(""+A,E.mode,g),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ie:return g=Wn(A.type,A.key,A.props,null,E.mode,g),Jl(g,A),g.return=E,g;case le:return A=Du(A,E.mode,g),A.return=E,A;case se:return A=Ya(A),w(E,A,g)}if(ge(A)||Ae(A))return A=Ha(A,E.mode,g,null),A.return=E,A;if(typeof A.then=="function")return w(E,ni(A),g);if(A.$$typeof===Y)return w(E,ei(E,A),g);ii(E,A)}return null}function S(E,A,g,C){var Z=A!==null?A.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return Z!==null?null:c(E,A,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ie:return g.key===Z?f(E,A,g,C):null;case le:return g.key===Z?T(E,A,g,C):null;case se:return g=Ya(g),S(E,A,g,C)}if(ge(g)||Ae(g))return Z!==null?null:b(E,A,g,C,null);if(typeof g.then=="function")return S(E,A,ni(g),C);if(g.$$typeof===Y)return S(E,A,ei(E,g),C);ii(E,g)}return null}function p(E,A,g,C,Z){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return E=E.get(g)||null,c(A,E,""+C,Z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ie:return E=E.get(C.key===null?g:C.key)||null,f(A,E,C,Z);case le:return E=E.get(C.key===null?g:C.key)||null,T(A,E,C,Z);case se:return C=Ya(C),p(E,A,g,C,Z)}if(ge(C)||Ae(C))return E=E.get(g)||null,b(A,E,C,Z,null);if(typeof C.then=="function")return p(E,A,g,ni(C),Z);if(C.$$typeof===Y)return p(E,A,g,ei(A,C),Z);ii(A,C)}return null}function x(E,A,g,C){for(var Z=null,Ee=null,P=A,ne=A=0,de=null;P!==null&&ne<g.length;ne++){P.index>ne?(de=P,P=null):de=P.sibling;var me=S(E,P,g[ne],C);if(me===null){P===null&&(P=de);break}e&&P&&me.alternate===null&&t(E,P),A=i(me,A,ne),Ee===null?Z=me:Ee.sibling=me,Ee=me,P=de}if(ne===g.length)return a(E,P),he&&_t(E,ne),Z;if(P===null){for(;ne<g.length;ne++)P=w(E,g[ne],C),P!==null&&(A=i(P,A,ne),Ee===null?Z=P:Ee.sibling=P,Ee=P);return he&&_t(E,ne),Z}for(P=l(P);ne<g.length;ne++)de=p(P,E,ne,g[ne],C),de!==null&&(e&&de.alternate!==null&&P.delete(de.key===null?ne:de.key),A=i(de,A,ne),Ee===null?Z=de:Ee.sibling=de,Ee=de);return e&&P.forEach(function(va){return t(E,va)}),he&&_t(E,ne),Z}function F(E,A,g,C){if(g==null)throw Error(s(151));for(var Z=null,Ee=null,P=A,ne=A=0,de=null,me=g.next();P!==null&&!me.done;ne++,me=g.next()){P.index>ne?(de=P,P=null):de=P.sibling;var va=S(E,P,me.value,C);if(va===null){P===null&&(P=de);break}e&&P&&va.alternate===null&&t(E,P),A=i(va,A,ne),Ee===null?Z=va:Ee.sibling=va,Ee=va,P=de}if(me.done)return a(E,P),he&&_t(E,ne),Z;if(P===null){for(;!me.done;ne++,me=g.next())me=w(E,me.value,C),me!==null&&(A=i(me,A,ne),Ee===null?Z=me:Ee.sibling=me,Ee=me);return he&&_t(E,ne),Z}for(P=l(P);!me.done;ne++,me=g.next())me=p(P,E,ne,me.value,C),me!==null&&(e&&me.alternate!==null&&P.delete(me.key===null?ne:me.key),A=i(me,A,ne),Ee===null?Z=me:Ee.sibling=me,Ee=me);return e&&P.forEach(function(hE){return t(E,hE)}),he&&_t(E,ne),Z}function Me(E,A,g,C){if(typeof g=="object"&&g!==null&&g.type===be&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ie:e:{for(var Z=g.key;A!==null;){if(A.key===Z){if(Z=g.type,Z===be){if(A.tag===7){a(E,A.sibling),C=n(A,g.props.children),C.return=E,E=C;break e}}else if(A.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===se&&Ya(Z)===A.type){a(E,A.sibling),C=n(A,g.props),Jl(C,g),C.return=E,E=C;break e}a(E,A);break}else t(E,A);A=A.sibling}g.type===be?(C=Ha(g.props.children,E.mode,C,g.key),C.return=E,E=C):(C=Wn(g.type,g.key,g.props,null,E.mode,C),Jl(C,g),C.return=E,E=C)}return u(E);case le:e:{for(Z=g.key;A!==null;){if(A.key===Z)if(A.tag===4&&A.stateNode.containerInfo===g.containerInfo&&A.stateNode.implementation===g.implementation){a(E,A.sibling),C=n(A,g.children||[]),C.return=E,E=C;break e}else{a(E,A);break}else t(E,A);A=A.sibling}C=Du(g,E.mode,C),C.return=E,E=C}return u(E);case se:return g=Ya(g),Me(E,A,g,C)}if(ge(g))return x(E,A,g,C);if(Ae(g)){if(Z=Ae(g),typeof Z!="function")throw Error(s(150));return g=Z.call(g),F(E,A,g,C)}if(typeof g.then=="function")return Me(E,A,ni(g),C);if(g.$$typeof===Y)return Me(E,A,ei(E,g),C);ii(E,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,A!==null&&A.tag===6?(a(E,A.sibling),C=n(A,g),C.return=E,E=C):(a(E,A),C=Uu(g,E.mode,C),C.return=E,E=C),u(E)):a(E,A)}return function(E,A,g,C){try{Wl=0;var Z=Me(E,A,g,C);return dl=null,Z}catch(P){if(P===fl||P===ai)throw P;var Ee=At(29,P,null,E.mode);return Ee.lanes=C,Ee.return=E,Ee}}}var _a=qr(!0),xr=qr(!1),ca=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Te&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Fn(e),Lr(e,null,a),t}return Zn(e,l,t,a),Fn(e)}function $l(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bo(e,a)}}function ju(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Qu=!1;function en(){if(Qu){var e=sl;if(e!==null)throw e}}function tn(e,t,a,l){Qu=!1;var n=e.updateQueue;ca=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,T=f.next;f.next=null,u===null?i=T:u.next=T,u=f;var b=e.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=T:c.next=T,b.lastBaseUpdate=f))}if(i!==null){var w=n.baseState;u=0,b=T=f=null,c=i;do{var S=c.lane&-536870913,p=S!==c.lane;if(p?(fe&S)===S:(l&S)===S){S!==0&&S===rl&&(Qu=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var x=e,F=c;S=t;var Me=a;switch(F.tag){case 1:if(x=F.payload,typeof x=="function"){w=x.call(Me,w,S);break e}w=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=F.payload,S=typeof x=="function"?x.call(Me,w,S):x,S==null)break e;w=B({},w,S);break e;case 2:ca=!0}}S=c.callback,S!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[S]:p.push(S))}else p={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(T=b=p,f=w):b=b.next=p,u|=S;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;p=c,c=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);b===null&&(f=w),n.baseState=f,n.firstBaseUpdate=T,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),ha|=u,e.lanes=u,e.memoizedState=w}}function Pr(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function jr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pr(a[e],t)}var Al=d(null),ui=d(0);function Qr(e,t){e=Wt,z(ui,e),z(Al,t),Wt=e|t.baseLanes}function Xu(){z(ui,Wt),z(Al,Al.current)}function Zu(){Wt=ui.current,v(Al),v(ui)}var ht=d(null),Nt=null;function sa(e){var t=e.alternate;z(_e,_e.current&1),z(ht,e),Nt===null&&(t===null||Al.current!==null||t.memoizedState!==null)&&(Nt=e)}function Fu(e){z(_e,_e.current),z(ht,e),Nt===null&&(Nt=e)}function Xr(e){e.tag===22?(z(_e,_e.current),z(ht,e),Nt===null&&(Nt=e)):fa()}function fa(){z(_e,_e.current),z(ht,ht.current)}function Et(e){v(ht),Nt===e&&(Nt=null),v(_e)}var _e=d(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ao(a)||lo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,ae=null,Le=null,qe=null,oi=!1,hl=!1,ka=!1,ri=0,an=0,El=null,nh=0;function Ye(){throw Error(s(321))}function Wu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!dt(e[a],t[a]))return!1;return!0}function Ju(e,t,a,l,n,i){return qt=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Us:Ac,ka=!1,i=a(l,n),ka=!1,hl&&(i=Fr(t,a,l,n)),Zr(e),i}function Zr(e){R.H=un;var t=Le!==null&&Le.next!==null;if(qt=0,qe=Le=ae=null,oi=!1,an=0,El=null,t)throw Error(s(300));e===null||xe||(e=e.dependencies,e!==null&&$n(e)&&(xe=!0))}function Fr(e,t,a,l){ae=e;var n=0;do{if(hl&&(El=null),an=0,hl=!1,25<=n)throw Error(s(301));if(n+=1,qe=Le=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=Ds,i=t(a,l)}while(hl);return i}function ih(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ln(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ae.flags|=1024),t}function $u(){var e=ri!==0;return ri=0,e}function ec(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function tc(e){if(oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oi=!1}qt=0,qe=Le=ae=null,hl=!1,an=ri=0,El=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ae.memoizedState=qe=e:qe=qe.next=e,qe}function ke(){if(Le===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=qe===null?ae.memoizedState:qe.next;if(t!==null)qe=t,Le=e;else{if(e===null)throw ae.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},qe===null?ae.memoizedState=qe=e:qe=qe.next=e}return qe}function si(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ln(e){var t=an;return an+=1,El===null&&(El=[]),e=_r(El,e,t),t=ae,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Us:Ac),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ln(e);if(e.$$typeof===Y)return We(e)}throw Error(s(438,String(e)))}function ac(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=si(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ue;return t.index++,a}function xt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=ke();return lc(t,Le,e)}function lc(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,f=null,T=t,b=!1;do{var w=T.lane&-536870913;if(w!==T.lane?(fe&w)===w:(qt&w)===w){var S=T.revertLane;if(S===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),w===rl&&(b=!0);else if((qt&S)===S){T=T.next,S===rl&&(b=!0);continue}else w={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=w,u=i):f=f.next=w,ae.lanes|=S,ha|=S;w=T.action,ka&&a(i,w),i=T.hasEagerState?T.eagerState:a(i,w)}else S={lane:w,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=S,u=i):f=f.next=S,ae.lanes|=w,ha|=w;T=T.next}while(T!==null&&T!==t);if(f===null?u=i:f.next=c,!dt(i,e.memoizedState)&&(xe=!0,b&&(a=sl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=f,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function nc(e){var t=ke(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);dt(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Wr(e,t,a){var l=ae,n=ke(),i=he;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var u=!dt((Le||n).memoizedState,a);if(u&&(n.memoizedState=a,xe=!0),n=n.queue,cc(es.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},$r.bind(null,l,n,a,t),null),we===null)throw Error(s(349));i||(qt&127)!==0||Jr(l,t,a)}return a}function Jr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=si(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function $r(e,t,a,l){t.value=a,t.getSnapshot=l,ts(t)&&as(e)}function es(e,t,a){return a(function(){ts(t)&&as(e)})}function ts(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!dt(e,a)}catch{return!0}}function as(e){var t=Da(e,2);t!==null&&ot(t,e,2)}function ic(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),ka){ea(!0);try{a()}finally{ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:e},t}function ls(e,t,a,l){return e.baseState=a,lc(e,Le,typeof l=="function"?l:xt)}function uh(e,t,a,l,n){if(Ei(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,ns(t,i)):(i.next=a.next,t.pending=a.next=i)}}function ns(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,u={};R.T=u;try{var c=a(n,l),f=R.S;f!==null&&f(u,c),is(e,t,c)}catch(T){uc(e,t,T)}finally{i!==null&&u.types!==null&&(i.types=u.types),R.T=i}}else try{i=a(n,l),is(e,t,i)}catch(T){uc(e,t,T)}}function is(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){us(e,t,l)},function(l){return uc(e,t,l)}):us(e,t,a)}function us(e,t,a){t.status="fulfilled",t.value=a,cs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ns(e,a)))}function uc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,cs(t),t=t.next;while(t!==l)}e.action=null}function cs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function os(e,t){return t}function rs(e,t){if(he){var a=we.formState;if(a!==null){e:{var l=ae;if(he){if(De){t:{for(var n=De,i=bt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Lt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){De=Lt(n.nextSibling),l=n.data==="F!";break e}}ia(l)}l=!1}l&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},a.queue=l,a=Cs.bind(null,ae,l),l.dispatch=a,l=ic(!1),i=dc.bind(null,ae,!1,l.queue),l=tt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=uh.bind(null,ae,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ss(e){var t=ke();return fs(t,Le,e)}function fs(e,t,a){if(t=lc(e,t,os)[0],e=di(xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ln(t)}catch(u){throw u===fl?ai:u}else l=t;t=ke();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,ml(9,{destroy:void 0},ch.bind(null,n,a),null)),[l,i,e]}function ch(e,t){e.action=t}function ds(e){var t=ke(),a=Le;if(a!==null)return fs(t,a,e);ke(),t=t.memoizedState,a=ke();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=si(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function As(){return ke().memoizedState}function Ai(e,t,a,l){var n=tt();ae.flags|=e,n.memoizedState=ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function hi(e,t,a,l){var n=ke();l=l===void 0?null:l;var i=n.memoizedState.inst;Le!==null&&l!==null&&Wu(l,Le.memoizedState.deps)?n.memoizedState=ml(t,i,a,l):(ae.flags|=e,n.memoizedState=ml(1|t,i,a,l))}function hs(e,t){Ai(8390656,8,e,t)}function cc(e,t){hi(2048,8,e,t)}function oh(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=si(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Es(e){var t=ke().memoizedState;return oh({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return hi(4,2,e,t)}function gs(e,t){return hi(4,4,e,t)}function Ts(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ss(e,t,a){a=a!=null?a.concat([e]):null,hi(4,4,Ts.bind(null,t,e),a)}function oc(){}function Rs(e,t){var a=ke();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Wu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ys(e,t){var a=ke();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Wu(t,l[1]))return l[0];if(l=e(),ka){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l}function rc(e,t,a){return a===void 0||(qt&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=pf(),ae.lanes|=e,ha|=e,a)}function Os(e,t,a,l){return dt(a,t)?a:Al.current!==null?(e=rc(e,a,l),dt(e,t)||(xe=!0),e):(qt&42)===0||(qt&1073741824)!==0&&(fe&261930)===0?(xe=!0,e.memoizedState=a):(e=pf(),ae.lanes|=e,ha|=e,t)}function ps(e,t,a,l,n){var i=m.p;m.p=i!==0&&8>i?i:8;var u=R.T,c={};R.T=c,dc(e,!1,t,a);try{var f=n(),T=R.S;if(T!==null&&T(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=lh(f,l);nn(e,t,b,Tt(e))}else nn(e,t,l,Tt(e))}catch(w){nn(e,t,{then:function(){},status:"rejected",reason:w},Tt())}finally{m.p=i,u!==null&&c.types!==null&&(u.types=c.types),R.T=u}}function rh(){}function sc(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=vs(e).queue;ps(e,n,t,H,a===null?rh:function(){return bs(e),a(l)})}function vs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=vs(e);t.next===null&&(t=e.alternate.memoizedState),nn(e,t.next.queue,{},Tt())}function fc(){return We(On)}function Ns(){return ke().memoizedState}function Ls(){return ke().memoizedState}function sh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Tt();e=oa(a);var l=ra(t,e,a);l!==null&&(ot(l,t,a),$l(l,t,a)),t={cache:_u()},e.payload=t;return}t=t.return}}function fh(e,t,a){var l=Tt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)?Ms(t,a):(a=Mu(e,t,a,l),a!==null&&(ot(a,e,l),ws(a,t,l)))}function Cs(e,t,a){var l=Tt();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))Ms(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,dt(c,u))return Zn(e,t,n,0),we===null&&Xn(),!1}catch{}if(a=Mu(e,t,n,l),a!==null)return ot(a,e,l),ws(a,t,l),!0}return!1}function dc(e,t,a,l){if(l={lane:2,revertLane:xc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(s(479))}else t=Mu(e,a,l,2),t!==null&&ot(t,e,2)}function Ei(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Ms(e,t){hl=oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ws(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bo(e,a)}}var un={readContext:We,use:fi,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};un.useEffectEvent=Ye;var Us={readContext:We,use:fi,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:hs,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ai(4194308,4,Ts.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){Ai(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var l=e();if(ka){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=tt();if(a!==void 0){var n=a(t);if(ka){ea(!0);try{a(t)}finally{ea(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=fh.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=ic(e);var t=e.queue,a=Cs.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:oc,useDeferredValue:function(e,t){var a=tt();return rc(a,e,t)},useTransition:function(){var e=ic(!1);return e=ps.bind(null,ae,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=tt();if(he){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),we===null)throw Error(s(349));(fe&127)!==0||Jr(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,hs(es.bind(null,l,i,e),[e]),l.flags|=2048,ml(9,{destroy:void 0},$r.bind(null,l,i,a,t),null),a},useId:function(){var e=tt(),t=we.identifierPrefix;if(he){var a=Ht,l=Dt;a=(l&~(1<<32-ft(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ri++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=nh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fc,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=dc.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:ac,useCacheRefresh:function(){return tt().memoizedState=sh.bind(null,ae)},useEffectEvent:function(e){var t=tt(),a={impl:e};return t.memoizedState=a,function(){if((Te&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ac={readContext:We,use:fi,useCallback:Rs,useContext:We,useEffect:cc,useImperativeHandle:Ss,useInsertionEffect:ms,useLayoutEffect:gs,useMemo:ys,useReducer:di,useRef:As,useState:function(){return di(xt)},useDebugValue:oc,useDeferredValue:function(e,t){var a=ke();return Os(a,Le.memoizedState,e,t)},useTransition:function(){var e=di(xt)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:Wr,useId:Ns,useHostTransitionStatus:fc,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var a=ke();return ls(a,Le,e,t)},useMemoCache:ac,useCacheRefresh:Ls};Ac.useEffectEvent=Es;var Ds={readContext:We,use:fi,useCallback:Rs,useContext:We,useEffect:cc,useImperativeHandle:Ss,useInsertionEffect:ms,useLayoutEffect:gs,useMemo:ys,useReducer:nc,useRef:As,useState:function(){return nc(xt)},useDebugValue:oc,useDeferredValue:function(e,t){var a=ke();return Le===null?rc(a,e,t):Os(a,Le.memoizedState,e,t)},useTransition:function(){var e=nc(xt)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:Wr,useId:Ns,useHostTransitionStatus:fc,useFormState:ds,useActionState:ds,useOptimistic:function(e,t){var a=ke();return Le!==null?ls(a,Le,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ac,useCacheRefresh:Ls};Ds.useEffectEvent=Es;function hc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:B({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ec={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Tt(),n=oa(l);n.payload=t,a!=null&&(n.callback=a),t=ra(e,n,l),t!==null&&(ot(t,e,l),$l(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Tt(),n=oa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ra(e,n,l),t!==null&&(ot(t,e,l),$l(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Tt(),l=oa(a);l.tag=2,t!=null&&(l.callback=t),t=ra(e,l,a),t!==null&&(ot(t,e,a),$l(t,e,a))}};function Hs(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(n,i):!0}function Is(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Va(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=B({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Bs(e){Qn(e)}function Gs(e){console.error(e)}function zs(e){Qn(e)}function mi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ys(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mc(e,t,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){mi(e,t)},a}function Ks(e){return e=oa(e),e.tag=3,e}function _s(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Ys(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ys(t,a,l),typeof n!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function dh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&ol(t,a,n,!0),a=ht.current,a!==null){switch(a.tag){case 31:case 13:return Nt===null?Ci():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===li?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),kc(e,l,n)),!1;case 22:return a.flags|=65536,l===li?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),kc(e,l,n)),!1}throw Error(s(435,a.tag))}return kc(e,l,n),Ci(),!1}if(he)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Bu&&(e=Error(s(422),{cause:l}),Xl(Ot(e,a)))):(l!==Bu&&(t=Error(s(423),{cause:l}),Xl(Ot(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ot(l,a),n=mc(e.stateNode,l,n),ju(e,n),Ke!==4&&(Ke=2)),!1;var i=Error(s(520),{cause:l});if(i=Ot(i,a),hn===null?hn=[i]:hn.push(i),Ke!==4&&(Ke=2),t===null)return!0;l=Ot(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=mc(a.stateNode,l,e),ju(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ea===null||!Ea.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ks(n),_s(n,e,a,l),ju(a,n),!1}a=a.return}while(a!==null);return!1}var gc=Error(s(461)),xe=!1;function Je(e,t,a,l){t.child=e===null?xr(t,null,a,l):_a(t,e.child,a,l)}function ks(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ga(t),l=Ju(e,t,a,u,i,n),c=$u(),e!==null&&!xe?(ec(e,t,n),Pt(e,t,n)):(he&&c&&Hu(t),t.flags|=1,Je(e,t,l,n),t.child)}function Vs(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!wu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,qs(e,t,i,l,n)):(e=Wn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!bc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(u,l)&&e.ref===t.ref)return Pt(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function qs(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Pl(i,l)&&e.ref===t.ref)if(xe=!1,t.pendingProps=l=i,bc(e,n))(e.flags&131072)!==0&&(xe=!0);else return t.lanes=e.lanes,Pt(e,t,n)}return Tc(e,t,a,l,n)}function xs(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Ps(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ti(t,i!==null?i.cachePool:null),i!==null?Qr(t,i):Xu(),Xr(t);else return l=t.lanes=536870912,Ps(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ti(t,i.cachePool),Qr(t,i),fa(),t.memoizedState=null):(e!==null&&ti(t,null),Xu(),fa());return Je(e,t,n,a),t.child}function cn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ps(e,t,a,l,n){var i=Vu();return i=i===null?null:{parent:Ve._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ti(t,null),Xu(),Xr(t),e!==null&&ol(e,t,l,!0),t.childLanes=n,null}function gi(e,t){return t=Si({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function js(e,t,a){return _a(t,e.child,null,a),e=gi(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function Ah(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(l.mode==="hidden")return e=gi(t,l),t.lanes=536870912,cn(null,e);if(Fu(t),(e=De)?(e=id(e,bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:Dt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Mr(e),a.return=t,t.child=a,Fe=t,De=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return gi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Fu(t),n)if(t.flags&256)t.flags&=-257,t=js(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(xe||ol(e,t,a,!1),n=(a&e.childLanes)!==0,xe||n){if(l=we,l!==null&&(u=Go(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Da(e,u),ot(l,e,u),gc;Ci(),t=js(e,t,a)}else e=i.treeContext,De=Lt(u.nextSibling),Fe=t,he=!0,na=null,bt=!1,e!==null&&Dr(t,e),t=gi(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ti(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Tc(e,t,a,l,n){return Ga(t),a=Ju(e,t,a,l,void 0,n),l=$u(),e!==null&&!xe?(ec(e,t,n),Pt(e,t,n)):(he&&l&&Hu(t),t.flags|=1,Je(e,t,a,n),t.child)}function Qs(e,t,a,l,n,i){return Ga(t),t.updateQueue=null,a=Fr(t,l,a,n),Zr(e),l=$u(),e!==null&&!xe?(ec(e,t,i),Pt(e,t,i)):(he&&l&&Hu(t),t.flags|=1,Je(e,t,a,i),t.child)}function Xs(e,t,a,l,n){if(Ga(t),t.stateNode===null){var i=nl,u=a.contextType;typeof u=="object"&&u!==null&&(i=We(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ec,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},xu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?We(u):nl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(hc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Ec.enqueueReplaceState(i,i.state,null),tn(t,l,i,n),en(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,f=Va(a,c);i.props=f;var T=i.context,b=a.contextType;u=nl,typeof b=="object"&&b!==null&&(u=We(b));var w=a.getDerivedStateFromProps;b=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||T!==u)&&Is(t,i,l,u),ca=!1;var S=t.memoizedState;i.state=S,tn(t,l,i,n),en(),T=t.memoizedState,c||S!==T||ca?(typeof w=="function"&&(hc(t,a,w,l),T=t.memoizedState),(f=ca||Hs(t,a,f,l,S,T,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=u,l=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Pu(e,t),u=t.memoizedProps,b=Va(a,u),i.props=b,w=t.pendingProps,S=i.context,T=a.contextType,f=nl,typeof T=="object"&&T!==null&&(f=We(T)),c=a.getDerivedStateFromProps,(T=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==w||S!==f)&&Is(t,i,l,f),ca=!1,S=t.memoizedState,i.state=S,tn(t,l,i,n),en();var p=t.memoizedState;u!==w||S!==p||ca||e!==null&&e.dependencies!==null&&$n(e.dependencies)?(typeof c=="function"&&(hc(t,a,c,l),p=t.memoizedState),(b=ca||Hs(t,a,b,l,S,p,f)||e!==null&&e.dependencies!==null&&$n(e.dependencies))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,p,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,p,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=f,l=b):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ti(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=_a(t,e.child,null,n),t.child=_a(t,null,a,n)):Je(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Pt(e,t,n),e}function Zs(e,t,a,l){return Ia(),t.flags|=256,Je(e,t,a,l),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(e){return{baseLanes:e,cachePool:Yr()}}function yc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function Fs(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(n?sa(t):fa(),(e=De)?(e=id(e,bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:Dt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Mr(e),a.return=t,t.child=a,Fe=t,De=null)):e=null,e===null)throw ia(t);return lo(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(fa(),n=t.mode,c=Si({mode:"hidden",children:c},n),l=Ha(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=Rc(a),l.childLanes=yc(e,u,a),t.memoizedState=Sc,cn(null,l)):(sa(t),Oc(t,c))}var f=e.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)t.flags&256?(sa(t),t.flags&=-257,t=pc(e,t,a)):t.memoizedState!==null?(fa(),t.child=e.child,t.flags|=128,t=null):(fa(),c=l.fallback,n=t.mode,l=Si({mode:"visible",children:l.children},n),c=Ha(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,_a(t,e.child,null,a),l=t.child,l.memoizedState=Rc(a),l.childLanes=yc(e,u,a),t.memoizedState=Sc,t=cn(null,l));else if(sa(t),lo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var T=u.dgst;u=T,l=Error(s(419)),l.stack="",l.digest=u,Xl({value:l,source:null,stack:null}),t=pc(e,t,a)}else if(xe||ol(e,t,a,!1),u=(a&e.childLanes)!==0,xe||u){if(u=we,u!==null&&(l=Go(u,a),l!==0&&l!==f.retryLane))throw f.retryLane=l,Da(e,l),ot(u,e,l),gc;ao(c)||Ci(),t=pc(e,t,a)}else ao(c)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,De=Lt(c.nextSibling),Fe=t,he=!0,na=null,bt=!1,e!==null&&Dr(t,e),t=Oc(t,l.children),t.flags|=4096);return t}return n?(fa(),c=l.fallback,n=t.mode,f=e.child,T=f.sibling,l=Kt(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,T!==null?c=Kt(T,c):(c=Ha(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,cn(null,l),l=t.child,c=e.child.memoizedState,c===null?c=Rc(a):(n=c.cachePool,n!==null?(f=Ve._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Yr(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=yc(e,u,a),t.memoizedState=Sc,cn(e.child,l)):(sa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Oc(e,t){return t=Si({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Si(e,t){return e=At(22,e,null,t),e.lanes=0,e}function pc(e,t,a){return _a(t,e.child,null,a),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ws(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Yu(e.return,t,a)}function vc(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Js(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=_e.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,z(_e,u),Je(e,t,l,a),l=he?Ql:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ws(e,a,t);else if(e.tag===19)Ws(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ci(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),vc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ci(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}vc(t,!0,a,null,i,l);break;case"together":vc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ol(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$n(e)))}function hh(e,t,a){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),ua(t,Ve,e.memoizedState.cache),Ia();break;case 27:case 5:Dl(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Fu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Fs(e,t,a):(sa(t),e=Pt(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(ol(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Js(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),z(_e,_e.current),l)break;return null;case 22:return t.lanes=0,xs(e,t,a,t.pendingProps);case 24:ua(t,Ve,e.memoizedState.cache)}return Pt(e,t,a)}function $s(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)xe=!0;else{if(!bc(e,a)&&(t.flags&128)===0)return xe=!1,hh(e,t,a);xe=(e.flags&131072)!==0}else xe=!1,he&&(t.flags&1048576)!==0&&Ur(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e=="function")wu(e)?(l=Va(e,l),t.tag=1,t=Xs(null,t,e,l,a)):(t.tag=0,t=Tc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ce){t.tag=11,t=ks(null,t,e,l,a);break e}else if(n===V){t.tag=14,t=Vs(null,t,e,l,a);break e}}throw t=Ne(e)||e,Error(s(306,t,""))}}return t;case 0:return Tc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Va(l,t.pendingProps),Xs(e,t,l,n,a);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Pu(e,t),tn(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ua(t,Ve,l),l!==i.cache&&Ku(t,[Ve],a,!0),en(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Zs(e,t,l,a);break e}else if(l!==n){n=Ot(Error(s(424)),t),Xl(n),t=Zs(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,De=Lt(e.firstChild),Fe=t,he=!0,na=null,bt=!0,a=xr(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ia(),l===n){t=Pt(e,t,a);break e}Je(e,t,l,a)}t=t.child}return t;case 26:return Ti(e,t),e===null?(a=fd(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,l=Bi(X.current).createElement(a),l[Ze]=t,l[at]=e,$e(l,a,e),Qe(l),t.stateNode=l):t.memoizedState=fd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dl(t),e===null&&he&&(l=t.stateNode=od(t.type,t.pendingProps,X.current),Fe=t,bt=!0,n=De,Sa(t.type)?(no=n,De=Lt(l.firstChild)):De=n),Je(e,t,t.pendingProps.children,a),Ti(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((n=l=De)&&(l=xh(l,t.type,t.pendingProps,bt),l!==null?(t.stateNode=l,Fe=t,De=Lt(l.firstChild),bt=!1,n=!0):n=!1),n||ia(t)),Dl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,$c(n,i)?l=null:u!==null&&$c(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Ju(e,t,ih,null,null,a),On._currentValue=n),Ti(e,t),Je(e,t,l,a),t.child;case 6:return e===null&&he&&((e=a=De)&&(a=Ph(a,t.pendingProps,bt),a!==null?(t.stateNode=a,Fe=t,De=null,e=!0):e=!1),e||ia(t)),null;case 13:return Fs(e,t,a);case 4:return Ge(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=_a(t,null,l,a):Je(e,t,l,a),t.child;case 11:return ks(e,t,t.type,t.pendingProps,a);case 7:return Je(e,t,t.pendingProps,a),t.child;case 8:return Je(e,t,t.pendingProps.children,a),t.child;case 12:return Je(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ua(t,t.type,l.value),Je(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ga(t),n=We(n),l=l(n),t.flags|=1,Je(e,t,l,a),t.child;case 14:return Vs(e,t,t.type,t.pendingProps,a);case 15:return qs(e,t,t.type,t.pendingProps,a);case 19:return Js(e,t,a);case 31:return Ah(e,t,a);case 22:return xs(e,t,a,t.pendingProps);case 24:return Ga(t),l=We(Ve),e===null?(n=Vu(),n===null&&(n=we,i=_u(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},xu(t),ua(t,Ve,n)):((e.lanes&a)!==0&&(Pu(e,t),tn(t,null,null,a),en()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ua(t,Ve,l)):(l=i.cache,ua(t,Ve,l),l!==n.cache&&Ku(t,[Ve],a,!0))),Je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function jt(e){e.flags|=4}function Nc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Lf())e.flags|=8192;else throw Ka=li,qu}else e.flags&=-16777217}function ef(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!md(t))if(Lf())e.flags|=8192;else throw Ka=li,qu}function Ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ho():536870912,e.lanes|=t,Rl|=t)}function on(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Eh(e,t,a){var l=t.pendingProps;switch(Iu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Vt(Ve),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(cl(t)?jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gu())),He(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(jt(t),i!==null?(He(t),ef(t,i)):(He(t),Nc(t,n,null,l,a))):i?i!==e.memoizedState?(jt(t),He(t),ef(t,i)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&jt(t),He(t),Nc(t,n,e,l,a)),null;case 27:if(Un(t),a=X.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return He(t),null}e=q.current,cl(t)?Hr(t):(e=od(n,l,a),t.stateNode=e,jt(t))}return He(t),null;case 5:if(Un(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return He(t),null}if(i=q.current,cl(t))Hr(t);else{var u=Bi(X.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Ze]=t,i[at]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch($e(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&jt(t)}}return He(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=X.current,cl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wf(e.nodeValue,a)),e||ia(t,!0)}else e=Bi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return He(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=cl(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ze]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(s(558))}return He(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=cl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Ze]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),n=!1}else n=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ri(t,t.updateQueue),He(t),null);case 4:return ze(),e===null&&Xc(t.stateNode.containerInfo),He(t),null;case 10:return Vt(t.type),He(t),null;case 19:if(v(_e),l=t.memoizedState,l===null)return He(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)on(l,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ci(e),i!==null){for(t.flags|=128,on(l,!1),e=i.updateQueue,t.updateQueue=e,Ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Cr(a,e),a=a.sibling;return z(_e,_e.current&1|2),he&&_t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&rt()>bi&&(t.flags|=128,n=!0,on(l,!1),t.lanes=4194304)}else{if(!n)if(e=ci(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ri(t,e),on(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!he)return He(t),null}else 2*rt()-l.renderingStartTime>bi&&a!==536870912&&(t.flags|=128,n=!0,on(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=rt(),e.sibling=null,a=_e.current,z(_e,n?a&1|2:a&1),he&&_t(t,l.treeForkCount),e):(He(t),null);case 22:case 23:return Et(t),Zu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),a=t.updateQueue,a!==null&&Ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&v(za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Ve),He(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function mh(e,t){switch(Iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Ve),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Un(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(s(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return v(_e),null;case 4:return ze(),null;case 10:return Vt(t.type),null;case 22:case 23:return Et(t),Zu(),e!==null&&v(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Ve),null;case 25:return null;default:return null}}function tf(e,t){switch(Iu(t),t.tag){case 3:Vt(Ve),ze();break;case 26:case 27:case 5:Un(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:v(_e);break;case 10:Vt(t.type);break;case 22:case 23:Et(t),Zu(),e!==null&&v(za);break;case 24:Vt(Ve)}}function rn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){ve(t,t.return,c)}}function da(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var f=a,T=c;try{T()}catch(b){ve(n,f,b)}}}l=l.next}while(l!==i)}}catch(b){ve(t,t.return,b)}}function af(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{jr(t,a)}catch(l){ve(e,e.return,l)}}}function lf(e,t,a){a.props=Va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ve(e,t,l)}}function sn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ve(e,t,n)}}function It(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ve(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ve(e,t,n)}else a.current=null}function nf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ve(e,e.return,n)}}function Lc(e,t,a){try{var l=e.stateNode;Yh(l,e.type,a,t),l[at]=t}catch(n){ve(e,e.return,n)}}function uf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=zt));else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Mc(e,t,a),e=e.sibling;e!==null;)Mc(e,t,a),e=e.sibling}function yi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(yi(e,t,a),e=e.sibling;e!==null;)yi(e,t,a),e=e.sibling}function cf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$e(t,l,a),t[Ze]=e,t[at]=a}catch(i){ve(e,e.return,i)}}var Qt=!1,Pe=!1,wc=!1,of=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function gh(e,t){if(e=e.containerInfo,Wc=Vi,e=Sr(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,c=-1,f=-1,T=0,b=0,w=e,S=null;t:for(;;){for(var p;w!==a||n!==0&&w.nodeType!==3||(c=u+n),w!==i||l!==0&&w.nodeType!==3||(f=u+l),w.nodeType===3&&(u+=w.nodeValue.length),(p=w.firstChild)!==null;)S=w,w=p;for(;;){if(w===e)break t;if(S===a&&++T===n&&(c=u),S===i&&++b===l&&(f=u),(p=w.nextSibling)!==null)break;w=S,S=w.parentNode}w=p}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:e,selectionRange:a},Vi=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var x=Va(a.type,n);e=l.getSnapshotBeforeUpdate(x,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){ve(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)to(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":to(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function rf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(e,a),l&4&&rn(5,a);break;case 1:if(Zt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ve(a,a.return,u)}else{var n=Va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ve(a,a.return,u)}}l&64&&af(a),l&512&&sn(a,a.return);break;case 3:if(Zt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{jr(e,t)}catch(u){ve(a,a.return,u)}}break;case 27:t===null&&l&4&&cf(a);case 26:case 5:Zt(e,a),t===null&&l&4&&nf(a),l&512&&sn(a,a.return);break;case 12:Zt(e,a);break;case 31:Zt(e,a),l&4&&df(e,a);break;case 13:Zt(e,a),l&4&&Af(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Nh.bind(null,a),jh(e,a))));break;case 22:if(l=a.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||Pe,n=Qt;var i=Pe;Qt=l,(Pe=t)&&!i?Ft(e,a,(a.subtreeFlags&8772)!==0):Zt(e,a),Qt=n,Pe=i}break;case 30:break;default:Zt(e,a)}}function sf(e){var t=e.alternate;t!==null&&(e.alternate=null,sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,nt=!1;function Xt(e,t,a){for(a=a.child;a!==null;)ff(e,t,a),a=a.sibling}function ff(e,t,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Hl,a)}catch{}switch(a.tag){case 26:Pe||It(a,t),Xt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Pe||It(a,t);var l=Ie,n=nt;Sa(a.type)&&(Ie=a.stateNode,nt=!1),Xt(e,t,a),Sn(a.stateNode),Ie=l,nt=n;break;case 5:Pe||It(a,t);case 6:if(l=Ie,n=nt,Ie=null,Xt(e,t,a),Ie=l,nt=n,Ie!==null)if(nt)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(a.stateNode)}catch(i){ve(a,t,i)}else try{Ie.removeChild(a.stateNode)}catch(i){ve(a,t,i)}break;case 18:Ie!==null&&(nt?(e=Ie,ld(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cl(e)):ld(Ie,a.stateNode));break;case 4:l=Ie,n=nt,Ie=a.stateNode.containerInfo,nt=!0,Xt(e,t,a),Ie=l,nt=n;break;case 0:case 11:case 14:case 15:da(2,a,t),Pe||da(4,a,t),Xt(e,t,a);break;case 1:Pe||(It(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&lf(a,t,l)),Xt(e,t,a);break;case 21:Xt(e,t,a);break;case 22:Pe=(l=Pe)||a.memoizedState!==null,Xt(e,t,a),Pe=l;break;default:Xt(e,t,a)}}function df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(a){ve(t,t.return,a)}}}function Af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(a){ve(t,t.return,a)}}function Th(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new of),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new of),t;default:throw Error(s(435,e.tag))}}function Oi(e,t){var a=Th(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Lh.bind(null,e,l);l.then(n,n)}})}function it(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(Sa(c.type)){Ie=c.stateNode,nt=!1;break e}break;case 5:Ie=c.stateNode,nt=!1;break e;case 3:case 4:Ie=c.stateNode.containerInfo,nt=!0;break e}c=c.return}if(Ie===null)throw Error(s(160));ff(i,u,n),Ie=null,nt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hf(t,e),t=t.sibling}var wt=null;function hf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),ut(e),l&4&&(da(3,e,e.return),rn(3,e),da(5,e,e.return));break;case 1:it(t,e),ut(e),l&512&&(Pe||a===null||It(a,a.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=wt;if(it(t,e),ut(e),l&512&&(Pe||a===null||It(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Gl]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),$e(i,l,a),i[Ze]=e,Qe(i),l=i;break e;case"link":var u=hd("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;case"meta":if(u=hd("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[Ze]=e,Qe(i),l=i}e.stateNode=l}else Ed(n,e.type,e.stateNode);else e.stateNode=Ad(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Ed(n,e.type,e.stateNode):Ad(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Lc(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),ut(e),l&512&&(Pe||a===null||It(a,a.return)),a!==null&&l&4&&Lc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),ut(e),l&512&&(Pe||a===null||It(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(x){ve(e,e.return,x)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Lc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(wc=!0);break;case 6:if(it(t,e),ut(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(x){ve(e,e.return,x)}}break;case 3:if(Yi=null,n=wt,wt=Gi(t.containerInfo),it(t,e),wt=n,ut(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(x){ve(e,e.return,x)}wc&&(wc=!1,Ef(e));break;case 4:l=wt,wt=Gi(e.stateNode.containerInfo),it(t,e),ut(e),wt=l;break;case 12:it(t,e),ut(e);break;case 31:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 13:it(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vi=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 22:n=e.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,T=Qt,b=Pe;if(Qt=T||n,Pe=b||f,it(t,e),Pe=b,Qt=T,ut(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||f||Qt||Pe||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(i=f.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var w=f.memoizedProps.style,S=w!=null&&w.hasOwnProperty("display")?w.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(x){ve(f,f.return,x)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(x){ve(f,f.return,x)}}}else if(t.tag===18){if(a===null){f=t;try{var p=f.stateNode;n?nd(p,!0):nd(f.stateNode,!1)}catch(x){ve(f,f.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Oi(e,a))));break;case 19:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 30:break;case 21:break;default:it(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(uf(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=Cc(e);yi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Wa(u,""),a.flags&=-33);var c=Cc(e);yi(e,c,u);break;case 3:case 4:var f=a.stateNode.containerInfo,T=Cc(e);Mc(e,T,f);break;default:throw Error(s(161))}}catch(b){ve(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rf(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),qa(t);break;case 1:It(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&lf(t,t.return,a),qa(t);break;case 27:Sn(t.stateNode);case 26:case 5:It(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function Ft(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ft(n,i,a),rn(4,i);break;case 1:if(Ft(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(T){ve(l,l.return,T)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Pr(f[n],c)}catch(T){ve(l,l.return,T)}}a&&u&64&&af(i),sn(i,i.return);break;case 27:cf(i);case 26:case 5:Ft(n,i,a),a&&l===null&&u&4&&nf(i),sn(i,i.return);break;case 12:Ft(n,i,a);break;case 31:Ft(n,i,a),a&&u&4&&df(n,i);break;case 13:Ft(n,i,a),a&&u&4&&Af(n,i);break;case 22:i.memoizedState===null&&Ft(n,i,a),sn(i,i.return);break;case 30:break;default:Ft(n,i,a)}t=t.sibling}}function Uc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zl(a))}function Dc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e))}function Ut(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mf(e,t,a,l),t=t.sibling}function mf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,a,l),n&2048&&rn(9,t);break;case 1:Ut(e,t,a,l);break;case 3:Ut(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e)));break;case 12:if(n&2048){Ut(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){ve(t,t.return,f)}}else Ut(e,t,a,l);break;case 31:Ut(e,t,a,l);break;case 13:Ut(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Ut(e,t,a,l):fn(e,t):i._visibility&2?Ut(e,t,a,l):(i._visibility|=2,gl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Uc(u,t);break;case 24:Ut(e,t,a,l),n&2048&&Dc(t.alternate,t);break;default:Ut(e,t,a,l)}}function gl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=a,f=l,T=u.flags;switch(u.tag){case 0:case 11:case 15:gl(i,u,c,f,n),rn(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?gl(i,u,c,f,n):fn(i,u):(b._visibility|=2,gl(i,u,c,f,n)),n&&T&2048&&Uc(u.alternate,u);break;case 24:gl(i,u,c,f,n),n&&T&2048&&Dc(u.alternate,u);break;default:gl(i,u,c,f,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Uc(l.alternate,l);break;case 24:fn(a,l),n&2048&&Dc(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var dn=8192;function Tl(e,t,a){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)gf(e,t,a),e=e.sibling}function gf(e,t,a){switch(e.tag){case 26:Tl(e,t,a),e.flags&dn&&e.memoizedState!==null&&nE(a,wt,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,a);break;case 3:case 4:var l=wt;wt=Gi(e.stateNode.containerInfo),Tl(e,t,a),wt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=dn,dn=16777216,Tl(e,t,a),dn=l):Tl(e,t,a));break;default:Tl(e,t,a)}}function Tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function An(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,Rf(l,e)}Tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 0:case 11:case 15:An(e),e.flags&2048&&da(9,e,e.return);break;case 3:An(e);break;case 12:An(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pi(e)):An(e);break;default:An(e)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,Rf(l,e)}Tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),pi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,pi(t));break;default:pi(t)}e=e.sibling}}function Rf(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=e;Xe!==null;){l=Xe;var n=l.sibling,i=l.return;if(sf(l),l===a){Xe=null;break e}if(n!==null){n.return=i,Xe=n;break e}Xe=i}}}var Sh={getCacheForType:function(e){var t=We(Ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return We(Ve).controller.signal}},Rh=typeof WeakMap=="function"?WeakMap:Map,Te=0,we=null,oe=null,fe=0,pe=0,mt=null,Aa=!1,Sl=!1,Hc=!1,Wt=0,Ke=0,ha=0,xa=0,Ic=0,gt=0,Rl=0,hn=null,ct=null,Bc=!1,vi=0,yf=0,bi=1/0,Ni=null,Ea=null,je=0,ma=null,yl=null,Jt=0,Gc=0,zc=null,Of=null,En=0,Yc=null;function Tt(){return(Te&2)!==0&&fe!==0?fe&-fe:R.T!==null?xc():zo()}function pf(){if(gt===0)if((fe&536870912)===0||he){var e=In;In<<=1,(In&3932160)===0&&(In=262144),gt=e}else gt=536870912;return e=ht.current,e!==null&&(e.flags|=32),gt}function ot(e,t,a){(e===we&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ol(e,0),ga(e,fe,gt,!1)),Bl(e,a),((Te&2)===0||e!==we)&&(e===we&&((Te&2)===0&&(xa|=a),Ke===4&&ga(e,fe,gt,!1)),Bt(e))}function vf(e,t,a){if((Te&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Il(e,t),n=l?ph(e,t):_c(e,t,!0),i=l;do{if(n===0){Sl&&!l&&ga(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!yh(a)){n=_c(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=hn;var f=c.current.memoizedState.isDehydrated;if(f&&(Ol(c,u).flags|=256),u=_c(c,u,!1),u!==2){if(Hc&&!f){c.errorRecoveryDisabledLanes|=i,xa|=i,n=4;break e}i=ct,ct=n,i!==null&&(ct===null?ct=i:ct.push.apply(ct,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ol(e,0),ga(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ga(l,t,gt,!Aa);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=vi+300-rt(),10<n)){if(ga(l,t,gt,!Aa),Gn(l,0,!0)!==0)break e;Jt=t,l.timeoutHandle=td(bf.bind(null,l,a,ct,Ni,Bc,t,gt,xa,Rl,Aa,i,"Throttled",-0,0),n);break e}bf(l,a,ct,Ni,Bc,t,gt,xa,Rl,Aa,i,null,-0,0)}}break}while(!0);Bt(e)}function bf(e,t,a,l,n,i,u,c,f,T,b,w,S,p){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zt},gf(t,i,w);var x=(i&62914560)===i?vi-rt():(i&4194048)===i?yf-rt():0;if(x=iE(w,x),x!==null){Jt=i,e.cancelPendingCommit=x(Hf.bind(null,e,t,i,a,l,n,u,c,f,b,w,null,S,p)),ga(e,i,u,!T);return}}Hf(e,t,i,a,l,n,u,c,f)}function yh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!dt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,a,l){t&=~Ic,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ft(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Io(e,a,t)}function Li(){return(Te&6)===0?(mn(0),!1):!0}function Kc(){if(oe!==null){if(pe===0)var e=oe.return;else e=oe,kt=Ba=null,tc(e),dl=null,Wl=0,e=oe;for(;e!==null;)tf(e.alternate,e),e=e.return;oe=null}}function Ol(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Jt=0,Kc(),we=e,oe=a=Kt(e.current,null),fe=t,pe=0,mt=null,Aa=!1,Sl=Il(e,t),Hc=!1,Rl=gt=Ic=xa=ha=Ke=0,ct=hn=null,Bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ft(l),i=1<<n;t|=e[n],l&=~i}return Wt=t,Xn(),a}function Nf(e,t){ae=null,R.H=un,t===fl||t===ai?(t=kr(),pe=3):t===qu?(t=kr(),pe=4):pe=t===gc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,oe===null&&(Ke=1,mi(e,Ot(t,e.current)))}function Lf(){var e=ht.current;return e===null?!0:(fe&4194048)===fe?Nt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===Nt:!1}function Cf(){var e=R.H;return R.H=un,e===null?un:e}function Mf(){var e=R.A;return R.A=Sh,e}function Ci(){Ke=4,Aa||(fe&4194048)!==fe&&ht.current!==null||(Sl=!0),(ha&134217727)===0&&(xa&134217727)===0||we===null||ga(we,fe,gt,!1)}function _c(e,t,a){var l=Te;Te|=2;var n=Cf(),i=Mf();(we!==e||fe!==t)&&(Ni=null,Ol(e,t)),t=!1;var u=Ke;e:do try{if(pe!==0&&oe!==null){var c=oe,f=mt;switch(pe){case 8:Kc(),u=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var T=pe;if(pe=0,mt=null,pl(e,c,f,T),a&&Sl){u=0;break e}break;default:T=pe,pe=0,mt=null,pl(e,c,f,T)}}Oh(),u=Ke;break}catch(b){Nf(e,b)}while(!0);return t&&e.shellSuspendCounter++,kt=Ba=null,Te=l,R.H=n,R.A=i,oe===null&&(we=null,fe=0,Xn()),u}function Oh(){for(;oe!==null;)wf(oe)}function ph(e,t){var a=Te;Te|=2;var l=Cf(),n=Mf();we!==e||fe!==t?(Ni=null,bi=rt()+500,Ol(e,t)):Sl=Il(e,t);e:do try{if(pe!==0&&oe!==null){t=oe;var i=mt;t:switch(pe){case 1:pe=0,mt=null,pl(e,t,i,1);break;case 2:case 9:if(Kr(i)){pe=0,mt=null,Uf(t);break}t=function(){pe!==2&&pe!==9||we!==e||(pe=7),Bt(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:Kr(i)?(pe=0,mt=null,Uf(t)):(pe=0,mt=null,pl(e,t,i,7));break;case 5:var u=null;switch(oe.tag){case 26:u=oe.memoizedState;case 5:case 27:var c=oe;if(u?md(u):c.stateNode.complete){pe=0,mt=null;var f=c.sibling;if(f!==null)oe=f;else{var T=c.return;T!==null?(oe=T,Mi(T)):oe=null}break t}}pe=0,mt=null,pl(e,t,i,5);break;case 6:pe=0,mt=null,pl(e,t,i,6);break;case 8:Kc(),Ke=6;break e;default:throw Error(s(462))}}vh();break}catch(b){Nf(e,b)}while(!0);return kt=Ba=null,R.H=l,R.A=n,Te=a,oe!==null?0:(we=null,fe=0,Xn(),Ke)}function vh(){for(;oe!==null&&!Qd();)wf(oe)}function wf(e){var t=$s(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Mi(e):oe=t}function Uf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Qs(a,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=Qs(a,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:tc(t);default:tf(a,t),t=oe=Cr(t,Wt),t=$s(a,t,Wt)}e.memoizedProps=e.pendingProps,t===null?Mi(e):oe=t}function pl(e,t,a,l){kt=Ba=null,tc(t),dl=null,Wl=0;var n=t.return;try{if(dh(e,n,t,a,fe)){Ke=1,mi(e,Ot(a,e.current)),oe=null;return}}catch(i){if(n!==null)throw oe=n,i;Ke=1,mi(e,Ot(a,e.current)),oe=null;return}t.flags&32768?(he||l===1?e=!0:Sl||(fe&536870912)!==0?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),Df(t,e)):Mi(t)}function Mi(e){var t=e;do{if((t.flags&32768)!==0){Df(t,Aa);return}e=t.return;var a=Eh(t.alternate,t,Wt);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);Ke===0&&(Ke=5)}function Df(e,t){do{var a=mh(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);Ke=6,oe=null}function Hf(e,t,a,l,n,i,u,c,f){e.cancelPendingCommit=null;do wi();while(je!==0);if((Te&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Cu,lA(e,a,i,u,c,f),e===we&&(oe=we=null,fe=0),yl=t,ma=e,Jt=a,Gc=i,zc=n,Of=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ch(Dn,function(){return Yf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=m.p,m.p=2,u=Te,Te|=4;try{gh(e,t,a)}finally{Te=u,m.p=n,R.T=l}}je=1,If(),Bf(),Gf()}}function If(){if(je===1){je=0;var e=ma,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=m.p;m.p=2;var n=Te;Te|=4;try{hf(t,e);var i=Jc,u=Sr(e.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Tr(c.ownerDocument.documentElement,c)){if(f!==null&&pu(c)){var T=f.start,b=f.end;if(b===void 0&&(b=T),"selectionStart"in c)c.selectionStart=T,c.selectionEnd=Math.min(b,c.value.length);else{var w=c.ownerDocument||document,S=w&&w.defaultView||window;if(S.getSelection){var p=S.getSelection(),x=c.textContent.length,F=Math.min(f.start,x),Me=f.end===void 0?F:Math.min(f.end,x);!p.extend&&F>Me&&(u=Me,Me=F,F=u);var E=gr(c,F),A=gr(c,Me);if(E&&A&&(p.rangeCount!==1||p.anchorNode!==E.node||p.anchorOffset!==E.offset||p.focusNode!==A.node||p.focusOffset!==A.offset)){var g=w.createRange();g.setStart(E.node,E.offset),p.removeAllRanges(),F>Me?(p.addRange(g),p.extend(A.node,A.offset)):(g.setEnd(A.node,A.offset),p.addRange(g))}}}}for(w=[],p=c;p=p.parentNode;)p.nodeType===1&&w.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<w.length;c++){var C=w[c];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Vi=!!Wc,Jc=Wc=null}finally{Te=n,m.p=l,R.T=a}}e.current=t,je=2}}function Bf(){if(je===2){je=0;var e=ma,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=m.p;m.p=2;var n=Te;Te|=4;try{rf(e,t.alternate,t)}finally{Te=n,m.p=l,R.T=a}}je=3}}function Gf(){if(je===4||je===3){je=0,Xd();var e=ma,t=yl,a=Jt,l=Of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?je=5:(je=0,yl=ma=null,zf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ea=null),nu(a),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=m.p,m.p=2,R.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{R.T=t,m.p=n}}(Jt&3)!==0&&wi(),Bt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Yc?En++:(En=0,Yc=e):En=0,mn(0)}}function zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zl(t)))}function wi(){return If(),Bf(),Gf(),Yf()}function Yf(){if(je!==5)return!1;var e=ma,t=Gc;Gc=0;var a=nu(Jt),l=R.T,n=m.p;try{m.p=32>a?32:a,R.T=null,a=zc,zc=null;var i=ma,u=Jt;if(je=0,yl=ma=null,Jt=0,(Te&6)!==0)throw Error(s(331));var c=Te;if(Te|=4,Sf(i.current),mf(i,i.current,u,a),Te=c,mn(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Hl,i)}catch{}return!0}finally{m.p=n,R.T=l,zf(e,t)}}function Kf(e,t,a){t=Ot(a,t),t=mc(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Bl(e,2),Bt(e))}function ve(e,t,a){if(e.tag===3)Kf(e,e,a);else for(;t!==null;){if(t.tag===3){Kf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ea===null||!Ea.has(l))){e=Ot(a,e),a=Ks(2),l=ra(t,a,2),l!==null&&(_s(a,l,t,e),Bl(l,2),Bt(l));break}}t=t.return}}function kc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Rh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Hc=!0,n.add(a),e=bh.bind(null,e,t,a),t.then(e,e))}function bh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(fe&a)===a&&(Ke===4||Ke===3&&(fe&62914560)===fe&&300>rt()-vi?(Te&2)===0&&Ol(e,0):Ic|=a,Rl===fe&&(Rl=0)),Bt(e)}function _f(e,t){t===0&&(t=Ho()),e=Da(e,t),e!==null&&(Bl(e,t),Bt(e))}function Nh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),_f(e,a)}function Lh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),_f(e,a)}function Ch(e,t){return eu(e,t)}var Ui=null,vl=null,Vc=!1,Di=!1,qc=!1,Ta=0;function Bt(e){e!==vl&&e.next===null&&(vl===null?Ui=vl=e:vl=vl.next=e),Di=!0,Vc||(Vc=!0,wh())}function mn(e,t){if(!qc&&Di){qc=!0;do for(var a=!1,l=Ui;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-ft(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,xf(l,i))}else i=fe,i=Gn(l,l===we?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Il(l,i)||(a=!0,xf(l,i));l=l.next}while(a);qc=!1}}function Mh(){kf()}function kf(){Di=Vc=!1;var e=0;Ta!==0&&_h()&&(e=Ta);for(var t=rt(),a=null,l=Ui;l!==null;){var n=l.next,i=Vf(l,t);i===0?(l.next=null,a===null?Ui=n:a.next=n,n===null&&(vl=a)):(a=l,(e!==0||(i&3)!==0)&&(Di=!0)),l=n}je!==0&&je!==5||mn(e),Ta!==0&&(Ta=0)}function Vf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ft(i),c=1<<u,f=n[u];f===-1?((c&a)===0||(c&l)!==0)&&(n[u]=aA(c,t)):f<=t&&(e.expiredLanes|=c),i&=~c}if(t=we,a=fe,a=Gn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&tu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Il(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&tu(l),nu(a)){case 2:case 8:a=Uo;break;case 32:a=Dn;break;case 268435456:a=Do;break;default:a=Dn}return l=qf.bind(null,e),a=eu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&tu(l),e.callbackPriority=2,e.callbackNode=null,2}function qf(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(wi()&&e.callbackNode!==a)return null;var l=fe;return l=Gn(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(vf(e,l,t),Vf(e,rt()),e.callbackNode!=null&&e.callbackNode===a?qf.bind(null,e):null)}function xf(e,t){if(wi())return null;vf(e,t,!0)}function wh(){Vh(function(){(Te&6)!==0?eu(wo,Mh):kf()})}function xc(){if(Ta===0){var e=rl;e===0&&(e=Hn,Hn<<=1,(Hn&261888)===0&&(Hn=256)),Ta=e}return Ta}function Pf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_n(""+e)}function jf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Uh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Pf((n[at]||null).action),u=l.submitter;u&&(t=(t=u[at]||null)?Pf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new xn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ta!==0){var f=u?jf(n,u):new FormData(n);sc(a,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?jf(n,u):new FormData(n),sc(a,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var Pc=0;Pc<Lu.length;Pc++){var jc=Lu[Pc],Dh=jc.toLowerCase(),Hh=jc[0].toUpperCase()+jc.slice(1);Mt(Dh,"on"+Hh)}Mt(Or,"onAnimationEnd"),Mt(pr,"onAnimationIteration"),Mt(vr,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(ZA,"onTransitionRun"),Mt(FA,"onTransitionStart"),Mt(WA,"onTransitionCancel"),Mt(br,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function Qf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],f=c.instance,T=c.currentTarget;if(c=c.listener,f!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=T;try{i(n)}catch(b){Qn(b)}n.currentTarget=null,i=f}else for(u=0;u<l.length;u++){if(c=l[u],f=c.instance,T=c.currentTarget,c=c.listener,f!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=T;try{i(n)}catch(b){Qn(b)}n.currentTarget=null,i=f}}}}function re(e,t){var a=t[iu];a===void 0&&(a=t[iu]=new Set);var l=e+"__bubble";a.has(l)||(Xf(t,e,2,!1),a.add(l))}function Qc(e,t,a){var l=0;t&&(l|=4),Xf(a,e,l,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function Xc(e){if(!e[Hi]){e[Hi]=!0,_o.forEach(function(a){a!=="selectionchange"&&(Ih.has(a)||Qc(a,!1,e),Qc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Qc("selectionchange",!1,t))}}function Xf(e,t,a,l){switch(pd(t)){case 2:var n=oE;break;case 8:n=rE;break;default:n=ro}a=n.bind(null,t,a,e),n=void 0,!hu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Zc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=ja(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){l=i=u;continue e}c=c.parentNode}}l=l.return}Jo(function(){var T=i,b=du(a),w=[];e:{var S=Nr.get(e);if(S!==void 0){var p=xn,x=e;switch(e){case"keypress":if(Vn(a)===0)break e;case"keydown":case"keyup":p=LA;break;case"focusin":x="focus",p=Tu;break;case"focusout":x="blur",p=Tu;break;case"beforeblur":case"afterblur":p=Tu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=EA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wA;break;case Or:case pr:case vr:p=TA;break;case br:p=DA;break;case"scroll":case"scrollend":p=AA;break;case"wheel":p=IA;break;case"copy":case"cut":case"paste":p=RA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lr;break;case"toggle":case"beforetoggle":p=GA}var F=(t&4)!==0,Me=!F&&(e==="scroll"||e==="scrollend"),E=F?S!==null?S+"Capture":null:S;F=[];for(var A=T,g;A!==null;){var C=A;if(g=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||g===null||E===null||(C=Yl(A,E),C!=null&&F.push(Tn(A,C,g))),Me)break;A=A.return}0<F.length&&(S=new p(S,x,null,a,b),w.push({event:S,listeners:F}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",S&&a!==fu&&(x=a.relatedTarget||a.fromElement)&&(ja(x)||x[Pa]))break e;if((p||S)&&(S=b.window===b?b:(S=b.ownerDocument)?S.defaultView||S.parentWindow:window,p?(x=a.relatedTarget||a.toElement,p=T,x=x?ja(x):null,x!==null&&(Me=N(x),F=x.tag,x!==Me||F!==5&&F!==27&&F!==6)&&(x=null)):(p=null,x=T),p!==x)){if(F=tr,C="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(F=lr,C="onPointerLeave",E="onPointerEnter",A="pointer"),Me=p==null?S:zl(p),g=x==null?S:zl(x),S=new F(C,A+"leave",p,a,b),S.target=Me,S.relatedTarget=g,C=null,ja(b)===T&&(F=new F(E,A+"enter",x,a,b),F.target=g,F.relatedTarget=Me,C=F),Me=C,p&&x)t:{for(F=Bh,E=p,A=x,g=0,C=E;C;C=F(C))g++;C=0;for(var Z=A;Z;Z=F(Z))C++;for(;0<g-C;)E=F(E),g--;for(;0<C-g;)A=F(A),C--;for(;g--;){if(E===A||A!==null&&E===A.alternate){F=E;break t}E=F(E),A=F(A)}F=null}else F=null;p!==null&&Zf(w,S,p,F,!1),x!==null&&Me!==null&&Zf(w,Me,x,F,!0)}}e:{if(S=T?zl(T):window,p=S.nodeName&&S.nodeName.toLowerCase(),p==="select"||p==="input"&&S.type==="file")var Ee=fr;else if(rr(S))if(dr)Ee=jA;else{Ee=xA;var P=qA}else p=S.nodeName,!p||p.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?T&&su(T.elementType)&&(Ee=fr):Ee=PA;if(Ee&&(Ee=Ee(e,T))){sr(w,Ee,a,b);break e}P&&P(e,S,T),e==="focusout"&&T&&S.type==="number"&&T.memoizedProps.value!=null&&ru(S,"number",S.value)}switch(P=T?zl(T):window,e){case"focusin":(rr(P)||P.contentEditable==="true")&&(tl=P,vu=T,jl=null);break;case"focusout":jl=vu=tl=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Rr(w,a,b);break;case"selectionchange":if(XA)break;case"keydown":case"keyup":Rr(w,a,b)}var ne;if(Ru)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else el?cr(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(nr&&a.locale!=="ko"&&(el||de!=="onCompositionStart"?de==="onCompositionEnd"&&el&&(ne=$o()):(aa=b,Eu="value"in aa?aa.value:aa.textContent,el=!0)),P=Ii(T,de),0<P.length&&(de=new ar(de,e,null,a,b),w.push({event:de,listeners:P}),ne?de.data=ne:(ne=or(a),ne!==null&&(de.data=ne)))),(ne=YA?KA(e,a):_A(e,a))&&(de=Ii(T,"onBeforeInput"),0<de.length&&(P=new ar("onBeforeInput","beforeinput",null,a,b),w.push({event:P,listeners:de}),P.data=ne)),Uh(w,e,T,a,b)}Qf(w,t)})}function Tn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ii(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Yl(e,a),n!=null&&l.unshift(Tn(e,n,i)),n=Yl(e,t),n!=null&&l.push(Tn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Bh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var c=a,f=c.alternate,T=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||T===null||(f=T,n?(T=Yl(a,i),T!=null&&u.unshift(Tn(a,T,f))):n||(T=Yl(a,i),T!=null&&u.push(Tn(a,T,f)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Gh=/\r\n?/g,zh=/\u0000|\uFFFD/g;function Ff(e){return(typeof e=="string"?e:""+e).replace(Gh,`
`).replace(zh,"")}function Wf(e,t){return t=Ff(t),Ff(e)===t}function Ce(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":Yn(e,"class",l);break;case"tabIndex":Yn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(e,a,l);break;case"style":Fo(e,l,i);break;case"data":if(t!=="object"){Yn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_n(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ce(e,t,"name",n.name,n,null),Ce(e,t,"formEncType",n.formEncType,n,null),Ce(e,t,"formMethod",n.formMethod,n,null),Ce(e,t,"formTarget",n.formTarget,n,null)):(Ce(e,t,"encType",n.encType,n,null),Ce(e,t,"method",n.method,n,null),Ce(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_n(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=zt);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=_n(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":re("beforetoggle",e),re("toggle",e),zn(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fA.get(a)||a,zn(e,a,l))}}function Fc(e,t,a,l,n,i){switch(a){case"style":Fo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[at]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):zn(e,a,l)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ce(e,t,i,u,a,null)}}n&&Ce(e,t,"srcSet",a.srcSet,a,null),l&&Ce(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var c=i=u=n=null,f=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":n=b;break;case"type":u=b;break;case"checked":f=b;break;case"defaultChecked":T=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(137,t));break;default:Ce(e,t,l,b,a,null)}}jo(e,i,c,f,T,u,n,!1);return;case"select":re("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:Ce(e,t,n,c,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Fa(e,!!l,t,!1):a!=null&&Fa(e,!!l,a,!0);return;case"textarea":re("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:Ce(e,t,u,c,a,null)}Xo(e,l,n,i);return;case"option":for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null)&&(f==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ce(e,t,f,l,a,null));return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)re(gn[l],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ce(e,t,T,l,a,null)}return;default:if(su(t)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Fc(e,t,b,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&Ce(e,t,c,l,a,null))}function Yh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,f=null,T=null,b=null;for(p in a){var w=a[p];if(a.hasOwnProperty(p)&&w!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":f=w;default:l.hasOwnProperty(p)||Ce(e,t,p,null,l,w)}}for(var S in l){var p=l[S];if(w=a[S],l.hasOwnProperty(S)&&(p!=null||w!=null))switch(S){case"type":i=p;break;case"name":n=p;break;case"checked":T=p;break;case"defaultChecked":b=p;break;case"value":u=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(137,t));break;default:p!==w&&Ce(e,t,S,p,l,w)}}ou(e,u,c,f,T,b,i,n);return;case"select":p=u=c=S=null;for(i in a)if(f=a[i],a.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":p=f;default:l.hasOwnProperty(i)||Ce(e,t,i,null,l,f)}for(n in l)if(i=l[n],f=a[n],l.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":S=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&Ce(e,t,n,i,l,f)}t=c,a=u,l=p,S!=null?Fa(e,!!a,S,!1):!!l!=!!a&&(t!=null?Fa(e,!!a,t,!0):Fa(e,!!a,a?[]:"",!1));return;case"textarea":p=S=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ce(e,t,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":S=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&Ce(e,t,u,n,l,i)}Qo(e,S,p);return;case"option":for(var x in a)S=a[x],a.hasOwnProperty(x)&&S!=null&&!l.hasOwnProperty(x)&&(x==="selected"?e.selected=!1:Ce(e,t,x,null,l,S));for(f in l)S=l[f],p=a[f],l.hasOwnProperty(f)&&S!==p&&(S!=null||p!=null)&&(f==="selected"?e.selected=S&&typeof S!="function"&&typeof S!="symbol":Ce(e,t,f,S,l,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)S=a[F],a.hasOwnProperty(F)&&S!=null&&!l.hasOwnProperty(F)&&Ce(e,t,F,null,l,S);for(T in l)if(S=l[T],p=a[T],l.hasOwnProperty(T)&&S!==p&&(S!=null||p!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(137,t));break;default:Ce(e,t,T,S,l,p)}return;default:if(su(t)){for(var Me in a)S=a[Me],a.hasOwnProperty(Me)&&S!==void 0&&!l.hasOwnProperty(Me)&&Fc(e,t,Me,void 0,l,S);for(b in l)S=l[b],p=a[b],!l.hasOwnProperty(b)||S===p||S===void 0&&p===void 0||Fc(e,t,b,S,l,p);return}}for(var E in a)S=a[E],a.hasOwnProperty(E)&&S!=null&&!l.hasOwnProperty(E)&&Ce(e,t,E,null,l,S);for(w in l)S=l[w],p=a[w],!l.hasOwnProperty(w)||S===p||S==null&&p==null||Ce(e,t,w,S,l,p)}function Jf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Jf(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var f=a[l],T=f.startTime;if(T>c)break;var b=f.transferSize,w=f.initiatorType;b&&Jf(w)&&(f=f.responseEnd,u+=b*(f<c?1:(c-T)/(f-T)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wc=null,Jc=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function $f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ed(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eo=null;function _h(){var e=window.event;return e&&e.type==="popstate"?e===eo?!1:(eo=e,!0):(eo=null,!1)}var td=typeof setTimeout=="function"?setTimeout:void 0,kh=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Vh=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(qh)}:td;function qh(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function ld(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Cl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Sn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Gl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Sn(e.ownerDocument.body);a=n}while(a);Cl(t)}function nd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function to(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":to(a),uu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function Ph(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Lt(e.nextSibling),e===null))return null;return e}function id(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function ao(e){return e.data==="$?"||e.data==="$~"}function lo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var no=null;function ud(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Lt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function od(e,t,a){switch(t=Bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Sn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uu(e)}var Ct=new Map,rd=new Set;function Gi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $t=m.d;m.d={f:Qh,r:Xh,D:Zh,C:Fh,L:Wh,m:Jh,X:eE,S:$h,M:tE};function Qh(){var e=$t.f(),t=Li();return e||t}function Xh(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?bs(t):$t.r(e)}var bl=typeof document>"u"?null:document;function sd(e,t,a){var l=bl;if(l&&typeof t=="string"&&t){var n=Rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),rd.has(n)||(rd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),$e(t,"link",e),Qe(t),l.head.appendChild(t)))}}function Zh(e){$t.D(e),sd("dns-prefetch",e,null)}function Fh(e,t){$t.C(e,t),sd("preconnect",e,t)}function Wh(e,t,a){$t.L(e,t,a);var l=bl;if(l&&e&&t){var n='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Rt(a.imageSizes)+'"]')):n+='[href="'+Rt(e)+'"]';var i=n;switch(t){case"style":i=Nl(e);break;case"script":i=Ll(e)}Ct.has(i)||(e=B({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Rn(i))||t==="script"&&l.querySelector(yn(i))||(t=l.createElement("link"),$e(t,"link",e),Qe(t),l.head.appendChild(t)))}}function Jh(e,t){$t.m(e,t);var a=bl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Rt(l)+'"][href="'+Rt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ll(e)}if(!Ct.has(i)&&(e=B({rel:"modulepreload",href:e},t),Ct.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yn(i)))return}l=a.createElement("link"),$e(l,"link",e),Qe(l),a.head.appendChild(l)}}}function $h(e,t,a){$t.S(e,t,a);var l=bl;if(l&&e){var n=Xa(l).hoistableStyles,i=Nl(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(Rn(i)))c.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(i))&&io(e,a);var f=u=l.createElement("link");Qe(f),$e(f,"link",e),f._p=new Promise(function(T,b){f.onload=T,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,zi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function eE(e,t){$t.X(e,t);var a=bl;if(a&&e){var l=Xa(a).hoistableScripts,n=Ll(e),i=l.get(n);i||(i=a.querySelector(yn(n)),i||(e=B({src:e,async:!0},t),(t=Ct.get(n))&&uo(e,t),i=a.createElement("script"),Qe(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function tE(e,t){$t.M(e,t);var a=bl;if(a&&e){var l=Xa(a).hoistableScripts,n=Ll(e),i=l.get(n);i||(i=a.querySelector(yn(n)),i||(e=B({src:e,async:!0,type:"module"},t),(t=Ct.get(n))&&uo(e,t),i=a.createElement("script"),Qe(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function fd(e,t,a,l){var n=(n=X.current)?Gi(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Nl(a.href),a=Xa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Nl(a.href);var i=Xa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Rn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),i||aE(n,e,a,u.state))),t&&l===null)throw Error(s(528,""));return u}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ll(a),a=Xa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Nl(e){return'href="'+Rt(e)+'"'}function Rn(e){return'link[rel="stylesheet"]['+e+"]"}function dd(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function aE(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",a),Qe(t),e.head.appendChild(t))}function Ll(e){return'[src="'+Rt(e)+'"]'}function yn(e){return"script[async]"+e}function Ad(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(l)return t.instance=l,Qe(l),l;var n=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qe(l),$e(l,"style",n),zi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Nl(a.href);var i=e.querySelector(Rn(n));if(i)return t.state.loading|=4,t.instance=i,Qe(i),i;l=dd(a),(n=Ct.get(n))&&io(l,n),i=(e.ownerDocument||e).createElement("link"),Qe(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),$e(i,"link",l),t.state.loading|=4,zi(i,a.precedence,e),t.instance=i;case"script":return i=Ll(a.src),(n=e.querySelector(yn(i)))?(t.instance=n,Qe(n),n):(l=a,(n=Ct.get(i))&&(l=B({},a),uo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Qe(n),$e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,zi(l,a.precedence,e));return t.instance}function zi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yi=null;function hd(e,t,a){if(Yi===null){var l=new Map,n=Yi=new Map;n.set(a,l)}else n=Yi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Gl]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function Ed(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function lE(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function md(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nE(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Nl(l.href),i=t.querySelector(Rn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ki.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Qe(i);return}i=t.ownerDocument||t,l=dd(l),(n=Ct.get(n))&&io(l,n),i=i.createElement("link"),Qe(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),$e(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ki.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var co=0;function iE(e,t){return e.stylesheets&&e.count===0&&ki(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&co===0&&(co=62500*Kh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>co?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ki(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _i=null;function ki(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_i=new Map,t.forEach(uE,e),_i=null,Ki.call(e))}function uE(e,t){if(!(t.state.loading&4)){var a=_i.get(e);if(a)var l=a.get(null);else{a=new Map,_i.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ki.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var On={$$typeof:Y,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function cE(e,t,a,l,n,i,u,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function gd(e,t,a,l,n,i,u,c,f,T,b,w){return e=new cE(e,t,a,u,f,T,b,w,c),t=1,i===!0&&(t|=24),i=At(3,null,null,t),e.current=i,i.stateNode=e,t=_u(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},xu(i),e}function Td(e){return e?(e=nl,e):nl}function Sd(e,t,a,l,n,i){n=Td(n),l.context===null?l.context=n:l.pendingContext=n,l=oa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ra(e,l,t),a!==null&&(ot(a,e,t),$l(a,e,t))}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function oo(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function yd(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&ot(t,e,67108864),oo(e,67108864)}}function Od(e){if(e.tag===13||e.tag===31){var t=Tt();t=lu(t);var a=Da(e,t);a!==null&&ot(a,e,t),oo(e,t)}}var Vi=!0;function oE(e,t,a,l){var n=R.T;R.T=null;var i=m.p;try{m.p=2,ro(e,t,a,l)}finally{m.p=i,R.T=n}}function rE(e,t,a,l){var n=R.T;R.T=null;var i=m.p;try{m.p=8,ro(e,t,a,l)}finally{m.p=i,R.T=n}}function ro(e,t,a,l){if(Vi){var n=so(l);if(n===null)Zc(e,t,l,qi,a),vd(e,l);else if(fE(n,e,t,a,l))l.stopPropagation();else if(vd(e,l),t&4&&-1<sE.indexOf(e)){for(;n!==null;){var i=Qa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=La(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-ft(u);c.entanglements[1]|=f,u&=~f}Bt(i),(Te&6)===0&&(bi=rt()+500,mn(0))}}break;case 31:case 13:c=Da(i,2),c!==null&&ot(c,i,2),Li(),oo(i,2)}if(i=so(l),i===null&&Zc(e,t,l,qi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Zc(e,t,l,null,a)}}function so(e){return e=du(e),fo(e)}var qi=null;function fo(e){if(qi=null,e=ja(e),e!==null){var t=N(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=M(t),e!==null)return e;e=null}else if(a===31){if(e=G(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qi=e,null}function pd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zd()){case wo:return 2;case Uo:return 8;case Dn:case Fd:return 32;case Do:return 268435456;default:return 32}default:return 32}}var Ao=!1,Ra=null,ya=null,Oa=null,pn=new Map,vn=new Map,pa=[],sE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vd(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function bn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Qa(t),t!==null&&yd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function fE(e,t,a,l,n){switch(t){case"focusin":return Ra=bn(Ra,e,t,a,l,n),!0;case"dragenter":return ya=bn(ya,e,t,a,l,n),!0;case"mouseover":return Oa=bn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return pn.set(i,bn(pn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,vn.set(i,bn(vn.get(i)||null,e,t,a,l,n)),!0}return!1}function bd(e){var t=ja(e.target);if(t!==null){var a=N(t);if(a!==null){if(t=a.tag,t===13){if(t=M(a),t!==null){e.blockedOn=t,Yo(e.priority,function(){Od(a)});return}}else if(t===31){if(t=G(a),t!==null){e.blockedOn=t,Yo(e.priority,function(){Od(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=so(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);fu=l,a.target.dispatchEvent(l),fu=null}else return t=Qa(a),t!==null&&yd(t),e.blockedOn=a,!1;t.shift()}return!0}function Nd(e,t,a){xi(e)&&a.delete(t)}function dE(){Ao=!1,Ra!==null&&xi(Ra)&&(Ra=null),ya!==null&&xi(ya)&&(ya=null),Oa!==null&&xi(Oa)&&(Oa=null),pn.forEach(Nd),vn.forEach(Nd)}function Pi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ao||(Ao=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dE)))}var ji=null;function Ld(e){ji!==e&&(ji=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ji===e&&(ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(fo(l||a)===null)continue;break}var i=Qa(a);i!==null&&(e.splice(t,3),t-=3,sc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Cl(e){function t(f){return Pi(f,e)}Ra!==null&&Pi(Ra,e),ya!==null&&Pi(ya,e),Oa!==null&&Pi(Oa,e),pn.forEach(t),vn.forEach(t);for(var a=0;a<pa.length;a++){var l=pa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<pa.length&&(a=pa[0],a.blockedOn===null);)bd(a),a.blockedOn===null&&pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[at]||null;if(typeof i=="function")u||Ld(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[at]||null)c=u.formAction;else if(fo(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Ld(a)}}}function Cd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ho(e){this._internalRoot=e}Qi.prototype.render=ho.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=Tt();Sd(a,l,e,t,null,null)},Qi.prototype.unmount=ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sd(e.current,2,null,e,null,null),Li(),t[Pa]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=zo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<pa.length&&t!==0&&t<pa[a].priority;a++);pa.splice(a,0,e),a===0&&bd(e)}};var Md=h.version;if(Md!=="19.2.4")throw Error(s(527,Md,"19.2.4"));m.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?I(e):null,e=e===null?null:e.stateNode,e};var AE={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Hl=Xi.inject(AE),st=Xi}catch{}}return Nn.createRoot=function(e,t){if(!L(e))throw Error(s(299));var a=!1,l="",n=Bs,i=Gs,u=zs;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=gd(e,1,!1,null,null,a,l,null,n,i,u,Cd),e[Pa]=t.current,Xc(e),new ho(t)},Nn.hydrateRoot=function(e,t,a){if(!L(e))throw Error(s(299));var l=!1,n="",i=Bs,u=Gs,c=zs,f=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=gd(e,1,!0,t,a??null,l,n,f,i,u,c,Cd),t.context=Td(null),a=t.current,l=Tt(),l=lu(l),n=oa(l),n.callback=null,ra(a,n,l),a=l,t.current.lanes=a,Bl(t,a),Bt(t),e[Pa]=t.current,Xc(e),new Qi(t)},Nn.version="19.2.4",Nn}var zd;function OE(){if(zd)return mo.exports;zd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(h){console.error(h)}}return r(),mo.exports=yE(),mo.exports}var pE=OE();const kd=[];function j(r,h,O){const s=h.trim().split(`
`).map(N=>{const[M,...G]=N.split("|");return{answer:M.trim().toUpperCase(),clue:G.join("|").trim()}}),L=O.trim().split(`
`).map(N=>{const[M,G]=N.split("|");return{title:M,focus:G.split(" ")}});kd.push({category:r,words:s,themes:L})}j("Winter",`
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
`);function Vd(r){let h=2166136261;for(let O=0;O<r.length;O++)h=Math.imul(h^r.charCodeAt(O),16777619);return h>>>0}function po(r){let h=Vd(String(r));return()=>{h|=0,h=h+1831565813|0;let O=Math.imul(h^h>>>15,1|h);return O=O+Math.imul(O^O>>>7,61|O)^O,((O^O>>>14)>>>0)/4294967296}}function vo(r,h){const O=[...r];for(let s=O.length-1;s>0;s--){const L=Math.floor(h()*(s+1));[O[s],O[L]]=[O[L],O[s]]}return O}const vE="America/New_York",wl="2026-01-01";function Ln(r=new Date){const h=new Intl.DateTimeFormat("en-US",{timeZone:vE,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(r),O=s=>h.find(L=>L.type===s).value;return`${O("year")}-${O("month")}-${O("day")}`}function ba(r){if(!/^\d{4}-\d{2}-\d{2}$/.test(r))return null;const h=new Date(`${r}T12:00:00Z`);return!isNaN(h)&&h.toISOString().slice(0,10)===r?h:null}function Ul(r,h){const O=ba(r);if(!O)throw new Error("Invalid date");return O.setUTCDate(O.getUTCDate()+h),O.toISOString().slice(0,10)}function Zi(r,h={weekday:"long",month:"long",day:"numeric",year:"numeric"}){return new Intl.DateTimeFormat("en-US",{...h,timeZone:"UTC"}).format(ba(r))}function bE(r,h){return Array.from({length:new Date(Date.UTC(r,h,0)).getUTCDate()},(O,s)=>`${r}-${String(h).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)}const NE=kd.flatMap(r=>r.themes.map(h=>({...h,category:r.category,words:r.words,focus:[...new Set(h.focus)]}))),Ml=vo(NE,po("daily-cross-theme-calendar-v1")),bo=[];for(let r=0;r<12;r++)for(let h=1;h<=new Date(Date.UTC(2e3,r+1,0)).getUTCDate();h++)bo.push(`${String(r+1).padStart(2,"0")}-${String(h).padStart(2,"0")}`);const LE={"01-01":"Here's to a new year","02-14":"Love letters","02-29":"One extra day","03-20":"Spring bulbs","06-21":"Beside the seaside","10-15":"Into the woods","10-16":"Leaves are turning","10-31":"A haunting evening","12-25":"A Christmas story"};for(const[r,h]of Object.entries(LE)){const O=bo.indexOf(r),s=Ml.findIndex(L=>L.title===h);[Ml[O],Ml[s]]=[Ml[s],Ml[O]]}const yo=bo.map((r,h)=>({...Ml[h],key:r,id:`theme-${r}`})),CE=new Map(yo.map(r=>[r.key,r]));function Mn(r){if(!ba(r))throw new Error(`Invalid puzzle date: ${r}`);return CE.get(r.slice(5))}function ME(r){return r.title==="Into the woods"?"Follow the trail through today’s woodland wordplay.":r.title==="Leaves are turning"?"A little autumn color, one answer at a time.":`A fresh perspective on ${r.category.toLowerCase()}, one answer at a time.`}const qd=1;function Yd(r,h){let O=1;for(let s=1;s<=h;s++)O=O*(r-s+1)/s;return Math.round(O)}function wE(r,h,O){const s=Yd(r.length,h);O=(O%s+s)%s;const L=[];let N=0;for(let M=h;M>0;M--)for(let G=N;G<=r.length-M;G++){const U=Yd(r.length-G-1,M-1);if(O<U){L.push(r[G]),N=G+1;break}O-=U}return L}function UE(r){const h=Mn(r),O=new Set(h.focus),s=vo(h.words.filter(N=>!O.has(N.answer)),po(h.id)),L=wE(s,12-O.size,Number(r.slice(0,4))-2026);return[...h.words.filter(N=>O.has(N.answer)),...L].map(N=>({...N,themed:O.has(N.answer)}))}function DE(r,h,O){const s=Array.from({length:h},()=>Array(h).fill(null)),L=[];let N=h,M=h,G=0,U=0;const y=(V,se)=>V>=0&&V<h&&se>=0&&se<h?s[V][se]:null;function I(V,se,Re,Ue){const Oe=Ue==="down"?1:0,Ae=1-Oe,ye=se+Oe*(V.length-1),Ne=Re+Ae*(V.length-1);if(se<0||Re<0||ye>=h||Ne>=h||y(se-Oe,Re-Ae)||y(ye+Oe,Ne+Ae))return 0;let ge=0;for(let R=0;R<V.length;R++){const m=se+Oe*R,H=Re+Ae*R,k=y(m,H);if(k){if(k.letter!==V[R]||k[Ue])return 0;ge++}else if(y(m-Ae,H-Oe)||y(m+Ae,H+Oe))return 0}return ge}function B(V,se,Re,Ue){const Oe=L.length,Ae=Ue==="down"?1:0,ye=1-Ae;for(let Ne=0;Ne<V.answer.length;Ne++){const ge=se+Ae*Ne,R=Re+ye*Ne;s[ge][R]||(s[ge][R]={letter:V.answer[Ne]}),s[ge][R][Ue]=Oe+1,N=Math.min(N,ge),G=Math.max(G,ge),M=Math.min(M,R),U=Math.max(U,R)}L.push({...V,row:se,col:Re,direction:Ue})}const K=vo(r,O).map(V=>({w:V,weight:V.answer.length+O()*5})).sort((V,se)=>se.weight-V.weight).map(V=>V.w),[ie]=K.splice(Math.floor(O()*K.length),1),le=O()<.5?"across":"down";B(ie,Math.floor(le==="down"?(h-ie.answer.length)/2:h/2),Math.floor(le==="across"?(h-ie.answer.length)/2:h/2),le);let be=0;function $(V){if(!V.length)return!0;if(++be>1800)return!1;const se=[];for(let Re=0;Re<V.length;Re++){const Ue=V[Re],Oe=[];for(let Ae=N;Ae<=G;Ae++)for(let ye=M;ye<=U;ye++){const Ne=s[Ae][ye];if(Ne){for(let ge=0;ge<Ue.answer.length;ge++)if(Ue.answer[ge]===Ne.letter)for(const R of["across","down"]){if(Ne[R])continue;const m=R==="down"?1:0,H=1-m,k=Ae-m*ge,Q=ye-H*ge,d=I(Ue.answer,k,Q,R);if(!d)continue;const v=Math.max(G,k+m*(Ue.answer.length-1))-Math.min(N,k)+1,z=Math.max(U,Q+H*(Ue.answer.length-1))-Math.min(M,Q)+1,q=d*12-v*z*.09-Math.abs(z-v)*.5+O()*5;Oe.push({r:k,c:Q,dir:R,score:q})}}}Oe.length&&se.push({wi:Re,candidates:Oe.sort((Ae,ye)=>ye.score-Ae.score)})}if(!se.length)return!1;se.sort((Re,Ue)=>Re.candidates.length-Ue.candidates.length);for(const{wi:Re,candidates:Ue}of se.slice(0,4)){const Oe=V[Re],Ae=V.filter((ye,Ne)=>Ne!==Re);for(const ye of Ue.slice(0,18)){const Ne=[N,M,G,U],ge=[];for(let R=0;R<Oe.answer.length;R++){const m=ye.r+(ye.dir==="down"?R:0),H=ye.c+(ye.dir==="across"?R:0);ge.push([m,H,s[m][H]?{...s[m][H]}:null])}if(B(Oe,ye.r,ye.c,ye.dir),$(Ae))return!0;L.pop();for(const[R,m,H]of ge)s[R][m]=H;if([N,M,G,U]=Ne,be>1800)return!1}}return!1}$(K);const ee=G-N+1,D=U-M+1,Y=Math.max(13,ee,D),ce=Math.floor((Y-ee)/2),ue=Math.floor((Y-D)/2);return{entries:L.map(V=>({...V,row:V.row-N+ce,col:V.col-M+ue})),size:Y,area:ee*D}}function HE(r,h){const{size:O}=r,s=r.entries.sort((I,B)=>I.row-B.row||I.col-B.col||I.direction.localeCompare(B.direction)),L=new Map;let N=0;for(const I of s){const B=`${I.row},${I.col}`;L.has(B)||L.set(B,++N),I.number=L.get(B),I.id=`${I.number}-${I.direction}`,I.cells=Array.from({length:I.answer.length},(K,ie)=>(I.row+(I.direction==="down"?ie:0))*O+I.col+(I.direction==="across"?ie:0))}const M=Array.from({length:O*O},(I,B)=>({index:B,letter:null,number:null,across:null,down:null}));for(const I of s)for(let B=0;B<I.cells.length;B++){const K=M[I.cells[B]];K.letter=I.answer[B],K[I.direction]=I.id,B===0&&(K.number=I.number)}const G=String(Vd(s.map(I=>`${I.answer}:${I.row}:${I.col}:${I.direction}`).join("|"))),U={date:h,version:qd,theme:Mn(h),size:O,entries:s,cells:M,signature:G},y=BE(U);if(y.length)throw new Error(y.join("; "));return U}function IE(r){const h=UE(r),O=po(`daily-cross-v${qd}/${r}`);let s=null;for(const L of[13,15,17,19,21])for(let N=0;N<6;N++){const M=DE(h,L,O);if((!s||M.entries.length>s.entries.length||M.entries.length===s.entries.length&&M.area<s.area)&&(s=M),M.entries.length===h.length)return HE(M,r)}throw new Error(`Unable to construct complete crossword for ${r}; ${s?.entries.length}/${h.length} placed`)}function BE(r){const h=[],O=new Set,s=new Map(r.entries.map(M=>[M.id,M]));r.entries.length!==12&&h.push("Expected 12 clued words");for(const M of r.entries){O.has(M.answer)&&h.push("Repeated answer"),O.add(M.answer),(!M.clue||M.answer.length<3||!/^[A-Z]+$/.test(M.answer))&&h.push("Invalid entry");for(let G=0;G<M.cells.length;G++)r.cells[M.cells[G]]?.letter!==M.answer[G]&&h.push("Crossing conflict");for(const G of M.cells)s.has(r.cells[G]?.[M.direction])||h.push("Missing cell ownership")}for(let M=0;M<r.size;M++)for(let G=0;G<r.size;G++){const U=M*r.size+G,y=r.cells[U];if(y.letter){!y.across&&!y.down&&h.push("Orphan letter");for(const[I,B,K]of[["across",1,G===0||!r.cells[U-1]?.letter],["down",r.size,M===0||!r.cells[U-r.size]?.letter]]){if(!K)continue;let ie="";for(let le=U;le<r.cells.length&&(I==="down"||Math.floor(le/r.size)===M)&&r.cells[le].letter;le+=B)ie+=r.cells[le].letter;ie.length>1&&!r.entries.some(le=>le.cells[0]===U&&le.direction===I&&le.answer===ie)&&h.push("Unclued letter run")}}}const L=new Set,N=[r.entries[0]?.id];for(;N.length;){const M=N.pop();if(!(!M||L.has(M))){if(L.add(M),!s.has(M)){h.push("Missing clue ownership");continue}for(const G of s.get(M).cells)N.push(r.cells[G].across,r.cells[G].down)}}return L.size!==r.entries.length&&h.push("Disconnected grid"),[...new Set(h)]}const No="daily-cross:v1:";function Lo(r,h){try{return JSON.parse(localStorage.getItem(No+r))??h}catch{return h}}function xd(r,h){try{return localStorage.setItem(No+r,JSON.stringify(h)),!0}catch{return!1}}function GE(r){const h=Lo(r.date,null);if(!h||h.signature!==r.signature)return{letters:{},pencil:{},revealed:[],seconds:0,started:!1,completed:!1,assisted:!1,completedAt:null,selected:r.entries[0].cells[0],direction:r.entries[0].direction};const O={};for(const[s,L]of Object.entries(h.letters??{}))r.cells[s]?.letter&&/^[A-Z]$/.test(L)&&(O[s]=L);return{...h,letters:O,seconds:Math.max(0,Number(h.seconds)||0),revealed:Array.isArray(h.revealed)?h.revealed:[],pencil:h.pencil??{}}}function zE(r,h){return xd(r.date,{...h,signature:r.signature})}function Pd(){const r=[];try{for(let h=0;h<localStorage.length;h++){const O=localStorage.key(h);if(/^daily-cross:v1:\d{4}-\d{2}-\d{2}$/.test(O)){const s=O.slice(No.length),L=Lo(s,null);L&&r.push({date:s,...L})}}}catch{}return r}function wn(r){const h=Math.max(0,Math.floor(r));return`${String(Math.floor(h/60)).padStart(2,"0")}:${String(h%60).padStart(2,"0")}`}function YE(r,h,O){const[s,L]=W.useState(()=>GE(r)),[N,M]=W.useState(!1),[G,U]=W.useState(!1),[y,I]=W.useState({}),B=W.useRef(null),K=W.useRef(s),ie=W.useRef(s.completed),le=W.useRef(!1),be=W.useRef(!1);K.current=s;const $=W.useMemo(()=>new Map(r.entries.map(m=>[m.id,m])),[r]),ee=r.cells[s.selected]??r.cells[r.entries[0].cells[0]],D=$.get(ee[s.direction])??$.get(ee.across||ee.down)??r.entries[0],Y=W.useCallback(m=>requestAnimationFrame(()=>B.current?.querySelector(`[data-cell="${m}"]`)?.focus({preventScroll:!0})),[]),ce=W.useCallback(m=>{!zE(r,m)&&!be.current&&(be.current=!0,h("Your browser could not save progress. Keep this tab open to finish."))},[r,h]);W.useEffect(()=>{ce(s)},[s,ce]),W.useEffect(()=>{if(N||!s.started||s.completed)return;let m=performance.now();const H=setInterval(()=>{const k=performance.now(),Q=Math.floor((k-m)/1e3);Q&&(m+=Q*1e3,L(d=>({...d,seconds:d.seconds+Q})))},250);return()=>clearInterval(H)},[N,s.started,s.completed]),W.useEffect(()=>{const m=()=>{document.hidden&&(M(!0),ce(K.current))},H=()=>ce(K.current);return document.addEventListener("visibilitychange",m),window.addEventListener("pagehide",H),()=>{document.removeEventListener("visibilitychange",m),window.removeEventListener("pagehide",H),ce(K.current)}},[ce]),W.useEffect(()=>{if(ie.current)return;if(!r.cells.every(H=>!H.letter||s.letters[H.index])){le.current=!1;return}if(!r.cells.every(H=>!H.letter||s.letters[H.index]===H.letter)){le.current||h("Every square is filled. A few letters need another look."),le.current=!0;return}ie.current=!0,L(H=>({...H,completed:!0,completedAt:new Date().toISOString(),pencil:{}})),O()},[s.letters,r,O,h]);const ue=W.useCallback(m=>{const H=K.current,k=m.cells.find(Q=>!H.letters[Q])??m.cells[0];L(Q=>({...Q,selected:k,direction:m.direction})),Y(k)},[Y]);function Be(m){const H=r.cells[m];if(!H?.letter||N)return;let k=s.direction;m===s.selected&&H.across&&H.down&&(k=k==="across"?"down":"across"),H[k]||(k=H.across?"across":"down"),L(Q=>({...Q,selected:m,direction:k})),Y(m)}function V(m=1){const H=r.entries.findIndex(Q=>Q.id===D.id),k=r.entries[(H+m+r.entries.length)%r.entries.length];ue(k)}function se(m){if(N||s.completed)return;if(m==="Tab"||m==="Enter"){V(1);return}if(m===" "){const _=r.cells[s.selected];_.across&&_.down&&L(X=>({...X,direction:X.direction==="across"?"down":"across"}));return}if(m.startsWith("Arrow")){const _=m==="ArrowUp"||m==="ArrowDown"?"down":"across",X=m==="ArrowUp"?-r.size:m==="ArrowDown"?r.size:m==="ArrowLeft"?-1:1;if(_!==s.direction&&ee[_]){L(Ge=>({...Ge,direction:_}));return}let J=s.selected+X;for(;J>=0&&J<r.cells.length&&(_==="down"||Math.floor(J/r.size)===Math.floor(s.selected/r.size));){if(r.cells[J].letter){const Ge=r.cells[J];L(ze=>({...ze,selected:J,direction:Ge[_]?_:Ge.across?"across":"down"})),Y(J);return}J+=X}return}if(m==="Home"||m==="End"){const _=m==="Home"?D.cells[0]:D.cells.at(-1);L(X=>({...X,selected:_})),Y(_);return}if(m==="Backspace"||m==="Delete"){let _=s.selected;m==="Backspace"&&!s.letters[_]&&(_=D.cells[Math.max(0,D.cells.indexOf(_)-1)]),L(X=>{const J={...X.letters},Ge={...X.pencil};return delete J[_],delete Ge[_],{...X,letters:J,pencil:Ge,selected:_}}),I(X=>{const J={...X};return delete J[_],J}),Y(_);return}if(!/^[a-zA-Z]$/.test(m))return;const H=m.toUpperCase(),k=s.selected;I(_=>{const X={..._};return delete X[k],X});const Q={...s.letters,[k]:H},d={...s.pencil};G?d[k]=!0:delete d[k];let v=k,z=D.direction;const q=D.cells.slice(D.cells.indexOf(k)+1);if(v=q.find(_=>!Q[_])??q[0]??k,v===k){const _=r.entries.slice(r.entries.indexOf(D)+1).concat(r.entries.slice(0,r.entries.indexOf(D))).find(X=>X.cells.some(J=>!Q[J]));_&&(v=_.cells.find(X=>!Q[X]),z=_.direction)}L(_=>({..._,letters:Q,pencil:d,selected:v,direction:z,started:!0})),Y(v)}function Re(m){if(!(m.ctrlKey||m.metaKey||m.altKey)){if(m.key==="Tab"){m.preventDefault(),V(m.shiftKey?-1:1);return}if(m.key==="Escape"){m.preventDefault(),B.current?.closest(".play-panel")?.querySelector(".toolbar-button")?.focus();return}(m.key===" "||m.key.startsWith("Arrow")||["Enter","Home","End","Backspace","Delete"].includes(m.key)||/^[a-zA-Z]$/.test(m.key))&&(m.preventDefault(),se(m.key))}}function Ue(m){const H=m==="letter"?[s.selected]:m==="word"?D.cells:r.cells.filter(v=>v.letter).map(v=>v.index);let k=0,Q=0;const d={...y};for(const v of H)s.letters[v]&&(k++,s.letters[v]!==r.cells[v].letter?(d[v]=!0,Q++):delete d[v]);I(d),k?(L(v=>({...v,assisted:!0})),h(Q?`${Q} ${Q===1?"square needs":"squares need"} another look. Incorrect letters are marked.`:"Every checked letter looks good.")):h("Fill in a few letters first, then check them.")}function Oe(m){const H=m==="letter"?[s.selected]:m==="word"?D.cells:r.cells.filter(k=>k.letter).map(k=>k.index);L(k=>{const Q={...k.letters},d={...k.pencil};for(const v of H)Q[v]=r.cells[v].letter,delete d[v];return{...k,letters:Q,pencil:d,revealed:[...new Set([...k.revealed,...H])],assisted:!0,started:!0}}),I(k=>{const Q={...k};return H.forEach(d=>delete Q[d]),Q}),h(m==="puzzle"?"The solution is revealed.":`Revealed ${m==="word"?"the selected word":"one letter"}.`)}function Ae(){ie.current=!1,I({}),M(!1),L({letters:{},pencil:{},revealed:[],seconds:0,started:!1,completed:!1,completedAt:null,assisted:!1,selected:r.entries[0].cells[0],direction:r.entries[0].direction})}function ye(){s.completed||(L(m=>({...m,started:!0})),M(m=>!m))}const Ne=r.cells.filter(m=>m.letter&&s.letters[m.index]).length,ge=r.cells.filter(m=>m.letter).length,R=r.entries.filter(m=>m.cells.every(H=>s.letters[H])).length;return{game:s,paused:N,pencil:G,setPencil:U,errors:y,active:D,gridRef:B,focusGrid:Y,selectEntry:ue,selectCell:Be,nextEntry:V,key:se,onKeyDown:Re,check:Ue,reveal:Oe,restart:Ae,togglePause:ye,filledCells:Ne,totalCells:ge,filledWords:R}}const Kd={left:"m14 6-6 6 6 6",right:"m10 6 6 6-6 6",down:"m6 9 6 6 6-6",sun:"M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4",moon:"M20.5 13a8.5 8.5 0 0 1-9.5-9.5A8.5 8.5 0 1 0 20.5 13Z",pause:"M9 5v14m6-14v14",play:"m9 5 10 7-10 7Z",more:"M5 12h.01M12 12h.01M19 12h.01",close:"m6 6 12 12M6 18 18 6",check:"m5 12 4 4L19 6",keyboard:"M4 5h16v14H4zM7 9h.01M10 9h.01M13 9h.01M16 9h.01M7 12h.01M10 12h.01M13 12h.01M16 12h.01M8 16h8",backspace:"m9 5-7 7 7 7h12V5Zm3 4 6 6m-6 0 6-6",pencil:"m14 5 5 5M4 20l5-1L21 7l-5-5L4 14Z",calendar:"M5 4h14v17H5ZM8 2v4m8-4v4M5 9h14M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01",share:"M12 16V3m-5 5 5-5 5 5M5 13v8h14v-8",chart:"M5 20V10m7 10V4m7 16v-7",undo:"M8 5 3 10l5 5M3 10h11a6 6 0 0 1 0 12"};function Se({name:r,size:h=18,...O}){return o.createElement("svg",{width:h,height:h,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r==="pause"?3:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...O},r==="sun"&&o.createElement("circle",{cx:"12",cy:"12",r:"4"}),o.createElement("path",{d:Kd[r]??Kd.check}))}function KE({puzzle:r,game:h,active:O,errors:s,paused:L,onSelect:N,onKeyDown:M,gridRef:G}){const U=new Set(O.cells),y=new Set(h.revealed);return o.createElement("div",{className:"grid-container"},o.createElement("div",{ref:G,className:`crossword-grid ${L?"is-paused":""}`,style:{"--size":r.size},role:"grid","aria-label":`${r.size} by ${r.size} crossword. ${O.number} ${O.direction}: ${O.clue}.`,"aria-rowcount":r.size,"aria-colcount":r.size,onKeyDown:M},Array.from({length:r.size},(I,B)=>o.createElement("div",{className:"grid-row",role:"row",key:B},r.cells.slice(B*r.size,(B+1)*r.size).map(K=>K.letter?o.createElement("button",{key:K.index,role:"gridcell",tabIndex:h.selected===K.index&&!L?0:-1,"aria-rowindex":B+1,"aria-colindex":K.index%r.size+1,"aria-selected":h.selected===K.index,"aria-label":`Row ${B+1}, column ${K.index%r.size+1}${K.number?`, clue ${K.number}`:""}, ${h.letters[K.index]||"blank"}${s[K.index]?", incorrect":""}${y.has(K.index)?", revealed":""}`,"data-cell":K.index,className:`cell ${U.has(K.index)?"in-word":""} ${h.selected===K.index?"selected":""} ${s[K.index]?"incorrect":""} ${h.pencil[K.index]?"penciled":""} ${y.has(K.index)?"revealed":""}`,onClick:()=>N(K.index),disabled:L},K.number&&o.createElement("span",{className:"cell-number"},K.number),o.createElement("span",{className:"cell-letter"},L?"":h.letters[K.index]||""),s[K.index]&&o.createElement("span",{className:"error-mark","aria-hidden":"true"})):o.createElement("span",{key:K.index,className:"cell block",role:"gridcell","aria-label":"Block"}))))),L&&o.createElement("div",{className:"pause-veil","aria-hidden":"true"},o.createElement("span",null,"Your moment can wait."),o.createElement("small",null,"Resume when you’re ready.")))}const _E=W.memo(KE);function kE({puzzle:r,game:h,active:O,onSelect:s}){return o.createElement("section",{className:"clue-panel","aria-label":"Crossword clues"},o.createElement("div",{className:"clue-columns"},["across","down"].map(L=>o.createElement("section",{className:"clue-column",key:L,"aria-label":`${L} clues`},o.createElement("h3",null,L),o.createElement("ol",null,r.entries.filter(N=>N.direction===L).map(N=>{const M=N.cells.every(G=>h.letters[G]);return o.createElement("li",{key:N.id},o.createElement("button",{className:`clue ${O.id===N.id?"active":""} ${M?"filled":""}`,"aria-current":O.id===N.id?"true":void 0,onClick:()=>s(N),"data-clue":N.id},o.createElement("span",{className:"clue-number"},N.number),o.createElement("span",null,N.clue," ",o.createElement("span",{className:"answer-length"},"(",N.answer.length,")")),M&&o.createElement("span",{className:"filled-dot",title:"All squares filled"})))}))))),o.createElement("div",{className:"tomorrow"},o.createElement("span",{className:"small-rule"}),o.createElement("h3",null,"A new chapter tomorrow."),o.createElement("p",null,"Same time. A whole new world of words."),o.createElement("button",{className:"text-button",onClick:()=>window.dispatchEvent(new Event("open-themes"))},"Explore the theme calendar ",o.createElement(Se,{name:"right",size:15}))))}const VE=W.memo(kE);function qE({onKey:r,pencil:h,onPencil:O,onNext:s,onPrevious:L,disabled:N,show:M}){return o.createElement("section",{className:`virtual-keyboard ${M?"keyboard-shown":"keyboard-hidden"}`,"aria-label":"On-screen keyboard"},o.createElement("div",{className:"keyboard-options"},o.createElement("button",{onClick:L,"aria-label":"Previous clue",disabled:N},o.createElement(Se,{name:"left"})),o.createElement("button",{className:h?"pencil-active":"","aria-pressed":h,onClick:O,disabled:N},o.createElement(Se,{name:"pencil",size:15})," Pencil"),o.createElement("button",{onClick:s,"aria-label":"Next clue",disabled:N},o.createElement(Se,{name:"right"}))),["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"].map((G,U)=>o.createElement("div",{className:"key-row",key:G},U===2&&o.createElement("button",{className:"key key-direction",onClick:()=>r(" "),"aria-label":"Switch across or down",disabled:N},"↔"),[...G].map(y=>o.createElement("button",{className:"key",key:y,onClick:()=>r(y),"aria-label":`Type ${y}`,disabled:N},y)),U===2&&o.createElement("button",{className:"key key-backspace","aria-label":"Backspace",onClick:()=>r("Backspace"),disabled:N},o.createElement(Se,{name:"backspace"})))))}function Ro({name:r,icon:h,children:O,open:s,setOpen:L}){const N=W.useRef(null),M=s===r;return W.useEffect(()=>{if(!M)return;const G=y=>{N.current?.contains(y.target)||L(null)},U=y=>{y.key==="Escape"&&(L(null),N.current?.querySelector("button")?.focus())};return document.addEventListener("pointerdown",G),document.addEventListener("keydown",U),()=>{document.removeEventListener("pointerdown",G),document.removeEventListener("keydown",U)}},[M,L]),o.createElement("div",{ref:N,className:"toolbar-menu"},o.createElement("button",{className:"toolbar-button","aria-expanded":M,"aria-haspopup":"true",onClick:()=>L(M?null:r)},r,o.createElement(Se,{name:h||"down",size:14})),M&&o.createElement("div",{className:"dropdown",onClick:()=>L(null)},O))}function xE({player:r,onModal:h,onShare:O}){const[s,L]=W.useState(null),{game:N,paused:M,togglePause:G,check:U,reveal:y}=r;return o.createElement("div",{className:"toolbar"},o.createElement("button",{className:"timer-button","aria-label":N.completed?"Completed":M?"Resume puzzle":N.started?"Pause puzzle":"Start timer",onClick:G,disabled:N.completed},o.createElement(Se,{name:M||!N.started?"play":"pause",size:16}),o.createElement("span",{className:"timer"},wn(N.seconds))),o.createElement("div",{className:"toolbar-actions"},o.createElement(Ro,{name:"Check",open:s,setOpen:L},[["letter","Letter"],["word","Word"],["puzzle","Puzzle"]].map(([I,B])=>o.createElement("button",{key:I,disabled:M||N.completed,onClick:()=>U(I)},B,o.createElement("span",null,"Check ",I==="puzzle"?"all filled squares":`this ${I}`)))),o.createElement(Ro,{name:"Reveal",open:s,setOpen:L},[["letter","Letter"],["word","Word"],["puzzle","Puzzle"]].map(([I,B])=>o.createElement("button",{key:I,disabled:M||N.completed,onClick:()=>I==="puzzle"?h("reveal"):y(I)},B,o.createElement("span",null,I==="puzzle"?"Show the full solution":`Uncover this ${I}`)))),o.createElement(Ro,{name:"More",icon:"more",open:s,setOpen:L},o.createElement("button",{onClick:()=>{r.setPencil(I=>!I)}},"Pencil mode ",o.createElement("span",null,r.pencil?"On":"Off"," · tentative letters")),o.createElement("button",{onClick:()=>h("keyboard")},"On-screen keyboard"),o.createElement("button",{onClick:()=>h("stats")},"Your statistics"),o.createElement("button",{onClick:O},"Share this puzzle"),o.createElement("button",{onClick:()=>h("help")},"How to play"),o.createElement("button",{onClick:()=>window.print()},"Print puzzle"),o.createElement("button",{className:"danger-text",onClick:()=>h("restart")},"Start over"))))}function Cn({title:r,children:h,onClose:O,wide:s=!1}){const L=W.useRef(null);return W.useEffect(()=>{const N=L.current;return N.showModal(),()=>{N.close()}},[]),o.createElement("dialog",{ref:L,className:`modal ${s?"modal-wide":""}`,onCancel:O,onClick:N=>{if(N.target===N.currentTarget){const M=N.currentTarget.getBoundingClientRect();(N.clientX<M.left||N.clientX>M.right||N.clientY<M.top||N.clientY>M.bottom)&&O()}},"aria-labelledby":"modal-title"},o.createElement("header",{className:"modal-heading"},o.createElement("h2",{id:"modal-title"},r),o.createElement("button",{className:"icon-button",onClick:O,"aria-label":"Close dialog"},o.createElement(Se,{name:"close"}))),h)}const PE=["January","February","March","April","May","June","July","August","September","October","November","December"];function jE({date:r,today:h,onChoose:O,calendarOnly:s=!1}){const L=ba(r),[N,M]=W.useState(L.getUTCMonth()+1),[G,U]=W.useState(L.getUTCFullYear()),[y,I]=W.useState(s?"themes":"archive"),[B,K]=W.useState(""),ie=bE(G,N),le=ba(ie[0]).getUTCDay(),be=new Map(Pd().map(D=>[D.date,D])),$=Array.from({length:Number(h.slice(0,4))-2026+1},(D,Y)=>2026+Y);function ee(D){let Y=N+D,ce=G;Y===0&&(Y=12,ce--),Y===13&&(Y=1,ce++),M(Y),U(ce)}return o.createElement("div",{className:"archive"},o.createElement("div",{className:"segmented"},o.createElement("button",{className:y==="archive"?"active":"",onClick:()=>I("archive")},"Play the archive"),o.createElement("button",{className:y==="themes"?"active":"",onClick:()=>I("themes")},"366 themes")),o.createElement("p",{className:"muted"},y==="archive"?"There’s always another little world to explore. Pick a past puzzle.":"A theme for every date. The themes return each year; the puzzles are newly built."),y==="archive"?o.createElement(o.Fragment,null,o.createElement("div",{className:"calendar-heading"},o.createElement("button",{className:"icon-button","aria-label":"Previous month",disabled:ie[0]<=wl,onClick:()=>ee(-1)},o.createElement(Se,{name:"left"})),o.createElement("div",null,o.createElement("select",{"aria-label":"Archive month",value:N,onChange:D=>M(Number(D.target.value))},PE.map((D,Y)=>o.createElement("option",{key:D,value:Y+1,disabled:`${G}-${String(Y+1).padStart(2,"0")}-01`>h},D))),o.createElement("select",{"aria-label":"Archive year",value:G,onChange:D=>{const Y=Number(D.target.value);U(Y),Y===Number(h.slice(0,4))&&N>Number(h.slice(5,7))&&M(Number(h.slice(5,7)))}},$.map(D=>o.createElement("option",{key:D},D)))),o.createElement("button",{className:"icon-button","aria-label":"Next month",disabled:ie.at(-1)>=h,onClick:()=>ee(1)},o.createElement(Se,{name:"right"}))),o.createElement("div",{className:"calendar-grid"},o.createElement("div",{className:"weekdays"},["S","M","T","W","T","F","S"].map((D,Y)=>o.createElement("span",{key:Y},D))),o.createElement("div",{className:"calendar-days"},Array.from({length:le},(D,Y)=>o.createElement("span",{key:`blank-${Y}`})),ie.map(D=>{const Y=be.get(D)?.completed,ce=Object.keys(be.get(D)?.letters??{}).length>0;return o.createElement("button",{key:D,disabled:D>h||D<wl,className:`${D===r?"selected-day":""} ${Y?"completed-day":""} ${D===h?"today-day":""}`,title:`${Mn(D).title}${Y?" · completed":ce?" · in progress":""}`,"aria-label":`${Zi(D)}: ${Mn(D).title}${Y?", completed":ce?", in progress":""}`,onClick:()=>O(D)},o.createElement("span",null,Number(D.slice(8))),Y?o.createElement(Se,{name:"check",size:12}):ce?o.createElement("span",{className:"calendar-dot"}):o.createElement("span",{className:"day-dot"}))}))),o.createElement("div",{className:"calendar-legend"},o.createElement("span",null,o.createElement("i",{className:"legend-circle"})," Today"),o.createElement("span",null,o.createElement(Se,{name:"check",size:13})," Completed"),o.createElement("span",null,o.createElement("i",{className:"calendar-dot"})," In progress")),o.createElement("button",{className:"primary-button full-width",onClick:()=>O(h)},"Play today’s crossword ",o.createElement(Se,{name:"right"}))):o.createElement(o.Fragment,null,o.createElement("label",{className:"search-label",htmlFor:"theme-search"},"Find a theme"),o.createElement("input",{id:"theme-search",placeholder:"Try woods, music, or space…",value:B,onChange:D=>K(D.target.value)}),o.createElement("div",{className:"theme-list"},yo.filter(D=>`${D.title} ${D.category}`.toLowerCase().includes(B.toLowerCase())).map(D=>{const Y=`${h.slice(0,4)}-${D.key}`,ce=ba(Y),ue=ce&&Y<=h&&Y>=wl;return o.createElement("button",{className:"theme-row",key:D.id,disabled:!ue,onClick:()=>O(Y)},o.createElement("span",{className:"theme-date"},Zi(`2000-${D.key}`,{month:"short",day:"numeric"})),o.createElement("span",null,o.createElement("strong",null,D.title),o.createElement("small",null,D.category)),o.createElement("span",{className:"theme-status"},ue?o.createElement(Se,{name:"right",size:15}):D.key==="02-29"?"Leap day":"Coming up"))}),!yo.some(D=>`${D.title} ${D.category}`.toLowerCase().includes(B.toLowerCase()))&&o.createElement("p",{className:"empty-state"},"No matching themes. Try a broader subject.")),o.createElement("p",{className:"fine-print"},"Future themes are visible. Their puzzles unlock on the day, at midnight in New York.")))}function QE({today:r}){const h=Pd().filter(G=>G.completed),O=new Set(h.map(G=>G.date)),s=h.filter(G=>!G.assisted);let L=O.has(r)?r:Ul(r,-1),N=0;for(;O.has(L);)N++,L=Ul(L,-1);const M=s.length?Math.min(...s.map(G=>G.seconds)):null;return o.createElement(o.Fragment,null,o.createElement("p",{className:"muted"},"A little progress, one day at a time. Your results stay in this browser."),o.createElement("div",{className:"stats-grid"},o.createElement("div",null,o.createElement("strong",null,h.length),o.createElement("span",null,"Puzzles solved")),o.createElement("div",null,o.createElement("strong",null,N),o.createElement("span",null,"Puzzle-day streak")),o.createElement("div",null,o.createElement("strong",null,s.length),o.createElement("span",null,"Without help")),o.createElement("div",null,o.createElement("strong",null,M===null?"—":wn(M)),o.createElement("span",null,"Best without help"))),h.length===0?o.createElement("p",{className:"empty-state"},"Your first finished crossword is the start of something good."):o.createElement("div",{className:"results-list"},h.sort((G,U)=>U.date.localeCompare(G.date)).slice(0,7).map(G=>o.createElement("div",{key:G.date},o.createElement("span",null,G.date),o.createElement("span",null,G.assisted?"With help":"Without help"),o.createElement("strong",null,wn(G.seconds))))),o.createElement("p",{className:"fine-print"},"Checks and reveals count as help. A full solution revealed from the menu is recorded with help. Clearing browser data clears these statistics."))}function _d(r){const h=new URLSearchParams(window.location.search).get("date");return h&&ba(h)&&h>=wl&&h<=r?h:r}function XE(){return o.createElement("span",{className:"brand"},o.createElement("span",{className:"brand-mark","aria-hidden":"true"},Array.from({length:9},(r,h)=>o.createElement("i",{key:h,className:[1,2,3,7].includes(h)?"dark":""}))),o.createElement("span",null,o.createElement("strong",null,"The Daily Cross"),o.createElement("small",null,"by Frank Valdez")))}function ZE(){return o.createElement("div",{className:"help-content"},o.createElement("p",{className:"modal-intro"},"A little curiosity goes a long way."),o.createElement("p",null,"Fill the white squares using the Across and Down clues. Each answer connects to another, and crossing letters must agree. Spaces and punctuation are omitted."),o.createElement("div",{className:"help-colors"},o.createElement("span",null,o.createElement("i",{className:"demo-selected"}),"Your square"),o.createElement("span",null,o.createElement("i",{className:"demo-word"}),"Your word"),o.createElement("span",null,o.createElement("i",{className:"demo-revealed"}),"Revealed letter")),o.createElement("h3",null,"Make yourself at home"),o.createElement("dl",null,o.createElement("div",null,o.createElement("dt",null,"Choose a clue"),o.createElement("dd",null,"Tap a clue or any white square. Tap a crossing square again to change direction.")),o.createElement("div",null,o.createElement("dt",null,"Write an answer"),o.createElement("dd",null,"Use your keyboard or the on-screen keys. The selection moves forward as you type.")),o.createElement("div",null,o.createElement("dt",null,"A little help"),o.createElement("dd",null,"Check flags incorrect filled squares. Reveal uncovers a letter, word, or the solution. Both mark the result as solved with help.")),o.createElement("div",null,o.createElement("dt",null,"Pencil mode"),o.createElement("dd",null,"Make tentative entries in a lighter style. Toggle it in More or above the on-screen keyboard."))),o.createElement("h3",null,"At your own pace"),o.createElement("p",null,"Your progress saves in this browser. Pause whenever you like. The timer pauses when this tab is hidden."),o.createElement("h3",null,"Keyboard shortcuts"),o.createElement("div",{className:"shortcuts"},o.createElement("span",null,o.createElement("kbd",null,"↑"),o.createElement("kbd",null,"↓"),o.createElement("kbd",null,"←"),o.createElement("kbd",null,"→")," Move between squares"),o.createElement("span",null,o.createElement("kbd",null,"Space")," Switch Across / Down"),o.createElement("span",null,o.createElement("kbd",null,"Tab")," Next clue"),o.createElement("span",null,o.createElement("kbd",null,"Shift")," + ",o.createElement("kbd",null,"Tab")," Previous clue"),o.createElement("span",null,o.createElement("kbd",null,"⌫")," Erase, then move back"),o.createElement("span",null,o.createElement("kbd",null,"Home")," / ",o.createElement("kbd",null,"End")," First / last square"),o.createElement("span",null,o.createElement("kbd",null,"Esc")," Leave the grid for the toolbar")),o.createElement("h3",null,"New day. New discovery."),o.createElement("p",null,"A puzzle arrives at midnight in New York. Every date has its own theme, including February 29. Themes repeat annually; the year changes the selected answers and grid. These are connected themed crosswords with some unchecked letters, rather than fully checked newspaper grids."))}function FE({puzzle:r,today:h,onDate:O,notify:s,setGlobalModal:L}){const[N,M]=W.useState(null),[G,U]=W.useState(null),[y,I]=W.useState(""),[B,K]=W.useState(()=>window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches);W.useEffect(()=>{const ue=window.matchMedia("(max-width: 1023px), (pointer: coarse)"),Be=()=>K(ue.matches);return ue.addEventListener("change",Be),()=>ue.removeEventListener("change",Be)},[]);const ie=G??B,le=()=>U(ue=>!(ue??B)),be=W.useCallback(()=>M("complete"),[]),$=YE(r,s,be),{game:ee,active:D}=$,Y=()=>{M(null),$.focusGrid(ee.selected)},ce=async()=>{const ue=new URL(window.location.href);ue.searchParams.set("date",r.date);const Be=`The Daily Cross · ${Zi(r.date,{month:"short",day:"numeric",year:"numeric"})}
${r.theme.title}
${ee.completed?`Solved in ${wn(ee.seconds)} · ${ee.assisted?"with help":"without help"}
`:""}${ue.href}`;try{await navigator.clipboard.writeText(Be),s("Puzzle link copied. No spoilers.")}catch{I(Be),M("share")}};return o.createElement(o.Fragment,null,o.createElement("section",{className:"theme-heading","aria-labelledby":"theme-title"},o.createElement("div",{className:"date-nav"},o.createElement("button",{className:"icon-button circle",onClick:()=>O(Ul(r.date,-1)),disabled:r.date<=wl,"aria-label":"Previous day"},o.createElement(Se,{name:"left"})),o.createElement("button",{className:"date-button",onClick:()=>L("archive")},Zi(r.date)),o.createElement("button",{className:"icon-button circle",onClick:()=>O(Ul(r.date,1)),disabled:r.date>=h,"aria-label":"Next day"},o.createElement(Se,{name:"right"}))),o.createElement("div",{className:"theme-title-wrap"},o.createElement("h2",{id:"theme-title"},r.theme.title),o.createElement("img",{src:"./botanical.png",className:"botanical",alt:"",width:"190",height:"125",onError:ue=>ue.currentTarget.style.visibility="hidden"})),o.createElement("p",null,ME(r.theme)),o.createElement("span",{className:"puzzle-meta"},"Daily themed crossword ",o.createElement("i",null)," ",r.entries.length," words ",ee.completed&&o.createElement(o.Fragment,null,o.createElement("i",null),o.createElement("span",{className:"completed-label"},o.createElement(Se,{name:"check",size:12})," Completed")))),o.createElement("div",{className:"puzzle-layout"},o.createElement("section",{className:"play-panel","aria-label":"Daily crossword player"},o.createElement("div",{className:"active-clue","aria-live":"polite","aria-atomic":"true"},o.createElement("span",{className:"active-clue-text"},o.createElement("strong",null,D.number," ",o.createElement("span",null,D.direction)),o.createElement("span",null,D.clue," ",o.createElement("span",{className:"answer-length"},"(",D.answer.length,")"))),o.createElement("div",null,o.createElement("button",{"aria-label":"Previous clue",onClick:()=>$.nextEntry(-1)},o.createElement(Se,{name:"left",size:18})),o.createElement("button",{"aria-label":"Next clue",onClick:()=>$.nextEntry(1)},o.createElement(Se,{name:"right",size:18})))),o.createElement(xE,{player:$,onModal:ue=>ue==="keyboard"?le():ue==="help"||ue==="stats"?L(ue):M(ue),onShare:ce}),o.createElement(_E,{puzzle:r,game:ee,active:D,errors:$.errors,paused:$.paused,onSelect:$.selectCell,onKeyDown:$.onKeyDown,gridRef:$.gridRef}),$.paused&&o.createElement("button",{className:"resume-button primary-button",onClick:$.togglePause},o.createElement(Se,{name:"play",size:15})," Resume puzzle"),o.createElement("div",{className:"progress-row"},o.createElement("span",null,$.filledWords," of ",r.entries.length," words"),o.createElement("div",{className:"progress-track",role:"progressbar","aria-label":"Squares filled","aria-valuenow":$.filledCells,"aria-valuemin":0,"aria-valuemax":$.totalCells},o.createElement("span",{style:{width:`${$.filledCells/$.totalCells*100}%`}})),o.createElement("button",{className:"keyboard-toggle",onClick:le,"aria-expanded":ie},o.createElement(Se,{name:"keyboard",size:18}),o.createElement("span",null,ie?"Hide keyboard":"Keyboard")),o.createElement("button",{className:"shortcut-link",onClick:()=>L("help")},o.createElement(Se,{name:"keyboard",size:18})," Keyboard shortcuts")),ee.completed&&o.createElement("button",{className:"completion-summary",onClick:()=>M("complete")},o.createElement(Se,{name:"check"})," Beautifully done. View your result ",o.createElement(Se,{name:"right",size:16})),o.createElement(qE,{onKey:$.key,pencil:$.pencil,onPencil:()=>$.setPencil(ue=>!ue),onPrevious:()=>$.nextEntry(-1),onNext:()=>$.nextEntry(1),disabled:$.paused||ee.completed,show:ie})),o.createElement(VE,{puzzle:r,game:ee,active:D,onSelect:$.selectEntry})),N==="complete"&&o.createElement(Cn,{title:"Beautifully done.",onClose:Y},o.createElement("div",{className:"completion"},o.createElement("span",{className:"completion-seal"},o.createElement(Se,{name:"check",size:32})),o.createElement("p",{className:"modal-intro"},"You found your way through",o.createElement("br",null),o.createElement("em",null,r.theme.title,".")),o.createElement("div",{className:"result-time"},wn(ee.seconds)),o.createElement("p",{className:"muted"},"12 words. One little discovery."),o.createElement("span",{className:"result-assistance"},ee.assisted?"Solved with help":"Solved without help"),o.createElement("div",{className:"completion-actions"},o.createElement("button",{className:"primary-button",onClick:ce},o.createElement(Se,{name:"share",size:16})," Share your result"),o.createElement("button",{className:"secondary-button",onClick:()=>{M(null),L("archive")}},"Find another puzzle ",o.createElement(Se,{name:"right",size:16}))),o.createElement("p",{className:"fine-print"},"Tomorrow brings a new theme at midnight, New York time."))),N==="restart"&&o.createElement(Cn,{title:"A fresh start?",onClose:Y},o.createElement("p",null,"This clears your letters, timer, and result for this puzzle. Other days stay saved."),o.createElement("div",{className:"dialog-actions"},o.createElement("button",{className:"secondary-button",onClick:Y},"Keep playing"),o.createElement("button",{className:"primary-button",onClick:()=>{$.restart(),M(null)}},"Start over"))),N==="reveal"&&o.createElement(Cn,{title:"Uncover the whole puzzle?",onClose:Y},o.createElement("p",null,"This fills every answer and records this puzzle as completed with help."),o.createElement("div",{className:"dialog-actions"},o.createElement("button",{className:"secondary-button",onClick:Y},"Keep the mystery"),o.createElement("button",{className:"primary-button",onClick:()=>{M(null),$.reveal("puzzle")}},"Reveal solution"))),N==="share"&&o.createElement(Cn,{title:"Share a little discovery",onClose:Y},o.createElement("p",null,"Copy the text below to share this puzzle without giving away the answers."),o.createElement("textarea",{className:"share-text",readOnly:!0,value:y,onFocus:ue=>ue.target.select(),"aria-label":"Puzzle sharing text"})))}function WE(){const[r,h]=W.useState(()=>Ln()),[O,s]=W.useState(()=>_d(Ln())),[L,N]=W.useState(null),[M,G]=W.useState(null),[U,y]=W.useState(null),[I,B]=W.useState(""),[K,ie]=W.useState(()=>Lo("dark",!1)),le=W.useRef(null),be=W.useRef(null),$=W.useCallback(D=>{B(D),clearTimeout(le.current),le.current=setTimeout(()=>B(""),6500)},[]);W.useEffect(()=>{document.documentElement.dataset.theme=K?"dark":"light",xd("dark",K)},[K]),W.useEffect(()=>{const D=setInterval(()=>h(Ln()),15e3),Y=()=>{document.hidden||h(Ln())};return document.addEventListener("visibilitychange",Y),()=>{clearInterval(D),document.removeEventListener("visibilitychange",Y),clearTimeout(le.current)}},[]),W.useEffect(()=>{let D=!1;N(null),G(null);const Y=setTimeout(()=>{try{const ce=IE(O);D||N(ce)}catch(ce){D||G(ce.message)}},10);return()=>{D=!0,clearTimeout(Y)}},[O]),W.useEffect(()=>{const D=()=>s(_d(Ln())),Y=()=>y("themes");return window.addEventListener("popstate",D),window.addEventListener("open-themes",Y),()=>{window.removeEventListener("popstate",D),window.removeEventListener("open-themes",Y)}},[]);function ee(D){if(!ba(D)||D>r||D<wl)return;const Y=new URL(window.location.href);D===r?Y.searchParams.delete("date"):Y.searchParams.set("date",D),window.history.pushState(null,"",Y),s(D),y(null)}return W.useEffect(()=>{document.title=`${Mn(O).title} · The Daily Cross`},[O]),o.createElement("div",{className:"app-shell"},o.createElement("a",{href:"#puzzle",className:"skip-link"},"Skip to crossword"),o.createElement("header",{className:"site-header"},o.createElement("a",{href:"./",className:"brand-link","aria-label":"The Daily Cross, today",onClick:D=>{D.preventDefault(),ee(r)}},o.createElement(XE,null)),o.createElement("nav",{"aria-label":"Main navigation"},o.createElement("button",{className:O===r?"nav-active":"",onClick:()=>ee(r)},"Today"),o.createElement("button",{onClick:()=>y("archive")},"Archive"),o.createElement("button",{className:"how-to-nav",onClick:()=>y("help")},"How to play"),o.createElement("button",{className:"icon-button theme-toggle",onClick:()=>ie(D=>!D),"aria-label":K?"Use light theme":"Use dark theme"},o.createElement(Se,{name:K?"moon":"sun",size:22})))),o.createElement("main",{id:"puzzle",ref:be},o.createElement("section",{className:"intro"},o.createElement("div",null,o.createElement("h1",null,"A little mystery. Every day."),o.createElement("p",null,"A fresh crossword, a different theme, a moment for yourself.")),o.createElement("button",{className:"theme-calendar-link",onClick:()=>y("themes")},"366 themes. Endless discoveries.")),O<r&&o.createElement("div",{className:"archive-banner"},o.createElement("span",null,o.createElement(Se,{name:"calendar",size:15})," From the archive"),o.createElement("button",{onClick:()=>ee(r)},"Return to today ",o.createElement(Se,{name:"right",size:14}))),r!==O&&O===Ul(r,-1)&&o.createElement("div",{className:"new-day-note"},"Today’s new puzzle is ready whenever you are."),L?o.createElement(FE,{key:`${O}:${L.signature}`,puzzle:L,today:r,onDate:ee,notify:$,setGlobalModal:y}):M?o.createElement("div",{className:"loading error-state"},o.createElement("h2",null,"This puzzle needs another look."),o.createElement("p",null,"The generator could not verify a complete grid for this date."),o.createElement("button",{className:"primary-button",onClick:()=>ee(Ul(O,-1))},"Try the previous day"),o.createElement("details",null,o.createElement("summary",null,"Technical details"),M)):o.createElement("div",{className:"loading",role:"status"},o.createElement("span",{className:"loading-grid"},o.createElement("i",null),o.createElement("i",null),o.createElement("i",null),o.createElement("i",null)),o.createElement("p",null,"Setting the squares for a little discovery…"))),o.createElement("footer",{className:"site-footer"},o.createElement("span",null,"Made for curious minds. Built by ",o.createElement("a",{href:"https://frankiejvaldez.com/"},"Frank Valdez.")),o.createElement("button",{onClick:()=>y("about")},"A new puzzle at midnight, New York time.")),U&&o.createElement(Cn,{title:U==="help"?"A little guidance.":U==="stats"?"Your daily discoveries.":U==="about"?"One date. A new discovery.":"A year of curiosity.",onClose:()=>y(null),wide:U==="themes"},U==="help"?o.createElement(ZE,null):U==="stats"?o.createElement(QE,{today:r}):U==="about"?o.createElement(o.Fragment,null,o.createElement("p",null,"Every calendar date has an authored theme and a set of curated answers and original clues. A deterministic generator selects twelve words and builds a connected, validated crossword for the date and year."),o.createElement("p",null,"There are 366 themes across 61 subject collections. The theme returns annually, while the selected supporting words and grid change with the year. February 29 has its own theme."),o.createElement("p",null,"A new day starts at midnight in ",o.createElement("strong",null,"America/New_York"),", including daylight saving time. Everyone playing the same date gets the same puzzle."),o.createElement("p",{className:"fine-print"},"Progress and statistics are stored only in this browser. No account or paid API is needed. The puzzle is generated locally; this is a casual game, so its solution is available to the browser.")):o.createElement(jE,{date:O,today:r,onChoose:ee,calendarOnly:U==="themes"})),o.createElement("div",{className:`toast ${I?"visible":""}`,role:"status","aria-live":"polite"},I&&o.createElement(o.Fragment,null,o.createElement("span",null,I),o.createElement("button",{onClick:()=>B(""),"aria-label":"Dismiss message"},o.createElement(Se,{name:"close",size:16})))))}class JE extends o.Component{constructor(h){super(h),this.state={error:!1}}static getDerivedStateFromError(){return{error:!0}}render(){return this.state.error?o.createElement("main",{className:"fatal-error"},o.createElement("h1",null,"A brief intermission."),o.createElement("p",null,"The crossword hit an unexpected problem. Your saved progress is still in this browser."),o.createElement("button",{className:"primary-button",onClick:()=>window.location.reload()},"Reload the puzzle")):this.props.children}}pE.createRoot(document.getElementById("root")).render(o.createElement(JE,null,o.createElement(WE,null)));
