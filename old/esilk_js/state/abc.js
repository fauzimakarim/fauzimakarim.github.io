Esilk.abcState = function(game){};

Esilk.abcState.prototype ={
	create: function(){
		game.add.sprite(0,0,'leaderbg');



		balik = game.add.button(game.world.width-100,10,'balikkg', this.balikkeja);
		balik.scale.setTo(0.5, 0.5);
		balik.anchor.x= 0.5;


		logo = game.add.sprite(10,-50, 'learntitb');
		logo.scale.setTo(0.8, 0.8);

		ap = game.add.button(0,100,'aa',this.showa);
		bp = game.add.button(70,100,'bb',this.showb);
		cp = game.add.button(140,100,'cc',this.showc);
		dp = game.add.button(210,100,'dd',this.showd);
		ep = game.add.button(280,100,'ee',this.showe);
		fp = game.add.button(350,100,'ff',this.showf);
		gp = game.add.button(420,100,'gg',this.showg);
		hp = game.add.button(490,100,'hh',this.showh);
		ip = game.add.button(560,100,'ii',this.showi);
		jp = game.add.button(630,100,'jj',this.showj);
		kp = game.add.button(700,100,'kk',this.showk);
		lp = game.add.button(770,100,'ll',this.showl);
		mp = game.add.button(840,100,'mm',this.showm);
		//b = game.add.button(70,100,'bb');

		//second row
		np = game.add.button(100,250,'nn',this.shown);
		op = game.add.button(170,250,'oo',this.showo);
		pp = game.add.button(240,250,'pp',this.showp);
		qp = game.add.button(310,250,'qq',this.showq);
		rp = game.add.button(380,250,'rr',this.showr);
		sp = game.add.button(450,250,'ss',this.shows);
		tp = game.add.button(520,250,'tt',this.showt);
		up = game.add.button(590,250,'uu',this.showu);
		vp = game.add.button(660,250,'vv',this.showv);
		wp = game.add.button(730,250,'ww',this.showw);
		xp = game.add.button(800,250,'xx',this.showx);
		yp = game.add.button(870,250,'yy',this.showy);
		zp = game.add.button(940,250,'zz',this.showz);

		//S.scale.setTo(0.7, 0.7);
		
		//popup
		ah = game.add.sprite(game.world.width/2, 400, 'aaa');
		ah.anchor.x = 0.5;
		ah.alpha = 0;
		bh = game.add.sprite(game.world.width/2, 400, 'bbb');
		bh.anchor.x = 0.5;
		bh.alpha = 0;
		ch = game.add.sprite(game.world.width/2, 400, 'ccc');
		ch.anchor.x = 0.5;
		ch.alpha = 0;
		dh = game.add.sprite(game.world.width/2, 400, 'ddd');
		dh.anchor.x = 0.5;
		dh.alpha = 0;
		eh = game.add.sprite(game.world.width/2, 400, 'eee');
		eh.anchor.x = 0.5;
		eh.alpha = 0;
		fh = game.add.sprite(game.world.width/2, 400, 'fff');
		fh.anchor.x = 0.5;
		fh.alpha = 0;
		gh = game.add.sprite(game.world.width/2, 400, 'ggg');
		gh.anchor.x = 0.5;
		gh.alpha = 0;
		hh = game.add.sprite(game.world.width/2, 400, 'hhh');
		hh.anchor.x = 0.5;
		hh.alpha = 0;
		ih = game.add.sprite(game.world.width/2, 400, 'iii');
		ih.anchor.x = 0.5;
		ih.alpha = 0;
		jh = game.add.sprite(game.world.width/2, 400, 'jjj');
		jh.anchor.x = 0.5;
		jh.alpha = 0;
		kh = game.add.sprite(game.world.width/2, 400, 'kkk');
		kh.anchor.x = 0.5;
		kh.alpha = 0;
		lh = game.add.sprite(game.world.width/2, 400, 'lll');
		lh.anchor.x = 0.5;
		lh.alpha = 0;
		mh = game.add.sprite(game.world.width/2, 400, 'mmm');
		mh.anchor.x = 0.5;
		mh.alpha = 0;
		nh = game.add.sprite(game.world.width/2, 400, 'nnn');
		nh.anchor.x = 0.5;
		nh.alpha = 0;
		oh = game.add.sprite(game.world.width/2, 400, 'ooo');
		oh.anchor.x = 0.5;
		oh.alpha = 0;
		ph = game.add.sprite(game.world.width/2, 400, 'ppp');
		ph.anchor.x = 0.5;
		ph.alpha = 0;
		qh = game.add.sprite(game.world.width/2, 400, 'qqq');
		qh.anchor.x = 0.5;
		qh.alpha = 0;
		rh = game.add.sprite(game.world.width/2, 400, 'rrr');
		rh.anchor.x = 0.5;
		rh.alpha = 0;
		sh = game.add.sprite(game.world.width/2, 400, 'sss');
		sh.anchor.x = 0.5;
		sh.alpha = 0;
		th = game.add.sprite(game.world.width/2, 400, 'ttt');
		th.anchor.x = 0.5;
		th.alpha = 0;
		uh = game.add.sprite(game.world.width/2, 400, 'uuu');
		uh.anchor.x = 0.5;
		uh.alpha = 0;
		vh = game.add.sprite(game.world.width/2, 400, 'vvv');
		vh.anchor.x = 0.5;
		vh.alpha = 0;
		wh = game.add.sprite(game.world.width/2, 400, 'www');
		wh.anchor.x = 0.5;
		wh.alpha = 0;
		xh = game.add.sprite(game.world.width/2, 400, 'xxx');
		xh.anchor.x = 0.5;
		xh.alpha = 0;
		yh = game.add.sprite(game.world.width/2, 400, 'yyy');
		yh.anchor.x = 0.5;
		yh.alpha = 0;
		zh = game.add.sprite(game.world.width/2, 400, 'zzz');
		zh.anchor.x = 0.5;
		zh.alpha = 0;
		
	},

	showa: function(){
		amus = game.add.audio('am');
		amus.play();
		ah.alpha = 1;
		setTimeout(function(){ah.alpha = 0;}, 5000); 
	},
	showb: function(){
		bmus = game.add.audio('bm');
		bmus.play();

		bh.alpha = 1;
		setTimeout(function(){bh.alpha = 0;}, 5000); 
	},
	showc: function(){
		cmus.play();mus = game.add.audio('cm');
		cmus.play();


		ch.alpha = 1;
		setTimeout(function(){ch.alpha = 0;}, 5000); 
	},
	showd: function(){
		dmus = game.add.audio('dm');
		dmus.play();

		
		dh.alpha = 1;
		setTimeout(function(){dh.alpha = 0;}, 5000); 
	},
	showe: function(){
		emus = game.add.audio('em');
		emus.play();

		eh.alpha = 1;
		setTimeout(function(){eh.alpha = 0;}, 5000); 
	},
	showf: function(){
		fmus = game.add.audio('fm');
		fmus.play();

		fh.alpha = 1;
		setTimeout(function(){fh.alpha = 0;}, 5000); 
	},
	showg: function(){
		gmus = game.add.audio('gm');
		gmus.play();

		gh.alpha = 1;
		setTimeout(function(){gh.alpha = 0;}, 5000); 
	},
	showh: function(){
		hmus = game.add.audio('hm');
		hmus.play();

		hh.alpha = 1;
		setTimeout(function(){hh.alpha = 0;}, 5000); 
	},
	showi: function(){
		imus = game.add.audio('im');
		imus.play();

		ih.alpha = 1;
		setTimeout(function(){ih.alpha = 0;}, 5000); 
	},
	showj: function(){
		jmus = game.add.audio('jm');
		jmus.play();

		jh.alpha = 1;
		setTimeout(function(){jh.alpha = 0;}, 5000); 
	},
	showk: function(){
		kmus = game.add.audio('km');
		kmus.play();

		kh.alpha = 1;
		setTimeout(function(){kh.alpha = 0;}, 5000); 
	},
	showl: function(){
		lmus = game.add.audio('lm');
		lmus.play();

		lh.alpha = 1;
		setTimeout(function(){lh.alpha = 0;}, 5000); 
	},
	showm: function(){
		mmus = game.add.audio('mm');
		mmus.play();

		mh.alpha = 1;
		setTimeout(function(){mh.alpha = 0;}, 5000); 
	},
	shown: function(){
		nmus = game.add.audio('nm');
		nmus.play();

		nh.alpha = 1;
		setTimeout(function(){nh.alpha = 0;}, 5000); 
	},
	showo: function(){
		omus = game.add.audio('om');
		omus.play();

		oh.alpha = 1;
		setTimeout(function(){oh.alpha = 0;}, 5000); 
	},
	showp: function(){
		pmus = game.add.audio('pm');
		pmus.play();

		ph.alpha = 1;
		setTimeout(function(){ph.alpha = 0;}, 5000); 
	},
	showq: function(){
		qmus = game.add.audio('qm');
		qmus.play();

		qh.alpha = 1;
		setTimeout(function(){qh.alpha = 0;}, 5000); 
	},
	showr: function(){
		rmus = game.add.audio('rm');
		rmus.play();

		rh.alpha = 1;
		setTimeout(function(){rh.alpha = 0;}, 5000); 
	},
	shows: function(){
		smus = game.add.audio('sm');
		smus.play();

		sh.alpha = 1;
		setTimeout(function(){sh.alpha = 0;}, 5000); 
	},
	showt: function(){
		tmus = game.add.audio('tm');
		tmus.play();

		th.alpha = 1;
		setTimeout(function(){th.alpha = 0;}, 5000); 
	},
	showu: function(){
		umus = game.add.audio('um');
		umus.play();

		uh.alpha = 1;
		setTimeout(function(){uh.alpha = 0;}, 5000); 
	},
	showv: function(){
		vmus = game.add.audio('vm');
		vmus.play();

		vh.alpha = 1;
		setTimeout(function(){vh.alpha = 0;}, 5000); 
	},
	showw: function(){
		wmus = game.add.audio('wm');
		wmus.play();

		wh.alpha = 1;
		setTimeout(function(){wh.alpha = 0;}, 5000); 
	},
	showx: function(){
		xmus = game.add.audio('xm');
		xmus.play();

		xh.alpha = 1;
		setTimeout(function(){xh.alpha = 0;}, 5000); 
	},
	showy: function(){
		ymus = game.add.audio('ym');
		ymus.play();

		yh.alpha = 1;
		setTimeout(function(){yh.alpha = 0;}, 5000); 
	},
	showz: function(){
		zmus = game.add.audio('zm');
		zmus.play();

		zh.alpha = 1;
		setTimeout(function(){zh.alpha = 0;}, 5000); 
	},


	balikkeja: function(){
		still.play('',0,0.5,true); 
		game.state.start('learn');
	},


};