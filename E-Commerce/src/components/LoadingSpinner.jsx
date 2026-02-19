import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <>
      <div className="loading-spinner" style={{ minHeight: "200px" }}>
        <HashLoader color="#205eb8" size={85} />
        <p style={{ margin: "2rem" }}>Loading...</p>
      </div>
    </>
  );
};

export default LoadingSpinner;
