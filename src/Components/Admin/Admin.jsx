import React from "react";
import SideBar from "./sidebar/SideBar";
import Dashboard from "./Dashboard/Dashboard";
import './Admin.css'

const Admin = () => {
    return (
        <div className="body">
            <SideBar />
            <div className="">
                <Dashboard />
                {/* <AdminUsers /> */}

            </div>
        </div>
    )
}

export default Admin
