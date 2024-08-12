import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Login Data:", loginData);
    navigate("/homepage/clients"); 
  };

  return (
    <div className="container mt-5 flex-grow-1 d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="form-inputs d-flex  flex-column align-items-center justify-content-center w-50">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="inputs form-control"
          value={loginData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="inputs form-control"
          value={loginData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn btn-primary mt-3">Log In</button>
        <button type="button" className="btn btn-link" onClick={() => navigate("/register")}>Register</button>
      </form>
    </div>
  );
}

export default Login;
