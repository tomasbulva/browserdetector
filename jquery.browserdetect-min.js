!function($){$.fn.browser=function(){var t=r(i)||"Other",e=n(navigator.userAgent)||n(navigator.appVersion)||"Unknown",a="ie"!=t?"no-ie":"";return this.addClass(t+" "+t+e+" "+a),this};var r=function(r){for(var n=0;n<r.length;n++){var i=r[n].string;if(versionSearchString=r[n].subString,-1!=i.indexOf(r[n].subString))return r[n].identity}},n=function(r){var n=r.indexOf(versionSearchString);if(-1!=n)return parseFloat(r.substring(n+versionSearchString.length+1))},i=[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"MSIE",identity:"ie"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"}]}(jQuery);
//# sourceMappingURL=./jquery.browserdetect-min.js.map