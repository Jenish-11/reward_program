import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:3001`,
});

API.interceptors.request.use(function (config) {
  return config;
});

API.interceptors.response.use(
  // unwrap response data
  ({ data }) => data,

  // catch statusCode != 200 responses and format error
  (error) => {
    console.log("error", error?.response);
    if (error?.response) {
      const errorData = {
        ...error?.response?.data,
      };

      return Promise.reject(errorData);
    } else if (error?.message === "Network Error") {
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export default API;
