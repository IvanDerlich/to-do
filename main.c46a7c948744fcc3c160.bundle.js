!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([,function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:b(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var a=h++;n=v||(v=l(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,":root{--main-color: #2F3640;--second-color: #34495E;--third-color: #00A8FF;--alt-second-color: rgba(52, 73, 94, 0.753);--light-color: #DCDDE1;--font-family: 'Montserrat', sans-serif}*,*::after,*::before{margin:0;padding:0;font-family:var(--font-family);box-sizing:border-box}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--alt-second-colot)}::-webkit-scrollbar-thumb{background:var(--third-color)}::-webkit-scrollbar-thumb:hover{background:#555}.task-container{background:var(--main-color)}.task-container>#tasks{height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:24px}.task-list{max-height:340px;overflow-y:auto;height:100%;width:500px}.task-item{background-color:var(--alt-second-color);height:64px;margin-bottom:4px;border-radius:8px;padding-left:24px;padding-right:24px;display:flex;align-items:center;justify-content:space-between}.task-item>p{color:var(--light-color)}.task-item>.delete-button{display:none}.task-item:hover .delete-button{display:inline-block}.add-new-task{color:var(--light-color);background:var(--alt-second-color);margin-bottom:24px;height:64px;border:none;padding:24px;font-size:16px;border-radius:8px}#content{display:flex;width:100%;height:100vh}#projectList,.edit-task{background:#34495E;width:320px;height:100%}.text-color-black{color:black}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projects=[]}var t,n,o;return t=e,(n=[{key:"addProject",value:function(e){this.projects.push(e)}},{key:"deleteProject",value:function(e){var t=this;this.projects.forEach((function(n,r){return n.id===e?(t.projects.splice(r,1),0):-1}))}},{key:"findProject",value:function(e){return this.projects.filter((function(t){return t.id===e}))[0]}}])&&r(t.prototype,n),o&&r(t,o),e}(),a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),i=new Uint8Array(16);function c(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(i)}for(var s=[],l=0;l<256;++l)s[l]=(l+256).toString(16).substr(1);var u,d,f=function(e,t){var n=t||0,r=s;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")},p=0,v=0;var h=function(e,t,n){var r=t&&n||0,o=t||[],a=(e=e||{}).node||u,i=void 0!==e.clockseq?e.clockseq:d;if(null==a||null==i){var s=e.random||(e.rng||c)();null==a&&(a=u=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),null==i&&(i=d=16383&(s[6]<<8|s[7]))}var l=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:v+1,b=l-p+(h-v)/1e4;if(b<0&&void 0===e.clockseq&&(i=i+1&16383),(b<0||l>p)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=l,v=h,d=i;var m=(1e4*(268435455&(l+=122192928e5))+h)%4294967296;o[r++]=m>>>24&255,o[r++]=m>>>16&255,o[r++]=m>>>8&255,o[r++]=255&m;var k=l/4294967296*1e4&268435455;o[r++]=k>>>8&255,o[r++]=255&k,o[r++]=k>>>24&15|16,o[r++]=k>>>16&255,o[r++]=i>>>8|128,o[r++]=255&i;for(var y=0;y<6;++y)o[r+y]=a[y];return t||f(o)};function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id="a".concat(h()),this.name=t,this.tasks=[]}var t,n,r;return t=e,(n=[{key:"addTask",value:function(e){this.tasks.push(e)}},{key:"deleteTask",value:function(e){var t=this;this.tasks.forEach((function(n,r){return n.id===e?(t.tasks.splice(r,1),0):-1}))}},{key:"editTask",value:function(e,t){this.tasks.forEach((function(n){return n.id===e?(n.edit(t),0):-1}))}},{key:"changeName",value:function(e){this.name=e}},{key:"findTask",value:function(e){return this.tasks.filter((function(t){return t.id===e}))[0]}}])&&b(t.prototype,n),r&&b(t,r),e}();function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"No description",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"no due date",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"low",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];k(this,e),this.id="a".concat(h()),this.title=t,this.description=n,this.dueDate=r,this.priority=o,this.done=a}var t,n,r;return t=e,(n=[{key:"edit",value:function(e){var t=this;Object.keys(e).forEach((function(n){t[n]=e[n]}))}}])&&y(t.prototype,n),r&&y(t,r),e}();var j={projectList:function(){var e=new o,t=new m("Home repair");e.addProject(t);var n=new g("Clean the roof","Remove the leaves out of the pipes","20/12/28","low",!0);t.addTask(n);var r=new g("P1T2","Project Description","20/12/28","low");t.addTask(r);var a=new g("P1T3","Project Description","20/12/28","low");t.addTask(a);var i=new m("Tree House Construction");e.addProject(i);var c=new g("P2T1","Project Description","20/12/28","low");i.addTask(c);var s=new g("P2T2","Project Description","20/12/28","low");i.addTask(s);var l=new g("P2T3","Project Description","20/12/28","low");i.addTask(l);var u=new m("Cake");e.addProject(u);var d=new g("P3T1","Project Description","20/12/28","low");u.addTask(d);var f=new g("P3T2","Project Description","20/12/28","low");u.addTask(f);var p=new g("P3T3","Project Description","20/12/28","low");return u.addTask(p),e}()};function w(e,t,n,r){var o=function(e){return document.createElement(e)}(r);return o.id=n,o.innerHTML=t,document.querySelector(e).appendChild(o),o}function x(e){var t="project".concat(e.id);document.querySelector("#tasks").innerHTML="",w("#tasks","",t,"div").classList.add("task-list"),e.tasks.forEach((function(n){var r=w("#".concat(t),"<p class='task-title'>".concat(n.title,"</p>      "),n.id,"div");r.querySelector(".task-title").addEventListener("click",(function(){!function(e,t){document.querySelector(".edit-task").innerHTML="",w(".edit-task",function(e){return'\n    <form id="edit-task-form" class=\'task-information\'>                 \n\n      <label>Title:</label><br>\n      <input id="task-title" class="text-color-black" value="'.concat(e.title,'"/> <br>\n\n      <label>Description:</label><br>\n      <textarea id="task-description" class="text-color-black">').concat(e.description,' </textarea> <br>\n\n      <label>Due Date:</label><br>\n      <input id="task-duedate" type="date" class="text-color-black" value="').concat(e.dueDate,'"/>  <br>\n      \n      <label>Priority:</label><br>\n      <input id="task-priority" class="text-color-black" value="').concat(e.priority,'"/>  <br>\n      \n      <label>Done:</label><br>\n      <input id="task-done" type="checkbox" class="text-color-black" ').concat(e.done?"checked":"",'/>  <br>\n      \n      <button id="send-form-button" class="text-color-black" type="submit">Edit</button>\n    </form> \n  ')}(e),e.id,"div"),document.querySelector("#edit-task-form").addEventListener("submit",(function(n){n.preventDefault();var r={};r.title=document.querySelector("#task-title").value,r.description=document.querySelector("#task-description").value,r.dueDate=document.querySelector("#task-duedate").value,r.priority=document.querySelector("#task-priority").value,r.done=document.querySelector("#task-done").checked,j.projectList.findProject(t).editTask(e.id,r),document.querySelector("#".concat(e.id," > .task-title")).innerHTML=e.title}))}(n,e.id)}));var o=document.createElement("button");o.classList.add("delete-button"),o.innerHTML="Delete",o.addEventListener("click",(function(){var t=document.querySelector("#project".concat(e.id)),r=document.querySelector("#".concat(n.id));j.projectList.findProject(e.id).deleteTask(n.id),t.removeChild(r),document.querySelector(".edit-task").innerHTML=""})),r.appendChild(o),r.classList.add("task-item")}));var n=w("#tasks","","add-project","input");n.type="text",n.classList.add("add-new-task"),n.setAttribute("placeholder","Create a new task"),n.addEventListener("keyup",(function(t){if("Enter"===t.key){var r=new g(n.value),o=j.projectList.findProject(e.id);o.addTask(r),x(o)}}))}window.addEventListener("load",(function(){!function e(t){document.querySelector("#projectList").innerHTML="",t.forEach((function(e){var t=w("#projectList","<p class='project-name'>".concat(e.name,"</p>"),e.id,"div");t.querySelector(".project-name").addEventListener("click",(function(){document.querySelector("#tasks").innerHTML="",x(e)}));var n=document.createElement("button");n.classList.add("text-color-black"),n.innerHTML="Delete",n.addEventListener("click",(function(){var t=document.querySelector("#".concat(e.id));j.projectList.deleteProject(e.id),t.parentElement.removeChild(t);var n=document.getElementById("project".concat(e.id));document.getElementById("tasks").removeChild(n),document.querySelector(".edit-task").innerHTML=""})),t.appendChild(n)}));var n=w("#projectList","","add-project","input");n.type="text",n.classList.add("text-color-black"),n.addEventListener("keyup",(function(t){if("Enter"===t.key){var r=new m(n.value);j.projectList.addProject(r),e(j.projectList.projects)}}))}(j.projectList.projects)}))}]);