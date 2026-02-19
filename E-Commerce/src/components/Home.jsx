import { useSelector } from "react-redux";
import Product from "./Product";
import style from "./styles/Product.module.css";
import LoadProducts from "../store/LoadProducts";

const Home = () => {
  const nowproducts = useSelector((store) => store.products.items);

  return (
    <>
      <LoadProducts />;
      <div className={`${style.ProductsFlexBox}`}>
        {nowproducts.map((product) => (
          <Product item={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
