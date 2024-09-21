import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [userData, setUserData] = useState({ username: "", password: "", useremail: "" });
  const navigate = useNavigate();

  const handleRegister = () => {
    const { username, password } = userData;
    if (username && password) {
      localStorage.setItem(username, JSON.stringify({ password }));
      toast.success("Registration successful!");
      navigate("/");
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <div class="container">
      <div class="title text-center py-3">Registration</div>
      <form action="#" className="w-50 mx-auto shadow p-5">
        <div class="user__details">
          <div class="input__box">
            <span class="details">Username</span>
            <input type="text" placeholder="name" required onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
          </div>
          <div class="input__box">
            <span class="details">Email</span>
            <input type="email" placeholder="johnsmith@hotmail.com" required onChange={(e) => setUserData({ ...userData, useremail: e.target.value })} />
          </div>
          <div class="input__box">
            <span class="details">Password</span>
            <input type="password" placeholder="********" required onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
          </div>
          <div class="input__box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="********" required />
          </div>
        </div>
        <div class="gender__details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span class="gender__title">Gender</span>
          <div class="category">
            <label for="dot-1">
              <span class="dot one"></span>
              <span>Male</span>
            </label>
            <label for="dot-2">
              <span class="dot two"></span>
              <span>Female</span>
            </label>
            <label for="dot-3">
              <span class="dot three"></span>
              <span>Prefer not to say</span>
            </label>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register" onClick={handleRegister} />
        </div>
      </form>
    </div>
  );
}

export default Register;
