$(function () {
    $('.for__items').masonry({
        // options
        itemSelector: '.for__item',
        columnWidth: 305,
        gutter: 20,
        horizontalOrder: true,
    });

    const btn = document.querySelector('.tariffs__btn');
    const modal = document.querySelector('.accept');
    const toggleMenu = function () {
        modal.classList.toggle('accept--active');
        document.querySelector('.wrapper').classList.add('lock');
    }

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_menu = target == modal || modal.contains(target);
        const its_btnMenu = target == btn;
        const menu_is_active = modal.classList.contains('accept--active');

        if (!its_menu && !its_btnMenu && menu_is_active) {
            toggleMenu();
            document.querySelector('.wrapper').classList.remove('lock');
        }
    });

    $('.accept__close').on('click', function () {
        $('.accept').removeClass('accept--active');
        $('.wrapper').removeClass('lock');
    });
});