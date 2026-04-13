import Link from "next/link";
import Image from "next/image";

import type { HomepagePayload } from "@/lib/homepage-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CategoryGridProps = {
  topCategories: HomepagePayload["topCategories"];
};

export function CategoryGrid({ topCategories }: CategoryGridProps) {
  const hasItems = topCategories.items.length > 0;
  const pagination = topCategories.pagination;

  return (
    <section id="categories" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Shop by category</p>
          <h2 className="text-3xl font-semibold tracking-tight">{topCategories.title}</h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-muted-foreground">
          {pagination
            ? `Showing ${topCategories.items.length} of ${pagination.totalItems} categories from page ${pagination.page}.`
            : "Each card is rendered from the homepage response, so category content stays dynamic."}
        </p>
      </div>

      {hasItems ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {topCategories.items.map((category) => (
            <Card key={category.id} className="border border-border/70 pt-0 shadow-sm">
              <Image
                src={category.imageUrl ?? "/next.svg"}
                alt={category.name}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>
                <Link
                  href={`/categories/${category.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
                >
                  Explore {category.name}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-border/70 bg-muted/30 p-8 text-sm text-muted-foreground">
          No categories available right now.
        </div>
      )}
    </section>
  );
}
