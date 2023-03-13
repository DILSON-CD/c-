<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="attach_meeting.aspx.cs" Inherits="MaSales.meeting_minutes.attach_meeting" %>



<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/xlsx.full.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/jszip.js"></script>
<script>





function frmExit() {



window.location = "../Index/Index.aspx";
}



    function UploadFiles() {


         if (FileUpload1.files.length == 0) {
            alert("Choose any File to Upload...!!!");
            return false;
        }




var extension = "";



var fileList = document.getElementById("FileUpload1").files;
var fileReader = new FileReader();
if (fileReader && fileList && fileList.length) {




let fileName = fileList[0].name;

extension = fileName.replace(/^.*\./, '');

if (extension == fileName) {
extension = '';
}
else {




extension = extension.toLowerCase();
var indata = extension + '~' + fileName;
}




fileReader.readAsDataURL(fileList[0]);
fileReader.onload = function () {
var imageData = fileReader.result;
var d2 = imageData.split(":");
var d3 = d2[1].split(";");



var imageData = fileReader.result;
var d1 = fileList[0].name.split(".");



    

    








$.ajax({



type: "post",
contentType: "application/json; charset=utf-8",
url: "attach_meeting.aspx/Upload",
data: "{upload_file: '" + imageData + "',inputdata:'" + indata + "'}",
dataType: "json",
success: function (Result) {
Result = Result.d;
if (Result == "Successfull") {
alert("Updated Successfully");
window.location = "../meeting_minutes/attach_meeting.aspx";
}
else {
alert("Something went wrong");
}
}
});
}
}
}
</script>
<style type="text/css">
.auto-style1 {
background-color: #1f2831;
border-color: #e9b216;
color: white;
flex-align: center;
border-radius: 5px 5px;
width: 125px;
top: -20px;
left: -104px;
height: 25px;
}
</style>
</asp:Content>



<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<form id="Form1" class="form-inline" action="#" runat="server">
<div style="width: 1000px; padding: 10px 0px 60px 0px; margin: 50px 0px 0px 50px;">
<div class="row ">
<div class="ma-header">
<div class="col-md-12">
<h3 style="color: #091221"><i class="icon-reorder"></i>UPLOAD MEETING MINUTES</h3>
<br />
</div>
</div>
</div>
</div>
<%-- ---------------------------EXCEL UPLOAD------------------------%>
<div role="tabpanel" class="tab-pane festival" id="excelupload">
<div class="container">
<div class="col-md-10">
<div class="form-group col-md-12 padding-bottom-10px">
<div class="form-group col-md-12 padding-bottom-10px align-center">
<div class="col-md-4 align-right">
<label>Upload Excel File: </label>
</div>
<div class="col-md-4 align-center">
<input type="file" class="form-control" name="chooseFile" id="FileUpload1" />
</div>
</div>
<div class="col-md-12 form-group align-center padding-bottom-10px padding-top-10px">
<div class="col-md-2 align-center"></div>
<div class="col-md-8 align-center">
<table class="table table-hover table-danger col-md-8" id="exceltable" style="width: 0px; font-size: 12px; height: 5px;">
<thead class="bg-danger text-white align-center">
<tr>
</tr>
</thead>
<tbody class="border border-dark align-center"></tbody>
</table>
</div>
</div>
<div class="form-group col-md-12 padding-bottom-10px align-center">
<%-- <div class="col-md-8 align-right<%--">--%>
<%--<div class="col-md-4 align-right"> <input type="button" id="btnView" class="btn-prop" value="View" style="height:25px;width:125px" onclick="ExportToTable()" />--%>
</div>
<div class="col-md-4 align-right">
<button type="button" class="auto-style1" id="btnConf" onclick="UploadFiles()">Upload</button>
</div>
<div class="col-md-4 align-right">
<button type="button" class="btn-prop" id="btnExit" onclick="frmExit()" style="height: 25px; width: 125px">Exit</button>
</div>
</div>
</div>
</div>
</div>
<%--</div> --%>
</form>
</asp:Content>