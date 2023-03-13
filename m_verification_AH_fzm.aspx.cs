using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HoApps.Marketing_check
{
    public partial class m_verification_AH_fzm : System.Web.UI.Page
    {
        static string emp_code = "";
        static string branch_id = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            string usr;
            usr = Session["username"].ToString();
            this.hdUserId.Value = usr;
            string fimid = Session["firm_id"].ToString();
            string usrid = usr + '~' + fimid;
            this.hdUserId1.Value = usrid;
            this.hdBrId.Value = Session["branch_id"].ToString();
            

            emp_code = HttpContext.Current.Session["username"].ToString();
            branch_id = HttpContext.Current.Session["branch_id"].ToString();
        }
        public class GetDropDownData
        {


            public string ID { get; set; }
            public string Name { get; set; }
        }



        [WebMethod(EnableSession = true)]
        public static List<GetDropDownData> Getprps(string typ, string typ1, string val)
        {
            string usr = HttpContext.Current.Session["username"].ToString();
            DataSet ds;
            string input= val+"^"+ usr+"^"+ branch_id;
            List<GetDropDownData> getData = new List<GetDropDownData>();
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            
            ds = obj.CommonSelect(typ, typ1, input, "");

            try

            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        getData.Add(new GetDropDownData()
                        {
                            ID = dr[1].ToString(),
                            Name = dr[0].ToString()


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

        public static string filldetails(string typ, string val)
        {
            DataSet ds;
            string result = "";
            int i = 0;
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "getact_details", typ, val);//type=120508,

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        result = result + Convert.ToString(ds.Tables[0].Rows[i][0]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][2]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][3]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][4]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][5]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][6]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][7]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][8]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][9]);
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
            //30-10-2009 00:00:00^11.72^0^5000^^^25-10-2020 00:00:00^31-10-2020 00:00:00^EAGLE ENTERPRISES^2625
        }
        [WebMethod(EnableSession = true)]

        public static string ch_scn(string typ, string val)
        {
            val = HttpContext.Current.Session["username"].ToString();
            typ = branch_id;
            DataSet ds;
            string result = "";
            int i = 0;
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "rm_check_scenerio", val, typ);

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        result = result + Convert.ToString(ds.Tables[0].Rows[i][0]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][2]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][3]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][4]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][5]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][6]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][7]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][8]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][9]);
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

        public static string getpst_forcheck(string typ, string val)
        {
            val = HttpContext.Current.Session["username"].ToString();
            DataSet ds;
            string result = "";
            int i = 0;
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "getpst_chk", val, typ);

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        result = result + Convert.ToString(ds.Tables[0].Rows[i][0]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][1]);
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

        public static string get_al_checks(string typ, string val)
        {

            DataSet ds;
            string result = "";
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "check_al_add", typ, val);

            try
            {


                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = result + Convert.ToString(ds.Tables[0].Rows[0][0]);

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
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "get_checklist_qst_ah", typ, val);

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        result = result + Convert.ToString(ds.Tables[0].Rows[i][0]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[i][2])+ "!";
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

        public static string show_check_rm(string typ, string val)
        {
            val = HttpContext.Current.Session["username"].ToString();
            DataSet ds;
            string result = "";
            int i = 0;
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "get_checklist_qst_rm", typ, val);

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
            result = result + "$" + Convert.ToString(ds.Tables[0].Rows[0][3]) + "$" + Convert.ToString(ds.Tables[0].Rows[0][4]);
          //  result = result + "$" + Convert.ToString(ds.Tables[0].Rows[0][3]);
            return result;
        }
       
        [WebMethod(EnableSession = true)]

        public static string confirmchecklist(string typ, string val)

        {
           
            DataSet ds;
            string result = "";
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "confirm_cheklists", typ, val);

            try
            {


                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = result + Convert.ToString(ds.Tables[0].Rows[0][0]) ;

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

        public static string Getpst(string typ, string val)
        {
            typ = HttpContext.Current.Session["username"].ToString();
            DataSet ds;
            string result = "";
            int i = 0;
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "get_postid", typ, val);

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = result + Convert.ToString(ds.Tables[0].Rows[0][0]) + "^" + Convert.ToString(ds.Tables[0].Rows[0][1]);

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

        public static string confirm_marks(string typ, string val)
        {
            //string usr = HttpContext.Current.Session["username"].ToString();

            //string br_id = HttpContext.Current.Session["branch_id"].ToString();
            //val = usr + '^' + br_id;
            DataSet ds;
            string result = "";
            string log_data = "";
            DataTable dt1;
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "marketing_act_confirm", typ, val);
            log_data = branch_id + "~" + emp_code + "~" + "101538" + "~" + "oversee module ";


            dt1 = obj.CommonSelect("DOORSTEP", "insert_log", "", log_data).Tables[0];
            try
            {


                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = result + Convert.ToString(ds.Tables[0].Rows[0][0]);

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
        public static List<GetDropDownData> GetActivity(string typ, string typ1, string val,string option)
        {
            string usr = HttpContext.Current.Session["username"].ToString();
            DataSet ds;
            string input = val + "^" + usr + "^" + branch_id;
            List<GetDropDownData> getData = new List<GetDropDownData>();
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();

            ds = obj.CommonSelect(typ, typ1, input, option);

            try

            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        getData.Add(new GetDropDownData()
                        {
                            ID = dr[1].ToString(),
                            Name = dr[0].ToString()


                        });
                    }
                }
            }
            catch (Exception e)
            {
            }
            return getData;
        }





        public class getDropDownData2
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        [WebMethod(EnableSession = true)]
        public static List<getDropDownData2> getFillDoc(string val1)
        {
            DataSet ds;
            List<getDropDownData2> getData = new List<getDropDownData2>();
            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            ds = obj.CommonSelect("AH_MARK_VERIFICATION","GetDoc",val1,"");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        getData.Add(new getDropDownData2()
                        {
                            id = dr[1].ToString(),
                            name = dr[0 ].ToString()
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
        public static string VIEWDOCU(string activity_id, string val)
        {

            DataSet ds;

            byte[] s;

            CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();

           // int actiint.Parse(activity_id);
            //DataTable dt = new DataTable();

            string res = "0";
            //string viewdocuments = viewqtn + "^" + viewinvoice + "^" + viewpo;
            ds = obj.CommonSelect("AH_MARK_VERIFICATION", "viewdoc", activity_id, val);
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
                        m_verification_AH_fzm d = new m_verification_AH_fzm();
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
            m_verification_AH_fzm d = new m_verification_AH_fzm();
            d.fileDelete(fname);
            return "File Deleted Successfully";
        }
        public void fileDelete(string fname)
        {
            System.IO.File.Delete(Server.MapPath("~/image/" + fname));
        }
    }
}






