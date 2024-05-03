import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css'


const SideBar = () => {
  return (
    <>
      <div class="side-menu">
        <div class="brand-name">
          <Link to='/admin' className="link">
            <h1>My-Brand</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/admin' className="link">
              <i class="fas fa-tachometer-alt"></i>
              &nbsp;<span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to='/admin-users' className="link">
              <i class="fa-solid fa-user"></i>&nbsp;<span>Users</span>
            </Link>
          </li>
          <li>
            <Link to='/admin-querries' className="link">
              <i class="fa-solid fa-clipboard-question"></i>&nbsp;
              <span>Querries</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-blogs" className="link">
              <i class="fa-solid fa-newspaper"></i>&nbsp;<span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-projects" className="link">
              <i class="fa-solid fa-briefcase"></i>&nbsp;<span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to='/' className="link">
            <i class="fa-solid fa-right-to-bracket" id="logout"></i>&nbsp;
              <span>Log out</span>
              </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar
