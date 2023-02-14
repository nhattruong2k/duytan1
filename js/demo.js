$(document).ready(function () {
    var show_menu_icon = $('.show_menu_icon');
    var show_hide_icon = $('.show_hide_icon');
    var sum_menu_repo = $('.sum_menu_repo');
    var div_menu = $('div.menu');
    var ovelay_menu = $('.ovelay_menu');

    show_menu_icon.click(function () {
        $(this).css('display', 'none');
        div_menu.css('left', '0');
        sum_menu_repo.addClass('hiden_ove');
        show_hide_icon.css('display', 'block');
        ovelay_menu.toggle()
    });
    show_hide_icon.click(function () {
        $(this).css('display', 'none');
        div_menu.css('left', '-500px');
        sum_menu_repo.removeClass('hiden_ove');
        show_menu_icon.css('display', 'block');
        ovelay_menu.toggle()
    });
    ovelay_menu.click(function(){
        $(this).css('display', 'none');
        div_menu.css('left', '-500px');
        sum_menu_repo.removeClass('hiden_ove');
        show_hide_icon.css('display', 'none');
        show_menu_icon.css('display', 'block');
    })
})

$('ul li.list_top').click(function (event) {
    $('ul li.list_top').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    $('.box_hover_menu .active').removeClass('active');
    $('.box_hover_menu .' + id).addClass('active');
})

$(".nav_footer p.subnav").click(function () {
    var module8_subnav = $(this);
    if (module8_subnav.attr('class') == 'subnav') {
        $('p.subnav').removeClass("clicked");
        $('.sub-ul').hide();
        $(this).next("ul").show();
        $(this).addClass("clicked");
    } else {
        $(this).next("ul").hide();
        $(this).removeClass("clicked");
    }
})

$(document).ready(function () {
    var module6_galery = $('.main_module6 .galery');
    var module6_item_gale = $('.main_module6 .galery .item_gale');
    var module6_ovelay = $('.main_module6 .galery .item_gale .ovelay');
    module6_galery.mouseleave(function () {
        module6_item_gale.addClass('active');
        $('.main_module6 .galery .item_gale_show_info').css('display', 'none');
        $('.main_module6 .galery .item_gale .ovelay').css('display', 'none');
        $(this).css('overflow', 'hidden');
    });
        module6_item_gale.mouseenter(function () {
        module6_item_gale.removeClass('active');
        module6_ovelay.css('display', 'block');
        // ĐỐI TƯỢNG MUỐN TRỎ Tơi
        $(this).find('.ovelay').css('display', 'none');
        $(this).find('.item_gale_show_info').css('display', 'block');
        $(this).css('overflow', 'visible');
    });
    module6_item_gale.mouseleave(function () {
        $('.item_gale_show_info').css('display', 'none');
    });
})

$(document).ready(function () {
    $('.owl_1, .owl_2').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'none',
        items: 1,
        autoplay: true,
        mouseDrag: false,
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 750,
        autoplayTimeout: 3000,
    });
});

$(document).ready(function () {
    $('.owl_3, .owl_4').owlCarousel({
        animateOut: 'animate__flipOutY',
        animateIn: 'none',
        items: 1,
        autoplay: true,
        mouseDrag: false,
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 450,
        autoplayTimeout: 3000,
    });
});

$(document).ready(function () {
    $('.main_module2 .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            414: {
                items: 2
            },
            420: {
                items: 2
            },
            500: {
                items: 2
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            }
        }
    });
});

$(document).ready(function Carsoul_Time() {
    var owl = $('.main_module1 .slideshow_02 .owl-carousel');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            350: {
                items: 1,
            },
            400: {
                items: 1,
            },
            450: {
                items: 2,
            },
            1000: {
                items: 3
            },
        }
    });
    $(".next_slideshow_right").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".prev_slideshow_left").click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.main_module1 .owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'none',
        items: 1,
        autoplay: true,
        mouseDrag: false,
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 750,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
        }
    });
});
