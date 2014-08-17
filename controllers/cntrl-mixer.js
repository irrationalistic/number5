

// ________________________________________________________ MIXER TEMPLATE
var cntrlMixerTemplate = 
$(	"<div class='mixer'>" +
		"<div class='mixer-box'>" +
		"</div>" +
	"</div>");

var cntrlMixerModuleTemplate = 
$(	"<div class='mixer-module'>" +
		"<div class='mixer-light'></div>" +
		"<div class='info-stream'></div>" +
	"</div>");



// _____________________________________________________________________________________________ Mixer
var mixerBoxWidth = workTable.sizes.gridSpacing * 6 - (workTable.sizes.cellSize * 2);
var mixerBoxHeight = workTable.sizes.gridSpacing * 2 - (workTable.sizes.cellSize * 3);

$('.mixer').css({
				'width': workTable.sizes.gridSpacing * 6,
				'height': workTable.sizes.gridSpacing * 2,
				'top': workTable.sizes.gridSpacing * 3,
				'left': workTable.sizes.gridSpacing * 4,
				'padding-top': workTable.sizes.cellSize * 2
				});

$('.mixer-box').css({
					'width': mixerBoxWidth,
					'height': mixerBoxHeight,				
					});

$('.mixer-module').css({
						'width': mixerBoxWidth * 0.19,
						'height': mixerBoxHeight
						});

$('.mixer-light').css({
						'top': workTable.sizes.cellSize * 0.8,
						'left': workTable.sizes.cellSize * 4,
						'width': workTable.sizes.cellSize * 0.8,
						'height': workTable.sizes.cellSize * 0.8,
						});

$('.info-stream').css({
						'width': workTable.sizes.cellSize * 4,
						'height': workTable.sizes.cellSize * 4,
						'bottom': workTable.sizes.cellSize,
						'left': workTable.sizes.cellSize * 1,
						});


//_______________________________________________________ zoom in on mixer data
$(document).on('click', '.info-stream', function() {
	$(this).css({
				'width': workTable.sizes.gridSpacing * 3,
				'height': workTable.sizes.gridSpacing * 4,
				'top': workTable.sizes.cellSize * 2,
				'font-size': '12px'
				})
	$(this).addClass('big-stream');
});

$(document).on('click', '.big-stream', function() {
	console.log('wtf');
	$(this).css({
				'font-size': '6px',
				'width': workTable.sizes.cellSize * 4,
				'height': workTable.sizes.cellSize * 4,
				'top': '',
				'bottom': workTable.sizes.cellSize,
				'left': workTable.sizes.cellSize * 2,
			});
	$(this).removeClass('big-stream');
})









