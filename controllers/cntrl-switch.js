console.log('cntrl-switch start');

var Switch = {
	create: function() {
		Controls.call();
	},

	switchTemplate: $(
		"<div class='cntrl'>" +
			"<div class='cntrl-box'>" +
					"<div class='cntrl-switch cntrl-switch-menu'>" +
						"<div class='switch-style'></div>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>"
	),

	infoStreamText: function(chgX, chgY) {
		// var textScrollHeight = $('.info-stream')[0].scrollHeight;
		// var textHeight = $('.info-stream').height();
		// $('.info-stream').scrollTop(textScrollHeight - textHeight);

		// $('.info-stream').append('Y: <b>' + chgY + '</b><sub>%</sub> X: <b>' + chgX + '<sub>%</sub></b><br>');
	},


// ________________________________________________ END OF SWITCH CONSTRUCTOR
}

Switch.prototype = new Controls;
Switch.prototype.constructor = Switch;







console.log('-- cntrl-switch END');

