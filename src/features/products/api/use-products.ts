import { fetcher } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetcher<Product[]>(`/api/products`),
  });
}

export function useProduct(id: string) {
  console.log("use id", id);
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetcher<Product>(`/api/products/${id}`),
  });
}
