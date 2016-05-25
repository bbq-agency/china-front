$(document).ready(function() {
	var gameSearch = $('.js-search'),
		gameFilterList = $('.js-game-filter-list'),
		gameFilterSearch = $('.js-game-filter-search'),
		gameFilterBtn = $('.js-game-filter-btn'),
		gamesArray = gameSearch.add(gameFilterList).add(gameFilterSearch).add(gameFilterBtn),
		isAnimated = 'is-animated';

	function searchAnimation() {
		gameSearch.on('click', function(event) {
			if (window.innerWidth < 754) {
		        gamesArray.addClass(isAnimated);
		        event.preventDefault();
	        }
	    });

	    $(document).mouseup(function (event) {
	        if (!gameSearch.is(event.target) && gameSearch.has(event.target).length === 0 && gameSearch.hasClass(isAnimated)) {
	        	gamesArray.toggleClass(isAnimated);
	        }
	    });
	};

	searchAnimation();

	$(window).resize(function() {
		if (gameSearch.hasClass(isAnimated)) {
			gamesArray.removeClass(isAnimated);
		}
	});

});
