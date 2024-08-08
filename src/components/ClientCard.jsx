
export default function ClientCard({
  name,
  email,
  phoneNumber,
  comment,
  handleOnClick,
  handleOnDelete,
  showList,
  random
}) {

  return (
    <div className="d-flex flex-column align-items-center pb-5">
      <section className="d-flex">
        <div className="position-relative">
          <div className="text-center text-black d-flex flex-column align-items-center gap-1">
            <img
              src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${random()}.jpg`}
              
              alt="Avatar"
              width="200px"
              className="m-4 "
              style={{borderRadius:"50%"}}
              
            />
            <h5>{name}</h5>
            <p>Web Developer</p>
            <button onClick={handleOnClick} className="btn btn-outline-info" role="button" >
              {!showList ? "show more" : "show less"}
            </button>

          </div>
        </div>
        <div className="info">
          <div className="card-body p-4">
            <h6>Information <i onClick={handleOnDelete} className="btn btn-danger fa fa-trash-alt ms-5" aria-hidden="true"></i></h6> 
            <hr className="mt-3 mb-4" />
            <div className="row pt-1 mb-4">
              <div className="col- mb-3">
                <p className="text-muted"><i className="fas fa-envelope me-2"></i>{email}</p>
              </div>
              <div className="col- mb-3">
                <p className="text-muted"><i className="fas fa-phone me-2"></i>{phoneNumber}</p>
              </div>
            </div>
            <h6>Notes:</h6>
            <hr className="mt-3  mb-4" />
            <div className="row pt-1">
              <div className="col-6 mb-3 d-flex">
                <i className="fas fa-comments me-3"></i>
                <p className="text-muted">{comment}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
