﻿namespace XY.Entity.Weixin
{
    /// <summary>
    /// 高级接口获取的用户信息
    /// </summary>
    public class UserInfoJson: WxJsonResult
    {
        public int subscribe { get; set; }
        public string openid { get; set; }
        public string nickname { get; set; }
        public int sex { get; set; }
        public string language { get; set; }
        public string city { get; set; }
        public string province { get; set; }
        public string country { get; set; }
        public string headimgurl { get; set; }
        public long subscribe_time { get; set; }
        public int groupid { get; set; }
    }
}
