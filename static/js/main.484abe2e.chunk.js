(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),i=n(4),s=n.n(i),a=(n(10),n(2));var u=function(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)("random"),s=Object(a.a)(i,2),u=s[0],j=s[1],h=Object(o.useState)(""),l=Object(a.a)(h,2),d=l[0],b=l[1];return Object(o.useEffect)((function(){fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)("div",{class:"app",children:[Object(c.jsx)("h1",{children:"Chuck Norris Jokes"}),Object(c.jsx)("span",{children:"Category"}),":",Object(c.jsxs)("select",{name:"categories",id:"categories",onChange:function(e){j(e.target.value)},children:[Object(c.jsx)("option",{value:"random",selected:!0,children:"random"}),n.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]}),Object(c.jsx)("p",{children:d}),Object(c.jsx)("button",{onClick:function(){var e;e="random"===u?"https://api.chucknorris.io/jokes/random":"https://api.chucknorris.io/jokes/random?category=".concat(u),fetch(e).then((function(e){return e.json()})).then((function(e){b(e.value)})).catch((function(e){return console.log(e)}))},children:"Get a Joke"})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),j()}},[[11,1,2]]]);
//# sourceMappingURL=main.484abe2e.chunk.js.map