// ____________________________________________________________________________________ controls
var cntrl = {
	addCntrl: function(size) {
		$('.app-space').append($('<div class="cntrl cntrl-early">'));
		this.sizeCntrl(size);
	},

	sizeCntrl: function(sizeKey) {
		var cntrlSizes = {
							'small': {'sizeClass': 'cntrl-sm', 'cntrlWidth': (workTable.sizes.gridSpacing * 2)-2, 'cntrlHeight': (workTable.sizes.gridSpacing * 3)-2},
							'medium-small': {'sizeClass': 'cntrl-med-sm', 'cntrlWidth': (workTable.sizes.gridSpacing * 3)-2, 'cntrlHeight': (workTable.sizes.gridSpacing * 4)-2},
							'medium': {'sizeClass': 'cntrl-med', 'cntrlWidth': (workTable.sizes.gridSpacing * 4)-2, 'cntrlHeight': (workTable.sizes.gridSpacing * 5)-2},
							'medium-large': {'sizeClass': 'cntrl-med-lg', 'cntrlWidth': (workTable.sizes.gridSpacing * 5)-2, 'cntrlHeight': (workTable.sizes.gridSpacing * 6)-2},
							'large': {'sizeClass': 'cntrl-lg', 'cntrlWidth': (workTable.sizes.gridSpacing * 6)-2, 'cntrlHeight': (workTable.sizes.gridSpacing * 8)-2}
						};
		
		// ______________________________________________________________________ !!! will need this when dynamically adding
		// $('.cntrl:last-child').addClass(cntrlSizes[sizeKey]['sizeClass']);


		$('.' + cntrlSizes[sizeKey]['sizeClass']).css({ 
											'width': cntrlSizes[sizeKey]['cntrlWidth'],
											'height': cntrlSizes[sizeKey]['cntrlHeight'],
										});

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

