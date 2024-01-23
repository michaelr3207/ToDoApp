(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'\n* {\n    box-sizing: border-box;\n}\n\nbody, html{\n    background: linear-gradient(237deg, #1f0404, rgb(10, 10, 47));\n    margin: 0;\n    height: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n\n}\n\n\n.content{\n    width: 77%;\n    /*border: 2px solid red;*/\n    margin: auto;\n    background: linear-gradient(100deg, #e1f1fc, #a1a1a1);\n    height: 100%;\n    border: 2px solid rgba(0, 0, 0, 0.7);\n    display: grid;\n    grid-template-columns: 0.85fr 3fr;\n    grid-template-rows: 260px 4fr;\n    gap: 0px;\n    border-radius: 10px;\n}\n\n\n.headerDiv {\n    border-bottom: 2px solid black;\n    grid-column: 2;\n    /*background: gainsboro;*/\n    -webkit-box-shadow: 2px 8px 15px 0px #000000;\n    box-shadow: 2px 8px 15px 0px #000000;\n    /*background-repeat: no-repeat;*/\n    /*background-image: url("banner.jpg");*/\n    background: linear-gradient(234deg,gainsboro, #6b6b6b);\n}\n\n.userName{\n    margin-top: 15px;\n    font-size: 26px;\n    width: 80%;\n    font-weight: bolder;\n}\n\n.searchBar{\n    width: 90%;\n    height: 18%;\n    margin-left: 70px;\n    margin-top: 30px;\n    display: flex;\n}\n\n.searchBar input{\n    border-radius: 20px;\n    background-color: #dcdcdc;\n    height: 100%;\n    width: 55%;\n    margin-left: 30px;\n    border: 1px solid #2a2727;\n}\n\n.secondRow{\n    /*border: 4px solid orange;*/\n    margin-top: 45px;\n    height: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n\n\n.iconBar{\n    display: grid;\n    /*border: 2px solid turquoise;*/\n    height: 44%;\n    width: 33%;\n    margin-left: 120px;\n    grid-template-columns: 0.4fr 0.4fr 2fr;\n    margin-top: -10px;\n    gap: -20px;\n    /*grid-column-gap: -20px;*/\n}\n\n.iconBar img{\n    height: 120%;\n    width: 60%;\n}\n\n.personName{\n    margin-top: 7px;\n}\n\n\n.details{\n    font-weight: bolder;\n    font-size: 25px;\n    margin-left: 30px;\n}\n\n.personDetails img{\n    width: 15%;\n    height: 80%;\n    margin-left: 68px;\n    border: 1px solid #2a2727;\n}\n\n\n.personDetails{\n    /*border: 4px solid green;*/\n    display: flex;\n}\n\n.navButtons button{\n    width: 17%;\n    height: 50%;\n    margin-left: 45px;\n    margin-top: 20px;\n    border-radius: 35px;\n    color: whitesmoke;\n    background-color: rgba(122, 15, 15, 0.91);\n    font-size: 20px;\n    font-weight: bolder;\n    -webkit-box-shadow: 2px 8px 15px 0px #000000;\n    box-shadow: 2px 8px 15px 0px #000000;\n}\n\n.firstBtn{\n    margin-left: 15%;\n}\n\n.sidebarDashImg{\n    /*border: 2px solid red;*/\n    width: 25%;\n    height: 4%;\n}\n\n.sidebarDashImg img{\n    width: 80%;\n    height: 100%;\n    margin-top: 20px;\n    margin-left: 20px;\n}\n\n.dashTitle{\n    /*border: 2px solid turquoise;*/\n    width: 70%;\n    font-size: 38px;\n    padding-top: 26px;\n    margin-top: 15px;\n    font-weight: bolder;\n    font-family: roboto;\n    color: whitesmoke;\n    padding-left: 13px;\n}\n\n\n.sidebarLogoAndTitle{\n    display: flex;\n}\n\n\n.sidebarGrid1{\n    /*border: 2px solid red;*/\n    margin-top: 50px;\n    height: 400px;\n    display: grid;\n}\n\n.sidebarBtn{\n    /*border: 2px solid green;*/\n    width: 42%;\n    height: 50%;\n    margin-left: 50px;\n    margin-bottom: 10px;\n    display: flex;\n}\n\n.sidebarBtn:hover{\n    text-decoration: underline;\n    text-decoration-color: whitesmoke;\n}\n\n.sidebarBtn img{\n    height: 84%;\n    width: 20%;\n    margin-top: 5px;\n}\n\n.sidebarBtnTitle{\n    color: whitesmoke;\n    margin-left: 25px;\n    font-size: 30px;\n}\n\n.sidebarGrid2{\n    /*border: 2px solid red;*/\n    margin-top: 85px;\n    height: 200px;\n    display: grid;\n}\n\n.sidebar{\n    grid-row: 1 / 3;\n    background: linear-gradient(64deg,gainsboro, #5d5c5c);\n    border: 1px solid black;\n    -webkit-box-shadow: 3px 0px 15px 2px #000000;\n    box-shadow: 3px 0px 15px 2px #000000;\n}\n\n.toDoListContainer{\n    /*border: 2px solid green;*/\n    width: 90%;\n    height: 85%;\n    margin: auto;\n    margin-top: 1.5%;\n}\n\n.toDoDiv{\n    font-family: monospace;\n    font-size: 20px;\n    color: white;\n}\n\n.toDoListContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.toDoElement{\n    display: flex;\n    /*border-bottom: 1px solid #040450;*/\n    grid-template-columns: 0.5fr 2fr 0.5fr;\n    text-align: center;\n    width: 100%;\n    height: 5%;\n    justify-content: space-between;\n    margin-top: 2%;\n}\n\n.toDoElement button{\n    height: 100%;\n    width: 10%;\n    border-radius: 20px;\n}\n\n.toDoTask{\n    font-style: italic;\n    font-size: 35px;\n    color: black;\n\n}\n\n#deleteButton{\n    /*justify-items: flex-start;*/\n    background: blue;\n}\n\n#addButton{\n    /*justify-self: flex-end;*/\n    margin-left: 8%;\n    background: green;\n}',""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var p=this[d][0];null!=p&&(a[p]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var p=n[d],s=r.base?p[0]+r.base:p[0],l=i[s]||0,c="".concat(s," ").concat(l);i[s]=l+1;var u=t(c),g={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var h=o(g,r);r.byIndex=d,e.splice(d,0,{identifier:c,updater:h,references:1})}a.push(c)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var p=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),d=t(565),p=t.n(d),s=t(216),l=t.n(s),c=t(589),u=t.n(c),g=t(426),h={};function f(n,e,t,r){const o=document.createElement(n);return""===r&&""===t||(o.innerHTML=r,o.id=t),o.classList.add(e),o}h.styleTagTransform=u(),h.setAttributes=p(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const m=t.p+"92c456f0520dd6e0452c.png",x=t.p+"efa23ee519e574f7ebfe.png",b=t.p+"99f37c08ddaa5403bc5b.png",v=t.p+"5084b1677baa072ac38a.jpg";const w=t.p+"5f44ecb403569eaaf4ca.png";function y(n,e){const t=f("div","toDoElement",e,""),r=f("button","deleteBtn","deleteButton","X"),o=f("div","toDoTask","",n),i=f("button","addBtn","addButton","+");return t.appendChild(r),t.appendChild(o),t.appendChild(i),console.log(t),t}function C(n){document.getElementById("listContainer").appendChild(n)}!function(){const n=document.getElementById("contentBox"),e=f("div","headerDiv","header","");!function(n){const e=f("div","searchBar","",""),t=new Image,r=new Image,o=new Image,i=f("input","inputBox","","");i.name="searchBox";const a=f("div","iconBar","",""),d=f("div","userName","","Michael R");t.src=m,r.src=x,o.src=b,a.appendChild(r),a.appendChild(o),a.appendChild(d),e.appendChild(t),e.appendChild(i),e.appendChild(a),n.appendChild(e)}(e),function(n){const e=f("div","secondRow","",""),t=f("div","personDetails","",""),r=new Image,o=f("div","details","",' <span class="hi">Hi There</span>'),i=f("div","personName","","Michael Robinson");r.src=v,o.appendChild(i),t.appendChild(r),t.appendChild(o),e.appendChild(t),function(n){const e=f("div","navButtons","",""),t=f("button","firstBtn","","To Do"),r=f("button","newProjectButton","","Project"),o=f("button","clearAllButton","","Clear All");e.appendChild(t),e.appendChild(r),e.appendChild(o),n.appendChild(e)}(e),n.appendChild(e)}(e),n.appendChild(e),n.appendChild(function(){const n=f("div","sidebar","","");return function(n){const e=f("div","sidebarLogoAndTitle","",""),t=f("div","sidebarDashImg","",""),r=new Image;r.src=w,t.appendChild(r);const o=f("div","dashTitle","","To Do App");e.appendChild(t),e.appendChild(o),n.appendChild(e)}(n),function(n){const e=f("div","toDoListContainer","listContainer","");n.appendChild(e)}(n),n}()),C(y("testst","0")),C(y("walk dog","0")),C(y("testst","0"))}()})()})();