import React, { useState, useEffect } from "react";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://my-brand-backend-tfnq.onrender.com/api/v1/blogs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const blogsData = await response.json();
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="header">
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
      </div>
      <div className="content">
        <div className="title">
          <h2>Blogs</h2>
          <a href="create-blog.html" className="btn">
            Create New
          </a>
        </div>
        <table id="blogTable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>{blog.description}</td>
                <td>{new Date(blog.createdAt).toLocaleString()}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() =>
                      (window.location.href = `blog-actions.html?id=${blog._id}`)
                    }
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="loader" style={{ display: loading ? "block" : "none" }}>
        <div className="spinner"></div>
      </div>
      <i
        className="fa-solid fa-right-to-bracket"
        id="logout"
      ></i>
    </div>
  );
};

export default AdminBlogs;
