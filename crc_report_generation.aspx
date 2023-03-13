<%@ Page Title="" Language="C#" MasterPageFile="~/ADMIN.Master" AutoEventWireup="true" CodeBehind="crc_report_generation.aspx.cs" Inherits="ITCPortal.crc_report_generation" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="js/crc_report.js?<%=DateTime.Now.Ticks.ToString()%>"></script>
    <script src="js/AutoCompleteJS.js"></script>
    <style>
        .task-style:hover {
    background: #e9e9e9;DropdownFill_employees
}
        .task-style {
    padding: 10px;
    cursor: pointer;
    border: 0.5px solid #d4d4d4cf;
}
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h3>Report</h3>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="admin_index.aspx">Home</a></li>
                                <li class="breadcrumb-item"><a href="crc_report_generation.aspx">REPORT</a></li>
                                <li class="breadcrumb-item active">Report</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <%--<div class="row">
                        <div class="col-md-12">--%>
                            <!-- Default box -->
                            <div class="card">
                                <div class="card-body">
                                    <form role="form">
                                        <div class="row col-md-12">
                     
                                                <div class="form-group col-md-6" style="padding-left:0;">
                                                    <label>Select Report</label>             
                                                    <select class="form-control" id="report_id" onchange="change_text();">
                                                      <option value="-1">Choose Report</option>
                                                       
                                                        </select>
                                                </div> 
                                              <div class="form-group col-md-6" style="padding-left:0;display:none;" id="div_employee">
                                                    <label>Select Employee</label>             
                                                    <select class="form-control" id="empid">
                                                      <option value="-1"></option>
                                                       
                                                        </select>
                                                </div>
                                               <%-- <div class="form-group col-md-6" style="padding-left:0;padding-right:0;">
                                                    <label>Task Name </label>
                                                    <input type="text" class="form-control" style="width:100%" placeholder="Choose Work" id="txtAssWorks" title="Phase" oninput="this.value = this.value.replace(/[^ a-zA-Z0-9&amp;.,_-“”‘’'%]/g, '');" onkeyup="LoadingDataAutoComplete(this.id, this.value,'2','Hidden1','GetAssignedWorks','search_emp','')"/>
                                                </div>--%>
                                                              
                                        </div> 
                                        <div class="row col-sm-12" style="display:none" id="div_report">
                                                <div class="form-group col-sm-6" style="padding-left:0;">
                                                    <label>From Date </label>             
                                                    <input type="text" id="txtfrmDate" class="form-control" style="width:100%" readonly="readonly"/>
                                                </div>
                                                <div class="form-group col-sm-6" style="padding-left:0;padding-right:0;">
                                                    <label>To Date </label>             
                                                    <input type="text" id="txttoDate" class="form-control" style="width:100%" readonly="readonly"/>
                                                </div>
                                                
                                        </div>                             
                                         
                                 
                                <div class="row p-2">
                                    <div class="col-sm-12">
                                        <div >
                                            <button style="width:20%;" type="button" class="btn btn-primary" onclick="return viewReport();">Generate</button>
                                            <button style="width:20%;" type="button" class="btn btn-danger" onclick="return frmExit();">Exit</button>
                                        </div>
                                    </div>
                                </div>
                               </form>
                           </div>
                            </div>
                            <!-- /.card-body -->

                        </div>
                        <!-- /.card -->

                   <%-- </div>--%>
                <%--</div>--%>

                </section>
        </div>
      <input id="hdUserId" type="hidden" runat="server"/>
     <input id="hdBranchId" type="hidden" runat="server"/>
     <input id="hdFirmId" type="hidden" runat="server"/>
     <input id="hdSesssion" type="hidden" runat="server"/>
     <input id="hdNoteID" type="hidden" runat="server"/>
    <input id="hddata" type="hidden" runat="server"/>
    <input id="Hidden1" type="hidden" runat="server"/>
    <input id="work_id" type="hidden" runat="server"/>

</asp:Content>
