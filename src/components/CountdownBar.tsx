import { useState, useEffect } from "react";

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
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

  const today = new Date();
  const dateStr = today.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <div className="w-full bg-[hsl(0,72%,45%)] py-3 px-4 text-center sticky top-0 z-50">
      <p className="font-display font-extrabold text-[hsl(48,100%,50%)] text-sm md:text-base tracking-wide mb-0.5">
        NÃO FECHE OU SAIA
      </p>
      <p className="font-body font-medium text-primary-foreground text-xs md:text-sm">
        Desconto especial só <span className="font-bold text-[hsl(48,100%,50%)]">HOJE</span> nesta página:
      </p>
      <p className="font-body font-medium text-primary-foreground text-xs md:text-sm">
        {dateStr} | Tempo restante:{" "}
        <span className="font-bold text-[hsl(48,100%,50%)]">
          {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
        </span>
      </p>
    </div>
  );
};

export default CountdownBar;
