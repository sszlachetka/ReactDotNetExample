import { getProductDetails } from "./actions";
import { ProductDetailsReducer } from "./reducer";
import { productDetailsInitialState, ProductDetailsState } from "./state";

export { ProductDetailsReducer, getProductDetails, productDetailsInitialState };
export type { ProductDetailsState };
