'use server';
/**
 * @fileOverview A simple chat flow.
 *
 * - chat - A function that handles the chat process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: z.string()},
  prompt: `You are a friendly travel assistant for Al Krabi Travel and Opportunities Agency.
Your goal is to help users plan their trips. Be conversational and helpful.

User message: {{{prompt}}}`,
});

export async function chat(message: string): Promise<string> {
  const {output} = await prompt(message);
  return output ?? "I'm sorry, I couldn't process your request.";
}
