(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(28),i=n.n(s),r=(n(90),n(64)),o=n.n(r),l=n(72),d=n(59),u=(n(92),n(93),n(73)),j=n.n(u),h=n(116),b=n(7),m=function(e){e.weatherData;window.location.reload()},p=function(e){var t=e.weatherData;return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"top",children:[Object(b.jsx)("p",{className:"header",children:t.name}),Object(b.jsx)(h.a,{className:"button",inverted:!0,color:"blue",circular:!0,icon:"refresh",onClick:m})]}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsxs)("p",{className:"day",children:["Day: ",j()().format("dddd")]}),Object(b.jsx)("p",{className:"description",children:t.weather[0].main})]}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsxs)("p",{className:"temp",children:["Temperature: ",t.main.temp," \xb0C"]}),Object(b.jsxs)("p",{className:"temp",children:["Humidity: ",t.main.humidity," %"]})]}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsxs)("p",{className:"sunrise-sunset",children:["Sunrise: ",new Date(1e3*t).toLocaleTimeString("en-In")]}),Object(b.jsxs)("p",{className:"sunrise-sunset",children:["Sunset: ",new Date(1e3*t).toLocaleTimeString("en-In")]})]})]})},f=n(117),O=n(115);function x(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(d.a)(s,2),r=i[0],u=i[1],j=Object(c.useState)([]),h=Object(d.a)(j,2),m=h[0],x=h[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){a(e.coords.latitude),u(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(n,"&lon=").concat(r,"&units=metric&APPID=").concat("b1494381bb3bcf3d370efdab3755836e")).then((function(e){return e.json()})).then((function(e){x(e),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,r]),Object(b.jsx)("div",{className:"App",children:"undefined"!=typeof m.main?Object(b.jsx)(p,{weatherData:m}):Object(b.jsx)("div",{children:Object(b.jsx)(f.a,{active:!0,children:Object(b.jsx)(O.a,{children:"Loading..."})})})})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};n(102);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),v()},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.b3b421c8.chunk.js.map