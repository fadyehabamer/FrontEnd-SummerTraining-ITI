// * 1-Name must be required ✔️✔️✔️✔️✔️
// * 2-Name accept numbers and char (u need to use RegEX)==>search(match,test)==>string object 
// * 3-User accept only numbers ,min 5 ,Max 10 ✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
// * 4-Country ==>must be choosen  ✔️✔️✔️✔️✔️✔️
// * 5- Email must be email format  ✔️✔️✔️✔️✔️
// * 6-password must be matched with Confirm pasword and Min 10 Mx 20 conatin (numbers ,chars and special chars) ✔️✔️✔️✔️✔️✔️✔️
// * 7-gender ==> must be choose  ✔️✔️✔️✔️✔️
// * 8-checked box of languages must be checked at least two languages ✔️✔️✔️✔️
// * 9 ==> input blur (span for validation message)
// * 10==>fir all valdiation at submit button  call checAll(return true if all validation is correct) false if at least one is not corrected ✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
// * blur,keypress,keydown,foucs,select ,css error span ==>red ,""
// * never ever use html5 attributesssssssssssss  ✔️✔️✔️✔️✔️✔️


function validate() {

    // ! User Name Validation 
    var username_input = document.forms["registration"]["username"].value,
        uname = document.getElementById("uname")
    if (username_input == "") {
        uname.style.display = "block"
    }
    else {
        uname.style.display = "none"
    }

    // * =============================================================================

    // ! ID VALIDATION // min = 5 , max 10
    var userid_input = document.getElementById("userid").value,
        uid = document.getElementById("uid");

    console.log(userid_input.length)

    if ((isNaN(userid_input) || userid_input == "") || (userid_input.length < 5 || userid_input.length > 10)) {
        uid.style.display = "block"
    }

    // * =============================================================================

    // ! Country must be choosen
    var country_input = document.getElementById("country").value,
        country_span = document.getElementById("counteryVa")
    if (country_input == "Default") {
        country_span.style.display = "block"
    }

    // * =============================================================================

    // ! Email must be formatted 
    var email_input = document.forms["registration"]["email"].value,
        email_span = document.getElementById("email_err");
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_input))) {
        email_span.style.display = "block"
    }

    // * =============================================================================


    // ! password
    var pass_input = document.getElementById("pass").value,
        confirm_input = document.getElementById("confirm").value,
        pass_span = document.getElementById("pass_span")

    if ((pass_input.length < 10 || pass_input.length > 20) && pass_span != confirm_input) {
        pass_span.style.display = "block"
        // console.log(pass_input, confirm_input)
    }

    // * =============================================================================

    // ! check radio buttons clicked
    var radio_btns = document.querySelectorAll('input[name="sex"]');
    for (var i = 0; i < radio_btns.length; i++) {
        var selected = "";

        if (radio_btns[i].checked) {
            selected = radio_btns[i].value
            // console.log(selected)
            if (selected == "") {
                // console.log(selected)
                var gender_span = document.getElementById("Gender_span")
                gender_span.style.display = "block"

            }
        }
    }
    // * =============================================================================

    // ! check if checkboxes > 2
    var check_boxes = document.querySelectorAll('input[name="Uint"]'),
        checked = 0,
        lang_span = document.getElementById("lang_span")
    //Loop and count the number of checked CheckBoxes.
    for (var i = 0; i < check_boxes.length; i++) {
        if (check_boxes[i].checked) {
            checked++;
        }
    }
    if (checked < 2) {
        lang_span.style.display = "block"
    }
}

