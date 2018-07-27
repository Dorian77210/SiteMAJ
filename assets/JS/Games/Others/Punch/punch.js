
class Fist{

	constructor(img){

		this.x = width / 2;
		this.y = height - 70;
		this.img = img;
		this.hit = 0;
		this.life = 5;
	}
	collide(sprites,mouseX,mouseY){

		var rect1 = {x: mouseX, y: mouseY, width: 1, height: 1};

		for(var i = 0;i<sprites.length;i++){
			if(sprites[i] != null){
				var rect2 = {x: sprites[i].x, y: sprites[i].y, width: 40, height: 40};
				if (rect1.x < rect2.x + rect2.width &&
   					rect1.x + rect1.width > rect2.x &&
   					rect1.y < rect2.y + rect2.height &&
   					rect1.height + rect1.y > rect2.y){

					sprites[i].ok = false;
					this.hit++;
					break;
				}
			}
		}
	}
}

class Sprite{

	constructor(img,x,y){

		this.x = x;
		this.y = y;
		this.img = img;
		this.vy = Math.round(random(1,3));
		this.ok = true;
	}

	update(sprites,fist){

		if(this.y < (height - this.vy)){
			this.y += this.vy;
		}
		if(this.y + this.img.height > height){
			if(this.ok) fist.life--;
			this.ok = false;
		}
	}


}
		