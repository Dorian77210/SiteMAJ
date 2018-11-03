let ACTIVE_COLOR = "#d8d8d4";
let DEACTIVE_COLOR = "rgba(0, 0, 0, 0)";
$(document).ready(function() {
	$('.container').bind('click touchstart', function() {
		$(this).parent('div').children('div').slideToggle(1500);
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