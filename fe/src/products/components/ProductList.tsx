import { ProductItemDto } from "products/api";
import { getProducts } from "products/store";
import { useEffect } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ApplicationState } from "store";
import ProductListItem from "./ProductListItem";

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
        <ProductListItem key={product.id} product={product} />
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

const ProductList = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ProductList;
