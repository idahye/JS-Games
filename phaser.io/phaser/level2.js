winCond = 10;

var level2 = {
	create: function(){
	game.add.image(0, 0, 'bg');
	catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');
	catcher.anchor.setTo(0.5,0);
	game.physics.enable(catcher, Phaser.Physics.ARCADE);
	
	cat = game.add.sprite( Math.random() * game.width, Math.random() * game.height, 'cat');
	game.physics.enable(cat, Phaser.Physics.ARCADE);
	cat.body.collideWorldBounds = !0;
	cat.body.velocity.setTo(600, 600);
    cat.body.bounce.set(1, 1);
    cat.body.gravity.set(0, 0)

	cursors = game.input.keyboard.createCursorKeys();
	
	// score
	score = 0;
	scoreTxt = game.add.text(10, 10, score.toString(), styles)
	var styles = {font: '20px Verdana', fill: '#FFF'};

	// custom timer
    timer = game.time.create();

        // delayed event 30s from now
        timerEvent = timer.add(Phaser.Timer.SECOND * 20, this.endTimer, this);
        timer.start();
     },

    render: function () {
        if (timer.running) {
            game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 750, 30, style);
            var style = {fontSize: 50, fill: '#000'};
        }
        else {
            this.loose();
        }
        if (score === 10) {
        	this.winGame()
        }
    },
    loose: function() {
    	this.endTimer();
        txtLoose = game.add.text(150, 100, "GAME OVER!", {
            font: "50px Arial",
            fill: "#ff0044"
        });
    },
    win: function(){
    	game.state.start('level2');
    },
    winGame: function() {

        txtWin = game.add.text(150, 100, "YOU WON THE GAME!", {
            font: "50px Arial",
            fill: "#ff0044"
        });
        catcher.destroy();

    },
    endTimer: function() {
        timer.stop();
    },
    formatTime: function(s) {
        // Convert seconds formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return  seconds.substr(-2);   
    },

	update: function(){
	if(cursors.left.isDown && catcher.x>10){
		catcher.x -= 5;
		catcher.scale.x = 1;
	}
	if(cursors.right.isDown && catcher.x<game.width-10){
		catcher.x += 5;
		catcher.scale.x = -1;
	}
	if(cursors.up.isDown && catcher.y>10){
		catcher.y -= 5;
	}
	if(cursors.down.isDown && catcher.y<game.height-10){
		catcher.y += 5;
	}
	
	// HitTest
	game.physics.arcade.overlap(catcher, cat, this.catHitHandler);
	
},
	catHitHandler: function() {
		cat.x = Math.random() * game.width;
		cat.y = Math.random() * game.height;
		score++;
		scoreTxt.setText(score.toString());
}
};