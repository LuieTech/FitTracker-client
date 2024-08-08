import "./client-details/ClientDetails.css";

function ExerciseCard({ id, gifUrl, name, instructions, bodyPart }) {
  // console.log("this is the name", name);
  // console.log("this is the bodyPart", bodyPart);

  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={gifUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">Body Part: {bodyPart}</p>
      </div>
      <ul className="list-group list-group-flush">
        {instructions.map((instruction, index) => (
          <li key={index} className="list-group-item">{instruction}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseCard;
