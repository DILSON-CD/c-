var m_flag = 0;
$(window).load(function () {
    var bid = $("[id*=hdBrId]").val();
    check_scn();
    var valData;

    document.getElementById('qtn').style.display = 'none';

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/Getpst",
        data: "{typ:'',val:''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            valData = Result.split('^'); 
            //alert(valData[0] + '~bid' + bid);
            $("[id*=hd_post]").val(valData[0]);

            if (valData[0] == 10 || valData[0] == 1)
            {
                window.location = "../Err_Page.aspx";
            }
            else if ((valData[0] == 136 || valData[0] == 199) && (bid != 0)){

                $("#div_b4_after").show();
                //getActivity(valData[0]);
            }
            else
            {
                drops(valData[0]);   
            }
        }
    });
});
function check_scn()
{
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/ch_scn",
        data: "{typ:'',val:''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
           
        }
    });
}
function drops(data)
{
    
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/Getprps",
        data: "{typ:'AH_MARK_VERIFICATION',typ1:'getpropsal',val:'"+ data +"'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
          
            $("#marketing_act").append($("<option selected></option>").val("-1").html("SELECT"));
            $.each(Result, function (key, value) {
                $("#marketing_act").append($("<option></option>").val(value.Name).html(value.ID));
            });
        }
    });
}
function show_checks_list()
{
    var m_id = $("#marketing_act").val();
    var bid = $("[id*=hdBrId]").val();
    var empcode = $("[id*=hdUserId]").val();
    var valData5 = [];
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/get_al_checks",
        data: "{typ:'" + m_id + "',val:'" + empcode+"'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            if (Result == '11') {
                alert("Already Added");
            }
            //else
            //{
            //    $.ajax({
            //        type: "post",
            //        contentType: "application/json; charset=utf-8",
            //        url: "m_verification_AH_fzm.aspx/getpst_forcheck",
            //        data: "{typ:'',val:''}",
            //        dataType: "json",
            //        success: function (Result) {
                      
                        
            //            Result = Result.d;
            //            //valData = Result.split('^');
            //            valData5 = Result.split('^');
                      
            //            //if ((bid == 0)) {
                          
            //            //    show_fzm_chekqst();

            //            //}
            //           // else if (valData[0] == 136) {
            //           if (valData5[0] == 136) {

            //                show_checks();

            //            }
            //            //else if ((valData[0] == 199) && (valData[1] == 280)) {
            //            else if (valData5[0] == 199) {
            //                alert(0);
            //                show_rm_chekqst();
            //            }
            //            //else if (valData[0] == -36) {
            //            else if (valData5[0] == -36) {
            //                show_fzm_chekqst();
            //            }
            //            else {

            //            }

            //        }

            //    });

            //}
            else {
                $.ajax({
                    type: "post",
                    contentType: "application/json; charset=utf-8",
                    url: "m_verification_AH_fzm.aspx/getpst_forcheck",
                    data: "{typ:'',val:''}",
                    dataType: "json",
                    success: function (Result) {

                        Result = Result.d;
                        valData = Result.split('^');

                        if ((bid == 0)) {

                            show_fzm_chekqst();

                        }
                        else if (valData[0] == 136) {

                            show_checks();

                        }
                        else if ((valData[0] == 199) && (valData[1] == 280)) {

                            show_rm_chekqst();
                        }
                        else if (valData[0] == -36) {
                            show_fzm_chekqst();
                        }
                        else {

                        }

                    }

                });

            }
        }

    });


   
}
function show_checks() {
   
    $('#over').show();
    $('#modal').css({
        "width": "75%",
        "height": "60%",
        "opacity": "1.0",
        "margin-left": "-80px"

    });
    $('#modal').show();
    var m_id = $("#marketing_act").val();
    var option_id = $("#ddl_b4_after").val();
    var data = m_id + "~" + option_id;
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/show_check_ah",
        data: "{typ:'" + data +"',val:''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            filltable(Result);
        }
    });
}
function show_rm_chekqst()
{
    debugger;
   
    //alert("xi s not over");
    $('#over').show();
    $('#modal').css({
        "width": "75%",
        "height": "60%",
        "opacity": "1.0",
        "margin-left":"-80px"

    });
    $('#modal').show();
    var m_id = $("#marketing_act").val();
    var option_id = $("#ddl_b4_after").val();
    var data = m_id + "~" + option_id;
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/show_check_rm",
        data: "{typ:'" + data + "',val:''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            filltablerm_qst(Result);
        }
    });
}
function show_fzm_chekqst() {
   
    $('#over').show();
    $('#modal').css({
        "width": "75%",
        "height": "60%",
        "opacity": "1.0",
        "margin-left": "-80px"
    });
    $('#modal').show();
    var m_id = $("#marketing_act").val();
    var option_id = $("#ddl_b4_after").val();
    var data = m_id + "~" + option_id;
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/show_check_rm",
        data: "{typ:'" + data + "',val:''}",
        dataType: "json",
        success: function (Result)
        {
            Result = Result.d;
            filltablefzm_qst(Result);
        }
    });
}
function hide() {
    $('#over').hide();

    $('#modal').hide();
}
function marketing_acts()
{
    var mark_act=$("#marketing_act").val();
 

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/filldetails",
        data: "{typ:'" + mark_act + "',val:''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            filldetails(Result);
        }

    });
}
function filldetails(data) {


var valData;
    valData = data.split('^');
    $('#br_op_date').val(valData[0]);
    $('#gl_os_date').val(valData[1]);
    $('#du_activity').val(valData[2]);
    $('#unit_1').val(valData[3]);
    $('#sq_ft').val(valData[4]);
    $('#du_sec').val(valData[5]);
    $('#st_dt').val(valData[6]);
    $('#en_dt').val(valData[7]);
    $('#ven_name').val(valData[8]);
    $('#amt').val(valData[9]);

}
function filltable(data)
{
    var valData, n = 1;
    valData = data.split('!');

   
    $("#tableDataopt2").empty();
    if ($("#tableDataopt2 tr").length == 0) {

        $("#tableDataopt2").empty();

        $('#tableDataopt2').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center">SLNo.&nbsp;</th><th class="text-center">Questions</th><th class="text-center">ACTION</th> <th class="text-center">Remarks</th></tr>');
    }
  
    for (i = 0; i < valData.length - 1; i++) {
        var valdata1 = valData[i].split('^');
       
        var input = valdata1[2];
        
       
        $('#tableDataopt2').append('<tbody><tr>' +
            '<td style="display:none;">' + input +'</td>'+
            '<td>' + parseInt(n) + '</td>' +
            '<td class="text-left" style="width:500px;height:40px;">' + valdata1[1] + '</td>' +
           // '<td style="width:100px;height:40px;"><select id="drpsubpara' + (i + 1) + '" onchange=editsc() style="display:none"><option style="width:50px" id="selectop" >Select An Option</option><option style="width:50px" id="YES" >YES</option><option style="width:50px"  id="NO">NO</option><option style="width:50px" id="N/A" >N/A</option></select><textarea rows="4" cols="50" style="height:50px;display:none;" name="remarks" id="rem' + (i + 1) + '"  onkeypress="return isNumber(event, this.value,' + (i + 1) + ')"></textarea><input type="text" class="form-control input-group-text work" style="width:200px; color:black;text-transform: uppercase;display:none;"  id="inp_text' + (i + 1) + '" onkeypress="return isNumber1(event, this.value,' + (i + 1) +')" /></td>' +
            //'<td style="width:100px;height:40px;"><select id="drpsubpara' + (i + 1) + '" onchange=editsc(this.value,' + (i + 1) + ') style="display:none"><option style="width:50px" id="selectop">Select An Option</option><option style="width:50px" id="YES" >YES</option><option style="width:50px"  id="NO">NO</option><option style="width:50px" id="N/A" >N/A</option></select><textarea rows="4" cols="50" style="height:50px;display:none;" name="remarks" id="rem' + (i + 1) + '"  onkeypress="return isNumber(event, this.value,' + (i + 1) + ')"></textarea><input type="text" class="form-control input-group-text work" style="width:200px; color:black;text-transform: uppercase;display:none;"  id="inp_text' + (i + 1) + '" onkeypress="return isNumber1(event, this.value,' + (i + 1) +')" /></td>' +

            //'<td style="width:100px;height:40px;"><select id="drpsubpara' + (i + 1) + '" onchange=editsc(this.value,' + (i + 1) + ') style="display:none"><option style="width:50px" id="selectop">Select An Option</option><option style="width:50px" id="YES" >YES</option><option style="width:50px"  id="NO">NO</option><option style="width:50px" id="N/A" >N/A</option></select></td>' +
            '<td style="width:100px;height:40px;"><select id="drpsubpara' + (i + 1) + '" onchange=editsc(this.value,' + (i + 1) + ') style="display:none"><option style="width:50px" id="selectop">Select An Option</option><option style="width:50px" id="YES" >YES</option><option style="width:50px"  id="NO">NO</option><option style="width:50px" id="N/A" >N/A</option></select><input type="text" class="form-control input-group-text work" style="width:200px; color:black;text-transform: uppercase;display:none;"  id="inp_text' + (i + 1) + '" onkeypress="return isNumber1(event, this.value,' + (i + 1) +')" /></td>' +

            '<td id="inputrem' + (i + 1) + '"></td>' +
            '</tr ></tbody > ');

        n = n + 1;
        if (input == 1) {
           
            $('#drpsubpara' + (i + 1)).show();
        }
        else if (input == 2) {
            $('#inp_text' + (i + 1)).show();
        }
        else if (input == 3) {
            $('#rem' + (i + 1)).show();
        }


    }
}
function filltablerm_qst(data)
{
   
    var valData, n = 1;
    valData = data.split('$');
   
    $("#tableDataopt2").empty();
    if ($("#tableDataopt2 tr").length == 0) {

        $("#tableDataopt2").empty();

       // $('#tableDataopt2').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center">SLNo.&nbsp;</th><th class="text-center">Questions</th><th class="text-center">ACTION</th><th class="text-center">AH VERIFIED</th></tr>');
        $('#tableDataopt2').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center">SLNo.&nbsp;</th><th class="text-center">Questions</th><th class="text-center">ACTION</th><th class="text-center" id="ah_remark">Remarks:</th><th class="text-center">AH VERIFIED</th></tr>');
        
    }
    var valdata1 = valData[0].split('!');
   
    var chq_ans_bh = valData[1].split('!');
    
    for (i = 0; i < valdata1.length - 1; i++) {
        var chvaldata1 = valdata1[i].split('^');
       
        var anschq_ans_bh = chq_ans_bh[i].split('^');
        var input = chvaldata1[2];


        $('#tableDataopt2').append('<tbody><tr>' +
            '<td style="display:none;">' + input + '</td>' +
            '<td>' + parseInt(n) + '</td>' +
            '<td class="text-left" style="width:500px;height:40px;">' + chvaldata1[1] + '</td>' +
            '<td style="width:100px;height:40px;"><select id="drpsubpara' + (i + 1) + '" onchange=editsc(this.value,' + (i + 1) + ') style="display:none"><option style="width:50px" id="selectop" >Select An Option</option><option style="width:50px" id="YES" >YES</option><option style="width:50px"  id="NO">NO</option><option style="width:50px" id="N/A" >N/A</option></select><input type="text" class="form-control input-group-text work" style="width:200px; color:black;text-transform: uppercase;display:none;"  id="inp_text' + (i + 1) + '" onkeypress="return isNumber1(event, this.value,' + (i + 1) + ')" /></td>' +
            //'<td class="text-left" style="width:500px;height:40px;"><textarea rows="4" cols="50" style="height:50px;width:200px" name="remarks" id="rem' + (i + 1) + '"  onkeypress="return isNumber(event, this.value,' + (i + 1) + ')"></textarea></td>'+
            '<td class="text-left" style="width:500px;height:40px;" id="inputrem' + (i + 1) + '"></td>' +
            //'<td class="text-left" style="width:500px;height:40px;">' + anschq_ans_bh[1] + '</td></tr ></tbody > ');
        '<td class="text-left" style="width:500px;height:40px;">' + anschq_ans_bh[2] + '</td></tr ></tbody > ');

        n = n + 1;
        if (input == 1) {

            $('#drpsubpara' + (i + 1)).show();
        }
        else if (input == 2) {
            $('#inp_text' + (i + 1)).show();
        }
        else if (input == 3) {
            $('#rem' + (i + 1)).show();
        }


    }
}
function filltablefzm_qst(data)
{
    //alert(data);
    var bid = $("[id*=hdBrId]").val();
    var remar = "";
   
    var valData, n = 1;
    valData = data.split('$');
   
    $("#tableDataopt2").empty();
    if ($("#tableDataopt2 tr").length == 0) {

        $("#tableDataopt2").empty();
        if (bid == 0) {
            $('#tableDataopt2').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center">SLNo.&nbsp;</th><th class="text-center">Questions</th><th class="text-center">ACTION</th><th class="text-center">FZM VERIFIED</th></tr>');
        }
        else {
            //$('#tableDataopt2').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center">SLNo.&nbsp;</th><th class="text-center">Questions</th><th class="text-center">ACTION</th><th class="text-center">RM VERIFIED</th></tr>');
            //$('#tableDataopt2').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center">SLNo.&nbsp;</th><th class="text-center">Questions</th><th class="text-center">ACTION</th><th class="text-center">REMARKS</th><th class="text-center">RM VERIFIED</th></tr>');
            $('#tableDataopt2').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center">SLNo.&nbsp;</th><th class="text-center">Questions</th><th class="text-center">ACTION</th><th class="text-center">REMARKS</th><th class="text-center">AH VERIFIED</th><th class="text-center">RM VERIFIED</th></tr>');

        }
      
    }
    var valdata1 = valData[0].split('!');
   
    var chq_ans_bh = valData[1].split('!');

    //-----------------------------------by ah
    var chq_ans_ah = valData[2].split('!');

    //-----------------------------------by ah
   
    for (i = 0; i < valdata1.length - 1; i++) {
        var chvaldata1 = valdata1[i].split('^');
       
        var anschq_ans_bh = chq_ans_bh[i].split('^');

        //--------------------------by ah
        var anschq_ans_ah = chq_ans_ah[i].split('^');
        //--------------------------by ah



        var input = chvaldata1[2];


        $('#tableDataopt2').append('<tbody><tr>' +
            '<td style="display:none;">' + input + '</td>' +
            '<td>' + parseInt(n) + '</td>' +
            '<td class="text-left" style="width:500px;height:40px;">' + chvaldata1[1] + '</td>' +
            '<td style="width:100px;height:40px;"><select id="drpsubpara' + (i + 1) + '" onchange=editsc(this.value,' + (i + 1) + ')  style="display:none"><option style="width:50px" id="selectop" >Select An Option</option><option style="width:50px" id="YES" >YES</option><option style="width:50px"  id="NO">NO</option><option style="width:50px" id="N/A" >N/A</option></select><input type="text" class="form-control input-group-text work" style="width:200px; color:black;text-transform: uppercase;display:none;"  id="inp_text' + (i + 1) + '" onkeypress="return isNumber1(event, this.value,' + (i + 1) + ')" /></td>' +
            '<td class="text-left" style="width:500px;height:40px;" id="inputrem' + (i + 1) + '"></td>' +
           // '<td class="text-left" style="width:500px;height:40px;">' + anschq_ans_bh[1] + '</td></tr ></tbody > ');
            '<td class="text-left" style="width:500px;height:40px;">' + anschq_ans_ah[2] + '</td>'+
        '<td class="text-left" style="width:500px;height:40px;">' + anschq_ans_bh[2] + '</td></tr ></tbody > ');

        n = n + 1;
        if (input == 1) {

            $('#drpsubpara' + (i + 1)).show();
        }
        else if (input == 2) {
            $('#inp_text' + (i + 1)).show();
        }
        else if (input == 3) {
            $('#rem' + (i + 1)).show();
        }


    }
}
function check_frmCofirm()
{
    debugger;
    var ax ="";
    var ItemDtls = "";
    var i;
    var data = "";
    var m_id = $('#marketing_act').val();
   
    
    var remaek = $("#rem").val();
   
    var ins = $("#inp_text").val();
  
    var bid = $("[id*=hdBrId]").val();
    var uid = $("[id*=hdUserId]").val();
     
    var l = $("#tableDataopt2 tr").length;
    var table = document.getElementById('tableDataopt2');
   
    if (m_id == "-1") {
        alert("Select Proposal");
        return;
    }

    for (i = 1; i < l; i++) {
        var a = table.rows[i].cells[0].innerHTML;
       
        if (a=="1") {
           
            data = $('#drpsubpara' + (i)).val();
          
            if (data =="Select An Option")
            {
                alert("Please select an option!");
                return false;
            }
           
        }
        else if (a=="2") {
            data = $('#inp_text' + (i)).val();
            
        }
        else if (a =="3") {
            data = $('#rem' + (i)).val();
           
        }
        if (data == "") {
            alert("fill all data");
            return false;
        }
        //else if (data == "NO") {
        //    data = data + "^" + $("#inputrem" + i + " " + "textarea").val() + "!";
        //}
        else
        {
            
            if (data == "NO") {
                ax = $("#inputrem" + i + " " + "textarea").val();
              

            }
            else {
                ax ="";
            }

            //--------------------------------------set value i only this case

            //if (data != "NO") {
            //    ax = data;
            //}
            //else if (data != "YES") {
            //    ax = data;
            //}
            //else if (data != "N/A") {
            //    ax = data;
            //}
            //var a = "8";

            if (data == "NO" || data == "YES" || data == "N/A") {
                var xyx = "";
            }
            else {
                ax = data;
            }
            //--------------------------------------set value i only this case



            //ItemDtls = ItemDtls + table.rows[i].cells[1].innerHTML + '^' + data + "^" + $("#inputrem" + i + " " + "textarea").val() + "!";
            ItemDtls = ItemDtls + table.rows[i].cells[1].innerHTML + '^' + data + "^" + ax + "!";
        }
        
    }


    var a = 0;

    if ($("#rb_ys").prop('checked') == true) {
        a = 0;
    }
    else {

        a = 1;

    }


    var b = 0;

    if ($("#rb_no").prop('checked') == true) {
        b = 0;
    }
    else {

        b = 1;

    }

    var input = m_id + '^' + bid + '^' + uid + '^' + a + '^' + b;

    

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/confirmchecklist",
        data: "{typ:'" + ItemDtls + "',val:'" + input +"'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
           
            m_flag = 1;
            alert("CheckList Added");
            $('#over').hide();

            $('#modal').hide();
        }

    });

}
function frmCofirm()
{

    var m_id = $('#marketing_act').val();
  
    var m_br_id = $('#marketing_act option:selected').text();
   
    var data = m_br_id.split('~');
   
    var branch_id = data[2];
    
    var uid = $("[id*=hdUserId]").val();
    var remark = $("#rem").val();
    var act_status = $('#ddl_activity_status option:selected').val();
   
    var input = m_id + '^' + uid + '^' + branch_id + '^' + act_status;
   
   
    if (m_id == "-1") {
        alert("Select Proposal");
        return;
    }
    else if (m_flag == 0) {
        alert("Please Add Checklist");
        return;
    }
    else if (remark == "") {
        alert("Enter Remarks");
        return
    }
    else if (act_status == "-1") {
        alert("Select status");
        return
    }
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/confirm_marks",
        data: "{typ:'" + remark +"',val:'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            alert("Confirmed Successfully");
            window.location = "../Marketing_check/m_verification_AH_fzm.aspx";
        }

    });
}
function isNumber(evt, val1,i) {
    
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode=== 32)
    {
        var txt = $('#rem' + i).val();
        var l = txt.length;
        if (l < 1) {
            return false;
        }
        else
        {
            return true;
        }

       
    }
   
}
function isNumber1(evt, val1, i) {

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode === 32) {
        var txt = $('#inp_text' + i).val();
        var l = txt.length;
        if (l < 1) {
            return false;
        }
        else {
            return true;
        }


    }

}
function frm_exit() {
    window.location = "../Index/Index.aspx";

}
function frm_cancel() {
    window.location = "../Marketing_check/m_verification_AH_fzm.aspx";
}

function getActivity() {
    var o_id = $("#ddl_b4_after").val();
    var post_id = $("[id*=hd_post]").val(); 
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/GetActivity",
        data: "{typ:'AH_MARK_VERIFICATION',typ1:'getpropsal',val:'" + post_id + "',option:'" + o_id+"'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $("#marketing_act").empty();
            $("#marketing_act").append($("<option selected></option>").val("-1").html("SELECT"));
            $.each(Result, function (key, value) {
                $("#marketing_act").append($("<option></option>").val(value.Name).html(value.ID));
            });
        }
    });
}


function editsc(c,i) {
   
   
    if (c == "NO") {
        $("#inputrem"+i).empty();
        
        $("#inputrem" + i).append($("<textarea name='comment' form='usrform' placeholder='Remarks' style='width:100%;border:none;border:1px solid #000000'></textarea>"));
    }
    else {
        $("#inputrem" + i).empty();
        $("#inputrem" + i + " " + "textarea").val() = '0';
    }
}

function View_Documents() {
    document.getElementById('qtn').style.display = 'block';
    var act_id = $("#marketing_act").val();
    $('#ddl_DocSel2').empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/getFillDoc",
        data: "{val1 :'" + act_id + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $('#ddl_DocSel2').append($("<option></option>").val("-1").html("Select Document "));
            $.each(Result, function (key, value) {
                $('#ddl_DocSel2').append($("<option></option>").val(value.id).html(value.name));
            });
        },
        error: function (Result) {
            alert(Result);
        }
    });
}



function View_Doc() {
    
    var act_id = $("#marketing_act").val();
    //var index = document.getElementById('#ddl_DocSel2').selectedIndex;
    //var doc_name = document.getElementById('#ddl_DocSel2').value;
    var doc_name = $("#ddl_DocSel2 option:selected").val();
   
   // alert(doc_name);

    
     var act_id = parseInt(act_id);
    
    
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "m_verification_AH_fzm.aspx/VIEWDOCU",
        //data: "{activity_id:'" + act_id + "'}",
        data: "{activity_id:'" + act_id + "',val:'" + doc_name + "'}",
        dataType: "json",
        success: function (Result) {

            var fileName = Result.d;
            if (fileName == "0") { alert("No Attachment found"); }
            else {
                var myUrl = "../image/" + fileName;
                OpenDialog1(myUrl, 875, 650, function (termsOfServiceAccepted) {
                    if (termsOfServiceAccepted) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json;charset=utf-8",
                            url: "m_verification_AH_fzm.aspx/deleteDownloadFile",
                            data: "{ input: '" + fileName + "' }",
                            dataType: "json",
                            success: function (Result) {
                               // ViewOpen(meeting_id);
                            },
                            error: function (Result) {
                            }
                        });

                    }
                });
            }
        },
        error: function (Result) {
        }
    });
}

function OpenDialog1(url, width, height, callback) {
    var win = window.open(url, "Manappuram Document Verification", width, height, "menubar=0,toolbar=0", "_blank");
    var timer = setInterval(function () {
        if (win.closed) {
            clearInterval(timer);
            var returnValue = true;
            callback(returnValue);
        }
    }, 10);
}