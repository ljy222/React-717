717��ȫʳƷ�̳� ��Ҫ������react����
��Ŀ����˼·:
1.�webpack��ʹ��commonjs�淶
2.dev:����ģʽ ����� ����ѹ��
3.build:���������Ҫ����ѹ�����������
//����ģʽ
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
//����ģʽ
const webpack=require("webpack")
let baseConfig=require("./webpack.base")
let DefinePlugin=webpack.DefinePlugin;//����ģʽ
baseConfig.plugins.push(new DefinePlugin({
    "process.env":'"development"'
}))
module.exports={
    ...baseConfig,
    devServer:{
        historyApiFallback:true,//H5ҳ��ˢ�·�ֹ��404
        inline:true,
        open:true,
        port:3000,
        noInfo:true//ȡ��С�ڰ����Ϣ
    },
    devtool:"eval-source-map "
}
4.ģ�⾲̬������,����express //post���󴫲���Ҫ�м��
const bodyParser =require("body-parser")

//���ÿ��� cors
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:3000")//����
    res.header("Access-Control-Allow-Headers","content-type,Token")//��������ͷ��������content-type�ֶ�
    res.header("Content-Type","application/json;charset=utf-8")//Content-Type��Ӧ�������������������ʽjson
    next()
})

5.�·��,ģ��Vue��·�ɶ��巽ʽ,��router.config.js�ж���·�ɣ������ﶨ����һ��·�ɶ���·�ɣ��������ҵ�ҳ����������Ȩ�ޣ�authorization:true//����Ȩ��
6.static�ļ����д�ŵ��Ǿ�̬�ļ�
7.http.js�л���fetch��װ�����󷽷���֧��get��post  ͬԴ����:1.Э����ͬ http/https 2.������ͬ3.�˿ں���ͬ
8.��װ��ȡcookies����,
9.ǰ�ڹ�����ɺ�ʼ��ҳ�棬���ĵ�һ��������ҳ
	��ҳ�����ĸ�·���Ƕ������ɷֱ�������ҳ�����࣬���ﳵ���ҵ�ҳ������д·��������NavLink��ת·��
-------------------------------------------------------------------------------------------------------------------------------------------------------------
10.������ҳ:����ͷ����һ���������ֲ�ͼ��װ����ģ��Swiper��װ,���ҷ�װ����Ʒ�б�������Ҫ��������վ���ݣ�ģ����Ʒ�б�Ľӿ���post������б����Դ����������Ƚϴ�
        app.post("/mall/index/getGoodsChannel"��function(){})
���ݳɹ���ȡ����Ŀ�������������ظ����б�����,scrollTop+windowHeight=documentHeight
11.����ҳ:����Ҫ������Mockjsģ������Tab�л�
12.���ﳵ:�Ǻ��ļ������ⲿ��������react-redux�ù��ص�����
	���ﳵ���ܰ���ȫѡ��ȫ��ѡ���ӼӼ��������㡣ÿ�θ��µ����ݴ�ŵ�reducer��,��reducer��������
	ÿ�ε����ӵ���Ʒ��ӵ�ָ����¼�������û�е�¼�򷵻ص�¼ҳ�����µ�¼����¼�󷽿������Ʒ

13.�ҵ�ҳ��:��Ҫ�����ǵ�ַ������������Ҫ���õļ�����redux-saga���� sage����generator���� ʹ��callȥ��������,call(fn,param),��fn(param) saga�д���dispatch������action�ĺ���
    //ʵ���첽תͬ��
�м��:��action��reducer�����һЩ�߼�������action����һ���µ�action
	��¼�ɹ��󷽿ɽ�ȥ�ҵ�ҳ�棬�ж�Cookies�Ƿ���������������ת���ҵ�ҳ
	ע��ҳ�棬��¼ҳ����Post����
�û�����
����:
Cookies��ȫ�Ըߴ洢���ٿ�����������ͷ����Ӧͷ���������localStorage���ڱ���һֱ����,��������Cookies�ȽϺ�

	




