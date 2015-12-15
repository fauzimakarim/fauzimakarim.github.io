Esilk.moreState = function(game){};

Esilk.moreState.prototype ={
	create: function(){
		game.add.sprite(0,0, 'morebga');


		logo = game.add.sprite(0,0, 'moretit');
		logo.scale.setTo(0.8, 0.8);

		setting = game.add.button(game.world.width-50,game.world.height-70,'nextwoi',this.nextwoi);
		setting.scale.setTo(0.4, 0.4);
		setting.anchor.x= 0.5;

	},

	nextwoi: function(){
		game.state.start('morela');

	},
};