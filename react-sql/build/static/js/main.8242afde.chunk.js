(this["webpackJsonpreact-sql"]=this["webpackJsonpreact-sql"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),s=(n(15),n(1)),i=n(4),v=n(5),u=n(8),l=n(6),d=n(9),m=n(7),h=n.n(m),f=(n(16),n(17)),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={events:[],event:{event_name:"event name",event_id:"event id",event_date:"event date",event_detail:"event detail"},rgsEvent:{id:1,event_id:101,name:"your name"},rgsNames:{event_id:101,respNames:[]}},n.getEvents=function(e){fetch("http://localhost:4000/events").then((function(e){return e.json()})).then((function(e){return n.setState({events:e.data})})).catch((function(e){return console.error(e)}))},n.addEvent=function(e){var t=n.state.event;fetch("http://localhost:4000/events/add?id=".concat(t.event_id,"&name=").concat(t.event_name,"&date=").concat(t.event_date,"&detail=").concat(t.event_detail)).then(n.getEvents).catch((function(e){return console.error(e)}))},n.regEvent=function(e){var t=n.state.rgsEvent;fetch("http://localhost:4000/events/rgs?id=".concat(t.id,"&event_id=").concat(t.event_id,"&name=").concat(t.name)).then((function(e){e.ok&&(alert("successfully registered"),console.log("successfully registered"))})).catch((function(e){return console.error(e)}))},n.fetchRGS=function(e){var t=n.state.rgsNames;fetch("http://localhost:4000/events/event-rgs?event_id=".concat(t.event_id)).then((function(e){return e.json()})).then((function(e){return n.setState({rgsNames:{respNames:e.data}})})).catch((function(e){return console.error(e)}))},n.renderEvents=function(e){var t=e.event_id,n=e.event_name,a=e.event_detail,c=e.event_date;return r.a.createElement("div",{key:t},n," ",a,"  ",f(c).format("DD-MM-YYYY")," ")},n.fetchNames=function(e){var t=e.rgs_name;return r.a.createElement("div",{key:t}," ",t," ")},n}return Object(d.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getEvents(),this.fetchRGS()}},{key:"render",value:function(){var e=this,t=this.state,n=t.events,a=t.event,c=t.rgsEvent,o=t.rgsNames;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"welcome to Sourabhsrk project")),n.map(this.renderEvents),r.a.createElement("div",null,r.a.createElement("input",{value:a.event_id,onChange:function(t){return e.setState({event:Object(s.a)({},a,{event_id:t.target.value})})}}),r.a.createElement("input",{value:a.event_name,onChange:function(t){return e.setState({event:Object(s.a)({},a,{event_name:t.target.value})})}}),r.a.createElement("input",{value:a.event_date,onChange:function(t){return e.setState({event:Object(s.a)({},a,{event_date:t.target.value})})}}),r.a.createElement("input",{value:a.event_detail,onChange:function(t){return e.setState({event:Object(s.a)({},a,{event_detail:t.target.value})})}}),r.a.createElement("button",{onClick:this.addEvent},"Add Event ")),r.a.createElement("div",null,r.a.createElement("input",{value:c.id,onChange:function(t){return e.setState({rgsEvent:Object(s.a)({},c,{id:t.target.value})})}}),r.a.createElement("input",{value:c.event_id,onChange:function(t){return e.setState({rgsEvent:Object(s.a)({},c,{event_id:t.target.value})})}}),r.a.createElement("input",{value:c.name,onChange:function(t){return e.setState({rgsEvent:Object(s.a)({},c,{name:t.target.value})})}}),r.a.createElement("button",{onClick:this.regEvent},"OK ")),r.a.createElement("div",null,r.a.createElement("input",{value:o.event_id,onChange:function(t){return e.setState({rgsNames:Object(s.a)({},o,{event_id:t.target.value})})}}),r.a.createElement("button",{onClick:function(){return e.fetchRGS}}," OK "),o.respNames.map(this.fetchNames)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.8242afde.chunk.js.map