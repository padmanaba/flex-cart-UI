import {
  homepageFallbackData,
  type HomepageApiResponse,
  type HomepagePayload,
} from "@/lib/homepage-data";

const HOMEPAGE_QUERY_KEY = ["homepage"] as const;

export { HOMEPAGE_QUERY_KEY };

export async function fetchHomepage(): Promise<HomepagePayload> {
  try {
    const response = await fetch("/api/homepage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Homepage request failed with ${response.status}`);
    }

    const data = (await response.json()) as HomepageApiResponse;
    return data.responsePayload;
  } catch {
    return homepageFallbackData;
  }
}
