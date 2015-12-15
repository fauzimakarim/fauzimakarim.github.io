Esilk.loadState = function(game){};

Esilk.loadState.prototype ={

  create: function(){
    game.add.text(game.world.width/2, game.world.height/2,'Loading...',{font: '30px Arial', fill: '#fff'});

    localStorage.setItem("markah", 0);
  },

  preload: function(){
		//This function will load all game assets
        //Technie State
        game.load.image('technielogo', 'assets/image/stillimage/technie/technie.png');
        
        //Landing
        game.load.image('gamebg', 'assets/image/stillimage/background/gamebg.png');
        game.load.image('overlay', 'assets/image/stillimage/background/overlay.png');
        game.load.image('pressstart', 'assets/image/stillimage/mainmenu/press.png');
        game.load.image('esilklogo', 'assets/image/stillimage/mainmenu/title.png');
        
        //Vehicle
        game.load.spritesheet('vehicleleft', 'assets/image/spritesheets/vehicle/left.gif', 32, 32);
        game.load.spritesheet('vehicleright', 'assets/image/spritesheets/vehicle/right.gif', 32, 32);

        //Player
        

       	//Main Menu
       	game.load.image('playbuttit','assets/image/stillimage/menu/men.png');
       	game.load.image('abcbuttit','assets/image/stillimage/menu/alphabet.png');
        game.load.image('loginwoi','assets/image/stillimage/menu/login.png');
        game.load.image('morebuttit','assets/image/stillimage/menu/about.png');
        game.load.image('marketbuttit','assets/image/stillimage/menu/pasar.png');
        game.load.image('settingbuttit','assets/image/stillimage/menu/set.png');
        game.load.image('leaderbuttit','assets/image/stillimage/menu/board.png');
        game.load.image('menutit', 'assets/image/stillimage/mainmenu/menutit.png');
        game.load.image('menubg', 'assets/image/stillimage/background/menu.png')
        game.load.image('playbut', 'assets/image/stillimage/menu/play.png');
        game.load.image('leaderbut', 'assets/image/stillimage/menu/leaderboard.png');
        game.load.image('abcbut', 'assets/image/stillimage/menu/abc.png');
        game.load.image('morebut', 'assets/image/stillimage/menu/learnmore.png');
        game.load.image('marketbut', 'assets/image/stillimage/menu/market.png');
        game.load.image('settingbut', 'assets/image/stillimage/menu/setting.png');
        game.load.image('shapebut', 'assets/image/stillimage/menu/play.png');
        game.load.image('arabbut', 'assets/image/stillimage/menu/arab.png');
        game.load.image('arabbuttit', 'assets/image/stillimage/menu/arabia.png')
        game.load.image('shapebuttit', 'assets/image/stillimage/menu/shape.png');

       	//Learn
       	game.load.image('learntit', 'assets/image/stillimage/mainmenu/learntit.png');
       	game.load.image('level1', 'assets/image/stillimage/level/lvl1.png');
       	game.load.image('level2', 'assets/image/stillimage/level/lvl2.png');
       	game.load.image('level3', 'assets/image/stillimage/level/lvl3.png');
        game.load.image('learntitb', 'assets/image/stillimage/mainmenu/bljo.png');

       	//More
        game.load.image('moretit', 'assets/image/stillimage/mainmenu/about.png');
        game.load.image('morebg', 'assets/image/stillimage/background/more.png');
        game.load.image('morebga', 'assets/image/stillimage/background/morea.png');
        game.load.image('morebgb', 'assets/image/stillimage/background/moreb.png');
        game.load.image('nextwoi', 'assets/image/stillimage/navigate/right.png');

       	//Leaderboard
       	game.load.image('leadertit', 'assets/image/stillimage/mainmenu/leaderbod.png');
       	game.load.image('leaderbg', 'assets/image/stillimage/background/leaderbg.png');

       	//Select Level
       	game.load.image('leveltit', 'assets/image/stillimage/mainmenu/sellvl.png');
       	game.load.image('lvl1but', 'assets/image/stillimage/level/lvl1.png');
       	game.load.image('lvl2but', 'assets/image/stillimage/level/lvl2.png');
       	game.load.image('lvl3but', 'assets/image/stillimage/level/lvl3.png');
        game.load.image('lvl2butl', 'assets/image/stillimage/level/lvl2lock.png');
        game.load.image('lvl3butl', 'assets/image/stillimage/level/lvl3lock.png');
        game.load.image('lvl1buttit', 'assets/image/stillimage/level/a.png');
        game.load.image('lvl2buttit', 'assets/image/stillimage/level/b.png');
        game.load.image('lvl3buttit', 'assets/image/stillimage/level/c.png');
       	//game.load.image('', 'assets/image/stillimage/level/.png');
       	
       	//Level 1
       	game.load.tilemap('levelsatu', 'assets/image/level/level1.json', null, Phaser.Tilemap.TILED_JSON);
       	//game.load.tilemap('testis', 'assets/image/level/test.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.spritesheet('ultimate', 'assets/image/spritesheets/ultimate.png', 32, 32);
        game.load.image('base1', 'assets/image/level/level1.png');
        game.load.image('treebase', 'assets/image/level/overlay.png');
        game.load.image('ghosttree', 'assets/image/level/ghosttree.png');
        game.load.image('player', 'assets/image/spritesheets/vehicle/player.png');
        game.load.image('pokuk', 'assets/image/stillimage/obstacle/scalep.png');
        game.load.image('pokukk', 'assets/image/stillimage/obstacle/scalepp.png');
        game.load.image('syarat', 'assets/image/stillimage/signpost/syarat.png');
        game.load.image('kros', 'assets/image/stillimage/signpost/cros.png');
        game.load.image('bnti', 'assets/image/stillimage/signpost/stop.png');
        game.load.image('overlaytrafic', 'assets/image/stillimage/background/fic.png');
        game.load.image('overlaykros', 'assets/image/stillimage/background/dick.png');
        game.load.image('overlaykrosjump', 'assets/image/stillimage/background/wtf.png');

        //game.load.tilemap('levelsatucsv', 'assets/image/level/level1.json', null, Phaser.Tilemap.CSV);
        //
        
        //lose
        game.load.image('loselol', 'assets/image/stillimage/mainmenu/lose.png');

        //win
        game.load.image('winlol', 'assets/image/stillimage/mainmenu/win.png');
        game.load.image('balikkg', 'assets/image/stillimage/navigate/back.png');


        //audio
        game.load.audio('trfik', 'assets/audio/trafic.mp3');
        game.load.audio('tr', 'assets/audio/tr.wav');
        game.load.audio('cheer', 'assets/audio/cher.wav');
        game.load.audio('still', 'assets/audio/still.mp3');
        game.load.audio('letsplay', 'assets/audio/p.mp3');
        game.load.audio('boo', 'assets/audio/boo.mp3');

        //alphabet
        game.load.image('aa', 'assets/image/stillimage/alphabet/a.png'); 
        game.load.image('bb', 'assets/image/stillimage/alphabet/b.png'); 
        game.load.image('cc', 'assets/image/stillimage/alphabet/c.png');
        game.load.image('dd', 'assets/image/stillimage/alphabet/d.png');
        game.load.image('ee', 'assets/image/stillimage/alphabet/e.png');
        game.load.image('ff', 'assets/image/stillimage/alphabet/f.png'); 
        game.load.image('gg', 'assets/image/stillimage/alphabet/g.png');
        game.load.image('hh', 'assets/image/stillimage/alphabet/h.png');
        game.load.image('ii', 'assets/image/stillimage/alphabet/i.png');
        game.load.image('jj', 'assets/image/stillimage/alphabet/j.png');
        game.load.image('kk', 'assets/image/stillimage/alphabet/k.png');
        game.load.image('ll', 'assets/image/stillimage/alphabet/l.png');
        game.load.image('mm', 'assets/image/stillimage/alphabet/m.png');
        game.load.image('nn', 'assets/image/stillimage/alphabet/n.png');
        game.load.image('oo', 'assets/image/stillimage/alphabet/o.png');
        game.load.image('pp', 'assets/image/stillimage/alphabet/p.png');
        game.load.image('qq', 'assets/image/stillimage/alphabet/q.png');
        game.load.image('rr', 'assets/image/stillimage/alphabet/r.png');
        game.load.image('ss', 'assets/image/stillimage/alphabet/s.png');
        game.load.image('tt', 'assets/image/stillimage/alphabet/t.png');
        game.load.image('uu', 'assets/image/stillimage/alphabet/u.png');
        game.load.image('vv', 'assets/image/stillimage/alphabet/v.png');
        game.load.image('ww', 'assets/image/stillimage/alphabet/w.png');
        game.load.image('xx', 'assets/image/stillimage/alphabet/x.png');
        game.load.image('yy', 'assets/image/stillimage/alphabet/y.png');
        game.load.image('zz', 'assets/image/stillimage/alphabet/z.png');


        game.load.image('aaa', 'assets/image/stillimage/hand/a.png');
        game.load.image('bbb', 'assets/image/stillimage/hand/b.png');
        game.load.image('ccc', 'assets/image/stillimage/hand/c.png');
        game.load.image('ddd', 'assets/image/stillimage/hand/d.png');
        game.load.image('eee', 'assets/image/stillimage/hand/e.png');
        game.load.image('fff', 'assets/image/stillimage/hand/f.png');
        game.load.image('ggg', 'assets/image/stillimage/hand/g.png');
        game.load.image('hhh', 'assets/image/stillimage/hand/h.png');
        game.load.image('iii', 'assets/image/stillimage/hand/i.png');
        game.load.image('jjj', 'assets/image/stillimage/hand/j.png');
        game.load.image('kkk', 'assets/image/stillimage/hand/k.png');
        game.load.image('lll', 'assets/image/stillimage/hand/l.png');
        game.load.image('mmm', 'assets/image/stillimage/hand/m.png');
        game.load.image('nnn', 'assets/image/stillimage/hand/n.png');
        game.load.image('ooo', 'assets/image/stillimage/hand/o.png');
        game.load.image('ppp', 'assets/image/stillimage/hand/p.png');
        game.load.image('qqq', 'assets/image/stillimage/hand/q.png');
        game.load.image('rrr', 'assets/image/stillimage/hand/r.png');
        game.load.image('sss', 'assets/image/stillimage/hand/s.png');
        game.load.image('ttt', 'assets/image/stillimage/hand/t.png');
        game.load.image('uuu', 'assets/image/stillimage/hand/u.png');
        game.load.image('vvv', 'assets/image/stillimage/hand/v.png');
        game.load.image('www', 'assets/image/stillimage/hand/w.png');
        game.load.image('xxx', 'assets/image/stillimage/hand/x.png');
        game.load.image('yyy', 'assets/image/stillimage/hand/y.png');
        game.load.image('zzz', 'assets/image/stillimage/hand/z.png');


        //SETTING
        game.load.image('setit', 'assets/image/stillimage/mainmenu/setting.png');
        game.load.image('onkot', 'assets/image/stillimage/navigate/on.png');
        game.load.image('offkot', 'assets/image/stillimage/navigate/off.png');
        game.load.image('logkot', 'assets/image/stillimage/navigate/lgout.png');


        //sound
        game.load.audio('am', 'assets/audio/alphabet/a.mp3');
        game.load.audio('bm', 'assets/audio/alphabet/b.mp3');
        game.load.audio('cm', 'assets/audio/alphabet/c.mp3');
        game.load.audio('dm', 'assets/audio/alphabet/d.mp3');
        game.load.audio('em', 'assets/audio/alphabet/e.mp3');
        game.load.audio('fm', 'assets/audio/alphabet/f.mp3');
        game.load.audio('gm', 'assets/audio/alphabet/g.mp3');
        game.load.audio('hm', 'assets/audio/alphabet/h.mp3');
        game.load.audio('im', 'assets/audio/alphabet/i.mp3');
        game.load.audio('jm', 'assets/audio/alphabet/j.mp3');
        game.load.audio('km', 'assets/audio/alphabet/k.mp3');
        game.load.audio('lm', 'assets/audio/alphabet/l.mp3');
        game.load.audio('mm', 'assets/audio/alphabet/m.mp3');
        game.load.audio('nm', 'assets/audio/alphabet/n.mp3');
        game.load.audio('om', 'assets/audio/alphabet/o.mp3');
        game.load.audio('pm', 'assets/audio/alphabet/p.mp3');
        game.load.audio('qm', 'assets/audio/alphabet/q.mp3');
        game.load.audio('rm', 'assets/audio/alphabet/r.mp3');
        game.load.audio('sm', 'assets/audio/alphabet/s.mp3');
        game.load.audio('tm', 'assets/audio/alphabet/t.mp3');
        game.load.audio('um', 'assets/audio/alphabet/u.mp3');
        game.load.audio('vm', 'assets/audio/alphabet/v.mp3');
        game.load.audio('wm', 'assets/audio/alphabet/w.mp3');
        game.load.audio('xm', 'assets/audio/alphabet/x.mp3');
        game.load.audio('ym', 'assets/audio/alphabet/y.mp3');
        game.load.audio('zm', 'assets/audio/alphabet/z.mp3');


        //all sprite
        game.load.spritesheet('keretakanan', 'assets/image/spritesheets/right.png', 32, 32);
        game.load.spritesheet('keretakiri', 'assets/image/spritesheets/left.png', 32, 32);
        game.load.spritesheet('halanganhidup', 'assets/image/spritesheets/misc.png', 32, 32);
        game.load.spritesheet('izzyahmad', 'assets/image/spritesheets/playermovement.png', 32, 32);

        

      },



      update: function(){
        game.state.start('technie');
      }
    };