import React,{Component} from "react"
import "./login.less"
import $http from "../../utils/http"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import mapDispatchToProps from "./dispatch"
class Login extends Component{
    constructor(){
        super()
        this.toLogin=this.toLogin.bind(this)
    }
    render(){
        return (
            <div id="login">
                <h3><span>回退</span><span>登录717</span><span><Link to="/register" style={{float:"right",padding:"0 0.2rem"}}>注册</Link></span></h3>
                <p>用户名:<input type="text" className="username" ref="username"/></p>
                <p>密 码:<input type="password" className="password" ref="password"/></p>
                <p><button onClick={this.toLogin}>登录</button></p>
            </div>
        )
    }
    toLogin(){
        let {username,password}=this.refs
        $http.post("/user/login",{
            username:username.value,
            password:password.value
        })
        .then(res=>{
            console.log(res)
            if(res.success==1){
                //把用户信息存储一份到store中
                this.props.saveUser(res.user)
                //把用户信息存储一份到localStorage中
                localStorage.setItem("user-info",JSON.stringify(res.user))
                //登录成功之后判断要跳转的页面
                let from=this.props.location.state?this.props.location.state.from||"index/home":"index/home";
                document.cookie="token="+res.token;
                this.props.history.replace(from)//登录成功默认跳入首页  replace替换当前的history记录的
            }else{
                alert("登录出错")
            }
            
        })
    }
}
export default connect(null,mapDispatchToProps)(Login)