
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css";
import Dashboard from "../dashboard/Dashboard";
import { useTrainerContext } from "../../context/trainer.context";

function HomePage() {

  const {user} = useTrainerContext()
  

  function handlOnClientChange(client){

  }

  return (
    <div className="home-page">
      <aside className="sidebar">
        <header className="header">
          <img src="/path_to_logo.png" alt="App Logo" />
          <span>FitTracker</span>
        </header>
        <Sidebar />
        <footer className="footer">
          <img src="" alt="traiiner-img" />
          <span>Trainer name</span>
        </footer>
      </aside>
      <section className="main">
        <nav className="navbar">
          <Navbar onClientChange={handlOnClientChange}/>
        </nav>
        <article className="dash">
          <Dashboard />
        </article>
      </section>
    </div>
  );
}
export default HomePage;
