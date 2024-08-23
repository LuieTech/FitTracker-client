import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import "./App.css";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Wrap the homepage route with ProtectedRoute */}
        <Route 
          path='/homepage/*' 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route */}
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

