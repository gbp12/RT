import { Axios } from "axios";

const APIClient = new Axios({
  baseURL: "http://localhost:3000/v1/",
});

const requestInterceptor = (config) => {
  const token = localStorage.getItem("jwtToken");

  if (token) {
    // Create a new headers object to avoid mutating the original headers
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
};

APIClient.interceptors.request.use(requestInterceptor);

export default APIClient;
