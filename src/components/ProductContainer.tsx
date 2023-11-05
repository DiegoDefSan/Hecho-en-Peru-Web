import { useContext } from 'react';
import '../assets/styles/components/product_container.css'
import { CartContext } from '../contexts/CartContext';
import Product from '../interfaces/product';

interface Props {
  product: Product;
}

export const ProductContainer = ({ product }: Props) => {

  const { addToCart }: any = useContext(CartContext);

  const productDetails = {
    idProduct: product.idProduct,
    name: product.name,
    price: product.price,
    imagePath: product.imagePath,
    rating: product.rating,
  }

  const productImageLocationPath = '/images/products/' + productDetails.imagePath;

  return (
    <div className='product-container col-lg-4 col-md-4 col-sm-6 col-12'>

      <div className="product-subcontainer" id='product-image'>
        <div className="product-img-subcontainer">
          <img src={`${productImageLocationPath}`} className="product-img" alt={`${productDetails.name}`} />
        </div>
        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <span className="rating-value">{productDetails.rating}</span>
        </div>
      </div>

      <div className="product-subcontainer" id='product-details'>
        <div className="product-subcontainer">
          <h4 className="product-title">{productDetails.name}</h4>
          <p className="product-price">$ {productDetails.price.toFixed(2)}</p>
        </div>
        <button
          className="add-cart-button"
          onClick={() => { addToCart(product) }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}