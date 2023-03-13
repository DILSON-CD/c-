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
    public partial class view_meeting : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public class Meetingminiutes
        {
            public string meetingid { get; set; }

            public string FileName { get; set; }

        }

        [WebMethod(EnableSession = true)]


        public static List<Meetingminiutes> GetTable(string datee)
        {
           
            DataTable dt = new DataTable();
            List<Meetingminiutes> GridDta = new List<Meetingminiutes>();
            string str = "";
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            dt = obj.CommonSelect("DOORSTEP", "getdataa", datee, " ").Tables[0];
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    GridDta.Add(new Meetingminiutes()
                    {

                        meetingid = dr[0].ToString(),

                        FileName = dr[1].ToString(),

                    }



                        );

                }
            }

           
            return GridDta;
        }
        [WebMethod(EnableSession = true)]
        public static string OPENDOC(string meet_id)
        {
            


            byte[] s;
          
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            
          
            DataTable dt = new DataTable();
            DataSet ds;
            string res = "0";
           
            ds = obj.CommonSelect("DOORSTEP", "getblob", meet_id, "");
            if (ds.Tables[0].Rows.Count == 0)
            { return res; }
            else
            {
                string DocFileName = ds.Tables[0].Rows[0][1].ToString();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    if ((ds.Tables[0].Rows[0][0].ToString()) != "")
                    {
                        s = (byte[])(ds.Tables[0].Rows[0][0]);
                        string ct = ds.Tables[0].Rows[0][2].ToString();
                        view_meeting d = new view_meeting();
                        d.DownloadFile(DocFileName, s, ct);
                    }
                }
                return DocFileName;
            }
        }
        public void DownloadFile(string fn, byte[] s, string ct)
        {
            string FileName = fn;
            System.Web.HttpResponse Response = System.Web.HttpContext.Current.Response;
            using (Stream file = File.OpenWrite(Server.MapPath("~/image/" + fn)))
            {
                file.Write(s, 0, s.Length);
            }
        }

        [WebMethod(EnableSession = true)]
        public static string deleteDownloadFile(string input)
        {
            string fname = input;
            view_meeting d = new view_meeting();
            d.fileDelete(fname);
            return "File Deleted Successfully";
        }
        public void fileDelete(string fname)
        {
            System.IO.File.Delete(Server.MapPath("~/image/" + fname));
        }

        [WebMethod(EnableSession =true)]
        public static string viewstatus(string input)
        {
            string val = HttpContext.Current.Session["username"].ToString();

            DataTable dt;
        
            string res = "";
            string str = "";
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            dt = obj.CommonSelect("DOORSTEP", "view_status", input, val).Tables[0];
            str = dt.Rows[0][0].ToString();
            if (str=="111")
            {
                res="Document Read";

            }
            
            return res;

        }

        [WebMethod(EnableSession = true)]
        public static string VConfirm(string input)
        {
            DataTable dt;
          
            string res = "";
            string str = "";
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            dt = obj.CommonSelect("DOORSTEP", "confirm_status", input, " ").Tables[0];
            str = dt.Rows[0][0].ToString();
            if (str == "111")
            {
                res = "Document Confirmed";

            }

            return res;

        }
    }

    }








