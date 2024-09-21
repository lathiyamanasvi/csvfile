import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { toast } from "react-toastify";
import { useAuth } from "../context/Auth";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();  // Destructure login function from useAuth
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    const userdata = JSON.parse(localStorage.getItem(username));

    if (userdata && userdata.password === password) {
      login(userdata);  // Set user as authenticated in the context
      toast.success("Login successful!");
      navigate("/tasks"); // Navigate to tasks page after successful login
    } else {
      toast.error("User not identified!");
      navigate("/register"); // Redirect to registration page if login fails
    }
  };

  return (
    <div className="container">
      <div className="wrapper d-flex align-items-center justify-content-center h-100" style={{ paddingTop: "100px" }}>
        <div className="card login-form">
          <div className="card-body">
            <h5 className="card-title text-center">Login Form</h5>
            <form className="login" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <TextField
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <TextField
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
              </div>
              <Button
                type="submit"
                className="btn btn-primary w-100"
                variant="contained"
              >
                Submit
              </Button>
              <div className="sign-up mt-4">
                Don't have an account? <Link to="/register">Create One</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
