webpackJsonp([8],{14:function(t,n,e){"use strict";n.a={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},15:function(t,n){t.exports=function(t,n,e,o,r,i){var a,c=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,c=t.default);var s="function"==typeof c?c.options:c;n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._compiled=!0),e&&(s.functional=!0),r&&(s._scopeId=r);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=f):o&&(f=o),f){var d=s.functional,p=d?s.render:s.beforeCreate;d?(s._injectStyles=f,s.render=function(t,n){return f.call(n),p(t,n)}):s.beforeCreate=p?[].concat(p,f):[f]}return{esModule:a,exports:c,options:s}}},16:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),r=e(5),i=e.n(r),a=e(6),c=e(19),u=e(7),s=e(20),f=e(39),d=e(41),p=(e.n(d),e(42)),l=(e.n(p),e(43));e.n(l);o.default.use(a.a),o.default.use(u.a),o.default.filter("money",function(t){return(t/100).toFixed(2)}),o.default.use(i.a);var h={mode:"history",routes:c.a},m=new a.a(h);m.beforeEach(function(t,n,e){i.a.LoadingBar.start(),s.a.title(t.meta.title),e()}),m.afterEach(function(){i.a.LoadingBar.finish(),window.scrollTo(0,0)});var v=new u.a.Store({state:{goods:[]},getters:{num:function(t){var n=t.goods,e=0;return n.forEach(function(t){e+=1*t.num}),e}},mutations:{getBannerList:function(t,n){t.bannerList=n},getKbList:function(t,n){t.kbList=n},add:function(t,n){-1!=t.goods.indexOf(n)?n.num++:t.goods.push(n)},remove:function(t,n){t.goods=t.goods.filter(function(t){return t!=n})}},actions:{add:function(t,n){(0,t.commit)("add",n)},remove:function(t,n){(0,t.commit)("remove",n)}}});new o.default({el:"#app",router:m,store:v,render:function(t){return t(f.a)}})},19:function(t,n,e){"use strict";var o=[{path:"/",meta:{title:""},component:function(t){return e.e(7).then(function(){var n=[e(45)];t.apply(null,n)}.bind(this)).catch(e.oe)},redirect:"/home",children:[{path:"/home",component:function(t){return e.e(0).then(function(){var n=[e(46)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/list",component:function(t){return e.e(1).then(function(){var n=[e(47)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shopping",component:function(t){return e.e(4).then(function(){var n=[e(48)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/mine",component:function(t){return e.e(5).then(function(){var n=[e(49)];t.apply(null,n)}.bind(this)).catch(e.oe)}}]},{path:"/cart",component:function(t){return e.e(2).then(function(){var n=[e(50)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/search",component:function(t){return e.e(6).then(function(){var n=[e(51)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/product",component:function(t){return e.e(3).then(function(){var n=[e(52)];t.apply(null,n)}.bind(this)).catch(e.oe)}}];n.a=o},20:function(t,n,e){"use strict";var o=e(8),r=e.n(o),i=e(38),a={};a.title=function(t){t=t?t+" - Home":"iView project",window.document.title=t};var c="development"===i.a?"http://127.0.0.1:8888":"production"===i.a?"https://www.url.com":"https://debug.url.com";a.ajax=r.a.create({baseURL:c,timeout:3e4}),n.a=a},38:function(t,n,e){"use strict";n.a="production"},39:function(t,n,e){"use strict";var o=e(14),r=e(40),i=e(15),a=i(o.a,r.a,!1,null,null,null);a.options.__file="src/app.vue",n.a=a.exports},40:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-view")],1)},r=[];o._withStripped=!0;var i={render:o,staticRenderFns:r};n.a=i},41:function(t,n){},42:function(t,n){},43:function(t,n){}},[16]);