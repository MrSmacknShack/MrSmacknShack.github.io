
setInterval(gameLoop, 50);

var x = 50;

function gameLoop() {

	x += 2;
	document.getElementById("tank1").style.left = x + "px";

}