import { ProductDetailsDto } from "productDetails/api";

export interface ProductDetailsState {
  readonly data?: ProductDetailsDto;
  readonly loading: boolean;
  readonly error?: string;
}

export const productDetailsInitialState: ProductDetailsState = {
  data: undefined,
  loading: false,
  error: undefined,
};
