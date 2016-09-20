Esilk.loseState = function (game){};

Esilk.loseState.prototype = {
	create: function(){

		game.add.sprite(0,0,'leaderbg');
		game.world.setBounds(0, 0, 1024, 600);

		stilllaaa= game.add.audio('boo');;
		stilllaaa.play('',0,0.5,true); 


		tit = game.add.sprite(game.world.width/2,game.world.height/2-100,'loselol');
		tit.anchor.x = 0.5;
		tit.anchor.y = 0.5;

		lol = game.add.text(game.world.width/2,game.world.height/2+100, "Your score is: "+markah, { font: "70px Arial", fill: "#ffffff", align: "center" });
		lol.anchor.x = 0.5;
		lol.anchor.y = 0.5;


		setTimeout(function(){game.state.start('mainmenu'); stilllaaa.stop();still.play('',0,0.5,true);}, 5000); 


	},
};