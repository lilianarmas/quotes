(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{10:function(n,e,t){n.exports=t(17)},15:function(n,e,t){},17:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(6),i=t.n(o),c=(t(15),t(3)),s=t.n(c),l=t(7),u=t(4),m=t(1),f=t(2);function d(){var n=Object(m.a)(["\n    padding: 3rem;\n    border-radius: .5rem;\n    background-color: #fff;\n    max-width:800px;\n    \n    @media (min-width: 992px) {\n        margin-top: 15rem;\n    }\n    h1 {\n        font-family: Arial, Helvetica, sans-serif;\n        text-align: center;\n        position: relative;\n        padding-left: 4rem;\n        &::before {\n            content: open-quote;\n            font-size: 10rem;\n            color: black;\n            position: absolute;\n            left: -1rem;\n            top: -2rem;\n        }\n    }\n    p {\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size: 1.4rem;\n        font-weight:bold;\n        text-align: right;\n        color: #666;\n        margin-top: 2rem;\n    }\n"]);return d=function(){return n},n}var p=f.a.div(d()),b=function(n){var e=n.data,t=e.quote,r=e.author;return t?a.a.createElement(p,null,a.a.createElement("h1",null,t," "),a.a.createElement("p",null,"- ",r," ")):null},v=function(){return a.a.createElement("div",{className:"spinner"},a.a.createElement("div",{className:"cube1"}),a.a.createElement("div",{className:"cube2"}))};function g(){var n=Object(m.a)(["\n    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);\n    background-size: 300px;\n    font-family:  Arial, Helvetica, sans-serif;\n    color: #fff;\n    margin-top: 1rem;\n    padding: 1rem 1rem;\n    font-size: 2rem;\n    border: 2px solid black;\n    transition: background-size .8s ease;\n    :hover {\n        cursor:pointer;\n        background-size: 400px;\n    }\n"]);return g=function(){return n},n}function h(){var n=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    padding-top: 5rem;\n    flex-direction: column;\n"]);return h=function(){return n},n}var k=f.a.div(h()),w=f.a.button(g());var x=function(){var n=Object(r.useState)({}),e=Object(u.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),c=Object(u.a)(i,2),m=c[0],f=c[1],d=function(){var n=Object(l.a)(s.a.mark((function n(){var e,t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.next=3,fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,o(t[0]),f(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[]),a.a.createElement(k,null,m?a.a.createElement(v,null):a.a.createElement(b,{data:t}),a.a.createElement(w,{onClick:d},"Obtener Frase"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.1eb97baa.chunk.js.map