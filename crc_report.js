var usr = "";
window.addEventListener('load', function () {
    usr = $("[id*=hdUserId]").val();
    $("#txtfrmDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });
    $("#txttoDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });
    load_report();

})
function frmExit() {
    window.open("index.aspx", "_self");

}
function load_report() {
    
  
        $('#txtEmploy').val('-1');
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "crc_report_generation.aspx/DropdownFill",
            data: "{pageVal:'GETMENUID',pageval1 :'', pageval2 :''}",
            async: false,
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                $.each(Result, function (key, value) {
                    $('#report_id').append($("<option></option>").val(value.id).html(value.name));
                });
            }
        });
    
}
//function GenerateReport() {
//    var frm_date = "", to_date = "", emp = "", wrk_id = "", data = "";
//    if ($("#txtfrmDate").val() != "") {
//        frm_date = $("#txtfrmDate").val();
//    }
//    if ($("#txttoDate").val() != "") {
//        to_date = $("#txttoDate").val();
//    }
    
   
//    if ($("#txtEmploy").val() != '-1') {
//        emp = $("#txtEmploy").val();
//    }
//    if ($("#txtfrmDate").val() != "" && $("#txttoDate").val() != "") {
//        var newFrmDate = Date.parse(frm_date);
//        var NewToDate = Date.parse(to_date);
//        var dateDifference = NewToDate - newFrmDate;
//        if (dateDifference < 0) {
//            Swal.fire("Choose To Date greater than From Date");
//            $("#txttoDate").val("");
//            $("#txttoDate").focus();
//            return false;
//        }
//    }

//    data = frm_date + 'æ' + to_date + 'æ' + emp + 'æ' + wrk_id + 'æ';
//    //alert(data);
//    //encryptUrl(data);
//}
//function encryptUrl(dtdata) {
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "crc_report_generation.aspx/Encrypt",
//        data: "{clearText:'" + dtdata + "'}",
//        dataType: "json",
//        success: function (Result) {
//            Result = Result.d;
//            //window.open("POFormView.aspx?poid=" + Result);
//            // alert(Result);
//            window.open("crcreport.aspx?mnuId=" + Result + "");

//        }
//    });

//}
function change_text() {
    
    var dp1 = $("#report_id option:selected").val();

    //if (dp1 == 1 || dp1 == 4||dp1 == 5) {
    //    $("#div_report").hide();
        
    //}
    //else {
    //    $("#div_report").show();
    //}


    $("#div_report").show();
    if (dp1 == 1503 || dp1 == 1504) {
        $("#div_employee").show();
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "crc_report_generation.aspx/DropdownFill_employees",
            data: "{pageVal:'GETemployees',pageval1 :'', pageval2 :''}",
            async: false,
            dataType: "json",
            success: function (Result) {
                Result = Result.d;

                $("#empid").empty();
                $.each(Result, function (key, value) {
                    $('#empid').append($("<option></option>").val(value.id).html(value.name));
                });
            }
        });
    }
    else {
        $("#div_employee").hide();
    }

}
function viewReport() {
    var dp1 = $("#report_id option:selected").val();
    if (!Legalvalidationrpt()) {
        return false;
    }
    if (dp1 == 1503 || dp1 == 1504) {
        window.location = "crcreport.aspx?mnuId=" + $('#report_id').val() + "&mnuName=" + $("#report_id option:selected").text() + "&frdt=" + $("#txtfrmDate").val() + "&todt=" + $("#txttoDate").val() + "&employee=" + $("#empid option:selected").val();

    }
    else {
    window.location = "crcreport.aspx?mnuId=" + $('#report_id').val() + "&mnuName=" + $("#report_id option:selected").text() + "&frdt=" + $("#txtfrmDate").val() + "&todt=" + $("#txttoDate").val();
    }
    }
function Legalvalidationrpt() {
    frm_date = $("#txtfrmDate").val();

    to_date = $("#txttoDate").val();
    var dp1 = $("#report_id option:selected").val();
    if (dp1 == 2|| dp1 == 3 ) {
        
        if (frm_date == "" || to_date == "") {
            alerts('Select date ...!!!');
            return false;
        }
    }
    
    if ($('#report_id').val() == '-1') {
        alerts('Select report first ...!!!');
        $('#report_id').focus();
        return false;
    }
    
    var newFrmDate = Date.parse(frm_date);
    var NewToDate = Date.parse(to_date);
    var dateDifference = NewToDate - newFrmDate;
    if (dateDifference < 0) {
        Swal.fire("Choose To Date greater than From Date");
        $("#txttoDate").val("");
        $("#txttoDate").focus();
        return false;
    }
    return true;
}
function alerts(data) {



    Swal.fire({
        width: 400,
        type: 'error',
        title: 'Error!',
        html: data,
        showConfirmButton: true,
        allowOutsideClick: true



    })
}