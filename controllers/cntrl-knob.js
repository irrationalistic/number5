

var Knob = {
	create: function() {
		Controls.call();
	},

	knobTemplate: $(
		"<div class='cntrl cntrl-knob-menu cntrl-knob'>" +
			"<div class='cntrl-box'>" +
				"<div class='cntrl-knob-bounds>" +
					"<div class='knob'>" +
						"<div class='knob-style'></div>" +
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

// ________________________________________________ END OF KNOB CONTRUCTOR
}

Knob.prototype = new Controls;
Knob.prototype.constructor = Knob;











