"use server";

import { z } from "zod";
import {
  generatePersonalizedItinerary,
  type PersonalizedItineraryOutput,
} from "@/ai/flows/personalized-itinerary-suggestions";

const ItineraryRequestSchema = z.object({
  budget: z.coerce.number().positive({ message: "Budget must be a positive number." }),
  travelDates: z.string().min(1, { message: "Travel dates are required." }),
  preferences: z.string().min(10, { message: "Preferences must be at least 10 characters long." }),
});

export type ItineraryFormState = {
  success: boolean;
  message: string;
  data?: PersonalizedItineraryOutput | null;
};

export async function handleItineraryRequest(
  prevState: ItineraryFormState,
  formData: FormData
): Promise<ItineraryFormState> {
  
  const validatedFields = ItineraryRequestSchema.safeParse({
    budget: formData.get("budget"),
    travelDates: formData.get("travelDates"),
    preferences: formData.get("preferences"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
      data: null,
    };
  }

  try {
    const result = await generatePersonalizedItinerary(validatedFields.data);
    return {
      success: true,
      message: "Itinerary generated successfully.",
      data: result,
    };
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
      data: null,
    };
  }
}
