$(document).ready(function () {

    $(".js-nav-primary").on('click', function(event) {
        $('.js-nav-sidebar, .js-nav-overlay').toggleClass('is-open');
        event.preventDefault();
    });

    $(".js-nav-close").on('click', function(event) {
        $('.js-nav-sidebar, .js-nav-overlay').toggleClass('is-open');
        event.preventDefault();
    });

    $(".js-nav-overlay").on('click', function(event) {
        $('.js-nav-sidebar, .js-nav-overlay').toggleClass('is-open');
        event.preventDefault();
    });

    $(".js-nav-sub-btn").on('click', function(event) {
        $(".js-nav-sub").slideToggle();
        event.preventDefault();
    });

});
