var game = new Phaser.Game(600,600); //initialisation du plateau
var SPEED = 500;
var dodger = {

	preload: function(){
		//on charge toutes les images
		game.load.image('fond', './JS/Dodger/Images/fond.png'); //on charge l'image de fond
		game.load.image('player','./JS/Dodger/Images/player.png');
		game.load.image('mechant','./JS/Dodger/Images/mechant.png');
	},	

	create: function(){
		//set up du jeu + affichage
		
		//on charge la physique
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//chargement des images
		game.add.sprite(0,0,'fond');//le 'fond' fait reference a l'image de fond precedemment charge
		this.player = game.add.sprite(300,500,'player'); //on creer le joueur
		this.player.anchor.set(0.5);//anchor pour centre l'image 

		game.physics.arcade.enable(this.player); //preparer le joueur a recevoir de l'animation

		//creation du curseur pour le deplacement
		this.cursors = game.input.keyboard.createCursorKeys(); //preparer les touches pour se deplacer
		//on creer les mechants
		this.mechants = game.add.group();

		this.timer = game.time.events.loop(200,this.ajouterUnMechant, this); //on ajoute un mechant tous les x time

		this.score = 0;//score du jeu

		this.labelScore = game.add.text(20,20,this.score, {font: "30px Arial", fill: "#fff"});
	},

	update: function(){
		//se lance en temps reel, charge tt le temps quelque chose
		//logique du jeu
		game.physics.arcade.overlap(this.player,this.mechants,this.restartGame,null,this); //on check les collisions entre le joueur et les mechants
		this.player.body.velocity.x = 0; //on remet a zero la vitesse de deplacement du joueur
		this.player.body.velocity.y = 0;
		if(this.cursors.left.isDown){//touches
			this.player.body.velocity.x = SPEED * -1;//la velocity correspond a la vitesse de deplacement
		}

		if(this.cursors.right.isDown){
			this.player.body.velocity.x = SPEED;
		}

		if(this.cursors.up.isDown){
			this.player.body.velocity.y = SPEED * -1;
		}

		if(this.cursors.down.isDown){
			this.player.body.velocity.y = SPEED;
		}

		//on check si il est parti vers un des bords
		if(this.player.inWorld == false) this.restartGame();
	},

	restartGame: function(){
		//pour checker le debordement vers les bords
		game.state.start('dodger');
	},

	ajouterUnMechant: function(){

		var position = Math.floor((Math.random() * 550) + 1); //on creer une position random
		var mechant = game.add.sprite(position,-50,'mechant');//on place le mechant de facon random
		game.physics.arcade.enable(mechant);
		mechant.body.gravity.y = 200;//on ajoute de la gravite

		this.mechants.add(mechant);//on ajoute le mechant dans le groupe

		mechant.checkWorldBounds = true; //on verifie que le mechant est toujours dans le monde
		mechant.outOfBoundsKill = true; //on detruit le mechant quand il sort du monde

		this.score += 20;

		this.labelScore.text = this.score;

	}
};

game.state.add('dodger',dodger);

game.state.start('dodger'); //on lance dodger, l'objet