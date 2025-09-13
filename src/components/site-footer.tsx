import Link from "next/link";
import { Plane } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-3.7.1-6.9-.7-9.3-2.4-2.3 2.8-1.2 6.3-4.1 8.5-2.2-.4-4.6-2-5.8-4.2.1 2.7 1.8 5.1 4.2 6.4-1.9.1-3.7-.9-5.1-2.4.1 3.2 2.3 6.1 5.4 7.2-2 .3-4.1.2-6.1-.8 1.9 3.4 5.2 6.1 9.3 6.5-3.3 2.6-7.5 4.1-12.1 4.1-1.3 0-2.6-.1-3.9-.4 4.8 3.1 10.5 4.9 16.6 4.9 11.1 0 17.2-9.2 17.2-17.2 0-.3 0-.5 0-.8.9-.6 1.7-1.4 2.4-2.3" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);


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
              <li><Link href="/opportunities" className="text-sm text-muted-foreground hover:text-primary">Opportunities</Link></li>
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
