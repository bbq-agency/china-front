$(document).ready(function () {

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
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1054,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });

    // Slick Sidebar

    $('.js-slick-fav').slick({
        autoplaySpeed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: '<div class="slick-next-shadow"></div><button type="button" class="slick-next">Next</button>',
        prevArrow: '<div class="slick-prev-shadow"></div><button type="button" class="slick-prev">Previous</button>',
    });

    // Slick Filter

    $('.js-slick-filter').slick({
        autoplaySpeed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 508,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 754,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1054,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    //

    $('.js-slider-slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300,
        // fade: true,
        cssEase: 'ease',
        // centerMode: true,
        // centerPadding: '20%',
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 3500,
        // variableWidth: true,
        // swipeToSlide: true,
        // mobileFirst: true,
        responsive: [
            {
                breakpoint: 322,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    variableWidth: true,
                }
            }
        ]
    });
});
