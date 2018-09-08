var cursorURL1 = 'https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amyghappy-cursor.png';
var cursorURL2 = 'https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amygsad-cursor.png';

$("body").css({'cursor': 'url(' + cursorURL1 + '), default'});

var mouseDownFunction = function (e) {
  $("body").css({'cursor': 'url(' + cursorURL2 + '), default'});
}

var mouseUpFunction = function (e) {
  $("body").css({'cursor': 'url(' + cursorURL1 + '), default'});
}

window.addEventListener("mousedown", mouseDownFunction);
window.addEventListener("mouseup", mouseUpFunction);


