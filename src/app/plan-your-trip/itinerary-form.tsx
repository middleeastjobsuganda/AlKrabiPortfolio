"use client";

import { useActionState, useFormStatus } from "react-dom";
import { handleItineraryRequest, type ItineraryFormState } from "./actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Rocket, Bot } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating...
        </>
      ) : (
        <>
          <Rocket className="mr-2 h-5 w-5" />
          Generate My Itinerary
        </>
      )}
    </Button>
  );
}

const initialState: ItineraryFormState = {
  success: false,
  message: "",
  data: null,
};

export function ItineraryForm() {
  const [state, formAction] = useActionState(handleItineraryRequest, initialState);
  const { toast } = useToast();
  const { pending } = useFormStatus();

  useEffect(() => {
    if (!pending && state.message && !state.success) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, pending, toast]);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Your Travel Details</CardTitle>
          <CardDescription>
            Provide the details below to get a personalized plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget (USD)</Label>
                <Input id="budget" name="budget" type="number" placeholder="e.g., 2000" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelDates">Travel Dates</Label>
                <Input id="travelDates" name="travelDates" placeholder="e.g., 07/20/2024 - 07/27/2024" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferences">Preferences & Interests</Label>
              <Textarea
                id="preferences"
                name="preferences"
                placeholder="e.g., I love historical sites, relaxing on beaches, and trying local food. I'm traveling with my partner."
                className="min-h-[120px]"
                required
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        {pending && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot />
                Generating Your Itinerary...
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[300px]" />
                <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        )}
        {state.success && state.data && (
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Bot className="text-primary"/>
                Your Personalized Itinerary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none whitespace-pre-wrap">
                {state.data.itinerary}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
