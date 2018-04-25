
// initializing a new Phaser game:
// calling the Phaser Game class with constructor arguments:
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

game.state.add('preload', preload);
game.state.add('splash1', splash1);
game.state.add('level1', level1);
game.state.add('splash2', splash2);
game.state.add('level2', level2);

//starting the game
game.state.start('preload');