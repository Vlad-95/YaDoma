$(document).ready(function() {
    // калькулятор на главной странице
    $('.ipoteka-section__calc__item__range input.price').jRange({
        from: 100000,
        to: 5000000,
        step: 250000,
        width: '100%',
        theme: ""
    });

    $('.ipoteka-section__calc__item__range input.year').jRange({
        from: 0,
        to: 25,
        scale: ['3 года','5 лет','10 лет','15 лет','20 лет', '25 лет'],
        width: '100%',
        format: "%s лет",
        step: 1,
    });

    // калькулятор на странице ипотеки
    $('.ipoteka-calc__item__range input.price').jRange({
        from: 1500000,
        to: 30000000,
        step: 250000,
        width: '100%',
        format: "%s ₽",
        theme: ""
    });

    $('.ipoteka-calc__item__range input.year').jRange({
        from: 0,
        to: 25,
        scale: ['3 года','5 лет','10 лет','15 лет','20 лет', '25 лет'],
        width: '100%',
        format: "%s лет",
        step: 1,
    });

    $('.ipoteka-calc__item__range input.firstpaid').jRange({
        from: 0,
        to: 30000000,
        step: 250000,
        width: '100%',
        theme: ""
    });

    $(document).on('click', function(evt) {
        let target = evt.target;

        // выпадашка селектов
        if ($(target).hasClass('ipoteka__select__current')) {
            $('.ipoteka__select__current').not($(target)).next().fadeOut();
            $(target).next().fadeToggle();
            
        } else {
            $('.ipoteka__select__dropdown').fadeOut();
        }
    });

    // клик по варианту селекта
    $('.ipoteka__select__dropdown__item').click(function() {
        // показываем галочку
        $(this).addClass('active').siblings().removeClass('active');

        // берем дата-атрибут кликнутого элемента
        let itemValue = $(this).attr('data-value');
        // обращаемся к ближайшему скрытому инпуту
        let selectInput = $(this).closest('.ipoteka__select').find('.ipoteka__select__input');
        // обращаемся к текущему элементу селекта
        let selectCurrent = $(this).closest('.ipoteka__select').find('.ipoteka__select__current');
        
        // меняем значение в селекте
        selectCurrent.html(itemValue);
        // меняем значение в инпуте
        selectInput.val(itemValue);        
    });

    //одинаковая высота заголовков в блоке "КАК ПОЛУЧИТЬ ИПОТЕКУ?"
    $('.ipoteka-get__item__top').matchHeight();

    //слайдер партнеров
    if($('.ipoteka-partners__slider').length) {
        $('.ipoteka-partners__slider').slick({
            slidesToShow: 6,
            dots: false,
            arrows: true
        });

        $('.ipoteka-partners__slide').matchHeight();
    }
})