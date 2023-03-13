
$(window).load(function () {

    viewmenuid();
    $("#txt_frm").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: new Date(),
        minDate: '-115Y',
        onSelect: function (dateText, inst) {
        }
        //----     
    });
    $("#txt_to").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: new Date(),
        minDate: '-115Y',
        onSelect: function (dateText, inst) {
        }
        //----     
    });

});


function viewmenuid() {

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Oversee_RMain.aspx/getFillData",
        data: "{typ:'MARMENUID', val1 :'0'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlReport').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}

//--------------validation--------------------//

function Legalvalidationrpt() {

    if ($('#ddlReport').val() == '-1') {
        alert('Select report first ...!!!');
        $('#ddlReport').focus();
        return false;
    }
    return true;
}


function ConvrsnReport() {

    window.location = "Oversee_Report.aspx?mnuId=" + $('#ddlReport').val() + "&mnuName=" + $("#ddlReport option:selected").text() + "&frdt=" + $("#txt_frm").val() + "&todt=" + $("#txt_to").val();

}

