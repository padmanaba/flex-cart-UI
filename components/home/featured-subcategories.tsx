import Link from "next/link";
import Image from "next/image";

import type { HomepagePayload } from "@/lib/homepage-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FeaturedSubcategoriesProps = {
  featuredSubcategories: HomepagePayload["featuredSubcategories"];
};

export function FeaturedSubcategories({
  featuredSubcategories,
}: FeaturedSubcategoriesProps) {
  const hasItems = featuredSubcategories.items.length > 0;
  const parentCategory = featuredSubcategories.parentCategory;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">
            Focused discovery
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {featuredSubcategories.title}
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-muted-foreground">
          {parentCategory
            ? `Highlighting subcategories under ${parentCategory.name}.`
            : "Featured subcategories will appear here as soon as the backend provides them."}
        </p>
      </div>

      {hasItems && parentCategory ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredSubcategories.items.map((item) => (
            <Card key={item.id} className="border border-border/70 pt-0 shadow-sm">
              <Image
                src={item.imageUrl ?? "/next.svg"}
                alt={item.name}
                width={400}
                height={300}
                className="h-44 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/categories/${parentCategory.slug}/${item.slug}`}
                  className="inline-flex text-sm font-medium text-primary hover:underline"
                >
                  Shop {item.name}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-border/70 bg-muted/30 p-8 text-sm text-muted-foreground">
          No featured subcategories available right now.
        </div>
      )}
    </section>
  );
}
