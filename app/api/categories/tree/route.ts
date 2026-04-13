import { NextResponse } from "next/server";

import {
  categoriesTreeFallback,
  type CategoriesTreeResponse,
} from "@/lib/category-data";

function getBackendCategoriesTreeUrl() {
  const baseUrl =
    process.env.API_BASE_URL?.trim() || process.env.NEXT_PUBLIC_API_BASE_URL?.trim();

  if (!baseUrl) {
    return null;
  }

  return `${baseUrl.replace(/\/$/, "")}/api/categories/tree`;
}

export async function GET() {
  const backendUrl = getBackendCategoriesTreeUrl();

  if (!backendUrl) {
    return NextResponse.json({
      responsePayload: categoriesTreeFallback,
    } satisfies CategoriesTreeResponse);
  }

  try {
    const response = await fetch(backendUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Categories tree request failed with ${response.status}`);
    }

    const data = (await response.json()) as CategoriesTreeResponse;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({
      responsePayload: categoriesTreeFallback,
    } satisfies CategoriesTreeResponse);
  }
}
