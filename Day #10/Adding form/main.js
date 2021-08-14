$(".add").click(function () {

    var name = $(":text:first").val();
    var grade = $(":text:eq(1)").val();
    var opt_value = $("#select option:selected").text();


    var name_td = document.createElement("td");
    $(name_td).text(name);


    var grade_td = document.createElement("td");
    $(grade_td).text(grade);


    var opt_td = document.createElement("td")
    $(opt_td).text(opt_value)


    var row = document.createElement("tr");
    $(row).css({
        backgroundColor: 'black',
        "text-align": "center",
        "padding": "10px",
        color: "white",
        border: '4px dashed white'
    });

    row.appendChild(name_td);
    row.appendChild(grade_td);
    row.appendChild(opt_td)

    var dataTable = document.getElementById("dataDisplay");
    dataTable.appendChild(row);

});