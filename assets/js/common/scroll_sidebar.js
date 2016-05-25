$(document).ready(function () {
    if(window.innerWidth >= 1054) {
        $(".sidebar").stick_in_parent(
            { offset_top: 80,
            inner_scrolling: false }
        );
    }
});
