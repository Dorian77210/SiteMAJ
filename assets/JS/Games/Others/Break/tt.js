
var SPEED = 300;
var isPosed = true;
var block;
var FAST = 50;
var mainState = {

	preload: function(){

		game.load.image('block','./JS/Break/Images/break_0.png');
		game.load.image('fond','./JS/Break/Images/fond.png');
		game.load.image('player','./JS/Break/Images/mechant.png');
	},

	create: function(){

		var blockArray = [];
		//on genere le plateau de maniere random
		for(var i = 0;i<1;i++){

			blockArray[i] = [];

			for(var j = 0;j<2500;j++){
				if(j < 8) blockArray[i][j] = 1;
				else{
					var k = Math.floor(Math.random() * 100);
					if(k < 40) blockArray[i][j] = 1;
					else blockArray[i][j] = 0;
				}
			}
		}
		
		this.score = 0;

		game.physics.startSystem(Phaser.Physics.ARCADE);
		//fond
		this.fond = game.add.sprite(0,0,'fond');
		game.physics.arcade.enable(this.fond);
		//player
		this.player = game.add.sprite(game.width / 2,game.height - 200,'player');
		this.player.anchor.set(0.5);
		game.physics.arcade.enable(this.player);

		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//on gere la gravite du joueur
		this.player.checkWorldBounds = true;
//		this.player.outOfBoundsKill = true;		

		this.player.body.gravity.y = 800;

		//groupe de blocks
		this.blocks = game.add.group();

		for(var i = 0;i<1;i++){
			var tab = blockArray[i];
			for(var j = 0;j<tab.length;j++){

				if(tab[j] == 1){

					block = game.add.sprite(j*50,580,'block');
					game.physics.arcade.enable(block);
					block.body.immovable = true;
					//block.body.velocity.x = FAST * -1;
					block.outOfBoundsKill = true;
					this.blocks.add(block);
				}
			}
		}
	},

	update: function(){

		game.physics.arcade.collide(this.player,this.blocks,this.checkCollidePlayer);
		this.player.body.velocity.x = 0;
//		if(!this.player.inWorld) this.restart(); //si le joueur sort du jeu, on redemarre le jeu
		if(this.left.isDown){

			this.player.body.velocity.x = SPEED * -1;
		}

		if(this.right.isDown){

			this.player.body.velocity.x = SPEED;
		}

		if(this.space.isDown && isPosed){

			isPosed = false;
			this.player.body.velocity.y = SPEED * -1;
		} 
	},

	checkCollidePlayer: function(player,block){

		isPosed = true;		
	},

	restart: function(){

		game.state.start('main');
	}
};

var game = new Phaser.Game(600,600);

game.state.add('main',mainState);

game.state.start('main');