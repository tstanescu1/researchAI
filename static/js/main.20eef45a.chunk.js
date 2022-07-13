(this.webpackJsonpresearchAI=this.webpackJsonpresearchAI||[]).push([[0],{123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),r=c(9),s=c.n(r),i=c(11),o=function(){return Object(a.jsxs)("div",{className:"next-steps",children:[Object(a.jsx)("h2",{className:"my-5 text-center",children:"What can I do next?"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(a.jsx)("h6",{className:"mb-3",children:Object(a.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/connections",children:[Object(a.jsx)("i",{className:"fas fa-link mr-2"}),"Configure other identity providers"]})}),Object(a.jsx)("p",{children:"Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server."})]}),Object(a.jsx)("div",{className:"col-md"}),Object(a.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(a.jsx)("h6",{className:"mb-3",children:Object(a.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/multifactor-authentication",children:[Object(a.jsx)("i",{className:"fas fa-link mr-2"}),"Enable Multi-Factor Authentication"]})}),Object(a.jsx)("p",{children:"Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported."})]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(a.jsx)("h6",{className:"mb-3",children:Object(a.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/anomaly-detection",children:[Object(a.jsx)("i",{className:"fas fa-link mr-2"}),"Anomaly Detection"]})}),Object(a.jsx)("p",{children:"Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts."})]}),Object(a.jsx)("div",{className:"col-md"}),Object(a.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(a.jsx)("h6",{className:"mb-3",children:Object(a.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/rules",children:[Object(a.jsx)("i",{className:"fas fa-link mr-2"}),"Learn About Rules"]})}),Object(a.jsx)("p",{children:"Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities."})]})]})]})},l=function(){return Object(a.jsxs)("footer",{className:"bg-light p-3 text-center",children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsxs)("p",{children:["Sample project provided by"," ",Object(a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com",children:"Auth0"})]})]})},d=function(){return Object(a.jsxs)("div",{className:"text-center hero",children:[Object(a.jsx)("img",{className:"mb-3 app-logo",src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png",alt:"React logo",width:"120"}),Object(a.jsx)("h1",{className:"mb-4",children:"React Sample Project"}),Object(a.jsxs)("p",{className:"lead",children:["This is a sample application that demonstrates an authentication flow for an SPA, using"," ",Object(a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/quickstart/spa/react",children:"React"})]})]})},j=function(){return Object(a.jsx)("div",{className:"spinner",children:Object(a.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},u=c(23),h=c(21),m=function(){var e=Object(h.b)(),t=e.loginWithRedirect,c=e.logout,n=e.isLoading,r=e.user;return Object(a.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(a.jsx)(u.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Home"}),r&&Object(a.jsx)(u.b,{to:"/profile",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Profile"}),r&&Object(a.jsx)(u.b,{to:"/research",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Research"}),!n&&!r&&Object(a.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){return t({appState:{target:"/"}})},children:"Log In"}),!n&&r&&Object(a.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){return c({returnTo:window.location.origin})},children:"Log Out"})]})},b=function(){return Object(a.jsx)("div",{className:"nav-container mb-3",children:Object(a.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"navbar-brand logo"}),Object(a.jsx)(m,{})]})})})},p=c(24),x=c.n(p),O=c(39),f=c(22),g=c(155),v=c(158),N=c(160),y=c(162),k=c(163),w=c(161),A=c(91),C=A.Configuration,T=A.OpenAIApi,I=function(){var e=Object(O.a)(x.a.mark((function e(t){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new C({apiKey:"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"}),a=new T(c),e.abrupt("return",new Promise((function(e,c){a.createCompletion({model:"text-davinci-002",prompt:"\n\nQ:".concat(t,"\nA"),temperature:0,max_tokens:250,top_p:1,frequency_penalty:.2,presence_penalty:0}).then((function(t){var a=t.data.choices[0].text;a&&a.length>1?e(a):c("No response")})).catch((function(e){c(e)}))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=Object(g.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)},logoContainer:{marginTop:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center"},logo:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),maxHeight:"75px"},textField:{width:"100%",marginBottom:e.spacing(2),marginTop:e.spacing(2)},disclaimer:{marginTop:e.spacing(2),color:e.palette.error.main}}})),S=Object(h.c)((function(){var e=R(),t=Object(n.useState)(""),c=Object(f.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(""),o=Object(f.a)(i,2),l=(o[0],o[1],function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(r);case 2:t=e.sent,s("".concat(r+t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Research Topics"}),Object(a.jsx)(v.a,{item:!0,xs:12,children:Object(a.jsx)(N.a,{className:e.logoContainer,maxWidth:"sm"})}),Object(a.jsx)(v.a,{item:!0,xs:12,children:Object(a.jsxs)(N.a,{maxWidth:"sm",children:[Object(a.jsx)(y.a,{className:e.textField,label:"Enter text and submit to get a completion",multiline:!0,minRows:10,value:r,onChange:function(e){return function(e){s(e.target.value)}(e)},variant:"outlined"}),Object(a.jsx)(k.a,{onClick:function(){return l()},variant:"contained",color:"primary",children:"Submit"}),Object(a.jsx)(w.a,{className:e.disclaimer,variant:"subtitle2",component:"h2"})]})})]})}),{onRedirecting:function(){return Object(a.jsx)(j,{})}}),_=function(){return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsx)("hr",{}),Object(a.jsx)(o,{})]})},F=Object(h.c)((function(){var e=Object(h.b)().user,t=e.name,c=e.picture,n=e.email;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"row align-items-center profile-header",children:[Object(a.jsx)("div",{className:"col-md-2 mb-3",children:Object(a.jsx)("img",{src:c,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(a.jsxs)("div",{className:"col-md text-center text-md-left",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("p",{className:"lead text-muted",children:n})]})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("pre",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify(e,null,2)})})]})}),{onRedirecting:function(){return Object(a.jsx)(j,{})}}),E=(c(123),function(e){var t=e.children,c=Object(i.f)(),n=window.location.origin.includes("localhost")?"http://localhost:4040/researchAI":"https://tstanescu1.github.io/researchAI";return Object(a.jsx)(h.a,{domain:"dev-54ljjxak.us.auth0.com",clientId:"y1O58tUyKVpM6TNuVa44gFAe4Nv2uyxa",redirectUri:n,onRedirectCallback:function(e){console.log("window",window.location.origin,null===e||void 0===e?void 0:e.returnTo,window.location.pathname),c.push((null===e||void 0===e?void 0:e.returnTo)||"")},children:t})}),L=function(){return Object(a.jsx)(E,{children:Object(a.jsxs)("div",{id:"app",className:"d-flex flex-column h-100",children:[Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:"container flex-grow-1",children:Object(a.jsx)("div",{className:"mt-5",children:Object(a.jsxs)(i.c,{children:[Object(a.jsx)(i.a,{path:"/",exact:!0,component:_}),Object(a.jsx)(i.a,{path:"/profile",component:F}),Object(a.jsx)(i.a,{path:"/research",component:S})]})})}),Object(a.jsx)(l,{})]})})};c(124);s.a.render(Object(a.jsx)(u.a,{basename:"/researchAI",children:Object(a.jsx)(L,{})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.20eef45a.chunk.js.map