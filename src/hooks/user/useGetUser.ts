import { useQuery } from "@tanstack/react-query";
import User from "../../interfaces/user"
import useApi from "../useApi"
import { GET_USERS_PATH } from "../../util/api_paths/user.path";

const useGetUserById = (id: string) => {
  const { getObjectById } = useApi<User>(GET_USERS_PATH);

  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getObjectById(id),
    staleTime: 10_000
  })
}

export default useGetUserById;