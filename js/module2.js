var $ = require("jquery");

function module2Init() {
    var newMsg = $("<li> module 2 loaded </li>");
    $("#messages").append(newMsg);
}

$(document).ready(function () {
    setTimeout(function() {
        module2Init();
    }, 1000);
});