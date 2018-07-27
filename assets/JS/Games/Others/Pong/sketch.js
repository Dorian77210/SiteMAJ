let player2;
let player1;
let ball;
let score1 = 0;
let score2 = 0;
function setup(){

	createCanvas(500,500);
	ellipseMode(CENTER);
	rectMode(CORNER);
	player1 = new Pong(0,(height / 2) - 20,1);
	ball = new Ball(width / 2, height / 2);
	player2 = new Pong(width - 15,(height / 2) - 20,1);
}

function draw(){

	background(0);
	fill(255);
	ball.show();

	text(score1,20,20);
	text(score2,width - 30,20);
	ball.move(player1,player2);
	//check the keys events
	//player2 up
	if(keyIsDown(38)) player2.moveUp();
	//player2 down
	if(keyIsDown(40)) player2.moveDown();
	//player1 up
	if(keyIsDown(90)) player1.moveUp();
	//player1 down
	if(keyIsDown(83)) player1.moveDown();
	player2.show();
	player1.show();
}

function recreate(){

	player1 = new Pong(0,(height / 2) - 20,1);
	ball = new Ball(width / 2, height / 2);
	player2 = new Pong(width - 15,(height / 2) - 20,1);
}