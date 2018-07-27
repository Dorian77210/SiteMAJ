
class Tile{

	constructor(){

		this.width = 70;
		this.height = 70;
		this.vy = 2 * d;
		this.x = Math.round(random(this.width / 2,width - this.width));
		this.y = - height / 100;
		this.ok = true;
	}

	update(tiles){

		if(this.y < (height - this.vy)) this.y += this.vy;
		else{
			this.ok = false;
			stop();
		}
	}
	show(){

		ellipse(this.x,this.y,this.width,this.height);
	}
}

function collide(mouseX,mouseY,tiles){

	var hit = false;
	for(var i = 0;i<tiles.length;i++){

		hit = collidePointCircle(mouseX,mouseY,tiles[i].x,tiles[i].y,tiles[i].height);
		if(hit){
			score++; 
			tiles[i].ok = false;
		}
	}
}