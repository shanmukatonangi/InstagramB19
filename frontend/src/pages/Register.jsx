import React from 'react'
import "./Register.css"

const Register = () => {
  return (
 <>
    <div className='reg-page'>
        
        <div className='reg-data'>
            <div className='l-details'>
                <div className='insta-logo'>
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png" alt="" />
                </div>
                <div className='insta-reg-details'>
                    <input type="text" placeholder='Phone number or email' />
                    <input type="username" placeholder='username' />
                    <input type="confirm password" placeholder='confirm password' />

                    <input type="password" placeholder='Password' />
                    <button className='reg-btn'>Sign-up</button>

                </div>
             
            </div>
            <div className='l-reg'>
                <a>Already have an account? Log in</a>
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

export default Register
