import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApplicationState } from "store";
import ProductDetailsForm from "./ProductDetailsForm";
import useLoadProductDetails from "./useLoadProductDetails";
import useOnCancel from "./useOnCancel";
import useOnSubmit from "./useOnSubmit";

const ProductDetailsContainer: React.FC = () => {
  const { loading, error, data } = useSelector(
    (state: ApplicationState) => state.productDetails
  );
  const onSubmit = useOnSubmit();
  const onCancel = useOnCancel();
  const { id } = useParams();
  useLoadProductDetails(id);

  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;

  return data ? (
    <ProductDetailsForm
      initialState={{ ...data }}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  ) : null;
};

export default ProductDetailsContainer;
