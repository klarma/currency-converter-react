(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{23:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,s,l,u,d,b,j,x,h,p,m=t(1),f=t.n(m),O=t(10),g=t.n(O),v=t(2),y=t(3),w=t.p+"static/media/money.ff83bf32.jpg",k=Object(v.b)(r||(r=Object(y.a)(['\n    html {\n        box-sizing: border-box;\n        scroll-behavior: smooth;\n    }\n  \n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n  \n    body {\n        max-width: 700px;\n        margin: 0 auto;\n        background-image: url("','");\n        background-position: 50%;\n        background-size: cover;\n        padding: 0 20px;\n        color: ',';\n        font-family: "Roboto", sans-serif;\n        text-align: center;\n    }\n'])),w,(function(e){return e.theme.color.gallery})),z=t(4),S=v.d.h1(c||(c=Object(y.a)(["\n    margin-bottom: 10px;\n"]))),C=t(0),F=function(){return Object(C.jsxs)("header",{children:[Object(C.jsx)(S,{children:"Kantor wymiany walut"}),Object(C.jsx)("p",{children:"Pole oznaczone* jest wymagane"})]})},P=v.d.footer(a||(a=Object(y.a)(["\n    padding: 5px;\n    margin-top: 40px;\n"]))),E=function(){return Object(C.jsx)(P,{children:Object(C.jsx)("p",{children:"YouCode 2021 - Edycja II"})})},D=[{short:"EUR",name:"Euro",rate:4.57},{short:"USD",name:"Dolar Ameryka\u0144ski",rate:3.82},{short:"GBP",name:"Funt Brytyjski",rate:5.26}],L=v.d.span(i||(i=Object(y.a)(["\n    display: inline-block;\n    width: 100%;\n    text-align: left;\n    max-width: 150px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n"]))),I=v.d.input(o||(o=Object(y.a)(["\n    border: 1px solid ",";\n    padding: 10px;\n    width: 100%;\n    max-width: 400px;\n"])),(function(e){return e.theme.color.silver})),A=v.d.button(s||(s=Object(y.a)(["\n    width: 100%;\n    max-width: 90%;\n    border: none;\n    background-color: ",";\n    color: ",";\n    margin-top: 10px;\n    padding: 7px;\n\n    &:hover{\n        cursor: pointer;\n        filter: brightness(110%);\n    };\n\n    &:active{\n        filter: brightness(120%);\n    }\n"])),(function(e){return e.theme.color.cabaret}),(function(e){return e.theme.color.white})),B=function(e){var n=e.calculateResult,t=Object(m.useState)(""),r=Object(z.a)(t,2),c=r[0],a=r[1],i=Object(m.useState)(D[0].short),o=Object(z.a)(i,2),s=o[0],l=o[1];return Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(c,s)},children:[Object(C.jsx)("p",{children:Object(C.jsxs)("label",{children:[Object(C.jsx)(L,{children:"Podaj kwot\u0119 w PLN*"}),Object(C.jsx)(I,{value:c,onChange:function(e){var n=e.target;return a(n.value)},name:"PLN",type:"number",step:"any",min:"0",autoFocus:!0,required:!0})]})}),Object(C.jsx)("p",{children:Object(C.jsxs)("label",{children:[Object(C.jsx)(L,{children:"Wybierz walut\u0119"}),Object(C.jsx)(I,{as:"select",value:s,onChange:function(e){var n=e.target;return l(n.value)},name:"currency",children:D.map((function(e){return Object(C.jsx)("option",{value:e.short,children:e.name},e.short)}))})]})}),Object(C.jsxs)("p",{children:[Object(C.jsx)(A,{children:"Przelicz"}),Object(C.jsx)(A,{onClick:function(){a(""),l(D[0].short)},type:"reset",children:"Wyczy\u015b\u0107"})]})]})},N=v.d.section(l||(l=Object(y.a)(["\n    margin-top: 20px;\n    padding: 5px 15px;\n    border: 1px solid #ccc;\n    box-shadow: 2px 2px 8px;\n\n    "," \n"])),(function(e){return e.smaller&&Object(v.c)(u||(u=Object(y.a)(["\n        min-height: 22vh;     \n\n        @media(max-width: 767px) {\n            min-height: 30vh;\n        }\n    "])))})),R=v.d.h2(d||(d=Object(y.a)(["\n    padding: 15px;\n"]))),T=function(e){var n=e.title,t=e.body,r=e.extraSectionContent,c=e.smaller;return Object(C.jsxs)(N,{smaller:c,children:[r,Object(C.jsx)(R,{children:n}),t]})},K=t(8),M=t.n(K),W=t(14),H=t.p+"static/media/loading.bf4b180f.gif",J=v.d.div(b||(b=Object(y.a)(["\n    margin: 120px auto;\n    color: #eee;\n    font-size: 18px;\n    line-height: 2;\n    padding: 80px;\n    border: 1px solid #ccc;\n    box-shadow: 2px 2px 8px;\n\n    @media (max-width: 767px){\n        margin: 40px auto;\n        font-size: 14px;\n        padding-bottom: 10px;\n    }\n"]))),U=v.d.img.attrs({src:H})(j||(j=Object(y.a)(["\n        width: 100px;\n        padding-top: 20px;\n"]))),q=v.d.div(x||(x=Object(y.a)(["\n    margin: 120px auto;\n    color: #eee;\n    font-size: 18px;\n    line-height: 2;\n    padding: 80px;\n    border: 1px solid #ccc;\n    box-shadow: 2px 2px 8px;\n\n    @media (max-width: 767px){\n        margin: 40px auto;\n        font-size: 14px;\n    }\n"]))),G=function(e){var n=e.children,t=function(){var e=Object(m.useState)({state:"loading",rates:null,date:null}),n=Object(z.a)(e,2),t=n[0],r=n[1];return Object(m.useEffect)((function(){setTimeout(function(){var e=Object(W.a)(M.a.mark((function e(){var n,t,c,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.exchangerate.host/latest?base=PLN");case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:t=e.sent,c=t.rates,a=t.date,r({state:"success",rates:c,date:a}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),r({state:"error"});case 17:case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),1500)}),[]),t}();return Object(C.jsx)(C.Fragment,{children:"loading"===t.state?Object(C.jsxs)(J,{children:["Sekunda... ",Object(C.jsx)("br",{}),"\u0141aduj\u0119 kursy walut z Europejskiego Banku Centralnego",Object(C.jsx)("br",{}),Object(C.jsx)(U,{})]}):"error"===t.state?Object(C.jsx)(q,{children:"\ud83d\udee0\ufe0f Hmm... Co\u015b posz\u0142o nie tak. Sprawd\u017a czy masz po\u0142\u0105czenie z internetem"}):Object(C.jsx)("main",{children:n})})},Y=v.d.p(h||(h=Object(y.a)(["\n    font-size: 25px;\n\n    @media(max-width: ","px) {\n        font-size: 18px;\n    }\n"])),(function(e){return e.theme.breakpoint.mobileMax})),Q=function(e){var n=e.result;return Object(C.jsx)(Y,{children:!!n&&Object(C.jsxs)(C.Fragment,{children:[n.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(C.jsxs)("strong",{children:[n.targetAmount.toFixed(2),"\xa0",n.currency]})]})})},V=function(){var e=Object(m.useState)(new Date),n=Object(z.a)(e,2),t=n[0],r=n[1];return Object(m.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),t},X=v.d.p(p||(p=Object(y.a)(["\n    text-align: left;\n    font-family: monospace;\n    color: ",";\n"])),(function(e){return e.theme.color.silverChalice})),Z=function(e){var n=V().toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"});return Object(C.jsxs)(X,{children:["Dzisiaj jest"," ",n]})};var $=function(){var e=Object(m.useState)(),n=Object(z.a)(e,2),t=n[0],r=n[1];return Object(m.useEffect)((function(){console.log("Hello world created by Krzysiu. Nice to be here")}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(F,{}),Object(C.jsxs)(G,{children:[Object(C.jsx)(T,{title:"Kalkulator walut",extraSectionContent:Object(C.jsx)(Z,{}),body:Object(C.jsx)(B,{calculateResult:function(e,n){var t=D.find((function(e){return e.short===n})).rate;r({sourceAmount:+e,targetAmount:e/t,currency:n})},reslut:t})}),Object(C.jsx)(T,{smaller:!0,title:"Wynik:",body:Object(C.jsx)(Q,{result:t})})]}),Object(C.jsx)(E,{})]})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};g.a.render(Object(C.jsx)(f.a.StrictMode,{children:Object(C.jsxs)(v.a,{theme:{color:{silverChalice:"#aaa",silver:"#ccc",gallery:"#eee",white:"#fff",cabaret:"#D75067"},breakpoint:{mobileMax:767}},children:[Object(C.jsx)(k,{}),Object(C.jsx)($,{})]})}),document.getElementById("root")),_()}},[[23,1,2]]]);
//# sourceMappingURL=main.c4ad9b0b.chunk.js.map