$(document).ready(function(){

	var texts = ["Etudiant en deuxième année de DUT informatique en alternance à l'INSEAD",
				 'Site professionnel', 
				 'Dorian Terbah', 
				 'Tous droits réservés',
				 'Write less, do more'
				];
	let indexTable = 0;
	var titleInterval = setInterval(function(){

		var title = $('.slideEffect');
		title.slideUp(1000, function() {
			$(this).text(texts[indexTable % texts.length]).slideDown(1000);
		}).css('font-size', '75%');
		indexTable++;
	} , 4500);
});

