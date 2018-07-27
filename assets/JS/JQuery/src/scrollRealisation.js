$(document).ready(function(){

	$('#realisations a').on('click', function(){

		var id = $(this).attr('href');
		var top = Math.ceil($(id).offset().top);
		$('html, body').animate({
			scrollTop 		: 		top
		}, 1500);
	});
});	