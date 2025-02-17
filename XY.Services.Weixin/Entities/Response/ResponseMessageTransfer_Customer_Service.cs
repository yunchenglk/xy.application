﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XY.Entity.Weixin;

namespace XY.Services.Weixin.Entities
{
    public class ResponseMessageTransfer_Customer_Service : ResponseMessageBase, IResponseMessageBase
    {
        public ResponseMessageTransfer_Customer_Service()
        {
            TransInfo = new List<CustomerServiceAccount>();
        }

        new public virtual ResponseMsgType MsgType
        {
            get { return ResponseMsgType.Transfer_Customer_Service; }
        }

        public List<CustomerServiceAccount> TransInfo { get; set; }
    }
    public class CustomerServiceAccount
    {
        public string KfAccount { get; set; }
    }
}
