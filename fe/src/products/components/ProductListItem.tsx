import { Button, Link, TableCell, TableRow } from "@mui/material";
import { ProductItemDto } from "products/api";

interface Props {
  product: ProductItemDto;
}

const ProductListItem: React.FC<Props> = ({ product }) => {
  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          {product.id}
        </TableCell>
        <TableCell>{"Some name"}</TableCell>
        <TableCell align="right">{"122.34"}</TableCell>
        <TableCell align="right">
          <Button href={`/products/${product.id}`}>Edit</Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProductListItem;
