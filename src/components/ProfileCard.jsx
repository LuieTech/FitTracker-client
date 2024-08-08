// import React from "react";

export default function ProfileCard({
  name,
  email,
  phoneNumber,
  comment,
  handleOnClick,
  handleOnDelete
}) {
  return (
    <div className="d-flex flex-column align-items-center">
      <section className="d-flex">
        <div className="position-relative">
          <div className="text-center text-black">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              alt="Avatar"
              width="50%"
              className="mb-3"
            />
            <h5>{name}</h5>
            <p>Web Developer</p>
            <button onClick={handleOnClick} className="btn btn-sm btn-success">
              show more
            </button>
            <button onClick={handleOnDelete} className="btn btn-sm btn-danger position-absolute top-0 end-0 mt-3 me-3">
              Delete
            </button>
          </div>
        </div>
        <div className="info">
          <div className="card-body p-4">
            <h6>Information</h6>
            <hr className="mt-3 mb-4" />
            <div className="row pt-1 mb-4">
              <div className="col- mb-3">
                <h6>Email</h6>
                <p className="text-muted">{email}</p>
              </div>
              <div className="col- mb-3">
                <h6>Phone</h6>
                <p className="text-muted">{phoneNumber}</p>
              </div>
            </div>
            <h6>Notes:</h6>
            <hr className="mt-3  mb-4" />
            <div className="row pt-1">
              <div className="col-6 mb-3">
                <p className="text-muted">{comment}</p>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <a href="#!">
                <i className="fab fa-facebook-f fa-lg me-3"></i>
              </a>
              <a href="#!">
                <i className="fab fa-twitter fa-lg me-3"></i>
              </a>
              <a href="#!">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
