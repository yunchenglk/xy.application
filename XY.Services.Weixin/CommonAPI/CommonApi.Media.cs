﻿using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Web;
using XY.Entity.Weixin;
using XY.Services.Weixin.Helpers;

namespace XY.Services.Weixin
{
    //接口详见：http://mp.weixin.qq.com/wiki/index.php?title=%E4%B8%8A%E4%BC%A0%E4%B8%8B%E8%BD%BD%E5%A4%9A%E5%AA%92%E4%BD%93%E6%96%87%E4%BB%B6

    /// <summary>
    /// 多媒体文件接口
    /// </summary>
    public partial class CommonApi
    {
        #region 临时素材
        /// <summary>
        /// 新增临时素材（原上传媒体文件）
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="type"></param>
        /// <param name="file"></param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <returns></returns>
        public static UploadTemporaryMediaResult UploadTemporaryMedia(string accessToken, UploadMediaFileType type, string file, int timeOut = Config.TIME_OUT)
        {




            var url = string.Format("http://api.weixin.qq.com/cgi-bin/media/upload?access_token={0}&type={1}", accessToken, type.ToString());
            var fileDictionary = new Dictionary<string, string>();
            fileDictionary["media"] = file;
            var result = HTTPPost.PostFileGetJson<UploadTemporaryMediaResult>(url, null, fileDictionary, null);
            return result;
        }

        /// <summary>
        /// 上传临时图文消息素材（原上传图文消息素材）
        /// </summary>
        /// <param name="accessToken">Token</param>
        /// <param name="news">图文消息组</param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <returns></returns>
        public static UploadTemporaryMediaResult UploadTemporaryNews(string accessToken, int timeOut = Config.TIME_OUT, params NewsModel[] news)
        {
            const string urlFormat = "https://api.weixin.qq.com/cgi-bin/media/uploadnews?access_token={0}";
            var data = new
            {
                articles = news
            };
            return CommonJsonSend.Send<UploadTemporaryMediaResult>(accessToken, urlFormat, data, timeOut: timeOut);

        }

        /// <summary>
        /// 获取临时素材（原下载媒体文件）
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="mediaId"></param>
        /// <param name="stream"></param>
        public static void Get(string accessToken, string mediaId, Stream stream)
        {
            var url = string.Format("http://api.weixin.qq.com/cgi-bin/media/get?access_token={0}&media_id={1}",
                accessToken, mediaId);
            HTTPGet.Download(url, stream);
        }
        #endregion

        #region 永久素材
        /*
         1、新增的永久素材也可以在公众平台官网素材管理模块中看到
         2、永久素材的数量是有上限的，请谨慎新增。图文消息素材和图片素材的上限为5000，其他类型为1000
         3、调用该接口需https协议
         */

        /// <summary>
        /// 新增永久图文素材
        /// </summary>
        /// <param name="accessToken">Token</param>
        /// <param name="news">图文消息组</param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <returns></returns>
        public static UploadForeverMediaResult UploadNews(string accessToken, int timeOut = Config.TIME_OUT, params NewsModel[] news)
        {
            const string urlFormat = "https://api.weixin.qq.com/cgi-bin/material/add_news?access_token={0}";
            var data = new
            {
                articles = news
            };
            return CommonJsonSend.Send<UploadForeverMediaResult>(accessToken, urlFormat, data, timeOut: timeOut);

        }

        /// <summary>
        /// 新增其他类型永久素材(图片（image）、语音（voice）和缩略图（thumb）)
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="file">文件路径</param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <returns></returns>
        public static UploadForeverMediaResult UploadForeverMedia(string accessToken, string file, int timeOut = Config.TIME_OUT)
        {
            var url = string.Format("https://api.weixin.qq.com/cgi-bin/material/add_material?access_token={0}", accessToken);
            //因为有文件上传，所以忽略dataDictionary，全部改用文件上传格式
            //var dataDictionary = new Dictionary<string, string>();
            //dataDictionary["type"] = UploadMediaFileType.image.ToString();

            var fileDictionary = new Dictionary<string, string>();
            //fileDictionary["type"] = UploadMediaFileType.image.ToString();//不提供此参数也可以上传成功
            fileDictionary["media"] = file;
            return HTTPPost.PostFileGetJson<UploadForeverMediaResult>(url, null, fileDictionary, null, timeOut: timeOut);
        }

        /// <summary>
        /// 新增永久视频素材
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="file">文件路径</param>
        /// <param name="title"></param>
        /// <param name="introduction"></param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <returns></returns>
        public static UploadForeverMediaResult UploadForeverVideo(string accessToken, string file, string title, string introduction, int timeOut = 40000)
        {
            var url = string.Format("https://api.weixin.qq.com/cgi-bin/material/add_material?access_token={0}", accessToken);
            var fileDictionary = new Dictionary<string, string>();
            fileDictionary["media"] = file;
            fileDictionary["description"] = string.Format("{{\"title\":\"{0}\", \"introduction\":\"{1}\"}}", title, introduction);

            return HTTPPost.PostFileGetJson<UploadForeverMediaResult>(url, null, fileDictionary, null, timeOut: timeOut);
        }

        /// <summary>
        /// 获取永久图文素材
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="mediaId"></param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <returns></returns>
        public static GetNewsResultJson GetForeverNews(string accessToken, string mediaId, int timeOut = Config.TIME_OUT)
        {
            string url = "https://api.weixin.qq.com/cgi-bin/material/get_material?access_token={0}";
            var data = new
            {
                media_id = mediaId
            };
            return CommonJsonSend.Send<GetNewsResultJson>(accessToken, url, data, CommonJsonSendType.POST, timeOut: timeOut);
        }

        /// <summary>
        /// 获取永久素材(除了图文)
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="mediaId"></param>
        /// <param name="stream"></param>
        public static void GetForeverMedia(string accessToken, string mediaId, Stream stream)
        {
            var url = string.Format("https://api.weixin.qq.com/cgi-bin/material/get_material?access_token={0}",
                accessToken);
            var data = new
            {
                media_id = mediaId
            };
            SerializerHelper serializerHelper = new SerializerHelper();
            var jsonString = serializerHelper.GetJsonString(data);
            HTTPPost.Download(url, jsonString, stream);
        }

        /// <summary>
        /// 删除永久素材
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="mediaId"></param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <returns></returns>
        public static WxJsonResult DeleteForeverMedia(string accessToken, string mediaId, int timeOut = Config.TIME_OUT)
        {
            string url = "https://api.weixin.qq.com/cgi-bin/material/del_material?access_token={0}";
            var data = new
            {
                media_id = mediaId
            };
            return CommonJsonSend.Send<WxJsonResult>(accessToken, url, data, CommonJsonSendType.POST, timeOut);
        }

        /// <summary>
        /// 修改永久图文素材
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="mediaId">要修改的图文消息的id</param>
        /// <param name="index">要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义），第一篇为0</param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <param name="news">图文素材</param>
        /// <returns></returns>
        public static WxJsonResult UpdateForeverNews(string accessToken, string mediaId, int? index, NewsModel news, int timeOut = Config.TIME_OUT)
        {
            string url = "https://api.weixin.qq.com/cgi-bin/material/update_news?access_token={0}";
            var data = new
            {
                media_id = mediaId,
                index = index,
                articles = news
            };
            return CommonJsonSend.Send<WxJsonResult>(accessToken, url, data, CommonJsonSendType.POST, timeOut);
        }

        /// <summary>
        /// 获取素材总数
        /// 永久素材的总数，也会计算公众平台官网素材管理中的素材
        /// 图片和图文消息素材（包括单图文和多图文）的总数上限为5000，其他素材的总数上限为1000
        /// </summary>
        /// <param name="accessToken"></param>
        /// <returns></returns>
        public static GetMediaCountResultJson GetMediaCount(string accessToken)
        {
            string url = string.Format("https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token={0}", accessToken);
            return HTTPGet.GetJson<GetMediaCountResultJson>(url);
        }

        /// <summary>
        /// 获取图文素材列表
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="offset">从全部素材的该偏移位置开始返回，0表示从第一个素材 返回</param>
        /// <param name="count">返回素材的数量，取值在1到20之间</param>
        /// <param name="timeOut">代理请求超时时间（毫秒）</param>
        /// <returns></returns>
        public static MediaList_NewsResult GetNewsMediaList(string accessToken, int offset, int count, int timeOut = Config.TIME_OUT)
        {
            string url = string.Format("https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token={0}", accessToken);
            var date = new
            {
                type = "news",
                offset = offset,
                count = count
            };
            return CommonJsonSend.Send<MediaList_NewsResult>(null, url, date, CommonJsonSendType.POST, timeOut);

        }

        /// <summary>
        /// 获取图片、视频、语音素材列表
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="type">素材的类型，图片（image）、视频（video）、语音 （voice）</param>
        /// <param name="offset"></param>
        /// <param name="count"></param>
        /// <param name="timeOut"></param>
        /// <returns></returns>
        public static MediaList_OthersResult GetOthersMediaList(string accessToken, UploadMediaFileType type, int offset,
                                                           int count, int timeOut = Config.TIME_OUT)
        {
            string url = string.Format("https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token={0}", accessToken);
            var date = new
            {
                type = type.ToString(),
                offset = offset,
                count = count
            };
            return CommonJsonSend.Send<MediaList_OthersResult>(null, url, date, CommonJsonSendType.POST, timeOut);
        }

        /// <summary>
        /// 上传图文消息内的图片获取URL
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="file"></param>
        /// <param name="timeOut"></param>
        /// <returns></returns>
        public static UploadImgResult UploadImg(string accessToken, string file, int timeOut = Config.TIME_OUT)
        {
            var url = string.Format("https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token={0}", accessToken);

            var fileDictionary = new Dictionary<string, string>();
            fileDictionary["media"] = file;
            return HTTPPost.PostFileGetJson<UploadImgResult>(url, null, fileDictionary, null, timeOut: timeOut);
        }

        #endregion

























































        /// <summary>
        /// 上传媒体文件
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="type"></param>
        /// <param name="file"></param>
        /// <returns></returns>
        public static UploadResultJson Upload(string accessToken, UploadMediaFileType type, string file)
        {

            string savePath = HttpContext.Current.Server.MapPath(file);
            string dirPath = HttpContext.Current.Server.MapPath(file.Substring(0, file.LastIndexOf("/") + 1));

            WebResponse response = null;
            Stream stream = null;
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(System.Web.Configuration.WebConfigurationManager.AppSettings["sourceWeb"] + file);
                response = request.GetResponse();
                stream = response.GetResponseStream();

                byte[] buffer = new byte[1024];
                Stream outStream = null;
                Stream inStream = null;
                if (File.Exists(savePath)) File.Delete(savePath);

                if (!Directory.Exists(dirPath))
                {
                    DirectoryInfo d = new DirectoryInfo(dirPath);
                    d.Create();
                }
                outStream = System.IO.File.Create(savePath);
                inStream = response.GetResponseStream();
                int l;
                do
                {
                    l = inStream.Read(buffer, 0, buffer.Length);
                    if (l > 0) outStream.Write(buffer, 0, l);
                } while (l > 0);
                if (outStream != null) outStream.Close();
                if (inStream != null) inStream.Close();
            }
            finally
            {
                if (stream != null) stream.Close();
                if (response != null) response.Close();
            }
            var url = string.Format("http://file.api.weixin.qq.com/cgi-bin/media/upload?access_token={0}&type={1}", accessToken, type.ToString());
            var fileDictionary = new Dictionary<string, string>();
            fileDictionary["media"] = savePath;
            var result = HTTPPost.PostFileGetJson<UploadResultJson>(url, null, fileDictionary, null);
            if (File.Exists(savePath))
            {
                File.Delete(savePath);
            }
            return result;
        }

        /// <summary>
        /// 下载媒体文件
        /// </summary>
        /// <param name="accessToken"></param>
        /// <param name="mediaId"></param>
        /// <param name="stream"></param>
        public static void GetFile(string accessToken, string mediaId, Stream stream)
        {
            var url = string.Format("http://file.api.weixin.qq.com/cgi-bin/media/get?access_token={0}&media_id={1}",
                accessToken, mediaId);
            HTTPGet.Download(url, stream);
        }

        /// <summary>
        /// 上传图文消息素材
        /// </summary>
        /// <param name="accessToken">Token</param>
        /// <param name="news">图文消息组</param>
        /// <returns></returns>
        public static UploadMediaFileResult UploadNews(string accessToken, params NewsModel[] news)
        {
            const string urlFormat = "https://api.weixin.qq.com/cgi-bin/media/uploadnews?access_token={0}";
            var data = new
            {
                articles = news
            };
            return CommonJsonSend.Send<UploadMediaFileResult>(accessToken, urlFormat, data);
        }
    }
}
