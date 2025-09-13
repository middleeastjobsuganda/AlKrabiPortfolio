
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plane, Globe, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Gallery4 } from "@/components/ui/gallery4";

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

const teamMembers = [
    { name: 'Vivek Thakur', role: 'Team Member', avatar: 'https://raw.githubusercontent.com/middleeastjobsuganda/middleeastjobspicture/main/240_F_141842346_rhbK25DD8qs5l3yLMxu3wQ4q6O410aQi.jpg', bio: 'Dedicated to connecting you with global opportunities.', hint: 'man professional' },
    { name: 'Kiramat Shah', role: 'Team Member', avatar: 'https://github.com/middleeastjobsuganda/middleeastjobspicture/blob/main/240_F_197755724_HmIqFoWFmD3jbdMyYsZ10KLiTQj1PwUW.jpg?raw=true', bio: 'Passionate about helping you find your next career move.', hint: 'man smiling' },
    { name: 'Abhijit Nair', role: 'Team Member', avatar: 'https://github.com/middleeastjobsuganda/middleeastjobspicture/blob/main/240_F_285789664_ctg73N1EXAX3EZ1LlkBkneoqJJTPGutj.jpg?raw=true', bio: 'Committed to providing personalized service and support.', hint: 'man portrait' },
    { name: 'Sanju Paulson', role: 'Team Member', avatar: 'https://github.com/middleeastjobsuganda/middleeastjobspicture/blob/main/240_F_464874339_Rc7McGaz327ljzgnWgke4crdDAdI2Yu2.jpg?raw=true', bio: 'Dedicated to connecting you with global opportunities.', hint: 'man professional' },
    { name: 'Mohammad Farrukh', role: 'Team Member', avatar: 'https://github.com/middleeastjobsuganda/middleeastjobspicture/blob/main/240_F_87480778_MLwEwiU81VR3aaZsAQHru7K14Xr025WF.jpg?raw=true', bio: 'Committed to providing personalized service and support.', hint: 'man smiling' },
];

const galleryItems = [
    {
      id: "qatar",
      title: "Qatar",
      description: "A hub of modern architecture and traditional souqs.",
      href: "/contact",
      image: "https://github.com/middleeastjobsuganda/middleeastjobscountrypicture/blob/main/qatar.jpg?raw=true",
    },
    {
      id: "saudi-arabia",
      title: "Saudi Arabia",
      description: "A country of vast deserts and ancient history.",
      href: "/contact",
      image: "https://github.com/middleeastjobsuganda/middleeastjobscountrypicture/blob/main/saudi.jpg?raw=true",
    },
    {
      id: "uae",
      title: "United Arab Emirates",
      description: "Home to futuristic cities and luxury shopping.",
      href: "/contact",
      image: "https://github.com/middleeastjobsuganda/middleeastjobscountrypicture/blob/main/uae.jpg?raw=true",
    },
    {
      id: "bahrain",
      title: "Bahrain",
      description: "An island nation with a rich history in trade.",
      href: "/contact",
      image: "https://github.com/middleeastjobsuganda/middleeastjobscountrypicture/blob/main/bahrain.jpg?raw=true",
    },
    {
      id: "kuwait",
      title: "Kuwait",
      description: "Known for its modern architecture and cultural institutions.",
      href: "/contact",
      image: "https://github.com/middleeastjobsuganda/middleeastjobscountrypicture/blob/main/KUWAIT.jpg?raw=true",
    },
     {
      id: "oman",
      title: "Oman",
      description: "A land of stunning landscapes, from mountains to coasts.",
      href: "/contact",
      image: "https://github.com/middleeastjobsuganda/middleeastjobscountrypicture/blob/main/oman.jpg?raw=true",
    },
  ];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://github.com/middleeastjobsuganda/middleeastjobspicture/blob/main/240_F_328706481_gw8aHygLpOqPXdcBMr1VfPsNSL03z8dV.jpg?raw=true"
          alt="Vibrant cityscape at night"
          fill
          className="object-cover -z-10 brightness-75"
          data-ai-hint="cityscape night"
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <Plane className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-headline">Curated Travel</h3>
            <p className="text-muted-foreground text-sm">
              Discover breathtaking destinations with our expertly crafted travel packages.
            </p>
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
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-3">
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

      <Gallery4 
        title="Countries we operate in"
        description="We have a strong presence and deep connections in these key Middle Eastern locations, offering a gateway to vibrant cultures and thriving economies."
        items={galleryItems}
      />

       <section id="about-us" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
                <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                    About Al Krabi
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    We are a passionate team of explorers, connectors, and dreamers dedicated to opening up the world for you.
                </p>
                </div>
                <div>
                <Card>
                    <CardHeader>
                    <CardTitle className="font-headline text-3xl">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg text-muted-foreground space-y-4">
                    <p>
                        At Al Krabi Travel and Opportunities Agency, our mission is to seamlessly blend the thrill of discovery with the pursuit of personal and professional growth. We believe that travel is more than just visiting new places; it's about experiencing new cultures, forging connections, and discovering oneself.
                    </p>
                    <p>
                        We are committed to providing meticulously planned travel experiences and curated global opportunities that inspire, educate, and empower individuals to broaden their horizons and achieve their full potential.
                    </p>
                    </CardContent>
                </Card>
                </div>

                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                        Meet Our Team
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                        The driving force behind your next great adventure.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
                        {teamMembers.map((member) => (
                        <Card key={member.name} className="text-center">
                            <CardContent className="pt-6">
                            <Avatar className="w-16 h-16 mx-auto mb-4">
                                <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                            <p className="text-sm text-primary">{member.role}</p>
                            <p className="mt-2 text-muted-foreground text-sm">{member.bio}</p>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </div>
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
