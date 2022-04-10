import useProductDetailsApi from "productDetails/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getProductDetailsFailure,
  getProductDetailsStart,
  getProductDetailsSuccess,
} from "../store/actions";

export default function useLoadProductDetails(productId: string | undefined) {
  const dispatch = useDispatch();
  const productDetailsApi = useProductDetailsApi();

  const loadProductDetails = (id: string) => {
    dispatch(getProductDetailsStart());

    return productDetailsApi
      .get(id)
      .then(response => dispatch(getProductDetailsSuccess(response.data)))
      .catch(error =>
        dispatch(
          getProductDetailsFailure(
            `Error fetching details of product ${id}: ${error.message}`
          )
        )
      );
  };

  useEffect(() => {
    productId && loadProductDetails(productId);
  }, [productId]);
}
