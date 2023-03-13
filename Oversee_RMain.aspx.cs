using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Web.Services;
using System.Data;

namespace HoApps.Marketing_check
{
    public partial class Oversee_RMain : System.Web.UI.Page
    {
        public class getDropDownData
        {
            public string id { get; set; }
            public string name { get; set; }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            DataSet ds,ds1;
            DataTable dt1 = new DataTable();
            string emp_cd = Session["username"].ToString();
            ds = obj.CommonSelect("DOORSTEP", "get_access_dtl", "", emp_cd);
            ds1 = obj.CommonSelect("DOORSTEP", "get_form_access_dtl", "", emp_cd);
            dt1 = obj.CommonSelect("DOORSTEP", "EMPLOYEEDT", "", emp_cd).Tables[0];
            if ((ds.Tables[0].Rows[0][0].ToString() == "0" ) && (ds1.Tables[0].Rows[0][0].ToString() == "0")&& (dt1.Rows[0][1].ToString() != "136") && (dt1.Rows[0][1].ToString() != "197") && (dt1.Rows[0][1].ToString() != "199"))
            {
                Response.Redirect("~/Err_Page.aspx");
            }

        }
        [WebMethod(EnableSession = true)]
        public static List<getDropDownData> getFillData(string typ, string val1)
        {
            DataSet ds;
            List<getDropDownData> getData = new List<getDropDownData>();
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("DOORSTEP", "GETMENUID", "", "25");
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

      


    }
}