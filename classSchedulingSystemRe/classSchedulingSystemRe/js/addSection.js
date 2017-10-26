$(document).ready(function () {
    $("#program-code").change(function () {
        var val = $(this).val();
        if (val == "BSIT") {
            $("#program-title").val("Bachelor of Science in Information Technology");
            $("#program-section").html("<option>4BSIT7A</option><option>4BSIT7B</option><option>4BSIT7C</option>");
        } else if (val == "BSED") {
            $("#program-title").val("Bachelor of Science in Education");
            $("#program-section").html("<option>4BSED7A</option><option>4BSED7B</option><option>4BSED7C</option>");
        } else if (val == "BSHRM") {
            $("#program-title").val("Bachelor of Science in Human Resource Management");
            $("#program-section").html("<option>4BSHRM7A</option><option>4BSHRM7B</option><option>4BSHRM7C</option>");
        } else if (val == "BSTM") {
            $("#program-title").val("Bachelor of Science in Tourism");
            $("#program-section").html("<option>4BSTM7A</option><option>4BSTM7B</option><option>4BSTM7C</option>");
        } else {
            $("#program-title").val("");
            $("#program-section").html("");
        }
    });
});