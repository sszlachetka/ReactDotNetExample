import { ProductItemDto } from "products/api";
import { Link } from "react-router-dom";

interface Props {
  product: ProductItemDto;
}

const ProductListItem: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product.id}`}>{product.id}</Link>
    </div>
  );
};

export default ProductListItem;
