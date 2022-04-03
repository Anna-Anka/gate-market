$(function () {
    $('.for__items').masonry({
        // options
        itemSelector: '.for__item',
        columnWidth: 305,
        gutter: 20,
        horizontalOrder: true,
    });

    $('.tariffs__btn').on('click', function () {
        $('.accept').addClass('accept--active');
        $('.wrapper').addClass('lock');
    });

    $(document).on('mouseup', function (e) {
        var modal = $('.accept, .accept--active');
        if (!modal.is(e.target) 
            &&
            modal.has(e.target).length === 0) { 
            modal.removeClass('accept--active');
            $('.wrapper').removeClass('lock');
        }
    });
});