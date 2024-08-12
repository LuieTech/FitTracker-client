import "./exercises/ExercisesList.css";
function ExerciseBox({ x }) {

  if (!x) {
    return <div className="alert alert-warning">No exercise data available.</div>;
  }

  const { id, gifUrl, name, bodyPart, target } = x;

  return (
    <div
      key={id}
      className="card m-3"
      style={{ width: "260px", heigth: "auto" }}
    >
      <img
        src={gifUrl}
        alt="image"
        style={{ maxWidth: "150px" }}
        className="card-img-top"
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
