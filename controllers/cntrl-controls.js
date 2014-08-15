console.log('cntrl-controls start');


	var Controls = {

	// __________________________________________________________________________ STANDARD FEATURES STYLING
	var parentBoxClass = $('.cntrl-box').closest('.cntrl');
	var parentBoxWidth = $('.jystk').closest('.cntrl').width();
	var parentBoxHeight = $('.jystk').closest('.cntrl').height();
	var cntrlBoxWidth = parentBoxWidth - (workTable.sizes.cellSize * 2);
	var cntrlBoxHeight = parentBoxHeight - (workTable.sizes.cellSize * 3);


	var statusLightOffset = cntrlBoxWidth * 0.1;
	$('.status-light').css({
							'top': statusLightOffset,
							'left': statusLightOffset,
							'width': statusLightOffset,
							'height': statusLightOffset,
							});
	var cntrlGripWidth = cntrlBoxWidth * 0.2;
	var cntrlGripHeight = cntrlBoxWidth * 0.12;
	$('.cntrl-grip').css({
							'top': statusLightOffset,
							'right': statusLightOffset,
							'width': cntrlGripWidth,
							'height': cntrlGripHeight,
						});


	$('.cntrl').css({
					'padding-top': workTable.sizes.cellSize * 2
					});
	$('.cntrl-box').css({
						'width':  cntrlBoxWidth + 'px',
						'height': cntrlBoxHeight + 'px'
						});

	var cntrlAntennaSize = cntrlBoxWidth * 0.1;
	$('.cntrl-antenna').css({
							'width': cntrlAntennaSize,
							'height': cntrlAntennaSize,
							'top': -(workTable.sizes.cellSize * 1.8),
							'left': workTable.sizes.cellSize
							});
	$('.cntrl-antenna-stalk').css({
									'height': workTable.sizes.cellSize * 1.5
									});
	$('.cntrl-antenna-lg-plate').css({
										'width': workTable.sizes.cellSize * 1.8
										});
	$('.cntrl-antenna-dot').css({
								'left': workTable.sizes.cellSize * 1,
								});

	// __________________________________________________________________________ FEATURES TEMPLATE
	var cntrlFeaturesTemplate = 
		$("<div class='cntrl-antenna'>" +
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
		"</div>");

	// ____________________________________________________________________________________ controls
	var cntrl = {
		addCntrl: function(size) {
			$('.app-space').append($('<div class="cntrl cntrl-early">'));
			this.sizeCntrl(size);
		},
		
		dragCntrl: function(self) {
			
			var thisCntrl = self.closest('.cntrl');
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
					(thisCntrl).css({
									'border': '1px dotted #FF0066'
								});

			// ________________________________________________________ highlighting grd on drag
					console.log($(this))
					var thisTop = Math.floor($(this.target).find('.cntrl').offset().top)
					var thisLeft = Math.floor($(this.target).find('.cntrl').offset().left)

					console.log('top: ' + thisTop + '   left: ' + thisLeft);
					
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
		}
	}


// ________________________________________ END CONTROLS CONSTRUCTOR
}








