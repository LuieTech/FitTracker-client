
import "./exercises/ExercisesList.css"

function ExerciseBox({ id, gifUrl, name, bodyPart, target, onSelect }) {
  return (

    
      <div
        key={id}
        className="card m-3"
        style={{ width: "220px", heigth: "auto" }}
      >
        <img
          src={gifUrl}
          alt="image"
          style={{ maxWidth: "150px", heigth: "auto" }}
          className="card-img-top"
          onClick={onSelect}
        />
        <div className="d-flex flex-column card-body">
          <h5>{name}</h5>
          <p>
            Body Part: <strong>{bodyPart}</strong>
          </p>
          <p>
            Target Muscles: <strong>{target}</strong>
          </p>
        </div>

      </div>
  );
}

export default ExerciseBox;
