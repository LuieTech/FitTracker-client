import { useTrainerContext } from "../../context/trainer.context";
import { logoutTrainer } from "../../services/backend-service/trainer.service";
import "./Sidebar.css"
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();
  const { logout } = useTrainerContext();

  const handleLogout = () => {
    logoutTrainer();  
    logout();         
    navigate("/login"); 
  };

  return (
    <div className="d-flex flex-column gap-4 mt-5">
      <Link to="/homepage/clients" className="btn btn-lg btn-outline-light" ><i className="fa fa-users me-2" aria-hidden="true"></i>Clients</Link>
      <Link to="/homepage/exercises" className="btn btn-lg btn-outline-light"><i className="fa fa-dumbbell me-2" aria-hidden="true"></i>Exercises</Link>
      <Link to="/homepage/account" className="btn btn-lg btn-outline-light"><i className="fa fa-cog me-2" aria-hidden="true"></i>Account</Link>
      <button onClick={handleLogout} className="btn btn-lg btn-outline-danger mt-auto">Logout</button>

    </div>
  );
}

export default Sidebar;