var splash2 = {
    create: function() {
        game.add.image(0, 0, 'bg');
        var levelInst = game.add.text(game.world.centerX, game.world.centerY, 'Level 2', {
            font: "40px Arial",
            fill: "#fff"
        });
        levelInst.anchor.setTo(0.5);
        
        setTimeout(function() {
            game.state.start("level2")
        }, 5000);
        }
    }