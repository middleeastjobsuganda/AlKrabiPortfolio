import { ItineraryForm } from "./itinerary-form";
import { Wand2 } from "lucide-react";

export default function PlanYourTripPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Wand2 className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
          Personalized Itinerary Planner
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Tell us your travel dreams, and our AI will craft a unique itinerary just for you.
        </p>
      </div>
      
      <ItineraryForm />
    </div>
  );
}
