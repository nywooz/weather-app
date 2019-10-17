(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},25:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),i=(a(24),a(5)),l=a(6),s=a(8),m=a(7),u=a(9),d=(a(25),a(26),a(13)),p=a.n(d),h=a(15),v=a(16),f=a.n(v),y=a(10),g=a(17);a.n(g).a.config();var E="fe0c9fc6a0934749a56400c8624947d5",w=function(){return c.a.createElement(y.a,{icon:"calendar-day"})},N=function(){return c.a.createElement(y.a,{icon:"wind"})},b=function(){return c.a.createElement(y.a,{icon:"tint"})},k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={url:"https://api.ipgeolocation.io/ipgeo?apiKey="+E,temperatureMetric:"celcius",long:"",lat:"",timestamp:"",apikey:"8fcd54fe78bab4aaa7f8de732e8e9b78",msg:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getLocation(this.state.url)}},{key:"getLocation",value:function(e){var t=this;(function(){var e=Object(h.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}})()(e).then(function(e){return t.getData(e)})}},{key:"getData",value:function(e){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a){var n="".concat("https://cors-anywhere.herokuapp.com/","https://api.darksky.net/forecast/").concat(t.state.apikey,"/").concat(a.coords.longitude,",").concat(a.coords.latitude);fetch(n,{mode:"cors"}).then(function(e){return e.json()}).then(function(n){console.log("Request darksky successful",n);var c=n.currently,r=c.apparentTemperature,o=c.humidity,i=c.icon,l=c.summary,s=c.temperature,m=c.time,u=c.windSpeed;t.setState({city:e.city,country_name:e.country_name,timezone:n.timezone,long:a.coords.longitude,lat:a.coords.latitude,timestamp:a.timestamp,apparentTemperature:r,humidity:o,icon:i,summary:l,temperature:s,time:m,windSpeed:u})}).catch(function(e){console.log("Request darksky failed",e)})}):this.setState({msg:"Sorry, your browser do not support geolocation"})}},{key:"setIcons",value:function(e){return e?e.replace(/-/g,"_").toUpperCase():""}},{key:"changeTempFarenCelcius",value:function(e){if(isNaN(e))return 0;return"celcius"===this.state.temperatureMetric?Math.round(5/9*(e-32))+" \xb0C":Math.round(9*e/5+32)+" \xb0F"}},{key:"getFormattedDate",value:function(e){if(e){return new Date(e).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}},{key:"render",value:function(){var e=this.state,t=e.timestamp,a=e.msg,n=e.temperature,r=e.apparentTemperature,o=e.humidity,i=e.icon,l=e.summary,s=e.windSpeed,m=e.country_name,u=e.city,d=this.changeTempFarenCelcius(n),p=this.changeTempFarenCelcius(r),h=this.getFormattedDate(t);return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App container-fluid m-0 p-2"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"content"},i&&c.a.createElement(f.a,{color:"white",icon:this.setIcons(i),autoplay:!0,height:"200",width:"200"})),c.a.createElement("h5",{className:"text-center"}," ",d)),c.a.createElement("div",{className:"col-9"},c.a.createElement("h2",null," ",u),c.a.createElement("p",null," ",m),c.a.createElement("p",null," ",l))),c.a.createElement("div",{className:"row pb-2"},c.a.createElement("div",{className:"col-2"},"Feels"),c.a.createElement("div",{className:"col"}," ",p)),c.a.createElement("div",{className:"row align-items-center pt-4"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row pb-2"},c.a.createElement("div",{className:"col-1"},c.a.createElement(w,null)),c.a.createElement("div",{className:"col-10"}," ",h)),c.a.createElement("div",{className:"row pb-2"},c.a.createElement("div",{className:"col-1"},c.a.createElement(N,null)),c.a.createElement("div",{className:"col-10"}," ",s)),c.a.createElement("div",{className:"row pb-2"},c.a.createElement("div",{className:"col-1"},c.a.createElement(b,null)),c.a.createElement("div",{className:"col"}," ",o)),c.a.createElement("div",{className:"row pb-2"},c.a.createElement("div",{className:"col-1"}),c.a.createElement("div",{className:"col"}," ",a))))))}}]),t}(n.Component),j=a(3),O=a(18),C=a(2);j.b.add(O.a,C.b,C.c,C.a,C.e,C.d);var D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.312754d2.chunk.js.map