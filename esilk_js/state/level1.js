Esilk.level1State = function(game){


};

Esilk.level1State.prototype ={

	create: function(){


		base = game.add.sprite(0,1024,'base1');
		base.anchor.y = 1;
		
		overlay = game.add.sprite(0,1024,'treebase');
		overlay.anchor.y = 1;


		game.world.setBounds(0, 0, 1024, 1024);

		//game.input.keyboard.addCallbacks( this, this.mykeydownhandler );

		keyboard = game.input.keyboard;

		player = game.add.sprite(game.world.width/2+10, game.world.height,'izzyahmad');
		player.scale.setTo(1.5,1.5)
		player.anchor.x = 0.5;
		player.anchor.y = 1;
		//player.body.setSize(16, 32, 0, 0);
		game.physics.enable(player, Phaser.Physics.ARCADE);

		cara = game.add.sprite(-100, game.world.height-320, 'ultimate');
		cara.scale.setTo(1.7, 1.7);
		carb = game.add.sprite(600, game.world.height-384, 'ultimate');
		carb.scale.setTo(1.7, 1.7);
		carc = game.add.sprite(400, game.world.height-320, 'ultimate');
		carc.scale.setTo(1.7, 1.7);
		card = game.add.sprite(100, game.world.height-16*32, 'keretakiri');
		card.scale.setTo(1.7, 1.7);
		care = game.add.sprite(800, game.world.height-18*32, 'ultimate');
		care.scale.setTo(1.7, 1.7);
		carf = game.add.sprite(200, game.world.height-22*32, 'ultimate');
		carf.scale.setTo(1.7, 1.7);
		carg = game.add.sprite(800, game.world.height-24*32, 'ultimate');
		carg.scale.setTo(1.7, 1.7);
		carh = game.add.sprite(500, game.world.height-24*32, 'ultimate');
		carh.scale.setTo(1.7, 1.7);
		cari = game.add.sprite(200, game.world.height-28*32, 'ultimate');
		cari.scale.setTo(1.7, 1.7);
		carj = game.add.sprite(1000, game.world.height-28*32, 'ultimate');
		carj.scale.setTo(1.7, 1.7);
		cark = game.add.sprite(700, game.world.height-30*32, 'ultimate');
		cark.scale.setTo(1.7, 1.7);



		game.camera.follow(player,Phaser.Camera.FOLLOW_LOCKON);

		ghosttree = game.add.sprite(0,1024,'ghosttree');
		ghosttree.anchor.y = 1;

		langgar = game.add.group();

		langgar.enableBody = true;


		pokuk = langgar.create(480, game.world.height-64, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(448, game.world.height-96, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(608, game.world.height-64, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(576, game.world.height-96, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(352, game.world.height-448, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(608, game.world.height-4*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(640, game.world.height-6*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(32*13, game.world.height-5*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(32*11, game.world.height-5*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(32*12, game.world.height-4*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(32*10, game.world.height-4*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(32*9, game.world.height-8*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(32*10, game.world.height-7*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(544, game.world.height-448, 'pokukk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(672, game.world.height-448, 'pokukk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(672, game.world.height-256, 'pokukk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(22*32, game.world.height-14*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(14*32, game.world.height-20*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(18*32, game.world.height-20*32, 'pokukk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(24*32, game.world.height-20*32, 'pokuk');
		pokuk.body.immovable = true;
		pokuk = langgar.create(9*32, game.world.height-20*32, 'pokukk');
		pokuk.body.immovable = true;
		player.body.collideWorldBounds = true;

		pokuk = langgar.create(7*32, game.world.height-14*32, 'syarat');
		pokuk.body.immovable = true;
		pokuk = langgar.create(26*32, game.world.height-20*32, 'kros');
		pokuk.body.immovable = true;
		pokuk = langgar.create(14*32, game.world.height-26*32, 'bnti');
		pokuk.body.immovable = true;

		game.add.button(7*32, game.world.height-14*32,'syarat', this.fuckthis);
		game.add.button(26*32, game.world.height-20*32,'kros', this.fuckthisshit);
		game.add.button(14*32, game.world.height-26*32,'bnti', this.fuckthisshitsomemore);


		lintas = 768;
		markah = 0;

		t = game.add.text(0, 0, "Marks: "+markah, { font: "32px Arial", fill: "#ffffff", align: "center" });
		t.fixedToCamera = true;
		t.cameraOffset.setTo(32, 32);

		//  We need to enable physics on the car
		game.physics.arcade.enable(cara);
		game.physics.arcade.enable(carb);
		game.physics.arcade.enable(carc);
		game.physics.arcade.enable(card);
		game.physics.arcade.enable(care);
		game.physics.arcade.enable(carf);
		game.physics.arcade.enable(carg);
		game.physics.arcade.enable(carh);
		game.physics.arcade.enable(cari);
		game.physics.arcade.enable(carj);
		game.physics.arcade.enable(cark);

		//  Our two animations, walking left and right.
		

		//POPUP
		//  You can drag the pop-up window around
		popup = game.add.sprite(game.world.width/2, 300, 'overlaytrafic');
		popup.scale.setTo(0.4,0.4);
		popup.alpha = 0;
		popup.fixedToCamera = true;
		popup.anchor.set(0.5);
		popup.inputEnabled = true;
		popup.input.enableDrag();

		popupa = game.add.sprite(game.world.width/2, 300, 'overlaykros');
		popupa.scale.setTo(0.4,0.4);
		popupa.alpha = 0;
		popupa.fixedToCamera = true;
		popupa.anchor.set(0.5);
		popupa.inputEnabled = true;
		popupa.input.enableDrag();

		popupaa = game.add.sprite(game.world.width/2, 300, 'overlaykrosjump');
		popupaa.scale.setTo(0.4,0.4);
		popupaa.alpha = 0;
		popupaa.fixedToCamera = true;
		popupaa.anchor.set(0.5);
		popupaa.inputEnabled = true;
		popupaa.input.enableDrag();


		balik = game.add.button(game.world.width-100,50,'balikkg', this.balikkeja);
		balik.scale.setTo(0.5, 0.5);
		balik.anchor.x= 0.5;
		balik.fixedToCamera = true;

		stillla = game.add.audio('letsplay');;
		stillla.play('',0,0.3,true); 
		tarafic.play('',0,1,true);


		cara.animations.add('a', [0,15], 10, true);
		carb.animations.add('b', [67,82], 10, true);
		carc.animations.add('c', [4,19], 10, true);
		card.animations.add('d', [1,12], 10, true);
		care.animations.add('e', [65,80], 10, true);
		carf.animations.add('f', [6,21], 10, true);
		carg.animations.add('g', [95,110], 10, true);
		carh.animations.add('h', [96,111], 10, true);
		cari.animations.add('i', [5,20], 10, true);
		carj.animations.add('j', [30,45], 10, true);
		cark.animations.add('k', [97,112], 10, true);

		player.animations.add('jalankaki', [0,1,0,2], 10,true);
		player.animations.add('bentijalan', [0], 10,true);



	},

	update: function(){

		game.physics.arcade.collide(cara, player, this.fuckthat);
		game.physics.arcade.collide(carb, player, this.fuckthat);
		game.physics.arcade.collide(carc, player, this.fuckthat);
		game.physics.arcade.collide(card, player, this.fuckthat);
		game.physics.arcade.collide(care, player, this.fuckthat);
		game.physics.arcade.collide(carf, player, this.fuckthat);
		game.physics.arcade.collide(carg, player, this.fuckthat);
		game.physics.arcade.collide(carh, player, this.fuckthat);
		game.physics.arcade.collide(cari, player, this.fuckthat);
		game.physics.arcade.collide(carj, player, this.fuckthat);
		game.physics.arcade.collide(cark, player, this.fuckthat);

		cara.body.velocity.x = 200;

		cara.animations.play('a');

		if (cara.x > game.world.width+20){
			cara.x = -100;
		};

		carc.body.velocity.x = 200;

		carc.animations.play('c');

		if (carc.x > game.world.width+20){
			carc.x = -100;
		};

		card.body.velocity.x = 200;

		card.animations.play('d');

		if (card.x > game.world.width+20){
			card.x = -100;
		};

		carf.body.velocity.x = 200;

		carf.animations.play('f');

		if (carf.x > game.world.width+20){
			carf.x = -100;
		};

		cari.body.velocity.x = 200;

		cari.animations.play('i');

		if (cari.x > game.world.width+20){
			cari.x = -100;
		}

		carj.body.velocity.x = 100;

		carj.animations.play('j');

		if (carj.x > game.world.width+20){
			carj.x = -100;
		}


		//lawan arah

		carb.body.velocity.x = -150;

		carb.animations.play('b');

		if (carb.x < -100){
			carb.x = game.world.width+200;
		}

		if (carb.x < -100){
			carb.x = game.world.width+200;
		}

		care.body.velocity.x = -150;

		care.animations.play('e');

		if (care.x < -100){
			care.x = game.world.width+200;
		}

		if (carb.e < -100){
			carb.e = game.world.width+200;
		}

		carg.body.velocity.x = -150;

		carg.animations.play('g');

		if (carg.x < -100){
			carg.x = game.world.width+200;
		}

		if (carg.e < -100){
			carg.e = game.world.width+200;
		}


		carh.body.velocity.x = -150;

		carh.animations.play('h');

		if (carh.x < -100){
			carh.x = game.world.width+200;
		}

		if (carh.e < -100){
			carh.e = game.world.width+200;
		}

		cark.body.velocity.x = -150;

		cark.animations.play('k');

		if (cark.x < -100){
			cark.x = game.world.width+200;
		}

		if (cark.e < -100){
			cark.e = game.world.width+200;
		}


		//keyboard setting

		if(keyboard.isDown(Phaser.Keyboard.A)){
			player.body.velocity.x = -50;
			player.animations.play('jalankaki');

			//player.body.x = -50;
		} else if(keyboard.isDown(Phaser.Keyboard.D)){
			player.animations.play('jalankaki');
			player.body.velocity.x = 50;
		} else {
			player.body.velocity.x = 0;
			//player.animations.play('bentijalan');

		}

		if(keyboard.isDown(Phaser.Keyboard.W)){
			player.body.velocity.y = -50;
			player.animations.play('jalankaki');

		} else if(keyboard.isDown(Phaser.Keyboard.S)){
			
			player.body.velocity.y = 50;
			player.animations.play('jalankaki');

		} else {
			player.body.velocity.y = 0;
			//player.animations.play('bentijalan');
		}


		//collide obstacle
		game.physics.arcade.collide(player, langgar);

		//mark increment
		if (player.y < lintas){
			markah+= 100;
			lintas -= 128;
			
			t.setText( "Marks: "+markah);

		} else if(player.y < 64){
			tarafic.stop();
			stillla.stop();
			localStorage.setItem("markah", markah);
			game.state.start('win');		
		}

	},


	fuckthat: function(){
		tarafic.stop();
		stillla.stop();
		localStorage.setItem("markahklah", markah);
		game.state.start('lose');
	},

	mykeydownhandler: function(evt ){
		// Skip it unless it's a-z.
		if( evt.which < "A".charCodeAt(0) || evt.which > "Z".charCodeAt(0) )
		{
			console.log( "Not a letter: ", evt.which );
			return;
		}

		var letter = String.fromCharCode( evt.which );
		if( !evt.shiftKey ) letter = letter.toLowerCase();

		console.log( letter );
	},

	fuckthis: function(){
		markah+=150;
		t.setText( "Marks: "+markah);
		popup.alpha = 1;
		setTimeout(function(){popup.alpha = 0;}, 5000); 

	},

	fuckthisshit: function(){
		markah+=150;
		t.setText( "Marks: "+markah);
		popupa.alpha = 1;
		setTimeout(function(){popupa.alpha = 0;}, 5000); 

	},

	fuckthisshitsomemore: function(){
		markah+=150;
		t.setText( "Marks: "+markah);
		popupaa.alpha = 1;
		setTimeout(function(){popupaa.alpha = 0;}, 5000); 

	},

	balikkeja: function(){
		game.state.start('mainmenu');
	},


};