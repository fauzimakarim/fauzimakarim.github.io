Esilk.winState = function (game){};

Esilk.winState.prototype = {
	create: function(){
		game.world.setBounds(0, 0, 1024, 600);


		stilllaa = game.add.audio('cheer');;
		stilllaa.play('',0,0.5,true); 

		game.add.sprite(0,0,'leaderbg');

		tit = game.add.sprite(game.world.width/2,game.world.height/2-150,'winlol');
		tit.anchor.x = 0.5;
		tit.anchor.y = 0.5;

		lol = game.add.text(game.world.width/2,game.world.height/2+100, "Your score is: "+markah, { font: "70px Arial", fill: "#ffffff", align: "center" });
		lol.anchor.x = 0.5;
		lol.anchor.y = 0.5;


		setTimeout(function(){game.state.start('sellevel');stilllaa.stop();still.play('',0,0.5,true);}, 5000); 





	},
};