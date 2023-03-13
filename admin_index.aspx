<%@ Page Title="" Language="C#" MasterPageFile="~/ADMIN.Master" AutoEventWireup="true" CodeBehind="admin_index.aspx.cs" Inherits="ITCPortal.admin_index" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/admin.js"></script>
     <%--Call button--%>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
   
    <style>
        .fa-phone::before {
    content: "\f095";
    color: #5af25a;
    width: 500px;
    font-size: 35px;
    text-decoration:none!important;
}

       a:hover {
    color: #0056b3;
    text-decoration: none!important;
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
                  width: 76px!important;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="content-wrapper" style="height: max-content;">
        <!-- Content Wrapper. Contains page content -->

        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h4>Home</h4>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item active">Dashbord</li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <!-- /.col -->
                    <div class="col-md-3">
                        <div class="info-box" id="div_1">
                            <span class="info-box-icon">
                                <img class="iconss" src="img/bucket-icon-.jpg" /></span>
                            <div class="info-box-content">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="addnew_bucket();">ADD NEW BUCKET</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <div class="col-md-3">
                        <div class="info-box" id="div_2">
                            <span class="info-box-icon bg-success">
                                <img class="iconss" src="img/R.png" /></span>
                            <div class="info-box-content">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="Edit_bucket();">EDIT BUCKET</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>

                    <div class="col-md-3">
                        <div class="info-box" id="div_3">
                            <span class="info-box-icon">
                                <img class="iconss" src="img/replace_emp.jpg" /></span>
                            <div class="info-box-content">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="replace_emp();">REPLACE EMPLOYEE</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                      <div class="col-md-3">
                        <div class="info-box" id="div_4">
                            <span class="info-box-icon">
                                <img class="iconss" src="img/assurance.png"  /></span>
                            <div class="info-box-content">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="switchQA();">QUALITY ANALYTICS</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>


                   <%-- <div class="col-md-3" style="display:none">
                        <div class="info-box" id="div_4">
                            <span class="info-box-icon">
                                <img class="iconss" src="img/editemp.jfif" /></span>
                            <div class="info-box-content">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
<%--                                <a href="#" class="btns" onclick="visible4();">EDIT EMPLOYEE</a>--%>
                                <!-- <span class="info-box-number">410</span> -->
<%--                            </div>--%>
                            <!-- /.info-box-content -->
<%--                        </div>--%>
                        <!-- /.info-box -->
<%--                    </div>--%>
                    
                    <div class="col-md-3">
                        <div class="info-box" id="div_5">
                            <span class="info-box-icon">
                                <img class="iconss" src="img/upload_img.png" /></span>
                            <div class="info-box-content">
                                <%--<span class="info-box-text">Task Assigning</span>--%>
                                <a href="#" class="btns" onclick="upload();">UPLOAD FILE</a>
                                <!-- <span class="info-box-number">410</span> -->
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-12" style="display: none" id="div_addbucket">
                        <!-- Assigned Task Lists -->
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <%--<div class="col-sm-6">--%>
                                    <h5>CREATE NEW BUCKET</h5>
                                    <%--</div>--%>
                                </div>
                            </div>
                            <!-- /.container-fluid -->
                        </section>
                        <div class="background-card">
                            <div class="row-col-md-12 ">
                                <%----over--%>
                                <div class="card-body">


                                    <div class="row">
                                        <div class="form-group col-sm-2" style="padding-left: 0;">
                                            <label>Select Language..</label>
                                            </div>
                                         <div class="form-group col-sm-3" style="padding-left: 0;">
                                            <select class="form-control select2" id="ddl_buckt1"  style="width:100%" onchange="fixLan();">
                                                <option value="-1"></option>
                                            </select>
                                        </div>
                                          <div class="form-group col-sm-2" style="padding-left: 0;">
                                            <label>Select Employee..</label>
                                            </div>
                                          <div class="form-group col-sm-3" style="padding-left: 0;">
                                            <select class="form-control select2" id="ddl_emp" style="width:100%">
                                                <option value="-1"></option>
                                            </select>
                                        </div>
                              <div class="form-group col-sm-2" style="padding-left: 0;">
                                          <button type="button" class="btn btn-danger btn-block" onclick="button_ext()"><span style="margin-right: 5px"></span>Cancel</button>
                              </div>
                                    </div>
                                   
                                     <div class="row">
                                         <div  class="form-group col-sm-3"></div>
                                            <div  class="form-group col-sm-4" >
           <button style="width: 100%; margin: 1.25rem;" type="button" class="btn btn-light" id="btn_add"  onclick="addbucket()">ADD</button>

                                     </div>

                                         </div>
                                    <div class="row">
                                        <div class="col-md-12 align-content-center">
                                            <table class="table table-hover table-bordered" id="tabadd">
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                      <div class="row">
                                            <div  class="form-group col-sm-3"></div>
                                          <div  class="form-group col-sm-3"> <label>Enter size of bucket..</label></div>
                                          <div class="form-group col-sm-3">
                                              <input type="text" id="txt_bucketsize" class="form-control" title="bucket size" onkeypress="return onlyNos(event,this);" maxlength="6" >
                                          </div>
                                      </div>
                                    <div class="row" id="div_addconfirm" style="display:none" >
                                        <div class="row col-sm-3"></div>
                                        <div class="row col-sm-3" >
                                            <button style="width: 70%; margin: 1.25rem;" type="button" class="btn btn-primary" id="btn_confirm1" onclick="confirm_newbucket()">Confirm</button>
                                        </div>
                                        <div class="row col-sm-3">
                                            <button style="width: 100%; margin: 1.25rem;" type="button" class="btn btn-danger" id="btn_Exit1" onclick="button_ext()">Exit</button>
                                        </div>
                                        <div class="row col-sm-3"></div>
                                    </div>




                                </div>

                            </div>

                        </div>
                    </div>
                    <br />

                </div>
                <div class="row">
                    <div class="col-md-12" style="display: none" id="div_editbucket">
                        <!-- Assigned Task Lists -->
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <%--<div class="col-sm-6">--%>
                                    <h5>EDIT BUCKET</h5>
                                    <%--</div>--%>
                                </div>
                            </div>
                            <!-- /.container-fluid -->
                        </section>
                        <div class="background-card">
                            <div class="row-col-md-12 ">
                                <%----over--%>
                                <div class="card-body">


                                    <div class="row">
                                        <div class="form-group col-sm-2" style="padding-left: 0;">
                                            <label>Select Bucket</label>
                                            </div>
                                         <div class="form-group col-sm-4" style="padding-left: 0;">
                                            <select class="form-control select2" id="ddl_editbuckt" style="width:100%" onchange="change_table();">
                                                <option value="-1">select Bucket</option>
                                            </select>
                                        </div>

                                      
                                    </div>
                                    <div class="row">
                                         <div class="form-group col-sm-2" style="padding-left: 0;">
                                            <label>Select Employee/Bucket</label>
                                            </div>
                                         <div class="form-group col-sm-4" style="padding-left: 0;">
                                            <select class="form-control select2" id="ddl_editemplang" style="width:100%" onchange="change_text();">
                                                <option value="-1">---------SELECT----------</option>
                                                <option value="0">EDIT EMPLOYEE</option>
                                                <option value="1">EDIT BUCKET</option>
                                            </select>
                                        </div>
                                    </div>
                                   
                                    <div style="display:none" id="divedit_button">
                                    <div class="row" >
                                        <div class="col-sm-3"></div>
                                              <div class="col-sm-8"> <button style="width: 70%;align-content:center;font-family:'Leelawadee UI';font-display:block;color:darkblue; margin: 1.25rem;" type="button" class="btn btn-light" id="btn_editbucket"  onclick="edit_buck()">Click here for adding more employee to selected bucket</button>

                                   </div> <div class="col-sm-4"></div> </div>
                                     <div class="row">
                                        <div class="col-md-12 align-content-center">
                                            <table class="table table-hover table-bordered" id="tab_bucket">
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div id="divhide" style="display:none">
                                   
                                        <div class="row" style="height:30px"></div>
                                  
                                     <div class="row" style="height:30px"></div>
                                      <div class="row" >
                                         <div class="form-group col-sm-2" style="padding-left: 0;">
                                   <label>* Select Employee</label></div>
                                           <div class="form-group col-sm-4" style="padding-left: 0;">
                                              <select class="form-control select2" id="ddl_selectemp" style="width:100%" onchange="show_editadd()">
                                                <option value="-1">select Employee</option>
                                            </select>
                                         </div>
                                    </div>
                                          
                                          <div class="row" style="display:none" id="divadd_button">
                                        <div class="col-sm-4"></div>
                                        <div class="col-sm-4"><button style="width: 40%;align-content:center;font-family:'Leelawadee UI';font-display:block;color:darkgreen; margin: 1.25rem;" type="button" class="btn btn-light" id="btn_editadd"  onclick="edit_addbuck()">✓add</button></div>
                              </div>
                                              </div>
                                    </div>
                                    <div class="row" Id="div_radio" style="display:none">
                                        <div class="form-group col-sm-4" style="padding-left: 0;">
                                         <label style="font-family:Cambria;font-size:medium;color:red">Do you want to edit bucket size</label></div>
                                          <div class="col-sm-1"><label>YES</label></div><div class="col-sm-1"><input type="radio" name="dlradio" id="rb_yes"  onclick="show_bucketsize();"/></div>
                                        <div class="col-sm-1"><label>NO</label></div><div class="col-sm-1"><input type="radio" name="dlradio" id="rb_no" onclick="hide_bucketsize();"/></div>
                                    </div>
                                    <div style="display:none" id="div_txt">
                                    <div class="row" id="current_bucketsize"  >
                                       <div class="form-group col-sm-2" style="padding-left: 0;">
                                             
                                   <label style="color:darkblue"> Current bucket size:</label></div>
                                           <div class="form-group col-sm-4" style="padding-left: 0;">
                                               <input type="text" id="txt_curentsize" class="form-control" title="bucket size" readonly="readonly">
                                          
                                         </div>
                                    </div>
                                    <div class="row" id="div_bucketsize"  >
                                       <div class="form-group col-sm-2" style="padding-left: 0;">
                                             
                                   <label style="color:darkblue"> Enter bucket size:</label></div>
                                           <div class="form-group col-sm-4" style="padding-left: 0;">
                                               <input type="text" id="txt_editsize" class="form-control" title="bucket size" onkeypress="return onlyNos(event,this);" maxlength="6" >
                                          
                                         </div>
                                    </div> 
                                        </div>

                                            <div class="row">
                                        <div class="col-md-12 align-content-center">
                                            <table class="table table-hover table-bordered" id="tabeditadd">
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div class="row"  id="divedit_buck">
                                        <div class="row col-sm-3"></div>
                                        <div class="row col-sm-3">
                                            <button style="width: 100%; margin: 1.25rem;" type="button" class="btn btn-primary" id="btn_editconfirm" onclick="confirm_editbucket()">Confirm</button>
                                        </div>
                                        <div class="row col-sm-3">
                                            <button style="width: 100%; margin: 1.25rem;" type="button" class="btn btn-danger" id="btn_editExit" onclick="button_ext()">Exit</button>
                                        </div>
                                        <div class="row col-sm-3"></div>
                                    </div>




                                </div>

                            </div>

                        </div>
                    </div>
                    <br />

                </div>
               <div class="row">
                    <div class="col-md-12" style="display: none" id="div_xchange_emp">
                        <!-- Assigned Task Lists -->
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <%--<div class="col-sm-6">--%>
                                    <h5>EXCHANGE EMPLOYEES</h5>
                                    <%--</div>--%>
                                </div>
                            </div>
                            <!-- /.container-fluid -->
                        </section>
                        <div class="background-card">
                            <div class="row-col-md-12 ">
                                <%----over--%>
                                <div class="card-body">
                                    <div id="div_xchange">

                                     <div class="row" >
                                       <div class="form-group col-sm-3" style="padding-left: 0;">
                                             
                                   <label>ENTER EMPLOYEE CODE:</label></div>
                                           <div class="form-group col-sm-4" style="padding-left: 0;">
                                               <input type="text" id="txt_emplcode" class="form-control" title="employee_code" onkeypress="return onlyNos(event,this);" maxlength="6"  >
                                          
                                         </div>
                                    </div>

                                    <div class="row" style="height: 30px"> </div>
                                    
                                     <div class="row" >
                                       <div class="form-group col-sm-3" style="padding-left: 0;">
                                             
                                   <label>EXCHANGING WITH:</label></div>
                                           <div class="form-group col-sm-4" style="padding-left: 0;">
                                               <input type="text" id="txt_xchempcode" class="form-control" title="xcngemployee_code" onkeypress="return onlyNos(event,this);" maxlength="6" >
                                          
                                         </div>
                                    </div>

                                      <div class="row">
                                        <div class="row col-sm-3"></div>
                                        <div class="row col-sm-3">
                                            <button style="width: 100%; margin: 1.25rem;" type="button" class="btn btn-primary" id="btn_xchange_confirm" onclick="confirm_xhange()">Confirm</button>
                                        </div>
                                        <div class="row col-sm-3">
                                            <button style="width: 100%; margin: 1.25rem;" type="button" class="btn btn-danger" id="btn_xchangeExit" onclick="button_ext()">Exit</button>
                                        </div>
                                        <div class="row col-sm-3"></div>
                                    </div>


                               
                             </div>
                            </div>

                        </div>
                    </div>
                    <br />

                </div>
               
               
            </div>
                  <div class="row">
                    <div class="col-md-12" style="display: none" id="div_excel">
                        <!-- Assigned Task Lists -->
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <%--<div class="col-sm-6">--%>
                                    <h5>UPLOAD FILE</h5>
                                    <%--</div>--%>
                                </div>
                            </div>
                            <!-- /.container-fluid -->
                        </section>
                        <div class="background-card">
                            <div class="row-col-md-12 ">
                                <%----over--%>
                                <div class="card-body">
                                

                                    <form runat="server">
                             <div style="height:20px"></div>
                                   <div class="row">

                                    <div class="col-sm-2"></div>
                                    <div class="form-group col-sm-3" style="padding-left: 0;">
                                        <label>Choose bucket</label>
                                    </div>
                                    <div class="form-group col-sm-6" style="padding-left: 0;">
                                        <select class="form-control select2" id="ddl_bucket" style="width:100%"  onchange="On_changebucket()">
                                                <option value="-1">select bucket</option>
                                            </select>
                                    </div>

                                </div> 
                                <div class="row">

                                    <div class="col-sm-2"></div>
                                    <div class="form-group col-sm-3" style="padding-left: 0;">
                                        <label>Please choose file</label>
                                    </div>
                                    <div class="form-group col-sm-6" style="padding-left: 0;">
                                        <asp:FileUpload ID="FileUpload1" CssClass="form-control" runat="server" />
                                    </div>

                                </div>
                                 <div class="row">
                                    <div class="col-sm-5"></div>
                                            <a href="callcenter_excel_sample.xls" rel="nofollow">Please click here to download Sample Format..</a>
                                </div>
                                <div style="height:25px"></div>
                                <div class="row">
                                    <div class="col-sm-3"></div>
                                    <div class="col-sm-3">
                                                    <asp:Button ID="Button1"  class="btn btn-primary"  Text="Upload" runat="server" style="height:45px;width:175px" OnClick="btn_confirm_Click"  />  

                                    </div>
                              <div class="col-sm-3">
                                      <asp:Button ID="Button2"  class="btn btn-danger" runat="server"  Text="EXIT" style="height:45px;width:175px" OnClientClick="button_ext()"/> 
                                  </div>
                                    </div>
                                 <asp:HiddenField ID="hd_chngebucket_id" runat="server" />
                                 <asp:HiddenField ID="hd_products_id" runat="server" />
                                        
                                       </form>  

                                    



                               
                          
                            </div>

                        </div>
                    </div>
                    <br />

                </div>
               
               
            </div>
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
    
    <input id="hdbuckid" type="hidden" runat="server" />
    <input id="hdn1" type="hidden" runat="server" />
    <input id="hdn12" type="hidden" runat="server" />
    <input id="hdn3" type="hidden" runat="server" />
    <input id="hdn4" type="hidden" runat="server" />
    
    <input id="hdn5" type="hidden" runat="server" />
    <input id="hdUserId" type="hidden" runat="server" />
    <input id="Sub_Task_Id" type="hidden" runat="server" />
    <input id="hdType" type="hidden" runat="server" />

</asp:Content>
