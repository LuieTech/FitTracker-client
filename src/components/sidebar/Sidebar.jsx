import "./Sidebar.css"
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="d-flex flex-column gap-4 mt-5">
      <Link to="/clients">Clients</Link>
      <Link to="/exercises">Exercises</Link>
      <Link to="/settings">Account Settings</Link>
    </div>
  );
}

export default Sidebar;