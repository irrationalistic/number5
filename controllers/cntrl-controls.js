console.log('cntrl-controls start');
	

var Controls = function() {
	// __________________________________________________________________________ FEATURES TEMPLATE
	this.render = function() {
		this.el = 
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
		// this.el.on('click', function() {
		// 	console.log('fuck this!');
		// }
		// $('.cntrl').append(this.el);
	};

	this.cntrlInteriorSizes = function() {
	$('.cntrl').css({
					'padding-top': workTable.sizes.cellSize * 2
					});
	$('.cntrl-box').css({
						'width':  cntrlBoxWidth + 'px',
						'height': cntrlBoxHeight + 'px'
						});
	};
		
	this.dragCntrl = function(self) {
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

				// ________________________________________________________ highlighting grid on drag
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
	};



// ________________________________________ END CONTROLS CONSTRUCTOR
}









