$(document).ready(function(){

	var texts = ['Etudiant en première année de DUT informatique',
				 'Site professionnel', 
				 'Dorian Terbah', 
				 'Tous droits réservés',
				 'Write less, do more'
				];
	let indexTable = 0;
	setInterval(function(){

		var title = $('.slideEffect');
		title.slideUp(1000, function() {
			$(this).slideDown(1000).text(texts[indexTable % texts.length]);
		});
		indexTable++;
	} , 4500);
});

