(this["webpackJsonptest-site-layout"]=this["webpackJsonptest-site-layout"]||[]).push([[0],{32:function(e,t,n){e.exports=n(51)},37:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(29),r=n.n(i),c=(n(37),n(1)),s=n(2),l=n(4),m=n(3),u=n(5),d=(n(8),n(18)),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).scrollToItem=function(e){e.preventDefault();var t=e.currentTarget.id.substring(5);try{document.querySelector("#".concat(t)).scrollIntoView({behavior:"smooth",block:"start"})}catch(a){n.props.setScreen(t)}n.props.openOrCloseMenu()},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"menuItem",value:function(e,t,n,a){return o.a.createElement("li",{id:t,onClick:a,className:"header__item"},o.a.createElement(d.b,{id:t+"-link",to:n,className:"header__link"},e))}},{key:"render",value:function(){return o.a.createElement("ul",{className:"header__menu",id:"menu"},this.menuItem("Home","menu-home","/",this.scrollToItem),this.menuItem("About","menu-about","/",this.scrollToItem),this.menuItem("Servicing","menu-services","/",this.scrollToItem),this.menuItem("Portfolio","menu-portfolio","/",this.scrollToItem),this.menuItem("Blog","menu-blog","/",this.scrollToItem),this.menuItem("Contacts","menu-contacts","/contacts",this.props.openOrCloseMenu))}}]),t}(o.a.Component),h=n(9),f=n(10),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).openOrCloseMenu=function(){if(!(document.documentElement.clientWidth>900)){var e=document.querySelector(".header__bar_hidden");document.querySelector(".header").style.height="cross"===e.id?"290px":"70px",document.querySelector("#menu").classList.toggle("header__menu_show"),document.querySelector("#burger").classList.toggle("header__bar_hidden"),document.querySelector("#cross").classList.toggle("header__bar_hidden")}},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"header",id:"header"},o.a.createElement("div",{className:"header__head"},o.a.createElement("p",null,"Your Logo"),o.a.createElement(h.a,{id:"burger",className:"header__bar animated fadeIn",icon:f.c,onClick:function(){return e.openOrCloseMenu()}}),o.a.createElement(h.a,{id:"cross",className:"header__bar header__bar_hidden animated fadeIn",icon:f.k,onClick:function(){return e.openOrCloseMenu()}})),o.a.createElement(p,{openOrCloseMenu:this.openOrCloseMenu,setScreen:this.props.setScreen}))}}]),t}(o.a.Component);n(45);function g(e){var t=e.addClass,n=e.isRight,a=e.text,i=e.isShowing,r=e.closePopup;return o.a.createElement("div",{className:"popup ".concat(t," ").concat(n?"":"popup_wrong"," ").concat(i?"":"popup_hidden"," animated rollIn")},o.a.createElement("div",{className:"popup__close",onClick:function(){var e=document.getElementsByClassName("popup")[0];e.classList.add("rollOut"),e.addEventListener("animationend",(function t(){e.removeEventListener("animationend",t),e.classList.remove("rollOut"),r()}))}},o.a.createElement(h.a,{icon:f.k})),o.a.createElement("p",{className:"popup__text"},a))}n(46);function v(e){var t=e.title,n=e.addClasses,a=e.clickFunction;return o.a.createElement("button",{className:"button "+n,onClick:a},t)}var E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isPopupShowing:!1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"togglePopup",value:function(){var e=this;if(this.state.isPopupShowing){var t=document.querySelector(".home-buttons__popup");t.classList.add("rollOut");t.addEventListener("animationend",(function n(){t.removeEventListener("animationend",n),t.classList.remove("rollOut"),e.setState({isPopupShowing:!1})}))}else this.setState({isPopupShowing:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"home-buttons"},o.a.createElement("div",{className:"home-buttons__container"},o.a.createElement(v,{title:"OUR SERVICES",addClasses:"button_white",clickFunction:function(){return e.props.scrollToItem("#services")}})),o.a.createElement("div",{className:"home-buttons__container"},o.a.createElement(g,{addClass:"home-buttons__popup",isRight:!0,text:o.a.createElement("span",null,"hire is now))"),isShowing:this.state.isPopupShowing,closePopup:this.togglePopup.bind(this)}),o.a.createElement(v,{title:"HIRE IS NOW",addClasses:"button_seagreen",clickFunction:this.togglePopup.bind(this)})))}}]),t}(o.a.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems),this.props.colorHeaderItems()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"scrollToItem",value:function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"home",id:"home"},o.a.createElement("div",{className:"home__content"},o.a.createElement("h1",{className:"home__title"},"Web development project"),o.a.createElement("h4",{className:"home__description"},"Very suitable to support all web development projects"),o.a.createElement(E,{scrollToItem:this.scrollToItem}),o.a.createElement(h.a,{className:"home__angle",icon:f.a,onClick:function(){return e.scrollToItem("#about")}})))}}]),t}(o.a.Component);function k(e){return o.a.createElement("li",{className:"about-item"},o.a.createElement("div",{className:"about-item__img"},o.a.createElement(h.a,{icon:e.icon})),o.a.createElement("h3",{className:"about-item__title"},e.title),o.a.createElement("p",{className:"about-item__description"},e.blockText))}n(47);function w(e){var t=e.addClass,n=e.name,a=e.description;return o.a.createElement("div",{className:"title "+(t||"")},o.a.createElement("h2",{className:"title__name"},n),o.a.createElement("p",{className:"title__description"},a))}var y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"render",value:function(){var e="Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor";return o.a.createElement("div",{className:"about",id:"about"},o.a.createElement(w,{addClass:"about__info",name:"About Us",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                        Ut enim ad minim veniam,"}),o.a.createElement("ul",{className:"about__content"},o.a.createElement(k,{title:"Awesome Icons",blockText:e,icon:f.g}),o.a.createElement(k,{title:"OnePage",blockText:e,icon:f.m}),o.a.createElement(k,{title:"Fully Responsive",blockText:e,icon:f.l})))}}]),t}(o.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("li",{className:"infoblock"},o.a.createElement("div",{className:"infoblock__icon"},o.a.createElement(h.a,{icon:f.i})),o.a.createElement("h3",{className:"infoblock__title"},this.props.title),o.a.createElement("p",{className:"infoblock__description"},this.props.text),o.a.createElement("button",{className:"infoblock__button"},"READ MORE"))}}]),t}(o.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"render",value:function(){var e="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.";return o.a.createElement("div",{className:"services",id:"services"},o.a.createElement(w,{addClass:"services__info",name:"Our Services",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),o.a.createElement("ul",{className:"services__content"},o.a.createElement(O,{title:"Research",text:e}),o.a.createElement(O,{title:"Portfolio",text:e}),o.a.createElement(O,{title:"Support",text:e}),o.a.createElement(O,{title:"Documentation",text:e}),o.a.createElement(O,{title:"Development",text:e}),o.a.createElement(O,{title:"Design",text:e})))}}]),t}(o.a.Component),N=n(12),S=n(7),I=n.n(S);function x(e){var t="./img/"+e.img;return o.a.createElement("li",{className:"portfolio__item animated fadeIn"},o.a.createElement("img",{src:t,alt:""}),o.a.createElement("div",{className:"portfolio__item_hover"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.description)))}function C(){function e(e){var t="portfolio__button_selected";document.querySelector(".".concat(t)).classList.remove(t),e.target.classList.add(t)}return o.a.createElement("div",{className:"portfolio__switcher"},o.a.createElement(v,{title:"ALL",addClasses:"portfolio__button portfolio__button_selected button_seagreen-black button_small",clickFunction:e}),o.a.createElement(v,{title:"WEB DESIGN",addClasses:"portfolio__button button_seagreen-black button_small",clickFunction:e}),o.a.createElement(v,{title:"UI/UX DESIGN",addClasses:"portfolio__button button_seagreen-black button_small",clickFunction:e}),o.a.createElement(v,{title:"MOCKUPS",addClasses:"portfolio__button button_seagreen-black button_small",clickFunction:e}))}var L={items:[{title:"Hand Watch",description:"ui/ux design",img:"Watch.jpg"},{title:"One Day Pass",description:"ui/ux design",img:"Pass.jpg"},{title:"T-shirt",description:"ui/ux design",img:"T-shirt.jpg"},{title:"Bottle",description:"ui/ux design",img:"Bottle.jpg"},{title:"Bottle Of Wine",description:"ui/ux design",img:"Wine.jpg"},{title:"Big Bag",description:"ui/ux design",img:"Bag.jpg"}]},P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={all:!1},n.showOrHide=function(){n.state.all&&document.querySelector("#portfolio").scrollIntoView({behavior:"smooth",block:"center"}),n.setState({all:!n.state.all})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"genItems",value:I.a.mark((function e(){var t,n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.all?L.items.length:3,n=0;case 2:if(!(n<t)){e.next=9;break}return a=L.items[n],e.next=6,o.a.createElement(x,{img:a.img,title:a.title,description:a.description,key:"portfolio-item-".concat(n)});case 6:++n,e.next=2;break;case 9:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){return o.a.createElement("div",{className:"portfolio",id:"portfolio"},o.a.createElement(w,{addClass:"portfolio__info",name:"Latest Works",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),o.a.createElement(C,null),o.a.createElement("ul",{className:"portfolio__list",id:"portfolio__list"},Object(N.a)(this.genItems())),o.a.createElement(v,{title:this.state.all?"HIDE":"SHOW ALL",addClasses:"button_seagreen button_small portfolio__button portfolio__show-all",clickFunction:this.showOrHide.bind(this)}))}}]),t}(o.a.Component);function B(e){var t=I.a.mark(n);function n(){var n,a,i,r,c,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!0,a=!1,i=void 0,t.prev=3,r=e.features[Symbol.iterator]();case 5:if(n=(c=r.next()).done){t.next=12;break}return s=c.value,t.next=9,o.a.createElement("li",{className:"tariff__feature",key:"price-item-".concat(s)},s);case 9:n=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),a=!0,i=t.t0;case 18:t.prev=18,t.prev=19,n||null==r.return||r.return();case 21:if(t.prev=21,!a){t.next=24;break}throw i;case 24:return t.finish(21);case 25:return t.finish(18);case 26:case"end":return t.stop()}}),t,null,[[3,14,18,26],[19,,21,25]])}return o.a.createElement("li",{className:"price__item tariff"},o.a.createElement("div",{className:"tariff__header"},o.a.createElement("h2",{className:"tariff__title"},e.name),o.a.createElement("p",{className:"tariff__price"},o.a.createElement("span",null,o.a.createElement("sup",null,"$"),e.price)," per month")),o.a.createElement("ul",{className:"tariff__features-list"},Object(N.a)(n())),o.a.createElement(v,{addClasses:"button_black tariff__order-button",title:"ORDER NOW"}))}var q={tariffs:[{name:"Free trial",price:"00",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]},{name:"Basic",price:"50",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]},{name:"Ultimates",price:"99",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]}]},H=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"genPriceItems",value:I.a.mark((function e(){var t,n,a,i,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,n=!1,a=void 0,e.prev=3,i=q.tariffs[Symbol.iterator]();case 5:if(t=(r=i.next()).done){e.next=12;break}return c=r.value,e.next=9,o.a.createElement(B,{name:c.name,price:c.price,features:c.features,key:"price-item-".concat(c.name)});case 9:t=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),n=!0,a=e.t0;case 18:e.prev=18,e.prev=19,t||null==i.return||i.return();case 21:if(e.prev=21,!n){e.next=24;break}throw a;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}}),e,null,[[3,14,18,26],[19,,21,25]])}))},{key:"render",value:function(){return o.a.createElement("div",{className:"price"},o.a.createElement(w,{addClass:"price__info",name:"Pricing Plan",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                        Ut enim ad minim veniam,"}),o.a.createElement("ul",{className:"price__content"},Object(N.a)(this.genPriceItems())))}}]),t}(o.a.Component),D=n(19);function M(e){return o.a.createElement("li",{className:"blog-item animated fadeIn"},o.a.createElement("img",{src:e.info.imgPath,alt:""}),o.a.createElement("div",{className:"blog-item__content"},o.a.createElement("h3",{className:"blog-item__title"},e.info.title),o.a.createElement("div",{className:"blog-item__keylist"},o.a.createElement("span",{className:"blog-item__key"},o.a.createElement(h.a,{icon:D.a}),"\u2003",e.info.date),o.a.createElement("span",{className:"blog-item__key"},o.a.createElement(h.a,{icon:D.c}),"\u2003",e.info.category)),o.a.createElement("p",{className:"blog-item__description"},e.info.description)))}var A=[{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Scrabble.jpg"},{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Keyboard.jpg"},{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Keyboard-2.jpg"}],R=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={showingItems:1,all:!1},n.showMoreOrHide=function(){n.setState({showingItems:n.state.all?1:n.state.showingItems+1,all:n.state.showingItems===A.length-1})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"genBlogItems",value:I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=A,n=0;case 2:if(!(n<this.state.showingItems)){e.next=8;break}return e.next=5,o.a.createElement(M,{info:t[n],key:"blog-item-".concat(n)});case 5:++n,e.next=2;break;case 8:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){return o.a.createElement("div",{id:"blog"},o.a.createElement(w,{addClass:"blog__info",name:"Blog",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                        Ut enim ad minim veniam,"}),o.a.createElement("ul",{className:"blog__content"},Object(N.a)(this.genBlogItems())),o.a.createElement(v,{title:this.state.all?"HIDE":"MORE VIEW",addClasses:"blog__button button_small button_seagreen",clickFunction:this.showMoreOrHide.bind(this)}))}}]),t}(o.a.Component),U=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("#".concat(this.props.screenId)).scrollIntoView({block:"center",behavior:"smooth"}),window.addEventListener("scroll",this.props.arrowVisibility),this.props.arrowVisibility()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.arrowVisibility)}},{key:"colorHeaderItems",value:function(e){var t=document.querySelector("#".concat(e)),n=document.querySelector("#menu-".concat(e,"-link")),a=window.pageYOffset+t.getBoundingClientRect().top,o=(window.pageXOffset,t.getBoundingClientRect().left,window.pageXOffset,t.getBoundingClientRect().right,window.pageYOffset+t.getBoundingClientRect().bottom),i=window.pageYOffset,r=(window.pageXOffset,window.pageXOffset,document.documentElement.clientWidth,window.pageYOffset+document.documentElement.clientHeight),c=r-i;o<r&&a>i||r-a>.5*c&&o-i>.5*c?n.classList.add("header__link_colored"):n.classList.remove("header__link_colored")}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-container"},o.a.createElement(_,{colorHeaderItems:this.colorHeaderItems.bind(null,"home")}),o.a.createElement(y,{colorHeaderItems:this.colorHeaderItems.bind(null,"about")}),o.a.createElement(j,{colorHeaderItems:this.colorHeaderItems.bind(null,"services")}),o.a.createElement(P,{colorHeaderItems:this.colorHeaderItems.bind(null,"portfolio")}),o.a.createElement(H,null),o.a.createElement(R,{colorHeaderItems:this.colorHeaderItems.bind(null,"blog")}))}}]),t}(o.a.PureComponent),W=[{name:"John Doe",position:"General Manager",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Alexa Biru",position:"Office Director",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Ronobir Sing",position:"Admin",img:"Sing.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not John Doe",position:"General Manager",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Alexa Biru",position:"Office Director",img:"Sing.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Ronobir Sing",position:"Admin",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Not John Doe",position:"General Manager",img:"Sing.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Not Alexa Biru",position:"Office Director",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Not Ronobir Sing",position:"Admin",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}}];function T(e){var t=I.a.mark(r),n=e.amount,a=e.currentBlock,i=e.setBlock;function r(e){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(22.5*t+7.5).toString(),e.next=3,o.a.createElement("circle",{id:"circle-"+t,className:"block-switcher__item "+(t===a?"block-switcher__item_active":""),cx:n,cy:"7.5",r:"7.5",onClick:function(){return e=t,document.querySelector(".team__carousel").style.marginLeft="-".concat(80*e,"vw"),void i(e);var e},key:"switcher-item-".concat(t)});case 3:case"end":return e.stop()}}),e)})),r=0;case 2:if(!(r<e)){t.next=7;break}return t.delegateYield(n(r),"t0",4);case 4:++r,t.next=2;break;case 7:case"end":return t.stop()}}),t)}return o.a.createElement("div",{className:"block-switcher"},o.a.createElement("svg",{width:22.5*n-7.5,height:"15",viewBox:"0 0 "+(22.5*n-7.5)+" 15"},Object(N.a)(r(n))))}var V=n(20),F=n(26);n(49);function X(e){var t=e.link,n=e.icon;return o.a.createElement("a",{href:t,className:"social-link"},o.a.createElement(h.a,{icon:n}))}function Y(e){var t=I.a.mark(n);function n(e){var n,a,i,r,c,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Object.keys(e),n={},Object(V.a)(n,a[0],F.a),Object(V.a)(n,a[1],F.b),Object(V.a)(n,a[2],f.e),Object(V.a)(n,a[3],f.d),i=n,r=0,c=a;case 3:if(!(r<c.length)){t.next=10;break}return s=c[r],t.next=7,o.a.createElement(X,{link:e[s],icon:i[s],key:"social-icon-".concat(s)});case 7:r++,t.next=3;break;case 10:case"end":return t.stop()}}),t)}var a="./img/"+e.img;return o.a.createElement("li",{className:"team__person-card person-card"},o.a.createElement("img",{src:a,alt:""}),o.a.createElement("div",{className:"person-card__info"},o.a.createElement("h3",{className:"person-card__name"},e.name),o.a.createElement("p",{className:"person-card__position"},e.position)),o.a.createElement("div",{className:"person-card__socials"},Object(N.a)(n(e.links))))}var G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={currentBlock:0,blocksAmount:document.documentElement.clientWidth<=500?W.length:Math.ceil(W.length/3)},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"setBlock",value:function(e){this.setState({currentBlock:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.blocksAmount,n=document.querySelector(".team__carousel");n.addEventListener("touchstart",(function(a){n.style.transition="none";for(var o=a.changedTouches[0].clientX,i=Math.abs(parseFloat(getComputedStyle(n).marginLeft)),r=parseFloat(getComputedStyle(n).width),c=e.state.currentBlock,s=[],l=0;l<t;++l)s[l]=l*r/t;var m=s[t-1];n.addEventListener("touchmove",(function(e){var t=e.changedTouches[0].clientX;n.style.marginLeft="".concat(-i+t-o,"px")})),n.addEventListener("touchend",(function a(i){var r=i.changedTouches[0].clientX;n.style.transition="margin-left .3s ease-out",o-r>40?(n.style.marginLeft="-".concat(s[c+1]||m,"px"),c=Math.min(c+1,t-1)):r-o>40&&(n.style.marginLeft="-".concat(s[c-1]||0,"px"),c=Math.max(c-1,0)),e.setBlock(c),n.removeEventListener("touchend",a)}))}))}},{key:"genCards",value:I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=I.a.keys(t);case 1:if((e.t1=e.t0()).done){e.next=7;break}return n=e.t1.value,e.next=5,o.a.createElement(Y,{img:t[n].img,name:t[n].name,position:t[n].position,links:t[n].links,key:"team-member-item-".concat(n)});case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)}))},{key:"render",value:function(){return o.a.createElement("div",{id:"team",className:"team"},o.a.createElement(w,{addClass:"team__info",name:"Our Team Members",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                        Ut enim ad minim veniam,"}),o.a.createElement("div",{className:"team__carousel-container"},o.a.createElement("ul",{className:"team__carousel"},Object(N.a)(this.genCards(W)))),o.a.createElement(T,{amount:this.state.blocksAmount,currentBlock:this.state.currentBlock,setBlock:this.setBlock.bind(this)}))}}]),t}(o.a.Component),J=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",email:"",message:"",isInfoFilled:!1,isPopupShowing:!1},n.sendForm=function(e){var t=document.querySelector(".contacts-form__name").value,a=document.querySelector(".contacts-form__email").value,o=document.querySelector(".contacts-form__message").value;t&&a&&o?n.setState({name:t,email:a,message:o,isInfoFilled:!0}):n.setState({isInfoFilled:!1}),n.setState({isPopupShowing:!0})},n.setPopupText=function(){return n.state.name?o.a.createElement("span",null,"name: ",n.state.name," ",o.a.createElement("br",null),"email: ",n.state.email," ",o.a.createElement("br",null),"text: ",n.state.message):o.a.createElement("span",null,"type anything!")},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"closePopup",value:function(){this.setState({isPopupShowing:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"contacts-form"},o.a.createElement("div",{className:"contacts-form__userinfo"},o.a.createElement("input",{className:"contacts-form__name",type:"text",placeholder:"Your NAME"}),o.a.createElement("input",{className:"contacts-form__email",type:"text",placeholder:"Your Email"})),o.a.createElement("textarea",{className:"contacts-form__message",placeholder:"Write Message"}),o.a.createElement("div",{className:"contacts-form__send-button"},o.a.createElement(g,{addClass:"contacts-form__popup",isRight:this.state.isInfoFilled,text:this.setPopupText(),isShowing:this.state.isPopupShowing,closePopup:this.closePopup.bind(this)}),o.a.createElement("button",{className:"contacts-form__button",onClick:this.sendForm},"SEND")))}}]),t}(o.a.Component);function K(e){var t=e.icon,n=e.text;return o.a.createElement("li",{className:"list-item"},o.a.createElement("div",{className:"list-item__background"},o.a.createElement(h.a,{icon:t})),n)}var Q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"contacts"},o.a.createElement(w,{addClass:"contacts__info",name:"Contact Us",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),o.a.createElement("div",{className:"contacts__content"},o.a.createElement("ul",{className:"contacts__items"},o.a.createElement(K,{icon:f.h,text:o.a.createElement("p",null,"Nobinr savar, Dhaka ",o.a.createElement("br",null)," Bangadesh")}),o.a.createElement(K,{icon:f.j,text:o.a.createElement("p",null,"+8801743331996",o.a.createElement("br",null),"+8801928737807")}),o.a.createElement(K,{icon:f.f,text:o.a.createElement("p",null,"quickmasud@gmail.com",o.a.createElement("br",null),"quickmasud@gmail.com")})),o.a.createElement(J,null)))}}]),t}(o.a.Component),$=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("#team").scrollIntoView({block:"start"});var e=!0,t=!1,n=void 0;try{for(var a,o=document.querySelectorAll(".header__link")[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){a.value.classList.remove("header__link_colored")}}catch(i){t=!0,n=i}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}document.querySelector("#menu-contacts-link").classList.add("header__link_colored"),window.addEventListener("scroll",this.props.arrowVisibility),this.props.arrowVisibility()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.arrowVisibility),document.querySelector("#menu-contacts-link").classList.remove("header__link_colored")}},{key:"render",value:function(){return o.a.createElement("div",{className:"contacts-container"},o.a.createElement(G,null),o.a.createElement(Q,null))}}]),t}(o.a.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"All rights Reserved ",o.a.createElement(h.a,{icon:D.b})," 2017"))}}]),t}(o.a.Component),Z=(n(50),n(16)),ee=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={screenId:"home"},n.setScreen=function(e){n.setState({screenId:e})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"arrowVisibility",value:function(){var e=document.querySelector("#home")||document.querySelector("#team"),t=window.pageYOffset+e.getBoundingClientRect().top,n=(window.pageXOffset,e.getBoundingClientRect().left,window.pageXOffset,e.getBoundingClientRect().right,window.pageYOffset+e.getBoundingClientRect().bottom),a=window.pageYOffset,o=(window.pageXOffset,window.pageXOffset,document.documentElement.clientWidth,window.pageYOffset+document.documentElement.clientHeight);document.querySelector("#up-arrow").style.display=n>a&&t<o?"none":"flex"}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(b,{setScreen:this.setScreen}),o.a.createElement(Z.c,null,o.a.createElement(Z.a,{exact:!0,path:"/",render:function(){return o.a.createElement(U,{screenId:e.state.screenId,arrowVisibility:e.arrowVisibility})}}),o.a.createElement(Z.a,{path:"/contacts",render:function(){return o.a.createElement($,{arrowVisibility:e.arrowVisibility})}})),o.a.createElement("div",{className:"up-arrow animated bounceInUp",id:"up-arrow",onClick:function(){return document.querySelector("#root").scrollIntoView({behavior:"smooth",block:"start"})}},o.a.createElement(h.a,{icon:f.b})),o.a.createElement(z,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d.a,null,o.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.0c1bb8f4.chunk.js.map