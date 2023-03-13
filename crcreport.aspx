<%@ Page Title="" Language="C#" MasterPageFile="~/ADMIN.Master" AutoEventWireup="true" CodeBehind="crcreport.aspx.cs" Inherits="ITCPortal.crcreport" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
        <style type="text/css" title="currentStyle">
			@import "css/demo_page.css"; 
			@import "css/demo_table.css";
			@import "css/jquery-ui-1.8.4.custom.css";
			@import "css/TableTools.css";
            .scroll {
                overflow-x: auto;
                white-space: nowrap;
            }

            .odd_gradeX:hover {
                background: aliceblue;
            }

        </style>
        

   <script type="text/javascript" charset="utf-8">
			$(document).ready( function () {
				var oTable = $('#example').dataTable( {
					"bJQueryUI": true,
					"sPaginationType": "full_numbers",
					"sDom": 'T<"clear"><"H"lfr>t<"F"ip>',
                    "bAutoWidth": false,
					"oTableTools": {
						"aButtons": [
							"copy", "csv", "xls", "pdf",
							{
								"sExtends":    "collection",
								"sButtonText": "Save",
								"aButtons":    [ "csv", "xls", "pdf" ]
							}
						]
					}
				} );

			} );
</script>
    <script src="js/jquery.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/ZeroClipboard.js"></script>
    <script src="js/TableTools.js"></script>
    <script src="js/FixedColumns.js"></script>   
<script>

function btnPrint_onclick() 
{
   window.print();
}

function ShowCurrentTime() 
{
  var dt = new Date();
  document.getElementById("lblTime").innerHTML = 'Time : '+ dt.toLocaleTimeString();
    window.setTimeout("ShowCurrentTime()", 1000); 
    }
       function GetASORPT(fromdt, todt, mnuId, unid, stid) {
        
            window.open('crcreport.aspx?frdt=' + fromdt + '&todt=' + todt + '&mnuId=' + mnuId + '&unid=' + unid + '&stid=' + stid + '', '_self');
         
     }

</script> 
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <form id="form2" class="form-horizontal row-border" action="#" runat="server" style="margin-left: 250px; height:auto;" >
        <div class="container">
           <div class="col-md-12 well align-center">
               
               <div class="col-md-12 align-center">
                   <asp:Label ID="lbldate" runat="server" Font-Bold="True" ForeColor="Navy" Width="25%"></asp:Label><br />
                   <asp:Label ID="lblTime" runat="server" Font-Bold="True" ForeColor="Navy" Width="258px"></asp:Label><br />
               </div>
               <div class="col-md-12 align-center">
                   <asp:Panel ID="Panel1" runat="server" Height="16%" Style="z-index: 100; left: 11px; top: 7px" Width="100%">
                        <div style="margin-left: auto; margin-right: auto; text-align: center">
                             <asp:Label ID="Label2" runat="server" BackColor="Transparent" Font-Bold="True" Font-Size="X-Large"
                                  Height="20px" Text="MANAPPURAM FINANCE LIMITED" Width="100%"></asp:Label>
                            <asp:Label ID="lblTitle" runat="server" BackColor="Transparent" Font-Bold="True" Font-Size="Large"
                                  Height="18px" Width="100%">REPORT</asp:Label><br />
                        </div>
                        <div id="demo" class="scroll">
                            <div id="MyTable" runat="server" style="margin-left: auto; margin-right: auto; text-align: center">
                            </div>
                        </div>
                   </asp:Panel>
               </div>
        <div class="col-md-12 row align-right" style="margin-top: 34px;">
                   <div class="col-md-3">
                       <asp:Button ID="btn_Excel" runat="server" EnableTheming="True" Font-Size="10pt" CssClass="btn btn-block btn-outline-primary"
                       Text="EXPORT TO EXCEL"
                       OnClick="btn_Excel_Click" />
                   </div>
                   <div class="col-md-3">
                   <input id="btnPrint" onclick="return btnPrint_onclick()" class="btn btn-block btn-outline-danger"  type="button" value="PRINT" />
                   </div>
               </div>
        
    
    </div>
            </div>
        </form>
</asp:Content>
