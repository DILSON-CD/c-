<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="m_verification_AH_fzm.aspx.cs" Inherits="HoApps.Marketing_check.m_verification_AH_fzm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
      <style type="text/css">
   .modal {
            /* some styles to position the modal at the center of the page */
            position: fixed;
            top: 35%;
            left: 30%;
            width: 300px;
            height: 200px;
            margin-left: -150px;
            margin-top: -100px;
            background-color: white;
            text-align: center;
            opacity: 1.0;
            /*/* needed styles for the overlay */*/
            z-index: 100; /* keep on top of other elements on the page */
            outline: 9999px solid rgba(0,0,0,0.5);
            border: solid 1px black;
        }
    /* overlay styles, all needed */
        .overlay {
            background: transparent url(../Images/overlay.png) repeat top left;
            position: fixed;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            z-index: 100;
         }
        </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<script src="../App_Themes/Theme/assets/js/ah_marketing_verify.js"></script>
   
       <form id="Form1" class="form-inline" action="#" runat="server">
             <div class="container">
                            <div id="pordr" class=" align-center ma-header border border-dark" >
                                <div class="col-md-11">
                                    <h3 style="color: #091221"><i class="icon-reorder"></i>Marketing Checklist Verification</h3>
                                </div>
                            </div>
             </div>
            <div class="container">
            <div class="col-md-11 well well-lg align-center ">
                <div class="form-group col-md-12 padding-bottom-10px align-center ">
                                <div class="col-md-12">
                                    <h4 style="color: #091221"><B>Marketing Checklist Verification</B></h4>
                                </div>
                            </div>
                       <div class="form-group col-md-12 padding-bottom-10px align-center " id="div_b4_after" style="display:none">
                        <label  class=" col-md-5 align-right">Select Option</label>
                        <div class="col-md-6 align-left">
                             <select  class="form-control dd-list" id="ddl_b4_after"  style="width:250px; color:black" name="ItemType" onchange="getActivity()"  >
                                    <option value="-1" selected="selected" >--Select--</option>
                                    <%-- <option value="1"  >Before PO Delivery</option>
                                     <option value="2"   >After PO Delivery</option>--%>
                                    <option value="1"  >Before Payment</option>
                                     <option value="2"   >After Payment</option>
                         </select>
                            
                        </div>                
                    </div>
   
                <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Select Marketing Activity</label>
                        <div class="col-md-6 align-left">
                             <select  class="form-control dd-list" id="marketing_act"  style="width:250px; color:black" name="ItemType" onchange="marketing_acts()"  >
                         </select>
                            
                        </div>                
                    </div>


                <div class="form-group col-md-12 padding-bottom-10px align-center " id="div_Activity Status">
                    <label class=" col-md-5 align-right">Activity Status</label>
                    <div class="col-md-6 align-left">
                        <select class="form-control dd-list" id="ddl_activity_status" style="width: 250px; color: black" name="ActivityStatus" >
                            <option value="-1" selected="selected">--Select Status--</option>
                            <option value="1">Completed</option>
                            <option value="2">Completed but not proper</option>
                            <option value="3">Live</option>
                            <option value="4">Pending</option>                            
                        </select>

                    </div>
                </div>
   


             <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Date of opening of the Branch</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="br_op_date" readonly/>
                        
                        </div>                
                    </div>
             <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">GL Bussiness O/S as on Date</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text"  style="width:250px; color:black;text-transform: uppercase;"  id="gl_os_date" readonly/>
                        
                        </div>                
                    </div>
          <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Duration of Activity</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="du_activity" readonly/>
                        
                        </div>                
                    </div>
               <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Unit</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="unit_1" readonly/>
                        
                        </div>                
                    </div>
            <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Sqft</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="sq_ft" readonly/>
                        
                        </div>                
                    </div>
            <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Duration(Seconds)</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="du_sec" readonly/>
                        
                        </div>                
                    </div>
             <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Marketing Activity Start Date</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="st_dt" readonly/>
                        
                        </div>                
                    </div>
             <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Marketing Activity End Date</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="en_dt" readonly/>
                        
                        </div>                
                    </div>
              <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Vendor Name</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="ven_name" readonly/>
                        
                        </div> 
                  </div>
              <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">Amount</label>
                        <div class="col-md-6 align-left">
                             <input type="text" class="form-control input-group-text" style="width:250px; color:black;text-transform: uppercase;"  id="amt" readonly/>
                        
                        </div>                
                    </div>

             <div class="form-group col-md-12 padding-bottom-10px align-right ">
                       
                               <div class="col-md-5 align-right">
                               <label class="align-right">Are you Physically Verified Activity ?:<span style="color: red">*</span></label>
                            </div>
                          <div class="col-md-4 align-left">
                               
                               <label class="align-right">Yes<span style="color: red;"></span></label>
                        
                              <input type="radio" name="dlradio1" id="rb_ys" onclick="ysact()" style="margin :0px 20px 0px 0px"/>
                
                               <label class="align-right">No<span style="color: red;"></span></label>
                       
                              <input type="radio" name="dlradio1" id="rb_no" checked="checked" onclick="Noact()"/>
                              </div>
                            
                  
                             </div>

                 <div class="form-group col-md-12" style="border-style: dashed; border-color: darkgrey; border-radius: 2px; border-width: 1px; border-spacing: 1px;" id="qtn">
                   
                    <div class="form-group col-md-12 padding-bottom-10px" style="padding-bottom:30px">
                        <label class="col-md-2 align-right">Select Document  </label>
                        <div class="col-md-4 align-left">
                            <select class="form-control dd-list" id="ddl_DocSel2" style="width: 100%; color: black; border-style: dotted" name="ddl_DocSel2" onchange="GetShow()"></select>
                        </div>
                        <div class="col-md-3 align-left">
                            <button type="button" class="btn-prop" id="btnview" onclick="View_Doc()">VIEW</button>
                        </div>
                        
                        
                    </div>
                </div>









                <div class="form-group col-md-12 padding-bottom-10px align-center " >
                    <div class="col-md-5"></div>
                        <div class="col-md-7 align-left">
                          <button type="button" class="btn btn-success" id="viewdocumentsbtn" onclick="View_Documents()" style="width:250px;">View Documents</button>
<%--                            <button type="button" class="btn btn-warning" id="#" onclick="View_Doc" >View Vendor Doc</button>--%>
                          
             </div>                
            </div>














           
                   <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <label  class=" col-md-5 align-right">AH/RM/FZM Remarks<span style="color:red">*</span></label>
                        <div class="col-md-6 align-left">
                             <textarea rows="4" cols="50" style="height:80px;width:250px;" name="remarks" id="rem" placeholder="Enter Remarks...."></textarea>
                        
                        </div>                
                    </div>
         <div class="form-group col-md-12 padding-bottom-10px align-center ">
                  <label  class=" col-md-12 align-center"><b>Add CheckList</b>
                    <input type="button" value=">" id="confirm" class="btn-input" onclick="show_checks_list()" data-toggle="modal" data-backdrop="false" style="width: 40px;height:30px;" />
</label>             
                    </div>              
           <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <div class="col-md-12 align-center">
                          <button type="button" class="btn-prop" id="confirm_bt" onclick="frmCofirm()" >Confirm</button>
                            <button type="button" class="btn-prop" id="rej_bt" onclick="frm_cancel()" >Cancel</button>
                            <button type="button" class="btn-prop" id="exit_bt" onclick="frm_exit()" >Exit</button>
                        
             </div>                
            </div>
           </div></div>

    <div id="over" class="overlay" style="display: none; margin-left: 20px; margin-right: 20px;">
    </div>
    <div id="modal" class="modal" style="display: none;">
        <div style="background-color:lightgoldenrodyellow; height: 40px;">
            <div style="width:80%; height: 70%;padding-left:20px;float:left;margin-right: 9px; margin-top: 8px;color:Black;">
                <b style="float:left; margin-left:10px;">CHECKLIST VERIFICATION </b></div><img src="../Images/cancel.png" style="cursor: pointer; cursor: hand; float: right;
            margin-right: 9px; margin-top: 8px; height: 24px;" id='btn_stmtexit' alt="close" onclick="hide()" />
            <br />
             <br />
             <br />
             <br />   
          
           <div class="form-group col-md-12 padding-bottom-10px align-center ">
             <div class="col-md-12 align-center">
                    <table id ="tableDataopt2" border="1" style="border:1px solid black;margin-left:auto;margin-right:auto;" ></table>                
             </div>                
            </div>
                <div class="form-group col-md-12 padding-bottom-10px align-center ">
                        <div class="col-md-12 align-center">
                          <button type="button" class="btn-prop" id="button_confirms" onclick="check_frmCofirm()" style="background-color:darkslategrey">Add</button>
                            <%--<button type="button" class="btn-prop" id="button_cancels" onclick="check_cancel()" style="background-color:darkslategrey">Cancel</button>--%>
                                                
             </div>                
            </div>
          
        </div>
       
    </div>
           </form>
     <input type="hidden" id="hdUserId" runat="server" />
     <input type="hidden" id="hdUserId1" runat="server" />
         <input type="hidden" id="hdBrId"   runat="server" />
     <input type="hidden" id="hd_post"   runat="server" />
</asp:Content>
