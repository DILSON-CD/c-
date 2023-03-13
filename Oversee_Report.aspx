<%--created by 358536, CRF_101538--%>

<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="~/Main.Master"  CodeBehind="Oversee_Report.aspx.cs" Inherits="HoApps.Marketing_check.Oversee_Report" %>



<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
       <head>
        <style type="text/css" title="currentStyle">
			@import "../App_Themes/Theme/assets/css/demo_page.css"; 
			@import "../App_Themes/Theme/assets/css/demo_table.css";
			@import "../App_Themes/Theme/assets/css/jquery-ui-1.8.4.custom.css";
			@import "../App_Themes/Theme/assets/css/TableTools.css";
            .scroll {
                overflow-x: auto;
                white-space: nowrap;
            }
        </style>
        
    </head>
    <script src="../App_Themes/Theme/assets/js/jquery.js"></script>
    <script src="../App_Themes/Theme/assets/js/jquery.dataTables.min.js"></script>
    <script src="../App_Themes/Theme/assets/js/ZeroClipboard.js"></script>
    <script src="../App_Themes/Theme/assets/js/TableTools.js"></script>
    <script src="../App_Themes/Theme/assets/js/FixedColumns.js"></script>

<script type="text/javascript" charset="utf-8">
    $(document).ready(function () {
        var oTable = $('#example').dataTable({
            "bJQueryUI": true,
            "sPaginationType": "full_numbers",
            "sDom": 'T<"clear"><"H"lfr>t<"F"ip>',
            "bAutoWidth": false,
            "oTableTools": {
                "aButtons": [
                    
                ]
            }
        });

    });

    function GetASORPT(fromdt, todt, mnuId, unid, stid) {
        window.open('Oversee_Report.aspx?frdt=' + fromdt + '&todt=' + todt + '&mnuId=' + mnuId + '&unid=' + unid + '&stid=' + stid + '', '_self');
    }



</script>
    
<script language="javascript" type="text/javascript">

    function btnPrint_onclick() {
        window.print();
    }

    function ShowCurrentTime() {
        var dt = new Date();
        document.getElementById("lblTime").innerHTML = 'Time : ' + dt.toLocaleTimeString();
        window.setTimeout("ShowCurrentTime()", 1000);
    }

</script> 
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  <form id="Form1" class="form-horizontal row-border" action="#" runat="server" >
        <div class="container">
           <div class="col-md-11 well align-center">
               <div class="col-md-12 align-right">               
                   <asp:Button ID="btn_Excel" runat="server" BackColor="LightSteelBlue" BorderStyle="Ridge"
                 EnableTheming="True" Font-Bold="True" Font-Names="Book Antiqua" Font-Size="10pt"
                 ForeColor="Black" Height="30%" Style="border-right: thin ridge; border-top: thin ridge;
                 border-left: thin ridge; cursor: hand; border-bottom: thin ridge" Text="EXPORT TO EXCEL"
                 Width="168px" OnClick="btn_Excel_Click"/>
                  <%-- <input id="btnPrint" onclick="return btnPrint_onclick()" style="font-weight: bold;
                width: 73pt; cursor: hand; font-family: 'Book Antiqua'; background-color: lightsteelblue"
                type="button" value="PRINT" />--%>
               </div>
               <div class="col-md-12 align-center">
                   <asp:Label ID="lbldate" runat="server" Font-Bold="True" ForeColor="Navy" Width="25%"></asp:Label><br />
                   <asp:Label ID="lblTime" runat="server" Font-Bold="True" ForeColor="Navy" Width="258px"></asp:Label><br />
               </div>
               <div class="col-md-12 align-center">
                   <asp:Panel ID="Panel1" runat="server" Height="16%" Style="z-index: 100; left: 11px; top: 7px" Width="100%">
                        <div style="margin-left: auto; margin-right: auto; text-align: center">
                             <asp:Label ID="Label2" runat="server" BackColor="Transparent" Font-Bold="True" Font-Size="X-Large"
                                 ForeColor="Green" Height="28px" Text="MANAPPURAM FINANCE LIMITED" Width="100%"></asp:Label>
                            <asp:Label ID="lblTitle" runat="server" BackColor="Transparent" Font-Bold="True" Font-Size="Large"
                                 ForeColor="Purple" Height="21px" Width="100%">MARKETING ACTIVITY OVERSEE REPORT</asp:Label><br />
                        </div>
                        <div id="demo" class="scroll">
                            <div id="MyTable" runat="server" style="margin-left: auto; margin-right: auto; text-align: center">
                            </div>
                        </div>
                   </asp:Panel>
               </div>
        
        
    
    </div>
            </div>
        </form>
</asp:Content>
