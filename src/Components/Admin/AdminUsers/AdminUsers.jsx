import SideBar from "../sidebar/SideBar";
import './AdminUsers.css'
import Users from "./Users";
const AdminUsers = () => {
   return (
        <div className="body">
            <SideBar />
       <div className="">
         <Users />
            </div>
        </div>
    )
};

export default AdminUsers;
