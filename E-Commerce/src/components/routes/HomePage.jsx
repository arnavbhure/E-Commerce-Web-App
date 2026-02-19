import { useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner";
import LoadProducts from "../../store/LoadProducts";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
  const status = useSelector((store) => store.fetch.status);

  return (
    <>
      <LoadProducts />
      {status === "loading" && <LoadingSpinner />}
      {status === "succeeded" && (
        <div className="container my-5">
          {
            <div className="container my-5">
              {" "}
              <div className="row align-items-center g-lg-5 py-5">
                {" "}
                <div className="col-lg-7 text-center text-lg-start">
                  {" "}
                  <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                    Welcome To E-Commmerce App
                  </h1>{" "}
                  <code>
                    <p style={{ marginTop: "3rem", fontSize: "1.15rem" }}>
                      Explore the latest products, enjoy seamless shopping, and
                      find everything you need at the click of a button."
                    </p>
                  </code>{" "}
                </div>{" "}
                <div className="col-md-10 mx-auto col-lg-5">
                  {" "}
                  <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    {" "}
                    <div className="form-floating mb-3">
                      {" "}
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />{" "}
                      <label htmlFor="floatingInput">Email address</label>{" "}
                    </div>{" "}
                    <div className="form-floating mb-3">
                      {" "}
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />{" "}
                      <label htmlFor="floatingPassword">Password</label>{" "}
                    </div>{" "}
                    <div className="checkbox mb-3">
                      {" "}
                      <label>
                        {" "}
                        <input type="checkbox" value="remember-me" /> Remember
                        me
                      </label>{" "}
                    </div>{" "}
                    <button
                      className="w-100 btn btn-lg btn-primary"
                      type="submit"
                    >
                      Sign up
                    </button>{" "}
                    <hr className="my-4" />{" "}
                    <small className="text-body-secondary">
                      By clicking Sign up, you agree to the terms of use.
                    </small>{" "}
                  </form>{" "}
                </div>
                <div className="explore-all-products-button">
                  <button type="button" className="btn btn-info">
                    <Link to="/products">
                      Explore Products <FaArrowRightLong />
                    </Link>
                  </button>
                </div>{" "}
              </div>
            </div>
          }
        </div>
      )}
      {status === "failed" && (
        <p className="text-danger">Failed to load products.</p>
      )}
    </>
  );
};

export default HomePage;

/**/
