import style from "./styles/Product.module.css";
import { MdOutlineStar } from "react-icons/md";

const Product = ({ item }) => {
  return (
    <>
      <div className={`card mb-3 ${style.ProductStyle}`}>
        <div className="row g-0">
          <div
            className="col-md-4"
            style={{
              padding: "0.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <p className="card-text">
              <small className="text-body-secondary">{item.category}</small>
            </p>
            <div className="card-body">
              <h5 className={`card-title ${style.BiggerText}`}>{item.title}</h5>
              <p className={`card-text ${style.DescriptionText}`}>
                {item.description}
              </p>
              <p
                className={`card-text text-secondary ${style.BigText} ${style.CentreText}`}
              >
                {item.rating.rate} <MdOutlineStar color="orange" size={27} /> |{" "}
                {item.rating.count}
              </p>
              <p
                className={`card-text text-success ${style.BigText} ${style.CentreText}`}
              >
                Price : $ {item.price}
              </p>
              <p className="card-text">
                <small className="text-body-secondary"></small>
              </p>
              <div className={`${style.AddToCart}`}>
                {" "}
                <button type="button" className={`btn btn-success `}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
