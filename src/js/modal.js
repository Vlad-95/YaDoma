$(document).ready(function () {
    $('.complex__picture__info__link').click(function() {
        $('.modal_contacts').fadeIn();
    });

    $('.modal__close').click(function () {
        $('.modal').fadeOut();
    })
})