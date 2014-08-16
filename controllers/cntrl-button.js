console.log('cntrl-button start');

var Bttn = {
	create: function() {
		Controls.call();
	},

	bttnTemplate: $(
		"<div class='cntrl'>" +
			"<div class='cntrl-box'>" +
					"<div class='cntrl-bttn cntrl-bttn-menu'>" +
						"<div class='bttn-style'></div>" +
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









// __________________________________________________ END BUTTON CONSTRUCTOR
}

Bttn.prototype = new Controls;
Bttn.prototype.constructor = Bttn;



console.log('-- cntrl-button END');