﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XY.Entity;

namespace XY.Services.Weixin.Entities
{
    /// <summary>
    /// 微信公众服务器Post过来的加密参数集合（不包括PostData）
    /// </summary>
    public class PostModel : EncryptPostModel
    {
        //以下信息不会出现在微信发过来的信息中，都是微信后台需要设置（获取的）的信息，用于扩展传参使用
        public string AppId { get; set; }

        /// <summary>
        /// 设置服务器内部保密信息
        /// </summary>
        /// <param name="token"></param>
        /// <param name="encodingAESKey"></param>
        /// <param name="appId"></param>
        public void SetSecretInfo(string token, string encodingAESKey, string appId)
        {
            Token = token;
            EncodingAESKey = encodingAESKey;
            AppId = appId;
        }
    }
}
