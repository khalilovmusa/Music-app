import React from 'react'
import { loginEndpoint } from '../../../spotify'
import "./login.css";

const Login = () => {
  return (
    <div className="login-page"> 
      <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="logo-spotify" />
      <a href={loginEndpoint}><div className="login-btn">Log In</div></a>
    </div>
  )
}

export default Login
