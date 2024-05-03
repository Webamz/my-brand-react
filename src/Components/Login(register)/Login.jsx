import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        document.getElementById("loader").style.display = loading ? "block" : "none";
    }, [loading]);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);

        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch(
                "https://my-brand-backend-tfnq.onrender.com/api/v1/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (response.ok) {
                const { token, email, _id, role } = await response.json();
                localStorage.setItem("email", email);
                localStorage.setItem("token", token);
                localStorage.setItem("userId", _id);

                if (role === "admin") {
                    navigate("/admin"); // Use navigate function for navigation
                } else {
                    navigate("/");
                }
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error.message);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="loginPage">
            <nav>
                <div className="logo">
                    <Link to='/'>
                        <h1>MyBrand</h1>
                    </Link>
                </div>
                <div className="openMenu"><i className="fa fa-bars"></i></div>
                <ul className="mainMenu">
                    <div className="closeMenu"><i className="fa fa-times"></i></div>
                </ul>
            </nav>

            <div className="container">
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input type="email" id="username" placeholder="Email" required />
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                        />
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <p>Don't have an account? <Link to='/register' className="logSignUp">Sign Up</Link></p>
                </div>
            </div>
            <div id="loader" className="loader"></div>
        </div>
    );
}

export default Login;
