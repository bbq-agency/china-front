$(document).ready(function () {

    $(".nav-lang__dropdwn").click(function () {
        var self, $menu, $span;
        self = $(this);
        $menu = self.siblings(".nav-lang__list");
        $span = self.children(".nav-lang__selected-lang");
        $menu.toggleClass("show-menu");

        // $menu.children("a").click(function () {
        //     $menu.removeClass("show-menu");
        //     $span.html($(this).html());
        // });
    });

    $(document).mouseup(function (e) {
        var container = $(".nav-lang__dropdwn");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".nav-lang__list").removeClass("show-menu");
        }
    });

    // Social dropdown

    $(".js-social-dropdown").click(function (event) {
        event.preventDefault();
        $(".js-social-list").slideToggle(150);
    });
});
