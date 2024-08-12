import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import "./App.css"
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/homepage/*' element={<HomePage />}/>

        <Route path='*' element={<Login />}/>
      </Routes>
    </>
  );
}
export default App;
