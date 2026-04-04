import Link from "next/link";

import type { HomepagePayload } from "@/lib/homepage-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CategoryTreeSectionProps = {
  categoryTree: HomepagePayload["categoryTree"];
};

export function CategoryTreeSection({
  categoryTree,
}: CategoryTreeSectionProps) {
  const hasItems = categoryTree.items.length > 0;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Browse depth</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {categoryTree.title}
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-muted-foreground">
          Parent and child categories are rendered directly from the response tree.
        </p>
      </div>

      {hasItems ? (
        <div className="grid gap-5 lg:grid-cols-3">
          {categoryTree.items.map((category) => (
            <Card key={category.id} className="border border-border/70 shadow-sm">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.children.length > 0 ? (
                  category.children.map((child) => (
                    <Link
                      key={child.id}
                      href={`/categories/${child.slug}`}
                      className="flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3 text-sm transition-colors hover:bg-muted"
                    >
                      <span>{child.name}</span>
                      <span className="text-muted-foreground">/{child.slug}</span>
                    </Link>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-border/70 px-4 py-3 text-sm text-muted-foreground">
                    No subcategories available yet.
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-border/70 bg-muted/30 p-8 text-sm text-muted-foreground">
          No category tree data available right now.
        </div>
      )}
    </section>
  );
}
