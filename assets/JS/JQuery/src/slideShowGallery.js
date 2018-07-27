let images = [
				'././assets/Images/Tools/Games/C/Taquin/taquin_accueil.png',
				'./assets/Images/Tools/Games/C/Taquin/taquin_jeu.png',
				'./assets/Images/Tools/Games/C/Taquin/taquin_score.png',
				'./assets/Images/Tools/Games/C/Taquin/taquin_selection.png',
				'./assets/Images/Tools/Games/Python/Airplane/image_avions1.png',
				'./assets/Images/Tools/Games/Python/Airplane/image_avions2.png',
				'./assets/Images/Tools/Games/Python/Airplane/image_avions3.png',
				'./assets/Images/Tools/Games/Python/Airplane/image_avions4.png',
				'./assets/Images/Tools/Games/Python/Military/militaire1.png',
				'./assets/Images/Tools/Games/Python/Military/militaire2.png',
				'./assets/Images/Tools/Games/Python/Military/militaire3.png',
				'./assets/Images/Tools/Games/Python/Military/militaire4.png',
				'./assets/Images/Tools/Games/Python/Mario/mario1.png',
				'./assets/Images/Tools/Games/Python/Mario/mario2.png',
				'./assets/Images/Tools/Games/Python/Mario/mario3.png',
				'./assets/Images/Tools/Games/Python/Mario/mario4.png',
				'./assets/Images/Tools/Games/Java/Demineur/demineur1.png',
				'./assets/Images/Tools/Games/Java/Demineur/demineur2.png',
				'./assets/Images/Tools/Games/Java/Demineur/demineur3.png',
				'./assets/Images/Tools/Games/Java/Demineur/demineur4.png'
			 ];
let index = 1;
let length = images.length;
let speed = 1000;
let stopSlideShow = false;

function startSlideShow(){

	var image = $('.container-slides img');
		var textIndication = $('.container-slides i');
		image.fadeOut(speed, function(){

			$(this).attr('src', images[index % length]).fadeIn(speed);
			index++;
	});

		textIndication.fadeOut(speed, function(){
			$(this).fadeIn(speed).text('Photo n°' + (index % (length + 1)));
	});

	var dot;
	for(var i = 0; i < length; i++){
		if(i != (index % length)) $('#dot' + i).css('background-color', '#bbb');
		else $('#dot' + i).css('background-color', 'red');
	}
}		

$(document).ready(function(){

	//ajout des dots
	for(var i = 0; i < images.length; i++){
		$('#allDot').append('<span class="dot" id="dot' + i +  '"></span>');
	}
	var diapo = setInterval(startSlideShow ,speed * 4);

	//ajout du stop du diapo
	$('.container-slides button').on('click', function(){

		stopSlideShow = !stopSlideShow;
		if(stopSlideShow){
			clearInterval(diapo);
			$('button').text('Relancer le diapo');
		}
		else{
			diapo = setInterval(startSlideShow, speed * 4);
			$('button').text('Stoper le diapo');
		}
	});


});