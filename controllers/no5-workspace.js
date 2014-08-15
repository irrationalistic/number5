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

		var scalerMin = (Math.floor((this.sizes.viewWidth / this.sizes.workTableWidth) * 10000) / 10000);
		$('#scale-slide').attr('min', scalerMin);
		
		this.buildGrid();

		workTableSelect.offset({
			top: 0.00000,
			left: 0.00000
		});

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
