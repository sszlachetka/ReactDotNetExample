import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
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

const ProductListContainer: React.FC<AllProps> = ({
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price $</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);

export default ProductList;
