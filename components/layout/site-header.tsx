"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CircleUserRound,
  Grid2X2,
  Menu,
  Search,
  ShoppingBag,
} from "lucide-react";

import { useCategoriesTreeQuery } from "@/hooks/use-categories-tree-query";
import type { HomepagePayload } from "@/lib/homepage-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type SiteHeaderProps = {
  header: HomepagePayload["header"];
};

export function SiteHeader({ header }: SiteHeaderProps) {
  const { data: categoriesTree = [] } = useCategoriesTreeQuery();
  const topCategories = [...categoriesTree].sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
  const [activeCategorySlug, setActiveCategorySlug] = useState("");
  const resolvedActiveCategorySlug = activeCategorySlug || topCategories[0]?.slug || "";
  const activeCategory =
    topCategories.find((category) => category.slug === resolvedActiveCategorySlug) ??
    topCategories[0];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            {header.logo
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">{header.logo}</p>
            <p className="text-xs text-muted-foreground">
              Flexible everyday commerce
            </p>
          </div>
        </Link>

        <nav className="ml-8 hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {header.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {header.showSearch ? (
          <div className="ml-auto hidden max-w-xs flex-1 items-center lg:flex">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="h-10 rounded-full pl-9"
              />
            </div>
          </div>
        ) : (
          <div className="ml-auto" />
        )}

        <div className="hidden items-center gap-2 md:flex">
          {header.showProfileMenu ? (
            <Button variant="outline" size="lg" className="rounded-full">
              <CircleUserRound className="size-4" />
              Profile
            </Button>
          ) : null}
          {header.showCart ? (
            <Button size="lg" className="rounded-full">
              <ShoppingBag className="size-4" />
              Cart
            </Button>
          ) : null}
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-lg"
                className="ml-auto rounded-full md:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm">
            <SheetHeader>
              <SheetTitle>{header.logo}</SheetTitle>
              <SheetDescription>
                Browse categories, offers, and account shortcuts.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-6 px-4 pb-6">
              {header.showSearch ? (
                <Input type="search" placeholder="Search products..." />
              ) : null}

              {topCategories.length > 0 ? (
                <div className="rounded-2xl border border-border/70 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Grid2X2 className="size-4" />
                    Categories
                  </div>
                  <div className="space-y-3">
                    {topCategories.map((category) => (
                      <div key={category._id} className="rounded-2xl border border-border/70 p-3">
                        <Link
                          href={`/categories/${category.slug}`}
                          className="text-sm font-medium text-foreground"
                        >
                          {category.name}
                        </Link>
                        {category.children.length > 0 ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {category.children.slice(0, 8).map((child) => (
                              <Link
                                key={child._id}
                                href={`/categories/${child.slug}`}
                                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col gap-3">
                {header.navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-xl border border-border px-4 py-3 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {header.showProfileMenu ? (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full"
                  >
                    <CircleUserRound className="size-4" />
                    Profile
                  </Button>
                ) : null}
                {header.showCart ? (
                  <Button size="lg" className="w-full rounded-full">
                    <ShoppingBag className="size-4" />
                    Cart
                  </Button>
                ) : null}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {topCategories.length > 0 ? (
        <div className="hidden border-t border-border/70 md:block">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-foreground">
                <Grid2X2 className="size-4 text-primary" />
                Shop by category
              </div>
              {topCategories.map((category) => (
                <button
                  key={category._id}
                  type="button"
                  onClick={() => setActiveCategorySlug(category.slug)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                    activeCategory?.slug === category.slug
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {activeCategory?.children.length ? (
                activeCategory.children.map((child) => (
                  <Link
                    key={child._id}
                    href={`/categories/${child.slug}`}
                    className="shrink-0 rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  >
                    {child.name}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No subcategories available for this category.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
