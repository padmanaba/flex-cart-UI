import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import type { HomepagePayload } from "@/lib/homepage-data";
import { Button } from "@/components/ui/button";

type PromotionalBannersProps = {
  promotionalBanners: HomepagePayload["promotionalBanners"];
};

export function PromotionalBanners({
  promotionalBanners,
}: PromotionalBannersProps) {
  const items = [...promotionalBanners.items].sort(
    (left, right) => (left.displayOrder ?? 999) - (right.displayOrder ?? 999)
  );

  return (
    <section
      id="offers"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Promotions</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {promotionalBanners.title}
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-muted-foreground">
          Campaign banners, titles, and CTA links are all coming from the API.
        </p>
      </div>

      <div className="grid gap-6">
        {items.map((banner) => (
          <div
            key={banner.id}
            className="relative overflow-hidden rounded-[2rem] border border-border/70 shadow-sm"
          >
            <Image
              src={banner.mobileImageUrl || banner.imageUrl}
              alt={banner.title}
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="absolute inset-0 h-full w-full object-cover sm:hidden"
            />
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="absolute inset-0 hidden h-full w-full object-cover sm:block"
            />
            <div className="relative bg-[linear-gradient(90deg,rgba(17,24,39,0.82)_0%,rgba(17,24,39,0.55)_45%,rgba(17,24,39,0.18)_100%)] px-6 py-10 text-white sm:px-8 lg:px-10">
              <h3 className="text-3xl font-semibold tracking-tight">
                {banner.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                {banner.subtitle}
              </p>
              <Button
                size="lg"
                className="mt-6 rounded-full bg-white text-slate-900 hover:bg-white/90"
                nativeButton={false}
                render={<Link href={banner.cta.href} />}
              >
                {banner.cta.label}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
