(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(81),r=t.n(o),i=t(645),d=t.n(i)()(r());d.push([n.id,'\n* {\n    box-sizing: border-box;\n}\n\nbody, html{\n    background: linear-gradient(237deg, #1f0404, rgb(10, 10, 47));\n    margin: 0;\n    height: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n}\n\n\n.content{\n    width: 77%;\n    /*border: 2px solid red;*/\n    margin: auto;\n    background: linear-gradient(100deg, #e1f1fc, #a1a1a1);\n    /*height: 100%;*/\n    border: 2px solid rgba(0, 0, 0, 0.7);\n    display: grid;\n    grid-template-columns: 0.85fr 3fr;\n    grid-template-rows: 260px 4fr;\n    gap: 0px;\n    border-radius: 10px;\n}\n\n\n.headerDiv {\n    border-bottom: 2px solid black;\n    grid-column: 2;\n    /*background: gainsboro;*/\n    -webkit-box-shadow: 2px 8px 15px 0px #000000;\n    box-shadow: 2px 8px 15px 0px #000000;\n    /*background-repeat: no-repeat;*/\n    /*background-image: url("banner.jpg");*/\n    background: linear-gradient(234deg,gainsboro, #6b6b6b);\n}\n\n.userName{\n    margin-top: 15px;\n    font-size: 26px;\n    width: 80%;\n    font-weight: bolder;\n}\n\n.searchBar{\n    width: 90%;\n    height: 18%;\n    margin-left: 70px;\n    margin-top: 30px;\n    display: flex;\n}\n\n.searchBar input{\n    border-radius: 20px;\n    background-color: #dcdcdc;\n    height: 100%;\n    width: 55%;\n    margin-left: 30px;\n    border: 1px solid #2a2727;\n}\n\n.secondRow{\n    /*border: 4px solid orange;*/\n    margin-top: 45px;\n    height: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n\n\n.iconBar{\n    display: grid;\n    /*border: 2px solid turquoise;*/\n    height: 44%;\n    width: 33%;\n    margin-left: 120px;\n    grid-template-columns: 0.4fr 0.4fr 2fr;\n    margin-top: -10px;\n    gap: -20px;\n    /*grid-column-gap: -20px;*/\n}\n\n.iconBar img{\n    height: 120%;\n    width: 60%;\n}\n\n.personName{\n    margin-top: 7px;\n}\n\n\n.details{\n    font-weight: bolder;\n    font-size: 25px;\n    margin-left: 30px;\n}\n\n.personDetails img{\n    width: 15%;\n    height: 80%;\n    margin-left: 68px;\n    border: 1px solid #2a2727;\n}\n\n\n.personDetails{\n    /*border: 4px solid green;*/\n    display: flex;\n}\n\n.navButtons button{\n    width: 17%;\n    height: 50%;\n    margin-left: 45px;\n    margin-top: 20px;\n    border-radius: 35px;\n    color: whitesmoke;\n    background-color: rgba(122, 15, 15, 0.91);\n    font-size: 20px;\n    font-weight: bolder;\n    border: 1px solid black;\n    -webkit-box-shadow: 2px 8px 15px 0px #000000;\n    box-shadow: 2px 8px 15px 0px #000000;\n}\n\n.firstBtn{\n    margin-left: 15%;\n}\n\n.sidebarDashImg{\n    /*border: 2px solid red;*/\n    width: 25%;\n    height: 4%;\n}\n\n.sidebarDashImg img{\n    width: 80%;\n    height: 100%;\n    margin-top: 20px;\n    margin-left: 20px;\n}\n\n.dashTitle{\n    /*border: 2px solid turquoise;*/\n    width: 70%;\n    font-size: 38px;\n    padding-top: 26px;\n    margin-top: 15px;\n    font-weight: bolder;\n    font-family: roboto;\n    color: whitesmoke;\n    padding-left: 13px;\n}\n\n\n.sidebarLogoAndTitle{\n    display: flex;\n}\n\n\n.sidebarGrid1{\n    /*border: 2px solid red;*/\n    margin-top: 50px;\n    height: 400px;\n    display: grid;\n}\n\n.sidebarBtn{\n    /*border: 2px solid green;*/\n    width: 42%;\n    height: 50%;\n    margin-left: 50px;\n    margin-bottom: 10px;\n    display: flex;\n}\n\n.sidebarBtn:hover{\n    text-decoration: underline;\n    text-decoration-color: whitesmoke;\n}\n\n.sidebarBtn img{\n    height: 84%;\n    width: 20%;\n    margin-top: 5px;\n}\n\n.sidebarBtnTitle{\n    color: whitesmoke;\n    margin-left: 25px;\n    font-size: 30px;\n}\n\n.sidebarGrid2{\n    /*border: 2px solid red;*/\n    margin-top: 85px;\n    height: 200px;\n    display: grid;\n}\n\n.sidebar{\n    grid-row: 1 / 3;\n    background: linear-gradient(64deg,gainsboro, #5d5c5c);\n    border: 1px solid black;\n    -webkit-box-shadow: 3px 0px 15px 2px #000000;\n    box-shadow: 3px 0px 15px 2px #000000;\n}\n\n.toDoListContainer{\n    /*border: 2px solid green;*/\n    width: 90%;\n    height: 85%;\n    margin: auto;\n    margin-top: 1.5%;\n}\n\n.toDoDiv{\n    font-family: monospace;\n    font-size: 20px;\n    color: white;\n}\n\n.toDoListContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.toDoElement{\n    display: flex;\n    /*border-bottom: 1px solid #040450;*/\n    grid-template-columns: 0.5fr 2fr 0.5fr;\n    text-align: center;\n    width: 100%;\n    height: 5%;\n    justify-content: space-between;\n    margin-top: 2%;\n}\n\n.toDoElement button{\n    height: 100%;\n    width: 10%;\n    border-radius: 20px;\n}\n\n.toDoTask{\n    font-style: italic;\n    font-size: 35px;\n    color: black;\n\n}\n\n#deleteButton{\n    /*justify-items: flex-start;*/\n    background: blue;\n}\n\n#addButton{\n    /*justify-self: flex-end;*/\n    margin-left: 8%;\n    background: green;\n}\n\n.projectDisplay{\n    display: flex;\n}\n\n\n.section1{\n    width: 100%;\n    padding: 14px;\n    background-color: #e0dede;\n    padding-left: 18px;\n    padding-bottom: 30px;\n    background: #d9d9d9;\n    background: -moz-linear-gradient(top, #757575 0%, #c2c2c2 51%, #6c6c6c 100%);\n    background: -webkit-linear-gradient(top, #8c8c8c 0%, #d9d9d9 51%, #939393 100%);\n    background: linear-gradient(to bottom, #b6b6b6 0%, #dadada 51%, #9f9f9f 100%);\n}\n\n.mainBody{\n    background: #1C6EA4;\n    background: -moz-linear-gradient(top, #1C6EA4 0%, #2388CB 51%, #751E10 100%);\n    background: -webkit-linear-gradient(top, #1C6EA4 0%, #2388CB 51%, #751E10 100%);\n    background: linear-gradient(to bottom, #1C6EA4 0%, #2388CB 51%, #751E10 100%);\n}\n\n.headerForSection1{\n    margin-bottom: 17px;\n    font-size: 24px;\n    margin-top: 10px;\n    height: 5%;\n}\n\n\n.projectGrid{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n    row-gap: 50px;\n    padding-left: 160px;\n    /*border: 2px solid black;*/\n    height: 90%;\n    padding-bottom: 50px;\n}\n\n.projectCard{\n    border: 2px solid black;\n    border-radius: 10px;\n    width: 60%;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    -webkit-box-shadow: 5px 5px 13px 4px rgba(0,0,0,0.53);\n    box-shadow: 5px 5px 13px 4px rgba(0,0,0,0.53);\n}\n\n.projectCardTitle{\n    text-align: center;\n    font-size: 20px;\n    font-family: Verdana;\n    margin-bottom: 12%;\n    text-decoration: underline;\n    text-decoration-style: double;\n    border: 2px solid black;\n}\n\n.projectButtonDiv{\n    display: flex;\n    margin-top: 15%;\n    justify-content: space-between;\n}\n\n.projectButtonDiv button{\n    /*background: #830404;*/\n    /*color: white;*/\n    /*font-family: monospace;*/\n    /*border-radius: 10px;*/\n}\n\n.closeButtonCard{\n    background: #6c0000;\n    color: white;\n    font-family: monospace;\n    font-size: 20px;\n    border-radius: 5px;\n}\n\n.addButton{\n    background: #2f6700;\n    color: white;\n    font-family: monospace;\n    font-size: 20px;\n    border-radius: 5px;\n}\n\n.projectCardDescription{\n    font-size: 15px;\n    text-align: center;\n    font-family: Verdana;\n}\n\n.toDoButton{\n    width: 50%;\n    height: 20%;\n    background: #1C6EA4;\n    align-self: center;\n    margin-top: 10%;\n}\n\n.toDoForm, .projectForm{\n    border: 2px solid red;\n    height: 25%;\n    width: 25%;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    background: rgba(140, 195, 234, 0.88);\n    right: 25%;\n    top: 10%;\n}\n\n\n\n.hide{\n    display: none;\n}',""]);const a=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var p=this[a][0];null!=p&&(d[p]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},d=[],a=0;a<n.length;a++){var p=n[a],c=o.base?p[0]+o.base:p[0],l=i[c]||0,s="".concat(c," ").concat(l);i[c]=l+1;var u=t(s),h={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var g=r(h,o);o.byIndex=a,e.splice(a,0,{identifier:s,updater:g,references:1})}d.push(s)}return d}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var d=0;d<i.length;d++){var a=t(i[d]);e[a].references--}for(var p=o(n,r),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=p}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),d=t.n(i),a=t(565),p=t.n(a),c=t(216),l=t.n(c),s=t(589),u=t.n(s),h=t(426),g={};function m(n,e,t,o){const r=document.createElement(n);return""===o&&""===t||(r.innerHTML=o,r.id=t),r.classList.add(e),r}g.styleTagTransform=u(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=t.p+"92c456f0520dd6e0452c.png",b=t.p+"efa23ee519e574f7ebfe.png",x=t.p+"99f37c08ddaa5403bc5b.png",v=t.p+"5084b1677baa072ac38a.jpg";const D=t.p+"5f44ecb403569eaaf4ca.png";class y{static number=1;constructor(n,e){this.currentSelectedToDo="",this.name=n,this.description=e,this.projectId=y.number++,this.noOfToDos=0,this.toDos=[]}getId(){return this.projectId}getCurrentSelectedToDo(){return this.currentSelectedToDo}setCurrentSelectedToDo(n){this.currentSelectedToDo=n}removeToDoById(n){console.log("All toDos before:  -----\x3e "+this.toDos);for(let e=0;e<this.toDos.length;e++)this.toDos[e].id.toString()===n.toString()&&(console.log("match"),this.toDos.splice(e,1));console.log("All toDos after:  -----\x3e "+this.toDos)}addToDoTask(n){null!=n&&(this.noOfToDos++,this.toDos.push(n))}addToTask(n){null!=n&&(this.noOfToDos++,this.toDos.push(n))}getAllToDos(){return console.log(this.toDos[0]),this.toDos}}class C{static number=1;constructor(n,e,t){this.id=C.number++,this.name=n,this.description=e,this.completed=!1,this.dueDate=t}getId(){return this.id}getCurrentSelectedToDo(){return this.currentSelectedToDo}setCurrentSelectedToDo(n){this.currentSelectedToDo=n}}function w(n){const e=document.getElementById("contentBox"),t=m("div","hide","toDoForm",""),o=m("input","toDoFormElement","toDoName","");o.placeholder="Name of to do",o.type="text";const r=m("input","toDoFormElement","toDoDescription","");r.placeholder="Description",r.type="text";const i=m("input","toDoFormElement","toDoDate","");i.placeholder="Name of to do",i.type="text";const d=m("button","submitButton","","SUBMIT");d.addEventListener("click",(()=>function(n){!function(n,e,t,o){let r=new C(n,e,t);var i;i=function(n,e,t){const o=m("div","toDoElement",e+"toDo",""),r=m("button","deleteBtn",e,"X"),i=m("div","toDoTask","",n),d=m("button","addBtn","addButton","+");return function(n,e,t){n.addEventListener("click",(n=>{const e=document.getElementById("listContainer"),o=document.getElementById(n.target.id+"toDo");e.removeChild(o),t.defaultProject.removeToDoById(n.target.id)}))}(r,0,t),o.appendChild(r),o.appendChild(i),o.appendChild(d),console.log(o),o}(e,r.getId(),o),document.getElementById("listContainer").appendChild(i),o.defaultProject.addToDoTask(r),console.log(`to do id -----------\x3e ${r.name}`),console.log(`to do all tasks -----------\x3e ${o.defaultProject.getAllToDos()}`)}(document.getElementById("toDoName").value,document.getElementById("toDoDescription").value,document.getElementById("toDoDate").value,n)}(n)));const a=m("button","closeButton","","CLOSE");a.addEventListener("click",(()=>n.hideToDoForm())),t.appendChild(o),t.appendChild(r),t.appendChild(i),t.appendChild(d),t.appendChild(a),e.appendChild(t)}function j(n){const e=document.getElementById("contentBox"),t=m("div","hide","projectForm",""),o=m("input","projectFormElement","projectName","");o.placeholder="Name of project",o.type="text";const r=m("input","projectFormElement","projectDescription","");r.placeholder="Description",r.type="text";const i=m("button","submitButton","","SUBMIT");i.addEventListener("click",(()=>function(n){!function(n,e,t){let o=new y(n,e);const r=document.getElementById("projectGridDiv");t.addProject(o),function(n,e,t,o,r){const i=m("div","projectCard",o+"project",""),d=m("div","projectButtonDiv","",""),a=m("button","closeButtonCard",o,"X"),p=m("button","addButton","","+"),c=m("div","projectCardTitle","",e),l=m("button","toDoButton","","Description"),s=m("button","toDoButton","","To Dos");console.log(`project card elem,ent id  -----\x3e ${i.id}`),d.appendChild(p),d.appendChild(a),i.appendChild(c),i.appendChild(l),i.appendChild(s),i.appendChild(d),n.appendChild(i),function(n,e){n.addEventListener("click",(n=>{const t=document.getElementById("projectGridDiv"),o=document.getElementById(n.target.id+"project");t.removeChild(o),console.log(n.target.id+"<-------------------"),e.removeProjectById(n.target.id)}))}(a,r)}(r,n,0,o.projectId,t),console.log(`to do all projects -----------\x3e ${t.getAllProjects()}`),console.log(`new project ID -----------\x3e ${o.projectId}`)}(document.getElementById("projectName").value,document.getElementById("projectDescription").value,n)}(n)));const d=m("button","closeButton","","CLOSE");d.addEventListener("click",(()=>n.hideProjectForm())),t.appendChild(o),t.appendChild(r),t.appendChild(i),t.appendChild(d),e.appendChild(t)}new class{constructor(n){!function(n,e){const t=m("div","headerDiv","header","");(function(n){const e=m("div","searchBar","",""),t=new Image,o=new Image,r=new Image,i=m("input","inputBox","","");i.name="searchBox";const d=m("div","iconBar","",""),a=m("div","userName","","Michael R");t.src=f,o.src=b,r.src=x,d.appendChild(o),d.appendChild(r),d.appendChild(a),e.appendChild(t),e.appendChild(i),e.appendChild(d),n.appendChild(e)})(t),function(n,e){const t=m("div","secondRow","",""),o=m("div","personDetails","",""),r=new Image,i=m("div","details","",' <span class="hi">Hi There</span>'),d=m("div","personName","","Michael Robinson");r.src=v,i.appendChild(d),o.appendChild(r),o.appendChild(i),t.appendChild(o),function(n,e){const t=m("div","navButtons","",""),o=m("button","firstBtn","","To Do"),r=m("button","newProjectButton","","Project"),i=m("button","clearAllButton","","Clear All");t.appendChild(o),t.appendChild(r),t.appendChild(i),n.appendChild(t),function(n,e,t){n.addEventListener("click",(()=>t.displayToDoForm())),e.addEventListener("click",(()=>t.displayProjectForm()))}(o,r,e)}(t,e),n.appendChild(t)}(t,e),n.appendChild(t),n.appendChild(function(){const n=m("div","sidebar","","");return function(n){const e=m("div","sidebarLogoAndTitle","",""),t=m("div","sidebarDashImg","",""),o=new Image;o.src=D,t.appendChild(o);const r=m("div","dashTitle","","To Do App");e.appendChild(t),e.appendChild(r),n.appendChild(e)}(n),function(n){const e=m("div","toDoListContainer","listContainer","");n.appendChild(e)}(n),n}())}(document.getElementById("contentBox"),this),function(){const n=document.getElementById("contentBox"),e=m("div","projectDisplay","projectDisplayDiv",""),t=m("div","section1","",""),o=m("div","headerForSection1","","Your Projects"),r=m("div","projectGrid","projectGridDiv","");t.appendChild(o),t.appendChild(r),e.appendChild(t),n.appendChild(e)}(),w(this),j(this),this.appName=n,this.allProjects=[],this.defaultProject=new y("Default","Default Project")}addProject(n){this.allProjects.push(n)}removeProjectById(n){console.log("All cards before:  -----\x3e "+this.allProjects);for(let e=0;e<this.allProjects.length;e++)this.allProjects[e].projectId.toString()===n.toString()&&this.allProjects.splice(e,1);console.log("All cards after:  -----\x3e "+this.getAllProjects())}getAllProjects(){return this.allProjects}getAllToDos(){return this.allToDos}getToDoAtIndex(n){return this.allToDos[n]}getAppName(){return this.appName}setAppName(n){this.appName=n}displayToDoForm(){document.getElementById("toDoForm").className="toDoForm"}hideToDoForm(){document.getElementById("toDoForm").className="hide"}displayProjectForm(){document.getElementById("projectForm").className="projectForm"}hideProjectForm(){document.getElementById("projectForm").className="hide"}}("Basic To Do App")})()})();