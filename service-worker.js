"use strict";var precacheConfig=[["/2021/01/07/hello-world/index.html","d4680c26dc4c006d34d334188a75dd55"],["/2021/01/20/Java基础/cover.jpg","fd4334edc094973313e267c9592c7152"],["/2021/01/20/Java基础/index.html","6233a8b9e8c609ddabfcdf36b6d588f8"],["/2021/01/20/Java素数/cover.jpg","9df704b881612f685d0f7ed9d0711aac"],["/2021/01/20/Java素数/index.html","add3cfe73809301db0e3ea1dd8d23a56"],["/2021/02/18/ValidParenthesis/cover.png","00c58a95b3901b6a99d8592b4158f21c"],["/2021/02/18/ValidParenthesis/index.html","c3c9257dc931d08bfa31e426904ae89f"],["/404.html","745c6d50ea40db67a99afff3acd428cc"],["/about/index.html","719b695b130c4ddacb52fd87a40885ed"],["/archives/2021/01/index.html","87e2ad730c51b319745552c2d518036f"],["/archives/2021/02/index.html","d23f073242ec7d6e938d5a1dd2411c1c"],["/archives/2021/index.html","decd73ac19bf69dc72564307c97abcc1"],["/archives/index.html","121cda0b2c051d07e1755acff5b00e55"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","bd5942ea9127181ab416b2acd8f4e354"],["/categories/Java/index.html","cab156558d0f9ae5f4dfe6da4ad5b4ca"],["/categories/LeetCode/index.html","835c8902b267b2ec4fb25a25b6fc2799"],["/categories/index.html","698564a7265eb97d1f0e8c63d772591e"],["/css/iconfont.css","b777df3c2018ff2ea955d4cd3d23bf0b"],["/css/index.css","08e05d737e21be4984b89c37b8fae2f7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","d82c2cdca2e7e6d2d73ef5fc70b28e46"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","52bf9ac0b5864b4c1e6f7055ddaff29b"],["/img/bg.jpg","fe271c94945222ff4ed834ebe1e29170"],["/img/favicon.png","eefe8182d145b0669d2e5f439ef97adf"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechat.jpg","e280df6927155faa4d2ecd1145e7f498"],["/img/youlian.jpg","1a955fd7e184ae8636a178e1f3aa1217"],["/index.html","4e3253a2b475efda7f4e48510ece5a64"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/links/index.html","b1e042a9dd24a9c97f5e11556b890541"],["/movies/index.html","4a7eafc7f84d868b6660f62d2533853a"],["/music/index.html","946fd197fa5ab535ed8c649a7158ebf5"],["/tags/Java/index.html","badcd7dcd33340efeb4d2d70582f45bb"],["/tags/JavaScript/index.html","478a230e66588f4f9131a56e527e2622"],["/tags/Valid-Parenthesis/index.html","e293627b50dad54944972b1014a1e584"],["/tags/c/index.html","33bf6a74ef5321c859c25b0416288f33"],["/tags/index.html","929572ecf8838cc1bc778ce548122f59"],["/tags/python3/index.html","eaa7f186ec0852f2212b78824a839573"],["/tags/基础/index.html","1c24f0f756e5b41e60f4a104d8e64d18"],["/tags/素数/index.html","76739f951adfd5841e5c8d4f2365bd52"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}})),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}((function(){return function e(t,n,r){function a(c,i){if(!n[c]){if(!t[c]){var s="function"==typeof require&&require;if(!i&&s)return s(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,(function(e){return a(t[c][1][e]||e)}),f,f.exports,e,t,n,r)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function o(e,t,n){var a=e.url,o=n.maxAgeSeconds,c=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+a+". Max entries is "+c+", max age is "+o),u.getDb(i).then((function(e){return u.setTimestampForUrl(e,a,s)})).then((function(e){return u.expireEntries(e,c,o,s)})).then((function(e){r("Successfully updated IDB.");var n=e.map((function(e){return t.delete(e)}));return Promise.all(n).then((function(){r("Done with cache cleanup.")}))})).catch((function(e){r(e)}))}function c(e){var t=Array.isArray(e);if(t&&e.forEach((function(e){"string"==typeof e||e instanceof Request||(t=!1)})),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,s=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then((function(r){return"GET"===e.method&&n.test(r.status)&&a(t).then((function(n){n.put(e,r).then((function(){var r=t.cache||s.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=o.bind(null,e,t,n);i=i?i.then(r):r()}(e,n,r)}))})),r.clone()}))},openCache:a,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then((function(){return Promise.all([caches.open(e),caches.open(t)]).then((function(t){var n=t[0],r=t[1];return n.keys().then((function(e){return Promise.all(e.map((function(e){return n.match(e).then((function(t){return r.put(e,t)}))})))})).then((function(){return caches.delete(e)}))}))}))},cache:function(e,t){return a(t).then((function(t){return t.add(e)}))},uncache:function(e,t){return a(t).then((function(t){return t.delete(e)}))},precache:function(e){e instanceof Promise||c(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="store",a="url",o="timestamp",c={};t.exports={getDb:function(e){return e in c||(c[e]=function(e){return new Promise((function(t,n){var c=indexedDB.open("sw-toolbox-"+e,1);c.onupgradeneeded=function(){c.result.createObjectStore(r,{keyPath:a}).createIndex(o,o,{unique:!1})},c.onsuccess=function(){t(c.result)},c.onerror=function(){n(c.error)}}))}(e)),c[e]},setTimestampForUrl:function(e,t,n){return new Promise((function(a,o){var c=e.transaction(r,"readwrite");c.objectStore(r).put({url:t,timestamp:n}),c.oncomplete=function(){a(e)},c.onabort=function(){o(c.error)}}))},expireEntries:function(e,t,n,c){return function(e,t,n){return t?new Promise((function(c,i){var s=1e3*t,u=[],f=e.transaction(r,"readwrite"),h=f.objectStore(r);h.index(o).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-s>t.value[o]){var r=t.value[a];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){c(u)},f.onabort=i})):Promise.resolve([])}(e,n,c).then((function(n){return function(e,t){return t?new Promise((function(n,c){var i=[],s=e.transaction(r,"readwrite"),u=s.objectStore(r),f=u.index(o),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var o=r.value[a];i.push(o),u.delete(o),e-i.length>t&&r.continue()}})},s.oncomplete=function(){n(i)},s.onabort=c})):Promise.resolve([])}(e,t).then((function(e){return n.concat(e)}))}))}}},{}],3:[function(e,t,n){function r(e){return e.reduce((function(e,t){return e.concat(t)}),[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),o=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=o.match(e.request);t?e.respondWith(t(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then((function(e){return Promise.all(c.preCacheItems).then(r).then(a.validatePrecacheInput).then((function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)}))})))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,a=e("path-to-regexp"),o=function(e,t,n,o){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=o,this.handler=n};o.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach((function(e,r){t[e.name]=n[r+1]}))}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=o},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),a=e("./helpers"),o=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;)new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next();return a},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach((function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}})),c.prototype.add=function(e,t,n,o){var c;o=o||{},c=t instanceof RegExp?RegExp:(c=o.origin||self.location.origin)instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c),e=e.toLowerCase();var i=new r(e,t,n,o);this.routes.has(c)||this.routes.set(c,new Map);var s=this.routes.get(c);s.has(e)||s.set(e,new Map);var u=s.get(e),f=i.regexp||i.fullUrlRegExp;u.has(f.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,i)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,o(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var i=o(c,n);if(i.length>0)return i[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then((function(t){return t.match(e).then((function(t){var o=n.cache||r.cache,c=Date.now();return a.isResponseFresh(t,o.maxAgeSeconds,c)?t:a.fetchAndCache(e,n)}))}))}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then((function(t){return t.match(e).then((function(e){var t=n.cache||r.cache,o=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,o))return e}))}))}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),a=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise((function(o,c){var i=!1,s=[],u=function(e){s.push(e.toString()),i?c(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},f=function(e){e instanceof Response?o(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),a(e,t,n).then(f,u)}))}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){var o=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then((function(t){var i,s,u=[];if(c){var f=new Promise((function(o){i=setTimeout((function(){t.match(e).then((function(e){var t=n.cache||r.cache,c=Date.now(),i=t.maxAgeSeconds;a.isResponseFresh(e,i,c)&&o(e)}))}),1e3*c)}));u.push(f)}var h=a.fetchAndCache(e,n).then((function(e){if(i&&clearTimeout(i),o.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")})).catch((function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then((function(e){if(e)return e;if(s)return s;throw r}))}));return u.push(h),Promise.race(u)}))}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),o=e("./helpers"),c=e("./strategies"),i=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:a,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],a=0,o=0,c="",u=t&&t.delimiter||"/";null!=(n=l.exec(e));){var f=n[0],h=n[1],d=n.index;if(c+=e.slice(o,d),o=d+f.length,h)c+=h[1];else{var p=e[o],m=n[2],g=n[3],v=n[4],b=n[5],x=n[6],w=n[7];c&&(r.push(c),c="");var y=null!=m&&null!=p&&p!==m,E="+"===x||"*"===x,R="?"===x||"*"===x,C=n[2]||u,k=v||b;r.push({name:g||a++,prefix:m||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!w,pattern:k?s(k):w?".*":"[^"+i(C)+"]+?"})}}return o<e.length&&(c+=e.substr(o)),c&&r.push(c),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function o(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var c="",i=n||{},s=(r||{}).pretty?a:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=i[f.name];if(null==l){if(f.optional){f.partial&&(c+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(d(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(h=s(l[p]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");c+=(0===p?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?o(l):s(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');c+=f.prefix+h}}else c+=f}return c}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t,n){d(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,o="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)o+=i(s);else{var h=i(s.prefix),l="(?:"+s.pattern+")";t.push(s),s.repeat&&(l+="(?:"+h+l+")*"),o+=l=s.optional?s.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var p=i(n.delimiter||"/"),m=o.slice(-p.length)===p;return r||(o=(m?o.slice(0,-p.length):o)+"(?:"+p+"(?=$))?"),o+=a?"$":r&&m?"":"(?="+p+"|$)",u(new RegExp("^"+o,f(n)),t)}var d=e("isarray");t.exports=function e(t,n,a){return d(n)||(a=n||a,n=[]),a=a||{},t instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(t,n):d(t)?function(t,n,r){for(var a=[],o=0;o<t.length;o++)a.push(e(t[o],n,r).source);return u(new RegExp("(?:"+a.join("|")+")",f(r)),n)}(t,n,a):function(e,t,n){return h(r(e,n),t,n)}(t,n,a)},t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=h;var l=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then((function(){if(arguments.length<1)throw new TypeError;return e=e.map((function(e){return e instanceof Request?e:String(e)})),Promise.all(e.map((function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())})))})).then((function(r){if(r.some((function(e){return!e.ok})))throw new t("Incorrect response status");return Promise.all(r.map((function(t,r){return n.put(e[r],t)})))})).then((function(){}))},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)})),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"lovmere.github.io"});