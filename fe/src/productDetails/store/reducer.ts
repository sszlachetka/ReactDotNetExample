import { Reducer } from "redux";
import { ProductDetailsAction, ProductDetailsActionTypes } from "./actions";
import { productDetailsInitialState, ProductDetailsState } from "./state";

export const ProductDetailsReducer: Reducer<
  ProductDetailsState,
  ProductDetailsAction
> = (state = productDetailsInitialState, action): ProductDetailsState => {
  switch (action.type) {
    case ProductDetailsActionTypes.GET_START: {
      return { ...state, loading: true };
    }
    case ProductDetailsActionTypes.GET_SUCCESS: {
      return { ...state, loading: false, data: action.productDetails };
    }
    case ProductDetailsActionTypes.GET_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
};
