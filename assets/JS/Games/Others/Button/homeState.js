
 var homeState = {

 	preload: function(){

 		game.load.image('playButton','./JS/Button/Images/play_button.png');
 		game.load.image('bg','./JS/Button/Images/fond.png');
 	},

 	create: function(){

 		game.physics.startSystem(Phaser.Physics.ARCADE);

 		//on cree le decor
 		this.fond = game.add.sprite(0,0,'bg');

 		//bouton pour joueur
 		this.playButton = game.add.button(game.width / 2,game.height / 2,'playButton',null,2,1,0);
 		this.playButton.anchor.set(0.5);
 		this.playButton.onInputUp.add(this.goToGame,this);

 	},

 	update: function(){

 		
 	},

 	goToGame: function(){
 		
 		game.state.add('main',gameState);
 		game.state.start('main');
 	}
};
game.state.add('home',homeState);
game.state.start('home');
