using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.IO;
using System.Data.OracleClient;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Services;
namespace MaSales.meeting_minutes
{
    public partial class attach_meeting : System.Web.UI.Page
    {



        protected void Page_Load(object sender, EventArgs e)
        {
        }
        [WebMethod(EnableSession = true)]
        public static string Upload(string upload_file, string inputdata)
        {
            string Result = "";



            DataTable dt = new DataTable();
           



            try
            {



                string result = "";
                string val = HttpContext.Current.Session["username"].ToString();
               
                    string InputString = upload_file.Split(',')[1];
                    Byte[] imgByte = Convert.FromBase64String(InputString);
                    HoAppservice.HoAppserClient obj1 = new HoAppservice.HoAppserClient();
                    string samp1 =  inputdata + '~' + val;
                    result = obj1.DocumentUpload("108", samp1, imgByte);
                if(result== "Successfully Uploaded") { 


                    Result = "Successfull";
                }
                else
                {
                    Result = "Not Updated";
                }
                return Result;
            }
            catch (Exception ex)
            {
                Result = "Sorry.....Unable to Process";
            }
            return Result;
        }
    }
}