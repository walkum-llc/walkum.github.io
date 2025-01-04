"use strict";(self.webpackChunkwalkum=self.webpackChunkwalkum||[]).push([[340],{8907:function(e,t){t.Y=function(e,t){return l(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var a=e.expressions.every((function(e){var n=e.feature,r=e.modifier,a=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=o(a),i=o(i);break;case"resolution":a=m(a),i=m(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=c(a),i=c(i);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=a;case"max":return i<=a;default:return i===a}}));return a&&!n||!a&&n}))};var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function l(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],s=t[2],l=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=s?s.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],c.expressions=l.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(a);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function m(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function o(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},9919:function(e,t,n){var r=n(3051),a=n(6540);const i={maps:a.createElement("div",{className:r.Ti},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-pin-map",viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"}),a.createElement("path",{fillRule:"evenodd",d:"M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"}))),facebook:a.createElement("div",{className:r.Ti},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-facebook",viewBox:"0 0 16 16"},a.createElement("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"}))),twitter:a.createElement("div",{className:r.Ti},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-twitter-x",viewBox:"0 0 16 16"},a.createElement("path",{d:"M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"}))),instagram:a.createElement("div",{className:r.Ti},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16"},a.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"})))};t.A=e=>{let{app:t}=e;return i[t]||null}},400:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var r=n(6540),a=n(3051),i=n(2670),s=(n(4810),n(7918)),l=n.n(s),c=/[A-Z]/g,m=/^ms-/,o={};function u(e){return"-"+e.toLowerCase()}var d=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(c,u);return o[e]=m.test(t)?"-"+t:t};function f(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(let i=0;i<a;i++){const r=n[i];if(e[r]!==t[r]||!Object.prototype.hasOwnProperty.call(t,r))return!1}return!0}var E=n(5556),h=n.n(E);const p=h().oneOfType([h().string,h().number]),v={all:h().bool,grid:h().bool,aural:h().bool,braille:h().bool,handheld:h().bool,print:h().bool,projection:h().bool,screen:h().bool,tty:h().bool,tv:h().bool,embossed:h().bool},b={orientation:h().oneOf(["portrait","landscape"]),scan:h().oneOf(["progressive","interlace"]),aspectRatio:h().string,deviceAspectRatio:h().string,height:p,deviceHeight:p,width:p,deviceWidth:p,color:h().bool,colorIndex:h().bool,monochrome:h().bool,resolution:p,type:Object.keys(v)},{type:w,...g}=b,_={minAspectRatio:h().string,maxAspectRatio:h().string,minDeviceAspectRatio:h().string,maxDeviceAspectRatio:h().string,minHeight:p,maxHeight:p,minDeviceHeight:p,maxDeviceHeight:p,minWidth:p,maxWidth:p,minDeviceWidth:p,maxDeviceWidth:p,minColor:h().number,maxColor:h().number,minColorIndex:h().number,maxColorIndex:h().number,minMonochrome:h().number,maxMonochrome:h().number,minResolution:p,maxResolution:p,...g};var N={all:{...v,..._},types:v,matchers:b,features:_};const x=e=>{const t=[];return Object.keys(N.all).forEach((n=>{const r=e[n];null!=r&&t.push(((e,t)=>{const n=d(e);return"number"==typeof t&&(t=`${t}px`),!0===t?n:!1===t?`not ${n}`:`(${n}: ${t})`})(n,r))})),t.join(" and ")},k=(0,r.createContext)(void 0),y=e=>{if(!e)return;return Object.keys(e).reduce(((t,n)=>(t[d(n)]=e[n],t)),{})},j=()=>{const e=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{e.current=!0}),[]),e.current},W=e=>{const t=()=>(e=>e.query||x(e))(e),[n,a]=(0,r.useState)(t);return(0,r.useEffect)((()=>{const e=t();n!==e&&a(e)}),[e]),n},C=(e,t,n)=>{const a=(e=>{const t=(0,r.useContext)(k),n=()=>y(e)||y(t),[a,i]=(0,r.useState)(n);return(0,r.useEffect)((()=>{const e=n();f(a,e)||i(e)}),[e,t]),a})(t),i=W(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const s=((e,t)=>{const n=()=>l()(e,t||{},!!t),[a,i]=(0,r.useState)(n),s=j();return(0,r.useEffect)((()=>{if(s){const e=n();return i(e),()=>{e&&e.dispose()}}}),[e,t]),a})(i,a),c=(e=>{const[t,n]=(0,r.useState)(e.matches);return(0,r.useEffect)((()=>{const t=e=>{n(e.matches)};return e.addListener(t),n(e.matches),()=>{e.removeListener(t)}}),[e]),t})(s),m=j();return(0,r.useEffect)((()=>{m&&n&&n(c)}),[c]),(0,r.useEffect)((()=>()=>{s&&s.dispose()}),[]),c},I=({children:e,device:t,onChange:n,...r})=>{const a=C(r,t,n);return"function"==typeof e?e(a):a?e:null};var L=e=>r.createElement("div",{className:[a.vd,a.Zn].join(" ")},e.day);var A=e=>r.createElement("div",{className:[a.kB,a.Zn].join(" ")},e.time);var O=e=>r.createElement("li",{className:a.oS},r.createElement(L,{day:e.item[0]}),r.createElement(A,{time:e.item[1]}));var S=e=>r.createElement("ul",{className:a._},e.restaurant.restaurantHours.map(((e,t)=>{if("day"!==e[0])return r.createElement(O,{item:e,key:t})}))),M=n(1468),G=n(9919);var R=()=>{const e=(0,M.d4)((e=>e.restaurant)),t=["maps","facebook","twitter","instagram"];return r.createElement("div",{className:a.Jb},e.restaurantInfo.filter((e=>{let[n,r]=e;return t.includes(n)&&"string"==typeof r&&r.trim()})).map(((e,t)=>{let[n,i]=e;return r.createElement("a",{key:t,className:a.QS,href:i,target:"_blank",rel:"noopener noreferrer"},r.createElement(G.A,{app:n}))})))},D=n(6474),T=n(9926);const F=()=>{const e=(0,M.wA)(),t=(0,M.d4)((e=>e.restaurant));return r.createElement("div",{className:a.E3},r.createElement("button",{onClick:()=>e((0,T.Ir)()),className:a.Rm},t.showMenu?"Go to Restaurant":"READ MENU"))};var H=()=>{(0,M.wA)();const e=(0,M.d4)((e=>e.restaurant));return r.createElement("div",{className:i.kL},r.createElement(I,{maxWidth:767},r.createElement("div",{className:a.BV},r.createElement("h1",{className:a.QS},"WELCOME TO"),r.createElement("h1",{className:[a.QS,a.kb].join(" ")},e.restaurantInfo.map(((e,t)=>{if("name"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement(F,null),r.createElement("div",null,r.createElement("h4",{className:[a._y,a.Gj].join(" ")},e.restaurantInfo.map(((e,t)=>{if("slogan"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement("h4",{className:[a._y,a.Gj].join(" ")},e.restaurantInfo.map(((e,t)=>{if("sub_slogan"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement("div",{className:[a.Gj,a.eS].join(" ")}),r.createElement(S,{className:a.Gj,restaurant:e}))),r.createElement(R,null),r.createElement(D.A,null)),r.createElement(I,{minWidth:768,maxWidth:991},r.createElement("div",{className:a.Iz},r.createElement("h1",{className:a.QS},"WELCOME TO"),r.createElement("h1",{className:[a.QS,a.kb].join(" ")},e.restaurantInfo.map(((e,t)=>{if("name"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement(F,null),r.createElement("div",null,r.createElement("h4",{className:[a._y,a.Gj].join(" ")},e.restaurantInfo.map(((e,t)=>{if("slogan"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement("h4",{className:[a._y,a.Gj].join(" ")},e.restaurantInfo.map(((e,t)=>{if("sub_slogan"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement("div",{className:[a.Gj,a.eS].join(" ")}),r.createElement(S,{className:a.Gj,restaurant:e}))),r.createElement(R,null),r.createElement(D.A,null)),r.createElement(I,{minWidth:992},r.createElement("div",{className:a.Iz},r.createElement("h1",{className:a.QS},"WELCOME TO"),r.createElement("h1",{className:[a.QS,a.kb].join(" ")},e.restaurantInfo.map(((e,t)=>{if("name"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement(F,null),r.createElement("div",null,r.createElement("h4",{className:[a._y,a.Gj].join(" ")},e.restaurantInfo.map(((e,t)=>{if("slogan"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement("h4",{className:[a._y,a.Gj].join(" ")},e.restaurantInfo.map(((e,t)=>{if("sub_slogan"==e[0])return r.createElement("div",{key:t},e[1])}))),r.createElement("div",{className:[a.Gj,a.eS].join(" ")}),r.createElement(S,{className:a.Gj,restaurant:e}))),r.createElement(R,null),r.createElement(D.A,null)))};var V=e=>r.createElement("div",null,r.createElement(I,{maxWidth:767},r.createElement("div",{className:[a.ep,a.x1].join(" ")},e.item)),r.createElement(I,{minWidth:768,maxWidth:991},r.createElement("div",{className:[a.ep,a.eG].join(" ")},e.item)),r.createElement(I,{minWidth:992},r.createElement("div",{className:[a.ep,a.eG].join(" ")},e.item)));var z=e=>r.createElement("div",null,r.createElement(I,{maxWidth:767},r.createElement("div",{className:[a.ep,a.Pq].join(" ")},e.side)),r.createElement(I,{minWidth:768,maxWidth:991},r.createElement("div",{className:[a.ep,a.AX].join(" ")},e.side)),r.createElement(I,{minWidth:992},r.createElement("div",{className:[a.ep,a.AX].join(" ")},e.side)));var B=e=>isNaN(e.price)?null:r.createElement("div",{className:[a.o0,a.Dl].join(" ")},r.createElement(I,{maxWidth:767},r.createElement("div",{className:[a.ep,a.Lx].join(" ")},parseFloat(Math.round(100*e.price)/100).toFixed(2))),r.createElement(I,{minWidth:768,maxWidth:991},r.createElement("div",{className:[a.ep,a.s$].join(" ")},parseFloat(Math.round(100*e.price)/100).toFixed(2))),r.createElement(I,{minWidth:992},r.createElement("div",{className:[a.ep,a.s$].join(" ")},parseFloat(Math.round(100*e.price)/100).toFixed(2))));var Q=e=>r.createElement("div",null,r.createElement(I,{maxWidth:767},r.createElement("li",{className:a.dV},r.createElement("div",{className:[a.Dl,a.Vw].join(" ")},r.createElement(V,{item:e.item.itemtext}),r.createElement(z,{side:e.item.itemsubtext})),r.createElement(B,{price:e.item.price}))),r.createElement(I,{minWidth:768,maxWidth:991},r.createElement("li",{className:a.dV},r.createElement("div",{className:[a.Dl,a.WO].join(" ")},r.createElement(V,{item:e.item.itemtext}),r.createElement(z,{side:e.item.itemsubtext})),r.createElement(B,{price:e.item.price}))),r.createElement(I,{minWidth:992},r.createElement("li",{className:a.gR},r.createElement("div",{className:[a.Dl,a.WO].join(" ")},r.createElement(V,{item:e.item.itemtext}),r.createElement(z,{side:e.item.itemsubtext})),r.createElement(B,{price:e.item.price}))));var q=e=>r.createElement("div",{className:a.ex},e.text);var $=e=>{var t;const{isOpen:n,onToggle:i,sectionIndex:s}=e,l=(0,r.useRef)(null),{0:c,1:m}=(0,r.useState)(window.innerWidth<=767);(0,r.useEffect)((()=>{const e=()=>{m(window.innerWidth<=767)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const o=null===(t=e.list.find((e=>e.sectioncomment)))||void 0===t?void 0:t.sectioncomment;return(0,r.useEffect)((()=>{n&&l.current&&l.current.scrollIntoView({behavior:"smooth",block:"start"})}),[n]),r.createElement("div",{ref:l},r.createElement("h2",{className:[a.scrolled_open_section,c?a.Rg:a.kN].join(" "),onClick:()=>i(s)},e.sectionTitle),n&&o&&r.createElement(q,{text:o}),n&&r.createElement("div",{className:a.NQ},r.createElement("ul",{className:[c?a.LG:a.e3].join(" ")},e.list.map(((e,t)=>r.createElement(Q,{item:e,key:"item-"+t}))))))};var P=e=>{const{0:t,1:n}=(0,r.useState)(null),i=(0,M.d4)((e=>e.restaurant)),s=e=>{n(t===e?null:e)};return r.createElement("div",{className:a.hf},r.createElement(I,{maxWidth:767},i.menus[i.openedMenuIndex].map(((n,i)=>{const l=n[0].section;return r.createElement("div",{className:a.cq,key:i},r.createElement($,Object.assign({className:a.NY,sectionTitle:l,sectionIndex:i,list:n,isOpen:t===i,onToggle:s},e)))}))),r.createElement(I,{minWidth:768,maxWidth:991},i.menus[i.openedMenuIndex].map(((n,i)=>{const l=n[0].section;return r.createElement("div",{className:a.cq,key:i},r.createElement($,Object.assign({className:a.qi,sectionTitle:l,sectionIndex:i,list:n,isOpen:t===i,onToggle:s},e)))}))),r.createElement(I,{minWidth:992},i.menus[i.openedMenuIndex].map(((n,i)=>{const l=n[0].section;return r.createElement("div",{className:a.hD,key:i},r.createElement($,Object.assign({className:a.qi,sectionTitle:l,sectionIndex:i,list:n,isOpen:t===i,onToggle:s},e)))}))))};var Z=e=>{const t=(0,M.wA)(),n=(0,M.d4)((e=>e.restaurant)),{0:i,1:s}=(0,r.useState)([]),{0:l,1:c}=(0,r.useState)([]);(0,r.useEffect)((()=>{const t=[],r=n.menus.filter(((n,r)=>{const a=n[0][0].menu.toLowerCase(),i=!("top"!==e.topbottom||a.includes("drink")||a.includes("dess")||a.includes("bever")||a.includes("sweet")),s="bottom"===e.topbottom&&(a.includes("drink")||a.includes("dess")||a.includes("bever")||a.includes("sweet"));return!(!i&&!s)&&(t.push(r),!0)}));s(t),c(r)}),[n.menus,e.topbottom]),(0,r.useEffect)((()=>{setTimeout((()=>{l.forEach(((e,t)=>{if(t%2!=0){const e=document.getElementsByClassName("mobile_menu_button")[t],n=document.getElementsByClassName("mobile_menu_button")[t-1];if(e&&n){const t=window.getComputedStyle(e,null).getPropertyValue("height"),r=window.getComputedStyle(n,null).getPropertyValue("height");parseFloat(t)>parseFloat(r)?n.setAttribute("style","height: "+t):e.setAttribute("style","height: "+r)}}}))}),0)}),[l]);const m=()=>{t((0,T.aE)()),window.scrollTo(0,0)};return r.createElement("div",{className:a.fF},l.map(((e,n)=>{const s=e[0][0].menu;return l[n+1]||n%2!=0?r.createElement("div",{key:n,className:[a.t_,a.Cy].join(" "),onClick:()=>{t((0,T.rl)(i[n])),m()},key:n},r.createElement("p",null,s)):r.createElement("div",{key:n,className:[a.t_,a.vk].join(" "),onClick:()=>{t((0,T.rl)(i[n])),m()},key:n},r.createElement("p",null,s))})))};var Y=e=>{const t=(0,M.wA)(),n=(0,M.d4)((e=>e.restaurant)),i=()=>{t((0,T.Ir)())};return r.createElement("div",null,r.createElement(I,{maxWidth:767},r.createElement("div",null,r.createElement("div",{onClick:()=>i()},r.createElement("h1",{className:[a.GR,a.Zc].join(" ")},n.restaurantInfo.map(((e,t)=>{if("name"==e[0])return r.createElement("div",{key:t,className:a.nf},e[1])})))))),r.createElement(I,{minWidth:768,maxWidth:991},r.createElement("div",null,r.createElement("div",{onClick:()=>i()},r.createElement("h1",{className:[a.GR,a.A0].join(" ")},n.restaurantInfo.map(((e,t)=>{if("name"==e[0])return r.createElement("div",{key:t,className:a.nf},e[1])})))),r.createElement(Z,e))),r.createElement(I,{minWidth:992},r.createElement("div",null,r.createElement("div",{onClick:()=>i()},r.createElement("h1",{className:a.GR},n.restaurantInfo.map(((e,t)=>{if("name"==e[0])return r.createElement("div",{key:t,className:a.nf},e[1])})))),r.createElement(Z,e))))};var J=e=>{const t=(0,M.d4)((e=>e.restaurant.hasOpened));return r.createElement("div",{className:i.kL},r.createElement(Y,{className:a.qi}),r.createElement(Z,{topbottom:"top"}),t&&r.createElement(P,e),r.createElement(Z,{topbottom:"bottom"}),r.createElement(D.A,null))},X=n(2532);var U=e=>r.createElement("div",{className:a.wG},r.createElement("p",{className:a.jD},"loading your menu"),r.createElement("p",{className:[a.yr,a.jD].join(" ")},"...."),r.createElement(X.S,{className:[a.jD,a.dn].join(" "),src:"../../../images/walkum_sites.png",alt:"walkum | sites",__imageData:n(1991)})),K=n(2956);const ee=n(8272),te=e=>{let{showMenu:t}=e;return r.createElement("div",null,r.createElement(I,{maxWidth:767},r.createElement("div",{className:a.Fn},t?r.createElement(J,null):r.createElement(H,null))),r.createElement(I,{minWidth:768,maxWidth:991},r.createElement("div",{className:a.Fn},t?r.createElement(J,null):r.createElement(H,null))),r.createElement(I,{minWidth:992},r.createElement("div",{className:a.yx},t?r.createElement(J,null):r.createElement(H,null))))};var ne=()=>{const e=(0,M.wA)(),t=(0,M.d4)((e=>e.restaurant.showMenu)),{loading:n,error:a,data:i}=(0,K.eA)({spreadsheetId:ee.spreadsheets.test.id,sheetName:"info"}),{loading:s,error:l,data:c}=(0,K.jn)({spreadsheetId:ee.spreadsheets.test.id,sheetName:"hours"}),{loading:m,error:o,data:u}=(0,K.b)({spreadsheetId:ee.spreadsheets.test.id,sheetName:"menu"}),d=n||s||m;return(0,r.useEffect)((()=>{n||a||e((0,T.ni)(i)),s||l||e((0,T.GD)(c)),m||o||e((0,T.Ok)(u))}),[e,n,a,i,s,l,c,m,o,u]),r.createElement("div",null,d?r.createElement(U,null):r.createElement("div",null,r.createElement(te,{showMenu:t})))},re=n(2471);var ae=()=>r.createElement("div",null,r.createElement(re.A,{title:"Walkum | Merchant",description:"Walkum Menu Hosting. Reliable menu rending, whether it's online or printed PDF for your customers to hold. Don't fumble around with your prices ever again.",keywords:"walkum, retsaurant, menu, rendering, inline, software",url:"https://walkum.xyz/restaurant"}),r.createElement("main",null,r.createElement(ne,null)))},7918:function(e,t,n){var r=n(8907).Y,a="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i,s=this;function l(e){s.matches=e.matches,s.media=e.media}a&&!n&&(i=a.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=r(e,t),this.media=e),this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(l)}}e.exports=function(e,t,n){return new i(e,t,n)}},3051:function(e,t,n){n.d(t,{A0:function(){return K},AX:function(){return d},BV:function(){return G},Cy:function(){return W},Dl:function(){return o},E3:function(){return ne},Fn:function(){return M},GR:function(){return b},Gj:function(){return Q},Iz:function(){return F},Jb:function(){return V},LG:function(){return S},Lx:function(){return k},NQ:function(){return _},NY:function(){return j},Pq:function(){return y},QS:function(){return H},Rg:function(){return R},Rm:function(){return te},Ti:function(){return X},Vw:function(){return A},WO:function(){return g},Zc:function(){return I},Zn:function(){return P},_:function(){return B},_y:function(){return q},cq:function(){return D},dV:function(){return L},dn:function(){return p},e3:function(){return N},eG:function(){return m},eS:function(){return Z},ep:function(){return c},ex:function(){return Y},fF:function(){return C},gR:function(){return w},hD:function(){return U},hf:function(){return s},jD:function(){return i},kB:function(){return ee},kN:function(){return J},kb:function(){return z},nf:function(){return f},o0:function(){return O},oS:function(){return $},qi:function(){return v},s$:function(){return u},t_:function(){return r},vd:function(){return l},vk:function(){return a},wG:function(){return E},x1:function(){return x},yr:function(){return h},yx:function(){return T}});var r="restaurant-module--button_menu--5f6e8",a="restaurant-module--button_menu_center--9940a",i="restaurant-module--center_menu_loading--0a164",s="restaurant-module--current_section_list--72974",l="restaurant-module--day--a6447",c="restaurant-module--item_detail--895a5",m="restaurant-module--item_item--d29c0",o="restaurant-module--item_lr--c336b",u="restaurant-module--item_price--f37e3",d="restaurant-module--item_side--499e6",f="restaurant-module--link--02811",E="restaurant-module--loader--05261",h="restaurant-module--loading_cursor--35d18",p="restaurant-module--loading_tm--af717",v="restaurant-module--menu_block--7cdd1",b="restaurant-module--menu_header--87769",w="restaurant-module--menu_item--9aecb",g="restaurant-module--menu_item_left--6643e",_="restaurant-module--menu_item_list--21975",N="restaurant-module--menu_section--beefe",x="restaurant-module--mobile_item_item--73812",k="restaurant-module--mobile_item_price--c2291",y="restaurant-module--mobile_item_side--3e889",j="restaurant-module--mobile_menu_block--1cd40",W="restaurant-module--mobile_menu_button--71b87",C="restaurant-module--mobile_menu_buttons--0ee6e",I="restaurant-module--mobile_menu_header--5073f",L="restaurant-module--mobile_menu_item--23bf4",A="restaurant-module--mobile_menu_item_left--bf309",O="restaurant-module--mobile_menu_item_right--72a1c",S="restaurant-module--mobile_menu_section--f2246",M="restaurant-module--mobile_restaurant--d0ba1",G="restaurant-module--mobile_restaurant_home--59e32",R="restaurant-module--mobile_section_header--f0852",D="restaurant-module--mobile_sortedMenuList--9d382",T="restaurant-module--restaurant--cffd7",F="restaurant-module--restaurant_home--67895",H="restaurant-module--restaurant_home_item--0099d",V="restaurant-module--restaurant_home_media--b69c9",z="restaurant-module--restaurant_name--c8046",B="restaurant-module--schedule--99275",Q="restaurant-module--schedule_container_item--3a2d4",q="restaurant-module--schedule_header--072a1",$="restaurant-module--schedule_item--402bf",P="restaurant-module--schedule_line_item--db86a",Z="restaurant-module--schedule_seperator--22e17",Y="restaurant-module--section_comment--ce060",J="restaurant-module--section_header--49982",X="restaurant-module--social-media-icon--26bda",U="restaurant-module--sortedMenuList--efe14",K="restaurant-module--tablet_menu_header--ebdb1",ee="restaurant-module--time--6fdbc",te="restaurant-module--toggleButton--d01e4",ne="restaurant-module--toggleContainer--a2591"},1991:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a2b24649d39cf7e57362e7867743ffbe/6d7ee/walkum_sites.png","srcSet":"/static/a2b24649d39cf7e57362e7867743ffbe/19528/walkum_sites.png 261w,\\n/static/a2b24649d39cf7e57362e7867743ffbe/bb86e/walkum_sites.png 523w,\\n/static/a2b24649d39cf7e57362e7867743ffbe/6d7ee/walkum_sites.png 1045w","sizes":"(min-width: 1045px) 1045px, 100vw"},"sources":[{"srcSet":"/static/a2b24649d39cf7e57362e7867743ffbe/cda46/walkum_sites.webp 261w,\\n/static/a2b24649d39cf7e57362e7867743ffbe/63f36/walkum_sites.webp 523w,\\n/static/a2b24649d39cf7e57362e7867743ffbe/c654e/walkum_sites.webp 1045w","type":"image/webp","sizes":"(min-width: 1045px) 1045px, 100vw"}]},"width":1045,"height":250.00000000000003}')}}]);
//# sourceMappingURL=component---src-pages-restaurant-js-baf8188549bf4b4da117.js.map