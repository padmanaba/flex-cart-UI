import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import type { HomepagePayload } from "@/lib/homepage-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  heroBanners?: HomepagePayload["heroBanners"];
  welcomeBanner: HomepagePayload["welcomeBanner"];
  accountSummary: HomepagePayload["accountSummary"];
};

function sortBanners(
  banners: NonNullable<HomepagePayload["heroBanners"]> = []
) {
  return [...banners].sort(
    (left, right) => (left.displayOrder ?? 999) - (right.displayOrder ?? 999)
  );
}

export function HeroSection({
  heroBanners,
  welcomeBanner,
  accountSummary,
}: HeroSectionProps) {
  const orderedBanners = sortBanners(heroBanners);
  const primaryBanner = orderedBanners[0];
  const secondaryBanners = orderedBanners.slice(1, 3);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(240,171,0,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,1),_rgba(248,250,252,0.92))]" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
        <div className="space-y-8">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            <Sparkles className="size-3.5" />
            Dynamic storefront homepage
          </Badge>

          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {welcomeBanner.title}
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {welcomeBanner.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full"
              nativeButton={false}
              render={<Link href={welcomeBanner.primaryAction.href} />}
            >
              {welcomeBanner.primaryAction.label}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              nativeButton={false}
              render={<Link href={welcomeBanner.secondaryAction.href} />}
            >
              {welcomeBanner.secondaryAction.label}
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {accountSummary.stats.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border/70 bg-background/90 p-4 shadow-sm"
              >
                <p className="text-2xl font-semibold tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {primaryBanner ? (
            <article className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border/70 shadow-lg">
              <Image
                src={primaryBanner.imageUrl}
                alt={primaryBanner.title}
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
              <div className="relative flex min-h-[360px] flex-col justify-end bg-[linear-gradient(180deg,rgba(15,23,42,0.12)_0%,rgba(15,23,42,0.78)_72%,rgba(15,23,42,0.92)_100%)] p-6 text-white sm:p-8">
                <div className="max-w-xl space-y-4">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                    Featured banner
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {primaryBanner.title}
                  </h2>
                  <p className="max-w-lg text-sm leading-6 text-white/80 sm:text-base">
                    {primaryBanner.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="rounded-full bg-white text-slate-950 hover:bg-white/90"
                    nativeButton={false}
                    render={<Link href={primaryBanner.cta.href} />}
                  >
                    {primaryBanner.cta.label}
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </article>
          ) : null}

          {secondaryBanners.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {secondaryBanners.map((banner) => (
                <article
                  key={banner.id}
                  className="relative min-h-[220px] overflow-hidden rounded-[1.75rem] border border-border/70 shadow-sm"
                >
                  <Image
                    src={banner.imageUrl}
                    alt={banner.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                  />
                  <div className="relative flex min-h-[220px] flex-col justify-end bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.75)_100%)] p-5 text-white">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {banner.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      {banner.subtitle}
                    </p>
                    <Link
                      href={banner.cta.href}
                      className="mt-4 inline-flex text-sm font-medium text-white underline-offset-4 hover:underline"
                    >
                      {banner.cta.label}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Member since</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {new Intl.DateTimeFormat("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(accountSummary.user.memberSince))}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Personalized modules can shift over time without needing UI rewrites.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Account summary</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                {accountSummary.user.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {accountSummary.user.email} | {accountSummary.user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
