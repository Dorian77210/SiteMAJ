//scroll et apparition dynamique
$(document).ready(function(){ $('#haut').click(function(){ $('html,body').animate({scrollTop: 0},'slow'); }); });

$(document).scroll(function(){

	var scrollTop = $(this).scrollTop();

	if(scrollTop > 100) $('#haut').fadeIn('slow');
	else $('#haut').fadeOut('slow');
});