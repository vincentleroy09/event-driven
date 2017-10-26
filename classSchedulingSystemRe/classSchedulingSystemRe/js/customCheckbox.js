$("#checkAll").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});

$("#uncheckAll").click(function () {
    $('input:checkbox').prop('checked', this.checked = false);
});