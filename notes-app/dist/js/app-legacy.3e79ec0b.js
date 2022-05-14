(function(){"use strict";var t={905:function(t,e,r){var i=r(144),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"notes",attrs:{id:"App"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"notes_inner"},[r("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t.message?r("message",{attrs:{message:t.message}}):t._e(),r("newNote",{attrs:{note:t.note,notes:t.notes},on:{addNote:t.addNote}}),r("div",{staticClass:"tools"},[r("search",{attrs:{placeholder:"Search",value:t.search},on:{search:function(e){t.search=e}}}),r("div",{staticClass:"view"},[r("svg",{class:{active:t.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!0}}},[r("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),r("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),r("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),r("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),r("svg",{class:{active:!t.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!1}}},[r("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),r("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),r("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),r("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),r("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),r("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),r("notes",{attrs:{notes:t.notesFilter,grid:t.grid},on:{remove:t.removeNote}})],1)])])},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.message?r("div",{staticClass:"error"},[r("p",{staticClass:"error-message"},[t._v(t._s(t.message))])]):t._e()},a=[],l={props:{message:{type:String,required:!0}}},c=l,d=r(1),u=(0,d.Z)(c,o,a,!1,null,"396a7f4e",null),p=u.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"new_note"},[r("label",{attrs:{for:"newNoteTitle"}},[t._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"title-input",attrs:{type:"text",id:"newNoteTitle"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}),r("label",{attrs:{for:"newNoteDescr"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.descr,expression:"note.descr"}],staticClass:"descr-input",attrs:{name:"",id:"newNoteDescr"},domProps:{value:t.note.descr},on:{input:function(e){e.target.composing||t.$set(t.note,"descr",e.target.value)}}}),r("label",{attrs:{for:"newNotePriority"}},[t._v("Priority")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.note.priority,expression:"note.priority"}],staticClass:"priority-select",attrs:{name:"",id:"newNotePriority"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.note,"priority",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"standart"}},[t._v("Standart")]),r("option",{attrs:{value:"medium"}},[t._v("Medium")]),r("option",{attrs:{value:"height"}},[t._v("Height")])]),r("button",{staticClass:"add-note-btn",on:{click:t.addNote}},[t._v("Add new note")])])},v=[],f={props:{note:{type:Object,required:!0},notes:{type:Array,required:!0}},methods:{addNote(){this.note.id=this.notes.length+1,this.$emit("addNote",this.note)}}},m=f,g=(0,d.Z)(m,h,v,!1,null,null,null),w=g.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"notes-wrapper"},t._l(t.notes,(function(e,i){return r("div",{key:i,staticClass:"note",class:{full:!t.grid,height:"height"==e.priority,medium:"medium"==e.priority}},[r("p",{staticClass:"remove",on:{click:function(r){return t.removeNote(e)}}},[t._v("x")]),r("p",{staticClass:"note-title",on:{click:function(r){return t.editNote(e)}}},[t._v(t._s(e.title))]),r("p",{staticClass:"note-descr"},[t._v(t._s(e.descr))]),r("p",{staticClass:"note-date"},[t._v(t._s(e.date))])])})),0)},x=[],_={props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0}},methods:{removeNote(t){let e=t.id;this.$emit("remove",e)},editNote(t){console.log(t)}}},C=_,N=(0,d.Z)(C,y,x,!1,null,"7cc0c220",null),b=N.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search-input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])},O=[],$={data(){return{search:this.value}},props:{placeholder:{type:String,required:!0},value:{type:String,required:!0}},watch:{search(t){this.$emit("search",t)}}},D=$,S=(0,d.Z)(D,k,O,!1,null,"2b0a48eb",null),j=S.exports,P={name:"App",components:{message:p,newNote:w,notes:b,search:j},data(){return{title:"Notes App",message:null,grid:!0,search:"",note:{title:"",descr:"",id:null,priority:"standart"},notes:[{id:1,title:"First title",descr:"First description",priority:"standart",date:new Date(Date.now()).toLocaleString()},{id:2,title:"Second title",descr:"Second description",priority:"standart",date:new Date(Date.now()).toLocaleString()},{id:3,title:"Third title",descr:"Third description",priority:"standart",date:new Date(Date.now()).toLocaleString()}]}},methods:{addNote(){if(""===this.note.title)return console.log(),this.message="title can't be blank",!1;this.notes.push({title:this.note.title,descr:this.note.descr,id:this.note.id,priority:this.note.priority,date:new Date(Date.now()).toLocaleString()}),this.message=null,this.note.title="",this.note.descr="",this.note.priority="standart"},removeNote(t){let e=this.notes.findIndex((e=>e.id===t));this.notes.splice(e,1)}},computed:{notesFilter(){let t=this.notes;return j=this.search,j?(j=j.trim().toLowerCase(),t=t.filter((function(t){if(-1!==t.title.toLowerCase().indexOf(j))return t})),t):t}}},T=P,q=(0,d.Z)(T,n,s,!1,null,null,null),A=q.exports;i.Z.config.productionTip=!1,new i.Z({render:function(t){return t(A)}}).$mount("#app")}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,i,n,s){if(!i){var o=1/0;for(d=0;d<t.length;d++){i=t[d][0],n=t[d][1],s=t[d][2];for(var a=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(r.O).every((function(t){return r.O[t](i[l])}))?i.splice(l--,1):(a=!1,s<o&&(o=s));if(a){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,n,s]}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,s,o=i[0],a=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var d=l(r)}for(e&&e(i);c<o.length;c++)s=o[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(d)},i=self["webpackChunknotes"]=self["webpackChunknotes"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(905)}));i=r.O(i)})();
//# sourceMappingURL=app-legacy.3e79ec0b.js.map