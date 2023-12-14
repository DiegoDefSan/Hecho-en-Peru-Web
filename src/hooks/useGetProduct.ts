import { useQuery } from "@tanstack/react-query"
import Product from "../interfaces/product"
import { GET_PRODUCTS_PATH } from "../util/constants"
import useApi from "./useApi"

const useGetProductById = (id?: string) => {
  const { getObjectById } = useApi<Product>(GET_PRODUCTS_PATH)

  return useQuery({
    queryKey: id ? ["products", id] : ["products"],
    queryFn: () => getObjectById(id),
    staleTime: 10_000,
  });
}

export default useGetProductById