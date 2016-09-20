Esilk.settingState = function(game){};

Esilk.settingState.prototype ={
	create: function(){

		game.add.sprite(0,0,'menubg');

		logo = game.add.sprite(0,50, 'setit');
		logo.scale.setTo(0.8, 0.8);

		balik = game.add.button(game.world.width-100,100,'balikkg', this.balikkeja);
		balik.scale.setTo(0.5, 0.5);
		balik.anchor.x= 0.5;

		tanya = game.add.text(100,300, "Sound:", { font: "50px Arial", fill: "#000000", align: "center" });

		onla = game.add.button(300,game.world.height/2,'onkot', this.kuat);
		onla.scale.setTo(0.5, 0.5);
		onla = game.add.button(500,game.world.height/2,'offkot', this.bisingla);
		onla.scale.setTo(0.5, 0.5);
		//onla.anchor.x= 0.5;
		
		if(localStorage.getItem("pemain") != null){
			tanya = game.add.text(100,400, "Logout:", { font: "50px Arial", fill: "#000000", align: "center" });
			mlasda = game.add.button(300,400,'logkot', this.kluar);
			mlasda.scale.setTo(0.5, 0.5);
		}
		

	},

	kuat: function(){
		game.sound.mute = false;
	},

	bisingla: function(){
		game.sound.mute = true;
	},

	balikkeja: function(){
		game.state.start('mainmenu');
	},

	kluar: function(){
		
		localStorage.removeItem("pemain", "");
		game.state.start('mainmenu');

	},
};