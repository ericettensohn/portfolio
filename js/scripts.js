$(document).ready(function(){
	$('.section-chevron').on('click', function(){
		$('html, body').animate({
			scrollTop: $(".project-row").offset().top
		}, 1000);
	})


});

