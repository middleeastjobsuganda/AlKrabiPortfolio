import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, BookOpen, HeartHandshake } from "lucide-react";

const opportunities = [
  {
    title: "English Teacher in Tokyo, Japan",
    category: "Education",
    icon: BookOpen,
    description: "Immerse yourself in Japanese culture while teaching English to enthusiastic students. One-year contract with housing support.",
    image: "https://picsum.photos/600/400?random=4",
    hint: "Tokyo city",
    tags: ["Teaching", "Japan", "Full-Time"],
  },
  {
    title: "Software Engineer in Berlin, Germany",
    category: "Job",
    icon: Briefcase,
    description: "Join a vibrant tech startup in the heart of Europe. We are looking for skilled frontend developers with React experience. Visa sponsorship available.",
    image: "https://picsum.photos/600/400?random=5",
    hint: "Berlin tech",
    tags: ["Tech", "Germany", "Visa Sponsored"],
  },
  {
    title: "Conservation Volunteer in Costa Rica",
    category: "Volunteer",
    icon: HeartHandshake,
    description: "Contribute to rainforest conservation efforts. Work with local biologists to protect endangered wildlife and restore natural habitats.",
    image: "https://picsum.photos/600/400?random=6",
    hint: "Costa Rica rainforest",
    tags: ["Conservation", "Costa Rica", "Volunteer"],
  },
  {
    title: "Marketing Intern in Singapore",
    category: "Job",
    icon: Briefcase,
    description: "Gain valuable marketing experience in a fast-paced, international business hub. Six-month paid internship with a leading digital agency.",
    image: "https://picsum.photos/600/400?random=7",
    hint: "Singapore skyline",
    tags: ["Marketing", "Singapore", "Internship"],
  },
  {
    title: "Study Abroad: Fine Arts in Florence, Italy",
    category: "Education",
    icon: BookOpen,
    description: "A semester-long program for art students. Study Renaissance art history and develop your skills in painting and sculpture in the city of masters.",
    image: "https://picsum.photos/600/400?random=8",
    hint: "Florence art",
    tags: ["Art", "Italy", "Study Abroad"],
  },
  {
    title: "Community Health Worker in Rural Ghana",
    category: "Volunteer",
    icon: HeartHandshake,
    description: "Work alongside local healthcare providers to run health education workshops and provide basic medical support in underserved communities.",
    image: "https://picsum.photos/600/400?random=9",
    hint: "Ghana community",
    tags: ["Healthcare", "Ghana", "Volunteer"],
  },
];

export default function OpportunitiesPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
          Global Opportunities
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Your next career move, educational journey, or volunteer experience is waiting for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {opportunities.map((opportunity, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src={opportunity.image}
                alt={opportunity.title}
                fill
                className="object-cover"
                data-ai-hint={opportunity.hint}
                width={600}
                height={400}
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <opportunity.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">{opportunity.category}</span>
              </div>
              <CardTitle className="font-headline text-xl">{opportunity.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{opportunity.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
               <div className="flex flex-wrap gap-2">
                {opportunity.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <Button asChild className="w-full">
                <Link href="/contact">Learn More & Apply</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
