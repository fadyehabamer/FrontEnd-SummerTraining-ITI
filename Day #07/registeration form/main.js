//search prop 
var userdata = location.search.split("&");
var dispalyData =

    `<table class="_tbl" cellpadding=5 cellspacing=5 >
    <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Address</th>
    <th>DOB</th>
     <th>Age</th>
      <th>Hobby</th>
       <th>gender</th> 
       <tr>`;



// form values arrive URL-encoded ("Fady+Amer", "%40"); decode them and escape HTML before writing
function decodeValue(value) {
    return decodeURIComponent((value || "").replace(/\+/g, " "))
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

for (var i = 0; i < userdata.length; i++) {
    dispalyData += "<td>" + decodeValue(userdata[i].split("=")[1]) + "</td>";
}
console.log("dispalyData", dispalyData);
dispalyData += "</tr></table>";
document.write(dispalyData);