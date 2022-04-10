import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";
import ProductListItem from "./ProductListItem";
import useLoadProducts from "./useLoadProducts";

const ProductListContainer: React.FC = () => {
  const { loading, error, data } = useSelector(
    (state: ApplicationState) => state.products
  );
  useLoadProducts();

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
          {data.map(product => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductListContainer;
