parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){var e,t=document.querySelector(".framify-container"),n=document.querySelector(".framify-buttons-wrapper"),r=document.querySelector(".framify-button-play"),i=document.querySelector(".framify-button-pause"),o=document.querySelector(".framify-button-next"),a=document.querySelector(".framify-button-previous"),c=document.querySelector(".framify-elements-wrapper"),u=document.querySelectorAll(".framify-element"),l=L(t),d=20,f=parseInt(t.getAttribute("data-interval")),s=u.length;window.onload=function(){c.scrollLeft=0,t.hasAttribute("data-playback")&&setTimeout(function(){return r.click()},50)},window.addEventListener("resize",function(){l=L(t),c.scrollLeft=0}),r.addEventListener("click",function(){e=setInterval(y,f),r.classList.add("framify-button-hidden"),i.classList.remove("framify-button-hidden")}),i.addEventListener("click",function(){clearInterval(e),r.classList.remove("framify-button-hidden"),i.classList.add("framify-button-hidden")}),o.addEventListener("click",y),a.addEventListener("click",function(){m=p(m-1,s),c.insertBefore(u[m],c.firstChild),c.scrollLeft+=l,v(c,-d,l)}),t.addEventListener("mouseover",function(){return n.style.opacity=1}),t.addEventListener("mouseout",function(){return n.style.opacity=0});var m=0;function y(){v(c,d,l),setTimeout(function(){c.appendChild(u[m]),m=(m+1)%s,c.scrollLeft-=l},l)}function v(e,t,n){var r=0,i=window.setInterval(function(){e.scrollLeft+=t,(r+=Math.abs(t))>=n&&window.clearInterval(i)},10)}var p=function(e,t){return(e%t+t)%t};function L(e){return e.clientWidth}};exports.default=e;
},{}],"dOas":[function(require,module,exports) {

},{}],"gRqn":[function(require,module,exports) {
"use strict";var e=r(require("."));function r(e){return e&&e.__esModule?e:{default:e}}require("./framify.css"),(0,e.default)();
},{".":"Focm","./framify.css":"dOas"}]},{},["gRqn"], null)
//# sourceMappingURL=framify.b11633b7.js.map