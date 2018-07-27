let carRouge;
let carJaune;
let bg1;
let bg2;
let bg3;
let score = 0;
let time = 0;
let im1,im2,im3;
function preload(){

	im1 = loadImage("./../images/bg.png");
	im2 = loadImage("./../images/vj.png");
	im3 = loadImage("./../images/vr.png");
}
function setup(){

	createCanvas(400,760);
	carJaune = new Car(width / 2,0,im2,4,0);
	carRouge = new Car(random(70,width-70-im2.width),height,im3,0,-4);
	bg1 = new Screen(im1,0,0);
	bg2 = new Screen(im1,0,im1.height / 2);
	bg3 = new Screen(im1,0,im1.height);
}

function draw(){

	if(frameCount%60 == 0) time++;
	background(0);
	bg3.update();
	bg1.update();
	bg2.update();
	if(bg2.y <= 0){
		bg2.y = height / 2;
		bg3.y = height;
		bg1.y = 0;
	}

	//check the key events
	if(keyIsDown(LEFT_ARROW)) carJaune.updateX(LEFT_ARROW);
	else if(keyIsDown(RIGHT_ARROW)) carJaune.updateX(RIGHT_ARROW);

	fill("#FF0000");
	image(bg1.img,bg1.x,bg1.y);
	image(bg2.img,bg2.x,bg2.y);
	image(bg3.img,bg3.x,bg3.y);
	image(carJaune.img,carJaune.x,carJaune.y);
	image(carRouge.img,carRouge.x,carRouge.y);
	carRouge.updateY(carJaune);
	carRouge.collide(carJaune);
	text("Elapsed time : " + time,20,20);
	text("Score : " + carJaune.score,150,20);

}

function stop(){

	noLoop();
	fill(255);
	text("You loose, your score is " + carJaune.score + ". Press enter to replay",0,height / 2);
}

function keyPressed(){

	if(keyCode == 13){

		time = 0;
		carJaune = new Car(width / 2,0,im2,4,0);
		carRouge = new Car(random(70,width-70-im2.width),height,im3,0,-6);
		loop();
	}
}