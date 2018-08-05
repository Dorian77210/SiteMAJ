$(document).ready(function(){

	var texts = ['Etudiant en première année de DUT informatique',
				 'Site professionnel', 
				 'Dorian Terbah', 
				 'Tous droits réservés',
				 'Développement web',
				 'Write less, do more'
				];
	let indexTable = 0;
	var titleInterval = setInterval(function(){

		var title = $('.slideEffect');
		title.slideUp(1000, function() {
			$(this).text(texts[indexTable % texts.length]).slideDown(1000);
		});
		indexTable++;
	} , 4500);
});

