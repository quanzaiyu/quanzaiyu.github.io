(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{208:function(t,e,n){"use strict";var r=n(97);n.n(r).a},352:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),o=n(94),a=n.n(o),i=n(2),u={data:()=>({data:{footers:["MIT Licensed | Copyright © 2018-present  滇ICP备16006294号",'Design by <a href="/">Quanzaiyu</a> | Power by <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a> | Hosted by <a href="https://pages.coding.me" target="_blank" style="font-weight: bold">Coding Pages</a>']},isSidebarOpen:!1}),beforeCreate(){this.$on("sw-updated",t=>{console.log("user:sw-updated")})},computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(i.n)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){window.addEventListener("scroll",this.onScroll),a.a.configure({showSpinner:!0}),this.$router.beforeEach((t,e,n)=>{t.path===e.path||s.a.component(t.name)||a.a.start(),n()}),this.$router.afterEach(()=>{a.a.done(),this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=(n(95),n(96),n(208),n(0)),l=Object(c.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t.$page.frontmatter.layout?n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._t("page-bottom",null,{slot:"bottom"})],2),t.data.footers&&t.data.footers.length?n("div",{staticClass:"footers"},t._l(t.data.footers,function(e){return n("p",[n("span",{domProps:{innerHTML:t._s(e)}})])}),0):t._e()],1)},[],!1,null,"2514cbf4",null);l.options.__file="Layout.vue";e.default=l.exports},92:function(t,e,n){},93:function(t,e,n){},94:function(t,e,n){var r,s;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(s="function"==typeof(r=function(){var t,e,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(t,e,n){return t<e?e:t>n?n:t}function o(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(r[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=s(t,r.minimum,1),n.status=1===t?null:t;var u=n.render(!e),c=u.querySelector(r.barSelector),l=r.speed,d=r.easing;return u.offsetWidth,a(function(e){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),i(c,function(t,e,n){var s;return(s="translate3d"===r.positionUsing?{transform:"translate3d("+o(t)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+o(t)+"%,0)"}:{"margin-left":o(t)+"%"}).transition="all "+e+"ms "+n,s}(t,l,d)),1===t?(i(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){i(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){n.remove(),e()},l)},l)):setTimeout(e,l)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout(function(){n.status&&(n.trickle(),t())},r.trickleSpeed)};return r.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*s(Math.random()*e,.1,.95)),e=s(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},t=0,e=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&n.start(),t++,e++,r.always(function(){0==--e?(t=0,n.done()):n.set((t-e)/t)}),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=r.template;var s,a=e.querySelector(r.barSelector),u=t?"-100":o(n.status||0),l=document.querySelector(r.parent);return i(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(s=e.querySelector(r.spinnerSelector))&&h(s),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(e),e},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(r.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&h(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var a=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),i=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,s=t.length,o=e.charAt(0).toUpperCase()+e.slice(1);s--;)if((r=t[s]+o)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,s,o=arguments;if(2==o.length)for(n in e)void 0!==(s=e[n])&&e.hasOwnProperty(n)&&r(t,n,s);else r(t,o[1],o[2])}}();function u(t,e){var n="string"==typeof t?t:d(t);return n.indexOf(" "+e+" ")>=0}function c(t,e){var n=d(t),r=n+e;u(n,e)||(t.className=r.substring(1))}function l(t,e){var n,r=d(t);u(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function d(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?r.call(e,n,e,t):r)||(t.exports=s)},95:function(t,e,n){"use strict";var r=n(92);n.n(r).a},96:function(t,e,n){"use strict";var r=n(93);n.n(r).a},97:function(t,e,n){}}]);