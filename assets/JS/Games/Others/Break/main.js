var SPEED = 350;
var onPaddle = true;
var block;
var mainState = {

	preload: function(){

		//on charge toutes les images necesaires
		game.load.image('fond','./JS/Break/Images/fond.png');
		game.load.image('paddle','./JS/Break/Images/paddler.png');
		game.load.image('block0','./JS/Break/Images/break_0.png');
		game.load.image('block1','./JS/Break/Images/break_1.png');
		game.load.image('block2','./JS/Break/Images/break_2.png');
		game.load.image('block3','./JS/Break/Images/break_3.png');
		game.load.image('ball','./JS/Break/Images/ball.png');
	},

	create(){

		//on charge la physique principale du jeu
		game.physics.startSystem(Phaser.Physics.ARCADE);
		//player
		this.player = game.add.sprite(game.width/2,500,'paddle');
		this.player.anchor.setTo(0.5);
		game.physics.arcade.enable(this.player,Phaser.Physics.ARCADE);
		//on limite le joueur sur les bords
		this.player.body.collideWorldBounds = true;
		this.player.body.immovable = true; //pour empecher le reculement
		//ajout des touches
		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//ball
		this.ball = game.add.sprite(game.width/2,480,'ball');
		this.ball.anchor.setTo(0.5);
		game.physics.arcade.enable(this.ball); //physique de la balle

		this.ball.body.collideWorldBounds = true;
		
		//gerer le rebondissement
		this.ball.body.bounce.setTo(1);

		this.ballLifes = 3;
		//groupe de blocks
		this.labelLifes = game.add.text(10,10,'Score : ' + this.ballLifes, {font: "20px Arial",fill: "white"});
		this.blocks = game.add.group();
		for(var y = 0; y < 4; y++){

			for(var x = 0; x < 6; x++){

				block = game.add.sprite(60 + (x * 150), 40 + (y * 30),'block'+y);
				game.physics.arcade.enable(block,Phaser.Physics.ARCADE);
				block.body.immovable = true;
				this.blocks.add(block);
			}
		}
	},

	update(){

		game.physics.arcade.collide(this.ball,this.player,this.ballHitPaddle);
		game.physics.arcade.collide(this.ball,this.blocks,this.hitAnyBlock);
		game.add.text()
		this.player.body.velocity.x = 0;

		if(this.ball.y > this.player.y + 20) this.ballLost();

		if(this.left.isDown){

			this.player.body.velocity.x = SPEED * -1;

			if(onPaddle) this.ball.body.x = this.player.x;
			
		}

		if(this.right.isDown){

			this.player.body.velocity.x = SPEED;

			if(onPaddle) this.ball.body.x = this.player.x;
		}

		if(onPaddle && this.space.isDown){

			this.ball.body.velocity.x = 200;
			this.ball.body.velocity.y = 200;
			onPaddle = false;
		}

		this.labelLifes.text = 'Score : ' + this.ballLifes;
	},

	ballLost: function(){

		this.ball.reset(this.player.body.x,480);
		this.ballLifes--;
		if(this.ballLifes == 0) this.gameOver();
		onPaddle = true;
	},

	hitAnyBlock: function(ball,block){
		block.kill();
	},

	ballHitPaddle: function(ball,paddle){

		var diff;
		if(ball.x < paddle.x){

			diff = ball.x - paddle.x;
			ball.body.velocity.x = (-10 * diff);
		} else if(ball.x > paddle.x){

			diff = ball.x - paddle.x;
			ball.body.velocity.x = (10 * diff);
		}  else{

			ball.body.velocity.x = 2 + Math.random() * 8;
		}
	},

	gameOver: function(){
		game.add.text(game.width / 2, game.height / 2,'Game Over',{font: "20px Arial",fill: "#aaa"});
		this.ball.kill();
	}
};

var game = new Phaser.Game(800,600);

game.state.add('main',mainState);

game.state.start('main');