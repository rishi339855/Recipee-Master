var e,t,r,n,i,o,a,s,c,u,l,d=globalThis;function h(e){return e&&e.__esModule?e.default:e}var f={},p={},g=function(e){return e&&e.Math==Math&&e};p=g("object"==typeof globalThis&&globalThis)||g("object"==typeof window&&window)||g("object"==typeof self&&self)||g("object"==typeof d&&d)||Function("return this")();var m={},v={};m=!(v=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var y={}.propertyIsEnumerable,_=Object.getOwnPropertyDescriptor;t=_&&!y.call({1:2},1)?function(e){var t=_(this,e);return!!t&&t.enumerable}:y;var b={};b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var w={},k={},E={},S={}.toString;E=function(e){return S.call(e).slice(8,-1)};var $="".split;k=v(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==E(e)?$.call(e,""):Object(e)}:Object;var L={};L=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e},w=function(e){return k(L(e))};var M={},x={};x=function(e){return"object"==typeof e?null!==e:"function"==typeof e},M=function(e,t){var r,n;if(!x(e))return e;if(t&&"function"==typeof(r=e.toString)&&!x(n=r.call(e))||"function"==typeof(r=e.valueOf)&&!x(n=r.call(e))||!t&&"function"==typeof(r=e.toString)&&!x(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")};var O={},j={}.hasOwnProperty;O=function(e,t){return j.call(e,t)};var P={},T={},q=p.document,A=x(q)&&x(q.createElement);T=function(e){return A?q.createElement(e):{}},P=!m&&!v(function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a});var F=Object.getOwnPropertyDescriptor;e=m?F:function(e,r){if(e=w(e),r=M(r,!0),P)try{return F(e,r)}catch(e){}if(O(e,r))return b(!t.call(e,r),e[r])};var H={},I={};I=function(e){if(!x(e))throw TypeError(String(e)+" is not an object");return e};var N=Object.defineProperty;r=m?N:function(e,t,r){if(I(e),t=M(t,!0),I(r),P)try{return N(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e},H=m?function(e,t,n){return r(e,t,b(1,n))}:function(e,t,r){return e[t]=r,e};var C={},W={};W=function(e,t){try{H(p,e,t)}catch(r){p[e]=t}return t};var D={},R={},z="__core-js_shared__";R=p[z]||W(z,{});var G=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(e){return G.call(e)}),D=R.inspectSource;var U={},Y={},J=p.WeakMap;Y="function"==typeof J&&/native code/.test(D(J));var B={},K={},Q={};Q=!1,(K=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:Q?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var V={},X=0,Z=Math.random();V=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++X+Z).toString(36)};var ee=K("keys");B=function(e){return ee[e]||(ee[e]=V(e))};var et={};et={};var er=p.WeakMap;if(Y){var en=new er,ei=en.get,eo=en.has,ea=en.set;n=function(e,t){return ea.call(en,e,t),t},i=function(e){return ei.call(en,e)||{}},o=function(e){return eo.call(en,e)}}else{var es=B("state");et[es]=!0,n=function(e,t){return H(e,es,t),t},i=function(e){return O(e,es)?e[es]:{}},o=function(e){return O(e,es)}}var ec=(U={set:n,get:i,has:o,enforce:function(e){return o(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!x(t)||(r=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}).get,eu=U.enforce,el=String(String).split("String");(C=function(e,t,r,n){var i=!!n&&!!n.unsafe,o=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet;if("function"==typeof r&&("string"!=typeof t||O(r,"name")||H(r,"name",t),eu(r).source=el.join("string"==typeof t?t:"")),e===p)return void(o?e[t]=r:W(t,r));i?!a&&e[t]&&(o=!0):delete e[t],o?e[t]=r:H(e,t,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&ec(this).source||D(this)});var ed={},eh={},ef={},ep={};ep=p;var eg=function(e){return"function"==typeof e?e:void 0};ef=function(e,t){return arguments.length<2?eg(ep[e])||eg(p[e]):ep[e]&&ep[e][t]||p[e]&&p[e][t]};var em={},ev={},ey={},e_=Math.ceil,eb=Math.floor;ey=function(e){return isNaN(e*=1)?0:(e>0?eb:e_)(e)};var ew=Math.min;ev=function(e){return e>0?ew(ey(e),0x1fffffffffffff):0};var ek={},eE=Math.max,eS=Math.min;ek=function(e,t){var r=ey(e);return r<0?eE(r+t,0):eS(r,t)};var e$=function(e){return function(t,r,n){var i,o=w(t),a=ev(o.length),s=ek(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},eL={includes:e$(!0),indexOf:e$(!1)}.indexOf;em=function(e,t){var r,n=w(e),i=0,o=[];for(r in n)!O(et,r)&&O(n,r)&&o.push(r);for(;t.length>i;)O(n,r=t[i++])&&(~eL(o,r)||o.push(r));return o};var eM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");a=Object.getOwnPropertyNames||function(e){return em(e,eM)},s=Object.getOwnPropertySymbols,eh=ef("Reflect","ownKeys")||function(e){var t=a(I(e));return s?t.concat(s(e)):t},ed=function(t,n){for(var i=eh(n),o=0;o<i.length;o++){var a=i[o];O(t,a)||r(t,a,e(n,a))}};var ex={},eO=/#|\.prototype\./,ej=function(e,t){var r=eT[eP(e)];return r==eA||r!=eq&&("function"==typeof t?v(t):!!t)},eP=ej.normalize=function(e){return String(e).replace(eO,".").toLowerCase()},eT=ej.data={},eq=ej.NATIVE="N",eA=ej.POLYFILL="P";ex=ej,f=function(t,r){var n,i,o,a,s,c=t.target,u=t.global,l=t.stat;if(n=u?p:l?p[c]||W(c,{}):(p[c]||{}).prototype)for(i in r){if(a=r[i],o=t.noTargetGet?(s=e(n,i))&&s.value:n[i],!ex(u?i:c+(l?".":"#")+i,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;ed(a,o)}(t.sham||o&&o.sham)&&H(a,"sham",!0),C(n,i,a,t)}};var eF={},eH={},eI={};eI=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},eH=function(e,t,r){if(eI(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}};var eN={};eN=ef("document","documentElement");var eC={},eW={};eW=ef("navigator","userAgent")||"",eC=/(iphone|ipod|ipad).*applewebkit/i.test(eW);var eD=p.location,eR=p.setImmediate,ez=p.clearImmediate,eG=p.process,eU=p.MessageChannel,eY=p.Dispatch,eJ=0,eB={},eK="onreadystatechange",eQ=function(e){if(eB.hasOwnProperty(e)){var t=eB[e];delete eB[e],t()}},eV=function(e){return function(){eQ(e)}},eX=function(e){eQ(e.data)},eZ=function(e){p.postMessage(e+"",eD.protocol+"//"+eD.host)};eR&&ez||(eR=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return eB[++eJ]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},c(eJ),eJ},ez=function(e){delete eB[e]},"process"==E(eG)?c=function(e){eG.nextTick(eV(e))}:eY&&eY.now?c=function(e){eY.now(eV(e))}:eU&&!eC?(l=(u=new eU).port2,u.port1.onmessage=eX,c=eH(l.postMessage,l,1)):!p.addEventListener||"function"!=typeof postMessage||p.importScripts||v(eZ)||"file:"===eD.protocol?c=eK in T("script")?function(e){eN.appendChild(T("script"))[eK]=function(){eN.removeChild(this),eQ(e)}}:function(e){setTimeout(eV(e),0)}:(c=eZ,p.addEventListener("message",eX,!1))),eF={set:eR,clear:ez},f({global:!0,bind:!0,enumerable:!0,forced:!p.setImmediate||!p.clearImmediate},{setImmediate:eF.set,clearImmediate:eF.clear});var e0=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,r,n,i){var o,a,s,c,u=Object.create((r&&r.prototype instanceof g?r:g).prototype);return o=e,a=n,s=new L(i||[]),c=d,u._invoke=function(e,r){if(c===h)throw Error("Generator is already running");if(c===f){if("throw"===e)throw r;return x()}for(s.method=e,s.arg=r;;){var n=s.delegate;if(n){var i=function e(r,n){var i=r.iterator[n.method];if(i===t){if(n.delegate=null,"throw"===n.method){if(r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))return p;n.method="throw",n.arg=TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(i,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,p)}(n,s);if(i){if(i===p)continue;return i}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(c===d)throw c=f,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c=h;var u=l(o,a,s);if("normal"===u.type){if(c=s.done?f:"suspendedYield",u.arg===p)continue;return{value:u.arg,done:s.done}}"throw"===u.type&&(c=f,s.method="throw",s.arg=u.arg)}},u}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",h="executing",f="completed",p={};function g(){}function m(){}function v(){}var y={};y[o]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(M([])));b&&b!==r&&n.call(b,o)&&(y=b);var w=v.prototype=g.prototype=Object.create(y);function k(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=l(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(d).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function M(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=w.constructor=v,v.constructor=m,m.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},k(w),c(w,s,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=M,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}({});try{regeneratorRuntime=e0}catch(e){Function("r","regeneratorRuntime = r")(e0)}const e1="https://forkify-api.jonas.io/api/v2/recipes/",e2="<YOUR_KEY>",e4=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},e5={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},e3=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},e7=async function(e){try{let t=await e4(`${e1}${e}?key=${e2}`);e5.recipe=e3(t),e5.bookmarks.some(t=>t.id===e)?e5.recipe.bookmarked=!0:e5.recipe.bookmarked=!1,console.log(e5.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},e6=async function(e){try{e5.search.query=e;let t=await e4(`${e1}?search=${e}&key=${e2}`);console.log(t),e5.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),e5.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},e8=function(e=e5.search.page){e5.search.page=e;let t=(e-1)*e5.search.resultsPerPage,r=e*e5.search.resultsPerPage;return e5.search.results.slice(t,r)},e9=function(e){e5.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/e5.recipe.servings}),e5.recipe.servings=e},te=function(){localStorage.setItem("bookmarks",JSON.stringify(e5.bookmarks))},tt=function(e){e5.bookmarks.push(e),e.id===e5.recipe.id&&(e5.recipe.bookmarked=!0),te()},tr=function(e){let t=e5.bookmarks.findIndex(t=>t.id===e);e5.bookmarks.splice(t,1),e===e5.recipe.id&&(e5.recipe.bookmarked=!1),te()},tn=localStorage.getItem("bookmarks");tn&&(e5.bookmarks=JSON.parse(tn));const ti=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await e4(`${e1}?key=${e2}`,r);e5.recipe=e3(n),tt(e5.recipe)}catch(e){throw e}};var to={};to=import.meta.resolve("eyyUD");class ta{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${h(to)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${h(to)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${h(to)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class ts{constructor(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof e)this.numerator=e,this.denominator=1;else if("string"==typeof e){let t,r,n=e.split(" ");if(n[0]&&(t=n[0]),n[1]&&(r=n[1]),t%1==0&&r&&r.match("/"))return new ts(t).add(new ts(r));if(!t||r)return;if("string"==typeof t&&t.match("/")){let e=t.split("/");this.numerator=e[0],this.denominator=e[1]}else{if("string"==typeof t&&t.match("."))return new ts(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}clone(){return new ts(this.numerator,this.denominator)}toString(){if("NaN"===this.denominator)return"NaN";let e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!==e&&n.push(e),0!==t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0}rescale(e){return this.numerator*=e,this.denominator*=e,this}add(e){let t=this.clone();e=e instanceof ts?e.clone():new ts(e);let r=t.denominator;return t.rescale(e.denominator),e.rescale(r),t.numerator+=e.numerator,t.normalize()}subtract(e){let t=this.clone();e=e instanceof ts?e.clone():new ts(e);let r=t.denominator;return t.rescale(e.denominator),e.rescale(r),t.numerator-=e.numerator,t.normalize()}multiply(e){let t=this.clone();if(e instanceof ts)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new ts(e));t.numerator*=e}return t.normalize()}divide(e){let t=this.clone();if(e instanceof ts)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new ts(e));t.denominator*=e}return t.normalize()}equals(e){e instanceof ts||(e=new ts(e));let t=this.clone().normalize();return e=e.clone().normalize(),t.numerator===e.numerator&&t.denominator===e.denominator}normalize(){function e(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)}function t(e,t){if(!t)return Math.round(e);{let r=Math.pow(10,t);return Math.round(e*r)/r}}if(e(this.denominator)){let e=Math.pow(10,t(this.denominator,9).toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}if(e(this.numerator)){let e=Math.pow(10,t(this.numerator,9).toString().split(".")[1].length);this.numerator=Math.round(this.numerator*e),this.denominator*=e}let r=ts.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}static gcf(e,t){let r=[],n=ts.primeFactors(e),i=ts.primeFactors(t);if(n.forEach(function(e){let t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)return 1;let o=r[0];for(let e=1;e<r.length;e++)o*=r[e];return o}static primeFactors(e){let t=Math.abs(e),r=[],n=2;for(;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!==t&&r.push(t),r}}class tc extends ta{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${{}}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${{}}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${{}}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${{}}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
            <use href="${{}}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${{}}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new ts(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}var tu=new tc;class tl{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var td=new tl,th=new class extends ta{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
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
              <use href="${{}}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class tf extends ta{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>th.render(e,!1)).join("")}}var tp=new tf;class tg extends ta{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${{}}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${{}}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${{}}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${{}}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var tm=new tg;class tv extends ta{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>th.render(e,!1)).join("")}}var ty=new tv;class t_ extends ta{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var tb=new t_;const tw=async function(){try{let e=window.location.hash.slice(1);if(!e)return;tu.renderSpinner(),tp.update(e8()),ty.update(e5.bookmarks),await e7(e),tu.render(e5.recipe)}catch(e){tu.renderError(),console.error(e)}},tk=async function(){try{tp.renderSpinner();let e=td.getQuery();if(!e)return;await e6(e),tp.render(e8()),tm.render(e5.search)}catch(e){console.log(e)}},tE=async function(e){try{tb.renderSpinner(),await ti(e),console.log(e5.recipe),tu.render(e5.recipe),tb.renderMessage(),ty.render(e5.bookmarks),window.history.pushState(null,"",`#${e5.recipe.id}`),setTimeout(function(){tb.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),tb.renderError(e.message)}};ty.addHandlerRender(function(){ty.render(e5.bookmarks)}),tu.addHandlerRender(tw),tu.addHandlerUpdateServings(function(e){e9(e),tu.update(e5.recipe)}),tu.addHandlerAddBookmark(function(){e5.recipe.bookmarked?tr(e5.recipe.id):tt(e5.recipe),tu.update(e5.recipe),ty.render(e5.bookmarks)}),td.addHandlerSearch(tk),tm.addHandlerClick(function(e){tp.render(e8(e)),tm.render(e5.search)}),tb.addHandlerUpload(tE);
//# sourceMappingURL=FORKIFY.b615cd0a.js.map
