import React from 'react'

function TrainerCard({name, username, email, phoneNumber}) {


  return (
    <div className="d-flex flex-column align-items-center">
      <section className="d-flex">
        <div>
          <div className="text-center text-black">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              alt="Avatar"
              width="50%"
              className="mb-3"
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
                <h6>Email</h6>
                <p className="text-muted">{email}</p>
              </div>
              <div className="col- mb-3">
                <h6>Phone</h6>
                <p className="text-muted">{phoneNumber}</p>
              </div>
              <div className="col- mb-3">
                <h6>Username</h6>
                <p className="text-muted">{username}</p>
              </div>
            </div>
            <h6>Appointments:</h6>
            <hr className="mt-3  mb-4" />
            <div className="row pt-1">
              <div className="col-6 mb-3">
                <button   className="btn btn-sm btn-success"><a href="https://calendar.google.com/calendar/u/0/r">Calendar</a></button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrainerCard