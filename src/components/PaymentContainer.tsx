import { useContext } from "react";
import { CartContext, ItemInCart } from "../contexts/CartContext";

import '../assets/styles/components/payment_container.css'
import useGetCarts from "../hooks/cart/useGetCarts";
import Product from "../interfaces/product";
import ProductCart from "../interfaces/product_cart";
import usePostProductsCarts from "../hooks/product_cart/usePostProductsCarts";
import useDeleteCart from "../hooks/cart/useDeleteCart";
import { Link } from "react-router-dom";

export const PaymentContainer = () => {

  const { cart }: any = useContext(CartContext);

  const {
    data: cartsList
  } = useGetCarts();

  const {
    mutate: deleteCart
  } = useDeleteCart();

  const {
    mutate: postNewProductsCartsList
  } = usePostProductsCarts();


  const handleBuy = () => {
    const recentlyCartCreated = cartsList![cartsList!.length - 1];

    const productsCartsList = cart.map((item: ItemInCart) => {
      let product: Product = {
        idProduct: item.idProduct,
        name: item.name,
        price: item.price,
        stock: item.stock,
        imagePath: item.imagePath,
        rating: item.rating,
        history: item.history,
        details: item.details,
        category: item.category,
        region: item.region,
        handcraft: item.handcraft
      }

      let productInCart: ProductCart = {
        cart: recentlyCartCreated,
        product: product,
        quantity: item.amount
      }

      return productInCart;
    })

    postNewProductsCartsList(productsCartsList)
  }

  const cancelPayment = () => {
    const recentlyCartCreated = cartsList![cartsList!.length - 1];

    deleteCart(recentlyCartCreated.idCart!);

  }

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
          <button className="payment-btn" id="buy-btn" onClick={handleBuy}>Buy now</button>
          <Link to='/catalog'>
            <button className="payment-btn" id="ret-btn" onClick={cancelPayment}>Return to shopping</button>
          </Link>
        </div>
      </div>
    </section>
  )
}