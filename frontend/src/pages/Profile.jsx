import React from 'react'
import "./profile.css"
import { CiSettings } from "react-icons/ci";

const Profile = () => {
  return (
    <>
<div className='profile-page'>

    <div className='profile-info'>
        <div className='profile-image'>
            <img src='https://laiacc.com/wp-content/uploads/2019/03/blank-profile-picture-973460_1280-705x705.png' />
        </div>
        <div className='profile-data'>
            <h3>shanmuka.t4</h3>
            <button>Edit Profile</button>
           <CiSettings style={{alignSelf:"center",fontSize:"25px"}} />
            <h4>0 posts</h4>
            <h4> 0 followings</h4>
            <h4>3 followers</h4>
        </div>

    </div>

    <tr />

    <div className='post-container'>
        <img src="https://i1.wp.com/www.onlandscape.co.uk/wp-content/uploads/2012/01/IMG_6347-square-vertorama.jpg?quality=95" alt="" />
        <img src="https://i.pinimg.com/originals/09/09/85/09098514b7acc116d3379237855d7c37.jpg" alt="" />
        <img src="http://3.bp.blogspot.com/-xtVW1FB285Y/TthmK-ZlfiI/AAAAAAAAFrc/Qz2KkUuO-Gw/s1600/IMG_1131.JPG" alt="" />
        <img src="http://img05.deviantart.net/4cda/i/2014/104/6/3/landscape_square_by_comsic-d7eilgj.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/76/44/9d/76449d92d3acf0835593db9715814da3.jpg" alt="" />
        <img src="https://i.pinimg.com/474x/f5/62/f0/f562f0ff0752b9b05986f2bae92c7d67.jpg" alt="" />
        <img src="https://circleboom.com/blog/content/images/2023/05/instagram-grid-layouts-4.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/e7/6f/35/e76f35793e59a808f2b3af9f4991a8d7.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/cb/ec/34/cbec34014f72495b09c23f3d89cb634b.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/55/b5/3c/55b53c01c469902b4bea82cac8ce6b5c.jpg" alt="" />

    </div>



</div>

      
    </>
  )
}

export default Profile
