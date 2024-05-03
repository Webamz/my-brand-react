import React from 'react'
import user from '../../../assets/img/user.png'
import notification from "../../../assets/img/notifications.png"
import search from "../../../assets/img/search.png"

const Header = () => {
  return (
    <div className="header">
        <div className="nav">
          <div className="search">
            <input type="text" placeholder="Search.." />
            <button type="submit">
              <img src={search} alt="" />
            </button>
          </div>
          <div className="user">
            <img src={notification} alt="" />
            <div className="img-case">
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header

