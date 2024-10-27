var app=function(){"use strict";function e(){}function s(e){return e()}function t(){return Object.create(null)}function n(e){e.forEach(s)}function i(e){return"function"==typeof e}function l(e,s){return e!=e?s==s:e!==s||e&&"object"==typeof e||"function"==typeof e}function a(s,t,n){s.$$.on_destroy.push(function(s,...t){if(null==s)return e;const n=s.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}(t,n))}function c(e,s){e.appendChild(s)}function r(e,s,t){e.insertBefore(s,t||null)}function o(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function v(){return u(" ")}function p(e,s,t){null==t?e.removeAttribute(s):e.getAttribute(s)!==t&&e.setAttribute(s,t)}function m(e,s,t){e.classList[t?"add":"remove"](s)}let g;function h(e){g=e}function f(){if(!g)throw new Error("Function called outside component initialization");return g}function y(e){f().$$.on_mount.push(e)}function b(e){f().$$.on_destroy.push(e)}const $=[],w=[];let k=[];const A=[],x=Promise.resolve();let E=!1;function S(e){k.push(e)}const q=new Set;let j=0;function L(){if(0!==j)return;const e=g;do{try{for(;j<$.length;){const e=$[j];j++,h(e),O(e.$$)}}catch(e){throw $.length=0,j=0,e}for(h(null),$.length=0,j=0;w.length;)w.pop()();for(let e=0;e<k.length;e+=1){const s=k[e];q.has(s)||(q.add(s),s())}k.length=0}while($.length);for(;A.length;)A.pop()();E=!1,q.clear(),h(e)}function O(e){if(null!==e.fragment){e.update(),n(e.before_update);const s=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,s),e.after_update.forEach(S)}}const _=new Set;let T;function z(){T={r:0,c:[],p:T}}function C(){T.r||n(T.c),T=T.p}function M(e,s){e&&e.i&&(_.delete(e),e.i(s))}function H(e,s,t,n){if(e&&e.o){if(_.has(e))return;_.add(e),T.c.push((()=>{_.delete(e),n&&(t&&e.d(1),n())})),e.o(s)}else n&&n()}function B(e){e&&e.c()}function I(e,t,l,a){const{fragment:c,after_update:r}=e.$$;c&&c.m(t,l),a||S((()=>{const t=e.$$.on_mount.map(s).filter(i);e.$$.on_destroy?e.$$.on_destroy.push(...t):n(t),e.$$.on_mount=[]})),r.forEach(S)}function N(e,s){const t=e.$$;null!==t.fragment&&(!function(e){const s=[],t=[];k.forEach((n=>-1===e.indexOf(n)?s.push(n):t.push(n))),t.forEach((e=>e())),k=s}(t.after_update),n(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}function W(e,s){-1===e.$$.dirty[0]&&($.push(e),E||(E=!0,x.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[s/31|0]|=1<<s%31}function P(s,i,l,a,c,r,d,u=[-1]){const v=g;h(s);const p=s.$$={fragment:null,ctx:[],props:r,update:e,not_equal:c,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(v?v.$$.context:[])),callbacks:t(),dirty:u,skip_bound:!1,root:i.target||v.$$.root};d&&d(p.root);let m=!1;if(p.ctx=l?l(s,i.props||{},((e,t,...n)=>{const i=n.length?n[0]:t;return p.ctx&&c(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),m&&W(s,e)),t})):[],p.update(),m=!0,n(p.before_update),p.fragment=!!a&&a(p.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);p.fragment&&p.fragment.l(e),e.forEach(o)}else p.fragment&&p.fragment.c();i.intro&&M(s.$$.fragment),I(s,i.target,i.anchor,i.customElement),L()}h(v)}class F{$destroy(){N(this,1),this.$destroy=e}$on(s,t){if(!i(t))return e;const n=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var s;this.$$set&&(s=e,0!==Object.keys(s).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const R=[];function D(s,t=e){let n;const i=new Set;function a(e){if(l(s,e)&&(s=e,n)){const e=!R.length;for(const e of i)e[1](),R.push(e,s);if(e){for(let e=0;e<R.length;e+=2)R[e][0](R[e+1]);R.length=0}}}return{set:a,update:function(e){a(e(s))},subscribe:function(l,c=e){const r=[l,c];return i.add(r),1===i.size&&(n=t(a)||e),l(s),()=>{i.delete(r),0===i.size&&n&&(n(),n=null)}}}}const G=D({fix:!1,wide:!1,drop:!1}),V=D({split:!1}),U=D({chosen:"cat1"});function Y(s){let t;return{c(){t=d("div"),t.innerHTML='<button class="svelte-jyy6p4">Services</button>',p(t,"class","svelte-jyy6p4"),m(t,"margined",s[0]),m(t,"unmargined",!s[0])},m(e,s){r(e,t,s)},p(e,[s]){1&s&&m(t,"margined",e[0]),1&s&&m(t,"unmargined",!e[0])},i:e,o:e,d(e){e&&o(t)}}}function K(){document.querySelector("#services").scrollIntoView({behavior:"smooth"})}function X(e,s,t){let n,{margined:i=!1}=s;return y((()=>{n=document.querySelector("button"),n.addEventListener("click",K)})),b((()=>{n&&n.removeEventListener("click",K)})),e.$$set=e=>{"margined"in e&&t(0,i=e.margined)},[i]}class J extends F{constructor(e){super(),P(this,e,X,Y,l,{margined:0})}}function Q(e){let s;return{c(){s=d("div"),p(s,"class","logo img svelte-1p7iitk")},m(e,t){r(e,s,t)},d(e){e&&o(s)}}}function Z(e){let s;return{c(){s=d("p"),s.innerHTML='adamant<span class="svelte-1p7iitk">.</span>',p(s,"class","name svelte-1p7iitk")},m(e,t){r(e,s,t)},d(e){e&&o(s)}}}function ee(e){let s;function t(e,s){return e[0]?te:se}let n=t(e),i=n(e);return{c(){i.c(),s=u("")},m(e,t){i.m(e,t),r(e,s,t)},p(e,l){n!==(n=t(e))&&(i.d(1),i=n(e),i&&(i.c(),i.m(s.parentNode,s)))},d(e){i.d(e),e&&o(s)}}}function se(e){let s;return{c(){s=d("div"),p(s,"class","menu img svelte-1p7iitk")},m(e,t){r(e,s,t)},d(e){e&&o(s)}}}function te(e){let s;return{c(){s=d("div"),p(s,"class","close img svelte-1p7iitk")},m(e,t){r(e,s,t)},d(e){e&&o(s)}}}function ne(e){let s;return{c(){s=d("div"),s.innerHTML='<a href="#about" class="svelte-1p7iitk"><p class="svelte-1p7iitk">About</p></a> \n            <a href="#vision" class="svelte-1p7iitk"><p class="svelte-1p7iitk">Vision</p></a> \n            <a href="#services" class="svelte-1p7iitk"><p class="svelte-1p7iitk">Services</p></a> \n            <a href="#distinction" class="svelte-1p7iitk"><p class="svelte-1p7iitk">Distinction</p></a> \n            <a href="#approach" class="svelte-1p7iitk"><p class="svelte-1p7iitk">Approach</p></a> \n            <a href="#contact" class="svelte-1p7iitk"><p class="svelte-1p7iitk">Contact</p></a>',p(s,"class","bottom svelte-1p7iitk")},m(e,t){r(e,s,t)},d(e){e&&o(s)}}}function ie(e){let s,t;return s=new J({}),{c(){B(s.$$.fragment)},m(e,n){I(s,e,n),t=!0},i(e){t||(M(s.$$.fragment,e),t=!0)},o(e){H(s.$$.fragment,e),t=!1},d(e){N(s,e)}}}function le(e){let s,t,n,i,l,a;function u(e,s){return e[2]?Z:Q}let g=u(e),h=g(e),f=!e[1]&&ee(e),y=(e[0]||e[1])&&ne(),b=e[1]&&ie();return{c(){s=d("nav"),t=d("div"),h.c(),n=v(),f&&f.c(),i=v(),y&&y.c(),l=v(),b&&b.c(),p(t,"class","top svelte-1p7iitk"),p(s,"class","svelte-1p7iitk"),m(s,"fixation",e[2]),m(s,"wide",e[1]),m(s,"scrolled_wide",e[2]&&e[1])},m(e,o){r(e,s,o),c(s,t),h.m(t,null),c(t,n),f&&f.m(t,null),c(s,i),y&&y.m(s,null),c(s,l),b&&b.m(s,null),a=!0},p(e,[i]){g!==(g=u(e))&&(h.d(1),h=g(e),h&&(h.c(),h.m(t,n))),e[1]?f&&(f.d(1),f=null):f?f.p(e,i):(f=ee(e),f.c(),f.m(t,null)),e[0]||e[1]?y||(y=ne(),y.c(),y.m(s,l)):y&&(y.d(1),y=null),e[1]?b?2&i&&M(b,1):(b=ie(),b.c(),M(b,1),b.m(s,null)):b&&(z(),H(b,1,1,(()=>{b=null})),C()),(!a||4&i)&&m(s,"fixation",e[2]),(!a||2&i)&&m(s,"wide",e[1]),(!a||6&i)&&m(s,"scrolled_wide",e[2]&&e[1])},i(e){a||(M(b),a=!0)},o(e){H(b),a=!1},d(e){e&&o(s),h.d(),f&&f.d(),y&&y.d(),b&&b.d()}}}function ae(e,s,t){let n,i,l,c;function r(e){let s=e.target;s==document.querySelector(".menu")?G.update((e=>({...e,drop:!0}))):(document.querySelector(".close"),G.update((e=>({...e,drop:!1}))))}function o(){window.scrollY>document.querySelector("#landing").clientHeight?G.update((e=>({...e,fix:!0}))):G.update((e=>({...e,fix:!1})))}return a(e,G,(e=>t(3,c=e))),y((()=>{document.querySelector("nav").addEventListener("click",(e=>{r(e)})),o(),window.addEventListener("scroll",o)})),b((()=>{top.removeEventListener("click",(e=>{r(e)})),window.removeEventListener("scroll",o)})),e.$$.update=()=>{8&e.$$.dirty&&t(2,n=c.fix),8&e.$$.dirty&&t(1,i=c.wide),8&e.$$.dirty&&t(0,l=c.drop)},[l,i,n,c]}class ce extends F{constructor(e){super(),P(this,e,ae,le,l,{})}}function re(s){let t;return{c(){t=d("div"),t.innerHTML='<div class="glow svelte-25b5sh"></div> \n\n    \n    <img src="/Adamant/images/helmet/helmet.png" class="landing_pic svelte-25b5sh"/>',p(t,"class","three_container svelte-25b5sh")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&o(t)}}}class oe extends F{constructor(e){super(),P(this,e,null,re,l,{})}}function de(e){let s,t;return s=new J({props:{margined:"true"}}),{c(){B(s.$$.fragment)},m(e,n){I(s,e,n),t=!0},i(e){t||(M(s.$$.fragment,e),t=!0)},o(e){H(s.$$.fragment,e),t=!1},d(e){N(s,e)}}}function ue(e){let s,t,n,i,l,a,u,m,g,h=!e[0].wide&&de();return m=new oe({}),{c(){s=d("div"),t=d("section"),n=d("p"),n.innerHTML='Adamant <br class="svelte-m6q78"/>Engineering',i=v(),l=d("p"),l.innerHTML='Committed to delivering premium<br class="svelte-m6q78"/> engineering solutions',a=v(),h&&h.c(),u=v(),B(m.$$.fragment),p(n,"class","svelte-m6q78"),p(l,"class","svelte-m6q78"),p(t,"id","landing"),p(t,"class","svelte-m6q78"),p(s,"class","blocker")},m(e,o){r(e,s,o),c(s,t),c(t,n),c(t,i),c(t,l),c(t,a),h&&h.m(t,null),c(t,u),I(m,t,null),g=!0},p(e,[s]){e[0].wide?h&&(z(),H(h,1,1,(()=>{h=null})),C()):h?1&s&&M(h,1):(h=de(),h.c(),M(h,1),h.m(t,u))},i(e){g||(M(h),M(m.$$.fragment,e),g=!0)},o(e){H(h),H(m.$$.fragment,e),g=!1},d(e){e&&o(s),h&&h.d(),N(m)}}}function ve(e,s,t){let n;return a(e,G,(e=>t(0,n=e))),[n]}class pe extends F{constructor(e){super(),P(this,e,ve,ue,l,{})}}function me(s){let t;return{c(){t=d("div"),t.innerHTML='<img src="/Adamant/images/building1.svg" class="building building1 svelte-l34azk"/> \n    <img src="/Adamant/images/building2.svg" class="building building2 svelte-l34azk"/> \n    <img src="/Adamant/images/building3.svg" class="building building3 svelte-l34azk"/> \n    <img src="/Adamant/images/building4.svg" class="building building4 svelte-l34azk"/> \n    <img src="/Adamant/images/building2.svg" class="building building5 svelte-l34azk"/> \n    <img src="/Adamant/images/building3.svg" class="building building6 svelte-l34azk"/> \n    <img src="/Adamant/images/building4.svg" class="building building7 svelte-l34azk"/> \n    <img src="/Adamant/images/building5.svg" class="building building8 svelte-l34azk"/> \n    <img src="/Adamant/images/building2.svg" class="building building9 svelte-l34azk"/>',p(t,"class","buildings svelte-l34azk")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&o(t)}}}class ge extends F{constructor(e){super(),P(this,e,null,me,l,{})}}function he(s){let t,n,i,l,a,u,m,g;return m=new ge({}),{c(){t=d("div"),n=d("section"),i=d("p"),i.textContent="Who We Are",l=v(),a=d("p"),a.innerHTML="Adamant Engineering is a new chapter in our journey, launched in 2022 with a focus on self-reliance and local production. As part of Adamant Holding, we build on years of experience in global trade and industry, but this venture is different. It’s about bringing innovation to East Africa and reducing the need for imports by growing what we can produce here at home.\n        <br/><br/>\n        Led by Mr. Ketema, our team is committed to changing how we view engineering and production. We’re not just creating systems; we’re shaping a future where East African industries stand strong, backed by the latest technology and international partnerships. Adamant Engineering isn’t just a business—it’s a mission to strengthen local manufacturing, push boundaries, and lead the way in building sustainable solutions for our economy.",u=v(),B(m.$$.fragment),p(i,"class","svelte-14xgfnr"),p(a,"class","svelte-14xgfnr"),p(n,"id","about"),p(n,"class","svelte-14xgfnr"),p(t,"class","blocker")},m(e,s){r(e,t,s),c(t,n),c(n,i),c(n,l),c(n,a),c(n,u),I(m,n,null),g=!0},p:e,i(e){g||(M(m.$$.fragment,e),g=!0)},o(e){H(m.$$.fragment,e),g=!1},d(e){e&&o(t),N(m)}}}class fe extends F{constructor(e){super(),P(this,e,null,he,l,{})}}function ye(e){let s;return{c(){s=d("div"),p(s,"class","line svelte-9iwx9z")},m(e,t){r(e,s,t)},d(e){e&&o(s)}}}function be(s){let t,n,i,l,a,u,m,g=s[0].split&&ye();return{c(){t=d("div"),n=d("section"),i=d("div"),l=d("div"),l.innerHTML='<div class="svelte-9iwx9z"><img class="eye_image svelte-9iwx9z" src="/Adamant/images/eye.svg"/> \n                <p class="svelte-9iwx9z">Vision</p></div> \n\n            <p class="svelte-9iwx9z">Engineering the Future, Globally <br class="svelte-9iwx9z"/>and Locally</p> \n\n            <p class="svelte-9iwx9z">We envision a world where cutting-edge engineering solutions drive progress, transforming both global and local communities. Our goal is to lead the charge in innovation, providing sustainable, high-quality systems that meet the evolving needs of industries and individuals worldwide. By merging global expertise with a local focus, we ensure that our solutions are not only impactful but also tailored to enhance the specific environments and communities we serve. Through our work, we aspire to shape a smarter, more efficient, and technologically advanced future.</p>',a=v(),g&&g.c(),u=v(),m=d("div"),m.innerHTML='<div class="svelte-9iwx9z"><img class="gear_image svelte-9iwx9z" src="/Adamant/images/gear.svg"/> \n                <p class="svelte-9iwx9z">Mission</p></div> \n\n            <p class="svelte-9iwx9z">Committed to Delivering Premium <br class="svelte-9iwx9z"/>Engineering Solutions</p> \n\n            <p class="svelte-9iwx9z">Our mission is to consistently deliver top-tier engineering solutions that exceed expectations. We are dedicated to excellence in every aspect of our work, from design and installation to maintenance and long-term support. Through our commitment to quality, innovation, and precision, we provide solutions that are both functional and sustainable, improving the lives of our clients and the communities they operate in. Our expertise across diverse sectors enables us to offer customized, premium engineering services, always aiming for the highest standards of safety, efficiency, and client satisfaction.</p>',p(l,"class","block svelte-9iwx9z"),p(m,"class","block svelte-9iwx9z"),p(i,"class","vision_block_container svelte-9iwx9z"),p(n,"id","vision"),p(n,"class","svelte-9iwx9z"),p(t,"class","blocker")},m(e,s){r(e,t,s),c(t,n),c(n,i),c(i,l),c(i,a),g&&g.m(i,null),c(i,u),c(i,m)},p(e,[s]){e[0].split?g||(g=ye(),g.c(),g.m(i,u)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&o(t),g&&g.d()}}}function $e(e,s,t){let n;return a(e,V,(e=>t(0,n=e))),[n]}class we extends F{constructor(e){super(),P(this,e,$e,be,l,{})}}function ke(s){let t;return{c(){t=d("div"),t.innerHTML='<div class="choice chosen svelte-1csjc71"><div class="choice_icon img svelte-1csjc71" style="background-image:url(&#39;/Adamant/images/solar.svg&#39;);"></div> \n        <p class="svelte-1csjc71">Solar Energy Solutions</p></div> \n\n    <div class="choice svelte-1csjc71"><div class="choice_icon img svelte-1csjc71" style="background-image:url(&#39;/Adamant/images/hvac.svg&#39;);"></div> \n        <p class="svelte-1csjc71">HVAC System Integration and Technologies</p></div> \n\n    <div class="choice svelte-1csjc71"><div class="choice_icon img svelte-1csjc71" style="background-image:url(&#39;/Adamant/images/ventilation.svg&#39;);"></div> \n        <p class="svelte-1csjc71">Industrial Ventilation Systems</p></div> \n\n    <div class="choice svelte-1csjc71"><div class="choice_icon img svelte-1csjc71" style="background-image:url(&#39;/Adamant/images/steel.svg&#39;);"></div> \n        <p class="svelte-1csjc71">Stainless Steel Fabrication</p></div> \n\n    <div class="choice svelte-1csjc71"><div class="choice_icon img svelte-1csjc71" style="background-image:url(&#39;/Adamant/images/display.svg&#39;);"></div> \n        <p class="svelte-1csjc71">Customized Display and Exhibition Solutions</p></div> \n\n    <div class="choice svelte-1csjc71"><div class="choice_icon img svelte-1csjc71" style="background-image:url(&#39;/Adamant/images/furniture.svg&#39;);"></div> \n        <p class="svelte-1csjc71">Furniture Manufacturing</p></div>',p(t,"class","chooser svelte-1csjc71")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&o(t)}}}function Ae(e,s,t){let n,i;a(e,U,(e=>t(0,n=e)));let l=!1;function c(e,s){const t=e.target;s.forEach(((e,s)=>{e!=t&&t!=e.lastElementChild||U.update((e=>({...e,chosen:"cat"+(s+1)})))}))}return y((()=>{l=!0;const e=document.querySelector(".chooser"),s=document.querySelectorAll(".choice");e.addEventListener("click",(e=>{c(e,s)}))})),b((()=>{chooser.removeEventListener("click",(e=>{c(e,choices)})),l=!1})),e.$$.update=()=>{1&e.$$.dirty&&(i=Number(n.chosen[3])-1,l&&(document.querySelector(".chosen").classList.remove("chosen"),document.querySelectorAll(".choice")[i].classList.add("chosen")))},[n]}class xe extends F{constructor(e){super(),P(this,e,Ae,ke,l,{})}}function Ee(s){let t;return{c(){t=d("div"),t.innerHTML='<div class="cat cat1 svelte-1udh9ae"><div class="slide slide1 svelte-1udh9ae"><p class="svelte-1udh9ae">1. Solar Energy Solutions</p> \n\n            <p class="svelte-1udh9ae">We focus on delivering top-notch solar panels and pumps, specifically crafted for rural areas. Our solutions empower communities by providing sustainable energy, reducing reliance on traditional power sources, and promoting eco-friendly practices. Whether for agriculture, homes, or businesses, our solar products are designed to be reliable and efficient, even in the most remote locations.</p> \n        \n            <div class="products svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n                <img src="/Adamant/images/arrow.svg" class="svelte-1udh9ae"/></div></div> \n\n\n\n        <div class="slide slide2 hide svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n\n            <ul class="svelte-1udh9ae"><li class="svelte-1udh9ae">Solar photovoltaic (PV) panels</li> \n                <li class="svelte-1udh9ae">Solar inverters</li> \n                <li class="svelte-1udh9ae">Battery storage systems</li> \n                <li class="svelte-1udh9ae">Solar water heaters</li> \n                <li class="svelte-1udh9ae">Solar-powered pumps</li> \n                <li class="svelte-1udh9ae">Complete solar installation kits</li></ul> \n\n            <div class="back svelte-1udh9ae"><img class="reverse svelte-1udh9ae" src="/Adamant/images/arrow.svg"/> \n                <p class="svelte-1udh9ae">Back</p></div></div></div> \n\n\n\n    <div class="cat cat2 svelte-1udh9ae"><div class="slide slide1 svelte-1udh9ae"><p class="svelte-1udh9ae">2. HVAC System Integration and Technologies</p> \n\n            <p class="svelte-1udh9ae">We deliver HVAC systems that ensure clean, comfortable air in your spaces. From design to installation and maintenance, our services are tailored to meet your specific needs, promoting a healthier indoor environment.</p> \n        \n            <div class="products svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n                <img src="/Adamant/images/arrow.svg" class="svelte-1udh9ae"/></div></div> \n\n\n\n        <div class="slide slide2 hide svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n\n            <ul class="svelte-1udh9ae"><li class="svelte-1udh9ae">Central air conditioning units</li> \n                <li class="svelte-1udh9ae">Ductless mini-split systems</li> \n                <li class="svelte-1udh9ae">Central air conditioning units</li> \n                <li class="svelte-1udh9ae">Air handling units (AHUs)</li> \n                <li class="svelte-1udh9ae">Heating systems (furnaces and heat pumps)</li> \n                <li class="svelte-1udh9ae">Smart thermostats</li> \n                <li class="svelte-1udh9ae">Air purifiers and filtration systems</li></ul> \n\n            <div class="back svelte-1udh9ae"><img class="reverse svelte-1udh9ae" src="/Adamant/images/arrow.svg"/> \n                <p class="svelte-1udh9ae">Back</p></div></div></div> \n\n\n\n\n    <div class="cat cat3 svelte-1udh9ae"><div class="slide slide1 svelte-1udh9ae"><p class="svelte-1udh9ae">3. Industrial Ventilation Systems</p> \n\n            <p class="svelte-1udh9ae">We design and install effective ventilation systems for industrial environments, ensuring clean air circulation, controlled temperatures, and safe working conditions for your employees.</p> \n        \n            <div class="products svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n                <img src="/Adamant/images/arrow.svg" class="svelte-1udh9ae"/></div></div> \n\n\n\n        <div class="slide slide2 hide svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n\n            <ul class="svelte-1udh9ae"><li class="svelte-1udh9ae">Exhaust fans</li> \n                <li class="svelte-1udh9ae">Fresh air intake systems</li> \n                <li class="svelte-1udh9ae">Ductwork and hoods</li> \n                <li class="svelte-1udh9ae">Dust collection systems</li> \n                <li class="svelte-1udh9ae">Fume extraction systems</li> \n                <li class="svelte-1udh9ae">Control systems for ventilation</li></ul> \n\n            <div class="back svelte-1udh9ae"><img class="reverse svelte-1udh9ae" src="/Adamant/images/arrow.svg"/> \n                <p class="svelte-1udh9ae">Back</p></div></div></div> \n\n\n\n    <div class="cat cat4 svelte-1udh9ae"><div class="slide slide1 svelte-1udh9ae"><p class="svelte-1udh9ae">4. Stainless Steel Fabrication</p> \n\n            <p class="svelte-1udh9ae">As an authorized supplier of stainless steel materials, we offer a diverse range of high-quality stainless steel products. We also create custom stainless steel components for various industrial and commercial applications, ensuring strength and precision. Our skilled in-house team can manage everything from structural parts to specialized items, tailored to your exact requirements.</p> \n        \n            <div class="products svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n                <img src="/Adamant/images/arrow.svg" class="svelte-1udh9ae"/></div></div> \n\n\n\n        <div class="slide slide2 hide svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n\n            <ul class="svelte-1udh9ae"><li class="svelte-1udh9ae">Custom stainless steel fittings and fasteners</li> \n                <li class="svelte-1udh9ae">Stainless steel handrails and guardrails</li> \n                <li class="svelte-1udh9ae">Fabricated stainless steel frames and supports</li> \n                <li class="svelte-1udh9ae">Stainless steel tanks and containers</li> \n                <li class="svelte-1udh9ae">Structural components for construction</li> \n                <li class="svelte-1udh9ae">Specialty stainless steel parts for machinery</li></ul> \n\n            <div class="back svelte-1udh9ae"><img class="reverse svelte-1udh9ae" src="/Adamant/images/arrow.svg"/> \n                <p class="svelte-1udh9ae">Back</p></div></div></div> \n\n\n\n\n    <div class="cat cat5 svelte-1udh9ae"><div class="slide slide1 svelte-1udh9ae"><p class="svelte-1udh9ae">5. Customized Display and Exhibition Solutions</p> \n\n            <p class="svelte-1udh9ae">Adamant Engineering designs promotional stands and exhibition displays using locally sourced materials. Our display solutions are ideal for trade shows, sales promotions, and events. Each display is crafted to grab attention and make a lasting impression on your audience, all while supporting local craftsmanship and keeping costs down.</p> \n        \n            <div class="products svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n                <img src="/Adamant/images/arrow.svg" class="svelte-1udh9ae"/></div></div> \n\n\n\n        <div class="slide slide2 hide svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n\n            <ul class="svelte-1udh9ae"><li class="svelte-1udh9ae">Custom exhibition booths</li> \n                <li class="svelte-1udh9ae">Portable display stands</li> \n                <li class="svelte-1udh9ae">Retail shelving units</li> \n                <li class="svelte-1udh9ae">Pop-up banners and signage</li> \n                <li class="svelte-1udh9ae">Interactive kiosks</li> \n                <li class="svelte-1udh9ae">Trade show displays</li></ul> \n\n            <div class="back svelte-1udh9ae"><img class="reverse svelte-1udh9ae" src="/Adamant/images/arrow.svg"/> \n                <p class="svelte-1udh9ae">Back</p></div></div></div> \n\n\n\n\n\n    <div class="cat cat6 svelte-1udh9ae"><div class="slide slide1 svelte-1udh9ae"><p class="svelte-1udh9ae">6. Furniture Manufacturing</p> \n\n            <p class="svelte-1udh9ae">What makes our furniture services unique is the high level of personalization we offer. We work with interior designers and businesses to create specific designs, including unique color schemes like complete sets of green furniture or other custom colors. Our furniture combines functionality with tailored aesthetics, ensuring a perfect fit for any design project.</p> \n        \n            <div class="products svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n                <img src="/Adamant/images/arrow.svg" class="svelte-1udh9ae"/></div></div> \n\n\n\n        <div class="slide slide2 hide svelte-1udh9ae"><p class="svelte-1udh9ae">Products Offered</p> \n\n            <ul class="svelte-1udh9ae"><li class="svelte-1udh9ae">Custom office furniture (desks, chairs, conference tables)</li> \n                <li class="svelte-1udh9ae">Residential furniture (sofas, beds, dining sets)</li> \n                <li class="svelte-1udh9ae">Modular furniture systems</li> \n                <li class="svelte-1udh9ae">Outdoor furniture</li> \n                <li class="svelte-1udh9ae">Storage solutions (cabinets, shelving)</li> \n                <li class="svelte-1udh9ae">Specialty furniture (for events or specific needs)</li></ul> \n\n            <div class="back svelte-1udh9ae"><img class="reverse svelte-1udh9ae" src="/Adamant/images/arrow.svg"/> \n                <p class="svelte-1udh9ae">Back</p></div></div></div>',p(t,"class","slides svelte-1udh9ae")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&o(t)}}}function Se(e){const s=document.querySelectorAll(".slide1>div"),t=document.querySelectorAll(".slide2>div"),n=e.target;n.classList.contains("products")||n.parentElement.classList.contains("products")?s.forEach((e=>{if(n==e||n==e.querySelector("p")||n==e.querySelector("img")){const s=e.parentElement.parentElement,t=s.querySelector(".slide1"),n=s.querySelector(".slide2");t.classList.add("hide"),n.classList.remove("hide")}})):(n.classList.contains("back")||n.parentElement.classList.contains("back"))&&t.forEach((e=>{if(n==e||n==e.querySelector("p")||n==e.querySelector("img")){const s=e.parentElement.parentElement,t=s.querySelector(".slide1");s.querySelector(".slide2").classList.add("hide"),t.classList.remove("hide")}}))}function qe(e,s,t){let n;a(e,U,(e=>t(1,n=e)));let i=!1;return y((()=>{t(0,i=!0);const e=document.querySelector(".slides"),s=window.scrollY;document.querySelector(".cat1").scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),window.scrollTo(0,s),e.addEventListener("click",(e=>{Se(e)}))})),b((()=>{slides.removeEventListener("click",(e=>{Se(e)})),t(0,i=!1)})),e.$$.update=()=>{if(3&e.$$.dirty){let e=document.querySelector(`.${n.chosen}`);if(i){let s=document.querySelector(".slides");const t=e.getBoundingClientRect(),n=s.getBoundingClientRect(),i=s.scrollLeft,l=t.left-n.left+i;s.scrollTo({left:l,behavior:"smooth"})}}},[i,n]}class je extends F{constructor(e){super(),P(this,e,qe,Ee,l,{})}}function Le(s){let t;return{c(){t=d("div"),t.innerHTML='<img class="pic pic1 svelte-gx7oth" src="/Adamant/images/solar/solar.png"/> \n    <img class="pic pic2 svelte-gx7oth" src="/Adamant/images/hvac/hvac.png"/> \n    <img class="pic pic3 svelte-gx7oth" src="/Adamant/images/ventilation/ventilation.png"/> \n    <img class="pic pic4 svelte-gx7oth" src="/Adamant/images/steel/steel.png"/> \n    <img class="pic pic5 svelte-gx7oth" src="/Adamant/images/display/display.png"/> \n    <img class="pic pic6 svelte-gx7oth" src="/Adamant/images/furniture/furniture.png"/>',p(t,"class","pictures svelte-gx7oth")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&o(t)}}}function Oe(e,s,t){let n;a(e,U,(e=>t(1,n=e)));let i=!1;return y((()=>{t(0,i=!0);const e=window.scrollY;document.querySelector(".pic1").scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),window.scrollTo(0,e)})),b((()=>{t(0,i=!1)})),e.$$.update=()=>{if(3&e.$$.dirty&&i){let e=document.querySelector(".pictures");const s=document.querySelector(`.pic${n.chosen[3]}`).getBoundingClientRect(),t=e.getBoundingClientRect(),i=e.scrollLeft,l=s.left-t.left+i;e.scrollTo({left:l,behavior:"smooth"})}},[i,n]}class _e extends F{constructor(e){super(),P(this,e,Oe,Le,l,{})}}function Te(s){let t,n,i,l,a,u,m,g,h,f,y,b,$;return m=new xe({}),f=new je({}),b=new _e({}),{c(){t=d("div"),n=d("section"),i=d("div"),l=d("div"),a=d("p"),a.textContent="Supporting Clients in Six Essential Sectors",u=v(),B(m.$$.fragment),g=v(),h=d("div"),B(f.$$.fragment),y=v(),B(b.$$.fragment),p(a,"class","svelte-172a1pn"),p(l,"class","top svelte-172a1pn"),p(h,"class","bottom svelte-172a1pn"),p(i,"class","services_container svelte-172a1pn"),p(n,"id","services"),p(n,"class","svelte-172a1pn"),p(t,"class","blocker")},m(e,s){r(e,t,s),c(t,n),c(n,i),c(i,l),c(l,a),c(l,u),I(m,l,null),c(i,g),c(i,h),I(f,h,null),c(n,y),I(b,n,null),$=!0},p:e,i(e){$||(M(m.$$.fragment,e),M(f.$$.fragment,e),M(b.$$.fragment,e),$=!0)},o(e){H(m.$$.fragment,e),H(f.$$.fragment,e),H(b.$$.fragment,e),$=!1},d(e){e&&o(t),N(m),N(f),N(b)}}}class ze extends F{constructor(e){super(),P(this,e,null,Te,l,{})}}function Ce(s){let t;return{c(){t=d("div"),t.innerHTML='<section id="distinction" class="svelte-1ojfe50"><p class="svelte-1ojfe50">What Makes Us Different</p> \n\n    <div class="difference_container svelte-1ojfe50"><div class="difference svelte-1ojfe50"><p class="svelte-1ojfe50">INNOVATION</p> \n            \n            <p class="svelte-1ojfe50">We push boundaries with advanced technology, delivering cutting-edge solutions tailored to local needs.</p></div> \n        \n        <div class="difference svelte-1ojfe50"><p class="svelte-1ojfe50">RESEARCH</p> \n            \n            <p class="svelte-1ojfe50">We push boundaries with advanced technology, delivering cutting-edge solutions tailored to local needs.</p></div> \n        \n        <div class="difference svelte-1ojfe50"><p class="svelte-1ojfe50">TECHNOLOGY</p> \n            \n            <p class="svelte-1ojfe50">We leverage the latest global advancements and bring them to East Africa, ensuring that our clients benefit from top-tier engineering and production capabilities.</p></div> \n        \n        <div class="difference svelte-1ojfe50"><p class="svelte-1ojfe50">TRAINING AND GROWTH</p> \n\n            <p class="svelte-1ojfe50">We focus on building local talent by sharing knowledge and providing hands-on training to strengthen our workforce.</p></div> \n        \n        <div class="difference svelte-1ojfe50"><p class="svelte-1ojfe50">COMMUNITY ENGAGEMENT</p> \n            \n            <p class="svelte-1ojfe50">We create job opportunities and support local industries, giving back to the community.</p></div> \n        \n        <div class="difference svelte-1ojfe50"><p class="svelte-1ojfe50">AFFORDABLE AND CLEAR ENERGY SOLUTIONS</p> \n            \n            <p class="svelte-1ojfe50">Our energy solutions are cost-effective and clear, making sustainability accessible to all.</p></div></div></section>',p(t,"class","blocker")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&o(t)}}}class Me extends F{constructor(e){super(),P(this,e,null,Ce,l,{})}}function He(s){let t;return{c(){t=d("div"),t.innerHTML='<section id="approach" class="svelte-m2ncyt"><p class="svelte-m2ncyt">Adamant&#39;s Way</p> \n\n    <div class="ways_container svelte-m2ncyt"><div class="way svelte-m2ncyt"><img src="/Adamant/images/knowledge.svg" class="svelte-m2ncyt"/> \n\n            <div class="way_text svelte-m2ncyt"><p class="svelte-m2ncyt">Knowledge Transfer</p> \n\n                <p class="svelte-m2ncyt">We believe in sharing knowledge and building skills. Adamant Engineering brings expertise from abroad to Ethiopia, driving innovation and helping our local workforce grow stronger.</p></div></div> \n\n        <div class="way svelte-m2ncyt"><img src="/Adamant/images/client.svg" class="svelte-m2ncyt"/> \n\n            <div class="way_text svelte-m2ncyt"><p class="svelte-m2ncyt">Client Collaboration</p> \n\n                <p class="svelte-m2ncyt">We work closely with our clients, helping them set up branches and expand their reach. Together, we grow and succeed, creating lasting partnerships.</p></div></div> \n\n\n        <div class="way svelte-m2ncyt"><img src="/Adamant/images/future.svg" class="svelte-m2ncyt"/> \n\n            <div class="way_text svelte-m2ncyt"><p class="svelte-m2ncyt">Future Outlook</p> \n\n                <p class="svelte-m2ncyt">Looking ahead, Adamant Engineering is committed to pushing innovation, increasing collaboration, and supporting Ethiopia’s journey toward sustainable development.</p></div></div></div></section>',p(t,"class","blocker")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&o(t)}}}class Be extends F{constructor(e){super(),P(this,e,null,He,l,{})}}function Ie(s){let t;return{c(){t=d("div"),t.innerHTML='<p class="svelte-y6jtic">Get in Touch</p> \n\n    <form class="svelte-y6jtic"><input type="text" placeholder="Name" class="svelte-y6jtic"/> \n        <input type="email" placeholder="Email" class="svelte-y6jtic"/> \n        <input type="text" placeholder="Subject" class="svelte-y6jtic"/> \n        <textarea placeholder="Message" class="svelte-y6jtic"></textarea> \n\n        <input type="submit" value="Submit" class="svelte-y6jtic"/></form>',p(t,"class","form_container svelte-y6jtic")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&o(t)}}}class Ne extends F{constructor(e){super(),P(this,e,null,Ie,l,{})}}function We(s){let t,n,i,l,a,u,m,g,h;return u=new Ne({}),{c(){t=d("div"),n=d("section"),i=d("div"),l=d("div"),l.innerHTML='<p class="svelte-1q2lc3r">Contact Us</p> \n\n            <p class="svelte-1q2lc3r">Email, call or complete the form to learn how we can provide you with premium engineering solutions tailored to your needs.</p> \n\n            <p class="svelte-1q2lc3r">E-MAIL: adamantexport@gmail.com</p> \n\n            <div class="infos_div svelte-1q2lc3r"><div class="info svelte-1q2lc3r"><div class="svelte-1q2lc3r">Head Office</div> \n\n                    <p class="svelte-1q2lc3r">MOB: +251 911 24 64 75</p> \n                    <p class="svelte-1q2lc3r">OFF: +251 114 70 29 11</p> \n                    <p class="svelte-1q2lc3r">GOFA GEBRIEL JFK BUILDING 3RD</p> \n                    <p class="svelte-1q2lc3r">FLOOR P.O.BOX 8853</p> \n                    <p class="svelte-1q2lc3r">ADDIS ABABA, ETHIOPIA</p></div> \n\n\n                <div class="info svelte-1q2lc3r"><div class="svelte-1q2lc3r">Dubai Branch</div> \n\n                    <p class="svelte-1q2lc3r">MOB: +971 50 968 1540</p> \n                    <p class="svelte-1q2lc3r">OFF: +971 4 345 7172</p> \n                    <p class="svelte-1q2lc3r">DUBAI SHOPPING CENTRE, 1ST FLOOR</p> \n                    <p class="svelte-1q2lc3r">P.O.BOX 251006</p> \n                    <p class="svelte-1q2lc3r">DUBAI, UAE</p></div></div>',a=v(),B(u.$$.fragment),m=v(),g=d("h6"),g.innerHTML="© 2024 Adamant Engineering.<br/>All Rights Reserved.",p(l,"class","contact_left svelte-1q2lc3r"),p(i,"class","contact_toper svelte-1q2lc3r"),p(g,"class","svelte-1q2lc3r"),p(n,"id","contact"),p(n,"class","svelte-1q2lc3r"),p(t,"class","blocker2")},m(e,s){r(e,t,s),c(t,n),c(n,i),c(i,l),c(i,a),I(u,i,null),c(n,m),c(n,g),h=!0},p:e,i(e){h||(M(u.$$.fragment,e),h=!0)},o(e){H(u.$$.fragment,e),h=!1},d(e){e&&o(t),N(u)}}}class Pe extends F{constructor(e){super(),P(this,e,null,We,l,{})}}function Fe(s){let t,n,i,l,a,u,m,g,h,f,y,b,$,w,k,A,x;return n=new ce({}),l=new pe({}),u=new fe({}),g=new we({}),f=new ze({}),b=new Me({}),w=new Be({}),A=new Pe({}),{c(){t=d("div"),B(n.$$.fragment),i=v(),B(l.$$.fragment),a=v(),B(u.$$.fragment),m=v(),B(g.$$.fragment),h=v(),B(f.$$.fragment),y=v(),B(b.$$.fragment),$=v(),B(w.$$.fragment),k=v(),B(A.$$.fragment),p(t,"id","container")},m(e,s){r(e,t,s),I(n,t,null),c(t,i),I(l,t,null),c(t,a),I(u,t,null),c(t,m),I(g,t,null),c(t,h),I(f,t,null),c(t,y),I(b,t,null),c(t,$),I(w,t,null),c(t,k),I(A,t,null),x=!0},p:e,i(e){x||(M(n.$$.fragment,e),M(l.$$.fragment,e),M(u.$$.fragment,e),M(g.$$.fragment,e),M(f.$$.fragment,e),M(b.$$.fragment,e),M(w.$$.fragment,e),M(A.$$.fragment,e),x=!0)},o(e){H(n.$$.fragment,e),H(l.$$.fragment,e),H(u.$$.fragment,e),H(g.$$.fragment,e),H(f.$$.fragment,e),H(b.$$.fragment,e),H(w.$$.fragment,e),H(A.$$.fragment,e),x=!1},d(e){e&&o(t),N(n),N(l),N(u),N(g),N(f),N(b),N(w),N(A)}}}function Re(e){function s(){let e=window.innerWidth;e>=771?G.update((e=>({...e,wide:!0}))):G.update((e=>({...e,wide:!1}))),e>=995?V.update((e=>({...e,split:!0}))):V.update((e=>({...e,split:!1})))}return y((()=>{s(),window.addEventListener("resize",s)})),b((()=>{window.removeEventListener("resize",s)})),[]}return new class extends F{constructor(e){super(),P(this,e,Re,Fe,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
