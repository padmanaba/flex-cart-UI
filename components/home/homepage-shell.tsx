"use client";

import { AccountSummarySection } from "@/components/home/account-summary-section";
import { CategoryGrid } from "@/components/home/category-grid";
import { CategoryTreeSection } from "@/components/home/category-tree-section";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { FeaturedSubcategories } from "@/components/home/featured-subcategories";
import { HeroSection } from "@/components/home/hero-section";
import { PromotionalBanners } from "@/components/home/promotional-banners";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { useHomepageQuery } from "@/hooks/use-homepage-query";

export function HomepageShell() {
  const { data: homepage } = useHomepageQuery();

  if (!homepage) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader header={homepage.header} />
      <main className="flex-1">
        <HeroSection
          heroBanners={homepage.heroBanners}
          welcomeBanner={homepage.welcomeBanner}
          accountSummary={homepage.accountSummary}
        />
        <CategoryGrid topCategories={homepage.topCategories} />
        <CategoryTreeSection categoryTree={homepage.categoryTree} />
        <FeaturedSubcategories
          featuredSubcategories={homepage.featuredSubcategories}
        />
        <FeaturedProductsSection featuredProducts={homepage.featuredProducts} />
        <AccountSummarySection accountSummary={homepage.accountSummary} />
        <PromotionalBanners promotionalBanners={homepage.promotionalBanners} />
      </main>
      <SiteFooter header={homepage.header} footer={homepage.footer} />
    </div>
  );
}
