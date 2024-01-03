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