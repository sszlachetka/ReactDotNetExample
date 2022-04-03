import axios, { AxiosResponse } from "defaultAxios";
import { ProductItem } from ".";

export const getProducts = (): Promise<AxiosResponse<ProductItem[]>> => {
  return axios.get<ProductItem[]>(`/products`);
};
