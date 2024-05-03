import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = {};
    if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters long";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}/.test(formData.password)) {
      errors.password = "Password must contain at least 6 characters including one uppercase letter, one lowercase letter, one number, and one special character";
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://my-brand-backend-tfnq.onrender.com/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.username,
            email: formData.email,
            password: formData.confirmPassword,
            role: "user",
          }),
        }
      );
      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        const data = await response.json();
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>MyBrand</h1>
          </Link>
        </div>
        <div className="openMenu">
          <i className="fa fa-bars"></i>
        </div>
        <ul className="mainMenu">
          <div className="closeMenu">
            <i className="fa fa-times"></i>
          </div>
        </ul>
      </nav>
      <div className="container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {formErrors.username && (
                <p className="explanatory-message">{formErrors.username}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && (
                <p className="explanatory-message">{formErrors.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {formErrors.password && (
                <p className="explanatory-message">{formErrors.password}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {formErrors.confirmPassword && (
                <p className="explanatory-message">{formErrors.confirmPassword}</p>
              )}
            </div>

            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="logSignUp">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
