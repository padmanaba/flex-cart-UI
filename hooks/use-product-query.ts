"use client";

import { useQuery } from "@tanstack/react-query";

import { productDetailsFallback } from "@/lib/product-data";
import {
  fetchProductDetails,
  productQueryKey,
} from "@/services/product.service";

export function useProductQuery(slug: string) {
  return useQuery({
    queryKey: productQueryKey(slug),
    queryFn: () => fetchProductDetails(slug),
    placeholderData: {
      ...productDetailsFallback,
      product: {
        ...productDetailsFallback.product,
        slug,
      },
    },
    staleTime: 1000 * 60,
    enabled: Boolean(slug),
  });
}
