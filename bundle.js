!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1};r(o,c);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],u=n.base?c[0]+n.base:c[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var d=i(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=c(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var c=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(c,a[n]):e.appendChild(c)}}function p(e,n,t){var r=t.css,o=t.media,c=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,n){var t,r,o;if(n.singleton){var c=h++;t=m||(m=s(n)),r=f.bind(null,t,c,!1),o=f.bind(null,t,c,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var c=u(e,n),s=0;s<t.length;s++){var l=i(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=c}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"body {\n  background-color: rgb(144, 177, 177);\n}\n\n.center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.nav {\n  flex-direction: row;\n  justify-content: space-around;\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 0.548) 0%,\n    rgba(37, 134, 119, 0.644) 34%,\n    rgba(255, 0, 106, 0.589) 78%\n  );\n  height: 50px;\n  border-radius: 10px;\n}\n\n.navBtns {\n  background-color: rgba(255, 255, 255, 0.828);\n  border-radius: 10px;\n  color: rgb(0, 0, 0);\n  padding: 5px 10px;\n  font-size: large;\n  font-weight: 600;\n}\n\n.navBtns:hover {\n  background-color: brown;\n}\n\niframe {\n  width: 50vw;\n  height: 50vh;\n  border-radius: 10px;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(u," */")),c=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(c).concat([o]).join("\n")}var a,i,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var u=[].concat(e[i]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";t.r(n);t(0);const r={home:[()=>{const e=document.createElement("h1");return e.textContent="Beau Café",e},()=>{const e=document.createElement("p");return e.textContent="We imagine a world where there’s no such thing as a bad cup of coffee and all coffee farmers live prosperously.Our values include providing fair wages for workers, giving back to the communities we work with, and serving great coffee.",e},()=>{const e=document.createElement("img");return e.src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",e}],contact:[()=>{const e=document.createElement("h1");return e.textContent="Contact Us",e},()=>{const e=document.createElement("p");return e.textContent="Find us in South Africa, a wonderful country! Call us at: 05050515-122330",e},()=>{const e=document.createElement("iframe");return e.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13501080.87651276!2d18.226957231727912!3d-34.295407294928445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sza!4v1595522759744!5m2!1sen!2sza",e}],menu:[()=>{const e=document.createElement("h1");return e.textContent="Our Famous Coffee",e},()=>{const e=document.createElement("p");return e.textContent="Try our classic range of rich flavours!",e},()=>{const e=document.createElement("img");return e.src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-restaurant-cafe-menu-template-design-685bde777dc7fd5cc14493fb69d5304d_screen.jpg?ts=1561396633",e}]},o=document.querySelector(".nav"),c=document.querySelector("#content"),a=e=>{(()=>{for(;c.firstChild;)c.removeChild(c.lastChild)})();const n=e;for(let e=0;e<n.length;e+=1)c.appendChild(n[e]())};["home","menu","contact"].forEach(e=>function(e){const n=document.createElement("button");n.className="center navBtns",n.id=e,n.textContent=e.toUpperCase(),o.appendChild(n),n.addEventListener("click",()=>a(r[e]))}(e)),a(r.home)}]);