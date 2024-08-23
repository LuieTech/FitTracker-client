import { useState } from "react";
import { useTrainerContext } from "../context/trainer.context";
import { updateTrainerInfo } from "../services/backend-service/trainer.service";

function TrainerCard({
  id,
  name,
  role,
  username,
  email,
  phoneNumber,

}) {
  const {loadTrainerFromLocalStorage } = useTrainerContext();
  const [edit, setEdit] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    name: name || "",
    phoneNumber: phoneNumber || "",
  });

  const handleEdit = async (id, body) => {
    const response = await updateTrainerInfo(id, body);
    setEdit(false);
    loadTrainerFromLocalStorage()
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdateInfo({
      ...updateInfo,
      [name]: value,
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <section className="d-flex">
        <div>
          <div className="text-center text-black w-250 m-5">
            <img
              className="avatar avatar-128 bg-light rounded-circle text-white p-2"
              src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
            />
            <h5>{name}</h5>
            <p>Trainer</p>
          </div>
        </div>
        <div className="info">
          <div className="card-body p-4">
            <div className="d-flex">
              <h6>Information</h6>
              <i
                className="fas fa-edit btn-sm btn-secondary ms-2"
                role="button"
                onClick={() => setEdit(true)}
              ></i>
            </div>

            <hr className="mt-3 mb-4" />
            <div className="row pt-1 mb-4">
              <div className="col- mb-3">
                <div className="d-flex align-items-center">
                  <i className="fas fa-phone me-2"></i>
                  {edit ? (
                    <input
                      type="text"
                      name="phoneNumber"
                      value={updateInfo.phoneNumber}
                      onChange={handleOnChange}
                      placeholder="Enter phone number"
                      // className={`form-control ${alert ? "border border-danger" : ""}`}
                      className="form-control"
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          handleEdit(id, updateInfo);
                          setEdit(false);
                        }
                      }}
                    />
                  ) : (
                    <p className="text-muted">{phoneNumber}</p>
                  )}

                </div>
              </div>

              <div className="col- mb-3">
                <div className="d-flex align-items-center">
                  <i className="fas fa-user me-2"></i>
                  {edit ? (
                    <input
                      type="text"
                      name="name"
                      value={updateInfo.name}
                      onChange={handleOnChange}
                      placeholder="Enter name"
                      className="form-control"
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          handleEdit(id, updateInfo);
                          setEdit(false);
                        }
                      }}
                    />
                  ) : (
                    <p className="text-muted">{name}</p>
                  )}

                </div>
              </div>
            </div>
            <h6>Appointments:</h6>
            <hr className="mt-3  mb-4" />
            <div className="row pt-1">
              <div className="col-6 mb-3">
                <button className="btn btn-sm btn-success">
                  <i className="fas fa-calendar-alt me-2"></i>
                  <a
                    href="https://calendar.google.com/calendar/u/0/r"
                    target="_blank"
                  >
                    Calendar
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrainerCard;
