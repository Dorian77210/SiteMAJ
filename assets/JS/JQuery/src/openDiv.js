let ACTIVE_COLOR = "#d8d8d4";
let DEACTIVE_COLOR = "rgba(0, 0, 0, 0)";
$(document).ready(function() {
	$('.container').bind('click touchstart', function() {
		let div = $(this).parent('div').children('div');
		let display = div.css('display') == 'none' ? 'block' : 'none';
		$(this).parent('div').children('div').css('display', display);

		if($(this).css('background-color') == DEACTIVE_COLOR) {
			$(this).css({
				'background-color' 		: 		ACTIVE_COLOR
			})
		} else {
			$(this).css({
				'background-color' 		: 		DEACTIVE_COLOR
			})
		}
	});
});