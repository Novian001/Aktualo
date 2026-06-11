"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLang();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.faq, href: "#faq" },
  ];

  const toggleLang = () => setLocale(locale === "en" ? "id" : "en");

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Acctual home"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg">
              <span className="bg-background text-xs font-bold">A</span>
            </div>
            <span className="text-base font-semibold text-foreground">
              {t.nav.brand}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-foreground-muted",
                  "transition-colors duration-150 hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Lang Toggle */}
            <button
              onClick={toggleLang}
              aria-label={`Switch to ${locale === "en" ? "Indonesian" : "English"}`}
              className={cn(
                "hidden items-center gap-1.5 rounded-md px-2.5 py-1.5 sm:flex",
                "text-xs font-medium text-foreground-muted",
                "transition-colors duration-150 hover:bg-background-muted hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              {locale === "en" ? "EN" : "ID"}
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-md",
                  "text-foreground-muted transition-colors duration-150",
                  "hover:bg-background-muted hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            )}

            {/* Login */}
            <a
              href="#"
              className={cn(
                "hidden h-9 items-center rounded-md px-4 text-sm font-medium sm:inline-flex",
                "text-foreground-muted transition-colors duration-150 hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              {t.nav.login}
            </a>

            {/* CTA */}
            <Button
              size="lg"
              className="hidden sm:inline-flex text-sm"
              aria-label={t.nav.getStarted}
            >
              {t.nav.getStarted}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-md md:hidden",
                "text-foreground-muted transition-colors hover:bg-background-muted",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={cn(
          "border-t border-border bg-background md:hidden",
          "overflow-hidden transition-all duration-200",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm text-foreground-muted",
                "transition-colors hover:bg-background-muted hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 border-t border-border pt-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-background-muted hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              {locale === "en" ? "EN" : "ID"}
            </button>
          </div>
          <Button size="sm" className="mt-2 w-full justify-center">
            {t.nav.getStarted}
          </Button>
        </div>
      </div>
    </header>
  );
}