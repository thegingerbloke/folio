/*!
 * Hello there!
 *  
 * If you are keen to see the source JS files, take a look at the github repo:
 *  
 * https://github.com/thegingerbloke/folio
 *  
 */
!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=17)}({17:function(e,t,n){"use strict";function r(){return caches.open(c+s).then(function(e){return e.addAll(a.optional),e.addAll(a.required)})}function i(){return caches.keys().then(function(e){return Promise.all(e.filter(function(e){return 0!==e.indexOf(c)}).map(function(e){caches.delete(e)}))})}var s="offline",c="v1.0.0::",a={optional:["/assets/fonts/raleway/raleway-light.woff2","/assets/fonts/raleway/raleway-medium.woff2","/assets/images/404.gif"],required:["/assets/css/site.css","/assets/js/site.js","/","/offline/"]};self.addEventListener("install",function(e){e.waitUntil(r().then(function(){self.skipWaiting()}))}),self.addEventListener("activate",function(e){e.waitUntil(i().then(function(){self.clients.claim()}))}),self.addEventListener("fetch",function(e){var t=e.request;"GET"===t.method&&e.respondWith(fetch(t).then(function(e){return e}).catch(function(){return t.headers.get("Accept").indexOf("text/html")!==-1?caches.match("/offline/"):caches.match(t).then(function(e){return e})}))})}});