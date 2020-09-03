$(document).ready(function() {
    $('.faq__item__question').click(function() {
        $(this).find('.faq__item__question__icon').toggleClass('active');
        $(this).next('.faq__item__answer').slideToggle();

        $('.faq__item__question').not(this).parent().find('.faq__item__question__icon').removeClass('active');
        $('.faq__item__question').not(this).parent().find('.faq__item__answer').slideUp();
    })
})