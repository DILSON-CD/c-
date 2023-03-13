using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web.Services;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ITCPortal
{
    public partial class Evaluate_employee : System.Web.UI.Page
    {
        Helper.Oracle.OracleHelper oh = new Helper.Oracle.OracleHelper();
        protected void Page_Load(object sender, EventArgs e)
        {
            string usr = Session["username"].ToString();
            this.hdUserId.Value = usr;
            DataTable dt1 = new DataTable();
        dt1 = oh.ExecuteDataSet("select b.bucket_id from tbl_crc_bucket_emp_dtl b where b.emp_code='" + usr + "'").Tables[0];
            //string bk_id= dt1.Rows[0][0];
        }
    public class GetDropDownData
    {
        public string Emp_code { get; set; }
        public string Emp_name { get; set; }
        public string bucket_id { get; set; }
        public string bucket_lang { get; set; }


    }
    [WebMethod(EnableSession = true)]
    public static List<GetDropDownData> Bind_Emp_Drp()

    {
        DataSet ds;
        DataTable dt = new DataTable();



        ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
        ds = obj1.ITCSelect("QA_module", "get_QAemp_dropdwn", "", "", "");
        List<GetDropDownData> getData = new List<GetDropDownData>();

        if (ds.Tables[0].Rows.Count > 0)
        {
            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                getData.Add(new GetDropDownData()
                {
                    Emp_code = dr[0].ToString(),
                    Emp_name = dr[1].ToString(),
                    //bucket_lang = dr[2].ToString(),
                    //bucket_id = dr[3].ToString()

                });

            }
        }
        return getData;
    }
    [WebMethod(EnableSession = true)]
    public static string Get_emp_dtl(string caller_id)
    {
        DataSet ds;
        string str = "";
        DataTable dt = new DataTable();

        ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("QA_module", "get_QAemp_dropdwn", "", "", "");
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
    [WebMethod(EnableSession = true)]
    public static string ConfirmVerification(string data)
    {
        DataSet ds;
        DataTable dt = new DataTable();

        ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
        ds = obj1.ITCSelect("QA_module", "CONFIRM_DATA", data, "", "");
        
        string result = ds.Tables[0].Rows[0][0].ToString();
        return result;
    }
        [WebMethod(EnableSession = true)]
        public static string AddConfirm(string item, string user, string emdata)
        {
            DataSet ds;
            DataTable dt = new DataTable();

            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            // ds = obj1.ITCSelect("QA_module", "CONFIRM_DATA", data, "", "");
            ds = obj1.ITCSelect("QA_module", "Qst_confirm", item, user, emdata);
            string result = ds.Tables[0].Rows[0][0].ToString();
            return result;
        }

        [WebMethod(EnableSession = true)]
        public static string total_mrk(string typ)
        {
            DataSet ds;
            DataTable dt = new DataTable();

            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("QA_module", "total_mrk",typ, "", "");
            string result = ds.Tables[0].Rows[0][0].ToString();
            if (dt.Rows.Count > 0)
            {
               
            }
            
            return result;
        }

        [WebMethod(EnableSession = true)]
    public static string Assign_to_all()
    {
        DataSet ds;
        DataTable dt = new DataTable();

        ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
        ds = obj1.ITCSelect("assign_to_all", "", "", "", "admin");
        string result = ds.Tables[0].Rows[0][0].ToString();
        return result;
    }
        [WebMethod(EnableSession = true)]

        public static string get_al_checks()
        {

            DataSet ds;
            int i = 0;
            string result = "";
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("QA_module", "get_quest", "", "", "");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        result = result + Convert.ToString(ds.Tables[0].Rows[i][0]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][2]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][3]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][4]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][5]) + "!";
                        i = i + 1;
                    }
                }
                else
                {
                    result = "not found";
                }
                
            }
            catch (Exception ex)
            {
            }
            return result;
        }
        [WebMethod(EnableSession = true)]

        public static string show_check_ah(string typ, string val)
        {
            val = HttpContext.Current.Session["username"].ToString();
            DataSet ds;
            string result = "";
            int i = 0;
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("QA_module", "get_checklist_qst_ah", typ, val, "");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        result = result + Convert.ToString(ds.Tables[0].Rows[i][0]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][2]) + "!";
                        i = i + 1;
                    }
                }
                else
                {
                    result = "not found";
                }
            }
            catch (Exception ex)
            {
            }

            return result;
        }

    }
}