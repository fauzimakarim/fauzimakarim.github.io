Esilk.technieState = function (game){
};

Esilk.technieState.prototype ={ 
	create: function(){
		game.add.sprite(0,0,'technielogo');

		tarafic = game.add.audio('tr');
		still = game.add.audio('still');;
		still.play('',0,0.5,true); 
		tarafic.play('',0,1,true);
		setTimeout(function(){game.state.start('landing');}, 7000); 
		
	},
};