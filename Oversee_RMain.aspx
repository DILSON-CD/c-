<%--created by 358536, CRF_101538--%>

<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="~/Main.Master" CodeBehind="Oversee_RMain.aspx.cs" Inherits="HoApps.Marketing_check.Oversee_RMain" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
 
    <script src="../App_Themes/Theme/assets/js/Oversee_Report.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <form id="form1" class="form-horizontal" action="#" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
        <div class="container">
            <div class="row ">
                <div class="ma-header">
                    <div class="col-md-12">
                        <h3 style="color: #091221;"><i class="icon-reorder"></i>MARKETING ACTIVITY OVERSEE REPORT</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-11 well">

                <div class="form-group col-md-12 padding-bottom-10px align-center">
                    <label class="col-md-4 align-right align-center" id="lblPo">Select Report : </label>
                    <div class="col-md-4 align-center">
                        <select class="form-control" id="ddlReport" style="width: 100%">
                            <option value="-1">--SELECT--</option>
                        </select>
                    </div>
                </div>
        
                <div class="form-group col-md-12 padding-bottom-10px align-center">
                    <label class="col-md-4 align-right align-center">From Date</label>
                    <div class="col-md-4 align-center">
                        <input type="text" class="form-control" id="txt_frm" name="dob" maxlength="25" required="required" onblur="leftTrim(this)" autocomplete="off" onchange="getAge(this.value);" onkeyup="this.value=this.value.toUpperCase()" />
                    </div>

                </div>

                <div class="form-group col-md-12 padding-bottom-10px align-center">
                    <label class="col-md-4 align-right align-center">To Date</label>
                    <div class="col-md-4 align-center">
                        <input type="text" class="form-control" id="txt_to" name="dob" maxlength="25" required="required" onblur="leftTrim(this)" autocomplete="off" onchange="getAge(this.value);" onkeyup="this.value=this.value.toUpperCase()" />
                    </div>

                </div>

                <div class="form-group col-md-12 padding-bottom-10px align-center">
                    <input id="btnView" type="button" value="VIEW" class="btn-prop" onclick="ConvrsnReport();" />
                </div>

            </div>
            <input id="hdSel" type="hidden" runat="server" />
        </div>
    </form>
</asp:Content>

