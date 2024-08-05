import { useTrainerContext } from "../../context/trainer.context"
import "./Settings.css"

import React, { useEffect, useState } from 'react'

function Settings() {

  const {user} = useTrainerContext()

  return (
    <div className="trainer-profile">
      <div className="profile-details">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phoneNumber}
        </p>
      </div>
    </div>
  );
}

export default Settings