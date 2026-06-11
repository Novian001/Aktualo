"use client";

import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t } = useLang();
  const { links, tagline, copyright } = t.footer;

  const sections = [
    { label: links.product.label, items: links.product.items },
    { label: links.company.label, items: links.company.items },
    { label: links.legal.label, items: links.legal.items },
  ];

  return (
    <footer
      role="contentinfo"
      className={cn(
        "border-t border-border bg-background-raised",
        "py-12 sm:py-16"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <a
              href="#"
              className="mb-3 flex w-fit items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Acctual home"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground">
                <span className="text-[10px] font-bold text-background">A</span>
              </div>
              <span className="text-sm font-semibold text-foreground">
                {t.nav.brand}
              </span>
            </a>
            <p className="max-w-40 text-xs leading-relaxed text-foreground-muted">
              {tagline}
            </p>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <nav key={section.label} aria-label={`${section.label} links`}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground">
                {section.label}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={cn(
                        "rounded text-xs text-foreground-muted",
                        "transition-colors duration-150",
                        "hover:text-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      )}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-foreground-muted">{copyright}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              className={cn(
                "rounded text-xs text-foreground-muted",
                "transition-colors hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-label="Acctual on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              className={cn(
                "rounded text-xs text-foreground-muted",
                "transition-colors hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-label="Acctual on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}