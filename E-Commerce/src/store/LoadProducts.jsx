import { useEffect } from "react";
import { FetchProducts } from "../components/api/FetchProducts";
import { useDispatch } from "react-redux";
import { ProductSliceActions } from "./productsSlice";

const LoadProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const load = async () => {
      try {
        const products = await FetchProducts();
        dispatch(ProductSliceActions.addInitialProducts(products));
      } catch (error) {
        console.error(error.message);
      }
    };
    load();
  }, []);
  return <></>;
};

export default LoadProducts;
