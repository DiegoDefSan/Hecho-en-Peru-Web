import { useMutation, useQueryClient } from "@tanstack/react-query";
import ProductCart from "../../interfaces/product_cart";
import { POST_PRODUCTS_CARTS_PATH } from "../../util/api_paths/product_cart.path";
import useApi from "../useApi";

const usePostProductsCarts = () => {
  const { postObjects } = useApi<ProductCart>(POST_PRODUCTS_CARTS_PATH);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productsCarts: ProductCart[]) => postObjects(productsCarts),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products_carts"]
      })
    }
  })
}

export default usePostProductsCarts