!function(e){function t(t){for(var n,c,i=t[0],o=t[1],l=t[2],p=0,m=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);m.length;)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={0:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;s.push([45,1]),a()}({105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),i=(a(51),a(10)),o=a.n(i),l=a(11),u=a.n(l),p=a(12),m=a.n(p),_=a(13),d=a.n(_),f=a(14),h=a.n(f),v=a(18),b=a(9),g=a(2),y=(a(59),function(){return r.a.createElement("div",{className:"ui-about"},r.a.createElement("div",{className:"ui-about__avatar"},r.a.createElement("img",{className:"ui-about__avatar__img",src:"/assets/images/avatar.png"})),r.a.createElement("div",{className:"ui-about__bio"},"I am a full-stack web developer and general-purpose software developer with a vision to build easy-to-use and easy-to-maintain applications. With a professional work experience of more than 6 years, I have contributed to numerous open-source projects on GitHub and NPM. If I am not writing code, I am probably writing on Medium about programming. I am passionate about developing products that simplify our lives. I love challenging and complex tasks. Always keen to meet new people, learn from them, and help them to achieve common goals."),r.a.createElement("a",{href:"mailto:thatisuday@gmail.com",className:"ui-about__request-cv"},"Request CV"))});y.defaultProps={},y.displayName="AboutView";var E=function(e){function t(e){var a;return o()(this,t),(a=m()(this,d()(t).call(this,e))).state={},a}return h()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement(y,null)}}]),t}(r.a.Component);E.displayName="About";a(60);var N=function(){return r.a.createElement("div",{className:"ui-contact"},r.a.createElement("a",{href:"mailto:thatisuday@gmail.com",className:"ui-contact__section"},r.a.createElement("div",{className:"ui-contact__section__title"},"Email"),r.a.createElement("div",{className:"ui-contact__section__value"},"thatisuday@gmail.com")),r.a.createElement("a",{href:"https://medium.com/@thatisuday",target:"_blank",className:"ui-contact__section"},r.a.createElement("div",{className:"ui-contact__section__title"},"medium"),r.a.createElement("div",{className:"ui-contact__section__value"},"@thatisuday")),r.a.createElement("a",{href:"https://github.com/thatisuday",target:"_blank",className:"ui-contact__section"},r.a.createElement("div",{className:"ui-contact__section__title"},"github"),r.a.createElement("div",{className:"ui-contact__section__value"},"@thatisuday")),r.a.createElement("a",{href:"https://twitter.com/thatisuday",target:"_blank",className:"ui-contact__section"},r.a.createElement("div",{className:"ui-contact__section__title"},"twitter"),r.a.createElement("div",{className:"ui-contact__section__value"},"@thatisuday")),r.a.createElement("a",{href:"https://instagram.com/thatisuday",target:"_blank",className:"ui-contact__section"},r.a.createElement("div",{className:"ui-contact__section__title"},"instagram"),r.a.createElement("div",{className:"ui-contact__section__value"},"@thatisuday")),r.a.createElement("a",{href:"https://stackoverflow.com/users/2790983/uday-hiwarale",target:"_blank",className:"ui-contact__section"},r.a.createElement("div",{className:"ui-contact__section__title"},"stack overflow"),r.a.createElement("div",{className:"ui-contact__section__value"},"@2790983")))};N.defaultProps={},N.displayName="ContactView";var j=function(e){function t(e){var a;return o()(this,t),(a=m()(this,d()(t).call(this,e))).state={},a}return h()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement(N,null)}}]),t}(r.a.Component);j.displayName="Contact";a(61);var k=a(6),w=a.n(k),P=a(16),O=a.n(P),T=a(8),C=a(22),x=a.n(C),S=function(e){return r.a.createElement("div",{className:"ui-projects"},r.a.createElement("div",{className:"ui-projects__list"},e.projects.map(function(e){return r.a.createElement("a",{key:e.id,href:e.url,target:"_blank",className:"ui-projects__list__item"},r.a.createElement("div",{className:"ui-projects__list__item__title"},e.title),r.a.createElement("div",{className:"ui-projects__list__item__description"},e.description))})),r.a.createElement("a",{className:"ui-projects__explore",target:"_blank",href:"http://github.com/thatisuday"},"Explore More"))};S.defaultProps={projects:[]},S.displayName="ProjectsView";var A=function(){return r.a.createElement("div",{className:"ui-projects-preloader"},r.a.createElement(x.a,{type:"TailSpin",color:"#000",height:100,width:100}))};A.defaultProps={},A.displayName="ProjectsPreloaderView";var D=a(23),M=a.n(D),I=function(){var e=O()(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.jsonbin.io/b/601813f2abdf9c55679626ca");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"ADD_PROJECTS",payload:e}},G=function(e){function t(e){var a;return o()(this,t),(a=m()(this,d()(t).call(this,e))).state={projects:e.projects},0===e.projects.length&&a.fetchProjects(),a}var a;return h()(t,e),u()(t,[{key:"fetchProjects",value:(a=O()(w.a.mark(function e(){var t,a=this;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({projects:t},function(){a.props.addProjects(t)});case 4:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){return 0===this.state.projects.length?r.a.createElement(A,null):r.a.createElement(S,{projects:this.state.projects})}}]),t}(r.a.Component);G.defaultProps={projects:[]},G.displayName="_Projects";var J=Object(v.b)(function(e){return{projects:e.projects}},function(e){return{addProjects:Object(T.bindActionCreators)(V,e)}})(G),W=(a(99),a(26)),R=a.n(W),B=function(){var e=O()(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.jsonbin.io/b/60181423abdf9c55679626fb");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),H=a(43),q=a.n(H),F=a(20),U=function(e){var t=Object(F.isEmpty)(e.selectedTopic)?e.posts:Object(F.filter)(e.posts,function(t){return Object(F.includes)(t.languages,e.selectedTopic)});return r.a.createElement("div",{className:"ui-posts"},r.a.createElement("div",{className:"ui-posts__filter"},r.a.createElement("select",{onChange:function(t){return e.onTopicChange(t.target.value)},value:e.selectedTopic},e.topics.map(function(e){var t=q()(e,2),a=t[0],n=t[1];return r.a.createElement("option",{key:a,value:a},n)}))),r.a.createElement("div",{className:"ui-posts__list"},t.map(function(e){return r.a.createElement("a",{key:e.title,href:e.url,target:"_blank",className:"ui-posts__list__item"},r.a.createElement("div",{className:"ui-posts__list__item__title"},e.title),r.a.createElement("div",{className:"ui-posts__list__item__description"},e.description))})),r.a.createElement("a",{className:"ui-posts__explore",target:"_blank",href:"http://medium.com/@thatisuday"},"Explore More"))};U.defaultProps={onTopicChange:F.noop,topics:{},selectedTopic:"",posts:[]},U.displayName="PostsView";var z=function(){return r.a.createElement("div",{className:"ui-posts-preloader"},r.a.createElement(x.a,{type:"TailSpin",color:"#000",height:100,width:100}))};z.defaultProps={},z.displayName="PostsPreloaderView";var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"ADD_POSTS",payload:e}},L=function(e){function t(e){var a;return o()(this,t),(a=m()(this,d()(t).call(this,e))).onTopicChange=a.onTopicChange.bind(R()(a)),a.state={posts:e.posts,selectedTopic:""},a.data={topics:[["","<< All Topics >>"],["js","JavaScript"],["ts","TypeScript"],["web","Web Development"],["wasm","WASM"],["electron","Electron.js"],["node","Node.js"],["npm","NPM"],["pwa","PWA"],["go","Go (Golang)"],["bash","Bash Scripting"],["dart","Dart"],["docker","Docker"],["devops","DevOps"],["security","Security"],["iot","IoT"],["nginx","Nginx"],["db","DBMS"],["misc","Miscellaneous"]]},0===e.posts.length&&a.fetchPosts(),a}var a;return h()(t,e),u()(t,[{key:"fetchPosts",value:(a=O()(w.a.mark(function e(){var t,a=this;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({posts:t},function(){a.props.addPosts(t)});case 4:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"onTopicChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({selectedTopic:e})}},{key:"render",value:function(){return 0===this.state.posts.length?r.a.createElement(z,null):r.a.createElement(U,{posts:this.state.posts,selectedTopic:this.state.selectedTopic,topics:this.data.topics,onTopicChange:this.onTopicChange})}}]),t}(r.a.Component);L.defaultProps={posts:[]},L.displayName="_Posts";var Q=Object(v.b)(function(e){return{posts:e.posts}},function(e){return{addPosts:Object(T.bindActionCreators)(K,e)}})(L),X=function(){return r.a.createElement("div",{className:"ui-app"},r.a.createElement("div",{className:"ui-app__logo"},"Uday Hiwarale"),r.a.createElement("div",{className:"ui-app__nav"},r.a.createElement(b.b,{className:"ui-app__nav__item",activeClassName:"ui-app__nav__item--active",exact:!0,to:"/"},"About"),r.a.createElement(b.b,{className:"ui-app__nav__item",activeClassName:"ui-app__nav__item--active",to:"/posts"},"Posts"),r.a.createElement(b.b,{className:"ui-app__nav__item",activeClassName:"ui-app__nav__item--active",to:"/projects"},"Projects"),r.a.createElement(b.b,{className:"ui-app__nav__item",activeClassName:"ui-app__nav__item--active",to:"/contact"},"Contact")),r.a.createElement("div",{className:"ui-app__routes"},r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/posts",component:Q}),r.a.createElement(g.a,{path:"/projects",component:J}),r.a.createElement(g.a,{path:"/contact",component:j}),r.a.createElement(g.a,{path:"/",component:E}))),r.a.createElement("div",{className:"ui-app__footer"},r.a.createElement("div",{className:"ui-app__footer__links"},r.a.createElement("a",{className:"ui-app__footer__links__link",href:"https://medium.com/@thatisuday",target:"_blank"},"Medium"),r.a.createElement("a",{className:"ui-app__footer__links__link",href:"https://github.com/thatisuday",target:"_blank"},"GitHub"),r.a.createElement("a",{className:"ui-app__footer__links__link",href:"https://twitter.com/thatisuday",target:"_blank"},"Twitter"),r.a.createElement("a",{className:"ui-app__footer__links__link",href:"https://instagram.com/thatisuday",target:"_blank"},"Instagram")),r.a.createElement("div",{className:"ui-app__footer__source-code"},r.a.createElement("a",{className:"ui-app__footer__source-code__link",href:"https://github.com/thatisuday/thatisuday.com",target:"_blank"},"(Source Code)"))))};X.defaultProps={},X.displayName="AppView";var Y=a(44),Z=Object(T.combineReducers)({projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.type,n=t.payload;switch(a){case"ADD_PROJECTS":return n;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.type,n=t.payload;switch(a){case"ADD_POSTS":return n;default:return e}}}),$=Object(T.createStore)(Z,{projects:[],posts:[]},Object(Y.composeWithDevTools)()),ee=function(e){function t(e){var a;return o()(this,t),(a=m()(this,d()(t).call(this,e))).state={},a}return h()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement(v.a,{store:$},r.a.createElement(b.a,null,r.a.createElement(X,null)))}}]),t}(r.a.Component);ee.displayName="App",console.log("(logged at /src/index.js) CONFIG => ",Object({env:"production",endpoints:Object({projects:"https://api.jsonbin.io/b/601813f2abdf9c55679626ca",posts:"https://api.jsonbin.io/b/6018140dabdf9c55679626e2",articles:"https://api.jsonbin.io/b/60181423abdf9c55679626fb"})})),c.a.render(r.a.createElement(ee,null),document.getElementById("app"))},45:function(e,t,a){a(46),e.exports=a(105)},46:function(e,t,a){},51:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},99:function(e,t,a){}});
//# sourceMappingURL=main.js.map