
var game = new Phaser.Game(600,600,Phaser.AUTO,'content',{
	preload: preload, create: create, update:update
});

var sprite;
var blocks;
function preload(){

	game.load.image('block','./JS/Break/Images/break_0.png');
}

function create(){

	game.physics.startSystem(Phaser.Physics.ARCADE);

	sprite = game.add.sprite(300,300,'block');

	blocks = game.add.group();

	for(var i = 0; i < 8; i++){

		var block = game.add.sprite(i*78,550,'block');
		game.physics.enable(block,Phaser.Physics.ARCADE);
	}
	game.physics.enable(sprite,Phaser.Physics.ARCADE);
	sprite.body.velocity.x = 70;

	sprite.body.velocity.y = 50;
	//empeche le sprite de quitter l'ecran
	sprite.body.collideWorldBounds = true;
	sprite.body.bounce.set(1); //pas de perte d'energie lors de la collision

	game.physics.arcade.overlap(sprite,blocks,collide23,null,this);

}

function update(){


}

function collide23(sprite,block){

	alert('toto');
	block.kill();
}