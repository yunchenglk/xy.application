﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace XY.API.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // XY.Services.WebSitesService.instance().GetUrlToList(true);
            ViewBag.Title = "Home Page";

            return View();
        }
        public ActionResult userCallBack()
        {
 

            return View();
        }
    }
}
