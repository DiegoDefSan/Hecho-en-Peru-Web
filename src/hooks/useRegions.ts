import { useQuery } from "@tanstack/react-query";
import Region from "../interfaces/region";
import axios from "axios";

const useRegions = () => useQuery({
  queryKey: ["regions"],
  queryFn: () => axios
    .get<Region[]>("http://localhost:8080/regions")
    .then(res => res.data),
  staleTime: 10_000, // 10 seconds
});

export default useRegions;