"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Background decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      {/* Gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-100 w-200 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--bg-muted) 0%, transparent 70%)",
          opacity: 0.6,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <Badge variant="success" className="mb-6 animate-fade-in">
            <CheckCircle className="h-3 w-3" aria-hidden="true" />
            {t.hero.badge}
          </Badge>

          {/* Headline */}
          <h1
            className={cn(
              "mb-6 text-4xl font-bold leading-[1.1] tracking-tight",
              "text-foreground sm:text-5xl lg:text-[56px]",
              "animate-slide-up"
            )}
          >
            {t.hero.headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < t.hero.headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "mb-8 max-w-xl text-base leading-relaxed text-foreground-muted",
              "sm:text-lg",
              "animate-[slide-up_0.5s_ease-out_0.1s_both]"
            )}
          >
            {t.hero.subheadline}
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "mb-10 flex flex-col items-center gap-3 sm:flex-row",
              "animate-[slide-up_0.5s_ease-out_0.2s_both]"
            )}
          >
            <Button size="lg" className="w-full font-semibold sm:w-auto">
              {t.hero.cta}
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full text-foreground-muted sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Trust indicator */}
          <p
            className={cn(
              "mb-10 text-xs text-foreground-muted",
              "animate-[fade-in_0.5s_ease-out_0.3s_both]"
            )}
          >
            {t.hero.trust}
          </p>

          {/* Stats */}
          <div
            className={cn(
              "grid w-full max-w-sm grid-cols-3 gap-4 sm:max-w-md sm:gap-8",
              "animate-[slide-up_0.5s_ease-out_0.35s_both]"
            )}
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-center text-xs leading-tight text-foreground-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice Preview Mockup */}
        <div
          className={cn(
            "mx-auto mt-16 max-w-3xl",
            "animate-[slide-up_0.6s_ease-out_0.4s_both]"
          )}
          aria-hidden="true"
        >
          <InvoiceMockup />
        </div>
      </div>
    </section>
  );
}

function InvoiceMockup() {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card",
        "shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
      )}
    >
      {/* Browser chrome */}
      <div className="flex h-10 items-center gap-2 border-b border-border bg-background-raised px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="mx-4 flex flex-1 items-center rounded-full bg-muted px-3 h-5">
          <span className="text-[10px] text-foreground-muted">app.acctual.com/invoices/new</span>
        </div>
      </div>

      {/* Invoice UI */}
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 sm:p-8">
        {/* Left: Invoice form preview */}
        <div className="space-y-4">
          <div>
            <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-foreground-muted">
              Invoice #
            </div>
            <div className="flex h-8 items-center rounded-lg border border-border bg-muted px-3">
              <span className="text-xs text-foreground-muted">INV-0042</span>
            </div>
          </div>
          <div>
            <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-foreground-muted">
              Client
            </div>
            <div className="flex h-8 items-center rounded-lg border border-border bg-muted px-3">
              <span className="text-xs text-foreground">Budi Santoso Design</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-foreground-muted">
                Date
              </div>
              <div className="flex h-8 items-center rounded-lg border border-border bg-muted px-3">
                <span className="text-xs text-foreground-muted">Jun 10, 2025</span>
              </div>
            </div>
            <div>
              <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-foreground-muted">
                Due
              </div>
              <div className="flex h-8 items-center rounded-lg border border-border bg-muted px-3">
                <span className="text-xs text-foreground-muted">Jun 24, 2025</span>
              </div>
            </div>
          </div>

          {/* Line items */}
          <div className="mt-2">
            <div className="mb-2 text-[10px] font-medium uppercase tracking-wide text-foreground-muted">
              Items
            </div>
            <div className="space-y-2">
              {[
                { name: "Brand Strategy", qty: 1, price: "$2,000.00" },
                { name: "Logo Design", qty: 3, price: "$1,500.00" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex h-9 items-center justify-between rounded-lg border border-border bg-muted px-3"
                >
                  <span className="text-xs text-foreground">{item.name}</span>
                  <span className="text-xs font-medium text-foreground">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Summary & status */}
        <div className="flex flex-col justify-between gap-4">
          {/* Total card */}
          <div className="rounded-xl border border-border bg-background p-4">
            <div className="mb-1 text-xs text-foreground-muted">Total Due</div>
            <div className="text-3xl font-bold text-foreground">$3,500.00</div>
            <div className="mt-1 text-xs text-foreground-muted">USD · Net 14</div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-foreground-muted">Subtotal</span>
                <span className="text-foreground">$3,500.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-foreground-muted">Tax (0%)</span>
                <span className="text-foreground">$0.00</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 text-xs font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">$3,500.00</span>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Sent", color: "bg-blue-500" },
              { label: "Viewed", color: "bg-yellow-500" },
              { label: "Paid", color: "bg-green-500", active: true },
              { label: "Overdue", color: "bg-red-400" },
            ].map((s) => (
              <div
                key={s.label}
                className={cn(
                  "flex h-8 items-center gap-2 rounded-lg border px-3 text-xs",
                  s.active
                    ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950/50 dark:text-green-400"
                    : "border-border bg-muted text-foreground-muted"
                )}
              >
                <span className={cn("h-2 w-2 shrink-0 rounded-full", s.color)} />
                {s.label}
              </div>
            ))}
          </div>

          {/* Send button */}
          <button className="h-10 w-full rounded-full bg-foreground text-background text-sm font-medium transition-opacity hover:opacity-90">
            Send Invoice
          </button>
        </div>
      </div>
    </div>
  );
}