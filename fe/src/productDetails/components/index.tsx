import { ProductDetailsDto } from "productDetails/api";
import { getProductDetails } from "productDetails/store";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ApplicationState } from "store";

interface PropsFromState {
  loading: boolean;
  productDetails?: ProductDetailsDto;
  error?: string;
}

interface PropsFromDispatch {
  loadProductDetails: (id: string) => void;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Container: React.FC<AllProps> = ({
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

  return <>{productDetails && productDetails.id}</>;
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

const ProductDetails = connect(mapStateToProps, mapDispatchToProps)(Container);

export { ProductDetails };
