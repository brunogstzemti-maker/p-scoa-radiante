import { useState, useEffect } from "react";

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set countdown to end of today
    const getEndOfDay = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      return end.getTime() - now.getTime();
    };

    const update = () => {
      const diff = getEndOfDay();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const today = new Date().toLocaleDateString("pt-BR");

  return (
    <div className="w-full bg-destructive py-3 px-4 text-center sticky top-0 z-50">
      <p className="font-display font-extrabold text-primary-foreground text-sm md:text-base tracking-wide">
        NÃO FECHE OU SAIA
      </p>
      <p className="font-body text-primary-foreground text-xs md:text-sm mt-0.5">
        Desconto especial só{" "}
        <span className="font-bold text-[hsl(48,100%,55%)]">HOJE</span>{" "}
        nesta página: {today} | Tempo restante:{" "}
        <span className="text-[hsl(48,100%,55%)] font-bold">
          {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
        </span>
      </p>
    </div>
  );
};

export default CountdownBar;
