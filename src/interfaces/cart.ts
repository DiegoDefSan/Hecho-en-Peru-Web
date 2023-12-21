import User from "./user";

interface Cart {
  idCart?: string;
  date: Date;
  user: User;
}

export default Cart;