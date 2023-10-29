import React from 'react';
import { AddCartButton } from './buttons/impl/AddCartButton';
import '../assets/styles/components/product_container.css'

interface Props {
  productImgName: string;
  productImgAlt: string;
  productTitle: string;
  productPrice: number;
  productRating: number;
}

export const ProductContainer = (props: Props) => {

  const productImageLocationPath = '../../public/images/products/' + props.productImgName;

  return (
    <div className='product-container col-lg-4 col-md-4 col-sm-6 col-12'>

      <div className="product-subcontainer" id='product-image'>
        <img src={`${productImageLocationPath}`} className="product-img" alt={`${props.productImgAlt}`} />
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
        <AddCartButton />
      </div>
    </div>
  )
}