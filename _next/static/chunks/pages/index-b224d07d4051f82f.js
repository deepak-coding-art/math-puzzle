(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1368)}])},1391:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var l=n(5893),s=n(7364),a=n.n(s);function o(){return(0,l.jsx)("svg",{width:"800px",height:"800px",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:a().loadingAnimation,children:(0,l.jsx)("path",{d:"m20 12c0 1.3811-0.3576 2.7386-1.0378 3.9405-0.6803 1.2019-1.6601 2.2072-2.8441 2.9182-1.1841 0.7109-2.532 1.1032-3.9126 1.1387-1.3806 0.0354-2.7469-0.2871-3.9658-0.9362",stroke:"#000",strokeLinecap:"round",strokeWidth:"3.5556"})})}},1368:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var l=n(5893),s=n(9008),a=n.n(s),o=n(9034),i=n.n(o),r=n(7294);function u(){return(0,l.jsxs)("svg",{width:"50px",height:"50px",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"}),(0,l.jsx)("path",{d:"m237.25 512 265.41 265.34a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312l-265.41 265.34z"})]})}var c=n(6628),d=n.n(c),p=n(6147);function m(e){let{piceData:t,setEditPopup:n}=e,s=e=>{let{connect_id:t}=e;n(t)};return(0,l.jsxs)("div",{className:d().box,children:[(0,l.jsx)("div",{className:"".concat(d().middler," ").concat(d().middlerTop," ").concat(t.top.connect_id>1e3&&"".concat(d().wrongSides)),onClick:()=>s(t.top)}),(0,l.jsx)("div",{className:"".concat(d().middlerTopContent," ").concat(d().middlerTop," ").concat(d().middlerTextTopBottom),onClick:()=>s(t.top),children:(0,l.jsx)(p.Z,{expression:t.top.equation})}),(0,l.jsx)("div",{className:"".concat(d().middler," ").concat(d().middlerRight," ").concat(t.right.connect_id>1e3&&"".concat(d().wrongSides)),onClick:()=>s(t.right)}),(0,l.jsx)("div",{className:"".concat(d().middlerTopContent," ").concat(d().middlerRight," ").concat(d().middlerBothSides),onClick:()=>s(t.right),children:(0,l.jsx)(p.Z,{side:"right",expression:t.right.equation})}),(0,l.jsx)("div",{className:"".concat(d().middler," ").concat(d().middlerLeft," ").concat(t.left.connect_id>1e3&&"".concat(d().wrongSides)),onClick:()=>s(t.left)}),(0,l.jsx)("div",{className:"".concat(d().middlerTopContent," ").concat(d().middlerLeft," ").concat(d().middlerBothSides),onClick:()=>s(t.left),children:(0,l.jsx)(p.Z,{side:"left",expression:t.left.equation})}),(0,l.jsx)("div",{className:"".concat(d().middler," ").concat(d().middlerBottom," ").concat(t.bottom.connect_id>1e3&&"".concat(d().wrongSides)),onClick:()=>s(t.bottom)}),(0,l.jsx)("div",{className:"".concat(d().middlerTopContent," ").concat(d().middlerBottom," ").concat(d().middlerTextTopBottom),onClick:()=>s(t.bottom),children:(0,l.jsx)(p.Z,{expression:t.bottom.equation})})]})}var h=n(6403);function x(e){let{addMathKey:t}=e,[n,s]=(0,r.useState)(0),a=(e,l)=>{l.preventDefault(),0===e&&t("\\"+"sqrt{".concat(n,"}"))};return(0,l.jsxs)("div",{className:d().mathButtonsContSingle,style:{marginTop:0,border:"solid 1px var(--black)"},children:[(0,l.jsx)("input",{className:d().smallInput,type:"number",min:0,value:n||0,onChange:e=>s(e.target.value)}),(0,l.jsx)("button",{className:d().mathButtons,onClick:e=>a(0,e),children:"√n"})]})}function _(e){let{addMathKey:t}=e,[n,s]=(0,r.useState)([{label:"Space",key:"\\>"}]),[a,o]=(0,r.useState)(null),i=(e,n)=>{n.preventDefault(),t(e)};return(0,l.jsxs)("div",{className:d().mathButtonsContSingle,children:[n.map((e,t)=>(0,l.jsx)("button",{onClick:t=>i(e.key,t),className:d().mathButtons,children:e.label},t)),(0,l.jsx)(x,{addMathKey:t})]})}var f=n(1391);function g(e){let{addMathKey:t}=e,[n,s]=(0,r.useState)(0),[a,o]=(0,r.useState)(0),[i,u]=(0,r.useState)(0),[c,p]=(0,r.useState)(0),m=(e,l)=>{if(l.preventDefault(),0===e){let e="\\"+"sqrt[".concat(n,"]{").concat(a,"}");t(e)}else if(1===e){let e="\\"+"frac{".concat(i,"}{").concat(c,"}");t(e)}};return(0,l.jsxs)("div",{className:d().mathButtonsCont,children:[(0,l.jsxs)("div",{className:d().mathButtonsInner,children:[(0,l.jsx)("input",{className:d().smallInput,type:"number",min:0,value:n||0,onChange:e=>s(e.target.value)}),(0,l.jsx)("input",{className:d().smallInput,type:"number",min:0,value:a||0,onChange:e=>o(e.target.value)}),(0,l.jsx)("button",{className:d().mathButtons,onClick:e=>m(0,e),children:"ˣ√n"})]}),(0,l.jsxs)("div",{className:d().mathButtonsInner,children:[(0,l.jsx)("input",{className:d().smallInput,type:"number",min:0,value:i||0,onChange:e=>u(e.target.value)}),(0,l.jsx)("input",{className:d().smallInput,type:"number",min:0,value:c||0,onChange:e=>p(e.target.value)}),(0,l.jsx)("button",{className:d().mathButtons,onClick:e=>m(1,e),children:"x/n"})]})]})}function z(e){let{puzzleBoxes:t,setPuzzleBoxes:n,handleEditEquation:s,nextToConfirm:a,openCreatePuzzle:o,selectedSize:i,handleSaveUnFinish:c,saving:x}=e,[z,j]=(0,r.useState)(null),[v,b]=(0,r.useState)(null),[y,k]=(0,r.useState)(null),[N,C]=(0,r.useState)(null),[B,S]=(0,r.useState)(null),[w,E]=(0,r.useState)(null),[P,T]=(0,r.useState)(null),I=(0,r.useRef)(),O=(0,r.useRef)(),q=(0,r.useRef)();(0,r.useEffect)(()=>{if(t.length<=0){let e=(0,h.K_)(i);n(e)}},[i]),(0,r.useEffect)(()=>{if(z){if(z>1e3){let e=(0,h.Yb)(z,t);S(e[0].equation)}else{let e=(0,h.Yb)(z,t);e.forEach(e=>{"l"===e.type?k(e.equation):"t"===e.type?k(e.equation):"r"===e.type?C(e.equation):"b"===e.type&&C(e.equation)})}}},[z]),(0,r.useEffect)(()=>{t&&t.length>0&&(()=>{let e=t.every(e=>!!e.left.equation&&!!e.right.equation&&!!e.top.equation&&!!e.bottom.equation);b(e)})()},[t]);let L=e=>{e.preventDefault();let{LHS:t,RHS:n,wrongValue:l}=Object.fromEntries(new FormData(e.target));l?s(z,l,void 0,!0):s(z,t,n),j(null),k(null),C(null)},G=e=>{let t=e.target.value;k(t)},M=e=>{let t=e.target.value;C(t)},F=e=>{let t=e.target.value;S(t)},H=e=>{j(null)},R=e=>{e.stopPropagation()},D=()=>{E(!0)},Z=()=>{E(!1)},V=e=>{"LHS"===P?(k(t=>t+e),I.current.focus()):"RHS"===P?(C(t=>t+e),O.current.focus()):"wrongValue"===P&&(S(t=>t+e),q.current.focus())};return(0,l.jsxs)("div",{className:d().container,children:[(0,l.jsx)("div",{className:"".concat(d().gridContainer," ").concat("4x4"===i&&"".concat(d().gridContainer4)),children:t.map((e,t)=>(0,l.jsx)(m,{piceData:e,setEditPopup:j},"boxId-".concat(t)))}),(0,l.jsxs)("button",{className:"".concat(d().nextBtn," ").concat(v||"".concat(d().disabled)),onClick:a,disabled:!v,children:["n\xe6ste ",(0,l.jsx)(u,{})]}),(0,l.jsxs)("button",{className:d().backBtn,onClick:D,children:[(0,l.jsx)(u,{})," tilbage"]}),z&&(0,l.jsx)("div",{onClick:H,className:d().editPopupBg,children:(0,l.jsxs)("form",{onClick:R,onSubmit:L,className:d().editPopup,children:[" ",z<1e3?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"text",name:"RHS",className:d().input,placeholder:"Skriv opgave...",value:N||"",onChange:M,onFocus:()=>T("RHS"),autoFocus:!0,ref:O}),(0,l.jsxs)("div",{className:d().output,children:[(0,l.jsx)("h4",{children:"Visning: "}),(0,l.jsx)(p.Z,{expression:N})]}),(0,l.jsx)("input",{type:"text",name:"LHS",className:d().input,placeholder:"skriv svaret...",value:y||"",onFocus:()=>T("LHS"),onChange:G,ref:I}),(0,l.jsxs)("div",{className:d().output,children:[(0,l.jsx)("h4",{children:"Visning: "}),(0,l.jsx)(p.Z,{expression:y})]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"text",name:"wrongValue",className:d().input,placeholder:"skriv noget der ikke bruges p\xe5 andre brikker...",value:B||"",onChange:F,onFocus:()=>T("wrongValue"),ref:q,autoFocus:!0}),(0,l.jsxs)("div",{className:d().output,children:[(0,l.jsx)("h4",{children:"Visning: "}),(0,l.jsx)(p.Z,{expression:B})]})]}),(0,l.jsx)(_,{addMathKey:V,expression:N}),(0,l.jsx)(g,{addMathKey:V}),(0,l.jsx)("button",{type:"submit",className:d().buttons,children:"Gem"})]})}),w&&(0,l.jsx)("div",{className:d().editPopupBg,onClick:Z,disabled:x,children:(0,l.jsxs)("div",{className:d().savePopup,onClick:R,children:[(0,l.jsx)("button",{className:d().closePopupBtn,onClick:Z,disabled:x,children:"X"}),(0,l.jsx)("h1",{children:"Sikker p\xe5 at du vil g\xe5 tilbage uden at gemme?"}),(0,l.jsxs)("div",{className:d().savePopupControls,children:[(0,l.jsx)("button",{className:d().saveButtons,onClick:c,disabled:x,children:x?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.Z,{})," Gemmer"]}):"gem"}),(0,l.jsx)("button",{className:d().saveButtons,onClick:()=>o(!0),disabled:x,children:"gem ikke"})]})]})})]})}var j=n(5791),v=n.n(j);function b(e){let{imagePath:t,supabase:n}=e,[s,a]=(0,r.useState)(null),[o,i]=(0,r.useState)(null),[u,c]=(0,r.useState)(null);return((0,r.useEffect)(()=>{let e=async()=>{let{data:e,error:l}=await n.storage.from("images").getPublicUrl(t);a(e.publicUrl)};t?e():i(!0),u&&c(!0)},[]),s)?(0,l.jsx)("img",{src:s,alt:"image",className:v().puzzleImage}):o?(0,l.jsx)("div",{className:v().noImage,children:(0,l.jsx)("h2",{children:"Intet billede"})}):(0,l.jsx)("div",{className:v().imageLoading})}var y=n(7977),k=n.n(y);function N(){return(0,l.jsx)("svg",{width:"10px",height:"10px",fill:"#000",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m8 7v1h-1.5c-0.82843 0-1.5 0.67157-1.5 1.5v9c0 0.82843 0.67157 1.5 1.5 1.5h7c0.82843 0 1.5-0.67157 1.5-1.5v-1.5h1v1.5c0 1.3807-1.1193 2.5-2.5 2.5h-7c-1.3807 0-2.5-1.1193-2.5-2.5v-9c0-1.3807 1.1193-2.5 2.5-2.5h1.5zm8-3h-5.5c-0.82843 0-1.5 0.67157-1.5 1.5v9c0 0.82843 0.67157 1.5 1.5 1.5h7c0.82843 0 1.5-0.67157 1.5-1.5v-7.5h-2.5c-0.27614 0-0.5-0.22386-0.5-0.5v-2.5zm4 2.528v7.972c0 1.3807-1.1193 2.5-2.5 2.5h-7c-1.3807 0-2.5-1.1193-2.5-2.5v-9c0-1.3807 1.1193-2.5 2.5-2.5h5.972c0.13275-0.0084195 0.27092 0.035839 0.38153 0.14645l3 3c0.11061 0.11061 0.15487 0.24878 0.14645 0.38153zm-3-0.52798h1.2929l-1.2929-1.2929v1.2929zm-5.5 7c-0.27614 0-0.5-0.22386-0.5-0.5s0.22386-0.5 0.5-0.5h2c0.27614 0 0.5 0.22386 0.5 0.5s-0.22386 0.5-0.5 0.5h-2zm0-2c-0.27614 0-0.5-0.22386-0.5-0.5s0.22386-0.5 0.5-0.5h5c0.27614 0 0.5 0.22386 0.5 0.5s-0.22386 0.5-0.5 0.5h-5zm0-2c-0.27614 0-0.5-0.22386-0.5-0.5s0.22386-0.5 0.5-0.5h5c0.27614 0 0.5 0.22386 0.5 0.5s-0.22386 0.5-0.5 0.5h-5z"})})}function C(){return(0,l.jsx)("svg",{width:"50px",height:"50px",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",stroke:"#000",children:(0,l.jsx)("path",{d:"m6 12 4.2426 4.2426 8.4844-8.4853",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}function B(e){let{url:t}=e,[n,s]=(0,r.useState)(null),a=()=>{s(!0),navigator.clipboard.writeText(t),setTimeout(()=>{s(null)},1e3)};return(0,l.jsxs)("div",{className:k().container,children:[(0,l.jsx)("h1",{className:k().url,children:t}),(0,l.jsx)("button",{onClick:a,className:k().button,children:n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C,{}),"Kopieret!"]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{}),"kopi\xe9r"]})})]})}function S(){return(0,l.jsxs)("svg",{width:"50px",height:"50px",fill:"none",stroke:"#000",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"m10 11v6",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,l.jsx)("path",{d:"m14 11v6",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,l.jsx)("path",{d:"m4 7h16",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,l.jsx)("path",{d:"m6 7h12v11c0 1.6569-1.3431 3-3 3h-6c-1.6568 0-3-1.3431-3-3v-11z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,l.jsx)("path",{d:"m9 5c0-1.1046 0.89543-2 2-2h2c1.1046 0 2 0.89543 2 2v2h-6v-2z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]})}var w=n(4507);function E(){return(0,l.jsxs)("svg",{fill:"#000",enableBackground:"new 0 0 220 220",version:"1.1",viewBox:"0 0 220 220",children:[(0,l.jsx)("path",{fill:"#000",d:"m103.49 155.4-48.85 16.28c-3.91 1.3-7.63-2.42-6.32-6.32l16.28-48.85 7.78 7.78-9.99 29.96c-0.69 2.08 1.28 4.05 3.36 3.36l29.96-9.99 7.78 7.78z"}),(0,l.jsx)("rect",{transform:"matrix(.7071 .7071 -.7071 .7071 95.856 -79.709)",x:"116.65",y:"70.85",width:"55",height:"10",fill:"#000"}),(0,l.jsx)("rect",{transform:"matrix(.7071 .7071 -.7071 .7071 119.29 -23.141)",x:"60.08",y:"127.42",width:"55",height:"10",fill:"#000"}),(0,l.jsx)("rect",{transform:"matrix(-.7071 .7071 -.7071 -.7071 309.83 111.76)",x:"86.77",y:"115.05",width:"90",height:"10",fill:"#000"}),(0,l.jsx)("path",{fill:"#000",d:"m130 79.39c0.98 0.98 0.98 2.56 0 3.54l-35.36 35.36c-0.98 0.98-2.56 0.98-3.54 0s-0.98-2.56 0-3.54l35.36-35.36c0.98-0.98 2.57-0.98 3.54 0z"}),(0,l.jsx)("path",{fill:"#000",d:"m140.61 90c0.98 0.98 0.98 2.56 0 3.54l-35.36 35.36c-0.98 0.98-2.56 0.98-3.54 0s-0.98-2.56 0-3.54l35.36-35.36c0.98-0.98 2.56-0.98 3.54 0z"}),(0,l.jsx)("rect",{transform:"matrix(-.7071 .7071 -.7071 -.7071 233.01 79.939)",x:"54.95",y:"83.23",width:"90",height:"10",fill:"#000"}),(0,l.jsx)("path",{fill:"#000",strokeWidth:"10",strokeMiterlimit:"10",d:"m128.24 59.94 5.3-5.3c8.79-8.79 23.03-8.79 31.82 0s8.79 23.03 0 31.82l-5.3 5.3-31.82-31.82z"})]})}function P(e){let{puzzle:t,handleDelete:n,deleting:s,user_id:a,supabase:o,admin:i,handleEditPuzzle:u,setDeletePopup:c}=e,[d,p]=(0,r.useState)(null);return(0,r.useEffect)(()=>{t&&t.id&&p("".concat(window.location.origin).concat(w.VQ,"/play?id=").concat(t.id,"&type=").concat(i?"admin":"user"))},[t]),(0,l.jsxs)("div",{className:v().cardContainer,children:[(0,l.jsx)("div",{className:v().imageCont,children:(0,l.jsx)(b,{imagePath:t.image,supabase:o})}),(0,l.jsxs)("div",{className:v().cardText,children:[(0,l.jsx)("h1",{className:v().cardName,children:t.name?t.name:"untitled"}),(0,l.jsxs)("h3",{className:v().cardSize,children:[t.size," puslespil"]}),(0,l.jsx)("p",{className:v().cardDescription,children:t.description}),t.show&&(0,l.jsxs)("div",{className:v().urlBox,children:[(0,l.jsx)("h2",{children:"Link til puslespil: "}),d&&(0,l.jsx)(B,{url:d})]}),(0,l.jsx)("div",{className:v().actionButtons,children:a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"".concat(v().actionButton),onClick:()=>c(t.id),disabled:s===t.id,children:s!==t.id?(0,l.jsx)(S,{}):(0,l.jsx)(f.Z,{})}),(0,l.jsx)("button",{className:"".concat(v().actionButton),onClick:()=>u(t),disabled:s===t.id,children:(0,l.jsx)(E,{})})]})})]})]})}var T=n(8844);function I(e){let{backButtonMain:t,supabase:n,user_id:s,profile:a,handleEditPuzzle:o}=e,[i,c]=(0,r.useState)([]),[d,p]=(0,r.useState)(null),[m,h]=(0,r.useState)(null),[x,_]=(0,r.useState)(null),[g,z]=(0,r.useState)(null),[j,b]=(0,r.useState)(null);(0,r.useEffect)(()=>{y(s)},[s]);let y=async e=>{let t="puzzles";if(a.is_admin&&(t="admin_puzzles"),p(!0),e){let{data:l,error:s}=await n.from(t).select("*").eq("profile_id",e);if(s)return;c(l)}else{let{data:e,error:t}=await n.from("admin_puzzles").select("*").eq("show",!0);if(t)return;c(e),z(!0)}p(null)},k=async e=>{_(e);let t="puzzles";a.is_admin&&(t="admin_puzzles");let{data:l,error:s}=await n.from(t).delete().eq("id",e);if(s){h("Oops some error."),setTimeout(()=>{h(null)},2e3);return}_(!1),c(t=>{let n=[...t];return n.filter(t=>t.id!==e)}),b(null)};return d?(0,l.jsx)(T.Z,{}):i.length<=0?(0,l.jsxs)("div",{className:v().noPuzzles,children:[(0,l.jsx)("h1",{children:"Du har ingen gemte puslespil"}),(0,l.jsxs)("button",{className:v().backButton,onClick:t,children:[(0,l.jsx)(u,{})," tilbage"]})]}):(0,l.jsxs)("div",{className:v().container,children:[m&&(0,l.jsx)("p",{className:v().errorMessage,children:m}),i.map((e,t)=>(0,l.jsx)(P,{puzzle:e,handleDelete:k,deleting:x,user_id:s,supabase:n,admin:g,handleEditPuzzle:o,setDeletePopup:b},"card-".concat(t))),(0,l.jsxs)("button",{className:v().backButton,onClick:t,children:[(0,l.jsx)(u,{})," tilbage"]}),j&&(0,l.jsx)("div",{className:v().deletePopupBg,children:(0,l.jsxs)("div",{className:v().deletePopup,children:[(0,l.jsx)("h1",{children:"Er du sikker p\xe5 at du vil slette?"}),(0,l.jsxs)("div",{className:v().deletePopupButtonsCont,children:[(0,l.jsxs)("button",{className:v().deletePopupButtons,onClick:()=>k(j),children:[x&&(0,l.jsx)(f.Z,{}),"Slet"]}),(0,l.jsx)("button",{className:v().deletePopupButtons,onClick:()=>b(null),children:"Slet ikke"})]})]})})]})}var O=n(4053),q=n(1163),L=n(3478);function G(){let e=(0,O.useSupabaseClient)(),{isLoading:t,session:n,error:s}=(0,O.useSessionContext)(),[o,c]=(0,r.useState)("Deepak"),[d,p]=(0,r.useState)(null),[m,x]=(0,r.useState)("main"),[_,g]=(0,r.useState)(null),[j,v]=(0,r.useState)([]),[b,y]=(0,r.useState)(null),[k,N]=(0,r.useState)(null),[C,S]=(0,r.useState)(null),[E,P]=(0,r.useState)(null),[G,M]=(0,r.useState)(null),[F,H]=(0,r.useState)(null),[R,D]=(0,r.useState)(null),[Z,V]=(0,r.useState)(null),W=(0,r.useRef)(null),U=(0,q.useRouter)();(0,r.useEffect)(()=>{if(!t){if(n&&n.user){let e=n.user.user_metadata.full_name;X(n.user.id),c(e)}else U.replace("/login")}},[t,n,s]);let X=async t=>{let{data:n,error:l}=await e.from("profiles").select("*").eq("id",t);if(n.length>0){let e=n[0];g(e)}},$=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];x("puzzle"),v([]),D(null),M(null),N(null),y(null),P(null),e||S(null)},Y=()=>{x("main")},A=e=>{e.preventDefault(),K()},K=()=>{x("editor")},Q=()=>{x("confirm")},J=()=>{x("geek")},ee=()=>{x("my")},et=e=>{if(e.target.files.length>0){let t=e.target.files[0].name;N(e.target.files[0]),y(t)}},en=()=>{W.current.click()},el=e=>{let t=e.target.value;t<0||(0==t?S("3x3"):1==t&&S("4x4"))},es=async t=>{if(t.preventDefault(),!b||!G||!C||j.length<5){H("Fill all the fields.");return}let l="public/".concat(Date.now(),".jpg");V(!0);let s="puzzles";_.is_admin&&(s="admin_puzzles");let{data:a,error:o}=await e.from(s).insert([{profile_id:n.user.id,size:C,name:G,description:E,image:l,boxes:{data:j}}]).select().single();if(o){H("Error saving puzzle"),console.log(o),V(null);return}let{data:i,error:r}=await e.storage.from("images").upload(l,k,{cacheControl:"3600",upsert:!1});if(r){console.log(r),H("Error uploading file"),V(null);return}p("".concat(window.location.origin).concat(w.VQ,"/play?id=").concat(a.id,"&type=").concat(_.is_admin?"admin":"user")),V(null),S(null),v([]),M(null),N(null),y(null),P(null),x("main")},ea=async t=>{V(!0);let l="puzzles";if(_.is_admin&&(console.log("Admin"),l="admin_puzzles"),R){let{data:t,error:n}=await e.from(l).update({boxes:{data:j},show:!1}).eq("id",R).select().single();if(n){H("Error saving puzzle"),console.log(n),V(null);return}}else{let{data:t,error:s}=await e.from(l).insert([{profile_id:n.user.id,size:C,boxes:{data:j},show:!1}]).select().single();if(s){H("Error saving puzzle"),console.log(s),V(null);return}}V(null),$(!0)},eo=async()=>{let{data:t,error:n}=await e.auth.signOut();n&&setMenuError("Something went wrong."),t&&U.replace("/login")},ei=async e=>{D(e.id),S(e.size),v(e.boxes.data),M(e.name),N(null),y(null),P(e.description),x("editor")};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:"Math Puzzle | Create"}),(0,l.jsx)("meta",{name:"description",content:"A math puzzle that students can solve and teachers can create new puzzles. share with student to solve."}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),!t&&n&&n.user?(0,l.jsxs)("main",{className:i().main,children:["main"===m&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h1",{className:i().greeting,children:["Velkommen til Geeksters puslespil: ",(0,l.jsx)("br",{})," l\xe6g brikkerne vha. matematik"]}),d&&(0,l.jsx)("p",{className:i().message,children:"Puslespil gemt!"}),d&&(0,l.jsx)(B,{url:d}),(0,l.jsxs)("div",{className:i().menu,children:[(0,l.jsx)("button",{className:i().buttons,onClick:$,children:"Lav nyt puslespil"}),(0,l.jsx)("button",{className:i().buttons,onClick:ee,children:"Mine puslespil"}),(0,l.jsx)("button",{className:i().buttons,onClick:J,children:"Geeksters puslespil"}),(0,l.jsxs)("button",{className:i().buttons,onClick:eo,children:["Log ud ",(0,l.jsx)(u,{})]})]})]}),"puzzle"===m&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:i().greeting,children:"Opret nyt puslespil"}),(0,l.jsxs)("form",{onSubmit:A,className:i().menu,children:[(0,l.jsx)("button",{type:"button",className:i().backButton,onClick:Y,children:(0,l.jsx)(u,{})}),(0,l.jsx)("select",{onChange:el,className:i().selectBox,children:w.qF.map((e,t)=>0===t?(0,l.jsx)("option",{disabled:!0,selected:!C,children:e},"option-".concat(t)):(0,l.jsx)("option",{value:t-1,className:i().optionsSize,selected:e===C,children:e},"option-".concat(t)))}),(0,l.jsx)("button",{className:i().buttons,type:"submit",disabled:!C,children:"Begynd at lave puslespil"})]})]}),"editor"===m&&(0,l.jsx)(z,{puzzleBoxes:j,setPuzzleBoxes:v,handleEditEquation:function(e,t,n){let l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=[...j];v(s=l?(0,h.er)(e,t,s):(0,h.u0)(e,t,n,s))},nextToConfirm:Q,openCreatePuzzle:$,selectedSize:C,handleSaveUnFinish:ea,saving:Z}),"confirm"===m&&(0,l.jsxs)("form",{onSubmit:es,className:i().menu,children:[(0,l.jsx)("p",{className:i().errorMessage,children:F}),(0,l.jsx)("button",{type:"button",className:i().backButton,onClick:K,children:(0,l.jsx)(u,{})}),(0,l.jsx)("input",{type:"text",name:"puzzleName",placeholder:"Navn p\xe5 puslespil...",className:i().input,onChange:e=>M(e.target.value),value:G||"",minLength:6,maxLength:18,required:!0}),(0,l.jsxs)("div",{className:i().uploadBox,onClick:en,children:[(0,l.jsx)("input",{type:"file",name:"upload",accept:"image/jpeg",className:i().fileInput,required:!0,hidden:"hidden",onChange:et,ref:W}),(0,l.jsx)("span",{className:i().uploadFileName,children:b||"Klik her for at uploade JPEG-billede. Maks 10 MB"})]}),(0,l.jsx)("textarea",{type:"text",name:"description",placeholder:"Puslespilsbeskrivelse...",className:"".concat(i().input," ").concat(i().descriptionInput),minLength:6,maxLength:500,onChange:e=>P(e.target.value),value:E||""}),(0,l.jsxs)("button",{className:"".concat(i().buttons," ").concat(i().loadingSave),type:"submit",disabled:!b||Z,children:[Z&&(0,l.jsx)(f.Z,{}),"Gem"]})]}),"geek"===m&&(0,l.jsx)(I,{backButtonMain:Y,supabase:e,user_id:null,profile:_,handleEditPuzzle:ei}),"my"===m&&(0,l.jsx)(I,{backButtonMain:Y,supabase:e,user_id:n.user.id,profile:_,handleEditPuzzle:ei}),(0,l.jsx)(L.Z,{})]}):(0,l.jsx)(T.Z,{})]})}},8594:function(){},9034:function(e){e.exports={main:"Home_main__nLjiQ",greeting:"Home_greeting__PBgQH",menu:"Home_menu__2ncGe",backButton:"Home_backButton__p7X_l",selectBox:"Home_selectBox__F5xbe",input:"Home_input__ZarWZ",fileInput:"Home_fileInput__xvelA",buttons:"Home_buttons__OcSYZ",uploadBox:"Home_uploadBox__8V6oz",uploadFileName:"Home_uploadFileName__UpOAF",descriptionInput:"Home_descriptionInput__3uYuu",errorMessage:"Home_errorMessage__I_ltD",message:"Home_message__qpB0D",loadingSave:"Home_loadingSave__j6fXF"}},7977:function(e){e.exports={container:"copyUrlBox_container__3eXXe",url:"copyUrlBox_url__Shh4N",button:"copyUrlBox_button__1_Wy7"}},7364:function(e){e.exports={loadingAnimation:"loading_loadingAnimation__05UV3","loading-spin":"loading_loading-spin__PvNWf"}},6628:function(e){e.exports={container:"puzzleEditor_container__GQYRn",gridContainer:"puzzleEditor_gridContainer__Y_GCn",gridContainer4:"puzzleEditor_gridContainer4__8olfz",box:"puzzleEditor_box__U4K10",middler:"puzzleEditor_middler__S_WoH",wrongSides:"puzzleEditor_wrongSides__Ktyb9",middlerTop:"puzzleEditor_middlerTop__WKCEF",middlerTopContent:"puzzleEditor_middlerTopContent__ybdV9",middlerTextTopBottom:"puzzleEditor_middlerTextTopBottom___zM74",middlerBottom:"puzzleEditor_middlerBottom__MUQa_",middlerLeft:"puzzleEditor_middlerLeft__M6w_L",middlerBothSides:"puzzleEditor_middlerBothSides__h0HEp",middlerRight:"puzzleEditor_middlerRight__4Ofd8",editPopupBg:"puzzleEditor_editPopupBg__29aS2",editPopup:"puzzleEditor_editPopup__IpfiR",input:"puzzleEditor_input__6XtmZ",buttons:"puzzleEditor_buttons__ruu_8",nextBtn:"puzzleEditor_nextBtn__bBz48",disabled:"puzzleEditor_disabled__pcYXM",backBtn:"puzzleEditor_backBtn__IF2yk",savePopup:"puzzleEditor_savePopup__DErC7",savePopupControls:"puzzleEditor_savePopupControls__Rju7P",saveButtons:"puzzleEditor_saveButtons__M5F4D",closePopupBtn:"puzzleEditor_closePopupBtn__6lINr",mathButtonsContSingle:"puzzleEditor_mathButtonsContSingle__4COEB",mathButtonsCont:"puzzleEditor_mathButtonsCont__d45yP",mathButtonsInner:"puzzleEditor_mathButtonsInner__Bnz8Y",mathButtons:"puzzleEditor_mathButtons__djE4s",superscriptsCont:"puzzleEditor_superscriptsCont__1PbVw",output:"puzzleEditor_output__OFsgI",smallInput:"puzzleEditor_smallInput__N2n4J"}},5791:function(e){e.exports={container:"puzzleGlary_container__qOHfA",cardContainer:"puzzleGlary_cardContainer__TxhUT",cardText:"puzzleGlary_cardText__tx3j_",cardName:"puzzleGlary_cardName__X4bb_",cardSize:"puzzleGlary_cardSize__qO56X",cardDescription:"puzzleGlary_cardDescription__e0bx4",backButton:"puzzleGlary_backButton__0pcsL",imageCont:"puzzleGlary_imageCont__qQ9tl",puzzleImageContainer:"puzzleGlary_puzzleImageContainer__XXmo6",puzzleImage3:"puzzleGlary_puzzleImage3__EgaDi",puzzleImage4:"puzzleGlary_puzzleImage4__rPYy8",puzzleImageBox:"puzzleGlary_puzzleImageBox__OvDe9",noPuzzles:"puzzleGlary_noPuzzles__3iTCU",urlBox:"puzzleGlary_urlBox__KT4Rg",errorMessage:"puzzleGlary_errorMessage__Eornm",actionButtons:"puzzleGlary_actionButtons__OVX1r",actionButton:"puzzleGlary_actionButton__pklYH",puzzleImage:"puzzleGlary_puzzleImage__yVRVD",noImage:"puzzleGlary_noImage__EqkhA",deletePopupBg:"puzzleGlary_deletePopupBg__NDPmU",deletePopup:"puzzleGlary_deletePopup__swD_R",deletePopupButtonsCont:"puzzleGlary_deletePopupButtonsCont___X3k5",deletePopupButtons:"puzzleGlary_deletePopupButtons__VYJty"}},2703:function(e,t,n){"use strict";var l=n(414);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,a,o){if(o!==l){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1426:function(e,t,n){"use strict";e=n.nmd(e);var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=i(n(5775)),a=i(n(7294)),o=i(n(5697));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(e,t){var n=/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$[^\$\\]*(?:\\.[^\$\\]*)*\$/g,l=/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]/g,o=function(e,n){var l=void 0;try{l=s.default.renderToString(e,"block"===n?Object.assign({displayMode:!0},t):t)}catch(t){return console.error("couldn`t convert string",e),e}return l},i=[],r=e.match(n),u=e.split(n);return r?u.forEach(function(e,t){if(i.push({string:e,type:"text"}),r[t]){var n;i.push({string:"$"===(n=r[t])[0]&&"$"!==n[1]?n.slice(1,-1):n.slice(2,-2),type:r[t].match(l)?"block":"inline"})}}):i.push({string:e,type:"text"}),i.map(function(e){return"text"===e.type?e.string:a.default.createElement("span",{dangerouslySetInnerHTML:{__html:o(e.string,e.type)}})})},u=function(e){function t(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=r(e.children,{displayMode:e.displayMode,leqno:e.leqno,fleqn:e.fleqn,throwOnError:e.throwOnError,errorColor:e.errorColor,macros:e.macros,minRuleThickness:e.minRuleThickness,colorIsTextColor:e.colorIsTextColor,maxSize:e.maxSize,maxExpand:e.maxExpand,strict:e.strict,trust:e.trust});return t.unshift(null),t.unshift("span"),a.default.createElement.apply(null,t)}}]),t}(a.default.Component);u.propTypes={children:o.default.string,displayMode:o.default.bool,leqno:o.default.bool,fleqn:o.default.bool,throwOnError:o.default.bool,errorColor:o.default.string,macros:o.default.object,minRuleThickness:o.default.number,colorIsTextColor:o.default.bool,maxSize:o.default.number,maxExpand:o.default.number,strict:o.default.oneOfType([o.default.bool,o.default.string,o.default.func]),trust:o.default.oneOfType([o.default.bool,o.default.func])},u.defaultProps={children:"",displayMode:!1,output:"htmlAndMathml",leqno:!1,fleqn:!1,throwOnError:!0,errorColor:"#cc0000",macros:{},minRuleThickness:0,colorIsTextColor:!1,strict:"warn",trust:!1},e&&e.exports?e.exports=u:window.Latex=u}},function(e){e.O(0,[346,850,894,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);