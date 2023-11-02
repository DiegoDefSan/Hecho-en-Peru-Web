import { useQuery } from "@tanstack/react-query";
import Category from "../interfaces/category";
import axios from "axios";

const useCategories = () => useQuery({
  queryKey: ["categories"],
  queryFn: () => axios
    .get<Category[]>("http://localhost:8080/categories")
    .then(res => res.data),
  staleTime: 10_000, // 10 seconds
});

export default useCategories;