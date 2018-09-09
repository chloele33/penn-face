var currentFace = document.getElementById("currentFace");

var image = document.createElement("img");
image.setAttribute("src", "../assets/amyghappy.png");

var image2 = document.createElement("img");
image2.setAttribute("src", "../assets/amygsad.png");

function setFace(path) {
  image.setAttribute("src", path);
  image2.setAttribute("src", path);
}

image.setAttribute("width", "70");
image.setAttribute("height", "auto");
image2.setAttribute("width", "70");
image2.setAttribute("height", "auto");


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


currentFace.appendChild(image);
currentFace.appendChild(image2);
