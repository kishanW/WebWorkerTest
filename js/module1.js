var $ = require("jquery");

function module1Init() {
    var newMsg = $("<li> module 1 loaded </li>");
    $("#messages").append(newMsg);
}
$(document).ready(function () {
    setTimeout(function() {
        module1Init();
    }, 1000);
});