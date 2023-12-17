import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cart from "../../interfaces/cart"
import { DELETE_CART_PATH } from "../../util/api_paths/cart.path"
import useApi from "../useApi"

const useDeleteCart = () => {
  const { deleteObjectById } = useApi<Cart>(DELETE_CART_PATH);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteObjectById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"]
      })
    }
  })
}

export default useDeleteCart;