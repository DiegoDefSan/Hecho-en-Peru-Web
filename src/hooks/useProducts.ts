import { useQuery } from "@tanstack/react-query";
import Product from "../interfaces/product";
import axios from "axios";

const useProducts = () => useQuery({
  queryKey: ["products"],
  queryFn: () => axios
    .get<Product[]>("http://localhost:8080/products")
    .then(res => res.data),
  staleTime: 10_000, // 10 seconds
});

export default useProducts;