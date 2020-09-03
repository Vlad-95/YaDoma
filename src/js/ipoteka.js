$(document).ready(function() {
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
})