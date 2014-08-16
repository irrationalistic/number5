

$(document).on('ready', function() {

// ________________________________________________________________________________
	workTable.setSizes();

	var joystick1 = new Joystick();



// ________________________________________________________________________________

	// ____________________________________________________ scale work-table with slider
	$(document).on('input', '#scale-slide', function() {
		var sliderVal = $(this).val();
		workTable.updateSizes(sliderVal);
	});

	// ______________________________________ update variables and log changes to window size
	$(window).on('resize', function() {
		var sliderVal = $('#scale-slide').val();
		workTable.updateSizes(sliderVal);
	});
	
	// ________________________________________________________ Draggable for controls
	
	$('.cntrl-grip').on('mousedown', function() {
		var self = $(this);
		cntrl.dragCntrl(self);
	});

	// ________________________________________________________ context Menu
	$(document).on('contextmenu', function(e) {
		// e.preventDefault();
		// var mouseLocX = eventX;
		// console.log('hey');
	})


// ____________________________________________________________ END OF DOC ON
})







