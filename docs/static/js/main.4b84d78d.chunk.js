(this["webpackJsonptest-site-layout"]=this["webpackJsonptest-site-layout"]||[]).push([[0],{10:function(e,t,n){},31:function(e,t,n){e.exports=n(47)},36:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(28),o=n.n(i),c=(n(36),n(2)),l=n(3),s=n(5),m=n(4),u=n(6),d=(n(10),n(18)),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).scrollToItem=function(e){e.preventDefault();var t=e.currentTarget.id.substring(5);try{document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}catch(a){console.log("go home"),n.props.setScreen(t)}n.props.openOrCloseMenu()},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"menuItem",value:function(e,t,n,a){return r.a.createElement("li",{id:t,onClick:a,className:"header__item"},r.a.createElement(d.b,{id:t+"-link",to:n,className:"header__link"},e))}},{key:"render",value:function(){return r.a.createElement("ul",{className:"header__menu animated fadeInDown",id:"menu"},this.menuItem("Home","menu-home","/",this.scrollToItem),this.menuItem("About","menu-about","/",this.scrollToItem),this.menuItem("Servicing","menu-services","/",this.scrollToItem),this.menuItem("Portfolio","menu-portfolio","/",this.scrollToItem),this.menuItem("Blog","menu-blog","/",this.scrollToItem),this.menuItem("Contacts","menu-contacts","/contacts",this.props.openOrCloseMenu))}}]),t}(r.a.Component),h=n(7),f=n(9),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).openOrCloseMenu=function(){var e=document.getElementById("menu"),t=document.getElementById("cross"),n=document.getElementById("burger");e.classList.contains("header__menu_show")?(e.classList.remove("header__menu_show"),n.classList.remove("header__bar_hidden"),t.classList.add("header__bar_hidden")):(e.classList.add("header__menu_show"),t.classList.remove("header__bar_hidden"),n.classList.add("header__bar_hidden"))},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header",id:"header"},r.a.createElement("div",{className:"header__head"},r.a.createElement("p",null,"Your Logo"),r.a.createElement(h.a,{id:"burger",className:"header__bar animated fadeIn",icon:f.c,onClick:function(){return e.openOrCloseMenu()}}),r.a.createElement(h.a,{id:"cross",className:"header__bar header__bar_hidden animated fadeIn",icon:f.k,onClick:function(){return e.openOrCloseMenu()}})),r.a.createElement(p,{openOrCloseMenu:this.openOrCloseMenu,setScreen:this.props.setScreen}))}}]),t}(r.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems),this.props.colorHeaderItems()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"scrollToAbout",value:function(){document.getElementById("about").scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"home",id:"home"},r.a.createElement("div",{className:"home__content"},r.a.createElement("h1",null,"Web development project"),r.a.createElement("h4",null,"Very suitable to support all web development projects"),r.a.createElement("div",{className:"home__buttons"},r.a.createElement("button",null,"OUR SERVICES"),r.a.createElement("button",null,"HIRE IS NOW")),r.a.createElement(h.a,{className:"home__angle",icon:f.a,onClick:this.scrollToAbout})))}}]),t}(r.a.Component);function g(e){return r.a.createElement("li",{className:"about__item"},r.a.createElement("div",{className:"about__img"},r.a.createElement(h.a,{icon:e.icon})),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.blockText))}n(44);function v(e){var t=e.addClass,n=e.name,a=e.description;return r.a.createElement("div",{className:"title "+(t||"")},r.a.createElement("h2",{className:"title__name"},n),r.a.createElement("p",{className:"title__description"},a))}var _=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"render",value:function(){var e="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor";return r.a.createElement("div",{className:"about",id:"about"},r.a.createElement(v,{addClass:"about__info",name:"About Us",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),r.a.createElement("ul",{className:"about__content"},r.a.createElement(g,{title:"Awesome Icons",blockText:e,icon:f.g}),r.a.createElement(g,{title:"OnePage",blockText:e,icon:f.m}),r.a.createElement(g,{title:"Fully Responsive",blockText:e,icon:f.l})))}}]),t}(r.a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("div",{className:"service__item"},r.a.createElement(h.a,{icon:f.i})),r.a.createElement("h3",null,this.props.title),r.a.createElement("p",null,this.props.text),r.a.createElement("button",null,"READ MORE"))}}]),t}(r.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"render",value:function(){var e="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.";return r.a.createElement("div",{className:"services",id:"services"},r.a.createElement(v,{addClass:"services__info",name:"Our Services",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),r.a.createElement("ul",{className:"services__content"},r.a.createElement(w,{title:"Research",text:e}),r.a.createElement(w,{title:"Portfolio",text:e}),r.a.createElement(w,{title:"Support",text:e}),r.a.createElement(w,{title:"Documentation",text:e}),r.a.createElement(w,{title:"Development",text:e}),r.a.createElement(w,{title:"Design",text:e})))}}]),t}(r.a.Component),y=n(12),O=n(8),j=n.n(O);function I(e){var t="./img/"+e.img;return r.a.createElement("li",{className:"animated fadeIn"},r.a.createElement("img",{src:t,alt:""}),r.a.createElement("div",{className:"portfolio__item-hover"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description)))}var N={items:[{title:"Hand Watch",description:"ui/ux design",img:"Watch.jpg"},{title:"One Day Pass",description:"ui/ux design",img:"Pass.jpg"},{title:"T-shirt",description:"ui/ux design",img:"T-shirt.jpg"},{title:"Bottle",description:"ui/ux design",img:"Bottle.jpg"},{title:"Bottle Of Wine",description:"ui/ux design",img:"Wine.jpg"},{title:"Big Bag",description:"ui/ux design",img:"Bag.jpg"}]},x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={all:!1},n.showOrHide=function(){n.state.all&&document.getElementById("portfolio").scrollIntoView({behavior:"smooth",block:"center"}),n.setState({all:!n.state.all})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"genItems",value:j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.all?N.items.length:3,n=0;case 2:if(!(n<t)){e.next=9;break}return a=N.items[n],e.next=6,r.a.createElement(I,{img:a.img,title:a.title,description:a.description,key:"portfolio-item-".concat(n)});case 6:++n,e.next=2;break;case 9:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){return r.a.createElement("div",{className:"portfolio",id:"portfolio"},r.a.createElement(v,{addClass:"portfolio__info",name:"Latest Works",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),r.a.createElement("div",{className:"portfolio__switcher"},r.a.createElement("button",null,"ALL"),r.a.createElement("button",null,"WEB DESIGN"),r.a.createElement("button",null,"UI/UX DESIGN"),r.a.createElement("button",null,"MOCKUPS")),r.a.createElement("ul",{className:"portfolio__list",id:"portfolio__list"},Object(y.a)(this.genItems())),r.a.createElement("button",{className:"portfolio__show-all",onClick:this.showOrHide},this.state.all?"HIDE":"SHOW ALL"))}}]),t}(r.a.Component);function B(e){var t=j.a.mark(n);function n(){var n,a,i,o,c,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!0,a=!1,i=void 0,t.prev=3,o=e.features[Symbol.iterator]();case 5:if(n=(c=o.next()).done){t.next=12;break}return l=c.value,t.next=9,r.a.createElement("li",{key:"price-item-".concat(l)},l);case 9:n=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),a=!0,i=t.t0;case 18:t.prev=18,t.prev=19,n||null==o.return||o.return();case 21:if(t.prev=21,!a){t.next=24;break}throw i;case 24:return t.finish(21);case 25:return t.finish(18);case 26:case"end":return t.stop()}}),t,null,[[3,14,18,26],[19,,21,25]])}return r.a.createElement("li",null,r.a.createElement("div",{className:"tariff"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("sup",null,"$"),e.price)," per month")),r.a.createElement("ul",{className:"tariff__features"},Object(y.a)(n())),r.a.createElement("button",{className:"tariff__order-button"},"ORDER NOW"))}var C={tariffs:[{name:"Free trial",price:"00",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]},{name:"Basic",price:"50",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]},{name:"Ultimates",price:"99",features:["30 free trial","5 Free Projects","PHP 5 Enabled","24/7 Supports"]}]},L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"genPriceItems",value:j.a.mark((function e(){var t,n,a,i,o,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,n=!1,a=void 0,e.prev=3,i=C.tariffs[Symbol.iterator]();case 5:if(t=(o=i.next()).done){e.next=12;break}return c=o.value,e.next=9,r.a.createElement(B,{name:c.name,price:c.price,features:c.features,key:"price-item-".concat(c.name)});case 9:t=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),n=!0,a=e.t0;case 18:e.prev=18,e.prev=19,t||null==i.return||i.return();case 21:if(e.prev=21,!n){e.next=24;break}throw a;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}}),e,null,[[3,14,18,26],[19,,21,25]])}))},{key:"render",value:function(){return r.a.createElement("div",{className:"price"},r.a.createElement(v,{addClass:"price__info",name:"Pricing Plan",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),r.a.createElement("ul",{className:"price__content"},Object(y.a)(this.genPriceItems())))}}]),t}(r.a.Component),H=n(19);function S(e){return r.a.createElement("li",{className:"blog-item animated fadeIn"},r.a.createElement("img",{src:e.info.imgPath,alt:""}),r.a.createElement("div",{className:"blog-item__content"},r.a.createElement("h3",null,e.info.title),r.a.createElement("div",{className:"blog-item__keys"},r.a.createElement("p",null,r.a.createElement(h.a,{icon:H.a}),"\u2003",e.info.date),r.a.createElement("p",null,r.a.createElement(h.a,{icon:H.c}),"\u2003",e.info.category)),r.a.createElement("p",null,e.info.description)))}var D=[{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Scrabble.jpg"},{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Keyboard.jpg"},{title:"SEO Quis Vestibulum",date:"14.070217",category:"Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",imgPath:"./img/Keyboard-2.jpg"}],M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showingItems:1,all:!1},n.showMoreOrHide=function(){n.setState({showingItems:n.state.all?1:n.state.showingItems+1,all:n.state.showingItems===D.length-1})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.colorHeaderItems)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.colorHeaderItems)}},{key:"genBlogItems",value:j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=D,n=0;case 2:if(!(n<this.state.showingItems)){e.next=8;break}return e.next=5,r.a.createElement(S,{info:t[n],key:"blog-item-".concat(n)});case 5:++n,e.next=2;break;case 8:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"blog"},r.a.createElement(v,{addClass:"blog__info",name:"Blog",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),r.a.createElement("ul",{className:"blog__content"},Object(y.a)(this.genBlogItems())),r.a.createElement("button",{className:"blog__button",onClick:function(){return e.showMoreOrHide()}},this.state.all?"HIDE":"MORE VIEW"))}}]),t}(r.a.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementById(this.props.screenId).scrollIntoView({block:"center",behavior:"smooth"}),window.addEventListener("scroll",this.props.arrowVisibility),this.props.arrowVisibility()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.arrowVisibility)}},{key:"colorHeaderItems",value:function(e){var t=document.getElementById(e),n=document.getElementById("menu-"+e+"-link"),a=window.pageYOffset+t.getBoundingClientRect().top,r=(window.pageXOffset,t.getBoundingClientRect().left,window.pageXOffset,t.getBoundingClientRect().right,window.pageYOffset+t.getBoundingClientRect().bottom),i=window.pageYOffset,o=(window.pageXOffset,window.pageXOffset,document.documentElement.clientWidth,window.pageYOffset+document.documentElement.clientHeight),c=o-i;r<o&&a>i||o-a>.5*c&&r-i>.5*c?n.classList.add("header__link_colored"):n.classList.remove("header__link_colored")}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement(b,{colorHeaderItems:this.colorHeaderItems.bind(null,"home")}),r.a.createElement(_,{colorHeaderItems:this.colorHeaderItems.bind(null,"about")}),r.a.createElement(k,{colorHeaderItems:this.colorHeaderItems.bind(null,"services")}),r.a.createElement(x,{colorHeaderItems:this.colorHeaderItems.bind(null,"portfolio")}),r.a.createElement(L,null),r.a.createElement(M,{colorHeaderItems:this.colorHeaderItems.bind(null,"blog")}))}}]),t}(r.a.PureComponent),U={members:[{name:"John Doe",position:"General Manager",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Alexa Biru",position:"Office Director",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Ronobir Sing",position:"Admin",img:"Sing.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not John Doe",position:"General Manager",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Alexa Biru",position:"Office Director",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Ronobir Sing",position:"Admin",img:"Sing.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Not John Doe",position:"General Manager",img:"Doe.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}},{name:"Not Not Alexa Biru",position:"Office Director",img:"Biru.jpg",links:{facebook:"",twitter:"",messenger:"",sthElse:""}}]},V=n(25);function A(e){var t,n="./img/"+e.img;return r.a.createElement("div",{className:"team__person-about"},r.a.createElement("img",{src:n,alt:"fuck"}),r.a.createElement("div",{className:"team__person-info"},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.position)),(t=e.links,r.a.createElement("div",{className:"team__person-socials"},r.a.createElement("a",{href:t.fb},r.a.createElement(h.a,{icon:V.a})),r.a.createElement("a",{href:t.twi},r.a.createElement(h.a,{icon:V.b})),r.a.createElement("a",{href:t.mess},r.a.createElement(h.a,{icon:f.e})),r.a.createElement("a",{href:t.ball},r.a.createElement(h.a,{icon:f.d})))))}function W(e){var t=j.a.mark(i),n=3*e.num,a=U.members.slice(n,n+3);function i(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<a.length)){t.next=7;break}return t.next=4,r.a.createElement(A,{img:a[e].img,name:a[e].name,position:a[e].position,links:a[e].links,key:"team-member-item-".concat(e)});case 4:++e,t.next=1;break;case 7:case"end":return t.stop()}}),t)}var o="photo-block-"+e.num,c="team__content animated fadeIn "+(e.hidden?"team__content_hidden":"");return r.a.createElement("div",{id:o,className:c},Object(y.a)(i()))}function R(e){var t=j.a.mark(a);function n(t,n){for(var a=0;a<n;++a){var r="photo-block-"+a,i="circle-"+a;a===t?(document.getElementById(r).classList.remove("team__content_hidden"),document.getElementById(i).classList.add("team__switcher_circle_active")):(document.getElementById(r).classList.add("team__content_hidden"),document.getElementById(i).classList.remove("team__switcher_circle_active"))}e.setBlock(t),document.getElementById("photo-block-"+t).scrollIntoView({behavior:"smooth",block:"center"})}function a(e){var a,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=j.a.mark((function t(a){var i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=(30*a+10).toString(),t.next=3,r.a.createElement("circle",{id:"circle-"+a,className:0===a?"team__switcher_circle_active":"",cx:i,cy:"10",r:"10",onClick:function(){return n(a,e)},key:"switcher-".concat(a)});case 3:case"end":return t.stop()}}),t)})),i=0;case 2:if(!(i<e)){t.next=7;break}return t.delegateYield(a(i),"t0",4);case 4:++i,t.next=2;break;case 7:case"end":return t.stop()}}),t)}return r.a.createElement("div",{className:"team__switcher"},r.a.createElement("svg",{width:20*e.amount,height:"15",viewBox:"0 0 "+(20*e.amount+20)+" 20"},Object(y.a)(a(e.amount))))}var T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentBlock:0},n.setBlock=function(e){n.setState({currentBlock:e})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"genBlocks",value:j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t)){e.next=7;break}return e.next=4,r.a.createElement(W,{num:n,hidden:0!==n,key:"infoblock-item-".concat(n)});case 4:++n,e.next=1;break;case 7:case"end":return e.stop()}}),e)}))},{key:"render",value:function(){var e=Math.ceil(U.members.length/3);return r.a.createElement("div",{id:"team",className:"team"},r.a.createElement(v,{addClass:"team__info",name:"Our Team Members",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),Object(y.a)(this.genBlocks(e)),r.a.createElement(R,{amount:e,setBlock:this.setBlock}))}}]),t}(r.a.Component),q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",email:"",message:""},n.sendForm=function(e){var t=document.getElementById("form-name").value,a=document.getElementById("form-email").value,r=document.getElementsByTagName("textarea")[0].value,i=document.getElementById("popup");t&&a&&r?(n.setState({name:document.getElementById("form-name").value,email:document.getElementById("form-email").value,message:document.getElementsByTagName("textarea")[0].value}),i.classList.remove("wrong")):i.classList.add("wrong"),i.classList.add("show")},n.closePopup=function(){document.getElementById("popup").classList.remove("show")},n.popupText=function(){return n.state.name?r.a.createElement("span",null,"name: ",n.state.name," ",r.a.createElement("br",null),"email: ",n.state.email," ",r.a.createElement("br",null),"text: ",n.state.message):r.a.createElement("span",null,"type anything!")},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contacts"},r.a.createElement(v,{addClass:"contacts__info",name:"Contact Us",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}),r.a.createElement("div",{className:"contacts__content"},r.a.createElement("ul",{className:"contacts__items"},r.a.createElement("li",null,r.a.createElement("div",{className:"item__background"},r.a.createElement(h.a,{icon:f.h})),r.a.createElement("p",null,"Nobinagar savar, Dhaka",r.a.createElement("br",null),"Bangadesh")),r.a.createElement("li",null,r.a.createElement("div",{className:"item__background"},r.a.createElement(h.a,{icon:f.j})),r.a.createElement("p",null,"+8801743331996",r.a.createElement("br",null),"+8801928737807")),r.a.createElement("li",null,r.a.createElement("div",{className:"item__background"},r.a.createElement(h.a,{icon:f.f})),r.a.createElement("p",null,"quickmasud@gmail.com",r.a.createElement("br",null),"quickmasud@yahoo.com"))),r.a.createElement("div",{className:"contacts__form"},r.a.createElement("div",{className:"userinfo"},r.a.createElement("input",{type:"text",placeholder:"Your NAME",id:"form-name"}),r.a.createElement("input",{type:"text",placeholder:"Your Email",id:"form-email"})),r.a.createElement("textarea",{placeholder:"Write Message"}),r.a.createElement("div",{className:"contacts__send-button"},r.a.createElement("div",{className:"popup",id:"popup"},r.a.createElement("span",{className:"popup__close",onClick:this.closePopup},r.a.createElement(h.a,{icon:f.k})),this.popupText()),r.a.createElement("button",{onClick:this.sendForm},"SEND")))))}}]),t}(r.a.Component),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("team").scrollIntoView({block:"start"});var e=!0,t=!1,n=void 0;try{for(var a,r=document.getElementsByClassName("header__link")[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){a.value.classList.remove("header__link_colored")}}catch(i){t=!0,n=i}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}document.getElementById("menu-contacts-link").classList.add("header__link_colored"),window.addEventListener("scroll",this.props.arrowVisibility),this.props.arrowVisibility()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.arrowVisibility),document.getElementById("menu-contacts-link").classList.remove("header__link_colored")}},{key:"render",value:function(){return r.a.createElement("div",{className:"contacts-container"},r.a.createElement(T,null),r.a.createElement(q,null))}}]),t}(r.a.Component),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"All rights Reserved ",r.a.createElement(h.a,{icon:H.b})," 2017"))}}]),t}(r.a.Component),F=(n(46),n(16)),G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={screenId:"home"},n.setScreen=function(e){n.setState({screenId:e})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"arrowVisibility",value:function(){var e=document.getElementById("home")||document.getElementById("team"),t=window.pageYOffset+e.getBoundingClientRect().top,n=(window.pageXOffset,e.getBoundingClientRect().left,window.pageXOffset,e.getBoundingClientRect().right,window.pageYOffset+e.getBoundingClientRect().bottom),a=window.pageYOffset,r=(window.pageXOffset,window.pageXOffset,document.documentElement.clientWidth,window.pageYOffset+document.documentElement.clientHeight);document.getElementById("up-arrow").style.display=n>a&&t<r?"none":"flex"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E,{setScreen:this.setScreen}),r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/",render:function(){return r.a.createElement(P,{screenId:e.state.screenId,arrowVisibility:e.arrowVisibility})}}),r.a.createElement(F.a,{path:"/contacts",render:function(){return r.a.createElement(Y,{arrowVisibility:e.arrowVisibility})}})),r.a.createElement("div",{className:"up-arrow animated bounceInUp",id:"up-arrow",onClick:function(){return document.getElementById("root").scrollIntoView({behavior:"smooth",block:"start"})}},r.a.createElement(h.a,{icon:f.b})),r.a.createElement(X,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d.a,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.4b84d78d.chunk.js.map