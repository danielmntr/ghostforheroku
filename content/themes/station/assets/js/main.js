/* arctic scroll */

(function ($) {
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500,
            scroll_selector: 'html,body'
        };

        var options = $.extend(defaults, options),
            to_scroll = options.scroll_selector;

        options.elem.click(function (event) {
            event.preventDefault();
            var offset = ($(this).attr('data-offset')) ? $(this).attr('data-offset') : false,
                position = ($(this).attr('data-position')) ? $(this).attr('data-position') : false;

            if (offset) {
                var toMove = parseInt(offset);
                $(options.scroll_selector).stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top + toMove)
                }, options.speed);
            } else if (position) {
                var toMove = parseInt(position);
                $(options.scroll_selector).stop(true, false).animate({
                    scrollTop: toMove
                }, options.speed);
            } else {
                $(options.scroll_selector).stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top)
                }, options.speed);
            }
        });

    };
})(jQuery);

$(function(){
    $(".arctic_scroll").arctic_scroll({
        speed: 800
    });
});

/* expand top nav */

$(document).ready(function () {
    var clicked = false;
    $("#menu-button").click(function () {
        if (!clicked) {
            $('#top-navigation').addClass('expanded');
            $('#top-navigation').removeClass('minified');
            $('#menu-open').removeClass('show');
            $('#menu-open').addClass('hide');
            $('#menu-closed, #blog-description, #menu-items').removeClass('hide');
            $('#menu-closed, #blog-description, #menu-items').addClass('show');
            clicked = true;
        } else {
            $('#top-navigation').addClass('minified');
            $('#top-navigation').removeClass('expanded');
            $('#menu-open').removeClass('hide');
            $('#menu-open').addClass('show');
            $('#menu-closed, #blog-description, #menu-items').removeClass('show');
            $('#menu-closed, #blog-description, #menu-items').addClass('hide');
            clicked = false;
        }
    });
});

/* expand & close search box */

$(document).ready(function () {
    $("#search-placeholder").click(function (e) {
        $('#search,#search-box').addClass('show');
        $('#search,#search-box').removeClass('hidden hide');
    });
    $("#search-close").click(function (e) {
        $('#search,#search-box').removeClass('show');
        $('#search,#search-box').addClass('hide hidden');
    });
});

/* nav hide/show */

$(document).ready(function () {
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 800) {
            $('#navigation').removeClass('hide');
        } else {
            $('#navigation').addClass('hide');
        }
    });
});

/* expand share icon */

$(document).ready(function() {
    var clicked = false;
    var hovered = false;
    $("#share-icon").click(function() {
        if (!clicked) {
            $('.share-link').addClass('show');
            $('.share-link').removeClass('hide');
            clicked = true;
        } else {
            $('.share-link').addClass('hide');
            $('.share-link').removeClass('show');
            clicked = false;
        }
    });
    $(".share-link").hover(function() {
        if (!hovered && clicked) {
            $(this).parents('a').find('.share-span').addClass('show');
            $(this).parents('a').find('.share-span').removeClass('hide');
            hovered = true;
        } else {
            $(this).parents('a').find('.share-span').addClass('hide');
            $(this).parents('a').find('.share-span').removeClass('show');
            hovered = false;
        }
    });
});

/* carousel */

$('.slick').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true
});