(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),o=a.n(r),s=(a(28),a(15)),c=a(16),m=a(18),l=a(17),u=a(19),h=(a(29),a(52)),p=a(54),d=a(53),g=a(55),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).updateTime=function(){a.setState((function(e,t){var a=Object.assign(e),n=e.seconds-1>0,i="workTime"===e.active?"breakTime":"workTime";return a.seconds=n?a.seconds-1:a[i],a.active=n?a.active:i,this.timerID&&(a.timerId=this.timerID),a}))},a.playStop=function(){if(a.state.timerId)return clearInterval(a.state.timerId),a.setState({seconds:a.state.workTime,timerId:!1,active:"workTime"});a.timerID=setInterval((function(){return a.updateTime()}),1e3)},a.state={breakTime:250,workTime:1500,seconds:1500,timerId:!1,active:"workTime"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"updateLength",value:function(e,t){if(this.state.timerId)return!1;var a=Object.assign({},this.state);a[e]=60*t.target.value,a.seconds="workTime"===e?60*t.target.value:a.seconds,this.setState(a)}},{key:"render",value:function(){var e=this.state.timerId?"Stop":"Start";return i.a.createElement("div",{className:"app"},i.a.createElement("div",{style:{textAlign:"center",color:"tomato"}},"        ",i.a.createElement("h1",null,"POMODORO CLOCK ",i.a.createElement("span",{style:{fontSize:"15px"}},"by Vu Long"))),i.a.createElement(h.a,{style:{borderRadius:"5px",background:"pink",padding:"30px",marginTop:"10px"},maxWidth:"sm"},i.a.createElement(d.a,{container:!0,spacing:2},i.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12},i.a.createElement("img",{alt:"tomato",src:"data:image/png;base64,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"})),i.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12}," ",i.a.createElement(y,{active:this.state.active,seconds:this.state.seconds}),"  ")),i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12},i.a.createElement(M,{action:this.playStop},e)),i.a.createElement(d.a,{item:!0,xs:12,container:!0,justify:"center"},i.a.createElement(f,{value:this.state.workTime,timer:"workTime",updateLength:this.updateLength.bind(this)},"Minutes of work")),i.a.createElement(d.a,{item:!0,xs:12,container:!0,justify:"center"},i.a.createElement(f,{value:this.state.breakTime,timer:"breakTime",updateLength:this.updateLength.bind(this)},"Minutes of break")))))}}]),t}(i.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){e.preventDefault(),this.props.updateLength(this.props.timer,e)}},{key:"convertToMinutes",value:function(e){return Math.floor(e/60)}},{key:"render",value:function(){return i.a.createElement("div",{style:{}},i.a.createElement("input",{className:"input-group__input",type:"number",min:"1",step:"1",placeholder:"Insert minutes",onChange:this.onChange.bind(this),value:this.convertToMinutes(this.props.value)}),i.a.createElement("span",{style:{}},"          ",this.props.children))}}]),t}(i.a.Component),M=function(e){return i.a.createElement(p.a,{onClick:e.action,variant:"contained",color:"secondary"},e.children)},y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"twoDigits",value:function(e){return e>9?""+e:"0"+e}},{key:"convertToHhMmSs",value:function(e){var t=this.twoDigits(Math.floor(e/3600)),a=this.twoDigits(Math.floor(e%3600/60)),n=this.twoDigits(Math.floor(e%3600%60));return"".concat(t,":").concat(a,":").concat(n)}},{key:"render",value:function(){var e=this.convertToHhMmSs(this.props.seconds),t="workTime"===this.props.active?"It's time to work!":"Take a little break";return i.a.createElement("div",{className:"timer",style:{textAlign:"center"}},i.a.createElement("h1",{className:"timer__description"},t),i.a.createElement(g.a,null,i.a.createElement("h2",{style:{fontSize:"2.5rem"}},e)))}}]),t}(i.a.Component),C=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.daef2691.chunk.js.map