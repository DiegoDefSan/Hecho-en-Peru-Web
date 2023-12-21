import { useQuery } from "@tanstack/react-query";
import Category from "../interfaces/category";
import useApi from "./useApi";
import { GET_CATEGORIES_PATH } from "../util/constants";

const useCategories = () => {
  const { getObjects } = useApi<Category>(GET_CATEGORIES_PATH);

  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getObjects(),
    staleTime: 10_000,
  });
}

export default useCategories;