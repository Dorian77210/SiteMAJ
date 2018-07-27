
function setup(){

	createCanvas(windowWidth,windowHeight);
	for(var i = 0;i<60;i++){
		bubbles[i] = new Bubble();
	}
	fill(10, 215, 255, 100);
	noStroke();
}

function draw(){

	background(0,150);
	for(var i = 0;i<bubbles.length;i++){

		bubbles[i].show();
		bubbles[i].update();
	}
}

function windowResized(){

	resizeCanvas(windowWidth,windowHeight);
}