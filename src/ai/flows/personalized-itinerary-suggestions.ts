// src/ai/flows/personalized-itinerary-suggestions.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized travel itineraries based on user input.
 *
 * The flow takes user preferences such as budget, travel dates, and interests to suggest tailored travel itineraries.
 * It exports the PersonalizedItineraryInput and PersonalizedItineraryOutput types, as well as the generatePersonalizedItinerary function to trigger the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedItineraryInputSchema = z.object({
  budget: z.number().describe('The user\'s budget for the trip in USD.'),
  travelDates: z.string().describe('The desired travel dates (e.g., MM/DD/YYYY - MM/DD/YYYY).'),
  preferences: z.string().describe('The user\'s preferences and interests (e.g., beaches, hiking, museums).'),
});
export type PersonalizedItineraryInput = z.infer<typeof PersonalizedItineraryInputSchema>;

const PersonalizedItineraryOutputSchema = z.object({
  itinerary: z.string().describe('A detailed travel itinerary based on the user\'s input.'),
});
export type PersonalizedItineraryOutput = z.infer<typeof PersonalizedItineraryOutputSchema>;

export async function generatePersonalizedItinerary(input: PersonalizedItineraryInput): Promise<PersonalizedItineraryOutput> {
  return personalizedItineraryFlow(input);
}

const personalizedItineraryPrompt = ai.definePrompt({
  name: 'personalizedItineraryPrompt',
  input: {schema: PersonalizedItineraryInputSchema},
  output: {schema: PersonalizedItineraryOutputSchema},
  prompt: `You are a travel agent specializing in creating personalized travel itineraries.

  Based on the user's budget, travel dates, and preferences, create a detailed travel itinerary.

  Budget: {{budget}}
  Travel Dates: {{travelDates}}
  Preferences: {{preferences}}

  Itinerary:`, //The output should be a detailed itinerary
});

const personalizedItineraryFlow = ai.defineFlow(
  {
    name: 'personalizedItineraryFlow',
    inputSchema: PersonalizedItineraryInputSchema,
    outputSchema: PersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await personalizedItineraryPrompt(input);
    return output!;
  }
);
