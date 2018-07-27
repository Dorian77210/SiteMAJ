//CONSTANTS
var SPEED = 250;
var isPosed = true;
var FAST = 100;
var isCreateTimer = false;
var BLOCK_GENERATED = 24;
var game = new Phaser.Game(800,600);
var block;
var mainState = {

	preload: function(){

		game.load.image('fond','./JS/Mario/Images/bg.png');
		game.load.image('player','./JS/Mario/Images/player.png');
		game.load.image('block','./JS/Mario/Images/block.png');
		game.load.text('level','./JS/Mario/map.json');
	},

	create: function(){

		//add the physic for the world

		this.fond = game.add.sprite(0,0,'fond');
		game.physics.arcade.enable(this.fond,Phaser.Physics.ARCADE);

		game.physics.startSystem(Phaser.Physics.ARCADE);


		//charge the map and the level
		this.levelData = JSON.parse(game.cache.getText('level'));
		this.blocks = game.add.group();
		this.blocks.enableBody = true;

		//on genere les premieres plateformes
		this.levelData.platformData.forEach(function(element){
			block = game.add.sprite(element.x,element.y,'block');
			game.physics.arcade.enable(block);
			block.body.velocity.x = FAST * -1;
			block.body.immovable = true;
			block.outOfBoundsKill = true;
			this.blocks.add(block);
		}, this);


		//player
		this.player = game.add.sprite(this.levelData.playerStart.x,this.levelData.playerStart.y,'player');
		this.player.anchor.set(0.5);
		game.physics.arcade.enable(this.player);
		this.player.checkWorldBounds = true;
		this.player.body.velocity.x = FAST;
		this.player.body.gravity.y = 800; //add the gravity	
		//touch for the keyboard
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		this.timer = game.time.events.loop(300,this.addBlock,this);


	},

	update: function(){

		//check the collisions
		this.player.body.velocity.x = FAST;		

		game.physics.arcade.collide(this.player,this.blocks,this.checkCollide);
		if(this.player.y > 570) this.restart();		
		else if(!this.player.inWorld) this.restart();

		if(this.space.isDown && isPosed){

			isPosed = false;
			this.player.body.velocity.y = SPEED * -1;
		}

		if(this.left.isDown){

			this.player.body.velocity.x = SPEED * -1;
		}

		if(this.right.isDown){

			this.player.body.velocity.x = SPEED;
		}
	},

	restart: function(){

		game.state.start('main');
		game.time.elpased = 0;
	},

	checkCollide: function(player,block){

		if(player.y < block.y){

			isPosed = true;
		}
	},

	addBlock: function(){
		var r = Math.floor(Math.random() * 10);
		if(r >= 5){
			block = game.add.sprite(game.width - 20,560,'block');
			game.physics.arcade.enable(block);
			block.body.velocity.x = FAST * -1;
			block.body.immovable = true;
			block.outOfBoundsKill = true;
			this.blocks.add(block);
		}	
	}
};

game.state.add('main',mainState);

game.state.start('main');