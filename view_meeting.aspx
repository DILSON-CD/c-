<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="view_meeting.aspx.cs" Inherits="MaSales.meeting_minutes.view_meeting" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/xlsx.full.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/jszip.js"></script>
  


    <script>

        $(window).load(function () {
            $("#txt_frm").datepicker({
                dateFormat: 'dd/MM/yy',
                changeMonth: true,
                changeYear: true,
                maxDate: new Date(),
                minDate: '-115Y',
                onClose: function (dateText, inst) {
                }

            });
            $("#txt_to").datepicker({
                dateFormat: 'dd/MM/yy',
                changeMonth: true,
                changeYear: true,
                maxDate: new Date(),
                minDate: '-115Y',
                onClose: function (dateText, inst) {
                }

            });



        });



      


        



        function ViewAttach() {

            var F_date = document.getElementById('txt_frm').value;
            var T_date = document.getElementById('txt_to').value;

            var fnl = F_date + "~" + T_date

            $("#tabadd").empty();
            $.ajax({
                type: "post",
                contentType: "application/json; charset=utf-8",
                url: "view_meeting.aspx/GetTable",
                data: "{datee:'" + fnl + "'}",
                dataType: "json",

                success: function (Result) {
                    Result = Result.d;
                  
                   
                    $('#tablebody').empty();
                    if (Result == 0) {
                        alert("please select a valid date");
                    }
                    else { 
                        $('#tablehead').css("visibility", "visible"); $.each(Result, function (key, value) {
                            $('#tablebody').append($("<tr><td>" + value.meetingid + "</td><td>" + value.FileName + "</td><td><input type='button' value='open' class='btn btn-success approvebtn' onclick='openattach(" + value.meetingid + ")' style='width:120px;border-radius:4px;'/></td> <td><input type='button'value='confirm' class='btn btn-danger approvebtn' onclick='ViewConfirm(" + value.meetingid + ")' style='width:120px;border-radius:4px;'/> </td> </tr>"));
                        });
                    }
                }


            });
        }
       

        function openattach(meeting_id) {
           
            $.ajax({
                type: "post",
                contentType: "application/json; charset=utf-8",
                url: "view_meeting.aspx/OPENDOC",
                 data: "{meet_id:'" + meeting_id + "'}",
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
                                    url: "view_meeting.aspx/deleteDownloadFile",
                                    data: "{ input: '" + fileName + "' }",
                                    dataType: "json",
                                    success: function (Result) {
                                        ViewOpen(meeting_id);
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

        function ViewOpen(meeting_id) {
          
          
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "view_meeting.aspx/viewstatus",
                data: "{ input: '" + meeting_id + "' }",
                dataType: "json",
                success: function (Result) {
                    Result = Result.d;
                    alert(Result);
                },
                error: function (Result) {
                }
            });
        }

        function ViewConfirm(meeting_id) {
           
          
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "view_meeting.aspx/VConfirm",
                data: "{ input: '" + meeting_id + "' }",
                dataType: "json",
                success: function (Result) {
                    Result = Result.d;
                    alert(Result);
                },
                error: function (Result) {
                }
            });
        }

    </script>





</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="row ">
        <div class="ma-header">
            <div class="col-md-10">
                <h3 style="color: #091221;"><i class="icon-reorder"></i>VIEW MEETING</h3>
            </div>
        </div>
    </div>




    <div class="form-group col-md-12 padding-bottom-10px">
        <label class="col-md-4 align-right" id="lblPo">MEETING </label>
        <div class="col-md-4 align-left">
            <select class="form-control" id="ddlbranch" style="width: 100%">
                <option value="-1">Meeting Minutes</option>
            </select>
        </div>
    </div>



    <div class="form-group col-md-12 padding-bottom-10px">
        <label class="col-md-4 cntr-text">From Date</label>
        <div class="col-md-4">
            <input type="text" class="form-control" id="txt_frm" name="dob" maxlength="25" required="required" <%--onblur="leftTrim(this)"--%> autocomplete="off" <%--onchange="getAge(this.value);"--%> onkeyup="this.value=this.value.toUpperCase()" />
        </div>
    </div>



    <div class="form-group col-md-12 padding-bottom-10px">
        <label class="col-md-4 cntr-text">To Date</label>
        <div class="col-md-4">
            <input type="text" class="form-control" id="txt_to" name="dob" maxlength="25" required="required" <%--onblur="leftTrim(this)"--%> autocomplete="off" <%--onchange="getAge(this.value);"--%> onkeyup="this.value=this.value.toUpperCase()" />
        </div>
    </div>






    <div class="col-md-12 well" id="divItmrpt" style="display: none">
   
    </div>
    <div class="form-group col-md-12 padding-bottom-10px align-center">
        <input id="btnView" type="button" value="VIEW" class="btn-prop" onclick=" ViewAttach();" />
    </div>
    <div class="row center" id="table_show" style="width: 800px; margin-left: 50px;">

        <div class="table-responsive">
            <table class="table table-striped" style="margin-top: 15px">



                <thead id="tablehead" style="visibility: hidden">
                    <span class="text-center nodatafound" style="display: none">No Data Found...</span>
                    <tr>
                        <th>Meeting Id</th>
                        <th>File Name</th>




                    </tr>
                </thead>
                <tbody id="tablebody">
                </tbody>


               



            </table>
        </div>
        <div class="row">
            <div class="col-md-12 align-content-center">
                <table class="table table-hover table-bordered table-dark" id="tabadd" <%--style="display:none"--%>>
                    <tbody>






                    </tbody>
                    <%--</table>--%>
            </div>

           <%-- --%>
           

           

        </div>
    </div>


</asp:Content>
