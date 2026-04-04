import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import type { HomepagePayload } from "@/lib/homepage-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  welcomeBanner: HomepagePayload["welcomeBanner"];
  accountSummary: HomepagePayload["accountSummary"];
};

export function HeroSection({
  welcomeBanner,
  accountSummary,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(240,171,0,0.24),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,1),_rgba(255,249,235,0.82))]" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="space-y-8">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            <Sparkles className="size-3.5" />
            Launch-ready storefront starter
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
                className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm"
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

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-border/70 bg-card p-5 shadow-sm sm:col-span-2">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#111827_0%,#374151_45%,#f59e0b_100%)] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                Member Snapshot
              </p>
              <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight">
                {accountSummary.user.name}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                {accountSummary.user.email} | {accountSummary.user.role}
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Member since</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">
              {new Intl.DateTimeFormat("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }).format(new Date(accountSummary.user.memberSince))}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Account-level personalization now comes from the homepage payload.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Next stop</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">My Account</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Keep orders, wishlist, and saved addresses one tap away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
