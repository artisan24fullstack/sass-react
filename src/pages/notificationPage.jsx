
import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Notification = () => {
  const [profileImg, setProfileImg] = useState(`https://ui-avatars.com/api/?name= `)
  let Profile = useState(`https://ui-avatars.com/api/?name=`)

  return (
    <div className="noti-overall">
      <div className='nav-section'>
        <Link to="/" style={{ textDecoration: "none" }} className='noti-div'><AiOutlineHome className='noti-Home-Icon' /></Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <img src={profileImg ? (profileImg) : Profile} />
        </Link>
      </div>

      <div className="notification-group">
        <h1>notification</h1>
        <div className="notification-section">
          <div className="notification-msg">
            <img src="https://i.pravatar.cc/150?img=13" alt="" />
            <p>Mike Tysion liked <span className='noti-like'>your profile picture</span><small><br />10 mins ago</small></p>
          </div>

          <div className="notification-msg">
            <img src="https://i.pravatar.cc/150?img=14" alt="" />
            <p>Violet liked <span className='noti-like'>your profile picture</span><br /><small>1 day ago</small></p>
          </div>

          <div className="notification-msg">
            <img src="https://i.pravatar.cc/150?img=15" alt="" />
            <p>violet liked <span className='noti-like'>your cover picture</span><br /><small>20s ago</small></p>
          </div>

          <div className="notification-msg">
            <img src="https://i.pravatar.cc/150?img=16" alt="" />
            <p>Brandon liked <span className='noti-like'>your profile picture</span><br /><small>5h ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
