var currentFace = document.getElementById("currentFace");

var cursorURL1;
var cursorURL2;

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
              var image = document.createElement("img");
              image.setAttribute("src", cursorURL1);

              var image2 = document.createElement("img");
              image2.setAttribute("src", cursorURL2);

              function setFace(path) {
                image.setAttribute("src", path);
                image2.setAttribute("src", path);
              }

              image.setAttribute("width", "70");
              image.setAttribute("height", "auto");
              image2.setAttribute("width", "70");
              image2.setAttribute("height", "auto");

              currentFace.appendChild(image);
              currentFace.appendChild(image2);
          }
      });
    }
});



document.getElementById("library").onclick = function() {
  // Fixes dual-screen position                         Most browsers      Firefox
  var left = ((screen.width / 2) - (500 / 2));
  var top = ((screen.height / 2) - (500 / 2));
  newwindow=window.open('/popup/library.html','name','scrollbars = yes, height=500,width=500, top=' + top + ',left =' + left);
  if (window.focus) {
    newwindow.focus()
  }
  return false;
};


function uploadFace() {
  var url = "chrome-extension://eknlcodhikmedmhehebepnppiaileabg/chooseface/chooseface.html";
  window.origin.open(url);
}
