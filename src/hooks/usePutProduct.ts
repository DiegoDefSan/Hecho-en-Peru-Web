import { useMutation, useQueryClient } from "@tanstack/react-query";
import Product from "../interfaces/product"
import { PUT_PRODUCT_PATH } from "../util/constants"
import useApi from "./useApi"

const usePutProduct = () => {
  const { putObject } = useApi<Product>(PUT_PRODUCT_PATH);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (product: Product) => putObject(product),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"]
      })
    }
  })
}

export default usePutProduct;