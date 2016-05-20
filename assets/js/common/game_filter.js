$(document).ready(function() {

	function searchAnimate() {

		$(".js-search").on('click', function(event) {
			if (window.innerWidth < 754) {
		        $(this).addClass('is-animated');
		        $('.game-filter__list').addClass('is-animated');
		        $('.game-filter__search').addClass('is-animated');
		        $('.game-filter__btn').addClass('is-animated');
		        event.preventDefault();
	        } 

	        $(document).mouseup(function (e) {
		        var container = $(".js-search");

		        if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass('is-animated')) {
		        	$('.js-search').toggleClass('is-animated');
			        $('.game-filter__list').toggleClass('is-animated');
			        $('.game-filter__search').toggleClass('is-animated');
			        $('.game-filter__btn').toggleClass('is-animated');
		        }
		    });

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
