$(document).ready(function() {


    $('.js-sent-status').click(function(){
        $(this).hide(100);
        $('.js-show-status').show(100);
    });


    /**
     * Remodal
     * https://github.com/VodkaBears/Remodal
     */
    $('.js-popup').remodal({
        // closeOnEscape: false
    });


    /**
     * EasyTabs
     * https://github.com/JangoSteve/jQuery-EasyTabs
     */
    $('.js-game-categories-easytabs').easytabs({ 
        animate: true,
        animationSpeed: 200,
        tabActiveClass: 'game-categories__item--selected',
        updateHash: true
    });


    /**
    * slick
    * https://github.com/kenwheeler/slick
    */
    $('.js-winners-slick').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        // fade: true,
        cssEase: 'ease',
        // centerMode: true,
        // centerPadding: '20%',
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        // swipeToSlide: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 754,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1054,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                }
            },
        ]
    });
});
