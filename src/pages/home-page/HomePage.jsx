import Sidebar from "../../components/sidebar/Sidebar";
import "./HomePage.css";
import { useTrainerContext } from "../../context/trainer.context";
import "./HomePage.css";
import { Route, Routes } from "react-router-dom";
import ExercisesList from "../../components/exercises/ExercisesList";
import Clients from "../../components/clients/Clients";
import ClientDetails from "../../components/client-details/ClientDetails";
import Account from "../../components/account/Account";

function HomePage() {
  const { trainer } = useTrainerContext();

  return (
    <div className="home-page">
      <aside className="sidebar">
        <header className="header">
          <img src="../../../public/images/favicon.ico" alt="App Logo" />
          <span className="fw-bolder">
            <h3>FitTracker</h3>
          </span>
        </header>
        <div className="options">
          <Sidebar />
        </div>

        <footer className="footer">
          <img
            className="avatar avatar-48 bg-light rounded-circle text-white p-2"
            src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
          />
          <span className="h3">{trainer.username}</span>
        </footer>
      </aside>
      <section className="main">
        <article className="dash">
          <Routes>
            <Route path="exercises" element={<ExercisesList />} />
            <Route path="clients" element={<Clients />} />
            <Route
              path="client-details/:clientId"
              element={<ClientDetails />}
            />
            <Route path="account" element={<Account />} />

            <Route path="*" element={<Account />} />
          </Routes>
        </article>
      </section>
    </div>
  );
}
export default HomePage;
