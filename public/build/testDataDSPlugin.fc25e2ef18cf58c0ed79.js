(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{RQDA:function(e,t,n){"use strict";n.r(t);var r=n("Obii"),a=n("t8hP");function o(e){return function e(t,n,r){if(r>=n.length)return t;if("*"===n[r])return t;var a=n[r],o=[],i=[a];a.startsWith("{")&&(i=a.replace(/\{|\}/g,"").split(","));var u=!0,s=!1,c=void 0;try{for(var l,f=t[Symbol.iterator]();!(u=(l=f.next()).done);u=!0){var p=l.value,d=!0,y=!1,m=void 0;try{for(var b,h=i[Symbol.iterator]();!(d=(b=h.next()).done);d=!0){var v=b.value;if(-1!==v.indexOf("*")){var g=v.replace("*","");new RegExp("^".concat(g,".*"),"gi").test(p.name)&&(o=o.concat(e([p],n,r+1)))}else p.name===v&&(o=o.concat(e(p.children,n,r+1)))}}catch(e){y=!0,m=e}finally{try{d||null==h.return||h.return()}finally{if(y)throw m}}}}catch(e){s=!0,c=e}finally{try{u||null==f.return||f.return()}finally{if(s)throw c}}return o}(function e(t,n){var r=[];if(n>3)return[];for(var a=0,o=["A","B","C"];a<o.length;a++){var i=o[a],u="".concat(t).concat(i);r.push({name:u,children:e(u,n+1)})}return r}("",0),e.split("."),0)}var i=n("0/uQ"),u=n("p0ib"),s=n("LvDl"),c=n.n(s),l=n("6blF"),f=0;function p(){return f=(f+Math.floor(5*Math.random()))%d.length,d[f]}var d=["At","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti","quos","dolores","et","quas","molestias","excepturi","sint","occaecati","cupiditate","non","provident","similique","sunt","in","culpa","qui","officia","deserunt","mollitia","animi","id","est","laborum","et","dolorum","fuga","Et","harum","quidem","rerum","facilis","est","et","expedita","distinctio","Nam","libero","tempore","cum","soluta","nobis","est","eligendi","optio","cumque","nihil","impedit","quo","minus","id","quod","maxime","placeat","facere","possimus","omnis","voluptas","assumenda","est","omnis","dolor","repellendus","Temporibus","autem","quibusdam","et","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet","ut","et","voluptates","repudiandae","sint","et","molestiae","non","recusandae","Itaque","earum","rerum","hic","tenetur","a","sapiente","delectus","ut","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat"],y={type:"signal",speed:250,spread:3.5,noise:2.2,bands:1};function m(e,t){var n=Object(s.defaults)(e.stream,y);if("signal"===n.type)return function(e,t,n){return new l.a((function(a){var o="signal-".concat(n.panelId,"-").concat(e.refId),i=n.maxDataPoints||1e3,u=new r.CircularDataFrame({append:"tail",capacity:i});u.refId=e.refId,u.name=e.alias||"Signal "+e.refId,u.addField({name:"time",type:r.FieldType.time}),u.addField({name:"value",type:r.FieldType.number});for(var s=t.spread,c=t.speed,l=t.bands,f=t.noise,p=0;p<l;p++){var d=l>1?" ".concat(p+1):"";u.addField({name:"Min"+d,type:r.FieldType.number}),u.addField({name:"Max"+d,type:r.FieldType.number})}for(var y=100*Math.random(),m=null,b=function(e){y+=(Math.random()-.5)*s;var t=0;u.fields[t++].values.add(e),u.fields[t++].values.add(y);for(var n=y,r=y,a=0;a<l;a++)n-=Math.random()*f,r+=Math.random()*f,u.fields[t++].values.add(n),u.fields[t++].values.add(r)},h=Date.now()-i*c,v=0;v<i;v++)b(h),h+=c;return setTimeout((function e(){b(Date.now()),a.next({data:[u],key:o}),m=setTimeout(e,c)}),5),function(){console.log("unsubscribing to stream "+o),clearTimeout(m)}}))}(e,n,t);if("logs"===n.type)return function(e,t,n){return new l.a((function(a){var o="logs-".concat(n.panelId,"-").concat(e.refId),i=n.maxDataPoints||1e3,u=new r.CircularDataFrame({append:"tail",capacity:i});u.refId=e.refId,u.name=e.alias||"Logs "+e.refId,u.addField({name:"time",type:r.FieldType.time}),u.addField({name:"line",type:r.FieldType.string});var s=t.speed,c=null;return setTimeout((function e(){u.values.time.add(Date.now()),u.values.line.add(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,t=p();t.length<e;)t+=" "+p();return t}()),a.next({data:[u],key:o}),c=setTimeout(e,s)}),5),function(){console.log("unsubscribing to stream "+o),clearTimeout(c)}}))}(e,n,t);if("fetch"===n.type)return function(e,t,n){return new l.a((function(a){var o,i="fetch-".concat(n.panelId,"-").concat(e.refId),u=n.maxDataPoints||1e3,s=new r.CircularDataFrame({append:"tail",capacity:u});s.refId=e.refId,s.name=e.alias||"Fetch "+e.refId;var c=new r.CSVReader({callback:{onHeader:function(t){s.fields.length&&((s=new r.CircularDataFrame({append:"tail",capacity:u})).refId=e.refId,s.name="Fetch "+e.refId);var n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var l=i.value;s.addField(l)}}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}},onRow:function(e){s.add(e)}}}),l=function e(t){if(t.value){var n=(new TextDecoder).decode(t.value);c.readCSV(n)}return a.next({data:[s],key:i,state:t.done?r.LoadingState.Done:r.LoadingState.Streaming}),t.done?(console.log("Finished stream"),void a.complete()):o.read().then(e)};return fetch(new Request(t.url)).then((function(e){(o=e.body.getReader()).read().then(l)})),function(){console.log("unsubscribing to stream "+i)}}))}(e,n,t);throw new Error("Unknown Stream Type: ".concat(n.type))}var b=n("5kRJ"),h=n("4qJB");function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,j(t).call(this,e))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,e),n=t,(r=[{key:"query",value:function(e){var t=this,n=[],r=[],o=!0,s=!1,c=void 0;try{for(var l,f=e.targets[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var p=l.value;p.hide||("streaming_client"===p.scenarioId?r.push(m(p,e)):n.push(w({},p,{intervalMs:e.intervalMs,maxDataPoints:e.maxDataPoints,datasourceId:this.id,alias:b.b.replace(p.alias||"")})))}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}if(n.length){var d=Object(a.getBackendSrv)().datasourceRequest({method:"POST",url:"/api/tsdb/query",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:n},requestId:e.requestId}).then((function(e){return t.processQueryResult(n,e)}));r.push(Object(i.a)(d))}return u.a.apply(void 0,r)}},{key:"processQueryResult",value:function(e,t){var n=[],r=void 0,a=!0,o=!1,i=void 0;try{for(var u,s=e[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var c=u.value,l=t.data.results[c.refId],f=!0,p=!1,d=void 0;try{for(var y,m=(l.tables||[])[Symbol.iterator]();!(f=(y=m.next()).done);f=!0){var b=y.value;b.refId=c.refId,b.name=c.alias,n.push(b)}}catch(e){p=!0,d=e}finally{try{f||null==m.return||m.return()}finally{if(p)throw d}}var h=!0,v=!1,g=void 0;try{for(var w,O=(l.series||[])[Symbol.iterator]();!(h=(w=O.next()).done);h=!0){var S=w.value;n.push({target:S.name,datapoints:S.points,refId:c.refId,tags:S.tags})}}catch(e){v=!0,g=e}finally{try{h||null==O.return||O.return()}finally{if(v)throw g}}l.error&&(r={message:l.error})}}catch(e){o=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}return{data:n,error:r}}},{key:"annotationQuery",value:function(e){for(var t=e.range.from.valueOf(),n=[],r=(e.range.to.valueOf()-t)/10,a=0;a<10;a++)n.push({annotation:e.annotation,time:t,text:'This is the text, <a href="https://grafana.com">Grafana.com</a>',tags:["text","server"]}),t+=r;return Promise.resolve(n)}},{key:"getQueryDisplayText",value:function(e){return e.alias?e.scenarioId+" as "+e.alias:e.scenarioId}},{key:"testDatasource",value:function(){return Promise.resolve({status:"success",message:"Data source is working"})}},{key:"getScenarios",value:function(){return Object(a.getBackendSrv)().get("/api/tsdb/testdata/scenarios")}},{key:"metricFindQuery",value:function(e,t){return new Promise((function(n,r){setTimeout((function(){var r=o(b.b.replace(e,Object(h.g)({query:e,wildcardChar:"*",options:t}))).map((function(e){return{value:e.name,text:e.name}}));n(r)}),100)}))}}])&&S(n.prototype,r),s&&S(n,s),t}(r.DataSourceApi),k=n("1gCF"),T=n("LzXI"),x=n("2KQq");function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M={timeStep:60,onCount:3,onValue:2,offCount:3,offValue:1},R={timeStep:60,valuesCSV:"0,0,2,2,1,1"},L=["random_walk","predictable_pulse","predictable_csv_wave"],Q=function(e){function t(e,n){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=q(this,E(t).call(this,e,n))).showLabels=!1,a.target.scenarioId=a.target.scenarioId||"random_walk",a.scenarioList=[],a.newPointTime=Object(r.dateTime)(),a.selectedPoint={text:"Select point",value:null},a.showLabels=L.includes(a.target.scenarioId),a.selectors=k.a.pages.Dashboard.Panels.DataSource.TestData.QueryTab.selectors,a}var n,o,i;return t.$inject=["$scope","$injector"],function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(o=[{key:"getPoints",value:function(){return c.a.map(this.target.points,(function(e,t){return{text:Object(r.dateTime)(e[1]).format("MMMM Do YYYY, H:mm:ss")+" : "+e[0],value:t}}))}},{key:"pointSelected",value:function(e){this.selectedPoint=e}},{key:"deletePoint",value:function(){this.target.points.splice(this.selectedPoint.value,1),this.selectedPoint={text:"Select point",value:null},this.refresh()}},{key:"addPoint",value:function(){this.target.points=this.target.points||[],this.newPointTime=r.dateMath.parse(this.newPointTime),this.target.points.push([this.newPointValue,this.newPointTime.valueOf()]),this.target.points=c.a.sortBy(this.target.points,(function(e){return e[1]})),this.refresh()}},{key:"$onInit",value:function(){var e=this;return Object(x.a)(this.$scope)(Object(a.getBackendSrv)().get("/api/tsdb/testdata/scenarios").then((function(t){e.scenarioList=t,e.scenario=c.a.find(e.scenarioList,{id:e.target.scenarioId})})))}},{key:"scenarioChanged",value:function(){this.scenario=c.a.find(this.scenarioList,{id:this.target.scenarioId}),this.target.stringInput=this.scenario.stringInput,this.showLabels=L.includes(this.target.scenarioId),"manual_entry"===this.target.scenarioId?this.target.points=this.target.points||[]:delete this.target.points,"streaming_client"===this.target.scenarioId?this.target.stream=c.a.defaults(this.target.stream||{},y):delete this.target.stream,"predictable_pulse"===this.target.scenarioId?this.target.pulseWave=c.a.defaults(this.target.pulseWave||{},M):delete this.target.pulseWave,"predictable_csv_wave"===this.target.scenarioId?this.target.csvWave=c.a.defaults(this.target.csvWave||{},R):delete this.target.csvWave,this.refresh()}},{key:"streamChanged",value:function(){this.refresh()}}])&&C(n.prototype,o),i&&C(n,i),t}(T.QueryCtrl);Q.templateUrl="partials/query.editor.html";var W=n("q1tI"),A=n.n(W);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$(this,J(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return A.a.createElement("div",null,"See github for more information about setting up a reproducable test environment.",A.a.createElement("br",null),A.a.createElement("br",null),A.a.createElement("a",{className:"btn btn-inverse",href:"https://github.com/grafana/grafana/tree/master/devenv",target:"_blank",rel:"noopener"},"Github"),A.a.createElement("br",null))}}])&&V(n.prototype,r),a&&V(n,a),t}(W.PureComponent);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(){return N(this,t),z(this,K(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return A.a.createElement("div",null)}}])&&U(n.prototype,r),a&&U(n,a),t}(W.PureComponent);n.d(t,"plugin",(function(){return te}));var ee=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};ee.template="<h2>Annotation scenario</h2>";var te=new r.DataSourcePlugin(_).setConfigEditor(Z).setQueryCtrl(Q).setAnnotationQueryCtrl(ee).addConfigPage({title:"Setup",icon:"fa fa-list-alt",body:G,id:"setup"})}}]);
//# sourceMappingURL=testDataDSPlugin.fc25e2ef18cf58c0ed79.js.map