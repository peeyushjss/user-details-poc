import React from 'react';
import "./index.css";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }

    login() {
        console.log(this.email.current.value);
        console.log(this.password.current.value);
    }

    render() {
        return (
            <div className="white-panel">
                <div className="login-show">
                    <h2>LOGIN</h2>
                    <form>
                        <input type="text" name="email" placeholder="Email / Mobile" ref={this.email} />
                        <input type="password" name="password" placeholder="Password" ref={this.password} />
                        <button type="submit" onClick={this.login.bind(this)}>Login</button>
                    </form>
                </div>
            </div>
        )
    }




}

export default Login;