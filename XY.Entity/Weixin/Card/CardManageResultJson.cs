﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace XY.Entity.Weixin
{
    /// <summary>
    /// 删除卡券返回结果
    /// </summary>
    public class CardDeleteResultJson : WxJsonResult
    {
    }

    /// <summary>
    /// 查询code返回结果
    /// </summary>
    public class CardGetResultJson : WxJsonResult
    {
        /// <summary>
        /// 用户openid
        /// </summary>
        public string openid { get; set; }
        public Get_Card card { get; set; }
    }

    public class Get_Card
    {
        /// <summary>
        /// 卡券ID
        /// </summary>
        public string card_id { get; set; }
        /// <summary>
        /// 起始使用时间
        /// </summary>
        public string begin_time { get; set; }
        /// <summary>
        /// 结束时间
        /// </summary>
        public string end_time { get; set; }
    }

    /// <summary>
    /// 批量查询卡列表返回结果
    /// </summary>
    public class CardBatchGetResultJson : WxJsonResult
    {
        public List<string> card_id_list { get; set; }
        public int total_num { get; set; }
    }

    /// <summary>
    /// 查询卡券详情返回结果
    /// </summary>
    public class CardDetailGetResultJson : WxJsonResult
    {
        public CardDetail card { get; set; }
    }

    public class CardDetail : BaseCardDetails
    {
        /// <summary>
        /// 卡券类型
        /// </summary>
        public string card_type { get; set; }
    }

    /// <summary>
    /// 会员卡交易返回结果
    /// </summary>
    public class MemberCardDeal : WxJsonResult
    {
        /// <summary>
        /// 当前用户积分总额
        /// </summary>
        public decimal result_bonus { get; set; }
        /// <summary>
        /// 当前用户预存总金额
        /// </summary>
        public decimal result_balance { get; set; }
        /// <summary>
        /// 用户openid
        /// </summary>
        public string openid { get; set; }
    }
}
