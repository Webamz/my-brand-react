import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch(
          "https://my-brand-backend-tfnq.onrender.com/api/v1/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const blogsData = await response.json();
        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  useEffect(() => {
    const fetchLikesAndComments = async (blogId) => {
      try {
        const responseLikes = await fetch(`https://my-brand-backend-tfnq.onrender.com/api/v1/like/get/${blogId}`);
        const responseComments = await fetch(`https://my-brand-backend-tfnq.onrender.com/api/v1/blogs/${blogId}/comments`);
        
        if (!responseLikes.ok || !responseComments.ok) {
          throw new Error("Failed to fetch likes or comments");
        }

        const likesData = await responseLikes.json();
        const commentsData = await responseComments.json();

        return { likes: likesData.length, comments: commentsData.length };
      } catch (error) {
        console.error("Error fetching likes or comments:", error.message);
        return { likes: 0, comments: 0 };
      }
    };

    const updateBlogsData = async () => {
      for (const blog of blogs) {
        const { likes, comments } = await fetchLikesAndComments(blog._id);
        blog.likes = likes;
        blog.comments = comments;
      }
      setBlogs([...blogs]);
    };

    if (!loading) {
      updateBlogsData();
    }
  }, [blogs, loading]);

  return (
    <div className="blogBody">
      <nav className="navbar">
        <div className="logo">
          <Link to='/'>
            <h1>MyBrand</h1>
            </Link>
        </div>
      </nav>

      <div className="myContainer" id="blogContainer">
        <h2>My Blogs</h2>
        {loading ? (
          <div id="loader" style={{ display: "block" }}>
            <div className="spinner"></div>
          </div>
        ) : (
          blogs.map(blog => (
            <div key={blog._id} className="blog-post">
              <div className="blog-post_img">
                <img src={blog.image} alt="" />
              </div>
              <div className="blog-post_info">
                <div className="blog-post_date">
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <h1 className="blog-post_title">{blog.title}</h1>
                <p className="blog-post_text">{blog.description}</p>
                <div className="blog-post_icons">
                  <i className="far fa-heart like-button"></i>{" "}
                  <span className="likes-count">{blog.likes}</span>
                  <i className="far fa-comment"></i>{" "}
                  <span className="comments-count">{blog.comments}</span>
                </div>
              </div>
              <Link to={`/blog-details/${blog._id}`} className="blog-post_cta">Read More</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Blogs;
