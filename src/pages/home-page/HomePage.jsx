
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css";
import Dashboard from "../dashboard/Dashboard";
import { useTrainerContext } from "../../context/trainer.context";

function HomePage() {

  const {user} = useTrainerContext()

  return (
    <div className="home-page">
      <aside className="sidebar">
        <header className="header">
          <img src="../../../public/images/favicon.ico" alt="App Logo" />
          <span>FitTracker</span>
        </header>
        <div className="options">
          <Sidebar />
        </div>
        
        <footer className="footer">
          <img src="" alt="traiiner-img" />
          <span>{user.name}</span>
        </footer>
      </aside>
      <section className="main">
        <nav className="navbar">
          <Navbar />
        </nav>
        <article className="dash">
          <Dashboard />
        </article>
      </section>
    </div>
  );
}
export default HomePage;
