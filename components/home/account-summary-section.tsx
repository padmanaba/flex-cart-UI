import type { HomepagePayload } from "@/lib/homepage-data";

type AccountSummarySectionProps = {
  accountSummary: HomepagePayload["accountSummary"];
};

export function AccountSummarySection({
  accountSummary,
}: AccountSummarySectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_50%,#eff6ff_100%)] p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">
              {accountSummary.title}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {accountSummary.user.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {accountSummary.user.email}
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-muted-foreground">
            Role: <span className="font-medium text-foreground">{accountSummary.user.role}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {accountSummary.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/70 bg-background/85 p-5"
            >
              <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
