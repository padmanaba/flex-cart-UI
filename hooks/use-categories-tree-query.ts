"use client";

import { useQuery } from "@tanstack/react-query";

import { categoriesTreeFallback } from "@/lib/category-data";
import {
  CATEGORIES_TREE_QUERY_KEY,
  fetchCategoriesTree,
} from "@/services/categories.service";

export function useCategoriesTreeQuery() {
  return useQuery({
    queryKey: CATEGORIES_TREE_QUERY_KEY,
    queryFn: fetchCategoriesTree,
    placeholderData: categoriesTreeFallback.categories,
    staleTime: 1000 * 60 * 5,
  });
}
