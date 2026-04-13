import { ProductDetailsShell } from "@/components/product/product-details-shell";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProductDetailsShell slug={slug} />;
}
