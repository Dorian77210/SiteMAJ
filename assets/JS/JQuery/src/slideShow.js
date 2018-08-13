var allUrlsImages = {
		'TaquinGame' 		: 		{
			'images' 			: 			[
				"././assets/Images/Tools/Games/C/Taquin/taquin_accueil.png",
				"./assets/Images/Tools/Games/C/Taquin/taquin_jeu.png",
				"./assets/Images/Tools/Games/C/Taquin/taquin_score.png",
				"./assets/Images/Tools/Games/C/Taquin/taquin_selection.png"
			],
			'actualIndex' 		: 		0
		},
		'AvionsGame' 		: 		{
			'images'			: 			[
				"./assets/Images/Tools/Games/Python/Airplane/image_avions1.png",
				"./assets/Images/Tools/Games/Python/Airplane/image_avions2.png",
				"./assets/Images/Tools/Games/Python/Airplane/image_avions3.png",
				"./assets/Images/Tools/Games/Python/Airplane/image_avions4.png"
			],
			'actualIndex' 		: 		0
		},
		'MilitaryGame'		: 		{
			'images' 			: 			[
				"./assets/Images/Tools/Games/Python/Military/militaire1.png",
				"./assets/Images/Tools/Games/Python/Military/militaire2.png",
				"./assets/Images/Tools/Games/Python/Military/militaire3.png",
				"./assets/Images/Tools/Games/Python/Military/militaire4.png"
			],
			'actualIndex' 		: 		0
		},	
		'MarioGame' 		: 		{
			'images' 			: 			[
				"./assets/Images/Tools/Games/Python/Mario/mario1.png",
				"./assets/Images/Tools/Games/Python/Mario/mario2.png",
				"./assets/Images/Tools/Games/Python/Mario/mario3.png",
				"./assets/Images/Tools/Games/Python/Mario/mario4.png"
			],
			'actualIndex' 		: 		0
		},
		'DemineurGame' 		: 		{
			'images' 			: 			[
				"./assets/Images/Tools/Games/Java/Demineur/demineur1.png",
				"./assets/Images/Tools/Games/Java/Demineur/demineur2.png",
				"./assets/Images/Tools/Games/Java/Demineur/demineur3.png",
				"./assets/Images/Tools/Games/Java/Demineur/demineur4.png"
			],
			'actualIndex' 		: 		0
		}

};

var speed = 1000; //en ms
$(document).ready(function(){

	$('.next, .prev').on('click', function(e){
		//on recupere l'id du block parent pour acceder aux images dans le tableau
		var slides = allUrlsImages[$(this).parent('.slides').prop('id')];
		//supposition que ce soit le next
		var index = slides['actualIndex'] + 1;
		if($(this).attr('class') == 'prev') index -= 2;
		//on gere les cas pour l'index
		if(index > (slides['images'].length - 1)) index = 0;
		else if(index < 0) index = slides['images'].length - 1;

		var image = $(this).parent('.slides').children('img');
		image.fadeOut(speed, function(){
			$(this).attr('src', slides['images'][index]).fadeIn(speed);
		});

		//maj de l'index et du texte
		slides['actualIndex'] = index;
		$(this).parent('.slides')//premier parent
			   .parent('.container-slides')//deuxieme parent
			   .children('.text')//enfant
			   .text('Photo n°' + (index + 1))
			   .css({
			   	'font-family'	 : 		'Oswald, sans-serif',
			   	'font-style' 	 : 		'italic'
			   });  
	});
});