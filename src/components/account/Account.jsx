import { useEffect } from "react";
import { useTrainerContext } from "../../context/trainer.context"
import TrainerCard from "../TrainerCard";
import "./Account.css"


function Account() {

  const {trainer} = useTrainerContext();

  if (!trainer) return <div>Loading...</div>;

  return (
    <TrainerCard {...trainer} />
  );
}

export default Account
