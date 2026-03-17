import { useState, useEffect } from "react";

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 16, seconds: 0 });
  const [endTime] = useState(() => Date.now() + 16 * 60 * 1000);

  useEffect(() => {
    const update = () => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        setTimeLeft({ minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        minutes: Math.floor(diff / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  const pad = (n: number) => String(n).padStart(2, "0");


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
          {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
        </span>
      </p>
    </div>
  );
};

export default CountdownBar;
