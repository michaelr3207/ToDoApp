(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),i=n.n(o),r=n(645),d=n.n(r)()(i());d.push([e.id,'\n* {\n    box-sizing: border-box;\n}\n\nbody, html{\n    background: linear-gradient(237deg, #1f0404, rgb(10, 10, 47));\n    margin: 0;\n    height: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n}\n\n\n.content{\n    width: 77%;\n    height: 90%;\n    /*border: 2px solid red;*/\n    margin: auto;\n    background: linear-gradient(100deg, #e1f1fc, #a1a1a1);\n    /*height: 100%;*/\n    border: 2px solid rgba(0, 0, 0, 0.7);\n    display: grid;\n    grid-template-columns: 0.85fr 3fr;\n    grid-template-rows: 260px 4fr;\n    gap: 0px;\n    border-radius: 10px;\n}\n\n.toDoListProjectDiv{\n    position: absolute;\n    width: 21%;\n    height: 40%;\n    margin-right: 20px;\n    /*background: #ccedff;*/\n    border: 1px solid rgb(0, 0, 0);\n    display: flex;\n    flex-direction: column;\n    left: 50%;\n    justify-content: flex-start;\n    -webkit-box-shadow: 5px 5px 13px 4px rgba(0,0,0,0.53);\n    box-shadow: 5px 5px 13px 4px rgba(0,0,0,0.53);\n    background: -moz-linear-gradient(top, #757575 0%, #c2c2c2 51%, #6c6c6c 100%);\n    background: -webkit-linear-gradient(top, #8c8c8c 0%, #d9d9d9 51%, #939393 100%);\n    background: linear-gradient(to bottom, #b6b6b6 0%, #dadada 51%, #9f9f9f 100%);\n}\n\n.toDoListProjectTitleDiv{\n    /*border-bottom: 2px solid rgba(0, 0, 0, 0.76);*/\n    height: 15%;\n    text-align: center;\n    color: black;\n    font-size: 20px;\n    font-family: Verdana;\n    font-style: italic;\n    text-decoration: underline;\n    font-weight: lighter;\n}\n\n.expandBtnToDo{\n}\n\n.expandAndDeleteBtnDiv{\n    /*border: 1px solid red;*/\n    width: 30%;\n    display: flex;\n    justify-content: space-evenly;\n    text-align: center;\n    margin-top: 2%;\n}\n\n.expandAndDeleteBtnDiv button{\n\n}\n\n.deleteBtnSidebar{\n    background: #690303;\n}\n\n.deleteBtnSidebar:hover{\n    background: #f30404;\n}\n\n.expandBtnSidebar{\n    background: #bcbce1;\n}\n\n.expandBtnSidebar:hover{\n    background: rgba(39, 32, 199, 0.86);\n}\n\n\n#addButton{\n    width: 30%;\n}\n\n\n.btnDivToDoListProject{\n    justify-self: right;\n    align-self: flex-end;\n}\n\n.expandBtnToDo{\n    justify-self: flex-end;\n}\n\n.projectOrderedListDiv li{\n    display: flex;\n    flex-direction: row;\n    /*border: 1px solid red;*/\n    /*justify-content: space-between;*/\n}\n\n.toDoListProjectContainer{\n    /*border: 3px solid orange;*/\n    display: block;\n    font-family: Verdana;\n    font-style: italic;\n\n    height: 100%;\n}\n\n.headerDiv {\n    border-bottom: 2px solid black;\n    grid-column: 2;\n    /*background: gainsboro;*/\n    -webkit-box-shadow: 2px 8px 15px 0px #000000;\n    box-shadow: 2px 8px 15px 0px #000000;\n    /*background-repeat: no-repeat;*/\n    /*background-image: url("banner.jpg");*/\n    background: linear-gradient(234deg,gainsboro, #6b6b6b);\n}\n\n.userName{\n    margin-top: 15px;\n    font-size: 26px;\n    width: 80%;\n    font-weight: bolder;\n}\n\n.searchBar{\n    width: 90%;\n    height: 18%;\n    margin-left: 70px;\n    margin-top: 30px;\n    display: flex;\n}\n\n.searchBar input{\n    border-radius: 20px;\n    background-color: #dcdcdc;\n    height: 100%;\n    width: 55%;\n    margin-left: 30px;\n    border: 1px solid #2a2727;\n}\n\n.secondRow{\n    /*border: 4px solid orange;*/\n    margin-top: 45px;\n    height: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.toDoListProjectElement{\n    display: flex;\n    justify-content: space-between;\n}\n\n.toDoExpansionDiv{\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    background-color: rgba(210, 229, 248, 0.98);\n    border: 4px solid peru;\n    height: 40%;\n    width: 60%;\n    justify-content: space-between;\n}\n\n.toDoExpansionSidebar{\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    background-color: #2f6700;\n    border: 2px solid red;\n    height: 15%;\n    /*width: 30%;*/\n    justify-content: space-between;\n}\n\n\n\n.toDoExpansionDescription, .toDoExpansionDescriptionSidebar{\n    height: 140%;\n    width: 100%;\n}\n\n\n\n\n.toDoExpansionDiv input, .toDoExpansionSidebar input{\n    width: 100%;\n}\n\n\n.iconBar{\n    display: grid;\n    /*border: 2px solid turquoise;*/\n    height: 44%;\n    width: 33%;\n    margin-left: 120px;\n    grid-template-columns: 0.4fr 0.4fr 2fr;\n    margin-top: -10px;\n    gap: -20px;\n    /*grid-column-gap: -20px;*/\n}\n\n.iconBar img{\n    height: 120%;\n    width: 60%;\n}\n\n.personName{\n    margin-top: 7px;\n}\n\n#saveButtonToDoProjectSidebar{\n    width: 100%;\n    height: 12%;\n    border: 4px solid red;\n}\n\n.details{\n    font-weight: bolder;\n    font-size: 25px;\n    margin-left: 30px;\n}\n\n.personDetails img{\n    width: 15%;\n    height: 80%;\n    margin-left: 68px;\n    border: 1px solid #2a2727;\n}\n\n\n.personDetails{\n    /*border: 4px solid green;*/\n    display: flex;\n}\n\n.navButtons button{\n    width: 17%;\n    height: 50%;\n    margin-left: 45px;\n    margin-top: 20px;\n    border-radius: 35px;\n    color: whitesmoke;\n    background-color: rgba(122, 15, 15, 0.91);\n    font-size: 20px;\n    font-weight: bolder;\n    border: 1px solid black;\n    -webkit-box-shadow: 2px 8px 15px 0px #000000;\n    box-shadow: 2px 8px 15px 0px #000000;\n}\n\n.firstBtn{\n    margin-left: 15%;\n}\n\n.sidebarDashImg{\n    /*border: 2px solid red;*/\n    width: 25%;\n    height: 4%;\n}\n\n.sidebarDashImg img{\n    width: 80%;\n    height: 100%;\n    margin-top: 20px;\n    margin-left: 20px;\n}\n\n.dashTitle{\n    /*border: 2px solid turquoise;*/\n    width: 70%;\n    font-size: 38px;\n    padding-top: 26px;\n    margin-top: 15px;\n    font-weight: bolder;\n    font-family: roboto;\n    color: whitesmoke;\n    padding-left: 13px;\n}\n\n\n.sidebarLogoAndTitle{\n    display: flex;\n}\n\n\n.sidebarGrid1{\n    /*border: 2px solid red;*/\n    margin-top: 50px;\n    height: 400px;\n    display: grid;\n}\n\n.sidebarBtn{\n    /*border: 2px solid green;*/\n    width: 42%;\n    height: 50%;\n    margin-left: 50px;\n    margin-bottom: 10px;\n    display: flex;\n}\n\n.sidebarBtn:hover{\n    text-decoration: underline;\n    text-decoration-color: whitesmoke;\n}\n\n.sidebarBtn img{\n    height: 84%;\n    width: 20%;\n    margin-top: 5px;\n}\n\n.sidebarBtnTitle{\n    color: whitesmoke;\n    margin-left: 25px;\n    font-size: 30px;\n}\n\n.sidebarGrid2{\n    /*border: 2px solid red;*/\n    margin-top: 85px;\n    height: 200px;\n    display: grid;\n}\n\n.sidebar{\n    grid-row: 1 / 3;\n    background: linear-gradient(64deg,gainsboro, #5d5c5c);\n    border: 1px solid black;\n    -webkit-box-shadow: 3px 0px 15px 2px #000000;\n    box-shadow: 3px 0px 15px 2px #000000;\n}\n\n.toDoListContainer{\n    /*border: 2px solid green;*/\n    width: 90%;\n    height: 85%;\n    margin: auto;\n    margin-top: 1.5%;\n}\n\n.toDoDiv{\n    font-family: monospace;\n    font-size: 12px;\n    color: white;\n}\n\n.toDoListContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.toDoElement{\n    display: flex;\n    /*border-bottom: 1px solid #040450;*/\n    grid-template-columns: 0.5fr 2fr 0.5fr;\n    width: 100%;\n    height: 5%;\n    justify-content: space-between;\n    margin-top: 5%;\n    border-bottom: 1px solid #493f3f;\n    padding-bottom: -5%;\n}\n\n.toDoElement button{\n    height: 50%;\n    width: 20%;\n    border-radius: 20px;\n\n}\n.addBtn{\n    background: #03692f;\n}\n\n.addBtn:hover{\n    background: #04f348;\n}\n\n\n.toDoTask{\n    font-style: italic;\n    font-size: 25px;\n    color: black;\n}\n\n#deleteButton{\n    /*justify-items: flex-start;*/\n    background: blue;\n}\n\n\n.projectDisplay{\n    display: flex;\n}\n\n\n.section1{\n    width: 100%;\n    padding: 14px;\n    background-color: #e0dede;\n    padding-left: 18px;\n    padding-bottom: 30px;\n    background: #d9d9d9;\n    background: -moz-linear-gradient(top, #757575 0%, #c2c2c2 51%, #6c6c6c 100%);\n    background: -webkit-linear-gradient(top, #8c8c8c 0%, #d9d9d9 51%, #939393 100%);\n    background: linear-gradient(to bottom, #b6b6b6 0%, #dadada 51%, #9f9f9f 100%);\n}\n\n.mainBody{\n    background: #1C6EA4;\n    background: -moz-linear-gradient(top, #1C6EA4 0%, #2388CB 51%, #751E10 100%);\n    background: -webkit-linear-gradient(top, #1C6EA4 0%, #2388CB 51%, #751E10 100%);\n    background: linear-gradient(to bottom, #1C6EA4 0%, #2388CB 51%, #751E10 100%);\n}\n\n.headerForSection1{\n    margin-bottom: 17px;\n    font-size: 24px;\n    margin-top: 10px;\n    height: 5%;\n}\n\n\n.projectGrid{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n    row-gap: 50px;\n    padding-left: 160px;\n    /*border: 2px solid black;*/\n    height: 90%;\n    padding-bottom: 50px;\n}\n\n.projectCard{\n    border: 2px solid black;\n    border-radius: 10px;\n    width: 60%;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    -webkit-box-shadow: 5px 5px 13px 4px rgba(0,0,0,0.53);\n    box-shadow: 5px 5px 13px 4px rgba(0,0,0,0.53);\n}\n\n.projectCardTitle{\n    text-align: center;\n    font-size: 20px;\n    font-family: Verdana;\n    margin-bottom: 12%;\n    text-decoration: underline;\n    text-decoration-style: double;\n    border: 2px solid black;\n}\n\n.projectButtonDiv{\n    display: flex;\n    margin-top: 15%;\n    justify-content: space-between;\n}\n\n.projectButtonDiv button{\n    /*background: #830404;*/\n    /*color: white;*/\n    /*font-family: monospace;*/\n    /*border-radius: 10px;*/\n}\n\n.closeButtonCard{\n    background: #6c0000;\n    color: white;\n    font-family: monospace;\n    font-size: 20px;\n    border-radius: 5px;\n}\n\n\n\n.projectCardDescription{\n    font-size: 15px;\n    text-align: center;\n    font-family: Verdana;\n}\n\n.toDoButton{\n    width: 50%;\n    height: 20%;\n    background: #1C6EA4;\n    align-self: center;\n    margin-top: 10%;\n}\n\n.toDoForm, .projectForm{\n    border: 2px solid red;\n    height: 25%;\n    width: 25%;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    background: rgba(140, 195, 234, 0.88);\n    right: 25%;\n    top: 10%;\n}\n\n\n.projectDescriptionDiv{\n    border: 1px solid #938d8d;\n    border-radius: 2%;\n    position: absolute;\n    width: 10%;\n    height: 10%;\n    font-size: 20px;\n    background: rgba(196, 191, 191, 0.99);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n\n.hide{\n    display: none;\n}',""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(d[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},d=[],c=0;c<e.length;c++){var a=e[c],l=o.base?a[0]+o.base:a[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var u=n(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var g=i(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:g,references:1})}d.push(p)}return d}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var c=n(r[d]);t[c].references--}for(var a=o(e,i),l=0;l<r.length;l++){var s=n(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),d=n.n(r),c=n(565),a=n.n(c),l=n(216),s=n.n(l),p=n(589),u=n.n(p),m=n(426),g={};g.styleTagTransform=u(),g.setAttributes=a(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=s(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const h=n.p+"5f44ecb403569eaaf4ca.png";function f(e,t,n){const o=L("div","expandAndDeleteBtnDiv","",""),i=L("div","toDoElement",t+"toDo",""),r=L("button","deleteBtnSidebar",t+"deleteBtnToDoElement","X"),d=L("button","expandBtnSidebar",t+"expandBtnToDoElement","+"),c=L("div","toDoTask","",`- ${e}`),a=L("button","addBtn",t+"addBtnToDoElement","+");return d.addEventListener("click",(()=>{i.style.textDecoration="underline",document.getElementById(t+"expansionDivSidebar").className="toDoExpansionSidebar"})),function(e,t,n,o){e.addEventListener("click",(e=>{const t=document.getElementById("listContainer"),n=document.getElementById(Number.parseInt(z(e.target.id))+"toDo");t.removeChild(n),G(o.defaultProject,Number.parseInt(z(e.target.id))),o.defaultProject.noOfToDos--,A(),O(o),V()})),t.addEventListener("click",(()=>{o.idOfCurrentSelectedToDo=n}))}(r,a,t,n),o.appendChild(r),o.appendChild(d),o.appendChild(a),i.appendChild(c),i.appendChild(o),console.log(i),i}function b(e,t,n){const o=L("div","hide",t+"expansionDivSidebar",""),i=L("div","answerBoxDivSidebar","",""),r=L("input","toDoExpansionNameSidebar",t+"nameExpansionSidebar",""),d=L("textarea","toDoExpansionDescriptionSidebar",t+"descriptionExpansionSidebar",""),c=L("input","toDoDateDescriptionSidebar",t+"dateExpansionSidebar",""),a=L("button","saveButtonToDoProjectSidebar",t+"saveButtonToDoProjectSidebar","SAVE");a.addEventListener("click",(()=>{const e=r.value,i=d.value,a=c.value;F(n.defaultProject,t).name=e,F(n.defaultProject,t).description=i,F(n.defaultProject,t).dueDate=a,o.className="hide",N(n)})),r.value=F(n.defaultProject,t).name,d.value=F(n.defaultProject,t).description,c.value=F(n.defaultProject,t).dueDate,i.appendChild(r),i.appendChild(d),i.appendChild(c),o.appendChild(i),o.appendChild(a),e.appendChild(o)}function D(e){document.getElementById("listContainer").appendChild(e)}class x{static number=1;constructor(e,t){this.currentSelectedToDo="",this.name=e,this.description=t,this.projectId=x.number++,this.noOfToDos=0,this.toDos=[]}getId(){return this.projectId}getToDoById(e){for(let t of this.toDos)if(t.id.toString()===e.toString())return t}getCurrentSelectedToDo(){return this.currentSelectedToDo}setCurrentSelectedToDo(e){this.currentSelectedToDo=e}removeToDoById(e){console.log("All toDos before:  -----\x3e "+this.toDos);for(let t=0;t<this.toDos.length;t++)this.toDos[t].id.toString()===e.toString()&&(console.log("match"),this.toDos.splice(t,1));console.log("All toDos after:  -----\x3e "+this.toDos)}addToDoTask(e){null!=e&&(this.noOfToDos++,this.toDos.push(e))}addToTask(e){null!=e&&(this.noOfToDos++,this.toDos.push(e))}getAllToDos(){return console.log(this.toDos[0]),this.toDos}}class j{static number=1;constructor(e,t,n){this.id=j.number++,this.name=e,this.description=t,this.completed=!1,this.dueDate=n}getId(){return this.id}getCurrentSelectedToDo(){return this.currentSelectedToDo}setCurrentSelectedToDo(e){this.currentSelectedToDo=e}setDescription(e){this.description=e}setDate(e){this.dueDate=e}setName(e){this.name=e}}function v(){document.getElementById("toDoForm").className="hide"}function y(e){!function(e,t,n,o){let i=new j(e,t,n);const r=f(e,i.getId(),o);D(r),o.defaultProject.toDos.push(i),o.defaultProject.noOfToDos++,b(r,i.id,o),v(),A(),O(o),V(),console.log(`to do id -----------\x3e ${i.name}`),console.log(`to do all tasks -----------\x3e ${o.defaultProject.toDos}`)}(document.getElementById("toDoName").value,document.getElementById("toDoDescription").value,document.getElementById("toDoDate").value,e)}function B(e){document.getElementById(e+"projectDescription").className="projectDescriptionDiv"}function E(e,t,n){if(!0===n.currentlyDisplayingProjectToDos&&"hide"!==e)return void alert("ERROR: Please Close current to do list!");const o=document.getElementById(t+"projectToDoList");"hide"===e?(n.currentlyDisplayingProjectToDos=!1,o.className=e):(n.currentlyDisplayingProjectToDos=!0,o.className="toDoListProjectDiv")}function C(e,t,n,o){t.innerHTML="";const i=H(o,n);console.log(`tetstetstetststst --------\x3e  ${i.projectId}`),i.toDos.forEach(((e,r)=>{console.log("counter ++");const d=L("button","btnDivToDoListProject",e.id+"closeBtnProjectEdit","X"),c=L("button","btnDivToDoListProject",e.id+"expandBtnProjectEdit","+"),a=L("div","projectToDoBtnDiv","",""),l=L("div","toDoListProjectElement",e.id+"toDoListProject","");l.innerHTML+=r+1+" - "+e.name,function(e,t,n,o,i){e.addEventListener("click",(e=>{const t=document.getElementById("orderedList"+n);console.log("--------------- ddd-> "+t);const r=document.getElementById(o+"toDoListProject");t.removeChild(r);const d=document.getElementById(n+"toDoListContainer"),c=document.getElementById("orderedList"+n);null!==c&&d.removeChild(c),C(d,L("div","projectOrderedListDiv","orderedList"+n,""),i,n),G(H(n,i),o),A(),O(i),V()})),t.addEventListener("click",(()=>{!function(e,t){document.getElementById(e+"expansionDiv").className="toDoExpansionDiv",A(),O(t)}(o,i)}))}(d,c,o,e.id,n),a.appendChild(d),a.appendChild(c),l.appendChild(a),function(e,t,n,o){const i=L("div","hide",n+"expansionDiv",""),r=L("div","answerBoxDiv","",""),d=L("input","toDoDate",n+"nameExpansionProject",""),c=L("textarea","toDoExpansionDescription",n+"descriptionExpansion",""),a=L("input","toDoDate",n+"dateExpansion",""),l=L("button","saveButtonToDoProject","saveButtonToDoProject","SAVE");l.addEventListener("click",(()=>{const t=c.value,r=a.value,l=d.value;F(e,n).description=t,F(e,n).dueDate=r,F(e,n).name=l,L("div","projectOrderedListDiv","orderedList"+e.projectId,""),i.className="hide",A(),O(o)})),d.value=F(e,n).name,a.value=F(e,n).dueDate,c.value=F(e,n).description,r.appendChild(d),r.appendChild(c),r.appendChild(a),i.appendChild(r),i.appendChild(l),t.appendChild(i)}(i,l,e.id,n),t.appendChild(l),A(),O(n)})),e.appendChild(t)}function I(e){!function(e,t,n){let o=new x(e,t);console.log(`this is the name --------\x3e ${n.appName}`);const i=document.getElementById("projectGridDiv");n.noProjects<=12?(console.log("mrmfesoemefsfddddddddd"),n.allProjects.push(o),n.noProjects++,localStorage.setItem("projectId",x.number.toString()),function(e,t,n,o,i){const r=L("div","projectCard",o+"project",""),d=L("div","projectButtonDiv","",""),c=L("button","closeButtonCard",o+"closeBtnProject","X"),a=L("button","addButton",o+"addBtnProject","+"),l=L("div","projectCardTitle","",t),s=L("button","toDoButton",o+"descriptionBtnProject","Description"),p=L("button","toDoButton",o+"showToDoBtnProject","To Dos");console.log(`project card elem,ent id  -----\x3e ${r.id}`),d.appendChild(a),d.appendChild(c),r.appendChild(l),r.appendChild(s),r.appendChild(p),r.appendChild(d),function(e,t,n){const o=L("div","hide",n+"projectDescription",t),i=L("div","descriptionCloseBtn",n+"projectCloseBtnOnCard","X");i.addEventListener("click",(()=>{o.className="hide"})),o.appendChild(i),e.appendChild(o)}(r,n,o),e.appendChild(r),function(e,t,n,o,i){e.addEventListener("click",(e=>{const t=z(e.target.id);console.log(`${t} this is the current id ----------`);const n=document.getElementById("projectGridDiv"),o=document.getElementById(Number.parseInt(t)+"project");n.removeChild(o),console.log(t+"<-------------------zz"),M(Number.parseInt(t,i)),O(i),A()})),t.addEventListener("click",(e=>{B(e.target.id.charAt(0))})),n.addEventListener("click",(()=>{if(""!==i.idOfCurrentSelectedToDo){const e=document.getElementById("listContainer"),t=document.getElementById(i.idOfCurrentSelectedToDo+"toDo");e.removeChild(t),i.addToDoToProject(i.idOfCurrentSelectedToDo,o),i.defaultProject.removeToDoById(i.idOfCurrentSelectedToDo),console.log(`-------------------\x3e    ---\x3e  ${i.allProjects[0].toDos[0].description}`),i.idOfCurrentSelectedToDo="",A(),O(i)}else alert("No To DO is Selected!")}))}(c,s,a,o,i),function(e,t,n,o){const i=L("div","hide",t+"projectToDoList",""),r=L("div","toDoListProjectTitleDiv","","Current To Dos"),d=L("div","toDoListProjectContainer",t+"toDoListContainer",""),c=L("div","projectOrderedListDiv","orderedList"+t,""),a=L("button","closeButtonProjectToDoList",t+"closeBtnToListDisplay","X");o.addEventListener("click",(()=>{C(d,c,n,t),E("display",t,n)})),a.addEventListener("click",(()=>{E("hide",t,n)})),i.appendChild(r),i.appendChild(d),r.appendChild(a),e.appendChild(i)}(r,o,i,p),A()}(i,e,t,o.projectId,n),console.log(`to do all projects -----------\x3e ${n.allProjects}`),console.log(`new project ID -----------\x3e ${o.projectId}`),R(),A(),O(n),V()):alert("ERROR: Max number of projects is reached!")}(document.getElementById("projectName").value,document.getElementById("projectDescription").value,e)}class T{constructor(e){!function(e,t){const n=L("div","headerDiv","header","");(function(e){const t=L("div","searchBar","",""),n=new Image,o=new Image,i=new Image,r=L("input","inputBox","","");r.name="searchBox";const d=L("div","iconBar","",""),c=L("div","userName","","John Doe");n.src=P,o.src=w,i.src=k,d.appendChild(o),d.appendChild(i),d.appendChild(c),t.appendChild(n),t.appendChild(r),t.appendChild(d),e.appendChild(t)})(n),function(e,t){const n=L("div","secondRow","",""),o=L("div","personDetails","",""),i=new Image,r=L("div","details","",' <span class="hi">Hi There</span>'),d=L("div","personName","","John Doe");i.src=S,r.appendChild(d),o.appendChild(i),o.appendChild(r),n.appendChild(o),function(e,t){const n=L("div","navButtons","",""),o=L("button","firstBtn","newToDoBtn","To Do"),i=L("button","newProjectButton","newProjectBtn","Project"),r=L("button","clearAllButton","clearAllButton","Clear All");n.appendChild(o),n.appendChild(i),n.appendChild(r),e.appendChild(n),function(e,t,n,o){e.addEventListener("click",(()=>o.displayToDoForm())),t.addEventListener("click",(()=>o.displayProjectForm())),n.addEventListener("click",(()=>console.log("this is the clear all butoon -----\x3e")))}(o,i,r,t)}(n,t),e.appendChild(n)}(n,t),e.appendChild(n),e.appendChild(function(){const e=L("div","sidebar","","");return function(e){const t=L("div","sidebarLogoAndTitle","",""),n=L("div","sidebarDashImg","",""),o=new Image;o.src=h,n.appendChild(o);const i=L("div","dashTitle","","To Do App");t.appendChild(n),t.appendChild(i),e.appendChild(t)}(e),function(e){const t=L("div","toDoListContainer","listContainer","");e.appendChild(t)}(e),e}())}(document.getElementById("contentBox"),this),function(){const e=document.getElementById("contentBox"),t=L("div","projectDisplay","projectDisplayDiv",""),n=L("div","section1","",""),o=L("div","headerForSection1","","Your Projects"),i=L("div","projectGrid","projectGridDiv","");n.appendChild(o),n.appendChild(i),t.appendChild(n),e.appendChild(t)}(),function(e){const t=document.getElementById("contentBox"),n=L("div","hide","toDoForm",""),o=L("input","toDoFormElement","toDoName","");o.placeholder="Name of to do",o.type="text";const i=L("input","toDoFormElement","toDoDescription","");i.placeholder="Description",i.type="text";const r=L("input","toDoFormElement","toDoDate","");r.placeholder="Date",r.type="text";const d=L("button","submitButton","submitBtnToDo","SUBMIT");d.addEventListener("click",(()=>y(e)));const c=L("button","closeButton","closeBtnToDo","CLOSE");c.addEventListener("click",(()=>v())),n.appendChild(o),n.appendChild(i),n.appendChild(r),n.appendChild(d),n.appendChild(c),t.appendChild(n)}(this),function(e){const t=document.getElementById("contentBox"),n=L("div","hide","projectForm",""),o=L("input","projectFormElement","projectName","");o.placeholder="Name of project",o.type="text";const i=L("input","projectFormElement","projectDescription","");i.placeholder="Description",i.type="text";const r=L("button","submitButton","submitBtn","SUBMIT");r.addEventListener("click",(()=>I(e)));const d=L("button","closeButton","closeBtnProjectForm","CLOSE");d.addEventListener("click",(()=>e.hideProjectForm())),n.appendChild(o),n.appendChild(i),n.appendChild(r),n.appendChild(d),t.appendChild(n)}(this),this.idOfCurrentSelectedToDo="",this.appName=e,this.allProjects=[],this.defaultProject=new x("Default","Default Project"),this.noProjects=0,this.currentlyDisplayingProjectToDos=!1,this.mapNumberOfProjects=12}addProject(e){this.allProjects.push(e),this.noProjects++}checkIfThereIsSpaceForProject(){return this.noProjects<12}getCurrentlyDisplayingProjectToDos(){return this.currentlyDisplayingProjectToDos}setCurrentlyDisplayingProjectToDos(e){this.currentlyDisplayingProjectToDos=e}getProjectById(e){console.log("project ud ------\x3e dl "+e);for(let t=0;t<this.allProjects.length;t++)if(this.allProjects[t].projectId.toString()===e.toString())return console.log("match issnadnj"),console.log("---------------\x3e hlele"+this.allProjects[t].title),this.allProjects[t]}removeProjectById(e){console.log("All cards before:  -----\x3e "+this.allProjects);for(let t=0;t<this.allProjects.length;t++)this.allProjects[t].projectId.toString()===e.toString()&&(this.allProjects.splice(t,1),this.decreaseNoProjects());console.log("All cards after:  -----\x3e "+this.getAllProjects())}getAllProjects(){return this.allProjects}decreaseNoProjects(){this.noProjects>0&&this.noProjects--}getAllToDos(){return this.allToDos}getToDoAtIndex(e){return this.allToDos[e]}getAppName(){return this.appName}setAppName(e){this.appName=e}displayToDoForm(){document.getElementById("toDoForm").className="toDoForm"}hideToDoForm(){document.getElementById("toDoForm").className="hide"}displayProjectForm(){document.getElementById("projectForm").className="projectForm"}hideProjectForm(){document.getElementById("projectForm").className="hide"}addToDoToProject(e,t){const n=this.defaultProject.getToDoById(e);for(let e of this.allProjects)e.projectId.toString()===t.toString()&&e.addToDoTask(n)}}const P=n.p+"92c456f0520dd6e0452c.png",w=n.p+"efa23ee519e574f7ebfe.png",k=n.p+"99f37c08ddaa5403bc5b.png",S=n.p+"5084b1677baa072ac38a.jpg";function L(e,t,n,o){const i=document.createElement(e);return""===o&&""===n||(i.innerHTML=o,i.id=n),i.classList.add(t),i}function N(e){document.getElementById("listContainer").innerHTML="",e.defaultProject.toDos.forEach((t=>{const n=f(t.name,t.id,e);D(n),b(n,t.id,e)}))}function A(){const e=document.getElementById("contentBox"),t=document.getElementById("projectGridDiv");localStorage.setItem("projects",t.innerHTML),localStorage.setItem("content",e.innerHTML)}function O(e){e.appName="To Do App now saved",localStorage.setItem("toDoApp",JSON.stringify(e))}function F(e,t){for(let n of e.toDos)if(n.id.toString()===t.toString())return n}function $(e,t){e.toDos.push(t),e.noOfToDos++}function z(e){let t="";for(let n=0;n<e.length;n++)e[n].isNaN||(console.log("letter:  "+e[n]),t+=e[n]);return t}function M(e,t){console.log(e),console.log("All cards before new:  -----\x3e "+t.allProjects);for(let n=0;n<t.allProjects.length;n++)console.log(t.allProjects[n].projectId),t.allProjects[n].projectId===e&&(console.log("hsbfhsfbhsebfhsbefbhe"),t.allProjects.splice(n,1),t.noProjects--,A(),O(t))}function H(e,t){for(let n=0;n<t.allProjects.length;n++)if(console.log(t.allProjects[n].projectId),t.allProjects[n].projectId===e)return t.allProjects[n]}function R(){document.getElementById("projectForm").className="hide"}function G(e,t){console.log("All toDos before:  -----\x3e "+e.toDos);for(let n=0;n<e.toDos.length;n++)e.toDos[n].id.toString()===t.toString()&&(console.log("match"),e.toDos.splice(n,1));console.log("All toDos after:  -----\x3e "+e.toDos)}function V(){if(null!=localStorage.getItem("toDoApp")){console.log("there is storage available neww!");let e=JSON.parse(localStorage.getItem("toDoApp"));console.log("there is storage available!"),console.log(`at the start of the sace ----\x3e ${e.appName}`),console.log("loading local storage...."),document.getElementById("contentBox").innerHTML=localStorage.getItem("content"),x.number=localStorage.getItem("projectId"),function(e){!function(e){document.getElementById("submitBtnToDo").addEventListener("click",(()=>y(e))),document.getElementById("closeBtnToDo").addEventListener("click",(()=>v()))}(e),e.defaultProject.toDos.forEach((t=>{const n=document.getElementById(`${t.id}deleteBtnToDoElement`),o=document.getElementById(`${t.id}expandBtnToDoElement`),i=document.getElementById(`${t.id}addBtnToDoElement`);!function(e,t,n,o,i){t.addEventListener("click",(e=>{const t=document.getElementById("listContainer"),n=document.getElementById(Number.parseInt(z(e.target.id))+"toDo");t.removeChild(n),G(i.defaultProject,Number.parseInt(z(e.target.id))),i.defaultProject.noOfToDos--,A(),O(i),V()})),n.addEventListener("click",(()=>{i.idOfCurrentSelectedToDo=e})),o.addEventListener("click",(()=>{document.getElementById(e+"toDo").style.textDecoration="underline",document.getElementById(e+"expansionDivSidebar").className="toDoExpansionSidebar"}))}(t.id,n,i,o,e),function(e,t){const n=document.getElementById(e+"expansionDivSidebar"),o=document.getElementById(e+"nameExpansionSidebar"),i=document.getElementById(e+"dateExpansionSidebar"),r=document.getElementById(e+"descriptionExpansionSidebar");document.getElementById(e+"saveButtonToDoProjectSidebar").addEventListener("click",(()=>{const d=o.value,c=r.value,a=i.value;F(t.defaultProject,e).name=d,F(t.defaultProject,e).description=c,F(t.defaultProject,e).dueDate=a,n.className="hide",N(t),A(),O(t),V()}))}(t.id,e)}))}(e),function(e){console.log("hellooooooooooooooooooooooooooooooooo"),e.allProjects.forEach((t=>{console.log(`Project id!!! - ${t.projectId}`),function(e,t,n){const o=document.getElementById(t.projectId+"toDoListContainer"),i=document.getElementById("orderedList"+t.projectId);null!==i&&o.removeChild(i);const r=L("div","projectOrderedListDiv","orderedList"+t.projectId,"");e.addEventListener("click",(()=>{C(o,r,n,t.projectId),E("display",t.projectId,n)}))}(document.getElementById(t.projectId+"showToDoBtnProject"),t,e);const n=document.getElementById(t.projectId+"descriptionBtnProject");document.getElementById(t.projectId+"closeBtnProject").addEventListener("click",(t=>{const n=z(t.target.id);console.log(`Char at!!! - ${t.target.id.charAt(0)}`),console.log(`${n} this is the current id ----------`),console.log("bro sdfksamfkms");const o=document.getElementById("projectGridDiv"),i=document.getElementById(Number.parseInt(n)+"project");o.removeChild(i),A(),console.log(n+"<------------------- here"),M(Number.parseInt(n),e),O(e)})),n.addEventListener("click",(e=>{B(Number.parseInt(z(e.target.id)))}));const o=document.getElementById(t.projectId+"projectDescription");document.getElementById(t.projectId+"projectCloseBtnOnCard").addEventListener("click",(()=>{o.className="hide"})),function(e,t){const n=document.getElementById(e.projectId+"addBtnProject"),o=(document.getElementById(e.projectId+"projectToDoList"),L("div","toDoListProjectTitleDiv","","Current To Dos"),document.getElementById(e.projectId+"toDoListContainer"),L("div","projectOrderedListDiv","orderedList"+e.projectId,""),document.getElementById(e.projectId+"closeBtnToListDisplay"));document.getElementById(e.projectId+"showToDoBtnProject"),o.addEventListener("click",(()=>{E("hide",e.projectId,t)})),n.addEventListener("click",(()=>{if(""!==t.idOfCurrentSelectedToDo){const n=document.getElementById("listContainer"),o=document.getElementById(t.idOfCurrentSelectedToDo+"toDo");n.removeChild(o),function(e,t,n){const o=function(e,t){let n;return console.log("dnfdnhbgdbhbdrf ------\x3e"),e.toDos.forEach((e=>{e.id.toString()===t.toString()&&(n=e)})),n}(n.defaultProject,t);console.log("dnfdnhbgdbhbdrf");for(let t of n.allProjects)t.projectId.toString()===e.toString()&&$(t,o)}(e.projectId,t.idOfCurrentSelectedToDo,t),G(t.defaultProject,t.idOfCurrentSelectedToDo),t.defaultProject.noOfToDos--,console.log(`-------------------\x3e    ---\x3e  ${t.allProjects[0].toDos[0].description}`),t.idOfCurrentSelectedToDo="",A(),O(t)}else alert("No To DO is Selected!")}))}(t,e)}));const t=document.getElementById("newProjectBtn"),n=document.getElementById("clearAllButton");!function(e,t,n,o){e.addEventListener("click",(()=>{document.getElementById("toDoForm").className="toDoForm"})),t.addEventListener("click",(()=>{document.getElementById("projectForm").className="projectForm"})),n.addEventListener("click",(()=>console.log("this is the clear all butoon -----\x3e")))}(document.getElementById("newToDoBtn"),t,n),function(e){const t=document.getElementById("submitBtn");document.getElementById("closeBtnProjectForm").addEventListener("click",(()=>R())),t.addEventListener("click",(()=>I(e)))}(e)}(e)}else new T("Basic To Do App with no storage")}V()})()})();