import { ProductItem } from "products/api";

export interface ProductsState {
  readonly loading: boolean;
  readonly data: ProductItem[];
  readonly error?: string;
}

export const productsInitialState: ProductsState = {
  data: [],
  loading: false,
  error: undefined,
};
