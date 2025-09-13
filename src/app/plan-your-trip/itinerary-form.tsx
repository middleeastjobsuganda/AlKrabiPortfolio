"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sendMessage } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  message: z.string().min(1, { message: "Message cannot be empty." }),
});

type FormValues = z.infer<typeof formSchema>;

interface Message {
  sender: "user" | "bot";
  text: string;
}

export function ItineraryForm() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const userMessage: Message = { sender: "user", text: data.message };
    setMessages((prev) => [...prev, userMessage]);
    form.reset();
    setIsSubmitting(true);

    const result = await sendMessage(data.message);
    
    if (result.success && result.response) {
      const botMessage: Message = { sender: "bot", text: result.response };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      const errorMessage: Message = { sender: "bot", text: result.error || "An unexpected error occurred." };
      setMessages((prev) => [...prev, errorMessage]);
    }
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>AI Travel Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96 pr-4 mb-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={cn("flex items-start gap-3", msg.sender === "user" ? "justify-end" : "justify-start")}>
                {msg.sender === 'bot' && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback><Bot size={20} /></AvatarFallback>
                  </Avatar>
                )}
                <div className={cn("rounded-lg px-4 py-2 max-w-[80%]", msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted")}>
                  <p className="text-sm">{msg.text}</p>
                </div>
                {msg.sender === 'user' && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback><User size={20} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {isSubmitting && (
                <div className="flex items-start gap-3 justify-start">
                    <Avatar className="w-8 h-8">
                        <AvatarFallback><Bot size={20} /></AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-2 bg-muted">
                        <p className="text-sm">Thinking...</p>
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
          <Input
            {...form.register("message")}
            placeholder="Ask about your next trip..."
            autoComplete="off"
            disabled={isSubmitting}
          />
          <Button type="submit" disabled={isSubmitting}>
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
