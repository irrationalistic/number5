

// _________________________________________________________________ JOYSTICK OBJECT	
var Joystick = function() {
	var self = this;


	this.create = function() {
		Controls.call(this);
		// console.log('control test: ' + Controls);
		this.$el = self.joystickTemplate;
		this.$el.appendTo($('#joystick-holder'));
		this.$el.find('.cntrl-box').append(this.features()).removeClass('cntrl-jystk-menu');
		this.boundsStyleAndSize();
		this.featureSizing();
		this.dragTarget();
	};

	// _________________________________________________________________ JOYSTICK TEMPLATE
	this.joystickTemplate = $(
		"<div class='cntrl cntrl-jystk-menu cntrl-jystk'>" +
			"<div class='cntrl-box'>" +
				"<div class='jystk-bounds'>" +
					"<div class='jystk'>" +
						"<div class='jystk-style'></div>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>"
	);

	// ______________________________________________________ JOYSTICK BOUNDS
	this.boundsStyleAndSize = function() {
		var parentBoxWidth = this.$el.width();
		var parentBoxHeight = this.$el.height();
		var cntrlBoxWidth = parentBoxWidth - (workTable.sizes.cellSize * 2);
		var cntrlBoxHeight = parentBoxHeight - (workTable.sizes.cellSize * 3);

		var boundsSize = Math.ceil(cntrlBoxWidth * 0.88);
		if(boundsSize % 2 != 0) {
			boundsSize --
		};
		var jystkSize = Math.floor(boundsSize * 0.8);
		var jystkStyleSize = jystkSize * 0.80;
		var jystkCenteringOffset = (boundsSize - jystkSize) / 2;

		this.$el.find('.jystk-bounds').css({
								'width': boundsSize + 'px',
								'height': boundsSize + 'px'
								});		
		this.$el.find('.jystk').css({	
							'width': jystkSize + 'px',
							'height': jystkSize + 'px',
							'top': jystkCenteringOffset,
							'left': jystkCenteringOffset
						});
		this.$el.find('.jystk-style').css({
								'width': jystkStyleSize + 'px',
								'height': jystkStyleSize + 'px'
								});
	};

	// _______________________________________________________ INFO STREAM
	this.infoStreamText = function(chgX, chgY) {
		var textScrollHeight = $('.info-stream')[0].scrollHeight;
		var textHeight = $('.info-stream').height();
		$('.info-stream').scrollTop(textScrollHeight - textHeight);

		$('.info-stream').append('Y: <b>' + chgY + '</b><sub>%</sub> X: <b>' + chgX + '<sub>%</sub></b><br>');
	};

	// _______________________________________________________ BOUNCEBACK ANIMATION
	this.bounceBack =  function() {
		return TweenLite.to($('.jystk'), 0.185, {css:{'transform': ''}, ease: Bounce.easeOut});
	};

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
	};

	this.create();
};

Joystick.prototype = new Controls();
Joystick.prototype.constructor = Joystick;

// ________________________________________ END JOYSTICK CONSTRUCTOR

