(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),o=(n(9),n(2)),i=(n(10),n(0)),u=function(){return Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{className:"header__title",children:"Kantor wymiany walut"}),Object(i.jsx)("p",{children:"Pole oznaczone* jest wymagane"})]})},l=(n(12),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{children:"YouCode 2021 - Edycja II"})})}),j=(n(13),[{short:"EUR",name:"Euro",rate:4.57},{short:"USD",name:"Dolar Ameryka\u0144ski",rate:3.82},{short:"GBP",name:"Funt Brytyjski",rate:5.26}]),b=function(e){var t=e.calculateResult,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],a=r[1],u=Object(c.useState)(j[0].short),l=Object(o.a)(u,2),b=l[0],d=l[1];return Object(i.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(s,b)},children:[Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:"form__labelText",children:"Podaj kwot\u0119 w PLN*"}),Object(i.jsx)("input",{value:s,onChange:function(e){var t=e.target;return a(t.value)},className:"form__field",name:"PLN",type:"number",step:"any",min:"0",autoFocus:!0,required:!0})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:"form__labelText",children:"Wybierz walut\u0119"}),Object(i.jsx)("select",{value:b,onChange:function(e){var t=e.target;return d(t.value)},className:"form__field",name:"currency",children:j.map((function(e){return Object(i.jsx)("option",{value:e.short,children:e.name},e.short)}))})]})}),Object(i.jsxs)("p",{children:[Object(i.jsx)("button",{className:"form__button",children:"Przelicz"}),Object(i.jsx)("button",{onClick:function(){a(""),d(j[0].short)},className:"form__button",type:"reset",children:"Wyczy\u015b\u0107"})]})]})},d=(n(14),function(e){var t=e.title,n=e.body,c=e.className,r=e.extraSectionContent;return Object(i.jsxs)("section",{className:c,children:[r,Object(i.jsx)("h2",{className:"section__header",children:t}),n]})}),h=function(e){var t=e.children;return Object(i.jsx)("main",{children:t})},m=(n(15),function(e){var t=e.result;return Object(i.jsx)("p",{className:"result",children:!!t&&Object(i.jsxs)(i.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(i.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})}),f=function(){var e=Object(c.useState)(new Date),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),n},O=(n(16),function(e){var t=f().toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"});return Object(i.jsxs)("p",{className:"timer",children:["Dzisiaj jest"," ",t]})});var x=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){console.log("Hello world created by Krzysiu. Nice to be here")}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsxs)(h,{children:[Object(i.jsx)(d,{className:"section",title:"Kalkulator walut",extraSectionContent:Object(i.jsx)(O,{}),body:Object(i.jsx)(b,{calculateResult:function(e,t){var n=j.find((function(e){return e.short===t})).rate;r({sourceAmount:+e,targetAmount:e/n,currency:t})},reslut:n})}),Object(i.jsx)(d,{className:"section section--smaller",title:"Wynik:",body:Object(i.jsx)(m,{result:n})})]}),Object(i.jsx)(l,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),y()}],[[17,1,2]]]);
//# sourceMappingURL=main.21f463ba.chunk.js.map