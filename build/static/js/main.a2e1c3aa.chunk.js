(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),c=a.n(r),l=a(1),o=a(3),s=function(e){return i.a.createElement("div",{className:"ui segment"},i.a.createElement("div",{className:"ui stackable grid"},i.a.createElement("div",{className:"ui two wide column"},i.a.createElement("img",{alt:"profile_image",src:"https://raw.githubusercontent.com/olivernan/resume/master/image/IMG_0846.png",className:"ui tiny image"})),i.a.createElement("div",{className:"ui four wide column",style:{paddingLeft:"0"}},i.a.createElement("h1",{className:"ui large header",style:{margin:" 10px 0 5px 0px"}},e.name),i.a.createElement("p",null,e.description))))},m=function(e){return{type:"SELECT_MENU_TAB",payload:{title:e}}},d=Object(l.b)(function(e){return{activeTab:e.activeTab}},{selectTab:m,selectCards:function(e){return{type:"SELECT_ACTIVE_CARDS",payload:{name:e}}}})(function(e){var t=e.title,a=e.activeTab.title===t?"active item":"item";return i.a.createElement("div",{className:a,onClick:function(){e.selectTab(t),e.selectCards(t)}},t)}),u=Object(l.b)(function(e){return{tabs:e.menuTabs}},{selectTab:m})(function(e){var t=e.tabs.map(function(e){return i.a.createElement(d,{title:e.title,key:e.title})});return i.a.createElement("div",{className:"ui stackable four item menu"},t)}),g=function(e){return i.a.createElement("div",{className:"ui card"},i.a.createElement("div",{className:"image",style:{padding:"2vh"}},i.a.createElement("img",{src:e.src,alt:e.alt})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},e.header),i.a.createElement("div",{className:"meta"},e.meta)),i.a.createElement("div",{className:"extra content"},i.a.createElement("div",{className:"right floated"},i.a.createElement("span",{className:"description"},i.a.createElement("b",null,e.rightContent))),i.a.createElement("div",{className:"left floated"},i.a.createElement("span",null,i.a.createElement("b",null,e.leftContent)))))},h=function(e){return i.a.createElement("div",{className:"ui card"},i.a.createElement("a",{className:"image",style:{padding:"2vh"},href:e.link},i.a.createElement("img",{src:e.src,alt:e.alt})),i.a.createElement("div",{className:"content"},i.a.createElement("a",{className:"header",href:e.link},e.header),i.a.createElement("div",{className:"meta"},e.meta)),i.a.createElement("div",{className:"extra content"},i.a.createElement("div",{className:"right floated"},i.a.createElement("span",{className:"description"},i.a.createElement("b",null,e.rightContent))),i.a.createElement("div",{className:"left floated"},i.a.createElement("span",null,i.a.createElement("b",null,e.leftContent)))))},p=function(e,t){return e.map(function(e){return t?i.a.createElement(h,{src:e.src,header:e.header,leftContent:e.leftContent,rightContent:e.rightContent,alt:e.alt,meta:e.meta,key:e.alt,link:e.link}):i.a.createElement(g,{src:e.src,header:e.header,leftContent:e.leftContent,rightContent:e.rightContent,alt:e.alt,meta:e.meta,key:e.alt})})},f=Object(l.b)(function(e){return{activeCards:e.activeCards}})(function(e){var t=window.innerWidth<650?{margin:"0px"}:{},a=e.activeCards.containsLinks?"link":"";return i.a.createElement("div",{className:"ui ".concat(a," centered  stackable cards"),style:t},p(e.activeCards.cards,e.activeCards.containsLinks))});var v=a(9),C=Object(o.b)({menuTabs:function(){return[{title:"Education"},{title:"Award"},{title:"Projects"},{title:"Skills"}]},activeTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"Education"},t=arguments.length>1?arguments[1]:void 0;return"SELECT_MENU_TAB"===t.type?{title:t.payload.title}:e},activeCards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.education,t=arguments.length>1?arguments[1]:void 0;if("SELECT_ACTIVE_CARDS"===t.type){var a=t.payload.name.toLowerCase();return v[a]}return e}});c.a.render(i.a.createElement(l.a,{store:Object(o.c)(C)},i.a.createElement(function(){return i.a.createElement("div",{className:"ui container",style:{paddingTop:"1.5vh"}},i.a.createElement(s,{name:"Yiyang Nan",description:"Current University of Michigan undergraduate student"}),i.a.createElement(u,null),i.a.createElement(f,null))},null)),document.querySelector("#root"))},9:function(e){e.exports={education:{cards:[{src:"http://www.freelogovectors.net/wp-content/uploads/2016/12/University-of-Michigan-Logo.png",alt:"University education",header:"Bachelor",meta:"Graduate in Aug 2021",rightContent:"Major in Data Science, Statistics and Mathematics of Finance and Risk Management",leftContent:"University of Michigan - Ann Arbor"},{src:"https://img.icons8.com/color/256/000000/school-building.png",alt:"High School",header:"High School",meta:"Sep 2014 - June 2017",rightContent:"",leftContent:"Wuxi No.1 High School"}]},award:{cards:[{src:"https://img.icons8.com/cotton/256/000000/medal.png",alt:"Dean\u2019s List (2018 Spring)",header:"Dean\u2019s List (2018 Spring)",meta:"",rightContent:"",leftContent:"Acadamic Excellence in the term"},{src:"https://img.icons8.com/cotton/256/000000/piano.png",alt:"AMS first place",header:"Piano Certificate from Shanghai Conservatory of Music",meta:"",leftContent:"National",rightContent:"Level 8 "}]},projects:{containsLinks:!0,cards:[{src:"https://img.icons8.com/dusk/256/000000/stocks.png",alt:"Stock Price Predictor",header:"Stock Price Predictor (using ARIMA and GARCH model)",meta:"Feb 2019",leftContent:"R",rightContent:"",link:"https://github.com/stat385-sp2019/project-repo-team04-hhhh.git"},{src:"https://img.icons8.com/ios/256/66ccff/react-native-filled.png",alt:"Resume",header:"Resume",meta:"July 2019",leftContent:"JSX/HTML",rightContent:"React/Redux",link:"https://github.com/olivernan/resume-1.git"},{src:"https://img.icons8.com/officel/256/000000/robot-2.png",alt:"Gesture Controlled Car",header:"Gesture Controlled Car",meta:"May 2018",leftContent:"Arduino",rightContent:"",link:""}]},skills:{cards:[{src:"https://img.icons8.com/color/256/000000/fund-accounting.png",alt:"Finance Skills",header:"Finance",meta:"Intermediate",leftContent:"Currently Studying (Maths 423 Mathematics of Finance)"},{src:"https://img.icons8.com/dusk/256/000000/r.png",alt:"R",header:"R",meta:"Intermediate",leftContent:"Statisitic Computing"},{src:"https://img.icons8.com/color/256/000000/python.png",alt:"Python",header:"Python",meta:"Basic",leftContent:"Statisitic Computing and Computer Programming"},{src:"https://img.icons8.com/color/256/000000/java-coffee-cup-logo.png",alt:"Java",header:"Java",meta:"Basic",leftContent:"Programming"}]}}}},[[13,1,2]]]);
//# sourceMappingURL=main.a2e1c3aa.chunk.js.map