"use client";

import { Card, Spin } from "antd";
import { useProducts } from "../api/use-products";
import Link from "next/link";

const ProductList = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <Spin size="large" />;
  if (isError) return <p>مشکلی پیش آمده است!</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data?.map((product) => (
        <Link href={`/products/${product.id}`}>
          <Card key={product.id} title={product.title}>
            <p className="text-lg font-semibold">${product.price}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
