var player;
var gameState = {

	preload: function(){

		game.load.image('player','./JS/Button/Images/bubbles.png');
		game.load.image('fond','./JS/Button/Images/fond.png');
	},

	create: function(){

		game.add.sprite(0,0,'fond');
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.players = game.add.group();

		for(var i = 0; i < 10; i++){

			for(var j = 0; j < 10; j++){

				player = gameState.add.sprite(Math.floor(Math.random() * (game.width - 40)),-50,'player');
				player.anchor.set(0.5);
				game.physics.arcade.enable(player,Phaser.Physics.ARCADE);
				player.body.collideWorldBounds = true;
				player.body.gravity.y = 200;
				player.body.velocity.setTo(Math.floor(Math.random() * -200) + 200,Math.floor(Math.random() * -200) + 200);
				player.body.bounce.setTo(1);
				this.players.add(player);
			}
		}
		
	},

	update: function(){

		game.physics.arcade.collide(this.players,this.players);
	}
};
