import api, { ProductDetailsDto } from "productDetails/api";
import { Dispatch } from "redux";

export enum ProductDetailsActionTypes {
  GET_START = "@@productDetails/GET_START",
  GET_SUCCESS = "@@productDetails/GET_SUCCESS",
  GET_ERROR = "@@productDetails/GET_ERROR",
}

interface GetProductDetailsStartAction {
  type: ProductDetailsActionTypes.GET_START;
}

interface GetProductDetailsSuccessAction {
  type: ProductDetailsActionTypes.GET_SUCCESS;
  productDetails: ProductDetailsDto;
}

interface GetProductDetailsErrorAction {
  type: ProductDetailsActionTypes.GET_ERROR;
  error: string;
}

export type ProductDetailsAction =
  | GetProductDetailsStartAction
  | GetProductDetailsSuccessAction
  | GetProductDetailsErrorAction;

export const getProductDetailsStart = (): GetProductDetailsStartAction => {
  return {
    type: ProductDetailsActionTypes.GET_START,
  };
};

export const getProductDetailsSuccess = (
  results: ProductDetailsDto
): GetProductDetailsSuccessAction => {
  return {
    type: ProductDetailsActionTypes.GET_SUCCESS,
    productDetails: results,
  };
};

export const getProductDetailsFailure = (
  error: string
): GetProductDetailsErrorAction => {
  return {
    type: ProductDetailsActionTypes.GET_ERROR,
    error: error,
  };
};

export const getProductDetails = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getProductDetailsStart());

    return api
      .getProductDetails(id)
      .then((response) => dispatch(getProductDetailsSuccess(response.data)))
      .catch((error) =>
        dispatch(
          getProductDetailsFailure(
            `Error fetching details of product ${id}: ${error.message}`
          )
        )
      );
  };
};
