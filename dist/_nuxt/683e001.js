(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{308:function(e,o,t){"use strict";t.r(o);t(12),t(36);var n={name:"Login",data:function(){return{email:"",password:""}},methods:{loginHandler:function(e){var o=this;e.preventDefault(),console.log("ok");var t=this.$store.state.users;null===t||t.forEach((function(e){if(e.email==o.email&&e.password==o.password){var t=e.role,n=e.email;localStorage.setItem("token",JSON.stringify({role:t,email:n})),o.$store.commit("editToken",{role:t,name:name}),o.$router.push("/home")}}))}}},r=t(35),component=Object(r.a)(n,(function(){var e=this,o=e._self._c;return o("div",{staticClass:"container"},[o("h1",[e._v("Login")]),e._v(" "),o("form",[o("label",[e._v("Email")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(o){o.target.composing||(e.email=o.target.value)}}}),e._v(" "),o("label",[e._v("Password")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(o){o.target.composing||(e.password=o.target.value)}}}),e._v(" "),o("button",{staticClass:"btn-secondary",on:{click:e.loginHandler}},[e._v("Log In")])])])}),[],!1,null,null,null);o.default=component.exports}}]);