var img;
var image1 = [];
var image2;
var r;
function changePictureRandom(){

	var tmp = r;
	while(r === tmp){
		r = Math.round(random(0,8));
		img = image1[r];
	}

	for(var i = 0;i<=8;i++){
		if(i === r){
			document.getElementById(i).style.opacity = 0.5;
		} else{
			document.getElementById(i).style.opacity = 1;
		}
	}
	resizeCanvas(img.width,img.height);
	image(img,0,0);
	background(0);
}

function changePictureChoose(id){

	img = image1[id];
	for(var i = 0;i<=8;i++){
		if(i === id){
			document.getElementById(i).style.opacity = 0.5;
		} else{
			document.getElementById(i).style.opacity = 1;
		}
	}
	resizeCanvas(img.width,img.height);
	image(img,0,0);
	background(0);
}
function preload(){
	for(var i = 0;i<=8;i++){
		image1[i] = loadImage("./../images/photo" + i + ".png");
	}
}
function setup(){
	background(0);
	img = image1[Math.round(random(8))];
	createCanvas(img.width,img.height);
}
function mouseMoved(){
	background(0);
	image2 = img.get(mouseX,mouseY,img.width / 3,img.height / 3);
	image(image2,mouseX,mouseY);
}
