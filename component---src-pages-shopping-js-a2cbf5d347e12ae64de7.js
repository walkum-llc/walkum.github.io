"use strict";(self.webpackChunkwalkum=self.webpackChunkwalkum||[]).push([[87],{6474:function(e,t,n){var r=n(2670),a=n(6540),o=n(4810);t.A=()=>a.createElement("div",{className:r.qr},a.createElement("p",{style:{fontSize:"10px"}},"Made with ",a.createElement("span",null,"❤️")," by"," ",a.createElement(o.N_,{to:"https://walkum.xyz/sites"},"Walkum")))},6836:function(e,t,n){var r=n(2670),a=n(6540),o=n(4810);t.A=()=>a.createElement("header",null,a.createElement("div",{className:r.N1},a.createElement(o.N_,{to:"/",className:r.wp},a.createElement("h1",{className:r.qd},"walkum"))))},2956:function(e,t,n){n.d(t,{b:function(){return l},eA:function(){return a},jn:function(){return o}});var r=n(6540);const a=e=>{let{spreadsheetId:t,sheetName:n}=e;const{0:a,1:o}=(0,r.useState)(!0),{0:l,1:c}=(0,r.useState)(null),{0:u,1:s}=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{const e="https://docs.google.com/spreadsheets/d/"+t+"/gviz/tq?tqx=out:csv&sheet="+n;try{const t=await fetch(e);if(!t.ok)throw new Error("HTTP error! Status: "+t.status);const n=await t.text(),r=n.trim().split("\n").reduce(((e,t)=>{var n;const r=null===(n=t.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g))||void 0===n?void 0:n.map((e=>e.replace(/(^"|"$)/g,"").trim()));if(!r||0===r.length)return e;const a=r[0];if(!a)return e;const o=r.slice(1).filter((e=>""!==e));return e[a]=1===o.length?o[0]:o,e}),{});s(r),o(!1)}catch(r){console.error("Error fetching spreadsheet data:",r),c(r.message),o(!1)}})()}),[t,n]),{loading:a,error:l,data:u}},o=e=>{let{spreadsheetId:t,sheetName:n}=e;const{0:a,1:o}=(0,r.useState)(!0),{0:l,1:c}=(0,r.useState)(null),{0:u,1:s}=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e="https://docs.google.com/spreadsheets/d/"+t+"/gviz/tq?tqx=out:csv&sheet="+n;try{const t=await fetch(e);if(!t.ok)throw new Error("HTTP error! Status: "+t.status);const n=await t.text(),r=n.trim().split("\n").map((e=>{var t;const n=null===(t=e.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g))||void 0===t?void 0:t.map((e=>e.replace(/(^"|"$)/g,"").trim()));return!n||n.length<2?null:[n[0],n[1]]})).filter(Boolean);s(r),o(!1)}catch(r){console.error("Error fetching spreadsheet data:",r),c(r.message),o(!1)}})()}),[t,n]),{loading:a,error:l,data:u}},l=e=>{let{spreadsheetId:t,sheetName:n}=e;const{0:a,1:o}=(0,r.useState)(!0),{0:l,1:c}=(0,r.useState)(null),{0:u,1:s}=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e="https://docs.google.com/spreadsheets/d/"+t+"/gviz/tq?tqx=out:csv&sheet="+n;try{const t=await fetch(e);if(!t.ok)throw new Error("HTTP error! Status: "+t.status);const n=(e=>{var t;const n=e.trim().split("\n"),r=null===(t=n.shift().match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g))||void 0===t?void 0:t.map((e=>e.replace(/(^"|"$)/g,"")));return r?n.map((e=>{var t;const n=null===(t=e.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g))||void 0===t?void 0:t.map((e=>e.replace(/(^"|"$)/g,""))),a={};return r.forEach(((e,t)=>{e&&(a[e]=(null==n?void 0:n[t])||null)})),a})):[]})(await t.text());s(n),o(!1)}catch(r){console.error("Error fetching spreadsheet data:",r),c(r.message),o(!1)}})()}),[t,n]),{loading:a,error:l,data:u}}},1784:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r={};n.r(r),n.d(r,{N5:function(){return l},b:function(){return c},V:function(){return u},$1:function(){return s},AS:function(){return i},tv:function(){return d},_R:function(){return m},jE:function(){return p},dl:function(){return h},DT:function(){return f}});var a=n(6540),o=n(1468),l="shopping-module--cart--3c207",c="shopping-module--closeButton--fdfa2",u="shopping-module--fullScreenImage--3e206",s="shopping-module--fullScreenModal--d5a88",i="shopping-module--item--7b82f",d="shopping-module--itemImage--78d3d",m="shopping-module--itemList--d6d43",p="shopping-module--modalContent--12e4c",h="shopping-module--priceEach--2c4e6",f="shopping-module--removeButton--04c91",E=n(9446);var g=e=>{let{quantity:t,stock:n,onDecrease:r,onIncrease:o}=e;return a.createElement("div",null,a.createElement("button",{onClick:e=>{e.stopPropagation(),r()}},"-"),a.createElement("span",null,"   ",t,"   "),a.createElement("button",{onClick:e=>{e.stopPropagation(),o()}},"+"))};var v=e=>{let{item:t,onClose:n,handleToggle:r,handleQuantityChange:o,isInCart:l,cart:i}=e;const d=i.find((e=>e.id===t.id)),{0:m,1:h}=(0,a.useState)(d?d.quantity:1);(0,a.useEffect)((()=>{d&&h(d.quantity)}),[d]);const E=e=>{const n=Math.min(Math.max(e,1),t.stock);h(n),o(t,n)};return(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.key&&n()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[n]),a.createElement("div",{className:s,onClick:n},a.createElement("div",{className:p,onClick:e=>e.stopPropagation()},a.createElement("button",{className:c,onClick:n},"× Close"),a.createElement("img",{src:t.image,alt:t.name,className:u}),a.createElement("h3",null,t.name),a.createElement("p",null,t.description),a.createElement("p",null,"Price: $",t.price),a.createElement("p",null,"Stock: ",t.stock),l(t.id)&&a.createElement("div",null,a.createElement("label",{htmlFor:"quantityInput"},"Quantity: "),a.createElement(g,{quantity:m,stock:t.stock,onDecrease:()=>E(m-1),onIncrease:()=>E(m+1)})),a.createElement("button",{onClick:()=>r(t),className:l(t.id)?f:"",disabled:t.stock<=0},l(t.id)?"Remove from Cart":"Add to Cart")))};var y=()=>{const e=(0,o.wA)(),t=(0,o.d4)(E.VH),n=(0,o.d4)((e=>e.onlineStore.storeItems)),{0:r,1:l}=(0,a.useState)(null),{0:c,1:u}=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=()=>{const e=document.querySelector("."+m);if(e){const t=getComputedStyle(e).getPropertyValue("grid-template-columns");u(1===t.split(" ").length)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const s=t=>{e((0,E.ZT)(t))},p=(t,n)=>{e((0,E._V)({id:t.id,quantity:n}))},h=e=>t.some((t=>t.id===e));return a.createElement("div",{className:m},n.map(((e,n)=>{const r=t.find((t=>t.id===e.id)),o=r?r.quantity:1;return a.createElement("div",{key:n,className:i,onClick:()=>(e=>{c||l(e)})(e)},a.createElement("img",{src:e.image,alt:e.name,className:d,width:100,height:100}),a.createElement("h3",null,e.name),a.createElement("p",null,e.description),a.createElement("p",null,"$",e.price),a.createElement("p",null,"# Remaining: ",e.stock),h(e.id)?a.createElement("button",{onClick:t=>{t.stopPropagation(),s(e)},className:f},"Remove from Cart"):a.createElement("button",{onClick:t=>{t.stopPropagation(),s(e)},disabled:e.stock<=0},"Add to Cart"),h(e.id)&&a.createElement(g,{quantity:o,stock:e.stock,onDecrease:()=>p(e,Math.max(1,o-1)),onIncrease:()=>p(e,Math.min(e.stock,o+1))}))})),!c&&r&&a.createElement(v,{item:r,onClose:()=>{l(null)},handleToggle:s,handleQuantityChange:p,cart:t,isInCart:h}))},b=n(2670);var k=e=>{let{cart:t,paypalRef:n,onApprove:r,createOrder:o}=e;const l=(0,a.useRef)(!1);(0,a.useEffect)((()=>{if(l.current)return void console.log("PayPal buttons already rendered. Skipping initialization.");const e=document.createElement("script");return e.src="https://www.paypal.com/sdk/js?client-id=AUxuYrgxn1s8KfOGOEv_xX5q5vaoBdh6E5mc4vvKYFHkSUmK3rucl_jhhyNUuov3NRDrJboQIEvpQu97&buyer-country=US&currency=USD&components=buttons&enable-funding=venmo,paylater,card",e.async=!0,e.onload=()=>{window.paypal&&n.current&&(l.current=!0,window.paypal.Buttons({style:{shape:"pill",layout:"vertical",color:"blue",label:"pay"},createOrder:o,onApprove:r}).render(n.current))},document.body.appendChild(e),()=>{l.current&&(console.log("Cleaning up PayPal buttons."),l.current=!1),document.body.contains(e)&&document.body.removeChild(e)}}),[t,n,o,r])};var w=e=>{let{cart:t}=e;const n=(0,o.wA)(),r=(0,a.useRef)(null),l="66.24.120.62",c="8080";return k({cart:t,paypalRef:r,createOrder:async(e,n)=>{try{t.reduce(((e,t)=>e+parseFloat(t.price)*t.quantity),0).toFixed(2);const e=await fetch("http://"+l+":"+c+"/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t})}),n=await e.json();if(console.log("createOrder Response:",n),n.id)return n.id;throw new Error("Failed to create order")}catch(r){throw console.error("createOrder Error:",r),new Error("Could not initiate PayPal Checkout")}},onApprove:async(e,t)=>{try{var r,a,o,u;const t=await fetch("http://"+l+":"+c+"/api/orders/"+e.orderID+"/capture",{method:"POST",headers:{"Content-Type":"application/json"}}),p=await t.json();if(console.log("onApprove Response:",p),null==p||null===(r=p.purchase_units)||void 0===r||null===(a=r[0])||void 0===a||null===(o=a.payments)||void 0===o||null===(u=o.captures)||void 0===u||!u[0])throw new Error("Capture failed");{var s,i,d,m;const e=null==p||null===(s=p.purchase_units)||void 0===s||null===(i=s[0])||void 0===i||null===(d=i.payments)||void 0===d||null===(m=d.captures)||void 0===m?void 0:m[0];console.log("Transaction completed:",e),n((0,E.sX)())}}catch(p){console.error("onApprove Error:",p),alert("Sorry, your transaction could not be processed.")}}}),a.createElement("div",{ref:r})};var x=()=>{const e=(0,o.wA)(),t=(0,o.d4)(E.VH),n=(t,n)=>{const r=Math.max(1,Math.min(n,t.stock));e((0,E._V)({id:t.id,quantity:r}))};return t&&0!==t.length?a.createElement("div",{className:l},a.createElement("br",null),a.createElement("table",{className:r.cartTable},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Item"),a.createElement("th",null,"Quantity"),a.createElement("th",null,"Total"),a.createElement("th",null,"Remove"))),a.createElement("tbody",null,t.map(((t,r)=>{const o=Number(t.price)||0,l=Number(t.quantity)||0,c=o*l;return a.createElement("tr",{key:r},a.createElement("td",{className:b.gX},t.name||"Unnamed Item",a.createElement("br",null),a.createElement("span",{className:h},"$",o.toFixed(2))),a.createElement("td",null,a.createElement(g,{quantity:l,stock:t.stock,onDecrease:()=>n(t,Math.max(1,l-1)),onIncrease:()=>n(t,Math.min(t.stock,l+1))})),a.createElement("td",null,"$",c.toFixed(2)),a.createElement("td",null,a.createElement("button",{onClick:()=>(t=>{e((0,E.ZT)(t))})(t),className:f},"Remove")))})))),a.createElement("h3",{className:r.grandTotal},"Grand Total: $",t.reduce(((e,t)=>e+(Number(t.price)||0)*(Number(t.quantity)||0)),0).toFixed(2)),a.createElement(w,{cart:t})):null},N=n(6474),C=n(6836),S=n(8272),_=n(2956);var q=()=>{const e=(0,o.wA)(),t=(0,o.d4)(E.dX),{loading:n,error:l,data:c}=(0,_.b)({spreadsheetId:S.spreadsheets.merchant.id,sheetName:"procucts"});(0,a.useEffect)((()=>{n||l||!c||(e((0,E.Bl)(c)),e((0,E.q_)()))}),[n,l,c,e]);return n?a.createElement("p",null,"Loading store items..."):l?a.createElement("p",null,"Error loading store items: ",l):a.createElement("div",null,a.createElement("div",{className:b.kL},a.createElement(C.A,null),a.createElement("button",{className:r.cartToggleButton,onClick:()=>{e((0,E.ss)())}},t?"Hide Cart":"View Cart"),t&&a.createElement(x,null)),a.createElement("div",{className:r.itemListContainer},a.createElement(y,null)),a.createElement("div",{className:b.kL},a.createElement(N.A,null)))};n(8272);var T=()=>a.createElement(q,null)},2670:function(e,t,n){n.d(t,{Ci:function(){return E},D0:function(){return T},JF:function(){return h},Lf:function(){return v},Lh:function(){return C},ML:function(){return k},N1:function(){return d},Vk:function(){return c},YL:function(){return q},Z1:function(){return g},Zp:function(){return w},aC:function(){return f},aL:function(){return N},gX:function(){return o},jj:function(){return a},kL:function(){return u},li:function(){return y},qd:function(){return p},qr:function(){return s},qu:function(){return l},s$:function(){return x},sj:function(){return b},tx:function(){return r},uO:function(){return _},uU:function(){return S},wL:function(){return i},wp:function(){return m}});var r="index-module--arrow_span--f48bd",a="index-module--blinking-cursor--e2be6",o="index-module--center--6c63b",l="index-module--center_text_block--9d594",c="index-module--chart_padding--43000",u="index-module--container--9e7f9",s="index-module--footer--8d7ca",i="index-module--green--21d20",d="index-module--header-container--ec9de",m="index-module--header-link--92332",p="index-module--header-title--f56cb",h="index-module--header_border--a723c",f="index-module--header_left--4a4e3",E="index-module--large_header--bc628",g="index-module--med_header--15f3f",v="index-module--p_left--cb0fc",y="index-module--pay--78de8",b="index-module--pay_free--38215",k="index-module--please_email--87a1a",w="index-module--purple--30baa",x="index-module--service_header--d0303",N="index-module--small_text--1233c",C="index-module--svg-button--23da3",S="index-module--title_picture--75853",_="index-module--title_picture_small--2b61b",q="index-module--tooltip--b5884",T="index-module--tooltiptext--e375b"},8272:function(e){e.exports=JSON.parse('{"spreadsheets":{"test":{"id":"1MkHXQRnYf5sQHoN24ns2_n4mBWHkqvvHZkKaAt-UOw4"},"sour_patch_bakery":{"id":"1HHIb_HfGZ3Ui8GBTTJ4DplXtpVW-9BwHSwmchVNSiIA"},"restaurant":{"id":"1OHQbtAt5JqttftgnGd3PVNaR44vbqjb3tcxluLHXIa8"},"merchant":{"tab":"products","id":"1Y825bTozBNpQFz3rZNCtHkACbSbOO9W48L3_01QuLQY"}},"deployRemotes":{"spb":"git@github.com:walkum-llc/sourpatchbakery.git","dev":"git@github.com:walkum-llc/walkum.github.io.git"}}')}}]);
//# sourceMappingURL=component---src-pages-shopping-js-a2cbf5d347e12ae64de7.js.map