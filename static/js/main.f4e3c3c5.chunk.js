(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=(a(16),a(6)),i=a(1),d=a(2),l=a(4),u=a(3),m=a(5),p=(a(17),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.name,n=t.done,r=this.props.index;return o.a.createElement("div",{className:n?"item cross":"item"},o.a.createElement("h3",null," ",a," "),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.props.crossTodo(r)}},n?"uncross":"cross"),o.a.createElement("button",{onClick:function(){return e.props.deleteTodo(r)}},"\xd7")))}}]),t}(n.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.map(function(t,a){return o.a.createElement(p,{key:a,data:t,index:a,crossTodo:e.props.crossTodo,deleteTodo:e.props.deleteTodo})});return o.a.createElement("div",{className:"list-wrapper"},t)}}]),t}(n.Component),b=a(9),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={item:""},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(b.a)({},n,o))},a.handleSubmit=function(e){e.preventDefault(),a.props.AddTodo(a.state.item),a.setState({item:""})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"item",value:this.state.item,placeholder:"Add a Todo",onChange:this.handleChange,className:"input"}),o.a.createElement("button",null,"Add"))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:[{name:"learn to talk",done:!1},{name:"learn to see",done:!0},{name:"learn to walk",done:!1},{name:"learn to fuck",done:!1}]},a.AddTodo=function(e){var t={name:e,done:!1},n=[].concat(Object(s.a)(a.state.data),[t]);a.setState({data:n})},a.crossTodo=function(e){console.log(e);var t=Object(s.a)(a.state.data);t[e].done?t[e].done=!1:t[e].done=!0,a.setState({data:t})},a.deleteTodo=function(e){var t=Object(s.a)(a.state.data);t.splice(e,1),a.setState({data:t})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(f,{AddTodo:this.AddTodo}),o.a.createElement(h,{data:this.state.data,crossTodo:this.crossTodo,deleteTodo:this.deleteTodo}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.f4e3c3c5.chunk.js.map