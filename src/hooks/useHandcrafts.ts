import { useQuery } from "@tanstack/react-query";
import Handcraft from "../interfaces/handcraft";
import axios from "axios";

const useHandcrafts = () => useQuery({
  queryKey: ["handcrafts"],
  queryFn: () => axios
    .get<Handcraft[]>("http://localhost:8080/handcrafts")
    .then(res => res.data),
  staleTime: 10_000, // 10 seconds
});

export default useHandcrafts;