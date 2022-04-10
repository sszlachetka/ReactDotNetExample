import useProductsApi from "products/api";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "products/store/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useLoadProducts() {
  const dispatch = useDispatch();
  const productDetailsApi = useProductsApi();

  const loadProducts = () => {
    dispatch(getProductsStart());

    return productDetailsApi
      .get()
      .then(response => dispatch(getProductsSuccess(response.data)))
      .catch(error =>
        dispatch(
          getProductsFailure(`Error fetching products: ${error.message}`)
        )
      );
  };

  useEffect(() => {
    loadProducts();
  }, []);
}
