(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba928"],{"387d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h3",{staticClass:"text-center text-success"},[t._v("Add Task")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"}),a("div",{staticClass:"col-md-6"},[a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.addTodo.apply(null,arguments)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[t._v("Note")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"form-control",attrs:{name:"",id:""},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[t._v("Date Due")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date_due,expression:"date_due"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.date_due},on:{input:function(e){e.target.composing||(t.date_due=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[t._v("Completed")]),a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.complete,expression:"complete"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.complete=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Yes"}},[t._v("Yes")]),a("option",{attrs:{value:"No"}},[t._v("No")])])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[t._v("Category")]),a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.category=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"General"}},[t._v("General")]),a("option",{attrs:{value:"Learning"}},[t._v("Learning")]),a("option",{attrs:{value:"Body Exercise"}},[t._v("Body Exercise")]),a("option",{attrs:{value:"Chores"}},[t._v("Chores")])])])]),t._m(0)])]),a("div",{staticClass:"col-md-3"})])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group",staticStyle:{"margin-top":"1rem"}},[a("button",{staticClass:"btn btn-success"},[t._v("Submit")])])}],l=a("bc3a"),i=a.n(l),n={name:"Home",data:function(){return{todos:[],title:"",note:"",date_due:new Date,complete:"No",category:"General"}},mounted:function(){this.getTodos()},methods:{addTodo:function(){var t=this;this.title&&i()({method:"post",url:"https://nicholas-to-to-django-api.herokuapp.com/api/add_todo",data:{title:this.title,note:this.note,date_due:this.date_due,complete:this.complete,category:this.category}}).then((function(e){var a={id:e.data.id,title:t.title,note:t.note,date_due:t.date_due,complete:t.complete,category:t.category};t.todos.push(a),t.$router.push({name:"todos"}),t.title="",t.note="",t.date_due=new Date,t.complete="No",t.category="General"})).catch((function(t){console.log(t)}))}}},r=n,c=a("2877"),d=Object(c["a"])(r,o,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0ba928.1bc304f1.js.map