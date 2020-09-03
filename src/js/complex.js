$(document).ready(function() {
    $('.complex__picture__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $('.complex__ipoteka__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false
    })
})