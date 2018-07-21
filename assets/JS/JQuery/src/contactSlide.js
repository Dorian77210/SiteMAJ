$(document).ready(function(){

	var open = false;
	$('#canDisplay').on('click', function(){

		open = !open;
		if(open){
			$('#imgContact').animate({
				'left'		: 		'55px'
			}, 1000);
		} else{
			$('#imgContact').animate({
				'left' 		: 		'-250px'
			}, 1000);
		}
	});
});