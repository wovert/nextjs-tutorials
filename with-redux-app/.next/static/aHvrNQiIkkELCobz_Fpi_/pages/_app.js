(window.webpackJsonp=window.webpackJsonp||[]).push([["0340"],{"/eQG":function(t,e,n){n("v5Dd");var r=n("WEpk").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),u=n("sLSF"),o=n("MI3g"),a=n("a7VT"),i=n("Tit0"),c=n("8Bbg"),l=n.n(c),f=n("q1tI"),s=n.n(f),p=n("UXZV"),d=n.n(p);function h(){return(h=d.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var v=n("ln6h"),b=n.n(v),y=n("Jo+v"),w=n.n(y),O=n("4mXO"),m=n.n(O),g=n("pLtp"),j=n.n(g),x=n("hfKm"),P=n.n(x);function k(t,e,n){return e in t?P()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=j()(n);"function"==typeof m.a&&(r=r.concat(m()(n).filter(function(t){return w()(n,t).enumerable}))),r.forEach(function(e){k(t,e,n[e])})}return t}var _=n("O40h"),E=n("fvjX"),C={todos:["css","html","vue"]},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":var n=t.todos.slice(0);return n.push(e.payload),d()({},t,{todos:n});default:return t}};function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return Object(E.b)(D,t)}var S="undefined"==typeof window,U="__NEXT_REDUX_STORE__";function X(t){return S?I(t):(window[U]||(window[U]=I(t)),window[U])}var N,B=n("/MKj"),G=function(t){function e(){return Object(r.default)(this,e),Object(o.default)(this,Object(a.default)(e).apply(this,arguments))}return Object(i.default)(e,t),Object(u.default)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.reduxStore;return s.a.createElement(c.Container,null,s.a.createElement(B.a,{store:r},s.a.createElement(e,n)))}}]),e}(l.a);e.default=(N=G,function(t){function e(t){var n;return Object(r.default)(this,e),(n=Object(o.default)(this,Object(a.default)(e).call(this,t))).reduxStore=X(t.initialReduxState),n}return Object(i.default)(e,t),Object(u.default)(e,null,[{key:"getInitialProps",value:(n=Object(_.default)(b.a.mark(function t(e){var n,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=X(),e.ctx.reduxStore=n,r={},"function"!=typeof N.getInitialProps){t.next=7;break}return t.next=6,N.getInitialProps(e);case 6:r=t.sent;case 7:return t.abrupt("return",T({},r,{initialReduxState:n.getState()}));case 8:case"end":return t.stop()}},t)})),function(t){return n.apply(this,arguments)})}]),Object(u.default)(e,[{key:"render",value:function(){return s.a.createElement(N,h({},this.props,{reduxStore:this.reduxStore}))}}]),e;var n}(s.a.Component))},"4mXO":function(t,e,n){t.exports=n("7TPF")},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("KI45"),u=r(n("eVuF")),o=r(n("UXZV")),a=r(n("/HRN")),i=r(n("WaGi")),c=r(n("ZDA2")),l=r(n("/+P4")),f=r(n("N9n2")),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},p=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var d=s(n("q1tI")),h=p(n("lgD3")),v=n("Bu4q"),b=n("nOHt"),y=function(t){function e(){return(0,a.default)(this,e),(0,c.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,f.default)(e,t),(0,i.default)(e,[{key:"getChildContext",value:function(){return{router:b.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(t){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,u=m(e);return d.default.createElement(w,null,d.default.createElement(n,(0,o.default)({},r,{url:u})))}}],[{key:"getInitialProps",value:function(t){var e=t.Component,n=(t.router,t.ctx);try{return u.default.resolve(v.loadGetInitialProps(e,n)).then(function(t){return{pageProps:t}})}catch(r){return u.default.reject(r)}}}]),e}(d.Component);y.childContextTypes={router:h.default.object},e.default=y;var w=function(t){function e(){return(0,a.default)(this,e),(0,c.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,f.default)(e,t),(0,i.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=window.location.hash;if(t=!!t&&t.substring(1)){var e=document.getElementById(t);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(d.Component);e.Container=w;var O=v.execOnce(function(){0});function m(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return O(),r},get pathname(){return O(),e},get asPath(){return O(),n},back:function(){O(),t.back()},push:function(e,n){return O(),t.push(e,n)},pushTo:function(e,n){O();var r=n?e:null,u=n||e;return t.push(r,u)},replace:function(e,n){return O(),t.replace(e,n)},replaceTo:function(e,n){O();var r=n?e:null,u=n||e;return t.replace(r,u)}}}e.createUrl=m},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var t=n("1TCz");return{page:t.default||t}}])},"Jo+v":function(t,e,n){t.exports=n("/eQG")},v5Dd:function(t,e,n){var r=n("NsO/"),u=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(t,e){return u(r(t),e)}})}},[["GcxT","5d41","9da1"]]]);