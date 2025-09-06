import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const travelPackages = [
  {
    title: "Mystical Bali Escape",
    destination: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    description: "Experience the spiritual heart of Bali. Visit ancient temples, lush rice paddies, and enjoy world-class yoga retreats.",
    image: "https://picsum.photos/600/400?random=10",
    hint: "Bali temple",
    tags: ["Spiritual", "Relaxation", "Culture"],
  },
  {
    title: "Parisian Romance",
    destination: "Paris, France",
    duration: "5 Days / 4 Nights",
    description: "Discover the magic of Paris. Enjoy romantic walks by the Seine, visit iconic landmarks, and indulge in gourmet French cuisine.",
    image: "https://picsum.photos/600/400?random=11",
    hint: "Paris Eiffel Tower",
    tags: ["Romance", "City Break", "Art"],
  },
  {
    title: "Andean Adventure",
    destination: "Peru",
    duration: "10 Days / 9 Nights",
    description: "Trek the famous Inca Trail to Machu Picchu, explore the vibrant city of Cusco, and discover the secrets of the Sacred Valley.",
    image: "https://picsum.photos/600/400?random=12",
    hint: "Machu Picchu",
    tags: ["Adventure", "Hiking", "History"],
  },
  {
    title: "Serengeti Safari",
    destination: "Tanzania",
    duration: "8 Days / 7 Nights",
    description: "Witness the Great Migration in the Serengeti. A once-in-a-lifetime opportunity to see Africa's most iconic wildlife in its natural habitat.",
    image: "https://picsum.photos/600/400?random=13",
    hint: "safari animals",
    tags: ["Wildlife", "Safari", "Adventure"],
  },
  {
    title: "Japanese Wonders",
    destination: "Japan",
    duration: "12 Days / 11 Nights",
    description: "Journey from the bustling streets of Tokyo to the serene temples of Kyoto. Experience the perfect blend of ancient tradition and futuristic technology.",
    image: "https://picsum.photos/600/400?random=14",
    hint: "Kyoto temple",
    tags: ["Culture", "City & Nature", "Food"],
  },
  {
    title: "Greek Island Hopping",
    destination: "Greece",
    duration: "9 Days / 8 Nights",
    description: "Sail the turquoise waters of the Aegean Sea. Explore the stunning landscapes of Santorini, Mykonos, and Crete.",
    image: "https://picsum.photos/600/400?random=15",
    hint: "Santorini Greece",
    tags: ["Beach", "Relaxation", "Sailing"],
  },
];

export default function TravelPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
          Discover Our Travel Packages
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Hand-picked destinations and curated experiences for the modern traveler. Your next unforgettable journey starts here.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelPackages.map((pkg, index) => (
          <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56 w-full">
                <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    data-ai-hint={pkg.hint}
                    width={600}
                    height={400}
                />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{pkg.title}</CardTitle>
              <CardDescription>{pkg.destination} - {pkg.duration}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{pkg.description}</p>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {pkg.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">{tag}</Badge>
                ))}
              </div>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
