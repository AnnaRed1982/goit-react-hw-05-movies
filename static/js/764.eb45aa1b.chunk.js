"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{764:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),o=n(87),i=n(689),p=n(390),f=n(184);t.default=function(){var e,t=(0,s.useState)(null),n=(0,a.Z)(t,2),u=n[0],l=n[1],d=(0,s.useState)("start"),v=(0,a.Z)(d,2),h=v[0],m=v[1],x=(0,s.useState)([]),g=(0,a.Z)(x,2),y=g[0],w=g[1],k=(0,o.lr)(),b=(0,a.Z)(k,2),Z=b[0],j=b[1],S=null!==(e=Z.get("query"))&&void 0!==e?e:"",_=(0,i.TH)();(0,s.useEffect)((function(){m("pending");var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.WK)(S);case 3:t=e.sent,w(t),m("resolved"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),m("rejected"),l(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]);var q=function(e){e.preventDefault();var t=e.currentTarget;j({query:t.elements.query.value}),t.reset()};return"pending"===h?(0,f.jsx)("h2",{children:"Loading..."}):"rejected"===h?(0,f.jsxs)("h2",{children:["Whoops, something went wrong: ",u]}):"resolved"===h?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:q,children:[(0,f.jsx)("input",{type:"text",name:"query"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{children:y.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"".concat(e.id),state:{from:_},children:e.title})},e.id)}))})]}):(0,f.jsxs)("form",{onSubmit:q,children:[(0,f.jsx)("input",{type:"text",name:"query"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})}},390:function(e,t,n){n.d(t,{Hx:function(){return l},WK:function(){return d},Y5:function(){return p},uS:function(){return i},uV:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="7b4917c1c89b56950d6ac1f3ef5382d2",o="https://api.themoviedb.org/3",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=764.eb45aa1b.chunk.js.map