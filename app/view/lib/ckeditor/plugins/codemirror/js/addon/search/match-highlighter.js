﻿(function(){function e(a){this.minChars="object"==typeof a&&a.minChars||f;this.style="object"==typeof a&&a.style||g;this.overlay=null}function d(a){a.operation(function(){var b=a._matchHighlightState;b.overlay&&(a.removeOverlay(b.overlay),b.overlay=null);if(a.somethingSelected()){var c=a.getSelection().replace(/^\s+|\s+$/g,"");c.length<b.minChars||a.addOverlay(b.overlay=h(c,b.style))}})}function h(a,b){return{token:function(c){if(c.match(a))return b;c.next();c.skipTo(a.charAt(0))||c.skipToEnd()}}}
var f=2,g="matchhighlight";CodeMirror.defineOption("highlightSelectionMatches",!1,function(a,b,c){c=c&&c!=CodeMirror.Init;if(b&&!c){a._matchHighlightState=new e(b);a.on("cursorActivity",d)}else if(!b&&c){(b=a._matchHighlightState.overlay)&&a.removeOverlay(b);a._matchHighlightState=null;a.off("cursorActivity",d)}})})();