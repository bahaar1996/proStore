import { fetcher } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

export type Product = {
  id: number;
  title: string;
  price: number;
};

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetcher<Product[]>("/products"),
  });
}
