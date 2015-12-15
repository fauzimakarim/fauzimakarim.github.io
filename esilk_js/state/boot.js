var Esilk = {};

Esilk.bootState = function (game) {
};

Esilk.bootState.prototype = {
	init: function () {
	},
	preload: function () {
	},
	create: function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('load');
	},

};

