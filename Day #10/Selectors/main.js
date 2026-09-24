//  * 1 - change background color for all p and li elements (using one selector)\
$("p , li").css({
    backgroundColor: "lightblue"
})

// * 2 - set border to "3px solid green" for all elements having class a
$(".a").css({
    border: "3px solid green",

})

// * 3- change img border , width , height
$("img").css({
    border: "2px dashed blue",
    "width": "150px",
    height: "150px"
})

// * 4- p which is direct child of div change background , color
$("div > p").css({
    backgroundColor: "red",
    color: "white"
})

// * 5- select next paragraph to the first one on the page and change color and font size
$("p:first + p").css({
    color: "red",
    "font-size": "21px"
})

// * 6 - select all paragraphs next to the first one
$("p:first ~ p").css({
    backgroundColor: "blue",
    color: "white"
})

// * 7- change color for anchors starts with http keyword (use attribute filters)
$("a[href^='http']").css({
    color: "black"
});


// * 9- choose first row from each table and change it’s background color
// (":first" matches only one row on the whole page; ":first-child" matches one per table)
$("table tr:first-child").css({
    backgroundColor: "lightgreen"
})

// * 11 - change color of last td in second table
// ("tr:last" coloured the whole last row; the task asks for the last td)
$("table:eq(1) td:last").css({
    color: "red"
})

// * 12 - change color for odd td’s using nth-child(odd) and odd (what is the difference)

// ! actually affect on odd indexes 
$("td:odd").css({
    color: "blue"
});

// ! actually affect on odd elements 
$("td:nth-child(odd)").css({
    color:"green"
})


// * 13 - change all input color to blue
$("input").css({
    color:"blue"
}) 
