import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);

  const { blogId } = useParams();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://my-brand-backend-tfnq.onrender.com/api/v1/blogs/find/${blogId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const blogData = await response.json();
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://my-brand-backend-tfnq.onrender.com/api/v1/blogs/${blogId}/comments`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error.message);
      }
    };

    fetchComments();
  }, [blogId]);

  const likeBlog = async () => {
    try {
      const response = await fetch(
        `https://my-brand-backend-tfnq.onrender.com/api/v1/like/create`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogId: blogId,
          }),
        }
      );
      if (response.ok) {
        loadLikes();
      } else {
        console.error("Failed to like blog");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadLikes = async () => {
  try {
    const response = await fetch(
      `https://my-brand-backend-tfnq.onrender.com/api/v1/like/get/${blogId}`
    );
    if (response.ok) {
      const likesData = await response.json();
      setLikes(likesData.length);
    } else {
      console.error("Failed to get likes");
    }
  } catch (error) {
    console.error(error);
  }
};

  const postComment = async () => {
    try {
      const commentText = document.getElementById("detail-comment-text").value.toLowerCase();
      let userText = document.getElementById("detail-comment-username").value;
      userText = userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();

      const response = await fetch(
        `https://my-brand-backend-tfnq.onrender.com/api/v1/blogs/${blogId}/comments/create`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogId: blogId,
            message: commentText,
            username: userText,
          }),
        }
      );
      if (response.ok) {
        alert("Comment posted successfully");
        displayComments();
      } else {
        throw new Error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  };

  const displayComments = async () => {
    try {
      const response = await fetch(
        `https://my-brand-backend-tfnq.onrender.com/api/v1/blogs/${blogId}/comments`
      );
      const commentsData = await response.json();

      setComments(commentsData);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const toggleCommentBox = () => {
    const commentBox = document.getElementById("detail-comment-box");
    const addCommentBtn = document.getElementById("detail-add-comment-btn");

    if (commentBox.style.display === "none") {
      commentBox.style.display = "block";
      addCommentBtn.textContent = "Cancel";
    } else {
      commentBox.style.display = "none";
      addCommentBtn.textContent = "Add Comment";
    }
  };

  return (
    <div>
      {loading ? (
        <div id="loader" style={{ display: "block" }}>
          <div className="spinner"></div>
        </div>
      ) : (
          
          <div className="detail-container">
            <nav className="navbar">
        <div className="logo">
          <Link to='/blogs'>
            <h1>MyBrand</h1>
            </Link>
        </div>
      </nav>
          <div className="detail-blog-details">
            <h2 id="blog-title">{blog && blog.title}</h2>
            <div className="detail-blog-post-img">
              <img src={blog && blog.image} alt="" />
            </div>
            <div className="detail-blog-post-info">
              <div className="detail-blog-post-date">
                <span>{blog && new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <p id="blog-content">{blog && blog.content}</p>
            </div>
            {/* Like Button */}
            <div className="detail-like-button">
              <i className="far fa-thumbs-up" onClick={likeBlog}></i>
              <span id="detail-likes-count">Likes ({likes})</span>
            </div>
            {/* Comments Section */}
            <div className="detail-comments">
              <i className="far fa-comment"></i>{" "}
              <span id="detail-comments-number">Comments ({comments.length})</span>
            </div>
            {/* Comments Section */}
            <div className="detail-comments-section">
              {comments.map((comment, index) => (
                <div key={index} className="detail-comment">
                  <div className="detail-comment-header">
                    <span className="detail-comment-date">{new Date(comment.createdAt).toLocaleDateString()}</span>
                    <span className="detail-comment-author">{comment.username}</span>
                  </div>
                  <div className="detail-comment-body">{comment.message}</div>
                </div>
              ))}
            </div>
            {/* Comment Form */}
            <div className="detail-comment-form">
              <button id="detail-add-comment-btn" onClick={toggleCommentBox}>
                Add Comment
              </button>
              <div id="detail-comment-box" className="detail-comment-box">
                <textarea
                  id="detail-comment-username"
                  className="detail-comment-input"
                  placeholder="Write your name here..."
                  rows="2"
                ></textarea>
                <textarea
                  id="detail-comment-text"
                  className="detail-comment-input"
                  placeholder="Write your comment here..."
                  rows="4"
                ></textarea>
                <button className="detail-comment-button" onClick={postComment}>
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
