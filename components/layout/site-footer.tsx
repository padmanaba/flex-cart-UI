import Link from "next/link";

import type { HomepagePayload } from "@/lib/homepage-data";

type SiteFooterProps = {
  header: HomepagePayload["header"];
  footer: HomepagePayload["footer"];
};

export function SiteFooter({ header, footer }: SiteFooterProps) {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              {header.logo
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
            <span className="text-lg font-semibold tracking-tight">{header.logo}</span>
          </Link>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            A dynamic storefront shell connected to homepage content from your API.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {footer.links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-3 text-sm text-muted-foreground">
          {footer.socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
