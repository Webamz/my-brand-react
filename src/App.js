import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Blogs from "./Components/Blogs/Blogs";
import BlogDetails from "./Components/Blogs/BlogDetails";
import Login from "./Components/Login(register)/Login";
import Register from "./Components/Login(register)/Register";
import Admin from "./Components/Admin/Admin";
import AdminUsers from "./Components/Admin/AdminUsers/AdminUsers";
import AdminBlogs from "./Components/Admin/AdminBlogs/AdminBlogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details/:blogId" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/admin-blogs" element={<AdminBlogs />} />


      </Routes>
    </div>
  );
}

export default App;
