<%@ Page Title="" Language="C#" MasterPageFile="~/QA.Master" AutoEventWireup="true" CodeBehind="Evaluate_employee.aspx.cs" Inherits="ITCPortal.Evaluate_employee" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

     
    <script src="js/QA_Module.js"></script>
    <script src="js/teststar.js"></script>
  <%--  <link href="textbox.css" rel="stylesheet" />--%>
    <link href="css/teststar.css" rel="stylesheet" />
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  
    <style>

         .pure-material-textfield-outlined {
    --pure-material-safari-helper1: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    position: relative;
    display: inline-block;
    padding-top: 7px;
    /*font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);*/
    font-size: 12px;
    line-height: 1.5;
    overflow: hidden;
    width: 100%;
    /*height: 2.3em;*/
}

    /* Input, Textarea */
    .pure-material-textfield-outlined > input,
    .pure-material-textfield-outlined > textarea {
        box-sizing: border-box;
        margin: 0;
        border: solid 1px; /* Safari */
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
        border-top-color: transparent;
        border-radius: 4px;
        padding: 5px 13px 5px;
        width: 100%;
        height: inherit;
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
        background-color: transparent;
        box-shadow: none; /* Firefox */
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        caret-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        transition: border 0.2s, box-shadow 0.2s;
    }

        /* Span */
        .pure-material-textfield-outlined > input + span,
        .pure-material-textfield-outlined > textarea + span {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
            width: 100%;
            max-height: 80%;
            color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
            font-size: 75%;
            line-height: 15px;
            cursor: text;
            transition: color 0.2s, font-size 0.2s, line-height 0.2s;
        }

            /* Corners */
            .pure-material-textfield-outlined > input + span::before,
            .pure-material-textfield-outlined > input + span::after,
            .pure-material-textfield-outlined > textarea + span::before,
            .pure-material-textfield-outlined > textarea + span::after {
                content: "";
                display: block;
                box-sizing: border-box;
                margin-top: 6px;
                border-top: solid 1px;
                border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
                min-width: 10px;
                height: 8px;
                pointer-events: none;
                box-shadow: inset 0 1px transparent;
                transition: border-color 0.2s, box-shadow 0.2s;
            }

            .pure-material-textfield-outlined > input + span::before,
            .pure-material-textfield-outlined > textarea + span::before {
                margin-right: 4px;
                border-left: solid 1px transparent;
                border-radius: 4px 0;
            }

            .pure-material-textfield-outlined > input + span::after,
            .pure-material-textfield-outlined > textarea + span::after {
                flex-grow: 1;
                margin-left: 4px;
                border-right: solid 1px transparent;
                border-radius: 0 4px;
            }

    /* Hover */
    .pure-material-textfield-outlined:hover > input,
    .pure-material-textfield-outlined:hover > textarea {
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
        border-top-color: transparent;
    }

        .pure-material-textfield-outlined:hover > input + span::before,
        .pure-material-textfield-outlined:hover > textarea + span::before,
        .pure-material-textfield-outlined:hover > input + span::after,
        .pure-material-textfield-outlined:hover > textarea + span::after {
            border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
        }

        .pure-material-textfield-outlined:hover > input:not(:focus):placeholder-shown,
        .pure-material-textfield-outlined:hover > textarea:not(:focus):placeholder-shown {
            border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
        }

    /* Placeholder-shown */
    .pure-material-textfield-outlined > input:not(:focus):placeholder-shown,
    .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown {
        border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    }

        .pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span,
        .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown + span {
            font-size: inherit;
            line-height: 50px;
        }

            .pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span::before,
            .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown + span::before,
            .pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span::after,
            .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown + span::after {
                border-top-color: transparent;
            }

    /* Focus */
    .pure-material-textfield-outlined > input:focus,
    .pure-material-textfield-outlined > textarea:focus {
        border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        border-top-color: transparent;
        box-shadow: inset 1px 0 var(--pure-material-safari-helper1), inset -1px 0 var(--pure-material-safari-helper1), inset 0 -1px var(--pure-material-safari-helper1);
        outline: none;
    }

        .pure-material-textfield-outlined > input:focus + span,
        .pure-material-textfield-outlined > textarea:focus + span {
            color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        }

            .pure-material-textfield-outlined > input:focus + span::before,
            .pure-material-textfield-outlined > input:focus + span::after,
            .pure-material-textfield-outlined > textarea:focus + span::before,
            .pure-material-textfield-outlined > textarea:focus + span::after {
                border-top-color: var(--pure-material-safari-helper1) !important;
                box-shadow: inset 0 1px var(--pure-material-safari-helper1);
            }

    /* Disabled */
    .pure-material-textfield-outlined > input:disabled,
    .pure-material-textfield-outlined > input:disabled + span,
    .pure-material-textfield-outlined > textarea:disabled,
    .pure-material-textfield-outlined > textarea:disabled + span {
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38) !important;
        border-top-color: transparent !important;
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
        pointer-events: none;
    }

        .pure-material-textfield-outlined > input:disabled + span::before,
        .pure-material-textfield-outlined > input:disabled + span::after,
        .pure-material-textfield-outlined > textarea:disabled + span::before,
        .pure-material-textfield-outlined > textarea:disabled + span::after {
            border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38) !important;
        }

        .pure-material-textfield-outlined > input:disabled:placeholder-shown,
        .pure-material-textfield-outlined > input:disabled:placeholder-shown + span,
        .pure-material-textfield-outlined > textarea:disabled:placeholder-shown,
        .pure-material-textfield-outlined > textarea:disabled:placeholder-shown + span {
            border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38) !important;
        }

            .pure-material-textfield-outlined > input:disabled:placeholder-shown + span::before,
            .pure-material-textfield-outlined > input:disabled:placeholder-shown + span::after,
            .pure-material-textfield-outlined > textarea:disabled:placeholder-shown + span::before,
            .pure-material-textfield-outlined > textarea:disabled:placeholder-shown + span::after {
                border-top-color: transparent !important;
            }

/* Faster transition in Safari for less noticable fractional font-size issue */
@media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {
        .pure-material-textfield-outlined > input,
        .pure-material-textfield-outlined > input + span,
        .pure-material-textfield-outlined > textarea,
        .pure-material-textfield-outlined > textarea + span,
        .pure-material-textfield-outlined > input + span::before,
        .pure-material-textfield-outlined > input + span::after,
        .pure-material-textfield-outlined > textarea + span::before,
        .pure-material-textfield-outlined > textarea + span::after {
            transition-duration: 0.1s;
        }
    }
}
     
.shape {
	position: absolute;
	width: 50px;
	height: 50px;
	transform: scale(0.8);
}
.cir {
	position: absolute;
	border-radius: 50%;
	z-index: 5;
}
.btn-contain {
	width: 200px;
	height: 100px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

#btn1 {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 4px;
	background: #333;
	text-align: center;
	z-index: 10;
	transition: 0.2s;
	cursor: pointer;
	color: #fff;
	box-shadow: 0px 1px 5px 2px #BFCEEF;
}
#btn1:active, #btn1:hover, #btn1:focus {
	outline: none !important;
	color: white;
} 
.btn-particles {
	width: 100px;
	height: 100px;
	position: absolute;
	border-radius: 50%;
	color: #eee;
	font-family: monospace;
	z-index: 5;
/* 	filter: url(#gooeyness); */
}
#btn1:active {
	transform: scale(0.9) translate(-55%, -55%);
}
  
    </style>
    


   
    <script>
  
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h3>Evaluate Employee</h3>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="QA_Module_Index.aspx">Home</a></li>

                        </ol>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">

                <div class="card">
               
                   <%-- <img class="card-img-top" src="img/MicrosoftTeams-image(2).jpg"alt="Card image cap" />
                     --%>
                    <div class="card-body">
                     <%--   <form role="form">--%>

                   <div class="card"style="width: 68%;margin-left: 16%;height: 366px;background-color: aliceblue;box-shadow: 9px 8px 10px 2px gray;">
                      <div class="card-body">
                          <form  role="form">

                        <div class="row">
                                <div class="row col-md-12">
                                    <div class=" col-md-3">
                                        <label>Select Employee</label>
                                    </div>
                                    <div class=" col-md-9">
                                        <div  class="form-group"style="width: 180%;">
                                           

                                            <select class="form-control select2" id="Sel_Employee" style="width: 50%" onchange="sel_emp(this.value)">
                                            </select>


                                        </div>

                                    </div>
                                </div>
                            </div>
                             
                                <div class="row">
                                <div class="row col-md-12">
                                    <div class=" col-md-3">
                                        <label>Mobile Number</label>
                                    </div>
                                    <div class=" col-md-9">
                                        <div  class="form-group"style="width: 90%;">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="txt_mobile"  name="mobile" maxlength="10" required="required" onblur="leftTrim(this)" autocomplete="off" onkeypress="return isNumberKey(event,this)"/>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                               <div class="row"style="height: 57px;">
                                  <div class="row col-md-12">
                                      <div class=" col-md-3">
                                          <label>Select Language</label>
                                      </div>
                                       <div class=" col-md-9">
                                      <div class="col-md-12"style="margin-left: -3%;width: 56%;">
                                           <select class="form-control" id="langid">
                                                      <option value="-1">Select Language</option>
                                                      <option value="1">MALAYALAM</option>
                                                      <option value="2">HINDI</option>
                                                      <option value="3">Kanada</option>
                                                      <option value="4">TAMIL</option>
                                                      <option value="5">TELUGU</option>
                                                      <option value="6">OTHER CAMPAIGN</option>
                                                       
                                          </select>

                                      </div>
                                      </div>

                                  </div>
                              </div>
                               <div class="row">
                               <div class="row col-sm-12" >
                                                <div class="form-group col-sm-3"style="padding-left:15px">
                                                    <label>Select Date </label>             
                                                </div>
                                   <div class=" col-md-9">
                                    <div  class="form-group"style="width: 50%;">
                                         
                                        <input type="text" id="txtfrmDate" class="form-control" style="width:100%" readonly="readonly"/>
                                        </div>
                                        </div>
                                                 
                                        </div>       
                                        </div> 
                              <%--<div style="display: flex; justify-content: center; margin-left: -30%;">
                               
                                <button style="width: 15%; background-color:darkcyan; margin: 1.25rem;" type="button" class="btn btn-success" id="btn_confirm1" onclick="show_checks_list()">CheckList</button>



                            </div>--%>
                               <div class="row col-sm-12" style="display: flex; justify-content: center;">

                    <button style="width: 15%; background-color:darkcyan; margin: 1.25rem; margin-left: -55px;" type="button" class="btn btn-success" id="btn_confirm1" onclick="show_checks_list()">CheckList</button>
          &nbsp
         &nbsp
                 <button style="width: 15%; background-color:#3f8b00; margin: 1.25rem;" type="button" class="btn btn-success" id="btn_referens" onclick="show_referens()">Reference</button>

                              </div>

                           

                              </form>
                           </div>
                           </div>
                           
                           
                        
                            <br />
                            
                            
                            <div>



                             <div class="form-group col-md-12 padding-bottom-10px align-center " id="qst_table" style="display:none">
             <div class="col-md-12 align-center">
                    <table id ="tableDataopt2" border="1" style="border:1px solid black;margin-left:auto;margin-right:auto;" ></table>
                 
             <%--</div>--%>                
            </div>
            </div>
                         <div class="row">
                        <div class="col-md-7" >
        
                          <button type="button" class="btn-prop" id="button_confirms" onclick="confirm_Add1()" style=" width: 10%;border-radius: 9px;background-color:darkcyan;margin-left: 519px;">Add</button>
                          
                           </div>
                            <div class="col-md-2">
                                <label style=" margin-left: 70px" id="markttotal">TOTAL MARK</label>
                                </div> 
                                <div class="col-md-3"style="margin-top: -6px">
                               <%--<input type="text" class="form-control" style="width: 55px; margin-left: 915px; margin-top: -38px;text-align: center;font-weight: bold;" id="txt_scor"  name="marke" maxlength="10" required="required" onblur="leftTrim(this)" readonly="true" autocomplete="on" />   --%>  
                               <input type="text" class="form-control" style="width: 60px;text-align: center;font-weight: bold; margin-left: 10px" id="txt_scor"  name="marke" maxlength="10" required="required" onblur="leftTrim(this)" readonly="true" autocomplete="on" />     
             </div>           </div>    
            </div>
                       <br />
                       
                         <div class="card"style="width: 72%;margin-left: 13%;height: 287px;background-color: aliceblue;box-shadow: 9px 8px 10px 2px gray;">
                      <div class="card-body">
                          <form  role="form">
                              <h5 style="text-align:center;color: navy;"><b>Please Tick the below mentioned Questions(Not Mandatory)</b></h5>
                              <br />
                          <div class="row">
                              
                               <div class="row col-sm-12" >
                                                <div class="form-group col-sm-10"style="padding-left:15px">
                                                    <label>1) Disconnected call without sufficient reason </label>             
                                                </div>
                                   <div class=" col-md-2">
                                    <div  class="form-group"style="width: 50%;">
                                         
                                        <input type="checkbox" id="check1" name="tick" class="accent-teal" onclick="Fatal_Errors()"/>
                                        </div>
                                        </div>
                                        </div>
                                <div class="row col-sm-12" >
                                                <div class="form-group col-sm-10"style="padding-left:15px">
                                                    <label>2) Failed to verify customer when required</label>             
                                                </div>
                                   <div class=" col-md-2">
                                    <div  class="form-group"style="width: 50%;">
                                           <%--<input type="text" id="txtfrmDate" class="form-control" style="width:100%">--%>
                                        <input type="checkbox" id="check2" name="tick" class="accent-teal" onclick="Fatal_Errors()"/>
                                        </div>
                                        </div>
                                        </div>
                                <div class="row col-sm-12" >
                                                <div class="form-group col-sm-10"style="padding-left:15px">
                                                    <label>3) Wrong Information Given/Fatal Information missed </label>             
                                                </div>
                                   <div class=" col-md-2">
                                    <div  class="form-group"style="width: 50%;">
                                           <%--<input type="text" id="txtfrmDate" class="form-control" style="width:100%">--%>
                                        <input type="checkbox" id="check3"name="tick" class="accent-teal" onclick="Fatal_Errors()"/>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                          </form>   
                                        </div>       
                                        </div>
                                <br />

                                <div class="card" id="div_wow" style="width: 40%; margin-left: 27%;  height: 183px;background-color: aliceblue;box-shadow: 9px 8px 10px 2px gray;border-radius: 42px;">
                            <div class="card-body">
                                <form role="form">

                                           
                                                <div style="text-align:center;">
                                                    <label style="margin-top: 21px;">CRO went the extra mile for best customer experience </label>             
                                                </div>
                                   
                                    <div  class="btn-contain"style="margin-top: 24px;">
                                           <input type="button" class="btn1" style="background-color:darkcyan;color:azure" onclick="wow_id()" id="btn1" value="WOW"/><i class="bi bi-stars"></i>
                                        <div class="btn-particles">
                                            </div>
                                            </div>
                                         </form>
                                        </div>
                                        </div>
                                <br />

                        <div class="card" style="width: 72%; margin-left: 13%; height: 300px;background-color: aliceblue;box-shadow: 9px 8px 10px 2px gray;">
                            <div class="card-body">
                                <form role="form">

                                    <div class="row"> 
                                         <%-- <div class="row col-sm-12" >
                                                <div class="form-group col-sm-7"style="padding-left:15px">
                                                    <label>CRO went the extra mile for best customer experience </label>             
                                                </div>
                                   <div class=" col-md-5">
                                    <div  class="btn-contain">
                                           <input type="button" class="btn1" style="background-color:darkcyan;color:azure" id="btn1" value="WOW"/><i class="bi bi-stars"></i>
                                        <div class="btn-particles">
                                            </div>
                                            </div>
                                        </div>
                                        </div>--%>
                                        <br />
                                         <div class="form-group col-md-12 padding-bottom-10px" style="color: black;">
                    <div class="rating left">
                        <label class=" align-left">Rate this skills</label>
                        <br />
                     <div class="stars left">
                         <a class="star" id="star1" onclick="Starvalueselect(1)"></a>
                         <a class="star" id="star2" onclick="Starvalueselect(2)"></a>
                         <a class="star" id="star3" onclick="Starvalueselect(3)"></a>
                         <a class="star" id="star4" onclick="Starvalueselect(4)"></a>
                         <a class="star" id="star5" onclick="Starvalueselect(5)"></a>
                     </div>
                    </div>
                    </div>
                                        <br />
                                          <div class="col-md-12">

                                 <label class="pure-material-textfield-outlined">
                                  
                                <textarea rows="1" cols="15" name="Remarks" id="txtRemarks" maxlength="3500" title="Remarks" style="height: 76px;" oninput="this.value = this.value.replace(/[^-@.,/#&+\w\s]/g, '');"></textarea>
                                <span>Remarks</span>
                            </label>

                        </div>
                                        </div>
                                        </form>
                                        </div>
                                        </div>
                        <div style="display: flex; justify-content: center; align-content: center">
                               
                                <button style="width: 15%; margin: 1.25rem;" type="button" class="btn btn-success" id="btn_confirm" onclick="Confirm();">Confirm</button>

                                <button style="width: 15%; margin: 1.25rem;" type="button" class="btn btn-danger" id="btn_Exit" onclick="Exit()">Exit</button>
                            </div>
                        </div>
                    </div>
                </div>
         

           
        </section>
    </div>
    <input id="hdUserId" type="hidden" runat="server"/>
    <input id="HdStar1" type="hidden" runat="server"/>
      <input id="Hidden1wow" type="hidden" runat="server"/>
</asp:Content>
