﻿namespace XY.Entity.Weixin
{
    /// <summary>
    /// 单个按键
    /// </summary>
    public class SingleClickButton : SingleButton
    {
        /// <summary>
        /// 类型为click时必须。
        /// 按钮KEY值，用于消息接口(event类型)推送，不超过128字节
        /// </summary>
        public string key { get; set; }

        public SingleClickButton()
            : base(ButtonType.click.ToString())
        {
        }
    }
}
