$(document).ready(function(){

	$('.next').on('click', function(){

		var slide = $(this).parent('.slides');
		var index = parseInt(slide.children('.index').attr('value'), 10) + 1;
		console.log(index);
		var allUrls = $(this).children('.allUrls').val();
		var urls = [];
		var url = '';
		//on recupere chacune des urls
		for(var i = 0; i < allUrls.length; i++){
			if(allUrls[i] != '|') url += allUrls[i];
			else{
				urls.push(url);
				url = '';
			}
		}
		urls.push(url);
		if(index > (urls.length - 1)) index = 0;
		else if(index < 0) index = urls.length - 1;
		url = urls[index]; //on recupere la nouvelle url
		var parent = $(this).parent('.slides');
		var img = parent.children('img');//image concerne
		img.fadeOut(1000, function(){
			$(this).attr('src', url).fadeIn(1000);
		}); 		
		//changement du text
		$('.text').text('Photo n°' + (index + 1));
		slide.children('.index').attr('value',  index);//on incremente l'index
	});

	$('.prev').on('click', function(){

		var slide = $(this).parent('.slides');
		var index = parseInt($(slide).children('.index').attr('value'), 10) - 1;
		console.log(index);
		var allUrls = $(this).children('.allUrls').val();
		var urls = [];
		var url = '';
		//on recupere chacune des urls
		for(var i = 0; i < allUrls.length; i++){
			if(allUrls[i] != '|') url += allUrls[i];
			else{
				urls.push(url);
				url = '';
			}
		}
		urls.push(url);
		if(index >= urls.length) index = 0;
		if(index < 0) index = urls.length - 1;
		url = urls[index]; //on recupere la nouvelle url
		var parent = $(this).parent('.slides');
		var img = parent.children('img');//image concerne
		img.fadeOut(1000, function(){
			$(this).attr('src', url).fadeIn(1000);
		}); 		
		//changement du text
		$('.text').text('Photo n°' + (index + 1)) ;
		slide.children('.index').attr('value',  index);//on incremente l'index
	});
});