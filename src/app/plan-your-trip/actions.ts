"use server";

import { chat } from "@/ai/flows/chat";

export async function sendMessage(message: string) {
    try {
        const response = await chat(message);
        return { success: true, response };
    } catch (error) {
        console.error(error);
        return { success: false, error: "An error occurred. Please try again." };
    }
}
