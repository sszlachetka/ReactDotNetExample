import axios, { AxiosResponse } from "defaultAxios";
import { ProductDetailsDto } from "./ProductDetailsDto";
import { PutProductDetailsDto } from "./PutProductDetailsDto";

export const putProductDetails = (
  id: string,
  product: PutProductDetailsDto
): Promise<AxiosResponse<ProductDetailsDto>> => {
  return axios.put<ProductDetailsDto>(`/products/${id}`, product);
};
