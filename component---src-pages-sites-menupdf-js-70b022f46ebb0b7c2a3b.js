"use strict";(self.webpackChunkwalkum=self.webpackChunkwalkum||[]).push([[783],{9861:function(e,r,t){t.d(r,{$:function(){return Q},a8:function(){return V}});var n=Uint8Array,a=Uint16Array,i=Int32Array,o=new n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),f=new n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),l=new n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),c=function(e,r){for(var t=new a(31),n=0;n<31;++n)t[n]=r+=1<<e[n-1];var o=new i(t[30]);for(n=1;n<30;++n)for(var f=t[n];f<t[n+1];++f)o[f]=f-t[n]<<5|n;return{b:t,r:o}},s=c(o,2),u=s.b,v=s.r;u[28]=258,v[258]=28;for(var h=c(f,0),d=h.b,g=h.r,p=new a(32768),w=0;w<32768;++w){var m=(43690&w)>>1|(21845&w)<<1;m=(61680&(m=(52428&m)>>2|(13107&m)<<2))>>4|(3855&m)<<4,p[w]=((65280&m)>>8|(255&m)<<8)>>1}var y=function(e,r,t){for(var n=e.length,i=0,o=new a(r);i<n;++i)e[i]&&++o[e[i]-1];var f,l=new a(r);for(i=1;i<r;++i)l[i]=l[i-1]+o[i-1]<<1;if(t){f=new a(1<<r);var c=15-r;for(i=0;i<n;++i)if(e[i])for(var s=i<<4|e[i],u=r-e[i],v=l[e[i]-1]++<<u,h=v|(1<<u)-1;v<=h;++v)f[p[v]>>c]=s}else for(f=new a(n),i=0;i<n;++i)e[i]&&(f[i]=p[l[e[i]-1]++]>>15-e[i]);return f},b=new n(288);for(w=0;w<144;++w)b[w]=8;for(w=144;w<256;++w)b[w]=9;for(w=256;w<280;++w)b[w]=7;for(w=280;w<288;++w)b[w]=8;var C=new n(32);for(w=0;w<32;++w)C[w]=5;var k=y(b,9,0),M=y(b,9,1),x=y(C,5,0),D=y(C,5,1),E=function(e){for(var r=e[0],t=1;t<e.length;++t)e[t]>r&&(r=e[t]);return r},F=function(e,r,t){var n=r/8|0;return(e[n]|e[n+1]<<8)>>(7&r)&t},T=function(e,r){var t=r/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(7&r)},z=function(e){return(e+7)/8|0},S=function(e,r,t){return(null==r||r<0)&&(r=0),(null==t||t>e.length)&&(t=e.length),new n(e.subarray(r,t))},I=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],P=function(e,r,t){var n=new Error(r||I[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,P),!t)throw n;return n},$=function(e,r,t,a){var i=e.length,c=a?a.length:0;if(!i||r.f&&!r.l)return t||new n(0);var s=!t,v=s||2!=r.i,h=r.i;s&&(t=new n(3*i));var g=function(e){var r=t.length;if(e>r){var a=new n(Math.max(2*r,e));a.set(t),t=a}},p=r.f||0,w=r.p||0,m=r.b||0,b=r.l,C=r.d,k=r.m,x=r.n,I=8*i;do{if(!b){p=F(e,w,1);var $=F(e,w+1,3);if(w+=3,!$){var A=e[(O=z(w)+4)-4]|e[O-3]<<8,B=O+A;if(B>i){h&&P(0);break}v&&g(m+A),t.set(e.subarray(O,B),m),r.b=m+=A,r.p=w=8*B,r.f=p;continue}if(1==$)b=M,C=D,k=9,x=5;else if(2==$){var U=F(e,w,31)+257,N=F(e,w+10,15)+4,R=U+F(e,w+5,31)+1;w+=14;for(var L=new n(R),q=new n(19),G=0;G<N;++G)q[l[G]]=F(e,w+3*G,7);w+=3*N;var Y=E(q),_=(1<<Y)-1,J=y(q,Y,1);for(G=0;G<R;){var O,W=J[F(e,w,_)];if(w+=15&W,(O=W>>4)<16)L[G++]=O;else{var j=0,H=0;for(16==O?(H=3+F(e,w,3),w+=2,j=L[G-1]):17==O?(H=3+F(e,w,7),w+=3):18==O&&(H=11+F(e,w,127),w+=7);H--;)L[G++]=j}}var K=L.subarray(0,U),Q=L.subarray(U);k=E(K),x=E(Q),b=y(K,k,1),C=y(Q,x,1)}else P(1);if(w>I){h&&P(0);break}}v&&g(m+131072);for(var V=(1<<k)-1,X=(1<<x)-1,Z=w;;Z=w){var ee=(j=b[T(e,w)&V])>>4;if((w+=15&j)>I){h&&P(0);break}if(j||P(2),ee<256)t[m++]=ee;else{if(256==ee){Z=w,b=null;break}var re=ee-254;if(ee>264){var te=o[G=ee-257];re=F(e,w,(1<<te)-1)+u[G],w+=te}var ne=C[T(e,w)&X],ae=ne>>4;ne||P(3),w+=15&ne;Q=d[ae];if(ae>3){te=f[ae];Q+=T(e,w)&(1<<te)-1,w+=te}if(w>I){h&&P(0);break}v&&g(m+131072);var ie=m+re;if(m<Q){var oe=c-Q,fe=Math.min(Q,ie);for(oe+m<0&&P(3);m<fe;++m)t[m]=a[oe+m]}for(;m<ie;++m)t[m]=t[m-Q]}}r.l=b,r.p=Z,r.b=m,r.f=p,b&&(p=1,r.m=k,r.d=C,r.n=x)}while(!p);return m!=t.length&&s?S(t,0,m):t.subarray(0,m)},A=function(e,r,t){t<<=7&r;var n=r/8|0;e[n]|=t,e[n+1]|=t>>8},B=function(e,r,t){t<<=7&r;var n=r/8|0;e[n]|=t,e[n+1]|=t>>8,e[n+2]|=t>>16},U=function(e,r){for(var t=[],i=0;i<e.length;++i)e[i]&&t.push({s:i,f:e[i]});var o=t.length,f=t.slice();if(!o)return{t:_,l:0};if(1==o){var l=new n(t[0].s+1);return l[t[0].s]=1,{t:l,l:1}}t.sort((function(e,r){return e.f-r.f})),t.push({s:-1,f:25001});var c=t[0],s=t[1],u=0,v=1,h=2;for(t[0]={s:-1,f:c.f+s.f,l:c,r:s};v!=o-1;)c=t[t[u].f<t[h].f?u++:h++],s=t[u!=v&&t[u].f<t[h].f?u++:h++],t[v++]={s:-1,f:c.f+s.f,l:c,r:s};var d=f[0].s;for(i=1;i<o;++i)f[i].s>d&&(d=f[i].s);var g=new a(d+1),p=N(t[v-1],g,0);if(p>r){i=0;var w=0,m=p-r,y=1<<m;for(f.sort((function(e,r){return g[r.s]-g[e.s]||e.f-r.f}));i<o;++i){var b=f[i].s;if(!(g[b]>r))break;w+=y-(1<<p-g[b]),g[b]=r}for(w>>=m;w>0;){var C=f[i].s;g[C]<r?w-=1<<r-g[C]++-1:++i}for(;i>=0&&w;--i){var k=f[i].s;g[k]==r&&(--g[k],++w)}p=r}return{t:new n(g),l:p}},N=function(e,r,t){return-1==e.s?Math.max(N(e.l,r,t+1),N(e.r,r,t+1)):r[e.s]=t},R=function(e){for(var r=e.length;r&&!e[--r];);for(var t=new a(++r),n=0,i=e[0],o=1,f=function(e){t[n++]=e},l=1;l<=r;++l)if(e[l]==i&&l!=r)++o;else{if(!i&&o>2){for(;o>138;o-=138)f(32754);o>2&&(f(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(f(i),--o;o>6;o-=6)f(8304);o>2&&(f(o-3<<5|8208),o=0)}for(;o--;)f(i);o=1,i=e[l]}return{c:t.subarray(0,n),n:r}},L=function(e,r){for(var t=0,n=0;n<r.length;++n)t+=e[n]*r[n];return t},q=function(e,r,t){var n=t.length,a=z(r+2);e[a]=255&n,e[a+1]=n>>8,e[a+2]=255^e[a],e[a+3]=255^e[a+1];for(var i=0;i<n;++i)e[a+i+4]=t[i];return 8*(a+4+n)},G=function(e,r,t,n,i,c,s,u,v,h,d){A(r,d++,t),++i[256];for(var g=U(i,15),p=g.t,w=g.l,m=U(c,15),M=m.t,D=m.l,E=R(p),F=E.c,T=E.n,z=R(M),S=z.c,I=z.n,P=new a(19),$=0;$<F.length;++$)++P[31&F[$]];for($=0;$<S.length;++$)++P[31&S[$]];for(var N=U(P,7),G=N.t,Y=N.l,_=19;_>4&&!G[l[_-1]];--_);var J,O,W,j,H=h+5<<3,K=L(i,b)+L(c,C)+s,Q=L(i,p)+L(c,M)+s+14+3*_+L(P,G)+2*P[16]+3*P[17]+7*P[18];if(v>=0&&H<=K&&H<=Q)return q(r,d,e.subarray(v,v+h));if(A(r,d,1+(Q<K)),d+=2,Q<K){J=y(p,w,0),O=p,W=y(M,D,0),j=M;var V=y(G,Y,0);A(r,d,T-257),A(r,d+5,I-1),A(r,d+10,_-4),d+=14;for($=0;$<_;++$)A(r,d+3*$,G[l[$]]);d+=3*_;for(var X=[F,S],Z=0;Z<2;++Z){var ee=X[Z];for($=0;$<ee.length;++$){var re=31&ee[$];A(r,d,V[re]),d+=G[re],re>15&&(A(r,d,ee[$]>>5&127),d+=ee[$]>>12)}}}else J=k,O=b,W=x,j=C;for($=0;$<u;++$){var te=n[$];if(te>255){B(r,d,J[(re=te>>18&31)+257]),d+=O[re+257],re>7&&(A(r,d,te>>23&31),d+=o[re]);var ne=31&te;B(r,d,W[ne]),d+=j[ne],ne>3&&(B(r,d,te>>5&8191),d+=f[ne])}else B(r,d,J[te]),d+=O[te]}return B(r,d,J[256]),d+O[256]},Y=new i([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),_=new n(0),J=function(e,r,t,l,c,s){var u=s.z||e.length,h=new n(l+u+5*(1+Math.ceil(u/7e3))+c),d=h.subarray(l,h.length-c),p=s.l,w=7&(s.r||0);if(r){w&&(d[0]=s.r>>3);for(var m=Y[r-1],y=m>>13,b=8191&m,C=(1<<t)-1,k=s.p||new a(32768),M=s.h||new a(C+1),x=Math.ceil(t/3),D=2*x,E=function(r){return(e[r]^e[r+1]<<x^e[r+2]<<D)&C},F=new i(25e3),T=new a(288),I=new a(32),P=0,$=0,A=s.i||0,B=0,U=s.w||0,N=0;A+2<u;++A){var R=E(A),L=32767&A,_=M[R];if(k[L]=_,M[R]=L,U<=A){var J=u-A;if((P>7e3||B>24576)&&(J>423||!p)){w=G(e,d,0,F,T,I,$,B,N,A-N,w),B=P=$=0,N=A;for(var O=0;O<286;++O)T[O]=0;for(O=0;O<30;++O)I[O]=0}var W=2,j=0,H=b,K=L-_&32767;if(J>2&&R==E(A-K))for(var Q=Math.min(y,J)-1,V=Math.min(32767,A),X=Math.min(258,J);K<=V&&--H&&L!=_;){if(e[A+W]==e[A+W-K]){for(var Z=0;Z<X&&e[A+Z]==e[A+Z-K];++Z);if(Z>W){if(W=Z,j=K,Z>Q)break;var ee=Math.min(K,Z-2),re=0;for(O=0;O<ee;++O){var te=A-K+O&32767,ne=te-k[te]&32767;ne>re&&(re=ne,_=te)}}}K+=(L=_)-(_=k[L])&32767}if(j){F[B++]=268435456|v[W]<<18|g[j];var ae=31&v[W],ie=31&g[j];$+=o[ae]+f[ie],++T[257+ae],++I[ie],U=A+W,++P}else F[B++]=e[A],++T[e[A]]}}for(A=Math.max(A,U);A<u;++A)F[B++]=e[A],++T[e[A]];w=G(e,d,p,F,T,I,$,B,N,A-N,w),p||(s.r=7&w|d[w/8|0]<<3,w-=7,s.h=M,s.p=k,s.i=A,s.w=U)}else{for(A=s.w||0;A<u+p;A+=65535){var oe=A+65535;oe>=u&&(d[w/8|0]=p,oe=u),w=q(d,w+1,e.subarray(A,oe))}s.i=u}return S(h,0,l+z(w)+c)},O=function(){var e=1,r=0;return{p:function(t){for(var n=e,a=r,i=0|t.length,o=0;o!=i;){for(var f=Math.min(o+2655,i);o<f;++o)a+=n+=t[o];n=(65535&n)+15*(n>>16),a=(65535&a)+15*(a>>16)}e=n,r=a},d:function(){return(255&(e%=65521))<<24|(65280&e)<<8|(255&(r%=65521))<<8|r>>8}}},W=function(e,r,t,a,i){if(!i&&(i={l:1},r.dictionary)){var o=r.dictionary.subarray(-32768),f=new n(o.length+e.length);f.set(o),f.set(e,o.length),e=f,i.w=o.length}return J(e,null==r.level?6:r.level,null==r.mem?i.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):20:12+r.mem,t,a,i)},j=function(e,r,t){for(;t;++r)e[r]=t,t>>>=8},H=function(e,r){var t=r.level,n=0==t?0:t<6?1:9==t?3:2;if(e[0]=120,e[1]=n<<6|(r.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,r.dictionary){var a=O();a.p(r.dictionary),j(e,2,a.d())}},K=function(e,r){return(8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31)&&P(6,"invalid zlib data"),(e[1]>>5&1)==+!r&&P(6,"invalid zlib data: "+(32&e[1]?"need":"unexpected")+" dictionary"),2+(e[1]>>3&4)};function Q(e,r){r||(r={});var t=O();t.p(e);var n=W(e,r,r.dictionary?6:2,4);return H(n,r),j(n,n.length-4,t.d()),n}function V(e,r){return $(e.subarray(K(e,r&&r.dictionary),-4),{i:2},r&&r.out,r&&r.dictionary)}var X="undefined"!=typeof TextDecoder&&new TextDecoder;try{X.decode(_,{stream:!0})}catch(Z){}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout},9704:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var n=t(6540),a=t(4506),i=t(3596);var o=[{Category:"Appetizers",Item:"Spring Rolls",Price:"$5.99",Description:"Crispy rolls filled with fresh vegetables and served with a tangy dipping sauce."},{Category:"Appetizers",Item:"Garlic Bread",Price:"$4.49",Description:"Toasted baguette slices topped with garlic butter and parsley."},{Category:"Main Courses",Item:"Grilled Chicken",Price:"$12.99",Description:"Juicy grilled chicken breast served with steamed vegetables and mashed potatoes."},{Category:"Main Courses",Item:"Spaghetti Bolognese",Price:"$11.49",Description:"Classic spaghetti with a rich, homemade meat sauce."},{Category:"Desserts",Item:"Chocolate Lava Cake",Price:"$6.99",Description:"Warm chocolate cake with a gooey molten center, served with vanilla ice cream."},{Category:"Desserts",Item:"Cheesecake",Price:"$5.99",Description:"Creamy New York-style cheesecake with a graham cracker crust."},{Category:"Beverages",Item:"Coffee",Price:"$2.99",Description:"Freshly brewed coffee served hot or iced."},{Category:"Beverages",Item:"Lemonade",Price:"$3.49",Description:"Refreshing homemade lemonade with a hint of mint."}];var f=()=>n.createElement("div",null,n.createElement("button",{onClick:()=>{const e=new i.uE("p","pt","letter"),r=e.internal.pageSize.width,t=40,n=r-40,f=n;let l=110;e.setFillColor(200,230,200),e.rect(0,0,r,e.internal.pageSize.height,"F"),e.setFont("helvetica","bold"),e.setFontSize(30),e.setTextColor(50,50,50),e.text("MENU",r/2,50,{align:"center"});(0,a.A)(new Set(o.map((e=>e.Category)))).forEach((a=>{e.setFillColor(150,180,150),e.setTextColor(255,255,255),e.setFontSize(18),e.rect(t,l-18,r-80,25,"F"),e.text(a,50,l),l+=25;o.filter((e=>e.Category===a)).forEach((r=>{if(e.setFont("helvetica","bold"),e.setFontSize(12),e.setTextColor(50,50,50),e.text(r.Item,t,l),e.setDrawColor(50,50,50),e.line(t,l+2,f-20,l+2),e.text(r.Price,f,l,{align:"right"}),l+=20,r.Description){e.setFont("helvetica","italic"),e.setFontSize(10),e.setTextColor(80,80,80);e.splitTextToSize(r.Description,n-t).forEach((r=>{e.text(r,60,l),l+=15}))}l+=10})),l+=20})),e.save("MY_PRINTABLE_MENU.pdf")},style:{padding:"10px 20px",fontSize:"16px",backgroundColor:"#96B496",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer"}},"Download Styled Menu as PDF"));var l=()=>n.createElement("div",null,n.createElement("h1",null,"Menu App"),n.createElement(f,null));var c=()=>n.createElement(l,null)}}]);
//# sourceMappingURL=component---src-pages-sites-menupdf-js-70b022f46ebb0b7c2a3b.js.map