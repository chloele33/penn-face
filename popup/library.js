document.getElementById("amy1").addEventListener("click", changeAmy)
document.getElementById("amy2").addEventListener("click", changeAmy)
document.getElementById("cjt1").addEventListener("click", changeCJ)
document.getElementById("cjt2").addEventListener("click", changeCJ)
document.getElementById("raj1").addEventListener("click", changeRaj)
document.getElementById("raj2").addEventListener("click", changeRaj)
document.getElementById("san1").addEventListener("click", changeSan)
document.getElementById("san2").addEventListener("click", changeSan)
document.getElementById("ste1").addEventListener("click", changeSte)
document.getElementById("ste2").addEventListener("click", changeSte)
document.getElementById("ccb1").addEventListener("click", changeCCB)
document.getElementById("ccb2").addEventListener("click", changeCCB)


function reset() {
	var happy = document.getElementsByClassName("activehappy")[0];
	happy.classList.remove("activehappy");
	var sad = document.getElementsByClassName("activesad")[0];
	sad.classList.remove("activesad");
}

function changeAmy() {
	reset();

	var amy1 = document.getElementById("amy1");
	amy1.classList.add("activehappy");
	var amy2 = document.getElementById("amy2");
	amy2.classList.add("activesad");
}

function changeCJ() {
	reset();

	var cjt1 = document.getElementById("cjt1");
	cjt1.classList.add("activehappy");
	var cjt2 = document.getElementById("cjt2");
	cjt2.classList.add("activesad");
}

function changeRaj() {
	reset();

	var raj1 = document.getElementById("raj1");
	raj1.classList.add("activehappy");
	var raj2 = document.getElementById("raj2");
	raj2.classList.add("activesad");
}

function changeSan() {
	reset();

	var san1 = document.getElementById("san1");
	san1.classList.add("activehappy");
	var san2 = document.getElementById("san2");
	san2.classList.add("activesad");
}

function changeSte() {
	reset();

	var ste1 = document.getElementById("ste1");
	ste1.classList.add("activehappy");
	var ste2 = document.getElementById("ste2");
	ste2.classList.add("activesad");
}

function changeCCB() {
	reset();

	var ccb1 = document.getElementById("ccb1");
	ccb1.classList.add("activehappy");
	var ccb2 = document.getElementById("ccb2");
	ccb2.classList.add("activesad");
}