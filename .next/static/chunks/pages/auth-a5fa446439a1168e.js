(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{2304:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return n(1578)}])},6367:function(e,t,n){"use strict";n.d(t,{bl:function(){return i.b},wT:function(){return o.wT},P$:function(){return s},o$:function(){return a}});var s={};n.r(s),n.d(s,{Vl:function(){return c}});var a={};n.r(a),n.d(a,{_l:function(){return l}});var r=n(5387),i=n(8791),o=n(4511);let c="\n  mutation CreateAd($input: CreateAdInput!, $condition: ModelAdConditionInput) {\n    createAd(input: $input, condition: $condition) {\n      id\n      cat\n      condition\n      currency\n      data\n      date\n      description\n      images\n      parrent\n      phone\n      physical\n      price\n      query\n      slug\n      source\n      title\n      type\n      uid\n      sortID\n      createdAt\n      updatedAt\n      _version\n      _deleted\n      _lastChangedAt\n    }\n  }\n",l="\n  query GetAd($id: ID!) {\n    getAd(id: $id) {\n      id\n      cat\n      condition\n      currency\n      data\n      date\n      description\n      images\n      parrent\n      phone\n      physical\n      price\n      query\n      slug\n      source\n      title\n      type\n      uid\n      sortID\n      createdAt\n      updatedAt\n      _version\n      _deleted\n      _lastChangedAt\n    }\n  }\n";r.d.configure({aws_project_region:"eu-west-1",aws_cognito_identity_pool_id:"eu-west-1:2f394adb-6fe3-42e6-9cfb-e552b456a0a8",aws_cognito_region:"eu-west-1",aws_user_files_s3_bucket:"eziktok-s3",aws_user_files_s3_bucket_region:"us-east-1"}),i.b.configure({aws_appsync_graphqlEndpoint:"https://f64iubro75ad5lc77hqjepavdu.appsync-api.eu-west-1.amazonaws.com/graphql",aws_appsync_region:"eu-west-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-cqo7gn4b4fcbfcl2miw67inaxy"})},993:function(e,t,n){"use strict";var s=n(5893),a=n(7294);let r={AuthError:"Потребителското име не може да бъде празно",InvalidParameterException:"Неуспешно доставяне на код - Моля попълнете всички полета",CodeDeliveryFailureException:"Неуспешно доставяне на код - моля, проверете имейла си и опитайте отново",CodeMismatchException:"Несъответствие на кода - Моля, проверете кода и опитайте отново",InvalidPasswordException:"Невалидна парола - Моля, проверете паролата си и опитайте отново",NotAuthorizedException:"Не е упълномощен - не сте упълномощени за достъп до този ресурс",PasswordResetRequiredException:"Изисква се нулиране на паролата - Моля, нулирайте паролата си и опитайте отново",TooManyFailedAttemptsException:"Твърде много неуспешни опити - акаунтът ви е заключен от съображения за сигурност. Моля, опитайте отново по-късно",TooManyRequestsException:"Твърде много заявки - моля, опитайте отново по-късно",UnauthorizedException:"Неупълномощен - не сте упълномощени за достъп до този ресурс",UsernameExistsException:"Потребителското име съществува - Моля, изберете друго потребителско име и опитайте отново",UserNotConfirmedException:"Потребителят не е потвърден - Моля, потвърдете акаунта си и опитайте отново",UserNotFoundException:"Потребителят не е намерен - Моля, проверете потребителското име и опитайте отново"},i=e=>{let{err:t}=e,[n,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{i(!1)},[t]),n?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)("div",{className:"mx-auto-cols-auto stickyerror flex p-3 bg-pink-700 rounded-b-lg justify-center items-center",children:[(0,s.jsx)("div",{className:"pr-3 absolute left-3 cursor-pointer",onClick:()=>i(!0),children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 shrink-0 cursor-pointer stroke-current",fill:"none",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,s.jsx)("div",{children:r[t.name]?r[t.name]:t.message})]})};t.Z=i},325:function(e,t,n){"use strict";var s=n(5893),a=n(7294),r=n(8240);let i=(e,t)=>{(0,a.useEffect)(()=>{if(e){e.style.height="0px";let t=e.scrollHeight;e.style.height="".concat(t,"px")}},[e,t])},o=e=>{let{name:t,placeholder:n,type:o,value:c,required:l,after:d,submitted:u}=e,[p,h]=(0,a.useState)(c||""),m=!p&&l&&u,g=(0,a.useRef)(null);return i(g.current,p),(0,s.jsxs)("div",{className:"hidden"===o?"hidden":"md:flex md:items-center mb-2",children:[(0,s.jsx)(r.Z,{required:l,placeholder:n||"",submitted:u}),(0,s.jsxs)("div",{className:"w-full flex",children:["textarea"===o?(0,s.jsx)("textarea",{...l?{required:!0}:{},ref:g,className:"".concat(m?"textarea-secondary border-2":"textarea-accent"," textarea w-full  overflow-hidden border-2  h-14 bgaccent "),value:p,rows:3,name:t,placeholder:n,onChange:e=>h(e.target.value)}):(0,s.jsx)("input",{...l?{required:!0}:{},type:o||"text",placeholder:n,className:"".concat(m?"inputerror":"inputx"," w-full flex-1 border-2"),name:t,value:p,alt:d,onChange:e=>h(e.target.value)}),d&&(0,s.jsx)("div",{className:"flex-1 flex justify-center items-center pl-2 text-xs",children:d})]})]})};t.Z=o},8240:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893);function a(e){let{placeholder:t,required:n}=e;return(0,s.jsx)("div",{className:"w-full md:w-1/4 pr-2 align-top flex md:justify-end",children:(0,s.jsxs)("div",{className:"self-start text-sm",children:[t," ",void 0!==n&&(0,s.jsx)("span",{className:"text-red-600",children:"*"})]})})}n(7294)},3122:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(7294);function a(e,t){let[n,a]=(0,s.useState)(()=>{try{let n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(s){return console.log(s),t}}),r=t=>{try{let s=t instanceof Function?t(n):t;a(s),window.localStorage.setItem(e,JSON.stringify(s))}catch(r){console.log(r)}};return[n,r]}},1578:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return g},default:function(){return x}});var s=n(5893),a=n(2183);n(2551);var r=a.g,i=n(1163),o=n.n(i),c=n(7294),l=n(993);let d=e=>{let{button:t,showSocial:n}=e;return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"form-control mt-6",children:(0,s.jsx)("button",{className:"btn btn-primary",type:"submit",children:t})}),n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"divider font-light",children:"ИЛИ"}),(0,s.jsx)("div",{className:"form-control",children:(0,s.jsxs)("button",{onClick(){a.g.federatedSignIn({provider:"Google"})},className:"btn border-none bg-white text-gray-900 hover:bg-white",children:[(0,s.jsxs)("svg",{width:24,height:24,xmlns:"http://www.w3.org/2000/svg",className:"mr-1",children:[(0,s.jsx)("path",{fill:"#4285F4",d:"M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"}),(0,s.jsx)("path",{fill:"#34A853",d:"M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24Z"}),(0,s.jsx)("path",{fill:"#FBBC05",d:"M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z"}),(0,s.jsx)("path",{fill:"#EA4335",d:"M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z"})]}),(0,s.jsx)("span",{className:"mr-4",children:"Google"})]})}),(0,s.jsx)("div",{className:"form-control mt-1",children:(0,s.jsxs)("button",{onClick(){a.g.federatedSignIn({provider:"Facebook"})},className:"btn border-none bg-white text-gray-900 hover:bg-white",children:[(0,s.jsx)("svg",{className:"mr-1 fill-blue-700",width:24,height:24,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),"Facebook"]})})]})]})};var u=n(3122),p=n(325),h=n(6367);r.configure({aws_project_region:"eu-west-1",aws_cognito_identity_pool_id:"eu-west-1:2f394adb-6fe3-42e6-9cfb-e552b456a0a8",aws_cognito_region:"eu-west-1",aws_user_pools_id:"eu-west-1_R2tLVDqB0",aws_user_pools_web_client_id:"5k2d69fvijvdmpcml3a510eeqd",oauth:{domain:"rudixops.auth.eu-west-1.amazoncognito.com",scope:["email","openid","profile"],redirectSignIn:"http://localhost:3000/auth/,https://eziktok.com/auth/",redirectSignOut:"http://localhost:3000/auth/,https://eziktok.com/auth/",responseType:"token"},federationTarget:"COGNITO_USER_AND_IDENTITY_POOLS",aws_cognito_username_attributes:[],aws_cognito_social_providers:["FACEBOOK","GOOGLE"],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:[],aws_cognito_password_protection_settings:{passwordPolicyMinLength:6,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"]});let m=e=>{let{refer:t}=e,n=(0,i.useRouter)(),r=n.query.sekcia,[m,g]=(0,c.useState)(r||"signin"),[x,f]=(0,c.useState)(null),[w,_]=(0,c.useState)({}),[j,v]=(0,u.Z)("user",null);async function b(){let e=await a.g.currentAuthenticatedUser();console.log(e);try{await h.bl.graphql((0,h.wT)(h.P$.Vl,{input:{id:e.attributes.sub,sortID:"users",condition:"USER",title:e.username,type:"user",description:e.attributes.email||e.signInUserSession.idToken.payload.email||""}})),o().push(t),v({username:e.username,sub:e.attributes.sub})}catch(n){o().push(t),v({username:e.username,sub:e.attributes.sub})}}(0,c.useEffect)(()=>{f(null)},[m]);let y=async e=>{e.preventDefault();let t=Object.values(e.target).filter(e=>"string"==typeof e.tagName&&"input"===e.tagName.toLowerCase()).reduce((e,t)=>({...e,[t.name]:t.value}),{}),{action:n,username:s,password:r,email:i,emailcode:o}=t;switch(_({...w,...t}),n){case"signin":a.g.signIn(s,r).then(async()=>b()).catch(e=>f(e));break;case"signup":a.g.signUp({username:s,password:r,attributes:{email:i}}).then(async()=>{g("confirmsignup")}).catch(e=>f(e));break;case"confirmsignup":await a.g.confirmSignUp(s,o).then(async()=>await a.g.signIn(s,r).then(async()=>b())).catch(e=>f(e));break;case"forgot":a.g.forgotPassword(s).then(async()=>{g("forgotchange")}).catch(e=>f(e));break;case"forgotchange":a.g.forgotPasswordSubmit(s,o,r).then(async()=>{g("signin")}).catch(e=>f(e))}};return(0,s.jsxs)(s.Fragment,{children:[x&&(0,s.jsx)(l.Z,{err:x}),(0,s.jsx)("div",{className:"flex justify-center items-center flex-col h-screen",children:(0,s.jsxs)("form",{method:"POST",onSubmit:y,children:["signin"===m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{name:"username",placeholder:"Потр. име",value:w.username,required:!1}),(0,s.jsx)(p.Z,{name:"password",placeholder:"Парола",type:"password",required:!1}),(0,s.jsx)(p.Z,{name:"action",type:"hidden",value:"signin",required:!1}),(0,s.jsx)(d,{button:"Вход",showForgot:!0,showSocial:!0}),(0,s.jsxs)("div",{className:"z-40 mt-3 flex",children:[(0,s.jsx)("a",{onClick:()=>g("signup"),className:"grow text-sm font-bold underline self-start cursor-pointer",children:"Регистрация"}),(0,s.jsx)("a",{onClick:()=>g("forgot"),className:"grow flex justify-end text-sm font-bold underline self-end cursor-pointer",children:"Забравена Парола?"})]})]}),"signup"===m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{name:"username",placeholder:"Потр. име"}),(0,s.jsx)(p.Z,{name:"email",placeholder:"E-mail"}),(0,s.jsx)(p.Z,{name:"password",placeholder:"Парола",type:"password"}),(0,s.jsx)(p.Z,{name:"passwordagain",placeholder:"Парола пак",type:"password"}),(0,s.jsx)(p.Z,{name:"action",type:"hidden",value:"signup"}),(0,s.jsx)(d,{left:{text:"Вход",href:"/auth/?section=signin"},button:"Регистрация",showSocial:!0}),(0,s.jsx)("div",{className:"z-40 mt-3 flex",children:(0,s.jsx)("a",{onClick:()=>g("signin"),className:"grow text-sm font-bold underline self-start cursor-pointer",children:"Вече имам регистрация"})})]}),"confirmsignup"===m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{name:"username",value:w.username,type:"hidden"}),(0,s.jsx)(p.Z,{name:"password",value:w.password,type:"hidden"}),(0,s.jsx)(p.Z,{name:"emailcode",placeholder:"Въведи кода от електронната поща"}),(0,s.jsx)(p.Z,{name:"action",type:"hidden",value:"confirmsignup"}),(0,s.jsx)(d,{button:"Потвърди "})]}),"forgot"===m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{name:"username",placeholder:"Потр. име"}),(0,s.jsx)(p.Z,{name:"action",type:"hidden",value:"forgot"}),(0,s.jsx)(d,{button:"Възстанови парола"})]}),"forgotchange"===m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{name:"username",value:w.username,type:"hidden"}),(0,s.jsx)(p.Z,{name:"emailcode",type:"number",placeholder:"Въведи кода от електронната поща",value:""}),(0,s.jsx)(p.Z,{name:"password",placeholder:"Парола",type:"password"}),(0,s.jsx)(p.Z,{name:"passwordagain",placeholder:"Парола пак",type:"password"}),(0,s.jsx)(p.Z,{name:"action",type:"hidden",value:"forgotchange"}),(0,s.jsx)(d,{button:"Смени Паролата"})]}),"signout"===m&&j&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{name:"action",type:"hidden",value:"signout"}),(0,s.jsx)(d,{button:"Изход"})]})]})})]})};var g=!0,x=m},6249:function(){}},function(e){e.O(0,[631,384,791,774,888,179],function(){return e(e.s=2304)}),_N_E=e.O()}]);