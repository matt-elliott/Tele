$(document).ready( function() {
	var vpw = document.documentElement.offsetWidth;
	
	if( vpw > 991 ) {
		$('.parallax').parallax("50%", 0.5);
	}
	
	$('#mobileNav #menu2').slicknav({
		init: function() {
			//find and kill origina menu since
			//it has been recreated as mobile
			$('#mobileNav #menu2').remove();
		},
		beforeOpen: function() {
			var top = $('#topNav')[0].offsetHeight;
			$('.slicknav_nav').css({ 'top' : top });
			//lock scroll
			$('body').css({ 'overflow' : 'hidden', 'height' : '100%' });
		},
		afterClose: function() {
			$('body').css({ 'overflow' : '', 'height' : 'auto' });
		},
		prependTo: $('#mobileMenu'),
	});
});