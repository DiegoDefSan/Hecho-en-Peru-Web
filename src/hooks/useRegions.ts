import { useQuery } from "@tanstack/react-query";
import Region from "../interfaces/region";
import useApi from "./useApi";
import { GET_REGIONS_PATH } from "../util/constants";

const useRegions = () => {
  const { getObjects } = useApi<Region>(GET_REGIONS_PATH);

  return useQuery({
    queryKey: ["regions"],
    queryFn: () => getObjects(),
    staleTime: 10_000, // 10 seconds
  });
};

export default useRegions;