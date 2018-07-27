var n = 6;/*variable qui permet de dessiner n triangle*/
function setup() {
	
	createCanvas(windowWidth,windowHeight);
	stroke(0,0,0);
	strokeWeight(10);
}

function draw() {
	background(255);
	var v1 = new Vector(20,height - 20);
	var v2 = new Vector(width/2,20);
	var v3 = new Vector(width - 20,height - 20);
	drawTriangle(v1,v2,v3,n);
}

function windowResized() {

	resizeCanvas(windowWidth,windowHeight);
}