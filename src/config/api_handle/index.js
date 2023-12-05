import axios from "axios";

const baseURL = "https://reqres.in/api";

export const api_handle = axios.create({
  baseURL,
});

api_handle.interceptors.request.use((req) => {
  req.headers = { ...axios.defaults.headers };

  return req;
});
