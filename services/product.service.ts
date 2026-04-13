import {
  productDetailsFallback,
  type ProductDetailsResponse,
} from "@/lib/product-data";

export function productQueryKey(slug: string) {
  return ["product", slug] as const;
}

export async function fetchProductDetails(
  slug: string
): Promise<ProductDetailsResponse> {
  try {
    const response = await fetch(`/api/products/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Product request failed with ${response.status}`);
    }

    return (await response.json()) as ProductDetailsResponse;
  } catch {
    return {
      ...productDetailsFallback,
      product: {
        ...productDetailsFallback.product,
        slug,
      },
    };
  }
}
