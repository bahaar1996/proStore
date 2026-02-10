import ProductList from "@/features/products/components/product-list";

//rendering with SSR but data handling by client side rendering
export const dynamic = "force-dynamic"; //SSR
export default function Home() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">محصولات</h1>
      <ProductList />
    </div>
  );
}
