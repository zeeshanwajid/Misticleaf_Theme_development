$(function(){$(".sidebar-sticky").StickySidebar({additionalMarginTop:30})}),function(i){i.fn.StickySidebar=function(t){function o(t,o){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,o){t.initialized=!0,i("head").append(i('<style>.StickySidebar:after {content: ""; display: table; clear: both;}</style>')),o.each(function(){var o={};o.sidebar=i(this),o.options=t||{},o.container=i(o.options.containerSelector),0==o.container.length&&(o.container=o.sidebar.parent()),o.sidebar.parents().css("-webkit-transform","none"),o.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),o.stickySidebar=o.sidebar.find(".StickySidebar"),0==o.stickySidebar.length&&(o.sidebar.find("script").remove(),o.stickySidebar=i("<div>").addClass("StickySidebar").append(o.sidebar.children()),o.sidebar.append(o.stickySidebar)),o.marginTop=parseInt(o.sidebar.css("margin-top")),o.marginBottom=parseInt(o.sidebar.css("margin-bottom")),o.paddingTop=parseInt(o.sidebar.css("padding-top")),o.paddingBottom=parseInt(o.sidebar.css("padding-bottom"));var e=o.stickySidebar.offset().top,a=o.stickySidebar.outerHeight();function n(){o.fixedScrollTop=0,o.sidebar.css({"min-height":"1px"}),o.stickySidebar.css({position:"static",width:""})}o.stickySidebar.css("padding-top",1),o.stickySidebar.css("padding-bottom",1),e-=o.stickySidebar.offset().top,a=o.stickySidebar.outerHeight()-a-e,0==e?(o.stickySidebar.css("padding-top",0),o.stickySidebarPaddingTop=0):o.stickySidebarPaddingTop=1,0==a?(o.stickySidebar.css("padding-bottom",0),o.stickySidebarPaddingBottom=0):o.stickySidebarPaddingBottom=1,o.previousScrollTop=null,o.fixedScrollTop=0,n(),o.onScroll=function(o){if(o.stickySidebar.is(":visible"))if(i("body").width()<o.options.minWidth)n();else{if(o.options.disableOnResponsiveLayouts){var e=o.sidebar.outerWidth("none"==o.sidebar.css("float"));if(e+50>o.container.width())return void n()}var a,d,s=i(document).scrollTop(),r="static";if(s>=o.container.offset().top+(o.paddingTop+o.marginTop-o.options.additionalMarginTop)){var c,p=o.paddingTop+o.marginTop+t.additionalMarginTop,b=o.paddingBottom+o.marginBottom+t.additionalMarginBottom,l=o.container.offset().top,g=o.container.offset().top+(a=o.container,d=a.height(),a.children().each(function(){d=Math.max(d,i(this).height())}),d),f=0+t.additionalMarginTop,h=o.stickySidebar.outerHeight()+p+b<i(window).height();c=h?f+o.stickySidebar.outerHeight():i(window).height()-o.marginBottom-o.paddingBottom-t.additionalMarginBottom;var S=l-s+o.paddingTop+o.marginTop,u=g-s-o.paddingBottom-o.marginBottom,m=o.stickySidebar.offset().top-s,y=o.previousScrollTop-s;"fixed"==o.stickySidebar.css("position")&&"modern"==o.options.sidebarBehavior&&(m+=y),"stick-to-top"==o.options.sidebarBehavior&&(m=t.additionalMarginTop),"stick-to-bottom"==o.options.sidebarBehavior&&(m=c-o.stickySidebar.outerHeight()),m=y>0?Math.min(m,f):Math.max(m,c-o.stickySidebar.outerHeight()),m=Math.max(m,S),m=Math.min(m,u-o.stickySidebar.outerHeight());var k=o.container.height()==o.stickySidebar.outerHeight();r=(k||m!=f)&&(k||m!=c-o.stickySidebar.outerHeight())?s+m-o.sidebar.offset().top-o.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==r)o.stickySidebar.css({position:"fixed",width:o.sidebar.width(),top:m,left:o.sidebar.offset().left+parseInt(o.sidebar.css("padding-left"))});else if("absolute"==r){var T={};"absolute"!=o.stickySidebar.css("position")&&(T.position="absolute",T.top=s+m-o.sidebar.offset().top-o.stickySidebarPaddingTop-o.stickySidebarPaddingBottom),T.width=o.sidebar.width(),T.left="",o.stickySidebar.css(T)}else"static"==r&&n();"static"!=r&&1==o.options.updateSidebarHeight&&o.sidebar.css({"min-height":o.stickySidebar.outerHeight()+o.stickySidebar.offset().top-o.sidebar.offset().top+o.paddingBottom}),o.previousScrollTop=s}},o.onScroll(o),i(document).scroll(function(i){return function(){i.onScroll(i)}}(o)),i(window).resize(function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(o))})}(t,o),!0)}(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,e){o(t,e)||(console.log("TST: Body width smaller than options.minWidth. Init is delayed."),i(document).scroll(function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)),i(window).resize(function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)))}(t,this)}}(jQuery);