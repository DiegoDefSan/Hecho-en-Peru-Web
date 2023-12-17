import { useQuery } from "@tanstack/react-query";
import Cart from "../../interfaces/cart";
import { GET_CART_PATH } from "../../util/api_paths/cart.path";
import useApi from "../useApi";

const useGetCarts = () => {
  const { getObjects } = useApi<Cart>(GET_CART_PATH);

  return useQuery({
    queryKey: ["carts"],
    queryFn: () => getObjects(),
    staleTime: 10_000,
  });
}

export default useGetCarts;