import Product from '../interfaces/product';
import { ProductContainer } from "./ProductContainer";

interface Props {
  products: Product[];
}

export const ProductsContainer = (props: Props) => {
  const productsContainerElementHTML = props.products.map((product: Product) => {
    return (
      <ProductContainer key={product.idProduct} product={product} />
    );
  });

  return (
    <div className="products-container row">
      {productsContainerElementHTML}
    </div>
  );
}