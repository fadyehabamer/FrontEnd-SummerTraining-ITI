$("div").click(function () {
    $("body").append($(this).clone(true));//copy withevents
});