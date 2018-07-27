let tiles = [];
let score = 0;
let time = 0;
let createTime = 60;
let pause = false;
let end = false;
let d = 1;
function setup(){

	createCanvas(500,windowHeight);
	background(0);
}

function create(){

	time++;
	let t = new Tile();
	tiles.push(t);
}
function draw(){

	background(0);
	fill(255);
	if(frameCount%createTime == 0) create(); //create new tile
	if(frameCount%900 == 0) d += 0.35;
	if(frameCount%300 == 0){
		for(var i = 0;i<tiles.length;i++){
			if(tiles[i].ok) tiles[i].vy += 0.7;
		}
	}
	if(tiles.length >= 1){
		for(var i = 0;i<tiles.length;i++){
			if(tiles[i].ok){
				tiles[i].update();
				tiles[i].show();
			} 
		}
	}
	fill("#FF0000");
	text("Score : " + score,20,20);
	text("Elapsed time : " + time,100,20);
}

function mousePressed(){

	collide(mouseX,mouseY,tiles);
}
function stop(){

	noLoop();
	end = true;
	text("You loose, your score is " + score + ". Tap on enter button to reload",10, height / 2);
}

function keyPressed(){

	if(keyCode == 13){
		tiles = [];
		time = 0;
		score = 0;
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

	if(keyCode != 32 && keyCode != 13) collide(mouseX,mouseY,tiles);
}