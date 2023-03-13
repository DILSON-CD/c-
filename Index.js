//--//---------------- CRF_102144-----------------358536---------------------------------------------------------------------------------------- 

var Caller_ID = "";
var selected_type = "";

function camp_hide() {
   
   
    $("#d1").css({ "display": "none" });
    $("#d2").css({ "display": "none" });
    $("#d3").css({ "display": "none" });
    $("#d4").css({ "display": "none" });
    $("#d8").css({ "display": "none" });
    $("#d5").css({ "display": "none" });
    $("#d6").css({ "display": "none" });
    $("#d7").css({ "display": "none" });
    $("#d9").css({ "display": "none" });
    $("#d101").css({ "display": "none" });
    $("#d103").css({ "display": "none" });
    $("#d102").css({ "display": "none" });
    $("#d303").css({ "display": "none" });
    $("#d403").css({ "display": "none" });
    $("#div_Today_Lead_call").css({ "display": "none" });
    $("#d10").css({ "display": "block" });


}

window.addEventListener('load', function () {

    //buttton--------------------die
    document.getElementById("btn_confirm").disabled = true;
    //end button-------------------hide



    Caller_ID = $("[id*=hdUserId]").val();

    $('#ddl_branch').val("-1");
    $('#ddl_prdct').val("-1");
    $('#ddl_followup').val("-1");
    $('#ddl_prdct').val("-1");
    $('#ddl_response').val("-1");
    //-------------------------------banknbfc
    $('#ddl_banknbfc').val("-1");
    //------------------------end
    //-------------------------------personal loan
    $('#ddl_personalL').val("-1");
    //------------------------end
    $('#ddl_response').val("-1");



    LeadDetails(Caller_ID, 'Get_Lead_Details');
    badge(Caller_ID);




    // ---------- CRF_102144 ------ 358536----------------------------------------------------------------------------------------------

    //$("#txt_flwup_date").datepicker({
    //    dateFormat: 'dd/MM/yyyy',

    //    changeMonth: true,
    //    changeYear: true,
    //    duration: true,
    //    stepMonths: true,
    //    todayHighlight: true,
    //    onSelect: function (dateText, inst) {

    //    }
    //});


    //$("#div_Today_Lead_call").show();

    //document.getElementById("div_1").style.backgroundColor = "lightGreen"; 


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("txt_flwup_date").setAttribute("min", today);
    camp_hide();
    Caller_ID = $("[id*=hdUserId]").val();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Index.aspx/Get_emp_dtl",
        data: "{caller_id: '" + Caller_ID + "'}",
        dataType: "json",
        success: function (Result) {
            Result1 = Result.d;
            //alert(Result1);
            valData = Result1.split('¶');
            for (i = 0; i < valData.length; i++) {

                
                    if (i == 0) {
                        
                        if (valData[i] == 1) {
                            
                            
                            $("#d1").css({ display: "block" });
                        }
                    }
                    if (i == 1) {
                        if (valData[i] == 1) {
                           
                            $("#d2").css({ display: "block" });
                           

                        }
                    }
                    if (i == 2) {
                        if (valData[i] == 1) {
                          
                            $("#d3").css({ display: "block" });
                           

                        }
                    }
                    if (i == 3) {
                        if (valData[i] == 1) {
                           
                            $("#d4").css({ display: "block" });

                        }
                    }
                    if (i == 4) {
                        if (valData[i] == 1) {
                           
                            $("#d8").css({ display: "block" });

                        }
                    }
                    if (i == 5) {
                        if (valData[i] == 1) {
                          
                            $("#d5").css({ display: "block" });

                        }
                    }
                    if (i == 6) {
                        if (valData[i] == 1) {
                            
                            $("#d6").css({ display: "block" });

                        }
                    }
                    if (i == 7) {
                        if (valData[i] == 1) {
                           
                            $("#d7").css({ "display": "block" });

                        }
                    }
                    if (i == 8) {
                        if (valData[i] == 1) {
                          
                            $("#d9").css({ display: "block" });

                        }
                    }
                    if (i == 9) {
                        if (valData[i] == 1) {
                            
                            $("#d101").css({ display: "block" });

                        }
                    }
                    if (i == 10) {
                        if (valData[i] == 1) {
                          
                            $("#d103").css({ display: "block" });

                        }
                    }

                    if (i == 11) {
                        if (valData[i] == 1) {
                            
                            $("#d102").css({ display: "block" });

                        }
                    }
                    if (i == 12) {
                        if (valData[i] == 1) {
                            
                            $("#d303").css({ display: "block" });

                        }
                    }
                    if (i == 13) {
                        if (valData[i] == 1) {
                            
                            $("#d403").css({ display: "block" });

                        }
                }
              
            }

        }


    });
})

function validateEmailAddress() {




    var EmailId = document.getElementById("txt_Email").value;



    var expr = /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    if (expr.test(EmailId)) {
        return true;
    }
    else {
        alerts("Please enter valid mail address !!")
        document.getElementById("txt_Email").value = "";
        return false;
    }




}


function isNumber(evt, val1) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 32) {
        var txt = $("#" + val1).val();
        var l = txt.length;
        if (l <= 1) {
            $("#" + val1).val("");
            return false;
        }
    }
}
function mob_validation(evt, val1) {


    try {
        var txt = $("#" + val1).val();

        var l = txt.length;
        if (l < 10) {
            $("#" + val1).val("");

            alerts("Please enter a valid mobile number");

            return false;
        }

    }
    catch (err) {
        alert(err.Description);
    }

}
function onlyNos(e, t) {




    try {
        if (window.event) {
            //To disable other button clicks
            if (window.event.keyCode == 13) {
                e.preventDefault();

            }
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    catch (err) {
        alert(err.Description);
    }
}


function LeadDetails(Caller_ID, pageVal) {
    //$("#div_Today_Lead_call").css({ "display": "block" });
    //$("#div_Today_Lead_call").css({ display: "block" });
    //$("#div_Today_Lead_call").show();
    $("[id*=hd_type_selected]").val(pageVal);

    //$("#ddl_response").val('-1');   
    //$("#ddl_prdct").val('-1');
    //$("#txt_Email").val("");
    debugger;

    document.getElementById("txt_New_no").value = "";
    document.getElementById("txt_flwup_date").value = "";
    document.getElementById("txt_Remarks").value = "";

    var msg = "";

    if (pageVal == 'Today_Lead_Call') {

        msg = "No Call Pending for Today";

    }
    else if (pageVal == 'Today_Followup_Call') {

        msg = "No Followup Call Pending for Today ";
    }
    else if (pageVal == 'Non_Contactable_Call') {

        msg = "No Lead Pending ";
    }
    else if (pageVal == 'Pending_Lead_Call') {

        msg = "No Pending Leads to Call ";
    }
    else if (pageVal == 'Pending_Followup_Call') {

        msg = "No Pending Followup Leads to Call ";
    }
    else if (pageVal == 'crm_lead_call') {

        msg = "No crm Leads to Call ";
    }
    else if (pageVal == 'callback_lead_call') {

        msg = "No callback Leads to Call ";
    }
    else if (pageVal == 'Redemption_non_callback') {

        msg = "No Redemption Noncontact/callback Leads to Call ";
    }
    else if (pageVal == 'Redemption_non_contact') {

        msg = "No Redemption Noncontact Leads to Call ";
    }
    else if (pageVal == 'miss_call') {

        msg = "No missed call Lead to call ";
    }
    else if (pageVal == 'othercampagin_lead_call') {

        msg = "No other compagin  Leads to Call ";
    }
    else if (pageVal == 'Redemption_lead_call') {

        msg = "No Redemption Leads to Call ";
    }
    else if (pageVal == 'lostcustomer_lead_call') {

        msg = "No Lostcustomer Leads to Call ";
    }
    else if (pageVal == 'Today_Non_Contactable_Call') {

        msg = "No Today non-contacts Leads to Call ";
    }
    else if (pageVal == 'callback_ogl_call') {

        msg = "No call back ogl Leads to Call ";
    }

    else {
        msg = "No Work Pending";

    }


    var Caller_ID = $("[id*=hdUserId]").val();

    if (Caller_ID != "") {
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "Index.aspx/LeadDetails",
            data: "{pageVal:'" + pageVal + "',Caller_ID:'" + Caller_ID + "'}",
            dataType: "json",
            async: false,
            success: function (Result) {
                Result = Result.d;
                if (Result == '666') {
                    let timerInterval
                    Swal.fire({
                        width: 300,
                        height: 200,

                        type: 'warning',
                        title: 'Alert!',
                        html: msg,

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
                            window.open('Index.aspx', '_self');
                        }
                    }).then((result) => {
                        if (
                            // Read more about handling dismissals
                            result.dismiss === Swal.DismissReason.timer
                        ) {
                            window.open('Index.aspx', '_self');
                        }
                    })

                }
                else if (Result == '999') {
                    let timerInterval
                    Swal.fire({
                        width: 300,
                        height: 200,

                        type: 'warning',
                        title: 'Alert!',
                        html: msg,

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
                            window.open('CRC_Graph_Caller.aspx', '_self');
                        }
                    }).then((result) => {
                        if (
                            // Read more about handling dismissals
                            result.dismiss === Swal.DismissReason.timer
                        ) {
                            window.open('CRC_Graph_Caller.aspx', '_self');
                        }
                    })

                }
                else if (Result != "0") {

                    var lead = Result;
                    if (lead.includes("µ")) {
                        var lead_details = lead.split("µ");
                        //'111' || 'µ'||t.cust_name|| 'µ'||t.mobile_number|| 'µ'||s.leadsource_name|| 'µ'||p.products_name|| 'µ'||t.inserted_on|| 'µ'|| 'Existing Customer'   'New Customer' end|| 'µ'||'Fresh Lead'
                        //    0               1               2                           3                       4                       5                   6                                                   7                   
                        var stat = lead_details[0];



                        if (stat == "111") { // Today Lead call
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other
                            //getProductDetails();

                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("TodayLead");
                            //---------------------------------tabnamesetings

                            hideBK();
                            $("#div_Today_Lead_call").show();
                            document.getElementById("div_1").style.backgroundColor = "lightGreen";

                            $("[id*=hd_lead_id]").val(lead_details[1].toString());

                            $("#div_F2").hide();



                        }
                        else if (stat == "222") {//Today followup Call
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other

                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Todayfollowup");
                            //---------------------------------tabnamesetings


                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_2").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());
                            $("#div_followup").hide();

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();


                        }
                        else if (stat == "444") {//Pending  Call
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Pending lead");
                            //---------------------------------tabnamesetings



                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_3").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());




                        }
                        else if (stat == "555") {//Pending  followup Call
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Pending followup");
                            //---------------------------------tabnamesetings



                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_4").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();


                        }
                        else if (stat == "333") {// Non Contactable
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other

                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Non Contact");
                            //---------------------------------tabnamesetings



                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_5").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());
                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();

                        }
                        else if (stat == "777") {//crm lead followup
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Crm Lead");
                            //---------------------------------tabnamesetings




                            hideBK();
                            $("#div_Today_Lead_call").show();
                            document.getElementById("div_6").style.backgroundColor = "lightGreen";

                            $("[id*=hd_lead_id]").val(lead_details[1].toString());

                            $("#div_F2").hide();




                        }
                        else if (stat == "888") {//callback
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();

                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other

                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Callback");
                            //---------------------------------tabnamesetings




                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_7").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();


                        }
                        else if (stat == "999") {//Today-non-contact
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Today non-contact");
                            //---------------------------------tabnamesetings




                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_8").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();


                        }
                        else if (stat == "1111") {//lost customer
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Lost customer");
                            //---------------------------------tabnamesetings



                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_9").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();


                        }
                        else if (stat == "2222") {//redemption
                            $("#div_Today_Lead_call").show();

                            $("#div_response").hide();
                            $("#div_redmp_response").show();

                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("1");//------------------redemption
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Redemption");
                            //---------------------------------tabnamesetings

                            $("#redemp_1").show();
                            $("#redemp_2").show();
                            $("#redemp_3").show();

                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_101").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();
                           
                            document.getElementById("txt_relamnt").value = lead_details[17].toString();
                            document.getElementById("txt_relesdt").value = lead_details[18].toString();
                            document.getElementById("txt_Cusid").value = lead_details[20].toString(); 
                            document.getElementById("txt_pldno").value = lead_details[19].toString(); 
                            document.getElementById("txt_invcnt").value = lead_details[21].toString(); 

                        }
                        else if (stat == "3333") {//other campaign
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();

                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("Othercampaign");
                            //---------------------------------tabnamesetings


                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_102").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();


                        }
                        else if (stat == "303") {//miss call
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            //$("#div_response").show();
                            //$("#div_redmp_response").hide();
                            //$("#div_fu_details2").hide();
                            //$("#div_fu_details").hide();
                            //$("[id*=hd_tab_flag]").val("0");//------------------other
                            ////---------------------------------tbnamesetting
                            //$("[id*=hdtabNmae]").val("Othercampaign");
                            ////---------------------------------tabnamesetings


                            hideBK();
                            $("#miss_call").show();
                            document.getElementById("div_303").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            //  $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            // document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            // document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();


                        }
                        else if (stat == "4444") {//redemption non/callback
                            $("#div_Today_Lead_call").show();
                            $("#div_response").hide();
                            $("#div_redmp_response").show();

                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("1");//------------------redemption
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("redemption callback");
                            //---------------------------------tabnamesetings
                            $("#redemp_1").show();
                            $("#redemp_2").show();
                            $("#redemp_3").show();


                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_103").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();
                            document.getElementById("txt_relamnt").value = lead_details[17].toString();
                            document.getElementById("txt_relesdt").value = lead_details[18].toString();
                            document.getElementById("txt_Cusid").value = lead_details[20].toString();
                            document.getElementById("txt_pldno").value = lead_details[19].toString(); 
                            document.getElementById("txt_invcnt").value = lead_details[21].toString(); 

                        }
                        else if (stat == "403") {//redemption noncontact
                            $("#div_Today_Lead_call").show();
                            $("#div_response").hide();
                            $("#div_redmp_response").show();

                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("1");//------------------redemption
                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("redemption callback");
                            //---------------------------------tabnamesetings
                            $("#redemp_1").show();
                            $("#redemp_2").show();
                            $("#redemp_3").show();


                            hideBK();
                            $("#div_Today_Lead_Followup_call").show();
                            document.getElementById("div_403").style.backgroundColor = "lightGreen";
                            $("[id*=hd_lead_id]").val(lead_details[1].toString());
                            $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());

                            document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                            document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();
                            document.getElementById("txt_relamnt").value = lead_details[17].toString();
                            document.getElementById("txt_relesdt").value = lead_details[18].toString();
                            document.getElementById("txt_Cusid").value = lead_details[20].toString();
                            document.getElementById("txt_pldno").value = lead_details[19].toString(); 
                            document.getElementById("txt_invcnt").value = lead_details[21].toString(); 


                        }
                        if (stat == "10") { // ogl call back
                            $("#redemp_1").hide();
                            $("#redemp_2").hide();
                            $("#redemp_3").hide();
                            $("#div_Today_Lead_call").show();
                            $("#div_response").show();
                            $("#div_redmp_response").hide();
                            $("#div_fu_details2").hide();
                            $("#div_fu_details").hide();
                            $("[id*=hd_tab_flag]").val("0");//------------------other
                            //getProductDetails();

                            //---------------------------------tbnamesetting
                            $("[id*=hdtabNmae]").val("TodayLead");
                            //---------------------------------tabnamesetings

                            hideBK();
                            $("#callback_ogl_call").show();
                            document.getElementById("div_10").style.backgroundColor = "lightGreen";

                            $("[id*=hd_lead_id]").val(lead_details[1].toString());

                            $("#div_F2").hide();



                        }



                        document.getElementById("txt_leadName").value = lead_details[3].toString();
                        document.getElementById("txt_phn").value = lead_details[4].toString();
                        document.getElementById("txt_leadsource").value = lead_details[5].toString();
                        document.getElementById("txt_productIntrstd").value = lead_details[6].toString();
                        document.getElementById("txt_leadDate").value = lead_details[7].toString();
                        document.getElementById("txt_CusType").value = lead_details[8].toString();
                        document.getElementById("txt_TodayleadType").value = lead_details[9].toString();
                        document.getElementById("txt_Email").value = lead_details[12].toString();
                        document.getElementById("txt_Brid").value = lead_details[13].toString();
                        document.getElementById("txt_brnch").value = lead_details[14].toString();
                        document.getElementById("txt_State").value = lead_details[16].toString();
                        document.getElementById("txt_lang").value = lead_details[15].toString();

                        //DropdownFill('get_branch_id', 1);
                        //DropdownFill('load_products', 2);
                        //DropdownFill('followup_status', 3);
                        //DropdownFill('call_response', 4);

                    }


                }
                else {

                    let timerInterval
                    Swal.fire({
                        width: 300,
                        height: 200,

                        type: 'warning',
                        title: 'Alert!',
                        html: 'Something went wrong !...',

                        //---------------------------------------------------------------------366371



                        //----------------------------------------------------------------------366371

                        allowOutsideClick: true,
                        timer: 5000,
                        //onBeforeOpen: () => {
                        //    //Swal.showLoading()
                        //    timerInterval = setInterval(() => {
                        //        Swal.getContent().querySelector('strong')
                        //            .textContent = Swal.getTimerLeft()
                        //    }, 100)
                        //},
                        //onClose: () => {
                        //    clearInterval(timerInterval)
                        //    window.open('Index.aspx', '_self');
                        //}
                    }).then((result) => {
                        if (result.value == true) {

                            LeadDetails(0, 'callback_lead_call');

                        }
                        //if (
                        //    // Read more about handling dismissals
                        //    result.dismiss === Swal.DismissReason.timer
                        //) {
                        //    window.open('Index.aspx', '_self');//redirect to dashboard page
                        //}
                    })


                }


            }


        });
        PreRemarks();
    }
}

function PreRemarks() {
    setTimeout(function () {
        var Lead_ID = $("[id*=hd_lead_id]").val();
        //alert(Lead_ID);
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "Index.aspx/LeadDetails",
            data: "{pageVal:'REMARKHIS',Caller_ID:'" + Lead_ID + "'}",
            dataType: "json",
            async: false,
            success: function (Result) {
                Result = Result.d;
                //  alert(Result);
                if (Result == 0) {
                   
                 document.getElementById("txt_ReqAmt").value = '';
                    $("#tableremarks").empty();
                }
                else {
                    var Result1 = Result.split('§')[0];
                    var Result2 = Result.split('§')[1];
                    var Result3 = Result2.split('µ')[0];
                    document.getElementById("txt_ReqAmt").value = Result1;
                    $("#tableremarks").empty();
                    $("#lbl_NoData").hide();
                    if (Result2 == '' || Result3 == '') {
                        $("#lbl_NoData").show();
                        return false;
                    }
                    var n = 1;
                    var valData, valData1;
                    valData = Result2.split('¶');
                    if ($("#tableremarks tr").length == 0) {
                        $("#tableremarks").empty();
                        $('#tableremarks').append('<tr style="background-color:lightgrey;"><th class="text-center">SL NO</th><th class="text-center">DATE</th><th class="text-center">REMARKS</th><th class="text-center">CALLED BY</th></tr>');
                    }
                    for (i = 0; i < valData.length; i++) {
                        valData1 = valData[i].split('µ');
                        $('#tableremarks').append('<tbody><tr style="color:black">' +

                            '<td>' + parseInt(n) + '</td>' +
                            '<td>' + valData1[1] + '</td>' +
                            '<td>' + valData1[0] + '</td>' +
                            '<td>' + valData1[2] + '</td>' +
                            '</tr ></tbody> ');
                        n = n + 1;
                    }
                }
            }
        });
    }, 1000);
}

function badge(Caller_ID) {

    debugger;
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Index.aspx/badge",
        data: "{Caller_ID:'" + Caller_ID + "'}",
        dataType: "json",
        async: false,
        success: function (Result) {
            Result = Result.d;
            debugger;
            var details = Result.split("µ");


            if (Result != "~123") {



                document.getElementById("div_1_notif").textContent = details[0].toString();
                document.getElementById("div_2_notif").textContent = details[1].toString();
                document.getElementById("div_5_notif").textContent = details[2].toString();
                document.getElementById("div_3_notif").textContent = details[3].toString();
                document.getElementById("div_4_notif").textContent = details[4].toString();
                document.getElementById("div_6_notif").textContent = details[5].toString();
                document.getElementById("div_7_notif").textContent = details[6].toString();
                document.getElementById("div_8_notif").textContent = details[7].toString();
                document.getElementById("div_9_notif").textContent = details[8].toString();
               
                document.getElementById("div_101_notif").textContent = details[9].toString();
                document.getElementById("div_102_notif").textContent = details[10].toString();
                document.getElementById("div_103_notif").textContent = details[11].toString();

                document.getElementById("div_303_notif").textContent = details[12].toString();
                document.getElementById("div_403_notif").textContent = details[13].toString();
                document.getElementById("div_10_notif").textContent = details[14].toString();



            }

        }
    });

}

function search_no() {

    if (($("#txt_search").val() == "")) {

        data = "Please Enter Mobile number!"
        alerts(data);

        return false;


    }

    else {
        var Caller_ID = $("[id*=hdUserId]").val();
        var number = $("#txt_search").val();

        var mob = "";
        if ((number != undefined) && (number != null) && (number != "") && (validatePhoneNumber(number))) {
            mob = number.replace(/\D/g, '').slice(-10);



            $.ajax({
                type: "post",
                contentType: "application/json; charset=utf-8",
                url: "Index.aspx/search_no",
                data: "{Caller_ID:'" + Caller_ID + "',mob:'" + mob + "'}",
                dataType: "json",
                async: false,
                success: function (Result) {
                    Result = Result.d;
                    var details = Result.split("µ");


                    if (Result != "~123" && Result != "666") {






                        var lead = Result;
                        if (lead.includes("µ")) {
                            var lead_details = lead.split("µ");
                            //'111' || 'µ'||t.cust_name|| 'µ'||t.mobile_number|| 'µ'||s.leadsource_name|| 'µ'||p.products_name|| 'µ'||t.inserted_on|| 'µ'|| 'Existing Customer'   'New Customer' end|| 'µ'||'Fresh Lead'
                            //    0               1               2                           3                       4                       5                   6                                                   7                   
                            var stat = lead_details[0];




                            if (stat == "333") {// Non Contactable
                                //alert(lead_details[11].toString());
                                //hideBK();
                                //$("#div_Today_Lead_Followup_call").show();
                                //document.getElementById("div_2").style.backgroundColor = "lightGreen";

                                if (lead_details[11].toString() == "TodayLead") {
                                    visible1();
                                }
                                else if (lead_details[11].toString() == "Todayfollowup") {
                                    visible2();
                                }
                                else if (lead_details[11].toString() == "Pending followup") {
                                    visible3();
                                }
                                else if (lead_details[11].toString() == "Callback") {
                                    visible7();
                                }
                                else if (lead_details[11].toString() == "Non Contact") {
                                    visible5();
                                }
                                else if (lead_details[11].toString() == "Today non-contact") {
                                    visible8();
                                }
                                else if (lead_details[11].toString() == "" || lead_details[11].toString() == null) {
                                    visible2();
                                }

                                else {
                                    visible2();
                                }

                                $("[id*=hd_lead_id]").val(lead_details[1].toString());
                                $("[id*=hd_lead_Followup_id]").val(lead_details[2].toString());
                                document.getElementById("txt_LastFollowUp_Date").value = lead_details[10].toString();
                                document.getElementById("txt_LastFollowUp_Status").value = lead_details[11].toString();


                                //---------------------------------tbnamesetting
                                $("[id*=hdtabNmae]").val("Search Lead");
                                //---------------------------------tabnamesetings


                            }




                            document.getElementById("txt_leadName").value = lead_details[3].toString();
                            document.getElementById("txt_phn").value = lead_details[4].toString();
                            document.getElementById("txt_leadsource").value = lead_details[5].toString();
                            document.getElementById("txt_productIntrstd").value = lead_details[6].toString();
                            document.getElementById("txt_leadDate").value = lead_details[7].toString();
                            document.getElementById("txt_CusType").value = lead_details[8].toString();
                            document.getElementById("txt_TodayleadType").value = lead_details[9].toString();
                            document.getElementById("txt_Email").value = lead_details[12].toString();
                            document.getElementById("txt_Brid").value = lead_details[13].toString();
                            document.getElementById("txt_brnch").value = lead_details[14].toString();
                            document.getElementById("txt_State").value = lead_details[16].toString();
                            document.getElementById("txt_lang").value = lead_details[15].toString();

                            //DropdownFill('get_branch_id', 1);
                            //DropdownFill('load_products', 2);
                            //DropdownFill('followup_status', 3);
                            //DropdownFill('call_response', 4);

                        }


                    }
                    else if (Result == "666") {
                        $("#txt_search").val("");
                        alerts("No Lead Found");
                    }
                    else {

                        let timerInterval
                        Swal.fire({
                            width: 300,
                            height: 200,

                            type: 'warning',
                            title: 'Alert!',
                            html: 'Something went wrong !...',

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
                                window.open('Index.aspx', '_self');
                            }
                        }).then((result) => {
                            if (
                                // Read more about handling dismissals
                                result.dismiss === Swal.DismissReason.timer
                            ) {
                                window.open('Index.aspx', '_self');//redirect to dashboard page
                            }
                        })


                    }

                }
            });

            PreRemarks();
        }

        else {
            alerts("Invalid Number");
        }



    }



}

//Number Validation
function validatePhoneNumber(number) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(number);
}
//

function DropdownFill(type, type_id) {



    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Index.aspx/DropdownFill",
        data: "{pageVal:'" + type + "',type_id:'" + type_id + "'}",
        dataType: "json",
        async: false,
        success: function (Result) {
            Result = Result.d;


            if (type_id == "1") {
                $("#ddl_branch").empty();

                $('#ddl_branch').append($("<option></option>").val('-1').html('Select'));
                $.each(Result, function (key, value) {
                    $('#ddl_branch').append($("<option></option>").val(value.id).html(value.name));
                });

                branch_details('ddl_branch');
            }
            else if (type_id == "2") {
                $("#ddl_prdct").empty();

                $('#ddl_prdct').append($("<option></option>").val('-1').html('Select'));

                $.each(Result, function (key, value) {
                    $('#ddl_prdct').append($("<option></option>").val(value.id).html(value.name));
                });


            }
            else if (type_id == "3") {
                $("#ddl_followup").empty();
                $('#ddl_followup').append($("<option></option>").val('-1').html('Select'));
                $.each(Result, function (key, value) {
                    $('#ddl_followup').append($("<option></option>").val(value.id).html(value.name));
                });


            }
            else if (type_id == "4") {

                $("#ddl_response").empty();
                $('#ddl_response').append($("<option></option>").val('-1').html('Select'));

                $.each(Result, function (key, value) {
                    $('#ddl_response').append($("<option></option>").val(value.id).html(value.name));
                });
                response();
            }


            //--------------------------bank---nbfc
            else if (type_id == "5") {

                $("#ddl_banknbfc").empty();
                $('#ddl_banknbfc').append($("<option></option>").val('-1').html('Select'));

                $.each(Result, function (key, value) {
                    $('#ddl_banknbfc').append($("<option></option>").val(value.id).html(value.name));
                });
                //$("#ddl_banknbfc").empty();
            }
            //----------------------------------end

            //-------------------------personal
            else if (type_id == "11") {

                $("#ddl_personalL").empty();
                $('#ddl_personalL').append($("<option></option>").val('-1').html('Select'));

                $.each(Result, function (key, value) {
                    $('#ddl_personalL').append($("<option></option>").val(value.id).html(value.name));
                });
                //$("#ddl_banknbfc").empty();
            }
            //---------------------------------personal-end
            // ------------------------------------redemption 

            else if (type_id == "7") {

                $("#ddl_redmp_response").empty();
                $('#ddl_redmp_response').append($("<option></option>").val('-1').html('Select'));

                $.each(Result, function (key, value) {
                    $('#ddl_redmp_response').append($("<option></option>").val(value.id).html(value.name));
                });
                //$("#ddl_banknbfc").empty();
            }
            else if (type_id == "8") {

                $("#redemp_ddl_followup").empty();
                $('#redemp_ddl_followup').append($("<option></option>").val('-1').html('Select'));

                $.each(Result, function (key, value) {
                    $('#redemp_ddl_followup').append($("<option></option>").val(value.id).html(value.name));
                });
                //$("#ddl_banknbfc").empty();
            }
            else if (type_id == "9") {

                $("#redemp_release_res").empty();
                $('#redemp_release_res').append($("<option></option>").val('-1').html('Select'));

                $.each(Result, function (key, value) {
                    $('#redemp_release_res').append($("<option></option>").val(value.id).html(value.name));
                });
                //$("#ddl_banknbfc").empty();
            }

            //--------------------------------------------------------------end redemption


            else if (type_id == "0") {

                $("#ddl_response").empty();

                $('#ddl_response').append($("<option></option>").val('-1').html('Select'));
                $.each(Result, function (key, value) {
                    $('#ddl_response').append($("<option></option>").val(value.id).html(value.name));
                });
                response();
            }



        }


    });


}

function followup() {


    debugger


    var fllwup = $("#ddl_followup").find('option:selected').val();
    if (fllwup == "3") {

        $("#div_11").hide();
        $("#div_12").hide();
        $("#div_13").show();
        $("#div_14").hide();

        //------------------hide the persoanl dropdown
        $("#div_personalL").hide();
        //------------------hide the persoanl dropdown

        /*crf mi*/

        $("#div_16").hide();

        // $("#div_16").style.display = "block";
        //alert("div 16");
        //var x = document.getElementById("div_16");

        //x.style.display = "block";



        $('#div_bankndfc').hide();
        $('#ddl_prdct').prop("disabled", true);

    }

    else {


        if (fllwup != "1") {   /*not interested*/

            //document.getElementById("ddl_prdct").readOnly = "true";
            //document.getElementById("ddl_branch").readOnly = "true";
            //document.getElementById("txt_flwup_date").readOnly = "true";


            $("#div_11").hide();
            $("#div_12").hide();
            $("#div_13").hide();
            $("#div_14").hide();


            /*crf mi*/
            $("#div_16").hide();



            $('#div_bankndfc').hide();
            $('#ddl_prdct').prop("disabled", true);

            //------------------hide the persoanl dropdown
            $("#div_personalL").hide();
            //------------------hide the persoanl dropdown


        }
        else { // interested
            $("#div_11").show();
            $("#div_12").show();
            $("#div_13").show();
            $("#div_14").show();

            //       /*crf mi*/
            $("#div_16").show();


            //document.getElementById("txt_flwup_date").readOnly = "false";
            //document.getElementById("ddl_prdct").setAttribute('enabled', true);

            $('#ddl_prdct').prop("disabled", false);
            //$('#txt_flwup_date').prop("disabled", false);  

            //------------------hide the persoanl dropdown
            $("#div_personalL").show();
            //------------------hide the persoanl dropdown


        }


    }

    DropdownFill('load_products', 2);

    //---------------------------banknbfc
    DropdownFill('load_takeover_banknbfc', 5);
    //---------------------------end banknbfc
    //---------------------------banknbfc
    DropdownFill('personal_emp_pro', 11);
    //---------------------------end banknbfc


    DropdownFill('get_branch_id', 1);


}
function loadbanknbfc() {

    var productflag = "getproductid";

    var prdct = $("#ddl_prdct").find('option:selected').val();

    if (prdct == 26) {
        // $("#div_personalL").css("display", "none");
        $("#div_bankndfc").css("display", "block");

    }
    //else if (prdct == 3) {
    //    $("#div_bankndfc").css("display", "none");
    //    $("#div_personalL").css("display", "block");


    //}
    else {
        $("#div_bankndfc").css("display", "none");
        // $("#div_personalL").css("display", "none");

    }


    //------------------------------------------------------------------checking 
    //debugger


    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        // url: "Index.aspx/DropdownFill",
        url: "Index.aspx/productid",

        //data: "{:'" + type + "',type_id:'" + type_id + "'}",
        data: "{pageVal:'" + productflag + "',productid:'" + prdct + "'}",
        dataType: "json",
        async: false,
        success: function (Result) {
            Result = Result.d;


            if (Result == "1") {
                //alert("1");
                $("#div_13").show();
                //$("#hd_product_status").val("1");
                //$("#" + '<%= hd_product_status.ClientID %>').val("1");
                $("[id*=hd_product_status]").val("1");




            }
            else if (Result == "2") {
                //$("#hd_product_status").val("2");
                // $("#" + '<%= hd_product_status.ClientID %>').val("2");
                $("[id*=hd_product_status]").val("2");
                //alert("2");

                $("#div_13").hide();

            }
            else {

            }



        }



    });





    //----------------------------------------------------------------------end checking






}

function Exit() {
    window.open("index.aspx", "_self");
}


function branch_details(branch) {

    var branch_id = $("#" + branch).find('option:selected').val();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Index.aspx/branch_details",
        data: "{pageVal:'" + branch_id + "'}",
        dataType: "json",
        async: false,
        success: function (Result) {
            Result = Result.d;
            var branch_dtl = Result;
            if (Result == "0") {

                document.getElementById("txt_Branch_id").value = "";
                document.getElementById("txt_Br_add").value = "";
                document.getElementById("txt_Area").value = "";
                document.getElementById("txt_Region").value = "";


            }
            if (branch_dtl.includes("µ")) {
                var details = branch_dtl.split("µ");

                document.getElementById("txt_Branch_id").value = details[0].toString();
                document.getElementById("txt_Br_add").value = details[3].toString();
                document.getElementById("txt_Area").value = details[1].toString();
                document.getElementById("txt_Region").value = details[2].toString();

            }

        }
    });
}

function response() {


    //------------------other----nbfc
    //$("#ddl_banknbfc").empty();

    //end



    $("#ddl_prdct").empty();
    $("#ddl_branch").empty();

    $("#txt_Branch_id").val("");
    $("#txt_Br_add").val("");
    $("#txt_Area").val("");
    $("#txt_Region").val("");
    $("#txt_New_no").val("");
    $("#txt_flwup_date").val("");


    $("#div_11").hide();
    $("#div_12").hide();
    $("#div_13").hide();
    $("#div_14").hide();

    $('#ddl_prdct').prop("disabled", true);

    var respo = $("#ddl_response").find('option:selected').val()
    if (respo == 1 || respo == 7) { // Call Attended,Incoming call

        $("#div_fu_details").show();
        //document.getElementById("ddl_prdct").setAttribute('disabled', true);
        DropdownFill('followup_status', 3);



    }
    else {
        $("#div_fu_details").hide();
        //document.getElementById("ddl_prdct").setAttribute('disabled', false);
    }




}


//-----------------------------------------------------------------------------redemption res


function redemp_followup() {


    var fllwup = $("#redemp_ddl_followup").find('option:selected').val();
    if (fllwup == "1") {
        $("#red_div_12").show();
        DropdownFill('Redem_release_reason', 9);
    }
    else {
        $("#red_div_12").hide();
    }
}

function redmp_response() {


    //------------------other----nbfc
    //$("#ddl_banknbfc").empty();

    //end
    debugger;


    $("#ddl_prdct").empty();
    $("#ddl_branch").empty();

    $("#txt_Branch_id").val("");
    $("#txt_Br_add").val("");
    $("#txt_Area").val("");
    $("#txt_Region").val("");
    $("#txt_New_no").val("");
    $("#txt_flwup_date").val("");


    $("#div_11").hide();
    $("#div_12").hide();
    $("#div_13").hide();
    $("#div_14").hide();

    $('#ddl_prdct').prop("disabled", true);

    var respo = $("#ddl_redmp_response").find('option:selected').val()
    if (respo == 1 || respo == 7) { // Call Attended,Incoming call

        $("#div_fu_details2").show();
        //document.getElementById("ddl_prdct").setAttribute('disabled', true);
        DropdownFill('Redemption_f_status', 8);



    }
    else {
        $("#div_fu_details2").hide();
        //document.getElementById("ddl_prdct").setAttribute('disabled', false);
    }




}



//--------------------------------------------------------------------------------redemption res
function Confirm() {

    debugger;
    var type_selected = $("[id*=hd_type_selected]").val();
    var Caller_ID = $("[id*=hdUserId]").val();
    var indata = "";
    var lead_id = $("[id*=hd_lead_id]").val();
    var lead_followup_id = $("[id*=hd_lead_Followup_id]").val();
    var uniq_id = $("[id*=hd_uniq_id]").val(uniqueid);
    var prod_id = $("#ddl_prdct").find('option:selected').val();
    var productname = $("#ddl_prdct").find('option:selected').text();
    var lead1 = $("[id*=hd_lead_id]").val();
    var phonenumber = $("#txt_phn").val();

    //----------------------------------------------------------------------------------
    var res = Confirm_check();
    if (res == 0) {
        alerts("Please End Call and then proceed!");
        return false;
    }
    var uniq = $("[id*=hd_uniq_id]").val();
    var data = "";
    var call_click = $("[id*=hd_call_click]").val();
    var response = $("#ddl_response").find('option:selected').val();
    var redmp_response = $("#ddl_redmp_response").find('option:selected').val();
    var tabflag = $("[id*=hd_tab_flag]").val();
    var resp_id, prd_status;
    debugger;
    if (tabflag == 0) {
        //---------------------------------------------------------------------------------------------------------------------other-----------------tab

        if (response == "7") {


        } else {


            if (call_click != "1") {
                data = "Please Call and then proceed!"
                alerts(data);

                return false;
            }
        }
        if (response == "-1") {

            data = "Please Select Call Response!"
            alerts(data);
            $("#ddl_response").focus();
            return false;

        }

        else if (response == "1" || response == "7") {  /*attented,incoming*/



            var fllwup = $("#ddl_followup").find('option:selected').val();
            if (fllwup == "-1") {

                data = "Please Select FollowUp Status!"
                alerts(data);
                $("#ddl_followup").focus();
                return false;

            }
            else if (fllwup == "1") { /*interested*/




                var prdct = $("#ddl_prdct").find('option:selected').val();
                if (prdct == "-1") {

                    data = "Please select interested product!"
                    alerts(data);
                    $("#ddl_prdct").focus();
                    return false;

                }



                var brnch = $("#ddl_branch").find('option:selected').val();
                if (brnch == "-1") {

                    data = "Please select Branch!"
                    alerts(data);

                    return false;

                }

                var emp_profile = $("#ddl_personalL").find('option:selected').val();
                if (emp_profile == "-1") {

                    data = "PLEASE SELECT EMPLOYEEMENT PROFILE!"
                    alerts(data);

                    return false;

                }



                //----------------------------------lineker 370156
                var pl_weight, pl_amount;
                pl_weight = $("#add_weight").val();
                pl_amount = $("#add_amount").val();
                pl_amount = pl_amount.trim();
                if (pl_amount == "") {

                    data = "Please enter pledge Amount!"
                    alerts(data);

                    return false;

                }



                //----------------------------------lineker 370156





                //-------------------------------------------------------validation change 366371

                var prd_status = $("[id*=hd_product_status]").val();
                var time = "";
                var ftime = "";

                if (prd_status == "1") {

                    if (($("#txt_flwup_date").val() == "")) {

                        data = "Please select Next Follow Up Date!"
                        alerts(data);

                        return false;



                    }
                    var time = $("#ddl_time").find('option:selected').val();
                    //var ftime = "";
                    if (time == "-1") {

                        data = "Please select Followup Time!"
                        alerts(data);

                        return false;



                    }
                    else {


                        ftime = $("#ddl_time").find('option:selected').val();
                    }


                }





                //--------------------------------------------------------end validation change


            }

            if (($("#txt_Remarks").val() == "")) {

                data = "Please Enter Remarks!"
                alerts(data);

                return false;



            }


        }

        //----------------------------------------------------------------------------------------------------------------end-----other-----------------tab
        resp_id = $("#ddl_response").find('option:selected').val()

        prd_status = $("[id*=hd_product_status]").val();
        var perosnal_L = $("#ddl_personalL").find('option:selected').val();

        //ddl_banknbfc
        var bankndfc = 0;
        //var perosnal_L = 0;
        //--------------------------------------------------takeover nbfc
        var prdct = $("#ddl_prdct").find('option:selected').val();
        if (prdct == 26) {
            bankndfc = $("#ddl_banknbfc").find('option:selected').val();
            //perosnal_L = 0;
        }
        //--------------------------------------------------takeover nbfc

        else {
            //perosnal_L = 0;
            bankndfc = 0;
        }
        var fllwupstatus1 = $("#ddl_followup").find('option:selected').val();
        if (fllwupstatus1 = 3) {
            ftime = $("#ddl_time").find('option:selected').val();
        }
        //indata = type_selected + '^' + resp_id + '^' + Caller_ID + '^' + lead_id + '^' + lead_followup_id + '^' + $("#txt_phn").val() + '^' + $("#ddl_prdct").find('option:selected').val() + '^' + $("#ddl_followup").find('option:selected').val() + '^' + $("#txt_Email").val() + '^' + $("#txt_Branch_id").val() + '^' + $("#txt_flwup_date").val() + '^' + $("#txt_New_no").val() + '^' + $("#txt_Remarks").val() + '^' + prd_status + '^' + bankndfc;
        indata = type_selected + '^' + resp_id + '^' + Caller_ID + '^' + lead_id + '^' + lead_followup_id + '^' + $("#txt_phn").val() + '^' + $("#ddl_prdct").find('option:selected').val() + '^' + $("#ddl_followup").find('option:selected').val() + '^' + $("#txt_Email").val() + '^' + $("#txt_Branch_id").val() + '^' + $("#txt_flwup_date").val() + '^' + $("#txt_New_no").val() + '^' + $("#txt_Remarks").val() + '^' + prd_status + '^' + bankndfc + '^' + 'other' + '^' + '' + '^' + '' + '^' + '' + '^' + pl_weight + '^' + pl_amount + '^' + perosnal_L;





    }
    //-----------------------------------redemption
    else if (tabflag == 1) {
        //alert("redemp");
        debugger;
        var red_f_st = null;
        red_f_st = $("#redemp_ddl_followup").find('option:selected').val();
        var rel_reson = null, rel_rating = null;
        var customer_comeback = null;
        ftime = null;
        //-----------------------------------------------------------------------------------------------------------------start----redemption-----------------tab
        if (redmp_response == "7") {


        } else {


            if (call_click != "1") {
                data = "Please Call and then proceed!"
                alerts(data);

                return false;
            }
        }
        if (redmp_response == "-1") {

            data = "Please Select Call Response!"
            alerts(data);
            $("#ddl_redmp_response").focus();
            return false;

        }
        if (redmp_response == "1" || redmp_response == "7") {

            //var red_f_st = $("#redemp_ddl_followup").find('option:selected').val();
            if (red_f_st == "-1") {
                data = "Please Select followup status!"
                alerts(data);
                return false;
            }
            else if (red_f_st == "1") {

                if (($("#red_txt_Remarks").val() == "")) {

                    data = "Please Enter Remarks!"
                    alerts(data);

                    return false;
                }
                rel_reson = $("#redemp_release_res").find('option:selected').val();
                if (rel_reson == "-1") {
                    data = "Please Select release status!"
                    alerts(data);
                    return false;
                }

                rel_rating = $("#redemp_rating").find('option:selected').val();

                if (rel_rating == "-1") {
                    data = "Please Select rating!"
                    alerts(data);
                    return false;
                }
                //var customer_comeback;
                var re_form = document.getElementById("cu_st");
                customer_comeback = re_form.elements["cust_st"].value;
                var len_cust_st = customer_comeback.length;
                if (len_cust_st == 0) {
                    alerts("please select the customer comback");
                } else {

                    var redemp_resp_id = $("#ddl_redmp_response").find('option:selected').val()
                    indata = type_selected + '^' + redemp_resp_id + '^' + Caller_ID + '^' + lead_id + '^' + lead_followup_id + '^' + $("#txt_phn").val() + '^' + '' + '^' + red_f_st + '^' + '' + '^' + '' + '^' + '' + '^' + '' + '^' + $("#red_txt_Remarks").val() + '^' + '' + '^' + '' + '^' + 'redemp' + '^' + rel_reson + '^' + rel_rating + '^' + customer_comeback;

                }


            }
            else {

                if (($("#red_txt_Remarks").val() == "")) {

                    data = "Please Enter Remarks!"
                    alerts(data);

                    return false;
                }
                else {



                    var redemp_resp_id = $("#ddl_redmp_response").find('option:selected').val()
                    indata = type_selected + '^' + redemp_resp_id + '^' + Caller_ID + '^' + lead_id + '^' + lead_followup_id + '^' + $("#txt_phn").val() + '^' + '' + '^' + red_f_st + '^' + '' + '^' + '' + '^' + '' + '^' + '' + '^' + $("#red_txt_Remarks").val() + '^' + '' + '^' + '' + '^' + 'redemp' + '^' + '' + '^' + '' + '^' + '' + '^' + perosnal_L;
                }

            }




        }
        else {

            var redemp_resp_id = $("#ddl_redmp_response").find('option:selected').val()
            indata = type_selected + '^' + redemp_resp_id + '^' + Caller_ID + '^' + lead_id + '^' + lead_followup_id + '^' + $("#txt_phn").val() + '^' + '' + '^' + red_f_st + '^' + '' + '^' + '' + '^' + '' + '^' + '' + '^' + $("#red_txt_Remarks").val() + '^' + '' + '^' + '' + '^' + 'redemp' + '^' + rel_reson + '^' + rel_rating + '^' + customer_comeback;

        }












        //-----------------------------------------------------------------------------------------------------------------end----redemption-----------------tab


    }

    if (resp_id == "3") {

        sendnoncontactsms(phonenumber, lead_id);
    }


    //---------------------------------call_dispositon ----366371
    var call_cdispos1 = $("[id*=hd_cdispos]").val();
    var call_cdispos11 = parseInt(call_cdispos1);
    //indata += '^' + call_cdispos11;
    var tabname1 = $("[id*=hdtabNmae]").val();
    //------------------------------------call_dispositon ----366371

    debugger
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Index.aspx/Confirm",
        // data: "{indata :'" + indata + "',uniqueid :'" + uniqueid + "',ftime :'" + ftime + "'  }",
        data: "{indata :'" + indata + "',uniqueid :'" + uniqueid + "',ftime :'" + ftime + "',call_dis :'" + call_cdispos11 + "',logtab :'" + tabname1 + "'}",

        dataType: "json",
        async: false,
        success: function (Result) {
            Result = Result.d;
            if (Result == '111') {
                //------------------------------------366371

                sendmail(prd_status, prod_id, productname, lead1);

                //--------------------------------------end 366371
                let timerInterval
                Swal.fire({
                    width: 400,
                    type: 'success',
                    title: 'Success!',
                    html: "Call Details Updated!! ",

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
                        window.open('Index.aspx', '_self');
                    }
                }).then((result) => {
                    if (
                        // Read more about handling dismissals
                        result.dismiss === Swal.DismissReason.timer
                    ) {
                        window.open('Index.aspx', '_self');
                    }
                })

            }
            else if (Result == '~123') {
                let timerInterval
                Swal.fire({
                    width: 400,
                    type: 'error',
                    title: 'Error!',
                    html: "Sorry.....Something went wrong!! ",

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
                        window.open('Index.aspx', '_self');
                    }
                }).then((result) => {
                    if (
                        // Read more about handling dismissals
                        result.dismiss === Swal.DismissReason.timer
                    ) {
                        window.open('Index.aspx', '_self');
                    }
                })

            }


        }
    });





}


function sendnoncontactsms(phonenumber, leadid) {



    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "index.aspx/sendsms",

        //data: "{productid :'" + prod_id + "'}",
        data: "{phonenumber :'" + phonenumber + "',leadid :'" + leadid + "' }",

        dataType: "json",
        success: function (Result) {
            Result = Result.d;

        }
    });


}


//-------------------------------------------------366371
function sendmail(prd_status, prod_id, productname, lead1) {


    if (prd_status == "2") {
        //alert(prd_status);
        //alert(prod_id);

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "index.aspx/sendmail",

            //data: "{productid :'" + prod_id + "'}",
            data: "{productid :'" + prod_id + "',productname :'" + productname + "',leadid :'" + lead1 + "'  }",

            dataType: "json",
            success: function (Result) {
                Result = Result.d;

            }
        });


    }
    else {

        //alert(0);
        //alert(0);


    }


}










//-----------------------------------------------end 366371
//-----------------------------------------358141
function Confirm_check() {
    var lead_id = $("[id*=hd_lead_id]").val();
    var res;
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Index.aspx/Confirm_Check",
        data: "{indata :'" + lead_id + "'}",
        dataType: "json",
        async: false,
        success: function (Result) {
            Result = Result.d;
            res = Result;
        }
    });
    return res;
}



//------------------------------------end---358141

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


function Call_initiated() {



    //-------------------hide
    $("#callimage").css("display", "none");
    $("#callporgress").css("display", "block");
    document.getElementById("callporgress").disabled = true;
    document.getElementById("btn_confirm").disabled = true;
    //------------------end hide



    var Caller_ID = $("[id*=hdUserId]").val();
    var lead_id = $("[id*=hd_lead_id]").val();
    $("[id*=hd_call_click]").val("1");

    DropdownFill('call_response', 4);


    //------------------------------------- redemption response-----------------------------------------//
    DropdownFill('call_response', 7);

    //------------------------------------- end redemption response-----------------------------------------//
    var lasttbname = $("[id*=hdtabNmae]").val();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Index.aspx/Call_initiated",
        data: "{Caller_ID:'" + Caller_ID + "', lead_id :'" + lead_id + "', tbname :'" + lasttbname + "'}",
        dataType: "json",
        async: false,
        success: function (Result) {
            Result = Result.d;


        }


    });


}

function hideBK() {

    document.getElementById("div_1").style.backgroundColor = "#fff";
    document.getElementById("div_2").style.backgroundColor = "#fff";
    document.getElementById("div_3").style.backgroundColor = "#fff";
    document.getElementById("div_4").style.backgroundColor = "#fff";
    document.getElementById("div_5").style.backgroundColor = "#fff";
    document.getElementById("div_6").style.backgroundColor = "#fff";
    document.getElementById("div_7").style.backgroundColor = "#fff";
    document.getElementById("div_8").style.backgroundColor = "#fff";
    document.getElementById("div_9").style.backgroundColor = "#fff";
    document.getElementById("div_10").style.backgroundColor = "#fff";
    document.getElementById("div_101").style.backgroundColor = "#fff";
    document.getElementById("div_102").style.backgroundColor = "#fff";
    document.getElementById("div_103").style.backgroundColor = "#fff";
    document.getElementById("div_303").style.backgroundColor = "#fff";
    document.getElementById("div_403").style.backgroundColor = "#fff";


}

function visible1() {
    hideBK();
    $("#div_Today_Lead_call").show();
    document.getElementById("div_1").style.backgroundColor = "lightGreen";



}
function visible2() {
    hideBK();

    document.getElementById("div_2").style.backgroundColor = "lightGreen";


}
function visible3() {
    hideBK();

    document.getElementById("div_3").style.backgroundColor = "lightGreen";

}
function visible4() {
    hideBK();

    document.getElementById("div_4").style.backgroundColor = "lightGreen";

}
function visible5() {
    hideBK();

    document.getElementById("div_5").style.backgroundColor = "lightGreen";

}

function visible6() {
    hideBK();

    document.getElementById("div_6").style.backgroundColor = "lightGreen";

}

function visible7() {
    hideBK();


    document.getElementById("div_7").style.backgroundColor = "lightGreen";

}
function visible8() {
    hideBK();


    document.getElementById("div_8").style.backgroundColor = "lightGreen";

}
function visible9() {
    hideBK();


    document.getElementById("div_9").style.backgroundColor = "lightGreen";

}
function visible10() {
    hideBK();


    document.getElementById("div_101").style.backgroundColor = "lightGreen";

}
function visible100() {
    hideBK();


    document.getElementById("div_10").style.backgroundColor = "lightGreen";

}
function visible11() {
    hideBK();


    document.getElementById("div_102").style.backgroundColor = "lightGreen";

}
function visible12() {
    hideBK();


    document.getElementById("div_103").style.backgroundColor = "lightGreen";

}
function visible13() {
    hideBK();


    document.getElementById("div_303").style.backgroundColor = "lightGreen";

}
function visible14() {
    hideBK();


    document.getElementById("div_403").style.backgroundColor = "lightGreen";

}




//---------------- CRF_102144-----------------358536--------------------------------------------------------------------------------------




