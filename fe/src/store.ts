import {
  productDetailsInitialState,
  ProductDetailsReducer,
  ProductDetailsState,
} from "productDetails/store";
import {
  ProductsReducer,
  ProductsState,
  productsInitialState,
} from "products/store";
import {
  Store,
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";

export interface ApplicationState {
  products: ProductsState;
  productDetails: ProductDetailsState;
}

export const applicationInitialState = {
  products: productsInitialState,
  productDetails: productDetailsInitialState,
};

const createRootReducer = () =>
  combineReducers({
    products: ProductsReducer,
    productDetails: ProductDetailsReducer,
  });

export default function configureStore(
  initialState: ApplicationState = applicationInitialState
): Store<ApplicationState> {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
