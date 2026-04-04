"use client";

import { useQuery } from "@tanstack/react-query";

import { homepageFallbackData } from "@/lib/homepage-data";
import { fetchHomepage, HOMEPAGE_QUERY_KEY } from "@/services/homepage.service";

export function useHomepageQuery() {
  return useQuery({
    queryKey: HOMEPAGE_QUERY_KEY,
    queryFn: fetchHomepage,
    placeholderData: homepageFallbackData,
    staleTime: 1000 * 60,
  });
}
