$(function () {

    var $game_cont = $('.game-item__container');

    if ($game_cont) {
        
        $(window).on('resize', function () {
            $game_cont.css({
                top : ($(this).height() - $game_cont.outerHeight(true)) / 2
            });
        }).resize();
    }

    // Slick Sidebar
    $('.js-slick-game-sidebar').slick({
        autoplaySpeed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: '<div class="slick-next-shadow"></div><button type="button" class="slick-next">Next</button>',
        prevArrow: '<div class="slick-prev-shadow"></div><button type="button" class="slick-prev">Previous</button>',
        dots: true
    });

});