(this["webpackJsonptest-site-layout"]=this["webpackJsonptest-site-layout"]||[]).push([[0],{31:function(e,t,n){e.exports=n(49)},36:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(28),r=n.n(o),c=(n(36),n(1)),s=n(2),l=n(4),m=n(3),u=n(5),d=(n(8),n(18)),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).scrollToItem=function(e){e.preventDefault();var t=e.currentTarget.id.substring(5);try{document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}catch(a){console.log("go home"),n.props.setScreen(t)}n.props.openOrCloseMenu()},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"menuItem",value:function(e,t,n,a){return i.a.createElement("li",{id:t,onClick:a,className:"header__item"},i.a.createElement(d.b,{id:t+"-link",to:n,className:"header__link"},e))}},{key:"render",value:function(){return i.a.createElement("ul",{className:"header__menu animated fadeInDown",id:"menu"},this.menuItem("Home","menu-home","/",this.scrollToItem),this.menuItem("About","menu-about","/",this.scrollToItem),this.menuItem("Servicing","menu-services","/",this.scrollToItem),this.menuItem("Portfolio","menu-portfolio","/",this.scrollToItem),this.menuItem("Blog","menu-blog","/",this.scrollToItem),this.menuItem("Contacts","menu-contacts","/contacts",this.props.openOrCloseMenu))}}]),t}(i.a.Component),f=n(7),h=n(10),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).openOrCloseMenu=function(){document.getElementById("menu").classList.toggle("header__menu_show"),document.getElementById("burger").classList.toggle("header__bar_hidden"),document.getElementById("cross").classList.toggle("header__bar_hidden")},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"header",id:"header"},i.a.createElement("div",{className:"header__head"},i.a.createElement("p",null,"Your Logo"),i.a.createElement(f.a,{id:"burger",className:"header__bar animated fadeIn",icon:h.c,onClick:function(){return e.openOrCloseMenu()}}),i.a.createElement(f.a,{id:"cross",className:"header__bar header__bar_hidden animated fadeIn",icon:h.k,onClick:function(){return e.openOrCloseMenu()}})),i.a.createElement(p,{openOrCloseMenu:this.openOrCloseMenu,setScreen:this.props.setScreen}))}}]),t}(i.a.Component);n(44);function g(e){var t=e.addClass,n=e.isRight,a=e.text,o=e.isShowing,r=e.closePopup;return i.a.createElement("div",{className:"popup ".concat(t," ").concat(n?"":"popup_wrong"," ").concat(o?"":"popup_hidden"," animated rollIn")},i.a.createElement("div",{className:"popup__close",onClick:function(){var e=document.getElementsByClassName("popup")[0];e.classList.add("rollOut"),e.addEventListener("animationend",(function t(){e.removeEventListener("animationend",t),e.classList.remove("rollOut"),r()}))}},i.a.createElement(f.a,{icon:h.k})),i.a.createElement("p",null,a))}n(45);function E(e){var t=e.title,n=e.addClasses,a=e.clickFunction;return i.a.createElement("button",{className:"button "+n,onClick:a},t)}var v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={isPopupShowing:!1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"togglePopup",value:function(){var e=this;if(this.state.isPopupShowing){var t=document.getElementsByClassName("popup")[0];t.classList.add("rollOut"),t.addEventListener("animationend",(function n(){t.removeEventListener("animationend",n),t.classList.remove("rollOut"),e.setState({isPopupShowing:!1})}))}else this.setState({isPopupShowing:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"home-buttons"},i.a.createElement("div",{className:"home-buttons__container"},i.a.createElement(E,{title:"OUR SERVICES",addClasses:"button_white",clickFunction:function(){return e.props.scrollToItem("services")}})),i.a.createElement("div",{className:"home-buttons__container"},i.a.createElement(g,{addClass:"home-buttons__popup",isRight:!0,text:"hire is now))",isShowing:this.state.isPopupShowing,closePopup:this.togglePopup.bind(this)}),i.a.createElement(E,{title:"HIRE IS NOW",addClasses:"button_seagreen",clickFunction:this.togglePopup.bind(this)})))}}]),t}(i.a.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems),this.props.colorHeaderItems()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"scrollToItem",value:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"home",id:"home"},i.a.createElement("div",{className:"home__content"},i.a.createElement("h1",{className:"home__title"},"Web development project"),i.a.createElement("h4",{className:"home__description"},"Very suitable to support all web development projects"),i.a.createElement(v,{scrollToItem:this.scrollToItem}),i.a.createElement(f.a,{className:"home__angle",icon:h.a,onClick:function(){return e.scrollToItem("about")}})))}}]),t}(i.a.Component);function k(e){return i.a.createElement("li",{className:"about-item"},i.a.createElement("div",{className:"about-item__img"},i.a.createElement(f.a,{icon:e.icon})),i.a.createElement("h3",{className:"about-item__title"},e.title),i.a.createElement("p",{className:"about-item__description"},e.blockText))}n(46);function w(e){var t=e.addClass,n=e.name,a=e.description;return i.a.createElement("div",{className:"title "+(t||"")},i.a.createElement("h2",{className:"title__name"},n),i.a.createElement("p",{className:"title__description"},a))}var y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"render",value:function(){var e="Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor";return i.a.createElement("div",{className:"about",id:"about"},i.a.createElement(w,{addClass:"about__info",name:"About Us",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                        Ut enim ad minim veniam,"}),i.a.createElement("ul",{className:"about__content"},i.a.createElement(k,{title:"Awesome Icons",blockText:e,icon:h.g}),i.a.createElement(k,{title:"OnePage",blockText:e,icon:h.m}),i.a.createElement(k,{title:"Fully Responsive",blockText:e,icon:h.l})))}}]),t}(i.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("li",{className:"infoblock"},i.a.createElement("div",{className:"infoblock__icon"},i.a.createElement(f.a,{icon:h.i})),i.a.createElement("h3",{className:"infoblock__title"},this.props.title),i.a.createElement("p",{className:"infoblock__description"},this.props.text),i.a.createElement("button",{className:"infoblock__button"},"READ MORE"))}}]),t}(i.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"render",value:function(){var e="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.";return i.a.createElement("div",{className:"services",id:"services"},i.a.createElement(w,{addClass:"services__info",name:"Our Services",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),i.a.createElement("ul",{className:"services__content"},i.a.createElement(O,{title:"Research",text:e}),i.a.createElement(O,{title:"Portfolio",text:e}),i.a.createElement(O,{title:"Support",text:e}),i.a.createElement(O,{title:"Documentation",text:e}),i.a.createElement(O,{title:"Development",text:e}),i.a.createElement(O,{title:"Design",text:e})))}}]),t}(i.a.Component),I=n(12),N=n(9),x=n.n(N);function C(e){var t="./img/"+e.img;return i.a.createElement("li",{className:"portfolio__item animated fadeIn"},i.a.createElement("img",{src:t,alt:""}),i.a.createElement("div",{className:"portfolio__item_hover"},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.description)))}var B={items:[{title:"Hand Watch",description:"ui/ux design",img:"Watch.jpg"},{title:"One Day Pass",description:"ui/ux design",img:"Pass.jpg"},{title:"T-shirt",description:"ui/ux design",img:"T-shirt.jpg"},{title:"Bottle",description:"ui/ux design",img:"Bottle.jpg"},{title:"Bottle Of Wine",description:"ui/ux design",img:"Wine.jpg"},{title:"Big Bag",description:"ui/ux design",img:"Bag.jpg"}]},S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={all:!1},n.showOrHide=function(){n.state.all&&document.getElementById("portfolio").scrollIntoView({behavior:"smooth",block:"center"}),n.setState({all:!n.state.all})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"genItems",value:x.a.mark((function e(){var t,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.all?B.items.length:3,n=0;case 2:if(!(n<t)){e.next=9;break}return a=B.items[n],e.next=6,i.a.createElement(C,{img:a.img,title:a.title,description:a.description,key:"portfolio-item-".concat(n)});case 6:++n,e.next=2;break;case 9:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){return i.a.createElement("div",{className:"portfolio",id:"portfolio"},i.a.createElement(w,{addClass:"portfolio__info",name:"Latest Works",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),i.a.createElement("div",{className:"portfolio__switcher"},i.a.createElement(E,{title:"ALL",addClasses:"portfolio__button portfolio__button_selected button_seagreen-black button_small"}),i.a.createElement(E,{title:"WEB DESIGN",addClasses:"portfolio__button button_seagreen-black button_small"}),i.a.createElement(E,{title:"UI/UX DESIGN",addClasses:"portfolio__button button_seagreen-black button_small"}),i.a.createElement(E,{title:"MOCKUPS",addClasses:"portfolio__button button_seagreen-black button_small"})),i.a.createElement("ul",{className:"portfolio__list",id:"portfolio__list"},Object(I.a)(this.genItems())),i.a.createElement(E,{title:this.state.all?"HIDE":"SHOW ALL",addClasses:"button_seagreen button_small portfolio__button portfolio__show-all",clickFunction:this.showOrHide.bind(this)}))}}]),t}(i.a.Component);function L(e){var t=x.a.mark(n);function n(){var n,a,o,r,c,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!0,a=!1,o=void 0,t.prev=3,r=e.features[Symbol.iterator]();case 5:if(n=(c=r.next()).done){t.next=12;break}return s=c.value,t.next=9,i.a.createElement("li",{className:"tariff__feature",key:"price-item-".concat(s)},s);case 9:n=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),a=!0,o=t.t0;case 18:t.prev=18,t.prev=19,n||null==r.return||r.return();case 21:if(t.prev=21,!a){t.next=24;break}throw o;case 24:return t.finish(21);case 25:return t.finish(18);case 26:case"end":return t.stop()}}),t,null,[[3,14,18,26],[19,,21,25]])}return i.a.createElement("li",{className:"price__item tariff"},i.a.createElement("div",{className:"tariff__header"},i.a.createElement("h2",{className:"tariff__title"},e.name),i.a.createElement("p",{className:"tariff__price"},i.a.createElement("span",null,i.a.createElement("sup",null,"$"),e.price)," per month")),i.a.createElement("ul",{className:"tariff__features-list"},Object(I.a)(n())),i.a.createElement(E,{addClasses:"button_black tariff__order-button",title:"ORDER NOW"}))}var P={tariffs:[{name:"Free trial",price:"00",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]},{name:"Basic",price:"50",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]},{name:"Ultimates",price:"99",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]}]},H=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"genPriceItems",value:x.a.mark((function e(){var t,n,a,o,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,n=!1,a=void 0,e.prev=3,o=P.tariffs[Symbol.iterator]();case 5:if(t=(r=o.next()).done){e.next=12;break}return c=r.value,e.next=9,i.a.createElement(L,{name:c.name,price:c.price,features:c.features,key:"price-item-".concat(c.name)});case 9:t=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),n=!0,a=e.t0;case 18:e.prev=18,e.prev=19,t||null==o.return||o.return();case 21:if(e.prev=21,!n){e.next=24;break}throw a;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}}),e,null,[[3,14,18,26],[19,,21,25]])}))},{key:"render",value:function(){return i.a.createElement("div",{className:"price"},i.a.createElement(w,{addClass:"price__info",name:"Pricing Plan",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                        Ut enim ad minim veniam,"}),i.a.createElement("ul",{className:"price__content"},Object(I.a)(this.genPriceItems())))}}]),t}(i.a.Component),D=n(19);function M(e){return i.a.createElement("li",{className:"blog-item animated fadeIn"},i.a.createElement("img",{src:e.info.imgPath,alt:""}),i.a.createElement("div",{className:"blog-item__content"},i.a.createElement("h3",{className:"blog-item__title"},e.info.title),i.a.createElement("div",{className:"blog-item__keylist"},i.a.createElement("span",{className:"blog-item__key"},i.a.createElement(f.a,{icon:D.a}),"\u2003",e.info.date),i.a.createElement("span",{className:"blog-item__key"},i.a.createElement(f.a,{icon:D.c}),"\u2003",e.info.category)),i.a.createElement("p",{className:"blog-item__description"},e.info.description)))}var U=[{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Scrabble.jpg"},{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Keyboard.jpg"},{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Keyboard-2.jpg"}],R=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={showingItems:1,all:!1},n.showMoreOrHide=function(){n.setState({showingItems:n.state.all?1:n.state.showingItems+1,all:n.state.showingItems===U.length-1})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"genBlogItems",value:x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=U,n=0;case 2:if(!(n<this.state.showingItems)){e.next=8;break}return e.next=5,i.a.createElement(M,{info:t[n],key:"blog-item-".concat(n)});case 5:++n,e.next=2;break;case 8:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){return i.a.createElement("div",{id:"blog"},i.a.createElement(w,{addClass:"blog__info",name:"Blog",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                        Ut enim ad minim veniam,"}),i.a.createElement("ul",{className:"blog__content"},Object(I.a)(this.genBlogItems())),i.a.createElement(E,{title:this.state.all?"HIDE":"MORE VIEW",addClasses:"blog__button button_small button_seagreen",clickFunction:this.showMoreOrHide.bind(this)}))}}]),t}(i.a.Component),V=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.getElementById(this.props.screenId).scrollIntoView({block:"center",behavior:"smooth"}),window.addEventListener("scroll",this.props.arrowVisibility),this.props.arrowVisibility()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.arrowVisibility)}},{key:"colorHeaderItems",value:function(e){var t=document.getElementById(e),n=document.getElementById("menu-"+e+"-link"),a=window.pageYOffset+t.getBoundingClientRect().top,i=(window.pageXOffset,t.getBoundingClientRect().left,window.pageXOffset,t.getBoundingClientRect().right,window.pageYOffset+t.getBoundingClientRect().bottom),o=window.pageYOffset,r=(window.pageXOffset,window.pageXOffset,document.documentElement.clientWidth,window.pageYOffset+document.documentElement.clientHeight),c=r-o;i<r&&a>o||r-a>.5*c&&i-o>.5*c?n.classList.add("header__link_colored"):n.classList.remove("header__link_colored")}},{key:"render",value:function(){return i.a.createElement("div",{className:"main-container"},i.a.createElement(_,{colorHeaderItems:this.colorHeaderItems.bind(null,"home")}),i.a.createElement(y,{colorHeaderItems:this.colorHeaderItems.bind(null,"about")}),i.a.createElement(j,{colorHeaderItems:this.colorHeaderItems.bind(null,"services")}),i.a.createElement(S,{colorHeaderItems:this.colorHeaderItems.bind(null,"portfolio")}),i.a.createElement(H,null),i.a.createElement(R,{colorHeaderItems:this.colorHeaderItems.bind(null,"blog")}))}}]),t}(i.a.PureComponent),T={members:[{name:"John Doe",position:"General Manager",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Alexa Biru",position:"Office Director",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Ronobir Sing",position:"Admin",img:"Sing.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not John Doe",position:"General Manager",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Alexa Biru",position:"Office Director",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Ronobir Sing",position:"Admin",img:"Sing.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Not John Doe",position:"General Manager",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Not Alexa Biru",position:"Office Director",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}}]},W=n(25);function A(e){var t,n="./img/"+e.img;return i.a.createElement("div",{className:"team__person-about"},i.a.createElement("img",{src:n,alt:"fuck"}),i.a.createElement("div",{className:"team__person-info"},i.a.createElement("h3",null,e.name),i.a.createElement("p",null,e.position)),(t=e.links,i.a.createElement("div",{className:"team__person-socials"},i.a.createElement("a",{href:t.fb},i.a.createElement(f.a,{icon:W.a})),i.a.createElement("a",{href:t.twi},i.a.createElement(f.a,{icon:W.b})),i.a.createElement("a",{href:t.mess},i.a.createElement(f.a,{icon:h.e})),i.a.createElement("a",{href:t.ball},i.a.createElement(f.a,{icon:h.d})))))}function F(e){var t=x.a.mark(o),n=3*e.num,a=T.members.slice(n,n+3);function o(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<a.length)){t.next=7;break}return t.next=4,i.a.createElement(A,{img:a[e].img,name:a[e].name,position:a[e].position,links:a[e].links,key:"team-member-item-".concat(e)});case 4:++e,t.next=1;break;case 7:case"end":return t.stop()}}),t)}var r="photo-block-"+e.num,c="team__content animated fadeIn "+(e.hidden?"team__content_hidden":"");return i.a.createElement("div",{id:r,className:c},Object(I.a)(o()))}function q(e){var t=x.a.mark(a);function n(t,n){for(var a=0;a<n;++a){var i="photo-block-"+a,o="circle-"+a;a===t?(document.getElementById(i).classList.remove("team__content_hidden"),document.getElementById(o).classList.add("team__switcher_circle_active")):(document.getElementById(i).classList.add("team__content_hidden"),document.getElementById(o).classList.remove("team__switcher_circle_active"))}e.setBlock(t),document.getElementById("photo-block-"+t).scrollIntoView({behavior:"smooth",block:"center"})}function a(e){var a,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=x.a.mark((function t(a){var o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(30*a+10).toString(),t.next=3,i.a.createElement("circle",{id:"circle-"+a,className:0===a?"team__switcher_circle_active":"",cx:o,cy:"10",r:"10",onClick:function(){return n(a,e)},key:"switcher-".concat(a)});case 3:case"end":return t.stop()}}),t)})),o=0;case 2:if(!(o<e)){t.next=7;break}return t.delegateYield(a(o),"t0",4);case 4:++o,t.next=2;break;case 7:case"end":return t.stop()}}),t)}return i.a.createElement("div",{className:"team__switcher"},i.a.createElement("svg",{width:20*e.amount,height:"15",viewBox:"0 0 "+(20*e.amount+20)+" 20"},Object(I.a)(a(e.amount))))}var Y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={currentBlock:0},n.setBlock=function(e){n.setState({currentBlock:e})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"genBlocks",value:x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t)){e.next=7;break}return e.next=4,i.a.createElement(F,{num:n,hidden:0!==n,key:"infoblock-item-".concat(n)});case 4:++n,e.next=1;break;case 7:case"end":return e.stop()}}),e)}))},{key:"render",value:function(){var e=Math.ceil(T.members.length/3);return i.a.createElement("div",{id:"team",className:"team"},i.a.createElement(w,{addClass:"team__info",name:"Our Team Members",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),Object(I.a)(this.genBlocks(e)),i.a.createElement(q,{amount:e,setBlock:this.setBlock}))}}]),t}(i.a.Component),X=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",email:"",message:"",isInfoFilled:!1,isPopupShowing:!1},n.sendForm=function(e){var t=document.getElementById("form-name").value,a=document.getElementById("form-email").value,i=document.getElementsByTagName("textarea")[0].value;t&&a&&i?n.setState({name:document.getElementById("form-name").value,email:document.getElementById("form-email").value,message:document.getElementsByTagName("textarea")[0].value,isInfoFilled:!0}):n.setState({isInfoFilled:!1}),n.setState({isPopupShowing:!0})},n.setPopupText=function(){return n.state.name?i.a.createElement("p",null,"name: ",n.state.name," ",i.a.createElement("br",null),"email: ",n.state.email," ",i.a.createElement("br",null),"text: ",n.state.message):i.a.createElement("p",null,"type anything!")},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"closePopup",value:function(){this.setState({isPopupShowing:!1})}},{key:"render",value:function(){return i.a.createElement("div",{className:"contacts-form"},i.a.createElement("div",{className:"contacts-form__userinfo"},i.a.createElement("input",{className:"contacts-form__name",type:"text",placeholder:"Your NAME",id:"form-name"}),i.a.createElement("input",{className:"contacts-form__email",type:"text",placeholder:"Your Email",id:"form-email"})),i.a.createElement("textarea",{className:"contacts-form__message",placeholder:"Write Message"}),i.a.createElement("div",{className:"contacts-form__send-button"},i.a.createElement(g,{addClass:"contacts-form__popup",isRight:this.state.isInfoFilled,text:this.setPopupText(),isShowing:this.state.isPopupShowing,closePopup:this.closePopup.bind(this)}),i.a.createElement("button",{className:"contacts-form__button",onClick:this.sendForm},"SEND")))}}]),t}(i.a.Component);function G(e){var t=e.icon,n=e.text;return i.a.createElement("li",{className:"list-item"},i.a.createElement("div",{className:"list-item__background"},i.a.createElement(f.a,{icon:t})),n)}var J=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contacts"},i.a.createElement(w,{addClass:"contacts__info",name:"Contact Us",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),i.a.createElement("div",{className:"contacts__content"},i.a.createElement("ul",{className:"contacts__items"},i.a.createElement(G,{icon:h.h,text:i.a.createElement("p",null,"Nobinr savar, Dhaka ",i.a.createElement("br",null)," Bangadesh")}),i.a.createElement(G,{icon:h.j,text:i.a.createElement("p",null,"+8801743331996",i.a.createElement("br",null),"+8801928737807")}),i.a.createElement(G,{icon:h.f,text:i.a.createElement("p",null,"quickmasud@gmail.com",i.a.createElement("br",null),"quickmasud@gmail.com")})),i.a.createElement(X,null)))}}]),t}(i.a.Component),K=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("team").scrollIntoView({block:"start"});var e=!0,t=!1,n=void 0;try{for(var a,i=document.getElementsByClassName("header__link")[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){a.value.classList.remove("header__link_colored")}}catch(o){t=!0,n=o}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}document.getElementById("menu-contacts-link").classList.add("header__link_colored"),window.addEventListener("scroll",this.props.arrowVisibility),this.props.arrowVisibility()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.arrowVisibility),document.getElementById("menu-contacts-link").classList.remove("header__link_colored")}},{key:"render",value:function(){return i.a.createElement("div",{className:"contacts-container"},i.a.createElement(Y,null),i.a.createElement(J,null))}}]),t}(i.a.Component),Q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"All rights Reserved ",i.a.createElement(f.a,{icon:D.b})," 2017"))}}]),t}(i.a.Component),$=(n(48),n(16)),z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={screenId:"home"},n.setScreen=function(e){n.setState({screenId:e})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"arrowVisibility",value:function(){var e=document.getElementById("home")||document.getElementById("team"),t=window.pageYOffset+e.getBoundingClientRect().top,n=(window.pageXOffset,e.getBoundingClientRect().left,window.pageXOffset,e.getBoundingClientRect().right,window.pageYOffset+e.getBoundingClientRect().bottom),a=window.pageYOffset,i=(window.pageXOffset,window.pageXOffset,document.documentElement.clientWidth,window.pageYOffset+document.documentElement.clientHeight);document.getElementById("up-arrow").style.display=n>a&&t<i?"none":"flex"}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(b,{setScreen:this.setScreen}),i.a.createElement($.c,null,i.a.createElement($.a,{exact:!0,path:"/",render:function(){return i.a.createElement(V,{screenId:e.state.screenId,arrowVisibility:e.arrowVisibility})}}),i.a.createElement($.a,{path:"/contacts",render:function(){return i.a.createElement(K,{arrowVisibility:e.arrowVisibility})}})),i.a.createElement("div",{className:"up-arrow animated bounceInUp",id:"up-arrow",onClick:function(){return document.getElementById("root").scrollIntoView({behavior:"smooth",block:"start"})}},i.a.createElement(f.a,{icon:h.b})),i.a.createElement(Q,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(d.a,null,i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){}},[[31,1,2]]]);
//# sourceMappingURL=main.91a2344a.chunk.js.map