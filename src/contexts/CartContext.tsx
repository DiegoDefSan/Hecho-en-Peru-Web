import React, { createContext, useState } from "react";
import Product from "../interfaces/product"

export const CartContext = createContext({});

type CartProviderProps = {
  children: React.ReactNode;
}

export interface ItemInCart extends Product {
  amount: number;
}

export const CartProvider = ({ children }: CartProviderProps) => {

  const [cart, setCart] = useState<ItemInCart[]>([]);

  const addToCart = (product: Product) => {
    const newItem = { ...product, amount: 1 } as ItemInCart;

    // check if the item is already in the cart
    const itemInCart = cart.find((item: ItemInCart) => item.idProduct === product.idProduct);

    if (itemInCart) {
      const newCart = cart.map((item: ItemInCart) => {
        if (item.idProduct === product.idProduct) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  const addAnAmountToCart = (product: Product, quantity: number) => {
    const newItem = { ...product, amount: quantity } as ItemInCart;

    // check if the item is already in the cart
    const itemInCart = cart.find((item: ItemInCart) => item.idProduct === product.idProduct);

    if (itemInCart) {
      const newCart = cart.map((item: ItemInCart) => {
        if (item.idProduct === product.idProduct) {
          return {
            ...item,
            amount: quantity,
          };
        }
        return item;
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  const removeItem = (id: string) => {
    const newCart = cart.filter((item: ItemInCart) => item.idProduct !== id);
    setCart(newCart);
  }

  const addOneItem = (id: string) => {
    const newCart = cart.map((item: ItemInCart) => {
      if (item.idProduct === id) {
        return {
          ...item,
          amount: item.amount < item.stock ? item.amount + 1 : item.amount,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  const removeOneItem = (id: string) => {
    const newCart = cart.map((item: ItemInCart) => {
      if (item.idProduct === id) {

        return {
          ...item,
          amount: item.amount > 1 ? item.amount - 1 : item.amount,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, addOneItem, removeOneItem, addAnAmountToCart }}>
      {children}
    </CartContext.Provider>
  )
}