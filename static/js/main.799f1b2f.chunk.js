(this.webpackJsonphanoi=this.webpackJsonphanoi||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(11),a(3)),l=a(2),u=a(1);var s=function(e){return function e(t,a,n,r){if(0===t)return[];var c=[];return c.push.apply(c,Object(u.a)(e(t-1,a,r,n))),c.push({num:t,from:a,to:r}),c.push.apply(c,Object(u.a)(e(t-1,n,a,r))),c}(e,1,2,3)};a(12);function m(e){return[(t=e,Object(u.a)(Array(t)).map((function(e,a){return t-a}))),[],[]];var t}function v(e,t,a){return e[a].push(e[t].pop()),Object(u.a)(e)}function f(e){var t=e.value,a=Object(l.a)(e,["value"]);return r.a.createElement("div",Object.assign({},a,{className:"hanoi-block",style:{width:"".concat(3*t,"vw")}}))}function h(e){var t=e.index;Object(l.a)(e,["index"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hanoi-bottom"}),r.a.createElement("div",{className:"hanoi-desc"},t))}function b(e){var t=e.blocks,a=(Object(l.a)(e,["blocks"]),t.reduce((function(e,t){return e+t.length}),0)),n=Object(u.a)(Array(t.length)).map((function(e,n){var c=t[n].length;return r.a.createElement("div",{key:n,className:"hanoi-block-container"},Object(u.a)(Array(a)).map((function(e,o){var i=a-o-1;return r.a.createElement(f,{key:i,value:i<c?t[n][i]:0})})),r.a.createElement(h,{index:n+1}))}));return r.a.createElement("div",{className:"hanoi-container"},n)}function d(e){var t=e.value,a=e.cursor,n=Object(l.a)(e,["value","cursor"]);return r.a.createElement("div",n,t.map((function(e,t){var n=e.num,c=e.from,o=e.to;return r.a.createElement("div",{key:t,className:t===a?"sol-highlight":"sol-normal"},"".concat(n," : ").concat(c," --\x3e ").concat(o))})))}var p=function(){var e=Object(n.useState)(m(3)),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),l=Object(i.a)(o,2),u=l[0],f=l[1],h=Object(n.useState)(s(3)),p=Object(i.a)(h,2),E=p[0],j=p[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},"Tower of Hanoi"),r.a.createElement("div",{className:"App-body"},r.a.createElement(b,{blocks:a})),r.a.createElement("div",{className:"App-tail"},r.a.createElement("div",null,"Height : ",r.a.createElement("input",{onKeyDown:function(e){if(13===e.keyCode){var t=Number(e.target.value);if(!isNaN(t)&&t<11){var a=m(t);c(a),f(0),j(s(t))}e.target.value=""}}})),r.a.createElement("div",null,"Move ",r.a.createElement("button",{onClick:function(e){if(u>0){var t=E[u-1],n=t.from,r=t.to;c(v(a,r-1,n-1)),f(u-1)}}},"<"),r.a.createElement("button",{onClick:function(e){if(u<E.length){var t=E[u],n=t.from,r=t.to;c(v(a,n-1,r-1)),f(u+1)}}},">")),r.a.createElement(d,{value:E,cursor:u})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.799f1b2f.chunk.js.map