import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cart from "../../interfaces/cart"
import { POST_CART_PATH } from "../../util/api_paths/cart.path"
import useApi from "../useApi"

const usePostCart = () => {
  const { postObject } = useApi<Cart>(POST_CART_PATH);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cart: Cart) => postObject(cart),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"]
      });
    }
  })
}

export default usePostCart;