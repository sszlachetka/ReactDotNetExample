import useProductDetailsApi from "productDetails/api";
import { useNavigate } from "react-router-dom";
import { ProductDetailsFormState } from "./ProductDetailsForm";

export type onSubmitDelegate = (values: ProductDetailsFormState) => void;

const useOnSubmit: () => onSubmitDelegate = () => {
  const navigate = useNavigate();
  const productDetailsApi = useProductDetailsApi();

  async function onSubmit(values: ProductDetailsFormState) {
    const { id, name, price, availableFrom } = values;

    await productDetailsApi.put(id, { name, price, availableFrom });

    navigate("/products");
  }

  return onSubmit;
};

export default useOnSubmit;
