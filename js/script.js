$(".navigation-open").click(() => {
    $(".navigation").addClass("open");
    $("body").addClass('lock')
});

$(window).click(function () {
    $(".navigation").removeClass("open");
    $("body").removeClass('lock')
});

$(".navigation").click(() => {
    event.stopPropagation();
});
