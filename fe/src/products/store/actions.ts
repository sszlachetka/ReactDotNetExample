import api, { ProductItemDto } from "products/api";
import { Dispatch } from "redux";

export enum ProductsActionTypes {
  GET_START = "@@products/GET_START",
  GET_SUCCESS = "@@products/GET_SUCCESS",
  GET_ERROR = "@@products/GET_ERROR",
}

interface GetProductsStartAction {
  type: ProductsActionTypes.GET_START;
}

interface GetProductsSuccessAction {
  type: ProductsActionTypes.GET_SUCCESS;
  products: ProductItemDto[];
}

interface GetProductsErrorAction {
  type: ProductsActionTypes.GET_ERROR;
  error: string;
}

export type ProductsAction =
  | GetProductsStartAction
  | GetProductsSuccessAction
  | GetProductsErrorAction;

export const getProductsStart = (): GetProductsStartAction => {
  return {
    type: ProductsActionTypes.GET_START,
  };
};

export const getProductsSuccess = (
  results: ProductItemDto[]
): GetProductsSuccessAction => {
  return {
    type: ProductsActionTypes.GET_SUCCESS,
    products: results,
  };
};

export const getProductsFailure = (error: string): GetProductsErrorAction => {
  return {
    type: ProductsActionTypes.GET_ERROR,
    error: error,
  };
};

export const getProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(getProductsStart());

    return api
      .getProducts()
      .then((response) => dispatch(getProductsSuccess(response.data)))
      .catch((error) =>
        dispatch(
          getProductsFailure(`Error fetching products: ${error.message}`)
        )
      );
  };
};
