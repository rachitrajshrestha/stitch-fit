
import '../style/login.css';
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import { useState } from 'react';
const Login = () => {
    
    const [action, setAction] = useState("Login");

  return (
        <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='********'/>
            </div>
        </div>
        <div className="forgot-password">
            Forgot Password? <span>click here</span>
        </div>
        <div className="submit-container">
            <div className={action==="login"?"submit grey": "submit"} onClick={() =>{setAction("Sign Up")} }>Signup</div>
            <div className={action==="Sign Up"?"submit gray": "submit"} onClick={() =>{setAction("Login")} }>Login</div>
        </div>
        </div>
  );
};

export default Login;
