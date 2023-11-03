import Product from '../interfaces/product';
import { ProductContainer } from "./ProductContainer";

interface Props {
  products: Product[];
}

export const ProductsContainer = (props: Props) => {
  const productsContainerElementHTML = props.products.map((product) => {
    return (
      <ProductContainer
        key={product.idProduct}
        productImgName={product.imagePath}
        productImgAlt={product.name}
        productTitle={product.name}
        productPrice={product.price}
        productRating={product.rating}
      />
    );
  });

  return (
    <div className="products-container col-md-9 col-sm-12 row">
      {productsContainerElementHTML}
    </div>
  );
}