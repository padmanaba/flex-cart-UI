import {
  categoriesTreeFallback,
  type CategoriesTreeResponse,
  type CategoryTreeNode,
} from "@/lib/category-data";

export const CATEGORIES_TREE_QUERY_KEY = ["categories-tree"] as const;

export async function fetchCategoriesTree(): Promise<CategoryTreeNode[]> {
  try {
    const response = await fetch("/api/categories/tree", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Categories tree request failed with ${response.status}`);
    }

    const data = (await response.json()) as CategoriesTreeResponse;
    return data.responsePayload.categories;
  } catch {
    return categoriesTreeFallback.categories;
  }
}
