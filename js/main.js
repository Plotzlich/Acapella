$(document).ready(function () {
    $('a.main-item').click(function (e) {
        $(this).toggleClass('active');
            $('.menu').toggle();
        });

    $('.close').click(function(){
    	$('.menu').hide();
    });
	jQuery('.menu').click( function(){
		jQuery( this ).animate({opacity: 0.65},100);
	}).click( function(){
		jQuery( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0); 
		return false;
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('#scrollup').fadeIn('fast');
		} else {
			jQuery('#scrollup').fadeOut('fast');
		}
	});
});