"use strict";(self.webpackChunkwalkum=self.webpackChunkwalkum||[]).push([[56],{2604:function(e,t,n){n.d(t,{A:function(){return c}});var r=n(6540),a=n(1468),l=n(4810),o="headerLink-module--svgButton--d9016";var c=e=>{let{leftWord:t="walkum",leftLinkTo:n="/",rightWord:c,rightLinkTo:s=".",cursorColor:i="#FFD700"}=e;const{0:u,1:m}=(0,r.useState)(p()),d=(0,a.d4)((e=>e.account.accountInfo));function p(){return 2e3*Math.random()+1e3}return(0,r.useEffect)((()=>{const e=setInterval((()=>{m(p())}),5e3);return()=>clearInterval(e)}),[]),d?r.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.createElement("div",{className:"headerLink-module--phraseContainer--9d1b4"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 300",width:"100%",height:"auto",className:"headerLink-module--responsiveSvg--e821b"},r.createElement("g",{transform:"translate(600, 150)",textAnchor:"middle"},r.createElement(l.N_,{to:n},r.createElement("text",{x:"-300",fill:"white",fontFamily:"Courier",fontSize:"90px",className:o},t)),r.createElement("text",{x:"0",fill:i,fontFamily:"Courier",fontSize:"90px",fontWeight:"bold",className:"headerLink-module--blinkingCursor--59495",style:{animationDuration:u+"ms",transform:"scale(5, 5)"}},"|"),r.createElement(l.N_,{to:s},r.createElement("text",{x:"300",fill:"white",fontFamily:"Courier",fontSize:"90px",className:o},c)))))):null}},9846:function(e,t,n){n.d(t,{A:function(){return q}});var r={};n.r(r),n.d(r,{N5:function(){return s},Q:function(){return i},lK:function(){return u},lH:function(){return m},WF:function(){return d},L1:function(){return p},Km:function(){return y},yH:function(){return E},L6:function(){return h},$3:function(){return f},AS:function(){return v},tv:function(){return g},_R:function(){return k},dl:function(){return b},uG:function(){return C},DT:function(){return N},bV:function(){return w},Kk:function(){return S}});var a=n(6540),l=n(1468),o=n(9496);var c=e=>{let{quantity:t,stock:n,onDecrease:r,onIncrease:l}=e;return a.createElement("div",null,a.createElement("button",{onClick:e=>{e.stopPropagation(),r()}},"-"),a.createElement("span",null,"   ",t,"   "),a.createElement("button",{onClick:e=>{e.stopPropagation(),l()}},"+"))},s="styles-module--cart--d7a47",i="styles-module--cartIcon--8a034",u="styles-module--cartTable--d19e3",m="styles-module--cartToggleButton--c057a",d="styles-module--cartToggleContainer--edce5",p="styles-module--category--8436a",y="styles-module--categoryHeader--16eb4",E="styles-module--del--281ce",h="styles-module--emptyCartMessage--fe4f3",f="styles-module--grandTotal--7e4b2",v="styles-module--item--2b47c",g="styles-module--itemImage--d83f7",k="styles-module--itemList--6f49f",b="styles-module--priceEach--04a90",C="styles-module--quant--b5a04",N="styles-module--removeButton--45abe",w="styles-module--sectionHeader--6846b",S="styles-module--tot--d3a80";var I=e=>{let{item:t,cart:n,dispatch:r,handleItemClick:s}=e;const i=(0,l.d4)(o.Mv),u=e=>n.some((t=>t.id===e)),m=u(t.id)?n.find((e=>e.id===t.id)).quantity:1,d=()=>{r((0,o.ZT)(t))},p=e=>{r((0,o._V)({id:t.id,quantity:e}))};return a.createElement("div",{className:v,onClick:()=>s(t)},a.createElement("img",{src:t.image,alt:t.name,className:g}),a.createElement("h3",null,t.name),a.createElement("p",null,t.description),a.createElement("p",null,"$",t.price),i?a.createElement("div",null,a.createElement("p",null,"# Remaining: ",t.stock),u(t.id)?a.createElement("button",{onClick:d,className:N},"Remove from Cart"):a.createElement("button",{onClick:d,disabled:t.stock<=0},"Add to Cart"),u(t.id)&&a.createElement(c,{quantity:m,stock:t.stock,onDecrease:()=>p(Math.max(1,m-1)),onIncrease:()=>p(Math.min(t.stock,m+1))})):null)};var A=e=>{let{section:t,items:n,category:l,openSection:o,setOpenSection:c,handleItemClick:s,cart:i,dispatch:u}=e;return a.createElement("div",{className:r.section},t&&a.createElement("h3",{id:"section-"+t,className:w,onClick:()=>{const e=(null==o?void 0:o.category)===l&&(null==o?void 0:o.section)===t?null:{category:l,section:t};c(e),e&&setTimeout((()=>{const e=document.getElementById("section-"+t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}),0)}},t),(null==o?void 0:o.category)===l&&(null==o?void 0:o.section)===t||!t?a.createElement("div",{className:k},n.map((e=>a.createElement(I,{key:e.id,item:e,cart:i,dispatch:u,handleItemClick:s})))):null)};var T=e=>{let{category:t,categorySections:n,openCategory:l,setOpenCategory:o,openSection:c,setOpenSection:s,handleItemClick:i,cart:u,dispatch:m}=e;return a.createElement("div",{className:p},a.createElement("h2",{id:"category-"+t,className:y,onClick:()=>{const e=l===t?null:t;o(e),e||s(null),e&&setTimeout((()=>{const e=document.getElementById("category-"+t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}),0)}},t),l===t&&a.createElement("div",{className:r.sectionList},Array.from(n.entries()).map((e=>{let[n,r]=e;return a.createElement(A,{key:n,section:n,items:r,category:t,openSection:c,setOpenSection:s,handleItemClick:i,cart:u,dispatch:m})}))))};var x=()=>{const e=(0,l.wA)(),t=(0,l.d4)(o.VH),n=(0,l.d4)((e=>e.merchantShop.storeItems)),c=new Map;n.forEach((e=>{c.has(e.category)||c.set(e.category,new Map);const t=c.get(e.category);t.has(e.section)||t.set(e.section,[]),t.get(e.section).push(e)}));const{0:s,1:i}=(0,a.useState)(null),{0:u,1:m}=(0,a.useState)(null),{0:d,1:p}=(0,a.useState)(null),y=e=>{p(e)};return a.createElement("div",{className:r.itemListContainer},Array.from(c.entries()).map((n=>{let[r,l]=n;return a.createElement(T,{key:r,category:r,categorySections:l,openCategory:s,setOpenCategory:i,openSection:u,setOpenSection:m,handleItemClick:y,cart:t,dispatch:e})})))},L=n(2670);var O=e=>{let{cart:t,paypalRef:n,onApprove:r,createOrder:l}=e;const o=(0,a.useRef)(!1);(0,a.useEffect)((()=>{if(console.log("\nEnvironment Variables:",{PAYPAL_CLIENT_ID:"***",SERVER_IP:"walkum.duckdns.org",PORT:"8080"}),o.current)return void console.log("PayPal buttons already rendered. Skipping initialization.");const e=document.createElement("script"),t=/Mobi|Android/i.test(navigator.userAgent);return e.src="https://www.paypal.com/sdk/js?client-id="+encodeURIComponent("AWsx_NED09OJ8ryCafSdmEbYPcu-4cFLwQKr4b1KBbd9Q_dAcdJ8H5j5fDRT5gcLZW5phvCKVdTE3ShT")+"&currency=USD&components=buttons&enable-funding=paypal,venmo,card&commit=true&intent=capture"+(t?"&integration-date=2021-02-01":""),e.async=!0,e.onload=()=>{window.paypal&&n.current?(o.current=!0,window.paypal.Buttons({style:{shape:"pill",layout:"vertical",color:"blue",label:"pay"},createOrder:l,onApprove:r}).render(n.current)):console.error("PayPal SDK not loaded properly.")},document.body.appendChild(e),()=>{o.current&&(console.log("Cleaning up PayPal buttons."),o.current=!1),document.body.contains(e)&&document.body.removeChild(e)}}),[t,n,l,r])};var F=e=>{let{cart:t}=e;const n=(0,l.wA)(),r=(0,a.useRef)(null),c="walkum.duckdns.org",s="8080",i=(0,l.d4)((e=>e.account.accountInfo.email));return O({cart:t,paypalRef:r,createOrder:async(e,n)=>{try{t.reduce(((e,t)=>e+parseFloat(t.price)*t.quantity),0).toFixed(2);const e=await fetch("https://"+c+":"+s+"/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t})}),n=await e.json();if(console.log("createOrder Response:",n),n.id)return n.id;throw new Error("Failed to create order")}catch(r){throw console.error("createOrder Error:",r),new Error("Could not initiate PayPal Checkout")}},onApprove:async(e,r)=>{try{var a,l,u,m;const r=await fetch("https://"+c+":"+s+"/api/orders/"+e.orderID+"/capture",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t,merchantEmail:i})}),h=await r.json();if(console.log("onApprove Response:",h),null==h||null===(a=h.purchase_units)||void 0===a||null===(l=a[0])||void 0===l||null===(u=l.payments)||void 0===u||null===(m=u.captures)||void 0===m||!m[0])throw new Error("Capture failed");{var d,p,y,E;const e=null==h||null===(d=h.purchase_units)||void 0===d||null===(p=d[0])||void 0===p||null===(y=p.payments)||void 0===y||null===(E=y.captures)||void 0===E?void 0:E[0];console.log("Transaction completed:",e),n((0,o.sX)())}}catch(h){console.error("onApprove Error:",h),alert("Sorry, your transaction could not be processed.")}}}),a.createElement("div",{ref:r})};var P=()=>{const e=(0,l.wA)(),t=(0,l.d4)(o.VH),n=(0,l.d4)(o.Mv),r=(t,n)=>{const r=Math.max(1,Math.min(n,t.stock));e((0,o._V)({id:t.id,quantity:r}))};return!n||t&&0!==t.length?n?a.createElement("div",{className:s},a.createElement("br",null),a.createElement("table",{className:u},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Item"),a.createElement("th",{className:C},"Quantity"),a.createElement("th",{className:S},"Total"),a.createElement("th",{className:E},"X"))),a.createElement("tbody",null,t.map(((t,n)=>{const l=Number(t.price)||0,s=Number(t.quantity)||0,i=l*s;return a.createElement("tr",{key:n},a.createElement("td",{className:L.gX},t.name||"Unnamed Item",a.createElement("br",null),a.createElement("span",{className:b},"$",l.toFixed(2))),a.createElement("td",null,a.createElement(c,{quantity:s,stock:t.stock,onDecrease:()=>r(t,Math.max(1,s-1)),onIncrease:()=>r(t,Math.min(t.stock,s+1))})),a.createElement("td",{className:S},"$",i.toFixed(2)),a.createElement("td",null,a.createElement("button",{onClick:()=>(t=>{e((0,o.ZT)(t))})(t),className:N},"X")))})))),a.createElement("h3",{className:f},"Grand Total: $",t.reduce(((e,t)=>e+(Number(t.price)||0)*(Number(t.quantity)||0)),0).toFixed(2)),a.createElement(F,{cart:t})):null:a.createElement("div",{className:h},a.createElement("p",null,"Your cart is empty"))},M=n(6474),R=n(2604),_=n(8643),D=n(6795);var q=e=>{let{merchantID:t="1Y825bTozBNpQFz3rZNCtHkACbSbOO9W48L3_01QuLQY",merchantMode:n=!0,merchantSheet:c="products"}=e;const s=(0,l.wA)(),u=(0,l.d4)(o.dX),p=(0,l.d4)(o.VH),{loading:y,error:E,data:h}=(0,D.b)({spreadsheetId:t,sheetName:c});(0,a.useEffect)((()=>{y||E||!h||(s((0,o.Bl)(h)),s((0,o.q_)()))}),[y,E,h,s]),(0,a.useEffect)((()=>{s((0,o.mk)(n))}),[n,s]);if(y)return a.createElement(_.A,null);if(E)return a.createElement("p",null,"Error loading store items: ",E);const f=p&&p.length>0&&n;return a.createElement("div",null,a.createElement("div",{className:L.kL},n?a.createElement(R.A,{rightWord:"merch",cursorColor:"#39FF14"}):a.createElement(R.A,{rightWord:"eats",cursorColor:"#39FF14"}),f&&a.createElement("button",{className:m,onClick:()=>{s((0,o.ss)())}},u?a.createElement("div",{className:d},a.createElement("span",null,"Hide"),a.createElement("span",{className:i,role:"img","aria-label":"cart"},"🛒")):a.createElement("div",{className:d},a.createElement("span",null,"Your Cart"),a.createElement("span",{className:i,role:"img","aria-label":"cart"},"🛒"))),u&&a.createElement(P,null)),a.createElement("div",{className:r.itemListContainer},a.createElement(x,null)),a.createElement("div",{className:L.kL},a.createElement(M.A,null)))}}}]);
//# sourceMappingURL=f8f934da1175da2072d774401cf2b41f5e84b91c-3cebacc75b7268e2a151.js.map