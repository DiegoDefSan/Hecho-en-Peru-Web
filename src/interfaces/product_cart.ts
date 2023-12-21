import Cart from "./cart";
import Product from "./product";

interface ProductCart {
  idProductCart?: string;
  cart: Cart;
  product: Product;
  quantity: number;
}

export default ProductCart;