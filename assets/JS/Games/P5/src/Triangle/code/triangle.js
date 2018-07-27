
class Vector{

	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}

function drawTriangle(v1,v2,v3,n){

	
	if(n > 0){

		line(v1.x,v1.y,v2.x,v2.y);
		line(v2.x,v2.y,v3.x,v3.y);
		line(v3.x,v3.y,v1.x,v1.y);
		var v4 = new Vector((v1.x+v2.x)/2,(v1.y+v2.y)/2);
		var v5 = new Vector((v2.x+v3.x)/2,(v2.y+v3.y)/2);
		var v6 = new Vector((v1.x+v3.x)/2,(v1.y+v3.y)/2);
		drawTriangle(v1,v6,v4,n-1);
		drawTriangle(v4,v2,v5,n-1);
		drawTriangle(v6,v3,v5,n-1);
	}
}