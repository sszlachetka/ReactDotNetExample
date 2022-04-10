import { AxiosResponse } from "axios";
import useApi from "useApi";
import { ProductItemDto } from "./ProductItemDto";

export default function useProductsApi() {
  var api = useApi();

  const get = (): Promise<AxiosResponse<ProductItemDto[]>> => {
    return api.get<ProductItemDto[]>(`/products`);
  };

  return {
    get,
  };
}
