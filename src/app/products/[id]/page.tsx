import ProductDetails from "@/features/products/components/product-details";

type Props = {
  params: Promise<{ id: string }>;
};

//SSG
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

//ISR : refresh every 60s
export const revalidate = 60;

async function ProductDetailPage({ params }: Props) {
  const id = (await params).id;
  console.log("44", id);
  console.log("iddd", (await params).id);
  return (
    <div className="p-10">
      <ProductDetails id={id} />
    </div>
  );
}

export default ProductDetailPage;
