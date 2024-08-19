import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/Login.css";
import { registerTrainer } from "../../services/backend-service/trainer.service";

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      console.log("Registering trainer: ", registerData);
      
      await registerTrainer(registerData);
      navigate("/login");
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  

  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-3 pt-5">
        <img src="/public/images/favicon.ico" alt="" /><span><h2>FitTracker</h2></span>
      </div>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="form-inputs d-flex flex-column align-items-center"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="inputs form-control"
            value={registerData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="inputs form-control"
            value={registerData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inputs form-control"
            value={registerData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="inputs form-control"
            value={registerData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="btn btn-lg btn-primary mt-3"
            onClick={() => handleSubmit}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-light btn-lg"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
