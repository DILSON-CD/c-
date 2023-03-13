//crf id----355646------
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.OleDb;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ITCPortal
{
    public partial class admin_index : System.Web.UI.Page
    {
        string result, userid,excel_bucket;
        protected void Page_Load(object sender, EventArgs e)
        {

            userid = Session["username"].ToString();
            hdUserId.Value = userid;
          
        }
        public class GetDropDownData
        {
            public string bucket_id { get; set; }
            public string bucket_name { get; set; }
            
        }
        public class drpDtls
        {
            public string did { get; set; }
            public string dname { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<GetDropDownData>get_bucket(string input)//listing languages
        {
            DataSet ds;
            DataTable dt = new DataTable();


            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect(input, "", "", "", "admin");
            List<GetDropDownData> getData = new List<GetDropDownData>();
            
            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    getData.Add(new GetDropDownData()
                    {
                        bucket_id = dr[0].ToString(),
                        bucket_name = dr[1].ToString()

                    });

                }
            }
            return getData;
        }
        [WebMethod(EnableSession = true)]
        public static string confirm_bucket(string data,string user)
        {
            DataSet ds;
            DataTable dt = new DataTable();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
           // GU~GUJARATHI~358536 - DANIYA$GU~GUJARATHI~358536 - DANIYA$@33
            //string count= data.Split('@').ToString();
            //  data= GU~GUJARATHI~358536 - DANIYA$@55
           
            string count = data.Split('@')[1].ToString();
            data = data.Split('@')[0].ToString();
            ds = obj1.ITCSelect("confirm_newbucket", count, data, user, "admin");

            string result = ds.Tables[0].Rows[0][0].ToString();
            return result;
        }
        [WebMethod(EnableSession = true)]
        public static List<GetDropDownData> edit_bucket(string input)//listing bucket details
        {
            DataSet ds;
            DataTable dt = new DataTable();


            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect(input, "", "", "", "admin");
            List<GetDropDownData> getbucketdtl = new List<GetDropDownData>();

            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    getbucketdtl.Add(new GetDropDownData()
                    {
                        bucket_id = dr[0].ToString(),
                        bucket_name = dr[1].ToString()

                    });

                }
            }
            return getbucketdtl;
        }
        [WebMethod(EnableSession = true)]
        public static string confirm_editbucket(string data,string flag, string user)
        {
            DataSet ds;
            DataTable dt = new DataTable();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            if (flag == "0")
            {
                ds = obj1.ITCSelect("delete_bucket", "", "", data, "admin");
            }
            else
            {
                ds = obj1.ITCSelect("confirm_editbucket", user, data, flag, "admin");
            }

            string result = ds.Tables[0].Rows[0][0].ToString();
            return result;
        }
        protected void btn_confirm_Click(object sender, EventArgs e)
        {
            DataSet ds;
            DataTable dt1,dt2,dt3,dtt = new DataTable();
            string source_id="";
            string product="";
            string social_media_id = "";
           
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            GHelper.Report.ExcelExport Gobj = new GHelper.Report.ExcelExport();
            string connectionString = "";
            try
            {
                //string id1 = hd_leadsource_id.Value;
                //string id2 = hd_products_id.Value;
                //if (id1 == "-1" && id2=="-1")
                //{
                //    System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();


                //    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert(1);", true);
                //}
                //else if (id1=="-1")
                //{
                //    System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();


                //    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert(2);", true);
                //}
                //else if (id2 == "-1")
                //{
                //    System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();


                //    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert(3);", true);
                //}
                //else
                //{
                    if (FileUpload1.HasFile)
                    {

                        string FileName = Path.GetFileName(FileUpload1.PostedFile.FileName);
                        string Extension = Path.GetExtension(FileUpload1.PostedFile.FileName);
                        string fileLocation = Server.MapPath(FileName);
                        int length = FileUpload1.PostedFile.ContentLength;
                        byte[] pic = new byte[length];
                        FileUpload1.PostedFile.InputStream.Read(pic, 0, length);
                        Random random = new Random();
                        int num = random.Next();
                        string FolderPath = ConfigurationManager.AppSettings["FolderPath"];
                        string FilePath = Server.MapPath(FolderPath + FileName);

                        FileUpload1.SaveAs(FilePath);

                        if (Extension == ".xls")
                        {
                            if (Environment.GetEnvironmentVariable("PROCESSOR_ARCHITECTURE") == "x86")
                            {
                                connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + FilePath + ";Extended Properties=\"Excel 8.0;HDR=YES;\"";
                            }
                            else
                            {
                                connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + FilePath + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=1\"";

                            }

                        }
                        else
                        {
                            System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();
                            
                        ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert(1);", true);
                        
                        }
                        OleDbConnection con = new OleDbConnection(connectionString);
                        OleDbCommand cmd = new OleDbCommand();
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.Connection = con;
                        OleDbDataAdapter dAdapter = new OleDbDataAdapter(cmd);
                        DataTable dtExcelRecords = new DataTable();

                        con.Open();
                        DataTable dtExcelSheetName = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
                        string getExcelSheetName = dtExcelSheetName.Rows[0]["Table_Name"].ToString();
                        cmd.CommandText = "SELECT * FROM [" + getExcelSheetName + "]";
                        dAdapter.SelectCommand = cmd;
                        dAdapter.Fill(dtExcelRecords);
                        con.Close();
                        if (dtExcelRecords.Rows.Count > 25000)
                        {
                            System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();
                      
                        ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert(2);", true);
                    }

                        foreach (DataRow dr in dtExcelRecords.Rows)
                        {
                            string LEAD_SOURCE_CAT;
                            string SM_LEADSOURCE_ID;
                            DateTime LEAD_DATE;
                           string INSERTED_BY= userid;
                            string BRANCH_ID;
                           
                            string CUST_NAME;
                            string CUST_MAIL;
                            string MOBILE_NUMBER;
                            string PRODUCT_ID;
                            string PRODUCT_NAME;
                         string BUCKET_ID;
                           try
                            {
                                LEAD_SOURCE_CAT = dr[0].ToString();
                            if (LEAD_SOURCE_CAT != "DIGITAL MARKETING")
                            {
                                social_media_id = "0";
                            }
                               
                                else
                                {
                                    SM_LEADSOURCE_ID = dr[1].ToString();
                                    dt2 = obj1.ITCSelect("get_social_media", SM_LEADSOURCE_ID, "", "", "admin").Tables[0];
                                    social_media_id = dt2.Rows[0][0].ToString();
                                }
                                
                                LEAD_DATE = Convert.ToDateTime(dr[2].ToString());
                                BRANCH_ID = dr[3].ToString();
                                CUST_NAME = dr[4].ToString();
                                CUST_MAIL = dr[5].ToString();
                                MOBILE_NUMBER = dr[6].ToString();
                                PRODUCT_NAME= dr[7].ToString();
                                 dt1 = obj1.ITCSelect("get_source", LEAD_SOURCE_CAT, "", "", "admin").Tables[0];
                               
                                      source_id = dt1.Rows[0][0].ToString();

                                dt3 = obj1.ITCSelect("get_product", PRODUCT_NAME, " ", " ", "admin").Tables[0];
                                if (dt3.Rows.Count > 0)
                                {
                                    product = dt3.Rows[0][0].ToString();
                                }
                                string finalValue = source_id + "~"+ social_media_id + "~"+ LEAD_DATE.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture) + "~" + userid + "~"+ BRANCH_ID + "~" + CUST_NAME + "~" + CUST_MAIL + "~" + MOBILE_NUMBER+"~"+ hd_chngebucket_id.Value;
                            ds = obj1.ITCSelect("Excel_upload", product, finalValue, PRODUCT_NAME, "admin");
                            result = ds.Tables[0].Rows[0][0].ToString();


                            }
                            catch (Exception ex)
                            {
                            //System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();
                            //cl_script1.Append("alert('" + ex.Message + "'dfghjkl');");
                            ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "ecxeption('" + ex.Message + "');", true);
                           
                                return;
                            }

                        }


                        
                        ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert('"+result+"');", true);

                        return;

                    }

                    else
                    {




                        System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();
                        

                        ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert(4);", true);


                       
                        return;

                    }
                
            }


            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "ecxeption('" + ex.Message + "');", true);

                return;
            }

        }
        [WebMethod(EnableSession = true)]
        public static List<drpDtls> list_employee(string indata)
        {

            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            
            List<drpDtls> getData = new List<drpDtls>();
            DataSet ds;

            ds = obj1.ITCSelect(indata, "", "", "", "admin");
            try
            {

                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        getData.Add(new drpDtls()
                        {
                            did = dr[0].ToString(),
                            dname = dr[1].ToString()
                        });
                    }
                }
            }
            catch (Exception ex)
            {
                
            }
            return getData;
        }
        //[WebMethod(EnableSession = true)]
        //public static List<drpDtls> Load_Lead_Products(string indata)
        //{
        //    ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
        //    List<drpDtls> brdtls = new List<drpDtls>();
        //    DataTable dt = new DataTable();

        //    dt = obj1.ITCSelect(indata, "", "", "", "admin").Tables[0];
         
           
           
        //    if (dt.Rows.Count > 0)
        //    {
        //        foreach (DataRow dr in dt.Rows)
        //        {
        //            brdtls.Add(new drpDtls()
        //            {
        //                did = dr[0].ToString(),
        //                dname = dr[1].ToString()
        //            });
        //        }
        //    }
        //    return brdtls;
        //}
        [WebMethod(EnableSession = true)]
        public static string add_newbucket(string indata)
        {
            DataSet ds;
            DataTable dt = new DataTable();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("create_bucket", indata, "", "", "admin");

            string result = ds.Tables[0].Rows[0][0].ToString();
            return result;
        }
        [WebMethod(EnableSession = true)]
        public static string show_bucket(string data)
        {

            DataSet ds;
            DataTable dt = new DataTable();
            string str = "";
            int i = 0;
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("display_bucket", data, "", "", "admin");
            // ds = obj.CommonSelect("DOORSTEP", "insertdata", data, "");//insertdata
            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    str = str + ds.Tables[0].Rows[i][0].ToString();
                    i++;
                }
            }
            return str;
        }
        [WebMethod(EnableSession = true)]
        public static List<GetDropDownData> repeat_bucket(string input)//listing bucket details
        {
            DataSet ds;
            DataTable dt = new DataTable();


            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect(input, "", "", "", "admin");
            List<GetDropDownData> getbucketdtl = new List<GetDropDownData>();

            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    getbucketdtl.Add(new GetDropDownData()
                    {
                        bucket_id = dr[0].ToString(),
                        bucket_name = dr[1].ToString()

                    });

                }
            }
            return getbucketdtl;
        }
        [WebMethod(EnableSession = true)]
        public static string check_duplication(string data)
        {
            DataSet ds;

            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("check_repeatation", "", data, "", "admin");
            string result = ds.Tables[0].Rows[0][0].ToString();
            return result;
        }

        [WebMethod(EnableSession = true)]
        public static string get_bucketsize(string indata)
        {
            DataSet ds;

        ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
        ds = obj1.ITCSelect("get_bucketsize", "", indata, "", "admin");
            string result = ds.Tables[0].Rows[0][0].ToString();
            return result;
        }

        [WebMethod(EnableSession = true)]
        public static string confirm_exchange(string empcode,string xchange_empcode)
        {
            DataSet ds;

            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect("xchange_employee", "", empcode, xchange_empcode, "admin");
            string result = ds.Tables[0].Rows[0][0].ToString();
            return result;
        }
        [WebMethod(EnableSession = true)]
        public static List<GetDropDownData>Excel_bucket(string input)//listing bucket details
        {
            DataSet ds;
            DataTable dt = new DataTable();


            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds = obj1.ITCSelect(input, "", "", "", "admin");
            List<GetDropDownData> getbucketdtl = new List<GetDropDownData>();

            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    getbucketdtl.Add(new GetDropDownData()
                    {
                        bucket_id = dr[0].ToString(),
                        bucket_name = dr[1].ToString()

                    });

                }
            }
            return getbucketdtl;
        }


        [WebMethod(EnableSession = true)]
        public static string switchQA(string input)
        {
            DataSet ds;
            string result = "";
            string userid = HttpContext.Current.Session["username"].ToString();
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            try
            {

                ds = obj1.ITCSelect(input, userid, " ", " ", "admin");
                if (ds.Tables[0].Rows.Count > 0)
                {
                    result = ds.Tables[0].Rows[0][0].ToString();
                }


            }
            catch (Exception ex)
            {

            }
            return result;
        }

    }
    


}