$(document).ready(function(){

	let speed = 1500;
	$('.openParagraphe').on('click', function(){

		var arrow = '⬇️';
		if($(this).text() === arrow) arrow = '➡️';

		var div = $(this).parent('h3').parent('div').attr('id');
		$('#' + div + ' p').fadeToggle(speed); //effet du paragraphe
		

		$(this).fadeOut(speed / 2, function(){
			$(this).fadeIn(speed / 2).text(arrow);
		});

	});
});