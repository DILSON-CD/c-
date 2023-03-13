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
    public partial class QA_myremark : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string usr;
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
                //bid = Session["branch_id"].ToString();
                //fimid = Session["firm_id"].ToString();
                // sessn = Session["sessionkey"].ToString();
                this.hdUserId.Value = usr;
                //this.hdBranchId.Value = bid;
                // this.hdFirmId.Value = fimid;
                // this.hdSesssion.Value = sessn;
                // this.hdvExtensionNo.Value = Session["dialerExtensionNo"].ToString();
                //  hduniqid.Value = Session["hduniqid"].ToString();

            }

        }
        [WebMethod(EnableSession = true)]
        public static string QA_update(string caller_id, string rem, string phno ,string callid)
            

        {
            DataSet ds;
            string indata = caller_id + '^' + rem + '^' + phno + '^' + callid;
            //string str = data;
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("QA_update", indata, "", "","CRC");

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
        public static string qa_claim(string caller_id, string rem, string phno,string callid)


        {
            DataSet ds;
            string indata = caller_id + '^' + rem + '^' + phno + '^' + callid;
            //string str = data;
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("qa_claim", indata, "", "", "CRC");

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
            public string mob { get; set; }
            public string name { get; set; }
        }
        public class drpDtls
        {
            public string id { get; set; }
            public string name { get; set; }
        }


        [WebMethod(EnableSession = true)]
        public static List<getDropDownData> Get_QAnum_dtl(string userid)
        {
            DataSet ds;
            List<getDropDownData> getData = new List<getDropDownData>();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();

            ds = obj1.ITCSelect("Get_QAnum_dtl", userid, "", "", "CRC");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        getData.Add(new getDropDownData()
                        {
                            name = dr[0].ToString(),
                            mob = dr[1].ToString()
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
        public static string GETDATALIST(string indata,string callid)
        {
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            DataTable dt = new DataTable();
            string data = "";
            int i = 0;
            dt = obj1.ITCSelect("qaremarkfill", indata, "", "", "CRC").Tables[0];
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    data = data + dt.Rows[i][0].ToString();
                    i++;
                }
                return data;
            }
            else
            {
                return data;
            }
        }

        [WebMethod(EnableSession = true)]
        public static string GETPOPUPDTL(string val1, string val2)
        {
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            List<drpDtls> brdtls = new List<drpDtls>();
            DataSet ds = new DataSet();
            DataTable dt = new DataTable();
            string data = "";
            int i = 0;
           
            ds = obj1.ITCSelect("popup_mark", val1, val2, "", "CRC");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        data = data + ds.Tables[0].Rows[i][0].ToString() + "!" + ds.Tables[0].Rows[i][1].ToString() + "!" + ds.Tables[0].Rows[i][2].ToString() + "!" + ds.Tables[0].Rows[i][3].ToString() + "@";
                        i++;
                    }
                    return data;
                }
                else
                {
                    return data;
                }

            }
            catch (Exception e)
            {
                return data;
            }
        }

        [WebMethod(EnableSession = true)]
        public static string GETPOPFATAL(string val1, string val2)
        {
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            List<drpDtls> brdtls = new List<drpDtls>();
            DataSet ds = new DataSet();
            DataTable dt = new DataTable();
            string data = "";
            int i = 0;

            ds = obj1.ITCSelect("pop_fatal", val1, val2, "", "CRC");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        data = data + ds.Tables[0].Rows[i][0].ToString() + "!" + ds.Tables[0].Rows[i][1].ToString() + "!" + ds.Tables[0].Rows[i][2].ToString() + "@";
                        i++;
                    }
                    return data;
                }
                else
                {
                    return data;
                }
            }
            catch (Exception e)
            {
                return data;
            }
        }

        //[WebMethod(EnableSession = true)]
        //public static string show_score(string val1, string val2)
        //{

        //    DataSet ds;
        //    int i = 0;
        //    string result = "";
        //    ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
        //    ds = obj1.ITCSelect("popup_score", val1, val2, "", "");

        //    try
        //    {
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            foreach (DataRow dr in ds.Tables[0].Rows)
        //            {
        //                result = result + Convert.ToString(ds.Tables[0].Rows[i][0]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][2]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][3]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][4]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][5]) + "!";
        //                i = i + 1;
        //            }
        //        }
        //        else
        //        {
        //            result = "not found";
        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //    }
        //    return result;
        //}


        [WebMethod(EnableSession = true)]
        public static string Get_QA_rem(string indata)
        {
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            DataTable dt = new DataTable();
            string data = "";
            int i = 0;
            dt = obj1.ITCSelect("get_qa_rem", indata, "", "", "CRC").Tables[0];
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    data = data + dt.Rows[i][0].ToString();
                    i++;
                }
                return data;
            }
            else
            {
                return data;
            }
        }

    }
}