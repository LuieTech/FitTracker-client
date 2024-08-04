import { useTrainerContext } from "../../context/trainer.context"
import "./Settings.css"

import React, { useEffect, useState } from 'react'

function Settings() {

  const [trainer, setTrainer] = useState({})
  const {user} = useTrainerContext()

  useEffect(() => {
    setTrainer(user)
  }, [user])

  return (
    <div>{trainer?.name}</div>
  )
}

export default Settings