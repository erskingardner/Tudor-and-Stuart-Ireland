/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

 /*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 * -----------------
 * JQUERY Mousewheel
 * -----------------
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 *
 * Requires: 1.2.2+
 */

 (function(d){function g(a){var b=a||window.event,i=[].slice.call(arguments,1),c=0,h=0,e=0;a=d.event.fix(b);a.type="mousewheel";if(a.wheelDelta)c=a.wheelDelta/120;if(a.detail)c=-a.detail/3;e=c;if(b.axis!==undefined&&b.axis===b.HORIZONTAL_AXIS){e=0;h=-1*c}if(b.wheelDeltaY!==undefined)e=b.wheelDeltaY/120;if(b.wheelDeltaX!==undefined)h=-1*b.wheelDeltaX/120;i.unshift(a,c,h,e);return d.event.handle.apply(this,i)}var f=["DOMMouseScroll","mousewheel"];d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=
 f.length;a;)this.addEventListener(f[--a],g,false);else this.onmousewheel=g},teardown:function(){if(this.removeEventListener)for(var a=f.length;a;)this.removeEventListener(f[--a],g,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
 
 /*
  * FancyBox - jQuery Plugin
  * Simple and fancy lightbox alternative
  *
  * Examples and documentation at: http://fancybox.net
  * 
  * Copyright (c) 2008 - 2010 Janis Skarnelis
  * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
  * 
  * Version: 1.3.4 (11/11/2010)
  * Requires: jQuery v1.3+
  *
  * Dual licensed under the MIT and GPL licenses:
  *   http://www.opensource.org/licenses/mit-license.php
  *   http://www.gnu.org/licenses/gpl.html
  */

 ;(function(b){var m,t,u,f,D,j,E,n,z,A,q=0,e={},o=[],p=0,d={},l=[],G=null,v=new Image,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,W=/[^\.]\.(swf)\s*$/i,K,L=1,y=0,s="",r,i,h=false,B=b.extend(b("<div/>")[0],{prop:0}),M=b.browser.msie&&b.browser.version<7&&!window.XMLHttpRequest,N=function(){t.hide();v.onerror=v.onload=null;G&&G.abort();m.empty()},O=function(){if(false===e.onError(o,q,e)){t.hide();h=false}else{e.titleShow=false;e.width="auto";e.height="auto";m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
 F()}},I=function(){var a=o[q],c,g,k,C,P,w;N();e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));w=e.onStart(o,q,e);if(w===false)h=false;else{if(typeof w=="object")e=b.extend(e,w);k=e.title||(a.nodeName?b(a).attr("title"):a.title)||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(k===""&&e.orig&&e.titleFromAlt)k=e.orig.attr("alt");c=e.href||(a.nodeName?b(a).attr("href"):a.href)||null;if(/^(?:javascript)/i.test(c)||
 c=="#")c=null;if(e.type){g=e.type;if(!c)c=e.content}else if(e.content)g="html";else if(c)g=c.match(J)?"image":c.match(W)?"swf":b(a).hasClass("iframe")?"iframe":c.indexOf("#")===0?"inline":"ajax";if(g){if(g=="inline"){a=c.substr(c.indexOf("#"));g=b(a).length>0?"inline":"ajax"}e.type=g;e.href=c;e.title=k;if(e.autoDimensions)if(e.type=="html"||e.type=="inline"||e.type=="ajax"){e.width="auto";e.height="auto"}else e.autoDimensions=false;if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=
 false;e.enableEscapeButton=false;e.showCloseButton=false}e.padding=parseInt(e.padding,10);e.margin=parseInt(e.margin,10);m.css("padding",e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(j.children())});switch(g){case "html":m.html(e.content);F();break;case "inline":if(b(a).parent().is("#fancybox-content")===true){h=false;break}b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(j.children())}).bind("fancybox-cancel",
 function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();v=new Image;v.onerror=function(){O()};v.onload=function(){h=true;v.onerror=v.onload=null;e.width=v.width;e.height=v.height;b("<img />").attr({id:"fancybox-img",src:v.src,alt:e.title}).appendTo(m);Q()};v.src=c;break;case "swf":e.scrolling="no";C='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+c+
 '"></param>';P="";b.each(e.swf,function(x,H){C+='<param name="'+x+'" value="'+H+'"></param>';P+=" "+x+'="'+H+'"'});C+='<embed src="'+c+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+P+"></embed></object>";m.html(C);F();break;case "ajax":h=false;b.fancybox.showActivity();e.ajax.win=e.ajax.success;G=b.ajax(b.extend({},e.ajax,{url:c,data:e.ajax.data||{},error:function(x){x.status>0&&O()},success:function(x,H,R){if((typeof R=="object"?R:G).status==200){if(typeof e.ajax.win==
 "function"){w=e.ajax.win(c,x,H,R);if(w===false){t.hide();return}else if(typeof w=="string"||typeof w=="object")x=w}m.html(x);F()}}}));break;case "iframe":Q()}}else O()}},F=function(){var a=e.width,c=e.height;a=a.toString().indexOf("%")>-1?parseInt((b(window).width()-e.margin*2)*parseFloat(a)/100,10)+"px":a=="auto"?"auto":a+"px";c=c.toString().indexOf("%")>-1?parseInt((b(window).height()-e.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";m.wrapInner('<div style="width:'+a+";height:"+c+
 ";overflow: "+(e.scrolling=="auto"?"auto":e.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');e.width=m.width();e.height=m.height();Q()},Q=function(){var a,c;t.hide();if(f.is(":visible")&&false===d.onCleanup(l,p,d)){b.event.trigger("fancybox-cancel");h=false}else{h=true;b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");f.is(":visible")&&d.titlePosition!=="outside"&&f.css("height",f.height());l=o;p=q;d=e;if(d.overlayShow){u.css({"background-color":d.overlayColor,
 opacity:d.overlayOpacity,cursor:d.hideOnOverlayClick?"pointer":"auto",height:b(document).height()});if(!u.is(":visible")){M&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});u.show()}}else u.hide();i=X();s=d.title||"";y=0;n.empty().removeAttr("style").removeClass();if(d.titleShow!==false){if(b.isFunction(d.titleFormat))a=d.titleFormat(s,l,p,d);else a=s&&s.length?
 d.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+s+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+d.titlePosition+'">'+s+"</div>":false;s=a;if(!(!s||s==="")){n.addClass("fancybox-title-"+d.titlePosition).html(s).appendTo("body").show();switch(d.titlePosition){case "inside":n.css({width:i.width-d.padding*2,marginLeft:d.padding,marginRight:d.padding});
 y=n.outerHeight(true);n.appendTo(D);i.height+=y;break;case "over":n.css({marginLeft:d.padding,width:i.width-d.padding*2,bottom:d.padding}).appendTo(D);break;case "float":n.css("left",parseInt((n.width()-i.width-40)/2,10)*-1).appendTo(f);break;default:n.css({width:i.width-d.padding*2,paddingLeft:d.padding,paddingRight:d.padding}).appendTo(f)}}}n.hide();if(f.is(":visible")){b(E.add(z).add(A)).hide();a=f.position();r={top:a.top,left:a.left,width:f.width(),height:f.height()};c=r.width==i.width&&r.height==
 i.height;j.fadeTo(d.changeFade,0.3,function(){var g=function(){j.html(m.contents()).fadeTo(d.changeFade,1,S)};b.event.trigger("fancybox-change");j.empty().removeAttr("filter").css({"border-width":d.padding,width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2});if(c)g();else{B.prop=0;b(B).animate({prop:1},{duration:d.changeSpeed,easing:d.easingChange,step:T,complete:g})}})}else{f.removeAttr("style");j.css("border-width",d.padding);if(d.transitionIn=="elastic"){r=V();j.html(m.contents());
 f.show();if(d.opacity)i.opacity=0;B.prop=0;b(B).animate({prop:1},{duration:d.speedIn,easing:d.easingIn,step:T,complete:S})}else{d.titlePosition=="inside"&&y>0&&n.show();j.css({width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2}).html(m.contents());f.css(i).fadeIn(d.transitionIn=="none"?0:d.speedIn,S)}}}},Y=function(){if(d.enableEscapeButton||d.enableKeyboardNav)b(document).bind("keydown.fb",function(a){if(a.keyCode==27&&d.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if((a.keyCode==
 37||a.keyCode==39)&&d.enableKeyboardNav&&a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.target.tagName!=="SELECT"){a.preventDefault();b.fancybox[a.keyCode==37?"prev":"next"]()}});if(d.showNavArrows){if(d.cyclic&&l.length>1||p!==0)z.show();if(d.cyclic&&l.length>1||p!=l.length-1)A.show()}else{z.hide();A.hide()}},S=function(){if(!b.support.opacity){j.get(0).style.removeAttribute("filter");f.get(0).style.removeAttribute("filter")}e.autoDimensions&&j.css("height","auto");f.css("height","auto");
 s&&s.length&&n.show();d.showCloseButton&&E.show();Y();d.hideOnContentClick&&j.bind("click",b.fancybox.close);d.hideOnOverlayClick&&u.bind("click",b.fancybox.close);b(window).bind("resize.fb",b.fancybox.resize);d.centerOnScroll&&b(window).bind("scroll.fb",b.fancybox.center);if(d.type=="iframe")b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(b.browser.msie?'allowtransparency="true""':"")+' scrolling="'+e.scrolling+'" src="'+d.href+'"></iframe>').appendTo(j);
 f.show();h=false;b.fancybox.center();d.onComplete(l,p,d);var a,c;if(l.length-1>p){a=l[p+1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}if(p>0){a=l[p-1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}},T=function(a){var c={width:parseInt(r.width+(i.width-r.width)*a,10),height:parseInt(r.height+(i.height-r.height)*a,10),top:parseInt(r.top+(i.top-r.top)*a,10),left:parseInt(r.left+(i.left-r.left)*a,10)};if(typeof i.opacity!=="undefined")c.opacity=a<0.5?0.5:a;f.css(c);
 j.css({width:c.width-d.padding*2,height:c.height-y*a-d.padding*2})},U=function(){return[b(window).width()-d.margin*2,b(window).height()-d.margin*2,b(document).scrollLeft()+d.margin,b(document).scrollTop()+d.margin]},X=function(){var a=U(),c={},g=d.autoScale,k=d.padding*2;c.width=d.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(d.width)/100,10):d.width+k;c.height=d.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(d.height)/100,10):d.height+k;if(g&&(c.width>a[0]||c.height>a[1]))if(e.type==
 "image"||e.type=="swf"){g=d.width/d.height;if(c.width>a[0]){c.width=a[0];c.height=parseInt((c.width-k)/g+k,10)}if(c.height>a[1]){c.height=a[1];c.width=parseInt((c.height-k)*g+k,10)}}else{c.width=Math.min(c.width,a[0]);c.height=Math.min(c.height,a[1])}c.top=parseInt(Math.max(a[3]-20,a[3]+(a[1]-c.height-40)*0.5),10);c.left=parseInt(Math.max(a[2]-20,a[2]+(a[0]-c.width-40)*0.5),10);return c},V=function(){var a=e.orig?b(e.orig):false,c={};if(a&&a.length){c=a.offset();c.top+=parseInt(a.css("paddingTop"),
 10)||0;c.left+=parseInt(a.css("paddingLeft"),10)||0;c.top+=parseInt(a.css("border-top-width"),10)||0;c.left+=parseInt(a.css("border-left-width"),10)||0;c.width=a.width();c.height=a.height();c={width:c.width+d.padding*2,height:c.height+d.padding*2,top:c.top-d.padding-20,left:c.left-d.padding-20}}else{a=U();c={width:d.padding*2,height:d.padding*2,top:parseInt(a[3]+a[1]*0.5,10),left:parseInt(a[2]+a[0]*0.5,10)}}return c},Z=function(){if(t.is(":visible")){b("div",t).css("top",L*-40+"px");L=(L+1)%12}else clearInterval(K)};
 b.fn.fancybox=function(a){if(!b(this).length)return this;b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();if(!h){h=true;b(this).blur();o=[];q=0;c=b(this).attr("rel")||"";if(!c||c==""||c==="nofollow")o.push(this);else{o=b("a[rel="+c+"], area[rel="+c+"]");q=o.index(this)}I()}});return this};b.fancybox=function(a,c){var g;if(!h){h=true;g=typeof c!=="undefined"?c:{};o=[];q=parseInt(g.index,10)||0;if(b.isArray(a)){for(var k=
 0,C=a.length;k<C;k++)if(typeof a[k]=="object")b(a[k]).data("fancybox",b.extend({},g,a[k]));else a[k]=b({}).data("fancybox",b.extend({content:a[k]},g));o=jQuery.merge(o,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},g,a));else a=b({}).data("fancybox",b.extend({content:a},g));o.push(a)}if(q>o.length||q<0)q=0;I()}};b.fancybox.showActivity=function(){clearInterval(K);t.show();K=setInterval(Z,66)};b.fancybox.hideActivity=function(){t.hide()};b.fancybox.next=function(){return b.fancybox.pos(p+
 1)};b.fancybox.prev=function(){return b.fancybox.pos(p-1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a);o=l;if(a>-1&&a<l.length){q=a;I()}else if(d.cyclic&&l.length>1){q=a>=l.length?0:l.length-1;I()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");N();e.onCancel(o,q,e);h=false}};b.fancybox.close=function(){function a(){u.fadeOut("fast");n.empty().hide();f.hide();b.event.trigger("fancybox-cleanup");j.empty();d.onClosed(l,p,d);l=e=[];p=q=0;d=e={};h=false}if(!(h||f.is(":hidden"))){h=
 true;if(d&&false===d.onCleanup(l,p,d))h=false;else{N();b(E.add(z).add(A)).hide();b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");j.find("iframe").attr("src",M&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");d.titlePosition!=="inside"&&n.empty();f.stop();if(d.transitionOut=="elastic"){r=V();var c=f.position();i={top:c.top,left:c.left,width:f.width(),height:f.height()};if(d.opacity)i.opacity=1;n.empty().hide();B.prop=1;
 b(B).animate({prop:0},{duration:d.speedOut,easing:d.easingOut,step:T,complete:a})}else f.fadeOut(d.transitionOut=="none"?0:d.speedOut,a)}}};b.fancybox.resize=function(){u.is(":visible")&&u.css("height",b(document).height());b.fancybox.center(true)};b.fancybox.center=function(a){var c,g;if(!h){g=a===true?1:0;c=U();!g&&(f.width()>c[0]||f.height()>c[1])||f.stop().animate({top:parseInt(Math.max(c[3]-20,c[3]+(c[1]-j.height()-40)*0.5-d.padding)),left:parseInt(Math.max(c[2]-20,c[2]+(c[0]-j.width()-40)*0.5-
 d.padding))},typeof a=="number"?a:200)}};b.fancybox.init=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),t=b('<div id="fancybox-loading"><div></div></div>'),u=b('<div id="fancybox-overlay"></div>'),f=b('<div id="fancybox-wrap"></div>'));D=b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
 D.append(j=b('<div id="fancybox-content"></div>'),E=b('<a id="fancybox-close"></a>'),n=b('<div id="fancybox-title"></div>'),z=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));E.click(b.fancybox.close);t.click(b.fancybox.cancel);z.click(function(a){a.preventDefault();b.fancybox.prev()});A.click(function(a){a.preventDefault();b.fancybox.next()});
 b.fn.mousewheel&&f.bind("mousewheel.fb",function(a,c){if(h)a.preventDefault();else if(b(a.target).get(0).clientHeight==0||b(a.target).get(0).scrollHeight===b(a.target).get(0).clientHeight){a.preventDefault();b.fancybox[c>0?"prev":"next"]()}});b.support.opacity||f.addClass("fancybox-ie");if(M){t.addClass("fancybox-ie6");f.addClass("fancybox-ie6");b('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)}}};
 b.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",
 easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};b(document).ready(function(){b.fancybox.init()})})(jQuery);


/*  =====================================
    JQuery Hyphenator
    http://code.google.com/p/hyphenator/
    =====================================
*/

var Hyphenator=(function(window){var
supportedLang={'be':'be.js','cs':'cs.js','da':'da.js','bn':'bn.js','de':'de.js','el':'el-monoton.js','el-monoton':'el-monoton.js','el-polyton':'el-polyton.js','en':'en-us.js','en-gb':'en-gb.js','en-us':'en-us.js','es':'es.js','fi':'fi.js','fr':'fr.js','grc':'grc.js','gu':'gu.js','hi':'hi.js','hu':'hu.js','hy':'hy.js','it':'it.js','kn':'kn.js','la':'la.js','lt':'lt.js','lv':'lv.js','ml':'ml.js','no':'no-nb.js','no-nb':'no-nb.js','nl':'nl.js','or':'or.js','pa':'pa.js','pl':'pl.js','pt':'pt.js','ru':'ru.js','sl':'sl.js','sv':'sv.js','ta':'ta.js','te':'te.js','tr':'tr.js','uk':'uk.js'},languageHint=(function(){var k,r='';for(k in supportedLang){if(supportedLang.hasOwnProperty(k)){r+=k+', ';}}
r=r.substring(0,r.length-2);return r;}()),prompterStrings={'be':'Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:','cs':'Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:','da':'Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:','de':'Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:','en':'The language of this website could not be determined automatically. Please indicate the main language:','es':'El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:','fi':'Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:','fr':'La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:','hu':'A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:','hy':'Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝','it':'Lingua del sito sconosciuta. Indicare una lingua, per favore:','kn':'ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:','lt':'Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:','lv':'Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:','ml':'ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:','nl':'De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:','no':'Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:','pt':'A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:','ru':'Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:','sl':'Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:','sv':'Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:','tr':'Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:','uk':'Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:'},basePath=(function(){var s=document.getElementsByTagName('script'),i=0,p,src,t;while(!!(t=s[i++])){if(!t.src){continue;}
src=t.src;p=src.indexOf('Hyphenator.js');if(p!==-1){return src.substring(0,p);}}
return'http://hyphenator.googlecode.com/svn/trunk/';}()),isLocal=(function(){var re=false;if(window.location.href.indexOf(basePath)!==-1){re=true;}
return re;}()),documentLoaded=false,documentCount=0,persistentConfig=false,contextWindow=window,doFrames=false,dontHyphenate={'script':true,'code':true,'pre':true,'img':true,'br':true,'samp':true,'kbd':true,'var':true,'abbr':true,'acronym':true,'sub':true,'sup':true,'button':true,'option':true,'label':true,'textarea':true,'input':true},enableCache=true,storageType='local',storage,enableReducedPatternSet=false,enableRemoteLoading=true,displayToggleBox=false,hyphenateClass='hyphenate',dontHyphenateClass='donthyphenate',min=6,orphanControl=1,isBookmarklet=(function(){var loc=null,re=false,jsArray=document.getElementsByTagName('script'),i,l;for(i=0,l=jsArray.length;i<l;i++){if(!!jsArray[i].getAttribute('src')){loc=jsArray[i].getAttribute('src');}
if(!loc){continue;}else if(loc.indexOf('Hyphenator.js?bm=true')!==-1){re=true;}}
return re;}()),mainLanguage=null,defaultLanguage='',elements=[],exceptions={},countObjProps=function(obj){var k,l=0;for(k in obj){if(obj.hasOwnProperty(k)){l++;}}
return l;},docLanguages={},state=0,url='(\\w*:\/\/)?((\\w*:)?(\\w*)@)?((([\\d]{1,3}\\.){3}([\\d]{1,3}))|((www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.([a-z]{2,4})))(:\\d*)?(\/[\\w#!:\\.?\\+=&%@!\\-]*)*',mail='[\\w-\\.]+@[\\w\\.]+',urlOrMailRE=new RegExp('('+url+')|('+mail+')','i'),zeroWidthSpace=(function(){var zws,ua=navigator.userAgent.toLowerCase();zws=String.fromCharCode(8203);if(ua.indexOf('msie 6')!==-1){zws='';}
if(ua.indexOf('opera')!==-1&&ua.indexOf('version/10.00')!==-1){zws='';}
return zws;}()),createElem=function(tagname,context){context=context||contextWindow;if(document.createElementNS){return context.document.createElementNS('http://www.w3.org/1999/xhtml',tagname);}else if(document.createElement){return context.document.createElement(tagname);}},onHyphenationDone=function(){},onError=function(e){window.alert("Hyphenator.js says:\n\nAn Error ocurred:\n"+e.message);},selectorFunction=function(){var tmp,el=[],i,l;if(document.getElementsByClassName){el=contextWindow.document.getElementsByClassName(hyphenateClass);}else{tmp=contextWindow.document.getElementsByTagName('*');l=tmp.length;for(i=0;i<l;i++)
{if(tmp[i].className.indexOf(hyphenateClass)!==-1&&tmp[i].className.indexOf(dontHyphenateClass)===-1){el.push(tmp[i]);}}}
return el;},intermediateState='hidden',hyphen=String.fromCharCode(173),urlhyphen=zeroWidthSpace,safeCopy=true,Expando=(function(){var container={},name="HyphenatorExpando_"+Math.random(),uuid=0;return{getDataForElem:function(elem){return container[elem[name].id];},setDataForElem:function(elem,data){var id;if(elem[name]&&elem[name].id!==''){id=elem[name].id;}else{id=uuid++;elem[name]={'id':id};}
container[id]=data;},appendDataForElem:function(elem,data){var k;for(k in data){if(data.hasOwnProperty(k)){container[elem[name].id][k]=data[k];}}},delDataOfElem:function(elem){delete container[elem[name]];}};}()),runOnContentLoaded=function(w,f){var DOMContentLoaded=function(){},toplevel,hyphRunForThis={};if(documentLoaded&&!hyphRunForThis[w.location.href]){f();hyphRunForThis[w.location.href]=true;return;}
function init(context){contextWindow=context||window;if(!hyphRunForThis[contextWindow.location.href]&&(!documentLoaded||contextWindow!=window.parent)){documentLoaded=true;f();hyphRunForThis[contextWindow.location.href]=true;}}
function doScrollCheck(){try{document.documentElement.doScroll("left");}catch(error){setTimeout(doScrollCheck,1);return;}
init(window);}
function doOnLoad(){var i,haveAccess,fl=window.frames.length;if(doFrames&&fl>0){for(i=0;i<fl;i++){haveAccess=undefined;try{haveAccess=window.frames[i].document.toString();}catch(e){haveAccess=undefined;}
if(!!haveAccess){init(window.frames[i]);}}
contextWindow=window;f();hyphRunForThis[window.location.href]=true;}else{init(window);}}
if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);if(doFrames&&window.frames.length>0){return;}else{init(window);}};}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);if(doFrames&&window.frames.length>0){return;}else{init(window);}}};}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",doOnLoad,false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",doOnLoad);toplevel=false;try{toplevel=window.frameElement===null;}catch(e){}
if(document.documentElement.doScroll&&toplevel){doScrollCheck();}}},getLang=function(el,fallback){if(!!el.getAttribute('lang')){return el.getAttribute('lang').toLowerCase();}
try{if(!!el.getAttribute('xml:lang')){return el.getAttribute('xml:lang').toLowerCase();}}catch(ex){}
if(el.tagName!=='HTML'){return getLang(el.parentNode,true);}
if(fallback){return mainLanguage;}
return null;},autoSetMainLanguage=function(w){w=w||contextWindow;var el=w.document.getElementsByTagName('html')[0],m=w.document.getElementsByTagName('meta'),i,text,e,ul;mainLanguage=getLang(el,false);if(!mainLanguage){for(i=0;i<m.length;i++){if(!!m[i].getAttribute('http-equiv')&&(m[i].getAttribute('http-equiv').toLowerCase()==='content-language')){mainLanguage=m[i].getAttribute('content').toLowerCase();}
if(!!m[i].getAttribute('name')&&(m[i].getAttribute('name').toLowerCase()==='dc.language')){mainLanguage=m[i].getAttribute('content').toLowerCase();}
if(!!m[i].getAttribute('name')&&(m[i].getAttribute('name').toLowerCase()==='language')){mainLanguage=m[i].getAttribute('content').toLowerCase();}}}
if(!mainLanguage&&doFrames&&contextWindow!=window.parent){autoSetMainLanguage(window.parent);}
if(!mainLanguage&&defaultLanguage!==''){mainLanguage=defaultLanguage;}
if(!mainLanguage){text='';ul=navigator.language?navigator.language:navigator.userLanguage;ul=ul.substring(0,2);if(prompterStrings.hasOwnProperty(ul)){text=prompterStrings[ul];}else{text=prompterStrings.en;}
text+=' (ISO 639-1)\n\n'+languageHint;mainLanguage=window.prompt(unescape(text),ul).toLowerCase();}
if(!supportedLang.hasOwnProperty(mainLanguage)){if(supportedLang.hasOwnProperty(mainLanguage.split('-')[0])){mainLanguage=mainLanguage.split('-')[0];}else{e=new Error('The language "'+mainLanguage+'" is not yet supported.');throw e;}}},gatherDocumentInfos=function(){var elToProcess,tmp,i=0,process=function(el,hide,lang){var n,i=0,hyphenatorSettings={};if(hide&&intermediateState==='hidden'){if(!!el.getAttribute('style')){hyphenatorSettings.hasOwnStyle=true;}else{hyphenatorSettings.hasOwnStyle=false;}
hyphenatorSettings.isHidden=true;el.style.visibility='hidden';}
if(el.lang&&typeof(el.lang)==='string'){hyphenatorSettings.language=el.lang.toLowerCase();}else if(lang){hyphenatorSettings.language=lang.toLowerCase();}else{hyphenatorSettings.language=getLang(el,true);}
lang=hyphenatorSettings.language;if(supportedLang[lang]){docLanguages[lang]=true;}else{if(supportedLang.hasOwnProperty(lang.split('-')[0])){lang=lang.split('-')[0];hyphenatorSettings.language=lang;}else if(!isBookmarklet){onError(new Error('Language '+lang+' is not yet supported.'));}}
Expando.setDataForElem(el,hyphenatorSettings);elements.push(el);while(!!(n=el.childNodes[i++])){if(n.nodeType===1&&!dontHyphenate[n.nodeName.toLowerCase()]&&n.className.indexOf(dontHyphenateClass)===-1&&!(n in elToProcess)){process(n,false,lang);}}};if(isBookmarklet){elToProcess=contextWindow.document.getElementsByTagName('body')[0];process(elToProcess,false,mainLanguage);}else{elToProcess=selectorFunction();while(!!(tmp=elToProcess[i++]))
{process(tmp,true,'');}}
if(!Hyphenator.languages.hasOwnProperty(mainLanguage)){docLanguages[mainLanguage]=true;}else if(!Hyphenator.languages[mainLanguage].prepared){docLanguages[mainLanguage]=true;}
if(elements.length>0){Expando.appendDataForElem(elements[elements.length-1],{isLast:true});}},convertPatterns=function(lang){var plen,anfang,ende,pats,pat,key,tmp={};pats=Hyphenator.languages[lang].patterns;for(plen in pats){if(pats.hasOwnProperty(plen)){plen=parseInt(plen,10);anfang=0;ende=plen;while(!!(pat=pats[plen].substring(anfang,ende))){key=pat.replace(/\d/g,'');tmp[key]=pat;anfang=ende;ende+=plen;}}}
Hyphenator.languages[lang].patterns=tmp;Hyphenator.languages[lang].patternsConverted=true;},convertExceptionsToObject=function(exc){var w=exc.split(', '),r={},i,l,key;for(i=0,l=w.length;i<l;i++){key=w[i].replace(/-/g,'');if(!r.hasOwnProperty(key)){r[key]=w[i];}}
return r;},loadPatterns=function(lang){var url,xhr,head,script;if(supportedLang[lang]&&!Hyphenator.languages[lang]){url=basePath+'patterns/'+supportedLang[lang];}else{return;}
if(isLocal&&!isBookmarklet){xhr=null;if(typeof XMLHttpRequest!=='undefined'){xhr=new XMLHttpRequest();}
if(!xhr){try{xhr=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){xhr=null;}}
if(xhr){xhr.open('HEAD',url,false);xhr.setRequestHeader('Cache-Control','no-cache');xhr.send(null);if(xhr.status===404){onError(new Error('Could not load\n'+url));delete docLanguages[lang];return;}}}
if(createElem){head=window.document.getElementsByTagName('head').item(0);script=createElem('script',window);script.src=url;script.type='text/javascript';head.appendChild(script);}},prepareLanguagesObj=function(lang){var lo=Hyphenator.languages[lang],wrd;if(!lo.prepared){if(enableCache){lo.cache={};lo['cache']=lo.cache;}
if(enableReducedPatternSet){lo.redPatSet={};}
if(lo.hasOwnProperty('exceptions')){Hyphenator.addExceptions(lang,lo.exceptions);delete lo.exceptions;}
if(exceptions.hasOwnProperty('global')){if(exceptions.hasOwnProperty(lang)){exceptions[lang]+=', '+exceptions.global;}else{exceptions[lang]=exceptions.global;}}
if(exceptions.hasOwnProperty(lang)){lo.exceptions=convertExceptionsToObject(exceptions[lang]);delete exceptions[lang];}else{lo.exceptions={};}
convertPatterns(lang);wrd='[\\w'+lo.specialChars+'@'+String.fromCharCode(173)+'-]{'+min+',}';lo.genRegExp=new RegExp('('+url+')|('+mail+')|('+wrd+')','gi');lo.prepared=true;}
if(!!storage){try{storage.setItem('Hyphenator_'+lang,window.JSON.stringify(lo));}catch(e){}}},prepare=function(callback){var lang,interval,tmp1,tmp2;if(!enableRemoteLoading){for(lang in Hyphenator.languages){if(Hyphenator.languages.hasOwnProperty(lang)){prepareLanguagesObj(lang);}}
state=2;callback();return;}
state=1;for(lang in docLanguages){if(docLanguages.hasOwnProperty(lang)){if(!!storage&&storage.getItem('Hyphenator_'+lang)){Hyphenator.languages[lang]=window.JSON.parse(storage.getItem('Hyphenator_'+lang));if(exceptions.hasOwnProperty('global')){tmp1=convertExceptionsToObject(exceptions.global);for(tmp2 in tmp1){if(tmp1.hasOwnProperty(tmp2)){Hyphenator.languages[lang].exceptions[tmp2]=tmp1[tmp2];}}}
if(exceptions.hasOwnProperty(lang)){tmp1=convertExceptionsToObject(exceptions[lang]);for(tmp2 in tmp1){if(tmp1.hasOwnProperty(tmp2)){Hyphenator.languages[lang].exceptions[tmp2]=tmp1[tmp2];}}
delete exceptions[lang];}
tmp1='[\\w'+Hyphenator.languages[lang].specialChars+'@'+String.fromCharCode(173)+'-]{'+min+',}';Hyphenator.languages[lang].genRegExp=new RegExp('('+url+')|('+mail+')|('+tmp1+')','gi');delete docLanguages[lang];continue;}else{loadPatterns(lang);}}}
if(countObjProps(docLanguages)===0){state=2;callback();return;}
interval=window.setInterval(function(){var finishedLoading=true,lang;for(lang in docLanguages){if(docLanguages.hasOwnProperty(lang)){finishedLoading=false;if(!!Hyphenator.languages[lang]){delete docLanguages[lang];prepareLanguagesObj(lang);}}}
if(finishedLoading){window.clearInterval(interval);state=2;callback();}},100);},toggleBox=function(){var myBox,bdy,myIdAttribute,myTextNode,myClassAttribute,text=(Hyphenator.doHyphenation?'Hy-phen-a-tion':'Hyphenation');if(!!(myBox=contextWindow.document.getElementById('HyphenatorToggleBox'))){myBox.firstChild.data=text;}else{bdy=contextWindow.document.getElementsByTagName('body')[0];myBox=createElem('div',contextWindow);myIdAttribute=contextWindow.document.createAttribute('id');myIdAttribute.nodeValue='HyphenatorToggleBox';myClassAttribute=contextWindow.document.createAttribute('class');myClassAttribute.nodeValue=dontHyphenateClass;myTextNode=contextWindow.document.createTextNode(text);myBox.appendChild(myTextNode);myBox.setAttributeNode(myIdAttribute);myBox.setAttributeNode(myClassAttribute);myBox.onclick=Hyphenator.toggleHyphenation;myBox.style.position='absolute';myBox.style.top='0px';myBox.style.right='0px';myBox.style.margin='0';myBox.style.backgroundColor='#AAAAAA';myBox.style.color='#FFFFFF';myBox.style.font='6pt Arial';myBox.style.letterSpacing='0.2em';myBox.style.padding='3px';myBox.style.cursor='pointer';myBox.style.WebkitBorderBottomLeftRadius='4px';myBox.style.MozBorderRadiusBottomleft='4px';bdy.appendChild(myBox);}},hyphenateWord=function(lang,word){var lo=Hyphenator.languages[lang],parts,i,l,w,wl,s,hypos,p,maxwins,win,pat=false,patk,c,t,n,numb3rs,inserted,hyphenatedword,val;if(word===''){return'';}
if(word.indexOf(hyphen)!==-1){return word;}
if(enableCache&&lo.cache.hasOwnProperty(word)){return lo.cache[word];}
if(lo.exceptions.hasOwnProperty(word)){return lo.exceptions[word].replace(/-/g,hyphen);}
if(word.indexOf('-')!==-1){parts=word.split('-');for(i=0,l=parts.length;i<l;i++){parts[i]=hyphenateWord(lang,parts[i]);}
return parts.join('-');}
w='_'+word+'_';wl=w.length;s=w.split('');if(word.indexOf("'")!==-1){w=w.toLowerCase().replace("'","’");}else{w=w.toLowerCase();}
hypos=[];numb3rs={'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9};n=wl-lo.shortestPattern;for(p=0;p<=n;p++){maxwins=Math.min((wl-p),lo.longestPattern);for(win=lo.shortestPattern;win<=maxwins;win++){if(lo.patterns.hasOwnProperty(patk=w.substring(p,p+win))){pat=lo.patterns[patk];if(enableReducedPatternSet&&(typeof pat==='string')){lo.redPatSet[patk]=pat;}
if(typeof pat==='string'){t=0;val=[];for(i=0;i<pat.length;i++){if(!!(c=numb3rs[pat.charAt(i)])){val.push(i-t,c);t++;}}
pat=lo.patterns[patk]=val;}}else{continue;}
for(i=0;i<pat.length;i++){c=p-1+pat[i];if(!hypos[c]||hypos[c]<pat[i+1]){hypos[c]=pat[i+1];}
i++;}}}
inserted=0;for(i=lo.leftmin;i<=(word.length-lo.rightmin);i++){if(!!(hypos[i]&1)){s.splice(i+inserted+1,0,hyphen);inserted++;}}
hyphenatedword=s.slice(1,-1).join('');if(enableCache){lo.cache[word]=hyphenatedword;}
return hyphenatedword;},hyphenateURL=function(url){return url.replace(/([:\/\.\?#&_,;!@]+)/gi,'$&'+urlhyphen);},removeHyphenationFromElement=function(el){var h,i=0,n;switch(hyphen){case'|':h='\\|';break;case'+':h='\\+';break;case'*':h='\\*';break;default:h=hyphen;}
while(!!(n=el.childNodes[i++])){if(n.nodeType===3){n.data=n.data.replace(new RegExp(h,'g'),'');n.data=n.data.replace(new RegExp(zeroWidthSpace,'g'),'');}else if(n.nodeType===1){removeHyphenationFromElement(n);}}},registerOnCopy=function(el){var body=el.ownerDocument.getElementsByTagName('body')[0],shadow,selection,range,rangeShadow,restore,oncopyHandler=function(e){e=e||window.event;var target=e.target||e.srcElement,currDoc=target.ownerDocument,body=currDoc.getElementsByTagName('body')[0],targetWindow='defaultView'in currDoc?currDoc.defaultView:currDoc.parentWindow;if(target.tagName&&dontHyphenate[target.tagName.toLowerCase()]){return;}
shadow=currDoc.createElement('div');shadow.style.overflow='hidden';shadow.style.position='absolute';shadow.style.top='-5000px';shadow.style.height='1px';body.appendChild(shadow);if(!!window.getSelection){selection=targetWindow.getSelection();range=selection.getRangeAt(0);shadow.appendChild(range.cloneContents());removeHyphenationFromElement(shadow);selection.selectAllChildren(shadow);restore=function(){shadow.parentNode.removeChild(shadow);selection.addRange(range);};}else{selection=targetWindow.document.selection;range=selection.createRange();shadow.innerHTML=range.htmlText;removeHyphenationFromElement(shadow);rangeShadow=body.createTextRange();rangeShadow.moveToElementText(shadow);rangeShadow.select();restore=function(){shadow.parentNode.removeChild(shadow);if(range.text!==""){range.select();}};}
window.setTimeout(restore,0);};if(!body){return;}
el=el||body;if(window.addEventListener){el.addEventListener("copy",oncopyHandler,false);}else{el.attachEvent("oncopy",oncopyHandler);}},hyphenateElement=function(el){var hyphenatorSettings=Expando.getDataForElem(el),lang=hyphenatorSettings.language,hyphenate,n,i,controlOrphans=function(part){var h,r;switch(hyphen){case'|':h='\\|';break;case'+':h='\\+';break;case'*':h='\\*';break;default:h=hyphen;}
if(orphanControl>=2){r=part.split(' ');r[1]=r[1].replace(new RegExp(h,'g'),'');r[1]=r[1].replace(new RegExp(zeroWidthSpace,'g'),'');r=r.join(' ');}
if(orphanControl===3){r=r.replace(/[ ]+/g,String.fromCharCode(160));}
return r;};if(Hyphenator.languages.hasOwnProperty(lang)){hyphenate=function(word){if(!Hyphenator.doHyphenation){return word;}else if(urlOrMailRE.test(word)){return hyphenateURL(word);}else{return hyphenateWord(lang,word);}};if(safeCopy&&(el.tagName.toLowerCase()!=='body')){registerOnCopy(el);}
i=0;while(!!(n=el.childNodes[i++])){if(n.nodeType===3&&n.data.length>=min){n.data=n.data.replace(Hyphenator.languages[lang].genRegExp,hyphenate);if(orphanControl!==1){n.data=n.data.replace(/[\S]+ [\S]+$/,controlOrphans);}}}}
if(hyphenatorSettings.isHidden&&intermediateState==='hidden'){el.style.visibility='visible';if(!hyphenatorSettings.hasOwnStyle){el.setAttribute('style','');el.removeAttribute('style');}else{if(el.style.removeProperty){el.style.removeProperty('visibility');}else if(el.style.removeAttribute){el.style.removeAttribute('visibility');}}}
if(hyphenatorSettings.isLast){state=3;documentCount--;if(documentCount>(-1000)&&documentCount<=0){documentCount=(-2000);onHyphenationDone();}}},hyphenateDocument=function(){function bind(fun,arg){return function(){return fun(arg);};}
var i=0,el;while(!!(el=elements[i++])){if(el.ownerDocument.location.href===contextWindow.location.href){window.setTimeout(bind(hyphenateElement,el),0);}}},removeHyphenationFromDocument=function(){var i=0,el;while(!!(el=elements[i++])){removeHyphenationFromElement(el);}
state=4;},createStorage=function(){try{if(storageType!=='none'&&typeof(window.localStorage)!=='undefined'&&typeof(window.sessionStorage)!=='undefined'&&typeof(window.JSON.stringify)!=='undefined'&&typeof(window.JSON.parse)!=='undefined'){switch(storageType){case'session':storage=window.sessionStorage;break;case'local':storage=window.localStorage;break;default:storage=undefined;break;}}}catch(f){}},storeConfiguration=function(){if(!storage){return;}
var settings={'STORED':true,'classname':hyphenateClass,'donthyphenateclassname':dontHyphenateClass,'minwordlength':min,'hyphenchar':hyphen,'urlhyphenchar':urlhyphen,'togglebox':toggleBox,'displaytogglebox':displayToggleBox,'remoteloading':enableRemoteLoading,'enablecache':enableCache,'onhyphenationdonecallback':onHyphenationDone,'onerrorhandler':onError,'intermediatestate':intermediateState,'selectorfunction':selectorFunction,'safecopy':safeCopy,'doframes':doFrames,'storagetype':storageType,'orphancontrol':orphanControl,'dohyphenation':Hyphenator.doHyphenation,'persistentconfig':persistentConfig,'defaultlanguage':defaultLanguage};storage.setItem('Hyphenator_config',window.JSON.stringify(settings));},restoreConfiguration=function(){var settings;if(storage.getItem('Hyphenator_config')){settings=window.JSON.parse(storage.getItem('Hyphenator_config'));Hyphenator.config(settings);}};return{version:'X.Y.Z',doHyphenation:true,languages:{},config:function(obj){var assert=function(name,type){if(typeof obj[name]===type){return true;}else{onError(new Error('Config onError: '+name+' must be of type '+type));return false;}},key;if(obj.hasOwnProperty('storagetype')){if(assert('storagetype','string')){storageType=obj.storagetype;}
if(!storage){createStorage();}}
if(!obj.hasOwnProperty('STORED')&&storage&&obj.hasOwnProperty('persistentconfig')&&obj.persistentconfig===true){restoreConfiguration();}
for(key in obj){if(obj.hasOwnProperty(key)){switch(key){case'STORED':break;case'classname':if(assert('classname','string')){hyphenateClass=obj[key];}
break;case'donthyphenateclassname':if(assert('donthyphenateclassname','string')){dontHyphenateClass=obj[key];}
break;case'minwordlength':if(assert('minwordlength','number')){min=obj[key];}
break;case'hyphenchar':if(assert('hyphenchar','string')){if(obj.hyphenchar==='­'){obj.hyphenchar=String.fromCharCode(173);}
hyphen=obj[key];}
break;case'urlhyphenchar':if(obj.hasOwnProperty('urlhyphenchar')){if(assert('urlhyphenchar','string')){urlhyphen=obj[key];}}
break;case'togglebox':if(assert('togglebox','function')){toggleBox=obj[key];}
break;case'displaytogglebox':if(assert('displaytogglebox','boolean')){displayToggleBox=obj[key];}
break;case'remoteloading':if(assert('remoteloading','boolean')){enableRemoteLoading=obj[key];}
break;case'enablecache':if(assert('enablecache','boolean')){enableCache=obj[key];}
break;case'enablereducedpatternset':if(assert('enablereducedpatternset','boolean')){enableReducedPatternSet=obj[key];}
break;case'onhyphenationdonecallback':if(assert('onhyphenationdonecallback','function')){onHyphenationDone=obj[key];}
break;case'onerrorhandler':if(assert('onerrorhandler','function')){onError=obj[key];}
break;case'intermediatestate':if(assert('intermediatestate','string')){intermediateState=obj[key];}
break;case'selectorfunction':if(assert('selectorfunction','function')){selectorFunction=obj[key];}
break;case'safecopy':if(assert('safecopy','boolean')){safeCopy=obj[key];}
break;case'doframes':if(assert('doframes','boolean')){doFrames=obj[key];}
break;case'storagetype':if(assert('storagetype','string')){storageType=obj[key];}
break;case'orphancontrol':if(assert('orphancontrol','number')){orphanControl=obj[key];}
break;case'dohyphenation':if(assert('dohyphenation','boolean')){Hyphenator.doHyphenation=obj[key];}
break;case'persistentconfig':if(assert('persistentconfig','boolean')){persistentConfig=obj[key];}
break;case'defaultlanguage':if(assert('defaultlanguage','string')){defaultLanguage=obj[key];}
break;default:onError(new Error('Hyphenator.config: property '+key+' not known.'));}}}
if(storage&&persistentConfig){storeConfiguration();}},run:function(){documentCount=0;var process=function(){try{if(contextWindow.document.getElementsByTagName('frameset').length>0){return;}
documentCount++;autoSetMainLanguage(undefined);gatherDocumentInfos();prepare(hyphenateDocument);if(displayToggleBox){toggleBox();}}catch(e){onError(e);}},i,haveAccess,fl=window.frames.length;if(!storage){createStorage();}
if(!documentLoaded&&!isBookmarklet){runOnContentLoaded(window,process);}
if(isBookmarklet||documentLoaded){if(doFrames&&fl>0){for(i=0;i<fl;i++){haveAccess=undefined;try{haveAccess=window.frames[i].document.toString();}catch(e){haveAccess=undefined;}
if(!!haveAccess){contextWindow=window.frames[i];process();}}}
contextWindow=window;process();}},addExceptions:function(lang,words){if(lang===''){lang='global';}
if(exceptions.hasOwnProperty(lang)){exceptions[lang]+=", "+words;}else{exceptions[lang]=words;}},hyphenate:function(target,lang){var hyphenate,n,i;if(Hyphenator.languages.hasOwnProperty(lang)){if(!Hyphenator.languages[lang].prepared){prepareLanguagesObj(lang);}
hyphenate=function(word){if(urlOrMailRE.test(word)){return hyphenateURL(word);}else{return hyphenateWord(lang,word);}};if(typeof target==='string'||target.constructor===String){return target.replace(Hyphenator.languages[lang].genRegExp,hyphenate);}else if(typeof target==='object'){i=0;while(!!(n=target.childNodes[i++])){if(n.nodeType===3&&n.data.length>=min){n.data=n.data.replace(Hyphenator.languages[lang].genRegExp,hyphenate);}else if(n.nodeType===1){if(n.lang!==''){Hyphenator.hyphenate(n,n.lang);}else{Hyphenator.hyphenate(n,lang);}}}}}else{onError(new Error('Language "'+lang+'" is not loaded.'));}},getRedPatternSet:function(lang){return Hyphenator.languages[lang].redPatSet;},isBookmarklet:function(){return isBookmarklet;},getConfigFromURI:function(){var loc=null,re={},jsArray=document.getElementsByTagName('script'),i,j,l,s,gp,option;for(i=0,l=jsArray.length;i<l;i++){if(!!jsArray[i].getAttribute('src')){loc=jsArray[i].getAttribute('src');}
if(!loc){continue;}else{s=loc.indexOf('Hyphenator.js?');if(s===-1){continue;}
gp=loc.substring(s+14).split('&');for(j=0;j<gp.length;j++){option=gp[j].split('=');if(option[0]==='bm'){continue;}
if(option[1]==='true'){re[option[0]]=true;continue;}
if(option[1]==='false'){re[option[0]]=false;continue;}
if(isFinite(option[1])){re[option[0]]=parseInt(option[1],10);continue;}
if(option[0]==='onhyphenationdonecallback'){re[option[0]]=new Function('',option[1]);continue;}
re[option[0]]=option[1];}
break;}}
return re;},toggleHyphenation:function(){if(Hyphenator.doHyphenation){removeHyphenationFromDocument();Hyphenator.doHyphenation=false;storeConfiguration();toggleBox();}else{hyphenateDocument();Hyphenator.doHyphenation=true;storeConfiguration();toggleBox();}}};}(window));Hyphenator['languages']=Hyphenator.languages;Hyphenator['config']=Hyphenator.config;Hyphenator['run']=Hyphenator.run;Hyphenator['addExceptions']=Hyphenator.addExceptions;Hyphenator['hyphenate']=Hyphenator.hyphenate;Hyphenator['getRedPatternSet']=Hyphenator.getRedPatternSet;Hyphenator['isBookmarklet']=Hyphenator.isBookmarklet;Hyphenator['getConfigFromURI']=Hyphenator.getConfigFromURI;Hyphenator['toggleHyphenation']=Hyphenator.toggleHyphenation;window['Hyphenator']=Hyphenator;if(Hyphenator.isBookmarklet()){Hyphenator.config({displaytogglebox:true,intermediatestate:'visible',doframes:true});Hyphenator.config(Hyphenator.getConfigFromURI());Hyphenator.run();}

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);