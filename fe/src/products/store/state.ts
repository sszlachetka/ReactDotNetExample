import { ProductItemDto } from "products/api";

export interface ProductsState {
  readonly loading: boolean;
  readonly data: ProductItemDto[];
  readonly error?: string;
}

export const productsInitialState: ProductsState = {
  data: [],
  loading: false,
  error: undefined,
};
