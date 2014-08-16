

$(document).on('ready', function () {

	$(document).on('submit', '.login-form', function(e) {

		if($('.login-username').val().length === 0 || $('.login-password').val().length === 0 ) {
			e.preventDefault();
			console.log('BLOCKED');
		}

	});






});