import api from "productDetails/api";
import { useNavigate } from "react-router-dom";
import { ProductDetailsFormState } from "./ProductDetailsForm";

export type onSubmitDelegate = (values: ProductDetailsFormState) => void;

const useOnSubmit: () => onSubmitDelegate = () => {
  const navigate = useNavigate();

  async function onSubmit(values: ProductDetailsFormState) {
    const { id, name, price, availableFrom } = values;

    await api.putProductDetails(id, { name, price, availableFrom });

    navigate("/products");
  }

  return onSubmit;
};

export default useOnSubmit;
