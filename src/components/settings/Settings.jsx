import { useTrainerContext } from "../../context/trainer.context"
import ProfileCard from "../ProfileCard";
import TrainerCard from "../TrainerCard";
import "./Settings.css"

import React, { useEffect, useState } from 'react'

function Settings() {

  const {trainer} = useTrainerContext();

  if (!trainer) return <div>Loading...</div>;

  return (
    // <div className="trainer-profile">
    //   <div className="profile-details">
    //     <p>
    //       <strong>Name:</strong> {trainer.name}
    //     </p>
    //     <p>
    //       <strong>Username:</strong> {trainer.username}
    //     </p>
    //     <p>
    //       <strong>Email:</strong> {trainer.email}
    //     </p>
    //     <p>
    //       <strong>Phone Number:</strong> {trainer.phoneNumber}
    //     </p>
    //   </div>
    // </div>

    <TrainerCard {...trainer} />
  );
}

export default Settings