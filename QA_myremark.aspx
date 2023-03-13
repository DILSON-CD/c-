<%@ Page Title="" Language="C#" MasterPageFile="~/QAUSER.Master" AutoEventWireup="true" CodeBehind="QA_myremark.aspx.cs" Inherits="ITCPortal.QA_myremark" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<script src="js/QA_myremark.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="content-wrapper">
       
      <%--  <div>
             <label style="text-align:center;margin-left:44%;">MY QA</label>
        </div>--%>
        <div class="card"style="width: 68%;margin-left: 16%;height: 366px;background-color: aliceblue;box-shadow: 9px 8px 10px 2px gray;">
                      <div class="card-body">
                          <form  role="form">
                   <%-- <div class="form-group col-sm-6" style="padding-left: 0;">--%>
                     <div class="form-group">
                    <label style="margin-left:10px;">Select QA Mobile</label>
                         &nbsp &nbsp &nbsp &nbsp &nbsp

                    <select class="form-control select2" onchange="filltab1();" id="Sel_Employee" style="width: 40%" >
                                            </select>
                  </div>  
                  
                                <div class="col-md-12">
              <label class="pure-material-textfield-outlined">

                                  <label>QA Remark</label>
                                <textarea rows="1" cols="15" name="Remarks" id="QA_rem" maxlength="3500" title="QA Remarks" ReadOnly="true" style="height: 76px;width:606px;margin-left:80px;" oninput="this.value = this.value.replace(/[^-@.,/#&+\w\s]/g, '');"></textarea>
                                
                            </label>

                                 <label class="pure-material-textfield-outlined">

                                  <label>Remark</label>
                                <textarea rows="1" cols="15" name="Remarks" id="txtRemarks" maxlength="3500" title="Remarks" style="height: 76px;width:606px;margin-left:105px;" oninput="this.value = this.value.replace(/[^-@.,/#&+\w\s]/g, '');"></textarea>
                                
                            </label>

                        </div>  
                          
                          
                          </form>
                  </div>   
                  </div>   

          <div class="">

            <table class="table table-hover table-danger col-md-12"  id="tabChange" style="font-size: 12px; border-collapse:collapse; word-wrap:break-word; " >
            </table> 
        </div>


        <%--  <div class="form-group col-md-1 col-lg-2">
                    <input id="btnView" type="button" value="SEARCH" class="btn-prop" style="height:100%" onclick="filltab1();"/>
                </div>--%>

        
      
          <div style="display:flex;justify-content:center;align-content:center">

                                       <button style="width: 15%; margin: 1.25rem;" type="button" class="btn btn-info" id="btn_claim" onclick="Claim()">Claim</button>
                                        <button style="width: 15%; margin: 1.25rem;" type="button" class="btn btn-primary" id="btn_confirm" onclick="Confirm()">Confirm</button>

                                        <button style="width: 15%; margin: 1.25rem;" type="button" class="btn btn-danger" id="btn_Exit" onclick="Exit()" >Exit</button>
                                    </div>
                                        
    </div>

    
     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color: white">
                    <%--<h5 class="modal-title" id="exampleModalLabel" style="color: black;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"></h5>--%>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close" style="margin-top: -18px">
                        <span aria-hidden="true" style="color: #030080; font-size: 20px">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="scrollbar-3dlight-color">
                    <form>
                        <div class="row">
                           <div class="table-responsive" id="dvData" style="overflow: auto; max-height: 500px; background-color:white;">
                               
                                <table class="table table-hover table-bordered " id="tblReportData" style="text-align: center; position: relative; width:100%">

                                </table>
                               
                            </div>

                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <div class="row">
                        <div class="col-md-12">
                            
                            <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>








 



    <input id="hdUserId" type="hidden" runat="server"/>
    <input id="hdncall_id" type="hidden" runat="server"/>
     <input id="hdscore" type="hidden" runat="server"/>
     <input id="hdfatal" type="hidden" runat="server"/>
   

   
</asp:Content>
