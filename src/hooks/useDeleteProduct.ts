import { useMutation, useQueryClient } from "@tanstack/react-query";
import Product from "../interfaces/product"
import { DELETE_PRODUCT_PATH } from "../util/constants"
import useApi from "./useApi"

const useDeleteProduct = () => {
  const { deleteObjectById } = useApi<Product>(DELETE_PRODUCT_PATH);
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

export default useDeleteProduct;