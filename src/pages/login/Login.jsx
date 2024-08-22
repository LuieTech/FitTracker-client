import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginTrainer } from "../../services/backend-service/trainer.service";
import { useTrainerContext } from "../../context/trainer.context";

function Login() {
  const { setTrainer, setTrainerId } = useTrainerContext();
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event){
    event.preventDefault();

    try {
      loginTrainer(loginData)
        .then((response) => {
          // console.log("response from Login page: ", response);
          setTrainer(response);
          setTrainerId(response.id);
          navigate("/homepage/account");
        })
    } catch (error) {
      console.log("Error during login: ", error);
    }

  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-3 pt-5">
        <img src="/public/images/favicon.ico" alt="" /><span><h2>FitTracker</h2></span>
      </div>
      <div className="container ">
        <form
          onSubmit={handleSubmit}
          className="form-inputs d-flex  flex-column align-items-center justify-content-center"
        >
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            className="inputs form-control" 
            value={loginData.username} 
            onChange={handleInputChange} 
            required
          />
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
          <button type="submit" className="btn btn-primary btn-lg mt-3">
            Log In
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-light btn-lg"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
