import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center row">
          <div className=" col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className=" col-md-6 mt-5">
            <p className="fs-3">
              {" "}
              <span className="text-danger">Opps!</span> Page not found.
            </p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>
            <div className="d-flex justify-content-center flex-wrap">
              <button
                className="form-btn btn  m-2"
                onClick={() => {
                  navigate("/");
                }}
              >
                <span>
                  Home
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
              <button
                className="form-btn btn btn-secondary m-2"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <span>
                  Back
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
