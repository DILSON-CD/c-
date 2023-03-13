$(window).on('load', function () {
    $("#Sel_Employee").find('option:selected').val("");
    $("[id*=hdncall_id]").val("");
    $("#txtRemarks").val("");
    sel_emp();
   
    
})

function sel_emp() {
    //alert("keri");
    var user_ID = $("[id*=hdUserId]").val();

    $.ajax({

        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "QA_myremark.aspx/Get_QAnum_dtl",
        data: "{userid: '" + user_ID + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
           //alert("kkpp");
           // alert(Result);
            $("[id*=hdncall_id]").val()
            $('#Sel_Employee').append($("<option></option>").val("-1").html("----------------Select----------------"));
            $.each(Result, function (key, value) {
                $('#Sel_Employee').append($("<option></option>").val(value.mob).html(value.name + "-" + value.mob));
                //$("#Sel_Employee").append($("<option></option>").val(value.name).html(data));
            });

        }

    });
    
}



function get_rem() {
  
    var Caller_ID = $("[id*=hdUserId]").val();
    var mob = $('#Sel_Employee').val();


    $.ajax({

        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "QA_myremark.aspx/Get_QA_rem",
        data: "{indata: '" + mob + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $('#QA_rem').val(Result); 
        }
    });

        }

    
function filltab1() {
   
    $("#tabChange").empty();
    $("#id_close").hide();
    var callid = $("[id*=hdncall_id]").val();
    var mob = $('#Sel_Employee').val();
    if (mob == "") {
        alert("Please Select QA Mobile");
    }
    else {
        debugger;
        $.ajax(
            {
                type: "post",
                contentType: "application/json; charset=utf-8",
                url: "QA_myremark.aspx/GETDATALIST",
                data: "{indata: '" + mob + "',callid:'" + callid + "'}",
                dataType: "json",
                success: function (Result) {
                    Result = Result.d;

                    var valData, valData1, i;
                    valData = Result.split('$');
                    
                     

                    if ($("#tabChange tr").length == 0) {

                        $("#tabChange").empty();
                        $('#tabChange').append('<tr style="background-color: burlywood"><th class="text-center" style="width:120px">Employee_Code</th><th class="text-center" style="width:80px">QA_Mobile_NO</th><th class="text-center" style="width:80px">Verify_Date</th> <th class="text-center" style="width:80px">Verified_By</th> <th class="text-center" style="width:80px">OPENING PROCEDURE</th> <th class="text-center" style="width:80px">CALL HANDLING SKILL</th> <th class="text-center" style="width:100px">SOFT SKILLS</th> <th class="text-center" style="width:150px">HOLD PROCEDURE</th> <th class="text-center" style="width:80px">BUSINESS DEVELIOPMENT</th> <th class="text-center" style="width:80px">CLOSING PROCEDURE</th> <th class="text-center" style="width:80px">FATAL ERRORS</th> <th class="text-center" style="width:80px">WOW</th> <th class="text-center" style="width:80px">Total_marks</th><th class= "text-center" style="width:80px;display:none;">ANS</th ><th class= "text-center" style="width:80px;display:none;">fatal</th ></tr > ');
                    }
                    //var sno = $('#tableData tr').length;

                    for (i = 0; i < valData.length - 1; i++) {
                        valData1 = valData[i].split('~');
                       // valData1[13] = Result.split('^');


                        $('#tabChange').append('<tbody><tr>' +

                            '<td class="text-center">' + valData1[0] + '</td>' +
                            '<td class="text-center">' + valData1[1] + '</td>' +
                            // '<td class="text-center" id="id_close"></td>' +
                            '<td class="text-center">' + valData1[2] + '</td>' +
                            '<td class="text-center">' + valData1[3] + '</td>' +

                            '<td class="text-center"><a href="javascript:PopCatView(1)">' + valData1[4] + '</a></td>' +
                            '<td class="text-center"><a href="javascript:PopCatView(2)">' + valData1[5] + '</a></td>' +
                            '<td class="text-center"><a href="javascript:PopCatView(3)">' + valData1[6] + '</a></td>' +
                            '<td class="text-center"><a href="javascript:PopCatView(4)">' + valData1[7] + '</a></td>' +
                            '<td class="text-center"><a href="javascript:PopCatView(5)">' + valData1[8] + '</a></td>' +
                            '<td class="text-center"><a href="javascript:PopCatView(6)">' + valData1[9] + '</a></td>' +
                            '<td class="text-center"><a href="javascript:Popfatal(7)">' + valData1[10] + '</a></td>' +
                            '<td class="text-center">' + valData1[11] + '</td>' +
                            '<td class="text-center">' + valData1[12] + '</td>' +
                            '<td class="text-center" style="display:none">' + valData1[13] + '</td>' + 
                            '<td class="text-center" style="display:none">' + valData1[14] + '</td>' );

                        $("[id*=hdscore]").val(valData1[13]);
                        $("[id*=hdfatal]").val(valData1[14]);

                    }

                }
            });
    }
    get_rem();
}

function PopCatView(cat) {
   // alert(qu);

    $('#exampleModal').modal('show');

    popup_dtl(cat);
    //alert(data);
} 

function Popfatal(ERE) {
     //alert(ERE);

    $('#exampleModal').modal('show');

    popfat_dtl(ERE);
   // alert(data);
} 



function Confirm() {
   // alert('123');
    debugger;
    var mob = $("#Sel_Employee").find('option:selected').val();
    var mobd = $("#Sel_Employee").find('option:selected').text();
    var callid = mobd.split('-');
    var cid = callid[0];

    var remk = $("#txtRemarks").val();
    var Caller_ID = $("[id*=hdUserId]").val();


    if ($("#Sel_Employee").find('option:selected').val() == "-1") {
        alert("Please select Mobile")
        return false;
    }
    if ($("#txtRemarks").val() == "" || $("#txtRemarks").val() == null) {
        alert("Please add your remark..!");
        $("#txtRemarks").focus();
        return false;
    }
    else {

        $.ajax({

            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "QA_myremark.aspx/qa_update",
            data: "{caller_id: '" + Caller_ID + "',rem: '" + remk + "',phno: '" + mob + "',callid: '" + cid + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                // -------------
                if (Result == '111') {
                    //------------------------------------366371

                    //sendmail(prd_status, prod_id, productname, lead1);

                    //--------------------------------------end 366371
                    let timerInterval
                    Swal.fire({
                        width: 400,
                        type: 'success',
                        title: 'Success!',
                        html: "Your QA Remarks updated!! ",

                        allowOutsideClick: true,
                        timer: 5000,
                        onBeforeOpen: () => {
                            //Swal.showLoading()
                            timerInterval = setInterval(() => {
                                Swal.getContent().querySelector('strong')
                                    .textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        onClose: () => {
                            clearInterval(timerInterval)
                            window.open('QA_myremark.aspx', '_self');
                        }
                    }).then((result) => {
                        if (
                            // Read more about handling dismissals
                            result.dismiss === Swal.DismissReason.timer
                        ) {
                            window.open('QA_myremark.aspx', '_self');
                        }
                    })

                }

                //   ---------------
            }

        });
    }

}



function popup_dtl(cat) {
   //alert('hii');
    debugger;
    var user = $("[id*=hdUserId]").val();
    var mob = $('#Sel_Employee').val();
   // var valData2 = valData[i].split('^');
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "QA_myremark.aspx/GETPOPUPDTL",
        data: "{val1 :'" + mob + "',val2 :'" + cat + "'}",
        dataType: "json",
        success: function (Result) {

            debugger;
            var Result = Result.d;
            if (Result == "") {
                alert('No ATR Found to update');
                return false;
            }
            else
            {
                  // alert(Result);
                    popfil(Result);
            }
           

        },



    });


}

function popfat_dtl(ERE) {
    //alert('hii');
    debugger;
    var user = $("[id*=hdUserId]").val();
    var mob = $('#Sel_Employee').val();
    // var valData2 = valData[i].split('^');
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "QA_myremark.aspx/GETPOPFATAL",
        data: "{val1 :'" + mob + "',val2 :'" + ERE + "'}",
        dataType: "json",
        success: function (Result) {

            debugger;
            var Result = Result.d;
            if (Result == "") {
                alert('No ATR Found to update');
                return false;
            }
            else {
               // alert(Result);
                popfat_fil(Result);
              
            }


        },



    });


}




function popfil(data) {
    //alert('popfil');
    debugger;

    var valData = data.split('@');

    $("#tblReportData").empty();
    if ($("#tblReportData tr").length == 0) {

        $("#tblReportData").empty();
        $('#tblReportData').append('<tr class="bg-primary text-white" style="text-align:center;">' +
            '<th style="width:100px;text-align:center;">SL.NO</th >' +
            '<th style="width:800px;text-align:center;">Questions</th>' +
            '<th style="width:100px;text-align:center;">SCORE</th>' +
            '<th style="width:200px;text-align:center;">MARKES SCORED (Y/N)</th>' +
            '<th style="width:200px;text-align:center;display:none;">QT.NO</th></tr>')
    }
   // alert("pp");
    debugger;
    var YorN = $("[id*=hdscore]").val();
   // alert(YorN);
 

    for (i = 0; i < valData.length - 1; i++)
    {
       var valData1 = valData[i].split('!');
        var YES_N0 = YorN.split('!');
        //alert(YES_N0);
        for (j = 0; j < YES_N0.length - 1; j++)
        {
            //alert(YES_N0[j]);
            var qu_arr = YES_N0[j].split('^');
            //alert(qu_arr[0] +"|" + valData1[3]);
            if (qu_arr[0] == valData1[3])
            {
            $('#tblReportData').append('<tbody><tr>' +
                '<td class="text-center">' + valData1[0] + '</td>' +
                '<td class="text-center">' + valData1[1] + '</td>' +
                '<td class="text-center">' + valData1[2] + '</td>' +
                '<td class="text-center">' + qu_arr[1] + '</td>' +
                '<td class="text-center"style="display:none">' + valData1[3] + '</td>' +
                    '</tr > </tbody > ');
            }
        }
    }
    return;
}

function popfat_fil(data) {
    //alert(data);
    debugger;

    var valData = data.split('@');
   // alert(valData);
    $("#tblReportData").empty();
    if ($("#tblReportData tr").length == 0) {

        $("#tblReportData").empty();
        $('#tblReportData').append('<tr class="bg-primary text-white" style="text-align:center;">' +
            '<th style="width:100px;text-align:center;">SL.NO</th >' +
            '<th style="width:800px;text-align:center;">FATAL ERRORS</th>' +
            '<th style="width:200px;text-align:center;display:none;">MARKES SCORED (Y/N)</th>' +
            '<th style="width:200px;text-align:center;display:none;`">QT.NO</th></tr>')
    }
    // alert("pp");
    debugger;
    var FATAL = $("[id*=hdfatal]").val();
    // alert(YorN);

   
    for (i = 0; i < valData.length - 1; i++) {
        var valData1 = valData[i].split('!');
        var FATERR = FATAL.split('^');
        for (j = 0; j <= FATERR.length - 1; j++) {
           
           // alert(valData1);
           // alert(FATERR[i]);//+"|"+ valData1[2]);
            if (FATERR[j] == valData1[2]) {
               
                $('#tblReportData').append('<tbody><tr>' +
                    '<td class="text-center">' + valData1[0] + '</td>' +
                    '<td class="text-center">' + valData1[1] + '</td>' +
                    '<td class="text-center"style="display:none>' + FATERR[0] + '</td>' +
                    '<td class="text-center"style="display:none>' + valData1[2] + '</td>' +
                    '</tr > </tbody > ');
               
            }
        }
    }
    return;
    
}

function Claim() {
    // alert("keri");
    debugger;
    var mob = $("#Sel_Employee").find('option:selected').val();
    var mobd = $("#Sel_Employee").find('option:selected').text();
    var remk = $("#txtRemarks").val();
    var Caller_ID = $("[id*=hdUserId]").val();
    var callid = mobd.split('-');
    var cid = callid[0];



    if ($("#Sel_Employee").find('option:selected').val() == "-1") {
        alert("Please select Mobile")
        return false;
    }
    if ($("#txtRemarks").val() == "" || $("#txtRemarks").val() == null) {
        alert("Please add your remark..!");
        $("#txtRemarks").focus();
        return false;
    }
    else {

        $.ajax({

            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "QA_myremark.aspx/qa_claim",
            data: "{caller_id: '" + Caller_ID + "',rem: '" + remk + "',phno: '" + mob + "',callid: '" + cid + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                // -------------
                if (Result == '111') {
                    //------------------------------------366371

                    //sendmail(prd_status, prod_id, productname, lead1);

                    //--------------------------------------end 366371
                    let timerInterval
                    Swal.fire({
                        width: 400,
                        type: 'success',
                        title: 'Success!',
                        html: "Your QA Remarks Claimed Succesfully!! ",

                        allowOutsideClick: true,
                        timer: 5000,
                        onBeforeOpen: () => {
                            //Swal.showLoading()
                            timerInterval = setInterval(() => {
                                Swal.getContent().querySelector('strong')
                                    .textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        onClose: () => {
                            clearInterval(timerInterval)
                            window.open('QA_myremark.aspx', '_self');
                        }
                    }).then((result) => {
                        if (
                            // Read more about handling dismissals
                            result.dismiss === Swal.DismissReason.timer
                        ) {
                            window.open('QA_myremark.aspx', '_self');
                        }
                    })

                }

                //   ---------------
            }

        });

    }
}





