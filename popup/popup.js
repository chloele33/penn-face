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


currentFace.appendChild(image);
currentFace.appendChild(image2);
