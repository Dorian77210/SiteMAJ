var bubbles = [];

class Bubble{

	constructor(){

		this.x = windowWidth / 2;
		this.y = windowHeight / 2;
		this.height = random(20,50);
		this.width = this.height;
		this.vy = random(-3,3);
		this.vx = random(-3,3);
	}

	show(){
		ellipse(this.x,this.y,this.width,this.height);
	}

	update(){

		this.x += this.vx;
		this.y += this.vy;

		this.collision();
	}

	collision(){

		/*multiplier la vitesse par -1*/

		//width
		if(((this.x + this.width / 2) > windowWidth) || ((this.x - this.width / 2) < 0)){

			this.vx *= -1;
		}

		if(((this.y + this.height) > windowHeight) || ((this.y - this.height / 2) < 0)){

			this.vy *= -1;
		}
	}
}