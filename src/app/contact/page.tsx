import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
          Get in Touch
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          We're here to help you plan your next adventure or career move. Reach out to us with any questions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 font-headline">Contact Us</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
            <h3 className="text-2xl font-bold font-headline">Our Office</h3>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-semibold">Al Krabi Agency</h4>
                    <p className="text-muted-foreground">123 Travel Lane, Adventure City, 90210</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:alkrabiagency@email.com" className="text-muted-foreground hover:text-primary">alkrabiagency@email.com</a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="https://wa.me/+971526574124" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">+971 52 657 4124</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
