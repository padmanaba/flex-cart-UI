import { NextResponse } from "next/server";

import {
  homepageFallbackData,
  type HomepageApiResponse,
} from "@/lib/homepage-data";

function getBackendHomepageUrl() {
  const baseUrl =
    process.env.API_BASE_URL?.trim() || process.env.NEXT_PUBLIC_API_BASE_URL?.trim();

  if (!baseUrl) {
    return null;
  }

  return `${baseUrl.replace(/\/$/, "")}/api/homepage`;
}

export async function GET() {
  const backendUrl = getBackendHomepageUrl();

  if (!backendUrl) {
    return NextResponse.json({
      responsePayload: homepageFallbackData,
    } satisfies HomepageApiResponse);
  }

  try {
    const response = await fetch(backendUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Homepage request failed with ${response.status}`);
    }

    const data = (await response.json()) as HomepageApiResponse;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({
      responsePayload: homepageFallbackData,
    } satisfies HomepageApiResponse);
  }
}
