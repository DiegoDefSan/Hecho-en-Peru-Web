import { useQuery } from "@tanstack/react-query";
import Product from "../interfaces/product";
import useApi from "./useApi";
import { GET_PRODUCTS_PATH } from "../util/constants";

const useProducts = () => {
  const { getObjects } = useApi<Product>(GET_PRODUCTS_PATH);
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getObjects(),
    staleTime: 10_000, // 10 seconds
  });
};

export default useProducts;