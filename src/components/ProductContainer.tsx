import { useContext } from 'react';
import '../assets/styles/components/product_container.css'
import { CartContext } from '../contexts/CartContext';

interface Props {
  productImgName: string;
  productImgAlt: string;
  productTitle: string;
  productPrice: number;
  productRating: number;
}

export const ProductContainer = (props: Props) => {

  const productImageLocationPath = '/images/products/' + props.productImgName;

  return (
    <div className='product-container col-lg-4 col-md-4 col-sm-6 col-12'>

      <div className="product-subcontainer" id='product-image'>
        <div className="product-img-subcontainer">
          <img src={`${productImageLocationPath}`} className="product-img" alt={`${props.productImgAlt}`} />
        </div>
        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <span className="rating-value">{props.productRating}</span>
        </div>
      </div>

      <div className="product-subcontainer" id='product-details'>
        <div className="product-subcontainer">
          <h4 className="product-title">{props.productTitle}</h4>
          <p className="product-price">$ {props.productPrice.toFixed(2)}</p>
        </div>
        <button
          className="add-cart-button"
          onClick={() => { }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}