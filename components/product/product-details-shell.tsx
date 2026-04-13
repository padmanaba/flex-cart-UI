"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  ChevronRight,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHomepageQuery } from "@/hooks/use-homepage-query";
import { useProductQuery } from "@/hooks/use-product-query";

type ProductDetailsShellProps = {
  slug: string;
};

function formatPrice(currency: string, amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatLabel(label: string) {
  return label.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function ProductDetailsShell({ slug }: ProductDetailsShellProps) {
  const { data: homepage } = useHomepageQuery();
  const { data } = useProductQuery(slug);
  const product = data?.product;

  const gallery = product?.gallery?.filter((item) => item.url) ?? [];

  const [selectedImage, setSelectedImage] = useState(0);

  if (!homepage || !product) {
    return null;
  }

  const currentImage = gallery[selectedImage] ?? gallery[0];
  const attributes = Object.entries(product.attributes ?? {});
  const specifications = Object.entries(product.specifications ?? {});

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader header={homepage.header} />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="size-4" />
          {(product.breadcrumbs ?? []).map((crumb, index, list) => (
            <div key={`${crumb.name}-${index}`} className="flex items-center gap-2">
              {crumb.slug ? (
                <Link href={`/categories/${crumb.slug}`} className="hover:text-foreground">
                  {crumb.name}
                </Link>
              ) : (
                <span>{crumb.name}</span>
              )}
              {index < list.length - 1 ? <ChevronRight className="size-4" /> : null}
            </div>
          ))}
          <ChevronRight className="size-4" />
          <span className="font-medium text-foreground">{product.name}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-sm">
              {currentImage ? (
                <Image
                  src={currentImage.url}
                  alt={currentImage.altText || product.name}
                  width={1200}
                  height={1200}
                  className="h-[340px] w-full object-cover sm:h-[520px]"
                />
              ) : (
                <div className="flex h-[340px] items-center justify-center bg-muted text-muted-foreground sm:h-[520px]">
                  Product image coming soon
                </div>
              )}
            </div>

            {gallery.length > 1 ? (
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                {gallery.map((image, index) => (
                  <button
                    key={`${image.url}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-2xl border transition ${
                      index === selectedImage
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border/70"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.altText || `${product.name} ${index + 1}`}
                      width={300}
                      height={300}
                      className="h-20 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {product.featured ? <Badge className="rounded-full">Featured</Badge> : null}
                {product.brand ? (
                  <Badge variant="outline" className="rounded-full">
                    {product.brand}
                  </Badge>
                ) : null}
                {product.category?.name ? (
                  <Badge variant="secondary" className="rounded-full">
                    {product.category.name}
                  </Badge>
                ) : null}
              </div>

              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {product.shortDescription || product.description}
                </p>
              </div>

              <div className="flex flex-wrap items-end gap-3">
                <p className="text-4xl font-semibold tracking-tight">
                  {formatPrice(product.pricing.currency, product.pricing.sellingPrice)}
                </p>
                <p className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.pricing.currency, product.pricing.mrp)}
                </p>
                {product.pricing.discountAmount > 0 ? (
                  <Badge variant="outline" className="rounded-full">
                    Save {formatPrice(product.pricing.currency, product.pricing.discountAmount)}
                  </Badge>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/70 bg-card p-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <PackageCheck className="size-4 text-primary" />
                    Stock
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.inventory.inStock
                      ? `${product.inventory.quantity} units available`
                      : "Currently unavailable"}
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card p-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Truck className="size-4 text-primary" />
                    Delivery
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ships fast with dynamic availability from the API.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card p-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <ShieldCheck className="size-4 text-primary" />
                    SKU
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{product.sku}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {product.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {product.hasVariants && product.variants?.length ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Layers3 className="size-4 text-primary" />
                      <h2 className="text-lg font-semibold">Available Variants</h2>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {product.variants.map((variant) => (
                        <div
                          key={variant.sku}
                          className="rounded-2xl border border-border/70 bg-background p-4"
                        >
                          <p className="text-sm font-medium">{variant.sku}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {Object.entries(variant.optionValues).map(([key, value]) => (
                              <Badge key={`${variant.sku}-${key}`} variant="secondary" className="rounded-full">
                                {formatLabel(key)}: {value}
                              </Badge>
                            ))}
                          </div>
                          <p className="mt-3 text-sm text-muted-foreground">
                            {variant.inventory.inStock
                              ? `${variant.inventory.quantity} in stock`
                              : "Out of stock"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="rounded-full">
                    Buy now
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full">
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle>Product Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-7 text-muted-foreground">
                {product.description || "Detailed product information will appear here."}
              </p>
              {attributes.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {attributes.map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-2xl border border-border/70 bg-muted/30 px-4 py-3"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {formatLabel(key)}
                      </p>
                      <p className="mt-2 text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>

          <Card className="border border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {specifications.length > 0 ? (
                specifications.map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{formatLabel(key)}</span>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Specifications will appear once the backend provides them.
                </p>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="mt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-primary">Related products</p>
              <h2 className="text-3xl font-semibold tracking-tight">
                More To Explore
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-6 text-muted-foreground md:block">
              Recommended items can evolve over time without changing the page layout.
            </p>
          </div>

          {data?.relatedProducts?.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {data.relatedProducts.map((item) => (
                <Card key={item.id} className="h-full border border-border/70 shadow-sm">
                  <CardHeader>
                    <div className="space-y-3">
                      <Badge variant="outline" className="rounded-full">
                        Related pick
                      </Badge>
                      <CardTitle>{item.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <div className="flex items-end gap-3">
                      <p className="text-2xl font-semibold tracking-tight">
                        {formatPrice(item.pricing.currency, item.pricing.sellingPrice)}
                      </p>
                      <p className="text-sm text-muted-foreground line-through">
                        {formatPrice(item.pricing.currency, item.pricing.mrp)}
                      </p>
                    </div>
                    <div className="inline-flex w-fit items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      <BadgePercent className="size-3.5" />
                      Save {formatPrice(item.pricing.currency, item.pricing.discountAmount)}
                    </div>
                    <Button
                      className="mt-auto w-full rounded-full"
                      nativeButton={false}
                      render={<Link href={`/products/${item.slug}`} />}
                    >
                      View related product
                      <ArrowRight className="size-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-border/70 bg-muted/30 p-8 text-sm text-muted-foreground">
              No related products available right now.
            </div>
          )}
        </section>

        <section className="mt-10 rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_50%,#eff6ff_100%)] p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border/70 bg-background/85 p-5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="size-4 text-primary" />
                Genuine products
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Structured to support trust badges, warranty text, and authenticity cues.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/85 p-5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Truck className="size-4 text-primary" />
                Fast checkout
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Ready for cart and buy-now actions on desktop and mobile.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/85 p-5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="size-4 text-primary" />
                Dynamic content safe
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Handles optional fields, missing images, and changing product structures.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter header={homepage.header} footer={homepage.footer} />
    </div>
  );
}
