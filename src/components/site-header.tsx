"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Plane, Mail, Bot } from "lucide-react";

const navItems = [
  { href: "/travel", label: "Travel", icon: Plane },
  { href: "/plan-your-trip", label: "Plan Your Trip", icon: Bot },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg sm:inline-block">
              Al Krabi
            </span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background">
              <SheetHeader className="flex-row justify-between items-center space-y-0 mb-6 pr-6">
                <SheetTitle>
                  <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <Plane className="h-6 w-6 text-primary" />
                    <span className="ml-2 font-bold font-headline text-lg">Al Krabi</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-2 pr-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
