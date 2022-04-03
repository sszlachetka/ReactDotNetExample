import { getProducts } from "./actions";
import { ProductsReducer } from "./reducer";
import { productsInitialState, ProductsState } from "./state";

export { ProductsReducer, getProducts, productsInitialState };
export type { ProductsState };
