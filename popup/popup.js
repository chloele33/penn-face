var currentFace = document.getElementById("currentFace");

var image = document.createElement("img");
image.setAttribute("src", "../assets/amyghappy.png");

function setFace(path) {
  image.setAttribute("src", path);
}

image.setAttribute("width", "70");
image.setAttribute("height", "auto");

currentFace.appendChild(image);

function chooseFace1() {
  window.open ("http://jsc.simfatic-solutions.com","mywindow","status=1");
}
