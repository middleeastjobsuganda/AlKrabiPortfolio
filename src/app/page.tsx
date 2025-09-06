import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Plane, Wand2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Tropical beach background"
          fill
          className="object-cover -z-10 brightness-75"
          data-ai-hint="tropical beach"
          priority
        />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
              Your Journey, Your Opportunity
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Al Krabi Travel and Opportunities Agency opens doors to unforgettable adventures and life-changing global experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/travel">Explore Travel Packages</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/opportunities">Find Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-full">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Curated Travel</h3>
              <p className="text-muted-foreground">
                Discover breathtaking destinations with our expertly crafted travel packages, designed for every type of adventurer.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-full">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Global Opportunities</h3>
              <p className="text-muted-foreground">
                Unlock your potential with international job placements, educational programs, and volunteer projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
