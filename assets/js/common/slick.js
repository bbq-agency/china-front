/**
 * slick
 * https://github.com/kenwheeler/slick
 */
$(document).ready(function () {

    // Recent Activity
    $('.js-winners-slick').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        cssEase: 'ease',
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        variableWidth: true,
        swipeToSlide: true,
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
        variableWidth: true,
        nextArrow: '<div class="slick-next-shadow"></div><button type="button" class="slick-next icon-arrowright">Next</button>',
        prevArrow: '<div class="slick-prev-shadow"></div><button type="button" class="slick-prev icon-arrowleft">Previous</button>',
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 754,
                settings: {
                    variableWidth: true,
                    slidesToShow: 6
                }
            }
        ]
    });

    // Надо бы переназвать
    $('.js-slider-slick').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300,
        cssEase: 'ease',
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 3500,
        nextArrow: '<div class="slick-next-shadow"></div><button type="button" class="slick-next icon-arrowright">Next</button>',
        prevArrow: '<div class="slick-prev-shadow"></div><button type="button" class="slick-prev icon-arrowleft">Previous</button>',
        responsive: [
            {
                breakpoint: 322,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1792,
                settings: {
                    variableWidth: true,
                }
            }
        ]
    });
});
