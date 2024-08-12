import "./Sidebar.css"
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic or cleanup here if necessary
    navigate('/login');
  };

  return (
    <div className="d-flex flex-column gap-4 mt-5">
      <Link to="/homepage/clients" className="btn btn-outline-light" ><i className="fa fa-users me-2" aria-hidden="true"></i>Clients</Link>
      <Link to="/homepage/exercises" className="btn btn-outline-light"><i className="fa fa-dumbbell me-2" aria-hidden="true"></i>Exercises</Link>
      <Link to="/homepage/settings" className="btn btn-outline-light"><i className="fa fa-cog me-2" aria-hidden="true"></i>Account</Link>
      <button onClick={handleLogout} className="btn btn-outline-danger mt-auto">Logout</button>

    </div>
  );
}

export default Sidebar;