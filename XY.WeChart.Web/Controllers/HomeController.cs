﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace XY.WeChart.Web.Controllers
{
    [Filters.AuthorizeFilter]
    public class HomeController : Controller
    {
        public ActionResult JSCallBack()
        {
            return View();
        }
        public ActionResult Index()
        {




            return View();
        }
        public ActionResult Edit()
        {
            return View();
        }
        public ActionResult Error()
        {
            return View();
        }
        public void wxCall() {
            string xcx;
        }

    }
}