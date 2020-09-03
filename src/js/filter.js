$(document).ready(function() {
    
    $(document).on('click', function(evt) {
        let target = evt.target;

        // выпадашка селектов
        if ($(target).hasClass('filter__select__current')) {
            $('.filter__select__current').not($(target)).next().fadeOut();
            $(target).next().fadeToggle();
            
        } else {
            $('.filter__select__dropdown').fadeOut();
        }
    });

    // клик по варианту селекта
    $('.filter__select__dropdown__item').click(function() {
        // показываем галочку
        $(this).addClass('active').siblings().removeClass('active');

        // берем дата-атрибут кликнутого элемента
        let itemValue = $(this).attr('data-value');
        // обращаемся к ближайшему скрытому инпуту
        let selectInput = $(this).closest('.filter__select').find('.filter__selelct__input');
        // обращаемся к текущему элементу селекта
        let selectCurrent = $(this).closest('.filter__select').find('.filter__select__current');
        
        // меняем значение в селекте
        selectCurrent.html(itemValue);
        // меняем значение в инпуте
        selectInput.val(itemValue);        
    });

    //открытие скрытого фильтра
    $(".js-filter-toggle").click(function() {
        $(this).toggleClass('active');
        $('.filter__row_hidden').slideToggle();
    });  


})