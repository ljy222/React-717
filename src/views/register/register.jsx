import React,{Component} from "react"
import "./register.less"
import $http from "../../utils/http"
class Register extends Component{
    constructor(){
        super()
        this.toRegister=this.toRegister.bind(this)
    }
    render(){
        return (
            <div id="register">
                <h3><span>返回</span><span>欢迎注册717</span><span>登录</span></h3>
                <p>用户名:<input type="text" className="username" ref="username"/></p>
                <p>密 码:<input type="password" className="password" ref="password"/></p>
                <p><button onClick={this.toRegister}>注册</button></p>
            </div>
        )
    }
    toRegister(){
        let {username,password}=this.refs
        $http.post("/user/register",{
            username:username.value,
            password:password.value
        })
        .then(res=>{
            if(res.success==1){
                this.props.history.push("/login")//注册成功跳入登录页面
            }
        })
    }
}
export default Register