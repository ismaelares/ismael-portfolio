import { ChevronsDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello, </span>
            <span className="opacity-0 animate-fade-in-delay-1"> I´m </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              Ismael
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Lares
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            varius aliquet ante, vel accumsan libero imperdiet fringilla. Nulla
            vitae consequat lacus. Pellentesque est nisl, congue nec tincidunt
            vitae, lacinia vel est. Aenean eu posuere ex. Nam ultrices
            consectetur pharetra. Donec venenatis justo nec nisi pretium, sit
            amet finibus augue rhoncus. Aliquam dignissim bibendum eros. Nulla
            vitae tempor eros, ut sagittis leo.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ChevronsDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
