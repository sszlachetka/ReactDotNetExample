import { Reducer } from "redux";
import { ProductsAction, ProductsActionTypes } from "./actions";
import { productsInitialState, ProductsState } from "./state";

export const ProductsReducer: Reducer<ProductsState, ProductsAction> = (
  state = productsInitialState,
  action
): ProductsState => {
  switch (action.type) {
    case ProductsActionTypes.GET_START: {
      return { ...state, loading: true };
    }
    case ProductsActionTypes.GET_SUCCESS: {
      return { ...state, loading: false, data: action.products };
    }
    case ProductsActionTypes.GET_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
};
