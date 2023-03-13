using System;
using System.Collections.Generic;
using System.Data;
using System.Drawing.Imaging;
using System.IO;
using System.Text;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;
using System.Net;
using Newtonsoft.Json.Linq;
using System.Net.Mail;

namespace ITCPortal
{
    public partial class Index : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {

            string usr, bid, fimid, sessn;
            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("SessionExpired.aspx");
            }
            else
            {

                //DataSet ds;
                //usr = Session["username"].ToString();
                //ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
                //ds = obj1.ITCSelect("insert_login_time", "", usr, "", "CRC");




                usr = Session["username"].ToString();
                bid = Session["branch_id"].ToString();
                fimid = Session["firm_id"].ToString();
                sessn = Session["sessionkey"].ToString();
                this.hdUserId.Value = usr;
                this.hdBranchId.Value = bid;
                this.hdFirmId.Value = fimid;
                this.hdSesssion.Value = sessn;
                this.hdvExtensionNo.Value = Session["dialerExtensionNo"].ToString();
             //  hduniqid.Value = Session["hduniqid"].ToString();

            }
        }


       static String uid_hang = "";

        [WebMethod(EnableSession = true)]
        public static string LeadDetails(string pageVal, string Caller_ID)


        {
            DataSet ds;
            string str = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect(pageVal, Caller_ID, "", "", "CRC");

            try
            {                                                                   
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return ds.Tables[0].Rows[0][0].ToString();

                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
            return "0";
        }

        [WebMethod(EnableSession = true)]
        public static string Call_initiated(string Caller_ID, string lead_id,string tbname)
        {
            DataSet ds;
            string str = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("Call_initiated", Caller_ID,lead_id, tbname,  "CRC");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return ds.Tables[0].Rows[0][0].ToString();

                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
            return "0";
        }

        public class getDropDownData
        {
            public string id { get; set; }
            public string name { get; set; }
        }


        [WebMethod(EnableSession = true)]
        public static List<getDropDownData> DropdownFill(string pageVal,string type_id)
        {
            DataSet ds;
            List<getDropDownData> getData = new List<getDropDownData>();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();

            ds = obj1.ITCSelect(pageVal, type_id, "", "", "CRC");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        getData.Add(new getDropDownData()
                        {
                            id = dr[0].ToString(),
                            name = dr[1].ToString()
                        });
                    }
                }
            }
            catch (Exception e)
            {

            }
            return getData;
        }

        [WebMethod(EnableSession = true)]
        public static string branch_details(string pageVal)
        {
            DataSet ds;
            string str = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("branch_details",pageVal,"","", "CRC");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return ds.Tables[0].Rows[0][0].ToString();

                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
            return "0";
        }

        [WebMethod(EnableSession = true)]
        public static string GetDetails(string pageVal, string pageval1, string pageval2)
        {
            DataSet ds;
            string str = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect(pageVal, pageval1, pageval2, "", "CRC");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        str = str + dr[0].ToString() + "¶";
                    }

                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
            return str;
        }
        //-------------------crf 113889------------------------------------
        [WebMethod(EnableSession = true)]
        public static string Get_emp_dtl(string caller_id)
        {
            DataSet ds;
            string str = "";
            DataTable dt = new DataTable();

            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("get_emp_dtls", caller_id, "", "", "admin");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        for (int i = 0; i < 14; i++)
                            str = str + dr[i].ToString() + "¶";
                    }

                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
            return str;
        }

        //-------------------crf 113889------------------------------------
        [WebMethod(EnableSession = true)]
        //public static string Confirm(string indata, string uniqueid, string ftime)
        public static string Confirm(string indata, string uniqueid, string ftime, string call_dis, string logtab)
        {
            if (uid_hang != null)
            {
                uniqueid = uid_hang;
            }




            char[] spearator = { '^', ' ' };
            String[] strlist = indata.Split(spearator);
            string mobno1 = strlist[5];
            string leadid1 = strlist[3];



            string result = "";
            DataSet ds;

            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("Confirm", logtab, indata, ftime, "CRC");

            try
            {

                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = ds.Tables[0].Rows[0][0].ToString();
                }
                else result = "~123";


                //string response = call_response(uniqueid, "1");
                //if (response == "0")
                //{
                //    result = "~123";
                //}
                //else
                //{


                //    ds = obj1.ITCSelect("call_hangup", "", "0^" + mobno1, response, "CRC");

                //    try
                //    {

                //        if (ds.Tables[0].Rows.Count > 0)
                //        {
                //            result = ds.Tables[0].Rows[0][0].ToString();
                //        }
                //        else result = "~123";
                //    }
                //    catch (Exception e)
                //    {

                //    }
                    
                //}



                //--------------------------------if call_dis = 17 then 
                if (call_dis == "17")
                {

                    ds = obj1.ITCSelect("call_satus_insert", leadid1, "", "", "CRC");
                }





            }
            catch (Exception e)
            {

            }
            // }
            //}

            return result;


        }

        [WebMethod(EnableSession = true)]
        public static string call_hangup(string indata, string uniqueid, string direction, string data1)

        {
           uid_hang = uniqueid;
           

            string usr = HttpContext.Current.Session["username"].ToString();

               

            DataSet ds;

            string result = "";
            // { "event":"Hangup","privilege":"call,all","channel":"SIP/856-00116db3","channelstate":"6","channelstatedesc":"Up","calleridnum":"856","calleridname":"856","connectedlinenum":"9526018526","connectedlinename":"c2c","language":"en","accountcode":"856","context":"from-internal","exten":"","priority":"1","uniqueid":"1646472198.2870100","linkedid":"1646472198.2870098","cause":"16","cause-txt":"Normal Clearing"}';
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            // ds = obj1.ITCSelect("saveuniqid", "", indata, uniqueid, "CRC");
            ds = obj1.ITCSelect("saveuniqid", "", indata, uniqueid + "^" + data1, "CRC");

            string response = call_response(uniqueid, direction);
            if (response == "0")
            {
                result = "~123";
            }
            else
            {


                // ServiceReference1.ITCServiceClient obj = new ServiceReference1.ITCServiceClient();
                ds = obj1.ITCSelect("call_hangup", "", indata + "^" + usr, response, "CRC");

                try
                {

                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        result = ds.Tables[0].Rows[0][0].ToString();
                    }
                    else result = "~123";
                }
                catch (Exception e)
                {

                }
                // }
            }

            return result;


        }


        public static string call_response(string uniq_id, string direction)
        {
            //string apiurl = "http://10.4.2.92/app/admin/call_report/calllog?uniqueid="+ uniq_id;
            string apiurl = "http://10.4.2.95/app/admin/call_report/calllog?uniqueid=" + uniq_id;

            System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12;

            //existing code//
            WebRequest myWebRequest = WebRequest.Create(apiurl);
            myWebRequest.Method = "POST";
            myWebRequest.ContentType = "application/x-www-form-urlencoded";
            myWebRequest.Timeout = 180000;
            StreamWriter requestWriter = new StreamWriter(myWebRequest.GetRequestStream());
            // requestWriter.Write(postString);
            requestWriter.Close();

            StreamReader responseReader = new StreamReader(myWebRequest.GetResponse().GetResponseStream());
            WebResponse myWebResponse = myWebRequest.GetResponse();
            Stream ReceiveStream = myWebResponse.GetResponseStream();
            Encoding encode = System.Text.Encoding.GetEncoding("utf-8");
            StreamReader readStream = new StreamReader(ReceiveStream, encode);
            string response = readStream.ReadToEnd();

            JObject joResponse = JObject.Parse(response);
            JObject records;

            //string res = "",   calldate="", duration="", disposition="",to_no="";
            //if (joResponse.SelectToken("sucess") != null)
            //{
            //    //res = joResponse.SelectToken("sucess").ToString();
            //    records = JObject.Parse(joResponse.SelectToken("records")[0].ToString());
            //   // JObject joResponse1 = JObject.Parse(records);
            //    calldate = records.SelectToken("calldate").ToString();
            //    duration = records.SelectToken("duration").ToString();
            //    disposition = records.SelectToken("disposition").ToString();
            //    to_no = records.SelectToken("dst").ToString(); 
            //    res = calldate + '^' + duration + '^' + disposition+ '^' + to_no;


            string res = "", calldate = "", duration = "", disposition = "", to_no = "", in_out_data = "";
            if (joResponse.SelectToken("sucess") != null)
            {
                //res = joResponse.SelectToken("sucess").ToString();
                records = JObject.Parse(joResponse.SelectToken("records")[0].ToString());
                // JObject joResponse1 = JObject.Parse(records);
                calldate = records.SelectToken("calldate").ToString();
                duration = records.SelectToken("duration").ToString();
                disposition = records.SelectToken("disposition").ToString();
                //to_no = records.SelectToken("dst").ToString();
                in_out_data = records.SelectToken("dstchannel").ToString();
                string[] str = in_out_data.Split('/');
                string dispdata = str[1];
                string[] disp_data = dispdata.Split('-');
                String scnd_data = disp_data[0];
                //if (scnd_data == "vodafone")
                //    to_no = records.SelectToken("dst").ToString();
                //else
                //{
                //    to_no = records.SelectToken("src").ToString();
                //    to_no = to_no.Substring(to_no.Length - 10);
                //}

                if (direction == "1")
                {
                    to_no = records.SelectToken("src").ToString();

                }
                else if (direction == "2" || direction == "0")
                {
                    to_no = records.SelectToken("dst").ToString();

                }




                res = calldate + '^' + duration + '^' + disposition + '^' + to_no;




            }
            else
            {
                res = "0";
            }

            return res;

        }
        [WebMethod(EnableSession = true)]
        public static string badge(string Caller_ID)
        {
            DataSet ds;
            string result = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("badge", Caller_ID, "", "", "CRC");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = ds.Tables[0].Rows[0][0].ToString();
                }
                else result = "~123";
            }
            catch (Exception e)
            {

            }
           


            return result;
        }


        [WebMethod(EnableSession = true)]
        public static string search_no(string Caller_ID,string mob)
        {
            DataSet ds;
            string result = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("search_no", Caller_ID, mob, "", "CRC");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = ds.Tables[0].Rows[0][0].ToString();
                }
                else result = "~123";
            }
            catch (Exception e)
            {

            }



            return result;
        }



        [WebMethod(EnableSession = true)]
        public static string incoming(string Caller_ID, string mob)
        {
            DataSet ds;
            string result = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("incoming", Caller_ID, mob, "", "CRC");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = ds.Tables[0].Rows[0][0].ToString();
                }
                else result = "~123";
            }
            catch (Exception e)
            {

            }



            return result;
        }





        //---------------------------------------------------------productid



        public class getproductDropData
        {
            public string successid { get; set; }
           
        }


        [WebMethod(EnableSession = true)]
        public static string productid(string pageVal,string productid)
        {
            DataSet ds;
            string data = "";
            //List<getproductDropData> getData = new List<getproductDropData>();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();

            ds = obj1.ITCSelect(pageVal, productid, "", "", "CRC");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    data = ds.Tables[0].Rows[0][0].ToString();
                }
            }
            catch (Exception e)
            {

            }
            return data;
        }



        //-----------------------------------------------------------end product


        //---------------------------------------------------------send mail



      
            //----------------------------------------------------------send mail............vb change

        [WebMethod(EnableSession = true)]
        public static string sendmail(string productid,string productname, string leadid)
        {
            DataSet ds,ds2;
            string data = "";
            //List<getproductDropData> getData = new List<getproductDropData>();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();

            

            ds = obj1.ITCSelect("getmailaddress", productid, "", "", "CRC");
            ds2= obj1.ITCSelect("getmailcontents", leadid, "", "", "CRC");
            

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {

                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {

                        string to_mailid = dr[0].ToString();
                        SmtpClient server = new SmtpClient("smtp.office365.com");
                        server.Port = 587;
                        server.EnableSsl = true;
                        server.UseDefaultCredentials = false;
                        //server.Credentials = new System.Net.NetworkCredential("alert@manappuram.com", "AL@123rt", "smtp.office365.com");
                        //server.Credentials = new System.Net.NetworkCredential("23229@manappuram.com", "plm@Mafil123", "smtp.office365.com");
                        server.Credentials = new System.Net.NetworkCredential("cc@manappuram.com", "AK@123cr", "smtp.office365.com");

                        server.TargetName = "STARTTLS/smtp.office365.com";
                        server.DeliveryMethod = SmtpDeliveryMethod.Network;
                        MailMessage mail = new MailMessage();
                        //mail.From = new MailAddress("23229@manappuram.com");
                        mail.From = new MailAddress("cc@manappuram.com");

                        mail.To.Clear();
                        mail.Body = "";
                        mail.Attachments.Clear();
                        mail.Subject = productname + " Lead";
                        //mail.Body = "<p style='font-family: Calibri,Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0);'>Dear Sir, <br/><br/> Please find lead generated from callcentre.</p><br/><br/> <table border='2' style='border-collapse: collapse;text-align:center'><tr style='font-size:14px;'><th>REGISTRATION_DATE</th><th>CUSTOMER_TYPE</th><th>TICKET_TYPE</th><th>CUSTOMER_NAME</th><th>CONTACTNO</th><th>DETAILS_OF_COMPLAINT</th><th>BRANCH_ID</th><th>BRANCH_NAME</th><th>STATE_NAME</th><th>REG_NAME</th><th>AREA_NAME</th><th>PRODUCT</th><th>EXISTING_CUST_NAME</th><th>EXIS_CUST_MOB</th><th>CUST_CALL_FRM</th><th>NON_CUST_CALL_FRM</th></tr><tr><td> 08-09-2021</td><td> Customer</td><td> Lead</td><td>aaaaaaaaaaa</td><td>098765434567</td><td>need for car loan</td><td>653</td><td>gangangar high layout</td><td>karnataka</td><td>banglore-2</td><td>banglore-18</td><td>car loan</td><td>venkatesh j</td><td>aaaaaaaaaaa</td><td>aaaaaaaaaaa</td><td>aaaaaaaaaaa</td></tr></table>";
                        //mail.Body = "<p style='font-family: Calibri,Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0);'>Dear Sir, <br/><br/> Please find lead generated from callcentre.</p><br/><br/> <table border='2' style='border-collapse: collapse;text-align:center'><tr style='font-size:14px;'><th>REGISTRATION_DATE</th><th>CUSTOMER_TYPE</th><th>TICKET_TYPE</th><th>CUSTOMER_NAME</th><th>CONTACTNO</th><th>DETAILS_OF_COMPLAINT</th><th>BRANCH_ID</th><th>BRANCH_NAME</th><th>STATE_NAME</th><th>REG_NAME</th><th>AREA_NAME</th><th>PRODUCT</th><th>EXISTING_CUST_NAME</th></tr><tr><td>" + ds[0].toString() + "</td><td>" + ds[1].toString() + "</td><td>" + ds[2].toString() + "</td><td>" + ds[3].toString() + "</td><td>" + ds[4].toString() + "</td><td>" + ds[5].toString() + "</td><td>" + ds[6].toString() + "</td><td>" + ds[7].toString() + "</td><td>" + ds[8].toString() + "</td><td>" + ds[9].toString() + "</td><td>" + ds[10].toString() + "</td><td>" + ds[12].toString() + "</td><td>" + ds[13].toString() + "</td></tr></table>";
                       // mail.Body = "<p style='font-family: Calibri,Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0);'>Dear Sir, <br/><br/> Please find the lead generated from callcentre.</p><br/><br/> <table border='2' style='border-collapse: collapse;text-align:center'><tr style='font-size:14px;'><th>REGISTRATION_DATE</th><th>CUSTOMER_TYPE</th><th>TICKET_TYPE</th><th>CUSTOMER_NAME</th><th>CONTACTNO</th><th>ALTERNATE NUMBER</th><th>DETAILS_OF_COMPLAINT</th><th>BRANCH_ID</th><th>BRANCH_NAME</th><th>AREA_NAME</th><th>STATE_NAME</th><th>REG_NAME</th><th>ZONE</th><th>PRODUCT</th><th>EXISTING_CUST_NAME</th></tr><tr><td>" + ds2.Tables[0].Rows[0][0].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][1].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][2].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][3].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][4].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][5].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][6].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][7].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][8].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][9].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][10].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][11].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][12].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][13].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][14].ToString() + "</td></tr></table>";
                        mail.Body = "<p style='font-family: Calibri,Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0);'>Dear Sir, <br/><br/> Please find the lead generated from callcentre.</p><br/><br/> <table border='2' style='border-collapse: collapse;text-align:center'><tr style='font-size:14px;'><th>REGISTRATION_DATE</th><th>CUSTOMER_TYPE</th><th>TICKET_TYPE</th><th>CUSTOMER_NAME</th><th>CONTACTNO</th><th>ALTERNATE NUMBER</th><th>DETAILS_OF_COMPLAINT</th><th>BRANCH_ID</th><th>BRANCH_NAME</th><th>AREA_NAME</th><th>STATE_NAME</th><th>REG_NAME</th><th>ZONE</th><th>PRODUCT</th><th>EXISTING_CUST_NAME</th></tr><tr><td>" + ds2.Tables[0].Rows[0][0].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][1].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][2].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][3].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][4].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][5].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][6].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][7].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][8].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][9].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][10].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][11].ToString() + "</td><td>" + ds2.Tables[0].Rows[0][12].ToString() + "</td><td>" + productname  + "</td><td>" + ds2.Tables[0].Rows[0][14].ToString() + "</td></tr></table>";

                        mail.IsBodyHtml = true;

                        //send mail......
                        //uncomment for production use
                        mail.To.Add(to_mailid);
                        //mail.To.Add("366371@manappuram.com");
                        server.Send(mail);





                    }
                }

            }
            catch (Exception e)
            {

            }
            return data;
        }



        //-----------------------------------------------------------send mail
        [WebMethod(EnableSession = true)]
        public static string sendsms(string phonenumber, string leadid)
        {
            string result;
            DataSet ds, ds2;
            string data = "";
            //List<getproductDropData> getData = new List<getproductDropData>();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();



            ds = obj1.ITCSelect("sms_status_check", phonenumber, leadid, "", "CRC");
           


            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {

                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {

                        result = ds.Tables[0].Rows[0][0].ToString();

                        if(result=="111")
                        {
                            string data1 = "";
                            ds2 = obj1.ITCSelect("get_sms_content", "", leadid, "", "CRC");


                            string name = ds2.Tables[0].Rows[0][0].ToString();
                            string branch_name = ds2.Tables[0].Rows[0][1].ToString();
                            string branch_phone = ds2.Tables[0].Rows[0][2].ToString();
                            //msg content 
                            ds2 = obj1.ITCSelect("insert_sms_log", phonenumber, leadid, "", "CRC");
                            solution_infini_flag.mana.SMSTool sm = new solution_infini_flag.mana.SMSTool();
                            sm.Message = "Dear "+name+",Greetings! We tried contacting you as requested but did not get through. Pls call us at 1800 420 2233 (Toll-free) or our "+branch_name+" branch at "+ branch_phone + " to know more about our instant loan products. Manappuram Finance Ltd.";
                            sm.mobileNumber = (long)Convert.ToDouble(phonenumber);
                          
                            ////uncomment for production use
                            string msgid = sm.SendSms();


                           

                        }


                    }
                }

            }
            catch (Exception e)
            {

            }
            return data;
        }



        //-----------------------------358141



        [WebMethod(EnableSession = true)]
        public static string Confirm_Check(string indata)
        {
            string result = "";
            DataSet ds;

            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("Confirm_Check", "", indata, "", "CRC");

            try
            {
                
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        result = result + dr[0].ToString();
                    }

                }

            }
            catch (Exception e)
            {

            }
            // }
            //}

            return result;


        }



        //-----------------------------------end

        //---------------------------QA EMP alert---start----
        [WebMethod(EnableSession = true)]
        public static string notify(string caller_id)


        {
            DataSet ds;
            //string str = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("notify", caller_id, "", "", "CRC");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return ds.Tables[0].Rows[0][0].ToString();

                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
            return "0";
        }

        //---------------------------QA EMP alert--- end----

    }
}