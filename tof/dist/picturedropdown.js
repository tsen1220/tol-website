!function(n){var t={};function o(e){if(t[e])return t[e].exports;var s=t[e]={i:e,l:!1,exports:{}};return n[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=n,o.c=t,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var s in n)o.d(e,s,function(t){return n[t]}.bind(null,s));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=0)}([function(n,t,o){"use strict";o.r(t);o(1),o(2)},function(n,t){$(document).ready(function(){$("#dropdown li ul").hide(),$("#dropdown li").hover(function(){$(this).find("ul").slideDown("fast"),$(this).find("a:first").addClass("active")},function(){$(this).find("#submenu").fadeOut("fast"),$(this).find("a").removeClass("active")})})},function(n,t){var o=["./tof/sass/background/1.png","./tof/sass/background/2.png","./tof/sass/background/3.png","./tof/sass/background/4.jpg","./tof/sass/background/5.png","./tof/sass/background/6.png","./tof/sass/background/7.jpg","./tof/sass/background/8.png","./tof/sass/background/9.png","./tof/sass/background/10.png","./tof/sass/background/11.png","./tof/sass/background/12.jpg","./tof/sass/background/13.jpg","./tof/sass/background/14.jpg","./tof/sass/background/15.png","./tof/sass/background/16.jpg","./tof/sass/background/17.png","./tof/sass/background/18.png"];window.onload=function(){for(var n="",t=0;t<18;t++)n+=`<img src="${o[t]}" alt="" width="512px" height="288px" style="display:inline-block">`;document.getElementById("textcontainer").innerHTML='<h2 style="font-size:50px"><b>美術圖</b></h2>'+n+'<div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://www.throneoflies.com/</div>'}}]);