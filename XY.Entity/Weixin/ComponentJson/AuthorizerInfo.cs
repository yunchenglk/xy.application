﻿namespace XY.Entity.Weixin
{
    public class ServiceTypeInfo
    {
        public ServiceType id { get; set; }
    }

    public class VerifyTypeInfo
    {
        public VerifyType id { get; set; }
    }
    public class AuthorizerInfo
    {
        /// <summary>
        /// 授权方昵称
        /// </summary>
        public string nick_name { get; set; }
        /// <summary>
        /// 授权方头像
        /// </summary>
        public string head_img { get; set; }
        /// <summary>
        /// 授权方公众号类型，0代表订阅号，1代表由历史老帐号升级后的订阅号，2代表服务号
        /// </summary>
        public ServiceTypeInfo service_type_info { get; set; }
        /// <summary>
        /// 授权方认证类型，
        /// -1代表未认证，
        /// 0代表微信认证，
        /// 1代表新浪微博认证，
        /// 2代表腾讯微博认证，
        /// 3代表已资质认证通过但还未通过名称认证，
        /// 4代表已资质认证通过、还未通过名称认证，但通过了新浪微博认证，
        /// 5代表已资质认证通过、还未通过名称认证，但通过了腾讯微博认证
        /// </summary>
        public VerifyTypeInfo verify_type_info { get; set; }
        /// <summary>
        /// 授权方公众号的原始ID
        /// </summary>
        public string user_name { get; set; }
        /// <summary>
        /// 授权方公众号所设置的微信号，可能为空
        /// </summary>
        public string alias { get; set; }
        /// <summary>
        /// 二维码图片的URL，开发者最好自行也进行保存
        /// </summary>
        public string qrcode_url { get; set; }

        public BusinessInfo business_info { get; set; }


    }

}
