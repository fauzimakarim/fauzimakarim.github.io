Esilk.landingState = function (game){};

Esilk.landingState.prototype = {
	create: function(){

        
       
       game.add.sprite(0,0,'gamebg');
       
       cara = game.add.sprite(-100, 440, 'vehicleleft');
       cara.scale.setTo(1.7, 1.7);
       carb = game.add.sprite(game.world.width + 200, 370, 'vehicleright');
       carb.scale.setTo(1.7, 1.7);

       press = game.add.button(game.world.width/2, game.world.height-150, 'pressstart', this.playgame);
       press.scale.setTo(0.9, 0.9);
       press.anchor.x=0.5;

       logo = game.add.sprite(0,50, 'esilklogo');
       logo.scale.setTo(0.8, 0.8);



       game.add.sprite(0,0,'overlay');

      	//  We need to enable physics on the car
      	game.physics.arcade.enable(cara);
      	game.physics.arcade.enable(carb);

  		//  car physics properties. Give the little guy a slight bounce.
    	//car.body.bounce.y = 0.2;
    	//car.body.gravity.y = 300;
    	//car.body.collideWorldBounds = true;

    	//  Our two animations, walking left and right.
    	cara.animations.add('moveleft', [0,12], 10, true);
    	carb.animations.add('moveright', [8,20], 10, true);


        //  Reset the cars velocity (movement)
        //car.body.velocity.x = 0;
    },

    update: function(){
    	cara.body.velocity.x =50;

    	cara.animations.play('moveleft');

    	if (cara.x > game.world.width+20){
    		cara.x = -100;
    	}

    	carb.body.velocity.x = -50;

    	carb.animations.play('moveright');

    	if (carb.x < -100){
    		carb.x = game.world.width+200;
    	}
    },

    playgame: function(){
    	game.state.start('mainmenu');
    },
};