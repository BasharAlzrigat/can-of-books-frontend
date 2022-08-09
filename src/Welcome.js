import React from 'react'
import './theme/Welcome.css'
import LoginWelcomePage from './Login'
import Logo from './theme/logo.png'

export default function Login() {
  return (
    <div className = 'welcomPage'>
      <p className = 'welcomeText'>Welcome to My Favorite Books Website.!</p>
    <div className = 'welcomebox'>
    <img className = 'logoBoxImg'src = {Logo} alt = 'logo'/>
    <div className = 'loginText'>Log in</div>
    <div>Click Below to Log in</div>
    <LoginWelcomePage />
    <a className="small-git-hub-logo" href="https://github.com/BasharAlzrigat"> </a>
    </div>
    </div>
  )
}
