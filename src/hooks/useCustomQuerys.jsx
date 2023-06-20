import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
export const useCustomFetch = (key, url) => {
  const getData = async () => {
    console.log("fetching data");
    const data = await axios.get(url);
    return data;
  };

  const { data, isLoading, isError } = useQuery(key, getData);
  return { data, isLoading, isError };
};
