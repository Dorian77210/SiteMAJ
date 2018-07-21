$(document).ready(function(){

	//menu sur grands ecrans
	$('#menu li').hover(function(){

		//pour eviter que le hover se fasse dans le menu mobile aussi
		if($('#menu-mobile').css('display') == 'none'){
			$('ul:first', this).css({
				visibility 		: 		'visible',
				display 		: 		'none'
			}).fadeIn(500).show();
		}
	}, function(){

		if($('#menu-mobile').css('display') == 'none'){
			$('ul:first', this).fadeOut(600, function(){

				$(this).css({
					visibility 	: 		'hidden'
				});
			});
		}
	});

	//menu mobile
	$('#menu-mobile').on('click', function(){

		$('#menu > ul').slideToggle(800);
	})
});