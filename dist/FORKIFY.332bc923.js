var e,t,r,n,i,o,a,s,c,u,l,d,f,h,p=globalThis;function g(e){return e&&e.__esModule?e.default:e}var m={},v={},y=function(e){return e&&e.Math==Math&&e};v=y("object"==typeof globalThis&&globalThis)||y("object"==typeof window&&window)||y("object"==typeof self&&self)||y("object"==typeof p&&p)||Function("return this")();var _={},b={};_=!(b=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var w={}.propertyIsEnumerable,k=Object.getOwnPropertyDescriptor;n=k&&!w.call({1:2},1)?function(e){var t=k(this,e);return!!t&&t.enumerable}:w;var E={};E=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var S={},$={},F={},L={}.toString;F=function(e){return L.call(e).slice(8,-1)};var M="".split;$=b(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==F(e)?M.call(e,""):Object(e)}:Object;var x={};x=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e},S=function(e){return $(x(e))};var O={},j={};j=function(e){return"object"==typeof e?null!==e:"function"==typeof e},O=function(e,t){var r,n;if(!j(e))return e;if(t&&"function"==typeof(r=e.toString)&&!j(n=r.call(e))||"function"==typeof(r=e.valueOf)&&!j(n=r.call(e))||!t&&"function"==typeof(r=e.toString)&&!j(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")};var P={},T={}.hasOwnProperty;P=function(e,t){return T.call(e,t)};var q={},A={},H=v.document,I=j(H)&&j(H.createElement);A=function(e){return I?H.createElement(e):{}},q=!_&&!b(function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a});var N=Object.getOwnPropertyDescriptor;r=_?N:function(e,t){if(e=S(e),t=O(t,!0),q)try{return N(e,t)}catch(e){}if(P(e,t))return E(!n.call(e,t),e[t])};var C={},W={};W=function(e){if(!j(e))throw TypeError(String(e)+" is not an object");return e};var D=Object.defineProperty;i=_?D:function(e,t,r){if(W(e),t=O(t,!0),W(r),q)try{return D(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e},C=_?function(e,t,r){return i(e,t,E(1,r))}:function(e,t,r){return e[t]=r,e};var R={},z={};z=function(e,t){try{C(v,e,t)}catch(r){v[e]=t}return t};var G={},U={},Y="__core-js_shared__";U=v[Y]||z(Y,{});var J=Function.toString;"function"!=typeof U.inspectSource&&(U.inspectSource=function(e){return J.call(e)}),G=U.inspectSource;var B={},K={},Q=v.WeakMap;K="function"==typeof Q&&/native code/.test(G(Q));var V={},X={},Z={};Z=!1,(X=function(e,t){return U[e]||(U[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:Z?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var ee={},et=0,er=Math.random();ee=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++et+er).toString(36)};var en=X("keys");V=function(e){return en[e]||(en[e]=ee(e))};var ei={};ei={};var eo=v.WeakMap;if(K){var ea=new eo,es=ea.get,ec=ea.has,eu=ea.set;o=function(e,t){return eu.call(ea,e,t),t},a=function(e){return es.call(ea,e)||{}},s=function(e){return ec.call(ea,e)}}else{var el=V("state");ei[el]=!0,o=function(e,t){return C(e,el,t),t},a=function(e){return P(e,el)?e[el]:{}},s=function(e){return P(e,el)}}var ed=(B={set:o,get:a,has:s,enforce:function(e){return s(e)?a(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!j(t)||(r=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}).get,ef=B.enforce,eh=String(String).split("String");(R=function(e,t,r,n){var i=!!n&&!!n.unsafe,o=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet;if("function"==typeof r&&("string"!=typeof t||P(r,"name")||C(r,"name",t),ef(r).source=eh.join("string"==typeof t?t:"")),e===v)return void(o?e[t]=r:z(t,r));i?!a&&e[t]&&(o=!0):delete e[t],o?e[t]=r:C(e,t,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&ed(this).source||G(this)});var ep={},eg={},em={},ev={};ev=v;var ey=function(e){return"function"==typeof e?e:void 0};em=function(e,t){return arguments.length<2?ey(ev[e])||ey(v[e]):ev[e]&&ev[e][t]||v[e]&&v[e][t]};var e_={},eb={},ew={},ek=Math.ceil,eE=Math.floor;ew=function(e){return isNaN(e*=1)?0:(e>0?eE:ek)(e)};var eS=Math.min;eb=function(e){return e>0?eS(ew(e),0x1fffffffffffff):0};var e$={},eF=Math.max,eL=Math.min;e$=function(e,t){var r=ew(e);return r<0?eF(r+t,0):eL(r,t)};var eM=function(e){return function(t,r,n){var i,o=S(t),a=eb(o.length),s=e$(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},ex={includes:eM(!0),indexOf:eM(!1)}.indexOf;e_=function(e,t){var r,n=S(e),i=0,o=[];for(r in n)!P(ei,r)&&P(n,r)&&o.push(r);for(;t.length>i;)P(n,r=t[i++])&&(~ex(o,r)||o.push(r));return o};var eO=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return e_(e,eO)},u=Object.getOwnPropertySymbols,eg=em("Reflect","ownKeys")||function(e){var t=c(W(e));return u?t.concat(u(e)):t},ep=function(e,t){for(var n=eg(t),o=0;o<n.length;o++){var a=n[o];P(e,a)||i(e,a,r(t,a))}};var ej={},eP=/#|\.prototype\./,eT=function(e,t){var r=eA[eq(e)];return r==eI||r!=eH&&("function"==typeof t?b(t):!!t)},eq=eT.normalize=function(e){return String(e).replace(eP,".").toLowerCase()},eA=eT.data={},eH=eT.NATIVE="N",eI=eT.POLYFILL="P";ej=eT,m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?v:l?v[c]||z(c,{}):(v[c]||{}).prototype)for(i in t){if(a=t[i],o=e.noTargetGet?(s=r(n,i))&&s.value:n[i],!ej(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ep(a,o)}(e.sham||o&&o.sham)&&C(a,"sham",!0),R(n,i,a,e)}};var eN={},eC={},eW={};eW=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},eC=function(e,t,r){if(eW(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}};var eD={};eD=em("document","documentElement");var eR={},ez={};ez=em("navigator","userAgent")||"",eR=/(iphone|ipod|ipad).*applewebkit/i.test(ez);var eG=v.location,eU=v.setImmediate,eY=v.clearImmediate,eJ=v.process,eB=v.MessageChannel,eK=v.Dispatch,eQ=0,eV={},eX="onreadystatechange",eZ=function(e){if(eV.hasOwnProperty(e)){var t=eV[e];delete eV[e],t()}},e0=function(e){return function(){eZ(e)}},e1=function(e){eZ(e.data)},e2=function(e){v.postMessage(e+"",eG.protocol+"//"+eG.host)};eU&&eY||(eU=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return eV[++eQ]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},l(eQ),eQ},eY=function(e){delete eV[e]},"process"==F(eJ)?l=function(e){eJ.nextTick(e0(e))}:eK&&eK.now?l=function(e){eK.now(e0(e))}:eB&&!eR?(f=(d=new eB).port2,d.port1.onmessage=e1,l=eC(f.postMessage,f,1)):!v.addEventListener||"function"!=typeof postMessage||v.importScripts||b(e2)||"file:"===eG.protocol?l=eX in A("script")?function(e){eD.appendChild(A("script"))[eX]=function(){eD.removeChild(this),eZ(e)}}:function(e){setTimeout(e0(e),0)}:(l=e2,v.addEventListener("message",e1,!1))),eN={set:eU,clear:eY},m({global:!0,bind:!0,enumerable:!0,forced:!v.setImmediate||!v.clearImmediate},{setImmediate:eN.set,clearImmediate:eN.clear});var e4=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,r,n,i){var o,a,s,c,u=Object.create((r&&r.prototype instanceof g?r:g).prototype);return o=e,a=n,s=new F(i||[]),c=d,u._invoke=function(e,r){if(c===f)throw Error("Generator is already running");if(c===h){if("throw"===e)throw r;return M()}for(s.method=e,s.arg=r;;){var n=s.delegate;if(n){var i=function e(r,n){var i=r.iterator[n.method];if(i===t){if(n.delegate=null,"throw"===n.method){if(r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))return p;n.method="throw",n.arg=TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(i,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,p)}(n,s);if(i){if(i===p)continue;return i}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(c===d)throw c=h,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c=f;var u=l(o,a,s);if("normal"===u.type){if(c=s.done?h:"suspendedYield",u.arg===p)continue;return{value:u.arg,done:s.done}}"throw"===u.type&&(c=h,s.method="throw",s.arg=u.arg)}},u}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="executing",h="completed",p={};function g(){}function m(){}function v(){}var y={};y[o]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(L([])));b&&b!==r&&n.call(b,o)&&(y=b);var w=v.prototype=g.prototype=Object.create(y);function k(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=l(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(d).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:M}}function M(){return{value:t,done:!0}}return m.prototype=w.constructor=v,v.constructor=m,m.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},k(w),c(w,s,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}({});try{regeneratorRuntime=e4}catch(e){Function("r","regeneratorRuntime = r")(e4)}const e5="https://forkify-api.jonas.io/api/v2/recipes/",e3="<YOUR_KEY>",e7=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},e6={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},e8=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},e9=async function(e){try{let t=await e7(`${e5}${e}?key=${e3}`);e6.recipe=e8(t),e6.bookmarks.some(t=>t.id===e)?e6.recipe.bookmarked=!0:e6.recipe.bookmarked=!1,console.log(e6.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},te=async function(e){try{e6.search.query=e;let t=await e7(`${e5}?search=${e}&key=${e3}`);console.log(t),e6.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),e6.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},tt=function(e=e6.search.page){e6.search.page=e;let t=(e-1)*e6.search.resultsPerPage,r=e*e6.search.resultsPerPage;return e6.search.results.slice(t,r)},tr=function(e){e6.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/e6.recipe.servings}),e6.recipe.servings=e},tn=function(){localStorage.setItem("bookmarks",JSON.stringify(e6.bookmarks))},ti=function(e){e6.bookmarks.push(e),e.id===e6.recipe.id&&(e6.recipe.bookmarked=!0),tn()},to=function(e){let t=e6.bookmarks.findIndex(t=>t.id===e);e6.bookmarks.splice(t,1),e===e6.recipe.id&&(e6.recipe.bookmarked=!1),tn()},ta=localStorage.getItem("bookmarks");ta&&(e6.bookmarks=JSON.parse(ta));const ts=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await e7(`${e5}?key=${e3}`,r);e6.recipe=e8(n),ti(e6.recipe)}catch(e){throw e}};var tc={};tc=import.meta.resolve("eyyUD");class tu{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${g(tc)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${g(tc)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${g(tc)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var tl={};Object.defineProperty(tl,"Fraction",{get:()=>h,set:e=>h=e,enumerable:!0,configurable:!0}),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(e=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(e(this.denominator)){var r=t(this.denominator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(e(this.numerator)){var r=t(this.numerator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},h=Fraction;class tf extends tu{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${g(tc)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${g(tc)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${g(tc)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${g(tc)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${g(tc)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${g(tc)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${g(tc)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${g(tc)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new(g(tl)).Fraction(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}var th=new tf;class tp{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var tg=new tp,tm=new class extends tu{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${g(tc)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class tv extends tu{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>tm.render(e,!1)).join("")}}var ty=new tv;class t_ extends tu{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${g(tc)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${g(tc)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${g(tc)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${g(tc)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var tb=new t_;class tw extends tu{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>tm.render(e,!1)).join("")}}var tk=new tw;class tE extends tu{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var tS=new tE;const t$=async function(){try{let e=window.location.hash.slice(1);if(!e)return;th.renderSpinner(),ty.update(tt()),tk.update(e6.bookmarks),await e9(e),th.render(e6.recipe)}catch(e){th.renderError(),console.error(e)}},tF=async function(){try{ty.renderSpinner();let e=tg.getQuery();if(!e)return;await te(e),ty.render(tt()),tb.render(e6.search)}catch(e){console.log(e)}},tL=async function(e){try{tS.renderSpinner(),await ts(e),console.log(e6.recipe),th.render(e6.recipe),tS.renderMessage(),tk.render(e6.bookmarks),window.history.pushState(null,"",`#${e6.recipe.id}`),setTimeout(function(){tS.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),tS.renderError(e.message)}};tk.addHandlerRender(function(){tk.render(e6.bookmarks)}),th.addHandlerRender(t$),th.addHandlerUpdateServings(function(e){tr(e),th.update(e6.recipe)}),th.addHandlerAddBookmark(function(){e6.recipe.bookmarked?to(e6.recipe.id):ti(e6.recipe),th.update(e6.recipe),tk.render(e6.bookmarks)}),tg.addHandlerSearch(tF),tb.addHandlerClick(function(e){ty.render(tt(e)),tb.render(e6.search)}),tS.addHandlerUpload(tL);
//# sourceMappingURL=FORKIFY.332bc923.js.map
