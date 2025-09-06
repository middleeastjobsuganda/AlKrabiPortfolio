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
    <footer className="border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Plane className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Al Krabi Travel and Opportunities Agency. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <InstagramIcon className="h-5 w-5" />
            </a>
        </div>
      </div>
    </footer>
  );
}
