import React from 'react'

function TrainerCard({name, username, email, phoneNumber}) {


  return (
    <div className="d-flex flex-column align-items-center">
      <section className="d-flex">
        <div>
          <div className="text-center text-black">
            <img
              src="../../../public/images/luie.JPG"
              alt="Avatar"
              width="210px"
              className="m-4"
              style={{borderRadius:"50%"}}
            />
            <h5>{name}</h5>
            <p>Trainer</p>
          </div>
        </div>
        <div className="info">
          <div className="card-body p-4">
            <h6>Information</h6>
            <hr className="mt-3 mb-4" />
            <div className="row pt-1 mb-4">
            <div className="col- mb-3">
                <p className="text-muted"><i className="fas fa-envelope me-2"></i>{email}</p>
              </div>
              <div className="col- mb-3">
                <p className="text-muted"><i className="fas fa-phone me-2"></i>{phoneNumber}</p>
              </div>
              <div className="col- mb-3">
                <p className="text-muted"><i className="fas fa-user me-2"></i>{username}</p>
              </div>
            </div>
            <h6>Appointments:</h6>
            <hr className="mt-3  mb-4" />
            <div className="row pt-1">
              <div className="col-6 mb-3">
                <button   className="btn btn-sm btn-success">
                <i className="fas fa-calendar-alt me-2"></i><a href="https://calendar.google.com/calendar/u/0/r" target="_blank">Calendar</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrainerCard