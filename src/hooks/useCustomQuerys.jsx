import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

// FIXME: 👎 esto no es un hook, es ua funcion
export const useCustomFetch = (key, url) => {
  const getData = async () => {
    console.log("fetching data en esta url:", url);
    try {
      const data = await axios.get(url, {
        headers: {
          authorization: `${localStorage.getItem("jtw")}`,
        },
      });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        //window.location.replace("/login");
      }
    }
  };

  const { data, isLoading, isError } = useQuery(key, getData, {
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError };
};
