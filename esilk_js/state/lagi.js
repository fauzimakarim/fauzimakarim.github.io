Esilk.morelaState = function(game){};

Esilk.morelaState.prototype ={
	create: function(){
		game.add.sprite(0,0, 'morebgb');


		logo = game.add.sprite(0,0, 'moretit');
		logo.scale.setTo(0.8, 0.8);

		balik = game.add.button(game.world.width-100,100,'balikkg', this.balikkeja);
		balik.scale.setTo(0.5, 0.5);
		balik.anchor.x= 0.5;

	},


	balikkeja: function(){
		game.state.start('mainmenu');
	},
};