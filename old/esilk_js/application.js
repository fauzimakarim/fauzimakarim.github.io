//	Create your Phaser game and inject it into the gameContainer div.
//	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'gamescreen');

// game.scale.fullScreenScaleMode = new Phaser.ScaleManager.EXACT_FIT();
// game.scale.startFullScreen();

//	Add the States your game has.
//	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
game.state.add('boot', Esilk.bootState);
game.state.add('load', Esilk.loadState);
game.state.add('technie', Esilk.technieState);
game.state.add('landing', Esilk.landingState);
game.state.add('mainmenu', Esilk. mainmenuState);
game.state.add('more', Esilk. moreState);
game.state.add('learn', Esilk. learnState);
game.state.add('leader', Esilk. leaderState);
game.state.add('sellevel', Esilk. levelState);
game.state.add('stagea', Esilk. level1State);
game.state.add('lose', Esilk. loseState);
game.state.add('win', Esilk. winState);
game.state.add('morela', Esilk. morelaState);
game.state.add('abc', Esilk. abcState);
game.state.add('setup', Esilk. settingState);



//	Now start the Boot state.
game.state.start('boot');