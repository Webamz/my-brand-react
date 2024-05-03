import React, { useState, useEffect } from "react";
import './Dashboard.css'

const Dashboard = () => {
  const [blogsNumber, setBlogsNumber] = useState(0);
  const [querryNumber, setQuerryNumber] = useState(0);
  const [userNumber, setUserNumber] = useState(0);
  const [projectsNumber, setProjectsNumber] = useState(0);
  const [users, setUsers] = useState([]);
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const blogsResponse = await fetch(
          "https://my-brand-backend-tfnq.onrender.com/api/v1/blogs",
          { credentials: "include" }
        );
        const queriesResponse = await fetch(
          "https://my-brand-backend-tfnq.onrender.com/api/v1/querries/all",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const usersResponse = await fetch(
          "https://my-brand-backend-tfnq.onrender.com/api/v1/users/all",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const projectsResponse = await fetch(
          "https://my-brand-backend-tfnq.onrender.com/api/v1/projects",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const blogs = await blogsResponse.json();
        const queries = await queriesResponse.json();
        const users = await usersResponse.json();
        const projects = await projectsResponse.json();

        setBlogsNumber(blogs.length);
        setQuerryNumber(queries.length);
        setUserNumber(users.length);
        setProjectsNumber(projects.length);
        setUsers(users);
        setQueries(queries);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div className="content">
        <div className="cards">
          <div className="card">
            <div className="box">
              <h1>{querryNumber}</h1>
              <h3>Queries</h3>
            </div>
            <div className="icon-case">
              <i className="fa-solid fa-clipboard-question fa-4x"></i>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h1>{userNumber}</h1>
              <h3>Users</h3>
            </div>
            <div className="icon-case">
              <i className="fa-solid fa-user fa-4x"></i>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h1>{blogsNumber}</h1>
              <h3>Blogs</h3>
            </div>
            <div className="icon-case">
              <i className="fa-solid fa-newspaper fa-4x"></i>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h1>{projectsNumber}</h1>
              <h3>Projects</h3>
            </div>
            <div className="icon-case">
              <i className="fa-solid fa-briefcase fa-4x"></i>
            </div>
          </div>
        </div>
        <div className="content-2">
          <div className="recent-queries">
            <div className="title">
              <h2>Recent Queries</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Query</th>
                </tr>
              </thead>
              <tbody>
                {queries.slice(0, 10).map((query, index) => (
                  <tr key={index}>
                    <td>{query.firstname}</td>
                    <td>{query.email}</td>
                    <td>{query.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="new-users">
            <div className="title">
              <h2>New Users</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 10).map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="loader" style={{ display: loading ? "block" : "none" }}>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Dashboard;
