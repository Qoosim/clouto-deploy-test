import { backendUrl } from '@/redux/utils/configs';
import axios from "axios";
import Cookies from "js-cookie";

export const API = axios.create({
  baseURL: backendUrl,
});

// eslint-disable-next-line func-names
API.interceptors.request.use(function (config) {
  const token = Cookies.get("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
