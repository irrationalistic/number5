

var Controls = function() {
	var cntrlSelf = this;
	
	this.dragTarget = function() {
		$(document).on('mousedown','.cntrl-grip', function() {
			
			cntrlSelf.dragCntrl($(this));
		});
	};

	this.features = function() {
		return $(
					"<div class='cntrl-antenna'>" +
						"<div class='cntrl-antenna-dot'></div>" +
						"<div class='cntrl-antenna-stalk'></div>" +
						"<div class='cntrl-antenna-lg-plate'></div>" +
					"</div>" +

					"<div class='status-light'></div>" +

					"<div class='cntrl-grip'>" +
						"<div class='cntrl-grip-texture'></div>" +
					"</div>" +

					"<div class='cntrl-label'>" +
						"<input type='text' placeholder='Control Label'>" +
					"</div>"
				);
	};

	this.featureSizing = function() {
		console.log(self);
		var parentBoxWidth = this.$el.width();
		var parentBoxHeight = this.$el.height();
		var cntrlBoxWidth = parentBoxWidth - (workTable.sizes.cellSize * 2);
		// console.log('cntrl box width: ' + cntrlBoxWidth);
		var cntrlBoxHeight = parentBoxHeight - (workTable.sizes.cellSize * 3);
		// console.log('cntrl box height: ' + cntrlBoxHeight);

		var statusLightOffset = cntrlBoxWidth * 0.1;
		this.$el.find('.status-light').css({
								'top': statusLightOffset,
								'left': statusLightOffset,
								'width': statusLightOffset,
								'height': statusLightOffset,
								});
		var cntrlGripWidth = cntrlBoxWidth * 0.45;
		// console.log('cntrl grip width: ' + cntrlGripWidth);
		var cntrlGripHeight = cntrlBoxWidth * 0.20;
		// console.log('cntrl grip height: ' + cntrlGripHeight);

		this.$el.find('.cntrl-box').find('.cntrl-grip').css({
								'top': statusLightOffset,
								'right': statusLightOffset,
								'width': cntrlGripWidth,
								'height': cntrlGripHeight,
							});

		var cntrlAntennaSize = cntrlBoxWidth * 0.1;
		this.$el.find('.cntrl-antenna').css({
								'width': cntrlAntennaSize,
								'height': cntrlAntennaSize,
								'top': -(workTable.sizes.cellSize * 1.8),
								'left': workTable.sizes.cellSize
								});
		this.$el.find('.cntrl-antenna-stalk').css({
										'height': workTable.sizes.cellSize * 1.5
										});
		this.$el.find('.cntrl-antenna-lg-plate').css({
											'width': workTable.sizes.cellSize * 1.8
											});
		this.$el.find('.cntrl-antenna-dot').css({
									'left': workTable.sizes.cellSize * 1,
									});
	}
		
	this.dragCntrl = function(self) {
		var thisCntrl = self.closest('.cntrl')
		var controlDrag = '';
		controlDrag = Draggable.create(thisCntrl, {
			bounds: $('.work-table'),
			liveSnap: {
				x: function(endValue) {
					var grids = workTable.sizes.gridSpacing;
					return Math.round(endValue / grids) * grids;
				},
				y: function(endValue) {
					var grids = workTable.sizes.gridSpacing;
					return Math.round(endValue / grids) * grids;
				}
			},
			onDrag: function() {
				// ____________________________________________ Change 

				thisCntrl.appendTo('.work-table');


				cntrlSelf.featureSizing();
				// console.log(cntrlSelf);
				// cntrlSelf.featureSizing.call(cntrlSelf);
				// cntrlSelf.boundsboundsStyleAndSize();


				// _________________________________________________ Highlight '.cntrl' border on drag
				(thisCntrl).css({
								'border': '1px dotted #FF0066'
							});

				// ________________________________________________________ highlighting grid on drag
				var thisTop = Math.floor($(this.target).offset().top)
				var thisLeft = Math.floor($(this.target).offset().left)

				console.log('cntrl top: ' + thisTop + '   cntrl left: ' + thisLeft);
				
				var gridColumn = $('.work-table-column');
				var gridRow = $('.work-table-row');

				var currentColumn = "";
				var currentRow = "";

				for (var i = 0; i < gridColumn.length; i++) {
					if(thisLeft > ((gridColumn.eq(i).offset().left) - 5) && thisLeft < ((gridColumn.eq(i).offset().left) + 5)) {
						console.log('this column index: ' + i );
						currentColumn = i;
					}
					gridColumn.css('border', '');
				}
				gridColumn.eq(currentColumn).css('border-left', '2px dotted gray');

				
				for (var i = 0; i < gridRow.length; i++) {
					if(thisTop > ((gridRow.eq(i).offset().top) - 5) && thisTop < ((gridRow.eq(i).offset().top) + 5)) {
						console.log('this row index: ' + i);
						currentRow = i;
					}
					gridRow.css('border', '');
				}
				gridRow.eq(currentRow).css('border-top', '2px dotted gray');

			},
			onRelease: function() {
				(thisCntrl).css('border', '');
				$('.work-table-row, .work-table-column').css('border', '');
				controlDrag[0].kill();
				controlDrag = '';
			},	
		});
	};



// ________________________________________ END CONTROLS CONSTRUCTOR
}






