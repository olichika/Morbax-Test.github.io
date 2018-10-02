$(document).ready(function() {

	$('.single-item').slick( {dots: true} );

});


$(document).ready(function() {

$(function () {
	var tabContainers = $('.main__tabs > div');
	tabContainers.hide().filter(':first').show();
	$('.main__tabs ul a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('.main__tabs ul a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});

});