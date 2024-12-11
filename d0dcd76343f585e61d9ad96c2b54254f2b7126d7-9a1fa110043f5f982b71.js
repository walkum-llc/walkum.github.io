"use strict";(self.webpackChunkwalkum=self.webpackChunkwalkum||[]).push([[706],{8828:function(e){e.exports=Object.assign},2471:function(e,t,n){n.d(t,{A:function(){return me}});var r,o,i,a,u=n(6540),c=n(5556),l=n.n(c),s=n(2098),f=n.n(s),d=n(115),p=n.n(d),m=n(8828),y=n.n(m),h="bodyAttributes",b="htmlAttributes",T="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",E="href",C="http-equiv",A="innerHTML",O="itemprop",x="name",S="property",k="rel",j="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",_="defer",N="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=X(e,g.TITLE),n=X(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,I);return t||r||void 0},W=function(e){return X(e,M)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===k&&"canonical"===e[n].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==A&&u!==w&&u!==O||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=y()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),G=function(e){return clearTimeout(e)},Q="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:n.g.cancelAnimationFrame||G,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ae(g.BODY,r),ae(g.HTML,o),ie(f,d);var p={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,i),metaTags:ue(g.META,a),noscriptTags:ue(g.NOSCRIPT,u),scriptTags:ue(g.SCRIPT,l),styleTags:ue(g.STYLE,s)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=p[e].oldTags)})),t&&t(),c(e,m,y)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ae(g.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+H+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(H,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},se=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=le(n,r),[u.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ce(n),i=oe(t);return o?"<"+e+" "+H+'="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+" "+H+'="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case b:return{toComponent:function(){return le(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===A||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+" "+H+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:se(g.BASE,t,r),bodyAttributes:se(h,n,r),htmlAttributes:se(b,o,r),link:se(g.LINK,i,r),meta:se(g.META,a,r),noscript:se(g.NOSCRIPT,u,r),script:se(g.SCRIPT,c,r),style:se(g.STYLE,l,r),title:se(g.TITLE,{title:f,titleAttributes:d},r)}},de=f()((function(e){return{baseTag:J([E,L],e),bodyAttributes:Z(h,e),defer:X(e,_),encode:X(e,N),htmlAttributes:Z(b,e),linkTags:V(g.LINK,[k,E],e),metaTags:V(g.META,[x,v,C,S,O],e),noscriptTags:V(g.NOSCRIPT,[A],e),onChangeClientState:W(e),scriptTags:V(g.SCRIPT,[j,A],e),styleTags:V(g.STYLE,[w],e),title:z(e),titleAttributes:Z(T,e)}}),(function(e){ne&&ee(ne),e.defer?ne=Q((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),fe)((function(){return null})),pe=(o=de,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case g.BODY:return U({},o,{bodyAttributes:U({},i)});case g.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(B(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);pe.renderStatic=pe.rewind;var me=e=>{let{title:t,description:n,keywords:r,imageUrl:o,url:i}=e;return u.createElement(pe,null,u.createElement("title",null,t),u.createElement("meta",{name:"description",content:n}),u.createElement("meta",{name:"keywords",content:r}),u.createElement("meta",{property:"og:title",content:t}),u.createElement("meta",{property:"og:description",content:n}),u.createElement("meta",{property:"og:url",content:i}),u.createElement("meta",{property:"og:type",content:"website"}),o&&u.createElement("meta",{property:"og:image",content:o}),u.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.createElement("meta",{name:"twitter:title",content:t}),u.createElement("meta",{name:"twitter:description",content:n}),o&&u.createElement("meta",{name:"twitter:image",content:o}))}},6474:function(e,t,n){var r=n(2670),o=n(6540),i=n(4810);t.A=()=>o.createElement("div",{className:r.qr},o.createElement("p",{style:{fontSize:"10px"}},"Made with ",o.createElement("span",null,"❤️")," by"," ",o.createElement(i.N_,{to:"https://walkum.xyz/sites"},"Walkum")))},2670:function(e,t,n){n.d(t,{Ci:function(){return h},D0:function(){return j},JF:function(){return m},Lf:function(){return T},Lh:function(){return O},ML:function(){return w},N1:function(){return f},Vk:function(){return u},YL:function(){return k},Z1:function(){return b},Zp:function(){return E},aC:function(){return y},aL:function(){return A},gX:function(){return i},jj:function(){return o},kL:function(){return c},li:function(){return g},qd:function(){return p},qr:function(){return l},qu:function(){return a},s$:function(){return C},sj:function(){return v},tx:function(){return r},uO:function(){return S},uU:function(){return x},wL:function(){return s},wp:function(){return d}});var r="index-module--arrow_span--f48bd",o="index-module--blinking-cursor--e2be6",i="index-module--center--6c63b",a="index-module--center_text_block--9d594",u="index-module--chart_padding--43000",c="index-module--container--9e7f9",l="index-module--footer--8d7ca",s="index-module--green--21d20",f="index-module--header-container--ec9de",d="index-module--header-link--92332",p="index-module--header-title--f56cb",m="index-module--header_border--a723c",y="index-module--header_left--4a4e3",h="index-module--large_header--bc628",b="index-module--med_header--15f3f",T="index-module--p_left--cb0fc",g="index-module--pay--78de8",v="index-module--pay_free--38215",w="index-module--please_email--87a1a",E="index-module--purple--30baa",C="index-module--service_header--d0303",A="index-module--small_text--1233c",O="index-module--svg-button--23da3",x="index-module--title_picture--75853",S="index-module--title_picture_small--2b61b",k="index-module--tooltip--b5884",j="index-module--tooltiptext--e375b"},2098:function(e,t,n){var r,o=n(6540),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}}}]);
//# sourceMappingURL=d0dcd76343f585e61d9ad96c2b54254f2b7126d7-9a1fa110043f5f982b71.js.map