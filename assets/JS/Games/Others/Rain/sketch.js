var rain = [];
function setup(){

	createCanvas(windowWidth,windowHeight);
	for(var i = 0;i<600;i++){
		rain[i] = new Rain();
	}

	fill(10, 215, 255, 100);
	noStroke();
}

function draw(){

	background(0,150);
	for(var i = 0;i<rain.length;i++){
		rain[i].show();
		rain[i].update(rain);
	}
}

function windowResized(){

	resizeCanvas(windowWidth,windowHeight);
}