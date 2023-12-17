import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import '../assets/styles/components/sidebar_container.css'
import { CartContext, ItemInCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export const SidebarComponent = () => {
  const { isOpen, handleClose }: any = useContext(SidebarContext);

  const { cart, removeItem, addOneItem, removeOneItem }: any = useContext(CartContext);

  const itemContainerHTML = (item: ItemInCart) => {
    return (
      <div className="item-box" key={`item-${item.idProduct}`}>
        <figure><img src={`/images/products/${item.imagePath}`} className="item-img" alt={item.name} /></figure>
        <div className="detail-box">
          <h4 className="cart-product-title">{item.name}</h4>
          <p className="cart-price">$ {item.price.toFixed(2)}</p>
          <div className="cart-quantity">
            <button
              className="minus"
              onClick={() => { removeOneItem(item.idProduct) }}
            >-</button>
            <span className="unidades-selected" >{item.amount}</span>
            <button
              className="plus"
              onClick={() => { addOneItem(item.idProduct) }}
            >+</button>
          </div>
        </div>
        <i className="fa-solid fa-trash-can remove-cart" onClick={() => { removeItem(item.idProduct) }}></i>
      </div>
    )
  }

  return (
    <section
      className="cart"
      style={isOpen ? { right: '0' } : { right: '-100%' }}
    >
      <h3>Shopping cart</h3>

      <div className="items-container">
        {cart.length === 0 && <div>
          <p>The shopping cart is empty</p>
          <i className="fa-regular fa-face-sad-cry"></i>
        </div>}

        <div>
          {
            cart.map((item: ItemInCart) => {
              return (
                itemContainerHTML(item)
              )
            })
          }
        </div>
      </div>

      <div className="cart-total">
        <h4>Total</h4>
        <div className="total-price">$ {
          cart.reduce((total: number, item: ItemInCart) => {
            return total + (item.price * item.amount);
          }, 0).toFixed(2)

        }</div>
      </div>
      <Link to='/payment'>
        <button type="button" className="btn-buy-cart">
          Buy now
        </button>
      </Link>
      <button id="close-cart">
        <i className="fa-solid fa-xmark" onClick={() => { handleClose() }}></i>
      </button>
    </section>
  )
}