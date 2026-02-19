import { BsCart2 } from "react-icons/bs";
import CartProduct from "../CartProduct";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((store) => store.cart);
  let totalPrice = 0;
  {
    items.map((item) => (totalPrice += item.price));
  }
  if (items.length === 0) {
    return (
      <>
        <center>
          <h2>Your Cart is Empty!!</h2>
        </center>
      </>
    );
  }

  return (
    <div className="container" style={{ marginBottom: "2rem" }}>
      <main>
        <div className="py-5 text-center">
          <BsCart2 size={60} />
          <h1 className="h2" style={{ margin: "1.2rem" }}>
            Cart
          </h1>
        </div>

        <div className="row g-1">
          {/*Cart Items */}
          <div className="col-md-7 col-lg-8">
            <div className="cart-product-container ">
              {items.map((item) => (
                <CartProduct item={item} key={item.id} />
              ))}
            </div>
          </div>
          {/* Billing Summary */}
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {items.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {items.map((item) => (
                <li
                  className="list-group-item d-flex justify-content-between lh-sm"
                  key={item.id}
                >
                  <div>
                    <h6 className="my-0">{item.title}</h6>
                  </div>
                  <span className="text-body-secondary">${item.price}</span>
                </li>
              ))}

              <li
                className="list-group-item d-flex justify-content-between lh-sm text-success "
                style={{ fontSize: "1.2rem", fontWeight: "600" }}
              >
                Total Price
                <span>{totalPrice}</span>
              </li>
            </ul>

            <form className="card p-2">
              {/* <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div> */}
              <button
                type="button"
                className="btn btn-success"
                style={{ margin: "2rem 1.5rem" }}
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
