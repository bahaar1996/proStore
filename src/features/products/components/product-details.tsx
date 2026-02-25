"use client";

import { Card, Spin } from "antd";
import { useProduct, useProducts } from "../api/use-products";

const ProductDetails = ({ id }: { id: string }) => {
  console.log("==>detaisl", id);
  const { data, isLoading, isError } = useProduct(id);
  if (isLoading) return <Spin size="large" />;
  if (isError) return <p>نمایش محصول موفقیت آمیز نبود</p>;

  console.log("id detauls", id);
  console.log("each dataa", data);
  return (
    <div>
      <Card title={data?.title} className="max-w-xl">
        <p className="text-lg mb-2 text-red-600">${data?.price}</p>
        <p className="text-gray-600">${data?.description}</p>
      </Card>
    </div>
  );
};

export default ProductDetails;
