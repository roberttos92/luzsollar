!function(t){var e;jQuery&&jQuery.UIkit&&(e=t(jQuery,jQuery.UIkit)),"function"==typeof define&&define.amd&&define("uikit-datepicker",["uikit"],function(){return e||t(jQuery,jQuery.UIkit)})}(function(t,e){var n,a,r=!1;return e.component("datepicker",{defaults:{weekstart:1,i18n:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},format:"DD.MM.YYYY",offsettop:5,maxDate:!1,minDate:!1,template:function(t,n){var r,s,i="";if(n.maxDate!==!1&&(r=isNaN(n.maxDate)?a(n.maxDate,n.format):a().add("days",n.maxDate)),n.minDate!==!1&&(s=isNaN(n.minDate)?a(n.minDate,n.format):a().add("days",n.minDate-1)),i+='<div class="uk-datepicker-nav">',i+='<a href="" class="uk-datepicker-previous"></a>',i+='<a href="" class="uk-datepicker-next"></a>',e.formSelect){var o,u,d,h,c,f=(new Date).getFullYear(),l=[];for(o=0;o<n.i18n.months.length;o++)l.push(o==t.month?'<option value="'+o+'" selected>'+n.i18n.months[o]+"</option>":'<option value="'+o+'">'+n.i18n.months[o]+"</option>");for(u='<span class="uk-form-select">'+n.i18n.months[t.month]+'<select class="update-picker-month">'+l.join("")+"</select></span>",l=[],h=s?s.year():f-50,c=r?r.year():f+20,o=h;c>=o;o++)l.push(o==t.year?'<option value="'+o+'" selected>'+o+"</option>":'<option value="'+o+'">'+o+"</option>");d='<span class="uk-form-select">'+t.year+'<select class="update-picker-year">'+l.join("")+"</select></span>",i+='<div class="uk-datepicker-heading">'+u+" "+d+"</div>"}else i+='<div class="uk-datepicker-heading">'+n.i18n.months[t.month]+" "+t.year+"</div>";i+="</div>",i+='<table class="uk-datepicker-table">',i+="<thead>";for(var o=0;o<t.weekdays.length;o++)t.weekdays[o]&&(i+="<th>"+t.weekdays[o]+"</th>");i+="</thead>",i+="<tbody>";for(var o=0;o<t.days.length;o++)if(t.days[o]&&t.days[o].length){i+="<tr>";for(var m=0;m<t.days[o].length;m++)if(t.days[o][m]){var _=t.days[o][m],p=[];_.inmonth||p.push("uk-datepicker-table-muted"),_.selected&&p.push("uk-active"),r&&_.day>r&&p.push("uk-datepicker-date-disabled uk-datepicker-table-muted"),s&&s>_.day&&p.push("uk-datepicker-date-disabled uk-datepicker-table-muted"),i+='<td><a href="" class="'+p.join(" ")+'" data-date="'+_.day.format()+'">'+_.day.format("D")+"</a></td>"}i+="</tr>"}return i+="</tbody>",i+="</table>"}},init:function(){var e=this;this.current=this.element.val()?a(this.element.val(),this.options.format):a(),this.on("click",function(){r!==e&&e.pick(this.value)}).on("change",function(){e.element.val()&&!a(e.element.val(),e.options.format).isValid()&&e.element.val(a().format(e.options.format))}),n||(n=t('<div class="uk-dropdown uk-datepicker"></div>'),n.on("click",".uk-datepicker-next, .uk-datepicker-previous, [data-date]",function(e){e.stopPropagation(),e.preventDefault();var s=t(this);return s.hasClass("uk-datepicker-date-disabled")?!1:void(s.is("[data-date]")?(r.element.val(a(s.data("date")).format(r.options.format)).trigger("change"),n.hide(),r=!1):r.add("months",1*(s.hasClass("uk-datepicker-next")?1:-1)))}),n.on("change",".update-picker-month, .update-picker-year",function(){var e=t(this);r[e.is(".update-picker-year")?"setYear":"setMonth"](Number(e.val()))}),n.appendTo("body"))},pick:function(e){var s=this.element.offset(),i={top:s.top+this.element.outerHeight()+this.options.offsettop,left:s.left,right:""};this.current=e?a(e,this.options.format):a(),this.initdate=this.current.format("YYYY-MM-DD"),this.update(),"right"==t.UIkit.langdirection&&(i.right=window.innerWidth-(i.left+this.element.outerWidth()),i.left=""),n.css(i).show(),r=this},add:function(t,e){this.current.add(t,e),this.update()},setMonth:function(t){this.current.month(t),this.update()},setYear:function(t){this.current.year(t),this.update()},update:function(){var t=this.getRows(this.current.year(),this.current.month()),e=this.options.template(t,this.options);n.html(e)},getRows:function(t,e){var n=this.options,r=a().format("YYYY-MM-DD"),s=[31,t%4===0&&t%100!==0||t%400===0?29:28,31,30,31,30,31,31,30,31,30,31][e],i=new Date(t,e,1).getDay(),o={month:e,year:t,weekdays:[],days:[]},u=[];o.weekdays=function(){for(var t=0,e=[];7>t;t++){for(var a=t+(n.weekstart||0);a>=7;)a-=7;e.push(n.i18n.weekdays[a])}return e}(),n.weekstart&&n.weekstart>0&&(i-=n.weekstart,0>i&&(i+=7));for(var d=s+i,h=d;h>7;)h-=7;d+=7-h;for(var c,f,l,m,_,p=0,y=0;d>p;p++)c=new Date(t,e,1+(p-i)),f=n.mindate&&c<n.mindate||n.maxdate&&c>n.maxdate,_=!(i>p||p>=s+i),c=a(c),l=this.initdate==c.format("YYYY-MM-DD"),m=r==c.format("YYYY-MM-DD"),u.push({selected:l,today:m,disabled:f,day:c,inmonth:_}),7===++y&&(o.days.push(u),u=[],y=0);return o},hide:function(){r&&r===this&&(n.hide(),r=!1)}}),e.$win.on("resize orientationchange",function(){r&&r.hide()}),e.$html.on("focus.datepicker.uikit","[data-uk-datepicker]",function(n){var a=t(this);if(!a.data("datepicker")){n.preventDefault();{e.datepicker(a,e.Utils.options(a.attr("data-uk-datepicker")))}a.trigger("focus")}}),e.$html.on("click.datepicker.uikit",function(e){var a=t(e.target);!r||a[0]==n[0]||a.data("datepicker")||a.parents(".uk-datepicker:first").length||r.hide()}),a=function(t){function e(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function n(t,e){return function(n){return d(t.call(this,n),e)}}function a(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function r(){}function s(t){Y(t),o(this,t)}function i(t){t=m(t);var e=t.year||0,n=t.month||0,a=t.week||0,r=t.day||0;this._milliseconds=+(t.millisecond||0)+1e3*(t.second||0)+6e4*(t.minute||0)+36e5*(t.hour||0),this._days=+r+7*a,this._months=+n+12*e,this._data={},this._bubble()}function o(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return e.hasOwnProperty("toString")&&(t.toString=e.toString),e.hasOwnProperty("valueOf")&&(t.valueOf=e.valueOf),t}function u(t){return 0>t?Math.ceil(t):Math.floor(t)}function d(t,e,n){for(var a=""+Math.abs(t);a.length<e;)a="0"+a;return(t>=0?n?"+":"":"-")+a}function h(t,e,n,a){var r=e._milliseconds,s=e._days;e=e._months;var i,o;r&&t._d.setTime(+t._d+r*n),(s||e)&&(i=t.minute(),o=t.hour()),s&&t.date(t.date()+s*n),e&&t.month(t.month()+e*n),r&&!a&&$.updateOffset(t,s||e),(s||e)&&(t.minute(i),t.hour(o))}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function f(t,e,n){var a,r=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),i=0;for(a=0;r>a;a++)(n&&t[a]!==e[a]||!n&&p(t[a])!==p(e[a]))&&i++;return i+s}function l(t){if(t){var e=t.toLowerCase().replace(/(.)s$/,"$1");t=Fe[t]||Ce[e]||e}return t}function m(t){var e,n,a={};for(n in t)t.hasOwnProperty(n)&&(e=l(n))&&(a[e]=t[n]);return a}function _(e){var n,a;if(0===e.indexOf("week"))n=7,a="day";else{if(0!==e.indexOf("month"))return;n=12,a="month"}$[e]=function(r,s){var i,o,u=$.fn._lang[e],d=[];if("number"==typeof r&&(s=r,r=t),o=function(t){return t=$().utc().set(a,t),u.call($.fn._lang,t,r||"")},null!=s)return o(s);for(i=0;n>i;i++)d.push(o(i));return d}}function p(t){t=+t;var e=0;return 0!==t&&isFinite(t)&&(e=t>=0?Math.floor(t):Math.ceil(t)),e}function y(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function g(t,e,n){return I($([t,11,31+e-n]),e,n).week}function k(t){return 0===t%4&&0!==t%100||0===t%400}function Y(t){var e;t._a&&-2===t._pf.overflow&&(e=0>t._a[R]||11<t._a[R]?R:1>t._a[q]||t._a[q]>y(t._a[Q],t._a[R])?q:0>t._a[X]||23<t._a[X]?X:0>t._a[B]||59<t._a[B]?B:0>t._a[K]||59<t._a[K]?K:0>t._a[te]||999<t._a[te]?te:-1,t._pf._overflowDayOfYear&&(Q>e||e>q)&&(e=q),t._pf.overflow=e)}function w(t){return null==t._isValid&&(t._isValid=!isNaN(t._d.getTime())&&0>t._pf.overflow&&!t._pf.empty&&!t._pf.invalidMonth&&!t._pf.nullInput&&!t._pf.invalidFormat&&!t._pf.userInvalidated,t._strict&&(t._isValid=t._isValid&&0===t._pf.charsLeftOver&&0===t._pf.unusedTokens.length)),t._isValid}function D(t){return t?t.toLowerCase().replace("_","-"):t}function v(t,e){return e._isUTC?$(t).zone(e._offset||0):$(t).local()}function M(t){var e,n,a,r,s=0,i=function(t){if(!ee[t]&&ae)try{require("./lang/"+t)}catch(e){}return ee[t]};if(!t)return $.fn._lang;if(!c(t)){if(n=i(t))return n;t=[t]}for(;s<t.length;){for(r=D(t[s]).split("-"),e=r.length,a=(a=D(t[s+1]))?a.split("-"):null;e>0;){if(n=i(r.slice(0,e).join("-")))return n;if(a&&a.length>=e&&f(r,a,!0)>=e-1)break;e--}s++}return $.fn._lang}function b(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function S(t){var e,n,a=t.match(oe);for(e=0,n=a.length;n>e;e++)a[e]=Pe[a[e]]?Pe[a[e]]:b(a[e]);return function(r){var s="";for(e=0;n>e;e++)s+=a[e]instanceof Function?a[e].call(r,t):a[e];return s}}function T(t,e){return t.isValid()?(e=O(e,t.lang()),Ue[e]||(Ue[e]=S(e)),Ue[e](t)):t.lang().invalidDate()}function O(t,e){function n(t){return e.longDateFormat(t)||t}var a=5;for(ue.lastIndex=0;a>=0&&ue.test(t);)t=t.replace(ue,n),ue.lastIndex=0,a-=1;return t}function W(t,e){var n=e._strict;switch(t){case"DDDD":return we;case"YYYY":case"GGGG":case"gggg":return n?De:ce;case"Y":case"G":case"g":return Me;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return n?ve:fe;case"S":if(n)return ke;case"SS":if(n)return Ye;case"SSS":if(n)return we;case"DDD":return he;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return me;case"a":case"A":return M(e._l)._meridiemParse;case"X":return ye;case"Z":case"ZZ":return _e;case"T":return pe;case"SSSS":return le;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return n?Ye:de;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return de;case"Do":return ge;default:var a,n=RegExp;return a=z(t.replace("\\","")).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),new n(a)}}function G(t){t=(t||"").match(_e)||[],t=((t[t.length-1]||[])+"").match(Oe)||["-",0,0];var e=+(60*t[1])+p(t[2]);return"+"===t[0]?-e:e}function F(t){var e,n,a,r,s,i,o=[];if(!t._d){for(n=C(t),t._w&&null==t._a[q]&&null==t._a[R]&&(e=function(e){var n=parseInt(e,10);return e?3>e.length?n>68?1900+n:2e3+n:n:null==t._a[Q]?$().weekYear():t._a[Q]},a=t._w,null!=a.GG||null!=a.W||null!=a.E?e=A(e(a.GG),a.W||1,a.E,4,1):(r=M(t._l),s=null!=a.d?x(a.d,r):null!=a.e?parseInt(a.e,10)+r._week.dow:0,i=parseInt(a.w,10)||1,null!=a.d&&s<r._week.dow&&i++,e=A(e(a.gg),i,s,r._week.doy,r._week.dow)),t._a[Q]=e.year,t._dayOfYear=e.dayOfYear),t._dayOfYear&&(e=null==t._a[Q]?n[Q]:t._a[Q],t._dayOfYear>(k(e)?366:365)&&(t._pf._overflowDayOfYear=!0),e=P(e,0,t._dayOfYear),t._a[R]=e.getUTCMonth(),t._a[q]=e.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=o[e]=n[e];for(;7>e;e++)t._a[e]=o[e]=null==t._a[e]?2===e?1:0:t._a[e];o[X]+=p((t._tzm||0)/60),o[B]+=p((t._tzm||0)%60),t._d=(t._useUTC?P:L).apply(null,o)}}function C(t){var e=new Date;return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function U(t){t._a=[],t._pf.empty=!0;var e,n,a,r,s=M(t._l),i=""+t._i,o=i.length,u=0;for(n=O(t._f,s).match(oe)||[],s=0;s<n.length;s++)if(a=n[s],(e=(i.match(W(a,t))||[])[0])&&(r=i.substr(0,i.indexOf(e)),0<r.length&&t._pf.unusedInput.push(r),i=i.slice(i.indexOf(e)+e.length),u+=e.length),Pe[a]){e?t._pf.empty=!1:t._pf.unusedTokens.push(a),r=t;var d=void 0,h=r._a;switch(a){case"M":case"MM":null!=e&&(h[R]=p(e)-1);break;case"MMM":case"MMMM":d=M(r._l).monthsParse(e),null!=d?h[R]=d:r._pf.invalidMonth=e;break;case"D":case"DD":null!=e&&(h[q]=p(e));break;case"Do":null!=e&&(h[q]=p(parseInt(e,10)));break;case"DDD":case"DDDD":null!=e&&(r._dayOfYear=p(e));break;case"YY":h[Q]=p(e)+(68<p(e)?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":h[Q]=p(e);break;case"a":case"A":r._isPm=M(r._l).isPM(e);break;case"H":case"HH":case"h":case"hh":h[X]=p(e);break;case"m":case"mm":h[B]=p(e);break;case"s":case"ss":h[K]=p(e);break;case"S":case"SS":case"SSS":case"SSSS":h[te]=p(1e3*("0."+e));break;case"X":r._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":r._useUTC=!0,r._tzm=G(e);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),e&&(r._w=r._w||{},r._w[a]=e)}}else t._strict&&!e&&t._pf.unusedTokens.push(a);t._pf.charsLeftOver=o-u,0<i.length&&t._pf.unusedInput.push(i),t._isPm&&12>t._a[X]&&(t._a[X]+=12),!1===t._isPm&&12===t._a[X]&&(t._a[X]=0),F(t),Y(t)}function z(t){return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,a,r){return e||n||a||r})}function L(t,e,n,a,r,s,i){return e=new Date(t,e,n,a,r,s,i),1970>t&&e.setFullYear(t),e}function P(t){var e=new Date(Date.UTC.apply(null,arguments));return 1970>t&&e.setUTCFullYear(t),e}function x(t,e){if("string"==typeof t)if(isNaN(t)){if(t=e.weekdaysParse(t),"number"!=typeof t)return null}else t=parseInt(t,10);return t}function H(t,e,n,a,r){return r.relativeTime(e||1,!!n,t,a)}function I(t,e,n){return e=n-e,n-=t.day(),n>e&&(n-=7),e-7>n&&(n+=7),t=$(t).add("d",n),{week:Math.ceil(t.dayOfYear()/7),year:t.year()}}function A(t,e,n,a,r){var s=P(t,0,1).getUTCDay();return e=7*(e-1)+((null!=n?n:r)-r)+(r-s+(s>a?7:0)-(r>s?7:0))+1,{year:e>0?t:t-1,dayOfYear:e>0?e:(k(t-1)?366:365)+e}}function Z(n){var a=n._i,r=n._f;if(null===a)return $.invalid({nullInput:!0});if("string"==typeof a&&(n._i=a=M().preparse(a)),$.isMoment(a)){n=a;var i,u={};for(i in n)n.hasOwnProperty(i)&&ne.hasOwnProperty(i)&&(u[i]=n[i]);n=u,n._d=new Date(+a._d)}else if(r)if(c(r)){var d,h,a=n;if(0===a._f.length)a._pf.invalidFormat=!0,a._d=new Date(0/0);else{for(i=0;i<a._f.length;i++)r=0,u=o({},a),u._pf=e(),u._f=a._f[i],U(u),w(u)&&(r+=u._pf.charsLeftOver,r+=10*u._pf.unusedTokens.length,u._pf.score=r,null==h||h>r)&&(h=r,d=u);o(a,d||u)}}else U(n);else if(u=n,d=u._i,h=re.exec(d),d===t)u._d=new Date;else if(h)u._d=new Date(+h[1]);else if("string"==typeof d)if(a=u._i,i=be.exec(a)){for(u._pf.iso=!0,d=0,h=Se.length;h>d;d++)if(Se[d][1].exec(a)){u._f=Se[d][0]+(i[6]||" ");break}for(d=0,h=Te.length;h>d;d++)if(Te[d][1].exec(a)){u._f+=Te[d][0];break}a.match(_e)&&(u._f+="Z"),U(u)}else u._d=new Date(a);else c(d)?(u._a=d.slice(0),F(u)):"[object Date]"===Object.prototype.toString.call(d)||d instanceof Date?u._d=new Date(+d):"object"==typeof d?u._d||(d=m(u._i),u._a=[d.year,d.month,d.day,d.hour,d.minute,d.second,d.millisecond],F(u)):u._d=new Date(d);return new s(n)}function j(t,e){var n="date"===e||"month"===e||"year"===e;$.fn[t]=$.fn[t+"s"]=function(t,a){var r=this._isUTC?"UTC":"";return null==a&&(a=n),null!=t?(this._d["set"+r+e](t),$.updateOffset(this,a),this):this._d["get"+r+e]()}}function N(t){$.duration.fn[t]=function(){return this._data[t]}}function E(t,e){$.duration.fn["as"+t]=function(){return+this/e}}for(var $,J,V=Math.round,Q=0,R=1,q=2,X=3,B=4,K=5,te=6,ee={},ne={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},ae="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,re=/^\/?Date\((\-?\d+)/i,se=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ie=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,oe=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,ue=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,de=/\d\d?/,he=/\d{1,3}/,ce=/\d{1,4}/,fe=/[+\-]?\d{1,6}/,le=/\d+/,me=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,_e=/Z|[\+\-]\d\d:?\d\d/gi,pe=/T/i,ye=/[\+\-]?\d+(\.\d{1,3})?/,ge=/\d{1,2}/,ke=/\d/,Ye=/\d\d/,we=/\d{3}/,De=/\d{4}/,ve=/[+-]?\d{6}/,Me=/[+-]?\d+/,be=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Se=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Te=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Oe=/([\+\-]|\d\d)/gi,We=["Date","Hours","Minutes","Seconds","Milliseconds"],Ge={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Fe={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Ce={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Ue={},ze="DDD w W M D d".split(" "),Le="MDHhmswW".split(""),Pe={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return d(this.year()%100,2)},YYYY:function(){return d(this.year(),4)},YYYYY:function(){return d(this.year(),5)},YYYYYY:function(){var t=this.year();return(t>=0?"+":"-")+d(Math.abs(t),6)},gg:function(){return d(this.weekYear()%100,2)},gggg:function(){return d(this.weekYear(),4)},ggggg:function(){return d(this.weekYear(),5)},GG:function(){return d(this.isoWeekYear()%100,2)},GGGG:function(){return d(this.isoWeekYear(),4)},GGGGG:function(){return d(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return p(this.milliseconds()/100)},SS:function(){return d(p(this.milliseconds()/10),2)},SSS:function(){return d(this.milliseconds(),3)},SSSS:function(){return d(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+d(p(t/60),2)+":"+d(p(t)%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+d(p(t/60),2)+d(p(t)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},xe=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];ze.length;)J=ze.pop(),Pe[J+"o"]=a(Pe[J],J);for(;Le.length;)J=Le.pop(),Pe[J+J]=n(Pe[J],2);for(Pe.DDDD=n(Pe.DDD,3),o(r.prototype,{set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January February March April May June July August September October November December".split(" "),months:function(t){return this._months[t.month()]},_monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=$.utc([2e3,e]),n="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=RegExp(n.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su Mo Tu We Th Fr Sa".split(" "),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=$([2e3,1]).day(e),n="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=RegExp(n.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,a){var r=this._relativeTime[n];return"function"==typeof r?r(t,e,n,a):r.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return I(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),$=function(n,a,r,s){var i;return"boolean"==typeof r&&(s=r,r=t),i={_isAMomentObject:!0},i._i=n,i._f=a,i._l=r,i._strict=s,i._isUTC=!1,i._pf=e(),Z(i)},$.utc=function(n,a,r,s){var i;return"boolean"==typeof r&&(s=r,r=t),i={_isAMomentObject:!0,_useUTC:!0,_isUTC:!0},i._l=r,i._i=n,i._f=a,i._strict=s,i._pf=e(),Z(i).utc()},$.unix=function(t){return $(1e3*t)},$.duration=function(t,e){var n,a=t,r=null;return $.isDuration(t)?a={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(a={},e?a[e]=t:a.milliseconds=t):(r=se.exec(t))?(n="-"===r[1]?-1:1,a={y:0,d:p(r[q])*n,h:p(r[X])*n,m:p(r[B])*n,s:p(r[K])*n,ms:p(r[te])*n}):(r=ie.exec(t))&&(n="-"===r[1]?-1:1,a=function(t){return t=t&&parseFloat(t.replace(",",".")),(isNaN(t)?0:t)*n},a={y:a(r[2]),M:a(r[3]),d:a(r[4]),h:a(r[5]),m:a(r[6]),s:a(r[7]),w:a(r[8])}),r=new i(a),$.isDuration(t)&&t.hasOwnProperty("_lang")&&(r._lang=t._lang),r},$.version="2.5.1",$.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",$.updateOffset=function(){},$.lang=function(t,e){if(!t)return $.fn._lang._abbr;if(e){var n=D(t);e.abbr=n,ee[n]||(ee[n]=new r),ee[n].set(e)}else null===e?(delete ee[t],t="en"):ee[t]||M(t);return($.duration.fn._lang=$.fn._lang=M(t))._abbr},$.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),M(t)},$.isMoment=function(t){return t instanceof s||null!=t&&t.hasOwnProperty("_isAMomentObject")},$.isDuration=function(t){return t instanceof i},J=xe.length-1;J>=0;--J)_(xe[J]);for($.normalizeUnits=function(t){return l(t)},$.invalid=function(t){var e=$.utc(0/0);return null!=t?o(e._pf,t):e._pf.userInvalidated=!0,e},$.parseZone=function(){return $.apply(null,arguments).parseZone()},o($.fn=s.prototype,{clone:function(){return $(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var t=$(this).utc();return 0<t.year()&&9999>=t.year()?T(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):T(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){return[this.year(),this.month(),this.date(),this.hours(),this.minutes(),this.seconds(),this.milliseconds()]},isValid:function(){return w(this)},isDSTShifted:function(){return this._a?this.isValid()&&0<f(this._a,(this._isUTC?$.utc(this._a):$(this._a)).toArray()):!1},parsingFlags:function(){return o({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){return t=T(this,t||$.defaultFormat),this.lang().postformat(t)},add:function(t,e){var n;return n="string"==typeof t?$.duration(+e,t):$.duration(t,e),h(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?$.duration(+e,t):$.duration(t,e),h(this,n,-1),this},diff:function(t,e,n){t=v(t,this);var a,r=6e4*(this.zone()-t.zone());return e=l(e),"year"===e||"month"===e?(a=432e5*(this.daysInMonth()+t.daysInMonth()),r=12*(this.year()-t.year())+(this.month()-t.month()),r+=(this-$(this).startOf("month")-(t-$(t).startOf("month")))/a,r-=6e4*(this.zone()-$(this).startOf("month").zone()-(t.zone()-$(t).startOf("month").zone()))/a,"year"===e&&(r/=12)):(a=this-t,r="second"===e?a/1e3:"minute"===e?a/6e4:"hour"===e?a/36e5:"day"===e?(a-r)/864e5:"week"===e?(a-r)/6048e5:a),n?r:u(r)},from:function(t,e){return $.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from($(),t)},calendar:function(){var t=v($(),this).startOf("day"),t=this.diff(t,"days",!0),t=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(t,this))},isLeapYear:function(){return k(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=x(t,this.lang()),this.add({d:t-e})):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=Math.min(this.date(),y(this.year(),t)),this._d["set"+n+"Month"](t,e),$.updateOffset(this,!0),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=l(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t?this.weekday(0):"isoWeek"===t&&this.isoWeekday(1),this},endOf:function(t){return t=l(t),this.startOf(t).add("isoWeek"===t?"week":t,1).subtract("ms",1)},isAfter:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+$(t).startOf(e)},isBefore:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+$(t).startOf(e)},isSame:function(t,e){return e=e||"ms",+this.clone().startOf(e)===+v(t,this).startOf(e)},min:function(t){return t=$.apply(null,arguments),this>t?this:t},max:function(t){return t=$.apply(null,arguments),t>this?this:t},zone:function(t,e){e=null==e?!0:!1;var n=this._offset||0;return null==t?this._isUTC?n:this._d.getTimezoneOffset():("string"==typeof t&&(t=G(t)),16>Math.abs(t)&&(t*=60),this._offset=t,this._isUTC=!0,n!==t&&e&&h(this,$.duration(n-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(t){return t=t?$(t).zone():0,0===(this.zone()-t)%60},daysInMonth:function(){return y(this.year(),this.month())},dayOfYear:function(t){var e=V(($(this).startOf("day")-$(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(t){var e=I(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=I(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=I(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this.day()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},isoWeeksInYear:function(){return g(this.year(),1,4)},weeksInYear:function(){var t=this._lang._week;return g(this.year(),t.dow,t.doy)},get:function(t){return t=l(t),this[t]()},set:function(t,e){return t=l(t),"function"==typeof this[t]&&this[t](e),this},lang:function(e){return e===t?this._lang:(this._lang=M(e),this)}}),J=0;J<We.length;J++)j(We[J].toLowerCase().replace(/s$/,""),We[J]);j("year","FullYear"),$.fn.days=$.fn.day,$.fn.months=$.fn.month,$.fn.weeks=$.fn.week,$.fn.isoWeeks=$.fn.isoWeek,$.fn.toJSON=$.fn.toISOString,o($.duration.fn=i.prototype,{_bubble:function(){var t=this._milliseconds,e=this._days,n=this._months,a=this._data;a.milliseconds=t%1e3,t=u(t/1e3),a.seconds=t%60,t=u(t/60),a.minutes=t%60,t=u(t/60),a.hours=t%24,e+=u(t/24),a.days=e%30,n+=u(e/30),a.months=n%12,e=u(n/12),a.years=e},weeks:function(){return u(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*p(this._months/12)},humanize:function(t){var e,n=+this;e=!t;var a=this.lang(),r=V(Math.abs(n)/1e3),s=V(r/60),i=V(s/60),o=V(i/24),u=V(o/365),r=45>r&&["s",r]||1===s&&["m"]||45>s&&["mm",s]||1===i&&["h"]||22>i&&["hh",i]||1===o&&["d"]||25>=o&&["dd",o]||45>=o&&["M"]||345>o&&["MM",V(o/30)]||1===u&&["y"]||["yy",u];return r[2]=e,r[3]=n>0,r[4]=a,e=H.apply({},r),t&&(e=this.lang().pastFuture(n,e)),this.lang().postformat(e)},add:function(t,e){var n=$.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=$.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=l(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=l(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:$.fn.lang,toIsoString:function(){var t=Math.abs(this.years()),e=Math.abs(this.months()),n=Math.abs(this.days()),a=Math.abs(this.hours()),r=Math.abs(this.minutes()),s=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(0>this.asSeconds()?"-":"")+"P"+(t?t+"Y":"")+(e?e+"M":"")+(n?n+"D":"")+(a||r||s?"T":"")+(a?a+"H":"")+(r?r+"M":"")+(s?s+"S":""):"P0D"}});for(J in Ge)Ge.hasOwnProperty(J)&&(E(J,Ge[J]),N(J.toLowerCase()));return E("Weeks",6048e5),$.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},$.lang("en",{ordinal:function(t){var e=t%10,e=1===p(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+e}}),$}.call(this),e.datepicker.moment=a,e.datepicker});