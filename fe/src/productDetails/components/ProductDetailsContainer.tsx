import { ProductDetailsDto } from "productDetails/api";
import { getProductDetails } from "productDetails/store";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ApplicationState } from "store";
import ProductDetailsForm, {
  ProductDetailsFormState,
} from "./ProductDetailsForm";

interface PropsFromState {
  loading: boolean;
  productDetails?: ProductDetailsDto;
  error?: string;
}

interface PropsFromDispatch {
  loadProductDetails: (id: string) => void;
}

type AllProps = PropsFromState & PropsFromDispatch;

const ProductDetails: React.FC<AllProps> = ({
  loading,
  error,
  productDetails,
  loadProductDetails,
}) => {
  let { id } = useParams();
  useEffect(() => {
    id && loadProductDetails(id);
  }, [loadProductDetails, id]);

  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;
  if (productDetails == null) return <>Product details not found</>;

  const { id: productId, name, unitPrice, availableFrom } = productDetails;
  const initialState: ProductDetailsFormState = {
    id: productId,
    name: name,
    unitPrice: unitPrice,
    availableFrom: availableFrom,
  };

  return <ProductDetailsForm initialState={initialState} />;
};

const mapStateToProps = ({ productDetails }: ApplicationState) => ({
  loading: productDetails.loading,
  error: productDetails.error,
  productDetails: productDetails.data,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    loadProductDetails: (id: string) => {
      dispatch(getProductDetails(id));
    },
  };
};

const ProductDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);

export default ProductDetailsContainer;
