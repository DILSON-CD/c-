
<%@ Page Title="" Language="C#" MasterPageFile="ITC.Master" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="ITCPortal.Index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/Index.js"></script>
    <script src="js/createbreak.js"></script>
    <script src="js/QA_home.js"></script>
    <%--Call button--%>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <style>
        .badge {
            position: absolute;
            top: -10px;
            right: -10px;
            padding: 5px 10px;
            border-radius: 50%;
            background: red;
            color: white;
        }

        /*#flex_directn {
            width: 150px;
            height: 150px;
            border: 1px solid #c3c3c3;
            display: flex;
            flex-direction: column;
        }*/


        .fa-phone::before {
            content: "\f095";
            color: #5af25a;
            width: 500px;
            font-size: 35px;
            text-decoration: none !important;
        }

        a:hover {
            color: #0056b3;
            text-decoration: none !important;
        }

        .btns:hover {
            color: black !important;
        }

        .hovereffect:hover {
            background: #f4f6f9;
        }

        .info-box .info-box-icon {
            width: 50px !important;
            height: 50px !important;
        }

        .btn {
            width: 130px;
        }

        .table-bordered td, .table-bordered th {
            padding: 8px;
        }

        .over {
            overflow: auto;
            max-height: 248px;
            height: 248px;
        }

        .progress {
            height: .5rem !important;
        }

        .col-md-3 {
            max-width: 20% !important;
        }

        .background-card {
            padding: 18px;
            background: white;
            border-radius: 8px;
            box-shadow: 0px 0px 5px #00000030;
        }

        @media screen and (min-width: 676px) {
            .modal-dialog {
                max-width: 670px; /* New width for default modal */
            }
        }

        img.iconss {
            width: 280px !important;
        }
    </style>


     <%-- Dialer--%>
        <%--<script src="http://10.4.2.92/dist/bundle.js"></script>--%>
        <script src="http://10.4.2.95/dist/bundle.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="content-wrapper" style="height: max-content;">


     <%--  <div class="box" style="width:100%">
           <div style="width:40px;height:40px;margin-right:10px;display:flex;flex-direction:column">
           <img src="img/break.png" id="disb" style="width:40px;height:40px;margin-right:10px;"/>
               <div class="as3" style="margin-right:30px;width:100px;height:100px;border:1px solid black;border-radius:4px;box-shadow: 0px 4px 4px 0px #aaaaaa,0px 20px 6px 0px #aaaaaa">
               <div>ehfj</div>
               <div>ehfj</div>
               <div>ehfj</div>
                   </div>
           </div>
         
  
      </div>--%>
      <style>
          .box {
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
          }
      </style>
        <script>

            $(document).ready(function () {
                $("#disb").click(function () {
                    $(".as3").toggle();
                });
            });


        </script>



        <!-- Content Wrapper. Contains page content -->
      
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                          
                    

                    </div>
                    <div class="col-sm-4">
                        <div class="row">

                            <div class="col-md-10">


                                <div class="input-group mb-3">
    <input class="form-control"   type="search" placeholder="Search" aria-label="Search" id="txt_search" maxlength="10" onkeypress="return onlyNos(event,this);" onchange="mob_validation(event, this.id);">
    <div class="input-group-append">
      <button class="btn btn-navbar" type="submit" onclick = "search_no()" style="width:auto;background-color: #f2d329;"> 
                                <i class="fas fa-search" "></i></button> 
    </div>
  </div>



                            </div>

                             
                               

                   <%--          <div style="width:40px;height:40px;margin-right:10px;display:flex;flex-direction:column">
           <img src="img/break.png" id="disb" style="width:40px;height:40px;margin-right:10px;"/>
               <div class="as3" style="z-index:700;margin-right:30px;width:100px;height:100px;border:1px solid black;border-radius:4px;box-shadow: 0px 4px 4px 0px #aaaaaa,0px 20px 6px 0px #aaaaaa">
               <div>ehfj</div>
               <div>ehfj</div>
               <div>ehfj</div>
                   </div>
           </div>
                           --%>


                         <%--<div class="input-group input-group-sm">
                           
                            <div class="input-group-append">--%>
                                 <%--<input class="form-control form-control-navbar"  style="width: 75%;"  type="search" placeholder="Search" aria-label="Search" id="txt_search" maxlength="10" onkeypress="return onlyNos(event,this);" onchange="mob_validation(event, this.id);">--%>
                               <%-- <button class="btn btn-navbar" type="submit" onclick = "search_no()">--%>
                                    <%--<i class="fas fa-search" onclick = "search_no() "></i>--%>
                               <%-- </button>--%>
                           <%-- </div>
                        </div>--%>

                            </div>
                    </div>

                    <%--edit0-----------------------------%>
                    <div class="col-sm-2">
                        
                             <div class="dropdown dropleft float-right" id="break_drop">
                                 <div  class="dropdown-toggle" data-toggle="dropdown">
                                <img src="img/break.png" id="disb" style="width:40px;height:40px;margin-right:10px;"/>
                                     <p style="margin-left:13px">Break</p>
                                 </div>
    

    <div class="dropdown-menu">
      <a class="dropdown-item" href="#" onclick="BreakType('LUNCH')">LUNCH</a>
      <a class="dropdown-item" href="#" onclick="BreakType('WASHROOM')">WASHROOM</a>
      <a class="dropdown-item" href="#" onclick="BreakType('FEEDBACK')">FEEDBACK</a>
     
    </div>
  </div>

                        <div class="avl" style="display:none;" >
                            <button type="button" class="btn btn-primary" onclick="BreakType('AVAILABLE')">AVA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ILABEL</button>
                        </div> 


                    </div>
                    <%--edit0-----------------------------%>

                </div>
            </div>
            <!-- /.container-fluid -->
        </section>

        <section class="content" id="contents_from">
            <div id="main">
                   <div class="alert alert-info" id="notif">
  <strong>Alert!</strong> Your QA Remark updation Pending <a href="QA_myremark.aspx" class="alert-link">Click here to update</a>.
</div>
            <div class="container-fluid">
                <div class="row">
                   
                <%---------------------------------------------------------size--%>
               <%-- <div class="row">--%>
                <div id="d1" class="ml-2 mr-2" style="width:150px!important;height:150px!important">



                     <div class="info-box" id="div_1" style="height:100px!important;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                            <span class="badge" id="div_1_notif"> </span>
                            <span class="info-box-icon">
                                <img class="iconss" src="img/3989541.png" /></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Today_Lead_Call')" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible1();" >Today Lead Call</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                 </div>



                    
                                        
<%--                    <div class="col-12 col-sm-6 col-md-6 col-lg-2">--%>
                                     <div id="d2" class="mx-2 " style="width:150px!important;height:150px!important">


                    <div class="info-box" id="div_2" style="height:100px!important;display:flex;flex-direction:column;justify-content:center;align-items:center;">

                             <span class="badge" id="div_2_notif"></span>

                            <span class="info-box-icon " >
                                <img class="iconss" src="img/TodayFollowupCall.png" style="width:30px !important"/></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Today_Followup_Call')" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible2();" style="font-size:14px;">Today Lead Followup Call</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>


                </div>
<%--                <div class="col-12 col-sm-6 col-md-6 col-lg-2">--%>
                <div  id="d3"class=" mx-2" style="width:150px!important;height:150px!important">



                    <div class="info-box" id="div_3" style="height:100px!important;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                             <span class="badge" id="div_3_notif"></span>
                            <span class="info-box-icon  ">
                                <img class="iconss" src="img/recruitment.png" /></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Pending_Lead_Call')" style="text-align:center;font-size:14px">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible3();">Pending Lead Call</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>


                    
                </div>            
<%--                  <div class="col-12 col-sm-6 col-md-6 col-lg-2">--%>
                <div id="d4" class=" mx-2" style="width:150px!important;height:150px!important">




                     <div class="info-box" id="div_4" style="height:100px!important;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                             <span class="badge" id="div_4_notif"></span>
                            <span class="info-box-icon">
                                <img class="iconss" src="img/7969971.png" /></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Pending_Followup_Call')" style="text-align:center;;font-size:14px">
                                <%--<span class="info-box-text">Task Assigning</span>--%>

                                <a href="#" class="btns" onclick="visible4();">Pending Followup Lead Call</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>




                </div>
<%--                <div class="col-12 col-sm-6 col-md-6 col-lg-2">--%>

                    <%------------------------------------------------------------------today non-contact--%>

                    <div id="d8" class=" mx-2" style="width:150px!important;height:150px!important">
                     <div class="info-box" id="div_8" style="height:100px!important;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                             <span class="badge" id="div_8_notif"></span>
                            <span class="info-box-icon">
                                <img class="iconss" src="img/NonContactable.png" /></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Today_Non_Contactable_Call')" style="text-align:center;font-size:14px;">
                                <a href="#" class="btns" onclick="visible8();">Today Non Contactable </a>
                            </div>
                        </div>
	            </div>


                    <%------------------------------------------------------------------today non-contact--%>










                <div id="d5" class=" mx-2" style="width:150px!important;height:150px!important">




                     <div class="info-box" id="div_5" style="height:100px!important;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                             <span class="badge" id="div_5_notif"></span>
                            <span class="info-box-icon">
                                <img class="iconss" src="img/NonContactable.png" /></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Non_Contactable_Call')" style="text-align:center;font-size:14px">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible5();">Non Contactable </a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>




	            </div>



                    <%--changes----------------------------------------------%>
                   <%-- </div>--%>
               <%-- <div class="row">--%>
                    <%--changes----------------------------------------------%>




<%--                <div class="col-12 col-sm-6 col-md-6 col-lg-2">--%>
                <div id="d6" class="ml-2 mr-2" style="width:150px!important;height:150px!important">

                     <div class="info-box" id="div_6" style="height:100px!important;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                             <span class="badge" id="div_6_notif"></span>
                            <span class="info-box-icon mt-3" style="opacity:0.7">
                                <img class="iconss" src="img/crm.png" />
                         <%--<i class="fas fa-mobile" style="font-size:30px;opacity:0.5"></i>--%></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'crm_lead_call')" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible6();">CRM </a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                  </div>



                  <%--callback-------------------------------------------------------------%>

<%--                    <div class="col-12 col-sm-6 col-md-6 col-lg-2">--%>
                <div id="d7" class="mx-2 " style="width:150px!important;height:150px!important">

                     <div class="info-box" id="div_7" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px!important">
                             <span class="badge" id="div_7_notif"></span>
                            <span class="info-box-icon mt-2" style="opacity:0.7">
                               <img class="iconss" src="img/callback.png" />
                          <%--<i class="fas fa-mobile" style="font-size:30px;opacity:0.5"></i>--%></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'callback_lead_call')" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible7();">Call Back </a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                  </div>


                  <%--end callback-------------------------------------------------------------%>

<%--                    -----------------------------ogl--%>
                    <div id="d10" class="mx-2 " style="width:150px!important;height:150px!important">

                     <div class="info-box" id="div_10" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px!important">
                             <span class="badge" id="div_10_notif"></span>
                            <span class="info-box-icon mt-2" style="opacity:0.7">
                               <img class="iconss" src="img/3989541.png" />
                          <%--<i class="fas fa-mobile" style="font-size:30px;opacity:0.5"></i>--%></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'callback_ogl_call')" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible100();"> ogl Call Back </a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                  </div>


<%--                    --------------------------------ogl--%>

                     
                      <div id="d9" class="mx-2 " style="width:150px!important;height:150px!important">

                     <div class="info-box" id="div_9" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px!important">
                             <span class="badge" id="div_9_notif"></span>
                            <span class="info-box-icon mt-2" style="opacity:0.7">
                               <img class="iconss" src="img/lostcust.png" />
                          <%--<i class="fas fa-mobile" style="font-size:30px;opacity:0.5"></i>--%></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'lostcustomer_lead_call')" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible9();">Lost customer</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                  </div>

                    <div id="d101" class="mx-2 " style="width:150px!important;height:150px!important">

                     <div class="info-box" id="div_101" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px!important">
                             <span class="badge" id="div_101_notif"></span>
                            <span class="info-box-icon mt-2" style="opacity:0.7">
                               <img class="iconss" src="img/redemption.png" />
                          <%--<i class="fas fa-mobile" style="font-size:30px;opacity:0.5"></i>--%></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Redemption_lead_call')" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible10();">Redemption </a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                  </div>

                     <div id="d103" class="mx-2 " style="width:150px!important;height:150px!important">

                     <div class="info-box" id="div_103" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px!important">
                             <span class="badge" id="div_103_notif"></span>
                            <span class="info-box-icon mt-2" style="opacity:0.9">
                               <%--<img class="iconss" src="img/redemption.png" />--%>
                                <img class="iconss" src="img/red_callback.png" />

                          <%--<i class="fas fa-mobile" style="font-size:30px;opacity:0.5"></i>--%></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Redemption_non_callback')" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="visible12();">Redemption callback </a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                  </div>



                     <div id="d102" class="mx-2 " style="width:150px!important;height:150px!important">

                     <div class="info-box" id="div_102" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px!important">
                             <span class="badge" id="div_102_notif"></span>
                            <span class="info-box-icon mt-2" style="opacity:0.9">
                               <img class="iconss" src="img/campagin.png" />
                          <%--<i class="fas fa-mobile" style="font-size:30px;opacity:0.5"></i>--%></span>
                            <div class="info-box-content" onclick="" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="campagin_call_form.aspx" class="btns" onclick="visible11();">Other Campaign </a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                  </div>


       

                <%--</div>--%>

                <%---------------------------------------------------------size--%>
              
 
               

<%--            ----------------dilson----------------------%>
<%--            <div class ="row">--%>
             <div class="mx-2 " id="d303" style="width:150px!important;height:150px!important">

                     <div class="info-box" id="div_303" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px!important">
                             <span class="badge" id="div_303_notif"></span>
                            <span class="info-box-icon mt-2" style="opacity:0.9">
                               <img class="iconss" src="img/misdcall.png" />
                          <%--<i class="fas fa-mobile" style="font-size:30px;opacity:0.5"></i>--%></span>
                           <div class="info-box-content" onclick="" style="text-align:center;">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="crcMisscall.aspx" class="btns" onclick="visible13();">miss call </a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>

          </div>
            <%-------------------------------------%>
                      <%------------------------------------------------------------------redemp non-contact--%>

                    <div id="d403" class=" mx-2" style="width:150px!important;height:150px!important">
                     <div class="info-box" id="div_403" style="height:100px!important;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                             <span class="badge" id="div_403_notif"></span>
                            <span class="info-box-icon mt-2" style="opacity:0.9">
                                <img class="iconss" src="img/NonContactable.png" /></span>
                            <div class="info-box-content" onclick="LeadDetails(0,'Redemption_non_contact')" style="text-align:center;font-size:14px;">
                                <a href="#" class="btns" onclick="visible14();">Redemption Non Contactable </a>
                            </div>
                        </div>
	            </div>
                    </div>
</div>
<%--            </div>--%>
                
                 </div>
                    <%------------------------------------------------------------------redemp non-contact--%> 
              
            



                <div class="row">
                    <div class="col-md-12" id="div_Today_Lead_call">
                        <!-- Assigned Task Lists -->
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <%--<div class="col-sm-6">--%>
                                    <h5>Today Lead Call </h5>
                                    <%--</div>--%>
                                </div>
                            </div>
                            <!-- /.container-fluid -->
                        </section>
                        <div class="background-card cbh">
                            <div class="row-col-md-12 ">
                                <%----over--%>
                                <div class="card-body">


                                    <div class="row">
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Lead Name...</label>

                                            <input type="text" id="txt_leadName" class="form-control" title="Lead Name" maxlength="199" readonly="readonly">
                                        </div>

                                        <div class="form-group col-sm-5" style="padding-left: 0;">
                                            <label>Phone Number...</label>

                                            <input type="text" id="txt_phn" class="form-control" title="Phone Number" maxlength="199" readonly="readonly">
                                        </div>
                                        <div class="form-group col-sm-1" style="padding-left: 0;" id="div_Call_i">
                                            <label>....Call....</label>


                                             
                                                


                                             <a data-toggle="tooltip" href="javascript:void(0)"  id="calllink1"  >
                                                <%--<img src="img/phone_call.png" onclick="Call_initiated()"/>--%>
                                                <%--<img src="img/phone_call.png" id="callimage" onclick="Call_initiated()"/>--%>

                                                <button class="btn btn-primary" id="callimage" onclick="Call_initiated()" style="width:80px;">call</button>
                                                <button class="btn btn-danger" id="callporgress"  style="display:none;width:100px;">Inprogress</button>


                                               <%-- <img src="img/phone_call.png" id="callimage" onclick="Call_initiated()"/>--%>
                                                <%--<a data-toggle="tooltip" href="https://fontawesomeicons.com/phone" onclick="Call_initiated()"><i class="form-control fa fa-phone"  style ="font-size: 2rem; display: contents"></i>--%>
                                                <br>
                                                <%--Call--%></a>

                                        </div>


                                    </div>
                                    <div class="row">
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Lead Source...</label>

                                            <input type="text" id="txt_leadsource" class="form-control" title="Lead Source..." maxlength="199" readonly="readonly">
                                        </div>

                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Product Interested...</label>

                                            <input type="text" id="txt_productIntrstd" class="form-control" title="Product Interested" maxlength="199" readonly="readonly">
                                        </div>
                                    </div>
                                   
                                       <div class="row">
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Branch ID...</label>

                                            <input type="text" id="txt_Brid" class="form-control" title="Branch ID..." maxlength="199" readonly="readonly">
                                        </div>

                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Branch ...</label>

                                            <input type="text" id="txt_brnch" class="form-control" title="Branch" maxlength="199" readonly="readonly">
                                        </div>

                                    </div>
                                     <div class="row">
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>State...</label>

                                            <input type="text" id="txt_State" class="form-control" title="Branch ID..." maxlength="199" readonly="readonly">
                                        </div>

                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Language ...</label>

                                            <input type="text" id="txt_lang" class="form-control" title="Branch" maxlength="199" readonly="readonly">
                                        </div>

                                    </div>
                                    
                                    
                                    <div class="row">
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Lead Date...</label>

                                            <input type="text" id="txt_leadDate" class="form-control" title="Lead Date" maxlength="199" readonly="readonly">
                                        </div>

                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Customer Type...</label>

                                            <input type="text" id="txt_CusType" class="form-control" title="Customer Type" maxlength="199" readonly="readonly">
                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Lead Type...</label>

                                            <input type="text" id="txt_TodayleadType" class="form-control" title="Lead Type" maxlength="199" readonly="readonly">
                                        </div>
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Amount...</label>

                                            <input type="text" id="txt_ReqAmt" class="form-control" title="Lead Type" maxlength="199" readonly="readonly">
                                        </div>
                                    </div>
                                       <div class="row" style="display:none" id="redemp_1">
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Gold Released Date...</label>

                                            <input type="text" id="txt_relesdt" class="form-control" title="Lead Date" maxlength="199" readonly="readonly">
                                        </div>

                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Customer ID...</label>

                                            <input type="text" id="txt_Cusid" class="form-control" title="Customer Type" maxlength="199" readonly="readonly">
                                        </div>
                                    </div>
                                      <div class="row" style="display:none" id="redemp_2">
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Pledge Number...</label>

                                            <input type="text" id="txt_pldno" class="form-control" title="Lead Date" maxlength="199" readonly="readonly">
                                        </div>

                                     <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Released Amount...</label>

                                            <input type="text" id="txt_relamnt" class="form-control" title="Lead Date" maxlength="199" readonly="readonly">
                                        </div>
                                    </div>
                                       <div class="row" style="display:none" id="redemp_3">
                                                                       <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Released Inventory count...</label>

                                            <input type="text" id="txt_invcnt" class="form-control" title="Lead Date" maxlength="199" readonly="readonly">
                                        </div>
                                           </div>

                                    <div class="panel-group align-center padding-bottom-10px" style="margin-left:-15px;">
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h3 class="panel-title align-left"><a data-toggle="collapse" href="#collapse4" style="font-weight:bolder;color:black;">Previous Remarks</a></h3>
                                            </div>
                                            <div id="collapse4" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <table class="table table-hover table-bordered" id="tableremarks">
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                    <label class="form-group col-sm-12" style="text-align:center;display:none" id="lbl_NoData">NO DATA FOUND</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" id="div_F2" style="display: none">
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Last FollowUp Date...</label>

                                            <input type="text" id="txt_LastFollowUp_Date" class="form-control" title="Last FollowUp Date" maxlength="199" readonly="readonly">
                                        </div>

                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Last FollowUp Status...</label>

                                            <input type="text" id="txt_LastFollowUp_Status" class="form-control" title="Last FollowUp Status" maxlength="199" readonly="readonly">
                                        </div>
                                    </div>




                                    <div class="row" id="div_response">

                                        <div class="form-group col-sm-3" style="padding-left: 0;"></div>
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Call Response...</label>
                                            <select class="form-control select2" id="ddl_response" onchange="response()" style="width:500px">
                                                <%-- <option value="-1">Select</option>--%>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-3" style="padding-left: 0;"></div>
                                    </div>








                                    <%-------------------------------------------start redemption drop---------------------------------------------------------------------%>
                                   
                                    
                                    <div class="row" id="div_redmp_response" style="display:none">

                                        <div class="form-group col-sm-3" style="padding-left: 0;"></div>
                                        <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Call Response...</label><br />
                                            <select class="form-control select2" id="ddl_redmp_response" onchange="redmp_response()" style="width:500px">
                                                <%-- <option value="-1">Select</option>--%>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-3" style="padding-left: 0;"></div>
                                    </div>


                                    
                                    <div style="display: none" id="div_fu_details2">




                                        <div class="row">
                                            <b><u>Enter  Details...</u><br />
                                                <br />
                                            </b>
                                        </div>
                                        <div class="row">


                                            <div class="form-group col-sm-12" style="padding-left: 0;">
                                                <label>Followup Status</label>
                                                <select class="form-control select2" id="redemp_ddl_followup" style="width: 100%" onchange="redemp_followup()">
                                                    <%--<option value="-1">Select
                                                    </option>--%>
                                                </select>
                                            </div>

  
                                        </div>


                                       

                                      

                                        <%--<div class="row" id="div_12" style="display: none">--%>
                                        <div class="" id="red_div_12" style="display:none ">
                                          
                                          <div class="row">
                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Release Reason</label>
                                                <select class="form-control select2" id="redemp_release_res" style="width: 100%" onchange="">
                                                    <%--<option value="-1">Select
                                                    </option>--%>
                                                </select>
                                            </div>  
                                       <%-- </div>
                                          <div class="row">--%>
                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Rating</label>
                                                <select class="form-control select2" id="redemp_rating" style="width: 100%" onchange="">
                                                    <option value="1">Excellent</option>
                                                    <option value="2">Good</option>
                                                    <option value="3">Average</option>
                                                    <option value="4">Poor</option>
                                                </select>
                                            </div>  


                                              <br />
                                              <br />
                                              <br />


                                              <div class="col-sm-6">
                                                            <label style="font-size:20px;">Whether customer willing to comeback?</label>


                                              </div>
                                               <div class="col-sm-6" style="margin-bottom:20px;">

                                                  <%-- <span class="form-check-inline" >--%>
                                                             <form id="cu_st">
                                                            <span style="margin:0px 10px 0px 10px;">
                                                             <input class="form-check-input" type="radio" name="cust_st" value="1"/>
                                                              <label class="form-check-label" for="flexRadioDefault2">YES </label>

                                                            </span>
                                                            <span style="margin:0px 10px 0px 10px;">

                                                             <input class="form-check-input" type="radio" name="cust_st" value="0"/>
                                                              <label class="form-check-label" for="flexRadioDefault2">NO </label>
                                                            </span>
                                                                 </form>
                                                       <%-- </span>--%>





                                              </div>


                                        </div>


                                          
                                        </div>
                                        <div class="row">
                                            <%--<label>Remarks</label>--%>
                                            <textarea class="form-control" rows="2" id="red_txt_Remarks" placeholder="Remarks" onkeyup="return isNumber(event, this.id)"></textarea>
                                        </div>
                                    </div>




                                    
                                    
                                    <%-------------------------------------------end start redemption drop---------------------------------------------------------------------%>





                                    <div style="display: none" id="div_fu_details">




                                        <div class="row">
                                            <b><u>Enter Lead Follow-up Details...</u><br />
                                                <br />
                                            </b>
                                        </div>
                                        <div class="row">


                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Followup Status</label>
                                                <select class="form-control select2" id="ddl_followup" style="width: 100%" onchange="followup()">
                                                    <%--<option value="-1">Select
                                                    </option>--%>
                                                </select>
                                            </div>


                                            <div class="form-group col-sm-6" style="padding-left: 0;" >
                                                <label>Product Interested</label>

                                                <select class="form-control select2" id="ddl_prdct" style="width: 100%;" onchange="loadbanknbfc()">
                                                    <option value="-1">Select</option>
                                                </select>

                                            </div>



   <%------------------------------------------------------------------bank----nbfc--%>   

                                      
                                            <div class="form-group col-sm-12" style="padding-left: 0;display:none" id="div_bankndfc">
                                                <label>BANK/NBFC NAME</label>

                                                <select class="form-control select2" id="ddl_banknbfc" style="width: 100%;">
                                                    <%--  <option value="-1">Select</option>--%>
                                                </select>

                                            </div>      


<%------------------------------------------------------------------end bank----nbfc--%>

                                             <%------------------------------------------------------------------bank----nbfc--%>   

                                      
                                            <div class="form-group col-sm-12" style="padding-left: 0;" id="div_personalL">
                                                <label>EMPLOYEEMENT PROFILE OF THE CUSTOMER:</label>

                                                <select class="form-control select2" id="ddl_personalL" style="width: 100%;">
                                                    <%--  <option value="-1">Select</option>--%>
                                                </select>

                                            </div>      


<%------------------------------------------------------------------end bank----nbfc--%>



                                        </div>


                                        <div class="row" id="div_14" style="display: none">

                                            <%-- <div class="form-group col-sm-6" style="padding-left: 0;">
                                            <label>Lead Priority</label>


                                            <select class="form-control select2" id="ddl_priority">
                                                <option value="-1">Lead Priority
                                                </option>
                                            </select>

                                        </div>--%>




                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Customer Email Id..</label>

                                                <input type="text" id="txt_Email" class="form-control" title="Customer Email ID" placeholder="example@gmail.com" maxlength="199" onchange="validateEmailAddress()">
                                            </div>


                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>New Contact No(if any)</label>

                                                <input type="text" id="txt_New_no" class="form-control" placeholder="New Contact No(if any)" title="New No" onkeypress="return onlyNos(event,this);" maxlength="10" onchange="mob_validation(event, this.id);">
                                            </div>
                                        </div>

                                        <div class="row" id="div_11" style="display: none">

                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Branch</label>


                                                <select class="form-control select2" id="ddl_branch" onchange="branch_details('ddl_branch')" style="width: 100%">
                                                    <%-- <option value="-1">Select
                                                    </option>--%>
                                                </select>

                                            </div>




                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <div class="row">
                                                    <div class="form-group col-sm-3">
                                                        <label>Branch ID</label>

                                                        <input type="text" id="txt_Branch_id" class="form-control" maxlength="199" readonly="readonly">
                                                    </div>
                                                    <div class="form-group col-md-9">
                                                        <label>Branch Address</label>
                                                        <textarea class="form-control" rows="2" id="txt_Br_add" title="Br_add" style="background-color: #fff;" readonly="readonly"></textarea>

                                                    </div>

                                                </div>


                                            </div>




                                        </div>

                                        <div class="row" id="div_12" style="display: none">
                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Area</label>

                                                <input type="text" id="txt_Area" class="form-control" title="Area" maxlength="199" readonly="readonly">
                                            </div>


                                            <div class="form-group col-sm-6" style="padding-left: 0;">


                                                <label>Region</label>

                                                <input type="text" id="txt_Region" class="form-control" title="Region" maxlength="199" readonly="readonly">
                                            </div>



                                        </div>


                                        <div class="row" id="div_13" style="display: none">

                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Next Follow Up Date</label>


                                                <input type="date" id="txt_flwup_date" class="form-control" title="Next follow up Date" placeholder="dd/mmm/yyyy">
                                            </div>

                                             <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Followup Time(hours)</label>


                                               <select class="form-control select2" id="ddl_time" onchange="branch_details('ddl_branch')" style="width: 100%">
                                                     <option value="-1">Select </option>
                                                    <%-- <option value="1">1  </option>
                                                     <option value="2">2  </option>
                                                     <option value="3">3  </option>
                                                     <option value="4">4  </option>
                                                     <option value="5">5  </option>
                                                     <option value="6">6  </option>
                                                     <option value="7">7  </option>--%>
                                                     <option value="8">08  </option>
                                                     <option value="9">09  </option>
                                                     <option value="10">10  </option>
                                                     <option value="11">11  </option>
                                                     <option value="12">12  </option>
                                                     <option value="12">13  </option>
                                                     <option value="12">14  </option>
                                                     <option value="12">15  </option>
                                                     <option value="12">16  </option>
                                                     <option value="12">17  </option>
                                                     <option value="12">18  </option>
                                                     <option value="12">19  </option>
                                                     
                                                      
                                                </select>
                                            </div>




                                        </div>






                                        <%---------------------------------------------------------------Additional weight & Amount Field--%>


                                       <div id="div_16" style="display:none" >              <%--  style="display:none"--%>
                                           <div class="row">
                                            <div class="form-group col-sm-6" style="padding-left: 0;">
                                                <label>Pledge weight</label>

                                                <input type="text" id="add_weight" class="form-control" title="Weight" maxlength="199" >

                                            </div>

                                             <div class="form-group col-sm-6" >
                                                <label>Pledge Amount</label>

                                                <input type="text" id="add_amount" class="form-control" title="amount"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  >           <%--  <maxlength=""--%>

                                            </div>
                                           </div>
                                           <%--------------------------------------------------%>
                                        </div>



                                        <%---------------------------------------------------------------Additional weight & Amount Field--%>

                                        <div class="row">

                                            <label>Remarks</label>
                                            <textarea class="form-control" rows="2" id="txt_Remarks" placeholder="Remarks" onkeyup="return isNumber(event, this.id)"></textarea>





                                        </div>


                                    </div>





                                    <div class="row" style="align-content: center">


                                        </div>
                                    </div>


                                        </div>


                                <div style="display:flex;justify-content:center;align-content:center">
                                        <button style="width: 15%; margin: 1.25rem;" type="button" class="btn btn-primary" id="btn_confirm" onclick="Confirm()">Confirm</button>

                                        <button style="width: 15%; margin: 1.25rem;" type="button" class="btn btn-danger" id="btn_Exit" onclick="Exit()" >Exit</button>
                                    </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <br />

            </div>




        </section>





    </div>
    <!-- Modal -->
    <div id="ModeModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <%--     <div class="modal-header">
                        <button type="button" class="close" style="text-align:left;" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Custom Mode Here.!</h4>
                    </div>--%>
                <div class="modal-body">

                    <div class="row col-sm-12 form-group">
                        <label>Choose your report here..!<span class="required text-danger"></span> </label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="ClickReportHere(1);">Task Status Report</button>
                    <button type="button" class="btn btn-primary" onclick="ClickReportHere(3);">Meeting Status Report</button>
                    <button type="button" class="btn btn-success" onclick="ClickReportHere(2);">Daily Work Report</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="ClearData();">Cancel</button>
                </div>
            </div>

        </div>
    </div>

    <script>

        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2()

            //Initialize Select2 Elements
            $('.select2bs4').select2({
                theme: 'bootstrap4'
            })
            //Bootstrap Duallistbox
            $('.duallistbox').bootstrapDualListbox()

        })

    </script>

    <input id="hdUserId" type="hidden" runat="server" />
    <input id="hdBranchId" type="hidden" runat="server" />
    <input id="hdFirmId" type="hidden" runat="server" />
    <input id="hdSesssion" type="hidden" runat="server" />
    <input id="hdNoteID" type="hidden" runat="server" />
    <input id="hddata" type="hidden" runat="server" />
    <input id="work_id" type="hidden" runat="server" />
    <input id="Task_Id" type="hidden" runat="server" />
    <input id="Sub_Task_Id" type="hidden" runat="server" />
    <input id="hdType" type="hidden" runat="server" />
    <input id="hd_lead_id" type="hidden" runat="server" />
    <input id="hd_lead_Followup_id" type="hidden" runat="server" />
    <input id="hd_type_selected" type="hidden" runat="server" />
    <input id="hd_call_click" type="hidden" runat="server" />
     <input id="Hidden1" type="hidden" runat="server" />


    <%--for status--------------------------%>
     <input id="hd_cdispos" type="hidden" runat="server" />
    <%--for status--------------------------%>



    <%--for status--------------------------%>
    <input id="hd_product_status" type="hidden" runat="server" />
    <input id="hd_tab_flag" type="hidden" runat="server" />
        


    <input id="hdtabNmae" type="hidden" runat="server" />


    

    <%--for status--------------------------%>



      <%-- Dialer --%>
         <input id="hdvExtensionNo" type="hidden" runat="server" />
      
        <script src="js/Dialer/client.js"></script>

</asp:Content>
