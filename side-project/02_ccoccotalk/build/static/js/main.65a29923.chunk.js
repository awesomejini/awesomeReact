(this.webpackJsonpccoccotalk=this.webpackJsonpccoccotalk||[]).push([[0],{24:function(e,s,c){},25:function(e,s,c){},26:function(e,s,c){},28:function(e,s,c){},29:function(e,s,c){},35:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),l=c(11),i=c.n(l),n=(c(24),c(17)),r=c(3),j=(c(25),c(26),c(0));var h=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"navMenuList",children:e.navMenu.map((function(s,c){return Object(j.jsx)("li",{className:"",children:Object(j.jsxs)("a",{href:e.nav[c],className:"navLink",children:[" ",s," "]})},c)}))})})},d=c(9);c(28);var b=function(e){var s=Object(a.useState)(!0),c=Object(d.a)(s,2),t=c[0],l=c[1],i=Object(a.useState)(!0),n=Object(d.a)(i,2),r=n[0],h=n[1],b=Object(a.useState)(!0),m=Object(d.a)(b,2),o=m[0],x=m[1],O=Object(a.useState)(!0),f=Object(d.a)(O,2),g=f[0],p=f[1],u=Object(a.useState)(!0),N=Object(d.a)(u,2),v=N[0],M=N[1],y=function(e,s){return s?Object(j.jsx)("a",{href:"/",className:"toggle-arrow-s",onClick:function(s){s.preventDefault(),e(!1)},children:Object(j.jsx)("i",{className:"fas fa-chevron-up"})}):Object(j.jsx)("a",{href:"/",className:"toggle-arrow-s",onClick:function(s){s.preventDefault(),e(!0)},children:Object(j.jsx)("i",{className:"fas fa-chevron-down"})})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"friends-wrap",children:Object(j.jsxs)("ul",{className:"ul-row",children:[Object(j.jsx)("li",{className:"li-row",children:"Friends"}),Object(j.jsx)("li",{className:"li-row",children:Object(j.jsx)("a",{href:"/",className:"searchBtn fas fa-search",children:" "})}),Object(j.jsx)("li",{className:"li-row",children:Object(j.jsx)("a",{href:"/",className:"searchBtn fas fa-user-plus",children:" "})}),Object(j.jsx)("li",{className:"li-row",children:Object(j.jsx)("a",{href:"/",className:"searchBtn fas fa-music",children:" "})}),Object(j.jsx)("li",{className:"li-row",children:Object(j.jsx)("a",{href:"/",className:"searchBtn fas fa-cog",children:" "})})]})}),Object(j.jsx)("div",{className:"friends-list-wrap",children:Object(j.jsxs)("ul",{className:"ul-col",children:[Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-my",children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:"\uc5b4\uc378\uc9c0\ub2c8"}),Object(j.jsx)("p",{children:"\uac85\ubd80\uc7c1\uc774~"})]})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("h6",{children:"Friends with Birthdays"}),y(l,!0===t),!0===t?e.friendsData.map((function(e){if(!0===e.birthDay)return Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("div",{className:"update-img-dot",children:"."}),Object(j.jsx)("a",{href:"/",className:"thumb-img-s-normal",style:{background:"white url(".concat(e.profileImage,") no-repeat top 4px center/70%")},children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsxs)("h4",{children:[e.name," \ud83c\udf82"]}),Object(j.jsx)("p",{children:e.stateMsg})]}),Object(j.jsxs)("a",{href:"/",className:"gift-shop round-btn-s",children:["Gift Shop ",Object(j.jsx)("i",{className:"fas fa-gift red"})]})]},e.id)})):null,Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-birth",children:" "}),Object(j.jsx)("div",{className:"text",children:Object(j.jsx)("h4",{children:"View more birthdays"})}),Object(j.jsxs)("a",{href:"/",className:"go-arrow-s",children:["100 ",Object(j.jsx)("i",{className:"fas fa-chevron-right"})]})]})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("h6",{children:"Favorites"}),y(h,!0===r),!0===r?e.friendsData.map((function(e){if(!0===e.fav)return!1===e.music?Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-normal",style:{background:"white url(".concat(e.profileImage,") no-repeat top 4px center/70%")},children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:e.name}),Object(j.jsx)("p",{children:e.stateMsg})]})]},e.id):Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-normal",style:{background:"white url(".concat(e.profileImage,") no-repeat top 4px center/70%")},children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:e.name}),Object(j.jsx)("p",{children:e.stateMsg})]}),Object(j.jsxs)("a",{href:"/",className:"music-play round-btn-s",children:[e.musicTitle," ",Object(j.jsx)("i",{className:"fas fa-play green"})]})]},e.id)})):null]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("h6",{children:"Recommended Friends"}),y(x,!0===o),!0===o?Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-recomm",children:" "}),Object(j.jsx)("div",{className:"text",children:Object(j.jsx)("h4",{children:"Discover more people"})}),Object(j.jsxs)("a",{href:"/",className:"go-arrow-s",children:["100 ",Object(j.jsx)("i",{className:"fas fa-chevron-right"})]})]}):null]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("h6",{children:"Channel"}),y(p,!0===g),!0===g?Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-channel",children:" "}),Object(j.jsx)("div",{className:"text",children:Object(j.jsx)("h4",{children:"Channel"})}),Object(j.jsxs)("a",{href:"/",className:"go-arrow-s",children:["100 ",Object(j.jsx)("i",{className:"fas fa-chevron-right"})]})]}):null,!0===g?e.channelData.map((function(e){return Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-channel",style:{background:"white url(".concat(e.profileImage,") no-repeat top center/100%")},children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:e.name}),Object(j.jsx)("p",{children:e.stateMsg})]})]},e.id)})):null]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("h6",{children:"Friends 100"}),y(M,!0===v),!0===v?e.friendsData.map((function(e){return Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-normal",style:{background:"white url(".concat(e.profileImage,") no-repeat top 4px center/70%")},children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:e.name}),Object(j.jsx)("p",{children:e.stateMsg})]})]},e.id)})):null]})]})})]})};c(29);var m=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"chats-wrap",children:Object(j.jsxs)("ul",{className:"ul-row",children:[Object(j.jsx)("li",{className:"li-row",children:"chats"}),Object(j.jsx)("li",{className:"li-row",children:Object(j.jsx)("a",{href:"/",className:"searchBtn fas fa-search",children:" "})}),Object(j.jsx)("li",{className:"li-row",children:Object(j.jsx)("a",{href:"/",className:"searchBtn fas fa-user-plus",children:" "})}),Object(j.jsx)("li",{className:"li-row",children:Object(j.jsx)("a",{href:"/",className:"searchBtn fas fa-music",children:" "})}),Object(j.jsx)("li",{className:"li-row",children:Object(j.jsx)("a",{href:"/",className:"searchBtn fas fa-cog",children:" "})})]})}),Object(j.jsx)("div",{className:"friends-list-wrap",children:Object(j.jsxs)("ul",{className:"ul-col",children:[Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-my",children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:"\uc9f1\uce5c\uc9f1\uce5c1"}),Object(j.jsx)("p",{children:"\uc624\ub298\ub3c4 \ud654\uc774\ud305"})]})]}),Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-my",children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:"\uc9f1\uce5c\uc9f1\uce5c2"}),Object(j.jsx)("p",{children:"\uc624\ub298\ub3c4 \ud654\uc774\ud305"})]})]}),Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-my",children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:"\uc9f1\uce5c\uc9f1\uce5c3"}),Object(j.jsx)("p",{children:"\uc624\ub298\ub3c4 \ud654\uc774\ud305"})]})]}),Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-my",children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:"\uc9f1\uce5c\uc9f1\uce5c4"}),Object(j.jsx)("p",{children:"\uc624\ub298\ub3c4 \ud654\uc774\ud305"})]})]}),Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-my",children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:"\uc9f1\uce5c\uc9f1\uce5c5"}),Object(j.jsx)("p",{children:"\uc624\ub298\ub3c4 \ud654\uc774\ud305"})]})]}),Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-my",children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:"\uc9f1\uce5c\uc9f1\uce5c6"}),Object(j.jsx)("p",{children:"\uc624\ub298\ub3c4 \ud654\uc774\ud305"})]})]}),Object(j.jsxs)("li",{className:"li-col",children:[Object(j.jsx)("a",{href:"/",className:"thumb-img-s-my",children:" "}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{children:"\uc9f1\uce5c\uc9f1\uce5c7"}),Object(j.jsx)("p",{children:"\uc624\ub298\ub3c4 \ud654\uc774\ud305"})]})]})]})})]})},o=[{id:0,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc0dd\uc77c\uc9c0\ub2c81",stateMsg:"hello",birthDay:!0,fav:!1,update:!0},{id:1,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc0dd\uc77c\uc9c0\ub2c82",stateMsg:"hello",birthDay:!0,fav:!1},{id:2,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\ucf54\ub5291",stateMsg:"hello",birthDay:!1,music:!1,fav:!0},{id:3,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\ucf54\ub5292",stateMsg:"hello",birthDay:!1,music:!0,musicTitle:"Wannabe - ITZY (\uc788\uc9c0)",fav:!0},{id:4,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\ucf54\ub5293",stateMsg:"hello",birthDay:!1,music:!1,fav:!0},{id:5,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\uce5c\uad6c1",stateMsg:"hello",birthDay:!1,music:!1},{id:6,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\uce5c\uad6c2",stateMsg:"hello",birthDay:!1,music:!1},{id:7,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\uce5c\uad6c3",stateMsg:"hello",birthDay:!1,music:!1},{id:8,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\uce5c\uad6c4",stateMsg:"hello",birthDay:!1,music:!1},{id:9,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\uce5c\uad6c5",stateMsg:"hello",birthDay:!1,music:!1},{id:10,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\uce5c\uad6c6",stateMsg:"hello",birthDay:!1,music:!1},{id:11,profileImage:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",name:"\uc774\uce5c\uad6c7",stateMsg:"hello",birthDay:!1,music:!1}],x=[{id:1e3,profileImage:"https://play-lh.googleusercontent.com/cf3DwPLbS8Z55sDvUSTQ6PL1goPdm8KbZ81g4TEUAaeUh5LDhkzdjxKQ2RX6BGpv0x4",name:"\ucc44\ub110 \uc608\uc2dc1",stateMsg:"\uc784\uc2dc \ucc44\ub110\uc785\ub2c8\ub2e4",birthDay:!0},{id:1001,profileImage:"https://play-lh.googleusercontent.com/cf3DwPLbS8Z55sDvUSTQ6PL1goPdm8KbZ81g4TEUAaeUh5LDhkzdjxKQ2RX6BGpv0x4",name:"\ucc44\ub110 \uc608\uc2dc2",stateMsg:"\uc784\uc2dc \ucc44\ub110\uc785\ub2c8\ub2e4",birthDay:!0}];var O=function(){var e=[Object(j.jsx)("i",{className:"far fa-user"}),Object(j.jsx)("i",{className:"far fa-comment"}),Object(j.jsx)("i",{className:"fas fa-hashtag"}),Object(j.jsx)("i",{className:"fas fa-shopping-bag"}),Object(j.jsx)("i",{className:"fas fa-ellipsis-h"})];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"ad-wrap",children:Object(j.jsx)("div",{className:"ad",children:Object(j.jsxs)("a",{href:"https://awesomejini.tistory.com/",children:[Object(j.jsx)("b",{children:"awesomejini \ube14\ub85c\uadf8"}),"\ub85c \ub180\ub7ec\uc624\uc138\uc694~!"]})})}),Object(j.jsx)(h,{navMenu:e,nav:["friends","chats","news","shopping","more"]}),Object(j.jsxs)(n.a,{children:[Object(j.jsx)(r.a,{path:"/chats",render:function(){return Object(j.jsx)(m,{})}}),Object(j.jsx)(r.a,{path:"/friends",render:function(){return Object(j.jsx)(b,{friendsData:o,channelData:x})}}),Object(j.jsx)(r.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(b,{friendsData:o,channelData:x})}})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,l=s.getLCP,i=s.getTTFB;c(e),a(e),t(e),l(e),i(e)}))},g=c(18),p=c(19),u={bitrhModal:!0,favModal:!0,recommModal:!0,channModal:!0,friendsModal:!0};var N=Object(p.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,s=arguments.length>1?arguments[1]:void 0;return"birthModal"===s.type?e.bitrhModal=!e.bitrhModal:"favModal"===s.type?e.favModal=!e.favModal:"recommModal"===s.type?e.recommModal=!e.recommModal:"channModal"===s.type?e.channModal=!e.channModal:"friendsModal"===s.type?e.friendsModal=!e.friendsModal:void 0}));i.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(g.a,{store:N,children:Object(j.jsx)(O,{})})}),document.getElementById("root")),f()}},[[35,1,2]]]);
//# sourceMappingURL=main.65a29923.chunk.js.map