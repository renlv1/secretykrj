webpackJsonp([43],{DEg1:function(t,e){},Xaqj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{userName:"",userNameTipShow:!1,email:"",emailTipShow:!1,userPwd:"",userPwdTipShow:!1,userPwdAgain:"",userPwdAgainTipShow:!1,vCode:"",vCodeTipShow:!1,successShow:!1,sendBtnTimes:60}},methods:{completeFun:function(){var t=this,e=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;""===this.userName&&(this.userNameTipShow=!0),""!==this.email&&e.test(this.email)||(this.emailTipShow=!0),""===this.userPwd&&(this.userPwdTipShow=!0),""!==this.userPwdAgain.trim()&&this.userPwd===this.userPwdAgain||(this.userPwdAgainTipShow=!0),""===this.vCode&&(this.vCodeTipShow=!0);var s=new FormData;s.append("username",this.userName),s.append("password",this.userPwd),s.append("verifyCode",this.vCode),s.append("email",this.email),""!==this.userName.trim()&&""!==this.userPwd.trim()&&this.userPwd===this.userPwdAgain&&""!==this.email.trim()&&e.test(this.email)&&""!==this.vCode&&this.$http.post(this.$api+"/register/registerUser",s).then(function(e){e.data.success?(t.successShow=!0,t.sendBtnTimes=0):t.$store.dispatch("errAction",{bool:!0,msg:e.data.msg})}).catch(function(t){console.log(t)})},countDown:function(){var t=this;0===this.sendBtnTimes?(this.$refs.sendMsg.innerHTML=this.$t("register.text13"),this.sendBtnTimes=60,this.$refs.sendMsg.style.color="rgba(201,0,16)",this.$refs.sendMsg.disabled=!1):(this.sendBtnTimes--,this.$refs.sendMsg.innerHTML=this.sendBtnTimes,this.$refs.sendMsg.disabled=!0,this.$refs.sendMsg.style.color="rgba(255,255,255,0.6)",setTimeout(function(){return t.countDown()},1e3))},sendPhoneCode:function(){var t=this,e=void 0;if(""!==this.email.trim()&&/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.email)){var s=new FormData;s.append("email",this.email),s.append("type",1),this.$http.post(this.$api+"/register/sendEmailCode",s).then(function(s){e=s.data.success?t.$t("register.text17"):s.data.msg,t.$store.dispatch("errAction",{bool:!0,msg:e})}).catch(function(t){console.log(t)}),this.countDown()}else this.emailTipShow=!0},closeSuccessPopup:function(){this.successShow=!1,this.$router.push({path:"/login"})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register myPopup"},[s("div",{staticClass:"myPopupBox"},[s("h3",{staticClass:"secret-title"},[t._v(t._s(t.$t("register.text1")))]),t._v(" "),s("div",{staticClass:"inputTipBox"},[s("div",{staticClass:"inputTip-title"},[s("span",[t._v(t._s(t.$t("register.text2")))])]),t._v(" "),s("div",{staticClass:"inputTipDiv"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userName,expression:"userName",modifiers:{trim:!0}}],staticClass:"secret-inputTip secret-input",attrs:{type:"text",placeholder:t.$t("register.text3")},domProps:{value:t.userName},on:{focus:function(e){t.userNameTipShow=!1},input:function(e){e.target.composing||(t.userName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("span",{staticClass:"inputTipMsg",class:{inputTipMsgActive:t.userNameTipShow}},[t._v(t._s(t.$t("register.text3")))])]),t._v(" "),s("div",{staticClass:"inputTipBox"},[s("div",{staticClass:"inputTip-title"},[s("span",[t._v(t._s(t.$t("register.text4")))])]),t._v(" "),s("div",{staticClass:"inputTipDiv"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"secret-inputTip secret-input",attrs:{type:"text",placeholder:t.$t("register.text5")},domProps:{value:t.email},on:{focus:function(e){t.emailTipShow=!1},input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("span",{staticClass:"inputTipMsg",class:{inputTipMsgActive:t.emailTipShow}},[t._v(t._s(t.$t("register.text5")))])]),t._v(" "),s("div",{staticClass:"inputTipBox"},[s("div",{staticClass:"inputTip-title"},[s("span",[t._v(t._s(t.$t("register.text6"))),s("i",[t._v(t._s(t.$t("register.text7")))])])]),t._v(" "),s("div",{staticClass:"inputTipDiv"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userPwd,expression:"userPwd",modifiers:{trim:!0}}],staticClass:"secret-inputTip secret-input",attrs:{type:"password",placeholder:t.$t("register.text8")},domProps:{value:t.userPwd},on:{focus:function(e){t.userPwdTipShow=!1},input:function(e){e.target.composing||(t.userPwd=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("span",{staticClass:"inputTipMsg",class:{inputTipMsgActive:t.userPwdTipShow}},[t._v(t._s(t.$t("register.text8")))])]),t._v(" "),s("div",{staticClass:"inputTipBox"},[s("div",{staticClass:"inputTip-title"},[s("span",[t._v(t._s(t.$t("register.text9")))])]),t._v(" "),s("div",{staticClass:"inputTipDiv"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userPwdAgain,expression:"userPwdAgain",modifiers:{trim:!0}}],staticClass:"secret-inputTip secret-input",attrs:{type:"password",placeholder:t.$t("register.text10")},domProps:{value:t.userPwdAgain},on:{focus:function(e){t.userPwdAgainTipShow=!1},input:function(e){e.target.composing||(t.userPwdAgain=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("span",{staticClass:"inputTipMsg",class:{inputTipMsgActive:t.userPwdAgainTipShow}},[t._v(t._s(t.$t("register.text10")))])]),t._v(" "),s("div",{staticClass:"inputTipBox"},[s("div",{staticClass:"inputTip-title"},[s("span",[t._v(t._s(t.$t("register.text11")))])]),t._v(" "),s("div",{staticClass:"inputTipDiv"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.vCode,expression:"vCode",modifiers:{trim:!0}}],staticClass:"secret-inputTip secret-input",attrs:{type:"text",placeholder:t.$t("register.text12")},domProps:{value:t.vCode},on:{focus:function(e){t.vCodeTipShow=!1},input:function(e){e.target.composing||(t.vCode=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),s("button",{ref:"sendMsg",staticClass:"secret-btn",on:{click:function(e){return t.sendPhoneCode()}}},[t._v(t._s(t.$t("register.text13")))])]),t._v(" "),s("span",{staticClass:"inputTipMsg",class:{inputTipMsgActive:t.vCodeTipShow}},[t._v(t._s(t.$t("register.text12")))])]),t._v(" "),s("button",{staticClass:"secret-btn complete-btn",on:{click:function(e){return t.completeFun()}}},[t._v(t._s(t.$t("register.text14")))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.successShow,expression:"successShow"}],staticClass:"myPopup"},[s("div",{staticClass:"myPopup-tip"},[s("h3",{staticClass:"title"},[t._v(t._s(t.$t("register.text15")))]),t._v(" "),s("button",{staticClass:"secret-btn",on:{click:function(e){return t.closeSuccessPopup()}}},[t._v(t._s(t.$t("register.text16")))])])])])},staticRenderFns:[]};var a=s("VU/8")(i,r,!1,function(t){s("DEg1")},"data-v-191412b4",null);e.default=a.exports}});