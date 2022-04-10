import { AxiosResponse } from "axios";
import useApi from "useApi";
import { ProductDetailsDto } from "./ProductDetailsDto";
import { PutProductDetailsDto } from "./PutProductDetailsDto";

export default function useProductDetailsApi() {
  var api = useApi();

  const get = (id: string): Promise<AxiosResponse<ProductDetailsDto>> => {
    return api.get<ProductDetailsDto>(`/products/${id}`);
  };

  const put = (
    id: string,
    product: PutProductDetailsDto
  ): Promise<AxiosResponse<ProductDetailsDto>> => {
    return api.put<ProductDetailsDto>(`/products/${id}`, product);
  };

  return {
    get,
    put,
  };
}
