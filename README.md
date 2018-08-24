This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

```bash
  1、使用ionic3项目模板首先要配置ionic项目运行环境
  2、要配置环境先安装node.js(安装方法百度)
  3、node -v 查看是否安装成功
  4、npm -v 查看npm是否安装成功
  5、npm install -g cordova ionic 安装全局的 cordova 和 ionic
  6、ionic -v 查看ionic是否安装成功
  7、克隆该项目到本地
  8、cd到项目根目录
  9、npm install 安装依赖项
  10、ionic serve 运行该项目
  
  ##注意：本次引入的TCPlayer插件地址 https://cloud.tencent.com/document/product/267/7479 ，该插件支持web端网页，但将其使用在ionic项目中经过cordova build打包成apk文件后在手机上安装视频却不能播放，其原因在于：打包成apk文件安装在手机上其实是利用了file://协议，而腾讯TCPlayer插件却暂不支持file://协议，所以打包后安装在手机上无法正常播放视频。

```

## 如何在ionic项目中使用第三方js文件


```bash
[1]放置文件
       把引入的文件放到www下的assets目录下,这里引入的文件在重新编译过程中是不会被覆盖的,所以引入文件放到这里
       
       
[2]引入文件
      在index.html下引入文件,注意修改的是src目录下的index.html,不是www目录下的,如果修改成www下的,会被src下重新编译的index.html覆盖掉.TCPlarer.js(注意:文件路径是assets/)
      <script src="assets/common-js/TCPlayer.js"></script>
      
      
[3]声明文件
      在要使用该插件的页面的 xxx.ts 文件中声明文件（在本项目中是在video-play文件中引用所以在video-play.ts文件中声明）
      declare var TcPlayer:any;
 
 
[4]页面使用
      在本项目中的 video-play.ts 文件中 有使用第三方js插件TCPlayer的例子；可以查看如何使用


[5]关键词选取问题
       引入你的js后,写入声明后,在ts中调用你引入的文件中相关逻辑的时候,看看什么对象报错了,就把该文件声明关键词设置为该对象

例:引了一份pinchzoom.js的文件,但是使用的时候我这里RTP报错了,那么就是说该文件需要的关键词有RTP,那么我就在 [3]声明文件 时写 declare var RTP:any;
就可以了.这类引入第三方js一般封装好对象应该只有一个,多个的话大家自行研究
    
```




Substitute ios for android if not on a Mac.

