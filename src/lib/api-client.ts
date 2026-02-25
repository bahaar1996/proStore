import axios from "axios";

export const api = axios.create({
  baseURL: "/",
});

export const fetcher = async <T>(url: string): Promise<T> => {
  console.log("==>url", url);
  const res = await api.get(url);
  return res.data;
};
