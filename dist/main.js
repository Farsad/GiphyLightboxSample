!function e(t,r,n){function i(s,a){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var c=r[s]={exports:{}};t[s][0].call(c.exports,function(e){var r=t[s][1][e];return i(r?r:e)},c,c.exports,e,t,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(e,t,r){"use strict";function n(e,t){var r=document.createElement("div");for(r.innerHTML=t;r.children.length>0;)e.appendChild(r.children[0])}function i(e){for(;e.firstChild;)e.removeChild(e.firstChild)}Object.defineProperty(r,"__esModule",{value:!0}),r.appendHtml=n,r.clearChildren=i},{}],2:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=e("./search"),o=n(i),s=new o["default"];document.addEventListener("DOMContentLoaded",function(){s.initialize()})},{"./search":4}],3:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=e("./helpers"),s=function(){function e(){n(this,e)}return i(e,[{key:"initialize",value:function(e){var t=this;this.resultsContainer=document.querySelector(".js-resultsContainer"),this.lightbox=document.querySelector(".js-lightbox"),this.previewBox=document.querySelector(".js-preview"),this.itemsData=e,this.resultsContainer.addEventListener("click",function(e){e.target.matches(".js-resultsItem")&&(t.currentItem=parseInt(e.target.dataset.itemIndex),t.setPreviewItem(),t.showLightbox())}),this.lightbox.addEventListener("click",function(e){e.target.matches(".js-previewNext")?t.nextItem():e.target.matches(".js-previewPrev")?t.previousItem():e.target.matches(".js-previewClose, .js-preview")&&t.closeLightbox()}),document.addEventListener("keydown",function(e){e||(e=window.event);var r=e.keyCode;switch(e.charCode&&0==r&&(r=e.charCode),r){case 37:t.previousItem();break;case 39:t.nextItem();break;case 27:t.closeLightbox()}e.preventDefault()})}},{key:"previousItem",value:function(){this.currentItem>0&&(this.currentItem-=1,this.setPreviewItem())}},{key:"nextItem",value:function(){this.currentItem<this.itemsData.length-1&&(this.currentItem+=1,this.setPreviewItem())}},{key:"closeLightbox",value:function(){(0,o.clearChildren)(this.previewBox),this.lightbox.classList.add("u-isHidden")}},{key:"showLightbox",value:function(){this.lightbox.classList.remove("u-isHidden")}},{key:"setPreviewItem",value:function(){var e=document.querySelector(".js-previewNext"),t=document.querySelector(".js-previewPrev");0===this.currentItem?t.classList.add("u-isHidden"):t.classList.remove("u-isHidden"),this.currentItem===this.itemsData.length-1?e.classList.add("u-isHidden"):e.classList.remove("u-isHidden"),this.previewBox.innerHTML='<img src="'+this.itemsData[this.currentItem].image+'"/>'}}]),e}();r["default"]=s},{"./helpers":1}],4:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();e("whatwg-fetch");var s=e("./helpers"),a=e("./preview"),u=n(a),h=function(){function e(){i(this,e),this.lastSearchedTerm="",this.preview=new u["default"]}return o(e,[{key:"initialize",value:function(){var e=this,t=document.querySelector(".js-searchForm"),r=document.querySelector(".js-searchTextBox");t.addEventListener("submit",function(t){return t.preventDefault(),e.search(r.value),!1})}},{key:"search",value:function(e){""!==e&&e!==this.lastSearchedTerm&&(this.lastSearchedTerm=e,fetch("http://api.giphy.com/v1/gifs/search?q="+encodeURIComponent(e)+"&api_key=dc6zaTOxFJmzC&limit=50&offset=0").then(function(e){return e.json()}).then(function(e){200===e.meta.status?(this.results=e.data,this.updateResults(),this.preview.initialize(e.data.map(function(e){return{image:e.images.original.url}}))):alert("Problem in fetching data")}.bind(this))["catch"](function(e){console.log("parsing failed",e)}))}},{key:"updateResults",value:function(){var e=document.querySelector(".js-resultsContainer");if((0,s.clearChildren)(e),this.results&&this.results.length){for(var t='<div class="SearchPage-results">',r=0;r<this.results.length;r++)t+='<div class="SearchItem SearchItem-sizeMedium js-resultsItem"'+('style="background-image: URL('+this.results[r].images.fixed_width.url+')"')+(' data-item-index="'+r+'"></div>');t+="</div>",(0,s.appendHtml)(e,t)}else(0,s.appendHtml)(e,'<div class="SearchPage-noResults">Your search did not match any giphy!<br/>Search for another term!<br/><div><iframe src="//giphy.com/embed/ZgCeagL3AmIGQ" width="480" height="136" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/nothing-ZgCeagL3AmIGQ">via GIPHY</a></p></div></div>')}}]),e}();r["default"]=h},{"./helpers":1,"./preview":3,"whatwg-fetch":5}],5:[function(e,t,r){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function i(e){this.map={},e instanceof i?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function o(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function s(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader,r=s(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=s(t);return t.readAsText(e),r}function h(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&w(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?o(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function l(e){var t=e.toUpperCase();return x.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var r=t.body;if("string"==typeof e)this.url=e;else{if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new i(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new i(t.headers)),this.method=l(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(i))}}),t}function y(e){var t=new i;return e.split("\r\n").forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var i=r.join(":").trim();t.append(n,i)}}),t}function m(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new i(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};i.prototype.append=function(e,n){e=t(e),n=r(n);var i=this.map[e];this.map[e]=i?i+","+n:n},i.prototype["delete"]=function(e){delete this.map[t(e)]},i.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},i.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},i.prototype.set=function(e,n){this.map[t(e)]=r(n)},i.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},i.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},i.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},i.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},b.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},f.call(d.prototype),f.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var _=[301,302,303,307,308];m.redirect=function(e,t){if(_.indexOf(t)===-1)throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},e.Headers=i,e.Request=d,e.Response=m,e.fetch=function(e,t){return new Promise(function(r,n){var i=new d(e,t),o=new XMLHttpRequest;o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:y(o.getAllResponseHeaders()||"")};e.url="responseURL"in o?o.responseURL:e.headers.get("X-Request-URL");var t="response"in o?o.response:o.responseText;r(new m(t,e))},o.onerror=function(){n(new TypeError("Network request failed"))},o.ontimeout=function(){n(new TypeError("Network request failed"))},o.open(i.method,i.url,!0),"include"===i.credentials&&(o.withCredentials=!0),"responseType"in o&&b.blob&&(o.responseType="blob"),i.headers.forEach(function(e,t){o.setRequestHeader(t,e)}),o.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},{}]},{},[2]);
//# sourceMappingURL=main.js.map
