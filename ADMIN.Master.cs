using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Data;
using System.Data.OleDb;
using System.IO;
using System.Configuration;
using System.Collections;
using System.Net.Mail;

namespace ITCPortal
{
    public partial class ADMIN : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("SessionExpired.aspx");
            }
            string user = Session["username"].ToString();
            String mid = "";
            if (string.IsNullOrEmpty(Request.QueryString["mid"] as string))
            {
                mid = "";
            }
            else
            {
                mid = Request.QueryString["mid"];
            }

            string user_name = Session["user_name"].ToString();


            //uname.InnerHtml = user_name;
           // uname1.InnerHtml = user_name;
            uname2.InnerHtml = user_name;

            //DataTable dt = new DataTable();
            //ServiceReference1.ITCServiceClient obj1 = new ServiceReference1.ITCServiceClient();
            //dt = obj1.ITCSelect("MENUACCESS", user, "MAIN_MENU", "", "").Tables[0];
            //if (dt.Rows.Count > 0)
            //{
            //    rpt_mainmenu.DataSource = dt;
            //    rpt_mainmenu.DataBind();
            //}
            Image1.ImageUrl = "ImageShow.ashx?id=" + user;
            //Image2.ImageUrl = "Images/user-icon.png";
            //Image3.ImageUrl = "ShowImage.ashx?id=" + user;

            this.hdUserId.Value = Session["username"].ToString();
            this.hdBranchId.Value = Session["branch_id"].ToString();
            this.hdFirmId.Value = Session["firm_id"].ToString();
        }
        protected void rpt_mainmenu_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {

            if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
            {
                if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
                {
                    //string MenuId = (e.Item.FindControl("MenuId") as HiddenField).Value;
                    int MenuId = Convert.ToInt32(DataBinder.Eval(e.Item.DataItem, "ID"));
                    Repeater rpt_submenu = e.Item.FindControl("rpt_submenu") as Repeater;
                    string user = Session["username"].ToString();
                    DataTable dt = new DataTable();
                    ServiceReference1.ITCServiceClient obj = new ServiceReference1.ITCServiceClient();
                    //dt = obj.ITCSelect("MENUACCESS", user, "SUBMENU", Convert.ToString(MenuId), "").Tables[0];
                    dt = obj.ITCSelect("SUBMENU", user, "SUBMENU", Convert.ToString(MenuId), "").Tables[0];

                    //dt = obj.PurchaseFillData("MENUACCESS", user, "SUBMENU", Convert.ToString(MenuId)).Tables[0];
                    if (dt.Rows.Count > 0)
                    {
                        rpt_submenu.DataSource = dt;
                        rpt_submenu.DataBind();
                    }

                }
            }
        }

    }
}