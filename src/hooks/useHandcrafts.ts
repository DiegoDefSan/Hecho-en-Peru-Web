import { useQuery } from "@tanstack/react-query";
import Handcraft from "../interfaces/handcraft";
import useApi from "./useApi";
import { GET_HANDCRAFTS_PATH } from "../util/constants";

const useHandcrafts = () => {
  const { getObjects } = useApi<Handcraft>(GET_HANDCRAFTS_PATH);

  return useQuery({
    queryKey: ["handcrafts"],
    queryFn: () => getObjects,
    staleTime: 10_000, // 10 seconds
  });
};

export default useHandcrafts;