<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="BulkOglCustomerActivation.aspx.cs" Inherits="MaSales.BulkOglCustomerActivation.BulkOglCustomerActivation" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

   

      <script>  
function frmExit() {
window.location = "../Index/Index.aspx";
}

        function btn_activate() {
           
            var flag = "Bulk_ogl";

           
            $.ajax({
                type: "post",
                contentType: "application/json; charset=utf-8",
                url: "BulkOglCustomerActivation.aspx/click",
                data: "{bocflg:'" + flag + "'}",
                dataType: "json",
                success: function (Result) {
                    Result = Result.d;
                    alert(Result);
                }
            });
            
        }
    </script>


 <script>   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>


    


</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    
   <form id="form1" class="form-horizontal" action="#" runat="server">
        
        <div class="container">
            <div class="row ">
                     <div class="ma-header">
                        <div class="col-md-12">
                           <h3 style="color: #091221;margin-left:-10%;"><i class="icon-reorder"></i>BULK OGL CUSTOMER ACTIVATION</h3>
                        </div>
                     </div>
                 </div>
            <div class="col-md-11 well">           
                <div class="form-group col-md-12 padding-bottom-10px">
                   
                </div> 

                 <div class="form-group col-md-20 padding-bottom-10px">
                          <label class="col-md-4 cntr-text" style="margin-left:35%;color:deepskyblue;">Click here to Activate Bulk Ogl Activation!!!</label>
                                
                       </div> 

              
                <div class="col-md-12 well" id="divItmrpt" style="display:none">
                    <div class="form-group col-md-12 padding-bottom-10px">
                        <label class="col-md-2 align-right"> </label>                                     
                        <div class="col-md-4 align-left" >
                                                                          
                        </div>   
                        
                        
                        
                        <div class="col-md-4 align-left" >
                                                                           
                        </div> 
                    </div>
                </div>
                <div class="form-group col-md-12 padding-bottom-10px align-center">
                    <input id="btnView" type="button" value="ACTIVATE" class="btn btn-success btn-lg" onclick="btn_activate();"/>
                </div> 

                 <div class="form-group col-md-12 padding-bottom-10px align-center">
                    <input id="btnExit" type="button" value="EXIT" class="btn btn-danger btn-lg" onclick="frmExit();"/>
                </div> 
               
                           
            </div>
   
        </div>
       
    </form>
    </asp:Content>