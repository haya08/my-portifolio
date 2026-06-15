import { ChevronDown } from "lucide-react";

export const ScrollDown = () => {
  return <div className="z-20 absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800">
    <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground">
      <span className="text-sm uppercase tracking-wider">Scroll</span>
      <ChevronDown className="w-6 h-6 animate-bounce" />
    </a>

  </div>
};