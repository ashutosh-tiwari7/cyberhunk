(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"U4+L":function(e,t,b){"use strict";b.r(t),b.d(t,"BlogModule",(function(){return j}));var i=b("ofXK"),a=b("tyNb"),r=b("fXoL"),o=b("c/rV"),n=b("yKov"),c=b("r0dB");function l(e,t){if(1&e&&(r.Mb(0,"div",40),r.Mb(1,"div",41),r.Mb(2,"div",42),r.Mb(3,"a",43),r.Kb(4,"img",44),r.Lb(),r.Lb(),r.Mb(5,"div",45),r.Mb(6,"div",46),r.Mb(7,"span",47),r.lc(8),r.Xb(9,"date"),r.Lb(),r.Lb(),r.Mb(10,"h5"),r.Mb(11,"a",48),r.lc(12),r.Xb(13,"slice"),r.Lb(),r.Lb(),r.Mb(14,"p"),r.lc(15),r.Xb(16,"slice"),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&e){const e=t.$implicit;r.zb(3),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(1),r.bc("src","assets/images/blog/",e.image,"",r.ic),r.zb(4),r.oc("",r.Yb(9,9,e.published)," | By ",e.author_name,""),r.zb(3),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(1),r.nc("",r.Zb(13,11,e.heading,0,50),"..."),r.zb(3),r.nc("",r.Zb(16,15,e.description,0,125),"...")}}const s=function(e){return{active:e}};function d(e,t){if(1&e){const e=r.Nb();r.Mb(0,"li",49),r.Mb(1,"a",50),r.Ub("click",(function(){r.gc(e);const b=t.$implicit;return r.Wb().change_page(b)})),r.lc(2),r.Lb(),r.Lb()}if(2&e){const e=t.$implicit,b=r.Wb();r.ac("ngClass",r.dc(2,s,e==b.fpg_no)),r.zb(2),r.mc(e)}}function g(e,t){if(1&e&&(r.Mb(0,"article",51),r.Mb(1,"div",52),r.Mb(2,"div",53),r.Mb(3,"ul",54),r.Mb(4,"li"),r.Mb(5,"a",43),r.lc(6),r.Kb(7,"i",55),r.Lb(),r.Lb(),r.Mb(8,"li"),r.Mb(9,"a",43),r.lc(10),r.Xb(11,"date"),r.Kb(12,"i",56),r.Lb(),r.Lb(),r.Mb(13,"li"),r.Mb(14,"a",43),r.lc(15),r.Xb(16,"number"),r.Kb(17,"i",57),r.Lb(),r.Lb(),r.Mb(18,"li"),r.Mb(19,"a",43),r.lc(20),r.Kb(21,"i",58),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(22,"div",59),r.Mb(23,"div",60),r.Kb(24,"img",61),r.Mb(25,"div",62),r.Mb(26,"a",43),r.Mb(27,"h2"),r.lc(28),r.Lb(),r.Lb(),r.Mb(29,"p"),r.lc(30),r.Lb(),r.Mb(31,"a",63),r.lc(32,"View More"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&e){const e=t.$implicit;r.zb(5),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(1),r.mc(e.author_name),r.zb(3),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(1),r.mc(r.Yb(11,19,e.published)),r.zb(4),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(1),r.nc("",r.Yb(16,21,e.views)," Views"),r.zb(4),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(1),r.nc("",e.com_count," Comments"),r.zb(4),r.bc("src","assets/images/blog/",e.image,"",r.ic),r.zb(2),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(2),r.mc(e.heading),r.zb(2),r.mc(e.description),r.zb(1),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic)}}function m(e,t){if(1&e&&(r.Mb(0,"div",64),r.Kb(1,"img",65),r.Mb(2,"div",66),r.Mb(3,"a",43),r.Mb(4,"h3"),r.lc(5),r.Xb(6,"slice"),r.Lb(),r.Lb(),r.Mb(7,"p"),r.lc(8),r.Xb(9,"date"),r.Lb(),r.Lb(),r.Lb()),2&e){const e=t.$implicit;r.zb(1),r.bc("src","assets/images/blog/",e.image,"",r.ic),r.zb(2),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(2),r.nc("",r.Zb(6,5,e.heading,0,50),"..."),r.zb(3),r.mc(r.Yb(9,9,e.published))}}let h=(()=>{class e{constructor(e,t){this.router=e,this.cs=t,this.fetchErr=!0,this.fpg_no=1,this.fnav_arr=[],this.fetchErr2=!0}ngOnInit(){this.cat=this.router.snapshot.paramMap.get("cat"),null!=this.cat?this.fetch_articles_cat(this.cat):this.fetch_articles(),this.fetch_articles_sidebar()}fetch_articles(){this.cs.get_article_home().subscribe(e=>{this.return_data=e,this.first_nav=this.return_data[1];for(let t=0;t<this.first_nav;t++)this.fnav_arr[t]=t+1;this.fetchErr=!1},e=>{this.fetchErr=!0})}fetch_articles_cat(e){this.cs.get_article_category(e).subscribe(e=>{this.return_data=e,this.first_nav=this.return_data[1];for(let t=0;t<this.first_nav;t++)this.fnav_arr[t]=t+1;this.fetchErr=!1},e=>{location.assign("blog")})}fetch_articles_sidebar(){this.cs.get_article_home_sidebar().subscribe(e=>{this.return_data2=e,this.fetchErr2=!1},e=>{this.fetchErr2=!0})}change_page(e){if(e<1||e>this.first_nav)return!1;null!=this.cat?this.cs.get_article_category(this.cat,e).subscribe(t=>{this.return_data=t,this.fetchErr=!1,this.fpg_no=e},e=>{location.assign("blog")}):this.cs.get_article_home(e).subscribe(t=>{this.return_data=t,this.fetchErr=!1,this.fpg_no=e},e=>{this.fetchErr=!0})}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(a.a),r.Jb(o.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-bloghome"]],decls:91,vars:4,consts:[[1,"banner_area"],[1,"banner_inner","overlay","d-flex","align-items-center"],[1,"container"],[1,"banner_content","text-left"],[1,"page_link"],["href",""],["href","blog"],[1,"blog-area"],[1,"row","blog-inner","justify-content-center"],["class","col-lg-3 col-md-6 col-sm-6 my-4",4,"ngFor","ngForOf"],[1,"blog-pagination","justify-content-center","d-flex"],[1,"pagination"],[1,"page-item"],["href","javascript:","aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],[1,"fas","fa-chevron-left"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["href","javascript:","aria-label","Next",1,"page-link",3,"click"],[1,"fas","fa-chevron-right"],[1,"blog_area","section-gap"],[1,"row"],[1,"col-lg-8"],[1,"blog_left_sidebar"],["class","row blog_item",4,"ngFor","ngForOf"],[1,"col-lg-4"],[1,"blog_right_sidebar"],[1,"single_sidebar_widget","popular_post_widget"],[1,"widget_title"],["class","media post_item",4,"ngFor","ngForOf"],[1,"br"],[1,"single_sidebar_widget","post_category_widget"],[1,"list","cat-list"],["href","blog/nft",1,"d-flex","justify-content-between"],["href","blog/crypto",1,"d-flex","justify-content-between"],["href","blog/games",1,"d-flex","justify-content-between"],["href","blog/social-media",1,"d-flex","justify-content-between"],["href","blog/gadgets",1,"d-flex","justify-content-between"],["href","blog/cyber",1,"d-flex","justify-content-between"],["href","blog/business",1,"d-flex","justify-content-between"],[1,"single-sidebar-widget","tag_cloud_widget"],[1,"col-lg-3","col-md-6","col-sm-6","my-4"],[1,"single-blog"],[1,"blog-thumb"],[3,"href"],["alt","",1,"img-fluid",3,"src"],[1,"blog-details"],[1,"blog-meta"],[2,"text-transform","capitalize","font-size","12px"],[1,"art_href",3,"href"],[1,"page-item",3,"ngClass"],["href","javascript:",1,"page-link",3,"click"],[1,"row","blog_item"],[1,"col-md-3"],[1,"blog_info","text-right"],[1,"blog_meta","list"],[1,"lnr","lnr-user"],[1,"lnr","lnr-calendar-full"],[1,"lnr","lnr-eye"],[1,"lnr","lnr-bubble"],[1,"col-md-9"],[1,"blog_post"],["alt","",3,"src"],[1,"blog_details"],[1,"blog_btn",3,"href"],[1,"media","post_item"],["alt","post",2,"max-height","50px",3,"src"],[1,"media-body"]],template:function(e,t){1&e&&(r.Kb(0,"app-main-nav"),r.Mb(1,"section",0),r.Mb(2,"div",1),r.Mb(3,"div",2),r.Mb(4,"div",3),r.Mb(5,"div",4),r.Mb(6,"a",5),r.lc(7,"Home"),r.Lb(),r.Mb(8,"a",6),r.lc(9,"Blog"),r.Lb(),r.Lb(),r.Mb(10,"h2"),r.lc(11,"TechHacks"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(12,"section",7),r.Mb(13,"div",2),r.Mb(14,"div",8),r.kc(15,l,17,19,"div",9),r.Lb(),r.Mb(16,"nav",10),r.Mb(17,"ul",11),r.Mb(18,"li",12),r.Mb(19,"a",13),r.Ub("click",(function(){return t.change_page(t.fpg_no-1)})),r.Mb(20,"span",14),r.Kb(21,"i",15),r.Lb(),r.Lb(),r.Lb(),r.kc(22,d,3,4,"li",16),r.Mb(23,"li",12),r.Mb(24,"a",17),r.Ub("click",(function(){return t.change_page(t.fpg_no+1)})),r.Mb(25,"span",14),r.Kb(26,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(27,"section",19),r.Mb(28,"div",2),r.Mb(29,"div",20),r.Mb(30,"div",21),r.Mb(31,"div",22),r.kc(32,g,33,23,"article",23),r.Lb(),r.Lb(),r.Mb(33,"div",24),r.Mb(34,"div",25),r.Mb(35,"aside",26),r.Mb(36,"h3",27),r.lc(37,"Recent"),r.Lb(),r.kc(38,m,10,11,"div",28),r.Kb(39,"div",29),r.Lb(),r.Mb(40,"aside",30),r.Mb(41,"h4",27),r.lc(42,"Categories"),r.Lb(),r.Mb(43,"ul",31),r.Mb(44,"li"),r.Mb(45,"a",32),r.Mb(46,"p"),r.lc(47,"NFT"),r.Lb(),r.Mb(48,"p"),r.Kb(49,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Mb(50,"li"),r.Mb(51,"a",33),r.Mb(52,"p"),r.lc(53,"Crypto"),r.Lb(),r.Mb(54,"p"),r.Kb(55,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Mb(56,"li"),r.Mb(57,"a",34),r.Mb(58,"p"),r.lc(59,"Games"),r.Lb(),r.Mb(60,"p"),r.Kb(61,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Mb(62,"li"),r.Mb(63,"a",35),r.Mb(64,"p"),r.lc(65,"Social Media"),r.Lb(),r.Mb(66,"p"),r.Kb(67,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Mb(68,"li"),r.Mb(69,"a",36),r.Mb(70,"p"),r.lc(71,"Gadgets"),r.Lb(),r.Mb(72,"p"),r.Kb(73,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Mb(74,"li"),r.Mb(75,"a",37),r.Mb(76,"p"),r.lc(77,"Cyber Security"),r.Lb(),r.Mb(78,"p"),r.Kb(79,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Mb(80,"li"),r.Mb(81,"a",38),r.Mb(82,"p"),r.lc(83,"Business"),r.Lb(),r.Mb(84,"p"),r.Kb(85,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(86,"div",29),r.Lb(),r.Mb(87,"aside",39),r.Mb(88,"h4",27),r.lc(89,"Tag Clouds"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(90,"app-main-foot")),2&e&&(r.zb(15),r.ac("ngForOf",t.return_data[0]),r.zb(7),r.ac("ngForOf",t.fnav_arr),r.zb(10),r.ac("ngForOf",t.return_data2[0]),r.zb(6),r.ac("ngForOf",t.return_data2[1]))},directives:[n.a,i.k,c.a,i.j],pipes:[i.d,i.o,i.e],styles:[".art_href[_ngcontent-%COMP%]:active, .art_href[_ngcontent-%COMP%]:focus, .art_href[_ngcontent-%COMP%]:hover{color:#006fb9}@media(max-width:768px){.blog_info[_ngcontent-%COMP%]{text-align:left!important}}"]}),e})();var f=b("3Pt+"),p=b("jhN1");function u(e,t){if(1&e&&(r.Mb(0,"h2"),r.lc(1),r.Lb()),2&e){const e=r.Wb();r.zb(1),r.mc(e.return_data.heading)}}function M(e,t){1&e&&(r.Mb(0,"h2"),r.lc(1,"No Article Found."),r.Lb())}function L(e,t){if(1&e&&(r.Mb(0,"a",45),r.lc(1),r.Kb(2,"i",96),r.Lb()),2&e){const e=r.Wb(2);r.zb(1),r.nc("",e.meta[1]," Comments")}}function _(e,t){if(1&e&&(r.Mb(0,"div",99),r.Mb(1,"div",100),r.Mb(2,"div",101),r.Mb(3,"div",61),r.Kb(4,"img",102),r.Lb(),r.Mb(5,"div",103),r.Mb(6,"h5"),r.Mb(7,"a",104),r.lc(8),r.Lb(),r.Lb(),r.Mb(9,"p",105),r.lc(10),r.Xb(11,"date"),r.Lb(),r.Mb(12,"p",106),r.lc(13),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&e){const e=t.$implicit;r.zb(4),r.bc("src","assets/images/user/",e.user[2],"",r.ic),r.zb(4),r.mc(e.user[0]),r.zb(2),r.nc("",r.Yb(11,4,e.created)," "),r.zb(3),r.nc(" ",e.comment," ")}}function v(e,t){if(1&e&&(r.Mb(0,"div",97),r.Mb(1,"h4"),r.lc(2),r.Lb(),r.kc(3,_,14,6,"div",98),r.Lb()),2&e){const e=r.Wb(2);r.zb(2),r.nc("",e.meta[1]," Comments"),r.zb(1),r.ac("ngForOf",e.meta[0])}}function y(e,t){1&e&&(r.Mb(0,"p",107),r.lc(1,"Length of comment must be between 1 and 500 characters."),r.Lb())}function w(e,t){1&e&&(r.Mb(0,"p",108),r.lc(1,"Comment posted successfully."),r.Lb())}function x(e,t){if(1&e&&(r.Mb(0,"div",109),r.Kb(1,"img",110),r.Mb(2,"div",111),r.Mb(3,"a",7),r.Mb(4,"h3"),r.lc(5),r.Xb(6,"slice"),r.Lb(),r.Lb(),r.Mb(7,"p"),r.lc(8),r.Xb(9,"date"),r.Lb(),r.Lb(),r.Lb()),2&e){const e=t.$implicit;r.zb(1),r.bc("src","assets/images/blog/",e.image,"",r.ic),r.zb(2),r.cc("href","blog/article/",e.id,"/",e.slug,"",r.ic),r.zb(2),r.nc("",r.Zb(6,5,e.heading,0,50),"..."),r.zb(3),r.mc(r.Yb(9,9,e.published))}}function z(e,t){if(1&e){const e=r.Nb();r.Mb(0,"section",35),r.Mb(1,"div",2),r.Mb(2,"div",36),r.Mb(3,"div",37),r.Mb(4,"div",38),r.Mb(5,"div",39),r.Mb(6,"div",40),r.Kb(7,"img",41),r.Lb(),r.Lb(),r.Mb(8,"div",42),r.Mb(9,"div",43),r.Mb(10,"ul",44),r.Mb(11,"li"),r.Mb(12,"a",45),r.lc(13),r.Kb(14,"i",46),r.Lb(),r.Lb(),r.Mb(15,"li"),r.Mb(16,"a",45),r.lc(17),r.Xb(18,"date"),r.Kb(19,"i",47),r.Lb(),r.Lb(),r.Mb(20,"li"),r.Mb(21,"a",45),r.lc(22),r.Kb(23,"i",48),r.Lb(),r.Lb(),r.Mb(24,"li"),r.kc(25,L,3,1,"a",49),r.Lb(),r.Lb(),r.Mb(26,"ul",50),r.Mb(27,"li"),r.Mb(28,"a",45),r.Kb(29,"i",51),r.Lb(),r.Lb(),r.Mb(30,"li"),r.Mb(31,"a",45),r.Kb(32,"i",52),r.Lb(),r.Lb(),r.Mb(33,"li"),r.Mb(34,"a",45),r.Kb(35,"i",53),r.Lb(),r.Lb(),r.Mb(36,"li"),r.Mb(37,"a",45),r.Kb(38,"i",54),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(39,"div",55),r.Mb(40,"h2"),r.lc(41),r.Lb(),r.Mb(42,"p",56),r.lc(43),r.Lb(),r.Lb(),r.Mb(44,"div",39),r.Mb(45,"div",57),r.lc(46),r.Lb(),r.Kb(47,"div",58),r.Lb(),r.Lb(),r.Mb(48,"div",59),r.Mb(49,"div",36),r.Mb(50,"div",60),r.Mb(51,"div",61),r.Mb(52,"a",7),r.Kb(53,"img",62),r.Lb(),r.Lb(),r.Mb(54,"div",63),r.Mb(55,"a",7),r.Kb(56,"span",64),r.Lb(),r.Lb(),r.Mb(57,"div",65),r.Mb(58,"p"),r.lc(59,"Prev Post"),r.Lb(),r.Mb(60,"a",7),r.Mb(61,"h4"),r.lc(62),r.Xb(63,"slice"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(64,"div",66),r.Mb(65,"div",65),r.Mb(66,"p"),r.lc(67,"Next Post"),r.Lb(),r.Mb(68,"a",7),r.Mb(69,"h4"),r.lc(70),r.Xb(71,"slice"),r.Lb(),r.Lb(),r.Lb(),r.Mb(72,"div",61),r.Mb(73,"a",7),r.Kb(74,"img",62),r.Lb(),r.Lb(),r.Mb(75,"div",63),r.Mb(76,"a",7),r.Kb(77,"i",67),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.kc(78,v,4,2,"div",68),r.Mb(79,"div",69),r.Mb(80,"h4"),r.lc(81,"Leave a Reply"),r.Lb(),r.Mb(82,"form",70),r.Ub("ngSubmit",(function(){r.gc(e);const t=r.Wb();return t.post_comment(t.id)})),r.Mb(83,"div",71),r.Kb(84,"textarea",72),r.Lb(),r.kc(85,y,2,0,"p",73),r.kc(86,w,2,0,"p",74),r.Mb(87,"button",75),r.lc(88,"Post Comment"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(89,"div",76),r.Mb(90,"div",77),r.Mb(91,"aside",78),r.Kb(92,"img",79),r.Mb(93,"h4"),r.lc(94),r.Lb(),r.Mb(95,"p",80),r.lc(96),r.Lb(),r.Kb(97,"div",81),r.Lb(),r.Mb(98,"aside",82),r.Mb(99,"h3",83),r.lc(100,"Recent"),r.Lb(),r.kc(101,x,10,11,"div",84),r.Kb(102,"div",81),r.Lb(),r.Mb(103,"aside",85),r.Mb(104,"h4",83),r.lc(105,"Categories"),r.Lb(),r.Mb(106,"ul",86),r.Mb(107,"li"),r.Mb(108,"a",87),r.Mb(109,"p"),r.lc(110,"NFT"),r.Lb(),r.Mb(111,"p"),r.Kb(112,"i",88),r.Lb(),r.Lb(),r.Lb(),r.Mb(113,"li"),r.Mb(114,"a",89),r.Mb(115,"p"),r.lc(116,"Crypto"),r.Lb(),r.Mb(117,"p"),r.Kb(118,"i",88),r.Lb(),r.Lb(),r.Lb(),r.Mb(119,"li"),r.Mb(120,"a",90),r.Mb(121,"p"),r.lc(122,"Games"),r.Lb(),r.Mb(123,"p"),r.Kb(124,"i",88),r.Lb(),r.Lb(),r.Lb(),r.Mb(125,"li"),r.Mb(126,"a",91),r.Mb(127,"p"),r.lc(128,"Social Media"),r.Lb(),r.Mb(129,"p"),r.Kb(130,"i",88),r.Lb(),r.Lb(),r.Lb(),r.Mb(131,"li"),r.Mb(132,"a",92),r.Mb(133,"p"),r.lc(134,"Gadgets"),r.Lb(),r.Mb(135,"p"),r.Kb(136,"i",88),r.Lb(),r.Lb(),r.Lb(),r.Mb(137,"li"),r.Mb(138,"a",93),r.Mb(139,"p"),r.lc(140,"Cyber Security"),r.Lb(),r.Mb(141,"p"),r.Kb(142,"i",88),r.Lb(),r.Lb(),r.Lb(),r.Mb(143,"li"),r.Mb(144,"a",94),r.Mb(145,"p"),r.lc(146,"Business"),r.Lb(),r.Mb(147,"p"),r.Kb(148,"i",88),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(149,"div",81),r.Lb(),r.Mb(150,"aside",95),r.Mb(151,"h4",83),r.lc(152,"Tag Clouds"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&e){const e=r.Wb();r.zb(7),r.bc("src","assets/images/blog/",e.return_data.image,"",r.ic),r.zb(6),r.mc(e.return_data.author.name),r.zb(4),r.mc(r.Yb(18,33,e.return_data.published)),r.zb(5),r.nc("",e.return_data.views," Views"),r.zb(3),r.ac("ngIf",e.meta),r.zb(16),r.mc(e.return_data.heading),r.zb(2),r.nc(" ",e.return_data.description," "),r.zb(3),r.nc(" ",e.return_data.quote," "),r.zb(1),r.ac("innerHTML",e.return_data.bodyx,r.hc),r.zb(5),r.cc("href","blog/article/",e.meta[2][0].id,"/",e.meta[2][0].slug,"",r.ic),r.zb(1),r.bc("src","assets/images/blog/",e.meta[2][0].image,"",r.ic),r.zb(2),r.cc("href","blog/article/",e.meta[2][0].id,"/",e.meta[2][0].slug,"",r.ic),r.zb(5),r.cc("href","blog/article/",e.meta[2][0].id,"/",e.meta[2][0].slug,"",r.ic),r.zb(2),r.nc("",r.Zb(63,35,e.meta[2][0].heading,0,30),"..."),r.zb(6),r.cc("href","blog/article/",e.meta[2][1].id,"/",e.meta[2][1].slug,"",r.ic),r.zb(2),r.nc("",r.Zb(71,39,e.meta[2][1].heading,0,30),"..."),r.zb(3),r.cc("href","blog/article/",e.meta[2][1].id,"/",e.meta[2][1].slug,"",r.ic),r.zb(1),r.bc("src","assets/images/blog/",e.meta[2][1].image,"",r.ic),r.zb(2),r.cc("href","blog/article/",e.meta[2][1].id,"/",e.meta[2][1].slug,"",r.ic),r.zb(2),r.ac("ngIf",e.meta),r.zb(4),r.ac("formGroup",e.cf),r.zb(3),r.ac("ngIf",e.invalidCm),r.zb(1),r.ac("ngIf",e.comSc),r.zb(6),r.bc("src","assets/images/user/",e.return_data.author.image,"",r.ic),r.zb(2),r.mc(e.return_data.author.name),r.zb(2),r.mc(e.return_data.author.qualification),r.zb(5),r.ac("ngForOf",e.return_data2[1])}}let K=(()=>{class e{constructor(e,t,b,i){this.router=e,this.cs=t,this.fb=b,this.sanitizer=i,this.fetchErr=!0,this.fetchErr2=!0,this.fetchErr3=!0,this.cf=this.fb.group({message:["",[f.m.required,f.m.minLength(1),f.m.maxLength(500)]]}),this.comSc=!1,this.comFl=!1,this.invalidCm=!1,this.cf2=this.fb.group({name:["",[f.m.pattern("[a-zA-Z ]*"),f.m.required,f.m.minLength(2),f.m.maxLength(100)]],email:["",[f.m.email,f.m.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,5}$"),f.m.required,f.m.minLength(5),f.m.maxLength(50)]],contact:["",[f.m.pattern("[0-9]*"),f.m.required,f.m.minLength(10),f.m.maxLength(10)]],password:["",[,f.m.required,f.m.minLength(6)]]}),this.cf3=this.fb.group({usernames:["",[f.m.required,f.m.maxLength(100)]],password:["",[,f.m.required,f.m.minLength(6)]]})}ngOnInit(){this.id=this.router.snapshot.paramMap.get("id"),this.slug=this.router.snapshot.paramMap.get("slug"),this.fetch_article(this.id,this.slug),this.fetch_article_meta(this.id),this.fetch_articles_sidebar()}fetch_article(e,t){this.cs.get_article(e,t).subscribe(e=>{this.return_data=e,this.return_data.bodyx=this.sanitizer.bypassSecurityTrustHtml(this.return_data.body),this.fetchErr=!1},e=>{this.fetchErr=!0})}fetch_article_meta(e){this.cs.get_article_meta(e).subscribe(e=>{this.meta=e,this.fetchErr2=!1},e=>{this.fetchErr2=!0})}fetch_articles_sidebar(){this.cs.get_article_home_sidebar().subscribe(e=>{this.return_data2=e,this.fetchErr3=!1},e=>{this.fetchErr3=!0})}post_comment(e){null!=localStorage.getItem("auth_token")?this.cf.valid?(this.cf.value.article_id=e,this.cs.post_comment(this.cf.value).subscribe(t=>{this.fetch_article_meta(e),this.comSc=!0,this.comFl=!1,this.cf.reset()},e=>{this.comSc=!1,this.comFl=!0,document.getElementById("signupModalbtn").click()})):this.invalidCm=!0:document.getElementById("signupModalbtn").click()}create_user(){this.cf2.valid&&this.cs.create_user(this.cf2.value).subscribe(e=>{this.token=e,localStorage.setItem("auth_token",this.token.token),document.getElementById("modalDismiss").click(),this.cf2.reset()},e=>{this.cerr=e})}login_user(){this.cf3.valid&&this.cs.login_user(this.cf3.value).subscribe(e=>{this.token=e,localStorage.setItem("auth_token",this.token.token),document.getElementById("modalDismiss2").click(),this.cf3.reset()},e=>{this.cerr=e})}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(a.a),r.Jb(o.a),r.Jb(f.b),r.Jb(p.b))},e.\u0275cmp=r.Db({type:e,selectors:[["app-article"]],decls:68,vars:7,consts:[[1,"banner_area"],[1,"banner_inner","overlay","d-flex","align-items-center"],[1,"container"],[1,"banner_content","text-left"],[1,"page_link"],["href",""],["href","blog"],[3,"href"],[4,"ngIf"],["class","blog_area single-post-area section-gap",4,"ngIf"],["data-toggle","modal","data-target","#signupModal","id","signupModalbtn",2,"display","none"],["id","signupModal","tabindex","-1","role","dialog","aria-labelledby","signupModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header",2,"border-bottom-color","transparent"],[1,"container","text-center"],["type","button","id","modalDismiss","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],["id","signupModalLabel",1,"modal-title"],[1,"modal-body"],[1,"card"],[1,"card-body"],["autocomplete","off",3,"formGroup","ngSubmit"],["type","text","name","name","formControlName","name","placeholder","Your Full Name..",1,"form-control","form-controlx","mb-10"],["type","email","name","email","formControlName","email","placeholder","Your Email Address",1,"form-control","form-controlx","my-2"],["type","tel","name","contact","formControlName","contact","placeholder","Your Mobile Number..",1,"form-control","form-controlx","my-2"],["type","password","name","password","formControlName","password","placeholder","Password",1,"form-control","form-controlx","my-2"],["type","submit",1,"primary-btn","submit_btn","my-4"],[1,"mt-3"],["href","javascript:","data-dismiss","modal","data-toggle","modal","data-target","#signinModal","id","signinModalbtn"],["id","signinModal","tabindex","-1","role","dialog","aria-labelledby","signinModalLabel","aria-hidden","true",1,"modal","fade"],["type","button","id","modalDismiss2","data-dismiss","modal","aria-label","Close",1,"close"],["id","signinModalLabel",1,"modal-title"],["type","text","name","usernames","formControlName","usernames","placeholder","Email or Mobile Number..",1,"form-control","form-controlx","mb-10"],["href","javascript:","data-dismiss","modal","data-toggle","modal","data-target","#signupModal","id","signupModalbtn"],[1,"blog_area","single-post-area","section-gap"],[1,"row"],[1,"col-lg-8","posts-list"],[1,"single-post","row"],[1,"col-lg-12"],[1,"feature-img"],["alt","",1,"img-fluid",2,"width","100%",3,"src"],[1,"col-lg-3","col-md-3"],[1,"blog_info","text-right"],[1,"blog_meta","list"],["href","javascript:"],[1,"lnr","lnr-user"],[1,"lnr","lnr-calendar-full"],[1,"lnr","lnr-eye"],["href","javascript:",4,"ngIf"],[1,"social-links"],[1,"fab","fa-facebook"],[1,"fab","fa-instagram"],[1,"fab","fa-twitter"],[1,"fab","fa-whatsapp"],[1,"col-lg-9","col-md-9","blog_details"],[1,"excert"],[1,"quotes"],[1,"row",3,"innerHTML"],[1,"navigation-area"],[1,"col-lg-6","col-md-6","col-12","nav-left","flex-row","d-flex","justify-content-start","align-items-center"],[1,"thumb"],["alt","",1,"img-fluid",2,"height","50px","width","50px",3,"src"],[1,"arrow"],[1,"fas","fa-arrow-left","text-white"],[1,"detials"],[1,"col-lg-6","col-md-6","col-12","nav-right","flex-row","d-flex","justify-content-end","align-items-center"],[1,"fas","fa-arrow-right","text-white"],["class","comments-area",4,"ngIf"],[1,"comment-form"],[3,"formGroup","ngSubmit"],[1,"form-group"],["rows","5","name","message","formControlName","message","placeholder","Type your comment here..","onfocus","this.placeholder = ''","onblur","this.placeholder = 'Type your comment here..'","required","",1,"form-control","mb-10"],["style","font-size: 12px; font-weight: 700; text-align: left; color: darkred;",4,"ngIf"],["style","font-size: 12px; font-weight: 700; text-align: left; color: darkgreen;",4,"ngIf"],["type","submit",1,"primary-btn","submit_btn"],[1,"col-lg-4"],[1,"blog_right_sidebar"],[1,"single_sidebar_widget","author_widget"],["alt","",1,"author_img","rounded-circle","img","img-fluid",2,"max-height","50px",3,"src"],[2,"font-size","12px"],[1,"br"],[1,"single_sidebar_widget","popular_post_widget"],[1,"widget_title"],["class","media post_item",4,"ngFor","ngForOf"],[1,"single_sidebar_widget","post_category_widget"],[1,"list","cat-list"],["href","blog/nft",1,"d-flex","justify-content-between"],[1,"fas","fa-chevron-right"],["href","blog/crypto",1,"d-flex","justify-content-between"],["href","blog/games",1,"d-flex","justify-content-between"],["href","blog/social-media",1,"d-flex","justify-content-between"],["href","blog/gadgets",1,"d-flex","justify-content-between"],["href","blog/cyber",1,"d-flex","justify-content-between"],["href","blog/business",1,"d-flex","justify-content-between"],[1,"single-sidebar-widget","tag_cloud_widget"],[1,"lnr","lnr-bubble"],[1,"comments-area"],["class","comment-list",4,"ngFor","ngForOf"],[1,"comment-list"],[1,"single-comment","justify-content-between","d-flex"],[1,"user","justify-content-between","d-flex"],["alt","",2,"max-height","40px",3,"src"],[1,"desc"],["href","javascript:",2,"text-transform","capitalize"],[1,"date","mb-0"],[1,"comment"],[2,"font-size","12px","font-weight","700","text-align","left","color","darkred"],[2,"font-size","12px","font-weight","700","text-align","left","color","darkgreen"],[1,"media","post_item"],["alt","post",2,"max-height","50px",3,"src"],[1,"media-body"]],template:function(e,t){1&e&&(r.Kb(0,"app-main-nav"),r.Mb(1,"section",0),r.Mb(2,"div",1),r.Mb(3,"div",2),r.Mb(4,"div",3),r.Mb(5,"div",4),r.Mb(6,"a",5),r.lc(7,"Home"),r.Lb(),r.Mb(8,"a",6),r.lc(9,"Blogs"),r.Lb(),r.Mb(10,"a",7),r.lc(11,"Article"),r.Lb(),r.Lb(),r.kc(12,u,2,1,"h2",8),r.kc(13,M,2,0,"h2",8),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.kc(14,z,153,43,"section",9),r.Mb(15,"button",10),r.lc(16,"x"),r.Lb(),r.Mb(17,"div",11),r.Mb(18,"div",12),r.Mb(19,"div",13),r.Mb(20,"div",14),r.Mb(21,"div",15),r.Mb(22,"button",16),r.Mb(23,"span",17),r.lc(24,"\xd7"),r.Lb(),r.Lb(),r.Mb(25,"h2",18),r.lc(26,"Create your free account!"),r.Lb(),r.Lb(),r.Lb(),r.Mb(27,"div",19),r.Mb(28,"div",15),r.Mb(29,"div",20),r.Mb(30,"div",21),r.Mb(31,"form",22),r.Ub("ngSubmit",(function(){return t.create_user()})),r.Kb(32,"input",23),r.Kb(33,"input",24),r.Kb(34,"input",25),r.Kb(35,"input",26),r.Mb(36,"button",27),r.lc(37,"Create your account"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(38,"p",28),r.lc(39,"Already have an account? "),r.Mb(40,"a",29),r.lc(41,"Sign in"),r.Lb(),r.lc(42," here."),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(43,"div",30),r.Mb(44,"div",12),r.Mb(45,"div",13),r.Mb(46,"div",14),r.Mb(47,"div",15),r.Mb(48,"button",31),r.Mb(49,"span",17),r.lc(50,"\xd7"),r.Lb(),r.Lb(),r.Mb(51,"h2",32),r.lc(52,"Sign In"),r.Lb(),r.Lb(),r.Lb(),r.Mb(53,"div",19),r.Mb(54,"div",15),r.Mb(55,"div",20),r.Mb(56,"div",21),r.Mb(57,"form",22),r.Ub("ngSubmit",(function(){return t.login_user()})),r.Kb(58,"input",33),r.Kb(59,"input",26),r.Mb(60,"button",27),r.lc(61,"Sign In"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(62,"p",28),r.lc(63,"Create New Account! "),r.Mb(64,"a",34),r.lc(65,"Sign up"),r.Lb(),r.lc(66," here."),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(67,"app-main-foot")),2&e&&(r.zb(10),r.cc("href","blog/article/",t.id,"/",t.slug,"",r.ic),r.zb(2),r.ac("ngIf",!t.fetchErr),r.zb(1),r.ac("ngIf",t.fetchErr),r.zb(1),r.ac("ngIf",!t.fetchErr),r.zb(17),r.ac("formGroup",t.cf2),r.zb(26),r.ac("formGroup",t.cf3))},directives:[n.a,i.l,f.o,f.f,f.d,f.a,f.e,f.c,c.a,f.k,i.k],pipes:[i.d,i.o],styles:[".code-toolbar{background-color:#f2f2f2;padding:10px;margin-bottom:20px}pre{background-color:#282828!important;color:#e5e5e5!important;padding:10px}.imgx{width:auto;width:30%!important;height:332px;margin:20px 20px 20px 0}.form-controlx{border-radius:1px!important;border-top-color:transparent!important;border-right-color:transparent!important;border-left-color:transparent!important}@media(max-width:768px){.blog_info{text-align:left!important}}"],encapsulation:2}),e})();const k=[{path:"",component:h},{path:"test",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-test"]],decls:103,vars:0,consts:[[1,"banner_area"],[1,"banner_inner","overlay","d-flex","align-items-center"],[1,"container"],[1,"banner_content","text-left"],[1,"page_link"],["href",""],["href","blog"],[1,"blog_area","single-post-area","section-gap"],[1,"row"],[1,"col-lg-8","posts-list"],[1,"single-post","row"],[1,"col-lg-12"],[1,"col-lg-3","col-md-3"],[1,"blog_info","text-right"],[1,"social-links"],["href","javascript:"],[1,"fab","fa-facebook"],[1,"fab","fa-instagram"],[1,"fab","fa-twitter"],[1,"fab","fa-whatsapp"],[1,"col-lg-9","col-md-9","blog_details"],[1,"excert"],[1,"quotes"],[1,"col-lg-4"],[1,"blog_right_sidebar"],[1,"single_sidebar_widget","post_category_widget"],[1,"widget_title"],[1,"list","cat-list"],["href","blog/nft",1,"d-flex","justify-content-between"],[1,"fas","fa-chevron-right"],["href","blog/crypto",1,"d-flex","justify-content-between"],["href","blog/games",1,"d-flex","justify-content-between"],["href","blog/social-media",1,"d-flex","justify-content-between"],["href","blog/gadgets",1,"d-flex","justify-content-between"],["href","blog/cyber",1,"d-flex","justify-content-between"],["href","blog/business",1,"d-flex","justify-content-between"],[1,"br"]],template:function(e,t){1&e&&(r.Kb(0,"app-main-nav"),r.Mb(1,"section",0),r.Mb(2,"div",1),r.Mb(3,"div",2),r.Mb(4,"div",3),r.Mb(5,"div",4),r.Mb(6,"a",5),r.lc(7,"Home"),r.Lb(),r.Mb(8,"a",6),r.lc(9,"Blogs"),r.Lb(),r.Lb(),r.Mb(10,"h2"),r.lc(11,"No Article Found."),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(12,"section",7),r.Mb(13,"div",2),r.Mb(14,"div",8),r.Mb(15,"div",9),r.Mb(16,"div",10),r.Kb(17,"div",11),r.Mb(18,"div",12),r.Mb(19,"div",13),r.Mb(20,"ul",14),r.Mb(21,"li"),r.Mb(22,"a",15),r.Kb(23,"i",16),r.Lb(),r.Lb(),r.Mb(24,"li"),r.Mb(25,"a",15),r.Kb(26,"i",17),r.Lb(),r.Lb(),r.Mb(27,"li"),r.Mb(28,"a",15),r.Kb(29,"i",18),r.Lb(),r.Lb(),r.Mb(30,"li"),r.Mb(31,"a",15),r.Kb(32,"i",19),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(33,"div",20),r.Mb(34,"p"),r.lc(35,"the-very-best-retro-game-consoles"),r.Lb(),r.Mb(36,"h2"),r.lc(37," The Very Best Retro Game Consoles "),r.Lb(),r.Mb(38,"p",21),r.lc(39," Modern video games and consoles offer a narrative experience that rivals Hollywood blockbusters, but today\u2019s games also require a lengthy amount of time to play through. "),r.Lb(),r.Lb(),r.Mb(40,"div",11),r.Mb(41,"div",22),r.lc(42," Sometimes you just want to dive into the action, and your favorite 8- and 16-bit games of yesteryear are perfect for that. Retro gaming is more popular than ever, and finding the perfect retro gaming gear can be overwhelming, so we\u2019ve done the hard work for you. "),r.Lb(),r.Mb(43,"div",8),r.Mb(44,"div",2),r.Mb(45,"p"),r.lc(46,"Whether you\u2019re a child of the \u201880s who\u2019s been playing classic titles for decades and has a mountain of old cartridges (and a hard drive full of ROMs) or a teenager curious why so many people still love the Super Nintendo and the Sega Genesis, this guide will help you figure out the best way to enjoy the classics from the past."),r.Lb(),r.Mb(47,"p"),r.lc(48,"Buying forecast for early 2022: As we approach year three of the global pandemic, manufacturing and supply chain delays continue to plague consumer electronics. Panic\u2019s Playdate portable, which features a monochromatic display and retro-insipred games that can be played by turning a crank, missed its 2021 ship date as a result of a battery component issue and is now expected to arrive sometime early next year."),r.Lb(),r.Mb(49,"p"),r.lc(50,"With 2021 came the start of a new generation of handheld emulators, many originating from China, with faster processors that provide better performance when playing more complex 3D games from consoles like the N64 and Sega Dreamcast, and a switch from Linux to Android operating systems that brought a host of new emulator options with it. Companies like Anbernic are finally moving on from the long-in-the-tooth RKK3326 chip, too, with more capable and powerful handheld emulators en route like the highly anticipated RG552."),r.Lb(),r.Mb(51,"p"),r.lc(52,"We\u2019re not expecting to see the long-awaited Nintendo Switch Pro arrive in the first months of 2022, but Nintendo continues to expand its solid offering of retro titles through its Nintendo Switch Online service, which recently introduced a new expansion pack adding classic games from the Nintendo 64 as well as the Sega Genesis. They should all look especially lovely on the recently released Nintendo Switch OLED."),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(53,"div",23),r.Mb(54,"div",24),r.Mb(55,"aside",25),r.Mb(56,"h4",26),r.lc(57,"Categories"),r.Lb(),r.Mb(58,"ul",27),r.Mb(59,"li"),r.Mb(60,"a",28),r.Mb(61,"p"),r.lc(62,"NFT"),r.Lb(),r.Mb(63,"p"),r.Kb(64,"i",29),r.Lb(),r.Lb(),r.Lb(),r.Mb(65,"li"),r.Mb(66,"a",30),r.Mb(67,"p"),r.lc(68,"Crypto"),r.Lb(),r.Mb(69,"p"),r.Kb(70,"i",29),r.Lb(),r.Lb(),r.Lb(),r.Mb(71,"li"),r.Mb(72,"a",31),r.Mb(73,"p"),r.lc(74,"Games"),r.Lb(),r.Mb(75,"p"),r.Kb(76,"i",29),r.Lb(),r.Lb(),r.Lb(),r.Mb(77,"li"),r.Mb(78,"a",32),r.Mb(79,"p"),r.lc(80,"Social Media"),r.Lb(),r.Mb(81,"p"),r.Kb(82,"i",29),r.Lb(),r.Lb(),r.Lb(),r.Mb(83,"li"),r.Mb(84,"a",33),r.Mb(85,"p"),r.lc(86,"Gadgets"),r.Lb(),r.Mb(87,"p"),r.Kb(88,"i",29),r.Lb(),r.Lb(),r.Lb(),r.Mb(89,"li"),r.Mb(90,"a",34),r.Mb(91,"p"),r.lc(92,"Cyber Security"),r.Lb(),r.Mb(93,"p"),r.Kb(94,"i",29),r.Lb(),r.Lb(),r.Lb(),r.Mb(95,"li"),r.Mb(96,"a",35),r.Mb(97,"p"),r.lc(98,"Business"),r.Lb(),r.Mb(99,"p"),r.Kb(100,"i",29),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(101,"div",36),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(102,"app-main-foot"))},directives:[n.a,c.a],styles:[".code-toolbar[_ngcontent-%COMP%]{background-color:#f2f2f2;padding:10px;margin-bottom:20px}pre[_ngcontent-%COMP%]{background-color:#282828!important;color:#e5e5e5!important;padding:10px}"]}),e})()},{path:":cat",component:h},{path:"article/:id/:slug",component:K}];let C=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[a.b.forChild(k)],a.b]}),e})(),j=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[i.b,C]]}),e})()}}]);