var kokenCartPlugin=function(){function t(t){if(t){switch(this.data=t,l=t.currency,s=t.chargeEP,h=t.processor,u=!!t.variants&&o(t.variants),p=t.label||"Purchase",f=t.live,g=i(l.code),h){case"stripe":d=StripeCheckout.configure({key:t.pk,locale:"auto",currency:l.code,shippingAddress:t.shipping,rememberMe:!1});break;case"braintree":if(!(d=document.getElementById("braintree-frame").contentWindow.BTChargeHandler))return;d=document.getElementById("braintree-frame").contentWindow.BTChargeHandler.configure({authorization:t.pk,currency:l,shippingAddress:t.shipping})}t.content&&a(t.content)}}function a(t){t&&$.each(t,function(t,a){if(a.variants&&a.variants.length||a.digital_price){var i=a.cache_path.relative_prefix||a.cache_path.prefix,r=$('img[data-base$="'+i+'"][data-extension="'+a.cache_path.extension+'"]').addClass("k-cart");r.each(function(){var t=$(this),i=t.parent();a.dimensions=a.width+" × "+a.height;var r=$("<div>",{class:"k-cart-button","data-currency":l.symbol,"data-content-id":a.id,"data-name":a.title,"data-image":t.data("base")+"small."+a.cache_path.extension,title:p}),o=v?localStorage.getItem("download-url-"+a.id):null;o&&r.attr("data-download",o).addClass("k-cart-download"),r=a.variants&&a.variants.length?e(a,r):n(a,r),i.is("a[href]")?i.attr("data-orig-href",i.attr("href")).removeAttr("href"):("static"===i.css("position")&&i.css("position","relative"),"inline"===i.css("display")&&i.css("display","block")),t.after(r),$(document).triggerHandler("button-create.koken-cart",this)})}})}function e(t,a){var e=$("<select>"),n=g?1:100;if($.each(t.variants,function(t,i){var r=c(i.price,l),o=parseFloat(i.price)*n;0===t&&a.attr({"data-variant-id":i.id,"data-description":u[i.id],"data-amount":o}),$option=$("<option>",{text:u[i.id]+" - "+r,"data-variant-id":i.id,"data-description":u[i.id],"data-amount":o}),e.append($option)}),t.digital_price){var i=c(t.digital_price,l);$option=$("<option>",{text:k+" - "+i,"data-variant-id":"download","data-description":k,"data-amount":parseFloat(t.digital_price)*n}),e.append($option)}return a.append(e)}function n(t,a){var e=c(t.digital_price,l),n=g?1:100;a.attr({"data-amount":parseFloat(t.digital_price)*n,"data-variant-id":"download"});var i=$("<span>",{text:e});return a.append(i)}function i(t){return["BIF","CLP","DJF","GNF","JPY","KMF","KRW","MGA","PYG","RWF","VND","VUV","XAF","XOF","XPF"].indexOf(t)!==-1}function r(t){var a={width:100,height:100};return t.width()<=a.width||t.height()<=a.height}function o(t){var a=[];return $.each(t,function(t,e){a[parseInt(e.id,10)]=e.description}),a}function c(t,a){return a.symbol+t}var d,s,l,p,u,f,h,g,m=/<script type="text\/javascript" class="k-cart-script">([\s\S]*?)<\/script>/i,v="undefined"!=typeof Storage,k="Download";"ontouchstart"in window&&$(document.documentElement).addClass("k-cart-touch");var w;return $(window).on({"resize.koken-cart":function(){w?clearTimeout(w):$("body").addClass("k-cart-resizing"),w=setTimeout(function(){w=!1,$("body").removeClass("k-cart-resizing"),$("img.k-cart").each(function(t,a){$(document).trigger("k-img-resize",a)})},500)},"k-infinite-loaded":function(t,a){var e=document.createElement("script"),n=m.exec(a);e.type="text/javascript",e.text=n&&n[1]||"",$("body").append(e)}}),$(document).on("k-img-resize.koken-cart, button-create.koken-cart",function(t,a){var e=$(a),n=(e.parent(),e.nextAll(".k-cart-button").last()),i=e.position();if(n.length){if(n.removeClass("focus"),i.left>0){var o=n.position().left+n.outerWidth(!0)+10-i.left-e.width();n.css("right","+="+o+"px")}else n.css("right","");if(i.top>0){var c=i.top-n.position().top+10;n.css("top","+="+c+"px")}else n.css("top","");r(e)?n.hide():n.show().css("opacity",1)}}).on("click","a[data-orig-href]",function(t){var a=$(this);$(t.target).hasClass("k-cart-button")||(a.attr("href",a.data("orig-href")),setTimeout(function(){a.removeAttr("href")},1e3))}).on("click",".k-cart-button select",function(t){t.stopPropagation()}).on("change",".k-cart-button select",function(t){var a=$(this),e=a.parent(),n=a.find("option").eq(t.target.selectedIndex).data();e.data(n).click()}).on("focus",".k-cart-button select",function(t){$(this).parent().addClass("focus")}).on("blur",".k-cart-button select",function(t){$(this).parent().removeClass("focus")}).on("click",".k-cart-button",function(t){var a=$(this),e=a.data();return t.preventDefault(),t.stopPropagation(),e.download&&t.pageX>a.offset().left+a.outerWidth()?void(window.location=e.download):void d.open({amount:e.amount,name:e.name,description:e.description,image:e.image,token:function(t){var n={email:t.email,content_id:e.contentId,variant_id:e.variantId,live:f};switch(h){case"stripe":n.token=t.id;break;case"braintree":n.token=t.nonce,t.address&&(n.address=t.address),t.email&&(n.email=t.email)}$.post(s,n).done(function(t){t&&t.url&&(v&&localStorage.setItem("download-url-"+a.data("contentId"),t.url),a.attr("data-download",t.url).data("download",t.url).addClass("k-cart-download"),window.location=t.url),"reload"in d&&(d.close(),d.reload())}).fail(function(t){if(t.responseJSON&&t.responseJSON.error){var a=t.responseJSON.error;console.log(a.type+": "+a.message)}alert("An error occured while processing your card. Try again in a little bit.")})}})}),{init:t,add:a}}();