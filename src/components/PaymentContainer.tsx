import { useContext } from "react";
import { CartContext, ItemInCart } from "../contexts/CartContext";

import '../assets/styles/components/payment_container.css'

export const PaymentContainer = () => {

  const { cart }: any = useContext(CartContext);

  const itemContainerHTML = (item: ItemInCart) => {
    return (
      <div className="cart-item" key={`item-${item.idProduct}`}>
        <figure>
          <img src={`/images/products/${item.imagePath}`} className="item-img" alt={item.name} />
        </figure>
        <div className="detail-box">
          <h4 className="cart-item-title">{item.name}</h4>
          <p className="cart-item-details">Price: $ {item.price.toFixed(2)}</p>
          <p className="cart-item-details">Units: {item.amount}</p>
          <p className="cart-item-details">Total price: $ {(item.price * item.amount).toFixed(2)}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="payment-container">
      <div className="payment-subcontainer">
        <h3>My products</h3>
        <div className="cart-items">
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
        <div className="buttons-container">
          <button className="payment-btn" id="buy-btn">Buy now</button>
          <button className="payment-btn" id="ret-btn">Return to shopping</button>
        </div>
      </div>
    </section>
  )
}