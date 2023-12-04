$('.burger span').on('click', function() {
    $(this).toggleClass('active')
    $('.menu').toggleClass('burger-active')
    $('.navbar__btns').toggleClass('burger-active')
    $('body').toggleClass('lock')
})