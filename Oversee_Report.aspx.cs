using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HoApps.Marketing_check
{
    public partial class Oversee_Report : System.Web.UI.Page
    {
        string frdt, todt, mnuId, mnuName, unid, stid, emp_cd;
        DataSet ds, ds1,ds2 = new DataSet();
        DataTable dt1 = new DataTable();
        CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
        protected void Page_Load(object sender, EventArgs e)
        {
            mnuId = Request.QueryString.Get("mnuId");
            mnuName = Request.QueryString.Get("mnuName");
            frdt = Request.QueryString.Get("frdt");
            todt = Request.QueryString.Get("todt");


            string indata = mnuId + "~" + frdt + "~" + todt;
            emp_cd = Session["username"].ToString();

            ds = obj.CommonSelect("DOORSTEP", "GETREPORTS", "", indata);
            ds2= obj.CommonSelect("DOORSTEP", "get_fzm_id", "", emp_cd);
            ds1 = obj.CommonSelect("DOORSTEP", "GETREPDATA", "", mnuId + "~" + "25");
            DataTableToHTMLTable(ds.Tables[0]);
            lblTitle.Text = ds1.Tables[0].Rows[0][2].ToString();
            if (ds1.Tables[0].Rows[0][0].ToString() == "1")
            {

                dt1 = obj.CommonSelect("DOORSTEP", "EMPLOYEEDT", "", emp_cd).Tables[0];

                if ((dt1.Rows[0][1].ToString() == "136") || (dt1.Rows[0][1].ToString() == "197")) //AH
                {
                    mnuId = (Int32.Parse(mnuId) + 1).ToString();
                    indata = mnuId + "~" + frdt + "~" + todt + "~" + "" + "~" + "" + "~" + dt1.Rows[0][3].ToString();
                }
                else if (dt1.Rows[0][1].ToString() == "199")
                {
                    mnuId = (Int32.Parse(mnuId) + 2).ToString();
                    indata = mnuId + "~" + frdt + "~" + todt + "~" + "" + "~" + "" + "~" + dt1.Rows[0][4].ToString();

                }
                else if (dt1.Rows[0][1].ToString() == "-36")
                {
                    mnuId = (Int32.Parse(mnuId) + 3).ToString();
                    indata = mnuId + "~" + frdt + "~" + todt + "~" + "" + "~" + "" + "~" + ds.Tables[0].Rows[0][1].ToString();


                }
                else
                {
                    indata = mnuId + "~" + frdt + "~" + todt + "~" + "" + "~" + "";
                }
            }
            else
            {
                indata = mnuId + "~" + frdt + "~" + todt + "~" + "" + "~" + "";
            }
                ds = obj.CommonSelect("DOORSTEP", "GETREPORTS", "", indata);


                DataTableToHTMLTable(ds.Tables[0]);
            

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
                        if (dCount == 1)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','6','6','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else if (dCount == 2)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','7','7','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else if (dCount == 3)
                        {
                            dString.AppendFormat("<td style=text-align:left><a href = javascript:GetASORPT('" + frdt + "','" + todt + "','8','8','" + dRow[0] + "')> {0} </a></td>", dRow[dCount]); //}

                        }
                        else
                        { dString.AppendFormat("<td style=text-align:left>{0}</td>", dRow[dCount]); }

                    }
                    else if (ds1.Tables[0].Rows[0][0].ToString() == "2")
                    {
                        if (dCount == 0)
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
            Response.AddHeader("content-disposition", "attachment;filename=MarketingActivityOverseeReport.xls");
            Panel1.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }


    }
}