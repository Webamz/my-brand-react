import React, { useState, useEffect } from "react";
import './AdminUsers.css'
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "https://my-brand-backend-tfnq.onrender.com/api/v1/users/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `https://my-brand-backend-tfnq.onrender.com/api/v1/users/delete/${userId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        alert("User deleted successfully!");
        window.location.reload(); // Refresh the page to reflect changes
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {/* <div className="header">
        <div className="nav">
          <div className="search">
            <input type="text" placeholder="Search.." />
            <button type="submit">
              <img src="../img/search.png" alt="" />
            </button>
          </div>
          <div className="user">
            <img src="../img/notifications.png" alt="" />
            <div className="img-case">
              <img src="../img/user.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="content">
        <div className="title">
          <h2>Users</h2>
        </div>
        <table id="userTable">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.createdAt).toLocaleString()}</td>
                <td>
                  <button className="btn" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="loader" style={{ display: loading ? "block" : "none" }}>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Users;
