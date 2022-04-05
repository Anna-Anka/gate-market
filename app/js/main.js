$(function () {

    var w = $(window).width();

    if (w <= 768) {
        $('.for__item:nth-child(3)').before($('.for__item:nth-child(8)'));
        $('.for__item:nth-child(7)').before($('.for__item:nth-child(5)'));
        $('.for__item:nth-child(5)').after($('.for__item:nth-child(4)'));
        $('.for__item:nth-child(5)').before($('.for__item:nth-child(6)'));
        $('.for__item:nth-child(7)').after($('.for__item:nth-child(6)'));
        $('.for__item:nth-child(8)').after($('.for__item:nth-child(7)'));
    }

    

    $('.for__items').masonry({
        itemSelector: '.for__item',
        gutter: 20,
        columnWidth: '.for__item',
        percentPosition: true,
        horizontalOrder: true
    }).imagesLoaded(function () {
        $('.for__items').masonry('reload');
    });



    $('.tariffs__btn').on('click', function () {
        $('.accept').addClass('accept--active');
        $('.wrapper').addClass('lock');
    });

    $(document).on('mouseup', function (e) {
        var modal = $('.accept, .accept--active');
        if (!modal.is(e.target) &&
            modal.has(e.target).length === 0) {
            modal.removeClass('accept--active');
            $('.wrapper').removeClass('lock');
        }
    });
});