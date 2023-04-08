import React from 'react'
import { NavLink} from 'react-router-dom'
import '../page/css/Registration.css';

const Registration = () => {
  return (
    <div className='registration-box'>
      <div className='tag'>
        <div className="text">
          <NavLink to="/">Home </NavLink>
          <h1>&gt;</h1>
          <NavLink to=""> Create An Account</NavLink>
        </div>
      </div>
      <div className="registration-show">
        <div className="registration">
          <div className="title">
            <h1>Login to Starzon</h1>
          </div>
          <hr />
          <form>
            <div className="c1">
              <div className="email">
                <label htmlFor="email">EMAIL ID</label>
                <div className="input-login">
                  <input type="text" id="email" placeholder='Enter Email ID'/>
                </div>
              </div>
              <div className="mnumber">
                <label htmlFor="mnumber">MOBILE NUMBER</label>
                <div className="input-login">
                <input type="number" id="mnumber" placeholder='Enter Mobile Number *'/>
                </div>
              </div>
            </div>
            <div className="c2">
              <div className="rpassword">
                <label htmlFor="rpassword">CREATE PASSWORD</label>
                <div className="input-login">
                <input type="password" id="password" placeholder='Enter Password *'/>
                </div>
              </div>
              <div className="crpassword">
                <label htmlFor="crpassword">CONFIRM PASSWORD</label>
                <div className="input-login">
                <input type="password" id="password" placeholder='Re-enter password *'/>
                </div>
              </div>
            </div>
            <div className="registration-submit">
              <button type="submit" id='registration-submit'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration