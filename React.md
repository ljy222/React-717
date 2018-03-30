717安全食品商城 主要运用了react技术
项目流程思路:
1.搭建webpack，使用commonjs规范
2.dev:开发模式 起服务 不用压缩
3.build:不用起服务，要进行压缩，代码分离
//生产模式
let baseConfig=require("./webpack.base")
const webpack=require("webpack")
let UglifyPlugin=webpack.optimize.UglifyJsPlugin;
let DefinePlugin=webpack.DefinePlugin;
baseConfig.plugins.push(new UglifyPlugin())
baseConfig.plugins.push(new DefinePlugin({
    "process.env":'"production"'
}))
module.exports={
    ...baseConfig
}
//开发模式
const webpack=require("webpack")
let baseConfig=require("./webpack.base")
let DefinePlugin=webpack.DefinePlugin;//开发模式
baseConfig.plugins.push(new DefinePlugin({
    "process.env":'"development"'
}))
module.exports={
    ...baseConfig,
    devServer:{
        historyApiFallback:true,//H5页面刷新防止报404
        inline:true,
        open:true,
        port:3000,
        noInfo:true//取消小黑板的信息
    },
    devtool:"eval-source-map "
}
4.模拟静态服务器,引用express //post请求传参需要中间件
const bodyParser =require("body-parser")

//设置跨域 cors
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:3000")//跨域
    res.header("Access-Control-Allow-Headers","content-type,Token")//允许请求头跨域中有content-type字段
    res.header("Content-Type","application/json;charset=utf-8")//Content-Type相应服务器传给浏览器的形式json
    next()
})

5.搭建路由,模拟Vue的路由定义方式,在router.config.js中定义路由，在这里定义了一级路由二级路由，并且在我的页面中设置了权限：authorization:true//设置权限
6.static文件夹中存放的是静态文件
7.http.js中基于fetch封装的请求方法，支持get和post  同源策略:1.协议相同 http/https 2.域名相同3.端口号相同
8.封装获取cookies方法,
9.前期工作完成后开始排页面，做的第一部分是首页
	首页中有四个路由是二级理由分别跳入首页，分类，购物车，我的页面在这写路由中用了NavLink跳转路由
-------------------------------------------------------------------------------------------------------------------------------------------------------------
10.进入首页:后在头部是一个搜索框，轮播图封装运用模拟Swiper封装,并且封装了商品列表数据主要是请求网站数据，模拟商品列表的接口用post请求具有保密性传输数据量比较大
        app.post("/mall/index/getGoodsChannel"，function(){})
数据成功获取后，项目需求是上拉加载更多列表数据,scrollTop+windowHeight=documentHeight
11.分类页:面主要运用了Mockjs模拟数据Tab切换
12.购物车:是核心技术在这部分运用了react-redux用挂载的数据
	购物车功能包括全选、全不选、加加减减、结算。每次更新的数据存放到reducer中,用reducer管理数据
	每次点击添加的商品添加到指定登录人下如果没有登录则返回登录页面重新登录，登录后方可添加商品

13.我的页面:主要功能是地址管理，在这里主要运用的技术是redux-saga运用 sage就是generator函数 使用call去请求数据,call(fn,param),即fn(param) saga中代替dispatch来触发action的函数
    //实现异步转同步
中间件:在action到reducer中添加一些逻辑，监听action触发一个新的action
	登录成功后方可进去我的页面，判断Cookies是否存在如果不存在跳转到我的页
	注册页面，登录页面用Post请求
用户名：
密码:
Cookies安全性高存储量少可以配置请求头和响应头，允许跨域localStorage存在本地一直会有,在这里用Cookies比较好

	




