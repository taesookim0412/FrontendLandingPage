(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(4),o=n.n(i),s=(n(15),n(16),n(17),n(3)),u=function(){return Object(s.b)()},a=s.c,d=n(2),l=Object(d.c)({name:"hero",initialState:{currentImg:"0",imgs:["landing/hero1/Image 1.png","landing/hero2/Image 2.png","landing/hero3/Image 3.png"]},reducers:{setCurrentImg:function(e,t){e.currentImg=t.payload.toString()},switchCurrentImg:function(e){e.currentImg=((parseInt(e.currentImg)+1)%3).toString()}}}),j=l.actions.setCurrentImg,f=function(e){return e.hero.imgs},b=function(e){return e.hero.currentImg},h=l.reducer,m=n(10),g=(n(24),n(1));function v(){var e=c.a.useState(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],i=Object(g.jsx)("div",{className:"hamburger__border "+(n?"expanded":"")});return Object(g.jsxs)("div",{className:"hamburger__container",children:[Object(g.jsxs)("div",{id:"hamburger__logo",children:[Object(g.jsxs)("div",{className:"container",onClick:function(){return r(!n)},children:[Object(g.jsx)("div",{className:"bar1"}),Object(g.jsx)("div",{className:"bar2"}),Object(g.jsx)("div",{className:"bar3"})]}),"EXP|CON"]}),i]})}n(26);function p(){return Object(g.jsx)("div",{id:"liquidcontainer",children:Object(g.jsx)("a",{className:"btn-mix-noborder","data-text":"TRY IT NOW",children:"TRY IT NOW"})})}function O(){var e=u(),t=a(f),n=a(b);function r(t){null!==document.getElementById("background")&&e(j(t))}return Object(g.jsxs)("div",{id:"hero",children:[Object(g.jsx)("img",{id:"background",src:t[parseInt(n)]}),Object(g.jsx)("div",{id:"header",children:Object(g.jsx)(v,{})}),Object(g.jsxs)("div",{id:"messages",children:[Object(g.jsx)("div",{id:"title",children:"INTERACTIVE CONCERT EXPERIENCE"}),Object(g.jsx)("div",{id:"message",children:"Experience your favourite artists like never before and from the comfort of your own home."}),Object(g.jsx)("div",{id:"button",children:Object(g.jsx)(p,{})})]}),Object(g.jsxs)("div",{id:"slider",children:[Object(g.jsx)("div",{className:"slider__circle",style:{backgroundColor:"0"===n?"white":"unset"},onClick:function(){return r(0)}}),Object(g.jsx)("div",{className:"slider__circle",style:{backgroundColor:"1"===n?"white":"unset"},onClick:function(){return r(1)}}),Object(g.jsx)("div",{className:"slider__circle",style:{backgroundColor:"2"===n?"white":"unset"},onClick:function(){return r(2)}})]})]})}n(27),n(28);var x=Object(d.c)({name:"cursor",initialState:{top:"120vh",left:"50vw",cursorYRadius:"0",cursorXRadius:"0",cursorHeight:"0px",cursorWidth:"0px"},reducers:{setTop:function(e,t){e.top="".concat((t.payload-parseInt(e.cursorYRadius)).toString(),"px")},setLeft:function(e,t){e.left="".concat((t.payload-parseInt(e.cursorXRadius)).toString(),"px")},setCursorYRadius:function(e,t){e.cursorYRadius=t.payload.toString(),e.cursorHeight="".concat((2*t.payload).toString(),"px")},setCursorXRadius:function(e,t){e.cursorXRadius=t.payload.toString(),e.cursorWidth="".concat((2*t.payload).toString(),"px")}}}),C=x.actions,I=C.setTop,y=C.setLeft,R=C.setCursorYRadius,w=C.setCursorXRadius,N=function(e){return e.cursor.top},k=function(e){return e.cursor.left},E=function(e){return e.cursor.cursorHeight},S=function(e){return e.cursor.cursorWidth},_=x.reducer;function T(e){var t=a(N),n=a(k),c=a(E),i=a(S),o=u();return Object(r.useEffect)((function(){o(R(e.cursorYRadius)),o(w(e.cursorXRadius))}),[]),Object(g.jsx)("div",{id:"cursor",style:{top:t,left:n,height:c,width:i}})}function X(){var e=u();Object(r.useEffect)((function(){}),[]);var t=Object(g.jsx)(T,{cursorYRadius:60,cursorXRadius:40});return Object(g.jsxs)("div",{id:"sound",onMouseMove:function(t){!function(e,t){t(y(e.pageX+10)),t(I(e.pageY-20))}(t,e)},children:[Object(g.jsx)(v,{}),t]})}function Y(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(O,{}),Object(g.jsx)(X,{})]})}var W=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(Y,{})})},B=n(7),A=n.n(B),H=n(9);function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var P=Object(d.b)("counter/fetchCount",function(){var e=Object(H.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(d.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(P.pending,(function(e){e.status="loading"})).addCase(P.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),L=J.actions,q=(L.increment,L.decrement,L.incrementByAmount,J.reducer),V=Object(d.a)({reducer:{counter:q,hero:h,cursor:_}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(s.a,{store:V,children:Object(g.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.56e466b3.chunk.js.map