
import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css";
import Dashboard from "../dashboard/Dashboard";
import { useTrainerContext } from "../../context/trainer.context";
import "./HomePage.css"

function HomePage() {

  const {trainer} = useTrainerContext()

  return (
    <div className="home-page">
      <aside className="sidebar">
        <header className="header">
          <img src="../../../public/images/favicon.ico" alt="App Logo" />
          <span className="fw-bolder">FitTracker</span>
        </header>
        <div className="options">
          <Sidebar />
        </div>
        
        <footer className="footer">
          <img src="../../../public/images/albert-ironhacker.jpeg" alt="trainer-img" />
          <span className="fw-bold">{trainer.name}</span>
        </footer>
      </aside>
      <section className="main">
        {/* <nav className="navbar">
          <Navbar />
        </nav> */}
        <article className="dash">
          <Dashboard {...trainer}/>
        </article>
      </section>
    </div>
  );
}
export default HomePage;
