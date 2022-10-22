$(function () {
    const w = $(window).width();
    if (w <= 768) {
        $('.for__item:nth-child(3)').before($('.for__item:nth-child(8)'));
        $('.for__item:nth-child(7)').before($('.for__item:nth-child(5)'));
        $('.for__item:nth-child(5)').after($('.for__item:nth-child(4)'));
        $('.for__item:nth-child(5)').before($('.for__item:nth-child(6)'));
        $('.for__item:nth-child(7)').after($('.for__item:nth-child(6)'));
        $('.for__item:nth-child(8)').after($('.for__item:nth-child(7)'));
    }

    $('.tariffs__btn').on('click', function () {
        $('.accept').addClass('accept--active');
        $('.wrapper').addClass('lock');
    });

    $(document).on('mouseup', function (e) {
        const modal = document.querySelector('.accept__content');
        if (!modal.contains(e.target)) {
            $('.accept').removeClass('accept--active');
            $('.wrapper').removeClass('lock');
        }
    });

    $('.accept__close').on('click', function () {
        $('.accept').removeClass('accept--active');
        $('.wrapper').removeClass('lock');
    });

    $('.for__items').masonry({
        gutter: 15,
    })
});