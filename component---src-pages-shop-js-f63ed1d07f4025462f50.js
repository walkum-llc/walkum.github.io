"use strict";(self.webpackChunkwalkum=self.webpackChunkwalkum||[]).push([[883],{6474:function(e,t,n){var r=n(2670),a=n(6540),l=n(4810);t.A=()=>a.createElement("div",{className:r.qr},a.createElement("p",{style:{fontSize:"10px"}},"Made with ",a.createElement("span",null,"❤️")," by"," ",a.createElement(l.N_,{to:"https://walkum.xyz/sites"},"Walkum")))},6836:function(e,t,n){var r=n(2670),a=n(6540),l=n(4810),o=n(1468);t.A=e=>{let{prefix:t}=e;const n=(0,o.d4)((e=>e.account.accountInfo));return n?a.createElement("header",null,a.createElement("div",{className:r.N1},a.createElement("h1",{className:r.qd},t?t+" | ":"",a.createElement(l.N_,{to:"/",className:r.wp},n.name)))):null}},4967:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r={};n.r(r),n.d(r,{N5:function(){return o},Q:function(){return c},lH:function(){return i},WF:function(){return u},b:function(){return s},L6:function(){return d},V:function(){return m},$1:function(){return p},AS:function(){return E},tv:function(){return f},_R:function(){return g},jE:function(){return h},dl:function(){return v},DT:function(){return y}});var a=n(6540),l=n(1468),o="shopping-module--cart--3c207",c="shopping-module--cartIcon--c4b84",i="shopping-module--cartToggleButton--3db78",u="shopping-module--cartToggleContainer--3c934",s="shopping-module--closeButton--fdfa2",d="shopping-module--emptyCartMessage--bcb9c",m="shopping-module--fullScreenImage--3e206",p="shopping-module--fullScreenModal--d5a88",E="shopping-module--item--7b82f",f="shopping-module--itemImage--78d3d",g="shopping-module--itemList--d6d43",h="shopping-module--modalContent--12e4c",v="shopping-module--priceEach--2c4e6",y="shopping-module--removeButton--04c91",b=n(9446);var k=e=>{let{quantity:t,stock:n,onDecrease:r,onIncrease:l}=e;return a.createElement("div",null,a.createElement("button",{onClick:e=>{e.stopPropagation(),r()}},"-"),a.createElement("span",null,"   ",t,"   "),a.createElement("button",{onClick:e=>{e.stopPropagation(),l()}},"+"))},N="imageViewer-module--navigationButton--2377a";var C=e=>{let{images:t}=e;const{0:n,1:r}=(0,a.useState)(0);return a.createElement("div",{className:"imageViewer-module--imageViewerContainer--a44e5"},a.createElement("button",{onClick:()=>{r((e=>(e-1+t.length)%t.length))},className:N},"< Prev"),a.createElement("img",{src:t[n],alt:"Image "+(n+1),className:"imageViewer-module--imageViewerImage--2beb9"}),a.createElement("button",{onClick:()=>{r((e=>(e+1)%t.length))},className:N},"Next >"))};var w=e=>{let{item:t,onClose:n,handleToggle:r,handleQuantityChange:l,isInCart:o,cart:c}=e;const i=c.find((e=>e.id===t.id)),{0:u,1:d}=(0,a.useState)(i?i.quantity:1);(0,a.useEffect)((()=>{console.log("\nitem\n\n"+JSON.stringify(t,null,2)+"\n"),i&&d(i.quantity)}),[i]);const E=e=>{const n=Math.min(Math.max(e,1),t.stock);d(n),l(t,n)};return(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.key&&n()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[n]),a.createElement("div",{className:p,onClick:n},a.createElement("div",{className:h,onClick:e=>e.stopPropagation()},a.createElement("button",{className:s,onClick:n},"× Close"),t.images&&t.images.length>1?a.createElement(C,{images:t.images}):a.createElement("img",{src:t.image,alt:t.name,className:m}),a.createElement("h3",null,t.name),a.createElement("p",null,t.description),a.createElement("p",null,"Price: $",t.price),a.createElement("p",null,"Stock: ",t.stock),o(t.id)&&a.createElement("div",null,a.createElement("label",{htmlFor:"quantityInput"},"Quantity: "),a.createElement(k,{quantity:u,stock:t.stock,onDecrease:()=>E(u-1),onIncrease:()=>E(u+1)})),a.createElement("button",{onClick:()=>r(t),className:o(t.id)?y:"",disabled:t.stock<=0},o(t.id)?"Remove from Cart":"Add to Cart")))};var x=()=>{const e=(0,l.wA)(),t=(0,l.d4)(b.VH),n=(0,l.d4)((e=>e.onlineStore.storeItems)),{0:r,1:o}=(0,a.useState)(null),{0:c,1:i}=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=()=>{const e=document.querySelector("."+g);if(e){const t=getComputedStyle(e).getPropertyValue("grid-template-columns");i(1===t.split(" ").length)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const u=t=>{e((0,b.ZT)(t))},s=(t,n)=>{e((0,b._V)({id:t.id,quantity:n}))},d=e=>t.some((t=>t.id===e));return a.createElement("div",{className:g},n.map(((e,n)=>{const r=t.find((t=>t.id===e.id)),l=r?r.quantity:1;return a.createElement("div",{key:n,className:E,onClick:()=>(e=>{c||o(e)})(e)},a.createElement("img",{src:e.image,alt:e.name,className:f}),a.createElement("h3",null,e.name),a.createElement("p",null,e.description),a.createElement("p",null,"$",e.price),a.createElement("p",null,"# Remaining: ",e.stock),d(e.id)?a.createElement("button",{onClick:t=>{t.stopPropagation(),u(e)},className:y},"Remove from Cart"):a.createElement("button",{onClick:t=>{t.stopPropagation(),u(e)},disabled:e.stock<=0},"Add to Cart"),d(e.id)&&a.createElement(k,{quantity:l,stock:e.stock,onDecrease:()=>s(e,Math.max(1,l-1)),onIncrease:()=>s(e,Math.min(e.stock,l+1))}))})),!c&&r&&a.createElement(w,{item:r,onClose:()=>{o(null)},handleToggle:u,handleQuantityChange:s,cart:t,isInCart:d}))},_=n(2670);var I=e=>{let{cart:t,paypalRef:n,onApprove:r,createOrder:l}=e;const o=(0,a.useRef)(!1);(0,a.useEffect)((()=>{if(console.log("\nEnvironment Variables:",JSON.stringify({PAYPAL_CLIENT_ID:"***",SERVER_IP:"walkum.duckdns.org",PORT:"8080"},null,2)),o.current)return void console.log("PayPal buttons already rendered. Skipping initialization.");const e=document.createElement("script");return e.src="https://www.paypal.com/sdk/js?client-id="+encodeURIComponent("AWsx_NED09OJ8ryCafSdmEbYPcu-4cFLwQKr4b1KBbd9Q_dAcdJ8H5j5fDRT5gcLZW5phvCKVdTE3ShT")+"&currency=USD&components=buttons&enable-funding=paypal,venmo,card",e.async=!0,e.onload=()=>{window.paypal&&n.current&&(o.current=!0,window.paypal.Buttons({style:{shape:"pill",layout:"vertical",color:"blue",label:"pay"},createOrder:l,onApprove:r}).render(n.current))},document.body.appendChild(e),()=>{o.current&&(console.log("Cleaning up PayPal buttons."),o.current=!1),document.body.contains(e)&&document.body.removeChild(e)}}),[t,n,l,r])};var S=e=>{let{cart:t}=e;const n=(0,l.wA)(),r=(0,a.useRef)(null),o="walkum.duckdns.org",c="8080",i=(0,l.d4)((e=>e.account.accountInfo.email));return I({cart:t,paypalRef:r,createOrder:async(e,n)=>{try{t.reduce(((e,t)=>e+parseFloat(t.price)*t.quantity),0).toFixed(2);const e=await fetch("https://"+o+":"+c+"/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t})}),n=await e.json();if(console.log("createOrder Response:",n),n.id)return n.id;throw new Error("Failed to create order")}catch(r){throw console.error("createOrder Error:",r),new Error("Could not initiate PayPal Checkout")}},onApprove:async(e,r)=>{try{var a,l,u,s;const r=await fetch("https://"+o+":"+c+"/api/orders/"+e.orderID+"/capture",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t,merchantEmail:i})}),f=await r.json();if(console.log("onApprove Response:",f),null==f||null===(a=f.purchase_units)||void 0===a||null===(l=a[0])||void 0===l||null===(u=l.payments)||void 0===u||null===(s=u.captures)||void 0===s||!s[0])throw new Error("Capture failed");{var d,m,p,E;const e=null==f||null===(d=f.purchase_units)||void 0===d||null===(m=d[0])||void 0===m||null===(p=m.payments)||void 0===p||null===(E=p.captures)||void 0===E?void 0:E[0];console.log("Transaction completed:",e),n((0,b.sX)())}}catch(f){console.error("onApprove Error:",f),alert("Sorry, your transaction could not be processed.")}}}),a.createElement("div",{ref:r})};var L=()=>{const e=(0,l.wA)(),t=(0,l.d4)(b.VH),n=(t,n)=>{const r=Math.max(1,Math.min(n,t.stock));e((0,b._V)({id:t.id,quantity:r}))};return t&&0!==t.length?a.createElement("div",{className:o},a.createElement("br",null),a.createElement("table",{className:r.cartTable},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Item"),a.createElement("th",null,"Quantity"),a.createElement("th",null,"Total"),a.createElement("th",null,"Remove"))),a.createElement("tbody",null,t.map(((t,r)=>{const l=Number(t.price)||0,o=Number(t.quantity)||0,c=l*o;return a.createElement("tr",{key:r},a.createElement("td",{className:_.gX},t.name||"Unnamed Item",a.createElement("br",null),a.createElement("span",{className:v},"$",l.toFixed(2))),a.createElement("td",null,a.createElement(k,{quantity:o,stock:t.stock,onDecrease:()=>n(t,Math.max(1,o-1)),onIncrease:()=>n(t,Math.min(t.stock,o+1))})),a.createElement("td",null,"$",c.toFixed(2)),a.createElement("td",null,a.createElement("button",{onClick:()=>(t=>{e((0,b.ZT)(t))})(t),className:y},"Remove")))})))),a.createElement("h3",{className:r.grandTotal},"Grand Total: $",t.reduce(((e,t)=>e+(Number(t.price)||0)*(Number(t.quantity)||0)),0).toFixed(2)),a.createElement(S,{cart:t})):a.createElement("div",{className:d},a.createElement("p",null,"Your cart is empty"))},P=n(6474),T=n(6836),q=n(8272),A=n(2956);var R=()=>{const e=(0,l.wA)(),t=(0,l.d4)(b.dX),n=(0,l.d4)((e=>e.account.accountInfo.store)),{loading:o,error:s,data:d}=(0,A.b)({spreadsheetId:q.spreadsheets.account.id,sheetName:"products"});(0,a.useEffect)((()=>{o||s||!d||(e((0,b.Bl)(d)),e((0,b.q_)()))}),[o,s,d,e]);return o?a.createElement("p",null,"Loading store items..."):s?a.createElement("p",null,"Error loading store items: ",s):a.createElement("div",null,a.createElement("div",{className:_.kL},a.createElement(T.A,{prefix:n}),a.createElement("button",{className:i,onClick:()=>{e((0,b.ss)())}},t?a.createElement("div",{className:u},a.createElement("span",null,"Hide"),a.createElement("span",{className:c,role:"img","aria-label":"cart"},"🛒")):a.createElement("div",{className:u},a.createElement("span",null,"Your Cart"),a.createElement("span",{className:c,role:"img","aria-label":"cart"},"🛒"))),t&&a.createElement(L,null)),a.createElement("div",{className:r.itemListContainer},a.createElement(x,null)),a.createElement("div",{className:_.kL},a.createElement(P.A,null)))};n(8272);var V=()=>a.createElement(R,null)},2670:function(e,t,n){n.d(t,{Ci:function(){return g},D0:function(){return L},JF:function(){return E},Lf:function(){return v},Lh:function(){return x},ML:function(){return k},N1:function(){return d},Vk:function(){return c},YL:function(){return S},Z1:function(){return h},Zp:function(){return N},aC:function(){return f},aL:function(){return w},gX:function(){return l},jj:function(){return a},kL:function(){return i},li:function(){return y},qd:function(){return p},qr:function(){return u},qu:function(){return o},s$:function(){return C},sj:function(){return b},tx:function(){return r},uO:function(){return I},uU:function(){return _},wL:function(){return s},wp:function(){return m}});var r="index-module--arrow_span--f48bd",a="index-module--blinking-cursor--e2be6",l="index-module--center--6c63b",o="index-module--center_text_block--9d594",c="index-module--chart_padding--43000",i="index-module--container--9e7f9",u="index-module--footer--8d7ca",s="index-module--green--21d20",d="index-module--header-container--ec9de",m="index-module--header-link--92332",p="index-module--header-title--f56cb",E="index-module--header_border--a723c",f="index-module--header_left--4a4e3",g="index-module--large_header--bc628",h="index-module--med_header--15f3f",v="index-module--p_left--cb0fc",y="index-module--pay--78de8",b="index-module--pay_free--38215",k="index-module--please_email--87a1a",N="index-module--purple--30baa",C="index-module--service_header--d0303",w="index-module--small_text--1233c",x="index-module--svg-button--23da3",_="index-module--title_picture--75853",I="index-module--title_picture_small--2b61b",S="index-module--tooltip--b5884",L="index-module--tooltiptext--e375b"}}]);
//# sourceMappingURL=component---src-pages-shop-js-f63ed1d07f4025462f50.js.map