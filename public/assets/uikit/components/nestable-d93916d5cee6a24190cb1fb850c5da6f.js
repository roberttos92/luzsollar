!function(t){var e;jQuery&&jQuery.UIkit&&(e=t(jQuery,jQuery.UIkit)),"function"==typeof define&&define.amd&&define("uikit-nestable",["uikit"],function(){return e||t(jQuery,jQuery.UIkit)})}(function(t,e){var s,i="ontouchstart"in window,n=t("html"),a=[],l=e.$win,o=function(){var t=document.createElement("div"),e=document.documentElement;if(!("pointerEvents"in t.style))return!1;t.style.pointerEvents="auto",t.style.pointerEvents="x",e.appendChild(t);var s=window.getComputedStyle&&"auto"===window.getComputedStyle(t,"").pointerEvents;return e.removeChild(t),!!s}(),r=i?"touchstart":"mousedown",d=i?"touchmove":"mousemove",h=i?"touchend":"mouseup",p=i?"touchcancel":"mouseup";return e.component("nestable",{defaults:{prefix:"uk",listNodeName:"ul",itemNodeName:"li",listBaseClass:"{prefix}-nestable",listClass:"{prefix}-nestable-list",listitemClass:"{prefix}-nestable-list-item",itemClass:"{prefix}-nestable-item",dragClass:"{prefix}-nestable-list-dragged",movingClass:"{prefix}-nestable-moving",handleClass:"{prefix}-nestable-handle",collapsedClass:"{prefix}-collapsed",placeClass:"{prefix}-nestable-placeholder",noDragClass:"{prefix}-nestable-nodrag",emptyClass:"{prefix}-nestable-empty",group:0,maxDepth:10,threshold:20},init:function(){var e=this;Object.keys(this.options).forEach(function(t){-1!=String(e.options[t]).indexOf("{prefix}")&&(e.options[t]=e.options[t].replace("{prefix}",e.options.prefix))}),this.tplempty='<div class="'+this.options.emptyClass+'"/>',this.find(">"+this.options.itemNodeName).addClass(this.options.listitemClass).end().find("ul:not(.ignore-list)").addClass(this.options.listClass).find(">li").addClass(this.options.listitemClass),this.element.children(this.options.itemNodeName).length||this.element.append(this.tplempty),this.element.data("nestable-id","ID"+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())),this.reset(),this.element.data("nestable-group",this.options.group),this.placeEl=t('<div class="'+this.options.placeClass+'"/>'),this.find(this.options.itemNodeName).each(function(){e.setParent(t(this))}),this.on("click","[data-nestable-action]",function(s){if(!e.dragEl&&(i||0===s.button)){s.preventDefault();var n=t(s.currentTarget),a=n.data("nestableAction"),l=n.closest(e.options.itemNodeName);"collapse"===a&&e.collapseItem(l),"expand"===a&&e.expandItem(l),"toggle"===a&&e.toggleItem(l)}});var n=function(s){var n=t(s.target);if(!n.hasClass(e.options.handleClass)){if(n.closest("."+e.options.noDragClass).length)return;n=n.closest("."+e.options.handleClass)}!n.length||e.dragEl||!i&&0!==s.button||i&&1!==s.touches.length||(s.preventDefault(),e.dragStart(i?s.touches[0]:s),e.trigger("uk.nestable.start",[e]))},a=function(t){e.dragEl&&(t.preventDefault(),e.dragMove(i?t.touches[0]:t),e.trigger("uk.nestable.move",[e]))},o=function(t){e.dragEl&&(t.preventDefault(),e.dragStop(i?t.touches[0]:t),e.trigger("uk.nestable.stop",[e])),s=!1};i?(this.element[0].addEventListener(r,n,!1),window.addEventListener(d,a,!1),window.addEventListener(h,o,!1),window.addEventListener(p,o,!1)):(this.on(r,n),l.on(d,a),l.on(h,o))},serialize:function(){var e,s=0,i=this;return step=function(e,s){var n=[],a=e.children(i.options.itemNodeName);return a.each(function(){var e=t(this),a=t.extend({},e.data()),l=e.children(i.options.listNodeName);l.length&&(a.children=step(l,s+1)),n.push(a)}),n},e=step(i.element,s)},list:function(e){var s=[],i=this,n=0,e=t.extend({},i.options,e),a=function(i,n,l){var o=i.children(e.itemNodeName);o.each(function(i){var o=t(this),r=t.extend({parent_id:l?l:null,depth:n,order:i},o.data()),d=o.children(e.listNodeName);s.push(r),d.length&&a(d,n+1,o.data(e.idProperty||"id"))})};return a(i.element,n),s},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null;for(var t=0;t<a.length;t++)a[t].children().length||a[t].append(this.tplempty);a=[]},toggleItem:function(t){this[t.hasClass(this.options.collapsedClass)?"expandItem":"collapseItem"](t)},expandItem:function(t){t.removeClass(this.options.collapsedClass)},collapseItem:function(t){var e=t.children(this.options.listNodeName);e.length&&t.addClass(this.options.collapsedClass)},expandAll:function(){var e=this;this.find(e.options.itemNodeName).each(function(){e.expandItem(t(this))})},collapseAll:function(){var e=this;this.find(e.options.itemNodeName).each(function(){e.collapseItem(t(this))})},setParent:function(t){t.children(this.options.listNodeName).length&&t.addClass("uk-parent")},unsetParent:function(t){t.removeClass("uk-parent "+this.options.collapsedClass),t.children(this.options.listNodeName).remove()},dragStart:function(e){var i=this.mouse,a=t(e.target),l=a.closest(this.options.itemNodeName),o=l.offset();this.placeEl.css("height",l.height()),i.offsetX=e.pageX-o.left,i.offsetY=e.pageY-o.top,i.startX=i.lastX=o.left,i.startY=i.lastY=o.top,this.dragRootEl=this.element,this.dragEl=t(document.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",l.width()),s=this.dragEl,this.tmpDragOnSiblings=[l[0].previousSibling,l[0].nextSibling],l.after(this.placeEl),l[0].parentNode.removeChild(l[0]),l.appendTo(this.dragEl),t(document.body).append(this.dragEl),this.dragEl.css({left:o.left,top:o.top});var r,d,h=this.dragEl.find(this.options.itemNodeName);for(r=0;r<h.length;r++)d=t(h[r]).parents(this.options.listNodeName).length,d>this.dragDepth&&(this.dragDepth=d);n.addClass(this.options.movingClass)},dragStop:function(){var t=this.dragEl.children(this.options.itemNodeName).first();t[0].parentNode.removeChild(t[0]),this.placeEl.replaceWith(t),this.dragEl.remove(),(this.tmpDragOnSiblings[0]!=t[0].previousSibling||this.tmpDragOnSiblings[0]!=t[0].previousSibling)&&(this.element.trigger("uk.nestable.change",[t,this.hasNewRoot?"added":"moved"]),this.hasNewRoot&&this.dragRootEl.trigger("uk.nestable.change",[t,"removed"])),this.reset(),n.removeClass(this.options.movingClass)},dragMove:function(e){var s,i,n,l,r,d=this.options,h=this.mouse;this.dragEl.css({left:e.pageX-h.offsetX,top:e.pageY-h.offsetY}),h.lastX=h.nowX,h.lastY=h.nowY,h.nowX=e.pageX,h.nowY=e.pageY,h.distX=h.nowX-h.lastX,h.distY=h.nowY-h.lastY,h.lastDirX=h.dirX,h.lastDirY=h.dirY,h.dirX=0===h.distX?0:h.distX>0?1:-1,h.dirY=0===h.distY?0:h.distY>0?1:-1;var p=Math.abs(h.distX)>Math.abs(h.distY)?1:0;if(!h.moving)return h.dirAx=p,void(h.moving=!0);h.dirAx!==p?(h.distAxX=0,h.distAxY=0):(h.distAxX+=Math.abs(h.distX),0!==h.dirX&&h.dirX!==h.lastDirX&&(h.distAxX=0),h.distAxY+=Math.abs(h.distY),0!==h.dirY&&h.dirY!==h.lastDirY&&(h.distAxY=0)),h.dirAx=p,h.dirAx&&h.distAxX>=d.threshold&&(h.distAxX=0,n=this.placeEl.prev(d.itemNodeName),h.distX>0&&n.length&&!n.hasClass(d.collapsedClass)&&(s=n.find(d.listNodeName).last(),r=this.placeEl.parents(d.listNodeName).length,r+this.dragDepth<=d.maxDepth&&(s.length?(s=n.children(d.listNodeName).last(),s.append(this.placeEl)):(s=t("<"+d.listNodeName+"/>").addClass(d.listClass),s.append(this.placeEl),n.append(s),this.setParent(n)))),h.distX<0&&(l=this.placeEl.next(d.itemNodeName),l.length||(i=this.placeEl.parent(),this.placeEl.closest(d.itemNodeName).after(this.placeEl),i.children().length||this.unsetParent(i.parent()))));var c=!1;if(o||(this.dragEl[0].style.visibility="hidden"),this.pointEl=t(document.elementFromPoint(e.pageX-document.body.scrollLeft,e.pageY-(window.pageYOffset||document.documentElement.scrollTop))),o||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(d.handleClass))this.pointEl=this.pointEl.closest(d.itemNodeName);else{var m=this.pointEl.closest("."+d.itemClass);m.length&&(this.pointEl=m.closest(d.itemNodeName))}if(this.pointEl.hasClass(d.emptyClass))c=!0;else if(this.pointEl.data("nestable")&&!this.pointEl.children().length)c=!0,this.pointEl=t(this.tplempty).appendTo(this.pointEl);else if(!this.pointEl.length||!this.pointEl.hasClass(d.listitemClass))return;var g=this.element,u=this.pointEl.closest("."+this.options.listBaseClass),f=g[0]!==this.pointEl.closest("."+this.options.listBaseClass)[0],v=u;if(!h.dirAx||f||c){if(f&&d.group!==v.data("nestable-group"))return;if(a.push(g),r=this.dragDepth-1+this.pointEl.parents(d.listNodeName).length,r>d.maxDepth)return;var E=e.pageY<this.pointEl.offset().top+this.pointEl.height()/2;i=this.placeEl.parent(),c?this.pointEl.replaceWith(this.placeEl):E?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),i.children().length||i.data("nestable")||this.unsetParent(i.parent()),this.dragRootEl.find(d.itemNodeName).length||this.dragRootEl.children().length||this.dragRootEl.append(this.tplempty),f&&(this.dragRootEl=u,this.hasNewRoot=this.element[0]!==this.dragRootEl[0])}}}),t("html").on("mousemove touchmove",function(){if(s){var t=s.offset().top;t<e.$win.scrollTop()?e.$win.scrollTop(e.$win.scrollTop()-Math.ceil(s.height()/2)):t+s.height()>window.innerHeight+e.$win.scrollTop()&&e.$win.scrollTop(e.$win.scrollTop()+Math.ceil(s.height()/2))}}),e.ready(function(s){t("[data-uk-nestable]",s).each(function(){var s=t(this);if(!s.data("nestable")){e.nestable(s,e.Utils.options(s.attr("data-uk-nestable")))}})}),e.nestable});