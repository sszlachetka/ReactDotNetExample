import axios, { AxiosResponse } from "defaultAxios";
import { ProductDetailsDto } from "./ProductDetailsDto";

export const getProductDetails = (
  id: string
): Promise<AxiosResponse<ProductDetailsDto>> => {
  return axios.get<ProductDetailsDto>(`/products/${id}`);
};
