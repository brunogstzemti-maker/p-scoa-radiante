import AnimateOnScroll from "./AnimateOnScroll";
import { Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimateOnScroll>
          <div className="bg-gradient-gold rounded-[40px] p-8 md:p-14 text-center shadow-gold">
            <div className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-body text-xs font-bold px-5 py-1.5 rounded-full mb-4">
              <Star className="w-3.5 h-3.5 inline mr-1 fill-current" /> O PACK MAIS VENDIDO
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
              ÚLTIMA CHAMADA!
            </h2>
            <p className="text-primary-foreground/80 font-body mb-2">+ AUTONOMIA + PRATICIDADE + ECONOMIA</p>
            <div className="my-6">
              <p className="text-primary-foreground/70 font-body line-through text-lg">de R$ 97,00</p>
              <p className="text-primary-foreground font-body text-sm">por</p>
              <p className="text-6xl md:text-7xl font-display font-bold text-primary-foreground">R$ 27,90</p>
              <p className="text-primary-foreground/80 font-body text-sm mt-1">Ou 6x R$ 5,24</p>
            </div>
            <a href="#" className="inline-block bg-primary-foreground text-gold-dark font-body font-bold text-xl px-14 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse-gold">
              Quero meu cardápio! 🐣
            </a>
            <p className="mt-6 text-primary-foreground/70 font-body text-sm">
              Temos garantia, mas tenho certeza que você nem vai precisar dela!
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FinalCTASection;
