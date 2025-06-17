import { Card, CardContent } from "@/components/ui/card";

export function IntroCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl mx-auto my-8">
      <Card className="flex-1 min-h-[180px] flex items-center justify-center">
        <CardContent className="flex flex-col items-center justify-center h-full w-full p-6">
          <span className="text-sm text-muted-foreground">INFO</span>
          <span className="mt-8 font-semibold">ZIFF LAU<br/>LIKES HATS</span>
        </CardContent>
      </Card>
      <Card className="flex-1 min-h-[180px] flex items-center justify-center overflow-hidden">
        <CardContent className="flex items-center justify-center h-full w-full p-0">
          <div className="w-full h-40 bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">[Image]</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 