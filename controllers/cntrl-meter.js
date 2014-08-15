console.log('cntrl-meter start');

var Meter = {
	create: function() {
		Controls.call();
	},

	meterTemplate: $(
		"<div class='cntrl'>" +
			"<div class='cntrl-box'>" +
					"<div class='cntrl-meter cntrl-meter-menu'>" +
						"<div class='meter-style'></div>" +
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

// __________________________________________________ END OF METER CONSTRUCTOR
}

Meter.prototype = new Controls;
Meter.prototype.constructor = Meter;