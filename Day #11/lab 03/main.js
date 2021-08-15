// * get input val
// * on click on ADD append value to ul on left

$(document).ready(function () {

    $("ul").on("click", "li", function () {
        $(this).toggleClass("liElm")
    })


    $('#add_btn').on("click", function () {
        var task = $(':text').val();
        var html = '<li>' + task + '</li>';
        $('#ULeft').append(html);
    })



    $("#_right").on("click", function () {
        var listItems_left = $("#ULeft li");
        listItems_left.each(function (idx, li) {
            var old_li = $(li)
            if (old_li.hasClass("liElm")) {
                var right_task = $(this).text();
                var right_html = '<li>' + right_task + '</li>';
                $('#ULRight').append(right_html);
                old_li.remove()
            }
        });
    })

    $("#_left").on("click", function () {
        var listItems_right = $("#ULRight li");
        listItems_right.each(function (index, el) {
            var right_li = $(el)
            if (right_li.hasClass("liElm")) {
                var left_task = $(this).text();
                var left_html = "<li>" + left_task + "</li>"
                $("#ULeft").append(left_html)
                right_li.remove()
            }
        })
    })

})