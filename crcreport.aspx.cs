using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ITCPortal
{
    public partial class crcreport : System.Web.UI.Page
    {
        DataSet ds, ds1 = new DataSet();
        string frdt, todt, mnuId, mnuName, unid, stid, branch_id, user, indata, post_id, zone_id, region_id, area_id, emp_id;

        protected void Page_Load(object sender, EventArgs e)
        {
           
            //string mnuId = Request.QueryString.Get("mnuId");
            // string mnuId = Decrypt(HttpUtility.UrlDecode(Request.QueryString["mnuId"]));
            mnuId = Request.QueryString.Get("mnuId");
            mnuName = Request.QueryString.Get("mnuName");
            frdt = Request.QueryString.Get("frdt");
            todt = Request.QueryString.Get("todt");
            unid = Request.QueryString.Get("unid");
            stid = Request.QueryString.Get("stid");
            emp_id= Request.QueryString.Get("employee");
            user = HttpContext.Current.Session["username"].ToString();
            branch_id = HttpContext.Current.Session["branch_id"].ToString();

           
            // string poid = Decrypt(HttpUtility.UrlDecode(Request.QueryString["poid"]));
            //string mnuName = Request.QueryString.Get("mnuName");
            //string mnuName = Request.QueryString["mnuName"];
            //PurchaseService.PurchaseClient obj = new PurchaseService.PurchaseClient();
            //ds = obj.PurchaseFillData("PURCHASEREPORT", "REPORTVIEW", mnuId, "");
            ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            ds1 = obj1.ITCSelect("GETREPDATA", "", mnuId, "1", "admin");

            indata = mnuId + "~" + frdt + "~" + todt+"~"+unid;
            //  + "~" + frdt + "~" + todt + "~" + "" + "~" + "" + "~" + "";
            ds = obj1.ITCSelect("crcreport", "", indata,"", "admin");
            DataTableToHTMLTable(ds.Tables[0]);
          //  if (ds.Tables.Count > 0)
            //{
            //    if (ds.Tables[0].Rows.Count > 0)
            //    {
            //        DataTableToHTMLTable(ds.Tables[0]);
            //        //Excel_export(ds.Tables[0]);
            //        //if (ds.Tables[0].Rows.Count > 500)
            //        //{
            //        //    Excel_export(ds.Tables[0]);
            //        //}
            //        //else
            //        //{
            //        DataTableToHTMLTable(ds.Tables[0]);
            //        //}
            //    }
            //}

            // lblTitle.Text = mnuName;
        }
        private string Decrypt(string cipherText)
        {
            //string EncryptionKey = "MAKV2SPBNI99212";
            string EncryptionKey = "J1MAORUPPHANAMN";
            cipherText = cipherText.Replace(" ", "+");
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }
        public string DataTableToHTMLTable(DataTable inTable)
        {
            System.Text.StringBuilder dString = new System.Text.StringBuilder();
            dString.Append("<table id='example' class='display' cellpadding='0' cellspacing='0' border='0'>");
            dString.Append(GetHeader(inTable));
            dString.Append(GetBody(inTable));
            dString.Append("</table>");
            MyTable.InnerHtml = dString.ToString();
            return "";
        }

        private string GetHeader(DataTable dTable)
        {
            System.Text.StringBuilder dString = new System.Text.StringBuilder();
            dString.Append("<thead><tr>");
            foreach (DataColumn dColumn in dTable.Columns)
            {
                dString.AppendFormat("<th>{0}</th>", dColumn.ColumnName);
            }
            dString.Append("</tr></thead>");
            return dString.ToString();
        }

        private string GetBody(DataTable dTable)
        {


            System.Text.StringBuilder dString = new System.Text.StringBuilder();
            dString.Append("<tbody>");
            foreach (DataRow dRow in dTable.Rows)
            {
                dString.Append("<tr class='odd_gradeX'>");
                for (int dCount = 0; dCount < dTable.Columns.Count; dCount++)
                {
                    if (ds1.Tables[0].Rows[0][0].ToString() == "3")
                    {
                        if (dCount == 0)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','670','670','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else if (dCount == 1)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','671','671','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else if (dCount == 2)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','672','672','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else if (dCount == 3)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','673','673','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else if (dCount == 4)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','674','674','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else if (dCount == 5)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','675','675','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else
                        { dString.AppendFormat("<td style=text-align:left>{0}</td>", dRow[dCount]); }

                    }


                    else if (ds1.Tables[0].Rows[0][0].ToString() == "2")
                    {
                        if (dCount == 1)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','" + ds1.Tables[0].Rows[0][1].ToString() + "','" + dRow[dCount] + "','" + stid + "')> {0} </a></td>", dRow[dCount]);
                        }
                        else
                        { dString.AppendFormat("<td style=text-align:left>{0}</td>", dRow[dCount]); }

                    }
                    else
                    { dString.AppendFormat("<td style=text-align:left>{0}</td>", dRow[dCount]); }


                }
                dString.Append("</tr>");
            }
            dString.Append("</tbody>");
            return dString.ToString();
        }

        private string GetFooter(DataTable dTable)
        {
            System.Text.StringBuilder dString = new System.Text.StringBuilder();
            dString.Append("<tfoot><tr>");
            foreach (DataColumn dColumn in dTable.Columns)
            {
                dString.AppendFormat("<th>{0}</th>", dColumn.ColumnName);
            }
            dString.Append("</tr></tfoot>");
            return dString.ToString();
        }

        protected void btn_Excel_Click(object sender, EventArgs e)
        {
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            Response.Clear();
            Response.Charset = "";
            Response.ContentEncoding = System.Text.Encoding.UTF8;
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename=customer_relation_Report.xls");
            Panel1.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();

        }
    }
}