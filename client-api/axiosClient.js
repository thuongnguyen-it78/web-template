import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = "";
    if (token) {
      config.headers = {
        ...config.headers,
        ["Authorization"]: "Bearer " + token,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data?.data || response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
