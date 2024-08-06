
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExercisesList from '../../components/exercises/ExercisesList'
import Clients from '../../components/clients/Clients'
import Settings from '../../components/settings/Settings'
import "./Dashboard.css"
import CreateClient from '../../components/forms/CreateClient'

function Dashboard({id}) {
  return (
    <>
      <Routes>
        <Route path="/exercises" element={<ExercisesList />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings />} />
        <Route path='/add-client' element={<CreateClient />} />
      </Routes>
    </>
      
  )
}

export default Dashboard;