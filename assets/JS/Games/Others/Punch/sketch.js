
/*CONSTANTS*/
let LENGHT_DIR = 5;
let i;
let img;
let img2;
let fist;
let pause = false;
let end = false;
let time = 0;
let difficulty = 1;
/*tables*/
let sprites = [];
let spritesImg = [];
function preload(){

	img = loadImage("./JS/Punch/Image/fist.png");
	for(let i = 1;i<=LENGHT_DIR;i++){
		img2 = loadImage("./JS/Punch/Image/ball" + i + ".png");
		spritesImg.push(img2);
	}
}

function setup(){
	createCanvas(windowWidth,windowHeight);	
	imageMode(CENTER);
	fist = new Fist(img);
	create();
}

function create(){

	var i = 0, x = 0, y = 0, index = 0;
	var z = Math.round(random(difficulty * 2,difficulty * 6));
	var w = width - 40;
	var sprite;
	for(var j = 0;j<z;j++){

		index = Math.round(random(0,spritesImg.length - 1));
		x = Math.round(random(40,w));
		y = Math.round(random(0,height / 10));
		sprite = new Sprite(spritesImg[index],x,y);
		sprites.push(sprite);
	}
}
function draw(){
	background(0);
	if((frameCount%420) === 0) create(); /*create new sprites*/
	if(frameCount%60 === 0) time++; //increment the time
	if(fist.life == 0) stop(); //end of the game
	if(mouseIsPressed) fist.collide(sprites,mouseX,mouseY);//control the collision between the fist and the sprites
	if(frameCount%1800 == 0) difficulty += 0.4;
	image(fist.img,fist.x,fist.y);//maj of the fist
	if(sprites.length >= 1){
		for(i = 0;i<sprites.length;i++){//maj of the sprites
			if(sprites[i].ok){
				image(sprites[i].img,sprites[i].x,sprites[i].y);
				sprites[i].update(sprites,fist);
			}
		}
	}
	//maj of the time
	fill(255);
	text("Elapsed time : " + time,50,20);

	//maj of the score
	text("Score : " + fist.hit,200,20);

	//maj of the life
	text("Life remaining " + fist.life,300,20);

	//difficulty
	text("Difficulty : " + difficulty,500,20);
}
function windowResized(){

	resizeCanvas(windowWidth,windowHeight);
}
function stop(){

	noLoop();
	end = true;
	text("You loose, your score is " + fist.hit + ". Tap on enter button to reload",(width / 2) - 50, height / 2);
}

function mouseMoved(){

	fist.x = mouseX;
	fist.y = mouseY;
}

function keyPressed(){

	if(keyCode == 13){
		fist = new Fist(img);
		time = 0;
		sprites=  [];
		create();
		loop();
	}

	if(keyCode == 32 && pause && !end){
		loop();
		pause = false;
	} else if(keyCode == 32 && !pause && !end){
		fill(0);
		text("Game in pause ",width/2,height/2);
		pause = true;
		noLoop();
	}
}