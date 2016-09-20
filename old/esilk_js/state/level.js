Esilk.levelState = function(game){};

Esilk.levelState.prototype ={
	create: function(){

		game.add.sprite(0,0,'leaderbg');

		logo = game.add.sprite(0,50, 'leveltit');
		logo.scale.setTo(0.8, 0.8);


		balik = game.add.button(game.world.width-100,100,'balikkg', this.balikkeja);
		balik.scale.setTo(0.5, 0.5);
		balik.anchor.x= 0.5;


		play = game.add.button(200,game.world.height/2,'lvl1but', this.mena);
		play.scale.setTo(0.7, 0.7);
		play.anchor.x= 0.5;

		title = game.add.button(200,game.world.height/2 + 150,'lvl1buttit');
		title.anchor.x= 0.5;

		pass =  localStorage.getItem("markah");

		if(pass == 0){
			leader = game.add.button(game.world.width/2,game.world.height/2,'lvl2butl');
			leader.scale.setTo(0.7, 0.7);
			leader.anchor.x= 0.5;
		}else if (pass => 600){
			leader = game.add.button(game.world.width/2,game.world.height/2,'lvl2but');
			leader.scale.setTo(0.7, 0.7);
			leader.anchor.x= 0.5;
		}

		

		title = game.add.button(game.world.width/2,game.world.height/2 + 150,'lvl2buttit');
		title.anchor.x= 0.5;

		learn = game.add.button(game.world.width-200,game.world.height/2,'lvl3butl');
		learn.scale.setTo(0.7, 0.7);
		learn.anchor.x= 0.5;

		title = game.add.button(game.world.width -200,game.world.height/2 + 150,'lvl3buttit');
		title.anchor.x= 0.5;
	},

	mena: function(){
		still.stop();

		game.state.start('stagea');
	},

	balikkeja: function(){
		game.state.start('mainmenu');
	},
};