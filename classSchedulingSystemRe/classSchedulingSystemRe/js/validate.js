jQuery.validator.setDefaults({
    errorElement: "span",
    errorPlacement: function (error, element) {
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
            error.insertAfter(element.parent("label"));
        } else if (element.prop("type") === "file") {
            error.insertAfter(element.parent().parent());
        } else if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    },
    highlight: function (element) {
        $(element).parents(".form-group").addClass("has-error");
    },
    unhighlight: function (element) {
        $(element).parents(".form-group").removeClass("has-error");
    }
});

// Validate Form validateSetSchedule
$("#setSchedule").click(function () {
    $("#validateSetSchedule").validate({
        rules: {
            scheduleBegin: "required",
            scheduleEnd: "required",
            room: "required",
            instructors: "required"
        },
        messages: {
            scheduleBegin: "Please set the beginning time of the schedule.",
            scheduleEnd: "Please set the ending time of the schedule.",
            room: "Please assign a room.",
            instructors: "Please select a instructor."
        }
    });
    if ($("#validateSetSchedule").valid()) {
    }
});
// Validate Form validateGradeComponents
$("#gradeComponents").click(function () {
    $("#validateGradeComponents").validate({
        rules: {
            gcActivity: "required",
            gcSeatwork: "required",
            gcQuiz: "required",
            gcProject: "required",
            gcAssignment: "required",
            gcRecitation: "required",
            gcExam: "required"
        },
        messages: {
            gcActivity: "Please set the Activity.",
            gcSeatwork: "Please set the Seatwork.",
            gcQuiz: "Please set the Quiz.",
            gcProject: "Please set the Project.",
            gcAssignment: "Please set the Assignment.",
            gcRecitation: "Please set the Recitation.",
            gcExam: "Please set the Exam."
        }
    }, {
        duration: {
            numericality: {
                onlyInteger: true,
                greaterThan: 0
            }
        }
    });
    if ($("#validateGradeComponents").valid()) {
    }
});
// Validate Form validateSetSchedule
$("#addGrade").click(function () {
    $("#validateAddGrade").validate({
        rules: {
            addGradeComponent: "required",
            outOf: "required"
        },
        messages: {
            addGradeComponent: "Please select a Grade Component.",
            outOf: "Please add the limit for the Grade Component."
        }
    });
    if ($("#validateAddGrade").valid()) {
    }
});
// Validate Form validateSetSchedule
$("#saveStudentsTable").click(function () {
    $("#validateStudentsTable").validate({
        rules: {
            beginNumber: "required"
        },
        messages: {
            beginNumber: "Please enter a number."
        }
    });
    if ($("#validateStudentsTable").valid()) {
    }
});
// Reset validateSetSchedule
$("#clearSetSchedule").click(function () {
    $("#validateSetSchedule").trigger('reset');
});

// Reset validateAddGrade
$("#clearAddGrade").click(function () {
    $("#validateAddGrade").trigger('reset');
});