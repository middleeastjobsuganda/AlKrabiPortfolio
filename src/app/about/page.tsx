import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ali Krabi",
    role: "Founder & CEO",
    avatar: "https://picsum.photos/200/200?random=1",
    bio: "With a passion for exploration and connecting cultures, Ali founded Al Krabi to make global travel and opportunities accessible to everyone.",
    hint: "man smiling"
  },
  {
    name: "Fatima Ahmed",
    role: "Head of Travel",
    avatar: "https://picsum.photos/200/200?random=2",
    bio: "An expert globetrotter, Fatima curates our unique travel packages, ensuring every trip is a memorable adventure.",
    hint: "woman outdoors"
  },
  {
    name: "Youssef Chen",
    role: "Director of Opportunities",
    avatar: "https://picsum.photos/200/200?random=3",
    bio: "Youssef builds bridges for professionals and students, finding life-changing opportunities across the globe.",
    hint: "man professional"
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            About Al Krabi
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of explorers, connectors, and dreamers dedicated to opening up the world for you.
          </p>
        </div>

        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://picsum.photos/1200/400"
            alt="Diverse group of people traveling"
            fill
            className="object-cover"
            data-ai-hint="diverse people travel"
          />
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
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
  );
}
