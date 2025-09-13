import Link from "next/link";
import { Plane } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline">Al Krabi</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Opening doors to unforgettable adventures and life-changing global experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/travel" className="text-sm text-muted-foreground hover:text-primary">Travel</Link></li>
              <li><Link href="/plan-your-trip" className="text-sm text-muted-foreground hover:text-primary">Plan Your Trip</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/#about-us" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold tracking-wider text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:alkrabiagency@email.com" className="hover:text-primary">alkrabiagency@email.com</a></li>
              <li><a href="tel:+971526574124" className="hover:text-primary">+971 52 657 4124</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Al Krabi Travel and Opportunities Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
