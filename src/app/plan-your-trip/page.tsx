import { ItineraryForm } from "./itinerary-form";

export default function PlanYourTripPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
          Plan Your Trip with AI
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Our intelligent assistant is here to help you craft the perfect journey. Just ask!
        </p>
      </div>
      <ItineraryForm />
    </div>
  );
}
