


// ______________________________________________________________________ work table and grid
var workTable = {
	sizes: {},
	scaleAmount: $('#scale-slide').val(),
	getSizes: function() {
		var viewHeight = $(window).height();
		var viewWidth = $(window).width();
		var workTableWidth = viewWidth * 4;
		var cellSize = Math.floor(workTableWidth/200);
		if(cellSize % 2 > 0) {
			cellSize -= 1
		}

		workTableWidth = cellSize * 200;
		var workTableHeight = cellSize * 180;
		var gridSpacing = cellSize * 5;
		var columnAmount = workTableWidth / gridSpacing;
		var rowAmount = workTableHeight / gridSpacing;

		this.sizes  = {
			'viewHeight': viewHeight,
			'viewWidth': viewWidth,
			'cellSize': cellSize,
			'workTableWidth': workTableWidth,
			'workTableHeight': workTableHeight,
			'gridSpacing': gridSpacing,
			'columnAmount': columnAmount,
			'rowAmount': rowAmount
		}
	},
	setSizes: function() {
		this.getSizes();
		
		var workTableSelect = $('.work-table');

		workTableSelect.css({
			'transform': 'scale(' + this.scaleAmount + ')',
			'width': this.sizes.workTableWidth,
			'height': this.sizes.workTableHeight
		});

		var scalerMin = (Math.ceil((this.sizes.viewWidth / this.sizes.workTableWidth + 0.01) * 10000) / 10000);
		$('#scale-slide').attr('min', scalerMin);
		
		this.buildGrid();

		workTableSelect.offset({
			top: 0.00000,
			left: 0.00000
		});

		
		$('#scale-text').text(Math.round(($('#scale-slide').val() * 100)) + '%');

		var controlHolderWidth = $('.control-holder').width();
		$('.control-holder').css('height', controlHolderWidth);

	},

	updateSizes: function(val) {
		this.scaleAmount = val;
		this.setSizes();
	},

	buildGrid: function() {
		$('.work-table-column, .work-table-row').remove();

		for (var i = 0; i < this.sizes.columnAmount; i++) {
			$('.work-table').prepend($('<div class="work-table-column" id="clmn' + (i + 1) + '">'));
			
			$('.work-table-column:first-child').css({
				'width': this.sizes.gridSpacing-1 + 'px',
				'left': (i * this.sizes.gridSpacing) + 'px'
			})

		};

		for (var i = 0; i < this.sizes.rowAmount; i++) {
			$('.work-table').prepend($('<div class="work-table-row" id="rw' + (i + 1) + '">'));

			$('.work-table-row:first-child').css({
				'height': this.sizes.gridSpacing-1 + 'px',
				'top': (i * this.sizes.gridSpacing) + 'px'
			});

		};

	}
}



// ___________________________________________________________________________ TESTS!!!!

// var testDrag = Draggable.create($(".test-thang"), {
// 			bounds: $('.work-table'),
// 			liveSnap: {
// 				x: function(endValue) {
// 					var grids = workTable.sizes.gridSpacing;
// 					return Math.round(endValue / grids) * grids;
// 				},
// 				y: function(endValue) {
// 					var grids = workTable.sizes.gridSpacing;
// 					return Math.round(endValue / grids) * grids;
// 				}
// 			},
// 			onDrag: function() {
// 				(thisCntrl).css({
// 								'border': '1px dotted #FF0066'
// 							});

// 				// ________________________________________________________ highlighting grid on drag
// 				console.log($(this))
// 				var thisTop = Math.floor($(this.target).find('.cntrl').offset().top)
// 				var thisLeft = Math.floor($(this.target).find('.cntrl').offset().left)

// 				console.log('top: ' + thisTop + '   left: ' + thisLeft);
				
// 				var gridColumn = $('.work-table-column');
// 				var gridRow = $('.work-table-row');

// 				var currentColumn = "";
// 				var currentRow = "";

// 				for (var i = 0; i < gridColumn.length; i++) {
// 					if(thisLeft > ((gridColumn.eq(i).offset().left) - 5) && thisLeft < ((gridColumn.eq(i).offset().left) + 5)) {
// 						console.log('this column index: ' + i );
// 						currentColumn = i;
// 					}
// 					gridColumn.css('border', '');
// 				}
// 				gridColumn.eq(currentColumn).css('border-left', '2px dotted gray');

				
// 				for (var i = 0; i < gridRow.length; i++) {
// 					if(thisTop > ((gridRow.eq(i).offset().top) - 5) && thisTop < ((gridRow.eq(i).offset().top) + 5)) {
// 						console.log('this row index: ' + i);
// 						currentRow = i;
// 					}
// 					gridRow.css('border', '');
// 				}
// 				gridRow.eq(currentRow).css('border-top', '2px dotted gray');

// 			},
// 			onRelease: function() {
// 				(thisCntrl).css('border', '');
// 				$('.work-table-row, .work-table-column').css('border', '');
// 				controlDrag[0].kill();
// 				controlDrag = '';
// 			},	
// 		});


	






