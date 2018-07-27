var game = new Phaser.Game(600,600);
var SPEED = 500;
var previousScore = 0;
var ship = {

	preload: function(){

		game.load.image('fond','./../images/fond.png');
		game.load.image('player','./../images/ship.png');
		game.load.image('alien','./../images/alien.png');
		game.load.image('beam','./../images/beams.png');
	},

	create: function(){

		//check the previous score if it exist
		if(previousScore != 0) {
			alert('Previous score : ' + previousScore);
		}
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.add.sprite(0,0,'fond');

		this.player = game.add.sprite(300,500,'player');
		this.player.anchor.set(0.5);

		game.physics.arcade.enable(this.player);

		this.cursors = game.input.keyboard.createCursorKeys();
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		this.enemies = game.add.group();

		this.beams = game.add.group();

		this.timer = game.time.events.loop(200,this.addEnemy,this);

		this.score = 0;

		this.countBeams = 10;
		this.labelScore = game.add.text(20,20,this.score, {font: "20px Arial",fill: "#aaa"});

		this.labelCountBeams = game.add.text(150,20,this.countBeams, {font: "20px Arial",fill: "#aaa"});
	},

	update: function(){
	
		game.physics.arcade.overlap(this.beams,this.enemies,this.killElements,null,this);
		game.physics.arcade.overlap(this.player,this.enemies,this.restart,null,this);
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if(this.cursors.left.isDown){
			this.player.body.velocity.x = SPEED * -1;
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

		if(this.space.isDown && this.countBeams > 0){
			this.addBeam();
		}
		if(!this.player.inWorld) this.restart();

		this.labelCountBeams.text = this.countBeams; //on refresh le label des missiles

	},

	restart: function(){
		previousScore = this.score;
		game.state.start('ship');
	},

	addBeam: function(){

		this.countBeams -= 1;
		var beam = game.add.sprite(this.player.x,this.player.y - 30,'beam');
		game.physics.arcade.enable(beam);
		beam.body.gravity.y = SPEED * -1;

		this.beams.add(beam);

		beam.outOfBoundsKill = true;
		beam.checkWorldBounds = true;

		beam.events.onOutOfBounds.add(function(){ this.countBeams++;}, this); //on ajoute un ecouteur pour le missile

	},

	addEnemy: function(){

		var position = Math.floor((Math.random() * 550) + 1);
		var enemy = game.add.sprite(position,10,'alien');
		game.physics.arcade.enable(enemy);

		enemy.body.gravity.y = 200;

		this.enemies.add(enemy);

		enemy.checkWorldBounds = true;
		enemy.outOfBoundsKill = true;

		this.score += 20;

		this.labelScore.text = this.score;

	},

	killElements: function(beam,enemy){

		enemy.kill();
		beam.kill();
		this.countBeams++;
		this.score += 40;

	}
};
game.state.add('ship',ship);

game.state.start('ship');
