(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9i9D":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"CreateTeam",(function(){return w}));var a=n("q1tI"),r=n.n(a),o=n("ZGyg"),i=n("0cfB"),c=n("kDLi"),u=n("t8hP"),l=n("3SGO"),s=n("/MKj"),f=n("lzJ5");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,a,r,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(a,r)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){p(o,a,r,i,c,"next",e)}function c(e){p(o,a,r,i,c,"throw",e)}i(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){var e,n;b(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=v(this,(e=d(t)).call.apply(e,[this].concat(r)))).state={name:"",email:""},n.create=function(){var e=h(regeneratorRuntime.mark((function e(t){var a,r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.name,o=a.email,e.next=4,Object(u.getBackendSrv)().post("/api/teams",{name:r,email:o});case 4:(i=e.sent).teamId&&n.props.updateLocation({path:"/org/teams/edit/".concat(i.teamId)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onNameChange=function(e){n.setState({name:e.target.value})},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props.navModel,t=this.state,n=t.name,a=t.email;return r.a.createElement(o.a,{navModel:e},r.a.createElement(o.a.Contents,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-sub-heading"},"New Team"),r.a.createElement("form",{className:"gf-form-group",onSubmit:this.create},r.a.createElement(c.FormField,{className:"gf-form",label:"Name",value:n,onChange:this.onNameChange,inputWidth:30,labelWidth:10,required:!0}),r.a.createElement(c.FormField,{type:"email",className:"gf-form",label:"Email",value:a,onChange:this.onEmailChange,inputWidth:30,labelWidth:10,placeholder:"email@test.com",tooltip:"This is optional and is primarily used for allowing custom team avatars."}),r.a.createElement("div",{className:"gf-form-button-row"},r.a.createElement(c.Button,{type:"submit",variant:"primary"},"Create"))))))}}])&&y(n.prototype,a),i&&y(n,i),t}(a.PureComponent);var E={updateLocation:l.c};t.default=Object(i.hot)(e)(Object(s.connect)((function(e){return{navModel:Object(f.a)(e.navIndex,"teams")}}),E)(w))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=CreateTeam.fc25e2ef18cf58c0ed79.js.map