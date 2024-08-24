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
  const { loadTrainerFromLocalStorage } = useTrainerContext();
  const [edit, setEdit] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    name: name || "",
    phoneNumber: phoneNumber || "",
  });

  const handleEdit = async (id, body) => {
    const response = await updateTrainerInfo(id, body);
    setEdit(false);
    loadTrainerFromLocalStorage();
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
          <div className="text-center text-black w-50 m-5 d-flex flex-column align-items-center">
            <img
              className="avatar avatar-256 bg-light rounded-circle text-white p-3"
              src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
            />
            <h1 className="display-4">{name}</h1>
            <p className="lead">Trainer</p>
          </div>
        </div>
        <div className="info">
          <div className="card-body p-5">
            <div className="d-flex">
              <h2>Information</h2>
              <i
                className="fas fa-edit btn-lg btn-secondary ms-3"
                role="button"
                onClick={() => setEdit(true)}
              ></i>
            </div>

            <hr className="mt-4 mb-5" />
            <div className="row pt-3 mb-5">
              <div className="col- mb-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-phone me-3"></i>
                  {edit ? (
                    <input
                      type="text"
                      name="phoneNumber"
                      value={updateInfo.phoneNumber}
                      onChange={handleOnChange}
                      placeholder="Enter phone number"
                      className="form-control"
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          handleEdit(id, updateInfo);
                          setEdit(false);
                        }
                      }}
                      onBlur={() => {
                        handleEdit(id, updateInfo);
                        setEdit(false);
                      }}
                    />
                  ) : (
                    <p className="h5 text-muted">{phoneNumber}</p>
                  )}
                </div>
              </div>

              <div className="col- mb-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-user me-3"></i>
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
                      onBlur={() => {
                        handleEdit(id, updateInfo);
                        setEdit(false);
                      }}
                    />
                  ) : (
                    <p className="h5 text-muted">{name}</p>
                  )}
                </div>
              </div>
            </div>
            <h4>Appointments:</h4>
            <hr className="mt-4  mb-5" />
            <div className="row pt-3">
              <div className="col-6 mb-4">
                <button className="btn btn-lg btn-success">
                  <i className="fas fa-calendar-alt me-3"></i>
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
