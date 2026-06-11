"use client";

import {
  FileText,
  Zap,
  BarChart2,
  Users,
  RefreshCw,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Zap,
  BarChart2,
  Users,
  RefreshCw,
  Shield,
};

export function FeaturesSection() {
  const { t } = useLang();

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge className="mb-4">{t.features.badge}</Badge>
          <h2
            id="features-heading"
            className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl"
          >
            {t.features.headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < t.features.headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-base leading-relaxed text-foreground-muted">
            {t.features.subheadline}
          </p>
        </div>

        {/* Feature grid */}
        <ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Features list"
        >
          {t.features.list.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <li
                key={i}
                className={cn(
                  "group relative rounded-2xl border border-border bg-card p-6",
                  "transition-all duration-200",
                  "hover:border-border-strong hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                )}
              >
                <div
                  className={cn(
                    "mb-4 flex h-9 w-9 items-center justify-center rounded-xl",
                    "border border-border bg-muted transition-colors duration-200",
                    "group-hover:bg-foreground group-hover:text-background"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  {feature.desc}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}