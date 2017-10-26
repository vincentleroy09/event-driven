$("#addGrade").click(function () {
    var addGradeComponent = $("[name='addGradeComponent']").val();
    var outOf = $("[name='outOf']").val();
    $("#view-students-table thead tr").append("<th>" + addGradeComponent + "</th>");
    $("#view-students-table tbody tr").append("<td><div class=\"form-group\">\n" +
        "                                            <div class=\"input-group\">\n" +
        "                                                <input type=\"number\" class=\"form-control\" name=\"beginNumber\">\n" +
        "                                                <span class=\"input-group-addon\">/</span>\n" +
        "                                                <input type=\"number\" class=\"form-control\" value=\"" + outOf + "\" readonly>\n" +
        "                                            </div>\n" +
        "                                        </div></td>");
});