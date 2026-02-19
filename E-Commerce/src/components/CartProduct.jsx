import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { CartItemsActions } from "../store/CartItems";

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();

  const handleOnRemove = () => {
    dispatch(CartItemsActions.removeFromCart(item.id));
  };

  return (
    <>
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", margin: "1rem 0rem", width: "47.5%" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                <small className="text-body-secondary">
                  Category : {item.category}
                </small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Rating : {item.rating.rate}{" "}
                  <MdOutlineStar color="orange" size={20} /> |{"  "}
                  {item.rating.count}
                </small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Price : ${item.price}
                </small>
              </p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleOnRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
