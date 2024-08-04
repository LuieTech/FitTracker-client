
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExercisesList from '../../components/exercises/ExercisesList'
import Clients from '../../components/clients/Clients'
import Settings from '../../components/settings/Settings'
import "./Dashboard.css"

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/exercises" element={<ExercisesList />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
      
  )
}

export default Dashboard