import { NextResponse } from "next/server";

import {
  productDetailsFallback,
  type ProductDetailsResponse,
} from "@/lib/product-data";

function getBackendProductUrl(slug: string) {
  const baseUrl =
    process.env.API_BASE_URL?.trim() || process.env.NEXT_PUBLIC_API_BASE_URL?.trim();

  if (!baseUrl) {
    return null;
  }

  return `${baseUrl.replace(/\/$/, "")}/api/products/${slug}`;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const backendUrl = getBackendProductUrl(slug);

  if (!backendUrl) {
    return NextResponse.json({
      ...productDetailsFallback,
      product: {
        ...productDetailsFallback.product,
        slug,
      },
    } satisfies ProductDetailsResponse);
  }

  try {
    const response = await fetch(backendUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Product request failed with ${response.status}`);
    }

    const data = (await response.json()) as ProductDetailsResponse;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({
      ...productDetailsFallback,
      product: {
        ...productDetailsFallback.product,
        slug,
      },
    } satisfies ProductDetailsResponse);
  }
}
