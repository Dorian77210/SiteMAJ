
class Rain{

	constructor(){

		this.vy = random(1,10);
		this.x = random(width);
		this.y = random(-2 * height, 0);
		this.len = random(3,10);
	}

	update(liste){

		if(this.y < (height - this.vy)) this.y += this.vy;
		else this.y = - height;
	}

	show(){
		rect(this.x,this.y,1,this.len);
	}
}