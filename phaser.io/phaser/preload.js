var preload = {

	preload: function() {

	this.bar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 150, 'bar');
	this.bar.anchor.setTo(0.5);

	// load your game assets (instance name, path)
	game.load.image('bar', 'images/bar.png');
	game.load.image('bg', 'images/bg.png');
	game.load.image('catcher', 'images/catcher.png');
	game.load.image('cat', 'images/cat.png');
	game.load.audio('theme', 'audio/catsong.mp3');
},
	create: function() {
		game.state.start('splash2');
	}
};