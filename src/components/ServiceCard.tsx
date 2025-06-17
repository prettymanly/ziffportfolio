import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  roleLine: string;
  tagline: string;
  summary: string;
  questionsWeExplore: string[];
  thingsWeMightDo: string[];
  idealFor: string[];
  links: { label: string; href: string }[];
}

export function ServiceCard({
  title,
  roleLine,
  tagline,
  summary,
  questionsWeExplore,
  thingsWeMightDo,
  idealFor,
  links,
}: ServiceCardProps) {
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <h3 className="text-lg font-bold mb-1">{roleLine}</h3>
        <div className="text-base text-muted-foreground mb-2">{tagline}</div>
        <div className="text-xl font-semibold mb-2">{title}</div>
      </CardHeader>
      <CardContent>
        <div className="mb-3 text-sm text-foreground">{summary}</div>
        <div className="mb-2">
          <span className="font-semibold text-sm">Questions We Explore</span>
          <ul className="list-disc pl-6 text-xs mt-1">
            {questionsWeExplore.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-sm">Things We Might Do</span>
          <ul className="list-disc pl-6 text-xs mt-1">
            {thingsWeMightDo.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-sm">Ideal For</span>
          <ul className="list-disc pl-6 text-xs mt-1">
            {idealFor.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {links.map((link, i) => (
          <Button asChild key={i} variant="outline" size="sm">
            <a href={link.href}>{link.label}</a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}

// Example usage (remove or replace with real data as needed)
export function ExampleServiceCard() {
  return (
    <ServiceCard
      title="Service Design + Research"
      roleLine="Service Design + Research"
      tagline="Making Sense, Together"
      summary="Strategy and research work that needs fresh perspective."
      questionsWeExplore={["What's working?", "Where are the real opportunities?", "How do we make sense of what we're seeing?"]}
      thingsWeMightDo={["Workshops", "Research", "Strategy"]}
      idealFor={["Projects", "Orgs", "Teams"]}
      links={[
        { label: "View Projects", href: "#" },
        { label: "Enquire", href: "mailto:hello@example.com" },
      ]}
    />
  );
} 