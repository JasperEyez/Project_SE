import React from 'react';
import { NavLink} from 'react-router-dom'
import '../page/css/Login.css';
import bgimage from "../assests/img/bg_login.png"

const Login = () => {

  return (
    <div className='login-box'>
      <div className="bg">
        <img src={bgimage} alt="" />
      </div>
      <div className="login-show">
        <div className="skip">
          <button><NavLink to="/">SKIP</NavLink></button>
        </div>
        <div className="login">
          <div className="title">
            <h1>Login</h1>
          </div>
          <form>
            <div className="username">
              <label htmlFor="username">USERNAME</label>
              <div className="input-login">
                <input type="text" id="username" placeholder='Enter email or Mobile phone *'/>
              </div>
            </div>
            <div className="password">
              <label htmlFor="password">PASSWORD</label>
              <div className="input-login">
              <input type="password" id="password" placeholder='Enter password *'/>
              </div>
            </div>
            <div className="sing-up">
              <p>Don't have an account?
                <span>
                  <a href="registration"> Sign Up</a>
                </span>
              </p>
            </div>
            <div className="login-submit">
              <button type="submit" id='login-submit'>Login</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Login