window.Madison={nestedNav:!0,Pillar:{spacing:!1,maxCols:!1,init:function(){$("#kpgrid_content").length&&$("#kpgrid_content").pillar({items:".kpgriditem",spacing:this.spacing,gutter:this.gutter,columns:{479:this.mobCol,767:this.mobCol,959:this.tabletCol,max:this.maxCols},imageLoaded:function(){$(this).closest(".kpgriditem").addClass("loaded")},variability:this.variability,variabilityAmt:this.variability_amt})}}},$(window).on("k-resize",function(){var n=!window.matchMedia||window.matchMedia("(min-width: 767px)").matches;n?($.sidr("close","sidr-left"),!$("#col-xtra #col-xtra-content").length&&$("#col-xtra-content").appendTo("#col-xtra")):!$("footer.main #col-xtra-content").length&&$("#col-xtra-content").appendTo("footer.main");var i=$("#title_ph");i.length>0&&i.html("&larr;&nbsp;&nbsp;&nbsp;&nbsp;"+i.width()+"px&nbsp;&nbsp;&nbsp;&nbsp;&rarr;");var t=$("#content_all_contents");if(t.length){var e=$(".imgframe, .k-video").first();e.width()&&t.width(e.width())}}),$(window).on("k-infinite-loading",function(){$(".kloading").show()}),$(window).on("k-infinite-loaded",function(){$(".kloading").hide()}),$(document).on("k-image-loading",function(n,i){var t=$(i),e=t.closest(".k-content-embed");t.parents("span.img_wrap").find(".spinner_pos").addClass("active"),e.length&&e.prepend('<div class="spinner_pos active"><div class="spinner"></div></div>').css("position","relative")}).on("k-image-loaded",function(n){$(n.target).closest("figure").find(".spinner_pos").removeClass("active")}).on("k-image-fading",function(n){$(n.target).parents("span.img_wrap").find(".spinner_pos").removeClass("active")}).on("pjax:transition:start pjax:transition:restore",function(){Madison.Pillar.init()}).on("pjax:transition:end pjax:transition:restore",function(){$("header.index.anim_on").length&&$("header.index").slideToggle("slow"),$("#kpgrid_content").length||setTimeout(function(){$K.infinity.resume()},0)}).on("pjax:timeout",function(n){n.preventDefault()}).on("pjax:transition:begin",function(){$K.infinity.pause()}).on("pjax:transition:begin koken:lightbox:loading",function(){$("body").addClass("k-pjax-loading"),$.sidr("close","sidr-left")}).on("pjax:transition:start pjax:transition:end koken:lightbox:loaded",function(){$("body").removeClass("k-pjax-loading"),$.sidr("close","sidr-left")}),$(function(){$("#mob-menu").sidr({name:"sidr-left"}),$.pjaxTransition({linkSelector:"a[data-koken-internal]"+("1"===Madison.nestedNav?":not(.k-nav-set)":""),loadWhileAnimating:!0}),$("#kpgrid_content").length?Madison.Pillar.init():setTimeout(function(){$K.infinity.resume()},0),setTimeout(function(){$("header.index.anim_on").length&&$("header.index").slideToggle("slow")},250)});