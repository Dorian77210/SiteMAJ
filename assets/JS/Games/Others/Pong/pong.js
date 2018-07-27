
class Pong{

	constructor(x,y,id){

		this.x = x;
		this.y = y;
		this.id = id;
		this.width = 15;
		this.height = 40;
		this.vy = 7;
	}

	moveUp(){

		if(this.y > this.vy) this.y -= this.vy;
	}
	moveDown(){

		if(this.y < (height - this.vy - this.height)) this.y += this.vy;
	}
	show(){
		rect(this.x,this.y,this.width,this.height);
	}
}

class Ball{

	constructor(x,y){
		this.x = x;
		this.y = y;
		this.vy = 0;
		this.vx = 5;
		this.ok = true;
		this.radius = 10;
	}

	move(p1,p2){

		var hit2 = collideRectCircle(p2.x,p2.y,p2.width,p2.height,this.x,this.y,this.radius * 2);
		var hit = collideRectCircle(p1.x,p1.y,p1.width,p1.height,this.x,this.y,this.radius * 2);

		if(hit || hit2){

			this.vx *= -1;
			this.vy = random(-7,7);
		}
		this.y += this.vy;
		this.x += this.vx;
		//check the collides with top and down borders
		if((this.x + this.radius / 2) > width){

			score1++;
			recreate();
		}	


		if((this.x - this.radius) < 0){
			score2++;
			recreate();
		}
		if(((this.y + this.radius) > height) || ((this.y - this.radius) < 0)) this.vy *= -1;
	}
	show(){

		ellipse(this.x,this.y,this.radius * 2,this.radius * 2);
	}
}