(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(0),r=n.n(a),o=n(193);var l=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.data.contentfulMyCoolBlog,t=this.props.pageContext,n=t.previous,a=t.next;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"avenir",padding:50,marginBottom:0,textDecoration:"none"}},r.a.createElement("h1",null,e.title),r.a.createElement("div",{style:{padding:30},dangerouslySetInnerHTML:{__html:e.body.childContentfulRichText.html}}),r.a.createElement("div",null,a&&r.a.createElement(o.a,{to:a.slug},a.title)),r.a.createElement("div",null,n&&r.a.createElement(o.a,{to:n.slug},n.title," ")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,{to:"/"},"Home")))},a}(r.a.Component),u="1392339773";t.default=l},192:function(e,t,n){var a;e.exports=(a=n(194))&&a.default||a},193:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var a=n(0),r=n.n(a),o=n(66),l=n.n(o);n.d(t,"a",function(){return l.a});n(192),n(9).default.enqueue;var u=r.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,l=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,l&&o(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:n,render:a||o,staticQueryData:e})})}},194:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(91);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---src-templates-blog-post-contentful-js-761a00e7afd54b1ac36b.js.map