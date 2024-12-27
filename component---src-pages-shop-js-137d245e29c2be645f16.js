"use strict";(self.webpackChunkwalkum=self.webpackChunkwalkum||[]).push([[883],{6474:function(e,t,n){var r=n(2670),a=n(6540),l=n(4810);t.A=()=>a.createElement("div",{className:r.qr},a.createElement("p",{style:{fontSize:"10px"}},"Made with ",a.createElement("span",null,"❤️")," by"," ",a.createElement(l.N_,{to:"https://walkum.xyz/sites"},"Walkum")))},6836:function(e,t,n){var r=n(2670),a=n(6540),l=n(4810),o=n(1468);t.A=e=>{let{prefix:t}=e;const n=(0,o.d4)((e=>e.account.accountInfo));return n?a.createElement("header",null,a.createElement("div",{className:r.N1},a.createElement("h1",{className:r.qd},t?t+" | ":"",a.createElement(l.N_,{to:"/",className:r.wp},n.name)))):null}},8839:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r={};n.r(r),n.d(r,{N5:function(){return o},lH:function(){return c},b:function(){return u},V:function(){return i},$1:function(){return d},AS:function(){return s},tv:function(){return m},_R:function(){return p},jE:function(){return E},dl:function(){return f},DT:function(){return h}});var a=n(6540),l=n(1468),o="shopping-module--cart--3c207",c="shopping-module--cartToggleButton--3db78",u="shopping-module--closeButton--fdfa2",i="shopping-module--fullScreenImage--3e206",d="shopping-module--fullScreenModal--d5a88",s="shopping-module--item--7b82f",m="shopping-module--itemImage--78d3d",p="shopping-module--itemList--d6d43",E="shopping-module--modalContent--12e4c",f="shopping-module--priceEach--2c4e6",h="shopping-module--removeButton--04c91",g=n(9446);var v=e=>{let{quantity:t,stock:n,onDecrease:r,onIncrease:l}=e;return a.createElement("div",null,a.createElement("button",{onClick:e=>{e.stopPropagation(),r()}},"-"),a.createElement("span",null,"   ",t,"   "),a.createElement("button",{onClick:e=>{e.stopPropagation(),l()}},"+"))};var y=e=>{let{item:t,onClose:n,handleToggle:r,handleQuantityChange:l,isInCart:o,cart:c}=e;const s=c.find((e=>e.id===t.id)),{0:m,1:p}=(0,a.useState)(s?s.quantity:1);(0,a.useEffect)((()=>{s&&p(s.quantity)}),[s]);const f=e=>{const n=Math.min(Math.max(e,1),t.stock);p(n),l(t,n)};return(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.key&&n()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[n]),a.createElement("div",{className:d,onClick:n},a.createElement("div",{className:E,onClick:e=>e.stopPropagation()},a.createElement("button",{className:u,onClick:n},"× Close"),a.createElement("img",{src:t.image,alt:t.name,className:i}),a.createElement("h3",null,t.name),a.createElement("p",null,t.description),a.createElement("p",null,"Price: $",t.price),a.createElement("p",null,"Stock: ",t.stock),o(t.id)&&a.createElement("div",null,a.createElement("label",{htmlFor:"quantityInput"},"Quantity: "),a.createElement(v,{quantity:m,stock:t.stock,onDecrease:()=>f(m-1),onIncrease:()=>f(m+1)})),a.createElement("button",{onClick:()=>r(t),className:o(t.id)?h:"",disabled:t.stock<=0},o(t.id)?"Remove from Cart":"Add to Cart")))};var b=()=>{const e=(0,l.wA)(),t=(0,l.d4)(g.VH),n=(0,l.d4)((e=>e.onlineStore.storeItems)),{0:r,1:o}=(0,a.useState)(null),{0:c,1:u}=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=()=>{const e=document.querySelector("."+p);if(e){const t=getComputedStyle(e).getPropertyValue("grid-template-columns");u(1===t.split(" ").length)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const i=t=>{e((0,g.ZT)(t))},d=(t,n)=>{e((0,g._V)({id:t.id,quantity:n}))},E=e=>t.some((t=>t.id===e));return a.createElement("div",{className:p},n.map(((e,n)=>{const r=t.find((t=>t.id===e.id)),l=r?r.quantity:1;return a.createElement("div",{key:n,className:s,onClick:()=>(e=>{c||o(e)})(e)},a.createElement("img",{src:e.image,alt:e.name,className:m,width:100,height:100}),a.createElement("h3",null,e.name),a.createElement("p",null,e.description),a.createElement("p",null,"$",e.price),a.createElement("p",null,"# Remaining: ",e.stock),E(e.id)?a.createElement("button",{onClick:t=>{t.stopPropagation(),i(e)},className:h},"Remove from Cart"):a.createElement("button",{onClick:t=>{t.stopPropagation(),i(e)},disabled:e.stock<=0},"Add to Cart"),E(e.id)&&a.createElement(v,{quantity:l,stock:e.stock,onDecrease:()=>d(e,Math.max(1,l-1)),onIncrease:()=>d(e,Math.min(e.stock,l+1))}))})),!c&&r&&a.createElement(y,{item:r,onClose:()=>{o(null)},handleToggle:i,handleQuantityChange:d,cart:t,isInCart:E}))},k=n(2670);var x=e=>{let{cart:t,paypalRef:n,onApprove:r,createOrder:l}=e;const o=(0,a.useRef)(!1);(0,a.useEffect)((()=>{if(console.log("\nEnvironment Variables:",JSON.stringify({PAYPAL_CLIENT_ID:"***",SERVER_IP:"66.24.120.62",PORT:"8080"},null,2)),o.current)return void console.log("PayPal buttons already rendered. Skipping initialization.");const e=document.createElement("script");return e.src="https://www.paypal.com/sdk/js?client-id="+encodeURIComponent("AWsx_NED09OJ8ryCafSdmEbYPcu-4cFLwQKr4b1KBbd9Q_dAcdJ8H5j5fDRT5gcLZW5phvCKVdTE3ShT")+"&currency=USD&components=buttons&enable-funding=paypal,venmo,card",e.async=!0,e.onload=()=>{window.paypal&&n.current&&(o.current=!0,window.paypal.Buttons({style:{shape:"pill",layout:"vertical",color:"blue",label:"pay"},createOrder:l,onApprove:r}).render(n.current))},document.body.appendChild(e),()=>{o.current&&(console.log("Cleaning up PayPal buttons."),o.current=!1),document.body.contains(e)&&document.body.removeChild(e)}}),[t,n,l,r])};var C=e=>{let{cart:t}=e;const n=(0,l.wA)(),r=(0,a.useRef)(null),o="66.24.120.62",c="8080";return x({cart:t,paypalRef:r,createOrder:async(e,n)=>{try{t.reduce(((e,t)=>e+parseFloat(t.price)*t.quantity),0).toFixed(2);const e=await fetch("http://"+o+":"+c+"/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t})}),n=await e.json();if(console.log("createOrder Response:",n),n.id)return n.id;throw new Error("Failed to create order")}catch(r){throw console.error("createOrder Error:",r),new Error("Could not initiate PayPal Checkout")}},onApprove:async(e,t)=>{try{var r,a,l,u;const t=await fetch("http://"+o+":"+c+"/api/orders/"+e.orderID+"/capture",{method:"POST",headers:{"Content-Type":"application/json"}}),p=await t.json();if(console.log("onApprove Response:",p),null==p||null===(r=p.purchase_units)||void 0===r||null===(a=r[0])||void 0===a||null===(l=a.payments)||void 0===l||null===(u=l.captures)||void 0===u||!u[0])throw new Error("Capture failed");{var i,d,s,m;const e=null==p||null===(i=p.purchase_units)||void 0===i||null===(d=i[0])||void 0===d||null===(s=d.payments)||void 0===s||null===(m=s.captures)||void 0===m?void 0:m[0];console.log("Transaction completed:",e),n((0,g.sX)())}}catch(p){console.error("onApprove Error:",p),alert("Sorry, your transaction could not be processed.")}}}),a.createElement("div",{ref:r})};var w=()=>{const e=(0,l.wA)(),t=(0,l.d4)(g.VH),n=(t,n)=>{const r=Math.max(1,Math.min(n,t.stock));e((0,g._V)({id:t.id,quantity:r}))};return t&&0!==t.length?a.createElement("div",{className:o},a.createElement("br",null),a.createElement("table",{className:r.cartTable},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Item"),a.createElement("th",null,"Quantity"),a.createElement("th",null,"Total"),a.createElement("th",null,"Remove"))),a.createElement("tbody",null,t.map(((t,r)=>{const l=Number(t.price)||0,o=Number(t.quantity)||0,c=l*o;return a.createElement("tr",{key:r},a.createElement("td",{className:k.gX},t.name||"Unnamed Item",a.createElement("br",null),a.createElement("span",{className:f},"$",l.toFixed(2))),a.createElement("td",null,a.createElement(v,{quantity:o,stock:t.stock,onDecrease:()=>n(t,Math.max(1,o-1)),onIncrease:()=>n(t,Math.min(t.stock,o+1))})),a.createElement("td",null,"$",c.toFixed(2)),a.createElement("td",null,a.createElement("button",{onClick:()=>(t=>{e((0,g.ZT)(t))})(t),className:h},"Remove")))})))),a.createElement("h3",{className:r.grandTotal},"Grand Total: $",t.reduce(((e,t)=>e+(Number(t.price)||0)*(Number(t.quantity)||0)),0).toFixed(2)),a.createElement(C,{cart:t})):null},N=n(6474),_=n(6836),S=n(8272),q=n(2956);var A=()=>{const e=(0,l.wA)(),t=(0,l.d4)(g.dX),{loading:n,error:o,data:u}=(0,q.b)({spreadsheetId:S.spreadsheets.account.id,sheetName:"products"});(0,a.useEffect)((()=>{n||o||!u||(e((0,g.Bl)(u)),e((0,g.q_)()))}),[n,o,u,e]);return n?a.createElement("p",null,"Loading store items..."):o?a.createElement("p",null,"Error loading store items: ",o):a.createElement("div",null,a.createElement("div",{className:k.kL},a.createElement(_.A,{prefix:"storefront"}),a.createElement("button",{className:c,onClick:()=>{e((0,g.ss)())}},t?a.createElement(a.Fragment,null,"Hide ",a.createElement("span",{role:"img","aria-label":"cart"},"🛒")):a.createElement(a.Fragment,null,"Your Cart ",a.createElement("span",{role:"img","aria-label":"cart"},"🛒"))),t&&a.createElement(w,null)),a.createElement("div",{className:r.itemListContainer},a.createElement(b,null)),a.createElement("div",{className:k.kL},a.createElement(N.A,null)))};n(8272);var L=()=>a.createElement(A,null)},2670:function(e,t,n){n.d(t,{Ci:function(){return h},D0:function(){return A},JF:function(){return E},Lf:function(){return v},Lh:function(){return N},ML:function(){return k},N1:function(){return s},Vk:function(){return c},YL:function(){return q},Z1:function(){return g},Zp:function(){return x},aC:function(){return f},aL:function(){return w},gX:function(){return l},jj:function(){return a},kL:function(){return u},li:function(){return y},qd:function(){return p},qr:function(){return i},qu:function(){return o},s$:function(){return C},sj:function(){return b},tx:function(){return r},uO:function(){return S},uU:function(){return _},wL:function(){return d},wp:function(){return m}});var r="index-module--arrow_span--f48bd",a="index-module--blinking-cursor--e2be6",l="index-module--center--6c63b",o="index-module--center_text_block--9d594",c="index-module--chart_padding--43000",u="index-module--container--9e7f9",i="index-module--footer--8d7ca",d="index-module--green--21d20",s="index-module--header-container--ec9de",m="index-module--header-link--92332",p="index-module--header-title--f56cb",E="index-module--header_border--a723c",f="index-module--header_left--4a4e3",h="index-module--large_header--bc628",g="index-module--med_header--15f3f",v="index-module--p_left--cb0fc",y="index-module--pay--78de8",b="index-module--pay_free--38215",k="index-module--please_email--87a1a",x="index-module--purple--30baa",C="index-module--service_header--d0303",w="index-module--small_text--1233c",N="index-module--svg-button--23da3",_="index-module--title_picture--75853",S="index-module--title_picture_small--2b61b",q="index-module--tooltip--b5884",A="index-module--tooltiptext--e375b"}}]);
//# sourceMappingURL=component---src-pages-shop-js-137d245e29c2be645f16.js.map