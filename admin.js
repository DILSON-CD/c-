
//window.addEventListener('load', function () {
//    $("[id*=hd_leadsource_id]").val("-1");
//    $("[id*=hd_products_id]").val("-1");
//})

function update_xtension() {
    usr = $("[id*=hdUserId]").val();
    var extnson = $("#txt_xtension").val();
    if (extnson == "") {
        alerts("Please enter Extension number!!");
        return false;
    }



    else {
        $.ajax({




            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "caller_extension_updation.aspx/update_extension_number",
            data: "{extnson: '" + extnson + "',user_id: '" + usr + "'}",



            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                if (Result != "") {





                    let timerInterval
                    Swal.fire({
                        width: 400,
                        type: 'success',
                        title: 'Success!',
                        html: 'Your Extension number is replaced with  "' + Result + '"',



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
                            window.open('caller_extension_updation.aspx', '_self');
                        }
                    }).then((result) => {
                        if (
                            // Read more about handling dismissals
                            result.dismiss === Swal.DismissReason.timer
                        ) {
                            window.open('caller_extension_updation.aspx', '_self');
                        }
                    })



                }
            }
        });
    }
}
function button_extextension() {
    window.open('caller_extension_updation.aspx', '_self');
}
function addnew_bucket() {
    hide_backgroundcolor();
    $("#div_addbucket").show();
    $("#div_editbucket").hide();
    $("#div_xchange_emp").hide();
    $("#div_excel").hide();
    document.getElementById("div_1").style.backgroundColor = "#cefbf7";
    drop_employees();
    drop_bucket();
}
    function drop_bucket() {
    
    $.ajax({
        type: "POST",
        url: 'admin_index.aspx/get_bucket',
        data: "{input:'get_bucket'}",
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (Result) {
            Result1 = Result.d;

            $("#ddl_buckt1").empty();
            $.each(Result1, function (key, value) {
                $("#ddl_buckt1").append($("<option></option>").val(value.bucket_id).html(value.bucket_name));
            });

        },
        error: function (Result) {
            alert(Result);

        }
    });
   
}
function Edit_bucket()
 {
    hide_backgroundcolor();
    $("#div_editbucket").show();
    $("#div_addbucket").hide();
    $("#div_xchange_emp").hide();
    $("#div_excel").hide();
    document.getElementById("div_2").style.backgroundColor = "#cefbf7"; 
    show_bucket();
}
function fixLan()
{
   
    $("#ddl_buckt1").prop("disabled", true);
}

    function show_bucket() {
    $.ajax({
        type: "POST",
        url: 'admin_index.aspx/edit_bucket',
        data: "{input:'show_bucketdtl'}",
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (Result) {
            Result1 = Result.d;

            $("#ddl_editbuckt").empty();
            $.each(Result1, function (key, value) {
                $("#ddl_editbuckt").append($("<option></option>").val(value.bucket_id).html(value.bucket_name));
            });

        },
        error: function (Result) {
            alert(Result);

        }
    });
}
function replace_emp() {
    hide_backgroundcolor();
    $("#div_editbucket").hide();
    $("#div_addbucket").hide();
    $("#div_xchange_emp").show();
    $("#div_excel").hide();
    document.getElementById("div_3").style.backgroundColor = "#cefbf7"; 
  
}
//function replace_emp() {
//    hide_backgroundcolor();
//    $("#div_editbucket").hide();
//    $("#div_addbucket").hide();
//    $("#div_xchange_emp").hide();
//    $("#div_excel").hide();
//    document.getElementById("div_3").style.backgroundColor = "#cefbf7";

//}
function hide_backgroundcolor() {

    document.getElementById("div_1").style.backgroundColor = "#fff";
    document.getElementById("div_2").style.backgroundColor = "#fff";
    document.getElementById("div_3").style.backgroundColor = "#fff";
    //document.getElementById("div_4").style.backgroundColor = "#fff";
    document.getElementById("div_5").style.backgroundColor = "#fff";
}
//function add_newemp() {
  
//    hide_backgroundcolor();
//    $("#div_addemp").show();
//    $("#div_editbucket").hide();
//    $("#div_addbucket").hide();
//    $("#div_excel").hide();
//    document.getElementById("div_3").style.backgroundColor = "#cefbf7"; 

//}
function confirm_newbucket() {
    usr = $("[id*=hdUserId]").val();
    var txt_bucksize = $("#txt_bucketsize").val();
    if (txt_bucksize == "") {
        alerts("Please Enter bucket size!!");
        return false;
    }
    var table = document.getElementById('tabadd');
    var rowLength = table.rows.length;
    if (rowLength < 2) {
      
        alerts("Please fill the table!!");
        return false;

    }
    else {
        var ItemDtls = "";
        var table = document.getElementById('tabadd');
        var rowLength = table.rows.length;
        for (var i = 1; i < rowLength; i++) {

            ItemDtls = ItemDtls + table.rows[i].cells[0].innerHTML + '~' + table.rows[i].cells[1].innerHTML + '~' + table.rows[i].cells[2].innerHTML +'$';

        }
       // var text = document.getElementById("txt_Remarks").value;
     
        var input = ItemDtls + "@" + $("#txt_bucketsize").val();
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: 'admin_index.aspx/confirm_bucket',
            data: "{data:'" + input + "',user:'" + usr + "'}",
            dataType: "json",
            success: function (Result) {
                Result1 = Result.d;
                if (Result1 == '111') {

                    let timerInterval
                    Swal.fire({
                        width: 400,
                        type: 'success',
                        title: 'Success!',
                        html: "New bucket created!! ",

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
                            window.open('admin_index.aspx', '_self');
                        }
                    }).then((result) => {
                        if (
                            // Read more about handling dismissals
                            result.dismiss === Swal.DismissReason.timer
                        ) {
                            window.open('admin_index.aspx', '_self');
                        }
                    })


                }
                else {
                    alerts("This bucket is already created!!");
                    return false;
                    window.open('admin_index.aspx', '_self');
                   
                }

            }
        });
    }

    //}
}
function change_table(){
    $("#tab_bucket").empty();
    //$("#tab_bucket").empty();
    $("#rb_yes").prop('checked', false); 
    $("#rb_no").prop('checked', false);

}
function change_text() {
    
    
    var dp1 = $("#ddl_editemplang option:selected").val();
    if (dp1 == 1) {
        $("#divedit_button").hide();
      
        $("#div_radio").show();
    }
    else {
        $("#divedit_button").show();
      
        $("#div_radio").hide();
        $("#div_txt").hide();
        
    }
   
}
function fillbucket(indata, data) {
    var buckte_id = $("[id*=hdbuckid]").val()
    var valData, valData1;
    if (data == 0) {
        var a = indata.split("~");
        var lang = a[1];
        var lang_id = a[3];
        $("[id*=hdn3]").val(lang); 
        $("[id*=hdn4]").val(lang_id); 
        var hid_lang = $("[id*=hdn3]").val();
        if ($("#tab_bucket tr").length == 0) {
            $("#tab_bucket").empty();
            $('#tab_bucket').append('<tr style="background-color: #f6ff33"><th style="display:none;">BUCKET_ID</th><th class="text-center">LANGUAGES</th><th class="text-center">ASSIGNED EMPLOYEE</th><th style="display:none;">Lang_id</th><th class="text-center">DELETE</th></tr>');
        }
        valData1 = indata.split("$");

        for (i = 0; i < valData1.length - 1; i++) {
            valData = valData1[i].split("~");

            $('#tab_bucket').append('<tbody><tr>' +
                '<td style="text-center;display:none;">' + buckte_id + '</td>' +
                '<td class="text-center">' + hid_lang + '</td>' +
                '<td class="text-center">' + valData[2] + '</td>' +
                '<td style="text-center;display:none;">' + lang_id + '</td>' +

                '<td class="text-center"><a href="javascript:void(0);" class="remove"  id="remrow" ><span class="glyphicon glyphicon-trash">remove</span></a></td>' +

                '</tr > </tbody > ');

        }
       
    }
    else {
        var hid_lang = $("[id*=hdn5]").val();
        hid_lang= hid_lang.split('-');
        if ($("#tab_bucket tr").length == 0) {
            $("#tab_bucket").empty();
            $('#tab_bucket').append('<tr style="background-color: #f6ff33"><th style="display:none;">BUCKET_ID</th><th class="text-center">LANGUAGES</th><th class="text-center">ASSIGNED EMPLOYEE</th><th style="display:none;">lang_id</th><th class="text-center">DELETE</th></tr>');
        }
        valData1 = indata.split("$");

        for (i = 0; i < valData1.length - 1; i++) {
            valData = valData1[i].split("~");

            $('#tab_bucket').append('<tbody><tr>' +
                '<td style="text-center;display:none;">' + buckte_id + '</td>' +
                '<td class="text-center">' + hid_lang[1] + '</td>' +
                '<td class="text-center">' + valData[0] + '</td>' +
                '<td style="text-center;display:none;">' + $("[id*=hdn4]").val() + '</td>' +
                '<td class="text-center"><a href="javascript:void(0);" class="remove"  id="remrow" ><span class="glyphicon glyphicon-trash">remove</span></a></td>' +

                '</tr > </tbody > ');

        }
    }
   
  
      
        Edit_bucket();
    }

    //$('#txt_tlcnt').val(dp1.split('~')[1].toString())
    //var table = document.getElementById('tab_bucket');
    //var rowLength = table.rows.length;

    //var tbldata = "";
    //for (var i = 1; i < rowLength; i++) {

    //    tbldata = table.rows[i].cells[0].innerHTML;
    //}

    //var filldata = $("#ddl_buckt1").find('option:selected').val() + "^" + $("#ddl_buckt1").find('option:selected').text() + "^" + $("#ddl_emp").find('option:selected').text() + "¶";

    //filltable(filldata);
    

function confirm_editbucket() {
    usr = $("[id*=hdUserId]").val();
    var flag = 0;
    var indata = "";
    var ItemDtls = "";
    var select_dp = $("#ddl_editemplang option:selected").val();

    var hdn1 = $("[id*=hdn12]").val(select_dp);
    var select_bucket = $("#ddl_editbuckt option:selected").val();
    var hdn = $("[id*=hdn1]").val(select_bucket);
    if (hdn1 == -1 || hdn == -1) {
        alerts("Please select any option!!");
        $('#ddl_editemplang').focus();
        return false;
    }
    else {
        if (select_dp == 0) {
           
            var table = document.getElementById('tab_bucket');
            var rowLength = table.rows.length;
            if (rowLength < 2) {
                var select_emp = $("#ddl_selectemp option:selected").val();
                if (select_emp != -1 && rowLength < 2) {
                    
                    alerts("Please click ADD button");
                    return false;
                }
                else {
                    ItemDtls = $("[id*=hdbuckid]").val();
                } 
            }
            else {
                flag = 1;
                for (var i = 1; i < rowLength ; i++) {

                    ItemDtls = ItemDtls + $("[id*=hdbuckid]").val() + '~' + table.rows[i].cells[1].innerHTML + '~' + table.rows[i].cells[2].innerHTML + '~' + table.rows[i].cells[3].innerHTML + '$';
                }
            }
            //alert(ItemDtls);
            $.ajax({
                type: "post",
                contentType: "application/json; charset=utf-8",
                url: 'admin_index.aspx/confirm_editbucket',
                data: "{data:'" + ItemDtls + "',flag:'" + flag + "',user:'" + usr + "'}",
                dataType: "json",
                success: function (Result) {
                    Result1 = Result.d;
                   

                        let timerInterval
                        Swal.fire({
                            width: 400,
                            type: 'success',
                            title: 'Success!',
                            html: '"'+ Result1 + '"',

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
                                window.open('admin_index.aspx', '_self');
                            }
                        }).then((result) => {
                            if (
                                // Read more about handling dismissals
                                result.dismiss === Swal.DismissReason.timer
                            ) {
                                window.open('admin_index.aspx', '_self');
                            }
                        })



                    

                }
            });
        }
        else {
            flag = 2;
            var bucket_size = $("#txt_editsize").val();

            if (select_bucket == -1) {
                alerts("Please select Bucket!!");
                $('#ddl_editbuckt').focus();
                return false;
            }

            if (bucket_size == "") {
                alerts("Please enter bucket size!!");
              
                return false;
            }
                else {

                    if ($("#rb_yes").prop('checked') == true) {
                       
                        var data = select_bucket + "~" + bucket_size;
                        $.ajax({
                            type: "post",
                            contentType: "application/json; charset=utf-8",
                            url: 'admin_index.aspx/confirm_editbucket',
                            data: "{data:'" + data + "',flag:'" + flag + "',user:'" + usr + "'}",
                            dataType: "json",
                            success: function (Result) {
                                Result1 = Result.d;
                               

                                    let timerInterval
                                    Swal.fire({
                                        width: 400,
                                        type: 'success',
                                        title: 'Success!',
                                        html: '"' + Result1 + '"',

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
                                            window.open('admin_index.aspx', '_self');
                                        }
                                    }).then((result) => {
                                        if (
                                            // Read more about handling dismissals
                                            result.dismiss === Swal.DismissReason.timer
                                        ) {
                                            window.open('admin_index.aspx', '_self');
                                        }
                                    })



                              

                            }
                        });
                    }
                }
            }
        }
    }

  

function upload() {
    hide_backgroundcolor();
    $("#div_excel").show();
    $("#div_xchange_emp").hide();
    $("#div_editbucket").hide();
    $("#div_addbucket").hide();
   
    document.getElementById("div_5").style.backgroundColor = "#cefbf7"; 
    drop_excel_bucket();
    //Load_Lead_Products();
}
//excel upload
//function Load_Lead_Source() {
//    $.ajax({


//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "admin_index.aspx/Load_Lead_Source",
//        data: "{indata: 'drop_leadsource'}",

//        dataType: "json",
//        success: function (Result) {


//            Result = Result.d;
//            //alert(Result);
//            $('#ddl_lead_source').append($("<option></option>").val("-1").html("--SELECT LEAD SOURCE--"));
//            $.each(Result, function (key, value) {
//                $('#ddl_lead_source').append($("<option></option>").val(value.did).html(value.dname));
//            });

//        }
//    });
//}
//function Load_Lead_Products() {
  
//    $.ajax({


//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "admin_index.aspx/Load_Lead_Products",
//        data: "{indata: 'drop_lead_products'}",

//        dataType: "json",
//        success: function (Result) {


//            Result = Result.d;
//            //alert(Result);
//            $('#ddl_product').append($("<option></option>").val("-1").html("--SELECT PRODUCTS--"));
//            $.each(Result, function (key, value) {
//                $('#ddl_product').append($("<option></option>").val(value.did).html(value.dname));
//            });

//        }
//    });

//}
//function On_leadsource() {
//     leadsource_id = $('#ddl_lead_source option:selected').val();
//    $("[id*=hd_leadsource_id]").val(leadsource_id);
//}

//function On_products() {
//    var vproductid = $('#ddl_product option:selected').val();
//    $("[id*=hd_products_id]").val(vproductid);
//}

function successalert(type) {
    if (type == "1") {
       alerts('uploaded file is not the Excel file with .xls extension');
    }
    else if (type == "2") {
        alerts('Only a Maximum of 25000 Records can be Uploaded at a Time..!!!');
    }
    else if (type == "3") {
        alerts('Please select the Product..');
    }
    else if (type == "4") {
        alerts('Please Upload excel file..');
    }
    else {
        
        Swal.fire(type);
    }
}
function drop_employees() {
    $.ajax({


        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "admin_index.aspx/list_employee",
        data: "{indata: 'drop_employees'}",

        dataType: "json",
        success: function (Result) {


            Result = Result.d;
            //alert(Result);
          
            $("#ddl_emp").empty();
            $.each(Result, function (key, value) {
                $("#ddl_emp").append($("<option></option>").val(value.did).html(value.dname));
            });

        }
    });
}
function addbucket() {
    $("#div_addconfirm").show();
    
   
    var data = $("#ddl_buckt1 option:selected").val();
    var data1 = $("#ddl_emp option:selected").val();
    if (data == -1 || data1 == -1) {
        alerts('PLEASE SELECT ALL THE FIELDS');
    }

    else {
        var x = $("#ddl_emp").find('option:selected').text();
        var table = document.getElementById('tabadd');
        var rowLength = table.rows.length;

        var tbldata = "";
        for (var i = 1; i < rowLength; i++) {

            tbldata = table.rows[i].cells[0].innerHTML;
        }

        for (i = 1; i < rowLength; i++) {
            var a = table.rows[i].cells[2].innerHTML;

            if (a == x) {
                alerts("Already Added !");
                return false;
            }
        }
        var table = document.getElementById('tabadd');
        var rowLength = table.rows.length;
      
        var tbldata = "";
        for (var i = 1; i < rowLength; i++) {

            tbldata = table.rows[i].cells[0].innerHTML;
        }

        var filldata = $("#ddl_buckt1").find('option:selected').val() + "^" + $("#ddl_buckt1").find('option:selected').text() + "^" + $("#ddl_emp").find('option:selected').text() + "¶";

        filltable(filldata);
     
    }
}



function filltable(data) {
   
  
     
    var valData, valData1;
    valData = data.split('¶');
   
    if ($("#tabadd tr").length == 0) {
        $("#tabadd").empty();
        $('#tabadd').append('<tr style="background-color:#f6ff33"><th style="display:none;"></th><th class="text-center">LANGUAGE</th><th class="text-center">EMPLOYEE CODE</th><th class="text-center">DELETE</th></tr>');
    }
   
    for (i = 0; i < valData.length-1; i++) {
        valData1 = valData[i].split('^');

        $('#tabadd').append('<tbody><tr>' +
            '<td style="text-center;display:none;">' + valData1[0] + '</td>' +
            '<td class="text-center">' + valData1[1] + '</td>' +
            '<td class="text-center">' + valData1[2] +  '</td>' +
            '<td class="text-center"><a href="javascript:void(0);" class="remove"  id="remrow" ><span class="glyphicon glyphicon-trash">remove</span></a></td></tr > </tbody > ');
    }
    
    drop_employees();
    //drop_bucket();



}
    $(document).on('click', '.remove', function () {
        $(this).closest('tr').remove();   
        var table = document.getElementById('tabadd');
        var rowLength = table.rows.length;
        if (rowLength < 2) {
          
            $("#ddl_buckt1").prop("disabled", false);
        }
       
    });


function edit_buck() {
    var buk_id = $("#ddl_editbuckt option:selected").val();
    var buk_lan = $("#ddl_editbuckt option:selected").text();
    $("[id*=hdbuckid]").val(buk_id);
    
    $("[id*=hdn5]").val(buk_lan);
    var a = $("[id*=hdbuckid]").val( );
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "admin_index.aspx/show_bucket",
        data: "{data:'" + buk_id + "'}",
        dataType: "json",
        success: function (Result) {
            Result1 = Result.d;
            if (Result1.toString() != "") {


                fillbucket(Result1,0);
                  $("#divhide").show();
            }
            else {
                $("#divhide").show();
                alerts("No data found!!");
            }

        }
    });
  
   // repeat_bucket();
    get_languages();
    show_employeelist();
}
 
function get_languages() {

    $.ajax({
        type: "POST",
        url: 'admin_index.aspx/get_bucket',
        data: "{input:'get_bucket'}",
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (Result) {
            Result1 = Result.d;

            $("#ddl_selectlang").empty();
            $.each(Result1, function (key, value) {
                $("#ddl_selectlang").append($("<option></option>").val(value.bucket_id).html(value.bucket_name));
            });

        },
        error: function (Result) {
            alert(Result);

        }
    });

}
function show_employeelist() {
    $.ajax({


        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "admin_index.aspx/list_employee",
        data: "{indata: 'drop_employees'}",

        dataType: "json",
        success: function (Result) {


            Result = Result.d;
            //alert(Result);

            $("#ddl_selectemp").empty();
            $.each(Result, function (key, value) {
                $("#ddl_selectemp").append($("<option></option>").val(value.did).html(value.dname));
            });

        }
    });
}
function show_editadd() {
    
    $("#divadd_button").show();
}
function edit_addbuck() {
   
    //var data = $("#ddl_selectlang option:selected").val();
    var data1 = $("#ddl_selectemp option:selected").val();
   // var data2 = $("#ddl_selectbucket option:selected").val();
    var bucketid = $("[id*=hdbuckid]").val();
   
    if (data1 == -1 ) {
        alerts('PLEASE SELECT EMPLOYEE');
    }
    else {
        
        var indata = data1 + "~" + bucketid;
      
        var table = document.getElementById('tab_bucket');
                    var rowLength = table.rows.length;

                    var tbldata = "";
                    for (var i = 1; i < rowLength; i++) {

                        tbldata = table.rows[i].cells[0].innerHTML;
                    }

        var filldata = $("#ddl_selectemp").find('option:selected').text() + "~" + $("[id*=hdn4]").val() + "$";
                    var x = $("#ddl_selectemp").find('option:selected').text();
                 
                    for (i = 1; i < rowLength; i++) {
                        var a = table.rows[i].cells[2].innerHTML;

                        if (a == x ) {
                            alerts("Already Added !");
                            return false;
                        }
                    }

                    fillbucket(filldata, 1);
                    get_languages();
                    show_employeelist(); 
                }
    
}

function show_bucketsize() {
    
   
    var bucketid = $("#ddl_editbuckt option:selected").val();
    if (bucketid == -1) {
        alerts("Please select bucket");
        return false;
    }
    else {

        $("#div_txt").show();
        $.ajax({


            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "admin_index.aspx/get_bucketsize",
            data: "{indata: '" + bucketid + "'}",

            dataType: "json",
            success: function (Result) {


                Result = Result.d;
                $('#txt_curentsize').val(Result);

            }

        
    });
    }
}
function hide_bucketsize() {

    $("#div_txt").hide();
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
function ecxeption(type) {
    Swal.fire({
        width: 400,
        type: 'error',
        title: 'Error!',
        html: type,
        showConfirmButton: true,
        allowOutsideClick: true



    })
}
function confirm_xhange() {


    var exchange_emp = $("#txt_emplcode").val();
    var exchange_with = $("#txt_xchempcode").val();
    if (exchange_emp == "" || exchange_with == "") {
        alerts("Please enter employee code!!");
        return false;
    }
    else {
        $.ajax({


            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "admin_index.aspx/confirm_exchange",
            data: "{empcode: '" + exchange_emp + "',xchange_empcode:'" + exchange_with + "'}",

            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                if (Result == "333") {
                    alerts("Not an existing employee code");
                    return false;
                    window.open('admin_index.aspx', '_self');
                }
                else {
                    Result = Result.split("-");


                    let timerInterval
                    Swal.fire({
                        width: 400,
                        type: 'success',
                        title: 'Success!',
                        html: 'SUCCESSFULLY REPLACED "' + Result[0] + '" with "' + Result[1] + '"',

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
                            window.open('admin_index.aspx', '_self');
                        }
                    }).then((result) => {
                        if (
                            // Read more about handling dismissals
                            result.dismiss === Swal.DismissReason.timer
                        ) {
                            window.open('admin_index.aspx', '_self');
                        }
                    })

                }
            }
        });
    }
}
function button_ext() {
    window.open('admin_index.aspx', '_self');
}

function drop_excel_bucket() {
    $.ajax({
        type: "POST",
        url: 'admin_index.aspx/Excel_bucket',
        data: "{input:'excel_bucketupload'}",
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (Result) {
            Result1 = Result.d;

            $("#ddl_bucket").empty();
            $.each(Result1, function (key, value) {
                $("#ddl_bucket").append($("<option></option>").val(value.bucket_id).html(value.bucket_name));
            });

        },
        error: function (Result) {
            alert(Result);

        }
    });
}
function onlyNos(e, t) {


    try {
        if (window.event) {
            //To disable other button clicks
            if (window.event.keyCode == 13) {
                e.preventDefault();
                //  if (!($('#txt_PartAmount').prop(disable, true))) {

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
function On_changebucket() {
    var bucket_id = $('#ddl_bucket option:selected').val();

    $("[id*=hd_chngebucket_id]").val(bucket_id);
}

function switchQA() {
    // alert("hi");
    debugger;
    $.ajax({
        type: "POST",
        url: 'admin_index.aspx/switchQA',
        data: "{input:'switch2QA'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (Result) {
            Result1 = Result.d;

            if (Result1 == "") {
                window.open('Errorpage.aspx', '_self');
            }
            else {
                window.open('QA_Module_Index.aspx', '_self');
            }

        },
        error: function (Result) {
            alert(Result);

        }
    });



}


