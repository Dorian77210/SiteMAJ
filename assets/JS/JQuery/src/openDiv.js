$(document).ready(function(){

	let speed = 1500;
	$('.openDiv').on('click', function(){

		var arrow = '⬇️';
		if($(this).text() === arrow) arrow = '➡️';
		var span = $(this);
		var div = $(this).parent('h5').parent('div').attr('id');
		$('#' + div + ' .toOpen').slideToggle(speed); //effet du paragraphe
		$(this).fadeOut(speed / 2, function(){

			$(this).fadeIn(speed / 2).text(arrow);
		});

	});
});