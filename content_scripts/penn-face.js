var cursorURL1 = '../assets/amyghappy-cursor.png';
var cursorURL2 = '../assets/amygsad-cursor.png';

$("body").css({'cursor': 'url(https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amyghappy-cursor.png), default'});

var mouseDownFunction = function (e) {
  $("body").css({'cursor': 'url(https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amygsad-cursor.png), auto'});
}

var mouseUpFunction = function (e) {
  $("body").css({'cursor': 'url(https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amyghappy-cursor.png), auto'});
}

window.addEventListener("mousedown", mouseDownFunction);
window.addEventListener("mouseup", mouseUpFunction);


