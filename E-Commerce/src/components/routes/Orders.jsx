import { useSelector } from "react-redux";

const Orders = () => {
  const OrderItems = useSelector((store) => store.orders);
  return (
    <>
      <center>
        <div>
          <h2 style={{ fontFamily: "Poppins , sans-serif", fontWeight: "600" }}>
            Your Orders
          </h2>
        </div>
        <div className="OrderContainer">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Items</th>
                <th scope="col">Total Price</th>
                <th scope="col">Order Placed At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </>
  );
};

export default Orders;
