import { Link } from "react-router-dom";
import Product from "../interfaces/product"

import '../assets/styles/components/product_details_container.css'
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export const ProductDetailsContainer: React.FC<{ product: Product }> = ({ product }) => {

  const initialNumberItems = 1;
  const [numberItems, setNumberItems] = useState(initialNumberItems);

  const { addAnAmountToCart }: any = useContext(CartContext);

  const {
    idProduct, name, price, stock, imagePath, rating, history, details, region, handcraft
  } = product;

  return (
    <main>
      <section className="breadcrumbs">
        <ul>
          <li className="breadcrumbs-item"><Link className="breadcrumbs-link" to='/'>Home</Link></li>
          <li className="breadcrumbs-item"><Link className="breadcrumbs-link" to='/catalog'>Catalog</Link></li>
          <li className="breadcrumbs-item"><Link className="breadcrumbs-link" to={`/catalog/product/${idProduct}`}>{name}</Link></li>
        </ul>
      </section>

      <section className="product-details-container">
        <div className="product-box">
          <div className="main-images">
            <img src={`/images/products/${imagePath}`}></img>
          </div>
        </div>
        <div className="general-info">
          <div className="rating-comments">
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>

              <span className="rating-value">{rating}</span>
            </div>
          </div>
          <h3 className="product-title">{name}</h3>
          <h2 className="precio-product">$ {price.toFixed(2)}</h2>

          <h4>Quantity</h4>
          <div className="cantidad">
            <button className="info-minus" onClick={() => { numberItems !== 1 ? setNumberItems(prev => prev - 1) : null }}>-</button>
            <span className="info-unidades-selected">{numberItems}</span>
            <button className="info-plus" onClick={() => { numberItems < stock ? setNumberItems(prev => prev + 1) : null }}>+</button>
          </div>
          <div className="stock-producto">
            <h4>Stock: </h4>
            <span>{stock} availables</span>
          </div>
          <button className="agregar-carrito" onClick={() => { addAnAmountToCart(product, numberItems) }}>
            <span>Add to cart</span>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </section>

      <section className="more-info-product">
        <div className="row">
          <div className="more-info-subcontainer info-artesano">
            <h3>Handcraft information</h3>
            <h4>Name: {handcraft.name}</h4>
            <br></br>

            <p>{handcraft.history}</p>
          </div>
          <div className="more-info-subcontainer history-product">
            <h3>Product history</h3>
            <br></br>
            <p>{history}</p>
            <div className="region">
              <span>Region:</span><label className="region-name" htmlFor="cusco">{region.name}</label><button
                className="conocer-mas" id="cusco">More info</button>
            </div>
          </div>
        </div>
        <div className="more-info-subcontainer product-details">
          <h3>Product details</h3>
          <br></br>
          <p>{details}</p>
        </div>
      </section>

      <section className="action-buttons-container">
        <div className="buttons-subcontainer">
          <button className="action-api-button" id="btn-modify">Modify</button>
          <button className="action-api-button" id="btn-delete">Delete</button>
        </div>
      </section>


    </main>
  )
}