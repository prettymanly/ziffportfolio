import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-start py-6 px-4 md:px-12 w-full max-w-5xl mx-auto">
      <div className="flex flex-col gap-1 text-xs text-muted-foreground">
        <span>GLOBWIDE</span>
        <span>ABOUT  ZIFF</span>
        <span>LINKEDIN</span>
      </div>
      <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
        <span>CONTACT</span>
        <span>ZIFF_MAIL@GMAIL.COM</span>
        <span>+1222...1237</span>
      </div>
    </header>
  );
} 