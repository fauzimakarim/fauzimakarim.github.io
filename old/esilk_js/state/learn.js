Esilk.learnState = function(game){};

Esilk.learnState.prototype ={
	create: function(){
		game.add.sprite(0,0, 'menubg');


		balik = game.add.button(game.world.width-100,100,'balikkg', this.balikkeja);
		balik.scale.setTo(0.5, 0.5);
		balik.anchor.x= 0.5;

		logo = game.add.sprite(0,50, 'learntit');
		logo.scale.setTo(0.8, 0.8);

		abc = game.add.button(200, game.world.height/2, 'abcbut', this.bukaka);
		abc.scale.setTo(0.8, 0.8);
		abc.anchor.x=0.5;
		a = game.add.sprite(200, game.world.height/2+150, 'abcbuttit');
		a.anchor.x = 0.5;

		arab = game.add.button(game.world.width/2, game.world.height/2, 'arabbut');
		arab.scale.setTo(0.8, 0.8);
		arab.anchor.x=0.5;
		a = game.add.sprite(game.world.width/2, game.world.height/2+150, 'arabbuttit');
		a.anchor.x = 0.5;


		shape = game.add.button(game.world.width - 200, game.world.height/2, 'shapebut');
		shape.scale.setTo(0.8, 0.8);
		shape.anchor.x=0.5;
		a = game.add.sprite(game.world.width-200, game.world.height/2+150, 'shapebuttit');
		a.anchor.x = 0.5;

	},

	bukaka: function(){
		still.stop();
		game.state.start('abc');
	},

	balikkeja: function(){
		game.state.start('mainmenu');
	},
};