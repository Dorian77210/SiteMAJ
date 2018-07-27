
var SPEED = 350;
var onPaddle = true;
var block;
var blockDestroyed = 0;
var mainState = {

	preload: function(){

		//charge le fond
		game.load.image('fond','./JS/Break/Images/fond.png');
		//charge le paddle
		game.load.image('paddle','./JS/Break/Images/paddler.png');	
		//charge les block
		game.load.image('block0','./JS/Break/Images/break_0.png');
		game.load.image('block1','./JS/Break/Images/break_1.png');
		game.load.image('block2','./JS/Break/Images/break_2.png');
		game.load.image('block3','./JS/Break/Images/break_3.png');
		//charge la balle
		game.load.image('ball','./JS/Break/Images/ball.png');
		//charge le bouton pour rejouer
		game.load.image('playButton','./JS/Break/Images/play_button.png');
	},

	create: function(){

		//cree la physique globale du jeu
		game.physics.startSystem(Phaser.Physics.ARCADE);
		//bouton
		this.playButton = null;
		//cree le paddle
		this.paddle = game.add.sprite(game.width / 2,500,'paddle');
		this.paddle.anchor.set(0.5);
		//ajoute la physique au paddle
		game.physics.arcade.enable(this.paddle,Phaser.Physics.ARCADE);
		this.paddle.body.collideWorldBounds = true;//pour que le paddle ne depasse pas les bordures
		this.paddle.body.immovable = true;//pour qu'il ne se baisse lors de la collision avec la balle
		
		//ajout des touches
		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);		
		this.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//cree la balle
		this.ball = game.add.sprite(game.width / 2,480,'ball');
		this.ball.anchor.set(0.5);
		//ajoute la physique a la balle
		game.physics.arcade.enable(this.ball,Phaser.Physics.ARCADE);
		this.ball.body.collideWorldBounds = true;//pour que la balle rebondisse sur les bords
		//gere que la balle ne perde pas de vitesse 
		this.ball.body.bounce.setTo(1);	
		//vies du joueur
		this.gameLifes = 3; //default
		//blocks du jeu
		this.blocks = game.add.group();
		for(var i = 0; i < 3; i++){

			for(var j = 0; j < 6; j++){

				block = game.add.sprite(60 + (j * 150), 40 + (i * 30),'block' + i);
				//ajoute la physique a la balle
				game.physics.arcade.enable(block,Phaser.Physics.ARCADE);
				block.body.immovable = true;
				this.blocks.add(block);
			}
		}
	},

	update: function(){
		this.paddle.body.velocity.x = 0;//on remet la vitesse a 0 a chaque tour de boucle
		//si la balle n'est pas sur le paddle, on check les collisions avec la balle et les blocks
		//et les collisions avec le paddle et la balle
		if(!onPaddle){
			game.physics.arcade.collide(this.ball,this.blocks,this.checkCollideBallBlock);
			game.physics.arcade.collide(this.ball,this.paddle,this.checkCollideBallPaddle);
		}
		//check les touches appuyees
		if(this.left.isDown){

			this.paddle.body.velocity.x = SPEED * -1;
		}

		if(this.right.isDown){

			this.paddle.body.velocity.x = SPEED;
		}

		if(this.spaceBar.isDown && onPaddle){

			onPaddle = false;
			this.ball.body.velocity.setTo(0,-200);
		}
		//gere le deplacement de la balle si elle est sur le paddle

		if(onPaddle){

			this.ball.x = this.paddle.x;
		}

		//on regarde si la balle est derriere le paddle
		if(this.ball.y > this.paddle.y){

			this.resetPositionBall();
		}

		//check la victoire du joueur
		if(blockDestroyed == 12){

			onPaddle = true;
			this.restart();
		}
	},

	checkCollideBallBlock: function(ball,block){

		block.kill();
		blockDestroyed++;
	},

	checkCollideBallPaddle: function(ball,paddle){

		var diff;
		if(ball.x < paddle.x){

			diff = ball.x - paddle.x;
			ball.body.velocity.x = (-10 * diff);
		} else if(ball.x > paddle.x){

			diff = ball.x - paddle.x;
			ball.body.velocity.x = (-10 * diff);
		} else{

			ball.body.velocity.x = 2 + Math.random() * 8;
		}
	},

	resetPositionBall: function(){

		this.ball.reset(this.paddle.body.x,480);
		onPaddle = true;
	},

	restart: function(){

		game.state.start('main');
	}
};

var game = new Phaser.Game(600,600,Phaser.AUTO);

game.state.add('main',mainState);

game.state.start('main');