import React from 'react'
import "./login.css"

const Login = () => {
  return (
 <>
    <div className='login-page'>
        <div className='login-image'></div>
        <div className='login-data'>
            <div className='l-details'>
                <div className='insta-logo'>
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png" alt="" />
                </div>
                <div className='insta-login-details'>
                    <input type="text" placeholder='Phone number, username or email' />
                    <input type="password" placeholder='Password' />
                    <button className='login-btn'>Log In</button>

                </div>
                <div className='f-pass'>
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
            <div className='l-reg'>
                <a>Don't have an account? Sign up</a>
            </div>
            <div className='play-store'>
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
            </div>
        </div>

    </div>
 </>
  )
}

export default Login
