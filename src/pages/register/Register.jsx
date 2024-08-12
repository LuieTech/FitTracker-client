import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    console.log("Register Data:", registerData);
    navigate("/login"); 
  };

  return (
    <div className="container mt-5 w-50">
      <form onSubmit={handleSubmit} className="form-inputs d-flex flex-column align-items-center">
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
        <button type="submit" className="btn btn-primary mt-3" onClick={() => navigate("/register")}>Sign Up</button>
        <button type="button" className="btn btn-link" onClick={() => navigate("/login")}>Log In</button>
      </form>
    </div>
  );
}

export default Register;
