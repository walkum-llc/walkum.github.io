"use strict";(self.webpackChunkwalkum=self.webpackChunkwalkum||[]).push([[883],{2604:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(6540),r=n(1468),l=n(4810),o="headerLink-module--svgButton--d9016";var c=e=>{let{label:t,linkTo:n=".",cursorColor:c="#FFD700"}=e;const{0:s,1:i}=(0,a.useState)(m()),u=(0,r.d4)((e=>e.account.accountInfo));function m(){return 2e3*Math.random()+1e3}return(0,a.useEffect)((()=>{const e=setInterval((()=>{i(m())}),5e3);return()=>clearInterval(e)}),[]),u?a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.createElement("div",{className:"headerLink-module--phraseContainer--9d1b4"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 300",width:"100%",height:"auto",className:"headerLink-module--responsiveSvg--e821b"},a.createElement("g",{transform:"translate(600, 150)",textAnchor:"middle"},a.createElement(l.N_,{to:"/"},a.createElement("text",{x:"-300",fill:"white",fontFamily:"Courier",fontSize:"90px",className:o},u.name)),a.createElement("text",{x:"0",fill:c,fontFamily:"Courier",fontSize:"90px",fontWeight:"bold",className:"headerLink-module--blinkingCursor--59495",style:{animationDuration:s+"ms",transform:"scale(5, 5)"}},"|"),a.createElement(l.N_,{to:""+n},a.createElement("text",{x:"300",fill:"white",fontFamily:"Courier",fontSize:"90px",className:o},t)))))):null}},742:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a={};n.r(a),n.d(a,{N5:function(){return o},Q:function(){return c},lK:function(){return s},lH:function(){return i},WF:function(){return u},b:function(){return m},L6:function(){return d},V:function(){return p},$1:function(){return E},$3:function(){return y},AS:function(){return f},tv:function(){return h},_R:function(){return v},jE:function(){return g},dl:function(){return k},DT:function(){return b}});var r=n(6540),l=n(1468),o="styles-module--cart--d7a47",c="styles-module--cartIcon--8a034",s="styles-module--cartTable--d19e3",i="styles-module--cartToggleButton--c057a",u="styles-module--cartToggleContainer--edce5",m="styles-module--closeButton--5a3f6",d="styles-module--emptyCartMessage--fe4f3",p="styles-module--fullScreenImage--10982",E="styles-module--fullScreenModal--07a3c",y="styles-module--grandTotal--7e4b2",f="styles-module--item--2b47c",h="styles-module--itemImage--d83f7",v="styles-module--itemList--6f49f",g="styles-module--modalContent--0a097",k="styles-module--priceEach--04a90",b="styles-module--removeButton--45abe",C=n(9446);var w=e=>{let{quantity:t,stock:n,onDecrease:a,onIncrease:l}=e;return r.createElement("div",null,r.createElement("button",{onClick:e=>{e.stopPropagation(),a()}},"-"),r.createElement("span",null,"   ",t,"   "),r.createElement("button",{onClick:e=>{e.stopPropagation(),l()}},"+"))};var N=e=>{let{item:t,onClose:n,handleToggle:a,handleQuantityChange:l,isInCart:o,cart:c}=e;const s=c.find((e=>e.id===t.id)),{0:i,1:u}=(0,r.useState)(s?s.quantity:1);(0,r.useEffect)((()=>{s&&u(s.quantity)}),[s]);const d=e=>{const n=Math.min(Math.max(e,1),t.stock);u(n),l(t,n)};return(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&n()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[n]),r.createElement("div",{className:E,onClick:n},r.createElement("div",{className:g,onClick:e=>e.stopPropagation()},r.createElement("button",{className:m,onClick:n},"× Close"),r.createElement("img",{src:t.image,alt:t.name,className:p}),r.createElement("h3",null,t.name),r.createElement("p",null,t.description),r.createElement("p",null,"Price: $",t.price),r.createElement("p",null,"Stock: ",t.stock),o(t.id)&&r.createElement("div",null,r.createElement("label",{htmlFor:"quantityInput"},"Quantity: "),r.createElement(w,{quantity:i,stock:t.stock,onDecrease:()=>d(i-1),onIncrease:()=>d(i+1)})),r.createElement("button",{onClick:()=>a(t),className:o(t.id)?b:"",disabled:t.stock<=0},o(t.id)?"Remove from Cart":"Add to Cart")))};var S=()=>{const e=(0,l.wA)(),t=(0,l.d4)(C.VH),n=(0,l.d4)((e=>e.onlineStore.storeItems)),{0:a,1:o}=(0,r.useState)(null),{0:c,1:s}=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=()=>{const e=document.querySelector("."+v);if(e){const t=getComputedStyle(e).getPropertyValue("grid-template-columns");s(1===t.split(" ").length)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const i=t=>{e((0,C.ZT)(t))},u=(t,n)=>{e((0,C._V)({id:t.id,quantity:n}))},m=e=>t.some((t=>t.id===e));return r.createElement("div",{className:v},n.map(((e,n)=>{const a=t.find((t=>t.id===e.id)),l=a?a.quantity:1;return r.createElement("div",{key:n,className:f,onClick:()=>(e=>{c||o(e)})(e)},r.createElement("img",{src:e.image,alt:e.name,className:h}),r.createElement("h3",null,e.name),r.createElement("p",null,e.description),r.createElement("p",null,"$",e.price),r.createElement("p",null,"# Remaining: ",e.stock),m(e.id)?r.createElement("button",{onClick:t=>{t.stopPropagation(),i(e)},className:b},"Remove from Cart"):r.createElement("button",{onClick:t=>{t.stopPropagation(),i(e)},disabled:e.stock<=0},"Add to Cart"),m(e.id)&&r.createElement(w,{quantity:l,stock:e.stock,onDecrease:()=>u(e,Math.max(1,l-1)),onIncrease:()=>u(e,Math.min(e.stock,l+1))}))})),!c&&a&&r.createElement(N,{item:a,onClose:()=>{o(null)},handleToggle:i,handleQuantityChange:u,cart:t,isInCart:m}))},I=n(2670);var x=e=>{let{cart:t,paypalRef:n,onApprove:a,createOrder:l}=e;const o=(0,r.useRef)(!1);(0,r.useEffect)((()=>{if(console.log("\nEnvironment Variables:",JSON.stringify({PAYPAL_CLIENT_ID:"***",SERVER_IP:"walkum.duckdns.org",PORT:"8080"},null,2)),o.current)return void console.log("PayPal buttons already rendered. Skipping initialization.");const e=document.createElement("script"),t=/Mobi|Android/i.test(navigator.userAgent);return e.src="https://www.paypal.com/sdk/js?client-id="+encodeURIComponent("AWsx_NED09OJ8ryCafSdmEbYPcu-4cFLwQKr4b1KBbd9Q_dAcdJ8H5j5fDRT5gcLZW5phvCKVdTE3ShT")+"&currency=USD&components=buttons&enable-funding=paypal,venmo,card&commit=true&intent=capture"+(t?"&integration-date=2021-02-01":""),e.async=!0,e.onload=()=>{window.paypal&&n.current?(o.current=!0,window.paypal.Buttons({style:{shape:"pill",layout:"vertical",color:"blue",label:"pay"},createOrder:l,onApprove:a}).render(n.current)):console.error("PayPal SDK not loaded properly.")},document.body.appendChild(e),()=>{o.current&&(console.log("Cleaning up PayPal buttons."),o.current=!1),document.body.contains(e)&&document.body.removeChild(e)}}),[t,n,l,a])};var A=e=>{let{cart:t}=e;const n=(0,l.wA)(),a=(0,r.useRef)(null),o="walkum.duckdns.org",c="8080",s=(0,l.d4)((e=>e.account.accountInfo.email));return x({cart:t,paypalRef:a,createOrder:async(e,n)=>{try{t.reduce(((e,t)=>e+parseFloat(t.price)*t.quantity),0).toFixed(2);const e=await fetch("https://"+o+":"+c+"/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t})}),n=await e.json();if(console.log("createOrder Response:",n),n.id)return n.id;throw new Error("Failed to create order")}catch(a){throw console.error("createOrder Error:",a),new Error("Could not initiate PayPal Checkout")}},onApprove:async(e,a)=>{try{var r,l,i,u;const a=await fetch("https://"+o+":"+c+"/api/orders/"+e.orderID+"/capture",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t,merchantEmail:s})}),y=await a.json();if(console.log("onApprove Response:",y),null==y||null===(r=y.purchase_units)||void 0===r||null===(l=r[0])||void 0===l||null===(i=l.payments)||void 0===i||null===(u=i.captures)||void 0===u||!u[0])throw new Error("Capture failed");{var m,d,p,E;const e=null==y||null===(m=y.purchase_units)||void 0===m||null===(d=m[0])||void 0===d||null===(p=d.payments)||void 0===p||null===(E=p.captures)||void 0===E?void 0:E[0];console.log("Transaction completed:",e),n((0,C.sX)())}}catch(y){console.error("onApprove Error:",y),alert("Sorry, your transaction could not be processed.")}}}),r.createElement("div",{ref:a})};var P=()=>{const e=(0,l.wA)(),t=(0,l.d4)(C.VH),n=(t,n)=>{const a=Math.max(1,Math.min(n,t.stock));e((0,C._V)({id:t.id,quantity:a}))};return t&&0!==t.length?r.createElement("div",{className:o},r.createElement("br",null),r.createElement("table",{className:s},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Item"),r.createElement("th",null,"Quantity"),r.createElement("th",null,"Total"),r.createElement("th",null,"Remove"))),r.createElement("tbody",null,t.map(((t,a)=>{const l=Number(t.price)||0,o=Number(t.quantity)||0,c=l*o;return r.createElement("tr",{key:a},r.createElement("td",{className:I.gX},t.name||"Unnamed Item",r.createElement("br",null),r.createElement("span",{className:k},"$",l.toFixed(2))),r.createElement("td",null,r.createElement(w,{quantity:o,stock:t.stock,onDecrease:()=>n(t,Math.max(1,o-1)),onIncrease:()=>n(t,Math.min(t.stock,o+1))})),r.createElement("td",null,"$",c.toFixed(2)),r.createElement("td",null,r.createElement("button",{onClick:()=>(t=>{e((0,C.ZT)(t))})(t),className:b},"Remove")))})))),r.createElement("h3",{className:y},"Grand Total: $",t.reduce(((e,t)=>e+(Number(t.price)||0)*(Number(t.quantity)||0)),0).toFixed(2)),r.createElement(A,{cart:t})):r.createElement("div",{className:d},r.createElement("p",null,"Your cart is empty"))},T=n(6474),L=n(2604),R=n(8272),F=n(2956);var q=()=>{const e=(0,l.wA)(),t=(0,l.d4)(C.dX),{loading:n,error:o,data:s}=((0,l.d4)((e=>e.account.accountInfo.store)),(0,F.b)({spreadsheetId:R.spreadsheets.account.id,sheetName:"products"}));(0,r.useEffect)((()=>{n||o||!s||(e((0,C.Bl)(s)),e((0,C.q_)()))}),[n,o,s,e]);return n?r.createElement("p",null,"Loading store items..."):o?r.createElement("p",null,"Error loading store items: ",o):r.createElement("div",null,r.createElement("div",{className:I.kL},r.createElement(L.A,{label:"merch",cursorColor:"#39FF14"}),r.createElement("button",{className:i,onClick:()=>{e((0,C.ss)())}},t?r.createElement("div",{className:u},r.createElement("span",null,"Hide"),r.createElement("span",{className:c,role:"img","aria-label":"cart"},"🛒")):r.createElement("div",{className:u},r.createElement("span",null,"Your Cart"),r.createElement("span",{className:c,role:"img","aria-label":"cart"},"🛒"))),t&&r.createElement(P,null)),r.createElement("div",{className:a.itemListContainer},r.createElement(S,null)),r.createElement("div",{className:I.kL},r.createElement(T.A,null)))},D=n(2471);n(8272);var M=()=>r.createElement("div",null,r.createElement(D.A,{title:"Walkum | Merchant",description:"Walkum merchandise. Quality custom products. walkum, records, shop, merchant, homes, cutting board, guitar, bass",keywords:"walkum, records, shop, merchant, homes, cutting board, guitar, bass",url:"https://walkum.xyz/shop"}),r.createElement("main",null,r.createElement(q,null)))}}]);
//# sourceMappingURL=component---src-pages-shop-js-d93262af104b6249f346.js.map