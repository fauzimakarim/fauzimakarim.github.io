Esilk.leaderState = function(game){};

Esilk.leaderState.prototype ={
	create: function(){
		game.add.sprite(0,0,'leaderbg');

		balik = game.add.button(game.world.width-100,100,'balikkg', this.balikkeja);
		balik.scale.setTo(0.5, 0.5);
		balik.anchor.x= 0.5;

		logo = game.add.sprite(0,50, 'leadertit');
		logo.scale.setTo(0.8, 0.8);

		pnametit = game.add.text(400, 250, "Player Name", { font: "32px Arial", fill: "#ffffff", align: "center" });
		pmarktit = game.add.text(700, 250, "Highest Score", { font: "32px Arial", fill: "#ffffff", align: "center" });

		pname = game.add.text(400, 300, "1."+localStorage.getItem("pemain"), { font: "32px Arial", fill: "#ffffff", align: "center" });
		pname = game.add.text(700, 300, ""+localStorage.getItem("markah"), { font: "32px Arial", fill: "#ffffff", align: "center" });

	},

	balikkeja: function(){
		game.state.start('mainmenu');
	},
};