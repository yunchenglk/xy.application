﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace XY.Entity.Weixin
{
    /// <summary>
    /// 获取授权方的选项设置信息返回结果
    /// </summary>
    public class AuthorizerOptionResult : WxJsonResult
    {
        /// <summary>
        /// 第三方平台appid
        /// </summary>
        public string authorizer_appid { get; set; }
        /// <summary>
        /// 授权公众号appid
        /// </summary>
        public string option_name { get; set; }
        /// <summary>
        /// 选项名称
        /// </summary>
        public string option_value { get; set; }

    }
}