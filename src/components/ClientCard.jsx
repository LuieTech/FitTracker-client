import { useState } from "react";
import {
  getClientById,
  updateComment,
} from "../services/backend-service/client.service";
import { useTrainerContext } from "../context/trainer.context";

export default function ClientCard({
  id,
  name,
  email,
  phoneNumber,
  comment,
  handleOnClick,
  handleOnDelete,
  showList,
  reloadClient,
}) {
  
  const { trainerId } = useTrainerContext();
  const [edit, setEdit] = useState(false);
  const [updatedComment, setUpdatedComment] = useState({ comment: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdatedComment({
      [name]: value,
    });
  };

  const handleEdit = async (id, updatedComment) => {
    const response = await updateComment(id, updatedComment);
    setEdit(false);
    reloadClient(id);
  };

  return (
    <div className="d-flex flex-column align-items-center pb-5">
      <section className="d-flex">
        <div className="position-relative">
          <div className="text-center text-black d-flex flex-column align-items-center gap-1">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="Avatar"
              width="210px"
              className="m-4"
              style={{ borderRadius: "50%" }}
            />
            <h5>{name}</h5>
            <p>Web Developer</p>
            <button
              onClick={handleOnClick}
              className="btn btn-outline-info"
              role="button"
            >
              {!showList ? "show more" : "show less"}
            </button>
          </div>
        </div>
        <div className="info">
          <div className="card-body p-4">
            <h4>
              Information{" "}
              <i
                onClick={handleOnDelete}
                className="btn btn-danger btn-sm fa fa-trash-alt ms-4"
                aria-hidden="true"
              ></i>
            </h4>
            <hr className="mt-3 mb-4" />
            <div className="col- mb-3">
                <p className="text-muted"><i className="fas fa-user me-2"></i>{name}</p>
              </div>
            <div className="row pt-1 mb-4">
              <div className="col- mb-3">
                <p className="text-muted">
                  <i className="fas fa-envelope me-2"></i>
                  {email}
                </p>
              </div>
              <div className="col- mb-3">
                <p className="text-muted">
                  <i className="fas fa-phone me-2"></i>
                  {phoneNumber}
                </p>
              </div>
            </div>
            <h6>Notes:</h6>
            <hr className="mt-3  mb-4" />
            <div className="">
              {edit ? (
                <textarea
                  autoFocus
                  placeholder="comment here "
                  name="comment"
                  value={updatedComment.comment}
                  onChange={handleOnChange}
                  onBlur={() => {
                      handleEdit(id, updatedComment);
                      setEdit(false);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleEdit(id, updatedComment);
                    }
                  }}
                />
              ) : (
                <div className="d-flex flex-columns">
                  <div className="d-flex flex-column gap-3">
                    <div>
                      <i className="fas fa-comments m-2 "></i>
                    </div>
                    <div>
                      <i
                        className="fas fa-edit btn-sm btn btn-secondary"
                        role="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEdit(true);
                        }}
                      ></i>
                    </div>
                  </div>
                  <div className="ms-3">
                    <p>{comment}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
