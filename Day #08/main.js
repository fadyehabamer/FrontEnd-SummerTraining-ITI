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
    // each check shows its message when invalid and hides it again once fixed;
    // the function returns true only when every field is valid (requirement 10)
    var valid = true;

    function show(span, isInvalid) {
        span.style.display = isInvalid ? "block" : "none";
        if (isInvalid) {
            valid = false;
        }
    }

    // ! User Name Validation 
    var username_input = document.forms["registration"]["username"].value,
        uname = document.getElementById("uname")
    show(uname, username_input == "")

    // * =============================================================================

    // ! ID VALIDATION // min = 5 , max 10
    var userid_input = document.getElementById("userid").value,
        uid = document.getElementById("uid");
    show(uid, (isNaN(userid_input) || userid_input == "") || (userid_input.length < 5 || userid_input.length > 10))

    // * =============================================================================

    // ! Country must be choosen
    var country_input = document.getElementById("country").value,
        country_span = document.getElementById("counteryVa")
    show(country_span, country_input == "Default")

    // * =============================================================================

    // ! Email must be formatted 
    var email_input = document.forms["registration"]["email"].value,
        email_span = document.getElementById("email_err");
    show(email_span, !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_input)))

    // * =============================================================================

    // ! password: 10-20 characters and must match the confirmation
    // (was: length check && pass_span != confirm_input, which compared the <span> element with
    // a string, so a mismatched confirmation was never reported)
    var pass_input = document.getElementById("pass").value,
        confirm_input = document.getElementById("confirm").value,
        pass_span = document.getElementById("pass_span")
    show(pass_span, pass_input.length < 10 || pass_input.length > 20 || pass_input !== confirm_input)

    // * =============================================================================

    // ! a gender radio button must be checked (the old loop only looked at checked buttons,
    // so the message never appeared when none was chosen)
    var gender_span = document.getElementById("Gender_span")
    show(gender_span, document.querySelectorAll('input[name="sex"]:checked').length === 0)

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
    show(lang_span, checked < 2)

    return valid
}
