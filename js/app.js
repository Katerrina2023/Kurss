$(".menu__item-droplist").on('click', function(){
    $(this).toggleClass("active")
})

$(".tabs__title").click(function() {
    $(this).parent().children().removeClass("tabs__title_active")
    $(this).addClass("tabs__title_active")
    let tabId = $(this).attr("data-tab")
    $(this).parent().next().children().removeClass("tabs__body_active")
    $(this).parent().next().children(`[data-tab=${tabId}]`).addClass("tabs__body_active")
})

$(".spoiler__header").click(function() {
    $(this).parent().parent().children().removeClass("spoiler_active")
    $(this).parent().addClass("spoiler_active")
})

$(".tag").click(function() {
    $(this).toggleClass("tag_active")
})

$(".tags__header").click(function() {
    $(this).toggleClass("tags__header_active")
    $(this).parent().children(".tags__body").toggleClass("tags__body_active")
})

$("#application-btn").click(function(e) {
    e.preventDefault()
    $(".form").addClass("form_active")
    $("body").addClass("lock")
})

$(window).click(function() {
    $(".form").removeClass("form_active")
    $("body").removeClass("lock")
});
$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        $(".form").removeClass("form_active")
        $("body").removeClass("lock")
    }
});
$('.form__container, #application-btn').click(function(event){
    event.stopPropagation();
});