//constants
var SPEED = 300;
var isPosed = true;
var FAST = 100;

var block;
var game = new Phaser.Game(600,600);


var mainState = {

	preload: function(){

		//charge le fond
		game.load.image('fond','./JS/Mario/Images/bg.png');
		//charge le perso et les blocks
		game.load.image('player','./JS/Mario/Images/player.png');
		game.load.image('block','./JS/Mario/Images/block.png');
	},

	create: function(){
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.setBounds(0,0,6000,600);
		//fond
		game.stage.backgroundColor = "#FFFF00";
		//creation du joueur
		this.player = game.add.sprite(400,32,'player');
		game.physics.enable(this.player,Phaser.Physics.ARCADE);
		this.player.body.bounce.y = 0.2;
		this.player.body.collideWorldBounds = true;
		//ajout de la camera pour le joueur
		//gravite pour le joueur
		this.player.body.gravity.y = 800;
		//touches
		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);	

		//block
		this.blocks = game.add.group();
		block = game.add.sprite(100,580,'block');
		block.anchor.set(0.5);
		game.physics.enable(block,Phaser.Physics.ARCADE);
		block.body.immovable = true;
		this.blocks.add(block);
	},

	update: function(){

		game.physics.arcade.collide(this.player,this.blocks);
		//on remet la vitesse du joueur a zero
		this.player.body.velocity.x = 0;

		//check des touches
		if(this.left.isDown){

			this.player.body.velocity.x = SPEED * -1;
			game.camera.x -= (SPEED / 60);
		}

		if(this.right.isDown){

			this.player.body.velocity.x = SPEED;
			game.camera.x += (SPEED / 60);
		}

		if(this.spaceBar.isDown){

			this.player.body.velocity.y = SPEED * -1;
		}

	}
};

game.state.add('main',mainState);
game.state.start('main');