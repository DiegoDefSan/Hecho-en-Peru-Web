import useAxios from "./useAxios"

const useApi = <T>(endpoint: string) => {

  const axiosInstance = useAxios();

  const getObjects = () => {
    return axiosInstance
      .get<T[]>(endpoint)
      .then(res => res.data)
      .catch((error) => {
        if (error.response) {
          throw error;
        }
        else if (error.request) {
          throw error;
        }
        else {
          throw error;
        }
      })
  }

  const getObjectById = (id?: string) => {
    return axiosInstance
      .get<T>(`${endpoint}/${id ? id : ""}`)
      .then(res => res.data)
      .catch((error) => {
        if (error.response) {
          throw error;
        }
        else if (error.request) {
          throw error;
        }
        else {
          throw error;
        }
      })
  }

  const deleteObjectById = (id: string) => {
    return axiosInstance
      .delete(`${endpoint}/${id}`)
      .then(res => res.data)
      .catch((error) => {
        if (error.response) {
          throw error;
        }
        else if (error.request) {
          throw error;
        }
        else {
          throw error;
        }
      })
  }

  const postObject = (object: T) => {
    return axiosInstance
      .post<T>(endpoint, object)
      .then(res => res.data)
      .catch((error) => {
        if (error.response) {
          throw error;
        }
        else if (error.request) {
          throw error;
        }
        else {
          throw error;
        }
      })
  }

  return { getObjects, postObject, getObjectById, deleteObjectById };
}

export default useApi;