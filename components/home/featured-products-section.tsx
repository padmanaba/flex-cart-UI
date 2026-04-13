import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, Boxes, PackageCheck } from "lucide-react";

import type { HomepagePayload } from "@/lib/homepage-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FeaturedProductsSectionProps = {
  featuredProducts?: HomepagePayload["featuredProducts"];
};

function formatPrice(currency: string, amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function FeaturedProductsSection({
  featuredProducts,
}: FeaturedProductsSectionProps) {
  const items = featuredProducts?.items ?? [];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Product spotlight</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {featuredProducts?.title ?? "Featured Products"}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          Product cards adapt to inventory, pricing, brand, and variant data directly from the backend.
        </p>
      </div>

      {items.length > 0 ? (
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((product) => (
            <Card
              key={product.id}
              className="h-full border border-border/70 pt-0 shadow-sm"
            >
              <div className="relative h-56 shrink-0 overflow-hidden bg-muted">
                <Image
                  src={product.image?.url || "/next.svg"}
                  alt={product.image?.altText || product.name}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <Badge className="rounded-full bg-white/90 text-slate-900">
                    {product.categoryName}
                  </Badge>
                  {product.featured ? (
                    <Badge variant="outline" className="rounded-full bg-slate-950/70 text-white">
                      Featured
                    </Badge>
                  ) : null}
                </div>
              </div>

              <CardHeader className="min-h-32">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {product.brand || "Flex Cart"}
                  </p>
                  <CardTitle>{product.name}</CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {product.shortDescription || "More details coming soon."}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col space-y-4">
                <div className="flex items-end gap-3">
                  <p className="text-2xl font-semibold tracking-tight">
                    {formatPrice(product.pricing.currency, product.pricing.sellingPrice)}
                  </p>
                  {product.pricing.discountAmount > 0 ? (
                    <p className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.pricing.currency, product.pricing.mrp)}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                    <BadgePercent className="size-3.5" />
                    Save {formatPrice(product.pricing.currency, product.pricing.discountAmount)}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                    <PackageCheck className="size-3.5" />
                    {product.inventory.inStock
                      ? `${product.inventory.quantity} in stock`
                      : "Out of stock"}
                  </span>
                  {product.hasVariants ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                      <Boxes className="size-3.5" />
                      {product.variantCount ?? product.variantAxes?.length ?? 0} variants
                    </span>
                  ) : null}
                </div>

                <Button
                  className="mt-auto w-full rounded-full"
                  nativeButton={false}
                  render={<Link href={`/products/${product.slug}`} />}
                >
                  View product
                  <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-border/70 bg-muted/30 p-8 text-sm text-muted-foreground">
          Featured products will appear here when the backend starts sending them.
        </div>
      )}
    </section>
  );
}
