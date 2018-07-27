$(document).ready(function(){

	var open = false;
	$('#canDisplay').on('click', function(){

		open = !open;
		if(open){
			$('#imgContact').animate({
				'left'		: 		$(this).width() + 'px'
			}, 1000);
		} else{
			$('#imgContact').animate({
				'left' 		: 		'-300px'
			}, 1000);
		}
	});
});