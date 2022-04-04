import axios, { AxiosResponse } from "defaultAxios";
import { ProductItemDto } from ".";

export const getProducts = (): Promise<AxiosResponse<ProductItemDto[]>> => {
  return axios.get<ProductItemDto[]>(`/products`);
};
