import React from 'react';
import { NavLink} from 'react-router-dom'
import '../page/css/Profile.css';
import bgimage from "../assests/img/bg_profile.jpg"
import { useSelector } from 'react-redux';

const Profile = () => {
  const {user} = useSelector((state)=> ({...state}))
  return (
    <div className='box'>
      <div className='tag'>
        <div className="text">
          <NavLink to="">Profile </NavLink>
          <h1>&nbsp;&gt;&nbsp;</h1>
          <NavLink to=""> Account</NavLink>
        </div>
      </div>
      <div className="show">
        <div className="bg">
          <img src={bgimage}  alt="" />
        </div>
        {user && <>
          <h1>{user.email}</h1>
          <a href="login"><button>You Logged In</button></a>
        </>}
        {!user && <>
          <h1>Welcome to Starzon</h1>
          <a href="login"><button>Login or Sign Up</button></a>
        </>} 
      </div>
    </div>
  );
}

export default Profile