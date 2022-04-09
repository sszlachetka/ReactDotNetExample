import { getProductDetails } from "./getProductDetails";
import { ProductDetailsDto } from "./ProductDetailsDto";
import { putProductDetails } from "./putProductDetails";
import { PutProductDetailsDto } from "./PutProductDetailsDto";

const api = { getProductDetails, putProductDetails };

export default api;
export type { ProductDetailsDto, PutProductDetailsDto };
