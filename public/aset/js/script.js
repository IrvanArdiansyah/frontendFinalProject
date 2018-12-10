$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('navScroll');
    }
    else {
        $('nav').removeClass('navScroll');
    }
})

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('img#brand').attr('src', '../aset/img/Logo/Arsenic_mono.png');
    }
    else {
        $('img#brand').attr('src', '../aset/img/Logo/Arsenic_main.png');
    }
})