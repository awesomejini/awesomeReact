(this.webpackJsonpreact_redux=this.webpackJsonpreact_redux||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(9),i=n.n(a),u=(n(16),n(2)),s=n(3),j=n(5),o=n(4),b=(n(17),n(0)),O=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={size:1},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Add Number"}),Object(b.jsx)("input",{type:"button",value:"+",onClick:function(){t.props.onClick(t.state.size)}}),Object(b.jsx)("input",{type:"text",value:this.state.size,onChange:function(e){t.setState({size:e.target.value})}})]})}}]),n}(c.Component),l=n(8),h=n(10),d=Object(h.a)((function(t,e){return void 0===t?{number:0}:"INCREMENT"===e.type?Object(l.a)(Object(l.a)({},t),{},{number:t.number+e.size}):t}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),p=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)(O,{onClick:function(t){d.dispatch({type:"INCREMENT",size:t})}})}}]),n}(c.Component),f=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Add Number Root"}),Object(b.jsx)(p,{})]})}}]),n}(c.Component),v=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).state={number:d.getState().number},d.subscribe((function(){c.setState({number:d.getState().number})})),c}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Display Number"}),Object(b.jsx)("input",{type:"text",value:this.state.number,readOnly:!0})]})}}]),n}(c.Component),x=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Display Number Root"}),Object(b.jsx)(v,{})]})}}]),n}(c.Component),m=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={number:0},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Root"}),Object(b.jsx)(f,{}),Object(b.jsx)(x,{})]})}}]),n}(c.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),y()}},[[21,1,2]]]);
//# sourceMappingURL=main.1832438d.chunk.js.map