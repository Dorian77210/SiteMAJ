let colors;
let dames;
let BLACK = 2, WHITE = 1, NOT_DEFINED = 0;
let WIDTH = 40, HEIGHT = 40;
function setup(){

	//init the tables of checkers
	dames = new Array();
	for(var i = 0;i<10;i++){
		dames[i] = new Array();
	}
	//init the table of colors
	colors = new Array();
	colors[0] = new Array(0,1,0,1,0,1,0,1,0,1);
	colors[1] = new Array(1,0,1,0,1,0,1,0,1,0);
	colors[2] = new Array(0,1,0,1,0,1,0,1,0,1);
	colors[3] = new Array(1,0,1,0,1,0,1,0,1,0);
	colors[4] = new Array(0,0,0,0,0,0,0,0,0,0);
	colors[5] = new Array(0,0,0,0,0,0,0,0,0,0);	
	colors[6] = new Array(0,2,0,2,0,2,0,2,0,2);
	colors[7] = new Array(2,0,2,0,2,0,2,0,2,0);
	colors[8] = new Array(0,2,0,2,0,2,0,2,0,2);
	colors[9] = new Array(2,0,2,0,2,0,2,0,2,0);	

	for(var i = 0;i<10;i++){

		for(var j = 0;j<10;j++){
			var v = new Vector(j,i);
			switch(colors[i][j]){
				case NOT_DEFINED:
					dames[i][j] = new Dame(v,NOT_DEFINED,null);
					break;
				case WHITE:
					dames[i][j] = new Dame(v,WHITE,255);
					break;
				case BLACK:
					dames[i][j] = new Dame(v,BLACK,0);
					break;
			}
		}
	}

	createCanvas(WIDTH * 10,HEIGHT * 10);
	drawScene();
	drawCheckers();
}

function drawScene(){

	for(var i = 0;i<10;i++){

		for(var j = 0;j<10;j++){

			if((i+j)%2 == 0){
				fill("#EDC07D");
				rect(j*WIDTH,i*HEIGHT,WIDTH,HEIGHT);
			} else{
				fill("#874920");
				rect(j*WIDTH,i*HEIGHT,WIDTH,HEIGHT);
			}
		}
	}
}

function drawCheckers(){

	for(var i = 0;i<10;i++){

		for(var j = 0;j<10;j++){

			if(dames[i][j].color != NOT_DEFINED){
				fill(dames[i][j].bg);
				ellipse((j*WIDTH)-20,(i*HEIGHT)-20,WIDTH,HEIGHT);
			}
		}
	}
}