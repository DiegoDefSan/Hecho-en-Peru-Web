import { useMutation, useQueryClient } from "@tanstack/react-query";
import Product from "../interfaces/product"
import { POST_PRODUCT_PATH } from "../util/constants"
import useApi from "./useApi"

const usePostProduct = () => {
  const { postObject } = useApi<Product>(POST_PRODUCT_PATH);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (product: Product) => postObject(product),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"]
      })
    }
  })
}

export default usePostProduct;