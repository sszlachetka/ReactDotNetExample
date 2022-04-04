import { ProductItemDto } from "products/api";
import { getProducts } from "products/store";
import { useEffect } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ApplicationState } from "store";

interface PropsFromState {
  loading: boolean;
  products: ProductItemDto[];
  error?: string;
}

interface PropsFromDispatch {
  loadProducts: () => void;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Container: React.FC<AllProps> = ({
  loading,
  error,
  products,
  loadProducts,
}) => {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>{product.id}</div>
      ))}
    </>
  );
};

const mapStateToProps = ({ products }: ApplicationState) => ({
  loading: products.loading,
  error: products.error,
  products: products.data,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    loadProducts: () => {
      dispatch(getProducts());
    },
  };
};

const ProductsList = connect(mapStateToProps, mapDispatchToProps)(Container);

export { ProductsList };
