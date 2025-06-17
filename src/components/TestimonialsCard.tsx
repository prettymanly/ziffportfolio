import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto my-8">
      <CardContent className="p-6">
        <blockquote className="italic text-muted-foreground mb-4">
          "Whether you're building something new or fixing what's broken, it starts with understanding. I help teams uncover the messy, nuanced content behind a challenge: what people are really doing, feeling, deciding, so you're not designing in the dark. This is immersive, in-field sensemaking that leads to sharper decisions, not just slick decks."
        </blockquote>
        <div className="text-xs text-muted-foreground">Name, Role, Company</div>
      </CardContent>
    </Card>
  );
} 