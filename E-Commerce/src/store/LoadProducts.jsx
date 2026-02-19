import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchProducts } from "../components/api/FetchProducts";
import { ProductSliceActions } from "./productsSlice";
import { FetchDoneActions } from "./FetchDoneSlice";

const LoadProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      dispatch(FetchDoneActions.setLoading()); // set loading first
      try {
        const products = await FetchProducts();
        dispatch(ProductSliceActions.addInitialProducts(products));
        dispatch(FetchDoneActions.setSucceeded()); // finished successfully
      } catch (error) {
        console.error(error.message);
        dispatch(FetchDoneActions.setFailed()); // failed
      }
    };

    load();
  }, [dispatch]);

  return null;
};

export default LoadProducts;
