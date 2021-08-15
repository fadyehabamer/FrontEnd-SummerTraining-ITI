$(document).ready(function () {

    // * get user choices and data
    // var selected = $("input[type='radio'][name='s_2_1_6_0']:checked");

    $("#add_btn").on("click", function () {
        var input_news = $(':text').val();
        var category = $("input[name='news']:checked").val();

        // alert(input_news)
        // alert(category)
        var html = "<tr>" + "<td>" + input_news + "</td>" + "<td>" + category + "</td>" + "</tr>"
        console.log(html)

        $("#display").append(html)
    })

    // * Search bar method 1


    $("#searchTxt").on("keyup", function () {
        var search = $(this).val();
        $("#display tr").each(function () {
            var s = $(this).text();
            if (s.indexOf(search) != -1) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    });

    // * Search bar method 2


    // $("#searchTxt").on("keyup", function () {
    //     var search = $(this).val().toLowerCase();
    //     $("#display tr").filter(function () {
    //         // * same as above but in one line
    //         $(this).toggle($(this).text().toLowerCase().indexOf(search) > -1)

    //         // console.log($(this).toggle($(this).text().toLowerCase().indexOf(search) > -1))
    //     });
    // });

})