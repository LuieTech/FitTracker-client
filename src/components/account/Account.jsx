import { useTrainerContext } from "../../context/trainer.context"
import TrainerCard from "../TrainerCard";
import "./Account.css"

import React, { useEffect, useState } from 'react'

function Account() {

  const {trainer} = useTrainerContext();

  if (!trainer) return <div>Loading...</div>;

  return (
    <TrainerCard {...trainer} />
  );
}

export default Account


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