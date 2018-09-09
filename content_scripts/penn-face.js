var cursorURL1 = 'https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amyghappy-cursor.png';
var cursorURL2 = 'https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amygsad-cursor.png';

chrome.storage.local.set({cursorURL1: cursorURL1});
chrome.storage.local.set({cursorURL2: cursorURL2});

chrome.storage.local.get("cursorURL1", function(data) {
    if(typeof data.cursorURL1 == "undefined") {
        // That's kind of bad
    } else {
        cursorURL1 = data.cursorURL1;
        chrome.storage.local.get("cursorURL2", function(data) {
            if(typeof data.cursorURL2 == "undefined") {
              // That's kind of bad
            } else {
              // Use data.count
              cursorURL2 = data.cursorURL2;
          }
      });
    }
});


$("body").css({'cursor': 'url(' + cursorURL1 + '), default'});

var mouseDownFunction = function (e) {
  $("body").css({'cursor': 'url(' + cursorURL2 + '), default'});
}

var mouseUpFunction = function (e) {
  $("body").css({'cursor': 'url(' + cursorURL1 + '), default'});
}

window.addEventListener("mousedown", mouseDownFunction);
window.addEventListener("mouseup", mouseUpFunction);


