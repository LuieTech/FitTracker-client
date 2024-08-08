import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='*' element={<HomePage />}/>
      </Routes>
    </>
  );
}
export default App;
