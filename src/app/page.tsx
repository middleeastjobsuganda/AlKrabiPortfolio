import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Plane, Globe, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Hassan Al-Sayed",
    title: "Project Manager, Dubai",
    quote: "Al Krabi found me the perfect role in Dubai. Their process was seamless, and they provided support at every step. I couldn't be happier with my new career path.",
    avatar: "https://picsum.photos/100/100?random=8",
    hint: "man portrait"
  },
  {
    name: "Aisha Khan",
    title: "Explorer, Bali",
    quote: "The Bali trip was a dream come true! Every detail was perfectly planned. It was a truly mystical and rejuvenating experience, all thanks to the Al Krabi team.",
    avatar: "https://picsum.photos/100/100?random=9",
    hint: "woman smiling"
  },
];


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

      <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Al Krabi?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We are dedicated to providing you with unparalleled service and access to a world of possibilities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Global Network</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Our extensive network of partners across the globe gives you access to exclusive travel deals and premier job opportunities.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Our team of experienced travel experts and career advisors are here to support you at every step of your journey.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Personalized Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We tailor our services to your unique aspirations, ensuring a personalized experience that exceeds your expectations.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Real stories from people who've traveled and grown with us.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
