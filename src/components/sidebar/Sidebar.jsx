import "./Sidebar.css"
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="d-flex flex-column gap-4 mt-5">
      <Link to="/clients" className="btn btn-outline-light" ><i className="fa fa-users me-2" aria-hidden="true"></i>Clients</Link>
      <Link to="/exercises" className="btn btn-outline-light"><i className="fa fa-dumbbell me-2" aria-hidden="true"></i>Exercises</Link>
      <Link to="/settings" className="btn btn-outline-light"><i className="fa fa-cog me-2" aria-hidden="true"></i>Account</Link>
    </div>
  );
}

export default Sidebar;