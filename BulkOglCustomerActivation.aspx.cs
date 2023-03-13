using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaSales.BulkOglCustomerActivation
{
    public partial class BulkOglCustomerActivation : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string user = HttpContext.Current.Session["username"].ToString();
            DataSet ds;
            //DataTable dt = new DataTable();

            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("DOORSTEP", "entrance", user, " ");

            if (ds.Tables[0].Rows.Count == 0)
            {
                Response.Redirect("../Err_Page.aspx");
            }
        }
        [WebMethod(EnableSession = true)]
        public static string click(string bocflg)
        {
            DataTable dt = new DataTable();
            string res = "";
            string str = "";

            
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            dt = obj.CommonSelect("DOORSTEP", bocflg, "", " ").Tables[0];
            str = dt.Rows[0][0].ToString();
            if (str == "111")
            {
                res = "Activated successfully";

            }else if (str == "222")
            {
                res = "Already Updated";
            }
            else
            {
                res = "Something went wrong";
            }
           



     
            


            return res;
        }
    }
}