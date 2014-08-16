console.log('cntrl-joystick start');


// _________________________________________________________________ JOYSTICK OBJECT	
var Joystick = function() {
	var self = this;
	this.create = function() {
		Controls.call();
		this.$el = self.joystickTemplate;
		$el.appendTo($('.frame'));
	};

	// _________________________________________________________________ JOYSTICK TEMPLATE
	this.joystickTemplate = $(
		"<div class='cntrl cntrl-jystk-menu cntrl-jytsk'>" +
			"<div class='cntrl-box'>" +
				"<div class='jystk-bounds'>" +
					"<div class='jystk'>" +
						"<div class='jystk-style'></div>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>"
	),

	// ______________________________________________________ JOYSTICK BOUNDS
	this.boundsStyleAndSize = function() {
		var boundsSize = Math.ceil(cntrlBoxWidth * 0.88);
		if(boundsSize % 2 != 0) {
			boundsSize --
		};
		var jystkSize = Math.floor(boundsSize * 0.8);
		var jystkStyleSize = jystkSize * 0.80;
		var jystkCenteringOffset = (boundsSize - jystkSize) / 2;

		$('.jystk-bounds').css({
								'width': boundsSize + 'px',
								'height': boundsSize + 'px'
								});		
		$('.jystk').css({	
							'width': jystkSize + 'px',
							'height': jystkSize + 'px',
							'top': jystkCenteringOffset,
							'left': jystkCenteringOffset
						});
		$('.jystk-style').css({
								'width': jystkStyleSize + 'px',
								'height': jystkStyleSize + 'px'
								});
	},

	// _______________________________________________________ INFO STREAM
	this.infoStreamText = function(chgX, chgY) {
		var textScrollHeight = $('.info-stream')[0].scrollHeight;
		var textHeight = $('.info-stream').height();
		$('.info-stream').scrollTop(textScrollHeight - textHeight);

		$('.info-stream').append('Y: <b>' + chgY + '</b><sub>%</sub> X: <b>' + chgX + '<sub>%</sub></b><br>');
	},

	// _______________________________________________________ BOUNCEBACK ANIMATION
	this.bounceBack =  function() {
		return TweenLite.to($('.jystk'), 0.185, {css:{'transform': ''}, ease: Bounce.easeOut});
	},

	// _______________________________________________________ DRAGGABLE
	this.moveStick = function() {
		Draggable.create($('.jystk'), {
			type:'x,y',
			bounds: $('.jystk-bounds'),
			dragResistance: 0.25,
			onPress: function() {
				var changeX = Math.round((this.x / this.maxX) * 100);
				var changeY = Math.round(-(this.y / this.maxY) * 100);
				
				infoStreamText(changeX, changeY);
			},
			onDrag: function() {
				// console.log('min x: ' + this.minX + '   min y: ' + this.minY + '   max x: ' + this.maxX + '   max y: ' + this.maxY);
				// console.log('x: ' + this.x + '   y: ' + this.y);
				var changeX = Math.round((this.x / this.maxX) * 100);
				var changeY = Math.round(-(this.y / this.maxY) * 100);
				
				infoStreamText(changeX, changeY);

				$('.status-light').css({
										'background-color': 'rgb(255, 0, 0)',
										'box-shadow': '0 0 3px 2px rgba(250, 10, 0, 0.6)',
										'border': 'none'
										});
				$('.cntrl-antenna *').css({
											'background-color': 'orange',
											'box-shadow': '0 0 3px 2px rgba(255, 215, 0, 0.2)'
											});
			},
			onDragEnd: function() {
				bounceBack();
				$('.status-light').css({
										'background-color': 'rgb(80, 0, 0)',
										'box-shadow': '',
										'border': '1px solid rgba(20, 20, 20, 0.8)'
										});
				$('.cntrl-antenna *').css({
											'background-color': 'black',
											'box-shadow': ''
											});
				var changeX = Math.round((this.x / this.maxX) * 100);
				var changeY = Math.round(-(this.y / this.maxY) * 100);
				
				infoStreamText(changeX, changeY);
			},
			onRelease: function() {
				var changeX = Math.round((this.x / this.maxX) * 100);
				var changeY = Math.round(-(this.y / this.maxY) * 100);
				
				infoStreamText(changeX, changeY);
			}
		});
	}

// __________________________________________________ END JOYSTICK CONSTRUCTOR
};


var joystick1 = new Joystick();

console.log(joystick1.joystickTemplate);
$('.frame').append(joystick1.joystickTemplate);

Joystick.prototype = new Controls();
Joystick.prototype.constructor = Joystick;





console.log('-- cntrl-joystick END');