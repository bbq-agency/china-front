$(document).ready(function() {

	function searchAnimate() {

		$(".js-search").on('click', function(event) {
			if (window.innerWidth < 754) {
		        $(this).toggleClass('is-animated');
		        $('.game-filter__list').toggleClass('is-animated');
		        $('.game-filter__search').toggleClass('is-animated');
		        event.preventDefault();
	        }
	        return false;
	    });

	};

    searchAnimate();

});

$( window ).resize(function() {
	$(this).removeClass('is-animated');
    $('.game-filter__list').removeClass('is-animated');
	$('.game-filter__search').removeClass('is-animated');
});
