let coef = 0;
class Car{

	constructor(x,y,img,vx,vy){

		this.x = x;
		this.y = y;
		this.img = img;
		this.vx = vx;
		this.vy = vy;
		this.score = 0;
		this.width = this.img.width;
		this.height = this.img.height;
		this.limit = 70; //tailles en pixel
		this.vyCoef = 1;
	}

	updateX(keyCode){

		//39 droite, 37 gauche
		if(keyCode == 39){//droite

			if(this.x < (width - this.width - this.limit)){

				this.x += this.vx;
			}
		} else{//gauche

			if(this.x > (this.limit + this.vx)){

				this.x -= this.vx;
			}
		}
	}

	updateY(car){

		if((this.y + this.height) <= 0){
			this.y = height;
			car.score++;
			coef += 1;
			if(coef%5 == 0) this.vy -= 2;
			this.x = random(70,width-70-this.width);
		}	
		else this.y += this.vy;	
	}

	collide(car){

		var hit = collideRectRect(this.x,this.y,this.width,this.height,car.x,car.y,car.width,car.height);
		if(hit) stop();
	}
}

class Screen{

	constructor(img,x,y){

		this.x = x;
		this.y = y;
		this.vy = 3;
		this.img = img;
		this.width = width;
		this.height = height;
	}	

	update(){

		this.y -= this.vy;
	}
}