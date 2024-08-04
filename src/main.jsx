import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import TrainerProviderWrapper from './context/trainer.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TrainerProviderWrapper>
       <App /> 
      </TrainerProviderWrapper>
        
    </Router> 
  </React.StrictMode>,
)
